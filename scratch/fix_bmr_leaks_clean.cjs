const fs = require('fs');

let content = fs.readFileSync('src/data/seoDatabase.ts', 'utf8');

// Replace BMR leaks in all 5 languages
content = content.replace(
  `"col1": "Categoría / Nivel 3",\n          "col2": "Lean Body Mass Based",\n          "col3": "Rango de referencia Calculates BMR estimate using lean body mass"`,
  `"col1": "Fórmula Katch-McArdle",\n          "col2": "Basada en Masa Corporal Magra",\n          "col3": "Calcula la estimación de BMR utilizando la masa corporal magra (LBM)"`
);

content = content.replace(
  `"col1": "Catégorie / Niveau 3",\n          "col2": "Lean Body Mass Based",\n          "col3": "Plage de référence Calculates BMR estimate using lean body mass"`,
  `"col1": "Formule Katch-McArdle",\n          "col2": "Basée sur la Masse Corporelle Maigre",\n          "col3": "Calcule l'estimation du BMR en utilisant la masse corporelle maigre (LBM)"`
);

content = content.replace(
  `"col1": "Kategorie / Stufe 3",\n          "col2": "Lean Body Mass Based",\n          "col3": "Referenzbereich Calculates BMR estimate using lean body mass"`,
  `"col1": "Katch-McArdle Formel",\n          "col2": "Basierend auf Magerer Körpermasse",\n          "col3": "Berechnet den BMR basierend auf der mageren Körpermasse (LBM)"`
);

content = content.replace(
  `"col1": "범주 / 단계 3",\n          "col2": "Lean Body Mass Based",\n          "col3": "참조 범위 Calculates BMR estimate using lean body mass"`,
  `"col1": "Katch-McArdle 공식",\n          "col2": "제지방량(LBM) 기반",\n          "col3": "제지방량(LBM) 수치를 사용하여 기초대사량(BMR)을 산출합니다"`
);

content = content.replace(
  `"col1": "श्रेणी / स्तर 3",\n          "col2": "Lean Body Mass Based",\n          "col3": "संदर्भ सीमा Calculates BMR estimate using lean body mass"`,
  `"col1": "Katch-McArdle फॉर्मूला",\n          "col2": "लीन बॉडी मास पर आधारित",\n          "col3": "लीन बॉडी मास (LBM) का उपयोग करके बीएमआर का अनुमान लगाता है"`
);

fs.writeFileSync('src/data/seoDatabase.ts', content, 'utf8');
console.log("Successfully replaced BMR matrix leaks across ES, FR, DE, KO, HI!");
