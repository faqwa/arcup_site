// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://alixarcup.github.io',
  base: '/arcup_site',
  integrations: [sitemap()],
});