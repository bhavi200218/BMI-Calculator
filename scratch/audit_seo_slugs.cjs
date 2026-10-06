const fs = require('fs');

const calcTs = fs.readFileSync('src/utils/calculators.ts', 'utf8');
const slugMatches = [...calcTs.matchAll(/slug:\s*'([^']+)'/g)].map(m => m[1]);
console.log("Calculators in calculators.ts (count: " + slugMatches.length + "):");
console.log(slugMatches);

const seoContent = fs.readFileSync('src/components/ToolSEOContent.astro', 'utf8');

// For each slug, check if en, es, fr, de, ko, hi exist in seoDatabase
slugMatches.forEach(slug => {
  const sIdx = seoContent.indexOf(`"${slug}": {`);
  if (sIdx === -1) {
    console.log(`❌ SLUG MISSING ENTIRELY: "${slug}"`);
  } else {
    // Check snippet for next 15000 chars
    const snippet = seoContent.substring(sIdx, sIdx + 18000);
    ['en', 'es', 'fr', 'de', 'ko', 'hi'].forEach(l => {
      // Look for `"l": {` inside the slug block
      const hasLang = snippet.includes(`"${l}": {`);
      if (!hasLang) {
        console.log(`❌ SLUG "${slug}" MISSING LANG "${l}"`);
      }
    });
  }
});
