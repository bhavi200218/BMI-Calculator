const fs = require('fs');

const lines = fs.readFileSync('src/data/seoDatabase.ts', 'utf8').split('\n');

lines.forEach((line, idx) => {
  const lineNum = idx + 1;
  const unescapedQuotes = line.replace(/\\"/g, '').split('"').length - 1;
  if (unescapedQuotes % 2 !== 0) {
    console.log(`Line ${lineNum}: unescaped quotes (${unescapedQuotes}) -> ${JSON.stringify(line)}`);
  }
});
