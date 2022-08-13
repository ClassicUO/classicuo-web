import path from 'path';
import { chmodSync } from 'fs';
import { execAsync, isFile, readFileAsString, statAsync, tryParseJson, writeJson } from './fs';
import { downloadRelease } from '@terascope/fetch-github-release';
import * as fs from 'fs';
import { either as E, taskEither as TE, array as A, option as O, map as M, set as S } from 'fp-ts';
import { pipe } from 'fp-ts/function';
import { z } from 'zod';
import { downloadFile, httpGet } from './http';

export const ARCH_MAPPING: Record<string, string> = {
  'x64': 'x64',
  'arm64': 'arm64'
};

// Mapping between Node's `process.platform` to C# RIDs
export const PLATFORM_MAPPING: Record<string, string> = {
  'darwin': 'osx.12',
  'linux': 'linux',
  'win32': 'win',
};


export type DiffTool = (sourceDir: string, targetDir: string, patchDir: string, file: string) => Promise<{ stdout: string, stderr: string }>;

export type ReleaseSchema = z.infer<typeof releaseSchema>;
export const releaseSchema = z.object({
  name: z.string(),
  url: z.string().url(),
  zipball_url: z.string().url(),
  created_at: z.string(),
});

export const getWebDiffTool = async (root: string): Promise<DiffTool> => {

  const name = `classicuo-web-diff-tool-${
    PLATFORM_MAPPING[process.platform]
  }-${
    ARCH_MAPPING[process.arch]
  }${
    process.platform === 'win32' ? '.exe' : ''
  }`;

  const binPath = path.join(root, 'bin');
  const executablePath = path.join(binPath, name);
  const releasePath = path.join(binPath, 'release.json');

  return await pipe(
    httpGet<ReleaseSchema>(`https://api.github.com/repos/classicuo/classicuo-web/releases/latest`),
    TE.chain(({ data }) => pipe(
      tryParseJson(releaseSchema, releasePath),
      TE.fold(
        () => pipe(
          writeJson(releasePath, data),
          TE.map(() => false),
        ),
        (current) => TE.of(new Date(current.created_at) >= new Date(data.created_at))
      ),
      TE.chain(TE.fromPredicate(
        (newer) => newer,
        () => new Error(`Local binary is outdated`)
      )),
      TE.fold(
        () => pipe(
          TE.tryCatch(
            async () => {
              await downloadRelease('ClassicUO', 'classicuo-web', binPath);
              if (process.platform !== 'win32') {
                chmodSync(executablePath, 0o755);
              }
            },
            (reason) => new Error(`Failed downloading release ${reason}`)
          ),
          TE.chain(() => writeJson(releasePath, data))
        ),
        () => TE.right(void 0)
      )),
    ),
    TE.map((): DiffTool =>
      (sourceDir, targetDir, patchDir, file) =>
        execAsync(`${executablePath} --source-dir "${sourceDir}" --target-dir "${targetDir}" --output-dir "${patchDir}" ${file}`)),
    TE.mapLeft((error) => {
      throw error;
    }),
    TE.toUnion
  )();
};
