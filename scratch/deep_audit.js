import fs from 'fs';

const content = fs.readFileSync('src/components/ToolSEOContent.astro', 'utf-8');

// Extract seoDatabase object
const match = content.match(/const seoDatabase[^{]*= (\{[\s\S]*?\n\};)/);
if (!match) {
  console.error('Could not find seoDatabase');
  process.exit(1);
}

// Evaluate object safely in JS sandbox context
const databaseCode = match[1];
let seoDatabase;
try {
  eval('seoDatabase = ' + databaseCode.replace(/;\s*$/, ''));
} catch (err) {
  console.error('Eval error:', err.message);
  process.exit(1);
}

const langs = ['en', 'es', 'fr', 'de', 'ko', 'hi'];
const slugs = Object.keys(seoDatabase);

console.log(`Auditing ${slugs.length} calculators across ${langs.length} languages...`);

let issuesCount = 0;

for (const slug of slugs) {
  const calcObj = seoDatabase[slug];
  for (const lang of langs) {
    if (!calcObj[lang]) {
      console.log(`❌ [${slug}] Missing language: ${lang}`);
      issuesCount++;
      continue;
    }
    const data = calcObj[lang];
    // Check if title or intro contains English words on non-English pages
    if (lang !== 'en') {
      // Check for English master text leaks in non-English intro/title
      if (data.title && data.title.includes('Calculator') && lang !== 'de' && lang !== 'es' && lang !== 'fr') {
        console.log(`⚠️ [${slug}][${lang}] Title might be unlocalized: "${data.title}"`);
        issuesCount++;
      }
      
      // Check for generic repetitive Q&As or untranslated questions
      if (data.faqs) {
        data.faqs.forEach((faq, i) => {
          if (faq.question.includes('कैलकुलेटर कैसे काम करता है') && slug !== 'generic') {
            console.log(`⚠️ [${slug}][${lang}] Generic FAQ #${i + 1}: "${faq.question}"`);
            issuesCount++;
          }
          if (faq.answer.includes('This calculator evaluates') || faq.answer.includes('standard formulas')) {
            console.log(`⚠️ [${slug}][${lang}] English answer leak in FAQ #${i + 1}`);
            issuesCount++;
          }
        });
      }

      // Check tableRows col3 for English text leaks
      if (data.tableRows) {
        data.tableRows.forEach((row, i) => {
          if (row.col3 && row.col3.includes('reference range') && lang !== 'en') {
            console.log(`⚠️ [${slug}][${lang}] English table col3 leak at row ${i + 1}: "${row.col3}"`);
            issuesCount++;
          }
        });
      }
    }
  }
}

console.log(`\nAudit complete. Total potential quality issues found: ${issuesCount}`);
