const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'seoDatabase.ts');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Fix bmi-calculator-india entry for es, fr, de, ko
// Spanish
content = content.replace(
  `"col3": "Rango de referencia Underweight rango de referencia for Indian adults"`,
  `"col3": "Umbral de referencia para bajo peso"`
);
content = content.replace(
  `"col3": "Rango de referencia Optimal healthy BMI range for Indian men & women"`,
  `"col3": "Rango saludable óptimo para adultos indios"`
);
content = content.replace(
  `"col3": "Rango de referencia Increased cardiometabolic risk cutoff (BMI 23 India threshold)"`,
  `"col3": "Umbral de riesgo cardiometabólico elevado (Corte de IMC 23)"`
);
content = content.replace(
  `"col3": "Rango de referencia Obesidad Clase I classification under WHO South Asian criteria"`,
  `"col3": "Clasificación de obesidad Clase I según OMS Asia-Pacífico"`
);
content = content.replace(
  `"col3": "Rango de referencia High risk Obesidad Claseification for Indian adults"`,
  `"col3": "Clasificación de obesidad severa de alto riesgo"`
);
content = content.replace(
  `"question": "Por qué es BMI 23 the overweight cutoff threshold in India?"`,
  `"question": "¿Por qué el IMC 23 es el umbral de sobrepeso en India?"`
);
content = content.replace(
  `"question": "What are the waist circumference guidelines for Indian adults?"`,
  `"question": "¿Cuáles son las pautas de circunferencia de cintura para adultos indios?"`
);
content = content.replace(
  `"question": "¿Qué es el ideal height weight chart for Indians?"`,
  `"question": "¿Cuál es la tabla de peso e estatura ideal para adultos indios?"`
);

// French
content = content.replace(
  `"col3": "Plage de référence Underweight plage de référence for Indian adults"`,
  `"col3": "Seuil de référence d'insuffisance pondérale"`
);
content = content.replace(
  `"col3": "Plage de référence Optimal healthy BMI range for Indian men & women"`,
  `"col3": "Plage de poids santé optimale pour les adultes indiens"`
);
content = content.replace(
  `"col3": "Plage de référence Increased cardiometabolic risk cutoff (BMI 23 India threshold)"`,
  `"col3": "Seuil de risque cardiométabolique accru (IMC ≥ 23)"`
);
content = content.replace(
  `"col3": "Plage de référence Obésité Classe I classification under WHO South Asian criteria"`,
  `"col3": "Obésité de classe I selon les critères OMS Asie-Pacifique"`
);
content = content.replace(
  `"col3": "Plage de référence High risk Obésité Classeification for Indian adults"`,
  `"col3": "Classification d'obésité sévére à haut risque"`
);
content = content.replace(
  `"question": "Pourquoi BMI 23 the overweight cutoff threshold in India?"`,
  `"question": "Pourquoi l'IMC 23 est-il le seuil de surpoids en Inde?"`
);
content = content.replace(
  `"question": "What are the waist circumference guidelines for Indian adults?"`,
  `"question": "Quelles sont les directives de tour de taille pour les Indiens?"`
);
content = content.replace(
  `"question": "Qu'est-ce que le ideal height weight chart for Indians?"`,
  `"question": "Quelle est la table de poids et taille idéale pour les Indiens?"`
);

// German
content = content.replace(
  `"col3": "Referenzbereich Underweight Referenzbereich for Indian adults"`,
  `"col3": "Referenzbereich für Untergewicht"`
);
content = content.replace(
  `"col3": "Referenzbereich Optimal healthy BMI range for Indian men & women"`,
  `"col3": "Optimaler gesunder BMI-Bereich für indische Erwachsene"`
);
content = content.replace(
  `"col3": "Referenzbereich Increased cardiometabolic risk cutoff (BMI 23 India threshold)"`,
  `"col3": "Grenzwert für erhöhtes kardiometabolisches Risiko (BMI 23)"`
);
content = content.replace(
  `"col3": "Referenzbereich Adipositas Klasse I classification under WHO South Asian criteria"`,
  `"col3": "Adipositas Klasse I nach WHO Südostasien-Kriterien"`
);
content = content.replace(
  `"col3": "Referenzbereich High risk Adipositas Klasseification for Indian adults"`,
  `"col3": "Klassifizierung für schwere Adipositas"`
);
content = content.replace(
  `"question": "Warum ist BMI 23 the overweight cutoff threshold in India?"`,
  `"question": "Warum ist ein BMI von 23 die Schwellengrenze in Indien?"`
);
content = content.replace(
  `"question": "What are the waist circumference guidelines for Indian adults?"`,
  `"question": "Welche Richtlinien gelten für den Taillenumfang indischer Erwachsener?"`
);
content = content.replace(
  `"question": "Was ist der ideal height weight chart for Indians?"`,
  `"question": "Was ist die ideale Größe-Gewicht-Tabelle für Inder?"`
);

// Korean
content = content.replace(
  `"col3": "참조 범위 Underweight 참조 범위 for Indian adults"`,
  `"col3": "저체중 참조 기준"`
);
content = content.replace(
  `"col3": "참조 범위 Optimal healthy BMI range for Indian men & women"`,
  `"col3": "인도 성인을 위한 최적 건강 체중 범위"`
);
content = content.replace(
  `"col3": "참조 범위 Increased cardiometabolic risk cutoff (BMI 23 India threshold)"`,
  `"col3": "심혈관 및 대사 위험 증가 기준 (BMI 23)"`
);
content = content.replace(
  `"col3": "참조 범위 비만 1단계 classification under WHO South Asian criteria"`,
  `"col3": "WHO 아시아 태평양 기준 1단계 비만"`
);
content = content.replace(
  `"col3": "참조 범위 High risk 비만 단계ification for Indian adults"`,
  `"col3": "고위험 중증 비만 분류"`
);
content = content.replace(
  `"question": "Why is BMI 23 the overweight cutoff threshold in India? 안내 및 원리"`,
  `"question": "인도에서 BMI 23이 과체중 기준인 이유는 무엇인가요?"`
);
content = content.replace(
  `"question": "What are the waist circumference guidelines for Indian adults? 안내 및 원리"`,
  `"question": "인도 성인의 허리둘레 기준 가이드라인은 무엇인가요?"`
);
content = content.replace(
  `"question": " ideal height weight chart for Indians? 안내 및 원리"`,
  `"question": "인도 성인을 위한 이상적인 신장별 체중표는 무엇인가요?"`
);

// 2. Fix bmi-chart entry for fr, de, ko, hi
content = content.replace(
  `"col3": "Plage de référence Mild underweight reference threshold"`,
  `"col3": "Seuil de référence pour insuffisance pondérale légère"`
);
content = content.replace(
  `"col3": "Plage de référence Severe Class III obesity screening threshold"`,
  `"col3": "Seuil d'évaluation de l'obésité sévère de classe III"`
);

content = content.replace(
  `"col3": "Referenzbereich Severe underweight risk threshold"`,
  `"col3": "Referenzwert für starkes Untergewicht"`
);
content = content.replace(
  `"col3": "Referenzbereich Moderate underweight Referenzbereich"`,
  `"col3": "Referenzwert für mäßiges Untergewicht"`
);
content = content.replace(
  `"col3": "Referenzbereich Mild underweight reference threshold"`,
  `"col3": "Referenzwert für leichtes Untergewicht"`
);
content = content.replace(
  `"col3": "Referenzbereich Severe Class III obesity screening threshold"`,
  `"col3": "Schwellenwert für schwere Adipositas Klasse III"`
);

content = content.replace(
  `"col3": "참조 범위 Severe underweight risk threshold"`,
  `"col3": "심각한 저체중 위험 기준"`
);
content = content.replace(
  `"col3": "참조 범위 Moderate underweight 참조 범위"`,
  `"col3": "중등도 저체중 참조 범위"`
);
content = content.replace(
  `"col3": "참조 범위 Mild underweight reference threshold"`,
  `"col3": "경도 저체중 참조 기준"`
);
content = content.replace(
  `"col3": "참조 범위 Severe Class III obesity screening threshold"`,
  `"col3": "3단계 고도 비만 스크리닝 임계값"`
);

content = content.replace(
  `"col3": "संदर्भ सीमा Severe Class III obesity screening threshold"`,
  `"col3": "गंभीर मोटापा श्रेणी III संदर्भ सीमा"`
);

// 3. Fix healthy-weight-by-height questions
content = content.replace(
  `"question": "¿Qué es a healthy weight for Indian adults by height?"`,
  `"question": "¿Cuál es el peso saludable para adultos indios según la estatura?"`
);
content = content.replace(
  `"question": "Qu'est-ce que a healthy weight for Indian adults by height?"`,
  `"question": "Quel est un poids santé pour les adultes indiens selon la taille?"`
);
content = content.replace(
  `"question": "Was ist a healthy weight for Indian adults by height?"`,
  `"question": "Was ist ein gesundes Gewicht für indische Erwachsene nach Körpergröße?"`
);
content = content.replace(
  `"question": " a healthy weight for Indian adults by height? 안내 및 원리"`,
  `"question": "신장별 인도 성인의 건강 체중은 얼마인가요?"`
);

// 4. Fix diabetes-risk-calculator entries
content = content.replace(
  `"title": "Asian BMI Reference Calculator — BMI 23 Threshold – Guía y Calculadora"`,
  `"title": "Calculadora de IMC Asiático — Umbral IMC 23"`
);
content = content.replace(
  `"question": "¿Cómo se the Asian BMI threshold of 23 kg/m² evaluated?"`,
  `"question": "¿Cómo se evalúa el umbral de IMC asiático de 23 kg/m²?"`
);
content = content.replace(
  `"question": "What waist circumference screening thresholds apply to Asian populations?"`,
  `"question": "¿Qué umbrales de circunferencia de cintura se aplican a las poblaciones asiáticas?"`
);

content = content.replace(
  `"title": "Asian BMI Reference Calculator — BMI 23 Threshold – Outil de Référence"`,
  `"title": "Calculateur d'IMC Asiatique — Seuil IMC 23"`
);
content = content.replace(
  `"question": "Comment est the Asian BMI threshold of 23 kg/m² evaluated?"`,
  `"question": "Comment le seuil d'IMC asiatique de 23 kg/m² est-il évalué?"`
);
content = content.replace(
  `"question": "What waist circumference screening thresholds apply to Asian populations?"`,
  `"question": "Quels seuils de tour de taille s'appliquent aux populations asiatiques?"`
);

content = content.replace(
  `"title": "Asian BMI Reference Calculator — BMI 23 Threshold – Rechner & Leitfaden"`,
  `"title": "Asiatischer BMI-Rechner — BMI 23 Schwellenwert"`
);
content = content.replace(
  `"question": "Wie wird the Asian BMI threshold of 23 kg/m² evaluated?"`,
  `"question": "Wie wird der asiatische BMI-Schwellenwert von 23 kg/m² bewertet?"`
);
content = content.replace(
  `"question": "What waist circumference screening thresholds apply to Asian populations?"`,
  `"question": "Welche Taillenumfang-Grenzwerte gelten für asiatische Bevölkerungsgruppen?"`
);

content = content.replace(
  `"title": "Asian BMI Reference 계산기 — BMI 23 Threshold – 참조 계산기"`,
  `"title": "아시아 기준 BMI 계산기 — BMI 23 임계값"`
);
content = content.replace(
  `"question": " the Asian BMI threshold of 23 kg/m² evaluated? 안내 및 원리"`,
  `"question": "아시아인 BMI 기준 23 kg/m² 임계값은 어떻게 평가되나요?"`
);
content = content.replace(
  `"question": "What waist circumference screening thresholds apply to Asian populations? 안내 및 원리"`,
  `"question": "아시아인에게 적용되는 허리둘레 선별 임계값은 무엇인가요?"`
);

content = content.replace(
  `"title": "Asian BMI Reference कैलकुलेटर — BMI 23 Threshold – मुफ्त कैलकुलेटर"`,
  `"title": "एशियाई बीएमआई संदर्भ कैलकुलेटर — 23 kg/m² कटऑफ"`
);

// 5. Fix karvonen-heart-rate-calculator col3
content = content.replace(
  `"col3": "Rango de referencia Increases high-intensity performance and lactate threshold"`,
  `"col3": "Mejora el rendimiento de alta intensidad y el umbral de lactato"`
);
content = content.replace(
  `"col3": "Plage de référence Increases high-intensity performance and lactate threshold"`,
  `"col3": "Augmente les performances à haute intensité et le seuil de lactate"`
);
content = content.replace(
  `"col3": "Referenzbereich Increases high-intensity performance and lactate threshold"`,
  `"col3": "Steigert die Hochleistungsfähigkeit und die Laktatschwelle"`
);
content = content.replace(
  `"col3": "참조 범위 Increases high-intensity performance and lactate threshold"`,
  `"col3": "고강도 운동 능력 및 젖산 역치 향상"`
);

// 6. Fix Hindi (Obese Class I) & (Obese Class II)
content = content.replace(`"col1": "मोटापा श्रेणी I (Obese Class I)"`, `"col1": "मोटापा श्रेणी I"`);
content = content.replace(`"col1": "मोटापा श्रेणी II (Obese Class II)"`, `"col1": "मोटापा श्रेणी II"`);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated seoDatabase.ts!');
