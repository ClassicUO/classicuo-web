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
  string as Str,
  ord as Ord
} from 'fp-ts';
import { configSchema } from '../../schemas/config';
import {
  copyAsync,
  copyFileF,
  execAsync,
  getFilesRecursively,
  isDirectoryF,
  makeDirectoryIfNotExists,
  mkdirF,
  normalizeName,
  pathWithSubfolder,
  readFileAsBuffer,
  readFileAsync,
  rmDirF,
  sha256sum,
  tryParseJson,
  writeFileAsync,
  writeJson
} from '../../utils/fs';
import path from 'path';
import { Patch } from '../../schemas/patch';
import { downloadFile, httpGet } from '../../utils/http';
import { sourceManifestSchema } from '../../schemas/manifest';
import { DiffTool, getWebDiffTool } from '../../utils/exec';

export const insensitiveOrd: Ord.Ord<string> = pipe(
  Str.Ord,
  Ord.contramap((s) => s.toLowerCase())
);

const extensions = [
  '.mul',
  '.bin',
  '.def',
  '.uop',
  '.idx',
  '.rle',
  '.enu',
  '.rus',
  '.mp3',
  '.txt',
  '.mid'
]; /* '.bik', '.mp3' */
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

export default class CreateV1 extends Command {
  static description = 'Create patches for version 1 of ClassicUO web patching using VCDIFF';

  static examples = ['<%= config.bin %> <%= command.id %>'];

  static flags = {
    source: Flags.url({
      char: 's',
      description: 'ClassicUO source manifest',
      default: new URL('https://content.zhmodern.com/file/classicuo-content/7.0.95.0/source-manifest.json')
    }),
    sourcePath: Flags.string({
      char: 'i',
      required: true,
      description: 'Directory to store a local copy of the source files to patch against'
    }),
    targetPath: Flags.string({
      char: 'i',
      required: true,
      description: 'Your shard files to create patches for'
    }),
    outputPath: Flags.string({
      char: 'i',
      required: true,
      description: 'The directory to store the output patches'
    }),
    // flag with no value (-f, --force)
    force: Flags.boolean({ char: 'f' }),
    preserve: Flags.boolean({ char: 'p' })
  };

  static args = [{ name: 'config', required: true, description: 'shard configuration file' }];

  public async run(): Promise<any> {
    const { args, flags } = await this.parse(CreateV1);

    CliUx.ux.action.start('Synchronising source files');
    await syncSourceFiles(flags.source as URL, flags.sourcePath as string)();
    CliUx.ux.action.stop();

    const patch = pipe(
      createPatches({
        ...flags,
        configPath: path.resolve(args.config),
        preserve: flags.preserve,
        diffTool: await getWebDiffTool(this.config.root),
        log: this.log
      }),
      TE.mapLeft((error) => {
        throw error;
      })
    );

    CliUx.ux.action.start('Patching files');
    await patch();
    CliUx.ux.action.stop();
  }
}

const syncSourceFiles = (source: URL, sourceDir: string) =>
  pipe(
    httpGet(source.toString()),
    TE.chain((response) =>
      TE.tryCatch(
        () => sourceManifestSchema.parseAsync(response.data),
        (error) => new Error(`JSON Schema invalid: ${error}`)
      )
    ),
    TE.chainFirst(() => mkdirF(sourceDir)),
    TE.chain((manifest) =>
      pipe(
        manifest.files,
        A.map((file: string) => {
          const remoteFile = `${manifest.cdnBase}/${file}`;
          const localFile = path.join(sourceDir, file);

          return pipe(
            isDirectoryF(path.dirname(localFile)),
            TE.fold(
              () => mkdirF(path.dirname(localFile)),
              (right) => TE.right(right)
            ),
            TE.chain(() => downloadFile(remoteFile, localFile)),
            TE.map((status) => {
              if (status === 200) {
                console.log(`Synced source file ${remoteFile} => ${localFile}: ${status}`);
              }
              return { remoteFile, localFile, status };
            })
          );
        }),
        TE.sequenceArray
      )
    )
  );

const mapFiles = (dir: string) =>
  pipe(
    dir,
    getFilesRecursively,
    A.filterMap((p: string) =>
      extensions.includes(path.extname(p)) ? O.some([normalizeName(p), p] as [string, string]) : O.none
    ),
    (entries) => new Map(entries)
  );

const compareFiles = (
  filesMap: Map<string, [p1: string, p2: string]>
): TE.TaskEither<Error, Map<string, [p1: string, p2: string]>> =>
  pipe(
    [...filesMap.entries()],
    A.map(([key, [p1, p2]]) =>
      TE.tryCatch(
        async () => {
          const result =
            sha256sum(await readFileAsync(p1)) !== sha256sum(await readFileAsync(p2))
              ? O.some([key, [p1, p2]] as [string, [p1: string, p2: string]])
              : O.none;

          console.log(`Comparing files via sha256: ${p1} => ${p2} => changed: ${O.isSome(result)}`);
          return result;
        },

        () => new Error(`Failed to compare hashes for ${p1} => ${p2}`)
      )
    ),
    TE.sequenceArray,
    TE.map(ROA.compact),
    TE.map((entries) => new Map(entries))
  );

const getDiffToolPatcher =
  (diffTool: DiffTool, sourceDir: string, targetDir: string, patchDir: string) => (file: string) =>
    pipe(
      TE.tryCatch(
        () => diffTool(sourceDir, targetDir, patchDir, file),
        (reason) => new Error(`Failed to generate patch ${reason}`)
      ),
      TE.map(({ stdout }) => {
        const result = JSON.parse(stdout) as Patch[];
        console.log(result);
        return result;
      })
    );

const createDictionary = (sourcePath: string, outputPath: string, dictName = 'dict.bin') =>
  pipe(
    TE.of(path.join(sourcePath, dictName)),
    TE.chainFirst((dictPath) => copyFileF(dictPath, path.join(outputPath, dictName))),
    TE.chain(readFileAsBuffer),
    TE.map(
      (buffer): Patch => ({
        source: '*',
        file: dictName,
        sha256: sha256sum(buffer),
        length: buffer.byteLength,
        size: buffer.byteLength
      })
    )
  );

const createSourceFileList = ({
  sharedFiles,
  changedFiles,
  missingFiles,
  sourceFiles,
  patchedFiles,
  sourcePath
}: {
  sharedFiles: Set<string>;
  changedFiles: Map<string, [string, string]>;
  missingFiles: Map<string, [string, string]>;
  sourceFiles: Map<string, string>;
  patchedFiles: Patch[];
  sourcePath: string;
}) =>
  pipe(
    [...sharedFiles.keys()],
    A.filter((f) => !(changedFiles.has(f) || missingFiles.has(f))),
    A.map((key) => path.basename(sourceFiles.get(key)!)),
    (files) =>
      pipe(
        [...sourceFiles.values()],
        A.filter((f) => f.includes('/Music/')),
        A.map((f) => f.replace(sourcePath, '').replace(/^\//, '')),
        A.concat(files)
      ),
    A.concat(
      pipe(
        patchedFiles,
        A.map((p) => p.source)
      )
    ),
    A.uniq(insensitiveOrd)
  );

const createPatches = ({
  sourcePath,
  targetPath,
  outputPath,
  configPath,
  preserve,
  diffTool
}: {
  sourcePath: string;
  targetPath: string;
  outputPath: string;
  configPath: string;
  preserve: boolean;
  diffTool: DiffTool;
  log: Command['log'];
}) =>
  pipe(
    tryParseJson(configSchema, configPath),
    TE.chainFirstW(() => makeDirectoryIfNotExists(outputPath, preserve)),
    TE.chainFirst(() => isDirectoryF(targetPath)),
    TE.bind('dictFile', () => createDictionary(sourcePath, outputPath)),
    TE.bindW('createPatchF', () => pipe(getDiffToolPatcher(diffTool, sourcePath, targetPath, outputPath), TE.of)),
    TE.bindW('sourceFiles', ({ patch }) => pipe(sourcePath, mapFiles, TE.of)),
    TE.bindW('targetFiles', ({ patch }) =>
      pipe(
        targetPath,
        mapFiles,
        M.filter((key) => !!patch.files.find((i) => normalizeName(i) === normalizeName(key))),
        TE.of
      )
    ),
    TE.bindW('sharedFiles', ({ sourceFiles, targetFiles }) =>
      pipe(
        new Set([...targetFiles.keys()]),
        S.filter((key) => sourceFiles.has(key)),
        TE.of
      )
    ),
    TE.bind('changedFiles', ({ sharedFiles, sourceFiles, targetFiles }) =>
      pipe(
        sharedFiles,
        S.toArray(Str.Ord),
        A.map((key): [string, [string, string]] => [key, [sourceFiles.get(key)!, targetFiles.get(key)!]]),
        (entries) => new Map(entries),
        compareFiles
      )
    ),
    TE.bind('missingFiles', ({ sharedFiles, dictFile, targetFiles, patch }) =>
      pipe(
        [...targetFiles.keys()],
        A.filter((key) => !sharedFiles.has(key)),
        A.map((key): [string, [string, string]] => [
          key,
          [path.join(outputPath, dictFile.file), targetFiles.get(key)!]
        ]),
        (entries) => TE.of(new Map(entries))
      )
    ),
    TE.bind('patchedFiles', ({ changedFiles, missingFiles, createPatchF }) =>
      pipe(
        [...changedFiles, ...missingFiles],
        A.filter(([f]) => !uselessFiles.includes(f)),
        A.map(([_key, [_sourceFile, targetFile]]) => pipe(createPatchF(pathWithSubfolder(targetPath, targetFile)))),
        TE.sequenceArray,
        TE.map(flow(ROA.toArray, A.flatten))
      )
    ),
    TE.bind('manifest', ({ shard, patch, dictFile, ...files }) =>
      TE.of({
        source: '7.0.95.0',
        target: shard.clientVersion,
        shardId: shard.id,
        cdnBase: patch.cdnBase,
        version: 1,
        dictFile,
        sourceFiles: createSourceFileList({ ...files, sourcePath }),
        patches: files.patchedFiles
      })
    ),
    TE.chainFirst(({ manifest }) => writeJson(path.join(outputPath, 'client-manifest.json'), manifest)),
    TE.chainFirst(({ patch, shard }) => writeJson(path.join(outputPath, `${shard.id}.json`), { shard, patch }))
  );
