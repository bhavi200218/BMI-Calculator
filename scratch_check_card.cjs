const fs = require('fs');

const html = fs.readFileSync('dist/en/blog/index.html', 'utf8');
const idx = html.indexOf('healthy-bmi-range-indians');
if (idx !== -1) {
  console.log(html.slice(idx - 100, idx + 600));
} else {
  console.log('not found');
}

