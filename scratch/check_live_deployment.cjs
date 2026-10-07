const fs = require('fs');

const urls = [
  'https://4fcbe00d.real-bmi-calculator.pages.dev/en/bmi-calculator-for-indians/',
  'https://4fcbe00d.real-bmi-calculator.pages.dev/es/bmi-calculator-for-indians/',
  'https://4fcbe00d.real-bmi-calculator.pages.dev/fr/bmi-calculator-for-indians/',
  'https://4fcbe00d.real-bmi-calculator.pages.dev/de/bmi-calculator-for-indians/',
  'https://4fcbe00d.real-bmi-calculator.pages.dev/ko/bmi-calculator-for-indians/',
  'https://4fcbe00d.real-bmi-calculator.pages.dev/hi/bmi-calculator-for-indians/'
];

async function checkLive() {
  for (const u of urls) {
    try {
      const res = await fetch(u);
      const text = await res.text();
      const loc = u.split('/')[3];
      console.log(`\n=== URL: ${u} ===`);
      console.log(`HTTP Status: ${res.status}`);
      console.log(`HTML Length: ${text.length} bytes`);

      const forbidden = [
        'Underweight reference threshold',
        'Optimal healthy range for Indian adults',
        'Elevated cardiometabolic risk cutoff for Indians',
        'Class I obesity threshold under ICMR standards',
        'Severe obesity risk threshold',
        'BMI Calculator for Indians – Healthy Height Weight Chart for Indian Adults'
      ];

      let forbiddenCount = 0;
      if (loc !== 'en') {
        for (const f of forbidden) {
          if (text.includes(f)) {
            console.log(`  ❌ [FAIL] Found English string: "${f}"`);
            forbiddenCount++;
          }
        }
      }
      if (forbiddenCount === 0 && loc !== 'en') {
        console.log('  ✅ [PASS] 0 English fallback strings detected');
      }

      const faqMatches = (text.match(/accordion-item/g) || []).length;
      console.log(`  FAQ Accordion Card Count: ${faqMatches}`);

      const jsonLdFaqMatches = (text.match(/"@type":\s*"FAQPage"/g) || []).length;
      console.log(`  JSON-LD FAQPage Count: ${jsonLdFaqMatches}`);

      const canonicalMatch = text.match(/<link rel="canonical" href="([^"]+)"/);
      console.log(`  Canonical URL: ${canonicalMatch ? canonicalMatch[1] : 'NONE'}`);

      const h1Match = text.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
      if (h1Match) {
        const cleanH1 = h1Match[1].replace(/<[^>]+>/g, '').trim();
        console.log(`  H1 Heading: "${cleanH1}"`);
      } else {
        console.log('  H1 Heading: NONE');
      }

      const titleMatch = text.match(/<title>([\s\S]*?)<\/title>/);
      if (titleMatch) {
        console.log(`  Page Title: "${titleMatch[1].trim()}"`);
      }

    } catch (err) {
      console.error(`Error fetching ${u}:`, err);
    }
  }
}

checkLive();
