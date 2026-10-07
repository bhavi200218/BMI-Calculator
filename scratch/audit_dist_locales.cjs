const fs = require('fs');
const path = require('path');

const locales = ['es', 'fr', 'de', 'ko', 'hi'];
const forbiddenStrings = [
  'Underweight reference threshold',
  'Optimal healthy range for Indian adults',
  'Elevated cardiometabolic risk cutoff for Indians',
  'Class I obesity threshold under ICMR standards',
  'Severe obesity risk threshold',
  'BMI Calculator for Indians – Healthy Height Weight Chart for Indian Adults',
  'bmi calculator for indians'
];

let failures = [];

for (const loc of locales) {
  const filePath = path.join(__dirname, '..', 'dist', loc, 'bmi-calculator-for-indians', 'index.html');
  if (!fs.existsSync(filePath)) {
    failures.push('File missing: ' + filePath);
    continue;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  for (const str of forbiddenStrings) {
    if (content.includes(str)) {
      failures.push(`[${loc}] Found forbidden string: "${str}"`);
    }
  }

  const faqMatches = (content.match(/accordion-item/g) || []).length;
  const jsonLdMatch = (content.match(/"@type":\s*"FAQPage"/g) || []).length;
  console.log(`[${loc}] FAQ accordion items count: ${faqMatches}, FAQPage schema count: ${jsonLdMatch}`);
}

const hiPath = path.join(__dirname, '..', 'dist', 'hi', 'bmi-calculator-for-indians', 'index.html');
if (fs.existsSync(hiPath)) {
  const hiContent = fs.readFileSync(hiPath, 'utf8');
  const hiBadStrings = [
    '(Underweight)',
    '(Healthy Weight)',
    '(Overweight Cutoff 23)',
    '(Obese Class I)',
    '(Obese Class II)',
    'WHO और चिकित्सा मानक'
  ];
  for (const s of hiBadStrings) {
    if (hiContent.includes(s)) {
      failures.push(`[hi] Found English fallback/medical wording: "${s}"`);
    }
  }
}

if (failures.length === 0) {
  console.log('\nSUCCESS! All locale checks passed with ZERO forbidden strings or issues.');
} else {
  console.log('\nFAILURES DETECTED:');
  console.log(failures);
}
