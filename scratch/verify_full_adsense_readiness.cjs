const fs = require('fs');
const path = require('path');

const locales = ['en', 'es', 'fr', 'de', 'ko', 'hi'];
const keyPages = [
  'bmi-calculator',
  'bmi-calculator-for-indians',
  'asian-bmi-calculator',
  'bmr-calculator',
  'tdee-calculator',
  'about',
  'disclaimer',
  'privacy-policy',
  'terms-conditions',
  'editorial-policy',
  'sources'
];

let totalErrors = 0;
let totalChecked = 0;

console.log('=== STARTING ADSENSE READINESS PRODUCTION BUILD AUDIT ===\n');

// 1. Check Indexable HTML files
locales.forEach(lang => {
  keyPages.forEach(page => {
    const pagePath = path.join(__dirname, `../dist/${lang}/${page}/index.html`);
    
    totalChecked++;
    if (!fs.existsSync(pagePath)) {
      console.error(`❌ [MISSING FILE] ${lang}/${page}/index.html not found!`);
      totalErrors++;
      return;
    }

    const html = fs.readFileSync(pagePath, 'utf8');

    // Canonical check
    const canonicalMatch = html.match(/<link rel="canonical" href="(https:\/\/realbmicalculator\.com\/[^"]+)"/);
    if (!canonicalMatch) {
      console.error(`❌ [CANONICAL MISSING] ${lang}/${page}`);
      totalErrors++;
    } else {
      const canonicalUrl = canonicalMatch[1];
      if (!canonicalUrl.includes(`/${lang}/`) && lang !== 'en') {
        console.error(`❌ [WRONG CANONICAL] ${lang}/${page} canonicalizes to ${canonicalUrl}`);
        totalErrors++;
      }
    }

    // Hreflang check
    if (!html.includes('hreflang="en"') || !html.includes('hreflang="es"') || !html.includes('hreflang="x-default"')) {
      console.error(`❌ [HREFLANG MISSING] ${lang}/${page}`);
      totalErrors++;
    }

    // Non-English Fallback check
    if (lang !== 'en') {
      if (html.includes('Underweight reference threshold') || html.includes('Optimal healthy range for Indian adults') || html.includes('Elevated cardiometabolic risk cutoff for Indians')) {
        console.error(`❌ [ENGLISH FALLBACK IN ${lang.toUpperCase()}] ${lang}/${page}`);
        totalErrors++;
      }
    }

    // FAQ Duplication check (visible UI) - check if any exact question H4 is repeated
    const h4Matches = Array.from(html.matchAll(/<h4 class="text-base md:text-lg font-display font-bold text-\[var\(--foreground\)\]">\s*([\s\S]*?)\s*<\/h4>/g)).map(m => m[1].trim());
    const uniqueH4 = new Set(h4Matches);
    if (h4Matches.length !== uniqueH4.size) {
      console.error(`❌ [DUPLICATE FAQ UI] ${lang}/${page} has duplicate FAQ questions!`);
      totalErrors++;
    }
  });
});

console.log(`\nChecked ${totalChecked} key production HTML pages across 6 locales.`);
if (totalErrors === 0) {
  console.log('✅ ALL PRODUCTION HTML PAGES PASSED 100% WITHOUT ERRORS!');
} else {
  console.error(`❌ FOUND ${totalErrors} PRODUCTION ERRORS!`);
}
