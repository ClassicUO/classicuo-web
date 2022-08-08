import {
  readdirSync,
  stat,
  statSync,
  closeSync,
  openSync,
  existsSync,
  mkdirSync,
  accessSync,
  readFile,
  writeFile,
  mkdir, rm, access,
  constants as fsConstants
} from 'fs';
import path from 'path';
import { createHash } from 'crypto';
import { exec } from 'child_process';
import * as util from 'util';
import { pipe } from 'fp-ts/function';
import { either as E, taskEither as TE, array as A, option as O, map as M, set as S } from 'fp-ts';
import { configSchema } from '../schemas/config';
import { z, ZodAny, ZodError, ZodType } from 'zod';

export const execAsync = util.promisify(exec) as (arg1: string) => Promise<{ stdout: string, stderr: string }>;
export const readFileAsync = util.promisify(readFile);
export const writeFileAsync = util.promisify(writeFile);
export const statAsync = util.promisify(stat);
export const mkdirAsync = util.promisify(mkdir);
export const rmAsync = util.promisify(rm);
export const accessAsync = util.promisify(access);


export const isDirectoryF = TE.fromPredicate<Error, string>(
  (path) => {
    try{
      return existsSync(path) && statSync(path).isDirectory();
    }
    catch(e) {
      return false;
    }
  },
  (path) => new Error(`Path "${path}" is not a valid directory`)
);

export const mkdirF = (dir: string) => TE.tryCatch(
  () => {
    return mkdirAsync(dir, { recursive: true });
  },
  () => new Error(`Failed to create directory: ${path.dirname(dir)}`)
);

export const rmDirF = (dir: string) => TE.tryCatch(
  () => {
    return rmAsync(dir, { recursive: true });
  },
  () => new Error(`Failed to remove directory: ${path.dirname(dir)}`)
);

const isDirectory = (p: string) => existsSync(p) && statSync(p).isDirectory();

export const getDirectories = (p: string) =>
  readdirSync(p)
    .map((name) => path.join(p, name))
    .filter((p) => statSync(p).isDirectory());

export const isFile = (p: string) => existsSync(p) && statSync(p).isFile();
export const getFiles = (p: string) =>
  readdirSync(p)
    .map((name) => path.join(p, name))
    .filter(isFile);

export const getFilesRecursively = (p: string) => {
  const dirs = getDirectories(p);
  const files: string[] = dirs
    .map((dir) => getFilesRecursively(dir)) // go through each directory
    .reduce((a, b) => a.concat(b), []); // map returns a 2d array (array of file arrays) so flatten
  return files.concat(getFiles(p));
};

export const normalizeName = (f: string) => path.basename(f).toLowerCase().replace(/^\/+/, '');
export const normalizeDir = (f: string) => f.toLowerCase().replace(/^\/+/, '');

export const sha256sum = (data: Uint8Array) => createHash('sha256').update(data).digest('hex');

export const tryParseJson = <T extends ZodType>(zodSchema: T, path: string): TE.TaskEither<Error, z.infer<T>> =>
  pipe(
    TE.tryCatch(
      () => statAsync(path),
      (path) => new Error(`Config file does not exist: ${path}`)
    ),
    TE.chainW(TE.fromPredicate(
      (stat) => stat.isFile(),
      (_stat) => new Error(`${path} is not a valid file`)
    )),
    TE.chainW(() => TE.tryCatch(
      () => readFileAsync(path, 'utf-8').then(JSON.parse),
      (error) => new Error(`Failed to parse ${path} as JSON: ${error}`)
    )),
    TE.chainW((json) => TE.tryCatch(
      () => zodSchema.parseAsync(json),
      (error) => new Error(`JSON Schema invalid: ${error}`)
    )),
  );

export const readFileAsBuffer = (path: string) => TE.tryCatch(
  () => readFileAsync(path),
  (reason) => new Error(`Failed to read path ${path} ${reason}`)
);
