# Major Car Parts — website

Premium 2027 redesign for **Major Car Parts**, a car parts & accessories supplier in Chadwell Heath, East London with in-house **fitting, body repair and spray paint**.

Car parts + fitting + body repair + spray paint, all under one roof. Genuine and quality parts for Lexus, Mercedes-Benz, BMW, Audi, Tesla, Range Rover, Ford and many more.

## Stack
- **Astro 5** — static build, no adapter, no SSR (output: `/dist` HTML)
- **Tailwind CSS 3.4** (via `@astrojs/tailwind`)
- **@lucide/astro** for icons (no emojis anywhere)
- `@astrojs/sitemap`

## Develop
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/  (static HTML)
npm run preview
```

## Deploy — Cloudflare **Pages** (not Workers)
- Framework preset: **Astro**
- Build command: **`npm run build`**
- Build output directory: **`dist`**
- No `_worker.js`, no SSR adapter.

## Project notes
- Brand palette (navy `#002D62` + orange `#FF5500`) is extracted from the original logo.
- Business content (contacts, address, hours, brands, services, product photos) is preserved from the existing site.
- See [`JUDGEMENT_CALLS.md`](JUDGEMENT_CALLS.md) for decisions needing operator review and [`QA_REPORT.md`](QA_REPORT.md) for the full QA.
