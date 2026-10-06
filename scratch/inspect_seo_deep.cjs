const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'src', 'data', 'seoDatabase.ts');
const content = fs.readFileSync(file, 'utf8');

// Let's print the entire JSON object or key structure for bmi-calculator-india AND bmi-calculator-for-indians
const seo = require('../src/data/seoDatabase.ts');

console.log('Keys in seoDatabase:', Object.keys(seo.seoDatabase || {}));

['bmi-calculator-india', 'bmi-calculator-for-indians'].forEach(key => {
  console.log(`\n=================== ${key} ===================`);
  const data = (seo.seoDatabase || {})[key];
  if (!data) {
    console.log('NO DATA FOR KEY', key);
    return;
  }
  Object.keys(data).forEach(lang => {
    console.log(`--- LANG: ${lang} ---`);
    const langData = data[lang];
    if (langData && langData.tableRows) {
      console.log('tableRows:', JSON.stringify(langData.tableRows, null, 2));
    }
    if (langData && langData.faqs) {
      console.log('faqs count:', langData.faqs.length);
      langData.faqs.forEach(f => {
        if (f.question.includes('bmi calculator') || f.answer.includes('bmi calculator')) {
          console.log('  FAQ matched English:', f.question);
        }
      });
    }
  });
});
