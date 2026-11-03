const fs = require('fs');
const path = require('path');

function searchAll(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.git') {
        searchAll(full);
      }
    } else {
      if (full.endsWith('.html') || full.endsWith('.astro') || full.endsWith('.ts') || full.endsWith('.json')) {
        const text = fs.readFileSync(full, 'utf8');
        if (text.includes('Understanding BMI') || text.toLowerCase().includes('asian-population reference') || text.includes('18.5–22.9 in Asian')) {
          console.log('MATCH:', full);
          const lines = text.split('\n');
          lines.forEach((l, i) => {
            if (l.includes('Understanding BMI') || l.toLowerCase().includes('asian-population reference') || l.includes('18.5–22.9 in Asian')) {
              console.log(`  Line ${i+1}: ${l.trim().slice(0, 160)}`);
            }
          });
        }
      }
    }
  }
}

searchAll('.');

