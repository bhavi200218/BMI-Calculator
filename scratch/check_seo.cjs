const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'src', 'data', 'seoDatabase.ts');
const content = fs.readFileSync(file, 'utf8');

// Let's inspect where bmi-calculator-for-indians and bmi-calculator-india are
const lines = content.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('"bmi-calculator-for-indians"') || line.includes('"bmi-calculator-india"')) {
    console.log(`Line ${idx + 1}: ${line}`);
  }
});
