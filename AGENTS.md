# AGENTS.md

## What this repo is

A Chinese-language Linux learning/knowledge base rendered as a static site with **Docsify** (loads markdown directly; framework JS comes from a CDN in `index.html`). There is **no build, test, lint, or package manager** — no `package.json`, no CI. Editing is just writing/renaming `.md` files.

## Conventions

- **Write new/edited content in Simplified Chinese (zh-cn)** to match the existing pages. Keep existing tone: terse, heading-based, reference-style notes.
- **Section layout** — one directory per topic, each with:
  - `README.md` = section landing page
  - `SUMMARY.md` = Docsify sidebar listing that section's pages (paths relative to repo root, e.g. `command/01.md`)
  - numbered pages as zero-padded `.md` (`command/01.md`, …)
- Top-level sections: `software/`, `command/`, `file/`, `application/`, `operation-and-maintenance/`.
- **Adding/renaming/deleting a page requires updating the owning section's `SUMMARY.md`** — Docsify renders the sidebar from it and breaks on missing targets.
- **Adding a new top-level section** requires registering its path in the `search.paths` array in `_docsify.js` (window `$docsify` config) or it won't be indexed by the search plugin.
- Images live in `_img/` (referenced as `_img/…`).

## Gotchas

- Several `SUMMARY.md` entries already point to **nonexistent files** (pre-existing debt — don't "fix" casually, but don't add new ones): `software/nginx.md`, `software/tomcat.md`, `operation-and-maintenance/redis.md`, `command/27.md`, `command/31.md`, `command/32.md`, `command/35.md`.
- Many `operation-and-maintenance/*.md` files are stubs (a few bytes, e.g. `mysql.md`); treating them as placeholders to expand is expected.
- Site deploys to **GitHub Pages** (repo `lbb4511/linux-playbook`). `.nojekyll` must remain present or Pages will process markdown as Jekyll. A `CNAME` custom domain (`linux.4511.top`) is tracked in the repo — keep it in sync with the Pages custom-domain setting if changed.
- Preview locally with the Docsify CLI (`docsify serve .`) if needed; the `_book/` build output dir is gitignored.
