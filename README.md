# Taitung Travel Guide Demo

A derived demo built from `city-travel-site-template`. It proves the Hualien design can be reused for a second city by replacing only content, images, metadata, and source links.

## Demo Scope

This version uses Taitung travel content around:

- Sanxiantai Coast
- Taitung Forest Park
- Taitung Railway Art Village
- Dulan Sintung Sugar Factory Culture Park

The layout, section structure, bilingual content model, route story, source footer, and trip inquiry CTA all come from the reusable template.

## Stack

- Vue 3
- TypeScript
- Vite
- TailwindCSS
- Netlify-ready static deployment

## Local Development

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Content Files

Most city-specific content lives in `src/data`.

| File | Purpose |
| --- | --- |
| `src/data/hero.ts` | Site title, metadata, navigation labels, hero copy, and large title lines |
| `src/data/images.ts` | Image URLs, dimensions, alt text, credits, and source links |
| `src/data/features.ts` | Main feature/place cards |
| `src/data/story.ts` | Route, timeline, or story section |
| `src/data/culture.ts` | Culture, highlights, or local detail cards |
| `src/data/planner.ts` | CTA, email link, map link, and itinerary packages |
| `src/data/sources.ts` | Footer source links or brand references |
| `src/data/siteContent.ts` | Main content composition entry point |

## Deployment

Netlify settings are included in `netlify.toml`.

- Build command: `npm run build`
- Publish directory: `dist`

## Template Relationship

Template repository:

https://github.com/Lu1a1a/city-travel-site-template

This demo is intentionally separate from the template repo so it can be shown as a finished example of how a new city site looks after replacing the data files.
