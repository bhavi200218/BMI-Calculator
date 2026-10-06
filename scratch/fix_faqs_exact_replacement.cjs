const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'seoDatabase.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Fix German FAQs for bmi-calculator-for-indians
const targetDeStr = `      "faqs": [
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
      ]`;

// Find Korean questions in DE block
const deKeyIdx = content.indexOf('"bmi-calculator-for-indians"');
if (deKeyIdx !== -1) {
  const sub = content.slice(deKeyIdx, deKeyIdx + 15000);
  const deIdx = sub.indexOf('"de": {');
  if (deIdx !== -1) {
    const fullDePos = deKeyIdx + deIdx;
    const faqsPos = content.indexOf('"faqs": [', fullDePos);
    const faqsEndPos = content.indexOf(']', faqsPos) + 1;
    content = content.slice(0, faqsPos) + targetDeStr + content.slice(faqsEndPos);
    console.log('Successfully replaced DE FAQs in bmi-calculator-for-indians!');
  }
}

// Fix Korean FAQs for bmi-calculator-for-indians
const targetKoStr = `      "faqs": [
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
      ]`;

const koKeyIdx = content.indexOf('"bmi-calculator-for-indians"');
if (koKeyIdx !== -1) {
  const sub = content.slice(koKeyIdx, koKeyIdx + 15000);
  const koIdx = sub.indexOf('"ko": {');
  if (koIdx !== -1) {
    const fullKoPos = koKeyIdx + koIdx;
    const faqsPos = content.indexOf('"faqs": [', fullKoPos);
    const faqsEndPos = content.indexOf(']', faqsPos) + 1;
    content = content.slice(0, faqsPos) + targetKoStr + content.slice(faqsEndPos);
    console.log('Successfully replaced KO FAQs in bmi-calculator-for-indians!');
  }
}

// Also clean bmi-calculator-india DE & KO FAQs
const targetIndiaDeStr = `      "faqs": [
        {
          "question": "Wie funktioniert der BMI-Rechner für Indien und was misst er?",
          "answer": "Der Rechner berechnet den Body-Mass-Index (BMI) nach ICMR- und WHO-Asien-Pazifik-Referenzstandards für indische Erwachsene."
        },
        {
          "question": "Warum ist ein BMI von 23 die Schwellengrenze in Indien?",
          "answer": "Südasiaten weisen bei niedrigerem BMI einen höheren Körperfettanteil auf. Daher gilt ein BMI ab 23,0 kg/m² als erhöhtes Risiko."
        },
        {
          "question": "Welche Richtlinien gelten für den Taillenumfang indischer Erwachsener?",
          "answer": "Nach ICMR-Richtlinien liegt die empfohlene Taillenumfang-Schwelle bei indischen Männern unter 90 cm und bei Frauen unter 80 cm."
        }
      ]`;

const targetIndiaKoStr = `      "faqs": [
        {
          "question": "인도 표준 BMI 계산기의 원리와 측정 항목은 무엇인가요?",
          "answer": "본 계산기는 ICMR 및 WHO 아시아 태평양 지침에 따라 체질량지수(BMI)와 건강 체중 범위를 측정합니다."
        },
        {
          "question": "인도에서 BMI 23이 과체중 기준인 이유는 무엇인가요?",
          "answer": "남아시아 인구는 낮은 BMI에서도 높은 복부 지방 비율을 보여 23.0 kg/m²부터 위험이 증가합니다."
        },
        {
          "question": "인도 성인의 허리둘레 기준 가이드라인은 무엇인가요?",
          "answer": "ICMR 지침에 따르면 권장 허리둘레 기준은 남성 90cm 미만, 여성 80cm 미만입니다."
        }
      ]`;

const indiaKeyIdx = content.indexOf('"bmi-calculator-india"');
if (indiaKeyIdx !== -1) {
  const sub = content.slice(indiaKeyIdx, indiaKeyIdx + 15000);
  const deIdx = sub.indexOf('"de": {');
  if (deIdx !== -1) {
    const fullDePos = indiaKeyIdx + deIdx;
    const faqsPos = content.indexOf('"faqs": [', fullDePos);
    const faqsEndPos = content.indexOf(']', faqsPos) + 1;
    content = content.slice(0, faqsPos) + targetIndiaDeStr + content.slice(faqsEndPos);
    console.log('Successfully replaced DE FAQs in bmi-calculator-india!');
  }
  
  const koIdx = sub.indexOf('"ko": {');
  if (koIdx !== -1) {
    const fullKoPos = indiaKeyIdx + koIdx;
    const faqsPos = content.indexOf('"faqs": [', fullKoPos);
    const faqsEndPos = content.indexOf(']', faqsPos) + 1;
    content = content.slice(0, faqsPos) + targetIndiaKoStr + content.slice(faqsEndPos);
    console.log('Successfully replaced KO FAQs in bmi-calculator-india!');
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Completed all FAQ cleanup in seoDatabase.ts!');
