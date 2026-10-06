const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'seoDatabase.ts'), 'utf8');

const idx = content.indexOf('"bmi-calculator-for-indians":');
const block = content.slice(idx, idx + 15000);
const koIdx = block.indexOf('"ko":');
const koChunk = block.slice(koIdx, koIdx + 2500);

console.log('=== KOREAN BLOCK IN bmi-calculator-for-indians ===');
console.log(koChunk);
