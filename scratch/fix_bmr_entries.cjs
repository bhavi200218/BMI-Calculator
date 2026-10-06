const fs = require('fs');
const esbuild = require('esbuild');

const databaseFile = 'src/data/seoDatabase.ts';
const databaseContent = fs.readFileSync(databaseFile, 'utf8');

// Transform to JS object using esbuild
const transformed = esbuild.transformSync(databaseContent, { loader: 'ts', format: 'cjs' }).code;
fs.writeFileSync('scratch/temp_seo_db_check.cjs', transformed);
const { seoDatabase } = require('../scratch/temp_seo_db_check.cjs');

// Modify bmr-calculator
const bmr = seoDatabase['bmr-calculator'];

// ES
bmr.es.tableRows[2] = {
  col1: "Fórmula Katch-McArdle",
  col2: "Basada en Masa Corporal Magra",
  col3: "Calcula la estimación del BMR utilizando la masa corporal magra (LBM)"
};

// FR
bmr.fr.tableRows[2] = {
  col1: "Formule Katch-McArdle",
  col2: "Basée sur la Masse Corporelle Maigre",
  col3: "Calcule l'estimation du BMR à l'aide de la masse corporelle maigre (LBM)"
};
bmr.fr.faqs[4] = {
  question: "Quelle est la différence entre le BMR et le TDEE ?",
  answer: "Le BMR (métabolisme de base) mesure les calories brûlées au repos. Le TDEE (dépense énergétique totale) inclut l'activité physique quotidienne et l'exercice."
};

// DE
bmr.de.tableRows[2] = {
  col1: "Katch-McArdle Formel",
  col2: "Basierend auf Magerer Körpermasse",
  col3: "Berechnet die BMR-Schätzung anhand der mageren Körpermasse (LBM)"
};
bmr.de.faqs[4] = {
  question: "Was ist der Unterschied zwischen BMR und TDEE?",
  answer: "Der BMR (Grundumsatz) misst den Kalorienverbrauch im vollständigen Ruhezustand. Der TDEE (Gesamtenergieumsatz) berücksichtigt zusätzlich körperliche Aktivität und Bewegung."
};

// KO
bmr.ko.tableRows[2] = {
  col1: "Katch-McArdle 공식",
  col2: "제지방량(LBM) 기반",
  col3: "제지방량(LBM)을 바탕으로 기초대사량을 산출합니다"
};
bmr.ko.faqs[3] = {
  question: "온라인으로 신장과 체중을 통해 BMR을 정확히 계산하는 방법은 무엇인가요?",
  answer: "미플린-스토어 공식을 바탕으로 신장(cm), 체중(kg), 연령, 성별을 입력하면 브라우저에서 즉시 기초대사량을 산출할 수 있습니다."
};
bmr.ko.faqs[4] = {
  question: "BMR(기초대사량)과 TDEE(일일 총 에너지 소비량)의 차이는 무엇인가요?",
  answer: "BMR은 생명 유지를 위한 휴식 시 최소 에너지 소비량이며, TDEE는 신체 활동 및 운동량을 합산한 하루 총 칼로리 소비량입니다."
};

// HI
bmr.hi.tableRows[2] = {
  col1: "कैच-मैकआर्डल फॉर्मूला",
  col2: "लीन बॉडी मास पर आधारित",
  col3: "लीन बॉडी मास (LBM) का उपयोग करके बीएमआर का अनुमान लगाता है"
};

console.log("Updated in-memory database object.");
