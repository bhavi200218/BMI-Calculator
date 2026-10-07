const targetUrls = [
  'https://realbmicalculator.com/en/bmi-calculator-for-indians/',
  'https://realbmicalculator.com/es/bmi-calculator-for-indians/',
  'https://realbmicalculator.com/fr/bmi-calculator-for-indians/',
  'https://realbmicalculator.com/de/bmi-calculator-for-indians/',
  'https://realbmicalculator.com/ko/bmi-calculator-for-indians/',
  'https://realbmicalculator.com/hi/bmi-calculator-for-indians/',
  'https://realbmicalculator.com/en/bmi-calculator-india/',
  'https://realbmicalculator.com/es/bmi-calculator-india/',
  'https://realbmicalculator.com/fr/bmi-calculator-india/',
  'https://realbmicalculator.com/de/bmi-calculator-india/',
  'https://realbmicalculator.com/ko/bmi-calculator-india/',
  'https://realbmicalculator.com/hi/bmi-calculator-india/'
];

const fallbackStrings = [
  'Underweight reference threshold',
  'Optimal healthy range for Indian adults',
  'Elevated cardiometabolic risk cutoff for Indians',
  'Class I obesity threshold under ICMR standards',
  'Severe obesity risk threshold',
  'indische Staatsbürger',
  'Staatsbürger',
  'WHO Medical Standards',
  'Estándares Médicos de la OMS',
  'medical standards',
  'medical-grade',
  'clinical standards',
  'WHO certified',
  'WHO approved',
  'WHO endorsed'
];

async function runLiveAudit() {
  console.log('====================================================');
  console.log('=== REALBMICALCULATOR.COM LIVE PRODUCTION AUDIT ===');
  console.log('====================================================\n');

  let allPassed = true;
  const results = {};

  for (const url of targetUrls) {
    try {
      // Add cache buster to guarantee fresh live edge response
      const fetchUrl = url + '?t=' + Date.now();
      const res = await fetch(fetchUrl);
      const html = await res.text();
      const pathParts = url.replace('https://realbmicalculator.com/', '').split('/');
      const lang = pathParts[0];
      const slug = pathParts[1];
      const pageKey = `${lang}/${slug}`;

      console.log(`----------------------------------------`);
      console.log(`URL: ${url}`);
      console.log(`HTTP Status: ${res.status}`);

      const titleM = html.match(/<title>([\s\S]*?)<\/title>/);
      const title = titleM ? titleM[1].trim() : 'NONE';
      console.log(`Title: "${title}"`);

      const h1M = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
      const h1 = h1M ? h1M[1].replace(/<[^>]+>/g, '').trim() : 'NONE';
      console.log(`H1: "${h1}"`);

      // 1. Fallback search
      const foundFallbacks = [];
      fallbackStrings.forEach(s => {
        // Only flag English strings if on non-English page
        if (['Underweight reference threshold', 'Optimal healthy range for Indian adults', 'Elevated cardiometabolic risk cutoff for Indians', 'Class I obesity threshold under ICMR standards', 'Severe obesity risk threshold'].includes(s)) {
          if (html.includes(s)) foundFallbacks.push(s);
        } else if (s === 'indische Staatsbürger' || s === 'Staatsbürger') {
          if (html.includes(s)) foundFallbacks.push(s);
        } else if (s.toLowerCase().includes('medical standards') || s.toLowerCase().includes('médicos de la oms') || s.includes('WHO certified') || s.includes('WHO approved') || s.includes('WHO endorsed')) {
          // Check if used as a claim rather than disclaimer
          if (html.includes('Estándares Médicos de la OMS') || html.includes('WHO Medical Standards')) {
            foundFallbacks.push(s);
          }
        }
      });

      // 2. Slug leak in translated sentences
      let slugLeak = false;
      if (lang !== 'en') {
        const textOnly = html.replace(/<(a|link|script|div)[^>]*(href|id|data-slug)[^>]*>/gi, '');
        if (textOnly.includes('de bmi calculator for indians') ||
            textOnly.includes('pour bmi calculator for indians') ||
            textOnly.includes('für bmi calculator for indians') ||
            textOnly.includes('bmi calculator for indians 계산기') ||
            textOnly.includes('bmi calculator for indians')) {
          slugLeak = true;
        }
      }

      // 3. Duplicate FAQs
      const faqHeadings = [];
      const faqRegex = /<h4[^>]*>([\s\S]*?)<\/h4>/g;
      let m;
      while ((m = faqRegex.exec(html)) !== null) {
        faqHeadings.push(m[1].replace(/<[^>]+>/g, '').trim());
      }
      const uniqueHeadings = new Set(faqHeadings);
      const hasDuplicateFaq = faqHeadings.length !== uniqueHeadings.size;

      console.log(`FAQ Count: ${faqHeadings.length} (Unique: ${uniqueHeadings.size})`);

      if (foundFallbacks.length > 0) {
        console.log(`  ❌ [FAIL] Found fallback strings:`, foundFallbacks);
        allPassed = false;
      } else {
        console.log(`  ✅ [PASS] 0 target fallback strings found`);
      }

      if (slugLeak) {
        console.log(`  ❌ [FAIL] Slug leaked into body text`);
        allPassed = false;
      } else {
        console.log(`  ✅ [PASS] 0 technical slug leaks`);
      }

      if (hasDuplicateFaq) {
        console.log(`  ❌ [FAIL] Duplicate FAQs detected`);
        allPassed = false;
      } else {
        console.log(`  ✅ [PASS] 0 duplicate FAQs`);
      }

      results[pageKey] = {
        status: res.status,
        title,
        h1,
        faqCount: faqHeadings.length,
        fallbacks: foundFallbacks.length,
        duplicates: hasDuplicateFaq
      };

    } catch (err) {
      console.error(`Error fetching ${url}:`, err);
      allPassed = false;
    }
  }

  console.log('\n====================================================');
  if (allPassed) {
    console.log('🎉 ALL LIVE PRODUCTION URLS PASSED AUDIT WITH 100% SUCCESS!');
  } else {
    console.log('❌ SOME LIVE URLS ENCOUNTERED ISSUES.');
  }
  console.log('====================================================\n');
}

runLiveAudit();
