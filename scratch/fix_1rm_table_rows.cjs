const fs = require('fs');

const file = 'src/data/seoDatabase.ts';
let content = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');

// 1RM FAQ Question & Answer softening
content = content.replace(
  `"question": "Is the 1RM calculator accurate para press de banca y sentadilla?",\n          "answer": "Yes, formulas like Epley and Brzycki are accurate within 2-4% for rep ranges between 1 and 10 reps."`,
  `"question": "How do submaximal 1RM estimation formulas work?",\n          "answer": "Submaximal formulas like Epley and Brzycki estimate your 1-rep maximum based on lighter set weights and rep counts, avoiding heavy single-rep strain."`
);

// 1RM Table Rows
const replacements = [
  // ES 1RM
  { from: 'Rango de referencia Absolute maximum strength single', to: 'Carga máxima absoluta de fuerza (100% 1RM)' },
  { from: 'Rango de referencia Heavy strength training load', to: 'Carga pesada de entrenamiento de fuerza (95% 1RM)' },
  { from: 'Rango de referencia Power lifting strength sets', to: 'Series de fuerza y levantamiento (93% 1RM)' },
  { from: 'Rango de referencia Hypertrophy & heavy strength blend', to: 'Rango de desarrollo de fuerza muscular (87% 1RM)' },
  { from: 'Rango de referencia Hypertrophy muscle building range', to: 'Rango de hipertrofia y construcción muscular (80% 1RM)' },
  { from: 'Rango de referencia Volume hypertrophy & endurance', to: 'Resistencia muscular e hipertrofia de volumen (75% 1RM)' },

  // FR 1RM
  { from: 'Plage de référence Absolute maximum strength single', to: 'Charge maximale absolue de force (100% 1RM)' },
  { from: 'Plage de référence Heavy strength training load', to: 'Charge lourde d\'entraînement de force (95% 1RM)' },
  { from: 'Plage de référence Power lifting strength sets', to: 'Séries de force et d\'haltérophilie (93% 1RM)' },
  { from: 'Plage de référence Hypertrophy & heavy strength blend', to: 'Plage de développement de la force (87% 1RM)' },
  { from: 'Plage de référence Hypertrophy muscle building range', to: 'Plage de construction musculaire (80% 1RM)' },
  { from: 'Plage de référence Volume hypertrophy & endurance', to: 'Endurance musculaire et hypertrophie de volume (75% 1RM)' },

  // DE 1RM
  { from: 'Referenzbereich Absolute maximum strength single', to: 'Maximale Kraftleistung (100% 1RM)' },
  { from: 'Referenzbereich Heavy strength training load', to: 'Schwere Krafttraining-Belastung (95% 1RM)' },
  { from: 'Referenzbereich Power lifting strength sets', to: 'Kraftsätze für Maximalkraft (93% 1RM)' },
  { from: 'Referenzbereich Hypertrophy & heavy strength blend', to: 'Bereich für schweren Kraftaufbau (87% 1RM)' },
  { from: 'Referenzbereich Hypertrophy muscle building range', to: 'Bereich für Muskelaufbau (80% 1RM)' },
  { from: 'Referenzbereich Volume hypertrophy & endurance', to: 'Muskelausdauer und Volumen-Hypertrophie (75% 1RM)' },

  // KO 1RM
  { from: '참조 범위 Absolute maximum strength single', to: '단일 최고 근력 측정 구간 (100% 1RM)' },
  { from: '참조 범위 Heavy strength training load', to: '고중량 근력 훈련 구간 (95% 1RM)' },
  { from: '참조 범위 Power lifting strength sets', to: '파워 리프팅 세트 구간 (93% 1RM)' },
  { from: '참조 범위 Hypertrophy & heavy strength blend', to: '고중량 근력 발달 구간 (87% 1RM)' },
  { from: '참조 범위 Hypertrophy muscle building range', to: '근비대 집중 훈련 구간 (80% 1RM)' },
  { from: '참조 범위 Volume hypertrophy & endurance', to: '근지구력 및 볼륨 훈련 구간 (75% 1RM)' }
];

replacements.forEach(({ from, to }) => {
  content = content.split(from).join(to);
});

fs.writeFileSync(file, content, 'utf8');
console.log("Cleaned up 1RM table rows and softened claims in seoDatabase.ts!");
