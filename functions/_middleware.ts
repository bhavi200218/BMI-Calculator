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

  return context.next();
}
