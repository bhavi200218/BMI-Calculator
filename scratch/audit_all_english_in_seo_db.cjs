const fs = require('fs');
const path = require('path');

const seoDbPath = path.join(__dirname, '../src/data/seoDatabase.ts');
let content = fs.readFileSync(seoDbPath, 'utf8');

// Load temp object to manipulate cleanly
const seoDbStart = content.indexOf('export const seoDatabase');
let databaseContent = content.substring(seoDbStart);
databaseContent = databaseContent.replace(/export const seoDatabase[\s\S]*?=/g, 'const seoDatabaseData =');

const tempScript = `
${databaseContent}
module.exports = { seoDatabaseData };
`;
fs.writeFileSync(path.join(__dirname, 'temp_seoDatabase.cjs'), tempScript);
const { seoDatabaseData } = require('./temp_seoDatabase.cjs');

const locales = ['de', 'ko', 'fr', 'es', 'hi'];

let totalEnglishFound = 0;

for (const [toolSlug, toolLangs] of Object.entries(seoDatabaseData)) {
  for (const lang of locales) {
    const langData = toolLangs[lang];
    if (!langData) {
      console.log(`[MISSING LOCALE] ${toolSlug} missing ${lang}`);
      totalEnglishFound++;
      continue;
    }

    // Check title, eyebrow, intro, formulaTitle, formulaDesc, tableTitle
    ['title', 'eyebrow', 'intro', 'formulaTitle', 'formulaDesc', 'tableTitle'].forEach(field => {
      const val = langData[field] || '';
      // Check for English sentence patterns or words that shouldn't be in non-English
      if (/built for instant|reference calculations|designed according to published|standard reference formula|computed using standard|reference chart|reference table/i.test(val)) {
        console.log(`[ENGLISH LEAK IN ${field.toUpperCase()}] ${toolSlug} (${lang}): "${val}"`);
        totalEnglishFound++;
      }
    });

    // Check tableRows col1 & col3
    if (langData.tableRows) {
      langData.tableRows.forEach((row, idx) => {
        if (/underweight|optimal healthy|elevated cardiometabolic|class i obesity|severe obesity|reference threshold|reference category|reference range/i.test(row.col3 || '')) {
          console.log(`[ENGLISH LEAK IN TABLE ROW col3] ${toolSlug} (${lang}) R${idx}: "${row.col3}"`);
          totalEnglishFound++;
        }
        if (/underweight|healthy normal|overweight|obese class/i.test(row.col1 || '')) {
          console.log(`[ENGLISH LEAK IN TABLE ROW col1] ${toolSlug} (${lang}) R${idx}: "${row.col1}"`);
          totalEnglishFound++;
        }
      });
    }
  }
}

console.log('Total English leaks in seoDatabase fields:', totalEnglishFound);
