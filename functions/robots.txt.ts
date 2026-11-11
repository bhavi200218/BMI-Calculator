export async function onRequest(): Promise<Response> {
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /embed/

User-agent: Googlebot
Allow: /

User-agent: Googlebot-Image
Allow: /

User-agent: Mediapartners-Google
Allow: /

User-agent: AdsBot-Google
Allow: /

User-agent: AdsBot-Google-Mobile
Allow: /

User-agent: GoogleOther
Allow: /

User-agent: Google-Extended
Allow: /

# Sitemaps
Sitemap: https://realbmicalculator.com/sitemap-index.xml
Sitemap: https://realbmicalculator.com/sitemap.xml
Sitemap: https://realbmicalculator.com/sitemap-0.xml
`;

  return new Response(robotsTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
      'X-Robots-Tag': 'all'
    }
  });
}
