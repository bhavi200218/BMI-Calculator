const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/utils/calculators.ts');
const content = fs.readFileSync(filePath, 'utf8');

// Find all hardcoded strings in calculate return statements or functions
const lines = content.split('\n');
lines.forEach((line, idx) => {
  if (/Category|Underweight|Overweight|Obese|Healthy|Normal|Elevated|Risk|Visceral|Not Provided/i.test(line)) {
    if (!line.includes('en:') && !line.includes('//') && !line.includes('import')) {
      console.log(`L${idx + 1}: ${line.trim()}`);
    }
  }
});
