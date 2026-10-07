const fs = require('fs');

const seoCode = fs.readFileSync('src/data/seoDatabase.ts', 'utf8');

// Simple regex extraction of titles per slug and lang
const lines = seoCode.split('\n');
let currentSlug = '';
let currentLang = '';

const results = [];
lines.forEach((l, idx) => {
  const slugMatch = l.match(/^\s*"([a-z0-9-]+)":\s*\{/);
  if (slugMatch) {
    currentSlug = slugMatch[1];
  }
  const langMatch = l.match(/^\s*"(en|es|fr|de|ko|hi)":\s*\{/);
  if (langMatch) {
    currentLang = langMatch[1];
  }
  const titleMatch = l.match(/^\s*"title":\s*"([^"]+)"/);
  if (titleMatch && currentLang !== 'en') {
    const title = titleMatch[1];
    if (title.includes('Calculator') || title.includes('Chart for') || title.includes('Lookup') || title.includes('Reference Tool') || title.includes('Estimate Ideal') || title.includes('Weight by Height') || title.includes('One Rep Max')) {
      results.push({ slug: currentSlug, lang: currentLang, title, line: idx + 1 });
    }
  }
});

console.log(`Found ${results.length} titles with English master phrases:`);
results.forEach(r => console.log(`[${r.slug}] [${r.lang}] (Line ${r.line}): ${r.title}`));
