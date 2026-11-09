# White Tee Research

A VitePress research hub for a future plain white T-shirt brand. Current phase: competitive discovery and information collection.

**[Review the live research hub](https://shakti2008.github.io/white-tee-research/)**

[GitHub repository](https://github.com/Shakti2008/white-tee-research)

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

Public repository: [Shakti2008/white-tee-research](https://github.com/Shakti2008/white-tee-research).

GitHub Actions builds pull requests and deploys pushes to `main` to [GitHub Pages](https://shakti2008.github.io/white-tee-research/). The deployment workflow sets `DOCS_BASE` to `/white-tee-research/`.
