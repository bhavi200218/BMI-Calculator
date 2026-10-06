const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'seoDatabase.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Let's write a parser that strips out any FAQ object whose question contains characters outside the target language script!
// Language scripts:
// de/es/fr/en: NO Hangul [\u3131-\u318E\uAC00-\uD7A3], NO Devanagari [\u0900-\u097F]
// ko: NO Devanagari [\u0900-\u097F], MUST be Korean
// hi: MUST be Devanagari [\u0900-\u097F]

const lines = content.split('\n');
let currentLang = '';
const cleanedLines = [];

let skipBlock = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  const langMatch = line.match(/^\s*"(en|hi|es|fr|de|ko)":\s*\{/);
  if (langMatch) {
    currentLang = langMatch[1];
  }

  // Check if line is a question line in faqs array
  if (line.includes('"question":')) {
    let isBad = false;
    if (['en', 'es', 'fr', 'de'].includes(currentLang)) {
      if (/[\u3131-\u318E\uAC00-\uD7A3\u0900-\u097F]/.test(line)) isBad = true;
    } else if (currentLang === 'ko') {
      if (/[\u0900-\u097F]/.test(line)) isBad = true;
    } else if (currentLang === 'hi') {
      if (/[\u3131-\u318E\uAC00-\uD7A3]/.test(line)) isBad = true;
    }

    if (isBad) {
      // Find where this FAQ object ends (look for }, or })
      while (i < lines.length && !lines[i].includes('}')) {
        i++;
      }
      continue;
    }
  }

  cleanedLines.push(line);
}

fs.writeFileSync(filePath, cleanedLines.join('\n'), 'utf8');
console.log('Successfully cleaned all cross-language FAQ objects from seoDatabase.ts!');
