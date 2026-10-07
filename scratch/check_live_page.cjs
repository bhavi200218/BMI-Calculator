const fs = require('fs');

async function check() {
  const res = await fetch('https://realbmicalculator.com/ko/bmi-calculator-for-indians/');
  const html = await res.text();
  
  // Headings
  const headings = html.match(/<h[1234][^>]*>[\s\S]*?<\/h[1234]>/g) || [];
  console.log('--- HEADINGS ---');
  headings.forEach(h => console.log(h.replace(/<[^>]+>/g, '').trim()));
  
  // FAQ questions
  console.log('--- DETAILS / SUMMARY (FAQS) ---');
  const summaries = html.match(/<summary[^>]*>[\s\S]*?<\/summary>/g) || [];
  summaries.forEach((s, i) => console.log(i + 1, s.replace(/<[^>]+>/g, '').trim()));

  // Other FAQ blocks
  console.log('--- H4 (Inside FAQ blocks) ---');
  const h4s = html.match(/<h4[^>]*>[\s\S]*?<\/h4>/g) || [];
  h4s.forEach((h, i) => console.log(i + 1, h.replace(/<[^>]+>/g, '').trim()));
}

check();
