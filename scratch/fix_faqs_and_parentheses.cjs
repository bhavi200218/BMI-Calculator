const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'seoDatabase.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Clean German FAQs for bmi-calculator-for-indians
const deFaqsClean = [
  {
    "question": "Wie funktioniert der BMI-Rechner für indische Erwachsene?",
    "answer": "Der Rechner verwendet die ICMR- und WHO-Südostasien-Kriterien, um Ihren BMI und den gesunden Bereich (18.5 – 22.9 kg/m²) zu berechnen."
  },
  {
    "question": "Warum liegt der Grenzwert für Übergewicht bei Indern bei 23.0 statt 25.0?",
    "answer": "Aufgrund höherer kardiometabolischer Risiken bei geringerem BMI empfehlen ICMR und WHO einen niedrigeren Grenzwert von 23.0 kg/m² für indische Erwachsene."
  },
  {
    "question": "Wie berechnet man das ideale Körpergewicht nach der Größe in Indien?",
    "answer": "Das ideale Gewicht liegt vor, wenn der BMI zwischen 18.5 und 22.9 kg/m² liegt. Es wird mit der Formel: Gewicht (kg) / [Größe (m)]² berechnet."
  }
];

// Clean Korean FAQs for bmi-calculator-for-indians
const koFaqsClean = [
  {
    "question": "인도 성인 전용 BMI 계산기의 원리와 측정 항목은 무엇인가요?",
    "answer": "본 계산기는 ICMR 및 WHO 아시아 태평양 지침에 따라 BMI와 건강 체중 범위(18.5 – 22.9 kg/m²)를 측정합니다."
  },
  {
    "question": "인도 성인의 과체중 기준이 25.0이 아닌 23.0인 이유는 무엇인가요?",
    "answer": "남아시아 및 인도인 인구는 낮은 BMI에서도 높은 체지방률을 보여, WHO 및 ICMR 지침에 따라 23.0 kg/m²부터 위험이 증가합니다."
  },
  {
    "question": "인도 표준 지침에 따른 신장별 적정 체중은 어떻게 계산하나요?",
    "answer": "신장(m)의 제곱에 18.5를 곱하면 최소 권장 체중이 되고, 22.9를 곱하면 최대 건강 체중 범위가 됩니다."
  }
];

// Replace the FAQs in content for de and ko under bmi-calculator-for-indians
// Let's find the exact blocks and fix them cleanly
console.log('Replacing DE and KO FAQs in bmi-calculator-for-indians...');

// Fix line 329 "정상 체중 (Healthy Weight)" -> "정상 체중"
content = content.replace(`"col1": "정상 체중 (Healthy Weight)",`, `"col1": "정상 체중",`);

// Let's replace DE FAQs block in bmi-calculator-for-indians
const deFaqStr = JSON.stringify(deFaqsClean, null, 8).trim();
const koFaqStr = JSON.stringify(koFaqsClean, null, 8).trim();

// Write a custom node script to update seoDatabase.ts
fs.writeFileSync(filePath, content, 'utf8');
console.log('Parentheses cleaned in seoDatabase.ts');
