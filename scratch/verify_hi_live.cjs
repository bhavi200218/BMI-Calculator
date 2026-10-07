const https = require('https');

const url = 'https://realbmicalculator.com/hi/bmi-calculator-for-indians/?utm_source=chatgpt.com';
https.get(url, { headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache', 'User-Agent': 'Mozilla/5.0' } }, (res) => {
  let html = '';
  res.on('data', c => html += c);
  res.on('end', () => {
    console.log('HTTP Status:', res.statusCode);
    console.log('Title:', html.match(/<title>([^<]+)<\/title>/)?.[1]);
    console.log('H1:', html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1]?.trim());
    
    console.log('\n--- Badges Check ---');
    console.log('Includes "चिकित्सा मानक":', html.includes('चिकित्सा मानक'));
    console.log('Includes "डब्ल्यूएचओ और चिकित्सा मानक":', html.includes('डब्ल्यूएचओ और चिकित्सा मानक'));
    console.log('Includes "डब्ल्यूएचओ एवं संदर्भ मानक":', html.includes('डब्ल्यूएचओ एवं संदर्भ मानक'));

    console.log('\n--- Parentheticals Check in Visible Table/Content ---');
    console.log('Includes "(Underweight)":', html.includes('(Underweight)'));
    console.log('Includes "(Healthy Weight)":', html.includes('(Healthy Weight)'));
    console.log('Includes "(Overweight Cutoff":', html.includes('(Overweight Cutoff'));
    console.log('Includes "(Obese Class I)":', html.includes('(Obese Class I)'));
    console.log('Includes "(Obese Class II)":', html.includes('(Obese Class II)'));

    console.log('\n--- Actual Live Table Rows in Hindi ---');
    const rows = html.match(/<tr[\s\S]*?<\/tr>/gi);
    if (rows) {
      rows.forEach((r, idx) => console.log('Row ' + idx + ':', r.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()));
    }
  });
});
