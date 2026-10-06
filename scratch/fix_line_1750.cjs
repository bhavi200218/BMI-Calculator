const fs = require('fs');

const lines = fs.readFileSync('src/data/seoDatabase.ts', 'utf8').split('\n');

console.log("Line 1750 currently:", lines[1749]);

lines[1749] = '          "answer": "An ideal weight for Indian adults keeps BMI between 18.5 and 22.9 kg/m². For example, for an Indian male or female of height 168 cm (5 ft 6 in), the healthy weight range is 52.2 kg to 64.6 kg."';

// Also check all lines around 1740-1760 and fix any line ending with 5'6"
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('5\'6"') || lines[i].includes('5\'6\\"')) {
    console.log(`Fixing line ${i+1}:`, lines[i].substring(0, 50));
    lines[i] = '          "answer": "An ideal weight for Indian adults keeps BMI between 18.5 and 22.9 kg/m². For example, for an Indian male or female of height 168 cm (5 ft 6 in), the healthy weight range is 52.2 kg to 64.6 kg."';
  }
}

fs.writeFileSync('src/data/seoDatabase.ts', lines.join('\n'), 'utf8');
console.log("Line 1750 fix script finished.");
