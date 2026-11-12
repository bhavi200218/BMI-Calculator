const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('tests');
for (const file of files) {
  const content = fs.readFileSync(path.join('tests', file), 'utf8');
  const lines = content.split('\n');
  lines.forEach((l, i) => {
    if (l.includes('dist/index.html') || l.includes('src/pages/index.astro')) {
      console.log(`${file}:${i+1}: ${l.trim()}`);
    }
  });
}

