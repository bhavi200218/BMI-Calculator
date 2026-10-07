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
  const enRows = toolLangs.en ? toolLangs.en.tableRows || [] : [];
  for (const lang of locales) {
    const langRows = toolLangs[lang] ? toolLangs[lang].tableRows || [] : [];
    if (langRows.length > 0) {
      const hasGenericCol1 = langRows.some(r => /Kategorie \/ Stufe|Catégorie \/ Niveau|Categoría \/ Nivel|범주 \/ 단계|श्रेणी \/ स्तर/i.test(r.col1));
      if (hasGenericCol1) {
        console.log(`[GENERIC COL1] ${toolSlug} (${lang}) has generic col1. English col1s:`, enRows.map(r => r.col1));
      }
    }
  }
}
