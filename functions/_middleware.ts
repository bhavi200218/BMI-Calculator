interface EventContext {
  request: Request;
  next: () => Promise<Response>;
}

export async function onRequest(context: EventContext): Promise<Response> {
  const url = new URL(context.request.url);

  // 1. Enforce canonical non-www hostname: 301 redirect www -> non-www
  if (url.hostname === 'www.realbmicalculator.com') {
    url.hostname = 'realbmicalculator.com';
    return Response.redirect(url.toString(), 301);
  }

  // 2. Enforce 301 redirect from root / to /en/
  if (url.pathname === '' || url.pathname === '/') {
    url.pathname = '/en/';
    return Response.redirect(url.toString(), 301);
  }

  // 3. Consolidate duplicate Indian BMI calculator URL into canonical /bmi-calculator-for-indians/
  const indianCalcMatch = url.pathname.match(/^(\/(?:en|es|fr|de|ko|hi))?\/bmi-calculator-india(\/?)$/);
  if (indianCalcMatch) {
    const localePrefix = indianCalcMatch[1] || '/en';
    url.pathname = `${localePrefix}/bmi-calculator-for-indians/`;
    return Response.redirect(url.toString(), 301);
  }

  const response = await context.next();
  const headers = new Headers(response.headers);

  // 4. Ensure non-production preview domains are never indexed
  if (url.hostname.endsWith('.pages.dev')) {
    headers.set('X-Robots-Tag', 'noindex, nofollow');
  }

  // 5. Ensure 404 pages always return true HTTP 404 status with noindex to prevent soft 404s
  if (response.status === 404 || url.pathname === '/404' || url.pathname === '/404/' || url.pathname === '/404.html') {
    headers.set('X-Robots-Tag', 'noindex, nofollow');
    return new Response(response.body, {
      status: 404,
      statusText: 'Not Found',
      headers
    });
  }

  // 6. Ensure embed responses delete X-Frame-Options to allow framing while non-embed retains DENY
  if (url.pathname.startsWith('/embed/')) {
    headers.delete('x-frame-options');
    headers.set('Content-Security-Policy', 'frame-ancestors *; upgrade-insecure-requests');
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers
    });
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}
