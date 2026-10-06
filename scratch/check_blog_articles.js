import fs from 'fs';

const fileContent = fs.readFileSync('src/utils/blogArticles.ts', 'utf-8');
const match = fileContent.match(/export const blogArticles[^{]*= (\{[\s\S]*?\n\};)/);
let blogArticles = {};
if (match) {
  eval('blogArticles = ' + match[1].replace(/;\s*$/, ''));
}

const keys = Object.keys(blogArticles);
console.log('Blog article keys count:', keys.length);
console.log('Keys:', keys);

const langs = ['en', 'es', 'fr', 'de', 'ko', 'hi'];

keys.forEach(k => {
  console.log(`\n--- Article: ${k} ---`);
  langs.forEach(lang => {
    const title = blogArticles[k].title?.[lang];
    const html = blogArticles[k].contentHtml?.[lang];
    const htmlLength = typeof html === 'string' ? html.length : 0;
    const hasEnglishInHtml = lang !== 'en' && typeof html === 'string' && (
      html.includes('What is Body Mass Index') || 
      html.includes('How is BMI Calculated') || 
      html.includes('Overview of BMI') ||
      html.includes('Is BMI Accurate') ||
      html.includes('This guide provides detailed information based on')
    );
    console.log(`[${lang}] Title: "${title}" | Html Len: ${htmlLength} | English Leak: ${hasEnglishInHtml ? 'YES ❌' : 'NO ✅'}`);
  });
});
