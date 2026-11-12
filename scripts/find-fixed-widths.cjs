const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    if (file === 'node_modules' || file === 'dist' || file === '.git') continue;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else if (file.endsWith('.astro') || file.endsWith('.html') || file.endsWith('.js') || file.endsWith('.ts') || file.endsWith('.mjs')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const lines = content.split('\n');
      lines.forEach((line, idx) => {
        const matches = line.match(/width=['"][3-9][0-9]{2,}['"]|width:[ ]*[3-9][0-9]{2,}px|min-w-\[[3-9][0-9]{2,}px\]|w-\[[3-9][0-9]{2,}px\]/g);
        if (matches) {
          results.push({ file: fullPath, line: idx + 1, text: line.trim(), matches });
        }
      });
    }
  }
  return results;
}

const found = walk('./src');
console.log(JSON.stringify(found, null, 2));

