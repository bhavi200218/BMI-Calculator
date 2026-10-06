const fs = require('fs');

let content = fs.readFileSync('src/data/seoDatabase.ts', 'utf8');

const additionalFaqs = {
  en: [
    {
      question: "Can I use the 3D Body Visualizer on mobile devices?",
      answer: "Yes, the 3D visualizer is fully responsive and optimized for mobile touch controls, allowing 360° rotation and pinch-to-zoom on smartphones and tablets."
    },
    {
      question: "How does body mass index relate to 3D avatar proportion scaling?",
      answer: "The 3D avatar dynamically adjusts mesh thickness, waist curvature, and volumetric proportions based on your height-to-weight ratio and calculated BMI score."
    }
  ],
  es: [
    {
      question: "¿Puedo usar el Visualizador Corporal 3D en dispositivos móviles?",
      answer: "Sí, el visualizador 3D es totalmente adaptable a móviles y controles táctiles, lo que permite rotación de 360° en teléfonos inteligentes y tabletas."
    },
    {
      question: "¿Cómo se relaciona el índice de masa corporal con el escalado del avatar 3D?",
      answer: "El avatar 3D ajusta dinámicamente el grosor de la malla, la curvatura de la cintura y las proporciones volumétricas según tu IMC."
    }
  ],
  fr: [
    {
      question: "Puis-je utiliser le Visualiseur Corporel 3D sur des appareils mobiles ?",
      answer: "Oui, le visualiseur 3D est entièrement adapté aux mobiles et aux commandes tactiles, permettant une rotation à 360° sur smartphones et tablettes."
    },
    {
      question: "Comment l'indice de masse corporelle est-il lié à la modélisation 3D ?",
      answer: "L'avatar 3D ajuste dynamiquement l'épaisseur du maillage et les proportions volumétriques en fonction de votre rapport taille/poids et de votre score IMC."
    }
  ],
  de: [
    {
      question: "Kann ich den 3D-Körper-Visualisierer auf Mobilgeräten verwenden?",
      answer: "Ja, der 3D-Visualisierer ist vollständig für mobile Touch-Steuerung optimiert und ermöglicht 360°-Drehung auf Smartphones und Tablets."
    },
    {
      question: "Wie hängt der Body-Mass-Index mit der 3D-Proportionenskalierung zusammen?",
      answer: "Der 3D-Avatar passt die Netzstärke und die volumetrischen Proportionen dynamisch basierend auf Ihrem BMI-Wert an."
    }
  ],
  ko: [
    {
      question: "모바일 기기에서도 3D 체형 시각화 도구를 사용할 수 있나요?",
      answer: "네, 3D 시각화 도구는 모바일 터치 조작에 완벽하게 최적화되어 스마트폰과 태블릿에서 360° 회전을 지원합니다."
    },
    {
      question: "체질량지수(BMI)는 3D 아바타의 비율 스케일링과 어떻게 연결되나요?",
      answer: "3D 아바타는 입력된 신장 대 체중 비율과 계산된 BMI 수치에 따라 실루엣 두께와 부피 비율을 실시간으로 조정합니다."
    }
  ],
  hi: [
    {
      question: "क्या मैं मोबाइल उपकरणों पर 3D बॉडी विजुअलाइज़र का उपयोग कर सकता हूं?",
      answer: "हाँ, 3D विज़ुअलाइज़र मोबाइल टच कंट्रोल के लिए पूरी तरह से अनुकूलित है, जिससे स्मार्टफ़ोन और टैबलेट पर 360° रोटेशन की अनुमति मिलती है।"
    },
    {
      question: "बॉडी मास इंडेक्स 3D अवतार अनुपात स्केलिंग से कैसे संबंधित है?",
      answer: "3D अवतार आपकी ऊंचाई-से-वजन अनुपात और बीएमआई स्कोर के आधार पर मेश की मोटाई और 3D आकृतियों को वास्तविक समय में समायोजित करता है।"
    }
  ]
};

// Process 3d-bmi-calculator and 3d-body-visualizer
['3d-bmi-calculator', '3d-body-visualizer'].forEach(slug => {
  const sPos = content.indexOf(`"${slug}":`);
  if (sPos === -1) return;
  const nextPos = content.indexOf(`"bmi-chart":`, sPos + 10);
  const endPos = nextPos !== -1 ? nextPos : content.length;
  let block = content.substring(sPos, endPos);

  ['en', 'es', 'fr', 'de', 'ko', 'hi'].forEach(lang => {
    const lPos = block.indexOf(`"${lang}": {`);
    if (lPos === -1) return;
    const nextL = ['en', 'es', 'fr', 'de', 'ko', 'hi'].map(l => block.indexOf(`"${l}": {`, lPos + 5)).filter(p => p !== -1);
    const lEnd = nextL.length > 0 ? Math.min(...nextL) : block.length;
    let lBlock = block.substring(lPos, lEnd);

    // Check if lBlock has only 5 FAQs
    const faqCount = (lBlock.match(/"question":/g) || []).length;
    if (faqCount === 5) {
      // Find the closing bracket of faqs array: "faqs": [ ... ]
      const faqsEnd = lBlock.lastIndexOf(']');
      if (faqsEnd !== -1) {
        const extraJson = additionalFaqs[lang].map(f => `        ,\n        {\n          "question": "${f.question}",\n          "answer": "${f.answer}"\n        }`).join('');
        lBlock = lBlock.substring(0, faqsEnd) + extraJson + '\n      ]' + lBlock.substring(faqsEnd + 1);
        block = block.substring(0, lPos) + lBlock + block.substring(lEnd);
      }
    }
  });

  content = content.substring(0, sPos) + block + content.substring(endPos);
});

fs.writeFileSync('src/data/seoDatabase.ts', content, 'utf8');
console.log("Successfully added 2 additional FAQs to 3D BMI tools across all 6 languages!");
