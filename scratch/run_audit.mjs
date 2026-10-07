import fs from 'fs';

const content = fs.readFileSync('src/data/seoDatabase.ts', 'utf8');
const tempContent = content.replace("from '../utils/calculators';", "from '../src/utils/calculators.ts';");
fs.writeFileSync('scratch/tempSeo.ts', tempContent);

async function run() {
  const { seoDatabase } = await import('./tempSeo.ts');
  const nonEnglishLangs = ['es', 'fr', 'de', 'ko', 'hi'];
  
  const issues = [];
  const tokens = [
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

  for (const [slug, langMap] of Object.entries(seoDatabase)) {
    for (const lang of nonEnglishLangs) {
      const data = langMap[lang];
      if (!data) continue;
      
      // Check title for raw english slugs
      if (/bmi\s+calculator\s+for\s+indians/i.test(data.title)) {
        issues.push({ slug, lang, field: 'title', text: data.title });
      }

      // Check tableRows
      if (data.tableRows) {
        data.tableRows.forEach((row, i) => {
          for (const token of tokens) {
            if (row.col3 && row.col3.toLowerCase().includes(token.toLowerCase())) {
              // Ignore if German has "Referenzbereich Untergewicht"
              const lower = row.col3.toLowerCase();
              if (lang === 'de' && (lower.includes('referenzbereich untergewicht') || lower.includes('untergewicht') || lower.includes('übergewicht') || lower.includes('adipositas'))) {
                // If the rest of the string has English words:
                if (lower.includes('threshold') || lower.includes('baseline') || lower.includes('range') || lower.includes('cutoff') || lower.includes('screening')) {
                  issues.push({ slug, lang, row: i, field: 'col3', text: row.col3, token });
                }
              } else if (lang === 'es' && (lower.includes('peso bajo') || lower.includes('sobrepeso') || lower.includes('obesidad'))) {
                if (lower.includes('threshold') || lower.includes('baseline') || lower.includes('cutoff') || lower.includes('screening') || lower.includes('range')) {
                  issues.push({ slug, lang, row: i, field: 'col3', text: row.col3, token });
                }
              } else if (lang === 'fr' && (lower.includes('sous-poids') || lower.includes('surpoids') || lower.includes('obésité') || lower.includes('insuffisance'))) {
                if (lower.includes('threshold') || lower.includes('baseline') || lower.includes('cutoff') || lower.includes('screening') || lower.includes('range')) {
                  issues.push({ slug, lang, row: i, field: 'col3', text: row.col3, token });
                }
              } else {
                issues.push({ slug, lang, row: i, field: 'col3', text: row.col3, token });
              }
            }
          }
        });
      }

      // Check faqs
      if (data.faqs) {
        data.faqs.forEach((faq, i) => {
          if (/bmi\s+calculator\s+for\s+indians/i.test(faq.question) || /bmi\s+calculator\s+for\s+indians/i.test(faq.answer)) {
            issues.push({ slug, lang, faq: i, field: 'faq', question: faq.question });
          }
          if (lang === 'hi' && (faq.question.includes('(Indian BMI Standard)') || faq.question.includes('(Waist Size)'))) {
            issues.push({ slug, lang, faq: i, field: 'hi_faq', question: faq.question });
          }
        });
      }
    }
  }

  console.log('Total issues found in seoDatabase:', issues.length);
  console.log(JSON.stringify(issues, null, 2));
}

run();
