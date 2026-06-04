// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Route 66 Borrmann Motors KG Hamburg - STATIC build. No adapter, no SSR.
// Output: /dist with plain HTML files.
// Deploy target: Cloudflare PAGES
//   Framework preset: Astro - Build: npm run build - Output: dist
// Tailwind v3.4 via @astrojs/tailwind (v4 breaks Cloudflare Pages).
export default defineConfig({
  site: 'https://demo-route66-hh.pages.dev',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
});
