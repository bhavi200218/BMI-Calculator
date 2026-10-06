const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'seoDatabase.ts');
let content = fs.readFileSync(filePath, 'utf8');

// For each tool key in seoDatabase.ts, let's locate "faqs": [ ... ] under "de" and "ko" and replace them cleanly with 3 native FAQs

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

function replaceFaqsForTool(toolKey) {
  const toolIdx = content.indexOf(`"${toolKey}":`);
  if (toolIdx === -1) return;

  const nextToolIdx = content.indexOf('};\nexport', toolIdx);
  const toolChunk = content.slice(toolIdx, nextToolIdx === -1 ? content.length : nextToolIdx);

  // Fix DE faqs
  const deIdx = toolChunk.indexOf('"de":');
  const koIdx = toolChunk.indexOf('"ko":');
  const hiIdx = toolChunk.indexOf('"hi":');

  if (deIdx !== -1 && koIdx !== -1) {
    const deChunk = toolChunk.slice(deIdx, koIdx);
    const faqStart = deChunk.indexOf('"faqs": [');
    if (faqStart !== -1) {
      const faqEnd = deChunk.indexOf(']', faqStart) + 1;
      const newDeChunk = deChunk.slice(0, faqStart) + '"faqs": ' + JSON.stringify(deFaqsClean, null, 8).trim() + deChunk.slice(faqEnd);
      content = content.replace(deChunk, newDeChunk);
    }
  }

  // Refetch toolChunk after DE replacement
  const updatedToolIdx = content.indexOf(`"${toolKey}":`);
  const updatedToolChunk = content.slice(updatedToolIdx, content.indexOf('};\nexport', updatedToolIdx));
  const updatedKoIdx = updatedToolChunk.indexOf('"ko":');
  const updatedHiIdx = updatedToolChunk.indexOf('"hi":');

  if (updatedKoIdx !== -1 && updatedHiIdx !== -1) {
    const koChunk = updatedToolChunk.slice(updatedKoIdx, updatedHiIdx);
    const faqStart = koChunk.indexOf('"faqs": [');
    if (faqStart !== -1) {
      const faqEnd = koChunk.indexOf(']', faqStart) + 1;
      const newKoChunk = koChunk.slice(0, faqStart) + '"faqs": ' + JSON.stringify(koFaqsClean, null, 8).trim() + koChunk.slice(faqEnd);
      content = content.replace(koChunk, newKoChunk);
    }
  }
}

replaceFaqsForTool('bmi-calculator-for-indians');
replaceFaqsForTool('bmi-calculator-india');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully replaced DE and KO FAQs for both indian tools!');
