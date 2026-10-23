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
    eyebrow: "Verified Worked Example",
    title: "Step-by-Step Calculation & Educational Interpretation",
    subtitle: "See how this formula works step by step with sample measurements and clear health ranges.",
    input: "Sample Input Parameters",
    steps: "Mathematical Derivation Steps",
    result: "Calculated Reference Output",
    interp: "Practical Interpretation & Context",
    disc: "Educational Notice: This calculation is an estimate for educational use, not medical advice."
  },
  es: {
    eyebrow: "Ejemplo Práctico Verificado",
    title: "Cálculo Paso a Paso e Interpretación Educativa",
    subtitle: "Examina una demostración detallada paso a paso que ilustra la aplicación práctica de las fórmulas clínicas y la interpretación del resultado.",
    input: "Parámetros de Entrada de Muestra",
    steps: "Pasos de Derivación Matemática",
    result: "Resultado de Referencia Calculado",
    interp: "Interpretación Práctica y Contexto",
    disc: "Aviso: Cálculo de referencia educativa; no constituye un diagnóstico médico individualizado ni una prescripción clínica."
  },
  fr: {
    eyebrow: "Exemple Pratique Vérifié",
    title: "Calcul Étape par Étape et Interprétation Éducative",
    subtitle: "Découvrez une démonstration mathématique transparente étape par étape illustrant l'application des équations de référence et l'interprétation clinique.",
    input: "Paramètres d'Entrée Types",
    steps: "Étapes de Dérivation Mathématique",
    result: "Résultat de Référence Obtenu",
    interp: "Interprétation Pratique et Contexte",
    disc: "Avis : Calcul de référence purement éducatif ; ne constitue en aucun cas un diagnostic médical ou une prescription."
  },
  de: {
    eyebrow: "Verifiziertes Rechenbeispiel",
    title: "Schritt-für-Schritt-Berechnung & Einordnung",
    subtitle: "Verfolgen Sie eine transparente Beispielrechnung, die veranschaulicht, wie die Formelwerte mathematisch abgeleitet und physiologisch eingeordnet werden.",
    input: "Beispiel-Eingabeparameter",
    steps: "Mathematische Rechenschritte",
    result: "Berechneter Referenzwert",
    interp: "Praktische Interpretation & Kontext",
    disc: "Hinweis: Nur zur gesundheitlichen Orientierung; keine individuelle medizinische Diagnose oder Therapieempfehlung."
  },
  ko: {
    eyebrow: "검증된 단계별 계산 예시",
    title: "단계별 산출 과정 및 건강 참조 해석",
    subtitle: "실제 신체 계측 입력값이 공식에 따라 어떻게 산출되는지 단계별 유도 과정과 공중보건 참조 범위 해석 지침을 확인하세요.",
    input: "기준 입력 파라미터 예시",
    steps: "수학적 산출 공식 단계",
    result: "최종 산출 참조 결과값",
    interp: "실제 해석 지침 및 한계점",
    disc: "알림: 본 결과는 대중 보건 스크리닝 목적의 교육용 참고치이며, 전문의의 개별 진단이나 처방을 대신하지 않습니다."
  },
  hi: {
    eyebrow: "सत्यापित व्यावहारिक उदाहरण",
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
      en: "Eating about 2,682 calories per day matches your daily energy burn and keeps your weight steady. To lose body fat gradually, aim for a modest deficit of 300 to 500 calories per day. That brings your daily target to about 2,200 to 2,380 calories.",
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
      en: [{ label: "Biological Sex", value: "Male" }, { label: "Height", value: "178.0 cm (5'10\")" }],
      es: [{ label: "Sexo Biológico", value: "Masculino" }, { label: "Estatura", value: "178.0 cm (5'10\")" }],
      fr: [{ label: "Sexe Biologique", value: "Homme" }, { label: "Taille", value: "178,0 cm (5'10\")" }],
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
  } else if (slug === 'one-rep-max-calculator') {
    normalizedSlug = '1rm-calculator';
  } else if (slug === 'heart-rate-zone-calculator') {
    normalizedSlug = 'karvonen-heart-rate-calculator';
  }

  const data = EXAMPLES[normalizedSlug] || EXAMPLES['bmi-calculator'];
  const curLang = (data.inputs[lang]) ? lang : 'en';

  return {
    eyebrow: headings.eyebrow,
    title: headings.title,
    subtitle: headings.subtitle,
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
