export interface WorkedExample {
  eyebrow: string;
  title: string;
  inputHeading: string;
  inputs: { label: string; value: string }[];
  stepsHeading: string;
  steps: string[];
  resultHeading: string;
  result: { label: string; value: string };
  interpretationHeading: string;
  interpretation: string;
  disclaimer: string;
}

const UI_HEADINGS: Record<string, { eyebrow: string; title: string; input: string; steps: string; result: string; interp: string; disc: string }> = {
  en: {
    eyebrow: "Verified Worked Example",
    title: "Step-by-Step Calculation & Educational Interpretation",
    input: "Sample Input Parameters",
    steps: "Mathematical Derivation Steps",
    result: "Calculated Reference Output",
    interp: "Practical Interpretation & Context",
    disc: "Screening Notice: Educational reference calculation only; not an individualized medical diagnosis or clinical prescription."
  },
  es: {
    eyebrow: "Ejemplo Práctico Verificado",
    title: "Cálculo Paso a Paso e Interpretación Educativa",
    input: "Parámetros de Entrada de Muestra",
    steps: "Pasos de Derivación Matemática",
    result: "Resultado de Referencia Calculado",
    interp: "Interpretación Práctica y Contexto",
    disc: "Aviso: Cálculo de referencia educativa; no constituye un diagnóstico médico individualizado ni una prescripción clínica."
  },
  fr: {
    eyebrow: "Exemple Pratique Vérifié",
    title: "Calcul Étape par Étape et Interprétation Éducative",
    input: "Paramètres d'Entrée Types",
    steps: "Étapes de Dérivation Mathématique",
    result: "Résultat de Référence Obtenu",
    interp: "Interprétation Pratique et Contexte",
    disc: "Avis : Calcul de référence purement éducatif ; ne constitue en aucun cas un diagnostic médical ou une prescription."
  },
  de: {
    eyebrow: "Verifiziertes Rechenbeispiel",
    title: "Schritt-für-Schritt-Berechnung & Einordnung",
    input: "Beispiel-Eingabeparameter",
    steps: "Mathematische Rechenschritte",
    result: "Berechneter Referenzwert",
    interp: "Praktische Interpretation & Kontext",
    disc: "Hinweis: Nur zur gesundheitlichen Orientierung; keine individuelle medizinische Diagnose oder Therapieempfehlung."
  },
  ko: {
    eyebrow: "검증된 단계별 계산 예시",
    title: "단계별 산출 과정 및 건강 참조 해석",
    input: "기준 입력 파라미터 예시",
    steps: "수학적 산출 공식 단계",
    result: "최종 산출 참조 결과값",
    interp: "실제 해석 지침 및 한계점",
    disc: "알림: 본 결과는 대중 보건 스크리닝 목적의 교육용 참고치이며, 전문의의 개별 진단이나 처방을 대신하지 않습니다."
  },
  hi: {
    eyebrow: "सत्यापित व्यावहारिक उदाहरण",
    title: "चरण-दर-चरण गणना एवं स्वास्थ्य व्याख्या",
    input: "नमूना इनपुट मान",
    steps: "गणितीय गणना के चरण",
    result: "अनुमानित संदर्भ परिणाम",
    interp: "व्यावहारिक व्याख्या और संदर्भ",
    disc: "सूचना: यह गणना केवल शैक्षिक स्वास्थ्य संदर्भ के लिए है; यह किसी डॉक्टर की चिकित्सीय सलाह या स्वतंत्र निदान का विकल्प नहीं है।"
  }
};

interface ToolData {
  inputs: Record<string, { label: string; value: string }[]>;
  steps: Record<string, string[]>;
  result: Record<string, { label: string; value: string }>;
  interp: Record<string, string>;
}

const EXAMPLES: Record<string, ToolData> = {
  // 1. BMI Calculators
  'bmi-calculator': {
    inputs: {
      en: [{ label: "Adult Weight", value: "70.0 kg (154.3 lbs)" }, { label: "Adult Height", value: "175.0 cm (1.75 m / 5'9\")" }],
      es: [{ label: "Peso del Adulto", value: "70.0 kg" }, { label: "Estatura", value: "175.0 cm (1.75 m)" }],
      fr: [{ label: "Poids de l'Adulte", value: "70,0 kg" }, { label: "Taille", value: "175,0 cm (1,75 m)" }],
      de: [{ label: "Körpergewicht", value: "70,0 kg" }, { label: "Körpergröße", value: "175,0 cm (1,75 m)" }],
      ko: [{ label: "성인 체중", value: "70.0 kg" }, { label: "신장", value: "175.0 cm (1.75 m)" }],
      hi: [{ label: "वयस्क वजन", value: "70.0 किग्रा" }, { label: "ऊंचाई", value: "175.0 सेमी (1.75 मी)" }]
    },
    steps: {
      en: [
        "Step 1: Square height in meters: 1.75 × 1.75 = 3.0625 m²",
        "Step 2: Divide body weight by height squared: 70.0 ÷ 3.0625 = 22.857 kg/m²",
        "Step 3: Round to standard single decimal precision: 22.9 kg/m²"
      ],
      es: [
        "Paso 1: Elevar la estatura en metros al cuadrado: 1.75 × 1.75 = 3.0625 m²",
        "Paso 2: Dividir el peso corporal entre la estatura al cuadrado: 70.0 ÷ 3.0625 = 22.857 kg/m²",
        "Paso 3: Redondear a un decimal estándar: 22.9 kg/m²"
      ],
      fr: [
        "Étape 1 : Calculer le carré de la taille en mètres : 1,75 × 1,75 = 3,0625 m²",
        "Étape 2 : Diviser le poids par la taille au carré : 70,0 ÷ 3,0625 = 22,857 kg/m²",
        "Étape 3 : Arrondir à une décimale : 22,9 kg/m²"
      ],
      de: [
        "Schritt 1: Körpergröße in Metern quadrieren: 1,75 × 1,75 = 3,0625 m²",
        "Schritt 2: Gewicht durch die quadrierte Größe teilen: 70,0 ÷ 3,0625 = 22,857 kg/m²",
        "Schritt 3: Auf eine Nachkommastelle runden: 22,9 kg/m²"
      ],
      ko: [
        "1단계: 신장(미터) 제곱 산출: 1.75 × 1.75 = 3.0625 m²",
        "2단계: 체중을 신장 제곱으로 나누기: 70.0 ÷ 3.0625 = 22.857 kg/m²",
        "3단계: 소수점 첫째 자리 반올림: 22.9 kg/m²"
      ],
      hi: [
        "चरण 1: ऊंचाई (मीटर में) का वर्ग करें: 1.75 × 1.75 = 3.0625 m²",
        "चरण 2: वजन को ऊंचाई के वर्ग से भाग दें: 70.0 ÷ 3.0625 = 22.857 kg/m²",
        "चरण 3: एक दशमलव अंक तक पूर्णांकित करें: 22.9 kg/m²"
      ]
    },
    result: {
      en: { label: "BMI Score & Category", value: "22.9 kg/m² (Normal / Healthy Weight)" },
      es: { label: "Puntaje de IMC y Categoría", value: "22.9 kg/m² (Peso Normal / Saludable)" },
      fr: { label: "Score IMC et Catégorie", value: "22,9 kg/m² (Poids Normal / Santé)" },
      de: { label: "BMI-Wert & Kategorie", value: "22,9 kg/m² (Normalgewicht)" },
      ko: { label: "BMI 수치 및 비만도", value: "22.9 kg/m² (정상 체중 범위)" },
      hi: { label: "बीएमआई स्कोर व श्रेणी", value: "22.9 kg/m² (सामान्य / स्वस्थ वजन)" }
    },
    interp: {
      en: "A score of 22.9 kg/m² sits comfortably inside the WHO healthy adult baseline (18.5 – 24.9 kg/m²). This indicates a standard mass-to-stature ratio. However, standard BMI cannot evaluate muscle mass versus adipose tissue distribution; athletes may register higher without excess fat.",
      es: "Un puntaje de 22.9 kg/m² se encuentra dentro del rango de peso normal de la OMS (18.5 a 24.9 kg/m²). Representa una relación estatura-peso equilibrada, aunque no distingue la masa muscular de la grasa corporal.",
      fr: "Un score de 22,9 kg/m² se situe au sein de la plage de référence normale de l'OMS (18,5 à 24,9 kg/m²). Cela reflète une proportion équilibrée entre le poids et la taille.",
      de: "Ein Wert von 22,9 kg/m² liegt im Normalgewichtsbereich der WHO (18,5 bis 24,9 kg/m²). Er zeigt ein ausgewogenes Verhältnis, unterscheidet jedoch nicht zwischen Muskel- und Fettmasse.",
      ko: "22.9 kg/m²는 WHO 공식 성인 정상 체중 구간(18.5 ~ 24.9 kg/m²)에 해당합니다. 신장 대비 표준적인 체중 비율을 나타내지만, 근육량과 체지방률을 구별하지는 못합니다.",
      hi: "22.9 kg/m² का स्कोर डब्ल्यूएचओ के सामान्य स्वस्थ वजन (18.5 से 24.9 kg/m²) के अंतर्गत आता है। यह एक संतुलित अनुपात है, हालांकि यह मांसपेशियों और वसा के वितरण का प्रत्यक्ष माप नहीं करता।"
    }
  },

  // 2. Indian BMI Calculator
  'bmi-calculator-for-indians': {
    inputs: {
      en: [{ label: "Adult Weight", value: "68.0 kg" }, { label: "Adult Height", value: "170.0 cm (1.70 m)" }],
      es: [{ label: "Peso", value: "68.0 kg" }, { label: "Estatura", value: "170.0 cm (1.70 m)" }],
      fr: [{ label: "Poids", value: "68,0 kg" }, { label: "Taille", value: "170,0 cm (1,70 m)" }],
      de: [{ label: "Gewicht", value: "68,0 kg" }, { label: "Körpergröße", value: "170,0 cm (1,70 m)" }],
      ko: [{ label: "체중", value: "68.0 kg" }, { label: "신장", value: "170.0 cm (1.70 m)" }],
      hi: [{ label: "वजन", value: "68.0 किग्रा" }, { label: "ऊंचाई", value: "170.0 सेमी (1.70 मी)" }]
    },
    steps: {
      en: [
        "Step 1: Calculate height squared: 1.70 × 1.70 = 2.89 m²",
        "Step 2: Compute BMI: 68.0 ÷ 2.89 = 23.53 kg/m²",
        "Step 3: Compare against WHO Asian & ICMR cutoff (Overweight threshold = 23.0 kg/m²)"
      ],
      es: [
        "Paso 1: Calcular estatura al cuadrado: 1.70 × 1.70 = 2.89 m²",
        "Paso 2: Calcular IMC: 68.0 ÷ 2.89 = 23.53 kg/m²",
        "Paso 3: Comparar con el punto de corte asiático de la OMS e ICMR (Sobrepeso desde 23.0 kg/m²)"
      ],
      fr: [
        "Étape 1 : Calculer la taille au carré : 1,70 × 1,70 = 2,89 m²",
        "Étape 2 : Calculer l'IMC : 68,0 ÷ 2,89 = 23,53 kg/m²",
        "Étape 3 : Évaluer selon le seuil asiatique OMS/ICMR (Surpoids dès 23,0 kg/m²)"
      ],
      de: [
        "Schritt 1: Größe quadrieren: 1,70 × 1,70 = 2,89 m²",
        "Schritt 2: BMI berechnen: 68,0 ÷ 2,89 = 23,53 kg/m²",
        "Schritt 3: Abgleich mit WHO-Asien-Grenzwert (Übergewicht ab 23,0 kg/m²)"
      ],
      ko: [
        "1단계: 신장 제곱 계산: 1.70 × 1.70 = 2.89 m²",
        "2단계: BMI 산출: 68.0 ÷ 2.89 = 23.53 kg/m²",
        "3단계: WHO 아시아 및 ICMR 기준 비교 (과체중 임계값 = 23.0 kg/m²)"
      ],
      hi: [
        "चरण 1: ऊंचाई का वर्ग निकालें: 1.70 × 1.70 = 2.89 m²",
        "चरण 2: बीएमआई की गणना: 68.0 ÷ 2.89 = 23.53 kg/m²",
        "चरण 3: डब्ल्यूएचओ एशियाई व आईसीएमआर कट-ऑफ (23.0 kg/m²) से तुलना करें"
      ]
    },
    result: {
      en: { label: "ICMR / Asian Classification", value: "23.5 kg/m² (Overweight / Moderate Risk)" },
      es: { label: "Clasificación Asiática OMS", value: "23.5 kg/m² (Sobrepeso / Riesgo Moderado)" },
      fr: { label: "Classification OMS Asie", value: "23,5 kg/m² (Surpoids / Seuil d'Intervention)" },
      de: { label: "WHO-Asien Einstufung", value: "23,5 kg/m² (Übergewicht / Erhöhtes Risiko)" },
      ko: { label: "아시아 기준 비만도", value: "23.5 kg/m² (과체중 / 위험 증가 단계)" },
      hi: { label: "आईसीएमआर एशियाई वर्गीकरण", value: "23.5 kg/m² (अधिक वजन / मध्यम स्वास्थ्य जोखिम)" }
    },
    interp: {
      en: "While 23.5 kg/m² is considered 'normal' under standard international cutoffs, it qualifies as Overweight (Action Threshold) under ICMR and WHO Asian guidelines due to the higher relative percentage of visceral abdominal fat in South Asian populations.",
      es: "Aunque 23.5 kg/m² se considera 'normal' en Occidente, en las guías asiáticas de la OMS e ICMR entra en sobrepeso debido a la mayor acumulación de grasa visceral en personas de origen sudasiático.",
      fr: "Bien que 23,5 kg/m² soit normal selon les normes occidentales, l'OMS classe cette valeur en surpoids pour les populations asiatiques en raison d'une adiposité viscérale plus précoce.",
      de: "Während 23,5 kg/m² international als Normalgewicht gilt, stufen die WHO und die ICMR diesen Wert für asiatische Erwachsene als Übergewicht ein, da bei niedrigerem BMI mehr Bauchfett vorliegt.",
      ko: "23.5 kg/m²는 서구 기준에서는 정상이지만, WHO 아시아 및 한국 기준에서는 복부 내장 지방 축적 위험을 감안하여 23.0 이상을 과체중(위험 증가 단계)으로 판정합니다.",
      hi: "यद्यपि 23.5 kg/m² पश्चिमी मानकों में सामान्य है, परंतु आईसीएमआर दिशानिर्देशों के अनुसार यह ओवरवेट की श्रेणी में आता है क्योंकि एशियाई आबादी में कम वजन पर भी आंतरिक विसरल वसा अधिक होती है।"
    }
  },

  // 3. BMR Calculator
  'bmr-calculator': {
    inputs: {
      en: [{ label: "Biological Sex", value: "Male" }, { label: "Age", value: "30 years" }, { label: "Weight", value: "75.0 kg" }, { label: "Height", value: "180.0 cm" }],
      es: [{ label: "Sexo Biológico", value: "Masculino" }, { label: "Edad", value: "30 años" }, { label: "Peso", value: "75.0 kg" }, { label: "Estatura", value: "180.0 cm" }],
      fr: [{ label: "Sexe Biologique", value: "Homme" }, { label: "Âge", value: "30 ans" }, { label: "Poids", value: "75,0 kg" }, { label: "Taille", value: "180,0 cm" }],
      de: [{ label: "Geschlecht", value: "Männlich" }, { label: "Alter", value: "30 Jahre" }, { label: "Gewicht", value: "75,0 kg" }, { label: "Größe", value: "180,0 cm" }],
      ko: [{ label: "성별", value: "남성" }, { label: "나이", value: "30세" }, { label: "체중", value: "75.0 kg" }, { label: "신장", value: "180.0 cm" }],
      hi: [{ label: "लिंग", value: "पुरुष" }, { label: "आयु", value: "30 वर्ष" }, { label: "वजन", value: "75.0 किग्रा" }, { label: "ऊंचाई", value: "180.0 सेमी" }]
    },
    steps: {
      en: [
        "Step 1: Mifflin-St Jeor Formula: BMR = (10 × weight) + (6.25 × height) - (5 × age) + 5",
        "Step 2: Substitute values: (10 × 75.0) + (6.25 × 180.0) - (5 × 30) + 5",
        "Step 3: Arithmetic: 750 + 1,125 - 150 + 5 = 1,730 kcal/day"
      ],
      es: [
        "Paso 1: Ecuación Mifflin-St Jeor: TMB = (10 × peso) + (6.25 × estatura) - (5 × edad) + 5",
        "Paso 2: Sustituir datos: (10 × 75.0) + (6.25 × 180.0) - (5 × 30) + 5",
        "Paso 3: Cálculo aritmético: 750 + 1,125 - 150 + 5 = 1,730 kcal/día"
      ],
      fr: [
        "Étape 1 : Formule Mifflin-St Jeor : MB = (10 × poids) + (6,25 × taille) - (5 × âge) + 5",
        "Étape 2 : Remplacer les valeurs : (10 × 75,0) + (6,25 × 180,0) - (5 × 30) + 5",
        "Étape 3 : Résultat : 750 + 1 125 - 150 + 5 = 1 730 kcal/jour"
      ],
      de: [
        "Schritt 1: Mifflin-St Jeor-Formel: BMR = (10 × Gewicht) + (6,25 × Größe) - (5 × Alter) + 5",
        "Schritt 2: Werte einsetzen: (10 × 75,0) + (6,25 × 180,0) - (5 × 30) + 5",
        "Schritt 3: Berechnung: 750 + 1.125 - 150 + 5 = 1.730 kcal/Tag"
      ],
      ko: [
        "1단계: Mifflin-St Jeor 공식 적용: BMR = (10 × 체중) + (6.25 × 신장) - (5 × 나이) + 5",
        "2단계: 수치 대입: (10 × 75.0) + (6.25 × 180.0) - (5 × 30) + 5",
        "3단계: 산출 계산: 750 + 1,125 - 150 + 5 = 1,730 kcal/일"
      ],
      hi: [
        "चरण 1: मिफ्लिन-सेंट जेओर फॉर्मूला: बीएमआर = (10 × वजन) + (6.25 × ऊंचाई) - (5 × आयु) + 5",
        "चरण 2: मान रखें: (10 × 75.0) + (6.25 × 180.0) - (5 × 30) + 5",
        "चरण 3: अंतिम गणना: 750 + 1,125 - 150 + 5 = 1,730 कैलोरी/दिन"
      ]
    },
    result: {
      en: { label: "Estimated Resting Energy", value: "1,730 kcal / day (Basal Metabolic Rate)" },
      es: { label: "Gasto Metabólico en Reposo", value: "1,730 kcal / día (Tasa Metabólica Basal)" },
      fr: { label: "Dépense Énergétique de Repos", value: "1 730 kcal / jour (Métabolisme de Base)" },
      de: { label: "Geschätzter Grundumsatz", value: "1.730 kcal / Tag (BMR)" },
      ko: { label: "추정 기초대사량", value: "1,730 kcal / 일 (BMR)" },
      hi: { label: "अनुमानित विश्राम ऊर्जा व्यय", value: "1,730 कैलोरी / दिन (बीएमआर)" }
    },
    interp: {
      en: "This represents the foundational calories expended in 24 hours purely for vital organ functions (brain, liver, heart, lungs) at total physical rest. To calculate daily calories burned with movement, multiply BMR by your physical activity multiplier (TDEE).",
      es: "Representa las calorías que el organismo quema en 24 horas para mantener los órganos vitales en reposo completo. Para conocer el gasto total diario con movimiento, multiplique esta cifra por el factor de actividad (TDEE).",
      fr: "Représente les calories consommées en 24h pour assurer les fonctions vitales au repos strict. Pour calculer la dépense avec l'activité physique, multipliez ce chiffre par le coefficient d'activité (TDEE).",
      de: "Dieser Wert entspricht dem reinen Kalorienverbrauch im Ruhezustand zur Aufrechterhaltung der Organfunktionen. Unter Berücksichtigung von Bewegung wird dieser Wert mit dem Aktivitätsfaktor multipliziert (TDEE).",
      ko: "24시간 동안 완전한 휴식 상태에서 뇌, 심장, 간 등 생명 유지 기관이 소비하는 최소 열량입니다. 일상 활동과 운동을 포함한 하루 총 에너지 소비량(TDEE)을 구하려면 활동 계수를 곱해야 합니다.",
      hi: "यह वह न्यूनतम ऊर्जा है जो 24 घंटे में शरीर के आंतरिक अंगों (हृदय, मस्तिष्क, फेफड़े) को जीवित रखने के लिए बर्न होती है। कुल दैनिक खर्च निकालने के लिए इसे गतिविधि स्तर (TDEE) से गुणा किया जाता है।"
    }
  },

  // 4. TDEE Calculator
  'tdee-calculator': {
    inputs: {
      en: [{ label: "Basal Metabolic Rate", value: "1,730 kcal/day" }, { label: "Activity Level", value: "Moderately Active (3–5 workouts/wk, PAL = 1.55)" }],
      es: [{ label: "Tasa Metabólica Basal", value: "1,730 kcal/día" }, { label: "Nivel de Actividad", value: "Moderado (3 a 5 días/sem, PAL = 1.55)" }],
      fr: [{ label: "Métabolisme de Base", value: "1 730 kcal/jour" }, { label: "Niveau d'Activité", value: "Modéré (3–5 séances/sem, PAL = 1,55)" }],
      de: [{ label: "Grundumsatz (BMR)", value: "1.730 kcal/Tag" }, { label: "Aktivitätsniveau", value: "Mäßig aktiv (3–5 Workouts/Woche, PAL = 1,55)" }],
      ko: [{ label: "기초대사량 (BMR)", value: "1,730 kcal/일" }, { label: "활동 수준", value: "보통 운동 (주 3~5회 운동, 계수 = 1.55)" }],
      hi: [{ label: "बेसल मेटाबॉलिक रेट", value: "1,730 कैलोरी/दिन" }, { label: "गतिविधि स्तर", value: "मध्यम व्यायाम (सप्ताह में 3-5 दिन, PAL = 1.55)" }]
    },
    steps: {
      en: [
        "Step 1: Formula: TDEE = BMR × Physical Activity Level (PAL)",
        "Step 2: Multiply resting energy by activity multiplier: 1,730 × 1.55",
        "Step 3: Total maintenance energy: 2,681.5 kcal/day (rounded to 2,682 kcal)"
      ],
      es: [
        "Paso 1: Fórmula: TDEE = TMB × Nivel de Actividad Física (PAL)",
        "Paso 2: Multiplicar energía basal por factor: 1,730 × 1.55",
        "Paso 3: Gasto total de mantenimiento: 2,682 kcal/día"
      ],
      fr: [
        "Étape 1 : Formule : TDEE = MB × Facteur d'Activité Physique (PAL)",
        "Étape 2 : Multiplier le métabolisme de base par le facteur : 1 730 × 1,55",
        "Étape 3 : Dépense totale de maintien : 2 682 kcal/jour"
      ],
      de: [
        "Schritt 1: Formel: TDEE = BMR × Aktivitätsfaktor (PAL)",
        "Schritt 2: Grundumsatz mit Multiplikator multiplizieren: 1.730 × 1,55",
        "Schritt 3: Gesamtumsatz zur Erhaltung: 2.682 kcal/Tag"
      ],
      ko: [
        "1단계: 산출 공식: TDEE = BMR × 신체 활동 수준 계수(PAL)",
        "2단계: 수치 계산: 1,730 × 1.55",
        "3단계: 일일 총 에너지 소비량 유지 목표: 약 2,682 kcal/일"
      ],
      hi: [
        "चरण 1: फॉर्मूला: टीडीईई = बीएमआर × शारीरिक गतिविधि कारक (PAL)",
        "चरण 2: मान गुणा करें: 1,730 × 1.55",
        "चरण 3: वजन बनाए रखने के लिए कुल दैनिक कैलोरी: 2,682 कैलोरी/दिन"
      ]
    },
    result: {
      en: { label: "Daily Maintenance Calories", value: "2,682 kcal / day (TDEE)" },
      es: { label: "Calorías Diarias de Mantenimiento", value: "2,682 kcal / día (TDEE)" },
      fr: { label: "Dépense Énergétique Totale", value: "2 682 kcal / jour (TDEE)" },
      de: { label: "Gesamtumsatz (Erhaltung)", value: "2.682 kcal / Tag (TDEE)" },
      ko: { label: "일일 유지 칼로리 소비량", value: "2,682 kcal / 일 (TDEE)" },
      hi: { label: "दैनिक मेंटेनेंस कैलोरी व्यय", value: "2,682 कैलोरी / दिन (टीडीईई)" }
    },
    interp: {
      en: "Consuming approximately 2,682 kcal/day matches daily energy burn, maintaining current scale weight. To target sustainable body fat loss, dietary guidelines often explore a modest deficit of 300 to 500 kcal/day (target: ~2,200 to 2,380 kcal/day).",
      es: "Consumir aproximadamente 2,682 kcal/día mantiene el peso actual. Para perder grasa de forma sostenible, se suele establecer un déficit moderado de 300 a 500 kcal/día (objetivo: 2,180 a 2,380 kcal/día).",
      fr: "Un apport d'environ 2 682 kcal/jour stabilise le poids actuel. Pour une perte de masse grasse progressive, un déficit de 300 à 500 kcal/jour (cible : 2 200 à 2 380 kcal/jour) est couramment recommandé.",
      de: "Eine Energiezufuhr von rund 2.682 kcal/Tag hält das aktuelle Körpergewicht stabil. Zur nachhaltigen Fettreduktion empfiehlt sich ein moderates Defizit von 300 bis 500 kcal/Tag (Ziel: ~2.200 bis 2.380 kcal/Tag).",
      ko: "하루 약 2,682 kcal를 섭취하면 현재 체중이 유지됩니다. 건강한 체지방 감량을 원할 경우 하루 300~500 kcal의 완만한 칼로리 결손(목표: 2,180~2,380 kcal/일)을 권장합니다.",
      hi: "प्रतिदिन लगभग 2,682 कैलोरी खाने से वजन स्थिर रहता है। सुरक्षित वजन घटाने के लिए 300 से 500 कैलोरी की कमी (लक्ष्य: लगभग 2,200 से 2,380 कैलोरी/दिन) का सुझाव दिया जाता है।"
    }
  },

  // 5. Water Intake Calculator
  'water-intake-calculator': {
    inputs: {
      en: [{ label: "Body Weight", value: "70.0 kg" }, { label: "Exercise Duration", value: "45 minutes moderate" }],
      es: [{ label: "Peso Corporal", value: "70.0 kg" }, { label: "Ejercicio Diario", value: "45 minutos moderados" }],
      fr: [{ label: "Poids Corporel", value: "70,0 kg" }, { label: "Activité Quotidienne", value: "45 minutes modérées" }],
      de: [{ label: "Körpergewicht", value: "70,0 kg" }, { label: "Tägliches Training", value: "45 Minuten moderat" }],
      ko: [{ label: "체중", value: "70.0 kg" }, { label: "운동 시간", value: "45분 보통 강도" }],
      hi: [{ label: "शरीर का वजन", value: "70.0 किग्रा" }, { label: "व्यायाम की अवधि", value: "45 मिनट मध्यम" }]
    },
    steps: {
      en: [
        "Step 1: Baseline hydration: 35 mL per kg body weight: 70 × 35 = 2,450 mL",
        "Step 2: Add sweat loss replacement: ~400 mL for 45 minutes exercise",
        "Step 3: Total daily recommended fluids: 2,450 + 400 = 2,850 mL (2.85 Liters)"
      ],
      es: [
        "Paso 1: Hidratación base: 35 mL por kg de peso: 70 × 35 = 2,450 mL",
        "Paso 2: Compensación de sudor: +400 mL por 45 minutos de ejercicio",
        "Paso 3: Total diario recomendado: 2,450 + 400 = 2,850 mL (2.85 Litros)"
      ],
      fr: [
        "Étape 1 : Hydratation de base : 35 mL par kg : 70 × 35 = 2 450 mL",
        "Étape 2 : Compensation de la transpiration : +400 mL pour 45 min d'effort",
        "Étape 3 : Total hydrique recommandé : 2 450 + 400 = 2 850 mL (2,85 Litres)"
      ],
      de: [
        "Schritt 1: Basisbedarf: 35 ml je kg Körpergewicht: 70 × 35 = 2.450 ml",
        "Schritt 2: Schweißverlust ausgleichen: +400 ml für 45 Minuten Sport",
        "Schritt 3: Täglicher Gesamtbedarf: 2.450 + 400 = 2.850 ml (2,85 Liter)"
      ],
      ko: [
        "1단계: 기초 수분 권장량: 체중 kg당 35 mL 산출: 70 × 35 = 2,450 mL",
        "2단계: 45분 운동에 따른 땀 배출 보충: +400 mL",
        "3단계: 일일 총 권장 수분 섭취량: 2,450 + 400 = 2,850 mL (약 2.85리터)"
      ],
      hi: [
        "चरण 1: आधारभूत पानी की आवश्यकता: 35 मिली प्रति किग्रा: 70 × 35 = 2,450 मिली",
        "चरण 2: 45 मिनट के व्यायाम से निकले पसीने की भरपाई: +400 मिली",
        "चरण 3: दैनिक कुल अनुशंसित पानी: 2,450 + 400 = 2,850 मिली (लगभग 2.85 लीटर)"
      ]
    },
    result: {
      en: { label: "Recommended Total Water Intake", value: "2.85 Liters / day (~12 cups)" },
      es: { label: "Ingesta Diaria de Agua Recomendada", value: "2.85 Litros / día (~12 vasos)" },
      fr: { label: "Apport Hydrique Quotidien Conseillé", value: "2,85 Litres / jour (~12 verres)" },
      de: { label: "Empfohlene tägliche Trinkmenge", value: "2,85 Liter / Tag (~12 Gläser)" },
      ko: { label: "일일 권장 수분 섭취량", value: "약 2.85 리터 / 일 (약 12잔)" },
      hi: { label: "दैनिक अनुशंसित पानी की मात्रा", value: "2.85 लीटर / दिन (लगभग 12 गिलास)" }
    },
    interp: {
      en: "This guideline includes drinking water, herbal teas, and moisture from fruits and vegetables (accounting for ~20% of total fluid intake). In hot climates or high humidity, fluid intake should be adjusted upward.",
      es: "Esta guía incluye agua, infusiones y el agua contenida en alimentos como frutas y verduras (aproximadamente el 20% del total). En climas calurosos, aumente la ingesta según la sed.",
      fr: "Ce volume comprend l'eau de boisson, les tisanes et l'eau contenue dans les aliments (fruits et légumes). Adaptez à la hausse par temps chaud ou forte humidité.",
      de: "Dieser Richtwert umfasst Trinkwasser, ungesüßte Tees und die Flüssigkeit aus Obst und Gemüse. Bei hohen Temperaturen sollte die Menge weiter erhöht werden.",
      ko: "본 수치에는 순수 음용수뿐만 아니라 과일 및 채소에 포함된 수분(전체의 약 20%)도 포함됩니다. 고온 다습한 환경에서는 섭취량을 늘리는 것이 좋습니다.",
      hi: "इसमें पीने का पानी, हर्बल चाय और फलों-सब्जियों से मिलने वाला पानी (कुल तरल का लगभग 20%) शामिल है। गर्म मौसम में पानी की मात्रा और बढ़ाएं।"
    }
  },

  // 6. Body Fat Calculator
  'body-fat-calculator': {
    inputs: {
      en: [{ label: "Biological Sex", value: "Male" }, { label: "Height", value: "178.0 cm" }, { label: "Neck Circumference", value: "38.0 cm" }, { label: "Waist Circumference", value: "86.0 cm" }],
      es: [{ label: "Sexo", value: "Masculino" }, { label: "Estatura", value: "178.0 cm" }, { label: "Cuello", value: "38.0 cm" }, { label: "Cintura", value: "86.0 cm" }],
      fr: [{ label: "Sexe", value: "Homme" }, { label: "Taille", value: "178,0 cm" }, { label: "Cou", value: "38,0 cm" }, { label: "Tour de Taille", value: "86,0 cm" }],
      de: [{ label: "Geschlecht", value: "Männlich" }, { label: "Körpergröße", value: "178,0 cm" }, { label: "Nackenumfang", value: "38,0 cm" }, { label: "Taillenumfang", value: "86,0 cm" }],
      ko: [{ label: "성별", value: "남성" }, { label: "신장", value: "178.0 cm" }, { label: "목둘레", value: "38.0 cm" }, { label: "허리둘레", value: "86.0 cm" }],
      hi: [{ label: "लिंग", value: "पुरुष" }, { label: "ऊंचाई", value: "178.0 सेमी" }, { label: "गर्दन", value: "38.0 सेमी" }, { label: "कमर", value: "86.0 सेमी" }]
    },
    steps: {
      en: [
        "Step 1: US Navy Circumference Method: Delta = Waist - Neck = 86.0 - 38.0 = 48.0 cm",
        "Step 2: Logarithmic equations calculate body density: 1.0324 - 0.19077 × log10(48) + 0.15456 × log10(178)",
        "Step 3: Siri Equation derives body fat percentage: ~16.8%"
      ],
      es: [
        "Paso 1: Método de la Marina de EE.UU.: Cintura - Cuello = 86.0 - 38.0 = 48.0 cm",
        "Paso 2: Ecuación logarítmica de densidad corporal a partir de perímetros y estatura",
        "Paso 3: Conversión por fórmula de Siri: ~16.8% de grasa corporal"
      ],
      fr: [
        "Étape 1 : Méthode US Navy : Tour de taille - Tour de cou = 86,0 - 38,0 = 48,0 cm",
        "Étape 2 : Calcul de la densité corporelle selon l'équation logarithmique",
        "Étape 3 : Conversion par équation de Siri : ~16,8 % de masse grasse"
      ],
      de: [
        "Schritt 1: US-Navy-Methode: Taille minus Nacken = 86,0 - 38,0 = 48,0 cm",
        "Schritt 2: Logarithmische Dichteberechnung anhand von Umfang und Größe",
        "Schritt 3: Umrechnung mittels Siri-Gleichung: ca. 16,8 % Körperfett"
      ],
      ko: [
        "1단계: 미국 해군(US Navy) 둘레 측정법: 허리 - 목 = 86.0 - 38.0 = 48.0 cm",
        "2단계: 신장과 둘레 차이의 상용로그를 적용한 신체 밀도 계산",
        "3단계: Siri 공식을 통한 체지방률 도출: 약 16.8%"
      ],
      hi: [
        "चरण 1: अमेरिकी नौसेना विधि: कमर - गर्दन = 86.0 - 38.0 = 48.0 सेमी",
        "चरण 2: ऊंचाई और परिधि के लॉगरिदमिक अनुपात से घनत्व की गणना",
        "चरण 3: सिरी फॉर्मूला द्वारा अंतिम वसा प्रतिशत: लगभग 16.8%"
      ]
    },
    result: {
      en: { label: "Estimated Body Fat Percentage", value: "16.8% (Fitness Category for Men)" },
      es: { label: "Porcentaje de Grasa Estimado", value: "16.8% (Categoría Fitness para Hombres)" },
      fr: { label: "Pourcentage de Masse Grasse", value: "16,8 % (Catégorie Forme / Athlétique)" },
      de: { label: "Geschätzter Körperfettanteil", value: "16,8 % (Fitnessbereich für Männer)" },
      ko: { label: "추정 체지방률", value: "16.8% (남성 피트니스 권장 구간)" },
      hi: { label: "अनुमानित बॉडी फैट प्रतिशत", value: "16.8% (पुरुषों के लिए फिटनेस श्रेणी)" }
    },
    interp: {
      en: "For adult men, 14–17% body fat represents a healthy fitness classification with athletic muscular definition. This provides far more granular insight into actual tissue composition than total scale weight alone.",
      es: "Para hombres adultos, un 14–17% de grasa corresponde a una excelente condición física con definición muscular visible. Es mucho más informativo que el peso de la báscula.",
      fr: "Pour un homme adulte, 14 à 17 % correspond à une excellente forme physique avec définition musculaire, bien plus précis que le simple poids sur la balance.",
      de: "Für erwachsene Männer entspricht ein Wert von 14–17 % einer sportlichen Fitness-Einstufung mit guter Muskeldefinition, deutlich präziser als das bloße Körpergewicht.",
      ko: "성인 남성의 14~17% 체지방률은 선명한 근육 윤곽과 건강한 신체 대사를 나타내는 피트니스 권장 상태입니다. 단순 체중보다 신체 구성을 훨씬 정확하게 반영합니다.",
      hi: "वयस्क पुरुषों में 14–17% बॉडी फैट उत्कृष्ट फिटनेस और मांसपेशियों की परिभाषा को दर्शाता है। यह केवल तराजू के वजन की तुलना में कहीं अधिक सटीक स्वास्थ्य सूचक है।"
    }
  }
};

export function getWorkedExample(slug: string, lang: string): WorkedExample {
  const headings = UI_HEADINGS[lang] || UI_HEADINGS.en;
  
  // Normalization for visualizer and alias slugs
  let normalizedSlug = slug;
  if (slug === '3d-bmi-calculator' || slug === 'bmi-chart' || slug === '3d-body-visualizer' || slug === 'healthy-weight-by-height') {
    normalizedSlug = 'bmi-calculator';
  } else if (slug === 'bmi-calculator-india' || slug === 'asian-bmi-calculator') {
    normalizedSlug = 'bmi-calculator-for-indians';
  } else if (slug === 'maintenance-calorie-calculator' || slug === 'calorie-calculator' || slug === 'macro-calculator') {
    normalizedSlug = 'tdee-calculator';
  } else if (slug === 'lean-body-mass-calculator') {
    normalizedSlug = 'body-fat-calculator';
  }

  const data = EXAMPLES[normalizedSlug] || EXAMPLES['bmi-calculator'];
  const curLang = (data.inputs[lang]) ? lang : 'en';

  return {
    eyebrow: headings.eyebrow,
    title: headings.title,
    inputHeading: headings.input,
    inputs: data.inputs[curLang] || data.inputs.en,
    stepsHeading: headings.steps,
    steps: data.steps[curLang] || data.steps.en,
    resultHeading: headings.result,
    result: data.result[curLang] || data.result.en,
    interpretationHeading: headings.interp,
    interpretation: data.interp[curLang] || data.interp.en,
    disclaimer: headings.disc
  };
}
