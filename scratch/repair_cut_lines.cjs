const fs = require('fs');

const lines = fs.readFileSync('src/data/seoDatabase.ts', 'utf8').split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('5\'6"') || lines[i].includes('5\'6\\"')) {
    console.log(`Repairing line ${i+1}`);
    lines[i] = '          "answer": "An ideal weight for Indian adults keeps BMI between 18.5 and 22.9 kg/m². For example, for an Indian male or female of height 168 cm (5 ft 6 in), the healthy weight range is 52.2 kg to 64.6 kg."';
  }
}

fs.writeFileSync('src/data/seoDatabase.ts', lines.join('\n'), 'utf8');
console.log("Repair finished successfully!");
