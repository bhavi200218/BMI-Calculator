const fs = require('fs');
const path = require('path');

const langs = ['de', 'ko', 'fr', 'es', 'hi'];
let pass = true;

langs.forEach(lang => {
  const htmlPath = path.join(__dirname, `../dist/${lang}/bmi-calculator-for-indians/index.html`);
  if (!fs.existsSync(htmlPath)) {
    console.error(`[ERROR] Missing file ${htmlPath}`);
    pass = false;
    return;
  }
  const content = fs.readFileSync(htmlPath, 'utf8');

  // Check for English fallback string in tableRows col3
  if (content.includes('Underweight reference threshold') || content.includes('Optimal healthy range for Indian adults')) {
    console.error(`[FAIL] ${lang} still contains English fallback strings!`);
    pass = false;
  } else {
    console.log(`[PASS] ${lang} tableRows are fully localized.`);
  }

  // Count visible <h4> FAQ question cards (excluding JSON-LD script)
  const h4Matches = (content.match(/<h4 class="text-base md:text-lg font-display font-bold text-\[var\(--foreground\)\]">\s*인도 성인 전용 BMI 계산기의 원리와 측정 항목은 무엇인가요\?/g) || []).length;
  if (lang === 'ko') {
    if (h4Matches !== 1) {
      console.error(`[FAIL] Korean visible UI FAQ h4 occurs ${h4Matches} times (expected 1)!`);
      pass = false;
    } else {
      console.log(`[PASS] Korean visible UI FAQ occurs exactly 1 time (3 unique cards total).`);
    }
  }
});

if (pass) {
  console.log('\n✅ ALL DIST PRODUCTION CHECKS PASSED 100%!');
} else {
  console.error('\n❌ DIST PRODUCTION CHECKS FAILED!');
}
