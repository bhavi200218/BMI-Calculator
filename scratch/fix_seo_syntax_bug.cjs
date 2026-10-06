const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'seoDatabase.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Replace corrupted line 2128 block
const corruptedBlock = `            "faqs": [
        {
                "question": "Wie funktioniert der BMI-Rechner für indische Erwachsene?",
                "answer": "Der Rechner verwendet die ICMR- und WHO-Südostasien-Kriterien, um Ihren BMI und den gesunden Bereich (18.5 – 22.9 kg/m²) zu berechnen."
        },
        {
                "question": "Warum liegt der Grenzwert für Übergewicht bei Indern bei 23.0 statt 25.0?",
                "answer": "Aufgrund höherer kardiometabolischer Risiken bei geringerem BMI empfehlen ICMR und WHO einen niedrigeren Grenzwert von 23.0 kg/m² für indische Erwachsene."
        },
        {
                "question": "Wie berechnet man das ideale Körpergewicht nach der Größe in Indien?",
                "answer": "Das ideale Gewicht liegt vor, wenn der BMI zwischen 18.5 und 22.9 kg/m² liegt. Es wird mit der Formel: Gewicht (kg) / [Größe (m)]² berechnet."
        }
]² berechnet."
        }
      ]`;

const cleanDeFaqs = `      "faqs": [
        {
          "question": "Wie funktioniert der BMI-Rechner für indische Erwachsene?",
          "answer": "Der Rechner verwendet die ICMR- und WHO-Südostasien-Kriterien, um Ihren BMI und den gesunden Bereich (18.5 – 22.9 kg/m²) zu berechnen."
        },
        {
          "question": "Warum liegt der Grenzwert für Übergewicht bei Indern bei 23.0 statt 25.0?",
          "answer": "Aufgrund höherer kardiometabolischer Risiken bei geringerem BMI empfehlen ICMR und WHO einen niedrigeren Grenzwert von 23.0 kg/m² für indische Erwachsene."
        },
        {
          "question": "Wie berechnet man das ideale Körpergewicht nach der Größe in Indien?",
          "answer": "Das ideale Gewicht liegt vor, wenn der BMI zwischen 18.5 und 22.9 kg/m² liegt. Es wird mit der Formel: Gewicht (kg) / [Größe (m)]² berechnet."
        }
      ]`;

if (content.includes(']² berechnet."')) {
  content = content.replace(corruptedBlock, cleanDeFaqs);
  console.log('Fixed corrupted block in seoDatabase.ts!');
} else {
  console.log('Corrupted block string exact match not found, doing string split replacement...');
  const idx = content.indexOf(']² berechnet."');
  if (idx !== -1) {
    const start = content.lastIndexOf('"faqs": [', idx);
    const end = content.indexOf('"ko": {', idx);
    const textToReplace = content.slice(start, end);
    const replacement = '"faqs": ' + JSON.stringify([
      {
        "question": "Wie funktioniert der BMI-Rechner für indische Erwachsene?",
        "answer": "Der Rechner verwendet die ICMR- und WHO-Südostasien-Kriterien, um Ihren BMI und den gesunden Bereich (18.5 – 22.9 kg/m²) zu berechnen."
      },
      {
        "question": "Warum liegt der Grenzwert für Übergewicht bei Indern bei 23.0 statt 25.0?",
        "answer": "Aufgrund höherer kardiometabolischer Risiken bei geringerem BMI empfehlen ICMR und WHO einen niedrigeren Grenzwert von 23.0 kg/m² für indische Erwachsene."
      },
      {
        "question": "Wie berechnet man das ideale Körpergewicht nach der Größe in Indien?",
        "answer": "Das ideale Gewicht liegt vor, wenn der BMI zwischen 18.5 und 22.9 kg/m² liegt. Es wird mit der Formel: Gewicht (kg) / [Größe (m)]² berechnet."
      }
    ], null, 8).trim() + '\n    },\n    ';
    content = content.slice(0, start) + replacement + content.slice(end);
    console.log('Successfully fixed syntax error using index slice!');
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Saved clean seoDatabase.ts!');
