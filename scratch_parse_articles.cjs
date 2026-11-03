const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'utils', 'articles');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'types.ts');

for (const f of files) {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  // Match each article block
  const slugs = [...content.matchAll(/["']([a-z0-9-]+)["']:\s*\{/g)].map(m => m[1]);
  for (const slug of slugs) {
    if (['title', 'category', 'description', 'contentHtml'].includes(slug)) continue;
    const startIdx = content.indexOf(`"${slug}":`);
    const endIdx = content.indexOf(`"${slugs[slugs.indexOf(slug)+1]}":`, startIdx);
    const block = content.slice(startIdx, endIdx === -1 ? undefined : endIdx);
    
    const titleMatch = block.match(/"title":\s*\{[^}]*?"en":\s*"([^"]+)"/s);
    const descMatch = block.match(/"description":\s*\{[^}]*?"en":\s*"([^"]+)"/s);
    
    if (titleMatch && descMatch) {
      const title = titleMatch[1];
      const desc = descMatch[1];
      console.log(`[${slug}]`);
      console.log(`  T: ${title}`);
      console.log(`  D: ${desc}`);
    }
  }
}

