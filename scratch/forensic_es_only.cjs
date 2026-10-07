const u = 'https://www.realbmicalculator.com/es/bmi-calculator-for-indians/?utm_source=chatgpt.com';

async function testEs() {
  const res = await fetch(u);
  const html = await res.text();

  console.log(`LOCALE: [ES]`);
  console.log(`URL: ${u}`);
  console.log(`Status: ${res.status}`);

  const titleM = html.match(/<title>([\s\S]*?)<\/title>/);
  console.log(`Page Title: "${titleM ? titleM[1].trim() : 'NONE'}"`);

  const h1M = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  console.log(`H1 Tag:     "${h1M ? h1M[1].replace(/<[^>]+>/g, '').trim() : 'NONE'}"`);

  const badgeMatches = [...html.matchAll(/<span[^>]*class="[^"]*rounded-full[^"]*"[^>]*>([\s\S]*?)<\/span>/g)]
    .map(m => m[1].replace(/<[^>]+>/g, '').trim())
    .filter(t => t.length > 0 && !t.includes('--'));
  console.log(`Badges:     ${JSON.stringify(badgeMatches)}`);

  console.log(`Claims Verification:`);
  [
    'Underweight reference threshold',
    'Optimal healthy range for Indian adults',
    'Elevated cardiometabolic risk cutoff for Indians',
    'Class I obesity threshold under ICMR standards',
    'Severe obesity risk threshold',
    'BMI Calculator for Indians – Healthy Height Weight Chart for Indian Adults',
    'Estándares Médicos de la OMS'
  ].forEach(c => {
    console.log(`  - "${c}": ${html.includes(c) ? '❌ FOUND (TRUE)' : '✅ NOT FOUND (FALSE / ABSENT)'}`);
  });

  const faqs = [];
  const faqRegex = /<h4[^>]*>([\s\S]*?)<\/h4>/g;
  let m;
  while ((m = faqRegex.exec(html)) !== null) {
    faqs.push(m[1].replace(/<[^>]+>/g, '').trim());
  }
  const uniqueFaqs = new Set(faqs);
  console.log(`FAQ Count:  ${faqs.length} total, ${uniqueFaqs.size} unique`);

  console.log(`Reference Table Rows:`);
  const trMatches = [...html.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)];
  trMatches.forEach((tr, i) => {
    const text = tr[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    console.log(`  Row ${i}: ${text}`);
  });
}

testEs();
