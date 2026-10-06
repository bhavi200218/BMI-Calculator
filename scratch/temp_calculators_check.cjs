var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  calculators: () => calculators,
  getCalculatorTranslations: () => getCalculatorTranslations,
  locales: () => locales
});
module.exports = __toCommonJS(stdin_exports);
const locales = ["en", "es", "fr", "de", "ko", "hi"];
const L = {
  weight: { en: "Weight", es: "Peso", fr: "Poids", de: "Gewicht", ko: "\uBAB8\uBB34\uAC8C", hi: "\u0935\u091C\u0928" },
  height: { en: "Height", es: "Altura", fr: "Taille", de: "Gr\xF6\xDFe", ko: "\uC2E0\uC7A5", hi: "\u090A\u0902\u091A\u093E\u0908" },
  age: { en: "Age", es: "Edad", fr: "\xC2ge", de: "Alter", ko: "\uB098\uC774", hi: "\u0906\u092F\u0941" },
  gender: { en: "Gender", es: "G\xE9nero", fr: "Genre", de: "Geschlecht", ko: "\uC131\uBCC4", hi: "\u0932\u093F\u0902\u0917" },
  male: { en: "Male", es: "Masculino", fr: "Homme", de: "M\xE4nnlich", ko: "\uB0A8\uC131", hi: "\u092A\u0941\u0930\u0941\u0937" },
  female: { en: "Female", es: "Femenino", fr: "Femme", de: "Weiblich", ko: "\uC5EC\uC131", hi: "\u092E\u0939\u093F\u0932\u093E" },
  waist: { en: "Waist Circumference", es: "Cintura", fr: "Taille (Tour)", de: "Taillenumfang", ko: "\uD5C8\uB9AC\uB458\uB808", hi: "\u0915\u092E\u0930 \u0915\u0940 \u092A\u0930\u093F\u0927\u093F" },
  hip: { en: "Hip Circumference", es: "Cadera", fr: "Hanches (Tour)", de: "H\xFCftumfang", ko: "\uC5C9\uB369\uC774\uB458\uB808", hi: "\u0915\u0942\u0932\u094D\u0939\u0947 \u0915\u0940 \u092A\u0930\u093F\u0927\u093F" },
  neck: { en: "Neck Circumference", es: "Cuello", fr: "Cou (Tour)", de: "Nackenumfang", ko: "\uBAA9\uB458\uB808", hi: "\u0917\u0930\u094D\u0926\u0928 \u0915\u0940 \u092A\u0930\u093F\u0927\u093F" },
  activity: { en: "Activity Level", es: "Nivel de Actividad", fr: "Niveau d'Activit\xE9", de: "Aktivit\xE4tsniveau", ko: "\uD65C\uB3D9\uB7C9", hi: "\u0917\u0924\u093F\u0935\u093F\u0927\u093F \u0938\u094D\u0924\u0930" },
  sedentary: { en: "Sedentary (Little/No Exercise)", es: "Sedentario", fr: "S\xE9dentaire", de: "Sitzend", ko: "\uD65C\uB3D9\uC774 \uC801\uC74C", hi: "\u0917\u0924\u093F\u0939\u0940\u0928" },
  light: { en: "Light Exercise (1-3 days/wk)", es: "Ligero", fr: "L\xE9ger", de: "Leicht", ko: "\uAC00\uBCBC\uC6B4 \uC6B4\uB3D9", hi: "\u0939\u0932\u094D\u0915\u093E \u0935\u094D\u092F\u093E\u092F\u093E\u092E" },
  moderate: { en: "Moderate Exercise (3-5 days/wk)", es: "Moderado", fr: "Mod\xE9r\xE9", de: "M\xE4\xDFig", ko: "\uBCF4\uD1B5 \uC6B4\uB3D9", hi: "\u092E\u0927\u094D\u092F\u092E \u0935\u094D\u092F\u093E\u092F\u093E\u092E" },
  active: { en: "Heavy Exercise (6-7 days/wk)", es: "Activo", fr: "Tr\xE8s actif", de: "Sehr aktiv", ko: "\u6FC0\uD55C \uC6B4\uB3D9", hi: "\u0938\u0915\u094D\u0930\u093F\u092F \u0935\u094D\u092F\u093E\u092F\u093E\u092E" },
  goal: { en: "Goal", es: "Objetivo", fr: "Objectif", de: "Ziel", ko: "\uBAA9\uD45C", hi: "\u0932\u0915\u094D\u0937\u094D\u092F" },
  loseWeight: { en: "Weight Loss", es: "Perder Peso", fr: "Perte de Poids", de: "Gewichtsverlust", ko: "\uCCB4\uC911 \uAC10\uB7C9", hi: "\u0935\u091C\u0928 \u0918\u091F\u093E\u0928\u093E" },
  maintainWeight: { en: "Maintenance", es: "Mantener Peso", fr: "Maintien", de: "Gewicht halten", ko: "\uD604\uC7AC \uCCB4\uC911 \uC720\uC9C0", hi: "\u0935\u091C\u0928 \u092C\u0928\u093E\u090F \u0930\u0916\u0928\u093E" },
  gainWeight: { en: "Weight Gain", es: "Ganar Peso", fr: "Gain de Poids", de: "Gewichtszunahme", ko: "\uCCB4\uC911 \uC99D\uAC00", hi: "\u0935\u091C\u0928 \u092C\u0922\u093C\u093E\u0928\u093E" }
};
const calculators = [
  {
    slug: "bmi-calculator",
    name: { en: "BMI Calculator", es: "Calculadora de IMC", fr: "Calculateur d'IMC", de: "BMI-Rechner", ko: "BMI \uACC4\uC0B0\uAE30", hi: "\u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930" },
    title: { en: "BMI Calculator \u2013 Free Body Mass Index Calculator", es: "Calculadora de IMC Gratis \u2013 \xCDndice de Masa Corporal", fr: "Calculateur d'IMC Gratuit \u2013 Indice de Masse Corporelle", de: "BMI Rechner \u2013 Kostenloser Body-Mass-Index Rechner", ko: "\uBB34\uB8CC BMI \uACC4\uC0B0\uAE30 \u2013 \uCCB4\uC9C8\uB7C9\uC9C0\uC218 \uACC4\uC0B0\uAE30", hi: "\u092E\u0941\u092B\u093C\u094D\u0924 BMI \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u2013 \u092C\u0949\u0921\u0940 \u092E\u093E\u0938 \u0907\u0902\u0921\u0947\u0915\u094D\u0938" },
    description: {
      "en": "Free Body Mass Index (BMI) Calculator. Calculate your Body Mass Index (BMI), BMI category, and healthy weight reference range based on WHO & CDC guidance. Free to use with privacy-focused, browser-based calculations.",
      "es": "Calculadora de \xCDndice de Masa Corporal (IMC) gratuita. Calcula tu IMC, categor\xEDa de IMC y rango de peso saludable basado en las gu\xEDas de la OMS y CDC. Uso gratuito con c\xE1lculos privados basados en el navegador sin registros.",
      "fr": "Calculateur gratuit d'Indice de Masse Corporelle (IMC). Calculez votre IMC, cat\xE9gorie d'IMC et plage de poids sant\xE9 selon les directives de l'OMS et du CDC. Gratuit et ax\xE9 sur la confidentialit\xE9 avec calculs sur navigateur.",
      "de": "Kostenloser Body-Mass-Index (BMI) Rechner. Berechnen Sie Ihren BMI, Ihre BMI-Kategorie und Ihren gesundes Gewicht Referenzbereich nach WHO- und CDC-Richtlinien. Kostenlos und datenschutzorientiert direkt im Browser.",
      "ko": "\uBB34\uB8CC \uCCB4\uC9C8\uB7C9\uC9C0\uC218(BMI) \uACC4\uC0B0\uAE30. WHO \uBC0F CDC \uC9C0\uCE68\uC5D0 \uB530\uB77C BMI, BMI \uBC94\uC8FC \uBC0F \uC815\uC0C1 \uCCB4\uC911 \uCC38\uC870 \uBC94\uC704\uB97C \uC0B0\uCD9C\uD558\uC138\uC694. \uAC00\uC785 \uC5C6\uC774 \uBE0C\uB77C\uC6B0\uC800 \uB0B4\uC5D0\uC11C \uC548\uC804\uD558\uAC8C \uAD6C\uB3D9\uB418\uB294 100% \uBB34\uB8CC \uB3C4\uAD6C\uC785\uB2C8\uB2E4.",
      "hi": "\u092E\u0941\u092B\u093C\u094D\u0924 \u092C\u0949\u0921\u0940 \u092E\u093E\u0938 \u0907\u0902\u0921\u0947\u0915\u094D\u0938 (BMI) \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930\u0964 \u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u0914\u0930 \u0938\u0940\u0921\u0940\u0938\u0940 \u0926\u093F\u0936\u093E\u0928\u093F\u0930\u094D\u0926\u0947\u0936\u094B\u0902 \u0915\u0947 \u0906\u0927\u093E\u0930 \u092A\u0930 \u0905\u092A\u0928\u0947 \u092C\u0940\u090F\u092E\u0906\u0908, \u092C\u0940\u090F\u092E\u0906\u0908 \u0936\u094D\u0930\u0947\u0923\u0940 \u0914\u0930 \u0938\u094D\u0935\u0938\u094D\u0925 \u0935\u091C\u0928 \u0938\u0940\u092E\u093E \u0915\u093E \u0905\u0928\u0941\u092E\u093E\u0928 \u0932\u0917\u093E\u090F\u0902\u0964 \u092E\u0941\u092B\u093C\u094D\u0924, \u0917\u094B\u092A\u0928\u0940\u092F\u0924\u093E-\u0915\u0947\u0902\u0926\u094D\u0930\u093F\u0924 \u0914\u0930 \u092C\u094D\u0930\u093E\u0909\u091C\u093C\u0930-\u0906\u0927\u093E\u0930\u093F\u0924 \u0917\u0923\u0928\u093E\u0964"
    },
    inputs: [
      { id: "weight", label: L.weight, type: "number", placeholder: "70" },
      { id: "height", label: L.height, type: "number", placeholder: "175" },
      { id: "age", label: L.age, type: "number", placeholder: "25" },
      { id: "gender", label: L.gender, type: "select", options: [{ value: "male", label: L.male }, { value: "female", label: L.female }] }
    ],
    calculate: (inputs, system) => {
      let w = parseFloat(inputs.weight) || 0;
      let h = parseFloat(inputs.height) || 0;
      if (system === "imperial") {
        w = w * 0.453592;
        h = h * 2.54;
      }
      const hM = h / 100;
      const bmi = hM > 0 ? w / (hM * hM) : 0;
      const isM = inputs.gender === "male";
      let cat = { en: "Normal weight (18.5 - 24.9)", es: "Peso normal (18.5 - 24.9)", fr: "Poids normal (18.5 - 24.9)", de: "Normalgewicht (18.5 - 24.9)", ko: "\uC815\uC0C1 \uCCB4\uC911 (18.5 - 24.9)", hi: "\u0938\u093E\u092E\u093E\u0928\u094D\u092F \u0935\u091C\u0928 (18.5 - 24.9)" };
      if (bmi < 18.5) cat = { en: "Underweight (< 18.5)", es: "Bajo peso (< 18.5)", fr: "Insuffisance pond\xE9rale (< 18.5)", de: "Untergewicht (< 18.5)", ko: "\uC800\uCCB4\uC911 (< 18.5)", hi: "\u0915\u092E \u0935\u091C\u0928 (< 18.5)" };
      else if (bmi >= 25 && bmi < 30) cat = { en: "Overweight (25.0 - 29.9)", es: "Sobrepeso (25.0 - 29.9)", fr: "Surpoids (25.0 - 29.9)", de: "\xDCbergewicht (25.0 - 29.9)", ko: "\uACFC\uCCB4\uC911 (25.0 - 29.9)", hi: "\u0905\u0927\u093F\u0915 \u0935\u091C\u0928 (25.0 - 29.9)" };
      else if (bmi >= 30) cat = { en: "Obesity (\u2265 30.0)", es: "Obesidad (\u2265 30.0)", fr: "Ob\xE9sit\xE9 (\u2265 30.0)", de: "Adipositas (\u2265 30.0)", ko: "\uBE44\uB9CC (\u2265 30.0)", hi: "\u092E\u094B\u091F\u093E\u092A\u093E (\u2265 30.0)" };
      const bodyFat = 1.2 * bmi + 0.23 * (parseFloat(inputs.age) || 25) - 10.8 * (isM ? 1 : 0) - 5.4;
      const ideal = 22 * (hM * hM);
      return {
        primary: { value: bmi.toFixed(1), label: { en: "BMI Score", es: "Puntaje de IMC", fr: "Score d'IMC", de: "BMI-Wert", ko: "BMI \uC810\uC218", hi: "\u092C\u0940\u090F\u092E\u0906\u0908 \u0938\u094D\u0915\u094B\u0930" } },
        secondary: [
          { label: { en: "Classification", es: "Clasificaci\xF3n", fr: "Classification", de: "Klassifizierung", ko: "\uBD84\uB958", hi: "\u0935\u0930\u094D\u0917\u0940\u0915\u0930\u0923" }, value: cat.en },
          { label: { en: "Est. Body Fat", es: "Grasa Estimada", fr: "Graisse Corp. Est.", de: "K\xF6rperfett", ko: "\uCCB4\uC9C0\uBC29\uB960", hi: "\u0905\u0928\u0941\u092E\u093E\u0928\u093F\u0924 \u0935\u0938\u093E" }, value: bodyFat.toFixed(1), unit: "%" },
          { label: { en: "Ideal Weight", es: "Peso Ideal", fr: "Poids Id\xE9al", de: "Idealgewicht", ko: "\uC774\uC0C1\uC801\uC778 \uCCB4\uC911", hi: "\u0906\u0926\u0930\u094D\u0936 \u0935\u091C\u0928" }, value: (system === "imperial" ? ideal / 0.453592 : ideal).toFixed(1), unit: system === "imperial" ? "lbs" : "kg" }
        ]
      };
    }
  },
  {
    slug: "3d-bmi-calculator",
    name: { en: "3D BMI Calculator", es: "Calculadora IMC 3D", fr: "Calculateur IMC 3D", de: "3D BMI Rechner", ko: "3D BMI \uACC4\uC0B0\uAE30", hi: "3D \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930" },
    title: { en: "3D BMI Calculator & Body Visualizer \u2013 Height & Weight Tool", es: "Calculadora IMC 3D y Visualizador Corporal", fr: "Calculateur IMC 3D et Visualiseur Corporel", de: "3D BMI Rechner & K\xF6rper-Visualisierer", ko: "3D BMI \uACC4\uC0B0\uAE30 \uBC0F \uCCB4\uD615 \uC2DC\uAC01\uD654 \uB3C4\uAD6C", hi: "3D \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u0914\u0930 \u092C\u0949\u0921\u0940 \u0935\u093F\u091C\u0941\u0905\u0932\u093E\u0907\u091C\u093C\u0930" },
    description: {
      "en": "Free 3D Body Visualizer & 3D BMI Calculator. Calculate Body Mass Index (BMI), view 360\xB0 interactive front, side and back 3D avatar mesh, solid, wireframe & heatmap modes with Oxford 2.5 exponent scaling. 100% free with browser-based privacy.",
      "es": "Calculadora de IMC 3D y visualizador corporal 3D interactivo gratuito. Calcula tu IMC, visualiza tu avatar 3D en 360\xB0 en modos de malla, s\xF3lido, estructura de alambre y mapa de calor con escalado de Oxford 2.5. 100% gratuito con privacidad basada en el navegador.",
      "fr": "Calculateur d'IMC 3D et visualiseur corporel 3D interactif gratuit. Calculez votre IMC, visualisez votre avatar 3D \xE0 360\xB0 en modes maillage, solide, fil de fer et carte thermique avec mise \xE0 l'\xE9chelle Oxford 2.5. 100% gratuit avec confidentialit\xE9 sur navigateur.",
      "de": "Kostenloser 3D BMI Rechner & interaktiver 3D-K\xF6rper-Visualisierer. Berechnen Sie Ihren BMI und betrachten Sie Ihr 360\xB0 3D-K\xF6rpermodell in Netz-, Solid-, Drahtmodell- und Heatmap-Modi mit Oxford 2.5 Skalierung. 100% kostenlos und datenschutzorientiert.",
      "ko": "\uBB34\uB8CC 3D BMI \uACC4\uC0B0\uAE30 \uBC0F \uB300\uD654\uD615 3D \uCCB4\uD615 \uC2DC\uAC01\uD654 \uB3C4\uAD6C. \uCCB4\uC9C8\uB7C9\uC9C0\uC218(BMI)\uB97C \uC0B0\uCD9C\uD558\uACE0 \uC625\uC2A4\uD3EC\uB4DC 2.5 \uACF5\uC2DD\uC744 \uC801\uC6A9\uD558\uC5EC 360\xB0 \uC804\uBA74, \uCE21\uBA74, \uD6C4\uBA74 3D \uC544\uBC14\uD0C0, \uC640\uC774\uC5B4\uD504\uB808\uC784 \uBC0F \uD788\uD2B8\uB9F5 \uBAA8\uB4DC\uB97C \uD655\uC778\uD558\uC138\uC694. \uBE0C\uB77C\uC6B0\uC800 \uB0B4 100% \uBB34\uB8CC \uBC0F \uAC1C\uC778\uC815\uBCF4 \uBCF4\uD638.",
      "hi": "\u092E\u0941\u092B\u093C\u094D\u0924 3D \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u0914\u0930 3D \u092C\u0949\u0921\u0940 \u0935\u093F\u091C\u0941\u0905\u0932\u093E\u0907\u091C\u093C\u0930\u0964 \u0905\u092A\u0928\u0947 \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902, \u0911\u0915\u094D\u0938\u092B\u094B\u0930\u094D\u0921 2.5 \u092B\u0949\u0930\u094D\u092E\u0942\u0932\u093E \u0915\u0947 \u0938\u093E\u0925 360\xB0 3D \u0905\u0935\u0924\u093E\u0930, \u0935\u093E\u092F\u0930\u092B\u094D\u0930\u0947\u092E \u0914\u0930 \u0939\u0940\u091F\u092E\u0948\u092A \u092E\u094B\u0921 \u092E\u0947\u0902 \u0905\u092A\u0928\u093E \u0936\u0930\u0940\u0930 \u0924\u0941\u0930\u0902\u0924 \u0926\u0947\u0916\u0947\u0902\u0964 100% \u092E\u0941\u092B\u093C\u094D\u0924 \u0914\u0930 \u092C\u094D\u0930\u093E\u0909\u091C\u093C\u0930-\u0906\u0927\u093E\u0930\u093F\u0924 \u0917\u094B\u092A\u0928\u0940\u092F\u0924\u093E\u0964"
    },
    inputs: [
      { id: "weight", label: L.weight, type: "number", placeholder: "70" },
      { id: "height", label: L.height, type: "number", placeholder: "175" },
      { id: "age", label: L.age, type: "number", placeholder: "25" },
      { id: "gender", label: L.gender, type: "select", options: [{ value: "male", label: L.male }, { value: "female", label: L.female }] }
    ],
    calculate: (inputs, system) => {
      let w = parseFloat(inputs.weight) || 0;
      let h = parseFloat(inputs.height) || 0;
      if (system === "imperial") {
        w = w * 0.453592;
        h = h * 2.54;
      }
      const hM = h / 100;
      const stdBmi = w / (hM * hM);
      const newBmi = 1.3 * w / Math.pow(hM, 2.5);
      const diff = newBmi - stdBmi;
      return {
        primary: { value: newBmi.toFixed(1), label: { en: "3D Height-Adjusted BMI", es: "IMC 3D Ajustado", fr: "IMC 3D Ajust\xE9", de: "3D-H\xF6hen-BMI", ko: "3D \uC2E0\uC7A5 \uBCF4\uC815 BMI", hi: "3D \u090A\u0902\u091A\u093E\u0908-\u0938\u092E\u093E\u092F\u094B\u091C\u093F\u0924 \u092C\u0940\u090F\u092E\u0906\u0908" } },
        secondary: [
          { label: { en: "Standard BMI", es: "IMC Est\xE1ndar", fr: "IMC Standard", de: "Standard-BMI", ko: "\uD45C\uC900 BMI", hi: "\u092E\u093E\u0928\u0915 \u092C\u0940\u090F\u092E\u0906\u0908" }, value: stdBmi.toFixed(1) },
          { label: { en: "Height Correction", es: "Correcci\xF3n Altura", fr: "Correction Taille", de: "H\xF6henkorrektur", ko: "\uC2E0\uC7A5 \uBCF4\uC815 \uCC28\uC774", hi: "\u090A\u0902\u091A\u093E\u0908 \u0938\u0941\u0927\u093E\u0930" }, value: (diff >= 0 ? "+" : "") + diff.toFixed(1), unit: "pts" }
        ]
      };
    }
  },
  {
    slug: "bmi-chart",
    name: {
      en: "BMI Chart & Table",
      es: "Tabla y Gr\xE1fico de IMC",
      fr: "Tableau et Graphique IMC",
      de: "BMI-Tabelle & Diagramm",
      ko: "BMI \uCC28\uD2B8 \uBC0F \uC9C4\uB2E8\uD45C",
      hi: "\u092C\u0940\u090F\u092E\u0906\u0908 \u091A\u093E\u0930\u094D\u091F \u0914\u0930 \u091F\u0947\u092C\u0932 (BMI Chart & Table)"
    },
    title: {
      en: "BMI Chart for Adults \u2013 Height & Weight Matrix (kg, cm, lbs)",
      es: "Tabla de IMC para Adultos \u2013 Matriz de Altura y Peso (kg, cm, lbs)",
      fr: "Tableau d'IMC pour Adultes \u2013 Matrice Taille et Poids (kg, cm, lbs)",
      de: "BMI-Tabelle f\xFCr Erwachsene \u2013 H\xF6he & Gewicht Matrix (kg, cm, lbs)",
      ko: "\uC131\uC778\uC6A9 BMI \uCC28\uD2B8 \u2013 \uC2E0\uC7A5 \uBC0F \uCCB4\uC911 \uD45C (kg, cm, lbs)",
      hi: "\u0935\u092F\u0938\u094D\u0915\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u092C\u0940\u090F\u092E\u0906\u0908 \u091A\u093E\u0930\u094D\u091F - \u090A\u0902\u091A\u093E\u0908 \u090F\u0935\u0902 \u0935\u091C\u0928 \u0924\u093E\u0932\u093F\u0915\u093E (kg, cm, lbs)"
    },
    description: {
      "en": "Official WHO BMI Chart for adults, men, and women. Interactive BMI scale calculator, height-weight metric lookup tables (kg & cm), WHO categories, and age reference guidance. Free to use with browser-based privacy.",
      "es": "Tabla oficial de IMC de la OMS para adultos, hombres y mujeres. Calculadora interactiva de escala de IMC, tablas de consulta de altura y peso en sistema m\xE9trico (kg y cm), categor\xEDas de la OMS y gu\xEDa de referencia por edad. Uso gratuito con privacidad en el navegador.",
      "fr": "Tableau d'IMC officiel de l'OMS pour adultes, hommes et femmes. Calculateur d'\xE9chelle d'IMC interactif, tableaux de consultation taille-poids en unit\xE9s m\xE9triques (kg et cm), cat\xE9gories de l'OMS et rep\xE8res d'\xE2ge. Gratuit avec confidentialit\xE9 sur navigateur.",
      "de": "Offizielle WHO BMI-Tabelle f\xFCr Erwachsene, M\xE4nner und Frauen. Interaktiver BMI-Skala-Rechner, Gr\xF6\xDFe-Gewicht-Referenztabellen in metrischen Einheiten (kg & cm), WHO-Kategorien und Altersreferenzwerte. Kostenlos und datenschutzorientiert im Browser.",
      "ko": "\uC131\uC778, \uB0A8\uC131 \uBC0F \uC5EC\uC131\uC744 \uC704\uD55C \uACF5\uC2DD WHO BMI \uCC28\uD2B8. \uB300\uD654\uD615 BMI \uC9C0\uC218 \uACC4\uC0B0\uAE30, \uC2E0\uC7A5-\uCCB4\uC911 \uBBF8\uD130\uBC95 \uC9C4\uB2E8\uD45C(kg & cm), WHO \uBC94\uC8FC \uBC0F \uC5F0\uB839\uBCC4 \uCC38\uC870 \uC9C0\uCE68\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uAC00\uC785 \uC5C6\uC774 \uBE0C\uB77C\uC6B0\uC800 \uB0B4 100% \uBB34\uB8CC \uAD6C\uB3D9.",
      "hi": "\u0935\u092F\u0938\u094D\u0915\u094B\u0902, \u092A\u0941\u0930\u0941\u0937\u094B\u0902 \u0914\u0930 \u092E\u0939\u093F\u0932\u093E\u0913\u0902 \u0915\u0947 \u0932\u093F\u090F \u0906\u0927\u093F\u0915\u093E\u0930\u093F\u0915 \u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u092C\u0940\u090F\u092E\u0906\u0908 \u091A\u093E\u0930\u094D\u091F\u0964 \u0907\u0902\u091F\u0930\u090F\u0915\u094D\u091F\u093F\u0935 \u092C\u0940\u090F\u092E\u0906\u0908 \u0938\u094D\u0915\u0947\u0932 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930, \u090A\u0902\u091A\u093E\u0908-\u0935\u091C\u0928 \u092E\u0940\u091F\u094D\u0930\u093F\u0915 \u0932\u0941\u0915\u0905\u092A \u091F\u0947\u092C\u0932 (kg \u0914\u0930 cm), \u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u0936\u094D\u0930\u0947\u0923\u093F\u092F\u093E\u0902 \u0914\u0930 \u0906\u092F\u0941 \u0938\u0902\u0926\u0930\u094D\u092D \u092E\u093E\u0930\u094D\u0917\u0926\u0930\u094D\u0936\u0928\u0964 \u092E\u0941\u092B\u093C\u094D\u0924, \u0917\u094B\u092A\u0928\u0940\u092F\u0924\u093E-\u0915\u0947\u0902\u0926\u094D\u0930\u093F\u0924 \u0914\u0930 \u092C\u094D\u0930\u093E\u0909\u091C\u093C\u0930-\u0906\u0927\u093E\u0930\u093F\u0924\u0964"
    },
    inputs: [
      { id: "weight", label: L.weight, type: "number", placeholder: "70" },
      { id: "height", label: L.height, type: "number", placeholder: "175" },
      { id: "age", label: L.age, type: "number", placeholder: "30" },
      { id: "gender", label: L.gender, type: "select", options: [{ value: "male", label: L.male }, { value: "female", label: L.female }] }
    ],
    calculate: (inputs, system) => {
      let w = parseFloat(inputs.weight) || 0;
      let h = parseFloat(inputs.height) || 0;
      if (system === "imperial") {
        w = w * 0.453592;
        h = h * 2.54;
      }
      const hM = h / 100;
      const bmi = hM > 0 ? w / (hM * hM) : 0;
      const isM = inputs.gender === "male";
      let category = "Healthy Weight (18.5 - 24.9)";
      if (bmi < 18.5) category = "Underweight (< 18.5)";
      else if (bmi >= 25 && bmi < 30) category = "Overweight (25.0 - 29.9)";
      else if (bmi >= 30 && bmi < 35) category = "Obesity Class I (30.0 - 34.9)";
      else if (bmi >= 35 && bmi < 40) category = "Obesity Class II (35.0 - 39.9)";
      else if (bmi >= 40) category = "Obesity Class III (\u2265 40.0)";
      const minHealthy = 18.5 * (hM * hM);
      const maxHealthy = 24.9 * (hM * hM);
      const conv = (v) => system === "imperial" ? v / 0.453592 : v;
      const unitStr = system === "imperial" ? "lbs" : "kg";
      return {
        primary: { value: bmi.toFixed(1), label: { en: "BMI Chart Score", es: "Puntaje de IMC", fr: "Score d'IMC", de: "BMI-Wert", ko: "BMI \uCC28\uD2B8 \uC810\uC218", hi: "\u092C\u0940\u090F\u092E\u0906\u0908 \u091A\u093E\u0930\u094D\u091F \u0938\u094D\u0915\u094B\u0930" } },
        secondary: [
          { label: { en: "WHO Adult Classification", es: "Clasificaci\xF3n OMS", fr: "Classification OMS", de: "WHO Klassifizierung", ko: "WHO \uC131\uC778 \uBD84\uB958", hi: "\u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u0935\u092F\u0938\u094D\u0915 \u0935\u0930\u094D\u0917\u0940\u0915\u0930\u0923" }, value: category },
          { label: { en: "Healthy Chart Weight Window", es: "Rango de Peso Saludable", fr: "Plage de Poids Sant\xE9", de: "Gesundes Gewicht", ko: "\uAC74\uAC15\uD55C \uCCB4\uC911 \uBC94\uC704", hi: "\u0938\u094D\u0935\u0938\u094D\u0925 \u0935\u091C\u0928 \u091A\u093E\u0930\u094D\u091F \u0938\u0940\u092E\u093E" }, value: `${conv(minHealthy).toFixed(1)} - ${conv(maxHealthy).toFixed(1)}`, unit: unitStr },
          { label: { en: "Asian/Indian Cutoff Threshold", es: "Umbral Asi\xE1tico (23)", fr: "Seuil Asiatique (23)", de: "Asien Schwellenwert (23)", ko: "\uC544\uC2DC\uC544\uC778 \uC8FC\uC758 \uAE30\uC900 (23)", hi: "\u090F\u0936\u093F\u092F\u093E\u0908 \u0913\u0935\u0930\u0935\u0947\u091F \u0915\u091F\u0911\u092B" }, value: "23.0 kg/m\xB2" }
        ]
      };
    }
  },
  {
    slug: "3d-body-visualizer",
    name: {
      en: "3D Body Visualizer",
      es: "Visualizador Corporal 3D",
      fr: "Visualiseur Corporel 3D",
      de: "3D Body Visualizer",
      ko: "3D \uBC14\uB514 \uBE44\uC8FC\uC5BC\uB77C\uC774\uC800 (3D Body Visualizer)",
      hi: "3D \u092C\u0949\u0921\u0940 \u0935\u093F\u091C\u0941\u0905\u0932\u093E\u0907\u091C\u093C\u0930 (3D Body Visualizer)"
    },
    title: {
      en: "3D Body Visualizer & 3D BMI Calculator Online \u2013 BMI Visualizer Tool",
      es: "Visualizador Corporal 3D y Calculadora IMC 3D Online",
      fr: "Visualiseur Corporel 3D et Calculateur IMC 3D en Ligne",
      de: "3D Body Visualizer & 3D BMI Rechner Online",
      ko: "3D \uBC14\uB514 \uBE44\uC8FC\uC5BC\uB77C\uC774\uC800 & \uC628\uB77C\uC778 3D BMI \uACC4\uC0B0\uAE30",
      hi: "3D \u092C\u0949\u0921\u0940 \u0935\u093F\u091C\u0941\u0905\u0932\u093E\u0907\u091C\u093C\u0930 \u0914\u0930 \u0911\u0928\u0932\u093E\u0907\u0928 3D \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930"
    },
    description: {
      "en": "Free 3D Body Visualizer & 3D BMI Calculator online. View interactive 360\xB0 front, side & back 3D body type avatar model, wireframe, and BMI heatmap modes with real-time sliders. 100% free with browser-based calculations.",
      "es": "Visualizador corporal 3D interactivo y calculadora de IMC 3D en l\xEDnea gratuita. Observa tu modelo de avatar 3D en 360\xB0 con vistas frontal, lateral y posterior, modo alambre y mapa de calor con deslizadores en tiempo real. 100% gratuito con c\xE1lculos en navegador.",
      "fr": "Visualiseur corporel 3D gratuit et calculateur d'IMC 3D en ligne. Visualisez votre avatar 3D \xE0 360\xB0 de face, de profil et de dos en modes maillage, fil de fer et carte thermique avec curseurs en temps r\xE9el. 100% gratuit et ax\xE9 sur la confidentialit\xE9.",
      "de": "Kostenloser 3D Body Visualizer & 3D BMI Rechner online. Betrachten Sie Ihr interaktives 360\xB0 3D-K\xF6rpermodell von vorne, der Seite und von hinten mit Drahtmodell und Heatmap \xFCber Echtzeit-Regler. 100% kostenlos direkt im Browser.",
      "ko": "\uBB34\uB8CC \uC628\uB77C\uC778 3D \uBC14\uB514 \uBE44\uC8FC\uC5BC\uB77C\uC774\uC800 \uBC0F 3D BMI \uACC4\uC0B0\uAE30. \uC2E4\uC2DC\uAC04 \uC2AC\uB77C\uC774\uB354 \uC870\uC791\uC744 \uD1B5\uD574 360\xB0 \uC804\uBA74, \uCE21\uBA74, \uD6C4\uBA74 3D \uC544\uBC14\uD0C0, \uC640\uC774\uC5B4\uD504\uB808\uC784 \uBC0F BMI \uD788\uD2B8\uB9F5\uC744 \uD655\uC778\uD558\uC138\uC694. \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uC5C6\uB294 100% \uBB34\uB8CC \uB3C4\uAD6C\uC785\uB2C8\uB2E4.",
      "hi": "\u092E\u0941\u092B\u093C\u094D\u0924 3D \u092C\u0949\u0921\u0940 \u0935\u093F\u091C\u0941\u0905\u0932\u093E\u0907\u091C\u093C\u0930 \u0914\u0930 \u0911\u0928\u0932\u093E\u0907\u0928 3D \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930\u0964 \u0930\u093F\u092F\u0932-\u091F\u093E\u0907\u092E \u0938\u094D\u0932\u093E\u0907\u0921\u0930\u094D\u0938 \u0915\u0947 \u0938\u093E\u0925 360\xB0 \u092B\u094D\u0930\u0902\u091F, \u0938\u093E\u0907\u0921 \u0914\u0930 \u092C\u0948\u0915 3D \u0905\u0935\u0924\u093E\u0930 \u092E\u0949\u0921\u0932, \u0935\u093E\u092F\u0930\u092B\u094D\u0930\u0947\u092E \u0914\u0930 \u092C\u0940\u090F\u092E\u0906\u0908 \u0939\u0940\u091F\u092E\u0948\u092A \u092E\u094B\u0921 \u092E\u0947\u0902 \u0905\u092A\u0928\u093E \u0936\u0930\u0940\u0930 \u0924\u0941\u0930\u0902\u0924 \u0926\u0947\u0916\u0947\u0902\u0964 100% \u092E\u0941\u092B\u093C\u094D\u0924 \u0914\u0930 \u092C\u094D\u0930\u093E\u0909\u091C\u093C\u0930-\u0906\u0927\u093E\u0930\u093F\u0924 \u0917\u0923\u0928\u093E\u0964"
    },
    inputs: [
      { id: "weight", label: L.weight, type: "number", placeholder: "70" },
      { id: "height", label: L.height, type: "number", placeholder: "175" },
      { id: "age", label: L.age, type: "number", placeholder: "25" },
      { id: "gender", label: L.gender, type: "select", options: [{ value: "male", label: L.male }, { value: "female", label: L.female }] }
    ],
    calculate: (inputs, system) => {
      let w = parseFloat(inputs.weight) || 0;
      let h = parseFloat(inputs.height) || 0;
      if (system === "imperial") {
        w = w * 0.453592;
        h = h * 2.54;
      }
      const hM = h / 100;
      const stdBmi = w / (hM * hM);
      const newBmi = 1.3 * w / Math.pow(hM, 2.5);
      const diff = newBmi - stdBmi;
      return {
        primary: { value: newBmi.toFixed(1), label: { en: "3D Height-Adjusted BMI", es: "IMC 3D Ajustado", fr: "IMC 3D Ajust\xE9", de: "3D-H\xF6hen-BMI", ko: "3D \uC2E0\uC7A5 \uBCF4\uC815 BMI", hi: "3D \u090A\u0902\u091A\u093E\u0908-\u0938\u092E\u093E\u092F\u094B\u091C\u093F\u0924 \u092C\u0940\u090F\u092E\u0906\u0908" } },
        secondary: [
          { label: { en: "Standard BMI", es: "IMC Est\xE1ndar", fr: "IMC Standard", de: "Standard-BMI", ko: "\uD45C\uC900 BMI", hi: "\u092E\u093E\u0928\u0915 \u092C\u0940\u090F\u092E\u0906\u0908" }, value: stdBmi.toFixed(1) },
          { label: { en: "3D Volume Scale Factor", es: "Escala Volum\xE9trica 3D", fr: "\xC9chelle Volum\xE9trique 3D", de: "Volumen-Skalierungsfaktor", ko: "3D \uBCFC\uB968 \uC2A4\uCF00\uC77C \uD329\uD130", hi: "3D \u0935\u0949\u0932\u094D\u092F\u0942\u092E \u0938\u094D\u0915\u0947\u0932 \u092B\u0948\u0915\u094D\u091F\u0930" }, value: (newBmi / 22.5).toFixed(2), unit: "x" }
        ]
      };
    }
  },
  {
    slug: "bmi-calculator-india",
    name: {
      en: "BMI Calculator India",
      es: "Calculadora IMC India",
      fr: "Calculateur d'IMC Inde",
      de: "BMI-Rechner Indien",
      ko: "\uC778\uB3C4 BMI \uACC4\uC0B0\uAE30",
      hi: "\u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u092D\u093E\u0930\u0924 (BMI Calculator India)"
    },
    title: {
      en: "BMI Calculator India \u2013 Healthy BMI Chart & Range for Indian Men & Women",
      es: "Calculadora IMC India \u2013 Rango de IMC Saludable para Hombres y Mujeres",
      fr: "Calculateur d'IMC Inde \u2013 Plage d'IMC Sant\xE9 pour Hommes et Femmes",
      de: "BMI-Rechner Indien \u2013 Gesunder BMI-Bereich f\xFCr M\xE4nner und Frauen",
      ko: "\uC778\uB3C4 BMI \uACC4\uC0B0\uAE30 \u2013 \uC778\uB3C4 \uB0A8\uC131 \uBC0F \uC5EC\uC131\uC758 \uAC74\uAC15\uD55C BMI \uBC94\uC704 \uBC0F \uCC28\uD2B8",
      hi: "\u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u092D\u093E\u0930\u0924 - \u092D\u093E\u0930\u0924\u0940\u092F \u092A\u0941\u0930\u0941\u0937\u094B\u0902 \u0914\u0930 \u092E\u0939\u093F\u0932\u093E\u0913\u0902 \u0915\u0947 \u0932\u093F\u090F \u0938\u094D\u0935\u0938\u094D\u0925 \u092C\u0940\u090F\u092E\u0906\u0908 \u091A\u093E\u0930\u094D\u091F \u090F\u0935\u0902 \u0938\u0940\u092E\u093E"
    },
    description: {
      "en": "Free BMI Calculator India aligned with ICMR & WHO South-East Asia consensus guidelines (Asian overweight cutoff: 23.0 kg/m\xB2). Calculate your BMI, Asian risk category, and healthy weight range with privacy-focused, browser-based calculations.",
      "es": "Calculadora de IMC para la India gratuita alineada con las directrices del ICMR y la OMS para el Sur de Asia (corte de sobrepeso asi\xE1tico: 23.0 kg/m\xB2). Calcula tu IMC, categor\xEDa de riesgo asi\xE1tica y rango de peso saludable con c\xE1lculos privados en el navegador.",
      "fr": "Calculateur d'IMC Inde gratuit conforme aux directives de l'ICMR et de l'OMS pour l'Asie du Sud-Est (seuil de surpoids asiatique : 23,0 kg/m\xB2). Calculez votre IMC, cat\xE9gorie de risque asiatique et poids sant\xE9 avec calculs confidentiels sur navigateur.",
      "de": "Kostenloser BMI-Rechner f\xFCr Indien nach offiziellen ICMR- und WHO-S\xFCdasien-Richtlinien (asiatischer \xDCbergewichtsschwelle: 23,0 kg/m\xB2). Berechnen Sie Ihren BMI, Ihre asiatische Risiko-Kategorie und Ihr gesundes Gewicht datenschutzorientiert im Browser.",
      "ko": "\uACF5\uC2DD ICMR \uBC0F WHO \uB0A8\uC544\uC2DC\uC544 \uC9C0\uCE68(\uC544\uC2DC\uC544\uC778 \uACFC\uCCB4\uC911 \uAE30\uC900: 23.0 kg/m\xB2)\uC5D0 \uB9DE\uCD98 \uC778\uB3C4\uC778 \uC804\uC6A9 \uBB34\uB8CC BMI \uACC4\uC0B0\uAE30. BMI, \uC544\uC2DC\uC544\uC778 \uC704\uD5D8 \uBC94\uC8FC \uBC0F \uAC74\uAC15 \uCCB4\uC911 \uBC94\uC704\uB97C \uC0B0\uCD9C\uD558\uC138\uC694. \uBE0C\uB77C\uC6B0\uC800 \uB0B4 100% \uBB34\uB8CC \uAD6C\uB3D9.",
      "hi": "\u0906\u0927\u093F\u0915\u093E\u0930\u093F\u0915 ICMR \u0914\u0930 WHO \u0926\u0915\u094D\u0937\u093F\u0923 \u090F\u0936\u093F\u092F\u093E\u0908 \u0926\u093F\u0936\u093E\u0928\u093F\u0930\u094D\u0926\u0947\u0936\u094B\u0902 (\u090F\u0936\u093F\u092F\u093E\u0908 \u0913\u0935\u0930\u0935\u0947\u091F \u0915\u091F\u0911\u092B: 23.0 kg/m\xB2) \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u092D\u093E\u0930\u0924\u0940\u092F\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u092E\u0941\u092B\u093C\u094D\u0924 \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930\u0964 \u0905\u092A\u0928\u0947 \u092C\u0940\u090F\u092E\u0906\u0908, \u090F\u0936\u093F\u092F\u093E\u0908 \u091C\u094B\u0916\u093F\u092E \u0936\u094D\u0930\u0947\u0923\u0940 \u0914\u0930 \u0938\u094D\u0935\u0938\u094D\u0925 \u0935\u091C\u0928 \u0938\u0940\u092E\u093E \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902\u0964 \u092E\u0941\u092B\u093C\u094D\u0924 \u0914\u0930 \u0917\u094B\u092A\u0928\u0940\u092F\u0924\u093E-\u0915\u0947\u0902\u0926\u094D\u0930\u093F\u0924\u0964"
    },
    inputs: [
      { id: "weight", label: L.weight, type: "number", placeholder: "65" },
      { id: "height", label: L.height, type: "number", placeholder: "168" },
      { id: "age", label: L.age, type: "number", placeholder: "30" },
      { id: "gender", label: L.gender, type: "select", options: [{ value: "male", label: L.male }, { value: "female", label: L.female }] },
      { id: "waist", label: L.waist, type: "number", placeholder: "80" }
    ],
    calculate: (inputs, system) => {
      let w = parseFloat(inputs.weight) || 0;
      let h = parseFloat(inputs.height) || 0;
      let waist = parseFloat(inputs.waist) || 0;
      if (system === "imperial") {
        w = w * 0.453592;
        h = h * 2.54;
        waist = waist * 2.54;
      }
      const hM = h / 100;
      const bmi = hM > 0 ? w / (hM * hM) : 0;
      const isM = inputs.gender === "male";
      let indianCat = "Healthy Weight (18.5 - 22.9)";
      if (bmi < 18.5) indianCat = "Underweight (< 18.5)";
      else if (bmi >= 23 && bmi < 25) indianCat = "Overweight / At Risk (23.0 - 24.9)";
      else if (bmi >= 25 && bmi < 30) indianCat = "Obese Class I (25.0 - 29.9)";
      else if (bmi >= 30) indianCat = "Obese Class II (\u2265 30.0)";
      const minHealthyW = 18.5 * (hM * hM);
      const maxHealthyW = 22.9 * (hM * hM);
      const waistLimit = isM ? 90 : 80;
      const waistStatus = waist > 0 ? waist >= waistLimit ? "Elevated (ICMR Visceral Risk)" : "Healthy Waist" : "Not Provided";
      const unitStr = system === "imperial" ? "lbs" : "kg";
      const conv = (v) => system === "imperial" ? v / 0.453592 : v;
      return {
        primary: { value: bmi.toFixed(1), label: { en: "Indian Standard BMI", es: "IMC Est\xE1ndar India", fr: "IMC Standard Inde", de: "Indien-Standard-BMI", ko: "\uC778\uB3C4 \uD45C\uC900 BMI", hi: "\u092D\u093E\u0930\u0924\u0940\u092F \u092E\u093E\u0928\u0915 \u092C\u0940\u090F\u092E\u0906\u0908" } },
        secondary: [
          { label: { en: "Asian/Indian Classification", es: "Clasificaci\xF3n Asi\xE1tica", fr: "Classification Asiatique", de: "Asiatische Klassifizierung", ko: "\uC544\uC2DC\uC544/\uC778\uB3C4 \uBD84\uB958", hi: "\u092D\u093E\u0930\u0924\u0940\u092F \u092C\u0940\u090F\u092E\u0906\u0908 \u0935\u0930\u094D\u0917" }, value: indianCat },
          { label: { en: "Healthy Weight Window (India)", es: "Rango de Peso Saludable (India)", fr: "Plage de Poids Sant\xE9 (Inde)", de: "Gesundes Gewicht (Indien)", ko: "\uC778\uB3C4 \uAD8C\uC7A5 \uAC74\uAC15 \uCCB4\uC911 \uBC94\uC704", hi: "\u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F\u092A\u094D\u0930\u0926 \u0935\u091C\u0928 \u0938\u0940\u092E\u093E (\u092D\u093E\u0930\u0924)" }, value: `${conv(minHealthyW).toFixed(1)} - ${conv(maxHealthyW).toFixed(1)}`, unit: unitStr },
          { label: { en: "ICMR Waist Risk Status", es: "Estado de Cintura ICMR", fr: "Statut Tour de Taille ICMR", de: "ICMR Taillen-Status", ko: "ICMR \uD5C8\uB9AC \uB458\uB808 \uD3C9\uAC00", hi: "ICMR \u0915\u092E\u0930 \u091C\u094B\u0916\u093F\u092E \u0938\u094D\u0925\u093F\u0924\u093F" }, value: waistStatus },
          { label: { en: "Indian Overweight Threshold", es: "Umbral de Acci\xF3n", fr: "Seuil d'Action", de: "Aktions-Schwellenwert", ko: "\uC8FC\uC758 \uAC1C\uC2DC \uAE30\uC900\uC810", hi: "\u092D\u093E\u0930\u0924\u0940\u092F \u0913\u0935\u0930\u0935\u0947\u091F \u0915\u091F\u0911\u092B" }, value: "23.0 kg/m\xB2" }
        ]
      };
    }
  },
  {
    slug: "bmi-calculator-for-indians",
    name: {
      en: "BMI Calculator for Indians",
      es: "Calculadora IMC para Indios",
      fr: "Calculateur d'IMC pour les Indiens",
      de: "BMI Rechner f\xFCr Inder",
      ko: "\uC778\uB3C4\uC778\uC744 \uC704\uD55C BMI \uACC4\uC0B0\uAE30",
      hi: "\u092D\u093E\u0930\u0924\u0940\u092F\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930"
    },
    title: {
      en: "BMI Calculator for Indians \u2013 ICMR & WHO Indian Standard Ranges",
      es: "Calculadora IMC para Indios \u2013 Est\xE1ndares ICMR y OMS para India",
      fr: "Calculateur d'IMC pour les Indiens \u2013 Normes ICMR et OMS",
      de: "BMI Rechner f\xFCr Inder \u2013 ICMR & WHO Indien Standards",
      ko: "\uC778\uB3C4\uC778\uC744 \uC704\uD55C BMI \uACC4\uC0B0\uAE30 \u2013 ICMR \uBC0F WHO \uC778\uB3C4 \uD45C\uC900 \uBC94\uC704",
      hi: "\u092D\u093E\u0930\u0924\u0940\u092F\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 - ICMR \u090F\u0935\u0902 WHO \u092D\u093E\u0930\u0924\u0940\u092F \u092E\u093E\u0928\u0915 \u0938\u0940\u092E\u093E\u090F\u0902"
    },
    description: {
      "en": "Free BMI Calculator for Indians based on ICMR & WHO Asia-Pacific threshold standards (Overweight: \u2265 23.0 kg/m\xB2, Obese: \u2265 27.5 kg/m\xB2). Calculate ethnic Indian body mass index, cardiometabolic risk category, and target healthy weight window with browser-based calculations.",
      "es": "Calculadora de IMC para indios gratuita basada en los est\xE1ndares del ICMR y la OMS Asia-Pac\xEDfico (Sobrepeso: \u2265 23.0 kg/m\xB2, Obesidad: \u2265 27.5 kg/m\xB2). Calcula el IMC \xE9tnico indio, la categor\xEDa de riesgo cardiometab\xF3lico y la ventana de peso saludable objetivo con c\xE1lculos en el navegador.",
      "fr": "Calculateur d'IMC pour les Indiens gratuit bas\xE9 sur les normes ICMR et OMS Asie-Pacifique (Surpoids : \u2265 23,0 kg/m\xB2, Ob\xE9sit\xE9 : \u2265 27,5 kg/m\xB2). Calculez l'IMC \xE9thnique indien, la cat\xE9gorie de risque cardiom\xE9tabolique et la plage de poids cible avec calculs sur navigateur.",
      "de": "Kostenloser BMI-Rechner f\xFCr indische Staatsb\xFCrger basierend auf ICMR- und WHO-Asien-Pazifik-Standards (\xDCbergewicht: \u2265 23,0 kg/m\xB2, Adipositas: \u2265 27,5 kg/m\xB2). Berechnen Sie Ihren indischen BMI und die kardiometabolische Risikokategorie datenschutzorientiert im Browser.",
      "ko": "ICMR \uBC0F WHO \uC544\uC2DC\uC544-\uD0DC\uD3C9\uC591 \uADDC\uACA9 \uAE30\uC900(\uACFC\uCCB4\uC911: \u2265 23.0 kg/m\xB2, \uBE44\uB9CC: \u2265 27.5 kg/m\xB2)\uC5D0 \uB530\uB978 \uC778\uB3C4\uC778 \uC804\uC6A9 \uBB34\uB8CC BMI \uACC4\uC0B0\uAE30. \uC778\uB3C4\uC778 \uCCB4\uD615 BMI \uC810\uC218, \uC2EC\uB300\uC0AC \uC704\uD5D8 \uBC94\uC8FC \uBC0F \uBAA9\uD45C \uC815\uC0C1 \uCCB4\uC911 \uBC94\uC704\uB97C \uACC4\uC0B0\uD558\uC138\uC694. \uAC00\uC785 \uC5C6\uB294 100% \uBB34\uB8CC \uB3C4\uAD6C.",
      "hi": "ICMR \u0914\u0930 WHO \u090F\u0936\u093F\u092F\u093E-\u092A\u094D\u0930\u0936\u093E\u0902\u0924 \u092E\u093E\u0928\u0915 \u092E\u093E\u0928\u0926\u0902\u0921\u094B\u0902 (\u0913\u0935\u0930\u0935\u0947\u091F: \u2265 23.0 kg/m\xB2, \u092E\u094B\u091F\u093E: \u2265 27.5 kg/m\xB2) \u092A\u0930 \u0906\u0927\u093E\u0930\u093F\u0924 \u092D\u093E\u0930\u0924\u0940\u092F\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u092E\u0941\u092B\u093C\u094D\u0924 \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930\u0964 \u092D\u093E\u0930\u0924\u0940\u092F \u092C\u0940\u090F\u092E\u0906\u0908, \u0915\u093E\u0930\u094D\u0921\u093F\u092F\u094B\u092E\u0947\u091F\u093E\u092C\u0949\u0932\u093F\u0915 \u091C\u094B\u0916\u093F\u092E \u0936\u094D\u0930\u0947\u0923\u0940 \u0914\u0930 \u0932\u0915\u094D\u0937\u093F\u0924 \u0938\u094D\u0935\u0938\u094D\u0925 \u0935\u091C\u0928 \u0938\u0940\u092E\u093E \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902\u0964 \u092E\u0941\u092B\u093C\u094D\u0924 \u0914\u0930 \u0917\u094B\u092A\u0928\u0940\u092F\u0924\u093E-\u0915\u0947\u0902\u0926\u094D\u0930\u093F\u0924\u0964"
    },
    inputs: [
      { id: "weight", label: L.weight, type: "number", placeholder: "65" },
      { id: "height", label: L.height, type: "number", placeholder: "168" },
      { id: "age", label: L.age, type: "number", placeholder: "30" },
      { id: "gender", label: L.gender, type: "select", options: [{ value: "male", label: L.male }, { value: "female", label: L.female }] },
      { id: "waist", label: L.waist, type: "number", placeholder: "80" }
    ],
    calculate: (inputs, system) => {
      let w = parseFloat(inputs.weight) || 0;
      let h = parseFloat(inputs.height) || 0;
      let waist = parseFloat(inputs.waist) || 0;
      if (system === "imperial") {
        w = w * 0.453592;
        h = h * 2.54;
        waist = waist * 2.54;
      }
      const hM = h / 100;
      const bmi = hM > 0 ? w / (hM * hM) : 0;
      const isM = inputs.gender === "male";
      let indianCat = "Healthy Weight (18.5 - 22.9)";
      if (bmi < 18.5) indianCat = "Underweight (< 18.5)";
      else if (bmi >= 23 && bmi < 25) indianCat = "Overweight / At Risk (23.0 - 24.9)";
      else if (bmi >= 25 && bmi < 30) indianCat = "Obese Class I (25.0 - 29.9)";
      else if (bmi >= 30) indianCat = "Obese Class II (\u2265 30.0)";
      const minHealthyW = 18.5 * (hM * hM);
      const maxHealthyW = 22.9 * (hM * hM);
      const waistLimit = isM ? 90 : 80;
      const waistStatus = waist > 0 ? waist >= waistLimit ? "Elevated (ICMR Visceral Risk)" : "Healthy Waist" : "Not Provided";
      const unitStr = system === "imperial" ? "lbs" : "kg";
      const conv = (v) => system === "imperial" ? v / 0.453592 : v;
      return {
        primary: { value: bmi.toFixed(1), label: { en: "Indian Standard BMI", es: "IMC Est\xE1ndar India", fr: "IMC Standard Inde", de: "Indien-Standard-BMI", ko: "\uC778\uB3C4 \uD45C\uC900 BMI", hi: "\u092D\u093E\u0930\u0924\u0940\u092F \u092E\u093E\u0928\u0915 \u092C\u0940\u090F\u092E\u0906\u0908" } },
        secondary: [
          { label: { en: "Asian/Indian Classification", es: "Clasificaci\xF3n Asi\xE1tica", fr: "Classification Asiatique", de: "Asiatische Klassifizierung", ko: "\uC544\uC2DC\uC544/\uC778\uB3C4 \uBD84\uB958", hi: "\u092D\u093E\u0930\u0924\u0940\u092F \u092C\u0940\u090F\u092E\u0906\u0908 \u0935\u0930\u094D\u0917" }, value: indianCat },
          { label: { en: "Healthy Weight Window (India)", es: "Rango de Peso Saludable (India)", fr: "Plage de Poids Sant\xE9 (Inde)", de: "Gesundes Gewicht (Indien)", ko: "\uC778\uB3C4 \uAD8C\uC7A5 \uAC74\uAC15 \uCCB4\uC911 \uBC94\uC704", hi: "\u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F\u092A\u094D\u0930\u0926 \u0935\u091C\u0928 \u0938\u0940\u092E\u093E (\u092D\u093E\u0930\u0924)" }, value: `${conv(minHealthyW).toFixed(1)} - ${conv(maxHealthyW).toFixed(1)}`, unit: unitStr },
          { label: { en: "ICMR Waist Risk Status", es: "Estado de Cintura ICMR", fr: "Statut Tour de Taille ICMR", de: "ICMR Taillen-Status", ko: "ICMR \uD5C8\uB9AC \uB458\uB808 \uD3C9\uAC00", hi: "ICMR \u0915\u092E\u0930 \u091C\u094B\u0916\u093F\u092E \u0938\u094D\u0925\u093F\u0924\u093F" }, value: waistStatus },
          { label: { en: "Indian Overweight Threshold", es: "Umbral de Acci\xF3n", fr: "Seuil d'Action", de: "Aktions-Schwellenwert", ko: "\uC8FC\uC758 \uAC1C\uC2DC \uAE30\uC900\uC810", hi: "\u092D\u093E\u0930\u0924\u0940\u092F \u0913\u0935\u0930\u0935\u0947\u091F \u0915\u091F\u0911\u092B" }, value: "23.0 kg/m\xB2" }
        ]
      };
    }
  },
  {
    slug: "healthy-weight-by-height",
    name: {
      en: "Healthy Weight by Height",
      es: "Peso Saludable por Altura",
      fr: "Poids Sant\xE9 selon la Taille",
      de: "Gesundes Gewicht nach K\xF6rpergr\xF6\xDFe",
      ko: "\uD0A4\uBCC4 \uAC74\uAC15 \uCCB4\uC911 \uACC4\uC0B0\uAE30",
      hi: "\u090A\u0902\u091A\u093E\u0908 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0938\u094D\u0935\u0938\u094D\u0925 \u0935\u091C\u0928 (Healthy Weight by Height)"
    },
    title: {
      en: "Healthy Weight by Height Chart \u2013 Ideal Weight Range for Men & Women",
      es: "Tabla de Peso Saludable por Altura \u2013 Rango Ideal para Hombres y Mujeres",
      fr: "Tableau de Poids Sant\xE9 selon la Taille \u2013 Plage Id\xE9ale pour Hommes et Femmes",
      de: "Gr\xF6\xDFe-Gewicht-Tabelle \u2013 Gesunder Gewichtsbereich f\xFCr M\xE4nner & Frauen",
      ko: "\uD0A4\uBCC4 \uAC74\uAC15 \uCCB4\uC911 \uD45C \uBC0F \uACC4\uC0B0\uAE30 \u2013 \uB0A8\uC131 \uBC0F \uC5EC\uC131\uC758 \uC774\uC0C1\uC801\uC778 \uCCB4\uC911 \uBC94\uC704",
      hi: "\u090A\u0902\u091A\u093E\u0908 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0938\u094D\u0935\u0938\u094D\u0925 \u0935\u091C\u0928 \u091A\u093E\u0930\u094D\u091F - \u092A\u0941\u0930\u0941\u0937\u094B\u0902 \u0914\u0930 \u092E\u0939\u093F\u0932\u093E\u0913\u0902 \u0915\u0947 \u0932\u093F\u090F \u0906\u0926\u0930\u094D\u0936 \u0935\u091C\u0928 \u0938\u0940\u092E\u093E"
    },
    description: {
      "en": "Free Healthy Weight by Height Calculator & Ideal Body Weight Matrix. Lookup healthy weight ranges by height (cm, feet, inches) based on WHO BMI 18.5 - 24.9 standards and Devine formula benchmarks with privacy-focused, browser calculations.",
      "es": "Calculadora gratuita de peso saludable por altura y matriz de peso corporal ideal. Consulta rangos de peso saludable por altura (cm, pies, pulgadas) seg\xFAn los est\xE1ndares OMS IMC 18.5 - 24.9 y la f\xF3rmula de Devine con c\xE1lculos privados en el navegador.",
      "fr": "Calculateur gratuit de poids id\xE9al par taille et matrice de poids sant\xE9. Consultez les plages de poids sant\xE9 selon la taille (cm, pieds, pouces) bas\xE9es sur les normes OMS IMC 18,5 - 24,9 et la formule de Devine avec calculs sur navigateur.",
      "de": "Kostenloser Idealgewicht-nach-Gr\xF6\xDFe-Rechner & K\xF6rpergewicht-Matrix. Schlagen Sie gesunde Gewichtsbereiche nach K\xF6rpergr\xF6\xDFe (cm, Fu\xDF, Zoll) basierend auf WHO-BMI-Normen (18,5 - 24,9) und Devine-Formel datenschutzorientiert im Browser nach.",
      "ko": "\uC2E0\uC7A5\uBCC4 \uC815\uC0C1 \uCCB4\uC911 \uBB34\uB8CC \uACC4\uC0B0\uAE30 \uBC0F \uC774\uC0C1\uC801 \uCCB4\uC911 \uC9C4\uB2E8\uD45C. WHO BMI 18.5 - 24.9 \uAE30\uC900 \uBC0F Devine \uACF5\uC2DD\uC5D0 \uB530\uB77C \uC2E0\uC7A5(cm, feet, inches)\uBCC4 \uC815\uC0C1 \uCCB4\uC911 \uBC94\uC704\uB97C \uC870\uD68C\uD558\uC138\uC694. \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uC5C6\uB294 100% \uBE0C\uB77C\uC6B0\uC800 \uACC4\uC0B0.",
      "hi": "\u090A\u0902\u091A\u093E\u0908 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0938\u094D\u0935\u0938\u094D\u0925 \u0935\u091C\u0928 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u0914\u0930 \u0906\u0926\u0930\u094D\u0936 \u0936\u0930\u0940\u0930 \u0935\u091C\u0928 \u092E\u0948\u091F\u094D\u0930\u093F\u0915\u094D\u0938\u0964 WHO \u092C\u0940\u090F\u092E\u0906\u0908 18.5 - 24.9 \u092E\u093E\u0928\u0915\u094B\u0902 \u0914\u0930 \u0921\u093F\u0935\u093E\u0907\u0928 \u092B\u0949\u0930\u094D\u092E\u0942\u0932\u093E \u0915\u0947 \u0906\u0927\u093E\u0930 \u092A\u0930 \u090A\u0902\u091A\u093E\u0908 (\u0938\u0947\u092E\u0940, \u092B\u0940\u091F, \u0907\u0902\u091A) \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0938\u094D\u0935\u0938\u094D\u0925 \u0935\u091C\u0928 \u0938\u0940\u092E\u093E \u0926\u0947\u0916\u0947\u0902\u0964 \u092E\u0941\u092B\u093C\u094D\u0924 \u0914\u0930 \u0917\u094B\u092A\u0928\u0940\u092F\u0924\u093E-\u0915\u0947\u0902\u0926\u094D\u0930\u093F\u0924\u0964"
    },
    inputs: [
      { id: "height", label: L.height, type: "number", placeholder: "170" },
      { id: "gender", label: L.gender, type: "select", options: [{ value: "male", label: L.male }, { value: "female", label: L.female }] },
      { id: "weight", label: { en: "Current Weight (Optional)", es: "Peso Actual (Opcional)", fr: "Poids Actuel (Optionnel)", de: "Aktuelles Gewicht (Optional)", ko: "\uD604\uC7AC \uCCB4\uC911 (\uC120\uD0DD\uC0AC\uD56D)", hi: "\u0935\u0930\u094D\u0924\u092E\u093E\u0928 \u0935\u091C\u0928 (\u0935\u0948\u0915\u0932\u094D\u092A\u093F\u0915)" }, type: "number", placeholder: "68" }
    ],
    calculate: (inputs, system) => {
      let h = parseFloat(inputs.height) || 0;
      let w = parseFloat(inputs.weight) || 0;
      if (system === "imperial") {
        h = h * 2.54;
        if (w > 0) w = w * 0.453592;
      }
      const hM = h / 100;
      const isM = inputs.gender === "male";
      const minHealthy = 18.5 * (hM * hM);
      const maxHealthy = 24.9 * (hM * hM);
      const over5Ft = Math.max(0, h / 2.54 - 60);
      const devineIBW = isM ? 50 + 2.3 * over5Ft : 45.5 + 2.3 * over5Ft;
      const maxAsianHealthy = 22.9 * (hM * hM);
      const conv = (v) => system === "imperial" ? v / 0.453592 : v;
      const unitStr = system === "imperial" ? "lbs" : "kg";
      let statusMsg = "Optimal Range";
      if (w > 0) {
        if (w < minHealthy) statusMsg = `${conv(minHealthy - w).toFixed(1)} ${unitStr} below min healthy weight`;
        else if (w > maxHealthy) statusMsg = `${conv(w - maxHealthy).toFixed(1)} ${unitStr} above max healthy weight`;
        else statusMsg = `Within healthy weight range (${conv(w).toFixed(1)} ${unitStr})`;
      }
      return {
        primary: { value: `${conv(minHealthy).toFixed(1)} - ${conv(maxHealthy).toFixed(1)}`, label: { en: "WHO Healthy Weight Range", es: "Rango de Peso Saludable OMS", fr: "Plage de Poids Sant\xE9 OMS", de: "WHO Gesunder Gewichtsbereich", ko: "WHO \uAC74\uAC15\uD55C \uCCB4\uC911 \uBC94\uC704", hi: "WHO \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F\u092A\u094D\u0930\u0926 \u0935\u091C\u0928 \u0938\u0940\u092E\u093E" }, unit: unitStr },
        secondary: [
          { label: { en: "Devine Ideal Body Weight (IBW)", es: "Peso Corporal Ideal Devine", fr: "Poids Id\xE9al Devine", de: "Devine Idealgewicht (IBW)", ko: "Devine \uC774\uC0C1 \uCCB4\uC911", hi: "\u0921\u093F\u0935\u093E\u0907\u0928 \u0906\u0926\u0930\u094D\u0936 \u0935\u091C\u0928 (IBW)" }, value: conv(devineIBW).toFixed(1), unit: unitStr },
          { label: { en: "Asian/Indian Healthy Cutoff Window", es: "Rango Saludable Asi\xE1tico/India", fr: "Plage Sant\xE9 Asiatique/Inde", de: "Asiatischer Gewichtsbereich", ko: "\uC544\uC2DC\uC544/\uC778\uB3C4 \uAC74\uAC15 \uCCB4\uC911 \uAE30\uC900", hi: "\u090F\u0936\u093F\u092F\u093E\u0908/\u092D\u093E\u0930\u0924\u0940\u092F \u0938\u094D\u0935\u0938\u094D\u0925 \u0935\u091C\u0928 \u0938\u0940\u092E\u093E" }, value: `${conv(minHealthy).toFixed(1)} - ${conv(maxAsianHealthy).toFixed(1)}`, unit: unitStr },
          { label: { en: "Current Weight Status", es: "Estado del Peso Actual", fr: "Statut du Poids Actuel", de: "Aktueller Gewichtsstatus", ko: "\uD604\uC7AC \uCCB4\uC911 \uC0C1\uD0DC \uD3C9\uAC00", hi: "\u0935\u0930\u094D\u0924\u092E\u093E\u0928 \u0935\u091C\u0928 \u0938\u094D\u0925\u093F\u0924\u093F" }, value: statusMsg }
        ]
      };
    }
  },
  {
    slug: "diabetes-risk-calculator",
    name: { en: "Asian BMI Cutoff Calculator", es: "Calculadora de Umbral IMC Asi\xE1tico", fr: "Calculateur d'IMC Asiatique", de: "Asian BMI Cutoff Rechner", ko: "\uC544\uC2DC\uC544\uC778 BMI Cutoff \uACC4\uC0B0\uAE30", hi: "\u090F\u0936\u093F\u092F\u093E\u0908 \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u091F\u0911\u092B \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930" },
    title: { en: "Asian BMI Cutoff Calculator \u2013 BMI 23 & 27.5 Reference", es: "Calculadora de Umbral IMC Asi\xE1tico (23 y 27.5)", fr: "Calculateur d'IMC Asiatique \u2013 R\xE9f\xE9rences 23 & 27.5", de: "Asian BMI Cutoff Rechner \u2013 Referenzen 23 & 27.5", ko: "Asian BMI Cutoff Calculator \u2013 23 \uBC0F 27.5 \uCC38\uC870", hi: "\u090F\u0936\u093F\u092F\u093E\u0908 \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u091F\u0911\u092B \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 - 23 \u090F\u0935\u0902 27.5 \u0938\u0902\u0926\u0930\u094D\u092D" },
    description: {
      "en": "Free Type 2 Diabetes Risk Calculator based on BMI, waist circumference, age, and WHO Asian risk thresholds (BMI \u2265 23.0 kg/m\xB2). Assess metabolic risk factors with privacy-focused, browser calculations.",
      "es": "Calculadora gratuita de riesgo de diabetes tipo 2 basada en IMC, circunferencia de cintura, edad y umbrales de riesgo asi\xE1tico de la OMS (IMC \u2265 23.0 kg/m\xB2). Eval\xFAa los factores de riesgo metab\xF3lico con c\xE1lculos privados en el navegador.",
      "fr": "Calculateur gratuit de risque de diab\xE8te de type 2 bas\xE9 sur l'IMC, le tour de taille, l'\xE2ge et les seuils de risque asiatiques de l'OMS (IMC \u2265 23,0 kg/m\xB2). \xC9valuez les facteurs de risque m\xE9tabolique en toute confidentialit\xE9.",
      "de": "Kostenloser Typ-2-Diabetes-Risikorechner basierend auf BMI, Taillenumfang, Alter und WHO-Asien-Risikoschwellen (BMI \u2265 23,0 kg/m\xB2). Bewerten Sie metabolische Risikofaktoren privat im Browser.",
      "ko": "BMI, \uD5C8\uB9AC\uB458\uB808, \uB098\uC774 \uBC0F WHO \uC544\uC2DC\uC544\uC778 \uC704\uD5D8 \uAE30\uC900(BMI \u2265 23.0 kg/m\xB2)\uC5D0 \uAE30\uBC18\uD55C \uBB34\uB8CC \uC81C2\uD615 \uB2F9\uB1E8\uBCD1 \uC704\uD5D8\uB3C4 \uACC4\uC0B0\uAE30. \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uC5C6\uC774 \uBE0C\uB77C\uC6B0\uC800 \uB0B4\uC5D0\uC11C \uB300\uC0AC \uC704\uD5D8 \uC694\uC778\uC744 \uD3C9\uAC00\uD558\uC138\uC694.",
      "hi": "\u092C\u0940\u090F\u092E\u0906\u0908, \u0915\u092E\u0930 \u0915\u0940 \u092A\u0930\u093F\u0927\u093F, \u0909\u092E\u094D\u0930 \u0914\u0930 \u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u090F\u0936\u093F\u092F\u093E\u0908 \u091C\u094B\u0916\u093F\u092E \u0938\u0940\u092E\u093E\u0913\u0902 (BMI \u2265 23.0 kg/m\xB2) \u092A\u0930 \u0906\u0927\u093E\u0930\u093F\u0924 \u092E\u0941\u092B\u093C\u094D\u0924 \u091F\u093E\u0907\u092A 2 \u092E\u0927\u0941\u092E\u0947\u0939 \u091C\u094B\u0916\u093F\u092E \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930\u0964 \u0917\u094B\u092A\u0928\u0940\u092F, \u092C\u094D\u0930\u093E\u0909\u091C\u093C\u0930-\u0906\u0927\u093E\u0930\u093F\u0924 \u0917\u0923\u0928\u093E\u0913\u0902 \u0915\u0947 \u0938\u093E\u0925 \u091A\u092F\u093E\u092A\u091A\u092F \u091C\u094B\u0916\u093F\u092E \u0915\u093E\u0930\u0915\u094B\u0902 \u0915\u093E \u0906\u0915\u0932\u0928 \u0915\u0930\u0947\u0902\u0964"
    },
    inputs: [
      { id: "weight", label: L.weight, type: "number", placeholder: "70" },
      { id: "height", label: L.height, type: "number", placeholder: "175" },
      { id: "waist", label: L.waist, type: "number", placeholder: "85" },
      { id: "age", label: L.age, type: "number", placeholder: "35" },
      { id: "gender", label: L.gender, type: "select", options: [{ value: "male", label: L.male }, { value: "female", label: L.female }] }
    ],
    calculate: (inputs, system) => {
      let w = parseFloat(inputs.weight) || 0;
      let h = parseFloat(inputs.height) || 0;
      let waist = parseFloat(inputs.waist) || 0;
      if (system === "imperial") {
        w = w * 0.453592;
        h = h * 2.54;
        waist = waist * 2.54;
      }
      const hM = h / 100;
      const bmi = w / (hM * hM);
      const isM = inputs.gender === "male";
      const age = parseInt(inputs.age) || 35;
      const waistLimit = isM ? 94 : 80;
      const waistHigh = isM ? 102 : 88;
      let riskScore = "Standard Reference";
      if (bmi >= 27.5 || waist >= waistHigh || bmi >= 23 && waist >= waistLimit && age >= 40) {
        riskScore = "Elevated Threshold";
      } else if (bmi >= 23 || waist >= waistLimit || age >= 45) {
        riskScore = "Moderate Threshold";
      }
      return {
        primary: { value: riskScore, label: { en: "Asian Reference Status", es: "Estado de Referencia Asi\xE1tico", fr: "Statut de R\xE9f\xE9rence Asiatique", de: "Asiatischer Referenzstatus", ko: "\uC544\uC2DC\uC544\uC778 \uCC38\uC870 \uC0C1\uD0DC", hi: "\u090F\u0936\u093F\u092F\u093E\u0908 \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u094D\u0925\u093F\u0924\u093F" } },
        secondary: [
          { label: { en: "BMI Score", es: "Puntaje IMC", fr: "Score IMC", de: "BMI-Wert", ko: "BMI \uC810\uC218", hi: "\u092C\u0940\u090F\u092E\u0906\u0908 \u0938\u094D\u0915\u094B\u0930" }, value: bmi.toFixed(1) },
          { label: { en: "Asian Cutoff", es: "Umbral Asi\xE1tico", fr: "Seuil Asiatique", de: "Asien-Schwellenwert", ko: "\uC544\uC2DC\uC544\uC778 \uAE30\uC900", hi: "\u090F\u0936\u093F\u092F\u093E\u0908 \u0915\u091F\u0911\u092B" }, value: "23.0 kg/m\xB2" },
          { label: { en: "Waist Reference", es: "Referencia Cintura", fr: "R\xE9f\xE9rence Tour Taille", de: "Taillenreferenz", ko: "\uD5C8\uB9AC\uB458\uB808 \uCC38\uC870", hi: "\u0915\u092E\u0930 \u0938\u0902\u0926\u0930\u094D\u092D" }, value: waist >= waistLimit ? "Elevated" : "Standard" }
        ]
      };
    }
  },
  {
    slug: "asian-bmi-calculator",
    name: { en: "Asian BMI Calculator", es: "Calculadora de IMC Asi\xE1tico", fr: "Calculateur d'IMC Asiatique", de: "Asiatischer BMI Rechner", ko: "\uC544\uC2DC\uC544\uC778 BMI \uACC4\uC0B0\uAE30", hi: "\u090F\u0936\u093F\u092F\u093E\u0908 \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930" },
    title: { en: "Asian BMI Calculator \u2013 WHO Asian Cutoff Standards (23 & 27.5)", es: "Calculadora de IMC Asi\xE1tico \u2013 Est\xE1ndares de la OMS (23 y 27.5)", fr: "Calculateur d'IMC Asiatique \u2013 Normes OMS (23 & 27.5)", de: "Asiatischer BMI Rechner \u2013 WHO Richtlinien (23 & 27.5)", ko: "\uC544\uC2DC\uC544\uC778 BMI \uACC4\uC0B0\uAE30 \u2013 WHO \uC544\uC2DC\uC544\uC778 \uAE30\uC900 (23 & 27.5)", hi: "\u090F\u0936\u093F\u092F\u093E\u0908 \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 - WHO \u090F\u0936\u093F\u092F\u093E\u0908 \u0915\u091F\u0911\u092B (23 & 27.5)" },
    description: {
      "en": "Free Asian BMI Calculator based on revised WHO Asian cut-offs (Healthy: 18.5-22.9, Overweight: 23.0-27.4, Obese: \u2265 27.5 kg/m\xB2). Calculate your ethnic BMI score and healthy weight range with browser-based calculations.",
      "es": "Calculadora de IMC asi\xE1tico gratuita basada en los cortes asi\xE1ticos revisados de la OMS (Saludable: 18.5-22.9, Sobrepeso: 23.0-27.4, Obesidad: \u2265 27.5 kg/m\xB2). Calcula tu IMC \xE9tnico y rango de peso saludable con c\xE1lculos en el navegador.",
      "fr": "Calculateur d'IMC asiatique gratuit bas\xE9 sur les seuils asiatiques r\xE9vis\xE9s de l'OMS (Normal : 18,5-22,9, Surpoids : 23,0-27,4, Ob\xE9sit\xE9 : \u2265 27,5 kg/m\xB2). Calculez votre score d'IMC \xE9thnique et poids id\xE9al avec calculs sur navigateur.",
      "de": "Kostenloser asiatischer BMI-Rechner basierend auf den \xFCberarbeiteten WHO-Asien-Schwellenwerten (Normal: 18,5-22,9, \xDCbergewicht: 23,0-27,4, Adipositas: \u2265 27,5 kg/m\xB2). Berechnen Sie Ihren asiatischen BMI-Wert datenschutzorientiert im Browser.",
      "ko": "\uAC1C\uC815\uB41C WHO \uC544\uC2DC\uC544\uC778 \uD310\uC815 \uAE30\uC900(\uC815\uC0C1: 18.5-22.9, \uACFC\uCCB4\uC911: 23.0-27.4, \uBE44\uB9CC: \u2265 27.5 kg/m\xB2)\uC5D0 \uB530\uB978 \uBB34\uB8CC \uC544\uC2DC\uC544\uC778 BMI \uACC4\uC0B0\uAE30. \uC544\uC2DC\uC544\uC778 \uC804\uC6A9 BMI \uC810\uC218\uC640 \uAC74\uAC15 \uCCB4\uC911 \uBC94\uC704\uB97C \uC0B0\uCD9C\uD558\uC138\uC694. \uAC00\uC785 \uC5C6\uB294 100% \uBB34\uB8CC \uB3C4\uAD6C.",
      "hi": "\u0938\u0902\u0936\u094B\u0927\u093F\u0924 \u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u090F\u0936\u093F\u092F\u093E\u0908 \u0915\u091F\u0911\u092B (\u0938\u094D\u0935\u0938\u094D\u0925: 18.5-22.9, \u0905\u0927\u093F\u0915 \u0935\u091C\u0928: 23.0-27.4, \u092E\u094B\u091F\u093E\u092A\u093E: \u2265 27.5 kg/m\xB2) \u092A\u0930 \u0906\u0927\u093E\u0930\u093F\u0924 \u092E\u0941\u092B\u093C\u094D\u0924 \u090F\u0936\u093F\u092F\u093E\u0908 \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930\u0964 \u0905\u092A\u0928\u0947 \u092C\u0940\u090F\u092E\u0906\u0908 \u0938\u094D\u0915\u094B\u0930 \u0914\u0930 \u0938\u094D\u0935\u0938\u094D\u0925 \u0935\u091C\u0928 \u0938\u0940\u092E\u093E \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902\u0964 \u092E\u0941\u092B\u093C\u094D\u0924 \u0914\u0930 \u0917\u094B\u092A\u0928\u0940\u092F\u0924\u093E-\u0915\u0947\u0902\u0926\u094D\u0930\u093F\u0924\u0964"
    },
    inputs: [
      { id: "weight", label: L.weight, type: "number", placeholder: "65" },
      { id: "height", label: L.height, type: "number", placeholder: "168" },
      { id: "waist", label: L.waist, type: "number", placeholder: "80" },
      { id: "age", label: L.age, type: "number", placeholder: "30" },
      { id: "gender", label: L.gender, type: "select", options: [{ value: "male", label: L.male }, { value: "female", label: L.female }] }
    ],
    calculate: (inputs, system) => {
      let w = parseFloat(inputs.weight) || 0;
      let h = parseFloat(inputs.height) || 0;
      let waist = parseFloat(inputs.waist) || 0;
      if (system === "imperial") {
        w = w * 0.453592;
        h = h * 2.54;
        waist = waist * 2.54;
      }
      const hM = h / 100;
      const bmi = hM > 0 ? w / (hM * hM) : 0;
      const isM = inputs.gender === "male";
      let cat = "Healthy Weight (18.5 - 22.9)";
      if (bmi < 18.5) cat = "Underweight (< 18.5)";
      else if (bmi >= 23 && bmi < 27.5) cat = "Overweight / At Risk (23.0 - 27.4)";
      else if (bmi >= 27.5) cat = "Obese (\u2265 27.5)";
      const minHealthy = 18.5 * (hM * hM);
      const maxHealthy = 22.9 * (hM * hM);
      const conv = (v) => system === "imperial" ? v / 0.453592 : v;
      const unitStr = system === "imperial" ? "lbs" : "kg";
      return {
        primary: { value: bmi.toFixed(1), label: { en: "Asian Adjusted BMI", es: "IMC Ajustado Asi\xE1tico", fr: "IMC Ajust\xE9 Asiatique", de: "Asiatischer BMI-Wert", ko: "\uC544\uC2DC\uC544\uC778 \uBCF4\uC815 BMI", hi: "\u090F\u0936\u093F\u092F\u093E\u0908 \u0938\u092E\u093E\u092F\u094B\u091C\u093F\u0924 \u092C\u0940\u090F\u092E\u0906\u0908" } },
        secondary: [
          { label: { en: "WHO Asian Category", es: "Categor\xEDa OMS Asi\xE1tica", fr: "Cat\xE9gorie OMS Asiatique", de: "WHO Asiatische Kategorie", ko: "WHO \uC544\uC2DC\uC544\uC778 \uBC94\uC8FC", hi: "WHO \u090F\u0936\u093F\u092F\u093E\u0908 \u0936\u094D\u0930\u0947\u0923\u0940" }, value: cat },
          { label: { en: "Asian Healthy Weight Window", es: "Rango de Peso Saludable Asi\xE1tico", fr: "Plage de Poids Sant\xE9 Asiatique", de: "Asiatisches Gesundes Gewicht", ko: "\uC544\uC2DC\uC544\uC778 \uAD8C\uC7A5 \uAC74\uAC15 \uCCB4\uC911 \uBC94\uC704", hi: "\u090F\u0936\u093F\u092F\u093E\u0908 \u0938\u094D\u0935\u0938\u094D\u0925 \u0935\u091C\u0928 \u0938\u0940\u092E\u093E" }, value: `${conv(minHealthy).toFixed(1)} - ${conv(maxHealthy).toFixed(1)}`, unit: unitStr },
          { label: { en: "Asian Action Cutoff", es: "Corte de Acci\xF3n Asi\xE1tico", fr: "Seuil d'Action Asiatique", de: "Asien Aktionsschwelle", ko: "\uC544\uC2DC\uC544\uC778 \uC8FC\uC758 \uAC1C\uC2DC \uAE30\uC900\uC810", hi: "\u090F\u0936\u093F\u092F\u093E\u0908 \u090F\u0915\u094D\u0936\u0928 \u0915\u091F\u0911\u092B" }, value: "23.0 kg/m\xB2" }
        ]
      };
    }
  },
  {
    slug: "bmr-calculator",
    name: { en: "BMR Calculator", es: "Calculadora BMR (Tasa Metab\xF3lica Basal)", fr: "Calculateur BMR (Taux M\xE9tabolique de Base)", de: "BMR Rechner (Grundumsatz)", ko: "BMR \uACC4\uC0B0\uAE30 (\uAE30\uCD08\uB300\uC0AC\uB7C9)", hi: "BMR \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 (\u092C\u0947\u0938\u0932 \u092E\u0947\u091F\u093E\u092C\u0949\u0932\u093F\u0915 \u0930\u0947\u091F)" },
    title: { en: "BMR Calculator Online \u2013 Basal Metabolic Rate (Mifflin-St Jeor) for Men & Women", es: "Calculadora BMR Gratis \u2013 Tasa Metab\xF3lica Basal", fr: "Calculateur BMR Gratuit \u2013 Taux M\xE9tabolique de Base", de: "BMR Rechner \u2013 Grundumsatz Berechnen Kostenlos", ko: "\uBB34\uB8CC BMR \uACC4\uC0B0\uAE30 \u2013 \uAE30\uCD08\uB300\uC0AC\uB7C9 \uACC4\uC0B0\uAE30", hi: "\u092E\u0941\u092B\u093C\u094D\u0924 BMR \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u2013 \u092C\u0947\u0938\u0932 \u092E\u0947\u091F\u093E\u092C\u0949\u0932\u093F\u0915 \u0930\u0947\u091F" },
    description: {
      "en": "Free BMR Calculator Online. Calculate your Basal Metabolic Rate (BMR) using Mifflin-St Jeor and Harris-Benedict equations. Determine resting calorie expenditure by age, height (cm), weight (kg), and gender with privacy-focused, browser calculations.",
      "es": "Calculadora de BMR gratuita en l\xEDnea. Calcula tu Tasa Metab\xF3lica Basal (BMR) utilizando las ecuaciones de Mifflin-St Jeor y Harris-Benedict. Determina el gasto cal\xF3rico en reposo seg\xFAn edad, altura (cm), peso (kg) y g\xE9nero con c\xE1lculos privados en el navegador.",
      "fr": "Calculateur de BMR gratuit en ligne. Calculez votre Taux M\xE9tabolique de Base (BMR) \xE0 l'aide des \xE9quations de Mifflin-St Jeor et Harris-Benedict. D\xE9terminez votre d\xE9pense calorique au repos selon l'\xE2ge, la taille (cm), le poids (kg) et le genre avec calculs sur navigateur.",
      "de": "Kostenloser BMR-Rechner online. Berechnen Sie Ihren Grundumsatz (BMR) mit den Formeln nach Mifflin-St Jeor und Harris-Benedict. Ermitteln Sie Ihren Ruhekalorienverbrauch nach Alter, Gr\xF6\xDFe (cm), Gewicht (kg) und Geschlecht datenschutzorientiert im Browser.",
      "ko": "\uBB34\uB8CC \uC628\uB77C\uC778 BMR \uACC4\uC0B0\uAE30. Mifflin-St Jeor \uBC0F Harris-Benedict \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uAE30\uCD08\uB300\uC0AC\uB7C9(BMR)\uC744 \uC0B0\uCD9C\uD558\uC138\uC694. \uB098\uC774, \uC2E0\uC7A5(cm), \uCCB4\uC911(kg) \uBC0F \uC131\uBCC4\uC5D0 \uB530\uB978 \uD734\uC2DD\uAE30 \uC77C\uC77C \uCE7C\uB85C\uB9AC \uC18C\uBAA8\uB7C9\uC744 \uD655\uC778\uD558\uC138\uC694. \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uC5C6\uB294 100% \uBB34\uB8CC \uB3C4\uAD6C.",
      "hi": "\u092E\u0941\u092B\u093C\u094D\u0924 \u0911\u0928\u0932\u093E\u0907\u0928 \u092C\u0940\u090F\u092E\u0906\u0930 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930\u0964 \u092E\u093F\u092B\u094D\u0932\u093F\u0928-\u0938\u0947\u0902\u091F \u091C\u0949\u0930 \u0914\u0930 \u0939\u0948\u0930\u093F\u0938-\u092C\u0947\u0928\u0947\u0921\u093F\u0915\u094D\u091F \u0938\u092E\u0940\u0915\u0930\u0923\u094B\u0902 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0915\u0947 \u0905\u092A\u0928\u0947 \u092C\u0947\u0938\u0932 \u092E\u0947\u091F\u093E\u092C\u0949\u0932\u093F\u0915 \u0930\u0947\u091F (BMR) \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902\u0964 \u0909\u092E\u094D\u0930, \u090A\u0902\u091A\u093E\u0908 (\u0938\u0947\u092E\u0940), \u0935\u091C\u0928 (\u0915\u093F\u0917\u094D\u0930\u093E) \u0914\u0930 \u0932\u093F\u0902\u0917 \u0915\u0947 \u0906\u0927\u093E\u0930 \u092A\u0930 \u0935\u093F\u0936\u094D\u0930\u093E\u092E \u0915\u0948\u0932\u094B\u0930\u0940 \u0935\u094D\u092F\u092F \u0928\u093F\u0930\u094D\u0927\u093E\u0930\u093F\u0924 \u0915\u0930\u0947\u0902\u0964 \u092E\u0941\u092B\u093C\u094D\u0924 \u0914\u0930 \u0917\u094B\u092A\u0928\u0940\u092F\u0924\u093E-\u0915\u0947\u0902\u0926\u094D\u0930\u093F\u0924\u0964"
    },
    inputs: [
      { id: "weight", label: L.weight, type: "number", placeholder: "70" },
      { id: "height", label: L.height, type: "number", placeholder: "175" },
      { id: "age", label: L.age, type: "number", placeholder: "25" },
      { id: "gender", label: L.gender, type: "select", options: [{ value: "male", label: L.male }, { value: "female", label: L.female }] }
    ],
    calculate: (inputs, system) => {
      let w = parseFloat(inputs.weight) || 0;
      let h = parseFloat(inputs.height) || 0;
      if (system === "imperial") {
        w = w * 0.453592;
        h = h * 2.54;
      }
      const age = parseInt(inputs.age) || 25;
      const bmr = inputs.gender === "male" ? 10 * w + 6.25 * h - 5 * age + 5 : 10 * w + 6.25 * h - 5 * age - 161;
      return {
        primary: { value: Math.round(bmr), label: { en: "Basal Metabolic Rate (BMR)", es: "Tasa Metab\xF3lica Basal (BMR)", fr: "Taux M\xE9tabolique de Base (BMR)", de: "Grundumsatz (BMR)", ko: "\uAE30\uCD08\uB300\uC0AC\uB7C9 (BMR)", hi: "\u092C\u0947\u0938\u0932 \u092E\u0947\u091F\u093E\u092C\u0949\u0932\u093F\u0915 \u0930\u0947\u091F" }, unit: "kcal/day" },
        secondary: [
          { label: { en: "Sedentary Burn (PAL 1.2)", es: "Gasto Sedentario", fr: "Combustion S\xE9dentaire", de: "Ruhebedarf (PAL 1.2)", ko: "\uBE44\uD65C\uB3D9 \uCD1D \uC18C\uBAA8\uB7C9", hi: "\u0917\u0924\u093F\u0939\u0940\u0928 \u0915\u0948\u0932\u094B\u0930\u0940 \u092C\u0930\u094D\u0928" }, value: Math.round(bmr * 1.2), unit: "kcal" },
          { label: { en: "Moderate Active Burn (PAL 1.55)", es: "Gasto Moderado", fr: "Combustion Mod\xE9r\xE9e", de: "M\xE4\xDFiger Bedarf (PAL 1.55)", ko: "\uBCF4\uD1B5 \uD65C\uB3D9 \uCD1D \uC18C\uBAA8\uB7C9", hi: "\u092E\u0927\u094D\u092F\u092E \u090F\u0915\u094D\u091F\u093F\u0935 \u0915\u0948\u0932\u094B\u0930\u0940" }, value: Math.round(bmr * 1.55), unit: "kcal" }
        ]
      };
    }
  },
  {
    slug: "tdee-calculator",
    name: { en: "TDEE Calculator", es: "Calculadora de TDEE", fr: "Calculateur de TDEE", de: "TDEE-Rechner", ko: "TDEE \uACC4\uC0B0\uAE30 (TDEE Calculator)", hi: "\u091F\u0940\u0921\u0940\u0908\u0908 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930" },
    title: { en: "TDEE Calculator Online \u2013 Maintenance Calorie & Total Daily Energy Expenditure Calculator", es: "Calculadora de TDEE \u2013 Gasto Energ\xE9tico Total Diario", fr: "Calculateur de TDEE \u2013 D\xE9pense \xC9nerg\xE9tique Totale", de: "TDEE Rechner \u2013 Gesamtenergiebedarf (Total Daily Energy Expenditure)", ko: "\uBB34\uB8CC TDEE \uACC4\uC0B0\uAE30 (TDEE Calculator)", hi: "\u092E\u0941\u092B\u093C\u094D\u0924 \u091F\u0940\u0921\u0940\u0908\u0908 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 - Total Daily Energy Expenditure" },
    description: {
      "en": "Free TDEE Calculator Online. Calculate Total Daily Energy Expenditure (TDEE), maintenance calories, cutting deficit, and bulking targets based on activity level and BMR formulas with privacy-focused, browser calculations.",
      "es": "Calculadora de TDEE gratuita en l\xEDnea. Calcula tu Gasto Energ\xE9tico Total Diario (TDEE), calor\xEDas de mantenimiento, d\xE9ficit para perder peso y objetivos de volumen basados en tu nivel de actividad y f\xF3rmulas de BMR con c\xE1lculos privados en el navegador.",
      "fr": "Calculateur de TDEE gratuit en ligne. Calculez votre D\xE9pense \xC9nerg\xE9tique Totale Quotidienne (TDEE), vos calories de maintien, votre d\xE9ficit pour mincir et vos objectifs de prise de masse selon l'activit\xE9 et le BMR avec calculs sur navigateur.",
      "de": "Kostenloser TDEE-Rechner online. Berechnen Sie Ihren Gesamtenergiebedarf (TDEE), Erhaltungskalorien, Kaloriendefizit zum Abnehmen und \xDCberschuss zum Muskelaufbau basierend auf Aktivit\xE4tslevel und BMR-Formeln datenschutzorientiert im Browser.",
      "ko": "\uBB34\uB8CC \uC628\uB77C\uC778 TDEE \uACC4\uC0B0\uAE30. \uD65C\uB3D9\uB7C9 \uBC0F BMR \uACF5\uC2DD\uC744 \uBC14\uD0D5\uC73C\uB85C \uC77C\uC77C \uCD1D \uC5D0\uB108\uC9C0 \uC18C\uBAA8\uB7C9(TDEE), \uC720\uC9C0 \uCE7C\uB85C\uB9AC, \uCCB4\uC911 \uAC10\uB7C9 \uCE7C\uB85C\uB9AC \uBC0F \uADFC\uC721 \uC99D\uAC00 \uBAA9\uD45C \uCE7C\uB85C\uB9AC\uB97C \uACC4\uC0B0\uD558\uC138\uC694. \uAC00\uC785 \uC5C6\uC774 \uBE0C\uB77C\uC6B0\uC800 \uB0B4 100% \uBB34\uB8CC \uAD6C\uB3D9.",
      "hi": "\u092E\u0941\u092B\u093C\u094D\u0924 \u0911\u0928\u0932\u093E\u0907\u0928 \u091F\u0940\u0921\u0940\u0908\u0908 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930\u0964 \u0917\u0924\u093F\u0935\u093F\u0927\u093F \u0938\u094D\u0924\u0930 \u0914\u0930 \u092C\u0940\u090F\u092E\u0906\u0930 \u0938\u0942\u0924\u094D\u0930\u094B\u0902 \u0915\u0947 \u0906\u0927\u093E\u0930 \u092A\u0930 \u0905\u092A\u0928\u0947 \u0915\u0941\u0932 \u0926\u0948\u0928\u093F\u0915 \u090A\u0930\u094D\u091C\u093E \u0935\u094D\u092F\u092F (TDEE), \u0930\u0916\u0930\u0916\u093E\u0935 \u0915\u0948\u0932\u094B\u0930\u0940, \u0935\u091C\u0928 \u0918\u091F\u093E\u0928\u0947 \u0915\u0947 \u0918\u093E\u091F\u0947 \u0914\u0930 \u0935\u091C\u0928 \u092C\u0922\u093C\u093E\u0928\u0947 \u0915\u0947 \u0932\u0915\u094D\u0937\u094D\u092F\u094B\u0902 \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902\u0964 \u092E\u0941\u092B\u093C\u094D\u0924 \u0914\u0930 \u0917\u094B\u092A\u0928\u0940\u092F\u0924\u093E-\u0915\u0947\u0902\u0926\u094D\u0930\u093F\u0924\u0964"
    },
    inputs: [
      { id: "weight", label: L.weight, type: "number", placeholder: "70" },
      { id: "height", label: L.height, type: "number", placeholder: "175" },
      { id: "age", label: L.age, type: "number", placeholder: "25" },
      { id: "gender", label: L.gender, type: "select", options: [{ value: "male", label: L.male }, { value: "female", label: L.female }] },
      { id: "activity", label: L.activity, type: "select", options: [
        { value: "1.2", label: L.sedentary },
        { value: "1.375", label: L.light },
        { value: "1.55", label: L.moderate },
        { value: "1.725", label: L.active }
      ] }
    ],
    calculate: (inputs, system) => {
      let w = parseFloat(inputs.weight) || 0;
      let h = parseFloat(inputs.height) || 0;
      if (system === "imperial") {
        w = w * 0.453592;
        h = h * 2.54;
      }
      const age = parseInt(inputs.age) || 25;
      const act = parseFloat(inputs.activity) || 1.2;
      const bmr = inputs.gender === "male" ? 10 * w + 6.25 * h - 5 * age + 5 : 10 * w + 6.25 * h - 5 * age - 161;
      const tdee = bmr * act;
      return {
        primary: { value: Math.round(tdee), label: { en: "Total Daily Energy Expenditure", es: "Gasto Energ\xE9tico Total Diario", fr: "D\xE9pense \xC9nerg\xE9tique Totale", de: "Gesamtenergiebedarf (TDEE)", ko: "\uCD1D \uC77C\uC77C \uC5D0\uB108\uC9C0 \uC18C\uBE44\uB7C9", hi: "\u0915\u0941\u0932 \u0926\u0948\u0928\u093F\u0915 \u090A\u0930\u094D\u091C\u093E \u0935\u094D\u092F\u092F" }, unit: "kcal/day" },
        secondary: [
          { label: { en: "Basal Metabolic Rate (BMR)", es: "Metabolismo Basal (BMR)", fr: "M\xE9tabolisme de Base (BMR)", de: "Grundumsatz (BMR)", ko: "\uAE30\uCD08\uB300\uC0AC\uB7C9 (BMR)", hi: "\u092C\u0947\u0938\u0932 \u092E\u0947\u091F\u093E\u092C\u0949\u0932\u093F\u0915 \u0930\u0947\u091F" }, value: Math.round(bmr), unit: "kcal" },
          { label: { en: "Example Deficit (-500 kcal)", es: "Ejemplo de D\xE9ficit (-500 kcal)", fr: "Exemple de D\xE9ficit (-500 kcal)", de: "Beispiel-Defizit (-500 kcal)", ko: "\uC608\uC2DC \uCE7C\uB85C\uB9AC \uC801\uC790 (-500 kcal)", hi: "\u0909\u0926\u093E\u0939\u0930\u0923 \u0915\u0948\u0932\u094B\u0930\u0940 \u0918\u093E\u091F\u093E (-500 kcal)" }, value: Math.round(tdee - 500), unit: "kcal" },
          { label: { en: "Example Surplus (+300 kcal)", es: "Ejemplo de Super\xE1vit (+300 kcal)", fr: "Exemple de Surplus (+300 kcal)", de: "Beispiel-\xDCberschuss (+300 kcal)", ko: "\uC608\uC2DC \uCE7C\uB85C\uB9AC \uC789\uC5EC (+300 kcal)", hi: "\u0909\u0926\u093E\u0939\u0930\u0923 \u0915\u0948\u0932\u094B\u0930\u0940 \u0935\u0943\u0926\u094D\u0927\u093F (+300 kcal)" }, value: Math.round(tdee + 300), unit: "kcal" }
        ]
      };
    }
  },
  {
    slug: "maintenance-calorie-calculator",
    name: {
      en: "Maintenance Calorie Calculator",
      es: "Calculadora de Calor\xEDas de Mantenimiento",
      fr: "Calculateur de Calories de Maintien",
      de: "Erhaltungskalorien Rechner",
      ko: "\uC720\uC9C0 \uCE7C\uB85C\uB9AC \uACC4\uC0B0\uAE30",
      hi: "\u0930\u0916\u0930\u0916\u093E\u0935 \u0915\u0948\u0932\u094B\u0930\u0940 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 (Maintenance Calorie Calculator)"
    },
    title: {
      en: "Maintenance Calorie Calculator Online \u2013 TDEE & Energy Expenditure Tool",
      es: "Calculadora de Calor\xEDas de Mantenimiento en L\xEDnea",
      fr: "Calculateur de Calories de Maintien en Ligne",
      de: "Erhaltungskalorien Rechner Online \u2013 TDEE Kalorienbedarf",
      ko: "\uC628\uB77C\uC778 \uC720\uC9C0 \uCE7C\uB85C\uB9AC \uACC4\uC0B0\uAE30 \u2013 TDEE \uC77C\uC77C \uCE7C\uB85C\uB9AC \uB3C4\uAD6C",
      hi: "\u0911\u0928\u0932\u093E\u0907\u0928 \u0930\u0916\u0930\u0916\u093E\u0935 \u0915\u0948\u0932\u094B\u0930\u0940 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 - TDEE \u0926\u0948\u0928\u093F\u0915 \u0915\u0948\u0932\u094B\u0930\u0940 \u0906\u0935\u0936\u094D\u092F\u0915\u0924\u093E"
    },
    description: {
      "en": "Free Maintenance Calorie Calculator online. Calculate your daily maintenance calories, total daily energy expenditure (TDEE), and weight loss deficit target calories by age, height (cm) and weight (kg) with privacy-focused, browser calculations.",
      "es": "Calculadora de calor\xEDas de mantenimiento gratuita en l\xEDnea. Calcula tus calor\xEDas diarias de mantenimiento, gasto energ\xE9tico total diario (TDEE) y calor\xEDas objetivo para p\xE9rdida de peso por edad, altura (cm) y peso (kg) con c\xE1lculos privados en el navegador.",
      "fr": "Calculateur gratuit de calories de maintien en ligne. Calculez vos calories quotidiennes de maintien, votre d\xE9pense \xE9nerg\xE9tique totale (TDEE) et vos objectifs de d\xE9ficit calorig\xE8ne selon l'\xE2ge, la taille (cm) et le poids (kg) avec calculs sur navigateur.",
      "de": "Kostenloser Erhaltungskalorien-Rechner online. Berechnen Sie Ihre t\xE4glichen Erhaltungskalorien, Ihren Gesamtenergiebedarf (TDEE) und Zielkalorien zum Abnehmen nach Alter, Gr\xF6\xDFe (cm) und Gewicht (kg) datenschutzorientiert im Browser.",
      "ko": "\uBB34\uB8CC \uC628\uB77C\uC778 \uC720\uC9C0 \uCE7C\uB85C\uB9AC \uACC4\uC0B0\uAE30. \uB098\uC774, \uC2E0\uC7A5(cm) \uBC0F \uCCB4\uC911(kg)\uC5D0 \uB530\uB77C \uC77C\uC77C \uC720\uC9C0 \uCE7C\uB85C\uB9AC, \uCD1D \uC5D0\uB108\uC9C0 \uC18C\uBAA8\uB7C9(TDEE) \uBC0F \uCCB4\uC911 \uAC10\uB7C9 \uBAA9\uD45C \uCE7C\uB85C\uB9AC\uB97C \uC0B0\uCD9C\uD558\uC138\uC694. \uAC00\uC785 \uC5C6\uC774 \uBE0C\uB77C\uC6B0\uC800 \uB0B4 100% \uBB34\uB8CC \uAD6C\uB3D9.",
      "hi": "\u092E\u0941\u092B\u093C\u094D\u0924 \u0911\u0928\u0932\u093E\u0907\u0928 \u0930\u0916\u0930\u0916\u093E\u0935 \u0915\u0948\u0932\u094B\u0930\u0940 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930\u0964 \u0909\u092E\u094D\u0930, \u090A\u0902\u091A\u093E\u0908 (\u0938\u0947\u092E\u0940) \u0914\u0930 \u0935\u091C\u0928 (\u0915\u093F\u0917\u094D\u0930\u093E) \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0905\u092A\u0928\u0940 \u0926\u0948\u0928\u093F\u0915 \u0930\u0916\u0930\u0916\u093E\u0935 \u0915\u0948\u0932\u094B\u0930\u0940, \u0915\u0941\u0932 \u0926\u0948\u0928\u093F\u0915 \u090A\u0930\u094D\u091C\u093E \u0935\u094D\u092F\u092F (TDEE) \u0914\u0930 \u0935\u091C\u0928 \u0918\u091F\u093E\u0928\u0947 \u0915\u0940 \u0932\u0915\u094D\u0937\u093F\u0924 \u0915\u0948\u0932\u094B\u0930\u0940 \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902\u0964 \u092E\u0941\u092B\u093C\u094D\u0924 \u0914\u0930 \u0917\u094B\u092A\u0928\u0940\u092F\u0924\u093E-\u0915\u0947\u0902\u0926\u094D\u0930\u093F\u0924\u0964"
    },
    inputs: [
      { id: "weight", label: L.weight, type: "number", placeholder: "70" },
      { id: "height", label: L.height, type: "number", placeholder: "175" },
      { id: "age", label: L.age, type: "number", placeholder: "25" },
      { id: "gender", label: L.gender, type: "select", options: [{ value: "male", label: L.male }, { value: "female", label: L.female }] },
      { id: "activity", label: L.activity, type: "select", options: [
        { value: "1.2", label: L.sedentary },
        { value: "1.375", label: L.light },
        { value: "1.55", label: L.moderate },
        { value: "1.725", label: L.active }
      ] }
    ],
    calculate: (inputs, system) => {
      let w = parseFloat(inputs.weight) || 0;
      let h = parseFloat(inputs.height) || 0;
      if (system === "imperial") {
        w = w * 0.453592;
        h = h * 2.54;
      }
      const age = parseInt(inputs.age) || 25;
      const act = parseFloat(inputs.activity) || 1.2;
      const bmr = inputs.gender === "male" ? 10 * w + 6.25 * h - 5 * age + 5 : 10 * w + 6.25 * h - 5 * age - 161;
      const tdee = bmr * act;
      return {
        primary: { value: Math.round(tdee), label: { en: "Daily Maintenance Calories", es: "Calor\xEDas de Mantenimiento", fr: "Calories de Maintien Quotidiennes", de: "T\xE4gliche Erhaltungskalorien", ko: "\uC77C\uC77C \uC720\uC9C0 \uCE7C\uB85C\uB9AC", hi: "\u0926\u0948\u0928\u093F\u0915 \u0930\u0916\u0930\u0916\u093E\u0935 \u0915\u0948\u0932\u094B\u0930\u0940" }, unit: "kcal/day" },
        secondary: [
          { label: { en: "Basal Metabolic Rate (BMR)", es: "Metabolismo Basal (BMR)", fr: "M\xE9tabolisme de Base (BMR)", de: "Grundumsatz (BMR)", ko: "\uAE30\uCD08\uB300\uC0AC\uB7C9 (BMR)", hi: "\u092C\u0947\u0938\u0932 \u092E\u0947\u091F\u093E\u092C\u0949\u0932\u093F\u0915 \u0930\u0947\u091F" }, value: Math.round(bmr), unit: "kcal" },
          { label: { en: "Example Mild Deficit (-250 kcal)", es: "Ejemplo D\xE9ficit Leve (-250 kcal)", fr: "Exemple D\xE9ficit L\xE9ger (-250 kcal)", de: "Beispiel-Defizit (-250 kcal)", ko: "\uC644\uB9CC\uD55C \uC608\uC2DC \uCE7C\uB85C\uB9AC (-250 kcal)", hi: "\u0939\u0932\u094D\u0915\u093E \u0909\u0926\u093E\u0939\u0930\u0923 \u0918\u093E\u091F\u093E (-250 kcal)" }, value: Math.round(tdee - 250), unit: "kcal" },
          { label: { en: "Example Standard Deficit (-500 kcal)", es: "Ejemplo D\xE9ficit Est\xE1ndar (-500 kcal)", fr: "Exemple D\xE9ficit Standard (-500 kcal)", de: "Beispiel-Defizit (-500 kcal)", ko: "\uD45C\uC900 \uC608\uC2DC \uCE7C\uB85C\uB9AC (-500 kcal)", hi: "\u092E\u093E\u0928\u0915 \u0909\u0926\u093E\u0939\u0930\u0923 \u0918\u093E\u091F\u093E (-500 kcal)" }, value: Math.round(tdee - 500), unit: "kcal" }
        ]
      };
    }
  },
  {
    slug: "body-fat-calculator",
    name: { en: "Body Fat Calculator", es: "Calculadora de Grasa Corporal", fr: "Calculateur de Graisse Corporelle", de: "K\xF6rperfett Rechner", ko: "\uCCB4\uC9C0\uBC29 \uACC4\uC0B0\uAE30 (Body Fat Calculator)", hi: "\u092C\u0949\u0921\u0940 \u092B\u0948\u091F \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930" },
    title: { en: "Body Fat Calculator \u2013 US Navy Body Fat Percentage Tool", es: "Calculadora de Grasa Corporal \u2013 Porcentaje de Grasa US Navy", fr: "Calculateur de Graisse Corporelle \u2013 Formule US Navy", de: "K\xF6rperfett Rechner \u2013 US Navy K\xF6rperfettanteil Berechnen", ko: "\uBB34\uB8CC \uCCB4\uC9C0\uBC29 \uACC4\uC0B0\uAE30 (Body Fat Calculator)", hi: "\u092E\u0941\u092B\u093C\u094D\u0924 \u092C\u0949\u0921\u0940 \u092B\u0948\u091F \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 - \u092C\u0949\u0921\u0940 \u092B\u0948\u091F \u092A\u094D\u0930\u0924\u093F\u0936\u0924" },
    description: {
      "en": "Free Body Fat Calculator based on the US Navy body fat formula and WHtR metrics. Calculate body fat percentage, fat mass (kg/lbs), lean mass, and fitness classification categories with privacy-focused, browser calculations.",
      "es": "Calculadora de grasa corporal gratuita basada en la f\xF3rmula de la Marina de EE. UU. y m\xE9tricas WHtR. Calcula el porcentaje de grasa corporal, masa grasa (kg/lbs), masa magra y categor\xEDas de condici\xF3n f\xEDsica con c\xE1lculos privados en el navegador.",
      "fr": "Calculateur de graisse corporelle gratuit bas\xE9 sur la formule de la US Navy et les m\xE9triques WHtR. Calculez le pourcentage de graisse corporelle, la masse grasse (kg/lbs), la masse maigre et les cat\xE9gories de forme avec calculs sur navigateur.",
      "de": "Kostenloser K\xF6rperfett-Rechner basierend auf der US Navy-Formel und WHtR-Metriken. Berechnen Sie Ihren K\xF6rperfettanteil, Ihre Fettmasse (kg/lbs), Ihre Magermasse und Fitness-Kategorien datenschutzorientiert im Browser.",
      "ko": "\uBBF8 \uD574\uAD70(US Navy) \uACF5\uC2DD \uBC0F \uD5C8\uB9AC\uB458\uB808 \uBE44\uC728(WHtR)\uC5D0 \uAE30\uBC18\uD55C \uBB34\uB8CC \uCCB4\uC9C0\uBC29 \uACC4\uC0B0\uAE30. \uCCB4\uC9C0\uBC29\uB960(%), \uC9C0\uBC29\uB7C9(kg/lbs), \uC81C\uC9C0\uBC29\uB7C9 \uBC0F \uD53C\uD2B8\uB2C8\uC2A4 \uD310\uC815 \uBC94\uC8FC\uB97C \uC0B0\uCD9C\uD558\uC138\uC694. \uAC00\uC785 \uC5C6\uC774 \uBE0C\uB77C\uC6B0\uC800 \uB0B4 100% \uBB34\uB8CC \uAD6C\uB3D9.",
      "hi": "\u092F\u0942\u090F\u0938 \u0928\u0947\u0935\u0940 \u092C\u0949\u0921\u0940 \u092B\u0948\u091F \u092B\u0949\u0930\u094D\u092E\u0942\u0932\u093E \u0914\u0930 WHtR \u092E\u0947\u091F\u094D\u0930\u093F\u0915\u094D\u0938 \u092A\u0930 \u0906\u0927\u093E\u0930\u093F\u0924 \u092E\u0941\u092B\u093C\u094D\u0924 \u092C\u0949\u0921\u0940 \u092B\u0948\u091F \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930\u0964 \u0936\u0930\u0940\u0930 \u092E\u0947\u0902 \u0935\u0938\u093E \u0915\u093E \u092A\u094D\u0930\u0924\u093F\u0936\u0924, \u0935\u0938\u093E \u0926\u094D\u0930\u0935\u094D\u092F\u092E\u093E\u0928 (\u0915\u093F\u0917\u094D\u0930\u093E/\u092A\u093E\u0909\u0902\u0921), \u0926\u0941\u092C\u0932\u093E \u0926\u094D\u0930\u0935\u094D\u092F\u092E\u093E\u0928 \u0914\u0930 \u092B\u093F\u091F\u0928\u0947\u0938 \u0935\u0930\u094D\u0917\u0940\u0915\u0930\u0923 \u0936\u094D\u0930\u0947\u0923\u093F\u092F\u094B\u0902 \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902\u0964 \u092E\u0941\u092B\u093C\u094D\u0924 \u0914\u0930 \u0917\u094B\u092A\u0928\u0940\u092F\u0924\u093E-\u0915\u0947\u0902\u0926\u094D\u0930\u093F\u0924\u0964"
    },
    inputs: [
      { id: "gender", label: L.gender, type: "select", options: [{ value: "male", label: L.male }, { value: "female", label: L.female }] },
      { id: "height", label: L.height, type: "number", placeholder: "175" },
      { id: "waist", label: L.waist, type: "number", placeholder: "80" },
      { id: "neck", label: L.neck, type: "number", placeholder: "38" },
      { id: "hip", label: L.hip, type: "number", placeholder: "90" }
    ],
    calculate: (inputs, system) => {
      let h = parseFloat(inputs.height) || 170;
      let w = parseFloat(inputs.waist) || 80;
      let n = parseFloat(inputs.neck) || 38;
      let hip = parseFloat(inputs.hip) || 90;
      if (system === "imperial") {
        h = h * 2.54;
        w = w * 2.54;
        n = n * 2.54;
        hip = hip * 2.54;
      }
      let fat = 0;
      if (inputs.gender === "male") {
        const diff = w - n;
        if (diff > 0) {
          fat = 495 / (1.0324 - 0.19077 * Math.log10(diff) + 0.15456 * Math.log10(h)) - 450;
        }
      } else {
        const diff = w + hip - n;
        if (diff > 0) {
          fat = 495 / (1.29579 - 0.35004 * Math.log10(diff) + 0.221 * Math.log10(h)) - 450;
        }
      }
      fat = Math.max(2, Math.min(fat, 60));
      let category = "Fitness";
      const isMale = inputs.gender === "male";
      if (isMale) {
        if (fat < 6) category = "Essential Fat (2-5%)";
        else if (fat < 14) category = "Athletes (6-13%)";
        else if (fat < 18) category = "Fitness (14-17%)";
        else if (fat < 25) category = "Average (18-24%)";
        else category = "Obese (25%+)";
      } else {
        if (fat < 14) category = "Essential Fat (10-13%)";
        else if (fat < 21) category = "Athletes (14-20%)";
        else if (fat < 25) category = "Fitness (21-24%)";
        else if (fat < 32) category = "Average (25-31%)";
        else category = "Obese (32%+)";
      }
      return {
        primary: { value: fat.toFixed(1), label: { en: "Body Fat Percentage", es: "Porcentaje de Grasa", fr: "Taux de Mati\xE8re Grasse", de: "K\xF6rperfettanteil", ko: "\uCCB4\uC9C0\uBC29\uB960", hi: "\u092C\u0949\u0921\u0940 \u092B\u0948\u091F \u092A\u094D\u0930\u0924\u093F\u0936\u0924" }, unit: "%" },
        secondary: [
          { label: { en: "ACE Category", es: "Categor\xEDa ACE", fr: "Cat\xE9gorie ACE", de: "ACE-Kategorie", ko: "ACE \uBD84\uB958 \uB4F1\uAE09", hi: "ACE \u0936\u094D\u0930\u0947\u0923\u0940" }, value: category, unit: "" },
          { label: { en: "US Navy Formula", es: "F\xF3rmula US Navy", fr: "Formule US Navy", de: "US Navy Formel", ko: "\uBBF8 \uD574\uAD70 \uACF5\uC2DD \uC801\uC6A9", hi: "\u092F\u0942\u090F\u0938 \u0928\u0947\u0935\u0940 \u092B\u0949\u0930\u094D\u092E\u0942\u0932\u093E" }, value: "Anthropometric Tape Method", unit: "" }
        ]
      };
    }
  },
  {
    slug: "lean-body-mass-calculator",
    name: { en: "Lean Body Mass Calculator", es: "Calculadora de Masa Magra", fr: "Calculateur de Masse Lean", de: "Fettfreie Masse Rechner", ko: "\uC81C\uC9C0\uBC29\uB7C9 \uACC4\uC0B0\uAE30", hi: "\u0932\u0940\u0928 \u092C\u0949\u0921\u0940 \u092E\u093E\u0938 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930" },
    title: { en: "Lean Body Mass Calculator - LBM Metric", es: "Calculadora de Masa Corporal Magra", fr: "Calculateur de Masse Corporelle Maigre", de: "Rechner f\xFCr fettfreie K\xF6rpermasse", ko: "\uC81C\uC9C0\uBC29\uCCB4\uC911 \uACC4\uC0B0\uAE30", hi: "\u0932\u0940\u0928 \u092C\u0949\u0921\u0940 \u092E\u093E\u0938 (LBM) \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930" },
    description: {
      "en": "Free Lean Body Mass Calculator (LBM Calculator). Calculate lean body mass, fat-free mass percentage, and body composition using Boer, James, and Hume equations by height and weight with privacy-focused, browser calculations.",
      "es": "Calculadora de masa corporal magra (LBM) gratuita. Calcula la masa corporal magra, el porcentaje de masa libre de grasa y la composici\xF3n corporal utilizando las ecuaciones de Boer, James y Hume por altura y peso con c\xE1lculos privados en el navegador.",
      "fr": "Calculateur de masse corporelle maigre (LBM) gratuit. Calculez la masse corporelle maigre, le pourcentage de masse sans graisse et la composition corporelle \xE0 l'aide des \xE9quations de Boer, James et Hume selon la taille et le poids avec calculs sur navigateur.",
      "de": "Kostenloser Magermasse-Rechner (LBM-Rechner). Berechnen Sie Ihre magere K\xF6rpermasse, den fettfreien Masseprozentsatz und die K\xF6rperzusammensetzung mit den Formeln nach Boer, James und Hume datenschutzorientiert im Browser.",
      "ko": "\uBB34\uB8CC \uC81C\uC9C0\uBC29\uB7C9(LBM) \uACC4\uC0B0\uAE30. Boer, James \uBC0F Hume \uACF5\uC2DD\uC744 \uD65C\uC6A9\uD558\uC5EC \uC2E0\uC7A5\uACFC \uCCB4\uC911\uBCC4 \uC81C\uC9C0\uBC29\uB7C9, \uBB34\uC9C0\uBC29 \uBE44\uC728 \uBC0F \uCCB4\uC131\uBD84\uC744 \uC815\uD655\uD558\uAC8C \uC0B0\uCD9C\uD558\uC138\uC694. \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uC5C6\uB294 100% \uBE0C\uB77C\uC6B0\uC800 \uACC4\uC0B0.",
      "hi": "\u092E\u0941\u092B\u093C\u094D\u0924 \u0932\u0940\u0928 \u092C\u0949\u0921\u0940 \u092E\u093E\u0938 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 (LBM Calculator)\u0964 \u090A\u0902\u091A\u093E\u0908 \u0914\u0930 \u0935\u091C\u0928 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u092C\u094B\u0905\u0930, \u091C\u0947\u092E\u094D\u0938 \u0914\u0930 \u0939\u094D\u092F\u0942\u092E \u0938\u092E\u0940\u0915\u0930\u0923\u094B\u0902 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0915\u0947 \u0926\u0941\u092C\u0932\u0947 \u0936\u0930\u0940\u0930 \u0915\u0947 \u0926\u094D\u0930\u0935\u094D\u092F\u092E\u093E\u0928, \u0935\u0938\u093E \u0930\u0939\u093F\u0924 \u0926\u094D\u0930\u0935\u094D\u092F\u092E\u093E\u0928 \u092A\u094D\u0930\u0924\u093F\u0936\u0924 \u0914\u0930 \u0936\u0930\u0940\u0930 \u0915\u0940 \u0938\u0902\u0930\u091A\u0928\u093E \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902\u0964 \u092E\u0941\u092B\u093C\u094D\u0924 \u0914\u0930 \u0917\u094B\u092A\u0928\u0940\u092F\u0924\u093E-\u0915\u0947\u0902\u0926\u094D\u0930\u093F\u0924\u0964"
    },
    inputs: [
      { id: "weight", label: L.weight, type: "number", placeholder: "70" },
      { id: "height", label: L.height, type: "number", placeholder: "175" },
      { id: "gender", label: L.gender, type: "select", options: [{ value: "male", label: L.male }, { value: "female", label: L.female }] }
    ],
    calculate: (inputs, system) => {
      let w = parseFloat(inputs.weight) || 0;
      let h = parseFloat(inputs.height) || 0;
      if (system === "imperial") {
        w = w * 0.453592;
        h = h * 2.54;
      }
      let lbm = 0;
      if (inputs.gender === "male") {
        lbm = 0.407 * w + 0.267 * h - 19.2;
      } else {
        lbm = 0.252 * w + 0.473 * h - 48.3;
      }
      lbm = Math.max(0, lbm);
      const fat = w - lbm;
      const displayLbm = system === "imperial" ? lbm / 0.453592 : lbm;
      const displayFat = system === "imperial" ? fat / 0.453592 : fat;
      return {
        primary: { value: displayLbm.toFixed(1), label: { en: "Lean Body Mass", es: "Masa Corporal Magra", fr: "Masse Maigre", de: "Fettfreie Masse", ko: "\uC81C\uC9C0\uBC29 \uC2E4\uB7C9", hi: "\u0932\u0940\u0928 \u092C\u0949\u0921\u0940 \u092E\u093E\u0938" }, unit: system === "imperial" ? "lbs" : "kg" },
        secondary: [
          { label: { en: "Fat Mass", es: "Masa Grasa", fr: "Masse Grasse", de: "Fettmasse", ko: "\uC9C0\uBC29 \uC9C8\uB7C9", hi: "\u0935\u0938\u093E \u0926\u094D\u0930\u0935\u094D\u092F\u092E\u093E\u0928" }, value: displayFat.toFixed(1), unit: system === "imperial" ? "lbs" : "kg" },
          { label: { en: "Lean Mass Ratio", es: "Proporci\xF3n de Masa Magra", fr: "Proportion de Masse Maigre", de: "Prozentualer LBM", ko: "\uC81C\uC9C0\uBC29 \uBE44\uC728", hi: "\u0932\u0940\u0928 \u092E\u093E\u0938 \u0905\u0928\u0941\u092A\u093E\u0924" }, value: (lbm / w * 100).toFixed(1), unit: "%" }
        ]
      };
    }
  },
  {
    slug: "ideal-weight-calculator",
    name: { en: "Ideal Weight Calculator", es: "Calculadora de Peso Ideal", fr: "Calculateur de Poids Id\xE9al", de: "Idealgewicht Rechner", ko: "\uC774\uC0C1 \uCCB4\uC911 \uACC4\uC0B0\uAE30 (Ideal Weight Calculator)", hi: "\u0906\u0926\u0930\u094D\u0936 \u0935\u091C\u0928 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 (Ideal Weight Calculator)" },
    title: {
      en: "Ideal Weight Calculator \u2013 Ideal Body Weight (IBW) by Height (kg/lbs)",
      es: "Calculadora de Peso Ideal por Altura \u2013 Peso Corporal Ideal (IBW)",
      fr: "Calculateur de Poids Id\xE9al selon la Taille \u2013 Poids Id\xE9al (IBW)",
      de: "Idealgewicht Rechner nach K\xF6rpergr\xF6\xDFe \u2013 Ideales K\xF6rpergewicht (IBW)",
      ko: "\uC774\uC0C1 \uCCB4\uC911 \uACC4\uC0B0\uAE30 (Ideal Weight Calculator) \u2013 \uD0A4\uBCC4 \uAD8C\uC7A5 \uCCB4\uC911 (IBW)",
      hi: "\u0906\u0926\u0930\u094D\u0936 \u0935\u091C\u0928 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 - \u090A\u0902\u091A\u093E\u0908 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0906\u0907\u0921\u093F\u092F\u0932 \u092C\u0949\u0921\u0940 \u0935\u0947\u091F (IBW Calculator)"
    },
    description: {
      "en": "Free Ideal Weight Calculator. Calculate ideal body weight (IBW) reference ranges using Devine, Robinson, Miller, and Hamwi medical equations based on height and gender with privacy-focused, browser calculations.",
      "es": "Calculadora de peso ideal gratuita. Calcula rangos de referencia de peso corporal ideal (IBW) utilizando las ecuaciones m\xE9dicas de Devine, Robinson, Miller y Hamwi seg\xFAn altura y g\xE9nero con c\xE1lculos privados en el navegador.",
      "fr": "Calculateur de poids id\xE9al gratuit. Calculez les plages de r\xE9f\xE9rence du poids id\xE9al (IBW) \xE0 l'aide des \xE9quations m\xE9dicales de Devine, Robinson, Miller et Hamwi selon la taille et le genre avec calculs sur navigateur.",
      "de": "Kostenloser Idealgewicht-Rechner. Berechnen Sie den Referenzbereich f\xFCr das ideale K\xF6rpergewicht (IBW) mit den medizinischen Formeln nach Devine, Robinson, Miller und Hamwi nach K\xF6rpergr\xF6\xDFe und Geschlecht datenschutzorientiert im Browser.",
      "ko": "\uBB34\uB8CC \uC774\uC0C1 \uCCB4\uC911 \uACC4\uC0B0\uAE30. \uC2E0\uC7A5\uACFC \uC131\uBCC4\uC5D0 \uB530\uB77C Devine, Robinson, Miller \uBC0F Hamwi \uC758\uD559 \uACF5\uC2DD\uC744 \uC801\uC6A9\uD558\uC5EC \uC774\uC0C1\uC801\uC778 \uCCB4\uC911(IBW) \uAD8C\uC7A5 \uBC94\uC704\uB97C \uC0B0\uCD9C\uD558\uC138\uC694. \uAC00\uC785 \uC5C6\uB294 100% \uBE0C\uB77C\uC6B0\uC800 \uACC4\uC0B0.",
      "hi": "\u092E\u0941\u092B\u093C\u094D\u0924 \u0906\u0926\u0930\u094D\u0936 \u0935\u091C\u0928 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930\u0964 \u090A\u0902\u091A\u093E\u0908 \u0914\u0930 \u0932\u093F\u0902\u0917 \u0915\u0947 \u0906\u0927\u093E\u0930 \u092A\u0930 \u0921\u093F\u0935\u093E\u0907\u0928, \u0930\u0949\u092C\u093F\u0928\u094D\u0938\u0928, \u092E\u093F\u0932\u0930 \u0914\u0930 \u0939\u092E\u0935\u0940 \u091A\u093F\u0915\u093F\u0924\u094D\u0938\u093E \u0938\u092E\u0940\u0915\u0930\u0923\u094B\u0902 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0915\u0947 \u0906\u0926\u0930\u094D\u0936 \u0936\u0930\u0940\u0930 \u0935\u091C\u0928 (IBW) \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E\u0913\u0902 \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902\u0964 \u092E\u0941\u092B\u093C\u094D\u0924 \u0914\u0930 \u0917\u094B\u092A\u0928\u0940\u092F\u0924\u093E-\u0915\u0947\u0902\u0926\u094D\u0930\u093F\u0924\u0964"
    },
    inputs: [
      { id: "height", label: L.height, type: "number", placeholder: "175" },
      { id: "gender", label: L.gender, type: "select", options: [{ value: "male", label: L.male }, { value: "female", label: L.female }] }
    ],
    calculate: (inputs, system) => {
      let h = parseFloat(inputs.height) || 0;
      if (system === "imperial") {
        h = h * 2.54;
      }
      const hInches = h / 2.54;
      const over5Ft = Math.max(0, hInches - 60);
      const devine = inputs.gender === "male" ? 50 + 2.3 * over5Ft : 45.5 + 2.3 * over5Ft;
      const robinson = inputs.gender === "male" ? 52 + 1.9 * over5Ft : 49 + 1.7 * over5Ft;
      const miller = inputs.gender === "male" ? 56.2 + 1.41 * over5Ft : 53.1 + 1.36 * over5Ft;
      const hamwi = inputs.gender === "male" ? 48 + 2.7 * over5Ft : 45.5 + 2.2 * over5Ft;
      const hM = h / 100;
      const minBmiWeight = 18.5 * (hM * hM);
      const maxBmiWeight = 24.9 * (hM * hM);
      const conv = (kgVal) => system === "imperial" ? kgVal / 0.453592 : kgVal;
      const unitStr = system === "imperial" ? "lbs" : "kg";
      return {
        primary: { value: conv(devine).toFixed(1), label: { en: "Ideal Body Weight (Devine)", es: "Peso Ideal (Devine)", fr: "Poids Id\xE9al (Devine)", de: "Idealgewicht (Devine)", ko: "\uAD8C\uC7A5 \uC774\uC0C1 \uCCB4\uC911 (Devine)", hi: "\u0906\u0926\u0930\u094D\u0936 \u0935\u091C\u0928 (Devine)" }, unit: unitStr },
        secondary: [
          { label: { en: "Robinson Formula", es: "F\xF3rmula Robinson", fr: "Formule Robinson", de: "Robinson-Formel", ko: "\uB85C\uBE48\uC2A8 \uACF5\uC2DD \uACB0\uACFC", hi: "\u0930\u0949\u092C\u093F\u0928\u094D\u0938\u0928 \u092B\u0949\u0930\u094D\u092E\u0942\u0932\u093E" }, value: conv(robinson).toFixed(1), unit: unitStr },
          { label: { en: "Miller Formula", es: "F\xF3rmula Miller", fr: "Formule Miller", de: "Miller-Formel", ko: "\uBC00\uB7EC \uACF5\uC2DD \uACB0\uACFC", hi: "\u092E\u093F\u0932\u0930 \u092B\u0949\u0930\u094D\u092E\u0942\u0932\u093E" }, value: conv(miller).toFixed(1), unit: unitStr },
          { label: { en: "Hamwi Formula", es: "F\xF3rmula Hamwi", fr: "Formule Hamwi", de: "Hamwi-Formel", ko: "\uD568\uC704 \uACF5\uC2DD \uACB0\uACFC", hi: "\u0939\u092E\u0935\u0940 \u092B\u0949\u0930\u094D\u092E\u0942\u0932\u093E" }, value: conv(hamwi).toFixed(1), unit: unitStr },
          { label: { en: "Healthy BMI Weight Range", es: "Rango de Peso Saludable", fr: "Plage de Poids Sant\xE9", de: "Gesunder Gewichtsbereich", ko: "\uAC74\uAC15\uD55C \uCCB4\uC911 \uBC94\uC704", hi: "\u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F\u092A\u094D\u0930\u0926 \u0935\u091C\u0928 \u0938\u0940\u092E\u093E" }, value: `${conv(minBmiWeight).toFixed(1)} - ${conv(maxBmiWeight).toFixed(1)}`, unit: unitStr }
        ]
      };
    }
  },
  {
    slug: "calorie-calculator",
    name: { en: "Calorie Deficit Calculator", es: "Calculadora de D\xE9ficit Cal\xF3rico", fr: "Calculateur de D\xE9ficit Calorique", de: "Kaloriendefizit Rechner", ko: "\uCE7C\uB85C\uB9AC \uC801\uC790 \uACC4\uC0B0\uAE30 (Calorie Deficit Calculator)", hi: "\u0915\u0948\u0932\u094B\u0930\u0940 \u0918\u093E\u091F\u093E \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930" },
    title: { en: "Calorie Deficit Calculator \u2013 Estimated Daily Calorie Planning", es: "Calculadora de D\xE9ficit Cal\xF3rico \u2013 Planificaci\xF3n Cal\xF3rica Diaria", fr: "Calculateur de D\xE9ficit Calorique \u2013 Planification Calorique", de: "Kaloriendefizit Rechner \u2013 T\xE4glicher Kalorienbedarf", ko: "\uBB34\uB8CC \uCE7C\uB85C\uB9AC \uC801\uC790 \uACC4\uC0B0\uAE30 (Calorie Deficit Calculator)", hi: "\u092E\u0941\u092B\u093C\u094D\u0924 \u0915\u0948\u0932\u094B\u0930\u0940 \u0918\u093E\u091F\u093E \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 - \u0905\u0928\u0941\u092E\u093E\u0928\u093F\u0924 \u0926\u0948\u0928\u093F\u0915 \u0915\u0948\u0932\u094B\u0930\u0940 \u092F\u094B\u091C\u0928\u093E" },
    description: {
      "en": "Free Calorie Calculator for weight loss, maintenance, and weight gain. Calculate daily calorie needs, macro breakdown, and calorie deficit target based on age, height, weight, and activity level with privacy-focused, browser calculations.",
      "es": "Calculadora de calor\xEDas gratuita para p\xE9rdida de peso, mantenimiento y ganancia de peso. Calcula necesidades cal\xF3ricas diarias, desglose de macronutrientes y d\xE9ficit cal\xF3rico objetivo por edad, altura, peso y nivel de actividad con c\xE1lculos privados en el navegador.",
      "fr": "Calculateur de calories gratuit pour la perte de poids, le maintien et la prise de masse. Calculez vos besoins caloriques quotidiens, la r\xE9partition des macronutriments et votre objectif de d\xE9ficit calorig\xE8ne selon l'\xE2ge, la taille, le poids et l'activit\xE9 avec calculs sur navigateur.",
      "de": "Kostenloser Kalorienrechner zum Abnehmen, Gewicht halten und Zunehmen. Berechnen Sie Ihren t\xE4glichen Kalorienbedarf, die Makron\xE4hrstoffverteilung und das Ziel-Kaloriendefizit nach Alter, Gr\xF6\xDFe, Gewicht und Aktivit\xE4tslevel datenschutzorientiert im Browser.",
      "ko": "\uCCB4\uC911 \uAC10\uB7C9, \uD604\uC7AC \uCCB4\uC911 \uC720\uC9C0 \uBC0F \uCCB4\uC911 \uC99D\uAC00\uB97C \uC704\uD55C \uBB34\uB8CC \uCE7C\uB85C\uB9AC \uACC4\uC0B0\uAE30. \uB098\uC774, \uC2E0\uC7A5, \uCCB4\uC911 \uBC0F \uD65C\uB3D9\uB7C9\uC5D0 \uB530\uB978 \uC77C\uC77C \uD544\uC694 \uCE7C\uB85C\uB9AC, \uC601\uC591\uC18C \uBE44\uC728 \uBC0F \uCE7C\uB85C\uB9AC \uC18C\uBAA8 \uBAA9\uD45C\uB97C \uC0B0\uCD9C\uD558\uC138\uC694. \uAC00\uC785 \uC5C6\uB294 100% \uBB34\uB8CC \uB3C4\uAD6C.",
      "hi": "\u0935\u091C\u0928 \u0918\u091F\u093E\u0928\u0947, \u0935\u091C\u0928 \u092C\u0928\u093E\u090F \u0930\u0916\u0928\u0947 \u0914\u0930 \u0935\u091C\u0928 \u092C\u0922\u093C\u093E\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u092E\u0941\u092B\u093C\u094D\u0924 \u0915\u0948\u0932\u094B\u0930\u0940 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930\u0964 \u0909\u092E\u094D\u0930, \u090A\u0902\u091A\u093E\u0908, \u0935\u091C\u0928 \u0914\u0930 \u0917\u0924\u093F\u0935\u093F\u0927\u093F \u0938\u094D\u0924\u0930 \u0915\u0947 \u0906\u0927\u093E\u0930 \u092A\u0930 \u0926\u0948\u0928\u093F\u0915 \u0915\u0948\u0932\u094B\u0930\u0940 \u0906\u0935\u0936\u094D\u092F\u0915\u0924\u093E\u0913\u0902, \u092E\u0948\u0915\u094D\u0930\u094B \u092C\u094D\u0930\u0947\u0915\u0921\u093E\u0909\u0928 \u0914\u0930 \u0915\u0948\u0932\u094B\u0930\u0940 \u0918\u093E\u091F\u0947 \u0915\u0947 \u0932\u0915\u094D\u0937\u094D\u092F \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902\u0964 \u092E\u0941\u092B\u093C\u094D\u0924 \u0914\u0930 \u0917\u094B\u092A\u0928\u0940\u092F\u0924\u093E-\u0915\u0947\u0902\u0926\u094D\u0930\u093F\u0924\u0964"
    },
    inputs: [
      { id: "weight", label: L.weight, type: "number", placeholder: "70" },
      { id: "height", label: L.height, type: "number", placeholder: "175" },
      { id: "age", label: L.age, type: "number", placeholder: "25" },
      { id: "gender", label: L.gender, type: "select", options: [{ value: "male", label: L.male }, { value: "female", label: L.female }] },
      { id: "activity", label: L.activity, type: "select", options: [
        { value: "1.2", label: L.sedentary },
        { value: "1.375", label: L.light },
        { value: "1.55", label: L.moderate },
        { value: "1.725", label: L.active }
      ] },
      { id: "goal", label: L.goal, type: "select", options: [
        { value: "lose", label: L.loseWeight },
        { value: "maintain", label: L.maintainWeight },
        { value: "gain", label: L.gainWeight }
      ] }
    ],
    calculate: (inputs, system) => {
      let w = parseFloat(inputs.weight) || 0;
      let h = parseFloat(inputs.height) || 0;
      if (system === "imperial") {
        w = w * 0.453592;
        h = h * 2.54;
      }
      const age = parseInt(inputs.age) || 25;
      const act = parseFloat(inputs.activity) || 1.2;
      const bmr = inputs.gender === "male" ? 10 * w + 6.25 * h - 5 * age + 5 : 10 * w + 6.25 * h - 5 * age - 161;
      const tdee = bmr * act;
      let targetCal = tdee;
      let deficitVal = 0;
      if (inputs.goal === "lose") {
        deficitVal = 500;
        targetCal = tdee - deficitVal;
      } else if (inputs.goal === "gain") {
        targetCal = tdee + 500;
      }
      const weeklyFatLoss = (tdee - targetCal) * 7 / 7700;
      const displayLoss = system === "imperial" ? (weeklyFatLoss * 2.20462).toFixed(1) : weeklyFatLoss.toFixed(2);
      const lossUnit = system === "imperial" ? "lbs/week" : "kg/week";
      const proteinGuard = Math.round(w * 2);
      return {
        primary: { value: Math.round(targetCal), label: { en: "Target Daily Calories", es: "Objetivo Diario Calor\xEDas", fr: "Objectif Calorique Journalier", de: "T\xE4gliche Zielkalorien", ko: "\uBAA9\uD45C \uC77C\uC77C \uCE7C\uB85C\uB9AC \uC218\uCE58", hi: "\u0932\u0915\u094D\u0937\u093F\u0924 \u0926\u0948\u0928\u093F\u0915 \u0915\u0948\u0932\u094B\u0930\u0940" }, unit: "kcal/day" },
        secondary: [
          { label: { en: "Daily Calorie Deficit", es: "D\xE9ficit Cal\xF3rico Diario", fr: "D\xE9ficit Calorique Journalier", de: "T\xE4gliches Kaloriendefizit", ko: "\uC77C\uC77C \uCE7C\uB85C\uB9AC \uC801\uC790", hi: "\u0926\u0948\u0928\u093F\u0915 \u0915\u0948\u0932\u094B\u0930\u0940 \u0918\u093E\u091F\u093E" }, value: Math.round(tdee - targetCal), unit: "kcal/day" },
          { label: { en: "Est. Weight-Change Rate", es: "Tasa Est. Cambio de Peso", fr: "Taux Est. Variation de Poids", de: "Gesch\xE4tzter Gewichtsver\xE4nderungssatz", ko: "\uC608\uC0C1 \uCCB4\uC911 \uBCC0\uD654\uC728", hi: "\u0905\u0928\u0941\u092E\u093E\u0928\u093F\u0924 \u0935\u091C\u0928 \u092A\u0930\u093F\u0935\u0930\u094D\u0924\u0928 \u0926\u0930" }, value: displayLoss, unit: lossUnit },
          { label: { en: "Maintenance (TDEE)", es: "Mantenimiento (TDEE)", fr: "Maintenance (TDEE)", de: "Erhaltungskalorien (TDEE)", ko: "\uC720\uC9C0 \uC5D0\uB108\uC9C0 (TDEE)", hi: "\u0930\u0916\u0930\u0916\u093E\u0935 (TDEE)" }, value: Math.round(tdee), unit: "kcal" },
          { label: { en: "Deficit Protein Target", es: "Objetivo de Prote\xEDna", fr: "Objectif Prot\xE9ines D\xE9ficit", de: "Protein-Ziel im Defizit", ko: "\uC801\uC790 \uC2DC \uB2E8\uBC31\uC9C8 \uBAA9\uD45C", hi: "\u0918\u093E\u091F\u0947 \u092E\u0947\u0902 \u092A\u094D\u0930\u094B\u091F\u0940\u0928 \u0932\u0915\u094D\u0937\u094D\u092F" }, value: proteinGuard, unit: "g/day" }
        ]
      };
    }
  },
  {
    slug: "protein-intake-calculator",
    name: { en: "Protein Intake Calculator", es: "Calculadora de Consumo de Prote\xEDnas", fr: "Calculateur d'Apport en Prot\xE9ines", de: "T\xE4glicher Proteinbedarf Rechner", ko: "\uB2E8\uBC31\uC9C8 \uC12D\uCDE8\uB7C9 \uACC4\uC0B0\uAE30 (Protein Intake Calculator)", hi: "\u092A\u094D\u0930\u094B\u091F\u0940\u0928 \u0938\u0947\u0935\u0928 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930" },
    title: { en: "Protein Intake Calculator \u2013 Free Daily Protein Target Tool", es: "Calculadora de Consumo de Prote\xEDnas Diario por Peso", fr: "Calculateur d'Apport en Prot\xE9ines Gratuit", de: "Protein Intake Rechner \u2013 T\xE4glicher Eiwei\xDFbedarf", ko: "\uBB34\uB8CC \uB2E8\uBC31\uC9C8 \uC12D\uCDE8\uB7C9 \uACC4\uC0B0\uAE30 (Protein Intake Calculator)", hi: "\u092E\u0941\u092B\u093C\u094D\u0924 \u092A\u094D\u0930\u094B\u091F\u0940\u0928 \u0938\u0947\u0935\u0928 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 - \u0926\u0948\u0928\u093F\u0915 \u092A\u094D\u0930\u094B\u091F\u0940\u0928 \u0932\u0915\u094D\u0937\u094D\u092F" },
    description: {
      "en": "Free Daily Protein Intake Calculator. Calculate optimal daily protein intake in grams for muscle growth, fat loss, and athletic performance based on weight, fitness goals, and activity with privacy-focused, browser calculations.",
      "es": "Calculadora de ingesta diaria de prote\xEDnas gratuita. Calcula la ingesta \xF3ptima diaria de prote\xEDnas en gramos para crecimiento muscular, p\xE9rdida de grasa y rendimiento deportivo seg\xFAn peso, objetivos y actividad con c\xE1lculos privados en el navegador.",
      "fr": "Calculateur de besoin quotidien en prot\xE9ines gratuit. Calculez l'apport quotidien optimal en prot\xE9ines (g) pour la prise de muscle, la perte de graisse et la performance selon le poids, les objectifs et l'activit\xE9 avec calculs sur navigateur.",
      "de": "Kostenloser Proteinbedarf-Rechner. Berechnen Sie Ihre optimale t\xE4gliche Proteinaufnahme in Gramm f\xFCr Muskelaufbau, Fettabbau und sportliche Leistung basierend auf Gewicht, Zielen und Aktivit\xE4t datenschutzorientiert im Browser.",
      "ko": "\uC77C\uC77C \uB2E8\uBC31\uC9C8 \uC12D\uCDE8\uB7C9 \uBB34\uB8CC \uACC4\uC0B0\uAE30. \uCCB4\uC911, \uD53C\uD2B8\uB2C8\uC2A4 \uBAA9\uD45C \uBC0F \uD65C\uB3D9\uB7C9\uC5D0 \uB530\uB77C \uADFC\uC721 \uC131\uC7A5, \uC9C0\uBC29 \uAC10\uB7C9 \uBC0F \uC6B4\uB3D9 \uC218\uD589 \uB2A5\uB825\uC744 \uC704\uD55C \uCD5C\uC801\uC758 \uB2E8\uBC31\uC9C8 \uC12D\uCDE8\uB7C9(g)\uC744 \uC0B0\uCD9C\uD558\uC138\uC694. \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uC5C6\uB294 100% \uBE0C\uB77C\uC6B0\uC800 \uACC4\uC0B0.",
      "hi": "\u092E\u0941\u092B\u093C\u094D\u0924 \u0926\u0948\u0928\u093F\u0915 \u092A\u094D\u0930\u094B\u091F\u0940\u0928 \u0938\u0947\u0935\u0928 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930\u0964 \u0935\u091C\u0928, \u092B\u093F\u091F\u0928\u0947\u0938 \u0932\u0915\u094D\u0937\u094D\u092F\u094B\u0902 \u0914\u0930 \u0917\u0924\u093F\u0935\u093F\u0927\u093F \u0915\u0947 \u0906\u0927\u093E\u0930 \u092A\u0930 \u092E\u093E\u0902\u0938\u092A\u0947\u0936\u093F\u092F\u094B\u0902 \u0915\u0940 \u0935\u0943\u0926\u094D\u0927\u093F, \u0935\u0938\u093E \u0939\u093E\u0928\u093F \u0914\u0930 \u090F\u0925\u0932\u0947\u091F\u093F\u0915 \u092A\u094D\u0930\u0926\u0930\u094D\u0936\u0928 \u0915\u0947 \u0932\u093F\u090F \u0917\u094D\u0930\u093E\u092E \u092E\u0947\u0902 \u0907\u0937\u094D\u091F\u0924\u092E \u0926\u0948\u0928\u093F\u0915 \u092A\u094D\u0930\u094B\u091F\u0940\u0928 \u0938\u0947\u0935\u0928 \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902\u0964 \u092E\u0941\u092B\u093C\u094D\u0924 \u0914\u0930 \u0917\u094B\u092A\u0928\u0940\u092F\u0924\u093E-\u0915\u0947\u0902\u0926\u094D\u0930\u093F\u0924\u0964"
    },
    inputs: [
      { id: "weight", label: L.weight, type: "number", placeholder: "70" },
      { id: "goal", label: L.goal, type: "select", options: [
        { value: "lose", label: L.loseWeight },
        { value: "maintain", label: L.maintainWeight },
        { value: "gain", label: L.gainWeight }
      ] }
    ],
    calculate: (inputs, system) => {
      let w = parseFloat(inputs.weight) || 0;
      if (system === "imperial") {
        w = w * 0.453592;
      }
      let factor = 1.6;
      if (inputs.goal === "lose") factor = 2;
      else if (inputs.goal === "gain") factor = 2.2;
      const protein = w * factor;
      return {
        primary: { value: Math.round(protein), label: { en: "Protein Target", es: "Objetivo de Prote\xEDna", fr: "Objectif Prot\xE9ines", de: "Zielzufuhr Eiwei\xDF", ko: "\uBAA9\uD45C \uB2E8\uBC31\uC9C8 \uC911\uB7C9", hi: "\u092A\u094D\u0930\u094B\u091F\u0940\u0928 \u0932\u0915\u094D\u0937\u094D\u092F" }, unit: "g/day" },
        secondary: [
          { label: { en: "Minimum Threshold", es: "Consumo M\xEDnimo", fr: "Seuil Minimum", de: "Mindestbedarf (DGE)", ko: "\uCD5C\uC18C \uB2E8\uBC31\uC9C8 \uAD8C\uC7A5\uB7C9", hi: "\u0928\u094D\u092F\u0942\u0928\u0924\u092E \u0938\u0940\u092E\u093E" }, value: Math.round(w * 0.8), unit: "g" },
          { label: { en: "Athletic Intake", es: "Consumo Atl\xE9tico", fr: "Athl\xE8tes Actifs", de: "Leistungssportler", ko: "\uD65C\uB3D9\uC131 \uC9D1\uC911 \uC12D\uCDE8\uB7C9", hi: "\u090F\u0925\u0932\u0947\u091F\u093F\u0915 \u0938\u0947\u0935\u0928" }, value: Math.round(w * 2.4), unit: "g" }
        ]
      };
    }
  },
  {
    slug: "water-intake-calculator",
    name: { en: "Daily Water Intake Calculator", es: "Calculadora de Consumo de Agua Diario", fr: "Calculateur d'Hydratation Journalier", de: "T\xE4glicher Wasserbedarf Rechner", ko: "\uD558\uB8E8 \uBB3C \uC12D\uCDE8\uB7C9 \uACC4\uC0B0\uAE30", hi: "\u0926\u0948\u0928\u093F\u0915 \u092A\u093E\u0928\u0940 \u0915\u093E \u0938\u0947\u0935\u0928 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930" },
    title: { en: "Daily Water Intake Calculator \u2013 Hydration by Weight Tool", es: "Calculadora de Consumo de Agua Diario por Peso", fr: "Calculateur d'Hydratation selon le Poids", de: "Wasserbedarf Rechner nach K\xF6rpergewicht \u2013 T\xE4glicher Zielwert", ko: "\uD558\uB8E8 \uBB3C \uC12D\uCDE8\uB7C9 \uACC4\uC0B0\uAE30 (Water Intake Calculator by Weight)", hi: "\u0926\u0948\u0928\u093F\u0915 \u092A\u093E\u0928\u0940 \u0915\u093E \u0938\u0947\u0935\u0928 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 - \u0935\u091C\u0928 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0939\u093E\u0907\u0921\u094D\u0930\u0947\u0936\u0928" },
    description: {
      "en": "Free Daily Water Intake Calculator. Calculate recommended daily water consumption in liters, glasses, and ounces based on body weight, climate, exercise duration, and activity level with privacy-focused, browser calculations.",
      "es": "Calculadora de ingesta diaria de agua gratuita. Calcula el consumo diario recomendado de agua en litros, vasos u onzas seg\xFAn el peso corporal, el clima, la duraci\xF3n del ejercicio y el nivel de actividad con c\xE1lculos privados en el navegador.",
      "fr": "Calculateur d'apport quotidien en eau gratuit. Calculez la consommation d'eau quotidienne recommand\xE9e en litres, verres et onces selon le poids, le climat, la dur\xE9e de l'exercice et l'activit\xE9 avec calculs sur navigateur.",
      "de": "Kostenloser Wasserbedarf-Rechner. Berechnen Sie Ihre empfohlene t\xE4gliche Wasseraufnahme in Litern, Gl\xE4sern und Unzen basierend auf K\xF6rpergewicht, Klima, Trainingsdauer und Aktivit\xE4t datenschutzorientiert im Browser.",
      "ko": "\uC77C\uC77C \uAD8C\uC7A5 \uC218\uBD84 \uC12D\uCDE8\uB7C9 \uBB34\uB8CC \uACC4\uC0B0\uAE30. \uCCB4\uC911, \uAE30\uD6C4, \uC6B4\uB3D9 \uC2DC\uAC04 \uBC0F \uC77C\uC0C1 \uD65C\uB3D9\uB7C9\uC5D0 \uB530\uB77C \uB9AC\uD130(L), \uCEF5 \uBC0F \uC628\uC2A4 \uB2E8\uC704\uB85C \uAD8C\uC7A5 \uC77C\uC77C \uC218\uBD84 \uC12D\uCDE8\uB7C9\uC744 \uACC4\uC0B0\uD558\uC138\uC694. \uAC00\uC785 \uC5C6\uC774 \uBE0C\uB77C\uC6B0\uC800 \uB0B4 100% \uBB34\uB8CC \uAD6C\uB3D9.",
      "hi": "\u092E\u0941\u092B\u093C\u094D\u0924 \u0926\u0948\u0928\u093F\u0915 \u091C\u0932 \u0938\u0947\u0935\u0928 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930\u0964 \u0936\u0930\u0940\u0930 \u0915\u0947 \u0935\u091C\u0928, \u091C\u0932\u0935\u093E\u092F\u0941, \u0935\u094D\u092F\u093E\u092F\u093E\u092E \u0915\u0940 \u0905\u0935\u0927\u093F \u0914\u0930 \u0917\u0924\u093F\u0935\u093F\u0927\u093F \u0938\u094D\u0924\u0930 \u0915\u0947 \u0906\u0927\u093E\u0930 \u092A\u0930 \u0932\u0940\u091F\u0930, \u0917\u094D\u0932\u093E\u0938 \u0914\u0930 \u0914\u0902\u0938 \u092E\u0947\u0902 \u0905\u0928\u0941\u0936\u0902\u0938\u093F\u0924 \u0926\u0948\u0928\u093F\u0915 \u092A\u093E\u0928\u0940 \u0915\u0940 \u0916\u092A\u0924 \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902\u0964 \u092E\u0941\u092B\u093C\u094D\u0924 \u0914\u0930 \u0917\u094B\u092A\u0928\u0940\u092F\u0924\u093E-\u0915\u0947\u0902\u0926\u094D\u0930\u093F\u0924\u0964"
    },
    inputs: [
      { id: "weight", label: L.weight, type: "number", placeholder: "70" },
      { id: "activity", label: L.activity, type: "select", options: [
        { value: "sedentary", label: L.sedentary },
        { value: "active", label: L.active }
      ] }
    ],
    calculate: (inputs, system) => {
      let w = parseFloat(inputs.weight) || 0;
      if (system === "imperial") {
        w = w * 0.453592;
      }
      let waterMl = w * 35;
      if (inputs.activity === "active") {
        waterMl += 750;
      }
      return {
        primary: { value: (waterMl / 1e3).toFixed(2), label: { en: "Water Target", es: "Objetivo de Agua", fr: "Objectif d'Hydratation", de: "T\xE4glicher Wasserbedarf", ko: "\uBAA9\uD45C \uC218\uBD84 \uC12D\uCDE8\uB7C9", hi: "\u092A\u093E\u0928\u0940 \u0915\u093E \u0932\u0915\u094D\u0937\u094D\u092F" }, unit: "Liters/day" },
        secondary: [
          { label: { en: "Standard Glasses (250ml)", es: "Vasos Est\xE1ndar (250ml)", fr: "Verres Standards", de: "Gl\xE4ser (250ml)", ko: "\uC77C\uBC18 \uCEF5 \uD69F\uC218 (250ml)", hi: "\u092E\u093E\u0928\u0915 \u0917\u093F\u0932\u093E\u0938 (250 \u092E\u093F\u0932\u0940)" }, value: Math.round(waterMl / 250) }
        ]
      };
    }
  },
  {
    slug: "macro-calculator",
    name: { en: "Macro Calculator", es: "Calculadora de Macros", fr: "Calculateur de Macros", de: "Makro Rechner", ko: "\uB9E4\uD06C\uB85C \uACC4\uC0B0\uAE30", hi: "\u092E\u0948\u0915\u094D\u0930\u094B \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930" },
    title: { en: "Macro Calculator \u2013 Free Macronutrient & IIFYM Ratio Tool", es: "Calculadora de Macros Gratis - Macronutrientes y IIFYM", fr: "Calculateur de Macros Gratuit - Glucides Prot\xE9ines Lipides", de: "Kostenloser Makro Rechner \u2013 IIFYM Makron\xE4hrstoff-Verteilung", ko: "\uBB34\uB8CC \uB9E4\uD06C\uB85C \uACC4\uC0B0\uAE30 (Macro Calculator & IIFYM Split)", hi: "\u092E\u0941\u092B\u093C\u094D\u0924 \u092E\u0948\u0915\u094D\u0930\u094B \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 - \u092E\u0948\u0915\u094D\u0930\u094B\u0928\u094D\u092F\u0942\u091F\u094D\u0930\u093F\u090F\u0902\u091F \u0914\u0930 IIFYM \u0905\u0928\u0941\u092A\u093E\u0924" },
    description: {
      "en": "Free Macro Calculator. Calculate optimal daily macronutrient targets (protein, carbs, fat in grams) for cutting, maintenance, or muscle gain based on your TDEE and fitness goals with privacy-focused, browser calculations.",
      "es": "Calculadora de macronutrientes gratuita. Calcula tus objetivos diarios de macronutrientes (prote\xEDnas, carbohidratos, grasas en gramos) para definici\xF3n, mantenimiento o volumen seg\xFAn tu TDEE y objetivos con c\xE1lculos privados en el navegador.",
      "fr": "Calculateur de macronutriments gratuit. Calculez vos objectifs quotidiens en macronutriments (prot\xE9ines, glucides, lipides en grammes) pour la s\xE8che, le maintien ou la prise de masse selon votre TDEE avec calculs sur navigateur.",
      "de": "Kostenloser Makron\xE4hrstoff-Rechner. Berechnen Sie Ihre optimalen t\xE4glichen Makroziele (Proteine, Kohlenhydrate, Fette in Gramm) zum Abnehmen, Halten oder Muskelaufbau basierend auf Ihrem TDEE datenschutzorientiert im Browser.",
      "ko": "\uBB34\uB8CC \uB9E4\uD06C\uB85C \uC601\uC591\uC18C \uACC4\uC0B0\uAE30. TDEE \uBC0F \uD53C\uD2B8\uB2C8\uC2A4 \uBAA9\uD45C\uC5D0 \uB530\uB77C \uB2E4\uC774\uC5B4\uD2B8, \uCCB4\uC911 \uC720\uC9C0 \uB610\uB294 \uADFC\uC721 \uC99D\uB7C9\uC744 \uC704\uD55C \uC77C\uC77C \uC601\uC591\uC18C \uBE44\uC728(\uB2E8\uBC31\uC9C8, \uD0C4\uC218\uD654\uBB3C, \uC9C0\uBC29 g)\uC744 \uC0B0\uCD9C\uD558\uC138\uC694. \uAC00\uC785 \uC5C6\uB294 100% \uBB34\uB8CC \uB3C4\uAD6C.",
      "hi": "\u092E\u0941\u092B\u093C\u094D\u0924 \u092E\u0948\u0915\u094D\u0930\u094B \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930\u0964 \u0905\u092A\u0928\u0947 TDEE \u0914\u0930 \u092B\u093F\u091F\u0928\u0947\u0938 \u0932\u0915\u094D\u0937\u094D\u092F\u094B\u0902 \u0915\u0947 \u0906\u0927\u093E\u0930 \u092A\u0930 \u0915\u091F\u093F\u0902\u0917, \u0930\u0916\u0930\u0916\u093E\u0935 \u092F\u093E \u092E\u093E\u0902\u0938\u092A\u0947\u0936\u093F\u092F\u094B\u0902 \u0915\u094B \u092C\u0922\u093C\u093E\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0907\u0937\u094D\u091F\u0924\u092E \u0926\u0948\u0928\u093F\u0915 \u092E\u0948\u0915\u094D\u0930\u094B\u0928\u094D\u092F\u0942\u091F\u094D\u0930\u093F\u090F\u0902\u091F \u0932\u0915\u094D\u0937\u094D\u092F\u094B\u0902 (\u092A\u094D\u0930\u094B\u091F\u0940\u0928, \u0915\u093E\u0930\u094D\u092C\u094D\u0938, \u0917\u094D\u0930\u093E\u092E \u092E\u0947\u0902 \u0935\u0938\u093E) \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902\u0964 \u092E\u0941\u092B\u093C\u094D\u0924 \u0914\u0930 \u0917\u094B\u092A\u0928\u0940\u092F\u0924\u093E-\u0915\u0947\u0902\u0926\u094D\u0930\u093F\u0924\u0964"
    },
    inputs: [
      { id: "weight", label: L.weight, type: "number", placeholder: "70" },
      { id: "height", label: L.height, type: "number", placeholder: "175" },
      { id: "age", label: L.age, type: "number", placeholder: "25" },
      { id: "gender", label: L.gender, type: "select", options: [{ value: "male", label: L.male }, { value: "female", label: L.female }] },
      { id: "activity", label: L.activity, type: "select", options: [
        { value: "1.2", label: L.sedentary },
        { value: "1.375", label: L.light },
        { value: "1.55", label: L.moderate },
        { value: "1.725", label: L.active }
      ] },
      { id: "goal", label: { en: "Nutrition Plan", es: "Plan Nutricional", fr: "R\xE9gime Alimentaire", de: "Di\xE4t-Plan", ko: "\uC2DD\uB2E8 \uAE30\uC870 \uAD6C\uC131", hi: "\u092A\u094B\u0937\u0923 \u092F\u094B\u091C\u0928\u093E" }, type: "select", options: [
        { value: "balanced", label: { en: "Balanced (40/30/30)", es: "Balanceado (40/30/30)", fr: "\xC9quilibr\xE9 (40/30/30)", de: "Ausgewogen (40/30/30)", ko: "\uADE0\uD615 \uC2DD\uB2E8 (40/30/30)", hi: "\u0938\u0902\u0924\u0941\u0932\u093F\u0924 (40/30/30)" } },
        { value: "lowcarb", label: { en: "Low Carb (20/40/40)", es: "Bajo en Carbos (20/40/40)", fr: "Low Carb (20/40/40)", de: "Low Carb (20/40/40)", ko: "\uC800\uD0C4\uC218\uD654\uBB3C (20/40/40)", hi: "\u0915\u092E \u0915\u093E\u0930\u094D\u092C (20/40/40)" } },
        { value: "highprotein", label: { en: "High Protein (35/40/25)", es: "Alto en Prote\xEDnas (35/40/25)", fr: "High Protein (35/40/25)", de: "Proteinreich (35/40/25)", ko: "\uACE0\uB2E8\uBC31 \uC2DD\uB2E8 (35/40/25)", hi: "\u0909\u091A\u094D\u091A \u092A\u094D\u0930\u094B\u091F\u0940\u0928 (35/40/25)" } }
      ] }
    ],
    calculate: (inputs, system) => {
      let w = parseFloat(inputs.weight) || 0;
      let h = parseFloat(inputs.height) || 0;
      if (system === "imperial") {
        w = w * 0.453592;
        h = h * 2.54;
      }
      const age = parseInt(inputs.age) || 25;
      const act = parseFloat(inputs.activity) || 1.2;
      const bmr = inputs.gender === "male" ? 10 * w + 6.25 * h - 5 * age + 5 : 10 * w + 6.25 * h - 5 * age - 161;
      const tdee = bmr * act;
      let carbsPct = 0.4, protPct = 0.3, fatPct = 0.3;
      if (inputs.goal === "lowcarb") {
        carbsPct = 0.2;
        protPct = 0.4;
        fatPct = 0.4;
      } else if (inputs.goal === "highprotein") {
        carbsPct = 0.35;
        protPct = 0.4;
        fatPct = 0.25;
      }
      const carbG = tdee * carbsPct / 4;
      const protG = tdee * protPct / 4;
      const fatG = tdee * fatPct / 9;
      return {
        primary: { value: Math.round(tdee), label: { en: "Daily Calories Target", es: "Calor\xEDas Objetivo", fr: "Calories Cibles", de: "Tagesbedarf Kalorien", ko: "\uD558\uB8E8 \uC18C\uBE44 \uC810\uC218", hi: "\u0926\u0948\u0928\u093F\u0915 \u0915\u0948\u0932\u094B\u0930\u0940 \u0932\u0915\u094D\u0937\u094D\u092F" }, unit: "kcal/day" },
        secondary: [
          { label: { en: "Carbohydrates", es: "Carbohidratos", fr: "Glucides", de: "Kohlenhydrate", ko: "\uD0C4\uC218\uD654\uBB3C", hi: "\u0915\u093E\u0930\u094D\u092C\u094B\u0939\u093E\u0907\u0921\u094D\u0930\u0947\u091F" }, value: Math.round(carbG), unit: "g" },
          { label: { en: "Protein", es: "Prote\xEDnas", fr: "Prot\xE9ines", de: "Protein (Eiwei\xDF)", ko: "\uB2E8\uBC31\uC9C8", hi: "\u092A\u094D\u0930\u094B\u091F\u0940\u0928" }, value: Math.round(protG), unit: "g" },
          { label: { en: "Fat", es: "Grasas", fr: "Lipides", de: "Fett", ko: "\uC9C0\uBC29", hi: "\u0935\u0938\u093E" }, value: Math.round(fatG), unit: "g" }
        ]
      };
    }
  },
  {
    slug: "waist-to-hip-ratio-calculator",
    name: { en: "Waist to Hip Ratio Calculator", es: "Calculadora de Relaci\xF3n Cintura a Cadera", fr: "Calculateur de Rapport Taille \xE0 Hanche", de: "Taille-zu-H\xFCfte-Verh\xE4ltnis Rechner", ko: "\uD5C8\uB9AC \uC5C9\uB369\uC774 \uBE44\uC728 \uACC4\uC0B0\uAE30 (WHR Calculator)", hi: "\u0915\u092E\u0930 \u0938\u0947 \u0915\u0942\u0932\u094D\u0939\u0947 \u0915\u093E \u0905\u0928\u0941\u092A\u093E\u0924 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930" },
    title: { en: "Waist to Hip Ratio Calculator \u2013 Free WHO WHR Chart & Tool", es: "Calculadora de Relaci\xF3n Cintura a Cadera - Tabla OMS WHR", fr: "Calculateur de Rapport Taille \xE0 Hanche - Normes OMS WHR", de: "Taille zu H\xFCfte Verh\xE4ltnis Rechner \u2013 WHO WHR Tabelle", ko: "\uD5C8\uB9AC \uC5C9\uB369\uC774 \uBE44\uC728 \uACC4\uC0B0\uAE30 (Waist to Hip Ratio Calculator)", hi: "\u0915\u092E\u0930 \u0938\u0947 \u0915\u0942\u0932\u094D\u0939\u0947 \u0915\u093E \u0905\u0928\u0941\u092A\u093E\u0924 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 - WHO WHR \u091A\u093E\u0930\u094D\u091F" },
    description: {
      "en": "Free Waist-to-Hip Ratio Calculator (WHR Calculator). Calculate your waist-to-hip ratio, body shape type (apple vs pear), and WHO cardiovascular health risk classification with privacy-focused, browser calculations.",
      "es": "Calculadora de relaci\xF3n cintura-cadera (WHR) gratuita. Calcula tu relaci\xF3n cintura-cadera, tipo de forma corporal (manzana vs pera) y clasificaci\xF3n de riesgo cardiovascular de la OMS con c\xE1lculos privados en el navegador.",
      "fr": "Calculateur du rapport taille/hanches (WHR) gratuit. Calculez votre rapport taille/hanches, votre morphologie (pomme vs poire) et la classification des risques cardiovasculaires selon l'OMS avec calculs sur navigateur.",
      "de": "Kostenloser Taille-H\xFCft-Verh\xE4ltnis Rechner (WHR-Rechner). Berechnen Sie Ihr Taille-H\xFCft-Verh\xE4ltnis, Ihren K\xF6rpertyp (Apfel vs. Birne) und die WHO-Risikoklassifizierung f\xFCr kardiovaskul\xE4re Gesundheit datenschutzorientiert im Browser.",
      "ko": "\uBB34\uB8CC \uD5C8\uB9AC-\uC5C9\uB369\uC774 \uB458\uB808 \uBE44\uC728 \uACC4\uC0B0\uAE30 (WHR Calculator). \uD5C8\uB9AC-\uC5C9\uB369\uC774 \uBE44\uC728(WHR), \uCCB4\uD615 \uC720\uD615(\uC0AC\uACFC\uD615 vs \uBC30\uD615) \uBC0F WHO \uC2EC\uD608\uAD00 \uAC74\uAC15 \uC704\uD5D8 \uBC94\uC8FC\uB97C \uC0B0\uCD9C\uD558\uC138\uC694. \uAC00\uC785 \uC5C6\uC774 \uBE0C\uB77C\uC6B0\uC800 \uB0B4 100% \uBB34\uB8CC \uAD6C\uB3D9.",
      "hi": "\u092E\u0941\u092B\u093C\u094D\u0924 \u0915\u092E\u0930-\u0938\u0947-\u0915\u0942\u0932\u094D\u0939\u0947 \u0915\u093E \u0905\u0928\u0941\u092A\u093E\u0924 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 (WHR Calculator)\u0964 \u0905\u092A\u0928\u0947 \u0915\u092E\u0930-\u0938\u0947-\u0915\u0942\u0932\u094D\u0939\u0947 \u0915\u0947 \u0905\u0928\u0941\u092A\u093E\u0924, \u0936\u0930\u0940\u0930 \u0915\u0947 \u0906\u0915\u093E\u0930 \u0915\u0947 \u092A\u094D\u0930\u0915\u093E\u0930 (\u0938\u0947\u092C \u092C\u0928\u093E\u092E \u0928\u093E\u0936\u092A\u093E\u0924\u0940) \u0914\u0930 \u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u0939\u0943\u0926\u092F \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u091C\u094B\u0916\u093F\u092E \u0935\u0930\u094D\u0917\u0940\u0915\u0930\u0923 \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902\u0964 \u092E\u0941\u092B\u093C\u094D\u0924 \u0914\u0930 \u0917\u094B\u092A\u0928\u0940\u092F\u0924\u093E-\u0915\u0947\u0902\u0926\u094D\u0930\u093F\u0924\u0964"
    },
    inputs: [
      { id: "waist", label: L.waist, type: "number", placeholder: "80" },
      { id: "hip", label: L.hip, type: "number", placeholder: "90" },
      { id: "gender", label: L.gender, type: "select", options: [{ value: "male", label: L.male }, { value: "female", label: L.female }] }
    ],
    calculate: (inputs) => {
      const w = parseFloat(inputs.waist) || 1;
      const h = parseFloat(inputs.hip) || 1;
      const whr = w / h;
      const isM = inputs.gender === "male";
      let risk = { en: "Standard Ratio", es: "Rango Est\xE1ndar", fr: "Plage Standard", de: "Standardbereich", ko: "\uD45C\uC900 \uBC94\uC704", hi: "\u092E\u093E\u0928\u0915 \u0905\u0928\u0941\u092A\u093E\u0924" };
      if (isM) {
        if (whr >= 0.9 && whr < 1) risk = { en: "Moderate Ratio", es: "Moderado", fr: "Mod\xE9r\xE9", de: "M\xE4\xDFig", ko: "\uBCF4\uD1B5", hi: "\u092E\u0927\u094D\u092F\u092E" };
        else if (whr >= 1) risk = { en: "Elevated Ratio", es: "Elevado", fr: "\xC9lev\xE9", de: "Erh\xF6ht", ko: "\uB192\uC74C", hi: "\u0909\u091A\u094D\u091A" };
      } else {
        if (whr >= 0.8 && whr < 0.85) risk = { en: "Moderate Ratio", es: "Moderado", fr: "Mod\xE9r\xE9", de: "M\xE4\xDFig", ko: "\uBCF4\uD1B5", hi: "\u092E\u0927\u094D\u092F\u092E" };
        else if (whr >= 0.85) risk = { en: "Elevated Ratio", es: "Elevado", fr: "\xC9lev\xE9", de: "Erh\xF6ht", ko: "\uB192\uC74C", hi: "\u0909\u091A\u094D\u091A" };
      }
      return {
        primary: { value: whr.toFixed(2), label: { en: "Waist-to-Hip Ratio", es: "Proporci\xF3n Cintura-Cadera", fr: "Rapport WHR", de: "Taille-H\xFCft-Verh\xE4ltnis", ko: "\uD5C8\uB9AC \uB300\uBE44 \uC5C9\uB369\uC774 \uBE44", hi: "\u0915\u092E\u0930 \u0938\u0947 \u0915\u0942\u0932\u094D\u0939\u0947 \u0915\u093E \u0905\u0928\u0941\u092A\u093E\u0924" } },
        secondary: [
          { label: { en: "Distribution Reference", es: "Referencia de Distribuci\xF3n", fr: "R\xE9f\xE9rence de Distribution", de: "Verteilungsreferenz", ko: "\uBD84\uD3EC \uCC38\uC870", hi: "\u0935\u093F\u0924\u0930\u0923 \u0938\u0902\u0926\u0930\u094D\u092D" }, value: risk.en }
        ]
      };
    }
  },
  {
    slug: "body-surface-area-calculator",
    name: { en: "Mosteller BSA Calculator (Square Root Method)", es: "Calculadora BSA M\xE9todo Mosteller (Metros Cuadrados)", fr: "Calculateur BSA Formule Mosteller (M\xE8tres Carr\xE9s)", de: "Mosteller BSA Rechner (Quadratmeter)", ko: "Mosteller \uCCB4\uD45C\uBA74\uC801 \uACC4\uC0B0\uAE30 (Square Meters BSA)", hi: "\u092E\u094B\u0938\u094D\u091F\u0947\u0932\u0930 BSA \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 (\u0935\u0930\u094D\u0917 \u092E\u0940\u091F\u0930)" },
    title: { en: "Mosteller BSA Calculator (Square Root Method) \u2013 Body Surface Area m\xB2 Tool", es: "Calculadora BSA F\xF3rmula Mosteller en Metros Cuadrados (m\xB2)", fr: "Calculateur de Surface Corporelle BSA Formule Mosteller m\xB2", de: "Mosteller BSA Rechner Quadratmeter (m\xB2) \u2013 K\xF6rperoberfl\xE4che", ko: "Mosteller BSA \uACC4\uC0B0\uAE30 Square Meters (\uCCB4\uD45C\uBA74\uC801 \uACC4\uC0B0\uAE30)", hi: "\u092E\u094B\u0938\u094D\u091F\u0947\u0932\u0930 BSA \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 square meters - \u092C\u0949\u0921\u0940 \u0938\u0930\u092B\u0947\u0938 \u090F\u0930\u093F\u092F\u093E" },
    description: {
      "en": "Free Body Surface Area Calculator (BSA Calculator). Calculate total body surface area in square meters (m\xB2) using Mosteller, DuBois, Haycock, and Boyd published equations with privacy-focused, browser calculations.",
      "es": "Calculadora de superficie corporal (BSA) gratuita. Calcula la superficie corporal total en metros cuadrados (m\xB2) utilizando las ecuaciones publicadas de Mosteller, DuBois, Haycock y Boyd con c\xE1lculos privados en el navegador.",
      "fr": "Calculateur de surface corporelle (BSA) gratuit. Calculez la surface corporelle totale en m\xE8tres carr\xE9s (m\xB2) \xE0 l'aide des \xE9quations publi\xE9es de Mosteller, DuBois, Haycock et Boyd avec calculs sur navigateur.",
      "de": "Kostenloser K\xF6rperoberfl\xE4chen-Rechner (BSA-Rechner). Berechnen Sie die gesamte K\xF6rperoberfl\xE4che in Quadratmetern (m\xB2) mit den publizierten Formeln nach Mosteller, DuBois, Haycock und Boyd datenschutzorientiert im Browser.",
      "ko": "\uBB34\uB8CC \uCCB4\uD45C\uBA74\uC801 \uACC4\uC0B0\uAE30 (BSA Calculator). Mosteller, DuBois, Haycock \uBC0F Boyd \uAC8C\uC2DC\uB41C \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC81C\uACF1\uBBF8\uD130(m\xB2) \uB2E8\uC704\uC758 \uC804\uCCB4 \uCCB4\uD45C\uBA74\uC801\uC744 \uC0B0\uCD9C\uD558\uC138\uC694. \uAC00\uC785 \uC5C6\uB294 100% \uBE0C\uB77C\uC6B0\uC800 \uACC4\uC0B0.",
      "hi": "\u092E\u0941\u092B\u093C\u094D\u0924 \u092C\u0949\u0921\u0940 \u0938\u0930\u092B\u0947\u0938 \u090F\u0930\u093F\u092F\u093E \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 (BSA Calculator)\u0964 \u092E\u094B\u0938\u094D\u091F\u0947\u0932\u0930, \u0921\u0941\u092C\u0949\u0907\u0938, \u0939\u0947\u0915\u0949\u0915 \u0914\u0930 \u092C\u0949\u092F\u0921 \u092A\u094D\u0930\u0915\u093E\u0936\u093F\u0924 \u0938\u092E\u0940\u0915\u0930\u0923\u094B\u0902 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0915\u0947 \u0935\u0930\u094D\u0917 \u092E\u0940\u091F\u0930 (m\xB2) \u092E\u0947\u0902 \u0915\u0941\u0932 \u0936\u0930\u0940\u0930 \u0915\u0947 \u0938\u0924\u0939 \u0915\u094D\u0937\u0947\u0924\u094D\u0930 \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902\u0964 \u092E\u0941\u092B\u093C\u094D\u0924 \u0914\u0930 \u0917\u094B\u092A\u0928\u0940\u092F\u0924\u093E-\u0915\u0947\u0902\u0926\u094D\u0930\u093F\u0924\u0964"
    },
    inputs: [
      { id: "weight", label: L.weight, type: "number", placeholder: "70" },
      { id: "height", label: L.height, type: "number", placeholder: "175" }
    ],
    calculate: (inputs, system) => {
      let w = parseFloat(inputs.weight) || 0;
      let h = parseFloat(inputs.height) || 0;
      if (system === "imperial") {
        w = w * 0.453592;
        h = h * 2.54;
      }
      const bsaMosteller = Math.sqrt(h * w / 3600);
      const bsaDuBois = 7184e-6 * Math.pow(h, 0.725) * Math.pow(w, 0.425);
      return {
        primary: { value: bsaMosteller.toFixed(2), label: { en: "Mosteller BSA", es: "BSA Mosteller", fr: "BSA Mosteller", de: "Mosteller BSA", ko: "Mosteller \uCCB4\uD45C\uBA74\uC801", hi: "\u092E\u094B\u0938\u094D\u091F\u0947\u0932\u0930 BSA" }, unit: "m\xB2" },
        secondary: [
          { label: { en: "Du Bois Formula BSA", es: "BSA F\xF3rmula Du Bois", fr: "BSA Formule Du Bois", de: "Du Bois BSA", ko: "Du Bois \uCCB4\uD45C\uBA74\uC801", hi: "\u0921\u094D\u092F\u0942 \u092C\u0949\u0907\u0938 BSA" }, value: bsaDuBois.toFixed(2), unit: "m\xB2" },
          { label: { en: "Body Mass Index (BMI)", es: "IMC de Referencia", fr: "IMC R\xE9f\xE9rence", de: "BMI-Wert", ko: "\uCC38\uACE0 BMI", hi: "\u092C\u0940\u090F\u092E\u0906\u0908 \u0938\u0902\u0926\u0930\u094D\u092D" }, value: (w / Math.pow(h / 100, 2)).toFixed(1), unit: "kg/m\xB2" }
        ]
      };
    }
  },
  {
    slug: "heart-rate-zone-calculator",
    name: { en: "Karvonen Heart Rate Zone Calculator", es: "Calculadora de Zonas Card\xEDacas Karvonen", fr: "Calculateur de Zone Cardiaque Karvonen", de: "Karvonen Herzfrequenzzonen Rechner", ko: "Karvonen \uC2EC\uBC15\uC218 zone \uACC4\uC0B0\uAE30", hi: "\u0915\u093E\u0930\u094D\u0935\u094B\u0928\u0947\u0928 \u0939\u093E\u0930\u094D\u091F \u0930\u0947\u091F \u091C\u093C\u094B\u0928 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930" },
    title: { en: "Karvonen Heart Rate Zone Calculator \u2013 Target Heart Rate (HRR)", es: "Calculadora de Zonas de Frecuencia Card\xEDaca F\xF3rmula Karvonen", fr: "Calculateur de Zone de Fr\xE9quence Cardiaque Formule Karvonen", de: "Karvonen-Formel Herzfrequenzzonen Rechner \u2013 Zielpuls", ko: "Karvonen \uACF5\uC2DD \uD0C0\uAC9F \uC2EC\uBC15\uC218 zone \uACC4\uC0B0\uAE30 (Karvonen HR Zone)", hi: "\u0915\u093E\u0930\u094D\u0935\u094B\u0928\u0947\u0928 \u0939\u093E\u0930\u094D\u091F \u0930\u0947\u091F \u091C\u093C\u094B\u0928 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 - \u091F\u093E\u0930\u0917\u0947\u091F \u0939\u093E\u0930\u094D\u091F \u0930\u0947\u091F" },
    description: {
      "en": "Free Heart Rate Zone Calculator. Calculate target training heart rate zones (Fat Burn, Aerobic, Anaerobic, Peak) based on age, resting heart rate, and maximum heart rate with privacy-focused, browser calculations.",
      "es": "Calculadora de zonas de frecuencia card\xEDaca gratuita. Calcula tus zonas objetivo de entrenamiento (Quema de grasa, Aer\xF3bica, Anaer\xF3bica, Pico) seg\xFAn edad, frecuencia en reposo y frecuencia m\xE1xima con c\xE1lculos privados en el navegador.",
      "fr": "Calculateur de zones de fr\xE9quence cardiaque gratuit. Calculez vos zones cibles d'entra\xEEnement (Br\xFBle-graisse, A\xE9robie, Ana\xE9robie, Maximale) selon l'\xE2ge, le pouls au repos et la fr\xE9quence maximale avec calculs sur navigateur.",
      "de": "Kostenloser Herzfrequenzzonen-Rechner. Berechnen Sie Ihre Ziel-Trainingszonen (Fettverbrennung, Aerob, Anaerob, Maximal) basierend auf Alter, Ruhepuls und maximaler Herzfrequenz datenschutzorientiert im Browser.",
      "ko": "\uBB34\uB8CC \uC2EC\uBC15\uC218 \uAD6C\uAC04 \uACC4\uC0B0\uAE30. \uB098\uC774, \uC548\uC815\uC2DC \uC2EC\uBC15\uC218 \uBC0F \uCD5C\uB300 \uC2EC\uBC15\uC218\uB97C \uBC14\uD0D5\uC73C\uB85C \uBAA9\uD45C \uC6B4\uB3D9 \uC2EC\uBC15\uC218 \uAD6C\uAC04(\uC9C0\uBC29 burning, \uC720\uC0B0\uC18C, \uBB34\uC0B0\uC18C, \uCD5C\uB300 \uAD6C\uAC04)\uC744 \uC815\uD655\uD558\uAC8C \uC0B0\uCD9C\uD558\uC138\uC694. \uAC00\uC785 \uC5C6\uC774 \uBE0C\uB77C\uC6B0\uC800 \uB0B4 100% \uBB34\uB8CC \uAD6C\uB3D9.",
      "hi": "\u092E\u0941\u092B\u093C\u094D\u0924 \u0939\u0943\u0926\u092F \u0917\u0924\u093F \u0915\u094D\u0937\u0947\u0924\u094D\u0930 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930\u0964 \u0909\u092E\u094D\u0930, \u0935\u093F\u0936\u094D\u0930\u093E\u092E \u0939\u0943\u0926\u092F \u0917\u0924\u093F \u0914\u0930 \u0905\u0927\u093F\u0915\u0924\u092E \u0939\u0943\u0926\u092F \u0917\u0924\u093F \u0915\u0947 \u0906\u0927\u093E\u0930 \u092A\u0930 \u0932\u0915\u094D\u0937\u093F\u0924 \u092A\u094D\u0930\u0936\u093F\u0915\u094D\u0937\u0923 \u0939\u0943\u0926\u092F \u0917\u0924\u093F \u0915\u094D\u0937\u0947\u0924\u094D\u0930\u094B\u0902 (\u092B\u0948\u091F \u092C\u0930\u094D\u0928, \u090F\u0930\u094B\u092C\u093F\u0915, \u090F\u0928\u093E\u0930obic, \u092A\u0940\u0915) \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902\u0964 \u092E\u0941\u092B\u093C\u094D\u0924 \u0914\u0930 \u0917\u094B\u092A\u0928\u0940\u092F\u0924\u093E-\u0915\u0947\u0902\u0926\u094D\u0930\u093F\u0924\u0964"
    },
    inputs: [
      { id: "age", label: L.age, type: "number", placeholder: "25" },
      { id: "rhr", label: { en: "Resting Heart Rate", es: "Frecuencia Card\xEDaca en Reposo", fr: "Fr\xE9quence Cardiaque Repos", de: "Ruhepuls", ko: "\uC548\uC815\uC2DC \uC2EC\uBC15\uC218", hi: "\u0935\u093F\u0936\u094D\u0930\u093E\u092E \u0939\u093E\u0930\u094D\u091F \u0930\u0947\u091F" }, type: "number", placeholder: "60" }
    ],
    calculate: (inputs) => {
      const age = parseInt(inputs.age) || 25;
      const rhr = parseInt(inputs.rhr) || 60;
      const maxHr = 220 - age;
      const hrr = Math.max(0, maxHr - rhr);
      const zone1Min = Math.round(rhr + hrr * 0.5);
      const zone1Max = Math.round(rhr + hrr * 0.6);
      const zone2Min = Math.round(rhr + hrr * 0.6);
      const zone2Max = Math.round(rhr + hrr * 0.7);
      const zone3Min = Math.round(rhr + hrr * 0.7);
      const zone3Max = Math.round(rhr + hrr * 0.8);
      const zone4Min = Math.round(rhr + hrr * 0.8);
      const zone4Max = Math.round(rhr + hrr * 0.9);
      const zone5Min = Math.round(rhr + hrr * 0.9);
      const zone5Max = Math.round(rhr + hrr * 1);
      return {
        primary: { value: `${zone2Min} - ${zone2Max}`, label: { en: "Fat Burn Zone (Zone 2)", es: "Zona Quema Grasa (Zona 2)", fr: "Zone Br\xFBle-Graisse (Zone 2)", de: "Fettverbrennung (Zone 2)", ko: "\uC9C0\uBC29 \uC5F0\uC18C \uAD6C\uAC04 (Zone 2)", hi: "\u092B\u0948\u091F \u092C\u0930\u094D\u0928 \u091C\u093C\u094B\u0928 (\u091C\u093C\u094B\u0928 2)" }, unit: "bpm" },
        secondary: [
          { label: { en: "Zone 1: Recovery (50-60%)", es: "Zona 1: Recuperaci\xF3n (50-60%)", fr: "Zone 1: R\xE9cup\xE9ration (50-60%)", de: "Zone 1: Regeneration (50-60%)", ko: "Zone 1: \uD68C\uBCF5 (50-60%)", hi: "\u091C\u093C\u094B\u0928 1: \u0930\u093F\u0915\u0935\u0930\u0940 (50-60%)" }, value: `${zone1Min} - ${zone1Max}`, unit: "bpm" },
          { label: { en: "Zone 2: Fat Burn (60-70%)", es: "Zona 2: Quema Grasa (60-70%)", fr: "Zone 2: Br\xFBle-Graisse (60-70%)", de: "Zone 2: Fettverbrennung (60-70%)", ko: "Zone 2: \uC9C0\uBC29 \uC5F0\uC18C (60-70%)", hi: "\u091C\u093C\u094B\u0928 2: \u092B\u0948\u091F \u092C\u0930\u094D\u0928 (60-70%)" }, value: `${zone2Min} - ${zone2Max}`, unit: "bpm" },
          { label: { en: "Zone 3: Aerobic (70-80%)", es: "Zona 3: Cardio (70-80%)", fr: "Zone 3: Cardio (70-80%)", de: "Zone 3: Aerob (70-80%)", ko: "Zone 3: \uC720\uC0B0\uC18C (70-80%)", hi: "\u091C\u093C\u094B\u0928 3: \u090F\u0930\u094B\u092C\u093F\u0915 (70-80%)" }, value: `${zone3Min} - ${zone3Max}`, unit: "bpm" },
          { label: { en: "Zone 4: Anaerobic (80-90%)", es: "Zona 4: Anaer\xF3bico (80-90%)", fr: "Zone 4: Ana\xE9robie (80-90%)", de: "Zone 4: Anaerob (80-90%)", ko: "Zone 4: \uBB34\uC0B0\uC18C (80-90%)", hi: "\u091C\u093C\u094B\u0928 4: \u090F\u0928\u090F\u0930\u094B\u092C\u093F\u0915 (80-90%)" }, value: `${zone4Min} - ${zone4Max}`, unit: "bpm" },
          { label: { en: "Zone 5: VO2 Max (90-100%)", es: "Zona 5: M\xE1ximo (90-100%)", fr: "Zone 5: VO2 Max (90-100%)", de: "Zone 5: VO2 Max (90-100%)", ko: "Zone 5: VO2 Max (90-100%)", hi: "\u091C\u093C\u094B\u0928 5: VO2 \u092E\u0948\u0915\u094D\u0938 (90-100%)" }, value: `${zone5Min} - ${zone5Max}`, unit: "bpm" },
          { label: { en: "Max Heart Rate (HRmax)", es: "Frecuencia Card\xEDaca M\xE1xima", fr: "Fr\xE9quence Cardiaque Max", de: "Maximale Herzfrequenz", ko: "\uCD5C\uB300 \uC2EC\uBC15\uC218", hi: "\u0905\u0927\u093F\u0915\u0924\u092E \u0939\u093E\u0930\u094D\u091F \u0930\u0947\u091F" }, value: maxHr, unit: "bpm" },
          { label: { en: "Heart Rate Reserve (HRR)", es: "Reserva de Frecuencia Card\xEDaca", fr: "R\xE9serve Cardiaque (HRR)", de: "Herzfrequenzreserve", ko: "\uC2EC\uBC15 \uC608\uBE44\uB2A5 (HRR)", hi: "\u0939\u093E\u0930\u094D\u091F \u0930\u0947\u091F \u0930\u093F\u091C\u0930\u094D\u0935" }, value: hrr, unit: "bpm" }
        ]
      };
    }
  },
  {
    slug: "karvonen-heart-rate-calculator",
    name: { en: "Karvonen Heart Rate Calculator", es: "Calculadora de Frecuencia Card\xEDaca Karvonen", fr: "Calculateur de Fr\xE9quence Cardiaque Karvonen", de: "Karvonen Herzfrequenz Rechner", ko: "Karvonen \uC2EC\uBC15\uC218 \uACC4\uC0B0\uAE30", hi: "\u0915\u093E\u0930\u094D\u0935\u094B\u0928\u0947\u0928 \u0939\u093E\u0930\u094D\u091F \u0930\u0947\u091F \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930" },
    title: { en: "Karvonen Heart Rate Calculator \u2013 Target HR & Reserve (HRR)", es: "Calculadora de Frecuencia Card\xEDaca Karvonen \u2013 Zona y Reserva Card\xEDaca", fr: "Calculateur Karvonen \u2013 Fr\xE9quence Cardiaque Cible et R\xE9serve", de: "Karvonen Herzfrequenz Rechner \u2013 Zielpuls & Reserve (HRR)", ko: "Karvonen \uC2EC\uBC15\uC218 \uACC4\uC0B0\uAE30 \u2013 \uD0C0\uAC9F \uC2EC\uBC15\uC218 \uBC0F \uC608\uBE44 \uC2EC\uBC15\uC218 (HRR)", hi: "\u0915\u093E\u0930\u094D\u0935\u094B\u0928\u0947\u0928 \u0939\u093E\u0930\u094D\u091F \u0930\u0947\u091F \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 - \u091F\u093E\u0930\u0917\u0947\u091F \u0939\u093E\u0930\u094D\u091F \u0930\u0947\u091F \u090F\u0935\u0902 \u0930\u093F\u091C\u0930\u094D\u0935" },
    description: {
      "en": "Free Karvonen Heart Rate Calculator. Calculate Target Heart Rate (THR) zones using the Karvonen formula (Heart Rate Reserve % method) by age and resting heart rate (BPM) with privacy-focused, browser calculations.",
      "es": "Calculadora de frecuencia card\xEDaca Karvonen gratuita. Calcula las zonas de frecuencia card\xEDaca objetivo (THR) utilizando la f\xF3rmula de Karvonen (m\xE9todo de Reserva de Frecuencia Card\xEDaca %) seg\xFAn edad y frecuencia en reposo (BPM) con c\xE1lculos privados en el navegador.",
      "fr": "Calculateur de fr\xE9quence cardiaque Karvonen gratuit. Calculez les zones cibles (THR) avec la formule de Karvonen (m\xE9thode de R\xE9serve de Fr\xE9quence Cardiaque %) selon l'\xE2ge et le pouls au repos avec calculs sur navigateur.",
      "de": "Kostenloser Karvonen-Herzfrequenz-Rechner. Berechnen Sie Ihre Zielherzfrequenz (THR) mit der Karvonen-Formel (Herzfrequenzreserve-%-Methode) nach Alter und Ruhepuls (BPM) datenschutzorientiert im Browser.",
      "ko": "\uBB34\uB8CC \uCE74\uBCF4\uB128(Karvonen) \uC2EC\uBC15\uC218 \uACC4\uC0B0\uAE30. \uB098\uC774\uC640 \uC548\uC815\uC2DC \uC2EC\uBC15\uC218(BPM)\uB97C \uD65C\uC6A9\uD558\uC5EC \uCE74\uBCF4\uB128 \uACF5\uC2DD(\uC2EC\uBC15\uC218 \uC608\uBE44\uB2A5 % \uCE21\uC815\uBC95)\uC73C\uB85C \uBAA9\uD45C \uC6B4\uB3D9 \uC2EC\uBC15\uC218 \uAD6C\uAC04\uC744 \uACC4\uC0B0\uD558\uC138\uC694. \uAC00\uC785 \uC5C6\uB294 100% \uBE0C\uB77C\uC6B0\uC800 \uACC4\uC0B0.",
      "hi": "\u092E\u0941\u092B\u093C\u094D\u0924 \u0915\u093E\u0930\u094D\u0935\u094B\u0928\u0947\u0928 \u0939\u0943\u0926\u092F \u0917\u0924\u093F \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930\u0964 \u0909\u092E\u094D\u0930 \u0914\u0930 \u0935\u093F\u0936\u094D\u0930\u093E\u092E \u0939\u0943\u0926\u092F \u0917\u0924\u093F (BPM) \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0915\u093E\u0930\u094D\u0935\u094B\u0928\u0947\u0928 \u0938\u0942\u0924\u094D\u0930 (\u0939\u0943\u0926\u092F \u0917\u0924\u093F \u0906\u0930\u0915\u094D\u0937\u093F\u0924 % \u0935\u093F\u0927\u093F) \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0915\u0947 \u0932\u0915\u094D\u0937\u093F\u0924 \u0939\u0943\u0926\u092F \u0917\u0924\u093F (THR) \u0915\u094D\u0937\u0947\u0924\u094D\u0930\u094B\u0902 \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902\u0964 \u092E\u0941\u092B\u093C\u094D\u0924 \u0914\u0930 \u0917\u094B\u092A\u0928\u0940\u092F\u0924\u093E-\u0915\u0947\u0902\u0926\u094D\u0930\u093F\u0924\u0964"
    },
    inputs: [
      { id: "age", label: L.age, type: "number", placeholder: "25" },
      { id: "rhr", label: { en: "Resting Heart Rate", es: "Frecuencia Card\xEDaca en Reposo", fr: "Fr\xE9quence Cardiaque Repos", de: "Ruhepuls", ko: "\uC548\uC815\uC2DC \uC2EC\uBC15\uC218", hi: "\u0935\u093F\u0936\u094D\u0930\u093E\u092E \u0939\u093E\u0930\u094D\u091F \u0930\u0947\u091F" }, type: "number", placeholder: "60" }
    ],
    calculate: (inputs) => {
      const age = parseInt(inputs.age) || 25;
      const rhr = parseInt(inputs.rhr) || 60;
      const maxHr = 220 - age;
      const hrr = Math.max(0, maxHr - rhr);
      const zone1Min = Math.round(rhr + hrr * 0.5);
      const zone1Max = Math.round(rhr + hrr * 0.6);
      const zone2Min = Math.round(rhr + hrr * 0.6);
      const zone2Max = Math.round(rhr + hrr * 0.7);
      const zone3Min = Math.round(rhr + hrr * 0.7);
      const zone3Max = Math.round(rhr + hrr * 0.8);
      const zone4Min = Math.round(rhr + hrr * 0.8);
      const zone4Max = Math.round(rhr + hrr * 0.9);
      const zone5Min = Math.round(rhr + hrr * 0.9);
      const zone5Max = Math.round(rhr + hrr * 1);
      return {
        primary: { value: `${zone2Min} - ${zone2Max}`, label: { en: "Karvonen Fat Burn Zone (60-70%)", es: "Zona Quema Grasa (60-70%)", fr: "Zone Br\xFBle-Graisse (60-70%)", de: "Karvonen Fettverbrennung (60-70%)", ko: "Karvonen \uC9C0\uBC29 \uC5F0\uC18C \uAD6C\uAC04 (60-70%)", hi: "\u0915\u093E\u0930\u094D\u0935\u094B\u0928\u0947\u0928 \u092B\u0948\u091F \u092C\u0930\u094D\u0928 \u091C\u093C\u094B\u0928 (60-70%)" }, unit: "bpm" },
        secondary: [
          { label: { en: "Zone 1: Warm-up / Recovery (50-60%)", es: "Zona 1: Calentamiento (50-60%)", fr: "Zone 1: \xC9chauffement (50-60%)", de: "Zone 1: Aufw\xE4rmen (50-60%)", ko: "Zone 1: \uC6DC\uC5C5/\uD68C\uBCF5 (50-60%)", hi: "\u091C\u093C\u094B\u0928 1: \u0935\u093E\u0930\u094D\u092E-\u0905\u092A (50-60%)" }, value: `${zone1Min} - ${zone1Max}`, unit: "bpm" },
          { label: { en: "Zone 2: Endurance / Fat Loss (60-70%)", es: "Zona 2: Resistencia (60-70%)", fr: "Zone 2: Endurance (60-70%)", de: "Zone 2: Ausdauer (60-70%)", ko: "Zone 2: \uC9C0\uAD6C\uB825/\uC9C0\uBC29\uC5F0\uC18C (60-70%)", hi: "\u091C\u093C\u094B\u0928 2: \u090F\u0902\u0921\u094D\u092F\u094B\u0930\u0947\u0902\u0938 (60-70%)" }, value: `${zone2Min} - ${zone2Max}`, unit: "bpm" },
          { label: { en: "Zone 3: Aerobic Cardio (70-80%)", es: "Zona 3: Cardio Aer\xF3bico (70-80%)", fr: "Zone 3: Cardio A\xE9robie (70-80%)", de: "Zone 3: Aerobes Training (70-80%)", ko: "Zone 3: \uC720\uC0B0\uC18C \uCE74\uB514\uC624 (70-80%)", hi: "\u091C\u093C\u094B\u0928 3: \u090F\u0930\u094B\u092C\u093F\u0915 \u0915\u093E\u0930\u094D\u0921\u093F\u092F\u094B (70-80%)" }, value: `${zone3Min} - ${zone3Max}`, unit: "bpm" },
          { label: { en: "Zone 4: Anaerobic Threshold (80-90%)", es: "Zona 4: Umbral Anaer\xF3bico (80-90%)", fr: "Zone 4: Seuil Ana\xE9robie (80-90%)", de: "Zone 4: Anaerobe Schwelle (80-90%)", ko: "Zone 4: \uBB34\uC0B0\uC18C \uC5ED\uACC4 (80-90%)", hi: "\u091C\u093C\u094B\u0928 4: \u090F\u0928\u090F\u0930\u094B\u092C\u093F\u0915 \u0925\u094D\u0930\u0947\u0936\u094B\u0932\u094D\u0921 (80-90%)" }, value: `${zone4Min} - ${zone4Max}`, unit: "bpm" },
          { label: { en: "Zone 5: Maximum Peak (90-100%)", es: "Zona 5: M\xE1ximo Pico (90-100%)", fr: "Zone 5: Pic Maximum (90-100%)", de: "Zone 5: Maximalleistung (90-100%)", ko: "Zone 5: \uCD5C\uB300 \uD53C\uD06C (90-100%)", hi: "\u091C\u093C\u094B\u0928 5: \u0905\u0927\u093F\u0915\u0924\u092E \u092A\u0940\u0915 (90-100%)" }, value: `${zone5Min} - ${zone5Max}`, unit: "bpm" },
          { label: { en: "Heart Rate Reserve (HRR)", es: "Reserva de Frecuencia Card\xEDaca", fr: "R\xE9serve Cardiaque (HRR)", de: "Herzfrequenzreserve", ko: "\uC2EC\uBC15 \uC608\uBE44\uB2A5 (HRR)", hi: "\u0939\u093E\u0930\u094D\u091F \u0930\u0947\u091F \u0930\u093F\u091C\u0930\u094D\u0935" }, value: hrr, unit: "bpm" }
        ]
      };
    }
  },
  {
    slug: "1rm-calculator",
    name: { en: "1RM Calculator", es: "Calculadora de 1RM", fr: "Calculateur de 1RM", de: "1RM Rechner", ko: "1RM \uACC4\uC0B0\uAE30", hi: "1RM \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930" },
    title: { en: "1RM Calculator \u2013 One Rep Max (Bench Press, Squat, Deadlift)", es: "Calculadora de 1RM \u2013 One Rep Max (Press, Sentadilla, Peso Muerto)", fr: "Calculateur de 1RM \u2013 Rep Max (D\xE9velopp\xE9 Couch\xE9, Squat, Soulev\xE9 de Terre)", de: "1RM Rechner \u2013 Maximalkraft (Bankdr\xFCcken, Kniebeuge, Kreuzheben)", ko: "1RM \uACC4\uC0B0\uAE30 \u2013 1 Rep Max \uCE21\uC815 (\uBCA4\uCE58\uD504\uB808\uC2A4, \uC2A4\uCFFC\uD2B8, \uB370\uB4DC\uB9AC\uD504\uD2B8)", hi: "1RM \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 - \u0935\u0928 \u0930\u0947\u092A \u092E\u0948\u0915\u094D\u0938 (\u092C\u0947\u0902\u091A \u092A\u094D\u0930\u0947\u0938, \u0938\u094D\u0915\u094D\u0935\u093E\u091F, \u0921\u0947\u0921\u0932\u093F\u092B\u094D\u091F)" },
    description: {
      "en": "Free 1RM Calculator (One-Rep Max Calculator). Calculate one-rep max strength, weightlifting percentages, and rep max benchmarks using Epley and Brzycki equations with privacy-focused, browser calculations.",
      "es": "Calculadora de 1RM (M\xE1ximo para una repetici\xF3n) gratuita. Calcula tu fuerza m\xE1xima para 1 repetici\xF3n, porcentajes de levantamiento y marcas de repetici\xF3n utilizando las ecuaciones de Epley y Brzycki con c\xE1lculos privados en el navegador.",
      "fr": "Calculateur de 1RM (Maximum pour une r\xE9p\xE9tition) gratuit. Calculez votre force maximale pour 1 r\xE9p\xE9tition, vos pourcentages de musculation et rep\xE8res de r\xE9p\xE9tition avec les \xE9quations d'Epley et Brzycki avec calculs sur navigateur.",
      "de": "Kostenloser 1RM-Rechner (Maximalkraft-Rechner). Berechnen Sie Ihre Maximalkraft f\xFCr eine Wiederholung, Gewichtheber-Prozentwerte und Wiederholungs-Benchmarks mit Epley und Brzycki datenschutzorientiert im Browser.",
      "ko": "\uBB34\uB8CC 1RM(1\uD68C \uCD5C\uB300 \uC911\uB7C9) \uACC4\uC0B0\uAE30. Epley \uBC0F Brzycki \uACF5\uC2DD\uC744 \uD65C\uC6A9\uD558\uC5EC 1\uD68C \uCD5C\uB300 \uADFC\uB825, \uC6E8\uC774\uD2B8 \uB9AC\uD504\uD305 \uC911\uB7C9 \uBE44\uC728(%) \uBC0F \uC911\uB7C9\uBCC4 \uBC18\uBCF5 \uD69F\uC218 \uAE30\uC900\uC744 \uC0B0\uCD9C\uD558\uC138\uC694. \uAC00\uC785 \uC5C6\uC774 \uBE0C\uB77C\uC6B0\uC800 \uB0B4 100% \uBB34\uB8CC \uAD6C\uB3D9.",
      "hi": "\u092E\u0941\u092B\u093C\u094D\u0924 1RM \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 (One-Rep Max Calculator)\u0964 \u0907\u092A\u094D\u0932\u0947 \u0914\u0930 \u092C\u094D\u0930\u093F\u091C\u093C\u0940\u0915\u0940 \u0938\u092E\u0940\u0915\u0930\u0923\u094B\u0902 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0915\u0947 1-\u0930\u0947\u092A \u092E\u0948\u0915\u094D\u0938 \u0924\u093E\u0915\u0924, \u092D\u093E\u0930\u094B\u0924\u094D\u0924\u094B\u0932\u0928 \u092A\u094D\u0930\u0924\u093F\u0936\u0924 \u0914\u0930 \u0930\u0947\u092A \u092E\u0948\u0915\u094D\u0938 \u092C\u0947\u0902\u091A\u092E\u093E\u0930\u094D\u0915 \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902\u0964 \u092E\u0941\u092B\u093C\u094D\u0924 \u0914\u0930 \u0917\u094B\u092A\u0928\u0940\u092F\u0924\u093E-\u0915\u0947\u0902\u0926\u094D\u0930\u093F\u0924\u0964"
    },
    inputs: [
      { id: "weight", label: { en: "Weight Lifted", es: "Peso Levantado", fr: "Charge Soulev\xE9e", de: "Gewicht", ko: "\uB9AC\uD504\uD305 \uBB34\uAC8C", hi: "\u0909\u0920\u093E\u092F\u093E \u0917\u092F\u093E \u0935\u091C\u0928" }, type: "number", placeholder: "100" },
      { id: "age", label: { en: "Reps Performed", es: "Repeticiones", fr: "R\xE9p\xE9titions", de: "Wiederholungen", ko: "\uBC18\uBCF5 \uD69F\uC218(Reps)", hi: "\u0930\u0947\u092A\u094D\u0938" }, type: "number", placeholder: "5" }
    ],
    calculate: (inputs, system) => {
      const w = parseFloat(inputs.weight) || 0;
      const r = parseInt(inputs.age) || 1;
      const epley1RM = w * (1 + r / 30);
      const brzycki1RM = r < 37 ? w * (36 / (37 - r)) : epley1RM;
      const lander1RM = 100 * w / Math.max(1, 101.3 - 2.67123 * r);
      const unitStr = system === "imperial" ? "lbs" : "kg";
      return {
        primary: { value: Math.round(epley1RM), label: { en: "Estimated 1RM (Epley)", es: "1RM Estimado (Epley)", fr: "1RM Estim\xE9 (Epley)", de: "Gesch\xE4tzter 1RM (Epley)", ko: "Epley \uCD94\uC815 1RM", hi: "\u0905\u0928\u0941\u092E\u093E\u0928\u093F\u0924 1RM (Epley)" }, unit: unitStr },
        secondary: [
          { label: { en: "Brzycki Formula 1RM", es: "F\xF3rmula Brzycki 1RM", fr: "Formule Brzycki 1RM", de: "Brzycki Formel 1RM", ko: "Brzycki \uCD94\uC815 1RM", hi: "\u092C\u094D\u0930\u091C\u093C\u093F\u0915\u0940 1RM" }, value: Math.round(brzycki1RM), unit: unitStr },
          { label: { en: "Lander Formula 1RM", es: "F\xF3rmula Lander 1RM", fr: "Formule Lander 1RM", de: "Lander Formel 1RM", ko: "Lander \uCD94\uC815 1RM", hi: "\u0932\u0948\u0902\u0921\u0930 1RM" }, value: Math.round(lander1RM), unit: unitStr },
          { label: { en: "90% 1RM Heavy Strength (3 Reps)", es: "90% del M\xE1ximo (3 Reps)", fr: "90% du 1RM (3 Reps)", de: "90% 1RM (3 Wdh)", ko: "90% \uD6C8\uB828 \uBB34\uAC8C (3\uD68C)", hi: "90% 1RM Target" }, value: Math.round(epley1RM * 0.9), unit: unitStr },
          { label: { en: "85% 1RM Muscle Hypertrophy (5 Reps)", es: "85% del M\xE1ximo (5 Reps)", fr: "85% du 1RM (5 Reps)", de: "85% 1RM (5 Wdh)", ko: "85% \uD6C8\uB828 \uBB34\uAC8C (5\uD68C)", hi: "85% 1RM Target" }, value: Math.round(epley1RM * 0.85), unit: unitStr },
          { label: { en: "75% 1RM Endurance Volume (10 Reps)", es: "75% del M\xE1ximo (10 Reps)", fr: "75% du 1RM (10 Reps)", de: "75% 1RM (10 Wdh)", ko: "75% \uD6C8\uB828 \uBB34\uAC8C (10\uD68C)", hi: "75% 1RM Target" }, value: Math.round(epley1RM * 0.75), unit: unitStr }
        ]
      };
    }
  },
  {
    slug: "one-rep-max-calculator",
    name: { en: "1RM Bench Press Calculator", es: "Calculadora 1RM Press de Banca", fr: "Calculateur 1RM D\xE9velopp\xE9 Couch\xE9", de: "1RM Bankdr\xFCcken Rechner", ko: "1RM \uCE21\uC815\uAE30 (1 Rep Max \uACC4\uC0B0\uAE30)", hi: "1RM \u092C\u0947\u0902\u091A \u092A\u094D\u0930\u0947\u0938 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930" },
    title: { en: "1RM Bench Press Calculator \u2013 One Rep Max (Epley & Brzycki)", es: "Calculadora 1RM Epley Press de Banca y Sentadilla", fr: "Calculateur 1RM Epley D\xE9velopp\xE9 Couch\xE9", de: "Epley 1RM Bankdr\xFCcken Rechner \u2013 Maximalkraft", ko: "1RM \uCE21\uC815\uAE30 \u2013 \uBB34\uB8CC Epley 1 Rep Max \uBCA4\uCE58\uD504\uB808\uC2A4 \uACC4\uC0B0\uAE30", hi: "1RM \u092C\u0947\u0902\u091A \u092A\u094D\u0930\u0947\u0938 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 - \u0935\u0928 \u0930\u0947\u092A \u092E\u0948\u0915\u094D\u0938" },
    description: {
      "en": "Free One-Rep Max Calculator & Bench Press 1RM Tool. Estimate max lift capacity, 5RM, 10RM strength levels, and training percentages based on weight lifted and reps completed with privacy-focused, browser calculations.",
      "es": "Calculadora gratuita de 1RM y herramienta de press de banca. Estima tu capacidad m\xE1xima de levantamiento, niveles de fuerza 5RM y 10RM, y porcentajes de entrenamiento seg\xFAn peso y repeticiones con c\xE1lculos privados en el navegador.",
      "fr": "Calculateur gratuit de 1RM et outil de d\xE9velopp\xE9 couch\xE9. Estimez votre capacit\xE9 maximale de soulev\xE9, vos niveaux 5RM et 10RM, et vos pourcentages d'entra\xEEnement selon le poids et les r\xE9p\xE9titions avec calculs sur navigateur.",
      "de": "Kostenloser Maximalkraft-Rechner (1RM & Bankdr\xFCcken Tool). Sch\xE4tzen Sie Ihre maximale Hebekapazit\xE4t, 5RM- und 10RM-Kraftwerte sowie Trainings-Prozents\xE4tze basierend auf Gewicht und Wiederholungen datenschutzorientiert im Browser.",
      "ko": "\uBB34\uB8CC 1\uD68C \uCD5C\uB300 \uC911\uB7C9 \uBC0F \uBCA4\uCE58\uD504\uB808\uC2A4 1RM \uB3C4\uAD6C. \uB4E4\uC5B4\uC62C\uB9B0 \uC911\uB7C9\uACFC \uBC18\uBCF5 \uD69F\uC218\uB97C \uBC14\uD0D5\uC73C\uB85C \uCD5C\uB300 \uC911\uB7C9 \uC218\uD589 \uB2A5\uB825, 5RM, 10RM \uADFC\uB825 \uC218\uC900 \uBC0F \uD6C8\uB828 \uBE44\uC728(%)\uC744 \uACC4\uC0B0\uD558\uC138\uC694. \uAC00\uC785 \uC5C6\uB294 100% \uBB34\uB8CC \uB3C4\uAD6C.",
      "hi": "\u092E\u0941\u092B\u093C\u094D\u0924 \u0935\u0928-\u0930\u0947\u092A \u092E\u0948\u0915\u094D\u0938 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u0914\u0930 \u092C\u0947\u0902\u091A \u092A\u094D\u0930\u0947\u0938 1RM \u091F\u0942\u0932\u0964 \u0909\u0920\u093E\u090F \u0917\u090F \u0935\u091C\u0928 \u0914\u0930 \u092A\u0942\u0930\u0940 \u0915\u0940 \u0917\u0908 \u092A\u0941\u0928\u0930\u093E\u0935\u0943\u0924\u094D\u0924\u093F\u092F\u094B\u0902 \u0915\u0947 \u0906\u0927\u093E\u0930 \u092A\u0930 \u0905\u0927\u093F\u0915\u0924\u092E \u0932\u093F\u092B\u094D\u091F \u0915\u094D\u0937\u092E\u0924\u093E, 5RM, 10RM \u0936\u0915\u094D\u0924\u093F \u0938\u094D\u0924\u0930 \u0914\u0930 \u092A\u094D\u0930\u0936\u093F\u0915\u094D\u0937\u0923 \u092A\u094D\u0930\u0924\u093F\u0936\u0924 \u0915\u093E \u0905\u0928\u0941\u092E\u093E\u0928 \u0932\u0917\u093E\u090F\u0902\u0964 \u092E\u0941\u092B\u093C\u094D\u0924 \u0914\u0930 \u0917\u094B\u092A\u0928\u0940\u092F\u0924\u093E-\u0915\u0947\u0902\u0926\u094D\u0930\u093F\u0924\u0964"
    },
    inputs: [
      { id: "weight", label: { en: "Weight Lifted", es: "Peso Levantado", fr: "Charge Soulev\xE9e", de: "Gewicht", ko: "\uB9AC\uD504\uD305 \uBB34\uAC8C", hi: "\u0909\u0920\u093E\u092F\u093E \u0917\u092F\u093E \u0935\u091C\u0928" }, type: "number", placeholder: "100" },
      { id: "age", label: { en: "Reps Performed", es: "Repeticiones", fr: "R\xE9p\xE9titions", de: "Wiederholungen", ko: "\uBC18\uBCF5 \uD69F\uC218(Reps)", hi: "\u0930\u0947\u092A\u094D\u0938" }, type: "number", placeholder: "5" }
    ],
    calculate: (inputs, system) => {
      const w = parseFloat(inputs.weight) || 0;
      const r = parseInt(inputs.age) || 1;
      const epley1RM = w * (1 + r / 30);
      const brzycki1RM = r < 37 ? w * (36 / (37 - r)) : epley1RM;
      const lander1RM = 100 * w / Math.max(1, 101.3 - 2.67123 * r);
      const unitStr = system === "imperial" ? "lbs" : "kg";
      return {
        primary: { value: Math.round(epley1RM), label: { en: "Epley Estimated 1RM Bench Press", es: "1RM Estimado Epley", fr: "1RM Estim\xE9 Epley", de: "Epley 1RM Wert", ko: "Epley \uCD94\uC815 1RM \uBB34\uAC8C", hi: "\u090F\u092A\u0932\u0947 \u0905\u0928\u0941\u092E\u093E\u0928\u093F\u0924 1RM" }, unit: unitStr },
        secondary: [
          { label: { en: "Brzycki Formula 1RM", es: "1RM F\xF3rmula Brzycki", fr: "1RM Formule Brzycki", de: "Brzycki 1RM Wert", ko: "Brzycki \uCD94\uC815 1RM", hi: "\u092C\u094D\u0930\u091C\u093C\u093F\u0915\u0940 1RM" }, value: Math.round(brzycki1RM), unit: unitStr },
          { label: { en: "Lander Formula 1RM", es: "1RM F\xF3rmula Lander", fr: "1RM Formule Lander", de: "Lander 1RM Wert", ko: "Lander \uCD94\uC815 1RM", hi: "\u0932\u0948\u0902\u0921\u0930 1RM" }, value: Math.round(lander1RM), unit: unitStr },
          { label: { en: "90% 1RM (3 Rep Heavy Load)", es: "90% del M\xE1ximo (3 Reps)", fr: "90% du 1RM (3 Reps)", de: "90% 1RM (3 Wdh)", ko: "90% \uD6C8\uB828 \uBB34\uAC8C (3\uD68C)", hi: "90% 1RM Target" }, value: Math.round(epley1RM * 0.9), unit: unitStr },
          { label: { en: "85% 1RM (5 Rep Hypertrophy)", es: "85% del M\xE1ximo (5 Reps)", fr: "85% du 1RM (5 Reps)", de: "85% 1RM (5 Wdh)", ko: "85% \uD6C8\uB828 \uBB34\uAC8C (5\uD68C)", hi: "85% 1RM Target" }, value: Math.round(epley1RM * 0.85), unit: unitStr },
          { label: { en: "75% 1RM (10 Rep Volume)", es: "75% del M\xE1ximo (10 Reps)", fr: "75% du 1RM (10 Reps)", de: "75% 1RM (10 Wdh)", ko: "75% \uD6C8\uB828 \uBB34\uAC8C (10\uD68C)", hi: "75% 1RM Target" }, value: Math.round(epley1RM * 0.75), unit: unitStr }
        ]
      };
    }
  },
  {
    slug: "pregnancy-weight-gain-calculator",
    name: { en: "Pregnancy Weight Gain Calculator", es: "Aumento de Peso en Embarazo", fr: "Poids de Grossesse", de: "Schwangerschaftsgewichtsrechner", ko: "\uC784\uC0B0\uBD80 \uCCB4\uC911 \uC99D\uAC00 \uACC4\uC0B0\uAE30", hi: "\u0917\u0930\u094D\u092D\u093E\u0935\u0938\u094D\u0925\u093E \u0935\u091C\u0928 \u092C\u0922\u093C\u0928\u093E \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930" },
    title: { en: "Pregnancy Weight Gain Calculator \u2013 Week-by-Week ACOG / IOM Tracker", es: "Calculadora de Peso Saludable en Gestaci\xF3n", fr: "Calculateur de Prise de Poids de Grossesse", de: "Gewichtszunahme w\xE4hrend der Schwangerschaft Rechner", ko: "\uC784\uC2E0 \uC8FC\uC218\uBCC4 \uCCB4\uC911 \uC99D\uAC00 \uACC4\uC0B0\uAE30", hi: "\u0917\u0930\u094D\u092D\u093E\u0935\u0938\u094D\u0925\u093E \u0915\u0947 \u0926\u094C\u0930\u093E\u0928 \u0935\u091C\u0928 \u092C\u0922\u093C\u0928\u0947 \u0915\u093E \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930" },
    description: {
      "en": "Free Pregnancy Weight Gain Calculator aligned with ACOG & IOM reference guidelines. Track week-by-week gestational weight accumulation by trimester and pre-pregnancy BMI with privacy-focused, browser calculations.",
      "es": "Calculadora gratuita de peso en el embarazo seg\xFAn las gu\xEDas del ACOG y el IOM. Realiza un seguimiento del aumento de peso gestacional semana a semana por trimestre e IMC previo al embarazo con c\xE1lculos privados en el navegador.",
      "fr": "Calculateur gratuit de prise de poids pendant la grossesse selon les directives de l'ACOG et de l'IOM. Suivez l'\xE9volution du poids gestationnel semaine par semaine par trimestre et IMC avant grossesse avec calculs sur navigateur.",
      "de": "Kostenloser Schwangerschafts-Gewichtszunahme-Rechner nach ACOG- und IOM-Richtlinien. Verfolgen Sie die w\xF6chentliche Gewichtszunahme nach Trimester und BMI vor der Schwangerschaft datenschutzorientiert im Browser.",
      "ko": "ACOG \uBC0F IOM \uC9C0\uCE68\uC5D0 \uB9DE\uCD98 \uBB34\uB8CC \uC784\uC2E0 \uC8FC\uC218\uBCC4 \uCCB4\uC911 \uC99D\uAC00 \uACC4\uC0B0\uAE30. \uC784\uC2E0 \uC804 BMI \uBC0F \uBD84\uAE30\uBCC4 \uC8FC\uC218\uBCC4 \uCCB4\uC911 \uC99D\uAC00 \uAD8C\uC7A5 \uBC94\uC704\uB97C \uD655\uC778\uD558\uC138\uC694. \uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uC5C6\uB294 100% \uBE0C\uB77C\uC6B0\uC800 \uACC4\uC0B0.",
      "hi": "ACOG \u0914\u0930 IOM \u0926\u093F\u0936\u093E\u0928\u093F\u0930\u094D\u0926\u0947\u0936\u094B\u0902 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u092E\u0941\u092B\u093C\u094D\u0924 \u0917\u0930\u094D\u092D\u093E\u0935\u0938\u094D\u0925\u093E \u0935\u091C\u0928 \u092C\u0922\u093C\u0928\u093E \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930\u0964 \u0917\u0930\u094D\u092D\u093E\u0935\u0938\u094D\u0925\u093E \u0938\u0947 \u092A\u0939\u0932\u0947 \u0915\u0947 \u092C\u0940\u090F\u092E\u0906\u0908 \u0914\u0930 \u0924\u093F\u092E\u093E\u0939\u0940 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0938\u092A\u094D\u0924\u093E\u0939-\u0926\u0930-\u0938\u092A\u094D\u0924\u093E\u0939 \u0935\u091C\u0928 \u0938\u0902\u091A\u092F \u0915\u094B \u091F\u094D\u0930\u0948\u0915 \u0915\u0930\u0947\u0902\u0964 \u092E\u0941\u092B\u093C\u094D\u0924 \u0914\u0930 \u0917\u094B\u092A\u0928\u0940\u092F\u0924\u093E-\u0915\u0947\u0902\u0926\u094D\u0930\u093F\u0924\u0964"
    },
    inputs: [
      { id: "weight", label: { en: "Current Weight", es: "Peso Actual", fr: "Poids Actuel", de: "Aktuelles Gewicht", ko: "\uD604\uC7AC \uCCB4\uC911", hi: "\u0935\u0930\u094D\u0924\u092E\u093E\u0928 \u0935\u091C\u0928" }, type: "number", placeholder: "70" },
      { id: "preweight", label: { en: "Pre-pregnancy Weight", es: "Peso Pre-embarazo", fr: "Poids Avant Grossesse", de: "Gewicht vor Schwangerschaft", ko: "\uC784\uC2E0 \uC804 \uCCB4\uC911", hi: "\u0917\u0930\u094D\u092D\u093E\u0935\u0938\u094D\u0925\u093E \u0938\u0947 \u092A\u0939\u0932\u0947 \u0915\u093E \u0935\u091C\u0928" }, type: "number", placeholder: "60" },
      { id: "age", label: { en: "Pregnancy Week (1-40)", es: "Semana de Embarazo (1-40)", fr: "Semaine de Grossesse (1-40)", de: "Schwangerschaftswoche (1-40)", ko: "\uC784\uC2E0 \uC8FC\uC218 (1-40)", hi: "\u0917\u0930\u094D\u092D\u093E\u0935\u0938\u094D\u0925\u093E \u0938\u092A\u094D\u0924\u093E\u0939 (1-40)" }, type: "number", placeholder: "20" }
    ],
    calculate: (inputs, system) => {
      const curW = parseFloat(inputs.weight) || 0;
      const preW = parseFloat(inputs.preweight) || 0;
      const week = Math.min(40, Math.max(1, parseInt(inputs.age) || 1));
      const diff = curW - preW;
      const isImperial = system === "imperial";
      const minTotal = isImperial ? 25 : 11.5;
      const maxTotal = isImperial ? 35 : 16;
      const minGain = week / 40 * minTotal;
      const maxGain = week / 40 * maxTotal;
      const unitStr = isImperial ? "lbs" : "kg";
      return {
        primary: { value: diff.toFixed(1), label: { en: "Current Weight Gain", es: "Ganancia Actual", fr: "Gain Actuel", de: "Aktuelle Zunahme", ko: "\uD604\uC7AC \uC99D\uB7C9 \uBB34\uAC8C", hi: "\u0935\u0930\u094D\u0924\u092E\u093E\u0928 \u0935\u091C\u0928 \u092C\u0922\u093C\u0928\u093E" }, unit: unitStr },
        secondary: [
          { label: { en: `Target Range for Week ${week}`, es: `Rango Recomendado para la Semana ${week}`, fr: `Fourchette Cible pour la Semaine ${week}`, de: `Empfohlene Zunahme f\xFCr diese Woche ${week}`, ko: `${week}\uC8FC\uCC28 \uC801\uC815 \uAD8C\uC7A5 \uBC94\uC704`, hi: `\u0938\u092A\u094D\u0924\u093E\u0939 ${week} \u0915\u0947 \u0932\u093F\u090F \u0932\u0915\u094D\u0937\u093F\u0924 \u0938\u0940\u092E\u093E` }, value: `${minGain.toFixed(1)} - ${maxGain.toFixed(1)}`, unit: unitStr },
          { label: { en: "Total Recommended 40-Week Target", es: "Meta Total Recomendada (40 Semanas)", fr: "Objectif Total Recommand\xE9 (40 Semaines)", de: "Gesamtziel f\xFCr 40 Wochen", ko: "40\uC8FC \uC804\uCCB4 \uC801\uC815 \uAD8C\uC7A5 \uBC94\uC704", hi: "40 \u0938\u092A\u094D\u0924\u093E\u0939 \u0915\u093E \u0915\u0941\u0932 \u0932\u0915\u094D\u0937\u093F\u0924 \u0935\u091C\u0928" }, value: `${minTotal.toFixed(1)} - ${maxTotal.toFixed(1)}`, unit: unitStr }
        ]
      };
    }
  }
];
function getCalculatorTranslations(lang) {
  return {
    home: { en: "Home", es: "Inicio", fr: "Accueil", de: "Startseite", ko: "\uD648", hi: "\u092E\u0941\u0916\u094D\u092F \u092A\u0943\u0937\u094D\u0920" }[lang],
    title: { en: "Health Tools Hub", es: "Centro de Calculadoras de Salud", fr: "Centre d'Outils de Sant\xE9", de: "Gesundheitsrechner-Portal", ko: "\uD5EC\uC2A4 \uCF00\uC5B4 \uACC4\uC0B0\uAE30 \uD5C8\uBE0C", hi: "\u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0909\u092A\u0915\u0930\u0923 \u0915\u0947\u0902\u0926\u094D\u0930" }[lang],
    subtitle: { en: "Click on any tool below to calculate standard health metrics instantly.", es: "Haz clic en cualquier herramienta para calcular m\xE9tricas de salud al instante.", fr: "Cliquez sur n'importe quel outil pour calculer vos m\xE9triques de sant\xE9.", de: "Klicken Sie auf ein Tool, um Kennzahlen sofort zu berechnen.", ko: "\uD45C\uC900 \uD5EC\uC2A4 \uC9C0\uD45C\uB97C \uC190\uC27D\uAC8C \uC810\uAC80\uD558\uB294 \uACC4\uC0B0\uAE30\uB97C \uACE8\uB77C\uBCF4\uC138\uC694.", hi: "\u0924\u094D\u0935\u0930\u093F\u0924 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u092E\u093E\u092A\u0928 \u0915\u0947 \u0932\u093F\u090F \u0915\u093F\u0938\u0940 \u092D\u0940 \u0909\u092A\u0915\u0930\u0923 \u092A\u0930 \u0915\u094D\u0932\u093F\u0915 \u0915\u0930\u0947\u0902\u0964" }[lang],
    metricsTitle: { en: "Calculation Results Summary", es: "Resumen de Resultados", fr: "R\xE9sum\xE9 des R\xE9sultats", de: "Zusammenfassung der Ergebnisse", ko: "\uACC4\uC0B0 \uACB0\uACFC \uC694\uC57D", hi: "\u0917\u0923\u0928\u093E \u092A\u0930\u093F\u0923\u093E\u092E \u0935\u093F\u0935\u0930\u0923" }[lang],
    waiting: { en: "Enter your details to view your calculated result.", es: "Ingresa tus datos para ver tu resultado calculado.", fr: "Saisissez vos informations pour afficher votre r\xE9sultat calcul\xE9.", de: "Geben Sie Ihre Daten ein, um Ihr berechnetes Ergebnis anzuzeigen.", ko: "\uACC4\uC0B0\uB41C \uACB0\uACFC\uB97C \uD655\uC778\uD558\uB824\uBA74 \uC815\uBCF4\uB97C \uC785\uB825\uD558\uC138\uC694.", hi: "\u0905\u092A\u0928\u093E \u092A\u0930\u093F\u0923\u093E\u092E \u0926\u0947\u0916\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0905\u092A\u0928\u0940 \u091C\u093E\u0928\u0915\u093E\u0930\u0940 \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902\u0964" }[lang],
    calcBtn: { en: "Run Calculation", es: "Ejecutar C\xE1lculo", fr: "Calculer", de: "Berechnung ausf\xFChren", ko: "\uACC4\uC0B0\uD558\uAE30", hi: "\u0917\u0923\u0928\u093E \u091A\u0932\u093E\u090F\u0902" }[lang]
  };
}
