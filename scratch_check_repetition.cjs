const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'utils', 'articles');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'types.ts');

for (const f of files) {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  // Find all title: { en: "..." } and description: { en: "..." }
  const regex = /"([a-z0-9-]+)":\s*\{[\s\S]*?"title":\s*\{[\s\S]*?"en":\s*"([^"]+)"[\s\S]*?"description":\s*\{[\s\S]*?"en":\s*"([^"]+)"/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const slug = match[1];
    const title = match[2];
    const desc = match[3];
    if (desc.includes(title) || desc.startsWith(title.slice(0, 15)) || title.includes(desc.slice(0, 15))) {
      console.log(`[REPETITION DETECTED in ${f}]`);
      console.log(`  Slug: ${slug}`);
      console.log(`  Title: ${title}`);
      console.log(`  Desc:  ${desc}`);
    }
  }
}

