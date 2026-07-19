import fs from 'fs';
import path from 'path';
const root = path.resolve('c:/Users/admin/OneDrive/Desktop/bmi-calculator-premium');
const host = 'https://realbmicalculator.com';
const langs = ['en','es','fr','de','ko','hi'];
const calcPages = [
  {slug:'bmi-calculator', title:'Free BMI Calculator - Accurate BMI Info', desc:'Calculate Body Mass Index (BMI) easily.'},
  {slug:'bmr-calculator', title:'Accurate BMR Calculator - Basal Metabolic Rate', desc:'Determine your resting metabolic rate.'},
  {slug:'tdee-calculator', title:'TDEE Calculator - Total Daily Energy Expenditure', desc:'Find your total daily calorie maintenance burn.'},
  {slug:'body-fat-calculator', title:'US Navy Body Fat Calculator - Healthy Measurement', desc:'Calculate body fat percentage accurately.'},
  {slug:'lean-body-mass-calculator', title:'Lean Body Mass Calculator - LBM Metric', desc:'Calculate your weight excluding body fat.'},
  {slug:'ideal-weight-calculator', title:'Ideal Weight Calculator - Target Fitness Calculator', desc:'Determine your healthiest weight range.'},
  {slug:'calorie-calculator', title:'Calorie Target Calculator - Daily Food Intake', desc:'Calculate target calories for fat loss or gain.'},
  {slug:'protein-intake-calculator', title:'Daily Protein Calculator - Macro Fitness Target', desc:'Calculate daily protein requirements.'},
  {slug:'water-intake-calculator', title:'Water Intake Calculator - Daily Hydration Target', desc:'Compute your daily target hydration limit.'},
  {slug:'macro-calculator', title:'Macro Calculator - Carb, Protein & Fat Split', desc:'Partition your calories into carbs, protein, and fat.'},
  {slug:'waist-to-hip-ratio-calculator', title:'Waist-to-Hip Ratio Calculator - WHR Diagnostic', desc:'Assess cardiovascular health risks using WHR.'},
  {slug:'body-surface-area-calculator', title:'Body Surface Area Calculator - BSA Metric', desc:'Calculate body surface area in square meters.'},
  {slug:'heart-rate-zone-calculator', title:'Target Heart Rate Zone Calculator - Fitness Training', desc:'Determine your exercise target heart rate zones.'},
  {slug:'one-rep-max-calculator', title:'One Rep Max Calculator - Strength Lift Diagnostic', desc:'Estimate weight lifting 1RM strength capability.'},
  {slug:'pregnancy-weight-gain-calculator', title:'Pregnancy Weight Gain Guide & Calculator', desc:'Track recommended gestational weight accumulation.'}
];
const staticPages = [
  {slug:'about', title:'About Real BMI - Precision Health Calculator Mission', desc:'Discover the mission behind Real BMI Calculator and our clinical-grade health tools.'},
  {slug:'contact', title:'Contact Real BMI Calculator', desc:'Get support or feedback for Real BMI's health calculators and accuracy.'},
  {slug:'disclaimer', title:'Disclaimer | Real BMI', desc:'Read the medical disclaimer and calculator guidance on Real BMI.'},
  {slug:'privacy-policy', title:'Privacy Policy | Real BMI', desc:'Learn how Real BMI handles privacy, data usage, and calculator inputs.'},
  {slug:'terms-conditions', title:'Terms & Conditions | Real BMI', desc:'Review the terms of use for Real BMI Calculator and health tools.'},
  {slug:'sources', title:'Sources | Real BMI', desc:'Explore the trusted clinical sources behind Real BMI calculators and guidance.'},
  {slug:'editorial-policy', title:'Editorial Policy | Real BMI', desc:'Read Real BMI's editorial standards for evidence-based health content.'}
];
const blogPages = [
  {path:'/en/blog/bmi-chart-for-men-women', title:'BMI Chart for Men and Women', desc:'Understand BMI ranges, categories and health implications for both sexes.'},
  {path:'/en/blog/healthy-bmi-range-indians', title:'Healthy BMI Range for Indians', desc:'Learn how BMI ranges are interpreted for Indian body types and health goals.'},
  {path:'/en/blog/bmi-calculator-teens', title:'BMI Calculator for Teens', desc:'Find the right BMI guidance for teens with age-sensitive health context.'}
];
const pages = [];
for (const lang of langs) {
  pages.push({path:`/${lang}/`, title:'Real BMI Health Tools Hub', desc:`Free BMI, BMR, TDEE, and body composition calculators in ${lang}.`});
  for (const page of staticPages) {
    pages.push({path:`/${lang}/${page.slug}`, title: page.title, desc: page.desc});
  }
  for (const calc of calcPages) {
    pages.push({path:`/${lang}/${calc.slug}`, title: calc.title, desc: calc.desc});
  }
}
pages.push({path:'/search', title:'Search Real BMI | Health Calculator Search', desc:'Find BMI, BMR, TDEE, and body composition tools across Real BMI.'});
pages.push({path:'/sources', title:'Sources | Real BMI', desc:'Explore the trusted clinical sources behind Real BMI calculators and guidance.'});
pages.push({path:'/editorial-policy', title:'Editorial Policy | Real BMI', desc:'Read Real BMI's editorial standards for evidence-based health content.'});
pages.push(...blogPages);
const today = new Date().toISOString().slice(0,10);
const llmsLines = ['# LLMS page index for Real BMI', `# Generated: ${today}`, '# Format: URL | Title | Description', ''];
const llmsFullLines = ['# LLMS full index for Real BMI', `# Generated: ${today}`, ''];
for (const page of pages) {
  const url = host + page.path;
  llmsLines.push(`${url} | ${page.title} | ${page.desc}`);
  llmsFullLines.push(`URL: ${url}`);
  llmsFullLines.push(`Title: ${page.title}`);
  llmsFullLines.push(`Description: ${page.desc}`);
  llmsFullLines.push(`Target keywords: ${page.title.split(/\s+/).slice(0,8).join(', ').replace(/\.|\|/g,'')}, health calculator, wellness tool`);
  llmsFullLines.push('Best SEO notes: Use clinical, privacy-first health metric language; emphasize instant results, WHO/CDC standards, and no signup required.');
  llmsFullLines.push('');
}
const sitemapLines = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'];
for (const page of pages) {
  const url = host + page.path;
  const priority = ['/', '/en/'].includes(page.path) || langs.some(l => page.path === `/${l}/`) ? '0.9' : page.path.startsWith('/en/blog/') ? '0.6' : ['editorial-policy','sources','privacy-policy','terms-conditions'].some(x => page.path.includes(x)) ? '0.5' : '0.8';
  const isInfoPage = ['editorial-policy','sources','privacy-policy','terms-conditions'].some(x => page.path.includes(x));
  const freq = ['/', '/en/'].includes(page.path) || langs.some(l => page.path === `/${l}/`) ? 'daily' : isInfoPage ? 'monthly' : 'weekly';
  sitemapLines.push('  <url>');
  sitemapLines.push(`    <loc>${url}</loc>`);
  sitemapLines.push(`    <lastmod>${today}</lastmod>`);
  sitemapLines.push(`    <changefreq>${freq}</changefreq>`);
  sitemapLines.push(`    <priority>${priority}</priority>`);
  sitemapLines.push('  </url>');
}
sitemapLines.push('</urlset>');
fs.writeFileSync(path.join(root,'public','llms.txt'), llmsLines.join('\n'));
fs.writeFileSync(path.join(root,'public','llms-full.txt'), llmsFullLines.join('\n'));
fs.writeFileSync(path.join(root,'public','sitemap.xml'), sitemapLines.join('\n'));
console.log('Created public/llms.txt, public/llms-full.txt, public/sitemap.xml');
