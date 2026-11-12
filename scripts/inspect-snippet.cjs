const fs = require('fs');
const html = fs.readFileSync('dist/en/body-fat-calculator/index.html', 'utf8');
const idx = html.indexOf('Body Fat Percentage Categories');
console.log(html.substring(idx - 250, idx + 400));

