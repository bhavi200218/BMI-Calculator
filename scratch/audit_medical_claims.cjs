const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

const terms = [
  'clinical-grade', 'clinical grade', 'medically reviewed', 'medical reviewed',
  'doctor reviewed', 'physician reviewed', 'clinically accurate', 'clinical accuracy',
  'medical-grade', 'medical grade', 'diagnostic', 'gold standard',
  'most accurate', 'most precise', 'exact result', 'precise result',
  'guaranteed', '100% accurate', '±10%', '±2.5%', 'clinical tool', 'medical tool'
];

const termRegex = new RegExp(terms.join('|'), 'i');

let matchesCount = 0;

walkDir(path.join(__dirname, '../src'), (filePath) => {
  if (!filePath.endsWith('.ts') && !filePath.endsWith('.astro') && !filePath.endsWith('.js') && !filePath.endsWith('.tsx')) return;
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    if (termRegex.test(line)) {
      // Exclude legitimate disclaimers like "not a diagnosis", "not diagnostic advice", "not a medical tool"
      const lower = line.toLowerCase();
      const isNegated = lower.includes('not a diagnosis') || lower.includes('does not diagnose') || lower.includes('not a medical') || lower.includes('not diagnostic') || lower.includes('not intended as a diagnosis') || lower.includes('not replace medical');
      if (!isNegated) {
        console.log(`[CLAIM MATCH] ${path.relative(path.join(__dirname, '..'), filePath)} L${idx + 1}: ${line.trim()}`);
        matchesCount++;
      }
    }
  });
});

console.log('Total un-negated claim matches:', matchesCount);
