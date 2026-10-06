const fs = require('fs');

const content = fs.readFileSync('src/components/ToolSEOContent.astro', 'utf8');

// Find the start of 3d-bmi-calculator in seoDatabase
const startIdx = content.indexOf('"3d-bmi-calculator": {');
console.log("3d-bmi-calculator start index in ToolSEOContent.astro:", startIdx);

if (startIdx !== -1) {
  const snippet = content.substring(startIdx, startIdx + 8000);
  // Check for presence of en, es, fr, de, ko, hi
  ['en', 'es', 'fr', 'de', 'ko', 'hi'].forEach(l => {
    const lPos = snippet.indexOf(`"${l}": {`);
    console.log(`Language "${l}" position relative to 3d-bmi-calculator:`, lPos);
  });
}
