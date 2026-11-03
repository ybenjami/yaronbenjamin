[![CI](https://github.com/ybenjami/yaronbenjamin/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/ybenjami/yaronbenjamin/actions/workflows/ci.yml)

# yaronbenjamin.com

Personal site of Yaron Benjamin — ideas on web platforms and the AI that runs on them.
Built with Next.js 16, Tailwind CSS 4 and MDX, deployed on Vercel.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Run ESLint and auto-fix |
| `npm run format` | Format with Prettier |
| `npm run format:check` | Check formatting (CI-safe) |
| `npm run typecheck` | TypeScript type check |
| `npm run check` | Format check + lint + typecheck (all at once) |

## Quality gates

Every commit runs Prettier + ESLint via Husky pre-commit, TypeScript on pre-push, and the full `format:check → lint → typecheck → build` pipeline runs in GitHub Actions CI on every push and pull request.

## Deploy

Import the repo at [vercel.com/new](https://vercel.com/new). No settings needed. Add your domain under Project → Settings → Domains.
