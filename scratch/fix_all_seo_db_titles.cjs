const fs = require('fs');
const path = require('path');

const seoDbPath = path.join(__dirname, '../src/data/seoDatabase.ts');
let content = fs.readFileSync(seoDbPath, 'utf8');

const seoDbStart = content.indexOf('export const seoDatabase');
let databaseContent = content.substring(seoDbStart);
databaseContent = databaseContent.replace(/export const seoDatabase[\s\S]*?=/g, 'const seoDatabaseData =');

const tempScript = `
${databaseContent}
module.exports = { seoDatabaseData };
`;
fs.writeFileSync(path.join(__dirname, 'temp_seoDatabase.cjs'), tempScript);
const { seoDatabaseData } = require('./temp_seoDatabase.cjs');

const titleUpdates = {
  'maintenance-calorie-calculator': {
    de: "Rechner für Erhaltungskalorien – Täglichen Kalorienbedarf berechnen – Rechner & Leitfaden",
    fr: "Calculateur de Calories de Maintien – Obtenir son Besoin Calorique – Outil de Référence",
    es: "Calculadora de Calorías de Mantenimiento – Calcular Necesidades Diarias – Guía y Calculadora",
    ko: "유지 칼로리 계산기 – 일일 에너지 소모량 측정을 위한 참조 도구",
    hi: "रखरखाव कैलोरी कैलकुलेटर – दैनिक कैलोरी आवश्यकता की गणना करें"
  },
  'protein-intake-calculator': {
    de: "Proteinrechner – Täglicher Eiweißbedarf & Referenzwerte – Rechner & Leitfaden",
    fr: "Calculateur de Protéines – Apport Protéique Quotidien – Outil de Référence",
    es: "Calculadora de Proteínas – Requerimiento Diario de Proteína – Guía y Calculadora",
    ko: "단백질 섭취량 계산기 – 일일 단백질 권장량 측정 도구",
    hi: "प्रोटीन सेवन कैलकुलेटर – दैनिक प्रोटीन आवश्यकता की गणना"
  },
  'water-intake-calculator': {
    de: "Wasserbedarfsrechner – Tägliches Hydratationsziel berechnen – Rechner & Leitfaden",
    fr: "Calculateur d'Apport en Eau – Objectif d'Hydratation Quotidien – Outil de Référence",
    es: "Calculadora de Consumo de Agua – Meta Diaria de Hidratación – Guía y Calculadora",
    ko: "수분 섭취량 계산기 – 일일 목표 수분 섭취량 측정 도구",
    hi: "पानी के सेवन का कैलकुलेटर – दैनिक जल आवश्यकता की गणना"
  },
  'macro-calculator': {
    de: "Makronährstoff-Rechner – Tägliche Makroverteilung berechnen – Rechner & Leitfaden",
    fr: "Calculateur de Macronutriments – Répartition des Macros – Outil de Référence",
    es: "Calculadora de Macronutrientes – Distribución Diaria de Macros – Guía y Calculadora",
    ko: "매크로 영양소 계산기 – 일일 탄단지 영양소 비율 계산",
    hi: "मैक्रो पोषक तत्व कैलकुलेटर – दैनिक मैक्रो अनुपात की गणना"
  },
  'waist-to-hip-ratio-calculator': {
    de: "Taille-Hüft-Verhältnis Rechner – WHR-Wert & Referenztabelle – Rechner & Leitfaden",
    fr: "Calculateur Ratio Taille-Hanche – Indice WHR et Références – Outil de Référence",
    es: "Calculadora de Relación Cintura-Cadera – Índice WHR de Salud – Guía y Calculadora",
    ko: "허리 엉덩이 비율 계산기 – WHR 수치 및 건강 참조 도구",
    hi: "कमर से कूल्हे के अनुपात का कैलकुलेटर – WHR संदर्भ टूल"
  },
  'body-surface-area-calculator': {
    de: "Körperoberflächen-Rechner – KOF / BSA Formeln nach Mosteller – Rechner & Leitfaden",
    fr: "Calculateur de Surface Corporelle – Formules BSA Mosteller & Du Bois – Outil de Référence",
    es: "Calculadora de Superficie Corporal – Ecuaciones BSA – Guía y Calculadora",
    ko: "체표면적(BSA) 계산기 – Mosteller 및 Du Bois 계산 공식",
    hi: "बॉडी सरफेस एरिया (BSA) कैलकुलेटर – मोस्टेलर सूत्र"
  },
  'heart-rate-zone-calculator': {
    de: "Herzfrequenzzonen-Rechner – Zielherzfrequenz & Karvonen Zonen – Rechner & Leitfaden",
    fr: "Calculateur de Zones de Fréquence Cardiaque – Formule Karvonen – Outil de Référence",
    es: "Calculadora de Zonas de Frecuencia Cardíaca – Fórmula Karvonen – Guía y Calculadora",
    ko: "심박수 구간 계산기 – Karvonen 목표 심박수 측정",
    hi: "हार्ट रेट ज़ोन कैलकुलेटर – लक्ष्य हृदय गति संदर्भ"
  },
  'karvonen-heart-rate-calculator': {
    de: "Karvonen Herzfrequenz-Rechner – Herzfrequenzreserve HRR Zonen – Rechner & Leitfaden",
    fr: "Calculateur Karvonen – Réserve Cardiaque HRR & Zones de Forme – Outil de Référence",
    es: "Calculadora Karvonen – Reserva de Frecuencia Cardíaca HRR – Guía y Calculadora",
    ko: "Karvonen 심박수 계산기 – 심박 예비능(HRR) 측정",
    hi: "कार्वोनेन हार्ट रेट कैलकुलेटर – हार्ट रेट रिजर्व (HRR) ज़ोन"
  },
  'pregnancy-weight-gain-calculator': {
    de: "Schwangerschafts-Gewichtszunahme Rechner – Trimester-Tracking – Rechner & Leitfaden",
    fr: "Calculateur de Prise de Poids pendant la Grossesse – Suivi Trimestre – Outil de Référence",
    es: "Calculadora de Aumento de Peso en el Embarazo – Seguimiento Trimestral – Guía y Calculadora",
    ko: "임신 중 체중 증가 계산기 – 분기별 체중 증가 권장 범위",
    hi: "गर्भावस्था में वजन वृद्धि का कैलकुलेटर – तिमाही ट्रैकिंग"
  },
  'asian-bmi-calculator': {
    de: "Asiatischer BMI Rechner – WHO Asien-Referenzstandards – Rechner & Leitfaden",
    fr: "Calculateur d'IMC Asiatique – Normes de Référence OMS Asie – Outil de Référence",
    es: "Calculadora de IMC Asiático – Estándares de Referencia OMS Asia – Guía y Calculadora",
    ko: "아시아인 전용 BMI 계산기 – WHO 아시아 공중보건 참조 기준",
    hi: "एशियाई बीएमआई कैलकुलेटर – डब्ल्यूएचओ एशियाई संदर्भ कटऑफ"
  }
};

let count = 0;
for (const [slug, langMap] of Object.entries(titleUpdates)) {
  if (seoDatabaseData[slug]) {
    for (const [lang, newTitle] of Object.entries(langMap)) {
      if (seoDatabaseData[slug][lang]) {
        seoDatabaseData[slug][lang].title = newTitle;
        count++;
      }
    }
  }
}

// Clean up remaining English in parens inside seoDatabase
for (const [slug, toolLangs] of Object.entries(seoDatabaseData)) {
  for (const [lang, langData] of Object.entries(toolLangs)) {
    if (lang === 'en') continue;
    if (langData.tableRows) {
      langData.tableRows.forEach(row => {
        row.col1 = row.col1.replace(/\s*\(Healthy Weight\)/g, '')
                           .replace(/\s*\(Overweight\)/g, '')
                           .replace(/\s*\(Underweight\)/g, '')
                           .replace(/\s*\(Obese Class I\)/g, '')
                           .replace(/\s*\(Severe Obesity\)/g, '')
                           .replace(/\s*\(Action Threshold\)/g, '');
        row.col3 = row.col3.replace(/\s*\(Healthy Weight\)/g, '')
                           .replace(/\s*\(Overweight\)/g, '')
                           .replace(/\s*\(Underweight\)/g, '');
      });
    }
  }
}

console.log(`Updated ${count} tool titles in seoDatabaseData`);

const newDbCode = `import { type Locale } from '../utils/calculators';

export interface ToolContent {
  title: string;
  eyebrow: string;
  intro: string;
  formulaTitle: string;
  formulaDesc: string;
  formulaCode?: string;
  tableTitle?: string;
  tableRows?: { col1: string; col2: string; col3: string }[];
  faqs: { question: string; answer: string }[];
}

export const tableUi: Record<string, { cat: string; metric: string; guidance: string; faq: string; refs: string }> = {
  en: {
    cat: 'Category / Level',
    metric: 'Reference Range / Metric',
    guidance: 'Reference Context',
    faq: 'Frequently Asked Questions',
    refs: 'References & Published Research'
  },
  es: {
    cat: 'Categoría / Nivel',
    metric: 'Referencia / Métrica',
    guidance: 'Contexto de Referencia',
    faq: 'Preguntas Frecuentes y Respuestas',
    refs: 'Referencias e Investigaciones Publicadas'
  },
  fr: {
    cat: 'Catégorie / Niveau',
    metric: 'Référence / Métrique',
    guidance: 'Contexte de Référence',
    faq: 'Foire Aux Questions et Réponses',
    refs: 'Références et Recherches Publiées'
  },
  de: {
    cat: 'Kategorie / Stufe',
    metric: 'Referenz / Metrik',
    guidance: 'Referenzkontext',
    faq: 'Häufig gestellte Fragen',
    refs: 'Referenzen & Veröffentlichte Forschung'
  },
  ko: {
    cat: '범주 / 단계',
    metric: '참조 / 메트릭',
    guidance: '참조 컨텍스트',
    faq: '자주 묻는 질문 및 답변',
    refs: '참고 문헌 및 출판 연구'
  },
  hi: {
    cat: 'श्रेणी / स्तर',
    metric: 'संदर्भ / मीट्रिक',
    guidance: 'संदर्भ विवरण',
    faq: 'अक्सर पूछे जाने वाले प्रश्न और उत्तर',
    refs: 'प्रकाशित शोध एवं संदर्भ'
  }
};

export const seoDatabase: Record<string, Record<string, ToolContent>> = ${JSON.stringify(seoDatabaseData, null, 2)};
`;

fs.writeFileSync(seoDbPath, newDbCode, 'utf8');
console.log('Successfully saved updated seoDatabase.ts file!');
