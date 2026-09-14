import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  appType: 'mpa',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        symmetric: resolve(root, 'work/symmetric/index.html'),
        datadex: resolve(root, 'work/datadex/index.html'),
        setwise: resolve(root, 'work/setwise/index.html'),
        privacy: resolve(root, 'privacy/index.html'),
        notfound: resolve(root, '404.html'),
      },
    },
  },
  server: {
    port: 5173,
  },
  preview: {
    port: 4173,
  },
});
