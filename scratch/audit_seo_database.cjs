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

console.log('Successfully loaded seoDatabase. Keys:', Object.keys(seoDatabaseData).length);

const locales = ['de', 'ko', 'fr', 'es', 'hi'];

let totalIssues = 0;

for (const [toolSlug, toolLangs] of Object.entries(seoDatabaseData)) {
  for (const lang of locales) {
    const langData = toolLangs[lang];
    if (!langData) {
      console.log(`[MISSING LANG] ${toolSlug} missing ${lang}`);
      totalIssues++;
      continue;
    }

    // Check tableRows col3 / col1 for English fallbacks
    if (langData.tableRows) {
      langData.tableRows.forEach((row, idx) => {
        if (/underweight|optimal healthy|elevated cardiometabolic|class i obesity|severe obesity|threshold|cutoff/i.test(row.col3 || '')) {
          console.log(`[ENGLISH FALLBACK col3] ${toolSlug} (${lang}) row ${idx}: col3="${row.col3}"`);
          totalIssues++;
        }
      });
    }

    // Check faqs for duplicates
    if (langData.faqs) {
      const qList = langData.faqs.map(f => f.question);
      const uniqueQ = new Set(qList);
      if (qList.length !== uniqueQ.size) {
        console.log(`[DUPLICATE FAQ] ${toolSlug} (${lang}) has duplicate FAQs: total=${qList.length}, unique=${uniqueQ.size}`);
        totalIssues++;
      }
    }

    // Check FAQ questions or titles for raw English keywords / slugs
    if (langData.faqs) {
      langData.faqs.forEach((faq, idx) => {
        if (/bmi calculator for indians/i.test(faq.question) || /bmi calculator for indians/i.test(faq.answer)) {
          console.log(`[RAW ENGLISH SLUG IN FAQ] ${toolSlug} (${lang}) faq ${idx}: q="${faq.question}"`);
          totalIssues++;
        }
      });
    }
  }
}

console.log('Total issues found in audit:', totalIssues);
