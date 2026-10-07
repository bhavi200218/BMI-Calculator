const { seoDatabase, tableUi } = require('./seoDatabase.cjs');

const langs = ['en', 'es', 'fr', 'de', 'ko', 'hi'];
const slugs = Object.keys(seoDatabase);

console.log(`Auditing all ${slugs.length} calculators in seoDatabase for all ${langs.length} locales...\n`);

let missingTableRows = 0;
let missingFaqs = 0;
let missingLocales = 0;
let englishLeaksInRows = 0;
let slugLeaksInFaqs = 0;

slugs.forEach(slug => {
  const item = seoDatabase[slug];
  langs.forEach(lang => {
    if (!item[lang]) {
      console.log(`[MISSING LOCALE] ${slug} has no '${lang}'`);
      missingLocales++;
    } else {
      const locData = item[lang];
      if (!locData.tableRows || locData.tableRows.length === 0) {
        console.log(`[NO TABLEROWS] ${slug} [${lang}] has no tableRows`);
        missingTableRows++;
      } else if (lang !== 'en') {
        locData.tableRows.forEach((r, idx) => {
          if (/underweight reference threshold|optimal healthy range|elevated cardiometabolic risk cutoff|class i obesity threshold under icmr|severe obesity risk threshold/i.test(r.col3)) {
            console.log(`[ENGLISH ROW FALLBACK] ${slug} [${lang}] row ${idx}: ${r.col3}`);
            englishLeaksInRows++;
          }
        });
      }

      if (!locData.faqs || locData.faqs.length === 0) {
        console.log(`[NO FAQS] ${slug} [${lang}] has no faqs`);
        missingFaqs++;
      } else if (lang !== 'en') {
        locData.faqs.forEach((f, idx) => {
          if (f.question.includes('bmi calculator for indians') || f.answer.includes('bmi calculator for indians')) {
            console.log(`[SLUG LEAK IN FAQ] ${slug} [${lang}] faq ${idx}: ${f.question}`);
            slugLeaksInFaqs++;
          }
        });
      }
    }
  });
});

console.log(`\n================ AUDIT SUMMARY ================`);
console.log(`Total calculators checked: ${slugs.length}`);
console.log(`Missing locales: ${missingLocales}`);
console.log(`Missing tableRows: ${missingTableRows}`);
console.log(`Missing faqs: ${missingFaqs}`);
console.log(`English leaks in rows: ${englishLeaksInRows}`);
console.log(`Slug leaks in FAQs: ${slugLeaksInFaqs}`);
console.log(`===============================================\n`);
