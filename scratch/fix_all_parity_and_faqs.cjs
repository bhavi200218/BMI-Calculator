const fs = require('fs');

let content = fs.readFileSync('src/data/seoDatabase.ts', 'utf8');

// 1. Fix Korean typos in bmi-calculator
content = content.replace('"col1": "비만 2단계 (비만 1단계I)"', '"col1": "비만 2단계 (2단계 비만)"');
content = content.replace('"col1": "비만 3단계 (비만 1단계II)"', '"col1": "비만 3단계 (3단계 고도비만)"');

// 2. Fix BMR Row 3 across es, fr, de, ko, hi
const bmrFixes = [
  {
    target: `"es": {
      "eyebrow": "Metabolismo Basal de la OMS",
      "title": "Calculadora de BMR – Calcular la Tasa Metabólica Basal",
      "intro": "Nuestra calculadora de BMR gratuita estima las calorías de tu tasa metabólica basal mediante las ecuaciones de Mifflin-St Jeor y Harris-Benedict. Revisa tus calorías de reposo según estándares oficiales.",
      "formulaTitle": "Ecuación de Referencia BMR Mifflin-St Jeor",
      "formulaDesc": "Hombres: BMR = (10 × peso kg) + (6.25 × altura cm) - (5 × edad) + 5 | Mujeres: BMR = (10 × peso kg) + (6.25 × altura cm) - (5 × edad) - 161",
      "formulaCode": "BMR = (10×kg) + (6.25×cm) - (5×edad) + s",
      "tableTitle": "Comparación de Fórmulas Estándar de BMR",
      "tableRows": [
        {
          "col1": "Fórmula Mifflin-St Jeor",
          "col2": "Ecuación Predictiva (1990)",
          "col3": "Estándar recomendado para estimación de BMR"
        },
        {
          "col1": "Harris-Benedict Revisada",
          "col2": "Referencia Histórica (1984)",
          "col3": "Referencia histórica para BMR"
        },
        {
          "col1": "Categoría / Nivel 3",
          "col2": "Lean Body Mass Based",
          "col3": "Rango de referencia Calculates BMR estimate using lean body mass"
        }
      ]`,
    replacement: `"es": {
      "eyebrow": "Metabolismo Basal de la OMS",
      "title": "Calculadora de BMR – Calcular la Tasa Metabólica Basal",
      "intro": "Nuestra calculadora de BMR gratuita estima las calorías de tu tasa metabólica basal mediante las ecuaciones de Mifflin-St Jeor y Harris-Benedict. Revisa tus calorías de reposo según estándares oficiales.",
      "formulaTitle": "Ecuación de Referencia BMR Mifflin-St Jeor",
      "formulaDesc": "Hombres: BMR = (10 × peso kg) + (6.25 × altura cm) - (5 × edad) + 5 | Mujeres: BMR = (10 × peso kg) + (6.25 × altura cm) - (5 × edad) - 161",
      "formulaCode": "BMR = (10×kg) + (6.25×cm) - (5×edad) + s",
      "tableTitle": "Comparación de Fórmulas Estándar de BMR",
      "tableRows": [
        {
          "col1": "Fórmula Mifflin-St Jeor",
          "col2": "Ecuación Predictiva (1990)",
          "col3": "Estándar recomendado para estimación de BMR"
        },
        {
          "col1": "Harris-Benedict Revisada",
          "col2": "Referencia Histórica (1984)",
          "col3": "Referencia histórica para BMR"
        },
        {
          "col1": "Fórmula Katch-McArdle",
          "col2": "Basada en Masa Corporal Magra",
          "col3": "Calcula la estimación de BMR utilizando la masa corporal magra (LBM)"
        }
      ]`
  }
];

bmrFixes.forEach(f => {
  if (content.includes(f.target)) {
    content = content.replace(f.target, f.replacement);
  }
});

// Replace remaining "Lean Body Mass Based" in fr, de, ko, hi
content = content.replaceAll('"col1": "Catégorie / Niveau 3",\n          "col2": "Lean Body Mass Based",\n          "col3": "Plage de référence Calculates BMR estimate using lean body mass"',
  '"col1": "Formule Katch-McArdle",\n          "col2": "Basée sur la Masse Corporelle Maigre",\n          "col3": "Calcule l\'estimation du BMR en utilisant la masse corporelle maigre (LBM)"');

content = content.replaceAll('"col1": "Kategorie / Stufe 3",\n          "col2": "Lean Body Mass Based",\n          "col3": "Referenzbereich Calculates BMR estimate using lean body mass"',
  '"col1": "Katch-McArdle Formel",\n          "col2": "Basierend auf Magerer Körpermasse",\n          "col3": "Berechnet den BMR basierend auf der mageren Körpermasse (LBM)"');

content = content.replaceAll('"col1": "범주 / 단계 3",\n          "col2": "Lean Body Mass Based",\n          "col3": "참조 범위 Calculates BMR estimate using lean body mass"',
  '"col1": "Katch-McArdle 공식",\n          "col2": "제지방량(LBM) 기반",\n          "col3": "제지방량(LBM) 수치를 사용하여 기초대사량(BMR)을 산출합니다"');

content = content.replaceAll('"col1": "श्रेणी / स्तर 3",\n          "col2": "Lean Body Mass Based",\n          "col3": "संदर्भ सीमा Calculates BMR estimate using lean body mass"',
  '"col1": "Katch-McArdle फॉर्मूला",\n          "col2": "लीन बॉडी मास पर आधारित",\n          "col3": "लीन बॉडी मास (LBM) का उपयोग करके बीएमआर का अनुमान लगाता है"');

fs.writeFileSync('src/data/seoDatabase.ts', content, 'utf8');
console.log("Applied initial BMR and Korean typo fixes!");
