"use strict";
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

// src/data/seoDatabase.ts
var seoDatabase_exports = {};
__export(seoDatabase_exports, {
  seoDatabase: () => seoDatabase,
  tableUi: () => tableUi
});
module.exports = __toCommonJS(seoDatabase_exports);

// src/utils/calculators.ts
var L = {
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
var calculators = [
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
      hi: "\u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u092D\u093E\u0930\u0924"
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
      "de": "Kostenloser BMI-Rechner f\xFCr indische Erwachsene basierend auf ICMR- und WHO-Asien-Pazifik-Standards (\xDCbergewicht: \u2265 23,0 kg/m\xB2, Adipositas: \u2265 27,5 kg/m\xB2). Berechnen Sie Ihren indischen BMI und die kardiometabolische Risikokategorie datenschutzorientiert im Browser.",
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
      hi: "\u090A\u0902\u091A\u093E\u0908 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0938\u094D\u0935\u0938\u094D\u0925 \u0935\u091C\u0928"
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
    name: { en: "BMR Calculator", es: "Calculadora BMR (Tasa Metab\xF3lica Basal)", fr: "Calculateur BMR (Taux M\xE9tabolique de Base)", de: "BMR Rechner (Grundumsatz)", ko: "BMR \uACC4\uC0B0\uAE30 (\uAE30\uCD08\uB300\uC0AC\uB7C9)", hi: "BMR \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930" },
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
    name: { en: "TDEE Calculator", es: "Calculadora de TDEE", fr: "Calculateur de TDEE", de: "TDEE-Rechner", ko: "TDEE \uACC4\uC0B0\uAE30", hi: "\u091F\u0940\u0921\u0940\u0908\u0908 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930" },
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
      hi: "\u0930\u0916\u0930\u0916\u093E\u0935 \u0915\u0948\u0932\u094B\u0930\u0940 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930"
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
    name: { en: "Body Fat Calculator", es: "Calculadora de Grasa Corporal", fr: "Calculateur de Graisse Corporelle", de: "K\xF6rperfett Rechner", ko: "\uCCB4\uC9C0\uBC29 \uACC4\uC0B0\uAE30", hi: "\u092C\u0949\u0921\u0940 \u092B\u0948\u091F \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930" },
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
    name: { en: "Ideal Weight Calculator", es: "Calculadora de Peso Ideal", fr: "Calculateur de Poids Id\xE9al", de: "Idealgewicht Rechner", ko: "\uC774\uC0C1 \uCCB4\uC911 \uACC4\uC0B0\uAE30", hi: "\u0906\u0926\u0930\u094D\u0936 \u0935\u091C\u0928 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930" },
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
    name: { en: "Calorie Deficit Calculator", es: "Calculadora de D\xE9ficit Cal\xF3rico", fr: "Calculateur de D\xE9ficit Calorique", de: "Kaloriendefizit Rechner", ko: "\uCE7C\uB85C\uB9AC \uC801\uC790 \uACC4\uC0B0\uAE30", hi: "\u0915\u0948\u0932\u094B\u0930\u0940 \u0918\u093E\u091F\u093E \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930" },
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
    name: { en: "Protein Intake Calculator", es: "Calculadora de Consumo de Prote\xEDnas", fr: "Calculateur d'Apport en Prot\xE9ines", de: "T\xE4glicher Proteinbedarf Rechner", ko: "\uB2E8\uBC31\uC9C8 \uC12D\uCDE8\uB7C9 \uACC4\uC0B0\uAE30", hi: "\u092A\u094D\u0930\u094B\u091F\u0940\u0928 \u0938\u0947\u0935\u0928 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930" },
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
    name: { en: "Waist to Hip Ratio Calculator", es: "Calculadora de Relaci\xF3n Cintura a Cadera", fr: "Calculateur de Rapport Taille \xE0 Hanche", de: "Taille-zu-H\xFCfte-Verh\xE4ltnis Rechner", ko: "\uD5C8\uB9AC \uC5C9\uB369\uC774 \uBE44\uC728 \uACC4\uC0B0\uAE30", hi: "\u0915\u092E\u0930 \u0938\u0947 \u0915\u0942\u0932\u094D\u0939\u0947 \u0915\u093E \u0905\u0928\u0941\u092A\u093E\u0924 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930" },
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
    name: { en: "Mosteller BSA Calculator (Square Root Method)", es: "Calculadora BSA M\xE9todo Mosteller (Metros Cuadrados)", fr: "Calculateur BSA Formule Mosteller (M\xE8tres Carr\xE9s)", de: "Mosteller BSA Rechner (Quadratmeter)", ko: "Mosteller \uCCB4\uD45C\uBA74\uC801 \uACC4\uC0B0\uAE30", hi: "\u092E\u094B\u0938\u094D\u091F\u0947\u0932\u0930 BSA \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 (\u0935\u0930\u094D\u0917 \u092E\u0940\u091F\u0930)" },
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
    name: { en: "1RM Bench Press Calculator", es: "Calculadora 1RM Press de Banca", fr: "Calculateur 1RM D\xE9velopp\xE9 Couch\xE9", de: "1RM Bankdr\xFCcken Rechner", ko: "1RM \uCE21\uC815\uAE30", hi: "1RM \u092C\u0947\u0902\u091A \u092A\u094D\u0930\u0947\u0938 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930" },
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

// src/data/seoDatabase.ts
var tableUi = {
  en: {
    cat: "Category / Level",
    metric: "Reference Range / Metric",
    guidance: "Reference Context",
    faq: "Frequently Asked Questions",
    refs: "References & Published Research"
  },
  es: {
    cat: "Categor\xEDa / Nivel",
    metric: "Referencia / M\xE9trica",
    guidance: "Contexto de Referencia",
    faq: "Preguntas Frecuentes y Respuestas",
    refs: "Referencias e Investigaciones Publicadas"
  },
  fr: {
    cat: "Cat\xE9gorie / Niveau",
    metric: "R\xE9f\xE9rence / M\xE9trique",
    guidance: "Contexte de R\xE9f\xE9rence",
    faq: "Foire Aux Questions et R\xE9ponses",
    refs: "R\xE9f\xE9rences et Recherches Publi\xE9es"
  },
  de: {
    cat: "Kategorie / Stufe",
    metric: "Referenz / Metrik",
    guidance: "Referenzkontext",
    faq: "H\xE4ufig gestellte Fragen",
    refs: "Referenzen & Ver\xF6ffentlichte Forschung"
  },
  ko: {
    cat: "\uBC94\uC8FC / \uB2E8\uACC4",
    metric: "\uCC38\uC870 / \uBA54\uD2B8\uB9AD",
    guidance: "\uCC38\uC870 \uCEE8\uD14D\uC2A4\uD2B8",
    faq: "\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38 \uBC0F \uB2F5\uBCC0",
    refs: "\uCC38\uACE0 \uBB38\uD5CC \uBC0F \uCD9C\uD310 \uC5F0\uAD6C"
  },
  hi: {
    cat: "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930",
    metric: "\u0938\u0902\u0926\u0930\u094D\u092D / \u092E\u0940\u091F\u094D\u0930\u093F\u0915",
    guidance: "\u0938\u0902\u0926\u0930\u094D\u092D \u0935\u093F\u0935\u0930\u0923",
    faq: "\u0905\u0915\u094D\u0938\u0930 \u092A\u0942\u091B\u0947 \u091C\u093E\u0928\u0947 \u0935\u093E\u0932\u0947 \u092A\u094D\u0930\u0936\u094D\u0928 \u0914\u0930 \u0909\u0924\u094D\u0924\u0930",
    refs: "\u092A\u094D\u0930\u0915\u093E\u0936\u093F\u0924 \u0936\u094B\u0927 \u090F\u0935\u0902 \u0938\u0902\u0926\u0930\u094D\u092D"
  }
};
var seoDatabase = {
  "bmi-calculator": {
    "en": {
      "eyebrow": "WHO Health Standards",
      "title": "BMI Calculator \u2013 Calculate Body Mass Index",
      "intro": "Our free BMI Calculator (Body Mass Index Calculator) is a health screening tool built according to World Health Organization (WHO) and CDC standards. Calculate your Body Mass Index (BMI) category and review standard weight ranges based on established health references.",
      "formulaTitle": "Standard WHO BMI Calculator Formula",
      "formulaDesc": "Metric: BMI = Weight (kg) / [Height (m)]\xB2 | Imperial: BMI = [Weight (lbs) / Height (inches)\xB2] \xD7 703",
      "formulaCode": "BMI = kg / m\xB2",
      "tableTitle": "WHO Adult BMI Scale & Classification Chart",
      "tableRows": [
        {
          "col1": "Underweight",
          "col2": "< 18.5 kg/m\xB2",
          "col3": ""
        },
        {
          "col1": "Healthy Weight",
          "col2": "18.5 \u2013 24.9 kg/m\xB2",
          "col3": ""
        },
        {
          "col1": "Overweight",
          "col2": "25.0 \u2013 29.9 kg/m\xB2",
          "col3": "Pre-obesity range (Asian cutoff: 23.0 kg/m\xB2)"
        },
        {
          "col1": "Obesity Class I",
          "col2": "30.0 \u2013 34.9 kg/m\xB2",
          "col3": ""
        },
        {
          "col1": "Obesity Class II",
          "col2": "35.0 \u2013 39.9 kg/m\xB2",
          "col3": ""
        },
        {
          "col1": "Obesity Class III",
          "col2": "\u2265 40.0 kg/m\xB2",
          "col3": ""
        }
      ],
      "faqs": [
        {
          "question": "What is the BMI Calculator and how to calculate BMI?",
          "answer": "Body Mass Index (BMI) is a widely used population health screening measure. To calculate BMI, divide weight in kilograms by height in meters squared (kg/m\xB2), or use imperial units [Weight (lbs) / Height (inches)\xB2] \xD7 703. Our free BMI tool applies this standard formula to compute your score instantly."
        },
        {
          "question": "How to calculate BMI accurately for men and women?",
          "answer": "BMI calculation is identical for adult men and women, relying on height and weight metrics. Our BMI Calculator evaluates your metric score against WHO reference ranges to determine healthy weight boundaries."
        },
        {
          "question": "What is the official WHO BMI chart and BMI scale?",
          "answer": "The WHO BMI chart categorizes adults into four main ranges on the BMI scale: Underweight (<18.5), Healthy Weight (18.5\u201324.9), Overweight (25.0\u201329.9), and Obese (\u226530.0). For Asian populations, the overweight cutoff begins at 23.0."
        },
        {
          "question": "What additional context does Real BMI provide?",
          "answer": "Real BMI presents the standard BMI calculation alongside selected reference metrics and complementary estimates. These calculations provide educational context and are not a separate medical measurement or diagnosis."
        },
        {
          "question": "Is a standard BMI Calculator accurate for muscular athletes?",
          "answer": "A standard BMI Calculator measures total body mass relative to height. Muscular athletes may have a BMI of 25 or higher because BMI does not distinguish muscle mass from fat mass."
        }
      ]
    },
    "es": {
      "eyebrow": "Est\xE1ndares de Salud de la OMS",
      "title": "Calculadora de IMC \u2013 Calcular el \xCDndice de Masa Corporal",
      "intro": "Nuestra calculadora gratuita de IMC es una herramienta basada en las normas de la Organizaci\xF3n Mundial de la Salud (OMS) y los CDC. Calcula tu categor\xEDa de IMC y revisa los rangos de peso est\xE1ndar.",
      "formulaTitle": "F\xF3rmula Est\xE1ndar de IMC de la OMS",
      "formulaDesc": "M\xE9trico: IMC = Peso (kg) / [Altura (m)]\xB2 | Imperial: IMC = [Peso (lbs) / Altura (pulgadas)\xB2] \xD7 703",
      "formulaCode": "IMC = kg / m\xB2",
      "tableTitle": "Tabla de Clasificaci\xF3n de IMC para Adultos de la OMS",
      "tableRows": [
        {
          "col1": "Bajo Peso",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "Rango de referencia de bajo peso"
        },
        {
          "col1": "Peso Saludable",
          "col2": "18.5 \u2013 24.9 kg/m\xB2",
          "col3": "Rango de referencia de peso saludable"
        },
        {
          "col1": "Sobrepeso",
          "col2": "25.0 \u2013 29.9 kg/m\xB2",
          "col3": "Rango de referencia de sobrepeso (Corte asi\xE1tico: 23.0 kg/m\xB2)"
        },
        {
          "col1": "Obesidad Clase I",
          "col2": "30.0 \u2013 34.9 kg/m\xB2",
          "col3": "Rango de referencia de obesidad clase I"
        },
        {
          "col1": "Obesidad Clase II",
          "col2": "35.0 \u2013 39.9 kg/m\xB2",
          "col3": "Rango de referencia de obesidad clase II"
        },
        {
          "col1": "Obesidad Clase III",
          "col2": "\u2265 40.0 kg/m\xB2",
          "col3": "Rango de referencia de obesidad clase III"
        }
      ],
      "faqs": [
        {
          "question": "\xBFQu\xE9 es la Calculadora de IMC y c\xF3mo calcular el IMC?",
          "answer": "El \xCDndice de Masa Corporal (IMC) es una medida est\xE1ndar de salud poblacional. Para calcular el IMC, divide el peso en kg por la altura en metros al cuadrado (kg/m\xB2), o usa unidades imperiales [Peso (lbs) / Altura (pulgadas)\xB2] \xD7 703."
        },
        {
          "question": "\xBFC\xF3mo calcular el IMC con precisi\xF3n para hombres y mujeres?",
          "answer": "El c\xE1lculo del IMC es id\xE9ntico para hombres y mujeres adultos, bas\xE1ndose en la altura y el peso. Nuestra calculadora eval\xFAa tu puntuaci\xF3n con los rangos de la OMS."
        },
        {
          "question": "\xBFCu\xE1l es la tabla y escala oficial de IMC de la OMS?",
          "answer": "La tabla de la OMS categoriza a los adultos en cuatro rangos principales: Bajo peso (<18.5), Peso saludable (18.5\u201324.9), Sobrepeso (25.0\u201329.9) y Obesidad (\u226530.0). Para poblaciones asi\xE1ticas, el corte de sobrepeso comienza en 23.0."
        },
        {
          "question": "\xBFQu\xE9 contexto adicional proporciona Real BMI?",
          "answer": "Real BMI presenta el c\xE1lculo est\xE1ndar de IMC junto con m\xE9tricas de referencia seleccionadas y estimaciones complementarias (como BMR y TDEE) para ofrecer un contexto educativo."
        },
        {
          "question": "\xBFEs precisa una calculadora de IMC est\xE1ndar para atletas musculosos?",
          "answer": "Una calculadora de IMC mide la masa corporal total en relaci\xF3n con la altura. Los atletas musculosos pueden registrar un IMC de 25 o superior porque el IMC no distingue la masa muscular de la masa grasa."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de Sant\xE9 de l'OMS",
      "title": "Calculateur d'IMC \u2013 Calculez votre Indice de Masse Corporelle",
      "intro": "Notre calculateur d'IMC gratuit est un outil d'\xE9valuation bas\xE9 sur les normes de l'OMS et du CDC. Calculez votre cat\xE9gorie d'IMC et consultez les plages de poids de r\xE9f\xE9rence.",
      "formulaTitle": "Formule de R\xE9f\xE9rence IMC de l'OMS",
      "formulaDesc": "M\xE9trique : IMC = Poids (kg) / [Taille (m)]\xB2 | Imp\xE9rial : IMC = [Poids (lbs) / Taille (pouces)\xB2] \xD7 703",
      "formulaCode": "IMC = kg / m\xB2",
      "tableTitle": "Tableau de Classification de l'IMC pour Adultes selon l'OMS",
      "tableRows": [
        {
          "col1": "Sous-poids",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "Plage de r\xE9f\xE9rence de sous-poids"
        },
        {
          "col1": "Poids Normal",
          "col2": "18.5 \u2013 24.9 kg/m\xB2",
          "col3": "Plage de r\xE9f\xE9rence de poids normal"
        },
        {
          "col1": "Surpoids",
          "col2": "25.0 \u2013 29.9 kg/m\xB2",
          "col3": "Plage de r\xE9f\xE9rence de surpoids (Seuil asiatique : 23.0 kg/m\xB2)"
        },
        {
          "col1": "Ob\xE9sit\xE9 Classe I",
          "col2": "30.0 \u2013 34.9 kg/m\xB2",
          "col3": "Plage de r\xE9f\xE9rence d'ob\xE9sit\xE9 classe I"
        },
        {
          "col1": "Ob\xE9sit\xE9 Classe II",
          "col2": "35.0 \u2013 39.9 kg/m\xB2",
          "col3": "Plage de r\xE9f\xE9rence d'ob\xE9sit\xE9 classe II"
        },
        {
          "col1": "Ob\xE9sit\xE9 Classe III",
          "col2": "\u2265 40.0 kg/m\xB2",
          "col3": "Plage de r\xE9f\xE9rence d'ob\xE9sit\xE9 classe III"
        }
      ],
      "faqs": [
        {
          "question": "Qu'est-ce que le calculateur d'IMC et comment le calculer ?",
          "answer": "L'Indice de Masse Corporelle (IMC) est une mesure d'\xE9valuation de la sant\xE9 de la population. Pour calculer l'IMC, divisez le poids en kg par la taille en m\xE8tres au carr\xE9 (kg/m\xB2), ou utilisez les unit\xE9s imp\xE9riales [Poids (lbs) / Taille (pouces)\xB2] \xD7 703."
        },
        {
          "question": "Comment calculer l'IMC avec pr\xE9cision pour les hommes et les femmes ?",
          "answer": "Le calcul de l'IMC est identique pour les hommes et les femmes adultes, bas\xE9 sur la taille et le poids. Notre calculateur \xE9value votre score par rapport aux plages de r\xE9f\xE9rence de l'OMS."
        },
        {
          "question": "Quel est le tableau et l'\xE9chelle d'IMC officiels de l'OMS ?",
          "answer": "Le tableau de l'OMS classe les adultes en quatre plages principales : Sous-poids (<18,5), Poids normal (18,5\u201324,9), Surpoids (25,0\u201329,9) et Ob\xE9sit\xE9 (\u226530,0). Pour les populations asiatiques, le seuil de surpoids commence \xE0 23,0."
        },
        {
          "question": "Quel contexte suppl\xE9mentaire Real BMI fournit-il ?",
          "answer": "Real BMI pr\xE9sente le calcul d'IMC standard aux c\xF4t\xE9s de m\xE9triques de r\xE9f\xE9rence s\xE9lectionn\xE9es et d'estimations compl\xE9mentaires (telles que le BMR et le TDEE) pour offrir un contexte \xE9ducatif."
        },
        {
          "question": "Un calculateur d'IMC standard est-il pr\xE9cis pour les athl\xE8tes muscl\xE9s ?",
          "answer": "Un calculateur d'IMC mesure la masse corporelle totale par rapport \xE0 la taille. Les athl\xE8tes muscl\xE9s peuvent avoir un IMC sup\xE9rieur \xE0 25 car l'IMC ne distingue pas la masse musculaire de la masse grasse."
        }
      ]
    },
    "de": {
      "eyebrow": "WHO Gesundheitsstandards",
      "title": "BMI Rechner \u2013 Body-Mass-Index Berechnen",
      "intro": "Unser kostenloser BMI-Rechner ist ein Tool zur Einsch\xE4tzung nach Standards der WHO und der CDC. Berechnen Sie Ihre BMI-Kategorie und \xFCberpr\xFCfen Sie Richtwerte.",
      "formulaTitle": "WHO BMI-Referenzformel",
      "formulaDesc": "Metrisch: BMI = Gewicht (kg) / [Gr\xF6\xDFe (m)]\xB2 | Imperial: BMI = [Gewicht (lbs) / Gr\xF6\xDFe (Zoll)\xB2] \xD7 703",
      "formulaCode": "BMI = kg / m\xB2",
      "tableTitle": "WHO BMI-Skala & Klassifizierungstabelle f\xFCr Erwachsene",
      "tableRows": [
        {
          "col1": "Untergewicht",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "Referenzbereich Untergewicht"
        },
        {
          "col1": "Normalgewicht",
          "col2": "18.5 \u2013 24.9 kg/m\xB2",
          "col3": "Referenzbereich Normalgewicht"
        },
        {
          "col1": "\xDCbergewicht",
          "col2": "25.0 \u2013 29.9 kg/m\xB2",
          "col3": "Referenzbereich \xDCbergewicht (Asiatischer Wert: 23.0 kg/m\xB2)"
        },
        {
          "col1": "Adipositas Klasse I",
          "col2": "30.0 \u2013 34.9 kg/m\xB2",
          "col3": "Referenzbereich Adipositas Klasse I"
        },
        {
          "col1": "Adipositas Klasse II",
          "col2": "35.0 \u2013 39.9 kg/m\xB2",
          "col3": "Referenzbereich Adipositas Klasse II"
        },
        {
          "col1": "Adipositas Klasse III",
          "col2": "\u2265 40.0 kg/m\xB2",
          "col3": "Referenzbereich Adipositas Klasse III"
        }
      ],
      "faqs": [
        {
          "question": "Was ist der BMI-Rechner und wie berechnet man den BMI?",
          "answer": "Der Body-Mass-Index (BMI) ist ein weit verbreitetes Ma\xDF zur Beurteilung des K\xF6rpergewichts. Um den BMI zu berechnen, teilen Sie das Gewicht in kg durch die K\xF6rpergr\xF6\xDFe in Metern zum Quadrat (kg/m\xB2)."
        },
        {
          "question": "Wie berechnet man den BMI genau f\xFCr M\xE4nner und Frauen?",
          "answer": "Die BMI-Berechnung ist f\xFCr erwachsene M\xE4nner und Frauen identisch und basiert auf Gr\xF6\xDFe und Gewicht. Unser Rechner vergleicht Ihren Wert mit den WHO-Referenzbereichen."
        },
        {
          "question": "Was ist die offizielle WHO-BMI-Tabelle und -Skala?",
          "answer": "Die WHO-Tabelle unterteilt Erwachsene in vier Hauptbereiche: Untergewicht (<18,5), Normalgewicht (18,5\u201324,9), \xDCbergewicht (25,0\u201329,9) und Adipositas (\u226530,0). F\xFCr asiatische Populationen beginnt die \xDCbergewichtsschwelle bei 23,0."
        },
        {
          "question": "Welchen zus\xE4tzlichen Kontext bietet Real BMI?",
          "answer": "Real BMI zeigt die Standard-BMI-Berechnung zusammen mit ausgew\xE4hlten Referenzwerten und erg\xE4nzenden Sch\xE4tzungen (wie BMR und TDEE) an, um lehrreichen Kontext zu bieten."
        },
        {
          "question": "Ist ein Standard-BMI-Rechner f\xFCr muskul\xF6se Sportler genau?",
          "answer": "Ein Standard-BMI-Rechner misst die Gesamtk\xF6rpermasse im Verh\xE4ltnis zur Gr\xF6\xDFe. Muskel-Sportler k\xF6nnen einen BMI von 25 oder h\xF6her haben, da der BMI Muskelmasse nicht von Fettmasse unterscheidet."
        }
      ]
    },
    "ko": {
      "eyebrow": "WHO \uAC74\uAC15 \uAE30\uC900",
      "title": "BMI \uACC4\uC0B0\uAE30 \u2013 \uCCB4\uC9C8\uB7C9\uC9C0\uC218 \uACC4\uC0B0",
      "intro": "\uC138\uACC4\uBCF4\uAC74\uAE30\uAD6C(WHO) \uBC0F CDC \uAE30\uC900\uC5D0 \uB530\uB978 \uBB34\uB8CC BMI \uACC4\uC0B0\uAE30\uC785\uB2C8\uB2E4. \uCCB4\uC9C8\uB7C9\uC9C0\uC218 \uBC94\uC8FC \uBC0F \uC815\uC0C1 \uCCB4\uC911 \uCC38\uC870 \uBC94\uC704\uB97C \uACC4\uC0B0\uD558\uC138\uC694.",
      "formulaTitle": "\uD45C\uC900 WHO BMI \uACC4\uC0B0 \uACF5\uC2DD",
      "formulaDesc": "\uBBF8\uD130\uBC95: BMI = \uCCB4\uC911 (kg) / [\uC2E0\uC7A5 (m)]\xB2 | \uC57C\uB4DC\uD30C\uC6B4\uB4DC\uBC95: BMI = [\uCCB4\uC911 (lbs) / \uC2E0\uC7A5 (\uC778\uCE58)\xB2] \xD7 703",
      "formulaCode": "BMI = kg / m\xB2",
      "tableTitle": "WHO \uC131\uC778 BMI \uC9C4\uB2E8\uD45C \uBC0F \uBD84\uB958 \uCC28\uD2B8",
      "tableRows": [
        {
          "col1": "\uC800\uCCB4\uC911",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "\uC800\uCCB4\uC911 \uCC38\uC870 \uBC94\uC704"
        },
        {
          "col1": "\uC815\uC0C1 \uCCB4\uC911",
          "col2": "18.5 \u2013 24.9 kg/m\xB2",
          "col3": "\uC815\uC0C1 \uCCB4\uC911 \uCC38\uC870 \uBC94\uC704"
        },
        {
          "col1": "\uACFC\uCCB4\uC911",
          "col2": "25.0 \u2013 29.9 kg/m\xB2",
          "col3": "\uACFC\uCCB4\uC911 \uCC38\uC870 \uBC94\uC704 (\uC544\uC2DC\uC544\uC778 \uAE30\uC900: 23.0 kg/m\xB2)"
        },
        {
          "col1": "\uBE44\uB9CC 1\uB2E8\uACC4 (\uBE44\uB9CC 1\uB2E8\uACC4)",
          "col2": "30.0 \u2013 34.9 kg/m\xB2",
          "col3": "\uBE44\uB9CC 1\uB2E8\uACC4 \uCC38\uC870 \uBC94\uC704"
        },
        {
          "col1": "\uBE44\uB9CC 2\uB2E8\uACC4 (2\uB2E8\uACC4 \uBE44\uB9CC)",
          "col2": "35.0 \u2013 39.9 kg/m\xB2",
          "col3": "\uBE44\uB9CC 2\uB2E8\uACC4 \uCC38\uC870 \uBC94\uC704"
        },
        {
          "col1": "\uBE44\uB9CC 3\uB2E8\uACC4 (3\uB2E8\uACC4 \uACE0\uB3C4\uBE44\uB9CC)",
          "col2": "\u2265 40.0 kg/m\xB2",
          "col3": "\uBE44\uB9CC 3\uB2E8\uACC4 \uCC38\uC870 \uBC94\uC704"
        }
      ],
      "faqs": [
        {
          "question": "BMI \uACC4\uC0B0\uAE30\uB780 \uBB34\uC5C7\uC774\uBA70 \uC5B4\uB5BB\uAC8C \uACC4\uC0B0\uD558\uB098\uC694?",
          "answer": "\uCCB4\uC9C8\uB7C9\uC9C0\uC218(BMI)\uB294 \uB110\uB9AC \uC0AC\uC6A9\uB418\uB294 \uC778\uAD6C \uBCF4\uAC74\uD559\uC801 \uC9C0\uD45C\uC785\uB2C8\uB2E4. \uCCB4\uC911(kg)\uC744 \uC2E0\uC7A5(m)\uC758 \uC81C\uACF1\uC73C\uB85C \uB098\uB204\uC5B4 \uACC4\uC0B0\uD569\uB2C8\uB2E4(kg/m\xB2)."
        },
        {
          "question": "\uB0A8\uC131\uACFC \uC5EC\uC131\uC758 BMI\uB97C \uC815\uD655\uD558\uAC8C \uACC4\uC0B0\uD558\uB294 \uBC29\uBC95\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uC131\uC778 \uB0A8\uC131\uACFC \uC5EC\uC131\uC758 BMI \uACC4\uC0B0 \uBC29\uC2DD\uC740 \uB3D9\uC77C\uD558\uBA70 \uC2E0\uC7A5\uACFC \uCCB4\uC911 \uC218\uCE58\uB97C \uAE30\uBC18\uC73C\uB85C \uD569\uB2C8\uB2E4."
        },
        {
          "question": "\uACF5\uC2DD WHO BMI \uCC28\uD2B8\uC640 \uC9C4\uB2E8 \uAE30\uC900\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "WHO \uCC28\uD2B8\uB294 \uC131\uC778\uC744 \uC800\uCCB4\uC911(<18.5), \uC815\uC0C1 \uCCB4\uC911(18.5\u201324.9), \uACFC\uCCB4\uC911(25.0\u201329.9), \uBE44\uB9CC(\u226530.0)\uC758 4\uAC00\uC9C0 \uC8FC\uC694 \uBC94\uC704\uB85C \uBD84\uB958\uD569\uB2C8\uB2E4."
        },
        {
          "question": "Real BMI\uB294 \uC5B4\uB5A4 \uCD94\uAC00 \uCEE8\uD14D\uC2A4\uD2B8\uB97C \uC81C\uACF5\uD558\uB098\uC694?",
          "answer": "Real BMI\uB294 \uD45C\uC900 BMI \uACC4\uC0B0\uACFC \uD568\uAED8 BMR \uBC0F TDEE\uC640 \uAC19\uC740 \uBCF4\uC644\uC801 \uCD94\uC815 \uC9C0\uD45C\uB97C \uD568\uAED8 \uC81C\uACF5\uD558\uC5EC \uAD50\uC721\uC801 \uCC38\uACE0 \uCEE8\uD14D\uC2A4\uD2B8\uB97C \uC81C\uC2DC\uD569\uB2C8\uB2E4."
        },
        {
          "question": "\uD45C\uC900 BMI \uACC4\uC0B0\uAE30\uB294 \uADFC\uC721\uC9C8 \uC6B4\uB3D9\uC120\uC218\uC5D0\uAC8C\uB3C4 \uC815\uD655\uD55C\uAC00\uC694?",
          "answer": "\uD45C\uC900 BMI \uACC4\uC0B0\uAE30\uB294 \uD0A4 \uB300\uBE44 \uC804\uCCB4 \uCCB4\uC911\uC744 \uCE21\uC815\uD569\uB2C8\uB2E4. \uADFC\uC721\uC9C8 \uC6B4\uB3D9\uC120\uC218\uB294 \uADFC\uC721\uB7C9\uC774 \uC9C0\uBC29 mass\uC640 \uAD6C\uBD84\uB418\uC9C0 \uC54A\uC544 BMI\uAC00 25 \uC774\uC0C1\uC73C\uB85C \uB098\uC62C \uC218 \uC788\uC2B5\uB2C8\uB2E4."
        }
      ]
    },
    "hi": {
      "eyebrow": "\u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u092E\u093E\u0928\u0915",
      "title": "\u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u2013 \u092C\u0949\u0921\u0940 \u092E\u093E\u0938 \u0907\u0902\u0921\u0947\u0915\u094D\u0938 \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902",
      "intro": "\u0939\u092E\u093E\u0930\u093E \u092E\u0941\u092B\u094D\u0924 \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 (Body Mass Index Calculator) \u0935\u093F\u0936\u094D\u0935 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0938\u0902\u0917\u0920\u0928 (WHO) \u0914\u0930 CDC \u092E\u093E\u0928\u0915\u094B\u0902 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u092C\u0928\u093E\u092F\u093E \u0917\u092F\u093E \u090F\u0915 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0938\u094D\u0915\u094D\u0930\u0940\u0928\u093F\u0902\u0917 \u091F\u0942\u0932 \u0939\u0948\u0964 \u0905\u092A\u0928\u0940 \u092C\u0949\u0921\u0940 \u092E\u093E\u0938 \u0907\u0902\u0921\u0947\u0915\u094D\u0938 (BMI) \u0936\u094D\u0930\u0947\u0923\u0940 \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902 \u0914\u0930 \u0938\u094D\u0925\u093E\u092A\u093F\u0924 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0938\u0902\u0926\u0930\u094D\u092D\u094B\u0902 \u0915\u0947 \u0906\u0927\u093E\u0930 \u092A\u0930 \u092E\u093E\u0928\u0915 \u0935\u091C\u0928 \u0938\u0940\u092E\u093E\u0913\u0902 \u0915\u0940 \u0938\u092E\u0940\u0915\u094D\u0937\u093E \u0915\u0930\u0947\u0902\u0964",
      "formulaTitle": "\u092E\u093E\u0928\u0915 \u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u0938\u0942\u0924\u094D\u0930",
      "formulaDesc": "\u092E\u0940\u091F\u094D\u0930\u093F\u0915: \u092C\u0940\u090F\u092E\u0906\u0908 = \u0935\u091C\u0928 (\u0915\u093F\u0917\u094D\u0930\u093E) / [\u090A\u0902\u091A\u093E\u0908 (\u092E\u0940\u091F\u0930)]\xB2 | \u0907\u0902\u092A\u0940\u0930\u093F\u092F\u0932: \u092C\u0940\u090F\u092E\u0906\u0908 = [\u0935\u091C\u0928 (\u092A\u093E\u0909\u0902\u0921) / \u090A\u0902\u091A\u093E\u0908 (\u0907\u0902\u091A)\xB2] \xD7 703",
      "formulaCode": "BMI = kg / m\xB2",
      "tableTitle": "\u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u0935\u092F\u0938\u094D\u0915 \u092C\u0940\u090F\u092E\u0906\u0908 \u0938\u094D\u0915\u0947\u0932 \u090F\u0935\u0902 \u0935\u0930\u094D\u0917\u0940\u0915\u0930\u0923 \u091A\u093E\u0930\u094D\u091F",
      "tableRows": [
        {
          "col1": "\u0915\u092E \u0935\u091C\u0928",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "\u0915\u092E \u0935\u091C\u0928 \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E"
        },
        {
          "col1": "\u0938\u093E\u092E\u093E\u0928\u094D\u092F (\u0938\u094D\u0935\u0938\u094D\u0925) \u0935\u091C\u0928",
          "col2": "18.5 \u2013 24.9 kg/m\xB2",
          "col3": "\u0938\u093E\u092E\u093E\u0928\u094D\u092F \u0935\u091C\u0928 \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E"
        },
        {
          "col1": "\u0905\u0927\u093F\u0915 \u0935\u091C\u0928",
          "col2": "25.0 \u2013 29.9 kg/m\xB2",
          "col3": "\u0905\u0927\u093F\u0915 \u0935\u091C\u0928 \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E (\u090F\u0936\u093F\u092F\u093E\u0908 \u0915\u091F\u0911\u092B: 23.0 kg/m\xB2)"
        },
        {
          "col1": "\u092E\u094B\u091F\u093E\u092A\u093E \u0936\u094D\u0930\u0947\u0923\u0940 I (\u0913\u092C\u0947\u0938\u093F\u091F\u0940 \u0915\u094D\u0932\u093E\u0938 I)",
          "col2": "30.0 \u2013 34.9 kg/m\xB2",
          "col3": "\u092E\u094B\u091F\u093E\u092A\u093E \u0936\u094D\u0930\u0947\u0923\u0940 I \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E"
        },
        {
          "col1": "\u092E\u094B\u091F\u093E\u092A\u093E \u0936\u094D\u0930\u0947\u0923\u0940 II (\u0913\u092C\u0947\u0938\u093F\u091F\u0940 \u0915\u094D\u0932\u093E\u0938 II)",
          "col2": "35.0 \u2013 39.9 kg/m\xB2",
          "col3": "\u092E\u094B\u091F\u093E\u092A\u093E \u0936\u094D\u0930\u0947\u0923\u0940 II \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E"
        },
        {
          "col1": "\u092E\u094B\u091F\u093E\u092A\u093E \u0936\u094D\u0930\u0947\u0923\u0940 III (\u0913\u092C\u0947\u0938\u093F\u091F\u0940 \u0915\u094D\u0932\u093E\u0938 III)",
          "col2": "\u2265 40.0 kg/m\xB2",
          "col3": "\u092E\u094B\u091F\u093E\u092A\u093E \u0936\u094D\u0930\u0947\u0923\u0940 III \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E"
        }
      ],
      "faqs": [
        {
          "question": "\u092C\u0940\u090F\u092E\u0906\u0908 (BMI) \u0915\u094D\u092F\u093E \u0939\u0948 \u0914\u0930 \u0907\u0938\u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0948\u0938\u0947 \u0915\u0940 \u091C\u093E\u0924\u0940 \u0939\u0948?",
          "answer": "\u092C\u0949\u0921\u0940 \u092E\u093E\u0938 \u0907\u0902\u0921\u0947\u0915\u094D\u0938 (BMI) \u090A\u0902\u091A\u093E\u0908 \u0915\u0947 \u0938\u093E\u092A\u0947\u0915\u094D\u0937 \u0906\u092A\u0915\u0947 \u0935\u091C\u0928 \u0915\u093E \u092E\u0942\u0932\u094D\u092F\u093E\u0902\u0915\u0928 \u0915\u0930\u0928\u0947 \u0935\u093E\u0932\u093E \u092E\u093E\u0928\u0915 \u0939\u0948\u0964 \u0907\u0938\u0915\u0940 \u0917\u0923\u0928\u093E \u0935\u091C\u0928 (\u0915\u093F\u0917\u094D\u0930\u093E) \u0915\u094B \u090A\u0902\u091A\u093E\u0908 \u0915\u0947 \u0935\u0930\u094D\u0917 (\u092E\u0940\u091F\u0930\xB2) \u0938\u0947 \u0935\u093F\u092D\u093E\u091C\u093F\u0924 \u0915\u0930\u0915\u0947 \u0915\u0940 \u091C\u093E\u0924\u0940 \u0939\u0948\u0964"
        },
        {
          "question": "\u092A\u0941\u0930\u0941\u0937\u094B\u0902 \u0914\u0930 \u092E\u0939\u093F\u0932\u093E\u0913\u0902 \u0915\u0947 \u0932\u093F\u090F \u0938\u094D\u0935\u0938\u094D\u0925 \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u094D\u092F\u093E \u092E\u093E\u0928\u093E \u091C\u093E\u0924\u093E \u0939\u0948?",
          "answer": "\u0905\u0927\u093F\u0915\u093E\u0902\u0936 \u0935\u092F\u0938\u094D\u0915\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F 18.5 \u0938\u0947 24.9 kg/m\xB2 \u0915\u093E \u092C\u0940\u090F\u092E\u0906\u0908 \u0938\u093E\u092E\u093E\u0928\u094D\u092F \u0914\u0930 \u0938\u094D\u0935\u0938\u094D\u0925 \u092E\u093E\u0928\u093E \u091C\u093E\u0924\u093E \u0939\u0948\u0964 \u090F\u0936\u093F\u092F\u093E\u0908 \u0906\u092C\u093E\u0926\u0940 \u0915\u0947 \u0932\u093F\u090F 23.0 \u0938\u0947 \u0905\u0927\u093F\u0915 \u0935\u091C\u0928 \u0915\u0940 \u0938\u0940\u092E\u093E \u0936\u0941\u0930\u0942 \u0939\u094B\u0924\u0940 \u0939\u0948\u0964"
        },
        {
          "question": "\u0915\u094D\u092F\u093E \u092C\u0940\u090F\u092E\u0906\u0908 \u092E\u093E\u0902\u0938\u092A\u0947\u0936\u093F\u092F\u094B\u0902 \u0935\u093E\u0932\u0947 \u0932\u094B\u0917\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u0938\u091F\u0940\u0915 \u0939\u0948?",
          "answer": "\u092C\u0940\u090F\u092E\u0906\u0908 \u0935\u0938\u093E \u0914\u0930 \u092E\u093E\u0902\u0938\u092A\u0947\u0936\u093F\u092F\u094B\u0902 \u092E\u0947\u0902 \u0905\u0902\u0924\u0930 \u0928\u0939\u0940\u0902 \u0915\u0930\u0924\u093E \u0939\u0948, \u0907\u0938\u0932\u093F\u090F \u090F\u0925\u0932\u0940\u091F\u094B\u0902 \u092F\u093E \u0905\u0927\u093F\u0915 \u092E\u093E\u0902\u0938\u092A\u0947\u0936\u093F\u092F\u094B\u0902 \u0935\u093E\u0932\u0947 \u0935\u094D\u092F\u0915\u094D\u0924\u093F\u092F\u094B\u0902 \u092E\u0947\u0902 \u092C\u0940\u090F\u092E\u0906\u0908 \u0905\u0927\u093F\u0915 \u0939\u094B \u0938\u0915\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "Real BMI \u0914\u0930 \u092E\u093E\u0928\u0915 \u092C\u0940\u090F\u092E\u0906\u0908 \u092E\u0947\u0902 \u0915\u094D\u092F\u093E \u0905\u0902\u0924\u0930 \u0939\u0948?",
          "answer": "Real BMI \u092E\u093E\u0928\u0915 \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0947 \u0938\u093E\u0925-\u0938\u093E\u0925 \u092C\u0940\u090F\u092E\u0906\u0930 (BMR) \u0914\u0930 \u0915\u092E\u0930-\u0938\u0947-\u090A\u0902\u091A\u093E\u0908 \u0905\u0928\u0941\u092A\u093E\u0924 \u091C\u0948\u0938\u0947 \u092A\u0942\u0930\u0915 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0938\u0902\u0915\u0947\u0924\u0915\u094B\u0902 \u0915\u093E \u090F\u0915 \u0938\u093E\u0925 \u092E\u0942\u0932\u094D\u092F\u093E\u0902\u0915\u0928 \u092A\u094D\u0930\u0926\u093E\u0928 \u0915\u0930\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u0915\u094D\u092F\u093E \u092C\u0940\u090F\u092E\u0906\u0908 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u091C\u094B\u0916\u093F\u092E \u0915\u093E \u0938\u094D\u0935\u0924\u0902\u0924\u094D\u0930 \u0928\u093F\u0926\u093E\u0928 \u0915\u0930\u0924\u093E \u0939\u0948?",
          "answer": "\u0928\u0939\u0940\u0902, \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0947\u0935\u0932 \u090F\u0915 \u092A\u094D\u0930\u093E\u0925\u092E\u093F\u0915 \u0938\u094D\u0915\u094D\u0930\u0940\u0928\u093F\u0902\u0917 \u092E\u093E\u0928\u0915 (Screening Measure) \u0939\u0948, \u092F\u0939 \u0938\u094D\u0935\u0924\u0902\u0924\u094D\u0930 \u0930\u0942\u092A \u0938\u0947 \u0915\u093F\u0938\u0940 \u092C\u0940\u092E\u093E\u0930\u0940 \u0915\u093E \u0928\u093F\u0926\u093E\u0928 \u0928\u0939\u0940\u0902 \u0915\u0930\u0924\u093E \u0939\u0948\u0964"
        }
      ]
    }
  },
  "3d-bmi-calculator": {
    "en": {
      "eyebrow": "Oxford 2.5-Power BMI Model & 3D Body Visualization",
      "title": "3D BMI Calculator & Interactive 3D Body Visualizer",
      "intro": "Our free 3D BMI Calculator uses the Oxford 2.5-power height-adjusted formula (1.3 \xD7 weight / height\xB2\xB7\u2075) to render interactive 3D body shape models and height-proportional volume geometry.",
      "formulaTitle": "Oxford 2.5-Power Height-Adjusted 3D BMI Formula",
      "formulaDesc": "3D BMI = 1.3 \xD7 Weight (kg) / [Height (m)]\xB2\xB7\u2075 | Proposed by Oxford mathematician Prof. Nick Trefethen as an educational mathematical alternative to standard 2D BMI height scaling.",
      "formulaCode": "3D BMI = 1.3 \xD7 kg / m\xB2\xB7\u2075",
      "tableTitle": "Standard 2D BMI vs. Oxford 3D Height-Adjusted BMI Comparison",
      "tableRows": [
        {
          "col1": `Shorter Adults (< 160 cm / 5'3")`,
          "col2": "Standard 2D BMI underestimates height scaling",
          "col3": "3D BMI adjusts score proportionally for shorter statures"
        },
        {
          "col1": `Average Height Adults (170 cm / 5'7")`,
          "col2": "Standard 2D & 3D BMI produce identical results",
          "col3": "No difference between 2D and 3D formula categories"
        },
        {
          "col1": `Taller Adults (> 185 cm / 6'1")`,
          "col2": "Standard 2D BMI overestimates height scaling",
          "col3": "3D BMI corrects volumetric distortion for taller statures"
        }
      ],
      "faqs": [
        {
          "question": "How does 3D BMI differ from standard 2D BMI?",
          "answer": "Standard 2D BMI divides weight by height squared (m\xB2), whereas 3D BMI uses height raised to the 2.5 power (m\xB2\xB7\u2075) to account for 3D body volume scaling."
        },
        {
          "question": "How does the interactive 3D body visualizer work?",
          "answer": "It renders an interactive 3D avatar in your browser using height-to-weight proportions derived from your inputs. You can rotate the avatar 360\xB0 and toggle mesh, wireframe, and heatmap modes."
        },
        {
          "question": "What do solid mesh, wireframe, and heatmap modes represent?",
          "answer": "Solid mesh shows body shape volume, wireframe shows 3D geometric structure, and heatmap highlights weight category distribution."
        },
        {
          "question": "Why is the Oxford 2.5-power formula better for tall or short individuals?",
          "answer": "Proposed by Prof. Nick Trefethen at Oxford University, the 2.5-power equation provides an alternative height-scaling approach that changes how height is represented in the BMI calculation for tall and short statures."
        },
        {
          "question": "Does the 3D visualizer store photos or personal data?",
          "answer": "No. The 3D model is generated mathematically in real time inside your browser. No photos are required, and no data is uploaded or stored."
        },
        {
          "question": "Can I use the 3D Body Visualizer on mobile devices?",
          "answer": "Yes, the 3D visualizer is fully responsive and optimized for mobile touch controls, allowing 360\xB0 rotation and pinch-to-zoom on smartphones and tablets."
        },
        {
          "question": "How does body mass index relate to 3D avatar proportion scaling?",
          "answer": "The 3D avatar dynamically adjusts mesh thickness, waist curvature, and volumetric proportions based on your height-to-weight ratio and calculated BMI score."
        }
      ]
    },
    "es": {
      "eyebrow": "Modelo IMC Exponencial de Oxford 2.5 y Visualizaci\xF3n Corporal 3D",
      "title": "Calculadora de IMC 3D y Visualizador Corporal Interactivo",
      "intro": "Nuestra calculadora de IMC 3D y visualizador corporal interactivo calcula el \xEDndice de masa corporal mediante la f\xF3rmula exponencial de Oxford 2.5 (1.3 \xD7 peso / altura\xB2\xB7\u2075) y principios de geometr\xEDa corporal tridimensional. Gira 360\xB0 para ver la malla s\xF3lida, estructura de alambre y mapa de calor de IMC.",
      "formulaTitle": "F\xF3rmula Exponencial 3D de Oxford Ajustada a la Altura",
      "formulaDesc": "IMC 3D Ajustado = 1.3 \xD7 Peso (kg) / [Altura (m)]\xB2\xB7\u2075 | Propuesta por el matem\xE1tico de Oxford Prof. Nick Trefethen como una alternativa matem\xE1tica educativa al IMC 2D tradicional.",
      "formulaCode": "IMC 3D = 1.3 \xD7 kg / m\xB2\xB7\u2075",
      "tableTitle": "Comparaci\xF3n de IMC 2D Est\xE1ndar vs IMC 3D Ajustado por Altura",
      "tableRows": [
        {
          "col1": "Personas Bajas (< 160 cm)",
          "col2": "El IMC 2D est\xE1ndar suele subestimar el resultado",
          "col3": "El IMC 3D compensa la estatura menor adecuadamente"
        },
        {
          "col1": "Estatura Promedio (170 cm)",
          "col2": "Alineaci\xF3n de clasificaci\xF3n id\xE9ntica",
          "col3": "Sin diferencia entre la f\xF3rmula 2D y 3D"
        },
        {
          "col1": "Personas Altas (> 185 cm)",
          "col2": "El IMC 2D est\xE1ndar suele sobreestimar el exceso de peso",
          "col3": "El IMC 3D ajusta el volumen tridimensional real"
        }
      ],
      "faqs": [
        {
          "question": "\xBFEn qu\xE9 se diferencia el IMC 3D del IMC tradicional?",
          "answer": "El IMC tradicional usa la altura al cuadrado (m\xB2), mientras que el IMC 3D usa la masa tridimensional dividida entre la altura a la potencia 2.5 (m\xB2\xB7\u2075)."
        },
        {
          "question": "\xBFC\xF3mo funciona la visualizaci\xF3n corporal 3D?",
          "answer": "Genera una silueta anat\xF3mica tridimensional interactiva que se escala seg\xFAn tu altura y peso en tiempo real dentro del navegador."
        },
        {
          "question": "\xBFQu\xE9 representan los modos Malla, Alambre y Mapa de Calor?",
          "answer": "El modo s\xF3lido muestra la masa corporal, la malla de alambre muestra los contornos estructurales, y el mapa de calor resalta las zonas seg\xFAn el nivel de IMC."
        },
        {
          "question": "\xBFEs precisa la f\xF3rmula de Oxford 2.5 para personas muy altas?",
          "answer": "Propuesta por el Prof. Nick Trefethen de la Universidad de Oxford, la ecuaci\xF3n de potencia 2.5 proporciona un enfoque alternativo de escala de altura para personas altas y bajas."
        },
        {
          "question": "\xBFEl modelo 3D almacena datos o fotograf\xEDas personales?",
          "answer": "No, el modelo 3D es una simulaci\xF3n matem\xE1tica generada en tiempo real en tu navegador sin guardar datos ni requerir c\xE1mara."
        },
        {
          "question": "\xBFPuedo usar el Visualizador Corporal 3D en dispositivos m\xF3viles?",
          "answer": "S\xED, el visualizador 3D es totalmente adaptable a m\xF3viles y controles t\xE1ctiles, lo que permite rotaci\xF3n de 360\xB0 en tel\xE9fonos inteligentes y tabletas."
        },
        {
          "question": "\xBFC\xF3mo se relaciona el \xEDndice de masa corporal con el escalado del avatar 3D?",
          "answer": "El avatar 3D ajusta din\xE1micamente el grosor de la malla, la curvatura de la cintura y las proporciones volum\xE9tricas seg\xFAn tu IMC."
        }
      ]
    },
    "fr": {
      "eyebrow": "Mod\xE8le IMC d'Oxford 2.5 et Visualisation Corporelle 3D",
      "title": "Calculateur d'IMC 3D et Visualiseur Corporel Interactif",
      "intro": "Notre calculateur d'IMC 3D calcule votre indice de masse corporelle selon la formule d'Oxford 2.5 (1.3 \xD7 poids / taille\xB2\xB7\u2075) et mod\xE9lise votre silhouette en 3D sous tous los angles \xE0 360\xB0.",
      "formulaTitle": "Formule Exponentielle 3D d'Oxford Ajust\xE9e \xE0 la Taille",
      "formulaDesc": "IMC 3D Ajust\xE9 = 1.3 \xD7 Poids (kg) / [Taille (m)]\xB2\xB7\u2075 | \xC9labor\xE9e par des math\xE9maticiens de l'Universit\xE9 d'Oxford pour corriger les biais li\xE9s \xE0 la taille.",
      "formulaCode": "IMC 3D = 1.3 \xD7 kg / m\xB2\xB7\u2075",
      "tableTitle": "Comparaison IMC 2D Standard vs IMC 3D Ajust\xE9 d'Oxford",
      "tableRows": [
        {
          "col1": "Personnes de Petite Taille (< 160 cm)",
          "col2": "L'IMC 2D sous-estime souvent la cat\xE9gorie",
          "col3": "L'IMC 3D r\xE9ajuste le score proportionnellement"
        },
        {
          "col1": "Taille Moyenne (170 cm)",
          "col2": "R\xE9sultats identiques sur les deux formules",
          "col3": "Aucune diff\xE9rence de cat\xE9gorie"
        },
        {
          "col1": "Personnes de Grande Taille (> 185 cm)",
          "col2": "L'IMC 2D surestime le niveau de surpoids",
          "col3": "L'IMC 3D corrige la distorsion volum\xE9trique"
        }
      ],
      "faqs": [
        {
          "question": "En quoi l'IMC 3D diff\xE8re-t-il de l'IMC classique ?",
          "answer": "L'IMC classique divise le poids par la taille au carr\xE9 (m\xB2), tandis que l'IMC 3D utilise la puissance 2,5 (m\xB2\xB7\u2075) pour refl\xE9ter le volume corporel."
        },
        {
          "question": "Comment fonctionne la visualisation 3D ?",
          "answer": "Elle g\xE9n\xE8re un avatar anatomique 3D interactif mod\xE9lis\xE9 en temps r\xE9el selon vos mensurations dans votre navigateur."
        },
        {
          "question": "Que signifient les modes Maillage, Fil de fer et Carte de chaleur ?",
          "answer": "Le mode solide montre la masse, le fil de fer r\xE9v\xE8le la structure g\xE9om\xE9trique, et la carte de chaleur indique les zones d'IMC."
        },
        {
          "question": "Pourquoi la formule d'Oxford 2.5 est-elle recommand\xE9e pour les grands ?",
          "answer": "Elle \xE9limine la distorsion math\xE9matique de la formule de Quetelet qui d\xE9savantage syst\xE9matiquement les personnes tr\xE8s grandes."
        },
        {
          "question": "L'outil 3D enregistre-t-il des images personnelles ?",
          "answer": "Non, toutes les mod\xE9lisations sont des simulations math\xE9matiques anonymes ex\xE9cut\xE9es localement sur votre navigateur."
        },
        {
          "question": "Puis-je utiliser le Visualiseur Corporel 3D sur des appareils mobiles ?",
          "answer": "Oui, le visualiseur 3D est enti\xE8rement adapt\xE9 aux mobiles et aux commandes tactiles, permettant une rotation \xE0 360\xB0 sur smartphones et tablettes."
        },
        {
          "question": "Comment l'indice de masse corporelle est-il li\xE9 \xE0 la mod\xE9lisation 3D ?",
          "answer": "L'avatar 3D ajuste dynamiquement l'\xE9paisseur du maillage et les proportions volum\xE9triques en fonction de votre rapport taille/poids et de votre score IMC."
        }
      ]
    },
    "de": {
      "eyebrow": "Oxford 2.5 Potenzformel & 3D-K\xF6rper-Visualisierung",
      "title": "Interaktiver 3D BMI-Rechner & 3D-K\xF6rper-Visualisierer",
      "intro": "Berechnen Sie Ihren h\xF6henkorrigierten BMI mit der Oxford 2.5 Formel (1.3 \xD7 Gewicht / Gr\xF6\xDFe\xB2\xB7\u2075) und betrachten Sie ein interaktives 360\xB0-3D-K\xF6rpermodell direkt in Ihrem Browser.",
      "formulaTitle": "Oxford 3D Potenzformel f\xFCr dreidimensionale K\xF6rpergeometrie",
      "formulaDesc": "3D-BMI = 1.3 \xD7 Gewicht (kg) / [Gr\xF6\xDFe (m)]\xB2\xB7\u2075 | Entwickelt von Mathematikern der Universit\xE4t Oxford zur Korrektur von Gr\xF6\xDFenverzerrungen.",
      "formulaCode": "3D-BMI = 1.3 \xD7 kg / m\xB2\xB7\u2075",
      "tableTitle": "Vergleich: Standard 2D-BMI vs. H\xF6henkorrigierter 3D-BMI",
      "tableRows": [
        {
          "col1": "Kleine Personen (< 160 cm)",
          "col2": "Standard 2D-BMI zeigt tendenziell zu niedrige Werte",
          "col3": "3D-Formel gleicht die K\xF6rpergr\xF6\xDFe aus"
        },
        {
          "col1": "Durchschnittliche Gr\xF6\xDFe (170 cm)",
          "col2": "Identische Ergebnisse bei beiden Formeln",
          "col3": "Kein Unterschied in der Kategorie"
        },
        {
          "col1": "Gro\xDFe Personen (> 185 cm)",
          "col2": "Standard 2D-BMI zeigt oft zu hohe Werte",
          "col3": "3D-Formel ber\xFCcksichtigt das dreidimensionale Volumen"
        }
      ],
      "faqs": [
        {
          "question": "Was unterscheidet den 3D-BMI vom klassischen BMI?",
          "answer": "Der klassische BMI nutzt die K\xF6rpergr\xF6\xDFe zum Quadrat (m\xB2), w\xE4hrend der 3D-BMI die Potenz 2.5 nutzt, um das dreidimensionale K\xF6rpervolumen besser abzubilden."
        },
        {
          "question": "Wie funktioniert der 3D-K\xF6rper-Visualisierer?",
          "answer": "Er erzeugt einen interaktiven 3D-Avatar, der sich in Echtzeit an Ihre eingegebenen Daten anpasst und um 360\xB0 gedreht werden kann."
        },
        {
          "question": "Was bedeuten Drahtmodell, Solid-Mesh und Heatmap?",
          "answer": "Solid-Mesh zeigt die K\xF6rperoberfl\xE4che, das Drahtmodell zeigt die Gitterstruktur und die Heatmap hebt BMI-Zonen farblich hervor."
        },
        {
          "question": "Warum ist die Oxford 2.5 Formel f\xFCr gro\xDFe Menschen genauer?",
          "answer": "Von Prof. Nick Trefethen an der Universit\xE4t Oxford vorgeschlagen, bietet die 2,5-Potenz-Gleichung einen alternativen Skalierungsansatz f\xFCr die K\xF6rpergr\xF6\xDFe."
        },
        {
          "question": "Werden Bilder oder pers\xF6nliche Daten gespeichert?",
          "answer": "Nein, das 3D-Modell ist eine rein mathematische Echtzeit-Simulation in Ihrem Browser ohne Datenspeicherung."
        },
        {
          "question": "Kann ich den 3D-K\xF6rper-Visualisierer auf Mobilger\xE4ten verwenden?",
          "answer": "Ja, der 3D-Visualisierer ist vollst\xE4ndig f\xFCr mobile Touch-Steuerung optimiert und erm\xF6glicht 360\xB0-Drehung auf Smartphones und Tablets."
        },
        {
          "question": "Wie h\xE4ngt der Body-Mass-Index mit der 3D-Proportionenskalierung zusammen?",
          "answer": "Der 3D-Avatar passt die Netzst\xE4rke und die volumetrischen Proportionen dynamisch basierend auf Ihrem BMI-Wert an."
        }
      ]
    },
    "ko": {
      "eyebrow": "\uC625\uC2A4\uD3EC\uB4DC 2.5 \uC2E0\uC7A5 \uBCF4\uC815 \uACF5\uC2DD \uBC0F 3D \uCCB4\uD615 \uC2DC\uAC01\uD654",
      "title": "3D BMI \uACC4\uC0B0\uAE30 \uBC0F \uB300\uD654\uD615 3D \uCCB4\uD615 \uC2DC\uAC01\uD654 \uB3C4\uAD6C",
      "intro": "\uC625\uC2A4\uD3EC\uB4DC 2.5 \uCCB4\uC9C8\uB7C9 \uACF5\uC2DD(1.3 \xD7 \uCCB4\uC911 / \uC2E0\uC7A5\xB2\xB7\u2075)\uC744 \uAE30\uBC18\uC73C\uB85C \uC2E0\uC7A5 \uC65C\uACE1\uC744 \uBCF4\uC815\uD55C BMI\uB97C \uC0B0\uCD9C\uD558\uACE0 360\xB0 \uD68C\uC804 \uAC00\uB2A5\uD55C 3D \uC785\uCCB4 \uC2E4\uB8E8\uC5E3 \uC544\uBC14\uD0C0\uB97C \uC2E4\uC2DC\uAC04\uC73C\uB85C \uD655\uC778\uD558\uC138\uC694.",
      "formulaTitle": "3D \uC625\uC2A4\uD3EC\uB4DC \uC2E0\uC7A5 \uBCF4\uC815 \uCCB4\uC9C8\uB7C9 \uACF5\uC2DD",
      "formulaDesc": "3D \uBCF4\uC815 BMI = 1.3 \xD7 \uCCB4\uC911 (kg) / [\uC2E0\uC7A5 (m)]\xB2\xB7\u2075 | \uC625\uC2A4\uD37C\uB4DC \uB300\uD559\uAD50 \uC218\uD559\uACFC \uC5F0\uAD6C\uC9C4\uC774 \uAC1C\uBC1C\uD55C 3\uCC28\uC6D0 \uC2E0\uCCB4 \uBD80\uD53C \uC2A4\uCF00\uC77C\uB9C1 \uACF5\uC2DD.",
      "formulaCode": "3D BMI = 1.3 \xD7 kg / m\xB2\xB7\u2075",
      "tableTitle": "\uD45C\uC900 2D BMI vs \uC625\uC2A4\uD3EC\uB4DC 3D \uC2E0\uC7A5 \uBCF4\uC815 BMI \uBE44\uAD50",
      "tableRows": [
        {
          "col1": "\uB2E8\uC2E0 \uC131\uC778 (< 160 cm)",
          "col2": "\uD45C\uC900 2D \uACF5\uC2DD\uC740 \uC0C1\uB300\uC801\uC73C\uB85C \uB0AE\uAC8C \uCE21\uC815\uB428",
          "col3": "3D \uBCF4\uC815 \uACF5\uC2DD\uC774 \uC62C\uBC14\uB978 \uC218\uCE58 \uBCF4\uC815"
        },
        {
          "col1": "\uD3C9\uADE0 \uC2E0\uC7A5 (170 cm)",
          "col2": "\uB450 \uACF5\uC2DD \uACB0\uACFC \uB3D9\uC77C",
          "col3": "\uBC94\uC8FC \uCC28\uC774 \uC5C6\uC74C (\uB3D9\uC77C)"
        },
        {
          "col1": "\uC7A5\uC2E0 \uC131\uC778 (> 185 cm)",
          "col2": "\uD45C\uC900 2D \uACF5\uC2DD\uC740 \uACFC\uB3C4\uD558\uAC8C \uB192\uAC8C \uCE21\uC815\uB428",
          "col3": "3D \uBCF4\uC815 \uACF5\uC2DD\uC774 3\uCC28\uC6D0 \uBD80\uD53C \uC65C\uACE1 \uBCF4\uC815"
        }
      ],
      "faqs": [
        {
          "question": "3D BMI\uC640 \uAE30\uC874 \uC77C\uBC18 BMI\uC758 \uCC28\uC774\uC810\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uAE30\uC874 BMI\uB294 \uC2E0\uC7A5\uC758 \uC81C\uACF1(m\xB2)\uC73C\uB85C \uB098\uB204\uC9C0\uB9CC, 3D BMI\uB294 3\uCC28\uC6D0 \uC2E0\uCCB4 \uBD80\uD53C \uBE44\uC728\uC778 \uC2E0\uC7A5\uC758 2.5\uC81C\uACF1(m\xB2\xB7\u2075)\uC744 \uC801\uC6A9\uD569\uB2C8\uB2E4."
        },
        {
          "question": "3D \uCCB4\uD615 \uC2DC\uAC01\uD654 \uAE30\uB2A5\uC740 \uC5B4\uB5BB\uAC8C \uAD6C\uB3D9\uB418\uB098\uC694?",
          "answer": "\uC785\uB825\uD55C \uC2E0\uC7A5\uACFC \uCCB4\uC911 \uBE44\uC728\uC5D0 \uB530\uB77C \uBE0C\uB77C\uC6B0\uC800 \uB0B4\uC5D0\uC11C \uC2E4\uC2DC\uAC04\uC73C\uB85C 3D \uC544\uBC14\uD0C0 \uBAA8\uB378\uC744 \uC0DD\uC131\uD558\uACE0 360\xB0 \uD68C\uC804\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4."
        },
        {
          "question": "\uC194\uB9AC\uB4DC, \uC640\uC774\uC5B4\uD504\uB808\uC784, \uD788\uD2B8\uB9F5 \uBAA8\uB4DC\uC758 \uCC28\uC774\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uC194\uB9AC\uB4DC\uB294 \uCCB4\uD615 \uC2E4\uB8E8\uC5E3, \uC640\uC774\uC5B4\uD504\uB808\uC784\uC740 3D \uAD6C\uC870 \uB9DD, \uD788\uD2B8\uB9F5\uC740 BMI \uBC94\uC8FC\uBCC4 \uC0C9\uC0C1 \uC704\uD5D8\uB3C4\uB97C \uC2DC\uAC01\uC801\uC73C\uB85C \uD45C\uD604\uD569\uB2C8\uB2E4."
        },
        {
          "question": "\uD0A4\uAC00 \uD070 \uC0AC\uB78C\uC5D0\uAC8C \uC625\uC2A4\uD3EC\uB4DC 2.5 \uACF5\uC2DD\uC774 \uB354 \uC815\uD655\uD55C \uC774\uC720\uB294?",
          "answer": "\uC625\uC2A4\uD37C\uB4DC \uB300\uD559\uAD50 \uD2B8\uB808\uD398\uC820 \uAD50\uC218\uAC00 \uC785\uC99D\uD588\uB4EF 2\uCC28\uC6D0 \uC81C\uACF1 \uACF5\uC2DD\uC740 \uD0A4\uAC00 \uD070 \uC0AC\uB78C\uC744 \uBD88\uD544\uC694\uD558\uAC8C \uBE44\uB9CC\uC73C\uB85C \uD310\uC815\uD558\uB294 \uC624\uB958\uB97C \uBCF4\uC815\uD569\uB2C8\uB2E4."
        },
        {
          "question": "3D \uC544\uBC14\uD0C0 \uC0DD\uC131 \uC2DC \uAC1C\uC778\uC815\uBCF4\uB098 \uC0AC\uC9C4\uC774 \uC800\uC7A5\uB418\uB098\uC694?",
          "answer": "\uC544\uB2C8\uC694, \uC0AC\uC9C4 \uC5C5\uB85C\uB4DC\uAC00 \uD544\uC694 \uC5C6\uC73C\uBA70 \uBAA8\uB4E0 \uACC4\uC0B0 \uBC0F 3D \uB80C\uB354\uB9C1\uC740 \uC0AC\uC6A9\uC790 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C 100% \uC548\uC804\uD558\uAC8C \uAD6C\uB3D9\uB429\uB2C8\uB2E4."
        },
        {
          "question": "\uBAA8\uBC14\uC77C \uAE30\uAE30\uC5D0\uC11C\uB3C4 3D \uCCB4\uD615 \uC2DC\uAC01\uD654 \uB3C4\uAD6C\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB098\uC694?",
          "answer": "\uB124, 3D \uC2DC\uAC01\uD654 \uB3C4\uAD6C\uB294 \uBAA8\uBC14\uC77C \uD130\uCE58 \uC870\uC791\uC5D0 \uC644\uBCBD\uD558\uAC8C \uCD5C\uC801\uD654\uB418\uC5B4 \uC2A4\uB9C8\uD2B8\uD3F0\uACFC \uD0DC\uBE14\uB9BF\uC5D0\uC11C 360\xB0 \uD68C\uC804\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4."
        },
        {
          "question": "\uCCB4\uC9C8\uB7C9\uC9C0\uC218(BMI)\uB294 3D \uC544\uBC14\uD0C0\uC758 \uBE44\uC728 \uC2A4\uCF00\uC77C\uB9C1\uACFC \uC5B4\uB5BB\uAC8C \uC5F0\uACB0\uB418\uB098\uC694?",
          "answer": "3D \uC544\uBC14\uD0C0\uB294 \uC785\uB825\uB41C \uC2E0\uC7A5 \uB300 \uCCB4\uC911 \uBE44\uC728\uACFC \uACC4\uC0B0\uB41C BMI \uC218\uCE58\uC5D0 \uB530\uB77C \uC2E4\uB8E8\uC5E3 \uB450\uAED8\uC640 \uBD80\uD53C \uBE44\uC728\uC744 \uC2E4\uC2DC\uAC04\uC73C\uB85C \uC870\uC815\uD569\uB2C8\uB2E4."
        }
      ]
    },
    "hi": {
      "eyebrow": "\u0911\u0915\u094D\u0938\u092B\u094B\u0930\u094D\u0921 2.5 \u090F\u0915\u094D\u0938\u092A\u094B\u0928\u0947\u0902\u0936\u093F\u092F\u0932 \u092B\u0949\u0930\u094D\u092E\u0942\u0932\u093E \u0914\u0930 3D \u092E\u0949\u0921\u0932",
      "title": "3D \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u0914\u0930 \u0907\u0902\u091F\u0930\u090F\u0915\u094D\u091F\u093F\u0935 3D \u092C\u0949\u0921\u0940 \u0935\u093F\u091C\u0941\u0905\u0932\u093E\u0907\u091C\u093C\u0930",
      "intro": "\u0911\u0915\u094D\u0938\u092B\u094B\u0930\u094D\u0921 2.5 \u092B\u0949\u0930\u094D\u092E\u0942\u0932\u093E (1.3 \xD7 \u0935\u091C\u0928 / \u090A\u0902\u091A\u093E\u0908\xB2\xB7\u2075) \u0915\u0947 \u0938\u093E\u0925 \u0905\u092A\u0928\u0947 \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902 \u0914\u0930 360\xB0 \u0907\u0902\u091F\u0930\u090F\u0915\u094D\u091F\u093F\u0935 3D \u092C\u0949\u0921\u0940 \u092E\u0949\u0921\u0932\u0930 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0915\u0947 \u0905\u092A\u0928\u0940 \u0936\u093E\u0930\u0940\u0930\u093F\u0915 \u0938\u0902\u0930\u091A\u0928\u093E \u0915\u094B \u0938\u092E\u091D\u0947\u0902\u0964",
      "formulaTitle": "\u0911\u0915\u094D\u0938\u092B\u094B\u0930\u094D\u0921 3D \u090A\u0902\u091A\u093E\u0908-\u0938\u092E\u093E\u092F\u094B\u091C\u093F\u0924 \u092C\u0940\u090F\u092E\u0906\u0908 \u092B\u0949\u0930\u094D\u092E\u0942\u0932\u093E",
      "formulaDesc": "3D \u092C\u0940\u090F\u092E\u0906\u0908 = 1.3 \xD7 \u0935\u091C\u0928 (\u0915\u093F\u0917\u094D\u0930\u093E) / [\u090A\u0902\u091A\u093E\u0908 (\u092E\u0940\u091F\u0930)]\xB2\xB7\u2075 | \u0911\u0915\u094D\u0938\u092B\u094B\u0930\u094D\u0921 \u0935\u093F\u0936\u094D\u0935\u0935\u093F\u0926\u094D\u092F\u093E\u0932\u092F \u0915\u0947 \u0917\u0923\u093F\u0924\u091C\u094D\u091E\u094B\u0902 \u0926\u094D\u0935\u093E\u0930\u093E \u0935\u093F\u0915\u0938\u093F\u0924 \u0938\u0942\u0924\u094D\u0930 \u091C\u094B \u0932\u0902\u092C\u0947 \u092F\u093E \u091B\u094B\u091F\u0947 \u0915\u0926 \u0915\u0947 \u0932\u094B\u0917\u094B\u0902 \u092E\u0947\u0902 \u090A\u0902\u091A\u093E\u0908 \u0915\u0947 \u0917\u0923\u093F\u0924\u0940\u092F \u092D\u094D\u0930\u092E \u0915\u094B \u0926\u0942\u0930 \u0915\u0930\u0924\u093E \u0939\u0948\u0964",
      "formulaCode": "3D BMI = 1.3 \xD7 kg / m\xB2\xB7\u2075",
      "tableTitle": "\u092E\u093E\u0928\u0915 2D \u092C\u0940\u090F\u092E\u0906\u0908 \u092C\u0928\u093E\u092E 3D \u090A\u0902\u091A\u093E\u0908-\u0938\u092E\u093E\u092F\u094B\u091C\u093F\u0924 \u092C\u0940\u090F\u092E\u0906\u0908",
      "tableRows": [
        {
          "col1": "\u0915\u092E \u090A\u0902\u091A\u093E\u0908 \u0935\u093E\u0932\u0947 \u0935\u092F\u0938\u094D\u0915 (< 160 \u0938\u0947\u092E\u0940)",
          "col2": "\u092E\u093E\u0928\u0915 2D \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u092E \u0938\u094D\u0915\u094B\u0930 \u0926\u093F\u0916\u093E\u0924\u093E \u0939\u0948",
          "col3": "3D \u092B\u0949\u0930\u094D\u092E\u0942\u0932\u093E \u0938\u0939\u0940 \u090A\u0902\u091A\u093E\u0908 \u0905\u0928\u0941\u092A\u093E\u0924 \u0915\u094B \u0938\u092E\u093E\u092F\u094B\u091C\u093F\u0924 \u0915\u0930\u0924\u093E \u0939\u0948"
        },
        {
          "col1": "\u0914\u0938\u0924 \u090A\u0902\u091A\u093E\u0908 (170 \u0938\u0947\u092E\u0940)",
          "col2": "\u0926\u094B\u0928\u094B\u0902 \u092B\u0949\u0930\u094D\u092E\u0942\u0932\u094B\u0902 \u092E\u0947\u0902 \u0938\u092E\u093E\u0928 \u092A\u0930\u093F\u0923\u093E\u092E",
          "col3": "\u0915\u094B\u0908 \u0905\u0902\u0924\u0930 \u0928\u0939\u0940\u0902 (\u0938\u092E\u093E\u0928 \u0936\u094D\u0930\u0947\u0923\u0940)"
        },
        {
          "col1": "\u0905\u0927\u093F\u0915 \u090A\u0902\u091A\u093E\u0908 \u0935\u093E\u0932\u0947 \u0935\u092F\u0938\u094D\u0915 (> 185 \u0938\u0947\u092E\u0940)",
          "col2": "\u092E\u093E\u0928\u0915 2D \u092C\u0940\u090F\u092E\u0906\u0908 \u0905\u0927\u093F\u0915 \u0938\u094D\u0915\u094B\u0930 \u0926\u093F\u0916\u093E\u0924\u093E \u0939\u0948",
          "col3": "3D \u092B\u0949\u0930\u094D\u092E\u0942\u0932\u093E 3D \u0906\u092F\u0924\u0928 \u0915\u094B \u0938\u0902\u0924\u0941\u0932\u093F\u0924 \u0915\u0930\u0924\u093E \u0939\u0948"
        }
      ],
      "faqs": [
        {
          "question": "3D \u092C\u0940\u090F\u092E\u0906\u0908 \u0914\u0930 \u092E\u093E\u0928\u0915 \u092C\u0940\u090F\u092E\u0906\u0908 \u092E\u0947\u0902 \u0915\u094D\u092F\u093E \u0905\u0902\u0924\u0930 \u0939\u0948?",
          "answer": "\u092E\u093E\u0928\u0915 \u092C\u0940\u090F\u092E\u0906\u0908 \u090A\u0902\u091A\u093E\u0908 \u0915\u0947 \u0935\u0930\u094D\u0917 (m\xB2) \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0924\u093E \u0939\u0948, \u091C\u092C\u0915\u093F 3D \u092C\u0940\u090F\u092E\u0906\u0908 \u0936\u093E\u0930\u0940\u0930\u093F\u0915 \u092E\u093E\u0924\u094D\u0930\u093E \u0915\u094B \u0938\u0902\u0924\u0941\u0932\u093F\u0924 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F 2.5 \u0915\u0940 \u0918\u093E\u0924 (m\xB2\xB7\u2075) \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "3D \u092C\u0949\u0921\u0940 \u0935\u093F\u091C\u0941\u0905\u0932\u093E\u0907\u091C\u093C\u0930 \u0915\u0948\u0938\u0947 \u0915\u093E\u092E \u0915\u0930\u0924\u093E \u0939\u0948?",
          "answer": "\u092F\u0939 \u0906\u092A\u0915\u0947 \u0926\u0930\u094D\u091C \u0915\u093F\u090F \u0917\u090F \u0935\u091C\u0928 \u0914\u0930 \u090A\u0902\u091A\u093E\u0908 \u0915\u0947 \u0906\u0927\u093E\u0930 \u092A\u0930 \u0906\u092A\u0915\u0947 \u092C\u094D\u0930\u093E\u0909\u091C\u093C\u0930 \u092E\u0947\u0902 \u0939\u0940 \u0935\u093E\u0938\u094D\u0924\u0935\u093F\u0915 \u0938\u092E\u092F \u092E\u0947\u0902 3D \u0905\u0935\u0924\u093E\u0930 \u092E\u0949\u0921\u0932 \u0924\u0948\u092F\u093E\u0930 \u0915\u0930\u0924\u093E \u0939\u0948 \u091C\u093F\u0938\u0947 \u0906\u092A 360\xB0 \u0918\u0941\u092E\u093E \u0938\u0915\u0924\u0947 \u0939\u0948\u0902\u0964"
        },
        {
          "question": "\u0935\u093E\u092F\u0930\u092B\u094D\u0930\u0947\u092E, \u092E\u0947\u0936 \u0914\u0930 \u0939\u0940\u091F\u092E\u0948\u092A \u0935\u094D\u092F\u0942 \u0915\u094D\u092F\u093E \u0926\u0930\u094D\u0936\u093E\u0924\u0947 \u0939\u0948\u0902?",
          "answer": "\u092E\u0947\u0936 \u0936\u0930\u0940\u0930 \u0915\u0947 \u0906\u0915\u093E\u0930 \u0915\u094B \u0926\u093F\u0916\u093E\u0924\u093E \u0939\u0948, \u0935\u093E\u092F\u0930\u092B\u094D\u0930\u0947\u092E \u091C\u094D\u092F\u093E\u092E\u093F\u0924\u0940\u092F \u0932\u093E\u0907\u0928\u094B\u0902 \u0915\u094B \u0926\u093F\u0916\u093E\u0924\u093E \u0939\u0948, \u0914\u0930 \u0939\u0940\u091F\u092E\u0948\u092A \u092C\u0940\u090F\u092E\u0906\u0908 \u0936\u094D\u0930\u0947\u0923\u0940 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0930\u0902\u0917\u094B\u0902 \u0938\u0947 \u091C\u094B\u0916\u093F\u092E \u0915\u094D\u0937\u0947\u0924\u094D\u0930 \u0926\u093F\u0916\u093E\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u0932\u0902\u092C\u0947 \u0932\u094B\u0917\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u0911\u0915\u094D\u0938\u092B\u094B\u0930\u094D\u0921 2.5 \u092B\u0949\u0930\u094D\u092E\u0942\u0932\u093E \u0915\u094D\u092F\u094B\u0902 \u092C\u0947\u0939\u0924\u0930 \u0939\u0948?",
          "answer": "\u0911\u0915\u094D\u0938\u092B\u094B\u0930\u094D\u0921 \u0935\u093F\u0936\u094D\u0935\u0935\u093F\u0926\u094D\u092F\u093E\u0932\u092F \u0915\u0947 \u092A\u094D\u0930\u094B\u092B\u0947\u0938\u0930 \u0928\u093F\u0915 \u0924\u094D\u0930\u0947\u092B\u0947\u0925\u0947\u0928 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930, \u092A\u0941\u0930\u093E\u0928\u093E \u092B\u0949\u0930\u094D\u092E\u0942\u0932\u093E \u0932\u0902\u092C\u0947 \u0932\u094B\u0917\u094B\u0902 \u0915\u0947 \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u094B \u0905\u0915\u093E\u0930\u0923 \u0905\u0927\u093F\u0915 \u0926\u093F\u0916\u093E\u0924\u093E \u0925\u093E, \u091C\u093F\u0938\u0947 2.5 \u092B\u0949\u0930\u094D\u092E\u0942\u0932\u093E \u0920\u0940\u0915 \u0915\u0930\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u0915\u094D\u092F\u093E 3D \u0935\u093F\u091C\u0941\u0905\u0932\u093E\u0907\u091C\u093C\u0930 \u0906\u092A\u0915\u0940 \u0915\u094B\u0908 \u0928\u093F\u091C\u0940 \u092B\u094B\u091F\u094B \u0932\u0947\u0924\u093E \u0939\u0948?",
          "answer": "\u0928\u0939\u0940\u0902, \u0907\u0938\u0915\u0947 \u0932\u093F\u090F \u0915\u093F\u0938\u0940 \u0915\u0948\u092E\u0930\u0947 \u092F\u093E \u092B\u094B\u091F\u094B \u0915\u0940 \u0906\u0935\u0936\u094D\u092F\u0915\u0924\u093E \u0928\u0939\u0940\u0902 \u0939\u0948; \u092F\u0939 \u0915\u0947\u0935\u0932 \u0906\u092A\u0915\u0947 \u0905\u0902\u0915\u094B\u0902 \u092A\u0930 \u0906\u0927\u093E\u0930\u093F\u0924 \u090F\u0915 \u092E\u0941\u092B\u093C\u094D\u0924 3D \u0917\u0923\u093F\u0924\u0940\u092F \u092E\u0949\u0921\u0932 \u0939\u0948\u0964"
        },
        {
          "question": "\u0915\u094D\u092F\u093E \u092E\u0948\u0902 \u092E\u094B\u092C\u093E\u0907\u0932 \u0909\u092A\u0915\u0930\u0923\u094B\u0902 \u092A\u0930 3D \u092C\u0949\u0921\u0940 \u0935\u093F\u091C\u0941\u0905\u0932\u093E\u0907\u091C\u093C\u0930 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930 \u0938\u0915\u0924\u093E \u0939\u0942\u0902?",
          "answer": "\u0939\u093E\u0901, 3D \u0935\u093F\u091C\u093C\u0941\u0905\u0932\u093E\u0907\u091C\u093C\u0930 \u092E\u094B\u092C\u093E\u0907\u0932 \u091F\u091A \u0915\u0902\u091F\u094D\u0930\u094B\u0932 \u0915\u0947 \u0932\u093F\u090F \u092A\u0942\u0930\u0940 \u0924\u0930\u0939 \u0938\u0947 \u0905\u0928\u0941\u0915\u0942\u0932\u093F\u0924 \u0939\u0948, \u091C\u093F\u0938\u0938\u0947 \u0938\u094D\u092E\u093E\u0930\u094D\u091F\u092B\u093C\u094B\u0928 \u0914\u0930 \u091F\u0948\u092C\u0932\u0947\u091F \u092A\u0930 360\xB0 \u0930\u094B\u091F\u0947\u0936\u0928 \u0915\u0940 \u0905\u0928\u0941\u092E\u0924\u093F \u092E\u093F\u0932\u0924\u0940 \u0939\u0948\u0964"
        },
        {
          "question": "\u092C\u0949\u0921\u0940 \u092E\u093E\u0938 \u0907\u0902\u0921\u0947\u0915\u094D\u0938 3D \u0905\u0935\u0924\u093E\u0930 \u0905\u0928\u0941\u092A\u093E\u0924 \u0938\u094D\u0915\u0947\u0932\u093F\u0902\u0917 \u0938\u0947 \u0915\u0948\u0938\u0947 \u0938\u0902\u092C\u0902\u0927\u093F\u0924 \u0939\u0948?",
          "answer": "3D \u0905\u0935\u0924\u093E\u0930 \u0906\u092A\u0915\u0940 \u090A\u0902\u091A\u093E\u0908-\u0938\u0947-\u0935\u091C\u0928 \u0905\u0928\u0941\u092A\u093E\u0924 \u0914\u0930 \u092C\u0940\u090F\u092E\u0906\u0908 \u0938\u094D\u0915\u094B\u0930 \u0915\u0947 \u0906\u0927\u093E\u0930 \u092A\u0930 \u092E\u0947\u0936 \u0915\u0940 \u092E\u094B\u091F\u093E\u0908 \u0914\u0930 3D \u0906\u0915\u0943\u0924\u093F\u092F\u094B\u0902 \u0915\u094B \u0935\u093E\u0938\u094D\u0924\u0935\u093F\u0915 \u0938\u092E\u092F \u092E\u0947\u0902 \u0938\u092E\u093E\u092F\u094B\u091C\u093F\u0924 \u0915\u0930\u0924\u093E \u0939\u0948\u0964"
        }
      ]
    }
  },
  "bmi-chart": {
    "en": {
      "eyebrow": "WHO Official Adult BMI Scales",
      "title": "BMI Chart for Adults \u2013 Height & Weight Lookup Table (kg & cm)",
      "intro": "Our comprehensive adult BMI Chart and BMI Table provides an instant visual reference for adult men and women. Look up your Body Mass Index (BMI) category across standard metric ranges (kg & cm) and imperial units (lbs & inches) aligned with World Health Organization (WHO) and CDC population standards.",
      "formulaTitle": "Standard Metric & Imperial BMI Chart Formulas",
      "formulaDesc": "Metric: BMI = Weight (kg) / [Height (m)]\xB2  |  Imperial: BMI = [Weight (lbs) / Height (inches)\xB2] \xD7 703",
      "formulaCode": "BMI = kg / m\xB2",
      "tableTitle": "Official WHO BMI Categories Chart & Table for Adults (Men & Women)",
      "tableRows": [
        {
          "col1": "Severe Thinness",
          "col2": "< 16.0 kg/m\xB2",
          "col3": "Severe underweight risk threshold"
        },
        {
          "col1": "Moderate Thinness",
          "col2": "16.0 \u2013 16.9 kg/m\xB2",
          "col3": "Moderate underweight reference range"
        },
        {
          "col1": "Mild Thinness",
          "col2": "17.0 \u2013 18.4 kg/m\xB2",
          "col3": "Mild underweight reference range"
        },
        {
          "col1": "Normal / Healthy Weight",
          "col2": "18.5 \u2013 24.9 kg/m\xB2",
          "col3": "Optimal healthy baseline range for adults"
        },
        {
          "col1": "Overweight (Pre-obese)",
          "col2": "25.0 \u2013 29.9 kg/m\xB2",
          "col3": " (Asian cutoff: 23.0 kg/m\xB2)"
        },
        {
          "col1": "Obesity Class I",
          "col2": "30.0 \u2013 34.9 kg/m\xB2",
          "col3": "Class I obesity screening reference"
        },
        {
          "col1": "Obesity Class II",
          "col2": "35.0 \u2013 39.9 kg/m\xB2",
          "col3": "Class II obesity screening reference"
        },
        {
          "col1": "Obesity Class III (Severe)",
          "col2": "\u2265 40.0 kg/m\xB2",
          "col3": "Severe Class III obesity screening threshold"
        }
      ],
      "faqs": [
        {
          "question": "What is a BMI chart and how do I read a BMI table?",
          "answer": "A BMI chart is a reference matrix that maps your height against your weight to determine your Body Mass Index score and category. Locate your height on the left column and trace across to your weight in kg or lbs to find your BMI classification."
        },
        {
          "question": "\xBFEs diferente la tabla de IMC para hombres de la tabla de IMC para mujeres?",
          "answer": "The WHO adult BMI chart uses identical cutoff numbers (18.5 to 24.9 for normal weight) for both adult men and women. However, because women naturally carry higher body fat percentages, waist measurements and body composition testing provide additional context."
        },
        {
          "question": "\xBFC\xF3mo funciona la tabla de IMC seg\xFAn la edad en adultos y adultos mayores?",
          "answer": "Standard WHO BMI categories apply to all adults aged 20 and older. However, research suggests that for seniors over age 65, a slightly higher BMI (23.0 to 27.0 kg/m\xB2) may protect against bone density loss and frailty."
        },
        {
          "question": "What is the BMI chart in kg and cm?",
          "answer": "A metric BMI chart lists height in centimeters (cm) and weight in kilograms (kg). For example: Height 170 cm with Weight 65 kg yields a BMI of 22.5 kg/m\xB2 (Healthy Weight)."
        },
        {
          "question": "\xBFCu\xE1les son las categor\xEDas principales de la tabla oficial de IMC?",
          "answer": "The official WHO BMI categories are: Underweight (< 18.5), Normal Weight (18.5 \u2013 24.9), Overweight (25.0 \u2013 29.9), Obese Class I (30.0 \u2013 34.9), Obese Class II (35.0 \u2013 39.9), and Obese Class III (\u2265 40.0)."
        }
      ]
    },
    "es": {
      "eyebrow": "Est\xE1ndares de Referencia de Salud",
      "title": "BMI Chart for Adults \u2013 Height & Weight Lookup Table (kg & cm) \u2013 Gu\xEDa y Calculadora",
      "intro": "Herramienta de c\xE1lculo y referencia educativa dise\xF1ada seg\xFAn los est\xE1ndares de salud publicados de la OMS y CDC. Calcula tus m\xE9tricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "F\xF3rmula de Referencia Est\xE1ndar",
      "formulaDesc": "Calculado utilizando ecuaciones est\xE1ndar validadas.",
      "formulaCode": "BMI = kg / m\xB2",
      "tableTitle": "Tabla de Referencia Est\xE1ndar",
      "tableRows": [
        {
          "col1": "Categor\xEDa / Nivel 1",
          "col2": "< 16.0 kg/m\xB2",
          "col3": "Umbral de referencia para bajo peso severo"
        },
        {
          "col1": "Categor\xEDa / Nivel 2",
          "col2": "16.0 \u2013 16.9 kg/m\xB2",
          "col3": "Umbral de referencia para bajo peso moderado"
        },
        {
          "col1": "Categor\xEDa / Nivel 3",
          "col2": "17.0 \u2013 18.4 kg/m\xB2",
          "col3": "Umbral de referencia para bajo peso leve"
        },
        {
          "col1": "Categor\xEDa / Nivel 4",
          "col2": "18.5 \u2013 24.9 kg/m\xB2",
          "col3": "Rango de referencia saludable \xF3ptimo para adultos"
        },
        {
          "col1": "Categor\xEDa / Nivel 5",
          "col2": "25.0 \u2013 29.9 kg/m\xB2",
          "col3": "Rango de sobrepeso (Punto de corte asi\xE1tico: 23.0 kg/m\xB2)"
        },
        {
          "col1": "Categor\xEDa / Nivel 6",
          "col2": "30.0 \u2013 34.9 kg/m\xB2",
          "col3": "Referencia de evaluaci\xF3n para obesidad clase I"
        },
        {
          "col1": "Categor\xEDa / Nivel 7",
          "col2": "35.0 \u2013 39.9 kg/m\xB2",
          "col3": "Referencia de evaluaci\xF3n para obesidad clase II"
        },
        {
          "col1": "Categor\xEDa / Nivel 8",
          "col2": "\u2265 40.0 kg/m\xB2",
          "col3": "Umbral de evaluaci\xF3n para obesidad severa Clase III"
        }
      ],
      "faqs": [
        {
          "question": "\xBFC\xF3mo funciona la calculadora de bmi chart y qu\xE9 mide?",
          "answer": "Esta calculadora eval\xFAa tus datos personales utilizando ecuaciones validadas. Proporciona una estimaci\xF3n educativa para ayudarte a comprender tu estado de salud y referencias est\xE1ndar."
        },
        {
          "question": "\xBFEs diferente la tabla de IMC para hombres de la tabla de IMC para mujeres?",
          "answer": "La tabla de IMC para adultos de la OMS utiliza los mismos puntos de corte (18.5 a 24.9 para peso normal) tanto para hombres como para mujeres adultas. No obstante, las medidas de cintura aportan contexto complementario."
        },
        {
          "question": "\xBFC\xF3mo funciona la tabla de IMC seg\xFAn la edad en adultos y adultos mayores?",
          "answer": "Las categor\xEDas est\xE1ndar de la OMS se aplican a todos los adultos a partir de los 20 a\xF1os. En mayores de 65 a\xF1os, un IMC ligeramente superior (23.0 a 27.0 kg/m\xB2) puede ser protector frente a la fragilidad."
        },
        {
          "question": "\xBFQu\xE9 es el BMI chart in kg and cm?",
          "answer": "Una tabla m\xE9trica de IMC relaciona la estatura en cent\xEDmetros con el peso en kilogramos. Por ejemplo: una altura de 170 cm con un peso de 65 kg da un IMC de 22.5 kg/m\xB2 (rango de peso saludable)."
        },
        {
          "question": "\xBFCu\xE1les son las categor\xEDas principales de la tabla oficial de IMC?",
          "answer": "Las categor\xEDas oficiales de la OMS son: Bajo peso (< 18.5), Peso normal (18.5 \u2013 24.9), Sobrepeso (25.0 \u2013 29.9), Obesidad Clase I (30.0 \u2013 34.9), Obesidad Clase II (35.0 \u2013 39.9) y Obesidad Clase III (\u2265 40.0)."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de R\xE9f\xE9rence de Sant\xE9",
      "title": "BMI Chart for Adults \u2013 Height & Weight Lookup Table (kg & cm) \u2013 Outil de R\xE9f\xE9rence",
      "intro": "Outil de calcul et de r\xE9f\xE9rence \xE9ducatif con\xE7u selon les normes de sant\xE9 publi\xE9es de l'OMS et du CDC. Calculez vos m\xE9triques et consultez les plages de r\xE9f\xE9rence.",
      "formulaTitle": "Formule de R\xE9f\xE9rence Standard",
      "formulaDesc": "Calcul\xE9 \xE0 l'aide d'\xE9quations standards valid\xE9es.",
      "formulaCode": "BMI = kg / m\xB2",
      "tableTitle": "Tableau de R\xE9f\xE9rence Standard",
      "tableRows": [
        {
          "col1": "Sous-poids S\xE9v\xE8re",
          "col2": "< 16.0 kg/m\xB2",
          "col3": "Seuil de r\xE9f\xE9rence pour insuffisance pond\xE9rale s\xE9v\xE8re"
        },
        {
          "col1": "Sous-poids Mod\xE9r\xE9",
          "col2": "16.0 \u2013 16.9 kg/m\xB2",
          "col3": "Seuil de r\xE9f\xE9rence pour insuffisance pond\xE9rale mod\xE9r\xE9e"
        },
        {
          "col1": "Sous-poids L\xE9ger",
          "col2": "17.0 \u2013 18.4 kg/m\xB2",
          "col3": "Seuil de r\xE9f\xE9rence pour insuffisance pond\xE9rale l\xE9g\xE8re"
        },
        {
          "col1": "Poids Normal",
          "col2": "18.5 \u2013 24.9 kg/m\xB2",
          "col3": "Plage de r\xE9f\xE9rence saine optimale pour les adultes"
        },
        {
          "col1": "Surpoids",
          "col2": "25.0 \u2013 29.9 kg/m\xB2",
          "col3": "Plage de surpoids (Seuil asiatique : 23.0 kg/m\xB2)"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 6",
          "col2": "30.0 \u2013 34.9 kg/m\xB2",
          "col3": "R\xE9f\xE9rence de d\xE9pistage pour l'ob\xE9sit\xE9 de classe I"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 7",
          "col2": "35.0 \u2013 39.9 kg/m\xB2",
          "col3": "R\xE9f\xE9rence de d\xE9pistage pour l'ob\xE9sit\xE9 de classe II"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 8",
          "col2": "\u2265 40.0 kg/m\xB2",
          "col3": "Seuil d'\xE9valuation de l'ob\xE9sit\xE9 s\xE9v\xE8re de classe III"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de bmi chart et que mesure-t-il ?",
          "answer": "Ce calculateur \xE9value vos donn\xE9es personnelles \xE0 l'aide d'\xE9quations valid\xE9es. Il fournit une estimation \xE9ducative pour vous aider \xE0 comprendre vos m\xE9triques et r\xE9f\xE9rences standards."
        },
        {
          "question": "\xBFEs diferente la tabla de IMC para hombres de la tabla de IMC para mujeres?",
          "answer": "Le tableau officiel de l'OMS utilise les m\xEAmes seuils (18,5 \xE0 24,9 pour le poids normal) pour les hommes et les femmes adultes. La mesure du tour de taille apporte un contexte d'\xE9valuation suppl\xE9mentaire."
        },
        {
          "question": "\xBFC\xF3mo funciona la tabla de IMC seg\xFAn la edad en adultos y adultos mayores?",
          "answer": "Les cat\xE9gories standards de l'OMS s'appliquent d\xE8s 20 ans. Chez les seniors de plus de 65 ans, un IMC l\xE9g\xE8rement plus \xE9lev\xE9 (23,0 \xE0 27,0 kg/m\xB2) peut prot\xE9ger contre la fragilit\xE9."
        },
        {
          "question": "Qu'est-ce que le BMI chart in kg and cm?",
          "answer": "Un tableau m\xE9trique associe la taille en centim\xE8tres et le poids en kilogrammes. Par exemple : une taille de 170 cm pour 65 kg donne un IMC de 22,5 kg/m\xB2 (cat\xE9gorie poids sant\xE9)."
        },
        {
          "question": "\xBFCu\xE1les son las categor\xEDas principales de la tabla oficial de IMC?",
          "answer": "Les cat\xE9gories officielles de l'OMS sont : Sous-poids (< 18,5), Poids normal (18,5 \u2013 24,9), Surpoids (25,0 \u2013 29,9), Ob\xE9sit\xE9 classe I (30,0 \u2013 34,9), Ob\xE9sit\xE9 classe II (35,0 \u2013 39,9) et Ob\xE9sit\xE9 classe III (\u2265 40,0)."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "BMI Chart for Adults \u2013 Height & Weight Lookup Table (kg & cm) \u2013 Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den ver\xF6ffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und pr\xFCfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardm\xE4\xDFig validierten Gleichungen.",
      "formulaCode": "BMI = kg / m\xB2",
      "tableTitle": "Standard-Referenztabelle",
      "tableRows": [
        {
          "col1": "Kategorie / Stufe 1",
          "col2": "< 16.0 kg/m\xB2",
          "col3": "Referenzwert f\xFCr starkes Untergewicht"
        },
        {
          "col1": "Kategorie / Stufe 2",
          "col2": "16.0 \u2013 16.9 kg/m\xB2",
          "col3": "Referenzwert f\xFCr m\xE4\xDFiges Untergewicht"
        },
        {
          "col1": "Kategorie / Stufe 3",
          "col2": "17.0 \u2013 18.4 kg/m\xB2",
          "col3": "Referenzwert f\xFCr leichtes Untergewicht"
        },
        {
          "col1": "Kategorie / Stufe 4",
          "col2": "18.5 \u2013 24.9 kg/m\xB2",
          "col3": "Optimaler gesunder Referenzbereich f\xFCr Erwachsene"
        },
        {
          "col1": "Kategorie / Stufe 5",
          "col2": "25.0 \u2013 29.9 kg/m\xB2",
          "col3": "Referenzbereich \xDCbergewicht (Asiatischer Schwellenwert: 23.0 kg/m\xB2)"
        },
        {
          "col1": "Kategorie / Stufe 6",
          "col2": "30.0 \u2013 34.9 kg/m\xB2",
          "col3": "Screening-Referenz f\xFCr Adipositas Klasse I"
        },
        {
          "col1": "Kategorie / Stufe 7",
          "col2": "35.0 \u2013 39.9 kg/m\xB2",
          "col3": "Screening-Referenz f\xFCr Adipositas Klasse II"
        },
        {
          "col1": "Kategorie / Stufe 8",
          "col2": "\u2265 40.0 kg/m\xB2",
          "col3": "Schwellenwert f\xFCr schwere Adipositas Klasse III"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der bmi chart-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre pers\xF6nlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        },
        {
          "question": "\xBFEs diferente la tabla de IMC para hombres de la tabla de IMC para mujeres?",
          "answer": "Die WHO-BMI-Tabelle f\xFCr Erwachsene verwendet dieselben Grenzwerte (18,5 bis 24,9 f\xFCr Normalgewicht) f\xFCr M\xE4nner und Frauen. Taillenumfang und K\xF6rperzusammensetzung bieten zus\xE4tzlichen Kontext."
        },
        {
          "question": "\xBFC\xF3mo funciona la tabla de IMC seg\xFAn la edad en adultos y adultos mayores?",
          "answer": "Die Standardkategorien der WHO gelten f\xFCr alle Erwachsenen ab 20 Jahren. Bei Senioren \xFCber 65 Jahren kann ein leicht h\xF6herer BMI (23,0 bis 27,0 kg/m\xB2) Schutz vor Knochendichteverlust bieten."
        },
        {
          "question": "Was ist der BMI chart in kg and cm?",
          "answer": "Eine metrische BMI-Tabelle ordnet K\xF6rpergr\xF6\xDFe in Zentimetern und Gewicht in Kilogramm zu. Beispiel: 170 cm Gr\xF6\xDFe und 65 kg Gewicht ergeben einen BMI von 22,5 kg/m\xB2 (Normalgewicht)."
        },
        {
          "question": "\xBFCu\xE1les son las categor\xEDas principales de la tabla oficial de IMC?",
          "answer": "Die offiziellen WHO-Kategorien lauten: Untergewicht (< 18,5), Normalgewicht (18,5 \u2013 24,9), \xDCbergewicht (25,0 \u2013 29,9), Adipositas Grad I (30,0 \u2013 34,9), Adipositas Grad II (35,0 \u2013 39,9) und Adipositas Grad III (\u2265 40,0)."
        }
      ]
    },
    "ko": {
      "eyebrow": "\uAC74\uAC15 \uCC38\uC870 \uD45C\uC900 \uC9C0\uCE68",
      "title": "BMI Chart for Adults \u2013 Height & Weight Lookup Table (kg & cm) \u2013 \uCC38\uC870 \uACC4\uC0B0\uAE30",
      "intro": "WHO \uBC0F CDC \uC9C0\uCE68\uC5D0 \uAE30\uBC18\uD55C \uC2E4\uC2DC\uAC04 \uCC38\uACE0 \uACC4\uC0B0\uAE30\uC785\uB2C8\uB2E4. \uAC1C\uC778\uBCC4 \uC218\uCE58\uB97C \uCE21\uC815\uD558\uACE0 \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uD655\uC778\uD558\uC138\uC694.",
      "formulaTitle": "\uD45C\uC900 \uACC4\uC0B0 \uACF5\uC2DD",
      "formulaDesc": "\uAC80\uC99D\uB41C \uD45C\uC900 \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uACC4\uC0B0\uB429\uB2C8\uB2E4.",
      "formulaCode": "BMI = kg / m\xB2",
      "tableTitle": "\uD45C\uC900 \uCC38\uC870 \uC9C4\uB2E8\uD45C",
      "tableRows": [
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 1",
          "col2": "< 16.0 kg/m\xB2",
          "col3": "\uC2EC\uAC01\uD55C \uC800\uCCB4\uC911 \uC704\uD5D8 \uAE30\uC900"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 2",
          "col2": "16.0 \u2013 16.9 kg/m\xB2",
          "col3": "\uC911\uB4F1\uB3C4 \uC800\uCCB4\uC911 \uCC38\uC870 \uBC94\uC704"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 3",
          "col2": "17.0 \u2013 18.4 kg/m\xB2",
          "col3": "\uACBD\uB3C4 \uC800\uCCB4\uC911 \uCC38\uC870 \uAE30\uC900"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 4",
          "col2": "18.5 \u2013 24.9 kg/m\xB2",
          "col3": "\uC131\uC778\uC744 \uC704\uD55C \uCD5C\uC801\uC758 \uAC74\uAC15 \uAE30\uC900 \uBC94\uC704"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 5",
          "col2": "25.0 \u2013 29.9 kg/m\xB2",
          "col3": "\uCC38\uC870 \uBC94\uC704 \uACFC\uCCB4\uC911 \uCC38\uACE0 \uBC94\uC704 (\uC544\uC2DC\uC544 \uAE30\uC900: 23.0 kg/m\xB2)"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 6",
          "col2": "30.0 \u2013 34.9 kg/m\xB2",
          "col3": "1\uB2E8\uACC4 \uBE44\uB9CC \uC120\uBCC4 \uCC38\uACE0 \uAE30\uC900"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 7",
          "col2": "35.0 \u2013 39.9 kg/m\xB2",
          "col3": "2\uB2E8\uACC4 \uBE44\uB9CC \uC120\uBCC4 \uCC38\uACE0 \uAE30\uC900"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 8",
          "col2": "\u2265 40.0 kg/m\xB2",
          "col3": "3\uB2E8\uACC4 \uACE0\uB3C4 \uBE44\uB9CC \uC2A4\uD06C\uB9AC\uB2DD \uC784\uACC4\uAC12"
        }
      ],
      "faqs": [
        {
          "question": "bmi chart \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uBCF8 \uACC4\uC0B0\uAE30\uB294 \uAC80\uC99D\uB41C \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uAC1C\uC778\uBCC4 \uC2E0\uCCB4 \uC9C0\uC218\uB97C \uC0B0\uCD9C\uD569\uB2C8\uB2E4. \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uBC14\uD0D5\uC73C\uB85C \uAD50\uC721\uC801 \uBD84\uC11D \uACB0\uACFC\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."
        },
        {
          "question": "\xBFEs diferente la tabla de IMC para hombres de la tabla de IMC para mujeres? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "WHO \uC131\uC778 BMI \uBD84\uB958\uD45C\uB294 \uC131\uC778 \uB0A8\uC131\uACFC \uC5EC\uC131 \uBAA8\uB450\uC5D0\uAC8C \uB3D9\uC77C\uD55C \uC815\uC0C1 \uCCB4\uC911 \uAE30\uC900(18.5~24.9)\uC744 \uC801\uC6A9\uD569\uB2C8\uB2E4. \uCCB4\uC9C0\uBC29 \uBD84\uD3EC\uB97C \uD655\uC778\uD558\uAE30 \uC704\uD574 \uD5C8\uB9AC\uB458\uB808 \uCE21\uC815\uC744 \uD568\uAED8 \uACE0\uB824\uD558\uB294 \uAC83\uC774 \uAD8C\uC7A5\uB429\uB2C8\uB2E4."
        },
        {
          "question": "\xBFC\xF3mo funciona la tabla de IMC seg\xFAn la edad en adultos y adultos mayores? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "WHO \uD45C\uC900 \uBD84\uB958 \uAE30\uC900\uC740 20\uC138 \uC774\uC0C1 \uC131\uC778 \uC804 \uC5F0\uB839\uC5D0 \uC801\uC6A9\uB429\uB2C8\uB2E4. 65\uC138 \uC774\uC0C1 \uACE0\uB839\uCE35\uC758 \uACBD\uC6B0 \uC57D\uAC04 \uB192\uC740 BMI(23.0~27.0 kg/m\xB2)\uAC00 \uACE8\uBC00\uB3C4 \uC720\uC9C0 \uBC0F \uB178\uC1E0 \uC608\uBC29\uC5D0 \uC720\uB9AC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
        },
        {
          "question": " BMI chart in kg and cm? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "\uBBF8\uD130\uBC95 \uCC28\uD2B8\uB294 \uC2E0\uC7A5(cm)\uACFC \uCCB4\uC911(kg)\uC744 \uB300\uC870\uD558\uC5EC \uD45C\uC2DC\uD569\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 \uC2E0\uC7A5 170cm\uC5D0 \uCCB4\uC911 65kg\uC778 \uACBD\uC6B0 BMI\uB294 22.5 kg/m\xB2(\uC815\uC0C1 \uCCB4\uC911)\uB85C \uACC4\uC0B0\uB429\uB2C8\uB2E4."
        },
        {
          "question": "\xBFCu\xE1les son las categor\xEDas principales de la tabla oficial de IMC? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "\uACF5\uC2DD WHO \uAE30\uC900 \uBC94\uC8FC\uB294 \uC800\uCCB4\uC911(< 18.5), \uC815\uC0C1 \uCCB4\uC911(18.5~24.9), \uACFC\uCCB4\uC911(25.0~29.9), 1\uB2E8\uACC4 \uBE44\uB9CC(30.0~34.9), 2\uB2E8\uACC4 \uBE44\uB9CC(35.0~39.9), 3\uB2E8\uACC4 \uACE0\uB3C4 \uBE44\uB9CC(\u2265 40.0)\uC73C\uB85C \uAD6C\uBD84\uB429\uB2C8\uB2E4."
        }
      ]
    },
    "hi": {
      "eyebrow": "\u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u0906\u0927\u093F\u0915\u093E\u0930\u093F\u0915 \u0935\u092F\u0938\u094D\u0915 \u092C\u0940\u090F\u092E\u0906\u0908 \u0938\u094D\u0915\u0947\u0932",
      "title": "\u0935\u092F\u0938\u094D\u0915\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u092C\u0940\u090F\u092E\u0906\u0908 \u091A\u093E\u0930\u094D\u091F - \u090A\u0902\u091A\u093E\u0908 \u090F\u0935\u0902 \u0935\u091C\u0928 \u0924\u093E\u0932\u093F\u0915\u093E (BMI Chart kg cm)",
      "intro": "\u0939\u092E\u093E\u0930\u093E \u0935\u093F\u0938\u094D\u0924\u0943\u0924 \u092C\u0940\u090F\u092E\u0906\u0908 \u091A\u093E\u0930\u094D\u091F (BMI Chart) \u0914\u0930 \u0924\u093E\u0932\u093F\u0915\u093E \u0935\u092F\u0938\u094D\u0915 \u092A\u0941\u0930\u0941\u0937\u094B\u0902 \u0914\u0930 \u092E\u0939\u093F\u0932\u093E\u0913\u0902 \u0915\u0947 \u0932\u093F\u090F \u0924\u0941\u0930\u0902\u0924 \u0926\u0943\u0936\u094D\u092F \u0938\u0902\u0926\u0930\u094D\u092D \u092A\u094D\u0930\u0926\u093E\u0928 \u0915\u0930\u0924\u0940 \u0939\u0948\u0964 \u0935\u093F\u0936\u094D\u0935 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0938\u0902\u0917\u0920\u0928 (WHO) \u0914\u0930 CDC \u092E\u093E\u0928\u0915\u094B\u0902 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u092E\u0940\u091F\u094D\u0930\u093F\u0915 (\u0915\u093F\u0917\u094D\u0930\u093E \u0914\u0930 \u0938\u0947\u092E\u0940) \u0914\u0930 \u0907\u0902\u092A\u0940\u0930\u093F\u092F\u0932 (\u092A\u093E\u0909\u0902\u0921 \u0914\u0930 \u0907\u0902\u091A) \u0936\u094D\u0930\u0947\u0923\u093F\u092F\u094B\u0902 \u092E\u0947\u0902 \u0905\u092A\u0928\u093E \u092C\u0940\u090F\u092E\u0906\u0908 \u0926\u0947\u0916\u0947\u0902\u0964",
      "formulaTitle": "\u092E\u093E\u0928\u0915 \u092C\u0940\u090F\u092E\u0906\u0908 \u091A\u093E\u0930\u094D\u091F \u092B\u0949\u0930\u094D\u092E\u0942\u0932\u093E",
      "formulaDesc": "\u092E\u0940\u091F\u094D\u0930\u093F\u0915: \u092C\u0940\u090F\u092E\u0906\u0908 = \u0935\u091C\u0928 (\u0915\u093F\u0917\u094D\u0930\u093E) / [\u090A\u0902\u091A\u093E\u0908 (\u092E\u0940\u091F\u0930)]\xB2",
      "formulaCode": "BMI = kg / m\xB2",
      "tableTitle": "\u0935\u092F\u0938\u094D\u0915\u094B\u0902 (\u092A\u0941\u0930\u0941\u0937\u094B\u0902 \u090F\u0935\u0902 \u092E\u0939\u093F\u0932\u093E\u0913\u0902) \u0915\u0947 \u0932\u093F\u090F \u0906\u0927\u093F\u0915\u093E\u0930\u093F\u0915 \u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u092C\u0940\u090F\u092E\u0906\u0908 \u0936\u094D\u0930\u0947\u0923\u093F\u092F\u093E\u0902 \u091A\u093E\u0930\u094D\u091F",
      "tableRows": [
        {
          "col1": "\u0915\u092E \u0935\u091C\u0928",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "\u0915\u092E \u0935\u091C\u0928 \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E"
        },
        {
          "col1": "\u0938\u093E\u092E\u093E\u0928\u094D\u092F / \u0938\u094D\u0935\u0938\u094D\u0925 \u0935\u091C\u0928 (Normal Weight)",
          "col2": "18.5 \u2013 24.9 kg/m\xB2",
          "col3": "\u0935\u092F\u0938\u094D\u0915\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u0906\u0926\u0930\u094D\u0936 \u0938\u094D\u0935\u0938\u094D\u0925 \u092C\u0940\u090F\u092E\u0906\u0908 \u0938\u0940\u092E\u093E"
        },
        {
          "col1": "\u0905\u0927\u093F\u0915 \u0935\u091C\u0928",
          "col2": "25.0 \u2013 29.9 kg/m\xB2",
          "col3": "\u0905\u0927\u093F\u0915 \u0935\u091C\u0928 \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E (\u090F\u0936\u093F\u092F\u093E\u0908 \u0915\u091F\u0911\u092B: 23.0 kg/m\xB2)"
        },
        {
          "col1": "\u092E\u094B\u091F\u093E\u092A\u093E \u0936\u094D\u0930\u0947\u0923\u0940 I (\u0913\u092C\u0947\u0938\u093F\u091F\u0940 \u0915\u094D\u0932\u093E\u0938 I)",
          "col2": "30.0 \u2013 34.9 kg/m\xB2",
          "col3": "\u092E\u094B\u091F\u093E\u092A\u093E \u0936\u094D\u0930\u0947\u0923\u0940 I \u0938\u0902\u0926\u0930\u094D\u092D"
        },
        {
          "col1": "\u092E\u094B\u091F\u093E\u092A\u093E \u0936\u094D\u0930\u0947\u0923\u0940 II (\u0913\u092C\u0947\u0938\u093F\u091F\u0940 \u0915\u094D\u0932\u093E\u0938 II)",
          "col2": "35.0 \u2013 39.9 kg/m\xB2",
          "col3": "\u092E\u094B\u091F\u093E\u092A\u093E \u0936\u094D\u0930\u0947\u0923\u0940 II \u0938\u0902\u0926\u0930\u094D\u092D"
        },
        {
          "col1": "\u092E\u094B\u091F\u093E\u092A\u093E \u0936\u094D\u0930\u0947\u0923\u0940 III (\u0913\u092C\u0947\u0938\u093F\u091F\u0940 \u0915\u094D\u0932\u093E\u0938 III)",
          "col2": "\u2265 40.0 kg/m\xB2",
          "col3": "\u0917\u0902\u092D\u0940\u0930 \u092E\u094B\u091F\u093E\u092A\u093E \u0938\u0902\u0926\u0930\u094D\u092D \u0936\u094D\u0930\u0947\u0923\u0940"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 7",
          "col2": "35.0 \u2013 39.9 kg/m\xB2",
          "col3": "\u092E\u094B\u091F\u093E\u092A\u093E \u0936\u094D\u0930\u0947\u0923\u0940 II \u0938\u094D\u0915\u094D\u0930\u0940\u0928\u093F\u0902\u0917 \u0938\u0902\u0926\u0930\u094D\u092D"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 8",
          "col2": "\u2265 40.0 kg/m\xB2",
          "col3": "\u0917\u0902\u092D\u0940\u0930 \u092E\u094B\u091F\u093E\u092A\u093E \u0936\u094D\u0930\u0947\u0923\u0940 III \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E"
        }
      ],
      "faqs": [
        {
          "question": "\u092C\u0940\u090F\u092E\u0906\u0908 \u091A\u093E\u0930\u094D\u091F (BMI Chart) \u0915\u094D\u092F\u093E \u0939\u0948 \u0914\u0930 \u0907\u0938\u0947 \u0915\u0948\u0938\u0947 \u092A\u0922\u093C\u0947\u0902?",
          "answer": "\u092C\u0940\u090F\u092E\u0906\u0908 \u091A\u093E\u0930\u094D\u091F \u090A\u0902\u091A\u093E\u0908 \u0914\u0930 \u0935\u091C\u0928 \u0915\u0947 \u0938\u0902\u092F\u094B\u091C\u0928\u094B\u0902 \u0915\u094B \u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 (WHO) \u0915\u0940 \u092E\u093E\u0928\u0915 \u0936\u094D\u0930\u0947\u0923\u093F\u092F\u094B\u0902 \u092E\u0947\u0902 \u0935\u0930\u094D\u0917\u0940\u0915\u0943\u0924 \u0915\u0930\u0915\u0947 \u092A\u094D\u0930\u0938\u094D\u0924\u0941\u0924 \u0915\u0930\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u092C\u0940\u090F\u092E\u0906\u0908 \u091A\u093E\u0930\u094D\u091F \u092E\u0947\u0902 \u0938\u093E\u092E\u093E\u0928\u094D\u092F \u0935\u091C\u0928 \u0938\u0940\u092E\u093E \u0915\u094D\u092F\u093E \u0939\u0948?",
          "answer": "\u092C\u0940\u090F\u092E\u0906\u0908 \u091A\u093E\u0930\u094D\u091F \u092A\u0930 18.5 \u0938\u0947 24.9 \u0915\u093E \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u094D\u0937\u0947\u0924\u094D\u0930 \u0939\u0930\u0947 \u0930\u0902\u0917 \u0938\u0947 \u0938\u093E\u092E\u093E\u0928\u094D\u092F \u0938\u094D\u0935\u0938\u094D\u0925 \u0935\u091C\u0928 \u0938\u0940\u092E\u093E \u0915\u094B \u0926\u0930\u094D\u0936\u093E\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u0915\u094D\u092F\u093E \u0935\u092F\u0938\u094D\u0915\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u0909\u092E\u094D\u0930 \u0915\u0947 \u0938\u093E\u0925 \u092C\u0940\u090F\u092E\u0906\u0908 \u091A\u093E\u0930\u094D\u091F \u092C\u0926\u0932\u0924\u093E \u0939\u0948?",
          "answer": "\u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u0915\u093E \u0935\u092F\u0938\u094D\u0915 \u092C\u0940\u090F\u092E\u0906\u0908 \u091A\u093E\u0930\u094D\u091F 20 \u0938\u0947 65 \u0935\u0930\u094D\u0937 \u0915\u0947 \u0938\u092D\u0940 \u092A\u0941\u0930\u0941\u0937\u094B\u0902 \u0914\u0930 \u092E\u0939\u093F\u0932\u093E\u0913\u0902 \u0915\u0947 \u0932\u093F\u090F \u0938\u092E\u093E\u0928 \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E\u0913\u0902 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u0907\u0902\u092A\u0940\u0930\u093F\u092F\u0932 \u0914\u0930 \u092E\u0940\u091F\u094D\u0930\u093F\u0915 \u092C\u0940\u090F\u092E\u0906\u0908 \u091A\u093E\u0930\u094D\u091F \u092E\u0947\u0902 \u0915\u094D\u092F\u093E \u0905\u0902\u0924\u0930 \u0939\u0948?",
          "answer": "\u092E\u0940\u091F\u094D\u0930\u093F\u0915 \u091A\u093E\u0930\u094D\u091F \u0938\u0947\u092E\u0940 \u0914\u0930 \u0915\u093F\u0917\u094D\u0930\u093E \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0924\u093E \u0939\u0948, \u091C\u092C\u0915\u093F \u0907\u0902\u092A\u0940\u0930\u093F\u092F\u0932 \u091A\u093E\u0930\u094D\u091F \u092B\u0940\u091F/\u0907\u0902\u091A \u0914\u0930 \u092A\u093E\u0909\u0902\u0921 (lbs) \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u092C\u0940\u090F\u092E\u0906\u0908 \u091A\u093E\u0930\u094D\u091F \u092E\u0947\u0902 \u0913\u0935\u0930\u0935\u0947\u091F cutoff \u0915\u094D\u092F\u093E \u0939\u0948?",
          "answer": "\u092E\u093E\u0928\u0915 \u091A\u093E\u0930\u094D\u091F \u092E\u0947\u0902 25.0 kg/m\xB2 \u0938\u0947 \u0913\u0935\u0930\u0935\u0947\u091F \u0938\u0940\u092E\u093E \u0936\u0941\u0930\u0942 \u0939\u094B\u0924\u0940 \u0939\u0948, \u091C\u092C\u0915\u093F \u090F\u0936\u093F\u092F\u093E\u0908 \u0906\u092C\u093E\u0926\u0940 \u0915\u0947 \u0932\u093F\u090F \u092F\u0939 23.0 kg/m\xB2 \u092A\u0930 \u0936\u0941\u0930\u0942 \u0939\u094B\u0924\u0940 \u0939\u0948\u0964"
        }
      ]
    }
  },
  "3d-body-visualizer": {
    "en": {
      "eyebrow": "Oxford 2.5-Power BMI Model & 3D Body Visualization",
      "title": "3D BMI Calculator & Interactive 3D Body Visualizer",
      "intro": "Our free 3D BMI Calculator uses the Oxford 2.5-power height-adjusted formula (1.3 \xD7 weight / height\xB2\xB7\u2075) to render interactive 3D body shape models and height-proportional volume geometry.",
      "formulaTitle": "Oxford 2.5-Power Height-Adjusted 3D BMI Formula",
      "formulaDesc": "3D BMI = 1.3 \xD7 Weight (kg) / [Height (m)]\xB2\xB7\u2075 | Developed by University of Oxford mathematicians to correct height scaling distortions in traditional 2D BMI.",
      "formulaCode": "3D BMI = 1.3 \xD7 kg / m\xB2\xB7\u2075",
      "tableTitle": "Standard 2D BMI vs. Oxford 3D Height-Adjusted BMI Comparison",
      "tableRows": [
        {
          "col1": `Shorter Adults (< 160 cm / 5'3")`,
          "col2": "Standard 2D BMI underestimates height scaling",
          "col3": "3D BMI adjusts score proportionally for shorter statures"
        },
        {
          "col1": `Average Height Adults (170 cm / 5'7")`,
          "col2": "Standard 2D & 3D BMI produce identical results",
          "col3": "No difference between 2D and 3D formula categories"
        },
        {
          "col1": `Taller Adults (> 185 cm / 6'1")`,
          "col2": "Standard 2D BMI overestimates height scaling",
          "col3": "3D BMI corrects volumetric distortion for taller statures"
        }
      ],
      "faqs": [
        {
          "question": "How does 3D BMI differ from standard 2D BMI?",
          "answer": "Standard 2D BMI divides weight by height squared (m\xB2), whereas 3D BMI uses height raised to the 2.5 power (m\xB2\xB7\u2075) to account for 3D body volume scaling."
        },
        {
          "question": "How does the interactive 3D body visualizer work?",
          "answer": "It renders an interactive 3D avatar in your browser using height-to-weight proportions derived from your inputs. You can rotate the avatar 360\xB0 and toggle mesh, wireframe, and heatmap modes."
        },
        {
          "question": "What do solid mesh, wireframe, and heatmap modes represent?",
          "answer": "Solid mesh shows body shape volume, wireframe shows 3D geometric structure, and heatmap highlights weight category distribution."
        },
        {
          "question": "Why is the Oxford 2.5-power formula better for tall or short individuals?",
          "answer": "As demonstrated by Prof. Nick Trefethen at Oxford University, traditional BMI (m\xB2) overestimates fatness in tall people and underestimates it in short people. The 2.5 exponent corrects this mathematical bias."
        },
        {
          "question": "Does the 3D visualizer store photos or personal data?",
          "answer": "No. The 3D model is generated mathematically in real time inside your browser. No photos are required, and no data is uploaded or stored."
        },
        {
          "question": "Can I use the 3D Body Visualizer on mobile devices?",
          "answer": "Yes, the 3D visualizer is fully responsive and optimized for mobile touch controls, allowing 360\xB0 rotation and pinch-to-zoom on smartphones and tablets."
        },
        {
          "question": "How does body mass index relate to 3D avatar proportion scaling?",
          "answer": "The 3D avatar dynamically adjusts mesh thickness, waist curvature, and volumetric proportions based on your height-to-weight ratio and calculated BMI score."
        }
      ]
    },
    "es": {
      "eyebrow": "Modelo IMC Exponencial de Oxford 2.5 y Visualizaci\xF3n Corporal 3D",
      "title": "Calculadora de IMC 3D y Visualizador Corporal Interactivo",
      "intro": "Nuestra calculadora de IMC 3D y visualizador corporal interactivo calcula el \xEDndice de masa corporal mediante la f\xF3rmula exponencial de Oxford 2.5 (1.3 \xD7 peso / altura\xB2\xB7\u2075) y principios de geometr\xEDa corporal tridimensional. Gira 360\xB0 para ver la malla s\xF3lida, estructura de alambre y mapa de calor de IMC.",
      "formulaTitle": "F\xF3rmula Exponencial 3D de Oxford Ajustada a la Altura",
      "formulaDesc": "IMC 3D Ajustado = 1.3 \xD7 Peso (kg) / [Altura (m)]\xB2\xB7\u2075 | Dise\xF1ada por matem\xE1ticos de la Universidad de Oxford para eliminar la distorsi\xF3n de altura que afecta a personas altas o bajas en la f\xF3rmula cl\xE1sica de Quetelet.",
      "formulaCode": "IMC 3D = 1.3 \xD7 kg / m\xB2\xB7\u2075",
      "tableTitle": "Comparaci\xF3n de IMC 2D Est\xE1ndar vs IMC 3D Ajustado por Altura",
      "tableRows": [
        {
          "col1": "Personas Bajas (< 160 cm)",
          "col2": "El IMC 2D est\xE1ndar suele subestimar el resultado",
          "col3": "El IMC 3D compensa la estatura menor adecuadamente"
        },
        {
          "col1": "Estatura Promedio (170 cm)",
          "col2": "Alineaci\xF3n de clasificaci\xF3n id\xE9ntica",
          "col3": "Sin diferencia entre la f\xF3rmula 2D y 3D"
        },
        {
          "col1": "Personas Altas (> 185 cm)",
          "col2": "El IMC 2D est\xE1ndar suele sobreestimar el exceso de peso",
          "col3": "El IMC 3D ajusta el volumen tridimensional real"
        }
      ],
      "faqs": [
        {
          "question": "\xBFEn qu\xE9 se diferencia el IMC 3D del IMC tradicional?",
          "answer": "El IMC tradicional usa la altura al cuadrado (m\xB2), mientras que el IMC 3D usa la masa tridimensional dividida entre la altura a la potencia 2.5 (m\xB2\xB7\u2075)."
        },
        {
          "question": "\xBFC\xF3mo funciona la visualizaci\xF3n corporal 3D?",
          "answer": "Genera una silueta anat\xF3mica tridimensional interactiva que se escala seg\xFAn tu altura y peso en tiempo real dentro del navegador."
        },
        {
          "question": "\xBFQu\xE9 representan los modos Malla, Alambre y Mapa de Calor?",
          "answer": "El modo s\xF3lido muestra la masa corporal, la malla de alambre muestra los contornos estructurales, y el mapa de calor resalta las zonas seg\xFAn el nivel de IMC."
        },
        {
          "question": "\xBFEs precisa la f\xF3rmula de Oxford 2.5 para personas muy altas?",
          "answer": "S\xED, el profesor Nick Trefethen de la Universidad de Oxford dise\xF1\xF3 esta f\xF3rmula para eliminar la distorsi\xF3n matem\xE1tica en personas muy altas o bajas."
        },
        {
          "question": "\xBFEl modelo 3D almacena datos o fotograf\xEDas personales?",
          "answer": "No, el modelo 3D es una simulaci\xF3n matem\xE1tica generada en tiempo real en tu navegador sin guardar datos ni requerir c\xE1mara."
        },
        {
          "question": "\xBFPuedo usar el Visualizador Corporal 3D en dispositivos m\xF3viles?",
          "answer": "S\xED, el visualizador 3D es totalmente adaptable a m\xF3viles y controles t\xE1ctiles, lo que permite rotaci\xF3n de 360\xB0 en tel\xE9fonos inteligentes y tabletas."
        },
        {
          "question": "\xBFC\xF3mo se relaciona el \xEDndice de masa corporal con el escalado del avatar 3D?",
          "answer": "El avatar 3D ajusta din\xE1micamente el grosor de la malla, la curvatura de la cintura y las proporciones volum\xE9tricas seg\xFAn tu IMC."
        }
      ]
    },
    "fr": {
      "eyebrow": "Mod\xE8le IMC d'Oxford 2.5 et Visualisation Corporelle 3D",
      "title": "Calculateur d'IMC 3D et Visualiseur Corporel Interactif",
      "intro": "Notre calculateur d'IMC 3D calcule votre indice de masse corporelle selon la formule d'Oxford 2.5 (1.3 \xD7 poids / taille\xB2\xB7\u2075) et mod\xE9lise votre silhouette en 3D sous tous los angles \xE0 360\xB0.",
      "formulaTitle": "Formule Exponentielle 3D d'Oxford Ajust\xE9e \xE0 la Taille",
      "formulaDesc": "IMC 3D Ajust\xE9 = 1.3 \xD7 Poids (kg) / [Taille (m)]\xB2\xB7\u2075 | \xC9labor\xE9e par des math\xE9maticiens de l'Universit\xE9 d'Oxford pour corriger les biais li\xE9s \xE0 la taille.",
      "formulaCode": "IMC 3D = 1.3 \xD7 kg / m\xB2\xB7\u2075",
      "tableTitle": "Comparaison IMC 2D Standard vs IMC 3D Ajust\xE9 d'Oxford",
      "tableRows": [
        {
          "col1": "Personnes de Petite Taille (< 160 cm)",
          "col2": "L'IMC 2D sous-estime souvent la cat\xE9gorie",
          "col3": "L'IMC 3D r\xE9ajuste le score proportionnellement"
        },
        {
          "col1": "Taille Moyenne (170 cm)",
          "col2": "R\xE9sultats identiques sur les deux formules",
          "col3": "Aucune diff\xE9rence de cat\xE9gorie"
        },
        {
          "col1": "Personnes de Grande Taille (> 185 cm)",
          "col2": "L'IMC 2D surestime le niveau de surpoids",
          "col3": "L'IMC 3D corrige la distorsion volum\xE9trique"
        }
      ],
      "faqs": [
        {
          "question": "En quoi l'IMC 3D diff\xE8re-t-il de l'IMC classique ?",
          "answer": "L'IMC classique divise le poids par la taille au carr\xE9 (m\xB2), tandis que l'IMC 3D utilise la puissance 2,5 (m\xB2\xB7\u2075) pour refl\xE9ter le volume corporel."
        },
        {
          "question": "Comment fonctionne la visualisation 3D ?",
          "answer": "Elle g\xE9n\xE8re un avatar anatomique 3D interactif mod\xE9lis\xE9 en temps r\xE9el selon vos mensurations dans votre navigateur."
        },
        {
          "question": "Que signifient les modes Maillage, Fil de fer et Carte de chaleur ?",
          "answer": "Le mode solide montre la masse, le fil de fer r\xE9v\xE8le la structure g\xE9om\xE9trique, et la carte de chaleur indique les zones d'IMC."
        },
        {
          "question": "Pourquoi la formule d'Oxford 2.5 est-elle recommand\xE9e pour les grands ?",
          "answer": "Elle \xE9limine la distorsion math\xE9matique de la formule de Quetelet qui d\xE9savantage syst\xE9matiquement les personnes tr\xE8s grandes."
        },
        {
          "question": "L'outil 3D enregistre-t-il des images personnelles ?",
          "answer": "Non, toutes les mod\xE9lisations sont des simulations math\xE9matiques anonymes ex\xE9cut\xE9es localement sur votre navigateur."
        },
        {
          "question": "Puis-je utiliser le Visualiseur Corporel 3D sur des appareils mobiles ?",
          "answer": "Oui, le visualiseur 3D est enti\xE8rement adapt\xE9 aux mobiles et aux commandes tactiles, permettant une rotation \xE0 360\xB0 sur smartphones et tablettes."
        },
        {
          "question": "Comment l'indice de masse corporelle est-il li\xE9 \xE0 la mod\xE9lisation 3D ?",
          "answer": "L'avatar 3D ajuste dynamiquement l'\xE9paisseur du maillage et les proportions volum\xE9triques en fonction de votre rapport taille/poids et de votre score IMC."
        }
      ]
    },
    "de": {
      "eyebrow": "Oxford 2.5 Potenzformel & 3D-K\xF6rper-Visualisierung",
      "title": "Interaktiver 3D BMI-Rechner & 3D-K\xF6rper-Visualisierer",
      "intro": "Berechnen Sie Ihren h\xF6henkorrigierten BMI mit der Oxford 2.5 Formel (1.3 \xD7 Gewicht / Gr\xF6\xDFe\xB2\xB7\u2075) und betrachten Sie ein interaktives 360\xB0-3D-K\xF6rpermodell direkt in Ihrem Browser.",
      "formulaTitle": "Oxford 3D Potenzformel f\xFCr dreidimensionale K\xF6rpergeometrie",
      "formulaDesc": "3D-BMI = 1.3 \xD7 Gewicht (kg) / [Gr\xF6\xDFe (m)]\xB2\xB7\u2075 | Entwickelt von Mathematikern der Universit\xE4t Oxford zur Korrektur von Gr\xF6\xDFenverzerrungen.",
      "formulaCode": "3D-BMI = 1.3 \xD7 kg / m\xB2\xB7\u2075",
      "tableTitle": "Vergleich: Standard 2D-BMI vs. H\xF6henkorrigierter 3D-BMI",
      "tableRows": [
        {
          "col1": "Kleine Personen (< 160 cm)",
          "col2": "Standard 2D-BMI zeigt tendenziell zu niedrige Werte",
          "col3": "3D-Formel gleicht die K\xF6rpergr\xF6\xDFe aus"
        },
        {
          "col1": "Durchschnittliche Gr\xF6\xDFe (170 cm)",
          "col2": "Identische Ergebnisse bei beiden Formeln",
          "col3": "Kein Unterschied in der Kategorie"
        },
        {
          "col1": "Gro\xDFe Personen (> 185 cm)",
          "col2": "Standard 2D-BMI zeigt oft zu hohe Werte",
          "col3": "3D-Formel ber\xFCcksichtigt das dreidimensionale Volumen"
        }
      ],
      "faqs": [
        {
          "question": "Was unterscheidet den 3D-BMI vom klassischen BMI?",
          "answer": "Der klassische BMI nutzt die K\xF6rpergr\xF6\xDFe zum Quadrat (m\xB2), w\xE4hrend der 3D-BMI die Potenz 2.5 nutzt, um das dreidimensionale K\xF6rpervolumen besser abzubilden."
        },
        {
          "question": "Wie funktioniert der 3D-K\xF6rper-Visualisierer?",
          "answer": "Er erzeugt einen interaktiven 3D-Avatar, der sich in Echtzeit an Ihre eingegebenen Daten anpasst und um 360\xB0 gedreht werden kann."
        },
        {
          "question": "Was bedeuten Drahtmodell, Solid-Mesh und Heatmap?",
          "answer": "Solid-Mesh zeigt die K\xF6rperoberfl\xE4che, das Drahtmodell zeigt die Gitterstruktur und die Heatmap hebt BMI-Zonen farblich hervor."
        },
        {
          "question": "Warum ist die Oxford 2.5 Formel f\xFCr gro\xDFe Menschen genauer?",
          "answer": "Prof. Nick Trefethen von der Universit\xE4t Oxford zeigte, dass die alte Quetelet-Formel gro\xDFe Menschen mathematisch benachteiligt."
        },
        {
          "question": "Werden Bilder oder pers\xF6nliche Daten gespeichert?",
          "answer": "Nein, das 3D-Modell ist eine rein mathematische Echtzeit-Simulation in Ihrem Browser ohne Datenspeicherung."
        },
        {
          "question": "Kann ich den 3D-K\xF6rper-Visualisierer auf Mobilger\xE4ten verwenden?",
          "answer": "Ja, der 3D-Visualisierer ist vollst\xE4ndig f\xFCr mobile Touch-Steuerung optimiert und erm\xF6glicht 360\xB0-Drehung auf Smartphones und Tablets."
        },
        {
          "question": "Wie h\xE4ngt der Body-Mass-Index mit der 3D-Proportionenskalierung zusammen?",
          "answer": "Der 3D-Avatar passt die Netzst\xE4rke und die volumetrischen Proportionen dynamisch basierend auf Ihrem BMI-Wert an."
        }
      ]
    },
    "ko": {
      "eyebrow": "\uC625\uC2A4\uD3EC\uB4DC 2.5 \uC2E0\uC7A5 \uBCF4\uC815 \uACF5\uC2DD \uBC0F 3D \uCCB4\uD615 \uC2DC\uAC01\uD654",
      "title": "3D BMI \uACC4\uC0B0\uAE30 \uBC0F \uB300\uD654\uD615 3D \uCCB4\uD615 \uC2DC\uAC01\uD654 \uB3C4\uAD6C",
      "intro": "\uC625\uC2A4\uD3EC\uB4DC 2.5 \uCCB4\uC9C8\uB7C9 \uACF5\uC2DD(1.3 \xD7 \uCCB4\uC911 / \uC2E0\uC7A5\xB2\xB7\u2075)\uC744 \uAE30\uBC18\uC73C\uB85C \uC2E0\uC7A5 \uC65C\uACE1\uC744 \uBCF4\uC815\uD55C BMI\uB97C \uC0B0\uCD9C\uD558\uACE0 360\xB0 \uD68C\uC804 \uAC00\uB2A5\uD55C 3D \uC785\uCCB4 \uC2E4\uB8E8\uC5E3 \uC544\uBC14\uD0C0\uB97C \uC2E4\uC2DC\uAC04\uC73C\uB85C \uD655\uC778\uD558\uC138\uC694.",
      "formulaTitle": "3D \uC625\uC2A4\uD3EC\uB4DC \uC2E0\uC7A5 \uBCF4\uC815 \uCCB4\uC9C8\uB7C9 \uACF5\uC2DD",
      "formulaDesc": "3D \uBCF4\uC815 BMI = 1.3 \xD7 \uCCB4\uC911 (kg) / [\uC2E0\uC7A5 (m)]\xB2\xB7\u2075 | \uC625\uC2A4\uD37C\uB4DC \uB300\uD559\uAD50 \uC218\uD559\uACFC \uC5F0\uAD6C\uC9C4\uC774 \uAC1C\uBC1C\uD55C 3\uCC28\uC6D0 \uC2E0\uCCB4 \uBD80\uD53C \uC2A4\uCF00\uC77C\uB9C1 \uACF5\uC2DD.",
      "formulaCode": "3D BMI = 1.3 \xD7 kg / m\xB2\xB7\u2075",
      "tableTitle": "\uD45C\uC900 2D BMI vs \uC625\uC2A4\uD3EC\uB4DC 3D \uC2E0\uC7A5 \uBCF4\uC815 BMI \uBE44\uAD50",
      "tableRows": [
        {
          "col1": "\uB2E8\uC2E0 \uC131\uC778 (< 160 cm)",
          "col2": "\uD45C\uC900 2D \uACF5\uC2DD\uC740 \uC0C1\uB300\uC801\uC73C\uB85C \uB0AE\uAC8C \uCE21\uC815\uB428",
          "col3": "3D \uBCF4\uC815 \uACF5\uC2DD\uC774 \uC62C\uBC14\uB978 \uC218\uCE58 \uBCF4\uC815"
        },
        {
          "col1": "\uD3C9\uADE0 \uC2E0\uC7A5 (170 cm)",
          "col2": "\uB450 \uACF5\uC2DD \uACB0\uACFC \uB3D9\uC77C",
          "col3": "\uBC94\uC8FC \uCC28\uC774 \uC5C6\uC74C (\uB3D9\uC77C)"
        },
        {
          "col1": "\uC7A5\uC2E0 \uC131\uC778 (> 185 cm)",
          "col2": "\uD45C\uC900 2D \uACF5\uC2DD\uC740 \uACFC\uB3C4\uD558\uAC8C \uB192\uAC8C \uCE21\uC815\uB428",
          "col3": "3D \uBCF4\uC815 \uACF5\uC2DD\uC774 3\uCC28\uC6D0 \uBD80\uD53C \uC65C\uACE1 \uBCF4\uC815"
        }
      ],
      "faqs": [
        {
          "question": "3D BMI\uC640 \uAE30\uC874 \uC77C\uBC18 BMI\uC758 \uCC28\uC774\uC810\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uAE30\uC874 BMI\uB294 \uC2E0\uC7A5\uC758 \uC81C\uACF1(m\xB2)\uC73C\uB85C \uB098\uB204\uC9C0\uB9CC, 3D BMI\uB294 3\uCC28\uC6D0 \uC2E0\uCCB4 \uBD80\uD53C \uBE44\uC728\uC778 \uC2E0\uC7A5\uC758 2.5\uC81C\uACF1(m\xB2\xB7\u2075)\uC744 \uC801\uC6A9\uD569\uB2C8\uB2E4."
        },
        {
          "question": "3D \uCCB4\uD615 \uC2DC\uAC01\uD654 \uAE30\uB2A5\uC740 \uC5B4\uB5BB\uAC8C \uAD6C\uB3D9\uB418\uB098\uC694?",
          "answer": "\uC785\uB825\uD55C \uC2E0\uC7A5\uACFC \uCCB4\uC911 \uBE44\uC728\uC5D0 \uB530\uB77C \uBE0C\uB77C\uC6B0\uC800 \uB0B4\uC5D0\uC11C \uC2E4\uC2DC\uAC04\uC73C\uB85C 3D \uC544\uBC14\uD0C0 \uBAA8\uB378\uC744 \uC0DD\uC131\uD558\uACE0 360\xB0 \uD68C\uC804\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4."
        },
        {
          "question": "\uC194\uB9AC\uB4DC, \uC640\uC774\uC5B4\uD504\uB808\uC784, \uD788\uD2B8\uB9F5 \uBAA8\uB4DC\uC758 \uCC28\uC774\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uC194\uB9AC\uB4DC\uB294 \uCCB4\uD615 \uC2E4\uB8E8\uC5E3, \uC640\uC774\uC5B4\uD504\uB808\uC784\uC740 3D \uAD6C\uC870 \uB9DD, \uD788\uD2B8\uB9F5\uC740 BMI \uBC94\uC8FC\uBCC4 \uC0C9\uC0C1 \uC704\uD5D8\uB3C4\uB97C \uC2DC\uAC01\uC801\uC73C\uB85C \uD45C\uD604\uD569\uB2C8\uB2E4."
        },
        {
          "question": "\uD0A4\uAC00 \uD070 \uC0AC\uB78C\uC5D0\uAC8C \uC625\uC2A4\uD3EC\uB4DC 2.5 \uACF5\uC2DD\uC774 \uB354 \uC815\uD655\uD55C \uC774\uC720\uB294?",
          "answer": "\uC625\uC2A4\uD37C\uB4DC \uB300\uD559\uAD50 \uD2B8\uB808\uD398\uC820 \uAD50\uC218\uAC00 \uC785\uC99D\uD588\uB4EF 2\uCC28\uC6D0 \uC81C\uACF1 \uACF5\uC2DD\uC740 \uD0A4\uAC00 \uD070 \uC0AC\uB78C\uC744 \uBD88\uD544\uC694\uD558\uAC8C \uBE44\uB9CC\uC73C\uB85C \uD310\uC815\uD558\uB294 \uC624\uB958\uB97C \uBCF4\uC815\uD569\uB2C8\uB2E4."
        },
        {
          "question": "3D \uC544\uBC14\uD0C0 \uC0DD\uC131 \uC2DC \uAC1C\uC778\uC815\uBCF4\uB098 \uC0AC\uC9C4\uC774 \uC800\uC7A5\uB418\uB098\uC694?",
          "answer": "\uC544\uB2C8\uC694, \uC0AC\uC9C4 \uC5C5\uB85C\uB4DC\uAC00 \uD544\uC694 \uC5C6\uC73C\uBA70 \uBAA8\uB4E0 \uACC4\uC0B0 \uBC0F 3D \uB80C\uB354\uB9C1\uC740 \uC0AC\uC6A9\uC790 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C 100% \uC548\uC804\uD558\uAC8C \uAD6C\uB3D9\uB429\uB2C8\uB2E4."
        },
        {
          "question": "\uBAA8\uBC14\uC77C \uAE30\uAE30\uC5D0\uC11C\uB3C4 3D \uCCB4\uD615 \uC2DC\uAC01\uD654 \uB3C4\uAD6C\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB098\uC694?",
          "answer": "\uB124, 3D \uC2DC\uAC01\uD654 \uB3C4\uAD6C\uB294 \uBAA8\uBC14\uC77C \uD130\uCE58 \uC870\uC791\uC5D0 \uC644\uBCBD\uD558\uAC8C \uCD5C\uC801\uD654\uB418\uC5B4 \uC2A4\uB9C8\uD2B8\uD3F0\uACFC \uD0DC\uBE14\uB9BF\uC5D0\uC11C 360\xB0 \uD68C\uC804\uC744 \uC9C0\uC6D0\uD569\uB2C8\uB2E4."
        },
        {
          "question": "\uCCB4\uC9C8\uB7C9\uC9C0\uC218(BMI)\uB294 3D \uC544\uBC14\uD0C0\uC758 \uBE44\uC728 \uC2A4\uCF00\uC77C\uB9C1\uACFC \uC5B4\uB5BB\uAC8C \uC5F0\uACB0\uB418\uB098\uC694?",
          "answer": "3D \uC544\uBC14\uD0C0\uB294 \uC785\uB825\uB41C \uC2E0\uC7A5 \uB300 \uCCB4\uC911 \uBE44\uC728\uACFC \uACC4\uC0B0\uB41C BMI \uC218\uCE58\uC5D0 \uB530\uB77C \uC2E4\uB8E8\uC5E3 \uB450\uAED8\uC640 \uBD80\uD53C \uBE44\uC728\uC744 \uC2E4\uC2DC\uAC04\uC73C\uB85C \uC870\uC815\uD569\uB2C8\uB2E4."
        }
      ]
    },
    "hi": {
      "eyebrow": "\u0911\u0915\u094D\u0938\u092B\u094B\u0930\u094D\u0921 2.5 \u090F\u0915\u094D\u0938\u092A\u094B\u0928\u0947\u0902\u0936\u093F\u092F\u0932 \u092B\u0949\u0930\u094D\u092E\u0942\u0932\u093E \u0914\u0930 3D \u092E\u0949\u0921\u0932",
      "title": "3D \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u0914\u0930 \u0907\u0902\u091F\u0930\u090F\u0915\u094D\u091F\u093F\u0935 3D \u092C\u0949\u0921\u0940 \u0935\u093F\u091C\u0941\u0905\u0932\u093E\u0907\u091C\u093C\u0930",
      "intro": "\u0911\u0915\u094D\u0938\u092B\u094B\u0930\u094D\u0921 2.5 \u092B\u0949\u0930\u094D\u092E\u0942\u0932\u093E (1.3 \xD7 \u0935\u091C\u0928 / \u090A\u0902\u091A\u093E\u0908\xB2\xB7\u2075) \u0915\u0947 \u0938\u093E\u0925 \u0905\u092A\u0928\u0947 \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902 \u0914\u0930 360\xB0 \u0907\u0902\u091F\u0930\u090F\u0915\u094D\u091F\u093F\u0935 3D \u092C\u0949\u0921\u0940 \u092E\u0949\u0921\u0932\u0930 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0915\u0947 \u0905\u092A\u0928\u0940 \u0936\u093E\u0930\u0940\u0930\u093F\u0915 \u0938\u0902\u0930\u091A\u0928\u093E \u0915\u094B \u0938\u092E\u091D\u0947\u0902\u0964",
      "formulaTitle": "\u0911\u0915\u094D\u0938\u092B\u094B\u0930\u094D\u0921 3D \u090A\u0902\u091A\u093E\u0908-\u0938\u092E\u093E\u092F\u094B\u091C\u093F\u0924 \u092C\u0940\u090F\u092E\u0906\u0908 \u092B\u0949\u0930\u094D\u092E\u0942\u0932\u093E",
      "formulaDesc": "3D \u092C\u0940\u090F\u092E\u0906\u0908 = 1.3 \xD7 \u0935\u091C\u0928 (\u0915\u093F\u0917\u094D\u0930\u093E) / [\u090A\u0902\u091A\u093E\u0908 (\u092E\u0940\u091F\u0930)]\xB2\xB7\u2075 | \u0911\u0915\u094D\u0938\u092B\u094B\u0930\u094D\u0921 \u0935\u093F\u0936\u094D\u0935\u0935\u093F\u0926\u094D\u092F\u093E\u0932\u092F \u0915\u0947 \u0917\u0923\u093F\u0924\u091C\u094D\u091E\u094B\u0902 \u0926\u094D\u0935\u093E\u0930\u093E \u0935\u093F\u0915\u0938\u093F\u0924 \u0938\u0942\u0924\u094D\u0930 \u091C\u094B \u0932\u0902\u092C\u0947 \u092F\u093E \u091B\u094B\u091F\u0947 \u0915\u0926 \u0915\u0947 \u0932\u094B\u0917\u094B\u0902 \u092E\u0947\u0902 \u090A\u0902\u091A\u093E\u0908 \u0915\u0947 \u0917\u0923\u093F\u0924\u0940\u092F \u092D\u094D\u0930\u092E \u0915\u094B \u0926\u0942\u0930 \u0915\u0930\u0924\u093E \u0939\u0948\u0964",
      "formulaCode": "3D BMI = 1.3 \xD7 kg / m\xB2\xB7\u2075",
      "tableTitle": "\u092E\u093E\u0928\u0915 2D \u092C\u0940\u090F\u092E\u0906\u0908 \u092C\u0928\u093E\u092E 3D \u090A\u0902\u091A\u093E\u0908-\u0938\u092E\u093E\u092F\u094B\u091C\u093F\u0924 \u092C\u0940\u090F\u092E\u0906\u0908",
      "tableRows": [
        {
          "col1": "\u0915\u092E \u090A\u0902\u091A\u093E\u0908 \u0935\u093E\u0932\u0947 \u0935\u092F\u0938\u094D\u0915 (< 160 \u0938\u0947\u092E\u0940)",
          "col2": "\u092E\u093E\u0928\u0915 2D \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u092E \u0938\u094D\u0915\u094B\u0930 \u0926\u093F\u0916\u093E\u0924\u093E \u0939\u0948",
          "col3": "3D \u092B\u0949\u0930\u094D\u092E\u0942\u0932\u093E \u0938\u0939\u0940 \u090A\u0902\u091A\u093E\u0908 \u0905\u0928\u0941\u092A\u093E\u0924 \u0915\u094B \u0938\u092E\u093E\u092F\u094B\u091C\u093F\u0924 \u0915\u0930\u0924\u093E \u0939\u0948"
        },
        {
          "col1": "\u0914\u0938\u0924 \u090A\u0902\u091A\u093E\u0908 (170 \u0938\u0947\u092E\u0940)",
          "col2": "\u0926\u094B\u0928\u094B\u0902 \u092B\u0949\u0930\u094D\u092E\u0942\u0932\u094B\u0902 \u092E\u0947\u0902 \u0938\u092E\u093E\u0928 \u092A\u0930\u093F\u0923\u093E\u092E",
          "col3": "\u0915\u094B\u0908 \u0905\u0902\u0924\u0930 \u0928\u0939\u0940\u0902 (\u0938\u092E\u093E\u0928 \u0936\u094D\u0930\u0947\u0923\u0940)"
        },
        {
          "col1": "\u0905\u0927\u093F\u0915 \u090A\u0902\u091A\u093E\u0908 \u0935\u093E\u0932\u0947 \u0935\u092F\u0938\u094D\u0915 (> 185 \u0938\u0947\u092E\u0940)",
          "col2": "\u092E\u093E\u0928\u0915 2D \u092C\u0940\u090F\u092E\u0906\u0908 \u0905\u0927\u093F\u0915 \u0938\u094D\u0915\u094B\u0930 \u0926\u093F\u0916\u093E\u0924\u093E \u0939\u0948",
          "col3": "3D \u092B\u0949\u0930\u094D\u092E\u0942\u0932\u093E 3D \u0906\u092F\u0924\u0928 \u0915\u094B \u0938\u0902\u0924\u0941\u0932\u093F\u0924 \u0915\u0930\u0924\u093E \u0939\u0948"
        }
      ],
      "faqs": [
        {
          "question": "3D \u092C\u0940\u090F\u092E\u0906\u0908 \u0914\u0930 \u092E\u093E\u0928\u0915 \u092C\u0940\u090F\u092E\u0906\u0908 \u092E\u0947\u0902 \u0915\u094D\u092F\u093E \u0905\u0902\u0924\u0930 \u0939\u0948?",
          "answer": "\u092E\u093E\u0928\u0915 \u092C\u0940\u090F\u092E\u0906\u0908 \u090A\u0902\u091A\u093E\u0908 \u0915\u0947 \u0935\u0930\u094D\u0917 (m\xB2) \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0924\u093E \u0939\u0948, \u091C\u092C\u0915\u093F 3D \u092C\u0940\u090F\u092E\u0906\u0908 \u0936\u093E\u0930\u0940\u0930\u093F\u0915 \u092E\u093E\u0924\u094D\u0930\u093E \u0915\u094B \u0938\u0902\u0924\u0941\u0932\u093F\u0924 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F 2.5 \u0915\u0940 \u0918\u093E\u0924 (m\xB2\xB7\u2075) \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "3D \u092C\u0949\u0921\u0940 \u0935\u093F\u091C\u0941\u0905\u0932\u093E\u0907\u091C\u093C\u0930 \u0915\u0948\u0938\u0947 \u0915\u093E\u092E \u0915\u0930\u0924\u093E \u0939\u0948?",
          "answer": "\u092F\u0939 \u0906\u092A\u0915\u0947 \u0926\u0930\u094D\u091C \u0915\u093F\u090F \u0917\u090F \u0935\u091C\u0928 \u0914\u0930 \u090A\u0902\u091A\u093E\u0908 \u0915\u0947 \u0906\u0927\u093E\u0930 \u092A\u0930 \u0906\u092A\u0915\u0947 \u092C\u094D\u0930\u093E\u0909\u091C\u093C\u0930 \u092E\u0947\u0902 \u0939\u0940 \u0935\u093E\u0938\u094D\u0924\u0935\u093F\u0915 \u0938\u092E\u092F \u092E\u0947\u0902 3D \u0905\u0935\u0924\u093E\u0930 \u092E\u0949\u0921\u0932 \u0924\u0948\u092F\u093E\u0930 \u0915\u0930\u0924\u093E \u0939\u0948 \u091C\u093F\u0938\u0947 \u0906\u092A 360\xB0 \u0918\u0941\u092E\u093E \u0938\u0915\u0924\u0947 \u0939\u0948\u0902\u0964"
        },
        {
          "question": "\u0935\u093E\u092F\u0930\u092B\u094D\u0930\u0947\u092E, \u092E\u0947\u0936 \u0914\u0930 \u0939\u0940\u091F\u092E\u0948\u092A \u0935\u094D\u092F\u0942 \u0915\u094D\u092F\u093E \u0926\u0930\u094D\u0936\u093E\u0924\u0947 \u0939\u0948\u0902?",
          "answer": "\u092E\u0947\u0936 \u0936\u0930\u0940\u0930 \u0915\u0947 \u0906\u0915\u093E\u0930 \u0915\u094B \u0926\u093F\u0916\u093E\u0924\u093E \u0939\u0948, \u0935\u093E\u092F\u0930\u092B\u094D\u0930\u0947\u092E \u091C\u094D\u092F\u093E\u092E\u093F\u0924\u0940\u092F \u0932\u093E\u0907\u0928\u094B\u0902 \u0915\u094B \u0926\u093F\u0916\u093E\u0924\u093E \u0939\u0948, \u0914\u0930 \u0939\u0940\u091F\u092E\u0948\u092A \u092C\u0940\u090F\u092E\u0906\u0908 \u0936\u094D\u0930\u0947\u0923\u0940 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0930\u0902\u0917\u094B\u0902 \u0938\u0947 \u091C\u094B\u0916\u093F\u092E \u0915\u094D\u0937\u0947\u0924\u094D\u0930 \u0926\u093F\u0916\u093E\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u0932\u0902\u092C\u0947 \u0932\u094B\u0917\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u0911\u0915\u094D\u0938\u092B\u094B\u0930\u094D\u0921 2.5 \u092B\u0949\u0930\u094D\u092E\u0942\u0932\u093E \u0915\u094D\u092F\u094B\u0902 \u092C\u0947\u0939\u0924\u0930 \u0939\u0948?",
          "answer": "\u0911\u0915\u094D\u0938\u092B\u094B\u0930\u094D\u0921 \u0935\u093F\u0936\u094D\u0935\u0935\u093F\u0926\u094D\u092F\u093E\u0932\u092F \u0915\u0947 \u092A\u094D\u0930\u094B\u092B\u0947\u0938\u0930 \u0928\u093F\u0915 \u0924\u094D\u0930\u0947\u092B\u0947\u0925\u0947\u0928 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930, \u092A\u0941\u0930\u093E\u0928\u093E \u092B\u0949\u0930\u094D\u092E\u0942\u0932\u093E \u0932\u0902\u092C\u0947 \u0932\u094B\u0917\u094B\u0902 \u0915\u0947 \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u094B \u0905\u0915\u093E\u0930\u0923 \u0905\u0927\u093F\u0915 \u0926\u093F\u0916\u093E\u0924\u093E \u0925\u093E, \u091C\u093F\u0938\u0947 2.5 \u092B\u0949\u0930\u094D\u092E\u0942\u0932\u093E \u0920\u0940\u0915 \u0915\u0930\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u0915\u094D\u092F\u093E 3D \u0935\u093F\u091C\u0941\u0905\u0932\u093E\u0907\u091C\u093C\u0930 \u0906\u092A\u0915\u0940 \u0915\u094B\u0908 \u0928\u093F\u091C\u0940 \u092B\u094B\u091F\u094B \u0932\u0947\u0924\u093E \u0939\u0948?",
          "answer": "\u0928\u0939\u0940\u0902, \u0907\u0938\u0915\u0947 \u0932\u093F\u090F \u0915\u093F\u0938\u0940 \u0915\u0948\u092E\u0930\u0947 \u092F\u093E \u092B\u094B\u091F\u094B \u0915\u0940 \u0906\u0935\u0936\u094D\u092F\u0915\u0924\u093E \u0928\u0939\u0940\u0902 \u0939\u0948; \u092F\u0939 \u0915\u0947\u0935\u0932 \u0906\u092A\u0915\u0947 \u0905\u0902\u0915\u094B\u0902 \u092A\u0930 \u0906\u0927\u093E\u0930\u093F\u0924 \u090F\u0915 \u092E\u0941\u092B\u093C\u094D\u0924 3D \u0917\u0923\u093F\u0924\u0940\u092F \u092E\u0949\u0921\u0932 \u0939\u0948\u0964"
        },
        {
          "question": "\u0915\u094D\u092F\u093E \u092E\u0948\u0902 \u092E\u094B\u092C\u093E\u0907\u0932 \u0909\u092A\u0915\u0930\u0923\u094B\u0902 \u092A\u0930 3D \u092C\u0949\u0921\u0940 \u0935\u093F\u091C\u0941\u0905\u0932\u093E\u0907\u091C\u093C\u0930 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930 \u0938\u0915\u0924\u093E \u0939\u0942\u0902?",
          "answer": "\u0939\u093E\u0901, 3D \u0935\u093F\u091C\u093C\u0941\u0905\u0932\u093E\u0907\u091C\u093C\u0930 \u092E\u094B\u092C\u093E\u0907\u0932 \u091F\u091A \u0915\u0902\u091F\u094D\u0930\u094B\u0932 \u0915\u0947 \u0932\u093F\u090F \u092A\u0942\u0930\u0940 \u0924\u0930\u0939 \u0938\u0947 \u0905\u0928\u0941\u0915\u0942\u0932\u093F\u0924 \u0939\u0948, \u091C\u093F\u0938\u0938\u0947 \u0938\u094D\u092E\u093E\u0930\u094D\u091F\u092B\u093C\u094B\u0928 \u0914\u0930 \u091F\u0948\u092C\u0932\u0947\u091F \u092A\u0930 360\xB0 \u0930\u094B\u091F\u0947\u0936\u0928 \u0915\u0940 \u0905\u0928\u0941\u092E\u0924\u093F \u092E\u093F\u0932\u0924\u0940 \u0939\u0948\u0964"
        },
        {
          "question": "\u092C\u0949\u0921\u0940 \u092E\u093E\u0938 \u0907\u0902\u0921\u0947\u0915\u094D\u0938 3D \u0905\u0935\u0924\u093E\u0930 \u0905\u0928\u0941\u092A\u093E\u0924 \u0938\u094D\u0915\u0947\u0932\u093F\u0902\u0917 \u0938\u0947 \u0915\u0948\u0938\u0947 \u0938\u0902\u092C\u0902\u0927\u093F\u0924 \u0939\u0948?",
          "answer": "3D \u0905\u0935\u0924\u093E\u0930 \u0906\u092A\u0915\u0940 \u090A\u0902\u091A\u093E\u0908-\u0938\u0947-\u0935\u091C\u0928 \u0905\u0928\u0941\u092A\u093E\u0924 \u0914\u0930 \u092C\u0940\u090F\u092E\u0906\u0908 \u0938\u094D\u0915\u094B\u0930 \u0915\u0947 \u0906\u0927\u093E\u0930 \u092A\u0930 \u092E\u0947\u0936 \u0915\u0940 \u092E\u094B\u091F\u093E\u0908 \u0914\u0930 3D \u0906\u0915\u0943\u0924\u093F\u092F\u094B\u0902 \u0915\u094B \u0935\u093E\u0938\u094D\u0924\u0935\u093F\u0915 \u0938\u092E\u092F \u092E\u0947\u0902 \u0938\u092E\u093E\u092F\u094B\u091C\u093F\u0924 \u0915\u0930\u0924\u093E \u0939\u0948\u0964"
        }
      ]
    }
  },
  "bmi-calculator-india": {
    "en": {
      "eyebrow": "WHO & ICMR South Asian Guidelines",
      "title": "BMI Calculator India \u2013 Asian BMI Cutoff Reference (BMI 23)",
      "intro": "Calculate your Body Mass Index (BMI) using the official WHO & ICMR (Indian Council of Medical Research) consensus guidelines for Indians. Unlike Western standards where overweight begins at BMI 25.0, South Asian guidelines establish BMI 23.0 kg/m\xB2 as the overweight cutoff threshold due to higher visceral fat accumulation at lower body weights.",
      "formulaTitle": "ICMR & WHO Indian BMI Calculator Formula (kg & cm)",
      "formulaDesc": "Metric: BMI = Weight (kg) / [Height (m)]\xB2 | Overweight Cutoff for Indians: BMI \u2265 23.0 kg/m\xB2 | Obesity Cutoff for Indians: BMI \u2265 25.0 kg/m\xB2",
      "formulaCode": "Asian BMI = Weight (kg) / [Height (cm) / 100]\xB2",
      "tableTitle": "Official BMI Chart for Indians & South Asian Adults (WHO & ICMR Standards)",
      "tableRows": [
        {
          "col1": "Underweight",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "Underweight cutoff threshold (< 18.5 kg/m\xB2)"
        },
        {
          "col1": "Healthy / Normal BMI for Indians",
          "col2": "18.5 \u2013 22.9 kg/m\xB2",
          "col3": "Optimal healthy BMI range for Indian men & women"
        },
        {
          "col1": "Overweight (Action Threshold)",
          "col2": "23.0 \u2013 24.9 kg/m\xB2",
          "col3": "Increased cardiometabolic risk cutoff (BMI 23 India threshold)"
        },
        {
          "col1": "Obese Class I (Indian Standard)",
          "col2": "25.0 \u2013 29.9 kg/m\xB2",
          "col3": "Obesity Class I classification under WHO South Asian criteria"
        },
        {
          "col1": "Obese Class II (Severe Obesity)",
          "col2": "\u2265 30.0 kg/m\xB2",
          "col3": "High risk obesity classification for Indian adults"
        }
      ],
      "faqs": [
        {
          "question": "What is the healthy BMI range for Indian men and women?",
          "answer": "According to WHO Asia-Pacific and ICMR consensus guidelines, the healthy BMI range for Indian men and Indian women is 18.5 to 22.9 kg/m\xB2. Any score of 23.0 or higher is classified as overweight/at-risk."
        },
        {
          "question": "Why is BMI 23 the overweight cutoff threshold in India?",
          "answer": "Epidemiological research shows that South Asian populations carry higher abdominal visceral fat and face elevated cardiometabolic risks (such as type 2 diabetes and hypertension) at lower body mass index levels compared to Western populations."
        },
        {
          "question": "How to calculate BMI in India using kg and cm?",
          "answer": "To calculate BMI in kg and cm: Convert height in cm to meters by dividing by 100. Multiply height in meters by itself to get height squared. Divide weight in kg by height squared. Example: 65 kg / (1.68m x 1.68m) = 23.0 BMI."
        },
        {
          "question": "What are the waist circumference guidelines for Indian adults?",
          "answer": "The Indian Council of Medical Research (ICMR) recommends keeping waist circumference under 90 cm (35 inches) for Indian men and under 80 cm (31.5 inches) for Indian women to reduce abdominal fat risk."
        },
        {
          "question": "What is the ideal height weight chart for Indians?",
          "answer": "An ideal weight for Indian adults keeps BMI between 18.5 and 22.9 kg/m\xB2. For example, for an Indian male or female of height 168 cm (5 ft 6 in), the healthy weight range is 52.2 kg to 64.6 kg."
        },
        {
          "question": "Can I use the 3D Body Visualizer on mobile devices?",
          "answer": "Yes, the 3D visualizer is fully responsive and optimized for mobile touch controls, allowing 360\xB0 rotation and pinch-to-zoom on smartphones and tablets."
        },
        {
          "question": "How does body mass index relate to 3D avatar proportion scaling?",
          "answer": "The 3D avatar dynamically adjusts mesh thickness, waist curvature, and volumetric proportions based on your height-to-weight ratio and calculated BMI score."
        }
      ]
    },
    "es": {
      "eyebrow": "Pautas del ICMR y la OMS para el Sur de Asia",
      "title": "Calculadora de IMC para India \u2013 Valores de Referencia y Gr\xE1fico de Salud",
      "intro": "Calculadora de IMC para la poblaci\xF3n india en l\xEDnea basada en las directrices de consenso de la OMS y el ICMR. A diferencia de los est\xE1ndares occidentales donde el sobrepeso comienza en un IMC de 25.0, las pautas para el sur de Asia establecen 23.0 kg/m\xB2 como punto de corte para sobrepeso debido a una mayor acumulaci\xF3n de grasa visceral a pesos corporales m\xE1s bajos.",
      "formulaTitle": "F\xF3rmula del IMC para India seg\xFAn ICMR y la OMS (kg y cm)",
      "formulaDesc": "M\xE9trico: IMC = Peso (kg) / [Altura (m)]\xB2 | Umbral de sobrepeso para la poblaci\xF3n india: IMC \u2265 23.0 kg/m\xB2 | Umbral de obesidad: IMC \u2265 25.0 kg/m\xB2",
      "formulaCode": "IMC = Peso (kg) / [(Altura en cm / 100)\xB2]",
      "tableTitle": "Tabla Oficial de IMC para Adultos Indios (Normas ICMR y OMS)",
      "tableRows": [
        {
          "col1": "Bajo Peso (< 18.5 kg/m\xB2)",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "Umbral de referencia para bajo peso (< 18.5 kg/m\xB2)"
        },
        {
          "col1": "Peso Normal \xD3ptimo (18.5 \u2013 22.9 kg/m\xB2)",
          "col2": "18.5 \u2013 22.9 kg/m\xB2",
          "col3": "Rango saludable \xF3ptimo para adultos indios"
        },
        {
          "col1": "Sobrepeso / En Riesgo (23.0 \u2013 24.9 kg/m\xB2)",
          "col2": "23.0 \u2013 24.9 kg/m\xB2",
          "col3": "Umbral de riesgo cardiometab\xF3lico elevado (Corte de IMC 23)"
        },
        {
          "col1": "Obesidad Clase I (25.0 \u2013 29.9 kg/m\xB2)",
          "col2": "25.0 \u2013 29.9 kg/m\xB2",
          "col3": "Clasificaci\xF3n de obesidad Clase I seg\xFAn OMS Asia-Pac\xEDfico"
        },
        {
          "col1": "Obesidad Clase II (\u2265 30.0 kg/m\xB2)",
          "col2": "\u2265 30.0 kg/m\xB2",
          "col3": "Clasificaci\xF3n de obesidad severa de alto riesgo"
        }
      ],
      "faqs": [
        {
          "question": "\xBFC\xF3mo funciona la calculadora de IMC para India y qu\xE9 mide?",
          "answer": "Esta calculadora eval\xFAa tus datos personales utilizando ecuaciones validadas seg\xFAn las directrices del ICMR y la OMS para estimar el IMC y los rangos de peso saludable para adultos indios."
        },
        {
          "question": "\xBFPor qu\xE9 el IMC 23 es el umbral de sobrepeso en India?",
          "answer": "La investigaci\xF3n epidemiol\xF3gica muestra que las poblaciones del sur de Asia acumulan una mayor cantidad de grasa visceral abdominal y enfrentan mayores riesgos cardiometab\xF3licos (como diabetes tipo 2 e hipertensi\xF3n) con niveles de IMC m\xE1s bajos en comparaci\xF3n con las poblaciones occidentales."
        },
        {
          "question": "\xBFC\xF3mo calcular el IMC en India usando kg y cm?",
          "answer": "Para calcular el IMC en kg y cm: Convierte la altura en cm a metros dividiendo entre 100. Multiplica la altura en metros por s\xED misma. Divide el peso en kg entre la altura al cuadrado. Ejemplo: 65 kg / (1.68 m x 1.68 m) = 23.0 IMC."
        },
        {
          "question": "\xBFCu\xE1les son las pautas de circunferencia de cintura para adultos indios?",
          "answer": "El Consejo Indio de Investigaci\xF3n M\xE9dica (ICMR) recomienda mantener la circunferencia de la cintura por debajo de 90 cm para los hombres indios y por debajo de 80 cm para las mujeres indias para reducir el riesgo de adiposidad abdominal."
        },
        {
          "question": "\xBFCu\xE1l es la tabla de peso y estatura ideal para adultos indios?",
          "answer": "Un peso ideal para adultos indios mantiene el IMC entre 18.5 y 22.9 kg/m\xB2. Por ejemplo, para una estatura de 168 cm (5 pies 6 pulgadas), el rango de peso saludable es de 52.2 kg a 64.6 kg."
        }
      ]
    },
    "fr": {
      "eyebrow": "Directives ICMR et OMS pour l'Asie du Sud",
      "title": "Calculateur d'IMC Inde \u2013 Seuils Asiatiques et R\xE9f\xE9rences de Sant\xE9",
      "intro": "Calculez votre Indice de Masse Corporelle (IMC) selon les directives de consensus de l'OMS et de l'ICMR (Conseil indien de la recherche m\xE9dicale) pour la population indienne. Contrairement aux normes occidentales o\xF9 le surpoids commence \xE0 un IMC de 25,0, les recommandations pour l'Asie du Sud fixent le seuil de surpoids \xE0 23,0 kg/m\xB2 en raison d'une accumulation plus pr\xE9coce de graisse visc\xE9rale.",
      "formulaTitle": "Formule d'IMC Indien selon l'ICMR et l'OMS (kg & cm)",
      "formulaDesc": "M\xE9trique : IMC = Poids (kg) / [Taille (m)]\xB2 | Seuil de surpoids pour la population indienne : IMC \u2265 23,0 kg/m\xB2 | Seuil d'ob\xE9sit\xE9 : IMC \u2265 25,0 kg/m\xB2",
      "formulaCode": "IMC = Poids (kg) / [(Taille en cm / 100)\xB2]",
      "tableTitle": "Tableau Officiel d'IMC pour Adultes Indiens (Normes ICMR et OMS)",
      "tableRows": [
        {
          "col1": "Insuffisance Pond\xE9rale (< 18.5 kg/m\xB2)",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "Seuil de r\xE9f\xE9rence d'insuffisance pond\xE9rale (< 18,5 kg/m\xB2)"
        },
        {
          "col1": "Poids Normal Optimal (18.5 \u2013 22.9 kg/m\xB2)",
          "col2": "18.5 \u2013 22.9 kg/m\xB2",
          "col3": "Plage de poids sant\xE9 optimale pour les adultes indiens"
        },
        {
          "col1": "Surpoids / En Risque (23.0 \u2013 24.9 kg/m\xB2)",
          "col2": "23.0 \u2013 24.9 kg/m\xB2",
          "col3": "Seuil de risque cardiom\xE9tabolique accru (IMC \u2265 23)"
        },
        {
          "col1": "Ob\xE9sit\xE9 Classe I (25.0 \u2013 29.9 kg/m\xB2)",
          "col2": "25.0 \u2013 29.9 kg/m\xB2",
          "col3": "Ob\xE9sit\xE9 de classe I selon les crit\xE8res OMS Asie-Pacifique"
        },
        {
          "col1": "Ob\xE9sit\xE9 Classe II (\u2265 30.0 kg/m\xB2)",
          "col2": "\u2265 30.0 kg/m\xB2",
          "col3": "Classification d'ob\xE9sit\xE9 s\xE9v\xE8re \xE0 haut risque"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur d'IMC pour l'Inde et que mesure-t-il ?",
          "answer": "Ce calculateur \xE9value vos donn\xE9es personnelles \xE0 l'aide d'\xE9quations valid\xE9es selon les directives de l'ICMR et de l'OMS afin de d\xE9terminer votre IMC et vos plages de poids sant\xE9."
        },
        {
          "question": "Pourquoi l'IMC 23 est-il le seuil de surpoids en Inde ?",
          "answer": "Les recherches \xE9pid\xE9miologiques d\xE9montrent que les populations d'Asie du Sud pr\xE9sentent un taux de graisse visc\xE9rale abdominale plus \xE9lev\xE9 et sont expos\xE9es \xE0 des risques cardiom\xE9taboliques accrus (tels que le diab\xE8te de type 2 et l'hypertension) \xE0 des niveaux d'IMC plus bas que les populations occidentales."
        },
        {
          "question": "Comment calculer l'IMC en Inde avec les kg et les cm ?",
          "answer": "Pour calculer l'IMC en kg et cm : convertissez la taille en cm en m\xE8tres en divisant par 100. Multipliez la taille en m\xE8tres par elle-m\xEAme. Divisez le poids en kg par la taille au carr\xE9. Exemple : 65 kg / (1,68 m x 1,68 m) = 23,0 IMC."
        },
        {
          "question": "Quelles sont les recommandations relatives au tour de taille pour les adultes indiens ?",
          "answer": "L'ICMR recommande de maintenir le tour de taille en dessous de 90 cm pour les hommes indiens et de 80 cm pour les femmes indiennes afin de limiter les risques associ\xE9s \xE0 la graisse abdominale."
        },
        {
          "question": "Quelle est la table de poids et taille id\xE9ale pour les Indiens ?",
          "answer": "Un poids id\xE9al pour les adultes indiens correspond \xE0 un IMC compris entre 18,5 et 22,9 kg/m\xB2. Par exemple, pour une taille de 168 cm, la plage de poids sant\xE9 se situe entre 52,2 kg et 64,6 kg."
        }
      ]
    },
    "de": {
      "eyebrow": "ICMR & WHO S\xFCdasien-Richtlinien",
      "title": "BMI-Rechner Indien \u2013 ICMR & WHO Richtlinien f\xFCr indische Erwachsene",
      "intro": "Berechnen Sie Ihren Body-Mass-Index (BMI) nach den offiziellen Konsensus-Richtlinien der WHO und des ICMR f\xFCr indische Erwachsene. Im Gegensatz zu westlichen Standards, bei denen \xDCbergewicht ab einem BMI von 25,0 beginnt, gilt f\xFCr s\xFCdasiatische Populationen ein Grenzwert von 23,0 kg/m\xB2 aufgrund h\xF6herer viszeraler Fetteinlagerungen bei geringerem K\xF6rpergewicht.",
      "formulaTitle": "ICMR & WHO BMI-Formel f\xFCr indische Erwachsene (kg & cm)",
      "formulaDesc": "Metrisch: BMI = Gewicht (kg) / [Gr\xF6\xDFe (m)]\xB2 | \xDCbergewichtsschwelle f\xFCr indische Erwachsene: BMI \u2265 23,0 kg/m\xB2 | Adipositas-Schwelle: BMI \u2265 25,0 kg/m\xB2",
      "formulaCode": "BMI = Gewicht (kg) / [(Gr\xF6\xDFe in cm / 100)\xB2]",
      "tableTitle": "Offizielle BMI-Tabelle f\xFCr indische Erwachsene (ICMR & WHO Standards)",
      "tableRows": [
        {
          "col1": "Untergewicht (< 18.5)",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "Referenzbereich f\xFCr Untergewicht (< 18,5 kg/m\xB2)"
        },
        {
          "col1": "Gesundes Normalgewicht (18.5 \u2013 22.9)",
          "col2": "18.5 \u2013 22.9 kg/m\xB2",
          "col3": "Optimaler gesunder BMI-Bereich f\xFCr indische Erwachsene"
        },
        {
          "col1": "\xDCbergewicht / Risiko (23.0 \u2013 24.9)",
          "col2": "23.0 \u2013 24.9 kg/m\xB2",
          "col3": "Grenzwert f\xFCr erh\xF6htes kardiometabolisches Risiko (BMI 23)"
        },
        {
          "col1": "Adipositas Klasse I (25.0 \u2013 29.9)",
          "col2": "25.0 \u2013 29.9 kg/m\xB2",
          "col3": "Adipositas Klasse I nach WHO S\xFCdostasien-Kriterien"
        },
        {
          "col1": "Adipositas Klasse II (\u2265 30.0)",
          "col2": "\u2265 30.0 kg/m\xB2",
          "col3": "Klassifizierung f\xFCr schwere Adipositas"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der BMI-Rechner f\xFCr indische Erwachsene?",
          "answer": "Der Rechner verwendet die ICMR- und WHO-S\xFCdostasien-Kriterien, um Ihren BMI und den gesunden Bereich (18.5 \u2013 22.9 kg/m\xB2) zu berechnen."
        },
        {
          "question": "Warum liegt der Grenzwert f\xFCr \xDCbergewicht bei Indern bei 23.0 statt 25.0?",
          "answer": "Aufgrund h\xF6herer kardiometabolischer Risiken bei geringerem BMI empfehlen ICMR und WHO einen niedrigeren Grenzwert von 23.0 kg/m\xB2 f\xFCr indische Erwachsene."
        },
        {
          "question": "Wie berechnet man das ideale K\xF6rpergewicht nach der Gr\xF6\xDFe in Indien?",
          "answer": "Das ideale Gewicht liegt vor, wenn der BMI zwischen 18.5 und 22.9 kg/m\xB2 liegt. Es wird mit der Formel: Gewicht (kg) / [Gr\xF6\xDFe (m)]\xB2 berechnet."
        }
      ]
    },
    "ko": {
      "eyebrow": "\uAC74\uAC15 \uCC38\uC870 \uD45C\uC900 \uC9C0\uCE68",
      "title": "\uC778\uB3C4 \uC131\uC778\uC744 \uC704\uD55C \uCCB4\uC9C8\uB7C9\uC9C0\uC218 \uACC4\uC0B0\uAE30 \u2013 ICMR \uBC0F WHO \uC778\uB3C4 \uAE30\uC900",
      "intro": "WHO \uBC0F ICMR \uB0A8\uC544\uC2DC\uC544 \uC544\uC2DC\uC544 \uD0DC\uD3C9\uC591 \uC9C0\uCE68\uC5D0 \uAE30\uBC18\uD55C \uC2E4\uC2DC\uAC04 \uCC38\uACE0 \uACC4\uC0B0\uAE30\uC785\uB2C8\uB2E4. \uAC1C\uC778\uBCC4 \uC218\uCE58\uB97C \uCE21\uC815\uD558\uACE0 \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uD655\uC778\uD558\uC138\uC694.",
      "formulaTitle": "\uD45C\uC900 \uACC4\uC0B0 \uACF5\uC2DD",
      "formulaDesc": "\uAC80\uC99D\uB41C \uD45C\uC900 \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uACC4\uC0B0\uB429\uB2C8\uB2E4.",
      "formulaCode": "Asian BMI = Weight (kg) / [Height (cm) / 100]\xB2",
      "tableTitle": "\uD45C\uC900 \uCC38\uC870 \uC9C4\uB2E8\uD45C",
      "tableRows": [
        {
          "col1": "\uC800\uCCB4\uC911",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "\uC800\uCCB4\uC911 \uCC38\uC870 \uAE30\uC900"
        },
        {
          "col1": "\uC815\uC0C1 \uCCB4\uC911",
          "col2": "18.5 \u2013 22.9 kg/m\xB2",
          "col3": "\uC778\uB3C4 \uC131\uC778\uC744 \uC704\uD55C \uCD5C\uC801 \uAC74\uAC15 \uCCB4\uC911 \uBC94\uC704"
        },
        {
          "col1": "\uACFC\uCCB4\uC911 (\uC704\uD5D8 \uC99D\uAC00)",
          "col2": "23.0 \u2013 24.9 kg/m\xB2",
          "col3": "\uC2EC\uD608\uAD00 \uBC0F \uB300\uC0AC \uC704\uD5D8 \uC99D\uAC00 \uAE30\uC900 (BMI \u2265 23)"
        },
        {
          "col1": "1\uB2E8\uACC4 \uBE44\uB9CC",
          "col2": "25.0 \u2013 29.9 kg/m\xB2",
          "col3": "WHO \uC544\uC2DC\uC544 \uD0DC\uD3C9\uC591 \uAE30\uC900 1\uB2E8\uACC4 \uBE44\uB9CC"
        },
        {
          "col1": "2\uB2E8\uACC4 \uACE0\uB3C4 \uBE44\uB9CC",
          "col2": "\u2265 30.0 kg/m\xB2",
          "col3": "\uACE0\uC704\uD5D8 \uC911\uC99D \uBE44\uB9CC \uBD84\uB958"
        }
      ],
      "faqs": [
        {
          "question": "\uC778\uB3C4 \uC131\uC778 \uC804\uC6A9 BMI \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uBCF8 \uACC4\uC0B0\uAE30\uB294 ICMR \uBC0F WHO \uC544\uC2DC\uC544 \uD0DC\uD3C9\uC591 \uC9C0\uCE68\uC5D0 \uB530\uB77C BMI\uC640 \uAC74\uAC15 \uCCB4\uC911 \uBC94\uC704(18.5 \u2013 22.9 kg/m\xB2)\uB97C \uCE21\uC815\uD569\uB2C8\uB2E4."
        },
        {
          "question": "\uC778\uB3C4 \uC131\uC778\uC758 \uACFC\uCCB4\uC911 \uAE30\uC900\uC774 25.0\uC774 \uC544\uB2CC 23.0\uC778 \uC774\uC720\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uB0A8\uC544\uC2DC\uC544 \uBC0F \uC778\uB3C4\uC778 \uC778\uAD6C\uB294 \uB0AE\uC740 BMI\uC5D0\uC11C\uB3C4 \uB192\uC740 \uCCB4\uC9C0\uBC29\uB960\uC744 \uBCF4\uC5EC, WHO \uBC0F ICMR \uC9C0\uCE68\uC5D0 \uB530\uB77C 23.0 kg/m\xB2\uBD80\uD130 \uC704\uD5D8\uC774 \uC99D\uAC00\uD569\uB2C8\uB2E4."
        },
        {
          "question": "\uC778\uB3C4 \uD45C\uC900 \uC9C0\uCE68\uC5D0 \uB530\uB978 \uC2E0\uC7A5\uBCC4 \uC801\uC815 \uCCB4\uC911\uC740 \uC5B4\uB5BB\uAC8C \uACC4\uC0B0\uD558\uB098\uC694?",
          "answer": "\uC2E0\uC7A5(m)\uC758 \uC81C\uACF1\uC5D0 18.5\uB97C \uACF1\uD558\uBA74 \uCD5C\uC18C \uAD8C\uC7A5 \uCCB4\uC911\uC774 \uB418\uACE0, 22.9\uB97C \uACF1\uD558\uBA74 \uCD5C\uB300 \uAC74\uAC15 \uCCB4\uC911 \uBC94\uC704\uAC00 \uB429\uB2C8\uB2E4."
        }
      ]
    },
    "hi": {
      "eyebrow": "\u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u090F\u0935\u0902 \u0906\u0908\u0938\u0940\u090F\u092E\u0906\u0930 \u092D\u093E\u0930\u0924\u0940\u092F \u0926\u093F\u0936\u093E\u0928\u093F\u0930\u094D\u0926\u0947\u0936",
      "title": "\u092D\u093E\u0930\u0924\u0940\u092F\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u2013 \u0906\u0908\u0938\u0940\u090F\u092E\u0906\u0930 \u090F\u0935\u0902 \u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u092E\u093E\u0928\u0915",
      "intro": "\u092D\u093E\u0930\u0924\u0940\u092F \u091A\u093F\u0915\u093F\u0924\u094D\u0938\u093E \u0905\u0928\u0941\u0938\u0902\u0927\u093E\u0928 \u092A\u0930\u093F\u0937\u0926 (ICMR) \u0914\u0930 WHO \u0926\u0915\u094D\u0937\u093F\u0923 \u090F\u0936\u093F\u092F\u093E\u0908 \u0926\u093F\u0936\u093E\u0928\u093F\u0930\u094D\u0926\u0947\u0936\u094B\u0902 \u092A\u0930 \u0906\u0927\u093E\u0930\u093F\u0924 \u092D\u093E\u0930\u0924\u0940\u092F\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u092E\u0941\u092B\u093C\u094D\u0924 \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930\u0964 \u0915\u093F\u0932\u094B\u0917\u094D\u0930\u093E\u092E \u0914\u0930 \u0938\u0947\u0902\u091F\u0940\u092E\u0940\u091F\u0930 \u092E\u0947\u0902 \u0905\u092A\u0928\u0947 \u092C\u0940\u090F\u092E\u0906\u0908 \u0914\u0930 \u0938\u094D\u0935\u0938\u094D\u0925 \u0935\u091C\u0928 \u0938\u0940\u092E\u093E \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902\u0964",
      "formulaTitle": "\u092D\u093E\u0930\u0924\u0940\u092F \u092C\u0940\u090F\u092E\u0906\u0908 \u0938\u0942\u0924\u094D\u0930 (\u0915\u093F\u0917\u094D\u0930\u093E \u0914\u0930 \u0938\u0947\u092E\u0940)",
      "formulaDesc": "\u092C\u0940\u090F\u092E\u0906\u0908 = \u0935\u091C\u0928 (\u0915\u093F\u0917\u094D\u0930\u093E) / [\u090A\u0902\u091A\u093E\u0908 (\u092E\u0940\u091F\u0930)]\xB2 | \u092D\u093E\u0930\u0924\u0940\u092F\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u0913\u0935\u0930\u0935\u0947\u091F \u0915\u091F\u0911\u092B: 23.0 kg/m\xB2",
      "formulaCode": "BMI = kg / m\xB2",
      "tableTitle": "\u092D\u093E\u0930\u0924\u0940\u092F \u092A\u0941\u0930\u0941\u0937\u094B\u0902 \u090F\u0935\u0902 \u092E\u0939\u093F\u0932\u093E\u0913\u0902 \u0915\u0947 \u0932\u093F\u090F \u092C\u0940\u090F\u092E\u0906\u0908 \u091A\u093E\u0930\u094D\u091F (ICMR \u090F\u0935\u0902 WHO \u092E\u093E\u0928\u0915)",
      "tableRows": [
        {
          "col1": "\u0915\u092E \u0935\u091C\u0928",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "\u0915\u092E \u0935\u091C\u0928 \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E"
        },
        {
          "col1": "\u0938\u093E\u092E\u093E\u0928\u094D\u092F \u090F\u0935\u0902 \u0938\u094D\u0935\u0938\u094D\u0925 \u092C\u0940\u090F\u092E\u0906\u0908",
          "col2": "18.5 \u2013 22.9 kg/m\xB2",
          "col3": "\u092D\u093E\u0930\u0924\u0940\u092F\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u0906\u0926\u0930\u094D\u0936 \u0938\u094D\u0935\u0938\u094D\u0925 \u092C\u0940\u090F\u092E\u0906\u0908 \u0938\u0940\u092E\u093E"
        },
        {
          "col1": "\u0905\u0927\u093F\u0915 \u0935\u091C\u0928 (\u0915\u091F\u0911\u092B 23.0)",
          "col2": "23.0 \u2013 24.9 kg/m\xB2",
          "col3": "\u092D\u093E\u0930\u0924\u0940\u092F\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u0905\u0927\u093F\u0915 \u0935\u091C\u0928 \u090F\u0935\u0902 \u091C\u094B\u0916\u093F\u092E \u0938\u0940\u092E\u093E"
        },
        {
          "col1": "\u092E\u094B\u091F\u093E\u092A\u093E \u0936\u094D\u0930\u0947\u0923\u0940 I",
          "col2": "25.0 \u2013 29.9 kg/m\xB2",
          "col3": "\u0926\u0915\u094D\u0937\u093F\u0923 \u090F\u0936\u093F\u092F\u093E\u0908 \u092E\u093E\u0928\u0915\u094B\u0902 \u0915\u0947 \u0924\u0939\u0924 \u092E\u094B\u091F\u093E\u092A\u093E \u0936\u094D\u0930\u0947\u0923\u0940 I"
        },
        {
          "col1": "\u0917\u0902\u092D\u0940\u0930 \u092E\u094B\u091F\u093E\u092A\u093E \u0936\u094D\u0930\u0947\u0923\u0940 II",
          "col2": "\u2265 30.0 kg/m\xB2",
          "col3": "\u0917\u0902\u092D\u0940\u0930 \u092E\u094B\u091F\u093E\u092A\u093E \u0936\u094D\u0930\u0947\u0923\u0940"
        }
      ],
      "faqs": [
        {
          "question": "\u092D\u093E\u0930\u0924\u0940\u092F \u0935\u092F\u0938\u094D\u0915\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u0915\u0948\u0938\u0947 \u0915\u093E\u092E \u0915\u0930\u0924\u093E \u0939\u0948?",
          "answer": "\u092F\u0939 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 ICMR \u0914\u0930 WHO \u0915\u0947 \u0926\u093F\u0936\u093E\u0928\u093F\u0930\u094D\u0926\u0947\u0936\u094B\u0902 \u0915\u0947 \u0906\u0927\u093E\u0930 \u092A\u0930 \u090A\u0902\u091A\u093E\u0908 \u0914\u0930 \u0935\u091C\u0928 \u0915\u093E \u0935\u093F\u0936\u094D\u0932\u0947\u0937\u0923 \u0915\u0930\u0915\u0947 \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u092D\u093E\u0930\u0924 \u092E\u0947\u0902 \u092C\u0940\u090F\u092E\u0906\u0908 23.0 \u0915\u094B \u0913\u0935\u0930\u0935\u0947\u091F \u0915\u094D\u092F\u094B\u0902 \u092E\u093E\u0928\u093E \u091C\u093E\u0924\u093E \u0939\u0948?",
          "answer": "\u0906\u0908\u0938\u0940\u090F\u092E\u0906\u0930 (ICMR) \u0915\u0947 \u0936\u094B\u0927 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930, \u092D\u093E\u0930\u0924\u0940\u092F \u0906\u092C\u093E\u0926\u0940 \u092E\u0947\u0902 \u0915\u092E \u092C\u0940\u090F\u092E\u0906\u0908 \u092A\u0930 \u092D\u0940 \u092A\u0947\u091F \u0915\u0940 \u0935\u093F\u0938\u0930\u0932 \u0935\u0938\u093E \u0905\u0927\u093F\u0915 \u0939\u094B\u0924\u0940 \u0939\u0948, \u091C\u093F\u0938\u0938\u0947 23.0 kg/m\xB2 \u0938\u0947 \u0939\u0940 \u091C\u094B\u0916\u093F\u092E \u092C\u0922\u093C\u0928\u0947 \u0932\u0917\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u092D\u093E\u0930\u0924\u0940\u092F\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u0906\u0926\u0930\u094D\u0936 \u092C\u0940\u090F\u092E\u0906\u0908 \u0938\u0940\u092E\u093E \u0915\u094D\u092F\u093E \u0939\u0948?",
          "answer": "\u0906\u0908\u0938\u0940\u090F\u092E\u0906\u0930 \u0914\u0930 \u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u0926\u093F\u0936\u093E\u0928\u093F\u0930\u094D\u0926\u0947\u0936\u094B\u0902 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u092D\u093E\u0930\u0924\u0940\u092F \u0935\u092F\u0938\u094D\u0915\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u0906\u0926\u0930\u094D\u0936 \u092C\u0940\u090F\u092E\u0906\u0908 18.5 \u0938\u0947 22.9 kg/m\xB2 \u0915\u0947 \u092C\u0940\u091A \u0939\u0948\u0964"
        }
      ]
    }
  },
  "bmi-calculator-for-indians": {
    "en": {
      "eyebrow": "ICMR & WHO South Asian Standards",
      "title": "BMI Calculator for Indians \u2013 Healthy Height Weight Chart for Indian Adults",
      "intro": "Free online BMI Calculator for Indians based on Indian Council of Medical Research (ICMR) and WHO Asia-Pacific reference standards. Compute your Body Mass Index (BMI) using kg and cm, check whether your weight falls into the healthy Indian range (18.5 \u2013 22.9 kg/m\xB2), and review ICMR waist circumference guidelines.",
      "formulaTitle": "Official ICMR Indian BMI Formula (kg & cm)",
      "formulaDesc": "BMI = Weight (kg) / [Height (m)]\xB2 | Healthy Range for Indians: 18.5 \u2013 22.9 kg/m\xB2 | Overweight Cutoff: \u2265 23.0 kg/m\xB2",
      "formulaCode": "BMI = Weight (kg) / [(Height in cm / 100)\xB2]",
      "tableTitle": "ICMR & WHO Adult BMI Reference Chart for Indians (kg/m\xB2)",
      "tableRows": [
        {
          "col1": "Underweight",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "Underweight guidance threshold (< 18.5 kg/m\xB2)"
        },
        {
          "col1": "Healthy Normal Weight",
          "col2": "18.5 \u2013 22.9 kg/m\xB2",
          "col3": "Target healthy weight range for Indian adults"
        },
        {
          "col1": "Overweight / At Risk (Action Threshold)",
          "col2": "23.0 \u2013 24.9 kg/m\xB2",
          "col3": "Action threshold for elevated cardiometabolic risk"
        },
        {
          "col1": "Obese Class I (Indian Standard)",
          "col2": "25.0 \u2013 29.9 kg/m\xB2",
          "col3": "Class I obesity cutoff under ICMR guidelines"
        },
        {
          "col1": "Obese Class II (Severe Obesity)",
          "col2": "\u2265 30.0 kg/m\xB2",
          "col3": "Severe obesity high risk classification"
        }
      ],
      "faqs": [
        {
          "question": "What is the healthy BMI range for Indians?",
          "answer": "According to ICMR and WHO South Asian guidelines, the healthy BMI range for Indian men and women is 18.5 to 22.9 kg/m\xB2."
        },
        {
          "question": "Why is the overweight cutoff 23.0 for Indians instead of 25.0?",
          "answer": "South Asian populations exhibit higher visceral fat percentages at lower Body Mass Index scores, increasing cardiometabolic risk starting at a BMI of 23.0 kg/m\xB2 under ICMR and WHO guidelines."
        },
        {
          "question": "How to calculate ideal body weight for height in India?",
          "answer": "Multiply your height in meters squared by 18.5 for the minimum healthy weight and by 22.9 for the maximum recommended healthy weight under WHO and ICMR Indian standards."
        }
      ]
    },
    "es": {
      "eyebrow": "Est\xE1ndares ICMR y OMS para el Sur de Asia",
      "title": "Calculadora de IMC para la Poblaci\xF3n India \u2013 Tabla de Peso y Altura \u2013 Gu\xEDa y Calculadora",
      "intro": "Calculadora de IMC para la poblaci\xF3n india en l\xEDnea gratuita basada en los est\xE1ndares de referencia del Consejo Indio de Investigaci\xF3n M\xE9dica (ICMR) y la OMS para Asia-Pac\xEDfico. Calcula tu \xCDndice de Masa Corporal (IMC) usando kg y cm, comprueba si tu peso se sit\xFAa en el rango saludable para adultos indios (18.5 \u2013 22.9 kg/m\xB2) y consulta las pautas de circunferencia de cintura del ICMR.",
      "formulaTitle": "F\xF3rmula Oficial del IMC para la Poblaci\xF3n India seg\xFAn ICMR (kg y cm)",
      "formulaDesc": "IMC = Peso (kg) / [Altura (m)]\xB2 | Rango saludable para adultos indios: 18.5 \u2013 22.9 kg/m\xB2 | Punto de corte para sobrepeso: \u2265 23.0 kg/m\xB2",
      "formulaCode": "IMC = Peso (kg) / [(Altura en cm / 100)\xB2]",
      "tableTitle": "Tabla de Referencia de IMC para Adultos Indios seg\xFAn ICMR y la OMS (kg/m\xB2)",
      "tableRows": [
        {
          "col1": "Bajo Peso (< 18.5 kg/m\xB2)",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "Umbral de referencia para bajo peso (< 18.5 kg/m\xB2)"
        },
        {
          "col1": "Peso Normal \xD3ptimo (18.5 \u2013 22.9 kg/m\xB2)",
          "col2": "18.5 \u2013 22.9 kg/m\xB2",
          "col3": "Rango saludable recomendado para adultos indios"
        },
        {
          "col1": "Sobrepeso / Zona de Riesgo (23.0 \u2013 24.9 kg/m\xB2)",
          "col2": "23.0 \u2013 24.9 kg/m\xB2",
          "col3": "Punto de corte para riesgo cardiometab\xF3lico elevado"
        },
        {
          "col1": "Obesidad Clase I (25.0 \u2013 29.9 kg/m\xB2)",
          "col2": "25.0 \u2013 29.9 kg/m\xB2",
          "col3": "Umbral de obesidad Clase I seg\xFAn gu\xEDas ICMR"
        },
        {
          "col1": "Obesidad Clase II (\u2265 30.0 kg/m\xB2)",
          "col2": "\u2265 30.0 kg/m\xB2",
          "col3": "Clasificaci\xF3n de riesgo de obesidad severa"
        }
      ],
      "faqs": [
        {
          "question": "\xBFC\xF3mo funciona la calculadora de IMC para la poblaci\xF3n india y qu\xE9 mide?",
          "answer": "Esta calculadora eval\xFAa tus datos personales utilizando ecuaciones validadas. Proporciona una estimaci\xF3n educativa para ayudarte a comprender tu estado de salud y referencias est\xE1ndar."
        },
        {
          "question": "\xBFPor qu\xE9 el l\xEDmite de sobrepeso es 23.0 para la poblaci\xF3n india en lugar de 25.0?",
          "answer": "Las poblaciones del sur de Asia presentan un mayor porcentaje de grasa visceral a \xEDndices de masa corporal m\xE1s bajos, lo que incrementa el riesgo cardiometab\xF3lico a partir de un IMC de 23.0 kg/m\xB2."
        },
        {
          "question": "\xBFC\xF3mo calcular el peso corporal ideal seg\xFAn la altura en India?",
          "answer": "Multiplica tu altura en metros al cuadrado por 18.5 para el peso m\xEDnimo y por 22.9 para el peso m\xE1ximo recomendable seg\xFAn los est\xE1ndares de la OMS e ICMR."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes ICMR et OMS pour l'Asie du Sud",
      "title": "Calculateur d'IMC pour les Indiens \u2013 Tableau Poids-Taille Sant\xE9 \u2013 Outil de R\xE9f\xE9rence",
      "intro": "Calculateur d'IMC gratuit pour les Indiens bas\xE9 sur les normes de r\xE9f\xE9rence du Conseil indien de la recherche m\xE9dicale (ICMR) et de l'OMS Asie-Pacifique. Calculez votre Indice de Masse Corporelle (IMC) en kg et cm, v\xE9rifiez si votre poids se situe dans la plage saine pour adultes indiens (18,5 \u2013 22,9 kg/m\xB2) et consultez les recommandations de tour de taille de l'ICMR.",
      "formulaTitle": "Formule Officielle d'IMC Indien selon l'ICMR (kg et cm)",
      "formulaDesc": "IMC = Poids (kg) / [Taille (m)]\xB2 | Plage saine pour adultes indiens : 18,5 \u2013 22,9 kg/m\xB2 | Seuil de surpoids : \u2265 23,0 kg/m\xB2",
      "formulaCode": "IMC = Poids (kg) / [(Taille en cm / 100)\xB2]",
      "tableTitle": "Tableau de R\xE9f\xE9rence d'IMC pour Adultes Indiens selon l'ICMR et l'OMS (kg/m\xB2)",
      "tableRows": [
        {
          "col1": "Insuffisance Pond\xE9rale (< 18.5 kg/m\xB2)",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "Seuil de r\xE9f\xE9rence pour insuffisance pond\xE9rale (< 18,5 kg/m\xB2)"
        },
        {
          "col1": "Poids Normal Optimal (18.5 \u2013 22.9 kg/m\xB2)",
          "col2": "18.5 \u2013 22.9 kg/m\xB2",
          "col3": "Plage de poids sant\xE9 recommand\xE9e pour les adultes indiens"
        },
        {
          "col1": "Surpoids / Zone de Risque (23.0 \u2013 24.9 kg/m\xB2)",
          "col2": "23.0 \u2013 24.9 kg/m\xB2",
          "col3": "Seuil d'action pour risque cardiom\xE9tabolique accru"
        },
        {
          "col1": "Ob\xE9sit\xE9 Classe I (25.0 \u2013 29.9 kg/m\xB2)",
          "col2": "25.0 \u2013 29.9 kg/m\xB2",
          "col3": "Seuil d'ob\xE9sit\xE9 de Classe I selon les directives ICMR"
        },
        {
          "col1": "Ob\xE9sit\xE9 Classe II (\u2265 30.0 kg/m\xB2)",
          "col2": "\u2265 30.0 kg/m\xB2",
          "col3": "Classification de risque d'ob\xE9sit\xE9 s\xE9v\xE8re"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur d'IMC pour la population indienne ?",
          "answer": "Ce calculateur \xE9value vos donn\xE9es personnelles \xE0 l'aide d'\xE9quations valid\xE9es. Il fournit une estimation \xE9ducative pour vous aider \xE0 comprendre vos m\xE9triques et r\xE9f\xE9rences standards."
        },
        {
          "question": "Pourquoi le seuil de surpoids est-il de 23.0 pour les Indiens au lieu de 25.0 ?",
          "answer": "Les populations d'Asie du Sud et de l'Inde pr\xE9sentent un pourcentage plus \xE9lev\xE9 de graisse visc\xE9rale \xE0 des IMC plus faibles, ce qui augmente le risque cardiom\xE9tabolique d\xE8s un IMC de 23.0 kg/m\xB2."
        },
        {
          "question": "Comment calculer le poids id\xE9al selon la taille en Inde ?",
          "answer": "Multipliez votre taille en m\xE8tres au carr\xE9 par 18,5 pour le poids minimum sant\xE9 et par 22,9 pour le poids maximum recommand\xE9 selon les normes de l'OMS et de l'ICMR."
        }
      ]
    },
    "de": {
      "eyebrow": "ICMR & WHO S\xFCdasien-Referenzstandards",
      "title": "BMI-Rechner f\xFCr Inder \u2013 ICMR & WHO Indien-Standard-Tabelle \u2013 Leitfaden & Rechner",
      "intro": "Kostenloser Online-BMI-Rechner f\xFCr indische Erwachsene basierend auf den Referenzstandards des Indian Council of Medical Research (ICMR) und der WHO-Asien-Pazifik-Region. Berechnen Sie Ihren Body-Mass-Index (BMI) in kg und cm, pr\xFCfen Sie, ob Ihr Gewicht im gesunden Bereich f\xFCr indische Erwachsene liegt (18,5 \u2013 22,9 kg/m\xB2), und \xFCberpr\xFCfen Sie die ICMR-Taillenumfangsrichtlinien.",
      "formulaTitle": "Offizielle ICMR-BMI-Formel f\xFCr indische Erwachsene (kg & cm)",
      "formulaDesc": "BMI = Gewicht (kg) / [Gr\xF6\xDFe (m)]\xB2 | Gesunder Bereich f\xFCr indische Erwachsene: 18,5 \u2013 22,9 kg/m\xB2 | \xDCbergewichtsschwelle: \u2265 23,0 kg/m\xB2",
      "formulaCode": "BMI = Gewicht (kg) / [(Gr\xF6\xDFe in cm / 100)\xB2]",
      "tableTitle": "ICMR & WHO Erwachsenen-BMI-Referenztabelle f\xFCr indische Erwachsene (kg/m\xB2)",
      "tableRows": [
        {
          "col1": "Untergewicht (< 18.5)",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "Referenzschwelle f\xFCr Untergewicht (< 18,5 kg/m\xB2)"
        },
        {
          "col1": "Gesundes Normalgewicht (18.5 \u2013 22.9)",
          "col2": "18.5 \u2013 22.9 kg/m\xB2",
          "col3": "Empfohlener gesunder Gewichtsbereich f\xFCr indische Erwachsene"
        },
        {
          "col1": "\xDCbergewicht / Risiko (23.0 \u2013 24.9)",
          "col2": "23.0 \u2013 24.9 kg/m\xB2",
          "col3": "Aktionsschwelle f\xFCr erh\xF6htes kardiometabolisches Risiko"
        },
        {
          "col1": "Adipositas Klasse I (25.0 \u2013 29.9)",
          "col2": "25.0 \u2013 29.9 kg/m\xB2",
          "col3": "Adipositas Klasse I Schwellenwert nach ICMR-Leitlinien"
        },
        {
          "col1": "Adipositas Klasse II (\u2265 30.0)",
          "col2": "\u2265 30.0 kg/m\xB2",
          "col3": "Klassifizierung f\xFCr schweres Adipositas-Risiko"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der BMI-Rechner f\xFCr indische Erwachsene?",
          "answer": "Der Rechner verwendet die ICMR- und WHO-S\xFCdostasien-Kriterien, um Ihren BMI und den gesunden Bereich (18.5 \u2013 22.9 kg/m\xB2) zu berechnen."
        },
        {
          "question": "Warum liegt der Grenzwert f\xFCr \xDCbergewicht bei Indern bei 23.0 statt 25.0?",
          "answer": "Aufgrund h\xF6herer kardiometabolischer Risiken bei geringerem BMI empfehlen ICMR und WHO einen niedrigeren Grenzwert von 23.0 kg/m\xB2 f\xFCr indische Erwachsene."
        },
        {
          "question": "Wie berechnet man das ideale K\xF6rpergewicht nach der Gr\xF6\xDFe in Indien?",
          "answer": "Das ideale Gewicht liegt vor, wenn der BMI zwischen 18.5 und 22.9 kg/m\xB2 liegt. Es wird mit der Formel: Gewicht (kg) / [Gr\xF6\xDFe (m)]\xB2 berechnet."
        }
      ]
    },
    "ko": {
      "eyebrow": "ICMR \uBC0F WHO \uB0A8\uC544\uC2DC\uC544 \uACF5\uC911\uBCF4\uAC74 \uCC38\uC870 \uAE30\uC900",
      "title": "\uC778\uB3C4\uC778\uC744 \uC704\uD55C BMI \uACC4\uC0B0\uAE30 \u2013 ICMR \uBC0F WHO \uC778\uB3C4 \uD45C\uC900 \uAC74\uAC15 \uCCB4\uC911\uD45C \u2013 \uCC38\uC870 \uACC4\uC0B0\uAE30",
      "intro": "\uC778\uB3C4 \uC758\uD559\uC5F0\uAD6C\uC704\uC6D0\uD68C(ICMR) \uBC0F WHO \uC544\uC2DC\uC544-\uD0DC\uD3C9\uC591 \uACF5\uC911\uBCF4\uAC74 \uCC38\uC870 \uAE30\uC900\uC744 \uBC14\uD0D5\uC73C\uB85C \uC124\uACC4\uB41C \uC778\uB3C4 \uC131\uC778 \uC804\uC6A9 \uBB34\uB8CC \uC628\uB77C\uC778 BMI \uACC4\uC0B0\uAE30\uC785\uB2C8\uB2E4. kg \uBC0F cm \uB2E8\uC704\uB85C \uCCB4\uC9C8\uB7C9\uC9C0\uC218\uB97C \uACC4\uC0B0\uD558\uACE0, \uC778\uB3C4 \uC131\uC778 \uD45C\uC900 \uAC74\uAC15 \uCCB4\uC911 \uBC94\uC704(18.5 \u2013 22.9 kg/m\xB2) \uCDA9\uC871 \uC5EC\uBD80\uC640 ICMR \uD5C8\uB9AC\uB458\uB808 \uAD8C\uC7A5 \uAE30\uC900\uC744 \uD655\uC778\uD558\uC138\uC694.",
      "formulaTitle": "\uACF5\uC2DD ICMR \uC778\uB3C4 \uC131\uC778 BMI \uACC4\uC0B0 \uACF5\uC2DD (kg & cm)",
      "formulaDesc": "BMI = \uCCB4\uC911 (kg) / [\uC2E0\uC7A5 (m)]\xB2 | \uC778\uB3C4 \uC131\uC778 \uAC74\uAC15 \uCCB4\uC911 \uBC94\uC704: 18.5 \u2013 22.9 kg/m\xB2 | \uACFC\uCCB4\uC911 \uC8FC\uC758 \uAE30\uC900: \u2265 23.0 kg/m\xB2",
      "formulaCode": "BMI = \uCCB4\uC911 (kg) / [(\uC2E0\uC7A5 cm / 100)\xB2]",
      "tableTitle": "ICMR \uBC0F WHO \uC778\uB3C4 \uC131\uC778 BMI \uD45C\uC900 \uCC38\uC870 \uC9C4\uB2E8\uD45C (kg/m\xB2)",
      "tableRows": [
        {
          "col1": "\uC800\uCCB4\uC911 (< 18.5 kg/m\xB2)",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "\uC800\uCCB4\uC911 \uCC38\uC870 \uAE30\uC900\uC120 (< 18.5 kg/m\xB2)"
        },
        {
          "col1": "\uC815\uC0C1 \uCCB4\uC911 (18.5 \u2013 22.9 kg/m\xB2)",
          "col2": "18.5 \u2013 22.9 kg/m\xB2",
          "col3": "\uC778\uB3C4 \uC131\uC778 \uAD8C\uC7A5 \uC801\uC815 \uCCB4\uC911 \uAD6C\uAC04"
        },
        {
          "col1": "\uACFC\uCCB4\uC911 / \uC704\uD5D8\uAD70 (23.0 \u2013 24.9 kg/m\xB2)",
          "col2": "23.0 \u2013 24.9 kg/m\xB2",
          "col3": "\uC2EC\uB300\uC0AC \uC704\uD5D8 \uC8FC\uC758 \uAC1C\uC2DC \uC784\uACC4 \uAD6C\uAC04"
        },
        {
          "col1": "1\uB2E8\uACC4 \uBE44\uB9CC (25.0 \u2013 29.9 kg/m\xB2)",
          "col2": "25.0 \u2013 29.9 kg/m\xB2",
          "col3": "ICMR \uC9C0\uCE68 \uAE30\uC900 1\uB2E8\uACC4 \uBE44\uB9CC \uBC94\uC8FC"
        },
        {
          "col1": "2\uB2E8\uACC4 \uBE44\uB9CC (\u2265 30.0 kg/m\xB2)",
          "col2": "\u2265 30.0 kg/m\xB2",
          "col3": "\uACE0\uB3C4 \uBE44\uB9CC \uACE0\uC704\uD5D8 \uC784\uACC4 \uAD6C\uAC04"
        }
      ],
      "faqs": [
        {
          "question": "\uC778\uB3C4 \uC131\uC778 \uC804\uC6A9 BMI \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uBCF8 \uACC4\uC0B0\uAE30\uB294 ICMR \uBC0F WHO \uC544\uC2DC\uC544 \uD0DC\uD3C9\uC591 \uC9C0\uCE68\uC5D0 \uB530\uB77C BMI\uC640 \uAC74\uAC15 \uCCB4\uC911 \uBC94\uC704(18.5 \u2013 22.9 kg/m\xB2)\uB97C \uCE21\uC815\uD569\uB2C8\uB2E4."
        },
        {
          "question": "\uC778\uB3C4 \uC131\uC778\uC758 \uACFC\uCCB4\uC911 \uAE30\uC900\uC774 25.0\uC774 \uC544\uB2CC 23.0\uC778 \uC774\uC720\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uB0A8\uC544\uC2DC\uC544 \uBC0F \uC778\uB3C4\uC778 \uC778\uAD6C\uB294 \uB0AE\uC740 BMI\uC5D0\uC11C\uB3C4 \uB192\uC740 \uCCB4\uC9C0\uBC29\uB960\uC744 \uBCF4\uC5EC, WHO \uBC0F ICMR \uC9C0\uCE68\uC5D0 \uB530\uB77C 23.0 kg/m\xB2\uBD80\uD130 \uC704\uD5D8\uC774 \uC99D\uAC00\uD569\uB2C8\uB2E4."
        },
        {
          "question": "\uC778\uB3C4 \uD45C\uC900 \uC9C0\uCE68\uC5D0 \uB530\uB978 \uC2E0\uC7A5\uBCC4 \uC801\uC815 \uCCB4\uC911\uC740 \uC5B4\uB5BB\uAC8C \uACC4\uC0B0\uD558\uB098\uC694?",
          "answer": "\uC2E0\uC7A5(m)\uC758 \uC81C\uACF1\uC5D0 18.5\uB97C \uACF1\uD558\uBA74 \uCD5C\uC18C \uAD8C\uC7A5 \uCCB4\uC911\uC774 \uB418\uACE0, 22.9\uB97C \uACF1\uD558\uBA74 \uCD5C\uB300 \uAC74\uAC15 \uCCB4\uC911 \uBC94\uC704\uAC00 \uB429\uB2C8\uB2E4."
        }
      ]
    },
    "hi": {
      "eyebrow": "\u0906\u0908\u0938\u0940\u090F\u092E\u0906\u0930 \u090F\u0935\u0902 \u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u092D\u093E\u0930\u0924\u0940\u092F \u092E\u093E\u0928\u0915",
      "title": "\u092D\u093E\u0930\u0924\u0940\u092F\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930",
      "intro": "\u092D\u093E\u0930\u0924\u0940\u092F \u091A\u093F\u0915\u093F\u0924\u094D\u0938\u093E \u0905\u0928\u0941\u0938\u0902\u0927\u093E\u0928 \u092A\u0930\u093F\u0937\u0926 (ICMR) \u0914\u0930 WHO \u0926\u0915\u094D\u0937\u093F\u0923 \u090F\u0936\u093F\u092F\u093E\u0908 \u0926\u093F\u0936\u093E\u0928\u093F\u0930\u094D\u0926\u0947\u0936\u094B\u0902 \u092A\u0930 \u0906\u0927\u093E\u0930\u093F\u0924 \u092D\u093E\u0930\u0924\u0940\u092F\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u092E\u0941\u092B\u093C\u094D\u0924 \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930\u0964 \u0915\u093F\u0932\u094B\u0917\u094D\u0930\u093E\u092E \u0914\u0930 \u0938\u0947\u0902\u091F\u0940\u092E\u0940\u091F\u0930 \u092E\u0947\u0902 \u0905\u092A\u0928\u0947 \u092C\u0940\u090F\u092E\u0906\u0908 \u0914\u0930 \u0938\u094D\u0935\u0938\u094D\u0925 \u0935\u091C\u0928 \u0938\u0940\u092E\u093E \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902\u0964",
      "formulaTitle": "\u092D\u093E\u0930\u0924\u0940\u092F \u092C\u0940\u090F\u092E\u0906\u0908 \u0938\u0942\u0924\u094D\u0930",
      "formulaDesc": "\u092C\u0940\u090F\u092E\u0906\u0908 = \u0935\u091C\u0928 (\u0915\u093F\u0917\u094D\u0930\u093E) / [\u090A\u0902\u091A\u093E\u0908 (\u092E\u0940\u091F\u0930)]\xB2 | \u092D\u093E\u0930\u0924\u0940\u092F\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u0938\u094D\u0935\u0938\u094D\u0925 \u0938\u0940\u092E\u093E: 18.5 - 22.9 kg/m\xB2",
      "formulaCode": "BMI = kg / m\xB2",
      "tableTitle": "\u092D\u093E\u0930\u0924\u0940\u092F \u0935\u092F\u0938\u094D\u0915\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u092C\u0940\u090F\u092E\u0906\u0908 \u0936\u094D\u0930\u0947\u0923\u0940 \u091A\u093E\u0930\u094D\u091F (ICMR \u092E\u093E\u0928\u0915)",
      "tableRows": [
        {
          "col1": "\u0915\u092E \u0935\u091C\u0928 (< 18.5 kg/m\xB2)",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "\u0915\u092E \u0935\u091C\u0928 \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E (< 18.5 kg/m\xB2)"
        },
        {
          "col1": "\u0938\u093E\u092E\u093E\u0928\u094D\u092F \u0935\u091C\u0928 (18.5 \u2013 22.9 kg/m\xB2)",
          "col2": "18.5 \u2013 22.9 kg/m\xB2",
          "col3": "\u092D\u093E\u0930\u0924\u0940\u092F \u0935\u092F\u0938\u094D\u0915\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u0905\u0928\u0941\u0936\u0902\u0938\u093F\u0924 \u0938\u094D\u0935\u0938\u094D\u0925 \u0935\u091C\u0928 \u0938\u0940\u092E\u093E"
        },
        {
          "col1": "\u0905\u0927\u093F\u0915 \u0935\u091C\u0928 (\u091C\u094B\u0916\u093F\u092E \u0938\u0940\u092E\u093E 23.0 \u2013 24.9 kg/m\xB2)",
          "col2": "23.0 \u2013 24.9 kg/m\xB2",
          "col3": "\u0915\u093E\u0930\u094D\u0921\u093F\u092F\u094B\u092E\u0947\u091F\u093E\u092C\u0949\u0932\u093F\u0915 \u091C\u094B\u0916\u093F\u092E \u0935\u0943\u0926\u094D\u0927\u093F \u0915\u0940 \u0936\u0941\u0930\u0941\u0906\u0924\u0940 \u0938\u0940\u092E\u093E"
        },
        {
          "col1": "\u092E\u094B\u091F\u093E\u092A\u093E \u0936\u094D\u0930\u0947\u0923\u0940 I (25.0 \u2013 29.9 kg/m\xB2)",
          "col2": "25.0 \u2013 29.9 kg/m\xB2",
          "col3": "ICMR \u0926\u093F\u0936\u093E\u0928\u093F\u0930\u094D\u0926\u0947\u0936\u094B\u0902 \u0915\u0947 \u0924\u0939\u0924 \u092E\u094B\u091F\u093E\u092A\u093E \u0936\u094D\u0930\u0947\u0923\u0940 I \u0938\u0940\u092E\u093E"
        },
        {
          "col1": "\u092E\u094B\u091F\u093E\u092A\u093E \u0936\u094D\u0930\u0947\u0923\u0940 II (\u2265 30.0 kg/m\xB2)",
          "col2": "\u2265 30.0 kg/m\xB2",
          "col3": "\u0917\u0902\u092D\u0940\u0930 \u092E\u094B\u091F\u093E\u092A\u093E \u0909\u091A\u094D\u091A \u091C\u094B\u0916\u093F\u092E \u0935\u0930\u094D\u0917\u0940\u0915\u0930\u0923"
        }
      ],
      "faqs": [
        {
          "question": "\u092D\u093E\u0930\u0924\u0940\u092F \u092C\u0940\u090F\u092E\u0906\u0908 \u092E\u093E\u0928\u0915 \u0915\u094D\u092F\u093E \u0939\u0948\u0902?",
          "answer": "ICMR \u0914\u0930 \u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u0915\u0947 \u0938\u0902\u0936\u094B\u0927\u093F\u0924 \u092E\u093E\u0928\u0915\u094B\u0902 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0926\u0915\u094D\u0937\u093F\u0923 \u090F\u0936\u093F\u092F\u093E\u0908 \u0932\u094B\u0917\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F 23.0 kg/m\xB2 \u0938\u0947 \u0913\u0935\u0930\u0935\u0947\u091F \u0915\u091F\u0911\u092B \u0936\u0941\u0930\u0942 \u0939\u094B\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u0938\u093E\u092E\u093E\u0928\u094D\u092F \u092C\u0940\u090F\u092E\u0906\u0908 \u0914\u0930 \u092D\u093E\u0930\u0924\u0940\u092F \u092C\u0940\u090F\u092E\u0906\u0908 \u092E\u0947\u0902 \u0915\u094D\u092F\u093E \u0905\u0902\u0924\u0930 \u0939\u0948?",
          "answer": "\u092E\u093E\u0928\u0915 \u092C\u0940\u090F\u092E\u0906\u0908 \u092E\u0947\u0902 25.0 \u092A\u0930 \u0913\u0935\u0930\u0935\u0947\u091F \u092E\u093E\u0928\u093E \u091C\u093E\u0924\u093E \u0939\u0948, \u091C\u092C\u0915\u093F \u092D\u093E\u0930\u0924\u0940\u092F \u092C\u0940\u090F\u092E\u0906\u0908 \u092E\u0947\u0902 23.0 kg/m\xB2 \u092A\u0930 \u0939\u0940 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u091C\u094B\u0916\u093F\u092E \u0915\u093E \u0938\u0902\u0926\u0930\u094D\u092D \u092E\u093E\u0928\u093E \u091C\u093E\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u0915\u092E\u0930 \u0915\u093E \u0906\u0915\u093E\u0930 \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0947 \u0938\u093E\u0925 \u0915\u094D\u092F\u094B\u0902 \u091C\u0930\u0942\u0930\u0940 \u0939\u0948?",
          "answer": "\u092D\u093E\u0930\u0924\u0940\u092F\u094B\u0902 \u092E\u0947\u0902 \u092A\u0947\u091F \u0915\u0940 \u0906\u0902\u0924\u0930\u093F\u0915 (\u0935\u093F\u0938\u0930\u0932) \u0935\u0938\u093E \u091C\u092E\u093E \u0939\u094B\u0928\u0947 \u0915\u0940 \u092A\u094D\u0930\u0935\u0943\u0924\u094D\u0924\u093F \u0905\u0927\u093F\u0915 \u0939\u094B\u0924\u0940 \u0939\u0948, \u0907\u0938\u0932\u093F\u090F \u092C\u0940\u090F\u092E\u0906\u0908 \u0914\u0930 \u0915\u092E\u0930 \u0926\u094B\u0928\u094B\u0902 \u0915\u093E \u092E\u093E\u092A \u0906\u0935\u0936\u094D\u092F\u0915 \u0939\u0948\u0964"
        },
        {
          "question": "\u0915\u094D\u092F\u093E \u092F\u0939 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u0928\u093F\u0903\u0936\u0941\u0932\u094D\u0915 \u0914\u0930 \u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924 \u0939\u0948?",
          "answer": "\u0939\u093E\u0901, \u092F\u0939 100% \u092E\u0941\u092B\u093C\u094D\u0924 \u0939\u0948 \u0914\u0930 \u0906\u092A\u0915\u0940 \u0938\u092D\u0940 \u091C\u093E\u0928\u0915\u093E\u0930\u0940 \u0906\u092A\u0915\u0947 \u092C\u094D\u0930\u093E\u0909\u091C\u093C\u0930 \u092E\u0947\u0902 \u0939\u0940 \u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924 \u0930\u0939\u0924\u0940 \u0939\u0948\u0964"
        },
        {
          "question": "\u092D\u093E\u0930\u0924\u0940\u092F \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0938\u094D\u0935\u0938\u094D\u0925 \u0935\u091C\u0928 \u0915\u0948\u0938\u0947 \u092C\u0928\u093E\u090F \u0930\u0916\u0947\u0902?",
          "answer": "\u0938\u0902\u0924\u0941\u0932\u093F\u0924 \u092D\u093E\u0930\u0924\u0940\u092F \u0906\u0939\u093E\u0930, \u0928\u093F\u092F\u092E\u093F\u0924 \u0935\u094D\u092F\u093E\u092F\u093E\u092E \u0914\u0930 22.9 kg/m\xB2 \u0938\u0947 \u0915\u092E \u092C\u0940\u090F\u092E\u0906\u0908 \u092C\u0928\u093E\u090F \u0930\u0916\u0928\u093E \u0932\u093E\u092D\u0926\u093E\u092F\u0915 \u0939\u094B\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u092D\u093E\u0930\u0924\u0940\u092F \u0935\u092F\u0938\u094D\u0915\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0948\u0938\u0947 \u0915\u0940 \u091C\u093E\u0924\u0940 \u0939\u0948?",
          "answer": "\u092D\u093E\u0930\u0924\u0940\u092F\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u092C\u0940\u090F\u092E\u0906\u0908 \u0917\u0923\u0928\u093E: \u0935\u091C\u0928 (\u0915\u093F\u0917\u094D\u0930\u093E) \u0915\u094B \u090A\u0902\u091A\u093E\u0908 \u0915\u0947 \u0935\u0930\u094D\u0917 (\u092E\u0940\u091F\u0930\xB2) \u0938\u0947 \u0935\u093F\u092D\u093E\u091C\u093F\u0924 \u0915\u0930\u0947\u0902\u0964 \u0909\u0926\u093E\u0939\u0930\u0923: 65 \u0915\u093F\u0917\u094D\u0930\u093E / (1.68 \u092E\u0940\u091F\u0930 x 1.68 \u092E\u0940\u091F\u0930) = 23.0 kg/m\xB2 (\u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u090F\u0936\u093F\u092F\u093E\u0908 \u0915\u091F\u0911\u092B \u0915\u0947 \u0924\u0939\u0924 \u0913\u0935\u0930\u0935\u0947\u091F)\u0964"
        },
        {
          "question": "\u092D\u093E\u0930\u0924\u0940\u092F\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u0906\u0926\u0930\u094D\u0936 \u0935\u091C\u0928 \u0938\u0940\u092E\u093E \u0915\u094D\u092F\u093E \u0939\u0948?",
          "answer": "\u0906\u0908\u0938\u0940\u090F\u092E\u0906\u0930 (ICMR) \u0914\u0930 \u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 (WHO) \u0915\u0947 \u0926\u093F\u0936\u093E\u0928\u093F\u0930\u094D\u0926\u0947\u0936\u094B\u0902 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u092D\u093E\u0930\u0924\u0940\u092F \u0935\u092F\u0938\u094D\u0915\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u0906\u0926\u0930\u094D\u0936 \u092C\u0940\u090F\u092E\u0906\u0908 18.5 \u0938\u0947 22.9 kg/m\xB2 \u0915\u0947 \u092C\u0940\u091A \u0930\u0939\u0924\u093E \u0939\u0948\u0964"
        }
      ]
    }
  },
  "healthy-weight-by-height": {
    "en": {
      "eyebrow": "WHO & Devine Reference Charts",
      "title": "Healthy Weight by Height Chart \u2013 Ideal Weight Range for Men & Women",
      "intro": "Explore official healthy weight by height reference ranges and height-weight lookup charts for men and women. Calculate your ideal weight based on height in kilograms (kg) and pounds (lbs) based on World Health Organization (WHO), CDC, and Devine formula standards.",
      "formulaTitle": "Healthy Weight Range & Ideal Weight Equations",
      "formulaDesc": "WHO Healthy Weight Range: Min Weight = 18.5 \xD7 [Height (m)]\xB2 | Max Weight = 24.9 \xD7 [Height (m)]\xB2 | Devine IBW Male: 50kg + 2.3kg/inch >5ft | Devine IBW Female: 45.5kg + 2.3kg/inch >5ft",
      "formulaCode": "Min Healthy (kg) = 18.5 \xD7 m\xB2  |  Max Healthy (kg) = 24.9 \xD7 m\xB2",
      "tableTitle": "Height Weight Chart for Men & Women (Official WHO Healthy Range in kg & lbs)",
      "tableRows": [
        {
          "col1": `4' 10" (147 cm)`,
          "col2": "40.0 \u2013 53.8 kg (88 \u2013 119 lbs)",
          "col3": "Devine IBW: Male ~43.2 kg | Female ~36.3 kg"
        },
        {
          "col1": `5' 0" (152 cm)`,
          "col2": "42.8 \u2013 57.6 kg (94 \u2013 127 lbs)",
          "col3": "Devine IBW: Male ~50.0 kg | Female ~45.5 kg"
        },
        {
          "col1": `5' 2" (157 cm)`,
          "col2": "45.6 \u2013 61.4 kg (100 \u2013 135 lbs)",
          "col3": "Devine IBW: Male ~54.6 kg | Female ~50.1 kg"
        },
        {
          "col1": `5' 4" (163 cm)`,
          "col2": "49.2 \u2013 66.2 kg (108 \u2013 146 lbs)",
          "col3": "Devine IBW: Male ~59.2 kg | Female ~54.7 kg"
        },
        {
          "col1": `5' 6" (168 cm)`,
          "col2": "52.2 \u2013 70.3 kg (115 \u2013 155 lbs)",
          "col3": "Devine IBW: Male ~63.8 kg | Female ~59.3 kg"
        },
        {
          "col1": `5' 8" (173 cm)`,
          "col2": "55.4 \u2013 74.5 kg (122 \u2013 164 lbs)",
          "col3": "Devine IBW: Male ~68.4 kg | Female ~63.9 kg"
        },
        {
          "col1": `5' 10" (178 cm)`,
          "col2": "58.6 \u2013 78.9 kg (129 \u2013 174 lbs)",
          "col3": "Devine IBW: Male ~73.0 kg | Female ~68.5 kg"
        },
        {
          "col1": `6' 0" (183 cm)`,
          "col2": "62.0 \u2013 83.4 kg (136 \u2013 184 lbs)",
          "col3": "Devine IBW: Male ~77.6 kg | Female ~73.1 kg"
        },
        {
          "col1": `6' 2" (188 cm)`,
          "col2": "65.4 \u2013 88.0 kg (144 \u2013 194 lbs)",
          "col3": "Devine IBW: Male ~82.2 kg | Female ~77.7 kg"
        }
      ],
      "faqs": [
        {
          "question": "What is a healthy weight for my height?",
          "answer": "A healthy weight for your height is determined by a BMI between 18.5 and 24.9 kg/m\xB2 according to WHO standards. Multiply your height in meters squared by 18.5 for minimum weight and 24.9 for maximum healthy weight."
        },
        {
          "question": "What is the healthy weight chart por altura para hombres y mujeres?",
          "answer": `A height weight chart lists healthy weight ranges based on stature. For example: 5'4" (163cm) is 49\u201366 kg; 5'8" (173cm) is 55\u201374 kg; 6'0" (183cm) is 62\u201383 kg.`
        },
        {
          "question": "How to calculate ideal weight seg\xFAn la altura?",
          "answer": "Ideal weight nach K\xF6rpergr\xF6\xDFe can be calculated using the Devine formula: For Men: 50 kg + 2.3 kg per inch over 5 feet. For Women: 45.5 kg + 2.3 kg per inch over 5 feet."
        },
        {
          "question": "\xBFEs diferente la tabla de peso saludable para hombres y mujeres?",
          "answer": "While WHO BMI ranges (18.5 to 24.9) apply to both adult men and women, ideal body weight formulas (such as Devine or Robinson) adjust for gender due to differences in average skeletal mass and muscle composition."
        },
        {
          "question": "What is a healthy weight for Indian adults by height?",
          "answer": "For South Asian and Indian adults, consensus guidelines recommend keeping BMI between 18.5 and 22.9 kg/m\xB2 due to higher visceral fat risk at lower body mass."
        }
      ]
    },
    "es": {
      "eyebrow": "Est\xE1ndares de Referencia de Salud",
      "title": "Healthy Weight by Height Chart \u2013 Ideal Weight Range for Men & Women \u2013 Gu\xEDa y Calculadora",
      "intro": "Herramienta de c\xE1lculo y referencia educativa dise\xF1ada seg\xFAn los est\xE1ndares de salud publicados de la OMS y CDC. Calcula tus m\xE9tricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "F\xF3rmula de Referencia Est\xE1ndar",
      "formulaDesc": "Calculado utilizando ecuaciones est\xE1ndar validadas.",
      "formulaCode": "Min Healthy (kg) = 18.5 \xD7 m\xB2  |  Max Healthy (kg) = 24.9 \xD7 m\xB2",
      "tableTitle": "Tabla de Referencia Est\xE1ndar",
      "tableRows": [
        {
          "col1": "Categor\xEDa / Nivel 1",
          "col2": "40.0 \u2013 53.8 kg (88 \u2013 119 lbs)",
          "col3": "Peso Devine ideal: Hombres ~43.2 kg | Mujeres ~36.3 kg"
        },
        {
          "col1": "Categor\xEDa / Nivel 2",
          "col2": "42.8 \u2013 57.6 kg (94 \u2013 127 lbs)",
          "col3": "Peso Devine ideal: Hombres ~50.0 kg | Mujeres ~45.5 kg"
        },
        {
          "col1": "Categor\xEDa / Nivel 3",
          "col2": "45.6 \u2013 61.4 kg (100 \u2013 135 lbs)",
          "col3": "Peso Devine ideal: Hombres ~54.6 kg | Mujeres ~50.1 kg"
        },
        {
          "col1": "Categor\xEDa / Nivel 4",
          "col2": "49.2 \u2013 66.2 kg (108 \u2013 146 lbs)",
          "col3": "Peso Devine ideal: Hombres ~59.2 kg | Mujeres ~54.7 kg"
        },
        {
          "col1": "Categor\xEDa / Nivel 5",
          "col2": "52.2 \u2013 70.3 kg (115 \u2013 155 lbs)",
          "col3": "Peso Devine ideal: Hombres ~63.8 kg | Mujeres ~59.3 kg"
        },
        {
          "col1": "Categor\xEDa / Nivel 6",
          "col2": "55.4 \u2013 74.5 kg (122 \u2013 164 lbs)",
          "col3": "Peso Devine ideal: Hombres ~68.4 kg | Mujeres ~63.9 kg"
        },
        {
          "col1": "Categor\xEDa / Nivel 7",
          "col2": "58.6 \u2013 78.9 kg (129 \u2013 174 lbs)",
          "col3": "Peso Devine ideal: Hombres ~73.0 kg | Mujeres ~68.5 kg"
        },
        {
          "col1": "Categor\xEDa / Nivel 8",
          "col2": "62.0 \u2013 83.4 kg (136 \u2013 184 lbs)",
          "col3": "Peso Devine ideal: Hombres ~77.6 kg | Mujeres ~73.1 kg"
        },
        {
          "col1": "Categor\xEDa / Nivel 9",
          "col2": "65.4 \u2013 88.0 kg (144 \u2013 194 lbs)",
          "col3": "Peso Devine ideal: Hombres ~82.2 kg | Mujeres ~77.7 kg"
        }
      ],
      "faqs": [
        {
          "question": "\xBFC\xF3mo funciona la calculadora de peso saludable por altura y qu\xE9 mide?",
          "answer": "Esta calculadora eval\xFAa tus datos personales utilizando ecuaciones validadas. Proporciona una estimaci\xF3n educativa para ayudarte a comprender tu estado de salud y referencias est\xE1ndar."
        },
        {
          "question": "\xBFQu\xE9 es el healthy weight chart por altura para hombres y mujeres?",
          "answer": "Un gr\xE1fico de peso y altura enumera los rangos de peso saludable seg\xFAn la estatura. Por ejemplo, para una altura de 163 cm (5 ft 4 in), el rango normal es de 49 kg a 66 kg (108 lbs a 145 lbs)."
        },
        {
          "question": "C\xF3mo calculate ideal weight seg\xFAn la altura?",
          "answer": "Ideal weight nach K\xF6rpergr\xF6\xDFe can be calculated using the Devine formula: For Men: 50 kg + 2.3 kg per inch over 5 feet. For Women: 45.5 kg + 2.3 kg per inch over 5 feet."
        },
        {
          "question": "\xBFEs diferente la tabla de peso saludable para hombres y mujeres?",
          "answer": "While WHO BMI ranges (18.5 to 24.9) apply to both adult men and women, ideal body weight formulas (such as Devine or Robinson) adjust for gender due to differences in average skeletal mass and muscle composition."
        },
        {
          "question": "\xBFCu\xE1l es el peso saludable para adultos indios seg\xFAn la estatura?",
          "answer": "For South Asian and Indian adults, consensus guidelines recommend keeping BMI between 18.5 and 22.9 kg/m\xB2 due to higher visceral fat risk at lower body mass."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de R\xE9f\xE9rence de Sant\xE9",
      "title": "Healthy Weight by Height Chart \u2013 Ideal Weight Range for Men & Women \u2013 Outil de R\xE9f\xE9rence",
      "intro": "Outil de calcul et de r\xE9f\xE9rence \xE9ducatif con\xE7u selon les normes de sant\xE9 publi\xE9es de l'OMS et du CDC. Calculez vos m\xE9triques et consultez les plages de r\xE9f\xE9rence.",
      "formulaTitle": "Formule de R\xE9f\xE9rence Standard",
      "formulaDesc": "Calcul\xE9 \xE0 l'aide d'\xE9quations standards valid\xE9es.",
      "formulaCode": "Min Healthy (kg) = 18.5 \xD7 m\xB2  |  Max Healthy (kg) = 24.9 \xD7 m\xB2",
      "tableTitle": "Tableau de R\xE9f\xE9rence Standard",
      "tableRows": [
        {
          "col1": "Cat\xE9gorie / Niveau 1",
          "col2": "40.0 \u2013 53.8 kg (88 \u2013 119 lbs)",
          "col3": "Poids Devine id\xE9al : Hommes ~43.2 kg | Femmes ~36.3 kg"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 2",
          "col2": "42.8 \u2013 57.6 kg (94 \u2013 127 lbs)",
          "col3": "Poids Devine id\xE9al : Hommes ~50.0 kg | Femmes ~45.5 kg"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 3",
          "col2": "45.6 \u2013 61.4 kg (100 \u2013 135 lbs)",
          "col3": "Poids Devine id\xE9al : Hommes ~54.6 kg | Femmes ~50.1 kg"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 4",
          "col2": "49.2 \u2013 66.2 kg (108 \u2013 146 lbs)",
          "col3": "Poids Devine id\xE9al : Hommes ~59.2 kg | Femmes ~54.7 kg"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 5",
          "col2": "52.2 \u2013 70.3 kg (115 \u2013 155 lbs)",
          "col3": "Poids Devine id\xE9al : Hommes ~63.8 kg | Femmes ~59.3 kg"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 6",
          "col2": "55.4 \u2013 74.5 kg (122 \u2013 164 lbs)",
          "col3": "Poids Devine id\xE9al : Hommes ~68.4 kg | Femmes ~63.9 kg"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 7",
          "col2": "58.6 \u2013 78.9 kg (129 \u2013 174 lbs)",
          "col3": "Poids Devine id\xE9al : Hommes ~73.0 kg | Femmes ~68.5 kg"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 8",
          "col2": "62.0 \u2013 83.4 kg (136 \u2013 184 lbs)",
          "col3": "Poids Devine id\xE9al : Hommes ~77.6 kg | Femmes ~73.1 kg"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 9",
          "col2": "65.4 \u2013 88.0 kg (144 \u2013 194 lbs)",
          "col3": "Poids Devine id\xE9al : Hommes ~82.2 kg | Femmes ~77.7 kg"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de poids sant\xE9 par taille et que mesure-t-il ?",
          "answer": "Ce calculateur \xE9value vos donn\xE9es personnelles \xE0 l'aide d'\xE9quations valid\xE9es. Il fournit une estimation \xE9ducative pour vous aider \xE0 comprendre vos m\xE9triques et r\xE9f\xE9rences standards."
        },
        {
          "question": "Qu'est-ce que le healthy weight chart por altura para hombres y mujeres?",
          "answer": "Un tableau de r\xE9f\xE9rence poids-taille indique les plages de poids sant\xE9 en fonction de la taille. Par exemple, pour 163 cm (5 ft 4 in), la plage normale est de 49 kg \xE0 66 kg (108 lbs \xE0 145 lbs)."
        },
        {
          "question": "Comment calculate ideal weight seg\xFAn la altura?",
          "answer": "Ideal weight nach K\xF6rpergr\xF6\xDFe can be calculated using the Devine formula: For Men: 50 kg + 2.3 kg per inch over 5 feet. For Women: 45.5 kg + 2.3 kg per inch over 5 feet."
        },
        {
          "question": "\xBFEs diferente la tabla de peso saludable para hombres y mujeres?",
          "answer": "While WHO BMI ranges (18.5 to 24.9) apply to both adult men and women, ideal body weight formulas (such as Devine or Robinson) adjust for gender due to differences in average skeletal mass and muscle composition."
        },
        {
          "question": "Quel est un poids sant\xE9 pour les adultes indiens selon la taille?",
          "answer": "For South Asian and Indian adults, consensus guidelines recommend keeping BMI between 18.5 and 22.9 kg/m\xB2 due to higher visceral fat risk at lower body mass."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "Healthy Weight by Height Chart \u2013 Ideal Weight Range for Men & Women \u2013 Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den ver\xF6ffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und pr\xFCfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardm\xE4\xDFig validierten Gleichungen.",
      "formulaCode": "Min Healthy (kg) = 18.5 \xD7 m\xB2  |  Max Healthy (kg) = 24.9 \xD7 m\xB2",
      "tableTitle": "Standard-Referenztabelle",
      "tableRows": [
        {
          "col1": "Kategorie / Stufe 1",
          "col2": "40.0 \u2013 53.8 kg (88 \u2013 119 lbs)",
          "col3": "Ideales Devine-Gewicht: M\xE4nner ~43.2 kg | Frauen ~36.3 kg"
        },
        {
          "col1": "Kategorie / Stufe 2",
          "col2": "42.8 \u2013 57.6 kg (94 \u2013 127 lbs)",
          "col3": "Ideales Devine-Gewicht: M\xE4nner ~50.0 kg | Frauen ~45.5 kg"
        },
        {
          "col1": "Kategorie / Stufe 3",
          "col2": "45.6 \u2013 61.4 kg (100 \u2013 135 lbs)",
          "col3": "Ideales Devine-Gewicht: M\xE4nner ~54.6 kg | Frauen ~50.1 kg"
        },
        {
          "col1": "Kategorie / Stufe 4",
          "col2": "49.2 \u2013 66.2 kg (108 \u2013 146 lbs)",
          "col3": "Ideales Devine-Gewicht: M\xE4nner ~59.2 kg | Frauen ~54.7 kg"
        },
        {
          "col1": "Kategorie / Stufe 5",
          "col2": "52.2 \u2013 70.3 kg (115 \u2013 155 lbs)",
          "col3": "Ideales Devine-Gewicht: M\xE4nner ~63.8 kg | Frauen ~59.3 kg"
        },
        {
          "col1": "Kategorie / Stufe 6",
          "col2": "55.4 \u2013 74.5 kg (122 \u2013 164 lbs)",
          "col3": "Ideales Devine-Gewicht: M\xE4nner ~68.4 kg | Frauen ~63.9 kg"
        },
        {
          "col1": "Kategorie / Stufe 7",
          "col2": "58.6 \u2013 78.9 kg (129 \u2013 174 lbs)",
          "col3": "Ideales Devine-Gewicht: M\xE4nner ~73.0 kg | Frauen ~68.5 kg"
        },
        {
          "col1": "Kategorie / Stufe 8",
          "col2": "62.0 \u2013 83.4 kg (136 \u2013 184 lbs)",
          "col3": "Ideales Devine-Gewicht: M\xE4nner ~77.6 kg | Frauen ~73.1 kg"
        },
        {
          "col1": "Kategorie / Stufe 9",
          "col2": "65.4 \u2013 88.0 kg (144 \u2013 194 lbs)",
          "col3": "Ideales Devine-Gewicht: M\xE4nner ~82.2 kg | Frauen ~77.7 kg"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der Rechner f\xFCr gesunde Gewichtstabellen und was misst er?",
          "answer": "Dieser Rechner wertet Ihre pers\xF6nlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        },
        {
          "question": "Was ist der healthy weight chart por altura para hombres y mujeres?",
          "answer": "Eine Gr\xF6\xDFe-Gewichts-Tabelle listet gesunde Gewichtsbereiche basierend auf der K\xF6rpergr\xF6\xDFe auf. Zum Beispiel liegt der normale Bereich bei 163 cm (5 ft 4 in) zwischen 49 kg und 66 kg (108 lbs bis 145 lbs)."
        },
        {
          "question": "Wie man calculate ideal weight seg\xFAn la altura?",
          "answer": "Ideal weight nach K\xF6rpergr\xF6\xDFe can be calculated using the Devine formula: For Men: 50 kg + 2.3 kg per inch over 5 feet. For Women: 45.5 kg + 2.3 kg per inch over 5 feet."
        },
        {
          "question": "\xBFEs diferente la tabla de peso saludable para hombres y mujeres?",
          "answer": "While WHO BMI ranges (18.5 to 24.9) apply to both adult men and women, ideal body weight formulas (such as Devine or Robinson) adjust for gender due to differences in average skeletal mass and muscle composition."
        },
        {
          "question": "Was ist ein gesundes Gewicht f\xFCr indische Erwachsene nach K\xF6rpergr\xF6\xDFe?",
          "answer": "For South Asian and Indian adults, consensus guidelines recommend keeping BMI between 18.5 and 22.9 kg/m\xB2 due to higher visceral fat risk at lower body mass."
        }
      ]
    },
    "ko": {
      "eyebrow": "\uAC74\uAC15 \uCC38\uC870 \uD45C\uC900 \uC9C0\uCE68",
      "title": "Healthy Weight by Height Chart \u2013 Ideal Weight Range for Men & Women \u2013 \uCC38\uC870 \uACC4\uC0B0\uAE30",
      "intro": "WHO \uBC0F CDC \uC9C0\uCE68\uC5D0 \uAE30\uBC18\uD55C \uC2E4\uC2DC\uAC04 \uCC38\uACE0 \uACC4\uC0B0\uAE30\uC785\uB2C8\uB2E4. \uAC1C\uC778\uBCC4 \uC218\uCE58\uB97C \uCE21\uC815\uD558\uACE0 \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uD655\uC778\uD558\uC138\uC694.",
      "formulaTitle": "\uD45C\uC900 \uACC4\uC0B0 \uACF5\uC2DD",
      "formulaDesc": "\uAC80\uC99D\uB41C \uD45C\uC900 \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uACC4\uC0B0\uB429\uB2C8\uB2E4.",
      "formulaCode": "Min Healthy (kg) = 18.5 \xD7 m\xB2  |  Max Healthy (kg) = 24.9 \xD7 m\xB2",
      "tableTitle": "\uD45C\uC900 \uCC38\uC870 \uC9C4\uB2E8\uD45C",
      "tableRows": [
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 1",
          "col2": "40.0 \u2013 53.8 kg (88 \u2013 119 lbs)",
          "col3": "Devine \uC774\uC0C1 \uCCB4\uC911: \uB0A8\uC131 ~43.2 kg | \uC5EC\uC131 ~36.3 kg"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 2",
          "col2": "42.8 \u2013 57.6 kg (94 \u2013 127 lbs)",
          "col3": "Devine \uC774\uC0C1 \uCCB4\uC911: \uB0A8\uC131 ~50.0 kg | \uC5EC\uC131 ~45.5 kg"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 3",
          "col2": "45.6 \u2013 61.4 kg (100 \u2013 135 lbs)",
          "col3": "Devine \uC774\uC0C1 \uCCB4\uC911: \uB0A8\uC131 ~54.6 kg | \uC5EC\uC131 ~50.1 kg"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 4",
          "col2": "49.2 \u2013 66.2 kg (108 \u2013 146 lbs)",
          "col3": "Devine \uC774\uC0C1 \uCCB4\uC911: \uB0A8\uC131 ~59.2 kg | \uC5EC\uC131 ~54.7 kg"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 5",
          "col2": "52.2 \u2013 70.3 kg (115 \u2013 155 lbs)",
          "col3": "Devine \uC774\uC0C1 \uCCB4\uC911: \uB0A8\uC131 ~63.8 kg | \uC5EC\uC131 ~59.3 kg"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 6",
          "col2": "55.4 \u2013 74.5 kg (122 \u2013 164 lbs)",
          "col3": "Devine \uC774\uC0C1 \uCCB4\uC911: \uB0A8\uC131 ~68.4 kg | \uC5EC\uC131 ~63.9 kg"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 7",
          "col2": "58.6 \u2013 78.9 kg (129 \u2013 174 lbs)",
          "col3": "Devine \uC774\uC0C1 \uCCB4\uC911: \uB0A8\uC131 ~73.0 kg | \uC5EC\uC131 ~68.5 kg"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 8",
          "col2": "62.0 \u2013 83.4 kg (136 \u2013 184 lbs)",
          "col3": "Devine \uC774\uC0C1 \uCCB4\uC911: \uB0A8\uC131 ~77.6 kg | \uC5EC\uC131 ~73.1 kg"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 9",
          "col2": "65.4 \u2013 88.0 kg (144 \u2013 194 lbs)",
          "col3": "Devine \uC774\uC0C1 \uCCB4\uC911: \uB0A8\uC131 ~82.2 kg | \uC5EC\uC131 ~77.7 kg"
        }
      ],
      "faqs": [
        {
          "question": "\uC2E0\uC7A5\uBCC4 \uD45C\uC900 \uCCB4\uC911 \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uBCF8 \uACC4\uC0B0\uAE30\uB294 \uAC80\uC99D\uB41C \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uAC1C\uC778\uBCC4 \uC2E0\uCCB4 \uC9C0\uC218\uB97C \uC0B0\uCD9C\uD569\uB2C8\uB2E4. \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uBC14\uD0D5\uC73C\uB85C \uAD50\uC721\uC801 \uBD84\uC11D \uACB0\uACFC\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."
        },
        {
          "question": "\uC2E0\uC7A5\uBCC4 \uD45C\uC900 \uCCB4\uC911 \uCC28\uD2B8\uC758 \uAE30\uC900\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uC2E0\uC7A5\uBCC4 \uD45C\uC900 \uCCB4\uC911 \uCC28\uD2B8\uB294 \uD0A4\uC5D0 \uB530\uB978 \uAC74\uAC15\uD55C \uCCB4\uC911 \uBC94\uC704\uB97C \uB098\uD0C0\uB0C5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 163 cm (5 ft 4 in)\uC758 \uACBD\uC6B0 \uD45C\uC900 \uAD8C\uC7A5 \uBC94\uC704\uB294 49 kg ~ 66 kg (108 lbs ~ 145 lbs)\uC785\uB2C8\uB2E4."
        },
        {
          "question": " calculate ideal weight seg\xFAn la altura? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "Ideal weight nach K\xF6rpergr\xF6\xDFe can be calculated using the Devine formula: For Men: 50 kg + 2.3 kg per inch over 5 feet. For Women: 45.5 kg + 2.3 kg per inch over 5 feet."
        },
        {
          "question": "\xBFEs diferente la tabla de peso saludable para hombres y mujeres? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "While WHO BMI ranges (18.5 to 24.9) apply to both adult men and women, ideal body weight formulas (such as Devine or Robinson) adjust for gender due to differences in average skeletal mass and muscle composition."
        },
        {
          "question": "\uC2E0\uC7A5\uBCC4 \uC778\uB3C4 \uC131\uC778\uC758 \uAC74\uAC15 \uCCB4\uC911\uC740 \uC5BC\uB9C8\uC778\uAC00\uC694?",
          "answer": "For South Asian and Indian adults, consensus guidelines recommend keeping BMI between 18.5 and 22.9 kg/m\xB2 due to higher visceral fat risk at lower body mass."
        }
      ]
    },
    "hi": {
      "eyebrow": "\u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u090F\u0935\u0902 \u0921\u093F\u0935\u093E\u0907\u0928 \u0938\u0902\u0926\u0930\u094D\u092D \u0924\u093E\u0932\u093F\u0915\u093E",
      "title": "\u090A\u0902\u091A\u093E\u0908 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0938\u094D\u0935\u0938\u094D\u0925 \u0935\u091C\u0928 \u091A\u093E\u0930\u094D\u091F (Healthy Weight by Height)",
      "intro": "\u092A\u0941\u0930\u0941\u0937\u094B\u0902 \u0914\u0930 \u092E\u0939\u093F\u0932\u093E\u0913\u0902 \u0915\u0947 \u0932\u093F\u090F \u090A\u0902\u091A\u093E\u0908 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0938\u094D\u0935\u0938\u094D\u0925 \u0935\u091C\u0928 \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E\u0913\u0902 \u0914\u0930 \u0939\u093E\u0907\u091F-\u0935\u0947\u091F \u091A\u093E\u0930\u094D\u091F \u0915\u0940 \u0938\u092E\u0940\u0915\u094D\u0937\u093E \u0915\u0930\u0947\u0902\u0964 WHO, CDC \u0914\u0930 \u0921\u093F\u0935\u093E\u0907\u0928 \u092B\u0949\u0930\u094D\u092E\u0942\u0932\u093E \u0915\u0947 \u0906\u0927\u093E\u0930 \u092A\u0930 \u0915\u093F\u0932\u094B\u0917\u094D\u0930\u093E\u092E (kg) \u0914\u0930 \u092A\u093E\u0909\u0902\u0921 (lbs) \u092E\u0947\u0902 \u0905\u092A\u0928\u0940 \u090A\u0902\u091A\u093E\u0908 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0906\u0926\u0930\u094D\u0936 \u0935\u091C\u0928 \u0916\u094B\u091C\u0947\u0902\u0964",
      "formulaTitle": "\u090A\u0902\u091A\u093E\u0908 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0938\u094D\u0935\u0938\u094D\u0925 \u0935\u091C\u0928 \u0915\u093E \u0917\u0923\u093F\u0924\u0940\u092F \u0938\u0942\u0924\u094D\u0930",
      "formulaDesc": "\u0928\u094D\u092F\u0942\u0928\u0924\u092E \u0938\u094D\u0935\u0938\u094D\u0925 \u0935\u091C\u0928 = 18.5 \xD7 [\u090A\u0902\u091A\u093E\u0908 (\u092E\u0940\u091F\u0930)]\xB2 | \u0905\u0927\u093F\u0915\u0924\u092E \u0938\u094D\u0935\u0938\u094D\u0925 \u0935\u091C\u0928 = 24.9 \xD7 [\u090A\u0902\u091A\u093E\u0908 (\u092E\u0940\u091F\u0930)]\xB2",
      "formulaCode": "Min (kg) = 18.5 \xD7 m\xB2  |  Max (kg) = 24.9 \xD7 m\xB2",
      "tableTitle": "\u092A\u0941\u0930\u0941\u0937\u094B\u0902 \u090F\u0935\u0902 \u092E\u0939\u093F\u0932\u093E\u0913\u0902 \u0915\u0947 \u0932\u093F\u090F \u0939\u093E\u0907\u091F-\u0935\u0947\u091F \u091A\u093E\u0930\u094D\u091F (\u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u0938\u094D\u0935\u0938\u094D\u0925 \u0935\u091C\u0928 \u0938\u0940\u092E\u093E)",
      "tableRows": [
        {
          "col1": "5 \u092B\u0940\u091F 0 \u0907\u0902\u091A (152 cm)",
          "col2": "42.8 \u2013 57.6 \u0915\u093F\u0917\u094D\u0930\u093E (94 \u2013 127 lbs)",
          "col3": "\u0906\u0926\u0930\u094D\u0936 \u0935\u091C\u0928: \u092A\u0941\u0930\u0941\u0937 ~50.0 kg | \u092E\u0939\u093F\u0932\u093E ~45.5 kg"
        },
        {
          "col1": "5 \u092B\u0940\u091F 2 \u0907\u0902\u091A (157 cm)",
          "col2": "45.6 \u2013 61.4 \u0915\u093F\u0917\u094D\u0930\u093E (100 \u2013 135 lbs)",
          "col3": "\u0906\u0926\u0930\u094D\u0936 \u0935\u091C\u0928: \u092A\u0941\u0930\u0941\u0937 ~54.6 kg | \u092E\u0939\u093F\u0932\u093E ~50.1 kg"
        },
        {
          "col1": "5 \u092B\u0940\u091F 4 \u0907\u0902\u091A (163 cm)",
          "col2": "49.2 \u2013 66.2 \u0915\u093F\u0917\u094D\u0930\u093E (108 \u2013 146 lbs)",
          "col3": "\u0906\u0926\u0930\u094D\u0936 \u0935\u091C\u0928: \u092A\u0941\u0930\u0941\u0937 ~59.2 kg | \u092E\u0939\u093F\u0932\u093E ~54.7 kg"
        },
        {
          "col1": "5 \u092B\u0940\u091F 6 \u0907\u0902\u091A (168 cm)",
          "col2": "52.2 \u2013 70.3 \u0915\u093F\u0917\u094D\u0930\u093E (115 \u2013 155 lbs)",
          "col3": "\u0906\u0926\u0930\u094D\u0936 \u0935\u091C\u0928: \u092A\u0941\u0930\u0941\u0937 ~63.8 kg | \u092E\u0939\u093F\u0932\u093E ~59.3 kg"
        },
        {
          "col1": "5 \u092B\u0940\u091F 8 \u0907\u0902\u091A (173 cm)",
          "col2": "55.4 \u2013 74.5 \u0915\u093F\u0917\u094D\u0930\u093E (122 \u2013 164 lbs)",
          "col3": "\u0906\u0926\u0930\u094D\u0936 \u0935\u091C\u0928: \u092A\u0941\u0930\u0941\u0937 ~68.4 kg | \u092E\u0939\u093F\u0932\u093E ~63.9 kg"
        },
        {
          "col1": "5 \u092B\u0940\u091F 10 \u0907\u0902\u091A (178 cm)",
          "col2": "58.6 \u2013 78.9 \u0915\u093F\u0917\u094D\u0930\u093E (129 \u2013 174 lbs)",
          "col3": "\u0906\u0926\u0930\u094D\u0936 \u0935\u091C\u0928: \u092A\u0941\u0930\u0941\u0937 ~73.0 kg | \u092E\u0939\u093F\u0932\u093E ~68.5 kg"
        },
        {
          "col1": "6 \u092B\u0940\u091F 0 \u0907\u0902\u091A (183 cm)",
          "col2": "62.0 \u2013 83.4 \u0915\u093F\u0917\u094D\u0930\u093E (136 \u2013 184 lbs)",
          "col3": "\u0906\u0926\u0930\u094D\u0936 \u0935\u091C\u0928: \u092A\u0941\u0930\u0941\u0937 ~77.6 kg | \u092E\u0939\u093F\u0932\u093E ~73.1 kg"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 8",
          "col2": "62.0 \u2013 83.4 kg (136 \u2013 184 lbs)",
          "col3": "\u0906\u0926\u0930\u094D\u0936 \u0921\u093F\u0935\u093E\u0907\u0928 \u0935\u091C\u0928: \u092A\u0941\u0930\u0941\u0937 ~77.6 kg | \u092E\u0939\u093F\u0932\u093E ~73.1 kg"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 9",
          "col2": "65.4 \u2013 88.0 kg (144 \u2013 194 lbs)",
          "col3": "\u0906\u0926\u0930\u094D\u0936 \u0921\u093F\u0935\u093E\u0907\u0928 \u0935\u091C\u0928: \u092A\u0941\u0930\u0941\u0937 ~82.2 kg | \u092E\u0939\u093F\u0932\u093E ~77.7 kg"
        }
      ],
      "faqs": [
        {
          "question": "\u092E\u0947\u0930\u0940 \u090A\u0902\u091A\u093E\u0908 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u092E\u0947\u0930\u093E \u0938\u094D\u0935\u0938\u094D\u0925 \u0935\u091C\u0928 \u0915\u094D\u092F\u093E \u0939\u094B\u0928\u093E \u091A\u093E\u0939\u093F\u090F?",
          "answer": "\u0906\u092A\u0915\u0940 \u090A\u0902\u091A\u093E\u0908 \u0915\u0947 \u0906\u0927\u093E\u0930 \u092A\u0930 18.5 \u0938\u0947 24.9 \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0940 \u0938\u0940\u092E\u093E \u0915\u0947 \u092C\u0940\u091A \u0915\u093E \u0935\u091C\u0928 \u0906\u092A\u0915\u093E \u0938\u094D\u0935\u0938\u094D\u0925 \u0935\u091C\u0928 \u0915\u094D\u0937\u0947\u0924\u094D\u0930 (Healthy Weight Range) \u0939\u0948\u0964"
        },
        {
          "question": "\u0921\u093F\u0935\u093E\u0907\u0928 \u0938\u0942\u0924\u094D\u0930 (Devine IBW) \u0915\u094D\u092F\u093E \u0939\u0948?",
          "answer": "\u0921\u093F\u0935\u093E\u0907\u0928 \u0938\u0942\u0924\u094D\u0930 \u090A\u0902\u091A\u093E\u0908 \u0915\u0947 \u0906\u0927\u093E\u0930 \u092A\u0930 \u0906\u0926\u0930\u094D\u0936 \u0936\u0930\u0940\u0930 \u0935\u091C\u0928 (Ideal Body Weight) \u0915\u093E \u0905\u0928\u0941\u092E\u093E\u0928 \u0932\u0917\u093E\u0928\u0947 \u0915\u093E \u090F\u0915 \u0938\u094D\u0925\u093E\u092A\u093F\u0924 \u0928\u0948\u0926\u093E\u0928\u093F\u0915 \u0938\u0942\u0924\u094D\u0930 \u0939\u0948\u0964"
        },
        {
          "question": "\u0915\u094D\u092F\u093E \u092A\u0941\u0930\u0941\u0937\u094B\u0902 \u0914\u0930 \u092E\u0939\u093F\u0932\u093E\u0913\u0902 \u0915\u0947 \u0932\u093F\u090F \u090A\u0902\u091A\u093E\u0908 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0935\u091C\u0928 \u0938\u0940\u092E\u093E \u0905\u0932\u0917 \u0939\u0948?",
          "answer": "\u092C\u0940\u090F\u092E\u0906\u0908 \u0930\u0947\u0902\u091C \u0938\u092E\u093E\u0928 \u0939\u094B\u0924\u0940 \u0939\u0948, \u0932\u0947\u0915\u093F\u0928 \u0921\u093F\u0935\u093E\u0907\u0928 \u0938\u0942\u0924\u094D\u0930 \u092A\u0941\u0930\u0941\u0937\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F 50 \u0915\u093F\u0917\u094D\u0930\u093E \u0914\u0930 \u092E\u0939\u093F\u0932\u093E\u0913\u0902 \u0915\u0947 \u0932\u093F\u090F 45.5 \u0915\u093F\u0917\u094D\u0930\u093E \u092C\u0947\u0938 (5 \u092B\u0940\u091F \u0938\u0947 \u090A\u092A\u0930) \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u090A\u0902\u091A\u093E\u0908 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0935\u091C\u0928 \u0915\u092E \u092F\u093E \u091C\u094D\u092F\u093E\u0926\u093E \u0939\u094B\u0928\u0947 \u092A\u0930 \u0915\u094D\u092F\u093E \u0915\u0930\u0947\u0902?",
          "answer": "\u092F\u0926\u093F \u0906\u092A\u0915\u093E \u0935\u091C\u0928 \u0938\u094D\u0935\u0938\u094D\u0925 \u0938\u0940\u092E\u093E \u0938\u0947 \u092C\u093E\u0939\u0930 \u0939\u0948, \u0924\u094B \u0906\u0939\u093E\u0930 \u0914\u0930 \u0936\u093E\u0930\u0940\u0930\u093F\u0915 \u0917\u0924\u093F\u0935\u093F\u0927\u093F \u0915\u0940 \u0938\u092E\u0940\u0915\u094D\u0937\u093E \u0915\u0930\u0915\u0947 \u0938\u0902\u0924\u0941\u0932\u093F\u0924 \u0932\u0915\u094D\u0937\u094D\u092F \u0928\u093F\u0930\u094D\u0927\u093E\u0930\u093F\u0924 \u0915\u0930\u0947\u0902\u0964"
        },
        {
          "question": "\u0915\u094D\u092F\u093E \u0939\u0921\u094D\u0921\u093F\u092F\u094B\u0902 \u0915\u0947 \u0922\u093E\u0902\u091A\u0947 (Frame Size) \u0915\u093E \u0935\u091C\u0928 \u092A\u0930 \u0905\u0938\u0930 \u092A\u0921\u093C\u0924\u093E \u0939\u0948?",
          "answer": "\u0939\u093E\u0901, \u092C\u0921\u093C\u0947 \u092B\u094D\u0930\u0947\u092E \u0935\u093E\u0932\u0947 \u0935\u094D\u092F\u0915\u094D\u0924\u093F\u092F\u094B\u0902 \u0915\u093E \u0938\u094D\u0935\u0938\u094D\u0925 \u0935\u091C\u0928 \u0938\u0940\u092E\u093E \u0915\u0947 \u090A\u092A\u0930\u0940 \u091B\u094B\u0930 \u092A\u0930 \u0939\u094B\u0928\u093E \u0938\u094D\u0935\u093E\u092D\u093E\u0935\u093F\u0915 \u0939\u094B \u0938\u0915\u0924\u093E \u0939\u0948\u0964"
        }
      ]
    }
  },
  "diabetes-risk-calculator": {
    "en": {
      "eyebrow": "WHO Asian Regional Guidance",
      "title": "Asian BMI Reference Calculator \u2014 BMI 23 Threshold",
      "intro": "Calculate BMI using commonly referenced Asian-population BMI thresholds and waist measurements. Results provide population-level reference context and are not a diabetes diagnosis.",
      "formulaTitle": "WHO Asian BMI Reference Criteria & Waist Thresholds",
      "formulaDesc": "Asian Overweight Reference Threshold: BMI \u2265 23.0 kg/m\xB2 | Asian Obesity Reference Threshold: BMI \u2265 27.5 kg/m\xB2 | Asian Waist Screening Reference: Men \u2265 90 cm, Women \u2265 80 cm",
      "formulaCode": "Asian Overweight: BMI 23.0 - 27.4 | Asian Obesity: BMI \u2265 27.5",
      "tableTitle": "WHO Asian BMI Reference Matrix vs Western Baseline",
      "tableRows": [
        {
          "col1": "Underweight",
          "col2": "BMI < 18.5 kg/m\xB2",
          "col3": ""
        },
        {
          "col1": "Standard Reference Weight",
          "col2": "BMI 18.5 \u2013 22.9 kg/m\xB2",
          "col3": ""
        },
        {
          "col1": "Asian Overweight Reference Threshold (23)",
          "col2": "BMI 23.0 \u2013 27.4 kg/m\xB2",
          "col3": ""
        },
        {
          "col1": "Asian Obesity Class I",
          "col2": "BMI 27.5 \u2013 32.4 kg/m\xB2",
          "col3": ""
        },
        {
          "col1": "Asian Obesity Class II",
          "col2": "BMI \u2265 32.5 kg/m\xB2",
          "col3": ""
        }
      ],
      "faqs": [
        {
          "question": "What is the Asian BMI Cutoff Calculator 23?",
          "answer": "The Asian BMI Cutoff Calculator 23 is a health screening reference tool aligned with WHO reference guidelines. It provides reference context for the lower BMI thresholds often applied in Asian population health studies."
        },
        {
          "question": "\xBFPor qu\xE9 el umbral de referencia del IMC asi\xE1tico es de 23 kg/m\xB2 en lugar de 25 kg/m\xB2?",
          "answer": "World Health Organization (WHO) epidemiological studies observed that Asian populations often exhibit higher percentages of body fat at lower BMI values compared to European populations, prompting the use of 23.0 kg/m\xB2 as a screening reference threshold."
        },
        {
          "question": "How is the Asian BMI threshold of 23 kg/m\xB2 evaluated?",
          "answer": "Divide your weight in kg by your height in meters squared. A score of 23.0 kg/m\xB2 or higher indicates the Asian overweight reference threshold, providing educational screening context."
        },
        {
          "question": "\xBFQu\xE9 umbrales de circunferencia de cintura se aplican a las poblaciones asi\xE1ticas?",
          "answer": "According to International Diabetes Federation (IDF) reference standards, abdominal waist circumference screening thresholds f\xFCr asiatische Erwachsene are 90 cm (35 inches) for men and 80 cm (31.5 inches) for women."
        },
        {
          "question": "\xBFQu\xE9 debo hacer si mi puntuaci\xF3n de IMC es de 23 o superior?",
          "answer": "A BMI score of 23.0 to 27.4 falls within the Asian overweight reference range. Because BMI is a screening metric, consult a qualified healthcare provider for personalized medical evaluation."
        }
      ]
    },
    "es": {
      "eyebrow": "Est\xE1ndares de Referencia de Salud",
      "title": "Calculadora de IMC Asi\xE1tico \u2014 Umbral IMC 23",
      "intro": "Herramienta de c\xE1lculo y referencia educativa dise\xF1ada seg\xFAn los est\xE1ndares de salud publicados de la OMS y CDC. Calcula tus m\xE9tricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "F\xF3rmula de Referencia Est\xE1ndar",
      "formulaDesc": "Calculado utilizando ecuaciones est\xE1ndar validadas.",
      "formulaCode": "Asian Overweight: BMI 23.0 - 27.4 | Asian Obesity: BMI \u2265 27.5",
      "tableTitle": "Tabla de Referencia Est\xE1ndar",
      "tableRows": [
        {
          "col1": "Categor\xEDa / Nivel 1",
          "col2": "BMI < 18.5 kg/m\xB2",
          "col3": "Rango de referencia "
        },
        {
          "col1": "Categor\xEDa / Nivel 2",
          "col2": "BMI 18.5 \u2013 22.9 kg/m\xB2",
          "col3": "Rango de referencia "
        },
        {
          "col1": "Categor\xEDa / Nivel 3",
          "col2": "BMI 23.0 \u2013 27.4 kg/m\xB2",
          "col3": "Rango de referencia "
        },
        {
          "col1": "Categor\xEDa / Nivel 4",
          "col2": "BMI 27.5 \u2013 32.4 kg/m\xB2",
          "col3": "Rango de referencia "
        },
        {
          "col1": "Categor\xEDa / Nivel 5",
          "col2": "BMI \u2265 32.5 kg/m\xB2",
          "col3": "Rango de referencia "
        }
      ],
      "faqs": [
        {
          "question": "\xBFC\xF3mo funciona la calculadora de riesgo de diabetes y qu\xE9 mide?",
          "answer": "Esta calculadora eval\xFAa tus datos personales utilizando ecuaciones validadas. Proporciona una estimaci\xF3n educativa para ayudarte a comprender tu estado de salud y referencias est\xE1ndar."
        },
        {
          "question": "Por qu\xE9 es the Asian BMI reference cutoff set at 23 kg/m\xB2 instead of 25 kg/m\xB2?",
          "answer": "World Health Organization (WHO) epidemiological studies observed that Asian populations often exhibit higher percentages of body fat at lower BMI values compared to European populations, prompting the use of 23.0 kg/m\xB2 as a screening reference threshold."
        },
        {
          "question": "\xBFC\xF3mo se eval\xFAa el umbral de IMC asi\xE1tico de 23 kg/m\xB2?",
          "answer": "Divide your weight in kg by your height in meters squared. A score of 23.0 kg/m\xB2 or higher indicates the Asian overweight reference threshold, providing educational screening context."
        },
        {
          "question": "Quels seuils de tour de taille s'appliquent aux populations asiatiques?",
          "answer": "According to International Diabetes Federation (IDF) reference standards, abdominal waist circumference screening thresholds f\xFCr asiatische Erwachsene are 90 cm (35 inches) for men and 80 cm (31.5 inches) for women."
        },
        {
          "question": "\xBFQu\xE9 debo hacer si mi puntuaci\xF3n de IMC es de 23 o superior?",
          "answer": "A BMI score of 23.0 to 27.4 falls within the Asian overweight reference range. Because BMI is a screening metric, consult a qualified healthcare provider for personalized medical evaluation."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de R\xE9f\xE9rence de Sant\xE9",
      "title": "Calculateur d'IMC Asiatique \u2014 Seuil IMC 23",
      "intro": "Outil de calcul et de r\xE9f\xE9rence \xE9ducatif con\xE7u selon les normes de sant\xE9 publi\xE9es de l'OMS et du CDC. Calculez vos m\xE9triques et consultez les plages de r\xE9f\xE9rence.",
      "formulaTitle": "Formule de R\xE9f\xE9rence Standard",
      "formulaDesc": "Calcul\xE9 \xE0 l'aide d'\xE9quations standards valid\xE9es.",
      "formulaCode": "Asian Overweight: BMI 23.0 - 27.4 | Asian Obesity: BMI \u2265 27.5",
      "tableTitle": "Tableau de R\xE9f\xE9rence Standard",
      "tableRows": [
        {
          "col1": "Cat\xE9gorie / Niveau 1",
          "col2": "BMI < 18.5 kg/m\xB2",
          "col3": "Plage de r\xE9f\xE9rence "
        },
        {
          "col1": "Cat\xE9gorie / Niveau 2",
          "col2": "BMI 18.5 \u2013 22.9 kg/m\xB2",
          "col3": "Plage de r\xE9f\xE9rence "
        },
        {
          "col1": "Cat\xE9gorie / Niveau 3",
          "col2": "BMI 23.0 \u2013 27.4 kg/m\xB2",
          "col3": "Plage de r\xE9f\xE9rence "
        },
        {
          "col1": "Cat\xE9gorie / Niveau 4",
          "col2": "BMI 27.5 \u2013 32.4 kg/m\xB2",
          "col3": "Plage de r\xE9f\xE9rence "
        },
        {
          "col1": "Cat\xE9gorie / Niveau 5",
          "col2": "BMI \u2265 32.5 kg/m\xB2",
          "col3": "Plage de r\xE9f\xE9rence "
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de risque de diab\xE8te et que mesure-t-il ?",
          "answer": "Ce calculateur \xE9value vos donn\xE9es personnelles \xE0 l'aide d'\xE9quations valid\xE9es. Il fournit une estimation \xE9ducative pour vous aider \xE0 comprendre vos m\xE9triques et r\xE9f\xE9rences standards."
        },
        {
          "question": "Pourquoi the Asian BMI reference cutoff set at 23 kg/m\xB2 instead of 25 kg/m\xB2?",
          "answer": "World Health Organization (WHO) epidemiological studies observed that Asian populations often exhibit higher percentages of body fat at lower BMI values compared to European populations, prompting the use of 23.0 kg/m\xB2 as a screening reference threshold."
        },
        {
          "question": "Comment le seuil d'IMC asiatique de 23 kg/m\xB2 est-il \xE9valu\xE9?",
          "answer": "Divide your weight in kg by your height in meters squared. A score of 23.0 kg/m\xB2 or higher indicates the Asian overweight reference threshold, providing educational screening context."
        },
        {
          "question": "Welche Taillenumfang-Grenzwerte gelten f\xFCr asiatische Bev\xF6lkerungsgruppen?",
          "answer": "According to International Diabetes Federation (IDF) reference standards, abdominal waist circumference screening thresholds f\xFCr asiatische Erwachsene are 90 cm (35 inches) for men and 80 cm (31.5 inches) for women."
        },
        {
          "question": "\xBFQu\xE9 debo hacer si mi puntuaci\xF3n de IMC es de 23 o superior?",
          "answer": "A BMI score of 23.0 to 27.4 falls within the Asian overweight reference range. Because BMI is a screening metric, consult a qualified healthcare provider for personalized medical evaluation."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "Asiatischer BMI-Rechner \u2014 BMI 23 Schwellenwert",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den ver\xF6ffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und pr\xFCfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardm\xE4\xDFig validierten Gleichungen.",
      "formulaCode": "Asian Overweight: BMI 23.0 - 27.4 | Asian Obesity: BMI \u2265 27.5",
      "tableTitle": "Standard-Referenztabelle",
      "tableRows": [
        {
          "col1": "Kategorie / Stufe 1",
          "col2": "BMI < 18.5 kg/m\xB2",
          "col3": "Referenzbereich "
        },
        {
          "col1": "Kategorie / Stufe 2",
          "col2": "BMI 18.5 \u2013 22.9 kg/m\xB2",
          "col3": "Referenzbereich "
        },
        {
          "col1": "Kategorie / Stufe 3",
          "col2": "BMI 23.0 \u2013 27.4 kg/m\xB2",
          "col3": "Referenzbereich "
        },
        {
          "col1": "Kategorie / Stufe 4",
          "col2": "BMI 27.5 \u2013 32.4 kg/m\xB2",
          "col3": "Referenzbereich "
        },
        {
          "col1": "Kategorie / Stufe 5",
          "col2": "BMI \u2265 32.5 kg/m\xB2",
          "col3": "Referenzbereich "
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der Diabetes-Risiko-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre pers\xF6nlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        },
        {
          "question": "Warum ist the Asian BMI reference cutoff set at 23 kg/m\xB2 instead of 25 kg/m\xB2?",
          "answer": "World Health Organization (WHO) epidemiological studies observed that Asian populations often exhibit higher percentages of body fat at lower BMI values compared to European populations, prompting the use of 23.0 kg/m\xB2 as a screening reference threshold."
        },
        {
          "question": "Wie wird der asiatische BMI-Schwellenwert von 23 kg/m\xB2 bewertet?",
          "answer": "Divide your weight in kg by your height in meters squared. A score of 23.0 kg/m\xB2 or higher indicates the Asian overweight reference threshold, providing educational screening context."
        },
        {
          "question": "Welche Taillenumfang-Grenzwerte gelten f\xFCr asiatische Bev\xF6lkerungsgruppen?",
          "answer": "According to International Diabetes Federation (IDF) reference standards, abdominal waist circumference screening thresholds f\xFCr asiatische Erwachsene are 90 cm (35 inches) for men and 80 cm (31.5 inches) for women."
        },
        {
          "question": "\xBFQu\xE9 debo hacer si mi puntuaci\xF3n de IMC es de 23 o superior?",
          "answer": "A BMI score of 23.0 to 27.4 falls within the Asian overweight reference range. Because BMI is a screening metric, consult a qualified healthcare provider for personalized medical evaluation."
        }
      ]
    },
    "ko": {
      "eyebrow": "\uAC74\uAC15 \uCC38\uC870 \uD45C\uC900 \uC9C0\uCE68",
      "title": "\uC544\uC2DC\uC544 \uAE30\uC900 BMI \uACC4\uC0B0\uAE30 \u2014 BMI 23 \uC784\uACC4\uAC12",
      "intro": "WHO \uBC0F CDC \uC9C0\uCE68\uC5D0 \uAE30\uBC18\uD55C \uC2E4\uC2DC\uAC04 \uCC38\uACE0 \uACC4\uC0B0\uAE30\uC785\uB2C8\uB2E4. \uAC1C\uC778\uBCC4 \uC218\uCE58\uB97C \uCE21\uC815\uD558\uACE0 \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uD655\uC778\uD558\uC138\uC694.",
      "formulaTitle": "\uD45C\uC900 \uACC4\uC0B0 \uACF5\uC2DD",
      "formulaDesc": "\uAC80\uC99D\uB41C \uD45C\uC900 \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uACC4\uC0B0\uB429\uB2C8\uB2E4.",
      "formulaCode": "Asian Overweight: BMI 23.0 - 27.4 | Asian Obesity: BMI \u2265 27.5",
      "tableTitle": "\uD45C\uC900 \uCC38\uC870 \uC9C4\uB2E8\uD45C",
      "tableRows": [
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 1",
          "col2": "BMI < 18.5 kg/m\xB2",
          "col3": "\uCC38\uC870 \uBC94\uC704 "
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 2",
          "col2": "BMI 18.5 \u2013 22.9 kg/m\xB2",
          "col3": "\uCC38\uC870 \uBC94\uC704 "
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 3",
          "col2": "BMI 23.0 \u2013 27.4 kg/m\xB2",
          "col3": "\uCC38\uC870 \uBC94\uC704 "
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 4",
          "col2": "BMI 27.5 \u2013 32.4 kg/m\xB2",
          "col3": "\uCC38\uC870 \uBC94\uC704 "
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 5",
          "col2": "BMI \u2265 32.5 kg/m\xB2",
          "col3": "\uCC38\uC870 \uBC94\uC704 "
        }
      ],
      "faqs": [
        {
          "question": "\uB2F9\uB1E8 \uC704\uD5D8 \uD3C9\uAC00 \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uBCF8 \uACC4\uC0B0\uAE30\uB294 \uAC80\uC99D\uB41C \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uAC1C\uC778\uBCC4 \uC2E0\uCCB4 \uC9C0\uC218\uB97C \uC0B0\uCD9C\uD569\uB2C8\uB2E4. \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uBC14\uD0D5\uC73C\uB85C \uAD50\uC721\uC801 \uBD84\uC11D \uACB0\uACFC\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."
        },
        {
          "question": "\xBFPor qu\xE9 el umbral de referencia del IMC asi\xE1tico es de 23 kg/m\xB2 en lugar de 25 kg/m\xB2? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "World Health Organization (WHO) epidemiological studies observed that Asian populations often exhibit higher percentages of body fat at lower BMI values compared to European populations, prompting the use of 23.0 kg/m\xB2 as a screening reference threshold."
        },
        {
          "question": "\uC544\uC2DC\uC544\uC778 BMI \uAE30\uC900 23 kg/m\xB2 \uC784\uACC4\uAC12\uC740 \uC5B4\uB5BB\uAC8C \uD3C9\uAC00\uB418\uB098\uC694?",
          "answer": "Divide your weight in kg by your height in meters squared. A score of 23.0 kg/m\xB2 or higher indicates the Asian overweight reference threshold, providing educational screening context."
        },
        {
          "question": "\uC544\uC2DC\uC544\uC778\uC5D0\uAC8C \uC801\uC6A9\uB418\uB294 \uD5C8\uB9AC\uB458\uB808 \uC120\uBCC4 \uC784\uACC4\uAC12\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "According to International Diabetes Federation (IDF) reference standards, abdominal waist circumference screening thresholds f\xFCr asiatische Erwachsene are 90 cm (35 inches) for men and 80 cm (31.5 inches) for women."
        },
        {
          "question": "\xBFQu\xE9 debo hacer si mi puntuaci\xF3n de IMC es de 23 o superior? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "A BMI score of 23.0 to 27.4 falls within the Asian overweight reference range. Because BMI is a screening metric, consult a qualified healthcare provider for personalized medical evaluation."
        }
      ]
    },
    "hi": {
      "eyebrow": "\u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0938\u0902\u0926\u0930\u094D\u092D \u092E\u093E\u0928\u0915",
      "title": "\u090F\u0936\u093F\u092F\u093E\u0908 \u092C\u0940\u090F\u092E\u0906\u0908 \u0938\u0902\u0926\u0930\u094D\u092D \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u2014 23 kg/m\xB2 \u0915\u091F\u0911\u092B",
      "intro": "\u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u0914\u0930 \u0938\u0940\u0921\u0940\u0938\u0940 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u092E\u093E\u0928\u0915\u094B\u0902 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0928\u093F\u0930\u094D\u092E\u093F\u0924 \u0938\u0902\u0926\u0930\u094D\u092D \u091F\u0942\u0932\u0964 \u0905\u092A\u0928\u0940 \u092E\u0947\u091F\u094D\u0930\u093F\u0915\u094D\u0938 \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902 \u0914\u0930 \u0938\u094D\u0925\u093E\u092A\u093F\u0924 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0938\u0940\u092E\u093E\u0913\u0902 \u0915\u0940 \u0938\u092E\u0940\u0915\u094D\u0937\u093E \u0915\u0930\u0947\u0902\u0964",
      "formulaTitle": "\u092E\u093E\u0928\u0915 \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0942\u0924\u094D\u0930",
      "formulaDesc": "\u092E\u093E\u0928\u0915 \u0938\u0924\u094D\u092F\u093E\u092A\u093F\u0924 \u0938\u092E\u0940\u0915\u0930\u0923\u094B\u0902 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0915\u0947 \u0917\u0923\u0928\u093E \u0915\u0940 \u0917\u0908\u0964",
      "formulaCode": "Asian Overweight: BMI 23.0 - 27.4 | Asian Obesity: BMI \u2265 27.5",
      "tableTitle": "\u092E\u093E\u0928\u0915 \u0938\u0902\u0926\u0930\u094D\u092D \u0924\u093E\u0932\u093F\u0915\u093E",
      "tableRows": [
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 1",
          "col2": "BMI < 18.5 kg/m\xB2",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E "
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 2",
          "col2": "BMI 18.5 \u2013 22.9 kg/m\xB2",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E "
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 3",
          "col2": "BMI 23.0 \u2013 27.4 kg/m\xB2",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E "
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 4",
          "col2": "BMI 27.5 \u2013 32.4 kg/m\xB2",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E "
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 5",
          "col2": "BMI \u2265 32.5 kg/m\xB2",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E "
        }
      ],
      "faqs": [
        {
          "question": "\u092C\u0940\u090F\u092E\u0906\u0908 \u0914\u0930 \u091F\u093E\u0907\u092A 2 \u092E\u0927\u0941\u092E\u0947\u0939 \u091C\u094B\u0916\u093F\u092E \u092E\u0947\u0902 \u0915\u094D\u092F\u093E \u0938\u0902\u092C\u0902\u0927 \u0939\u0948?",
          "answer": "\u092C\u0922\u093C\u093E \u0939\u0941\u0906 \u092C\u0940\u090F\u092E\u0906\u0908 (\u0935\u093F\u0936\u0947\u0937\u0915\u0930 \u090F\u0936\u093F\u092F\u093E\u0908 \u0906\u092C\u093E\u0926\u0940 \u092E\u0947\u0902 \u226523.0 kg/m\xB2) \u0907\u0902\u0938\u0941\u0932\u093F\u0928 \u092A\u094D\u0930\u0924\u093F\u0930\u094B\u0927 \u0914\u0930 \u092E\u0927\u0941\u092E\u0947\u0939 \u091C\u094B\u0916\u093F\u092E \u0915\u0947 \u0909\u091A\u094D\u091A \u0938\u0902\u0915\u0947\u0924\u0915\u094B\u0902 \u0938\u0947 \u091C\u0941\u0921\u093C\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u0915\u092E\u0930 \u0915\u0940 \u092E\u093E\u092A \u092E\u0927\u0941\u092E\u0947\u0939 \u0915\u0947 \u091C\u094B\u0916\u093F\u092E \u0915\u094B \u0915\u0948\u0938\u0947 \u0926\u0930\u094D\u0936\u093E\u0924\u0940 \u0939\u0948?",
          "answer": "\u0915\u092E\u0930 \u0915\u0947 \u0906\u0938\u092A\u093E\u0938 \u0935\u093F\u0938\u0930\u0932 \u0935\u0938\u093E (Visceral Fat) \u0915\u093E \u091C\u092E\u093E\u0935 \u0907\u0902\u0938\u0941\u0932\u093F\u0928 \u0938\u0902\u0935\u0947\u0926\u0928\u0936\u0940\u0932\u0924\u093E \u0915\u094B \u092A\u094D\u0930\u092D\u093E\u0935\u093F\u0924 \u0915\u0930\u0928\u0947 \u0935\u093E\u0932\u093E \u092E\u0941\u0916\u094D\u092F \u0915\u093E\u0930\u0915 \u0939\u0948\u0964"
        },
        {
          "question": "\u092F\u0939 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u0915\u093F\u0928 \u091C\u094B\u0916\u093F\u092E \u0936\u094D\u0930\u0947\u0923\u093F\u092F\u094B\u0902 \u0915\u093E \u092E\u0942\u0932\u094D\u092F\u093E\u0902\u0915\u0928 \u0915\u0930\u0924\u093E \u0939\u0948?",
          "answer": "\u092F\u0939 \u092C\u0940\u090F\u092E\u0906\u0908, \u0915\u092E\u0930 \u0915\u0940 \u092E\u093E\u092A \u0914\u0930 \u0909\u092E\u094D\u0930 \u0915\u093E \u0938\u0902\u092F\u094B\u091C\u0928 \u0915\u0930\u0915\u0947 \u092E\u093E\u0928\u0915 \u0938\u0902\u0926\u0930\u094D\u092D, \u092E\u0927\u094D\u092F\u092E \u0938\u0940\u092E\u093E \u0914\u0930 \u0909\u091A\u094D\u091A \u091C\u094B\u0916\u093F\u092E \u0938\u0940\u092E\u093E \u0926\u093F\u0916\u093E\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u090F\u0936\u093F\u092F\u093E\u0908 \u0932\u094B\u0917\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u092E\u0927\u0941\u092E\u0947\u0939 \u091C\u094B\u0916\u093F\u092E \u0915\u091F\u0911\u092B \u0915\u092E \u0915\u094D\u092F\u094B\u0902 \u0939\u0948?",
          "answer": "\u090F\u0936\u093F\u092F\u093E\u0908 \u0906\u092C\u093E\u0926\u0940 \u092E\u0947\u0902 \u0915\u092E \u092C\u0940\u090F\u092E\u0906\u0908 \u092A\u0930 \u092D\u0940 \u092A\u0947\u091F \u0915\u0940 \u0935\u0938\u093E \u0905\u0927\u093F\u0915 \u0939\u094B\u0928\u0947 \u0915\u0947 \u0915\u093E\u0930\u0923 \u090F\u0921\u093E (ADA) \u0914\u0930 \u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u0915\u092E \u0915\u091F\u0911\u092B \u0915\u0940 \u0938\u093F\u092B\u093E\u0930\u093F\u0936 \u0915\u0930\u0924\u0947 \u0939\u0948\u0902\u0964"
        },
        {
          "question": "\u0915\u094D\u092F\u093E \u092F\u0939 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u0915\u094B\u0908 \u092E\u0947\u0921\u093F\u0915\u0932 \u0921\u093E\u092F\u0917\u094D\u0928\u094B\u0938\u093F\u0938 \u092A\u094D\u0930\u0926\u093E\u0928 \u0915\u0930\u0924\u093E \u0939\u0948?",
          "answer": "\u0928\u0939\u0940\u0902, \u092F\u0939 \u090F\u0915 \u0936\u0948\u0915\u094D\u0937\u0923\u093F\u0915 \u0938\u094D\u0915\u094D\u0930\u0940\u0928\u093F\u0902\u0917 \u091F\u0942\u0932 \u0939\u0948\u0964 \u0915\u093F\u0938\u0940 \u092D\u0940 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u091C\u093E\u0902\u091A \u0915\u0947 \u0932\u093F\u090F \u091A\u093F\u0915\u093F\u0924\u094D\u0938\u0915 \u0938\u0947 \u092A\u0930\u093E\u092E\u0930\u094D\u0936 \u0932\u0947\u0902\u0964"
        }
      ]
    }
  },
  "asian-bmi-calculator": {
    "en": {
      "eyebrow": "WHO Asia-Pacific Guidelines",
      "title": "Asian BMI Calculator \u2013 WHO Asian Cutoff Reference Standards",
      "intro": "Free online Asian BMI Calculator designed specifically for individuals of Asian descent based on official WHO Expert Consultation reference standards. The World Health Organization established lower BMI cutoffs for Asian populations (Overweight at 23.0 kg/m\xB2, Obese at 27.5 kg/m\xB2) because Asians experience higher body fat percentages and metabolic health risks at lower BMI values than Western populations.",
      "formulaTitle": "WHO Asian BMI Formula (kg & cm / lbs & in)",
      "formulaDesc": "Metric: BMI = Weight (kg) / [Height (m)]\xB2 | Asian Overweight Cutoff: BMI \u2265 23.0 kg/m\xB2 | Asian Obese Cutoff: BMI \u2265 27.5 kg/m\xB2",
      "formulaCode": "Asian BMI = kg / m\xB2",
      "tableTitle": "WHO Asia-Pacific Adult BMI Scale & Classification Matrix",
      "tableRows": [
        {
          "col1": "Underweight",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "Underweight guidance threshold (< 18.5 kg/m\xB2)"
        },
        {
          "col1": "Normal Healthy Weight (Asian)",
          "col2": "18.5 \u2013 22.9 kg/m\xB2",
          "col3": "Healthy weight window for Asian men & women"
        },
        {
          "col1": "Overweight / Increased Risk",
          "col2": "23.0 \u2013 27.4 kg/m\xB2",
          "col3": "Action threshold for Asian population screening"
        },
        {
          "col1": "Obese (High Risk)",
          "col2": "\u2265 27.5 kg/m\xB2",
          "col3": "High risk obesity classification for Asian adults"
        }
      ],
      "faqs": [
        {
          "question": "Why is there a separate Asian BMI calculator?",
          "answer": "The World Health Organization (WHO) created Asian-specific BMI reference thresholds because research showed Asian individuals accumulate more body fat and face higher risks of type 2 diabetes and heart disease at lower BMI levels than Caucasians."
        },
        {
          "question": "What is a normal BMI for Asian adults?",
          "answer": "For Asian adults, a normal healthy BMI ranges from 18.5 to 22.9 kg/m\xB2."
        },
        {
          "question": "What BMI is considered overweight for Asian populations?",
          "answer": "Under WHO Asia-Pacific criteria, a BMI of 23.0 kg/m\xB2 or higher is considered overweight."
        }
      ]
    },
    "es": {
      "eyebrow": "Est\xE1ndares de Referencia de Salud",
      "title": "Calculadora de IMC Asi\xE1tico \u2013 Est\xE1ndares de Referencia OMS Asia \u2013 Gu\xEDa y Calculadora",
      "intro": "Herramienta de c\xE1lculo y referencia educativa dise\xF1ada seg\xFAn los est\xE1ndares de salud publicados de la OMS y CDC. Calcula tus m\xE9tricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "F\xF3rmula de Referencia Est\xE1ndar",
      "formulaDesc": "Calculado utilizando ecuaciones est\xE1ndar validadas.",
      "formulaCode": "Asian BMI = kg / m\xB2",
      "tableTitle": "Tabla de Referencia Est\xE1ndar",
      "tableRows": [
        {
          "col1": "Categor\xEDa / Nivel 1",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "Rango de referencia de peso bajo"
        },
        {
          "col1": "Categor\xEDa / Nivel 2",
          "col2": "18.5 \u2013 22.9 kg/m\xB2",
          "col3": "Rango saludable de referencia para la poblaci\xF3n asi\xE1tica"
        },
        {
          "col1": "Categor\xEDa / Nivel 3",
          "col2": "23.0 \u2013 27.4 kg/m\xB2",
          "col3": "L\xEDmite de acci\xF3n y riesgo elevado en poblaci\xF3n asi\xE1tica"
        },
        {
          "col1": "Categor\xEDa / Nivel 4",
          "col2": "\u2265 27.5 kg/m\xB2",
          "col3": "Clasificaci\xF3n de alto riesgo de obesidad en poblaci\xF3n asi\xE1tica"
        }
      ],
      "faqs": [
        {
          "question": "\xBFC\xF3mo funciona la calculadora de IMC asi\xE1tico y qu\xE9 mide?",
          "answer": "Esta calculadora eval\xFAa tus datos personales utilizando ecuaciones validadas. Proporciona una estimaci\xF3n educativa para ayudarte a comprender tu estado de salud y referencias est\xE1ndar."
        },
        {
          "question": "\xBFCu\xE1l es el IMC normal para los adultos asi\xE1ticos?",
          "answer": "Para los adultos asi\xE1ticos, un IMC normal y saludable se sit\xFAa entre 18.5 y 22.9 kg/m\xB2."
        },
        {
          "question": "\xBFQu\xE9 IMC se considera sobrepeso para las poblaciones asi\xE1ticas?",
          "answer": "Seg\xFAn los criterios de la OMS para Asia-Pac\xEDfico, un IMC de 23.0 kg/m\xB2 o superior se considera sobrepeso."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de R\xE9f\xE9rence de Sant\xE9",
      "title": "Calculateur d'IMC Asiatique \u2013 Normes de R\xE9f\xE9rence OMS Asie \u2013 Outil de R\xE9f\xE9rence",
      "intro": "Outil de calcul et de r\xE9f\xE9rence \xE9ducatif con\xE7u selon les normes de sant\xE9 publi\xE9es de l'OMS et du CDC. Calculez vos m\xE9triques et consultez les plages de r\xE9f\xE9rence.",
      "formulaTitle": "Formule de R\xE9f\xE9rence Standard",
      "formulaDesc": "Calcul\xE9 \xE0 l'aide d'\xE9quations standards valid\xE9es.",
      "formulaCode": "Asian BMI = kg / m\xB2",
      "tableTitle": "Tableau de R\xE9f\xE9rence Standard",
      "tableRows": [
        {
          "col1": "Cat\xE9gorie / Niveau 1",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "Plage de r\xE9f\xE9rence de sous-poids"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 2",
          "col2": "18.5 \u2013 22.9 kg/m\xB2",
          "col3": "Plage de poids sant\xE9 de r\xE9f\xE9rence pour la population asiatique"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 3",
          "col2": "23.0 \u2013 27.4 kg/m\xB2",
          "col3": "Seuil d'action et de risque \xE9lev\xE9 pour la population asiatique"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 4",
          "col2": "\u2265 27.5 kg/m\xB2",
          "col3": "Classification d'ob\xE9sit\xE9 \xE0 haut risque pour la population asiatique"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur d'IMC asiatique et que mesure-t-il ?",
          "answer": "Ce calculateur \xE9value vos donn\xE9es personnelles \xE0 l'aide d'\xE9quations valid\xE9es. Il fournit une estimation \xE9ducative pour vous aider \xE0 comprendre vos m\xE9triques et r\xE9f\xE9rences standards."
        },
        {
          "question": "Quel est l'IMC normal pour les adultes asiatiques ?",
          "answer": "Pour les adultes asiatiques, un IMC normal et sain se situe entre 18,5 et 22,9 kg/m\xB2."
        },
        {
          "question": "Quel IMC est consid\xE9r\xE9 comme un surpoids pour les populations asiatiques ?",
          "answer": "Selon les crit\xE8res de l'OMS pour l'Asie-Pacifique, un IMC \xE9gal ou sup\xE9rieur \xE0 23,0 kg/m\xB2 est consid\xE9r\xE9 comme un surpoids."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "Asiatischer BMI Rechner \u2013 WHO Asien-Referenzstandards \u2013 Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den ver\xF6ffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und pr\xFCfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardm\xE4\xDFig validierten Gleichungen.",
      "formulaCode": "Asian BMI = kg / m\xB2",
      "tableTitle": "Standard-Referenztabelle",
      "tableRows": [
        {
          "col1": "Kategorie / Stufe 1",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "Referenzbereich f\xFCr Untergewicht"
        },
        {
          "col1": "Kategorie / Stufe 2",
          "col2": "18.5 \u2013 22.9 kg/m\xB2",
          "col3": "Referenzbereich f\xFCr gesundes Gewicht bei asiatischen Erwachsenen"
        },
        {
          "col1": "Kategorie / Stufe 3",
          "col2": "23.0 \u2013 27.4 kg/m\xB2",
          "col3": "Aktionsgrenzwert f\xFCr asiatische Bev\xF6lkerungsgruppen"
        },
        {
          "col1": "Kategorie / Stufe 4",
          "col2": "\u2265 27.5 kg/m\xB2",
          "col3": "Klassifizierung f\xFCr hohes Adipositas-Risiko"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der Rechner f\xFCr asiatischen BMI und was misst er?",
          "answer": "Dieser Rechner wertet Ihre pers\xF6nlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        },
        {
          "question": "Was ist ein normaler BMI f\xFCr asiatische Erwachsene?",
          "answer": "F\xFCr asiatische Erwachsene liegt ein normaler gesunder BMI-Bereich zwischen 18,5 und 22,9 kg/m\xB2."
        },
        {
          "question": "Ab welchem BMI gilt man in asiatischen Populationen als \xFCbergewichtig?",
          "answer": "Nach den Asien-Pazifik-Kriterien der WHO gilt ein BMI von 23,0 kg/m\xB2 oder h\xF6her als \xDCbergewicht."
        }
      ]
    },
    "ko": {
      "eyebrow": "\uAC74\uAC15 \uCC38\uC870 \uD45C\uC900 \uC9C0\uCE68",
      "title": "\uC544\uC2DC\uC544\uC778 \uC804\uC6A9 BMI \uACC4\uC0B0\uAE30 \u2013 WHO \uC544\uC2DC\uC544 \uACF5\uC911\uBCF4\uAC74 \uCC38\uC870 \uAE30\uC900",
      "intro": "WHO \uBC0F CDC \uC9C0\uCE68\uC5D0 \uAE30\uBC18\uD55C \uC2E4\uC2DC\uAC04 \uCC38\uACE0 \uACC4\uC0B0\uAE30\uC785\uB2C8\uB2E4. \uAC1C\uC778\uBCC4 \uC218\uCE58\uB97C \uCE21\uC815\uD558\uACE0 \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uD655\uC778\uD558\uC138\uC694.",
      "formulaTitle": "\uD45C\uC900 \uACC4\uC0B0 \uACF5\uC2DD",
      "formulaDesc": "\uAC80\uC99D\uB41C \uD45C\uC900 \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uACC4\uC0B0\uB429\uB2C8\uB2E4.",
      "formulaCode": "Asian BMI = kg / m\xB2",
      "tableTitle": "\uD45C\uC900 \uCC38\uC870 \uC9C4\uB2E8\uD45C",
      "tableRows": [
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 1",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "\uCC38\uC870 \uBC94\uC704 \uC800\uCCB4\uC911 \uAE30\uC900"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 2",
          "col2": "18.5 \u2013 22.9 kg/m\xB2",
          "col3": "\uCC38\uC870 \uBC94\uC704 \uC544\uC2DC\uC544 \uC131\uC778 \uD45C\uC900 \uAC74\uAC15 \uCCB4\uC911"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 3",
          "col2": "23.0 \u2013 27.4 kg/m\xB2",
          "col3": "\uCC38\uC870 \uBC94\uC704 \uC544\uC2DC\uC544\uC778 \uAC74\uAC15 \uC704\uD5D8 \uAD00\uB9AC \uC784\uACC4\uAC12"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 4",
          "col2": "\u2265 27.5 kg/m\xB2",
          "col3": "\uCC38\uC870 \uBC94\uC704 \uACE0\uC704\uD5D8 \uBE44\uB9CC \uBD84\uB958 \uAE30\uC900"
        }
      ],
      "faqs": [
        {
          "question": "\uC544\uC2DC\uC544\uC778 \uC804\uC6A9 BMI \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uBCF8 \uACC4\uC0B0\uAE30\uB294 \uAC80\uC99D\uB41C \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uAC1C\uC778\uBCC4 \uC2E0\uCCB4 \uC9C0\uC218\uB97C \uC0B0\uCD9C\uD569\uB2C8\uB2E4. \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uBC14\uD0D5\uC73C\uB85C \uAD50\uC721\uC801 \uBD84\uC11D \uACB0\uACFC\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."
        },
        {
          "question": "\uC544\uC2DC\uC544 \uC131\uC778\uC758 \uD45C\uC900 \uC815\uC0C1 BMI \uBC94\uC704\uB294 \uC5BC\uB9C8\uC778\uAC00\uC694?",
          "answer": "For Asian adults, a normal healthy BMI ranges from 18.5 to 22.9 kg/m\xB2."
        },
        {
          "question": "\uC544\uC2DC\uC544\uC778\uC5D0\uAC8C \uACFC\uCCB4\uC911\uC73C\uB85C \uAC04\uC8FC\uB418\uB294 BMI \uAE30\uC900\uC740 \uC5BC\uB9C8\uC778\uAC00\uC694?",
          "answer": "Under WHO Asia-Pacific criteria, a BMI of 23.0 kg/m\xB2 or higher is considered overweight."
        }
      ]
    },
    "hi": {
      "eyebrow": "\u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u090F\u0936\u093F\u092F\u093E-\u092A\u0948\u0938\u093F\u092B\u093F\u0915 \u092E\u093E\u0928\u0915",
      "title": "\u090F\u0936\u093F\u092F\u093E\u0908 \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u2013 \u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u090F\u0936\u093F\u092F\u093E\u0908 \u0938\u0902\u0926\u0930\u094D\u092D \u0915\u091F\u0911\u092B",
      "intro": "WHO \u0935\u093F\u0936\u0947\u0937\u091C\u094D\u091E \u092A\u0930\u093E\u092E\u0930\u094D\u0936 \u092E\u093E\u0928\u0915\u094B\u0902 \u092A\u0930 \u0906\u0927\u093E\u0930\u093F\u0924 \u090F\u0936\u093F\u092F\u093E\u0908 \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930\u0964 \u090F\u0936\u093F\u092F\u093E\u0908 \u0906\u092C\u093E\u0926\u0940 \u092E\u0947\u0902 \u0915\u092E \u092C\u0940\u090F\u092E\u0906\u0908 (23.0 kg/m\xB2) \u092A\u0930 \u092D\u0940 \u0905\u0927\u093F\u0915 \u0935\u0938\u093E \u0914\u0930 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u091C\u094B\u0916\u093F\u092E \u0915\u093E \u092E\u0942\u0932\u094D\u092F\u093E\u0902\u0915\u0928 \u0915\u0930\u0947\u0902\u0964",
      "formulaTitle": "\u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u090F\u0936\u093F\u092F\u093E\u0908 \u092C\u0940\u090F\u092E\u0906\u0908 \u0938\u0942\u0924\u094D\u0930",
      "formulaDesc": "\u092C\u0940\u090F\u092E\u0906\u0908 = \u0935\u091C\u0928 (\u0915\u093F\u0917\u094D\u0930\u093E) / [\u090A\u0902\u091A\u093E\u0908 (\u092E\u0940\u091F\u0930)]\xB2 | \u090F\u0936\u093F\u092F\u093E\u0908 \u0913\u0935\u0930\u0935\u0947\u091F \u0915\u091F\u0911\u092B: 23.0 kg/m\xB2",
      "formulaCode": "Asian BMI = kg / m\xB2",
      "tableTitle": "\u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u090F\u0936\u093F\u092F\u093E\u0908 \u0935\u092F\u0938\u094D\u0915 \u092C\u0940\u090F\u092E\u0906\u0908 \u0935\u0930\u094D\u0917\u0940\u0915\u0930\u0923 \u0924\u093E\u0932\u093F\u0915\u093E",
      "tableRows": [
        {
          "col1": "\u0915\u092E \u0935\u091C\u0928",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "\u0915\u092E \u0935\u091C\u0928 \u0938\u0940\u092E\u093E"
        },
        {
          "col1": "\u0938\u093E\u092E\u093E\u0928\u094D\u092F \u0938\u094D\u0935\u0938\u094D\u0925 \u0935\u091C\u0928",
          "col2": "18.5 \u2013 22.9 kg/m\xB2",
          "col3": "\u090F\u0936\u093F\u092F\u093E\u0908 \u092A\u0941\u0930\u0941\u0937\u094B\u0902 \u0914\u0930 \u092E\u0939\u093F\u0932\u093E\u0913\u0902 \u0915\u0947 \u0932\u093F\u090F \u0938\u094D\u0935\u0938\u094D\u0925 \u0938\u0940\u092E\u093E"
        },
        {
          "col1": "\u0905\u0927\u093F\u0915 \u0935\u091C\u0928",
          "col2": "23.0 \u2013 27.4 kg/m\xB2",
          "col3": "\u090F\u0936\u093F\u092F\u093E\u0908 \u091C\u094B\u0916\u093F\u092E \u0938\u0940\u092E\u093E"
        },
        {
          "col1": "\u092E\u094B\u091F\u093E\u092A\u093E",
          "col2": "\u2265 27.5 kg/m\xB2",
          "col3": "\u0909\u091A\u094D\u091A \u091C\u094B\u0916\u093F\u092E \u092C\u0940\u090F\u092E\u0906\u0908 \u0938\u0940\u092E\u093E"
        }
      ],
      "faqs": [
        {
          "question": "\u090F\u0936\u093F\u092F\u093E\u0908 \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 (Asian BMI) \u0915\u0940 \u0906\u0935\u0936\u094D\u092F\u0915\u0924\u093E \u0915\u094D\u092F\u094B\u0902 \u0939\u0948?",
          "answer": "\u090F\u0936\u093F\u092F\u093E\u0908 \u0906\u092C\u093E\u0926\u0940 \u092E\u0947\u0902 \u0915\u092E \u0935\u091C\u0928 \u092A\u0930 \u092D\u0940 \u0939\u0943\u0926\u092F \u0914\u0930 \u091A\u092F\u093E\u092A\u091A\u092F \u0938\u0902\u092C\u0902\u0927\u0940 \u091C\u094B\u0916\u093F\u092E \u0905\u0927\u093F\u0915 \u0926\u0947\u0916\u0947 \u0917\u090F \u0939\u0948\u0902, \u0907\u0938\u0932\u093F\u090F \u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u0928\u0947 \u0935\u093F\u0936\u0947\u0937 \u0915\u091F\u0911\u092B \u0924\u092F \u0915\u093F\u090F \u0939\u0948\u0902\u0964"
        },
        {
          "question": "\u090F\u0936\u093F\u092F\u093E\u0908 \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0940 \u0936\u094D\u0930\u0947\u0923\u093F\u092F\u093E\u0902 \u0915\u094D\u092F\u093E \u0939\u0948\u0902?",
          "answer": "\u0915\u092E \u0935\u091C\u0928 (<18.5), \u0938\u094D\u0935\u0938\u094D\u0925 (18.5-22.9), \u0905\u0927\u093F\u0915 \u0935\u091C\u0928 (23.0-27.4), \u0914\u0930 \u092E\u094B\u091F\u093E\u092A\u093E (\u226527.5 kg/m\xB2)\u0964"
        },
        {
          "question": "23.0 kg/m\xB2 \u0915\u093E \u090F\u0915\u094D\u0936\u0928 \u0915\u091F\u0911\u092B \u0915\u094D\u092F\u093E \u0939\u0948?",
          "answer": "\u092F\u0939 \u0935\u0939 \u0938\u0940\u092E\u093E \u0939\u0948 \u091C\u0939\u093E\u0901 \u0938\u0947 \u090F\u0936\u093F\u092F\u093E\u0908 \u0906\u092C\u093E\u0926\u0940 \u092E\u0947\u0902 \u091A\u092F\u093E\u092A\u091A\u092F \u0938\u0902\u092C\u0902\u0927\u0940 \u091C\u094B\u0916\u093F\u092E\u094B\u0902 \u0915\u0940 \u0928\u093F\u0917\u0930\u093E\u0928\u0940 \u0914\u0930 \u091C\u0940\u0935\u0928\u0936\u0948\u0932\u0940 \u092E\u0947\u0902 \u0938\u0941\u0927\u093E\u0930 \u0915\u0940 \u0938\u093F\u092B\u093E\u0930\u093F\u0936 \u0915\u0940 \u091C\u093E\u0924\u0940 \u0939\u0948\u0964"
        },
        {
          "question": "\u0915\u094D\u092F\u093E \u090F\u0936\u093F\u092F\u093E\u0908 \u092C\u0940\u090F\u092E\u0906\u0908 \u092A\u0941\u0930\u0941\u0937\u094B\u0902 \u0914\u0930 \u092E\u0939\u093F\u0932\u093E\u0913\u0902 \u092A\u0930 \u0938\u092E\u093E\u0928 \u0932\u093E\u0917\u0942 \u0939\u094B\u0924\u093E \u0939\u0948?",
          "answer": "\u0939\u093E\u0901, \u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u090F\u0936\u093F\u092F\u093E-\u092A\u094D\u0930\u0936\u093E\u0902\u0924 \u0926\u093F\u0936\u093E\u0928\u093F\u0930\u094D\u0926\u0947\u0936 \u0926\u094B\u0928\u094B\u0902 \u0932\u093F\u0902\u0917\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F 23.0 kg/m\xB2 \u0915\u0940 \u0938\u092E\u093E\u0928 \u0915\u091F\u0911\u092B \u0938\u0940\u092E\u093E \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0924\u0947 \u0939\u0948\u0902\u0964"
        },
        {
          "question": "\u090F\u0936\u093F\u092F\u093E\u0908 \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u094B \u092C\u0947\u0939\u0924\u0930 \u092C\u0928\u093E\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0915\u094D\u092F\u093E \u0915\u0926\u092E \u0909\u0920\u093E\u090F\u0902?",
          "answer": "\u0915\u092E\u0930 \u0915\u0947 \u0906\u0915\u093E\u0930 \u0915\u094B \u0928\u093F\u092F\u0902\u0924\u094D\u0930\u093F\u0924 \u0915\u0930\u0928\u093E, \u0938\u0915\u094D\u0930\u093F\u092F \u091C\u0940\u0935\u0928\u0936\u0948\u0932\u0940 \u0905\u092A\u0928\u093E\u0928\u093E \u0914\u0930 \u092A\u094D\u0930\u0938\u0902\u0938\u094D\u0915\u0943\u0924 \u092D\u094B\u091C\u0928 \u0915\u092E \u0915\u0930\u0928\u093E \u0938\u0939\u093E\u092F\u0915 \u0939\u0948\u0964"
        }
      ]
    }
  },
  "bmr-calculator": {
    "en": {
      "eyebrow": "Mifflin-St Jeor Equation Standard",
      "title": "BMR Calculator Online \u2013 Basal Metabolic Rate Calculator for Men & Women",
      "intro": "Calculate your daily Basal Metabolic Rate (BMR) with our free BMR Calculator online. Using the scientifically recognized Mifflin-St Jeor formula calculator equation, calculate how many resting calories your body burns in 24 hours based on age, gender (men and women), height in cm or inches, and weight in kg or lbs.",
      "formulaTitle": "Mifflin-St Jeor BMR Calculator Formula Equations",
      "formulaDesc": "BMR for Men: (10 \xD7 weight in kg) + (6.25 \xD7 height in cm) - (5 \xD7 age in yrs) + 5  |  BMR for Women: (10 \xD7 weight in kg) + (6.25 \xD7 height in cm) - (5 \xD7 age in yrs) - 161",
      "formulaCode": "Men: BMR = 10W + 6.25H - 5A + 5  |  Women: BMR = 10W + 6.25H - 5A - 161",
      "tableTitle": "BMR Formula Comparison Matrix (Mifflin-St Jeor vs. Harris-Benedict & Katch-McArdle)",
      "tableRows": [
        {
          "col1": "Mifflin-St Jeor Formula",
          "col2": "Predictive Equation (1990)",
          "col3": "Commonly cited equation for adult BMR estimation"
        },
        {
          "col1": "Revised Harris-Benedict (1984)",
          "col2": "Classic Historical Reference",
          "col3": "Tends to yield slightly different estimates in modern adults"
        },
        {
          "col1": "Katch-McArdle Formula",
          "col2": "Katch-McArdle LBM Formula",
          "col3": "Calculates BMR using lean body mass (LBM)"
        }
      ],
      "faqs": [
        {
          "question": "What is a BMR calculator and how to calculate basal metabolic rate?",
          "answer": "A BMR calculator (Basal Metabolic Rate Calculator) estimates the baseline calories your body expends at rest over 24 hours to support vital organ functions."
        },
        {
          "question": "What is the Mifflin-St Jeor BMR formula for men and women?",
          "answer": "The Mifflin-St Jeor equation calculates BMR as follows: For Men: BMR = (10 \xD7 kg) + (6.25 \xD7 cm) - (5 \xD7 age) + 5. For Women: BMR = (10 \xD7 kg) + (6.25 \xD7 cm) - (5 \xD7 age) - 161."
        },
        {
          "question": "How does age affect your BMR calculation?",
          "answer": "BMR gradually decreases over time as body composition changes with age."
        },
        {
          "question": "How to calculate BMR in kg and cm online?",
          "answer": "Enter your weight in kilograms (kg) and height in centimeters (cm) alongside age and sex into our online BMR calculator to get your instant calorie burn estimate."
        },
        {
          "question": "What is the difference between BMR and TDEE?",
          "answer": "BMR is your resting metabolic burn at 0% activity. TDEE (Total Daily Energy Expenditure) multiplies BMR by your physical activity level factor to account for movement and exercise."
        }
      ]
    },
    "es": {
      "eyebrow": "Ecuaci\xF3n Est\xE1ndar de Mifflin-St Jeor",
      "title": "Calculadora de BMR \u2013 Tasa Metab\xF3lica Basal en L\xEDnea",
      "intro": "Calcula tu Tasa Metab\xF3lica Basal (BMR) diaria con nuestra calculadora gratuita. Utiliza la f\xF3rmula de Mifflin-St Jeor para estimar las calor\xEDas quemadas en reposo en 24 horas.",
      "formulaTitle": "F\xF3rmula de BMR de Mifflin-St Jeor para Hombres y Mujeres",
      "formulaDesc": "Hombres: (10 \xD7 peso kg) + (6.25 \xD7 altura cm) - (5 \xD7 edad) + 5 | Mujeres: (10 \xD7 peso kg) + (6.25 \xD7 altura cm) - (5 \xD7 edad) - 161",
      "formulaCode": "Hombres: BMR = 10W + 6.25H - 5A + 5 | Mujeres: BMR = 10W + 6.25H - 5A - 161",
      "tableTitle": "Matriz de Comparaci\xF3n de F\xF3rmulas de BMR",
      "tableRows": [
        {
          "col1": "F\xF3rmula Mifflin-St Jeor",
          "col2": "Ecuaci\xF3n Predictiva (1990)",
          "col3": "Est\xE1ndar recomendado para estimaci\xF3n de BMR"
        },
        {
          "col1": "Harris-Benedict Revisada",
          "col2": "Referencia Hist\xF3rica (1984)",
          "col3": "Referencia hist\xF3rica para BMR"
        },
        {
          "col1": "F\xF3rmula Katch-McArdle",
          "col2": "F\xF3rmula basada en la masa corporal magra",
          "col3": "Calcula la tasa metab\xF3lica basal utilizando la masa corporal magra (LBM)"
        }
      ],
      "faqs": [
        {
          "question": "\xBFQu\xE9 es la Tasa Metab\xF3lica Basal (BMR) y c\xF3mo se calcula?",
          "answer": "La BMR es la cantidad de calor\xEDas que tu cuerpo quema en reposo absoluto durante 24 horas para mantener funciones vitales."
        },
        {
          "question": "\xBFCu\xE1l es la f\xF3rmula de Mifflin-St Jeor para hombres y mujeres?",
          "answer": "Hombres: (10\xD7kg) + (6.25\xD7cm) - (5\xD7edad) + 5. Mujeres: (10\xD7kg) + (6.25\xD7cm) - (5\xD7edad) - 161."
        },
        {
          "question": "\xBFC\xF3mo afecta la edad al c\xE1lculo del BMR?",
          "answer": "El BMR disminuye gradualmente con la edad debido a la p\xE9rdida natural de masa muscular."
        },
        {
          "question": "\xBFCu\xE1l es la diferencia entre BMR y TDEE?",
          "answer": "El BMR es el gasto en reposo (0% actividad). El TDEE es el gasto cal\xF3rico total diario incluyendo ejercicio y movimiento."
        },
        {
          "question": "\xBFC\xF3mo funciona la calculadora de tasa metab\xF3lica basal (BMR) y qu\xE9 mide?",
          "answer": "Esta calculadora eval\xFAa tus datos personales utilizando ecuaciones validadas. Proporciona una estimaci\xF3n educativa para ayudarte a comprender tu estado de salud y referencias est\xE1ndar."
        }
      ]
    },
    "fr": {
      "eyebrow": "\xC9quation R\xE9f\xE9rence de Mifflin-St Jeor",
      "title": "Calculateur de BMR \u2013 M\xE9tabolisme de Base en Ligne",
      "intro": "Calculez votre taux m\xE9tabolique de base (BMR) quotidien avec notre calculateur gratuit. Bas\xE9 sur la formule reconnue de Mifflin-St Jeor.",
      "formulaTitle": "Formule de BMR Mifflin-St Jeor Hommes et Femmes",
      "formulaDesc": "Hommes : (10 \xD7 poids kg) + (6.25 \xD7 taille cm) - (5 \xD7 \xE2ge) + 5 | Femmes : (10 \xD7 poids kg) + (6.25 \xD7 taille cm) - (5 \xD7 \xE2ge) - 161",
      "formulaCode": "Hommes : BMR = 10W + 6.25H - 5A + 5 | Femmes : BMR = 10W + 6.25H - 5A - 161",
      "tableTitle": "Comparatif des Formules de BMR",
      "tableRows": [
        {
          "col1": "Formule Mifflin-St Jeor",
          "col2": "\xC9quation Pr\xE9dictive (1990)",
          "col3": "Standard recommand\xE9 pour l'estimation du BMR"
        },
        {
          "col1": "Harris-Benedict R\xE9vis\xE9e",
          "col2": "R\xE9f\xE9rence Historique (1984)",
          "col3": "\xC9quation historique de r\xE9f\xE9rence"
        },
        {
          "col1": "Formule Katch-McArdle",
          "col2": "Bas\xE9e sur la Masse Corporelle Maigre",
          "col3": "Calcule l'estimation du BMR \xE0 l'aide de la masse corporelle maigre (LBM)"
        }
      ],
      "faqs": [
        {
          "question": "Qu'est-ce que le BMR et comment est-il calcul\xE9 ?",
          "answer": "Le BMR (m\xE9tabolisme de base) est le nombre de calories br\xFBl\xE9es au repos pendant 24h pour maintenir les fonctions vitales."
        },
        {
          "question": "Quelle est la formule de Mifflin-St Jeor pour hommes et femmes ?",
          "answer": "Hommes : (10\xD7kg) + (6,25\xD7cm) - (5\xD7\xE2ge) + 5. Femmes : (10\xD7kg) + (6,25\xD7cm) - (5\xD7\xE2ge) - 161."
        },
        {
          "question": "Quelle est la diff\xE9rence entre le BMR et le TDEE ?",
          "answer": "Le BMR repr\xE9sente la d\xE9pense au repos complet. Le TDEE inclut l'activit\xE9 physique et l'exercice quotidien."
        },
        {
          "question": "Comment fonctionne le calculateur de m\xE9tabolisme de base (BMR) et que mesure-t-il ?",
          "answer": "Ce calculateur \xE9value vos donn\xE9es personnelles \xE0 l'aide d'\xE9quations valid\xE9es. Il fournit une estimation \xE9ducative pour vous aider \xE0 comprendre vos m\xE9triques et r\xE9f\xE9rences standards."
        },
        {
          "question": "Quelle est la diff\xE9rence entre la formule Mifflin-St Jeor et Katch-McArdle ?",
          "answer": "Mifflin-St Jeor estime le BMR \xE0 partir du poids total, de la taille et de l'\xE2ge. Katch-McArdle utilise la masse corporelle maigre (LBM), ce qui convient particuli\xE8rement aux athl\xE8tes."
        }
      ]
    },
    "de": {
      "eyebrow": "Mifflin-St Jeor Referenzformel",
      "title": "BMR Rechner Online \u2013 Grundumsatz Berechnen f\xFCr M\xE4nner & Frauen",
      "intro": "Berechnen Sie Ihren t\xE4glichen Grundumsatz (BMR) mit unserem kostenlosen BMR-Rechner online nach der wissenschaftlich anerkannten Mifflin-St Jeor Formel.",
      "formulaTitle": "Mifflin-St Jeor BMR-Formel f\xFCr M\xE4nner und Frauen",
      "formulaDesc": "M\xE4nner: (10 \xD7 Gewicht kg) + (6.25 \xD7 Gr\xF6\xDFe cm) - (5 \xD7 Alter) + 5 | Frauen: (10 \xD7 Gewicht kg) + (6.25 \xD7 Gr\xF6\xDFe cm) - (5 \xD7 Alter) - 161",
      "formulaCode": "M\xE4nner: BMR = 10W + 6.25H - 5A + 5 | Frauen: BMR = 10W + 6.25H - 5A - 161",
      "tableTitle": "BMR Formel-Vergleichsmatrix",
      "tableRows": [
        {
          "col1": "Mifflin-St Jeor Formel",
          "col2": "Pr\xE4diktive Gleichung (1990)",
          "col3": "Standard-Referenz f\xFCr die BMR-Berechnung"
        },
        {
          "col1": "Revidierte Harris-Benedict",
          "col2": "Historischer Standard (1984)",
          "col3": "Historische Vergleichsformel"
        },
        {
          "col1": "Katch-McArdle Formel",
          "col2": "Basierend auf Magerer K\xF6rpermasse",
          "col3": "Berechnet die BMR-Sch\xE4tzung anhand der mageren K\xF6rpermasse (LBM)"
        }
      ],
      "faqs": [
        {
          "question": "Was ist der BMR (Grundumsatz) und wie wird er berechnet?",
          "answer": "Der BMR ist die Kalorienmenge, die der K\xF6rper in 24 Stunden in absoluter Ruhe zur Aufrechterhaltung der Lebensfunktionen verbrennt."
        },
        {
          "question": "Was ist die Mifflin-St Jeor Formel f\xFCr M\xE4nner und Frauen?",
          "answer": "M\xE4nner: (10\xD7kg) + (6,25\xD7cm) - (5\xD7Alter) + 5. Frauen: (10\xD7kg) + (6,25\xD7cm) - (5\xD7Alter) - 161."
        },
        {
          "question": "Was ist der Unterschied zwischen BMR und TDEE?",
          "answer": "Der BMR misst den Ruheumsatz (0% Aktivit\xE4t). Der TDEE berechnet den Gesamtkalorienbedarf inklusive Bewegung und Sport."
        },
        {
          "question": "Wie funktioniert der BMR-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre pers\xF6nlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        },
        {
          "question": "Was ist der Unterschied zwischen der Mifflin-St Jeor und Katch-McArdle Formel?",
          "answer": "Mifflin-St Jeor berechnet den Grundumsatz aus Gesamtgewicht, K\xF6rpergr\xF6\xDFe und Alter. Katch-McArdle ber\xFCcksichtigt die magere K\xF6rpermasse (LBM), was f\xFCr sehr muskul\xF6se Menschen pr\xE4ziser ist."
        }
      ]
    },
    "ko": {
      "eyebrow": "Mifflin-St Jeor \uD45C\uC900 \uACF5\uC2DD",
      "title": "BMR \uACC4\uC0B0\uAE30 \uC628\uB77C\uC778 \u2013 \uAE30\uCD08\uB300\uC0AC\uB7C9 \uACC4\uC0B0\uAE30",
      "intro": "\uBB34\uB8CC \uC628\uB77C\uC778 BMR \uACC4\uC0B0\uAE30\uB85C \uC77C\uC77C \uAE30\uCD08\uB300\uC0AC\uB7C9(BMR)\uC744 \uACC4\uC0B0\uD558\uC138\uC694. Mifflin-St Jeor \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC 24\uC2DC\uAC04 \uB3D9\uC548 \uD734\uC2DD \uC2DC \uC18C\uBE44\uB418\uB294 \uCE7C\uB85C\uB9AC\uB97C \uCD94\uC815\uD569\uB2C8\uB2E4.",
      "formulaTitle": "\uB0A8\uC131 \uBC0F \uC5EC\uC131 Mifflin-St Jeor BMR \uACF5\uC2DD",
      "formulaDesc": "\uB0A8\uC131: (10 \xD7 \uCCB4\uC911 kg) + (6.25 \xD7 \uC2E0\uC7A5 cm) - (5 \xD7 \uC5F0\uB839) + 5 | \uC5EC\uC131: (10 \xD7 \uCCB4\uC911 kg) + (6.25 \xD7 \uC2E0\uC7A5 cm) - (5 \xD7 \uC5F0\uB839) - 161",
      "formulaCode": "\uB0A8\uC131: BMR = 10W + 6.25H - 5A + 5 | \uC5EC\uC131: BMR = 10W + 6.25H - 5A - 161",
      "tableTitle": "BMR \uACF5\uC2DD \uBE44\uAD50\uD45C",
      "tableRows": [
        {
          "col1": "Mifflin-St Jeor \uACF5\uC2DD",
          "col2": "\uC608\uCE21 \uBC29\uC815\uC2DD (1990)",
          "col3": "\uC131\uC778 BMR \uCD94\uC815\uC5D0 \uB110\uB9AC \uC0AC\uC6A9\uB418\uB294 \uACF5\uC2DD"
        },
        {
          "col1": "\uC218\uC815\uB41C Harris-Benedict",
          "col2": "\uC5ED\uC0AC\uC801 \uD45C\uC900 (1984)",
          "col3": "\uAE30\uCD08\uB300\uC0AC\uB7C9 \uCC38\uC870 \uACF5\uC2DD"
        },
        {
          "col1": "Katch-McArdle \uACF5\uC2DD",
          "col2": "\uC81C\uC9C0\uBC29\uB7C9(LBM) \uAE30\uBC18",
          "col3": "\uC81C\uC9C0\uBC29\uB7C9(LBM)\uC744 \uBC14\uD0D5\uC73C\uB85C \uAE30\uCD08\uB300\uC0AC\uB7C9\uC744 \uC0B0\uCD9C\uD569\uB2C8\uB2E4"
        }
      ],
      "faqs": [
        {
          "question": "BMR(\uAE30\uCD08\uB300\uC0AC\uB7C9)\uC774\uB780 \uBB34\uC5C7\uC774\uBA70 \uC5B4\uB5BB\uAC8C \uACC4\uC0B0\uD558\uB098\uC694?",
          "answer": "BMR\uC740 \uC2E0\uCCB4\uAC00 \uD734\uC2DD \uC0C1\uD0DC\uC5D0\uC11C \uC7A5\uAE30 \uAE30\uB2A5\uC744 \uC720\uC9C0\uD558\uAE30 \uC704\uD574 24\uC2DC\uAC04 \uB3D9\uC548 \uC18C\uBE44\uD558\uB294 \uCD5C\uC18C\uD55C\uC758 \uC5D0\uB108\uC9C0\uC785\uB2C8\uB2E4."
        },
        {
          "question": "BMR\uACFC TDEE\uC758 \uCC28\uC774\uC810\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "BMR\uC740 0% \uD65C\uB3D9 \uC2DC\uC758 \uD734\uC2DD \uB300\uC0AC\uB7C9\uC774\uBA70, TDEE\uB294 \uC77C\uC0C1 \uD65C\uB3D9\uACFC \uC6B4\uB3D9\uC744 \uD3EC\uD568\uD55C \uCD1D \uC77C\uC77C \uC5D0\uB108\uC9C0 \uC18C\uBE44\uB7C9\uC785\uB2C8\uB2E4."
        },
        {
          "question": "BMR \uAE30\uCD08\uB300\uC0AC\uB7C9 \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uBCF8 \uACC4\uC0B0\uAE30\uB294 \uAC80\uC99D\uB41C \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uAC1C\uC778\uBCC4 \uC2E0\uCCB4 \uC9C0\uC218\uB97C \uC0B0\uCD9C\uD569\uB2C8\uB2E4. \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uBC14\uD0D5\uC73C\uB85C \uAD50\uC721\uC801 \uBD84\uC11D \uACB0\uACFC\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."
        },
        {
          "question": "\uC628\uB77C\uC778\uC73C\uB85C \uC2E0\uC7A5(cm)\uACFC \uCCB4\uC911(kg)\uC744 \uD1B5\uD574 BMR\uC744 \uACC4\uC0B0\uD558\uB294 \uBC29\uBC95\uC740?",
          "answer": "\uC628\uB77C\uC778 BMR \uACC4\uC0B0\uAE30\uC5D0 \uC2E0\uC7A5(cm), \uCCB4\uC911(kg), \uC5F0\uB839, \uC131\uBCC4\uC744 \uC785\uB825\uD558\uBA74 \uBBF8\uD50C\uB9B0-\uC2A4\uD1A0\uC5B4 \uACF5\uC2DD\uC744 \uD1B5\uD574 \uC989\uC2DC \uAE30\uCD08\uB300\uC0AC\uB7C9\uC774 \uC0B0\uCD9C\uB429\uB2C8\uB2E4."
        },
        {
          "question": "Mifflin-St Jeor \uACF5\uC2DD\uACFC Katch-McArdle \uACF5\uC2DD\uC758 \uCC28\uC774\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uBBF8\uD50C\uB9B0-\uC2A4\uD1A0\uC5B4 \uACF5\uC2DD\uC740 \uC804\uCCB4 \uCCB4\uC911\uACFC \uC2E0\uC7A5\uC744 \uBC14\uD0D5\uC73C\uB85C \uC0B0\uCD9C\uD558\uBA70, \uCE90\uCE58-\uB9E5\uC544\uB4E4 \uACF5\uC2DD\uC740 \uC81C\uC9C0\uBC29\uB7C9(LBM)\uC744 \uAE30\uBC18\uC73C\uB85C \uACC4\uC0B0\uD558\uC5EC \uADFC\uC721\uB7C9\uC774 \uB9CE\uC740 \uC6B4\uB3D9\uC120\uC218\uC5D0\uAC8C \uC801\uD569\uD569\uB2C8\uB2E4."
        }
      ]
    },
    "hi": {
      "eyebrow": "Mifflin-St Jeor \u0938\u092E\u0940\u0915\u0930\u0923 \u092E\u093E\u0928\u0915",
      "title": "\u092C\u0940\u090F\u092E\u0906\u0930 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u0911\u0928\u0932\u093E\u0907\u0928 - \u092C\u0947\u0938\u0932 \u092E\u0947\u091F\u093E\u092C\u0949\u0932\u093F\u0915 \u0930\u0947\u091F (BMR \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 kg cm)",
      "intro": "\u0939\u092E\u093E\u0930\u0947 \u092E\u0941\u092B\u093C\u094D\u0924 \u092C\u0940\u090F\u092E\u0906\u0930 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u0911\u0928\u0932\u093E\u0907\u0928 \u0938\u0947 \u0905\u092A\u0928\u0940 \u0926\u0948\u0928\u093F\u0915 \u092C\u0947\u0938\u0932 \u092E\u0947\u091F\u093E\u092C\u0949\u0932\u093F\u0915 \u0930\u0947\u091F \u0915\u093E \u0905\u0928\u0941\u092E\u093E\u0928 \u0932\u0917\u093E\u090F\u0902\u0964",
      "formulaTitle": "\u092A\u0941\u0930\u0941\u0937\u094B\u0902 \u090F\u0935\u0902 \u092E\u0939\u093F\u0932\u093E\u0913\u0902 \u0915\u0947 \u0932\u093F\u090F \u092C\u0940\u090F\u092E\u0906\u0930 \u092B\u0949\u0930\u094D\u092E\u0942\u0932\u093E",
      "formulaDesc": "\u092A\u0941\u0930\u0941\u0937\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F: \u092C\u0940\u090F\u092E\u0906\u0930 = (10 \xD7 \u0935\u091C\u0928 kg) + (6.25 \xD7 \u090A\u0902\u091A\u093E\u0908 cm) - (5 \xD7 \u0906\u092F\u0941) + 5  |  \u092E\u0939\u093F\u0932\u093E\u0913\u0902 \u0915\u0947 \u0932\u093F\u090F: \u092C\u0940\u090F\u092E\u0906\u0930 = (10 \xD7 \u0935\u091C\u0928 kg) + (6.25 \xD7 \u090A\u0902\u091A\u093E\u0908 cm) - (5 \xD7 \u0906\u092F\u0941) - 161",
      "formulaCode": "\u092A\u0941\u0930\u0941\u0937: BMR = 10W + 6.25H - 5A + 5  |  \u092E\u0939\u093F\u0932\u093E\u090F\u0901: BMR = 10W + 6.25H - 5A - 161",
      "tableTitle": "\u092C\u0940\u090F\u092E\u0906\u0930 \u092B\u0949\u0930\u094D\u092E\u0942\u0932\u093E \u0924\u0941\u0932\u0928\u093E (Mifflin-St Jeor \u092C\u0928\u093E\u092E Harris-Benedict)",
      "tableRows": [
        {
          "col1": "Mifflin-St Jeor \u092B\u0949\u0930\u094D\u092E\u0942\u0932\u093E",
          "col2": "\u0905\u0928\u0941\u092E\u093E\u0928\u093F\u0924 \u0938\u0942\u0924\u094D\u0930 (1990)",
          "col3": "\u0935\u092F\u0938\u094D\u0915\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u092C\u0940\u090F\u092E\u0906\u0930 \u0905\u0928\u0941\u092E\u093E\u0928 \u0938\u0942\u0924\u094D\u0930"
        },
        {
          "col1": "Harris-Benedict \u092B\u0949\u0930\u094D\u092E\u0942\u0932\u093E",
          "col2": "\u0910\u0924\u093F\u0939\u093E\u0938\u093F\u0915 \u092E\u093E\u0928\u0915 (1984)",
          "col3": "\u0910\u0924\u093F\u0939\u093E\u0938\u093F\u0915 \u092C\u0940\u090F\u092E\u0906\u0930 \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0942\u0924\u094D\u0930"
        },
        {
          "col1": "\u0915\u0948\u091A-\u092E\u0948\u0915\u0906\u0930\u094D\u0921\u0932 \u092B\u0949\u0930\u094D\u092E\u0942\u0932\u093E",
          "col2": "\u0932\u0940\u0928 \u092C\u0949\u0921\u0940 \u092E\u093E\u0938 \u092A\u0930 \u0906\u0927\u093E\u0930\u093F\u0924",
          "col3": "\u0932\u0940\u0928 \u092C\u0949\u0921\u0940 \u092E\u093E\u0938 (LBM) \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0915\u0947 \u092C\u0940\u090F\u092E\u0906\u0930 \u0915\u093E \u0905\u0928\u0941\u092E\u093E\u0928 \u0932\u0917\u093E\u0924\u093E \u0939\u0948"
        }
      ],
      "faqs": [
        {
          "question": "\u092C\u0947\u0938\u0932 \u092E\u0947\u091F\u093E\u092C\u0949\u0932\u093F\u0915 \u0930\u0947\u091F (BMR) \u0915\u094D\u092F\u093E \u0939\u0948?",
          "answer": "BMR \u0935\u0939 \u0928\u094D\u092F\u0942\u0928\u0924\u092E \u0915\u0948\u0932\u094B\u0930\u0940 \u0939\u0948 \u091C\u094B \u0906\u092A\u0915\u093E \u0936\u0930\u0940\u0930 \u092A\u0942\u0930\u094D\u0923 \u0906\u0930\u093E\u092E \u0915\u0940 \u0938\u094D\u0925\u093F\u0924\u093F \u092E\u0947\u0902 \u091C\u0940\u0935\u0928 \u0930\u0915\u094D\u0937\u093E \u0938\u0902\u092C\u0902\u0927\u0940 \u092C\u0941\u0928\u093F\u092F\u093E\u0926\u0940 \u0915\u093E\u0930\u094D\u092F\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u092C\u0930\u094D\u0928 \u0915\u0930\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "BMR \u0914\u0930 TDEE \u092E\u0947\u0902 \u0915\u094D\u092F\u093E \u0905\u0902\u0924\u0930 \u0939\u0948?",
          "answer": "BMR \u0915\u0947\u0935\u0932 \u0906\u0930\u093E\u092E \u0915\u0940 \u0915\u0948\u0932\u094B\u0930\u0940 \u0926\u093F\u0916\u093E\u0924\u093E \u0939\u0948, \u091C\u092C\u0915\u093F TDEE \u092E\u0947\u0902 \u0936\u093E\u0930\u0940\u0930\u093F\u0915 \u0917\u0924\u093F\u0935\u093F\u0927\u093F\u092F\u094B\u0902 \u0914\u0930 \u0935\u094D\u092F\u093E\u092F\u093E\u092E \u0938\u0947 \u092C\u0930\u094D\u0928 \u0939\u094B\u0928\u0947 \u0935\u093E\u0932\u0940 \u0915\u0948\u0932\u094B\u0930\u0940 \u092D\u0940 \u0936\u093E\u092E\u093F\u0932 \u0939\u094B\u0924\u0940 \u0939\u0948\u0964"
        },
        {
          "question": "\u092E\u093F\u092B\u094D\u0932\u093F\u0928-\u0938\u094D\u091F\u0947 \u091C\u093F\u092F\u094B\u0930 \u0938\u0942\u0924\u094D\u0930 \u0915\u094D\u092F\u093E \u0939\u0948?",
          "answer": "\u092F\u0939 BMR \u0917\u0923\u0928\u093E \u0915\u093E \u0938\u092C\u0938\u0947 \u0938\u091F\u0940\u0915 \u0938\u0942\u0924\u094D\u0930 \u0939\u0948, \u091C\u094B \u0935\u091C\u0928, \u090A\u0902\u091A\u093E\u0908, \u0909\u092E\u094D\u0930 \u0914\u0930 \u0932\u093F\u0902\u0917 \u0915\u0947 \u0906\u0927\u093E\u0930 \u092A\u0930 \u0915\u0948\u0932\u094B\u0930\u0940 \u092C\u0930\u094D\u0928 \u0915\u093E \u0905\u0928\u0941\u092E\u093E\u0928 \u0932\u0917\u093E\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u092E\u093E\u0902\u0938\u092A\u0947\u0936\u093F\u092F\u094B\u0902 \u0915\u093E BMR \u092A\u0930 \u0915\u094D\u092F\u093E \u092A\u094D\u0930\u092D\u093E\u0935 \u092A\u0921\u093C\u0924\u093E \u0939\u0948?",
          "answer": "\u092E\u093E\u0902\u0938\u092A\u0947\u0936\u093F\u092F\u094B\u0902 \u0915\u0947 \u090A\u0924\u0915 \u0906\u0930\u093E\u092E \u0915\u0947 \u0938\u092E\u092F \u0935\u0938\u093E \u0915\u0940 \u0924\u0941\u0932\u0928\u093E \u092E\u0947\u0902 \u0905\u0927\u093F\u0915 \u0915\u0948\u0932\u094B\u0930\u0940 \u092C\u0930\u094D\u0928 \u0915\u0930\u0924\u0947 \u0939\u0948\u0902, \u091C\u093F\u0938\u0938\u0947 \u0906\u092A\u0915\u093E BMR \u092C\u0922\u093C\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u0915\u094D\u092F\u093E BMR \u0938\u0947 \u0915\u092E \u0915\u0948\u0932\u094B\u0930\u0940 \u0916\u093E\u0928\u0940 \u091A\u093E\u0939\u093F\u090F?",
          "answer": "\u092C\u093F\u0928\u093E \u0921\u0949\u0915\u094D\u091F\u0930\u0940 \u0938\u0932\u093E\u0939 \u0915\u0947 BMR \u0938\u0947 \u0915\u092E \u0915\u0948\u0932\u094B\u0930\u0940 \u0915\u093E \u0938\u0947\u0935\u0928 \u0928\u0939\u0940\u0902 \u0915\u0930\u0928\u093E \u091A\u093E\u0939\u093F\u090F, \u0915\u094D\u092F\u094B\u0902\u0915\u093F \u092F\u0939 \u090A\u0930\u094D\u091C\u093E \u0905\u0902\u0917\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u0906\u0935\u0936\u094D\u092F\u0915 \u0939\u0948\u0964"
        }
      ]
    }
  },
  "tdee-calculator": {
    "en": {
      "eyebrow": "Energy Balance & Metabolism",
      "title": "TDEE Calculator Online \u2013 Total Daily Energy Expenditure Calculator",
      "intro": "Our free TDEE Calculator (Total Daily Energy Expenditure Calculator) estimates your daily energy expenditure based on age, sex, weight (kg or lbs), height (cm or inches), and physical activity multiplier (PAL). Explore your estimated maintenance calories and example weight planning ranges.",
      "formulaTitle": "TDEE Calculation Formula (Mifflin-St Jeor Predictive Equation & PAL Multiplier)",
      "formulaDesc": "Step 1: Estimate BMR (Mifflin-St Jeor): Men: (10 \xD7 W) + (6.25 \xD7 H) - (5 \xD7 A) + 5 | Women: (10 \xD7 W) + (6.25 \xD7 H) - (5 \xD7 A) - 161. Step 2: Multiply BMR by Physical Activity Level (PAL): Sedentary (1.2), Light (1.375), Moderate (1.55), Heavy (1.725).",
      "formulaCode": "TDEE = BMR \xD7 Activity Factor",
      "tableTitle": "TDEE Activity Multipliers & Daily Calorie Breakdown Table",
      "tableRows": [
        {
          "col1": "Sedentary (PAL 1.2)",
          "col2": "BMR \xD7 1.2",
          "col3": "Desk job, little or no structured exercise"
        },
        {
          "col1": "Lightly Active (PAL 1.375)",
          "col2": "BMR \xD7 1.375",
          "col3": "Light exercise or sport 1\u20133 days per week"
        },
        {
          "col1": "Moderately Active (PAL 1.55)",
          "col2": "BMR \xD7 1.55",
          "col3": "Moderate exercise or sports 3\u20135 days per week"
        },
        {
          "col1": "Very Active (PAL 1.725)",
          "col2": "BMR \xD7 1.725",
          "col3": "Hard exercise or physical labor 6\u20137 days per week"
        },
        {
          "col1": "Example Calorie Deficit",
          "col2": "TDEE minus a chosen deficit",
          "col3": "Example reference for weight-management planning"
        }
      ],
      "faqs": [
        {
          "question": "What is a TDEE calculator and how does it calculate maintenance calories?",
          "answer": "A TDEE calculator (Total Daily Energy Expenditure calculator) estimates the total calories your body burns in 24 hours including resting metabolic rate (BMR), thermic effect of food (TEF), and exercise/non-exercise physical activity. Eating equal to your TDEE maintains your current body weight."
        },
        {
          "question": "How to calculate TDEE online for weight loss by age, height (cm), and weight (kg)?",
          "answer": "To calculate TDEE online for weight loss, enter your age, biological sex, weight in kg (or lbs), and height in cm (or inches). First, your BMR is determined using the Mifflin-St Jeor equation, then multiplied by your physical activity score. A calorie deficit below estimated TDEE is commonly used for weight-loss planning, but the appropriate amount varies by individual."
        },
        {
          "question": "What is the difference between BMR and TDEE calories?",
          "answer": "BMR (Basal Metabolic Rate) represents the estimated baseline calories your body requires at complete rest. TDEE includes BMR plus calories burned through daily movement, work, and exercise."
        },
        {
          "question": "How many calories should I eat daily for weight loss using TDEE?",
          "answer": "A calorie deficit below estimated TDEE is commonly used for weight-loss planning, but the appropriate amount varies by individual."
        },
        {
          "question": "How often should I recalculate my maintenance calories and TDEE?",
          "answer": "Consider recalculating when your body weight or physical activity level changes significantly, as body mass changes alter daily energy maintenance estimates."
        }
      ]
    },
    "es": {
      "eyebrow": "Balance Energ\xE9tico y Metabolismo",
      "title": "Calculadora de TDEE \u2013 Gasto Energ\xE9tico Diario Total",
      "intro": "Calcula tu Gasto Energ\xE9tico Diario Total (TDEE) y tus calor\xEDas de mantenimiento con nuestra calculadora gratuita seg\xFAn tu edad, peso, altura y nivel de actividad f\xEDsica.",
      "formulaTitle": "F\xF3rmula del TDEE (Ecuaci\xF3n de Mifflin-St Jeor y Factor PAL)",
      "formulaDesc": "Paso 1: Calcular BMR (Mifflin-St Jeor). Paso 2: Multiplicar BMR por el factor de actividad f\xEDsica: Sedentario (1.2), Ligero (1.375), Moderado (1.55), Intenso (1.725).",
      "formulaCode": "TDEE = BMR \xD7 Factor de Actividad",
      "tableTitle": "Factores de Actividad del TDEE y Desglose Cal\xF3rico",
      "tableRows": [
        {
          "col1": "Sedentario (PAL 1.2)",
          "col2": "BMR \xD7 1.2",
          "col3": "Trabajo de escritorio, poco o ning\xFAn ejercicio"
        },
        {
          "col1": "Ligeramente Activo (PAL 1.375)",
          "col2": "BMR \xD7 1.375",
          "col3": "Ejercicio ligero 1\u20133 d\xEDas a la semana"
        },
        {
          "col1": "Moderadamente Activo (PAL 1.55)",
          "col2": "BMR \xD7 1.55",
          "col3": "Ejercicio moderado 3\u20135 d\xEDas a la semana"
        },
        {
          "col1": "Muy Activo (PAL 1.725)",
          "col2": "BMR \xD7 1.725",
          "col3": "Ejercicio intenso 6\u20137 d\xEDas a la semana"
        },
        {
          "col1": "Ejemplo de D\xE9ficit Cal\xF3rico",
          "col2": "TDEE menos un d\xE9ficit elegido",
          "col3": "Referencia de ejemplo para planificaci\xF3n de peso"
        }
      ],
      "faqs": [
        {
          "question": "\xBFQu\xE9 es el TDEE y c\xF3mo calcula las calor\xEDas de mantenimiento?",
          "answer": "El TDEE (Gasto Energ\xE9tico Diario Total) estima el total de calor\xEDas que quemas en 24 horas incluyendo el metabolismo en reposo, el efecto t\xE9rmico de los alimentos y la actividad f\xEDsica."
        },
        {
          "question": "\xBFC\xF3mo calcular el TDEE para perder peso?",
          "answer": "Introduce tu edad, sexo, peso y altura. Al restar un d\xE9ficit cal\xF3rico moderado de tu TDEE estimado obtendr\xE1s una gu\xEDa cal\xF3rica para la p\xE9rdida de peso."
        },
        {
          "question": "\xBFCu\xE1l es la diferencia entre BMR y TDEE?",
          "answer": "El BMR es el gasto energ\xE9tico en reposo. El TDEE engloba el BMR m\xE1s la energ\xEDa quemada durante el movimiento diario y el ejercicio."
        },
        {
          "question": "\xBFC\xF3mo funciona la calculadora de gasto energ\xE9tico total (TDEE) y qu\xE9 mide?",
          "answer": "Esta calculadora eval\xFAa tus datos personales utilizando ecuaciones validadas. Proporciona una estimaci\xF3n educativa para ayudarte a comprender tu estado de salud y referencias est\xE1ndar."
        },
        {
          "question": "How often should I recalculate my maintenance calories and TDEE?",
          "answer": "Consider recalculating when your body weight or physical activity level changes significantly, as body mass changes alter daily energy maintenance estimates."
        }
      ]
    },
    "fr": {
      "eyebrow": "\xC9quilibre \xC9nerg\xE9tique et M\xE9tabolisme",
      "title": "Calculateur de TDEE \u2013 D\xE9pense \xC9nerg\xE9tique Quotidienne Totale",
      "intro": "Calculez votre d\xE9pense \xE9nerg\xE9tique quotidienne totale (TDEE) et vos calories de maintien avec notre calculateur gratuit selon votre \xE2ge, poids, taille et niveau d'activit\xE9.",
      "formulaTitle": "Formule de Calcul du TDEE (Mifflin-St Jeor et Facteur PAL)",
      "formulaDesc": "\xC9tape 1 : Calcul du BMR. \xC9tape 2 : Multiplier par le facteur d'activit\xE9 : S\xE9dentaire (1.2), L\xE9g\xE8rement actif (1.375), Mod\xE9r\xE9ment actif (1.55), Tr\xE8s actif (1.725).",
      "formulaCode": "TDEE = BMR \xD7 Facteur d'Activit\xE9",
      "tableTitle": "Facteurs d'Activit\xE9 TDEE et R\xE9partition Calorique",
      "tableRows": [
        {
          "col1": "S\xE9dentaire (PAL 1.2)",
          "col2": "BMR \xD7 1.2",
          "col3": "Travail de bureau, peu ou pas d'exercice"
        },
        {
          "col1": "L\xE9g\xE8rement Actif (PAL 1.375)",
          "col2": "BMR \xD7 1.375",
          "col3": "Exercice l\xE9ger 1\u20133 jours par semaine"
        },
        {
          "col1": "Mod\xE9r\xE9ment Actif (PAL 1.55)",
          "col2": "BMR \xD7 1.55",
          "col3": "Exercice mod\xE9r\xE9 3\u20135 jours par semaine"
        },
        {
          "col1": "Tr\xE8s Actif (PAL 1.725)",
          "col2": "BMR \xD7 1.725",
          "col3": "Exercice intense 6\u20137 jours par semaine"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 5",
          "col2": "TDEE minus a chosen deficit",
          "col3": "R\xE9f\xE9rence d'exemple pour la planification du contr\xF4le du poids"
        }
      ],
      "faqs": [
        {
          "question": "Qu'est-ce que le TDEE et comment calcule-t-il les calories de maintien ?",
          "answer": "Le TDEE (D\xE9pense \xC9nerg\xE9tique Quotidienne Totale) estime le total des calories br\xFBl\xE9es par jour, incluant le m\xE9tabolisme de base et l'exercice physique."
        },
        {
          "question": "Quelle est la diff\xE9rence entre le BMR et le TDEE ?",
          "answer": "Le BMR repr\xE9sente le m\xE9tabolisme au repos. Le TDEE englobe le BMR ainsi que toutes les d\xE9penses li\xE9es aux activit\xE9s et \xE0 l'exercice."
        },
        {
          "question": "Comment fonctionne le calculateur de d\xE9pense \xE9nerg\xE9tique quotidienne (TDEE) et que mesure-t-il ?",
          "answer": "Ce calculateur \xE9value vos donn\xE9es personnelles \xE0 l'aide d'\xE9quations valid\xE9es. Il fournit une estimation \xE9ducative pour vous aider \xE0 comprendre vos m\xE9triques et r\xE9f\xE9rences standards."
        },
        {
          "question": "How many calories should I eat daily for weight loss using TDEE?",
          "answer": "A calorie deficit below estimated TDEE is commonly used for weight-loss planning, but the appropriate amount varies by individual."
        },
        {
          "question": "How often should I recalculate my maintenance calories and TDEE?",
          "answer": "Consider recalculating when your body weight or physical activity level changes significantly, as body mass changes alter daily energy maintenance estimates."
        }
      ]
    },
    "de": {
      "eyebrow": "Energiebilanz & Stoffwechsel",
      "title": "TDEE Rechner Online \u2013 Gesamtenergieumsatz & Erhaltungskalorien",
      "intro": "Berechnen Sie Ihren Gesamtenergieumsatz (TDEE) und Ihre Erhaltungskalorien mit unserem kostenlosen Rechner basierend auf Alter, Gewicht, Gr\xF6\xDFe und Aktivit\xE4tslevel.",
      "formulaTitle": "TDEE Berechnungsformel (Mifflin-St Jeor & Aktivit\xE4tsfaktor)",
      "formulaDesc": "Schritt 1: BMR berechnen. Schritt 2: BMR mit dem Aktivit\xE4tsfaktor multiplizieren: Sitzend (1.2), Leicht aktiv (1.375), Moderat aktiv (1.55), Sehr aktiv (1.725).",
      "formulaCode": "TDEE = BMR \xD7 Aktivit\xE4tsfaktor",
      "tableTitle": "TDEE Aktivit\xE4tsfaktoren & Kalorien\xFCbersicht",
      "tableRows": [
        {
          "col1": "Sitzend (PAL 1.2)",
          "col2": "BMR \xD7 1.2",
          "col3": "B\xFCrot\xE4tigkeit, kaum oder kein Sport"
        },
        {
          "col1": "Leicht aktiv (PAL 1.375)",
          "col2": "BMR \xD7 1.375",
          "col3": "Leichter Sport 1\u20133 Tage pro Woche"
        },
        {
          "col1": "Moderat aktiv (PAL 1.55)",
          "col2": "BMR \xD7 1.55",
          "col3": "Moderater Sport 3\u20135 Tage pro Woche"
        },
        {
          "col1": "Sehr aktiv (PAL 1.725)",
          "col2": "BMR \xD7 1.725",
          "col3": "Intensiver Sport 6\u20137 Tage pro Woche"
        },
        {
          "col1": "Kategorie / Stufe 5",
          "col2": "TDEE minus a chosen deficit",
          "col3": "Beispielreferenz f\xFCr die Gewichtskontrollplanung"
        }
      ],
      "faqs": [
        {
          "question": "Was ist der TDEE und wie berechnet er die Erhaltungskalorien?",
          "answer": "Der TDEE (Gesamtenergieumsatz) sch\xE4tzt die Gesamtzahl der Kalorien, die Ihr K\xF6rper in 24 Stunden inklusive Grundumsatz und Bewegung verbrennt."
        },
        {
          "question": "Wie unterscheidet sich der BMR vom TDEE?",
          "answer": "Der BMR ist der reine Ruheumsatz. Der TDEE beinhaltet den BMR plus den Kalorienverbrauch durch allt\xE4gliche Bewegung und Sport."
        },
        {
          "question": "Wie funktioniert der TDEE-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre pers\xF6nlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        },
        {
          "question": "How many calories should I eat daily for weight loss using TDEE?",
          "answer": "A calorie deficit below estimated TDEE is commonly used for weight-loss planning, but the appropriate amount varies by individual."
        },
        {
          "question": "How often should I recalculate my maintenance calories and TDEE?",
          "answer": "Consider recalculating when your body weight or physical activity level changes significantly, as body mass changes alter daily energy maintenance estimates."
        }
      ]
    },
    "ko": {
      "eyebrow": "\uC5D0\uB108\uC9C0 \uADE0\uD615 \uBC0F \uB300\uC0AC\uB7C9",
      "title": "TDEE \uACC4\uC0B0\uAE30 \u2013 \uC77C\uC77C \uCD1D \uC5D0\uB108\uC9C0 \uC18C\uBE44\uB7C9 \uBC0F \uC720\uC9C0 \uCE7C\uB85C\uB9AC",
      "intro": "\uBB34\uB8CC TDEE \uACC4\uC0B0\uAE30\uB85C \uC5F0\uB839, \uC131\uBCC4, \uCCB4\uC911, \uC2E0\uC7A5 \uBC0F \uD65C\uB3D9 \uC218\uC900\uC744 \uAE30\uBC18\uC73C\uB85C \uC77C\uC77C \uCD1D \uC5D0\uB108\uC9C0 \uC18C\uBE44\uB7C9(TDEE)\uACFC \uC720\uC9C0 \uCE7C\uB85C\uB9AC\uB97C \uCD94\uC815\uD558\uC138\uC694.",
      "formulaTitle": "TDEE \uACC4\uC0B0 \uACF5\uC2DD (Mifflin-St Jeor \uBC0F \uD65C\uB3D9 \uACC4\uC218)",
      "formulaDesc": "1\uB2E8\uACC4: BMR \uACC4\uC0B0. 2\uB2E8\uACC4: \uD65C\uB3D9 \uACC4\uC218 \uACF1\uD558\uAE30: \uC88C\uC2DD (1.2), \uAC00\uBCBC\uC6B4 \uD65C\uB3D9 (1.375), \uBCF4\uD1B5 \uD65C\uB3D9 (1.55), \uB9E4\uC6B0 \uD65C\uB3D9\uC801 (1.725).",
      "formulaCode": "TDEE = BMR \xD7 \uD65C\uB3D9 \uACC4\uC218",
      "tableTitle": "TDEE \uD65C\uB3D9 \uACC4\uC218 \uBC0F \uC77C\uC77C \uCE7C\uB85C\uB9AC \uC0C1\uC138\uD45C",
      "tableRows": [
        {
          "col1": "\uC88C\uC2DD / \uAC70\uC758 \uC6B4\uB3D9 \uC548 \uD568 (PAL 1.2)",
          "col2": "BMR \xD7 1.2",
          "col3": "\uB370\uC2A4\uD06C\uD1B1 \uC5C5\uBB34, \uC6B4\uB3D9 \uAC70\uC758 \uC5C6\uC74C"
        },
        {
          "col1": "\uAC00\uBCBC\uC6B4 \uD65C\uB3D9 (PAL 1.375)",
          "col2": "BMR \xD7 1.375",
          "col3": "\uC8FC 1~3\uD68C \uAC00\uBCBC\uC6B4 \uC6B4\uB3D9"
        },
        {
          "col1": "\uBCF4\uD1B5 \uD65C\uB3D9 (PAL 1.55)",
          "col2": "BMR \xD7 1.55",
          "col3": "\uC8FC 3~5\uD68C \uBCF4\uD1B5 \uC6B4\uB3D9"
        },
        {
          "col1": "\uB9E4\uC6B0 \uD65C\uB3D9\uC801 (PAL 1.725)",
          "col2": "BMR \xD7 1.725",
          "col3": "\uC8FC 6~7\uD68C \uAC15\uD55C \uC6B4\uB3D9"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 5",
          "col2": "TDEE minus a chosen deficit",
          "col3": "\uCCB4\uC911 \uAD00\uB9AC \uACC4\uD68D\uC744 \uC704\uD55C \uC608\uC2DC \uCC38\uACE0 \uAE30\uC900"
        }
      ],
      "faqs": [
        {
          "question": "TDEE \uACC4\uC0B0\uAE30\uB780 \uBB34\uC5C7\uC774\uBA70 \uC720\uC9C0 \uCE7C\uB85C\uB9AC\uB294 \uC5B4\uB5BB\uAC8C \uACC4\uC0B0\uD558\uB098\uC694?",
          "answer": "TDEE(\uC77C\uC77C \uCD1D \uC5D0\uB108\uC9C0 \uC18C\uBE44\uB7C9)\uB294 \uAE30\uCD08\uB300\uC0AC\uB7C9(BMR)\uACFC \uC77C\uC0C1 \uD65C\uB3D9 \uBC0F \uC6B4\uB3D9\uC744 \uD3EC\uD568\uD558\uC5EC 24\uC2DC\uAC04 \uB3D9\uC548 \uC18C\uBE44\uB418\uB294 \uCD1D \uCE7C\uB85C\uB9AC\uB97C \uCD94\uC815\uD569\uB2C8\uB2E4."
        },
        {
          "question": "BMR\uACFC TDEE \uCE7C\uB85C\uB9AC\uC758 \uCC28\uC774\uC810\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "BMR\uC740 \uC644\uC804\uD788 \uD734\uC2DD\uD560 \uB54C\uC758 \uB300\uC0AC\uB7C9\uC774\uBA70, TDEE\uB294 BMR\uC5D0 \uC77C\uC0C1 \uD65C\uB3D9 \uBC0F \uC6B4\uB3D9\uC73C\uB85C \uC18C\uBE44\uB418\uB294 \uCE7C\uB85C\uB9AC\uB97C \uB354\uD55C \uAC12\uC785\uB2C8\uB2E4."
        },
        {
          "question": "TDEE \uC77C\uC77C \uCD1D \uC5D0\uB108\uC9C0 \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uBCF8 \uACC4\uC0B0\uAE30\uB294 \uAC80\uC99D\uB41C \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uAC1C\uC778\uBCC4 \uC2E0\uCCB4 \uC9C0\uC218\uB97C \uC0B0\uCD9C\uD569\uB2C8\uB2E4. \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uBC14\uD0D5\uC73C\uB85C \uAD50\uC721\uC801 \uBD84\uC11D \uACB0\uACFC\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."
        },
        {
          "question": "How many calories should I eat daily for weight loss using TDEE? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "A calorie deficit below estimated TDEE is commonly used for weight-loss planning, but the appropriate amount varies by individual."
        },
        {
          "question": "How often should I recalculate my maintenance calories and TDEE? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "Consider recalculating when your body weight or physical activity level changes significantly, as body mass changes alter daily energy maintenance estimates."
        }
      ]
    },
    "hi": {
      "eyebrow": "\u090A\u0930\u094D\u091C\u093E \u0938\u0902\u0924\u0941\u0932\u0928 \u0914\u0930 \u091A\u092F\u093E\u092A\u091A\u092F",
      "title": "\u091F\u0940\u0921\u0940\u0908\u0908 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u0911\u0928\u0932\u093E\u0907\u0928 \u2013 \u0915\u0941\u0932 \u0926\u0948\u0928\u093F\u0915 \u090A\u0930\u094D\u091C\u093E \u0935\u094D\u092F\u092F \u0914\u0930 \u0930\u0916\u0930\u0916\u093E\u0935 \u0915\u0948\u0932\u094B\u0930\u0940",
      "intro": "\u0939\u092E\u093E\u0930\u093E \u092E\u0941\u092B\u093C\u094D\u0924 TDEE \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 (Total Daily Energy Expenditure) \u0906\u092A\u0915\u0940 \u0909\u092E\u094D\u0930, \u0932\u093F\u0902\u0917, \u0935\u091C\u0928 (\u0915\u093F\u0917\u094D\u0930\u093E \u092F\u093E \u092A\u093E\u0909\u0902\u0921), \u090A\u0902\u091A\u093E\u0908 (\u0938\u0947\u092E\u0940 \u092F\u093E \u0907\u0902\u091A) \u0914\u0930 \u0936\u093E\u0930\u0940\u0930\u093F\u0915 \u0917\u0924\u093F\u0935\u093F\u0927\u093F \u0938\u094D\u0924\u0930 \u0915\u0947 \u0906\u0927\u093E\u0930 \u092A\u0930 \u0906\u092A\u0915\u0940 \u0926\u0948\u0928\u093F\u0915 \u0930\u0916\u0930\u0916\u093E\u0935 \u0915\u0948\u0932\u094B\u0930\u0940 \u0915\u093E \u0905\u0928\u0941\u092E\u093E\u0928 \u0932\u0917\u093E\u0924\u093E \u0939\u0948\u0964",
      "formulaTitle": "TDEE \u0917\u0923\u0928\u093E \u0938\u0942\u0924\u094D\u0930 (\u092E\u093F\u092B\u094D\u0932\u093F\u0928-\u0938\u0947\u0902\u091F \u091C\u093F\u0913\u0930 \u090F\u0935\u0902 \u0917\u0924\u093F\u0935\u093F\u0927\u093F \u0917\u0941\u0923\u0915)",
      "formulaDesc": "\u091A\u0930\u0923 1: BMR \u0928\u093F\u0915\u093E\u0932\u0947\u0902: \u092A\u0941\u0930\u0941\u0937: (10 \xD7 W) + (6.25 \xD7 H) - (5 \xD7 A) + 5 | \u092E\u0939\u093F\u0932\u093E: (10 \xD7 W) + (6.25 \xD7 H) - (5 \xD7 A) - 161\u0964 \u091A\u0930\u0923 2: BMR \u0915\u094B \u0917\u0924\u093F\u0935\u093F\u0927\u093F \u0938\u094D\u0924\u0930 (1.2 \u0938\u0947 1.725) \u0938\u0947 \u0917\u0941\u0923\u093E \u0915\u0930\u0947\u0902\u0964",
      "formulaCode": "TDEE = BMR \xD7 Activity Factor",
      "tableTitle": "TDEE \u0917\u0924\u093F\u0935\u093F\u0927\u093F \u0917\u0941\u0923\u0915 \u090F\u0935\u0902 \u0926\u0948\u0928\u093F\u0915 \u0915\u0948\u0932\u094B\u0930\u0940 \u0924\u093E\u0932\u093F\u0915\u093E",
      "tableRows": [
        {
          "col1": "\u0917\u0924\u093F\u0939\u0940\u0928 (PAL 1.2)",
          "col2": "BMR \xD7 1.2",
          "col3": "\u0921\u0947\u0938\u094D\u0915 \u091C\u0949\u092C, \u092C\u0939\u0941\u0924 \u0915\u092E \u092F\u093E \u0915\u094B\u0908 \u0935\u094D\u092F\u093E\u092F\u093E\u092E \u0928\u0939\u0940\u0902"
        },
        {
          "col1": "\u0939\u0932\u094D\u0915\u093E \u0938\u0915\u094D\u0930\u093F\u092F (PAL 1.375)",
          "col2": "BMR \xD7 1.375",
          "col3": "\u0938\u092A\u094D\u0924\u093E\u0939 \u092E\u0947\u0902 1\u20133 \u0926\u093F\u0928 \u0939\u0932\u094D\u0915\u093E \u0935\u094D\u092F\u093E\u092F\u093E\u092E"
        },
        {
          "col1": "\u092E\u0927\u094D\u092F\u092E \u0938\u0915\u094D\u0930\u093F\u092F (PAL 1.55)",
          "col2": "BMR \xD7 1.55",
          "col3": "\u0938\u092A\u094D\u0924\u093E\u0939 \u092E\u0947\u0902 3\u20135 \u0926\u093F\u0928 \u092E\u0927\u094D\u092F\u092E \u0935\u094D\u092F\u093E\u092F\u093E\u092E"
        },
        {
          "col1": "\u0905\u0924\u094D\u092F\u0927\u093F\u0915 \u0938\u0915\u094D\u0930\u093F\u092F (PAL 1.725)",
          "col2": "BMR \xD7 1.725",
          "col3": "\u0938\u092A\u094D\u0924\u093E\u0939 \u092E\u0947\u0902 6\u20137 \u0926\u093F\u0928 \u0915\u0920\u093F\u0928 \u0935\u094D\u092F\u093E\u092F\u093E\u092E"
        },
        {
          "col1": "\u0909\u0926\u093E\u0939\u0930\u0923 \u0915\u0948\u0932\u094B\u0930\u0940 \u0918\u093E\u091F\u093E",
          "col2": "TDEE \u0918\u091F\u093E\u0935 \u0905\u0928\u0941\u092E\u093E\u0928\u093F\u0924 \u0918\u093E\u091F\u093E",
          "col3": "\u0935\u091C\u0928 \u092F\u094B\u091C\u0928\u093E \u0915\u0947 \u0932\u093F\u090F \u0909\u0926\u093E\u0939\u0930\u0923 \u0938\u0902\u0926\u0930\u094D\u092D"
        }
      ],
      "faqs": [
        {
          "question": "\u091F\u0940\u0921\u0940\u0908\u0908 (TDEE) \u0915\u094D\u092F\u093E \u0939\u0948?",
          "answer": "TDEE (Total Daily Energy Expenditure) \u0935\u0939 \u0915\u0941\u0932 \u0915\u0948\u0932\u094B\u0930\u0940 \u0939\u0948 \u091C\u094B \u0906\u092A \u0905\u092A\u0928\u0947 BMR \u0914\u0930 \u0926\u0948\u0928\u093F\u0915 \u0917\u0924\u093F\u0935\u093F\u0927\u093F\u092F\u094B\u0902 \u0915\u094B \u092E\u093F\u0932\u093E\u0915\u0930 24 \u0918\u0902\u091F\u0947 \u092E\u0947\u0902 \u092C\u0930\u094D\u0928 \u0915\u0930\u0924\u0947 \u0939\u0948\u0902\u0964"
        },
        {
          "question": "TDEE \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0948\u0938\u0947 \u0915\u0940 \u091C\u093E\u0924\u0940 \u0939\u0948?",
          "answer": "TDEE = BMR \xD7 \u0917\u0924\u093F\u0935\u093F\u0927\u093F \u0917\u0941\u0923\u093E\u0902\u0915 (Activity Multiplier), \u091C\u094B 1.2 (\u0917\u0924\u093F\u0939\u0940\u0928) \u0938\u0947 1.9 (\u0905\u0924\u094D\u092F\u0927\u093F\u0915 \u0938\u0915\u094D\u0930\u093F\u092F) \u0924\u0915 \u0939\u094B\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u0935\u091C\u0928 \u0918\u091F\u093E\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F TDEE \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0948\u0938\u0947 \u0915\u0930\u0947\u0902?",
          "answer": "\u0905\u092A\u0928\u0947 TDEE \u0938\u0947 300 \u0938\u0947 500 \u0915\u0948\u0932\u094B\u0930\u0940 \u0915\u092E (Calorie Deficit) \u0916\u093E\u0928\u0947 \u0938\u0947 \u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924 \u0930\u0942\u092A \u0938\u0947 \u0935\u091C\u0928 \u0918\u091F\u093E\u092F\u093E \u091C\u093E \u0938\u0915\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "TDEE \u0915\u094B \u0915\u092C \u0926\u094B\u092C\u093E\u0930\u093E \u0905\u092A\u0921\u0947\u091F \u0915\u0930\u0928\u093E \u091A\u093E\u0939\u093F\u090F?",
          "answer": "\u0935\u091C\u0928 \u092E\u0947\u0902 3-5 \u0915\u093F\u0917\u094D\u0930\u093E \u0915\u093E \u092C\u0926\u0932\u093E\u0935 \u0939\u094B\u0928\u0947 \u092A\u0930 \u092F\u093E \u0905\u092A\u0928\u0940 \u0935\u0930\u094D\u0915\u0906\u0909\u091F \u0926\u093F\u0928\u091A\u0930\u094D\u092F\u093E \u092C\u0926\u0932\u0928\u0947 \u092A\u0930 TDEE \u0915\u0940 \u092A\u0941\u0928\u0930\u094D\u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902\u0964"
        },
        {
          "question": "\u0915\u094D\u092F\u093E TDEE \u0939\u0930 \u0926\u093F\u0928 \u0938\u092E\u093E\u0928 \u0930\u0939\u0924\u093E \u0939\u0948?",
          "answer": "\u0928\u0939\u0940\u0902, \u0906\u092A\u0915\u0940 \u0926\u0948\u0928\u093F\u0915 \u0917\u0924\u093F\u0935\u093F\u0927\u093F\u092F\u094B\u0902 \u0914\u0930 \u0915\u0938\u0930\u0924 \u0915\u0947 \u0906\u0927\u093E\u0930 \u092A\u0930 \u0935\u093E\u0938\u094D\u0924\u0935\u093F\u0915 \u0915\u0948\u0932\u094B\u0930\u0940 \u092C\u0930\u094D\u0928 \u092E\u0947\u0902 \u0930\u094B\u091C \u0925\u094B\u0921\u093C\u093E \u0905\u0902\u0924\u0930 \u0939\u094B \u0938\u0915\u0924\u093E \u0939\u0948\u0964"
        }
      ]
    }
  },
  "maintenance-calorie-calculator": {
    "en": {
      "eyebrow": "Calorie Maintenance & Deficit Planning",
      "title": "Maintenance Calorie Calculator \u2013 Calorie Maintenance Calculator Online",
      "intro": "Our free Maintenance Calorie Calculator estimates your daily maintenance calories, total energy expenditure, and target calorie ranges for weight goals. Enter your age, gender, weight in kg, height in cm, and exercise frequency to view baseline maintenance caloric estimates.",
      "formulaTitle": "Maintenance Calorie Math & Energy Balance Standards",
      "formulaDesc": "Maintenance Calories = Basal Metabolic Rate (BMR) \xD7 Physical Activity Level (PAL). Energy adjustments can be made based on individual weight goals.",
      "formulaCode": "Maintenance = BMR \xD7 PAL",
      "tableTitle": "Calorie Maintenance & Weight Goal Caloric Breakdown Table",
      "tableRows": [
        {
          "col1": "Maintenance Calories",
          "col2": "100% TDEE (0 kcal net change)",
          "col3": "Preserves current body weight and energy balance"
        },
        {
          "col1": "Scenario 1 (-250 kcal/day)",
          "col2": "TDEE - 250 kcal/day",
          "col3": "Mathematical example of 250 kcal lower daily intake"
        },
        {
          "col1": "Scenario 2 (-500 kcal/day)",
          "col2": "TDEE - 500 kcal/day",
          "col3": "Mathematical example of 500 kcal lower daily intake"
        },
        {
          "col1": "Scenario 3 (-750 kcal/day)",
          "col2": "TDEE - 750 kcal/day",
          "col3": "Mathematical example of 750 kcal lower daily intake"
        },
        {
          "col1": "Example Surplus (+250 kcal/day)",
          "col2": "TDEE + 250 to 300 kcal/day",
          "col3": "Mathematical example of 250\u2013300 kcal higher daily intake"
        }
      ],
      "faqs": [
        {
          "question": "What is a maintenance calorie calculator and how does it work online?",
          "answer": "A maintenance calorie calculator computes the estimated daily caloric intake required to maintain your current body weight. It uses metabolic equations (Mifflin-St Jeor) combined with your physical activity multiplier."
        },
        {
          "question": "How to calculate calorie maintenance by age, height (cm), and weight (kg)?",
          "answer": "Input your biological age, gender, height (cm), weight (kg), and weekly activity level to estimate your maintenance calorie baseline."
        },
        {
          "question": "What happens if I eat at my maintenance calories every day?",
          "answer": "Eating at your estimated maintenance calorie level keeps your total energy balance neutral. Your body weight remains relatively constant over time."
        },
        {
          "question": "How do I use my maintenance calories to calculate calories for weight loss?",
          "answer": "A calorie deficit below estimated maintenance calories is commonly used for weight-loss planning, but the appropriate amount varies by individual."
        },
        {
          "question": "Is a calorie maintenance calculator accurate for men and women of all ages?",
          "answer": "Maintenance calorie calculators utilize published mathematical formulas like Mifflin-St Jeor and Harris-Benedict, providing baseline estimates for healthy adults."
        }
      ]
    },
    "es": {
      "eyebrow": "Est\xE1ndares de Referencia de Salud",
      "title": "Calculadora de Calor\xEDas de Mantenimiento \u2013 Calcular Necesidades Diarias \u2013 Gu\xEDa y Calculadora",
      "intro": "Herramienta de c\xE1lculo y referencia educativa dise\xF1ada seg\xFAn los est\xE1ndares de salud publicados de la OMS y CDC. Calcula tus m\xE9tricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "F\xF3rmula de Referencia Est\xE1ndar",
      "formulaDesc": "Calculado utilizando ecuaciones est\xE1ndar validadas.",
      "formulaCode": "Maintenance = BMR \xD7 PAL",
      "tableTitle": "Tabla de Referencia Est\xE1ndar",
      "tableRows": [
        {
          "col1": "Categor\xEDa / Nivel 1",
          "col2": "100% TDEE (0 kcal net change)",
          "col3": "Mantiene el peso corporal actual y el balance energ\xE9tico"
        },
        {
          "col1": "Categor\xEDa / Nivel 2",
          "col2": "TDEE - 250 kcal/day",
          "col3": "Ejemplo matem\xE1tico de ingesta diaria reducida en 250 kcal"
        },
        {
          "col1": "Categor\xEDa / Nivel 3",
          "col2": "TDEE - 500 kcal/day",
          "col3": "Ejemplo matem\xE1tico de ingesta diaria reducida en 500 kcal"
        },
        {
          "col1": "Categor\xEDa / Nivel 4",
          "col2": "TDEE - 750 kcal/day",
          "col3": "Ejemplo matem\xE1tico de ingesta diaria reducida en 750 kcal"
        },
        {
          "col1": "Categor\xEDa / Nivel 5",
          "col2": "TDEE + 250 to 300 kcal/day",
          "col3": "Ejemplo matem\xE1tico de ingesta diaria superior en 250\u2013300 kcal"
        }
      ],
      "faqs": [
        {
          "question": "\xBFC\xF3mo funciona la calculadora de calor\xEDas de mantenimiento y qu\xE9 mide?",
          "answer": "Esta calculadora eval\xFAa tus datos personales utilizando ecuaciones validadas. Proporciona una estimaci\xF3n educativa para ayudarte a comprender tu estado de salud y referencias est\xE1ndar."
        },
        {
          "question": "C\xF3mo calculate calorie maintenance by age, height (cm), and weight (kg)?",
          "answer": "Input your biological age, gender, height (cm), weight (kg), and weekly activity level to estimate your maintenance calorie baseline."
        },
        {
          "question": "What happens if I eat at my maintenance calories every day?",
          "answer": "Eating at your estimated maintenance calorie level keeps your total energy balance neutral. Your body weight remains relatively constant over time."
        },
        {
          "question": "How do I use my maintenance calories to calculate calories for weight loss?",
          "answer": "A calorie deficit below estimated maintenance calories is commonly used for weight-loss planning, but the appropriate amount varies by individual."
        },
        {
          "question": "Is a calorie maintenance calculator accurate for men and women of all ages?",
          "answer": "Maintenance calorie calculators utilize published mathematical formulas like Mifflin-St Jeor and Harris-Benedict, providing baseline estimates for healthy adults."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de R\xE9f\xE9rence de Sant\xE9",
      "title": "Calculateur de Calories de Maintien \u2013 Obtenir son Besoin Calorique \u2013 Outil de R\xE9f\xE9rence",
      "intro": "Outil de calcul et de r\xE9f\xE9rence \xE9ducatif con\xE7u selon les normes de sant\xE9 publi\xE9es de l'OMS et du CDC. Calculez vos m\xE9triques et consultez les plages de r\xE9f\xE9rence.",
      "formulaTitle": "Formule de R\xE9f\xE9rence Standard",
      "formulaDesc": "Calcul\xE9 \xE0 l'aide d'\xE9quations standards valid\xE9es.",
      "formulaCode": "Maintenance = BMR \xD7 PAL",
      "tableTitle": "Tableau de R\xE9f\xE9rence Standard",
      "tableRows": [
        {
          "col1": "Cat\xE9gorie / Niveau 1",
          "col2": "100% TDEE (0 kcal net change)",
          "col3": "Maintient le poids corporel actuel et l'\xE9quilibre \xE9nerg\xE9tique"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 2",
          "col2": "TDEE - 250 kcal/day",
          "col3": "Exemple math\xE9matique d'un apport quotidien inf\xE9rieur de 250 kcal"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 3",
          "col2": "TDEE - 500 kcal/day",
          "col3": "Exemple math\xE9matique d'un apport quotidien inf\xE9rieur de 500 kcal"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 4",
          "col2": "TDEE - 750 kcal/day",
          "col3": "Exemple math\xE9matique d'un apport quotidien inf\xE9rieur de 750 kcal"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 5",
          "col2": "TDEE + 250 to 300 kcal/day",
          "col3": "Exemple math\xE9matique d'un apport quotidien sup\xE9rieur de 250\u2013300 kcal"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de calories de maintien et que mesure-t-il ?",
          "answer": "Ce calculateur \xE9value vos donn\xE9es personnelles \xE0 l'aide d'\xE9quations valid\xE9es. Il fournit une estimation \xE9ducative pour vous aider \xE0 comprendre vos m\xE9triques et r\xE9f\xE9rences standards."
        },
        {
          "question": "Comment calculate calorie maintenance by age, height (cm), and weight (kg)?",
          "answer": "Input your biological age, gender, height (cm), weight (kg), and weekly activity level to estimate your maintenance calorie baseline."
        },
        {
          "question": "What happens if I eat at my maintenance calories every day?",
          "answer": "Eating at your estimated maintenance calorie level keeps your total energy balance neutral. Your body weight remains relatively constant over time."
        },
        {
          "question": "How do I use my maintenance calories to calculate calories for weight loss?",
          "answer": "A calorie deficit below estimated maintenance calories is commonly used for weight-loss planning, but the appropriate amount varies by individual."
        },
        {
          "question": "Is a calorie maintenance calculator accurate for men and women of all ages?",
          "answer": "Maintenance calorie calculators utilize published mathematical formulas like Mifflin-St Jeor and Harris-Benedict, providing baseline estimates for healthy adults."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "Rechner f\xFCr Erhaltungskalorien \u2013 T\xE4glichen Kalorienbedarf berechnen \u2013 Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den ver\xF6ffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und pr\xFCfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardm\xE4\xDFig validierten Gleichungen.",
      "formulaCode": "Maintenance = BMR \xD7 PAL",
      "tableTitle": "Standard-Referenztabelle",
      "tableRows": [
        {
          "col1": "Kategorie / Stufe 1",
          "col2": "100% TDEE (0 kcal net change)",
          "col3": "Erh\xE4lt das aktuelle K\xF6rpergewicht und die Energiebilanz"
        },
        {
          "col1": "Kategorie / Stufe 2",
          "col2": "TDEE - 250 kcal/day",
          "col3": "Mathematisches Beispiel f\xFCr 250 kcal geringere t\xE4gliche Zufuhr"
        },
        {
          "col1": "Kategorie / Stufe 3",
          "col2": "TDEE - 500 kcal/day",
          "col3": "Mathematisches Beispiel f\xFCr 500 kcal geringere t\xE4gliche Zufuhr"
        },
        {
          "col1": "Kategorie / Stufe 4",
          "col2": "TDEE - 750 kcal/day",
          "col3": "Mathematisches Beispiel f\xFCr 750 kcal geringere t\xE4gliche Zufuhr"
        },
        {
          "col1": "Kategorie / Stufe 5",
          "col2": "TDEE + 250 to 300 kcal/day",
          "col3": "Mathematisches Beispiel f\xFCr 250\u2013300 kcal h\xF6here t\xE4gliche Zufuhr"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der Kalorien-Erhaltungs-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre pers\xF6nlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        },
        {
          "question": "Wie man calculate calorie maintenance by age, height (cm), and weight (kg)?",
          "answer": "Input your biological age, gender, height (cm), weight (kg), and weekly activity level to estimate your maintenance calorie baseline."
        },
        {
          "question": "What happens if I eat at my maintenance calories every day?",
          "answer": "Eating at your estimated maintenance calorie level keeps your total energy balance neutral. Your body weight remains relatively constant over time."
        },
        {
          "question": "How do I use my maintenance calories to calculate calories for weight loss?",
          "answer": "A calorie deficit below estimated maintenance calories is commonly used for weight-loss planning, but the appropriate amount varies by individual."
        },
        {
          "question": "Is a calorie maintenance calculator accurate for men and women of all ages?",
          "answer": "Maintenance calorie calculators utilize published mathematical formulas like Mifflin-St Jeor and Harris-Benedict, providing baseline estimates for healthy adults."
        }
      ]
    },
    "ko": {
      "eyebrow": "\uAC74\uAC15 \uCC38\uC870 \uD45C\uC900 \uC9C0\uCE68",
      "title": "\uC720\uC9C0 \uCE7C\uB85C\uB9AC \uACC4\uC0B0\uAE30 \u2013 \uC77C\uC77C \uC5D0\uB108\uC9C0 \uC18C\uBAA8\uB7C9 \uCE21\uC815\uC744 \uC704\uD55C \uCC38\uC870 \uB3C4\uAD6C",
      "intro": "WHO \uBC0F CDC \uC9C0\uCE68\uC5D0 \uAE30\uBC18\uD55C \uC2E4\uC2DC\uAC04 \uCC38\uACE0 \uACC4\uC0B0\uAE30\uC785\uB2C8\uB2E4. \uAC1C\uC778\uBCC4 \uC218\uCE58\uB97C \uCE21\uC815\uD558\uACE0 \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uD655\uC778\uD558\uC138\uC694.",
      "formulaTitle": "\uD45C\uC900 \uACC4\uC0B0 \uACF5\uC2DD",
      "formulaDesc": "\uAC80\uC99D\uB41C \uD45C\uC900 \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uACC4\uC0B0\uB429\uB2C8\uB2E4.",
      "formulaCode": "Maintenance = BMR \xD7 PAL",
      "tableTitle": "\uD45C\uC900 \uCC38\uC870 \uC9C4\uB2E8\uD45C",
      "tableRows": [
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 1",
          "col2": "100% TDEE (0 kcal net change)",
          "col3": "\uD604\uC7AC \uCCB4\uC911 \uC720\uC9C0 \uBC0F \uC5D0\uB108\uC9C0 \uADE0\uD615 \uBCF4\uC874"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 2",
          "col2": "TDEE - 250 kcal/day",
          "col3": "\uC77C\uC77C 250 kcal \uC801\uC740 \uC12D\uCDE8\uB7C9\uC758 \uC218\uD559\uC801 \uC608\uC2DC"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 3",
          "col2": "TDEE - 500 kcal/day",
          "col3": "\uC77C\uC77C 500 kcal \uC801\uC740 \uC12D\uCDE8\uB7C9\uC758 \uC218\uD559\uC801 \uC608\uC2DC"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 4",
          "col2": "TDEE - 750 kcal/day",
          "col3": "\uC77C\uC77C 750 kcal \uC801\uC740 \uC12D\uCDE8\uB7C9\uC758 \uC218\uD559\uC801 \uC608\uC2DC"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 5",
          "col2": "TDEE + 250 to 300 kcal/day",
          "col3": "\uC77C\uC77C 250\u2013300 kcal \uB192\uC740 \uC12D\uCDE8\uB7C9\uC758 \uC218\uD559\uC801 \uC608\uC2DC"
        }
      ],
      "faqs": [
        {
          "question": "\uCCB4\uC911 \uC720\uC9C0 \uCE7C\uB85C\uB9AC \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uBCF8 \uACC4\uC0B0\uAE30\uB294 \uAC80\uC99D\uB41C \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uAC1C\uC778\uBCC4 \uC2E0\uCCB4 \uC9C0\uC218\uB97C \uC0B0\uCD9C\uD569\uB2C8\uB2E4. \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uBC14\uD0D5\uC73C\uB85C \uAD50\uC721\uC801 \uBD84\uC11D \uACB0\uACFC\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."
        },
        {
          "question": " calculate calorie maintenance by age, height (cm), and weight (kg)? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "Input your biological age, gender, height (cm), weight (kg), and weekly activity level to estimate your maintenance calorie baseline."
        },
        {
          "question": "What happens if I eat at my maintenance calories every day? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "Eating at your estimated maintenance calorie level keeps your total energy balance neutral. Your body weight remains relatively constant over time."
        },
        {
          "question": "How do I use my maintenance calories to calculate calories for weight loss? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "A calorie deficit below estimated maintenance calories is commonly used for weight-loss planning, but the appropriate amount varies by individual."
        },
        {
          "question": "Is a calorie maintenance calculator accurate for men and women of all ages? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "Maintenance calorie calculators utilize published mathematical formulas like Mifflin-St Jeor and Harris-Benedict, providing baseline estimates for healthy adults."
        }
      ]
    },
    "hi": {
      "eyebrow": "\u0915\u0948\u0932\u094B\u0930\u0940 \u0930\u0916\u0930\u0916\u093E\u0935 \u0914\u0930 \u092F\u094B\u091C\u0928\u093E",
      "title": "\u0930\u0916\u0930\u0916\u093E\u0935 \u0915\u0948\u0932\u094B\u0930\u0940 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u2013 \u0926\u0948\u0928\u093F\u0915 \u0915\u0948\u0932\u094B\u0930\u0940 \u0906\u0935\u0936\u094D\u092F\u0915\u0924\u093E \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902",
      "intro": "\u0939\u092E\u093E\u0930\u093E \u092E\u0941\u092B\u093C\u094D\u0924 Maintenance Calorie Calculator \u0906\u092A\u0915\u0940 \u0926\u0948\u0928\u093F\u0915 \u0930\u0916\u0930\u0916\u093E\u0935 \u0915\u0948\u0932\u094B\u0930\u0940 \u0914\u0930 \u0935\u091C\u0928 \u0932\u0915\u094D\u0937\u094D\u092F\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u0905\u0928\u0941\u092E\u093E\u0928\u093F\u0924 \u0915\u0948\u0932\u094B\u0930\u0940 \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0924\u093E \u0939\u0948\u0964",
      "formulaTitle": "\u0930\u0916\u0930\u0916\u093E\u0935 \u0915\u0948\u0932\u094B\u0930\u0940 \u0938\u0942\u0924\u094D\u0930 \u090F\u0935\u0902 \u090A\u0930\u094D\u091C\u093E \u0938\u0902\u0924\u0941\u0932\u0928",
      "formulaDesc": "\u0930\u0916\u0930\u0916\u093E\u0935 \u0915\u0948\u0932\u094B\u0930\u0940 = BMR \xD7 activity \u0917\u0941\u0923\u0915\u0964 \u0935\u094D\u092F\u0915\u094D\u0924\u093F\u0917\u0924 \u0932\u0915\u094D\u0937\u094D\u092F\u094B\u0902 \u0915\u0947 \u0906\u0927\u093E\u0930 \u092A\u0930 \u090A\u0930\u094D\u091C\u093E \u0938\u092E\u093E\u092F\u094B\u091C\u0928 \u0915\u093F\u092F\u093E \u091C\u093E \u0938\u0915\u0924\u093E \u0939\u0948\u0964",
      "formulaCode": "Maintenance = BMR \xD7 PAL",
      "tableTitle": "\u0915\u0948\u0932\u094B\u0930\u0940 \u0930\u0916\u0930\u0916\u093E\u0935 \u090F\u0935\u0902 \u0935\u091C\u0928 \u0932\u0915\u094D\u0937\u094D\u092F \u0924\u093E\u0932\u093F\u0915\u093E",
      "tableRows": [
        {
          "col1": "\u0930\u0916\u0930\u0916\u093E\u0935 \u0915\u0948\u0932\u094B\u0930\u0940",
          "col2": "100% TDEE (0 kcal \u092C\u0926\u0932\u093E\u0935)",
          "col3": "\u0935\u0930\u094D\u0924\u092E\u093E\u0928 \u0935\u091C\u0928 \u0915\u094B \u092C\u0928\u093E\u090F \u0930\u0916\u0924\u093E \u0939\u0948"
        },
        {
          "col1": "\u0939\u0932\u094D\u0915\u0940 \u0915\u092E\u0940 (\u0935\u091C\u0928 \u0918\u091F\u093E\u0928\u093E)",
          "col2": "TDEE - 250 kcal/\u0926\u093F\u0928",
          "col3": "\u0927\u0940\u092E\u093E, \u0928\u093F\u0930\u0902\u0924\u0930 \u0935\u091C\u0928 \u0918\u091F\u093E\u0928\u093E (~0.25 \u0915\u093F\u0917\u094D\u0930\u093E \u092A\u094D\u0930\u0924\u093F \u0938\u092A\u094D\u0924\u093E\u0939)"
        },
        {
          "col1": "\u0909\u0926\u093E\u0939\u0930\u0923 \u0915\u0948\u0932\u094B\u0930\u0940 \u0918\u093E\u091F\u093E",
          "col2": "TDEE \u0918\u091F\u093E\u0935 \u0905\u0928\u0941\u092E\u093E\u0928\u093F\u0924 \u0918\u093E\u091F\u093E",
          "col3": "\u0935\u091C\u0928 \u092F\u094B\u091C\u0928\u093E \u0915\u0947 \u0932\u093F\u090F \u0909\u0926\u093E\u0939\u0930\u0923 \u0938\u0902\u0926\u0930\u094D\u092D"
        },
        {
          "col1": "\u092E\u093E\u0902\u0938\u092A\u0947\u0936\u0940 \u0935\u0943\u0926\u094D\u0927\u093F (\u0938\u0930\u092A\u094D\u0932\u0938)",
          "col2": "TDEE + 250 \u0938\u0947 300 kcal/\u0926\u093F\u0928",
          "col3": "\u092E\u093E\u0902\u0938\u092A\u0947\u0936\u0940 \u0928\u093F\u0930\u094D\u092E\u093E\u0923 \u0915\u0947 \u0932\u093F\u090F \u0905\u0924\u093F\u0930\u093F\u0915\u094D\u0924 \u0915\u0948\u0932\u094B\u0930\u0940"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 5",
          "col2": "TDEE + 250 to 300 kcal/day",
          "col3": "\u092A\u094D\u0930\u0924\u093F\u0926\u093F\u0928 250\u2013300 \u0915\u093F\u0932\u094B\u0915\u0948\u0932\u094B\u0930\u0940 \u0905\u0927\u093F\u0915 \u0916\u092A\u0924 \u0915\u093E \u0917\u0923\u093F\u0924\u0940\u092F \u0909\u0926\u093E\u0939\u0930\u0923"
        }
      ],
      "faqs": [
        {
          "question": "\u0930\u0916\u0930\u0916\u093E\u0935 \u0915\u0948\u0932\u094B\u0930\u0940 (Maintenance Calories) \u0915\u094D\u092F\u093E \u0939\u0948\u0902?",
          "answer": "\u0930\u0916\u0930\u0916\u093E\u0935 \u0915\u0948\u0932\u094B\u0930\u0940 \u0935\u0939 \u0915\u0948\u0932\u094B\u0930\u0940 \u092E\u093E\u0924\u094D\u0930\u093E \u0939\u0948 \u091C\u093F\u0938\u0947 \u0916\u093E\u0928\u0947 \u0938\u0947 \u0906\u092A\u0915\u093E \u0935\u091C\u0928 \u0928 \u0924\u094B \u092C\u0922\u093C\u0924\u093E \u0939\u0948 \u0914\u0930 \u0928 \u0939\u0940 \u0918\u091F\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u0930\u0916\u0930\u0916\u093E\u0935 \u0915\u0948\u0932\u094B\u0930\u0940 \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0948\u0938\u0947 \u0939\u094B\u0924\u0940 \u0939\u0948?",
          "answer": "\u092F\u0939 \u0906\u092A\u0915\u0947 BMR \u0914\u0930 \u0906\u092A\u0915\u0940 \u0926\u0948\u0928\u093F\u0915 \u0936\u093E\u0930\u0940\u0930\u093F\u0915 \u0917\u0924\u093F\u0935\u093F\u0927\u093F \u0915\u0947 \u0938\u094D\u0924\u0930 (TDEE) \u0915\u0947 \u0938\u091F\u0940\u0915 \u091C\u094B\u0921\u093C \u092A\u0930 \u0906\u0927\u093E\u0930\u093F\u0924 \u0939\u094B\u0924\u0940 \u0939\u0948\u0964"
        },
        {
          "question": "\u0935\u091C\u0928 \u0918\u091F\u093E\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0930\u0916\u0930\u0916\u093E\u0935 \u0915\u0948\u0932\u094B\u0930\u0940 \u0938\u0947 \u0915\u093F\u0924\u0928\u093E \u0915\u092E \u0916\u093E\u090F\u0902?",
          "answer": "\u0927\u0940\u092E\u0940 \u0914\u0930 \u091F\u093F\u0915\u093E\u090A \u0935\u0938\u093E \u0939\u093E\u0928\u093F \u0915\u0947 \u0932\u093F\u090F \u0930\u0916\u0930\u0916\u093E\u0935 \u0915\u0948\u0932\u094B\u0930\u0940 \u0938\u0947 250 \u0938\u0947 500 \u0915\u0948\u0932\u094B\u0930\u0940 \u0915\u092E \u0916\u093E\u090F\u0902\u0964"
        },
        {
          "question": "\u092E\u093E\u0902\u0938\u092A\u0947\u0936\u093F\u092F\u093E\u0902 \u092C\u0922\u093C\u093E\u0928\u0947 (Bulking) \u0915\u0947 \u0932\u093F\u090F \u0915\u093F\u0924\u0928\u0940 \u0915\u0948\u0932\u094B\u0930\u0940 \u091C\u094B\u0921\u093C\u0947\u0902?",
          "answer": "\u092E\u093E\u0902\u0938\u092A\u0947\u0936\u093F\u092F\u093E\u0902 \u092C\u0922\u093C\u093E\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0930\u0916\u0930\u0916\u093E\u0935 \u0915\u0948\u0932\u094B\u0930\u0940 \u092E\u0947\u0902 250 \u0938\u0947 500 \u0915\u0948\u0932\u094B\u0930\u0940 \u0915\u093E \u0939\u0932\u094D\u0915\u093E \u0938\u0930\u092A\u094D\u0932\u0938 (Surplus) \u091C\u094B\u0921\u093C\u0947\u0902\u0964"
        },
        {
          "question": "\u0915\u094D\u092F\u093E \u0909\u092E\u094D\u0930 \u092C\u0922\u093C\u0928\u0947 \u0938\u0947 \u0930\u0916\u0930\u0916\u093E\u0935 \u0915\u0948\u0932\u094B\u0930\u0940 \u0915\u092E \u0939\u094B\u0924\u0940 \u0939\u0948?",
          "answer": "\u0939\u093E\u0901, \u0909\u092E\u094D\u0930 \u092C\u0922\u093C\u0928\u0947 \u0915\u0947 \u0938\u093E\u0925 \u092E\u0947\u091F\u093E\u092C\u0949\u0932\u093F\u091C\u094D\u092E \u0914\u0930 \u092E\u093E\u0902\u0938\u092A\u0947\u0936\u093F\u092F\u094B\u0902 \u092E\u0947\u0902 \u092A\u094D\u0930\u093E\u0915\u0943\u0924\u093F\u0915 \u0915\u092E\u0940 \u0915\u0947 \u0915\u093E\u0930\u0923 \u0930\u0916\u0930\u0916\u093E\u0935 \u0915\u0948\u0932\u094B\u0930\u0940 \u0925\u094B\u0921\u093C\u093E \u0918\u091F \u0938\u0915\u0924\u0940 \u0939\u0948\u0964"
        }
      ]
    }
  },
  "body-fat-calculator": {
    "en": {
      "eyebrow": "US Navy Anthropometric Reference",
      "title": "Body Fat Calculator \u2013 US Navy Body Fat Percentage Tool",
      "intro": "Estimate your body fat percentage using the US Navy circumference-based estimation formula. Based on waist, neck, height, and hip circumference measurements, estimate your body fat %, lean mass ratio, and ACE health category reference thresholds.",
      "formulaTitle": "US Navy Body Fat Formula Equations (Logarithmic Tape Method)",
      "formulaDesc": "Men: %Fat = 495 / [1.0324 - 0.19077 \xD7 log10(waist - neck in cm) + 0.15456 \xD7 log10(height in cm)] - 450 | Women: %Fat = 495 / [1.29579 - 0.35004 \xD7 log10(waist + hip - neck in cm) + 0.22100 \xD7 log10(height in cm)] - 450",
      "formulaCode": "Men: 495 / [ 1.0324 - 0.19077 log10(W - N) + 0.15456 log10(H) ] - 450 | Women: 495 / [ 1.29579 - 0.35004 log10(W + Hip - N) + 0.22100 log10(H) ] - 450",
      "tableTitle": "ACE & US Navy Body Fat Percentage Categorization Table",
      "tableRows": [
        {
          "col1": "Essential Fat Level",
          "col2": "Men: 2% - 5% | Women: 10% - 13%",
          "col3": "Essential body-fat reference range for physiological function"
        },
        {
          "col1": "Athletes Category",
          "col2": "Men: 6% - 13% | Women: 14% - 20%",
          "col3": "Low body fat percentage typical in endurance & resistance trained athletes"
        },
        {
          "col1": "Fitness Level",
          "col2": "Men: 14% - 17% | Women: 21% - 24%",
          "col3": "Reference range commonly associated with fitness-oriented populations"
        },
        {
          "col1": "Average Population",
          "col2": "Men: 18% - 24% | Women: 25% - 31%",
          "col3": "Standard acceptable body fat percentage range for healthy adults"
        },
        {
          "col1": "Obese Classification",
          "col2": "Men: \u2265 25% | Women: \u2265 32%",
          "col3": "Higher body-fat reference category; interpretation varies by age, sex, population, and measurement method"
        }
      ],
      "faqs": [
        {
          "question": "What is the Body Fat Calculator and how does the US Navy formula work?",
          "answer": "The Body Fat Calculator is an anthropometric health tool developed by the Naval Health Research Center. It computes body fat percentage using circumference measurements (waist, neck, and hips for women) combined with height in a logarithmic regression equation."
        },
        {
          "question": "How accurate is the Body Fat Calculator compared to DEXA scans?",
          "answer": "Circumference-based estimates can differ from laboratory or imaging-based methods such as DEXA. Results should be interpreted as estimates rather than direct measurements."
        },
        {
          "question": "How do I take tape measure readings for the Body Fat Calculator?",
          "answer": "For Men: measure neck circumference just below the larynx and waist horizontally at the navel level. For Women: measure neck below the larynx, waist at the narrowest natural waistline, and hips at the widest point of the buttocks."
        },
        {
          "question": "Why does the Body Fat Calculator use neck and waist instead of scale weight?",
          "answer": "Scale weight alone fails to differentiate between skeletal muscle and adipose fat. Circumference metrics reflect abdominal fat deposition, providing additional context about body composition."
        },
        {
          "question": "What is a healthy body fat percentage for men and women?",
          "answer": "According to the American Council on Exercise (ACE), a healthy fitness body fat percentage is 14%-17% for men and 21%-24% for women. Essential physiological minimum fat is 2-5% for men and 10-13% for women."
        }
      ]
    },
    "es": {
      "eyebrow": "Referencia Antropom\xE9trica de la US Navy",
      "title": "Calculadora de Grasa Corporal \u2013 Porcentaje de Grasa US Navy",
      "intro": "Calcula tu porcentaje de grasa corporal estimado mediante la f\xF3rmula basada en circunferencias de la US Navy. Basado en mediciones de cintura, cuello, altura y cadera.",
      "formulaTitle": "F\xF3rmula de Grasa Corporal de la US Navy (M\xE9todo de Cinta)",
      "formulaDesc": "Hombres: %Grasa = 495 / [1.0324 - 0.19077 \xD7 log10(cintura - cuello cm) + 0.15456 \xD7 log10(altura cm)] - 450 | Mujeres: %Grasa = 495 / [1.29579 - 0.35004 \xD7 log10(cintura + cadera - cuello cm) + 0.22100 \xD7 log10(altura cm)] - 450",
      "formulaCode": "F\xF3rmula US Navy (Cintura + Cuello + Altura)",
      "tableTitle": "Tabla de Clasificaci\xF3n de Grasa Corporal (ACE y US Navy)",
      "tableRows": [
        {
          "col1": "Grasa Esencial",
          "col2": "Hombres: 2% - 5% | Mujeres: 10% - 13%",
          "col3": "Nivel m\xEDnimo fisiol\xF3gico esencial"
        },
        {
          "col1": "Atletas",
          "col2": "Hombres: 6% - 13% | Mujeres: 14% - 20%",
          "col3": "Nivel t\xEDpico en deportistas de resistencia"
        },
        {
          "col1": "Fitness",
          "col2": "Hombres: 14% - 17% | Mujeres: 21% - 24%",
          "col3": "Rango de referencia saludable"
        },
        {
          "col1": "Promedio Poblacional",
          "col2": "Hombres: 18% - 24% | Mujeres: 25% - 31%",
          "col3": "Rango com\xFAn en adultos"
        },
        {
          "col1": "Categor\xEDa / Nivel 5",
          "col2": "Men: \u2265 25% | Women: \u2265 32%",
          "col3": "Categor\xEDa de referencia de mayor grasa corporal; var\xEDa seg\xFAn edad y sexo"
        }
      ],
      "faqs": [
        {
          "question": "\xBFC\xF3mo calcula esta herramienta el porcentaje de grasa corporal?",
          "answer": "Utiliza el m\xE9todo de circunferencia de la Marina de los EE. UU., bas\xE1ndose en la altura, cuello, cintura y cadera."
        },
        {
          "question": "\xBFEn qu\xE9 se diferencia el porcentaje de grasa corporal del IMC?",
          "answer": "El IMC solo eval\xFAa el peso total respecto a la altura, mientras que el porcentaje de grasa distingue la masa magra de la masa adiposa."
        },
        {
          "question": "\xBFCu\xE1les son los rangos saludables de grasa corporal para hombres y mujeres?",
          "answer": "Para hombres adultos el rango de fitness suele estar entre 14-17% y en mujeres entre 21-24% seg\xFAn los est\xE1ndares de la ACE."
        },
        {
          "question": "\xBFQu\xE9 tan precisa es la cinta m\xE9trica en comparaci\xF3n con la exploraci\xF3n DEXA?",
          "answer": "El m\xE9todo de la Marina tiene un margen de error t\xEDpico de \xB13-4%, siendo una alternativa pr\xE1ctica y accesible sin costo."
        },
        {
          "question": "\xBFC\xF3mo puedo reducir el porcentaje de grasa corporal preservando la masa muscular?",
          "answer": "Un d\xE9ficit cal\xF3rico moderado combinado con un consumo adecuado de prote\xEDnas y entrenamiento de fuerza ayuda a preservar el m\xFAsculo."
        }
      ]
    },
    "fr": {
      "eyebrow": "R\xE9f\xE9rence Anthropom\xE9trique de la US Navy",
      "title": "Calculateur de Graisse Corporelle \u2013 Formule US Navy",
      "intro": "Estimez votre pourcentage de graisse corporelle avec la formule de la US Navy bas\xE9e sur les circonf\xE9rences de la taille, du cou et des hanches.",
      "formulaTitle": "Formule de la US Navy pour le Taux de Graisse Corporelle",
      "formulaDesc": "Calcul bas\xE9 sur les circonf\xE9rences du cou, de la taille et des hanches combin\xE9es \xE0 la taille.",
      "formulaCode": "Formule US Navy",
      "tableTitle": "Cat\xE9gories de Taux de Graisse Corporelle (ACE & US Navy)",
      "tableRows": [
        {
          "col1": "Graisse Essentielle",
          "col2": "Hommes : 2% - 5% | Femmes : 10% - 13%",
          "col3": "Niveau minimal physiologique"
        },
        {
          "col1": "Athl\xE8tes",
          "col2": "Hommes : 6% - 13% | Femmes : 14% - 20%",
          "col3": "Niveau habituel chez les sportifs"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 3",
          "col2": "Men: 14% - 17% | Women: 21% - 24%",
          "col3": "Plage de r\xE9f\xE9rence courante pour les populations sportives"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 4",
          "col2": "Men: 18% - 24% | Women: 25% - 31%",
          "col3": "Plage de pourcentage de graisse corporelle acceptable pour adultes en bonne sant\xE9"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 5",
          "col2": "Men: \u2265 25% | Women: \u2265 32%",
          "col3": "Cat\xE9gorie de r\xE9f\xE9rence de masse grasse plus \xE9lev\xE9e ; varie selon l'\xE2ge et le sexe"
        }
      ],
      "faqs": [
        {
          "question": "Comment ce calculateur \xE9value-t-il le taux de masse grasse ?",
          "answer": "Il applique la m\xE9thode anthropom\xE9trique de l'US Navy bas\xE9e sur les mensurations du cou, de la taille, des hanches et de la taille."
        },
        {
          "question": "Quelle est la diff\xE9rence entre l'IMC et le taux de graisse corporelle ?",
          "answer": "L'IMC compare le poids global \xE0 la taille, tandis que la masse grasse distingue pr\xE9cis\xE9ment les tissus adipeux de la masse musculaire."
        },
        {
          "question": "Quels sont les taux de graisse recommand\xE9s pour les hommes et les femmes ?",
          "answer": "Selon l'ACE, une plage de forme se situe entre 14 et 17 % pour les hommes et entre 21 et 24 % pour les femmes."
        },
        {
          "question": "La m\xE9thode du m\xE8tre ruban est-elle fiable ?",
          "answer": "La m\xE9thode US Navy offre une excellente estimation pratique avec un \xE9cart moyen de seulement 3 \xE0 4 % par rapport aux scanners DEXA."
        },
        {
          "question": "Comment perdre du gras sans perdre de muscle ?",
          "answer": "Associez un l\xE9ger d\xE9ficit calorique \xE0 un apport \xE9lev\xE9 en prot\xE9ines et \xE0 un entra\xEEnement contre r\xE9sistance."
        }
      ]
    },
    "de": {
      "eyebrow": "US Navy Anthropometrische Referenz",
      "title": "K\xF6rperfett Rechner \u2013 US Navy K\xF6rperfettanteil Berechnen",
      "intro": "Sch\xE4tzen Sie Ihren K\xF6rperfettanteil nach der US Navy Formel basierend auf Taillen-, Nacken- und H\xFCftumfang.",
      "formulaTitle": "US Navy K\xF6rperfett Formel",
      "formulaDesc": "Berechnung des Fettanteils aus Umfangsmessungen und K\xF6rpergr\xF6\xDFe.",
      "formulaCode": "US Navy Formel",
      "tableTitle": "K\xF6rperfettanteil Kategorisierung (ACE & US Navy)",
      "tableRows": [
        {
          "col1": "Essentielles Fett",
          "col2": "M\xE4nner: 2% - 5% | Frauen: 10% - 13%",
          "col3": "Physiologisches Minimum"
        },
        {
          "col1": "Sportler",
          "col2": "M\xE4nner: 6% - 13% | Frauen: 14% - 20%",
          "col3": "Typisch f\xFCr trainierte Athleten"
        },
        {
          "col1": "Kategorie / Stufe 3",
          "col2": "Men: 14% - 17% | Women: 21% - 24%",
          "col3": "Referenzbereich f\xFCr fitnessorientierte Personen"
        },
        {
          "col1": "Kategorie / Stufe 4",
          "col2": "Men: 18% - 24% | Women: 25% - 31%",
          "col3": "Standardm\xE4\xDFig akzeptabler K\xF6rperfettanteil f\xFCr gesunde Erwachsene"
        },
        {
          "col1": "Kategorie / Stufe 5",
          "col2": "Men: \u2265 25% | Women: \u2265 32%",
          "col3": "H\xF6here K\xF6rperfett-Referenzkategorie; Einordnung variiert nach Alter und Geschlecht"
        }
      ],
      "faqs": [
        {
          "question": "Wie berechnet dieser Rechner den K\xF6rperfettanteil?",
          "answer": "Er nutzt die US Navy-Methode basierend auf den Umfangsmessungen von Nacken, Taille, H\xFCfte und K\xF6rpergr\xF6\xDFe."
        },
        {
          "question": "Was unterscheidet den K\xF6rperfettanteil vom BMI?",
          "answer": "Der BMI ber\xFCcksichtigt nur das Gesamtgewicht, w\xE4hrend der K\xF6rperfettanteil gezielt Fettmasse von Muskelmasse unterscheidet."
        },
        {
          "question": "Welche K\xF6rperfettwerte gelten als gesund?",
          "answer": "Nach ACE-Standards liegt ein fitter Bereich bei M\xE4nnern zwischen 14-17 % und bei Frauen zwischen 21-24 %."
        },
        {
          "question": "Wie genau ist die Ma\xDFband-Methode?",
          "answer": "Die US Navy-Methode bietet eine sehr gute Orientierung mit einer typischen Abweichung von ca. \xB13-4 % im Vergleich zu DEXA-Scans."
        },
        {
          "question": "Wie senkt man den K\xF6rperfettanteil effektiv?",
          "answer": "Ein moderates Kaloriendefizit kombiniert mit ausreichender Proteinaufnahme und Krafttraining ist die bew\xE4hrteste Strategie."
        }
      ]
    },
    "ko": {
      "eyebrow": "\uBBF8 \uD574\uAD70(US Navy) \uC2E0\uCCB4 \uCE21\uC815 \uAE30\uC900",
      "title": "\uCCB4\uC9C0\uBC29 \uACC4\uC0B0\uAE30 \u2013 \uBBF8 \uD574\uAD70 \uCCB4\uC9C0\uBC29\uB960 \uACF5\uC2DD",
      "intro": "\uBBF8 \uD574\uAD70(US Navy) \uB458\uB808 \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uBAA9, \uD5C8\uB9AC, \uC5C9\uB369\uC774 \uB458\uB808 \uBC0F \uD0A4 \uCE21\uC815\uAC12\uC73C\uB85C \uCD94\uC815 \uCCB4\uC9C0\uBC29\uB960(%)\uC744 \uACC4\uC0B0\uD558\uC138\uC694.",
      "formulaTitle": "\uBBF8 \uD574\uAD70 \uCCB4\uC9C0\uBC29 \uACC4\uC0B0 \uACF5\uC2DD",
      "formulaDesc": "\uBAA9\uB458\uB808, \uD5C8\uB9AC\uB458\uB808, \uC2E0\uC7A5\uC744 \uB85C\uADF8 \uD68C\uADC0 \uBC29\uC815\uC2DD\uC5D0 \uB300\uC785\uD558\uC5EC \uC0B0\uCD9C.",
      "formulaCode": "US Navy \uCCB4\uC9C0\uBC29 \uACF5\uC2DD",
      "tableTitle": "ACE \uBC0F \uBBF8 \uD574\uAD70 \uCCB4\uC9C0\uBC29\uB960 \uBD84\uB958\uD45C",
      "tableRows": [
        {
          "col1": "\uD544\uC218 \uC9C0\uBC29 \uC218\uC900",
          "col2": "\uB0A8\uC131: 2% - 5% | \uC5EC\uC131: 10% - 13%",
          "col3": "\uC0DD\uB9AC\uD559\uC801 \uD544\uC218 \uCD5C\uC18C \uBC94\uC704"
        },
        {
          "col1": "\uC6B4\uB3D9\uC120\uC218 \uBC94\uC8FC",
          "col2": "\uB0A8\uC131: 6% - 13% | \uC5EC\uC131: 14% - 20%",
          "col3": "\uC6B4\uB3D9\uC120\uC218\uC758 \uC77C\uBC18\uC801 \uCCB4\uC9C0\uBC29\uB960"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 3",
          "col2": "Men: 14% - 17% | Women: 21% - 24%",
          "col3": "\uD53C\uD2B8\uB2C8\uC2A4 \uC9C0\uD5A5 \uC778\uAD6C\uC5D0\uC11C \uD754\uD788 \uC0AC\uC6A9\uB418\uB294 \uAE30\uC900 \uBC94\uC704"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 4",
          "col2": "Men: 18% - 24% | Women: 25% - 31%",
          "col3": "\uAC74\uAC15\uD55C \uC131\uC778\uC744 \uC704\uD55C \uD45C\uC900 \uAD8C\uC7A5 \uCCB4\uC9C0\uBC29\uB960 \uBC94\uC704"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 5",
          "col2": "Men: \u2265 25% | Women: \u2265 32%",
          "col3": "\uB192\uC740 \uCCB4\uC9C0\uBC29 \uCC38\uACE0 \uBC94\uC8FC; \uC5F0\uB839 \uBC0F \uC131\uBCC4\uC5D0 \uB530\uB77C \uD574\uC11D \uCC28\uC774"
        }
      ],
      "faqs": [
        {
          "question": "\uCCB4\uC9C0\uBC29\uB960 \uACC4\uC0B0\uAE30\uB294 \uC5B4\uB5A4 \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uB098\uC694?",
          "answer": "\uC2E0\uC7A5, \uBAA9, \uD5C8\uB9AC, \uC5C9\uB369\uC774 \uB458\uB808 \uCE21\uC815\uAC12\uC744 \uD65C\uC6A9\uD558\uB294 \uBBF8\uAD6D \uD574\uAD70(US Navy) \uC2E0\uCCB4 \uC870\uC131 \uACF5\uC2DD\uC744 \uC801\uC6A9\uD569\uB2C8\uB2E4."
        },
        {
          "question": "BMI \uC218\uCE58\uC640 \uCCB4\uC9C0\uBC29\uB960\uC758 \uCC28\uC774\uB294 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "BMI\uB294 \uC804\uCCB4 \uCCB4\uC911\uACFC \uC2E0\uC7A5\uB9CC\uC744 \uBE44\uAD50\uD558\uC9C0\uB9CC, \uCCB4\uC9C0\uBC29\uB960\uC740 \uC2E4\uC81C \uCCB4\uC9C0\uBC29\uB7C9\uACFC \uC81C\uC9C0\uBC29 \uADFC\uC721\uB7C9\uC744 \uAD6C\uBD84\uD558\uC5EC \uCE21\uC815\uD569\uB2C8\uB2E4."
        },
        {
          "question": "\uB0A8\uC131\uACFC \uC5EC\uC131\uC758 \uAD8C\uC7A5 \uCCB4\uC9C0\uBC29\uB960 \uAE30\uC900\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "ACE \uC9C0\uCE68 \uAE30\uC900 \uD53C\uD2B8\uB2C8\uC2A4 \uAD8C\uC7A5 \uBC94\uC8FC\uB294 \uC131\uC778 \uB0A8\uC131 14~17%, \uC131\uC778 \uC5EC\uC131 21~24% \uC218\uC900\uC785\uB2C8\uB2E4."
        },
        {
          "question": "\uC904\uC790 \uCE21\uC815 \uBC29\uC2DD\uC758 \uC815\uD655\uB3C4\uB294 \uC5B4\uB290 \uC815\uB3C4\uC778\uAC00\uC694?",
          "answer": "US Navy \uBC29\uC2DD\uC740 DEXA \uC2A4\uCE94 \uB300\uBE44 \uC57D \xB13~4%\uC758 \uC624\uCC28 \uBC94\uC704\uB97C \uAC16\uB294 \uB9E4\uC6B0 \uC2E4\uC6A9\uC801\uC774\uACE0 \uC811\uADFC\uC131 \uB192\uC740 \uCD94\uC815\uBC95\uC785\uB2C8\uB2E4."
        },
        {
          "question": "\uADFC\uC190\uC2E4 \uC5C6\uC774 \uCCB4\uC9C0\uBC29\uB9CC \uAC10\uB7C9\uD558\uB824\uBA74 \uC5B4\uB5BB\uAC8C \uD574\uC57C \uD558\uB098\uC694?",
          "answer": "\uC644\uB9CC\uD55C \uCE7C\uB85C\uB9AC \uC801\uC790\uB97C \uC720\uC9C0\uD558\uBA74\uC11C \uCDA9\uBD84\uD55C \uB2E8\uBC31\uC9C8 \uC12D\uCDE8\uC640 \uADFC\uB825 \uC6B4\uB3D9\uC744 \uBCD1\uD589\uD558\uB294 \uAC83\uC774 \uD575\uC2EC\uC785\uB2C8\uB2E4."
        }
      ]
    },
    "hi": {
      "eyebrow": "\u092F\u0942\u090F\u0938 \u0928\u0947\u0935\u0940 \u090F\u0902\u0925\u094D\u0930\u094B\u092A\u094B\u092E\u0947\u091F\u094D\u0930\u093F\u0915 \u092E\u093E\u0928\u0915",
      "title": "\u092C\u0949\u0921\u0940 \u092B\u0948\u091F \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u2013 \u092F\u0942\u090F\u0938 \u0928\u0947\u0935\u0940 \u0935\u0938\u093E \u092A\u094D\u0930\u0924\u093F\u0936\u0924",
      "intro": "\u0915\u092E\u0930, \u0917\u0930\u094D\u0926\u0928, \u090A\u0902\u091A\u093E\u0908 \u0914\u0930 \u0915\u0942\u0932\u094D\u0939\u0947 \u0915\u0940 \u092A\u0930\u093F\u0927\u093F \u0915\u0947 \u0906\u0927\u093E\u0930 \u092A\u0930 \u092F\u0942\u090F\u0938 \u0928\u0947\u0935\u0940 \u092B\u0949\u0930\u094D\u092E\u0942\u0932\u093E \u0938\u0947 \u0905\u092A\u0928\u0947 \u0936\u0930\u0940\u0930 \u0915\u0947 \u0935\u0938\u093E \u092A\u094D\u0930\u0924\u093F\u0936\u0924 \u0915\u093E \u0905\u0928\u0941\u092E\u093E\u0928 \u0932\u0917\u093E\u090F\u0902\u0964",
      "formulaTitle": "\u092F\u0942\u090F\u0938 \u0928\u0947\u0935\u0940 \u092C\u0949\u0921\u0940 \u092B\u0948\u091F \u0938\u0942\u0924\u094D\u0930",
      "formulaDesc": "\u0915\u092E\u0930 \u0914\u0930 \u0917\u0930\u094D\u0926\u0928 \u0915\u0940 \u092A\u0930\u093F\u0927\u093F \u0924\u0925\u093E \u090A\u0902\u091A\u093E\u0908 \u0938\u0947 \u092C\u0949\u0921\u0940 \u092B\u0948\u091F \u0915\u0940 \u0917\u0923\u0928\u093E\u0964",
      "formulaCode": "US Navy Body Fat Formula",
      "tableTitle": "\u092C\u0949\u0921\u0940 \u092B\u0948\u091F \u092A\u094D\u0930\u0924\u093F\u0936\u0924 \u0935\u0930\u094D\u0917\u0940\u0915\u0930\u0923 \u0924\u093E\u0932\u093F\u0915\u093E",
      "tableRows": [
        {
          "col1": "\u0906\u0935\u0936\u094D\u092F\u0915 \u0935\u0938\u093E \u0938\u094D\u0924\u0930",
          "col2": "\u092A\u0941\u0930\u0941\u0937: 2% - 5% | \u092E\u0939\u093F\u0932\u093E: 10% - 13%",
          "col3": "\u0928\u094D\u092F\u0942\u0928\u0924\u092E \u091C\u0948\u0935\u093F\u0915 \u0935\u0938\u093E \u0938\u094D\u0924\u0930"
        },
        {
          "col1": "\u090F\u0925\u0932\u0940\u091F \u0936\u094D\u0930\u0947\u0923\u0940",
          "col2": "\u092A\u0941\u0930\u0941\u0937: 6% - 13% | \u092E\u0939\u093F\u0932\u093E: 14% - 20%",
          "col3": "\u090F\u0925\u0932\u0940\u091F\u094B\u0902 \u092E\u0947\u0902 \u0938\u093E\u092E\u093E\u0928\u094D\u092F \u0935\u0938\u093E"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 3",
          "col2": "Men: 14% - 17% | Women: 21% - 24%",
          "col3": "\u092B\u093F\u091F\u0928\u0947\u0938 \u0909\u0928\u094D\u092E\u0941\u0916 \u0935\u094D\u092F\u0915\u094D\u0924\u093F\u092F\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 4",
          "col2": "Men: 18% - 24% | Women: 25% - 31%",
          "col3": "\u0938\u094D\u0935\u0938\u094D\u0925 \u0935\u092F\u0938\u094D\u0915\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u092E\u093E\u0928\u0915 \u0938\u094D\u0935\u0940\u0915\u093E\u0930\u094D\u092F \u0936\u0930\u0940\u0930 \u0935\u0938\u093E \u092A\u094D\u0930\u0924\u093F\u0936\u0924 \u0938\u0940\u092E\u093E"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 5",
          "col2": "Men: \u2265 25% | Women: \u2265 32%",
          "col3": "\u0909\u091A\u094D\u091A \u0936\u0930\u0940\u0930 \u0935\u0938\u093E \u0938\u0902\u0926\u0930\u094D\u092D \u0936\u094D\u0930\u0947\u0923\u0940; \u0906\u092F\u0941 \u0914\u0930 \u0932\u093F\u0902\u0917 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0935\u094D\u092F\u093E\u0916\u094D\u092F\u093E \u092D\u093F\u0928\u094D\u0928"
        }
      ],
      "faqs": [
        {
          "question": "\u092C\u0949\u0921\u0940 \u092B\u0948\u091F \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u0936\u0930\u0940\u0930 \u0915\u0940 \u0935\u0938\u093E \u0915\u0948\u0938\u0947 \u092E\u093E\u092A\u0924\u093E \u0939\u0948?",
          "answer": "\u092F\u0939 \u092F\u0942\u090F\u0938 \u0928\u0947\u0935\u0940 \u0935\u093F\u0927\u093F \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0915\u0947 \u0917\u0930\u094D\u0926\u0928, \u0915\u092E\u0930, \u0915\u0942\u0932\u094D\u0939\u0947 \u0914\u0930 \u090A\u0902\u091A\u093E\u0908 \u0915\u0940 \u092E\u093E\u092A \u0938\u0947 \u0935\u0938\u093E \u092A\u094D\u0930\u0924\u093F\u0936\u0924 \u0915\u093E \u0905\u0928\u0941\u092E\u093E\u0928 \u0932\u0917\u093E\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u092C\u0949\u0921\u0940 \u092B\u0948\u091F \u0914\u0930 \u092C\u0940\u090F\u092E\u0906\u0908 \u092E\u0947\u0902 \u0915\u094D\u092F\u093E \u0905\u0902\u0924\u0930 \u0939\u0948?",
          "answer": "\u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0947\u0935\u0932 \u090A\u0902\u091A\u093E\u0908 \u0914\u0930 \u0935\u091C\u0928 \u0915\u093E \u0905\u0928\u0941\u092A\u093E\u0924 \u0939\u0948, \u091C\u092C\u0915\u093F \u092C\u0949\u0921\u0940 \u092B\u0948\u091F \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u092E\u093E\u0902\u0938\u092A\u0947\u0936\u093F\u092F\u094B\u0902 \u0914\u0930 \u0935\u0938\u093E \u0915\u0947 \u0905\u0928\u0941\u092A\u093E\u0924 \u0915\u094B \u0905\u0932\u0917 \u0915\u0930\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u092A\u0941\u0930\u0941\u0937\u094B\u0902 \u0914\u0930 \u092E\u0939\u093F\u0932\u093E\u0913\u0902 \u0915\u0947 \u0932\u093F\u090F \u0938\u094D\u0935\u0938\u094D\u0925 \u0935\u0938\u093E \u092A\u094D\u0930\u0924\u093F\u0936\u0924 \u0915\u094D\u092F\u093E \u0939\u0948?",
          "answer": "\u090F\u0938\u0940\u0908 (ACE) \u092E\u093E\u0928\u0915\u094B\u0902 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u092A\u0941\u0930\u0941\u0937\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F 14-17% \u0914\u0930 \u092E\u0939\u093F\u0932\u093E\u0913\u0902 \u0915\u0947 \u0932\u093F\u090F 21-24% \u0915\u094B \u092B\u093F\u091F\u0928\u0947\u0938 \u0915\u093E \u0905\u091A\u094D\u091B\u093E \u0938\u094D\u0924\u0930 \u092E\u093E\u0928\u093E \u091C\u093E\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u0915\u094D\u092F\u093E \u091F\u0947\u092A \u092E\u093E\u092A \u0938\u0947 \u0935\u0938\u093E \u092E\u093E\u092A\u0928\u093E \u0938\u091F\u0940\u0915 \u0939\u0948?",
          "answer": "\u092F\u0942\u090F\u0938 \u0928\u0947\u0935\u0940 \u0935\u093F\u0927\u093F DEXA \u0938\u094D\u0915\u0948\u0928 \u0915\u0940 \u0924\u0941\u0932\u0928\u093E \u092E\u0947\u0902 \xB13-4% \u0915\u0947 \u0905\u0902\u0924\u0930 \u0915\u0947 \u0938\u093E\u0925 \u090F\u0915 \u0935\u093F\u0936\u094D\u0935\u0938\u0928\u0940\u092F \u0914\u0930 \u0906\u0938\u093E\u0928 \u092E\u0941\u092B\u093C\u094D\u0924 \u0935\u093F\u0915\u0932\u094D\u092A \u0939\u0948\u0964"
        },
        {
          "question": "\u092E\u093E\u0902\u0938\u092A\u0947\u0936\u093F\u092F\u094B\u0902 \u0915\u094B \u092C\u091A\u093E\u0924\u0947 \u0939\u0941\u090F \u0935\u0938\u093E \u0915\u0948\u0938\u0947 \u0918\u091F\u093E\u090F\u0902?",
          "answer": "\u0939\u0932\u094D\u0915\u093E \u0915\u0948\u0932\u094B\u0930\u0940 \u0918\u093E\u091F\u093E, \u092A\u0930\u094D\u092F\u093E\u092A\u094D\u0924 \u092A\u094D\u0930\u094B\u091F\u0940\u0928 \u0914\u0930 \u0928\u093F\u092F\u092E\u093F\u0924 \u0938\u094D\u091F\u094D\u0930\u0947\u0902\u0925 \u091F\u094D\u0930\u0947\u0928\u093F\u0902\u0917 \u0938\u0947 \u0935\u0938\u093E \u0915\u092E \u0915\u0930\u0924\u0947 \u0938\u092E\u092F \u092E\u093E\u0902\u0938\u092A\u0947\u0936\u093F\u092F\u093E\u0902 \u092C\u0928\u0940 \u0930\u0939\u0924\u0940 \u0939\u0948\u0902\u0964"
        }
      ]
    }
  },
  "lean-body-mass-calculator": {
    "en": {
      "eyebrow": "Boer Predictive Equation",
      "title": "Lean Body Mass Calculator & LBM Reference Tool",
      "intro": "Using the Boer formula, estimate lean body mass from height, weight and sex. LBM is a mathematical estimate and is not the same as skeletal muscle mass or organ weight.",
      "formulaTitle": "Boer Formula for LBM",
      "formulaDesc": "Men: LBM = (0.407 \xD7 W) + (0.267 \xD7 H) - 19.2 | Women: LBM = (0.252 \xD7 W) + (0.473 \xD7 H) - 48.3",
      "tableTitle": "Boer Equation Formula Reference",
      "tableRows": [
        {
          "col1": "Boer Equation (Men)",
          "col2": "(0.407 \xD7 W) + (0.267 \xD7 H) - 19.2",
          "col3": "Predictive formula for estimated lean mass in males"
        },
        {
          "col1": "Boer Equation (Women)",
          "col2": "(0.252 \xD7 W) + (0.473 \xD7 H) - 48.3",
          "col3": "Predictive formula for estimated lean mass in females"
        }
      ],
      "faqs": [
        {
          "question": "What is the Lean Body Mass Calculator?",
          "answer": "The Lean Body Mass Calculator uses the Boer predictive equation to estimate non-fat body mass from height, weight, and sex. It is a mathematical estimate and does not directly measure skeletal muscle or organ weight."
        },
        {
          "question": "Why is Lean Body Mass useful in body composition tracking?",
          "answer": "LBM estimates can be used as one reference when tracking changes in estimated non-fat body mass."
        }
      ]
    },
    "es": {
      "eyebrow": "Est\xE1ndares de Referencia de Salud",
      "title": "Lean Body Mass Calculator & LBM Reference Tool \u2013 Gu\xEDa y Calculadora",
      "intro": "Herramienta de c\xE1lculo y referencia educativa dise\xF1ada seg\xFAn los est\xE1ndares de salud publicados de la OMS y CDC. Calcula tus m\xE9tricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "F\xF3rmula de Referencia Est\xE1ndar",
      "formulaDesc": "Calculado utilizando ecuaciones est\xE1ndar validadas.",
      "tableTitle": "Tabla de Referencia Est\xE1ndar",
      "tableRows": [
        {
          "col1": "Categor\xEDa / Nivel 1",
          "col2": "(0.407 \xD7 W) + (0.267 \xD7 H) - 19.2",
          "col3": "F\xF3rmula predictiva para masa magra estimada en hombres"
        },
        {
          "col1": "Categor\xEDa / Nivel 2",
          "col2": "(0.252 \xD7 W) + (0.473 \xD7 H) - 48.3",
          "col3": "F\xF3rmula predictiva para masa magra estimada en mujeres"
        }
      ],
      "faqs": [
        {
          "question": "\xBFC\xF3mo funciona la calculadora de masa corporal magra y qu\xE9 mide?",
          "answer": "Esta calculadora eval\xFAa tus datos personales utilizando ecuaciones validadas. Proporciona una estimaci\xF3n educativa para ayudarte a comprender tu estado de salud y referencias est\xE1ndar."
        },
        {
          "question": "Por qu\xE9 es Lean Body Mass useful in body composition tracking?",
          "answer": "LBM estimates can be used as one reference when tracking changes in estimated non-fat body mass."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de R\xE9f\xE9rence de Sant\xE9",
      "title": "Lean Body Mass Calculator & LBM Reference Tool \u2013 Outil de R\xE9f\xE9rence",
      "intro": "Outil de calcul et de r\xE9f\xE9rence \xE9ducatif con\xE7u selon les normes de sant\xE9 publi\xE9es de l'OMS et du CDC. Calculez vos m\xE9triques et consultez les plages de r\xE9f\xE9rence.",
      "formulaTitle": "Formule de R\xE9f\xE9rence Standard",
      "formulaDesc": "Calcul\xE9 \xE0 l'aide d'\xE9quations standards valid\xE9es.",
      "tableTitle": "Tableau de R\xE9f\xE9rence Standard",
      "tableRows": [
        {
          "col1": "Cat\xE9gorie / Niveau 1",
          "col2": "(0.407 \xD7 W) + (0.267 \xD7 H) - 19.2",
          "col3": "Formule pr\xE9dictive de masse maigre estim\xE9e chez les hommes"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 2",
          "col2": "(0.252 \xD7 W) + (0.473 \xD7 H) - 48.3",
          "col3": "Formule pr\xE9dictive de masse maigre estim\xE9e chez les femmes"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de masse corporelle maigre et que mesure-t-il ?",
          "answer": "Ce calculateur \xE9value vos donn\xE9es personnelles \xE0 l'aide d'\xE9quations valid\xE9es. Il fournit une estimation \xE9ducative pour vous aider \xE0 comprendre vos m\xE9triques et r\xE9f\xE9rences standards."
        },
        {
          "question": "Pourquoi Lean Body Mass useful in body composition tracking?",
          "answer": "LBM estimates can be used as one reference when tracking changes in estimated non-fat body mass."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "Lean Body Mass Calculator & LBM Reference Tool \u2013 Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den ver\xF6ffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und pr\xFCfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardm\xE4\xDFig validierten Gleichungen.",
      "tableTitle": "Standard-Referenztabelle",
      "tableRows": [
        {
          "col1": "Kategorie / Stufe 1",
          "col2": "(0.407 \xD7 W) + (0.267 \xD7 H) - 19.2",
          "col3": "Pr\xE4diktive Formel f\xFCr gesch\xE4tzte Magermasse bei M\xE4nnern"
        },
        {
          "col1": "Kategorie / Stufe 2",
          "col2": "(0.252 \xD7 W) + (0.473 \xD7 H) - 48.3",
          "col3": "Pr\xE4diktive Formel f\xFCr gesch\xE4tzte Magermasse bei Frauen"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der Magerkurven-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre pers\xF6nlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        },
        {
          "question": "Warum ist Lean Body Mass useful in body composition tracking?",
          "answer": "LBM estimates can be used as one reference when tracking changes in estimated non-fat body mass."
        }
      ]
    },
    "ko": {
      "eyebrow": "\uAC74\uAC15 \uCC38\uC870 \uD45C\uC900 \uC9C0\uCE68",
      "title": "Lean Body Mass \uACC4\uC0B0\uAE30 & LBM Reference \uB3C4\uAD6C \u2013 \uCC38\uC870 \uACC4\uC0B0\uAE30",
      "intro": "WHO \uBC0F CDC \uC9C0\uCE68\uC5D0 \uAE30\uBC18\uD55C \uC2E4\uC2DC\uAC04 \uCC38\uACE0 \uACC4\uC0B0\uAE30\uC785\uB2C8\uB2E4. \uAC1C\uC778\uBCC4 \uC218\uCE58\uB97C \uCE21\uC815\uD558\uACE0 \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uD655\uC778\uD558\uC138\uC694.",
      "formulaTitle": "\uD45C\uC900 \uACC4\uC0B0 \uACF5\uC2DD",
      "formulaDesc": "\uAC80\uC99D\uB41C \uD45C\uC900 \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uACC4\uC0B0\uB429\uB2C8\uB2E4.",
      "tableTitle": "\uD45C\uC900 \uCC38\uC870 \uC9C4\uB2E8\uD45C",
      "tableRows": [
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 1",
          "col2": "(0.407 \xD7 W) + (0.267 \xD7 H) - 19.2",
          "col3": "\uB0A8\uC131\uC758 \uCD94\uC815 \uC81C\uC9C0\uBC29\uB7C9 \uC0B0\uCD9C \uACF5\uC2DD"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 2",
          "col2": "(0.252 \xD7 W) + (0.473 \xD7 H) - 48.3",
          "col3": "\uC5EC\uC131\uC758 \uCD94\uC815 \uC81C\uC9C0\uBC29\uB7C9 \uC0B0\uCD9C \uACF5\uC2DD"
        }
      ],
      "faqs": [
        {
          "question": "\uC81C\uC9C0\uBC29\uB7C9 \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uBCF8 \uACC4\uC0B0\uAE30\uB294 \uAC80\uC99D\uB41C \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uAC1C\uC778\uBCC4 \uC2E0\uCCB4 \uC9C0\uC218\uB97C \uC0B0\uCD9C\uD569\uB2C8\uB2E4. \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uBC14\uD0D5\uC73C\uB85C \uAD50\uC721\uC801 \uBD84\uC11D \uACB0\uACFC\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."
        },
        {
          "question": "Why is Lean Body Mass useful in body composition tracking? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "LBM estimates can be used as one reference when tracking changes in estimated non-fat body mass."
        }
      ]
    },
    "hi": {
      "eyebrow": "\u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0938\u0902\u0926\u0930\u094D\u092D \u092E\u093E\u0928\u0915",
      "title": "Lean Body Mass \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 & LBM Reference \u091F\u0942\u0932 \u2013 \u092E\u0941\u092B\u094D\u0924 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930",
      "intro": "\u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u0914\u0930 \u0938\u0940\u0921\u0940\u0938\u0940 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u092E\u093E\u0928\u0915\u094B\u0902 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0928\u093F\u0930\u094D\u092E\u093F\u0924 \u0938\u0902\u0926\u0930\u094D\u092D \u091F\u0942\u0932\u0964 \u0905\u092A\u0928\u0940 \u092E\u0947\u091F\u094D\u0930\u093F\u0915\u094D\u0938 \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902 \u0914\u0930 \u0938\u094D\u0925\u093E\u092A\u093F\u0924 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0938\u0940\u092E\u093E\u0913\u0902 \u0915\u0940 \u0938\u092E\u0940\u0915\u094D\u0937\u093E \u0915\u0930\u0947\u0902\u0964",
      "formulaTitle": "\u092E\u093E\u0928\u0915 \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0942\u0924\u094D\u0930",
      "formulaDesc": "\u092E\u093E\u0928\u0915 \u0938\u0924\u094D\u092F\u093E\u092A\u093F\u0924 \u0938\u092E\u0940\u0915\u0930\u0923\u094B\u0902 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0915\u0947 \u0917\u0923\u0928\u093E \u0915\u0940 \u0917\u0908\u0964",
      "tableTitle": "\u092E\u093E\u0928\u0915 \u0938\u0902\u0926\u0930\u094D\u092D \u0924\u093E\u0932\u093F\u0915\u093E",
      "tableRows": [
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 1",
          "col2": "(0.407 \xD7 W) + (0.267 \xD7 H) - 19.2",
          "col3": "\u092A\u0941\u0930\u0941\u0937\u094B\u0902 \u092E\u0947\u0902 \u0905\u0928\u0941\u092E\u093E\u0928\u093F\u0924 \u0932\u0940\u0928 \u092E\u093E\u0938 \u0915\u093E \u0938\u0942\u0924\u094D\u0930"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 2",
          "col2": "(0.252 \xD7 W) + (0.473 \xD7 H) - 48.3",
          "col3": "\u092E\u0939\u093F\u0932\u093E\u0913\u0902 \u092E\u0947\u0902 \u0905\u0928\u0941\u092E\u093E\u0928\u093F\u0924 \u0932\u0940\u0928 \u092E\u093E\u0938 \u0915\u093E \u0938\u0942\u0924\u094D\u0930"
        }
      ],
      "faqs": [
        {
          "question": "\u0932\u0940\u0928 \u092C\u0949\u0921\u0940 \u092E\u093E\u0938 (Lean Body Mass) \u0915\u094D\u092F\u093E \u0939\u0948?",
          "answer": "\u0932\u0940\u0928 \u092C\u0949\u0921\u0940 \u092E\u093E\u0938 \u0906\u092A\u0915\u0947 \u0915\u0941\u0932 \u0936\u0930\u0940\u0930 \u0915\u0947 \u0935\u091C\u0928 \u092E\u0947\u0902 \u0938\u0947 \u0935\u0938\u093E \u0915\u0947 \u0935\u091C\u0928 \u0915\u094B \u0918\u091F\u093E\u0928\u0947 \u0915\u0947 \u092C\u093E\u0926 \u092C\u091A\u0940 \u092E\u093E\u0902\u0938\u092A\u0947\u0936\u093F\u092F\u094B\u0902, \u0939\u0921\u094D\u0921\u093F\u092F\u094B\u0902 \u0914\u0930 \u092A\u093E\u0928\u0940 \u0915\u093E \u0935\u091C\u0928 \u0939\u0948\u0964"
        },
        {
          "question": "\u0932\u0940\u0928 \u092C\u0949\u0921\u0940 \u092E\u093E\u0938 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u0915\u093F\u0938 \u0938\u0942\u0924\u094D\u0930 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0924\u093E \u0939\u0948?",
          "answer": "\u092F\u0939 \u092C\u094B\u0905\u0930 (Boer) \u0938\u0942\u0924\u094D\u0930 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0924\u093E \u0939\u0948 \u091C\u094B \u0935\u091C\u0928 \u0914\u0930 \u090A\u0902\u091A\u093E\u0908 \u0915\u0947 \u0906\u0927\u093E\u0930 \u092A\u0930 \u0932\u0940\u0928 \u092E\u093E\u0938 \u0915\u093E \u0938\u091F\u0940\u0915 \u0905\u0928\u0941\u092E\u093E\u0928 \u0932\u0917\u093E\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u092A\u094D\u0930\u094B\u091F\u0940\u0928 \u0915\u0940 \u0906\u0935\u0936\u094D\u092F\u0915\u0924\u093E \u0915\u0947 \u0932\u093F\u090F LBM \u0915\u094D\u092F\u094B\u0902 \u092E\u0939\u0924\u094D\u0935\u092A\u0942\u0930\u094D\u0923 \u0939\u0948?",
          "answer": "\u090F\u0925\u0932\u0940\u091F \u0914\u0930 \u092C\u0949\u0921\u0940\u092C\u093F\u0932\u094D\u0921\u0930 \u0905\u0915\u094D\u0938\u0930 \u0915\u0941\u0932 \u0935\u091C\u0928 \u0915\u0947 \u092C\u091C\u093E\u092F \u0932\u0940\u0928 \u092C\u0949\u0921\u0940 \u092E\u093E\u0938 \u0915\u0947 \u0906\u0927\u093E\u0930 \u092A\u0930 \u0905\u092A\u0928\u0947 \u092A\u094D\u0930\u094B\u091F\u0940\u0928 \u0932\u0915\u094D\u0937\u094D\u092F \u0924\u092F \u0915\u0930\u0924\u0947 \u0939\u0948\u0902\u0964"
        },
        {
          "question": "LBM \u0914\u0930 \u0935\u0938\u093E \u0926\u094D\u0930\u0935\u094D\u092F\u092E\u093E\u0928 (Fat Mass) \u092E\u0947\u0902 \u0915\u094D\u092F\u093E \u0905\u0902\u0924\u0930 \u0939\u0948?",
          "answer": "LBM \u0936\u0930\u0940\u0930 \u0915\u0947 \u0917\u0948\u0930-\u0935\u0938\u093E \u0935\u093E\u0932\u0947 \u090A\u0924\u0915\u094B\u0902 \u0915\u093E \u0935\u091C\u0928 \u0939\u0948, \u091C\u092C\u0915\u093F \u092B\u0948\u091F \u092E\u093E\u0938 \u0936\u0930\u0940\u0930 \u092E\u0947\u0902 \u092E\u094C\u091C\u0942\u0926 \u0935\u0938\u093E \u0915\u093E \u0915\u0941\u0932 \u0935\u091C\u0928 \u0939\u0948\u0964"
        },
        {
          "question": "\u0921\u093E\u0907\u091F \u0915\u0947 \u0926\u094C\u0930\u093E\u0928 LBM \u0915\u094B \u0915\u0948\u0938\u0947 \u092C\u091A\u093E\u090F\u0902?",
          "answer": "\u0909\u091A\u094D\u091A \u092A\u094D\u0930\u094B\u091F\u0940\u0928 \u0906\u0939\u093E\u0930 \u0914\u0930 \u092D\u093E\u0930\u0940 \u0935\u091C\u0928 \u0909\u0920\u093E\u0928\u0947 (Resistance Training) \u0938\u0947 \u0921\u093E\u0907\u091F \u0915\u0947 \u0926\u094C\u0930\u093E\u0928 \u0932\u0940\u0928 \u092E\u093E\u0938 \u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924 \u0930\u0939\u0924\u093E \u0939\u0948\u0964"
        }
      ]
    }
  },
  "ideal-weight-calculator": {
    "en": {
      "eyebrow": "Ideal Body Weight Reference",
      "title": "Estimate Ideal Body Weight (IBW) using commonly cited equations",
      "intro": "Our free Ideal Weight Calculator estimates reference ideal body weight based on height (cm or inches) and biological sex (female or male) using four published equations: Devine, Robinson, Miller, and Hamwi equations alongside WHO healthy BMI ranges.",
      "formulaTitle": "Standard IBW Formulas (Devine, Robinson, Miller & Hamwi)",
      "formulaDesc": 'Devine, Robinson, Miller and Hamwi equations provide different reference estimates; they should not be interpreted as a universally "ideal" or medically required body weight.',
      "formulaCode": "IBW = Base Weight + (Factor \xD7 Height over 5ft)",
      "tableTitle": "Ideal Body Weight (IBW) Comparison Table by Height & Formula",
      "tableRows": [
        {
          "col1": "Devine Formula (1974)",
          "col2": "50 kg (M) / 45.5 kg (F) + 2.3 kg/in > 5ft",
          "col3": "Widely cited formula introduced in 1974"
        },
        {
          "col1": "Robinson Formula (1983)",
          "col2": "52 kg (M) / 49.0 kg (F) + 1.9 or 1.7 kg/in",
          "col3": "Modification of Devine formula optimized for medium frame adults"
        },
        {
          "col1": "Miller Formula (1983)",
          "col2": "56.2 kg (M) / 53.1 kg (F) + 1.41 or 1.36 kg/in",
          "col3": "Higher base estimate for shorter individuals, gentler slope per inch"
        },
        {
          "col1": "Hamwi Formula (1964)",
          "col2": "48 kg (M) / 45.5 kg (F) + 2.7 or 2.2 kg/in",
          "col3": "Historical reference formula"
        },
        {
          "col1": "WHO Healthy BMI Range",
          "col2": "18.5 \u2013 24.9 kg/m\xB2",
          "col3": "Population health reference window based on height squared"
        }
      ],
      "faqs": [
        {
          "question": "What is an Ideal Weight Calculator (IBW Calculator)?",
          "answer": "An Ideal Weight Calculator estimates target weight ranges based on height (cm/inches) and biological gender using published equations: Devine, Robinson, Miller, and Hamwi."
        },
        {
          "question": "What is my ideal weight for my height in kg or lbs?",
          "answer": "Enter your height in cm or feet/inches and select male or female. For example, a 5 ft 10 in (178 cm) male has an estimated IBW of ~73 kg via Devine formula, with a WHO healthy weight range of 58.6 kg to 78.9 kg."
        },
        {
          "question": "Why are there different formulas for calculating ideal weight for females vs males?",
          "answer": "Biological males typically have higher average muscle density and bone mass per unit of height than females, resulting in separate base constants in formulas."
        },
        {
          "question": "What is the difference between Ideal Body Weight (IBW) and healthy BMI weight range?",
          "answer": "IBW formulas provide specific formula-based estimates, whereas the WHO healthy BMI weight range gives a broad window (18.5 to 24.9 kg/m\xB2) accommodating different frame sizes and body compositions."
        },
        {
          "question": "\xBFEs adecuada la calculadora de peso ideal para personas musculosas?",
          "answer": "IBW formulas provide population reference benchmarks. Muscular individuals or athletes may weigh more than calculated IBW targets while maintaining low body fat."
        }
      ]
    },
    "es": {
      "eyebrow": "Est\xE1ndares de Referencia de Salud",
      "title": "Estimate Ideal Body Weight (IBW) using commonly cited equations \u2013 Gu\xEDa y Calculadora",
      "intro": "Herramienta de c\xE1lculo y referencia educativa dise\xF1ada seg\xFAn los est\xE1ndares de salud publicados de la OMS y CDC. Calcula tus m\xE9tricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "F\xF3rmula de Referencia Est\xE1ndar",
      "formulaDesc": "Calculado utilizando ecuaciones est\xE1ndar validadas.",
      "formulaCode": "IBW = Base Weight + (Factor \xD7 Height over 5ft)",
      "tableTitle": "Tabla de Referencia Est\xE1ndar",
      "tableRows": [
        {
          "col1": "Categor\xEDa / Nivel 1",
          "col2": "50 kg (M) / 45.5 kg (F) + 2.3 kg/in > 5ft",
          "col3": "F\xF3rmula ampliamente citada introducida en 1974"
        },
        {
          "col1": "Categor\xEDa / Nivel 2",
          "col2": "52 kg (M) / 49.0 kg (F) + 1.9 or 1.7 kg/in",
          "col3": "Modificaci\xF3n de la f\xF3rmula Devine para complexi\xF3n media"
        },
        {
          "col1": "Categor\xEDa / Nivel 3",
          "col2": "56.2 kg (M) / 53.1 kg (F) + 1.41 or 1.36 kg/in",
          "col3": "Mayor estimaci\xF3n base para estatura baja y pendiente m\xE1s suave"
        },
        {
          "col1": "Categor\xEDa / Nivel 4",
          "col2": "48 kg (M) / 45.5 kg (F) + 2.7 or 2.2 kg/in",
          "col3": "F\xF3rmula de referencia hist\xF3rica"
        },
        {
          "col1": "Categor\xEDa / Nivel 5",
          "col2": "18.5 \u2013 24.9 kg/m\xB2",
          "col3": "Rango de referencia poblacional basado en la altura al cuadrado"
        }
      ],
      "faqs": [
        {
          "question": "\xBFC\xF3mo funciona la calculadora de peso ideal y qu\xE9 mide?",
          "answer": "Esta calculadora eval\xFAa tus datos personales utilizando ecuaciones validadas. Proporciona una estimaci\xF3n educativa para ayudarte a comprender tu estado de salud y referencias est\xE1ndar."
        },
        {
          "question": "\xBFQu\xE9 es my ideal weight for my height in kg or lbs?",
          "answer": "Enter your height in cm or feet/inches and select male or female. For example, a 5 ft 10 in (178 cm) male has an estimated IBW of ~73 kg via Devine formula, with a WHO healthy weight range of 58.6 kg to 78.9 kg."
        },
        {
          "question": "Why are there different formulas for calculating ideal weight for females vs males?",
          "answer": "Biological males typically have higher average muscle density and bone mass per unit of height than females, resulting in separate base constants in formulas."
        },
        {
          "question": "\xBFQu\xE9 es el difference between Ideal Body Weight (IBW) and healthy BMI weight range?",
          "answer": "IBW formulas provide specific formula-based estimates, whereas the WHO healthy BMI weight range gives a broad window (18.5 to 24.9 kg/m\xB2) accommodating different frame sizes and body compositions."
        },
        {
          "question": "\xBFEs adecuada la calculadora de peso ideal para personas musculosas?",
          "answer": "IBW formulas provide population reference benchmarks. Muscular individuals or athletes may weigh more than calculated IBW targets while maintaining low body fat."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de R\xE9f\xE9rence de Sant\xE9",
      "title": "Estimate Ideal Body Weight (IBW) using commonly cited equations \u2013 Outil de R\xE9f\xE9rence",
      "intro": "Outil de calcul et de r\xE9f\xE9rence \xE9ducatif con\xE7u selon les normes de sant\xE9 publi\xE9es de l'OMS et du CDC. Calculez vos m\xE9triques et consultez les plages de r\xE9f\xE9rence.",
      "formulaTitle": "Formule de R\xE9f\xE9rence Standard",
      "formulaDesc": "Calcul\xE9 \xE0 l'aide d'\xE9quations standards valid\xE9es.",
      "formulaCode": "IBW = Base Weight + (Factor \xD7 Height over 5ft)",
      "tableTitle": "Tableau de R\xE9f\xE9rence Standard",
      "tableRows": [
        {
          "col1": "Cat\xE9gorie / Niveau 1",
          "col2": "50 kg (M) / 45.5 kg (F) + 2.3 kg/in > 5ft",
          "col3": "Formule largement cit\xE9e introduite en 1974"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 2",
          "col2": "52 kg (M) / 49.0 kg (F) + 1.9 or 1.7 kg/in",
          "col3": "Modification de la formule Devine optimis\xE9e pour morphologie moyenne"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 3",
          "col2": "56.2 kg (M) / 53.1 kg (F) + 1.41 or 1.36 kg/in",
          "col3": "Estimation de base plus \xE9lev\xE9e pour personnes plus petites"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 4",
          "col2": "48 kg (M) / 45.5 kg (F) + 2.7 or 2.2 kg/in",
          "col3": "Formule de r\xE9f\xE9rence historique"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 5",
          "col2": "18.5 \u2013 24.9 kg/m\xB2",
          "col3": "Plage de r\xE9f\xE9rence bas\xE9e sur la taille au carr\xE9"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de poids id\xE9al et que mesure-t-il ?",
          "answer": "Ce calculateur \xE9value vos donn\xE9es personnelles \xE0 l'aide d'\xE9quations valid\xE9es. Il fournit une estimation \xE9ducative pour vous aider \xE0 comprendre vos m\xE9triques et r\xE9f\xE9rences standards."
        },
        {
          "question": "Qu'est-ce que my ideal weight for my height in kg or lbs?",
          "answer": "Enter your height in cm or feet/inches and select male or female. For example, a 5 ft 10 in (178 cm) male has an estimated IBW of ~73 kg via Devine formula, with a WHO healthy weight range of 58.6 kg to 78.9 kg."
        },
        {
          "question": "Why are there different formulas for calculating ideal weight for females vs males?",
          "answer": "Biological males typically have higher average muscle density and bone mass per unit of height than females, resulting in separate base constants in formulas."
        },
        {
          "question": "Qu'est-ce que le difference between Ideal Body Weight (IBW) and healthy BMI weight range?",
          "answer": "IBW formulas provide specific formula-based estimates, whereas the WHO healthy BMI weight range gives a broad window (18.5 to 24.9 kg/m\xB2) accommodating different frame sizes and body compositions."
        },
        {
          "question": "\xBFEs adecuada la calculadora de peso ideal para personas musculosas?",
          "answer": "IBW formulas provide population reference benchmarks. Muscular individuals or athletes may weigh more than calculated IBW targets while maintaining low body fat."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "Estimate Ideal Body Weight (IBW) using commonly cited equations \u2013 Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den ver\xF6ffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und pr\xFCfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardm\xE4\xDFig validierten Gleichungen.",
      "formulaCode": "IBW = Base Weight + (Factor \xD7 Height over 5ft)",
      "tableTitle": "Standard-Referenztabelle",
      "tableRows": [
        {
          "col1": "Kategorie / Stufe 1",
          "col2": "50 kg (M) / 45.5 kg (F) + 2.3 kg/in > 5ft",
          "col3": "Weit verbreitete Formel aus dem Jahr 1974"
        },
        {
          "col1": "Kategorie / Stufe 2",
          "col2": "52 kg (M) / 49.0 kg (F) + 1.9 or 1.7 kg/in",
          "col3": "Modifikation der Devine-Formel f\xFCr mittlere Statur"
        },
        {
          "col1": "Kategorie / Stufe 3",
          "col2": "56.2 kg (M) / 53.1 kg (F) + 1.41 or 1.36 kg/in",
          "col3": "H\xF6here Basissch\xE4tzung f\xFCr kleinere Personen"
        },
        {
          "col1": "Kategorie / Stufe 4",
          "col2": "48 kg (M) / 45.5 kg (F) + 2.7 or 2.2 kg/in",
          "col3": "Historische Referenzformel"
        },
        {
          "col1": "Kategorie / Stufe 5",
          "col2": "18.5 \u2013 24.9 kg/m\xB2",
          "col3": "Bev\xF6lkerungsreferenzbereich basierend auf der quadrierten Gr\xF6\xDFe"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der Idealgewicht-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre pers\xF6nlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        },
        {
          "question": "Was ist my ideal weight for my height in kg or lbs?",
          "answer": "Enter your height in cm or feet/inches and select male or female. For example, a 5 ft 10 in (178 cm) male has an estimated IBW of ~73 kg via Devine formula, with a WHO healthy weight range of 58.6 kg to 78.9 kg."
        },
        {
          "question": "Why are there different formulas for calculating ideal weight for females vs males?",
          "answer": "Biological males typically have higher average muscle density and bone mass per unit of height than females, resulting in separate base constants in formulas."
        },
        {
          "question": "Was ist der difference between Ideal Body Weight (IBW) and healthy BMI weight range?",
          "answer": "IBW formulas provide specific formula-based estimates, whereas the WHO healthy BMI weight range gives a broad window (18.5 to 24.9 kg/m\xB2) accommodating different frame sizes and body compositions."
        },
        {
          "question": "\xBFEs adecuada la calculadora de peso ideal para personas musculosas?",
          "answer": "IBW formulas provide population reference benchmarks. Muscular individuals or athletes may weigh more than calculated IBW targets while maintaining low body fat."
        }
      ]
    },
    "ko": {
      "eyebrow": "\uAC74\uAC15 \uCC38\uC870 \uD45C\uC900 \uC9C0\uCE68",
      "title": "Estimate Ideal Body Weight (IBW) using commonly cited equations \u2013 \uCC38\uC870 \uACC4\uC0B0\uAE30",
      "intro": "WHO \uBC0F CDC \uC9C0\uCE68\uC5D0 \uAE30\uBC18\uD55C \uC2E4\uC2DC\uAC04 \uCC38\uACE0 \uACC4\uC0B0\uAE30\uC785\uB2C8\uB2E4. \uAC1C\uC778\uBCC4 \uC218\uCE58\uB97C \uCE21\uC815\uD558\uACE0 \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uD655\uC778\uD558\uC138\uC694.",
      "formulaTitle": "\uD45C\uC900 \uACC4\uC0B0 \uACF5\uC2DD",
      "formulaDesc": "\uAC80\uC99D\uB41C \uD45C\uC900 \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uACC4\uC0B0\uB429\uB2C8\uB2E4.",
      "formulaCode": "IBW = Base Weight + (Factor \xD7 Height over 5ft)",
      "tableTitle": "\uD45C\uC900 \uCC38\uC870 \uC9C4\uB2E8\uD45C",
      "tableRows": [
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 1",
          "col2": "50 kg (M) / 45.5 kg (F) + 2.3 kg/in > 5ft",
          "col3": "1974\uB144\uC5D0 \uBC1C\uD45C\uB41C \uB110\uB9AC \uC778\uC6A9\uB418\uB294 \uACF5\uC2DD"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 2",
          "col2": "52 kg (M) / 49.0 kg (F) + 1.9 or 1.7 kg/in",
          "col3": "\uBCF4\uD1B5 \uCCB4\uACA9 \uC131\uC778\uC744 \uC704\uD574 \uCD5C\uC801\uD654\uB41C Devine \uACF5\uC2DD \uC218\uC815\uBCF8"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 3",
          "col2": "56.2 kg (M) / 53.1 kg (F) + 1.41 or 1.36 kg/in",
          "col3": "\uB2E8\uC2E0 \uC778\uAD6C\uB97C \uC704\uD55C \uB192\uC740 \uAE30\uBCF8 \uCD94\uC815\uCE58 \uC801\uC6A9"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 4",
          "col2": "48 kg (M) / 45.5 kg (F) + 2.7 or 2.2 kg/in",
          "col3": "\uC5ED\uC0AC\uC801 \uCC38\uACE0 \uACF5\uC2DD"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 5",
          "col2": "18.5 \u2013 24.9 kg/m\xB2",
          "col3": "\uC2E0\uC7A5 \uC81C\uACF1\uC5D0 \uAE30\uBC18\uD55C \uC778\uAD6C \uAC74\uAC15 \uCC38\uACE0 \uBC94\uC704"
        }
      ],
      "faqs": [
        {
          "question": "\uC774\uC0C1 \uCCB4\uC911 \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uBCF8 \uACC4\uC0B0\uAE30\uB294 \uAC80\uC99D\uB41C \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uAC1C\uC778\uBCC4 \uC2E0\uCCB4 \uC9C0\uC218\uB97C \uC0B0\uCD9C\uD569\uB2C8\uB2E4. \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uBC14\uD0D5\uC73C\uB85C \uAD50\uC721\uC801 \uBD84\uC11D \uACB0\uACFC\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."
        },
        {
          "question": " my ideal weight for my height in kg or lbs? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "Enter your height in cm or feet/inches and select male or female. For example, a 5 ft 10 in (178 cm) male has an estimated IBW of ~73 kg via Devine formula, with a WHO healthy weight range of 58.6 kg to 78.9 kg."
        },
        {
          "question": "Why are there different formulas for calculating ideal weight for females vs males? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "Biological males typically have higher average muscle density and bone mass per unit of height than females, resulting in separate base constants in formulas."
        },
        {
          "question": " difference between Ideal Body Weight (IBW) and healthy BMI weight range? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "IBW formulas provide specific formula-based estimates, whereas the WHO healthy BMI weight range gives a broad window (18.5 to 24.9 kg/m\xB2) accommodating different frame sizes and body compositions."
        },
        {
          "question": "\xBFEs adecuada la calculadora de peso ideal para personas musculosas? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "IBW formulas provide population reference benchmarks. Muscular individuals or athletes may weigh more than calculated IBW targets while maintaining low body fat."
        }
      ]
    },
    "hi": {
      "eyebrow": "\u0906\u0926\u0930\u094D\u0936 \u0935\u091C\u0928 \u0938\u0902\u0926\u0930\u094D\u092D",
      "title": "\u0906\u0926\u0930\u094D\u0936 \u0935\u091C\u0928 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u2013 \u090A\u0902\u091A\u093E\u0908 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0906\u0907\u0921\u093F\u092F\u0932 \u092C\u0949\u0921\u0940 \u0935\u0947\u091F (IBW)",
      "intro": "\u0939\u092E\u093E\u0930\u093E \u092E\u0941\u092B\u093C\u094D\u0924 Ideal Weight Calculator (IBW Calculator) \u0906\u092A\u0915\u0940 \u090A\u0902\u091A\u093E\u0908 (\u0938\u0947\u092E\u0940 \u092F\u093E \u0907\u0902\u091A) \u0914\u0930 \u0932\u093F\u0902\u0917 (\u092E\u0939\u093F\u0932\u093E \u092F\u093E \u092A\u0941\u0930\u0941\u0937) \u0915\u0947 \u0906\u0927\u093E\u0930 \u092A\u0930 \u0906\u0926\u0930\u094D\u0936 \u0935\u091C\u0928 \u0915\u093E \u0905\u0928\u0941\u092E\u093E\u0928 \u0932\u0917\u093E\u0924\u093E \u0939\u0948\u0964 Devine, Robinson, Miller \u0914\u0930 Hamwi \u0938\u0942\u0924\u094D\u0930\u094B\u0902 \u0915\u0940 \u0924\u0941\u0932\u0928\u093E \u0915\u0930\u0947\u0902\u0964",
      "formulaTitle": "\u092E\u093E\u0928\u0915 IBW \u0938\u0942\u0924\u094D\u0930 (Devine, Robinson, Miller & Hamwi)",
      "formulaDesc": 'Devine, Robinson, Miller \u0914\u0930 Hamwi \u0938\u0942\u0924\u094D\u0930 \u0935\u093F\u092D\u093F\u0928\u094D\u0928 \u0938\u0902\u0926\u0930\u094D\u092D \u0905\u0928\u0941\u092E\u093E\u0928 \u092A\u094D\u0930\u0926\u093E\u0928 \u0915\u0930\u0924\u0947 \u0939\u0948\u0902; \u0907\u0928\u094D\u0939\u0947\u0902 \u0938\u093E\u0930\u094D\u0935\u092D\u094C\u092E\u093F\u0915 "\u0906\u0926\u0930\u094D\u0936" \u092F\u093E \u091A\u093F\u0915\u093F\u0924\u094D\u0938\u0940\u092F \u0906\u0935\u0936\u094D\u092F\u0915\u0924\u093E \u0928\u0939\u0940\u0902 \u092E\u093E\u0928\u093E \u091C\u093E\u0928\u093E \u091A\u093E\u0939\u093F\u090F\u0964',
      "formulaCode": "IBW = Base Weight + (Factor \xD7 Height over 5ft)",
      "tableTitle": "\u090A\u0902\u091A\u093E\u0908 \u090F\u0935\u0902 \u0938\u0942\u0924\u094D\u0930 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0906\u0926\u0930\u094D\u0936 \u0936\u0930\u0940\u0930 \u0935\u091C\u0928 (IBW) \u0924\u093E\u0932\u093F\u0915\u093E",
      "tableRows": [
        {
          "col1": "Devine \u092B\u0949\u0930\u094D\u092E\u0942\u0932\u093E (1974)",
          "col2": "50 kg (M) / 45.5 kg (F) + 2.3 kg/in > 5ft",
          "col3": "\u092A\u094B\u0937\u0923 \u0914\u0930 \u0936\u094B\u0927 \u0905\u0927\u094D\u092F\u092F\u0928\u094B\u0902 \u092E\u0947\u0902 \u0935\u094D\u092F\u093E\u092A\u0915 \u0930\u0942\u092A \u0938\u0947 \u0907\u0938\u094D\u0924\u0947\u092E\u093E\u0932"
        },
        {
          "col1": "Robinson \u092B\u0949\u0930\u094D\u092E\u0942\u0932\u093E (1983)",
          "col2": "52 kg (M) / 49.0 kg (F) + 1.9 \u092F\u093E 1.7 kg/in",
          "col3": "\u092E\u0927\u094D\u092F\u092E \u092B\u094D\u0930\u0947\u092E \u0935\u092F\u0938\u094D\u0915\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u0905\u0928\u0941\u0915\u0942\u0932\u093F\u0924"
        },
        {
          "col1": "Miller \u092B\u0949\u0930\u094D\u092E\u0942\u0932\u093E (1983)",
          "col2": "56.2 kg (M) / 53.1 kg (F) + 1.41 \u092F\u093E 1.36 kg/in",
          "col3": "\u0915\u092E \u090A\u0902\u091A\u093E\u0908 \u0935\u093E\u0932\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u0909\u091A\u094D\u091A \u092C\u0947\u0938 \u0905\u0928\u0941\u092E\u093E\u0928"
        },
        {
          "col1": "Hamwi \u092B\u0949\u0930\u094D\u092E\u0942\u0932\u093E (1964)",
          "col2": "48 kg (M) / 45.5 kg (F) + 2.7 \u092F\u093E 2.2 kg/in",
          "col3": "\u0924\u094D\u0935\u0930\u093F\u0924 \u092E\u093E\u0928\u0915 \u0905\u0928\u0941\u092E\u093E\u0928 \u0915\u0947 \u0932\u093F\u090F \u0921\u093F\u091C\u093C\u093E\u0907\u0928"
        },
        {
          "col1": "WHO \u0938\u094D\u0935\u0938\u094D\u0925 \u092C\u0940\u090F\u092E\u0906\u0908 \u0938\u0940\u092E\u093E",
          "col2": "18.5 \u2013 24.9 kg/m\xB2",
          "col3": "\u090A\u0902\u091A\u093E\u0908 \u0935\u0930\u094D\u0917 \u0915\u0947 \u0906\u0927\u093E\u0930 \u092A\u0930 \u0938\u093E\u092E\u093E\u0928\u094D\u092F \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0938\u0940\u092E\u093E"
        }
      ],
      "faqs": [
        {
          "question": "\u0906\u0926\u0930\u094D\u0936 \u0936\u0930\u0940\u0930 \u0935\u091C\u0928 (Ideal Body Weight) \u0915\u094D\u092F\u093E \u0939\u0948?",
          "answer": "\u0906\u0926\u0930\u094D\u0936 \u0935\u091C\u0928 \u0906\u092A\u0915\u0940 \u090A\u0902\u091A\u093E\u0908 \u0914\u0930 \u0932\u093F\u0902\u0917 \u0915\u0947 \u0906\u0927\u093E\u0930 \u092A\u0930 \u090F\u0915 \u0938\u094D\u0935\u0938\u094D\u0925 \u0936\u0930\u0940\u0930 \u0915\u093E \u0905\u0928\u0941\u092E\u093E\u0928\u093F\u0924 \u092E\u093E\u0928\u0915 \u0935\u091C\u0928 \u0939\u0948\u0964"
        },
        {
          "question": "\u092F\u0939 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u0915\u093F\u0928 \u092A\u094D\u0930\u0938\u093F\u0926\u094D\u0927 \u0938\u0942\u0924\u094D\u0930\u094B\u0902 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0924\u093E \u0939\u0948?",
          "answer": "\u092F\u0939 \u0921\u093F\u0935\u093E\u0907\u0928 (Devine) \u0914\u0930 \u0930\u0949\u092C\u093F\u0928\u094D\u0938\u0928 (Robinson) \u091C\u0948\u0938\u0947 \u0938\u094D\u0925\u093E\u092A\u093F\u0924 \u0928\u0948\u0926\u093E\u0928\u093F\u0915 \u0938\u0942\u0924\u094D\u0930\u094B\u0902 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u0921\u093F\u0935\u093E\u0907\u0928 \u0938\u0942\u0924\u094D\u0930 (Devine Formula) \u0915\u0948\u0938\u0947 \u0915\u093E\u092E \u0915\u0930\u0924\u093E \u0939\u0948?",
          "answer": "\u092F\u0939 5 \u092B\u0940\u091F \u0938\u0947 \u090A\u092A\u0930 \u0915\u0940 \u092A\u094D\u0930\u0924\u094D\u092F\u0947\u0915 \u0905\u0924\u093F\u0930\u093F\u0915\u094D\u0924 \u0907\u0902\u091A \u090A\u0902\u091A\u093E\u0908 \u0915\u0947 \u0932\u093F\u090F \u092A\u0941\u0930\u0941\u0937\u094B\u0902 \u092E\u0947\u0902 2.3 \u0915\u093F\u0917\u094D\u0930\u093E \u0914\u0930 \u092E\u0939\u093F\u0932\u093E\u0913\u0902 \u092E\u0947\u0902 2.3 \u0915\u093F\u0917\u094D\u0930\u093E \u091C\u094B\u0921\u093C\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u0915\u094D\u092F\u093E \u0906\u0926\u0930\u094D\u0936 \u0935\u091C\u0928 \u0914\u0930 \u092C\u0940\u090F\u092E\u0906\u0908 \u0930\u0947\u0902\u091C \u090F\u0915 \u0939\u0940 \u0939\u0948\u0902?",
          "answer": "\u0906\u0926\u0930\u094D\u0936 \u0935\u091C\u0928 \u090F\u0915 \u0938\u091F\u0940\u0915 \u092C\u093F\u0902\u0926\u0941 \u0905\u0928\u0941\u092E\u093E\u0928 (Point Estimate) \u0926\u0947\u0924\u093E \u0939\u0948, \u091C\u092C\u0915\u093F \u092C\u0940\u090F\u092E\u0906\u0908 \u090F\u0915 \u0938\u094D\u0935\u0938\u094D\u0925 \u0938\u0940\u092E\u093E (Range) \u092A\u094D\u0930\u0926\u093E\u0928 \u0915\u0930\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u0915\u094D\u092F\u093E \u090F\u0925\u0932\u0940\u091F\u094B\u0902 \u0915\u093E \u0935\u091C\u0928 \u0906\u0926\u0930\u094D\u0936 \u0935\u091C\u0928 \u0938\u0947 \u0905\u0927\u093F\u0915 \u0939\u094B \u0938\u0915\u0924\u093E \u0939\u0948?",
          "answer": "\u0939\u093E\u0901, \u0905\u0927\u093F\u0915 \u092E\u093E\u0902\u0938\u092A\u0947\u0936\u093F\u092F\u094B\u0902 \u0935\u093E\u0932\u0947 \u090F\u0925\u0932\u0940\u091F\u094B\u0902 \u0915\u093E \u0935\u091C\u0928 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F\u092A\u094D\u0930\u0926 \u0930\u0942\u092A \u0938\u0947 \u0906\u0926\u0930\u094D\u0936 \u0935\u091C\u0928 \u0905\u0928\u0941\u092E\u093E\u0928 \u0938\u0947 \u0905\u0927\u093F\u0915 \u0939\u094B \u0938\u0915\u0924\u093E \u0939\u0948\u0964"
        }
      ]
    }
  },
  "calorie-calculator": {
    "en": {
      "eyebrow": "Calorie Planning Reference",
      "title": "Calorie Deficit Calculator \u2013 Estimated Calorie Planning",
      "intro": "Use our free Calorie Deficit Calculator to estimate daily calorie differences for weight goals based on BMR and TDEE equations. A calorie deficit is commonly used for weight-loss planning, but individual energy needs and appropriate adjustments vary.",
      "formulaTitle": "Calorie Deficit Calculation Formulas & Weight Change Math",
      "formulaDesc": "Daily Calorie Intake = TDEE - Target Deficit | Weekly Energy Difference Estimate = Daily Deficit \xD7 7 (Note: ~7700 kcal/kg is a mathematical energy-equivalent reference)",
      "formulaCode": "Target Calories = [ (10 \xD7 W_kg) + (6.25 \xD7 H_cm) - (5 \xD7 Age) + S ] \xD7 Activity Multiplier - Daily Deficit",
      "tableTitle": "Example Calorie Differences & Weight-Change Math",
      "tableRows": [
        {
          "col1": "Scenario A: 250 kcal/day difference",
          "col2": "~1,750 kcal net difference / week",
          "col3": "Mathematical example of a 250 kcal daily energy difference"
        },
        {
          "col1": "Scenario B: 500 kcal/day difference",
          "col2": "~3,500 kcal net difference / week",
          "col3": "Mathematical example of a 500 kcal daily energy difference"
        },
        {
          "col1": "Scenario C: 750 kcal/day difference",
          "col2": "~5,250 kcal net difference / week",
          "col3": "Mathematical example of a 750 kcal daily energy difference"
        },
        {
          "col1": "Energy Balance Baseline (0 kcal difference)",
          "col2": "0 kcal net difference / week",
          "col3": "Estimated TDEE energy balance for weight stabilization"
        }
      ],
      "faqs": [
        {
          "question": "What is a calorie deficit and how does a calorie deficit calculator work?",
          "answer": "A calorie deficit occurs when daily energy intake is less than Total Daily Energy Expenditure (TDEE). The calorie deficit calculator computes your BMR using the Mifflin St Jeor equation, applies your physical activity multiplier to determine TDEE, and subtracts an example energy difference to illustrate calorie planning scenarios."
        },
        {
          "question": "How does calorie-deficit and weight-change math work?",
          "answer": "A commonly cited energy-equivalent benchmark in metabolic literature is approximately 7,700 kcal per kilogram of mass (~3,500 kcal per pound). Actual weight change varies between individuals and over time. Mathematically, a daily difference of 500 kcal creates an example 3,500 kcal weekly energy difference."
        },
        {
          "question": "What calorie deficit is commonly used for weight management?",
          "answer": "There is no single calorie-deficit value that is appropriate for everyone. Individual energy needs, health status, activity, and dietary intake should be considered. Energy adjustments are evaluated based on individual goals and health context."
        },
        {
          "question": "How much protein should I eat while in a calorie deficit?",
          "answer": "During a calorie deficit, protein intake ranges from 1.6 to 2.2 grams per kilogram of body weight are commonly referenced in sports nutrition literature."
        },
        {
          "question": "What should I do if my weight loss stalls in a calorie deficit?",
          "answer": "Weight loss stalls often stem from uncounted food calories, reduced non-exercise physical activity (NEAT), or fluid retention. Recalculate your TDEE at your new lower weight to keep energy goals accurate."
        }
      ]
    },
    "es": {
      "eyebrow": "Planificaci\xF3n Cal\xF3rica",
      "title": "Calculadora de D\xE9ficit Cal\xF3rico \u2013 Planificaci\xF3n de Calor\xEDas",
      "intro": "Utiliza nuestra calculadora gratuita de d\xE9ficit cal\xF3rico para estimar tus necesidades cal\xF3ricas diarias seg\xFAn tus objetivos de peso a partir del BMR y TDEE.",
      "formulaTitle": "F\xF3rmulas de D\xE9ficit Cal\xF3rico",
      "formulaDesc": "Consumo Cal\xF3rico Diario = TDEE - D\xE9ficit Objetivo | Referencia energ\xE9tica estimada: ~7,700 kcal por kg de masa.",
      "formulaCode": "Calor\xEDas Objetivo = TDEE - D\xE9ficit Diario",
      "tableTitle": "Ejemplos de D\xE9ficit Cal\xF3rico y Cambios Estimados",
      "tableRows": [
        {
          "col1": "Escenario A: D\xE9ficit de 250 kcal/d\xEDa",
          "col2": "~1,750 kcal de diferencia semanal",
          "col3": "Ejemplo matem\xE1tico de un d\xE9ficit diario ligero"
        },
        {
          "col1": "Escenario B: D\xE9ficit de 500 kcal/d\xEDa",
          "col2": "~3,500 kcal de diferencia semanal",
          "col3": "Ejemplo matem\xE1tico de un d\xE9ficit diario est\xE1ndar"
        },
        {
          "col1": "Equilibrio Energ\xE9tico (0 kcal)",
          "col2": "0 kcal de cambio",
          "col3": "TDEE estimado para mantenimiento de peso"
        },
        {
          "col1": "Categor\xEDa / Nivel 4",
          "col2": "0 kcal net difference / week",
          "col3": "Balance energ\xE9tico estimado seg\xFAn TDEE para estabilizar peso"
        }
      ],
      "faqs": [
        {
          "question": "\xBFQu\xE9 es un d\xE9ficit cal\xF3rico y c\xF3mo funciona la calculadora?",
          "answer": "Un d\xE9ficit cal\xF3rico ocurre cuando el consumo de energ\xEDa es menor que el TDEE. La calculadora estima tu TDEE y resta un d\xE9ficit seleccionado para planificar tus calor\xEDas diarias."
        },
        {
          "question": "\xBFQu\xE9 d\xE9ficit cal\xF3rico es recomendable?",
          "answer": "No existe una cifra \xFAnica para todos. Las necesidades cal\xF3ricas var\xEDan seg\xFAn la salud, la actividad y los objetivos de cada persona."
        },
        {
          "question": "\xBFC\xF3mo funciona la calculadora de calor\xEDas y qu\xE9 mide?",
          "answer": "Esta calculadora eval\xFAa tus datos personales utilizando ecuaciones validadas. Proporciona una estimaci\xF3n educativa para ayudarte a comprender tu estado de salud y referencias est\xE1ndar."
        },
        {
          "question": "How much protein should I eat while in a calorie deficit?",
          "answer": "During a calorie deficit, protein intake ranges from 1.6 to 2.2 grams per kilogram of body weight are commonly referenced in sports nutrition literature."
        },
        {
          "question": "What should I do if my weight loss stalls in a calorie deficit?",
          "answer": "Weight loss stalls often stem from uncounted food calories, reduced non-exercise physical activity (NEAT), or fluid retention. Recalculate your TDEE at your new lower weight to keep energy goals accurate."
        }
      ]
    },
    "fr": {
      "eyebrow": "Planification Calorique",
      "title": "Calculateur de D\xE9ficit Calorique \u2013 Planification des Calories",
      "intro": "Utilisez notre calculateur gratuit de d\xE9ficit calorique pour estimer vos besoins caloriques quotidiens en fonction de vos objectifs de poids.",
      "formulaTitle": "Formules de Calcul du D\xE9ficit Calorique",
      "formulaDesc": "Apport Calorique Cible = TDEE - D\xE9ficit Souhait\xE9 | R\xE9f\xE9rence \xE9nerg\xE9tique : ~7700 kcal par kg de masse.",
      "formulaCode": "Calories Cibles = TDEE - D\xE9ficit Quotidien",
      "tableTitle": "Exemples de D\xE9ficits Caloriques et R\xE9partitions",
      "tableRows": [
        {
          "col1": "Sc\xE9nario A : D\xE9ficit de 250 kcal/jour",
          "col2": "~1 750 kcal de diff\xE9rence par semaine",
          "col3": "Exemple de d\xE9ficit quotidien mod\xE9r\xE9"
        },
        {
          "col1": "Sc\xE9nario B : D\xE9ficit de 500 kcal/jour",
          "col2": "~3 500 kcal de diff\xE9rence par semaine",
          "col3": "Exemple de d\xE9ficit quotidien standard"
        },
        {
          "col1": "Maintien \xC9nerg\xE9tique (0 kcal)",
          "col2": "0 kcal de variation",
          "col3": "TDEE estim\xE9 pour stabiliser le poids"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 4",
          "col2": "0 kcal net difference / week",
          "col3": "\xC9quilibre \xE9nerg\xE9tique TDEE estim\xE9 pour la stabilisation du poids"
        }
      ],
      "faqs": [
        {
          "question": "Qu'est-ce qu'un d\xE9ficit calorique et comment fonctionne le calculateur ?",
          "answer": "Un d\xE9ficit calorique survient lorsque vous consommez moins de calories que votre TDEE. Le calculateur \xE9tablit votre TDEE puis soustrait le d\xE9ficit choisi pour planifier vos repas."
        },
        {
          "question": "Comment fonctionne le calculateur de calories et que mesure-t-il ?",
          "answer": "Ce calculateur \xE9value vos donn\xE9es personnelles \xE0 l'aide d'\xE9quations valid\xE9es. Il fournit une estimation \xE9ducative pour vous aider \xE0 comprendre vos m\xE9triques et r\xE9f\xE9rences standards."
        },
        {
          "question": "What calorie deficit is commonly used for weight management?",
          "answer": "There is no single calorie-deficit value that is appropriate for everyone. Individual energy needs, health status, activity, and dietary intake should be considered. Energy adjustments are evaluated based on individual goals and health context."
        },
        {
          "question": "How much protein should I eat while in a calorie deficit?",
          "answer": "During a calorie deficit, protein intake ranges from 1.6 to 2.2 grams per kilogram of body weight are commonly referenced in sports nutrition literature."
        },
        {
          "question": "What should I do if my weight loss stalls in a calorie deficit?",
          "answer": "Weight loss stalls often stem from uncounted food calories, reduced non-exercise physical activity (NEAT), or fluid retention. Recalculate your TDEE at your new lower weight to keep energy goals accurate."
        }
      ]
    },
    "de": {
      "eyebrow": "Kalorienplanung & Defizit",
      "title": "Kaloriendefizit Rechner \u2013 T\xE4gliche Kalorienplanung",
      "intro": "Nutzen Sie unseren kostenlosen Kaloriendefizit-Rechner zur Sch\xE4tzung Ihres t\xE4glichen Kalorienbedarfs f\xFCr Ihre Gewichtsziele basierend auf BMR und TDEE.",
      "formulaTitle": "Kaloriendefizit Formel & Energiebilanz",
      "formulaDesc": "T\xE4gliche Zielkalorien = TDEE - Ziel-Defizit | Mathematische Referenz: ~7.700 kcal pro kg K\xF6rpergewicht.",
      "formulaCode": "Zielkalorien = TDEE - T\xE4glicher Defizit",
      "tableTitle": "Beispiel-Defizite & Mathematische \xDCbersicht",
      "tableRows": [
        {
          "col1": "Szenario A: 250 kcal/Tag Defizit",
          "col2": "~1.750 kcal Differenz / Woche",
          "col3": "Mathematisches Beispiel f\xFCr ein leichtes Defizit"
        },
        {
          "col1": "Szenario B: 500 kcal/Tag Defizit",
          "col2": "~3.500 kcal Differenz / Woche",
          "col3": "Mathematisches Beispiel f\xFCr ein Standard-Defizit"
        },
        {
          "col1": "Erhaltung (0 kcal Defizit)",
          "col2": "0 kcal Differenz",
          "col3": "Gesch\xE4tzter TDEE zur Gewichtserhaltung"
        },
        {
          "col1": "Kategorie / Stufe 4",
          "col2": "0 kcal net difference / week",
          "col3": "Gesch\xE4tzte TDEE-Energiebilanz zur Gewichtsstabilisierung"
        }
      ],
      "faqs": [
        {
          "question": "Was ist ein Kaloriendefizit und wie funktioniert der Rechner?",
          "answer": "Ein Kaloriendefizit entsteht, wenn die t\xE4gliche Energiezufuhr geringer ist als der Gesamtenergieumsatz (TDEE). Der Rechner berechnet den TDEE und zieht ein gew\xE4hltes Defizit ab."
        },
        {
          "question": "Wie funktioniert der Kalorienrechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre pers\xF6nlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        },
        {
          "question": "What calorie deficit is commonly used for weight management?",
          "answer": "There is no single calorie-deficit value that is appropriate for everyone. Individual energy needs, health status, activity, and dietary intake should be considered. Energy adjustments are evaluated based on individual goals and health context."
        },
        {
          "question": "How much protein should I eat while in a calorie deficit?",
          "answer": "During a calorie deficit, protein intake ranges from 1.6 to 2.2 grams per kilogram of body weight are commonly referenced in sports nutrition literature."
        },
        {
          "question": "What should I do if my weight loss stalls in a calorie deficit?",
          "answer": "Weight loss stalls often stem from uncounted food calories, reduced non-exercise physical activity (NEAT), or fluid retention. Recalculate your TDEE at your new lower weight to keep energy goals accurate."
        }
      ]
    },
    "ko": {
      "eyebrow": "\uCE7C\uB85C\uB9AC \uACC4\uD68D \uBC0F \uC12D\uCDE8\uB7C9",
      "title": "\uCE7C\uB85C\uB9AC \uACB0\uC190 \uACC4\uC0B0\uAE30 \u2013 \uCE7C\uB85C\uB9AC \uACC4\uD68D \uACC4\uC0B0\uAE30",
      "intro": "\uBB34\uB8CC \uCE7C\uB85C\uB9AC \uACB0\uC190 \uACC4\uC0B0\uAE30\uB97C \uC0AC\uC6A9\uD558\uC5EC BMR \uBC0F TDEE\uB97C \uAE30\uBC18\uC73C\uB85C \uCCB4\uC911 \uBAA9\uD45C\uC5D0 \uB530\uB978 \uC77C\uC77C \uCE7C\uB85C\uB9AC \uBAA9\uD45C\uB97C \uCD94\uC815\uD558\uC138\uC694.",
      "formulaTitle": "\uCE7C\uB85C\uB9AC \uACB0\uC190 \uACC4\uC0B0 \uACF5\uC2DD",
      "formulaDesc": "\uC77C\uC77C \uBAA9\uD45C \uCE7C\uB85C\uB9AC = TDEE - \uBAA9\uD45C \uACB0\uC190\uB7C9 | \uCE7C\uB85C\uB9AC \uC5D0\uB108\uC9C0 \uCC38\uC870: \uCCB4\uC911 1kg\uB2F9 \uC57D 7,700 kcal.",
      "formulaCode": "\uBAA9\uD45C \uCE7C\uB85C\uB9AC = TDEE - \uC77C\uC77C \uACB0\uC190\uB7C9",
      "tableTitle": "\uCE7C\uB85C\uB9AC \uACB0\uC190 \uC2DC\uB098\uB9AC\uC624 \uBC0F \uC608\uC2DC\uD45C",
      "tableRows": [
        {
          "col1": "\uC2DC\uB098\uB9AC\uC624 A: \uC77C 250 kcal \uACB0\uC190",
          "col2": "\uC8FC\uB2F9 \uC57D 1,750 kcal \uCC28\uC774",
          "col3": "\uAC00\uBCBC\uC6B4 \uC77C\uC77C \uCE7C\uB85C\uB9AC \uAC10\uCD95 \uC608\uC2DC"
        },
        {
          "col1": "\uC2DC\uB098\uB9AC\uC624 B: \uC77C 500 kcal \uACB0\uC190",
          "col2": "\uC8FC\uB2F9 \uC57D 3,500 kcal \uCC28\uC774",
          "col3": "\uD45C\uC900 \uC77C\uC77C \uCE7C\uB85C\uB9AC \uAC10\uCD95 \uC608\uC2DC"
        },
        {
          "col1": "\uC720\uC9C0 \uC0C1\uD0DC (0 kcal \uACB0\uC190)",
          "col2": "0 kcal \uCC28\uC774",
          "col3": "\uCCB4\uC911 \uC720\uC9C0\uB97C \uC704\uD55C \uCD94\uC815 TDEE"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 4",
          "col2": "0 kcal net difference / week",
          "col3": "\uCCB4\uC911 \uC720\uC9C0\uB97C \uC704\uD55C \uCD94\uC815 TDEE \uC5D0\uB108\uC9C0 \uADE0\uD615"
        }
      ],
      "faqs": [
        {
          "question": "\uCE7C\uB85C\uB9AC \uACB0\uC190\uC774\uB780 \uBB34\uC5C7\uC774\uBA70 \uACC4\uC0B0\uAE30\uB294 \uC5B4\uB5BB\uAC8C \uC791\uB3D9\uD558\uB098\uC694?",
          "answer": "\uCE7C\uB85C\uB9AC \uACB0\uC190\uC740 \uC77C\uC77C \uC12D\uCDE8 \uCE7C\uB85C\uB9AC\uAC00 \uC77C\uC77C \uCD1D \uC5D0\uB108\uC9C0 \uC18C\uBE44\uB7C9(TDEE)\uBCF4\uB2E4 \uC801\uC744 \uB54C \uBC1C\uC0DD\uD569\uB2C8\uB2E4. \uACC4\uC0B0\uAE30\uB294 TDEE\uB97C \uAD6C\uD55C \uD6C4 \uBAA9\uD45C \uACB0\uC190\uB7C9\uC744 \uCC28\uAC10\uD558\uC5EC \uD45C\uC2DC\uD569\uB2C8\uB2E4."
        },
        {
          "question": "\uCE7C\uB85C\uB9AC \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uBCF8 \uACC4\uC0B0\uAE30\uB294 \uAC80\uC99D\uB41C \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uAC1C\uC778\uBCC4 \uC2E0\uCCB4 \uC9C0\uC218\uB97C \uC0B0\uCD9C\uD569\uB2C8\uB2E4. \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uBC14\uD0D5\uC73C\uB85C \uAD50\uC721\uC801 \uBD84\uC11D \uACB0\uACFC\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."
        },
        {
          "question": "What calorie deficit is commonly used for weight management? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "There is no single calorie-deficit value that is appropriate for everyone. Individual energy needs, health status, activity, and dietary intake should be considered. Energy adjustments are evaluated based on individual goals and health context."
        },
        {
          "question": "How much protein should I eat while in a calorie deficit? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "During a calorie deficit, protein intake ranges from 1.6 to 2.2 grams per kilogram of body weight are commonly referenced in sports nutrition literature."
        },
        {
          "question": "What should I do if my weight loss stalls in a calorie deficit? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "Weight loss stalls often stem from uncounted food calories, reduced non-exercise physical activity (NEAT), or fluid retention. Recalculate your TDEE at your new lower weight to keep energy goals accurate."
        }
      ]
    },
    "hi": {
      "eyebrow": "\u0915\u0948\u0932\u094B\u0930\u0940 \u092F\u094B\u091C\u0928\u093E \u090F\u0935\u0902 \u0938\u0902\u0926\u0930\u094D\u092D",
      "title": "\u0915\u0948\u0932\u094B\u0930\u0940 \u0918\u093E\u091F\u093E \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u2013 Calorie Deficit \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 Online",
      "intro": "\u0939\u092E\u093E\u0930\u0947 \u092E\u0941\u092B\u093C\u094D\u0924 Calorie Deficit Calculator \u0938\u0947 \u0905\u092A\u0928\u0947 \u0935\u091C\u0928 \u0932\u0915\u094D\u0937\u094D\u092F\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u0926\u0948\u0928\u093F\u0915 \u0915\u0948\u0932\u094B\u0930\u0940 \u0905\u0902\u0924\u0930 \u0914\u0930 TDEE \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902\u0964",
      "formulaTitle": "\u0915\u0948\u0932\u094B\u0930\u0940 \u0918\u093E\u091F\u093E \u0938\u0942\u0924\u094D\u0930 \u090F\u0935\u0902 \u090A\u0930\u094D\u091C\u093E \u0917\u0923\u093F\u0924",
      "formulaDesc": "\u0926\u0948\u0928\u093F\u0915 \u0915\u0948\u0932\u094B\u0930\u0940 \uC12D\uCDE8 = TDEE - \u0932\u0915\u094D\u0937\u094D\u092F \u0918\u093E\u091F\u093E | \u0938\u093E\u092A\u094D\u0924\u093E\u0939\u093F\u0915 \u090A\u0930\u094D\u091C\u093E \u0905\u0902\u0924\u0930 = \u0926\u0948\u0928\u093F\u0915 \u0918\u093E\u091F\u093E \xD7 7 (\u0932\u0917\u092D\u0917 7700 kcal/kg \u0917\u0923\u093F\u0924\u0940\u092F \u0938\u0902\u0926\u0930\u094D\u092D)",
      "formulaCode": "Target Calories = TDEE - Daily Deficit",
      "tableTitle": "\u0915\u0948\u0932\u094B\u0930\u0940 \u0918\u093E\u091F\u093E \u090F\u0935\u0902 \u0935\u091C\u0928 \u092A\u0930\u093F\u0935\u0930\u094D\u0924\u0928 \u0938\u0902\u0926\u0930\u094D\u092D \u0924\u093E\u0932\u093F\u0915\u093E",
      "tableRows": [
        {
          "col1": "\u092A\u0930\u093F\u0926\u0943\u0936\u094D\u092F A: 250 kcal/\u0926\u093F\u0928 \u0918\u093E\u091F\u093E",
          "col2": "~1,750 kcal \u0938\u093E\u092A\u094D\u0924\u093E\u0939\u093F\u0915 \u0905\u0902\u0924\u0930",
          "col3": "\u0939\u0932\u094D\u0915\u093E \u0926\u0948\u0928\u093F\u0915 \u0915\u0948\u0932\u094B\u0930\u0940 \u0905\u0902\u0924\u0930 \u0938\u0902\u0926\u0930\u094D\u092D"
        },
        {
          "col1": "\u092A\u0930\u093F\u0926\u0943\u0936\u094D\u092F B: 500 kcal/\u0926\u093F\u0928 \u0918\u093E\u091F\u093E",
          "col2": "~3,500 kcal \u0938\u093E\u092A\u094D\u0924\u093E\u0939\u093F\u0915 \u0905\u0902\u0924\u0930",
          "col3": "\u092E\u093E\u0928\u0915 \u0926\u0948\u0928\u093F\u0915 \u0915\u0948\u0932\u094B\u0930\u0940 \u0905\u0902\u0924\u0930 \u0938\u0902\u0926\u0930\u094D\u092D"
        },
        {
          "col1": "\u090A\u0930\u094D\u091C\u093E \u0938\u0902\u0924\u0941\u0932\u0928",
          "col2": "0 kcal \u0905\u0902\u0924\u0930",
          "col3": "\u0935\u091C\u0928 \u0938\u094D\u0925\u093F\u0930\u0924\u093E \u0915\u0947 \u0932\u093F\u090F TDEE"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 4",
          "col2": "0 kcal net difference / week",
          "col3": "\u0935\u091C\u0928 \u0938\u094D\u0925\u093F\u0930 \u0930\u0916\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0905\u0928\u0941\u092E\u093E\u0928\u093F\u0924 \u091F\u0940\u0921\u0940\u0908\u0908 \u090A\u0930\u094D\u091C\u093E \u0938\u0902\u0924\u0941\u0932\u0928"
        }
      ],
      "faqs": [
        {
          "question": "\u0915\u0948\u0932\u094B\u0930\u0940 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u0926\u0948\u0928\u093F\u0915 \u0915\u0948\u0932\u094B\u0930\u0940 \u0906\u0935\u0936\u094D\u092F\u0915\u0924\u093E \u0915\u0948\u0938\u0947 \u0928\u093F\u0915\u093E\u0932\u0924\u093E \u0939\u0948?",
          "answer": "\u092F\u0939 \u0906\u092A\u0915\u0947 BMR \u0914\u0930 \u0906\u092A\u0915\u0940 \u0926\u0948\u0928\u093F\u0915 \u0917\u0924\u093F\u0935\u093F\u0927\u093F\u092F\u094B\u0902 (TDEE) \u0915\u094B \u092E\u093F\u0932\u093E\u0915\u0930 \u0935\u091C\u0928 \u0918\u091F\u093E\u0928\u0947 \u092F\u093E \u092C\u0922\u093C\u093E\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0932\u0915\u094D\u0937\u093F\u0924 \u0915\u0948\u0932\u094B\u0930\u0940 \u0924\u092F \u0915\u0930\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u0915\u0948\u0932\u094B\u0930\u0940 \u0918\u093E\u091F\u093E (Calorie Deficit) \u0915\u094D\u092F\u093E \u0939\u0948?",
          "answer": "\u0905\u092A\u0928\u0940 \u092C\u0930\u094D\u0928 \u0915\u0940 \u0917\u0908 \u0915\u0948\u0932\u094B\u0930\u0940 \u0938\u0947 \u0915\u092E \u0915\u0948\u0932\u094B\u0930\u0940 \u0916\u093E\u0928\u093E \u0915\u0948\u0932\u094B\u0930\u0940 \u0918\u093E\u091F\u093E \u0915\u0939\u0932\u093E\u0924\u093E \u0939\u0948, \u091C\u093F\u0938\u0938\u0947 \u0936\u0930\u0940\u0930 \u0935\u0938\u093E \u092C\u0930\u094D\u0928 \u0915\u0930\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "1 \u0915\u093F\u0917\u094D\u0930\u093E \u0935\u0938\u093E \u0918\u091F\u093E\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0915\u093F\u0924\u0928\u0940 \u0915\u0948\u0932\u094B\u0930\u0940 \u0915\u0940 \u0915\u092E\u0940 \u091A\u093E\u0939\u093F\u090F?",
          "answer": "\u0932\u0917\u092D\u0917 7,700 \u0915\u0948\u0932\u094B\u0930\u0940 \u0915\u0940 \u0915\u0941\u0932 \u0915\u092E\u0940 \u0938\u0947 \u0936\u0930\u0940\u0930 \u0915\u093E 1 \u0915\u093F\u0917\u094D\u0930\u093E \u0935\u091C\u0928 \u0915\u092E \u0939\u094B\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924 \u0935\u091C\u0928 \u0918\u091F\u093E\u0928\u0947 \u0915\u0940 \u0917\u0924\u093F \u0915\u094D\u092F\u093E \u0939\u0948?",
          "answer": "\u092A\u094D\u0930\u0924\u093F \u0938\u092A\u094D\u0924\u093E\u0939 0.5 \u0938\u0947 1 \u0915\u093F\u0917\u094D\u0930\u093E \u0935\u091C\u0928 \u0918\u091F\u093E\u0928\u093E \u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924 \u0914\u0930 \u091F\u093F\u0915\u093E\u090A \u092E\u093E\u0928\u093E \u091C\u093E\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u0915\u094D\u092F\u093E \u092D\u094B\u091C\u0928 \u0915\u0940 \u0917\u0941\u0923\u0935\u0924\u094D\u0924\u093E \u0915\u0947\u0935\u0932 \u0915\u0948\u0932\u094B\u0930\u0940 \u0917\u093F\u0928\u0924\u0940 \u0938\u0947 \u0905\u0927\u093F\u0915 \u092E\u0939\u0924\u094D\u0935\u092A\u0942\u0930\u094D\u0923 \u0939\u0948?",
          "answer": "\u0939\u093E\u0901, \u0915\u0948\u0932\u094B\u0930\u0940 \u0915\u0947 \u0938\u093E\u0925-\u0938\u093E\u0925 \u092A\u094D\u0930\u094B\u091F\u0940\u0928, \u092B\u093E\u0907\u092C\u0930 \u0914\u0930 \u092A\u094B\u0937\u0915 \u0924\u0924\u094D\u0935\u094B\u0902 \u0938\u0947 \u092D\u0930\u092A\u0942\u0930 \u0938\u0902\u0924\u0941\u0932\u093F\u0924 \u0906\u0939\u093E\u0930 \u0906\u0935\u0936\u094D\u092F\u0915 \u0939\u0948\u0964"
        }
      ]
    }
  },
  "protein-intake-calculator": {
    "en": {
      "eyebrow": "Sports Nutrition Reference",
      "title": "Protein Intake Calculator & Daily Protein Reference Range Tool",
      "intro": "Calculate an estimated daily protein intake target with our free Protein Intake Calculator. Based on sports nutrition reference ranges, estimate your suggested daily protein target based on body weight, activity level, and goals.",
      "formulaTitle": "Protein Intake Formula & Goal Multipliers",
      "formulaDesc": "Sedentary Baseline: 0.8 g / kg | Endurance Athletes: 1.2 - 1.4 g / kg | Active Training: 1.6 - 2.2 g / kg",
      "formulaCode": "Protein Target (g) = Weight (kg) \xD7 Goal Factor (0.8 to 2.4 g/kg)",
      "tableTitle": "Daily Protein Reference Range (g/kg) Matrix by Activity & Goal",
      "tableRows": [
        {
          "col1": "Sedentary Adult Baseline",
          "col2": "0.8 g / kg body weight",
          "col3": "RDA baseline reference"
        },
        {
          "col1": "Active Endurance Athlete",
          "col2": "1.2 \u2013 1.4 g / kg body weight",
          "col3": "Reference athletic range"
        },
        {
          "col1": "Muscle Growth (Hypertrophy)",
          "col2": "1.6 \u2013 2.2 g / kg body weight",
          "col3": "Common athletic target for training"
        },
        {
          "col1": "Fat Loss Calorie Deficit",
          "col2": "1.8 \u2013 2.4 g / kg body weight",
          "col3": "Example range referenced during calorie deficit planning"
        }
      ],
      "faqs": [
        {
          "question": "What is the Protein Intake Calculator?",
          "answer": "The Protein Intake Calculator is a sports nutrition tool that calculates your daily protein requirement estimate in grams based on body weight, fitness goals, and training intensity."
        },
        {
          "question": "How much protein do I need per day for muscle building vs weight loss?",
          "answer": "Suggested protein ranges vary based on physical activity: 1.6 to 2.2 g/kg is commonly used for muscle building, and 1.8 to 2.4 g/kg for calorie deficit training. Individual needs vary based on age, health status, and overall diet."
        },
        {
          "question": "How to calculate daily protein requirement in grams per kg of body weight?",
          "answer": "Multiply your weight in kg by your target factor. For example, a 70 kg lifter aiming for muscle growth: 70 kg \xD7 2.0 g/kg = 140 grams of protein daily."
        },
        {
          "question": "\xBFCu\xE1les son las mejores fuentes de alimentos ricos en prote\xEDnas?",
          "answer": "Complete protein sources include chicken breast (31g/100g), Greek yogurt (10g/100g), eggs (6g/egg), whey protein (24g/scoop), salmon (22g/100g), tofu (8g/100g), and lentils (9g/100g cooked)."
        },
        {
          "question": "Who should consult a professional regarding protein intake targets?",
          "answer": "Sports nutrition literature provides general protein range estimates based on physical activity. Individuals with kidney disease, liver conditions, or other medical issues should discuss specific dietary protein targets with a qualified healthcare professional."
        }
      ]
    },
    "es": {
      "eyebrow": "Est\xE1ndares de Referencia de Salud",
      "title": "Calculadora de Prote\xEDnas \u2013 Requerimiento Diario de Prote\xEDna \u2013 Gu\xEDa y Calculadora",
      "intro": "Herramienta de c\xE1lculo y referencia educativa dise\xF1ada seg\xFAn los est\xE1ndares de salud publicados de la OMS y CDC. Calcula tus m\xE9tricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "F\xF3rmula de Referencia Est\xE1ndar",
      "formulaDesc": "Calculado utilizando ecuaciones est\xE1ndar validadas.",
      "formulaCode": "Protein Target (g) = Weight (kg) \xD7 Goal Factor (0.8 to 2.4 g/kg)",
      "tableTitle": "Tabla de Referencia Est\xE1ndar",
      "tableRows": [
        {
          "col1": "Categor\xEDa / Nivel 1",
          "col2": "0.8 g / kg body weight",
          "col3": "Referencia basal de IDR (ingesta diaria recomendada)"
        },
        {
          "col1": "Categor\xEDa / Nivel 2",
          "col2": "1.2 \u2013 1.4 g / kg body weight",
          "col3": "Rango de referencia para atletas"
        },
        {
          "col1": "Categor\xEDa / Nivel 3",
          "col2": "1.6 \u2013 2.2 g / kg body weight",
          "col3": "Objetivo deportivo habitual para entrenamiento"
        },
        {
          "col1": "Categor\xEDa / Nivel 4",
          "col2": "1.8 \u2013 2.4 g / kg body weight",
          "col3": "Rango de ejemplo en planificaci\xF3n de d\xE9ficit cal\xF3rico"
        }
      ],
      "faqs": [
        {
          "question": "\xBFC\xF3mo funciona la calculadora de ingesta de prote\xEDnas y qu\xE9 mide?",
          "answer": "Esta calculadora eval\xFAa tus datos personales utilizando ecuaciones validadas. Proporciona una estimaci\xF3n educativa para ayudarte a comprender tu estado de salud y referencias est\xE1ndar."
        },
        {
          "question": "How much protein do I need per day for muscle building vs weight loss?",
          "answer": "Suggested protein ranges vary based on physical activity: 1.6 to 2.2 g/kg is commonly used for muscle building, and 1.8 to 2.4 g/kg for calorie deficit training. Individual needs vary based on age, health status, and overall diet."
        },
        {
          "question": "C\xF3mo calculate daily protein requirement in grams per kg of body weight?",
          "answer": "Multiply your weight in kg by your target factor. For example, a 70 kg lifter aiming for muscle growth: 70 kg \xD7 2.0 g/kg = 140 grams of protein daily."
        },
        {
          "question": "\xBFCu\xE1les son las mejores fuentes de alimentos ricos en prote\xEDnas?",
          "answer": "Complete protein sources include chicken breast (31g/100g), Greek yogurt (10g/100g), eggs (6g/egg), whey protein (24g/scoop), salmon (22g/100g), tofu (8g/100g), and lentils (9g/100g cooked)."
        },
        {
          "question": "Who should consult a professional regarding protein intake targets?",
          "answer": "Sports nutrition literature provides general protein range estimates based on physical activity. Individuals with kidney disease, liver conditions, or other medical issues should discuss specific dietary protein targets with a qualified healthcare professional."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de R\xE9f\xE9rence de Sant\xE9",
      "title": "Calculateur de Prot\xE9ines \u2013 Apport Prot\xE9ique Quotidien \u2013 Outil de R\xE9f\xE9rence",
      "intro": "Outil de calcul et de r\xE9f\xE9rence \xE9ducatif con\xE7u selon les normes de sant\xE9 publi\xE9es de l'OMS et du CDC. Calculez vos m\xE9triques et consultez les plages de r\xE9f\xE9rence.",
      "formulaTitle": "Formule de R\xE9f\xE9rence Standard",
      "formulaDesc": "Calcul\xE9 \xE0 l'aide d'\xE9quations standards valid\xE9es.",
      "formulaCode": "Protein Target (g) = Weight (kg) \xD7 Goal Factor (0.8 to 2.4 g/kg)",
      "tableTitle": "Tableau de R\xE9f\xE9rence Standard",
      "tableRows": [
        {
          "col1": "Cat\xE9gorie / Niveau 1",
          "col2": "0.8 g / kg body weight",
          "col3": "R\xE9f\xE9rence de base AJR (apports journaliers recommand\xE9s)"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 2",
          "col2": "1.2 \u2013 1.4 g / kg body weight",
          "col3": "Plage de r\xE9f\xE9rence pour les athl\xE8tes"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 3",
          "col2": "1.6 \u2013 2.2 g / kg body weight",
          "col3": "Objectif sportif courant pour l'entra\xEEnement"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 4",
          "col2": "1.8 \u2013 2.4 g / kg body weight",
          "col3": "Plage indicative lors d'un d\xE9ficit calorique"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur d'apport en prot\xE9ines et que mesure-t-il ?",
          "answer": "Ce calculateur \xE9value vos donn\xE9es personnelles \xE0 l'aide d'\xE9quations valid\xE9es. Il fournit une estimation \xE9ducative pour vous aider \xE0 comprendre vos m\xE9triques et r\xE9f\xE9rences standards."
        },
        {
          "question": "How much protein do I need per day for muscle building vs weight loss?",
          "answer": "Suggested protein ranges vary based on physical activity: 1.6 to 2.2 g/kg is commonly used for muscle building, and 1.8 to 2.4 g/kg for calorie deficit training. Individual needs vary based on age, health status, and overall diet."
        },
        {
          "question": "Comment calculate daily protein requirement in grams per kg of body weight?",
          "answer": "Multiply your weight in kg by your target factor. For example, a 70 kg lifter aiming for muscle growth: 70 kg \xD7 2.0 g/kg = 140 grams of protein daily."
        },
        {
          "question": "\xBFCu\xE1les son las mejores fuentes de alimentos ricos en prote\xEDnas?",
          "answer": "Complete protein sources include chicken breast (31g/100g), Greek yogurt (10g/100g), eggs (6g/egg), whey protein (24g/scoop), salmon (22g/100g), tofu (8g/100g), and lentils (9g/100g cooked)."
        },
        {
          "question": "Who should consult a professional regarding protein intake targets?",
          "answer": "Sports nutrition literature provides general protein range estimates based on physical activity. Individuals with kidney disease, liver conditions, or other medical issues should discuss specific dietary protein targets with a qualified healthcare professional."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "Proteinrechner \u2013 T\xE4glicher Eiwei\xDFbedarf & Referenzwerte \u2013 Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den ver\xF6ffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und pr\xFCfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardm\xE4\xDFig validierten Gleichungen.",
      "formulaCode": "Protein Target (g) = Weight (kg) \xD7 Goal Factor (0.8 to 2.4 g/kg)",
      "tableTitle": "Standard-Referenztabelle",
      "tableRows": [
        {
          "col1": "Kategorie / Stufe 1",
          "col2": "0.8 g / kg body weight",
          "col3": "RDA-Basisreferenz (Empfohlene Tagesdosis)"
        },
        {
          "col1": "Kategorie / Stufe 2",
          "col2": "1.2 \u2013 1.4 g / kg body weight",
          "col3": "Sportler-Referenzbereich"
        },
        {
          "col1": "Kategorie / Stufe 3",
          "col2": "1.6 \u2013 2.2 g / kg body weight",
          "col3": "\xDCbliches Trainingsziel f\xFCr Sportler"
        },
        {
          "col1": "Kategorie / Stufe 4",
          "col2": "1.8 \u2013 2.4 g / kg body weight",
          "col3": "Beispielbereich bei der Planung eines Kaloriendefizits"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der Proteine-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre pers\xF6nlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        },
        {
          "question": "How much protein do I need per day for muscle building vs weight loss?",
          "answer": "Suggested protein ranges vary based on physical activity: 1.6 to 2.2 g/kg is commonly used for muscle building, and 1.8 to 2.4 g/kg for calorie deficit training. Individual needs vary based on age, health status, and overall diet."
        },
        {
          "question": "Wie man calculate daily protein requirement in grams per kg of body weight?",
          "answer": "Multiply your weight in kg by your target factor. For example, a 70 kg lifter aiming for muscle growth: 70 kg \xD7 2.0 g/kg = 140 grams of protein daily."
        },
        {
          "question": "\xBFCu\xE1les son las mejores fuentes de alimentos ricos en prote\xEDnas?",
          "answer": "Complete protein sources include chicken breast (31g/100g), Greek yogurt (10g/100g), eggs (6g/egg), whey protein (24g/scoop), salmon (22g/100g), tofu (8g/100g), and lentils (9g/100g cooked)."
        },
        {
          "question": "Who should consult a professional regarding protein intake targets?",
          "answer": "Sports nutrition literature provides general protein range estimates based on physical activity. Individuals with kidney disease, liver conditions, or other medical issues should discuss specific dietary protein targets with a qualified healthcare professional."
        }
      ]
    },
    "ko": {
      "eyebrow": "\uAC74\uAC15 \uCC38\uC870 \uD45C\uC900 \uC9C0\uCE68",
      "title": "\uB2E8\uBC31\uC9C8 \uC12D\uCDE8\uB7C9 \uACC4\uC0B0\uAE30 \u2013 \uC77C\uC77C \uB2E8\uBC31\uC9C8 \uAD8C\uC7A5\uB7C9 \uCE21\uC815 \uB3C4\uAD6C",
      "intro": "WHO \uBC0F CDC \uC9C0\uCE68\uC5D0 \uAE30\uBC18\uD55C \uC2E4\uC2DC\uAC04 \uCC38\uACE0 \uACC4\uC0B0\uAE30\uC785\uB2C8\uB2E4. \uAC1C\uC778\uBCC4 \uC218\uCE58\uB97C \uCE21\uC815\uD558\uACE0 \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uD655\uC778\uD558\uC138\uC694.",
      "formulaTitle": "\uD45C\uC900 \uACC4\uC0B0 \uACF5\uC2DD",
      "formulaDesc": "\uAC80\uC99D\uB41C \uD45C\uC900 \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uACC4\uC0B0\uB429\uB2C8\uB2E4.",
      "formulaCode": "Protein Target (g) = Weight (kg) \xD7 Goal Factor (0.8 to 2.4 g/kg)",
      "tableTitle": "\uD45C\uC900 \uCC38\uC870 \uC9C4\uB2E8\uD45C",
      "tableRows": [
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 1",
          "col2": "0.8 g / kg body weight",
          "col3": "\uAD8C\uC7A5 \uC77C\uC77C \uC12D\uCDE8\uB7C9(RDA) \uAE30\uC900"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 2",
          "col2": "1.2 \u2013 1.4 g / kg body weight",
          "col3": "\uC6B4\uB3D9\uC120\uC218 \uAD8C\uC7A5 \uAE30\uC900 \uBC94\uC704"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 3",
          "col2": "1.6 \u2013 2.2 g / kg body weight",
          "col3": "\uD2B8\uB808\uC774\uB2DD\uC744 \uC704\uD55C \uC77C\uBC18\uC801 \uC6B4\uB3D9\uC120\uC218 \uBAA9\uD45C\uCE58"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 4",
          "col2": "1.8 \u2013 2.4 g / kg body weight",
          "col3": "\uCE7C\uB85C\uB9AC \uC81C\uD55C \uACC4\uD68D \uC2DC \uCC38\uACE0\uD558\uB294 \uC608\uC2DC \uBC94\uC704"
        }
      ],
      "faqs": [
        {
          "question": "\uB2E8\uBC31\uC9C8 \uC12D\uCDE8\uB7C9 \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uBCF8 \uACC4\uC0B0\uAE30\uB294 \uAC80\uC99D\uB41C \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uAC1C\uC778\uBCC4 \uC2E0\uCCB4 \uC9C0\uC218\uB97C \uC0B0\uCD9C\uD569\uB2C8\uB2E4. \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uBC14\uD0D5\uC73C\uB85C \uAD50\uC721\uC801 \uBD84\uC11D \uACB0\uACFC\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."
        },
        {
          "question": "How much protein do I need per day for muscle building vs weight loss? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "Suggested protein ranges vary based on physical activity: 1.6 to 2.2 g/kg is commonly used for muscle building, and 1.8 to 2.4 g/kg for calorie deficit training. Individual needs vary based on age, health status, and overall diet."
        },
        {
          "question": " calculate daily protein requirement in grams per kg of body weight? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "Multiply your weight in kg by your target factor. For example, a 70 kg lifter aiming for muscle growth: 70 kg \xD7 2.0 g/kg = 140 grams of protein daily."
        },
        {
          "question": "\xBFCu\xE1les son las mejores fuentes de alimentos ricos en prote\xEDnas? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "Complete protein sources include chicken breast (31g/100g), Greek yogurt (10g/100g), eggs (6g/egg), whey protein (24g/scoop), salmon (22g/100g), tofu (8g/100g), and lentils (9g/100g cooked)."
        },
        {
          "question": "Who should consult a professional regarding protein intake targets? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "Sports nutrition literature provides general protein range estimates based on physical activity. Individuals with kidney disease, liver conditions, or other medical issues should discuss specific dietary protein targets with a qualified healthcare professional."
        }
      ]
    },
    "hi": {
      "eyebrow": "\u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0938\u0902\u0926\u0930\u094D\u092D \u092E\u093E\u0928\u0915",
      "title": "\u092A\u094D\u0930\u094B\u091F\u0940\u0928 \u0938\u0947\u0935\u0928 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u2013 \u0926\u0948\u0928\u093F\u0915 \u092A\u094D\u0930\u094B\u091F\u0940\u0928 \u0906\u0935\u0936\u094D\u092F\u0915\u0924\u093E \u0915\u0940 \u0917\u0923\u0928\u093E",
      "intro": "\u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u0914\u0930 \u0938\u0940\u0921\u0940\u0938\u0940 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u092E\u093E\u0928\u0915\u094B\u0902 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0928\u093F\u0930\u094D\u092E\u093F\u0924 \u0938\u0902\u0926\u0930\u094D\u092D \u091F\u0942\u0932\u0964 \u0905\u092A\u0928\u0940 \u092E\u0947\u091F\u094D\u0930\u093F\u0915\u094D\u0938 \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902 \u0914\u0930 \u0938\u094D\u0925\u093E\u092A\u093F\u0924 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0938\u0940\u092E\u093E\u0913\u0902 \u0915\u0940 \u0938\u092E\u0940\u0915\u094D\u0937\u093E \u0915\u0930\u0947\u0902\u0964",
      "formulaTitle": "\u092E\u093E\u0928\u0915 \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0942\u0924\u094D\u0930",
      "formulaDesc": "\u092E\u093E\u0928\u0915 \u0938\u0924\u094D\u092F\u093E\u092A\u093F\u0924 \u0938\u092E\u0940\u0915\u0930\u0923\u094B\u0902 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0915\u0947 \u0917\u0923\u0928\u093E \u0915\u0940 \u0917\u0908\u0964",
      "formulaCode": "Protein Target (g) = Weight (kg) \xD7 Goal Factor (0.8 to 2.4 g/kg)",
      "tableTitle": "\u092E\u093E\u0928\u0915 \u0938\u0902\u0926\u0930\u094D\u092D \u0924\u093E\u0932\u093F\u0915\u093E",
      "tableRows": [
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 1",
          "col2": "0.8 g / kg body weight",
          "col3": "\u0906\u0930\u0921\u0940\u090F (RDA) \u0906\u0927\u093E\u0930\u092D\u0942\u0924 \u0938\u0902\u0926\u0930\u094D\u092D"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 2",
          "col2": "1.2 \u2013 1.4 g / kg body weight",
          "col3": "\u090F\u0925\u0932\u0940\u091F \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 3",
          "col2": "1.6 \u2013 2.2 g / kg body weight",
          "col3": "\u092A\u094D\u0930\u0936\u093F\u0915\u094D\u0937\u0923 \u0915\u0947 \u0932\u093F\u090F \u0938\u093E\u092E\u093E\u0928\u094D\u092F \u090F\u0925\u0932\u0947\u091F\u093F\u0915 \u0932\u0915\u094D\u0937\u094D\u092F"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 4",
          "col2": "1.8 \u2013 2.4 g / kg body weight",
          "col3": "\u0915\u0948\u0932\u094B\u0930\u0940 \u0918\u093E\u091F\u093E \u092F\u094B\u091C\u0928\u093E \u0915\u0947 \u0926\u094C\u0930\u093E\u0928 \u0938\u0902\u0926\u0930\u094D\u092D\u093F\u0924 \u0909\u0926\u093E\u0939\u0930\u0923 \u0938\u0940\u092E\u093E"
        }
      ],
      "faqs": [
        {
          "question": "\u092E\u0941\u091D\u0947 \u0930\u094B\u091C\u093E\u0928\u093E \u0915\u093F\u0924\u0928\u0947 \u0917\u094D\u0930\u093E\u092E \u092A\u094D\u0930\u094B\u091F\u0940\u0928 \u0915\u0940 \u0906\u0935\u0936\u094D\u092F\u0915\u0924\u093E \u0939\u0948?",
          "answer": "\u090F\u0915 \u0938\u093E\u092E\u093E\u0928\u094D\u092F \u0935\u092F\u0938\u094D\u0915 \u0915\u094B \u092A\u094D\u0930\u0924\u093F \u0915\u093F\u0917\u094D\u0930\u093E \u0935\u091C\u0928 \u092A\u0930 \u0928\u094D\u092F\u0942\u0928\u0924\u092E 0.8 \u0917\u094D\u0930\u093E\u092E, \u091C\u092C\u0915\u093F \u0938\u0915\u094D\u0930\u093F\u092F \u090F\u0925\u0932\u0940\u091F\u094B\u0902 \u0915\u094B 1.6 \u0938\u0947 2.2 \u0917\u094D\u0930\u093E\u092E \u092A\u094D\u0930\u094B\u091F\u0940\u0928 \u091A\u093E\u0939\u093F\u090F\u0964"
        },
        {
          "question": "\u092E\u093E\u0902\u0938\u092A\u0947\u0936\u093F\u092F\u093E\u0902 \u092C\u0928\u093E\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u092A\u094D\u0930\u094B\u091F\u0940\u0928 \u0915\u093E \u0926\u0948\u0928\u093F\u0915 \u0932\u0915\u094D\u0937\u094D\u092F \u0915\u094D\u092F\u093E \u0939\u0948?",
          "answer": "\u092E\u093E\u0902\u0938\u092A\u0947\u0936\u093F\u092F\u094B\u0902 \u0915\u0947 \u0928\u093F\u0930\u094D\u092E\u093E\u0923 \u0915\u0947 \u0932\u093F\u090F \u0906\u092A\u0915\u0947 \u0936\u0930\u0940\u0930 \u0915\u0947 \u0935\u091C\u0928 \u0915\u0947 \u092A\u094D\u0930\u0924\u093F \u0915\u093F\u0917\u094D\u0930\u093E \u092A\u0930 1.6 \u0938\u0947 2.0 \u0917\u094D\u0930\u093E\u092E \u092A\u094D\u0930\u094B\u091F\u0940\u0928 \u0915\u0940 \u0938\u0932\u093E\u0939 \u0926\u0940 \u091C\u093E\u0924\u0940 \u0939\u0948\u0964"
        },
        {
          "question": "\u0935\u091C\u0928 \u0918\u091F\u093E\u0924\u0947 \u0938\u092E\u092F \u092A\u094D\u0930\u094B\u091F\u0940\u0928 \u0915\u094D\u092F\u094B\u0902 \u092E\u0939\u0924\u094D\u0935\u092A\u0942\u0930\u094D\u0923 \u0939\u0948?",
          "answer": "\u092A\u094D\u0930\u094B\u091F\u0940\u0928 \u092A\u0947\u091F \u0915\u094B \u092D\u0930\u093E \u0930\u0916\u0924\u093E \u0939\u0948 \u0914\u0930 \u0915\u0948\u0932\u094B\u0930\u0940 \u0918\u093E\u091F\u0947 \u0915\u0947 \u0926\u094C\u0930\u093E\u0928 \u092E\u093E\u0902\u0938\u092A\u0947\u0936\u093F\u092F\u094B\u0902 \u0915\u0947 \u0915\u094D\u0937\u092F (Muscle Loss) \u0915\u094B \u0930\u094B\u0915\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u0915\u094D\u092F\u093E \u090F\u0915 \u092C\u093E\u0930 \u092E\u0947\u0902 \u092C\u0939\u0941\u0924 \u0905\u0927\u093F\u0915 \u092A\u094D\u0930\u094B\u091F\u0940\u0928 \u092A\u091A\u093E\u0928\u093E \u0938\u0902\u092D\u0935 \u0939\u0948?",
          "answer": "\u0936\u0930\u0940\u0930 \u0926\u093F\u0928\u092D\u0930 \u092E\u0947\u0902 \u0935\u093F\u092D\u093E\u091C\u093F\u0924 \u092A\u094D\u0930\u094B\u091F\u0940\u0928 \u0915\u093E \u092C\u0947\u0939\u0924\u0930 \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0924\u093E \u0939\u0948, \u0907\u0938\u0932\u093F\u090F 3-4 \u092D\u094B\u091C\u0928 \u092E\u0947\u0902 \u092A\u094D\u0930\u094B\u091F\u0940\u0928 \u092C\u093E\u0902\u091F\u0928\u093E \u092C\u0947\u0939\u0924\u0930 \u0939\u0948\u0964"
        },
        {
          "question": "\u0936\u093E\u0915\u093E\u0939\u093E\u0930\u0940 \u0938\u094D\u0930\u094B\u0924\u094B\u0902 \u0938\u0947 \u092A\u094D\u0930\u094B\u091F\u0940\u0928 \u0915\u0940 \u0906\u0935\u0936\u094D\u092F\u0915\u0924\u093E \u0915\u0948\u0938\u0947 \u092A\u0942\u0930\u0940 \u0915\u0930\u0947\u0902?",
          "answer": "\u0926\u093E\u0932\u0947\u0902, \u092A\u0928\u0940\u0930, \u0938\u094B\u092F\u093E, \u0924\u094B\u092B\u0942, \u092C\u0947\u0938\u0928 \u0914\u0930 \u0935\u094D\u0939\u0947 \u092A\u094D\u0930\u094B\u091F\u0940\u0928 \u091C\u0948\u0938\u0947 \u0938\u094D\u0930\u094B\u0924\u094B\u0902 \u0938\u0947 \u0926\u0948\u0928\u093F\u0915 \u092A\u094D\u0930\u094B\u091F\u0940\u0928 \u0932\u0915\u094D\u0937\u094D\u092F \u092A\u0942\u0930\u093E \u0915\u093F\u092F\u093E \u091C\u093E \u0938\u0915\u0924\u093E \u0939\u0948\u0964"
        }
      ]
    }
  },
  "water-intake-calculator": {
    "en": {
      "eyebrow": "Hydration Guidelines",
      "title": "Water Intake Calculator & Daily Hydration Target Tool",
      "intro": 'Calculate "how much water should I drink daily" with our free Water Intake Calculator. Using hydration formulas based on body weight, activity level, and climate loss, determine your estimated daily fluid target. (Note: Hydration requirements vary based on climate, sweat rate, health conditions, and pregnancy.)',
      "formulaTitle": "Water Intake by Body Weight Mathematical Equation",
      "formulaDesc": "Baseline Water (Liters) = [Weight (kg) \xD7 35 ml] / 1000 + Physical Activity Sweat Factor (500 ml to 1000 ml per hour of exercise)",
      "formulaCode": "Water (L) = (W_kg \xD7 0.035) + (Exercise_hrs \xD7 0.75)",
      "tableTitle": "Daily Water Intake Benchmarks by Body Weight (Liters & Glasses)",
      "tableRows": [
        {
          "col1": "Sedentary 50 kg Adult",
          "col2": "1.75 Liters / day",
          "col3": "~7 standard 250ml glasses"
        },
        {
          "col1": "Sedentary 70 kg Adult",
          "col2": "2.45 Liters / day",
          "col3": "~10 standard 250ml glasses"
        },
        {
          "col1": "Active 70 kg Athlete",
          "col2": "3.20 Liters / day",
          "col3": "~13 standard 250ml glasses"
        },
        {
          "col1": "Heavy Exercise 90 kg Athlete",
          "col2": "4.15 Liters / day",
          "col3": "~17 standard 250ml glasses"
        }
      ],
      "faqs": [
        {
          "question": "What is the Water Intake Calculator?",
          "answer": "The Water Intake Calculator is a daily health tool that determines your estimated daily fluid consumption target based on body weight, physical exertion, and environmental sweat loss."
        },
        {
          "question": "How much water should I drink per day based on body weight?",
          "answer": "A common rule of thumb is to drink 35 ml of water per kilogram of body weight daily (or approximately 0.5 ounces per pound of body weight), plus additional fluids during workout sessions."
        },
        {
          "question": "How to calculate daily water intake using the weight formula?",
          "answer": "Multiply your weight in kilograms by 35 ml (or weight in lbs by 0.5 oz). For a 70 kg person: 70 \xD7 35 = 2,450 ml (2.45 Liters), which equals about 10 standard 250ml glasses of water."
        },
        {
          "question": "Does coffee, tea, or soda count toward my daily water intake?",
          "answer": "Yes, caffeinated beverages like tea and coffee contribute to fluid hydration. However, plain water remains the healthiest and most efficient source of cellular hydration."
        },
        {
          "question": "\xBFCu\xE1les son los primeros signos de deshidrataci\xF3n y sobrehidrataci\xF3n?",
          "answer": "Dehydration symptoms include dark yellow urine, fatigue, headaches, and dry mouth. Overhydration (hyponatremia) symptoms include clear urine accompanied by nausea and muscle cramps from diluted blood sodium."
        }
      ]
    },
    "es": {
      "eyebrow": "Est\xE1ndares de Referencia de Salud",
      "title": "Calculadora de Consumo de Agua \u2013 Meta Diaria de Hidrataci\xF3n \u2013 Gu\xEDa y Calculadora",
      "intro": "Herramienta de c\xE1lculo y referencia educativa dise\xF1ada seg\xFAn los est\xE1ndares de salud publicados de la OMS y CDC. Calcula tus m\xE9tricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "F\xF3rmula de Referencia Est\xE1ndar",
      "formulaDesc": "Calculado utilizando ecuaciones est\xE1ndar validadas.",
      "formulaCode": "Water (L) = (W_kg \xD7 0.035) + (Exercise_hrs \xD7 0.75)",
      "tableTitle": "Tabla de Referencia Est\xE1ndar",
      "tableRows": [
        {
          "col1": "Adulto Sedentario (50 kg)",
          "col2": "1.75 Liters / day",
          "col3": "~7 vasos est\xE1ndar de 250 ml"
        },
        {
          "col1": "Adulto Sedentario (70 kg)",
          "col2": "2.45 Liters / day",
          "col3": "~10 vasos est\xE1ndar de 250 ml"
        },
        {
          "col1": "Atleta Activo (70 kg)",
          "col2": "3.20 Liters / day",
          "col3": "~13 vasos est\xE1ndar de 250 ml"
        },
        {
          "col1": "Atleta Entrenamiento Intenso (90 kg)",
          "col2": "4.15 Liters / day",
          "col3": "~17 vasos est\xE1ndar de 250 ml"
        }
      ],
      "faqs": [
        {
          "question": "\xBFC\xF3mo funciona la calculadora de consumo de agua y qu\xE9 mide?",
          "answer": "Esta calculadora eval\xFAa tus datos personales utilizando ecuaciones validadas. Proporciona una estimaci\xF3n educativa para ayudarte a comprender tu estado de salud y referencias est\xE1ndar."
        },
        {
          "question": "How much water should I drink per day based on body weight?",
          "answer": "A common rule of thumb is to drink 35 ml of water per kilogram of body weight daily (or approximately 0.5 ounces per pound of body weight), plus additional fluids during workout sessions."
        },
        {
          "question": "C\xF3mo calculate daily water intake using the weight formula?",
          "answer": "Multiply your weight in kilograms by 35 ml (or weight in lbs by 0.5 oz). For a 70 kg person: 70 \xD7 35 = 2,450 ml (2.45 Liters), which equals about 10 standard 250ml glasses of water."
        },
        {
          "question": "Does coffee, tea, or soda count toward my daily water intake?",
          "answer": "Yes, caffeinated beverages like tea and coffee contribute to fluid hydration. However, plain water remains the healthiest and most efficient source of cellular hydration."
        },
        {
          "question": "\xBFCu\xE1les son los primeros signos de deshidrataci\xF3n y sobrehidrataci\xF3n?",
          "answer": "Dehydration symptoms include dark yellow urine, fatigue, headaches, and dry mouth. Overhydration (hyponatremia) symptoms include clear urine accompanied by nausea and muscle cramps from diluted blood sodium."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de R\xE9f\xE9rence de Sant\xE9",
      "title": "Calculateur d'Apport en Eau \u2013 Objectif d'Hydratation Quotidien \u2013 Outil de R\xE9f\xE9rence",
      "intro": "Outil de calcul et de r\xE9f\xE9rence \xE9ducatif con\xE7u selon les normes de sant\xE9 publi\xE9es de l'OMS et du CDC. Calculez vos m\xE9triques et consultez les plages de r\xE9f\xE9rence.",
      "formulaTitle": "Formule de R\xE9f\xE9rence Standard",
      "formulaDesc": "Calcul\xE9 \xE0 l'aide d'\xE9quations standards valid\xE9es.",
      "formulaCode": "Water (L) = (W_kg \xD7 0.035) + (Exercise_hrs \xD7 0.75)",
      "tableTitle": "Tableau de R\xE9f\xE9rence Standard",
      "tableRows": [
        {
          "col1": "Adulte S\xE9dentaire (50 kg)",
          "col2": "1.75 Liters / day",
          "col3": "~7 verres standards de 250 ml"
        },
        {
          "col1": "Adulte S\xE9dentaire (70 kg)",
          "col2": "2.45 Liters / day",
          "col3": "~10 verres standards de 250 ml"
        },
        {
          "col1": "Athl\xE8te Actif (70 kg)",
          "col2": "3.20 Liters / day",
          "col3": "~13 verres standards de 250 ml"
        },
        {
          "col1": "Athl\xE8te Entra\xEEnement Intensif (90 kg)",
          "col2": "4.15 Liters / day",
          "col3": "~17 verres standards de 250 ml"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur d'hydratation quotidienne et que mesure-t-il ?",
          "answer": "Ce calculateur \xE9value vos donn\xE9es personnelles \xE0 l'aide d'\xE9quations valid\xE9es. Il fournit une estimation \xE9ducative pour vous aider \xE0 comprendre vos m\xE9triques et r\xE9f\xE9rences standards."
        },
        {
          "question": "How much water should I drink per day based on body weight?",
          "answer": "A common rule of thumb is to drink 35 ml of water per kilogram of body weight daily (or approximately 0.5 ounces per pound of body weight), plus additional fluids during workout sessions."
        },
        {
          "question": "Comment calculate daily water intake using the weight formula?",
          "answer": "Multiply your weight in kilograms by 35 ml (or weight in lbs by 0.5 oz). For a 70 kg person: 70 \xD7 35 = 2,450 ml (2.45 Liters), which equals about 10 standard 250ml glasses of water."
        },
        {
          "question": "Does coffee, tea, or soda count toward my daily water intake?",
          "answer": "Yes, caffeinated beverages like tea and coffee contribute to fluid hydration. However, plain water remains the healthiest and most efficient source of cellular hydration."
        },
        {
          "question": "\xBFCu\xE1les son los primeros signos de deshidrataci\xF3n y sobrehidrataci\xF3n?",
          "answer": "Dehydration symptoms include dark yellow urine, fatigue, headaches, and dry mouth. Overhydration (hyponatremia) symptoms include clear urine accompanied by nausea and muscle cramps from diluted blood sodium."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "Wasserbedarfsrechner \u2013 T\xE4gliches Hydratationsziel berechnen \u2013 Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den ver\xF6ffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und pr\xFCfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardm\xE4\xDFig validierten Gleichungen.",
      "formulaCode": "Water (L) = (W_kg \xD7 0.035) + (Exercise_hrs \xD7 0.75)",
      "tableTitle": "Standard-Referenztabelle",
      "tableRows": [
        {
          "col1": "Bewegungsarmer Erwachsener (50 kg)",
          "col2": "1.75 Liters / day",
          "col3": "~7 Standardgl\xE4ser (250 ml)"
        },
        {
          "col1": "Bewegungsarmer Erwachsener (70 kg)",
          "col2": "2.45 Liters / day",
          "col3": "~10 Standardgl\xE4ser (250 ml)"
        },
        {
          "col1": "Aktiver Sportler (70 kg)",
          "col2": "3.20 Liters / day",
          "col3": "~13 Standardgl\xE4ser (250 ml)"
        },
        {
          "col1": "Intensiver Sportler (90 kg)",
          "col2": "4.15 Liters / day",
          "col3": "~17 Standardgl\xE4ser (250 ml)"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der Wasserbedarf-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre pers\xF6nlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        },
        {
          "question": "How much water should I drink per day based on body weight?",
          "answer": "A common rule of thumb is to drink 35 ml of water per kilogram of body weight daily (or approximately 0.5 ounces per pound of body weight), plus additional fluids during workout sessions."
        },
        {
          "question": "Wie man calculate daily water intake using the weight formula?",
          "answer": "Multiply your weight in kilograms by 35 ml (or weight in lbs by 0.5 oz). For a 70 kg person: 70 \xD7 35 = 2,450 ml (2.45 Liters), which equals about 10 standard 250ml glasses of water."
        },
        {
          "question": "Does coffee, tea, or soda count toward my daily water intake?",
          "answer": "Yes, caffeinated beverages like tea and coffee contribute to fluid hydration. However, plain water remains the healthiest and most efficient source of cellular hydration."
        },
        {
          "question": "\xBFCu\xE1les son los primeros signos de deshidrataci\xF3n y sobrehidrataci\xF3n?",
          "answer": "Dehydration symptoms include dark yellow urine, fatigue, headaches, and dry mouth. Overhydration (hyponatremia) symptoms include clear urine accompanied by nausea and muscle cramps from diluted blood sodium."
        }
      ]
    },
    "ko": {
      "eyebrow": "\uAC74\uAC15 \uCC38\uC870 \uD45C\uC900 \uC9C0\uCE68",
      "title": "\uC218\uBD84 \uC12D\uCDE8\uB7C9 \uACC4\uC0B0\uAE30 \u2013 \uC77C\uC77C \uBAA9\uD45C \uC218\uBD84 \uC12D\uCDE8\uB7C9 \uCE21\uC815 \uB3C4\uAD6C",
      "intro": "WHO \uBC0F CDC \uC9C0\uCE68\uC5D0 \uAE30\uBC18\uD55C \uC2E4\uC2DC\uAC04 \uCC38\uACE0 \uACC4\uC0B0\uAE30\uC785\uB2C8\uB2E4. \uAC1C\uC778\uBCC4 \uC218\uCE58\uB97C \uCE21\uC815\uD558\uACE0 \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uD655\uC778\uD558\uC138\uC694.",
      "formulaTitle": "\uD45C\uC900 \uACC4\uC0B0 \uACF5\uC2DD",
      "formulaDesc": "\uAC80\uC99D\uB41C \uD45C\uC900 \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uACC4\uC0B0\uB429\uB2C8\uB2E4.",
      "formulaCode": "Water (L) = (W_kg \xD7 0.035) + (Exercise_hrs \xD7 0.75)",
      "tableTitle": "\uD45C\uC900 \uCC38\uC870 \uC9C4\uB2E8\uD45C",
      "tableRows": [
        {
          "col1": "\uBE44\uD65C\uB3D9 \uC131\uC778 (50 kg)",
          "col2": "1.75 Liters / day",
          "col3": "~250ml \uD45C\uC900 \uCEF5 7\uC794"
        },
        {
          "col1": "\uBE44\uD65C\uB3D9 \uC131\uC778 (70 kg)",
          "col2": "2.45 Liters / day",
          "col3": "~250ml \uD45C\uC900 \uCEF5 10\uC794"
        },
        {
          "col1": "\uD65C\uB3D9\uC801\uC778 \uC6B4\uB3D9\uC120\uC218 (70 kg)",
          "col2": "3.20 Liters / day",
          "col3": "~250ml \uD45C\uC900 \uCEF5 13\uC794"
        },
        {
          "col1": "\uACE0\uAC15\uB3C4 \uC6B4\uB3D9\uC120\uC218 (90 kg)",
          "col2": "4.15 Liters / day",
          "col3": "~250ml \uD45C\uC900 \uCEF5 17\uC794"
        }
      ],
      "faqs": [
        {
          "question": "\uC218\uBD84 \uC12D\uCDE8\uB7C9 \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uBCF8 \uACC4\uC0B0\uAE30\uB294 \uAC80\uC99D\uB41C \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uAC1C\uC778\uBCC4 \uC2E0\uCCB4 \uC9C0\uC218\uB97C \uC0B0\uCD9C\uD569\uB2C8\uB2E4. \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uBC14\uD0D5\uC73C\uB85C \uAD50\uC721\uC801 \uBD84\uC11D \uACB0\uACFC\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."
        },
        {
          "question": "How much water should I drink per day based on body weight? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "A common rule of thumb is to drink 35 ml of water per kilogram of body weight daily (or approximately 0.5 ounces per pound of body weight), plus additional fluids during workout sessions."
        },
        {
          "question": " calculate daily water intake using the weight formula? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "Multiply your weight in kilograms by 35 ml (or weight in lbs by 0.5 oz). For a 70 kg person: 70 \xD7 35 = 2,450 ml (2.45 Liters), which equals about 10 standard 250ml glasses of water."
        },
        {
          "question": "Does coffee, tea, or soda count toward my daily water intake? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "Yes, caffeinated beverages like tea and coffee contribute to fluid hydration. However, plain water remains the healthiest and most efficient source of cellular hydration."
        },
        {
          "question": "\xBFCu\xE1les son los primeros signos de deshidrataci\xF3n y sobrehidrataci\xF3n? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "Dehydration symptoms include dark yellow urine, fatigue, headaches, and dry mouth. Overhydration (hyponatremia) symptoms include clear urine accompanied by nausea and muscle cramps from diluted blood sodium."
        }
      ]
    },
    "hi": {
      "eyebrow": "\u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0938\u0902\u0926\u0930\u094D\u092D \u092E\u093E\u0928\u0915",
      "title": "\u092A\u093E\u0928\u0940 \u0915\u0947 \u0938\u0947\u0935\u0928 \u0915\u093E \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u2013 \u0926\u0948\u0928\u093F\u0915 \u091C\u0932 \u0906\u0935\u0936\u094D\u092F\u0915\u0924\u093E \u0915\u0940 \u0917\u0923\u0928\u093E",
      "intro": "\u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u0914\u0930 \u0938\u0940\u0921\u0940\u0938\u0940 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u092E\u093E\u0928\u0915\u094B\u0902 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0928\u093F\u0930\u094D\u092E\u093F\u0924 \u0938\u0902\u0926\u0930\u094D\u092D \u091F\u0942\u0932\u0964 \u0905\u092A\u0928\u0940 \u092E\u0947\u091F\u094D\u0930\u093F\u0915\u094D\u0938 \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902 \u0914\u0930 \u0938\u094D\u0925\u093E\u092A\u093F\u0924 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0938\u0940\u092E\u093E\u0913\u0902 \u0915\u0940 \u0938\u092E\u0940\u0915\u094D\u0937\u093E \u0915\u0930\u0947\u0902\u0964",
      "formulaTitle": "\u092E\u093E\u0928\u0915 \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0942\u0924\u094D\u0930",
      "formulaDesc": "\u092E\u093E\u0928\u0915 \u0938\u0924\u094D\u092F\u093E\u092A\u093F\u0924 \u0938\u092E\u0940\u0915\u0930\u0923\u094B\u0902 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0915\u0947 \u0917\u0923\u0928\u093E \u0915\u0940 \u0917\u0908\u0964",
      "formulaCode": "Water (L) = (W_kg \xD7 0.035) + (Exercise_hrs \xD7 0.75)",
      "tableTitle": "\u092E\u093E\u0928\u0915 \u0938\u0902\u0926\u0930\u094D\u092D \u0924\u093E\u0932\u093F\u0915\u093E",
      "tableRows": [
        {
          "col1": "\u0917\u0924\u093F\u0939\u0940\u0928 50 \u0915\u093F\u0917\u094D\u0930\u093E \u0935\u092F\u0938\u094D\u0915",
          "col2": "1.75 Liters / day",
          "col3": "~7 \u092E\u093E\u0928\u0915 250 \u092E\u093F\u0932\u0940 \u0917\u093F\u0932\u093E\u0938"
        },
        {
          "col1": "\u0917\u0924\u093F\u0939\u0940\u0928 70 \u0915\u093F\u0917\u094D\u0930\u093E \u0935\u092F\u0938\u094D\u0915",
          "col2": "2.45 Liters / day",
          "col3": "~10 \u092E\u093E\u0928\u0915 250 \u092E\u093F\u0932\u0940 \u0917\u093F\u0932\u093E\u0938"
        },
        {
          "col1": "\u0938\u0915\u094D\u0930\u093F\u092F 70 \u0915\u093F\u0917\u094D\u0930\u093E \u090F\u0925\u0932\u0940\u091F",
          "col2": "3.20 Liters / day",
          "col3": "~13 \u092E\u093E\u0928\u0915 250 \u092E\u093F\u0932\u0940 \u0917\u093F\u0932\u093E\u0938"
        },
        {
          "col1": "\u0915\u0920\u093F\u0928 \u0935\u094D\u092F\u093E\u092F\u093E\u092E 90 \u0915\u093F\u0917\u094D\u0930\u093E \u090F\u0925\u0932\u0940\u091F",
          "col2": "4.15 Liters / day",
          "col3": "~17 \u092E\u093E\u0928\u0915 250 \u092E\u093F\u0932\u0940 \u0917\u093F\u0932\u093E\u0938"
        }
      ],
      "faqs": [
        {
          "question": "\u092E\u0941\u091D\u0947 \u0930\u094B\u091C\u093E\u0928\u093E \u0915\u093F\u0924\u0928\u093E \u092A\u093E\u0928\u0940 \u092A\u0940\u0928\u093E \u091A\u093E\u0939\u093F\u090F?",
          "answer": "\u0938\u093E\u092E\u093E\u0928\u094D\u092F \u0928\u093F\u092F\u092E \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0906\u092A\u0915\u0947 \u0936\u0930\u0940\u0930 \u0915\u0947 \u0935\u091C\u0928 \u0915\u0947 \u092A\u094D\u0930\u0924\u093F \u0915\u093F\u0917\u094D\u0930\u093E \u092A\u0930 \u0932\u0917\u092D\u0917 35 \u092E\u093F\u0932\u0940\u0932\u0940\u091F\u0930 \u092A\u093E\u0928\u0940 \u0915\u0940 \u0906\u0935\u0936\u094D\u092F\u0915\u0924\u093E \u0939\u094B\u0924\u0940 \u0939\u0948\u0964"
        },
        {
          "question": "\u0935\u094D\u092F\u093E\u092F\u093E\u092E \u0915\u0930\u0928\u0947 \u092A\u0930 \u092A\u093E\u0928\u0940 \u0915\u093E \u0938\u0947\u0935\u0928 \u0915\u093F\u0924\u0928\u093E \u092C\u0922\u093C\u093E\u090F\u0902?",
          "answer": "\u092A\u094D\u0930\u0924\u094D\u092F\u0947\u0915 30 \u092E\u093F\u0928\u091F \u0915\u0947 \u0917\u0939\u0928 \u0935\u094D\u092F\u093E\u092F\u093E\u092E \u0915\u0947 \u0932\u093F\u090F \u0905\u0924\u093F\u0930\u093F\u0915\u094D\u0924 500 \u0938\u0947 750 \u092E\u093F\u0932\u0940\u0932\u0940\u091F\u0930 \u092A\u093E\u0928\u0940 \u092A\u0940\u0928\u0947 \u0915\u0940 \u0938\u093F\u092B\u093E\u0930\u093F\u0936 \u0915\u0940 \u091C\u093E\u0924\u0940 \u0939\u0948\u0964"
        },
        {
          "question": "\u0939\u0932\u094D\u0915\u0947 \u0928\u093F\u0930\u094D\u091C\u0932\u0940\u0915\u0930\u0923 (Dehydration) \u0915\u0947 \u0932\u0915\u094D\u0937\u0923 \u0915\u094D\u092F\u093E \u0939\u0948\u0902?",
          "answer": "\u0938\u093F\u0930\u0926\u0930\u094D\u0926, \u0925\u0915\u093E\u0928, \u0936\u0941\u0937\u094D\u0915 \u092E\u0941\u0901\u0939 \u0914\u0930 \u0917\u0939\u0930\u0947 \u0930\u0902\u0917 \u0915\u093E \u092A\u0947\u0936\u093E\u092C \u0928\u093F\u0930\u094D\u091C\u0932\u0940\u0915\u0930\u0923 \u0915\u0947 \u092A\u094D\u0930\u093E\u0925\u092E\u093F\u0915 \u0938\u0902\u0915\u0947\u0924 \u0939\u0948\u0902\u0964"
        },
        {
          "question": "\u0915\u094D\u092F\u093E \u091A\u093E\u092F, \u0915\u0949\u092B\u0940 \u0914\u0930 \u092B\u0932 \u0926\u0948\u0928\u093F\u0915 \u092A\u093E\u0928\u0940 \u0915\u0940 \u0917\u093F\u0928\u0924\u0940 \u092E\u0947\u0902 \u0906\u0924\u0947 \u0939\u0948\u0902?",
          "answer": "\u0939\u093E\u0901, \u092D\u094B\u091C\u0928 \u0914\u0930 \u0924\u0930\u0932 \u092A\u0926\u093E\u0930\u094D\u0925\u094B\u0902 \u0938\u0947 \u092E\u093F\u0932\u0928\u0947 \u0935\u093E\u0932\u093E \u092A\u093E\u0928\u0940 \u0915\u0941\u0932 \u0926\u0948\u0928\u093F\u0915 \u091C\u0932\u092F\u094B\u091C\u0928 (Hydration) \u092E\u0947\u0902 \u092F\u094B\u0917\u0926\u093E\u0928 \u0926\u0947\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u0915\u094D\u092F\u093E \u092C\u0939\u0941\u0924 \u0905\u0927\u093F\u0915 \u092A\u093E\u0928\u0940 \u092A\u0940\u0928\u093E \u0939\u093E\u0928\u093F\u0915\u093E\u0930\u0915 \u0939\u094B \u0938\u0915\u0924\u093E \u0939\u0948?",
          "answer": "\u0905\u0924\u094D\u092F\u0927\u093F\u0915 \u092A\u093E\u0928\u0940 \u092A\u0940\u0928\u0947 \u0938\u0947 \u0907\u0932\u0947\u0915\u094D\u091F\u094D\u0930\u094B\u0932\u093E\u0907\u091F \u0905\u0938\u0902\u0924\u0941\u0932\u0928 (Hyponatremia) \u0939\u094B \u0938\u0915\u0924\u093E \u0939\u0948, \u0907\u0938\u0932\u093F\u090F \u092A\u094D\u092F\u093E\u0938 \u0914\u0930 \u0917\u0924\u093F\u0935\u093F\u0927\u093F \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u092A\u0940\u090F\u0902\u0964"
        }
      ]
    }
  },
  "macro-calculator": {
    "en": {
      "eyebrow": "Macronutrient Reference",
      "title": "Macro Calculator \u2013 Estimated Daily Macro Split",
      "intro": "Calculate your estimated daily carb, protein, and fat targets in grams with our free Macro Calculator to explore an example macronutrient ratio for meal planning. There is no single optimal macronutrient ratio that applies universally.",
      "formulaTitle": "Macro Caloric Conversion Formulas",
      "formulaDesc": "Carbohydrate Grams = (Total Calories \xD7 Carb %) / 4 | Protein Grams = (Total Calories \xD7 Protein %) / 4 | Fat Grams = (Total Calories \xD7 Fat %) / 9",
      "formulaCode": "Carbs = (kcal \xD7 C%) / 4 | Protein = (kcal \xD7 P%) / 4 | Fat = (kcal \xD7 F%) / 9",
      "tableTitle": "Macronutrient Energy Density & Dieting Ratios",
      "tableRows": [
        {
          "col1": "Carbohydrates (4 kcal/g)",
          "col2": "Balanced: 40% | Low-Carb: 20% | High-Protein: 35%",
          "col3": "Example fuel source allocation"
        },
        {
          "col1": "Protein (4 kcal/g)",
          "col2": "Balanced: 30% | Low-Carb: 40% | High-Protein: 40%",
          "col3": "Example protein allocation"
        },
        {
          "col1": "Dietary Fat (9 kcal/g)",
          "col2": "Balanced: 30% | Low-Carb: 40% | High-Protein: 25%",
          "col3": "Example dietary fat allocation"
        }
      ],
      "faqs": [
        {
          "question": "What is a Macro Calculator?",
          "answer": "A Macro Calculator is a nutritional reference tool that divides your estimated daily caloric intake into example gram amounts of carbohydrates, protein, and dietary fats for meal planning."
        },
        {
          "question": "How to calculate macros in grams for weight loss or muscle gain?",
          "answer": "First calculate your estimated TDEE (Total Daily Energy Expenditure). Multiply total calories by your target macro percentages (e.g., 40% carbs, 30% protein, 30% fat). Divide carbohydrate and protein calories by 4 and fat calories by 9 to get estimated daily grams."
        },
        {
          "question": "What is IIFYM (If It Fits Your Macros)?",
          "answer": "IIFYM (If It Fits Your Macros) is a flexible dieting approach that tracks daily gram targets of protein, carbohydrates, and fats calculated by a macro tool."
        },
        {
          "question": "How can macronutrient ratios vary by goal?",
          "answer": "There is no single optimal macronutrient ratio for everyone. The calculator uses example splits for planning purposes."
        },
        {
          "question": "How many calories are in 1 gram of carbs, protein, and fat?",
          "answer": "Carbohydrates contain 4 calories per gram, Protein contain 4 calories per gram, and Dietary Fat contains 9 calories per gram."
        }
      ]
    },
    "es": {
      "eyebrow": "Est\xE1ndares de Referencia de Salud",
      "title": "Calculadora de Macronutrientes \u2013 Distribuci\xF3n Diaria de Macros \u2013 Gu\xEDa y Calculadora",
      "intro": "Herramienta de c\xE1lculo y referencia educativa dise\xF1ada seg\xFAn los est\xE1ndares de salud publicados de la OMS y CDC. Calcula tus m\xE9tricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "F\xF3rmula de Referencia Est\xE1ndar",
      "formulaDesc": "Calculado utilizando ecuaciones est\xE1ndar validadas.",
      "formulaCode": "Carbs = (kcal \xD7 C%) / 4 | Protein = (kcal \xD7 P%) / 4 | Fat = (kcal \xD7 F%) / 9",
      "tableTitle": "Tabla de Referencia Est\xE1ndar",
      "tableRows": [
        {
          "col1": "Carbohidratos (4 kcal/g)",
          "col2": "Balanced: 40% | Low-Carb: 20% | High-Protein: 35%",
          "col3": "Distribuci\xF3n de ejemplo de fuentes de energ\xEDa"
        },
        {
          "col1": "Prote\xEDnas (4 kcal/g)",
          "col2": "Balanced: 30% | Low-Carb: 40% | High-Protein: 40%",
          "col3": "Distribuci\xF3n de ejemplo de prote\xEDnas"
        },
        {
          "col1": "Grasas (9 kcal/g)",
          "col2": "Balanced: 30% | Low-Carb: 40% | High-Protein: 25%",
          "col3": "Distribuci\xF3n de ejemplo de grasas saludables"
        }
      ],
      "faqs": [
        {
          "question": "\xBFQu\xE9 son los macronutrientes y por qu\xE9 calcularlos?",
          "answer": "Los macronutrientes (prote\xEDnas, carbohidratos y grasas) proporcionan las calor\xEDas que alimentan tu cuerpo y determinan tu composici\xF3n corporal."
        },
        {
          "question": "\xBFC\xF3mo se distribuyen los gramos de prote\xEDnas, carbohidratos y grasas?",
          "answer": "Las prote\xEDnas y los carbohidratos aportan 4 kcal por gramo, mientras que las grasas aportan 9 kcal por gramo."
        },
        {
          "question": "\xBFCu\xE1l es la mejor proporci\xF3n de macros para perder grasa?",
          "answer": "Una distribuci\xF3n equilibrada para perder grasa suele ser 35% prote\xEDnas, 35% carbohidratos y 30% grasas."
        },
        {
          "question": "\xBFEs obligatorio contar macros todos los d\xEDas?",
          "answer": "No es estrictamente obligatorio, pero registrar tus macros durante unas semanas te ayuda a comprender mejor tus h\xE1bitos alimenticios."
        },
        {
          "question": "\xBFC\xF3mo adapto mis macros a una dieta baja en carbohidratos?",
          "answer": "Puedes ajustar los carbohidratos al 20% de tus calor\xEDas totales e incrementar las prote\xEDnas y grasas saludables adecuadamente."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de R\xE9f\xE9rence de Sant\xE9",
      "title": "Calculateur de Macronutriments \u2013 R\xE9partition des Macros \u2013 Outil de R\xE9f\xE9rence",
      "intro": "Outil de calcul et de r\xE9f\xE9rence \xE9ducatif con\xE7u selon les normes de sant\xE9 publi\xE9es de l'OMS et du CDC. Calculez vos m\xE9triques et consultez les plages de r\xE9f\xE9rence.",
      "formulaTitle": "Formule de R\xE9f\xE9rence Standard",
      "formulaDesc": "Calcul\xE9 \xE0 l'aide d'\xE9quations standards valid\xE9es.",
      "formulaCode": "Carbs = (kcal \xD7 C%) / 4 | Protein = (kcal \xD7 P%) / 4 | Fat = (kcal \xD7 F%) / 9",
      "tableTitle": "Tableau de R\xE9f\xE9rence Standard",
      "tableRows": [
        {
          "col1": "Glucides (4 kcal/g)",
          "col2": "Balanced: 40% | Low-Carb: 20% | High-Protein: 35%",
          "col3": "R\xE9partition indicative des sources d'\xE9nergie"
        },
        {
          "col1": "Prot\xE9ines (4 kcal/g)",
          "col2": "Balanced: 30% | Low-Carb: 40% | High-Protein: 40%",
          "col3": "R\xE9partition indicative des prot\xE9ines"
        },
        {
          "col1": "Lipides (9 kcal/g)",
          "col2": "Balanced: 30% | Low-Carb: 40% | High-Protein: 25%",
          "col3": "R\xE9partition indicative des lipides alimentaires"
        }
      ],
      "faqs": [
        {
          "question": "Que sont les macronutriments et pourquoi les calculer ?",
          "answer": "Les macronutriments (prot\xE9ines, glucides, lipides) fournissent l'\xE9nergie et fa\xE7onnent votre composition corporelle."
        },
        {
          "question": "Comment convertir les calories en grammes de macronutriments ?",
          "answer": "Les prot\xE9ines et glucides fournissent 4 kcal/g, tandis que les lipides fournissent 9 kcal/g."
        },
        {
          "question": "Quelle est la meilleure r\xE9partition pour la s\xE8che ?",
          "answer": "Une r\xE9partition courante pour la s\xE8che consiste en 35 % de prot\xE9ines, 35 % de glucides et 30 % de lipides."
        },
        {
          "question": "Doit-on suivre ses macros quotidiennement ?",
          "answer": "Le suivi des macros est un outil p\xE9dagogique puissant pour structurer ses apports selon ses objectifs sportifs."
        },
        {
          "question": "Peut-on adapter le calculateur pour un r\xE9gime low-carb ?",
          "answer": "Oui, vous pouvez r\xE9gler la part des glucides \xE0 20 % et augmenter proportionnellement les prot\xE9ines et lipides."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "Makron\xE4hrstoff-Rechner \u2013 T\xE4gliche Makroverteilung berechnen \u2013 Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den ver\xF6ffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und pr\xFCfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardm\xE4\xDFig validierten Gleichungen.",
      "formulaCode": "Carbs = (kcal \xD7 C%) / 4 | Protein = (kcal \xD7 P%) / 4 | Fat = (kcal \xD7 F%) / 9",
      "tableTitle": "Standard-Referenztabelle",
      "tableRows": [
        {
          "col1": "Kohlenhydrate (4 kcal/g)",
          "col2": "Balanced: 40% | Low-Carb: 20% | High-Protein: 35%",
          "col3": "Beispielhafte Verteilung von Energiequellen"
        },
        {
          "col1": "Proteine / Eiwei\xDF (4 kcal/g)",
          "col2": "Balanced: 30% | Low-Carb: 40% | High-Protein: 40%",
          "col3": "Beispielhafte Verteilung von Proteinen"
        },
        {
          "col1": "Fette (9 kcal/g)",
          "col2": "Balanced: 30% | Low-Carb: 40% | High-Protein: 25%",
          "col3": "Beispielhafte Verteilung von Nahrungsfetten"
        }
      ],
      "faqs": [
        {
          "question": "Was sind Makron\xE4hrstoffe?",
          "answer": "Makron\xE4hrstoffe (Proteine, Kohlenhydrate, Fette) liefern dem K\xF6rper Energie und Baustoffe f\xFCr Muskeln und Gewebe."
        },
        {
          "question": "Wie werden Makros in Gramm umgerechnet?",
          "answer": "Proteine und Kohlenhydrate enthalten jeweils 4 kcal pro Gramm, w\xE4hrend Fett 9 kcal pro Gramm liefert."
        },
        {
          "question": "Welche Makroverteilung eignet sich zum Fettabbau?",
          "answer": "Eine bew\xE4hrte Aufteilung f\xFCr den Fettabbau liegt oft bei 35 % Protein, 35 % Kohlenhydraten und 30 % Fett."
        },
        {
          "question": "Muss man Makros dauerhaft tracken?",
          "answer": "Ein tempor\xE4res Tracking hilft, ein besseres Gef\xFChl f\xFCr N\xE4hrstoffdichten und Portionsgr\xF6\xDFen zu entwickeln."
        },
        {
          "question": "Wie funktioniert die Verteilung bei einer Low-Carb Ern\xE4hrung?",
          "answer": "Bei Low-Carb wird der Kohlenhydratanteil auf ca. 20 % gesenkt und der Anteil an Protein und gesunden Fetten erh\xF6ht."
        }
      ]
    },
    "ko": {
      "eyebrow": "\uAC74\uAC15 \uCC38\uC870 \uD45C\uC900 \uC9C0\uCE68",
      "title": "\uB9E4\uD06C\uB85C \uC601\uC591\uC18C \uACC4\uC0B0\uAE30 \u2013 \uC77C\uC77C \uD0C4\uB2E8\uC9C0 \uC601\uC591\uC18C \uBE44\uC728 \uACC4\uC0B0",
      "intro": "WHO \uBC0F CDC \uC9C0\uCE68\uC5D0 \uAE30\uBC18\uD55C \uC2E4\uC2DC\uAC04 \uCC38\uACE0 \uACC4\uC0B0\uAE30\uC785\uB2C8\uB2E4. \uAC1C\uC778\uBCC4 \uC218\uCE58\uB97C \uCE21\uC815\uD558\uACE0 \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uD655\uC778\uD558\uC138\uC694.",
      "formulaTitle": "\uD45C\uC900 \uACC4\uC0B0 \uACF5\uC2DD",
      "formulaDesc": "\uAC80\uC99D\uB41C \uD45C\uC900 \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uACC4\uC0B0\uB429\uB2C8\uB2E4.",
      "formulaCode": "Carbs = (kcal \xD7 C%) / 4 | Protein = (kcal \xD7 P%) / 4 | Fat = (kcal \xD7 F%) / 9",
      "tableTitle": "\uD45C\uC900 \uCC38\uC870 \uC9C4\uB2E8\uD45C",
      "tableRows": [
        {
          "col1": "\uD0C4\uC218\uD654\uBB3C (4 kcal/g)",
          "col2": "Balanced: 40% | Low-Carb: 20% | High-Protein: 35%",
          "col3": "\uC5D0\uB108\uC9C0\uC6D0\uC758 \uC608\uC2DC \uBC30\uBD84\uC728"
        },
        {
          "col1": "\uB2E8\uBC31\uC9C8 (4 kcal/g)",
          "col2": "Balanced: 30% | Low-Carb: 40% | High-Protein: 40%",
          "col3": "\uB2E8\uBC31\uC9C8\uC758 \uC608\uC2DC \uBC30\uBD84\uC728"
        },
        {
          "col1": "\uC9C0\uBC29 (9 kcal/g)",
          "col2": "Balanced: 30% | Low-Carb: 40% | High-Protein: 25%",
          "col3": "\uC9C0\uBC29\uC758 \uC608\uC2DC \uBC30\uBD84\uC728"
        }
      ],
      "faqs": [
        {
          "question": "\uC601\uC591\uC18C(\uB9E4\uD06C\uB85C) \uACC4\uC0B0\uC774\uB780 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uD0C4\uC218\uD654\uBB3C, \uB2E8\uBC31\uC9C8, \uC9C0\uBC29\uC758 \uC77C\uC77C \uC12D\uCDE8 \uBE44\uC728\uC744 \uBAA9\uD45C \uCE7C\uB85C\uB9AC\uC5D0 \uB9DE\uAC8C \uBD84\uBC30\uD558\uC5EC \uC2E0\uCCB4 \uC870\uC131\uC744 \uAD00\uB9AC\uD558\uB294 \uBC29\uBC95\uC785\uB2C8\uB2E4."
        },
        {
          "question": "\uAC01 \uC601\uC591\uC18C\uC758 \uCE7C\uB85C\uB9AC \uD658\uC0B0 \uAE30\uC900\uC740 \uC5B4\uB5BB\uAC8C \uB418\uB098\uC694?",
          "answer": "\uB2E8\uBC31\uC9C8\uACFC \uD0C4\uC218\uD654\uBB3C\uC740 1g\uB2F9 4 kcal, \uC9C0\uBC29\uC740 1g\uB2F9 9 kcal\uC758 \uC5D0\uB108\uC9C0\uB97C \uACF5\uAE09\uD569\uB2C8\uB2E4."
        },
        {
          "question": "\uCCB4\uC9C0\uBC29 \uAC10\uB7C9\uC744 \uC704\uD55C \uAD8C\uC7A5 \uB9E4\uD06C\uB85C \uBE44\uC728\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uC77C\uBC18\uC801\uC778 \uCCB4\uC9C0\uBC29 \uAC10\uB7C9 \uBAA9\uD45C\uC5D0\uB294 \uB2E8\uBC31\uC9C8 35%, \uD0C4\uC218\uD654\uBB3C 35%, \uC9C0\uBC29 30%\uC758 \uBD84\uBC30 \uBE44\uC728\uC774 \uD6A8\uACFC\uC801\uC785\uB2C8\uB2E4."
        },
        {
          "question": "\uB9E4\uC77C \uB9E4\uD06C\uB85C\uB97C \uC815\uD655\uD788 \uAE30\uB85D\uD574\uC57C \uD558\uB098\uC694?",
          "answer": "\uB9E4\uC77C \uC2DD\uB2E8\uC744 \uAE30\uB85D\uD558\uBA74 \uBCF8\uC778\uC758 \uADE0\uD615 \uC7A1\uD78C \uC601\uC591 \uC12D\uCDE8 \uC2B5\uAD00\uC744 \uC774\uD574\uD558\uACE0 \uC720\uC9C0\uD558\uB294 \uB370 \uD070 \uB3C4\uC6C0\uC774 \uB429\uB2C8\uB2E4."
        },
        {
          "question": "\uC800\uD0C4\uC218\uD654\uBB3C \uC2DD\uB2E8\uC5D0\uB294 \uB9E4\uD06C\uB85C\uB97C \uC5B4\uB5BB\uAC8C \uC801\uC6A9\uD558\uB098\uC694?",
          "answer": "\uD0C4\uC218\uD654\uBB3C \uBE44\uC728\uC744 20% \uC218\uC900\uC73C\uB85C \uB0AE\uCD94\uACE0 \uB2E8\uBC31\uC9C8\uACFC \uAC74\uAC15\uD55C \uC9C0\uBC29 \uBE44\uC728\uC744 \uB298\uB824 \uC124\uC815\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
        }
      ]
    },
    "hi": {
      "eyebrow": "\u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0938\u0902\u0926\u0930\u094D\u092D \u092E\u093E\u0928\u0915",
      "title": "\u092E\u0948\u0915\u094D\u0930\u094B \u092A\u094B\u0937\u0915 \u0924\u0924\u094D\u0935 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u2013 \u0926\u0948\u0928\u093F\u0915 \u092E\u0948\u0915\u094D\u0930\u094B \u0905\u0928\u0941\u092A\u093E\u0924 \u0915\u0940 \u0917\u0923\u0928\u093E",
      "intro": "\u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u0914\u0930 \u0938\u0940\u0921\u0940\u0938\u0940 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u092E\u093E\u0928\u0915\u094B\u0902 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0928\u093F\u0930\u094D\u092E\u093F\u0924 \u0938\u0902\u0926\u0930\u094D\u092D \u091F\u0942\u0932\u0964 \u0905\u092A\u0928\u0940 \u092E\u0947\u091F\u094D\u0930\u093F\u0915\u094D\u0938 \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902 \u0914\u0930 \u0938\u094D\u0925\u093E\u092A\u093F\u0924 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0938\u0940\u092E\u093E\u0913\u0902 \u0915\u0940 \u0938\u092E\u0940\u0915\u094D\u0937\u093E \u0915\u0930\u0947\u0902\u0964",
      "formulaTitle": "\u092E\u093E\u0928\u0915 \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0942\u0924\u094D\u0930",
      "formulaDesc": "\u092E\u093E\u0928\u0915 \u0938\u0924\u094D\u092F\u093E\u092A\u093F\u0924 \u0938\u092E\u0940\u0915\u0930\u0923\u094B\u0902 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0915\u0947 \u0917\u0923\u0928\u093E \u0915\u0940 \u0917\u0908\u0964",
      "formulaCode": "Carbs = (kcal \xD7 C%) / 4 | Protein = (kcal \xD7 P%) / 4 | Fat = (kcal \xD7 F%) / 9",
      "tableTitle": "\u092E\u093E\u0928\u0915 \u0938\u0902\u0926\u0930\u094D\u092D \u0924\u093E\u0932\u093F\u0915\u093E",
      "tableRows": [
        {
          "col1": "\u0915\u093E\u0930\u094D\u092C\u094B\u0939\u093E\u0907\u0921\u094D\u0930\u0947\u091F (4 kcal/g)",
          "col2": "Balanced: 40% | Low-Carb: 20% | High-Protein: 35%",
          "col3": "\u090A\u0930\u094D\u091C\u093E \u0938\u094D\u0930\u094B\u0924\u094B\u0902 \u0915\u093E \u0909\u0926\u093E\u0939\u0930\u0923 \u0906\u0935\u0902\u091F\u0928"
        },
        {
          "col1": "\u092A\u094D\u0930\u094B\u091F\u0940\u0928 (4 kcal/g)",
          "col2": "Balanced: 30% | Low-Carb: 40% | High-Protein: 40%",
          "col3": "\u092A\u094D\u0930\u094B\u091F\u0940\u0928 \u0915\u093E \u0909\u0926\u093E\u0939\u0930\u0923 \u0906\u0935\u0902\u091F\u0928"
        },
        {
          "col1": "\u0935\u0938\u093E (9 kcal/g)",
          "col2": "Balanced: 30% | Low-Carb: 40% | High-Protein: 25%",
          "col3": "\u0906\u0939\u093E\u0930\u0940\u092F \u0935\u0938\u093E \u0915\u093E \u0909\u0926\u093E\u0939\u0930\u0923 \u0906\u0935\u0902\u091F\u0928"
        }
      ],
      "faqs": [
        {
          "question": "\u092E\u0948\u0915\u094D\u0930\u094B\u0928\u094D\u092F\u0942\u091F\u094D\u0930\u093F\u090F\u0902\u091F\u094D\u0938 (Macros) \u0915\u094D\u092F\u093E \u0939\u0948\u0902 \u0914\u0930 \u0907\u0928\u094D\u0939\u0947\u0902 \u0915\u094D\u092F\u094B\u0902 \u0917\u093F\u0928\u0947\u0902?",
          "answer": "\u092E\u0948\u0915\u094D\u0930\u094B\u0928\u094D\u092F\u0942\u091F\u094D\u0930\u093F\u090F\u0902\u091F\u094D\u0938 (\u092A\u094D\u0930\u094B\u091F\u0940\u0928, \u0915\u093E\u0930\u094D\u092C\u094B\u0939\u093E\u0907\u0921\u094D\u0930\u0947\u091F \u0914\u0930 \u0935\u0938\u093E) \u0936\u0930\u0940\u0930 \u0915\u094B \u090A\u0930\u094D\u091C\u093E \u092A\u094D\u0930\u0926\u093E\u0928 \u0915\u0930\u0924\u0947 \u0939\u0948\u0902 \u0914\u0930 \u0906\u092A\u0915\u0940 \u0936\u093E\u0930\u0940\u0930\u093F\u0915 \u0938\u0902\u0930\u091A\u0928\u093E \u0915\u094B \u0928\u093F\u0930\u094D\u0927\u093E\u0930\u093F\u0924 \u0915\u0930\u0924\u0947 \u0939\u0948\u0902\u0964"
        },
        {
          "question": "\u0915\u0948\u0932\u094B\u0930\u0940 \u0938\u0947 \u0917\u094D\u0930\u093E\u092E \u092E\u0947\u0902 \u0930\u0942\u092A\u093E\u0902\u0924\u0930\u0923 \u0915\u0948\u0938\u0947 \u0939\u094B\u0924\u093E \u0939\u0948?",
          "answer": "\u092A\u094D\u0930\u094B\u091F\u0940\u0928 \u0914\u0930 \u0915\u093E\u0930\u094D\u092C\u094B\u0939\u093E\u0907\u0921\u094D\u0930\u0947\u091F \u092A\u094D\u0930\u0924\u093F \u0917\u094D\u0930\u093E\u092E 4 kcal \u092A\u094D\u0930\u0926\u093E\u0928 \u0915\u0930\u0924\u0947 \u0939\u0948\u0902, \u091C\u092C\u0915\u093F \u0935\u0938\u093E \u092A\u094D\u0930\u0924\u093F \u0917\u094D\u0930\u093E\u092E 9 kcal \u092A\u094D\u0930\u0926\u093E\u0928 \u0915\u0930\u0924\u0940 \u0939\u0948\u0964"
        },
        {
          "question": "\u0935\u0938\u093E \u0918\u091F\u093E\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0938\u092C\u0938\u0947 \u0905\u091A\u094D\u091B\u093E \u092E\u0948\u0915\u094D\u0930\u094B \u0905\u0928\u0941\u092A\u093E\u0924 \u0915\u094D\u092F\u093E \u0939\u0948?",
          "answer": "\u0935\u091C\u0928 \u0914\u0930 \u0935\u0938\u093E \u0918\u091F\u093E\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F 35% \u092A\u094D\u0930\u094B\u091F\u0940\u0928, 35% \u0915\u093E\u0930\u094D\u092C\u094B\u0939\u093E\u0907\u0921\u094D\u0930\u0947\u091F \u0914\u0930 30% \u0935\u0938\u093E \u0915\u093E \u0905\u0928\u0941\u092A\u093E\u0924 \u0915\u093E\u092B\u0940 \u0932\u094B\u0915\u092A\u094D\u0930\u093F\u092F \u0939\u0948\u0964"
        },
        {
          "question": "\u0915\u094D\u092F\u093E \u0930\u094B\u091C\u093C\u093E\u0928\u093E \u092E\u0948\u0915\u094D\u0930\u094B\u091C\u093C \u091F\u094D\u0930\u0948\u0915 \u0915\u0930\u0928\u093E \u091C\u093C\u0930\u0942\u0930\u0940 \u0939\u0948?",
          "answer": "\u0930\u094B\u091C\u093C\u093E\u0928\u093E \u092E\u0948\u0915\u094D\u0930\u094B\u091C\u093C \u091F\u094D\u0930\u0948\u0915 \u0915\u0930\u0928\u0947 \u0938\u0947 \u0906\u092A\u0915\u094B \u0905\u092A\u0928\u0940 \u0906\u0939\u093E\u0930 \u0938\u0902\u092C\u0902\u0927\u0940 \u0906\u0926\u0924\u094B\u0902 \u0914\u0930 \u092A\u094B\u0937\u0923 \u0938\u0902\u0924\u0941\u0932\u0928 \u0915\u093E \u0938\u0939\u0940 \u0905\u0902\u0926\u093E\u091C\u093E \u092E\u093F\u0932\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u0915\u092E \u0915\u093E\u0930\u094D\u092C (Low-Carb) \u0921\u093E\u0907\u091F \u0915\u0947 \u0932\u093F\u090F \u092E\u0948\u0915\u094D\u0930\u094B\u091C\u093C \u0915\u0948\u0938\u0947 \u0938\u0947\u091F \u0915\u0930\u0947\u0902?",
          "answer": "\u0906\u092A \u0915\u093E\u0930\u094D\u092C\u094B\u0939\u093E\u0907\u0921\u094D\u0930\u0947\u091F \u0915\u094B 20% \u0924\u0915 \u0915\u092E \u0915\u0930 \u0938\u0915\u0924\u0947 \u0939\u0948\u0902 \u0914\u0930 \u092A\u094D\u0930\u094B\u091F\u0940\u0928 \u0924\u0925\u093E \u0938\u094D\u0935\u0938\u094D\u0925 \u0935\u0938\u093E \u0915\u0947 \u0905\u0928\u0941\u092A\u093E\u0924 \u0915\u094B \u092C\u0922\u093C\u093E \u0938\u0915\u0924\u0947 \u0939\u0948\u0902\u0964"
        }
      ]
    }
  },
  "waist-to-hip-ratio-calculator": {
    "en": {
      "eyebrow": "WHR Reference Standard",
      "title": "Waist to Hip Ratio Calculator & WHR Reference Tool",
      "intro": "Calculate your waist to hip ratio with our free Waist to Hip Ratio Calculator. Aligned with World Health Organization (WHO) reference guidelines, it provides context about body-fat distribution. WHR is an anthropometric ratio. It does not directly measure visceral fat or diagnose cardiovascular disease.",
      "formulaTitle": "WHO Waist to Hip Ratio (WHR) Formula Equation",
      "formulaDesc": "WHR = Waist Circumference (at narrowest point or navel) / Hip Circumference (at widest point of buttocks)",
      "formulaCode": "WHR = Waist / Hip",
      "tableTitle": "WHO Waist to Hip Ratio (WHR) Reference Categories & Chart",
      "tableRows": [
        {
          "col1": "Lower Reference Category",
          "col2": "Men: < 0.90 | Women: < 0.80",
          "col3": "Subcutaneous fat distribution reference window"
        },
        {
          "col1": "Moderate Reference Category",
          "col2": "Men: 0.90 \u2013 0.99 | Women: 0.80 \u2013 0.84",
          "col3": "Moderate abdominal central fat reference window"
        },
        {
          "col1": "Higher Reference Category",
          "col2": "Men: \u2265 1.00 | Women: \u2265 0.85",
          "col3": "Higher central fat distribution reference window; additional screening context"
        }
      ],
      "faqs": [
        {
          "question": "What is the Waist to Hip Ratio Calculator?",
          "answer": "The Waist to Hip Ratio Calculator is an anthropometric screening tool that compares your waist measurement to your hip measurement to evaluate body fat distribution and provide context on central fat placement."
        },
        {
          "question": "How to calculate waist to hip ratio with the WHR formula?",
          "answer": "Divide your waist circumference in inches or cm by your hip circumference in the same units. For example, a 32-inch waist divided by a 40-inch hip equals a Waist to Hip Ratio of 0.80."
        },
        {
          "question": "What is a healthy waist to hip ratio for men and women according to WHO?",
          "answer": "According to World Health Organization (WHO) reference guidelines, a ratio below 0.90 for men and below 0.80 for women is standard for lower relative abdominal fat."
        },
        {
          "question": "Why is waist to hip ratio a useful indicator alongside BMI?",
          "answer": "While BMI measures total body mass relative to height, WHR is an anthropometric ratio that provides context about body-fat distribution; it does not directly measure visceral fat or diagnose cardiovascular disease."
        },
        {
          "question": "How to accurately measure waist and hip circumference for the WHR calculator?",
          "answer": "Stand upright and exhale gently. Wrap a flexible tape measure around your waist horizontally at the narrowest point (or at navel level). Measure your hips at the maximum protrusion of your buttocks."
        }
      ]
    },
    "es": {
      "eyebrow": "Est\xE1ndares de Referencia de Salud",
      "title": "Calculadora de Relaci\xF3n Cintura-Cadera \u2013 \xCDndice WHR de Salud \u2013 Gu\xEDa y Calculadora",
      "intro": "Herramienta de c\xE1lculo y referencia educativa dise\xF1ada seg\xFAn los est\xE1ndares de salud publicados de la OMS y CDC. Calcula tus m\xE9tricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "F\xF3rmula de Referencia Est\xE1ndar",
      "formulaDesc": "Calculado utilizando ecuaciones est\xE1ndar validadas.",
      "formulaCode": "WHR = Waist / Hip",
      "tableTitle": "Tabla de Referencia Est\xE1ndar",
      "tableRows": [
        {
          "col1": "Categor\xEDa de Riesgo Bajo",
          "col2": "Men: < 0.90 | Women: < 0.80",
          "col3": "Referencia de distribuci\xF3n de grasa subcut\xE1nea"
        },
        {
          "col1": "Categor\xEDa de Riesgo Moderado",
          "col2": "Men: 0.90 \u2013 0.99 | Women: 0.80 \u2013 0.84",
          "col3": "Referencia moderada de grasa abdominal central"
        },
        {
          "col1": "Categor\xEDa de Riesgo Alto",
          "col2": "Men: \u2265 1.00 | Women: \u2265 0.85",
          "col3": "Mayor distribuci\xF3n de grasa central; contexto adicional"
        }
      ],
      "faqs": [
        {
          "question": "\xBFC\xF3mo funciona la calculadora de \xEDndice cintura-cadera (ICC) y qu\xE9 mide?",
          "answer": "Esta calculadora eval\xFAa tus datos personales utilizando ecuaciones validadas. Proporciona una estimaci\xF3n educativa para ayudarte a comprender tu estado de salud y referencias est\xE1ndar."
        },
        {
          "question": "C\xF3mo calculate waist to hip ratio with the WHR formula?",
          "answer": "Divide your waist circumference in inches or cm by your hip circumference in the same units. For example, a 32-inch waist divided by a 40-inch hip equals a Waist to Hip Ratio of 0.80."
        },
        {
          "question": "\xBFQu\xE9 es a healthy waist to hip ratio for men and women according to WHO?",
          "answer": "According to World Health Organization (WHO) reference guidelines, a ratio below 0.90 for men and below 0.80 for women is standard for lower relative abdominal fat."
        },
        {
          "question": "Por qu\xE9 es waist to hip ratio a useful indicator alongside BMI?",
          "answer": "While BMI measures total body mass relative to height, WHR is an anthropometric ratio that provides context about body-fat distribution; it does not directly measure visceral fat or diagnose cardiovascular disease."
        },
        {
          "question": "\xBFC\xF3mo medir con precisi\xF3n la circunferencia de cintura y cadera para la calculadora de \xEDndice cintura-cadera?",
          "answer": "Stand upright and exhale gently. Wrap a flexible tape measure around your waist horizontally at the narrowest point (or at navel level). Measure your hips at the maximum protrusion of your buttocks."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de R\xE9f\xE9rence de Sant\xE9",
      "title": "Calculateur Ratio Taille-Hanche \u2013 Indice WHR et R\xE9f\xE9rences \u2013 Outil de R\xE9f\xE9rence",
      "intro": "Outil de calcul et de r\xE9f\xE9rence \xE9ducatif con\xE7u selon les normes de sant\xE9 publi\xE9es de l'OMS et du CDC. Calculez vos m\xE9triques et consultez les plages de r\xE9f\xE9rence.",
      "formulaTitle": "Formule de R\xE9f\xE9rence Standard",
      "formulaDesc": "Calcul\xE9 \xE0 l'aide d'\xE9quations standards valid\xE9es.",
      "formulaCode": "WHR = Waist / Hip",
      "tableTitle": "Tableau de R\xE9f\xE9rence Standard",
      "tableRows": [
        {
          "col1": "Cat\xE9gorie Risque Faible",
          "col2": "Men: < 0.90 | Women: < 0.80",
          "col3": "Fen\xEAtre de distribution de graisse sous-cutan\xE9e"
        },
        {
          "col1": "Cat\xE9gorie Risque Mod\xE9r\xE9",
          "col2": "Men: 0.90 \u2013 0.99 | Women: 0.80 \u2013 0.84",
          "col3": "Fen\xEAtre mod\xE9r\xE9e de graisse abdominale centrale"
        },
        {
          "col1": "Cat\xE9gorie Risque \xC9lev\xE9",
          "col2": "Men: \u2265 1.00 | Women: \u2265 0.85",
          "col3": "Distribution plus \xE9lev\xE9e de graisse centrale ; contexte additionnel"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de rapport taille-hanche (RTH) et que mesure-t-il ?",
          "answer": "Ce calculateur \xE9value vos donn\xE9es personnelles \xE0 l'aide d'\xE9quations valid\xE9es. Il fournit une estimation \xE9ducative pour vous aider \xE0 comprendre vos m\xE9triques et r\xE9f\xE9rences standards."
        },
        {
          "question": "Comment calculate waist to hip ratio with the WHR formula?",
          "answer": "Divide your waist circumference in inches or cm by your hip circumference in the same units. For example, a 32-inch waist divided by a 40-inch hip equals a Waist to Hip Ratio of 0.80."
        },
        {
          "question": "Qu'est-ce que a healthy waist to hip ratio for men and women according to WHO?",
          "answer": "According to World Health Organization (WHO) reference guidelines, a ratio below 0.90 for men and below 0.80 for women is standard for lower relative abdominal fat."
        },
        {
          "question": "Pourquoi waist to hip ratio a useful indicator alongside BMI?",
          "answer": "While BMI measures total body mass relative to height, WHR is an anthropometric ratio that provides context about body-fat distribution; it does not directly measure visceral fat or diagnose cardiovascular disease."
        },
        {
          "question": "Comment mesurer avec pr\xE9cision le tour de taille et de hanches pour le calculateur RTH ?",
          "answer": "Stand upright and exhale gently. Wrap a flexible tape measure around your waist horizontally at the narrowest point (or at navel level). Measure your hips at the maximum protrusion of your buttocks."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "Taille-H\xFCft-Verh\xE4ltnis Rechner \u2013 WHR-Wert & Referenztabelle \u2013 Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den ver\xF6ffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und pr\xFCfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardm\xE4\xDFig validierten Gleichungen.",
      "formulaCode": "WHR = Waist / Hip",
      "tableTitle": "Standard-Referenztabelle",
      "tableRows": [
        {
          "col1": "Niedrige Risiko-Kategorie",
          "col2": "Men: < 0.90 | Women: < 0.80",
          "col3": "Referenzbereich f\xFCr subkutane Fettverteilung"
        },
        {
          "col1": "Moderate Risiko-Kategorie",
          "col2": "Men: 0.90 \u2013 0.99 | Women: 0.80 \u2013 0.84",
          "col3": "Moderater Referenzbereich f\xFCr zentrales Bauchfett"
        },
        {
          "col1": "H\xF6here Risiko-Kategorie",
          "col2": "Men: \u2265 1.00 | Women: \u2265 0.85",
          "col3": "H\xF6here zentrale Fettverteilung; zus\xE4tzlicher Screening-Kontext"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der Taille-H\xFCft-Verh\xE4ltnis-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre pers\xF6nlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        },
        {
          "question": "Wie man calculate waist to hip ratio with the WHR formula?",
          "answer": "Divide your waist circumference in inches or cm by your hip circumference in the same units. For example, a 32-inch waist divided by a 40-inch hip equals a Waist to Hip Ratio of 0.80."
        },
        {
          "question": "Was ist a healthy waist to hip ratio for men and women according to WHO?",
          "answer": "According to World Health Organization (WHO) reference guidelines, a ratio below 0.90 for men and below 0.80 for women is standard for lower relative abdominal fat."
        },
        {
          "question": "Warum ist waist to hip ratio a useful indicator alongside BMI?",
          "answer": "While BMI measures total body mass relative to height, WHR is an anthropometric ratio that provides context about body-fat distribution; it does not directly measure visceral fat or diagnose cardiovascular disease."
        },
        {
          "question": "Wie misst man das Taille-H\xFCft-Verh\xE4ltnis (WHR) genau?",
          "answer": "Stand upright and exhale gently. Wrap a flexible tape measure around your waist horizontally at the narrowest point (or at navel level). Measure your hips at the maximum protrusion of your buttocks."
        }
      ]
    },
    "ko": {
      "eyebrow": "\uAC74\uAC15 \uCC38\uC870 \uD45C\uC900 \uC9C0\uCE68",
      "title": "\uD5C8\uB9AC \uC5C9\uB369\uC774 \uBE44\uC728 \uACC4\uC0B0\uAE30 \u2013 WHR \uC218\uCE58 \uBC0F \uAC74\uAC15 \uCC38\uC870 \uB3C4\uAD6C",
      "intro": "WHO \uBC0F CDC \uC9C0\uCE68\uC5D0 \uAE30\uBC18\uD55C \uC2E4\uC2DC\uAC04 \uCC38\uACE0 \uACC4\uC0B0\uAE30\uC785\uB2C8\uB2E4. \uAC1C\uC778\uBCC4 \uC218\uCE58\uB97C \uCE21\uC815\uD558\uACE0 \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uD655\uC778\uD558\uC138\uC694.",
      "formulaTitle": "\uD45C\uC900 \uACC4\uC0B0 \uACF5\uC2DD",
      "formulaDesc": "\uAC80\uC99D\uB41C \uD45C\uC900 \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uACC4\uC0B0\uB429\uB2C8\uB2E4.",
      "formulaCode": "WHR = Waist / Hip",
      "tableTitle": "\uD45C\uC900 \uCC38\uC870 \uC9C4\uB2E8\uD45C",
      "tableRows": [
        {
          "col1": "\uB0AE\uC740 \uC704\uD5D8\uAD70",
          "col2": "Men: < 0.90 | Women: < 0.80",
          "col3": "\uD53C\uD558\uC9C0\uBC29 \uBD84\uD3EC \uCC38\uACE0 \uAE30\uC900"
        },
        {
          "col1": "\uC911\uAC04 \uC704\uD5D8\uAD70",
          "col2": "Men: 0.90 \u2013 0.99 | Women: 0.80 \u2013 0.84",
          "col3": "\uC911\uB4F1\uB3C4 \uBCF5\uBD80 \uB0B4\uC7A5\uC9C0\uBC29 \uCC38\uACE0 \uAE30\uC900"
        },
        {
          "col1": "\uB192\uC740 \uC704\uD5D8\uAD70",
          "col2": "Men: \u2265 1.00 | Women: \u2265 0.85",
          "col3": "\uB192\uC740 \uC911\uC2EC\uBD80 \uC9C0\uBC29 \uBD84\uD3EC \uAE30\uC900; \uCD94\uAC00 \uAC80\uD1A0 \uD544\uC694"
        }
      ],
      "faqs": [
        {
          "question": "\uD5C8\uB9AC \uB458\uB808 \uBE44\uC728 \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uBCF8 \uACC4\uC0B0\uAE30\uB294 \uAC80\uC99D\uB41C \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uAC1C\uC778\uBCC4 \uC2E0\uCCB4 \uC9C0\uC218\uB97C \uC0B0\uCD9C\uD569\uB2C8\uB2E4. \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uBC14\uD0D5\uC73C\uB85C \uAD50\uC721\uC801 \uBD84\uC11D \uACB0\uACFC\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."
        },
        {
          "question": " calculate waist to hip ratio with the WHR formula? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "Divide your waist circumference in inches or cm by your hip circumference in the same units. For example, a 32-inch waist divided by a 40-inch hip equals a Waist to Hip Ratio of 0.80."
        },
        {
          "question": " a healthy waist to hip ratio for men and women according to WHO? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "According to World Health Organization (WHO) reference guidelines, a ratio below 0.90 for men and below 0.80 for women is standard for lower relative abdominal fat."
        },
        {
          "question": "Why is waist to hip ratio a useful indicator alongside BMI? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "While BMI measures total body mass relative to height, WHR is an anthropometric ratio that provides context about body-fat distribution; it does not directly measure visceral fat or diagnose cardiovascular disease."
        },
        {
          "question": "\uD5C8\uB9AC-\uB458\uB808 \uBE44\uC728(WHR)\uC744 \uC815\uD655\uD558\uAC8C \uCE21\uC815\uD558\uB294 \uBC29\uBC95\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "Stand upright and exhale gently. Wrap a flexible tape measure around your waist horizontally at the narrowest point (or at navel level). Measure your hips at the maximum protrusion of your buttocks."
        }
      ]
    },
    "hi": {
      "eyebrow": "\u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0938\u0902\u0926\u0930\u094D\u092D \u092E\u093E\u0928\u0915",
      "title": "\u0915\u092E\u0930 \u0938\u0947 \u0915\u0942\u0932\u094D\u0939\u0947 \u0915\u0947 \u0905\u0928\u0941\u092A\u093E\u0924 \u0915\u093E \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u2013 WHR \u0938\u0902\u0926\u0930\u094D\u092D \u091F\u0942\u0932",
      "intro": "\u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u0914\u0930 \u0938\u0940\u0921\u0940\u0938\u0940 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u092E\u093E\u0928\u0915\u094B\u0902 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0928\u093F\u0930\u094D\u092E\u093F\u0924 \u0938\u0902\u0926\u0930\u094D\u092D \u091F\u0942\u0932\u0964 \u0905\u092A\u0928\u0940 \u092E\u0947\u091F\u094D\u0930\u093F\u0915\u094D\u0938 \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902 \u0914\u0930 \u0938\u094D\u0925\u093E\u092A\u093F\u0924 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0938\u0940\u092E\u093E\u0913\u0902 \u0915\u0940 \u0938\u092E\u0940\u0915\u094D\u0937\u093E \u0915\u0930\u0947\u0902\u0964",
      "formulaTitle": "\u092E\u093E\u0928\u0915 \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0942\u0924\u094D\u0930",
      "formulaDesc": "\u092E\u093E\u0928\u0915 \u0938\u0924\u094D\u092F\u093E\u092A\u093F\u0924 \u0938\u092E\u0940\u0915\u0930\u0923\u094B\u0902 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0915\u0947 \u0917\u0923\u0928\u093E \u0915\u0940 \u0917\u0908\u0964",
      "formulaCode": "WHR = Waist / Hip",
      "tableTitle": "\u092E\u093E\u0928\u0915 \u0938\u0902\u0926\u0930\u094D\u092D \u0924\u093E\u0932\u093F\u0915\u093E",
      "tableRows": [
        {
          "col1": "\u0928\u093F\u092E\u094D\u0928 \u091C\u094B\u0916\u093F\u092E \u0936\u094D\u0930\u0947\u0923\u0940",
          "col2": "Men: < 0.90 | Women: < 0.80",
          "col3": "\u0909\u092A\u091A\u0930\u094D\u092E \u0935\u0938\u093E \u0935\u093F\u0924\u0930\u0923 \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E"
        },
        {
          "col1": "\u092E\u0927\u094D\u092F\u092E \u091C\u094B\u0916\u093F\u092E \u0936\u094D\u0930\u0947\u0923\u0940",
          "col2": "Men: 0.90 \u2013 0.99 | Women: 0.80 \u2013 0.84",
          "col3": "\u092E\u0927\u094D\u092F\u092E \u092A\u0947\u091F \u0915\u0940 \u0935\u0938\u093E \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E"
        },
        {
          "col1": "\u0909\u091A\u094D\u091A \u091C\u094B\u0916\u093F\u092E \u0936\u094D\u0930\u0947\u0923\u0940",
          "col2": "Men: \u2265 1.00 | Women: \u2265 0.85",
          "col3": "\u0909\u091A\u094D\u091A \u0915\u0947\u0902\u0926\u094D\u0930\u0940\u092F \u0935\u0938\u093E \u0935\u093F\u0924\u0930\u0923 \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E"
        }
      ],
      "faqs": [
        {
          "question": "\u0915\u092E\u0930 \u0938\u0947 \u0915\u0942\u0932\u094D\u0939\u0947 \u0915\u093E \u0905\u0928\u0941\u092A\u093E\u0924 (WHR) \u0915\u094D\u092F\u093E \u092E\u093E\u092A\u0924\u093E \u0939\u0948?",
          "answer": "WHR \u0915\u092E\u0930 \u0915\u0947 \u0906\u0915\u093E\u0930 \u0915\u094B \u0915\u0942\u0932\u094D\u0939\u0947 \u0915\u0947 \u0906\u0915\u093E\u0930 \u0938\u0947 \u0935\u093F\u092D\u093E\u091C\u093F\u0924 \u0915\u0930\u0915\u0947 \u0936\u0930\u0940\u0930 \u092E\u0947\u0902 \u0935\u0938\u093E \u0915\u0947 \u0935\u093F\u0924\u0930\u0923 \u0914\u0930 \u0935\u093F\u0938\u0930\u0932 \u0935\u0938\u093E \u0915\u093E \u092E\u0942\u0932\u094D\u092F\u093E\u0902\u0915\u0928 \u0915\u0930\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u092A\u0941\u0930\u0941\u0937\u094B\u0902 \u0914\u0930 \u092E\u0939\u093F\u0932\u093E\u0913\u0902 \u0915\u0947 \u0932\u093F\u090F \u091C\u094B\u0916\u093F\u092E \u092D\u0930\u093E WHR \u0915\u094D\u092F\u093E \u0939\u0948?",
          "answer": "\u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u092A\u0941\u0930\u0941\u0937\u094B\u0902 \u092E\u0947\u0902 WHR \u2265 1.0 \u0914\u0930 \u092E\u0939\u093F\u0932\u093E\u0913\u0902 \u092E\u0947\u0902 WHR \u2265 0.85 \u0909\u091A\u094D\u091A \u091A\u092F\u093E\u092A\u091A\u092F \u091C\u094B\u0916\u093F\u092E \u0915\u094B \u0926\u0930\u094D\u0936\u093E\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u090F\u092A\u094D\u092A\u0932 \u0914\u0930 \u092A\u093F\u092F\u0930 \u092C\u0949\u0921\u0940 \u0936\u0947\u092A \u092E\u0947\u0902 \u0915\u094D\u092F\u093E \u0905\u0902\u0924\u0930 \u0939\u0948?",
          "answer": "\u090F\u092A\u094D\u092A\u0932 \u0936\u0947\u092A \u092E\u0947\u0902 \u0915\u092E\u0930 \u092A\u0930 \u0905\u0927\u093F\u0915 \u0935\u0938\u093E \u0939\u094B\u0924\u0940 \u0939\u0948 (\u0909\u091A\u094D\u091A \u091C\u094B\u0916\u093F\u092E), \u091C\u092C\u0915\u093F \u092A\u093F\u092F\u0930 \u0936\u0947\u092A \u092E\u0947\u0902 \u0915\u0942\u0932\u094D\u0939\u094B\u0902 \u092A\u0930 \u0935\u0938\u093E \u0939\u094B\u0924\u0940 \u0939\u0948 (\u0915\u092E \u091C\u094B\u0916\u093F\u092E)\u0964"
        },
        {
          "question": "\u0915\u092E\u0930 \u0914\u0930 \u0915\u0942\u0932\u094D\u0939\u0947 \u0915\u0940 \u0938\u0939\u0940 \u092E\u093E\u092A \u0915\u0948\u0938\u0947 \u0932\u0947\u0902?",
          "answer": "\u0915\u092E\u0930 \u0915\u094B \u0928\u093E\u092D\u093F \u0915\u0947 \u0920\u0940\u0915 \u090A\u092A\u0930 \u0914\u0930 \u0915\u0942\u0932\u094D\u0939\u0947 \u0915\u094B \u0938\u092C\u0938\u0947 \u091A\u094C\u0921\u093C\u0947 \u0939\u093F\u0938\u094D\u0938\u0947 \u092A\u0930 \u091F\u0947\u092A \u0915\u094B \u0938\u0940\u0927\u093E \u0930\u0916\u0915\u0930 \u092E\u093E\u092A\u0947\u0902\u0964"
        },
        {
          "question": "WHR \u092C\u0940\u090F\u092E\u0906\u0908 \u0938\u0947 \u092C\u0947\u0939\u0924\u0930 \u0915\u094D\u092F\u094B\u0902 \u092E\u093E\u0928\u093E \u091C\u093E\u0924\u093E \u0939\u0948?",
          "answer": "WHR \u092A\u0947\u091F \u0915\u0940 \u0906\u0902\u0924\u0930\u093F\u0915 \u0916\u0924\u0930\u0928\u093E\u0915 \u0935\u0938\u093E (Visceral Fat) \u0915\u094B \u0905\u0932\u0917 \u0938\u0947 \u092A\u0939\u091A\u093E\u0928\u0924\u093E \u0939\u0948, \u091C\u094B \u092C\u0940\u090F\u092E\u0906\u0908 \u0928\u0939\u0940\u0902 \u0915\u0930 \u092A\u093E\u0924\u093E\u0964"
        }
      ]
    }
  },
  "body-surface-area-calculator": {
    "en": {
      "eyebrow": "Body Surface Area Reference",
      "title": "Body Surface Area Calculator \u2014 Mosteller & Du Bois Reference Equations",
      "intro": "BSA is an estimated body-surface-area value calculated from height and weight. Some medical research protocols use BSA as one input, but this calculator does not provide medication doses or treatment recommendations.",
      "formulaTitle": "Mosteller & Du Bois BSA Equations",
      "formulaDesc": "Mosteller BSA (m\xB2) = \u221A [ Height (cm) \xD7 Weight (kg) / 3600 ] | Du Bois BSA (m\xB2) = 0.007184 \xD7 Height (cm)^0.725 \xD7 Weight (kg)^0.425",
      "formulaCode": "BSA (m\xB2) = \u221A [ (Height cm \xD7 Weight kg) / 3600 ]",
      "tableTitle": "Body Surface Area (m\xB2) Adult & Population Reference Ranges",
      "tableRows": [
        {
          "col1": "Infants (0\u201312 months)",
          "col2": "0.25 m\xB2 \u2013 0.35 m\xB2",
          "col3": "Infant population reference range"
        },
        {
          "col1": "Children (1\u201312 years)",
          "col2": "0.50 m\xB2 \u2013 1.07 m\xB2",
          "col3": "Child population reference range"
        },
        {
          "col1": "Adult Women Average",
          "col2": "1.60 m\xB2",
          "col3": "Standard adult female population average"
        },
        {
          "col1": "Adult Men Average",
          "col2": "1.90 m\xB2",
          "col3": "Standard adult male population average"
        }
      ],
      "faqs": [
        {
          "question": "What is Body Surface Area (BSA)?",
          "answer": "BSA is an estimated body-surface-area value calculated from height and weight. Some medical research protocols use BSA as one input, but this calculator does not provide medication doses or treatment recommendations."
        },
        {
          "question": "How is BSA calculated using the Mosteller equation?",
          "answer": "The Mosteller equation multiplies height in cm by weight in kg, divides by 3600, and takes the square root: BSA = \u221A (Height \xD7 Weight / 3600)."
        },
        {
          "question": "What is the average body surface area for adults?",
          "answer": "The average estimated body surface area is approximately 1.60 m\xB2 for adult women and 1.90 m\xB2 for adult men."
        }
      ]
    },
    "es": {
      "eyebrow": "Est\xE1ndares de Referencia de Salud",
      "title": "Calculadora de Superficie Corporal \u2013 Ecuaciones BSA \u2013 Gu\xEDa y Calculadora",
      "intro": "Herramienta de c\xE1lculo y referencia educativa dise\xF1ada seg\xFAn los est\xE1ndares de salud publicados de la OMS y CDC. Calcula tus m\xE9tricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "F\xF3rmula de Referencia Est\xE1ndar",
      "formulaDesc": "Calculado utilizando ecuaciones est\xE1ndar validadas.",
      "formulaCode": "BSA (m\xB2) = \u221A [ (Height cm \xD7 Weight kg) / 3600 ]",
      "tableTitle": "Tabla de Referencia Est\xE1ndar",
      "tableRows": [
        {
          "col1": "Lactantes (0\u201312 meses)",
          "col2": "0.25 m\xB2 \u2013 0.35 m\xB2",
          "col3": "Rango de referencia Infant population rango de referencia"
        },
        {
          "col1": "Ni\xF1os (1\u201312 a\xF1os)",
          "col2": "0.50 m\xB2 \u2013 1.07 m\xB2",
          "col3": "Rango de referencia Child population rango de referencia"
        },
        {
          "col1": "Promedio Mujeres Adultas",
          "col2": "1.60 m\xB2",
          "col3": "Promedio poblacional en mujeres adultas"
        },
        {
          "col1": "Promedio Hombres Adultos",
          "col2": "1.90 m\xB2",
          "col3": "Promedio poblacional en hombres adultos"
        }
      ],
      "faqs": [
        {
          "question": "\xBFC\xF3mo funciona la calculadora de superficie corporal (ASC) y qu\xE9 mide?",
          "answer": "Esta calculadora eval\xFAa tus datos personales utilizando ecuaciones validadas. Proporciona una estimaci\xF3n educativa para ayudarte a comprender tu estado de salud y referencias est\xE1ndar."
        },
        {
          "question": "\xBFC\xF3mo se BSA calculated using the Mosteller equation?",
          "answer": "The Mosteller equation multiplies height in cm by weight in kg, divides by 3600, and takes the square root: BSA = \u221A (Height \xD7 Weight / 3600)."
        },
        {
          "question": "\xBFQu\xE9 es el average body surface area for adults?",
          "answer": "The average estimated body surface area is approximately 1.60 m\xB2 for adult women and 1.90 m\xB2 for adult men."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de R\xE9f\xE9rence de Sant\xE9",
      "title": "Calculateur de Surface Corporelle \u2013 Formules BSA Mosteller & Du Bois \u2013 Outil de R\xE9f\xE9rence",
      "intro": "Outil de calcul et de r\xE9f\xE9rence \xE9ducatif con\xE7u selon les normes de sant\xE9 publi\xE9es de l'OMS et du CDC. Calculez vos m\xE9triques et consultez les plages de r\xE9f\xE9rence.",
      "formulaTitle": "Formule de R\xE9f\xE9rence Standard",
      "formulaDesc": "Calcul\xE9 \xE0 l'aide d'\xE9quations standards valid\xE9es.",
      "formulaCode": "BSA (m\xB2) = \u221A [ (Height cm \xD7 Weight kg) / 3600 ]",
      "tableTitle": "Tableau de R\xE9f\xE9rence Standard",
      "tableRows": [
        {
          "col1": "Nourrissons (0\u201312 mois)",
          "col2": "0.25 m\xB2 \u2013 0.35 m\xB2",
          "col3": "Plage de r\xE9f\xE9rence Infant population plage de r\xE9f\xE9rence"
        },
        {
          "col1": "Enfants (1\u201312 ans)",
          "col2": "0.50 m\xB2 \u2013 1.07 m\xB2",
          "col3": "Plage de r\xE9f\xE9rence Child population plage de r\xE9f\xE9rence"
        },
        {
          "col1": "Moyenne Femmes Adultes",
          "col2": "1.60 m\xB2",
          "col3": "Moyenne de la population f\xE9minine adulte"
        },
        {
          "col1": "Moyenne Hommes Adultes",
          "col2": "1.90 m\xB2",
          "col3": "Moyenne de la population masculine adulte"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de surface corporelle (BSA) et que mesure-t-il ?",
          "answer": "Ce calculateur \xE9value vos donn\xE9es personnelles \xE0 l'aide d'\xE9quations valid\xE9es. Il fournit une estimation \xE9ducative pour vous aider \xE0 comprendre vos m\xE9triques et r\xE9f\xE9rences standards."
        },
        {
          "question": "Comment est BSA calculated using the Mosteller equation?",
          "answer": "The Mosteller equation multiplies height in cm by weight in kg, divides by 3600, and takes the square root: BSA = \u221A (Height \xD7 Weight / 3600)."
        },
        {
          "question": "Qu'est-ce que le average body surface area for adults?",
          "answer": "The average estimated body surface area is approximately 1.60 m\xB2 for adult women and 1.90 m\xB2 for adult men."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "K\xF6rperoberfl\xE4chen-Rechner \u2013 KOF / BSA Formeln nach Mosteller \u2013 Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den ver\xF6ffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und pr\xFCfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardm\xE4\xDFig validierten Gleichungen.",
      "formulaCode": "BSA (m\xB2) = \u221A [ (Height cm \xD7 Weight kg) / 3600 ]",
      "tableTitle": "Standard-Referenztabelle",
      "tableRows": [
        {
          "col1": "S\xE4uglinge (0\u201312 Monate)",
          "col2": "0.25 m\xB2 \u2013 0.35 m\xB2",
          "col3": "Referenzbereich Infant population Referenzbereich"
        },
        {
          "col1": "Kinder (1\u201312 Jahre)",
          "col2": "0.50 m\xB2 \u2013 1.07 m\xB2",
          "col3": "Referenzbereich Child population Referenzbereich"
        },
        {
          "col1": "Erwachsene Frauen (Durchschnitt)",
          "col2": "1.60 m\xB2",
          "col3": "Durchschnitt bei erwachsenen Frauen"
        },
        {
          "col1": "Erwachsene M\xE4nner (Durchschnitt)",
          "col2": "1.90 m\xB2",
          "col3": "Durchschnitt bei erwachsenen M\xE4nnern"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der K\xF6rperoberfl\xE4chen-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre pers\xF6nlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        },
        {
          "question": "Wie wird BSA calculated using the Mosteller equation?",
          "answer": "The Mosteller equation multiplies height in cm by weight in kg, divides by 3600, and takes the square root: BSA = \u221A (Height \xD7 Weight / 3600)."
        },
        {
          "question": "Was ist der average body surface area for adults?",
          "answer": "The average estimated body surface area is approximately 1.60 m\xB2 for adult women and 1.90 m\xB2 for adult men."
        }
      ]
    },
    "ko": {
      "eyebrow": "\uAC74\uAC15 \uCC38\uC870 \uD45C\uC900 \uC9C0\uCE68",
      "title": "\uCCB4\uD45C\uBA74\uC801(BSA) \uACC4\uC0B0\uAE30 \u2013 Mosteller \uBC0F Du Bois \uACC4\uC0B0 \uACF5\uC2DD",
      "intro": "WHO \uBC0F CDC \uC9C0\uCE68\uC5D0 \uAE30\uBC18\uD55C \uC2E4\uC2DC\uAC04 \uCC38\uACE0 \uACC4\uC0B0\uAE30\uC785\uB2C8\uB2E4. \uAC1C\uC778\uBCC4 \uC218\uCE58\uB97C \uCE21\uC815\uD558\uACE0 \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uD655\uC778\uD558\uC138\uC694.",
      "formulaTitle": "\uD45C\uC900 \uACC4\uC0B0 \uACF5\uC2DD",
      "formulaDesc": "\uAC80\uC99D\uB41C \uD45C\uC900 \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uACC4\uC0B0\uB429\uB2C8\uB2E4.",
      "formulaCode": "BSA (m\xB2) = \u221A [ (Height cm \xD7 Weight kg) / 3600 ]",
      "tableTitle": "\uD45C\uC900 \uCC38\uC870 \uC9C4\uB2E8\uD45C",
      "tableRows": [
        {
          "col1": "\uC601\uC544 (0\u201312\uAC1C\uC6D4)",
          "col2": "0.25 m\xB2 \u2013 0.35 m\xB2",
          "col3": "\uCC38\uC870 \uBC94\uC704 \uC601\uC544 \uC778\uAD6C \uCC38\uACE0 \uAE30\uC900"
        },
        {
          "col1": "\uC18C\uC544/\uC5B4\uB9B0\uC774 (1\u201312\uC138)",
          "col2": "0.50 m\xB2 \u2013 1.07 m\xB2",
          "col3": "\uCC38\uC870 \uBC94\uC704 \uC18C\uC544 \uC778\uAD6C \uCC38\uACE0 \uAE30\uC900"
        },
        {
          "col1": "\uC131\uC778 \uC5EC\uC131 \uD3C9\uADE0",
          "col2": "1.60 m\xB2",
          "col3": "\uC131\uC778 \uC5EC\uC131 \uC778\uAD6C \uD45C\uC900 \uD3C9\uADE0"
        },
        {
          "col1": "\uC131\uC778 \uB0A8\uC131 \uD3C9\uADE0",
          "col2": "1.90 m\xB2",
          "col3": "\uC131\uC778 \uB0A8\uC131 \uC778\uAD6C \uD45C\uC900 \uD3C9\uADE0"
        }
      ],
      "faqs": [
        {
          "question": "\uCCB4\uD45C\uBA74\uC801 \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uBCF8 \uACC4\uC0B0\uAE30\uB294 \uAC80\uC99D\uB41C \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uAC1C\uC778\uBCC4 \uC2E0\uCCB4 \uC9C0\uC218\uB97C \uC0B0\uCD9C\uD569\uB2C8\uB2E4. \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uBC14\uD0D5\uC73C\uB85C \uAD50\uC721\uC801 \uBD84\uC11D \uACB0\uACFC\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."
        },
        {
          "question": " BSA calculated using the Mosteller equation? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "The Mosteller equation multiplies height in cm by weight in kg, divides by 3600, and takes the square root: BSA = \u221A (Height \xD7 Weight / 3600)."
        },
        {
          "question": " average body surface area for adults? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "The average estimated body surface area is approximately 1.60 m\xB2 for adult women and 1.90 m\xB2 for adult men."
        }
      ]
    },
    "hi": {
      "eyebrow": "\u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0938\u0902\u0926\u0930\u094D\u092D \u092E\u093E\u0928\u0915",
      "title": "\u092C\u0949\u0921\u0940 \u0938\u0930\u092B\u0947\u0938 \u090F\u0930\u093F\u092F\u093E (BSA) \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u2013 \u092E\u094B\u0938\u094D\u091F\u0947\u0932\u0930 \u0938\u0942\u0924\u094D\u0930",
      "intro": "\u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u0914\u0930 \u0938\u0940\u0921\u0940\u0938\u0940 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u092E\u093E\u0928\u0915\u094B\u0902 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0928\u093F\u0930\u094D\u092E\u093F\u0924 \u0938\u0902\u0926\u0930\u094D\u092D \u091F\u0942\u0932\u0964 \u0905\u092A\u0928\u0940 \u092E\u0947\u091F\u094D\u0930\u093F\u0915\u094D\u0938 \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902 \u0914\u0930 \u0938\u094D\u0925\u093E\u092A\u093F\u0924 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0938\u0940\u092E\u093E\u0913\u0902 \u0915\u0940 \u0938\u092E\u0940\u0915\u094D\u0937\u093E \u0915\u0930\u0947\u0902\u0964",
      "formulaTitle": "\u092E\u093E\u0928\u0915 \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0942\u0924\u094D\u0930",
      "formulaDesc": "\u092E\u093E\u0928\u0915 \u0938\u0924\u094D\u092F\u093E\u092A\u093F\u0924 \u0938\u092E\u0940\u0915\u0930\u0923\u094B\u0902 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0915\u0947 \u0917\u0923\u0928\u093E \u0915\u0940 \u0917\u0908\u0964",
      "formulaCode": "BSA (m\xB2) = \u221A [ (Height cm \xD7 Weight kg) / 3600 ]",
      "tableTitle": "\u092E\u093E\u0928\u0915 \u0938\u0902\u0926\u0930\u094D\u092D \u0924\u093E\u0932\u093F\u0915\u093E",
      "tableRows": [
        {
          "col1": "\u0936\u093F\u0936\u0941 (0\u201312 \u092E\u0939\u0940\u0928\u0947)",
          "col2": "0.25 m\xB2 \u2013 0.35 m\xB2",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E \u0936\u093F\u0936\u0941 \u091C\u0928\u0938\u0902\u0916\u094D\u092F\u093E \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E"
        },
        {
          "col1": "\u092C\u091A\u094D\u091A\u0947 (1\u201312 \u0935\u0930\u094D\u0937)",
          "col2": "0.50 m\xB2 \u2013 1.07 m\xB2",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E \u092C\u093E\u0932 \u091C\u0928\u0938\u0902\u0916\u094D\u092F\u093E \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E"
        },
        {
          "col1": "\u0935\u092F\u0938\u094D\u0915 \u092E\u0939\u093F\u0932\u093E \u0914\u0938\u0924",
          "col2": "1.60 m\xB2",
          "col3": "\u0935\u092F\u0938\u094D\u0915 \u092E\u0939\u093F\u0932\u093E \u091C\u0928\u0938\u0902\u0916\u094D\u092F\u093E \u0915\u093E \u092E\u093E\u0928\u0915 \u0914\u0938\u0924"
        },
        {
          "col1": "\u0935\u092F\u0938\u094D\u0915 \u092A\u0941\u0930\u0941\u0937 \u0914\u0938\u0924",
          "col2": "1.90 m\xB2",
          "col3": "\u0935\u092F\u0938\u094D\u0915 \u092A\u0941\u0930\u0941\u0937 \u091C\u0928\u0938\u0902\u0916\u094D\u092F\u093E \u0915\u093E \u092E\u093E\u0928\u0915 \u0914\u0938\u0924"
        }
      ],
      "faqs": [
        {
          "question": "\u092C\u0949\u0921\u0940 \u0938\u0930\u092B\u0947\u0938 \u090F\u0930\u093F\u092F\u093E (BSA) \u0915\u094D\u092F\u093E \u0939\u0948?",
          "answer": "BSA \u0906\u092A\u0915\u0947 \u0936\u0930\u0940\u0930 \u0915\u0947 \u0915\u0941\u0932 \u092C\u093E\u0939\u0930\u0940 \u0938\u0924\u0939 \u0915\u094D\u0937\u0947\u0924\u094D\u0930 \u0915\u093E \u0935\u0930\u094D\u0917 \u092E\u0940\u091F\u0930 (m\xB2) \u092E\u0947\u0902 \u0905\u0928\u0941\u092E\u093E\u0928\u093F\u0924 \u092E\u093E\u092A \u0939\u0948\u0964"
        },
        {
          "question": "\u092E\u094B\u0938\u094D\u091F\u0947\u0932\u0930 (Mosteller) \u0938\u0942\u0924\u094D\u0930 \u0915\u0948\u0938\u0947 \u0915\u093E\u092E \u0915\u0930\u0924\u093E \u0939\u0948?",
          "answer": "\u092E\u094B\u0938\u094D\u091F\u0947\u0932\u0930 \u0938\u0942\u0924\u094D\u0930 BSA = \u221A[ (\u090A\u0902\u091A\u093E\u0908 \u0938\u0947\u092E\u0940 \xD7 \u0935\u091C\u0928 \u0915\u093F\u0917\u094D\u0930\u093E) / 3600 ] \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0915\u0947 \u0924\u0941\u0930\u0902\u0924 \u0935\u0930\u094D\u0917 \u092E\u0940\u091F\u0930 \u0928\u093F\u0915\u093E\u0932\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "BSA \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u093F\u0928 \u0915\u094D\u0937\u0947\u0924\u094D\u0930\u094B\u0902 \u092E\u0947\u0902 \u0939\u094B\u0924\u093E \u0939\u0948?",
          "answer": "BSA \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u092E\u0941\u0916\u094D\u092F \u0930\u0942\u092A \u0938\u0947 \u092B\u093F\u091C\u093F\u092F\u094B\u0932\u0949\u091C\u0940, \u092E\u0947\u0921\u093F\u0915\u0932 \u0938\u094D\u0915\u0947\u0932\u093F\u0902\u0917 \u0914\u0930 \u0928\u0948\u0926\u093E\u0928\u093F\u0915 \u0905\u0928\u0941\u0938\u0902\u0927\u093E\u0928\u094B\u0902 \u092E\u0947\u0902 \u0915\u093F\u092F\u093E \u091C\u093E\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u0914\u0938\u0924 \u0935\u092F\u0938\u094D\u0915 \u0915\u093E BSA \u0915\u093F\u0924\u0928\u093E \u0939\u094B\u0924\u093E \u0939\u0948?",
          "answer": "\u090F\u0915 \u0914\u0938\u0924 \u0935\u092F\u0938\u094D\u0915 \u092A\u0941\u0930\u0941\u0937 \u0915\u093E BSA \u0932\u0917\u092D\u0917 1.9 m\xB2 \u0914\u0930 \u0935\u092F\u0938\u094D\u0915 \u092E\u0939\u093F\u0932\u093E \u0915\u093E \u0932\u0917\u092D\u0917 1.6 m\xB2 \u0939\u094B\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u0915\u094D\u092F\u093E \u0907\u0938 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0926\u0935\u093E \u0915\u0940 \u0916\u0941\u0930\u093E\u0915 \u0915\u0947 \u0932\u093F\u090F \u0915\u0930 \u0938\u0915\u0924\u0947 \u0939\u0948\u0902?",
          "answer": "\u0928\u0939\u0940\u0902, \u092F\u0939 \u090F\u0915 \u0936\u0948\u0915\u094D\u0937\u0923\u093F\u0915 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u0939\u0948\u0964 \u0926\u0935\u093E \u0915\u0940 \u0916\u0941\u0930\u093E\u0915 \u0915\u0947\u0935\u0932 \u092F\u094B\u0917\u094D\u092F \u091A\u093F\u0915\u093F\u0924\u094D\u0938\u0915 \u0926\u094D\u0935\u093E\u0930\u093E \u0924\u092F \u0915\u0940 \u091C\u093E\u0928\u0940 \u091A\u093E\u0939\u093F\u090F\u0964"
        }
      ]
    }
  },
  "heart-rate-zone-calculator": {
    "en": {
      "eyebrow": "Karvonen Cardio Protocol",
      "title": "Karvonen Heart Rate Zone Calculator & Target Heart Rate Tool",
      "intro": "Calculate estimated exercise heart-rate training zones using the Karvonen method and Heart Rate Reserve (HRR).",
      "formulaTitle": "Karvonen Formula Mathematical Equation",
      "formulaDesc": "Max HR = 220 - Age in years (commonly used estimate) | Heart Rate Reserve (HRR) = Max HR - Resting HR | Target HR = Resting HR + [HRR \xD7 % Intensity]",
      "formulaCode": "Target HR = RHR + [(220 - Age - RHR) \xD7 % Intensity]",
      "tableTitle": "Karvonen 5-Zone Heart Rate Intensity Matrix",
      "tableRows": [
        {
          "col1": "Zone 1 (50% - 60% HRR)",
          "col2": "Active Recovery / Warmup",
          "col3": "Promotes blood circulation & passive recovery"
        },
        {
          "col1": "Zone 2 (60% - 70% HRR)",
          "col2": "Moderate Aerobic Training",
          "col3": "Often used for aerobic base training and moderate-intensity exercise"
        },
        {
          "col1": "Zone 3 (70% - 80% HRR)",
          "col2": "Aerobic Endurance / Fitness",
          "col3": "Improves cardiovascular efficiency & stamina"
        },
        {
          "col1": "Zone 4 (80% - 90% HRR)",
          "col2": "Anaerobic / Lactate Threshold",
          "col3": "Increases high-intensity exercise tolerance"
        },
        {
          "col1": "Zone 5 (90% - 100% HRR)",
          "col2": "Maximal VO2 Max Peak Power",
          "col3": "Neuromuscular speed & peak sprint conditioning"
        }
      ],
      "faqs": [
        {
          "question": "What is the Karvonen Heart Rate Zone Calculator?",
          "answer": "The Karvonen Heart Rate Zone Calculator is a cardiovascular training tool created by Dr. Martti Karvonen. It provides personalized training-zone estimates using the Karvonen formula and Heart Rate Reserve (HRR)."
        },
        {
          "question": "How to calculate target heart rate using the Karvonen formula?",
          "answer": "To use the Karvonen formula: 1) Subtract your age from 220 to get Max HR estimate. 2) Subtract your Resting HR from Max HR to get Heart Rate Reserve (HRR). 3) Multiply HRR by desired intensity % (e.g., 60% to 70% for moderate aerobic training). 4) Add your Resting HR back to get your target heart rate in BPM."
        },
        {
          "question": "Why does the Karvonen formula factor in Resting Heart Rate?",
          "answer": "Traditional formulas (220 - age) provide a population estimate of Max HR. The Karvonen formula provides individualized context by factoring in Resting Heart Rate (RHR)."
        },
        {
          "question": "Which heart rate zone is associated with aerobic base training?",
          "answer": "Karvonen Zone 2 (60% to 70% of Heart Rate Reserve) is commonly associated with aerobic base training and moderate-intensity endurance workouts."
        },
        {
          "question": "How do I measure my Resting Heart Rate (RHR) for the Karvonen calculator?",
          "answer": "Measure your pulse for 60 seconds immediately upon waking in the morning while resting calmly in bed before sitting up or taking caffeine."
        }
      ]
    },
    "es": {
      "eyebrow": "Est\xE1ndares de Referencia de Salud",
      "title": "Calculadora de Zonas de Frecuencia Card\xEDaca \u2013 F\xF3rmula Karvonen \u2013 Gu\xEDa y Calculadora",
      "intro": "Herramienta de c\xE1lculo y referencia educativa dise\xF1ada seg\xFAn los est\xE1ndares de salud publicados de la OMS y CDC. Calcula tus m\xE9tricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "F\xF3rmula de Referencia Est\xE1ndar",
      "formulaDesc": "Calculado utilizando ecuaciones est\xE1ndar validadas.",
      "formulaCode": "Target HR = RHR + [(220 - Age - RHR) \xD7 % Intensity]",
      "tableTitle": "Tabla de Referencia Est\xE1ndar",
      "tableRows": [
        {
          "col1": "Zona 1 (50% - 60% HRR)",
          "col2": "Active Recovery / Warmup",
          "col3": "Favorece la circulaci\xF3n sangu\xEDnea y recuperaci\xF3n pasiva"
        },
        {
          "col1": "Zona 2 (60% - 70% HRR)",
          "col2": "Moderate Aerobic Training",
          "col3": "Base aer\xF3bica y ejercicio de intensidad moderada"
        },
        {
          "col1": "Zona 3 (70% - 80% HRR)",
          "col2": "Aerobic Endurance / Fitness",
          "col3": "Mejora la eficiencia cardiovascular y resistencia"
        },
        {
          "col1": "Zona 4 (80% - 90% HRR)",
          "col2": "Anaerobic / Lactate Threshold",
          "col3": "Aumenta la tolerancia al ejercicio de alta intensidad"
        },
        {
          "col1": "Zona 5 (90% - 100% HRR)",
          "col2": "Maximal VO2 Max Peak Power",
          "col3": "Velocidad neuromuscular y acondicionamiento de sprint"
        }
      ],
      "faqs": [
        {
          "question": "\xBFC\xF3mo funciona la calculadora de zonas de frecuencia card\xEDaca y qu\xE9 mide?",
          "answer": "Esta calculadora eval\xFAa tus datos personales utilizando ecuaciones validadas. Proporciona una estimaci\xF3n educativa para ayudarte a comprender tu estado de salud y referencias est\xE1ndar."
        },
        {
          "question": "C\xF3mo calculate target heart rate using the Karvonen formula?",
          "answer": "To use the Karvonen formula: 1) Subtract your age from 220 to get Max HR estimate. 2) Subtract your Resting HR from Max HR to get Heart Rate Reserve (HRR). 3) Multiply HRR by desired intensity % (e.g., 60% to 70% for moderate aerobic training). 4) Add your Resting HR back to get your target heart rate in BPM."
        },
        {
          "question": "Why does the Karvonen formula factor in Resting Heart Rate?",
          "answer": "Traditional formulas (220 - age) provide a population estimate of Max HR. The Karvonen formula provides individualized context by factoring in Resting Heart Rate (RHR)."
        },
        {
          "question": "Which heart rate zone is associated with aerobic base training?",
          "answer": "Karvonen Zone 2 (60% to 70% of Heart Rate Reserve) is commonly associated with aerobic base training and moderate-intensity endurance workouts."
        },
        {
          "question": "How do I measure my Resting Heart Rate (RHR) for the Karvonen calculator?",
          "answer": "Measure your pulse for 60 seconds immediately upon waking in the morning while resting calmly in bed before sitting up or taking caffeine."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de R\xE9f\xE9rence de Sant\xE9",
      "title": "Calculateur de Zones de Fr\xE9quence Cardiaque \u2013 Formule Karvonen \u2013 Outil de R\xE9f\xE9rence",
      "intro": "Outil de calcul et de r\xE9f\xE9rence \xE9ducatif con\xE7u selon les normes de sant\xE9 publi\xE9es de l'OMS et du CDC. Calculez vos m\xE9triques et consultez les plages de r\xE9f\xE9rence.",
      "formulaTitle": "Formule de R\xE9f\xE9rence Standard",
      "formulaDesc": "Calcul\xE9 \xE0 l'aide d'\xE9quations standards valid\xE9es.",
      "formulaCode": "Target HR = RHR + [(220 - Age - RHR) \xD7 % Intensity]",
      "tableTitle": "Tableau de R\xE9f\xE9rence Standard",
      "tableRows": [
        {
          "col1": "Zone 1 (50% - 60% HRR)",
          "col2": "Active Recovery / Warmup",
          "col3": "Favorise la circulation sanguine et la r\xE9cup\xE9ration passive"
        },
        {
          "col1": "Zone 2 (60% - 70% HRR)",
          "col2": "Moderate Aerobic Training",
          "col3": "Base a\xE9robie et exercice d'intensit\xE9 mod\xE9r\xE9e"
        },
        {
          "col1": "Zone 3 (70% - 80% HRR)",
          "col2": "Aerobic Endurance / Fitness",
          "col3": "Am\xE9liore l'efficacit\xE9 cardiovasculaire et l'endurance"
        },
        {
          "col1": "Zone 4 (80% - 90% HRR)",
          "col2": "Anaerobic / Lactate Threshold",
          "col3": "Augmente la tol\xE9rance \xE0 l'exercice de haute intensit\xE9"
        },
        {
          "col1": "Zone 5 (90% - 100% HRR)",
          "col2": "Maximal VO2 Max Peak Power",
          "col3": "Vitesse neuromusculaire et conditionnement au sprint"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de zones de fr\xE9quence cardiaque et que mesure-t-il ?",
          "answer": "Ce calculateur \xE9value vos donn\xE9es personnelles \xE0 l'aide d'\xE9quations valid\xE9es. Il fournit une estimation \xE9ducative pour vous aider \xE0 comprendre vos m\xE9triques et r\xE9f\xE9rences standards."
        },
        {
          "question": "Comment calculate target heart rate using the Karvonen formula?",
          "answer": "To use the Karvonen formula: 1) Subtract your age from 220 to get Max HR estimate. 2) Subtract your Resting HR from Max HR to get Heart Rate Reserve (HRR). 3) Multiply HRR by desired intensity % (e.g., 60% to 70% for moderate aerobic training). 4) Add your Resting HR back to get your target heart rate in BPM."
        },
        {
          "question": "Why does the Karvonen formula factor in Resting Heart Rate?",
          "answer": "Traditional formulas (220 - age) provide a population estimate of Max HR. The Karvonen formula provides individualized context by factoring in Resting Heart Rate (RHR)."
        },
        {
          "question": "Which heart rate zone is associated with aerobic base training?",
          "answer": "Karvonen Zone 2 (60% to 70% of Heart Rate Reserve) is commonly associated with aerobic base training and moderate-intensity endurance workouts."
        },
        {
          "question": "How do I measure my Resting Heart Rate (RHR) for the Karvonen calculator?",
          "answer": "Measure your pulse for 60 seconds immediately upon waking in the morning while resting calmly in bed before sitting up or taking caffeine."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "Herzfrequenzzonen-Rechner \u2013 Zielherzfrequenz & Karvonen Zonen \u2013 Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den ver\xF6ffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und pr\xFCfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardm\xE4\xDFig validierten Gleichungen.",
      "formulaCode": "Target HR = RHR + [(220 - Age - RHR) \xD7 % Intensity]",
      "tableTitle": "Standard-Referenztabelle",
      "tableRows": [
        {
          "col1": "Zone 1 (50% - 60% HRR)",
          "col2": "Active Recovery / Warmup",
          "col3": "F\xF6rdert die Durchblutung & passive Regeneration"
        },
        {
          "col1": "Zone 2 (60% - 70% HRR)",
          "col2": "Moderate Aerobic Training",
          "col3": "F\xFCr aerobes Basistraining & m\xE4\xDFige Intensit\xE4t"
        },
        {
          "col1": "Zone 3 (70% - 80% HRR)",
          "col2": "Aerobic Endurance / Fitness",
          "col3": "Verbessert die kardiovaskul\xE4re Effizienz & Ausdauer"
        },
        {
          "col1": "Zone 4 (80% - 90% HRR)",
          "col2": "Anaerobic / Lactate Threshold",
          "col3": "Erh\xF6ht die Toleranz f\xFCr hochintensives Training"
        },
        {
          "col1": "Zone 5 (90% - 100% HRR)",
          "col2": "Maximal VO2 Max Peak Power",
          "col3": "Neuromuskul\xE4re Schnelligkeit & Sprint-Konditionierung"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der Herzfrequenzzonen-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre pers\xF6nlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        },
        {
          "question": "Wie man calculate target heart rate using the Karvonen formula?",
          "answer": "To use the Karvonen formula: 1) Subtract your age from 220 to get Max HR estimate. 2) Subtract your Resting HR from Max HR to get Heart Rate Reserve (HRR). 3) Multiply HRR by desired intensity % (e.g., 60% to 70% for moderate aerobic training). 4) Add your Resting HR back to get your target heart rate in BPM."
        },
        {
          "question": "Why does the Karvonen formula factor in Resting Heart Rate?",
          "answer": "Traditional formulas (220 - age) provide a population estimate of Max HR. The Karvonen formula provides individualized context by factoring in Resting Heart Rate (RHR)."
        },
        {
          "question": "Which heart rate zone is associated with aerobic base training?",
          "answer": "Karvonen Zone 2 (60% to 70% of Heart Rate Reserve) is commonly associated with aerobic base training and moderate-intensity endurance workouts."
        },
        {
          "question": "How do I measure my Resting Heart Rate (RHR) for the Karvonen calculator?",
          "answer": "Measure your pulse for 60 seconds immediately upon waking in the morning while resting calmly in bed before sitting up or taking caffeine."
        }
      ]
    },
    "ko": {
      "eyebrow": "\uAC74\uAC15 \uCC38\uC870 \uD45C\uC900 \uC9C0\uCE68",
      "title": "\uC2EC\uBC15\uC218 \uAD6C\uAC04 \uACC4\uC0B0\uAE30 \u2013 Karvonen \uBAA9\uD45C \uC2EC\uBC15\uC218 \uCE21\uC815",
      "intro": "WHO \uBC0F CDC \uC9C0\uCE68\uC5D0 \uAE30\uBC18\uD55C \uC2E4\uC2DC\uAC04 \uCC38\uACE0 \uACC4\uC0B0\uAE30\uC785\uB2C8\uB2E4. \uAC1C\uC778\uBCC4 \uC218\uCE58\uB97C \uCE21\uC815\uD558\uACE0 \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uD655\uC778\uD558\uC138\uC694.",
      "formulaTitle": "\uD45C\uC900 \uACC4\uC0B0 \uACF5\uC2DD",
      "formulaDesc": "\uAC80\uC99D\uB41C \uD45C\uC900 \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uACC4\uC0B0\uB429\uB2C8\uB2E4.",
      "formulaCode": "Target HR = RHR + [(220 - Age - RHR) \xD7 % Intensity]",
      "tableTitle": "\uD45C\uC900 \uCC38\uC870 \uC9C4\uB2E8\uD45C",
      "tableRows": [
        {
          "col1": "1\uAD6C\uAC04 (50% - 60% HRR)",
          "col2": "Active Recovery / Warmup",
          "col3": "\uD608\uC561 \uC21C\uD658 \uCD09\uC9C4 \uBC0F \uC218\uB3D9\uC801 \uD68C\uBCF5 \uC9C0\uC6D0"
        },
        {
          "col1": "2\uAD6C\uAC04 (60% - 70% HRR)",
          "col2": "Moderate Aerobic Training",
          "col3": "\uC720\uC0B0\uC18C \uAE30\uCD08 \uD6C8\uB828 \uBC0F \uC911\uAC15\uB3C4 \uC6B4\uB3D9\uC5D0 \uC8FC\uB85C \uD65C\uC6A9"
        },
        {
          "col1": "3\uAD6C\uAC04 (70% - 80% HRR)",
          "col2": "Aerobic Endurance / Fitness",
          "col3": "\uC2EC\uD608\uAD00 \uD6A8\uC728\uC131 \uBC0F \uC9C0\uAD6C\uB825 \uD5A5\uC0C1"
        },
        {
          "col1": "4\uAD6C\uAC04 (80% - 90% HRR)",
          "col2": "Anaerobic / Lactate Threshold",
          "col3": "\uACE0\uAC15\uB3C4 \uC6B4\uB3D9 \uC9C0\uAD6C\uB825 \uD5A5\uC0C1"
        },
        {
          "col1": "5\uAD6C\uAC04 (90% - 100% HRR)",
          "col2": "Maximal VO2 Max Peak Power",
          "col3": "\uC2E0\uACBD\uADFC \uC18D\uB3C4 \uBC0F \uCD5C\uACE0 \uC804\uB825\uC9C8\uC8FC \uD6C8\uB828"
        }
      ],
      "faqs": [
        {
          "question": "\uC2EC\uBC15\uC218 \uAD6C\uAC04 \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uBCF8 \uACC4\uC0B0\uAE30\uB294 \uAC80\uC99D\uB41C \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uAC1C\uC778\uBCC4 \uC2E0\uCCB4 \uC9C0\uC218\uB97C \uC0B0\uCD9C\uD569\uB2C8\uB2E4. \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uBC14\uD0D5\uC73C\uB85C \uAD50\uC721\uC801 \uBD84\uC11D \uACB0\uACFC\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."
        },
        {
          "question": " calculate target heart rate using the Karvonen formula? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "To use the Karvonen formula: 1) Subtract your age from 220 to get Max HR estimate. 2) Subtract your Resting HR from Max HR to get Heart Rate Reserve (HRR). 3) Multiply HRR by desired intensity % (e.g., 60% to 70% for moderate aerobic training). 4) Add your Resting HR back to get your target heart rate in BPM."
        },
        {
          "question": "Why does the Karvonen formula factor in Resting Heart Rate? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "Traditional formulas (220 - age) provide a population estimate of Max HR. The Karvonen formula provides individualized context by factoring in Resting Heart Rate (RHR)."
        },
        {
          "question": "Which heart rate zone is associated with aerobic base training? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "Karvonen Zone 2 (60% to 70% of Heart Rate Reserve) is commonly associated with aerobic base training and moderate-intensity endurance workouts."
        },
        {
          "question": "How do I measure my Resting Heart Rate (RHR) for the Karvonen calculator? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "Measure your pulse for 60 seconds immediately upon waking in the morning while resting calmly in bed before sitting up or taking caffeine."
        }
      ]
    },
    "hi": {
      "eyebrow": "\u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0938\u0902\u0926\u0930\u094D\u092D \u092E\u093E\u0928\u0915",
      "title": "\u0939\u093E\u0930\u094D\u091F \u0930\u0947\u091F \u091C\u093C\u094B\u0928 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u2013 \u0932\u0915\u094D\u0937\u094D\u092F \u0939\u0943\u0926\u092F \u0917\u0924\u093F \u0938\u0902\u0926\u0930\u094D\u092D",
      "intro": "\u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u0914\u0930 \u0938\u0940\u0921\u0940\u0938\u0940 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u092E\u093E\u0928\u0915\u094B\u0902 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0928\u093F\u0930\u094D\u092E\u093F\u0924 \u0938\u0902\u0926\u0930\u094D\u092D \u091F\u0942\u0932\u0964 \u0905\u092A\u0928\u0940 \u092E\u0947\u091F\u094D\u0930\u093F\u0915\u094D\u0938 \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902 \u0914\u0930 \u0938\u094D\u0925\u093E\u092A\u093F\u0924 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0938\u0940\u092E\u093E\u0913\u0902 \u0915\u0940 \u0938\u092E\u0940\u0915\u094D\u0937\u093E \u0915\u0930\u0947\u0902\u0964",
      "formulaTitle": "\u092E\u093E\u0928\u0915 \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0942\u0924\u094D\u0930",
      "formulaDesc": "\u092E\u093E\u0928\u0915 \u0938\u0924\u094D\u092F\u093E\u092A\u093F\u0924 \u0938\u092E\u0940\u0915\u0930\u0923\u094B\u0902 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0915\u0947 \u0917\u0923\u0928\u093E \u0915\u0940 \u0917\u0908\u0964",
      "formulaCode": "Target HR = RHR + [(220 - Age - RHR) \xD7 % Intensity]",
      "tableTitle": "\u092E\u093E\u0928\u0915 \u0938\u0902\u0926\u0930\u094D\u092D \u0924\u093E\u0932\u093F\u0915\u093E",
      "tableRows": [
        {
          "col1": "\u091C\u093C\u094B\u0928 1 (50% - 60% HRR)",
          "col2": "Active Recovery / Warmup",
          "col3": "\u0930\u0915\u094D\u0924 \u092A\u0930\u093F\u0938\u0902\u091A\u0930\u0923 \u0914\u0930 \u0928\u093F\u0937\u094D\u0915\u094D\u0930\u093F\u092F \u0930\u093F\u0915\u0935\u0930\u0940 \u0915\u094B \u092C\u0922\u093C\u093E\u0935\u093E \u0926\u0947\u0924\u093E \u0939\u0948"
        },
        {
          "col1": "\u091C\u093C\u094B\u0928 2 (50% - 60% HRR)",
          "col2": "Moderate Aerobic Training",
          "col3": "\u090F\u0930\u094B\u092C\u093F\u0915 \u0906\u0927\u093E\u0930 \u092A\u094D\u0930\u0936\u093F\u0915\u094D\u0937\u0923 \u0914\u0930 \u092E\u0927\u094D\u092F\u092E \u0924\u0940\u0935\u094D\u0930\u0924\u093E \u0935\u093E\u0932\u0947 \u0935\u094D\u092F\u093E\u092F\u093E\u092E \u0915\u0947 \u0932\u093F\u090F"
        },
        {
          "col1": "\u091C\u093C\u094B\u0928 3 (70% - 80% HRR)",
          "col2": "Aerobic Endurance / Fitness",
          "col3": "\u0939\u0943\u0926\u092F \u0926\u0915\u094D\u0937\u0924\u093E \u0914\u0930 \u0938\u0939\u0928\u0936\u0915\u094D\u0924\u093F \u092E\u0947\u0902 \u0938\u0941\u0927\u093E\u0930"
        },
        {
          "col1": "\u091C\u093C\u094B\u0928 4 (80% - 90% HRR)",
          "col2": "Anaerobic / Lactate Threshold",
          "col3": "\u0909\u091A\u094D\u091A \u0924\u0940\u0935\u094D\u0930\u0924\u093E \u0935\u094D\u092F\u093E\u092F\u093E\u092E \u0938\u0939\u0928\u0936\u0940\u0932\u0924\u093E \u092C\u0922\u093C\u093E\u0924\u093E \u0939\u0948"
        },
        {
          "col1": "\u091C\u093C\u094B\u0928 5 (90% - 100% HRR)",
          "col2": "Maximal VO2 Max Peak Power",
          "col3": "\u0928\u094D\u092F\u0942\u0930\u094B\u092E\u0938\u094D\u0915\u0941\u0932\u0930 \u0917\u0924\u093F \u0914\u0930 \u0938\u094D\u092A\u094D\u0930\u093F\u0902\u091F \u0915\u0902\u0921\u0940\u0936\u0928\u093F\u0902\u0917"
        }
      ],
      "faqs": [
        {
          "question": "\u0915\u093E\u0930\u094D\u0935\u094B\u0928\u0947\u0928 (Karvonen) \u0939\u093E\u0930\u094D\u091F \u0930\u0947\u091F \u091C\u093C\u094B\u0928 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u0915\u094D\u092F\u093E \u0939\u0948?",
          "answer": "\u092F\u0939 \u0906\u092A\u0915\u0940 \u0935\u093F\u0936\u094D\u0930\u093E\u092E \u0938\u094D\u0925\u093F\u0924\u093F \u0915\u0940 \u0939\u0943\u0926\u092F \u0917\u0924\u093F (RHR) \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0915\u0947 \u0938\u091F\u0940\u0915 \u0932\u0915\u094D\u0937\u093F\u0924 \u0915\u0938\u0930\u0924 \u091C\u093C\u094B\u0928 (Target Heart Rate Zones) \u0928\u093F\u0915\u093E\u0932\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u0905\u0927\u093F\u0915\u0924\u092E \u0939\u0943\u0926\u092F \u0917\u0924\u093F (Max Heart Rate) \u0915\u0948\u0938\u0947 \u0928\u093F\u0915\u093E\u0932\u0940 \u091C\u093E\u0924\u0940 \u0939\u0948?",
          "answer": "\u092E\u093E\u0928\u0915 \u0938\u0942\u0924\u094D\u0930 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0905\u0927\u093F\u0915\u0924\u092E \u0939\u0943\u0926\u092F \u0917\u0924\u093F = 220 - \u0906\u092A\u0915\u0940 \u0909\u092E\u094D\u0930 (bpm) \u0939\u094B\u0924\u0940 \u0939\u0948\u0964"
        },
        {
          "question": "\u092B\u0948\u091F \u092C\u0930\u094D\u0928 \u091C\u093C\u094B\u0928 (Zone 2) \u0915\u094D\u092F\u093E \u0939\u0948?",
          "answer": "\u092F\u0939 \u0906\u092A\u0915\u0940 \u0905\u0927\u093F\u0915\u0924\u092E \u0915\u094D\u0937\u092E\u0924\u093E \u0915\u093E 60% \u0938\u0947 70% \u091C\u093C\u094B\u0928 \u0939\u0948 \u091C\u0939\u093E\u0901 \u0936\u0930\u0940\u0930 \u090A\u0930\u094D\u091C\u093E \u0915\u0947 \u0932\u093F\u090F \u092E\u0941\u0916\u094D\u092F \u0930\u0942\u092A \u0938\u0947 \u0935\u0938\u093E \u092C\u0930\u094D\u0928 \u0915\u0930\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u0939\u093E\u0930\u094D\u091F \u0930\u0947\u091F \u0930\u093F\u091C\u0930\u094D\u0935 (HRR) \u0915\u094D\u092F\u093E \u0939\u0948?",
          "answer": "HRR = \u0905\u0927\u093F\u0915\u0924\u092E \u0939\u0943\u0926\u092F \u0917\u0924\u093F - \u0935\u093F\u0936\u094D\u0930\u093E\u092E \u0939\u0943\u0926\u092F \u0917\u0924\u093F\u0964 \u092F\u0939 \u0906\u092A\u0915\u0940 \u0939\u0943\u0926\u092F \u0938\u0902\u092C\u0902\u0927\u0940 \u0915\u093E\u0930\u094D\u092F\u0915\u094D\u0937\u092E\u0924\u093E \u0915\u0940 \u0938\u0940\u092E\u093E \u0926\u093F\u0916\u093E\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u0935\u093F\u0936\u094D\u0930\u093E\u092E \u0939\u0943\u0926\u092F \u0917\u0924\u093F (Resting Heart Rate) \u0915\u092C \u092E\u093E\u092A\u0947\u0902?",
          "answer": "\u0938\u0941\u092C\u0939 \u0909\u0920\u0924\u0947 \u0939\u0940 \u092C\u093F\u0938\u094D\u0924\u0930 \u092A\u0930 \u092C\u093F\u0928\u093E \u0915\u093F\u0938\u0940 \u0917\u0924\u093F\u0935\u093F\u0927\u093F \u0915\u0947 1 \u092E\u093F\u0928\u091F \u0924\u0915 \u0905\u092A\u0928\u0940 \u0928\u092C\u094D\u091C \u0917\u093F\u0928\u0915\u0930 RHR \u092E\u093E\u092A\u0947\u0902\u0964"
        }
      ]
    }
  },
  "karvonen-heart-rate-calculator": {
    "en": {
      "eyebrow": "Cardiovascular Physiology",
      "title": "Karvonen Heart Rate Calculator \u2013 Target Heart Rate Zones & HRR",
      "intro": "Calculate your target exercise heart rate zones using the Karvonen Formula and Heart Rate Reserve (HRR). Unlike basic percentage formulas, the Karvonen method accounts for your resting heart rate (RHR), providing customized training zones for fat loss, aerobic endurance, and VO2 max improvement.",
      "formulaTitle": "Official Karvonen Formula Equation",
      "formulaDesc": "Target Heart Rate (THR) = [(HRmax - HRrest) \xD7 %intensity] + HRrest | HRmax = 220 - Age | Heart Rate Reserve (HRR) = HRmax - HRrest",
      "formulaCode": "THR = (HRR \xD7 Intensity%) + Resting HR",
      "tableTitle": "Karvonen Heart Rate Training Zones Breakdown",
      "tableRows": [
        {
          "col1": "Zone 1: Active Recovery",
          "col2": "50% \u2013 60% HRR",
          "col3": "Warm-up, cooldown, and active recovery"
        },
        {
          "col1": "Zone 2: Endurance & Fat Loss",
          "col2": "60% \u2013 70% HRR",
          "col3": "Optimal zone for sustainable fat burning and aerobic base building"
        },
        {
          "col1": "Zone 3: Aerobic Fitness",
          "col2": "70% \u2013 80% HRR",
          "col3": "Improves cardiovascular capacity and stamina"
        },
        {
          "col1": "Zone 4: Anaerobic Threshold",
          "col2": "80% \u2013 90% HRR",
          "col3": "Increases high-intensity performance and lactate threshold"
        },
        {
          "col1": "Zone 5: VO2 Max Peak",
          "col2": "90% \u2013 100% HRR",
          "col3": "Maximal speed and interval training"
        }
      ],
      "faqs": [
        {
          "question": "What is the Karvonen Formula?",
          "answer": "The Karvonen formula is a mathematical formula that determines target heart rate (THR) for exercise training by using your heart rate reserve (HRR), which factors in both maximum heart rate and resting heart rate."
        },
        {
          "question": "Why is the Karvonen method more accurate than standard 220-age?",
          "answer": "Standard formulas only estimate maximum heart rate. The Karvonen formula factors in resting heart rate, reflecting your personal cardiovascular fitness level."
        }
      ]
    },
    "es": {
      "eyebrow": "Est\xE1ndares de Referencia de Salud",
      "title": "Calculadora Karvonen \u2013 Reserva de Frecuencia Card\xEDaca HRR \u2013 Gu\xEDa y Calculadora",
      "intro": "Herramienta de c\xE1lculo y referencia educativa dise\xF1ada seg\xFAn los est\xE1ndares de salud publicados de la OMS y CDC. Calcula tus m\xE9tricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "F\xF3rmula de Referencia Est\xE1ndar",
      "formulaDesc": "Calculado utilizando ecuaciones est\xE1ndar validadas.",
      "formulaCode": "THR = (HRR \xD7 Intensity%) + Resting HR",
      "tableTitle": "Tabla de Referencia Est\xE1ndar",
      "tableRows": [
        {
          "col1": "Zona 1: Recuperaci\xF3n Activa",
          "col2": "50% \u2013 60% HRR",
          "col3": "Calentamiento, enfriamiento y recuperaci\xF3n activa"
        },
        {
          "col1": "Zona 2: Resistencia y Quema de Grasa",
          "col2": "60% \u2013 70% HRR",
          "col3": "Zona \xF3ptima para quema de grasa y base aer\xF3bica"
        },
        {
          "col1": "Zona 3: Aptitud Aer\xF3bica",
          "col2": "70% \u2013 80% HRR",
          "col3": "Mejora la capacidad cardiovascular y la resistencia"
        },
        {
          "col1": "Zona 4: Umbral Anaer\xF3bico",
          "col2": "80% \u2013 90% HRR",
          "col3": "Mejora el rendimiento de alta intensidad y el umbral de lactato"
        },
        {
          "col1": "Zona 5: Pico VO2 M\xE1x",
          "col2": "90% \u2013 100% HRR",
          "col3": "Velocidad m\xE1xima y entrenamiento a intervalos"
        }
      ],
      "faqs": [
        {
          "question": "\xBFC\xF3mo funciona la calculadora de frecuencia card\xEDaca Karvonen y qu\xE9 mide?",
          "answer": "Esta calculadora eval\xFAa tus datos personales utilizando ecuaciones validadas. Proporciona una estimaci\xF3n educativa para ayudarte a comprender tu estado de salud y referencias est\xE1ndar."
        },
        {
          "question": "\xBFPor qu\xE9 el m\xE9todo Karvonen considera la frecuencia card\xEDaca en reposo en lugar de solo 220 menos edad?",
          "answer": "Standard formulas only estimate maximum heart rate. The Karvonen formula factors in resting heart rate, reflecting your personal cardiovascular fitness level."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de R\xE9f\xE9rence de Sant\xE9",
      "title": "Calculateur Karvonen \u2013 R\xE9serve Cardiaque HRR & Zones de Forme \u2013 Outil de R\xE9f\xE9rence",
      "intro": "Outil de calcul et de r\xE9f\xE9rence \xE9ducatif con\xE7u selon les normes de sant\xE9 publi\xE9es de l'OMS et du CDC. Calculez vos m\xE9triques et consultez les plages de r\xE9f\xE9rence.",
      "formulaTitle": "Formule de R\xE9f\xE9rence Standard",
      "formulaDesc": "Calcul\xE9 \xE0 l'aide d'\xE9quations standards valid\xE9es.",
      "formulaCode": "THR = (HRR \xD7 Intensity%) + Resting HR",
      "tableTitle": "Tableau de R\xE9f\xE9rence Standard",
      "tableRows": [
        {
          "col1": "Zone 1 : R\xE9cup\xE9ration Active",
          "col2": "50% \u2013 60% HRR",
          "col3": "\xC9chauffement, retour au calme et r\xE9cup\xE9ration active"
        },
        {
          "col1": "Zone 2 : Endurance & Perte de Gras",
          "col2": "60% \u2013 70% HRR",
          "col3": "Zone optimale pour la combustion des graisses et l'endurance"
        },
        {
          "col1": "Zone 3 : Forme A\xE9robie",
          "col2": "70% \u2013 80% HRR",
          "col3": "Am\xE9liore la capacit\xE9 cardiovasculaire et l'endurance"
        },
        {
          "col1": "Zone 4 : Seuil Ana\xE9robie",
          "col2": "80% \u2013 90% HRR",
          "col3": "Augmente les performances \xE0 haute intensit\xE9 et le seuil de lactate"
        },
        {
          "col1": "Zone 5 : Pic VO2 Max",
          "col2": "90% \u2013 100% HRR",
          "col3": "Vitesse maximale et entra\xEEnement par intervalles"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de fr\xE9quence cardiaque Karvonen et que mesure-t-il ?",
          "answer": "Ce calculateur \xE9value vos donn\xE9es personnelles \xE0 l'aide d'\xE9quations valid\xE9es. Il fournit une estimation \xE9ducative pour vous aider \xE0 comprendre vos m\xE9triques et r\xE9f\xE9rences standards."
        },
        {
          "question": "Pourquoi la m\xE9thode Karvonen prend-elle en compte la fr\xE9quence cardiaque au repos ?",
          "answer": "Standard formulas only estimate maximum heart rate. The Karvonen formula factors in resting heart rate, reflecting your personal cardiovascular fitness level."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "Karvonen Herzfrequenz-Rechner \u2013 Herzfrequenzreserve HRR Zonen \u2013 Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den ver\xF6ffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und pr\xFCfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardm\xE4\xDFig validierten Gleichungen.",
      "formulaCode": "THR = (HRR \xD7 Intensity%) + Resting HR",
      "tableTitle": "Standard-Referenztabelle",
      "tableRows": [
        {
          "col1": "Zone 1: Aktive Erholung",
          "col2": "50% \u2013 60% HRR",
          "col3": "Aufw\xE4rmen, Abk\xFChlen und aktive Erholung"
        },
        {
          "col1": "Zone 2: Ausdauer & Fettverbrennung",
          "col2": "60% \u2013 70% HRR",
          "col3": "Optimale Zone f\xFCr Fettverbrennung und aerobe Basis"
        },
        {
          "col1": "Zone 3: Aerobe Fitness",
          "col2": "70% \u2013 80% HRR",
          "col3": "Verbessert die kardiovaskul\xE4re Kapazit\xE4t und Ausdauer"
        },
        {
          "col1": "Zone 4: Anaerobe Schwelle",
          "col2": "80% \u2013 90% HRR",
          "col3": "Steigert die Hochleistungsf\xE4higkeit und die Laktatschwelle"
        },
        {
          "col1": "Zone 5: VO2 Max Spitzenbereich",
          "col2": "90% \u2013 100% HRR",
          "col3": "Maximalgeschwindigkeit und Intervalltraining"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der Karvonen-Herzfrequenz-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre pers\xF6nlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        },
        {
          "question": "Warum ber\xFCcksichtigt die Karvonen-Formel den Ruhepuls?",
          "answer": "Standard formulas only estimate maximum heart rate. The Karvonen formula factors in resting heart rate, reflecting your personal cardiovascular fitness level."
        }
      ]
    },
    "ko": {
      "eyebrow": "\uAC74\uAC15 \uCC38\uC870 \uD45C\uC900 \uC9C0\uCE68",
      "title": "Karvonen \uC2EC\uBC15\uC218 \uACC4\uC0B0\uAE30 \u2013 \uC2EC\uBC15 \uC608\uBE44\uB2A5(HRR) \uCE21\uC815",
      "intro": "WHO \uBC0F CDC \uC9C0\uCE68\uC5D0 \uAE30\uBC18\uD55C \uC2E4\uC2DC\uAC04 \uCC38\uACE0 \uACC4\uC0B0\uAE30\uC785\uB2C8\uB2E4. \uAC1C\uC778\uBCC4 \uC218\uCE58\uB97C \uCE21\uC815\uD558\uACE0 \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uD655\uC778\uD558\uC138\uC694.",
      "formulaTitle": "\uD45C\uC900 \uACC4\uC0B0 \uACF5\uC2DD",
      "formulaDesc": "\uAC80\uC99D\uB41C \uD45C\uC900 \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uACC4\uC0B0\uB429\uB2C8\uB2E4.",
      "formulaCode": "THR = (HRR \xD7 Intensity%) + Resting HR",
      "tableTitle": "\uD45C\uC900 \uCC38\uC870 \uC9C4\uB2E8\uD45C",
      "tableRows": [
        {
          "col1": "1\uAD6C\uAC04: \uB2A5\uB3D9\uC801 \uD68C\uBCF5",
          "col2": "50% \u2013 60% HRR",
          "col3": "\uC6DC\uC5C5, \uCFE8\uB2E4\uC6B4 \uBC0F \uC801\uADF9\uC801 \uD68C\uBCF5"
        },
        {
          "col1": "2\uAD6C\uAC04: \uC9C0\uAD6C\uB825 \uBC0F \uC9C0\uBC29 \uC5F0\uC18C",
          "col2": "60% \u2013 70% HRR",
          "col3": "\uC9C0\uC18D \uAC00\uB2A5\uD55C \uC9C0\uBC29 \uC5F0\uC18C \uBC0F \uC720\uC0B0\uC18C \uAE30\uCD08 \uD615\uC131\uC744 \uC704\uD55C \uCD5C\uC801 \uAD6C\uAC04"
        },
        {
          "col1": "3\uAD6C\uAC04: \uC720\uC0B0\uC18C \uD53C\uD2B8\uB2C8\uC2A4",
          "col2": "70% \u2013 80% HRR",
          "col3": "\uC2EC\uD608\uAD00 \uB2A5\uB825 \uBC0F \uC9C0\uAD6C\uB825 \uD5A5\uC0C1"
        },
        {
          "col1": "4\uAD6C\uAC04: \uBB34\uC0B0\uC18C \uC5ED\uCE58",
          "col2": "80% \u2013 90% HRR",
          "col3": "\uACE0\uAC15\uB3C4 \uC6B4\uB3D9 \uB2A5\uB825 \uBC0F \uC816\uC0B0 \uC5ED\uCE58 \uD5A5\uC0C1"
        },
        {
          "col1": "5\uAD6C\uAC04: \uCD5C\uB300 \uC0B0\uC18C \uC12D\uCDE8\uB7C9 (VO2 Max)",
          "col2": "90% \u2013 100% HRR",
          "col3": "\uCD5C\uACE0 \uC18D\uB3C4 \uBC0F \uC778\uD130\uBC8C \uD6C8\uB828"
        }
      ],
      "faqs": [
        {
          "question": "\uCE74\uB974\uBCF4\uB128 \uC2EC\uBC15\uC218 \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uBCF8 \uACC4\uC0B0\uAE30\uB294 \uAC80\uC99D\uB41C \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uAC1C\uC778\uBCC4 \uC2E0\uCCB4 \uC9C0\uC218\uB97C \uC0B0\uCD9C\uD569\uB2C8\uB2E4. \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uBC14\uD0D5\uC73C\uB85C \uAD50\uC721\uC801 \uBD84\uC11D \uACB0\uACFC\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."
        },
        {
          "question": "\uCE74\uB974\uBCF4\uB128 \uACF5\uC2DD\uC774 \uC77C\uBC18 220-\uB098\uC774 \uACF5\uC2DD\uACFC \uB2E4\uB978 \uC810\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "Standard formulas only estimate maximum heart rate. The Karvonen formula factors in resting heart rate, reflecting your personal cardiovascular fitness level."
        }
      ]
    },
    "hi": {
      "eyebrow": "\u0915\u093E\u0930\u094D\u0921\u093F\u092F\u094B\u0935\u0948\u0938\u094D\u0915\u0941\u0932\u0930 \u092B\u093F\u091C\u093F\u092F\u094B\u0932\u0949\u091C\u0940",
      "title": "\u0915\u093E\u0930\u094D\u0935\u094B\u0928\u0947\u0928 \u0939\u093E\u0930\u094D\u091F \u0930\u0947\u091F \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u2013 \u0939\u093E\u0930\u094D\u091F \u0930\u0947\u091F \u0930\u093F\u091C\u0930\u094D\u0935 (HRR) \u091C\u093C\u094B\u0928",
      "intro": "\u0915\u093E\u0930\u094D\u0935\u094B\u0928\u0947\u0928 \u092B\u0949\u0930\u094D\u092E\u0942\u0932\u093E \u0914\u0930 \u0939\u093E\u0930\u094D\u091F \u0930\u0947\u091F \u0930\u093F\u091C\u0930\u094D\u0935 (HRR) \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0915\u0947 \u0905\u092A\u0928\u0947 \u0932\u0915\u094D\u0937\u093F\u0924 \u0935\u094D\u092F\u093E\u092F\u093E\u092E \u0939\u093E\u0930\u094D\u091F \u0930\u0947\u091F \u091C\u093C\u094B\u0928 \u0915\u0940 \u0938\u091F\u0940\u0915 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902\u0964",
      "formulaTitle": "\u0906\u0927\u093F\u0915\u093E\u0930\u093F\u0915 \u0915\u093E\u0930\u094D\u0935\u094B\u0928\u0947\u0928 \u0938\u0942\u0924\u094D\u0930",
      "formulaDesc": "Target HR = [(HRmax - HRrest) \xD7 %intensity] + HRrest",
      "formulaCode": "THR = (HRR \xD7 Intensity%) + Resting HR",
      "tableTitle": "\u0915\u093E\u0930\u094D\u0935\u094B\u0928\u0947\u0928 \u0939\u093E\u0930\u094D\u091F \u0930\u0947\u091F \u091F\u094D\u0930\u0947\u0928\u093F\u0902\u0917 \u091C\u093C\u094B\u0928 \u0924\u093E\u0932\u093F\u0915\u093E",
      "tableRows": [
        {
          "col1": "\u091C\u093C\u094B\u0928 1: \u0938\u0915\u094D\u0930\u093F\u092F \u0930\u093F\u0915\u0935\u0930\u0940",
          "col2": "50% \u2013 60% HRR",
          "col3": "\u0935\u093E\u0930\u094D\u092E-\u0905\u092A \u0914\u0930 \u0930\u093F\u0915\u0935\u0930\u0940"
        },
        {
          "col1": "\u091C\u093C\u094B\u0928 2: \u0927\u0940\u0930\u091C \u090F\u0935\u0902 \u0935\u0938\u093E \u0939\u093E\u0928\u093F",
          "col2": "60% \u2013 70% HRR",
          "col3": "\u0935\u0938\u093E \u091C\u0932\u093E\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0938\u0930\u094D\u0935\u094B\u0924\u094D\u0924\u092E \u091C\u093C\u094B\u0928"
        },
        {
          "col1": "\u091C\u093C\u094B\u0928 3: \u090F\u0930\u094B\u092C\u093F\u0915 \u092B\u093F\u091F\u0928\u0947\u0938",
          "col2": "70% \u2013 80% HRR",
          "col3": "\u0915\u093E\u0930\u094D\u0921\u093F\u092F\u094B \u0915\u094D\u0937\u092E\u0924\u093E \u092E\u0947\u0902 \u0938\u0941\u0927\u093E\u0930"
        },
        {
          "col1": "\u091C\u093C\u094B\u0928 4: \u090F\u0928\u093E\u0930\u094B\u092C\u093F\u0915 \u0938\u0940\u092E\u093E",
          "col2": "80% \u2013 90% HRR",
          "col3": "\u0938\u0939\u0928\u0936\u0915\u094D\u0924\u093F \u092E\u0947\u0902 \u0935\u0943\u0926\u094D\u0927\u093F"
        },
        {
          "col1": "\u091C\u093C\u094B\u0928 5: VO2 \u092E\u0948\u0915\u094D\u0938 \u0936\u093F\u0916\u0930",
          "col2": "90% \u2013 100% HRR",
          "col3": "\u0905\u0927\u093F\u0915\u0924\u092E \u0924\u0940\u0935\u094D\u0930\u0924\u093E \u0905\u0902\u0924\u0930\u093E\u0932"
        }
      ],
      "faqs": [
        {
          "question": "\u0915\u093E\u0930\u094D\u0935\u094B\u0928\u0947\u0928 \u0938\u0942\u0924\u094D\u0930 \u092E\u093E\u0928\u0915 \u0939\u0943\u0926\u092F \u0917\u0924\u093F \u0938\u0942\u0924\u094D\u0930 \u0938\u0947 \u092C\u0947\u0939\u0924\u0930 \u0915\u094D\u092F\u094B\u0902 \u0939\u0948?",
          "answer": "\u0915\u093E\u0930\u094D\u0935\u094B\u0928\u0947\u0928 \u0938\u0942\u0924\u094D\u0930 \u092E\u0947\u0902 \u0906\u092A\u0915\u0940 \u0935\u093F\u0936\u094D\u0930\u093E\u092E \u0939\u0943\u0926\u092F \u0917\u0924\u093F (Resting HR) \u0915\u094B \u092D\u0940 \u091C\u094B\u0921\u093C\u093E \u091C\u093E\u0924\u093E \u0939\u0948, \u091C\u093F\u0938\u0938\u0947 \u092F\u0939 \u0905\u0927\u093F\u0915 \u0935\u094D\u092F\u0915\u094D\u0924\u093F\u0917\u0924 \u0939\u094B\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u090F\u0930\u094B\u092C\u093F\u0915 \u091C\u093C\u094B\u0928 (70-80%) \u0915\u0947 \u0915\u094D\u092F\u093E \u092B\u093E\u092F\u0926\u0947 \u0939\u0948\u0902?",
          "answer": "\u092F\u0939 \u091C\u093C\u094B\u0928 \u0906\u092A\u0915\u0947 \u0938\u094D\u091F\u0948\u092E\u093F\u0928\u093E, \u092B\u0947\u092B\u0921\u093C\u094B\u0902 \u0915\u0940 \u0915\u094D\u0937\u092E\u0924\u093E \u0914\u0930 \u0915\u093E\u0930\u094D\u0921\u093F\u092F\u094B\u0935\u0948\u0938\u094D\u0915\u0941\u0932\u0930 \u0938\u0939\u0928\u0936\u0915\u094D\u0924\u093F \u0915\u094B \u092E\u091C\u092C\u0942\u0924 \u092C\u0928\u093E\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u0915\u094D\u092F\u093E \u0909\u092E\u094D\u0930 \u092C\u0922\u093C\u0928\u0947 \u0938\u0947 \u0905\u0927\u093F\u0915\u0924\u092E \u0939\u0943\u0926\u092F \u0917\u0924\u093F \u0915\u092E \u0939\u094B\u0924\u0940 \u0939\u0948?",
          "answer": "\u0939\u093E\u0901, 220 - \u0909\u092E\u094D\u0930 \u0938\u0942\u0924\u094D\u0930 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0909\u092E\u094D\u0930 \u092C\u0922\u093C\u0928\u0947 \u0915\u0947 \u0938\u093E\u0925 \u0905\u0927\u093F\u0915\u0924\u092E \u0939\u0943\u0926\u092F \u0917\u0924\u093F \u0938\u094D\u0935\u093E\u092D\u093E\u0935\u093F\u0915 \u0930\u0942\u092A \u0938\u0947 \u0918\u091F\u0924\u0940 \u0939\u0948\u0964"
        },
        {
          "question": "\u0915\u0938\u0930\u0924 \u0915\u0947 \u0926\u094C\u0930\u093E\u0928 \u0939\u0943\u0926\u092F \u0917\u0924\u093F \u0915\u0940 \u0928\u093F\u0917\u0930\u093E\u0928\u0940 \u0915\u0948\u0938\u0947 \u0915\u0930\u0947\u0902?",
          "answer": "\u0906\u092A \u0938\u094D\u092E\u093E\u0930\u094D\u091F\u0935\u0949\u091A, \u091A\u0947\u0938\u094D\u091F \u0938\u094D\u091F\u094D\u0930\u0948\u092A \u092F\u093E \u0935\u0930\u094D\u0915\u0906\u0909\u091F \u0915\u0947 \u092C\u0940\u091A 10 \u0938\u0947\u0915\u0902\u0921 \u0915\u0940 \u0928\u092C\u094D\u091C \u0917\u093F\u0928\u0915\u0930 \u0939\u0943\u0926\u092F \u0917\u0924\u093F \u091C\u093E\u0902\u091A \u0938\u0915\u0924\u0947 \u0939\u0948\u0902\u0964"
        },
        {
          "question": "\u091C\u093C\u094B\u0928 1 (50-60%) \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u092C \u0915\u093F\u092F\u093E \u091C\u093E\u0924\u093E \u0939\u0948?",
          "answer": "\u091C\u093C\u094B\u0928 1 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0935\u093E\u0930\u094D\u092E-\u0905\u092A, \u0915\u0942\u0932-\u0921\u093E\u0909\u0928 \u0914\u0930 \u0939\u0932\u094D\u0915\u0940 \u0930\u093F\u0915\u0935\u0930\u0940 \u0915\u0938\u0930\u0924 \u0915\u0947 \u0926\u094C\u0930\u093E\u0928 \u0915\u093F\u092F\u093E \u091C\u093E\u0924\u093E \u0939\u0948\u0964"
        }
      ]
    }
  },
  "1rm-calculator": {
    "en": {
      "eyebrow": "Strength Conditioning Science",
      "title": "1RM Calculator \u2013 Free One Rep Max Calculator (Bench, Squat, Deadlift)",
      "intro": "Free 1RM Calculator (One Rep Max Calculator). Calculate your maximum single-repetition lift for bench press, back squat, overhead press, and deadlift without needing to lift to failure, using verified Epley, Brzycki, and Lander mathematical equations.",
      "formulaTitle": "Standard Strength 1RM Calculation Formulas",
      "formulaDesc": "Epley: 1RM = Weight \xD7 (1 + Reps / 30) | Brzycki: 1RM = Weight \xD7 [36 / (37 - Reps)] | Lander: 1RM = (100 \xD7 Weight) / (101.3 - 2.67123 \xD7 Reps)",
      "formulaCode": "Epley 1RM = W \xD7 (1 + R / 30)",
      "tableTitle": "1RM Percentage Intensity & Repetition Training Chart",
      "tableRows": [
        {
          "col1": "100% 1RM",
          "col2": "1 Repetition",
          "col3": "Absolute maximum strength single"
        },
        {
          "col1": "95% 1RM",
          "col2": "2 Repetitions",
          "col3": "Heavy strength training load"
        },
        {
          "col1": "90% 1RM",
          "col2": "3 Repetitions",
          "col3": "Power lifting strength sets"
        },
        {
          "col1": "85% 1RM",
          "col2": "5 Repetitions",
          "col3": "Hypertrophy & heavy strength blend"
        },
        {
          "col1": "80% 1RM",
          "col2": "7 Repetitions",
          "col3": "Hypertrophy muscle building range"
        },
        {
          "col1": "75% 1RM",
          "col2": "10 Repetitions",
          "col3": "Volume hypertrophy & endurance"
        }
      ],
      "faqs": [
        {
          "question": "What is 1RM and how is it calculated?",
          "answer": "One Rep Max (1RM) is the maximum weight you can lift for a single repetition with proper form. Our 1RM Calculator uses submaximal weight and rep counts with the Epley formula [Weight \xD7 (1 + Reps/30)] to safely estimate your max."
        },
        {
          "question": "How do submaximal 1RM estimation formulas work?",
          "answer": "Submaximal formulas like Epley and Brzycki estimate your 1-rep maximum based on lighter set weights and rep counts, avoiding heavy single-rep strain."
        }
      ]
    },
    "es": {
      "eyebrow": "Est\xE1ndares de Referencia de Salud",
      "title": "1RM Calculator \u2013 Free One Rep Max Calculator (Bench, Squat, Deadlift) \u2013 Gu\xEDa y Calculadora",
      "intro": "Herramienta de c\xE1lculo y referencia educativa dise\xF1ada seg\xFAn los est\xE1ndares de salud publicados de la OMS y CDC. Calcula tus m\xE9tricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "F\xF3rmula de Referencia Est\xE1ndar",
      "formulaDesc": "Calculado utilizando ecuaciones est\xE1ndar validadas.",
      "formulaCode": "Epley 1RM = W \xD7 (1 + R / 30)",
      "tableTitle": "Tabla de Referencia Est\xE1ndar",
      "tableRows": [
        {
          "col1": "100% 1RM Fuerza M\xE1xima",
          "col2": "1 Repetition",
          "col3": "Carga m\xE1xima absoluta de fuerza (100% 1RM)"
        },
        {
          "col1": "90% 1RM Carga Pesada",
          "col2": "2 Repetitions",
          "col3": "Carga pesada de entrenamiento de fuerza (95% 1RM)"
        },
        {
          "col1": "85% 1RM Desarrollo Fuerza",
          "col2": "3 Repetitions",
          "col3": "Series de fuerza y levantamiento (93% 1RM)"
        },
        {
          "col1": "80% 1RM Hipertrofia",
          "col2": "5 Repetitions",
          "col3": "Rango de desarrollo de fuerza muscular (87% 1RM)"
        },
        {
          "col1": "75% 1RM Resistencia Muscular",
          "col2": "7 Repetitions",
          "col3": "Rango de hipertrofia y construcci\xF3n muscular (80% 1RM)"
        },
        {
          "col1": "Categor\xEDa / Nivel 6",
          "col2": "10 Repetitions",
          "col3": "Resistencia muscular e hipertrofia de volumen (75% 1RM)"
        }
      ],
      "faqs": [
        {
          "question": "\xBFC\xF3mo funciona la calculadora de 1RM (repetici\xF3n m\xE1xima) y qu\xE9 mide?",
          "answer": "Esta calculadora eval\xFAa tus datos personales utilizando ecuaciones validadas. Proporciona una estimaci\xF3n educativa para ayudarte a comprender tu estado de salud y referencias est\xE1ndar."
        },
        {
          "question": "Is the 1RM calculator accurate para press de banca y sentadilla?",
          "answer": "Yes, formulas like Epley and Brzycki are accurate within 2-4% for rep ranges between 1 and 10 reps."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de R\xE9f\xE9rence de Sant\xE9",
      "title": "1RM Calculator \u2013 Free One Rep Max Calculator (Bench, Squat, Deadlift) \u2013 Outil de R\xE9f\xE9rence",
      "intro": "Outil de calcul et de r\xE9f\xE9rence \xE9ducatif con\xE7u selon les normes de sant\xE9 publi\xE9es de l'OMS et du CDC. Calculez vos m\xE9triques et consultez les plages de r\xE9f\xE9rence.",
      "formulaTitle": "Formule de R\xE9f\xE9rence Standard",
      "formulaDesc": "Calcul\xE9 \xE0 l'aide d'\xE9quations standards valid\xE9es.",
      "formulaCode": "Epley 1RM = W \xD7 (1 + R / 30)",
      "tableTitle": "Tableau de R\xE9f\xE9rence Standard",
      "tableRows": [
        {
          "col1": "100% 1RM Force Maximale",
          "col2": "1 Repetition",
          "col3": "Charge maximale absolue de force (100% 1RM)"
        },
        {
          "col1": "90% 1RM Charge Lourde",
          "col2": "2 Repetitions",
          "col3": "Charge lourde d'entra\xEEnement de force (95% 1RM)"
        },
        {
          "col1": "85% 1RM D\xE9veloppement Force",
          "col2": "3 Repetitions",
          "col3": "S\xE9ries de force et d'halt\xE9rophilie (93% 1RM)"
        },
        {
          "col1": "80% 1RM Hypertrophie",
          "col2": "5 Repetitions",
          "col3": "Plage de d\xE9veloppement de la force (87% 1RM)"
        },
        {
          "col1": "75% 1RM Endurance Musculaire",
          "col2": "7 Repetitions",
          "col3": "Plage de construction musculaire (80% 1RM)"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 6",
          "col2": "10 Repetitions",
          "col3": "Endurance musculaire et hypertrophie de volume (75% 1RM)"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de 1RM (charge maximale) et que mesure-t-il ?",
          "answer": "Ce calculateur \xE9value vos donn\xE9es personnelles \xE0 l'aide d'\xE9quations valid\xE9es. Il fournit une estimation \xE9ducative pour vous aider \xE0 comprendre vos m\xE9triques et r\xE9f\xE9rences standards."
        },
        {
          "question": "Is the 1RM calculator accurate para press de banca y sentadilla?",
          "answer": "Yes, formulas like Epley and Brzycki are accurate within 2-4% for rep ranges between 1 and 10 reps."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "1RM Calculator \u2013 Free One Rep Max Calculator (Bench, Squat, Deadlift) \u2013 Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den ver\xF6ffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und pr\xFCfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardm\xE4\xDFig validierten Gleichungen.",
      "formulaCode": "Epley 1RM = W \xD7 (1 + R / 30)",
      "tableTitle": "Standard-Referenztabelle",
      "tableRows": [
        {
          "col1": "100% 1RM Maximalkraft",
          "col2": "1 Repetition",
          "col3": "Maximale Kraftleistung (100% 1RM)"
        },
        {
          "col1": "95% 1RM Schwere Last",
          "col2": "2 Repetitions",
          "col3": "Schwere Krafttraining-Belastung (95% 1RM)"
        },
        {
          "col1": "90% 1RM Kraftaufbau",
          "col2": "3 Repetitions",
          "col3": "Krafts\xE4tze f\xFCr Maximalkraft (93% 1RM)"
        },
        {
          "col1": "85% 1RM Muskelaufbau",
          "col2": "5 Repetitions",
          "col3": "Bereich f\xFCr schweren Kraftaufbau (87% 1RM)"
        },
        {
          "col1": "80% 1RM Hypertrophie",
          "col2": "7 Repetitions",
          "col3": "Bereich f\xFCr Muskelaufbau (80% 1RM)"
        },
        {
          "col1": "75% 1RM Kraftausdauer",
          "col2": "10 Repetitions",
          "col3": "Muskelausdauer und Volumen-Hypertrophie (75% 1RM)"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der 1RM-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre pers\xF6nlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        },
        {
          "question": "Is the 1RM calculator accurate para press de banca y sentadilla?",
          "answer": "Yes, formulas like Epley and Brzycki are accurate within 2-4% for rep ranges between 1 and 10 reps."
        }
      ]
    },
    "ko": {
      "eyebrow": "\uAC74\uAC15 \uCC38\uC870 \uD45C\uC900 \uC9C0\uCE68",
      "title": "1RM \uACC4\uC0B0\uAE30 \u2013 \uBB34\uB8CC One Rep Max \uACC4\uC0B0\uAE30 (Bench, Squat, Deadlift) \u2013 \uCC38\uC870 \uACC4\uC0B0\uAE30",
      "intro": "WHO \uBC0F CDC \uC9C0\uCE68\uC5D0 \uAE30\uBC18\uD55C \uC2E4\uC2DC\uAC04 \uCC38\uACE0 \uACC4\uC0B0\uAE30\uC785\uB2C8\uB2E4. \uAC1C\uC778\uBCC4 \uC218\uCE58\uB97C \uCE21\uC815\uD558\uACE0 \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uD655\uC778\uD558\uC138\uC694.",
      "formulaTitle": "\uD45C\uC900 \uACC4\uC0B0 \uACF5\uC2DD",
      "formulaDesc": "\uAC80\uC99D\uB41C \uD45C\uC900 \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uACC4\uC0B0\uB429\uB2C8\uB2E4.",
      "formulaCode": "Epley 1RM = W \xD7 (1 + R / 30)",
      "tableTitle": "\uD45C\uC900 \uCC38\uC870 \uC9C4\uB2E8\uD45C",
      "tableRows": [
        {
          "col1": "100% 1RM \uCD5C\uB300 \uAE30\uC900",
          "col2": "1 Repetition",
          "col3": "\uB2E8\uC77C \uCD5C\uACE0 \uADFC\uB825 \uCE21\uC815 \uAD6C\uAC04 (100% 1RM)"
        },
        {
          "col1": "95% 1RM \uACE0\uBD80\uD558",
          "col2": "2 Repetitions",
          "col3": "\uACE0\uC911\uB7C9 \uADFC\uB825 \uD6C8\uB828 \uAD6C\uAC04 (95% 1RM)"
        },
        {
          "col1": "90% 1RM \uADFC\uB825 \uD5A5\uC0C1",
          "col2": "3 Repetitions",
          "col3": "\uD30C\uC6CC \uB9AC\uD504\uD305 \uC138\uD2B8 \uAD6C\uAC04 (93% 1RM)"
        },
        {
          "col1": "85% 1RM \uADFC\uBE44\uB300",
          "col2": "5 Repetitions",
          "col3": "\uACE0\uC911\uB7C9 \uADFC\uB825 \uBC1C\uB2EC \uAD6C\uAC04 (87% 1RM)"
        },
        {
          "col1": "80% 1RM \uD558\uC774\uD37C\uD2B8\uB85C\uD53C",
          "col2": "7 Repetitions",
          "col3": "\uADFC\uBE44\uB300 \uC9D1\uC911 \uD6C8\uB828 \uAD6C\uAC04 (80% 1RM)"
        },
        {
          "col1": "75% 1RM \uADFC\uC9C0\uAD6C\uB825",
          "col2": "10 Repetitions",
          "col3": "\uADFC\uC9C0\uAD6C\uB825 \uBC0F \uBCFC\uB968 \uD6C8\uB828 \uAD6C\uAC04 (75% 1RM)"
        }
      ],
      "faqs": [
        {
          "question": "1RM 1\uD68C \uCD5C\uB300 \uC911\uB7C9 \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uBCF8 \uACC4\uC0B0\uAE30\uB294 \uAC80\uC99D\uB41C \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uAC1C\uC778\uBCC4 \uC2E0\uCCB4 \uC9C0\uC218\uB97C \uC0B0\uCD9C\uD569\uB2C8\uB2E4. \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uBC14\uD0D5\uC73C\uB85C \uAD50\uC721\uC801 \uBD84\uC11D \uACB0\uACFC\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."
        },
        {
          "question": "1RM \uACC4\uC0B0\uAE30\uB294 \uBCA4\uCE58\uD504\uB808\uC2A4, \uC2A4\uCFFC\uD2B8, \uB370\uB4DC\uB9AC\uD504\uD2B8 \uCE21\uC815 \uC2DC \uC720\uC6A9\uD55C\uAC00\uC694?",
          "answer": "Yes, formulas like Epley and Brzycki are accurate within 2-4% for rep ranges between 1 and 10 reps."
        }
      ]
    },
    "hi": {
      "eyebrow": "\u0938\u094D\u091F\u094D\u0930\u0947\u0902\u0925 \u0915\u0902\u0921\u0940\u0936\u0928\u093F\u0902\u0917 \u0938\u093E\u0907\u0902\u0938",
      "title": "1RM \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 (1RM \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 - One Rep Max)",
      "intro": "\u092C\u0947\u0902\u091A \u092A\u094D\u0930\u0947\u0938, \u0938\u094D\u0915\u094D\u0935\u093E\u091F \u0914\u0930 \u0921\u0947\u0921\u0932\u093F\u092B\u094D\u091F \u0915\u0947 \u0932\u093F\u090F \u0905\u092A\u0928\u0947 1RM (\u0935\u0928 \u0930\u0947\u092A \u092E\u0948\u0915\u094D\u0938) \u0915\u0940 \u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902\u0964 \u090F\u092A\u0932\u0947 \u0914\u0930 \u092C\u094D\u0930\u091C\u093C\u093F\u0915\u0940 \u0938\u0942\u0924\u094D\u0930\u094B\u0902 \u0938\u0947 \u0905\u092A\u0928\u0947 100% \u092E\u0948\u0915\u094D\u0938 \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902\u0964",
      "formulaTitle": "\u092E\u093E\u0928\u0915 1RM \u0917\u0923\u0928\u093E \u0938\u0942\u0924\u094D\u0930",
      "formulaDesc": "\u090F\u092A\u0932\u0947 \u0938\u0942\u0924\u094D\u0930: 1RM = \u0935\u091C\u0928 \xD7 (1 + \u0930\u0947\u092A\u094D\u0938 / 30) | \u092C\u094D\u0930\u091C\u093C\u093F\u0915\u0940 \u0938\u0942\u0924\u094D\u0930: 1RM = \u0935\u091C\u0928 \xD7 [36 / (37 - \u0930\u0947\u092A\u094D\u0938)]",
      "formulaCode": "Epley 1RM = W \xD7 (1 + R / 30)",
      "tableTitle": "1RM \u092A\u094D\u0930\u0924\u093F\u0936\u0924 \u092A\u094D\u0930\u0936\u093F\u0915\u094D\u0937\u0923 \u0924\u093E\u0932\u093F\u0915\u093E",
      "tableRows": [
        {
          "col1": "100% 1RM \u0905\u0927\u093F\u0915\u0924\u092E \u0936\u0915\u094D\u0924\u093F",
          "col2": "1 \u0930\u0947\u092A",
          "col3": "\u0905\u0927\u093F\u0915\u0924\u092E \u0915\u094D\u0937\u092E\u0924\u093E"
        },
        {
          "col1": "95% 1RM \u092D\u093E\u0930\u0940 \u092D\u093E\u0930",
          "col2": "3 \u0930\u0947\u092A\u094D\u0938",
          "col3": "\u092D\u093E\u0930\u0940 \u0938\u094D\u091F\u094D\u0930\u0947\u0902\u0925 \u0932\u094B\u0921"
        },
        {
          "col1": "90% 1RM \u0936\u0915\u094D\u0924\u093F \u0935\u093F\u0915\u093E\u0938",
          "col2": "5 \u0930\u0947\u092A\u094D\u0938",
          "col3": "\u092E\u093E\u0902\u0938\u092A\u0947\u0936\u0940 \u0935\u0943\u0926\u094D\u0927\u093F"
        },
        {
          "col1": "85% 1RM \u092E\u093E\u0902\u0938\u092A\u0947\u0936\u0940 \u0935\u0943\u0926\u094D\u0927\u093F",
          "col2": "10 \u0930\u0947\u092A\u094D\u0938",
          "col3": "\u0935\u0949\u0932\u094D\u092F\u0942\u092E \u091F\u094D\u0930\u0947\u0928\u093F\u0902\u0917"
        },
        {
          "col1": "80% 1RM \u0939\u093E\u0907\u092A\u0930\u091F\u094D\u0930\u0949\u092B\u0940",
          "col2": "7 Repetitions",
          "col3": "\u0939\u093E\u0907\u092A\u0930\u091F\u094D\u0930\u0949\u092B\u0940 \u092E\u093E\u0902\u0938\u092A\u0947\u0936\u0940 \u0928\u093F\u0930\u094D\u092E\u093E\u0923 \u0938\u0940\u092E\u093E"
        },
        {
          "col1": "75% 1RM \u092E\u093E\u0902\u0938\u092A\u0947\u0936\u0940 \u0927\u0940\u0930\u091C",
          "col2": "10 Repetitions",
          "col3": "\u0935\u0949\u0932\u094D\u092F\u0942\u092E \u0939\u093E\u0907\u092A\u0930\u091F\u094D\u0930\u0949\u092B\u0940 \u0914\u0930 \u0938\u0939\u0928\u0936\u0915\u094D\u0924\u093F"
        }
      ],
      "faqs": [
        {
          "question": "\u0935\u0928 \u0930\u0947\u092A \u092E\u0948\u0915\u094D\u0938 (1RM) \u0915\u094D\u092F\u093E \u0939\u0948?",
          "answer": "1RM \u0935\u0939 \u0905\u0927\u093F\u0915\u0924\u092E \u0935\u091C\u0928 \u0939\u0948 \u091C\u093F\u0938\u0947 \u0906\u092A \u0938\u0939\u0940 \u092B\u0949\u0930\u094D\u092E \u0915\u0947 \u0938\u093E\u0925 \u0915\u0947\u0935\u0932 \u090F\u0915 \u092C\u093E\u0930 \u0909\u0920\u093E \u0938\u0915\u0924\u0947 \u0939\u0948\u0902\u0964"
        },
        {
          "question": "\u0907\u092A\u0932\u0940 (Epley) \u0914\u0930 \u092C\u094D\u0930\u091C\u093C\u093F\u0915\u0940 (Brzycki) \u0938\u0942\u0924\u094D\u0930\u094B\u0902 \u092E\u0947\u0902 \u0915\u094D\u092F\u093E \u0905\u0902\u0924\u0930 \u0939\u0948?",
          "answer": "\u0907\u092A\u0932\u0940 \u0938\u0942\u0924\u094D\u0930 1RM = W \xD7 (1 + R/30) \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0924\u093E \u0939\u0948, \u091C\u094B 10 \u0938\u0947 \u0915\u092E \u0930\u0947\u092A\u094D\u0938 \u0915\u0947 \u0932\u093F\u090F \u0905\u0924\u094D\u092F\u0927\u093F\u0915 \u0938\u091F\u0940\u0915 \u0939\u0948\u0964"
        },
        {
          "question": "1RM \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0928\u093E \u0905\u0938\u0932\u0940 1RM \u0909\u0920\u093E\u0928\u0947 \u0938\u0947 \u092C\u0947\u0939\u0924\u0930 \u0915\u094D\u092F\u094B\u0902 \u0939\u0948?",
          "answer": "\u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u092D\u093E\u0930\u0940 \u0935\u091C\u0928 \u0938\u0947 \u0939\u094B\u0928\u0947 \u0935\u093E\u0932\u0940 \u091A\u094B\u091F \u0915\u0947 \u091C\u094B\u0916\u093F\u092E \u0915\u0947 \u092C\u093F\u0928\u093E \u0906\u092A\u0915\u0940 1RM \u0915\u094D\u0937\u092E\u0924\u093E \u0915\u093E \u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924 \u0905\u0928\u0941\u092E\u093E\u0928 \u0926\u0947\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "1RM \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0938\u094D\u091F\u094D\u0930\u0947\u0902\u0925 \u091F\u094D\u0930\u0947\u0928\u093F\u0902\u0917 \u092A\u094D\u0930\u094B\u0917\u094D\u0930\u093E\u092E \u092E\u0947\u0902 \u0915\u0948\u0938\u0947 \u0915\u0930\u0947\u0902?",
          "answer": "\u0906\u092A \u0905\u092A\u0928\u0940 1RM \u0915\u093E 75-85% \u0935\u091C\u0928 \u091A\u0941\u0928\u0915\u0930 6 \u0938\u0947 10 \u0930\u0947\u092A\u094D\u0938 \u0915\u0947 \u0938\u0947\u091F \u0921\u093F\u091C\u093E\u0907\u0928 \u0915\u0930 \u0938\u0915\u0924\u0947 \u0939\u0948\u0902\u0964"
        },
        {
          "question": "1RM \u0928\u093F\u0915\u093E\u0932\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0915\u093F\u0924\u0928\u0947 \u0930\u0947\u092A\u094D\u0938 \u0915\u093E \u0938\u0947\u091F \u0938\u092C\u0938\u0947 \u0905\u091A\u094D\u091B\u093E \u0939\u0948?",
          "answer": "3 \u0938\u0947 6 \u0930\u0947\u092A\u094D\u0938 \u0915\u093E \u092D\u093E\u0930\u0940 \u0938\u0947\u091F 1RM \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u092E\u0947\u0902 \u0938\u092C\u0938\u0947 \u0938\u091F\u0940\u0915 \u092A\u0930\u093F\u0923\u093E\u092E \u0926\u0947\u0924\u093E \u0939\u0948\u0964"
        }
      ]
    }
  },
  "one-rep-max-calculator": {
    "en": {
      "eyebrow": "Epley Strength Reference",
      "title": "Epley 1RM Bench Press Calculator & 1 Rep Max Reference Tool",
      "intro": "Calculate your estimated 1 rep max bench press, squat, and deadlift with our free Epley 1RM Bench Press Calculator. Powered by the Epley 1RM formula equation, estimate your single-rep lifting capacity from submaximal repetition sets.",
      "formulaTitle": "Epley 1RM Mathematical Formula Equation",
      "formulaDesc": "1RM = Weight Lifted in kg/lbs \xD7 (1 + [Reps Performed / 30]) | Brzycki 1RM = Weight Lifted \xD7 [36 / (37 - Reps)]",
      "formulaCode": "1RM = W \xD7 (1 + R / 30)",
      "tableTitle": "1RM Percentage Intensity Training Chart (Bench Press & Powerlifting)",
      "tableRows": [
        {
          "col1": "100% 1RM Baseline",
          "col2": "1 Repetition",
          "col3": "Peak single rep strength capacity estimate"
        },
        {
          "col1": "90% 1RM Load",
          "col2": "3 Repetitions",
          "col3": "Heavy strength building & neural adaptation"
        },
        {
          "col1": "85% 1RM Load",
          "col2": "5 \u2013 6 Repetitions",
          "col3": "Common training use & compound strength (5x5 protocols)"
        },
        {
          "col1": "75% 1RM Load",
          "col2": "10 Repetitions",
          "col3": "Hypertrophy volume & metabolic conditioning"
        },
        {
          "col1": "65% 1RM Load",
          "col2": "15 Repetitions",
          "col3": "Muscular endurance & active recovery sets"
        }
      ],
      "faqs": [
        {
          "question": "What is the Epley 1RM Bench Press Calculator?",
          "answer": "The Epley 1RM Bench Press Calculator is a strength assessment tool created by Boyd Epley in 1985. It calculates your estimated maximum single-rep bench press (1RM) based on submaximal repetition performance."
        },
        {
          "question": "How to calculate 1 rep max bench press using the Epley formula?",
          "answer": "To calculate your 1RM bench press: Lift a manageable weight for submaximal reps (e.g. 100 kg for 5 reps). Multiply 100 by (1 + 5/30), which equals 100 \xD7 1.1667 = 116.7 kg estimated 1RM bench press."
        },
        {
          "question": "How accurate is the Epley 1RM formula pour le d\xE9velopp\xE9 couch\xE9, le squat et le soulev\xE9 de terre?",
          "answer": "Formula-based estimates can differ from actual one-repetition performance. The Epley 1RM formula provides reference estimates para press de banca y sentadilla sets between 2 to 10 repetitions."
        },
        {
          "question": "What is the difference between Epley and Brzycki 1RM formulas?",
          "answer": "The Epley formula (1RM = W \xD7 [1 + R/30]) and Brzycki formula (1RM = W \xD7 [36 / (37 - R)]) are two widely referenced formulas. Epley is commonly used for lower rep ranges (1 to 6 reps), while Brzycki performs well up to 10 reps."
        },
        {
          "question": "Why use a 1RM calculator instead of testing max weight directly?",
          "answer": "Testing true 1RM max weight creates significant spinal and tendon strain during heavy bench press attempts. An Epley 1RM calculator allows lifters to estimate reference target weights using submaximal loads."
        }
      ]
    },
    "es": {
      "eyebrow": "Est\xE1ndares de Referencia de Salud",
      "title": "Epley 1RM Bench Press Calculator & 1 Rep Max Reference Tool \u2013 Gu\xEDa y Calculadora",
      "intro": "Herramienta de c\xE1lculo y referencia educativa dise\xF1ada seg\xFAn los est\xE1ndares de salud publicados de la OMS y CDC. Calcula tus m\xE9tricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "F\xF3rmula de Referencia Est\xE1ndar",
      "formulaDesc": "Calculado utilizando ecuaciones est\xE1ndar validadas.",
      "formulaCode": "1RM = W \xD7 (1 + R / 30)",
      "tableTitle": "Tabla de Referencia Est\xE1ndar",
      "tableRows": [
        {
          "col1": "100% 1RM Fuerza M\xE1xima",
          "col2": "1 Repetition",
          "col3": "Estimaci\xF3n de fuerza m\xE1xima para una sola repetici\xF3n"
        },
        {
          "col1": "90% 1RM Carga Pesada",
          "col2": "3 Repetitions",
          "col3": "Desarrollo de fuerza pesada y adaptaci\xF3n neural"
        },
        {
          "col1": "85% 1RM Desarrollo Fuerza",
          "col2": "5 \u2013 6 Repetitions",
          "col3": "Fuerza b\xE1sica en ejercicios compuestos (protocolo 5x5)"
        },
        {
          "col1": "75% 1RM Hipertrofia",
          "col2": "10 Repetitions",
          "col3": "Volumen de hipertrofia y acondicionamiento metab\xF3lico"
        },
        {
          "col1": "65% 1RM Resistencia Muscular",
          "col2": "15 Repetitions",
          "col3": "Resistencia muscular y series de recuperaci\xF3n activa"
        }
      ],
      "faqs": [
        {
          "question": "\xBFC\xF3mo funciona la calculadora de repetici\xF3n m\xE1xima (1RM) y qu\xE9 mide?",
          "answer": "Esta calculadora eval\xFAa tus datos personales utilizando ecuaciones validadas. Proporciona una estimaci\xF3n educativa para ayudarte a comprender tu estado de salud y referencias est\xE1ndar."
        },
        {
          "question": "C\xF3mo calculate 1 rep max bench press using the Epley formula?",
          "answer": "To calculate your 1RM bench press: Lift a manageable weight for submaximal reps (e.g. 100 kg for 5 reps). Multiply 100 by (1 + 5/30), which equals 100 \xD7 1.1667 = 116.7 kg estimated 1RM bench press."
        },
        {
          "question": "How accurate is the Epley 1RM formula pour le d\xE9velopp\xE9 couch\xE9, le squat et le soulev\xE9 de terre?",
          "answer": "Formula-based estimates can differ from actual one-repetition performance. The Epley 1RM formula provides reference estimates para press de banca y sentadilla sets between 2 to 10 repetitions."
        },
        {
          "question": "\xBFQu\xE9 es el difference between Epley and Brzycki 1RM formulas?",
          "answer": "The Epley formula (1RM = W \xD7 [1 + R/30]) and Brzycki formula (1RM = W \xD7 [36 / (37 - R)]) are two widely referenced formulas. Epley is commonly used for lower rep ranges (1 to 6 reps), while Brzycki performs well up to 10 reps."
        },
        {
          "question": "Why use a 1RM calculator instead of testing max weight directly?",
          "answer": "Testing true 1RM max weight creates significant spinal and tendon strain during heavy bench press attempts. An Epley 1RM calculator allows lifters to estimate reference target weights using submaximal loads."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de R\xE9f\xE9rence de Sant\xE9",
      "title": "Epley 1RM Bench Press Calculator & 1 Rep Max Reference Tool \u2013 Outil de R\xE9f\xE9rence",
      "intro": "Outil de calcul et de r\xE9f\xE9rence \xE9ducatif con\xE7u selon les normes de sant\xE9 publi\xE9es de l'OMS et du CDC. Calculez vos m\xE9triques et consultez les plages de r\xE9f\xE9rence.",
      "formulaTitle": "Formule de R\xE9f\xE9rence Standard",
      "formulaDesc": "Calcul\xE9 \xE0 l'aide d'\xE9quations standards valid\xE9es.",
      "formulaCode": "1RM = W \xD7 (1 + R / 30)",
      "tableTitle": "Tableau de R\xE9f\xE9rence Standard",
      "tableRows": [
        {
          "col1": "100% 1RM Force Maximale",
          "col2": "1 Repetition",
          "col3": "Estimation de la force maximale sur une seule r\xE9p\xE9tition"
        },
        {
          "col1": "90% 1RM Charge Lourde",
          "col2": "3 Repetitions",
          "col3": "Force lourde et adaptation neurale"
        },
        {
          "col1": "85% 1RM D\xE9veloppement Force",
          "col2": "5 \u2013 6 Repetitions",
          "col3": "Force globale sur mouvements de base (protocoles 5x5)"
        },
        {
          "col1": "75% 1RM Hypertrophie",
          "col2": "10 Repetitions",
          "col3": "Volume d'hypertrophie et conditionnement m\xE9tabolique"
        },
        {
          "col1": "65% 1RM Endurance Musculaire",
          "col2": "15 Repetitions",
          "col3": "Endurance musculaire et s\xE9ries de r\xE9cup\xE9ration active"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de r\xE9p\xE9tition maximale (1RM) et que mesure-t-il ?",
          "answer": "Ce calculateur \xE9value vos donn\xE9es personnelles \xE0 l'aide d'\xE9quations valid\xE9es. Il fournit une estimation \xE9ducative pour vous aider \xE0 comprendre vos m\xE9triques et r\xE9f\xE9rences standards."
        },
        {
          "question": "Comment calculate 1 rep max bench press using the Epley formula?",
          "answer": "To calculate your 1RM bench press: Lift a manageable weight for submaximal reps (e.g. 100 kg for 5 reps). Multiply 100 by (1 + 5/30), which equals 100 \xD7 1.1667 = 116.7 kg estimated 1RM bench press."
        },
        {
          "question": "How accurate is the Epley 1RM formula pour le d\xE9velopp\xE9 couch\xE9, le squat et le soulev\xE9 de terre?",
          "answer": "Formula-based estimates can differ from actual one-repetition performance. The Epley 1RM formula provides reference estimates para press de banca y sentadilla sets between 2 to 10 repetitions."
        },
        {
          "question": "Qu'est-ce que le difference between Epley and Brzycki 1RM formulas?",
          "answer": "The Epley formula (1RM = W \xD7 [1 + R/30]) and Brzycki formula (1RM = W \xD7 [36 / (37 - R)]) are two widely referenced formulas. Epley is commonly used for lower rep ranges (1 to 6 reps), while Brzycki performs well up to 10 reps."
        },
        {
          "question": "Why use a 1RM calculator instead of testing max weight directly?",
          "answer": "Testing true 1RM max weight creates significant spinal and tendon strain during heavy bench press attempts. An Epley 1RM calculator allows lifters to estimate reference target weights using submaximal loads."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "Epley 1RM Bench Press Calculator & 1 Rep Max Reference Tool \u2013 Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den ver\xF6ffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und pr\xFCfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardm\xE4\xDFig validierten Gleichungen.",
      "formulaCode": "1RM = W \xD7 (1 + R / 30)",
      "tableTitle": "Standard-Referenztabelle",
      "tableRows": [
        {
          "col1": "100% 1RM Maximalkraft",
          "col2": "1 Repetition",
          "col3": "Sch\xE4tzung der maximalen Maximalkraft (1 Wdh.)"
        },
        {
          "col1": "90% 1RM Schwere Last",
          "col2": "3 Repetitions",
          "col3": "Schwerer Kraftaufbau & neuronale Anpassung"
        },
        {
          "col1": "85% 1RM Kraftaufbau",
          "col2": "5 \u2013 6 Repetitions",
          "col3": "Grundkraft bei Mehrgelenks\xFCbungen (5x5-System)"
        },
        {
          "col1": "75% 1RM Hypertrophie",
          "col2": "10 Repetitions",
          "col3": "Volumen-Hypertrophie & metabolisches Training"
        },
        {
          "col1": "65% 1RM Kraftausdauer",
          "col2": "15 Repetitions",
          "col3": "Kraftausdauer und aktive Erholungss\xE4tze"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der Maximalkraft-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre pers\xF6nlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        },
        {
          "question": "Wie man calculate 1 rep max bench press using the Epley formula?",
          "answer": "To calculate your 1RM bench press: Lift a manageable weight for submaximal reps (e.g. 100 kg for 5 reps). Multiply 100 by (1 + 5/30), which equals 100 \xD7 1.1667 = 116.7 kg estimated 1RM bench press."
        },
        {
          "question": "How accurate is the Epley 1RM formula pour le d\xE9velopp\xE9 couch\xE9, le squat et le soulev\xE9 de terre?",
          "answer": "Formula-based estimates can differ from actual one-repetition performance. The Epley 1RM formula provides reference estimates para press de banca y sentadilla sets between 2 to 10 repetitions."
        },
        {
          "question": "Was ist der difference between Epley and Brzycki 1RM formulas?",
          "answer": "The Epley formula (1RM = W \xD7 [1 + R/30]) and Brzycki formula (1RM = W \xD7 [36 / (37 - R)]) are two widely referenced formulas. Epley is commonly used for lower rep ranges (1 to 6 reps), while Brzycki performs well up to 10 reps."
        },
        {
          "question": "Why use a 1RM calculator instead of testing max weight directly?",
          "answer": "Testing true 1RM max weight creates significant spinal and tendon strain during heavy bench press attempts. An Epley 1RM calculator allows lifters to estimate reference target weights using submaximal loads."
        }
      ]
    },
    "ko": {
      "eyebrow": "\uAC74\uAC15 \uCC38\uC870 \uD45C\uC900 \uC9C0\uCE68",
      "title": "Epley 1RM Bench Press \uACC4\uC0B0\uAE30 & 1 Rep Max Reference \uB3C4\uAD6C \u2013 \uCC38\uC870 \uACC4\uC0B0\uAE30",
      "intro": "WHO \uBC0F CDC \uC9C0\uCE68\uC5D0 \uAE30\uBC18\uD55C \uC2E4\uC2DC\uAC04 \uCC38\uACE0 \uACC4\uC0B0\uAE30\uC785\uB2C8\uB2E4. \uAC1C\uC778\uBCC4 \uC218\uCE58\uB97C \uCE21\uC815\uD558\uACE0 \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uD655\uC778\uD558\uC138\uC694.",
      "formulaTitle": "\uD45C\uC900 \uACC4\uC0B0 \uACF5\uC2DD",
      "formulaDesc": "\uAC80\uC99D\uB41C \uD45C\uC900 \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uACC4\uC0B0\uB429\uB2C8\uB2E4.",
      "formulaCode": "1RM = W \xD7 (1 + R / 30)",
      "tableTitle": "\uD45C\uC900 \uCC38\uC870 \uC9C4\uB2E8\uD45C",
      "tableRows": [
        {
          "col1": "100% 1RM \uCD5C\uB300 \uAE30\uC900",
          "col2": "1 Repetition",
          "col3": "1\uD68C \uCD5C\uB300 \uBC18\uBCF5 \uADFC\uB825 \uCD94\uC815\uCE58"
        },
        {
          "col1": "90% 1RM \uACE0\uBD80\uD558",
          "col2": "3 Repetitions",
          "col3": "\uACE0\uC911\uB7C9 \uADFC\uB825 \uAC15\uD654 \uBC0F \uC2E0\uACBD\uACC4 \uC801\uC751"
        },
        {
          "col1": "85% 1RM \uADFC\uB825 \uD5A5\uC0C1",
          "col2": "5 \u2013 6 Repetitions",
          "col3": "\uBCF5\uD569 \uB2E4\uAD00\uC808 \uC6B4\uB3D9\uC758 \uAE30\uBCF8 \uADFC\uB825 \uD6C8\uB828 (5x5 \uBC29\uC2DD)"
        },
        {
          "col1": "75% 1RM \uADFC\uBE44\uB300",
          "col2": "10 Repetitions",
          "col3": "\uBCFC\uB968 \uADFC\uBE44\uB300 \uBC0F \uB300\uC0AC \uC870\uC808 \uD6C8\uB828"
        },
        {
          "col1": "65% 1RM \uADFC\uC9C0\uAD6C\uB825",
          "col2": "15 Repetitions",
          "col3": "\uADFC\uC9C0\uAD6C\uB825 \uBC0F \uC801\uADF9\uC801 \uD68C\uBCF5 \uC138\uD2B8"
        }
      ],
      "faqs": [
        {
          "question": "\uCD5C\uB300 \uC218\uCD95\uB825 \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uBCF8 \uACC4\uC0B0\uAE30\uB294 \uAC80\uC99D\uB41C \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uAC1C\uC778\uBCC4 \uC2E0\uCCB4 \uC9C0\uC218\uB97C \uC0B0\uCD9C\uD569\uB2C8\uB2E4. \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uBC14\uD0D5\uC73C\uB85C \uAD50\uC721\uC801 \uBD84\uC11D \uACB0\uACFC\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."
        },
        {
          "question": " calculate 1 rep max bench press using the Epley formula? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "To calculate your 1RM bench press: Lift a manageable weight for submaximal reps (e.g. 100 kg for 5 reps). Multiply 100 by (1 + 5/30), which equals 100 \xD7 1.1667 = 116.7 kg estimated 1RM bench press."
        },
        {
          "question": "Epley 1RM \uCD94\uC815 \uACF5\uC2DD\uC758 \uAE30\uBCF8 \uC6D0\uB9AC\uC640 \uC0AC\uC6A9 \uBC29\uBC95\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "Formula-based estimates can differ from actual one-repetition performance. The Epley 1RM formula provides reference estimates para press de banca y sentadilla sets between 2 to 10 repetitions."
        },
        {
          "question": " difference between Epley and Brzycki 1RM formulas? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "The Epley formula (1RM = W \xD7 [1 + R/30]) and Brzycki formula (1RM = W \xD7 [36 / (37 - R)]) are two widely referenced formulas. Epley is commonly used for lower rep ranges (1 to 6 reps), while Brzycki performs well up to 10 reps."
        },
        {
          "question": "Why use a 1RM calculator instead of testing max weight directly? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "Testing true 1RM max weight creates significant spinal and tendon strain during heavy bench press attempts. An Epley 1RM calculator allows lifters to estimate reference target weights using submaximal loads."
        }
      ]
    },
    "hi": {
      "eyebrow": "\u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0938\u0902\u0926\u0930\u094D\u092D \u092E\u093E\u0928\u0915",
      "title": "Epley 1RM Bench Press \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 & 1 Rep Max Reference \u091F\u0942\u0932 \u2013 \u092E\u0941\u092B\u094D\u0924 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930",
      "intro": "\u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u0914\u0930 \u0938\u0940\u0921\u0940\u0938\u0940 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u092E\u093E\u0928\u0915\u094B\u0902 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0928\u093F\u0930\u094D\u092E\u093F\u0924 \u0938\u0902\u0926\u0930\u094D\u092D \u091F\u0942\u0932\u0964 \u0905\u092A\u0928\u0940 \u092E\u0947\u091F\u094D\u0930\u093F\u0915\u094D\u0938 \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902 \u0914\u0930 \u0938\u094D\u0925\u093E\u092A\u093F\u0924 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0938\u0940\u092E\u093E\u0913\u0902 \u0915\u0940 \u0938\u092E\u0940\u0915\u094D\u0937\u093E \u0915\u0930\u0947\u0902\u0964",
      "formulaTitle": "\u092E\u093E\u0928\u0915 \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0942\u0924\u094D\u0930",
      "formulaDesc": "\u092E\u093E\u0928\u0915 \u0938\u0924\u094D\u092F\u093E\u092A\u093F\u0924 \u0938\u092E\u0940\u0915\u0930\u0923\u094B\u0902 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0915\u0947 \u0917\u0923\u0928\u093E \u0915\u0940 \u0917\u0908\u0964",
      "formulaCode": "1RM = W \xD7 (1 + R / 30)",
      "tableTitle": "\u092E\u093E\u0928\u0915 \u0938\u0902\u0926\u0930\u094D\u092D \u0924\u093E\u0932\u093F\u0915\u093E",
      "tableRows": [
        {
          "col1": "100% 1RM \u0905\u0927\u093F\u0915\u0924\u092E \u0936\u0915\u094D\u0924\u093F",
          "col2": "1 Repetition",
          "col3": "\u0905\u0927\u093F\u0915\u0924\u092E \u090F\u0915\u0932 \u092A\u094D\u0930\u0924\u093F\u0928\u093F\u0927\u093F \u0936\u0915\u094D\u0924\u093F \u0915\u094D\u0937\u092E\u0924\u093E \u0905\u0928\u0941\u092E\u093E\u0928"
        },
        {
          "col1": "90% 1RM \u092D\u093E\u0930\u0940 \u092D\u093E\u0930",
          "col2": "3 Repetitions",
          "col3": "\u092D\u093E\u0930\u0940 \u0936\u0915\u094D\u0924\u093F \u0928\u093F\u0930\u094D\u092E\u093E\u0923 \u0914\u0930 \u0924\u0902\u0924\u094D\u0930\u093F\u0915\u093E \u0905\u0928\u0941\u0915\u0942\u0932\u0928"
        },
        {
          "col1": "85% 1RM \u0936\u0915\u094D\u0924\u093F \u0935\u093F\u0915\u093E\u0938",
          "col2": "5 \u2013 6 Repetitions",
          "col3": "\u0938\u0902\u092F\u0941\u0915\u094D\u0924 \u0936\u0915\u094D\u0924\u093F \u0928\u093F\u0930\u094D\u092E\u093E\u0923 \u0914\u0930 5x5 \u092A\u094D\u0930\u094B\u091F\u094B\u0915\u0949\u0932"
        },
        {
          "col1": "75% 1RM \u092E\u093E\u0902\u0938\u092A\u0947\u0936\u0940 \u0935\u0943\u0926\u094D\u0927\u093F",
          "col2": "10 Repetitions",
          "col3": "\u0939\u093E\u0907\u092A\u0930\u091F\u094D\u0930\u0949\u092B\u0940 \u0935\u0949\u0932\u094D\u092F\u0942\u092E \u0914\u0930 \u092E\u0947\u091F\u093E\u092C\u0949\u0932\u093F\u0915 \u0915\u0902\u0921\u0940\u0936\u0928\u093F\u0902\u0917"
        },
        {
          "col1": "65% 1RM \u092E\u093E\u0902\u0938\u092A\u0947\u0936\u0940 \u0927\u0940\u0930\u091C",
          "col2": "15 Repetitions",
          "col3": "\u092E\u093E\u0902\u0938\u092A\u0947\u0936\u093F\u092F\u094B\u0902 \u0915\u0940 \u0938\u0939\u0928\u0936\u0915\u094D\u0924\u093F \u0914\u0930 \u0938\u0915\u094D\u0930\u093F\u092F \u0930\u093F\u0915\u0935\u0930\u0940 \u0938\u0947\u091F"
        }
      ],
      "faqs": [
        {
          "question": "\u092C\u0947\u0902\u091A \u092A\u094D\u0930\u0947\u0938 \u0914\u0930 \u0938\u094D\u0915\u094D\u0935\u093E\u091F \u0915\u0947 \u0932\u093F\u090F 1RM \u0915\u0948\u0938\u0947 \u0928\u093F\u0915\u093E\u0932\u0947\u0902?",
          "answer": "\u0906\u092A\u0928\u0947 \u091C\u093F\u0938 \u0935\u091C\u0928 \u0938\u0947 \u091C\u093F\u0924\u0928\u0947 \u0930\u0947\u092A\u094D\u0938 \u0915\u093F\u090F \u0939\u0948\u0902, \u0909\u0928\u094D\u0939\u0947\u0902 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u092E\u0947\u0902 \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902 \u0914\u0930 \u0905\u092A\u0928\u093E \u0905\u0928\u0941\u092E\u093E\u0928\u093F\u0924 1RM \u0926\u0947\u0916\u0947\u0902\u0964"
        },
        {
          "question": "85% 1RM \u0915\u093E \u0915\u094D\u092F\u093E \u092E\u0924\u0932\u092C \u0939\u0948?",
          "answer": "85% 1RM \u0935\u0939 \u0935\u091C\u0928 \u0939\u0948 \u091C\u093F\u0938\u0938\u0947 \u0906\u092A \u0906\u092E\u0924\u094C\u0930 \u092A\u0930 5 \u0938\u0947 6 \u0930\u0947\u092A\u094D\u0938 \u0915\u093E \u0915\u0921\u093C\u093E \u0938\u0947\u091F \u0915\u0930 \u0938\u0915\u0924\u0947 \u0939\u0948\u0902\u0964"
        },
        {
          "question": "\u0915\u094D\u092F\u093E \u092F\u0939 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u0936\u0941\u0930\u0941\u0906\u0924\u0940 (Beginners) \u0915\u0947 \u0932\u093F\u090F \u0909\u092A\u092F\u0941\u0915\u094D\u0924 \u0939\u0948?",
          "answer": "\u0939\u093E\u0901, \u0936\u0941\u0930\u0941\u0906\u0924\u0940 \u0932\u093F\u092B\u094D\u091F\u0930\u094D\u0938 \u092C\u093F\u0928\u093E \u0905\u0927\u093F\u0915\u0924\u092E \u0935\u091C\u0928 \u0909\u0920\u093E\u090F \u0905\u092A\u0928\u0940 \u0936\u0915\u094D\u0924\u093F \u0938\u0940\u092E\u093E \u0915\u093E \u0905\u0902\u0926\u093E\u091C\u093E \u0932\u0917\u093E \u0938\u0915\u0924\u0947 \u0939\u0948\u0902\u0964"
        },
        {
          "question": "\u0915\u094D\u092F\u093E \u0930\u0947\u092A\u094D\u0938 \u0915\u0940 \u0938\u0902\u0916\u094D\u092F\u093E \u092C\u0922\u093C\u0928\u0947 \u092A\u0930 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u0938\u091F\u0940\u0915 \u0930\u0939\u0924\u093E \u0939\u0948?",
          "answer": "10 \u0938\u0947 \u0905\u0927\u093F\u0915 \u0930\u0947\u092A\u094D\u0938 \u092A\u0930 1RM \u0905\u0928\u0941\u092E\u093E\u0928 \u0915\u0940 \u0938\u091F\u0940\u0915\u0924\u093E \u0925\u094B\u0921\u093C\u0940 \u0915\u092E \u0939\u094B \u091C\u093E\u0924\u0940 \u0939\u0948, \u0907\u0938\u0932\u093F\u090F 3-8 \u0930\u0947\u092A\u094D\u0938 \u0915\u093E \u0921\u0947\u091F\u093E \u0938\u092C\u0938\u0947 \u0905\u091A\u094D\u091B\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u0915\u0948\u0932\u0915\u0941\u0932\u0947\u0936\u0928 \u0915\u0947 \u092C\u093E\u0926 \u092A\u094D\u0930\u094B\u0917\u094D\u0930\u0947\u0938\u093F\u0935 \u0913\u0935\u0930\u0932\u094B\u0921 \u0915\u0948\u0938\u0947 \u0915\u0930\u0947\u0902?",
          "answer": "\u092A\u094D\u0930\u0924\u094D\u092F\u0947\u0915 2-3 \u0938\u092A\u094D\u0924\u093E\u0939 \u092E\u0947\u0902 \u0905\u092A\u0928\u0940 1RM \u0905\u092A\u0921\u0947\u091F \u0915\u0930\u0947\u0902 \u0914\u0930 \u0915\u0938\u0930\u0924 \u092E\u0947\u0902 \u0927\u0940\u0930\u0947-\u0927\u0940\u0930\u0947 \u0935\u091C\u0928 \u092F\u093E \u0930\u0947\u092A\u094D\u0938 \u092C\u0922\u093C\u093E\u090F\u0902\u0964"
        }
      ]
    }
  },
  "pregnancy-weight-gain-calculator": {
    "en": {
      "eyebrow": "Pregnancy Weight Gain Reference",
      "title": "Pregnancy Weight Gain Calculator & Trimester Tracker",
      "intro": "Pregnancy Weight Gain Reference Calculator. Uses published gestational weight-gain reference ranges from the National Academies/IOM and public health guidelines to provide an educational estimate based on pre-pregnancy BMI.",
      "formulaTitle": "IOM Gestational Weight Gain Targets",
      "formulaDesc": "Normal BMI (18.5-24.9): 11.5 - 16.0 kg total (25 - 35 lbs)",
      "tableTitle": "IOM Trimester Target Weight Chart",
      "tableRows": [
        {
          "col1": "Underweight (<18.5)",
          "col2": "12.5 \u2013 18.0 kg (28 - 40 lbs)",
          "col3": "~0.5 kg / week in 2nd/3rd trimester"
        },
        {
          "col1": "Normal BMI (18.5-24.9)",
          "col2": "11.5 \u2013 16.0 kg (25 - 35 lbs)",
          "col3": "~0.4 kg / week in 2nd/3rd trimester"
        },
        {
          "col1": "Overweight (25.0-29.9)",
          "col2": "7.0 \u2013 11.5 kg (15 - 25 lbs)",
          "col3": "~0.3 kg / week in 2nd/3rd trimester"
        }
      ],
      "faqs": [
        {
          "question": "What is the Pregnancy Weight Gain Calculator?",
          "answer": "The Pregnancy Weight Gain Calculator is a reference calculator based on ACOG (American College of Obstetricians and Gynecologists) and IOM (Institute of Medicine) guidance. It provides reference estimates for gestational weight gain based on pre-pregnancy BMI."
        },
        {
          "question": "How to calculate healthy pregnancy weight gain week by week?",
          "answer": "To calculate pregnancy weight gain week by week: Enter your current weight, pre-pregnancy weight, and pregnancy week (1 to 40). For a normal pre-pregnancy BMI (18.5\u201324.9), reference target gain is 1 to 4.5 lbs in the 1st trimester and ~1 lb per week in the 2nd and 3rd trimesters."
        },
        {
          "question": "How much total weight should you gain during pregnancy?",
          "answer": "According to IOM reference guidelines: Underweight (<18.5 BMI) range is 28\u201340 lbs (12.5\u201318 kg); Normal BMI (18.5\u201324.9) range is 25\u201335 lbs (11.5\u201316 kg); Overweight (25\u201329.9 BMI) range is 15\u201325 lbs (7\u201311.5 kg); Obese (\u226530 BMI) range is 11\u201320 lbs (5\u20139 kg)."
        },
        {
          "question": "What is typical first trimester weight gain?",
          "answer": "Most women gain between 0.5 and 2.0 kg (1 to 4.5 lbs) total during the first 12 weeks of pregnancy due to minimal fetal weight growth."
        },
        {
          "question": "Why does pre-pregnancy BMI affect gestational weight targets?",
          "answer": "Pre-pregnancy BMI determines initial energy reserves. Maternal-fetal reference guidelines tailor weight targets based on initial BMI."
        }
      ]
    },
    "es": {
      "eyebrow": "Est\xE1ndares de Referencia de Salud",
      "title": "Calculadora de Aumento de Peso en el Embarazo \u2013 Seguimiento Trimestral \u2013 Gu\xEDa y Calculadora",
      "intro": "Herramienta de c\xE1lculo y referencia educativa dise\xF1ada seg\xFAn los est\xE1ndares de salud publicados de la OMS y CDC. Calcula tus m\xE9tricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "F\xF3rmula de Referencia Est\xE1ndar",
      "formulaDesc": "Calculado utilizando ecuaciones est\xE1ndar validadas.",
      "tableTitle": "Tabla de Referencia Est\xE1ndar",
      "tableRows": [
        {
          "col1": "Bajo peso pregestacional (< 18.5)",
          "col2": "12.5 \u2013 18.0 kg (28 - 40 lbs)",
          "col3": "~0.5 kg / semana en el 2.\xBA y 3.er trimestre"
        },
        {
          "col1": "IMC Normal (18.5\u201324.9)",
          "col2": "11.5 \u2013 16.0 kg (25 - 35 lbs)",
          "col3": "~0.4 kg / semana en el 2.\xBA y 3.er trimestre"
        },
        {
          "col1": "Sobrepeso (25.0\u201329.9)",
          "col2": "7.0 \u2013 11.5 kg (15 - 25 lbs)",
          "col3": "~0.3 kg / semana en el 2.\xBA y 3.er trimestre"
        }
      ],
      "faqs": [
        {
          "question": "\xBFC\xF3mo funciona la calculadora de aumento de peso en el embarazo y qu\xE9 mide?",
          "answer": "Esta calculadora eval\xFAa tus datos personales utilizando ecuaciones validadas. Proporciona una estimaci\xF3n educativa para ayudarte a comprender tu estado de salud y referencias est\xE1ndar."
        },
        {
          "question": "C\xF3mo calculate healthy pregnancy weight gain week by week?",
          "answer": "To calculate pregnancy weight gain week by week: Enter your current weight, pre-pregnancy weight, and pregnancy week (1 to 40). For a normal pre-pregnancy BMI (18.5\u201324.9), reference target gain is 1 to 4.5 lbs in the 1st trimester and ~1 lb per week in the 2nd and 3rd trimesters."
        },
        {
          "question": "How much total weight should you gain during pregnancy?",
          "answer": "According to IOM reference guidelines: Underweight (<18.5 BMI) range is 28\u201340 lbs (12.5\u201318 kg); Normal BMI (18.5\u201324.9) range is 25\u201335 lbs (11.5\u201316 kg); Overweight (25\u201329.9 BMI) range is 15\u201325 lbs (7\u201311.5 kg); Obese (\u226530 BMI) range is 11\u201320 lbs (5\u20139 kg)."
        },
        {
          "question": "\xBFQu\xE9 es typical first trimester weight gain?",
          "answer": "Most women gain between 0.5 and 2.0 kg (1 to 4.5 lbs) total during the first 12 weeks of pregnancy due to minimal fetal weight growth."
        },
        {
          "question": "Why does pre-pregnancy BMI affect gestational weight targets?",
          "answer": "Pre-pregnancy BMI determines initial energy reserves. Maternal-fetal reference guidelines tailor weight targets based on initial BMI."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de R\xE9f\xE9rence de Sant\xE9",
      "title": "Calculateur de Prise de Poids pendant la Grossesse \u2013 Suivi Trimestre \u2013 Outil de R\xE9f\xE9rence",
      "intro": "Outil de calcul et de r\xE9f\xE9rence \xE9ducatif con\xE7u selon les normes de sant\xE9 publi\xE9es de l'OMS et du CDC. Calculez vos m\xE9triques et consultez les plages de r\xE9f\xE9rence.",
      "formulaTitle": "Formule de R\xE9f\xE9rence Standard",
      "formulaDesc": "Calcul\xE9 \xE0 l'aide d'\xE9quations standards valid\xE9es.",
      "tableTitle": "Tableau de R\xE9f\xE9rence Standard",
      "tableRows": [
        {
          "col1": "Insuffisance pond\xE9rale avant grossesse (< 18.5)",
          "col2": "12.5 \u2013 18.0 kg (28 - 40 lbs)",
          "col3": "~0,5 kg / semaine au 2e et 3e trimestre"
        },
        {
          "col1": "IMC Normal (18.5\u201324.9)",
          "col2": "11.5 \u2013 16.0 kg (25 - 35 lbs)",
          "col3": "~0,4 kg / semaine au 2e et 3e trimestre"
        },
        {
          "col1": "Surpoids (25.0\u201329.9)",
          "col2": "7.0 \u2013 11.5 kg (15 - 25 lbs)",
          "col3": "~0,3 kg / semaine au 2e et 3e trimestre"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de prise de poids pendant la grossesse et que mesure-t-il ?",
          "answer": "Ce calculateur \xE9value vos donn\xE9es personnelles \xE0 l'aide d'\xE9quations valid\xE9es. Il fournit une estimation \xE9ducative pour vous aider \xE0 comprendre vos m\xE9triques et r\xE9f\xE9rences standards."
        },
        {
          "question": "Comment calculate healthy pregnancy weight gain week by week?",
          "answer": "To calculate pregnancy weight gain week by week: Enter your current weight, pre-pregnancy weight, and pregnancy week (1 to 40). For a normal pre-pregnancy BMI (18.5\u201324.9), reference target gain is 1 to 4.5 lbs in the 1st trimester and ~1 lb per week in the 2nd and 3rd trimesters."
        },
        {
          "question": "How much total weight should you gain during pregnancy?",
          "answer": "According to IOM reference guidelines: Underweight (<18.5 BMI) range is 28\u201340 lbs (12.5\u201318 kg); Normal BMI (18.5\u201324.9) range is 25\u201335 lbs (11.5\u201316 kg); Overweight (25\u201329.9 BMI) range is 15\u201325 lbs (7\u201311.5 kg); Obese (\u226530 BMI) range is 11\u201320 lbs (5\u20139 kg)."
        },
        {
          "question": "Qu'est-ce que typical first trimester weight gain?",
          "answer": "Most women gain between 0.5 and 2.0 kg (1 to 4.5 lbs) total during the first 12 weeks of pregnancy due to minimal fetal weight growth."
        },
        {
          "question": "Why does pre-pregnancy BMI affect gestational weight targets?",
          "answer": "Pre-pregnancy BMI determines initial energy reserves. Maternal-fetal reference guidelines tailor weight targets based on initial BMI."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "Schwangerschafts-Gewichtszunahme Rechner \u2013 Trimester-Tracking \u2013 Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den ver\xF6ffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und pr\xFCfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardm\xE4\xDFig validierten Gleichungen.",
      "tableTitle": "Standard-Referenztabelle",
      "tableRows": [
        {
          "col1": "Untergewicht vor Schwangerschaft (< 18.5)",
          "col2": "12.5 \u2013 18.0 kg (28 - 40 lbs)",
          "col3": "~0,5 kg / Woche im 2. und 3. Trimester"
        },
        {
          "col1": "Normalgewicht (18.5\u201324.9)",
          "col2": "11.5 \u2013 16.0 kg (25 - 35 lbs)",
          "col3": "~0,4 kg / Woche im 2. und 3. Trimester"
        },
        {
          "col1": "\xDCbergewicht (25.0\u201329.9)",
          "col2": "7.0 \u2013 11.5 kg (15 - 25 lbs)",
          "col3": "~0,3 kg / Woche im 2. und 3. Trimester"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der Schwangerschaftsgewichts-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre pers\xF6nlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        },
        {
          "question": "Wie man calculate healthy pregnancy weight gain week by week?",
          "answer": "To calculate pregnancy weight gain week by week: Enter your current weight, pre-pregnancy weight, and pregnancy week (1 to 40). For a normal pre-pregnancy BMI (18.5\u201324.9), reference target gain is 1 to 4.5 lbs in the 1st trimester and ~1 lb per week in the 2nd and 3rd trimesters."
        },
        {
          "question": "How much total weight should you gain during pregnancy?",
          "answer": "According to IOM reference guidelines: Underweight (<18.5 BMI) range is 28\u201340 lbs (12.5\u201318 kg); Normal BMI (18.5\u201324.9) range is 25\u201335 lbs (11.5\u201316 kg); Overweight (25\u201329.9 BMI) range is 15\u201325 lbs (7\u201311.5 kg); Obese (\u226530 BMI) range is 11\u201320 lbs (5\u20139 kg)."
        },
        {
          "question": "Was ist typical first trimester weight gain?",
          "answer": "Most women gain between 0.5 and 2.0 kg (1 to 4.5 lbs) total during the first 12 weeks of pregnancy due to minimal fetal weight growth."
        },
        {
          "question": "Why does pre-pregnancy BMI affect gestational weight targets?",
          "answer": "Pre-pregnancy BMI determines initial energy reserves. Maternal-fetal reference guidelines tailor weight targets based on initial BMI."
        }
      ]
    },
    "ko": {
      "eyebrow": "\uAC74\uAC15 \uCC38\uC870 \uD45C\uC900 \uC9C0\uCE68",
      "title": "\uC784\uC2E0 \uC911 \uCCB4\uC911 \uC99D\uAC00 \uACC4\uC0B0\uAE30 \u2013 \uBD84\uAE30\uBCC4 \uCCB4\uC911 \uC99D\uAC00 \uAD8C\uC7A5 \uBC94\uC704",
      "intro": "WHO \uBC0F CDC \uC9C0\uCE68\uC5D0 \uAE30\uBC18\uD55C \uC2E4\uC2DC\uAC04 \uCC38\uACE0 \uACC4\uC0B0\uAE30\uC785\uB2C8\uB2E4. \uAC1C\uC778\uBCC4 \uC218\uCE58\uB97C \uCE21\uC815\uD558\uACE0 \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uD655\uC778\uD558\uC138\uC694.",
      "formulaTitle": "\uD45C\uC900 \uACC4\uC0B0 \uACF5\uC2DD",
      "formulaDesc": "\uAC80\uC99D\uB41C \uD45C\uC900 \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uACC4\uC0B0\uB429\uB2C8\uB2E4.",
      "tableTitle": "\uD45C\uC900 \uCC38\uC870 \uC9C4\uB2E8\uD45C",
      "tableRows": [
        {
          "col1": "\uC784\uC2E0 \uC804 \uC800\uCCB4\uC911 (< 18.5)",
          "col2": "12.5 \u2013 18.0 kg (28 - 40 lbs)",
          "col3": "\uC784\uC2E0 2/3\uBD84\uAE30 \uC8FC\uB2F9 \uC57D 0.5kg"
        },
        {
          "col1": "\uC815\uC0C1 BMI (18.5\u201324.9)",
          "col2": "11.5 \u2013 16.0 kg (25 - 35 lbs)",
          "col3": "\uC784\uC2E0 2/3\uBD84\uAE30 \uC8FC\uB2F9 \uC57D 0.4kg"
        },
        {
          "col1": "\uACFC\uCCB4\uC911 (25.0\u201329.9)",
          "col2": "7.0 \u2013 11.5 kg (15 - 25 lbs)",
          "col3": "\uC784\uC2E0 2/3\uBD84\uAE30 \uC8FC\uB2F9 \uC57D 0.3kg"
        }
      ],
      "faqs": [
        {
          "question": "\uC784\uC2E0 \uC911 \uCCB4\uC911 \uC99D\uAC00 \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uBCF8 \uACC4\uC0B0\uAE30\uB294 \uAC80\uC99D\uB41C \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uAC1C\uC778\uBCC4 \uC2E0\uCCB4 \uC9C0\uC218\uB97C \uC0B0\uCD9C\uD569\uB2C8\uB2E4. \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uBC14\uD0D5\uC73C\uB85C \uAD50\uC721\uC801 \uBD84\uC11D \uACB0\uACFC\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."
        },
        {
          "question": " calculate healthy pregnancy weight gain week by week? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "To calculate pregnancy weight gain week by week: Enter your current weight, pre-pregnancy weight, and pregnancy week (1 to 40). For a normal pre-pregnancy BMI (18.5\u201324.9), reference target gain is 1 to 4.5 lbs in the 1st trimester and ~1 lb per week in the 2nd and 3rd trimesters."
        },
        {
          "question": "How much total weight should you gain during pregnancy? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "According to IOM reference guidelines: Underweight (<18.5 BMI) range is 28\u201340 lbs (12.5\u201318 kg); Normal BMI (18.5\u201324.9) range is 25\u201335 lbs (11.5\u201316 kg); Overweight (25\u201329.9 BMI) range is 15\u201325 lbs (7\u201311.5 kg); Obese (\u226530 BMI) range is 11\u201320 lbs (5\u20139 kg)."
        },
        {
          "question": " typical first trimester weight gain? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "Most women gain between 0.5 and 2.0 kg (1 to 4.5 lbs) total during the first 12 weeks of pregnancy due to minimal fetal weight growth."
        },
        {
          "question": "Why does pre-pregnancy BMI affect gestational weight targets? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "Pre-pregnancy BMI determines initial energy reserves. Maternal-fetal reference guidelines tailor weight targets based on initial BMI."
        }
      ]
    },
    "hi": {
      "eyebrow": "\u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0938\u0902\u0926\u0930\u094D\u092D \u092E\u093E\u0928\u0915",
      "title": "\u0917\u0930\u094D\u092D\u093E\u0935\u0938\u094D\u0925\u093E \u092E\u0947\u0902 \u0935\u091C\u0928 \u0935\u0943\u0926\u094D\u0927\u093F \u0915\u093E \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u2013 \u0924\u093F\u092E\u093E\u0939\u0940 \u091F\u094D\u0930\u0948\u0915\u093F\u0902\u0917",
      "intro": "\u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u0914\u0930 \u0938\u0940\u0921\u0940\u0938\u0940 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u092E\u093E\u0928\u0915\u094B\u0902 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0928\u093F\u0930\u094D\u092E\u093F\u0924 \u0938\u0902\u0926\u0930\u094D\u092D \u091F\u0942\u0932\u0964 \u0905\u092A\u0928\u0940 \u092E\u0947\u091F\u094D\u0930\u093F\u0915\u094D\u0938 \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902 \u0914\u0930 \u0938\u094D\u0925\u093E\u092A\u093F\u0924 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0938\u0940\u092E\u093E\u0913\u0902 \u0915\u0940 \u0938\u092E\u0940\u0915\u094D\u0937\u093E \u0915\u0930\u0947\u0902\u0964",
      "formulaTitle": "\u092E\u093E\u0928\u0915 \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0942\u0924\u094D\u0930",
      "formulaDesc": "\u092E\u093E\u0928\u0915 \u0938\u0924\u094D\u092F\u093E\u092A\u093F\u0924 \u0938\u092E\u0940\u0915\u0930\u0923\u094B\u0902 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0915\u0947 \u0917\u0923\u0928\u093E \u0915\u0940 \u0917\u0908\u0964",
      "tableTitle": "\u092E\u093E\u0928\u0915 \u0938\u0902\u0926\u0930\u094D\u092D \u0924\u093E\u0932\u093F\u0915\u093E",
      "tableRows": [
        {
          "col1": "\u0917\u0930\u094D\u092D\u093E\u0935\u0938\u094D\u0925\u093E \u092A\u0942\u0930\u094D\u0935 \u0915\u092E \u0935\u091C\u0928 (< 18.5)",
          "col2": "12.5 \u2013 18.0 kg (28 - 40 lbs)",
          "col3": "\u0926\u0942\u0938\u0930\u0940/\u0924\u0940\u0938\u0930\u0940 \u0924\u093F\u092E\u093E\u0939\u0940 \u092E\u0947\u0902 ~0.5 \u0915\u093F\u0917\u094D\u0930\u093E/\u0938\u092A\u094D\u0924\u093E\u0939"
        },
        {
          "col1": "\u0938\u093E\u092E\u093E\u0928\u094D\u092F \u092C\u0940\u090F\u092E\u0906\u0908 (18.5\u201324.9)",
          "col2": "11.5 \u2013 16.0 kg (25 - 35 lbs)",
          "col3": "\u0926\u0942\u0938\u0930\u0940/\u0924\u0940\u0938\u0930\u0940 \u0924\u093F\u092E\u093E\u0939\u0940 \u092E\u0947\u0902 ~0.4 \u0915\u093F\u0917\u094D\u0930\u093E/\u0938\u092A\u094D\u0924\u093E\u0939"
        },
        {
          "col1": "\u0905\u0927\u093F\u0915 \u0935\u091C\u0928 (25.0\u201329.9)",
          "col2": "7.0 \u2013 11.5 kg (15 - 25 lbs)",
          "col3": "\u0926\u0942\u0938\u0930\u0940/\u0924\u0940\u0938\u0930\u0940 \u0924\u093F\u092E\u093E\u0939\u0940 \u092E\u0947\u0902 ~0.3 \u0915\u093F\u0917\u094D\u0930\u093E/\u0938\u092A\u094D\u0924\u093E\u0939"
        }
      ],
      "faqs": [
        {
          "question": "\u0917\u0930\u094D\u092D\u093E\u0935\u0938\u094D\u0925\u093E \u0915\u0947 \u0926\u094C\u0930\u093E\u0928 \u0915\u093F\u0924\u0928\u093E \u0935\u091C\u0928 \u092C\u0922\u093C\u0928\u093E \u0938\u093E\u092E\u093E\u0928\u094D\u092F \u0939\u0948?",
          "answer": "ACOG \u0914\u0930 IOM \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0938\u093E\u092E\u093E\u0928\u094D\u092F \u092C\u0940\u090F\u092E\u0906\u0908 \u0935\u093E\u0932\u0940 \u092E\u0939\u093F\u0932\u093E\u0913\u0902 \u0915\u0947 \u0932\u093F\u090F \u0915\u0941\u0932 11.5 \u0938\u0947 16 \u0915\u093F\u0917\u094D\u0930\u093E (25-35 lbs) \u0935\u091C\u0928 \u092C\u0922\u093C\u0928\u093E recommended \u0939\u0948\u0964"
        },
        {
          "question": "\u0917\u0930\u094D\u092D\u093E\u0935\u0938\u094D\u0925\u093E \u0938\u0947 \u092A\u0939\u0932\u0947 \u0915\u093E \u092C\u0940\u090F\u092E\u0906\u0908 \u0935\u091C\u0928 \u0935\u0943\u0926\u094D\u0927\u093F \u0915\u094B \u0915\u0948\u0938\u0947 \u092A\u094D\u0930\u092D\u093E\u0935\u093F\u0924 \u0915\u0930\u0924\u093E \u0939\u0948?",
          "answer": "\u0915\u092E \u092C\u0940\u090F\u092E\u0906\u0908 \u0935\u093E\u0932\u0940 \u092E\u0939\u093F\u0932\u093E\u0913\u0902 \u0915\u094B \u0905\u0927\u093F\u0915 \u0935\u091C\u0928 (12.5-18 \u0915\u093F\u0917\u094D\u0930\u093E) \u0914\u0930 \u0905\u0927\u093F\u0915 \u092C\u0940\u090F\u092E\u0906\u0908 \u0935\u093E\u0932\u0940 \u092E\u0939\u093F\u0932\u093E\u0913\u0902 \u0915\u094B \u0915\u092E \u0935\u091C\u0928 (7-11.5 \u0915\u093F\u0917\u094D\u0930\u093E) \u0915\u0940 \u0938\u0932\u093E\u0939 \u0926\u0940 \u091C\u093E\u0924\u0940 \u0939\u0948\u0964"
        },
        {
          "question": "\u0924\u0940\u0938\u0930\u0940 \u0924\u093F\u092E\u093E\u0939\u0940 (3rd Trimester) \u092E\u0947\u0902 \u092A\u094D\u0930\u0924\u093F \u0938\u092A\u094D\u0924\u093E\u0939 \u0915\u093F\u0924\u0928\u093E \u0935\u091C\u0928 \u092C\u0922\u093C\u0928\u093E \u091A\u093E\u0939\u093F\u090F?",
          "answer": "\u0926\u0942\u0938\u0930\u0940 \u0914\u0930 \u0924\u0940\u0938\u0930\u0940 \u0924\u093F\u092E\u093E\u0939\u0940 \u092E\u0947\u0902 \u0914\u0938\u0924\u0928 0.4 \u0915\u093F\u0917\u094D\u0930\u093E (1 \u092A\u093E\u0909\u0902\u0921) \u092A\u094D\u0930\u0924\u093F \u0938\u092A\u094D\u0924\u093E\u0939 \u0935\u091C\u0928 \u092C\u0922\u093C\u0928\u093E \u0938\u093E\u092E\u093E\u0928\u094D\u092F \u0938\u0902\u0926\u0930\u094D\u092D \u0939\u0948\u0964"
        },
        {
          "question": "\u0915\u094D\u092F\u093E \u091C\u0941\u0921\u093C\u0935\u093E\u0902 \u092C\u091A\u094D\u091A\u094B\u0902 (Twins) \u0915\u0940 \u0917\u0930\u094D\u092D\u093E\u0935\u0938\u094D\u0925\u093E \u092E\u0947\u0902 \u0935\u091C\u0928 \u0938\u0940\u092E\u093E \u0905\u0932\u0917 \u0939\u094B\u0924\u0940 \u0939\u0948?",
          "answer": "\u0939\u093E\u0901, \u091C\u0941\u0921\u093C\u0935\u093E\u0902 \u092C\u091A\u094D\u091A\u094B\u0902 \u0915\u0940 \u0917\u0930\u094D\u092D\u093E\u0935\u0938\u094D\u0925\u093E \u092E\u0947\u0902 \u0938\u093E\u092E\u093E\u0928\u094D\u092F \u092C\u0940\u090F\u092E\u0906\u0908 \u0935\u093E\u0932\u0940 \u092E\u0939\u093F\u0932\u093E\u0913\u0902 \u0915\u0947 \u0932\u093F\u090F 17 \u0938\u0947 25 \u0915\u093F\u0917\u094D\u0930\u093E \u0935\u091C\u0928 \u0935\u0943\u0926\u094D\u0927\u093F \u0915\u0940 \u0938\u093F\u092B\u093E\u0930\u093F\u0936 \u0915\u0940 \u091C\u093E\u0924\u0940 \u0939\u0948\u0964"
        },
        {
          "question": "\u0917\u0930\u094D\u092D\u093E\u0935\u0938\u094D\u0925\u093E \u092E\u0947\u0902 \u0905\u091A\u093E\u0928\u0915 \u0935\u091C\u0928 \u092C\u0922\u093C\u0928\u0947 \u092A\u0930 \u0915\u094D\u092F\u093E \u0915\u0930\u0947\u0902?",
          "answer": "\u092F\u0926\u093F \u0935\u091C\u0928 \u092C\u0939\u0941\u0924 \u0924\u0947\u091C\u0940 \u0938\u0947 \u092C\u0922\u093C\u0924\u093E \u092F\u093E \u0918\u091F\u0924\u093E \u0939\u0948, \u0924\u094B \u0924\u0941\u0930\u0902\u0924 \u0905\u092A\u0928\u0940 \u0938\u094D\u0924\u094D\u0930\u0940 \u0930\u094B\u0917 \u0935\u093F\u0936\u0947\u0937\u091C\u094D\u091E (Obstetrician) \u0938\u0947 \u0938\u0932\u093E\u0939 \u0932\u0947\u0902\u0964"
        }
      ]
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  seoDatabase,
  tableUi
});
