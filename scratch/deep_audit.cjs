const fs = require('fs');

const content = fs.readFileSync('src/components/ToolSEOContent.astro', 'utf8');

// Extract the content of seoDatabase
const start = content.indexOf('const seoDatabase: Record<string, Record<string, ToolContent>> = {');
const end = content.indexOf('const enData = seoDatabase[slug]');
const dbStr = content.substring(start, end);

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

slugList.forEach(slug => {
  const sPos = dbStr.indexOf(`"${slug}":`);
  if (sPos === -1) {
    console.log(`🔴 SLUG MISSING: ${slug}`);
    return;
  }
  // Find next slug position or end of dbStr
  const nextSlugPositions = slugList
    .map(s => dbStr.indexOf(`"${s}":`, sPos + 10))
    .filter(p => p !== -1);
  const blockEnd = nextSlugPositions.length > 0 ? Math.min(...nextSlugPositions) : dbStr.length;
  const slugBlock = dbStr.substring(sPos, blockEnd);

  langs.forEach(lang => {
    const lPos = slugBlock.indexOf(`"${lang}": {`);
    if (lPos === -1) {
      console.log(`🔴 SLUG "${slug}" MISSING LANG "${lang}"`);
    } else {
      // Find language block
      const nextLangs = langs.map(l => slugBlock.indexOf(`"${l}": {`, lPos + 5)).filter(p => p !== -1);
      const lEnd = nextLangs.length > 0 ? Math.min(...nextLangs) : slugBlock.length;
      const lBlock = slugBlock.substring(lPos, lEnd);

      // Check for English text leakage in non-EN blocks!
      if (lang !== 'en') {
        const engPhrases = [
          "Oxford 2.5-Power",
          "Interactive 3D Body Visualizer",
          "Body Mass Index",
          "Calculates body mass index",
          "Frequently Asked Questions",
          "Underweight reference range",
          "Healthy-weight reference range",
          "Overweight reference range"
        ];
        engPhrases.forEach(phrase => {
          if (lBlock.includes(phrase)) {
            console.log(`⚠️ SLUG "${slug}" [${lang}] LEAKS ENGLISH PHRASE: "${phrase}"`);
          }
        });
      }
    }
  });
});
