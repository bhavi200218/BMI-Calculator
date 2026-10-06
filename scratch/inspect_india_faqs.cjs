const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'seoDatabase.ts'), 'utf8');

const lines = content.split('\n');
for (let i = 1770; i < Math.min(lines.length, 1920); i++) {
  if (lines[i].includes('"de":') || lines[i].includes('"ko":') || lines[i].includes('"hi":') || lines[i].includes('"faqs":')) {
    console.log(`${i + 1}: ${lines[i]}`);
  }
}
