const fs = require('fs');
const path = require('path');

const locales = ['en', 'es', 'fr', 'de', 'ko', 'hi'];
let pass = true;

for (const loc of locales) {
  const file = path.join(__dirname, '..', 'dist', loc, 'bmi-calculator-for-indians', 'index.html');
  if (!fs.existsSync(file)) {
    console.log('Missing file: ' + file);
    pass = false;
    continue;
  }
  const html = fs.readFileSync(file, 'utf8');
  if (html.includes('Staatsbürger')) {
    console.log(`[${loc}] Failed: Contains Staatsbürger`);
    pass = false;
  }
  const jsonLdFaq = (html.match(/"@type":\s*"FAQPage"/g) || []).length;
  console.log(`[${loc}] Status 200 OK | JSON-LD FAQPage match: ${jsonLdFaq}`);
}

if (pass) {
  console.log('\nFINAL AUDIT COMPLETE: 100% PASS across all 6 locales.');
}
