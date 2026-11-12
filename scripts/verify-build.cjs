const fs = require('fs');

console.log('--- 1. dist/en/index.html ---');
if (fs.existsSync('dist/en/index.html')) {
  console.log(fs.readFileSync('dist/en/index.html', 'utf8').trim());
} else {
  console.log('dist/en/index.html does not exist');
}

console.log('\n--- 2. dist/sitemap-0.xml check ---');
const sitemap = fs.readFileSync('dist/sitemap-0.xml', 'utf8');
console.log('Has / in sitemap:', sitemap.includes('<loc>https://realbmicalculator.com/</loc>'));
console.log('Has /en/ in sitemap:', sitemap.includes('<loc>https://realbmicalculator.com/en/</loc>'));

console.log('\n--- 3. Hreflang on dist/index.html ---');
const rootHtml = fs.readFileSync('dist/index.html', 'utf8');
const rootHreflang = rootHtml.match(/<link rel="alternate" hreflang="[^"]*" href="[^"]*"/g);
console.log(rootHreflang);

console.log('\n--- 4. Hreflang on dist/es/index.html ---');
const esHtml = fs.readFileSync('dist/es/index.html', 'utf8');
const esHreflang = esHtml.match(/<link rel="alternate" hreflang="[^"]*" href="[^"]*"/g);
console.log(esHreflang);

console.log('\n--- 5. SVG in dist/en/diabetes-risk-calculator/index.html ---');
const diabHtml = fs.readFileSync('dist/en/diabetes-risk-calculator/index.html', 'utf8');
const width700Match = diabHtml.match(/width="700"/g);
console.log('width="700" matches:', width700Match ? width700Match.length : 0);
const lineScaleMatch = diabHtml.includes('<line x1="50" y1="42" x2="750" y2="42"');
console.log('New scalable line present:', lineScaleMatch);

console.log('\n--- 6. Quick Grid HTML structure in dist/en/body-fat-calculator/index.html ---');
const bfHtml = fs.readFileSync('dist/en/body-fat-calculator/index.html', 'utf8');
const bfIdx = bfHtml.indexOf('Body Fat Percentage Categories');
console.log(bfHtml.substring(bfIdx - 150, bfIdx + 300));

