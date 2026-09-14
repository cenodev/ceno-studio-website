import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: 'index.html',
        symmetric: 'work/symmetric/index.html',
        datadex: 'work/datadex/index.html',
        setwise: 'work/setwise/index.html',
        privacy: 'privacy/index.html',
      },
    },
  },
})
