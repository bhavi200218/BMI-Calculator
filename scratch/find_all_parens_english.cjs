const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

const engInParensRegex = /\((Underweight|Healthy Weight|Overweight|Obese Class|Obesity|Severe Obesity|Action Threshold|Overweight Cutoff|Visceral Risk)\)/i;

let count = 0;

walkDir(path.join(__dirname, '../src'), (filePath) => {
  if (!filePath.endsWith('.ts') && !filePath.endsWith('.astro') && !filePath.endsWith('.js')) return;
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    if (engInParensRegex.test(line)) {
      console.log(`${path.basename(filePath)} L${idx + 1}: ${line.trim()}`);
      count++;
    }
  });
});

console.log('Total parenthetical English matches:', count);
