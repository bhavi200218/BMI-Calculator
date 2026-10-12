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

  return context.next();
}
