export interface WorkedExample {
  eyebrow: string;
  title: string;
  subtitle: string;
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

const UI_HEADINGS: Record<string, { eyebrow: string; title: string; subtitle: string; input: string; steps: string; result: string; interp: string; disc: string }> = {
  en: {
    eyebrow: "Step-by-Step Calculation Example",
    title: "Step-by-Step Calculation & Educational Interpretation",
    subtitle: "See how this formula works step by step with sample measurements and clear health ranges.",
    input: "Sample Input Parameters",
    steps: "Mathematical Derivation Steps",
    result: "Calculated Reference Output",
    interp: "Practical Interpretation & Context",
    disc: "Educational Notice: This calculation is an estimate for educational use, not medical advice."
  },
  es: {
    eyebrow: "Ejemplo Práctico Paso a Paso",
    title: "Cálculo Paso a Paso e Interpretación Educativa",
    subtitle: "Examina una demostración detallada paso a paso que ilustra la aplicación práctica de las fórmulas matemáticas y la interpretación del resultado.",
    input: "Parámetros de Entrada de Muestra",
    steps: "Pasos de Derivación Matemática",
    result: "Resultado de Referencia Calculado",
    interp: "Interpretación Práctica y Contexto",
    disc: "Aviso: Cálculo de referencia educativa; no constituye un diagnóstico médico individualizado ni una prescripción clínica."
  },
  fr: {
    eyebrow: "Exemple Pratique Étape par Étape",
    title: "Calcul Étape par Étape et Interprétation Éducative",
    subtitle: "Découvrez une démonstration mathématique transparente étape par étape illustrant l'application des équations de référence et l'interprétation des résultats.",
    input: "Paramètres d'Entrée Types",
    steps: "Étapes de Dérivation Mathématique",
    result: "Résultat de Référence Obtenu",
    interp: "Interprétation Pratique et Contexte",
    disc: "Avis : Calcul de référence purement éducatif ; ne constitue en aucun cas un diagnostic médical ou une prescription."
  },
  de: {
    eyebrow: "Schritt-für-Schritt-Rechenbeispiel",
    title: "Schritt-für-Schritt-Berechnung & Einordnung",
    subtitle: "Verfolgen Sie eine transparente Beispielrechnung, die veranschaulicht, wie die Formelwerte mathematisch abgeleitet und physiologisch eingeordnet werden.",
    input: "Beispiel-Eingabeparameter",
    steps: "Mathematische Rechenschritte",
    result: "Berechneter Referenzwert",
    interp: "Praktische Interpretation & Kontext",
    disc: "Hinweis: Nur zur gesundheitlichen Orientierung; keine individuelle medizinische Diagnose oder Therapieempfehlung."
  },
  ko: {
    eyebrow: "단계별 계산 예시",
    title: "단계별 산출 과정 및 건강 참조 해석",
    subtitle: "실제 신체 계측 입력값이 공식에 따라 어떻게 산출되는지 단계별 유도 과정과 공중보건 참조 범위 해석 지침을 확인하세요.",
    input: "기준 입력 파라미터 예시",
    steps: "수학적 산출 공식 단계",
    result: "최종 산출 참조 결과값",
    interp: "실제 해석 지침 및 한계점",
    disc: "알림: 본 결과는 대중 보건 스크리닝 목적의 교육용 참고치이며, 전문의의 개별 진단이나 처방을 대신하지 않습니다."
  },
  hi: {
    eyebrow: "चरण-दर-चरण गणना उदाहरण",
    title: "चरण-दर-चरण गणना एवं स्वास्थ्य व्याख्या",
    subtitle: "एक स्पष्ट चरण-दर-चरण गणना उदाहरण देखें जो दिखाता है कि इनपुट मापों को आधिकारिक सूत्रों और स्वास्थ्य संदर्भ श्रेणियों में कैसे लागू किया जाता है।",
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
      en: [{ label: "Gender Profile", value: "Male" }, { label: "Age", value: "30 years" }, { label: "Weight", value: "75.0 kg" }, { label: "Height", value: "180.0 cm" }],
      es: [{ label: "Género Biológico", value: "Masculino" }, { label: "Edad", value: "30 años" }, { label: "Peso", value: "75.0 kg" }, { label: "Estatura", value: "180.0 cm" }],
      fr: [{ label: "Profil Biologique", value: "Homme" }, { label: "Âge", value: "30 ans" }, { label: "Poids", value: "75,0 kg" }, { label: "Taille", value: "180,0 cm" }],
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
      en: "This is the energy your body burns in 24 hours at complete rest. It powers vital organ functions like your brain, heart, liver, and lungs. To find your total daily calorie burn with activity, multiply this BMR number by your activity multiplier.",
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
      en: [
        { label: "Basal Metabolic Rate (BMR)", value: "1,730 kcal/day" },
        { label: "Physical Activity Level (PAL)", value: "Moderately Active (3–5 workouts/wk, PAL = 1.55)" },
        { label: "Non-Exercise Movement (NEAT)", value: "Moderate (~8,000 steps/day)" }
      ],
      es: [
        { label: "Tasa Metabólica Basal (TMB)", value: "1,730 kcal/día" },
        { label: "Nivel de Actividad Física (PAL)", value: "Moderado (3 a 5 entrenamientos/sem, PAL = 1.55)" },
        { label: "Actividad Sin Ejercicio (NEAT)", value: "Moderada (~8,000 pasos/día)" }
      ],
      fr: [
        { label: "Métabolisme de Base (MB)", value: "1 730 kcal/jour" },
        { label: "Niveau d'Activité Physique (PAL)", value: "Modéré (3 à 5 séances/sem, PAL = 1,55)" },
        { label: "Activité Non Liée au Sport (NEAT)", value: "Modérée (~8 000 pas/jour)" }
      ],
      de: [
        { label: "Grundumsatz (BMR)", value: "1.730 kcal/Tag" },
        { label: "Körperliche Aktivität (PAL)", value: "Mäßig aktiv (3–5 Workouts/Woche, PAL = 1,55)" },
        { label: "Alltagsaktivität (NEAT)", value: "Moderat (~8.000 Schritte/Tag)" }
      ],
      ko: [
        { label: "기초대사량 (BMR)", value: "1,730 kcal/일" },
        { label: "신체 활동 수준 계수 (PAL)", value: "보통 활동 (주 3~5회 운동, 계수 = 1.55)" },
        { label: "비운동성 일상 활동 (NEAT)", value: "보통 (일평균 약 8,000보)" }
      ],
      hi: [
        { label: "बेसल मेटाबॉलिक रेट (BMR)", value: "1,730 कैलोरी/दिन" },
        { label: "शारीरिक गतिविधि कारक (PAL)", value: "मध्यम व्यायाम (सप्ताह में 3-5 दिन, PAL = 1.55)" },
        { label: "दैनिक गैर-व्यायाम गति (NEAT)", value: "मध्यम (~8,000 कदम/दिन)" }
      ]
    },
    steps: {
      en: [
        "Step 1: Formula: TDEE = BMR × PAL (or BMR + NEAT + EAT + TEF)",
        "Step 2: Base calculation: 1,730 kcal/day × 1.55 = 2,681.5 kcal/day (rounded to 2,682 kcal)",
        "Step 3: 4-Component Energy Breakdown: BMR ~1,730 kcal (64.5%) + NEAT ~400 kcal (14.9%) + EAT ~280 kcal (10.4%) + TEF ~272 kcal (10.1%) = 2,682 kcal/day",
        "Step 4: Goal Target Calibration: Maintenance = 2,682 kcal | Fat Loss (-300 to -500 kcal) = 2,182–2,382 kcal | Muscle Hypertrophy (+200 to +300 kcal) = 2,882–2,982 kcal"
      ],
      es: [
        "Paso 1: Fórmula: TDEE = TMB × PAL (o TMB + NEAT + EAT + TEF)",
        "Paso 2: Cálculo base: 1,730 kcal/día × 1.55 = 2,682 kcal/día",
        "Paso 3: Desglose de 4 Componentes: TMB ~1,730 kcal (64.5%) + NEAT ~400 kcal (14.9%) + EAT ~280 kcal (10.4%) + TEF ~272 kcal (10.1%) = 2,682 kcal/día",
        "Paso 4: Objetivos calóricos: Mantenimiento = 2,682 kcal | Déficit Grasa = 2,182–2,382 kcal | Ganancia Muscular = 2,882–2,982 kcal"
      ],
      fr: [
        "Étape 1 : Formule : TDEE = MB × Facteur PAL (ou MB + NEAT + EAT + TEF)",
        "Étape 2 : Calcul de base : 1 730 kcal/jour × 1,55 = 2 682 kcal/jour",
        "Étape 3 : Répartition en 4 composantes : MB ~1 730 kcal (64,5%) + NEAT ~400 kcal (14,9%) + EAT ~280 kcal (10,4%) + TEF ~272 kcal (10,1%) = 2 682 kcal/jour",
        "Étape 4 : Cibles par objectif : Maintien = 2 682 kcal | Perte de gras = 2 182–2 382 kcal | Prise de muscle = 2 882–2 982 kcal"
      ],
      de: [
        "Schritt 1: Formel: TDEE = BMR × PAL (oder BMR + NEAT + EAT + TEF)",
        "Schritt 2: Basisberechnung: 1.730 kcal/Tag × 1,55 = 2.682 kcal/Tag",
        "Schritt 3: 4-Säulen-Aufschlüsselung: BMR ~1.730 kcal (64,5%) + NEAT ~400 kcal (14,9%) + EAT ~280 kcal (10,4%) + TEF ~272 kcal (10,1%) = 2.682 kcal/Tag",
        "Schritt 4: Zielkorridore: Erhaltung = 2.682 kcal | Fettabbau = 2.182–2.382 kcal | Muskelaufbau = 2.882–2.982 kcal"
      ],
      ko: [
        "1단계: 산출 공식: TDEE = BMR × PAL (또는 BMR + NEAT + EAT + TEF)",
        "2단계: 기초 대사량 연산: 1,730 kcal/일 × 1.55 = 약 2,682 kcal/일",
        "3단계: 4대 소비 요소 분해: BMR ~1,730 kcal(64.5%) + NEAT ~400 kcal(14.9%) + EAT ~280 kcal(10.4%) + TEF ~272 kcal(10.1%) = 2,682 kcal/일",
        "4단계: 목표별 칼로리 설정: 체중 유지 = 2,682 kcal | 체지방 감량 = 2,182~2,382 kcal | 근육량 증가 = 2,882~2,982 kcal"
      ],
      hi: [
        "चरण 1: फॉर्मूला: TDEE = BMR × PAL (या BMR + NEAT + EAT + TEF)",
        "चरण 2: गणना: 1,730 कैलोरी/दिन × 1.55 = 2,682 कैलोरी/दिन",
        "चरण 3: 4-घटक ऊर्जा विभाजन: BMR ~1,730 कैलोरी (64.5%) + NEAT ~400 कैलोरी (14.9%) + EAT ~280 कैलोरी (10.4%) + TEF ~272 कैलोरी (10.1%) = 2,682 कैलोरी/दिन",
        "चरण 4: लक्ष्य निर्धारण: मेंटेनेंस = 2,682 कैलोरी | वसा हानि = 2,182–2,382 कैलोरी | मांसपेशी लाभ = 2,882–2,982 कैलोरी"
      ]
    },
    result: {
      en: { label: "Total Daily Energy Expenditure", value: "2,682 kcal / day (TDEE)" },
      es: { label: "Gasto Energético Total Diario", value: "2,682 kcal / día (TDEE)" },
      fr: { label: "Dépense Énergétique Totale Quotidienne", value: "2 682 kcal / jour (TDEE)" },
      de: { label: "Gesamter Täglicher Energiebedarf", value: "2.682 kcal / Tag (TDEE)" },
      ko: { label: "총 일일 에너지 소비량", value: "2,682 kcal / 일 (TDEE)" },
      hi: { label: "कुल दैनिक ऊर्जा व्यय", value: "2,682 कैलोरी / दिन (TDEE)" }
    },
    interp: {
      en: "Your Total Daily Energy Expenditure (TDEE) is 2,682 kcal/day. Burning this amount daily means consuming 2,682 kcal keeps your weight perfectly stable. For steady, sustainable fat loss, target 2,182 to 2,382 kcal/day (a moderate 300–500 kcal deficit). For lean muscle gain with minimal fat accumulation, target 2,882 to 2,982 kcal/day (a conservative 200–300 kcal surplus). Next step: Convert these target calories into protein, carbs, and fats using the Macro Calculator.",
      es: "Tu Gasto Energético Total (TDEE) es de 2,682 kcal/día. Consumir esta cantidad mantiene el peso estable. Para una pérdida de grasa gradual y sostenible, establece una ingesta de 2,182 a 2,382 kcal/día (déficit de 300 a 500 kcal). Para ganar masa muscular limpia con mínima ganancia grasa, consume 2,882 a 2,982 kcal/día (superávit de 200 a 300 kcal). Siguiente paso: Distribuye estas calorías en proteínas, carbohidratos y grasas con la Calculadora de Macros.",
      fr: "Votre dépense énergétique journalière totale (TDEE) est de 2 682 kcal/jour. Consommer cet apport maintient votre poids parfaitement stable. Pour une perte de masse grasse progressive et saine, visez 2 182 à 2 382 kcal/jour (déficit modéré de 300 à 500 kcal). Pour un gain musculaire propre, ciblez 2 882 à 2 982 kcal/jour (surplus de 200 à 300 kcal). Prochaine étape : Répartissez ces calories en macronutriments optimaux avec le Calculateur de Macros.",
      de: "Ihr täglicher Gesamtenergieumsatz (TDEE) beträgt 2.682 kcal/Tag. Eine Zufuhr dieser Kalorienmenge hält Ihr Körpergewicht konstant. Für nachhaltigen Fettabbau zielen Sie auf 2.182 bis 2.382 kcal/Tag (moderates Defizit von 300–500 kcal). Für sauberen Muskelaufbau mit minimalem Fettansatz empfehlen sich 2.882 bis 2.982 kcal/Tag (kontrollierter Überschuss von 200–300 kcal). Nächster Schritt: Makronährstoffe mit dem Makro-Rechner berechnen.",
      ko: "귀하의 총 일일 에너지 소비량(TDEE)은 2,682 kcal/일입니다. 매일 2,682 kcal를 섭취하면 체중이 안정적으로 유지됩니다. 건강하고 지속 가능한 체지방 감량을 위해서는 하루 2,182~2,382 kcal(300~500 kcal 결손)를 목표로 하세요. 체지방 증가를 최소화하면서 근육량을 늘리려면 2,882~2,982 kcal(200~300 kcal 잉여)를 권장합니다. 다음 단계: 매크로 계산기로 단백질, 탄수화물, 지방 섭취량을 배분하세요.",
      hi: "आपका कुल दैनिक ऊर्जा व्यय (TDEE) 2,682 कैलोरी/दिन है। प्रतिदिन 2,682 कैलोरी खाने से वजन स्थिर रहता है। सुरक्षित वसा हानि के लिए 2,182 से 2,382 कैलोरी/दिन (300-500 कैलोरी की कमी) का लक्ष्य रखें। लीन मसल मास बढ़ाने के लिए 2,882 से 2,982 कैलोरी/दिन (200-300 कैलोरी सरप्लस) का लक्ष्य रखें। अगला कदम: मैक्रो कैलकुलेटर का उपयोग करके इस कैलोरी को प्रोटीन, कार्ब्स और वसा में बदलें।"
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
      en: [{ label: "Gender Profile", value: "Male" }, { label: "Height", value: "178.0 cm" }, { label: "Neck Circumference", value: "38.0 cm" }, { label: "Waist Circumference", value: "86.0 cm" }],
      es: [{ label: "Género", value: "Masculino" }, { label: "Estatura", value: "178.0 cm" }, { label: "Cuello", value: "38.0 cm" }, { label: "Cintura", value: "86.0 cm" }],
      fr: [{ label: "Genre", value: "Homme" }, { label: "Taille", value: "178,0 cm" }, { label: "Cou", value: "38,0 cm" }, { label: "Tour de Taille", value: "86,0 cm" }],
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
  },

  // 7. 1RM Strength Calculator
  '1rm-calculator': {
    inputs: {
      en: [{ label: "Weight Lifted (Barbell Load)", value: "100.0 kg (220.5 lbs)" }, { label: "Repetitions Completed", value: "5 repetitions (to technical failure)" }],
      es: [{ label: "Carga Levantada (Peso en Barra)", value: "100.0 kg (220.5 lbs)" }, { label: "Repeticiones Realizadas", value: "5 repeticiones (fallo técnico)" }],
      fr: [{ label: "Charge Soulevée (Barre)", value: "100,0 kg (220,5 lbs)" }, { label: "Répétitions Validées", value: "5 répétitions (échec technique)" }],
      de: [{ label: "Bewältigtes Hantelgewicht", value: "100,0 kg (220,5 lbs)" }, { label: "Absolvierte Wiederholungen", value: "5 Wiederholungen (technischer Muskelabbruch)" }],
      ko: [{ label: "리프팅 수행 중량 (바벨)", value: "100.0 kg (220.5 lbs)" }, { label: "완수한 반복 횟수", value: "5회 반복 (자세 유지 한계 기준)" }],
      hi: [{ label: "उठाया गया भार (बारबेल लोड)", value: "100.0 किग्रा (220.5 पाउंड)" }, { label: "पूरी की गई पुनरावृत्तियां (Reps)", value: "5 रेप्स (सटीक तकनीक के साथ)" }]
    },
    steps: {
      en: [
        "Step 1: Epley Formula: 1RM = Weight × (1 + Reps ÷ 30) = 100.0 × (1 + 5 ÷ 30) = 100.0 × 1.1667 = 116.67 kg",
        "Step 2: Brzycki Formula comparison: 1RM = Weight × (36 ÷ (37 - Reps)) = 100.0 × (36 ÷ 32) = 112.50 kg",
        "Step 3: Lander Formula comparison: (100 × Weight) ÷ (101.3 - 2.67123 × Reps) = 10,000 ÷ 87.944 = 113.71 kg",
        "Step 4: Standard rounding to nearest whole integer yields an estimated 1RM benchmark of 117 kg (257 lbs)"
      ],
      es: [
        "Paso 1: Fórmula Epley: 1RM = Peso × (1 + Reps ÷ 30) = 100.0 × (1 + 5 ÷ 30) = 116.67 kg",
        "Paso 2: Comparación Brzycki: 1RM = Peso × (36 ÷ (37 - Reps)) = 100.0 × (36 ÷ 32) = 112.50 kg",
        "Paso 3: Comparación Lander: (100 × Peso) ÷ (101.3 - 2.67123 × Reps) = 10,000 ÷ 87.944 = 113.71 kg",
        "Paso 4: Redondeo estándar al entero más próximo: 117 kg (257 lbs) estimados para 1RM"
      ],
      fr: [
        "Étape 1 : Formule d'Epley : 1RM = Charge × (1 + Reps ÷ 30) = 100,0 × (1 + 5 ÷ 30) = 116,67 kg",
        "Étape 2 : Formule de Brzycki : 1RM = Charge × (36 ÷ (37 - Reps)) = 100,0 × (36 ÷ 32) = 112,50 kg",
        "Étape 3 : Formule de Lander : (100 × Charge) ÷ (101,3 - 2,67123 × Reps) = 10 000 ÷ 87,944 = 113,71 kg",
        "Étape 4 : Arrondi usuel à l'unité la plus proche : 117 kg (257 lbs) pour le 1RM théorique"
      ],
      de: [
        "Schritt 1: Epley-Formel: 1RM = Gewicht × (1 + Wdh ÷ 30) = 100,0 × (1 + 5 ÷ 30) = 116,67 kg",
        "Schritt 2: Brzycki-Formel: 1RM = Gewicht × (36 ÷ (37 - Wdh)) = 100,0 × (36 ÷ 32) = 112,50 kg",
        "Schritt 3: Lander-Formel: (100 × Gewicht) ÷ (101,3 - 2,67123 × Wdh) = 10.000 ÷ 87,944 = 113,71 kg",
        "Schritt 4: Rundung auf ganze Zahlen ergibt eine geschätzte 1RM-Maximallast von 117 kg"
      ],
      ko: [
        "1단계: Epley 공식 적용: 1RM = 중량 × (1 + 반복 ÷ 30) = 100.0 × (1 + 5 ÷ 30) = 116.67 kg",
        "2단계: Brzycki 공식 교차 검증: 1RM = 중량 × (36 ÷ (37 - 반복)) = 100.0 × (36 ÷ 32) = 112.50 kg",
        "3단계: Lander 공식 계산: (100 × 중량) ÷ (101.3 - 2.67123 × 반복) = 10,000 ÷ 87.944 = 113.71 kg",
        "4단계: 정수 단위 표준 반올림 적용: 추정 1RM 벤치마크 약 117 kg (257 lbs)"
      ],
      hi: [
        "चरण 1: एपले (Epley) फॉर्मूला: 1RM = वजन × (1 + रेप्स ÷ 30) = 100.0 × (1 + 5 ÷ 30) = 116.67 किग्रा",
        "चरण 2: ब्रज़िकी (Brzycki) फॉर्मूला: 1RM = वजन × (36 ÷ (37 - रेप्स)) = 100.0 × (36 ÷ 32) = 112.50 किग्रा",
        "चरण 3: लैंडर (Lander) समीकरण: (100 × वजन) ÷ (101.3 - 2.67123 × रेप्स) = 10,000 ÷ 87.944 = 113.71 किग्रा",
        "चरण 4: निकटतम पूर्णांक में मानक राउंडिंग: अनुमानित 1RM क्षमता = 117 किग्रा (257 पाउंड)"
      ]
    },
    result: {
      en: { label: "Estimated 1RM Benchmark (Epley)", value: "117 kg (257 lbs)" },
      es: { label: "Puntaje Estimado de 1RM (Epley)", value: "117 kg (257 lbs)" },
      fr: { label: "Estimation du 1RM Théorique (Epley)", value: "117 kg (257 lbs)" },
      de: { label: "Geschätzte 1RM-Maximalkraft (Epley)", value: "117 kg (257 lbs)" },
      ko: { label: "Epley 공식 기반 추정 1RM 수치", value: "117 kg (257 lbs)" },
      hi: { label: "अनुमानित 1RM बेंचमार्क (एपले)", value: "117 किग्रा (257 पाउंड)" }
    },
    interp: {
      en: "Lifting 100 kg for 5 clean reps gives an estimated 1RM of 117 kg. This weight represents about 85% of your maximum strength. Multi-rep formulas work best between 2 and 6 reps. Sets with more than 10 reps test muscle endurance, which makes the 1RM estimate less accurate. Use this number to plan your workout weights. Always lift heavy weights with safety pins or a spotter.",
      es: "Levantar 100 kg para 5 repeticiones limpias proyecta un 1RM de 117 kg (equivalente a una intensidad del ~85%). Las ecuaciones submáximas ofrecen mayor precisión entre 2 y 6 repeticiones. Por encima de 10 repeticiones, la fatiga y la resistencia muscular alteran la predicción. Utilice este cálculo para dosificar porcentajes de entrenamiento (ej. series al 75-80%), no como garantía para intentar un máximo sin asistentes.",
      fr: "Déplacer 100 kg sur 5 répétitions propres correspond à une charge maximale théorique de 117 kg (intensité d'environ 85 % pour 5 reps). Les équations prédictives sont particulièrement fiables entre 2 et 6 répétitions. Au-delà de 10 répétitions, l'endurance musculaire et la fatigue faussent les calculs. Ce chiffre permet de calibrer les charges de travail d'un cycle sans risquer une blessure lors d'un test maximal réel.",
      de: "Das Bewältigen von 100 kg für 5 saubere Wiederholungen ergibt ein rechnerisches 1RM von ca. 117 kg (~85 % der Maximalkraft). Submaximale Formeln sind im Bereich von 2 bis 6 Wiederholungen am präzisesten. Bei mehr als 10 Wiederholungen verfälschen Ermüdung und Kraftausdauer das Ergebnis. Der Wert dient als Orientierung für Trainingsgewichte, nicht als Empfehlung für ungesicherte Maximalversuche.",
      ko: "100 kg으로 5회의 깔끔한 반복을 완수하면 추정 1RM은 약 117 kg(5RM은 통상 1RM의 약 85% 강도)으로 산출됩니다. 다중 반복 기반의 추정 공식은 2~6회 구간에서 가장 높은 신뢰도를 나타냅니다. 10회를 초과하는 고반복 세트는 근지구력 및 피로도가 개입되어 오차가 커집니다. 본 결과치는 주기화 훈련 시 % 중량을 설정하는 가이드라인이며, 보조자 없는 무리한 단일 시도를 권장하지 않습니다.",
      hi: "100 किग्रा वजन के साथ 5 स्वच्छ रेप्स करने पर अनुमानित 1RM क्षमता 117 किग्रा (5RM आमतौर पर 1RM का ~85% भार होता है) निकलती है। सबमैक्सिमल बहु-रेप फॉर्मूले 2 से 6 रेप्स के बीच सबसे सटीक परिणाम देते हैं। 10 रेप्स से अधिक होने पर मांसपेशियों की थकान अनुमान को प्रभावित करती है। यह गणना वर्कआउट भार (% लोड) निर्धारित करने के लिए है, बिना सुरक्षा उपकरण या सहायक के अकेले भारी वजन उठाने के लिए नहीं।"
    }
  },

  // 8. Karvonen Heart Rate Reserve Calculator
  'karvonen-heart-rate-calculator': {
    inputs: {
      en: [{ label: "Chronological Age", value: "30 years" }, { label: "Baseline Resting Pulse", value: "60 bpm" }],
      es: [{ label: "Edad Cronológica", value: "30 años" }, { label: "Frecuencia Cardíaca en Reposo (RHR)", value: "60 lpm" }],
      fr: [{ label: "Âge Chronologique", value: "30 ans" }, { label: "Fréquence Cardiaque au Repos (FCR)", value: "60 bpm" }],
      de: [{ label: "Lebensalter", value: "30 Jahre" }, { label: "Ruhepuls (RHR)", value: "60 S/min" }],
      ko: [{ label: "만 나이", value: "30세" }, { label: "안정 시 심박수 (RHR)", value: "60 bpm" }],
      hi: [{ label: "आयु", value: "30 वर्ष" }, { label: "विश्राम हृदय गति (RHR)", value: "60 धड़कन/मिनट (BPM)" }]
    },
    steps: {
      en: [
        "Step 1: Estimate Maximum Pulse: Peak HR = 220 - Age = 220 - 30 = 190 bpm",
        "Step 2: Calculate Heart Rate Reserve (HRR): HRR = Peak HR - Resting Pulse = 190 - 60 = 130 bpm",
        "Step 3: Target Zone 2 Lower Bound (60% intensity): 60 + (130 × 0.60) = 60 + 78 = 138 bpm",
        "Step 4: Target Zone 2 Upper Bound (70% intensity): 60 + (130 × 0.70) = 60 + 91 = 151 bpm",
        "Step 5: Reference Zone 1 Warm-up (50–60%): 125 to 138 bpm; Zone 3 Aerobic (70–80%): 151 to 164 bpm"
      ],
      es: [
        "Paso 1: Estimar FC Máxima: FC_max = 220 - Edad = 220 - 30 = 190 lpm",
        "Paso 2: Calcular Reserva Cardíaca (HRR): HRR = FC_max - FC_reposo = 190 - 60 = 130 lpm",
        "Paso 3: Límite Inferior Zona 2 (60% intensidad): 60 + (130 × 0.60) = 60 + 78 = 138 lpm",
        "Paso 4: Límite Superior Zona 2 (70% intensidad): 60 + (130 × 0.70) = 60 + 91 = 151 lpm",
        "Paso 5: Referencia Zona 1 (50–60%): 125 a 138 lpm; Zona 3 (70–80%): 151 a 164 lpm"
      ],
      fr: [
        "Étape 1 : Estimer la FC Maximale : FC_max = 220 - Âge = 220 - 30 = 190 bpm",
        "Étape 2 : Calculer la Réserve Cardiaque (HRR) : HRR = FC_max - FC_repos = 190 - 60 = 130 bpm",
        "Étape 3 : Seuil Bas Zone 2 (Intensité 60 %) : 60 + (130 × 0,60) = 60 + 78 = 138 bpm",
        "Étape 4 : Seuil Haut Zone 2 (Intensité 70 %) : 60 + (130 × 0,70) = 60 + 91 = 151 bpm",
        "Étape 5 : Repères Zone 1 (50–60 %) : 125 à 138 bpm ; Zone 3 Aérobie (70–80 %) : 151 à 164 bpm"
      ],
      de: [
        "Schritt 1: Maximale Herzfrequenz schätzen: HF_max = 220 - Alter = 220 - 30 = 190 S/min",
        "Schritt 2: Herzfrequenzreserve (HRR) berechnen: HRR = HF_max - Ruhepuls = 190 - 60 = 130 S/min",
        "Schritt 3: Untergrenze Zone 2 (60 % Intensität): 60 + (130 × 0,60) = 60 + 78 = 138 S/min",
        "Schritt 4: Obergrenze Zone 2 (70 % Intensität): 60 + (130 × 0,70) = 60 + 91 = 151 S/min",
        "Schritt 5: Referenzbereich Zone 1 (50–60 %): 125 bis 138 S/min; Zone 3 (70–80 %): 151 bis 164 S/min"
      ],
      ko: [
        "1단계: 최대 심박수(HR_max) 추정: 220 - 나이 = 220 - 30 = 190 bpm",
        "2단계: 심박수 예비량(HRR) 계산: HR_max - 안정시 심박수 = 190 - 60 = 130 bpm",
        "3단계: 목표 심박수 Zone 2 하한선 (60% 강도): 60 + (130 × 0.60) = 60 + 78 = 138 bpm",
        "4단계: 목표 심박수 Zone 2 상한선 (70% 강도): 60 + (130 × 0.70) = 60 + 91 = 151 bpm",
        "5단계: 참조 구간 - Zone 1 웜업(50~60%): 125~138 bpm, Zone 3 유산소(70~80%): 151~164 bpm"
      ],
      hi: [
        "चरण 1: अधिकतम हृदय गति का अनुमान: HR_max = 220 - आयु = 220 - 30 = 190 धड़कन/मिनट",
        "चरण 2: हृदय गति आरक्षित (HRR) की गणना: HRR = HR_max - RHR = 190 - 60 = 130 धड़कन/मिनट",
        "चरण 3: ज़ोन 2 लक्षित निचली सीमा (60% तीव्रता): 60 + (130 × 0.60) = 60 + 78 = 138 धड़कन/मिनट",
        "चरण 4: ज़ोन 2 लक्षित ऊपरी सीमा (70% तीव्रता): 60 + (130 × 0.70) = 60 + 91 = 151 धड़कन/मिनट",
        "चरण 5: संदर्भ ज़ोन 1 वार्म-अप (50-60%): 125 से 138 BPM; ज़ोन 3 एरोबिक (70-80%): 151 से 164 BPM"
      ]
    },
    result: {
      en: { label: "Target Exertion Range (Karvonen Zone 2: 60–70% HRR)", value: "138 – 151 bpm" },
      es: { label: "Frecuencia Cardíaca Objetivo (Zona 2 Karvonen: 60–70%)", value: "138 – 151 lpm" },
      fr: { label: "Fréquence Cardiaque Cible (Zone 2 Karvonen : 60–70 %)", value: "138 – 151 bpm" },
      de: { label: "Zielherzfrequenz (Karvonen Zone 2: 60–70 % HRR)", value: "138 – 151 S/min" },
      ko: { label: "목표 심박수 (Karvonen Zone 2 지방연소/지구력: 60–70%)", value: "138 – 151 bpm" },
      hi: { label: "लक्षित हृदय गति (कार्वोनेन ज़ोन 2: 60–70% HRR)", value: "138 – 151 BPM" }
    },
    interp: {
      en: "The Karvonen formula uses your resting pulse (60 bpm) to calculate personal workout zones. A range of 138 to 151 bpm keeps you in Zone 2. This moderate pace helps you burn fat and build endurance without tiring your muscles too quickly. Note that estimated peak cardiac output can vary by 10 to 12 beats per minute. Heat, stress, caffeine, and poor sleep can also change your daily pulse reading.",
      es: "Al basar la intensidad en el pulso en reposo (60 lpm), Karvonen personaliza las zonas cardiovasculares respecto a fórmulas genéricas. Mantener 138 a 151 lpm sitúa el esfuerzo en la Zona 2 (base aeróbica), favoreciendo la oxidación de grasas sin generar acumulación temprana de lactato. Limitaciones: La fórmula 220-edad tiene un margen de error de ±10 a 12 lpm. El calor ambiental, la deshidratación, la cafeína y ciertos fármacos (como betabloqueantes) modifican la respuesta cardíaca.",
      fr: "En intégrant la fréquence cardiaque au repos (60 bpm), la méthode de Karvonen personnalise vos zones d'effort par rapport aux formules théoriques classiques. La plage de 138 à 151 bpm correspond à la Zone 2 (endurance fondamentale), favorisant l'oxydation des lipides sans acidose précoce. Limites : L'estimation 220-âge comporte une marge de ±10 à 12 bpm. La déshydratation, la caféine, la chaleur ou des traitements (bêtabloquants) modifient la réponse cardiaque.",
      de: "Durch die Einbeziehung des individuellen Ruhepulses (60 S/min) passt Karvonen die Trainingszonen an den individuellen Trainingszustand an. Ein Bereich von 138 bis 151 S/min entspricht der Zone 2 (aerobe Basis), die den Fettstoffwechsel optimiert, ohne Laktat anzuhäufen. Grenzen: Die Formel 220-Alter unterliegt einer biologischen Streuung von ca. ±10 bis 12 S/min. Hitze, Flüssigkeitsmangel, Koffein und Medikamente (z. B. Betablocker) beeinflussen die Herzfrequenz maßgeblich.",
      ko: "개인의 안정 시 심박수(60 bpm)를 반영하는 Karvonen 공식은 단순 백분율 공식보다 훨씬 정밀하게 유산소 훈련 구간을 설정합니다. 138 ~ 151 bpm 범위는 미토콘드리아의 지방 산화 효율을 극대화하는 Zone 2(유산소 기초 지구력) 구간입니다. 한계점: 220-나이 최대 심박수 추정치는 개인별로 약 ±10~12 bpm의 오차가 있습니다. 탈수, 기온, 카페인 섭취 및 베타차단제 복용 등은 심박수 반응에 직접적인 영향을 미칩니다.",
      hi: "विश्राम पल्स (60 BPM) को आधार बनाकर, कार्वोनेन विधि सामान्य सूत्रों की तुलना में अधिक सटीक व्यक्तिगत कार्डियो ज़ोन बनाती है। 138 से 151 BPM बनाए रखना ज़ोन 2 (एरोबिक बेस) को लक्षित करता है, जिससे लैक्टिक एसिड जमा हुए बिना फैट बर्न होता है। सीमाएं: 220-आयु फॉर्मूले में लगभग ±10 से 12 BPM का अंतर हो सकता है। तापमान, निर्जलीकरण, कैफीन और बीटा-ब्लॉकर दवाएं हृदय गति को सीधे प्रभावित करती हैं।"
    }
  },

  // 9. Ideal Weight Calculator
  'ideal-weight-calculator': {
    inputs: {
      en: [{ label: "Gender Profile", value: "Male" }, { label: "Height", value: "178.0 cm (5'10\")" }],
      es: [{ label: "Género Biológico", value: "Masculino" }, { label: "Estatura", value: "178.0 cm (5'10\")" }],
      fr: [{ label: "Profil Biologique", value: "Homme" }, { label: "Taille", value: "178,0 cm (5'10\")" }],
      de: [{ label: "Geschlecht", value: "Männlich" }, { label: "Körpergröße", value: "178,0 cm (5'10\")" }],
      ko: [{ label: "생물학적 성별", value: "남성" }, { label: "신장", value: "178.0 cm (5'10\")" }],
      hi: [{ label: "जैविक लिंग", value: "पुरुष" }, { label: "ऊंचाई", value: "178.0 सेमी (5'10\")" }]
    },
    steps: {
      en: [
        "Step 1: Convert height to inches: 178 cm = 70.08 inches (10.08 inches over 5 feet)",
        "Step 2: Devine formula: 50.0 kg + (2.3 kg × 10.08 inches) = 50.0 + 23.18 = 73.18 kg",
        "Step 3: Robinson formula comparison: 52.0 kg + (1.9 kg × 10.08 inches) = 71.15 kg",
        "Step 4: WHO healthy BMI weight range (18.5 to 24.9 kg/m²): 58.6 kg to 78.9 kg"
      ],
      es: [
        "Paso 1: Convertir estatura a pulgadas: 178 cm = 70.08 pulgadas (10.08 pulgadas sobre 5 pies)",
        "Paso 2: Fórmula Devine: 50.0 kg + (2.3 kg × 10.08) = 73.18 kg",
        "Paso 3: Fórmula Robinson: 52.0 kg + (1.9 kg × 10.08) = 71.15 kg",
        "Paso 4: Rango saludable según IMC de la OMS (18.5–24.9): 58.6 kg a 78.9 kg"
      ],
      fr: [
        "Étape 1 : Convertir la taille : 178 cm = 70,08 pouces (10,08 pouces au-dessus de 5 pieds)",
        "Étape 2 : Formule de Devine : 50,0 kg + (2,3 kg × 10,08) = 73,18 kg",
        "Étape 3 : Formule de Robinson : 52,0 kg + (1,9 kg × 10,08) = 71,15 kg",
        "Étape 4 : Plage de poids santé selon l'OMS (18,5 à 24,9 kg/m²) : 58,6 kg à 78,9 kg"
      ],
      de: [
        "Schritt 1: Größe umrechnen: 178 cm = 70,08 Zoll (10,08 Zoll über 5 Fuß)",
        "Schritt 2: Devine-Formel: 50,0 kg + (2,3 kg × 10,08) = 73,18 kg",
        "Schritt 3: Robinson-Formel: 52,0 kg + (1,9 kg × 10,08) = 71,15 kg",
        "Schritt 4: Normalgewichtsbereich nach WHO (18,5–24,9 kg/m²): 58,6 kg bis 78,9 kg"
      ],
      ko: [
        "1단계: 신장 변환: 178 cm = 70.08인치 (5피트 기준 10.08인치 초과)",
        "2단계: Devine 공식 적용: 50.0 kg + (2.3 kg × 10.08) = 73.18 kg",
        "3단계: Robinson 공식 비교: 52.0 kg + (1.9 kg × 10.08) = 71.15 kg",
        "4단계: WHO 정상 BMI 체중 구간 (18.5~24.9 kg/m²): 58.6 kg ~ 78.9 kg"
      ],
      hi: [
        "चरण 1: ऊंचाई को इंच में बदलें: 178 सेमी = 70.08 इंच (5 फीट से 10.08 इंच अधिक)",
        "चरण 2: डिवाइन फॉर्मूला: 50.0 किग्रा + (2.3 किग्रा × 10.08) = 73.18 किग्रा",
        "चरण 3: रॉबिन्सन फॉर्मूला तुलना: 52.0 किग्रा + (1.9 किग्रा × 10.08) = 71.15 किग्रा",
        "चरण 4: डब्ल्यूएचओ स्वस्थ बीएमआई वजन सीमा (18.5 से 24.9 kg/m²): 58.6 किग्रा से 78.9 किग्रा"
      ]
    },
    result: {
      en: { label: "Estimated Ideal Body Weight (Devine)", value: "73.2 kg (161.4 lbs)" },
      es: { label: "Peso Corporal Ideal Estimado (Devine)", value: "73.2 kg (161.4 lbs)" },
      fr: { label: "Poids Idéal Théorique (Devine)", value: "73,2 kg (161,4 lbs)" },
      de: { label: "Geschätztes Idealgewicht (Devine)", value: "73,2 kg (161,4 lbs)" },
      ko: { label: "Devine 공식 기반 추정 이상 체중", value: "73.2 kg (161.4 lbs)" },
      hi: { label: "अनुमानित आदर्श शारीरिक वजन (डिवाइन)", value: "73.2 किग्रा (161.4 पाउंड)" }
    },
    interp: {
      en: "For a 5'10\" male, common formulas estimate an ideal weight of about 71 to 73 kg. The WHO healthy weight range provides a wider window of 59 to 79 kg. Frame size, muscle mass, and bone density naturally shift your personal healthy weight. Muscular athletes often weigh more than formula targets while staying lean.",
      es: "Para un hombre de 178 cm, las fórmulas estiman un peso ideal entre 71 y 73 kg, con un rango saludable según la OMS de 59 a 79 kg. La masa muscular, contextura ósea y grasa corporal definen el peso saludable real de cada persona.",
      fr: "Pour un homme de 178 cm, les formules estiment un poids idéal d'environ 71 à 73 kg, dans une fourchette santé OMS de 59 à 79 kg. La masse musculaire et l'ossature déterminent le poids de forme individuel.",
      de: "Für einen 178 cm großen Mann schätzen die Formeln ein Idealgewicht von ca. 71 bis 73 kg (WHO-Bereich: 59 bis 79 kg). Muskelmasse und Knochenbau beeinflussen das individuelle Wohlfühlgewicht maßgeblich.",
      ko: "키 178cm 성인 남성의 경우 임상 공식상 이상 체중은 약 71~73kg이며, WHO 정상 범위는 59~79kg입니다. 골격 크기와 근육량에 따라 개인별 최적 건강 체중은 유연하게 달라집니다.",
      hi: "178 सेमी लंबे पुरुष के लिए सूत्रों के अनुसार आदर्श वजन लगभग 71 से 73 किग्रा है, जबकि डब्ल्यूएचओ स्वस्थ सीमा 59 से 79 किग्रा है। मांसपेशियों का अनुपात और हड्डियों की बनावट व्यक्तिगत स्वस्थ वजन को प्रभावित करते हैं।"
    }
  },

  // 10. Protein Intake Calculator
  'pregnancy-weight-gain-calculator': {
    inputs: {
      en: [
        { label: "Pre-Pregnancy Weight", value: "60.0 kg (132.3 lbs)" },
        { label: "Current Weight", value: "66.5 kg (146.6 lbs)" },
        { label: "Gestational Week", value: "Week 24 (Trimester 2)" }
      ],
      es: [
        { label: "Peso Pre-Embarazo", value: "60.0 kg (132.3 lbs)" },
        { label: "Peso Actual", value: "66.5 kg (146.6 lbs)" },
        { label: "Semana de Gestación", value: "Semana 24 (2.º Trimestre)" }
      ],
      fr: [
        { label: "Poids Pré-Grossesse", value: "60,0 kg (132,3 lbs)" },
        { label: "Poids Actuel", value: "66,5 kg (146,6 lbs)" },
        { label: "Semaine de Grossesse", value: "Semaine 24 (2e Trimestre)" }
      ],
      de: [
        { label: "Vor-Schwangerschaftsgewicht", value: "60,0 kg (132,3 lbs)" },
        { label: "Aktuelles Gewicht", value: "66,5 kg (146,6 lbs)" },
        { label: "Schwangerschaftswoche", value: "Woche 24 (2. Trimester)" }
      ],
      ko: [
        { label: "임신 전 체중", value: "60.0 kg (132.3 lbs)" },
        { label: "현재 체중", value: "66.5 kg (146.6 lbs)" },
        { label: "임신 주수", value: "24주차 (임신 중기)" }
      ],
      hi: [
        { label: "गर्भावस्था पूर्व वजन", value: "60.0 किग्रा (132.3 पाउंड)" },
        { label: "वर्तमान वजन", value: "66.5 किग्रा (146.6 पाउंड)" },
        { label: "गर्भावस्था सप्ताह", value: "सप्ताह 24 (दूसरी तिमाही)" }
      ]
    },
    steps: {
      en: [
        "Step 1: Calculate net gestational weight gain: Current Weight (66.5 kg) − Pre-Pregnancy Weight (60.0 kg) = +6.5 kg (+14.3 lbs)",
        "Step 2: Identify pre-pregnancy BMI category: Normal Pre-BMI (18.5–24.9) targets 11.5 to 16.0 kg total gain over 40 weeks",
        "Step 3: Calculate expected target for Week 24: (24 / 40) × total range = 6.9 to 9.6 kg proportional reference target",
        "Step 4: Assess gestational trajectory: A gain of +6.5 kg at Week 24 aligns closely with IOM & ACOG healthy progression milestones"
      ],
      es: [
        "Paso 1: Calcular la ganancia neta gestacional: Peso Actual (66.5 kg) − Peso Previo (60.0 kg) = +6.5 kg (+14.3 lbs)",
        "Paso 2: Identificar la categoría de IMC pregestacional: Con IMC normal (18.5–24.9), la meta total recomendada es de 11.5 a 16.0 kg",
        "Paso 3: Calcular el rango esperado para la semana 24: (24 / 40) × rango total = 6.9 a 9.6 kg de referencia proporcional",
        "Paso 4: Evaluar la trayectoria gestacional: La ganancia de +6.5 kg en la semana 24 se encuentra en un ritmo saludable según las pautas del IOM y ACOG"
      ],
      fr: [
        "Étape 1 : Calculer la prise de poids nette : Poids actuel (66,5 kg) − Poids avant grossesse (60,0 kg) = +6,5 kg (+14,3 lbs)",
        "Étape 2 : Identifier la catégorie d'IMC pré-grossesse : Pour un IMC normal (18,5–24,9), l'objectif total IOM est de 11,5 à 16,0 kg",
        "Étape 3 : Calculer la fourchette proportionnelle à la 24e semaine : (24 / 40) × fourchette totale = 6,9 à 9,6 kg de référence",
        "Étape 4 : Évaluer la courbe de progression : Un gain de +6,5 kg à 24 semaines traduit une évolution gestationnelle équilibrée et physiologique"
      ],
      de: [
        "Schritt 1: Netto-Gewichtszunahme berechnen: Aktuelles Gewicht (66,5 kg) − Vor-Schwangerschaftsgewicht (60,0 kg) = +6,5 kg (+14,3 lbs)",
        "Schritt 2: Ausgangs-BMI vor der Schwangerschaft einordnen: Bei normalem BMI (18,5–24,9) empfiehlt das IOM eine Gesamtzunahme von 11,5 bis 16,0 kg",
        "Schritt 3: Erwarteten Richtwert für Woche 24 ermitteln: (24 / 40) × Gesamtziel = 6,9 bis 9,6 kg proportionaler Richtwert",
        "Schritt 4: Verlaufskurve bewerten: Eine Zunahme von +6,5 kg in Woche 24 entspricht einem gesunden und stabilen Verlauf nach IOM- und ACOG-Standards"
      ],
      ko: [
        "1단계: 순 임신 체중 증가량 계산: 현재 체중(66.5 kg) − 임신 전 체중(60.0 kg) = +6.5 kg (+14.3 lbs)",
        "2단계: 임신 전 기준 BMI 분류 확인: 정상 BMI(18.5~24.9) 산모의 40주 총 권장 체중 증가는 11.5 ~ 16.0 kg",
        "3단계: 24주차 비례 권장 범위 산출: (24 / 40) × 총 목표 범위 = 6.9 ~ 9.6 kg 권장 기준",
        "4단계: 체중 증가 궤적 평가: 24주차에 +6.5 kg 증가는 미국 의학연구소(IOM) 및 산부인과학회(ACOG) 기준에 부합하는 매우 건강한 진행 상태입니다"
      ],
      hi: [
        "चरण 1: शुद्ध गर्भावस्था वजन वृद्धि की गणना करें: वर्तमान वजन (66.5 किग्रा) − गर्भावस्था पूर्व वजन (60.0 किग्रा) = +6.5 किग्रा (+14.3 पाउंड)",
        "चरण 2: गर्भावस्था पूर्व बीएमआई श्रेणी पहचानें: सामान्य बीएमआई (18.5–24.9) के लिए 40 सप्ताह में कुल 11.5 से 16.0 किग्रा अनुशंसित है",
        "चरण 3: सप्ताह 24 के लिए आनुपातिक सीमा: (24 / 40) × कुल सीमा = 6.9 से 9.6 किग्रा संदर्भ सीमा",
        "चरण 4: वृद्धि प्रक्षेपवक्र का मूल्यांकन: सप्ताह 24 पर +6.5 किग्रा की वृद्धि IOM एवं ACOG दिशानिर्देशों के अनुसार पूर्णतः स्वस्थ और संतुलित है"
      ]
    },
    result: {
      en: { label: "Gestational Weight Gain (Week 24)", value: "+6.5 kg (+14.3 lbs) — On Track" },
      es: { label: "Ganancia Ponderal en Semana 24", value: "+6.5 kg (+14.3 lbs) — En Rango Óptimo" },
      fr: { label: "Prise de Poids Gestationnelle (Semaine 24)", value: "+6,5 kg (+14,3 lbs) — Évolution Normale" },
      de: { label: "Gewichtszunahme in Schwangerschaftswoche 24", value: "+6,5 kg (+14,3 lbs) — Im Zielbereich" },
      ko: { label: "임신 24주차 누적 체중 증가", value: "+6.5 kg (+14.3 lbs) — 정상 진행 중" },
      hi: { label: "गर्भावस्था वजन वृद्धि (सप्ताह 24)", value: "+6.5 किग्रा (+14.3 पाउंड) — संतुलित लक्ष्य में" }
    },
    interp: {
      en: "A weight gain of 6.5 kg by Week 24 reflects healthy gestational progression for a mother with a normal pre-pregnancy BMI. Gestational weight gain is distributed across maternal blood volume expansion (+1.5 kg), the placenta (+0.6 kg), amniotic fluid (+0.8 kg), breast and uterine tissue (+1.5 kg), maternal energy stores (+3.0 kg), and the developing fetus (~0.7 kg at week 24). Continue regular prenatal visits with your healthcare provider.",
      es: "Un aumento de 6.5 kg hacia la semana 24 indica una evolución gestacional saludable para una madre con IMC previo normal. El peso ganado se distribuye entre el aumento del volumen sanguíneo (+1.5 kg), la placenta (+0.6 kg), el líquido amniótico (+0.8 kg), tejido uterino y mamario (+1.5 kg), reservas maternas (+3.0 kg) y el feto (~0.7 kg a las 24 semanas). Mantenga sus revisiones prenatales periódicas.",
      fr: "Un gain de 6,5 kg à la 24e semaine témoigne d'une prise de poids gestationnelle saine pour un IMC pré-grossesse normal. Cette prise de poids se répartit entre l'expansion du volume sanguin (+1,5 kg), le placenta (+0,6 kg), le liquide amniotique (+0,8 kg), les tissus utérins et mammaires (+1,5 kg), les réserves maternelles (+3,0 kg) et le fœtus (~0,7 kg à 24 semaines). Poursuivez un suivi régulier avec votre professionnel de santé.",
      de: "Eine Gewichtszunahme von 6,5 kg bis zur 24. Schwangerschaftswoche spiegelt einen gesunden Verlauf bei normalem Ausgangs-BMI wider. Das zusätzliche Gewicht verteilt sich auf Blutvolumenzunahme (+1,5 kg), Plazenta (+0,6 kg), Fruchtwasser (+0,8 kg), Brust- und Gebärmuttergewebe (+1,5 kg), mütterliche Energiereserven (+3,0 kg) und das heranwachsende Kind (~0,7 kg in Woche 24). Halten Sie die regulären Vorsorgetermine ein.",
      ko: "임신 전 정상 체중 산모가 24주차에 6.5kg 증가한 것은 매우 건강한 임신 진행을 나타냅니다. 임신 중 체중 증가는 순수 체지방뿐 아니라 모체 혈액량 증가(+1.5kg), 태반(+0.6kg), 양수(+0.8kg), 유선 및 자궁 발달(+1.5kg), 모체 영양 비축(+3.0kg), 태아 성장(24주차 약 0.7kg)으로 자연스럽게 분산됩니다. 정기적인 산전 검진을 꾸준히 유지하세요.",
      hi: "गर्भावस्था के 24वें सप्ताह तक 6.5 किग्रा वजन बढ़ना सामान्य प्री-प्रेग्नेंसी बीएमआई वाली महिला के लिए एक स्वस्थ प्रगति दर्शाता है। गर्भावस्था में बढ़ा हुआ वजन केवल वसा नहीं होता, बल्कि मातृ रक्त की मात्रा में वृद्धि (+1.5 किग्रा), प्लेसेंटा (+0.6 किग्रा), एमनियोटिक द्रव (+0.8 किग्रा), गर्भाशय व स्तन ऊतक (+1.5 किग्रा), ऊर्जा भंडार (+3.0 किग्रा) और भ्रूण के विकास (24वें सप्ताह में ~0.7 किग्रा) में वितरित होता है। अपने डॉक्टर से नियमित परामर्श जारी रखें।"
    }
  },
  'protein-intake-calculator': {
    inputs: {
      en: [{ label: "Body Weight", value: "75.0 kg (165.3 lbs)" }, { label: "Activity Goal", value: "Strength Training & Muscle Growth (1.6 g/kg)" }],
      es: [{ label: "Peso Corporal", value: "75.0 kg (165.3 lbs)" }, { label: "Objetivo y Actividad", value: "Entrenamiento de Fuerza y Músculo (1.6 g/kg)" }],
      fr: [{ label: "Poids Corporel", value: "75,0 kg (165,3 lbs)" }, { label: "Objectif Sportif", value: "Renforcement et Prise de Muscle (1,6 g/kg)" }],
      de: [{ label: "Körpergewicht", value: "75,0 kg (165,3 lbs)" }, { label: "Trainingsziel", value: "Krafttraining & Muskelaufbau (1,6 g/kg)" }],
      ko: [{ label: "체중", value: "75.0 kg (165.3 lbs)" }, { label: "활동 및 운동 목표", value: "근력 운동 및 근육량 증가 (1.6 g/kg)" }],
      hi: [{ label: "शरीर का वजन", value: "75.0 किग्रा (165.3 पाउंड)" }, { label: "गतिविधि व फिटनेस लक्ष्य", value: "स्ट्रेंथ ट्रेनिंग एवं मांसपेशी विकास (1.6 ग्राम/किग्रा)" }]
    },
    steps: {
      en: [
        "Step 1: Identify protein multiplier for your goal: 1.6 grams per kilogram",
        "Step 2: Multiply body weight by protein factor: 75.0 kg × 1.6 g/kg",
        "Step 3: Daily protein target: 120.0 grams of protein per day",
        "Step 4: Target per meal (divided over 3 to 4 meals): 30 to 40 grams of protein"
      ],
      es: [
        "Paso 1: Identificar factor proteico para el objetivo: 1.6 g por kilogramo",
        "Paso 2: Multiplicar peso corporal por el factor: 75.0 kg × 1.6 g/kg",
        "Paso 3: Objetivo proteico diario: 120.0 gramos de proteína al día",
        "Paso 4: Reparto por comida (dividido en 3 o 4 tomas): 30 a 40 gramos de proteína"
      ],
      fr: [
        "Étape 1 : Identifier le coefficient adapté à l'objectif : 1,6 g par kilogramme",
        "Étape 2 : Multiplier le poids par le coefficient : 75,0 kg × 1,6 g/kg",
        "Étape 3 : Cible protéique quotidienne : 120,0 grammes de protéines par jour",
        "Étape 4 : Cible par repas (répartie sur 3 à 4 repas) : 30 à 40 grammes"
      ],
      de: [
        "Schritt 1: Protein-Multiplikator für das Ziel bestimmen: 1,6 g pro Kilogramm",
        "Schritt 2: Körpergewicht mit Multiplikator multiplizieren: 75,0 kg × 1,6 g/kg",
        "Schritt 3: Tagesziel an Protein: 120,0 Gramm Eiweiß pro Tag",
        "Schritt 4: Verteilung pro Mahlzeit (über 3 bis 4 Mahlzeiten): 30 bis 40 Gramm"
      ],
      ko: [
        "1단계: 운동 목표별 단백질 계수 확인: 체중 1kg당 1.6g",
        "2단계: 체중과 목표 계수 곱셈: 75.0 kg × 1.6 g/kg",
        "3단계: 하루 총 단백질 권장량: 120.0g / 일",
        "4단계: 끼니별 권장량 (하루 3~4회 식사 기준 분할): 회당 약 30~40g"
      ],
      hi: [
        "चरण 1: फिटनेस लक्ष्य के अनुसार प्रोटीन गुणक चुनें: 1.6 ग्राम प्रति किग्रा",
        "चरण 2: वजन को प्रोटीन गुणक से गुणा करें: 75.0 किग्रा × 1.6 ग्राम/किग्रा",
        "चरण 3: दैनिक प्रोटीन आवश्यकता: 120.0 ग्राम प्रोटीन प्रतिदिन",
        "चरण 4: प्रति भोजन लक्ष्य (3 से 4 बार में विभाजित): 30 से 40 ग्राम प्रोटीन"
      ]
    },
    result: {
      en: { label: "Target Daily Protein Intake", value: "120 g / day (1.6 g/kg)" },
      es: { label: "Ingesta Proteica Diaria Objetivo", value: "120 g / día (1.6 g/kg)" },
      fr: { label: "Apport Protéique Journalier Conseillé", value: "120 g / jour (1,6 g/kg)" },
      de: { label: "Täglicher Eiweiß-Zielwert", value: "120 g / Tag (1,6 g/kg)" },
      ko: { label: "일일 권장 단백질 섭취량", value: "120 g / 일 (1.6 g/kg)" },
      hi: { label: "दैनिक लक्षित प्रोटीन सेवन", value: "120 ग्राम / दिन (1.6 ग्राम/किग्रा)" }
    },
    interp: {
      en: "Eating 120 grams of protein daily supports muscle repair and strength gains for a 75 kg lifter. Spread your protein across 3 to 4 meals, aiming for 30 to 40 grams each time. Good sources include eggs, chicken, fish, tofu, Greek yogurt, and lentils. Drink plenty of water throughout the day to stay well hydrated.",
      es: "Consumir 120 g diarios de proteína favorece la síntesis muscular en un adulto de 75 kg. Se recomienda repartir esta cantidad en 3 o 4 comidas (30 a 40 g por comida) con fuentes saludables como huevos, aves, pescado, legumbres, tofu o yogur natural.",
      fr: "Un apport de 120 g de protéines par jour optimise la récupération musculaire pour 75 kg de poids de corps. Répartissez cet apport sur 3 à 4 repas (30 à 40 g par repas) en privilégiant œufs, volaille, poisson, légumineuses et tofu.",
      de: "Eine Zufuhr von 120 g Eiweiß pro Tag unterstützt Muskelregeneration und Kraftaufbau bei 75 kg Körpergewicht. Verteilen Sie die Zufuhr auf 3 bis 4 Mahlzeiten (30 bis 40 g pro Portion) mit vollwertigen Proteinquellen.",
      ko: "체중 75kg 운동자의 경우 하루 120g의 단백질 섭취가 근육 회복과 근비대를 촉진합니다. 하루 3~4끼에 걸쳐 끼니당 30~40g씩 고르게 나누어 섭취하는 것이 생체 이용률에 유리합니다.",
      hi: "75 किग्रा वजन वाले व्यक्ति के लिए प्रतिदिन 120 ग्राम प्रोटीन मांसपेशियों की मरम्मत और शक्ति वृद्धि में मदद करता है। इसे दिन में 3 से 4 भोजन में 30 से 40 ग्राम प्रति भोजन के रूप में विभाजित करें।"
    }
  },

  // 12. Healthy Weight by Height Calculator
  'healthy-weight-by-height': {
    inputs: {
      en: [
        { label: "Height", value: "175.0 cm (5'9\")" },
        { label: "Gender Profile", value: "Male" },
        { label: "Current Weight (Optional)", value: "70.0 kg (154.3 lbs)" }
      ],
      es: [
        { label: "Estatura", value: "175.0 cm (5'9\")" },
        { label: "Género Biológico", value: "Masculino" },
        { label: "Peso Actual (Opcional)", value: "70.0 kg (154.3 lbs)" }
      ],
      fr: [
        { label: "Taille", value: "175,0 cm (5'9\")" },
        { label: "Profil Biologique", value: "Homme" },
        { label: "Poids Actuel (Optionnel)", value: "70,0 kg (154,3 lbs)" }
      ],
      de: [
        { label: "Körpergröße", value: "175,0 cm (5'9\")" },
        { label: "Geschlecht", value: "Männlich" },
        { label: "Aktuelles Gewicht (Optional)", value: "70,0 kg (154,3 lbs)" }
      ],
      ko: [
        { label: "신장", value: "175.0 cm (5'9\")" },
        { label: "생물학적 성별", value: "남성" },
        { label: "현재 체중 (선택사항)", value: "70.0 kg (154.3 lbs)" }
      ],
      hi: [
        { label: "ऊंचाई", value: "175.0 सेमी (5'9\")" },
        { label: "जैविक लिंग", value: "पुरुष" },
        { label: "वर्तमान वजन (वैकल्पिक)", value: "70.0 किग्रा (154.3 पाउंड)" }
      ]
    },
    steps: {
      en: [
        "Step 1: Convert height to meters squared: 1.75 m × 1.75 m = 3.0625 m²",
        "Step 2: WHO minimum healthy weight (BMI 18.5): 18.5 × 3.0625 = 56.7 kg (125.0 lbs)",
        "Step 3: WHO maximum healthy weight (BMI 24.9): 24.9 × 3.0625 = 76.3 kg (168.2 lbs)",
        "Step 4: Devine Ideal Body Weight (175 cm = 68.9 in; 8.9 in over 5 ft): 50.0 + (2.3 × 8.9) = 70.5 kg (155.4 lbs)",
        "Step 5: Current weight status (70.0 kg): Inside optimal range, within 0.5 kg of Devine IBW benchmark"
      ],
      es: [
        "Paso 1: Convertir estatura a metros cuadrados: 1.75 m × 1.75 m = 3.0625 m²",
        "Paso 2: Peso saludable mínimo según la OMS (IMC 18.5): 18.5 × 3.0625 = 56.7 kg (125.0 lbs)",
        "Paso 3: Peso saludable máximo según la OMS (IMC 24.9): 24.9 × 3.0625 = 76.3 kg (168.2 lbs)",
        "Paso 4: Peso Corporal Ideal Devine (175 cm = 68.9 pulg; 8.9 sobre 5 pies): 50.0 + (2.3 × 8.9) = 70.5 kg (155.4 lbs)",
        "Paso 5: Evaluación del peso actual (70.0 kg): Dentro del rango óptimo, a solo 0.5 kg de la referencia Devine"
      ],
      fr: [
        "Étape 1 : Calculer la taille au carré en mètres : 1,75 m × 1,75 m = 3,0625 m²",
        "Étape 2 : Poids santé minimum selon l'OMS (IMC 18,5) : 18,5 × 3,0625 = 56,7 kg (125,0 lbs)",
        "Étape 3 : Poids santé maximum selon l'OMS (IMC 24,9) : 24,9 × 3,0625 = 76,3 kg (168,2 lbs)",
        "Étape 4 : Poids Idéal Devine (175 cm = 68,9 po ; 8,9 au-dessus de 5 pi) : 50,0 + (2,3 × 8,9) = 70,5 kg (155,4 lbs)",
        "Étape 5 : Évaluation du poids actuel (70,0 kg) : Situé dans la fourchette optimale, à 0,5 kg de la référence Devine"
      ],
      de: [
        "Schritt 1: Größe in Metern quadrieren: 1,75 m × 1,75 m = 3,0625 m²",
        "Schritt 2: WHO-Mindestgewicht für Normalgewicht (BMI 18,5): 18,5 × 3,0625 = 56,7 kg (125,0 lbs)",
        "Schritt 3: WHO-Höchstgewicht für Normalgewicht (BMI 24,9): 24,9 × 3,0625 = 76,3 kg (168,2 lbs)",
        "Schritt 4: Devine Idealgewicht (175 cm = 68,9 Zoll; 8,9 Zoll über 5 Fuß): 50,0 + (2,3 × 8,9) = 70,5 kg (155,4 lbs)",
        "Schritt 5: Aktuelles Gewicht (70,0 kg) einordnen: Im gesunden Optimalbereich, 0,5 kg unter Devine-IBW"
      ],
      ko: [
        "1단계: 신장 미터 제곱 산출: 1.75 m × 1.75 m = 3.0625 m²",
        "2단계: WHO 정상 최소 권장 체중 산출 (BMI 18.5): 18.5 × 3.0625 = 56.7 kg (125.0 lbs)",
        "3단계: WHO 정상 최대 권장 체중 산출 (BMI 24.9): 24.9 × 3.0625 = 76.3 kg (168.2 lbs)",
        "4단계: Devine 이상 체중(IBW) 계산 (175 cm = 68.9인치; 5피트 기준 8.9인치 초과): 50.0 + (2.3 × 8.9) = 70.5 kg (155.4 lbs)",
        "5단계: 현재 체중(70.0 kg) 평가: 건강한 적정 범위 내 위치, Devine 기준치 대비 0.5 kg 편차"
      ],
      hi: [
        "चरण 1: मीटर में ऊंचाई का वर्ग निकालें: 1.75 मी × 1.75 मी = 3.0625 वर्ग मीटर",
        "चरण 2: डब्ल्यूएचओ न्यूनतम स्वस्थ वजन (बीएमआई 18.5): 18.5 × 3.0625 = 56.7 किग्रा (125.0 पाउंड)",
        "चरण 3: डब्ल्यूएचओ अधिकतम स्वस्थ वजन (बीएमआई 24.9): 24.9 × 3.0625 = 76.3 किग्रा (168.2 पाउंड)",
        "चरण 4: डिवाइन आदर्श वजन (175 सेमी = 68.9 इंच; 5 फीट से 8.9 इंच अधिक): 50.0 + (2.3 × 8.9) = 70.5 किग्रा (155.4 पाउंड)",
        "चरण 5: वर्तमान वजन (70.0 किग्रा) का मूल्यांकन: स्वस्थ सीमा के भीतर, डिवाइन मानक से केवल 0.5 किग्रा का अंतर"
      ]
    },
    result: {
      en: { label: "WHO Healthy Weight Range (175 cm)", value: "56.7 - 76.3 kg (125.0 - 168.2 lbs)" },
      es: { label: "Rango de Peso Saludable OMS (175 cm)", value: "56.7 - 76.3 kg (125.0 - 168.2 lbs)" },
      fr: { label: "Fourchette de Poids Santé OMS (175 cm)", value: "56,7 - 76,3 kg (125,0 - 168,2 lbs)" },
      de: { label: "WHO-Normalgewichtsbereich (175 cm)", value: "56,7 - 76,3 kg (125,0 - 168,2 lbs)" },
      ko: { label: "WHO 건강 권장 체중 범위 (175 cm)", value: "56.7 - 76.3 kg (125.0 - 168.2 lbs)" },
      hi: { label: "डब्ल्यूएचओ स्वस्थ वजन सीमा (175 सेमी)", value: "56.7 - 76.3 किग्रा (125.0 - 168.2 पाउंड)" }
    },
    interp: {
      en: "For a 175 cm (5'9\") adult, the healthy weight window spans nearly 20 kg (56.7 to 76.3 kg). Rather than fixating on a single arbitrary target like 70.5 kg, optimal weight depends on bone structure and body composition. A lean, small-framed person may thrive at 60 kg, while a muscular athlete can weigh 75 kg with optimal cardiovascular and metabolic biomarkers.",
      es: "Para un adulto de 175 cm, la ventana de peso saludable abarca casi 20 kg (56.7 a 76.3 kg). Más que obsesionarse con un número único como 70.5 kg, el peso óptimo depende de la contextura ósea y composición corporal. Una persona delgada de huesos finos se sentirá óptima en 60 kg, mientras un atleta musculoso puede pesar 75 kg con perfecta salud cardiometabólica.",
      fr: "Pour un adulte de 175 cm, la plage de poids santé s'étend sur près de 20 kg (56,7 à 76,3 kg). Plutôt que de viser un chiffre unique figé comme 70,5 kg, le poids optimal varie selon la structure osseuse et la composition corporelle. Une personne à ossature fine s'épanouira à 60 kg, tandis qu'un athlète musclé atteindra 75 kg avec d'excellents marqueurs de santé.",
      de: "Für einen 175 cm großen Erwachsenen umfasst das gesunde Gewichtsspektrum fast 20 kg (56,7 bis 76,3 kg). Statt sich auf ein starres Einzelziel wie 70,5 kg zu versteifen, hängt das persönliche Wohlfühlgewicht von Knochenbau und Muskelmasse ab. Eine zierliche Person fühlt sich bei 60 kg vital, während ein durchtrainierter Sportler bei 75 kg beste Stoffwechselwerte aufweist.",
      ko: "키 175cm 성인의 건강 권장 체중 구간은 약 20kg(56.7~76.3kg)에 달하는 유연한 범위를 가집니다. 70.5kg이라는 단일 수치에 얽매이기보다 골격 크기와 체성분이 중요합니다. 가는 골격의 성인은 60kg 부근에서 건강을 유지하고, 근육량이 많은 운동선수는 75kg에서도 최상의 대사 건강 지표를 나타냅니다.",
      hi: "175 सेमी लंबे वयस्क के लिए स्वस्थ वजन का दायरा लगभग 20 किग्रा (56.7 से 76.3 किग्रा) का होता है। 70.5 किग्रा जैसे किसी एकल आंकड़े पर जोर देने के बजाय, वास्तविक स्वस्थ वजन हड्डियों के ढांचे और मांसपेशियों पर निर्भर करता है। पतले ढांचे वाला व्यक्ति 60 किग्रा पर फिट रह सकता है, जबकि एक खिलाड़ी 75 किग्रा पर भी उत्कृष्ट स्वास्थ्य बनाए रखता है।"
    }
  },

  // 13. Maintenance Calorie Calculator
  'maintenance-calorie-calculator': {
    inputs: {
      en: [
        { label: "Body Weight & Stature", value: "75.0 kg (165.3 lbs) | 178 cm (5'10\")" },
        { label: "Age & Biological Profile", value: "30 yrs | Male" },
        { label: "Activity Level", value: "Moderate Exercise (3–5 days/wk, PAL = 1.55)" }
      ],
      es: [
        { label: "Peso y Estatura Corporal", value: "75.0 kg (165.3 lbs) | 178 cm (5'10\")" },
        { label: "Edad y Perfil Biológico", value: "30 años | Masculino" },
        { label: "Nivel de Actividad", value: "Ejercicio Moderado (3 a 5 días/sem, PAL = 1.55)" }
      ],
      fr: [
        { label: "Poids et Taille Corporelle", value: "75,0 kg (165,3 lbs) | 178 cm (5'10\")" },
        { label: "Âge et Profil Biologique", value: "30 ans | Homme" },
        { label: "Niveau d'Activité", value: "Activité Modérée (3–5 séances/sem, PAL = 1,55)" }
      ],
      de: [
        { label: "Körpergewicht & Größe", value: "75,0 kg (165,3 lbs) | 178 cm (5'10\")" },
        { label: "Alter & Geschlecht", value: "30 Jahre | Männlich" },
        { label: "Aktivitätsniveau", value: "Mäßig aktiv (3–5 Tage/Woche, PAL = 1,55)" }
      ],
      ko: [
        { label: "체중 및 신장", value: "75.0 kg (165.3 lbs) | 178 cm (5'10\")" },
        { label: "연령 및 생물학적 성별", value: "30세 | 남성" },
        { label: "신체 활동 수준", value: "보통 운동 (주 3~5회 운동, 계수 = 1.55)" }
      ],
      hi: [
        { label: "शारीरिक वजन एवं ऊंचाई", value: "75.0 किग्रा (165.3 पाउंड) | 178 सेमी (5'10\")" },
        { label: "उम्र एवं जैविक लिंग", value: "30 वर्ष | पुरुष" },
        { label: "गतिविधि स्तर", value: "मध्यम व्यायाम (सप्ताह में 3-5 दिन, PAL = 1.55)" }
      ]
    },
    steps: {
      en: [
        "Step 1: Compute Basal Metabolic Rate (Mifflin-St Jeor): 10(75) + 6.25(178) - 5(30) + 5 = 1,730 kcal/day",
        "Step 2: Multiply by Moderate Activity PAL (1.55): 1,730 × 1.55 = 2,682 kcal/day (Maintenance Baseline)",
        "Step 3: Standard Fat Loss Target (-500 kcal/day): 2,682 - 500 = 2,182 kcal/day (~0.45 kg / 1 lb fat loss/wk)",
        "Step 4: Aggressive Fat Loss Target (-750 kcal/day): 2,682 - 750 = 1,932 kcal/day (Accelerated deficit)",
        "Step 5: Lean Bulking Surplus Target (+250 kcal/day): 2,682 + 250 = 2,932 kcal/day (Hypertrophy with minimal fat gain)"
      ],
      es: [
        "Paso 1: Calcular Metabolismo Basal (Mifflin-St Jeor): 10(75) + 6.25(178) - 5(30) + 5 = 1,730 kcal/día",
        "Paso 2: Multiplicar por factor moderado PAL (1.55): 1,730 × 1.55 = 2,682 kcal/día (Mantenimiento)",
        "Paso 3: Meta de Pérdida de Grasa (-500 kcal): 2,682 - 500 = 2,182 kcal/día (~0.45 kg grasa/sem)",
        "Paso 4: Déficit Agresivo (-750 kcal): 2,682 - 750 = 1,932 kcal/día (Máximo recomendado)",
        "Paso 5: Superávit para Masa Muscular (+250 kcal): 2,682 + 250 = 2,932 kcal/día (Hipertrofia magra)"
      ],
      fr: [
        "Étape 1 : Calculer le Métabolisme de Base (Mifflin-St Jeor) : 10(75) + 6,25(178) - 5(30) + 5 = 1 730 kcal/jour",
        "Étape 2 : Multiplier par le facteur modéré PAL (1,55) : 1 730 × 1,55 = 2 682 kcal/jour (Maintien de base)",
        "Étape 3 : Objectif Perte de Gras (-500 kcal) : 2 682 - 500 = 2 182 kcal/jour (~0,45 kg perte/semaine)",
        "Étape 4 : Déficit Accéléré (-750 kcal) : 2 682 - 750 = 1 932 kcal/jour (Déficit maximal recommandé)",
        "Étape 5 : Surplus Prise de Masse (+250 kcal) : 2 682 + 250 = 2 932 kcal/jour (Hypertrophie propre)"
      ],
      de: [
        "Schritt 1: Grundumsatz BMR berechnen (Mifflin-St Jeor): 10(75) + 6,25(178) - 5(30) + 5 = 1.730 kcal/Tag",
        "Schritt 2: Mit mäßigem Aktivitätsfaktor PAL (1,55) multiplizieren: 1.730 × 1,55 = 2.682 kcal/Tag (Erhaltung)",
        "Schritt 3: Fettabbau-Zielwert (-500 kcal): 2.682 - 500 = 2.182 kcal/Tag (~0,45 kg Fettverlust/Woche)",
        "Schritt 4: Intensiveres Defizit (-750 kcal): 2.682 - 750 = 1.932 kcal/Tag (Empfohlene Obergrenze)",
        "Schritt 5: Muskelaufbau-Überschuss (+250 kcal): 2.682 + 250 = 2.932 kcal/Tag (Sauberer Aufbau)"
      ],
      ko: [
        "1단계: 기초대사량(BMR) 산출 (Mifflin-St Jeor): 10(75) + 6.25(178) - 5(30) + 5 = 1,730 kcal/일",
        "2단계: 보통 활동 계수 PAL(1.55) 곱연산: 1,730 × 1.55 = 2,682 kcal/일 (유지 기준 칼로리)",
        "3단계: 표준 체지방 감량 목표 (-500 kcal): 2,682 - 500 = 2,182 kcal/일 (주당 약 0.45kg 감량)",
        "4단계: 적극적 감량 목표 (-750 kcal): 2,682 - 750 = 1,932 kcal/일 (최대 권장 결손)",
        "5단계: 린매스업 근비대 잉여 목표 (+250 kcal): 2,682 + 250 = 2,932 kcal/일 (체지방 증가 최소화)"
      ],
      hi: [
        "चरण 1: बेसल मेटाबॉलिक रेट (Mifflin-St Jeor) निकालें: 10(75) + 6.25(178) - 5(30) + 5 = 1,730 कैलोरी/दिन",
        "चरण 2: मध्यम गतिविधि गुणक PAL (1.55) से गुणा करें: 1,730 × 1.55 = 2,682 कैलोरी/दिन (मेंटेनेंस)",
        "चरण 3: मानक वसा घटाने का लक्ष्य (-500 कैलोरी): 2,682 - 500 = 2,182 कैलोरी/दिन (~0.45 किग्रा/सप्ताह)",
        "चरण 4: तीव्र वसा घटाने का लक्ष्य (-750 कैलोरी): 2,682 - 750 = 1,932 कैलोरी/दिन (अधिकतम अनुशंसित घाटा)",
        "चरण 5: मांसपेशी वृद्धि सरप्लस लक्ष्य (+250 कैलोरी): 2,682 + 250 = 2,932 कैलोरी/दिन (लीन बल्क)"
      ]
    },
    result: {
      en: { label: "Daily Energy Targets", value: "Maintenance: 2,682 kcal | Fat Loss: 2,182 kcal | Lean Bulk: 2,932 kcal" },
      es: { label: "Objetivos Energéticos Diarios", value: "Mantenimiento: 2,682 kcal | Pérdida: 2,182 kcal | Volumen: 2,932 kcal" },
      fr: { label: "Objectifs Énergétiques Quotidiens", value: "Maintien : 2 682 kcal | Perte : 2 182 kcal | Prise de Masse : 2 932 kcal" },
      de: { label: "Tägliche Energieziele", value: "Erhaltung: 2.682 kcal | Fettabbau: 2.182 kcal | Muskelaufbau: 2.932 kcal" },
      ko: { label: "일일 목표 칼로리 구간", value: "체중 유지: 2,682 kcal | 체지방 감량: 2,182 kcal | 린매스업: 2,932 kcal" },
      hi: { label: "दैनिक ऊर्जा लक्ष्य", value: "मेंटेनेंस: 2,682 कैलोरी | फैट लॉस: 2,182 कैलोरी | लीन बल्क: 2,932 कैलोरी" }
    },
    interp: {
      en: "Consuming 2,682 kcal/day sustains your body weight at moderate activity. To shed body fat sustainably, target 2,182 kcal/day (-500 kcal deficit). For muscle hypertrophy with minimal fat gain, aim for 2,932 kcal/day (+250 kcal surplus). Next step: Convert these daily calories into specific protein, carbohydrate, and fat grams using the Macro Calculator.",
      es: "Consumir 2,682 kcal/día mantiene su peso corporal con actividad moderada. Para perder grasa gradualmente, consuma 2,182 kcal/día (-500 kcal). Para ganar músculo limpio, apunte a 2,932 kcal/día (+250 kcal). Siguiente paso: Convierta estas calorías en gramos de proteínas, carbohidratos y grasas con la Calculadora de Macros.",
      fr: "Un apport de 2 682 kcal/jour stabilise votre poids avec une activité modérée. Pour perdre de la masse grasse, visez 2 182 kcal/jour (-500 kcal). Pour développer votre masse musculaire, ciblez 2 932 kcal/jour (+250 kcal). Prochaine étape : Répartissez ces calories en grammes de protéines, glucides et lipides via le Calculateur de Macros.",
      de: "Eine Zufuhr von 2.682 kcal/Tag stabilisiert Ihr Gewicht bei moderater Bewegung. Für nachhaltigen Fettabbau sind 2.182 kcal/Tag (-500 kcal) ideal; für sauberen Muskelaufbau 2.932 kcal/Tag (+250 kcal). Nächster Schritt: Wandeln Sie diese Kalorien mit dem Makro-Rechner in Gramm für Eiweiß, Kohlenhydrate und Fett um.",
      ko: "보통 활동량 기준 하루 2,682 kcal를 섭취하면 현재 체중이 유지됩니다. 지속 가능한 체지방 감량을 위해서는 2,182 kcal(-500 kcal 결손), 근육량 증가를 위해서는 2,932 kcal(+250 kcal 잉여)를 권장합니다. 다음 단계: 매크로 계산기를 통해 이 칼로리를 단백질, 탄수화물, 지방의 구체적인 그램으로 배분하세요.",
      hi: "मध्यम गतिविधि के साथ प्रतिदिन 2,682 कैलोरी लेने से वजन स्थिर रहता है। वसा घटाने के लिए 2,182 कैलोरी (-500 घाटा) और मांसपेशी वृद्धि के लिए 2,932 कैलोरी (+250 सरप्लस) का लक्ष्य रखें। अगला कदम: मैक्रो कैलकुलेटर का उपयोग करके इन कैलोरी को प्रोटीन, कार्ब्स और वसा के ग्राम में विभाजित करें।"
    }
  }

,

  // 13. Body Surface Area (BSA) Calculator
  'body-surface-area-calculator': {
    inputs: {
      en: [
        { label: "Patient Height", value: "175.0 cm (1.75 m)" },
        { label: "Patient Weight", value: "70.0 kg (154.3 lbs)" },
        { label: "Clinical Standard", value: "Mosteller Formula (1987)" }
      ],
      es: [
        { label: "Estatura del Paciente", value: "175.0 cm (1.75 m)" },
        { label: "Peso del Paciente", value: "70.0 kg (154.3 lbs)" },
        { label: "Estándar Clínico", value: "Fórmula de Mosteller (1987)" }
      ],
      fr: [
        { label: "Taille du Patient", value: "175,0 cm (1,75 m)" },
        { label: "Poids du Patient", value: "70,0 kg (154,3 lbs)" },
        { label: "Standard Clinique", value: "Formule de Mosteller (1987)" }
      ],
      de: [
        { label: "Körpergröße", value: "175,0 cm (1,75 m)" },
        { label: "Körpergewicht", value: "70,0 kg (154,3 lbs)" },
        { label: "Klinischer Standard", value: "Mosteller-Formel (1987)" }
      ],
      ko: [
        { label: "환자 신장", value: "175.0 cm (1.75 m)" },
        { label: "환자 체중", value: "70.0 kg (154.3 lbs)" },
        { label: "임상 기준 공식", value: "Mosteller 산출식 (1987)" }
      ],
      hi: [
        { label: "मरीज की ऊंचाई", value: "175.0 सेमी (1.75 मी)" },
        { label: "मरीज का वजन", value: "70.0 किग्रा (154.3 पाउंड)" },
        { label: "नैदानिक मानक", value: "मोस्टेलर फॉर्मूला (1987)" }
      ]
    },
    steps: {
      en: [
        "Step 1: Formula: BSA (m²) = √([Height (cm) × Weight (kg)] ÷ 3,600)",
        "Step 2: Biometric multiplication: 175 × 70 = 12,250",
        "Step 3: Standardization division: 12,250 ÷ 3,600 = 3.4028",
        "Step 4: Square root derivation: √3.4028 = 1.8446 m² (rounded to 1.84 m²; Du Bois comparison: 1.85 m²)"
      ],
      es: [
        "Paso 1: Fórmula: ASC (m²) = √([Estatura (cm) × Peso (kg)] ÷ 3,600)",
        "Paso 2: Multiplicación biométrica: 175 × 70 = 12,250",
        "Paso 3: División de normalización: 12,250 ÷ 3,600 = 3.4028",
        "Paso 4: Raíz cuadrada: √3.4028 = 1.84 m² (comparación Du Bois: 1.85 m²)"
      ],
      fr: [
        "Étape 1 : Formule : SC (m²) = √([Taille (cm) × Poids (kg)] ÷ 3 600)",
        "Étape 2 : Multiplication biométrique : 175 × 70 = 12 250",
        "Étape 3 : Normalisation métrique : 12 250 ÷ 3 600 = 3,4028",
        "Étape 4 : Extraction racine carrée : √3,4028 = 1,84 m² (comparatif Du Bois : 1,85 m²)"
      ],
      de: [
        "Schritt 1: Formel: KOF (m²) = √([Größe (cm) × Gewicht (kg)] ÷ 3.600)",
        "Schritt 2: Biometrische Multiplikation: 175 × 70 = 12.250",
        "Schritt 3: Standardisierte Division: 12.250 ÷ 3.600 = 3,4028",
        "Schritt 4: Quadratwurzel berechnen: √3,4028 = 1,84 m² (Du Bois Vergleich: 1,85 m²)"
      ],
      ko: [
        "1단계: 산출 공식: 체표면적(BSA, m²) = √([신장(cm) × 체중(kg)] ÷ 3,600)",
        "2단계: 생체 측정치 곱셈: 175 × 70 = 12,250",
        "3단계: 표준 상수 제산: 12,250 ÷ 3,600 = 3.4028",
        "4단계: 제곱근 산출: √3.4028 = 약 1.84 m² (Du Bois 공식 비교: 1.85 m²)"
      ],
      hi: [
        "चरण 1: फॉर्मूला: बीएसए (m²) = √([ऊंचाई (सेमी) × वजन (किग्रा)] ÷ 3,600)",
        "चरण 2: मान गुणा करें: 175 × 70 = 12,250",
        "चरण 3: मानक स्थिरांक से भाग: 12,250 ÷ 3,600 = 3.4028",
        "चरण 4: वर्गमूल निकालें: √3.4028 = 1.84 वर्ग मीटर (डु बोइस तुलना: 1.85 वर्ग मीटर)"
      ]
    },
    result: {
      en: { label: "Body Surface Area", value: "1.84 m² (Adult Reference: 1.60 – 2.00 m²)" },
      es: { label: "Área de Superficie Corporal", value: "1.84 m² (Referencia Adulto: 1.60 – 2.00 m²)" },
      fr: { label: "Surface Corporelle Totale", value: "1,84 m² (Référence Adulte : 1,60 – 2,00 m²)" },
      de: { label: "Körperoberfläche (KOF)", value: "1,84 m² (Erwachsenen-Referenz: 1,60 – 2,00 m²)" },
      ko: { label: "인체 표면적 (BSA)", value: "1.84 m² (성인 기준 범위: 1.60 – 2.00 m²)" },
      hi: { label: "शरीर की सतह का क्षेत्रफल", value: "1.84 वर्ग मीटर (वयस्क संदर्भ: 1.60 – 2.00 m²)" }
    },
    interp: {
      en: "A calculated Body Surface Area of 1.84 m² places the patient within the normal adult physiological reference range (1.60–2.00 m²; adult male average ~1.90 m², female average ~1.60 m²). In clinical medicine, BSA is the global gold standard for chemotherapy dosage titration (mg/m²), renal clearance standardization (eGFR normalized to 1.73 m²), and cardiac index evaluation (cardiac output ÷ BSA).",
      es: "Un Área de Superficie Corporal de 1.84 m² se sitúa en el intervalo fisiológico estándar para adultos (1.60–2.00 m²). En oncología clínica, el ASC es el estándar de referencia para dosificar agentes quimioterápicos (mg/m²), estandarizar la tasa de filtración glomerular renal (eGFR normalizado a 1.73 m²) y calcular el índice cardíaco.",
      fr: "Une surface corporelle de 1,84 m² se situe dans l'intervalle physiologique standard de l'adulte (1,60–2,00 m²). En médecine hospitalière, la SC constitue la référence absolue pour l'indexation des chimiothérapies antinéoplasiques (mg/m²), l'ajustement du débit de filtration glomérulaire (DFG indexé à 1,73 m²) et le calcul de l'index cardiaque.",
      de: "Eine Körperoberfläche von 1,84 m² liegt im physiologischen Normalbereich für Erwachsene (1,60–2,00 m²). In der klinischen Onkologie dient die KOF als weltweiter Dosierungsstandard für Zytostatika (mg/m²), in der Nephrologie zur eGFR-Indexierung (Norm: 1,73 m²) und in der Kardiologie zur Bestimmung des Herzindex.",
      ko: "산출된 체표면적(BSA) 1.84 m²는 성인 정상 생리적 기준 범위(1.60~2.00 m²)에 정확히 부합합니다. 임상 종양학에서는 항암 화학요법제 용량 적정(mg/m²), 신장학에서는 사구체여과율 표준화(1.73 m² 기준), 순환기내과에서는 심장지수(Cardiac Index) 산출의 핵심 지표로 활용됩니다.",
      hi: "1.84 वर्ग मीटर का शारीरिक सतह क्षेत्र सामान्य वयस्क शारीरिक संदर्भ सीमा (1.60-2.00 m²) के भीतर है। नैदानिक चिकित्सा में, यह कीमोथेरेपी खुराक (mg/m²), किडनी निस्पंदन दर (eGFR को 1.73 m² पर मानकीकृत) और कार्डियक इंडेक्स मूल्यांकन का वैश्विक मानक है।"
    }
  },

  // 14. Waist-to-Hip Ratio (WHR) Calculator
  'waist-to-hip-ratio-calculator': {
    inputs: {
      en: [
        { label: "Biological Sex", value: "Female" },
        { label: "Waist Circumference", value: "82.0 cm (32.3 in) at midpoint" },
        { label: "Hip Circumference", value: "98.0 cm (38.6 in) at maximum extension" }
      ],
      es: [
        { label: "Sexo Biológico", value: "Femenino" },
        { label: "Circunferencia de Cintura", value: "82.0 cm (32.3 in) punto medio" },
        { label: "Circunferencia de Cadera", value: "98.0 cm (38.6 in) máxima extensión" }
      ],
      fr: [
        { label: "Sexe Biologique", value: "Femme" },
        { label: "Tour de Taille", value: "82,0 cm (32,3 in) point médian" },
        { label: "Tour de Hanches", value: "98,0 cm (38,6 in) circonférence maximale" }
      ],
      de: [
        { label: "Biologisches Geschlecht", value: "Weiblich" },
        { label: "Taillenumfang", value: "82,0 cm (32,3 Zoll) Mittelpunkt" },
        { label: "Hüftumfang", value: "98,0 cm (38,6 Zoll) maximale Weite" }
      ],
      ko: [
        { label: "생물학적 성별", value: "여성" },
        { label: "허리 둘레", value: "82.0 cm (갈비뼈 하단-골반 중간선)" },
        { label: "엉덩이 둘레", value: "98.0 cm (둔부 최대 둘레 지점)" }
      ],
      hi: [
        { label: "जैविक लिंग", value: "महिला" },
        { label: "कमर का घेरा", value: "82.0 सेमी (मध्य बिंदु पर)" },
        { label: "कूल्हे का घेरा", value: "98.0 सेमी (अधिकतम फैलाव पर)" }
      ]
    },
    steps: {
      en: [
        "Step 1: Standardized measurement protocol: Waist at midpoint between lowest rib and iliac crest (82 cm); Hips at widest gluteal diameter (98 cm)",
        "Step 2: Formula execution: WHR = Waist Circumference ÷ Hip Circumference",
        "Step 3: Ratio computation: 82.0 ÷ 98.0 = 0.8367 (rounded to 0.84)",
        "Step 4: WHO Cardiometabolic Stratification for Women: Low Risk < 0.85 | Moderate Risk 0.85–0.89 | High Visceral Risk ≥ 0.90"
      ],
      es: [
        "Paso 1: Medición según protocolo OMS: Cintura en punto medio entre costilla y cresta ilíaca (82 cm); Caderas en punto más ancho (98 cm)",
        "Paso 2: Aplicación de la fórmula: ICC = Circunferencia de Cintura ÷ Circunferencia de Cadera",
        "Paso 3: Cálculo del cociente: 82.0 ÷ 98.0 = 0.8367 (redondeado a 0.84)",
        "Paso 4: Estratificación OMS para mujeres: Riesgo Bajo < 0.85 | Riesgo Moderado 0.85–0.89 | Riesgo Alto ≥ 0.90"
      ],
      fr: [
        "Étape 1 : Protocole OMS : Taille au point médian côtes-crête iliaque (82 cm) ; Hanches à la projection fessière maximale (98 cm)",
        "Étape 2 : Application formule : RTH = Tour de Taille ÷ Tour de Hanches",
        "Étape 3 : Calcul du ratio : 82,0 ÷ 98,0 = 0,8367 (arrondi à 0,84)",
        "Étape 4 : Stratification OMS pour femmes : Risque Faible < 0,85 | Risque Modéré 0,85–0,89 | Risque Viscéral Élevé ≥ 0,90"
      ],
      de: [
        "Schritt 1: WHO-Messprotokoll: Taille in der Mitte zwischen Rippen und Beckenkamm (82 cm); Hüfte an breitester Stelle (98 cm)",
        "Schritt 2: Formel anwenden: THV = Taillenumfang ÷ Hüftumfang",
        "Schritt 3: Verhältnis berechnen: 82,0 ÷ 98,0 = 0,8367 (gerundet auf 0,84)",
        "Schritt 4: WHO-Risikoeinstufung für Frauen: Geringes Risiko < 0,85 | Moderat 0,85–0,89 | Hohes viszerales Risiko ≥ 0,90"
      ],
      ko: [
        "1단계: WHO 표준 측정: 최하단 갈비뼈와 장골능 중간 지점 허리(82 cm); 둔부 최대 둘레 지점 엉덩이(98 cm)",
        "2단계: 산출 공식: 허리-엉덩이 비율(WHR) = 허리 둘레 ÷ 엉덩이 둘레",
        "3단계: 수치 계산: 82.0 ÷ 98.0 = 0.8367 (소수점 둘째 자리 반올림: 0.84)",
        "4단계: 여성 기준 WHO 심혈관 대사 위험도 판정: 낮은 위험군 < 0.85 | 중등도 0.85~0.89 | 높은 내장지방 위험군 ≥ 0.90"
      ],
      hi: [
        "चरण 1: डब्ल्यूएचओ मानक माप: निचली पसली और इलियक शिखा के बीच कमर (82 सेमी); नितंबों का अधिकतम फैलाव (98 सेमी)",
        "चरण 2: फॉर्मूला: WHR = कमर का घेरा ÷ कूल्हे का घेरा",
        "चरण 3: अनुपात की गणना: 82.0 ÷ 98.0 = 0.8367 (पूर्णांकित 0.84)",
        "चरण 4: महिलाओं के लिए डब्ल्यूएचओ जोखिम वर्गीकरण: कम जोखिम < 0.85 | मध्यम जोखिम 0.85-0.89 | उच्च आंतरिक वसा जोखिम ≥ 0.90"
      ]
    },
    result: {
      en: { label: "Waist-to-Hip Ratio (WHR)", value: "0.84 WHR (Low Cardiometabolic Risk)" },
      es: { label: "Índice Cintura-Cadera (ICC)", value: "0.84 ICC (Riesgo Cardiometabólico Bajo)" },
      fr: { label: "Ratio Taille-Hanches (RTH)", value: "0,84 RTH (Risque Cardiométabolique Faible)" },
      de: { label: "Taille-Hüft-Verhältnis (THV)", value: "0,84 THV (Geringes Kardiometabolisches Risiko)" },
      ko: { label: "허리-엉덩이 비율 (WHR)", value: "0.84 WHR (낮은 심혈관 대사 위험군)" },
      hi: { label: "कमर-कूल्हा अनुपात (WHR)", value: "0.84 WHR (कम कार्डियोमेटाबॉलिक जोखिम)" }
    },
    interp: {
      en: "A Waist-to-Hip Ratio of 0.84 places this female individual within the WHO Low Cardiometabolic Risk classification (< 0.85 for women; < 0.90 for men). Unlike standard BMI, WHR specifically differentiates health-protective peripheral subcutaneous fat (gynoid pear distribution) from pathogenic deep visceral adipose tissue around vital abdominal organs, which secretes inflammatory cytokines that accelerate cardiovascular and metabolic disorders.",
      es: "Un Índice Cintura-Cadera de 0.84 sitúa a esta mujer en la categoría de Bajo Riesgo Cardiometabólico de la OMS (< 0.85 en mujeres; < 0.90 en hombres). A diferencia del IMC, el ICC aísla el tejido adiposo visceral intraabdominal, el cual se asocia directamente a resistencia a la insulina, dislipidemia aterogénica y enfermedades cardiovasculares.",
      fr: "Un ratio taille-hanches de 0,84 classe cette femme dans la catégorie de risque cardiométabolique faible selon l'OMS (< 0,85 pour les femmes ; < 0,90 pour les hommes). Contrairement à l'IMC classique, le RTH distingue la masse grasse fessière protectrice de la graisse viscérale abdominale profonde, responsable de l'inflammation systémique et des maladies métaboliques.",
      de: "Ein Taille-Hüft-Verhältnis von 0,84 stuft die Person in das geringe kardiometabolische Risiko der WHO ein (< 0,85 für Frauen; < 0,90 für Männer). Im Gegensatz zum Standard-BMI isoliert das THV das stoffwechselaktive viszerale Bauchfett, welches das Risiko für Typ-2-Diabetes und Arteriosklerose signifikant steuert.",
      ko: "산출된 허리-엉덩이 비율 0.84는 여성 기준 세계보건기구(WHO) 낮은 심혈관 대사 위험군(< 0.85)에 해당합니다. 표준 BMI와 달리 WHR은 둔부 피하지방과 장기 주변의 유해한 내장지방을 정밀하게 구분하여 심혈관 질환 및 인슐린 저항성 위험도를 보다 정확하게 예측합니다.",
      hi: "0.84 का कमर-कूल्हा अनुपात इस महिला को विश्व स्वास्थ्य संगठन (WHO) के कम कार्डियोमेटाबॉलिक जोखिम वर्ग (< 0.85) में रखता है। सामान्य बीएमआई के विपरीत, WHR पेट की हानिकारक आंतरिक चर्बी (विसरल फैट) और परिधीय वसा के बीच अंतर करता है, जो हृदय रोग और टाइप 2 मधुमेह के जोखिम का सटीक संकेतक है।"
    }
  },

  // 15. 3D BMI Calculator (Oxford 2.5 vs Quetelet)
  '3d-bmi-calculator': {
    inputs: {
      en: [
        { label: "Adult Height", value: "175.0 cm (1.75 m)" },
        { label: "Adult Weight", value: "70.0 kg (154.3 lbs)" },
        { label: "Scaling Model", value: "Oxford 2.5 Exponent vs Standard Quetelet" }
      ],
      es: [
        { label: "Estatura Adulta", value: "175.0 cm (1.75 m)" },
        { label: "Peso Adulto", value: "70.0 kg (154.3 lbs)" },
        { label: "Modelo de Escala", value: "Exponente Oxford 2.5 vs Quetelet Estándar" }
      ],
      fr: [
        { label: "Taille Adulte", value: "175,0 cm (1,75 m)" },
        { label: "Poids Adulte", value: "70,0 kg (154,3 lbs)" },
        { label: "Modèle Géométrique", value: "Exposant Oxford 2,5 vs Quetelet Standard" }
      ],
      de: [
        { label: "Körpergröße", value: "175,0 cm (1,75 m)" },
        { label: "Körpergewicht", value: "70,0 kg (154,3 lbs)" },
        { label: "Skalierungsmodell", value: "Oxford 2,5-Exponent vs. Standard-Quetelet" }
      ],
      ko: [
        { label: "성인 신장", value: "175.0 cm (1.75 m)" },
        { label: "성인 체중", value: "70.0 kg (154.3 lbs)" },
        { label: "기하학적 모델", value: "Oxford 2.5 지수 공식 vs 표준 Quetelet 공식" }
      ],
      hi: [
        { label: "वयस्क ऊंचाई", value: "175.0 सेमी (1.75 मी)" },
        { label: "वयस्क वजन", value: "70.0 किग्रा (154.3 पाउंड)" },
        { label: "स्केलिंग मॉडल", value: "ऑक्सफोर्ड 2.5 घातांक बनाम मानक क्वेटलेट" }
      ]
    },
    steps: {
      en: [
        "Step 1: Standard Quetelet Formula (1832): Weight ÷ Height² = 70 ÷ (1.75)² = 70 ÷ 3.0625 = 22.86 kg/m²",
        "Step 2: Oxford 2.5 Formula (Trefethen 2013): (1.3 × Weight) ÷ Height²·⁵ = (1.3 × 70) ÷ (1.75)²·⁵",
        "Step 3: Power computation: 91 ÷ 4.0624 = 22.399 kg/m² (rounded to 22.4 kg/m²)",
        "Step 4: 3D Volumetric Mesh Alignment: Quetelet artificially inflates BMI in taller individuals and understates it in shorter stature; the 2.5 exponent normalizes 3D volumetric mass distribution across the avatar's height continuum"
      ],
      es: [
        "Paso 1: Fórmula Quetelet Estándar (1832): Peso ÷ Altura² = 70 ÷ 3.0625 = 22.86 kg/m²",
        "Paso 2: Fórmula Oxford 2.5 (Trefethen 2013): (1.3 × Peso) ÷ Altura²·⁵ = 91 ÷ (1.75)²·⁵",
        "Paso 3: Cálculo de potencia: 91 ÷ 4.0624 = 22.40 kg/m²",
        "Paso 4: Calibración Volumétrica 3D: El exponente 2.5 corrige la distorsión geométrica en personas altas y bajas para el renderizado tridimensional preciso"
      ],
      fr: [
        "Étape 1 : Formule Standard de Quetelet (1832) : Poids ÷ Taille² = 70 ÷ 3,0625 = 22,86 kg/m²",
        "Étape 2 : Formule Oxford 2,5 (Trefethen 2013) : (1,3 × Poids) ÷ Taille²·⁵ = 91 ÷ (1,75)²·⁵",
        "Étape 3 : Calcul volumétrique : 91 ÷ 4,0624 = 22,40 kg/m²",
        "Étape 4 : Ajustement du maillage 3D : L'exposant 2,5 compense la surestimation chez les personnes de grande taille et calibre l'avatar 3D"
      ],
      de: [
        "Schritt 1: Standard-Quetelet-Formel (1832): Gewicht ÷ Größe² = 70 ÷ 3,0625 = 22,86 kg/m²",
        "Schritt 2: Oxford 2,5-Formel (Trefethen 2013): (1,3 × Gewicht) ÷ Größe²·⁵ = 91 ÷ (1,75)²·⁵",
        "Schritt 3: Potenzberechnung: 91 ÷ 4,0624 = 22,40 kg/m²",
        "Schritt 4: 3D-Avatar-Anpassung: Der 2,5-Exponent korrigiert geometrische Verzerrungen für reale dreidimensionale Körpervolumina"
      ],
      ko: [
        "1단계: 표준 Quetelet 공식(1832): 체중 ÷ 신장² = 70 ÷ (1.75)² = 70 ÷ 3.0625 = 22.86 kg/m²",
        "2단계: Oxford 2.5 공식(Trefethen 2013): (1.3 × 체중) ÷ 신장²·⁵ = (1.3 × 70) ÷ (1.75)²·⁵",
        "3단계: 거듭제곱 연산: 91 ÷ 4.0624 = 22.40 kg/m²",
        "4단계: 3D 입체 메시 보정: 신장이 큰 사람의 과대평가 및 단신자의 과소평가를 교정하여 3D 아바타 체형을 정확히 시각화"
      ],
      hi: [
        "चरण 1: मानक क्वेटलेट फॉर्मूला: वजन ÷ ऊंचाई² = 70 ÷ 3.0625 = 22.86 kg/m²",
        "चरण 2: ऑक्सफोर्ड 2.5 फॉर्मूला: (1.3 × वजन) ÷ ऊंचाई²·⁵ = 91 ÷ (1.75)²·⁵",
        "चरण 3: घातांक गणना: 91 ÷ 4.0624 = 22.40 kg/m²",
        "चरण 4: 3D वॉल्यूमेट्रिक संरेखण: 2.5 घातांक लंबे और छोटे कद के व्यक्तियों में ज्यामितीय विकृति को ठीक करता है"
      ]
    },
    result: {
      en: { label: "Oxford 3D BMI", value: "22.4 Oxford BMI (Standard Quetelet: 22.9)" },
      es: { label: "IMC Oxford 3D", value: "22.4 IMC Oxford (Quetelet Estándar: 22.9)" },
      fr: { label: "IMC Oxford 3D", value: "22,4 IMC Oxford (Quetelet Standard : 22,9)" },
      de: { label: "Oxford-3D-BMI", value: "22,4 Oxford-BMI (Standard-Quetelet: 22,9)" },
      ko: { label: "옥스퍼드 3D 체질량지수", value: "22.4 Oxford BMI (표준 Quetelet: 22.9)" },
      hi: { label: "ऑक्सफोर्ड 3D बीएमआई", value: "22.4 ऑक्सफोर्ड बीएमआई (मानक क्वेटलेट: 22.9)" }
    },
    interp: {
      en: "The Oxford 2.5 equation yields a body mass index of 22.40 kg/m², compared to 22.86 kg/m² from the 1832 Quetelet equation. Both sit comfortably within the WHO healthy weight classification (18.5–24.9). In the 3D visualizer, this scaling determines anatomical mesh thickness, wireframe vertex offsets, and color-coded fat distribution heatmaps, reflecting realistic three-dimensional volumetric proportions.",
      es: "La ecuación Oxford 2.5 arroja un IMC de 22.40 kg/m² frente a 22.86 kg/m² de la fórmula tradicional de Quetelet. Ambos valores se ubican en la categoría normal de la OMS (18.5–24.9). En el visualizador 3D, esta escala ajusta el grosor de la malla anatómica y los mapas de calor para representar proporciones tridimensionales realistas.",
      fr: "La formule d'Oxford 2,5 donne un IMC de 22,40 kg/m² contre 22,86 kg/m² selon Quetelet. Les deux valeurs se situent dans la plage de poids sain de l'OMS (18,5–24,9). Dans le visualiseur 3D, ce facteur affine l'épaisseur du maillage et la cartographie thermique de l'avatar selon une géométrie volumique fidèle.",
      de: "Die Oxford-Formel mit 2,5-Exponent ergibt einen BMI von 22,40 kg/m² gegenüber 22,86 kg/m² nach Quetelet. Beide Werte liegen im gesunden WHO-Bereich (18,5–24,9). Im 3D-Visualisierer steuert dieser Wert die volumetrische Gittergeometrie und Heatmap-Farbzonen für realistische Körperproportionen.",
      ko: "Oxford 2.5 공식에 따른 결과는 22.40 kg/m²로, 1832년 Quetelet 공식의 22.86 kg/m²와 비교해 입체 체형을 더 정밀하게 반영합니다. 두 수치 모두 WHO 건강 체중 구간(18.5~24.9)에 속합니다. 3D 시각화 도구에서는 이 보정값을 통해 아바타의 와이어프레임 메시와 히트맵 체형을 사실적인 입체 부피 비율로 렌더링합니다.",
      hi: "ऑक्सफोर्ड 2.5 समीकरण से 22.40 kg/m² का बीएमआई प्राप्त होता है, जबकि क्वेटलेट से 22.86 kg/m²। दोनों डब्ल्यूएचओ की सामान्य स्वस्थ सीमा (18.5-24.9) में हैं। 3D विज़ुअलाइज़र में, यह स्केलिंग वास्तविक त्रि-आयामी शारीरिक अनुपात दर्शाने के लिए वायरफ्रेम मेश और हीटमैप को सटीक बनाती है।"
    }
  },

  // 16. Lean Body Mass (LBM) Calculator
  'lean-body-mass-calculator': {
    inputs: {
      en: [
        { label: "Biological Sex", value: "Male" },
        { label: "Total Body Weight", value: "75.0 kg (165.3 lbs)" },
        { label: "Stature / Height", value: "178.0 cm (5 ft 10 in)" }
      ],
      es: [
        { label: "Sexo Biológico", value: "Masculino" },
        { label: "Peso Corporal Total", value: "75.0 kg (165.3 lbs)" },
        { label: "Estatura", value: "178.0 cm (5 ft 10 in)" }
      ],
      fr: [
        { label: "Sexe Biologique", value: "Homme" },
        { label: "Poids Total", value: "75,0 kg (165,3 lbs)" },
        { label: "Taille", value: "178,0 cm (5 ft 10 in)" }
      ],
      de: [
        { label: "Biologisches Geschlecht", value: "Männlich" },
        { label: "Gesamtkörpergewicht", value: "75,0 kg (165,3 lbs)" },
        { label: "Körpergröße", value: "178,0 cm (5 ft 10 in)" }
      ],
      ko: [
        { label: "생물학적 성별", value: "남성" },
        { label: "총 체중", value: "75.0 kg (165.3 lbs)" },
        { label: "신장", value: "178.0 cm (5 ft 10 in)" }
      ],
      hi: [
        { label: "जैविक लिंग", value: "पुरुष" },
        { label: "कुल शरीर का वजन", value: "75.0 किग्रा (165.3 पाउंड)" },
        { label: "ऊंचाई", value: "178.0 सेमी (5 फीट 10 इंच)" }
      ]
    },
    steps: {
      en: [
        "Step 1: Formula: Boer Formula (Men) = (0.407 × Weight) + (0.267 × Height) − 19.2",
        "Step 2: Weight component: 0.407 × 75.0 = 30.525 kg",
        "Step 3: Height component: 0.267 × 178.0 = 47.526 kg",
        "Step 4: Sum and constant subtraction: 30.525 + 47.526 − 19.2 = 58.851 kg (rounded to 58.9 kg)",
        "Step 5: Fat-free mass percentage: (58.85 ÷ 75.0) × 100 = 78.5% LBM (estimated body fat: 16.1 kg or 21.5%)"
      ],
      es: [
        "Paso 1: Fórmula: Boer (Hombres) = (0.407 × Peso) + (0.267 × Altura) − 19.2",
        "Paso 2: Componente peso: 0.407 × 75.0 = 30.525 kg",
        "Paso 3: Componente altura: 0.267 × 178.0 = 47.526 kg",
        "Paso 4: Suma y resta de constante: 30.525 + 47.526 − 19.2 = 58.85 kg",
        "Paso 5: Porcentaje de masa libre de grasa: (58.85 ÷ 75.0) × 100 = 78.5% (grasa corporal: 21.5%)"
      ],
      fr: [
        "Étape 1 : Formule de Boer (Hommes) = (0,407 × Poids) + (0,267 × Taille) − 19,2",
        "Étape 2 : Composante poids : 0,407 × 75,0 = 30,525 kg",
        "Étape 3 : Composante taille : 0,267 × 178,0 = 47,526 kg",
        "Étape 4 : Somme et déduction constante : 30,525 + 47,526 − 19,2 = 58,85 kg",
        "Étape 5 : Pourcentage de masse maigre : (58,85 ÷ 75,0) × 100 = 78,5% (masse grasse : 21,5%)"
      ],
      de: [
        "Schritt 1: Boer-Formel (Männer) = (0,407 × Gewicht) + (0,267 × Größe) − 19,2",
        "Schritt 2: Gewichtskomponente: 0,407 × 75,0 = 30,525 kg",
        "Schritt 3: Größenkomponente: 0,267 × 178,0 = 47,526 kg",
        "Schritt 4: Summe und Konstantenabzug: 30,525 + 47,526 − 19,2 = 58,85 kg",
        "Schritt 5: Fettfreier Masseanteil: (58,85 ÷ 75,0) × 100 = 78,5% LBM (Fettanteil: 21,5%)"
      ],
      ko: [
        "1단계: Boer 산출식(남성) = (0.407 × 체중) + (0.267 × 신장) − 19.2",
        "2단계: 체중 계수 계산: 0.407 × 75.0 = 30.525 kg",
        "3단계: 신장 계수 계산: 0.267 × 178.0 = 47.526 kg",
        "4단계: 상수 가감산: 30.525 + 47.526 − 19.2 = 58.85 kg (반올림: 58.9 kg)",
        "5단계: 제지방 비율: (58.85 ÷ 75.0) × 100 = 78.5% LBM (추정 체지방률: 21.5%)"
      ],
      hi: [
        "चरण 1: बोअर फॉर्मूला (पुरुष) = (0.407 × वजन) + (0.267 × ऊंचाई) − 19.2",
        "चरण 2: वजन घटक: 0.407 × 75.0 = 30.525 किग्रा",
        "चरण 3: ऊंचाई घटक: 0.267 × 178.0 = 47.526 किग्रा",
        "चरण 4: गणना: 30.525 + 47.526 − 19.2 = 58.85 किग्रा (पूर्णांकित 58.9 किग्रा)",
        "चरण 5: वसा-मुक्त प्रतिशत: (58.85 ÷ 75.0) × 100 = 78.5% (अनुमानित शरीर वसा: 21.5%)"
      ]
    },
    result: {
      en: { label: "Lean Body Mass (LBM)", value: "58.9 kg (78.5% Fat-Free Mass)" },
      es: { label: "Masa Corporal Magra (MCM)", value: "58.9 kg (78.5% Libre de Grasa)" },
      fr: { label: "Masse Maigre Corporelle (MMC)", value: "58,9 kg (78,5% Sans Graisse)" },
      de: { label: "Magerkörpermasse (LBM)", value: "58,9 kg (78,5% Fettfreie Masse)" },
      ko: { label: "제지방량 (LBM)", value: "58.9 kg (78.5% 무지방 체질량)" },
      hi: { label: "लीन बॉडी मास (LBM)", value: "58.9 किग्रा (78.5% वसा-मुक्त द्रव्यमान)" }
    },
    interp: {
      en: "A Lean Body Mass of 58.9 kg (78.5% of total body weight) represents skeletal muscle, bone mineral content, vital organs, and bodily water, excluding adipose fat tissue. In clinical pharmacology, LBM is essential for calculating water-soluble medication dosages and anesthetic agents. In athletic training, tracking LBM ensures that weight-loss phases burn body fat while preserving metabolically active muscle tissue.",
      es: "Una Masa Corporal Magra de 58.9 kg (78.5% del peso total) comprende el músculo esquelético, masa ósea, órganos vitales y agua intra/extracelular. En farmacología, el MCM es indispensable para dosificar fármacos hidrosolubles y anestesia. En el ámbito deportivo, permite monitorizar la retención de masa muscular durante etapas de pérdida de grasa.",
      fr: "Une masse maigre de 58,9 kg (78,5% du poids corporel) englobe les muscles squelettiques, le squelette osseux, les viscères et l'eau corporelle. En pharmacologie hospitalière, la masse maigre sert au dosage précis des médicaments hydrosolubles et anesthésiques. En nutrition sportive, elle permet de vérifier la préservation du muscle lors d'un déficit.",
      de: "Eine fettfreie Masse von 58,9 kg (78,5% des Gesamtgewichts) umfasst Skelettmuskulatur, Knochen, innere Organe und Körperwasser ohne Fettgewebe. In der klinischen Medizin dient die LBM zur Dosierung wasserlöslicher Arzneimittel. Im Kraftsport ist sie die Schlüsselmetrik zur Sicherung des Muskelerhalts in der Diät.",
      ko: "산출된 제지방량(LBM) 58.9 kg(총 체중의 78.5%)은 지방 조직을 제외한 골격근, 뼈, 내부 장기 및 체수분의 총합입니다. 임상 약리학에서 수용성 약물 및 마취제 투여량을 산출하는 핵심 기준이며, 피트니스 및 다이어트 시 근손실 없이 순수 체지방만 감량되고 있는지 검증하는 기준 지표입니다.",
      hi: "58.9 किग्रा (कुल वजन का 78.5%) का लीन बॉडी मास वसा ऊतक को छोड़कर कंकाल की मांसपेशियों, हड्डियों, अंगों और शरीर के पानी का प्रतिनिधित्व करता है। क्लिनिकल फार्माकोलॉजी में यह जल-घुलनशील दवाओं और एनेस्थीसिया खुराक के लिए महत्वपूर्ण है। एथलेटिक प्रशिक्षण में यह सुनिश्चित करता है कि वजन घटाने के दौरान मांसपेशियां सुरक्षित रहें।"
    }
  },

  // 17. Macro Calculator
  'macro-calculator': {
    inputs: {
      en: [
        { label: "Daily Calorie Target", value: "2,200 kcal/day" },
        { label: "Current Body Weight", value: "75.0 kg (165.3 lbs)" },
        { label: "Fitness Goal", value: "Fat Loss & Muscle Preservation (High Protein)" }
      ],
      es: [
        { label: "Objetivo Calórico Diario", value: "2,200 kcal/día" },
        { label: "Peso Corporal", value: "75.0 kg (165.3 lbs)" },
        { label: "Objetivo Fitness", value: "Pérdida de Grasa y Mantenimiento Muscular" }
      ],
      fr: [
        { label: "Cible Énergétique Journalière", value: "2 200 kcal/jour" },
        { label: "Poids Actuel", value: "75,0 kg (165,3 lbs)" },
        { label: "Objectif Fitness", value: "Perte de Gras & Maintien Musculaire" }
      ],
      de: [
        { label: "Täglicher Kalorienbedarf", value: "2.200 kcal/Tag" },
        { label: "Aktuelles Körpergewicht", value: "75,0 kg (165,3 lbs)" },
        { label: "Trainingsziel", value: "Fettabbau mit Muskelschutz (High Protein)" }
      ],
      ko: [
        { label: "일일 목표 칼로리", value: "2,200 kcal/일" },
        { label: "현재 체중", value: "75.0 kg (165.3 lbs)" },
        { label: "피트니스 목표", value: "체지방 감량 및 근육 보존 (고단백 식단)" }
      ],
      hi: [
        { label: "दैनिक कैलोरी लक्ष्य", value: "2,200 कैलोरी/दिन" },
        { label: "वर्तमान शरीर का वजन", value: "75.0 किग्रा (165.3 पाउंड)" },
        { label: "फिटनेस लक्ष्य", value: "वसा हानि एवं मांसपेशी संरक्षण (उच्च प्रोटीन)" }
      ]
    },
    steps: {
      en: [
        "Step 1: Dietary Protein Allocation: 2.0 g/kg × 75 kg = 150 g protein (150 × 4 kcal = 600 kcal; 27.3% of total energy)",
        "Step 2: Dietary Fat Allocation: 0.8 g/kg × 75 kg = 60 g fat (60 × 9 kcal = 540 kcal; 24.5% of total energy)",
        "Step 3: Dietary Carbohydrate Allocation: Remaining calories = 2,200 − (600 + 540) = 1,060 kcal; 1,060 ÷ 4 kcal/g = 265 g carbs (48.2% of total energy)",
        "Step 4: Total Calorie Verification: (150 × 4) + (265 × 4) + (60 × 9) = 600 + 1,060 + 540 = 2,200 kcal/day"
      ],
      es: [
        "Paso 1: Asignación de Proteína: 2.0 g/kg × 75 kg = 150 g (150 × 4 kcal = 600 kcal; 27.3%)",
        "Paso 2: Asignación de Grasas: 0.8 g/kg × 75 kg = 60 g (60 × 9 kcal = 540 kcal; 24.5%)",
        "Paso 3: Asignación de Carbohidratos: Calorías restantes = 2,200 − 1,140 = 1,060 kcal; 1,060 ÷ 4 = 265 g (48.2%)",
        "Paso 4: Verificación total: 600 + 1,060 + 540 = 2,200 kcal/día"
      ],
      fr: [
        "Étape 1 : Protéines cibles : 2,0 g/kg × 75 kg = 150 g (150 × 4 kcal = 600 kcal ; 27,3%)",
        "Étape 2 : Lipides essentiels : 0,8 g/kg × 75 kg = 60 g (60 × 9 kcal = 540 kcal ; 24,5%)",
        "Étape 3 : Glucides restants : 2 200 − 1 140 = 1 060 kcal ; 1 060 ÷ 4 = 265 g (48,2%)",
        "Étape 4 : Somme de contrôle : 600 + 1 060 + 540 = 2 200 kcal/jour"
      ],
      de: [
        "Schritt 1: Proteinbedarf: 2,0 g/kg × 75 kg = 150 g (150 × 4 kcal = 600 kcal; 27,3%)",
        "Schritt 2: Fettbedarf: 0,8 g/kg × 75 kg = 60 g (60 × 9 kcal = 540 kcal; 24,5%)",
        "Schritt 3: Kohlenhydrate: Restkalorien = 2.200 − 1.140 = 1.060 kcal; 1.060 ÷ 4 = 265 g (48,2%)",
        "Schritt 4: Gesamtenergieprüfung: 600 + 1.060 + 540 = 2.200 kcal/Tag"
      ],
      ko: [
        "1단계: 단백질 배분: 체중 kg당 2.0 g × 75 kg = 150 g (150 × 4 kcal = 600 kcal, 전체의 27.3%)",
        "2단계: 필수 지방 배분: 체중 kg당 0.8 g × 75 kg = 60 g (60 × 9 kcal = 540 kcal, 전체의 24.5%)",
        "3단계: 탄수화물 배분: 잔여 열량 2,200 − (600 + 540) = 1,060 kcal; 1,060 ÷ 4 kcal/g = 265 g (48.2%)",
        "4단계: 총 열량 검증: 600 + 1,060 + 540 = 2,200 kcal/일"
      ],
      hi: [
        "चरण 1: प्रोटीन आवंटन: 2.0 ग्राम/किग्रा × 75 किग्रा = 150 ग्राम (150 × 4 = 600 कैलोरी; 27.3%)",
        "चरण 2: वसा आवंटन: 0.8 ग्राम/किग्रा × 75 किग्रा = 60 ग्राम (60 × 9 = 540 कैलोरी; 24.5%)",
        "चरण 3: कार्बोहाइड्रेट आवंटन: शेष कैलोरी = 2,200 − 1,140 = 1,060 कैलोरी; 1,060 ÷ 4 = 265 ग्राम (48.2%)",
        "चरण 4: कुल कैलोरी सत्यापन: 600 + 1,060 + 540 = 2,200 कैलोरी/दिन"
      ]
    },
    result: {
      en: { label: "Macronutrient Distribution", value: "150g Protein | 265g Carbs | 60g Fat (2,200 kcal)" },
      es: { label: "Distribución de Macronutrientes", value: "150g Proteína | 265g Carbohidratos | 60g Grasa (2,200 kcal)" },
      fr: { label: "Répartition des Macronutriments", value: "150g Protéines | 265g Glucides | 60g Lipides (2 200 kcal)" },
      de: { label: "Makronährstoff-Verteilung", value: "150g Protein | 265g Kohlenhydrate | 60g Fett (2.200 kcal)" },
      ko: { label: "일일 탄단지 매크로 배분", value: "단백질 150g | 탄수화물 265g | 지방 60g (2,200 kcal)" },
      hi: { label: "मैक्रोन्यूट्रिएंट वितरण", value: "150g प्रोटीन | 265g कार्ब्स | 60g वसा (2,200 कैलोरी)" }
    },
    interp: {
      en: "This macronutrient split fulfills USDA Acceptable Macronutrient Distribution Ranges (AMDR: Protein 10–35%, Carbs 45–65%, Fat 20–35%) and aligns with the International Society of Sports Nutrition (ISSN) guidelines. The high-protein intake (2.0 g/kg) minimizes muscle catabolism during caloric restriction, healthy fats (0.8 g/kg) maintain endocrine testosterone and thyroid synthesis, and complex carbs (265 g) fuel glycogen replenishment and high-intensity workout performance.",
      es: "Esta distribución de macronutrientes cumple con los rangos AMDR del USDA (Proteínas 10–35%, Carbohidratos 45–65%, Grasas 20–35%) y las directrices de la ISSN. La ingesta elevada de proteína (2.0 g/kg) preserva la masa magra en déficit, las grasas (0.8 g/kg) sustentan la síntesis hormonal y los carbohidratos (265 g) reponen el glucógeno muscular.",
      fr: "Cette répartition respecte les plages AMDR de l'USDA et les protocoles de l'ISSN. L'apport protéique ciblé (2,0 g/kg) protège la masse musculaire en déficit calorique, les lipides (0,8 g/kg) assurent la synthèse hormonale et l'assimilation vitaminique, et les glucides (265 g) soutiennent l'intensité à l'entraînement.",
      de: "Diese Makroverteilung erfüllt die AMDR-Richtlinien der USDA sowie wissenschaftliche ISSN-Standards. Die hohe Proteinzufuhr (2,0 g/kg) schützt Muskelgewebe im Defizit, gesunde Fette (0,8 g/kg) sichern die Hormonproduktion und Kohlenhydrate (265 g) füllen Glykogenspeicher für optimale Trainingsleistung.",
      ko: "이 매크로 분배는 미국 농무부(USDA) 권장 영양소 분배 범위(AMDR) 및 국제스포츠영양학회(ISSN) 기준을 완벽히 충족합니다. 고단백 섭취(2.0 g/kg)는 칼로리 제한기 동안 근손실을 방지하고, 적정 지방(0.8 g/kg)은 테스토스테론 등 호르몬 분비를 유지하며, 탄수화물(265 g)은 글리코겐 보충과 고강도 운동 수행 능력을 뒷받침합니다.",
      hi: "यह मैक्रो विभाजन यूएसडीए एएमडीआर (प्रोटीन 10-35%, कार्ब्स 45-65%, वसा 20-35%) और आईएसएसएन दिशानिर्देशों के अनुरूप है। उच्च प्रोटीन (2.0 ग्राम/किग्रा) कैलोरी की कमी के दौरान मांसपेशियों के नुकसान को रोकता है, स्वस्थ वसा (0.8 ग्राम/किग्रा) हार्मोन संतुलन बनाए रखता है, और कार्बोहाइड्रेट (265 ग्राम) कसरत के लिए ऊर्जा प्रदान करते हैं।"
    }
  },

  // 18. Calorie Deficit Calculator
  'calorie-calculator': {
    inputs: {
      en: [
        { label: "Baseline Maintenance (TDEE)", value: "2,500 kcal/day" },
        { label: "Target Fat Loss Rate", value: "0.5 kg / week (1.1 lbs/wk)" },
        { label: "Physical Activity Level", value: "Moderately Active (3–5 days/wk)" }
      ],
      es: [
        { label: "Mantenimiento Base (TDEE)", value: "2,500 kcal/día" },
        { label: "Ritmo de Pérdida Grasa", value: "0.5 kg / semana (1.1 lbs/sem)" },
        { label: "Nivel de Actividad Física", value: "Moderadamente Activo (3–5 días/sem)" }
      ],
      fr: [
        { label: "Dépense de Maintien (TDEE)", value: "2 500 kcal/jour" },
        { label: "Rythme de Perte de Gras", value: "0,5 kg / semaine (1,1 lbs/sem)" },
        { label: "Niveau d'Activité Physique", value: "Modérément Actif (3–5 jours/sem)" }
      ],
      de: [
        { label: "Erhaltungsbedarf (TDEE)", value: "2.500 kcal/Tag" },
        { label: "Zielrate Fettabbau", value: "0,5 kg / Woche (1,1 lbs/Woche)" },
        { label: "Körperliche Aktivität", value: "Mäßig aktiv (3–5 Tage/Woche)" }
      ],
      ko: [
        { label: "기준 유지 칼로리 (TDEE)", value: "2,500 kcal/일" },
        { label: "체지방 감량 목표 속도", value: "주당 0.5 kg (주당 1.1 lbs)" },
        { label: "신체 활동 수준", value: "보통 활동 (주 3~5회 운동)" }
      ],
      hi: [
        { label: "बेसलाइन मेंटेनेंस (TDEE)", value: "2,500 कैलोरी/दिन" },
        { label: "लक्षित वसा हानि दर", value: "0.5 किग्रा / सप्ताह (1.1 पाउंड/सप्ताह)" },
        { label: "शारीरिक गतिविधि स्तर", value: "मध्यम सक्रिय (सप्ताह में 3-5 दिन)" }
      ]
    },
    steps: {
      en: [
        "Step 1: Energy equivalent of adipose tissue: 1 kg human adipose fat contains ~7,700 kcal of stored energy (0.5 kg fat = ~3,850 kcal weekly deficit)",
        "Step 2: Daily deficit calculation: 3,850 kcal ÷ 7 days = 550 kcal/day (standardized clinical target: 500 kcal/day deficit)",
        "Step 3: Daily caloric target: Maintenance (2,500 kcal) − Deficit (500 kcal) = 2,000 kcal/day",
        "Step 4: Clinical Safety Check: A 500 kcal deficit represents 20% of TDEE, well within the safe 15–25% metabolic threshold to avert metabolic slowdown"
      ],
      es: [
        "Paso 1: Equivalente energético adiposo: 1 kg de grasa corporal almacena ~7,700 kcal (0.5 kg = déficit semanal de ~3,850 kcal)",
        "Paso 2: Cálculo del déficit diario: 3,850 ÷ 7 días = 550 kcal/día (objetivo clínico estándar: 500 kcal/día)",
        "Paso 3: Ingesta calórica prescrita: Mantenimiento (2,500 kcal) − Déficit (500 kcal) = 2,000 kcal/día",
        "Paso 4: Verificación de seguridad: El déficit del 20% se mantiene en la franja segura (15–25%) para prevenir la adaptación metabólica severa"
      ],
      fr: [
        "Étape 1 : Équivalent tissu adipeux : 1 kg de graisse équivaut à ~7 700 kcal (0,5 kg = ~3 850 kcal de déficit hebdomadaire)",
        "Étape 2 : Déficit quotidien requis : 3 850 kcal ÷ 7 jours = 550 kcal/jour (cible clinique usuelle : 500 kcal/jour)",
        "Étape 3 : Cible calorique journalière : Dépense (2 500 kcal) − Déficit (500 kcal) = 2 000 kcal/jour",
        "Étape 4 : Seuil de sécurité métabolique : Un déficit de 20% préserve le taux métabolique basal sans effondrement thyroïdien"
      ],
      de: [
        "Schritt 1: Energieäquivalent Fettgewebe: 1 kg Körperfett entspricht ~7.700 kcal (0,5 kg = ~3.850 kcal Wochendefizit)",
        "Schritt 2: Tägliches Defizit: 3.850 kcal ÷ 7 Tage = 550 kcal/Tag (standardisiertes klinisches Ziel: 500 kcal/Tag)",
        "Schritt 3: Täglicher Zielwert: Erhaltung (2.500 kcal) − Defizit (500 kcal) = 2.000 kcal/Tag",
        "Schritt 4: Stoffwechselprüfung: Ein Defizit von 20% liegt ideal im sicheren Bereich (15–25%), um adaptive Thermogenese zu minimieren"
      ],
      ko: [
        "1단계: 지방 조직 에너지 환산: 체지방 1 kg은 약 7,700 kcal의 저장 에너지 (주당 0.5 kg 감량 = 주간 약 3,850 kcal 결손 필요)",
        "2단계: 일일 칼로리 결손 산출: 3,850 kcal ÷ 7일 = 550 kcal/일 (임상 표준 안전 결손치: 하루 500 kcal)",
        "3단계: 일일 처방 칼로리: 유지 칼로리(2,500 kcal) − 결손(500 kcal) = 2,000 kcal/일",
        "4단계: 대사 안전성 점검: 20% 결손율은 급격한 기초대사량 저하(적응성 열발생)를 방지하는 15~25% 안전 가이드라인에 완벽히 부합"
      ],
      hi: [
        "चरण 1: वसा ऊतक का ऊर्जा समतुल्य: 1 किग्रा शरीर की वसा में ~7,700 कैलोरी होती है (0.5 किग्रा = ~3,850 कैलोरी साप्ताहिक घाटा)",
        "चरण 2: दैनिक घाटे की गणना: 3,850 ÷ 7 दिन = 550 कैलोरी/दिन (मानक नैदानिक लक्ष्य: 500 कैलोरी/दिन घाटा)",
        "चरण 3: दैनिक कैलोरी लक्ष्य: मेंटेनेंस (2,500 कैलोरी) − घाटा (500 कैलोरी) = 2,000 कैलोरी/दिन",
        "चरण 4: सुरक्षा जांच: 20% घाटा सुरक्षित सीमा (15-25%) के भीतर है जिससे मेटाबॉलिज्म धीमा नहीं होता"
      ]
    },
    result: {
      en: { label: "Prescribed Deficit Caloric Target", value: "2,000 kcal / day (-500 kcal Deficit for 0.5 kg/wk Loss)" },
      es: { label: "Objetivo Calórico con Déficit", value: "2,000 kcal / día (Déficit de -500 kcal para -0.5 kg/sem)" },
      fr: { label: "Cible Calorique en Déficit", value: "2 000 kcal / jour (Déficit de -500 kcal pour -0,5 kg/semaine)" },
      de: { label: "Kalorienziel mit Defizit", value: "2.000 kcal / Tag (-500 kcal Defizit für 0,5 kg/Woche Verlust)" },
      ko: { label: "감량 처방 칼로리 목표치", value: "2,000 kcal / 일 (주당 0.5 kg 감량을 위한 -500 kcal 결손)" },
      hi: { label: "घाटा कैलोरी लक्ष्य", value: "2,000 कैलोरी / दिन (0.5 किग्रा/सप्ताह कमी के लिए -500 कैलोरी घाटा)" }
    },
    interp: {
      en: "Consuming 2,000 kcal per day creates a predictable 500 kcal daily energy deficit below your 2,500 kcal maintenance requirement. Over seven days, this 3,500 kcal cumulative deficit mobilizes approximately 0.45 to 0.5 kg (1 lb) of stored adipose tissue. According to NIH and CDC guidelines, this moderate deficit preserves lean muscle mass, maintains resting metabolic rate, and prevents the hormonal rebound frequently caused by crash dieting.",
      es: "Consumir 2,000 kcal/día establece un déficit diario de 500 kcal bajo tu gasto de mantenimiento de 2,500 kcal. En una semana, este déficit acumulado de 3,500 kcal moviliza entre 0.45 y 0.5 kg de grasa corporal almacenada. Las pautas de los NIH y CDC confirman que este déficit moderado protege la masa muscular y minimiza la ralentización metabólica.",
      fr: "Un apport de 2 000 kcal/jour génère un déficit quotidien de 500 kcal sous votre niveau de maintien de 2 500 kcal. Sur sept jours, ce déficit cumulé de 3 500 kcal permet de déstocker environ 0,45 à 0,5 kg de tissu adipeux. Selon les recommandations du NIH et du CDC, ce rythme préserve la masse maigre et évite l'effet rebond.",
      de: "Eine Zufuhr von 2.000 kcal/Tag erzeugt ein kontrolliertes Defizit von 500 kcal unter Ihrem Erhaltungsbedarf von 2.500 kcal. Über eine Woche summiert sich dies auf ein Defizit von 3.500 kcal, was einem Fettabbau von ca. 0,45 bis 0,5 kg entspricht. Dieses moderate Defizit schützt Muskelgewebe und verhindert Heißhungerattacken.",
      ko: "하루 2,000 kcal를 섭취하면 일일 유지 칼로리(2,500 kcal) 대비 500 kcal의 계획된 에너지 결손이 발생합니다. 7일간 누적 3,500 kcal의 결손은 체지방 약 0.45~0.5 kg을 지속 가능하게 연소시킵니다. 미국 국립보건원(NIH) 및 CDC 연구에 따르면, 이러한 완만한 결손 속도는 근손실을 방지하고 기초대사량 저하를 최소화합니다.",
      hi: "प्रतिदिन 2,000 कैलोरी लेने से आपकी 2,500 कैलोरी मेंटेनेंस जरूरत से 500 कैलोरी का सुरक्षित घाटा बनता है। सात दिनों में 3,500 कैलोरी का यह संचयी घाटा लगभग 0.45 से 0.5 किग्रा वसा जलाता है। NIH और CDC दिशानिर्देशों के अनुसार, यह मध्यम घाटा मांसपेशियों को सुरक्षित रखता है और मेटाबॉलिज्म को धीमा होने से बचाता है।"
    }
  }
,

  // 19. Type 2 Diabetes Risk Calculator
  'diabetes-risk-calculator': {
    inputs: {
      en: [
        { label: "Patient Age", value: "48 years (Age 45–54 bracket)" },
        { label: "Biological Sex", value: "Male" },
        { label: "Height & Weight", value: "175 cm | 82.0 kg (BMI 26.8 kg/m²)" },
        { label: "Waist Circumference", value: "96.0 cm (Men 94–102 cm bracket)" },
        { label: "Daily Physical Activity", value: "Active (≥30 minutes / day)" }
      ],
      es: [
        { label: "Edad del Paciente", value: "48 años (Franja 45–54 años)" },
        { label: "Sexo Biológico", value: "Masculino" },
        { label: "Estatura y Peso", value: "175 cm | 82.0 kg (IMC 26.8 kg/m²)" },
        { label: "Circunferencia de Cintura", value: "96.0 cm (Hombres 94–102 cm)" },
        { label: "Actividad Física Diaria", value: "Activo (≥30 minutos / día)" }
      ],
      fr: [
        { label: "Âge du Patient", value: "48 ans (Tranche 45–54 ans)" },
        { label: "Sexe Biologique", value: "Homme" },
        { label: "Taille et Poids", value: "175 cm | 82,0 kg (IMC 26,8 kg/m²)" },
        { label: "Tour de Taille", value: "96,0 cm (Hommes 94–102 cm)" },
        { label: "Activité Physique Quotidienne", value: "Actif (≥30 minutes / jour)" }
      ],
      de: [
        { label: "Lebensalter", value: "48 Jahre (Altersgruppe 45–54 Jahre)" },
        { label: "Biologisches Geschlecht", value: "Männlich" },
        { label: "Größe & Gewicht", value: "175 cm | 82,0 kg (BMI 26,8 kg/m²)" },
        { label: "Taillenumfang", value: "96,0 cm (Männer 94–102 cm)" },
        { label: "Tägliche Bewegung", value: "Aktiv (≥30 Minuten / Tag)" }
      ],
      ko: [
        { label: "환자 연령", value: "48세 (45~54세 구간)" },
        { label: "생물학적 성별", value: "남성" },
        { label: "신장 및 체중", value: "175 cm | 82.0 kg (BMI 26.8 kg/m²)" },
        { label: "허리 둘레", value: "96.0 cm (남성 94~102 cm 구간)" },
        { label: "매일 신체 활동량", value: "운동 실천 (매일 30분 이상)" }
      ],
      hi: [
        { label: "मरीज की आयु", value: "48 वर्ष (45-54 वर्ष आयु वर्ग)" },
        { label: "जैविक लिंग", value: "पुरुष" },
        { label: "ऊंचाई एवं वजन", value: "175 सेमी | 82.0 किग्रा (BMI 26.8 kg/m²)" },
        { label: "कमर का घेरा", value: "96.0 सेमी (पुरुष 94-102 सेमी वर्ग)" },
        { label: "दैनिक शारीरिक गतिविधि", value: "सक्रिय (≥30 मिनट / दिन)" }
      ]
    },
    steps: {
      en: [
        "Step 1: Age Scoring (FINDRISC): Age 48 sits in the 45–54 bracket = +2 points",
        "Step 2: BMI Calculation & Scoring: 82.0 kg ÷ (1.75 m)² = 26.78 kg/m² (BMI 25–30 overweight range) = +1 point",
        "Step 3: Central Visceral Waist Scoring: Waist circumference of 96.0 cm (male 94–102 cm range) = +3 points",
        "Step 4: Physical Activity Scoring: Performing ≥30 min of daily physical exercise = +0 points (protective effect against insulin resistance)",
        "Step 5: Cumulative FINDRISC Total: 2 + 1 + 3 + 0 = 6 Points (out of 13 primary biometric criteria)",
        "Step 6: Clinical Risk Stratification: Score 6 falls in the Low Risk category (< 7 threshold), corresponding to a < 1% 10-year probability of Type 2 diabetes"
      ],
      es: [
        "Paso 1: Puntuación por Edad (FINDRISC): 48 años (franja 45–54) = +2 puntos",
        "Paso 2: Cálculo y Puntuación de IMC: 82.0 ÷ (1.75)² = 26.78 kg/m² (rango 25–30) = +1 punto",
        "Paso 3: Puntuación por Circunferencia de Cintura: 96.0 cm (hombres 94–102 cm) = +3 puntos",
        "Paso 4: Actividad Física: ≥30 min diarios de ejercicio = 0 puntos (factor protector)",
        "Paso 5: Puntuación Total Acumulada: 2 + 1 + 3 + 0 = 6 Puntos",
        "Paso 6: Estratificación Clínica: Puntuación de 6 clasifica en Riesgo Bajo (< 7 puntos, probabilidad < 1% a 10 años)"
      ],
      fr: [
        "Étape 1 : Cotation Âge (FINDRISC) : 48 ans (tranche 45–54 ans) = +2 points",
        "Étape 2 : Calcul et Cotation de l'IMC : 82,0 ÷ (1,75)² = 26,78 kg/m² (plage 25–30) = +1 point",
        "Étape 3 : Cotation du Tour de Taille : 96,0 cm (hommes 94–102 cm) = +3 points",
        "Étape 4 : Activité Physique : ≥30 min par jour = 0 point (effet protecteur métabolique)",
        "Étape 5 : Score FINDRISC Total : 2 + 1 + 3 + 0 = 6 Points",
        "Étape 6 : Stratification Clinique : Score de 6 points = Risque Faible (< 7 points, probabilité < 1% à 10 ans)"
      ],
      de: [
        "Schritt 1: Altersbewertung (FINDRISC): 48 Jahre (Gruppe 45–54 Jahre) = +2 Punkte",
        "Schritt 2: BMI-Berechnung & Punkte: 82,0 ÷ (1,75)² = 26,78 kg/m² (Bereich 25–30) = +1 Punkt",
        "Schritt 3: Taillenumfang-Bewertung: 96,0 cm (Männer 94–102 cm) = +3 Punkte",
        "Schritt 4: Körperliche Aktivität: ≥30 Min. täglich = 0 Punkte (metabolischer Schutzfaktor)",
        "Schritt 5: FINDRISC-Gesamtergebnis: 2 + 1 + 3 + 0 = 6 Punkte",
        "Schritt 6: Klinische Risikoeinstufung: 6 Punkte bedeuten Geringes Risiko (< 7 Punkte, < 1% 10-Jahres-Wahrscheinlichkeit)"
      ],
      ko: [
        "1단계: 연령 점수 부여(FINDRISC): 48세(45~54세 구간) = +2점",
        "2단계: BMI 산출 및 점수: 82.0 ÷ (1.75)² = 26.78 kg/m² (25~30 과체중 구간) = +1점",
        "3단계: 복부 내장지방 허리둘레 점수: 96.0 cm (남성 94~102 cm 구간) = +3점",
        "4단계: 일일 신체 활동 점수: 매일 30분 이상 운동 = +0점 (인슐린 감수성 보호 효과)",
        "5단계: FINDRISC 종합 점수 합산: 2 + 1 + 3 + 0 = 6점",
        "6단계: 임상 위험도 판정: 6점은 낮은 위험군(< 7점 기준선 미만)으로 10년 내 당뇨 발병 확률 < 1%에 해당"
      ],
      hi: [
        "चरण 1: आयु स्कोर (FINDRISC): 48 वर्ष (45-54 वर्ष वर्ग) = +2 अंक",
        "चरण 2: बीएमआई गणना एवं स्कोर: 82.0 ÷ (1.75)² = 26.78 kg/m² (25-30 अधिक वजन सीमा) = +1 अंक",
        "चरण 3: पेट की चर्बी कमर स्कोर: 96.0 सेमी (पुरुष 94-102 सेमी) = +3 अंक",
        "चरण 4: शारीरिक गतिविधि स्कोर: ≥30 मिनट दैनिक व्यायाम = +0 अंक (सुरक्षात्मक प्रभाव)",
        "चरण 5: कुल FINDRISC स्कोर: 2 + 1 + 3 + 0 = 6 अंक",
        "चरण 6: नैदानिक जोखिम वर्गीकरण: 6 अंक कम जोखिम (< 7 सीमा) दर्शाता है, जो 10 वर्षों में < 1% जोखिम के अनुरूप है"
      ]
    },
    result: {
      en: { label: "Diabetes Risk Stratification", value: "6 Points (Low Risk: < 1% 10-Year Probability)" },
      es: { label: "Estratificación de Riesgo", value: "6 Puntos (Riesgo Bajo: < 1% Probabilidad a 10 Años)" },
      fr: { label: "Score de Risque Diabète", value: "6 Points (Risque Faible : < 1% Probabilité à 10 Ans)" },
      de: { label: "Diabetes-Risikoeinstufung", value: "6 Punkte (Geringes Risiko: < 1% 10-Jahres-Wahrscheinlichkeit)" },
      ko: { label: "당뇨병 위험도 판정", value: "6점 (낮은 위험군: 10년 내 발병 확률 < 1%)" },
      hi: { label: "मधुमेह जोखिम वर्गीकरण", value: "6 अंक (कम जोखिम: 10 वर्षों में < 1% प्रायिकता)" }
    },
    interp: {
      en: "A cumulative score of 6 points places this patient in the Low Risk category (< 7 points), corresponding to a < 1% probability of developing Type 2 diabetes over the next decade. Daily aerobic exercise (≥30 minutes) serves as a potent protective counterweight against the elevated waist circumference (96 cm) and BMI (26.8 kg/m²). If physical activity drops below 30 minutes daily (+2 points), the score rises to 8 points, shifting the clinical classification into the Slightly Elevated risk tier (~4% probability).",
      es: "Una puntuación de 6 puntos sitúa a este paciente en la categoría de Riesgo Bajo (< 7 puntos), con menos del 1% de probabilidad de desarrollar diabetes tipo 2 a 10 años. El ejercicio aeróbico diario (≥30 min) compensa eficazmente la cintura (96 cm) y el IMC (26.8). Si el paciente se vuelve sedentario (+2 puntos), la puntuación subiría a 8 puntos, pasando a la categoría Ligeramente Elevada (~4%).",
      fr: "Un score de 6 points classe ce patient dans la catégorie Risque Faible (< 7 points), soit moins de 1% de probabilité de développer un diabète de type 2 d'ici 10 ans. La pratique quotidienne d'activité physique (≥30 min) protège efficacement contre le tour de taille (96 cm) et l'IMC (26,8). En cas d'inactivité (+2 points), le score monterait à 8 points, atteignant le palier Légèrement Élevé (~4%).",
      de: "Eine Punktzahl von 6 stuft den Patienten in die Kategorie Geringes Risiko ein (< 7 Punkte), was einer 10-Jahres-Wahrscheinlichkeit von unter 1% entspricht. Tägliche Bewegung (≥30 Min.) wirkt dem erhöhten Taillenumfang (96 cm) und BMI (26,8) schützend entgegen. Fällt die Bewegung weg (+2 Punkte), steigt der Score auf 8 Punkte in die leicht erhöhte Risikostufe (~4%).",
      ko: "종합 6점은 10년 내 당뇨 발병 확률 < 1%에 해당하는 '낮은 위험군'(7점 미만)에 해당합니다. 매일 30분 이상의 유산소 신체 활동은 다소 높은 허리둘레(96 cm)와 과체중 BMI(26.8 kg/m²)에 대항하는 강력한 인슐린 감수성 보호 요인으로 작용합니다. 만약 신체 활동이 부족해질 경우(+2점), 총점이 8점으로 상승하여 '경미한 주의 단계(~4% 발병률)'로 전환됩니다.",
      hi: "6 अंकों का संचयी स्कोर इस मरीज को कम जोखिम (< 7 अंक) श्रेणी में रखता है, जो अगले 10 वर्षों में टाइप 2 मधुमेह के 1% से भी कम जोखिम के अनुरूप है। दैनिक एरोबिक व्यायाम (≥30 मिनट) बढ़े हुए कमर के घेरे (96 सेमी) और बीएमआई (26.8) के खिलाफ शक्तिशाली सुरक्षा कवच का काम करता है। यदि व्यायाम छूट जाए (+2 अंक), तो स्कोर 8 अंक हो जाता है, जो थोड़ा बढ़ा हुआ जोखिम (~4%) दर्शाता है।"
    }
  },

  // 20. Asian BMI Calculator
  'asian-bmi-calculator': {
    inputs: {
      en: [
        { label: "Adult Weight", value: "68.0 kg (149.9 lbs)" },
        { label: "Adult Height", value: "170.0 cm (1.70 m)" },
        { label: "Clinical Benchmark", value: "WHO Asian Consultation (Lancet 2004)" }
      ],
      es: [
        { label: "Peso Adulto", value: "68.0 kg (149.9 lbs)" },
        { label: "Estatura Adulta", value: "170.0 cm (1.70 m)" },
        { label: "Punto de Referencia", value: "Consenso Asiático de la OMS (Lancet 2004)" }
      ],
      fr: [
        { label: "Poids Adulte", value: "68,0 kg (149,9 lbs)" },
        { label: "Taille Adulte", value: "170,0 cm (1,70 m)" },
        { label: "Référence Clinique", value: "Consensus Asiatique de l'OMS (Lancet 2004)" }
      ],
      de: [
        { label: "Körpergewicht", value: "68,0 kg (149,9 lbs)" },
        { label: "Körpergröße", value: "170,0 cm (1,70 m)" },
        { label: "Klinischer Standard", value: "WHO-Asien-Konsens (Lancet 2004)" }
      ],
      ko: [
        { label: "성인 체중", value: "68.0 kg (149.9 lbs)" },
        { label: "성인 신장", value: "170.0 cm (1.70 m)" },
        { label: "임상 진단 기준", value: "WHO 아시아-태평양 비만 가이드라인 (Lancet 2004)" }
      ],
      hi: [
        { label: "वयस्क वजन", value: "68.0 किग्रा (149.9 पाउंड)" },
        { label: "वयस्क ऊंचाई", value: "170.0 सेमी (1.70 मी)" },
        { label: "नैदानिक मानक", value: "डब्ल्यूएचओ एशियाई सहमति (लैंसेट 2004)" }
      ]
    },
    steps: {
      en: [
        "Step 1: Stature squared: 1.70 m × 1.70 m = 2.89 m²",
        "Step 2: Calculate BMI: 68.0 kg ÷ 2.89 m² = 23.529 kg/m² (rounded to 23.5 kg/m²)",
        "Step 3: Benchmark Disparity: Standard International WHO classifies 23.5 kg/m² as Normal Weight (18.5–24.9 kg/m²)",
        "Step 4: WHO Asian Cutoff Application: For Asian populations, BMI ≥ 23.0 kg/m² represents Overweight / Public Health Action Trigger 1, and ≥ 27.5 kg/m² represents High Risk / Action Trigger 2"
      ],
      es: [
        "Paso 1: Estatura al cuadrado: 1.70 m × 1.70 m = 2.89 m²",
        "Paso 2: Calcular IMC: 68.0 kg ÷ 2.89 m² = 23.53 kg/m²",
        "Paso 3: Disparidad de Criterio: El estándar internacional de la OMS clasifica 23.5 como Normopeso (18.5–24.9)",
        "Paso 4: Criterio Asiático de la OMS: En poblaciones asiáticas, IMC ≥ 23.0 kg/m² constituye Sobrepeso y Alerta Sanitaria de Riesgo"
      ],
      fr: [
        "Étape 1 : Taille au carré : 1,70 m × 1,70 m = 2,89 m²",
        "Étape 2 : Calcul de l'IMC : 68,0 kg ÷ 2,89 m² = 23,53 kg/m²",
        "Étape 3 : Disparité Épidémiologique : La norme internationale classe 23,5 en Poids Normal (18,5–24,9)",
        "Étape 4 : Seuils Asiatiques de l'OMS : Chez les personnes d'origine asiatique, IMC ≥ 23,0 kg/m² marque le seuil de Surpoids et de Risque Métabolique accru"
      ],
      de: [
        "Schritt 1: Größe im Quadrat: 1,70 m × 1,70 m = 2,89 m²",
        "Schritt 2: BMI berechnen: 68,0 kg ÷ 2,89 m² = 23,53 kg/m²",
        "Schritt 3: Diagnostische Diskrepanz: Der internationale WHO-Standard stuft 23,5 als Normalgewicht ein (18,5–24,9)",
        "Schritt 4: Asiatische WHO-Kriterien: Für asiatische Populationen gilt BMI ≥ 23,0 kg/m² als Übergewicht mit erhöhtem kardiometabolischem Interventionsbedarf"
      ],
      ko: [
        "1단계: 신장의 제곱 산출: 1.70 m × 1.70 m = 2.89 m²",
        "2단계: BMI 연산: 68.0 kg ÷ 2.89 m² = 23.53 kg/m²",
        "3단계: 진단 기준의 차이: 국제 표준 WHO 기준상 23.5는 '정상 체중(18.5~24.9)'으로 분류됨",
        "4단계: WHO 아시아 기준 적용: 아시아인 역학 기준에서는 BMI ≥ 23.0 kg/m²부터 '과체중 및 1단계 대사 위험 경고'로 진단되며, ≥ 27.5 kg/m²는 2단계 고위험 비만"
      ],
      hi: [
        "चरण 1: ऊंचाई का वर्ग: 1.70 मी × 1.70 मी = 2.89 m²",
        "चरण 2: बीएमआई गणना: 68.0 किग्रा ÷ 2.89 m² = 23.53 kg/m²",
        "चरण 3: मानक अंतर: सामान्य अंतर्राष्ट्रीय डब्ल्यूएचओ में 23.5 'सामान्य वजन' (18.5-24.9) माना जाता है",
        "चरण 4: एशियाई कटऑफ: एशियाई आबादी के लिए, बीएमआई ≥ 23.0 kg/m² 'अधिक वजन एवं बढ़ा हुआ स्वास्थ्य जोखिम' माना जाता है"
      ]
    },
    result: {
      en: { label: "Asian BMI Stratification", value: "23.5 kg/m² (Asian Overweight / Elevated Health Risk)" },
      es: { label: "Estratificación IMC Asiático", value: "23.5 kg/m² (Sobrepeso Asiático / Riesgo Elevado)" },
      fr: { label: "Classification IMC Asiatique", value: "23,5 kg/m² (Surpoids Asiatique / Risque Élevé)" },
      de: { label: "Asiatische BMI-Einstufung", value: "23,5 kg/m² (Asiatisches Übergewicht / Erhöhtes Risiko)" },
      ko: { label: "아시아 기준 BMI 판정", value: "23.5 kg/m² (아시아 기준 과체중 / 심혈관 대사 주의군)" },
      hi: { label: "एशियाई बीएमआई वर्गीकरण", value: "23.5 kg/m² (एशियाई अधिक वजन / बढ़ा हुआ जोखिम)" }
    },
    interp: {
      en: "A BMI of 23.5 kg/m² illustrates the clinical necessity of ethnic-specific thresholds. Under universal Western WHO criteria, 23.5 is categorized as normal. However, extensive anthropological studies (the 'thin-fat' Asian phenotype) prove that South and East Asian individuals exhibit higher body fat percentages, less protective skeletal muscle, and significantly greater visceral fat accumulation around abdominal organs at lower BMI levels. Consequently, Type 2 diabetes and coronary artery disease manifest at BMI ≥ 23.0 kg/m², marking this result as Overweight requiring proactive nutritional management.",
      es: "Un IMC de 23.5 kg/m² ejemplifica la necesidad médica de utilizar puntos de corte específicos. Según la norma internacional de la OMS, 23.5 se considera peso normal. Sin embargo, estudios demuestran que las poblaciones asiáticas presentan mayor porcentaje de grasa corporal y grasa visceral con menor masa muscular para el mismo IMC. Por tanto, el riesgo de diabetes y cardiopatías se incrementa a partir de 23.0 kg/m², clasificando este resultado como sobrepeso.",
      fr: "Un IMC de 23,5 kg/m² démontre l'importance clinique des seuils ethniques adaptés. Selon la classification mondiale classique, 23,5 est un poids normal. Or, les études démontrent le phénotype asiatique 'mince-gras' : à IMC égal, les populations asiatiques accumulent plus de graisse viscérale et possèdent moins de masse musculaire. L'insulinorésistance et les maladies coronariennes surviennent dès 23,0 kg/m², classant cette personne en surpoids.",
      de: "Ein BMI von 23,5 kg/m² verdeutlicht die Relevanz populationsspezifischer Grenzwerte. Nach weltweitem Standard gilt 23,5 noch als Normalgewicht. Wissenschaftliche Daten zeigen jedoch das 'Thin-Fat'-Phänomen: Bei gleichem BMI besitzen Personen asiatischer Herkunft einen höheren Körperfettanteil und mehr viszerales Bauchfett. Daher steigen Risiken für Typ-2-Diabetes bereits ab 23,0 kg/m² signifikant an.",
      ko: "23.5 kg/m²의 BMI는 인종별 특화 기준치의 임상적 필요성을 명확히 보여줍니다. 서구 중심의 국제 표준에서는 '정상 체중'으로 판정되지만, 아시아인 특유의 '마른 비만(Thin-Fat)' 표현형으로 인해 동일한 체질량지수에서도 체지방률과 복부 내장지방 축적률이 훨씬 높습니다. 인슐린 저항성과 제2형 당뇨병, 관상동맥 질환 위험이 23.0 kg/m²부터 급증하므로, 아시아-태평양 지침에 따라 '과체중'으로 분류되어 식이 조절과 운동이 권장됩니다.",
      hi: "23.5 kg/m² का बीएमआई जातीय-विशिष्ट कटऑफ की आवश्यकता को स्पष्ट करता है। अंतर्राष्ट्रीय मानक में यह सामान्य वजन है। लेकिन 'थिन-फैट' एशियाई फेनोटाइप के कारण समान बीएमआई पर भी एशियाई व्यक्तियों में वसा प्रतिशत और आंतरिक चर्बी अधिक होती है। परिणामस्वरूप टाइप 2 मधुमेह और हृदय रोग का जोखिम 23.0 kg/m² से ही बढ़ जाता है, जिससे यह अधिक वजन के रूप में वर्गीकृत होता है।"
    }
  }
};

export function getWorkedExample(slug: string, lang: string, toolTitle?: string): WorkedExample {
  const headings = UI_HEADINGS[lang] || UI_HEADINGS.en;
  
  // Normalization for visualizer and alias slugs
  let normalizedSlug = slug;
  if (slug === '3d-body-visualizer') {
    normalizedSlug = '3d-bmi-calculator';
  } else if (slug === 'bmi-chart') {
    normalizedSlug = 'bmi-calculator';
  } else if (slug === 'bmi-calculator-india') {
    normalizedSlug = 'bmi-calculator-for-indians';
  } else if (slug === 'one-rep-max-calculator') {
    normalizedSlug = '1rm-calculator';
  } else if (slug === 'heart-rate-zone-calculator') {
    normalizedSlug = 'karvonen-heart-rate-calculator';
  }

  const data = EXAMPLES[normalizedSlug] || EXAMPLES['bmi-calculator'];
  const curLang = (data.inputs[lang]) ? lang : 'en';

  const dynamicSubtitle = toolTitle ? ({
    en: `See how this formula works step by step for ${toolTitle} with sample measurements and clear health ranges.`,
    es: `Examina una demostración detallada paso a paso que ilustra la aplicación práctica de las fórmulas para ${toolTitle}.`,
    fr: `Découvrez une démonstration mathématique étape par étape illustrant l'application des équations de calcul pour ${toolTitle}.`,
    de: `Verfolgen Sie eine transparente Beispielrechnung für ${toolTitle}, die veranschaulicht, wie die Formelwerte mathematisch abgeleitet werden.`,
    ko: `${toolTitle}에 대한 실제 계측 입력값이 공식에 따라 산출되는 유도 과정과 해석 지침입니다.`,
    hi: `${toolTitle} के लिए विस्तृत चरण-दर-चरण गणना और मानकीकृत संदर्भ समझें।`
  }[lang] || headings.subtitle) : headings.subtitle;

  return {
    eyebrow: headings.eyebrow,
    title: headings.title,
    subtitle: dynamicSubtitle,
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
