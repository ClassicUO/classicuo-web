import { fileURLToPath } from 'url';
import { Parcel } from '@parcel/core';
import localtunnel from 'localtunnel';

const port = 2222;

// const tunnel = await localtunnel({ port });

const bundler = new Parcel({
  entries: ['src/index.html'],
  mode: process.env.NODE_ENV,
  serveOptions: {
    port
  },
  targets: {
    main: {
      distDir: 'build',
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

if(process.env.NODE_ENV !== 'production') {
  await bundler.watch((_error, _buildEvent) => {
    // console.log(`✨ Tunnel running, accessible via: ${tunnel?.url}.`);
  });
}
else {
  await bundler.run();
}


