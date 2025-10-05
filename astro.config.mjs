// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://faqwa.github.io', // ⚠️ CHANGE THIS to your actual GitHub Pages URL
  base: '/arcup-v2', // ⚠️ CHANGE THIS if your repo name is different
  integrations: [sitemap()],
});