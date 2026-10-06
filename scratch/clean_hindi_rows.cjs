const fs = require('fs');

const filePath = 'src/data/seoDatabase.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Replace English parentheses in Hindi tableRows for bmi-calculator-for-indians
content = content.replace('"col1": "कम वजन (Underweight)"', '"col1": "कम वजन"');
content = content.replace('"col1": "सामान्य वजन (Healthy Weight)"', '"col1": "सामान्य (स्वस्थ) वजन"');
content = content.replace('"col1": "अधिक वजन (Overweight Cutoff 23)"', '"col1": "अधिक वजन (जोखिम सीमा 23.0)"');
content = content.replace('"col1": "मोटापा श्रेणी I (Obese Class I)"', '"col1": "मोटापा श्रेणी I"');
content = content.replace('"col1": "मोटापा श्रेणी II (Obese Class II)"', '"col1": "मोटापा श्रेणी II (गंभीर)"');

// Check if there are any other English parentheses in Hindi table rows across the database
const matches = content.match(/"col1":\s*"[\u0900-\u097F\s]+\([A-Za-z0-9\s-]+\)"/g);
if (matches) {
  console.log('Found additional Hindi col1 with English parentheses:', matches);
  matches.forEach(m => {
    // Strip English parentheses
    const cleaned = m.replace(/\s*\([A-Za-z0-9\s-]+\)/, '');
    content = content.replace(m, cleaned);
  });
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Hindi table rows cleaned!');
