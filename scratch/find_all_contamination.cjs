const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'seoDatabase.ts'), 'utf8');

// Match all keys in seoDatabase
// Let's find all occurrences of "col3": "..." or "title": "..." or "question": "..." in non-en sections
const lines = content.split('\n');
let currentKey = '';
let currentLang = '';

const contaminatedLines = [];

lines.forEach((line, idx) => {
  const lineNum = idx + 1;
  const keyMatch = line.match(/^\s*"(.*?)":\s*\{/);
  if (keyMatch) {
    if (['en', 'hi', 'es', 'fr', 'de', 'ko'].includes(keyMatch[1])) {
      currentLang = keyMatch[1];
    } else {
      currentKey = keyMatch[1];
    }
  }

  if (currentLang !== 'en' && currentLang !== '') {
    // Check for obvious English patterns in col3, col1, title, question, eyebrow
    if (line.includes('"col3":') || line.includes('"col1":') || line.includes('"eyebrow":') || line.includes('"title":') || line.includes('"question":')) {
      const lower = line.toLowerCase();
      if (
        lower.includes('underweight') ||
        lower.includes('healthy range') ||
        lower.includes('for indian') ||
        lower.includes('cardiometabolic') ||
        lower.includes('classification') ||
        lower.includes('threshold') ||
        lower.includes('bmi calculator for indians') ||
        lower.includes('(obese class i)') ||
        lower.includes('(obese class ii)')
      ) {
        contaminatedLines.push({ lineNum, currentKey, currentLang, text: line.trim() });
      }
    }
  }
});

console.log(`FOUND ${contaminatedLines.length} CONTAMINATED LINES IN NON-ENGLISH ENTRIES:`);
contaminatedLines.forEach(item => {
  console.log(`[Line ${item.lineNum}] ${item.currentKey} (${item.currentLang}): ${item.text}`);
});
