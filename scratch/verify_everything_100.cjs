const fs = require('fs');
const path = require('path');

const terms = [
  'Underweight reference threshold',
  'Optimal healthy range for Indian adults',
  'Elevated cardiometabolic risk cutoff for Indians',
  'Class I obesity threshold under ICMR standards',
  'Severe obesity risk threshold',
  'CDC Adult BMI Guidelines',
  'WHO Global Health Observatory Adult BMI Classification',
  'medical standards',
  'Healthy Height Weight Chart for Indian Adults – Guía y Calculadora'
];

function searchInDir(dir) {
  const items = fs.readdirSync(dir);
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!fullPath.includes('node_modules') && !fullPath.includes('.git')) {
        searchInDir(fullPath);
      }
    } else {
      if (fullPath.endsWith('.ts') || fullPath.endsWith('.astro') || fullPath.endsWith('.html') || fullPath.endsWith('.json')) {
        const text = fs.readFileSync(fullPath, 'utf8');
        terms.forEach(term => {
          if (text.toLowerCase().includes(term.toLowerCase())) {
            // Check if match is in non-english file/entry
            const normPath = fullPath.toLowerCase();
            if (normPath.includes('/es/') || normPath.includes('\\es\\') ||
                normPath.includes('/fr/') || normPath.includes('\\fr\\') ||
                normPath.includes('/de/') || normPath.includes('\\de\\') ||
                normPath.includes('/ko/') || normPath.includes('\\ko\\') ||
                normPath.includes('/hi/') || normPath.includes('\\hi\\')) {
              console.log(`MATCH found in [${fullPath}]: ${term}`);
            }
          }
        });
      }
    }
  });
}

console.log('=== SEARCHING SRC DIRECTORY ===');
searchInDir('src');

console.log('\n=== SEARCHING DIST DIRECTORY ===');
searchInDir('dist');
