const fs = require('fs');

const lines = fs.readFileSync('src/data/seoDatabase.ts', 'utf8').split('\n');

let fixedCount = 0;

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];

  // If line has an unescaped double quote inside a JSON string value
  // Matches patterns like 5'4" or 5'6" or 5'8" or 5'3" or 5'7" or 6'1" or 5'2" or 5'5" or 5'9" or 5'10" or 5'11" or 6'0"
  if (/(\d+)'(\d+)"/.test(line)) {
    console.log(`Fixing line ${i+1}: ${line.trim().substring(0, 70)}...`);
    line = line.replace(/(\d+)'(\d+)"/g, '$1 ft $2 in');
    lines[i] = line;
    fixedCount++;
  }

  // Also check if line ends with unclosed quote (odd quote count)
  const qCount = (lines[i].match(/"/g) || []).length;
  if (qCount % 2 !== 0) {
    console.log(`Fixing odd quotes on line ${i+1}: ${lines[i].trim().substring(0, 70)}...`);
    lines[i] = lines[i].replace(/(\d+)'(\d+)"/g, '$1 ft $2 in');
    if ((lines[i].match(/"/g) || []).length % 2 !== 0) {
      lines[i] = lines[i] + '."';
    }
    fixedCount++;
  }
}

fs.writeFileSync('src/data/seoDatabase.ts', lines.join('\n'), 'utf8');
console.log(`Inches/feet clean script finished. Fixed ${fixedCount} lines.`);
