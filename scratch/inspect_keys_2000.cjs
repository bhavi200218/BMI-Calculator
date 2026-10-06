const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'seoDatabase.ts'), 'utf8');
const lines = content.split('\n');

for (let i = 1980; i < 2250; i++) {
  if (lines[i].includes('"en":') || lines[i].includes('"es":') || lines[i].includes('"fr":') || lines[i].includes('"de":') || lines[i].includes('"ko":') || lines[i].includes('"hi":') || lines[i].includes('"bmi-calculator')) {
    console.log(`${i + 1}: ${lines[i]}`);
  }
}
