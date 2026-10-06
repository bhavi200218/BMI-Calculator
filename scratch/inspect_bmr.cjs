const fs = require('fs');
const esbuild = require('esbuild');

const databaseContent = fs.readFileSync('src/data/seoDatabase.ts', 'utf8');
const transformed = esbuild.transformSync(databaseContent, { loader: 'ts', format: 'cjs' }).code;

fs.writeFileSync('scratch/temp_seo_db_check.cjs', transformed);
const { seoDatabase } = require('../scratch/temp_seo_db_check.cjs');

console.log('=== BMR CALCULATOR AUDIT ===');
const bmr = seoDatabase['bmr-calculator'];

Object.keys(bmr).forEach(lang => {
  console.log(`\n--- LOCALE: ${lang.toUpperCase()} ---`);
  console.log(`Table Rows Count: ${bmr[lang].tableRows ? bmr[lang].tableRows.length : 0}`);
  if (bmr[lang].tableRows) {
    bmr[lang].tableRows.forEach((row, i) => {
      console.log(`  Row ${i+1}: col1="${row.col1}" | col2="${row.col2}" | col3="${row.col3}"`);
    });
  }
  console.log(`FAQs Count: ${bmr[lang].faqs ? bmr[lang].faqs.length : 0}`);
  if (bmr[lang].faqs) {
    bmr[lang].faqs.forEach((faq, i) => {
      console.log(`  FAQ ${i+1}: Q="${faq.question}"`);
    });
  }
});
