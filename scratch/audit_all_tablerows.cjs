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

let totalEnglishInRows = 0;

for (const [toolSlug, toolLangs] of Object.entries(seoDatabaseData)) {
  for (const lang of locales) {
    const langData = toolLangs[lang];
    if (!langData) continue;

    if (langData.tableRows) {
      langData.tableRows.forEach((row, idx) => {
        // Check if col1, col2, or col3 contains English words like "Category", "Underweight", "Threshold", "Risk", "Range", "Cutoff", "Standard", "Optimal", "Healthy", "Class", "Severe"
        const col1Words = (row.col1 || '').match(/[a-zA-Z]{3,}/g) || [];
        const col3Words = (row.col3 || '').match(/[a-zA-Z]{3,}/g) || [];

        // Filter out acceptable terms like ICMR, WHO, BMI, CDC, kg, cm, m, BMR, TDEE, WHtR, BSA, LBM, IBW, FDA, USDA, Karvonen, Boer, Devine, Robinson, Epley, Brzycki
        const allowedWords = new Set(['ICMR', 'WHO', 'BMI', 'CDC', 'BMR', 'TDEE', 'WHtR', 'BSA', 'LBM', 'IBW', 'FDA', 'USDA', 'Karvonen', 'Boer', 'Devine', 'Robinson', 'Epley', 'Brzycki', 'Class', 'Class I', 'Class II', 'Class III', 'Klasse']);

        const unAllowedCol1 = col1Words.filter(w => !allowedWords.has(w) && !/kg|cm|lbs|in|m²/i.test(w));
        const unAllowedCol3 = col3Words.filter(w => !allowedWords.has(w) && !/kg|cm|lbs|in|m²/i.test(w));

        if (unAllowedCol1.length > 0 || unAllowedCol3.length > 0) {
          console.log(`[ENGLISH LEAK IN TABLE ROW] ${toolSlug} (${lang}) R${idx}: col1="${row.col1}", col3="${row.col3}"`);
          totalEnglishInRows++;
        }
      });
    }
  }
}

console.log('Total English leaks in table rows:', totalEnglishInRows);
