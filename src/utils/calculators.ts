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
    title: { en: 'Free BMI Calculator - Accurate BMI Info', es: 'Calculadora de IMC Gratis', fr: 'Calculateur d\'IMC Gratuit', de: 'Kostenloser BMI-Rechner', ko: '무료 BMI 계산기', hi: 'बीएमआई कैलकुलेटर' },
    description: { en: 'Calculate Body Mass Index (BMI) easily.', es: 'Calcula tu Índice de Masa Corporal (IMC) fácilmente.', fr: 'Calculez votre indice de masse corporelle.', de: 'Berechnen Sie Ihren Body-Mass-Index.', ko: '체질량지수를 손쉽게 계산하세요.', hi: 'आसानी से अपने बॉडी मास इंडेक्स की गणना करें।' },
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
      const bmi = w / (hM * hM);
      const isM = inputs.gender === 'male';
      const age = parseInt(inputs.age) || 25;
      const bodyFat = (1.20 * bmi) + (0.23 * age) - (isM ? 16.2 : 5.4);
      const ideal = 22 * (hM * hM);

      let cat = { en: 'Normal', es: 'Saludable', fr: 'Normal', de: 'Normal', ko: '정상', hi: 'सामान्य' };
      if (bmi < 18.5) cat = { en: 'Underweight', es: 'Bajo Peso', fr: 'Sous-poids', de: 'Untergewicht', ko: '저체중', hi: 'कम वजन' };
      else if (bmi >= 25 && bmi < 30) cat = { en: 'Overweight', es: 'Sobrepeso', fr: 'Surpoids', de: 'Übergewicht', ko: '과체중', hi: 'अधिक वजन' };
      else if (bmi >= 30) cat = { en: 'Obese', es: 'Obesidad', fr: 'Obésité', de: 'Adipositas', ko: '비만', hi: 'मोटापा' };

      return {
        primary: { value: bmi.toFixed(1), label: { en: 'BMI Score', es: 'Puntaje de IMC', fr: 'Score d\'IMC', de: 'BMI-Wert', ko: 'BMI 점수', hi: 'बीएमआई स्कोर' } },
        secondary: [
          { label: { en: 'Classification', es: 'Clasificación', fr: 'Classification', de: 'Klassifizierung', ko: '분류', hi: 'वर्गीकरण' }, value: cat.en },
          { label: { en: 'Est. Body Fat', es: 'Grasa Estimada', fr: 'Graisse Corp. Est.', de: 'Körperfett', ko: '체지방률', hi: 'अनुमानित वसा' }, value: bodyFat.toFixed(1), unit: '%' },
          { label: { en: 'Ideal Weight', es: 'Peso Ideal', fr: 'Poids Idéal', de: 'Idealgewicht', ko: '이상적인 체중', hi: 'आदर्श वजन' }, value: ideal.toFixed(1), unit: system === 'imperial' ? 'lbs' : 'kg' }
        ]
      };
    }
  },
  {
    slug: 'bmr-calculator',
    name: { en: 'BMR Calculator', es: 'Calculadora de BMR', fr: 'Calculateur de BMR', de: 'BMR-Rechner', ko: 'BMR 계산기', hi: 'बीएमआर कैलकुलेटर' },
    title: { en: 'Accurate BMR Calculator - Basal Metabolic Rate', es: 'Calculadora de BMR y Metabolismo Basal', fr: 'Calculateur de BMR de Précision', de: 'BMR-Rechner und Grundumsatz', ko: 'BMR 계산기 - 기초대사량', hi: 'बीएमआर कैलकुलेटर - बेसल मेटाबॉलिक रेट' },
    description: { en: 'Determine your resting metabolic rate.', es: 'Determina tu metabolismo basal calórico.', fr: 'Calculez votre taux métabolique de base.', de: 'Ermitteln Sie Ihren kalorischen Grundumsatz.', ko: '기초 대사 에너지를 계산하세요.', hi: 'अपनी बेसल मेटाबॉलिक रेट को समझें।' },
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
        primary: { value: Math.round(bmr), label: { en: 'BMR Calorie Goal', es: 'BMR Calorías', fr: 'Calories BMR', de: 'BMR Grundumsatz', ko: '기초대사량 BMR', hi: 'बीएमआर कैलोरी' }, unit: 'kcal/day' },
        secondary: [
          { label: { en: 'Sedentary Burn', es: 'Quema Sedentaria', fr: 'Combustion Sédentaire', de: 'Ruhebedarf', ko: '비활동 기초 소모', hi: 'गतिहीन कैलोरी बर्न' }, value: Math.round(bmr * 1.2), unit: 'kcal' },
          { label: { en: 'Moderate Burn', es: 'Quema Moderada', fr: 'Combustion Modérée', de: 'Mäßiger Bedarf', ko: '보통 활동 소모', hi: 'मध्यम कैलोरी बर्न' }, value: Math.round(bmr * 1.55), unit: 'kcal' }
        ]
      };
    }
  },
  {
    slug: 'tdee-calculator',
    name: { en: 'TDEE Calculator', es: 'Calculadora de TDEE', fr: 'Calculateur de TDEE', de: 'TDEE-Rechner', ko: 'TDEE 계산기', hi: 'टीडीईई कैलकुलेटर' },
    title: { en: 'TDEE Calculator - Total Daily Energy Expenditure', es: 'Calculadora de TDEE y Gasto de Energía', fr: 'Calculateur de TDEE Précis', de: 'TDEE-Rechner Gesamtenergiebedarf', ko: 'TDEE 계산기 - 하루 칼로리 총량', hi: 'टीडीईई कैलकुलेटर - दैनिक ऊर्जा खर्च' },
    description: { en: 'Find your total daily calorie maintenance burn.', es: 'Calcula tu gasto calórico diario total.', fr: 'Calculez votre dépense énergétique quotidienne totale.', de: 'Berechnen Sie Ihren täglichen Kalorienbedarf.', ko: '하루 소비 에너지 에너지 총량을 알아봅니다.', hi: 'अपने दैनिक संपूर्ण कैलोरी खर्च की गणना करें।' },
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
        primary: { value: Math.round(tdee), label: { en: 'Daily TDEE Calories', es: 'TDEE Calorías Diarias', fr: 'Calories TDEE', de: 'TDEE Tagesbedarf', ko: '일일 칼로리 소모량', hi: 'दैनिक टीडीईई कैलोरी' }, unit: 'kcal/day' },
        secondary: [
          { label: { en: 'Basal Metabolic Rate', es: 'BMR Base', fr: 'Métabolisme de Base', de: 'Grundumsatz BMR', ko: '기초대사량', hi: 'बेसल मेटाबॉलिक रेट' }, value: Math.round(bmr), unit: 'kcal' },
          { label: { en: 'Bulking Goal', es: 'Subir Peso Goal', fr: 'Prise de masse', de: 'Kalorienüberschuss', ko: '벌크업 목표', hi: 'बल्किंग लक्ष्य' }, value: Math.round(tdee + 500), unit: 'kcal' },
          { label: { en: 'Cutting Goal', es: 'Bajar Peso Goal', fr: 'Sèche musculaire', de: 'Definieren/Abnehmen', ko: '데피니션 목표', hi: 'कटिंग लक्ष्य' }, value: Math.round(tdee - 500), unit: 'kcal' }
        ]
      };
    }
  },
  {
    slug: 'body-fat-calculator',
    name: { en: 'Body Fat Calculator', es: 'Calculadora de Grasa Corporal', fr: 'Calculateur de Graisse Corporelle', de: 'Körperfettrechner', ko: '체지방량 계산기', hi: 'शरीर वसा कैलकुलेटर' },
    title: { en: 'US Navy Body Fat Calculator - Healthy Measurement', es: 'Calculadora de Grasa Corporal del Método Navy', fr: 'Calculateur de Graisse Corporelle Navy', de: 'Körperfettanteil-Rechner US Navy', ko: '체지방률 계산기 미 해군 공식 적용', hi: 'अमेरिकी नौसेना शारीरिक वसा कैलकुलेटर' },
    description: { en: 'Calculate body fat percentage accurately.', es: 'Calcula tu porcentaje de grasa corporal según el método Navy.', fr: 'Calculez votre taux de masse grasse.', de: 'Bestimmen Sie Ihren Körperfettanteil.', ko: '체지방의 백분율 비율을 정밀 산출합니다.', hi: 'शरीर के वसा प्रतिशत को सटीक रूप से मापें।' },
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

      return {
        primary: { value: fat.toFixed(1), label: { en: 'Body Fat', es: 'Porcentaje de Grasa', fr: 'Taux de Matière Grasse', de: 'Körperfettanteil', ko: '체지방량 비율', hi: 'शारीरिक वसा प्रतिशत' }, unit: '%' },
        secondary: [
          { label: { en: 'Fat Mass', es: 'Masa Grasa', fr: 'Masse Grasse', de: 'Fettmasse', ko: '지방 질량', hi: 'वसा द्रव्यमान' }, value: 'Calculable', unit: 'kg/lbs' }
        ]
      };
    }
  },
  {
    slug: 'lean-body-mass-calculator',
    name: { en: 'Lean Body Mass Calculator', es: 'Calculadora de Masa Magra', fr: 'Calculateur de Masse Lean', de: 'Fettfreie Masse Rechner', ko: '제지방량 계산기', hi: 'लीन बॉडी मास कैलकुलेटर' },
    title: { en: 'Lean Body Mass Calculator - LBM Metric', es: 'Calculadora de Masa Corporal Magra', fr: 'Calculateur de Masse Corporelle Maigre', de: 'Rechner für fettfreie Körpermasse', ko: '제지방체중 계산기', hi: 'लीन बॉडी मास (LBM) कैलकुलेटर' },
    description: { en: 'Calculate your weight excluding body fat.', es: 'Calcula tu peso excluyendo grasa corporal.', fr: 'Calculez votre masse corporelle dégraissée.', de: 'Errechnen Sie Ihr Körpergewicht ohne Fett.', ko: '체지방을 뺀 순수 골격 및 장기 체중을 구합니다.', hi: 'शरीर की वसा को हटाकर अपने वास्तविक वजन की गणना करें।' },
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
    name: { en: 'Ideal Weight Calculator', es: 'Calculadora de Peso Ideal', fr: 'Calculateur de Poids Idéal', de: 'Idealgewicht-Rechner', ko: '이상적인 체중 계산기', hi: 'आदर्श वजन कैलकुलेटर' },
    title: { en: 'Ideal Weight Calculator - Target Fitness Calculator', es: 'Calculadora de Peso Corporal Ideal', fr: 'Calculateur de Poids Idéal Médical', de: 'Rechner für das ideale Körpergewicht', ko: '적정 몸무게 계산기', hi: 'आदर्श शारीरिक वजन कैलकुलेटर' },
    description: { en: 'Determine your healthiest weight range.', es: 'Determina tu rango de peso más saludable.', fr: 'Déterminez votre fourchette de poids de santé.', de: 'Bestimmen Sie Ihren gesunden Gewichtsbereich.', ko: '의학적으로 가장 건강한 권장 체중을 찾습니다.', hi: 'अपने सबसे स्वास्थ्यप्रद वजन सीमा का निर्धारण करें।' },
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

      // Devine Formula
      let devine = 0;
      if (inputs.gender === 'male') {
        devine = 50.0 + (2.3 * over5Ft);
      } else {
        devine = 45.5 + (2.3 * over5Ft);
      }

      // Robinson Formula
      let robinson = 0;
      if (inputs.gender === 'male') {
        robinson = 52.0 + (1.9 * over5Ft);
      } else {
        robinson = 49.0 + (1.7 * over5Ft);
      }

      const displayDevine = system === 'imperial' ? devine / 0.453592 : devine;
      const displayRobinson = system === 'imperial' ? robinson / 0.453592 : robinson;

      return {
        primary: { value: displayDevine.toFixed(1), label: { en: 'Ideal Weight (Devine)', es: 'Peso Ideal (Devine)', fr: 'Poids Idéal (Devine)', de: 'Gewicht (Devine)', ko: '권장 권고 체중(Devine)', hi: 'आदर्श वजन (Devine)' }, unit: system === 'imperial' ? 'lbs' : 'kg' },
        secondary: [
          { label: { en: 'Robinson Formula', es: 'Fórmula Robinson', fr: 'Formule Robinson', de: 'Robinson-Formel', ko: '로빈슨 공식 결과', hi: 'रॉबिन्सन फॉर्मूला' }, value: displayRobinson.toFixed(1), unit: system === 'imperial' ? 'lbs' : 'kg' }
        ]
      };
    }
  },
  {
    slug: 'calorie-calculator',
    name: { en: 'Calorie Calculator', es: 'Calculadora de Calorías', fr: 'Calculateur de Calories', de: 'Kalorienrechner', ko: '칼로리 계산기', hi: 'कैलोरी कैलकुलेटर' },
    title: { en: 'Calorie Target Calculator - Daily Food Intake', es: 'Calculadora de Objetivo de Calorías Diarias', fr: 'Calculateur de Déficit & Surplus Calorique', de: 'Kalorienrechner Tagesbedarf bestimmen', ko: '섭취 칼로리 계산기', hi: 'कैलोरी लक्ष्य कैलकुलेटर' },
    description: { en: 'Calculate target calories for fat loss or gain.', es: 'Calcula calorías necesarias para quemar grasa o ganar músculo.', fr: 'Calculez le déficit calorique pour perdre de la graisse.', de: 'Berechnen Sie Kalorienbedarf für Abnehmen oder Massephase.', ko: '체중 목표를 도달하기 위한 타겟 칼로리를 찾습니다.', hi: 'वजन घटाने या बढ़ाने के लिए लक्षित कैलोरी की गणना करें।' },
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
      if (inputs.goal === 'lose') targetCal = tdee - 500;
      else if (inputs.goal === 'gain') targetCal = tdee + 500;

      return {
        primary: { value: Math.round(targetCal), label: { en: 'Target Daily Calories', es: 'Objetivo Diario Calorías', fr: 'Objectif Calorique Journalier', de: 'Tägliche Zielkalorien', ko: '목표 일일 칼로리 수치', hi: 'लक्षित दैनिक कैलोरी' }, unit: 'kcal/day' },
        secondary: [
          { label: { en: 'Maintenance (TDEE)', es: 'Mantenimiento', fr: 'Maintenance', de: 'Erhaltungskalorien', ko: '유지 에너지(TDEE)', hi: 'रखरखाव (TDEE)' }, value: Math.round(tdee), unit: 'kcal' },
          { label: { en: 'Basal Burn (BMR)', es: 'Metabolismo Basal', fr: 'Métabolisme de Base', de: 'Grundumsatz BMR', ko: '기초적인 대사 에너지(BMR)', hi: 'बेसल बर्न (BMR)' }, value: Math.round(bmr), unit: 'kcal' }
        ]
      };
    }
  },
  {
    slug: 'protein-intake-calculator',
    name: { en: 'Protein Intake Calculator', es: 'Calculadora de Proteínas', fr: 'Calculateur de Protéines', de: 'Proteinrechner', ko: '단백질 섭취 계산기', hi: 'प्रोटीन सेवन कैलकुलेटर' },
    title: { en: 'Daily Protein Calculator - Macro Fitness Target', es: 'Calculadora de Consumo de Proteína Recomendado', fr: 'Calculateur d\'Apport en Protéines', de: 'Proteinbedarfsrechner täglich bestimmen', ko: '단백질 섭취량 계산기', hi: 'दैनिक प्रोटीन कैलकुलेटर' },
    description: { en: 'Calculate daily protein requirements.', es: 'Calcula los requerimientos diarios de proteínas.', fr: 'Calculez vos besoins quotidiens en protéines.', de: 'Berechnen Sie Ihren täglichen Eiweißbedarf.', ko: '하루 권장 단백질 섭취량을 알아봅니다.', hi: 'दैनिक प्रोटीन आवश्यकताओं की गणना करें।' },
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
    name: { en: 'Water Intake Calculator', es: 'Calculadora de Agua', fr: 'Calculateur d\'Eau', de: 'Wasserbedarfsrechner', ko: '수분 섭취 계산기', hi: 'पानी का सेवन कैलकुलेटर' },
    title: { en: 'Water Intake Calculator - Daily Hydration Target', es: 'Calculadora de Consumo de Agua Diario', fr: 'Calculateur d\'Hydratation Journalier', de: 'Täglicher Wasserbedarf Rechner', ko: '하루 물 섭취량 계산기', hi: 'पानी का सेवन कैलकुलेटर - दैनिक हाइड्रेशन' },
    description: { en: 'Compute your daily target hydration limit.', es: 'Calcula tu objetivo de hidratación corporal diario.', fr: 'Calculez vos besoins journaliers en eau.', de: 'Ermitteln Sie Ihre ideale tägliche Wassermenge.', ko: '하루 권장 물 마시기 목표를 계산합니다.', hi: 'अपने दैनिक लक्षित हाइड्रेशन सीमा की गणना करें।' },
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
    name: { en: 'Macro Calculator', es: 'Calculadora de Macros', fr: 'Calculateur de Macros', de: 'Makronährstoffrechner', ko: '매크로 영양소 계산기', hi: 'मैक्रो कैलकुलेटर' },
    title: { en: 'Macro Calculator - Carb, Protein & Fat Split', es: 'Calculadora de Macronutrientes y Dieta', fr: 'Calculateur de Macronutriments de Précision', de: 'Makroverteilung berechnen Proteine Kohlenhydrate', ko: '탄단지 스플릿 비율 계산기', hi: 'मैक्रो कैलकुलेटर - कार्ब, प्रोटीन और वसा' },
    description: { en: 'Partition your calories into carbs, protein, and fat.', es: 'Divide tus calorías en carbohidratos, proteínas y grasas.', fr: 'Répartissez vos calories en glucides, protéines et graisses.', de: 'Verteilen Sie Ihre Kalorien auf Makronährstoffe.', ko: '타겟 칼로리를 탄수화물, 단백질, 지방 비율로 분할합니다.', hi: 'अपनी कैलोरी को कार्ब्स, प्रोटीन और वसा में विभाजित करें।' },
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
    name: { en: 'Waist-to-Hip Ratio', es: 'Relación Cintura-Cadera', fr: 'Rapport Taille-Hanche', de: 'Taille-Hüft-Verhältnis', ko: '허리 엉덩이 비율 계산기', hi: 'कमर से कूल्हे का अनुपात' },
    title: { en: 'Waist-to-Hip Ratio Calculator - WHR Diagnostic', es: 'Calculadora de Relación Cintura-Cadera', fr: 'Calculateur de Rapport Taille-Hanche', de: 'Taille-Hüft-Verhältnis Rechner (WHR)', ko: '복부비만율 계산기 (WHR)', hi: 'कमर से कूल्हे का अनुपात कैलकुलेटर' },
    description: { en: 'Assess cardiovascular health risks using WHR.', es: 'Evalúa riesgos cardiovasculares con la relación cintura-cadera.', fr: 'Évaluez les risques cardiovasculaires avec le WHR.', de: 'Bewerten Sie kardiovaskuläre Risiken mit dem WHR.', ko: '복부 지방 분포 비율을 검사하여 예후를 진단합니다.', hi: 'WHR का उपयोग करके हृदय स्वास्थ्य जोखिमों का आकलन करें।' },
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
      let risk = { en: 'Low', es: 'Bajo', fr: 'Faible', de: 'Gering', ko: '낮음', hi: 'कम' };
      if (isM) {
        if (whr >= 0.9 && whr < 1.0) risk = { en: 'Moderate', es: 'Moderado', fr: 'Modéré', de: 'Mäßig', ko: '보통', hi: 'मध्यम' };
        else if (whr >= 1.0) risk = { en: 'High', es: 'Alto', fr: 'Élevé', de: 'Hoch', ko: '높음', hi: 'उच्च' };
      } else {
        if (whr >= 0.8 && whr < 0.85) risk = { en: 'Moderate', es: 'Moderado', fr: 'Modéré', de: 'Mäßig', ko: '보통', hi: 'मध्यम' };
        else if (whr >= 0.85) risk = { en: 'High', es: 'Alto', fr: 'Élevé', de: 'Hoch', ko: '높음', hi: 'उच्च' };
      }

      return {
        primary: { value: whr.toFixed(2), label: { en: 'Waist-to-Hip Ratio', es: 'Proporción Cintura-Cadera', fr: 'Rapport WHR', de: 'Taille-Hüft-Verhältnis', ko: '허리 대비 엉덩이 비', hi: 'कमर से कूल्हे का अनुपात' } },
        secondary: [
          { label: { en: 'Health Risk Level', es: 'Nivel de Riesgo', fr: 'Niveau de Risque', de: 'Risikostufe', ko: '비만 신체 리스크', hi: 'स्वास्थ्य जोखिम स्तर' }, value: risk.en }
        ]
      };
    }
  },
  {
    slug: 'body-surface-area-calculator',
    name: { en: 'Body Surface Area', es: 'Área de Superficie Corporal', fr: 'Surface Corporelle (BSA)', de: 'Körperoberfläche Rechner', ko: '체표면적 계산기 (BSA)', hi: 'बॉडी सरफेस एरिया कैलकुलेटर' },
    title: { en: 'Body Surface Area Calculator - BSA Metric', es: 'Calculadora de Área de Superficie Corporal', fr: 'Calculateur de Surface Corporelle', de: 'Körperoberflächen-Rechner BSA', ko: 'BSA 체양표면적 산정기', hi: 'बॉडी सरफेस एरिया कैलकुलेटर - BSA मीट्रिक' },
    description: { en: 'Calculate body surface area in square meters.', es: 'Calcula el área de superficie corporal en metros cuadrados.', fr: 'Calculez la surface corporelle en mètres carrés.', de: 'Berechnen Sie die Körperoberfläche in Quadratmetern.', ko: '총 평화 평수를 계산하여 약물 용량 등의 기준으로 씁니다.', hi: 'वर्ग मीटर में शरीर के सतह क्षेत्र की गणना करें।' },
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
      // Mosteller Formula
      const bsa = Math.sqrt((h * w) / 3600);

      return {
        primary: { value: bsa.toFixed(2), label: { en: 'Body Surface Area', es: 'Superficie Corporal', fr: 'Surface Corporelle', de: 'Körperoberfläche', ko: '체표면적 수치', hi: 'बॉडी सरफेस एरिया' }, unit: 'm²' },
        secondary: [
          { label: { en: 'Weight Input', es: 'Peso Registrado', fr: 'Poids Entré', de: 'Eingegebenes Gewicht', ko: '몸무게 설정값', hi: 'वजन इनपुट' }, value: w.toFixed(1), unit: 'kg' },
          { label: { en: 'Height Input', es: 'Altura Registrada', fr: 'Taille Entrée', de: 'Eingegebene Größe', ko: '신장 설정값', hi: 'ऊंचाई इनपुट' }, value: h.toFixed(1), unit: 'cm' }
        ]
      };
    }
  },
  {
    slug: 'heart-rate-zone-calculator',
    name: { en: 'Heart Rate Zones', es: 'Zonas de Frecuencia Cardíaca', fr: 'Zones de Fréquence Cardiaque', de: 'Herzfrequenzzonen Rechner', ko: '심박수 zone 계산기', hi: 'हार्ट रेट ज़ोन कैलकुलेटर' },
    title: { en: 'Target Heart Rate Zone Calculator - Fitness Training', es: 'Calculadora de Frecuencia Cardíaca Deportiva', fr: 'Calculateur de Zone de Fréquence Cardiaque', de: 'Kardio-Herzfrequenzzonen berechnen', ko: '운동용 타겟 심바크존 계산기', hi: 'लक्षित हार्ट रेट ज़ोन कैलकुलेटर' },
    description: { en: 'Determine your exercise target heart rate zones.', es: 'Determina tus zonas de ritmo cardíaco para entrenar.', fr: 'Calculez vos zones d\'entraînement cardiaque.', de: 'Bestimmen Sie Ihre optimalen Trainingsbereiche.', ko: '운동 목표에 맞는 심박수 5단계를 구합니다.', hi: 'अपने व्यायाम के लिए लक्षित हार्ट रेट ज़ोन का निर्धारण करें।' },
    inputs: [
      { id: 'age', label: L.age, type: 'number', placeholder: '25' }
    ],
    calculate: (inputs) => {
      const age = parseInt(inputs.age) || 25;
      const maxHr = 220 - age;

      return {
        primary: { value: maxHr, label: { en: 'Max Heart Rate', es: 'Frecuencia Cardíaca Máxima', fr: 'Fréquence Cardiaque Max', de: 'Maximale Herzfrequenz', ko: '최대 심박수', hi: 'अधिकतम हार्ट रेट' }, unit: 'bpm' },
        secondary: [
          { label: { en: 'Fat Burn (60-70%)', es: 'Zona Quema Grasa (60-70%)', fr: 'Brule Graisse (60-70%)', de: 'Fettverbrennung (60-70%)', ko: '체지방 연소 구간 (60-70%)', hi: 'फैट बर्न (60-70%)' }, value: `${Math.round(maxHr * 0.6)} - ${Math.round(maxHr * 0.7)}`, unit: 'bpm' },
          { label: { en: 'Aerobic (70-80%)', es: 'Zona Cardio (70-80%)', fr: 'Cardio (70-80%)', de: 'Fitness/Ausdauer (70-80%)', ko: '유산소 운동 구간 (70-80%)', hi: 'एरोबिक (70-80%)' }, value: `${Math.round(maxHr * 0.7)} - ${Math.round(maxHr * 0.8)}`, unit: 'bpm' }
        ]
      };
    }
  },
  {
    slug: 'one-rep-max-calculator',
    name: { en: 'One Rep Max', es: 'Calculadora de 1RM', fr: 'Calculateur de 1RM', de: 'Maximalkraft Rechner (1RM)', ko: '1RM 계산기 (최대 들기)', hi: 'वन रेप मैक्स कैलकुलेटर' },
    title: { en: 'One Rep Max Calculator - Strength Lift Diagnostic', es: 'Calculadora de Una Repetición Máxima (1RM)', fr: 'Calculateur de Charge Maximale 1RM', de: 'Maximalkraft-Rechner (1RM) Bankdrücken Kniebeugen', ko: '1RM 최대 근력 측정기', hi: 'वन रेप मैक्स कैलकुलेटर - स्ट्रेंथ लिफ्ट' },
    description: { en: 'Estimate weight lifting 1RM strength capability.', es: 'Calcula tu capacidad máxima de levantamiento (1RM).', fr: 'Estimez votre force maximale pour 1 répétition.', de: 'Ermitteln Sie Ihre maximale Kraftleistung für 1 Rep.', ko: '웨이트 트레이닝 시 최대 한 번 들 수 있는 무게를 구합니다.', hi: 'वजन उठाने की 1RM ताकत क्षमता का अनुमान लगाएं।' },
    inputs: [
      { id: 'weight', label: { en: 'Weight Lifted', es: 'Peso Levantado', fr: 'Charge Soulevée', de: 'Gewicht', ko: '리프팅 무게', hi: 'उठाया गया वजन' }, type: 'number', placeholder: '100' },
      { id: 'age', label: { en: 'Reps', es: 'Repeticiones', fr: 'Répétitions', de: 'Wiederholungen', ko: '반복 횟수(Reps)', hi: 'रेप्स' }, type: 'number', placeholder: '5' }
    ],
    calculate: (inputs, system) => {
      const w = parseFloat(inputs.weight) || 0;
      const r = parseInt(inputs.age) || 1; // using age input box for reps in 1RM

      // Epley Formula
      const oneRepMax = w * (1 + (r / 30));

      return {
        primary: { value: Math.round(oneRepMax), label: { en: 'Estimated 1RM', es: '1RM Estimado', fr: '1RM Estimé', de: 'Berechneter 1RM', ko: '추정 1RM 무게', hi: 'अनुमानित 1RM' }, unit: system === 'imperial' ? 'lbs' : 'kg' },
        secondary: [
          { label: { en: '85% Maximum (approx 5-6 Reps)', es: '85% del Máximo', fr: '85% de la force', de: '85% der Maximalkraft', ko: '85% 훈련 무게 (5~6회)', hi: '85% अधिकतम' }, value: Math.round(oneRepMax * 0.85), unit: system === 'imperial' ? 'lbs' : 'kg' }
        ]
      };
    }
  },
  {
    slug: 'pregnancy-weight-gain-calculator',
    name: { en: 'Pregnancy Weight Gain', es: 'Aumento de Peso en Embarazo', fr: 'Poids de Grossesse', de: 'Schwangerschaftsgewichtsrechner', ko: '임산부 체중 증가 계산기', hi: 'गर्भावस्था वजन बढ़ना कैलकुलेटर' },
    title: { en: 'Pregnancy Weight Gain Guide & Calculator', es: 'Calculadora de Peso Saludable en Gestación', fr: 'Calculateur de Prise de Poids de Grossesse', de: 'Gewichtszunahme während der Schwangerschaft Rechner', ko: '임신 주수별 체중 증가 계산기', hi: 'गर्भावस्था के दौरान वजन बढ़ने का कैलकुलेटर' },
    description: { en: 'Track recommended gestational weight accumulation.', es: 'Monitorea el aumento de peso recomendado en el embarazo.', fr: 'Suivez la prise de poids recommandée pendant la grossesse.', de: 'Verfolgen Sie die empfohlene Gewichtszunahme.', ko: '임신 후 아기와 산모의 주수별 권장 체중 증량을 측정합니다.', hi: 'गर्भावस्था के दौरान वजन बढ़ने की सीमा को ट्रैक करें।' },
    inputs: [
      { id: 'weight', label: { en: 'Current Weight', es: 'Peso Actual', fr: 'Poids Actuel', de: 'Aktuelles Gewicht', ko: '현재 체중', hi: 'वर्तमान वजन' }, type: 'number', placeholder: '70' },
      { id: 'height', label: { en: 'Pre-pregnancy Weight', es: 'Peso Pre-embarazo', fr: 'Poids Avant Grossesse', de: 'Gewicht vor Schwangerschaft', ko: '임신 전 체중', hi: 'गर्भावस्था से पहले का वजन' }, type: 'number', placeholder: '60' },
      { id: 'age', label: { en: 'Pregnancy Week', es: 'Semana de Embarazo', fr: 'Semaine de Grossesse', de: 'Schwangerschaftswoche', ko: '임신 주수 (Week)', hi: 'गर्भावस्था सप्ताह' }, type: 'number', placeholder: '20' }
    ],
    calculate: (inputs, system) => {
      const curW = parseFloat(inputs.weight) || 0;
      const preW = parseFloat(inputs.height) || 0; // reusing height input box for pre-pregnancy weight
      const week = parseInt(inputs.age) || 1;

      const diff = curW - preW;
      // Target based on week. Normal pre-pregnancy target is 11.5 - 16 kg (approx 25 - 35 lbs) total
      const minGain = (week / 40) * 11.5;
      const maxGain = (week / 40) * 16.0;

      const displayDiff = system === 'imperial' ? diff : diff;
      const targetMin = system === 'imperial' ? minGain : minGain;
      const targetMax = system === 'imperial' ? maxGain : maxGain;

      return {
        primary: { value: displayDiff.toFixed(1), label: { en: 'Current Gain', es: 'Ganancia Actual', fr: 'Gain Actuel', de: 'Aktuelle Zunahme', ko: '현재 증량 무게', hi: 'वर्तमान वजन बढ़ना' }, unit: system === 'imperial' ? 'lbs' : 'kg' },
        secondary: [
          { label: { en: 'Target Range for Week', es: 'Rango Recomendado para la Semana', fr: 'Fourchette Cible pour la Semaine', de: 'Empfohlene Zunahme für diese Woche', ko: '해당 주수의 적정 권장 범위', hi: 'सप्ताह के लिए लक्षित सीमा' }, value: `${targetMin.toFixed(1)} - ${targetMax.toFixed(1)}`, unit: system === 'imperial' ? 'lbs' : 'kg' }
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
    metricsTitle: { en: 'Health Analytics Studio', es: 'Centro de Análisis de Salud', fr: 'Studio d\'Analyses de Santé', de: 'Gesundheits-Analyse-Studio', ko: '상세 분석 건강 리포트', hi: 'स्वास्थ्य विश्लेषण स्टूडियो' }[lang],
    waiting: { en: 'Enter details and click Calculate.', es: 'Ingresa los datos y haz clic en Calcular.', fr: 'Remplissez les détails et calculez.', de: 'Details eingeben und auf Berechnen klicken.', ko: '정보를 다 입력한 뒤 단추를 선택하세요.', hi: 'जानकारी भरें और गणना पर क्लिक करें।' }[lang],
    calcBtn: { en: 'Run Calculation', es: 'Ejecutar Cálculo', fr: 'Calculer', de: 'Berechnung ausführen', ko: '계산하기', hi: 'गणना चलाएं' }[lang]
  };
}
