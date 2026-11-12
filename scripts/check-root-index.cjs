const fs = require('fs');
const html = fs.readFileSync('dist/index.html', 'utf8');
console.log('has Real BMI Team:', html.includes('Real BMI Team') || html.includes('Real BMI'));
console.log('has href="/en/bmi-chart/":', html.includes('href="/en/bmi-chart/"'));
console.log('has href="/bmi-chart/":', html.includes('href="/bmi-chart/"'));

