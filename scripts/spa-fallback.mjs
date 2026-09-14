import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

const dist = "dist";
const index = join(dist, "index.html");
const routes = ["work/symmetric", "work/datadex", "work/setwise", "privacy"];

for (const route of routes) {
  const dest = join(dist, route, "index.html");
  mkdirSync(dirname(dest), { recursive: true });
  copyFileSync(index, dest);
}

copyFileSync(index, join(dist, "404.html"));
console.log(`Wrote SPA fallbacks for ${routes.length} routes.`);
