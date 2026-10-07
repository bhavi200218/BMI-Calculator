const urls = [
  'https://www.realbmicalculator.com/es/bmi-calculator-for-indians/?utm_source=chatgpt.com',
  'https://www.realbmicalculator.com/fr/bmi-calculator-for-indians/?utm_source=chatgpt.com',
  'https://www.realbmicalculator.com/de/bmi-calculator-for-indians/?utm_source=chatgpt.com',
  'https://www.realbmicalculator.com/ko/bmi-calculator-for-indians/?utm_source=chatgpt.com',
  'https://www.realbmicalculator.com/en/bmi-calculator-for-indians/?utm_source=chatgpt.com'
];

const claims = [
  'Underweight reference threshold',
  'Optimal healthy range for Indian adults',
  'Elevated cardiometabolic risk cutoff for Indians',
  'Class I obesity threshold under ICMR standards',
  'Severe obesity risk threshold',
  'BMI Calculator for Indians – Healthy Height Weight Chart for Indian Adults',
  'Estándares Médicos de la OMS',
  'indische Staatsbürger',
  'Staatsbürger'
];

async function forensicProof() {
  console.log('=== FORENSIC LIVE PROOF ON PRODUCTION URLS ===\n');

  for (const u of urls) {
    const res = await fetch(u, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }
    });
    const html = await res.text();
    const loc = u.split('/')[3];

    console.log(`====================================================`);
    console.log(`LOCALE: [${loc.toUpperCase()}]`);
    console.log(`URL: ${u}`);
    console.log(`Status: ${res.status}`);

    const titleM = html.match(/<title>([\s\S]*?)<\/title>/);
    console.log(`Page Title: "${titleM ? titleM[1].trim() : 'NONE'}"`);

    const h1M = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
    console.log(`H1 Tag:     "${h1M ? h1M[1].replace(/<[^>]+>/g, '').trim() : 'NONE'}"`);

    // Badges
    const badgeMatches = [...html.matchAll(/<span[^>]*class="[^"]*rounded-full[^"]*"[^>]*>([\s\S]*?)<\/span>/g)]
      .map(m => m[1].replace(/<[^>]+>/g, '').trim())
      .filter(t => t.length > 0 && !t.includes('--'));
    console.log(`Badges:     ${JSON.stringify(badgeMatches)}`);

    // Check claims
    console.log(`Claims Verification:`);
    claims.forEach(c => {
      const found = html.includes(c);
      if (loc === 'en' && c.startsWith('BMI Calculator for Indians –')) {
        // EN title is expected to have English
        return;
      }
      console.log(`  - "${c}": ${found ? '❌ FOUND (TRUE)' : '✅ NOT FOUND (FALSE / ABSENT)'}`);
    });

    // Check slug leak into translated sentences
    const textOnly = html.replace(/<(a|link|script|div)[^>]*(href|id|data-slug)[^>]*>/gi, '');
    const hasSlugLeak = textOnly.includes('de bmi calculator for indians') ||
                        textOnly.includes('pour bmi calculator for indians') ||
                        textOnly.includes('für bmi calculator for indians') ||
                        textOnly.includes('bmi calculator for indians 계산기');
    console.log(`  - Slug leaked into translated prose: ${hasSlugLeak ? '❌ YES' : '✅ NO'}`);

    // FAQ count & duplicates
    const faqs = [];
    const faqRegex = /<h4[^>]*>([\s\S]*?)<\/h4>/g;
    let m;
    while ((m = faqRegex.exec(html)) !== null) {
      faqs.push(m[1].replace(/<[^>]+>/g, '').trim());
    }
    const uniqueFaqs = new Set(faqs);
    console.log(`FAQ Count:  ${faqs.length} total, ${uniqueFaqs.size} unique`);
    if (faqs.length !== uniqueFaqs.size) {
      console.log(`  ❌ Duplicate FAQs found!`);
    } else {
      console.log(`  ✅ 0 Duplicate FAQs`);
    }

    // Reference table col3 values
    console.log(`Reference Table Rows:`);
    const trMatches = [...html.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)];
    trMatches.forEach((tr, i) => {
      const text = tr[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      console.log(`  Row ${i}: ${text}`);
    });

    console.log('\n');
  }
}

forensicProof();
