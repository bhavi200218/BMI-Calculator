const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'utils', 'articles');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'types.ts');

for (const f of files) {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  // Match key: { ... title: { en: "..." } ... description: { en: "..." }
  // Let's do a line-by-line state machine
  const lines = content.split('\n');
  let currentSlug = '';
  let inTitle = false;
  let inDesc = false;
  let titleEn = '';
  let descEn = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    // match slug: "what-is-bmi": {
    const slugMatch = line.match(/^"([a-z0-9-]+)":\s*\{/);
    if (slugMatch) {
      if (currentSlug) {
        console.log(`[${f}] SLUG: ${currentSlug}`);
        console.log(`  TITLE: ${titleEn}`);
        console.log(`  DESC:  ${descEn}`);
      }
      currentSlug = slugMatch[1];
      titleEn = '';
      descEn = '';
    }
    if (line.startsWith('"title":') || line.startsWith('title:')) {
      inTitle = true;
      inDesc = false;
    }
    if (line.startsWith('"description":') || line.startsWith('description:')) {
      inDesc = true;
      inTitle = false;
    }
    if (inTitle && (line.startsWith('"en":') || line.startsWith('en:'))) {
      titleEn = line.replace(/^["']?en["']?:\s*["']?/, '').replace(/["'],?$/, '');
    }
    if (inDesc && (line.startsWith('"en":') || line.startsWith('en:'))) {
      descEn = line.replace(/^["']?en["']?:\s*["']?/, '').replace(/["'],?$/, '');
    }
  }
  if (currentSlug) {
    console.log(`[${f}] SLUG: ${currentSlug}`);
    console.log(`  TITLE: ${titleEn}`);
    console.log(`  DESC:  ${descEn}`);
  }
}

