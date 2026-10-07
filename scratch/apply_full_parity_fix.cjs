const fs = require('fs');
const path = require('path');

const seoPath = path.join(__dirname, '../src/data/seoDatabase.ts');
let content = fs.readFileSync(seoPath, 'utf8');

// 1. Fix line 802 & 812 in bmi-chart
content = content.replace(
  '"col3": "Mild underweight reference threshold"',
  '"col3": "Mild underweight reference range"'
);
content = content.replace(
  '"col3": " (Asian cutoff: 23.0 kg/m²)"',
  '"col3": "Pre-obesity range (Asian cutoff: 23.0 kg/m²)"'
);

// 2. Fix bmi-calculator-india line 1570 & FAQ line 1607
content = content.replace(
  '          "col1": "Underweight",\n          "col2": "< 18.5 kg/m²",\n          "col3": " for Indian adults"',
  '          "col1": "Underweight",\n          "col2": "< 18.5 kg/m²",\n          "col3": "Underweight cutoff threshold (< 18.5 kg/m²)"'
);
content = content.replace(
  '"question": "¿Cuáles son las pautas de circunferencia de cintura para adultos indios?",\n          "answer": "The Indian Council of Medical Research (ICMR) recommends keeping waist circumference under 90 cm (35 inches) for Indian men and under 80 cm (31.5 inches) for Indian women to reduce abdominal fat risk."',
  '"question": "What are the waist circumference guidelines for Indian adults?",\n          "answer": "The Indian Council of Medical Research (ICMR) recommends keeping waist circumference under 90 cm (35 inches) for Indian men and under 80 cm (31.5 inches) for Indian women to reduce abdominal fat risk."'
);

// 3. Fix bmi-calculator-india ES block
const oldIndiaEs = `    "es": {
      "eyebrow": "Estándares de Referencia de Salud",
      "title": "BMI Calculator India – Asian BMI Cutoff Reference (BMI 23) – Guía y Calculadora",
      "intro": "Herramienta de cálculo y referencia educativa diseñada según los estándares de salud publicados de la OMS y CDC. Calcula tus métricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "Fórmula de Referencia Estándar",
      "formulaDesc": "Calculado utilizando ecuaciones estándar validadas.",
      "formulaCode": "Asian BMI = Weight (kg) / [Height (cm) / 100]²",
      "tableTitle": "Tabla de Referencia Estándar",
      "tableRows": [
        {
          "col1": "Categoría / Nivel 1",
          "col2": "< 18.5 kg/m²",
          "col3": "Umbral de referencia para bajo peso"
        },
        {
          "col1": "Categoría / Nivel 2",
          "col2": "18.5 – 22.9 kg/m²",
          "col3": "Rango saludable óptimo para adultos indios"
        },
        {
          "col1": "Categoría / Nivel 3",
          "col2": "23.0 – 24.9 kg/m²",
          "col3": "Umbral de riesgo cardiometabólico elevado (Corte de IMC 23)"
        },
        {
          "col1": "Categoría / Nivel 4",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": "Clasificación de obesidad Clase I según OMS Asia-Pacífico"
        },
        {
          "col1": "Categoría / Nivel 5",
          "col2": "≥ 30.0 kg/m²",
          "col3": "Clasificación de obesidad severa de alto riesgo"
        }
      ],
      "faqs": [
        {
          "question": "¿Cómo funciona la calculadora de IMC para India y qué mide?",
          "answer": "Esta calculadora evalúa tus datos personales utilizando ecuaciones validadas. Proporciona una estimación educativa para ayudarte a comprender tu estado de salud y referencias estándar."
        },
        {
          "question": "¿Por qué el IMC 23 es el umbral de sobrepeso en India?",
          "answer": "Epidemiological research shows that South Asian populations carry higher abdominal visceral fat and face elevated cardiometabolic risks (such as type 2 diabetes and hypertension) at lower body mass index levels compared to Western populations."
        },
        {
          "question": "Cómo calculate BMI in India using kg and cm?",
          "answer": "To calculate BMI in kg and cm: Convert height in cm to meters by dividing by 100. Multiply height in meters by itself to get height squared. Divide weight in kg by height squared. Example: 65 kg / (1.68m x 1.68m) = 23.0 BMI."
        },
        {
          "question": "Quelles sont les directives de tour de taille pour les Indiens?",
          "answer": "The Indian Council of Medical Research (ICMR) recommends keeping waist circumference under 90 cm (35 inches) for Indian men and under 80 cm (31.5 inches) for Indian women to reduce abdominal fat risk."
        },
        {
          "question": "¿Cuál es la tabla de peso e estatura ideal para adultos indios?",
          "answer": "An ideal weight for Indian adults keeps BMI between 18.5 and 22.9 kg/m². For example, for an Indian male or female of height 168 cm (5 ft 6 in), the healthy weight range is 52.2 kg to 64.6 kg."
        },
        {
          "question": "¿Cómo se calcula el IMC para adultos indios?",
          "answer": "Para calcular el IMC en indios, divide el peso en kg por la altura en metros al cuadrado. Por ejemplo, 65 kg / (1.68 m x 1.68 m) = 23.0 kg/m² (sobrepeso según el punto de corte de la OMS para Asia)."
        },
        {
          "question": "¿Cuál es la tabla de peso ideal para la población india?",
          "answer": "Un peso ideal para adultos indios mantiene el IMC entre 18.5 y 22.9 kg/m² según las pautas de referencia del ICMR y la OMS."
        }
      ]
    }`;

const newIndiaEs = `    "es": {
      "eyebrow": "Pautas del ICMR y la OMS para el Sur de Asia",
      "title": "Calculadora de IMC para India – Valores de Referencia y Gráfico de Salud",
      "intro": "Calculadora de IMC para la población india en línea basada en las directrices de consenso de la OMS y el ICMR. A diferencia de los estándares occidentales donde el sobrepeso comienza en un IMC de 25.0, las pautas para el sur de Asia establecen 23.0 kg/m² como punto de corte para sobrepeso debido a una mayor acumulación de grasa visceral a pesos corporales más bajos.",
      "formulaTitle": "Fórmula del IMC para India según ICMR y la OMS (kg y cm)",
      "formulaDesc": "Métrico: IMC = Peso (kg) / [Altura (m)]² | Umbral de sobrepeso para la población india: IMC ≥ 23.0 kg/m² | Umbral de obesidad: IMC ≥ 25.0 kg/m²",
      "formulaCode": "IMC = Peso (kg) / [(Altura en cm / 100)²]",
      "tableTitle": "Tabla Oficial de IMC para Adultos Indios (Normas ICMR y OMS)",
      "tableRows": [
        {
          "col1": "Bajo Peso (< 18.5 kg/m²)",
          "col2": "< 18.5 kg/m²",
          "col3": "Umbral de referencia para bajo peso (< 18.5 kg/m²)"
        },
        {
          "col1": "Peso Normal Óptimo (18.5 – 22.9 kg/m²)",
          "col2": "18.5 – 22.9 kg/m²",
          "col3": "Rango saludable óptimo para adultos indios"
        },
        {
          "col1": "Sobrepeso / En Riesgo (23.0 – 24.9 kg/m²)",
          "col2": "23.0 – 24.9 kg/m²",
          "col3": "Umbral de riesgo cardiometabólico elevado (Corte de IMC 23)"
        },
        {
          "col1": "Obesidad Clase I (25.0 – 29.9 kg/m²)",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": "Clasificación de obesidad Clase I según OMS Asia-Pacífico"
        },
        {
          "col1": "Obesidad Clase II (≥ 30.0 kg/m²)",
          "col2": "≥ 30.0 kg/m²",
          "col3": "Clasificación de obesidad severa de alto riesgo"
        }
      ],
      "faqs": [
        {
          "question": "¿Cómo funciona la calculadora de IMC para India y qué mide?",
          "answer": "Esta calculadora evalúa tus datos personales utilizando ecuaciones validadas según las directrices del ICMR y la OMS para estimar el IMC y los rangos de peso saludable para adultos indios."
        },
        {
          "question": "¿Por qué el IMC 23 es el umbral de sobrepeso en India?",
          "answer": "La investigación epidemiológica muestra que las poblaciones del sur de Asia acumulan una mayor cantidad de grasa visceral abdominal y enfrentan mayores riesgos cardiometabólicos (como diabetes tipo 2 e hipertensión) con niveles de IMC más bajos en comparación con las poblaciones occidentales."
        },
        {
          "question": "¿Cómo calcular el IMC en India usando kg y cm?",
          "answer": "Para calcular el IMC en kg y cm: Convierte la altura en cm a metros dividiendo entre 100. Multiplica la altura en metros por sí misma. Divide el peso en kg entre la altura al cuadrado. Ejemplo: 65 kg / (1.68 m x 1.68 m) = 23.0 IMC."
        },
        {
          "question": "¿Cuáles son las pautas de circunferencia de cintura para adultos indios?",
          "answer": "El Consejo Indio de Investigación Médica (ICMR) recomienda mantener la circunferencia de la cintura por debajo de 90 cm para los hombres indios y por debajo de 80 cm para las mujeres indias para reducir el riesgo de adiposidad abdominal."
        },
        {
          "question": "¿Cuál es la tabla de peso y estatura ideal para adultos indios?",
          "answer": "Un peso ideal para adultos indios mantiene el IMC entre 18.5 y 22.9 kg/m². Por ejemplo, para una estatura de 168 cm (5 pies 6 pulgadas), el rango de peso saludable es de 52.2 kg a 64.6 kg."
        }
      ]
    }`;

if (content.includes(oldIndiaEs)) {
  content = content.replace(oldIndiaEs, newIndiaEs);
  console.log('✅ Replaced bmi-calculator-india ES block');
} else {
  console.log('⚠️ Could not match oldIndiaEs exactly, checking partial...');
}

// 4. Fix bmi-calculator-india FR block
const oldIndiaFr = `    "fr": {
      "eyebrow": "Normes de Référence de Santé",
      "title": "BMI Calculator India – Asian BMI Cutoff Reference (BMI 23) – Outil de Référence",
      "intro": "Outil de calcul et de référence éducatif conçu selon les normes de santé publiées de l'OMS et du CDC. Calculez vos métriques et consultez les plages de référence.",
      "formulaTitle": "Formule de Référence Standard",
      "formulaDesc": "Calculé à l'aide d'équations standards validées.",
      "formulaCode": "Asian BMI = Weight (kg) / [Height (cm) / 100]²",
      "tableTitle": "Tableau de Référence Standard",
      "tableRows": [
        {
          "col1": "Catégorie / Niveau 1",
          "col2": "< 18.5 kg/m²",
          "col3": "Seuil de référence d'insuffisance pondérale"
        },
        {
          "col1": "Catégorie / Niveau 2",
          "col2": "18.5 – 22.9 kg/m²",
          "col3": "Plage de poids santé optimale pour les adultes indiens"
        },
        {
          "col1": "Catégorie / Niveau 3",
          "col2": "23.0 – 24.9 kg/m²",
          "col3": "Seuil de risque cardiométabolique accru (IMC ≥ 23)"
        },
        {
          "col1": "Catégorie / Niveau 4",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": "Obésité de classe I selon les critères OMS Asie-Pacifique"
        },
        {
          "col1": "Catégorie / Niveau 5",
          "col2": "≥ 30.0 kg/m²",
          "col3": "Classification d'obésité sévére à haut risque"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur d'IMC pour l'Inde et que mesure-t-il ?",
          "answer": "Ce calculateur évalue vos données personnelles à l'aide d'équations validées. Il fournit une estimation éducative pour vous aider à comprendre vos métriques et références standards."
        },
        {
          "question": "Pourquoi l'IMC 23 est-il le seuil de surpoids en Inde?",
          "answer": "Epidemiological research shows that South Asian populations carry higher abdominal visceral fat and face elevated cardiometabolic risks (such as type 2 diabetes and hypertension) at lower body mass index levels compared to Western populations."
        },
        {
          "question": "Comment calculate BMI in India using kg and cm?",
          "answer": "To calculate BMI in kg and cm: Convert height in cm to meters by dividing by 100. Multiply height in meters by itself to get height squared. Divide weight in kg by height squared. Example: 65 kg / (1.68m x 1.68m) = 23.0 BMI."
        },
        {
          "question": "Welche Richtlinien gelten für den Taillenumfang indischer Erwachsener?",
          "answer": "The Indian Council of Medical Research (ICMR) recommends keeping waist circumference under 90 cm (35 inches) for Indian men and under 80 cm (31.5 inches) for Indian women to reduce abdominal fat risk."
        },
        {
          "question": "Quelle est la table de poids et taille idéale pour les Indiens?",
          "answer": "An ideal weight for Indian adults keeps BMI between 18.5 and 22.9 kg/m². For example, for an Indian male or female of height 168 cm (5 ft 6 in), the healthy weight range is 52.2 kg to 64.6 kg."
        },
        {
          "question": "Comment calculer l'IMC pour les adultes indiens ?",
          "answer": "Pour calculer l'IMC chez les Indiens, divisez le poids en kg par la taille en mètres au carré. Par exemple, 65 kg / (1.68 m x 1.68 m) = 23.0 kg/m² (surpoids selon le seuil asiatique de l'OMS)."
        },
        {
          "question": "Quel est le tableau de poids idéal pour la population indienne ?",
          "answer": "Un poids idéal pour les adultes indiens maintient l'IMC entre 18.5 et 22.9 kg/m² selon les directives de l'ICMR et de l'OMS."
        }
      ]
    }`;

const newIndiaFr = `    "fr": {
      "eyebrow": "Directives ICMR et OMS pour l'Asie du Sud",
      "title": "Calculateur d'IMC Inde – Seuils Asiatiques et Références de Santé",
      "intro": "Calculez votre Indice de Masse Corporelle (IMC) selon les directives de consensus de l'OMS et de l'ICMR (Conseil indien de la recherche médicale) pour la population indienne. Contrairement aux normes occidentales où le surpoids commence à un IMC de 25,0, les recommandations pour l'Asie du Sud fixent le seuil de surpoids à 23,0 kg/m² en raison d'une accumulation plus précoce de graisse viscérale.",
      "formulaTitle": "Formule d'IMC Indien selon l'ICMR et l'OMS (kg & cm)",
      "formulaDesc": "Métrique : IMC = Poids (kg) / [Taille (m)]² | Seuil de surpoids pour la population indienne : IMC ≥ 23,0 kg/m² | Seuil d'obésité : IMC ≥ 25,0 kg/m²",
      "formulaCode": "IMC = Poids (kg) / [(Taille en cm / 100)²]",
      "tableTitle": "Tableau Officiel d'IMC pour Adultes Indiens (Normes ICMR et OMS)",
      "tableRows": [
        {
          "col1": "Insuffisance Pondérale (< 18.5 kg/m²)",
          "col2": "< 18.5 kg/m²",
          "col3": "Seuil de référence d'insuffisance pondérale (< 18,5 kg/m²)"
        },
        {
          "col1": "Poids Normal Optimal (18.5 – 22.9 kg/m²)",
          "col2": "18.5 – 22.9 kg/m²",
          "col3": "Plage de poids santé optimale pour les adultes indiens"
        },
        {
          "col1": "Surpoids / En Risque (23.0 – 24.9 kg/m²)",
          "col2": "23.0 – 24.9 kg/m²",
          "col3": "Seuil de risque cardiométabolique accru (IMC ≥ 23)"
        },
        {
          "col1": "Obésité Classe I (25.0 – 29.9 kg/m²)",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": "Obésité de classe I selon les critères OMS Asie-Pacifique"
        },
        {
          "col1": "Obésité Classe II (≥ 30.0 kg/m²)",
          "col2": "≥ 30.0 kg/m²",
          "col3": "Classification d'obésité sévère à haut risque"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur d'IMC pour l'Inde et que mesure-t-il ?",
          "answer": "Ce calculateur évalue vos données personnelles à l'aide d'équations validées selon les directives de l'ICMR et de l'OMS afin de déterminer votre IMC et vos plages de poids santé."
        },
        {
          "question": "Pourquoi l'IMC 23 est-il le seuil de surpoids en Inde ?",
          "answer": "Les recherches épidémiologiques démontrent que les populations d'Asie du Sud présentent un taux de graisse viscérale abdominale plus élevé et sont exposées à des risques cardiométaboliques accrus (tels que le diabète de type 2 et l'hypertension) à des niveaux d'IMC plus bas que les populations occidentales."
        },
        {
          "question": "Comment calculer l'IMC en Inde avec les kg et les cm ?",
          "answer": "Pour calculer l'IMC en kg et cm : convertissez la taille en cm en mètres en divisant par 100. Multipliez la taille en mètres par elle-même. Divisez le poids en kg par la taille au carré. Exemple : 65 kg / (1,68 m x 1,68 m) = 23,0 IMC."
        },
        {
          "question": "Quelles sont les recommandations relatives au tour de taille pour les adultes indiens ?",
          "answer": "L'ICMR recommande de maintenir le tour de taille en dessous de 90 cm pour les hommes indiens et de 80 cm pour les femmes indiennes afin de limiter les risques associés à la graisse abdominale."
        },
        {
          "question": "Quelle est la table de poids et taille idéale pour les Indiens ?",
          "answer": "Un poids idéal pour les adultes indiens correspond à un IMC compris entre 18,5 et 22,9 kg/m². Par exemple, pour une taille de 168 cm, la plage de poids santé se situe entre 52,2 kg et 64,6 kg."
        }
      ]
    }`;

if (content.includes(oldIndiaFr)) {
  content = content.replace(oldIndiaFr, newIndiaFr);
  console.log('✅ Replaced bmi-calculator-india FR block');
} else {
  console.log('⚠️ Could not match oldIndiaFr exactly, checking partial...');
}

// 5. Fix bmi-calculator-india DE block
const oldIndiaDe = `    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "BMI Calculator India – Asian BMI Cutoff Reference (BMI 23) – Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den veröffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und prüfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardmäßig validierten Gleichungen.",
      "formulaCode": "Asian BMI = Weight (kg) / [Height (cm) / 100]²",
      "tableTitle": "Standard-Referenztabelle",
      "tableRows": [
        {
          "col1": "Kategorie / Stufe 1",
          "col2": "< 18.5 kg/m²",
          "col3": "Referenzbereich für Untergewicht"
        },
        {
          "col1": "Kategorie / Stufe 2",
          "col2": "18.5 – 22.9 kg/m²",
          "col3": "Optimaler gesunder BMI-Bereich für indische Erwachsene"
        },
        {
          "col1": "Kategorie / Stufe 3",
          "col2": "23.0 – 24.9 kg/m²",
          "col3": "Grenzwert für erhöhtes kardiometabolisches Risiko (BMI 23)"
        },
        {
          "col1": "Kategorie / Stufe 4",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": "Adipositas Klasse I nach WHO Südostasien-Kriterien"
        },
        {
          "col1": "Kategorie / Stufe 5",
          "col2": "≥ 30.0 kg/m²",
          "col3": "Klassifizierung für schwere Adipositas"
        }
      ],`;

const newIndiaDe = `    "de": {
      "eyebrow": "ICMR & WHO Südasien-Richtlinien",
      "title": "BMI-Rechner Indien – ICMR & WHO Richtlinien für indische Erwachsene",
      "intro": "Berechnen Sie Ihren Body-Mass-Index (BMI) nach den offiziellen Konsensus-Richtlinien der WHO und des ICMR für indische Erwachsene. Im Gegensatz zu westlichen Standards, bei denen Übergewicht ab einem BMI von 25,0 beginnt, gilt für südasiatische Populationen ein Grenzwert von 23,0 kg/m² aufgrund höherer viszeraler Fetteinlagerungen bei geringerem Körpergewicht.",
      "formulaTitle": "ICMR & WHO BMI-Formel für indische Erwachsene (kg & cm)",
      "formulaDesc": "Metrisch: BMI = Gewicht (kg) / [Größe (m)]² | Übergewichtsschwelle für indische Erwachsene: BMI ≥ 23,0 kg/m² | Adipositas-Schwelle: BMI ≥ 25,0 kg/m²",
      "formulaCode": "BMI = Gewicht (kg) / [(Größe in cm / 100)²]",
      "tableTitle": "Offizielle BMI-Tabelle für indische Erwachsene (ICMR & WHO Standards)",
      "tableRows": [
        {
          "col1": "Untergewicht (< 18.5)",
          "col2": "< 18.5 kg/m²",
          "col3": "Referenzbereich für Untergewicht (< 18,5 kg/m²)"
        },
        {
          "col1": "Gesundes Normalgewicht (18.5 – 22.9)",
          "col2": "18.5 – 22.9 kg/m²",
          "col3": "Optimaler gesunder BMI-Bereich für indische Erwachsene"
        },
        {
          "col1": "Übergewicht / Risiko (23.0 – 24.9)",
          "col2": "23.0 – 24.9 kg/m²",
          "col3": "Grenzwert für erhöhtes kardiometabolisches Risiko (BMI 23)"
        },
        {
          "col1": "Adipositas Klasse I (25.0 – 29.9)",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": "Adipositas Klasse I nach WHO Südostasien-Kriterien"
        },
        {
          "col1": "Adipositas Klasse II (≥ 30.0)",
          "col2": "≥ 30.0 kg/m²",
          "col3": "Klassifizierung für schwere Adipositas"
        }
      ],`;

if (content.includes(oldIndiaDe)) {
  content = content.replace(oldIndiaDe, newIndiaDe);
  console.log('✅ Replaced bmi-calculator-india DE block');
} else {
  console.log('⚠️ Could not match oldIndiaDe exactly, checking partial...');
}

// 6. Fix bmi-calculator-for-indians ES, FR, DE, KO headers
const oldForIndEs = `    "es": {
      "eyebrow": "Estándares de Referencia de Salud",
      "title": "Calculadora de IMC para la Población India – Tabla de Peso y Altura – Guía y Calculadora",
      "intro": "Herramienta de cálculo y referencia educativa diseñada según los estándares de salud publicados de la OMS y CDC. Calcula tus métricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "Fórmula de Referencia Estándar",
      "formulaDesc": "Calculado utilizando ecuaciones estándar validadas.",
      "formulaCode": "BMI = Weight (kg) / [(Height in cm / 100)²]",
      "tableTitle": "Tabla de Referencia Estándar",`;

const newForIndEs = `    "es": {
      "eyebrow": "Estándares ICMR y OMS para el Sur de Asia",
      "title": "Calculadora de IMC para la Población India – Tabla de Peso y Altura – Guía y Calculadora",
      "intro": "Calculadora de IMC para la población india en línea gratuita basada en los estándares de referencia del Consejo Indio de Investigación Médica (ICMR) y la OMS para Asia-Pacífico. Calcula tu Índice de Masa Corporal (IMC) usando kg y cm, comprueba si tu peso se sitúa en el rango saludable para adultos indios (18.5 – 22.9 kg/m²) y consulta las pautas de circunferencia de cintura del ICMR.",
      "formulaTitle": "Fórmula Oficial del IMC para la Población India según ICMR (kg y cm)",
      "formulaDesc": "IMC = Peso (kg) / [Altura (m)]² | Rango saludable para adultos indios: 18.5 – 22.9 kg/m² | Punto de corte para sobrepeso: ≥ 23.0 kg/m²",
      "formulaCode": "IMC = Peso (kg) / [(Altura en cm / 100)²]",
      "tableTitle": "Tabla de Referencia de IMC para Adultos Indios según ICMR y la OMS (kg/m²)",`;

if (content.includes(oldForIndEs)) {
  content = content.replace(oldForIndEs, newForIndEs);
  console.log('✅ Replaced bmi-calculator-for-indians ES header');
} else {
  console.log('⚠️ Could not match oldForIndEs exactly');
}

const oldForIndFr = `    "fr": {
      "eyebrow": "Normes de Référence de Santé",
      "title": "Calculateur d'IMC pour les Indiens – Tableau Poids-Taille Santé – Outil de Référence",
      "intro": "Outil de calcul et de référence éducatif conçu selon les normes de santé publiées de l'OMS et du CDC. Calculez vos métriques et consultez les plages de référence.",
      "formulaTitle": "Formule de Référence Standard",
      "formulaDesc": "Calculé à l'aide d'équations standards validées.",
      "formulaCode": "BMI = Weight (kg) / [(Height in cm / 100)²]",
      "tableTitle": "Tableau de Référence Standard",`;

const newForIndFr = `    "fr": {
      "eyebrow": "Normes ICMR et OMS pour l'Asie du Sud",
      "title": "Calculateur d'IMC pour les Indiens – Tableau Poids-Taille Santé – Outil de Référence",
      "intro": "Calculateur d'IMC gratuit pour les Indiens basé sur les normes de référence du Conseil indien de la recherche médicale (ICMR) et de l'OMS Asie-Pacifique. Calculez votre Indice de Masse Corporelle (IMC) en kg et cm, vérifiez si votre poids se situe dans la plage saine pour adultes indiens (18,5 – 22,9 kg/m²) et consultez les recommandations de tour de taille de l'ICMR.",
      "formulaTitle": "Formule Officielle d'IMC Indien selon l'ICMR (kg et cm)",
      "formulaDesc": "IMC = Poids (kg) / [Taille (m)]² | Plage saine pour adultes indiens : 18,5 – 22,9 kg/m² | Seuil de surpoids : ≥ 23,0 kg/m²",
      "formulaCode": "IMC = Poids (kg) / [(Taille en cm / 100)²]",
      "tableTitle": "Tableau de Référence d'IMC pour Adultes Indiens selon l'ICMR et l'OMS (kg/m²)",`;

if (content.includes(oldForIndFr)) {
  content = content.replace(oldForIndFr, newForIndFr);
  console.log('✅ Replaced bmi-calculator-for-indians FR header');
} else {
  console.log('⚠️ Could not match oldForIndFr exactly');
}

const oldForIndDe = `    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "BMI-Rechner für Inder – ICMR & WHO Indien-Standard-Tabelle – Leitfaden & Rechner",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den veröffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und prüfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardmäßig validierten Gleichungen.",
      "formulaCode": "BMI = Weight (kg) / [(Height in cm / 100)²]",
      "tableTitle": "Standard-Referenztabelle",`;

const newForIndDe = `    "de": {
      "eyebrow": "ICMR & WHO Südasien-Referenzstandards",
      "title": "BMI-Rechner für Inder – ICMR & WHO Indien-Standard-Tabelle – Leitfaden & Rechner",
      "intro": "Kostenloser Online-BMI-Rechner für indische Erwachsene basierend auf den Referenzstandards des Indian Council of Medical Research (ICMR) und der WHO-Asien-Pazifik-Region. Berechnen Sie Ihren Body-Mass-Index (BMI) in kg und cm, prüfen Sie, ob Ihr Gewicht im gesunden Bereich für indische Erwachsene liegt (18,5 – 22,9 kg/m²), und überprüfen Sie die ICMR-Taillenumfangsrichtlinien.",
      "formulaTitle": "Offizielle ICMR-BMI-Formel für indische Erwachsene (kg & cm)",
      "formulaDesc": "BMI = Gewicht (kg) / [Größe (m)]² | Gesunder Bereich für indische Erwachsene: 18,5 – 22,9 kg/m² | Übergewichtsschwelle: ≥ 23,0 kg/m²",
      "formulaCode": "BMI = Gewicht (kg) / [(Größe in cm / 100)²]",
      "tableTitle": "ICMR & WHO Erwachsenen-BMI-Referenztabelle für indische Erwachsene (kg/m²)",`;

if (content.includes(oldForIndDe)) {
  content = content.replace(oldForIndDe, newForIndDe);
  console.log('✅ Replaced bmi-calculator-for-indians DE header');
} else {
  console.log('⚠️ Could not match oldForIndDe exactly');
}

const oldForIndKo = `    "ko": {
      "eyebrow": "건강 참조 표준 지침",
      "title": "인도인을 위한 BMI 계산기 – ICMR 및 WHO 인도 표준 건강 체중표 – 참조 계산기",
      "intro": "WHO 및 CDC 지침에 기반한 실시간 참고 계산기입니다. 개인별 수치를 측정하고 성인 표준 참조 범위를 확인하세요.",
      "formulaTitle": "표준 계산 공식",
      "formulaDesc": "검증된 표준 공식을 사용하여 계산됩니다.",
      "formulaCode": "BMI = Weight (kg) / [(Height in cm / 100)²]",
      "tableTitle": "표준 참조 진단표",`;

const newForIndKo = `    "ko": {
      "eyebrow": "ICMR 및 WHO 남아시아 공중보건 참조 기준",
      "title": "인도인을 위한 BMI 계산기 – ICMR 및 WHO 인도 표준 건강 체중표 – 참조 계산기",
      "intro": "인도 의학연구위원회(ICMR) 및 WHO 아시아-태평양 공중보건 참조 기준을 바탕으로 설계된 인도 성인 전용 무료 온라인 BMI 계산기입니다. kg 및 cm 단위로 체질량지수를 계산하고, 인도 성인 표준 건강 체중 범위(18.5 – 22.9 kg/m²) 충족 여부와 ICMR 허리둘레 권장 기준을 확인하세요.",
      "formulaTitle": "공식 ICMR 인도 성인 BMI 계산 공식 (kg & cm)",
      "formulaDesc": "BMI = 체중 (kg) / [신장 (m)]² | 인도 성인 건강 체중 범위: 18.5 – 22.9 kg/m² | 과체중 주의 기준: ≥ 23.0 kg/m²",
      "formulaCode": "BMI = 체중 (kg) / [(신장 cm / 100)²]",
      "tableTitle": "ICMR 및 WHO 인도 성인 BMI 표준 참조 진단표 (kg/m²)",`;

if (content.includes(oldForIndKo)) {
  content = content.replace(oldForIndKo, newForIndKo);
  console.log('✅ Replaced bmi-calculator-for-indians KO header');
} else {
  console.log('⚠️ Could not match oldForIndKo exactly');
}

// 7. Fix asian-bmi-calculator
content = content.replace(
  '          "col1": "Underweight",\n          "col2": "< 18.5 kg/m²",\n          "col3": "Underweight reference threshold"',
  '          "col1": "Underweight",\n          "col2": "< 18.5 kg/m²",\n          "col3": "Underweight guidance threshold (< 18.5 kg/m²)"'
);
content = content.replace(
  '          "question": "¿Qué IMC se considera sobrepeso para las poblaciones asiáticas?",\n          "answer": "Under WHO Asia-Pacific criteria, a BMI of 23.0 kg/m² or higher is considered overweight."',
  '          "question": "What BMI is considered overweight for Asian populations?",\n          "answer": "Under WHO Asia-Pacific criteria, a BMI of 23.0 kg/m² or higher is considered overweight."'
);
content = content.replace(
  '          "question": "¿Cuál es el IMC normal para los adultos asiáticos?",\n          "answer": "For Asian adults, a normal healthy BMI ranges from 18.5 to 22.9 kg/m²."',
  '          "question": "¿Cuál es el IMC normal para los adultos asiáticos?",\n          "answer": "Para los adultos asiáticos, un IMC normal y saludable se sitúa entre 18.5 y 22.9 kg/m²."'
);
content = content.replace(
  '          "question": "¿Qué IMC se considera sobrepeso para las poblaciones asiáticas?",\n          "answer": "Under WHO Asia-Pacific criteria, a BMI of 23.0 kg/m² or higher is considered overweight."',
  '          "question": "¿Qué IMC se considera sobrepeso para las poblaciones asiáticas?",\n          "answer": "Según los criterios de la OMS para Asia-Pacífico, un IMC de 23.0 kg/m² o superior se considera sobrepeso."'
);
content = content.replace(
  '          "question": "Quel est l\'IMC normal pour les adultes asiatiques ?",\n          "answer": "For Asian adults, a normal healthy BMI ranges from 18.5 to 22.9 kg/m²."',
  '          "question": "Quel est l\'IMC normal pour les adultes asiatiques ?",\n          "answer": "Pour les adultes asiatiques, un IMC normal et sain se situe entre 18,5 et 22,9 kg/m²."'
);
content = content.replace(
  '          "question": "¿Qué IMC se considera sobrepeso para las poblaciones asiáticas?",\n          "answer": "Under WHO Asia-Pacific criteria, a BMI of 23.0 kg/m² or higher is considered overweight."',
  '          "question": "Quel IMC est considéré comme un surpoids pour les populations asiatiques ?",\n          "answer": "Selon les critères de l\'OMS pour l\'Asie-Pacifique, un IMC égal ou supérieur à 23,0 kg/m² est considéré comme un surpoids."'
);
content = content.replace(
  '          "question": "Was ist ein normaler BMI für asiatische Erwachsene?",\n          "answer": "For Asian adults, a normal healthy BMI ranges from 18.5 to 22.9 kg/m²."',
  '          "question": "Was ist ein normaler BMI für asiatische Erwachsene?",\n          "answer": "Für asiatische Erwachsene liegt ein normaler gesunder BMI-Bereich zwischen 18,5 und 22,9 kg/m²."'
);
content = content.replace(
  '          "question": "¿Qué IMC se considera sobrepeso para las poblaciones asiáticas?",\n          "answer": "Under WHO Asia-Pacific criteria, a BMI of 23.0 kg/m² or higher is considered overweight."',
  '          "question": "Ab welchem BMI gilt man in asiatischen Populationen als übergewichtig?",\n          "answer": "Nach den Asien-Pazifik-Kriterien der WHO gilt ein BMI von 23,0 kg/m² oder höher als Übergewicht."'
);

fs.writeFileSync(seoPath, content, 'utf8');
console.log('✅ Updated seoDatabase.ts successfully');
