import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  appType: "mpa",
  build: {
    rollupOptions: {
      input: {
        index: resolve(import.meta.dirname ?? ".", "index.html"),
        "work/symmetric": resolve(import.meta.dirname ?? ".", "work/symmetric.html"),
        "work/datadex": resolve(import.meta.dirname ?? ".", "work/datadex.html"),
        "work/setwise": resolve(import.meta.dirname ?? ".", "work/setwise.html"),
        privacy: resolve(import.meta.dirname ?? ".", "privacy.html"),
      },
    },
  },
});
