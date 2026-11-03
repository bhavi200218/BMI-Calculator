const fs = require('fs');
const path = require('path');

function search(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.git') {
        search(full);
      }
    } else {
      const ext = path.extname(entry.name);
      if (['.ts', '.js', '.mjs', '.astro', '.json', '.html', '.md'].includes(ext)) {
        const text = fs.readFileSync(full, 'utf8');
        if (text.includes('Understanding BMI') || text.includes('Asian-Population') || text.includes('18.5–22.9') || text.includes('18.5-22.9')) {
          const lines = text.split('\n');
          lines.forEach((l, i) => {
            if (l.includes('Understanding BMI') || (l.includes('18.5') && (l.toLowerCase().includes('guidance') || l.toLowerCase().includes('asian') || l.toLowerCase().includes('population')))) {
              console.log(`${full}:${i+1}: ${l.trim().slice(0, 150)}`);
            }
          });
        }
      }
    }
  }
}

search('.');

