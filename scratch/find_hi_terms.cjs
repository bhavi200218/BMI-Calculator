const fs = require('fs');
const html = fs.readFileSync('scratch/live_hi_indian_bmi.html', 'utf8');

const terms = ['Underweight', 'Healthy Weight', 'Overweight Cutoff', 'Obese Class I', 'Obese Class II', 'चिकित्सा मानक'];
terms.forEach(t => {
  const matches = [];
  const lines = html.split('\n');
  lines.forEach((l, i) => {
    if (l.includes(t)) {
      matches.push({ line: i+1, text: l.trim() });
    }
  });
  console.log(`=== Term: "${t}" (${matches.length} matches) ===`);
  matches.forEach(m => console.log(`  [Line ${m.line}] ${m.text.substring(0, 160)}`));
});
