const fs = require('fs');
const content = fs.readFileSync('src/data/seoDatabase.ts', 'utf8');

['asian-bmi-calculator', 'bmi-calculator-india', 'bmi-calculator-for-indians'].forEach(slug => {
  console.log('==============================');
  console.log('=== SLUG:', slug, '===');
  console.log('==============================');
  const slugIdx = content.indexOf(`"${slug}":`);
  if (slugIdx === -1) {
    console.log('Not found!');
    return;
  }
  // Find where this slug's object ends
  const nextSlugIdx = content.indexOf('\n  "', slugIdx + slug.length + 10);
  const block = content.slice(slugIdx, nextSlugIdx > 0 ? nextSlugIdx : slugIdx + 15000);
  
  ['en', 'es', 'fr', 'de', 'ko', 'hi'].forEach(lang => {
    console.log('\n--- LANG:', lang, '---');
    const langKey = `"${lang}":`;
    const langIdx = block.indexOf(langKey);
    if (langIdx === -1) {
      console.log('Lang not found');
      return;
    }
    const nextLangIdx = block.indexOf('\n    "', langIdx + 10);
    const langBlock = block.slice(langIdx, nextLangIdx > 0 ? nextLangIdx : langIdx + 3000);
    
    // Title, H1/eyebrow
    const titleM = langBlock.match(/"title":\s*"([^"]+)"/);
    if (titleM) console.log('Title:', titleM[1]);
    
    // extract tableRows
    const tableMatch = langBlock.match(/"tableRows":\s*\[([\s\S]*?)\]/);
    if (tableMatch) {
      console.log('Table rows:');
      console.log(tableMatch[1].trim());
    } else {
      console.log('No tableRows');
    }
    
    // extract FAQs questions
    const faqsMatch = langBlock.match(/"faqs":\s*\[([\s\S]*?)\]/);
    if (faqsMatch) {
      const qMatches = [...faqsMatch[1].matchAll(/"question":\s*"([^"]+)"/g)].map(m => m[1]);
      console.log('FAQ Questions (' + qMatches.length + '):', qMatches);
    }
  });
});
