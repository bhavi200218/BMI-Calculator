const fs = require('fs');
const esbuild = require('esbuild');

const databaseContent = fs.readFileSync('src/data/seoDatabase.ts', 'utf8');
const transformed = esbuild.transformSync(databaseContent, { loader: 'ts', format: 'cjs' }).code;

fs.writeFileSync('scratch/temp_seo_db_check.cjs', transformed);

const { seoDatabase } = require('../scratch/temp_seo_db_check.cjs');

console.log('=== 3D BMI CALCULATOR FAQ AUDIT ===');
const tool = seoDatabase['3d-bmi-calculator'];
if (tool) {
  Object.keys(tool).forEach(lang => {
    console.log(`\nLocale: ${lang.toUpperCase()} -> FAQ Count: ${tool[lang].faqs ? tool[lang].faqs.length : 0}`);
    if (tool[lang].faqs) {
      tool[lang].faqs.forEach((f, idx) => {
        console.log(`  FAQ ${idx+1}: ${f.question}`);
      });
    }
  });
} else {
  console.log('3d-bmi-calculator not found in database!');
}
