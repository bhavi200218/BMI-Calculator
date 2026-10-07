const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/seoDatabase.ts');
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/export const seoDatabase[\s\S]*?=/g, 'const seoDatabaseData =');
content = content.replace(/export const tableUi[\s\S]*?};\n/g, '');
content = content.replace(/import\s+[\s\S]*?;/g, '');
content = content.replace(/export interface[\s\S]*?\n}/g, '');

const seoDbStart = content.indexOf('const seoDatabaseData =');
let databaseContent = content.substring(seoDbStart);

const fullScript = `
${databaseContent}
module.exports = { seoDatabaseData };
`;

fs.writeFileSync(path.join(__dirname, 'temp_seoDatabase.cjs'), fullScript);

const { seoDatabaseData } = require('./temp_seoDatabase.cjs');

const locales = ['de', 'ko', 'fr', 'es', 'hi'];

for (const [toolSlug, toolLangs] of Object.entries(seoDatabaseData)) {
  for (const lang of locales) {
    const langData = toolLangs[lang];
    if (!langData) continue;

    if (langData.faqs) {
      langData.faqs.forEach((faq, idx) => {
        // Check if question contains "bmi calculator for indians" or similar English slugs
        if (/bmi-calculator|bmi calculator for indians|ideal weight calculator|body fat calculator|tdee calculator/i.test(faq.question)) {
          console.log(`[RAW ENGLISH KEYWORD IN FAQ QUESTION] ${toolSlug} (${lang}) Q${idx}: "${faq.question}"`);
        }
      });
    }

    if (langData.title) {
      if (/bmi calculator for indians|ideal weight calculator|body fat calculator/i.test(langData.title) && lang !== 'en') {
        console.log(`[RAW ENGLISH KEYWORD IN TITLE] ${toolSlug} (${lang}) title: "${langData.title}"`);
      }
    }
  }
}
