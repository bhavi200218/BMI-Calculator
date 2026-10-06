const fs = require('fs');

const raw = fs.readFileSync('src/data/seoDatabase.ts', 'utf8');
const startIdx = raw.indexOf('export const seoDatabase');
const objStart = raw.indexOf('{', startIdx);
const codeStr = 'module.exports = ' + raw.slice(objStart);

fs.writeFileSync('scratch/temp_db.cjs', codeStr);
const database = require('./temp_db.cjs');

const EnglishPatterns = [
  'underweight',
  'baseline range',
  'obesity screening',
  'screening threshold',
  'different from',
  'official chart',
  'healthy range for',
  'cutoff for',
  'reference threshold',
  'risk threshold',
  'healthy baseline'
];

let issuesFound = 0;

for (const [toolSlug, toolLocales] of Object.entries(database)) {
  for (const [lang, data] of Object.entries(toolLocales)) {
    if (lang === 'en') continue; // skip english master
    const dataStr = JSON.stringify(data);

    for (const pat of EnglishPatterns) {
      if (dataStr.toLowerCase().includes(pat.toLowerCase())) {
        console.log(`[LEFTOVER-PLACEHOLDER] Tool: '${toolSlug}', Lang: '${lang}' contains English pattern '${pat}'`);
        issuesFound++;
      }
    }
  }
}

console.log('\nTotal leftover placeholder issues found in non-English tools:', issuesFound);

if (fs.existsSync('scratch/temp_db.cjs')) {
  fs.unlinkSync('scratch/temp_db.cjs');
}
