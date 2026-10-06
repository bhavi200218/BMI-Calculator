const fs = require('fs');

const file = 'src/data/seoDatabase.ts';
let content = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');

// 1. ES BMR Row 3
content = content.replace(
  `"col1": "Categoría / Nivel 3",\n          "col2": "Katch-McArdle LBM Formula",\n          "col3": "Rango de referencia Calculates BMR using lean body mass (LBM)"`,
  `"col1": "Fórmula Katch-McArdle",\n          "col2": "Basada en Masa Corporal Magra",\n          "col3": "Calcula la estimación del BMR utilizando la masa corporal magra (LBM)"`
);

// 2. FR BMR Row 3 & FAQ 5
content = content.replace(
  `"col1": "Catégorie / Niveau 3",\n          "col2": "Katch-McArdle LBM Formula",\n          "col3": "Plage de référence Calculates BMR using lean body mass (LBM)"`,
  `"col1": "Formule Katch-McArdle",\n          "col2": "Basée sur la Masse Corporelle Maigre",\n          "col3": "Calcule l'estimation du BMR à l'aide de la masse corporelle maigre (LBM)"`
);
content = content.replace(
  `"question": "Qu'est-ce que le difference between BMR and TDEE?",\n          "answer": "BMR is your resting metabolic burn at 0% activity. TDEE (Total Daily Energy Expenditure) multiplies BMR by your physical activity level factor to account for movement and exercise."`,
  `"question": "Quelle est la différence entre la formule Mifflin-St Jeor et Katch-McArdle ?",\n          "answer": "Mifflin-St Jeor estime le BMR à partir du poids total, de la taille et de l'âge. Katch-McArdle utilise la masse corporelle maigre (LBM), ce qui convient particulièrement aux athlètes."`
);

// 3. DE BMR Row 3 & FAQ 5
content = content.replace(
  `"col1": "Kategorie / Stufe 3",\n          "col2": "Katch-McArdle LBM Formula",\n          "col3": "Referenzbereich Calculates BMR using lean body mass (LBM)"`,
  `"col1": "Katch-McArdle Formel",\n          "col2": "Basierend auf Magerer Körpermasse",\n          "col3": "Berechnet die BMR-Schätzung anhand der mageren Körpermasse (LBM)"`
);
content = content.replace(
  `"question": "Was ist der difference between BMR and TDEE?",\n          "answer": "BMR is your resting metabolic burn at 0% activity. TDEE (Total Daily Energy Expenditure) multiplies BMR by your physical activity level factor to account for movement and exercise."`,
  `"question": "Was ist der Unterschied zwischen der Mifflin-St Jeor und Katch-McArdle Formel?",\n          "answer": "Mifflin-St Jeor berechnet den Grundumsatz aus Gesamtgewicht, Körpergröße und Alter. Katch-McArdle berücksichtigt die magere Körpermasse (LBM), was für sehr muskulöse Menschen präziser ist."`
);

// 4. KO BMR Row 3 & FAQ 4/5
content = content.replace(
  `"col1": "범주 / 단계 3",\n          "col2": "Katch-McArdle LBM Formula",\n          "col3": "참조 범위 Calculates BMR using lean body mass (LBM)"`,
  `"col1": "Katch-McArdle 공식",\n          "col2": "제지방량(LBM) 기반",\n          "col3": "제지방량(LBM)을 바탕으로 기초대사량을 산출합니다"`
);
content = content.replace(
  `"question": " calculate BMR in kg and cm online? 안내 및 원리",\n          "answer": "Enter your weight in kilograms (kg) and height in centimeters (cm) alongside age and sex into our online BMR calculator to get your instant calorie burn estimate."`,
  `"question": "온라인으로 신장(cm)과 체중(kg)을 통해 BMR을 계산하는 방법은?",\n          "answer": "온라인 BMR 계산기에 신장(cm), 체중(kg), 연령, 성별을 입력하면 미플린-스토어 공식을 통해 즉시 기초대사량이 산출됩니다."`
);
content = content.replace(
  `"question": " difference between BMR and TDEE? 안내 및 원리",\n          "answer": "BMR is your resting metabolic burn at 0% activity. TDEE (Total Daily Energy Expenditure) multiplies BMR by your physical activity level factor to account for movement and exercise."`,
  `"question": "Mifflin-St Jeor 공식과 Katch-McArdle 공식의 차이는 무엇인가요?",\n          "answer": "미플린-스토어 공식은 전체 체중과 신장을 바탕으로 산출하며, 캐치-맥아들 공식은 제지방량(LBM)을 기반으로 계산하여 근육량이 많은 운동선수에게 적합합니다."`
);

// 5. HI BMR Row 3
content = content.replace(
  `"col1": "श्रेणी / स्तर 3",\n          "col2": "Katch-McArdle LBM Formula",\n          "col3": "संदर्भ सीमा Calculates BMR using lean body mass (LBM)"`,
  `"col1": "कैच-मैकआर्डल फॉर्मूला",\n          "col2": "लीन बॉडी मास पर आधारित",\n          "col3": "लीन बॉडी मास (LBM) का उपयोग करके बीएमआर का अनुमान लगाता है"`
);

fs.writeFileSync(file, content, 'utf8');
console.log("Applied all BMR replacements with normalized newlines!");
