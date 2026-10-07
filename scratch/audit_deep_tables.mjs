import fs from 'fs';

const content = fs.readFileSync('src/data/seoDatabase.ts', 'utf8');
const tempContent = content.replace("from '../utils/calculators';", "from '../src/utils/calculators.ts';");
fs.writeFileSync('scratch/tempSeo.ts', tempContent);

async function run() {
  const { seoDatabase } = await import('./tempSeo.ts');
  const nonEnglishLangs = ['es', 'fr', 'de', 'ko', 'hi'];
  
  const allIssues = [];

  for (const [slug, langMap] of Object.entries(seoDatabase)) {
    for (const lang of nonEnglishLangs) {
      const data = langMap[lang];
      if (!data) continue;
      
      if (data.tableRows) {
        data.tableRows.forEach((row, i) => {
          // Check if col1, col2, or col3 has English sentences / patterns
          const c3 = row.col3 || '';
          if (/[a-zA-Z]{4,}/.test(c3)) {
            // Check if it's not a unit like kcal or kg/m² or BMI
            const stripped = c3.replace(/\b(BMI|BMR|TDEE|WHO|CDC|ICMR|kcal|kg\/m²|kg|cm|lbs|in|m²)\b/gi, '').trim();
            if (/[a-zA-Z]{4,}/.test(stripped)) {
              allIssues.push({ slug, lang, row: i, col: 'col3', text: c3 });
            }
          }
        });
      }
    }
  }

  console.log('Total English text issues in tables:', allIssues.length);
  fs.writeFileSync('scratch/all_table_issues.json', JSON.stringify(allIssues, null, 2));
}

run();
