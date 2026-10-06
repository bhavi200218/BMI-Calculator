const fs = require('fs');

const content = fs.readFileSync('src/data/seoDatabase.ts', 'utf8');

// Find all Korean occurrences of typos or English 'mass'
const lines = content.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('비만 1단계I') || line.includes('비만 1단계II') || line.includes('비만 1단계III') || (line.includes('"ko"') || line.includes('ko:')) && line.includes('mass')) {
    console.log(`L${idx+1}: ${line.trim()}`);
  }
});

// Search for any line in Korean blocks containing English words like 'mass', 'weight', 'level'
const koRegex = /"ko":\s*\{[\s\S]*?\n\s*\},/g;
let match;
while ((match = koRegex.exec(content)) !== null) {
  const block = match[0];
  const typos = block.match(/비만 1단계I{1,3}/g);
  if (typos) {
    console.log("Found Korean typo:", typos);
  }
}
