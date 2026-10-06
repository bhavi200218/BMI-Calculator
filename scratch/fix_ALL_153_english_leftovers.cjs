const fs = require('fs');

const file = 'src/data/seoDatabase.ts';
let content = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');

// 1. Table rows English text replacements
const tableReplacements = [
  // Underweight reference threshold
  { from: 'Rango de referencia Underweight reference threshold', to: 'Rango de referencia de peso bajo' },
  { from: 'Plage de référence Underweight reference threshold', to: 'Plage de référence de sous-poids' },
  { from: 'Referenzbereich Underweight reference threshold', to: 'Referenzbereich für Untergewicht' },
  { from: '참조 범위 Underweight reference threshold', to: '참조 범위 저체중 기준' },
  
  // Healthy weight window for Asian men & women
  { from: 'Rango de referencia Healthy weight window for Asian men & women', to: 'Rango saludable de referencia para la población asiática' },
  { from: 'Plage de référence Healthy weight window for Asian men & women', to: 'Plage de poids santé de référence pour la population asiatique' },
  { from: 'Referenzbereich Healthy weight window for Asian men & women', to: 'Referenzbereich für gesundes Gewicht bei asiatischen Erwachsenen' },
  { from: '참조 범위 Healthy weight window for Asian men & women', to: '참조 범위 아시아 성인 표준 건강 체중' },

  // Optimal healthy range for Indian adults
  { from: 'Rango de referencia Optimal healthy range for Indian adults', to: 'Rango saludable óptimo para adultos en India' },
  { from: 'Plage de référence Optimal healthy range for Indian adults', to: 'Plage de poids santé optimale pour adultes indiens' },
  { from: 'Referenzbereich Optimal healthy range for Indian adults', to: 'Optimaler gesunder Bereich für indische Erwachsene' },
  { from: '참조 범위 Optimal healthy range for Indian adults', to: '참조 범위 인도 성인 최적 건강 체중' },

  // Action threshold for Asian population screening / Elevated cardiometabolic risk cutoff for Indians
  { from: 'Rango de referencia Action threshold for Asian population screening', to: 'Límite de acción y riesgo elevado en población asiática' },
  { from: 'Plage de référence Action threshold for Asian population screening', to: 'Seuil d\'action et de risque élevé pour la population asiatique' },
  { from: 'Referenzbereich Action threshold for Asian population screening', to: 'Aktionsgrenzwert für asiatische Bevölkerungsgruppen' },
  { from: '참조 범위 Action threshold for Asian population screening', to: '참조 범위 아시아인 건강 위험 관리 임계값' },

  { from: 'Rango de referencia Elevated cardiometabolic risk cutoff for Indians', to: 'Límite de riesgo cardiometabólico elevado para indios' },
  { from: 'Plage de référence Elevated cardiometabolic risk cutoff for Indians', to: 'Seuil de risque cardiométabolique élevé pour les Indiens' },
  { from: 'Referenzbereich Elevated cardiometabolic risk cutoff for Indians', to: 'Grenzwert für erhöhtes kardiometabolisches Risiko' },
  { from: '참조 범위 Elevated cardiometabolic risk cutoff for Indians', to: '참조 범위 심혈관 및 대사 위험 증가 기준' },

  // High risk Obesité Classeification for Asian adults / Class I obesity threshold under ICMR standards
  { from: 'Rango de referencia High risk Obesidad Claseification for Asian adults', to: 'Clasificación de alto riesgo de obesidad en población asiática' },
  { from: 'Plage de référence High risk Obésité Classeification for Asian adults', to: 'Classification d\'obésité à haut risque pour la population asiatique' },
  { from: 'Referenzbereich High risk Adipositas Klasseification for Asian adults', to: 'Klassifizierung für hohes Adipositas-Risiko' },
  { from: '참조 범위 High risk 비만 단계ification for Asian adults', to: '참조 범위 고위험 비만 분류 기준' },

  { from: 'Rango de referencia Class I obesity threshold under ICMR standards', to: 'Umbral de obesidad clase I según estándares ICMR' },
  { from: 'Plage de référence Class I obesity threshold under ICMR standards', to: 'Seuil d\'obésité de classe I selon les normes ICMR' },
  { from: 'Referenzbereich Class I obesity threshold under ICMR standards', to: 'Adipositas Klasse I Schwellenwert nach ICMR-Standards' },
  { from: '참조 범위 Class I obesity threshold under ICMR standards', to: '참조 범위 ICMR 기준 1단계 비만 임계값' },

  // Severe obesity risk threshold
  { from: 'Rango de referencia Severe obesity risk threshold', to: 'Umbral de riesgo de obesidad severa' },
  { from: 'Plage de référence Severe obesity risk threshold', to: 'Seuil de risque d\'obésité sévère' },
  { from: 'Referenzbereich Severe obesity risk threshold', to: 'Schwellenwert für schwere Adipositas' },
  { from: '참조 범위 Severe obesity risk threshold', to: '참조 범위 고도 비만 위험 임계값' }
];

tableReplacements.forEach(({ from, to }) => {
  content = content.split(from).join(to);
});

// 2. FAQ Questions English text replacements for Indian BMI, Asian BMI, Diabetes Risk, etc.
const faqReplacements = [
  // Indian BMI FAQs
  { from: 'Comment fonctionne le calculateur de bmi calculator for indians et que mesure-t-il ?', to: 'Comment fonctionne le calculateur d\'IMC pour la population indienne ?' },
  { from: '¿Cómo funciona la calculadora de bmi calculator for indians y qué mide?', to: '¿Cómo funciona la calculadora de IMC para la población india y qué mide?' },
  { from: 'Wie funktioniert der bmi calculator for indians-Rechner und was misst er?', to: 'Wie funktioniert der BMI-Rechner für indische Erwachsene?' },
  { from: 'bmi calculator for indians 계산기의 원리와 측정 항목은 무엇인가요?', to: '인도 성인 전용 BMI 계산기의 원리와 측정 항목은 무엇인가요?' },

  { from: 'Pourquoi the overweight cutoff 23.0 for Indians instead of 25.0?', to: 'Pourquoi le seuil de surpoids est-il de 23.0 pour les Indiens au lieu de 25.0 ?' },
  { from: 'Por qué es the overweight cutoff 23.0 for Indians instead of 25.0?', to: '¿Por qué el límite de sobrepeso es 23.0 para la población india en lugar de 25.0?' },
  { from: 'Warum ist the overweight cutoff 23.0 for Indians instead of 25.0?', to: 'Warum liegt der Grenzwert für Übergewicht bei Indern bei 23.0 statt 25.0?' },
  { from: 'Why is the overweight cutoff 23.0 for Indians instead of 25.0? 안내 및 원리', to: '인도 성인의 과체중 기준이 25.0이 아닌 23.0인 이유는 무엇인가요?' },

  { from: 'Comment calculate ideal body weight for height in India?', to: 'Comment calculer le poids idéal selon la taille en Inde ?' },
  { from: 'Cómo calculate ideal body weight for height in India?', to: '¿Cómo calcular el peso corporal ideal según la altura en India?' },
  { from: 'Wie man calculate ideal body weight for height in India?', to: 'Wie berechnet man das ideale Körpergewicht nach der Größe in Indien?' },
  { from: 'calculate ideal body weight for height in India? 안내 및 원리', to: '인도 표준 지침에 따른 신장별 적정 체중은 어떻게 계산하나요?' },

  // Asian BMI FAQs
  { from: 'Qu\'est-ce que a normal BMI for Asian adults?', to: 'Quel est l\'IMC normal pour les adultes asiatiques ?' },
  { from: '¿Qué es a normal BMI for Asian adults?', to: '¿Cuál es el IMC normal para los adultos asiáticos?' },
  { from: 'Was ist a normal BMI for Asian adults?', to: 'Was ist ein normaler BMI für asiatische Erwachsene?' },
  { from: ' a normal BMI for Asian adults? 안내 및 원리', to: '아시아 성인의 표준 정상 BMI 범위는 얼마인가요?' },

  { from: 'What BMI is considered overweight for Asians? 안내 및 원리', to: '아시아인에게 과체중으로 간주되는 BMI 기준은 얼마인가요?' },

  // Generic tool FAQs cleaning awkward slug names
  { from: 'calculateur de asian bmi calculator', to: 'calculateur d\'IMC asiatique' },
  { from: 'calculadora de asian bmi calculator', to: 'calculadora de IMC asiático' },
  { from: 'asian bmi calculator-Rechner', to: 'Rechner für asiatischen BMI' },
  { from: 'asian bmi calculator 계산기', to: '아시아인 전용 BMI 계산기' },

  { from: 'calculateur de diabetes risk calculator', to: 'calculateur de risque de diabète' },
  { from: 'calculadora de diabetes risk calculator', to: 'calculadora de riesgo de diabetes' },
  { from: 'diabetes risk calculator-Rechner', to: 'Diabetes-Risiko-Rechner' },
  { from: 'diabetes risk calculator 계산기', to: '당뇨 위험 평가 계산기' },

  { from: 'calculateur de bmr calculator', to: 'calculateur de métabolisme de base (BMR)' },
  { from: 'calculadora de bmr calculator', to: 'calculadora de tasa metabólica basal (BMR)' },
  { from: 'bmr calculator-Rechner', to: 'BMR-Rechner' },
  { from: 'bmr calculator 계산기', to: 'BMR 기초대사량 계산기' },

  { from: 'calculateur de tdee calculator', to: 'calculateur de dépense énergétique quotidienne (TDEE)' },
  { from: 'calculadora de tdee calculator', to: 'calculadora de gasto energético total (TDEE)' },
  { from: 'tdee calculator-Rechner', to: 'TDEE-Rechner' },
  { from: 'tdee calculator 계산기', to: 'TDEE 일일 총 에너지 계산기' },

  { from: 'calculateur de maintenance calorie calculator', to: 'calculateur de calories de maintien' },
  { from: 'calculadora de maintenance calorie calculator', to: 'calculadora de calorías de mantenimiento' },
  { from: 'maintenance calorie calculator-Rechner', to: 'Kalorien-Erhaltungs-Rechner' },
  { from: 'maintenance calorie calculator 계산기', to: '체중 유지 칼로리 계산기' },

  { from: 'calculateur de lean body mass calculator', to: 'calculateur de masse corporelle maigre' },
  { from: 'calculadora de lean body mass calculator', to: 'calculadora de masa corporal magra' },
  { from: 'lean body mass calculator-Rechner', to: 'Magerkurven-Rechner' },
  { from: 'lean body mass calculator 계산기', to: '제지방량 계산기' },

  { from: 'calculateur de ideal weight calculator', to: 'calculateur de poids idéal' },
  { from: 'calculadora de ideal weight calculator', to: 'calculadora de peso ideal' },
  { from: 'ideal weight calculator-Rechner', to: 'Idealgewicht-Rechner' },
  { from: 'ideal weight calculator 계산기', to: '이상 체중 계산기' },

  { from: 'calculateur de calorie calculator', to: 'calculateur de calories' },
  { from: 'calculadora de calorie calculator', to: 'calculadora de calorías' },
  { from: 'calorie calculator-Rechner', to: 'Kalorienrechner' },
  { from: 'calorie calculator 계산기', to: '칼로리 계산기' },

  { from: 'calculateur de protein intake calculator', to: 'calculateur d\'apport en protéines' },
  { from: 'calculadora de protein intake calculator', to: 'calculadora de ingesta de proteínas' },
  { from: 'protein intake calculator-Rechner', to: 'Proteine-Rechner' },
  { from: 'protein intake calculator 계산기', to: '단백질 섭취량 계산기' },

  { from: 'calculateur de water intake calculator', to: 'calculateur d\'hydratation quotidienne' },
  { from: 'calculadora de water intake calculator', to: 'calculadora de consumo de agua' },
  { from: 'water intake calculator-Rechner', to: 'Wasserbedarf-Rechner' },
  { from: 'water intake calculator 계산기', to: '수분 섭취량 계산기' },

  { from: 'calculateur de waist to hip ratio calculator', to: 'calculateur de rapport taille-hanche (RTH)' },
  { from: 'calculadora de waist to hip ratio calculator', to: 'calculadora de índice cintura-cadera (ICC)' },
  { from: 'waist to hip ratio calculator-Rechner', to: 'Taille-Hüft-Verhältnis-Rechner' },
  { from: 'waist to hip ratio calculator 계산기', to: '허리 둘레 비율 계산기' },

  { from: 'calculateur de body surface area calculator', to: 'calculateur de surface corporelle (BSA)' },
  { from: 'calculadora de body surface area calculator', to: 'calculadora de superficie corporal (ASC)' },
  { from: 'body surface area calculator-Rechner', to: 'Körperoberflächen-Rechner' },
  { from: 'body surface area calculator 계산기', to: '체표면적 계산기' },

  { from: 'calculateur de heart rate zone calculator', to: 'calculateur de zones de fréquence cardiaque' },
  { from: 'calculadora de heart rate zone calculator', to: 'calculadora de zonas de frecuencia cardíaca' },
  { from: 'heart rate zone calculator-Rechner', to: 'Herzfrequenzzonen-Rechner' },
  { from: 'heart rate zone calculator 계산기', to: '심박수 구간 계산기' },

  { from: 'calculateur de karvonen heart rate calculator', to: 'calculateur de fréquence cardiaque Karvonen' },
  { from: 'calculadora de karvonen heart rate calculator', to: 'calculadora de frecuencia cardíaca Karvonen' },
  { from: 'karvonen heart rate calculator-Rechner', to: 'Karvonen-Herzfrequenz-Rechner' },
  { from: 'karvonen heart rate calculator 계산기', to: '카르보넨 심박수 계산기' },

  { from: 'calculateur de 1rm calculator', to: 'calculateur de 1RM (charge maximale)' },
  { from: 'calculadora de 1rm calculator', to: 'calculadora de 1RM (repetición máxima)' },
  { from: '1rm calculator-Rechner', to: '1RM-Rechner' },
  { from: '1rm calculator 계산기', to: '1RM 1회 최대 중량 계산기' },

  { from: 'calculateur de one rep max calculator', to: 'calculateur de répétition maximale (1RM)' },
  { from: 'calculadora de one rep max calculator', to: 'calculadora de repetición máxima (1RM)' },
  { from: 'one rep max calculator-Rechner', to: 'Maximalkraft-Rechner' },
  { from: 'one rep max calculator 계산기', to: '최대 수축력 계산기' },

  { from: 'calculateur de pregnancy weight gain calculator', to: 'calculateur de prise de poids pendant la grossesse' },
  { from: 'calculadora de pregnancy weight gain calculator', to: 'calculadora de aumento de peso en el embarazo' },
  { from: 'pregnancy weight gain calculator-Rechner', to: 'Schwangerschaftsgewichts-Rechner' },
  { from: 'pregnancy weight gain calculator 계산기', to: '임신 중 체중 증가 계산기' },

  // 1RM Bench press phrase cleanups
  { from: 'for bench press, squat, and deadlift', to: 'pour le développé couché, le squat et le soulevé de terre' },
  { from: 'for bench press and squat', to: 'para press de banca y sentadilla' }
];

faqReplacements.forEach(({ from, to }) => {
  content = content.split(from).join(to);
});

fs.writeFileSync(file, content, 'utf8');
console.log("Successfully replaced ALL English leftover patterns in seoDatabase.ts!");
