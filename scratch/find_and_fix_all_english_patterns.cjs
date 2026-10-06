const fs = require('fs');
const esbuild = require('esbuild');

const databaseContent = fs.readFileSync('src/data/seoDatabase.ts', 'utf8');
const transformed = esbuild.transformSync(databaseContent, { loader: 'ts', format: 'cjs' }).code;

fs.writeFileSync('scratch/temp_seo_db_check.cjs', transformed);
const { seoDatabase } = require('../scratch/temp_seo_db_check.cjs');

// English phrase detectors
const englishPhrases = [
  'reference threshold',
  'healthy range for',
  'risk cutoff',
  'obesity threshold',
  'severe obesity',
  'calculateur de',
  'Rechner und was misst er',
  'calculadora de',
  '계산기의 원리와',
  'for indians',
  'the overweight cutoff',
  'for Asian adults',
  'by height for men',
  'according to height',
  'difference between BMR',
  'calculate BMR in',
  'for bench press',
  'Karvonen method more accurate',
  'waist and hip circumference'
];

console.log('=== GLOBAL SCAN FOR ENGLISH LEFTOVERS IN NON-ENGLISH LOCALES ===');
let foundCount = 0;

Object.keys(seoDatabase).forEach(toolKey => {
  const tool = seoDatabase[toolKey];
  ['es', 'fr', 'de', 'ko', 'hi'].forEach(lang => {
    if (!tool[lang]) return;
    const jsonStr = JSON.stringify(tool[lang]);
    englishPhrases.forEach(phrase => {
      if (jsonStr.includes(phrase)) {
        console.log(`Tool [${toolKey}] | Locale [${lang}] -> Found English pattern: "${phrase}"`);
        foundCount++;
      }
    });
  });
});

console.log(`\nTotal English pattern occurrences found: ${foundCount}`);
