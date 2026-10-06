const fs = require('fs');
const content = fs.readFileSync('src/components/ToolSEOContent.astro', 'utf8');

const lines = content.split('\n');
const targetLines = lines.slice(lines.length - 150, lines.length - 80);
console.log(targetLines.join('\n'));
