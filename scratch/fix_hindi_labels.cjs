const fs = require('fs');
const path = require('path');

const seoDbPath = path.join(__dirname, '../src/data/seoDatabase.ts');
let seoDbContent = fs.readFileSync(seoDbPath, 'utf8');

// Replacements for Hindi parenthetical English words
const hiReplacements = [
  { from: /कम वजन \(Underweight\)/g, to: 'कम वजन' },
  { from: /सामान्य वजन \(Healthy Weight\)/g, to: 'सामान्य वजन' },
  { from: /अधिक वजन \(Overweight Cutoff 23\)/g, to: 'अधिक वजन (कटऑफ 23.0)' },
  { from: /मोटापा श्रेणी I \(Obese Class I\)/g, to: 'मोटापा श्रेणी I' },
  { from: /मोटापा श्रेणी II \(Obese Class II\)/g, to: 'मोटापा श्रेणी II' },
  { from: /मांसपेशी वृद्धि \(Hypertrophy\)/g, to: 'मांसपेशी वृद्धि' },
  { from: /ओवरवेट \(Overweight\)/g, to: 'अधिक वजन' },
  { from: /ऑबिसिटी \(Obesity\)/g, to: 'मोटापा' }
];

let replacedCount = 0;
hiReplacements.forEach(({ from, to }) => {
  const matches = seoDbContent.match(from);
  if (matches) {
    replacedCount += matches.length;
    seoDbContent = seoDbContent.replace(from, to);
  }
});

fs.writeFileSync(seoDbPath, seoDbContent, 'utf8');
console.log(`Replaced ${replacedCount} Hindi English parenthetical labels in seoDatabase.ts`);

// Also check UniversalCalculator.astro
const uniCalcPath = path.join(__dirname, '../src/components/UniversalCalculator.astro');
let uniCalcContent = fs.readFileSync(uniCalcPath, 'utf8');
let uniReplaced = 0;

hiReplacements.forEach(({ from, to }) => {
  const matches = uniCalcContent.match(from);
  if (matches) {
    uniReplaced += matches.length;
    uniCalcContent = uniCalcContent.replace(from, to);
  }
});

fs.writeFileSync(uniCalcPath, uniCalcContent, 'utf8');
console.log(`Replaced ${uniReplaced} Hindi English parenthetical labels in UniversalCalculator.astro`);
