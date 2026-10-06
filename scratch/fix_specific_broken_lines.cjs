const fs = require('fs');

const file = 'src/data/seoDatabase.ts';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/"answer": "A height weight chart lists healthy weight ranges based on stature\. For example: 5'4"/g, '"answer": "A height weight chart lists healthy weight ranges based on stature. For example, a height of 163 cm (5 ft 4 in) has a normal healthy weight range of 49 kg to 66 kg (108 lbs to 145 lbs)."');

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed with direct string replace!');
