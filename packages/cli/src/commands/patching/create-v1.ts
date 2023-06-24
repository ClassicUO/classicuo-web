import { CliUx, Command, Flags } from '@oclif/core';
import { pipe } from 'fp-ts/function';
import { taskEither as TE } from 'fp-ts';
import path from 'path';
import { getWebDiffTool } from '../../utils/exec';
import { syncSourceFiles } from '../../components/patching/sync';
import { createPatches } from '../../components/patching/patcher';

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
