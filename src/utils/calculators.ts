export interface InputField {
  id: string;
  label: Record<string, string>;
  type: 'number' | 'select';
  placeholder?: string;
  min?: number;
  max?: number;
  options?: { value: string; label: Record<string, string> }[];
}

export interface MetricOutput {
  label: Record<string, string>;
  value: string | number;
  unit?: string;
}

export interface CalculatorConfig {
  slug: string;
  name: Record<string, string>;
  title: Record<string, string>;
  description: Record<string, string>;
  inputs: InputField[];
  calculate: (inputs: Record<string, any>, unitSystem: 'metric' | 'imperial') => {
    primary: { value: string | number; label: Record<string, string>; unit?: string };
    secondary: MetricOutput[];
  };
}

export const locales = ['en', 'es', 'fr', 'de', 'ko', 'hi'] as const;
export type Locale = typeof locales[number];

// Common Labels
const L = {
  weight: { en: 'Weight', es: 'Peso', fr: 'Poids', de: 'Gewicht', ko: '몸무게', hi: 'वजन' },
  height: { en: 'Height', es: 'Altura', fr: 'Taille', de: 'Größe', ko: '신장', hi: 'ऊंचाई' },
  age: { en: 'Age', es: 'Edad', fr: 'Âge', de: 'Alter', ko: '나이', hi: 'आयु' },
  gender: { en: 'Gender', es: 'Género', fr: 'Genre', de: 'Geschlecht', ko: '성별', hi: 'लिंग' },
  male: { en: 'Male', es: 'Masculino', fr: 'Homme', de: 'Männlich', ko: '남성', hi: 'पुरुष' },
  female: { en: 'Female', es: 'Femenino', fr: 'Femme', de: 'Weiblich', ko: '여성', hi: 'महिला' },
  waist: { en: 'Waist Circumference', es: 'Cintura', fr: 'Taille (Tour)', de: 'Taillenumfang', ko: '허리둘레', hi: 'कमर की परिधि' },
  hip: { en: 'Hip Circumference', es: 'Cadera', fr: 'Hanches (Tour)', de: 'Hüftumfang', ko: '엉덩이둘레', hi: 'कूल्हे की परिधि' },
  neck: { en: 'Neck Circumference', es: 'Cuello', fr: 'Cou (Tour)', de: 'Nackenumfang', ko: '목둘레', hi: 'गर्दन की परिधि' },
  activity: { en: 'Activity Level', es: 'Nivel de Actividad', fr: 'Niveau d\'Activité', de: 'Aktivitätsniveau', ko: '활동량', hi: 'गतिविधि स्तर' },
  sedentary: { en: 'Sedentary (Little/No Exercise)', es: 'Sedentario', fr: 'Sédentaire', de: 'Sitzend', ko: '활동이 적음', hi: 'गतिहीन' },
  light: { en: 'Light Exercise (1-3 days/wk)', es: 'Ligero', fr: 'Léger', de: 'Leicht', ko: '가벼운 운동', hi: 'हल्का व्यायाम' },
  moderate: { en: 'Moderate Exercise (3-5 days/wk)', es: 'Moderado', fr: 'Modéré', de: 'Mäßig', ko: '보통 운동', hi: 'मध्यम व्यायाम' },
  active: { en: 'Heavy Exercise (6-7 days/wk)', es: 'Activo', fr: 'Très actif', de: 'Sehr aktiv', ko: '激한 운동', hi: 'सक्रिय व्यायाम' },
  goal: { en: 'Goal', es: 'Objetivo', fr: 'Objectif', de: 'Ziel', ko: '목표', hi: 'लक्ष्य' },
  loseWeight: { en: 'Weight Loss', es: 'Perder Peso', fr: 'Perte de Poids', de: 'Gewichtsverlust', ko: '체중 감량', hi: 'वजन घटाना' },
  maintainWeight: { en: 'Maintenance', es: 'Mantener Peso', fr: 'Maintien', de: 'Gewicht halten', ko: '현재 체중 유지', hi: 'वजन बनाए रखना' },
  gainWeight: { en: 'Weight Gain', es: 'Ganar Peso', fr: 'Gain de Poids', de: 'Gewichtszunahme', ko: '체중 증가', hi: 'वजन बढ़ाना' },
};

export const calculators: CalculatorConfig[] = [
  {
    slug: 'bmi-calculator',
    name: { en: 'BMI Calculator', es: 'Calculadora de IMC', fr: 'Calculateur d\'IMC', de: 'BMI-Rechner', ko: 'BMI 계산기', hi: 'बीएमआई कैलकुलेटर' },
    title: { en: 'BMI Calculator – Free Body Mass Index Calculator', es: 'Calculadora de IMC Gratis – Índice de Masa Corporal', fr: 'Calculateur d\'IMC Gratuit – Indice de Masse Corporelle', de: 'BMI Rechner – Kostenloser Body-Mass-Index Rechner', ko: '무료 BMI 계산기 – 체질량지수 계산기', hi: 'मुफ़्त BMI कैलकुलेटर – बॉडी मास इंडेक्स' },
    description: {
      "en": "Free Body Mass Index (BMI) Calculator. Calculate your Body Mass Index (BMI), BMI category, and healthy weight reference range based on WHO & CDC guidance. Free to use with privacy-focused, browser-based calculations.",
      "es": "Calculadora de Índice de Masa Corporal (IMC) gratuita. Calcula tu IMC, categoría de IMC y rango de peso saludable basado en las guías de la OMS y CDC. Uso gratuito con cálculos privados basados en el navegador sin registros.",
      "fr": "Calculateur gratuit d'Indice de Masse Corporelle (IMC). Calculez votre IMC, catégorie d'IMC et plage de poids santé selon les directives de l'OMS et du CDC. Gratuit et axé sur la confidentialité avec calculs sur navigateur.",
      "de": "Kostenloser Body-Mass-Index (BMI) Rechner. Berechnen Sie Ihren BMI, Ihre BMI-Kategorie und Ihren gesundes Gewicht Referenzbereich nach WHO- und CDC-Richtlinien. Kostenlos und datenschutzorientiert direkt im Browser.",
      "ko": "무료 체질량지수(BMI) 계산기. WHO 및 CDC 지침에 따라 BMI, BMI 범주 및 정상 체중 참조 범위를 산출하세요. 가입 없이 브라우저 내에서 안전하게 구동되는 100% 무료 도구입니다.",
      "hi": "मुफ़्त बॉडी मास इंडेक्स (BMI) कैलकुलेटर। डब्ल्यूएचओ और सीडीसी दिशानिर्देशों के आधार पर अपने बीएमआई, बीएमआई श्रेणी और स्वस्थ वजन सीमा का अनुमान लगाएं। मुफ़्त, गोपनीयता-केंद्रित और ब्राउज़र-आधारित गणना।"
    },
    inputs: [
      { id: 'weight', label: L.weight, type: 'number', placeholder: '70' },
      { id: 'height', label: L.height, type: 'number', placeholder: '175' },
      { id: 'age', label: L.age, type: 'number', placeholder: '25' },
      { id: 'gender', label: L.gender, type: 'select', options: [{ value: 'male', label: L.male }, { value: 'female', label: L.female }] }
    ],
    calculate: (inputs, system) => {
      let w = parseFloat(inputs.weight) || 0;
      let h = parseFloat(inputs.height) || 0;
      if (system === 'imperial') {
        w = w * 0.453592;
        h = h * 2.54;
      }
      const hM = h / 100;
      const bmi = hM > 0 ? w / (hM * hM) : 0;
      const isM = inputs.gender === 'male';

      let cat = { en: 'Normal weight (18.5 - 24.9)', es: 'Peso normal (18.5 - 24.9)', fr: 'Poids normal (18.5 - 24.9)', de: 'Normalgewicht (18.5 - 24.9)', ko: '정상 체중 (18.5 - 24.9)', hi: 'सामान्य वजन (18.5 - 24.9)' };
      if (bmi < 18.5) cat = { en: 'Underweight (< 18.5)', es: 'Bajo peso (< 18.5)', fr: 'Insuffisance pondérale (< 18.5)', de: 'Untergewicht (< 18.5)', ko: '저체중 (< 18.5)', hi: 'कम वजन (< 18.5)' };
      else if (bmi >= 25 && bmi < 30) cat = { en: 'Overweight (25.0 - 29.9)', es: 'Sobrepeso (25.0 - 29.9)', fr: 'Surpoids (25.0 - 29.9)', de: 'Übergewicht (25.0 - 29.9)', ko: '과체중 (25.0 - 29.9)', hi: 'अधिक वजन (25.0 - 29.9)' };
      else if (bmi >= 30) cat = { en: 'Obesity (≥ 30.0)', es: 'Obesidad (≥ 30.0)', fr: 'Obésité (≥ 30.0)', de: 'Adipositas (≥ 30.0)', ko: '비만 (≥ 30.0)', hi: 'मोटापा (≥ 30.0)' };

      const bodyFat = (1.20 * bmi) + (0.23 * (parseFloat(inputs.age) || 25)) - (10.8 * (isM ? 1 : 0)) - 5.4;
      const ideal = 22 * (hM * hM);

      return {
        primary: { value: bmi.toFixed(1), label: { en: 'BMI Score', es: 'Puntaje de IMC', fr: 'Score d\'IMC', de: 'BMI-Wert', ko: 'BMI 점수', hi: 'बीएमआई स्कोर' } },
        secondary: [
          { label: { en: 'Classification', es: 'Clasificación', fr: 'Classification', de: 'Klassifizierung', ko: '분류', hi: 'वर्गीकरण' }, value: cat.en },
          { label: { en: 'Est. Body Fat', es: 'Grasa Estimada', fr: 'Graisse Corp. Est.', de: 'Körperfett', ko: '체지방률', hi: 'अनुमानित वसा' }, value: bodyFat.toFixed(1), unit: '%' },
          { label: { en: 'Ideal Weight', es: 'Peso Ideal', fr: 'Poids Idéal', de: 'Idealgewicht', ko: '이상적인 체중', hi: 'आदर्श वजन' }, value: (system === 'imperial' ? ideal / 0.453592 : ideal).toFixed(1), unit: system === 'imperial' ? 'lbs' : 'kg' }
        ]
      };
    }
  },
  {
    slug: '3d-bmi-calculator',
    name: { en: '3D BMI Calculator', es: 'Calculadora IMC 3D', fr: 'Calculateur IMC 3D', de: '3D BMI Rechner', ko: '3D BMI 계산기', hi: '3D बीएमआई कैलकुलेटर' },
    title: { en: '3D BMI Calculator & Body Visualizer – Height & Weight Tool', es: 'Calculadora IMC 3D y Visualizador Corporal', fr: 'Calculateur IMC 3D et Visualiseur Corporel', de: '3D BMI Rechner & Körper-Visualisierer', ko: '3D BMI 계산기 및 체형 시각화 도구', hi: '3D बीएमआई कैलकुलेटर और बॉडी विजुअलाइज़र' },
    description: {
      "en": "Free 3D Body Visualizer & 3D BMI Calculator. Calculate Body Mass Index (BMI), view 360° interactive front, side and back 3D avatar mesh, solid, wireframe & heatmap modes with Oxford 2.5 exponent scaling. 100% free with browser-based privacy.",
      "es": "Calculadora de IMC 3D y visualizador corporal 3D interactivo gratuito. Calcula tu IMC, visualiza tu avatar 3D en 360° en modos de malla, sólido, estructura de alambre y mapa de calor con escalado de Oxford 2.5. 100% gratuito con privacidad basada en el navegador.",
      "fr": "Calculateur d'IMC 3D et visualiseur corporel 3D interactif gratuit. Calculez votre IMC, visualisez votre avatar 3D à 360° en modes maillage, solide, fil de fer et carte thermique avec mise à l'échelle Oxford 2.5. 100% gratuit avec confidentialité sur navigateur.",
      "de": "Kostenloser 3D BMI Rechner & interaktiver 3D-Körper-Visualisierer. Berechnen Sie Ihren BMI und betrachten Sie Ihr 360° 3D-Körpermodell in Netz-, Solid-, Drahtmodell- und Heatmap-Modi mit Oxford 2.5 Skalierung. 100% kostenlos und datenschutzorientiert.",
      "ko": "무료 3D BMI 계산기 및 대화형 3D 체형 시각화 도구. 체질량지수(BMI)를 산출하고 옥스포드 2.5 공식을 적용하여 360° 전면, 측면, 후면 3D 아바타, 와이어프레임 및 히트맵 모드를 확인하세요. 브라우저 내 100% 무료 및 개인정보 보호.",
      "hi": "मुफ़्त 3D बीएमआई कैलकुलेटर और 3D बॉडी विजुअलाइज़र। अपने बीएमआई की गणना करें, ऑक्सफोर्ड 2.5 फॉर्मूला के साथ 360° 3D अवतार, वायरफ्रेम और हीटमैप मोड में अपना शरीर तुरंत देखें। 100% मुफ़्त और ब्राउज़र-आधारित गोपनीयता।"
    },
    inputs: [
      { id: 'weight', label: L.weight, type: 'number', placeholder: '70' },
      { id: 'height', label: L.height, type: 'number', placeholder: '175' },
      { id: 'age', label: L.age, type: 'number', placeholder: '25' },
      { id: 'gender', label: L.gender, type: 'select', options: [{ value: 'male', label: L.male }, { value: 'female', label: L.female }] }
    ],
    calculate: (inputs, system) => {
      let w = parseFloat(inputs.weight) || 0;
      let h = parseFloat(inputs.height) || 0;
      if (system === 'imperial') {
        w = w * 0.453592;
        h = h * 2.54;
      }
      const hM = h / 100;
      const stdBmi = w / (hM * hM);
      const newBmi = (1.3 * w) / Math.pow(hM, 2.5);
      const diff = newBmi - stdBmi;

      return {
        primary: { value: newBmi.toFixed(1), label: { en: '3D Height-Adjusted BMI', es: 'IMC 3D Ajustado', fr: 'IMC 3D Ajusté', de: '3D-Höhen-BMI', ko: '3D 신장 보정 BMI', hi: '3D ऊंचाई-समायोजित बीएमआई' } },
        secondary: [
          { label: { en: 'Standard BMI', es: 'IMC Estándar', fr: 'IMC Standard', de: 'Standard-BMI', ko: '표준 BMI', hi: 'मानक बीएमआई' }, value: stdBmi.toFixed(1) },
          { label: { en: 'Height Correction', es: 'Corrección Altura', fr: 'Correction Taille', de: 'Höhenkorrektur', ko: '신장 보정 차이', hi: 'ऊंचाई सुधार' }, value: (diff >= 0 ? '+' : '') + diff.toFixed(1), unit: 'pts' }
        ]
      };
    }
  },
  {
    slug: 'bmi-chart',
    name: {
      en: 'BMI Chart & Table',
      es: 'Tabla y Gráfico de IMC',
      fr: 'Tableau et Graphique IMC',
      de: 'BMI-Tabelle & Diagramm',
      ko: 'BMI 차트 및 진단표',
      hi: 'बीएमआई चार्ट और टेबल (BMI Chart & Table)'
    },
    title: {
      en: 'BMI Chart for Adults – Height & Weight Matrix (kg, cm, lbs)',
      es: 'Tabla de IMC para Adultos – Matriz de Altura y Peso (kg, cm, lbs)',
      fr: 'Tableau d\'IMC pour Adultes – Matrice Taille et Poids (kg, cm, lbs)',
      de: 'BMI-Tabelle für Erwachsene – Höhe & Gewicht Matrix (kg, cm, lbs)',
      ko: '성인용 BMI 차트 – 신장 및 체중 표 (kg, cm, lbs)',
      hi: 'वयस्कों के लिए बीएमआई चार्ट - ऊंचाई एवं वजन तालिका (kg, cm, lbs)'
    },
    description: {
      "en": "Official WHO BMI Chart for adults, men, and women. Interactive BMI scale calculator, height-weight metric lookup tables (kg & cm), WHO categories, and age reference guidance. Free to use with browser-based privacy.",
      "es": "Tabla oficial de IMC de la OMS para adultos, hombres y mujeres. Calculadora interactiva de escala de IMC, tablas de consulta de altura y peso en sistema métrico (kg y cm), categorías de la OMS y guía de referencia por edad. Uso gratuito con privacidad en el navegador.",
      "fr": "Tableau d'IMC officiel de l'OMS pour adultes, hommes et femmes. Calculateur d'échelle d'IMC interactif, tableaux de consultation taille-poids en unités métriques (kg et cm), catégories de l'OMS et repères d'âge. Gratuit avec confidentialité sur navigateur.",
      "de": "Offizielle WHO BMI-Tabelle für Erwachsene, Männer und Frauen. Interaktiver BMI-Skala-Rechner, Größe-Gewicht-Referenztabellen in metrischen Einheiten (kg & cm), WHO-Kategorien und Altersreferenzwerte. Kostenlos und datenschutzorientiert im Browser.",
      "ko": "성인, 남성 및 여성을 위한 공식 WHO BMI 차트. 대화형 BMI 지수 계산기, 신장-체중 미터법 진단표(kg & cm), WHO 범주 및 연령별 참조 지침을 제공합니다. 가입 없이 브라우저 내 100% 무료 구동.",
      "hi": "वयस्कों, पुरुषों और महिलाओं के लिए आधिकारिक डब्ल्यूएचओ बीएमआई चार्ट। इंटरएक्टिव बीएमआई स्केल कैलकुलेटर, ऊंचाई-वजन मीट्रिक लुकअप टेबल (kg और cm), डब्ल्यूएचओ श्रेणियां और आयु संदर्भ मार्गदर्शन। मुफ़्त, गोपनीयता-केंद्रित और ब्राउज़र-आधारित।"
    },
    inputs: [
      { id: 'weight', label: L.weight, type: 'number', placeholder: '70' },
      { id: 'height', label: L.height, type: 'number', placeholder: '175' },
      { id: 'age', label: L.age, type: 'number', placeholder: '30' },
      { id: 'gender', label: L.gender, type: 'select', options: [{ value: 'male', label: L.male }, { value: 'female', label: L.female }] }
    ],
    calculate: (inputs, system) => {
      let w = parseFloat(inputs.weight) || 0;
      let h = parseFloat(inputs.height) || 0;
      if (system === 'imperial') {
        w = w * 0.453592;
        h = h * 2.54;
      }
      const hM = h / 100;
      const bmi = hM > 0 ? w / (hM * hM) : 0;
      const isM = inputs.gender === 'male';

      let category = 'Healthy Weight (18.5 - 24.9)';
      if (bmi < 18.5) category = 'Underweight (< 18.5)';
      else if (bmi >= 25.0 && bmi < 30.0) category = 'Overweight (25.0 - 29.9)';
      else if (bmi >= 30.0 && bmi < 35.0) category = 'Obesity Class I (30.0 - 34.9)';
      else if (bmi >= 35.0 && bmi < 40.0) category = 'Obesity Class II (35.0 - 39.9)';
      else if (bmi >= 40.0) category = 'Obesity Class III (≥ 40.0)';

      const minHealthy = 18.5 * (hM * hM);
      const maxHealthy = 24.9 * (hM * hM);

      const conv = (v: number) => system === 'imperial' ? v / 0.453592 : v;
      const unitStr = system === 'imperial' ? 'lbs' : 'kg';

      return {
        primary: { value: bmi.toFixed(1), label: { en: 'BMI Chart Score', es: 'Puntaje de IMC', fr: 'Score d\'IMC', de: 'BMI-Wert', ko: 'BMI 차트 점수', hi: 'बीएमआई चार्ट स्कोर' } },
        secondary: [
          { label: { en: 'WHO Adult Classification', es: 'Clasificación OMS', fr: 'Classification OMS', de: 'WHO Klassifizierung', ko: 'WHO 성인 분류', hi: 'डब्ल्यूएचओ वयस्क वर्गीकरण' }, value: category },
          { label: { en: 'Healthy Chart Weight Window', es: 'Rango de Peso Saludable', fr: 'Plage de Poids Santé', de: 'Gesundes Gewicht', ko: '건강한 체중 범위', hi: 'स्वस्थ वजन चार्ट सीमा' }, value: `${conv(minHealthy).toFixed(1)} - ${conv(maxHealthy).toFixed(1)}`, unit: unitStr },
          { label: { en: 'Asian/Indian Cutoff Threshold', es: 'Umbral Asiático (23)', fr: 'Seuil Asiatique (23)', de: 'Asien Schwellenwert (23)', ko: '아시아인 주의 기준 (23)', hi: 'एशियाई ओवरवेट कटऑफ' }, value: '23.0 kg/m²' }
        ]
      };
    }
  },
  {
    slug: '3d-body-visualizer',
    name: {
      en: '3D Body Visualizer',
      es: 'Visualizador Corporal 3D',
      fr: 'Visualiseur Corporel 3D',
      de: '3D Body Visualizer',
      ko: '3D 바디 비주얼라이저 (3D Body Visualizer)',
      hi: '3D बॉडी विजुअलाइज़र (3D Body Visualizer)'
    },
    title: {
      en: '3D Body Visualizer & 3D BMI Calculator Online – BMI Visualizer Tool',
      es: 'Visualizador Corporal 3D y Calculadora IMC 3D Online',
      fr: 'Visualiseur Corporel 3D et Calculateur IMC 3D en Ligne',
      de: '3D Body Visualizer & 3D BMI Rechner Online',
      ko: '3D 바디 비주얼라이저 & 온라인 3D BMI 계산기',
      hi: '3D बॉडी विजुअलाइज़र और ऑनलाइन 3D बीएमआई कैलकुलेटर'
    },
    description: {
      "en": "Free 3D Body Visualizer & 3D BMI Calculator online. View interactive 360° front, side & back 3D body type avatar model, wireframe, and BMI heatmap modes with real-time sliders. 100% free with browser-based calculations.",
      "es": "Visualizador corporal 3D interactivo y calculadora de IMC 3D en línea gratuita. Observa tu modelo de avatar 3D en 360° con vistas frontal, lateral y posterior, modo alambre y mapa de calor con deslizadores en tiempo real. 100% gratuito con cálculos en navegador.",
      "fr": "Visualiseur corporel 3D gratuit et calculateur d'IMC 3D en ligne. Visualisez votre avatar 3D à 360° de face, de profil et de dos en modes maillage, fil de fer et carte thermique avec curseurs en temps réel. 100% gratuit et axé sur la confidentialité.",
      "de": "Kostenloser 3D Body Visualizer & 3D BMI Rechner online. Betrachten Sie Ihr interaktives 360° 3D-Körpermodell von vorne, der Seite und von hinten mit Drahtmodell und Heatmap über Echtzeit-Regler. 100% kostenlos direkt im Browser.",
      "ko": "무료 온라인 3D 바디 비주얼라이저 및 3D BMI 계산기. 실시간 슬라이더 조작을 통해 360° 전면, 측면, 후면 3D 아바타, 와이어프레임 및 BMI 히트맵을 확인하세요. 개인정보 수집 없는 100% 무료 도구입니다.",
      "hi": "मुफ़्त 3D बॉडी विजुअलाइज़र और ऑनलाइन 3D बीएमआई कैलकुलेटर। रियल-टाइम स्लाइडर्स के साथ 360° फ्रंट, साइड और बैक 3D अवतार मॉडल, वायरफ्रेम और बीएमआई हीटमैप मोड में अपना शरीर तुरंत देखें। 100% मुफ़्त और ब्राउज़र-आधारित गणना।"
    },
    inputs: [
      { id: 'weight', label: L.weight, type: 'number', placeholder: '70' },
      { id: 'height', label: L.height, type: 'number', placeholder: '175' },
      { id: 'age', label: L.age, type: 'number', placeholder: '25' },
      { id: 'gender', label: L.gender, type: 'select', options: [{ value: 'male', label: L.male }, { value: 'female', label: L.female }] }
    ],
    calculate: (inputs, system) => {
      let w = parseFloat(inputs.weight) || 0;
      let h = parseFloat(inputs.height) || 0;
      if (system === 'imperial') {
        w = w * 0.453592;
        h = h * 2.54;
      }
      const hM = h / 100;
      const stdBmi = w / (hM * hM);
      const newBmi = (1.3 * w) / Math.pow(hM, 2.5);
      const diff = newBmi - stdBmi;

      return {
        primary: { value: newBmi.toFixed(1), label: { en: '3D Height-Adjusted BMI', es: 'IMC 3D Ajustado', fr: 'IMC 3D Ajusté', de: '3D-Höhen-BMI', ko: '3D 신장 보정 BMI', hi: '3D ऊंचाई-समायोजित बीएमआई' } },
        secondary: [
          { label: { en: 'Standard BMI', es: 'IMC Estándar', fr: 'IMC Standard', de: 'Standard-BMI', ko: '표준 BMI', hi: 'मानक बीएमआई' }, value: stdBmi.toFixed(1) },
          { label: { en: '3D Volume Scale Factor', es: 'Escala Volumétrica 3D', fr: 'Échelle Volumétrique 3D', de: 'Volumen-Skalierungsfaktor', ko: '3D 볼륨 스케일 팩터', hi: '3D वॉल्यूम स्केल फैक्टर' }, value: (newBmi / 22.5).toFixed(2), unit: 'x' }
        ]
      };
    }
  },
  {
    slug: 'bmi-calculator-india',
    name: {
      en: 'BMI Calculator India',
      es: 'Calculadora IMC India',
      fr: 'Calculateur d\'IMC Inde',
      de: 'BMI-Rechner Indien',
      ko: '인도 BMI 계산기',
      hi: 'बीएमआई कैलकुलेटर भारत'
    },
    title: {
      en: 'BMI Calculator India – Healthy BMI Chart & Range for Indian Men & Women',
      es: 'Calculadora IMC India – Rango de IMC Saludable para Hombres y Mujeres',
      fr: 'Calculateur d\'IMC Inde – Plage d\'IMC Santé pour Hommes et Femmes',
      de: 'BMI-Rechner Indien – Gesunder BMI-Bereich für Männer und Frauen',
      ko: '인도 BMI 계산기 – 인도 남성 및 여성의 건강한 BMI 범위 및 차트',
      hi: 'बीएमआई कैलकुलेटर भारत - भारतीय पुरुषों और महिलाओं के लिए स्वस्थ बीएमआई चार्ट एवं सीमा'
    },
    description: {
      "en": "Free BMI Calculator India aligned with ICMR & WHO South-East Asia consensus guidelines (Asian overweight cutoff: 23.0 kg/m²). Calculate your BMI, Asian risk category, and healthy weight range with privacy-focused, browser-based calculations.",
      "es": "Calculadora de IMC para la India gratuita alineada con las directrices del ICMR y la OMS para el Sur de Asia (corte de sobrepeso asiático: 23.0 kg/m²). Calcula tu IMC, categoría de riesgo asiática y rango de peso saludable con cálculos privados en el navegador.",
      "fr": "Calculateur d'IMC Inde gratuit conforme aux directives de l'ICMR et de l'OMS pour l'Asie du Sud-Est (seuil de surpoids asiatique : 23,0 kg/m²). Calculez votre IMC, catégorie de risque asiatique et poids santé avec calculs confidentiels sur navigateur.",
      "de": "Kostenloser BMI-Rechner für Indien nach offiziellen ICMR- und WHO-Südasien-Richtlinien (asiatischer Übergewichtsschwelle: 23,0 kg/m²). Berechnen Sie Ihren BMI, Ihre asiatische Risiko-Kategorie und Ihr gesundes Gewicht datenschutzorientiert im Browser.",
      "ko": "공식 ICMR 및 WHO 남아시아 지침(아시아인 과체중 기준: 23.0 kg/m²)에 맞춘 인도인 전용 무료 BMI 계산기. BMI, 아시아인 위험 범주 및 건강 체중 범위를 산출하세요. 브라우저 내 100% 무료 구동.",
      "hi": "आधिकारिक ICMR और WHO दक्षिण एशियाई दिशानिर्देशों (एशियाई ओवरवेट कटऑफ: 23.0 kg/m²) के अनुसार भारतीयों के लिए मुफ़्त बीएमआई कैलकुलेटर। अपने बीएमआई, एशियाई जोखिम श्रेणी और स्वस्थ वजन सीमा की गणना करें। मुफ़्त और गोपनीयता-केंद्रित।"
    },
    inputs: [
      { id: 'weight', label: L.weight, type: 'number', placeholder: '65' },
      { id: 'height', label: L.height, type: 'number', placeholder: '168' },
      { id: 'age', label: L.age, type: 'number', placeholder: '30' },
      { id: 'gender', label: L.gender, type: 'select', options: [{ value: 'male', label: L.male }, { value: 'female', label: L.female }] },
      { id: 'waist', label: L.waist, type: 'number', placeholder: '80' }
    ],
    calculate: (inputs, system) => {
      let w = parseFloat(inputs.weight) || 0;
      let h = parseFloat(inputs.height) || 0;
      let waist = parseFloat(inputs.waist) || 0;
      if (system === 'imperial') {
        w = w * 0.453592;
        h = h * 2.54;
        waist = waist * 2.54;
      }
      const hM = h / 100;
      const bmi = hM > 0 ? w / (hM * hM) : 0;
      const isM = inputs.gender === 'male';

      let indianCat = 'Healthy Weight (18.5 - 22.9)';
      if (bmi < 18.5) indianCat = 'Underweight (< 18.5)';
      else if (bmi >= 23.0 && bmi < 25.0) indianCat = 'Overweight / At Risk (23.0 - 24.9)';
      else if (bmi >= 25.0 && bmi < 30.0) indianCat = 'Obese Class I (25.0 - 29.9)';
      else if (bmi >= 30.0) indianCat = 'Obese Class II (≥ 30.0)';

      const minHealthyW = 18.5 * (hM * hM);
      const maxHealthyW = 22.9 * (hM * hM);

      const waistLimit = isM ? 90 : 80;
      const waistStatus = waist > 0 ? (waist >= waistLimit ? 'Elevated (ICMR Visceral Risk)' : 'Healthy Waist') : 'Not Provided';

      const unitStr = system === 'imperial' ? 'lbs' : 'kg';
      const conv = (v: number) => system === 'imperial' ? v / 0.453592 : v;

      return {
        primary: { value: bmi.toFixed(1), label: { en: 'Indian Standard BMI', es: 'IMC Estándar India', fr: 'IMC Standard Inde', de: 'Indien-Standard-BMI', ko: '인도 표준 BMI', hi: 'भारतीय मानक बीएमआई' } },
        secondary: [
          { label: { en: 'Asian/Indian Classification', es: 'Clasificación Asiática', fr: 'Classification Asiatique', de: 'Asiatische Klassifizierung', ko: '아시아/인도 분류', hi: 'भारतीय बीएमआई वर्ग' }, value: indianCat },
          { label: { en: 'Healthy Weight Window (India)', es: 'Rango de Peso Saludable (India)', fr: 'Plage de Poids Santé (Inde)', de: 'Gesundes Gewicht (Indien)', ko: '인도 권장 건강 체중 범위', hi: 'स्वास्थ्यप्रद वजन सीमा (भारत)' }, value: `${conv(minHealthyW).toFixed(1)} - ${conv(maxHealthyW).toFixed(1)}`, unit: unitStr },
          { label: { en: 'ICMR Waist Risk Status', es: 'Estado de Cintura ICMR', fr: 'Statut Tour de Taille ICMR', de: 'ICMR Taillen-Status', ko: 'ICMR 허리 둘레 평가', hi: 'ICMR कमर जोखिम स्थिति' }, value: waistStatus },
          { label: { en: 'Indian Overweight Threshold', es: 'Umbral de Acción', fr: 'Seuil d\'Action', de: 'Aktions-Schwellenwert', ko: '주의 개시 기준점', hi: 'भारतीय ओवरवेट कटऑफ' }, value: '23.0 kg/m²' }
        ]
      };
    }
  },
  {
    slug: 'bmi-calculator-for-indians',
    name: {
      en: 'BMI Calculator for Indians',
      es: 'Calculadora IMC para Indios',
      fr: 'Calculateur d\'IMC pour les Indiens',
      de: 'BMI Rechner für Inder',
      ko: '인도인을 위한 BMI 계산기',
      hi: 'भारतीयों के लिए बीएमआई कैलकुलेटर'
    },
    title: {
      en: 'BMI Calculator for Indians – ICMR & WHO Indian Standard Ranges',
      es: 'Calculadora IMC para Indios – Estándares ICMR y OMS para India',
      fr: 'Calculateur d\'IMC pour les Indiens – Normes ICMR et OMS',
      de: 'BMI Rechner für Inder – ICMR & WHO Indien Standards',
      ko: '인도인을 위한 BMI 계산기 – ICMR 및 WHO 인도 표준 범위',
      hi: 'भारतीयों के लिए बीएमआई कैलकुलेटर - ICMR एवं WHO भारतीय मानक सीमाएं'
    },
    description: {
      "en": "Free BMI Calculator for Indians based on ICMR & WHO Asia-Pacific threshold standards (Overweight: ≥ 23.0 kg/m², Obese: ≥ 27.5 kg/m²). Calculate ethnic Indian body mass index, cardiometabolic risk category, and target healthy weight window with browser-based calculations.",
      "es": "Calculadora de IMC para indios gratuita basada en los estándares del ICMR y la OMS Asia-Pacífico (Sobrepeso: ≥ 23.0 kg/m², Obesidad: ≥ 27.5 kg/m²). Calcula el IMC étnico indio, la categoría de riesgo cardiometabólico y la ventana de peso saludable objetivo con cálculos en el navegador.",
      "fr": "Calculateur d'IMC pour les Indiens gratuit basé sur les normes ICMR et OMS Asie-Pacifique (Surpoids : ≥ 23,0 kg/m², Obésité : ≥ 27,5 kg/m²). Calculez l'IMC éthnique indien, la catégorie de risque cardiométabolique et la plage de poids cible avec calculs sur navigateur.",
      "de": "Kostenloser BMI-Rechner für indische Erwachsene basierend auf ICMR- und WHO-Asien-Pazifik-Standards (Übergewicht: ≥ 23,0 kg/m², Adipositas: ≥ 27,5 kg/m²). Berechnen Sie Ihren indischen BMI und die kardiometabolische Risikokategorie datenschutzorientiert im Browser.",
      "ko": "ICMR 및 WHO 아시아-태평양 규격 기준(과체중: ≥ 23.0 kg/m², 비만: ≥ 27.5 kg/m²)에 따른 인도인 전용 무료 BMI 계산기. 인도인 체형 BMI 점수, 심대사 위험 범주 및 목표 정상 체중 범위를 계산하세요. 가입 없는 100% 무료 도구.",
      "hi": "ICMR और WHO एशिया-प्रशांत मानक मानदंडों (ओवरवेट: ≥ 23.0 kg/m², मोटा: ≥ 27.5 kg/m²) पर आधारित भारतीयों के लिए मुफ़्त बीएमआई कैलकुलेटर। भारतीय बीएमआई, कार्डियोमेटाबॉलिक जोखिम श्रेणी और लक्षित स्वस्थ वजन सीमा की गणना करें। मुफ़्त और गोपनीयता-केंद्रित।"
    },
    inputs: [
      { id: 'weight', label: L.weight, type: 'number', placeholder: '65' },
      { id: 'height', label: L.height, type: 'number', placeholder: '168' },
      { id: 'age', label: L.age, type: 'number', placeholder: '30' },
      { id: 'gender', label: L.gender, type: 'select', options: [{ value: 'male', label: L.male }, { value: 'female', label: L.female }] },
      { id: 'waist', label: L.waist, type: 'number', placeholder: '80' }
    ],
    calculate: (inputs, system) => {
      let w = parseFloat(inputs.weight) || 0;
      let h = parseFloat(inputs.height) || 0;
      let waist = parseFloat(inputs.waist) || 0;
      if (system === 'imperial') {
        w = w * 0.453592;
        h = h * 2.54;
        waist = waist * 2.54;
      }
      const hM = h / 100;
      const bmi = hM > 0 ? w / (hM * hM) : 0;
      const isM = inputs.gender === 'male';

      let indianCat = 'Healthy Weight (18.5 - 22.9)';
      if (bmi < 18.5) indianCat = 'Underweight (< 18.5)';
      else if (bmi >= 23.0 && bmi < 25.0) indianCat = 'Overweight / At Risk (23.0 - 24.9)';
      else if (bmi >= 25.0 && bmi < 30.0) indianCat = 'Obese Class I (25.0 - 29.9)';
      else if (bmi >= 30.0) indianCat = 'Obese Class II (≥ 30.0)';

      const minHealthyW = 18.5 * (hM * hM);
      const maxHealthyW = 22.9 * (hM * hM);

      const waistLimit = isM ? 90 : 80;
      const waistStatus = waist > 0 ? (waist >= waistLimit ? 'Elevated (ICMR Visceral Risk)' : 'Healthy Waist') : 'Not Provided';

      const unitStr = system === 'imperial' ? 'lbs' : 'kg';
      const conv = (v: number) => system === 'imperial' ? v / 0.453592 : v;

      return {
        primary: { value: bmi.toFixed(1), label: { en: 'Indian Standard BMI', es: 'IMC Estándar India', fr: 'IMC Standard Inde', de: 'Indien-Standard-BMI', ko: '인도 표준 BMI', hi: 'भारतीय मानक बीएमआई' } },
        secondary: [
          { label: { en: 'Asian/Indian Classification', es: 'Clasificación Asiática', fr: 'Classification Asiatique', de: 'Asiatische Klassifizierung', ko: '아시아/인도 분류', hi: 'भारतीय बीएमआई वर्ग' }, value: indianCat },
          { label: { en: 'Healthy Weight Window (India)', es: 'Rango de Peso Saludable (India)', fr: 'Plage de Poids Santé (Inde)', de: 'Gesundes Gewicht (Indien)', ko: '인도 권장 건강 체중 범위', hi: 'स्वास्थ्यप्रद वजन सीमा (भारत)' }, value: `${conv(minHealthyW).toFixed(1)} - ${conv(maxHealthyW).toFixed(1)}`, unit: unitStr },
          { label: { en: 'ICMR Waist Risk Status', es: 'Estado de Cintura ICMR', fr: 'Statut Tour de Taille ICMR', de: 'ICMR Taillen-Status', ko: 'ICMR 허리 둘레 평가', hi: 'ICMR कमर जोखिम स्थिति' }, value: waistStatus },
          { label: { en: 'Indian Overweight Threshold', es: 'Umbral de Acción', fr: 'Seuil d\'Action', de: 'Aktions-Schwellenwert', ko: '주의 개시 기준점', hi: 'भारतीय ओवरवेट कटऑफ' }, value: '23.0 kg/m²' }
        ]
      };
    }
  },
  {
    slug: 'healthy-weight-by-height',
    name: {
      en: 'Healthy Weight by Height',
      es: 'Peso Saludable por Altura',
      fr: 'Poids Santé selon la Taille',
      de: 'Gesundes Gewicht nach Körpergröße',
      ko: '키별 건강 체중 계산기',
      hi: 'ऊंचाई के अनुसार स्वस्थ वजन'
    },
    title: {
      en: 'Healthy Weight by Height Chart – Ideal Weight Range for Men & Women',
      es: 'Tabla de Peso Saludable por Altura – Rango Ideal para Hombres y Mujeres',
      fr: 'Tableau de Poids Santé selon la Taille – Plage Idéale pour Hommes et Femmes',
      de: 'Größe-Gewicht-Tabelle – Gesunder Gewichtsbereich für Männer & Frauen',
      ko: '키별 건강 체중 표 및 계산기 – 남성 및 여성의 이상적인 체중 범위',
      hi: 'ऊंचाई के अनुसार स्वस्थ वजन चार्ट - पुरुषों और महिलाओं के लिए आदर्श वजन सीमा'
    },
    description: {
      "en": "Free Healthy Weight by Height Calculator & Ideal Body Weight Matrix. Lookup healthy weight ranges by height (cm, feet, inches) based on WHO BMI 18.5 - 24.9 standards and Devine formula benchmarks with privacy-focused, browser calculations.",
      "es": "Calculadora gratuita de peso saludable por altura y matriz de peso corporal ideal. Consulta rangos de peso saludable por altura (cm, pies, pulgadas) según los estándares OMS IMC 18.5 - 24.9 y la fórmula de Devine con cálculos privados en el navegador.",
      "fr": "Calculateur gratuit de poids idéal par taille et matrice de poids santé. Consultez les plages de poids santé selon la taille (cm, pieds, pouces) basées sur les normes OMS IMC 18,5 - 24,9 et la formule de Devine avec calculs sur navigateur.",
      "de": "Kostenloser Idealgewicht-nach-Größe-Rechner & Körpergewicht-Matrix. Schlagen Sie gesunde Gewichtsbereiche nach Körpergröße (cm, Fuß, Zoll) basierend auf WHO-BMI-Normen (18,5 - 24,9) und Devine-Formel datenschutzorientiert im Browser nach.",
      "ko": "신장별 정상 체중 무료 계산기 및 이상적 체중 진단표. WHO BMI 18.5 - 24.9 기준 및 Devine 공식에 따라 신장(cm, feet, inches)별 정상 체중 범위를 조회하세요. 개인정보 수집 없는 100% 브라우저 계산.",
      "hi": "ऊंचाई के अनुसार स्वस्थ वजन कैलकुलेटर और आदर्श शरीर वजन मैट्रिक्स। WHO बीएमआई 18.5 - 24.9 मानकों और डिवाइन फॉर्मूला के आधार पर ऊंचाई (सेमी, फीट, इंच) के अनुसार स्वस्थ वजन सीमा देखें। मुफ़्त और गोपनीयता-केंद्रित।"
    },
    inputs: [
      { id: 'height', label: L.height, type: 'number', placeholder: '170' },
      { id: 'gender', label: L.gender, type: 'select', options: [{ value: 'male', label: L.male }, { value: 'female', label: L.female }] },
      { id: 'weight', label: { en: 'Current Weight (Optional)', es: 'Peso Actual (Opcional)', fr: 'Poids Actuel (Optionnel)', de: 'Aktuelles Gewicht (Optional)', ko: '현재 체중 (선택사항)', hi: 'वर्तमान वजन (वैकल्पिक)' }, type: 'number', placeholder: '68' }
    ],
    calculate: (inputs, system) => {
      let h = parseFloat(inputs.height) || 0;
      let w = parseFloat(inputs.weight) || 0;
      if (system === 'imperial') {
        h = h * 2.54;
        if (w > 0) w = w * 0.453592;
      }
      const hM = h / 100;
      const isM = inputs.gender === 'male';

      const minHealthy = 18.5 * (hM * hM);
      const maxHealthy = 24.9 * (hM * hM);

      const over5Ft = Math.max(0, (h / 2.54) - 60);
      const devineIBW = isM ? 50.0 + (2.3 * over5Ft) : 45.5 + (2.3 * over5Ft);

      const maxAsianHealthy = 22.9 * (hM * hM);

      const conv = (v: number) => system === 'imperial' ? v / 0.453592 : v;
      const unitStr = system === 'imperial' ? 'lbs' : 'kg';

      let statusMsg = 'Optimal Range';
      if (w > 0) {
        if (w < minHealthy) statusMsg = `${conv(minHealthy - w).toFixed(1)} ${unitStr} below min healthy weight`;
        else if (w > maxHealthy) statusMsg = `${conv(w - maxHealthy).toFixed(1)} ${unitStr} above max healthy weight`;
        else statusMsg = `Within healthy weight range (${conv(w).toFixed(1)} ${unitStr})`;
      }

      return {
        primary: { value: `${conv(minHealthy).toFixed(1)} - ${conv(maxHealthy).toFixed(1)}`, label: { en: 'WHO Healthy Weight Range', es: 'Rango de Peso Saludable OMS', fr: 'Plage de Poids Santé OMS', de: 'WHO Gesunder Gewichtsbereich', ko: 'WHO 건강한 체중 범위', hi: 'WHO स्वास्थ्यप्रद वजन सीमा' }, unit: unitStr },
        secondary: [
          { label: { en: 'Devine Ideal Body Weight (IBW)', es: 'Peso Corporal Ideal Devine', fr: 'Poids Idéal Devine', de: 'Devine Idealgewicht (IBW)', ko: 'Devine 이상 체중', hi: 'डिवाइन आदर्श वजन (IBW)' }, value: conv(devineIBW).toFixed(1), unit: unitStr },
          { label: { en: 'Asian/Indian Healthy Cutoff Window', es: 'Rango Saludable Asiático/India', fr: 'Plage Santé Asiatique/Inde', de: 'Asiatischer Gewichtsbereich', ko: '아시아/인도 건강 체중 기준', hi: 'एशियाई/भारतीय स्वस्थ वजन सीमा' }, value: `${conv(minHealthy).toFixed(1)} - ${conv(maxAsianHealthy).toFixed(1)}`, unit: unitStr },
          { label: { en: 'Current Weight Status', es: 'Estado del Peso Actual', fr: 'Statut du Poids Actuel', de: 'Aktueller Gewichtsstatus', ko: '현재 체중 상태 평가', hi: 'वर्तमान वजन स्थिति' }, value: statusMsg }
        ]
      };
    }
  },
  {
    slug: 'diabetes-risk-calculator',
    name: { en: 'Asian BMI Cutoff Calculator', es: 'Calculadora de Umbral IMC Asiático', fr: 'Calculateur d\'IMC Asiatique', de: 'Asian BMI Cutoff Rechner', ko: '아시아인 BMI Cutoff 계산기', hi: 'एशियाई बीएमआई कटऑफ कैलकुलेटर' },
    title: { en: 'Asian BMI Cutoff Calculator – BMI 23 & 27.5 Reference', es: 'Calculadora de Umbral IMC Asiático (23 y 27.5)', fr: 'Calculateur d\'IMC Asiatique – Références 23 & 27.5', de: 'Asian BMI Cutoff Rechner – Referenzen 23 & 27.5', ko: 'Asian BMI Cutoff Calculator – 23 및 27.5 참조', hi: 'एशियाई बीएमआई कटऑफ कैलकुलेटर - 23 एवं 27.5 संदर्भ' },
    description: {
      "en": "Free Type 2 Diabetes Risk Calculator based on BMI, waist circumference, age, and WHO Asian risk thresholds (BMI ≥ 23.0 kg/m²). Assess metabolic risk factors with privacy-focused, browser calculations.",
      "es": "Calculadora gratuita de riesgo de diabetes tipo 2 basada en IMC, circunferencia de cintura, edad y umbrales de riesgo asiático de la OMS (IMC ≥ 23.0 kg/m²). Evalúa los factores de riesgo metabólico con cálculos privados en el navegador.",
      "fr": "Calculateur gratuit de risque de diabète de type 2 basé sur l'IMC, le tour de taille, l'âge et les seuils de risque asiatiques de l'OMS (IMC ≥ 23,0 kg/m²). Évaluez les facteurs de risque métabolique en toute confidentialité.",
      "de": "Kostenloser Typ-2-Diabetes-Risikorechner basierend auf BMI, Taillenumfang, Alter und WHO-Asien-Risikoschwellen (BMI ≥ 23,0 kg/m²). Bewerten Sie metabolische Risikofaktoren privat im Browser.",
      "ko": "BMI, 허리둘레, 나이 및 WHO 아시아인 위험 기준(BMI ≥ 23.0 kg/m²)에 기반한 무료 제2형 당뇨병 위험도 계산기. 개인정보 수집 없이 브라우저 내에서 대사 위험 요인을 평가하세요.",
      "hi": "बीएमआई, कमर की परिधि, उम्र और डब्ल्यूएचओ एशियाई जोखिम सीमाओं (BMI ≥ 23.0 kg/m²) पर आधारित मुफ़्त टाइप 2 मधुमेह जोखिम कैलकुलेटर। गोपनीय, ब्राउज़र-आधारित गणनाओं के साथ चयापचय जोखिम कारकों का आकलन करें।"
    },
    inputs: [
      { id: 'weight', label: L.weight, type: 'number', placeholder: '70' },
      { id: 'height', label: L.height, type: 'number', placeholder: '175' },
      { id: 'waist', label: L.waist, type: 'number', placeholder: '85' },
      { id: 'age', label: L.age, type: 'number', placeholder: '35' },
      { id: 'gender', label: L.gender, type: 'select', options: [{ value: 'male', label: L.male }, { value: 'female', label: L.female }] }
    ],
    calculate: (inputs, system) => {
      let w = parseFloat(inputs.weight) || 0;
      let h = parseFloat(inputs.height) || 0;
      let waist = parseFloat(inputs.waist) || 0;
      if (system === 'imperial') {
        w = w * 0.453592;
        h = h * 2.54;
        waist = waist * 2.54;
      }
      const hM = h / 100;
      const bmi = w / (hM * hM);
      const isM = inputs.gender === 'male';
      const age = parseInt(inputs.age) || 35;
      
      const waistLimit = isM ? 94 : 80;
      const waistHigh = isM ? 102 : 88;
      
      let riskScore = 'Standard Reference';
      if (bmi >= 27.5 || waist >= waistHigh || (bmi >= 23 && waist >= waistLimit && age >= 40)) {
        riskScore = 'Elevated Threshold';
      } else if (bmi >= 23 || waist >= waistLimit || age >= 45) {
        riskScore = 'Moderate Threshold';
      }

      return {
        primary: { value: riskScore, label: { en: 'Asian Reference Status', es: 'Estado de Referencia Asiático', fr: 'Statut de Référence Asiatique', de: 'Asiatischer Referenzstatus', ko: '아시아인 참조 상태', hi: 'एशियाई संदर्भ स्थिति' } },
        secondary: [
          { label: { en: 'BMI Score', es: 'Puntaje IMC', fr: 'Score IMC', de: 'BMI-Wert', ko: 'BMI 점수', hi: 'बीएमआई स्कोर' }, value: bmi.toFixed(1) },
          { label: { en: 'Asian Cutoff', es: 'Umbral Asiático', fr: 'Seuil Asiatique', de: 'Asien-Schwellenwert', ko: '아시아인 기준', hi: 'एशियाई कटऑफ' }, value: '23.0 kg/m²' },
          { label: { en: 'Waist Reference', es: 'Referencia Cintura', fr: 'Référence Tour Taille', de: 'Taillenreferenz', ko: '허리둘레 참조', hi: 'कमर संदर्भ' }, value: waist >= waistLimit ? 'Elevated' : 'Standard' }
        ]
      };
    }
  },
  {
    slug: 'asian-bmi-calculator',
    name: { en: 'Asian BMI Calculator', es: 'Calculadora de IMC Asiático', fr: 'Calculateur d\'IMC Asiatique', de: 'Asiatischer BMI Rechner', ko: '아시아인 BMI 계산기', hi: 'एशियाई बीएमआई कैलकुलेटर' },
    title: { en: 'Asian BMI Calculator – WHO Asian Cutoff Standards (23 & 27.5)', es: 'Calculadora de IMC Asiático – Estándares de la OMS (23 y 27.5)', fr: 'Calculateur d\'IMC Asiatique – Normes OMS (23 & 27.5)', de: 'Asiatischer BMI Rechner – WHO Richtlinien (23 & 27.5)', ko: '아시아인 BMI 계산기 – WHO 아시아인 기준 (23 & 27.5)', hi: 'एशियाई बीएमआई कैलकुलेटर - WHO एशियाई कटऑफ (23 & 27.5)' },
    description: {
      "en": "Free Asian BMI Calculator based on revised WHO Asian cut-offs (Healthy: 18.5-22.9, Overweight: 23.0-27.4, Obese: ≥ 27.5 kg/m²). Calculate your ethnic BMI score and healthy weight range with browser-based calculations.",
      "es": "Calculadora de IMC asiático gratuita basada en los cortes asiáticos revisados de la OMS (Saludable: 18.5-22.9, Sobrepeso: 23.0-27.4, Obesidad: ≥ 27.5 kg/m²). Calcula tu IMC étnico y rango de peso saludable con cálculos en el navegador.",
      "fr": "Calculateur d'IMC asiatique gratuit basé sur les seuils asiatiques révisés de l'OMS (Normal : 18,5-22,9, Surpoids : 23,0-27,4, Obésité : ≥ 27,5 kg/m²). Calculez votre score d'IMC éthnique et poids idéal avec calculs sur navigateur.",
      "de": "Kostenloser asiatischer BMI-Rechner basierend auf den überarbeiteten WHO-Asien-Schwellenwerten (Normal: 18,5-22,9, Übergewicht: 23,0-27,4, Adipositas: ≥ 27,5 kg/m²). Berechnen Sie Ihren asiatischen BMI-Wert datenschutzorientiert im Browser.",
      "ko": "개정된 WHO 아시아인 판정 기준(정상: 18.5-22.9, 과체중: 23.0-27.4, 비만: ≥ 27.5 kg/m²)에 따른 무료 아시아인 BMI 계산기. 아시아인 전용 BMI 점수와 건강 체중 범위를 산출하세요. 가입 없는 100% 무료 도구.",
      "hi": "संशोधित डब्ल्यूएचओ एशियाई कटऑफ (स्वस्थ: 18.5-22.9, अधिक वजन: 23.0-27.4, मोटापा: ≥ 27.5 kg/m²) पर आधारित मुफ़्त एशियाई बीएमआई कैलकुलेटर। अपने बीएमआई स्कोर और स्वस्थ वजन सीमा की गणना करें। मुफ़्त और गोपनीयता-केंद्रित।"
    },
    inputs: [
      { id: 'weight', label: L.weight, type: 'number', placeholder: '65' },
      { id: 'height', label: L.height, type: 'number', placeholder: '168' },
      { id: 'waist', label: L.waist, type: 'number', placeholder: '80' },
      { id: 'age', label: L.age, type: 'number', placeholder: '30' },
      { id: 'gender', label: L.gender, type: 'select', options: [{ value: 'male', label: L.male }, { value: 'female', label: L.female }] }
    ],
    calculate: (inputs, system) => {
      let w = parseFloat(inputs.weight) || 0;
      let h = parseFloat(inputs.height) || 0;
      let waist = parseFloat(inputs.waist) || 0;
      if (system === 'imperial') {
        w = w * 0.453592;
        h = h * 2.54;
        waist = waist * 2.54;
      }
      const hM = h / 100;
      const bmi = hM > 0 ? w / (hM * hM) : 0;
      const isM = inputs.gender === 'male';

      let cat = 'Healthy Weight (18.5 - 22.9)';
      if (bmi < 18.5) cat = 'Underweight (< 18.5)';
      else if (bmi >= 23.0 && bmi < 27.5) cat = 'Overweight / At Risk (23.0 - 27.4)';
      else if (bmi >= 27.5) cat = 'Obese (≥ 27.5)';

      const minHealthy = 18.5 * (hM * hM);
      const maxHealthy = 22.9 * (hM * hM);

      const conv = (v: number) => system === 'imperial' ? v / 0.453592 : v;
      const unitStr = system === 'imperial' ? 'lbs' : 'kg';

      return {
        primary: { value: bmi.toFixed(1), label: { en: 'Asian Adjusted BMI', es: 'IMC Ajustado Asiático', fr: 'IMC Ajusté Asiatique', de: 'Asiatischer BMI-Wert', ko: '아시아인 보정 BMI', hi: 'एशियाई समायोजित बीएमआई' } },
        secondary: [
          { label: { en: 'WHO Asian Category', es: 'Categoría OMS Asiática', fr: 'Catégorie OMS Asiatique', de: 'WHO Asiatische Kategorie', ko: 'WHO 아시아인 범주', hi: 'WHO एशियाई श्रेणी' }, value: cat },
          { label: { en: 'Asian Healthy Weight Window', es: 'Rango de Peso Saludable Asiático', fr: 'Plage de Poids Santé Asiatique', de: 'Asiatisches Gesundes Gewicht', ko: '아시아인 권장 건강 체중 범위', hi: 'एशियाई स्वस्थ वजन सीमा' }, value: `${conv(minHealthy).toFixed(1)} - ${conv(maxHealthy).toFixed(1)}`, unit: unitStr },
          { label: { en: 'Asian Action Cutoff', es: 'Corte de Acción Asiático', fr: 'Seuil d\'Action Asiatique', de: 'Asien Aktionsschwelle', ko: '아시아인 주의 개시 기준점', hi: 'एशियाई एक्शन कटऑफ' }, value: '23.0 kg/m²' }
        ]
      };
    }
  },
  {
    slug: 'bmr-calculator',
    name: { en: 'BMR Calculator', es: 'Calculadora BMR (Tasa Metabólica Basal)', fr: 'Calculateur BMR (Taux Métabolique de Base)', de: 'BMR Rechner (Grundumsatz)', ko: 'BMR 계산기 (기초대사량)', hi: 'BMR कैलकुलेटर' },
    title: { en: 'BMR Calculator Online – Basal Metabolic Rate (Mifflin-St Jeor) for Men & Women', es: 'Calculadora BMR Gratis – Tasa Metabólica Basal', fr: 'Calculateur BMR Gratuit – Taux Métabolique de Base', de: 'BMR Rechner – Grundumsatz Berechnen Kostenlos', ko: '무료 BMR 계산기 – 기초대사량 계산기', hi: 'मुफ़्त BMR कैलकुलेटर – बेसल मेटाबॉलिक रेट' },
    description: {
      "en": "Free BMR Calculator Online. Calculate your Basal Metabolic Rate (BMR) using Mifflin-St Jeor and Harris-Benedict equations. Determine resting calorie expenditure by age, height (cm), weight (kg), and gender with privacy-focused, browser calculations.",
      "es": "Calculadora de BMR gratuita en línea. Calcula tu Tasa Metabólica Basal (BMR) utilizando las ecuaciones de Mifflin-St Jeor y Harris-Benedict. Determina el gasto calórico en reposo según edad, altura (cm), peso (kg) y género con cálculos privados en el navegador.",
      "fr": "Calculateur de BMR gratuit en ligne. Calculez votre Taux Métabolique de Base (BMR) à l'aide des équations de Mifflin-St Jeor et Harris-Benedict. Déterminez votre dépense calorique au repos selon l'âge, la taille (cm), le poids (kg) et le genre avec calculs sur navigateur.",
      "de": "Kostenloser BMR-Rechner online. Berechnen Sie Ihren Grundumsatz (BMR) mit den Formeln nach Mifflin-St Jeor und Harris-Benedict. Ermitteln Sie Ihren Ruhekalorienverbrauch nach Alter, Größe (cm), Gewicht (kg) und Geschlecht datenschutzorientiert im Browser.",
      "ko": "무료 온라인 BMR 계산기. Mifflin-St Jeor 및 Harris-Benedict 공식을 사용하여 기초대사량(BMR)을 산출하세요. 나이, 신장(cm), 체중(kg) 및 성별에 따른 휴식기 일일 칼로리 소모량을 확인하세요. 개인정보 수집 없는 100% 무료 도구.",
      "hi": "मुफ़्त ऑनलाइन बीएमआर कैलकुलेटर। मिफ्लिन-सेंट जॉर और हैरिस-बेनेडिक्ट समीकरणों का उपयोग करके अपने बेसल मेटाबॉलिक रेट (BMR) की गणना करें। उम्र, ऊंचाई (सेमी), वजन (किग्रा) और लिंग के आधार पर विश्राम कैलोरी व्यय निर्धारित करें। मुफ़्त और गोपनीयता-केंद्रित।"
    },
    inputs: [
      { id: 'weight', label: L.weight, type: 'number', placeholder: '70' },
      { id: 'height', label: L.height, type: 'number', placeholder: '175' },
      { id: 'age', label: L.age, type: 'number', placeholder: '25' },
      { id: 'gender', label: L.gender, type: 'select', options: [{ value: 'male', label: L.male }, { value: 'female', label: L.female }] }
    ],
    calculate: (inputs, system) => {
      let w = parseFloat(inputs.weight) || 0;
      let h = parseFloat(inputs.height) || 0;
      if (system === 'imperial') {
        w = w * 0.453592;
        h = h * 2.54;
      }
      const age = parseInt(inputs.age) || 25;
      const bmr = inputs.gender === 'male'
        ? (10 * w) + (6.25 * h) - (5 * age) + 5
        : (10 * w) + (6.25 * h) - (5 * age) - 161;

      return {
        primary: { value: Math.round(bmr), label: { en: 'Basal Metabolic Rate (BMR)', es: 'Tasa Metabólica Basal (BMR)', fr: 'Taux Métabolique de Base (BMR)', de: 'Grundumsatz (BMR)', ko: '기초대사량 (BMR)', hi: 'बेसल मेटाबॉलिक रेट' }, unit: 'kcal/day' },
        secondary: [
          { label: { en: 'Sedentary Burn (PAL 1.2)', es: 'Gasto Sedentario', fr: 'Combustion Sédentaire', de: 'Ruhebedarf (PAL 1.2)', ko: '비활동 총 소모량', hi: 'गतिहीन कैलोरी बर्न' }, value: Math.round(bmr * 1.2), unit: 'kcal' },
          { label: { en: 'Moderate Active Burn (PAL 1.55)', es: 'Gasto Moderado', fr: 'Combustion Modérée', de: 'Mäßiger Bedarf (PAL 1.55)', ko: '보통 활동 총 소모량', hi: 'मध्यम एक्टिव कैलोरी' }, value: Math.round(bmr * 1.55), unit: 'kcal' }
        ]
      };
    }
  },
  {
    slug: 'tdee-calculator',
    name: { en: 'TDEE Calculator', es: 'Calculadora de TDEE', fr: 'Calculateur de TDEE', de: 'TDEE-Rechner', ko: 'TDEE 계산기', hi: 'टीडीईई कैलकुलेटर' },
    title: { en: 'TDEE Calculator Online – Maintenance Calorie & Total Daily Energy Expenditure Calculator', es: 'Calculadora de TDEE – Gasto Energético Total Diario', fr: 'Calculateur de TDEE – Dépense Énergétique Totale', de: 'TDEE Rechner – Gesamtenergiebedarf (Total Daily Energy Expenditure)', ko: '무료 TDEE 계산기 (TDEE Calculator)', hi: 'मुफ़्त टीडीईई कैलकुलेटर - Total Daily Energy Expenditure' },
    description: {
      "en": "Free TDEE Calculator Online. Calculate Total Daily Energy Expenditure (TDEE), maintenance calories, cutting deficit, and bulking targets based on activity level and BMR formulas with privacy-focused, browser calculations.",
      "es": "Calculadora de TDEE gratuita en línea. Calcula tu Gasto Energético Total Diario (TDEE), calorías de mantenimiento, déficit para perder peso y objetivos de volumen basados en tu nivel de actividad y fórmulas de BMR con cálculos privados en el navegador.",
      "fr": "Calculateur de TDEE gratuit en ligne. Calculez votre Dépense Énergétique Totale Quotidienne (TDEE), vos calories de maintien, votre déficit pour mincir et vos objectifs de prise de masse selon l'activité et le BMR avec calculs sur navigateur.",
      "de": "Kostenloser TDEE-Rechner online. Berechnen Sie Ihren Gesamtenergiebedarf (TDEE), Erhaltungskalorien, Kaloriendefizit zum Abnehmen und Überschuss zum Muskelaufbau basierend auf Aktivitätslevel und BMR-Formeln datenschutzorientiert im Browser.",
      "ko": "무료 온라인 TDEE 계산기. 활동량 및 BMR 공식을 바탕으로 일일 총 에너지 소모량(TDEE), 유지 칼로리, 체중 감량 칼로리 및 근육 증가 목표 칼로리를 계산하세요. 가입 없이 브라우저 내 100% 무료 구동.",
      "hi": "मुफ़्त ऑनलाइन टीडीईई कैलकुलेटर। गतिविधि स्तर और बीएमआर सूत्रों के आधार पर अपने कुल दैनिक ऊर्जा व्यय (TDEE), रखरखाव कैलोरी, वजन घटाने के घाटे और वजन बढ़ाने के लक्ष्यों की गणना करें। मुफ़्त और गोपनीयता-केंद्रित।"
    },
    inputs: [
      { id: 'weight', label: L.weight, type: 'number', placeholder: '70' },
      { id: 'height', label: L.height, type: 'number', placeholder: '175' },
      { id: 'age', label: L.age, type: 'number', placeholder: '25' },
      { id: 'gender', label: L.gender, type: 'select', options: [{ value: 'male', label: L.male }, { value: 'female', label: L.female }] },
      { id: 'activity', label: L.activity, type: 'select', options: [
        { value: '1.2', label: L.sedentary },
        { value: '1.375', label: L.light },
        { value: '1.55', label: L.moderate },
        { value: '1.725', label: L.active }
      ]}
    ],
    calculate: (inputs, system) => {
      let w = parseFloat(inputs.weight) || 0;
      let h = parseFloat(inputs.height) || 0;
      if (system === 'imperial') {
        w = w * 0.453592;
        h = h * 2.54;
      }
      const age = parseInt(inputs.age) || 25;
      const act = parseFloat(inputs.activity) || 1.2;
      const bmr = inputs.gender === 'male'
        ? (10 * w) + (6.25 * h) - (5 * age) + 5
        : (10 * w) + (6.25 * h) - (5 * age) - 161;
      const tdee = bmr * act;

      return {
        primary: { value: Math.round(tdee), label: { en: 'Total Daily Energy Expenditure', es: 'Gasto Energético Total Diario', fr: 'Dépense Énergétique Totale', de: 'Gesamtenergiebedarf (TDEE)', ko: '총 일일 에너지 소비량', hi: 'कुल दैनिक ऊर्जा व्यय' }, unit: 'kcal/day' },
        secondary: [
          { label: { en: 'Basal Metabolic Rate (BMR)', es: 'Metabolismo Basal (BMR)', fr: 'Métabolisme de Base (BMR)', de: 'Grundumsatz (BMR)', ko: '기초대사량 (BMR)', hi: 'बेसल मेटाबॉलिक रेट' }, value: Math.round(bmr), unit: 'kcal' },
          { label: { en: 'Example Deficit (-500 kcal)', es: 'Ejemplo de Déficit (-500 kcal)', fr: 'Exemple de Déficit (-500 kcal)', de: 'Beispiel-Defizit (-500 kcal)', ko: '예시 칼로리 적자 (-500 kcal)', hi: 'उदाहरण कैलोरी घाटा (-500 kcal)' }, value: Math.round(tdee - 500), unit: 'kcal' },
          { label: { en: 'Example Surplus (+300 kcal)', es: 'Ejemplo de Superávit (+300 kcal)', fr: 'Exemple de Surplus (+300 kcal)', de: 'Beispiel-Überschuss (+300 kcal)', ko: '예시 칼로리 잉여 (+300 kcal)', hi: 'उदाहरण कैलोरी वृद्धि (+300 kcal)' }, value: Math.round(tdee + 300), unit: 'kcal' }
        ]
      };
    }
  },
  {
    slug: 'maintenance-calorie-calculator',
    name: {
      en: 'Maintenance Calorie Calculator',
      es: 'Calculadora de Calorías de Mantenimiento',
      fr: 'Calculateur de Calories de Maintien',
      de: 'Erhaltungskalorien Rechner',
      ko: '유지 칼로리 계산기',
      hi: 'रखरखाव कैलोरी कैलकुलेटर'
    },
    title: {
      en: 'Maintenance Calorie Calculator Online – TDEE & Energy Expenditure Tool',
      es: 'Calculadora de Calorías de Mantenimiento en Línea',
      fr: 'Calculateur de Calories de Maintien en Ligne',
      de: 'Erhaltungskalorien Rechner Online – TDEE Kalorienbedarf',
      ko: '온라인 유지 칼로리 계산기 – TDEE 일일 칼로리 도구',
      hi: 'ऑनलाइन रखरखाव कैलोरी कैलकुलेटर - TDEE दैनिक कैलोरी आवश्यकता'
    },
    description: {
      "en": "Free Maintenance Calorie Calculator online. Calculate your daily maintenance calories, total daily energy expenditure (TDEE), and weight loss deficit target calories by age, height (cm) and weight (kg) with privacy-focused, browser calculations.",
      "es": "Calculadora de calorías de mantenimiento gratuita en línea. Calcula tus calorías diarias de mantenimiento, gasto energético total diario (TDEE) y calorías objetivo para pérdida de peso por edad, altura (cm) y peso (kg) con cálculos privados en el navegador.",
      "fr": "Calculateur gratuit de calories de maintien en ligne. Calculez vos calories quotidiennes de maintien, votre dépense énergétique totale (TDEE) et vos objectifs de déficit calorigène selon l'âge, la taille (cm) et le poids (kg) avec calculs sur navigateur.",
      "de": "Kostenloser Erhaltungskalorien-Rechner online. Berechnen Sie Ihre täglichen Erhaltungskalorien, Ihren Gesamtenergiebedarf (TDEE) und Zielkalorien zum Abnehmen nach Alter, Größe (cm) und Gewicht (kg) datenschutzorientiert im Browser.",
      "ko": "무료 온라인 유지 칼로리 계산기. 나이, 신장(cm) 및 체중(kg)에 따라 일일 유지 칼로리, 총 에너지 소모량(TDEE) 및 체중 감량 목표 칼로리를 산출하세요. 가입 없이 브라우저 내 100% 무료 구동.",
      "hi": "मुफ़्त ऑनलाइन रखरखाव कैलोरी कैलकुलेटर। उम्र, ऊंचाई (सेमी) और वजन (किग्रा) के अनुसार अपनी दैनिक रखरखाव कैलोरी, कुल दैनिक ऊर्जा व्यय (TDEE) और वजन घटाने की लक्षित कैलोरी की गणना करें। मुफ़्त और गोपनीयता-केंद्रित।"
    },
    inputs: [
      { id: 'weight', label: L.weight, type: 'number', placeholder: '70' },
      { id: 'height', label: L.height, type: 'number', placeholder: '175' },
      { id: 'age', label: L.age, type: 'number', placeholder: '25' },
      { id: 'gender', label: L.gender, type: 'select', options: [{ value: 'male', label: L.male }, { value: 'female', label: L.female }] },
      { id: 'activity', label: L.activity, type: 'select', options: [
        { value: '1.2', label: L.sedentary },
        { value: '1.375', label: L.light },
        { value: '1.55', label: L.moderate },
        { value: '1.725', label: L.active }
      ]}
    ],
    calculate: (inputs, system) => {
      let w = parseFloat(inputs.weight) || 0;
      let h = parseFloat(inputs.height) || 0;
      if (system === 'imperial') {
        w = w * 0.453592;
        h = h * 2.54;
      }
      const age = parseInt(inputs.age) || 25;
      const act = parseFloat(inputs.activity) || 1.2;
      const bmr = inputs.gender === 'male'
        ? (10 * w) + (6.25 * h) - (5 * age) + 5
        : (10 * w) + (6.25 * h) - (5 * age) - 161;
      const tdee = bmr * act;

      return {
        primary: { value: Math.round(tdee), label: { en: 'Daily Maintenance Calories', es: 'Calorías de Mantenimiento', fr: 'Calories de Maintien Quotidiennes', de: 'Tägliche Erhaltungskalorien', ko: '일일 유지 칼로리', hi: 'दैनिक रखरखाव कैलोरी' }, unit: 'kcal/day' },
        secondary: [
          { label: { en: 'Basal Metabolic Rate (BMR)', es: 'Metabolismo Basal (BMR)', fr: 'Métabolisme de Base (BMR)', de: 'Grundumsatz (BMR)', ko: '기초대사량 (BMR)', hi: 'बेसल मेटाबॉलिक रेट' }, value: Math.round(bmr), unit: 'kcal' },
          { label: { en: 'Example Mild Deficit (-250 kcal)', es: 'Ejemplo Déficit Leve (-250 kcal)', fr: 'Exemple Déficit Léger (-250 kcal)', de: 'Beispiel-Defizit (-250 kcal)', ko: '완만한 예시 칼로리 (-250 kcal)', hi: 'हल्का उदाहरण घाटा (-250 kcal)' }, value: Math.round(tdee - 250), unit: 'kcal' },
          { label: { en: 'Example Standard Deficit (-500 kcal)', es: 'Ejemplo Déficit Estándar (-500 kcal)', fr: 'Exemple Déficit Standard (-500 kcal)', de: 'Beispiel-Defizit (-500 kcal)', ko: '표준 예시 칼로리 (-500 kcal)', hi: 'मानक उदाहरण घाटा (-500 kcal)' }, value: Math.round(tdee - 500), unit: 'kcal' }
        ]
      };
    }
  },
  {
    slug: 'body-fat-calculator',
    name: { en: 'Body Fat Calculator', es: 'Calculadora de Grasa Corporal', fr: 'Calculateur de Graisse Corporelle', de: 'Körperfett Rechner', ko: '체지방 계산기', hi: 'बॉडी फैट कैलकुलेटर' },
    title: { en: 'Body Fat Calculator – US Navy Body Fat Percentage Tool', es: 'Calculadora de Grasa Corporal – Porcentaje de Grasa US Navy', fr: 'Calculateur de Graisse Corporelle – Formule US Navy', de: 'Körperfett Rechner – US Navy Körperfettanteil Berechnen', ko: '무료 체지방 계산기 (Body Fat Calculator)', hi: 'मुफ़्त बॉडी फैट कैलकुलेटर - बॉडी फैट प्रतिशत' },
    description: {
      "en": "Free Body Fat Calculator based on the US Navy body fat formula and WHtR metrics. Calculate body fat percentage, fat mass (kg/lbs), lean mass, and fitness classification categories with privacy-focused, browser calculations.",
      "es": "Calculadora de grasa corporal gratuita basada en la fórmula de la Marina de EE. UU. y métricas WHtR. Calcula el porcentaje de grasa corporal, masa grasa (kg/lbs), masa magra y categorías de condición física con cálculos privados en el navegador.",
      "fr": "Calculateur de graisse corporelle gratuit basé sur la formule de la US Navy et les métriques WHtR. Calculez le pourcentage de graisse corporelle, la masse grasse (kg/lbs), la masse maigre et les catégories de forme avec calculs sur navigateur.",
      "de": "Kostenloser Körperfett-Rechner basierend auf der US Navy-Formel und WHtR-Metriken. Berechnen Sie Ihren Körperfettanteil, Ihre Fettmasse (kg/lbs), Ihre Magermasse und Fitness-Kategorien datenschutzorientiert im Browser.",
      "ko": "미 해군(US Navy) 공식 및 허리둘레 비율(WHtR)에 기반한 무료 체지방 계산기. 체지방률(%), 지방량(kg/lbs), 제지방량 및 피트니스 판정 범주를 산출하세요. 가입 없이 브라우저 내 100% 무료 구동.",
      "hi": "यूएस नेवी बॉडी फैट फॉर्मूला और WHtR मेट्रिक्स पर आधारित मुफ़्त बॉडी फैट कैलकुलेटर। शरीर में वसा का प्रतिशत, वसा द्रव्यमान (किग्रा/पाउंड), दुबला द्रव्यमान और फिटनेस वर्गीकरण श्रेणियों की गणना करें। मुफ़्त और गोपनीयता-केंद्रित।"
    },
    inputs: [
      { id: 'gender', label: L.gender, type: 'select', options: [{ value: 'male', label: L.male }, { value: 'female', label: L.female }] },
      { id: 'height', label: L.height, type: 'number', placeholder: '175' },
      { id: 'waist', label: L.waist, type: 'number', placeholder: '80' },
      { id: 'neck', label: L.neck, type: 'number', placeholder: '38' },
      { id: 'hip', label: L.hip, type: 'number', placeholder: '90' }
    ],
    calculate: (inputs, system) => {
      let h = parseFloat(inputs.height) || 170;
      let w = parseFloat(inputs.waist) || 80;
      let n = parseFloat(inputs.neck) || 38;
      let hip = parseFloat(inputs.hip) || 90;

      if (system === 'imperial') {
        h = h * 2.54;
        w = w * 2.54;
        n = n * 2.54;
        hip = hip * 2.54;
      }

      let fat = 0;
      if (inputs.gender === 'male') {
        const diff = w - n;
        if (diff > 0) {
          fat = 495 / (1.0324 - 0.19077 * Math.log10(diff) + 0.15456 * Math.log10(h)) - 450;
        }
      } else {
        const diff = w + hip - n;
        if (diff > 0) {
          fat = 495 / (1.29579 - 0.35004 * Math.log10(diff) + 0.22100 * Math.log10(h)) - 450;
        }
      }
      fat = Math.max(2, Math.min(fat, 60));

      let category = 'Fitness';
      const isMale = inputs.gender === 'male';
      if (isMale) {
        if (fat < 6) category = 'Essential Fat (2-5%)';
        else if (fat < 14) category = 'Athletes (6-13%)';
        else if (fat < 18) category = 'Fitness (14-17%)';
        else if (fat < 25) category = 'Average (18-24%)';
        else category = 'Obese (25%+)';
      } else {
        if (fat < 14) category = 'Essential Fat (10-13%)';
        else if (fat < 21) category = 'Athletes (14-20%)';
        else if (fat < 25) category = 'Fitness (21-24%)';
        else if (fat < 32) category = 'Average (25-31%)';
        else category = 'Obese (32%+)';
      }

      return {
        primary: { value: fat.toFixed(1), label: { en: 'Body Fat Percentage', es: 'Porcentaje de Grasa', fr: 'Taux de Matière Grasse', de: 'Körperfettanteil', ko: '체지방률', hi: 'बॉडी फैट प्रतिशत' }, unit: '%' },
        secondary: [
          { label: { en: 'ACE Category', es: 'Categoría ACE', fr: 'Catégorie ACE', de: 'ACE-Kategorie', ko: 'ACE 분류 등급', hi: 'ACE श्रेणी' }, value: category, unit: '' },
          { label: { en: 'US Navy Formula', es: 'Fórmula US Navy', fr: 'Formule US Navy', de: 'US Navy Formel', ko: '미 해군 공식 적용', hi: 'यूएस नेवी फॉर्मूला' }, value: 'Anthropometric Tape Method', unit: '' }
        ]
      };
    }
  },
  {
    slug: 'lean-body-mass-calculator',
    name: { en: 'Lean Body Mass Calculator', es: 'Calculadora de Masa Magra', fr: 'Calculateur de Masse Lean', de: 'Fettfreie Masse Rechner', ko: '제지방량 계산기', hi: 'लीन बॉडी मास कैलकुलेटर' },
    title: { en: 'Lean Body Mass Calculator - LBM Metric', es: 'Calculadora de Masa Corporal Magra', fr: 'Calculateur de Masse Corporelle Maigre', de: 'Rechner für fettfreie Körpermasse', ko: '제지방체중 계산기', hi: 'लीन बॉडी मास (LBM) कैलकुलेटर' },
    description: {
      "en": "Free Lean Body Mass Calculator (LBM Calculator). Calculate lean body mass, fat-free mass percentage, and body composition using Boer, James, and Hume equations by height and weight with privacy-focused, browser calculations.",
      "es": "Calculadora de masa corporal magra (LBM) gratuita. Calcula la masa corporal magra, el porcentaje de masa libre de grasa y la composición corporal utilizando las ecuaciones de Boer, James y Hume por altura y peso con cálculos privados en el navegador.",
      "fr": "Calculateur de masse corporelle maigre (LBM) gratuit. Calculez la masse corporelle maigre, le pourcentage de masse sans graisse et la composition corporelle à l'aide des équations de Boer, James et Hume selon la taille et le poids avec calculs sur navigateur.",
      "de": "Kostenloser Magermasse-Rechner (LBM-Rechner). Berechnen Sie Ihre magere Körpermasse, den fettfreien Masseprozentsatz und die Körperzusammensetzung mit den Formeln nach Boer, James und Hume datenschutzorientiert im Browser.",
      "ko": "무료 제지방량(LBM) 계산기. Boer, James 및 Hume 공식을 활용하여 신장과 체중별 제지방량, 무지방 비율 및 체성분을 정확하게 산출하세요. 개인정보 수집 없는 100% 브라우저 계산.",
      "hi": "मुफ़्त लीन बॉडी मास कैलकुलेटर (LBM Calculator)। ऊंचाई और वजन के अनुसार बोअर, जेम्स और ह्यूम समीकरणों का उपयोग करके दुबले शरीर के द्रव्यमान, वसा रहित द्रव्यमान प्रतिशत और शरीर की संरचना की गणना करें। मुफ़्त और गोपनीयता-केंद्रित।"
    },
    inputs: [
      { id: 'weight', label: L.weight, type: 'number', placeholder: '70' },
      { id: 'height', label: L.height, type: 'number', placeholder: '175' },
      { id: 'gender', label: L.gender, type: 'select', options: [{ value: 'male', label: L.male }, { value: 'female', label: L.female }] }
    ],
    calculate: (inputs, system) => {
      let w = parseFloat(inputs.weight) || 0;
      let h = parseFloat(inputs.height) || 0;
      if (system === 'imperial') {
        w = w * 0.453592;
        h = h * 2.54;
      }
      // Boer Formula
      let lbm = 0;
      if (inputs.gender === 'male') {
        lbm = 0.407 * w + 0.267 * h - 19.2;
      } else {
        lbm = 0.252 * w + 0.473 * h - 48.3;
      }
      lbm = Math.max(0, lbm);
      const fat = w - lbm;
      const displayLbm = system === 'imperial' ? lbm / 0.453592 : lbm;
      const displayFat = system === 'imperial' ? fat / 0.453592 : fat;

      return {
        primary: { value: displayLbm.toFixed(1), label: { en: 'Lean Body Mass', es: 'Masa Corporal Magra', fr: 'Masse Maigre', de: 'Fettfreie Masse', ko: '제지방 실량', hi: 'लीन बॉडी मास' }, unit: system === 'imperial' ? 'lbs' : 'kg' },
        secondary: [
          { label: { en: 'Fat Mass', es: 'Masa Grasa', fr: 'Masse Grasse', de: 'Fettmasse', ko: '지방 질량', hi: 'वसा द्रव्यमान' }, value: displayFat.toFixed(1), unit: system === 'imperial' ? 'lbs' : 'kg' },
          { label: { en: 'Lean Mass Ratio', es: 'Proporción de Masa Magra', fr: 'Proportion de Masse Maigre', de: 'Prozentualer LBM', ko: '제지방 비율', hi: 'लीन मास अनुपात' }, value: ((lbm / w) * 100).toFixed(1), unit: '%' }
        ]
      };
    }
  },
  {
    slug: 'ideal-weight-calculator',
    name: { en: 'Ideal Weight Calculator', es: 'Calculadora de Peso Ideal', fr: 'Calculateur de Poids Idéal', de: 'Idealgewicht Rechner', ko: '이상 체중 계산기', hi: 'आदर्श वजन कैलकुलेटर' },
    title: {
      en: 'Ideal Weight Calculator – Ideal Body Weight (IBW) by Height (kg/lbs)',
      es: 'Calculadora de Peso Ideal por Altura – Peso Corporal Ideal (IBW)',
      fr: 'Calculateur de Poids Idéal selon la Taille – Poids Idéal (IBW)',
      de: 'Idealgewicht Rechner nach Körpergröße – Ideales Körpergewicht (IBW)',
      ko: '이상 체중 계산기 (Ideal Weight Calculator) – 키별 권장 체중 (IBW)',
      hi: 'आदर्श वजन कैलकुलेटर - ऊंचाई के अनुसार आइडियल बॉडी वेट (IBW Calculator)'
    },
    description: {
      "en": "Free Ideal Weight Calculator. Calculate ideal body weight (IBW) reference ranges using Devine, Robinson, Miller, and Hamwi medical equations based on height and gender with privacy-focused, browser calculations.",
      "es": "Calculadora de peso ideal gratuita. Calcula rangos de referencia de peso corporal ideal (IBW) utilizando las ecuaciones médicas de Devine, Robinson, Miller y Hamwi según altura y género con cálculos privados en el navegador.",
      "fr": "Calculateur de poids idéal gratuit. Calculez les plages de référence du poids idéal (IBW) à l'aide des équations médicales de Devine, Robinson, Miller et Hamwi selon la taille et le genre avec calculs sur navigateur.",
      "de": "Kostenloser Idealgewicht-Rechner. Berechnen Sie den Referenzbereich für das ideale Körpergewicht (IBW) mit den medizinischen Formeln nach Devine, Robinson, Miller und Hamwi nach Körpergröße und Geschlecht datenschutzorientiert im Browser.",
      "ko": "무료 이상 체중 계산기. 신장과 성별에 따라 Devine, Robinson, Miller 및 Hamwi 의학 공식을 적용하여 이상적인 체중(IBW) 권장 범위를 산출하세요. 가입 없는 100% 브라우저 계산.",
      "hi": "मुफ़्त आदर्श वजन कैलकुलेटर। ऊंचाई और लिंग के आधार पर डिवाइन, रॉबिन्सन, मिलर और हमवी चिकित्सा समीकरणों का उपयोग करके आदर्श शरीर वजन (IBW) संदर्भ सीमाओं की गणना करें। मुफ़्त और गोपनीयता-केंद्रित।"
    },
    inputs: [
      { id: 'height', label: L.height, type: 'number', placeholder: '175' },
      { id: 'gender', label: L.gender, type: 'select', options: [{ value: 'male', label: L.male }, { value: 'female', label: L.female }] }
    ],
    calculate: (inputs, system) => {
      let h = parseFloat(inputs.height) || 0;
      if (system === 'imperial') {
        h = h * 2.54;
      }
      const hInches = h / 2.54;
      const over5Ft = Math.max(0, hInches - 60);

      // Devine Formula (1974)
      const devine = inputs.gender === 'male' ? 50.0 + (2.3 * over5Ft) : 45.5 + (2.3 * over5Ft);
      // Robinson Formula (1983)
      const robinson = inputs.gender === 'male' ? 52.0 + (1.9 * over5Ft) : 49.0 + (1.7 * over5Ft);
      // Miller Formula (1983)
      const miller = inputs.gender === 'male' ? 56.2 + (1.41 * over5Ft) : 53.1 + (1.36 * over5Ft);
      // Hamwi Formula (1964)
      const hamwi = inputs.gender === 'male' ? 48.0 + (2.7 * over5Ft) : 45.5 + (2.2 * over5Ft);

      // WHO Healthy Weight Range (BMI 18.5 - 24.9)
      const hM = h / 100;
      const minBmiWeight = 18.5 * (hM * hM);
      const maxBmiWeight = 24.9 * (hM * hM);

      const conv = (kgVal: number) => system === 'imperial' ? kgVal / 0.453592 : kgVal;
      const unitStr = system === 'imperial' ? 'lbs' : 'kg';

      return {
        primary: { value: conv(devine).toFixed(1), label: { en: 'Ideal Body Weight (Devine)', es: 'Peso Ideal (Devine)', fr: 'Poids Idéal (Devine)', de: 'Idealgewicht (Devine)', ko: '권장 이상 체중 (Devine)', hi: 'आदर्श वजन (Devine)' }, unit: unitStr },
        secondary: [
          { label: { en: 'Robinson Formula', es: 'Fórmula Robinson', fr: 'Formule Robinson', de: 'Robinson-Formel', ko: '로빈슨 공식 결과', hi: 'रॉबिन्सन फॉर्मूला' }, value: conv(robinson).toFixed(1), unit: unitStr },
          { label: { en: 'Miller Formula', es: 'Fórmula Miller', fr: 'Formule Miller', de: 'Miller-Formel', ko: '밀러 공식 결과', hi: 'मिलर फॉर्मूला' }, value: conv(miller).toFixed(1), unit: unitStr },
          { label: { en: 'Hamwi Formula', es: 'Fórmula Hamwi', fr: 'Formule Hamwi', de: 'Hamwi-Formel', ko: '함위 공식 결과', hi: 'हमवी फॉर्मूला' }, value: conv(hamwi).toFixed(1), unit: unitStr },
          { label: { en: 'Healthy BMI Weight Range', es: 'Rango de Peso Saludable', fr: 'Plage de Poids Santé', de: 'Gesunder Gewichtsbereich', ko: '건강한 체중 범위', hi: 'स्वास्थ्यप्रद वजन सीमा' }, value: `${conv(minBmiWeight).toFixed(1)} - ${conv(maxBmiWeight).toFixed(1)}`, unit: unitStr }
        ]
      };
    }
  },
  {
    slug: 'calorie-calculator',
    name: { en: 'Calorie Deficit Calculator', es: 'Calculadora de Déficit Calórico', fr: 'Calculateur de Déficit Calorique', de: 'Kaloriendefizit Rechner', ko: '칼로리 적자 계산기', hi: 'कैलोरी घाटा कैलकुलेटर' },
    title: { en: 'Calorie Deficit Calculator – Estimated Daily Calorie Planning', es: 'Calculadora de Déficit Calórico – Planificación Calórica Diaria', fr: 'Calculateur de Déficit Calorique – Planification Calorique', de: 'Kaloriendefizit Rechner – Täglicher Kalorienbedarf', ko: '무료 칼로리 적자 계산기 (Calorie Deficit Calculator)', hi: 'मुफ़्त कैलोरी घाटा कैलकुलेटर - अनुमानित दैनिक कैलोरी योजना' },
    description: {
      "en": "Free Calorie Calculator for weight loss, maintenance, and weight gain. Calculate daily calorie needs, macro breakdown, and calorie deficit target based on age, height, weight, and activity level with privacy-focused, browser calculations.",
      "es": "Calculadora de calorías gratuita para pérdida de peso, mantenimiento y ganancia de peso. Calcula necesidades calóricas diarias, desglose de macronutrientes y déficit calórico objetivo por edad, altura, peso y nivel de actividad con cálculos privados en el navegador.",
      "fr": "Calculateur de calories gratuit pour la perte de poids, le maintien et la prise de masse. Calculez vos besoins caloriques quotidiens, la répartition des macronutriments et votre objectif de déficit calorigène selon l'âge, la taille, le poids et l'activité avec calculs sur navigateur.",
      "de": "Kostenloser Kalorienrechner zum Abnehmen, Gewicht halten und Zunehmen. Berechnen Sie Ihren täglichen Kalorienbedarf, die Makronährstoffverteilung und das Ziel-Kaloriendefizit nach Alter, Größe, Gewicht und Aktivitätslevel datenschutzorientiert im Browser.",
      "ko": "체중 감량, 현재 체중 유지 및 체중 증가를 위한 무료 칼로리 계산기. 나이, 신장, 체중 및 활동량에 따른 일일 필요 칼로리, 영양소 비율 및 칼로리 소모 목표를 산출하세요. 가입 없는 100% 무료 도구.",
      "hi": "वजन घटाने, वजन बनाए रखने और वजन बढ़ाने के लिए मुफ़्त कैलोरी कैलकुलेटर। उम्र, ऊंचाई, वजन और गतिविधि स्तर के आधार पर दैनिक कैलोरी आवश्यकताओं, मैक्रो ब्रेकडाउन और कैलोरी घाटे के लक्ष्य की गणना करें। मुफ़्त और गोपनीयता-केंद्रित।"
    },
    inputs: [
      { id: 'weight', label: L.weight, type: 'number', placeholder: '70' },
      { id: 'height', label: L.height, type: 'number', placeholder: '175' },
      { id: 'age', label: L.age, type: 'number', placeholder: '25' },
      { id: 'gender', label: L.gender, type: 'select', options: [{ value: 'male', label: L.male }, { value: 'female', label: L.female }] },
      { id: 'activity', label: L.activity, type: 'select', options: [
        { value: '1.2', label: L.sedentary },
        { value: '1.375', label: L.light },
        { value: '1.55', label: L.moderate },
        { value: '1.725', label: L.active }
      ]},
      { id: 'goal', label: L.goal, type: 'select', options: [
        { value: 'lose', label: L.loseWeight },
        { value: 'maintain', label: L.maintainWeight },
        { value: 'gain', label: L.gainWeight }
      ]}
    ],
    calculate: (inputs, system) => {
      let w = parseFloat(inputs.weight) || 0;
      let h = parseFloat(inputs.height) || 0;
      if (system === 'imperial') {
        w = w * 0.453592;
        h = h * 2.54;
      }
      const age = parseInt(inputs.age) || 25;
      const act = parseFloat(inputs.activity) || 1.2;
      const bmr = inputs.gender === 'male'
        ? (10 * w) + (6.25 * h) - (5 * age) + 5
        : (10 * w) + (6.25 * h) - (5 * age) - 161;
      const tdee = bmr * act;

      let targetCal = tdee;
      let deficitVal = 0;
      if (inputs.goal === 'lose') {
        deficitVal = 500;
        targetCal = tdee - deficitVal;
      } else if (inputs.goal === 'gain') {
        targetCal = tdee + 500;
      }

      const weeklyFatLoss = ((tdee - targetCal) * 7 / 7700);
      const displayLoss = system === 'imperial' ? (weeklyFatLoss * 2.20462).toFixed(1) : weeklyFatLoss.toFixed(2);
      const lossUnit = system === 'imperial' ? 'lbs/week' : 'kg/week';
      const proteinGuard = Math.round(w * 2.0);

      return {
        primary: { value: Math.round(targetCal), label: { en: 'Target Daily Calories', es: 'Objetivo Diario Calorías', fr: 'Objectif Calorique Journalier', de: 'Tägliche Zielkalorien', ko: '목표 일일 칼로리 수치', hi: 'लक्षित दैनिक कैलोरी' }, unit: 'kcal/day' },
        secondary: [
          { label: { en: 'Daily Calorie Deficit', es: 'Déficit Calórico Diario', fr: 'Déficit Calorique Journalier', de: 'Tägliches Kaloriendefizit', ko: '일일 칼로리 적자', hi: 'दैनिक कैलोरी घाटा' }, value: Math.round(tdee - targetCal), unit: 'kcal/day' },
          { label: { en: 'Est. Weight-Change Rate', es: 'Tasa Est. Cambio de Peso', fr: 'Taux Est. Variation de Poids', de: 'Geschätzter Gewichtsveränderungssatz', ko: '예상 체중 변화율', hi: 'अनुमानित वजन परिवर्तन दर' }, value: displayLoss, unit: lossUnit },
          { label: { en: 'Maintenance (TDEE)', es: 'Mantenimiento (TDEE)', fr: 'Maintenance (TDEE)', de: 'Erhaltungskalorien (TDEE)', ko: '유지 에너지 (TDEE)', hi: 'रखरखाव (TDEE)' }, value: Math.round(tdee), unit: 'kcal' },
          { label: { en: 'Deficit Protein Target', es: 'Objetivo de Proteína', fr: 'Objectif Protéines Déficit', de: 'Protein-Ziel im Defizit', ko: '적자 시 단백질 목표', hi: 'घाटे में प्रोटीन लक्ष्य' }, value: proteinGuard, unit: 'g/day' }
        ]
      };
    }
  },
  {
    slug: 'protein-intake-calculator',
    name: { en: 'Protein Intake Calculator', es: 'Calculadora de Consumo de Proteínas', fr: 'Calculateur d\'Apport en Protéines', de: 'Täglicher Proteinbedarf Rechner', ko: '단백질 섭취량 계산기', hi: 'प्रोटीन सेवन कैलकुलेटर' },
    title: { en: 'Protein Intake Calculator – Free Daily Protein Target Tool', es: 'Calculadora de Consumo de Proteínas Diario por Peso', fr: 'Calculateur d\'Apport en Protéines Gratuit', de: 'Protein Intake Rechner – Täglicher Eiweißbedarf', ko: '무료 단백질 섭취량 계산기 (Protein Intake Calculator)', hi: 'मुफ़्त प्रोटीन सेवन कैलकुलेटर - दैनिक प्रोटीन लक्ष्य' },
    description: {
      "en": "Free Daily Protein Intake Calculator. Calculate optimal daily protein intake in grams for muscle growth, fat loss, and athletic performance based on weight, fitness goals, and activity with privacy-focused, browser calculations.",
      "es": "Calculadora de ingesta diaria de proteínas gratuita. Calcula la ingesta óptima diaria de proteínas en gramos para crecimiento muscular, pérdida de grasa y rendimiento deportivo según peso, objetivos y actividad con cálculos privados en el navegador.",
      "fr": "Calculateur de besoin quotidien en protéines gratuit. Calculez l'apport quotidien optimal en protéines (g) pour la prise de muscle, la perte de graisse et la performance selon le poids, les objectifs et l'activité avec calculs sur navigateur.",
      "de": "Kostenloser Proteinbedarf-Rechner. Berechnen Sie Ihre optimale tägliche Proteinaufnahme in Gramm für Muskelaufbau, Fettabbau und sportliche Leistung basierend auf Gewicht, Zielen und Aktivität datenschutzorientiert im Browser.",
      "ko": "일일 단백질 섭취량 무료 계산기. 체중, 피트니스 목표 및 활동량에 따라 근육 성장, 지방 감량 및 운동 수행 능력을 위한 최적의 단백질 섭취량(g)을 산출하세요. 개인정보 수집 없는 100% 브라우저 계산.",
      "hi": "मुफ़्त दैनिक प्रोटीन सेवन कैलकुलेटर। वजन, फिटनेस लक्ष्यों और गतिविधि के आधार पर मांसपेशियों की वृद्धि, वसा हानि और एथलेटिक प्रदर्शन के लिए ग्राम में इष्टतम दैनिक प्रोटीन सेवन की गणना करें। मुफ़्त और गोपनीयता-केंद्रित।"
    },
    inputs: [
      { id: 'weight', label: L.weight, type: 'number', placeholder: '70' },
      { id: 'goal', label: L.goal, type: 'select', options: [
        { value: 'lose', label: L.loseWeight },
        { value: 'maintain', label: L.maintainWeight },
        { value: 'gain', label: L.gainWeight }
      ]}
    ],
    calculate: (inputs, system) => {
      let w = parseFloat(inputs.weight) || 0;
      if (system === 'imperial') {
        w = w * 0.453592;
      }
      let factor = 1.6; // maintenance
      if (inputs.goal === 'lose') factor = 2.0;
      else if (inputs.goal === 'gain') factor = 2.2;

      const protein = w * factor;

      return {
        primary: { value: Math.round(protein), label: { en: 'Protein Target', es: 'Objetivo de Proteína', fr: 'Objectif Protéines', de: 'Zielzufuhr Eiweiß', ko: '목표 단백질 중량', hi: 'प्रोटीन लक्ष्य' }, unit: 'g/day' },
        secondary: [
          { label: { en: 'Minimum Threshold', es: 'Consumo Mínimo', fr: 'Seuil Minimum', de: 'Mindestbedarf (DGE)', ko: '최소 단백질 권장량', hi: 'न्यूनतम सीमा' }, value: Math.round(w * 0.8), unit: 'g' },
          { label: { en: 'Athletic Intake', es: 'Consumo Atlético', fr: 'Athlètes Actifs', de: 'Leistungssportler', ko: '활동성 집중 섭취량', hi: 'एथलेटिक सेवन' }, value: Math.round(w * 2.4), unit: 'g' }
        ]
      };
    }
  },
  {
    slug: 'water-intake-calculator',
    name: { en: 'Daily Water Intake Calculator', es: 'Calculadora de Consumo de Agua Diario', fr: 'Calculateur d\'Hydratation Journalier', de: 'Täglicher Wasserbedarf Rechner', ko: '하루 물 섭취량 계산기', hi: 'दैनिक पानी का सेवन कैलकुलेटर' },
    title: { en: 'Daily Water Intake Calculator – Hydration by Weight Tool', es: 'Calculadora de Consumo de Agua Diario por Peso', fr: 'Calculateur d\'Hydratation selon le Poids', de: 'Wasserbedarf Rechner nach Körpergewicht – Täglicher Zielwert', ko: '하루 물 섭취량 계산기 (Water Intake Calculator by Weight)', hi: 'दैनिक पानी का सेवन कैलकुलेटर - वजन के अनुसार हाइड्रेशन' },
    description: {
      "en": "Free Daily Water Intake Calculator. Calculate recommended daily water consumption in liters, glasses, and ounces based on body weight, climate, exercise duration, and activity level with privacy-focused, browser calculations.",
      "es": "Calculadora de ingesta diaria de agua gratuita. Calcula el consumo diario recomendado de agua en litros, vasos u onzas según el peso corporal, el clima, la duración del ejercicio y el nivel de actividad con cálculos privados en el navegador.",
      "fr": "Calculateur d'apport quotidien en eau gratuit. Calculez la consommation d'eau quotidienne recommandée en litres, verres et onces selon le poids, le climat, la durée de l'exercice et l'activité avec calculs sur navigateur.",
      "de": "Kostenloser Wasserbedarf-Rechner. Berechnen Sie Ihre empfohlene tägliche Wasseraufnahme in Litern, Gläsern und Unzen basierend auf Körpergewicht, Klima, Trainingsdauer und Aktivität datenschutzorientiert im Browser.",
      "ko": "일일 권장 수분 섭취량 무료 계산기. 체중, 기후, 운동 시간 및 일상 활동량에 따라 리터(L), 컵 및 온스 단위로 권장 일일 수분 섭취량을 계산하세요. 가입 없이 브라우저 내 100% 무료 구동.",
      "hi": "मुफ़्त दैनिक जल सेवन कैलकुलेटर। शरीर के वजन, जलवायु, व्यायाम की अवधि और गतिविधि स्तर के आधार पर लीटर, ग्लास और औंस में अनुशंसित दैनिक पानी की खपत की गणना करें। मुफ़्त और गोपनीयता-केंद्रित।"
    },
    inputs: [
      { id: 'weight', label: L.weight, type: 'number', placeholder: '70' },
      { id: 'activity', label: L.activity, type: 'select', options: [
        { value: 'sedentary', label: L.sedentary },
        { value: 'active', label: L.active }
      ]}
    ],
    calculate: (inputs, system) => {
      let w = parseFloat(inputs.weight) || 0;
      if (system === 'imperial') {
        w = w * 0.453592;
      }
      let waterMl = w * 35;
      if (inputs.activity === 'active') {
        waterMl += 750;
      }

      return {
        primary: { value: (waterMl / 1000).toFixed(2), label: { en: 'Water Target', es: 'Objetivo de Agua', fr: 'Objectif d\'Hydratation', de: 'Täglicher Wasserbedarf', ko: '목표 수분 섭취량', hi: 'पानी का लक्ष्य' }, unit: 'Liters/day' },
        secondary: [
          { label: { en: 'Standard Glasses (250ml)', es: 'Vasos Estándar (250ml)', fr: 'Verres Standards', de: 'Gläser (250ml)', ko: '일반 컵 횟수 (250ml)', hi: 'मानक गिलास (250 मिली)' }, value: Math.round(waterMl / 250) }
        ]
      };
    }
  },
  {
    slug: 'macro-calculator',
    name: { en: 'Macro Calculator', es: 'Calculadora de Macros', fr: 'Calculateur de Macros', de: 'Makro Rechner', ko: '매크로 계산기', hi: 'मैक्रो कैलकुलेटर' },
    title: { en: 'Macro Calculator – Free Macronutrient & IIFYM Ratio Tool', es: 'Calculadora de Macros Gratis - Macronutrientes y IIFYM', fr: 'Calculateur de Macros Gratuit - Glucides Protéines Lipides', de: 'Kostenloser Makro Rechner – IIFYM Makronährstoff-Verteilung', ko: '무료 매크로 계산기 (Macro Calculator & IIFYM Split)', hi: 'मुफ़्त मैक्रो कैलकुलेटर - मैक्रोन्यूट्रिएंट और IIFYM अनुपात' },
    description: {
      "en": "Free Macro Calculator. Calculate optimal daily macronutrient targets (protein, carbs, fat in grams) for cutting, maintenance, or muscle gain based on your TDEE and fitness goals with privacy-focused, browser calculations.",
      "es": "Calculadora de macronutrientes gratuita. Calcula tus objetivos diarios de macronutrientes (proteínas, carbohidratos, grasas en gramos) para definición, mantenimiento o volumen según tu TDEE y objetivos con cálculos privados en el navegador.",
      "fr": "Calculateur de macronutriments gratuit. Calculez vos objectifs quotidiens en macronutriments (protéines, glucides, lipides en grammes) pour la sèche, le maintien ou la prise de masse selon votre TDEE avec calculs sur navigateur.",
      "de": "Kostenloser Makronährstoff-Rechner. Berechnen Sie Ihre optimalen täglichen Makroziele (Proteine, Kohlenhydrate, Fette in Gramm) zum Abnehmen, Halten oder Muskelaufbau basierend auf Ihrem TDEE datenschutzorientiert im Browser.",
      "ko": "무료 매크로 영양소 계산기. TDEE 및 피트니스 목표에 따라 다이어트, 체중 유지 또는 근육 증량을 위한 일일 영양소 비율(단백질, 탄수화물, 지방 g)을 산출하세요. 가입 없는 100% 무료 도구.",
      "hi": "मुफ़्त मैक्रो कैलकुलेटर। अपने TDEE और फिटनेस लक्ष्यों के आधार पर कटिंग, रखरखाव या मांसपेशियों को बढ़ाने के लिए इष्टतम दैनिक मैक्रोन्यूट्रिएंट लक्ष्यों (प्रोटीन, कार्ब्स, ग्राम में वसा) की गणना करें। मुफ़्त और गोपनीयता-केंद्रित।"
    },
    inputs: [
      { id: 'weight', label: L.weight, type: 'number', placeholder: '70' },
      { id: 'height', label: L.height, type: 'number', placeholder: '175' },
      { id: 'age', label: L.age, type: 'number', placeholder: '25' },
      { id: 'gender', label: L.gender, type: 'select', options: [{ value: 'male', label: L.male }, { value: 'female', label: L.female }] },
      { id: 'activity', label: L.activity, type: 'select', options: [
        { value: '1.2', label: L.sedentary },
        { value: '1.375', label: L.light },
        { value: '1.55', label: L.moderate },
        { value: '1.725', label: L.active }
      ]},
      { id: 'goal', label: { en: 'Nutrition Plan', es: 'Plan Nutricional', fr: 'Régime Alimentaire', de: 'Diät-Plan', ko: '식단 기조 구성', hi: 'पोषण योजना' }, type: 'select', options: [
        { value: 'balanced', label: { en: 'Balanced (40/30/30)', es: 'Balanceado (40/30/30)', fr: 'Équilibré (40/30/30)', de: 'Ausgewogen (40/30/30)', ko: '균형 식단 (40/30/30)', hi: 'संतुलित (40/30/30)' } },
        { value: 'lowcarb', label: { en: 'Low Carb (20/40/40)', es: 'Bajo en Carbos (20/40/40)', fr: 'Low Carb (20/40/40)', de: 'Low Carb (20/40/40)', ko: '저탄수화물 (20/40/40)', hi: 'कम कार्ब (20/40/40)' } },
        { value: 'highprotein', label: { en: 'High Protein (35/40/25)', es: 'Alto en Proteínas (35/40/25)', fr: 'High Protein (35/40/25)', de: 'Proteinreich (35/40/25)', ko: '고단백 식단 (35/40/25)', hi: 'उच्च प्रोटीन (35/40/25)' } }
      ]}
    ],
    calculate: (inputs, system) => {
      let w = parseFloat(inputs.weight) || 0;
      let h = parseFloat(inputs.height) || 0;
      if (system === 'imperial') {
        w = w * 0.453592;
        h = h * 2.54;
      }
      const age = parseInt(inputs.age) || 25;
      const act = parseFloat(inputs.activity) || 1.2;
      const bmr = inputs.gender === 'male'
        ? (10 * w) + (6.25 * h) - (5 * age) + 5
        : (10 * w) + (6.25 * h) - (5 * age) - 161;
      const tdee = bmr * act;

      let carbsPct = 0.4, protPct = 0.3, fatPct = 0.3;
      if (inputs.goal === 'lowcarb') { carbsPct = 0.2; protPct = 0.4; fatPct = 0.4; }
      else if (inputs.goal === 'highprotein') { carbsPct = 0.35; protPct = 0.4; fatPct = 0.25; }

      const carbG = (tdee * carbsPct) / 4;
      const protG = (tdee * protPct) / 4;
      const fatG = (tdee * fatPct) / 9;

      return {
        primary: { value: Math.round(tdee), label: { en: 'Daily Calories Target', es: 'Calorías Objetivo', fr: 'Calories Cibles', de: 'Tagesbedarf Kalorien', ko: '하루 소비 점수', hi: 'दैनिक कैलोरी लक्ष्य' }, unit: 'kcal/day' },
        secondary: [
          { label: { en: 'Carbohydrates', es: 'Carbohidratos', fr: 'Glucides', de: 'Kohlenhydrate', ko: '탄수화물', hi: 'कार्बोहाइड्रेट' }, value: Math.round(carbG), unit: 'g' },
          { label: { en: 'Protein', es: 'Proteínas', fr: 'Protéines', de: 'Protein (Eiweiß)', ko: '단백질', hi: 'प्रोटीन' }, value: Math.round(protG), unit: 'g' },
          { label: { en: 'Fat', es: 'Grasas', fr: 'Lipides', de: 'Fett', ko: '지방', hi: 'वसा' }, value: Math.round(fatG), unit: 'g' }
        ]
      };
    }
  },
  {
    slug: 'waist-to-hip-ratio-calculator',
    name: { en: 'Waist to Hip Ratio Calculator', es: 'Calculadora de Relación Cintura a Cadera', fr: 'Calculateur de Rapport Taille à Hanche', de: 'Taille-zu-Hüfte-Verhältnis Rechner', ko: '허리 엉덩이 비율 계산기', hi: 'कमर से कूल्हे का अनुपात कैलकुलेटर' },
    title: { en: 'Waist to Hip Ratio Calculator – Free WHO WHR Chart & Tool', es: 'Calculadora de Relación Cintura a Cadera - Tabla OMS WHR', fr: 'Calculateur de Rapport Taille à Hanche - Normes OMS WHR', de: 'Taille zu Hüfte Verhältnis Rechner – WHO WHR Tabelle', ko: '허리 엉덩이 비율 계산기 (Waist to Hip Ratio Calculator)', hi: 'कमर से कूल्हे का अनुपात कैलकुलेटर - WHO WHR चार्ट' },
    description: {
      "en": "Free Waist-to-Hip Ratio Calculator (WHR Calculator). Calculate your waist-to-hip ratio, body shape type (apple vs pear), and WHO cardiovascular health risk classification with privacy-focused, browser calculations.",
      "es": "Calculadora de relación cintura-cadera (WHR) gratuita. Calcula tu relación cintura-cadera, tipo de forma corporal (manzana vs pera) y clasificación de riesgo cardiovascular de la OMS con cálculos privados en el navegador.",
      "fr": "Calculateur du rapport taille/hanches (WHR) gratuit. Calculez votre rapport taille/hanches, votre morphologie (pomme vs poire) et la classification des risques cardiovasculaires selon l'OMS avec calculs sur navigateur.",
      "de": "Kostenloser Taille-Hüft-Verhältnis Rechner (WHR-Rechner). Berechnen Sie Ihr Taille-Hüft-Verhältnis, Ihren Körpertyp (Apfel vs. Birne) und die WHO-Risikoklassifizierung für kardiovaskuläre Gesundheit datenschutzorientiert im Browser.",
      "ko": "무료 허리-엉덩이 둘레 비율 계산기 (WHR Calculator). 허리-엉덩이 비율(WHR), 체형 유형(사과형 vs 배형) 및 WHO 심혈관 건강 위험 범주를 산출하세요. 가입 없이 브라우저 내 100% 무료 구동.",
      "hi": "मुफ़्त कमर-से-कूल्हे का अनुपात कैलकुलेटर (WHR Calculator)। अपने कमर-से-कूल्हे के अनुपात, शरीर के आकार के प्रकार (सेब बनाम नाशपाती) और डब्ल्यूएचओ हृदय स्वास्थ्य जोखिम वर्गीकरण की गणना करें। मुफ़्त और गोपनीयता-केंद्रित।"
    },
    inputs: [
      { id: 'waist', label: L.waist, type: 'number', placeholder: '80' },
      { id: 'hip', label: L.hip, type: 'number', placeholder: '90' },
      { id: 'gender', label: L.gender, type: 'select', options: [{ value: 'male', label: L.male }, { value: 'female', label: L.female }] }
    ],
    calculate: (inputs) => {
      const w = parseFloat(inputs.waist) || 1;
      const h = parseFloat(inputs.hip) || 1;
      const whr = w / h;

      const isM = inputs.gender === 'male';
      let risk = { en: 'Standard Ratio', es: 'Rango Estándar', fr: 'Plage Standard', de: 'Standardbereich', ko: '표준 범위', hi: 'मानक अनुपात' };
      if (isM) {
        if (whr >= 0.9 && whr < 1.0) risk = { en: 'Moderate Ratio', es: 'Moderado', fr: 'Modéré', de: 'Mäßig', ko: '보통', hi: 'मध्यम' };
        else if (whr >= 1.0) risk = { en: 'Elevated Ratio', es: 'Elevado', fr: 'Élevé', de: 'Erhöht', ko: '높음', hi: 'उच्च' };
      } else {
        if (whr >= 0.8 && whr < 0.85) risk = { en: 'Moderate Ratio', es: 'Moderado', fr: 'Modéré', de: 'Mäßig', ko: '보통', hi: 'मध्यम' };
        else if (whr >= 0.85) risk = { en: 'Elevated Ratio', es: 'Elevado', fr: 'Élevé', de: 'Erhöht', ko: '높음', hi: 'उच्च' };
      }

      return {
        primary: { value: whr.toFixed(2), label: { en: 'Waist-to-Hip Ratio', es: 'Proporción Cintura-Cadera', fr: 'Rapport WHR', de: 'Taille-Hüft-Verhältnis', ko: '허리 대비 엉덩이 비', hi: 'कमर से कूल्हे का अनुपात' } },
        secondary: [
          { label: { en: 'Distribution Reference', es: 'Referencia de Distribución', fr: 'Référence de Distribution', de: 'Verteilungsreferenz', ko: '분포 참조', hi: 'वितरण संदर्भ' }, value: risk.en }
        ]
      };
    }
  },
  {
    slug: 'body-surface-area-calculator',
    name: { en: 'Mosteller BSA Calculator (Square Root Method)', es: 'Calculadora BSA Método Mosteller (Metros Cuadrados)', fr: 'Calculateur BSA Formule Mosteller (Mètres Carrés)', de: 'Mosteller BSA Rechner (Quadratmeter)', ko: 'Mosteller 체표면적 계산기', hi: 'मोस्टेलर BSA कैलकुलेटर (वर्ग मीटर)' },
    title: { en: 'Mosteller BSA Calculator (Square Root Method) – Body Surface Area m² Tool', es: 'Calculadora BSA Fórmula Mosteller en Metros Cuadrados (m²)', fr: 'Calculateur de Surface Corporelle BSA Formule Mosteller m²', de: 'Mosteller BSA Rechner Quadratmeter (m²) – Körperoberfläche', ko: 'Mosteller BSA 계산기 Square Meters (체표면적 계산기)', hi: 'मोस्टेलर BSA कैलकुलेटर square meters - बॉडी सरफेस एरिया' },
    description: {
      "en": "Free Body Surface Area Calculator (BSA Calculator). Calculate total body surface area in square meters (m²) using Mosteller, DuBois, Haycock, and Boyd published equations with privacy-focused, browser calculations.",
      "es": "Calculadora de superficie corporal (BSA) gratuita. Calcula la superficie corporal total en metros cuadrados (m²) utilizando las ecuaciones publicadas de Mosteller, DuBois, Haycock y Boyd con cálculos privados en el navegador.",
      "fr": "Calculateur de surface corporelle (BSA) gratuit. Calculez la surface corporelle totale en mètres carrés (m²) à l'aide des équations publiées de Mosteller, DuBois, Haycock et Boyd avec calculs sur navigateur.",
      "de": "Kostenloser Körperoberflächen-Rechner (BSA-Rechner). Berechnen Sie die gesamte Körperoberfläche in Quadratmetern (m²) mit den publizierten Formeln nach Mosteller, DuBois, Haycock und Boyd datenschutzorientiert im Browser.",
      "ko": "무료 체표면적 계산기 (BSA Calculator). Mosteller, DuBois, Haycock 및 Boyd 게시된 공식을 사용하여 제곱미터(m²) 단위의 전체 체표면적을 산출하세요. 가입 없는 100% 브라우저 계산.",
      "hi": "मुफ़्त बॉडी सरफेस एरिया कैलकुलेटर (BSA Calculator)। मोस्टेलर, डुबॉइस, हेकॉक और बॉयड प्रकाशित समीकरणों का उपयोग करके वर्ग मीटर (m²) में कुल शरीर के सतह क्षेत्र की गणना करें। मुफ़्त और गोपनीयता-केंद्रित।"
    },
    inputs: [
      { id: 'weight', label: L.weight, type: 'number', placeholder: '70' },
      { id: 'height', label: L.height, type: 'number', placeholder: '175' }
    ],
    calculate: (inputs, system) => {
      let w = parseFloat(inputs.weight) || 0;
      let h = parseFloat(inputs.height) || 0;
      if (system === 'imperial') {
        w = w * 0.453592;
        h = h * 2.54;
      }
      // Mosteller Formula: BSA (m²) = sqrt((H * W) / 3600)
      const bsaMosteller = Math.sqrt((h * w) / 3600);
      // Du Bois Formula: BSA (m²) = 0.007184 * H^0.725 * W^0.425
      const bsaDuBois = 0.007184 * Math.pow(h, 0.725) * Math.pow(w, 0.425);

      return {
        primary: { value: bsaMosteller.toFixed(2), label: { en: 'Mosteller BSA', es: 'BSA Mosteller', fr: 'BSA Mosteller', de: 'Mosteller BSA', ko: 'Mosteller 체표면적', hi: 'मोस्टेलर BSA' }, unit: 'm²' },
        secondary: [
          { label: { en: 'Du Bois Formula BSA', es: 'BSA Fórmula Du Bois', fr: 'BSA Formule Du Bois', de: 'Du Bois BSA', ko: 'Du Bois 체표면적', hi: 'ड्यू बॉइस BSA' }, value: bsaDuBois.toFixed(2), unit: 'm²' },
          { label: { en: 'Body Mass Index (BMI)', es: 'IMC de Referencia', fr: 'IMC Référence', de: 'BMI-Wert', ko: '참고 BMI', hi: 'बीएमआई संदर्भ' }, value: (w / Math.pow(h / 100, 2)).toFixed(1), unit: 'kg/m²' }
        ]
      };
    }
  },
  {
    slug: 'heart-rate-zone-calculator',
    name: { en: 'Karvonen Heart Rate Zone Calculator', es: 'Calculadora de Zonas Cardíacas Karvonen', fr: 'Calculateur de Zone Cardiaque Karvonen', de: 'Karvonen Herzfrequenzzonen Rechner', ko: 'Karvonen 심박수 zone 계산기', hi: 'कार्वोनेन हार्ट रेट ज़ोन कैलकुलेटर' },
    title: { en: 'Karvonen Heart Rate Zone Calculator – Target Heart Rate (HRR)', es: 'Calculadora de Zonas de Frecuencia Cardíaca Fórmula Karvonen', fr: 'Calculateur de Zone de Fréquence Cardiaque Formule Karvonen', de: 'Karvonen-Formel Herzfrequenzzonen Rechner – Zielpuls', ko: 'Karvonen 공식 타겟 심박수 zone 계산기 (Karvonen HR Zone)', hi: 'कार्वोनेन हार्ट रेट ज़ोन कैलकुलेटर - टारगेट हार्ट रेट' },
    description: {
      "en": "Free Heart Rate Zone Calculator. Calculate target training heart rate zones (Fat Burn, Aerobic, Anaerobic, Peak) based on age, resting heart rate, and maximum heart rate with privacy-focused, browser calculations.",
      "es": "Calculadora de zonas de frecuencia cardíaca gratuita. Calcula tus zonas objetivo de entrenamiento (Quema de grasa, Aeróbica, Anaeróbica, Pico) según edad, frecuencia en reposo y frecuencia máxima con cálculos privados en el navegador.",
      "fr": "Calculateur de zones de fréquence cardiaque gratuit. Calculez vos zones cibles d'entraînement (Brûle-graisse, Aérobie, Anaérobie, Maximale) selon l'âge, le pouls au repos et la fréquence maximale avec calculs sur navigateur.",
      "de": "Kostenloser Herzfrequenzzonen-Rechner. Berechnen Sie Ihre Ziel-Trainingszonen (Fettverbrennung, Aerob, Anaerob, Maximal) basierend auf Alter, Ruhepuls und maximaler Herzfrequenz datenschutzorientiert im Browser.",
      "ko": "무료 심박수 구간 계산기. 나이, 안정시 심박수 및 최대 심박수를 바탕으로 목표 운동 심박수 구간(지방 burning, 유산소, 무산소, 최대 구간)을 정확하게 산출하세요. 가입 없이 브라우저 내 100% 무료 구동.",
      "hi": "मुफ़्त हृदय गति क्षेत्र कैलकुलेटर। उम्र, विश्राम हृदय गति और अधिकतम हृदय गति के आधार पर लक्षित प्रशिक्षण हृदय गति क्षेत्रों (फैट बर्न, एरोबिक, एनारobic, पीक) की गणना करें। मुफ़्त और गोपनीयता-केंद्रित।"
    },
    inputs: [
      { id: 'age', label: L.age, type: 'number', placeholder: '25' },
      { id: 'rhr', label: { en: 'Resting Heart Rate', es: 'Frecuencia Cardíaca en Reposo', fr: 'Fréquence Cardiaque Repos', de: 'Ruhepuls', ko: '안정시 심박수', hi: 'विश्राम हार्ट रेट' }, type: 'number', placeholder: '60' }
    ],
    calculate: (inputs) => {
      const age = parseInt(inputs.age) || 25;
      const rhr = parseInt(inputs.rhr) || 60;
      const maxHr = 220 - age;
      const hrr = Math.max(0, maxHr - rhr);

      const zone1Min = Math.round(rhr + (hrr * 0.5));
      const zone1Max = Math.round(rhr + (hrr * 0.6));
      const zone2Min = Math.round(rhr + (hrr * 0.6));
      const zone2Max = Math.round(rhr + (hrr * 0.7));
      const zone3Min = Math.round(rhr + (hrr * 0.7));
      const zone3Max = Math.round(rhr + (hrr * 0.8));
      const zone4Min = Math.round(rhr + (hrr * 0.8));
      const zone4Max = Math.round(rhr + (hrr * 0.9));
      const zone5Min = Math.round(rhr + (hrr * 0.9));
      const zone5Max = Math.round(rhr + (hrr * 1.0));

      return {
        primary: { value: `${zone2Min} - ${zone2Max}`, label: { en: 'Fat Burn Zone (Zone 2)', es: 'Zona Quema Grasa (Zona 2)', fr: 'Zone Brûle-Graisse (Zone 2)', de: 'Fettverbrennung (Zone 2)', ko: '지방 연소 구간 (Zone 2)', hi: 'फैट बर्न ज़ोन (ज़ोन 2)' }, unit: 'bpm' },
        secondary: [
          { label: { en: 'Zone 1: Recovery (50-60%)', es: 'Zona 1: Recuperación (50-60%)', fr: 'Zone 1: Récupération (50-60%)', de: 'Zone 1: Regeneration (50-60%)', ko: 'Zone 1: 회복 (50-60%)', hi: 'ज़ोन 1: रिकवरी (50-60%)' }, value: `${zone1Min} - ${zone1Max}`, unit: 'bpm' },
          { label: { en: 'Zone 2: Fat Burn (60-70%)', es: 'Zona 2: Quema Grasa (60-70%)', fr: 'Zone 2: Brûle-Graisse (60-70%)', de: 'Zone 2: Fettverbrennung (60-70%)', ko: 'Zone 2: 지방 연소 (60-70%)', hi: 'ज़ोन 2: फैट बर्न (60-70%)' }, value: `${zone2Min} - ${zone2Max}`, unit: 'bpm' },
          { label: { en: 'Zone 3: Aerobic (70-80%)', es: 'Zona 3: Cardio (70-80%)', fr: 'Zone 3: Cardio (70-80%)', de: 'Zone 3: Aerob (70-80%)', ko: 'Zone 3: 유산소 (70-80%)', hi: 'ज़ोन 3: एरोबिक (70-80%)' }, value: `${zone3Min} - ${zone3Max}`, unit: 'bpm' },
          { label: { en: 'Zone 4: Anaerobic (80-90%)', es: 'Zona 4: Anaeróbico (80-90%)', fr: 'Zone 4: Anaérobie (80-90%)', de: 'Zone 4: Anaerob (80-90%)', ko: 'Zone 4: 무산소 (80-90%)', hi: 'ज़ोन 4: एनएरोबिक (80-90%)' }, value: `${zone4Min} - ${zone4Max}`, unit: 'bpm' },
          { label: { en: 'Zone 5: VO2 Max (90-100%)', es: 'Zona 5: Máximo (90-100%)', fr: 'Zone 5: VO2 Max (90-100%)', de: 'Zone 5: VO2 Max (90-100%)', ko: 'Zone 5: VO2 Max (90-100%)', hi: 'ज़ोन 5: VO2 मैक्स (90-100%)' }, value: `${zone5Min} - ${zone5Max}`, unit: 'bpm' },
          { label: { en: 'Max Heart Rate (HRmax)', es: 'Frecuencia Cardíaca Máxima', fr: 'Fréquence Cardiaque Max', de: 'Maximale Herzfrequenz', ko: '최대 심박수', hi: 'अधिकतम हार्ट रेट' }, value: maxHr, unit: 'bpm' },
          { label: { en: 'Heart Rate Reserve (HRR)', es: 'Reserva de Frecuencia Cardíaca', fr: 'Réserve Cardiaque (HRR)', de: 'Herzfrequenzreserve', ko: '심박 예비능 (HRR)', hi: 'हार्ट रेट रिजर्व' }, value: hrr, unit: 'bpm' }
        ]
      };
    }
  },
  {
    slug: 'karvonen-heart-rate-calculator',
    name: { en: 'Karvonen Heart Rate Calculator', es: 'Calculadora de Frecuencia Cardíaca Karvonen', fr: 'Calculateur de Fréquence Cardiaque Karvonen', de: 'Karvonen Herzfrequenz Rechner', ko: 'Karvonen 심박수 계산기', hi: 'कार्वोनेन हार्ट रेट कैलकुलेटर' },
    title: { en: 'Karvonen Heart Rate Calculator – Target HR & Reserve (HRR)', es: 'Calculadora de Frecuencia Cardíaca Karvonen – Zona y Reserva Cardíaca', fr: 'Calculateur Karvonen – Fréquence Cardiaque Cible et Réserve', de: 'Karvonen Herzfrequenz Rechner – Zielpuls & Reserve (HRR)', ko: 'Karvonen 심박수 계산기 – 타겟 심박수 및 예비 심박수 (HRR)', hi: 'कार्वोनेन हार्ट रेट कैलकुलेटर - टारगेट हार्ट रेट एवं रिजर्व' },
    description: {
      "en": "Free Karvonen Heart Rate Calculator. Calculate Target Heart Rate (THR) zones using the Karvonen formula (Heart Rate Reserve % method) by age and resting heart rate (BPM) with privacy-focused, browser calculations.",
      "es": "Calculadora de frecuencia cardíaca Karvonen gratuita. Calcula las zonas de frecuencia cardíaca objetivo (THR) utilizando la fórmula de Karvonen (método de Reserva de Frecuencia Cardíaca %) según edad y frecuencia en reposo (BPM) con cálculos privados en el navegador.",
      "fr": "Calculateur de fréquence cardiaque Karvonen gratuit. Calculez les zones cibles (THR) avec la formule de Karvonen (méthode de Réserve de Fréquence Cardiaque %) selon l'âge et le pouls au repos avec calculs sur navigateur.",
      "de": "Kostenloser Karvonen-Herzfrequenz-Rechner. Berechnen Sie Ihre Zielherzfrequenz (THR) mit der Karvonen-Formel (Herzfrequenzreserve-%-Methode) nach Alter und Ruhepuls (BPM) datenschutzorientiert im Browser.",
      "ko": "무료 카보넨(Karvonen) 심박수 계산기. 나이와 안정시 심박수(BPM)를 활용하여 카보넨 공식(심박수 예비능 % 측정법)으로 목표 운동 심박수 구간을 계산하세요. 가입 없는 100% 브라우저 계산.",
      "hi": "मुफ़्त कार्वोनेन हृदय गति कैलकुलेटर। उम्र और विश्राम हृदय गति (BPM) के अनुसार कार्वोनेन सूत्र (हृदय गति आरक्षित % विधि) का उपयोग करके लक्षित हृदय गति (THR) क्षेत्रों की गणना करें। मुफ़्त और गोपनीयता-केंद्रित।"
    },
    inputs: [
      { id: 'age', label: L.age, type: 'number', placeholder: '25' },
      { id: 'rhr', label: { en: 'Resting Heart Rate', es: 'Frecuencia Cardíaca en Reposo', fr: 'Fréquence Cardiaque Repos', de: 'Ruhepuls', ko: '안정시 심박수', hi: 'विश्राम हार्ट रेट' }, type: 'number', placeholder: '60' }
    ],
    calculate: (inputs) => {
      const age = parseInt(inputs.age) || 25;
      const rhr = parseInt(inputs.rhr) || 60;
      const maxHr = 220 - age;
      const hrr = Math.max(0, maxHr - rhr);

      const zone1Min = Math.round(rhr + (hrr * 0.5));
      const zone1Max = Math.round(rhr + (hrr * 0.6));
      const zone2Min = Math.round(rhr + (hrr * 0.6));
      const zone2Max = Math.round(rhr + (hrr * 0.7));
      const zone3Min = Math.round(rhr + (hrr * 0.7));
      const zone3Max = Math.round(rhr + (hrr * 0.8));
      const zone4Min = Math.round(rhr + (hrr * 0.8));
      const zone4Max = Math.round(rhr + (hrr * 0.9));
      const zone5Min = Math.round(rhr + (hrr * 0.9));
      const zone5Max = Math.round(rhr + (hrr * 1.0));

      return {
        primary: { value: `${zone2Min} - ${zone2Max}`, label: { en: 'Karvonen Fat Burn Zone (60-70%)', es: 'Zona Quema Grasa (60-70%)', fr: 'Zone Brûle-Graisse (60-70%)', de: 'Karvonen Fettverbrennung (60-70%)', ko: 'Karvonen 지방 연소 구간 (60-70%)', hi: 'कार्वोनेन फैट बर्न ज़ोन (60-70%)' }, unit: 'bpm' },
        secondary: [
          { label: { en: 'Zone 1: Warm-up / Recovery (50-60%)', es: 'Zona 1: Calentamiento (50-60%)', fr: 'Zone 1: Échauffement (50-60%)', de: 'Zone 1: Aufwärmen (50-60%)', ko: 'Zone 1: 웜업/회복 (50-60%)', hi: 'ज़ोन 1: वार्म-अप (50-60%)' }, value: `${zone1Min} - ${zone1Max}`, unit: 'bpm' },
          { label: { en: 'Zone 2: Endurance / Fat Loss (60-70%)', es: 'Zona 2: Resistencia (60-70%)', fr: 'Zone 2: Endurance (60-70%)', de: 'Zone 2: Ausdauer (60-70%)', ko: 'Zone 2: 지구력/지방연소 (60-70%)', hi: 'ज़ोन 2: एंड्योरेंस (60-70%)' }, value: `${zone2Min} - ${zone2Max}`, unit: 'bpm' },
          { label: { en: 'Zone 3: Aerobic Cardio (70-80%)', es: 'Zona 3: Cardio Aeróbico (70-80%)', fr: 'Zone 3: Cardio Aérobie (70-80%)', de: 'Zone 3: Aerobes Training (70-80%)', ko: 'Zone 3: 유산소 카디오 (70-80%)', hi: 'ज़ोन 3: एरोबिक कार्डियो (70-80%)' }, value: `${zone3Min} - ${zone3Max}`, unit: 'bpm' },
          { label: { en: 'Zone 4: Anaerobic Threshold (80-90%)', es: 'Zona 4: Umbral Anaeróbico (80-90%)', fr: 'Zone 4: Seuil Anaérobie (80-90%)', de: 'Zone 4: Anaerobe Schwelle (80-90%)', ko: 'Zone 4: 무산소 역계 (80-90%)', hi: 'ज़ोन 4: एनएरोबिक थ्रेशोल्ड (80-90%)' }, value: `${zone4Min} - ${zone4Max}`, unit: 'bpm' },
          { label: { en: 'Zone 5: Maximum Peak (90-100%)', es: 'Zona 5: Máximo Pico (90-100%)', fr: 'Zone 5: Pic Maximum (90-100%)', de: 'Zone 5: Maximalleistung (90-100%)', ko: 'Zone 5: 최대 피크 (90-100%)', hi: 'ज़ोन 5: अधिकतम पीक (90-100%)' }, value: `${zone5Min} - ${zone5Max}`, unit: 'bpm' },
          { label: { en: 'Heart Rate Reserve (HRR)', es: 'Reserva de Frecuencia Cardíaca', fr: 'Réserve Cardiaque (HRR)', de: 'Herzfrequenzreserve', ko: '심박 예비능 (HRR)', hi: 'हार्ट रेट रिजर्व' }, value: hrr, unit: 'bpm' }
        ]
      };
    }
  },
  {
    slug: '1rm-calculator',
    name: { en: '1RM Calculator', es: 'Calculadora de 1RM', fr: 'Calculateur de 1RM', de: '1RM Rechner', ko: '1RM 계산기', hi: '1RM कैलकुलेटर' },
    title: { en: '1RM Calculator – One Rep Max (Bench Press, Squat, Deadlift)', es: 'Calculadora de 1RM – One Rep Max (Press, Sentadilla, Peso Muerto)', fr: 'Calculateur de 1RM – Rep Max (Développé Couché, Squat, Soulevé de Terre)', de: '1RM Rechner – Maximalkraft (Bankdrücken, Kniebeuge, Kreuzheben)', ko: '1RM 계산기 – 1 Rep Max 측정 (벤치프레스, 스쿼트, 데드리프트)', hi: '1RM कैलकुलेटर - वन रेप मैक्स (बेंच प्रेस, स्क्वाट, डेडलिफ्ट)' },
    description: {
      "en": "Free 1RM Calculator (One-Rep Max Calculator). Calculate one-rep max strength, weightlifting percentages, and rep max benchmarks using Epley and Brzycki equations with privacy-focused, browser calculations.",
      "es": "Calculadora de 1RM (Máximo para una repetición) gratuita. Calcula tu fuerza máxima para 1 repetición, porcentajes de levantamiento y marcas de repetición utilizando las ecuaciones de Epley y Brzycki con cálculos privados en el navegador.",
      "fr": "Calculateur de 1RM (Maximum pour une répétition) gratuit. Calculez votre force maximale pour 1 répétition, vos pourcentages de musculation et repères de répétition avec les équations d'Epley et Brzycki avec calculs sur navigateur.",
      "de": "Kostenloser 1RM-Rechner (Maximalkraft-Rechner). Berechnen Sie Ihre Maximalkraft für eine Wiederholung, Gewichtheber-Prozentwerte und Wiederholungs-Benchmarks mit Epley und Brzycki datenschutzorientiert im Browser.",
      "ko": "무료 1RM(1회 최대 중량) 계산기. Epley 및 Brzycki 공식을 활용하여 1회 최대 근력, 웨이트 리프팅 중량 비율(%) 및 중량별 반복 횟수 기준을 산출하세요. 가입 없이 브라우저 내 100% 무료 구동.",
      "hi": "मुफ़्त 1RM कैलकुलेटर (One-Rep Max Calculator)। इप्ले और ब्रिज़ीकी समीकरणों का उपयोग करके 1-रेप मैक्स ताकत, भारोत्तोलन प्रतिशत और रेप मैक्स बेंचमार्क की गणना करें। मुफ़्त और गोपनीयता-केंद्रित।"
    },
    inputs: [
      { id: 'weight', label: { en: 'Weight Lifted', es: 'Peso Levantado', fr: 'Charge Soulevée', de: 'Gewicht', ko: '리프팅 무게', hi: 'उठाया गया वजन' }, type: 'number', placeholder: '100' },
      { id: 'age', label: { en: 'Reps Performed', es: 'Repeticiones', fr: 'Répétitions', de: 'Wiederholungen', ko: '반복 횟수(Reps)', hi: 'रेप्स' }, type: 'number', placeholder: '5' }
    ],
    calculate: (inputs, system) => {
      const w = parseFloat(inputs.weight) || 0;
      const r = parseInt(inputs.age) || 1;

      const epley1RM = w * (1 + (r / 30));
      const brzycki1RM = r < 37 ? w * (36 / (37 - r)) : epley1RM;
      const lander1RM = (100 * w) / Math.max(1, 101.3 - (2.67123 * r));

      const unitStr = system === 'imperial' ? 'lbs' : 'kg';

      return {
        primary: { value: Math.round(epley1RM), label: { en: 'Estimated 1RM (Epley)', es: '1RM Estimado (Epley)', fr: '1RM Estimé (Epley)', de: 'Geschätzter 1RM (Epley)', ko: 'Epley 추정 1RM', hi: 'अनुमानित 1RM (Epley)' }, unit: unitStr },
        secondary: [
          { label: { en: 'Brzycki Formula 1RM', es: 'Fórmula Brzycki 1RM', fr: 'Formule Brzycki 1RM', de: 'Brzycki Formel 1RM', ko: 'Brzycki 추정 1RM', hi: 'ब्रज़िकी 1RM' }, value: Math.round(brzycki1RM), unit: unitStr },
          { label: { en: 'Lander Formula 1RM', es: 'Fórmula Lander 1RM', fr: 'Formule Lander 1RM', de: 'Lander Formel 1RM', ko: 'Lander 추정 1RM', hi: 'लैंडर 1RM' }, value: Math.round(lander1RM), unit: unitStr },
          { label: { en: '90% 1RM Heavy Strength (3 Reps)', es: '90% del Máximo (3 Reps)', fr: '90% du 1RM (3 Reps)', de: '90% 1RM (3 Wdh)', ko: '90% 훈련 무게 (3회)', hi: '90% 1RM Target' }, value: Math.round(epley1RM * 0.90), unit: unitStr },
          { label: { en: '85% 1RM Muscle Hypertrophy (5 Reps)', es: '85% del Máximo (5 Reps)', fr: '85% du 1RM (5 Reps)', de: '85% 1RM (5 Wdh)', ko: '85% 훈련 무게 (5회)', hi: '85% 1RM Target' }, value: Math.round(epley1RM * 0.85), unit: unitStr },
          { label: { en: '75% 1RM Endurance Volume (10 Reps)', es: '75% del Máximo (10 Reps)', fr: '75% du 1RM (10 Reps)', de: '75% 1RM (10 Wdh)', ko: '75% 훈련 무게 (10회)', hi: '75% 1RM Target' }, value: Math.round(epley1RM * 0.75), unit: unitStr }
        ]
      };
    }
  },
  {
    slug: 'one-rep-max-calculator',
    name: { en: '1RM Bench Press Calculator', es: 'Calculadora 1RM Press de Banca', fr: 'Calculateur 1RM Développé Couché', de: '1RM Bankdrücken Rechner', ko: '1RM 측정기', hi: '1RM बेंच प्रेस कैलकुलेटर' },
    title: { en: '1RM Bench Press Calculator – One Rep Max (Epley & Brzycki)', es: 'Calculadora 1RM Epley Press de Banca y Sentadilla', fr: 'Calculateur 1RM Epley Développé Couché', de: 'Epley 1RM Bankdrücken Rechner – Maximalkraft', ko: '1RM 측정기 – 무료 Epley 1 Rep Max 벤치프레스 계산기', hi: '1RM बेंच प्रेस कैलकुलेटर - वन रेप मैक्स' },
    description: {
      "en": "Free One-Rep Max Calculator & Bench Press 1RM Tool. Estimate max lift capacity, 5RM, 10RM strength levels, and training percentages based on weight lifted and reps completed with privacy-focused, browser calculations.",
      "es": "Calculadora gratuita de 1RM y herramienta de press de banca. Estima tu capacidad máxima de levantamiento, niveles de fuerza 5RM y 10RM, y porcentajes de entrenamiento según peso y repeticiones con cálculos privados en el navegador.",
      "fr": "Calculateur gratuit de 1RM et outil de développé couché. Estimez votre capacité maximale de soulevé, vos niveaux 5RM et 10RM, et vos pourcentages d'entraînement selon le poids et les répétitions avec calculs sur navigateur.",
      "de": "Kostenloser Maximalkraft-Rechner (1RM & Bankdrücken Tool). Schätzen Sie Ihre maximale Hebekapazität, 5RM- und 10RM-Kraftwerte sowie Trainings-Prozentsätze basierend auf Gewicht und Wiederholungen datenschutzorientiert im Browser.",
      "ko": "무료 1회 최대 중량 및 벤치프레스 1RM 도구. 들어올린 중량과 반복 횟수를 바탕으로 최대 중량 수행 능력, 5RM, 10RM 근력 수준 및 훈련 비율(%)을 계산하세요. 가입 없는 100% 무료 도구.",
      "hi": "मुफ़्त वन-रेप मैक्स कैलकुलेटर और बेंच प्रेस 1RM टूल। उठाए गए वजन और पूरी की गई पुनरावृत्तियों के आधार पर अधिकतम लिफ्ट क्षमता, 5RM, 10RM शक्ति स्तर और प्रशिक्षण प्रतिशत का अनुमान लगाएं। मुफ़्त और गोपनीयता-केंद्रित।"
    },
    inputs: [
      { id: 'weight', label: { en: 'Weight Lifted', es: 'Peso Levantado', fr: 'Charge Soulevée', de: 'Gewicht', ko: '리프팅 무게', hi: 'उठाया गया वजन' }, type: 'number', placeholder: '100' },
      { id: 'age', label: { en: 'Reps Performed', es: 'Repeticiones', fr: 'Répétitions', de: 'Wiederholungen', ko: '반복 횟수(Reps)', hi: 'रेप्स' }, type: 'number', placeholder: '5' }
    ],
    calculate: (inputs, system) => {
      const w = parseFloat(inputs.weight) || 0;
      const r = parseInt(inputs.age) || 1;

      // Epley Formula: 1RM = W * (1 + R/30)
      const epley1RM = w * (1 + (r / 30));
      // Brzycki Formula: 1RM = W * (36 / (37 - R))
      const brzycki1RM = r < 37 ? w * (36 / (37 - r)) : epley1RM;
      // Lander Formula: (100 * W) / (101.3 - 2.67123 * R)
      const lander1RM = (100 * w) / Math.max(1, 101.3 - (2.67123 * r));

      const unitStr = system === 'imperial' ? 'lbs' : 'kg';

      return {
        primary: { value: Math.round(epley1RM), label: { en: 'Epley Estimated 1RM Bench Press', es: '1RM Estimado Epley', fr: '1RM Estimé Epley', de: 'Epley 1RM Wert', ko: 'Epley 추정 1RM 무게', hi: 'एपले अनुमानित 1RM' }, unit: unitStr },
        secondary: [
          { label: { en: 'Brzycki Formula 1RM', es: '1RM Fórmula Brzycki', fr: '1RM Formule Brzycki', de: 'Brzycki 1RM Wert', ko: 'Brzycki 추정 1RM', hi: 'ब्रज़िकी 1RM' }, value: Math.round(brzycki1RM), unit: unitStr },
          { label: { en: 'Lander Formula 1RM', es: '1RM Fórmula Lander', fr: '1RM Formule Lander', de: 'Lander 1RM Wert', ko: 'Lander 추정 1RM', hi: 'लैंडर 1RM' }, value: Math.round(lander1RM), unit: unitStr },
          { label: { en: '90% 1RM (3 Rep Heavy Load)', es: '90% del Máximo (3 Reps)', fr: '90% du 1RM (3 Reps)', de: '90% 1RM (3 Wdh)', ko: '90% 훈련 무게 (3회)', hi: '90% 1RM Target' }, value: Math.round(epley1RM * 0.90), unit: unitStr },
          { label: { en: '85% 1RM (5 Rep Hypertrophy)', es: '85% del Máximo (5 Reps)', fr: '85% du 1RM (5 Reps)', de: '85% 1RM (5 Wdh)', ko: '85% 훈련 무게 (5회)', hi: '85% 1RM Target' }, value: Math.round(epley1RM * 0.85), unit: unitStr },
          { label: { en: '75% 1RM (10 Rep Volume)', es: '75% del Máximo (10 Reps)', fr: '75% du 1RM (10 Reps)', de: '75% 1RM (10 Wdh)', ko: '75% 훈련 무게 (10회)', hi: '75% 1RM Target' }, value: Math.round(epley1RM * 0.75), unit: unitStr }
        ]
      };
    }
  },
  {
    slug: 'pregnancy-weight-gain-calculator',
    name: { en: 'Pregnancy Weight Gain Calculator', es: 'Aumento de Peso en Embarazo', fr: 'Poids de Grossesse', de: 'Schwangerschaftsgewichtsrechner', ko: '임산부 체중 증가 계산기', hi: 'गर्भावस्था वजन बढ़ना कैलकुलेटर' },
    title: { en: 'Pregnancy Weight Gain Calculator – Week-by-Week ACOG / IOM Tracker', es: 'Calculadora de Peso Saludable en Gestación', fr: 'Calculateur de Prise de Poids de Grossesse', de: 'Gewichtszunahme während der Schwangerschaft Rechner', ko: '임신 주수별 체중 증가 계산기', hi: 'गर्भावस्था के दौरान वजन बढ़ने का कैलकुलेटर' },
    description: {
      "en": "Free Pregnancy Weight Gain Calculator aligned with ACOG & IOM reference guidelines. Track week-by-week gestational weight accumulation by trimester and pre-pregnancy BMI with privacy-focused, browser calculations.",
      "es": "Calculadora gratuita de peso en el embarazo según las guías del ACOG y el IOM. Realiza un seguimiento del aumento de peso gestacional semana a semana por trimestre e IMC previo al embarazo con cálculos privados en el navegador.",
      "fr": "Calculateur gratuit de prise de poids pendant la grossesse selon les directives de l'ACOG et de l'IOM. Suivez l'évolution du poids gestationnel semaine par semaine par trimestre et IMC avant grossesse avec calculs sur navigateur.",
      "de": "Kostenloser Schwangerschafts-Gewichtszunahme-Rechner nach ACOG- und IOM-Richtlinien. Verfolgen Sie die wöchentliche Gewichtszunahme nach Trimester und BMI vor der Schwangerschaft datenschutzorientiert im Browser.",
      "ko": "ACOG 및 IOM 지침에 맞춘 무료 임신 주수별 체중 증가 계산기. 임신 전 BMI 및 분기별 주수별 체중 증가 권장 범위를 확인하세요. 개인정보 수집 없는 100% 브라우저 계산.",
      "hi": "ACOG और IOM दिशानिर्देशों के अनुसार मुफ़्त गर्भावस्था वजन बढ़ना कैलकुलेटर। गर्भावस्था से पहले के बीएमआई और तिमाही के अनुसार सप्ताह-दर-सप्ताह वजन संचय को ट्रैक करें। मुफ़्त और गोपनीयता-केंद्रित।"
    },
    inputs: [
      { id: 'weight', label: { en: 'Current Weight', es: 'Peso Actual', fr: 'Poids Actuel', de: 'Aktuelles Gewicht', ko: '현재 체중', hi: 'वर्तमान वजन' }, type: 'number', placeholder: '70' },
      { id: 'preweight', label: { en: 'Pre-pregnancy Weight', es: 'Peso Pre-embarazo', fr: 'Poids Avant Grossesse', de: 'Gewicht vor Schwangerschaft', ko: '임신 전 체중', hi: 'गर्भावस्था से पहले का वजन' }, type: 'number', placeholder: '60' },
      { id: 'age', label: { en: 'Pregnancy Week (1-40)', es: 'Semana de Embarazo (1-40)', fr: 'Semaine de Grossesse (1-40)', de: 'Schwangerschaftswoche (1-40)', ko: '임신 주수 (1-40)', hi: 'गर्भावस्था सप्ताह (1-40)' }, type: 'number', placeholder: '20' }
    ],
    calculate: (inputs, system) => {
      const curW = parseFloat(inputs.weight) || 0;
      const preW = parseFloat(inputs.preweight) || 0;
      const week = Math.min(40, Math.max(1, parseInt(inputs.age) || 1));

      const diff = curW - preW;
      const isImperial = system === 'imperial';
      const minTotal = isImperial ? 25 : 11.5;
      const maxTotal = isImperial ? 35 : 16.0;

      const minGain = (week / 40) * minTotal;
      const maxGain = (week / 40) * maxTotal;

      const unitStr = isImperial ? 'lbs' : 'kg';

      return {
        primary: { value: diff.toFixed(1), label: { en: 'Current Weight Gain', es: 'Ganancia Actual', fr: 'Gain Actuel', de: 'Aktuelle Zunahme', ko: '현재 증량 무게', hi: 'वर्तमान वजन बढ़ना' }, unit: unitStr },
        secondary: [
          { label: { en: `Target Range for Week ${week}`, es: `Rango Recomendado para la Semana ${week}`, fr: `Fourchette Cible pour la Semaine ${week}`, de: `Empfohlene Zunahme für diese Woche ${week}`, ko: `${week}주차 적정 권장 범위`, hi: `सप्ताह ${week} के लिए लक्षित सीमा` }, value: `${minGain.toFixed(1)} - ${maxGain.toFixed(1)}`, unit: unitStr },
          { label: { en: 'Total Recommended 40-Week Target', es: 'Meta Total Recomendada (40 Semanas)', fr: 'Objectif Total Recommandé (40 Semaines)', de: 'Gesamtziel für 40 Wochen', ko: '40주 전체 적정 권장 범위', hi: '40 सप्ताह का कुल लक्षित वजन' }, value: `${minTotal.toFixed(1)} - ${maxTotal.toFixed(1)}`, unit: unitStr }
        ]
      };
    }
  },
];

export function getCalculatorTranslations(lang: Locale) {
  return {
    home: { en: 'Home', es: 'Inicio', fr: 'Accueil', de: 'Startseite', ko: '홈', hi: 'मुख्य पृष्ठ' }[lang],
    title: { en: 'Health Tools Hub', es: 'Centro de Calculadoras de Salud', fr: 'Centre d\'Outils de Santé', de: 'Gesundheitsrechner-Portal', ko: '헬스 케어 계산기 허브', hi: 'स्वास्थ्य उपकरण केंद्र' }[lang],
    subtitle: { en: 'Click on any tool below to calculate standard health metrics instantly.', es: 'Haz clic en cualquier herramienta para calcular métricas de salud al instante.', fr: 'Cliquez sur n\'importe quel outil pour calculer vos métriques de santé.', de: 'Klicken Sie auf ein Tool, um Kennzahlen sofort zu berechnen.', ko: '표준 헬스 지표를 손쉽게 점검하는 계산기를 골라보세요.', hi: 'त्वरित स्वास्थ्य मापन के लिए किसी भी उपकरण पर क्लिक करें।' }[lang],
    metricsTitle: { en: 'Calculation Results Summary', es: 'Resumen de Resultados', fr: 'Résumé des Résultats', de: 'Zusammenfassung der Ergebnisse', ko: '계산 결과 요약', hi: 'गणना परिणाम विवरण' }[lang],
    waiting: { en: 'Enter your details to view your calculated result.', es: 'Ingresa tus datos para ver tu resultado calculado.', fr: 'Saisissez vos informations pour afficher votre résultat calculé.', de: 'Geben Sie Ihre Daten ein, um Ihr berechnetes Ergebnis anzuzeigen.', ko: '계산된 결과를 확인하려면 정보를 입력하세요.', hi: 'अपना परिणाम देखने के लिए अपनी जानकारी दर्ज करें।' }[lang],
    calcBtn: { en: 'Run Calculation', es: 'Ejecutar Cálculo', fr: 'Calculer', de: 'Berechnung ausführen', ko: '계산하기', hi: 'गणना चलाएं' }[lang]
  };
}
