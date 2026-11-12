const fs = require('fs');

function searchLinks(dir) {
  const list = fs.readdirSync(dir);
  for (const f of list) {
    const full = dir + '/' + f;
    if (f === 'node_modules' || f === 'dist' || f === '.git') continue;
    if (fs.statSync(full).isDirectory()) searchLinks(full);
    else if (full.endsWith('.astro') || full.endsWith('.ts') || full.endsWith('.mjs')) {
      const c = fs.readFileSync(full, 'utf8');
      if (c.includes('"/en/"') || c.includes("'/en/'")) {
        console.log(full);
      }
    }
  }
}

searchLinks('./src');

