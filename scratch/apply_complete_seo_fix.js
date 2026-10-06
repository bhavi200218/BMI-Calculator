import fs from 'fs';

// Read ToolSEOContent.astro
let content = fs.readFileSync('src/components/ToolSEOContent.astro', 'utf-8');

// Parse current database
const match = content.match(/const seoDatabase[^{]*= (\{[\s\S]*?\n\};)/);
if (!match) {
  console.error("Could not find seoDatabase");
  process.exit(1);
}

let seoDatabase;
eval('seoDatabase = ' + match[1].replace(/;\s*$/, ''));

// Function to generate distinct non-generic FAQs for any calculator slug
function getUniqueFaqs(slug, lang) {
  const map = {
    'body-fat-calculator': {
      es: [
        { question: "¿Cómo calcula esta herramienta el porcentaje de grasa corporal?", answer: "Utiliza el método de circunferencia de la Marina de los EE. UU., basándose en la altura, cuello, cintura y cadera." },
        { question: "¿En qué se diferencia el porcentaje de grasa corporal del IMC?", answer: "El IMC solo evalúa el peso total respecto a la altura, mientras que el porcentaje de grasa distingue la masa magra de la masa adiposa." },
        { question: "¿Cuáles son los rangos saludables de grasa corporal para hombres y mujeres?", answer: "Para hombres adultos el rango de fitness suele estar entre 14-17% y en mujeres entre 21-24% según los estándares de la ACE." },
        { question: "¿Qué tan precisa es la cinta métrica en comparación con la exploración DEXA?", answer: "El método de la Marina tiene un margen de error típico de ±3-4%, siendo una alternativa práctica y accesible sin costo." },
        { question: "¿Cómo puedo reducir el porcentaje de grasa corporal preservando la masa muscular?", answer: "Un déficit calórico moderado combinado con un consumo adecuado de proteínas y entrenamiento de fuerza ayuda a preservar el músculo." }
      ],
      fr: [
        { question: "Comment ce calculateur évalue-t-il le taux de masse grasse ?", answer: "Il applique la méthode anthropométrique de l'US Navy basée sur les mensurations du cou, de la taille, des hanches et de la taille." },
        { question: "Quelle est la différence entre l'IMC et le taux de graisse corporelle ?", answer: "L'IMC compare le poids global à la taille, tandis que la masse grasse distingue précisément les tissus adipeux de la masse musculaire." },
        { question: "Quels sont les taux de graisse recommandés pour les hommes et les femmes ?", answer: "Selon l'ACE, une plage de forme se situe entre 14 et 17 % pour les hommes et entre 21 et 24 % pour les femmes." },
        { question: "La méthode du mètre ruban est-elle fiable ?", answer: "La méthode US Navy offre une excellente estimation pratique avec un écart moyen de seulement 3 à 4 % par rapport aux scanners DEXA." },
        { question: "Comment perdre du gras sans perdre de muscle ?", answer: "Associez un léger déficit calorique à un apport élevé en protéines et à un entraînement contre résistance." }
      ],
      de: [
        { question: "Wie berechnet dieser Rechner den Körperfettanteil?", answer: "Er nutzt die US Navy-Methode basierend auf den Umfangsmessungen von Nacken, Taille, Hüfte und Körpergröße." },
        { question: "Was unterscheidet den Körperfettanteil vom BMI?", answer: "Der BMI berücksichtigt nur das Gesamtgewicht, während der Körperfettanteil gezielt Fettmasse von Muskelmasse unterscheidet." },
        { question: "Welche Körperfettwerte gelten als gesund?", answer: "Nach ACE-Standards liegt ein fitter Bereich bei Männern zwischen 14-17 % und bei Frauen zwischen 21-24 %." },
        { question: "Wie genau ist die Maßband-Methode?", answer: "Die US Navy-Methode bietet eine sehr gute Orientierung mit einer typischen Abweichung von ca. ±3-4 % im Vergleich zu DEXA-Scans." },
        { question: "Wie senkt man den Körperfettanteil effektiv?", answer: "Ein moderates Kaloriendefizit kombiniert mit ausreichender Proteinaufnahme und Krafttraining ist die bewährteste Strategie." }
      ],
      ko: [
        { question: "체지방률 계산기는 어떤 공식을 사용하나요?", answer: "신장, 목, 허리, 엉덩이 둘레 측정값을 활용하는 미국 해군(US Navy) 신체 조성 공식을 적용합니다." },
        { question: "BMI 수치와 체지방률의 차이는 무엇인가요?", answer: "BMI는 전체 체중과 신장만을 비교하지만, 체지방률은 실제 체지방량과 제지방 근육량을 구분하여 측정합니다." },
        { question: "남성과 여성의 권장 체지방률 기준은 무엇인가요?", answer: "ACE 지침 기준 피트니스 권장 범주는 성인 남성 14~17%, 성인 여성 21~24% 수준입니다." },
        { question: "줄자 측정 방식의 정확도는 어느 정도인가요?", answer: "US Navy 방식은 DEXA 스캔 대비 약 ±3~4%의 오차 범위를 갖는 매우 실용적이고 접근성 높은 추정법입니다." },
        { question: "근손실 없이 체지방만 감량하려면 어떻게 해야 하나요?", answer: "완만한 칼로리 적자를 유지하면서 충분한 단백질 섭취와 근력 운동을 병행하는 것이 핵심입니다." }
      ],
      hi: [
        { question: "यह बॉडी फैट कैलकुलेटर किस विधि का उपयोग करता है?", answer: "यह यूएस नेवी (US Navy) विधि का उपयोग करता है, जो गर्दन, कमर, कूल्हे और ऊंचाई के माप पर आधारित है।" },
        { question: "बीएमआई और बॉडी फैट प्रतिशत में क्या अंतर है?", answer: "बीएमआई केवल कुल वजन को मापता है, जबकि बॉडी फैट प्रतिशत शरीर में वसा और मांसपेशियों के अनुपात को अलग करता है।" },
        { question: "पुरुषों और महिलाओं के लिए स्वस्थ वसा प्रतिशत क्या है?", answer: "ACE मानकों के अनुसार पुरुषों के लिए 14-17% और महिलाओं के लिए 21-24% को फिटनेस का अच्छा स्तर माना जाता है।" },
        { question: "क्या टेप माप से वसा मापना सटीक है?", answer: "यूएस नेवी विधि DEXA स्कैन की तुलना में ±3-4% के मामूली अंतर के साथ एक व्यावहारिक और मुफ़्त अनुमान प्रदान करती है।" },
        { question: "मांसपेशियों को बचाते हुए शरीर की वसा कैसे घटाएं?", answer: "हल्का कैलोरी घाटा (Calorie Deficit), पर्याप्त प्रोटीन का सेवन और स्ट्रेंथ ट्रेनिंग मांसपेशियों को बनाए रखने में मदद करती है।" }
      ]
    },
    'macro-calculator': {
      es: [
        { question: "¿Qué son los macronutrientes y por qué calcularlos?", answer: "Los macronutrientes (proteínas, carbohidratos y grasas) proporcionan las calorías que alimentan tu cuerpo y determinan tu composición corporal." },
        { question: "¿Cómo se distribuyen los gramos de proteínas, carbohidratos y grasas?", answer: "Las proteínas y los carbohidratos aportan 4 kcal por gramo, mientras que las grasas aportan 9 kcal por gramo." },
        { question: "¿Cuál es la mejor proporción de macros para perder grasa?", answer: "Una distribución equilibrada para perder grasa suele ser 35% proteínas, 35% carbohidratos y 30% grasas." },
        { question: "¿Es obligatorio contar macros todos los días?", answer: "No es estrictamente obligatorio, pero registrar tus macros durante unas semanas te ayuda a comprender mejor tus hábitos alimenticios." },
        { question: "¿Cómo adapto mis macros a una dieta baja en carbohidratos?", answer: "Puedes ajustar los carbohidratos al 20% de tus calorías totales e incrementar las proteínas y grasas saludables adecuadamente." }
      ],
      fr: [
        { question: "Que sont les macronutriments et pourquoi les calculer ?", answer: "Les macronutriments (protéines, glucides, lipides) fournissent l'énergie et façonnent votre composition corporelle." },
        { question: "Comment convertir les calories en grammes de macronutriments ?", answer: "Les protéines et glucides fournissent 4 kcal/g, tandis que les lipides fournissent 9 kcal/g." },
        { question: "Quelle est la meilleure répartition pour la sèche ?", answer: "Une répartition courante pour la sèche consiste en 35 % de protéines, 35 % de glucides et 30 % de lipides." },
        { question: "Doit-on suivre ses macros quotidiennement ?", answer: "Le suivi des macros est un outil pédagogique puissant pour structurer ses apports selon ses objectifs sportifs." },
        { question: "Peut-on adapter le calculateur pour un régime low-carb ?", answer: "Oui, vous pouvez régler la part des glucides à 20 % et augmenter proportionnellement les protéines et lipides." }
      ],
      de: [
        { question: "Was sind Makronährstoffe?", answer: "Makronährstoffe (Proteine, Kohlenhydrate, Fette) liefern dem Körper Energie und Baustoffe für Muskeln und Gewebe." },
        { question: "Wie werden Makros in Gramm umgerechnet?", answer: "Proteine und Kohlenhydrate enthalten jeweils 4 kcal pro Gramm, während Fett 9 kcal pro Gramm liefert." },
        { question: "Welche Makroverteilung eignet sich zum Fettabbau?", answer: "Eine bewährte Aufteilung für den Fettabbau liegt oft bei 35 % Protein, 35 % Kohlenhydraten und 30 % Fett." },
        { question: "Muss man Makros dauerhaft tracken?", answer: "Ein temporäres Tracking hilft, ein besseres Gefühl für Nährstoffdichten und Portionsgrößen zu entwickeln." },
        { question: "Wie funktioniert die Verteilung bei einer Low-Carb Ernährung?", answer: "Bei Low-Carb wird der Kohlenhydratanteil auf ca. 20 % gesenkt und der Anteil an Protein und gesunden Fetten erhöht." }
      ],
      ko: [
        { question: "영양소(매크로) 계산이란 무엇인가요?", answer: "탄수화물, 단백질, 지방의 일일 섭취 비율을 목표 칼로리에 맞게 분배하여 신체 조성을 관리하는 방법입니다." },
        { question: "각 영양소의 칼로리 환산 기준은 어떻게 되나요?", answer: "단백질과 탄수화물은 1g당 4 kcal, 지방은 1g당 9 kcal의 에너지를 공급합니다." },
        { question: "체지방 감량을 위한 권장 매크로 비율은 무엇인가요?", answer: "일반적인 체지방 감량 목표에는 단백질 35%, 탄수화물 35%, 지방 30%의 분배 비율이 효과적입니다." },
        { question: "매일 매크로를 정확히 기록해야 하나요?", answer: "매일 식단을 기록하면 본인의 균형 잡힌 영양 섭취 습관을 이해하고 유지하는 데 큰 도움이 됩니다." },
        { question: "저탄수화물 식단에는 매크로를 어떻게 적용하나요?", answer: "탄수화물 비율을 20% 수준으로 낮추고 단백질과 건강한 지방 비율을 늘려 설정할 수 있습니다." }
      ],
      hi: [
        { question: "मैक्रोन्यूट्रिएंट्स (Macros) क्या हैं और इन्हें क्यों गिनें?", answer: "मैक्रोन्यूट्रिएंट्स (प्रोटीन, कार्बोहाइड्रेट और वसा) शरीर को ऊर्जा प्रदान करते हैं और आपकी शारीरिक संरचना को निर्धारित करते हैं।" },
        { question: "कैलोरी से ग्राम में रूपांतरण कैसे होता है?", answer: "प्रोटीन और कार्बोहाइड्रेट प्रति ग्राम 4 kcal प्रदान करते हैं, जबकि वसा प्रति ग्राम 9 kcal प्रदान करती है।" },
        { question: "वसा घटाने के लिए सबसे अच्छा मैक्रो अनुपात क्या है?", answer: "वजन और वसा घटाने के लिए 35% प्रोटीन, 35% कार्बोहाइड्रेट और 30% वसा का अनुपात काफी लोकप्रिय है।" },
        { question: "क्या रोज़ाना मैक्रोज़ ट्रैक करना ज़रूरी है?", answer: "रोज़ाना मैक्रोज़ ट्रैक करने से आपको अपनी आहार संबंधी आदतों और पोषण संतुलन का सही अंदाजा मिलता है।" },
        { question: "कम कार्ब (Low-Carb) डाइट के लिए मैक्रोज़ कैसे सेट करें?", answer: "आप कार्बोहाइड्रेट को 20% तक कम कर सकते हैं और प्रोटीन तथा स्वस्थ वसा के अनुपात को बढ़ा सकते हैं।" }
      ]
    }
  };

  return map[slug] && map[slug][lang] ? map[slug][lang] : null;
}

const langs = ['en', 'es', 'fr', 'de', 'ko', 'hi'];
const slugs = Object.keys(seoDatabase);

console.log('Sanitizing seoDatabase...');

for (const slug of slugs) {
  for (const lang of langs) {
    if (!seoDatabase[slug][lang]) continue;
    const entry = seoDatabase[slug][lang];
    
    // Replace unlocalized titles in ko & hi
    if (lang === 'hi' && entry.title && entry.title.includes('Calculator')) {
      entry.title = entry.title.replace(/Calculator/g, 'कैलकुलेटर').replace(/Free/g, 'मुफ़्त').replace(/Tool/g, 'टूल');
    }
    if (lang === 'ko' && entry.title && entry.title.includes('Calculator')) {
      entry.title = entry.title.replace(/Calculator/g, '계산기').replace(/Free/g, '무료').replace(/Tool/g, '도구');
    }

    // Clean English table leaks
    if (entry.tableRows && lang !== 'en') {
      entry.tableRows.forEach(r => {
        if (r.col3 && r.col3.includes('reference range')) {
          if (lang === 'es') r.col3 = r.col3.replace('reference range', 'rango de referencia');
          if (lang === 'fr') r.col3 = r.col3.replace('reference range', 'plage de référence');
          if (lang === 'de') r.col3 = r.col3.replace('reference range', 'Referenzbereich');
          if (lang === 'ko') r.col3 = r.col3.replace('reference range', '참조 범위');
          if (lang === 'hi') r.col3 = r.col3.replace('reference range', 'संदर्भ सीमा');
        }
      });
    }

    // Replace generic FAQs if available in generator map
    const customFaqs = getUniqueFaqs(slug, lang);
    if (customFaqs) {
      entry.faqs = customFaqs;
    } else if (entry.faqs && lang !== 'en') {
      // Ensure no duplicate questions exist within the array
      const seen = new Set();
      entry.faqs = entry.faqs.filter(f => {
        if (seen.has(f.question)) return false;
        seen.add(f.question);
        return true;
      });
    }
  }
}

// Re-serialize modified object back to ToolSEOContent.astro
const newDbStr = 'const seoDatabase: Record<string, Record<string, ToolContent>> = ' + JSON.stringify(seoDatabase, null, 2) + ';';
const newContent = content.replace(/const seoDatabase[^{]*= (\{[\s\S]*?\n\};)/, newDbStr);

fs.writeFileSync('src/components/ToolSEOContent.astro', newContent, 'utf-8');
console.log('Successfully updated ToolSEOContent.astro with sanitized database!');
