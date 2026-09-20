import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://realbmicalculator.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
      filter: (page) => {
        if (page === 'https://realbmicalculator.com/') return false;
        const path = page.replace('https://realbmicalculator.com', '');
        const isRedirectAlias = ['/bmr-calculator/', '/body-fat-calculator/', '/calculator/', '/editorial-policy/', '/sources/', '/tdee-calculator/'].includes(path);
        return !isRedirectAlias;
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
