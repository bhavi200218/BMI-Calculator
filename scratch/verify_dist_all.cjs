const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '../dist');

const checkPages = [
  'en/bmi-calculator-for-indians',
  'es/bmi-calculator-for-indians',
  'fr/bmi-calculator-for-indians',
  'de/bmi-calculator-for-indians',
  'ko/bmi-calculator-for-indians',
  'hi/bmi-calculator-for-indians',
  'en/bmi-calculator-india',
  'es/bmi-calculator-india',
  'fr/bmi-calculator-india',
  'de/bmi-calculator-india',
  'ko/bmi-calculator-india',
  'hi/bmi-calculator-india',
  'en/asian-bmi-calculator',
  'es/asian-bmi-calculator',
  'fr/asian-bmi-calculator',
  'de/asian-bmi-calculator',
  'ko/asian-bmi-calculator',
  'hi/asian-bmi-calculator'
];

const targetFallbackStrings = [
  'Underweight reference threshold',
  'Optimal healthy range for Indian adults',
  'Elevated cardiometabolic risk cutoff for Indians',
  'Class I obesity threshold under ICMR standards',
  'Severe obesity risk threshold',
  'Staatsbürger',
  'Estándares Médicos de la OMS',
  'WHO Medical Standards'
];

console.log('=== AUDITING DIST BUILT PAGES ===\n');

let totalFailures = 0;

checkPages.forEach(p => {
  const filePath = path.join(distDir, p, 'index.html');
  if (!fs.existsSync(filePath)) {
    console.error(`❌ [MISSING] File not found: ${filePath}`);
    totalFailures++;
    return;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  const lang = p.split('/')[0];
  const slug = p.split('/')[1];

  console.log(`Checking ${p}:`);

  // 1. Fallback strings
  targetFallbackStrings.forEach(str => {
    if (content.includes(str)) {
      console.error(`  ❌ [FAIL] Found target string "${str}"`);
      totalFailures++;
    }
  });

  // 2. Slug leakage into translated sentences
  if (lang !== 'en') {
    // Only check if it's outside href/canonical/ids
    const textWithoutAttrs = content.replace(/<(a|link|script|div)[^>]*(href|id|data-slug)[^>]*>/gi, '');
    if (textWithoutAttrs.includes('de bmi calculator for indians') ||
        textWithoutAttrs.includes('pour bmi calculator for indians') ||
        textWithoutAttrs.includes('für bmi calculator for indians') ||
        textWithoutAttrs.includes('bmi calculator for indians 계산기')) {
      console.error(`  ❌ [FAIL] Slug leak detected in text!`);
      totalFailures++;
    }
  }

  // 3. Duplicate FAQs
  const faqQuestions = [];
  const faqRegex = /<h4[^>]*>([\s\S]*?)<\/h4>/g;
  let match;
  while ((match = faqRegex.exec(content)) !== null) {
    faqQuestions.push(match[1].replace(/<[^>]+>/g, '').trim());
  }
  const uniqueQuestions = new Set(faqQuestions);
  if (faqQuestions.length !== uniqueQuestions.size) {
    console.error(`  ❌ [FAIL] Duplicate FAQ headings found (${faqQuestions.length} total, ${uniqueQuestions.size} unique)!`);
    totalFailures++;
  } else {
    console.log(`  ✅ ${faqQuestions.length} FAQs (0 duplicates)`);
  }

  // 4. Page title and H1
  const titleM = content.match(/<title>([\s\S]*?)<\/title>/);
  const h1M = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  console.log(`  Title: ${titleM ? titleM[1].trim() : 'NONE'}`);
  console.log(`  H1: ${h1M ? h1M[1].replace(/<[^>]+>/g, '').trim() : 'NONE'}`);
  console.log('');
});

if (totalFailures === 0) {
  console.log('🎉 ALL 18 DIST PAGES PASSED WITH 0 FAILURES!');
} else {
  console.error(`❌ FOUND ${totalFailures} FAILURES IN DIST!`);
}
