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
  {
    slug: '3d-bmi-calculator',
    name: { en: '3D BMI Calculator', es: 'Calculadora IMC 3D', fr: 'Calculateur IMC 3D', de: '3D BMI Rechner', ko: '3D BMI 계산기', hi: '3D बीएमआई कैलकुलेटर' },
    title: { en: '3D BMI Calculator & Body Visualizer – Height & Weight Tool', es: 'Calculadora IMC 3D y Visualizador Corporal', fr: 'Calculateur IMC 3D et Visualiseur Corporel', de: '3D BMI Rechner & Körper-Visualisierer', ko: '3D BMI 계산기 및 체형 시각화 도구', hi: '3D बीएमआई कैलकुलेटर और बॉडी विजुअलाइज़र' },
    description: {
      "en": "Free 3D Body Visualizer & 3D BMI Calculator. Calculate Body Mass Index (BMI), view 360° interactive front, side and back 3D avatar mesh, solid, wireframe & heatmap modes with Oxford 2.5 exponent scaling.",
      "es": "Calculadora de IMC 3D y visualizador corporal 3D interactivo gratuito. Calcula tu Índice de Masa Corporal (IMC), visualiza tu avatar 3D en 360° con vista frontal, lateral y posterior en modos de malla, sólido, estructura de alambre y mapa de calor con escalado de Oxford 2.5.",
      "fr": "Calculateur d'IMC 3D et visualiseur corporel 3D interactif gratuit. Calculez votre Indice de Masse Corporelle (IMC), visualisez votre avatar 3D à 360° de face, de profil et de dos en modes maillage, solide, fil de fer et carte thermique avec mise à l'échelle Oxford 2.5.",
      "de": "Kostenloser 3D BMI Rechner & interaktiver 3D-Körper-Visualisierer. Berechnen Sie Ihren Body-Mass-Index (BMI) und betrachten Sie Ihr 360° 3D-Körpermodell von vorne, der Seite und von hinten in Netz-, Solid-, Drahtmodell- und Heatmap-Modi mit Oxford 2.5 Skalierung.",
      "ko": "무료 3D BMI 계산기 및 대화형 3D 체형 시각화 도구. 체질량지수(BMI)를 산출하고 옥스포드 2.5 공식을 적용하여 360° 전면, 측면, 후면 3D 아바타, 와이어프레임 및 히트맵 모드를 실시간으로 확인하세요.",
      "hi": "मुफ़्त 3D बीएमआई कैलकुलेटर और 3D बॉडी विजुअलाइज़र। अपने बॉडी मास इंडेक्स (BMI) की गणना करें, ऑक्सफोर्ड 2.5 फॉर्मूला के साथ 360° फ्रंट, साइड और बैक 3D अवतार, वायरफ्रेम और बीएमआई हीटमैप मोड में अपना शरीर तुरंत देखें।"
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
      "en": "Official WHO BMI Chart for adults, men, and women. Interactive BMI scale calculator, height-weight metric lookup tables (kg & cm), WHO categories, and age reference guidance.",
      "es": "Tabla oficial de IMC de la OMS para adultos, hombres y mujeres. Calculadora interactiva de escala de IMC, tablas de consulta de altura y peso en sistema métrico (kg y cm), categorías de la OMS y guía de referencia por edad.",
      "fr": "Tableau d'IMC officiel de l'OMS pour adultes, hommes et femmes. Calculateur d'échelle d'IMC interactif, tableaux de consultation taille-poids en unités métriques (kg et cm), catégories de l'OMS et repères d'âge.",
      "de": "Offizielle WHO BMI-Tabelle für Erwachsene, Männer und Frauen. Interaktiver BMI-Skala-Rechner, Größe-Gewicht-Referenztabellen in metrischen Einheiten (kg & cm), WHO-Kategorien und Altersreferenzwerte.",
      "ko": "성인, 남성 및 여성을 위한 공식 WHO BMI 차트. 대화형 BMI 지수 계산기, 신장-체중 미터법 진단표(kg & cm), WHO 범주 및 연령별 참조 지침을 제공합니다.",
      "hi": "वयस्कों, पुरुषों और महिलाओं के लिए आधिकारिक डब्ल्यूएचओ बीएमआई चार्ट। इंटरएक्टिव बीएमआई स्केल कैलकुलेटर, ऊंचाई-वजन मीट्रिक लुकअप टेबल (kg और cm), डब्ल्यूएचओ श्रेणियां और आयु संदर्भ मार्गदर्शन।"
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
      "en": "Free 3D Body Visualizer & 3D BMI Calculator online. View interactive 360° front, side & back 3D body type avatar model, wireframe, and BMI heatmap modes with real-time sliders.",
      "es": "Visualizador corporal 3D interactivo y calculadora de IMC 3D en línea gratuita. Observa tu modelo de avatar 3D en 360° con vistas frontal, lateral y posterior, modo alambre y mapa de calor con deslizadores en tiempo real.",
      "fr": "Visualiseur corporel 3D gratuit et calculateur d'IMC 3D en ligne. Visualisez votre avatar 3D à 360° de face, de profil et de dos en modes maillage, fil de fer et carte thermique avec curseurs en temps réel.",
      "de": "Kostenloser 3D Body Visualizer & 3D BMI Rechner online. Betrachten Sie Ihr interaktives 360° 3D-Körpermodell von vorne, der Seite und von hinten mit Drahtmodell und Heatmap über Echtzeit-Regler.",
      "ko": "무료 온라인 3D 바디 비주얼라이저 및 3D BMI 계산기. 실시간 슬라이더 조작을 통해 360° 전면, 측면, 후면 3D 아바타, 와이어프레임 및 BMI 히트맵을 확인하세요.",
      "hi": "मुफ़्त 3D बॉडी विजुअलाइज़र और ऑनलाइन 3D बीएमआई कैलकुलेटर। रियल-टाइम स्लाइडर्स के साथ 360° फ्रंट, साइड और बैक 3D अवतार मॉडल, वायरफ्रेम और बीएमआई हीटमैप मोड में अपना शरीर तुरंत देखें।"
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
      hi: 'बीएमआई कैलकुलेटर भारत (BMI Calculator India)'
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
      "en": "Free BMI Calculator India aligned with ICMR & WHO South-East Asia consensus guidelines (Asian overweight cutoff: 23.0 kg/m²). Calculate your BMI, Asian risk category, and healthy weight range.",
      "es": "Calculadora de IMC para la India gratuita alineada con las directrices del ICMR y la OMS para el Sur de Asia (corte de sobrepeso asiático: 23.0 kg/m²). Calcula tu IMC, categoría de riesgo asiática y rango de peso saludable.",
      "fr": "Calculateur d'IMC Inde gratuit conforme aux directives de l'ICMR et de l'OMS pour l'Asie du Sud-Est (seuil de surpoids asiatique : 23,0 kg/m²). Calculez votre IMC, catégorie de risque asiatique et poids santé.",
      "de": "Kostenloser BMI-Rechner für Indien nach offiziellen ICMR- und WHO-Südasien-Richtlinien (asiatischer Übergewichtsschwelle: 23,0 kg/m²). Berechnen Sie Ihren BMI, Ihre asiatische Risiko-Kategorie und Ihr gesundes Gewicht.",
      "ko": "공식 ICMR 및 WHO 남아시아 지침(아시아인 과체중 기준: 23.0 kg/m²)에 맞춘 인도인 전용 무료 BMI 계산기. BMI, 아시아인 위험 범주 및 건강 체중 범위를 산출하세요.",
      "hi": "आधिकारिक ICMR और WHO दक्षिण एशियाई दिशानिर्देशों (एशियाई ओवरवेट कटऑफ: 23.0 kg/m²) के अनुसार भारतीयों के लिए मुफ़्त बीएमआई कैलकुलेटर। अपने बीएमआई, एशियाई जोखिम श्रेणी और स्वस्थ वजन सीमा की गणना करें।"
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
      "en": "Free BMI Calculator for Indians based on WHO South-East Asia and ICMR cut-off thresholds (Overweight ≥ 23.0, Obesity ≥ 25.0 kg/m²). Calculate your revised Asian BMI and healthy weight.",
      "es": "Calculadora de IMC para indios gratuita basada en los umbrales de la OMS para el Sur de Asia y el ICMR (Sobrepeso ≥ 23.0, Obesidad ≥ 25.0 kg/m²). Calcula tu IMC asiático revisado y peso saludable.",
      "fr": "Calculateur d'IMC pour les Indiens gratuit basé sur les seuils de l'OMS pour l'Asie du Sud-Est et l'ICMR (Surpoids ≥ 23,0, Obésité ≥ 25,0 kg/m²). Calculez votre IMC asiatique révisé et poids idéal.",
      "de": "Kostenloser BMI-Rechner für Inder auf Basis der WHO-Südasien- und ICMR-Schwellenwerte (Übergewicht ≥ 23,0, Adipositas ≥ 25,0 kg/m²). Berechnen Sie Ihren überarbeiteten asiatischen BMI.",
      "ko": "WHO 남아시아 및 ICMR 산출 기준(과체중 ≥ 23.0, 비만 ≥ 25.0 kg/m²)에 기반한 인도인 무료 BMI 계산기. 개정된 아시아인 BMI 수치와 정상 체중을 확인하세요.",
      "hi": "WHO दक्षिण-पूर्व एशिया और ICMR कटऑफ सीमाओं (अधिक वजन ≥ 23.0, मोटापा ≥ 25.0 kg/m²) पर आधारित भारतीयों के लिए मुफ़्त बीएमआई कैलकुलेटर। अपने संशोधित एशियाई बीएमआई और स्वस्थ वजन की गणना करें।"
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
      hi: 'ऊंचाई के अनुसार स्वस्थ वजन (Healthy Weight by Height)'
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
      "en": "Free Healthy Weight by Height Calculator & Height-Weight Chart for men and women (kg & lbs). Find your ideal weight according to height based on WHO, CDC & Devine reference standards.",
      "es": "Calculadora gratuita de peso saludable por altura y tabla de peso y altura para hombres y mujeres (kg y lbs). Encuentra tu peso ideal según tu altura basado en los estándares de la OMS, CDC y Devine.",
      "fr": "Calculateur gratuit de poids santé selon la taille et tableau taille-poids pour hommes et femmes (kg et lbs). Trouvez votre poids idéal selon votre taille d'après les normes de l'OMS, du CDC et de Devine.",
      "de": "Kostenloser Rechner für gesundes Gewicht nach Körpergröße & Größe-Gewicht-Tabelle für Männer und Frauen (kg & lbs). Finden Sie Ihr Idealgewicht nach Körpergröße auf Basis von WHO-, CDC- & Devine-Standards.",
      "ko": "무료 키별 건강 체중 계산기 및 남녀 키-체중 표 (kg 및 lbs). WHO, CDC 및 Devine 표준 기준에 따라 신장에 맞는 이상적인 체중 범위를 확인하세요.",
      "hi": "पुरुषों और महिलाओं के लिए मुफ़्त ऊंचाई के अनुसार स्वस्थ वजन कैलकुलेटर और हाइट-वेट चार्ट (kg और lbs)। डब्ल्यूएचओ, सीडीसी और डिवाइन संदर्भ मानकों के आधार पर अपनी ऊंचाई के अनुसार आदर्श वजन पाएं।"
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
  {
    slug: 'asian-bmi-calculator',
    name: { en: 'Asian BMI Calculator', es: 'Calculadora de IMC Asiático', fr: 'Calculateur d\'IMC Asiatique', de: 'Asiatischer BMI Rechner', ko: '아시아인 BMI 계산기', hi: 'एशियाई बीएमआई कैलकुलेटर' },
    title: { en: 'Asian BMI Calculator – WHO Asian Cutoff Standards (23 & 27.5)', es: 'Calculadora de IMC Asiático – Estándares de la OMS (23 y 27.5)', fr: 'Calculateur d\'IMC Asiatique – Normes OMS (23 & 27.5)', de: 'Asiatischer BMI Rechner – WHO Richtlinien (23 & 27.5)', ko: '아시아인 BMI 계산기 – WHO 아시아인 기준 (23 & 27.5)', hi: 'एशियाई बीएमआई कैलकुलेटर - WHO एशियाई कटऑफ (23 & 27.5)' },
    description: {
      "en": "Free Asian BMI Calculator based on revised WHO Asian cut-offs (Healthy: 18.5-22.9, Overweight: 23.0-27.4, Obese: ≥ 27.5 kg/m²). Calculate your ethnic BMI score and healthy weight range.",
      "es": "Calculadora de IMC asiático gratuita basada en los cortes asiáticos revisados de la OMS (Saludable: 18.5-22.9, Sobrepeso: 23.0-27.4, Obesidad: ≥ 27.5 kg/m²). Calcula tu IMC étnico y rango de peso saludable.",
      "fr": "Calculateur d'IMC asiatique gratuit basé sur les seuils asiatiques révisés de l'OMS (Normal : 18,5-22,9, Surpoids : 23,0-27,4, Obésité : ≥ 27,5 kg/m²). Calculez votre score d'IMC éthnique et poids idéal.",
      "de": "Kostenloser asiatischer BMI-Rechner basierend auf den überarbeiteten WHO-Asien-Schwellenwerten (Normal: 18,5-22,9, Übergewicht: 23,0-27,4, Adipositas: ≥ 27,5 kg/m²). Berechnen Sie Ihren asiatischen BMI-Wert.",
      "ko": "개정된 WHO 아시아인 판정 기준(정상: 18.5-22.9, 과체중: 23.0-27.4, 비만: ≥ 27.5 kg/m²)에 따른 무료 아시아인 BMI 계산기. 아시아인 전용 BMI 점수와 건강 체중 범위를 산출하세요.",
      "hi": "संशोधित डब्ल्यूएचओ एशियाई कटऑफ (स्वस्थ: 18.5-22.9, अधिक वजन: 23.0-27.4, मोटापा: ≥ 27.5 kg/m²) पर आधारित मुफ़्त एशियाई बीएमआई कैलकुलेटर। अपने बीएमआई स्कोर और स्वस्थ वजन सीमा की गणना करें।"
},
  {
    slug: 'bmr-calculator',
    name: { en: 'BMR Calculator', es: 'Calculadora BMR (Tasa Metabólica Basal)', fr: 'Calculateur BMR (Taux Métabolique de Base)', de: 'BMR Rechner (Grundumsatz)', ko: 'BMR 계산기 (기초대사량)', hi: 'BMR कैलकुलेटर (बेसल मेटाबॉलिक रेट)' },
    title: { en: 'BMR Calculator Online – Basal Metabolic Rate (Mifflin-St Jeor) for Men & Women', es: 'Calculadora BMR Gratis – Tasa Metabólica Basal', fr: 'Calculateur BMR Gratuit – Taux Métabolique de Base', de: 'BMR Rechner – Grundumsatz Berechnen Kostenlos', ko: '무료 BMR 계산기 – 기초대사량 계산기', hi: 'मुफ़्त BMR कैलकुलेटर – बेसल मेटाबॉलिक रेट' },
    description: {
      "en": "Free BMR Calculator Online. Calculate your Basal Metabolic Rate (BMR) using Mifflin-St Jeor and Harris-Benedict equations. Determine resting calorie expenditure by age, height (cm), weight (kg), and gender.",
      "es": "Calculadora de BMR gratuita en línea. Calcula tu Tasa Metabólica Basal (BMR) utilizando las ecuaciones de Mifflin-St Jeor y Harris-Benedict. Determina el gasto calórico en reposo según edad, altura (cm), peso (kg) y género.",
      "fr": "Calculateur de BMR gratuit en ligne. Calculez votre Taux Métabolique de Base (BMR) à l'aide des équations de Mifflin-St Jeor et Harris-Benedict. Déterminez votre dépense calorique au repos selon l'âge, la taille (cm), le poids (kg) et le genre.",
      "de": "Kostenloser BMR-Rechner online. Berechnen Sie Ihren Grundumsatz (BMR) mit den Formeln nach Mifflin-St Jeor und Harris-Benedict. Ermitteln Sie Ihren Ruhekalorienverbrauch nach Alter, Größe (cm), Gewicht (kg) und Geschlecht.",
      "ko": "무료 온라인 BMR 계산기. Mifflin-St Jeor 및 Harris-Benedict 공식을 사용하여 기초대사량(BMR)을 산출하세요. 나이, 신장(cm), 체중(kg) 및 성별에 따른 휴식기 일일 칼로리 소모량을 확인하세요.",
      "hi": "मुफ़्त ऑनलाइन बीएमआर कैलकुलेटर। मिफ्लिन-सेंट जॉर और हैरिस-बेनेडिक्ट समीकरणों का उपयोग करके अपने बेसल मेटाबॉलिक रेट (BMR) की गणना करें। उम्र, ऊंचाई (सेमी), वजन (किग्रा) और लिंग के आधार पर विश्राम कैलोरी व्यय निर्धारित करें।"
},
  {
    slug: 'tdee-calculator',
    name: { en: 'TDEE Calculator', es: 'Calculadora de TDEE', fr: 'Calculateur de TDEE', de: 'TDEE-Rechner', ko: 'TDEE 계산기 (TDEE Calculator)', hi: 'टीडीईई कैलकुलेटर' },
    title: { en: 'TDEE Calculator Online – Maintenance Calorie & Total Daily Energy Expenditure Calculator', es: 'Calculadora de TDEE – Gasto Energético Total Diario', fr: 'Calculateur de TDEE – Dépense Énergétique Totale', de: 'TDEE Rechner – Gesamtenergiebedarf (Total Daily Energy Expenditure)', ko: '무료 TDEE 계산기 (TDEE Calculator)', hi: 'मुफ़्त टीडीईई कैलकुलेटर - Total Daily Energy Expenditure' },
    description: {
      "en": "Free TDEE Calculator Online. Calculate Total Daily Energy Expenditure (TDEE), maintenance calories, cutting deficit, and bulking targets based on activity level and BMR formulas.",
      "es": "Calculadora de TDEE gratuita en línea. Calcula tu Gasto Energético Total Diario (TDEE), calorías de mantenimiento, déficit para perder peso y objetivos de volumen basados en tu nivel de actividad y fórmulas de BMR.",
      "fr": "Calculateur de TDEE gratuit en ligne. Calculez votre Dépense Énergétique Totale Quotidienne (TDEE), vos calories de maintien, votre déficit pour mincir et vos objectifs de prise de masse selon l'activité et le BMR.",
      "de": "Kostenloser TDEE-Rechner online. Berechnen Sie Ihren Gesamtenergiebedarf (TDEE), Erhaltungskalorien, Kaloriendefizit zum Abnehmen und Überschuss zum Muskelaufbau basierend auf Aktivitätslevel und BMR-Formeln.",
      "ko": "무료 온라인 TDEE 계산기. 활동량 및 BMR 공식을 바탕으로 일일 총 에너지 소모량(TDEE), 유지 칼로리, 체중 감량 칼로리 및 근육 증가 목표 칼로리를 계산하세요.",
      "hi": "मुफ़्त ऑनलाइन टीडीईई कैलकुलेटर। गतिविधि स्तर और बीएमआर सूत्रों के आधार पर अपने कुल दैनिक ऊर्जा व्यय (TDEE), रखरखाव कैलोरी, वजन घटाने के घाटे और वजन बढ़ाने के लक्ष्यों की गणना करें।"
},
  {
    slug: 'maintenance-calorie-calculator',
    name: {
      en: 'Maintenance Calorie Calculator',
      es: 'Calculadora de Calorías de Mantenimiento',
      fr: 'Calculateur de Calories de Maintien',
      de: 'Erhaltungskalorien Rechner',
      ko: '유지 칼로리 계산기',
      hi: 'रखरखाव कैलोरी कैलकुलेटर (Maintenance Calorie Calculator)'
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
      "en": "Free Maintenance Calorie Calculator online. Calculate your daily maintenance calories, total daily energy expenditure (TDEE), and weight loss deficit target calories by age, height (cm) and weight (kg).",
      "es": "Calculadora gratuita de calorías de mantenimiento en línea. Calcula tus calorías diarias de mantenimiento, gasto energético total diario (TDEE) y calorías de déficit para perder peso según edad, altura (cm) y peso (kg).",
      "fr": "Calculateur gratuit de calories de maintien en ligne. Calculez vos calories de maintien quotidiennes, votre dépense énergétique totale (TDEE) et vos objectifs de déficit selon l'âge, la taille (cm) et le poids (kg).",
      "de": "Kostenloser Erhaltungskalorien-Rechner online. Berechnen Sie Ihre täglichen Erhaltungskalorien, Ihren Gesamtenergiebedarf (TDEE) und Ihr Defizit zum Abnehmen nach Alter, Größe (cm) und Gewicht (kg).",
      "ko": "무료 온라인 유지 칼로리 계산기. 나이, 신장(cm) 및 체중(kg)에 따라 일일 유지 칼로리, 총 에너지 소모량(TDEE) 및 체중 감량 목표 칼로리를 산출하세요.",
      "hi": "मुफ़्त ऑनलाइन रखरखाव कैलोरी कैलकुलेटर। उम्र, ऊंचाई (सेमी) और वजन (किग्रा) के अनुसार अपनी दैनिक रखरखाव कैलोरी, टीडीईई और वजन घटाने के लक्षित कैलोरी की गणना करें।"
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
    name: { en: 'Body Fat Calculator', es: 'Calculadora de Grasa Corporal', fr: 'Calculateur de Graisse Corporelle', de: 'Körperfett Rechner', ko: '체지방 계산기 (Body Fat Calculator)', hi: 'बॉडी फैट कैलकुलेटर' },
    title: { en: 'Body Fat Calculator – US Navy Body Fat Percentage Tool', es: 'Calculadora de Grasa Corporal – Porcentaje de Grasa US Navy', fr: 'Calculateur de Graisse Corporelle – Formule US Navy', de: 'Körperfett Rechner – US Navy Körperfettanteil Berechnen', ko: '무료 체지방 계산기 (Body Fat Calculator)', hi: 'मुफ़्त बॉडी फैट कैलकुलेटर - बॉडी फैट प्रतिशत' },
    description: {
      "en": "Free Body Fat Calculator based on the US Navy body fat formula and WHtR metrics. Calculate body fat percentage, fat mass (kg/lbs), lean mass, and fitness classification categories.",
      "es": "Calculadora de grasa corporal gratuita basada en la fórmula de la US Navy y métricas de WHtR. Calcula tu porcentaje de grasa corporal, masa grasa (kg/lbs), masa magra y categoría de condición física.",
      "fr": "Calculateur de graisse corporelle gratuit basé sur la formule US Navy et les métriques WHtR. Calculez votre pourcentage de graisse, masse grasse (kg/lbs), masse maigre et catégorie de forme physique.",
      "de": "Kostenloser Körperfett-Rechner basierend auf der US Navy-Formel und WHtR-Messwerten. Berechnen Sie Ihren Körperfettanteil, Fettmasse (kg/lbs), Fettfreie Masse und Ihre Fitness-Kategorie.",
      "ko": "미 해군(US Navy) 공식 및 허리둘레 비율(WHtR)에 기반한 무료 체지방 계산기. 체지방률(%), 지방량(kg/lbs), 제지방량 및 피트니스 판정 범주를 계산하세요.",
      "hi": "यूएस नेवी बॉडी फैट फॉर्मूला और डब्ल्यूएचटीआर मेट्रिक्स पर आधारित मुफ़्त बॉडी फैट कैलकुलेटर। अपने शरीर वसा प्रतिशत (%), वसा द्रव्यमान (kg/lbs), लीन मास और फिटनेस वर्गीकरण श्रेणियों की गणना करें।"
},
  {
    slug: 'lean-body-mass-calculator',
    name: { en: 'Lean Body Mass Calculator', es: 'Calculadora de Masa Magra', fr: 'Calculateur de Masse Lean', de: 'Fettfreie Masse Rechner', ko: '제지방량 계산기', hi: 'लीन बॉडी मास कैलकुलेटर' },
    title: { en: 'Lean Body Mass Calculator - LBM Metric', es: 'Calculadora de Masa Corporal Magra', fr: 'Calculateur de Masse Corporelle Maigre', de: 'Rechner für fettfreie Körpermasse', ko: '제지방체중 계산기', hi: 'लीन बॉडी मास (LBM) कैलकुलेटर' },
    description: {
      "en": "Free Lean Body Mass Calculator (LBM Calculator). Calculate lean body mass, fat-free mass percentage, and body composition using Boer, James, and Hume equations by height and weight.",
      "es": "Calculadora de masa corporal magra (LBM) gratuita. Calcula la masa magra, el porcentaje de masa libre de grasa y la composición corporal utilizando las ecuaciones de Boer, James y Hume según altura y peso.",
      "fr": "Calculateur de masse corporelle maigre (LBM) gratuit. Calculez votre masse maigre, votre pourcentage de masse sans graisse et votre composition corporelle avec les équations de Boer, James et Hume.",
      "de": "Kostenloser Fettfreie-Masse-Rechner (LBM Rechner). Berechnen Sie Ihre magere Körpermasse, den fettfreien Masseanteil und die Körperzusammensetzung mit den Formeln nach Boer, James und Hume.",
      "ko": "무료 제지방량(LBM) 계산기. Boer, James 및 Hume 공식을 활용하여 신장과 체중별 제지방량, 무지방 비율 및 체성분을 정확하게 산출하세요.",
      "hi": "मुफ़्त लीन बॉडी मास कैलकुलेटर (LBM Calculator)। ऊंचाई और वजन के आधार पर बोएर, जेम्स और ह्यूम समीकरणों का उपयोग करके लीन बॉडी मास, वसा-मुक्त द्रव्यमान प्रतिशत और शरीर संरचना की गणना करें।"
},
  {
    slug: 'ideal-weight-calculator',
    name: { en: 'Ideal Weight Calculator', es: 'Calculadora de Peso Ideal', fr: 'Calculateur de Poids Idéal', de: 'Idealgewicht Rechner', ko: '이상 체중 계산기 (Ideal Weight Calculator)', hi: 'आदर्श वजन कैलकुलेटर (Ideal Weight Calculator)' },
    title: {
      en: 'Ideal Weight Calculator – Ideal Body Weight (IBW) by Height (kg/lbs)',
      es: 'Calculadora de Peso Ideal por Altura – Peso Corporal Ideal (IBW)',
      fr: 'Calculateur de Poids Idéal selon la Taille – Poids Idéal (IBW)',
      de: 'Idealgewicht Rechner nach Körpergröße – Ideales Körpergewicht (IBW)',
      ko: '이상 체중 계산기 (Ideal Weight Calculator) – 키별 권장 체중 (IBW)',
      hi: 'आदर्श वजन कैलकुलेटर - ऊंचाई के अनुसार आइडियल बॉडी वेट (IBW Calculator)'
    },
    description: {
      "en": "Free Ideal Weight Calculator (IBW Calculator). Calculate 'what is my ideal weight' by height and gender (female & male in kg/lbs) using Devine, Robinson, Miller & Hamwi formulas.",
      "es": "Calculadora gratuita de peso ideal por altura (IBW). Calcula tu peso ideal según tu altura y género (femenino y masculino en kg/lbs) utilizando las fórmulas de Devine, Robinson, Miller y Hamwi.",
      "fr": "Calculateur gratuit de poids idéal selon la taille (IBW). Calculez votre poids idéal selon votre taille et genre (femme et homme en kg/lbs) à l'aide des formules de Devine, Robinson, Miller et Hamwi.",
      "de": "Kostenloser Idealgewicht-Rechner nach Körpergröße (IBW). Berechnen Sie Ihr ideales Körpergewicht für Frauen und Männer in kg/lbs mit den Formeln von Devine, Robinson, Miller und Hamwi.",
      "ko": "무료 이상 체중 계산기 (IBW Calculator). Devine, Robinson, Miller 및 Hamwi 공식을 사용하여 신장과 성별(남성 및 여성, kg/lbs)에 따른 이상적인 체중 범위를 계산하세요.",
      "hi": "मुफ़्त आदर्श वजन कैलकुलेटर (IBW Calculator)। डिवाइन, रॉबिन्सन, मिलर और हमवी सूत्रों का उपयोग करके ऊंचाई और लिंग (महिला व पुरुष, kg/lbs) के अनुसार अपने अनुमानित आदर्श वजन की गणना करें।"
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
    name: { en: 'Calorie Deficit Calculator', es: 'Calculadora de Déficit Calórico', fr: 'Calculateur de Déficit Calorique', de: 'Kaloriendefizit Rechner', ko: '칼로리 적자 계산기 (Calorie Deficit Calculator)', hi: 'कैलोरी घाटा कैलकुलेटर' },
    title: { en: 'Calorie Deficit Calculator – Estimated Daily Calorie Planning', es: 'Calculadora de Déficit Calórico – Planificación Calórica Diaria', fr: 'Calculateur de Déficit Calorique – Planification Calorique', de: 'Kaloriendefizit Rechner – Täglicher Kalorienbedarf', ko: '무료 칼로리 적자 계산기 (Calorie Deficit Calculator)', hi: 'मुफ़्त कैलोरी घाटा कैलकुलेटर - अनुमानित दैनिक कैलोरी योजना' },
    description: {
      "en": "Free Calorie Calculator for weight loss, maintenance, and weight gain. Calculate daily calorie needs, macro breakdown, and calorie deficit target based on age, height, weight, and activity level.",
      "es": "Calculadora de calorías gratuita para perder peso, mantener peso y ganar peso. Calcula tus necesidades calóricas diarias, desglose de macronutrientes y déficit calórico según edad, altura, peso y actividad.",
      "fr": "Calculateur de calories gratuit pour la perte de poids, le maintien et la prise de masse. Calculez vos besoins caloriques quotidiens, vos macronutriments et votre objectif de déficit calorique.",
      "de": "Kostenloser Kalorienrechner zum Abnehmen, Gewicht halten und Zunehmen. Berechnen Sie Ihren täglichen Kalorienbedarf, Nährstoffverteilung und Ihr Kaloriendefizit nach Alter, Größe, Gewicht und Aktivität.",
      "ko": "체중 감량, 현재 체중 유지 및 체중 증가를 위한 무료 칼로리 계산기. 나이, 신장, 체중 및 활동량에 따른 일일 필요 칼로리, 영양소 비율 및 칼로리 소모 목표를 산출하세요.",
      "hi": "वजन घटाने, वजन बनाए रखने और वजन बढ़ाने के लिए मुफ़्त कैलोरी कैलकुलेटर। उम्र, ऊंचाई, वजन और गतिविधि स्तर के आधार पर दैनिक कैलोरी आवश्यकताओं, मैक्रो ब्रेकडाउन और कैलोरी घाटे की गणना करें।"
},
  {
    slug: 'protein-intake-calculator',
    name: { en: 'Protein Intake Calculator', es: 'Calculadora de Consumo de Proteínas', fr: 'Calculateur d\'Apport en Protéines', de: 'Täglicher Proteinbedarf Rechner', ko: '단백질 섭취량 계산기 (Protein Intake Calculator)', hi: 'प्रोटीन सेवन कैलकुलेटर' },
    title: { en: 'Protein Intake Calculator – Free Daily Protein Target Tool', es: 'Calculadora de Consumo de Proteínas Diario por Peso', fr: 'Calculateur d\'Apport en Protéines Gratuit', de: 'Protein Intake Rechner – Täglicher Eiweißbedarf', ko: '무료 단백질 섭취량 계산기 (Protein Intake Calculator)', hi: 'मुफ़्त प्रोटीन सेवन कैलकुलेटर - दैनिक प्रोटीन लक्ष्य' },
    description: {
      "en": "Free Daily Protein Intake Calculator. Calculate optimal daily protein intake in grams for muscle growth, fat loss, and athletic performance based on weight, fitness goals, and activity.",
      "es": "Calculadora de ingesta diaria de proteínas gratuita. Calcula la ingesta óptima de proteínas en gramos para ganar masa muscular, perder grasa y rendimiento deportivo según tu peso, objetivos y actividad.",
      "fr": "Calculateur d'apport quotidien en protéines gratuit. Calculez l'apport optimal en grammes pour la croissance musculaire, la perte de graisse et la performance selon votre poids et vos objectifs.",
      "de": "Kostenloser Proteinbedarf-Rechner. Berechnen Sie Ihre optimale tägliche Proteinmenge in Gramm für Muskelaufbau, Fettabbau und Sportleistung basierend auf Gewicht, Zielen und Aktivität.",
      "ko": "일일 일일 단백질 섭취량 무료 계산기. 체중, 피트니스 목표 및 활동량에 따라 근육 성장, 지방 감량 및 운동 수행 능력을 위한 최적의 단백질 섭취량(g)을 산출하세요.",
      "hi": "मुफ़्त दैनिक प्रोटीन सेवन कैलकुलेटर। वजन, फिटनेस लक्ष्यों और गतिविधि के आधार पर मांसपेशियों की वृद्धि, वसा हानि और एथलेटिक प्रदर्शन के लिए ग्राम में इष्टतम दैनिक प्रोटीन सेवन की गणना करें।"
},
  {
    slug: 'water-intake-calculator',
    name: { en: 'Daily Water Intake Calculator', es: 'Calculadora de Consumo de Agua Diario', fr: 'Calculateur d\'Hydratation Journalier', de: 'Täglicher Wasserbedarf Rechner', ko: '하루 물 섭취량 계산기', hi: 'दैनिक पानी का सेवन कैलकुलेटर' },
    title: { en: 'Daily Water Intake Calculator – Hydration by Weight Tool', es: 'Calculadora de Consumo de Agua Diario por Peso', fr: 'Calculateur d\'Hydratation selon le Poids', de: 'Wasserbedarf Rechner nach Körpergewicht – Täglicher Zielwert', ko: '하루 물 섭취량 계산기 (Water Intake Calculator by Weight)', hi: 'दैनिक पानी का सेवन कैलकुलेटर - वजन के अनुसार हाइड्रेशन' },
    description: {
      "en": "Free Daily Water Intake Calculator. Calculate recommended daily water consumption in liters, glasses, and ounces based on body weight, climate, exercise duration, and activity level.",
      "es": "Calculadora de ingesta diaria de agua gratuita. Calcula el consumo diario de agua recomendado en litros, vasos u onzas según el peso corporal, clima, duración del ejercicio y nivel de actividad.",
      "fr": "Calculateur d'apport quotidien en eau gratuit. Calculez la consommation d'eau quotidienne recommandée en litres, verres et onces selon le poids, le climat, la durée de l'exercice et l'activité.",
      "de": "Kostenloser Wasserbedarf-Rechner. Berechnen Sie die empfohlene tägliche Trinkmenge in Litern, Gläsern und Unzen basierend auf Körpergewicht, Klima, Trainingsdauer und Aktivitätslevel.",
      "ko": "일일 권장 수분 섭취량 무료 계산기. 체중, 기후, 운동 시간 및 일상 활동량에 따라 리터(L), 컵 및 온스 단위로 권장 일일 수분 섭취량을 계산하세요.",
      "hi": "मुफ़्त दैनिक पानी सेवन कैलकुलेटर। शरीर के वजन, जलवायु, व्यायाम की अवधि और गतिविधि स्तर के आधार पर लीटर, गिलास और औंस में अनुशंसित दैनिक पानी के सेवन की गणना करें।"
},
  {
    slug: 'macro-calculator',
    name: { en: 'Macro Calculator', es: 'Calculadora de Macros', fr: 'Calculateur de Macros', de: 'Makro Rechner', ko: '매크로 계산기', hi: 'मैक्रो कैलकुलेटर' },
    title: { en: 'Macro Calculator – Free Macronutrient & IIFYM Ratio Tool', es: 'Calculadora de Macros Gratis - Macronutrientes y IIFYM', fr: 'Calculateur de Macros Gratuit - Glucides Protéines Lipides', de: 'Kostenloser Makro Rechner – IIFYM Makronährstoff-Verteilung', ko: '무료 매크로 계산기 (Macro Calculator & IIFYM Split)', hi: 'मुफ़्त मैक्रो कैलकुलेटर - मैक्रोन्यूट्रिएंट और IIFYM अनुपात' },
    description: {
      "en": "Free Macronutrient Calculator (Macro Calculator). Calculate optimal daily carbs, protein, and fat grams for keto, balanced, high-protein, or low-carb diet goals based on TDEE.",
      "es": "Calculadora de macronutrientes (Macro Calculator) gratuita. Calcula los gramos diarios óptimos de carbohidratos, proteínas y grasas para dietas keto, equilibradas, altas en proteína o bajas en carbohidratos según tu TDEE.",
      "fr": "Calculateur de macronutriments (Macro Calculator) gratuit. Calculez les glucides, protéines et lipides quotidiens pour un régime céto, équilibré, hyperprotéiné ou faible en glucides basé sur le TDEE.",
      "de": "Kostenloser Makronährstoff-Rechner (Makro-Rechner). Berechnen Sie die optimale tägliche Menge an Kohlenhydraten, Proteinen und Fetten für Keto-, ausgewogene oder High-Protein-Ernährung basierend auf dem TDEE.",
      "ko": "무료 매크로 영양소 계산기 (Macro Calculator). TDEE를 바탕으로 키토, 균형 식단, 고단백 또는 저탄수화물 목표에 맞는 일일 탄수화물, 단백질, 지방 섭취량(g)을 산출하세요.",
      "hi": "मुफ़्त मैक्रोन्यूट्रिएंट कैलकुलेटर (Macro Calculator)। TDEE के आधार पर कीटो, संतुलित, उच्च-प्रोटीन या कम-कार्ब आहार लक्ष्यों के लिए इष्टतम दैनिक कार्ब्स, प्रोटीन और वसा ग्राम की गणना करें।"
},
  {
    slug: 'waist-to-hip-ratio-calculator',
    name: { en: 'Waist to Hip Ratio Calculator', es: 'Calculadora de Relación Cintura a Cadera', fr: 'Calculateur de Rapport Taille à Hanche', de: 'Taille-zu-Hüfte-Verhältnis Rechner', ko: '허리 엉덩이 비율 계산기 (WHR Calculator)', hi: 'कमर से कूल्हे का अनुपात कैलकुलेटर' },
    title: { en: 'Waist to Hip Ratio Calculator – Free WHO WHR Chart & Tool', es: 'Calculadora de Relación Cintura a Cadera - Tabla OMS WHR', fr: 'Calculateur de Rapport Taille à Hanche - Normes OMS WHR', de: 'Taille zu Hüfte Verhältnis Rechner – WHO WHR Tabelle', ko: '허리 엉덩이 비율 계산기 (Waist to Hip Ratio Calculator)', hi: 'कमर से कूल्हे का अनुपात कैलकुलेटर - WHO WHR चार्ट' },
    description: {
      "en": "Free Waist-to-Hip Ratio Calculator (WHR Calculator). Calculate your waist-to-hip ratio, body shape type (apple vs pear), and WHO cardiovascular health risk classification.",
      "es": "Calculadora de relación cintura-cadera (WHR) gratuita. Calcula tu índice cintura-cadera, tipo de silueta corporal (manzana vs pera) y clasificación de riesgo de salud cardiovascular según la OMS.",
      "fr": "Calculateur de rapport taille-hanche (RTH/WHR) gratuit. Calculez votre rapport taille-hanche, votre morphologie (pomme vs poire) et la classification des risques cardiovasculaires selon l'OMS.",
      "de": "Kostenloser Taille-Hüft-Verhältnis Rechner (WHR-Rechner). Berechnen Sie Ihr Taille-Hüft-Verhältnis, Ihren Körpertyp (Apfel vs. Birne) und die WHO-Kardiovaskulär-Risikoklassifizierung.",
      "ko": "무료 허리-엉덩이 둘레 비율 계산기 (WHR Calculator). 허리-엉덩이 비율(WHR), 체형 유형(사과형 vs 배형) 및 WHO 심혈관 건강 위험 범주를 정확하게 산출하세요.",
      "hi": "मुफ़्त कमर से कूल्हे के अनुपात का कैलकुलेटर (WHR Calculator)। अपने कमर-से-कूल्हे के अनुपात, शरीर के आकार के प्रकार (सेब बनाम नाशपाती), और डब्ल्यूएचओ हृदय स्वास्थ्य जोखिम वर्गीकरण की गणना करें।"
},
  {
    slug: 'body-surface-area-calculator',
    name: { en: 'Mosteller BSA Calculator (Square Root Method)', es: 'Calculadora BSA Método Mosteller (Metros Cuadrados)', fr: 'Calculateur BSA Formule Mosteller (Mètres Carrés)', de: 'Mosteller BSA Rechner (Quadratmeter)', ko: 'Mosteller 체표면적 계산기 (Square Meters BSA)', hi: 'मोस्टेलर BSA कैलकुलेटर (वर्ग मीटर)' },
    title: { en: 'Mosteller BSA Calculator (Square Root Method) – Body Surface Area m² Tool', es: 'Calculadora BSA Fórmula Mosteller en Metros Cuadrados (m²)', fr: 'Calculateur de Surface Corporelle BSA Formule Mosteller m²', de: 'Mosteller BSA Rechner Quadratmeter (m²) – Körperoberfläche', ko: 'Mosteller BSA 계산기 Square Meters (체표면적 계산기)', hi: 'मोस्टेलर BSA कैलकुलेटर square meters - बॉडी सरफेस एरिया' },
    description: {
      "en": "Free Body Surface Area Calculator (BSA Calculator). Calculate total body surface area in square meters (m²) using Mosteller, DuBois, Haycock, and Boyd clinical equations.",
      "es": "Calculadora de superficie corporal (BSA) gratuita. Calcula la superficie corporal total en metros cuadrados (m²) utilizando las ecuaciones clínicas de Mosteller, DuBois, Haycock y Boyd.",
      "fr": "Calculateur de surface corporelle (BSA) gratuit. Calculez la surface corporelle totale en mètres carrés (m²) à l'aide des équations cliniques de Mosteller, DuBois, Haycock et Boyd.",
      "de": "Kostenloser Körperoberflächen-Rechner (BSA-Rechner). Berechnen Sie die gesamte Körperoberfläche in Quadratmetern (m²) mit den klinischen Formeln nach Mosteller, DuBois, Haycock und Boyd.",
      "ko": "무료 체표면적 계산기 (BSA Calculator). Mosteller, DuBois, Haycock 및 Boyd 임상 공식을 사용하여 제곱미터(m²) 단위의 전체 체표면적을 산출하세요.",
      "hi": "मुफ़्त बॉडी सरफेस एरिया कैलकुलेटर (BSA Calculator)। मोस्टेलर, डुबॉइस, हेकॉक और बॉयड नैदानिक समीकरणों का उपयोग करके वर्ग मीटर (m²) में कुल शरीर के सतह क्षेत्र की गणना करें।"
},
  {
    slug: 'heart-rate-zone-calculator',
    name: { en: 'Karvonen Heart Rate Zone Calculator', es: 'Calculadora de Zonas Cardíacas Karvonen', fr: 'Calculateur de Zone Cardiaque Karvonen', de: 'Karvonen Herzfrequenzzonen Rechner', ko: 'Karvonen 심박수 zone 계산기', hi: 'कार्वोनेन हार्ट रेट ज़ोन कैलकुलेटर' },
    title: { en: 'Karvonen Heart Rate Zone Calculator – Target Heart Rate (HRR)', es: 'Calculadora de Zonas de Frecuencia Cardíaca Fórmula Karvonen', fr: 'Calculateur de Zone de Fréquence Cardiaque Formule Karvonen', de: 'Karvonen-Formel Herzfrequenzzonen Rechner – Zielpuls', ko: 'Karvonen 공식 타겟 심박수 zone 계산기 (Karvonen HR Zone)', hi: 'कार्वोनेन हार्ट रेट ज़ोन कैलकुलेटर - टारगेट हार्ट रेट' },
    description: {
      "en": "Free Heart Rate Zone Calculator. Calculate target training heart rate zones (Fat Burn, Aerobic, Anaerobic, Peak) based on age, resting heart rate, and maximum heart rate.",
      "es": "Calculadora de zonas de frecuencia cardíaca gratuita. Calcula tus zonas objetivo de entrenamiento (Quema de grasa, Aeróbica, Anaeróbica, Pico) según edad, frecuencia en reposo y frecuencia máxima.",
      "fr": "Calculateur de zones de fréquence cardiaque gratuit. Calculez vos zones cibles d'entraînement (Brûle-graisse, Aérobie, Anaérobie, Maximale) selon l'âge, le pouls au repos et la fréquence maximale.",
      "de": "Kostenloser Herzfrequenzzonen-Rechner. Berechnen Sie Ihre Ziel-Trainingszonen (Fettverbrennung, Aerob, Anaerob, Maximal) basierend auf Alter, Ruhepuls und maximaler Herzfrequenz.",
      "ko": "무료 심박수 구간 계산기. 나이, 안정시 심박수 및 최대 심박수를 바탕으로 목표 운동 심박수 구간(지방 burning, 유산소, 무산소, 최대 구간)을 정확하게 산출하세요.",
      "hi": "मुफ़्त हृदय गति क्षेत्र कैलकुलेटर। उम्र, विश्राम हृदय गति और अधिकतम हृदय गति के आधार पर लक्षित प्रशिक्षण हृदय गति क्षेत्रों (फैट बर्न, एरोबिक, एनारोबिक, पीक) की गणना करें।"
},
  {
    slug: 'karvonen-heart-rate-calculator',
    name: { en: 'Karvonen Heart Rate Calculator', es: 'Calculadora de Frecuencia Cardíaca Karvonen', fr: 'Calculateur de Fréquence Cardiaque Karvonen', de: 'Karvonen Herzfrequenz Rechner', ko: 'Karvonen 심박수 계산기', hi: 'कार्वोनेन हार्ट रेट कैलकुलेटर' },
    title: { en: 'Karvonen Heart Rate Calculator – Target HR & Reserve (HRR)', es: 'Calculadora de Frecuencia Cardíaca Karvonen – Zona y Reserva Cardíaca', fr: 'Calculateur Karvonen – Fréquence Cardiaque Cible et Réserve', de: 'Karvonen Herzfrequenz Rechner – Zielpuls & Reserve (HRR)', ko: 'Karvonen 심박수 계산기 – 타겟 심박수 및 예비 심박수 (HRR)', hi: 'कार्वोनेन हार्ट रेट कैलकुलेटर - टारगेट हार्ट रेट एवं रिजर्व' },
    description: {
      "en": "Free Karvonen Heart Rate Calculator. Calculate Target Heart Rate (THR) zones using the Karvonen formula (Heart Rate Reserve % method) by age and resting heart rate (BPM).",
      "es": "Calculadora de frecuencia cardíaca Karvonen gratuita. Calcula las zonas de frecuencia cardíaca objetivo (THR) utilizando la fórmula de Karvonen (método de Reserva de Frecuencia Cardíaca %) según edad y frecuencia en reposo (BPM).",
      "fr": "Calculateur de fréquence cardiaque Karvonen gratuit. Calculez les zones cibles (THR) avec la formule de Karvonen (méthode de Réserve de Fréquence Cardiaque %) selon l'âge et le pouls au repos.",
      "de": "Kostenloser Karvonen-Herzfrequenz-Rechner. Berechnen Sie Ihre Zielherzfrequenz (THR) mit der Karvonen-Formel (Herzfrequenzreserve-%-Methode) nach Alter und Ruhepuls (BPM).",
      "ko": "무료 카보넨(Karvonen) 심박수 계산기. 나이와 안정시 심박수(BPM)를 활용하여 카보넨 공식(심박수 예비능 % 측정법)으로 목표 운동 심박수 구간을 계산하세요.",
      "hi": "मुफ़्त कार्वोनेन हृदय गति कैलकुलेटर। उम्र और विश्राम हृदय गति (BPM) के अनुसार कार्वोनेन सूत्र (हृदय गति आरक्षित % विधि) का उपयोग करके लक्षित हृदय गति (THR) क्षेत्रों की गणना करें।"
},
  {
    slug: '1rm-calculator',
    name: { en: '1RM Calculator', es: 'Calculadora de 1RM', fr: 'Calculateur de 1RM', de: '1RM Rechner', ko: '1RM 계산기', hi: '1RM कैलकुलेटर' },
    title: { en: '1RM Calculator – One Rep Max (Bench Press, Squat, Deadlift)', es: 'Calculadora de 1RM – One Rep Max (Press, Sentadilla, Peso Muerto)', fr: 'Calculateur de 1RM – Rep Max (Développé Couché, Squat, Soulevé de Terre)', de: '1RM Rechner – Maximalkraft (Bankdrücken, Kniebeuge, Kreuzheben)', ko: '1RM 계산기 – 1 Rep Max 측정 (벤치프레스, 스쿼트, 데드리프트)', hi: '1RM कैलकुलेटर - वन रेप मैक्स (बेंच प्रेस, स्क्वाट, डेडलिफ्ट)' },
    description: {
      "en": "Free 1RM Calculator (One-Rep Max Calculator). Calculate one-rep max strength, weightlifting percentages, and rep max benchmarks using Epley and Brzycki equations.",
      "es": "Calculadora de 1RM (Máximo para una repetición) gratuita. Calcula tu fuerza máxima para 1 repetición, porcentajes de levantamiento y marcas de repetición utilizando las ecuaciones de Epley y Brzycki.",
      "fr": "Calculateur de 1RM (Maximum pour une répétition) gratuit. Calculez votre force maximale pour 1 répétition, vos pourcentages de musculation et repères de répétition avec les équations d'Epley et Brzycki.",
      "de": "Kostenloser 1RM-Rechner (Maximalkraft-Rechner). Berechnen Sie Ihre Maximalkraft für eine Wiederholung, Gewichtheber-Prozentwerte und Wiederholungs-Benchmarks mit Epley und Brzycki.",
      "ko": "무료 1RM(1회 최대 중량) 계산기. Epley 및 Brzycki 공식을 활용하여 1회 최대 근력, 웨이트 리프팅 중량 비율(%) 및 중량별 반복 횟수 기준을 산출하세요.",
      "hi": "मुफ़्त 1RM कैलकुलेटर (One-Rep Max Calculator)। इप्ले और ब्रिज़ीकी समीकरणों का उपयोग करके 1-रेप मैक्स ताकत, भारोत्तोलन प्रतिशत और रेप मैक्स बेंचमार्क की गणना करें।"
},
  {
    slug: 'one-rep-max-calculator',
    name: { en: '1RM Bench Press Calculator', es: 'Calculadora 1RM Press de Banca', fr: 'Calculateur 1RM Développé Couché', de: '1RM Bankdrücken Rechner', ko: '1RM 측정기 (1 Rep Max 계산기)', hi: '1RM बेंच प्रेस कैलकुलेटर' },
    title: { en: '1RM Bench Press Calculator – One Rep Max (Epley & Brzycki)', es: 'Calculadora 1RM Epley Press de Banca y Sentadilla', fr: 'Calculateur 1RM Epley Développé Couché', de: 'Epley 1RM Bankdrücken Rechner – Maximalkraft', ko: '1RM 측정기 – 무료 Epley 1 Rep Max 벤치프레스 계산기', hi: '1RM बेंच प्रेस कैलकुलेटर - वन रेप मैक्स' },
    description: {
      "en": "Free One-Rep Max Calculator & Bench Press 1RM Tool. Estimate max lift capacity, 5RM, 10RM strength levels, and training percentages based on weight lifted and reps completed.",
      "es": "Calculadora gratuita de 1RM y herramienta de press de banca. Estima tu capacidad máxima de levantamiento, niveles de fuerza 5RM y 10RM, y porcentajes de entrenamiento según peso y repeticiones.",
      "fr": "Calculateur gratuit de 1RM et outil de développé couché. Estimez votre capacité maximale de soulevé, vos niveaux 5RM et 10RM, et vos pourcentages d'entraînement selon le poids et les répétitions.",
      "de": "Kostenloser Maximalkraft-Rechner (1RM & Bankdrücken Tool). Schätzen Sie Ihre maximale Hebekapazität, 5RM- und 10RM-Kraftwerte sowie Trainings-Prozentsätze basierend auf Gewicht und Wiederholungen.",
      "ko": "무료 1회 최대 중량 및 벤치프레스 1RM 도구. 들어올린 중량과 반복 횟수를 바탕으로 최대 중량 수행 능력, 5RM, 10RM 근력 수준 및 훈련 비율(%)을 계산하세요.",
      "hi": "मुफ़्त वन-रेप मैक्स कैलकुलेटर और बेंच प्रेस 1RM टूल। उठाए गए वजन और पूरी की गई पुनरावृत्तियों के आधार पर अधिकतम लिफ्ट क्षमता, 5RM, 10RM शक्ति स्तर और प्रशिक्षण प्रतिशत का अनुमान लगाएं।"
},
  {
    slug: 'pregnancy-weight-gain-calculator',
    name: { en: 'Pregnancy Weight Gain Calculator', es: 'Aumento de Peso en Embarazo', fr: 'Poids de Grossesse', de: 'Schwangerschaftsgewichtsrechner', ko: '임산부 체중 증가 계산기', hi: 'गर्भावस्था वजन बढ़ना कैलकुलेटर' },
    title: { en: 'Pregnancy Weight Gain Calculator – Week-by-Week ACOG / IOM Tracker', es: 'Calculadora de Peso Saludable en Gestación', fr: 'Calculateur de Prise de Poids de Grossesse', de: 'Gewichtszunahme während der Schwangerschaft Rechner', ko: '임신 주수별 체중 증가 계산기', hi: 'गर्भावस्था के दौरान वजन बढ़ने का कैलकुलेटर' },
    description: { en: 'Free Pregnancy Weight Gain Calculator aligned with ACOG & IOM reference guidelines. Track week-by-week gestational weight accumulation by trimester and pre-pregnancy BMI.', es: 'Calculadora gratuita de peso saludable en gestación.', fr: 'Calculateur gratuit de prise de poids pendant la grossesse.', de: 'Kostenloser Gewichtszunahme während der Schwangerschaft Rechner.', ko: '무료 임신 주수별 체중 증가 계산기.', hi: 'मुफ़्त गर्भावस्था के दौरान वजन बढ़ने का कैलकुलेटर।' },
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
  }
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
