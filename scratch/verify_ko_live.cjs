const https = require('https');

const url = 'https://realbmicalculator.com/ko/bmi-calculator-for-indians/?utm_source=chatgpt.com';
https.get(url, { headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache', 'User-Agent': 'Mozilla/5.0' } }, (res) => {
  let html = '';
  res.on('data', c => html += c);
  res.on('end', () => {
    console.log('HTTP Status:', res.statusCode);
    const titleMatch = html.match(/<title>([^<]+)<\/title>/);
    console.log('Exact Title:', titleMatch ? titleMatch[1] : 'NOT FOUND');
    const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
    console.log('Exact H1:', h1Match ? h1Match[1].trim() : 'NOT FOUND');
    console.log('Includes "bmi calculator for indians":', html.includes('bmi calculator for indians'));
    console.log('Includes "Underweight reference threshold":', html.includes('Underweight reference threshold'));
    console.log('Includes "Optimal healthy range for Indian adults":', html.includes('Optimal healthy range for Indian adults'));
    console.log('Includes "Elevated cardiometabolic risk cutoff for Indians":', html.includes('Elevated cardiometabolic risk cutoff for Indians'));
    console.log('Includes "Class I obesity threshold under ICMR standards":', html.includes('Class I obesity threshold under ICMR standards'));
    console.log('Includes "Severe obesity risk threshold":', html.includes('Severe obesity risk threshold'));
    
    console.log('\n--- Live Table Rows ---');
    const rows = html.match(/<tr[\s\S]*?<\/tr>/gi);
    if (rows) {
      rows.forEach((r, idx) => console.log('Row ' + idx + ':', r.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()));
    }

    console.log('\n--- Live FAQs ---');
    const faqs = html.match(/<h4[^>]*>([\s\S]*?)<\/h4>/gi) || [];
    const faqTexts = faqs.map(f => f.replace(/<[^>]+>/g, '').trim());
    faqTexts.forEach((f, idx) => console.log('FAQ ' + (idx+1) + ':', f));

    // Check FAQ duplicates
    const counts = {};
    faqTexts.forEach(f => counts[f] = (counts[f] || 0) + 1);
    console.log('\nFAQ duplicate counts:');
    let hasDup = false;
    Object.entries(counts).forEach(([q, count]) => {
      if (count > 1) {
        console.log(`  DUPLICATE (${count}x): ${q}`);
        hasDup = true;
      }
    });
    if (!hasDup) {
      console.log('  ✅ ALL FAQs ARE 100% UNIQUE! 0 DUPLICATES!');
    }
  });
});
