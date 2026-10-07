const fs = require('fs');
const path = require('path');

function getPages(dir, pageList = []) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      getPages(full, pageList);
    } else if (f.endsWith('.astro')) {
      pageList.push(full);
    }
  }
  return pageList;
}

const pages = getPages(path.join(__dirname, '..', 'src', 'pages'));

const matrix = [];

for (const p of pages) {
  const rel = path.relative(path.join(__dirname, '..', 'src', 'pages'), p);
  const content = fs.readFileSync(p, 'utf8');
  
  const isIndianDedicated = rel.includes('bmi-calculator-for-indians') || rel.includes('indian');
  const hasIndianText = content.includes('Indian') || content.includes('ICMR') || content.includes('indians');
  
  let classification = isIndianDedicated ? 'Population-Specific (Indian)' : 'Global / General';
  let isCorrect = true;
  let note = '';
  
  if (!isIndianDedicated && hasIndianText) {
    // Check if it's a reference or link to the indian calculator
    if (content.includes('bmi-calculator-for-indians') || content.includes('Asian/Indian')) {
      note = 'Contains cross-link or reference to Indian calculator (Acceptable)';
    } else {
      isCorrect = false;
      note = 'INAPPROPRIATE INDIAN INSERTION DETECTED!';
    }
  } else if (isIndianDedicated) {
    note = 'Dedicated Indian BMI page (Appropriate)';
  } else {
    note = 'Clean Global page';
  }
  
  matrix.push({
    page: rel,
    classification,
    isCorrect: isCorrect ? 'PASS' : 'FAIL',
    note
  });
}

console.log('=== CONTENT ARCHITECTURE PAGE MATRIX ===\n');
console.table(matrix);
