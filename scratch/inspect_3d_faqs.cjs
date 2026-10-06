const fs = require('fs');

const tsContent = fs.readFileSync('src/data/seoDatabase.ts', 'utf8');

// Extract 3d-bmi-calculator block
const sIdx = tsContent.indexOf('"3d-bmi-calculator":');
const eIdx = tsContent.indexOf('"bmi-chart":');
const block = tsContent.substring(sIdx, eIdx);

const langs = ['en', 'es', 'fr', 'de', 'ko', 'hi'];

langs.forEach(lang => {
  const lIdx = block.indexOf(`"${lang}": {`);
  if (lIdx === -1) return;
  const nextLangs = langs.map(l => block.indexOf(`"${l}": {`, lIdx + 5)).filter(p => p !== -1);
  const lEnd = nextLangs.length > 0 ? Math.min(...nextLangs) : block.length;
  const lBlock = block.substring(lIdx, lEnd);

  const faqsMatch = lBlock.match(/"question":\s*"([^"]+)"/g);
  console.log(`\n=== LANG [${lang}] (FAQ count: ${faqsMatch ? faqsMatch.length : 0}) ===`);
  if (faqsMatch) {
    faqsMatch.forEach((q, i) => console.log(`  FAQ ${i+1}: ${q}`));
  }
});
