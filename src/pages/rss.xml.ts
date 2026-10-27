import type { APIRoute } from 'astro';
import { blogArticles } from '../utils/blogArticles';

export const GET: APIRoute = async () => {
  const slugs = Object.keys(blogArticles);

  const items = slugs.map((slug) => {
    const art = blogArticles[slug];
    const title = (art.title?.en || art.title?.[Object.keys(art.title)[0]] || slug)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    const desc = (art.description?.en || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    const pubDate = art.datePublished ? new Date(art.datePublished).toUTCString() : new Date('2026-01-15').toUTCString();
    const link = `https://realbmicalculator.com/en/blog/${slug}/`;

    return `    <item>
      <title>${title}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description>${desc}</description>
      <pubDate>${pubDate}</pubDate>
    </item>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Real BMI — Health &amp; Body Composition Guides</title>
    <link>https://realbmicalculator.com/en/blog/</link>
    <description>Evidence-based clinical guides on Body Mass Index, BMR, TDEE, body composition, and WHO &amp; CDC reference standards.</description>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://realbmicalculator.com/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
