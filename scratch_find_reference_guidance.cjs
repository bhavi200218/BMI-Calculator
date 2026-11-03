const fs = require('fs');
const path = require('path');

function search(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      search(full);
    } else if (/\.(ts|js|astro|json)$/.test(entry.name)) {
      const text = fs.readFileSync(full, 'utf8');
      const lines = text.split('\n');
      lines.forEach((l, idx) => {
        const lower = l.toLowerCase();
        if (
          lower.includes('asian-population reference') ||
          lower.includes('reference guidance') ||
          (lower.includes('understanding bmi') && lower.includes('asian')) ||
          (lower.includes('18.5') && lower.includes('guidance')) ||
          (lower.includes('18.5') && lower.includes('asian-population'))
        ) {
          console.log(`${full}:${idx+1}: ${l.trim().slice(0, 150)}`);
        }
      });
    }
  }
}

search('src');
