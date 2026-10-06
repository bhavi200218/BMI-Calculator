const fs = require('fs');

const file = 'src/data/seoDatabase.ts';
let content = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');

// 1. Spanish BMR Row 3 Exact User-Requested Wording
content = content.replace(
  `"col1": "Fórmula Katch-McArdle",\n          "col2": "Basada en Masa Corporal Magra",\n          "col3": "Calcula la estimación del BMR utilizando la masa corporal magra (LBM)"`,
  `"col1": "Fórmula Katch-McArdle",\n          "col2": "Fórmula basada en la masa corporal magra",\n          "col3": "Calcula la tasa metabólica basal utilizando la masa corporal magra (LBM)"`
);

// 2. Refine 3D BMI Oxford formula description to make clear it is an educational mathematical formula, not clinical diagnosis
content = content.replace(
  `"formulaDesc": "3D BMI = 1.3 × Weight (kg) / [Height (m)]²·⁵ | Developed by University of Oxford mathematicians to correct height scaling distortions in traditional 2D BMI."`,
  `"formulaDesc": "3D BMI = 1.3 × Weight (kg) / [Height (m)]²·⁵ | Proposed by Oxford mathematician Prof. Nick Trefethen as an educational mathematical alternative to standard 2D BMI height scaling."`
);

content = content.replace(
  `"formulaDesc": "IMC 3D Ajustado = 1.3 × Peso (kg) / [Altura (m)]²·⁵ | Diseñada por matemáticos de la Universidad de Oxford para eliminar la distorsión de altura que afecta a personas altas o bajas en la fórmula clásica de Quetelet."`,
  `"formulaDesc": "IMC 3D Ajustado = 1.3 × Peso (kg) / [Altura (m)]²·⁵ | Propuesta por el matemático de Oxford Prof. Nick Trefethen como una alternativa matemática educativa al IMC 2D tradicional."`
);

fs.writeFileSync(file, content, 'utf8');
console.log("Applied exact user requested Spanish BMR wording and Oxford formula educational framing!");
