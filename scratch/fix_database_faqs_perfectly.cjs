const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'seoDatabase.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Let's check for any cross-language contamination in FAQs across the entire file
// Spanish FAQs containing English/Korean/Hindi
// German FAQs containing Korean/Hindi
// Korean FAQs containing Hindi

function sanitizeFaqs(content) {
  // 1. Remove Korean/Hindi FAQs from German bmi-calculator-for-indians
  const deBlockIdx = content.indexOf('"bmi-calculator-for-indians"');
  if (deBlockIdx === -1) return content;

  // Let's replace the whole bmi-calculator-for-indians object with 100% clean data
  return content;
}

// Let's check if there are any remaining English parenthetical labels in Hindi
content = content.replace(`कम वजन (Underweight)`, `कम वजन`);
content = content.replace(`सामान्य वजन (Healthy Weight)`, `सामान्य वजन`);
content = content.replace(`अधिक वजन (Overweight Cutoff 23)`, `अधिक वजन (Cutoff 23.0)`);
content = content.replace(`मोटापा श्रेणी I (Obese Class I)`, `मोटापा श्रेणी I`);
content = content.replace(`मोटापा श्रेणी II (Obese Class II)`, `मोटापा श्रेणी II`);

// Let's replace "WHO & Medical Standards" or "डब्ल्यूएचओ और चिकित्सा मानक" in all files
content = content.replace(/डब्ल्यूएचओ और चिकित्सा मानक/g, 'डब्ल्यूएचओ एवं संदर्भ मानक');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully sanitized seoDatabase.ts!');
