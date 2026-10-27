import fs from 'fs';
import path from 'path';

function scanDir(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      results = results.concat(scanDir(full));
    } else if (f.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

const allFiles = scanDir('dist');
console.log(`Scanning ${allFiles.length} HTML files in dist...`);

let suboptimalCount = 0;
let okCount = 0;

for (const f of allFiles) {
  // Exclude embed widgets as they are meant for iframes and disallowed from indexing
  if (f.includes('embed')) continue;

  const html = fs.readFileSync(f, 'utf8');
  const m = html.match(/<title>([^<]*)<\/title>/i);
  const title = m ? m[1].replace(/&amp;/g, '&').replace(/&#39;/g, "'").trim() : 'NO TITLE';
  const relPath = path.relative('dist', f);
  
  if (title.length < 40 || title.length > 60) {
    suboptimalCount++;
    console.log(`[${title.length} chars] [SUBOPTIMAL] ${relPath}: "${title}"`);
  } else {
    okCount++;
  }
}

console.log(`\nSummary: ${okCount} OK, ${suboptimalCount} Suboptimal.`);

