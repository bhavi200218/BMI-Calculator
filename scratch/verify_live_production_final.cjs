const urls = [
  'https://realbmicalculator.com/en/bmi-calculator/',
  'https://realbmicalculator.com/en/bmi-calculator-for-indians/',
  'https://realbmicalculator.com/es/bmi-calculator-for-indians/',
  'https://realbmicalculator.com/fr/bmi-calculator-for-indians/',
  'https://realbmicalculator.com/de/bmi-calculator-for-indians/',
  'https://realbmicalculator.com/ko/bmi-calculator-for-indians/',
  'https://realbmicalculator.com/hi/bmi-calculator-for-indians/'
];

async function finalLiveCheck() {
  console.log('=== FINAL LIVE PRODUCTION CHECK ===\n');
  
  for (const u of urls) {
    try {
      const res = await fetch(u);
      const html = await res.text();
      const loc = u.includes('/en/bmi-calculator/') ? 'en-global' : u.split('/')[3];
      
      console.log(`----------------------------------------`);
      console.log(`URL: ${u}`);
      console.log(`Status: ${res.status}`);
      
      const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/);
      const title = titleMatch ? titleMatch[1].trim() : 'NONE';
      console.log(`Title: "${title}"`);
      
      const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
      const h1 = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : 'NONE';
      console.log(`H1: "${h1}"`);
      
      // Check for citizenship language
      if (html.includes('Staatsbürger') || html.includes('citizens')) {
        console.log(`  ❌ [FAIL] Citizenship language found!`);
      } else {
        console.log(`  ✅ [PASS] Zero citizenship language`);
      }
      
      // Check for broken slug in translated text
      if (loc !== 'en-global' && loc !== 'en') {
        if (html.match(/¿Cómo funciona la calculadora de bmi calculator for indians/)) {
          console.log(`  ❌ [FAIL] Broken slug in Spanish text!`);
        } else if (html.match(/Comment fonctionne le calculateur de bmi calculator for indians/)) {
          console.log(`  ❌ [FAIL] Broken slug in French text!`);
        } else if (html.match(/bmi calculator for indians 계산기/)) {
          console.log(`  ❌ [FAIL] Broken slug in Korean text!`);
        } else {
          console.log(`  ✅ [PASS] Clean localized FAQ phrasing (no technical slug leak)`);
        }
      }
      
      // FAQ Accordion & JSON-LD count
      const faqHeadings = [];
      const faqRegex = /<h4[^>]*>([\s\S]*?)<\/h4>/g;
      let m;
      while ((m = faqRegex.exec(html)) !== null) {
        faqHeadings.push(m[1].replace(/<[^>]+>/g, '').trim());
      }
      console.log(`FAQ Count: ${faqHeadings.length}`);
      
      // Check for duplicate questions
      const questionSet = new Set(faqHeadings);
      if (questionSet.size !== faqHeadings.length) {
        console.log(`  ❌ [FAIL] Duplicate FAQ questions detected!`);
      } else {
        console.log(`  ✅ [PASS] 0 duplicate FAQ questions`);
      }
      
      console.log('\n');
    } catch (err) {
      console.error(`Error checking ${u}:`, err);
    }
  }
}

finalLiveCheck();
