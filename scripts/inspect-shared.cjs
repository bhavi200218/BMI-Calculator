const fs = require('fs');

function extractVisibleText(html) {
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

function getShingles(text, size = 4) {
  const words = text.split(' ').filter(w => w.length > 2);
  const shingles = new Set();
  for (let i = 0; i <= words.length - size; i++) {
    shingles.add(words.slice(i, i + size).join(' '));
  }
  return shingles;
}

const rootText = extractVisibleText(fs.readFileSync('dist/index.html', 'utf8'));
const enText = extractVisibleText(fs.readFileSync('dist/en/index.html', 'utf8'));

const rootShingles = getShingles(rootText, 4);
const enShingles = getShingles(enText, 4);

const shared = [];
for (const s of rootShingles) {
  if (enShingles.has(s)) shared.push(s);
}

console.log('Shared 4-grams count:', shared.length);
console.log('Sample shared 4-grams:');
shared.slice(0, 30).forEach(s => console.log(' - ' + s));

