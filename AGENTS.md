# AGENTS.md

## Local Preview

- This repo is a plain static site. Do not assume an `npm` or other build-based dev workflow.
- The site is written to expect production-style paths under `/wedding/...`.
- For local preview, serve from the parent directory, not from this repo root.

Use:

```bash
cd /home/austin-lipe/repos
python3 -m http.server 8001
```

Then open:

- `http://localhost:8001/wedding/`
- `http://localhost:8001/wedding/gallery/`

## Important Path Note

- `/home/austin-lipe/repos/wedding` is a symlink to `/home/austin-lipe/repos/wedding-public-site`.
- Because asset URLs are absolute like `/wedding/assets/...`, serving from `/home/austin-lipe/repos/wedding-public-site` and opening `/` will make assets 404 locally.
- Serving from `/home/austin-lipe/repos/wedding-public-site` and opening `/wedding-public-site/` is also wrong and will 404.

## Production Path Assumption

- Keep `/wedding/...` paths intact unless the user explicitly asks to change local/production path handling.
