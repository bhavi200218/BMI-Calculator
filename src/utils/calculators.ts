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
    description: { en: 'Free Body Mass Index (BMI) Calculator. Calculate your Body Mass Index (BMI), BMI category, and healthy weight reference range based on WHO & CDC guidance. 100% free & private.', es: 'Calculadora de IMC gratis. Calcula tu Índice de Masa Corporal (IMC), categoría de IMC y rango de peso de referencia según la OMS y CDC.', fr: 'Calculateur d\'IMC gratuit. Calculez votre Indice de Masse Corporelle (IMC), catégorie et plage de poids de référence selon l\'OMS et le CDC.', de: 'Kostenloser BMI-Rechner. Berechnen Sie Ihren Body-Mass-Index (BMI), Ihre BMI-Kategorie und Ihren Referenzgewichtsbereich nach WHO- und CDC-Richtlinien.', ko: '무료 BMI 계산기. WHO 및 CDC 지침에 따라 BMI, BMI 범주 및 정상 체중 참조 범위를 계산하세요.', hi: 'मुफ़्त BMI कैलकुलेटर। WHO और CDC दिशानिर्देशों के आधार पर अपने बॉडी मास इंडेक्स (BMI), बीएमआई श्रेणी और स्वस्थ वजन सीमा का अनुमान लगाएं।' },
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
    slug: '3d-bmi-calculator',
    name: { en: '3D BMI Calculator', es: 'Calculadora IMC 3D', fr: 'Calculateur IMC 3D', de: '3D BMI Rechner', ko: '3D BMI 계산기', hi: '3D बीएमआई कैलकुलेटर' },
    title: { en: '3D BMI Calculator & 3D Body Visualizer by Height & Weight (360° Interactive Avatar)', es: 'Calculadora de IMC 3D y Visualizador Corporal 3D Gratuito (Modelo 360°)', fr: 'Calculateur IMC 3D et Visualiseur Corporel 3D Interactif (Avatar 360°)', de: '3D BMI Rechner & Interaktiver 3D-Körper-Visualisierer (360° Modell)', ko: '3D BMI 계산기 및 대화형 3D 체형 시각화 도구 (360° 아바타)', hi: '3D बीएमआई कैलकुलेटर और 3D बॉडी विजुअलाइज़र (360° इंटरएक्टिव अवतार)' },
    description: { 
      en: 'Free 3D Body Visualizer & 3D BMI Calculator. Calculate Body Mass Index (BMI), view 360° interactive front, side and back 3D avatar mesh, solid, wireframe & heatmap modes with Oxford 2.5 exponent scaling.', 
      es: 'Calculadora de IMC 3D gratuita y visualizador corporal 3D interactivo. Calcula tu índice de masa corporal y previsualiza tu avatar 3D en 360° en tiempo real.', 
      fr: 'Calculateur d\'IMC 3D gratuit et visualiseur corporel 3D interactif. Calculez votre IMC et prévisualisez votre avatar 3D à 360° en temps réel.', 
      de: 'Kostenloser 3D BMI Rechner & interaktiver 3D-Körper-Visualisierer. Berechnen Sie Ihren BMI und visualisieren Sie Ihr 3D-Körpermodell in 360° Echtzeit.', 
      ko: '무료 3D BMI 계산기 및 대화형 3D 체형 시각화 도구. 체질량지수를 계산하고 실시간 360° 3D 아바타 실루엣을 확인하세요.', 
      hi: 'मुफ़्त 3D बीएमआई कैलकुलेटर और इंटरएक्टिव 3D बॉडी विजुअलाइज़र। 360° फ्रंट, साइड और बैक 3D अवतार मॉडल में अपना बीएमआई तुरंत देखें।' 
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
    slug: 'diabetes-risk-calculator',
    name: { en: 'Asian BMI Cutoff Calculator 23', es: 'Calculadora de Umbral IMC Asiático 23', fr: 'Calculateur d\'IMC Asiatique 23', de: 'Asian BMI Cutoff 23 Rechner', ko: '아시아인 BMI Cutoff 23 계산기', hi: 'एशियाई बीएमआई कटऑफ 23 कैलकुलेटर' },
    title: { en: 'Asian BMI Cutoff Calculator 23 – WHO & IDF Diabetes Risk Tool', es: 'Calculadora de Umbral IMC Asiático 23 y Riesgo Diabetes', fr: 'Calculateur d\'IMC Asiatique 23 & Risque de Diabète', de: 'Asian BMI Cutoff 23 Rechner – WHO Diabetes Risiko', ko: 'Asian BMI Cutoff Calculator 23 – WHO & IDF 당뇨 위험도 계산기', hi: 'एशियाई बीएमआई कटऑफ 23 कैलकुलेटर - WHO एवं IDF डायबिटीज रिस्क' },
    description: { en: 'Free Asian BMI Cutoff Calculator 23. Calculate your WHO & IDF Asian BMI cutoff score (23 kg/m² overweight baseline) and evaluate Type 2 Diabetes screening risk.', es: 'Calculadora gratuita de umbral IMC asiático 23. Evalúa tu riesgo de diabetes según las normas de la OMS e IDF.', fr: 'Calculateur gratuit d\'IMC asiatique 23. Évaluez votre risque de diabète selon l\'OMS et l\'IDF.', de: 'Kostenloser Asian BMI Cutoff 23 Rechner. Berechnen Sie Ihr Diabetes-Risiko nach WHO-Standards.', ko: '무료 아시아인 BMI cutoff 23 계산기. WHO 및 IDF 아시아인 BMI 기준(23 kg/m²)으로 제2형 당뇨 위험도를 계산하세요.', hi: 'मुफ़्त एशियाई बीएमआई कटऑफ 23 कैलकुलेटर। WHO और IDF एशियाई बीएमआई मानक (23 kg/m²) के आधार पर टाइप 2 डायबिटीज जोखिम की सटीक गणना करें।' },
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
    name: { en: 'BMR Calculator (Basal Metabolic Rate)', es: 'Calculadora BMR (Tasa Metabólica Basal)', fr: 'Calculateur BMR (Taux Métabolique de Base)', de: 'BMR Rechner (Grundumsatz)', ko: 'BMR 계산기 (기초대사량)', hi: 'BMR कैलकुलेटर (बेसल मेटाबॉलिक रेट)' },
    title: { en: 'BMR Calculator – Free Basal Metabolic Rate Calculator', es: 'Calculadora BMR Gratis – Tasa Metabólica Basal', fr: 'Calculateur BMR Gratuit – Taux Métabolique de Base', de: 'BMR Rechner – Grundumsatz Berechnen Kostenlos', ko: '무료 BMR 계산기 – 기초대사량 계산기', hi: 'मुफ़्त BMR कैलकुलेटर – बेसल मेटाबॉलिक रेट' },
    description: { en: 'Free BMR Calculator (Basal Metabolic Rate Calculator). Calculate your estimated daily BMR burn using the clinical Mifflin-St Jeor formula equation.', es: 'Calculadora gratuita de BMR (tasa metabólica basal). Calcula tu metabolismo basal estimado con la fórmula clínica de Mifflin-St Jeor.', fr: 'Calculateur gratuit de BMR (taux métabolique de base). Calculez votre métabolisme de base estimé avec la formule Mifflin-St Jeor.', de: 'Kostenloser BMR Rechner (Grundumsatz). Berechnen Sie Ihren Grundumsatz präzise mit der klinischen Mifflin-St.Jeor Formel.', ko: '무료 BMR 계산기 (기초대사량 계산기). 임상 Mifflin-St Jeor 공식을 사용하여 하루 휴식 상태 기초대사량(BMR)을 계산하세요.', hi: 'मुफ़्त BMR कैलकुलेटर (बेसल मेटाबॉलिक रेट)। Mifflin-St Jeor समीकरण से अपने BMR की अनुमानित गणना करें।' },
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
    name: { en: 'TDEE Calculator', es: 'Calculadora de TDEE', fr: 'Calculateur de TDEE', de: 'TDEE-Rechner', ko: 'TDEE 계산기 (TDEE Calculator)', hi: 'टीडीईई कैलकुलेटर' },
    title: { en: 'TDEE Calculator – Total Daily Energy Expenditure Calculator', es: 'Calculadora de TDEE – Gasto Energético Total Diario', fr: 'Calculateur de TDEE – Dépense Énergétique Totale', de: 'TDEE Rechner – Gesamtenergiebedarf (Total Daily Energy Expenditure)', ko: '무료 TDEE 계산기 (TDEE Calculator)', hi: 'मुफ़्त टीडीईई कैलकुलेटर - Total Daily Energy Expenditure' },
    description: { en: 'Free TDEE Calculator. Calculate your estimated Total Daily Energy Expenditure (TDEE), maintenance calories, resting BMR burn, and daily caloric deficit or surplus goals.', es: 'Calculadora gratuita de TDEE. Calcula tu gasto energético total diario (TDEE) estimado, calorías de mantenimiento y quema basal.', fr: 'Calculateur gratuit de TDEE. Calculez votre dépense énergétique totale quotidienne estimée, calories de maintien et BMR.', de: 'Kostenloser TDEE-Rechner. Berechnen Sie Ihren Gesamtenergiebedarf (TDEE) geschätzt, täglichen Kalorienverbrauch und Grundumsatz.', ko: '무료 TDEE 계산기. 일일 총 에너지 소비량(TDEE) 추정치, 유지 칼로리, 기초대사량(BMR) 및 체중 감량/증량 타겟 수치를 계산하세요.', hi: 'मुफ़्त TDEE कैलकुलेटर। अपने अनुमानित Total Daily Energy Expenditure (TDEE), रखरखाव कैलोरी, बीएमआर और वजन घटाने के लक्ष्यों की गणना करें।' },
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
          { label: { en: 'Fat Loss Target (-500 kcal)', es: 'Objetivo Pérdida de Grasa', fr: 'Objectif Perte de Graisse', de: 'Fettabbau-Ziel (-500 kcal)', ko: '체지방 감량 타겟', hi: 'वसा हानि लक्ष्य' }, value: Math.round(tdee - 500), unit: 'kcal' },
          { label: { en: 'Muscle Gain Target (+300 kcal)', es: 'Objetivo Ganar Músculo', fr: 'Objectif Prise de Muscle', de: 'Muskelaufbau-Ziel (+300 kcal)', ko: '근육 증가 타겟', hi: 'मांसपेशी वृद्धि लक्ष्य' }, value: Math.round(tdee + 300), unit: 'kcal' }
        ]
      };
    }
  },
  {
    slug: 'body-fat-calculator',
    name: { en: 'Body Fat Calculator', es: 'Calculadora de Grasa Corporal', fr: 'Calculateur de Graisse Corporelle', de: 'Körperfett Rechner', ko: '체지방 계산기 (Body Fat Calculator)', hi: 'बॉडी फैट कैलकुलेटर' },
    title: { en: 'Body Fat Calculator – US Navy Body Fat Percentage Tool', es: 'Calculadora de Grasa Corporal – Porcentaje de Grasa US Navy', fr: 'Calculateur de Graisse Corporelle – Formule US Navy', de: 'Körperfett Rechner – US Navy Körperfettanteil Berechnen', ko: '무료 체지방 계산기 (Body Fat Calculator)', hi: 'मुफ़्त बॉडी फैट कैलकुलेटर - बॉडी फैट प्रतिशत' },
    description: { en: 'Free Body Fat Calculator. Calculate your estimated body fat percentage, fat mass, and lean mass using the official US Navy body fat formula and tape measure technique.', es: 'Calculadora gratuita de grasa corporal. Calcula tu porcentaje estimado de grasa corporal, masa grasa y masa magra con la fórmula oficial de la US Navy.', fr: 'Calculateur gratuit de graisse corporelle. Calculez votre pourcentage estimé de graisse corporelle, masse grasse et masse maigre avec la formule US Navy.', de: 'Kostenloser Körperfett-Rechner. Berechnen Sie Ihren geschätzten Körperfettanteil, Fettmasse und Muskelmasse mit der offiziellen US Navy Formel.', ko: '무료 체지방 계산기. 미 해군(US Navy) 체지방 공식을 사용하여 추정 체지방률(%), 체지방량, 제지방량을 계산하세요.', hi: 'मुफ़्त बॉडी फैट कैलकुलेटर। यूएस नेवी फॉर्मूला का उपयोग करके अपने अनुमानित बॉडी फैट प्रतिशत (%), वसा द्रव्यमान और लीन मास की गणना करें।' },
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
    name: { en: 'Ideal Weight Calculator', es: 'Calculadora de Peso Ideal', fr: 'Calculateur de Poids Idéal', de: 'Idealgewicht Rechner', ko: '이상 체중 계산기 (Ideal Weight Calculator)', hi: 'आदर्श वजन कैलकुलेटर' },
    title: { en: 'Ideal Weight Calculator – Calculate Ideal Body Weight (IBW)', es: 'Calculadora de Peso Ideal – Peso Corporal Ideal (IBW)', fr: 'Calculateur de Poids Idéal – Calculer le Poids Idéal (IBW)', de: 'Idealgewicht Rechner – Ideales Körpergewicht (IBW) berechnen', ko: '무료 이상 체중 계산기 (Ideal Weight Calculator)', hi: 'मुफ़्त आदर्श वजन कैलकुलेटर - आइडियल बॉडी वेट (IBW) की गणना करें' },
    description: { en: 'Free Ideal Weight Calculator. Calculate your estimated Ideal Body Weight (IBW) based on height and gender using clinical Devine, Robinson, Miller, and Hamwi equations.', es: 'Calculadora gratuita de peso ideal. Calcula tu peso corporal ideal (IBW) estimado según tu altura y género mediante las fórmulas clínicas de Devine y Robinson.', fr: 'Calculateur gratuit de poids idéal. Calculez votre poids idéal (IBW) estimé selon votre taille avec les formules de Devine et Robinson.', de: 'Kostenloser Idealgewicht-Rechner. Berechnen Sie Ihr ideales Körpergewicht (IBW) geschätzt nach Größe und Geschlecht mit den klinischen Devine- und Robinson-Formeln.', ko: '무료 이상 체중 계산기. Devine, Robinson 및 Miller 임상 공식을 사용하여 키와 성별에 따른 권장 체중(IBW)을 계산하세요.', hi: 'मुफ़्त आदर्श वजन कैलकुलेटर। Devine और Robinson की नैदानिक ​​दरों का उपयोग करके अपनी ऊंचाई और लिंग के अनुसार अपने अनुमानित आदर्श शरीर के वजन की गणना करें।' },
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
    title: { en: 'Calorie Deficit Calculator – Daily Deficit for Weight Loss', es: 'Calculadora de Déficit Calórico – Perder Peso de Forma Segura', fr: 'Calculateur de Déficit Calorique – Perte de Poids Rapide & Sûre', de: 'Kaloriendefizit Rechner – Täglicher Kalorienbedarf zum Abnehmen', ko: '무료 칼로리 적자 계산기 (Calorie Deficit Calculator)', hi: 'मुफ़्त कैलोरी घाटा कैलकुलेटर - वजन घटाने के लिए दैनिक कैलोरी घाटा' },
    description: { en: 'Free Calorie Deficit Calculator. Calculate your recommended daily calorie deficit for weight loss, maintenance calories (TDEE), resting metabolic burn (BMR), and safe fat loss rate.', es: 'Calculadora gratuita de déficit calórico. Calcula tu déficit calórico diario recomendado para perder peso de manera sostenible en función de tu BMR y TDEE.', fr: 'Calculateur gratuit de déficit calorique. Calculez votre déficit calorique quotidien recommandé pour perdre du poids selon votre BMR et TDEE.', de: 'Kostenloser Kaloriendefizit-Rechner. Berechnen Sie Ihr empfohlenes tägliches Kaloriendefizit zum Abnehmen basierend auf Grundumsatz (BMR) und TDEE.', ko: '무료 칼로리 적자 계산기. 체중 감량을 위한 일일 칼로리 적자(Calorie Deficit), TDEE, BMR 및 안전한 지방 감량 수치를 계산하세요.', hi: 'मुफ़्त कैलोरी घाटा कैलकुलेटर। अपने BMR और TDEE के आधार पर सुरक्षित वजन घटाने के लिए अपने अनुशंसित दैनिक कैलोरी घाटे (Calorie Deficit) की गणना करें।' },
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
          { label: { en: 'Est. Fat Loss Rate', es: 'Pérdida de Grasa Est.', fr: 'Taux de Perte de Graisse', de: 'Geschätzter Fettabbau', ko: '예상 체지방 감량률', hi: 'अनुमानित वसा हानि दर' }, value: displayLoss, unit: lossUnit },
          { label: { en: 'Maintenance (TDEE)', es: 'Mantenimiento (TDEE)', fr: 'Maintenance (TDEE)', de: 'Erhaltungskalorien (TDEE)', ko: '유지 에너지 (TDEE)', hi: 'रखरखाव (TDEE)' }, value: Math.round(tdee), unit: 'kcal' },
          { label: { en: 'Deficit Protein Target', es: 'Objetivo de Proteína', fr: 'Objectif Protéines Déficit', de: 'Protein-Ziel im Defizit', ko: '적자 시 단백질 목표', hi: 'घाटे में प्रोटीन लक्ष्य' }, value: proteinGuard, unit: 'g/day' }
        ]
      };
    }
  },
  {
    slug: 'protein-intake-calculator',
    name: { en: 'Protein Intake Calculator', es: 'Calculadora de Consumo de Proteínas', fr: 'Calculateur d\'Apport en Protéines', de: 'Täglicher Proteinbedarf Rechner', ko: '단백질 섭취량 계산기 (Protein Intake Calculator)', hi: 'प्रोटीन सेवन कैलकुलेटर' },
    title: { en: 'Protein Intake Calculator – Free Daily Protein Target Tool', es: 'Calculadora de Consumo de Proteínas Diario por Peso', fr: 'Calculateur d\'Apport en Protéines Gratuit', de: 'Protein Intake Rechner – Täglicher Eiweißbedarf', ko: '무료 단백질 섭취량 계산기 (Protein Intake Calculator)', hi: 'मुफ़्त प्रोटीन सेवन कैलकुलेटर - दैनिक प्रोटीन लक्ष्य' },
    description: { en: 'Free Protein Intake Calculator. Calculate how much protein do I need daily based on body weight, fitness goal (muscle gain, fat loss, maintenance), and activity level.', es: 'Calculadora gratuita de consumo de proteínas. Calcula cuánta proteína necesitas al día según tu peso y objetivos de masa muscular.', fr: 'Calculateur gratuit d\'apport en protéines. Calculez vos besoins quotidiens en protéines pour le muscle ou la perte de poids.', de: 'Kostenloser Protein Intake Rechner. Berechnen Sie Ihren täglichen Eiweißbedarf nach Körpergewicht und Fitnesszielen.', ko: '무료 단백질 섭취량 계산기. 근육 증가, 체중 감량 및 유지 목표에 맞는 일일 권장 단백질 섭취량(g)을 계산하세요.', hi: 'मुफ़्त प्रोटीन सेवन कैलकुलेटर। वजन घटाने, मांसपेशियों के निर्माण या रखरखाव के लिए अपने दैनिक प्रोटीन लक्ष्य की सटीक गणना करें।' },
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
    description: { en: 'Free Water Intake Calculator. Calculate how much water should I drink daily based on body weight, activity level, and climate using clinical hydration formulas.', es: 'Calculadora gratuita de consumo de agua diario. Calcula cuánta agua debes beber al día según tu peso y actividad física.', fr: 'Calculateur gratuit d\'hydratation journalière. Découvrez combien d\'eau boire par jour selon votre poids.', de: 'Kostenloser Wasserbedarf-Rechner. Berechnen Sie, wie viel Wasser Sie täglich nach Körpergewicht und Aktivität trinken sollten.', ko: '무료 하루 물 섭취량 계산기. 체중과 활동량에 따라 매일 마셔야 하는 수분 섭취량을 계산하세요.', hi: 'मुफ़्त पानी का सेवन कैलकुलेटर। अपने वजन और गतिविधि स्तर के आधार पर जाने कि आपको प्रतिदिन कितना पानी पीना चाहिए।' },
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
    description: { en: 'Free Macro Calculator. Calculate your target daily macronutrient split (carbs, protein, fat in grams) for muscle gain, weight loss, or IIFYM flexible dieting.', es: 'Calculadora de macros gratuita. Calcula tu distribución recomendada de macronutrientes (carbohidratos, proteínas y grasas) para perder peso o ganar músculo.', fr: 'Calculateur gratuit de macros. Calculez votre répartition ciblée en macronutriments (glucides, protéines, lipides en grammes).', de: 'Kostenloser Makro-Rechner. Berechnen Sie Ihre Makronährstoff-Verteilung (Kohlenhydrate, Eiweiß, Fett) für Muskelaufbau oder Abnehmen.', ko: '무료 매크로 계산기. 체중 감량, 근육 증가 및 IIFYM 식단을 위한 일일 탄단지 g(그램) 비율을 계산하세요.', hi: 'मुफ़्त मैक्रो कैलकुलेटर। वजन घटाने, मांसपेशियों के निर्माण या IIFYM फ्लेक्सिबल डाइट के लिए अपने दैनिक मैक्रोन्यूट्रिएंट विभाजन (कार्ब्स, प्रोटीन, वसा) की गणना करें।' },
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
    name: { en: 'Waist to Hip Ratio Calculator', es: 'Calculadora de Relación Cintura a Cadera', fr: 'Calculateur de Rapport Taille à Hanche', de: 'Taille-zu-Hüfte-Verhältnis Rechner', ko: '허리 엉덩이 비율 계산기 (WHR Calculator)', hi: 'कमर से कूल्हे का अनुपात कैलकुलेटर' },
    title: { en: 'Waist to Hip Ratio Calculator – Free WHO WHR Chart & Tool', es: 'Calculadora de Relación Cintura a Cadera - Tabla OMS WHR', fr: 'Calculateur de Rapport Taille à Hanche - Normes OMS WHR', de: 'Taille zu Hüfte Verhältnis Rechner – WHO WHR Tabelle', ko: '허리 엉덩이 비율 계산기 (Waist to Hip Ratio Calculator)', hi: 'कमर से कूल्हे का अनुपात कैलकुलेटर - WHO WHR चार्ट' },
    description: { en: 'Free Waist to Hip Ratio Calculator. Calculate your Waist to Hip Ratio (WHR) instantly and assess abdominal obesity and body fat distribution based on WHO guidelines.', es: 'Calculadora gratuita de relación cintura a cadera. Calcula tu WHR y evalúa el riesgo de obesidad abdominal según la OMS.', fr: 'Calculateur gratuit de rapport taille-hanche (WHR). Évaluez votre obésité abdominale selon les normes de l\'OMS.', de: 'Kostenloser Taille-zu-Hüfte-Verhältnis Rechner. Berechnen Sie Ihren WHR-Wert und bewerten Sie Ihr gesundheitliches Risiko nach WHO-Standards.', ko: '무료 허리 엉덩이 비율 계산기. WHR을 즉시 계산하고 WHO 표준에 따라 복부 비만 및 건강 위험을 진단하세요.', hi: 'मुफ़्त कमर से कूल्हे का अनुपात कैलकुलेटर। अपने WHR की तुरंत गणना करें और WHO मानकों के अनुसार पेट के मोटापे के जोखिम का आकलन करें।' },
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
    name: { en: 'Mosteller BSA Calculator (Square Root Method)', es: 'Calculadora BSA Método Mosteller (Metros Cuadrados)', fr: 'Calculateur BSA Formule Mosteller (Mètres Carrés)', de: 'Mosteller BSA Rechner (Quadratmeter)', ko: 'Mosteller 체표면적 계산기 (Square Meters BSA)', hi: 'मोस्टेलर BSA कैलकुलेटर (वर्ग मीटर)' },
    title: { en: 'Mosteller BSA Calculator (Square Root Method) – Body Surface Area m² Tool', es: 'Calculadora BSA Fórmula Mosteller en Metros Cuadrados (m²)', fr: 'Calculateur de Surface Corporelle BSA Formule Mosteller m²', de: 'Mosteller BSA Rechner Quadratmeter (m²) – Körperoberfläche', ko: 'Mosteller BSA 계산기 Square Meters (체표면적 계산기)', hi: 'मोस्टेलर BSA कैलकुलेटर square meters - बॉडी सरफेस एरिया' },
    description: { en: 'Free Mosteller BSA Calculator (Square Root Method). Simplified calculation of body surface area in pediatric & adult clinical care using Mosteller [√((height cm × weight kg) / 3600)] & Du Bois formulas.', es: 'Calculadora gratuita de superficie corporal (BSA) en metros cuadrados con la fórmula de Mosteller.', fr: 'Calculateur gratuit de surface corporelle (BSA) en mètres carrés selon la formule de Mosteller.', de: 'Kostenloser Mosteller BSA Rechner in Quadratmetern. Berechnen Sie Ihre Körperoberfläche (m²) nach der Mosteller-Formel.', ko: '무료 Mosteller BSA 계산기 (Square Meters). 공식 Mosteller 및 Du Bois 공식을 사용하여 체표면적(m²)을 정확하게 계산하세요.', hi: 'मुफ़्त मोस्टेलर BSA कैलकुलेटर square meters। नैदानिक मोस्टेलर फॉर्मूला का उपयोग करके अपने शरीर के सतह क्षेत्र (m²) की सटीक गणना करें।' },
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
    description: { en: 'Free Karvonen Heart Rate Zone Calculator. Calculate all 5 target exercise heart rate zones, fat burn zone, and VO2 max using the clinical Karvonen formula and Heart Rate Reserve (HRR).', es: 'Calculadora gratuita de zonas de frecuencia cardíaca con la fórmula de Karvonen. Calcula tus zonas de entrenamiento y quema de grasa.', fr: 'Calculateur gratuit de zones de fréquence cardiaque selon la formule de Karvonen.', de: 'Kostenloser Karvonen-Formel Herzfrequenzzonen Rechner. Berechnen Sie Ihre Ziel-Pulsbereiche für Fettverbrennung und Ausdauer.', ko: '무료 Karvonen 공식 기반 타겟 심박수 zone 계산기. 임상 Karvonen 공식을 사용하여 유산소 및 체지방 연소 심박 구간을 계산하세요.', hi: 'मुफ़्त कार्वोनेन हार्ट रेट ज़ोन कैलकुलेटर। नैदानिक कार्वोनेन फॉर्मूला का उपयोग करके अपने व्यायाम के लक्षित हार्ट रेट ज़ोन की सटीक गणना करें।' },
    inputs: [
      { id: 'age', label: L.age, type: 'number', placeholder: '25' },
      { id: 'rhr', label: { en: 'Resting Heart Rate', es: 'Frecuencia Cardíaca en Reposo', fr: 'Fréquence Cardiaque Repos', de: 'Ruhepuls', ko: '안정시 심박수', hi: 'विश्राम हार्ट रेट' }, type: 'number', placeholder: '60' }
    ],
    calculate: (inputs) => {
      const age = parseInt(inputs.age) || 25;
      const rhr = parseInt(inputs.rhr) || parseInt(inputs.waist) || 60;
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
    slug: 'one-rep-max-calculator',
    name: { en: '1RM Bench Press Calculator', es: 'Calculadora 1RM Press de Banca', fr: 'Calculateur 1RM Développé Couché', de: '1RM Bankdrücken Rechner', ko: '1RM 측정기 (1 Rep Max 계산기)', hi: '1RM बेंच प्रेस कैलकुलेटर' },
    title: { en: '1RM Bench Press Calculator – One Rep Max (Epley & Brzycki)', es: 'Calculadora 1RM Epley Press de Banca y Sentadilla', fr: 'Calculateur 1RM Epley Développé Couché', de: 'Epley 1RM Bankdrücken Rechner – Maximalkraft', ko: '1RM 측정기 – 무료 Epley 1 Rep Max 벤치프레스 계산기', hi: '1RM बेंच प्रेस कैलकुलेटर - वन रेप मैक्स' },
    description: { en: 'Free 1RM Bench Press Calculator. Calculate your one rep max (1RM) bench press, squat, and deadlift using the Epley, Brzycki, and Lander formula equations.', es: 'Calculadora gratuita de 1RM con la fórmula de Epley para press de banca. Calcula tu peso máximo a una repetición.', fr: 'Calculateur gratuit de 1RM selon la formule d\'Epley pour le développé couché.', de: 'Kostenloser Epley 1RM Bankdrücken Rechner. Berechnen Sie Ihre Maximalkraft für 1 Rep mit der Epley-Formel.', ko: '무료 1RM 측정기 (1 Rep Max 계산기). 임상 Epley 1RM 공식을 사용하여 벤치프레스, 스쿼트, 데드리프트 1RM을 즉시 계산하세요.', hi: 'मुफ़्त 1RM बेंच प्रेस कैलकुलेटर। आधिकारिक एपले 1RM फॉर्मूला का उपयोग करके अपने 1RM की सटीक गणना करें।' },
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
    description: { en: 'Free Pregnancy Weight Gain Calculator aligned with ACOG & IOM clinical guidelines. Track week-by-week gestational weight accumulation by trimester and pre-pregnancy BMI.', es: 'Calculadora gratuita de peso saludable en gestación.', fr: 'Calculateur gratuit de prise de poids pendant la grossesse.', de: 'Kostenloser Gewichtszunahme während der Schwangerschaft Rechner.', ko: '무료 임신 주수별 체중 증가 계산기.', hi: 'मुफ़्त गर्भावस्था के दौरान वजन बढ़ने का कैलकुलेटर।' },
    inputs: [
      { id: 'weight', label: { en: 'Current Weight', es: 'Peso Actual', fr: 'Poids Actuel', de: 'Aktuelles Gewicht', ko: '현재 체중', hi: 'वर्तमान वजन' }, type: 'number', placeholder: '70' },
      { id: 'preweight', label: { en: 'Pre-pregnancy Weight', es: 'Peso Pre-embarazo', fr: 'Poids Avant Grossesse', de: 'Gewicht vor Schwangerschaft', ko: '임신 전 체중', hi: 'गर्भावस्था से पहले का वजन' }, type: 'number', placeholder: '60' },
      { id: 'age', label: { en: 'Pregnancy Week (1-40)', es: 'Semana de Embarazo (1-40)', fr: 'Semaine de Grossesse (1-40)', de: 'Schwangerschaftswoche (1-40)', ko: '임신 주수 (1-40)', hi: 'गर्भावस्था सप्ताह (1-40)' }, type: 'number', placeholder: '20' }
    ],
    calculate: (inputs, system) => {
      const curW = parseFloat(inputs.weight) || 0;
      const preW = parseFloat(inputs.preweight) || parseFloat(inputs.height) || 0;
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
    metricsTitle: { en: 'Health Analytics Studio', es: 'Centro de Análisis de Salud', fr: 'Studio d\'Analyses de Santé', de: 'Gesundheits-Analyse-Studio', ko: '상세 분석 건강 리포트', hi: 'स्वास्थ्य विश्लेषण स्टूडियो' }[lang],
    waiting: { en: 'Enter your details to see a clear, personalized health snapshot.', es: 'Ingresa tus datos para ver una vista clara y personalizada de tu salud.', fr: 'Saisissez vos informations pour obtenir un aperçu clair et personnalisé de votre santé.', de: 'Geben Sie Ihre Daten ein, um einen klaren, personalisierten Gesundheitsüberblick zu erhalten.', ko: '상세한 건강 상태를 한눈에 확인하려면 정보를 입력하세요.', hi: 'एक स्पष्ट, वैयक्तिक स्वास्थ्य Snapshot देखने के लिए अपनी जानकारी दर्ज करें।' }[lang],
    calcBtn: { en: 'Run Calculation', es: 'Ejecutar Cálculo', fr: 'Calculer', de: 'Berechnung ausführen', ko: '계산하기', hi: 'गणना चलाएं' }[lang]
  };
}
