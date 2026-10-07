const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '../dist/hi/bmi-calculator-for-indians/index.html');
if (fs.existsSync(htmlPath)) {
  const content = fs.readFileSync(htmlPath, 'utf8');
  const h4Regex = /<h4[^>]*>([\s\S]*?)<\/h4>/gi;
  let match;
  let idx = 0;
  while ((match = h4Regex.exec(content)) !== null) {
    idx++;
    console.log(`H4 #${idx}: ${match[1].trim()}`);
  }
} else {
  console.log('File does not exist yet. Run build.');
}
