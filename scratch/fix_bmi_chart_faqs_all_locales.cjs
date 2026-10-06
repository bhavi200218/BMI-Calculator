const fs = require('fs');

const filePath = 'src/data/seoDatabase.ts';
let raw = fs.readFileSync(filePath, 'utf8');

// Parse object safely
const startIdx = raw.indexOf('export const seoDatabase');
const objStart = raw.indexOf('{', startIdx);
const codeStr = 'module.exports = ' + raw.slice(objStart);

fs.writeFileSync('scratch/temp_db.cjs', codeStr);
const database = require('./temp_db.cjs');

// 1. Fix bmi-chart FAQs in es, fr, de, ko, hi
database['bmi-chart']['es']['title'] = "Tabla de IMC para Adultos – Gráfico de Altura y Peso (kg y cm)";
database['bmi-chart']['es']['faqs'] = [
  {
    "question": "¿Cómo funciona el gráfico de IMC y qué evalúa?",
    "answer": "El gráfico de IMC compara la altura con el peso para determinar la categoría ponderal según las directrices oficiales de la OMS y los CDC."
  },
  {
    "question": "¿Es diferente el gráfico de IMC para hombres y mujeres?",
    "answer": "Las cifras de corte de la OMS para adultos son idénticas para hombres y mujeres. Sin embargo, la circunferencia de cintura y la masa muscular aportan contexto adicional."
  },
  {
    "question": "¿Cómo cambia el IMC según la edad en adultos y adultos mayores?",
    "answer": "Las categorías estándar se aplican a partir de los 20 años. Para mayores de 65 años, un IMC entre 23.0 y 27.0 kg/m² puede ofrecer mayor protección de densidad ósea."
  },
  {
    "question": "¿Cómo se lee el gráfico de IMC en kg y cm?",
    "answer": "Se ubica la estatura en centímetros y el peso en kilogramos para identificar la intersección correspondiente al estado ponderal (por ejemplo, 170 cm y 65 kg representan 22.5 kg/m²)."
  },
  {
    "question": "¿Cuáles son las categorías principales del IMC oficial?",
    "answer": "Bajo peso (< 18.5), Peso saludable (18.5 – 24.9), Sobrepeso (25.0 – 29.9), Obesidad Clase I (30.0 – 34.9), Obesidad Clase II (35.0 – 39.9) y Obesidad Severa Clase III (≥ 40.0)."
  }
];

database['bmi-chart']['fr']['title'] = "Tableau d'IMC pour Adultes – Grille Taille et Poids (kg et cm)";
database['bmi-chart']['fr']['faqs'] = [
  {
    "question": "Comment fonctionne le tableau d'IMC et que mesure-t-il ?",
    "answer": "Le tableau d'IMC compare votre taille et votre poids pour situer votre catégorie de poids selon les normes publiées de l'OMS et des CDC."
  },
  {
    "question": "Le tableau d'IMC pour hommes est-il différent de celui pour femmes ?",
    "answer": "Les seuils d'IMC pour adultes sont identiques pour les hommes et les femmes. Le tour de taille fournit une mesure complémentaire utile."
  },
  {
    "question": "Comment l'IMC s'applique-t-il selon l'âge chez les adultes et les séniors ?",
    "answer": "Les catégories s'appliquent à tous les adultes dès 20 ans. Pour les personnes de plus de 65 ans, un IMC entre 23,0 et 27,0 kg/m² est souvent considéré comme protecteur."
  },
  {
    "question": "Comment lire le tableau d'IMC en kg et cm ?",
    "answer": "Trouvez votre taille en cm et votre poids en kg pour repérer l'IMC correspondant (par exemple, 170 cm et 65 kg donnent 22,5 kg/m², soit un poids normal)."
  },
  {
    "question": "Quelles sont les catégories principales de l'IMC officiel ?",
    "answer": "Insuffisance pondérale (< 18,5), Poids normal (18,5 – 24,9), Surpoids (25,0 – 29,9), Obésité Classe I (30,0 – 34,9), Obésité Classe II (35,0 – 39,9) et Obésité Sévère Classe III (≥ 40,0)."
  }
];

database['bmi-chart']['de']['title'] = "BMI-Tabelle für Erwachsene – Größentabelle & Gewichtsübersicht (kg & cm)";
database['bmi-chart']['de']['faqs'] = [
  {
    "question": "Wie funktioniert die BMI-Tabelle und was misst sie?",
    "answer": "Die BMI-Tabelle vergleicht Körpergröße und Gewicht, um die Gewichtskategorie nach den Richtlinien der WHO und CDC einzuordnen."
  },
  {
    "question": "Unterscheidet sich die BMI-Tabelle für Männer von der für Frauen?",
    "answer": "Die WHO-Grenzwerte gelten für erwachsene Männer und Frauen gleichermaßen. Der Taillenumfang liefert zusätzliche Hinweise zur Fettverteilung."
  },
  {
    "question": "Wie verändert sich der BMI mit dem Alter bei Senioren?",
    "answer": "Standard-Kategorien gelten ab 20 Jahren. Für Senioren über 65 Jahren gilt ein leicht höherer Bereich von 23,0 bis 27,0 kg/m² oft als Schutzfaktor."
  },
  {
    "question": "Wie liest man die BMI-Tabelle in kg und cm?",
    "answer": "Suchen Sie Ihre Größe in cm und Ihr Gewicht in kg, um Ihren BMI abzulesen (z. B. 170 cm und 65 kg entsprechen 22,5 kg/m², also Normalgewicht)."
  },
  {
    "question": "Welches sind die Hauptkategorien der offiziellen BMI-Skala?",
    "answer": "Untergewicht (< 18,5), Normalgewicht (18,5 – 24,9), Übergewicht (25,0 – 29,9), Adipositas Klasse I (30,0 – 34,9), Adipositas Klasse II (35,0 – 39,9) und Adipositas Klasse III (≥ 40,0)."
  }
];

database['bmi-chart']['ko']['title'] = "성인 BMI 차트 – 신장 및 체중 표준 진단표 (kg 및 cm)";
database['bmi-chart']['ko']['faqs'] = [
  {
    "question": "BMI 차트 계산기의 측정 원리는 무엇인가요?",
    "answer": "BMI 차트는 신장과 체중을 비교하여 WHO 및 CDC 지침에 따른 성인 체중 범주를 제시합니다."
  },
  {
    "question": "남성과 여성의 BMI 차트 기준은 다른가요?",
    "answer": "성인 WHO BMI 기준 수치는 남녀 동일합니다. 다만 체지방 비율 차이를 감안해 허리둘레 측정을 함께 고려합니다."
  },
  {
    "question": "노인의 연령별 BMI 기준은 어떻게 적용되나요?",
    "answer": "표준 기준은 20세 이상 성인에게 적용됩니다. 65세 이상 노인은 23.0 ~ 27.0 kg/m² 범위가 골밀도 유지에 유리할 수 있습니다."
  },
  {
    "question": "kg 및 cm 기준 BMI 차트는 어떻게 읽나요?",
    "answer": "신장(cm)과 체중(kg)이 만나는 지점에서 BMI 수치를 확인합니다 (예: 170cm, 65kg은 22.5 kg/m² 정상 체중)."
  },
  {
    "question": "공식 BMI 차트의 주요 단계는 어떻게 구성되나요?",
    "answer": "저체중(< 18.5), 정상 체중(18.5 – 24.9), 과체중(25.0 – 29.9), 1단계 비만(30.0 – 34.9), 2단계 비만(35.0 – 39.9), 3단계 고도 비만(≥ 40.0)입니다."
  }
];

database['bmi-chart']['hi']['faqs'] = [
  {
    "question": "बीएमआई चार्ट कैसे काम करता है और यह क्या मापता है?",
    "answer": "बीएमआई चार्ट आपकी ऊंचाई और वजन की तुलना करके डब्ल्यूएचओ (WHO) दिशानिर्देशों के अनुसार आपकी बीएमआई श्रेणी दिखाता है।"
  },
  {
    "question": "क्या पुरुषों और महिलाओं के लिए बीएमआई चार्ट अलग होता है?",
    "answer": "डब्ल्यूएचओ के मानक कटऑफ पुरुषों और महिलाओं दोनों के लिए समान (18.5 से 24.9) होते हैं। हालांकि कमर का माप अतिरिक्त संदर्भ प्रदान करता है।"
  },
  {
    "question": "वरिष्ठ नागरिकों और वयस्कों के लिए बीएमआई चार्ट कैसे काम करता है?",
    "answer": "मानक श्रेणियां 20 वर्ष और उससे अधिक आयु के सभी वयस्कों पर लागू होती हैं। 65 वर्ष से अधिक उम्र के वरिष्ठों के लिए 23.0 से 27.0 kg/m² का बीएमआई सुरक्षात्मक हो सकता है।"
  },
  {
    "question": "किग्रा और सेमी में बीएमआई चार्ट कैसे देखें?",
    "answer": "सेंटीमीटर (cm) में ऊंचाई और किलोग्राम (kg) में वजन के मिलान बिंदु पर अपना बीएमआई देखें (उदाहरण: 170 सेमी और 65 किग्रा = 22.5 kg/m² स्वस्थ वजन)।"
  },
  {
    "question": "आधिकारिक चार्ट पर मुख्य बीएमआई श्रेणियां क्या हैं?",
    "answer": "कम वजन (< 18.5), सामान्य वजन (18.5 – 24.9), अधिक वजन (25.0 – 29.9), मोटापा श्रेणी I (30.0 – 34.9), मोटापा श्रेणी II (35.0 – 39.9), और गंभीर मोटापा श्रेणी III (≥ 40.0)।"
  }
];

// 2. Fix healthy-weight-by-height FAQs in es, fr, de, ko
database['healthy-weight-by-height']['es']['faqs'].forEach(faq => {
  if (faq.question.includes('different from')) {
    faq.question = "¿En qué se diferencia el peso saludable para hombres y mujeres?";
    faq.answer = "Aunque el rango estándar de IMC de la OMS se aplica por igual a ambos sexos, los hombres suelen tener mayor masa muscular y menor grasa visceral que las mujeres a la misma altura.";
  }
});

database['healthy-weight-by-height']['fr']['faqs'].forEach(faq => {
  if (faq.question.includes('different from')) {
    faq.question = "Le poids santé pour les hommes est-il différent de celui pour les femmes ?";
    faq.answer = "Bien que la plage d'IMC standard de l'OMS s'applique de la même manière aux deux sexes, les hommes ont généralement une masse musculaire plus élevée et une masse grasse plus faible à taille égale.";
  }
});

database['healthy-weight-by-height']['de']['faqs'].forEach(faq => {
  if (faq.question.includes('different from')) {
    faq.question = "Unterscheidet sich das gesunde Gewicht für Männer von dem für Frauen?";
    faq.answer = "Obwohl der Standard-BMI-Bereich der WHO für beide Geschlechter gleichermaßen gilt, haben Männer bei gleicher Körpergröße meist mehr Muskelmasse und einen geringeren Fettanteil.";
  }
});

database['healthy-weight-by-height']['ko']['faqs'].forEach(faq => {
  if (faq.question.includes('different from')) {
    faq.question = "남성과 여성의 적정 건강 체중 기준은 다른가요?";
    faq.answer = "WHO 표준 BMI 범위는 남녀 공통으로 적용되지만, 같은 신장에서 남성은 골격근량이 높고 체지방률이 낮은 경향이 있습니다.";
  }
});

// Re-serialize database to file
const updatedCode = 'import { type Locale } from \'../utils/calculators\';\n\ninterface ToolContent {\n  eyebrow: string;\n  title: string;\n  intro: string;\n  formulaTitle: string;\n  formulaDesc: string;\n  formulaCode: string;\n  tableTitle: string;\n  tableRows: { col1: string; col2: string; col3: string }[];\n  faqs: { question: string; answer: string }[];\n}\n\nexport const seoDatabase: Record<string, Record<Locale, ToolContent>> = ' + JSON.stringify(database, null, 2) + ';\n';

fs.writeFileSync(filePath, updatedCode, 'utf8');

if (fs.existsSync('scratch/temp_db.cjs')) {
  fs.unlinkSync('scratch/temp_db.cjs');
}

console.log('Master database FAQs and titles updated cleanly!');
