const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'seoDatabase.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Regex to remove Hangul FAQs from German entries
// Hangul range: [\u3131-\u318E\uAC00-\uD7A3]
// Devanagari range: [\u0900-\u097F]

const lines = content.split('\n');
let currentLang = '';
let inFaqs = false;

const cleanLines = [];
lines.forEach((line) => {
  const langMatch = line.match(/^\s*"(en|hi|es|fr|de|ko)":\s*\{/);
  if (langMatch) {
    currentLang = langMatch[1];
  }

  // If in DE entry and line has Hangul -> skip
  if (currentLang === 'de' && /[\u3131-\u318E\uAC00-\uD7A3]/.test(line)) {
    return;
  }
  // If in KO entry and line has Devanagari -> skip
  if (currentLang === 'ko' && /[\u0900-\u097F]/.test(line)) {
    return;
  }
  // If in ES/FR/DE entry and line has Devanagari or Hangul -> skip
  if (['es', 'fr', 'de'].includes(currentLang) && /[\u0900-\u097F\u3131-\u318E\uAC00-\uD7A3]/.test(line)) {
    return;
  }

  cleanLines.push(line);
});

fs.writeFileSync(filePath, cleanLines.join('\n'), 'utf8');
console.log('Cleaned cross-language FAQ entries from seoDatabase.ts!');
