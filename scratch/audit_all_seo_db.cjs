const fs = require('fs');

const content = fs.readFileSync('src/data/seoDatabase.ts', 'utf8');

// Parse seoDatabase
// Since it's exported as a typescript object, let's evaluate or extract it
const script = content.replace(/export\s+const\s+seoDatabase\s*:\s*Record<string,\s*Record<Locale,\s*ToolContent>>\s*=/, 'const seoDatabase =')
  + '\nmodule.exports = { seoDatabase };';

// We might need to mock tableUi or types if they are exported
const cleanScript = content
  .replace(/import\s+.*?;/g, '')
  .replace(/export\s+interface\s+[\s\S]*?}/g, '')
  .replace(/export\s+const\s+tableUi[\s\S]*?};/, '')
  .replace(/export\s+const\s+seoDatabase[\s\S]*?=/, 'const seoDatabase =')
  + '\nmodule.exports = { seoDatabase };';

fs.writeFileSync('scratch/temp_export.cjs', cleanScript);

try {
  const { seoDatabase } = require('./temp_export.cjs');
  const nonEnglishLangs = ['es', 'fr', 'de', 'ko', 'hi'];
  
  const issues = [];

  for (const [slug, langMap] of Object.entries(seoDatabase)) {
    for (const lang of nonEnglishLangs) {
      const data = langMap[lang];
      if (!data) {
        issues.push({ slug, lang, type: 'MISSING_LANG' });
        continue;
      }

      // Check tableRows
      if (data.tableRows) {
        data.tableRows.forEach((row, i) => {
          // Check for common English indicators
          const txt = (row.col1 + ' ' + row.col2 + ' ' + row.col3);
          const englishTokens = [
            'reference threshold',
            'healthy range',
            'risk cutoff',
            'obesity threshold',
            'severe obesity',
            'baseline range',
            'screening reference',
            'Ideal Devine Weight',
            'Preserves current',
            'Mathematical example',
            'Acceptable body fat',
            'Predictive formula',
            'underweight',
            'overweight',
            'obesity'
          ];
          for (const token of englishTokens) {
            // Exceptions: if the language is not English, and col3 contains english token
            if (row.col3 && row.col3.toLowerCase().includes(token.toLowerCase())) {
              // But check if it's already translated or has raw English
              issues.push({ slug, lang, row: i, field: 'col3', text: row.col3, token });
            }
          }
        });
      }

      // Check faqs
      if (data.faqs) {
        data.faqs.forEach((faq, i) => {
          if (/bmi\s+calculator\s+for\s+indians/i.test(faq.question)) {
            issues.push({ slug, lang, faq: i, field: 'question', text: faq.question, reason: 'raw keyword' });
          }
        });
      }
    }
  }

  console.log('Total issues found in seoDatabase:', issues.length);
  console.log(JSON.stringify(issues.slice(0, 30), null, 2));
} catch (e) {
  console.error('Error parsing seoDatabase:', e);
}
