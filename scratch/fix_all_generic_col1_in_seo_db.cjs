const fs = require('fs');
const path = require('path');

const seoDbPath = path.join(__dirname, '../src/data/seoDatabase.ts');
let content = fs.readFileSync(seoDbPath, 'utf8');

// Load temp object to manipulate cleanly
const seoDbStart = content.indexOf('export const seoDatabase');
let databaseContent = content.substring(seoDbStart);
databaseContent = databaseContent.replace(/export const seoDatabase[\s\S]*?=/g, 'const seoDatabaseData =');

const tempScript = `
${databaseContent}
module.exports = { seoDatabaseData };
`;
fs.writeFileSync(path.join(__dirname, 'temp_seoDatabase.cjs'), tempScript);
const { seoDatabaseData } = require('./temp_seoDatabase.cjs');

const mappings = {
  'bmi-calculator-for-indians': {
    de: ["Untergewicht (< 18.5)", "Gesundes Normalgewicht (18.5 – 22.9)", "Übergewicht / Risiko (23.0 – 24.9)", "Adipositas Klasse I (25.0 – 29.9)", "Adipositas Klasse II (≥ 30.0)"],
    ko: ["저체중 (< 18.5 kg/m²)", "정상 체중 (18.5 – 22.9 kg/m²)", "과체중 / 위험군 (23.0 – 24.9 kg/m²)", "1단계 비만 (25.0 – 29.9 kg/m²)", "2단계 비만 (≥ 30.0 kg/m²)"],
    fr: ["Insuffisance Pondérale (< 18.5 kg/m²)", "Poids Normal Optimal (18.5 – 22.9 kg/m²)", "Surpoids / Zone de Risque (23.0 – 24.9 kg/m²)", "Obésité Classe I (25.0 – 29.9 kg/m²)", "Obésité Classe II (≥ 30.0 kg/m²)"],
    es: ["Bajo Peso (< 18.5 kg/m²)", "Peso Normal Óptimo (18.5 – 22.9 kg/m²)", "Sobrepeso / Zona de Riesgo (23.0 – 24.9 kg/m²)", "Obesidad Clase I (25.0 – 29.9 kg/m²)", "Obesidad Clase II (≥ 30.0 kg/m²)"],
    hi: ["कम वजन (< 18.5 kg/m²)", "सामान्य वजन (18.5 – 22.9 kg/m²)", "अधिक वजन (जोखिम सीमा 23.0 – 24.9 kg/m²)", "मोटापा श्रेणी I (25.0 – 29.9 kg/m²)", "मोटापा श्रेणी II (≥ 30.0 kg/m²)"]
  },
  'water-intake-calculator': {
    de: ["Bewegungsarmer Erwachsener (50 kg)", "Bewegungsarmer Erwachsener (70 kg)", "Aktiver Sportler (70 kg)", "Intensiver Sportler (90 kg)"],
    ko: ["비활동 성인 (50 kg)", "비활동 성인 (70 kg)", "활동적인 운동선수 (70 kg)", "고강도 운동선수 (90 kg)"],
    fr: ["Adulte Sédentaire (50 kg)", "Adulte Sédentaire (70 kg)", "Athlète Actif (70 kg)", "Athlète Entraînement Intensif (90 kg)"],
    es: ["Adulto Sedentario (50 kg)", "Adulto Sedentario (70 kg)", "Atleta Activo (70 kg)", "Atleta Entrenamiento Intenso (90 kg)"],
    hi: ["गतिहीन 50 किग्रा वयस्क", "गतिहीन 70 किग्रा वयस्क", "सक्रिय 70 किग्रा एथलीट", "कठिन व्यायाम 90 किग्रा एथलीट"]
  },
  'macro-calculator': {
    de: ["Kohlenhydrate (4 kcal/g)", "Proteine / Eiweiß (4 kcal/g)", "Fette (9 kcal/g)"],
    ko: ["탄수화물 (4 kcal/g)", "단백질 (4 kcal/g)", "지방 (9 kcal/g)"],
    fr: ["Glucides (4 kcal/g)", "Protéines (4 kcal/g)", "Lipides (9 kcal/g)"],
    es: ["Carbohidratos (4 kcal/g)", "Proteínas (4 kcal/g)", "Grasas (9 kcal/g)"],
    hi: ["कार्बोहाइड्रेट (4 kcal/g)", "प्रोटीन (4 kcal/g)", "वसा (9 kcal/g)"]
  },
  'waist-to-hip-ratio-calculator': {
    de: ["Niedrige Risiko-Kategorie", "Moderate Risiko-Kategorie", "Höhere Risiko-Kategorie"],
    ko: ["낮은 위험군", "중간 위험군", "높은 위험군"],
    fr: ["Catégorie Risque Faible", "Catégorie Risque Modéré", "Catégorie Risque Élevé"],
    es: ["Categoría de Riesgo Bajo", "Categoría de Riesgo Moderado", "Categoría de Riesgo Alto"],
    hi: ["निम्न जोखिम श्रेणी", "मध्यम जोखिम श्रेणी", "उच्च जोखिम श्रेणी"]
  },
  'body-surface-area-calculator': {
    de: ["Säuglinge (0–12 Monate)", "Kinder (1–12 Jahre)", "Erwachsene Frauen (Durchschnitt)", "Erwachsene Männer (Durchschnitt)"],
    ko: ["영아 (0–12개월)", "소아/어린이 (1–12세)", "성인 여성 평균", "성인 남성 평균"],
    fr: ["Nourrissons (0–12 mois)", "Enfants (1–12 ans)", "Moyenne Femmes Adultes", "Moyenne Hommes Adultes"],
    es: ["Lactantes (0–12 meses)", "Niños (1–12 años)", "Promedio Mujeres Adultas", "Promedio Hombres Adultos"],
    hi: ["शिशु (0–12 महीने)", "बच्चे (1–12 वर्ष)", "वयस्क महिला औसत", "वयस्क पुरुष औसत"]
  },
  'heart-rate-zone-calculator': {
    de: ["Zone 1 (50% - 60% HRR)", "Zone 2 (60% - 70% HRR)", "Zone 3 (70% - 80% HRR)", "Zone 4 (80% - 90% HRR)", "Zone 5 (90% - 100% HRR)"],
    ko: ["1구간 (50% - 60% HRR)", "2구간 (60% - 70% HRR)", "3구간 (70% - 80% HRR)", "4구간 (80% - 90% HRR)", "5구간 (90% - 100% HRR)"],
    fr: ["Zone 1 (50% - 60% HRR)", "Zone 2 (60% - 70% HRR)", "Zone 3 (70% - 80% HRR)", "Zone 4 (80% - 90% HRR)", "Zone 5 (90% - 100% HRR)"],
    es: ["Zona 1 (50% - 60% HRR)", "Zona 2 (60% - 70% HRR)", "Zona 3 (70% - 80% HRR)", "Zona 4 (80% - 90% HRR)", "Zona 5 (90% - 100% HRR)"],
    hi: ["ज़ोन 1 (50% - 60% HRR)", "ज़ोन 2 (50% - 60% HRR)", "ज़ोन 3 (70% - 80% HRR)", "ज़ोन 4 (80% - 90% HRR)", "ज़ोन 5 (90% - 100% HRR)"]
  },
  'karvonen-heart-rate-calculator': {
    de: ["Zone 1: Aktive Erholung", "Zone 2: Ausdauer & Fettverbrennung", "Zone 3: Aerobe Fitness", "Zone 4: Anaerobe Schwelle", "Zone 5: VO2 Max Spitzenbereich"],
    ko: ["1구간: 능동적 회복", "2구간: 지구력 및 지방 연소", "3구간: 유산소 피트니스", "4구간: 무산소 역치", "5구간: 최대 산소 섭취량 (VO2 Max)"],
    fr: ["Zone 1 : Récupération Active", "Zone 2 : Endurance & Perte de Gras", "Zone 3 : Forme Aérobie", "Zone 4 : Seuil Anaérobie", "Zone 5 : Pic VO2 Max"],
    es: ["Zona 1: Recuperación Activa", "Zona 2: Resistencia y Quema de Grasa", "Zona 3: Aptitud Aeróbica", "Zona 4: Umbral Anaeróbico", "Zona 5: Pico VO2 Máx"],
    hi: ["ज़ोन 1: सक्रिय रिकवरी", "ज़ोन 2: धीरज एवं वसा हानि", "ज़ोन 3: एरोबिक फिटनेस", "ज़ोन 4: एनारोबिक सीमा", "ज़ोन 5: VO2 मैक्स शिखर"]
  },
  '1rm-calculator': {
    de: ["100% 1RM Maximalkraft", "95% 1RM Schwere Last", "90% 1RM Kraftaufbau", "85% 1RM Muskelaufbau", "80% 1RM Hypertrophie", "75% 1RM Kraftausdauer"],
    ko: ["100% 1RM 최대 기준", "95% 1RM 고부하", "90% 1RM 근력 향상", "85% 1RM 근비대", "80% 1RM 하이퍼트로피", "75% 1RM 근지구력"],
    fr: ["100% 1RM Force Maximale", "90% 1RM Charge Lourde", "85% 1RM Développement Force", "80% 1RM Hypertrophie", "75% 1RM Endurance Musculaire"],
    es: ["100% 1RM Fuerza Máxima", "90% 1RM Carga Pesada", "85% 1RM Desarrollo Fuerza", "80% 1RM Hipertrofia", "75% 1RM Resistencia Muscular"],
    hi: ["100% 1RM अधिकतम शक्ति", "95% 1RM भारी भार", "90% 1RM शक्ति विकास", "85% 1RM मांसपेशी वृद्धि", "80% 1RM हाइपरट्रॉफी", "75% 1RM मांसपेशी धीरज"]
  },
  'one-rep-max-calculator': {
    de: ["100% 1RM Maximalkraft", "90% 1RM Schwere Last", "85% 1RM Kraftaufbau", "75% 1RM Hypertrophie", "65% 1RM Kraftausdauer"],
    ko: ["100% 1RM 최대 기준", "90% 1RM 고부하", "85% 1RM 근력 향상", "75% 1RM 근비대", "65% 1RM 근지구력"],
    fr: ["100% 1RM Force Maximale", "90% 1RM Charge Lourde", "85% 1RM Développement Force", "75% 1RM Hypertrophie", "65% 1RM Endurance Musculaire"],
    es: ["100% 1RM Fuerza Máxima", "90% 1RM Carga Pesada", "85% 1RM Desarrollo Fuerza", "75% 1RM Hipertrofia", "65% 1RM Resistencia Muscular"],
    hi: ["100% 1RM अधिकतम शक्ति", "90% 1RM भारी भार", "85% 1RM शक्ति विकास", "75% 1RM मांसपेशी वृद्धि", "65% 1RM मांसपेशी धीरज"]
  },
  'pregnancy-weight-gain-calculator': {
    de: ["Untergewicht vor Schwangerschaft (< 18.5)", "Normalgewicht (18.5–24.9)", "Übergewicht (25.0–29.9)"],
    ko: ["임신 전 저체중 (< 18.5)", "정상 BMI (18.5–24.9)", "과체중 (25.0–29.9)"],
    fr: ["Insuffisance pondérale avant grossesse (< 18.5)", "IMC Normal (18.5–24.9)", "Surpoids (25.0–29.9)"],
    es: ["Bajo peso pregestacional (< 18.5)", "IMC Normal (18.5–24.9)", "Sobrepeso (25.0–29.9)"],
    hi: ["गर्भावस्था पूर्व कम वजन (< 18.5)", "सामान्य बीएमआई (18.5–24.9)", "अधिक वजन (25.0–29.9)"]
  }
};

let updateCount = 0;

for (const [toolSlug, langMap] of Object.entries(mappings)) {
  if (seoDatabaseData[toolSlug]) {
    for (const [lang, col1Array] of Object.entries(langMap)) {
      if (seoDatabaseData[toolSlug][lang] && seoDatabaseData[toolSlug][lang].tableRows) {
        const rows = seoDatabaseData[toolSlug][lang].tableRows;
        col1Array.forEach((newCol1, idx) => {
          if (rows[idx]) {
            rows[idx].col1 = newCol1;
            updateCount++;
          }
        });
      }
    }
  }
}

console.log(`Updated ${updateCount} col1 values in seoDatabaseData object`);

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
