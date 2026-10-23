const fs = require('fs');
const content = fs.readFileSync('src/data/seoDatabase.ts', 'utf8');
const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const m = line.match(/^\s*["']([a-z0-9-]+)["']:\s*\{/);
  if (m) {
    const k = m[1];
    if (!['en','es','fr','de','ko','hi'].includes(k)) {
      console.log(`${k.padEnd(35)} -> Line ${i + 1}`);
    }
  }
}
