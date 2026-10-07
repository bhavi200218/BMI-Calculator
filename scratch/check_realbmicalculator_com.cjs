const urls = [
  'https://realbmicalculator.com/en/bmi-calculator-for-indians/',
  'https://realbmicalculator.com/es/bmi-calculator-for-indians/',
  'https://realbmicalculator.com/fr/bmi-calculator-for-indians/',
  'https://realbmicalculator.com/de/bmi-calculator-for-indians/',
  'https://realbmicalculator.com/ko/bmi-calculator-for-indians/',
  'https://realbmicalculator.com/hi/bmi-calculator-for-indians/'
];

async function checkRealDomain() {
  for (const u of urls) {
    try {
      const res = await fetch(u, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } });
      const text = await res.text();
      const loc = u.split('/')[3];
      console.log(`\n=== REAL DOMAIN: ${u} ===`);
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

      // Check for duplicate FAQ in DE / KO
      if (loc === 'de') {
        const matches = text.match(/Wie funktioniert der bmi calculator for indians/g) || [];
        console.log(`  [DE] FAQ question count in HTML: ${matches.length}`);
      }
      if (loc === 'ko') {
        const matches = text.match(/bmi calculator for indians 계산기의 원리와 측정 항목은 무엇인가요/g) || [];
        console.log(`  [KO] FAQ question count in HTML: ${matches.length}`);
      }

      const accordionCount = (text.match(/accordion-item/g) || []).length;
      console.log(`  Accordion Item Count: ${accordionCount}`);

    } catch (err) {
      console.error(`Error fetching ${u}:`, err);
    }
  }
}

checkRealDomain();
