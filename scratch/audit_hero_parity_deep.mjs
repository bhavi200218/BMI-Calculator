import { calculators } from '../src/utils/calculators.js';

const locales = ['en', 'es', 'fr', 'de', 'ko', 'hi'];

// Key information facts to verify in hero descriptions
const requiredFacts = [
  { key: 'free', enPatterns: ['free', '100% free', 'no cost'] },
  { key: 'privacy', enPatterns: ['privacy', 'private', 'privacy-focused'] },
  { key: 'browser', enPatterns: ['browser-based', 'browser', 'on-device'] },
  { key: 'reference', enPatterns: ['who', 'cdc', 'icmr', 'acsm', 'nih', 'mifflin', 'formula', 'guidance', 'standard', 'equation', 'guidelines'] }
];

console.log(`Auditing ${calculators.length} calculators across ${locales.length} locales...\n`);

const results = [];

for (const calc of calculators) {
  const enDesc = calc.description['en'] || '';
  
  for (const lang of locales) {
    const desc = calc.description[lang] || '';
    const name = calc.name[lang] || calc.name['en'] || '';
    const title = calc.title[lang] || calc.title['en'] || '';

    // Check presence of key facts compared to English
    const missingFacts = [];
    if (enDesc.toLowerCase().includes('free') && !desc.toLowerCase().match(/(gratuit|gratis|무료|मुफ़्त|kostenlos)/i)) {
      missingFacts.push('Free statement');
    }
    if (enDesc.toLowerCase().includes('privac') && !desc.toLowerCase().match(/(priva|confidentialit|datenschutz|개인정보|गोपनीयता)/i)) {
      missingFacts.push('Privacy statement');
    }
    if (enDesc.toLowerCase().includes('browser') && !desc.toLowerCase().match(/(browser|navegador|브라우저|ब्राउज़र)/i)) {
      missingFacts.push('Browser-based statement');
    }
    if ((enDesc.toLowerCase().includes('who') || enDesc.toLowerCase().includes('cdc')) && 
        !desc.toLowerCase().match(/(who|cdc|oms|wher|डब्ल्यूएचओ|सीडीसी)/i)) {
      missingFacts.push('WHO/CDC reference statement');
    }

    const lengthRatio = desc.length / (enDesc.length || 1);

    results.push({
      slug: calc.slug,
      lang,
      title,
      descLength: desc.length,
      enLength: enDesc.length,
      lengthRatio: lengthRatio.toFixed(2),
      missingFacts,
      isEquivalent: missingFacts.length === 0 && lengthRatio >= 0.75
    });
  }
}

const mismatches = results.filter(r => !r.isEquivalent);
console.log(`Total checked: ${results.length}`);
console.log(`Matches: ${results.length - mismatches.length}`);
console.log(`Mismatches: ${mismatches.length}\n`);

if (mismatches.length > 0) {
  console.log("SAMPLE MISMATCHES:");
  mismatches.slice(0, 15).forEach(m => {
    console.log(`[${m.slug}] [${m.lang}] Ratio: ${m.lengthRatio}, Missing: ${m.missingFacts.join(', ')}`);
  });
}
