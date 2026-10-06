const fs = require('fs');

const raw = fs.readFileSync('src/data/seoDatabase.ts', 'utf8');

// Find start of object
const startIdx = raw.indexOf('export const seoDatabase');
const objStart = raw.indexOf('{', startIdx);
const codeStr = 'module.exports = ' + raw.slice(objStart);

fs.writeFileSync('scratch/temp_db.cjs', codeStr);
const database = require('./temp_db.cjs');

console.log('Total tools in DB:', Object.keys(database).length);

// Only check unambiguous Spanish words that should NEVER appear in EN, FR, DE, KO, HI
const spanishUniqueKeywords = ['poblaciones', 'presentan', 'porcentaje', 'Multiplica', 'metros', 'saludable'];
const frenchUniqueKeywords = ['Seuil', 'Plage saine', 'Poids-Taille'];
const englishTitleKeywords = [
  'Healthy Height Weight Chart',
  'BMI Calculator for Indians',
  'Underweight reference threshold',
  'Optimal healthy range',
  'Elevated cardiometabolic risk cutoff',
  'Class I obesity threshold',
  'Severe obesity risk threshold'
];

let issuesFound = 0;

for (const [toolSlug, toolLocales] of Object.entries(database)) {
  for (const [lang, data] of Object.entries(toolLocales)) {
    const dataStr = JSON.stringify(data);

    // Check Spanish in non-Spanish
    if (lang !== 'es') {
      for (const kw of spanishUniqueKeywords) {
        if (dataStr.includes(kw)) {
          console.log(`[CROSS-LANG-ES] ${toolSlug} (${lang}) contains Spanish keyword '${kw}'`);
          issuesFound++;
        }
      }
    }

    // Check French in non-French
    if (lang !== 'fr') {
      for (const kw of frenchUniqueKeywords) {
        if (dataStr.includes(kw)) {
          console.log(`[CROSS-LANG-FR] ${toolSlug} (${lang}) contains French keyword '${kw}'`);
          issuesFound++;
        }
      }
    }

    // Check English title/table keywords in non-English
    if (lang !== 'en') {
      for (const kw of englishTitleKeywords) {
        if (dataStr.includes(kw)) {
          console.log(`[ENGLISH-LEFTOVER] ${toolSlug} (${lang}) contains English phrase '${kw}'`);
          issuesFound++;
        }
      }
    }
  }
}

console.log('Total cross-contamination issues found:', issuesFound);

// Clean temp file
if (fs.existsSync('scratch/temp_db.cjs')) {
  fs.unlinkSync('scratch/temp_db.cjs');
}
