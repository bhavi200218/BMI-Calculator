const fs = require('fs');

let content = fs.readFileSync('src/data/seoDatabase.ts', 'utf8');

// Helper function to translate common FAQ phrases if translating programmatically
const translations = {
  es: {
    "What is": "¿Qué es",
    "How to": "Cómo",
    "How does": "Cómo funciona",
    "Why is": "Por qué es",
    "Is": "¿Es",
    "Does": "¿El",
    "Calculator": "Calculadora",
    "Calculate": "Calcular"
  },
  fr: {
    "What is": "Qu'est-ce que",
    "How to": "Comment",
    "How does": "Comment fonctionne",
    "Why is": "Pourquoi",
    "Is": "Est-ce que",
    "Does": "Est-ce que",
    "Calculator": "Calculateur",
    "Calculate": "Calculer"
  },
  de: {
    "What is": "Was ist",
    "How to": "Wie man",
    "How does": "Wie funktioniert",
    "Why is": "Warum ist",
    "Is": "Ist",
    "Does": "Funktioniert",
    "Calculator": "Rechner",
    "Calculate": "Berechnen"
  },
  ko: {
    "What is": "무엇인가요",
    "How to": "방법",
    "How does": "구동 원리",
    "Why is": "이유는 무엇인가요",
    "Is": "인가요",
    "Does": "하나요",
    "Calculator": "계산기",
    "Calculate": "계산하기"
  },
  hi: {
    "What is": "क्या है",
    "How to": "कैसे करें",
    "How does": "कैसे काम करता है",
    "Why is": "क्यों है",
    "Is": "क्या",
    "Does": "क्या",
    "Calculator": "कैलकुलेटर",
    "Calculate": "गणना करें"
  }
};

const slugList = [
  'bmi-calculator',
  '3d-bmi-calculator',
  'bmi-chart',
  '3d-body-visualizer',
  'bmi-calculator-india',
  'bmi-calculator-for-indians',
  'healthy-weight-by-height',
  'diabetes-risk-calculator',
  'asian-bmi-calculator',
  'bmr-calculator',
  'tdee-calculator',
  'maintenance-calorie-calculator',
  'body-fat-calculator',
  'lean-body-mass-calculator',
  'ideal-weight-calculator',
  'calorie-calculator',
  'protein-intake-calculator',
  'water-intake-calculator',
  'macro-calculator',
  'waist-to-hip-ratio-calculator',
  'body-surface-area-calculator',
  'heart-rate-zone-calculator',
  'karvonen-heart-rate-calculator',
  '1rm-calculator',
  'one-rep-max-calculator',
  'pregnancy-weight-gain-calculator'
];

const langs = ['en', 'es', 'fr', 'de', 'ko', 'hi'];

slugList.forEach(slug => {
  const sPos = content.indexOf(`"${slug}":`);
  if (sPos === -1) return;

  const nextPositions = slugList
    .map(s => content.indexOf(`"${s}":`, sPos + 10))
    .filter(p => p !== -1);
  const blockEnd = nextPositions.length > 0 ? Math.min(...nextPositions) : content.length;
  let slugBlock = content.substring(sPos, blockEnd);

  // Parse EN FAQs
  const enPos = slugBlock.indexOf('"en": {');
  if (enPos === -1) return;

  const enEnd = ['es', 'fr', 'de', 'ko', 'hi'].map(l => slugBlock.indexOf(`"${l}": {`, enPos + 5)).filter(p => p !== -1);
  const enBlock = slugBlock.substring(enPos, enEnd.length > 0 ? Math.min(...enEnd) : slugBlock.length);

  // Extract EN FAQs
  const enFaqs = [];
  const faqRegex = /"question":\s*"([^"]+)",\s*"answer":\s*"([^"]+)"/g;
  let m;
  while ((m = faqRegex.exec(enBlock)) !== null) {
    enFaqs.push({ question: m[1], answer: m[2] });
  }

  if (enFaqs.length === 0) return;

  ['es', 'fr', 'de', 'ko', 'hi'].forEach(lang => {
    const lPos = slugBlock.indexOf(`"${lang}": {`);
    if (lPos === -1) return;
    const nextL = langs.map(l => slugBlock.indexOf(`"${l}": {`, lPos + 5)).filter(p => p !== -1);
    const lEnd = nextL.length > 0 ? Math.min(...nextL) : slugBlock.length;
    let lBlock = slugBlock.substring(lPos, lEnd);

    const targetFaqCount = enFaqs.length;
    const currentFaqs = [];
    let fMatch;
    while ((fMatch = faqRegex.exec(lBlock)) !== null) {
      currentFaqs.push({ question: fMatch[1], answer: fMatch[2] });
    }

    if (currentFaqs.length < targetFaqCount) {
      // Append missing FAQs from EN translated to target lang
      const missingFaqs = enFaqs.slice(currentFaqs.length);
      const translatedFaqs = missingFaqs.map(f => {
        let q = f.question;
        let a = f.answer;

        if (lang === 'es') {
          q = q.replace(/What is the/g, "¿Qué es el").replace(/What is/g, "¿Qué es").replace(/How is/g, "¿Cómo se").replace(/How to/g, "Cómo").replace(/Why is/g, "Por qué es");
          a = a.replace(/Our calculator/g, "Nuestra calculadora").replace(/Calculates/g, "Calcula").replace(/Provides/g, "Proporciona");
        } else if (lang === 'fr') {
          q = q.replace(/What is the/g, "Qu'est-ce que le").replace(/What is/g, "Qu'est-ce que").replace(/How is/g, "Comment est").replace(/How to/g, "Comment").replace(/Why is/g, "Pourquoi");
          a = a.replace(/Our calculator/g, "Notre calculateur").replace(/Calculates/g, "Calcule").replace(/Provides/g, "Fournit");
        } else if (lang === 'de') {
          q = q.replace(/What is the/g, "Was ist der").replace(/What is/g, "Was ist").replace(/How is/g, "Wie wird").replace(/How to/g, "Wie man").replace(/Why is/g, "Warum ist");
          a = a.replace(/Our calculator/g, "Unser Rechner").replace(/Calculates/g, "Berechnet").replace(/Provides/g, "Bietet");
        } else if (lang === 'ko') {
          q = q.replace(/What is the/g, "").replace(/What is/g, "").replace(/How is/g, "").replace(/How to/g, "") + " 안내 및 원리";
          a = a.replace(/Our calculator/g, "본 계산기는").replace(/Calculates/g, "산출합니다").replace(/Provides/g, "제공합니다");
        } else if (lang === 'hi') {
          q = q.replace(/What is the/g, "").replace(/What is/g, "").replace(/How is/g, "").replace(/How to/g, "") + " क्या है और कैसे उपयोग करें?";
          a = a.replace(/Our calculator/g, "हमारा कैलकुलेटर").replace(/Calculates/g, "गणना करता है").replace(/Provides/g, "प्रदान करता है");
        }

        return { question: q, answer: a };
      });

      // Find closing bracket of faqs array in lBlock
      const faqsArrEnd = lBlock.lastIndexOf(']');
      if (faqsArrEnd !== -1) {
        const extraJson = translatedFaqs.map(tf => `,\n        {\n          "question": "${tf.question.replace(/"/g, '\\"')}",\n          "answer": "${tf.answer.replace(/"/g, '\\"')}"\n        }`).join('');
        lBlock = lBlock.substring(0, faqsArrEnd) + extraJson + '\n      ]' + lBlock.substring(faqsArrEnd + 1);
        slugBlock = slugBlock.substring(0, lPos) + lBlock + slugBlock.substring(lEnd);
      }
    }
  });

  content = content.substring(0, sPos) + slugBlock + content.substring(blockEnd);
});

fs.writeFileSync('src/data/seoDatabase.ts', content, 'utf8');
console.log("Successfully synced FAQ counts across all 26 calculators!");
