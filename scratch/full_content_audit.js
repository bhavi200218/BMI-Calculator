import fs from 'fs';

const content = fs.readFileSync('src/components/ToolSEOContent.astro', 'utf-8');

const match = content.match(/const seoDatabase[^{]*= (\{[\s\S]*?\n\};)/);
if (!match) {
  console.error('Could not find seoDatabase');
  process.exit(1);
}

const databaseCode = match[1];
let seoDatabase;
eval('seoDatabase = ' + databaseCode.replace(/;\s*$/, ''));

const langs = ['en', 'es', 'fr', 'de', 'ko', 'hi'];
const slugs = Object.keys(seoDatabase);

const summary = {};

for (const slug of slugs) {
  summary[slug] = {};
  for (const lang of langs) {
    const data = seoDatabase[slug][lang];
    if (!data) {
      summary[slug][lang] = 'MISSING';
      continue;
    }
    const issues = [];
    
    // Check eyebrow/title/intro for English leaks in non-en
    if (lang !== 'en') {
      if (data.eyebrow && /[a-zA-Z]/.test(data.eyebrow) && lang === 'hi') issues.push('English in eyebrow');
      if (data.eyebrow && data.eyebrow.includes('WHO Health Standards') && lang !== 'es' && lang !== 'fr') issues.push('Untranslated eyebrow');
      if (data.title && (data.title.includes('Calculator') || data.title.includes('Free') || data.title.includes('Tool'))) {
        if (lang === 'hi' || lang === 'ko') issues.push(`English in title (${data.title})`);
      }
      if (data.intro && data.intro.includes('Our free') && lang !== 'en') issues.push('English intro leak');
      if (data.formulaTitle && data.formulaTitle.includes('Formula') && (lang === 'hi' || lang === 'ko')) issues.push('English formulaTitle leak');
      if (data.formulaDesc && data.formulaDesc.includes('Metric:') && (lang === 'hi' || lang === 'ko')) issues.push('English formulaDesc leak');
    }

    // Check table rows
    if (data.tableRows) {
      data.tableRows.forEach((r, idx) => {
        if (lang !== 'en') {
          if (r.col1 && /reference range|population/i.test(r.col1)) issues.push(`English in col1 row ${idx+1}`);
          if (r.col3 && /reference range|population/i.test(r.col3)) issues.push(`English in col3 row ${idx+1}`);
        }
      });
    }

    // Check FAQs
    if (!data.faqs || data.faqs.length === 0) {
      issues.push('No FAQs');
    } else {
      const qTexts = data.faqs.map(f => f.question);
      const uniqueQTexts = new Set(qTexts);
      if (uniqueQTexts.size < qTexts.length) {
        issues.push(`Duplicate FAQ questions (${qTexts.length - uniqueQTexts.size} duplicates)`);
      }
      data.faqs.forEach((f, idx) => {
        if (lang !== 'en' && f.answer.includes('personal data against standard formulas')) {
          issues.push(`Generic templated answer in FAQ #${idx+1}`);
        }
        if (lang !== 'en' && f.question.includes('कैलकुलेटर कैसे काम करता है') && qTexts.filter(q => q === f.question).length > 1) {
          issues.push(`Repetitive generic question FAQ #${idx+1}`);
        }
      });
    }

    summary[slug][lang] = issues.length ? issues : 'OK';
  }
}

console.log(JSON.stringify(summary, null, 2));
