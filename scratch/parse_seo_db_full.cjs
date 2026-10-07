const fs = require('fs');

// We can extract seoDatabase by stripping types
let content = fs.readFileSync('src/data/seoDatabase.ts', 'utf8');
// remove TypeScript export, interfaces, and type annotations
content = content.replace(/export\s+interface\s+[\s\S]*?\}\s*\}/g, '');
content = content.replace(/export\s+interface\s+[\s\S]*?\}/g, '');
content = content.replace(/export\s+type\s+.*?;/g, '');
content = content.replace(/:\s*ToolContent/g, '');
content = content.replace(/:\s*Record<[^>]+>/g, '');
content = content.replace(/^export\s+(const|let|var)\s+/gm, 'const ');
content = content.replace(/^import\s+.*$/gm, '');

// Evaluate safely
const sandbox = {};
const fn = new Function('module', 'exports', content + '\nmodule.exports = { seoDatabase, tableUi };');
const mod = { exports: {} };
fn(mod, mod.exports);

const { seoDatabase } = mod.exports;
const slugs = Object.keys(seoDatabase);
const langs = ['en', 'es', 'fr', 'de', 'ko', 'hi'];

console.log(`Auditing all ${slugs.length} calculators in seoDatabase:\n`);

let issues = 0;
slugs.forEach(s => {
  const c = seoDatabase[s];
  langs.forEach(l => {
    if (!c[l]) {
      console.log(`[MISSING LANG] ${s} is missing '${l}'`);
      issues++;
      return;
    }
    const d = c[l];
    if (!d.tableRows || d.tableRows.length === 0) {
      console.log(`[NO TABLEROWS] ${s} [${l}]`);
      issues++;
    }
    if (!d.faqs || d.faqs.length === 0) {
      console.log(`[NO FAQS] ${s} [${l}]`);
      issues++;
    }
    // Check if tableRows col3 has English in non-en
    if (l !== 'en' && d.tableRows) {
      d.tableRows.forEach((r, idx) => {
        if (/underweight reference threshold|optimal healthy range|elevated cardiometabolic risk cutoff|class i obesity threshold under icmr|severe obesity risk threshold/i.test(r.col3)) {
          console.log(`[ENGLISH ROW FALLBACK] ${s} [${l}] Row ${idx}: ${r.col3}`);
          issues++;
        }
      });
    }
    // Check if FAQs question or answer has slug leak
    if (l !== 'en' && d.faqs) {
      d.faqs.forEach((f, idx) => {
        if (f.question.includes('bmi calculator for indians') || f.answer.includes('bmi calculator for indians')) {
          console.log(`[SLUG LEAK IN FAQ] ${s} [${l}] FAQ ${idx}`);
          issues++;
        }
      });
    }
  });
});

console.log(`\nAudit finished with ${issues} issues.`);
