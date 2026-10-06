const fs = require('fs');

const file = 'src/data/seoDatabase.ts';
let content = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');

// 1. Fix French FAQ answers for bmi-calculator-for-indians
content = content.replace(
  `"question": "Pourquoi le seuil de surpoids est-il de 23.0 pour les Indiens au lieu de 25.0 ?",\n          "answer": "Las poblaciones del sur de Asia presentan un mayor porcentaje de grasa visceral a índices de masa corporal más bajos, lo que incrementa el riesgo cardiometabólico a partir de un IMC de 23.0 kg/m²."`,
  `"question": "Pourquoi le seuil de surpoids est-il de 23.0 pour les Indiens au lieu de 25.0 ?",\n          "answer": "Les populations d'Asie du Sud et de l'Inde présentent un pourcentage plus élevé de graisse viscérale à des IMC plus faibles, ce qui augmente le risque cardiométabolique dès un IMC de 23.0 kg/m²."`
);

content = content.replace(
  `"question": "Comment calculer le poids idéal selon la taille en Inde ?",\n          "answer": "Multiplica tu altura en metros al cuadrado por 18.5 para el peso mínimo y por 22.9 para el peso máximo recomendable según los estándares de la OMS e ICMR."`,
  `"question": "Comment calculer le poids idéal selon la taille en Inde ?",\n          "answer": "Multipliez votre taille en mètres au carré par 18,5 pour le poids minimum santé et par 22,9 pour le poids maximum recommandé selon les normes de l'OMS et de l'ICMR."`
);

// 2. Localize titles for Spanish and French Indian BMI
content = content.replace(
  `"title": "BMI Calculator for Indians – Healthy Height Weight Chart for Indian Adults – Guía y Calculadora",`,
  `"title": "Calculadora de IMC para la Población India – Tabla de Peso y Altura – Guía y Calculadora",`
);

content = content.replace(
  `"title": "BMI Calculator for Indians – Healthy Height Weight Chart for Indian Adults – Outil de Référence",`,
  `"title": "Calculateur d'IMC pour les Indiens – Tableau Poids-Taille Santé – Outil de Référence",`
);

// 3. Localize table row col1 category labels for ES and FR
// Spanish
content = content.replace(
  `"col1": "Categoría / Nivel 1",\n          "col2": "< 18.5 kg/m²",\n          "col3": "Rango de referencia de peso bajo"`,
  `"col1": "Bajo Peso (Norma Indias ICMR)",\n          "col2": "< 18.5 kg/m²",\n          "col3": "Seuil de referencia para peso bajo"`
);
content = content.replace(
  `"col1": "Categoría / Nivel 2",\n          "col2": "18.5 – 22.9 kg/m²",\n          "col3": "Rango saludable óptimo para adultos en India"`,
  `"col1": "Peso Normal & Óptimo",\n          "col2": "18.5 – 22.9 kg/m²",\n          "col3": "Plage saine óptima para los adultos indios"`
);
content = content.replace(
  `"col1": "Categoría / Nivel 3",\n          "col2": "23.0 – 24.9 kg/m²",\n          "col3": "Límite de riesgo cardiometabólico elevado para indios"`,
  `"col1": "Sobrepeso / Zona de Riesgo (23.0)",\n          "col2": "23.0 – 24.9 kg/m²",\n          "col3": "Seuil de riesgo cardiometabólico elevado para indios"`
);
content = content.replace(
  `"col1": "Categoría / Nivel 4",\n          "col2": "25.0 – 29.9 kg/m²",\n          "col3": "Umbral de obesidad clase I según estándares ICMR"`,
  `"col1": "Obesidad Clase I (Norma ICMR)",\n          "col2": "25.0 – 29.9 kg/m²",\n          "col3": "Umbral de obesidad clase I según estándares ICMR"`
);
content = content.replace(
  `"col1": "Categoría / Nivel 5",\n          "col2": "≥ 30.0 kg/m²",\n          "col3": "Umbral de riesgo de obesidad severa"`,
  `"col1": "Obesidad Clase II (Severa)",\n          "col2": "≥ 30.0 kg/m²",\n          "col3": "Umbral de riesgo de obesidad severa"`
);

// French
content = content.replace(
  `"col1": "Catégorie / Niveau 1",\n          "col2": "< 18.5 kg/m²",\n          "col3": "Plage de référence de sous-poids"`,
  `"col1": "Insuffisance Pondérale (Norme Indienne)",\n          "col2": "< 18.5 kg/m²",\n          "col3": "Seuil de référence pour l'insuffisance pondérale"`
);
content = content.replace(
  `"col1": "Catégorie / Niveau 2",\n          "col2": "18.5 – 22.9 kg/m²",\n          "col3": "Plage de poids santé optimale pour adultes indiens"`,
  `"col1": "Poids Santé Optimal",\n          "col2": "18.5 – 22.9 kg/m²",\n          "col3": "Plage saine optimale pour les adultes indiens"`
);
content = content.replace(
  `"col1": "Catégorie / Niveau 3",\n          "col2": "23.0 – 24.9 kg/m²",\n          "col3": "Seuil de risque cardiométabolique élevé pour les Indiens"`,
  `"col1": "Surpoids / Zone de Risque (23.0)",\n          "col2": "23.0 – 24.9 kg/m²",\n          "col3": "Seuil de risque cardiométabolique accru pour les Indiens"`
);
content = content.replace(
  `"col1": "Catégorie / Niveau 4",\n          "col2": "25.0 – 29.9 kg/m²",\n          "col3": "Seuil d'obésité de classe I selon les normes ICMR"`,
  `"col1": "Obésité Classe I (Norme ICMR)",\n          "col2": "25.0 – 29.9 kg/m²",\n          "col3": "Seuil d'obésité de classe I selon les normes ICMR"`
);
content = content.replace(
  `"col1": "Catégorie / Niveau 5",\n          "col2": "≥ 30.0 kg/m²",\n          "col3": "Seuil de risque d'obésité sévère"`,
  `"col1": "Obésité Classe II (Sévère)",\n          "col2": "≥ 30.0 kg/m²",\n          "col3": "Seuil de risque d'obésité sévère"`
);

fs.writeFileSync(file, content, 'utf8');
console.log("Updated Spanish and French Indian BMI titles, table rows, and FAQ answers!");
