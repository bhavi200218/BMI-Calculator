const fs = require('fs');
const content = fs.readFileSync('src/components/ToolSEOContent.astro', 'utf8');

const lines = content.split('\n');
const bottomLines = lines.slice(lines.length - 100);
console.log(bottomLines.join('\n'));
