const fs = require('fs');

let content = fs.readFileSync('src/data/seoDatabase.ts', 'utf8');

// Replace all broken lines: "answer": "A height weight chart lists healthy weight ranges based on stature. For example: 5'4"\n
// with proper translated/formatted string
const fixedContent = content.replace(/"answer": "A height weight chart lists healthy weight ranges based on stature\. For example: 5'4"[\s\n]*/g, '"answer": "A height weight chart lists healthy weight ranges based on stature. For example, a height of 163 cm (5 ft 4 in) has a normal healthy weight range of 49 kg to 66 kg (108 lbs to 145 lbs)."\n');

fs.writeFileSync('src/data/seoDatabase.ts', fixedContent, 'utf8');
console.log("Replaced broken lines successfully.");
