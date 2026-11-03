const fs = require('fs');

function checkFile(path) {
  if (!fs.existsSync(path)) return;
  const html = fs.readFileSync(path, 'utf8');
  console.log('=== Checking:', path);
  const lines = html.split('\n');
  lines.forEach((l, i) => {
    if (l.includes('18.5')) {
      // Find all snippets around 18.5
      let idx = 0;
      while ((idx = l.indexOf('18.5', idx)) !== -1) {
        const start = Math.max(0, idx - 100);
        const end = Math.min(l.length, idx + 150);
        console.log(`[Line ${i+1}] ...${l.slice(start, end).replace(/\s+/g, ' ')}...`);
        idx += 4;
      }
    }
  });
}

checkFile('dist/index.html');
checkFile('dist/en/index.html');
