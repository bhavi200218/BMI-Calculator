const fs = require('fs');

const content = fs.readFileSync('src/data/seoDatabase.ts', 'utf8');

const sIdx = content.indexOf('"bmr-calculator":');
const eIdx = content.indexOf('"tdee-calculator":');
const block = content.substring(sIdx, eIdx);

const langs = ['en', 'es', 'fr', 'de', 'ko', 'hi'];

langs.forEach(lang => {
  const lIdx = block.indexOf(`"${lang}": {`);
  if (lIdx === -1) {
    console.log(`MISSING LANG: ${lang}`);
    return;
  }
  const nextLangs = langs.map(l => block.indexOf(`"${l}": {`, lIdx + 5)).filter(p => p !== -1);
  const lEnd = nextLangs.length > 0 ? Math.min(...nextLangs) : block.length;
  const lBlock = block.substring(lIdx, lEnd);

  console.log(`\n=================== BMR LANG [${lang}] ===================`);
  // Find tableRows
  const trIdx = lBlock.indexOf('"tableRows":');
  const trEnd = lBlock.indexOf('"faqs":');
  if (trIdx !== -1) {
    console.log(lBlock.substring(trIdx, trEnd));
  }
});
