const fs = require('fs');

const content = fs.readFileSync('src/data/seoDatabase.ts', 'utf8');
const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  // Check for stray commas or mismatched quotes or brackets
  const openBrackets = (line.match(/\{/g) || []).length;
  const closeBrackets = (line.match(/\}/g) || []).length;
  const openSquare = (line.match(/\[/g) || []).length;
  const closeSquare = (line.match(/\]/g) || []).length;

  if (line.trim() === '},' && i > 0 && lines[i-1].trim() === '},') {
    console.log(`Duplicate closing brace at line ${i+1}: ${line}`);
  }
}
