import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://realbmicalculator.com',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
      filter: (page) => {
        if (page === 'https://realbmicalculator.com/' || page === 'https://realbmicalculator.com') return false;
        const path = page.replace('https://realbmicalculator.com', '');
        if (path.startsWith('/embed/') || path.startsWith('/search/')) return false;
        // Only include indexable canonical pages that belong to our 6 supported locales
        return /^\/(en|es|fr|de|ko|hi)\//.test(path);
      },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr', 'de', 'ko', 'hi'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
