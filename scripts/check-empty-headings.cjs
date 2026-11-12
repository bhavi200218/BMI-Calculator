const fs = require('fs');

function checkHeadingsInFile(filePath) {
  const html = fs.readFileSync(filePath, 'utf8');
  // Match headings and what follows them
  const regex = /<h([1-6])[^>]*>([\s\S]*?)<\/h\1>([\s\S]*?)(?=<h[1-6]|<\/section>|<\/main>|<\/article>|$)/gi;
  const results = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    const level = match[1];
    const headingText = match[2].replace(/<[^>]+>/g, '').trim();
    const afterHtml = match[3];
    const afterText = afterHtml.replace(/<[^>]+>/g, '').trim();
    // Also check if heading was inside a tiny div
    const headingSnippet = match[0].substring(0, 200);
    if (afterText.length < 30) {
      results.push({ level, headingText, afterTextLen: afterText.length, sample: afterText.substring(0, 50) });
    }
  }
  return results;
}

const testFiles = [
  'dist/en/body-fat-calculator/index.html',
  'dist/en/ideal-weight-calculator/index.html',
  'dist/en/lean-body-mass-calculator/index.html',
  'dist/en/calorie-calculator/index.html',
  'dist/en/water-intake-calculator/index.html',
  'dist/en/protein-intake-calculator/index.html',
  'dist/en/diabetes-risk-calculator/index.html',
  'dist/en/bmi-calculator/index.html',
];

for (const file of testFiles) {
  if (fs.existsSync(file)) {
    console.log(`\n=== ${file} ===`);
    const issues = checkHeadingsInFile(file);
    issues.forEach(iss => console.log(`  <h${iss.level}> "${iss.headingText}": text after = ${iss.afterTextLen} chars`));
  }
}
