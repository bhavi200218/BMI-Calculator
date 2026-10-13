const fs = require('fs');
const path = require('path');

const calcPath = path.join(__dirname, '../src/utils/calculators.ts');
const calcContent = fs.readFileSync(calcPath, 'utf8');

// We can check duplicates in calculators array
// Let's create temp_calculators.cjs
const tempCalcPath = path.join(__dirname, 'temp_calculators.cjs');
// Remove typescript types
let cjs = calcContent
  .replace(/export interface[^{]*\{[^}]*\}/g, '')
  .replace(/export type[^\n]*\n/g, '')
  .replace(/: CalculatorConfig\[\]/g, '')
  .replace(/: Record<[^>]+>/g, '')
  .replace(/: Locale/g, '')
  .replace(/as const/g, '')
  .replace(/as any/g, '');

cjs = cjs.replace(/export const /g, 'const ') + '\nmodule.exports = { calculators, locales };';
fs.writeFileSync(tempCalcPath, cjs);

const { calculators } = require(tempCalcPath);

console.log('--- AUDITING calculators.ts ---');

['en', 'es', 'fr', 'de', 'ko', 'hi'].forEach(lang => {
  const titles = new Map();
  const descriptions = new Map();

  calculators.forEach(calc => {
    const t = (calc.title?.[lang] || '').trim().toLowerCase();
    const d = (calc.description?.[lang] || '').trim().toLowerCase();

    if (t) {
      if (!titles.has(t)) titles.set(t, []);
      titles.get(t).push(calc.slug);
    }
    if (d) {
      if (!descriptions.has(d)) descriptions.set(d, []);
      descriptions.get(d).push(calc.slug);
    }
  });

  const dupT = Array.from(titles.entries()).filter(([t, slugs]) => slugs.length > 1);
  const dupD = Array.from(descriptions.entries()).filter(([d, slugs]) => slugs.length > 1);

  console.log(`\n[${lang.toUpperCase()}]`);
  if (dupT.length > 0) {
    console.log(`  Duplicate Titles in calculators.ts:`);
    dupT.forEach(([t, slugs]) => console.log(`    "${t}" shared by: ${slugs.join(', ')}`));
  } else {
    console.log(`  Titles in calculators.ts: All unique`);
  }

  if (dupD.length > 0) {
    console.log(`  Duplicate Descriptions in calculators.ts:`);
    dupD.forEach(([d, slugs]) => console.log(`    "${d.slice(0, 60)}..." shared by: ${slugs.join(', ')}`));
  } else {
    console.log(`  Descriptions in calculators.ts: All unique`);
  }
});
