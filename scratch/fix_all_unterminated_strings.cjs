const fs = require('fs');

const lines = fs.readFileSync('src/data/seoDatabase.ts', 'utf8').split('\n');

let fixedCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('"answer":') || line.includes('"question":')) {
    // Check if quotes are balanced
    const quoteCount = (line.match(/"/g) || []).length;
    // An answer line should typically have an even number of quotes (4 quotes: "answer": "text")
    // If quote count is 3 (odd), the string is unterminated!
    if (quoteCount % 2 !== 0) {
      console.log(`Fixing unterminated string on line ${i+1}: ${line.substring(0, 80)}...`);
      // Replace height 5'6" or similar unescaped quote or complete string
      lines[i] = line.replace(/5'6"/g, "5 ft 6 in").replace(/5'3"/g, "5 ft 3 in").replace(/5'7"/g, "5 ft 7 in").replace(/6'1"/g, "6 ft 1 in");
      // If still odd quotes, append missing quote and comma
      if ((lines[i].match(/"/g) || []).length % 2 !== 0) {
        lines[i] = lines[i] + '."';
      }
      fixedCount++;
    }
  }
}

fs.writeFileSync('src/data/seoDatabase.ts', lines.join('\n'), 'utf8');
console.log(`Scan finished. Fixed ${fixedCount} unterminated lines.`);
