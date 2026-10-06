const fs = require('fs');
const content = fs.readFileSync('src/components/ToolSEOContent.astro', 'utf8');

const lines = content.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('currentData') || line.includes('faqSchema') || line.includes('seoDatabase[')) {
    console.log(`L${idx+1}: ${line.trim()}`);
  }
});
