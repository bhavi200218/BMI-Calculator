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
    title: { en: 'BMI Calculator – Free & Accurate Body Mass Index Calculator', es: 'Calculadora de IMC Gratis - Índice de Masa Corporal Preciso', fr: 'Calculateur d\'IMC Gratuit - Indice de Masse Corporelle Précis', de: 'BMI Rechner - Kostenloser & Präziser Body-Mass-Index Rechner', ko: 'BMI 계산기 - 무료 & 정확한 체질량지수 계산기', hi: 'बीएमआई कैलकुलेटर - मुफ़्त & सटीक Body Mass Index Calculator' },
    description: { en: 'Free clinical BMI Calculator. Calculate your Body Mass Index (BMI), ideal weight, and body fat percentage instantly based on WHO & CDC standards. Supports kg/cm and lbs/inches.', es: 'Calculadora de IMC gratis y clínica. Calcula tu Índice de Masa Corporal (IMC), peso ideal y grasa corporal al instante según las normas de la OMS y CDC.', fr: 'Calculateur d\'IMC professionnel gratuit. Calculez votre indice de masse corporelle (IMC), votre poids idéal et votre taux de graisse selon les normes OMS et CDC.', de: 'Kostenloser klinischer BMI-Rechner. Berechnen Sie Ihren Body-Mass-Index (BMI), Idealgewicht und Körperfettanteil sofort nach WHO- und CDC-Standards.', ko: '무료 전문 BMI 계산기. WHO 및 CDC 표준에 따라 BMI, 이상 체중 및 체지방률을 즉시 계산하세요.', hi: 'मुफ़्त और सटीक बीएमआई कैलकुलेटर। WHO और CDC मानकों के आधार पर अपने बॉडी मास इंडेक्स (BMI), आदर्श वजन और शरीर की वसा का तुरंत अनुमान लगाएं।' },
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
    slug: 'new-bmi-calculator',
    name: { en: '3D BMI Calculator', es: 'Calculadora IMC 3D', fr: 'Calculateur IMC 3D', de: '3D BMI Rechner', ko: '3D BMI 계산기', hi: '3D बीएमआई कैलकुलेटर' },
    title: { en: 'Height Adjusted BMI Visualizer – 3D BMI & 2.5 Power Formula Calculator', es: 'Visualizador de IMC Ajustado por Altura - Calculadora IMC 3D', fr: 'Visualiseur d\'IMC Ajusté à la Taille - Calculateur IMC 3D', de: 'Höhenbereinigter BMI Visualizer – 3D BMI & 2.5-Potenz-Formel', ko: '신장 보정 BMI 시각화 도구 (Height Adjusted BMI Visualizer)', hi: 'ऊंचाई-समायोजित बीएमआई विजुअलाइज़र - 3D बीएमआई कैलकुलेटर' },
    description: { en: 'Calculate your height adjusted BMI and preview your body in 3D. Free Height Adjusted BMI Visualizer using Oxford 2.5 power formula (1.3 × weight / height²·⁵).', es: 'Calcula tu IMC ajustado por altura y visualiza tu cuerpo en 3D con nuestro visualizador de IMC ajustado por altura.', fr: 'Calculez votre IMC ajusté à la taille et visualisez votre corps en 3D.', de: 'Berechnen Sie Ihren höhenbereinigten BMI und visualisieren Sie Ihren Körper in 3D.', ko: '신장 보정 BMI를 계산하고 3D로 체형을 확인하세요. 옥스포드 2.5 공식 기반 신장 보정 BMI 시각화 도구.', hi: 'अपनी ऊंचाई-समायोजित बीएमआई की गणना करें और 3D में अपने शरीर का पूर्वावलोकन करें।' },
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
    slug: 'diabetes-risk-calculator',
    name: { en: 'Diabetes Risk Tool', es: 'Riesgo Diabetes', fr: 'Risque Diabète', de: 'Diabetes-Risiko', ko: '당뇨 위험도', hi: 'डायबिटीज रिस्क' },
    title: { en: 'Type 2 Diabetes Risk Calculator – IDF & WHO Global Guidelines', es: 'Calculadora de Riesgo de Diabetes Tipo 2', fr: 'Calculateur de Risque de Diabète de Type 2', de: 'Typ-2-Diabetes-Risiko-Rechner', ko: '제2형 당뇨병 위험도 계산기', hi: 'टाइप 2 डायबिटीज जोखिम कैलकुलेटर - अंतर्राष्ट्रीय IDF एवं WHO मानक' },
    description: { en: 'Assess your Type 2 Diabetes screening risk based on BMI, waist circumference, age, and Asian/South Asian ethnicity cutoffs aligned with global IDF & WHO standards.', es: 'Evalúa tu riesgo de diabetes tipo 2 según IMC y circunferencia de cintura.', fr: 'Évaluez votre risque de diabète de type 2 selon l\'IMC et le tour de taille.', de: 'Bewerten Sie Ihr Typ-2-Diabetes-Risiko nach BMI und Taillenumfang.', ko: 'BMI 및 허리둘레 기준 제2형 당뇨 위험도를 측정하세요.', hi: 'बीएमआई, कमर की परिधि और एशियाई कटऑफ के आधार पर टाइप 2 डायबिटीज जोखिम का आकलन करें।' },
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
      
      let riskScore = 'Low Risk';
      if (bmi >= 27.5 || waist >= waistHigh || (bmi >= 23 && waist >= waistLimit && age >= 40)) {
        riskScore = 'High Risk';
      } else if (bmi >= 23 || waist >= waistLimit || age >= 45) {
        riskScore = 'Moderate Risk';
      }

      return {
        primary: { value: riskScore, label: { en: 'Diabetes Risk Status', es: 'Estado Riesgo Diabetes', fr: 'Statut Risque Diabète', de: 'Diabetes-Risikostatus', ko: '당뇨 위험도 상태', hi: 'डायबिटीज जोखिम स्थिति' } },
        secondary: [
          { label: { en: 'BMI Score', es: 'Puntaje IMC', fr: 'Score IMC', de: 'BMI-Wert', ko: 'BMI 점수', hi: 'बीएमआई स्कोर' }, value: bmi.toFixed(1) },
          { label: { en: 'Asian Cutoff', es: 'Umbral Asiático', fr: 'Seuil Asiatique', de: 'Asien-Schwellenwert', ko: '아시아인 기준', hi: 'एशियाई कटऑफ' }, value: '23.0 kg/m²' },
          { label: { en: 'Waist Risk', es: 'Riesgo Cintura', fr: 'Risque Tour Taille', de: 'Taillenrisiko', ko: '허리둘레 위험', hi: 'कमर का जोखिम' }, value: waist >= waistLimit ? 'Elevated' : 'Optimal' }
        ]
      };
    }
  },
  {
    slug: 'bmr-calculator',
    name: { en: 'BMR Calculator', es: 'Calculadora de BMR', fr: 'Calculateur de BMR', de: 'BMR-Rechner', ko: 'BMR 계산기', hi: 'बीएमआर कैलकुलेटर' },
    title: { en: 'Mifflin St Jeor BMR Calculator – Basal Metabolic Rate Calculator', es: 'Calculadora BMR Mifflin St Jeor - Metabolismo Basal Preciso', fr: 'Calculateur BMR Mifflin St Jeor - Taux Métabolique de Base', de: 'Mifflin-St.Jeor BMR-Rechner – Grundumsatz Berechnen', ko: '미플린 스토어 BMR 계산기 - 기초대사량 계산기', hi: 'मिफ्लिन सेंट ज्योर बीएमआर कैलकुलेटर - बेसल मेटाबॉलिक रेट' },
    description: { en: 'Free Mifflin St Jeor BMR Calculator. Calculate your exact Basal Metabolic Rate (BMR) using the clinical Mifflin-St Jeor equation to determine resting daily calorie burn.', es: 'Calculadora de BMR Mifflin St Jeor gratis. Calcula tu Metabolismo Basal (BMR) exacto usando la fórmula clínica de Mifflin-St Jeor.', fr: 'Calculateur de BMR Mifflin St Jeor gratuit. Calculez votre taux métabolique de base (BMR) exact.', de: 'Kostenloser Mifflin-St.Jeor BMR-Rechner. Berechnen Sie Ihren genauen Grundumsatz (BMR) mit der klinischen Formel.', ko: '무료 미플린 스토어 BMR 계산기. 임상 미플린 스토어 공식을 사용하여 기초대사량(BMR)을 정확하게 계산하세요.', hi: 'मुफ़्त मिफ्लिन सेंट ज्योर बीएमआर कैलकुलेटर। नैदानिक मिफ्लिन-सेंट ज्योर समीकरण का उपयोग करके अपने सटीक बेसल मेटाबॉलिक रेट की गणना करें।' },
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
    name: { en: 'US Navy Body Fat Formula Calculator', es: 'Calculadora de Grasa Corporal Método Navy', fr: 'Calculateur de Graisse Corporelle US Navy', de: 'US Navy Körperfett Rechner', ko: '미 해군 체지방 공식 계산기', hi: 'यूएस नेवी बॉडी फैट फॉर्मूला कैलकुलेटर' },
    title: { en: 'US Navy Body Fat Formula Calculator – Body Fat % Tool', es: 'Calculadora de Grasa Corporal Método US Navy - Porcentaje Preciso', fr: 'Calculateur de Graisse Corporelle Formule US Navy', de: 'US Navy Körperfettformel Rechner – Präzise Körperfett %', ko: '미 해군 체지방 공식 계산기 - 정확한 체지방률 측정', hi: 'यूएस नेवी बॉडी फैट फॉर्मूला कैलकुलेटर - शरीर वसा प्रतिशत' },
    description: { en: 'Free US Navy Body Fat Formula Calculator. Calculate your body fat percentage accurately using the official US Navy body fat formula equation and tape measure method.', es: 'Calculadora gratuita de grasa corporal con la fórmula de la US Navy. Calcula tu porcentaje de grasa corporal con precisión.', fr: 'Calculateur gratuit de graisse corporelle selon la formule de la US Navy.', de: 'Kostenloser US Navy Körperfett-Rechner. Berechnen Sie Ihren Körperfettanteil präzise mit der offiziellen US Navy Formel.', ko: '무료 미 해군 체지방 공식 계산기. 공식 미 해군 공식을 사용하여 체지방률을 정확하게 계산하세요.', hi: 'मुफ़्त यूएस नेवी बॉडी फैट फॉर्मूला कैलकुलेटर। आधिकारिक यूएस नेवी बॉडी फैट फॉर्मूला का उपयोग करके अपने बॉडी फैट प्रतिशत की सटीक गणना करें।' },
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
    name: { en: 'Devine Formula Ideal Weight Calculator', es: 'Calculadora de Peso Ideal Fórmula Devine', fr: 'Calculateur de Poids Idéal Formule Devine', de: 'Devine-Formel Idealgewicht Rechner', ko: 'Devine 공식 이상적인 체중 계산기', hi: 'डिवाइन फॉर्मूला आदर्श वजन कैलकुलेटर' },
    title: { en: 'Devine Formula Ideal Weight Calculator – Ideal Body Weight Tool', es: 'Calculadora de Peso Ideal Fórmula Devine - Peso Saludable', fr: 'Calculateur de Poids Idéal Formule Devine', de: 'Devine-Formel Idealgewicht-Rechner – Gesunder Bereich', ko: 'Devine 공식 이상적인 체중 계산기 (Ideal Weight Tool)', hi: 'डिवाइन फॉर्मूला आदर्श वजन कैलकुलेटर - आइडियल बॉडी वेट' },
    description: { en: 'Free Devine Formula Ideal Weight Calculator. Calculate what is my ideal weight for my height using the clinical Devine formula and Robinson IBW equations.', es: 'Calculadora gratuita de peso ideal con la fórmula de Devine. Encuentra tu peso corporal ideal según tu altura.', fr: 'Calculateur gratuit de poids idéal selon la formule de Devine. Découvrez votre poids idéal selon votre taille.', de: 'Kostenloser Devine-Formel Idealgewicht-Rechner. Berechnen Sie Ihr ideales Körpergewicht für Ihre Körpergröße.', ko: '무료 Devine 공식 기반 이상적인 체중 계산기. 키에 맞는 적정 권장 체중을 계산하세요.', hi: 'मुफ़्त डिवाइन फॉर्मूला आदर्श वजन कैलकुलेटर। अपनी ऊंचाई के लिए अपने आदर्श वजन की सटीक गणना करें।' },
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
    name: { en: 'Mosteller BSA Calculator (Square Meters)', es: 'Calculadora BSA Método Mosteller (Metros Cuadrados)', fr: 'Calculateur BSA Formule Mosteller (Mètres Carrés)', de: 'Mosteller BSA Rechner (Quadratmeter)', ko: 'Mosteller 체표면적 계산기 (Square Meters BSA)', hi: 'मोस्टेलर BSA कैलकुलेटर (वर्ग मीटर)' },
    title: { en: 'Mosteller BSA Calculator Square Meters – Body Surface Area Tool', es: 'Calculadora BSA Fórmula Mosteller en Metros Cuadrados (m²)', fr: 'Calculateur de Surface Corporelle BSA Formule Mosteller m²', de: 'Mosteller BSA Rechner Quadratmeter (m²) – Körperoberfläche', ko: 'Mosteller BSA 계산기 Square Meters (체표면적 계산기)', hi: 'मोस्टेलर BSA कैलकुलेटर square meters - बॉडी सरफेस एरिया' },
    description: { en: 'Free Mosteller BSA Calculator Square Meters. Calculate your body surface area (BSA m²) accurately using the clinical Mosteller formula and Du Bois equations.', es: 'Calculadora gratuita de superficie corporal (BSA) en metros cuadrados con la fórmula de Mosteller.', fr: 'Calculateur gratuit de surface corporelle (BSA) en mètres carrés selon la formule de Mosteller.', de: 'Kostenloser Mosteller BSA Rechner in Quadratmetern. Berechnen Sie Ihre Körperoberfläche (m²) nach der Mosteller-Formel.', ko: '무료 Mosteller BSA 계산기 (Square Meters). 공식 Mosteller 및 Du Bois 공식을 사용하여 체표면적(m²)을 정확하게 계산하세요.', hi: 'मुफ़्त मोस्टेलर BSA कैलकुलेटर square meters। नैदानिक मोस्टेलर फॉर्मूला का उपयोग करके अपने शरीर के सतह क्षेत्र (m²) की सटीक गणना करें।' },
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
    title: { en: 'Karvonen Heart Rate Zone Calculator – Target Heart Rate Tool', es: 'Calculadora de Zonas de Frecuencia Cardíaca Fórmula Karvonen', fr: 'Calculateur de Zone de Fréquence Cardiaque Formule Karvonen', de: 'Karvonen-Formel Herzfrequenzzonen Rechner – Zielpuls', ko: 'Karvonen 공식 타겟 심박수 zone 계산기 (Karvonen HR Zone)', hi: 'कार्वोनेन हार्ट रेट ज़ोन कैलकुलेटर - टारगेट हार्ट रेट' },
    description: { en: 'Free Karvonen Heart Rate Zone Calculator. Calculate your exercise target heart rate zones and fat burn zone using the clinical Karvonen formula and Heart Rate Reserve (HRR).', es: 'Calculadora gratuita de zonas de frecuencia cardíaca con la fórmula de Karvonen. Calcula tus zonas de entrenamiento y quema de grasa.', fr: 'Calculateur gratuit de zones de fréquence cardiaque selon la formule de Karvonen.', de: 'Kostenloser Karvonen-Formel Herzfrequenzzonen Rechner. Berechnen Sie Ihre Ziel-Pulsbereiche für Fettverbrennung und Ausdauer.', ko: '무료 Karvonen 공식 기반 타겟 심박수 zone 계산기. 임상 Karvonen 공식을 사용하여 유산소 및 체지방 연소 심박 구간을 계산하세요.', hi: 'मुफ़्त कार्वोनेन हार्ट रेट ज़ोन कैलकुलेटर। नैदानिक कार्वोनेन फॉर्मूला का उपयोग करके अपने व्यायाम के लक्षित हार्ट रेट ज़ोन की सटीक गणना करें।' },
    inputs: [
      { id: 'age', label: L.age, type: 'number', placeholder: '25' },
      { id: 'waist', label: { en: 'Resting Heart Rate (BPM)', es: 'Frecuencia Cardíaca en Reposo', fr: 'Fréquence Cardiaque Repos', de: 'Ruhepuls', ko: '안정시 심박수', hi: 'विश्राम हार्ट रेट' }, type: 'number', placeholder: '60' }
    ],
    calculate: (inputs) => {
      const age = parseInt(inputs.age) || 25;
      const rhr = parseInt(inputs.waist) || 60; // using waist slot for resting hr
      const maxHr = 220 - age;
      const hrr = Math.max(0, maxHr - rhr);

      const zone2Min = Math.round(rhr + (hrr * 0.6));
      const zone2Max = Math.round(rhr + (hrr * 0.7));
      const zone3Min = Math.round(rhr + (hrr * 0.7));
      const zone3Max = Math.round(rhr + (hrr * 0.8));

      return {
        primary: { value: maxHr, label: { en: 'Max Heart Rate (HRmax)', es: 'Frecuencia Cardíaca Máxima', fr: 'Fréquence Cardiaque Max', de: 'Maximale Herzfrequenz', ko: '최대 심박수', hi: 'अधिकतम हार्ट रेट' }, unit: 'bpm' },
        secondary: [
          { label: { en: 'Karvonen Fat Burn (Zone 2)', es: 'Zona Quema Grasa (60-70%)', fr: 'Zone Brûle-Graisse (60-70%)', de: 'Fettverbrennung Zone 2', ko: 'Karvonen 지방 연소 구간', hi: 'कार्वोनेन फैट बर्न ज़ोन' }, value: `${zone2Min} - ${zone2Max}`, unit: 'bpm' },
          { label: { en: 'Karvonen Aerobic (Zone 3)', es: 'Zona Cardio (70-80%)', fr: 'Zone Cardio (70-80%)', de: 'Aerobe Zone 3', ko: 'Karvonen 유산소 구간', hi: 'कार्वोनेन एरोबिक ज़ोन' }, value: `${zone3Min} - ${zone3Max}`, unit: 'bpm' },
          { label: { en: 'Heart Rate Reserve (HRR)', es: 'Reserva de Frecuencia Cardíaca', fr: 'Réserve Cardiaque (HRR)', de: 'Herzfrequenzreserve', ko: '심박 예비능 (HRR)', hi: 'हार्ट रेट रिजर्व' }, value: hrr, unit: 'bpm' }
        ]
      };
    }
  },
  {
    slug: 'one-rep-max-calculator',
    name: { en: 'Epley 1RM Bench Press Calculator', es: 'Calculadora 1RM Epley Press de Banca', fr: 'Calculateur 1RM Formule Epley Développé Couché', de: 'Epley 1RM Bankdrücken Rechner', ko: 'Epley 1RM 벤치프레스 계산기', hi: 'एपले 1RM बेंच प्रेस कैलकुलेटर' },
    title: { en: 'Epley 1RM Bench Press Calculator – 1 Rep Max Tool', es: 'Calculadora 1RM Epley Press de Banca y Sentadilla', fr: 'Calculateur 1RM Epley Développé Couché', de: 'Epley 1RM Bankdrücken Rechner – Maximalkraft', ko: 'Epley 1RM 벤치프레스 계산기 (Epley 1RM Calculator)', hi: 'एपले 1RM बेंच प्रेस कैलकुलेटर - वन रेप मैक्स' },
    description: { en: 'Free Epley 1RM Bench Press Calculator. Calculate your one rep max (1RM) bench press, squat, and deadlift using the official Epley 1RM formula equation.', es: 'Calculadora gratuita de 1RM con la fórmula de Epley para press de banca. Calcula tu peso máximo a una repetición.', fr: 'Calculateur gratuit de 1RM selon la formule d\'Epley pour le développé couché.', de: 'Kostenloser Epley 1RM Bankdrücken Rechner. Berechnen Sie Ihre Maximalkraft für 1 Rep mit der Epley-Formel.', ko: '무료 Epley 1RM 벤치프레스 계산기. 임상 Epley 1RM 공식을 사용하여 벤치프레스, 스쿼트, 데드리프트 1RM을 계산하세요.', hi: 'मुफ़्त एपले 1RM बेंच प्रेस कैलकुलेटर। आधिकारिक एपले 1RM फॉर्मूला का उपयोग करके अपने 1RM की सटीक गणना करें।' },
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

      return {
        primary: { value: Math.round(epley1RM), label: { en: 'Epley Estimated 1RM', es: '1RM Estimado Epley', fr: '1RM Estimé Epley', de: 'Epley 1RM Wert', ko: 'Epley 추정 1RM 무게', hi: 'एपले अनुमानित 1RM' }, unit: system === 'imperial' ? 'lbs' : 'kg' },
        secondary: [
          { label: { en: 'Brzycki Formula 1RM', es: '1RM Fórmula Brzycki', fr: '1RM Formule Brzycki', de: 'Brzycki 1RM Wert', ko: 'Brzycki 추정 1RM', hi: 'ब्रज़िकी 1RM' }, value: Math.round(brzycki1RM), unit: system === 'imperial' ? 'lbs' : 'kg' },
          { label: { en: '85% 1RM (5-6 Rep Target)', es: '85% del Máximo (5-6 Reps)', fr: '85% du 1RM (5-6 Reps)', de: '85% 1RM (5-6 Wdh)', ko: '85% 훈련 무게 (5~6회)', hi: '85% 1RM Target' }, value: Math.round(epley1RM * 0.85), unit: system === 'imperial' ? 'lbs' : 'kg' },
          { label: { en: '75% 1RM (10 Rep Target)', es: '75% del Máximo (10 Reps)', fr: '75% du 1RM (10 Reps)', de: '75% 1RM (10 Wdh)', ko: '75% 훈련 무게 (10회)', hi: '75% 1RM Target' }, value: Math.round(epley1RM * 0.75), unit: system === 'imperial' ? 'lbs' : 'kg' }
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
    waiting: { en: 'Enter your details to see a clear, personalized health snapshot.', es: 'Ingresa tus datos para ver una vista clara y personalizada de tu salud.', fr: 'Saisissez vos informations pour obtenir un aperçu clair et personnalisé de votre santé.', de: 'Geben Sie Ihre Daten ein, um einen klaren, personalisierten Gesundheitsüberblick zu erhalten.', ko: '상세한 건강 상태를 한눈에 확인하려면 정보를 입력하세요.', hi: 'एक स्पष्ट, वैयक्तिक स्वास्थ्य Snapshot देखने के लिए अपनी जानकारी दर्ज करें।' }[lang],
    calcBtn: { en: 'Run Calculation', es: 'Ejecutar Cálculo', fr: 'Calculer', de: 'Berechnung ausführen', ko: '계산하기', hi: 'गणना चलाएं' }[lang]
  };
}
