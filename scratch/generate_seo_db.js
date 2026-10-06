import fs from 'fs';

// Complete dictionary of calculator content across all 6 languages
const seoDatabase = {};

// Helper to set entries
function addCalc(slug, data) {
  seoDatabase[slug] = data;
}

// 1. BMI CALCULATOR
addCalc('bmi-calculator', {
  en: {
    eyebrow: "WHO Health Standards",
    title: "BMI Calculator – Calculate Body Mass Index",
    intro: "Our free BMI Calculator (Body Mass Index Calculator) is an educational health screening tool built according to World Health Organization (WHO) and CDC standards. Calculate your Body Mass Index (BMI) category and review standard weight ranges based on established health references.",
    formulaTitle: "Standard WHO BMI Calculator Formula",
    formulaDesc: "Metric: BMI = Weight (kg) / [Height (m)]² | Imperial: BMI = [Weight (lbs) / Height (inches)²] × 703",
    formulaCode: "BMI = kg / m²",
    tableTitle: "WHO Adult BMI Scale & Classification Chart",
    tableRows: [
      { col1: "Underweight", col2: "< 18.5 kg/m²", col3: "Underweight reference range" },
      { col1: "Healthy Weight", col2: "18.5 – 24.9 kg/m²", col3: "Healthy-weight reference range" },
      { col1: "Overweight", col2: "25.0 – 29.9 kg/m²", col3: "Overweight reference range (Asian cutoff: 23.0 kg/m²)" },
      { col1: "Obesity Class I", col2: "30.0 – 34.9 kg/m²", col3: "Obesity Class I reference range" },
      { col1: "Obesity Class II", col2: "35.0 – 39.9 kg/m²", col3: "Obesity Class II reference range" },
      { col1: "Obesity Class III", col2: "≥ 40.0 kg/m²", col3: "Obesity Class III reference range" }
    ],
    faqs: [
      { question: "What is the BMI Calculator and how to calculate BMI?", answer: "Body Mass Index (BMI) is a population health screening measure. To calculate BMI, divide weight in kilograms by height in meters squared (kg/m²), or use imperial units [Weight (lbs) / Height (inches)²] × 703. Our free tool applies this standard formula instantly." },
      { question: "How to calculate BMI accurately for men and women?", answer: "BMI calculation is identical for adult men and women, relying on height and weight metrics. Our BMI Calculator evaluates your metric score against WHO reference ranges to determine healthy weight boundaries." },
      { question: "What is the official WHO BMI chart and BMI scale?", answer: "The WHO BMI chart categorizes adults into four main ranges: Underweight (<18.5), Healthy Weight (18.5–24.9), Overweight (25.0–29.9), and Obese (≥30.0). For Asian populations, the overweight cutoff begins at 23.0." },
      { question: "What additional context does Real BMI provide?", answer: "Real BMI presents the standard BMI calculation alongside selected reference metrics (such as BMR and waist-to-height ratio) for educational context. It is an educational reference, not a medical diagnosis." },
      { question: "Is a standard BMI Calculator accurate for muscular athletes?", answer: "A standard BMI Calculator measures total body mass relative to height. Muscular athletes may register a BMI of 25 or higher because BMI does not distinguish muscle mass from fat mass." }
    ]
  },
  es: {
    eyebrow: "Estándares de Salud de la OMS",
    title: "Calculadora de IMC – Calcular el Índice de Masa Corporal",
    intro: "Nuestra calculadora gratuita de IMC es una herramienta educativa basada en las normas de la Organización Mundial de la Salud (OMS) y los CDC. Calcula tu categoría de IMC y revisa los rangos de peso estándar basados en referencias de salud establecidas.",
    formulaTitle: "Fórmula Estándar de IMC de la OMS",
    formulaDesc: "Métrico: IMC = Peso (kg) / [Altura (m)]² | Imperial: IMC = [Peso (lbs) / Altura (pulgadas)²] × 703",
    formulaCode: "IMC = kg / m²",
    tableTitle: "Tabla de Clasificación de IMC para Adultos de la OMS",
    tableRows: [
      { col1: "Bajo Peso", col2: "< 18.5 kg/m²", col3: "Rango de referencia de bajo peso" },
      { col1: "Peso Saludable", col2: "18.5 – 24.9 kg/m²", col3: "Rango de referencia de peso saludable" },
      { col1: "Sobrepeso", col2: "25.0 – 29.9 kg/m²", col3: "Rango de referencia de sobrepeso (Corte asiático: 23.0 kg/m²)" },
      { col1: "Obesidad Clase I", col2: "30.0 – 34.9 kg/m²", col3: "Rango de referencia de obesidad clase I" },
      { col1: "Obesidad Clase II", col2: "35.0 – 39.9 kg/m²", col3: "Rango de referencia de obesidad clase II" },
      { col1: "Obesidad Clase III", col2: "≥ 40.0 kg/m²", col3: "Rango de referencia de obesidad clase III" }
    ],
    faqs: [
      { question: "¿Qué es la Calculadora de IMC y cómo calcular el IMC?", answer: "El Índice de Masa Corporal (IMC) es una medida estándar de evaluación de salud poblacional. Para calcular el IMC, divide el peso en kg por la altura en metros al cuadrado (kg/m²), o usa la fórmula imperial [Peso (lbs) / Altura (pulgadas)²] × 703." },
      { question: "¿Cómo calcular el IMC con precisión para hombres y mujeres?", answer: "El cálculo del IMC es idéntico para hombres y mujeres adultos, basándose en métricas de altura y peso. Nuestra calculadora evalúa tu resultado con los rangos de referencia de la OMS." },
      { question: "¿Cuál es la escala y tabla oficial de IMC de la OMS?", answer: "La tabla de la OMS clasifica a los adultos en cuatro rangos principales: Bajo Peso (<18.5), Peso Saludable (18.5–24.9), Sobrepeso (25.0–29.9) y Obesidad (≥30.0). Para poblaciones asiáticas, el sobrepeso comienza en 23.0." },
      { question: "¿Qué contexto adicional proporciona Real BMI?", answer: "Real BMI presenta el cálculo estándar de IMC junto con métricas complementarias (como BMR y relación cintura-altura) para contexto educativo. Es una referencia de orientación, no un diagnóstico médico." },
      { question: "¿Es precisa la calculadora de IMC para atletas musculosos?", answer: "El IMC mide la masa corporal total en relación con la altura. Los atletas musculosos pueden registrar un IMC de 25 o superior porque el IMC no distingue la masa muscular de la grasa." }
    ]
  },
  fr: {
    eyebrow: "Normes de Santé de l'OMS",
    title: "Calculateur d'IMC – Calculer l'Indice de Masse Corporelle",
    intro: "Notre calculateur gratuit d'IMC est un outil éducatif de dépistage conçu selon les normes de l'Organisation mondiale de la Santé (OMS) et du CDC. Calculez votre catégorie d'IMC et consultez les plages de poids standard.",
    formulaTitle: "Formule Standard d'IMC selon l'OMS",
    formulaDesc: "Métrique: IMC = Poids (kg) / [Taille (m)]² | Impérial: IMC = [Poids (lbs) / Taille (pouces)²] × 703",
    formulaCode: "IMC = kg / m²",
    tableTitle: "Tableau de Classification de l'IMC selon l'OMS",
    tableRows: [
      { col1: "Sous-poids", col2: "< 18.5 kg/m²", col3: "Plage de référence d'insuffisance pondérale" },
      { col1: "Poids Normal", col2: "18.5 – 24.9 kg/m²", col3: "Plage de référence de poids santé" },
      { col1: "Surpoids", col2: "25.0 – 29.9 kg/m²", col3: "Plage de référence de surpoids (Seuil asiatique: 23.0 kg/m²)" },
      { col1: "Obésité Classe I", col2: "30.0 – 34.9 kg/m²", col3: "Plage de référence d'obésité classe I" },
      { col1: "Obésité Classe II", col2: "35.0 – 39.9 kg/m²", col3: "Plage de référence d'obésité classe II" },
      { col1: "Obésité Classe III", col2: "≥ 40.0 kg/m²", col3: "Plage de référence d'obésité classe III" }
    ],
    faqs: [
      { question: "Qu'est-ce que le calculateur d'IMC et comment calculer l'IMC ?", answer: "L'indice de masse corporelle (IMC) est une mesure de dépistage en santé publique. Pour calculer l'IMC, divisez le poids en kg par la taille en mètres au carré (kg/m²), ou utilisez les unités impériales [Poids (lbs) / Taille (pouces)²] × 703." },
      { question: "Comment calculer l'IMC avec précision pour les hommes et les femmes ?", answer: "Le calcul de l'IMC est identique pour les hommes et les femmes adultes. Notre outil évalue votre résultat par rapport aux plages de référence de l'OMS." },
      { question: "Quelle est l'échelle officielle de l'IMC selon l'OMS ?", answer: "Le tableau de l'OMS classe les adultes en quatre plages principales : Sous-poids (<18.5), Poids Normal (18.5–24.9), Surpoids (25.0–29.9) et Obésité (≥30.0)." },
      { question: "Quel contexte supplémentaire apporte Real BMI ?", answer: "Real BMI associe le calcul standard d'IMC à des estimations complémentaires (BMR, rapport taille-taille) pour offrir un contexte éducatif complet sans remplacer un bilan médical." },
      { question: "L'IMC est-il précis pour les athlètes musclés ?", answer: "L'IMC mesure la masse corporelle totale par rapport à la taille. Les athlètes musclés peuvent présenter un IMC supérieur à 25 car l'IMC ne distingue pas la masse musculaire de la graisse." }
    ]
  },
  de: {
    eyebrow: "WHO-Gesundheitsstandards",
    title: "BMI-Rechner – Body-Mass-Index Berechnen",
    intro: "Unser kostenloser BMI-Rechner ist ein lehrreiches Screening-Tool nach den Standards der Weltgesundheitsorganisation (WHO) und der CDC. Berechnen Sie Ihre BMI-Kategorie und überprüfen Sie Standard-Gewichtsbereiche.",
    formulaTitle: "Standard WHO BMI-Formel",
    formulaDesc: "Metrisch: BMI = Gewicht (kg) / [Größe (m)]² | Imperial: BMI = [Gewicht (lbs) / Größe (Zoll)²] × 703",
    formulaCode: "BMI = kg / m²",
    tableTitle: "WHO Erwachsenen BMI Klassifizierungstabelle",
    tableRows: [
      { col1: "Untergewicht", col2: "< 18.5 kg/m²", col3: "Untergewicht Referenzbereich" },
      { col1: "Normalgewicht", col2: "18.5 – 24.9 kg/m²", col3: "Gesundes Gewicht Referenzbereich" },
      { col1: "Übergewicht", col2: "25.0 – 29.9 kg/m²", col3: "Übergewicht Referenzbereich (Asien-Grenzwert: 23.0 kg/m²)" },
      { col1: "Adipositas Grad I", col2: "30.0 – 34.9 kg/m²", col3: "Adipositas Grad I Referenzbereich" },
      { col1: "Adipositas Grad II", col2: "35.0 – 39.9 kg/m²", col3: "Adipositas Grad II Referenzbereich" },
      { col1: "Adipositas Grad III", col2: "≥ 40.0 kg/m²", col3: "Adipositas Grad III Referenzbereich" }
    ],
    faqs: [
      { question: "Was ist der BMI-Rechner und wie berechnet man den BMI?", answer: "Der Body-Mass-Index (BMI) ist ein Maß zur Beurteilung des Körpergewichts. Zur Berechnung teilen Sie das Gewicht in kg durch die Quadratzahl der Größe in Metern (kg/m²)." },
      { question: "Ist die BMI-Berechnung für Männer und Frauen gleich?", answer: "Ja, die grundlegende BMI-Formel ist für erwachsene Männer und Frauen identisch und basiert auf der Relation von Körpergröße und Gewicht." },
      { question: "Wie lauten die offiziellen WHO BMI-Kategorien?", answer: "Die WHO unterscheidet vier Hauptbereiche: Untergewicht (<18,5), Normalgewicht (18,5–24,9), Übergewicht (25,0–29,9) und Adipositas (≥30,0)." },
      { question: "Welchen Mehrwert bietet Real BMI?", answer: "Real BMI kombiniert die Standard-BMI-Formel mit weiteren Referenzwerten (wie Grundumsatz BMR und Taille-Größe-Verhältnis) für ein umfassendes Bild." },
      { question: "Ist der BMI für Sportler und Athleten geeignet?", answer: "Da der BMI nicht zwischen Muskel- und Fettmasse unterscheidet, können sehr muskulöse Menschen einen hohen BMI aufweisen, obwohl ihr Körperfettanteil gering ist." }
    ]
  },
  ko: {
    eyebrow: "WHO 보건 지표 표준",
    title: "BMI 계산기 – 체질량지수 계산 및 건강 범위",
    intro: "세계보건기구(WHO) 및 CDC 지침을 준수하는 무료 체질량지수(BMI) 계산기입니다. 신장과 체중을 입력하여 체질량지수, 체중 범주 및 건강 표준 참조 구간을 확인하세요.",
    formulaTitle: "표준 WHO BMI 계산 공식",
    formulaDesc: "미터법: BMI = 체중 (kg) / [신장 (m)]² | 야드파운드법: BMI = [체중 (lbs) / 신장 (inch)²] × 703",
    formulaCode: "BMI = kg / m²",
    tableTitle: "WHO 성인 BMI 분류 및 참고 표",
    tableRows: [
      { col1: "저체중", col2: "< 18.5 kg/m²", col3: "저체중 참조 구간" },
      { col1: "정상 체중", col2: "18.5 – 24.9 kg/m²", col3: "권장 정상 체중 참조 구간" },
      { col1: "과체중", col2: "25.0 – 29.9 kg/m²", col3: "과체중 참조 구간 (아시아 기준: 23.0 kg/m²)" },
      { col1: "1단계 비만", col2: "30.0 – 34.9 kg/m²", col3: "1단계 비만 참조 구간" },
      { col1: "2단계 비만", col2: "35.0 – 39.9 kg/m²", col3: "2단계 비만 참조 구간" },
      { col1: "3단계 고도비만", col2: "≥ 40.0 kg/m²", col3: "3단계 고도비만 참조 구간" }
    ],
    faqs: [
      { question: "BMI 계산기란 무엇이며 어떻게 산출하나요?", answer: "체질량지수(BMI)는 인구 보건 스크리닝 지표입니다. 체중(kg)을 신장의 제곱(m²)으로 나누어 계산하며, 본 계산기는 해당 수치를 즉시 산출합니다." },
      { question: "남성과 여성의 BMI 계산 기준은 동일한가요?", answer: "성인 남성과 여성의 표준 BMI 계산 방식은 신장과 체중을 동일하게 적용하며, WHO 지침에 따라 범주를 분류합니다." },
      { question: "공식 WHO BMI 범위 및 기준 수치는 무엇인가요?", answer: "WHO 기준 성인 4대 범주는 저체중(<18.5), 정상(18.5–24.9), 과체중(25.0–29.9), 비만(≥30.0)입니다. 아시아인의 경우 23.0부터 과체중 주의 구간입니다." },
      { question: "Real BMI 도구는 어떤 추가 정보를 제공하나요?", answer: "Real BMI는 기본 BMI 수치와 함께 기초대사량(BMR), 허리둘레 비율 등의 보조 지표를 함께 제시하여 더 폭넓은 참고 문맥을 제공합니다." },
      { question: "근육질 운동선수에게도 BMI 계산이 정확한가요?", answer: "BMI는 체중 전체를 신장과 비교하는 지표이므로, 근육량이 많은 운동선수의 경우 지방량이 적어도 과체중 수치가 나올 수 있습니다." }
    ]
  },
  hi: {
    eyebrow: "डब्ल्यूएचओ (WHO) स्वास्थ्य मानक",
    title: "बीएमआई कैलकुलेटर – बॉडी मास इंडेक्स गणना",
    intro: "हमारा मुफ़्त बीएमआई कैलकुलेटर विश्व स्वास्थ्य संगठन (WHO) और सीडीसी (CDC) के मानकों पर आधारित एक शैक्षणिक उपकरण है। अपनी ऊंचाई और वजन के आधार पर अपने बीएमआई और स्वस्थ वजन सीमा की समीक्षा करें।",
    formulaTitle: "मानक डब्ल्यूएचओ बीएमआई सूत्र",
    formulaDesc: "मीट्रिक: बीएमआई = वजन (किग्रा) / [ऊंचाई (मीटर)]² | इंपीरियल: बीएमआई = [वजन (पाउंड) / ऊंचाई (इंच)²] × 703",
    formulaCode: "BMI = kg / m²",
    tableTitle: "डब्ल्यूएचओ वयस्क बीएमआई वर्गीकरण तालिका",
    tableRows: [
      { col1: "कम वजन (Underweight)", col2: "< 18.5 kg/m²", col3: "कम वजन संदर्भ सीमा" },
      { col1: "सामान्य वजन (Healthy)", col2: "18.5 – 24.9 kg/m²", col3: "स्वास्थ्यप्रद सामान्य वजन सीमा" },
      { col1: "अधिक वजन (Overweight)", col2: "25.0 – 29.9 kg/m²", col3: "अधिक वजन संदर्भ सीमा (एशियाई कटऑफ: 23.0 kg/m²)" },
      { col1: "मोटापा श्रेणी I", col2: "30.0 – 34.9 kg/m²", col3: "मोटापा श्रेणी I संदर्भ सीमा" },
      { col1: "मोटापा श्रेणी II", col2: "35.0 – 39.9 kg/m²", col3: "मोटापा श्रेणी II संदर्भ सीमा" },
      { col1: "मोटापा श्रेणी III", col2: "≥ 40.0 kg/m²", col3: "मोटापा श्रेणी III संदर्भ सीमा" }
    ],
    faqs: [
      { question: "बीएमआई कैलकुलेटर क्या है और बीएमआई की गणना कैसे की जाती है?", answer: "बॉडी मास इंडेक्स (BMI) एक प्राथमिक स्वास्थ्य स्क्रीनिंग माप है। इसकी गणना वजन (किग्रा) को ऊंचाई के वर्ग (मीटर²) से विभाजित करके की जाती है।" },
      { question: "पुरुषों और महिलाओं के लिए बीएमआई की गणना कैसे होती है?", answer: "वयस्क पुरुषों और महिलाओं के लिए बीएमआई की मूल गणना समान होती है, जो ऊंचाई और वजन के अनुपात पर आधारित है।" },
      { question: "डब्ल्यूएचओ (WHO) की आधिकारिक बीएमआई तालिका क्या है?", answer: "डब्ल्यूएचओ की तालिका वयस्कों को 4 श्रेणियों में बांटती है: कम वजन (<18.5), सामान्य वजन (18.5–24.9), अधिक वजन (25.0–29.9) और मोटापा (≥30.0)। एशियाई आबादी के लिए 23.0 से अधिक वजन की सीमा शुरू होती है।" },
      { question: "Real BMI क्या अतिरिक्त संदर्भ प्रदान करता है?", answer: "Real BMI मानक बीएमआई के साथ-साथ बीएमआर (BMR) और कमर की माप जैसे संकेतकों को मिलाकर अतिरिक्त संदर्भात्मक जानकारी प्रस्तुत करता है।" },
      { question: "क्या एथलीटों के लिए बीएमआई कैलकुलेटर सटीक है?", answer: "बीएमआई ऊंचाई के सापेक्ष कुल शरीर द्रव्यमान को मापता है। अत्यधिक मांसपेशियों वाले एथलीटों का बीएमआई 25 या अधिक आ सकता है क्योंकि बीएमआई वसा और मांसपेशियों में अंतर नहीं करता।" }
    ]
  }
});

console.log('Added bmi-calculator entry');
