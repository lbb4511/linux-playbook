# AGENTS.md

## What this repo is

A Chinese-language Linux learning/knowledge base rendered as a static site with **Docsify** (loads markdown directly; framework JS comes from a CDN in `index.html`). There is **no build, test, lint, or package manager** — no `package.json`, no CI. Editing is just writing/renaming `.md` files.

## Conventions

- **Write new/edited content in Simplified Chinese (zh-cn)** to match the existing pages. Keep existing tone: terse, heading-based, reference-style notes.
- **Section layout** — one directory per topic, each with:
  - `README.md` = section landing page
  - `SUMMARY.md` = Docsify sidebar listing that section's pages (paths relative to repo root, e.g. `command/01.md`)
  - numbered pages as zero-padded `.md` (`command/01.md`, …)
- Top-level sections: `ai/`, `application/`, `command/`, `development/`, `docker/`, `file/`, `git/`, `nodes/`, `operation-and-maintenance/`, `software/`.
- **Example style**: command examples use **Arch Linux (pacman)** as the primary package manager; IDEs focus on **PyCharm / VSCode / opencode**.
- **Adding/renaming/deleting a page requires updating the owning section's `SUMMARY.md`** — Docsify renders the sidebar from it and breaks on missing targets.
- **Adding a new top-level section** requires registering its path in the `search.paths` array in `_docsify.js` (window `$docsify` config) or it won't be indexed by the search plugin.
- Images live in `_img/` (referenced as `_img/…`).

## Gotchas

- `operation-and-maintenance/` is split into subdirectories: `database/` (Oracle、MySQL、PostgreSQL、MongoDB、Redis、MS SQL) and `web-server/` (Nginx、Tomcat、Apache、JBoss、Jetty、WebSphere、WebLogic).
- `command/27.md` and `operation-and-maintenance/database/redis.md` were missing but are now created; the unused number gaps `command/25.md`, `command/31.md`, `command/32.md`, `command/35.md` don't exist and aren't referenced (pre-existing — don't "fix" casually, but don't add new broken links).
- Many `operation-and-maintenance/*.md` files were recently filled in from stubs; treat any remaining short files as placeholders to expand.
- Git pages prefer **worktree** workflows over switching branches in-place (user preference).
- Site deploys to **GitHub Pages** (repo `lbb4511/linux-playbook`). `.nojekyll` must remain present or Pages will process markdown as Jekyll. A `CNAME` custom domain (`linux.4511.top`) is tracked in the repo — keep it in sync with the Pages custom-domain setting if changed.
- Preview locally with the Docsify CLI (`docsify serve .`) if needed; the `_book/` build output dir is gitignored.
