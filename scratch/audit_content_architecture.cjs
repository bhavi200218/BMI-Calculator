const fs = require('fs');
const path = require('path');

function walkDir(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (!file.startsWith('.') && file !== 'node_modules' && file !== 'dist') {
        walkDir(filePath, fileList);
      }
    } else if (file.endsWith('.astro') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.tsx') || file.endsWith('.jsx')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const files = walkDir(path.join(__dirname, '..', 'src'));
console.log(`Found ${files.length} source files in src/`);

let globalPageMatches = [];
let dedicatedPageMatches = [];

for (const f of files) {
  const relPath = path.relative(path.join(__dirname, '..'), f);
  const content = fs.readFileSync(f, 'utf8');
  
  if (content.includes('Indian') || content.includes('ICMR') || content.includes('indians')) {
    const isDedicated = relPath.includes('bmi-calculator-for-indians') || relPath.includes('IndianBMI');
    if (isDedicated) {
      dedicatedPageMatches.push(relPath);
    } else {
      globalPageMatches.push(relPath);
    }
  }
}

console.log('\n--- Dedicated Indian Calculator Source Files ---');
dedicatedPageMatches.forEach(f => console.log(`  [OK] ${f}`));

console.log('\n--- General / Shared Files Containing "Indian" / "ICMR" (INSPECT THESE) ---');
globalPageMatches.forEach(f => console.log(`  [INSPECT] ${f}`));
