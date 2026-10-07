import fs from 'fs';

const content = fs.readFileSync('src/data/seoDatabase.ts', 'utf8');
const tempContent = content.replace("from '../utils/calculators';", "from '../src/utils/calculators.ts';");
fs.writeFileSync('scratch/tempSeo.ts', tempContent);

async function run() {
  const { seoDatabase } = await import('./tempSeo.ts');
  const nonEnglishLangs = ['es', 'fr', 'de', 'ko', 'hi'];
  
  const faqIssues = [];

  for (const [slug, langMap] of Object.entries(seoDatabase)) {
    for (const lang of nonEnglishLangs) {
      const data = langMap[lang];
      if (!data || !data.faqs) continue;

      data.faqs.forEach((faq, i) => {
        const q = faq.question || '';
        const a = faq.answer || '';
        
        // Check for common English phrases in question or answer
        const englishPhrases = [
          'What is', 'How does', 'Why is', 'Is the', 'What are', 'How to', 'Can I',
          'The WHO adult', 'Standard WHO', 'A metric BMI', 'The official WHO',
          'according to', 'Body Mass Index', 'overweight', 'underweight', 'reference threshold'
        ];

        for (const ep of englishPhrases) {
          if (q.includes(ep) || (a.includes(ep) && lang !== 'en')) {
            faqIssues.push({ slug, lang, index: i, ep, question: q, answerSnippet: a.substring(0, 80) });
            break;
          }
        }
      });
    }
  }

  console.log('Total FAQ issues found:', faqIssues.length);
  fs.writeFileSync('scratch/faq_issues.json', JSON.stringify(faqIssues, null, 2));
}

run();
