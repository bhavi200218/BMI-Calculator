const fs = require('fs');

const lines = fs.readFileSync('src/data/seoDatabase.ts', 'utf8').split('\n');

console.log("Line 1695 currently:", lines[1694]);

lines[1694] = '          "answer": "An ideal weight for Indian adults keeps BMI between 18.5 and 22.9 kg/m². For example, for an Indian male or female of height 168 cm (5 ft 6 in), the healthy weight range is 52.2 to 64.6 kg."';

fs.writeFileSync('src/data/seoDatabase.ts', lines.join('\n'), 'utf8');
console.log("Line 1695 successfully fixed!");
