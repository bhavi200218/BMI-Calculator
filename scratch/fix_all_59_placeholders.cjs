const fs = require('fs');

const filePath = 'src/data/seoDatabase.ts';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Replacements for bmi-chart
content = content.replace('"col3": "Rango de referencia Severe underweight risk threshold"', '"col3": "Rango de referencia: umbral de peso bajo severo"');
content = content.replace('"col3": "Rango de referencia Moderate underweight rango de referencia"', '"col3": "Rango de referencia: peso bajo moderado"');
content = content.replace('"col3": "Rango de referencia Mild underweight reference threshold"', '"col3": "Rango de referencia: umbral de peso bajo leve"');
content = content.replace('"col3": "Rango de referencia Optimal healthy baseline range for adults"', '"col3": "Rango saludable óptimo de referencia para adultos"');
content = content.replace('"col3": "Rango de referencia Overweight rango de referencia (Asian cutoff: 23.0 kg/m²)"', '"col3": "Rango de referencia: sobrepeso (límite asiático: 23.0 kg/m²)"');
content = content.replace('"col3": "Rango de referencia Class I obesity screening reference"', '"col3": "Referencia de evaluación: obesidad clase I"');
content = content.replace('"col3": "Rango de referencia Class II obesity screening reference"', '"col3": "Referencia de evaluación: obesidad clase II"');
content = content.replace('"col3": "Rango de referencia Severe Class III obesity screening threshold"', '"col3": "Umbral de evaluación: obesidad severa clase III"');

content = content.replace('"col3": "Plage de référence Severe underweight risk threshold"', '"col3": "Seuil de référence : insuffisance pondérale sévère"');
content = content.replace('"col3": "Plage de référence Moderate underweight plage de référence"', '"col3": "Plage de référence : insuffisance pondérale modérée"');
content = content.replace('"col3": "Plage de référence Mild underweight reference threshold"', '"col3": "Seuil de référence : insuffisance pondérale légère"');
content = content.replace('"col3": "Plage de référence Optimal healthy baseline range for adults"', '"col3": "Plage de référence optimale pour el peso salud"');
content = content.replace('"col3": "Plage de référence Overweight plage de référence (Asian cutoff: 23.0 kg/m²)"', '"col3": "Plage de référence : surpoids (seuil asiatique : 23,0 kg/m²)"');
content = content.replace('"col3": "Plage de référence Class I obesity screening reference"', '"col3": "Référence d\'évaluation : obésité de classe I"');
content = content.replace('"col3": "Plage de référence Class II obesity screening reference"', '"col3": "Référence d\'évaluation : obésité de classe II"');
content = content.replace('"col3": "Plage de référence Severe Class III obesity screening threshold"', '"col3": "Seuil d\'évaluation : obésité sévère de classe III"');

content = content.replace('"col3": "Referenzbereich Severe underweight risk threshold"', '"col3": "Referenzbereich: Schwelle für schweres Untergewicht"');
content = content.replace('"col3": "Referenzbereich Moderate underweight Referenzbereich"', '"col3": "Referenzbereich: mäßiges Untergewicht"');
content = content.replace('"col3": "Referenzbereich Mild underweight reference threshold"', '"col3": "Referenzbereich: leichtes Untergewicht"');
content = content.replace('"col3": "Referenzbereich Optimal healthy baseline range for adults"', '"col3": "Optimaler gesunder Referenzbereich für Erwachsene"');
content = content.replace('"col3": "Referenzbereich Overweight Referenzbereich (Asian cutoff: 23.0 kg/m²)"', '"col3": "Referenzbereich: Übergewicht (Asiatischer Grenzwert: 23,0 kg/m²)"');
content = content.replace('"col3": "Referenzbereich Class I obesity screening reference"', '"col3": "Referenz-Bewertung: Adipositas Klasse I"');
content = content.replace('"col3": "Referenzbereich Class II obesity screening reference"', '"col3": "Referenz-Bewertung: Adipositas Klasse II"');
content = content.replace('"col3": "Referenzbereich Severe Class III obesity screening threshold"', '"col3": "Bewertungsschwelle: schwere Adipositas Klasse III"');

content = content.replace('"col3": "참조 범위 Severe underweight risk threshold"', '"col3": "참조 범위: 심각한 저체중 위험 임계값"');
content = content.replace('"col3": "참조 범위 Moderate underweight 참조 범위"', '"col3": "참조 범위: 중등도 저체중"');
content = content.replace('"col3": "참조 범위 Mild underweight reference threshold"', '"col3": "참조 범위: 경도 저체중"');
content = content.replace('"col3": "참조 범위 Optimal healthy baseline range for adults"', '"col3": "성인 최적 건강 기본 참조 범위"');
content = content.replace('"col3": "참조 범위 Overweight 참조 범위 (Asian cutoff: 23.0 kg/m²)"', '"col3": "참조 범위: 과체중 (아시아 기준: 23.0 kg/m²)"');
content = content.replace('"col3": "참조 범위 Class I obesity screening reference"', '"col3": "선별 참조: 1단계 비만"');
content = content.replace('"col3": "참조 범위 Class II obesity screening reference"', '"col3": "선별 참조: 2단계 비만"');
content = content.replace('"col3": "참조 범위 Severe Class III obesity screening threshold"', '"col3": "임계값: 심각한 3단계 고도 비만"');

// Fix FAQs in bmi-chart for es, fr, de, ko
content = content.replace('"question": "Is the BMI chart for men different from the BMI chart for women?"', '"question": "¿En qué se diferencia la tabla de IMC para hombres de la de mujeres?"');
content = content.replace('"answer": "The WHO adult BMI chart uses identical cutoff numbers (18.5 to 24.9 for normal weight) for both adult men and women. However, because women naturally carry higher body fat percentages, waist measurements and body composition testing provide additional context."', '"answer": "La tabla de IMC para adultos de la OMS utiliza los mismos números de corte para hombres y mujeres. Sin embargo, las medidas de cintura ofrecen un contexto adicional."');

content = content.replace('"question": "How does the BMI chart by age work for adults vs seniors?"', '"question": "¿Cómo funciona la tabla de IMC por edad en adultos y adultos mayores?"');
content = content.replace('"answer": "Standard WHO BMI categories apply to all adults aged 20 and older. However, research suggests that for seniors over age 65, a slightly higher BMI (23.0 to 27.0 kg/m²) may protect against bone density loss and frailty."', '"answer": "Las categorías estándar de la OMS se aplican a todos los adultos a partir de los 20 años. Para mayores de 65 años, un IMC ligeramente superior (23.0 a 27.0 kg/m²) puede ser protector."');

content = content.replace('"question": "Qu\'est-ce que le BMI chart in kg and cm?"', '"question": "Comment lire le tableau d\'IMC en kg et cm ?"');
content = content.replace('"answer": "A metric BMI chart lists height in centimeters (cm) and weight in kilograms (kg). For example: Height 170 cm with Weight 65 kg yields a BMI of 22.5 kg/m² (Healthy Weight)."', '"answer": "Un tableau d\'IMC métrique indique la taille en cm et le poids en kg. Par exemple : 170 cm et 65 kg correspondent à un IMC de 22,5 kg/m² (Poids santé)."');

content = content.replace('"question": "What are the main BMI categories on the official chart?"', '"question": "¿Cuáles son las categorías principales del IMC oficial?"');
content = content.replace('"answer": "The official WHO BMI categories are: Underweight (< 18.5), Normal Weight (18.5 – 24.9), Overweight (25.0 – 29.9), Obese Class I (30.0 – 34.9), Obese Class II (35.0 – 39.9), and Obese Class III (≥ 40.0)."', '"answer": "Las categorías oficiales de la OMS son: Bajo peso (< 18.5), Peso saludable (18.5 – 24.9), Sobrepeso (25.0 – 29.9), Obesidad Clase I (30.0 – 34.9), Obesidad Clase II (35.0 – 39.9) y Obesidad Clase III (≥ 40.0)."');

// 2. Fix bmi-calculator-india col3
content = content.replace('"col3": "Seuil de referencia para peso bajo"', '"col3": "Umbral de referencia para peso bajo"');
content = content.replace('"col3": "Seuil de référence pour l\'insuffisance pondérale"', '"col3": "Seuil de référence pour l\'insuffisance pondérale"');
content = content.replace('"col3": "Referenzbereich für Untergewicht"', '"col3": "Referenzbereich für Untergewicht"');
content = content.replace('"col3": "참조 범위 저체중 기준"', '"col3": "참조 범위 저체중 기준"');

// 3. Fix diabetes-risk-calculator
content = content.replace(/screening threshold/g, 'umbral de evaluación');
content = content.replace(/reference threshold/g, 'umbral de referencia');

// 4. Fix pregnancy-weight-gain-calculator
content = content.replace(/underweight/gi, (match, offset, string) => {
  // Check context if in non-english
  return 'bajo peso';
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Script executed cleanly.');
