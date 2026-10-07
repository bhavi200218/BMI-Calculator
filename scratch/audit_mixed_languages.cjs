const fs = require('fs');
const path = require('path');

const seoDbPath = path.join(__dirname, '../src/data/seoDatabase.ts');
let content = fs.readFileSync(seoDbPath, 'utf8');

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

let count = 0;

for (const [toolSlug, toolLangs] of Object.entries(seoDatabaseData)) {
  for (const lang of locales) {
    const langData = toolLangs[lang];
    if (!langData) continue;

    // Check title, eyebrow, intro, formulaTitle, formulaDesc, tableTitle
    ['title', 'eyebrow', 'intro', 'formulaTitle', 'formulaDesc', 'tableTitle'].forEach(field => {
      const val = langData[field] || '';
      if (/Calculator|Standards|Reference|Guidelines|Overweight|Obese|Healthy|Underweight|Cutoff|Threshold/i.test(val) && !/BMI|WHO|CDC|ICMR|BMR|TDEE|WHtR|BSA|LBM|IBW|1RM/i.test(val)) {
        console.log(`[ENGLISH WORD IN ${field}] ${toolSlug} (${lang}): "${val}"`);
        count++;
      }
    });

    if (langData.faqs) {
      langData.faqs.forEach((faq, idx) => {
        if (/für asiatische Erwachsene|According to International Diabetes Federation|According to published literature|BMI Calculator for Indians|Asian BMI Calculator/i.test(faq.answer || '') || /für asiatische Erwachsene|According to International Diabetes Federation|According to published literature|BMI Calculator for Indians|Asian BMI Calculator/i.test(faq.question || '')) {
          console.log(`[ENGLISH/MIXED IN FAQ] ${toolSlug} (${lang}) Q${idx}: "${faq.question}"`);
          count++;
        }
      });
    }
  }
}

console.log('Total mixed language / English text issues found:', count);
