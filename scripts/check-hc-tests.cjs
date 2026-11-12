const fs = require('fs');

const files = fs.readdirSync('tests');
for (const file of files) {
  const c = fs.readFileSync('tests/' + file, 'utf8');
  const lines = c.split('\n');
  lines.forEach((l, i) => {
    if (l.includes('HealthContent') && (l.includes('index') || l.includes('Homepage'))) {
      console.log(`${file}:${i+1}: ${l.trim()}`);
    }
  });
}

