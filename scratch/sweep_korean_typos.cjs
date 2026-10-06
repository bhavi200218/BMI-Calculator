const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.ts') || file.endsWith('.astro') || file.endsWith('.js')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('src');
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('비만 1단계I') || content.includes('비만 1단계II') || content.includes('비만 1단계III')) {
    console.log(`🚨 Korean typo found in ${f}`);
  }
});
