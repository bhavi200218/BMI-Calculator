const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'utils', 'articles');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'types.ts');

for (const f of files) {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  // Match slug / id
  const blocks = content.split(/\n\s*['"]?([a-z0-9-]+)['"]?:\s*\{/);
  for (let i = 1; i < blocks.length; i += 2) {
    const slug = blocks[i];
    const body = blocks[i+1];
    if (!body) continue;
    
    const titleMatch = body.match(/title:\s*\{[^}]*en:\s*["'`]([^"'`]+)["'`]/s);
    const descMatch = body.match(/description:\s*\{[^}]*en:\s*["'`]([^"'`]+)["'`]/s);
    
    const title = titleMatch ? titleMatch[1].trim() : '';
    const desc = descMatch ? descMatch[1].trim() : '';
    
    console.log('SLUG:', slug);
    console.log('  Title:', title);
    console.log('  Desc:', desc.slice(0, 100));
    console.log('---');
  }
}
