const fs = require('fs');
const path = require('path');

const files = [
  'src/components/HealthContent.astro',
  'src/components/DiabetesRiskSEOSection.astro',
  'src/components/WaistHealthSEOSection.astro'
];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const lines = content.split('\n');
  console.log(`\n=================== ${f} ===================`);
  lines.forEach((l, i) => {
    if (l.includes('Underweight') || l.includes('Healthy Weight') || l.includes('Overweight') || l.includes('Obese Class') || l.includes('कम वजन')) {
      console.log(`${i + 1}: ${l.trim()}`);
    }
  });
});
