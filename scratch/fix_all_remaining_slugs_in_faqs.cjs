const fs = require('fs');

const file = 'src/data/seoDatabase.ts';
let content = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');

const replacements = [
  // Raw slug cleanups in questions
  { from: 'calculadora de asian bmi calculator', to: 'calculadora de IMC asiático' },
  { from: 'calculadora de diabetes risk calculator', to: 'calculadora de riesgo de diabetes' },
  { from: 'calculadora de healthy weight by height', to: 'calculadora de peso saludable por altura' },
  { from: 'calculadora de bmi calculator india', to: 'calculadora de IMC para India' },
  { from: 'calculadora de bmi calculator for indians', to: 'calculadora de IMC para la población india' },

  { from: 'calculateur de asian bmi calculator', to: 'calculateur d\'IMC asiatique' },
  { from: 'calculateur de diabetes risk calculator', to: 'calculateur de risque de diabète' },
  { from: 'calculateur de healthy weight by height', to: 'calculateur de poids santé par taille' },
  { from: 'calculateur de bmi calculator india', to: 'calculateur d\'IMC pour l\'Inde' },
  { from: 'calculateur de bmi calculator for indians', to: 'calculateur d\'IMC pour les Indiens' },

  { from: 'asian bmi calculator-Rechner', to: 'Rechner für asiatischen BMI' },
  { from: 'diabetes risk calculator-Rechner', to: 'Diabetes-Risiko-Rechner' },
  { from: 'healthy weight by height-Rechner', to: 'Rechner für gesunde Gewichtstabellen' },
  { from: 'bmi calculator india-Rechner', to: 'BMI-Rechner für Indien' },
  { from: 'bmi calculator for indians-Rechner', to: 'BMI-Rechner für indische Erwachsene' },

  { from: 'asian bmi calculator 계산기', to: '아시아인 전용 BMI 계산기' },
  { from: 'diabetes risk calculator 계산기', to: '당뇨 위험 평가 계산기' },
  { from: 'healthy weight by height 계산기', to: '신장별 표준 체중 계산기' },
  { from: 'bmi calculator india 계산기', to: '인도 표준 BMI 계산기' },
  { from: 'bmi calculator for indians 계산기', to: '인도 성인 전용 BMI 계산기' },

  // Remaining generic slug patterns
  { from: 'by height for men and women?', to: 'por altura para hombres y mujeres?' },
  { from: 'by height for men and women ?', to: 'selon la taille pour hommes et femmes ?' },
  { from: 'by height for men and women', to: 'nach Körpergröße für Männer und Frauen' },
  { from: 'according to height?', to: 'según la altura?' },
  { from: 'according to height ?', to: 'selon la taille ?' },
  { from: 'according to height', to: 'nach Körpergröße' },
  { from: 'for Asian adults?', to: 'para adultos asiáticos?' },
  { from: 'for Asian adults ?', to: 'pour les adultes asiatiques ?' },
  { from: 'for Asian adults', to: 'für asiatische Erwachsene' },

  // Generic tool slug question cleanups
  { from: 'calculadora de bmr calculator', to: 'calculadora de tasa metabólica basal (BMR)' },
  { from: 'calculadora de tdee calculator', to: 'calculadora de gasto energético total (TDEE)' },
  { from: 'calculadora de maintenance calorie calculator', to: 'calculadora de calorías de mantenimiento' },
  { from: 'calculadora de lean body mass calculator', to: 'calculadora de masa corporal magra' },
  { from: 'calculadora de ideal weight calculator', to: 'calculadora de peso ideal' },
  { from: 'calculadora de calorie calculator', to: 'calculadora de calorías' },
  { from: 'calculadora de protein intake calculator', to: 'calculadora de proteínas' },
  { from: 'calculadora de water intake calculator', to: 'calculadora de agua' },
  { from: 'calculadora de waist to hip ratio calculator', to: 'calculadora de índice cintura-cadera' },
  { from: 'calculadora de body surface area calculator', to: 'calculadora de superficie corporal' },
  { from: 'calculadora de heart rate zone calculator', to: 'calculadora de zonas de frecuencia cardíaca' },
  { from: 'calculadora de karvonen heart rate calculator', to: 'calculadora de frecuencia cardíaca Karvonen' },
  { from: 'calculadora de 1rm calculator', to: 'calculadora de 1RM' },
  { from: 'calculadora de one rep max calculator', to: 'calculadora de repetición máxima (1RM)' },
  { from: 'calculadora de pregnancy weight gain calculator', to: 'calculadora de aumento de peso en el embarazo' },

  { from: 'calculateur de bmr calculator', to: 'calculateur de métabolisme de base (BMR)' },
  { from: 'calculateur de tdee calculator', to: 'calculateur de dépense énergétique quotidienne (TDEE)' },
  { from: 'calculateur de maintenance calorie calculator', to: 'calculateur de calories de maintien' },
  { from: 'calculateur de lean body mass calculator', to: 'calculateur de masse corporelle maigre' },
  { from: 'calculateur de ideal weight calculator', to: 'calculateur de poids idéal' },
  { from: 'calculateur de calorie calculator', to: 'calculateur de calories' },
  { from: 'calculateur de protein intake calculator', to: 'calculateur de protéines' },
  { from: 'calculateur de water intake calculator', to: 'calculateur d\'hydratation' },
  { from: 'calculateur de waist to hip ratio calculator', to: 'calculateur de rapport taille-hanche' },
  { from: 'calculateur de body surface area calculator', to: 'calculateur de surface corporelle' },
  { from: 'calculateur de heart rate zone calculator', to: 'calculateur de zones de fréquence cardiaque' },
  { from: 'calculateur de karvonen heart rate calculator', to: 'calculateur de fréquence cardiaque Karvonen' },
  { from: 'calculateur de 1rm calculator', to: 'calculateur de 1RM' },
  { from: 'calculateur de one rep max calculator', to: 'calculateur de répétition maximale (1RM)' },
  { from: 'calculateur de pregnancy weight gain calculator', to: 'calculateur de prise de poids pendant la grossesse' },

  { from: 'bmr calculator-Rechner', to: 'BMR-Rechner' },
  { from: 'tdee calculator-Rechner', to: 'TDEE-Rechner' },
  { from: 'maintenance calorie calculator-Rechner', to: 'Erhaltungskalorien-Rechner' },
  { from: 'lean body mass calculator-Rechner', to: 'Magerkurven-Rechner' },
  { from: 'ideal weight calculator-Rechner', to: 'Idealgewicht-Rechner' },
  { from: 'calorie calculator-Rechner', to: 'Kalorienrechner' },
  { from: 'protein intake calculator-Rechner', to: 'Proteine-Rechner' },
  { from: 'water intake calculator-Rechner', to: 'Wasserbedarf-Rechner' },
  { from: 'waist to hip ratio calculator-Rechner', to: 'Taille-Hüft-Verhältnis-Rechner' },
  { from: 'body surface area calculator-Rechner', to: 'Körperoberflächen-Rechner' },
  { from: 'heart rate zone calculator-Rechner', to: 'Herzfrequenzzonen-Rechner' },
  { from: 'karvonen heart rate calculator-Rechner', to: 'Karvonen-Herzfrequenz-Rechner' },
  { from: '1rm calculator-Rechner', to: '1RM-Rechner' },
  { from: 'one rep max calculator-Rechner', to: 'Maximalkraft-Rechner' },
  { from: 'pregnancy weight gain calculator-Rechner', to: 'Schwangerschaftsgewichts-Rechner' },

  { from: 'bmr calculator 계산기', to: 'BMR 기초대사량 계산기' },
  { from: 'tdee calculator 계산기', to: 'TDEE 일일 총 에너지 계산기' },
  { from: 'maintenance calorie calculator 계산기', to: '체중 유지 칼로리 계산기' },
  { from: 'lean body mass calculator 계산기', to: '제지방량 계산기' },
  { from: 'ideal weight calculator 계산기', to: '이상 체중 계산기' },
  { from: 'calorie calculator 계산기', to: '칼로리 계산기' },
  { from: 'protein intake calculator 계산기', to: '단백질 섭취량 계산기' },
  { from: 'water intake calculator 계산기', to: '수분 섭취량 계산기' },
  { from: 'waist to hip ratio calculator 계산기', to: '허리 둘레 비율 계산기' },
  { from: 'body surface area calculator 계산기', to: '체표면적 계산기' },
  { from: 'heart rate zone calculator 계산기', to: '심박수 구간 계산기' },
  { from: 'karvonen heart rate calculator 계산기', to: '카르보넨 심박수 계산기' },
  { from: '1rm calculator 계산기', to: '1RM 1회 최대 중량 계산기' },
  { from: 'one rep max calculator 계산기', to: '최대 수축력 계산기' },
  { from: 'pregnancy weight gain calculator 계산기', to: '임신 중 체중 증가 계산기' }
];

replacements.forEach(({ from, to }) => {
  content = content.split(from).join(to);
});

fs.writeFileSync(file, content, 'utf8');
console.log("Applied all remaining slug translations in seoDatabase.ts!");
