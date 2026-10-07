const fs = require('fs');
const path = require('path');

const filesToInspect = [
  'src/components/UniversalCalculator.astro',
  'src/data/seoDatabase.ts',
  'src/utils/blogArticles.ts',
  'src/utils/bmiReference.js',
  'src/utils/calculators.ts'
];

for (const relPath of filesToInspect) {
  const fullPath = path.join(__dirname, '..', relPath);
  if (!fs.existsSync(fullPath)) continue;
  const content = fs.readFileSync(fullPath, 'utf8');
  const lines = content.split('\n');
  console.log(`\n========================================`);
  console.log(`FILE: ${relPath}`);
  console.log(`========================================`);
  
  lines.forEach((line, index) => {
    if (line.includes('Indian') || line.includes('ICMR') || line.includes('indians')) {
      console.log(`  L${index + 1}: ${line.trim()}`);
    }
  });
}
