const fs = require('fs');
const content = fs.readFileSync('src/data/seoDatabase.ts', 'utf8');

function checkSlug(slug) {
  console.log('=== SLUG:', slug, '===');
  const sIdx = content.indexOf(`"${slug}":`);
  if (sIdx === -1) { console.log('Slug not found'); return; }
  const nIdx = content.indexOf('\n  "', sIdx + slug.length + 10);
  const block = content.slice(sIdx, nIdx > 0 ? nIdx : sIdx + 15000);
  ['en', 'es', 'fr', 'de', 'ko', 'hi'].forEach(lang => {
    const lIdx = block.indexOf(`"${lang}":`);
    if (lIdx === -1) { console.log(lang, 'NOT FOUND'); return; }
    const nLIdx = block.indexOf('\n    "', lIdx + 10);
    const lBlock = block.slice(lIdx, nLIdx > 0 ? nLIdx : lIdx + 3000);
    
    const titleM = lBlock.match(/"title":\s*"([^"]+)"/);
    console.log(`[${lang}] Title:`, titleM ? titleM[1] : 'NONE');

    const tM = lBlock.match(/"tableRows":\s*\[([\s\S]*?)\]/);
    if (tM) {
      console.log(`[${lang}] Table:`);
      console.log(tM[1].trim());
    }
    const fM = lBlock.match(/"faqs":\s*\[([\s\S]*?)\]/);
    if (fM) {
      const qs = [...fM[1].matchAll(/"question":\s*"([^"]+)"/g)].map(m => m[1]);
      console.log(`[${lang}] FAQs (${qs.length}):`, qs);
    }
  });
}

checkSlug('asian-bmi-calculator');
