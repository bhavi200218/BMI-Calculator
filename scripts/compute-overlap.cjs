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

function jaccardSimilarity(setA, setB) {
  let intersection = 0;
  for (const item of setA) {
    if (setB.has(item)) intersection++;
  }
  const union = setA.size + setB.size - intersection;
  return union === 0 ? 0 : (intersection / union);
}

function overlapCoefficient(setA, setB) {
  let intersection = 0;
  for (const item of setA) {
    if (setB.has(item)) intersection++;
  }
  const minSize = Math.min(setA.size, setB.size);
  return minSize === 0 ? 0 : (intersection / minSize);
}

const rootText = extractVisibleText(fs.readFileSync('dist/index.html', 'utf8'));
const enText = extractVisibleText(fs.readFileSync('dist/en/index.html', 'utf8'));

console.log('Root text word count:', rootText.split(' ').length);
console.log('EN text word count:', enText.split(' ').length);

const rootShingles = getShingles(rootText, 4);
const enShingles = getShingles(enText, 4);

console.log('4-gram Jaccard similarity:', (jaccardSimilarity(rootShingles, enShingles) * 100).toFixed(2) + '%');
console.log('4-gram Overlap coefficient (scanner metric):', (overlapCoefficient(rootShingles, enShingles) * 100).toFixed(2) + '%');

