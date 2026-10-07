const fs = require('fs');
const path = require('path');

const files = [
  'src/components/HealthContent.astro',
  'src/components/DiabetesRiskSEOSection.astro',
  'src/components/WaistHealthSEOSection.astro',
  'src/components/DeepHealthSEO.astro',
  'src/components/NewBMIFormulaSEOSection.astro'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`\n=================== ${file} ===================`);
    const content = fs.readFileSync(file, 'utf8');
    // Check if it handles lang or is hardcoded in English/Hindi
    const hasLang = content.includes('lang');
    console.log('Props / Lang handling present?', hasLang);
    // Check for "Underweight reference threshold" or "Optimal healthy range"
    ['Underweight reference threshold', 'Optimal healthy range', 'Elevated cardiometabolic', 'Class I obesity threshold', 'Severe obesity risk', 'Underweight'].forEach(term => {
      if (content.includes(term)) {
        console.log(`  MATCH: ${term}`);
      }
    });
  }
});
