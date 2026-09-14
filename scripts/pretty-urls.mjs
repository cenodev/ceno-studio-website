// Copies directory-style outputs to .html siblings so clean URLs
// (/work/symmetric, /privacy) resolve on plain static hosts too.
import { copyFileSync, existsSync } from 'node:fs';

const pairs = [
  ['dist/work/symmetric/index.html', 'dist/work/symmetric.html'],
  ['dist/work/datadex/index.html', 'dist/work/datadex.html'],
  ['dist/work/setwise/index.html', 'dist/work/setwise.html'],
  ['dist/privacy/index.html', 'dist/privacy.html'],
];

for (const [from, to] of pairs) {
  if (!existsSync(from)) {
    console.error(`pretty-urls: missing ${from}`);
    process.exit(1);
  }
  copyFileSync(from, to);
  console.log(`pretty-urls: ${from} -> ${to}`);
}
