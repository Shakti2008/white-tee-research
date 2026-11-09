# White Tee Research

A VitePress research hub for a future plain white T-shirt brand. Current phase: competitive discovery and information collection.

## Run locally

Requires Node.js 22 or newer and npm.

```sh
npm ci
npm run docs:dev
```

Build with `npm run docs:build`; inspect the production build with `npm run docs:preview`.

## Contents

- `docs/brief.md`: scope and undecided product questions
- `docs/landscape.md`: classifications and discovery queue
- `docs/competitors/`: sourced starter profiles and a reusable template
- `docs/methodology.md`: evidence and comparison rules
- `docs/research-plan.md`: collection backlog
- `docs/sources.md`: source register

Add Markdown profiles, register their sources, and update the directory and sidebar in `docs/.vitepress/config.mjs`. Keep facts, brand claims, and hypotheses distinct.

## GitHub

Suggested repository name: `white-tee-research`. Prefer a private repository while collecting business research. No remote has been created or configured yet.

The included GitHub Actions workflow builds pull requests and pushes to `main`; it does not publish the research publicly. Hosting can be configured later. `DOCS_BASE` can set the base path when deploying under a subdirectory.
