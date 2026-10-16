# yaronbenjamin

Personal site of Yaron Benjamin: ideas on web platforms and the AI that runs on them.
Built with Next.js 16, Tailwind CSS 4 and MDX, deployed on Vercel. Based on Vercel's Portfolio Starter Kit.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Where things live

| What | Where |
| --- | --- |
| Name, domain, email, links, writing themes, experience | `lib/site.ts` |
| Colors, fonts (the lime accent is `--color-accent`) | `app/global.css` |
| Posts | `content/writing/*.mdx` |
| Cairn case study text | `content/work/cairn.mdx` |
| Home page | `app/page.tsx` |
| Social share image | `app/og/route.tsx` (`/og?title=...`) |

## Write a post

Add `content/writing/my-post.mdx`:

```mdx
---
title: 'My post title'
publishedAt: '2026-11-01'
summary: 'One sentence that appears in lists and share previews.'
theme: 'ai-agents'
draft: true
---

Your post in Markdown.
```

`theme` is one of `content-platforms`, `ai-agents`, `platforms-over-projects` or `leading-teams`.
Drafts show in `npm run dev` and are hidden on the live site. Delete `draft: true` to publish.
Once real posts exist, remove matching entries from `upcoming` in `lib/site.ts`.

Case studies and posts can use `<Architecture />`, `<Decisions>`/`<Decision>`, `<Stats>`/`<Stat>` and `<Placeholder label="..." />`.

## Still to add

- `public/headshot.jpg`, then swap the placeholder in `app/page.tsx`
- `public/resume.pdf`
- A Laprade screenshot in `public/cairn/`, then swap the placeholder in `app/work/cairn/page.tsx`
- Every `[bracketed]` placeholder in `app/page.tsx` and `content/work/cairn.mdx`

## Deploy

1. Import this repo at vercel.com/new. No settings needed.
2. Add your domain under Project → Settings → Domains.
3. When you switch domains, update `url` in `lib/site.ts`.
