const fs = require('fs');

const content = fs.readFileSync('src/components/ToolSEOContent.astro', 'utf8');

// Extract the content of seoDatabase
const start = content.indexOf('const seoDatabase: Record<string, Record<string, ToolContent>> = {');
const end = content.indexOf('const effectiveSlug =');
const dbStr = content.substring(start, end);

const slugList = [
  'bmi-calculator',
  '3d-bmi-calculator',
  'bmi-chart',
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

let errorCount = 0;

slugList.forEach(slug => {
  const sPos = dbStr.indexOf(`"${slug}":`);
  if (sPos === -1) {
    console.log(`🚨 CRITICAL: SLUG "${slug}" MISSING ENTIRELY FROM seoDatabase!`);
    errorCount++;
    return;
  }
  
  // Find block range
  const nextPositions = slugList
    .map(s => dbStr.indexOf(`"${s}":`, sPos + 5))
    .filter(p => p !== -1);
  const blockEnd = nextPositions.length > 0 ? Math.min(...nextPositions) : dbStr.length;
  const slugBlock = dbStr.substring(sPos, blockEnd);

  langs.forEach(lang => {
    const lPos = slugBlock.indexOf(`"${lang}": {`);
    if (lPos === -1) {
      console.log(`🚨 CRITICAL: SLUG "${slug}" MISSING LANGUAGE "${lang}"!`);
      errorCount++;
    }
  });
});

console.log(`\nAudit complete. Total missing slug-language combinations: ${errorCount}`);
