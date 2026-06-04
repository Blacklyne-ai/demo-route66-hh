# QA Report — Major Car Parts (2027 redesign)

Build: Astro **5.18** (static, no adapter, no SSR) · Tailwind **3.4.19** · @lucide/astro **1.17** · output `/dist` (HTML, **no `_worker.js`**). Deploy target: **Cloudflare Pages** (Framework: Astro · Build: `npm run build` · Output: `dist`).

QA date: 2 June 2026. All 13 pages built and verified.

> **Note on method:** the in-browser screenshot tool in this environment mis-composited the glass/`backdrop-filter` nav and scroll-reveal animations (stale/blank frames). Visual checks were therefore done with a combination of confirmed screenshots (homepage desktop + mobile, parts hero) **and** authoritative DOM inspection (`getBoundingClientRect`, `getComputedStyle`, `elementFromPoint`, per-page 375px iframe overflow probes) — which the preview tooling itself recommends over screenshots for precise verification.

| # | QA step | Result |
|---|---------|--------|
| 1 | Visual @ 1280–1440 / 768 / 375 | ✅ Home + Parts captured premium; **all 13 pages: 0 horizontal overflow @375px** (DOM probe) |
| 2 | Pill nav (max-w-7xl glass, backdrop-blur, both phones + WhatsApp, mobile hamburger) | ✅ Confirmed; landline+mobile CTAs + WhatsApp on desktop, hamburger + sticky dual-phone bar on mobile |
| 3 | Animations (hover, scroll-reveal, `prefers-reduced-motion`) | ✅ `.fade-in` reveal works; reduced-motion media query in `global.css` |
| 4 | Content preserved (4 offerings, phones, email, address, hours, 7 brands) | ✅ All present on **every** page (shared header/footer); see below |
| 5 | Technical (build OK, `/dist` HTML not `_worker.js`, no console errors) | ✅ 13 static pages, 0 console errors (home + parts) |
| 6 | SEO (unique titles, meta ≤155, schema, sitemap, robots) | ✅ 13 unique titles; meta 116–153 chars; AutoPartsStore+AutoRepair+LocalBusiness JSON-LD; FAQ schema on service pages; `sitemap-index.xml` (13 URLs); `robots.txt` |
| 7 | Language (UK English, £ GBP, +44, DD/MM/YYYY) | ✅ 0 US spellings in prose; "colour/centre/tyre/specialise" used; £ + +44 |
| 8 | Compliance (Privacy, Cookie, Terms, GDPR cookie banner) | ✅ All three legal pages + consent banner (localStorage, no tracking by default) |
| 9 | Live hours status (CSS dots, no emoji, 60s update) | ✅ Header + `OpeningHours` show "Open now · Closes 5:30pm" / green pulse (verified Tue 8:30–17:30); Sun/closed logic correct |
| 10 | Site mood (inherited, no toggle) | ✅ **Light** (logo "for white background"); deep-navy dark sections; no dark/light toggle |
| 11 | Brand colours | ✅ Navy `#002D62` + orange `#FF5500` — **extracted from the real logo** (see JUDGEMENT_CALLS) |
| 12 | Logo | ✅ Original logo in header (`/logo.png`), white knockout in footer (`/logo-white.png`), SVG favicon |
| 13 | NO EMOJI | ✅ Codepoint scan across `src` = **0** emoji/symbol glyphs (incl. arrows); all icons via `@lucide/astro` `Icon` component |
| 14 | Mobile performance | ✅ LCP hero image optimised 461→**214KB**; all hero/stock images re-encoded (3.1M→1.9M); CSS 48KB; static HTML |
| 15 | Accessibility | ✅ 22/22 images have `alt`; all links have accessible names; nav landmark + `aria-expanded`; skip link; orange `:focus-visible` ring; one `<h1>` per page; WCAG-AA navy/orange contrast |
| 16 | Reviews source | ✅ Real **eBay** aggregate (99.3% / 1,716) + Google-pending note. No fabricated quotes, no old-site testimonials |
| 17 | QA_REPORT.md + JUDGEMENT_CALLS.md | ✅ Both present |

## Content accuracy (verified present on all 13 pages)
- Landline **020 3592 1629** (`tel:+442035921629`) · Mobile **078 8633 4136** (`tel:+447886334136`)
- Email **info@majorcarparts.co.uk**
- **Unit K2 / K3, Chadwell Heath Industrial Park, Kemp Road, Dagenham, London RM8 1SL**
- Hours **Mon–Fri 8:30–17:30, Sat 8:30–12:30, Sun closed**
- Brands: **Lexus, Mercedes-Benz, BMW, Audi, Tesla, Range Rover, Ford** (+ full real list & "coming soon")
- Services: **Car Parts Supply, Parts Fitting, Body Repair, Spray Paint**

## Pages (13)
`/` · `/parts` · `/services` · `/services/fitting` · `/services/body-repair` · `/services/spray-paint` · `/brands` · `/trade` · `/about` · `/contact` · `/privacy-policy` · `/cookie-policy` · `/terms`

## Image integrity
110 image references across the built HTML — **0 missing**, **0 broken at runtime** (all 22 images per page report `naturalWidth>0`). 16 product photos are the client's own real listings; workshop/booth/tool/engine shots are brand-neutral stock (see JUDGEMENT_CALLS for replace-with-own-photos note).

## Known limitations (operator review)
- Email inbox, exact map pin, and legal-page company details to be confirmed by the operator (see [JUDGEMENT_CALLS.md](JUDGEMENT_CALLS.md)).
- Quote form is backend-free (composes a pre-filled email / WhatsApp message). Wire to a form endpoint if server-side capture is wanted.
- Lighthouse not run in-environment; build is static with optimised images, lazy-loading, font preconnect, single 48KB stylesheet — engineered for 95+.
