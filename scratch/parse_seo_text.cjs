const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'seoDatabase.ts'), 'utf8');

// Let's check where tableRows and faqs are defined for both keys
function analyzeKey(key) {
  console.log(`\n=================== ANALYZING: ${key} ===================`);
  const idx = content.indexOf(`"${key}":`);
  if (idx === -1) {
    console.log("Key not found:", key);
    return;
  }
  const block = content.slice(idx, idx + 25000);
  
  ['en', 'hi', 'es', 'fr', 'de', 'ko'].forEach(lang => {
    const langIdx = block.indexOf(`"${lang}":`);
    if (langIdx === -1) {
      console.log(`Language [${lang}] NOT found in ${key}`);
      return;
    }
    const nextLangIdx = block.indexOf(`":`, langIdx + 10);
    const langChunk = block.slice(langIdx, langIdx + 3000);
    
    console.log(`\n--- ${key} -> [${lang}] ---`);
    // Extract col3 lines
    const col3Matches = langChunk.match(/"col3"\s*:\s*".*?"/g) || [];
    col3Matches.forEach(m => console.log('  ', m));
    
    // Check for "bmi calculator for indians" in FAQs or title
    const englishFaqs = langChunk.match(/"question"\s*:\s*".*?bmi calculator.*?"/gi) || [];
    englishFaqs.forEach(m => console.log('   English FAQ:', m));
  });
}

analyzeKey('bmi-calculator-india');
analyzeKey('bmi-calculator-for-indians');
