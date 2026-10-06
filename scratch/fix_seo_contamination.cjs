const fs = require('fs');

const filePath = 'src/data/seoDatabase.ts';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Fix line 2307: nach Körpergröße in EN intro
content = content.replace(
  'Calculate your ideal weight nach Körpergröße in kilograms (kg)',
  'Calculate your ideal weight based on height in kilograms (kg)'
);

// 2. Fix German Title for bmi-calculator-for-indians
content = content.replace(
  '"title": "BMI Calculator for Indians – Healthy Height Weight Chart for Indian Adults – Rechner & Leitfaden"',
  '"title": "BMI-Rechner für Inder – ICMR & WHO Indien-Standard-Tabelle – Leitfaden & Rechner"'
);

// 3. Fix Korean Title for bmi-calculator-for-indians
content = content.replace(
  '"title": "BMI 계산기 for Indians – Healthy Height Weight Chart for Indian Adults – 참조 계산기"',
  '"title": "인도인을 위한 BMI 계산기 – ICMR 및 WHO 인도 표준 건강 체중표 – 참조 계산기"'
);

// 4. Fix Spanish tableRows col3 in bmi-calculator-for-indians (replacing French Seuil / Plage saine)
content = content.replace(
  '"col3": "Seuil de referencia para peso bajo"',
  '"col3": "Umbral de referencia para peso bajo"'
);
content = content.replace(
  '"col3": "Plage saine óptima para los adultos indios"',
  '"col3": "Rango saludable óptimo para adultos indios"'
);
content = content.replace(
  '"col3": "Seuil de riesgo cardiometabólico elevado para indios"',
  '"col3": "Umbral de riesgo cardiometabólico elevado para indios"'
);

// 5. Replace Spanish FAQ answers in EN, DE, KO for bmi-calculator-for-indians
const spanishFaq2 = 'Las poblaciones del sur de Asia presentan un mayor porcentaje de grasa visceral a índices de masa corporal más bajos, lo que incrementa el riesgo cardiometabólico a partir de un IMC de 23.0 kg/m².';
const spanishFaq3 = 'Multiplica tu altura en metros al cuadrado por 18.5 para el peso mínimo y por 22.9 para el peso máximo recomendable según los estándares de la OMS e ICMR.';

const enFaq2 = 'South Asian populations exhibit higher visceral fat percentages at lower Body Mass Index scores, increasing cardiometabolic risk starting at a BMI of 23.0 kg/m² under ICMR and WHO guidelines.';
const enFaq3 = 'Multiply your height in meters squared by 18.5 for the minimum healthy weight and by 22.9 for the maximum recommended healthy weight under WHO and ICMR Indian standards.';

const deFaq2 = 'Südasiatische Anwohner weisen bei niedrigerem BMI einen höheren viszeralen Fettanteil auf. Das kardiometabolische Risiko steigt laut ICMR- und WHO-Richtlinien bereits ab einem BMI von 23,0 kg/m².';
const deFaq3 = 'Multiplizieren Sie Ihre Körpergröße in Metern zum Quadrat mit 18,5 für das Mindestgewicht und mit 22,9 für das empfohlene Höchstgewicht nach WHO- und ICMR-Standards.';

const koFaq2 = '남아시아 및 인도인 인구는 낮은 BMI 점수에서도 더 높은 복부 내장 지방 비율을 보여, ICMR 및 WHO 지침에 따라 BMI 23.0 kg/m²부터 심대사 위험이 증가합니다.';
const koFaq3 = '신장(m)의 제곱에 18.5를 곱하면 권장 최소 체중이 되고, 22.9를 곱하면 WHO 및 ICMR 인도 표준에 따른 권장 최대 건강 체중이 됩니다.';

// We need to carefully replace the Spanish answers in EN, DE, KO blocks of bmi-calculator-for-indians
// Let's find the bmi-calculator-for-indians section and replace specifically within it.

let indiansBlock = content.slice(content.indexOf('"bmi-calculator-for-indians":'), content.indexOf('"healthy-weight-by-height":'));

// Replace in EN block
let enBlock = indiansBlock.slice(0, indiansBlock.indexOf('"es":'));
enBlock = enBlock.replace(spanishFaq2, enFaq2).replace(spanishFaq3, enFaq3);

// Replace in ES block
let esBlock = indiansBlock.slice(indiansBlock.indexOf('"es":'), indiansBlock.indexOf('"fr":'));

// Replace in FR block
let frBlock = indiansBlock.slice(indiansBlock.indexOf('"fr":'), indiansBlock.indexOf('"de":'));

// Replace in DE block
let deBlock = indiansBlock.slice(indiansBlock.indexOf('"de":'), indiansBlock.indexOf('"ko":'));
deBlock = deBlock.replace(spanishFaq2, deFaq2).replace(spanishFaq3, deFaq3);

// Replace in KO block
let koBlock = indiansBlock.slice(indiansBlock.indexOf('"ko":'), indiansBlock.indexOf('"hi":'));
koBlock = koBlock.replace(spanishFaq2, koFaq2).replace(spanishFaq3, koFaq3);

let hiBlock = indiansBlock.slice(indiansBlock.indexOf('"hi":'));

const newIndiansBlock = enBlock + esBlock + frBlock + deBlock + koBlock + hiBlock;

content = content.slice(0, content.indexOf('"bmi-calculator-for-indians":')) + newIndiansBlock + content.slice(content.indexOf('"healthy-weight-by-height":'));

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated seoDatabase.ts!');
