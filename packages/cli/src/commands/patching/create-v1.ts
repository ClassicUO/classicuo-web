import { Command, Flags, CliUx } from '@oclif/core';
import { flow, pipe } from 'fp-ts/function';
import {
  either as E,
  taskEither as TE,
  array as A,
  option as O,
  map as M,
  set as S,
  readonlyArray as ROA,
  string as Str
} from 'fp-ts';
import { configSchema } from '../../schemas/config';
import {
  execAsync,
  getFilesRecursively,
  isDirectoryF,
  mkdirF,
  normalizeName, readFileAsBuffer,
  readFileAsync, rmDirF,
  sha256sum,
  tryParseJson, writeFileAsync
} from '../../utils/fs';
import path from 'path';
import { existsSync, mkdirSync, rmdirSync, statSync } from 'fs';
import { Patch } from '../../schemas/patch';
import { downloadFile, httpGet } from '../../utils/http';
import { sourceManifestSchema } from '../../schemas/manifest';
import { DiffTool, getWebDiffTool } from '../../utils/exec';

const extensions = ['.mul', '.bin', '.def', '.uop', '.idx', '.rle', '.enu', '.rus', '.mp3']; /* '.bik', '.mp3' */
const uselessFiles = [
  'Anim1024.bin',
  'Anim256.bin',
  'Antx1024.bin',
  'Antx256.bin',
  'Gesture.enu',
  'Gt_0000.enu',
  'Gt_1010.enu',
  'Gt_2000.enu',
  'Gt_2310.enu',
  'Gt_2400.enu',
  'Gt_4000.enu',
  'Gt_5000.enu',
  'Gt_5400.enu',
  'Intloc01.enu',
  'Intrface.def',
  'Intro.enu',
  'Tilehelp.enu',
  'intloc00.enu',
  'intloc11.enu',
  'options.enu',
  'sjis2uni.mul',
  'stitchin.def',
  'string_dictionary.uop',
  'vercfg.bin'
].map(normalizeName);
// let vcdiff: Awaited<ReturnType<typeof VcdiffWasm>>;

export default class CreateV1 extends Command {
  static description = 'Create patches for version 1 of ClassicUO web patching using VCDIFF';

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ];

  static flags = {
    source: Flags.url({
      char: 's',
      description: 'ClassicUO source manifest',
      default: new URL('https://content.zhmodern.com/file/classicuo-content/7.0.95.0/source-manifest.json')
    }),
    sourcePath: Flags.string({
      char: 'i',
      required: true,
      description: 'Directory to store a local copy of the source files to patch against',
    }),
    // flag with no value (-f, --force)
    force: Flags.boolean({ char: 'f' }),
    preserve: Flags.boolean({ char: 'p' }),
  };

  static args = [{ name: 'config', required: true, description: 'shard configuration file' }];

  public async run(): Promise<any> {
    const { args, flags } = await this.parse(CreateV1);

    CliUx.ux.action.start('Synchronising source files')
    await syncSourceFiles(flags.source, flags.sourcePath)();
    CliUx.ux.action.stop()

    return pipe(
      createPatches({
        source: flags.sourcePath,
        configPath: path.resolve(args.config),
        preserve: flags.preserve,
        diffTool: getWebDiffTool(this.config.root)
      }),
      TE.mapLeft(
        (error) => {
          throw error;
        }
      )
    )();
  }
}

const syncSourceFiles = (source: URL, sourceDir: string) =>
  pipe(
    httpGet(source.toString()),
    TE.chain((response) =>
      TE.tryCatch(
        () => sourceManifestSchema.parseAsync(response.data),
        (error) => new Error(`JSON Schema invalid: ${error}`)
      )),
    TE.chainFirst(() => mkdirF(sourceDir)),
    TE.chain((manifest) => pipe(
      manifest.files,
      A.map((file) => {
        const remoteFile = `${manifest.cdnBase}/${file}`;
        const localFile = `${sourceDir}/${file}`;

        return pipe(
          isDirectoryF(path.dirname(localFile)),
          TE.fold(
            () => mkdirF(path.dirname(localFile)),
            (right) => TE.right(right),
          ),
          TE.chain(() => downloadFile(remoteFile, localFile)),
          TE.map((status) => {
            if(status === 200) {
              console.log(`Synced source file ${remoteFile} => ${localFile}: ${status}`);
            }
            return { remoteFile, localFile, status }
          })
        );
      }),
      TE.sequenceArray,
    )),
  )

const mapFiles = (dir: string) => pipe(
  dir,
  getFilesRecursively,
  A.filterMap((p) =>
    extensions.includes(path.extname(p))
      ? O.some([normalizeName(p), p] as [string, string])
      : O.none
  ),
  (entries) => new Map(entries)
);

const compareFiles = (filesMap: Map<string, [p1: string, p2: string]>):
  TE.TaskEither<Error, Map<string, [p1: string, p2: string]>> =>
  pipe(
    [...filesMap.entries()],
    A.map(([key, [p1, p2]]) => TE.tryCatch(
      async () => {
        return sha256sum(await readFileAsync(p1)) !== sha256sum(await readFileAsync(p2))
          ? O.some([key, [p1, p2]] as [string, [p1: string, p2: string]])
          : O.none;
      },
      () => new Error(`Failed to compare hashes for ${p1} => ${p2}`)
    )),
    TE.sequenceArray,
    TE.map(ROA.compact),
    TE.map((entries) => new Map(entries))
  );

const createDictionaryFile = (source: string, dictFile: string) => pipe(
  TE.tryCatch(
    () => execAsync(`zstd --maxdict=1266011 --train ${source}/* -o ${dictFile}`),
    (reason) => new Error(`Failed to generate dictionary ${reason}`)
  ),
  TE.map(() => dictFile)
);

// const createPatchFileWasm = (sourceFile: string, targetFile: string, patchFile: string) =>
//   pipe(
//     readFileAsBuffer(sourceFile),
//     TE.bindTo('sourceBuffer'),
//     TE.bind('targetBuffer', () => readFileAsBuffer(targetFile)),
//     TE.chain(({ sourceBuffer, targetBuffer }) => TE.tryCatch(
//       () => writeFileAsync(patchFile, vcdiff.encoder(sourceBuffer, targetBuffer)),
//       (reason) => new Error(`Failed to generate patch via WASM: ${reason}`)
//     )),
//     TE.map(() => {
//       console.log({
//         sourceFile,
//         targetFile,
//         patchFile,
//         sourceFileExists: existsSync(sourceFile),
//         targetFileExists: existsSync(targetFile),
//         source: statSync(sourceFile).size / 1024 / 1024,
//         target: statSync(targetFile).size / 1024 / 1024,
//         delta: statSync(patchFile).size / 1024 / 1024
//       });
//       return patchFile;
//     })
//   );

const createPatchFileCli = (sourceFile: string, targetFile: string, patchFile: string) => pipe(
  TE.tryCatch(
    () => execAsync(`vcdiff encode --stats --dictionary ${sourceFile} < ${targetFile} > ${patchFile}`),
    (reason) => new Error(`Failed to generate patch ${reason}`)
  ),
  TE.map(() => {
    console.log({
      sourceFile,
      targetFile,
      patchFile,
      // sourceFileExists: existsSync(sourceFile),
      // targetFileExists: existsSync(targetFile),
      source: statSync(sourceFile).size / 1024 / 1024,
      target: statSync(targetFile).size / 1024 / 1024,
      delta: statSync(patchFile).size / 1024 / 1024
    });
    return patchFile;
  })
);

const createPatchFileCUOCli = (diffTool: DiffTool) => (sourceFile: string, targetFile: string, patchFile: string) => pipe(
  TE.tryCatch(
    () => diffTool(
      path.dirname(sourceFile),
      path.dirname(targetFile),
      path.dirname(patchFile),
      path.basename(targetFile)
    ),
    (reason) => new Error(`Failed to generate patch ${reason}`)
  ),
  TE.map(({ stdout }) => {
    const result = JSON.parse(stdout) as Patch[];
    console.log(result);
    return result;
  })
);



const createPatches = (
  { source, configPath, preserve, diffTool }: { source: string, configPath: string, preserve: boolean, diffTool: DiffTool }
) =>
  pipe(
    tryParseJson(configSchema, configPath),
    TE.map((config) => ({
      ...config,
      patch: {
        ...config.patch,
        files: A.sort(Str.Ord)(config.patch.files)
      }
    })),
    TE.chainFirstW(({ patch }) => pipe(
      isDirectoryF(patch.outputDirectory),
      TE.fold(
        () => mkdirF(patch.outputDirectory),
        (right) =>
          preserve
            ? TE.right(right)
            : pipe(
              rmDirF(patch.outputDirectory),
              TE.chain(() => mkdirF(patch.outputDirectory))
            ),
      ),
    )),
    TE.chainFirst(({ patch }) => isDirectoryF(patch.targetDirectory)),
    TE.bind('dictFile', ({ patch }) =>
      pipe(
        createDictionaryFile(source, path.join(patch.outputDirectory, 'dict.bin')),
        TE.chain(readFileAsBuffer),
        TE.map((buffer): Patch => ({
          file: 'dict.bin',
          sha256: sha256sum(buffer),
          length: buffer.byteLength,
          size: buffer.byteLength
        }))
      )),
    TE.bindW('sourceFiles', ({ patch }) =>
      pipe(
        source,
        mapFiles,
        TE.of
      )),
    TE.bindW('targetFiles', ({ patch }) =>
      pipe(
        patch.targetDirectory,
        mapFiles,
        M.filter((key) => !!patch.files.find((i) => normalizeName(i) === normalizeName(key))),
        TE.of
      )),
    TE.bindW('sharedFiles', ({ sourceFiles, targetFiles }) =>
      pipe(
        new Set([...targetFiles.keys()]),
        S.filter((key) => sourceFiles.has(key)),
        TE.of
      )
    ),
    TE.bind('changedFiles', ({ sharedFiles, sourceFiles, targetFiles }) => pipe(
      sharedFiles,
      S.toArray(Str.Ord),
      A.map((key): [string, [string, string]] => [
          key,
          [sourceFiles.get(key)!, targetFiles.get(key)!]
        ]
      ),
      (entries) => new Map(entries),
      compareFiles
    )),
    TE.bind('missingFiles', ({ sharedFiles, dictFile, targetFiles, patch }) => pipe(
      [...targetFiles.keys()],
      A.filter((key) => !sharedFiles.has(key)),
      A.map((key) => [key, [path.join(patch.outputDirectory, dictFile.file), targetFiles.get(key)!]] as const),
      (entries) => TE.of(new Map(entries)),
    )),
    TE.bind('patchedFiles', ({ changedFiles, missingFiles, patch, shard, dictFile }) => pipe(
      [...changedFiles, ...missingFiles],
      A.filter(([f]) => !uselessFiles.includes(f)),
      A.map(([_key, [sourceFile, targetFile]]) => pipe(
        path.basename(sourceFile.endsWith(dictFile.file) ? targetFile : sourceFile),
        (file) => ({
          file,
          patchFile: path.join(patch.outputDirectory, `${file}.patch`)
        }),
        ({ patchFile }) => createPatchFileCUOCli(diffTool)(sourceFile, targetFile, patchFile)
      )),
      TE.sequenceArray,
      TE.map(flow(
        ROA.toArray,
        A.flatten
      ))
    )),
    TE.bind('manifest', ({ shard, patch, dictFile, sharedFiles, sourceFiles, patchedFiles }) => TE.of({
      source: '7.0.95.0',
      target: shard.clientVersion,
      shardId: shard.id,
      cdnBase: patch.cdnBase,
      version: 1,
      dictFile,
      sourceFiles: pipe(
        [...sharedFiles.keys()],
        A.map((key) => path.basename(sourceFiles.get(key)!)),
        (files) => pipe(
          [...sourceFiles.values()],
          A.filter((f) => f.includes("/Music/")),
          A.map((f) => f.replace(source, '').replace(/^\//, '')),
          A.concat(files)
        )
      ),
      patches: patchedFiles
    })),
    TE.chain(({ manifest, patch }) => TE.tryCatch(
      () => writeFileAsync(
        path.join(patch.outputDirectory, 'client-manifest.json'),
        JSON.stringify(manifest, null, 2)
      ),
      (reason) => new Error(`Failed writing manifest JSON: ${reason}`)
    ))
  );


