import fs from 'fs';
import path from 'path';

function scanDir(dir) {
  let results = [];
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      results = results.concat(scanDir(full));
    } else if (f === 'index.html') {
      results.push(full);
    }
  }
  return results;
}

const htmlFiles = scanDir('dist');
const pages = [];

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const rel = file.replace(/\\/g, '/').replace('dist/', '');

  // Strip scripts, styles, head, nav, footer
  let bodyOnly = content
    .replace(/<head[\s\S]*?<\/head>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<nav[\s\S]*?<\/nav>/gi, '')
    .replace(/<footer[\s\S]*?<\/footer>/gi, '')
    .replace(/<aside[\s\S]*?<\/aside>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const words = bodyOnly.split(' ').filter(Boolean).length;
  pages.push({ rel, words, chars: bodyOnly.length, snippet: bodyOnly.slice(0, 100) });
}

pages.sort((a, b) => a.words - b.words);

console.log('Top 10 Lowest Word Count Pages (excluding nav & footer):');
pages.slice(0, 10).forEach(p => {
  console.log(`  [${p.words} words] ${p.rel}: ${p.snippet}`);
});
