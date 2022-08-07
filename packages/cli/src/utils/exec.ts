import { execAsync } from './fs';
import path from 'path';
import { chmodSync } from 'fs';

export const ARCH_MAPPING: Record<string, string> = {
  'x64': 'x64',
  'arm64': 'arm64'
};

// Mapping between Node's `process.platform` to C# RIDs
export const PLATFORM_MAPPING:  Record<string, string> = {
  'darwin': 'osx.12',
  'linux': 'linux',
  'win32': 'win',
};


const root = path.dirname(path.join(__dirname, '../../'));

export type DiffTool = (sourceDir: string, targetDir: string, patchDir: string, file: string) => Promise<{ stdout: string, stderr: string }>;

export const getWebDiffTool = (root: string): DiffTool => {

  const name = `classicuo-web-diff-tool.${
    PLATFORM_MAPPING[process.platform]
  }-${
    ARCH_MAPPING[process.arch]
  }${
    process.platform === 'win32' ? '.exe' : ''
  }`;

  const executable = path.join(root, 'bin/', name);
  chmodSync(executable, 0o755);

  return (sourceDir: string, targetDir: string, patchDir: string, file: string) =>
    execAsync(`${executable} --source-dir ${sourceDir} --target-dir ${targetDir} --output-dir ${patchDir} ${file}`);
};
