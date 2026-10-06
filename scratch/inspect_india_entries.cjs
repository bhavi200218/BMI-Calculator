const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'src', 'data', 'seoDatabase.ts');
const content = fs.readFileSync(file, 'utf8');
const lines = content.split('\n');

function inspectBlock(startLine, name) {
  console.log(`\n=================== ${name} (Line ${startLine}) ===================`);
  for (let i = startLine - 1; i < Math.min(lines.length, startLine + 350); i++) {
    const l = lines[i];
    if (l.trim() === '  },' && i > startLine + 20) {
      console.log(`END OF BLOCK ${name} at Line ${i + 1}`);
      break;
    }
    // Print language keys and col3 entries
    if (l.includes('"en": {') || l.includes('"hi": {') || l.includes('"es": {') || l.includes('"fr": {') || l.includes('"de": {') || l.includes('"ko": {')) {
      console.log(`--- Line ${i + 1}: ${l.trim()}`);
    }
    if (l.includes('"col3":') || l.includes('"title":') || l.includes('question":')) {
      if (l.includes('Underweight') || l.includes('bmi calculator') || l.includes('Optimal') || l.includes('Class I')) {
        console.log(`Line ${i + 1}: ${l.trim()}`);
      }
    }
  }
}

inspectBlock(1572, 'bmi-calculator-india');
inspectBlock(1980, 'bmi-calculator-for-indians');
