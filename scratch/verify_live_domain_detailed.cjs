const locales = ['en', 'es', 'fr', 'de', 'ko', 'hi'];

async function detailedAudit() {
  console.log('Fetching live URLs from https://realbmicalculator.com ...\n');
  for (const loc of locales) {
    const u = 'https://realbmicalculator.com/' + loc + '/bmi-calculator-for-indians/';
    try {
      const res = await fetch(u);
      const html = await res.text();
      
      console.log(`=== LOCALE: ${loc.toUpperCase()} ===`);
      console.log(`URL: ${u}`);
      console.log(`HTTP Status: ${res.status}`);
      
      const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
      const h1 = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : 'NONE';
      console.log(`H1 Heading: "${h1}"`);
      
      const faqHeadings = [];
      const faqRegex = /<h4[^>]*>([\s\S]*?)<\/h4>/g;
      let m;
      while ((m = faqRegex.exec(html)) !== null) {
        faqHeadings.push(m[1].replace(/<[^>]+>/g, '').trim());
      }
      console.log(`FAQ Count (H4 elements): ${faqHeadings.length}`);
      faqHeadings.forEach((q, i) => console.log(`  [FAQ ${i+1}] ${q}`));
      
      const forbidden = [
        'Underweight reference threshold',
        'Optimal healthy range for Indian adults',
        'Elevated cardiometabolic risk cutoff for Indians',
        'Class I obesity threshold under ICMR standards',
        'Severe obesity risk threshold',
        'bmi calculator for indians'
      ];
      let leaks = 0;
      if (loc !== 'en') {
        forbidden.forEach(str => {
          if (html.includes(str)) {
            console.log(`  ❌ Fallback Leak Detected: "${str}"`);
            leaks++;
          }
        });
      }
      if (leaks === 0 && loc !== 'en') {
        console.log(`  ✅ Fallback Leaks: ZERO`);
      }
      
      const canMatch = html.match(/<link rel="canonical" href="([^"]+)"/);
      const canonical = canMatch ? canMatch[1] : 'NONE';
      console.log(`Canonical Tag: ${canonical}\n`);
    } catch (err) {
      console.error(`Error fetching ${u}:`, err);
    }
  }
}

detailedAudit();
