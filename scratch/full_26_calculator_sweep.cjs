const fs = require('fs');

const content = fs.readFileSync('src/data/seoDatabase.ts', 'utf8');

const slugList = [
  'bmi-calculator',
  '3d-bmi-calculator',
  'bmi-chart',
  '3d-body-visualizer',
  'bmi-calculator-india',
  'bmi-calculator-for-indians',
  'healthy-weight-by-height',
  'diabetes-risk-calculator',
  'asian-bmi-calculator',
  'bmr-calculator',
  'tdee-calculator',
  'maintenance-calorie-calculator',
  'body-fat-calculator',
  'lean-body-mass-calculator',
  'ideal-weight-calculator',
  'calorie-calculator',
  'protein-intake-calculator',
  'water-intake-calculator',
  'macro-calculator',
  'waist-to-hip-ratio-calculator',
  'body-surface-area-calculator',
  'heart-rate-zone-calculator',
  'karvonen-heart-rate-calculator',
  '1rm-calculator',
  'one-rep-max-calculator',
  'pregnancy-weight-gain-calculator'
];

const langs = ['en', 'es', 'fr', 'de', 'ko', 'hi'];

console.log("Starting strict 26-calculator audit sweep...\n");

let issueCount = 0;

slugList.forEach(slug => {
  const sPos = content.indexOf(`"${slug}":`);
  if (sPos === -1) {
    console.log(`🔴 SLUG MISSING: "${slug}"`);
    issueCount++;
    return;
  }
  const nextPositions = slugList
    .map(s => content.indexOf(`"${s}":`, sPos + 10))
    .filter(p => p !== -1);
  const blockEnd = nextPositions.length > 0 ? Math.min(...nextPositions) : content.length;
  const slugBlock = content.substring(sPos, blockEnd);

  // Get EN stats
  const enPos = slugBlock.indexOf('"en": {');
  let enFaqCount = 0;
  if (enPos !== -1) {
    const nextL = langs.map(l => slugBlock.indexOf(`"${l}": {`, enPos + 5)).filter(p => p !== -1);
    const enEnd = nextL.length > 0 ? Math.min(...nextL) : slugBlock.length;
    const enBlock = slugBlock.substring(enPos, enEnd);
    enFaqCount = (enBlock.match(/"question":/g) || []).length;
  }

  langs.forEach(lang => {
    const lPos = slugBlock.indexOf(`"${lang}": {`);
    if (lPos === -1) {
      console.log(`🔴 SLUG "${slug}" MISSING LANG "${lang}"`);
      issueCount++;
      return;
    }
    const nextL = langs.map(l => slugBlock.indexOf(`"${l}": {`, lPos + 5)).filter(p => p !== -1);
    const lEnd = nextL.length > 0 ? Math.min(...nextL) : slugBlock.length;
    const lBlock = slugBlock.substring(lPos, lEnd);

    const faqCount = (lBlock.match(/"question":/g) || []).length;

    if (lang !== 'en') {
      if (faqCount < enFaqCount) {
        console.log(`⚠️ FAQ COUNT MISMATCH: "${slug}" [${lang}] has ${faqCount} FAQs, but EN master has ${enFaqCount} FAQs!`);
        issueCount++;
      }

      // Check for actual English text leaks inside non-EN blocks
      const engLeaks = [
        /Lean Body Mass Based/i,
        /Calculates BMR estimate using lean body mass/i,
        /Reference category for lower relative/i,
        /Baseline reference window for/i,
        /Reference threshold used in/i,
        /Higher reference category for/i,
        /Elevated screening reference/i,
        /비만 1단계I/i,
        /비만 1단계II/i
      ];

      engLeaks.forEach(pat => {
        if (pat.test(lBlock)) {
          const m = lBlock.match(pat);
          console.log(`🚨 ACTUAL LEAK IN "${slug}" [${lang}]: "${m[0]}"`);
          issueCount++;
        }
      });
    }
  });
});

console.log(`\nStrict audit sweep complete. Total issues found: ${issueCount}`);
