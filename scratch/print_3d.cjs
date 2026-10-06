const fs = require('fs');
const content = fs.readFileSync('src/components/ToolSEOContent.astro', 'utf8');

const sPos = content.indexOf('"3d-bmi-calculator":');
const nextPos = content.indexOf('"bmi-chart":');
console.log(content.substring(sPos, nextPos));
