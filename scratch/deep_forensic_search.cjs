const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'seoDatabase.ts'), 'utf8');

// Check Hindi entry in bmi-calculator-for-indians and bmi-calculator-india
console.log('=== SEARCHING FOR PARENTHESES IN HINDI ENTRIES ===');
const lines = content.split('\n');
lines.forEach((l, i) => {
  if (l.includes('(Underweight)') || l.includes('(Healthy Weight)') || l.includes('(Overweight Cutoff') || l.includes('चिकित्सा मानक')) {
    console.log(`Line ${i + 1}: ${l.trim()}`);
  }
});

// Check DE and KO FAQ counts in seoDatabase.ts
['de', 'ko'].forEach(lang => {
  ['bmi-calculator-for-indians', 'bmi-calculator-india'].forEach(slug => {
    const idx = content.indexOf(`"${slug}":`);
    if (idx !== -1) {
      const block = content.slice(idx, idx + 20000);
      const langIdx = block.indexOf(`"${lang}":`);
      if (langIdx !== -1) {
        const langChunk = block.slice(langIdx, langIdx + 4000);
        const faqMatches = langChunk.match(/"question"\s*:\s*".*?"/g) || [];
        console.log(`\n=== FAQ count for [${slug}] -> [${lang}]: ${faqMatches.length} ===`);
        faqMatches.forEach((q, qi) => console.log(`  FAQ ${qi + 1}: ${q}`));
      }
    }
  });
});
