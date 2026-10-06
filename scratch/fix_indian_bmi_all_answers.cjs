const fs = require('fs');

const file = 'src/data/seoDatabase.ts';
let content = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');

// Replace English answers in Indian BMI FAQs across ES, FR, DE, KO
const indianAnswerReplacements = [
  {
    from: `"Indians have a higher percentage of visceral fat at lower body mass index levels, leading to increased risk of diabetes and hypertension at BMI 23.0 kg/m²."`,
    to: `"Las poblaciones del sur de Asia presentan un mayor porcentaje de grasa visceral a índices de masa corporal más bajos, lo que incrementa el riesgo cardiometabólico a partir de un IMC de 23.0 kg/m²."`
  },
  {
    from: `"Divide your height in meters squared and multiply by 18.5 for minimum healthy weight and by 22.9 for maximum healthy weight. For example, at 170 cm, healthy weight is 53.5 kg to 66.2 kg."`,
    to: `"Multiplica tu altura en metros al cuadrado por 18.5 para el peso mínimo y por 22.9 para el peso máximo recomendable según los estándares de la OMS e ICMR."`
  }
];

indianAnswerReplacements.forEach(({ from, to }) => {
  content = content.split(from).join(to);
});

// Fix French table row category names for Indian BMI
content = content.replace(
  `"col1": "Catégorie / Niveau 1"`,
  `"col1": "Sous-poids (Norme Indienne)"`
);
content = content.replace(
  `"col1": "Catégorie / Niveau 2"`,
  `"col1": "Poids Normal & Optimal"`
);
content = content.replace(
  `"col1": "Catégorie / Niveau 3"`,
  `"col1": "Surpoids / Zone d'Action"`
);
content = content.replace(
  `"col1": "Catégorie / Niveau 4"`,
  `"col1": "Obésité Classe I (ICMR)"`
);
content = content.replace(
  `"col1": "Catégorie / Niveau 5"`,
  `"col1": "Obésité Classe II (Sévère)"`
);

fs.writeFileSync(file, content, 'utf8');
console.log("Updated Indian BMI FAQ answers and French table titles in seoDatabase.ts!");
