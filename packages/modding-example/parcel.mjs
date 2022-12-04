import { fileURLToPath } from 'url';
import { Parcel } from '@parcel/core';

const port = 2222;
const prod = process.env.NODE_ENV === 'production';

const bundler = new Parcel({
  entries: ['src/mod.tsx', 'src/index.html'],
  mode: process.env.NODE_ENV,
  serveOptions: !prod && {
    port
  },
  targets: {
    main: {
      distDir: 'dist',
      context: 'browser',
      includeNodeModules: true,
      engines: {
        browsers: 'Chrome 99'
      },
    }
  },
  additionalReporters: [
    {
      packageName: '@parcel/reporter-cli',
      resolveFrom: fileURLToPath(import.meta.url)
    }
  ],
  env: {
    NODE_ENV: process.env.NODE_ENV
  }
});

if (prod) {
  await bundler.run();
} else {
  await bundler.watch((_error, _buildEvent) => {
    // console.log(`✨ Tunnel running, accessible via: ${tunnel?.url}.`);
  });
}


