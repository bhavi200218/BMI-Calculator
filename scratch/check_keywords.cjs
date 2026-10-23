const fs = require('fs');

function countPhrases(file, phrases) {
  if (!fs.existsSync(file)) {
    console.log(file, 'does not exist');
    return;
  }
  const html = fs.readFileSync(file, 'utf8');
  console.log('=== ' + file + ' ===');
  phrases.forEach(p => {
    const escaped = p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escaped, 'gi');
    const matches = html.match(regex);
    console.log('  "' + p + '":', matches ? matches.length : 0);
  });
}

countPhrases('dist/en/heart-rate-zone-calculator/index.html', ['heart rate', 'real bmi', 'bpm', 'target heart rate', 'training zone']);
countPhrases('dist/en/karvonen-heart-rate-calculator/index.html', ['heart rate', 'real bmi', 'karvonen', 'reserve', 'hrr']);
countPhrases('dist/de/bmi-calculator-for-indians/index.html', ['kg m', 'kg/m', 'kg m²', 'kg/m²', 'real bmi', 'inder', 'indische']);
