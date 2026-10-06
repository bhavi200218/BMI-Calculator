const fs = require('fs');
const esbuild = require('esbuild');

const databaseContent = fs.readFileSync('src/data/seoDatabase.ts', 'utf8');
const transformed = esbuild.transformSync(databaseContent, { loader: 'ts', format: 'cjs' }).code;

fs.writeFileSync('scratch/temp_seo_db_check.cjs', transformed);
const { seoDatabase } = require('../scratch/temp_seo_db_check.cjs');

['bmi-calculator-india', 'bmi-calculator-for-indians'].forEach(key => {
  console.log(`\n=== AUDIT: ${key} ===`);
  const tool = seoDatabase[key];
  if (!tool) return;
  Object.keys(tool).forEach(lang => {
    console.log(`\n--- LOCALE: ${lang.toUpperCase()} ---`);
    if (tool[lang].tableRows) {
      tool[lang].tableRows.forEach((r, i) => {
        console.log(`  Row ${i+1}: col1="${r.col1}" | col2="${r.col2}" | col3="${r.col3}"`);
      });
    }
    if (tool[lang].faqs) {
      tool[lang].faqs.forEach((f, i) => {
        console.log(`  FAQ ${i+1}: Q="${f.question}"`);
      });
    }
  });
});
