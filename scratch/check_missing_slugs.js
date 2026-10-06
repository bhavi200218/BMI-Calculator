import fs from 'fs';

const content = fs.readFileSync('src/components/ToolSEOContent.astro', 'utf-8');
const match = content.match(/const seoDatabase[^{]*= (\{[\s\S]*?\n\};)/);
let seoDatabase = {};
if (match) {
  eval('seoDatabase = ' + match[1].replace(/;\s*$/, ''));
}

const dbKeys = Object.keys(seoDatabase);
console.log('Database keys in ToolSEOContent count:', dbKeys.length);

const calcTsContent = fs.readFileSync('src/utils/calculators.ts', 'utf-8');
const slugMatches = [...calcTsContent.matchAll(/slug:\s*'([^']+)'/g)];
const calcSlugs = Array.from(new Set(slugMatches.map(m => m[1])));

console.log('\nCalculators from calculators.ts count:', calcSlugs.length);
calcSlugs.forEach(slug => {
  const present = dbKeys.includes(slug);
  console.log(`${present ? '✅' : '❌ MISSING IN ToolSEOContent:'} ${slug}`);
});
