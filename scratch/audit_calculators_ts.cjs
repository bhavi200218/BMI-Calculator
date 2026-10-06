const fs = require('fs');
const esbuild = require('esbuild');

const file = 'src/utils/calculators.ts';
const content = fs.readFileSync(file, 'utf8');

const transformed = esbuild.transformSync(content, { loader: 'ts', format: 'cjs' }).code;
fs.writeFileSync('scratch/temp_calculators_check.cjs', transformed);

const { calculators } = require('../scratch/temp_calculators_check.cjs');

console.log('=== AUDIT CALCULATORS.TS ===');

calculators.forEach(calc => {
  ['es', 'fr', 'de', 'ko', 'hi'].forEach(lang => {
    const name = calc.name[lang] || calc.name['en'];
    const title = calc.title[lang] || calc.title['en'];
    
    if (name.includes('Calculator') && lang !== 'en') {
      console.log(`Tool [${calc.slug}] | Locale [${lang}] -> Name has English keyword: "${name}"`);
    }
  });
});
