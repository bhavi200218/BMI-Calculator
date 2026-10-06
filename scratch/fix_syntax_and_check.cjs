const fs = require('fs');

let content = fs.readFileSync('src/data/seoDatabase.ts', 'utf8');

// Replace the broken line at 1695
content = content.replace(
  `"answer": "An ideal weight for Indian adults keeps BMI between 18.5 and 22.9 kg/m². For example, for an Indian male or female of height 5'6"`,
  `"answer": "An ideal weight for Indian adults keeps BMI between 18.5 and 22.9 kg/m². For example, for an Indian male or female of height 168 cm (5 ft 6 in), the healthy weight range is 52.2 to 64.6 kg."`
);

// Clean any other unescaped 5'6" or 5'3" or similar in json strings
content = content.replaceAll(`5'3"`, `5 ft 3 in`);
content = content.replaceAll(`5'7"`, `5 ft 7 in`);
content = content.replaceAll(`6'1"`, `6 ft 1 in`);

fs.writeFileSync('src/data/seoDatabase.ts', content, 'utf8');
console.log("Successfully fixed string escaping in src/data/seoDatabase.ts!");
