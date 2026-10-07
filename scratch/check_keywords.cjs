const fs = require('fs');

async function check(url) {
  console.log('=== CHECKING ' + url + ' ===');
  const res = await fetch(url);
  const html = await res.text();
  
  // Search for 'bmi calculator for indians' case-insensitive
  const rawMatches = html.match(/.{0,40}bmi\s*calculator\s*for\s*indians.{0,40}/gi) || [];
  console.log('Matches for bmi calculator for indians:', rawMatches);

  // Search for Underweight reference threshold
  const underMatches = html.match(/.{0,40}Underweight reference threshold.{0,40}/gi) || [];
  console.log('Matches for Underweight reference threshold:', underMatches);

  // Check all FAQ-related headings and details
  const headings = html.match(/<h[1234][^>]*>[\s\S]*?<\/h[1234]>/g) || [];
  console.log('All Headings:');
  headings.forEach(h => console.log('  ' + h.replace(/<[^>]+>/g, '').trim()));
}

async function run() {
  await check('https://realbmicalculator.com/es/bmi-calculator-for-indians/');
  await check('https://realbmicalculator.com/fr/bmi-calculator-for-indians/');
  await check('https://realbmicalculator.com/de/bmi-calculator-for-indians/');
}

run();
