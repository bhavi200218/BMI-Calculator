const fs = require('fs');

let content = fs.readFileSync('src/data/seoDatabase.ts', 'utf8');

const additionalIndiaFaqs = {
  es: [
    {
      question: "¿Cómo se calcula el IMC para adultos indios?",
      answer: "Para calcular el IMC en indios, divide el peso en kg por la altura en metros al cuadrado. Por ejemplo, 65 kg / (1.68 m x 1.68 m) = 23.0 kg/m² (sobrepeso según el punto de corte de la OMS para Asia)."
    },
    {
      question: "¿Cuál es la tabla de peso ideal para la población india?",
      answer: "Un peso ideal para adultos indios mantiene el IMC entre 18.5 y 22.9 kg/m² según las pautas de referencia del ICMR y la OMS."
    }
  ],
  fr: [
    {
      question: "Comment calculer l'IMC pour les adultes indiens ?",
      answer: "Pour calculer l'IMC chez les Indiens, divisez le poids en kg par la taille en mètres au carré. Par exemple, 65 kg / (1.68 m x 1.68 m) = 23.0 kg/m² (surpoids selon le seuil asiatique de l'OMS)."
    },
    {
      question: "Quel est le tableau de poids idéal pour la population indienne ?",
      answer: "Un poids idéal pour les adultes indiens maintient l'IMC entre 18.5 et 22.9 kg/m² selon les directives de l'ICMR et de l'OMS."
    }
  ],
  de: [
    {
      question: "Wie berechnet man den BMI für indische Erwachsene?",
      answer: "Um den BMI bei Indern zu berechnen, teilen Sie das Gewicht in kg durch die Größe in Metern zum Quadrat. Beispiel: 65 kg / (1,68 m x 1,68 m) = 23,0 kg/m² (Übergewicht nach dem WHO-Asien-Schwellenwert)."
    },
    {
      question: "Was ist die Idealgewichtstabelle für die indische Bevölkerung?",
      answer: "Ein Idealgewicht für indische Erwachsene hält den BMI zwischen 18,5 und 22,9 kg/m² gemäß den ICMR- und WHO-Leitlinien."
    }
  ],
  ko: [
    {
      question: "인도 성인의 BMI는 어떻게 계산하나요?",
      answer: "인도 성인의 BMI 계산은 체중(kg)을 신장(m)의 제곱으로 나눕니다. 예: 65 kg / (1.68 m x 1.68 m) = 23.0 kg/m² (WHO 아시아 과체중 기준)."
    },
    {
      question: "인도 인구의 적정 체중 범위는 어떻게 되나요?",
      answer: "ICMR 및 WHO 지침에 따르면 인도 성인의 적정 체중은 BMI 18.5~22.9 kg/m² 범위입니다."
    }
  ],
  hi: [
    {
      question: "भारतीय वयस्कों के लिए बीएमआई की गणना कैसे की जाती है?",
      answer: "भारतीयों के लिए बीएमआई गणना: वजन (किग्रा) को ऊंचाई के वर्ग (मीटर²) से विभाजित करें। उदाहरण: 65 किग्रा / (1.68 मीटर x 1.68 मीटर) = 23.0 kg/m² (डब्ल्यूएचओ एशियाई कटऑफ के तहत ओवरवेट)।"
    },
    {
      question: "भारतीयों के लिए आदर्श वजन सीमा क्या है?",
      answer: "आईसीएमआर (ICMR) और डब्ल्यूएचओ (WHO) के दिशानिर्देशों के अनुसार भारतीय वयस्कों के लिए आदर्श बीएमआई 18.5 से 22.9 kg/m² के बीच रहता है।"
    }
  ]
};

// Insert into bmi-calculator-india and bmi-calculator-for-indians
['bmi-calculator-india', 'bmi-calculator-for-indians'].forEach(slug => {
  const sPos = content.indexOf(`"${slug}":`);
  if (sPos === -1) return;
  const nextPos = content.indexOf(`"healthy-weight-by-height":`, sPos + 10);
  const endPos = nextPos !== -1 ? nextPos : content.length;
  let block = content.substring(sPos, endPos);

  ['es', 'fr', 'de', 'ko', 'hi'].forEach(lang => {
    const lPos = block.indexOf(`"${lang}": {`);
    if (lPos === -1) return;
    const nextL = ['en', 'es', 'fr', 'de', 'ko', 'hi'].map(l => block.indexOf(`"${l}": {`, lPos + 5)).filter(p => p !== -1);
    const lEnd = nextL.length > 0 ? Math.min(...nextL) : block.length;
    let lBlock = block.substring(lPos, lEnd);

    const faqCount = (lBlock.match(/"question":/g) || []).length;
    if (faqCount === 5) {
      const faqsEnd = lBlock.lastIndexOf(']');
      if (faqsEnd !== -1) {
        const extraJson = additionalIndiaFaqs[lang].map(f => `,\n        {\n          "question": "${f.question.replace(/"/g, '\\"')}",\n          "answer": "${f.answer.replace(/"/g, '\\"')}"\n        }`).join('');
        lBlock = lBlock.substring(0, faqsEnd) + extraJson + '\n      ]' + lBlock.substring(faqsEnd + 1);
        block = block.substring(0, lPos) + lBlock + block.substring(lEnd);
      }
    }
  });

  content = content.substring(0, sPos) + block + content.substring(endPos);
});

fs.writeFileSync('src/data/seoDatabase.ts', content, 'utf8');
console.log("Successfully synced Indian BMI tool FAQs to 7 FAQs across all locales!");
