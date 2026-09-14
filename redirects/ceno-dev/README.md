# ceno.dev redirect

Deploy this directory as the legacy `ceno.dev` static site. Its `_redirects` rule permanently forwards every path to the equivalent path on `https://ceno.studio`.

Keep this redirect origin separate from the canonical Ceno Studio build in `dist/` to avoid a redirect loop.
