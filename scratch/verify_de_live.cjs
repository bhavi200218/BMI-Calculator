const https = require('https');

const url = 'https://realbmicalculator.com/de/bmi-calculator-for-indians/?utm_source=chatgpt.com';
https.get(url, { headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache', 'User-Agent': 'Mozilla/5.0' } }, (res) => {
  let html = '';
  res.on('data', c => html += c);
  res.on('end', () => {
    console.log('HTTP Status:', res.statusCode);
    const titleMatch = html.match(/<title>([^<]+)<\/title>/);
    console.log('Exact Title:', titleMatch ? titleMatch[1] : 'NOT FOUND');
    const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
    console.log('Exact H1:', h1Match ? h1Match[1].trim() : 'NOT FOUND');
    console.log('Includes "Staatsbürger":', html.includes('Staatsbürger'));
    console.log('Includes "indische Staatsbürger":', html.includes('indische Staatsbürger'));
    console.log('Includes "bmi calculator for indians-Rechner":', html.includes('bmi calculator for indians-Rechner'));
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
    const faqs = html.match(/<h4[^>]*>([\s\S]*?)<\/h4>/gi);
    if (faqs) {
      faqs.forEach((f, idx) => console.log('FAQ ' + (idx+1) + ':', f.replace(/<[^>]+>/g, '').trim()));
    }
  });
});
