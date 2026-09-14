import { resolve } from "node:path";
import { defineConfig, type Plugin } from "vite";
import { renderCasePage, renderWorkCards } from "./src/case-render";

const root = __dirname;

function contentInjection(): Plugin {
  return {
    name: "ceno-content-injection",
    transformIndexHtml(html) {
      return html
        .replace(
          /<main([^>]*)data-case="([\w-]+)"([^>]*)>\s*<!--CASE_CONTENT-->\s*<\/main>/,
          (_match, pre: string, slug: string, post: string) =>
            `<main${pre}data-case="${slug}"${post}>${renderCasePage(slug)}</main>`
        )
        .replace("<!--WORK_CARDS-->", renderWorkCards());
    },
  };
}

export default defineConfig({
  appType: "mpa",
  plugins: [contentInjection()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        symmetric: resolve(root, "work/symmetric/index.html"),
        datadex: resolve(root, "work/datadex/index.html"),
        setwise: resolve(root, "work/setwise/index.html"),
        privacy: resolve(root, "privacy/index.html"),
      },
    },
  },
});
