const fs = require('fs');

const content = fs.readFileSync('src/components/ToolSEOContent.astro', 'utf8');

const sIdx = content.indexOf('"3d-bmi-calculator":');
const eIdx = content.indexOf('"bmi-chart":');
const block = content.substring(sIdx, eIdx);

const langs = ['en', 'es', 'fr', 'de', 'ko', 'hi'];

langs.forEach(lang => {
  console.log(`\n=================== LANG [${lang}] ===================`);
  const lIdx = block.indexOf(`"${lang}": {`);
  if (lIdx === -1) {
    console.log(`🔴 MISSING LANG: ${lang}`);
    return;
  }
  const nextLangs = langs.map(l => block.indexOf(`"${l}": {`, lIdx + 5)).filter(p => p !== -1);
  const lEnd = nextLangs.length > 0 ? Math.min(...nextLangs) : block.length;
  const lBlock = block.substring(lIdx, lEnd);

  // Parse eyebrow, title, intro, tableRows, faqs count
  console.log("Snippet:", lBlock.substring(0, 300).replace(/\n/g, ' '));
  const faqCount = (lBlock.match(/"question":/g) || []).length;
  const rowCount = (lBlock.match(/"col1":/g) || []).length;
  console.log(`Table Rows: ${rowCount} | FAQs: ${faqCount}`);
});
