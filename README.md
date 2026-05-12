# Portfolio — Daniel Olusakin

Personal portfolio site for Daniel Olusakin — final-year Computer Science student at the University of Kent, full-stack developer, and 3x hackathon winner.

**Live:** [danielolusakin.com](https://danielolusakin.com)

## Stack

- **Framework:** React 19 + Vite 6 (SWC)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **Icons:** Lucide React
- **Hosting:** Netlify
- **Forms:** Netlify Forms

## Features

- Fully type-safe with TypeScript strict mode (`noUnusedLocals`, `noUnusedParameters`, no implicit any)
- Semantic HTML throughout (`<section aria-labelledby>`, `<article>`, `<time>`, `<address>`)
- SEO: OpenGraph + Twitter Card meta, JSON-LD `Person` schema, sitemap, robots
- Accessibility: skip-to-content link, ARIA labels on icon-only controls, keyboard-navigable
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
├── App.tsx                # Layout shell
├── main.tsx               # Entry point
├── App.css                # Tailwind theme + CSS variables
├── components/
│   ├── Header.tsx         # Fixed nav with mobile menu
│   ├── Hero.tsx           # Landing section, CTA, social links
│   ├── Experience.tsx     # Work history
│   ├── Projects.tsx       # Projects + Hackathons
│   ├── Background.tsx     # Combined Skills & Education
│   ├── Footer.tsx         # Netlify contact form + social
│   └── ui/button.tsx      # shadcn Button
├── lib/utils.ts           # `cn()` class merger
└── assets/                # Images, CV PDF
```

## Deployment

Pushes to `main` deploy automatically via Netlify. Build config lives in `netlify.toml` (Node 20, `npm run build`, publish `dist`).

## Attribution

Book icon by [Smashicons via Flaticon](https://www.flaticon.com/free-icons/book).
