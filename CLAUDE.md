# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

GitHub Pages website for TREC-BU (Terrier Ride Engineering Club at Boston University). Built with Next.js, TypeScript, and Tailwind CSS, deployed via GitHub Actions.

## Commands

```bash
npm run dev      # Dev server at localhost:3000
npm run build    # Static export to /out
npm run lint     # Lint
```

## Styling Guide

- **Theme red:** `rgb(187 39 26)` — navbar background and primary brand color
- **Title font:** Raleway Bold (`font-raleway`, weight 700) — headings and the TREC wordmark
- **Body font:** Source Sans Pro / Source Sans 3 (`font-source-sans`) — all body text and navigation links

Both fonts are loaded via `next/font/google` in `src/app/layout.tsx` and registered as Tailwind utilities via CSS variables in `src/app/globals.css`.

## Routing

Uses Next.js App Router. Each folder under `src/app/` with a `page.tsx` becomes a route:

```
src/app/page.tsx          → /
src/app/about/page.tsx    → /about
```

## GitHub Pages Notes

- `output: 'export'` in `next.config.ts` produces a static `/out` directory
- No `basePath` needed — this is the org root site served at `trec-bu.github.io`
- Deployment via GitHub Actions on push to `main`
