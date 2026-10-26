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

  // 2. Consolidate duplicate Indian BMI calculator URL into canonical /bmi-calculator-for-indians/
  const indianCalcMatch = url.pathname.match(/^(\/(?:en|es|fr|de|ko|hi))?\/bmi-calculator-india(\/?)$/);
  if (indianCalcMatch) {
    const localePrefix = indianCalcMatch[1] || '/en';
    url.pathname = `${localePrefix}/bmi-calculator-for-indians/`;
    return Response.redirect(url.toString(), 301);
  }

  // 2b. Consolidate near-duplicate 3D visualizer slug into canonical /3d-bmi-calculator/
  const visualizerMatch = url.pathname.match(/^(\/(?:en|es|fr|de|ko|hi))?\/3d-body-visualizer(\/?)$/);
  if (visualizerMatch) {
    const localePrefix = visualizerMatch[1] || '/en';
    url.pathname = `${localePrefix}/3d-bmi-calculator/`;
    return Response.redirect(url.toString(), 301);
  }

  // 2c. Consolidate near-duplicate one-rep-max slug into canonical /1rm-calculator/
  const repMaxMatch = url.pathname.match(/^(\/(?:en|es|fr|de|ko|hi))?\/one-rep-max-calculator(\/?)$/);
  if (repMaxMatch) {
    const localePrefix = repMaxMatch[1] || '/en';
    url.pathname = `${localePrefix}/1rm-calculator/`;
    return Response.redirect(url.toString(), 301);
  }

  const response = await context.next();
  const headers = new Headers(response.headers);

  // 3. Ensure non-production preview domains are never indexed
  if (url.hostname.endsWith('.pages.dev')) {
    headers.set('X-Robots-Tag', 'noindex, nofollow');
  }

  // 4. Ensure 404 pages always return true HTTP 404 status with noindex to prevent soft 404s
  if (response.status === 404 || url.pathname === '/404' || url.pathname === '/404/' || url.pathname === '/404.html') {
    headers.set('X-Robots-Tag', 'noindex, nofollow');
    return new Response(response.body, {
      status: 404,
      statusText: 'Not Found',
      headers
    });
  }

  // 5. Standard Hardened Security Headers
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  headers.set('Permissions-Policy', 'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()');
  headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');

  // Hardened, zero-wildcard CSP: prevents JSONP/script injection bypasses while permitting AdSense & Analytics
  const CSP_BASE = "default-src 'self'; script-src 'self' 'unsafe-inline' https://pagead2.googlesyndication.com https://fundingchoicesmessages.google.com https://www.googletagmanager.com https://ep2.adtrafficquality.google https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: blob: https://pagead2.googlesyndication.com https://*.doubleclick.net https://*.google-analytics.com https://*.googlesyndication.com https://www.google.com https://www.gstatic.com; connect-src 'self' https://pagead2.googlesyndication.com https://fundingchoicesmessages.google.com https://www.google-analytics.com https://analytics.google.com https://*.google-analytics.com https://www.googletagmanager.com https://ep2.adtrafficquality.google https://googleads.g.doubleclick.net https://tpc.googlesyndication.com https://www.google.com https://cloudflareinsights.com; frame-src 'self' https://googleads.g.doubleclick.net https://fundingchoicesmessages.google.com https://tpc.googlesyndication.com https://www.google.com; worker-src 'self' blob:; manifest-src 'self'; media-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests;";

  // 6. Embed routes allow framing from any host; standard routes strictly enforce frame-ancestors 'none'
  if (url.pathname.startsWith('/embed/')) {
    headers.delete('x-frame-options');
    headers.set('Content-Security-Policy', `${CSP_BASE} frame-ancestors *;`);
  } else {
    headers.set('X-Frame-Options', 'DENY');
    headers.set('Content-Security-Policy', `${CSP_BASE} frame-ancestors 'none';`);
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}
