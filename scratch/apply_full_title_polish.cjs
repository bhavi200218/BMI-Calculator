const fs = require('fs');

// 1. Update src/data/seoDatabase.ts
let seo = fs.readFileSync('src/data/seoDatabase.ts', 'utf8');

const replacements = [
  // bmi-calculator-for-indians
  {
    from: `"title": "Calculateur d'IMC pour les Indiens – Tableau Poids-Taille Santé – Outil de Référence",`,
    to: `"title": "Calculateur d'IMC pour Adultes Indiens – Tableau Poids-Taille Santé (Normes ICMR & OMS) – Outil de Référence",`
  },
  {
    from: `"title": "BMI-Rechner für Inder – ICMR & WHO Indien-Standard-Tabelle – Leitfaden & Rechner",`,
    to: `"title": "BMI-Rechner für indische Erwachsene – ICMR & WHO Referenztabelle – Rechner & Leitfaden",`
  },
  {
    from: `"title": "Calculadora de IMC para la Población India – Tabla de Peso y Altura – Guía y Calculadora",`,
    to: `"title": "Calculadora de IMC para Adultos Indios – Tabla de Peso y Altura (ICMR y OMS) – Guía y Calculadora",`
  },

  // bmi-chart
  {
    from: `"title": "BMI Chart for Adults – Height & Weight Lookup Table (kg & cm) – Guía y Calculadora",`,
    to: `"title": "Tabla de IMC para Adultos – Tabla de Consulta de Altura y Peso (kg y cm) – Guía y Calculadora",`
  },
  {
    from: `"title": "BMI Chart for Adults – Height & Weight Lookup Table (kg & cm) – Outil de Référence",`,
    to: `"title": "Tableau de l'IMC pour Adultes – Table de Correspondance Poids et Taille (kg & cm) – Outil de Référence",`
  },
  {
    from: `"title": "BMI Chart for Adults – Height & Weight Lookup Table (kg & cm) – Rechner & Leitfaden",`,
    to: `"title": "BMI-Tabelle für Erwachsene – Größen- & Gewichtstabelle (kg & cm) – Rechner & Leitfaden",`
  },
  {
    from: `"title": "BMI Chart for Adults – Height & Weight Lookup Table (kg & cm) – 참조 계산기",`,
    to: `"title": "성인 BMI 표준 체중표 – 신장 및 체중 비교 차트 (kg 및 cm) – 참조 계산기",`
  },

  // healthy-weight-by-height
  {
    from: `"title": "Healthy Weight by Height Chart – Ideal Weight Range for Men & Women – Guía y Calculadora",`,
    to: `"title": "Tabla de Peso Saludable por Altura – Rango de Peso Ideal para Hombres y Mujeres – Guía y Calculadora",`
  },
  {
    from: `"title": "Healthy Weight by Height Chart – Ideal Weight Range for Men & Women – Outil de Référence",`,
    to: `"title": "Tableau du Poids Santé selon la Taille – Plage de Poids Idéal Hommes et Femmes – Outil de Référence",`
  },
  {
    from: `"title": "Healthy Weight by Height Chart – Ideal Weight Range for Men & Women – Rechner & Leitfaden",`,
    to: `"title": "Gesundes Gewicht nach Körpergröße – Idealer Gewichtsbereich für Männer & Frauen – Rechner & Leitfaden",`
  },
  {
    from: `"title": "Healthy Weight by Height Chart – Ideal Weight Range for Men & Women – 참조 계산기",`,
    to: `"title": "키별 건강 체중 차트 – 남성 및 여성 이상적인 체중 범위 – 참조 계산기",`
  },
  {
    from: `"title": "ऊंचाई के अनुसार स्वस्थ वजन चार्ट (Healthy Weight by Height)",`,
    to: `"title": "ऊंचाई के अनुसार स्वस्थ वजन चार्ट – पुरुषों और महिलाओं के लिए आदर्श वजन सीमा",`
  },

  // lean-body-mass-calculator
  {
    from: `"title": "Lean Body Mass Calculator & LBM Reference Tool – Guía y Calculadora",`,
    to: `"title": "Calculadora de Masa Magra – Índice de Masa Libre de Grasa LBM – Guía y Calculadora",`
  },
  {
    from: `"title": "Lean Body Mass Calculator & LBM Reference Tool – Outil de Référence",`,
    to: `"title": "Calculateur de Masse Maigre – Estimation de l'Indice LBM – Outil de Référence",`
  },
  {
    from: `"title": "Lean Body Mass Calculator & LBM Reference Tool – Rechner & Leitfaden",`,
    to: `"title": "Magerer-Körpermasse-Rechner – LBM-Index & Referenz – Rechner & Leitfaden",`
  },

  // ideal-weight-calculator
  {
    from: `"title": "Estimate Ideal Body Weight (IBW) using commonly cited equations – Guía y Calculadora",`,
    to: `"title": "Calculadora de Peso Corporal Ideal – Fórmulas IBW Devine y Robinson – Guía y Calculadora",`
  },
  {
    from: `"title": "Estimate Ideal Body Weight (IBW) using commonly cited equations – Outil de Référence",`,
    to: `"title": "Calculateur de Poids Idéal – Équations IBW Devine et Robinson – Outil de Référence",`
  },
  {
    from: `"title": "Estimate Ideal Body Weight (IBW) using commonly cited equations – Rechner & Leitfaden",`,
    to: `"title": "Idealgewicht-Rechner – IBW-Formeln nach Devine & Robinson – Rechner & Leitfaden",`
  },
  {
    from: `"title": "Estimate Ideal Body Weight (IBW) using commonly cited equations – 참조 계산기",`,
    to: `"title": "이상적인 체중 계산기 – Devine 및 Robinson 공식 기반 IBW 분석 – 참조 계산기",`
  },

  // 1rm-calculator
  {
    from: `"title": "1RM Calculator – Free One Rep Max Calculator (Bench, Squat, Deadlift) – Guía y Calculadora",`,
    to: `"title": "Calculadora de 1RM – Calculadora de Repetición Máxima (Press Banca, Sentadilla, Peso Muerto) – Guía y Calculadora",`
  },
  {
    from: `"title": "1RM Calculator – Free One Rep Max Calculator (Bench, Squat, Deadlift) – Outil de Référence",`,
    to: `"title": "Calculateur de 1RM – Calcul de Répétition Maximale (Développé Couché, Squat, Soulevé) – Outil de Référence",`
  },
  {
    from: `"title": "1RM Calculator – Free One Rep Max Calculator (Bench, Squat, Deadlift) – Rechner & Leitfaden",`,
    to: `"title": "1RM-Rechner – Maximalgewicht-Rechner für 1 Wiederholung (Bankdrücken, Kniebeugen, Kreuzheben) – Rechner & Leitfaden",`
  },
  {
    from: `"title": "1RM 계산기 – 무료 One Rep Max 계산기 (Bench, Squat, Deadlift) – 참조 계산기",`,
    to: `"title": "1RM 계산기 – 1회 최대 반복 중량 계산기 (벤치프레스, 스쿼트, 데드리프트) – 참조 계산기",`
  },
  {
    from: `"title": "1RM कैलकुलेटर (1RM कैलकुलेटर - One Rep Max)",`,
    to: `"title": "1RM कैलकुलेटर – एक पुनरावृत्ति अधिकतम वजन कैलकुलेटर (बेंच प्रेस, स्क्वैट, डेडलिफ्ट)",`
  },

  // one-rep-max-calculator
  {
    from: `"title": "Epley 1RM Bench Press Calculator & 1 Rep Max Reference Tool – Guía y Calculadora",`,
    to: `"title": "Calculadora 1RM según Epley – Fórmula de Repetición Máxima para Press Banca – Guía y Calculadora",`
  },
  {
    from: `"title": "Epley 1RM Bench Press Calculator & 1 Rep Max Reference Tool – Outil de Référence",`,
    to: `"title": "Calculateur de 1RM Formule d'Epley – Répétition Maximale au Développé Couché – Outil de Référence",`
  },
  {
    from: `"title": "Epley 1RM Bench Press Calculator & 1 Rep Max Reference Tool – Rechner & Leitfaden",`,
    to: `"title": "Epley 1RM Bankdrücken-Rechner – Formel für maximale Wiederholung – Rechner & Leitfaden",`
  }
];

let applied = 0;
replacements.forEach(r => {
  if (seo.includes(r.from)) {
    seo = seo.replace(r.from, r.to);
    applied++;
  } else {
    console.log('WARNING: Could not find target in seoDatabase:', r.from);
  }
});

fs.writeFileSync('src/data/seoDatabase.ts', seo, 'utf8');
console.log(`Applied ${applied} title polishes to src/data/seoDatabase.ts`);

// 2. Update src/utils/calculators.ts for calculator names and titles
let calcCode = fs.readFileSync('src/utils/calculators.ts', 'utf8');

calcCode = calcCode.replace(
  "de: 'BMI Rechner für Inder',",
  "de: 'BMI-Rechner für indische Erwachsene',"
);
calcCode = calcCode.replace(
  "fr: 'Calculateur d\\'IMC pour les Indiens',",
  "fr: 'Calculateur d\\'IMC pour Adultes Indiens',"
);
calcCode = calcCode.replace(
  "es: 'Calculadora IMC para Indios',",
  "es: 'Calculadora de IMC para Adultos Indios',"
);

calcCode = calcCode.replace(
  "de: 'BMI Rechner für Inder – ICMR & WHO Indien Standards',",
  "de: 'BMI-Rechner für indische Erwachsene – ICMR & WHO Referenzstandards',"
);
calcCode = calcCode.replace(
  "fr: 'Calculateur d\\'IMC pour les Indiens – Normes ICMR et OMS',",
  "fr: 'Calculateur d\\'IMC pour Adultes Indiens – Normes ICMR et OMS',"
);
calcCode = calcCode.replace(
  "es: 'Calculadora IMC para Indios – Estándares ICMR y OMS para India',",
  "es: 'Calculadora de IMC para Adultos Indios – Estándares ICMR y OMS',"
);

fs.writeFileSync('src/utils/calculators.ts', calcCode, 'utf8');
console.log('Updated src/utils/calculators.ts with polished names & titles.');
