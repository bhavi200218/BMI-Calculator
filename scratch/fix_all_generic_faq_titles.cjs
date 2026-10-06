const fs = require('fs');

const file = 'src/data/seoDatabase.ts';
let content = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');

// Clean up any remaining question patterns containing tool slugs in English
const genericReplacements = [
  // Spanish
  { from: '¿Cómo funciona la calculadora de ', to: '¿Cómo funciona la calculadora ' },
  { from: ' y qué mide?', to: ' y qué mide?' },

  // French
  { from: 'Comment fonctionne le calculateur de ', to: 'Comment fonctionne le calculateur ' },
  { from: ' et que mesure-t-il ?', to: ' et que mesure-t-il ?' },

  // German
  { from: '-Rechner und was misst er?', to: '-Rechner und was misst er?' },

  // Korean
  { from: ' 계산기의 원리와 측정 항목은 무엇인가요?', to: ' 계산기의 원리와 측정 항목은 무엇인가요?' },

  // Specific leftover phrases
  { from: 'the overweight cutoff', to: 'el límite de sobrepeso' },
  { from: 'risk cutoff', to: 'límite de riesgo' }
];

// Re-map specific slug questions to elegant native questions
const toolQuestionMap = {
  "bmi-chart": {
    es: "¿Cómo funciona la tabla de clasificación de IMC y qué mide?",
    fr: "Comment fonctionne le tableau de classification de l'IMC et que mesure-t-il ?",
    de: "Wie funktioniert die BMI-Klassifizierungstabelle und was misst sie?",
    ko: "BMI 비만 진단표의 원리와 측정 기준은 무엇인가요?"
  },
  "3d-body-visualizer": {
    es: "¿Cómo funciona el visualizador corporal 3D y qué mide?",
    fr: "Comment fonctionne le visualiseur corporel 3D et que mesure-t-il ?",
    de: "Wie funktioniert der 3D-Körper-Visualisierer und was misst er?",
    ko: "3D 체형 시각화 도구의 구동 원리는 무엇인가요?"
  },
  "bmi-calculator-india": {
    es: "¿Cómo funciona la calculadora de IMC para la India y qué mide?",
    fr: "Comment fonctionne le calculateur d'IMC pour l'Inde et que mesure-t-il ?",
    de: "Wie funktioniert der BMI-Rechner für Indien und was misst er?",
    ko: "인도 성인 표준 BMI 계산기의 원리와 측정 항목은 무엇인가요?"
  },
  "bmi-calculator-for-indians": {
    es: "¿Cómo funciona la calculadora de IMC para la población india y qué mide?",
    fr: "Comment fonctionne le calculateur d'IMC pour les Indiens et que mesure-t-il ?",
    de: "Wie funktioniert der BMI-Rechner für indische Erwachsene und was misst er?",
    ko: "인도 성인 전용 BMI 계산기의 원리와 측정 항목은 무엇인가요?"
  },
  "healthy-weight-by-height": {
    es: "¿Cómo funciona la calculadora de peso saludable por altura y qué mide?",
    fr: "Comment fonctionne le calculateur de poids santé par taille et que mesure-t-il ?",
    de: "Wie funktioniert der Rechner für gesunde Gewichtstabellen und was misst er?",
    ko: "신장별 표준 체중 계산기의 원리와 측정 항목은 무엇인가요?"
  },
  "diabetes-risk-calculator": {
    es: "¿Cómo funciona la calculadora de riesgo de diabetes y qué mide?",
    fr: "Comment fonctionne le calculateur de risque de diabète et que mesure-t-il ?",
    de: "Wie funktioniert der Diabetes-Risiko-Rechner und was misst er?",
    ko: "당뇨 위험 평가 계산기의 원리와 측정 항목은 무엇인가요?"
  },
  "asian-bmi-calculator": {
    es: "¿Cómo funciona la calculadora de IMC asiático y qué mide?",
    fr: "Comment fonctionne le calculateur d'IMC asiatique et que mesure-t-il ?",
    de: "Wie funktioniert der Rechner für asiatischen BMI und was misst er?",
    ko: "아시아인 전용 BMI 계산기의 원리와 측정 항목은 무엇인가요?"
  },
  "bmr-calculator": {
    es: "¿Cómo funciona la calculadora de BMR y qué mide?",
    fr: "Comment fonctionne le calculateur de BMR et que mesure-t-il ?",
    de: "Wie funktioniert der BMR-Rechner und was misst er?",
    ko: "BMR 기초대사량 계산기의 원리와 측정 항목은 무엇인가요?"
  },
  "tdee-calculator": {
    es: "¿Cómo funciona la calculadora de TDEE y qué mide?",
    fr: "Comment fonctionne le calculateur de TDEE et que mesure-t-il ?",
    de: "Wie funktioniert der TDEE-Rechner und was misst er?",
    ko: "TDEE 일일 총 에너지 계산기의 원리와 측정 항목은 무엇인가요?"
  },
  "maintenance-calorie-calculator": {
    es: "¿Cómo funciona la calculadora de calorías de mantenimiento y qué mide?",
    fr: "Comment fonctionne le calculateur de calories de maintien et que mesure-t-il ?",
    de: "Wie funktioniert der Erhaltungskalorien-Rechner und was misst er?",
    ko: "체중 유지 칼로리 계산기의 원리와 측정 항목은 무엇인가요?"
  },
  "body-fat-calculator": {
    es: "¿Cómo funciona la calculadora de grasa corporal y qué mide?",
    fr: "Comment fonctionne le calculateur de masse grasse et que mesure-t-il ?",
    de: "Wie funktioniert der Körperfett-Rechner und was misst er?",
    ko: "체지방률 계산기의 원리와 측정 항목은 무엇인가요?"
  },
  "lean-body-mass-calculator": {
    es: "¿Cómo funciona la calculadora de masa corporal magra y qué mide?",
    fr: "Comment fonctionne le calculateur de masse corporelle maigre et que mesure-t-il ?",
    de: "Wie funktioniert der Magerkurven-Rechner und was misst er?",
    ko: "제지방량 계산기의 원리와 측정 항목은 무엇인가요?"
  },
  "ideal-weight-calculator": {
    es: "¿Cómo funciona la calculadora de peso ideal y qué mide?",
    fr: "Comment fonctionne le calculateur de poids idéal et que mesure-t-il ?",
    de: "Wie funktioniert der Idealgewicht-Rechner und was misst er?",
    ko: "이상 체중 계산기의 원리와 측정 항목은 무엇인가요?"
  },
  "calorie-calculator": {
    es: "¿Cómo funciona la calculadora de calorías y qué mide?",
    fr: "Comment fonctionne le calculateur de calories et que mesure-t-il ?",
    de: "Wie funktioniert der Kalorienrechner und was misst er?",
    ko: "칼로리 계산기의 원리와 측정 항목은 무엇인가요?"
  },
  "protein-intake-calculator": {
    es: "¿Cómo funciona la calculadora de proteínas y qué mide?",
    fr: "Comment fonctionne le calculateur de protéines et que mesure-t-il ?",
    de: "Wie funktioniert der Proteine-Rechner und was misst er?",
    ko: "단백질 섭취량 계산기의 원리와 측정 항목은 무엇인가요?"
  },
  "water-intake-calculator": {
    es: "¿Cómo funciona la calculadora de agua y qué mide?",
    fr: "Comment fonctionne le calculateur d'hydratation et que mesure-t-il ?",
    de: "Wie funktioniert der Wasserbedarf-Rechner und was misst er?",
    ko: "수분 섭취량 계산기의 원리와 측정 항목은 무엇인가요?"
  },
  "macro-calculator": {
    es: "¿Cómo funciona la calculadora de macronutrientes y qué mide?",
    fr: "Comment fonctionne le calculateur de macronutriments et que mesure-t-il ?",
    de: "Wie funktioniert der Makronährstoff-Rechner und was misst er?",
    ko: "영양소(마크로) 비율 계산기의 원리와 측정 항목은 무엇인가요?"
  },
  "waist-to-hip-ratio-calculator": {
    es: "¿Cómo funciona la calculadora de índice cintura-cadera y qué mide?",
    fr: "Comment fonctionne le calculateur de rapport taille-hanche et que mesure-t-il ?",
    de: "Wie funktioniert der Taille-Hüft-Verhältnis-Rechner und was misst er?",
    ko: "허리 둘레 비율 계산기의 원리와 측정 항목은 무엇인가요?"
  },
  "body-surface-area-calculator": {
    es: "¿Cómo funciona la calculadora de superficie corporal y qué mide?",
    fr: "Comment fonctionne le calculateur de surface corporelle et que mesure-t-il ?",
    de: "Wie funktioniert der Körperoberflächen-Rechner und was misst er?",
    ko: "체표면적 계산기의 원리와 측정 항목은 무엇인가요?"
  },
  "heart-rate-zone-calculator": {
    es: "¿Cómo funciona la calculadora de zonas de frecuencia cardíaca y qué mide?",
    fr: "Comment fonctionne le calculateur de zones de fréquence cardiaque et que mesure-t-il ?",
    de: "Wie funktioniert der Herzfrequenzzonen-Rechner und was misst er?",
    ko: "심박수 구간 계산기의 원리와 측정 항목은 무엇인가요?"
  },
  "karvonen-heart-rate-calculator": {
    es: "¿Cómo funciona la calculadora de frecuencia cardíaca Karvonen y qué mide?",
    fr: "Comment fonctionne le calculateur de fréquence cardiaque Karvonen et que mesure-t-il ?",
    de: "Wie funktioniert der Karvonen-Herzfrequenz-Rechner und was misst er?",
    ko: "카르보넨 심박수 계산기의 원리와 측정 항목은 무엇인가요?"
  },
  "1rm-calculator": {
    es: "¿Cómo funciona la calculadora de 1RM y qué mide?",
    fr: "Comment fonctionne le calculateur de 1RM et que mesure-t-il ?",
    de: "Wie funktioniert der 1RM-Rechner und was misst er?",
    ko: "1RM 1회 최대 중량 계산기의 원리와 측정 항목은 무엇인가요?"
  },
  "one-rep-max-calculator": {
    es: "¿Cómo funciona la calculadora de repetición máxima (1RM) y qué mide?",
    fr: "Comment fonctionne le calculateur de répétition maximale (1RM) et que mesure-t-il ?",
    de: "Wie funktioniert der Maximalkraft-Rechner und was misst er?",
    ko: "최대 수축력 계산기의 원리와 측정 항목은 무엇인가요?"
  },
  "pregnancy-weight-gain-calculator": {
    es: "¿Cómo funciona la calculadora de aumento de peso en el embarazo y qué mide?",
    fr: "Comment fonctionne le calculateur de prise de poids pendant la grossesse et que mesure-t-il ?",
    de: "Wie funktioniert der Schwangerschaftsgewichts-Rechner und was misst er?",
    ko: "임신 중 체중 증가 계산기의 원리와 측정 항목은 무엇인가요?"
  }
};

Object.keys(toolQuestionMap).forEach(slug => {
  const map = toolQuestionMap[slug];
  content = content.replace(new RegExp(`"question": "\\?Cómo funciona la calculadora de ${slug} y qué mide\\?"`, 'g'), `"question": "${map.es}"`);
  content = content.replace(new RegExp(`"question": "Comment fonctionne le calculateur de ${slug} et que mesure-t-il \\?"`, 'g'), `"question": "${map.fr}"`);
  content = content.replace(new RegExp(`"question": "Wie funktioniert der ${slug}-Rechner und was misst er\\?"`, 'g'), `"question": "${map.de}"`);
  content = content.replace(new RegExp(`"question": "${slug} 계산기의 원리와 측정 항목은 무엇인가요\\?"`, 'g'), `"question": "${map.ko}"`);
});

fs.writeFileSync(file, content, 'utf8');
console.log("Cleaned up generic tool questions across all tools!");
