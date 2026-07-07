# Portfolio — Daniel Olusakin

Personal portfolio site for Daniel Olusakin — Software Engineer, Junior Python Developer at CDP, and 4x hackathon winner.

**Live:** [danielolusakin.com](https://danielolusakin.com)

A minimal single-column, numbered-index layout (`01 Name`, `02 Location`, …) in a neutral dark-grey theme.

## Stack

- **Framework:** React 19 + Vite 6 (SWC)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Hosting:** Netlify

## Features

- Fully type-safe with TypeScript strict mode (`noUnusedLocals`, `noUnusedParameters`, no implicit any)
- Semantic HTML throughout (`<section aria-label>`, `<footer>`, labelled links)
- SEO: OpenGraph + Twitter Card meta, JSON-LD `Person` schema, sitemap, robots
- Accessibility: skip-to-content link, ARIA labels, keyboard-navigable, `prefers-reduced-motion` respected
- Security headers + cache rules via `netlify.toml`
- Web manifest for PWA install support

## Run locally

```bash
npm install
npm run dev
```

App runs at `http://localhost:5173`.

## Scripts

| Command             | Description                          |
| ------------------- | ------------------------------------ |
| `npm run dev`       | Start Vite dev server with HMR       |
| `npm run build`     | Type-check (`tsc -b`) + production build |
| `npm run preview`   | Preview the production build locally |
| `npm run typecheck` | Run TypeScript compiler in no-emit mode |
| `npm run lint`      | Run ESLint                           |

## Project structure

```
src/
├── App.tsx     # The whole page — numbered sections, data-driven roles/projects
├── main.tsx    # Entry point
├── App.css     # Tailwind theme (grey palette) + fade-up animation
└── assets/     # CV PDF
```

## Deployment

Pushes to `main` deploy automatically via Netlify. Build config lives in `netlify.toml` (Node 20, `npm run build`, publish `dist`).
