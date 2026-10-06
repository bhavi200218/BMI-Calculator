const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'seoDatabase.ts');
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(`"col1": "저체중 (Underweight)",`, `"col1": "저체중",`);

content = content.replace(
  `"col3": "Rango de referencia Severe underweight risk threshold"`,
  `"col3": "Umbral de referencia para bajo peso severo"`
);
content = content.replace(
  `"col3": "Rango de referencia Moderate underweight rango de referencia"`,
  `"col3": "Umbral de referencia para bajo peso moderado"`
);
content = content.replace(
  `"col3": "Rango de referencia Mild underweight reference threshold"`,
  `"col3": "Umbral de referencia para bajo peso leve"`
);
content = content.replace(
  `"col3": "Rango de referencia Severe Class III obesity screening threshold"`,
  `"col3": "Umbral de evaluación para obesidad severa Clase III"`
);

content = content.replace(
  `"col3": "Plage de référence Severe underweight risk threshold"`,
  `"col3": "Seuil de référence pour insuffisance pondérale sévère"`
);
content = content.replace(
  `"col3": "Plage de référence Moderate underweight plage de référence"`,
  `"col3": "Seuil de référence pour insuffisance pondérale modérée"`
);

content = content.replace(
  `"question": "What are the waist circumference guidelines for Indian adults?"`,
  `"question": "Welche Richtlinien gelten für den Taillenumfang indischer Erwachsener?"`
);

content = content.replace(
  `"title": "भारतीयों के लिए बीएमआई कैलकुलेटर (BMI कैलकुलेटर for Indians)"`,
  `"title": "भारतीयों के लिए बीएमआई कैलकुलेटर (BMI Calculator for Indians)"`
);

content = content.replace(
  `"question": "What waist circumference screening thresholds apply to Asian populations?"`,
  `"question": "Welche Taillenumfang-Grenzwerte gelten für asiatische Bevölkerungsgruppen?"`
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Cleaned remaining 12 lines!');
