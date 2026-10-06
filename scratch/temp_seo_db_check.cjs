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
  seoDatabase: () => seoDatabase,
  tableUi: () => tableUi
});
module.exports = __toCommonJS(stdin_exports);
const tableUi = {
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
const seoDatabase = {
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
          "col3": " (Asian cutoff: 23.0 kg/m\xB2)"
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
          "col1": "\uC800\uCCB4\uC911 (Underweight)",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "\uC800\uCCB4\uC911 \uCC38\uC870 \uBC94\uC704"
        },
        {
          "col1": "\uC815\uC0C1 \uCCB4\uC911 (Healthy Weight)",
          "col2": "18.5 \u2013 24.9 kg/m\xB2",
          "col3": "\uC815\uC0C1 \uCCB4\uC911 \uCC38\uC870 \uBC94\uC704"
        },
        {
          "col1": "\uACFC\uCCB4\uC911 (Overweight)",
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
          "col1": "\u0915\u092E \u0935\u091C\u0928 (Underweight)",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "\u0915\u092E \u0935\u091C\u0928 \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E"
        },
        {
          "col1": "\u0938\u093E\u092E\u093E\u0928\u094D\u092F \u0935\u091C\u0928 (Healthy Weight)",
          "col2": "18.5 \u2013 24.9 kg/m\xB2",
          "col3": "\u0938\u093E\u092E\u093E\u0928\u094D\u092F \u0935\u091C\u0928 \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E"
        },
        {
          "col1": "\u0905\u0927\u093F\u0915 \u0935\u091C\u0928 (Overweight)",
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
          "col3": "3D \u092B\u0949\u0930\u094D\u092E\u0942\u0932\u093E 3D \u0906\u092F\u0924\u0928 (Volume) \u0915\u094B \u0938\u0902\u0924\u0941\u0932\u093F\u0924 \u0915\u0930\u0924\u093E \u0939\u0948"
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
          "col3": "Mild underweight reference threshold"
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
          "question": "Is the BMI chart for men different from the BMI chart for women?",
          "answer": "The WHO adult BMI chart uses identical cutoff numbers (18.5 to 24.9 for normal weight) for both adult men and women. However, because women naturally carry higher body fat percentages, waist measurements and body composition testing provide additional context."
        },
        {
          "question": "How does the BMI chart by age work for adults vs seniors?",
          "answer": "Standard WHO BMI categories apply to all adults aged 20 and older. However, research suggests that for seniors over age 65, a slightly higher BMI (23.0 to 27.0 kg/m\xB2) may protect against bone density loss and frailty."
        },
        {
          "question": "What is the BMI chart in kg and cm?",
          "answer": "A metric BMI chart lists height in centimeters (cm) and weight in kilograms (kg). For example: Height 170 cm with Weight 65 kg yields a BMI of 22.5 kg/m\xB2 (Healthy Weight)."
        },
        {
          "question": "What are the main BMI categories on the official chart?",
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
          "col3": "Rango de referencia Severe underweight risk threshold"
        },
        {
          "col1": "Categor\xEDa / Nivel 2",
          "col2": "16.0 \u2013 16.9 kg/m\xB2",
          "col3": "Rango de referencia Moderate underweight rango de referencia"
        },
        {
          "col1": "Categor\xEDa / Nivel 3",
          "col2": "17.0 \u2013 18.4 kg/m\xB2",
          "col3": "Rango de referencia Mild underweight reference threshold"
        },
        {
          "col1": "Categor\xEDa / Nivel 4",
          "col2": "18.5 \u2013 24.9 kg/m\xB2",
          "col3": "Rango de referencia Optimal healthy baseline range for adults"
        },
        {
          "col1": "Categor\xEDa / Nivel 5",
          "col2": "25.0 \u2013 29.9 kg/m\xB2",
          "col3": "Rango de referencia Overweight rango de referencia (Asian cutoff: 23.0 kg/m\xB2)"
        },
        {
          "col1": "Categor\xEDa / Nivel 6",
          "col2": "30.0 \u2013 34.9 kg/m\xB2",
          "col3": "Rango de referencia Class I obesity screening reference"
        },
        {
          "col1": "Categor\xEDa / Nivel 7",
          "col2": "35.0 \u2013 39.9 kg/m\xB2",
          "col3": "Rango de referencia Class II obesity screening reference"
        },
        {
          "col1": "Categor\xEDa / Nivel 8",
          "col2": "\u2265 40.0 kg/m\xB2",
          "col3": "Rango de referencia Severe Class III obesity screening threshold"
        }
      ],
      "faqs": [
        {
          "question": "\xBFC\xF3mo funciona la calculadora de bmi chart y qu\xE9 mide?",
          "answer": "Esta calculadora eval\xFAa tus datos personales utilizando ecuaciones validadas. Proporciona una estimaci\xF3n educativa para ayudarte a comprender tu estado de salud y referencias est\xE1ndar."
        },
        {
          "question": "Is the BMI chart for men different from the BMI chart for women?",
          "answer": "The WHO adult BMI chart uses identical cutoff numbers (18.5 to 24.9 for normal weight) for both adult men and women. However, because women naturally carry higher body fat percentages, waist measurements and body composition testing provide additional context."
        },
        {
          "question": "How does the BMI chart by age work for adults vs seniors?",
          "answer": "Standard WHO BMI categories apply to all adults aged 20 and older. However, research suggests that for seniors over age 65, a slightly higher BMI (23.0 to 27.0 kg/m\xB2) may protect against bone density loss and frailty."
        },
        {
          "question": "\xBFQu\xE9 es el BMI chart in kg and cm?",
          "answer": "A metric BMI chart lists height in centimeters (cm) and weight in kilograms (kg). For example: Height 170 cm with Weight 65 kg yields a BMI of 22.5 kg/m\xB2 (Healthy Weight)."
        },
        {
          "question": "What are the main BMI categories on the official chart?",
          "answer": "The official WHO BMI categories are: Underweight (< 18.5), Normal Weight (18.5 \u2013 24.9), Overweight (25.0 \u2013 29.9), Obese Class I (30.0 \u2013 34.9), Obese Class II (35.0 \u2013 39.9), and Obese Class III (\u2265 40.0)."
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
          "col1": "Cat\xE9gorie / Niveau 1",
          "col2": "< 16.0 kg/m\xB2",
          "col3": "Plage de r\xE9f\xE9rence Severe underweight risk threshold"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 2",
          "col2": "16.0 \u2013 16.9 kg/m\xB2",
          "col3": "Plage de r\xE9f\xE9rence Moderate underweight plage de r\xE9f\xE9rence"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 3",
          "col2": "17.0 \u2013 18.4 kg/m\xB2",
          "col3": "Plage de r\xE9f\xE9rence Mild underweight reference threshold"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 4",
          "col2": "18.5 \u2013 24.9 kg/m\xB2",
          "col3": "Plage de r\xE9f\xE9rence Optimal healthy baseline range for adults"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 5",
          "col2": "25.0 \u2013 29.9 kg/m\xB2",
          "col3": "Plage de r\xE9f\xE9rence Overweight plage de r\xE9f\xE9rence (Asian cutoff: 23.0 kg/m\xB2)"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 6",
          "col2": "30.0 \u2013 34.9 kg/m\xB2",
          "col3": "Plage de r\xE9f\xE9rence Class I obesity screening reference"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 7",
          "col2": "35.0 \u2013 39.9 kg/m\xB2",
          "col3": "Plage de r\xE9f\xE9rence Class II obesity screening reference"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 8",
          "col2": "\u2265 40.0 kg/m\xB2",
          "col3": "Plage de r\xE9f\xE9rence Severe Class III obesity screening threshold"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de bmi chart et que mesure-t-il ?",
          "answer": "Ce calculateur \xE9value vos donn\xE9es personnelles \xE0 l'aide d'\xE9quations valid\xE9es. Il fournit une estimation \xE9ducative pour vous aider \xE0 comprendre vos m\xE9triques et r\xE9f\xE9rences standards."
        },
        {
          "question": "Is the BMI chart for men different from the BMI chart for women?",
          "answer": "The WHO adult BMI chart uses identical cutoff numbers (18.5 to 24.9 for normal weight) for both adult men and women. However, because women naturally carry higher body fat percentages, waist measurements and body composition testing provide additional context."
        },
        {
          "question": "How does the BMI chart by age work for adults vs seniors?",
          "answer": "Standard WHO BMI categories apply to all adults aged 20 and older. However, research suggests that for seniors over age 65, a slightly higher BMI (23.0 to 27.0 kg/m\xB2) may protect against bone density loss and frailty."
        },
        {
          "question": "Qu'est-ce que le BMI chart in kg and cm?",
          "answer": "A metric BMI chart lists height in centimeters (cm) and weight in kilograms (kg). For example: Height 170 cm with Weight 65 kg yields a BMI of 22.5 kg/m\xB2 (Healthy Weight)."
        },
        {
          "question": "What are the main BMI categories on the official chart?",
          "answer": "The official WHO BMI categories are: Underweight (< 18.5), Normal Weight (18.5 \u2013 24.9), Overweight (25.0 \u2013 29.9), Obese Class I (30.0 \u2013 34.9), Obese Class II (35.0 \u2013 39.9), and Obese Class III (\u2265 40.0)."
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
          "col3": "Referenzbereich Severe underweight risk threshold"
        },
        {
          "col1": "Kategorie / Stufe 2",
          "col2": "16.0 \u2013 16.9 kg/m\xB2",
          "col3": "Referenzbereich Moderate underweight Referenzbereich"
        },
        {
          "col1": "Kategorie / Stufe 3",
          "col2": "17.0 \u2013 18.4 kg/m\xB2",
          "col3": "Referenzbereich Mild underweight reference threshold"
        },
        {
          "col1": "Kategorie / Stufe 4",
          "col2": "18.5 \u2013 24.9 kg/m\xB2",
          "col3": "Referenzbereich Optimal healthy baseline range for adults"
        },
        {
          "col1": "Kategorie / Stufe 5",
          "col2": "25.0 \u2013 29.9 kg/m\xB2",
          "col3": "Referenzbereich Overweight Referenzbereich (Asian cutoff: 23.0 kg/m\xB2)"
        },
        {
          "col1": "Kategorie / Stufe 6",
          "col2": "30.0 \u2013 34.9 kg/m\xB2",
          "col3": "Referenzbereich Class I obesity screening reference"
        },
        {
          "col1": "Kategorie / Stufe 7",
          "col2": "35.0 \u2013 39.9 kg/m\xB2",
          "col3": "Referenzbereich Class II obesity screening reference"
        },
        {
          "col1": "Kategorie / Stufe 8",
          "col2": "\u2265 40.0 kg/m\xB2",
          "col3": "Referenzbereich Severe Class III obesity screening threshold"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der bmi chart-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre pers\xF6nlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        },
        {
          "question": "Is the BMI chart for men different from the BMI chart for women?",
          "answer": "The WHO adult BMI chart uses identical cutoff numbers (18.5 to 24.9 for normal weight) for both adult men and women. However, because women naturally carry higher body fat percentages, waist measurements and body composition testing provide additional context."
        },
        {
          "question": "How does the BMI chart by age work for adults vs seniors?",
          "answer": "Standard WHO BMI categories apply to all adults aged 20 and older. However, research suggests that for seniors over age 65, a slightly higher BMI (23.0 to 27.0 kg/m\xB2) may protect against bone density loss and frailty."
        },
        {
          "question": "Was ist der BMI chart in kg and cm?",
          "answer": "A metric BMI chart lists height in centimeters (cm) and weight in kilograms (kg). For example: Height 170 cm with Weight 65 kg yields a BMI of 22.5 kg/m\xB2 (Healthy Weight)."
        },
        {
          "question": "What are the main BMI categories on the official chart?",
          "answer": "The official WHO BMI categories are: Underweight (< 18.5), Normal Weight (18.5 \u2013 24.9), Overweight (25.0 \u2013 29.9), Obese Class I (30.0 \u2013 34.9), Obese Class II (35.0 \u2013 39.9), and Obese Class III (\u2265 40.0)."
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
          "col3": "\uCC38\uC870 \uBC94\uC704 Severe underweight risk threshold"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 2",
          "col2": "16.0 \u2013 16.9 kg/m\xB2",
          "col3": "\uCC38\uC870 \uBC94\uC704 Moderate underweight \uCC38\uC870 \uBC94\uC704"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 3",
          "col2": "17.0 \u2013 18.4 kg/m\xB2",
          "col3": "\uCC38\uC870 \uBC94\uC704 Mild underweight reference threshold"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 4",
          "col2": "18.5 \u2013 24.9 kg/m\xB2",
          "col3": "\uCC38\uC870 \uBC94\uC704 Optimal healthy baseline range for adults"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 5",
          "col2": "25.0 \u2013 29.9 kg/m\xB2",
          "col3": "\uCC38\uC870 \uBC94\uC704 Overweight \uCC38\uC870 \uBC94\uC704 (Asian cutoff: 23.0 kg/m\xB2)"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 6",
          "col2": "30.0 \u2013 34.9 kg/m\xB2",
          "col3": "\uCC38\uC870 \uBC94\uC704 Class I obesity screening reference"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 7",
          "col2": "35.0 \u2013 39.9 kg/m\xB2",
          "col3": "\uCC38\uC870 \uBC94\uC704 Class II obesity screening reference"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 8",
          "col2": "\u2265 40.0 kg/m\xB2",
          "col3": "\uCC38\uC870 \uBC94\uC704 Severe Class III obesity screening threshold"
        }
      ],
      "faqs": [
        {
          "question": "bmi chart \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uBCF8 \uACC4\uC0B0\uAE30\uB294 \uAC80\uC99D\uB41C \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uAC1C\uC778\uBCC4 \uC2E0\uCCB4 \uC9C0\uC218\uB97C \uC0B0\uCD9C\uD569\uB2C8\uB2E4. \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uBC14\uD0D5\uC73C\uB85C \uAD50\uC721\uC801 \uBD84\uC11D \uACB0\uACFC\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."
        },
        {
          "question": "Is the BMI chart for men different from the BMI chart for women? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "The WHO adult BMI chart uses identical cutoff numbers (18.5 to 24.9 for normal weight) for both adult men and women. However, because women naturally carry higher body fat percentages, waist measurements and body composition testing provide additional context."
        },
        {
          "question": "How does the BMI chart by age work for adults vs seniors? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "Standard WHO BMI categories apply to all adults aged 20 and older. However, research suggests that for seniors over age 65, a slightly higher BMI (23.0 to 27.0 kg/m\xB2) may protect against bone density loss and frailty."
        },
        {
          "question": " BMI chart in kg and cm? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "A metric BMI chart lists height in centimeters (cm) and weight in kilograms (kg). For example: Height 170 cm with Weight 65 kg yields a BMI of 22.5 kg/m\xB2 (Healthy Weight)."
        },
        {
          "question": "What are the main BMI categories on the official chart? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "The official WHO BMI categories are: Underweight (< 18.5), Normal Weight (18.5 \u2013 24.9), Overweight (25.0 \u2013 29.9), Obese Class I (30.0 \u2013 34.9), Obese Class II (35.0 \u2013 39.9), and Obese Class III (\u2265 40.0)."
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
          "col1": "\u0915\u092E \u0935\u091C\u0928 (Underweight)",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "\u0915\u092E \u0935\u091C\u0928 \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E"
        },
        {
          "col1": "\u0938\u093E\u092E\u093E\u0928\u094D\u092F / \u0938\u094D\u0935\u0938\u094D\u0925 \u0935\u091C\u0928 (Normal Weight)",
          "col2": "18.5 \u2013 24.9 kg/m\xB2",
          "col3": "\u0935\u092F\u0938\u094D\u0915\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u0906\u0926\u0930\u094D\u0936 \u0938\u094D\u0935\u0938\u094D\u0925 \u092C\u0940\u090F\u092E\u0906\u0908 \u0938\u0940\u092E\u093E"
        },
        {
          "col1": "\u0905\u0927\u093F\u0915 \u0935\u091C\u0928 (Overweight)",
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
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E Class II obesity screening reference"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 8",
          "col2": "\u2265 40.0 kg/m\xB2",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E Severe Class III obesity screening threshold"
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
          "col3": "3D \u092B\u0949\u0930\u094D\u092E\u0942\u0932\u093E 3D \u0906\u092F\u0924\u0928 (Volume) \u0915\u094B \u0938\u0902\u0924\u0941\u0932\u093F\u0924 \u0915\u0930\u0924\u093E \u0939\u0948"
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
          "col3": " for Indian adults"
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
      "eyebrow": "Est\xE1ndares de Referencia de Salud",
      "title": "BMI Calculator India \u2013 Asian BMI Cutoff Reference (BMI 23) \u2013 Gu\xEDa y Calculadora",
      "intro": "Herramienta de c\xE1lculo y referencia educativa dise\xF1ada seg\xFAn los est\xE1ndares de salud publicados de la OMS y CDC. Calcula tus m\xE9tricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "F\xF3rmula de Referencia Est\xE1ndar",
      "formulaDesc": "Calculado utilizando ecuaciones est\xE1ndar validadas.",
      "formulaCode": "Asian BMI = Weight (kg) / [Height (cm) / 100]\xB2",
      "tableTitle": "Tabla de Referencia Est\xE1ndar",
      "tableRows": [
        {
          "col1": "Categor\xEDa / Nivel 1",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "Rango de referencia Underweight rango de referencia for Indian adults"
        },
        {
          "col1": "Categor\xEDa / Nivel 2",
          "col2": "18.5 \u2013 22.9 kg/m\xB2",
          "col3": "Rango de referencia Optimal healthy BMI range for Indian men & women"
        },
        {
          "col1": "Categor\xEDa / Nivel 3",
          "col2": "23.0 \u2013 24.9 kg/m\xB2",
          "col3": "Rango de referencia Increased cardiometabolic risk cutoff (BMI 23 India threshold)"
        },
        {
          "col1": "Categor\xEDa / Nivel 4",
          "col2": "25.0 \u2013 29.9 kg/m\xB2",
          "col3": "Rango de referencia Obesidad Clase I classification under WHO South Asian criteria"
        },
        {
          "col1": "Categor\xEDa / Nivel 5",
          "col2": "\u2265 30.0 kg/m\xB2",
          "col3": "Rango de referencia High risk Obesidad Claseification for Indian adults"
        }
      ],
      "faqs": [
        {
          "question": "\xBFC\xF3mo funciona la calculadora de bmi calculator india y qu\xE9 mide?",
          "answer": "Esta calculadora eval\xFAa tus datos personales utilizando ecuaciones validadas. Proporciona una estimaci\xF3n educativa para ayudarte a comprender tu estado de salud y referencias est\xE1ndar."
        },
        {
          "question": "Por qu\xE9 es BMI 23 the overweight cutoff threshold in India?",
          "answer": "Epidemiological research shows that South Asian populations carry higher abdominal visceral fat and face elevated cardiometabolic risks (such as type 2 diabetes and hypertension) at lower body mass index levels compared to Western populations."
        },
        {
          "question": "C\xF3mo calculate BMI in India using kg and cm?",
          "answer": "To calculate BMI in kg and cm: Convert height in cm to meters by dividing by 100. Multiply height in meters by itself to get height squared. Divide weight in kg by height squared. Example: 65 kg / (1.68m x 1.68m) = 23.0 BMI."
        },
        {
          "question": "What are the waist circumference guidelines for Indian adults?",
          "answer": "The Indian Council of Medical Research (ICMR) recommends keeping waist circumference under 90 cm (35 inches) for Indian men and under 80 cm (31.5 inches) for Indian women to reduce abdominal fat risk."
        },
        {
          "question": "\xBFQu\xE9 es el ideal height weight chart for Indians?",
          "answer": "An ideal weight for Indian adults keeps BMI between 18.5 and 22.9 kg/m\xB2. For example, for an Indian male or female of height 168 cm (5 ft 6 in), the healthy weight range is 52.2 kg to 64.6 kg."
        },
        {
          "question": "\xBFC\xF3mo se calcula el IMC para adultos indios?",
          "answer": "Para calcular el IMC en indios, divide el peso en kg por la altura en metros al cuadrado. Por ejemplo, 65 kg / (1.68 m x 1.68 m) = 23.0 kg/m\xB2 (sobrepeso seg\xFAn el punto de corte de la OMS para Asia)."
        },
        {
          "question": "\xBFCu\xE1l es la tabla de peso ideal para la poblaci\xF3n india?",
          "answer": "Un peso ideal para adultos indios mantiene el IMC entre 18.5 y 22.9 kg/m\xB2 seg\xFAn las pautas de referencia del ICMR y la OMS."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de R\xE9f\xE9rence de Sant\xE9",
      "title": "BMI Calculator India \u2013 Asian BMI Cutoff Reference (BMI 23) \u2013 Outil de R\xE9f\xE9rence",
      "intro": "Outil de calcul et de r\xE9f\xE9rence \xE9ducatif con\xE7u selon les normes de sant\xE9 publi\xE9es de l'OMS et du CDC. Calculez vos m\xE9triques et consultez les plages de r\xE9f\xE9rence.",
      "formulaTitle": "Formule de R\xE9f\xE9rence Standard",
      "formulaDesc": "Calcul\xE9 \xE0 l'aide d'\xE9quations standards valid\xE9es.",
      "formulaCode": "Asian BMI = Weight (kg) / [Height (cm) / 100]\xB2",
      "tableTitle": "Tableau de R\xE9f\xE9rence Standard",
      "tableRows": [
        {
          "col1": "Cat\xE9gorie / Niveau 1",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "Plage de r\xE9f\xE9rence Underweight plage de r\xE9f\xE9rence for Indian adults"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 2",
          "col2": "18.5 \u2013 22.9 kg/m\xB2",
          "col3": "Plage de r\xE9f\xE9rence Optimal healthy BMI range for Indian men & women"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 3",
          "col2": "23.0 \u2013 24.9 kg/m\xB2",
          "col3": "Plage de r\xE9f\xE9rence Increased cardiometabolic risk cutoff (BMI 23 India threshold)"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 4",
          "col2": "25.0 \u2013 29.9 kg/m\xB2",
          "col3": "Plage de r\xE9f\xE9rence Ob\xE9sit\xE9 Classe I classification under WHO South Asian criteria"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 5",
          "col2": "\u2265 30.0 kg/m\xB2",
          "col3": "Plage de r\xE9f\xE9rence High risk Ob\xE9sit\xE9 Classeification for Indian adults"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de bmi calculator india et que mesure-t-il ?",
          "answer": "Ce calculateur \xE9value vos donn\xE9es personnelles \xE0 l'aide d'\xE9quations valid\xE9es. Il fournit une estimation \xE9ducative pour vous aider \xE0 comprendre vos m\xE9triques et r\xE9f\xE9rences standards."
        },
        {
          "question": "Pourquoi BMI 23 the overweight cutoff threshold in India?",
          "answer": "Epidemiological research shows that South Asian populations carry higher abdominal visceral fat and face elevated cardiometabolic risks (such as type 2 diabetes and hypertension) at lower body mass index levels compared to Western populations."
        },
        {
          "question": "Comment calculate BMI in India using kg and cm?",
          "answer": "To calculate BMI in kg and cm: Convert height in cm to meters by dividing by 100. Multiply height in meters by itself to get height squared. Divide weight in kg by height squared. Example: 65 kg / (1.68m x 1.68m) = 23.0 BMI."
        },
        {
          "question": "What are the waist circumference guidelines for Indian adults?",
          "answer": "The Indian Council of Medical Research (ICMR) recommends keeping waist circumference under 90 cm (35 inches) for Indian men and under 80 cm (31.5 inches) for Indian women to reduce abdominal fat risk."
        },
        {
          "question": "Qu'est-ce que le ideal height weight chart for Indians?",
          "answer": "An ideal weight for Indian adults keeps BMI between 18.5 and 22.9 kg/m\xB2. For example, for an Indian male or female of height 168 cm (5 ft 6 in), the healthy weight range is 52.2 kg to 64.6 kg."
        },
        {
          "question": "Comment calculer l'IMC pour les adultes indiens ?",
          "answer": "Pour calculer l'IMC chez les Indiens, divisez le poids en kg par la taille en m\xE8tres au carr\xE9. Par exemple, 65 kg / (1.68 m x 1.68 m) = 23.0 kg/m\xB2 (surpoids selon le seuil asiatique de l'OMS)."
        },
        {
          "question": "Quel est le tableau de poids id\xE9al pour la population indienne ?",
          "answer": "Un poids id\xE9al pour les adultes indiens maintient l'IMC entre 18.5 et 22.9 kg/m\xB2 selon les directives de l'ICMR et de l'OMS."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "BMI Calculator India \u2013 Asian BMI Cutoff Reference (BMI 23) \u2013 Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den ver\xF6ffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und pr\xFCfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardm\xE4\xDFig validierten Gleichungen.",
      "formulaCode": "Asian BMI = Weight (kg) / [Height (cm) / 100]\xB2",
      "tableTitle": "Standard-Referenztabelle",
      "tableRows": [
        {
          "col1": "Kategorie / Stufe 1",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "Referenzbereich Underweight Referenzbereich for Indian adults"
        },
        {
          "col1": "Kategorie / Stufe 2",
          "col2": "18.5 \u2013 22.9 kg/m\xB2",
          "col3": "Referenzbereich Optimal healthy BMI range for Indian men & women"
        },
        {
          "col1": "Kategorie / Stufe 3",
          "col2": "23.0 \u2013 24.9 kg/m\xB2",
          "col3": "Referenzbereich Increased cardiometabolic risk cutoff (BMI 23 India threshold)"
        },
        {
          "col1": "Kategorie / Stufe 4",
          "col2": "25.0 \u2013 29.9 kg/m\xB2",
          "col3": "Referenzbereich Adipositas Klasse I classification under WHO South Asian criteria"
        },
        {
          "col1": "Kategorie / Stufe 5",
          "col2": "\u2265 30.0 kg/m\xB2",
          "col3": "Referenzbereich High risk Adipositas Klasseification for Indian adults"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der bmi calculator india-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre pers\xF6nlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        },
        {
          "question": "Warum ist BMI 23 the overweight cutoff threshold in India?",
          "answer": "Epidemiological research shows that South Asian populations carry higher abdominal visceral fat and face elevated cardiometabolic risks (such as type 2 diabetes and hypertension) at lower body mass index levels compared to Western populations."
        },
        {
          "question": "Wie man calculate BMI in India using kg and cm?",
          "answer": "To calculate BMI in kg and cm: Convert height in cm to meters by dividing by 100. Multiply height in meters by itself to get height squared. Divide weight in kg by height squared. Example: 65 kg / (1.68m x 1.68m) = 23.0 BMI."
        },
        {
          "question": "What are the waist circumference guidelines for Indian adults?",
          "answer": "The Indian Council of Medical Research (ICMR) recommends keeping waist circumference under 90 cm (35 inches) for Indian men and under 80 cm (31.5 inches) for Indian women to reduce abdominal fat risk."
        },
        {
          "question": "Was ist der ideal height weight chart for Indians?",
          "answer": "An ideal weight for Indian adults keeps BMI between 18.5 and 22.9 kg/m\xB2. For example, for an Indian male or female of height 168 cm (5 ft 6 in), the healthy weight range is 52.2 kg to 64.6 kg."
        },
        {
          "question": "Wie berechnet man den BMI f\xFCr indische Erwachsene?",
          "answer": "Um den BMI bei Indern zu berechnen, teilen Sie das Gewicht in kg durch die Gr\xF6\xDFe in Metern zum Quadrat. Beispiel: 65 kg / (1,68 m x 1,68 m) = 23,0 kg/m\xB2 (\xDCbergewicht nach dem WHO-Asien-Schwellenwert)."
        },
        {
          "question": "Was ist die Idealgewichtstabelle f\xFCr die indische Bev\xF6lkerung?",
          "answer": "Ein Idealgewicht f\xFCr indische Erwachsene h\xE4lt den BMI zwischen 18,5 und 22,9 kg/m\xB2 gem\xE4\xDF den ICMR- und WHO-Leitlinien."
        }
      ]
    },
    "ko": {
      "eyebrow": "\uAC74\uAC15 \uCC38\uC870 \uD45C\uC900 \uC9C0\uCE68",
      "title": "BMI \uACC4\uC0B0\uAE30 India \u2013 Asian BMI Cutoff Reference (BMI 23) \u2013 \uCC38\uC870 \uACC4\uC0B0\uAE30",
      "intro": "WHO \uBC0F CDC \uC9C0\uCE68\uC5D0 \uAE30\uBC18\uD55C \uC2E4\uC2DC\uAC04 \uCC38\uACE0 \uACC4\uC0B0\uAE30\uC785\uB2C8\uB2E4. \uAC1C\uC778\uBCC4 \uC218\uCE58\uB97C \uCE21\uC815\uD558\uACE0 \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uD655\uC778\uD558\uC138\uC694.",
      "formulaTitle": "\uD45C\uC900 \uACC4\uC0B0 \uACF5\uC2DD",
      "formulaDesc": "\uAC80\uC99D\uB41C \uD45C\uC900 \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uACC4\uC0B0\uB429\uB2C8\uB2E4.",
      "formulaCode": "Asian BMI = Weight (kg) / [Height (cm) / 100]\xB2",
      "tableTitle": "\uD45C\uC900 \uCC38\uC870 \uC9C4\uB2E8\uD45C",
      "tableRows": [
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 1",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "\uCC38\uC870 \uBC94\uC704 Underweight \uCC38\uC870 \uBC94\uC704 for Indian adults"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 2",
          "col2": "18.5 \u2013 22.9 kg/m\xB2",
          "col3": "\uCC38\uC870 \uBC94\uC704 Optimal healthy BMI range for Indian men & women"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 3",
          "col2": "23.0 \u2013 24.9 kg/m\xB2",
          "col3": "\uCC38\uC870 \uBC94\uC704 Increased cardiometabolic risk cutoff (BMI 23 India threshold)"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 4",
          "col2": "25.0 \u2013 29.9 kg/m\xB2",
          "col3": "\uCC38\uC870 \uBC94\uC704 \uBE44\uB9CC 1\uB2E8\uACC4 classification under WHO South Asian criteria"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 5",
          "col2": "\u2265 30.0 kg/m\xB2",
          "col3": "\uCC38\uC870 \uBC94\uC704 High risk \uBE44\uB9CC \uB2E8\uACC4ification for Indian adults"
        }
      ],
      "faqs": [
        {
          "question": "bmi calculator india \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uBCF8 \uACC4\uC0B0\uAE30\uB294 \uAC80\uC99D\uB41C \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uAC1C\uC778\uBCC4 \uC2E0\uCCB4 \uC9C0\uC218\uB97C \uC0B0\uCD9C\uD569\uB2C8\uB2E4. \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uBC14\uD0D5\uC73C\uB85C \uAD50\uC721\uC801 \uBD84\uC11D \uACB0\uACFC\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."
        },
        {
          "question": "Why is BMI 23 the overweight cutoff threshold in India? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "Epidemiological research shows that South Asian populations carry higher abdominal visceral fat and face elevated cardiometabolic risks (such as type 2 diabetes and hypertension) at lower body mass index levels compared to Western populations."
        },
        {
          "question": " calculate BMI in India using kg and cm? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "To calculate BMI in kg and cm: Convert height in cm to meters by dividing by 100. Multiply height in meters by itself to get height squared. Divide weight in kg by height squared. Example: 65 kg / (1.68m x 1.68m) = 23.0 BMI."
        },
        {
          "question": "What are the waist circumference guidelines for Indian adults? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "The Indian Council of Medical Research (ICMR) recommends keeping waist circumference under 90 cm (35 inches) for Indian men and under 80 cm (31.5 inches) for Indian women to reduce abdominal fat risk."
        },
        {
          "question": " ideal height weight chart for Indians? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "An ideal weight for Indian adults keeps BMI between 18.5 and 22.9 kg/m\xB2. For example, for an Indian male or female of height 168 cm (5 ft 6 in), the healthy weight range is 52.2 kg to 64.6 kg."
        },
        {
          "question": "\uC778\uB3C4 \uC131\uC778\uC758 BMI\uB294 \uC5B4\uB5BB\uAC8C \uACC4\uC0B0\uD558\uB098\uC694?",
          "answer": "\uC778\uB3C4 \uC131\uC778\uC758 BMI \uACC4\uC0B0\uC740 \uCCB4\uC911(kg)\uC744 \uC2E0\uC7A5(m)\uC758 \uC81C\uACF1\uC73C\uB85C \uB098\uB215\uB2C8\uB2E4. \uC608: 65 kg / (1.68 m x 1.68 m) = 23.0 kg/m\xB2 (WHO \uC544\uC2DC\uC544 \uACFC\uCCB4\uC911 \uAE30\uC900)."
        },
        {
          "question": "\uC778\uB3C4 \uC778\uAD6C\uC758 \uC801\uC815 \uCCB4\uC911 \uBC94\uC704\uB294 \uC5B4\uB5BB\uAC8C \uB418\uB098\uC694?",
          "answer": "ICMR \uBC0F WHO \uC9C0\uCE68\uC5D0 \uB530\uB974\uBA74 \uC778\uB3C4 \uC131\uC778\uC758 \uC801\uC815 \uCCB4\uC911\uC740 BMI 18.5~22.9 kg/m\xB2 \uBC94\uC704\uC785\uB2C8\uB2E4."
        }
      ]
    },
    "hi": {
      "eyebrow": "\u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u090F\u0935\u0902 \u0906\u0908\u0938\u0940\u090F\u092E\u0906\u0930 \u092D\u093E\u0930\u0924\u0940\u092F \u0926\u093F\u0936\u093E\u0928\u093F\u0930\u094D\u0926\u0947\u0936",
      "title": "\u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u092D\u093E\u0930\u0924 (BMI \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 India)",
      "intro": "\u092D\u093E\u0930\u0924\u0940\u092F \u0935\u092F\u0938\u094D\u0915\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u0906\u0927\u093F\u0915\u093E\u0930\u093F\u0915 WHO \u0914\u0930 ICMR (\u092D\u093E\u0930\u0924\u0940\u092F \u091A\u093F\u0915\u093F\u0924\u094D\u0938\u093E \u0905\u0928\u0941\u0938\u0902\u0927\u093E\u0928 \u092A\u0930\u093F\u0937\u0926) \u0915\u0947 \u0926\u093F\u0936\u093E\u0928\u093F\u0930\u094D\u0926\u0947\u0936\u094B\u0902 \u0915\u0947 \u0906\u0927\u093E\u0930 \u092A\u0930 \u0905\u092A\u0928\u0947 \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902\u0964 \u092A\u0936\u094D\u091A\u093F\u092E\u0940 \u092E\u093E\u0928\u0915\u094B\u0902 \u0915\u0947 \u0935\u093F\u092A\u0930\u0940\u0924, \u092D\u093E\u0930\u0924\u0940\u092F \u0906\u092C\u093E\u0926\u0940 \u0915\u0947 \u0932\u093F\u090F 23.0 kg/m\xB2 \u092C\u0940\u090F\u092E\u0906\u0908 \u0938\u0947 \u0905\u0927\u093F\u0915 \u0935\u091C\u0928 (Overweight) \u0915\u0940 \u0936\u0941\u0930\u0941\u0906\u0924 \u092E\u093E\u0928\u0940 \u091C\u093E\u0924\u0940 \u0939\u0948\u0964",
      "formulaTitle": "\u092D\u093E\u0930\u0924\u0940\u092F \u092C\u0940\u090F\u092E\u0906\u0908 \u0938\u0942\u0924\u094D\u0930 (\u0915\u093F\u0917\u094D\u0930\u093E \u0914\u0930 \u0938\u0947\u092E\u0940)",
      "formulaDesc": "\u092C\u0940\u090F\u092E\u0906\u0908 = \u0935\u091C\u0928 (\u0915\u093F\u0917\u094D\u0930\u093E) / [\u090A\u0902\u091A\u093E\u0908 (\u092E\u0940\u091F\u0930)]\xB2 | \u092D\u093E\u0930\u0924\u0940\u092F\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u0913\u0935\u0930\u0935\u0947\u091F \u0915\u091F\u0911\u092B: 23.0 kg/m\xB2",
      "formulaCode": "BMI = kg / m\xB2",
      "tableTitle": "\u092D\u093E\u0930\u0924\u0940\u092F \u092A\u0941\u0930\u0941\u0937\u094B\u0902 \u090F\u0935\u0902 \u092E\u0939\u093F\u0932\u093E\u0913\u0902 \u0915\u0947 \u0932\u093F\u090F \u092C\u0940\u090F\u092E\u0906\u0908 \u091A\u093E\u0930\u094D\u091F (ICMR \u090F\u0935\u0902 WHO \u092E\u093E\u0928\u0915)",
      "tableRows": [
        {
          "col1": "\u0915\u092E \u0935\u091C\u0928 (Underweight)",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "\u0915\u092E \u0935\u091C\u0928 \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E"
        },
        {
          "col1": "\u0938\u093E\u092E\u093E\u0928\u094D\u092F / \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F\u092A\u094D\u0930\u0926 \u092C\u0940\u090F\u092E\u0906\u0908 (Healthy)",
          "col2": "18.5 \u2013 22.9 kg/m\xB2",
          "col3": "\u092D\u093E\u0930\u0924\u0940\u092F\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u0906\u0926\u0930\u094D\u0936 \u0938\u094D\u0935\u0938\u094D\u0925 \u092C\u0940\u090F\u092E\u0906\u0908 \u0938\u0940\u092E\u093E"
        },
        {
          "col1": "\u0905\u0927\u093F\u0915 \u0935\u091C\u0928 (Overweight / Cutoff 23)",
          "col2": "23.0 \u2013 24.9 kg/m\xB2",
          "col3": "\u092D\u093E\u0930\u0924\u0940\u092F\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u0905\u0927\u093F\u0915 \u0935\u091C\u0928 \u090F\u0935\u0902 \u091C\u094B\u0916\u093F\u092E \u0938\u0940\u092E\u093E"
        },
        {
          "col1": "\u092E\u094B\u091F\u093E\u092A\u093E \u0936\u094D\u0930\u0947\u0923\u0940 I (Obese Class I)",
          "col2": "25.0 \u2013 29.9 kg/m\xB2",
          "col3": "\u0926\u0915\u094D\u0937\u093F\u0923 \u090F\u0936\u093F\u092F\u093E\u0908 \u092E\u093E\u0928\u0915\u094B\u0902 \u0915\u0947 \u0924\u0939\u0924 \u092E\u094B\u091F\u093E\u092A\u093E \u0936\u094D\u0930\u0947\u0923\u0940 I"
        },
        {
          "col1": "\u092E\u094B\u091F\u093E\u092A\u093E \u0936\u094D\u0930\u0947\u0923\u0940 II (Obese Class II)",
          "col2": "\u2265 30.0 kg/m\xB2",
          "col3": "\u0917\u0902\u092D\u0940\u0930 \u092E\u094B\u091F\u093E\u092A\u093E \u0936\u094D\u0930\u0947\u0923\u0940"
        }
      ],
      "faqs": [
        {
          "question": "\u092D\u093E\u0930\u0924\u0940\u092F\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0940 \u0938\u0940\u092E\u093E\u090F\u0902 \u0905\u0932\u0917 \u0915\u094D\u092F\u094B\u0902 \u0939\u0948\u0902?",
          "answer": "ICMR \u0914\u0930 \u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u0926\u093F\u0936\u093E\u0928\u093F\u0930\u094D\u0926\u0947\u0936\u094B\u0902 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u090F\u0936\u093F\u092F\u093E\u0908/\u092D\u093E\u0930\u0924\u0940\u092F \u0906\u092C\u093E\u0926\u0940 \u092E\u0947\u0902 \u0915\u092E \u092C\u0940\u090F\u092E\u0906\u0908 \u092A\u0930 \u092D\u0940 \u0935\u093F\u0938\u0930\u0932 \u092B\u0948\u091F (\u092A\u0947\u091F \u0915\u0940 \u0935\u0938\u093E) \u0915\u093E \u091C\u094B\u0916\u093F\u092E \u0905\u0927\u093F\u0915 \u0939\u094B\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u092D\u093E\u0930\u0924 \u0915\u0947 \u0932\u093F\u090F \u0938\u0902\u0936\u094B\u0927\u093F\u0924 \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u091F\u0911\u092B \u0915\u094D\u092F\u093E \u0939\u0948?",
          "answer": "\u092D\u093E\u0930\u0924 \u092E\u0947\u0902 18.5-22.9 \u0938\u094D\u0935\u0938\u094D\u0925 \u0935\u091C\u0928, 23.0-24.9 \u0913\u0935\u0930\u0935\u0947\u091F (\u091C\u094B\u0916\u093F\u092E) \u0914\u0930 25.0 \u0938\u0947 \u0905\u0927\u093F\u0915 \u0915\u094B \u092E\u094B\u091F\u093E\u092A\u093E \u0936\u094D\u0930\u0947\u0923\u0940 \u092E\u093E\u0928\u093E \u091C\u093E\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "ICMR \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0915\u092E\u0930 \u0915\u0940 \u092A\u0930\u093F\u0927\u093F (Waist Circumference) \u0915\u0940 \u0938\u0940\u092E\u093E \u0915\u094D\u092F\u093E \u0939\u0948?",
          "answer": "\u092A\u0941\u0930\u0941\u0937\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F 90 \u0938\u0947\u092E\u0940 \u0914\u0930 \u092E\u0939\u093F\u0932\u093E\u0913\u0902 \u0915\u0947 \u0932\u093F\u090F 80 \u0938\u0947\u092E\u0940 \u0938\u0947 \u0905\u0927\u093F\u0915 \u0915\u092E\u0930 \u0915\u0940 \u092E\u093E\u092A \u091A\u092F\u093E\u092A\u091A\u092F \u091C\u094B\u0916\u093F\u092E \u0915\u093E \u0938\u0902\u0915\u0947\u0924 \u0926\u0947\u0924\u0940 \u0939\u0948\u0964"
        },
        {
          "question": "\u0915\u094D\u092F\u093E \u092D\u093E\u0930\u0924\u0940\u092F \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u092E\u0947\u0902 \u0915\u092E\u0930 \u0915\u093E \u092E\u093E\u092A \u0936\u093E\u092E\u093F\u0932 \u0939\u0948?",
          "answer": "\u0939\u093E\u0901, \u092F\u0939 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0947 \u0938\u093E\u0925 \u0915\u092E\u0930 \u0915\u0947 \u0906\u0915\u093E\u0930 \u0915\u093E \u092E\u0942\u0932\u094D\u092F\u093E\u0902\u0915\u0928 \u0915\u0930\u0915\u0947 ICMR \u0935\u093F\u0938\u0930\u0932 \u092B\u0948\u091F \u0930\u093F\u0938\u094D\u0915 \u0938\u094D\u091F\u0947\u091F\u0938 \u0926\u093F\u0916\u093E\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u090F\u0936\u093F\u092F\u093E\u0908 \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u091F\u0911\u092B \u0915\u092C \u0932\u093E\u0917\u0942 \u0915\u0930\u0928\u093E \u091A\u093E\u0939\u093F\u090F?",
          "answer": "\u092F\u0926\u093F \u0906\u092A \u0926\u0915\u094D\u0937\u093F\u0923 \u090F\u0936\u093F\u092F\u093E\u0908 \u092F\u093E \u092D\u093E\u0930\u0924\u0940\u092F \u092E\u0942\u0932 \u0915\u0947 \u0939\u0948\u0902, \u0924\u094B 23.0 kg/m\xB2 \u0915\u0940 \u0938\u0940\u092E\u093E \u0915\u094B \u0938\u0902\u0926\u0930\u094D\u092D \u092C\u093F\u0902\u0926\u0941 \u092E\u093E\u0928\u0928\u093E \u091A\u093E\u0939\u093F\u090F\u0964"
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
  "bmi-calculator-for-indians": {
    "en": {
      "eyebrow": "ICMR & WHO South Asian Standards",
      "title": "BMI Calculator for Indians \u2013 Healthy Height Weight Chart for Indian Adults",
      "intro": "Free online BMI Calculator for Indians based on Indian Council of Medical Research (ICMR) and WHO Asia-Pacific reference standards. Compute your exact Body Mass Index (BMI) using kg and cm, check whether your weight falls into the healthy Indian range (18.5 \u2013 22.9 kg/m\xB2), and review ICMR waist circumference guidelines.",
      "formulaTitle": "Official ICMR Indian BMI Formula (kg & cm)",
      "formulaDesc": "BMI = Weight (kg) / [Height (m)]\xB2 | Healthy Range for Indians: 18.5 \u2013 22.9 kg/m\xB2 | Overweight Cutoff: \u2265 23.0 kg/m\xB2",
      "formulaCode": "BMI = Weight (kg) / [(Height in cm / 100)\xB2]",
      "tableTitle": "ICMR & WHO Adult BMI Reference Chart for Indians (kg/m\xB2)",
      "tableRows": [
        {
          "col1": "Underweight",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "Underweight reference threshold"
        },
        {
          "col1": "Healthy Normal Weight",
          "col2": "18.5 \u2013 22.9 kg/m\xB2",
          "col3": "Optimal healthy range for Indian adults"
        },
        {
          "col1": "Overweight / At Risk (Action Threshold)",
          "col2": "23.0 \u2013 24.9 kg/m\xB2",
          "col3": "Elevated cardiometabolic risk cutoff for Indians"
        },
        {
          "col1": "Obese Class I (Indian Standard)",
          "col2": "25.0 \u2013 29.9 kg/m\xB2",
          "col3": "Class I obesity threshold under ICMR standards"
        },
        {
          "col1": "Obese Class II (Severe Obesity)",
          "col2": "\u2265 30.0 kg/m\xB2",
          "col3": "Severe obesity risk threshold"
        }
      ],
      "faqs": [
        {
          "question": "What is the healthy BMI range for Indians?",
          "answer": "According to ICMR and WHO South Asian guidelines, the healthy BMI range for Indian men and women is 18.5 to 22.9 kg/m\xB2."
        },
        {
          "question": "Why is the overweight cutoff 23.0 for Indians instead of 25.0?",
          "answer": "Indians have a higher percentage of visceral fat at lower body mass index levels, leading to increased risk of diabetes and hypertension at BMI 23.0 kg/m\xB2."
        },
        {
          "question": "How to calculate ideal body weight for height in India?",
          "answer": "Divide your height in meters squared and multiply by 18.5 for minimum healthy weight and by 22.9 for maximum healthy weight. For example, at 170 cm, healthy weight is 53.5 kg to 66.2 kg."
        }
      ]
    },
    "es": {
      "eyebrow": "Est\xE1ndares de Referencia de Salud",
      "title": "BMI Calculator for Indians \u2013 Healthy Height Weight Chart for Indian Adults \u2013 Gu\xEDa y Calculadora",
      "intro": "Herramienta de c\xE1lculo y referencia educativa dise\xF1ada seg\xFAn los est\xE1ndares de salud publicados de la OMS y CDC. Calcula tus m\xE9tricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "F\xF3rmula de Referencia Est\xE1ndar",
      "formulaDesc": "Calculado utilizando ecuaciones est\xE1ndar validadas.",
      "formulaCode": "BMI = Weight (kg) / [(Height in cm / 100)\xB2]",
      "tableTitle": "Tabla de Referencia Est\xE1ndar",
      "tableRows": [
        {
          "col1": "Categor\xEDa / Nivel 1",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "Rango de referencia Underweight reference threshold"
        },
        {
          "col1": "Categor\xEDa / Nivel 2",
          "col2": "18.5 \u2013 22.9 kg/m\xB2",
          "col3": "Rango de referencia Optimal healthy range for Indian adults"
        },
        {
          "col1": "Categor\xEDa / Nivel 3",
          "col2": "23.0 \u2013 24.9 kg/m\xB2",
          "col3": "Rango de referencia Elevated cardiometabolic risk cutoff for Indians"
        },
        {
          "col1": "Categor\xEDa / Nivel 4",
          "col2": "25.0 \u2013 29.9 kg/m\xB2",
          "col3": "Rango de referencia Class I obesity threshold under ICMR standards"
        },
        {
          "col1": "Categor\xEDa / Nivel 5",
          "col2": "\u2265 30.0 kg/m\xB2",
          "col3": "Rango de referencia Severe obesity risk threshold"
        }
      ],
      "faqs": [
        {
          "question": "\xBFC\xF3mo funciona la calculadora de bmi calculator for indians y qu\xE9 mide?",
          "answer": "Esta calculadora eval\xFAa tus datos personales utilizando ecuaciones validadas. Proporciona una estimaci\xF3n educativa para ayudarte a comprender tu estado de salud y referencias est\xE1ndar."
        },
        {
          "question": "Por qu\xE9 es the overweight cutoff 23.0 for Indians instead of 25.0?",
          "answer": "Indians have a higher percentage of visceral fat at lower body mass index levels, leading to increased risk of diabetes and hypertension at BMI 23.0 kg/m\xB2."
        },
        {
          "question": "C\xF3mo calculate ideal body weight for height in India?",
          "answer": "Divide your height in meters squared and multiply by 18.5 for minimum healthy weight and by 22.9 for maximum healthy weight. For example, at 170 cm, healthy weight is 53.5 kg to 66.2 kg."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de R\xE9f\xE9rence de Sant\xE9",
      "title": "BMI Calculator for Indians \u2013 Healthy Height Weight Chart for Indian Adults \u2013 Outil de R\xE9f\xE9rence",
      "intro": "Outil de calcul et de r\xE9f\xE9rence \xE9ducatif con\xE7u selon les normes de sant\xE9 publi\xE9es de l'OMS et du CDC. Calculez vos m\xE9triques et consultez les plages de r\xE9f\xE9rence.",
      "formulaTitle": "Formule de R\xE9f\xE9rence Standard",
      "formulaDesc": "Calcul\xE9 \xE0 l'aide d'\xE9quations standards valid\xE9es.",
      "formulaCode": "BMI = Weight (kg) / [(Height in cm / 100)\xB2]",
      "tableTitle": "Tableau de R\xE9f\xE9rence Standard",
      "tableRows": [
        {
          "col1": "Cat\xE9gorie / Niveau 1",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "Plage de r\xE9f\xE9rence Underweight reference threshold"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 2",
          "col2": "18.5 \u2013 22.9 kg/m\xB2",
          "col3": "Plage de r\xE9f\xE9rence Optimal healthy range for Indian adults"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 3",
          "col2": "23.0 \u2013 24.9 kg/m\xB2",
          "col3": "Plage de r\xE9f\xE9rence Elevated cardiometabolic risk cutoff for Indians"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 4",
          "col2": "25.0 \u2013 29.9 kg/m\xB2",
          "col3": "Plage de r\xE9f\xE9rence Class I obesity threshold under ICMR standards"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 5",
          "col2": "\u2265 30.0 kg/m\xB2",
          "col3": "Plage de r\xE9f\xE9rence Severe obesity risk threshold"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de bmi calculator for indians et que mesure-t-il ?",
          "answer": "Ce calculateur \xE9value vos donn\xE9es personnelles \xE0 l'aide d'\xE9quations valid\xE9es. Il fournit une estimation \xE9ducative pour vous aider \xE0 comprendre vos m\xE9triques et r\xE9f\xE9rences standards."
        },
        {
          "question": "Pourquoi the overweight cutoff 23.0 for Indians instead of 25.0?",
          "answer": "Indians have a higher percentage of visceral fat at lower body mass index levels, leading to increased risk of diabetes and hypertension at BMI 23.0 kg/m\xB2."
        },
        {
          "question": "Comment calculate ideal body weight for height in India?",
          "answer": "Divide your height in meters squared and multiply by 18.5 for minimum healthy weight and by 22.9 for maximum healthy weight. For example, at 170 cm, healthy weight is 53.5 kg to 66.2 kg."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "BMI Calculator for Indians \u2013 Healthy Height Weight Chart for Indian Adults \u2013 Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den ver\xF6ffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und pr\xFCfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardm\xE4\xDFig validierten Gleichungen.",
      "formulaCode": "BMI = Weight (kg) / [(Height in cm / 100)\xB2]",
      "tableTitle": "Standard-Referenztabelle",
      "tableRows": [
        {
          "col1": "Kategorie / Stufe 1",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "Referenzbereich Underweight reference threshold"
        },
        {
          "col1": "Kategorie / Stufe 2",
          "col2": "18.5 \u2013 22.9 kg/m\xB2",
          "col3": "Referenzbereich Optimal healthy range for Indian adults"
        },
        {
          "col1": "Kategorie / Stufe 3",
          "col2": "23.0 \u2013 24.9 kg/m\xB2",
          "col3": "Referenzbereich Elevated cardiometabolic risk cutoff for Indians"
        },
        {
          "col1": "Kategorie / Stufe 4",
          "col2": "25.0 \u2013 29.9 kg/m\xB2",
          "col3": "Referenzbereich Class I obesity threshold under ICMR standards"
        },
        {
          "col1": "Kategorie / Stufe 5",
          "col2": "\u2265 30.0 kg/m\xB2",
          "col3": "Referenzbereich Severe obesity risk threshold"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der bmi calculator for indians-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre pers\xF6nlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        },
        {
          "question": "Warum ist the overweight cutoff 23.0 for Indians instead of 25.0?",
          "answer": "Indians have a higher percentage of visceral fat at lower body mass index levels, leading to increased risk of diabetes and hypertension at BMI 23.0 kg/m\xB2."
        },
        {
          "question": "Wie man calculate ideal body weight for height in India?",
          "answer": "Divide your height in meters squared and multiply by 18.5 for minimum healthy weight and by 22.9 for maximum healthy weight. For example, at 170 cm, healthy weight is 53.5 kg to 66.2 kg."
        }
      ]
    },
    "ko": {
      "eyebrow": "\uAC74\uAC15 \uCC38\uC870 \uD45C\uC900 \uC9C0\uCE68",
      "title": "BMI \uACC4\uC0B0\uAE30 for Indians \u2013 Healthy Height Weight Chart for Indian Adults \u2013 \uCC38\uC870 \uACC4\uC0B0\uAE30",
      "intro": "WHO \uBC0F CDC \uC9C0\uCE68\uC5D0 \uAE30\uBC18\uD55C \uC2E4\uC2DC\uAC04 \uCC38\uACE0 \uACC4\uC0B0\uAE30\uC785\uB2C8\uB2E4. \uAC1C\uC778\uBCC4 \uC218\uCE58\uB97C \uCE21\uC815\uD558\uACE0 \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uD655\uC778\uD558\uC138\uC694.",
      "formulaTitle": "\uD45C\uC900 \uACC4\uC0B0 \uACF5\uC2DD",
      "formulaDesc": "\uAC80\uC99D\uB41C \uD45C\uC900 \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uACC4\uC0B0\uB429\uB2C8\uB2E4.",
      "formulaCode": "BMI = Weight (kg) / [(Height in cm / 100)\xB2]",
      "tableTitle": "\uD45C\uC900 \uCC38\uC870 \uC9C4\uB2E8\uD45C",
      "tableRows": [
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 1",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "\uCC38\uC870 \uBC94\uC704 Underweight reference threshold"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 2",
          "col2": "18.5 \u2013 22.9 kg/m\xB2",
          "col3": "\uCC38\uC870 \uBC94\uC704 Optimal healthy range for Indian adults"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 3",
          "col2": "23.0 \u2013 24.9 kg/m\xB2",
          "col3": "\uCC38\uC870 \uBC94\uC704 Elevated cardiometabolic risk cutoff for Indians"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 4",
          "col2": "25.0 \u2013 29.9 kg/m\xB2",
          "col3": "\uCC38\uC870 \uBC94\uC704 Class I obesity threshold under ICMR standards"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 5",
          "col2": "\u2265 30.0 kg/m\xB2",
          "col3": "\uCC38\uC870 \uBC94\uC704 Severe obesity risk threshold"
        }
      ],
      "faqs": [
        {
          "question": "bmi calculator for indians \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uBCF8 \uACC4\uC0B0\uAE30\uB294 \uAC80\uC99D\uB41C \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uAC1C\uC778\uBCC4 \uC2E0\uCCB4 \uC9C0\uC218\uB97C \uC0B0\uCD9C\uD569\uB2C8\uB2E4. \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uBC14\uD0D5\uC73C\uB85C \uAD50\uC721\uC801 \uBD84\uC11D \uACB0\uACFC\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."
        },
        {
          "question": "Why is the overweight cutoff 23.0 for Indians instead of 25.0? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "Indians have a higher percentage of visceral fat at lower body mass index levels, leading to increased risk of diabetes and hypertension at BMI 23.0 kg/m\xB2."
        },
        {
          "question": " calculate ideal body weight for height in India? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "Divide your height in meters squared and multiply by 18.5 for minimum healthy weight and by 22.9 for maximum healthy weight. For example, at 170 cm, healthy weight is 53.5 kg to 66.2 kg."
        }
      ]
    },
    "hi": {
      "eyebrow": "\u0906\u0908\u0938\u0940\u090F\u092E\u0906\u0930 \u090F\u0935\u0902 \u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u092D\u093E\u0930\u0924\u0940\u092F \u092E\u093E\u0928\u0915",
      "title": "\u092D\u093E\u0930\u0924\u0940\u092F\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 (BMI \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 for Indians)",
      "intro": "\u092D\u093E\u0930\u0924\u0940\u092F \u091A\u093F\u0915\u093F\u0924\u094D\u0938\u093E \u0905\u0928\u0941\u0938\u0902\u0927\u093E\u0928 \u092A\u0930\u093F\u0937\u0926 (ICMR) \u0914\u0930 WHO \u0926\u0915\u094D\u0937\u093F\u0923 \u090F\u0936\u093F\u092F\u093E\u0908 \u0926\u093F\u0936\u093E\u0928\u093F\u0930\u094D\u0926\u0947\u0936\u094B\u0902 \u092A\u0930 \u0906\u0927\u093E\u0930\u093F\u0924 \u092D\u093E\u0930\u0924\u0940\u092F\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u092E\u0941\u092B\u093C\u094D\u0924 \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930\u0964 \u0915\u093F\u0932\u094B\u0917\u094D\u0930\u093E\u092E \u0914\u0930 \u0938\u0947\u0902\u091F\u0940\u092E\u0940\u091F\u0930 \u092E\u0947\u0902 \u0905\u092A\u0928\u0947 \u092C\u0940\u090F\u092E\u0906\u0908 \u0914\u0930 \u0938\u094D\u0935\u0938\u094D\u0925 \u0935\u091C\u0928 \u0938\u0940\u092E\u093E \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902\u0964",
      "formulaTitle": "\u092D\u093E\u0930\u0924\u0940\u092F \u092C\u0940\u090F\u092E\u0906\u0908 \u0938\u0942\u0924\u094D\u0930",
      "formulaDesc": "\u092C\u0940\u090F\u092E\u0906\u0908 = \u0935\u091C\u0928 (\u0915\u093F\u0917\u094D\u0930\u093E) / [\u090A\u0902\u091A\u093E\u0908 (\u092E\u0940\u091F\u0930)]\xB2 | \u092D\u093E\u0930\u0924\u0940\u092F\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u0938\u094D\u0935\u0938\u094D\u0925 \u0938\u0940\u092E\u093E: 18.5 - 22.9 kg/m\xB2",
      "formulaCode": "BMI = kg / m\xB2",
      "tableTitle": "\u092D\u093E\u0930\u0924\u0940\u092F \u0935\u092F\u0938\u094D\u0915\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u092C\u0940\u090F\u092E\u0906\u0908 \u0936\u094D\u0930\u0947\u0923\u0940 \u091A\u093E\u0930\u094D\u091F (ICMR \u092E\u093E\u0928\u0915)",
      "tableRows": [
        {
          "col1": "\u0915\u092E \u0935\u091C\u0928 (Underweight)",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "\u0915\u092E \u0935\u091C\u0928 \u0938\u0940\u092E\u093E"
        },
        {
          "col1": "\u0938\u093E\u092E\u093E\u0928\u094D\u092F \u0935\u091C\u0928 (Healthy Weight)",
          "col2": "18.5 \u2013 22.9 kg/m\xB2",
          "col3": "\u092D\u093E\u0930\u0924\u0940\u092F\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u0938\u094D\u0935\u0938\u094D\u0925 \u0938\u093E\u092E\u093E\u0928\u094D\u092F \u092C\u0940\u090F\u092E\u0906\u0908"
        },
        {
          "col1": "\u0905\u0927\u093F\u0915 \u0935\u091C\u0928 (Overweight Cutoff 23)",
          "col2": "23.0 \u2013 24.9 kg/m\xB2",
          "col3": "\u092D\u093E\u0930\u0924\u0940\u092F\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F \u0905\u0927\u093F\u0915 \u0935\u091C\u0928 \u0938\u0940\u092E\u093E"
        },
        {
          "col1": "\u092E\u094B\u091F\u093E\u092A\u093E \u0936\u094D\u0930\u0947\u0923\u0940 I (Obese Class I)",
          "col2": "25.0 \u2013 29.9 kg/m\xB2",
          "col3": "\u092E\u094B\u091F\u093E\u092A\u093E \u0936\u094D\u0930\u0947\u0923\u0940 I"
        },
        {
          "col1": "\u092E\u094B\u091F\u093E\u092A\u093E \u0936\u094D\u0930\u0947\u0923\u0940 II (Obese Class II)",
          "col2": "\u2265 30.0 kg/m\xB2",
          "col3": "\u0917\u0902\u092D\u0940\u0930 \u092E\u094B\u091F\u093E\u092A\u093E"
        }
      ],
      "faqs": [
        {
          "question": "\u092D\u093E\u0930\u0924\u0940\u092F \u092C\u0940\u090F\u092E\u0906\u0908 \u092E\u093E\u0928\u0915 (Indian BMI Standard) \u0915\u094D\u092F\u093E \u0939\u0948\u0902?",
          "answer": "ICMR \u0914\u0930 \u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u0915\u0947 \u0938\u0902\u0936\u094B\u0927\u093F\u0924 \u092E\u093E\u0928\u0915\u094B\u0902 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0926\u0915\u094D\u0937\u093F\u0923 \u090F\u0936\u093F\u092F\u093E\u0908 \u0932\u094B\u0917\u094B\u0902 \u0915\u0947 \u0932\u093F\u090F 23.0 kg/m\xB2 \u0938\u0947 \u0913\u0935\u0930\u0935\u0947\u091F \u0915\u091F\u0911\u092B \u0936\u0941\u0930\u0942 \u0939\u094B\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u0938\u093E\u092E\u093E\u0928\u094D\u092F \u092C\u0940\u090F\u092E\u0906\u0908 \u0914\u0930 \u092D\u093E\u0930\u0924\u0940\u092F \u092C\u0940\u090F\u092E\u0906\u0908 \u092E\u0947\u0902 \u0915\u094D\u092F\u093E \u0905\u0902\u0924\u0930 \u0939\u0948?",
          "answer": "\u092E\u093E\u0928\u0915 \u092C\u0940\u090F\u092E\u0906\u0908 \u092E\u0947\u0902 25.0 \u092A\u0930 \u0913\u0935\u0930\u0935\u0947\u091F \u092E\u093E\u0928\u093E \u091C\u093E\u0924\u093E \u0939\u0948, \u091C\u092C\u0915\u093F \u092D\u093E\u0930\u0924\u0940\u092F \u092C\u0940\u090F\u092E\u0906\u0908 \u092E\u0947\u0902 23.0 kg/m\xB2 \u092A\u0930 \u0939\u0940 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u091C\u094B\u0916\u093F\u092E \u0915\u093E \u0938\u0902\u0926\u0930\u094D\u092D \u092E\u093E\u0928\u093E \u091C\u093E\u0924\u093E \u0939\u0948\u0964"
        },
        {
          "question": "\u0915\u092E\u0930 \u0915\u093E \u0906\u0915\u093E\u0930 (Waist Size) \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0947 \u0938\u093E\u0925 \u0915\u094D\u092F\u094B\u0902 \u091C\u0930\u0942\u0930\u0940 \u0939\u0948?",
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
      "intro": "Explore official healthy weight by height reference ranges and height-weight lookup charts for men and women. Calculate your ideal weight according to height in kilograms (kg) and pounds (lbs) based on World Health Organization (WHO), CDC, and Devine formula standards.",
      "formulaTitle": "Healthy Weight Range & Ideal Weight Equations",
      "formulaDesc": "WHO Healthy Weight Range: Min Weight = 18.5 \xD7 [Height (m)]\xB2 | Max Weight = 24.9 \xD7 [Height (m)]\xB2 | Devine IBW Male: 50kg + 2.3kg/inch >5ft | Devine IBW Female: 45.5kg + 2.3kg/inch >5ft",
      "formulaCode": "Min Healthy (kg) = 18.5 \xD7 m\xB2  |  Max Healthy (kg) = 24.9 \xD7 m\xB2",
      "tableTitle": "Height Weight Chart for Men & Women (Official WHO Healthy Range in kg & lbs)",
      "tableRows": [
        {
          "col1": `4' 10" (147 cm)`,
          "col2": "40.0 \u2013 53.8 kg (88 \u2013 119 lbs)",
          "col3": "Ideal Devine Weight: Male ~43.2 kg | Female ~36.3 kg"
        },
        {
          "col1": `5' 0" (152 cm)`,
          "col2": "42.8 \u2013 57.6 kg (94 \u2013 127 lbs)",
          "col3": "Ideal Devine Weight: Male ~50.0 kg | Female ~45.5 kg"
        },
        {
          "col1": `5' 2" (157 cm)`,
          "col2": "45.6 \u2013 61.4 kg (100 \u2013 135 lbs)",
          "col3": "Ideal Devine Weight: Male ~54.6 kg | Female ~50.1 kg"
        },
        {
          "col1": `5' 4" (163 cm)`,
          "col2": "49.2 \u2013 66.2 kg (108 \u2013 146 lbs)",
          "col3": "Ideal Devine Weight: Male ~59.2 kg | Female ~54.7 kg"
        },
        {
          "col1": `5' 6" (168 cm)`,
          "col2": "52.2 \u2013 70.3 kg (115 \u2013 155 lbs)",
          "col3": "Ideal Devine Weight: Male ~63.8 kg | Female ~59.3 kg"
        },
        {
          "col1": `5' 8" (173 cm)`,
          "col2": "55.4 \u2013 74.5 kg (122 \u2013 164 lbs)",
          "col3": "Ideal Devine Weight: Male ~68.4 kg | Female ~63.9 kg"
        },
        {
          "col1": `5' 10" (178 cm)`,
          "col2": "58.6 \u2013 78.9 kg (129 \u2013 174 lbs)",
          "col3": "Ideal Devine Weight: Male ~73.0 kg | Female ~68.5 kg"
        },
        {
          "col1": `6' 0" (183 cm)`,
          "col2": "62.0 \u2013 83.4 kg (136 \u2013 184 lbs)",
          "col3": "Ideal Devine Weight: Male ~77.6 kg | Female ~73.1 kg"
        },
        {
          "col1": `6' 2" (188 cm)`,
          "col2": "65.4 \u2013 88.0 kg (144 \u2013 194 lbs)",
          "col3": "Ideal Devine Weight: Male ~82.2 kg | Female ~77.7 kg"
        }
      ],
      "faqs": [
        {
          "question": "What is a healthy weight for my height?",
          "answer": "A healthy weight for your height is determined by a BMI between 18.5 and 24.9 kg/m\xB2 according to WHO standards. Multiply your height in meters squared by 18.5 for minimum weight and 24.9 for maximum healthy weight."
        },
        {
          "question": "What is the healthy weight chart by height for men and women?",
          "answer": `A height weight chart lists healthy weight ranges based on stature. For example: 5'4" (163cm) is 49\u201366 kg; 5'8" (173cm) is 55\u201374 kg; 6'0" (183cm) is 62\u201383 kg.`
        },
        {
          "question": "How to calculate ideal weight according to height?",
          "answer": "Ideal weight according to height can be calculated using the Devine formula: For Men: 50 kg + 2.3 kg per inch over 5 feet. For Women: 45.5 kg + 2.3 kg per inch over 5 feet."
        },
        {
          "question": "Is the weight chart for men different from the weight chart for women?",
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
          "col3": "Rango de referencia Ideal Devine Weight: Male ~43.2 kg | Female ~36.3 kg"
        },
        {
          "col1": "Categor\xEDa / Nivel 2",
          "col2": "42.8 \u2013 57.6 kg (94 \u2013 127 lbs)",
          "col3": "Rango de referencia Ideal Devine Weight: Male ~50.0 kg | Female ~45.5 kg"
        },
        {
          "col1": "Categor\xEDa / Nivel 3",
          "col2": "45.6 \u2013 61.4 kg (100 \u2013 135 lbs)",
          "col3": "Rango de referencia Ideal Devine Weight: Male ~54.6 kg | Female ~50.1 kg"
        },
        {
          "col1": "Categor\xEDa / Nivel 4",
          "col2": "49.2 \u2013 66.2 kg (108 \u2013 146 lbs)",
          "col3": "Rango de referencia Ideal Devine Weight: Male ~59.2 kg | Female ~54.7 kg"
        },
        {
          "col1": "Categor\xEDa / Nivel 5",
          "col2": "52.2 \u2013 70.3 kg (115 \u2013 155 lbs)",
          "col3": "Rango de referencia Ideal Devine Weight: Male ~63.8 kg | Female ~59.3 kg"
        },
        {
          "col1": "Categor\xEDa / Nivel 6",
          "col2": "55.4 \u2013 74.5 kg (122 \u2013 164 lbs)",
          "col3": "Rango de referencia Ideal Devine Weight: Male ~68.4 kg | Female ~63.9 kg"
        },
        {
          "col1": "Categor\xEDa / Nivel 7",
          "col2": "58.6 \u2013 78.9 kg (129 \u2013 174 lbs)",
          "col3": "Rango de referencia Ideal Devine Weight: Male ~73.0 kg | Female ~68.5 kg"
        },
        {
          "col1": "Categor\xEDa / Nivel 8",
          "col2": "62.0 \u2013 83.4 kg (136 \u2013 184 lbs)",
          "col3": "Rango de referencia Ideal Devine Weight: Male ~77.6 kg | Female ~73.1 kg"
        },
        {
          "col1": "Categor\xEDa / Nivel 9",
          "col2": "65.4 \u2013 88.0 kg (144 \u2013 194 lbs)",
          "col3": "Rango de referencia Ideal Devine Weight: Male ~82.2 kg | Female ~77.7 kg"
        }
      ],
      "faqs": [
        {
          "question": "\xBFC\xF3mo funciona la calculadora de healthy weight by height y qu\xE9 mide?",
          "answer": "Esta calculadora eval\xFAa tus datos personales utilizando ecuaciones validadas. Proporciona una estimaci\xF3n educativa para ayudarte a comprender tu estado de salud y referencias est\xE1ndar."
        },
        {
          "question": "\xBFQu\xE9 es el healthy weight chart by height for men and women?",
          "answer": "Un gr\xE1fico de peso y altura enumera los rangos de peso saludable seg\xFAn la estatura. Por ejemplo, para una altura de 163 cm (5 ft 4 in), el rango normal es de 49 kg a 66 kg (108 lbs a 145 lbs)."
        },
        {
          "question": "C\xF3mo calculate ideal weight according to height?",
          "answer": "Ideal weight according to height can be calculated using the Devine formula: For Men: 50 kg + 2.3 kg per inch over 5 feet. For Women: 45.5 kg + 2.3 kg per inch over 5 feet."
        },
        {
          "question": "Is the weight chart for men different from the weight chart for women?",
          "answer": "While WHO BMI ranges (18.5 to 24.9) apply to both adult men and women, ideal body weight formulas (such as Devine or Robinson) adjust for gender due to differences in average skeletal mass and muscle composition."
        },
        {
          "question": "\xBFQu\xE9 es a healthy weight for Indian adults by height?",
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
          "col3": "Plage de r\xE9f\xE9rence Ideal Devine Weight: Male ~43.2 kg | Female ~36.3 kg"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 2",
          "col2": "42.8 \u2013 57.6 kg (94 \u2013 127 lbs)",
          "col3": "Plage de r\xE9f\xE9rence Ideal Devine Weight: Male ~50.0 kg | Female ~45.5 kg"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 3",
          "col2": "45.6 \u2013 61.4 kg (100 \u2013 135 lbs)",
          "col3": "Plage de r\xE9f\xE9rence Ideal Devine Weight: Male ~54.6 kg | Female ~50.1 kg"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 4",
          "col2": "49.2 \u2013 66.2 kg (108 \u2013 146 lbs)",
          "col3": "Plage de r\xE9f\xE9rence Ideal Devine Weight: Male ~59.2 kg | Female ~54.7 kg"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 5",
          "col2": "52.2 \u2013 70.3 kg (115 \u2013 155 lbs)",
          "col3": "Plage de r\xE9f\xE9rence Ideal Devine Weight: Male ~63.8 kg | Female ~59.3 kg"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 6",
          "col2": "55.4 \u2013 74.5 kg (122 \u2013 164 lbs)",
          "col3": "Plage de r\xE9f\xE9rence Ideal Devine Weight: Male ~68.4 kg | Female ~63.9 kg"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 7",
          "col2": "58.6 \u2013 78.9 kg (129 \u2013 174 lbs)",
          "col3": "Plage de r\xE9f\xE9rence Ideal Devine Weight: Male ~73.0 kg | Female ~68.5 kg"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 8",
          "col2": "62.0 \u2013 83.4 kg (136 \u2013 184 lbs)",
          "col3": "Plage de r\xE9f\xE9rence Ideal Devine Weight: Male ~77.6 kg | Female ~73.1 kg"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 9",
          "col2": "65.4 \u2013 88.0 kg (144 \u2013 194 lbs)",
          "col3": "Plage de r\xE9f\xE9rence Ideal Devine Weight: Male ~82.2 kg | Female ~77.7 kg"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de healthy weight by height et que mesure-t-il ?",
          "answer": "Ce calculateur \xE9value vos donn\xE9es personnelles \xE0 l'aide d'\xE9quations valid\xE9es. Il fournit une estimation \xE9ducative pour vous aider \xE0 comprendre vos m\xE9triques et r\xE9f\xE9rences standards."
        },
        {
          "question": "Qu'est-ce que le healthy weight chart by height for men and women?",
          "answer": "Un tableau de r\xE9f\xE9rence poids-taille indique les plages de poids sant\xE9 en fonction de la taille. Par exemple, pour 163 cm (5 ft 4 in), la plage normale est de 49 kg \xE0 66 kg (108 lbs \xE0 145 lbs)."
        },
        {
          "question": "Comment calculate ideal weight according to height?",
          "answer": "Ideal weight according to height can be calculated using the Devine formula: For Men: 50 kg + 2.3 kg per inch over 5 feet. For Women: 45.5 kg + 2.3 kg per inch over 5 feet."
        },
        {
          "question": "Is the weight chart for men different from the weight chart for women?",
          "answer": "While WHO BMI ranges (18.5 to 24.9) apply to both adult men and women, ideal body weight formulas (such as Devine or Robinson) adjust for gender due to differences in average skeletal mass and muscle composition."
        },
        {
          "question": "Qu'est-ce que a healthy weight for Indian adults by height?",
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
          "col3": "Referenzbereich Ideal Devine Weight: Male ~43.2 kg | Female ~36.3 kg"
        },
        {
          "col1": "Kategorie / Stufe 2",
          "col2": "42.8 \u2013 57.6 kg (94 \u2013 127 lbs)",
          "col3": "Referenzbereich Ideal Devine Weight: Male ~50.0 kg | Female ~45.5 kg"
        },
        {
          "col1": "Kategorie / Stufe 3",
          "col2": "45.6 \u2013 61.4 kg (100 \u2013 135 lbs)",
          "col3": "Referenzbereich Ideal Devine Weight: Male ~54.6 kg | Female ~50.1 kg"
        },
        {
          "col1": "Kategorie / Stufe 4",
          "col2": "49.2 \u2013 66.2 kg (108 \u2013 146 lbs)",
          "col3": "Referenzbereich Ideal Devine Weight: Male ~59.2 kg | Female ~54.7 kg"
        },
        {
          "col1": "Kategorie / Stufe 5",
          "col2": "52.2 \u2013 70.3 kg (115 \u2013 155 lbs)",
          "col3": "Referenzbereich Ideal Devine Weight: Male ~63.8 kg | Female ~59.3 kg"
        },
        {
          "col1": "Kategorie / Stufe 6",
          "col2": "55.4 \u2013 74.5 kg (122 \u2013 164 lbs)",
          "col3": "Referenzbereich Ideal Devine Weight: Male ~68.4 kg | Female ~63.9 kg"
        },
        {
          "col1": "Kategorie / Stufe 7",
          "col2": "58.6 \u2013 78.9 kg (129 \u2013 174 lbs)",
          "col3": "Referenzbereich Ideal Devine Weight: Male ~73.0 kg | Female ~68.5 kg"
        },
        {
          "col1": "Kategorie / Stufe 8",
          "col2": "62.0 \u2013 83.4 kg (136 \u2013 184 lbs)",
          "col3": "Referenzbereich Ideal Devine Weight: Male ~77.6 kg | Female ~73.1 kg"
        },
        {
          "col1": "Kategorie / Stufe 9",
          "col2": "65.4 \u2013 88.0 kg (144 \u2013 194 lbs)",
          "col3": "Referenzbereich Ideal Devine Weight: Male ~82.2 kg | Female ~77.7 kg"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der healthy weight by height-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre pers\xF6nlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        },
        {
          "question": "Was ist der healthy weight chart by height for men and women?",
          "answer": "Eine Gr\xF6\xDFe-Gewichts-Tabelle listet gesunde Gewichtsbereiche basierend auf der K\xF6rpergr\xF6\xDFe auf. Zum Beispiel liegt der normale Bereich bei 163 cm (5 ft 4 in) zwischen 49 kg und 66 kg (108 lbs bis 145 lbs)."
        },
        {
          "question": "Wie man calculate ideal weight according to height?",
          "answer": "Ideal weight according to height can be calculated using the Devine formula: For Men: 50 kg + 2.3 kg per inch over 5 feet. For Women: 45.5 kg + 2.3 kg per inch over 5 feet."
        },
        {
          "question": "Is the weight chart for men different from the weight chart for women?",
          "answer": "While WHO BMI ranges (18.5 to 24.9) apply to both adult men and women, ideal body weight formulas (such as Devine or Robinson) adjust for gender due to differences in average skeletal mass and muscle composition."
        },
        {
          "question": "Was ist a healthy weight for Indian adults by height?",
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
          "col3": "\uCC38\uC870 \uBC94\uC704 Ideal Devine Weight: Male ~43.2 kg | Female ~36.3 kg"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 2",
          "col2": "42.8 \u2013 57.6 kg (94 \u2013 127 lbs)",
          "col3": "\uCC38\uC870 \uBC94\uC704 Ideal Devine Weight: Male ~50.0 kg | Female ~45.5 kg"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 3",
          "col2": "45.6 \u2013 61.4 kg (100 \u2013 135 lbs)",
          "col3": "\uCC38\uC870 \uBC94\uC704 Ideal Devine Weight: Male ~54.6 kg | Female ~50.1 kg"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 4",
          "col2": "49.2 \u2013 66.2 kg (108 \u2013 146 lbs)",
          "col3": "\uCC38\uC870 \uBC94\uC704 Ideal Devine Weight: Male ~59.2 kg | Female ~54.7 kg"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 5",
          "col2": "52.2 \u2013 70.3 kg (115 \u2013 155 lbs)",
          "col3": "\uCC38\uC870 \uBC94\uC704 Ideal Devine Weight: Male ~63.8 kg | Female ~59.3 kg"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 6",
          "col2": "55.4 \u2013 74.5 kg (122 \u2013 164 lbs)",
          "col3": "\uCC38\uC870 \uBC94\uC704 Ideal Devine Weight: Male ~68.4 kg | Female ~63.9 kg"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 7",
          "col2": "58.6 \u2013 78.9 kg (129 \u2013 174 lbs)",
          "col3": "\uCC38\uC870 \uBC94\uC704 Ideal Devine Weight: Male ~73.0 kg | Female ~68.5 kg"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 8",
          "col2": "62.0 \u2013 83.4 kg (136 \u2013 184 lbs)",
          "col3": "\uCC38\uC870 \uBC94\uC704 Ideal Devine Weight: Male ~77.6 kg | Female ~73.1 kg"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 9",
          "col2": "65.4 \u2013 88.0 kg (144 \u2013 194 lbs)",
          "col3": "\uCC38\uC870 \uBC94\uC704 Ideal Devine Weight: Male ~82.2 kg | Female ~77.7 kg"
        }
      ],
      "faqs": [
        {
          "question": "healthy weight by height \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uBCF8 \uACC4\uC0B0\uAE30\uB294 \uAC80\uC99D\uB41C \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uAC1C\uC778\uBCC4 \uC2E0\uCCB4 \uC9C0\uC218\uB97C \uC0B0\uCD9C\uD569\uB2C8\uB2E4. \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uBC14\uD0D5\uC73C\uB85C \uAD50\uC721\uC801 \uBD84\uC11D \uACB0\uACFC\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."
        },
        {
          "question": "\uC2E0\uC7A5\uBCC4 \uD45C\uC900 \uCCB4\uC911 \uCC28\uD2B8\uC758 \uAE30\uC900\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uC2E0\uC7A5\uBCC4 \uD45C\uC900 \uCCB4\uC911 \uCC28\uD2B8\uB294 \uD0A4\uC5D0 \uB530\uB978 \uAC74\uAC15\uD55C \uCCB4\uC911 \uBC94\uC704\uB97C \uB098\uD0C0\uB0C5\uB2C8\uB2E4. \uC608\uB97C \uB4E4\uC5B4 163 cm (5 ft 4 in)\uC758 \uACBD\uC6B0 \uD45C\uC900 \uAD8C\uC7A5 \uBC94\uC704\uB294 49 kg ~ 66 kg (108 lbs ~ 145 lbs)\uC785\uB2C8\uB2E4."
        },
        {
          "question": " calculate ideal weight according to height? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "Ideal weight according to height can be calculated using the Devine formula: For Men: 50 kg + 2.3 kg per inch over 5 feet. For Women: 45.5 kg + 2.3 kg per inch over 5 feet."
        },
        {
          "question": "Is the weight chart for men different from the weight chart for women? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "While WHO BMI ranges (18.5 to 24.9) apply to both adult men and women, ideal body weight formulas (such as Devine or Robinson) adjust for gender due to differences in average skeletal mass and muscle composition."
        },
        {
          "question": " a healthy weight for Indian adults by height? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
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
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E Ideal Devine Weight: Male ~77.6 kg | Female ~73.1 kg"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 9",
          "col2": "65.4 \u2013 88.0 kg (144 \u2013 194 lbs)",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E Ideal Devine Weight: Male ~82.2 kg | Female ~77.7 kg"
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
          "question": "Why is the Asian BMI reference cutoff set at 23 kg/m\xB2 instead of 25 kg/m\xB2?",
          "answer": "World Health Organization (WHO) epidemiological studies observed that Asian populations often exhibit higher percentages of body fat at lower BMI values compared to European populations, prompting the use of 23.0 kg/m\xB2 as a screening reference threshold."
        },
        {
          "question": "How is the Asian BMI threshold of 23 kg/m\xB2 evaluated?",
          "answer": "Divide your weight in kg by your height in meters squared. A score of 23.0 kg/m\xB2 or higher indicates the Asian overweight reference threshold, providing educational screening context."
        },
        {
          "question": "What waist circumference screening thresholds apply to Asian populations?",
          "answer": "According to International Diabetes Federation (IDF) reference standards, abdominal waist circumference screening thresholds for Asian adults are 90 cm (35 inches) for men and 80 cm (31.5 inches) for women."
        },
        {
          "question": "What should I do if my BMI score is 23 or higher?",
          "answer": "A BMI score of 23.0 to 27.4 falls within the Asian overweight reference range. Because BMI is a screening metric, consult a qualified healthcare provider for personalized medical evaluation."
        }
      ]
    },
    "es": {
      "eyebrow": "Est\xE1ndares de Referencia de Salud",
      "title": "Asian BMI Reference Calculator \u2014 BMI 23 Threshold \u2013 Gu\xEDa y Calculadora",
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
          "question": "\xBFC\xF3mo funciona la calculadora de diabetes risk calculator y qu\xE9 mide?",
          "answer": "Esta calculadora eval\xFAa tus datos personales utilizando ecuaciones validadas. Proporciona una estimaci\xF3n educativa para ayudarte a comprender tu estado de salud y referencias est\xE1ndar."
        },
        {
          "question": "Por qu\xE9 es the Asian BMI reference cutoff set at 23 kg/m\xB2 instead of 25 kg/m\xB2?",
          "answer": "World Health Organization (WHO) epidemiological studies observed that Asian populations often exhibit higher percentages of body fat at lower BMI values compared to European populations, prompting the use of 23.0 kg/m\xB2 as a screening reference threshold."
        },
        {
          "question": "\xBFC\xF3mo se the Asian BMI threshold of 23 kg/m\xB2 evaluated?",
          "answer": "Divide your weight in kg by your height in meters squared. A score of 23.0 kg/m\xB2 or higher indicates the Asian overweight reference threshold, providing educational screening context."
        },
        {
          "question": "What waist circumference screening thresholds apply to Asian populations?",
          "answer": "According to International Diabetes Federation (IDF) reference standards, abdominal waist circumference screening thresholds for Asian adults are 90 cm (35 inches) for men and 80 cm (31.5 inches) for women."
        },
        {
          "question": "What should I do if my BMI score is 23 or higher?",
          "answer": "A BMI score of 23.0 to 27.4 falls within the Asian overweight reference range. Because BMI is a screening metric, consult a qualified healthcare provider for personalized medical evaluation."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de R\xE9f\xE9rence de Sant\xE9",
      "title": "Asian BMI Reference Calculator \u2014 BMI 23 Threshold \u2013 Outil de R\xE9f\xE9rence",
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
          "question": "Comment fonctionne le calculateur de diabetes risk calculator et que mesure-t-il ?",
          "answer": "Ce calculateur \xE9value vos donn\xE9es personnelles \xE0 l'aide d'\xE9quations valid\xE9es. Il fournit une estimation \xE9ducative pour vous aider \xE0 comprendre vos m\xE9triques et r\xE9f\xE9rences standards."
        },
        {
          "question": "Pourquoi the Asian BMI reference cutoff set at 23 kg/m\xB2 instead of 25 kg/m\xB2?",
          "answer": "World Health Organization (WHO) epidemiological studies observed that Asian populations often exhibit higher percentages of body fat at lower BMI values compared to European populations, prompting the use of 23.0 kg/m\xB2 as a screening reference threshold."
        },
        {
          "question": "Comment est the Asian BMI threshold of 23 kg/m\xB2 evaluated?",
          "answer": "Divide your weight in kg by your height in meters squared. A score of 23.0 kg/m\xB2 or higher indicates the Asian overweight reference threshold, providing educational screening context."
        },
        {
          "question": "What waist circumference screening thresholds apply to Asian populations?",
          "answer": "According to International Diabetes Federation (IDF) reference standards, abdominal waist circumference screening thresholds for Asian adults are 90 cm (35 inches) for men and 80 cm (31.5 inches) for women."
        },
        {
          "question": "What should I do if my BMI score is 23 or higher?",
          "answer": "A BMI score of 23.0 to 27.4 falls within the Asian overweight reference range. Because BMI is a screening metric, consult a qualified healthcare provider for personalized medical evaluation."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "Asian BMI Reference Calculator \u2014 BMI 23 Threshold \u2013 Rechner & Leitfaden",
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
          "question": "Wie funktioniert der diabetes risk calculator-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre pers\xF6nlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        },
        {
          "question": "Warum ist the Asian BMI reference cutoff set at 23 kg/m\xB2 instead of 25 kg/m\xB2?",
          "answer": "World Health Organization (WHO) epidemiological studies observed that Asian populations often exhibit higher percentages of body fat at lower BMI values compared to European populations, prompting the use of 23.0 kg/m\xB2 as a screening reference threshold."
        },
        {
          "question": "Wie wird the Asian BMI threshold of 23 kg/m\xB2 evaluated?",
          "answer": "Divide your weight in kg by your height in meters squared. A score of 23.0 kg/m\xB2 or higher indicates the Asian overweight reference threshold, providing educational screening context."
        },
        {
          "question": "What waist circumference screening thresholds apply to Asian populations?",
          "answer": "According to International Diabetes Federation (IDF) reference standards, abdominal waist circumference screening thresholds for Asian adults are 90 cm (35 inches) for men and 80 cm (31.5 inches) for women."
        },
        {
          "question": "What should I do if my BMI score is 23 or higher?",
          "answer": "A BMI score of 23.0 to 27.4 falls within the Asian overweight reference range. Because BMI is a screening metric, consult a qualified healthcare provider for personalized medical evaluation."
        }
      ]
    },
    "ko": {
      "eyebrow": "\uAC74\uAC15 \uCC38\uC870 \uD45C\uC900 \uC9C0\uCE68",
      "title": "Asian BMI Reference \uACC4\uC0B0\uAE30 \u2014 BMI 23 Threshold \u2013 \uCC38\uC870 \uACC4\uC0B0\uAE30",
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
          "question": "diabetes risk calculator \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uBCF8 \uACC4\uC0B0\uAE30\uB294 \uAC80\uC99D\uB41C \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uAC1C\uC778\uBCC4 \uC2E0\uCCB4 \uC9C0\uC218\uB97C \uC0B0\uCD9C\uD569\uB2C8\uB2E4. \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uBC14\uD0D5\uC73C\uB85C \uAD50\uC721\uC801 \uBD84\uC11D \uACB0\uACFC\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."
        },
        {
          "question": "Why is the Asian BMI reference cutoff set at 23 kg/m\xB2 instead of 25 kg/m\xB2? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "World Health Organization (WHO) epidemiological studies observed that Asian populations often exhibit higher percentages of body fat at lower BMI values compared to European populations, prompting the use of 23.0 kg/m\xB2 as a screening reference threshold."
        },
        {
          "question": " the Asian BMI threshold of 23 kg/m\xB2 evaluated? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "Divide your weight in kg by your height in meters squared. A score of 23.0 kg/m\xB2 or higher indicates the Asian overweight reference threshold, providing educational screening context."
        },
        {
          "question": "What waist circumference screening thresholds apply to Asian populations? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "According to International Diabetes Federation (IDF) reference standards, abdominal waist circumference screening thresholds for Asian adults are 90 cm (35 inches) for men and 80 cm (31.5 inches) for women."
        },
        {
          "question": "What should I do if my BMI score is 23 or higher? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "A BMI score of 23.0 to 27.4 falls within the Asian overweight reference range. Because BMI is a screening metric, consult a qualified healthcare provider for personalized medical evaluation."
        }
      ]
    },
    "hi": {
      "eyebrow": "\u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0938\u0902\u0926\u0930\u094D\u092D \u092E\u093E\u0928\u0915",
      "title": "Asian BMI Reference \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u2014 BMI 23 Threshold \u2013 \u092E\u0941\u092B\u094D\u0924 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930",
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
          "col3": "Underweight reference threshold"
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
          "question": "What BMI is considered overweight for Asians?",
          "answer": "Under WHO Asia-Pacific criteria, a BMI of 23.0 kg/m\xB2 or higher is considered overweight."
        }
      ]
    },
    "es": {
      "eyebrow": "Est\xE1ndares de Referencia de Salud",
      "title": "Asian BMI Calculator \u2013 WHO Asian Cutoff Reference Standards \u2013 Gu\xEDa y Calculadora",
      "intro": "Herramienta de c\xE1lculo y referencia educativa dise\xF1ada seg\xFAn los est\xE1ndares de salud publicados de la OMS y CDC. Calcula tus m\xE9tricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "F\xF3rmula de Referencia Est\xE1ndar",
      "formulaDesc": "Calculado utilizando ecuaciones est\xE1ndar validadas.",
      "formulaCode": "Asian BMI = kg / m\xB2",
      "tableTitle": "Tabla de Referencia Est\xE1ndar",
      "tableRows": [
        {
          "col1": "Categor\xEDa / Nivel 1",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "Rango de referencia Underweight reference threshold"
        },
        {
          "col1": "Categor\xEDa / Nivel 2",
          "col2": "18.5 \u2013 22.9 kg/m\xB2",
          "col3": "Rango de referencia Healthy weight window for Asian men & women"
        },
        {
          "col1": "Categor\xEDa / Nivel 3",
          "col2": "23.0 \u2013 27.4 kg/m\xB2",
          "col3": "Rango de referencia Action threshold for Asian population screening"
        },
        {
          "col1": "Categor\xEDa / Nivel 4",
          "col2": "\u2265 27.5 kg/m\xB2",
          "col3": "Rango de referencia High risk Obesidad Claseification for Asian adults"
        }
      ],
      "faqs": [
        {
          "question": "\xBFC\xF3mo funciona la calculadora de asian bmi calculator y qu\xE9 mide?",
          "answer": "Esta calculadora eval\xFAa tus datos personales utilizando ecuaciones validadas. Proporciona una estimaci\xF3n educativa para ayudarte a comprender tu estado de salud y referencias est\xE1ndar."
        },
        {
          "question": "\xBFQu\xE9 es a normal BMI for Asian adults?",
          "answer": "For Asian adults, a normal healthy BMI ranges from 18.5 to 22.9 kg/m\xB2."
        },
        {
          "question": "What BMI is considered overweight for Asians?",
          "answer": "Under WHO Asia-Pacific criteria, a BMI of 23.0 kg/m\xB2 or higher is considered overweight."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de R\xE9f\xE9rence de Sant\xE9",
      "title": "Asian BMI Calculator \u2013 WHO Asian Cutoff Reference Standards \u2013 Outil de R\xE9f\xE9rence",
      "intro": "Outil de calcul et de r\xE9f\xE9rence \xE9ducatif con\xE7u selon les normes de sant\xE9 publi\xE9es de l'OMS et du CDC. Calculez vos m\xE9triques et consultez les plages de r\xE9f\xE9rence.",
      "formulaTitle": "Formule de R\xE9f\xE9rence Standard",
      "formulaDesc": "Calcul\xE9 \xE0 l'aide d'\xE9quations standards valid\xE9es.",
      "formulaCode": "Asian BMI = kg / m\xB2",
      "tableTitle": "Tableau de R\xE9f\xE9rence Standard",
      "tableRows": [
        {
          "col1": "Cat\xE9gorie / Niveau 1",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "Plage de r\xE9f\xE9rence Underweight reference threshold"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 2",
          "col2": "18.5 \u2013 22.9 kg/m\xB2",
          "col3": "Plage de r\xE9f\xE9rence Healthy weight window for Asian men & women"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 3",
          "col2": "23.0 \u2013 27.4 kg/m\xB2",
          "col3": "Plage de r\xE9f\xE9rence Action threshold for Asian population screening"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 4",
          "col2": "\u2265 27.5 kg/m\xB2",
          "col3": "Plage de r\xE9f\xE9rence High risk Ob\xE9sit\xE9 Classeification for Asian adults"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de asian bmi calculator et que mesure-t-il ?",
          "answer": "Ce calculateur \xE9value vos donn\xE9es personnelles \xE0 l'aide d'\xE9quations valid\xE9es. Il fournit une estimation \xE9ducative pour vous aider \xE0 comprendre vos m\xE9triques et r\xE9f\xE9rences standards."
        },
        {
          "question": "Qu'est-ce que a normal BMI for Asian adults?",
          "answer": "For Asian adults, a normal healthy BMI ranges from 18.5 to 22.9 kg/m\xB2."
        },
        {
          "question": "What BMI is considered overweight for Asians?",
          "answer": "Under WHO Asia-Pacific criteria, a BMI of 23.0 kg/m\xB2 or higher is considered overweight."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "Asian BMI Calculator \u2013 WHO Asian Cutoff Reference Standards \u2013 Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den ver\xF6ffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und pr\xFCfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardm\xE4\xDFig validierten Gleichungen.",
      "formulaCode": "Asian BMI = kg / m\xB2",
      "tableTitle": "Standard-Referenztabelle",
      "tableRows": [
        {
          "col1": "Kategorie / Stufe 1",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "Referenzbereich Underweight reference threshold"
        },
        {
          "col1": "Kategorie / Stufe 2",
          "col2": "18.5 \u2013 22.9 kg/m\xB2",
          "col3": "Referenzbereich Healthy weight window for Asian men & women"
        },
        {
          "col1": "Kategorie / Stufe 3",
          "col2": "23.0 \u2013 27.4 kg/m\xB2",
          "col3": "Referenzbereich Action threshold for Asian population screening"
        },
        {
          "col1": "Kategorie / Stufe 4",
          "col2": "\u2265 27.5 kg/m\xB2",
          "col3": "Referenzbereich High risk Adipositas Klasseification for Asian adults"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der asian bmi calculator-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre pers\xF6nlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        },
        {
          "question": "Was ist a normal BMI for Asian adults?",
          "answer": "For Asian adults, a normal healthy BMI ranges from 18.5 to 22.9 kg/m\xB2."
        },
        {
          "question": "What BMI is considered overweight for Asians?",
          "answer": "Under WHO Asia-Pacific criteria, a BMI of 23.0 kg/m\xB2 or higher is considered overweight."
        }
      ]
    },
    "ko": {
      "eyebrow": "\uAC74\uAC15 \uCC38\uC870 \uD45C\uC900 \uC9C0\uCE68",
      "title": "Asian BMI \uACC4\uC0B0\uAE30 \u2013 WHO Asian Cutoff Reference Standards \u2013 \uCC38\uC870 \uACC4\uC0B0\uAE30",
      "intro": "WHO \uBC0F CDC \uC9C0\uCE68\uC5D0 \uAE30\uBC18\uD55C \uC2E4\uC2DC\uAC04 \uCC38\uACE0 \uACC4\uC0B0\uAE30\uC785\uB2C8\uB2E4. \uAC1C\uC778\uBCC4 \uC218\uCE58\uB97C \uCE21\uC815\uD558\uACE0 \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uD655\uC778\uD558\uC138\uC694.",
      "formulaTitle": "\uD45C\uC900 \uACC4\uC0B0 \uACF5\uC2DD",
      "formulaDesc": "\uAC80\uC99D\uB41C \uD45C\uC900 \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uACC4\uC0B0\uB429\uB2C8\uB2E4.",
      "formulaCode": "Asian BMI = kg / m\xB2",
      "tableTitle": "\uD45C\uC900 \uCC38\uC870 \uC9C4\uB2E8\uD45C",
      "tableRows": [
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 1",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "\uCC38\uC870 \uBC94\uC704 Underweight reference threshold"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 2",
          "col2": "18.5 \u2013 22.9 kg/m\xB2",
          "col3": "\uCC38\uC870 \uBC94\uC704 Healthy weight window for Asian men & women"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 3",
          "col2": "23.0 \u2013 27.4 kg/m\xB2",
          "col3": "\uCC38\uC870 \uBC94\uC704 Action threshold for Asian population screening"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 4",
          "col2": "\u2265 27.5 kg/m\xB2",
          "col3": "\uCC38\uC870 \uBC94\uC704 High risk \uBE44\uB9CC \uB2E8\uACC4ification for Asian adults"
        }
      ],
      "faqs": [
        {
          "question": "asian bmi calculator \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uBCF8 \uACC4\uC0B0\uAE30\uB294 \uAC80\uC99D\uB41C \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uAC1C\uC778\uBCC4 \uC2E0\uCCB4 \uC9C0\uC218\uB97C \uC0B0\uCD9C\uD569\uB2C8\uB2E4. \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uBC14\uD0D5\uC73C\uB85C \uAD50\uC721\uC801 \uBD84\uC11D \uACB0\uACFC\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."
        },
        {
          "question": " a normal BMI for Asian adults? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "For Asian adults, a normal healthy BMI ranges from 18.5 to 22.9 kg/m\xB2."
        },
        {
          "question": "What BMI is considered overweight for Asians? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "Under WHO Asia-Pacific criteria, a BMI of 23.0 kg/m\xB2 or higher is considered overweight."
        }
      ]
    },
    "hi": {
      "eyebrow": "\u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u090F\u0936\u093F\u092F\u093E-\u092A\u0948\u0938\u093F\u092B\u093F\u0915 \u092E\u093E\u0928\u0915",
      "title": "\u090F\u0936\u093F\u092F\u093E\u0908 \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 (Asian BMI \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930)",
      "intro": "WHO \u0935\u093F\u0936\u0947\u0937\u091C\u094D\u091E \u092A\u0930\u093E\u092E\u0930\u094D\u0936 \u092E\u093E\u0928\u0915\u094B\u0902 \u092A\u0930 \u0906\u0927\u093E\u0930\u093F\u0924 \u090F\u0936\u093F\u092F\u093E\u0908 \u092C\u0940\u090F\u092E\u0906\u0908 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930\u0964 \u090F\u0936\u093F\u092F\u093E\u0908 \u0906\u092C\u093E\u0926\u0940 \u092E\u0947\u0902 \u0915\u092E \u092C\u0940\u090F\u092E\u0906\u0908 (23.0 kg/m\xB2) \u092A\u0930 \u092D\u0940 \u0905\u0927\u093F\u0915 \u0935\u0938\u093E \u0914\u0930 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u091C\u094B\u0916\u093F\u092E \u0915\u093E \u092E\u0942\u0932\u094D\u092F\u093E\u0902\u0915\u0928 \u0915\u0930\u0947\u0902\u0964",
      "formulaTitle": "\u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u090F\u0936\u093F\u092F\u093E\u0908 \u092C\u0940\u090F\u092E\u0906\u0908 \u0938\u0942\u0924\u094D\u0930",
      "formulaDesc": "\u092C\u0940\u090F\u092E\u0906\u0908 = \u0935\u091C\u0928 (\u0915\u093F\u0917\u094D\u0930\u093E) / [\u090A\u0902\u091A\u093E\u0908 (\u092E\u0940\u091F\u0930)]\xB2 | \u090F\u0936\u093F\u092F\u093E\u0908 \u0913\u0935\u0930\u0935\u0947\u091F \u0915\u091F\u0911\u092B: 23.0 kg/m\xB2",
      "formulaCode": "Asian BMI = kg / m\xB2",
      "tableTitle": "\u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u090F\u0936\u093F\u092F\u093E\u0908 \u0935\u092F\u0938\u094D\u0915 \u092C\u0940\u090F\u092E\u0906\u0908 \u0935\u0930\u094D\u0917\u0940\u0915\u0930\u0923 \u0924\u093E\u0932\u093F\u0915\u093E",
      "tableRows": [
        {
          "col1": "\u0915\u092E \u0935\u091C\u0928 (Underweight)",
          "col2": "< 18.5 kg/m\xB2",
          "col3": "\u0915\u092E \u0935\u091C\u0928 \u0938\u0940\u092E\u093E"
        },
        {
          "col1": "\u0938\u093E\u092E\u093E\u0928\u094D\u092F \u0938\u094D\u0935\u0938\u094D\u0925 \u0935\u091C\u0928 (Normal)",
          "col2": "18.5 \u2013 22.9 kg/m\xB2",
          "col3": "\u090F\u0936\u093F\u092F\u093E\u0908 \u092A\u0941\u0930\u0941\u0937\u094B\u0902 \u0914\u0930 \u092E\u0939\u093F\u0932\u093E\u0913\u0902 \u0915\u0947 \u0932\u093F\u090F \u0938\u094D\u0935\u0938\u094D\u0925 \u0938\u0940\u092E\u093E"
        },
        {
          "col1": "\u0905\u0927\u093F\u0915 \u0935\u091C\u0928 (Overweight)",
          "col2": "23.0 \u2013 27.4 kg/m\xB2",
          "col3": "\u090F\u0936\u093F\u092F\u093E\u0908 \u091C\u094B\u0916\u093F\u092E \u0938\u0940\u092E\u093E"
        },
        {
          "col1": "\u092E\u094B\u091F\u093E\u092A\u093E (Obese)",
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
          "col2": "Basada en Masa Corporal Magra",
          "col3": "Calcula la estimaci\xF3n del BMR utilizando la masa corporal magra (LBM)"
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
          "question": "\xBFC\xF3mo funciona la calculadora de bmr calculator y qu\xE9 mide?",
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
          "question": "Comment fonctionne le calculateur de bmr calculator et que mesure-t-il ?",
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
          "question": "Wie funktioniert der bmr calculator-Rechner und was misst er?",
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
          "question": "bmr calculator \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
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
          "question": "\xBFC\xF3mo funciona la calculadora de tdee calculator y qu\xE9 mide?",
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
          "col3": "Plage de r\xE9f\xE9rence Example reference for weight-management planning"
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
          "question": "Comment fonctionne le calculateur de tdee calculator et que mesure-t-il ?",
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
          "col3": "Referenzbereich Example reference for weight-management planning"
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
          "question": "Wie funktioniert der tdee calculator-Rechner und was misst er?",
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
          "col3": "\uCC38\uC870 \uBC94\uC704 Example reference for weight-management planning"
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
          "question": "tdee calculator \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
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
      "title": "Maintenance Calorie Calculator \u2013 Calorie Maintenance Calculator Online \u2013 Gu\xEDa y Calculadora",
      "intro": "Herramienta de c\xE1lculo y referencia educativa dise\xF1ada seg\xFAn los est\xE1ndares de salud publicados de la OMS y CDC. Calcula tus m\xE9tricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "F\xF3rmula de Referencia Est\xE1ndar",
      "formulaDesc": "Calculado utilizando ecuaciones est\xE1ndar validadas.",
      "formulaCode": "Maintenance = BMR \xD7 PAL",
      "tableTitle": "Tabla de Referencia Est\xE1ndar",
      "tableRows": [
        {
          "col1": "Categor\xEDa / Nivel 1",
          "col2": "100% TDEE (0 kcal net change)",
          "col3": "Rango de referencia Preserves current body weight and energy balance"
        },
        {
          "col1": "Categor\xEDa / Nivel 2",
          "col2": "TDEE - 250 kcal/day",
          "col3": "Rango de referencia Mathematical example of 250 kcal lower daily intake"
        },
        {
          "col1": "Categor\xEDa / Nivel 3",
          "col2": "TDEE - 500 kcal/day",
          "col3": "Rango de referencia Mathematical example of 500 kcal lower daily intake"
        },
        {
          "col1": "Categor\xEDa / Nivel 4",
          "col2": "TDEE - 750 kcal/day",
          "col3": "Rango de referencia Mathematical example of 750 kcal lower daily intake"
        },
        {
          "col1": "Categor\xEDa / Nivel 5",
          "col2": "TDEE + 250 to 300 kcal/day",
          "col3": "Rango de referencia Mathematical example of 250\u2013300 kcal higher daily intake"
        }
      ],
      "faqs": [
        {
          "question": "\xBFC\xF3mo funciona la calculadora de maintenance calorie calculator y qu\xE9 mide?",
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
      "title": "Maintenance Calorie Calculator \u2013 Calorie Maintenance Calculator Online \u2013 Outil de R\xE9f\xE9rence",
      "intro": "Outil de calcul et de r\xE9f\xE9rence \xE9ducatif con\xE7u selon les normes de sant\xE9 publi\xE9es de l'OMS et du CDC. Calculez vos m\xE9triques et consultez les plages de r\xE9f\xE9rence.",
      "formulaTitle": "Formule de R\xE9f\xE9rence Standard",
      "formulaDesc": "Calcul\xE9 \xE0 l'aide d'\xE9quations standards valid\xE9es.",
      "formulaCode": "Maintenance = BMR \xD7 PAL",
      "tableTitle": "Tableau de R\xE9f\xE9rence Standard",
      "tableRows": [
        {
          "col1": "Cat\xE9gorie / Niveau 1",
          "col2": "100% TDEE (0 kcal net change)",
          "col3": "Plage de r\xE9f\xE9rence Preserves current body weight and energy balance"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 2",
          "col2": "TDEE - 250 kcal/day",
          "col3": "Plage de r\xE9f\xE9rence Mathematical example of 250 kcal lower daily intake"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 3",
          "col2": "TDEE - 500 kcal/day",
          "col3": "Plage de r\xE9f\xE9rence Mathematical example of 500 kcal lower daily intake"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 4",
          "col2": "TDEE - 750 kcal/day",
          "col3": "Plage de r\xE9f\xE9rence Mathematical example of 750 kcal lower daily intake"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 5",
          "col2": "TDEE + 250 to 300 kcal/day",
          "col3": "Plage de r\xE9f\xE9rence Mathematical example of 250\u2013300 kcal higher daily intake"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de maintenance calorie calculator et que mesure-t-il ?",
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
      "title": "Maintenance Calorie Calculator \u2013 Calorie Maintenance Calculator Online \u2013 Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den ver\xF6ffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und pr\xFCfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardm\xE4\xDFig validierten Gleichungen.",
      "formulaCode": "Maintenance = BMR \xD7 PAL",
      "tableTitle": "Standard-Referenztabelle",
      "tableRows": [
        {
          "col1": "Kategorie / Stufe 1",
          "col2": "100% TDEE (0 kcal net change)",
          "col3": "Referenzbereich Preserves current body weight and energy balance"
        },
        {
          "col1": "Kategorie / Stufe 2",
          "col2": "TDEE - 250 kcal/day",
          "col3": "Referenzbereich Mathematical example of 250 kcal lower daily intake"
        },
        {
          "col1": "Kategorie / Stufe 3",
          "col2": "TDEE - 500 kcal/day",
          "col3": "Referenzbereich Mathematical example of 500 kcal lower daily intake"
        },
        {
          "col1": "Kategorie / Stufe 4",
          "col2": "TDEE - 750 kcal/day",
          "col3": "Referenzbereich Mathematical example of 750 kcal lower daily intake"
        },
        {
          "col1": "Kategorie / Stufe 5",
          "col2": "TDEE + 250 to 300 kcal/day",
          "col3": "Referenzbereich Mathematical example of 250\u2013300 kcal higher daily intake"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der maintenance calorie calculator-Rechner und was misst er?",
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
      "title": "Maintenance Calorie \uACC4\uC0B0\uAE30 \u2013 Calorie Maintenance \uACC4\uC0B0\uAE30 Online \u2013 \uCC38\uC870 \uACC4\uC0B0\uAE30",
      "intro": "WHO \uBC0F CDC \uC9C0\uCE68\uC5D0 \uAE30\uBC18\uD55C \uC2E4\uC2DC\uAC04 \uCC38\uACE0 \uACC4\uC0B0\uAE30\uC785\uB2C8\uB2E4. \uAC1C\uC778\uBCC4 \uC218\uCE58\uB97C \uCE21\uC815\uD558\uACE0 \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uD655\uC778\uD558\uC138\uC694.",
      "formulaTitle": "\uD45C\uC900 \uACC4\uC0B0 \uACF5\uC2DD",
      "formulaDesc": "\uAC80\uC99D\uB41C \uD45C\uC900 \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uACC4\uC0B0\uB429\uB2C8\uB2E4.",
      "formulaCode": "Maintenance = BMR \xD7 PAL",
      "tableTitle": "\uD45C\uC900 \uCC38\uC870 \uC9C4\uB2E8\uD45C",
      "tableRows": [
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 1",
          "col2": "100% TDEE (0 kcal net change)",
          "col3": "\uCC38\uC870 \uBC94\uC704 Preserves current body weight and energy balance"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 2",
          "col2": "TDEE - 250 kcal/day",
          "col3": "\uCC38\uC870 \uBC94\uC704 Mathematical example of 250 kcal lower daily intake"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 3",
          "col2": "TDEE - 500 kcal/day",
          "col3": "\uCC38\uC870 \uBC94\uC704 Mathematical example of 500 kcal lower daily intake"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 4",
          "col2": "TDEE - 750 kcal/day",
          "col3": "\uCC38\uC870 \uBC94\uC704 Mathematical example of 750 kcal lower daily intake"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 5",
          "col2": "TDEE + 250 to 300 kcal/day",
          "col3": "\uCC38\uC870 \uBC94\uC704 Mathematical example of 250\u2013300 kcal higher daily intake"
        }
      ],
      "faqs": [
        {
          "question": "maintenance calorie calculator \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
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
      "title": "\u0930\u0916\u0930\u0916\u093E\u0935 \u0915\u0948\u0932\u094B\u0930\u0940 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u2013 Calorie Maintenance \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 Online",
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
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E Mathematical example of 250\u2013300 kcal higher daily intake"
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
          "col3": "Rango de referencia Higher body-fat reference category; interpretation varies by age, sex, population, and measurement method"
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
          "col3": "Plage de r\xE9f\xE9rence Reference range commonly associated with fitness-oriented populations"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 4",
          "col2": "Men: 18% - 24% | Women: 25% - 31%",
          "col3": "Plage de r\xE9f\xE9rence Standard acceptable body fat percentage range for healthy adults"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 5",
          "col2": "Men: \u2265 25% | Women: \u2265 32%",
          "col3": "Plage de r\xE9f\xE9rence Higher body-fat reference category; interpretation varies by age, sex, population, and measurement method"
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
          "col3": "Referenzbereich Reference range commonly associated with fitness-oriented populations"
        },
        {
          "col1": "Kategorie / Stufe 4",
          "col2": "Men: 18% - 24% | Women: 25% - 31%",
          "col3": "Referenzbereich Standard acceptable body fat percentage range for healthy adults"
        },
        {
          "col1": "Kategorie / Stufe 5",
          "col2": "Men: \u2265 25% | Women: \u2265 32%",
          "col3": "Referenzbereich Higher body-fat reference category; interpretation varies by age, sex, population, and measurement method"
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
          "col3": "\uCC38\uC870 \uBC94\uC704 Reference range commonly associated with fitness-oriented populations"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 4",
          "col2": "Men: 18% - 24% | Women: 25% - 31%",
          "col3": "\uCC38\uC870 \uBC94\uC704 Standard acceptable body fat percentage range for healthy adults"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 5",
          "col2": "Men: \u2265 25% | Women: \u2265 32%",
          "col3": "\uCC38\uC870 \uBC94\uC704 Higher body-fat reference category; interpretation varies by age, sex, population, and measurement method"
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
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E Reference range commonly associated with fitness-oriented populations"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 4",
          "col2": "Men: 18% - 24% | Women: 25% - 31%",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E Standard acceptable body fat percentage range for healthy adults"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 5",
          "col2": "Men: \u2265 25% | Women: \u2265 32%",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E Higher body-fat reference category; interpretation varies by age, sex, population, and measurement method"
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
          "col3": "Rango de referencia Predictive formula for estimated lean mass in males"
        },
        {
          "col1": "Categor\xEDa / Nivel 2",
          "col2": "(0.252 \xD7 W) + (0.473 \xD7 H) - 48.3",
          "col3": "Rango de referencia Predictive formula for estimated lean mass in females"
        }
      ],
      "faqs": [
        {
          "question": "\xBFC\xF3mo funciona la calculadora de lean body mass calculator y qu\xE9 mide?",
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
          "col3": "Plage de r\xE9f\xE9rence Predictive formula for estimated lean mass in males"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 2",
          "col2": "(0.252 \xD7 W) + (0.473 \xD7 H) - 48.3",
          "col3": "Plage de r\xE9f\xE9rence Predictive formula for estimated lean mass in females"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de lean body mass calculator et que mesure-t-il ?",
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
          "col3": "Referenzbereich Predictive formula for estimated lean mass in males"
        },
        {
          "col1": "Kategorie / Stufe 2",
          "col2": "(0.252 \xD7 W) + (0.473 \xD7 H) - 48.3",
          "col3": "Referenzbereich Predictive formula for estimated lean mass in females"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der lean body mass calculator-Rechner und was misst er?",
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
          "col3": "\uCC38\uC870 \uBC94\uC704 Predictive formula for estimated lean mass in males"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 2",
          "col2": "(0.252 \xD7 W) + (0.473 \xD7 H) - 48.3",
          "col3": "\uCC38\uC870 \uBC94\uC704 Predictive formula for estimated lean mass in females"
        }
      ],
      "faqs": [
        {
          "question": "lean body mass calculator \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
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
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E Predictive formula for estimated lean mass in males"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 2",
          "col2": "(0.252 \xD7 W) + (0.473 \xD7 H) - 48.3",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E Predictive formula for estimated lean mass in females"
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
          "question": "Is the IBW calculator suitable for muscular individuals?",
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
          "col3": "Rango de referencia Widely cited formula introduced in 1974"
        },
        {
          "col1": "Categor\xEDa / Nivel 2",
          "col2": "52 kg (M) / 49.0 kg (F) + 1.9 or 1.7 kg/in",
          "col3": "Rango de referencia Modification of Devine formula optimized for medium frame adults"
        },
        {
          "col1": "Categor\xEDa / Nivel 3",
          "col2": "56.2 kg (M) / 53.1 kg (F) + 1.41 or 1.36 kg/in",
          "col3": "Rango de referencia Higher base estimate for shorter individuals, gentler slope per inch"
        },
        {
          "col1": "Categor\xEDa / Nivel 4",
          "col2": "48 kg (M) / 45.5 kg (F) + 2.7 or 2.2 kg/in",
          "col3": "Rango de referencia Historical reference formula"
        },
        {
          "col1": "Categor\xEDa / Nivel 5",
          "col2": "18.5 \u2013 24.9 kg/m\xB2",
          "col3": "Rango de referencia Population health reference window based on height squared"
        }
      ],
      "faqs": [
        {
          "question": "\xBFC\xF3mo funciona la calculadora de ideal weight calculator y qu\xE9 mide?",
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
          "question": "Is the IBW calculator suitable for muscular individuals?",
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
          "col3": "Plage de r\xE9f\xE9rence Widely cited formula introduced in 1974"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 2",
          "col2": "52 kg (M) / 49.0 kg (F) + 1.9 or 1.7 kg/in",
          "col3": "Plage de r\xE9f\xE9rence Modification of Devine formula optimized for medium frame adults"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 3",
          "col2": "56.2 kg (M) / 53.1 kg (F) + 1.41 or 1.36 kg/in",
          "col3": "Plage de r\xE9f\xE9rence Higher base estimate for shorter individuals, gentler slope per inch"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 4",
          "col2": "48 kg (M) / 45.5 kg (F) + 2.7 or 2.2 kg/in",
          "col3": "Plage de r\xE9f\xE9rence Historical reference formula"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 5",
          "col2": "18.5 \u2013 24.9 kg/m\xB2",
          "col3": "Plage de r\xE9f\xE9rence Population health reference window based on height squared"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de ideal weight calculator et que mesure-t-il ?",
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
          "question": "Is the IBW calculator suitable for muscular individuals?",
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
          "col3": "Referenzbereich Widely cited formula introduced in 1974"
        },
        {
          "col1": "Kategorie / Stufe 2",
          "col2": "52 kg (M) / 49.0 kg (F) + 1.9 or 1.7 kg/in",
          "col3": "Referenzbereich Modification of Devine formula optimized for medium frame adults"
        },
        {
          "col1": "Kategorie / Stufe 3",
          "col2": "56.2 kg (M) / 53.1 kg (F) + 1.41 or 1.36 kg/in",
          "col3": "Referenzbereich Higher base estimate for shorter individuals, gentler slope per inch"
        },
        {
          "col1": "Kategorie / Stufe 4",
          "col2": "48 kg (M) / 45.5 kg (F) + 2.7 or 2.2 kg/in",
          "col3": "Referenzbereich Historical reference formula"
        },
        {
          "col1": "Kategorie / Stufe 5",
          "col2": "18.5 \u2013 24.9 kg/m\xB2",
          "col3": "Referenzbereich Population health reference window based on height squared"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der ideal weight calculator-Rechner und was misst er?",
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
          "question": "Is the IBW calculator suitable for muscular individuals?",
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
          "col3": "\uCC38\uC870 \uBC94\uC704 Widely cited formula introduced in 1974"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 2",
          "col2": "52 kg (M) / 49.0 kg (F) + 1.9 or 1.7 kg/in",
          "col3": "\uCC38\uC870 \uBC94\uC704 Modification of Devine formula optimized for medium frame adults"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 3",
          "col2": "56.2 kg (M) / 53.1 kg (F) + 1.41 or 1.36 kg/in",
          "col3": "\uCC38\uC870 \uBC94\uC704 Higher base estimate for shorter individuals, gentler slope per inch"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 4",
          "col2": "48 kg (M) / 45.5 kg (F) + 2.7 or 2.2 kg/in",
          "col3": "\uCC38\uC870 \uBC94\uC704 Historical reference formula"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 5",
          "col2": "18.5 \u2013 24.9 kg/m\xB2",
          "col3": "\uCC38\uC870 \uBC94\uC704 Population health reference window based on height squared"
        }
      ],
      "faqs": [
        {
          "question": "ideal weight calculator \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
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
          "question": "Is the IBW calculator suitable for muscular individuals? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
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
          "col3": "Rango de referencia Estimated TDEE energy balance for weight stabilization"
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
          "question": "\xBFC\xF3mo funciona la calculadora de calorie calculator y qu\xE9 mide?",
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
          "col3": "Plage de r\xE9f\xE9rence Estimated TDEE energy balance for weight stabilization"
        }
      ],
      "faqs": [
        {
          "question": "Qu'est-ce qu'un d\xE9ficit calorique et comment fonctionne le calculateur ?",
          "answer": "Un d\xE9ficit calorique survient lorsque vous consommez moins de calories que votre TDEE. Le calculateur \xE9tablit votre TDEE puis soustrait le d\xE9ficit choisi pour planifier vos repas."
        },
        {
          "question": "Comment fonctionne le calculateur de calorie calculator et que mesure-t-il ?",
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
          "col3": "Referenzbereich Estimated TDEE energy balance for weight stabilization"
        }
      ],
      "faqs": [
        {
          "question": "Was ist ein Kaloriendefizit und wie funktioniert der Rechner?",
          "answer": "Ein Kaloriendefizit entsteht, wenn die t\xE4gliche Energiezufuhr geringer ist als der Gesamtenergieumsatz (TDEE). Der Rechner berechnet den TDEE und zieht ein gew\xE4hltes Defizit ab."
        },
        {
          "question": "Wie funktioniert der calorie calculator-Rechner und was misst er?",
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
          "col3": "\uCC38\uC870 \uBC94\uC704 Estimated TDEE energy balance for weight stabilization"
        }
      ],
      "faqs": [
        {
          "question": "\uCE7C\uB85C\uB9AC \uACB0\uC190\uC774\uB780 \uBB34\uC5C7\uC774\uBA70 \uACC4\uC0B0\uAE30\uB294 \uC5B4\uB5BB\uAC8C \uC791\uB3D9\uD558\uB098\uC694?",
          "answer": "\uCE7C\uB85C\uB9AC \uACB0\uC190\uC740 \uC77C\uC77C \uC12D\uCDE8 \uCE7C\uB85C\uB9AC\uAC00 \uC77C\uC77C \uCD1D \uC5D0\uB108\uC9C0 \uC18C\uBE44\uB7C9(TDEE)\uBCF4\uB2E4 \uC801\uC744 \uB54C \uBC1C\uC0DD\uD569\uB2C8\uB2E4. \uACC4\uC0B0\uAE30\uB294 TDEE\uB97C \uAD6C\uD55C \uD6C4 \uBAA9\uD45C \uACB0\uC190\uB7C9\uC744 \uCC28\uAC10\uD558\uC5EC \uD45C\uC2DC\uD569\uB2C8\uB2E4."
        },
        {
          "question": "calorie calculator \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
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
          "col1": "\u090A\u0930\u094D\u091C\u093E \u0938\u0902\u0924\u0941\u0932\u0928 (0 kcal)",
          "col2": "0 kcal \u0905\u0902\u0924\u0930",
          "col3": "\u0935\u091C\u0928 \u0938\u094D\u0925\u093F\u0930\u0924\u093E \u0915\u0947 \u0932\u093F\u090F TDEE"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 4",
          "col2": "0 kcal net difference / week",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E Estimated TDEE energy balance for weight stabilization"
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
          "question": "What are the best high-protein food sources to reach daily targets?",
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
      "title": "Protein Intake Calculator & Daily Protein Reference Range Tool \u2013 Gu\xEDa y Calculadora",
      "intro": "Herramienta de c\xE1lculo y referencia educativa dise\xF1ada seg\xFAn los est\xE1ndares de salud publicados de la OMS y CDC. Calcula tus m\xE9tricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "F\xF3rmula de Referencia Est\xE1ndar",
      "formulaDesc": "Calculado utilizando ecuaciones est\xE1ndar validadas.",
      "formulaCode": "Protein Target (g) = Weight (kg) \xD7 Goal Factor (0.8 to 2.4 g/kg)",
      "tableTitle": "Tabla de Referencia Est\xE1ndar",
      "tableRows": [
        {
          "col1": "Categor\xEDa / Nivel 1",
          "col2": "0.8 g / kg body weight",
          "col3": "Rango de referencia RDA baseline reference"
        },
        {
          "col1": "Categor\xEDa / Nivel 2",
          "col2": "1.2 \u2013 1.4 g / kg body weight",
          "col3": "Rango de referencia Reference athletic range"
        },
        {
          "col1": "Categor\xEDa / Nivel 3",
          "col2": "1.6 \u2013 2.2 g / kg body weight",
          "col3": "Rango de referencia Common athletic target for training"
        },
        {
          "col1": "Categor\xEDa / Nivel 4",
          "col2": "1.8 \u2013 2.4 g / kg body weight",
          "col3": "Rango de referencia Example range referenced during calorie deficit planning"
        }
      ],
      "faqs": [
        {
          "question": "\xBFC\xF3mo funciona la calculadora de protein intake calculator y qu\xE9 mide?",
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
          "question": "What are the best high-protein food sources to reach daily targets?",
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
      "title": "Protein Intake Calculator & Daily Protein Reference Range Tool \u2013 Outil de R\xE9f\xE9rence",
      "intro": "Outil de calcul et de r\xE9f\xE9rence \xE9ducatif con\xE7u selon les normes de sant\xE9 publi\xE9es de l'OMS et du CDC. Calculez vos m\xE9triques et consultez les plages de r\xE9f\xE9rence.",
      "formulaTitle": "Formule de R\xE9f\xE9rence Standard",
      "formulaDesc": "Calcul\xE9 \xE0 l'aide d'\xE9quations standards valid\xE9es.",
      "formulaCode": "Protein Target (g) = Weight (kg) \xD7 Goal Factor (0.8 to 2.4 g/kg)",
      "tableTitle": "Tableau de R\xE9f\xE9rence Standard",
      "tableRows": [
        {
          "col1": "Cat\xE9gorie / Niveau 1",
          "col2": "0.8 g / kg body weight",
          "col3": "Plage de r\xE9f\xE9rence RDA baseline reference"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 2",
          "col2": "1.2 \u2013 1.4 g / kg body weight",
          "col3": "Plage de r\xE9f\xE9rence Reference athletic range"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 3",
          "col2": "1.6 \u2013 2.2 g / kg body weight",
          "col3": "Plage de r\xE9f\xE9rence Common athletic target for training"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 4",
          "col2": "1.8 \u2013 2.4 g / kg body weight",
          "col3": "Plage de r\xE9f\xE9rence Example range referenced during calorie deficit planning"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de protein intake calculator et que mesure-t-il ?",
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
          "question": "What are the best high-protein food sources to reach daily targets?",
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
      "title": "Protein Intake Calculator & Daily Protein Reference Range Tool \u2013 Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den ver\xF6ffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und pr\xFCfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardm\xE4\xDFig validierten Gleichungen.",
      "formulaCode": "Protein Target (g) = Weight (kg) \xD7 Goal Factor (0.8 to 2.4 g/kg)",
      "tableTitle": "Standard-Referenztabelle",
      "tableRows": [
        {
          "col1": "Kategorie / Stufe 1",
          "col2": "0.8 g / kg body weight",
          "col3": "Referenzbereich RDA baseline reference"
        },
        {
          "col1": "Kategorie / Stufe 2",
          "col2": "1.2 \u2013 1.4 g / kg body weight",
          "col3": "Referenzbereich Reference athletic range"
        },
        {
          "col1": "Kategorie / Stufe 3",
          "col2": "1.6 \u2013 2.2 g / kg body weight",
          "col3": "Referenzbereich Common athletic target for training"
        },
        {
          "col1": "Kategorie / Stufe 4",
          "col2": "1.8 \u2013 2.4 g / kg body weight",
          "col3": "Referenzbereich Example range referenced during calorie deficit planning"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der protein intake calculator-Rechner und was misst er?",
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
          "question": "What are the best high-protein food sources to reach daily targets?",
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
      "title": "Protein Intake \uACC4\uC0B0\uAE30 & Daily Protein Reference Range \uB3C4\uAD6C \u2013 \uCC38\uC870 \uACC4\uC0B0\uAE30",
      "intro": "WHO \uBC0F CDC \uC9C0\uCE68\uC5D0 \uAE30\uBC18\uD55C \uC2E4\uC2DC\uAC04 \uCC38\uACE0 \uACC4\uC0B0\uAE30\uC785\uB2C8\uB2E4. \uAC1C\uC778\uBCC4 \uC218\uCE58\uB97C \uCE21\uC815\uD558\uACE0 \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uD655\uC778\uD558\uC138\uC694.",
      "formulaTitle": "\uD45C\uC900 \uACC4\uC0B0 \uACF5\uC2DD",
      "formulaDesc": "\uAC80\uC99D\uB41C \uD45C\uC900 \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uACC4\uC0B0\uB429\uB2C8\uB2E4.",
      "formulaCode": "Protein Target (g) = Weight (kg) \xD7 Goal Factor (0.8 to 2.4 g/kg)",
      "tableTitle": "\uD45C\uC900 \uCC38\uC870 \uC9C4\uB2E8\uD45C",
      "tableRows": [
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 1",
          "col2": "0.8 g / kg body weight",
          "col3": "\uCC38\uC870 \uBC94\uC704 RDA baseline reference"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 2",
          "col2": "1.2 \u2013 1.4 g / kg body weight",
          "col3": "\uCC38\uC870 \uBC94\uC704 Reference athletic range"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 3",
          "col2": "1.6 \u2013 2.2 g / kg body weight",
          "col3": "\uCC38\uC870 \uBC94\uC704 Common athletic target for training"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 4",
          "col2": "1.8 \u2013 2.4 g / kg body weight",
          "col3": "\uCC38\uC870 \uBC94\uC704 Example range referenced during calorie deficit planning"
        }
      ],
      "faqs": [
        {
          "question": "protein intake calculator \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
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
          "question": "What are the best high-protein food sources to reach daily targets? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
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
      "title": "Protein Intake \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 & Daily Protein Reference Range \u091F\u0942\u0932 \u2013 \u092E\u0941\u092B\u094D\u0924 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930",
      "intro": "\u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u0914\u0930 \u0938\u0940\u0921\u0940\u0938\u0940 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u092E\u093E\u0928\u0915\u094B\u0902 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0928\u093F\u0930\u094D\u092E\u093F\u0924 \u0938\u0902\u0926\u0930\u094D\u092D \u091F\u0942\u0932\u0964 \u0905\u092A\u0928\u0940 \u092E\u0947\u091F\u094D\u0930\u093F\u0915\u094D\u0938 \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902 \u0914\u0930 \u0938\u094D\u0925\u093E\u092A\u093F\u0924 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0938\u0940\u092E\u093E\u0913\u0902 \u0915\u0940 \u0938\u092E\u0940\u0915\u094D\u0937\u093E \u0915\u0930\u0947\u0902\u0964",
      "formulaTitle": "\u092E\u093E\u0928\u0915 \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0942\u0924\u094D\u0930",
      "formulaDesc": "\u092E\u093E\u0928\u0915 \u0938\u0924\u094D\u092F\u093E\u092A\u093F\u0924 \u0938\u092E\u0940\u0915\u0930\u0923\u094B\u0902 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0915\u0947 \u0917\u0923\u0928\u093E \u0915\u0940 \u0917\u0908\u0964",
      "formulaCode": "Protein Target (g) = Weight (kg) \xD7 Goal Factor (0.8 to 2.4 g/kg)",
      "tableTitle": "\u092E\u093E\u0928\u0915 \u0938\u0902\u0926\u0930\u094D\u092D \u0924\u093E\u0932\u093F\u0915\u093E",
      "tableRows": [
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 1",
          "col2": "0.8 g / kg body weight",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E RDA baseline reference"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 2",
          "col2": "1.2 \u2013 1.4 g / kg body weight",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E Reference athletic range"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 3",
          "col2": "1.6 \u2013 2.2 g / kg body weight",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E Common athletic target for training"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 4",
          "col2": "1.8 \u2013 2.4 g / kg body weight",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E Example range referenced during calorie deficit planning"
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
          "question": "What are the early signs of dehydration and overhydration?",
          "answer": "Dehydration symptoms include dark yellow urine, fatigue, headaches, and dry mouth. Overhydration (hyponatremia) symptoms include clear urine accompanied by nausea and muscle cramps from diluted blood sodium."
        }
      ]
    },
    "es": {
      "eyebrow": "Est\xE1ndares de Referencia de Salud",
      "title": "Water Intake Calculator & Daily Hydration Target Tool \u2013 Gu\xEDa y Calculadora",
      "intro": "Herramienta de c\xE1lculo y referencia educativa dise\xF1ada seg\xFAn los est\xE1ndares de salud publicados de la OMS y CDC. Calcula tus m\xE9tricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "F\xF3rmula de Referencia Est\xE1ndar",
      "formulaDesc": "Calculado utilizando ecuaciones est\xE1ndar validadas.",
      "formulaCode": "Water (L) = (W_kg \xD7 0.035) + (Exercise_hrs \xD7 0.75)",
      "tableTitle": "Tabla de Referencia Est\xE1ndar",
      "tableRows": [
        {
          "col1": "Categor\xEDa / Nivel 1",
          "col2": "1.75 Liters / day",
          "col3": "Rango de referencia ~7 standard 250ml glasses"
        },
        {
          "col1": "Categor\xEDa / Nivel 2",
          "col2": "2.45 Liters / day",
          "col3": "Rango de referencia ~10 standard 250ml glasses"
        },
        {
          "col1": "Categor\xEDa / Nivel 3",
          "col2": "3.20 Liters / day",
          "col3": "Rango de referencia ~13 standard 250ml glasses"
        },
        {
          "col1": "Categor\xEDa / Nivel 4",
          "col2": "4.15 Liters / day",
          "col3": "Rango de referencia ~17 standard 250ml glasses"
        }
      ],
      "faqs": [
        {
          "question": "\xBFC\xF3mo funciona la calculadora de water intake calculator y qu\xE9 mide?",
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
          "question": "What are the early signs of dehydration and overhydration?",
          "answer": "Dehydration symptoms include dark yellow urine, fatigue, headaches, and dry mouth. Overhydration (hyponatremia) symptoms include clear urine accompanied by nausea and muscle cramps from diluted blood sodium."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de R\xE9f\xE9rence de Sant\xE9",
      "title": "Water Intake Calculator & Daily Hydration Target Tool \u2013 Outil de R\xE9f\xE9rence",
      "intro": "Outil de calcul et de r\xE9f\xE9rence \xE9ducatif con\xE7u selon les normes de sant\xE9 publi\xE9es de l'OMS et du CDC. Calculez vos m\xE9triques et consultez les plages de r\xE9f\xE9rence.",
      "formulaTitle": "Formule de R\xE9f\xE9rence Standard",
      "formulaDesc": "Calcul\xE9 \xE0 l'aide d'\xE9quations standards valid\xE9es.",
      "formulaCode": "Water (L) = (W_kg \xD7 0.035) + (Exercise_hrs \xD7 0.75)",
      "tableTitle": "Tableau de R\xE9f\xE9rence Standard",
      "tableRows": [
        {
          "col1": "Cat\xE9gorie / Niveau 1",
          "col2": "1.75 Liters / day",
          "col3": "Plage de r\xE9f\xE9rence ~7 standard 250ml glasses"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 2",
          "col2": "2.45 Liters / day",
          "col3": "Plage de r\xE9f\xE9rence ~10 standard 250ml glasses"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 3",
          "col2": "3.20 Liters / day",
          "col3": "Plage de r\xE9f\xE9rence ~13 standard 250ml glasses"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 4",
          "col2": "4.15 Liters / day",
          "col3": "Plage de r\xE9f\xE9rence ~17 standard 250ml glasses"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de water intake calculator et que mesure-t-il ?",
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
          "question": "What are the early signs of dehydration and overhydration?",
          "answer": "Dehydration symptoms include dark yellow urine, fatigue, headaches, and dry mouth. Overhydration (hyponatremia) symptoms include clear urine accompanied by nausea and muscle cramps from diluted blood sodium."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "Water Intake Calculator & Daily Hydration Target Tool \u2013 Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den ver\xF6ffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und pr\xFCfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardm\xE4\xDFig validierten Gleichungen.",
      "formulaCode": "Water (L) = (W_kg \xD7 0.035) + (Exercise_hrs \xD7 0.75)",
      "tableTitle": "Standard-Referenztabelle",
      "tableRows": [
        {
          "col1": "Kategorie / Stufe 1",
          "col2": "1.75 Liters / day",
          "col3": "Referenzbereich ~7 standard 250ml glasses"
        },
        {
          "col1": "Kategorie / Stufe 2",
          "col2": "2.45 Liters / day",
          "col3": "Referenzbereich ~10 standard 250ml glasses"
        },
        {
          "col1": "Kategorie / Stufe 3",
          "col2": "3.20 Liters / day",
          "col3": "Referenzbereich ~13 standard 250ml glasses"
        },
        {
          "col1": "Kategorie / Stufe 4",
          "col2": "4.15 Liters / day",
          "col3": "Referenzbereich ~17 standard 250ml glasses"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der water intake calculator-Rechner und was misst er?",
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
          "question": "What are the early signs of dehydration and overhydration?",
          "answer": "Dehydration symptoms include dark yellow urine, fatigue, headaches, and dry mouth. Overhydration (hyponatremia) symptoms include clear urine accompanied by nausea and muscle cramps from diluted blood sodium."
        }
      ]
    },
    "ko": {
      "eyebrow": "\uAC74\uAC15 \uCC38\uC870 \uD45C\uC900 \uC9C0\uCE68",
      "title": "Water Intake \uACC4\uC0B0\uAE30 & Daily Hydration Target \uB3C4\uAD6C \u2013 \uCC38\uC870 \uACC4\uC0B0\uAE30",
      "intro": "WHO \uBC0F CDC \uC9C0\uCE68\uC5D0 \uAE30\uBC18\uD55C \uC2E4\uC2DC\uAC04 \uCC38\uACE0 \uACC4\uC0B0\uAE30\uC785\uB2C8\uB2E4. \uAC1C\uC778\uBCC4 \uC218\uCE58\uB97C \uCE21\uC815\uD558\uACE0 \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uD655\uC778\uD558\uC138\uC694.",
      "formulaTitle": "\uD45C\uC900 \uACC4\uC0B0 \uACF5\uC2DD",
      "formulaDesc": "\uAC80\uC99D\uB41C \uD45C\uC900 \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uACC4\uC0B0\uB429\uB2C8\uB2E4.",
      "formulaCode": "Water (L) = (W_kg \xD7 0.035) + (Exercise_hrs \xD7 0.75)",
      "tableTitle": "\uD45C\uC900 \uCC38\uC870 \uC9C4\uB2E8\uD45C",
      "tableRows": [
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 1",
          "col2": "1.75 Liters / day",
          "col3": "\uCC38\uC870 \uBC94\uC704 ~7 standard 250ml glasses"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 2",
          "col2": "2.45 Liters / day",
          "col3": "\uCC38\uC870 \uBC94\uC704 ~10 standard 250ml glasses"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 3",
          "col2": "3.20 Liters / day",
          "col3": "\uCC38\uC870 \uBC94\uC704 ~13 standard 250ml glasses"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 4",
          "col2": "4.15 Liters / day",
          "col3": "\uCC38\uC870 \uBC94\uC704 ~17 standard 250ml glasses"
        }
      ],
      "faqs": [
        {
          "question": "water intake calculator \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
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
          "question": "What are the early signs of dehydration and overhydration? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "Dehydration symptoms include dark yellow urine, fatigue, headaches, and dry mouth. Overhydration (hyponatremia) symptoms include clear urine accompanied by nausea and muscle cramps from diluted blood sodium."
        }
      ]
    },
    "hi": {
      "eyebrow": "\u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0938\u0902\u0926\u0930\u094D\u092D \u092E\u093E\u0928\u0915",
      "title": "Water Intake \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 & Daily Hydration Target \u091F\u0942\u0932 \u2013 \u092E\u0941\u092B\u094D\u0924 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930",
      "intro": "\u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u0914\u0930 \u0938\u0940\u0921\u0940\u0938\u0940 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u092E\u093E\u0928\u0915\u094B\u0902 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0928\u093F\u0930\u094D\u092E\u093F\u0924 \u0938\u0902\u0926\u0930\u094D\u092D \u091F\u0942\u0932\u0964 \u0905\u092A\u0928\u0940 \u092E\u0947\u091F\u094D\u0930\u093F\u0915\u094D\u0938 \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902 \u0914\u0930 \u0938\u094D\u0925\u093E\u092A\u093F\u0924 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0938\u0940\u092E\u093E\u0913\u0902 \u0915\u0940 \u0938\u092E\u0940\u0915\u094D\u0937\u093E \u0915\u0930\u0947\u0902\u0964",
      "formulaTitle": "\u092E\u093E\u0928\u0915 \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0942\u0924\u094D\u0930",
      "formulaDesc": "\u092E\u093E\u0928\u0915 \u0938\u0924\u094D\u092F\u093E\u092A\u093F\u0924 \u0938\u092E\u0940\u0915\u0930\u0923\u094B\u0902 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0915\u0947 \u0917\u0923\u0928\u093E \u0915\u0940 \u0917\u0908\u0964",
      "formulaCode": "Water (L) = (W_kg \xD7 0.035) + (Exercise_hrs \xD7 0.75)",
      "tableTitle": "\u092E\u093E\u0928\u0915 \u0938\u0902\u0926\u0930\u094D\u092D \u0924\u093E\u0932\u093F\u0915\u093E",
      "tableRows": [
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 1",
          "col2": "1.75 Liters / day",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E ~7 standard 250ml glasses"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 2",
          "col2": "2.45 Liters / day",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E ~10 standard 250ml glasses"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 3",
          "col2": "3.20 Liters / day",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E ~13 standard 250ml glasses"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 4",
          "col2": "4.15 Liters / day",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E ~17 standard 250ml glasses"
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
      "title": "Macro Calculator \u2013 Estimated Daily Macro Split \u2013 Gu\xEDa y Calculadora",
      "intro": "Herramienta de c\xE1lculo y referencia educativa dise\xF1ada seg\xFAn los est\xE1ndares de salud publicados de la OMS y CDC. Calcula tus m\xE9tricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "F\xF3rmula de Referencia Est\xE1ndar",
      "formulaDesc": "Calculado utilizando ecuaciones est\xE1ndar validadas.",
      "formulaCode": "Carbs = (kcal \xD7 C%) / 4 | Protein = (kcal \xD7 P%) / 4 | Fat = (kcal \xD7 F%) / 9",
      "tableTitle": "Tabla de Referencia Est\xE1ndar",
      "tableRows": [
        {
          "col1": "Categor\xEDa / Nivel 1",
          "col2": "Balanced: 40% | Low-Carb: 20% | High-Protein: 35%",
          "col3": "Rango de referencia Example fuel source allocation"
        },
        {
          "col1": "Categor\xEDa / Nivel 2",
          "col2": "Balanced: 30% | Low-Carb: 40% | High-Protein: 40%",
          "col3": "Rango de referencia Example protein allocation"
        },
        {
          "col1": "Categor\xEDa / Nivel 3",
          "col2": "Balanced: 30% | Low-Carb: 40% | High-Protein: 25%",
          "col3": "Rango de referencia Example dietary fat allocation"
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
      "title": "Macro Calculator \u2013 Estimated Daily Macro Split \u2013 Outil de R\xE9f\xE9rence",
      "intro": "Outil de calcul et de r\xE9f\xE9rence \xE9ducatif con\xE7u selon les normes de sant\xE9 publi\xE9es de l'OMS et du CDC. Calculez vos m\xE9triques et consultez les plages de r\xE9f\xE9rence.",
      "formulaTitle": "Formule de R\xE9f\xE9rence Standard",
      "formulaDesc": "Calcul\xE9 \xE0 l'aide d'\xE9quations standards valid\xE9es.",
      "formulaCode": "Carbs = (kcal \xD7 C%) / 4 | Protein = (kcal \xD7 P%) / 4 | Fat = (kcal \xD7 F%) / 9",
      "tableTitle": "Tableau de R\xE9f\xE9rence Standard",
      "tableRows": [
        {
          "col1": "Cat\xE9gorie / Niveau 1",
          "col2": "Balanced: 40% | Low-Carb: 20% | High-Protein: 35%",
          "col3": "Plage de r\xE9f\xE9rence Example fuel source allocation"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 2",
          "col2": "Balanced: 30% | Low-Carb: 40% | High-Protein: 40%",
          "col3": "Plage de r\xE9f\xE9rence Example protein allocation"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 3",
          "col2": "Balanced: 30% | Low-Carb: 40% | High-Protein: 25%",
          "col3": "Plage de r\xE9f\xE9rence Example dietary fat allocation"
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
      "title": "Macro Calculator \u2013 Estimated Daily Macro Split \u2013 Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den ver\xF6ffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und pr\xFCfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardm\xE4\xDFig validierten Gleichungen.",
      "formulaCode": "Carbs = (kcal \xD7 C%) / 4 | Protein = (kcal \xD7 P%) / 4 | Fat = (kcal \xD7 F%) / 9",
      "tableTitle": "Standard-Referenztabelle",
      "tableRows": [
        {
          "col1": "Kategorie / Stufe 1",
          "col2": "Balanced: 40% | Low-Carb: 20% | High-Protein: 35%",
          "col3": "Referenzbereich Example fuel source allocation"
        },
        {
          "col1": "Kategorie / Stufe 2",
          "col2": "Balanced: 30% | Low-Carb: 40% | High-Protein: 40%",
          "col3": "Referenzbereich Example protein allocation"
        },
        {
          "col1": "Kategorie / Stufe 3",
          "col2": "Balanced: 30% | Low-Carb: 40% | High-Protein: 25%",
          "col3": "Referenzbereich Example dietary fat allocation"
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
      "title": "Macro \uACC4\uC0B0\uAE30 \u2013 Estimated Daily Macro Split \u2013 \uCC38\uC870 \uACC4\uC0B0\uAE30",
      "intro": "WHO \uBC0F CDC \uC9C0\uCE68\uC5D0 \uAE30\uBC18\uD55C \uC2E4\uC2DC\uAC04 \uCC38\uACE0 \uACC4\uC0B0\uAE30\uC785\uB2C8\uB2E4. \uAC1C\uC778\uBCC4 \uC218\uCE58\uB97C \uCE21\uC815\uD558\uACE0 \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uD655\uC778\uD558\uC138\uC694.",
      "formulaTitle": "\uD45C\uC900 \uACC4\uC0B0 \uACF5\uC2DD",
      "formulaDesc": "\uAC80\uC99D\uB41C \uD45C\uC900 \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uACC4\uC0B0\uB429\uB2C8\uB2E4.",
      "formulaCode": "Carbs = (kcal \xD7 C%) / 4 | Protein = (kcal \xD7 P%) / 4 | Fat = (kcal \xD7 F%) / 9",
      "tableTitle": "\uD45C\uC900 \uCC38\uC870 \uC9C4\uB2E8\uD45C",
      "tableRows": [
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 1",
          "col2": "Balanced: 40% | Low-Carb: 20% | High-Protein: 35%",
          "col3": "\uCC38\uC870 \uBC94\uC704 Example fuel source allocation"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 2",
          "col2": "Balanced: 30% | Low-Carb: 40% | High-Protein: 40%",
          "col3": "\uCC38\uC870 \uBC94\uC704 Example protein allocation"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 3",
          "col2": "Balanced: 30% | Low-Carb: 40% | High-Protein: 25%",
          "col3": "\uCC38\uC870 \uBC94\uC704 Example dietary fat allocation"
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
      "title": "Macro \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u2013 Estimated Daily Macro Split \u2013 \u092E\u0941\u092B\u094D\u0924 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930",
      "intro": "\u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u0914\u0930 \u0938\u0940\u0921\u0940\u0938\u0940 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u092E\u093E\u0928\u0915\u094B\u0902 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0928\u093F\u0930\u094D\u092E\u093F\u0924 \u0938\u0902\u0926\u0930\u094D\u092D \u091F\u0942\u0932\u0964 \u0905\u092A\u0928\u0940 \u092E\u0947\u091F\u094D\u0930\u093F\u0915\u094D\u0938 \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902 \u0914\u0930 \u0938\u094D\u0925\u093E\u092A\u093F\u0924 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0938\u0940\u092E\u093E\u0913\u0902 \u0915\u0940 \u0938\u092E\u0940\u0915\u094D\u0937\u093E \u0915\u0930\u0947\u0902\u0964",
      "formulaTitle": "\u092E\u093E\u0928\u0915 \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0942\u0924\u094D\u0930",
      "formulaDesc": "\u092E\u093E\u0928\u0915 \u0938\u0924\u094D\u092F\u093E\u092A\u093F\u0924 \u0938\u092E\u0940\u0915\u0930\u0923\u094B\u0902 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0915\u0947 \u0917\u0923\u0928\u093E \u0915\u0940 \u0917\u0908\u0964",
      "formulaCode": "Carbs = (kcal \xD7 C%) / 4 | Protein = (kcal \xD7 P%) / 4 | Fat = (kcal \xD7 F%) / 9",
      "tableTitle": "\u092E\u093E\u0928\u0915 \u0938\u0902\u0926\u0930\u094D\u092D \u0924\u093E\u0932\u093F\u0915\u093E",
      "tableRows": [
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 1",
          "col2": "Balanced: 40% | Low-Carb: 20% | High-Protein: 35%",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E Example fuel source allocation"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 2",
          "col2": "Balanced: 30% | Low-Carb: 40% | High-Protein: 40%",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E Example protein allocation"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 3",
          "col2": "Balanced: 30% | Low-Carb: 40% | High-Protein: 25%",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E Example dietary fat allocation"
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
      "title": "Waist to Hip Ratio Calculator & WHR Reference Tool \u2013 Gu\xEDa y Calculadora",
      "intro": "Herramienta de c\xE1lculo y referencia educativa dise\xF1ada seg\xFAn los est\xE1ndares de salud publicados de la OMS y CDC. Calcula tus m\xE9tricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "F\xF3rmula de Referencia Est\xE1ndar",
      "formulaDesc": "Calculado utilizando ecuaciones est\xE1ndar validadas.",
      "formulaCode": "WHR = Waist / Hip",
      "tableTitle": "Tabla de Referencia Est\xE1ndar",
      "tableRows": [
        {
          "col1": "Categor\xEDa / Nivel 1",
          "col2": "Men: < 0.90 | Women: < 0.80",
          "col3": "Rango de referencia Subcutaneous fat distribution reference window"
        },
        {
          "col1": "Categor\xEDa / Nivel 2",
          "col2": "Men: 0.90 \u2013 0.99 | Women: 0.80 \u2013 0.84",
          "col3": "Rango de referencia Moderate abdominal central fat reference window"
        },
        {
          "col1": "Categor\xEDa / Nivel 3",
          "col2": "Men: \u2265 1.00 | Women: \u2265 0.85",
          "col3": "Rango de referencia Higher central fat distribution reference window; additional screening context"
        }
      ],
      "faqs": [
        {
          "question": "\xBFC\xF3mo funciona la calculadora de waist to hip ratio calculator y qu\xE9 mide?",
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
          "question": "C\xF3mo accurately measure waist and hip circumference for the WHR calculator?",
          "answer": "Stand upright and exhale gently. Wrap a flexible tape measure around your waist horizontally at the narrowest point (or at navel level). Measure your hips at the maximum protrusion of your buttocks."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de R\xE9f\xE9rence de Sant\xE9",
      "title": "Waist to Hip Ratio Calculator & WHR Reference Tool \u2013 Outil de R\xE9f\xE9rence",
      "intro": "Outil de calcul et de r\xE9f\xE9rence \xE9ducatif con\xE7u selon les normes de sant\xE9 publi\xE9es de l'OMS et du CDC. Calculez vos m\xE9triques et consultez les plages de r\xE9f\xE9rence.",
      "formulaTitle": "Formule de R\xE9f\xE9rence Standard",
      "formulaDesc": "Calcul\xE9 \xE0 l'aide d'\xE9quations standards valid\xE9es.",
      "formulaCode": "WHR = Waist / Hip",
      "tableTitle": "Tableau de R\xE9f\xE9rence Standard",
      "tableRows": [
        {
          "col1": "Cat\xE9gorie / Niveau 1",
          "col2": "Men: < 0.90 | Women: < 0.80",
          "col3": "Plage de r\xE9f\xE9rence Subcutaneous fat distribution reference window"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 2",
          "col2": "Men: 0.90 \u2013 0.99 | Women: 0.80 \u2013 0.84",
          "col3": "Plage de r\xE9f\xE9rence Moderate abdominal central fat reference window"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 3",
          "col2": "Men: \u2265 1.00 | Women: \u2265 0.85",
          "col3": "Plage de r\xE9f\xE9rence Higher central fat distribution reference window; additional screening context"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de waist to hip ratio calculator et que mesure-t-il ?",
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
          "question": "Comment accurately measure waist and hip circumference for the WHR calculator?",
          "answer": "Stand upright and exhale gently. Wrap a flexible tape measure around your waist horizontally at the narrowest point (or at navel level). Measure your hips at the maximum protrusion of your buttocks."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "Waist to Hip Ratio Calculator & WHR Reference Tool \u2013 Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den ver\xF6ffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und pr\xFCfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardm\xE4\xDFig validierten Gleichungen.",
      "formulaCode": "WHR = Waist / Hip",
      "tableTitle": "Standard-Referenztabelle",
      "tableRows": [
        {
          "col1": "Kategorie / Stufe 1",
          "col2": "Men: < 0.90 | Women: < 0.80",
          "col3": "Referenzbereich Subcutaneous fat distribution reference window"
        },
        {
          "col1": "Kategorie / Stufe 2",
          "col2": "Men: 0.90 \u2013 0.99 | Women: 0.80 \u2013 0.84",
          "col3": "Referenzbereich Moderate abdominal central fat reference window"
        },
        {
          "col1": "Kategorie / Stufe 3",
          "col2": "Men: \u2265 1.00 | Women: \u2265 0.85",
          "col3": "Referenzbereich Higher central fat distribution reference window; additional screening context"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der waist to hip ratio calculator-Rechner und was misst er?",
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
          "question": "Wie man accurately measure waist and hip circumference for the WHR calculator?",
          "answer": "Stand upright and exhale gently. Wrap a flexible tape measure around your waist horizontally at the narrowest point (or at navel level). Measure your hips at the maximum protrusion of your buttocks."
        }
      ]
    },
    "ko": {
      "eyebrow": "\uAC74\uAC15 \uCC38\uC870 \uD45C\uC900 \uC9C0\uCE68",
      "title": "Waist to Hip Ratio \uACC4\uC0B0\uAE30 & WHR Reference \uB3C4\uAD6C \u2013 \uCC38\uC870 \uACC4\uC0B0\uAE30",
      "intro": "WHO \uBC0F CDC \uC9C0\uCE68\uC5D0 \uAE30\uBC18\uD55C \uC2E4\uC2DC\uAC04 \uCC38\uACE0 \uACC4\uC0B0\uAE30\uC785\uB2C8\uB2E4. \uAC1C\uC778\uBCC4 \uC218\uCE58\uB97C \uCE21\uC815\uD558\uACE0 \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uD655\uC778\uD558\uC138\uC694.",
      "formulaTitle": "\uD45C\uC900 \uACC4\uC0B0 \uACF5\uC2DD",
      "formulaDesc": "\uAC80\uC99D\uB41C \uD45C\uC900 \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uACC4\uC0B0\uB429\uB2C8\uB2E4.",
      "formulaCode": "WHR = Waist / Hip",
      "tableTitle": "\uD45C\uC900 \uCC38\uC870 \uC9C4\uB2E8\uD45C",
      "tableRows": [
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 1",
          "col2": "Men: < 0.90 | Women: < 0.80",
          "col3": "\uCC38\uC870 \uBC94\uC704 Subcutaneous fat distribution reference window"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 2",
          "col2": "Men: 0.90 \u2013 0.99 | Women: 0.80 \u2013 0.84",
          "col3": "\uCC38\uC870 \uBC94\uC704 Moderate abdominal central fat reference window"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 3",
          "col2": "Men: \u2265 1.00 | Women: \u2265 0.85",
          "col3": "\uCC38\uC870 \uBC94\uC704 Higher central fat distribution reference window; additional screening context"
        }
      ],
      "faqs": [
        {
          "question": "waist to hip ratio calculator \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
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
          "question": " accurately measure waist and hip circumference for the WHR calculator? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "Stand upright and exhale gently. Wrap a flexible tape measure around your waist horizontally at the narrowest point (or at navel level). Measure your hips at the maximum protrusion of your buttocks."
        }
      ]
    },
    "hi": {
      "eyebrow": "\u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0938\u0902\u0926\u0930\u094D\u092D \u092E\u093E\u0928\u0915",
      "title": "Waist to Hip Ratio \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 & WHR Reference \u091F\u0942\u0932 \u2013 \u092E\u0941\u092B\u094D\u0924 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930",
      "intro": "\u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u0914\u0930 \u0938\u0940\u0921\u0940\u0938\u0940 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u092E\u093E\u0928\u0915\u094B\u0902 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0928\u093F\u0930\u094D\u092E\u093F\u0924 \u0938\u0902\u0926\u0930\u094D\u092D \u091F\u0942\u0932\u0964 \u0905\u092A\u0928\u0940 \u092E\u0947\u091F\u094D\u0930\u093F\u0915\u094D\u0938 \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902 \u0914\u0930 \u0938\u094D\u0925\u093E\u092A\u093F\u0924 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0938\u0940\u092E\u093E\u0913\u0902 \u0915\u0940 \u0938\u092E\u0940\u0915\u094D\u0937\u093E \u0915\u0930\u0947\u0902\u0964",
      "formulaTitle": "\u092E\u093E\u0928\u0915 \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0942\u0924\u094D\u0930",
      "formulaDesc": "\u092E\u093E\u0928\u0915 \u0938\u0924\u094D\u092F\u093E\u092A\u093F\u0924 \u0938\u092E\u0940\u0915\u0930\u0923\u094B\u0902 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0915\u0947 \u0917\u0923\u0928\u093E \u0915\u0940 \u0917\u0908\u0964",
      "formulaCode": "WHR = Waist / Hip",
      "tableTitle": "\u092E\u093E\u0928\u0915 \u0938\u0902\u0926\u0930\u094D\u092D \u0924\u093E\u0932\u093F\u0915\u093E",
      "tableRows": [
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 1",
          "col2": "Men: < 0.90 | Women: < 0.80",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E Subcutaneous fat distribution reference window"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 2",
          "col2": "Men: 0.90 \u2013 0.99 | Women: 0.80 \u2013 0.84",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E Moderate abdominal central fat reference window"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 3",
          "col2": "Men: \u2265 1.00 | Women: \u2265 0.85",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E Higher central fat distribution reference window; additional screening context"
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
      "title": "Body Surface Area Calculator \u2014 Mosteller & Du Bois Reference Equations \u2013 Gu\xEDa y Calculadora",
      "intro": "Herramienta de c\xE1lculo y referencia educativa dise\xF1ada seg\xFAn los est\xE1ndares de salud publicados de la OMS y CDC. Calcula tus m\xE9tricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "F\xF3rmula de Referencia Est\xE1ndar",
      "formulaDesc": "Calculado utilizando ecuaciones est\xE1ndar validadas.",
      "formulaCode": "BSA (m\xB2) = \u221A [ (Height cm \xD7 Weight kg) / 3600 ]",
      "tableTitle": "Tabla de Referencia Est\xE1ndar",
      "tableRows": [
        {
          "col1": "Categor\xEDa / Nivel 1",
          "col2": "0.25 m\xB2 \u2013 0.35 m\xB2",
          "col3": "Rango de referencia Infant population rango de referencia"
        },
        {
          "col1": "Categor\xEDa / Nivel 2",
          "col2": "0.50 m\xB2 \u2013 1.07 m\xB2",
          "col3": "Rango de referencia Child population rango de referencia"
        },
        {
          "col1": "Categor\xEDa / Nivel 3",
          "col2": "1.60 m\xB2",
          "col3": "Rango de referencia Standard adult female population average"
        },
        {
          "col1": "Categor\xEDa / Nivel 4",
          "col2": "1.90 m\xB2",
          "col3": "Rango de referencia Standard adult male population average"
        }
      ],
      "faqs": [
        {
          "question": "\xBFC\xF3mo funciona la calculadora de body surface area calculator y qu\xE9 mide?",
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
      "title": "Body Surface Area Calculator \u2014 Mosteller & Du Bois Reference Equations \u2013 Outil de R\xE9f\xE9rence",
      "intro": "Outil de calcul et de r\xE9f\xE9rence \xE9ducatif con\xE7u selon les normes de sant\xE9 publi\xE9es de l'OMS et du CDC. Calculez vos m\xE9triques et consultez les plages de r\xE9f\xE9rence.",
      "formulaTitle": "Formule de R\xE9f\xE9rence Standard",
      "formulaDesc": "Calcul\xE9 \xE0 l'aide d'\xE9quations standards valid\xE9es.",
      "formulaCode": "BSA (m\xB2) = \u221A [ (Height cm \xD7 Weight kg) / 3600 ]",
      "tableTitle": "Tableau de R\xE9f\xE9rence Standard",
      "tableRows": [
        {
          "col1": "Cat\xE9gorie / Niveau 1",
          "col2": "0.25 m\xB2 \u2013 0.35 m\xB2",
          "col3": "Plage de r\xE9f\xE9rence Infant population plage de r\xE9f\xE9rence"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 2",
          "col2": "0.50 m\xB2 \u2013 1.07 m\xB2",
          "col3": "Plage de r\xE9f\xE9rence Child population plage de r\xE9f\xE9rence"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 3",
          "col2": "1.60 m\xB2",
          "col3": "Plage de r\xE9f\xE9rence Standard adult female population average"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 4",
          "col2": "1.90 m\xB2",
          "col3": "Plage de r\xE9f\xE9rence Standard adult male population average"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de body surface area calculator et que mesure-t-il ?",
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
      "title": "Body Surface Area Calculator \u2014 Mosteller & Du Bois Reference Equations \u2013 Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den ver\xF6ffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und pr\xFCfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardm\xE4\xDFig validierten Gleichungen.",
      "formulaCode": "BSA (m\xB2) = \u221A [ (Height cm \xD7 Weight kg) / 3600 ]",
      "tableTitle": "Standard-Referenztabelle",
      "tableRows": [
        {
          "col1": "Kategorie / Stufe 1",
          "col2": "0.25 m\xB2 \u2013 0.35 m\xB2",
          "col3": "Referenzbereich Infant population Referenzbereich"
        },
        {
          "col1": "Kategorie / Stufe 2",
          "col2": "0.50 m\xB2 \u2013 1.07 m\xB2",
          "col3": "Referenzbereich Child population Referenzbereich"
        },
        {
          "col1": "Kategorie / Stufe 3",
          "col2": "1.60 m\xB2",
          "col3": "Referenzbereich Standard adult female population average"
        },
        {
          "col1": "Kategorie / Stufe 4",
          "col2": "1.90 m\xB2",
          "col3": "Referenzbereich Standard adult male population average"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der body surface area calculator-Rechner und was misst er?",
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
      "title": "Body Surface Area \uACC4\uC0B0\uAE30 \u2014 Mosteller & Du Bois Reference Equations \u2013 \uCC38\uC870 \uACC4\uC0B0\uAE30",
      "intro": "WHO \uBC0F CDC \uC9C0\uCE68\uC5D0 \uAE30\uBC18\uD55C \uC2E4\uC2DC\uAC04 \uCC38\uACE0 \uACC4\uC0B0\uAE30\uC785\uB2C8\uB2E4. \uAC1C\uC778\uBCC4 \uC218\uCE58\uB97C \uCE21\uC815\uD558\uACE0 \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uD655\uC778\uD558\uC138\uC694.",
      "formulaTitle": "\uD45C\uC900 \uACC4\uC0B0 \uACF5\uC2DD",
      "formulaDesc": "\uAC80\uC99D\uB41C \uD45C\uC900 \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uACC4\uC0B0\uB429\uB2C8\uB2E4.",
      "formulaCode": "BSA (m\xB2) = \u221A [ (Height cm \xD7 Weight kg) / 3600 ]",
      "tableTitle": "\uD45C\uC900 \uCC38\uC870 \uC9C4\uB2E8\uD45C",
      "tableRows": [
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 1",
          "col2": "0.25 m\xB2 \u2013 0.35 m\xB2",
          "col3": "\uCC38\uC870 \uBC94\uC704 Infant population \uCC38\uC870 \uBC94\uC704"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 2",
          "col2": "0.50 m\xB2 \u2013 1.07 m\xB2",
          "col3": "\uCC38\uC870 \uBC94\uC704 Child population \uCC38\uC870 \uBC94\uC704"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 3",
          "col2": "1.60 m\xB2",
          "col3": "\uCC38\uC870 \uBC94\uC704 Standard adult female population average"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 4",
          "col2": "1.90 m\xB2",
          "col3": "\uCC38\uC870 \uBC94\uC704 Standard adult male population average"
        }
      ],
      "faqs": [
        {
          "question": "body surface area calculator \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
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
      "title": "Body Surface Area \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 \u2014 Mosteller & Du Bois Reference Equations \u2013 \u092E\u0941\u092B\u094D\u0924 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930",
      "intro": "\u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u0914\u0930 \u0938\u0940\u0921\u0940\u0938\u0940 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u092E\u093E\u0928\u0915\u094B\u0902 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0928\u093F\u0930\u094D\u092E\u093F\u0924 \u0938\u0902\u0926\u0930\u094D\u092D \u091F\u0942\u0932\u0964 \u0905\u092A\u0928\u0940 \u092E\u0947\u091F\u094D\u0930\u093F\u0915\u094D\u0938 \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902 \u0914\u0930 \u0938\u094D\u0925\u093E\u092A\u093F\u0924 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0938\u0940\u092E\u093E\u0913\u0902 \u0915\u0940 \u0938\u092E\u0940\u0915\u094D\u0937\u093E \u0915\u0930\u0947\u0902\u0964",
      "formulaTitle": "\u092E\u093E\u0928\u0915 \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0942\u0924\u094D\u0930",
      "formulaDesc": "\u092E\u093E\u0928\u0915 \u0938\u0924\u094D\u092F\u093E\u092A\u093F\u0924 \u0938\u092E\u0940\u0915\u0930\u0923\u094B\u0902 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0915\u0947 \u0917\u0923\u0928\u093E \u0915\u0940 \u0917\u0908\u0964",
      "formulaCode": "BSA (m\xB2) = \u221A [ (Height cm \xD7 Weight kg) / 3600 ]",
      "tableTitle": "\u092E\u093E\u0928\u0915 \u0938\u0902\u0926\u0930\u094D\u092D \u0924\u093E\u0932\u093F\u0915\u093E",
      "tableRows": [
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 1",
          "col2": "0.25 m\xB2 \u2013 0.35 m\xB2",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E Infant population \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 2",
          "col2": "0.50 m\xB2 \u2013 1.07 m\xB2",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E Child population \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 3",
          "col2": "1.60 m\xB2",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E Standard adult female population average"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 4",
          "col2": "1.90 m\xB2",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E Standard adult male population average"
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
      "title": "Karvonen Heart Rate Zone Calculator & Target Heart Rate Tool \u2013 Gu\xEDa y Calculadora",
      "intro": "Herramienta de c\xE1lculo y referencia educativa dise\xF1ada seg\xFAn los est\xE1ndares de salud publicados de la OMS y CDC. Calcula tus m\xE9tricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "F\xF3rmula de Referencia Est\xE1ndar",
      "formulaDesc": "Calculado utilizando ecuaciones est\xE1ndar validadas.",
      "formulaCode": "Target HR = RHR + [(220 - Age - RHR) \xD7 % Intensity]",
      "tableTitle": "Tabla de Referencia Est\xE1ndar",
      "tableRows": [
        {
          "col1": "Categor\xEDa / Nivel 1",
          "col2": "Active Recovery / Warmup",
          "col3": "Rango de referencia Promotes blood circulation & passive recovery"
        },
        {
          "col1": "Categor\xEDa / Nivel 2",
          "col2": "Moderate Aerobic Training",
          "col3": "Rango de referencia Often used for aerobic base training and moderate-intensity exercise"
        },
        {
          "col1": "Categor\xEDa / Nivel 3",
          "col2": "Aerobic Endurance / Fitness",
          "col3": "Rango de referencia Improves cardiovascular efficiency & stamina"
        },
        {
          "col1": "Categor\xEDa / Nivel 4",
          "col2": "Anaerobic / Lactate Threshold",
          "col3": "Rango de referencia Increases high-intensity exercise tolerance"
        },
        {
          "col1": "Categor\xEDa / Nivel 5",
          "col2": "Maximal VO2 Max Peak Power",
          "col3": "Rango de referencia Neuromuscular speed & peak sprint conditioning"
        }
      ],
      "faqs": [
        {
          "question": "\xBFC\xF3mo funciona la calculadora de heart rate zone calculator y qu\xE9 mide?",
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
      "title": "Karvonen Heart Rate Zone Calculator & Target Heart Rate Tool \u2013 Outil de R\xE9f\xE9rence",
      "intro": "Outil de calcul et de r\xE9f\xE9rence \xE9ducatif con\xE7u selon les normes de sant\xE9 publi\xE9es de l'OMS et du CDC. Calculez vos m\xE9triques et consultez les plages de r\xE9f\xE9rence.",
      "formulaTitle": "Formule de R\xE9f\xE9rence Standard",
      "formulaDesc": "Calcul\xE9 \xE0 l'aide d'\xE9quations standards valid\xE9es.",
      "formulaCode": "Target HR = RHR + [(220 - Age - RHR) \xD7 % Intensity]",
      "tableTitle": "Tableau de R\xE9f\xE9rence Standard",
      "tableRows": [
        {
          "col1": "Cat\xE9gorie / Niveau 1",
          "col2": "Active Recovery / Warmup",
          "col3": "Plage de r\xE9f\xE9rence Promotes blood circulation & passive recovery"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 2",
          "col2": "Moderate Aerobic Training",
          "col3": "Plage de r\xE9f\xE9rence Often used for aerobic base training and moderate-intensity exercise"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 3",
          "col2": "Aerobic Endurance / Fitness",
          "col3": "Plage de r\xE9f\xE9rence Improves cardiovascular efficiency & stamina"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 4",
          "col2": "Anaerobic / Lactate Threshold",
          "col3": "Plage de r\xE9f\xE9rence Increases high-intensity exercise tolerance"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 5",
          "col2": "Maximal VO2 Max Peak Power",
          "col3": "Plage de r\xE9f\xE9rence Neuromuscular speed & peak sprint conditioning"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de heart rate zone calculator et que mesure-t-il ?",
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
      "title": "Karvonen Heart Rate Zone Calculator & Target Heart Rate Tool \u2013 Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den ver\xF6ffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und pr\xFCfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardm\xE4\xDFig validierten Gleichungen.",
      "formulaCode": "Target HR = RHR + [(220 - Age - RHR) \xD7 % Intensity]",
      "tableTitle": "Standard-Referenztabelle",
      "tableRows": [
        {
          "col1": "Kategorie / Stufe 1",
          "col2": "Active Recovery / Warmup",
          "col3": "Referenzbereich Promotes blood circulation & passive recovery"
        },
        {
          "col1": "Kategorie / Stufe 2",
          "col2": "Moderate Aerobic Training",
          "col3": "Referenzbereich Often used for aerobic base training and moderate-intensity exercise"
        },
        {
          "col1": "Kategorie / Stufe 3",
          "col2": "Aerobic Endurance / Fitness",
          "col3": "Referenzbereich Improves cardiovascular efficiency & stamina"
        },
        {
          "col1": "Kategorie / Stufe 4",
          "col2": "Anaerobic / Lactate Threshold",
          "col3": "Referenzbereich Increases high-intensity exercise tolerance"
        },
        {
          "col1": "Kategorie / Stufe 5",
          "col2": "Maximal VO2 Max Peak Power",
          "col3": "Referenzbereich Neuromuscular speed & peak sprint conditioning"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der heart rate zone calculator-Rechner und was misst er?",
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
      "title": "Karvonen Heart Rate Zone \uACC4\uC0B0\uAE30 & Target Heart Rate \uB3C4\uAD6C \u2013 \uCC38\uC870 \uACC4\uC0B0\uAE30",
      "intro": "WHO \uBC0F CDC \uC9C0\uCE68\uC5D0 \uAE30\uBC18\uD55C \uC2E4\uC2DC\uAC04 \uCC38\uACE0 \uACC4\uC0B0\uAE30\uC785\uB2C8\uB2E4. \uAC1C\uC778\uBCC4 \uC218\uCE58\uB97C \uCE21\uC815\uD558\uACE0 \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uD655\uC778\uD558\uC138\uC694.",
      "formulaTitle": "\uD45C\uC900 \uACC4\uC0B0 \uACF5\uC2DD",
      "formulaDesc": "\uAC80\uC99D\uB41C \uD45C\uC900 \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uACC4\uC0B0\uB429\uB2C8\uB2E4.",
      "formulaCode": "Target HR = RHR + [(220 - Age - RHR) \xD7 % Intensity]",
      "tableTitle": "\uD45C\uC900 \uCC38\uC870 \uC9C4\uB2E8\uD45C",
      "tableRows": [
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 1",
          "col2": "Active Recovery / Warmup",
          "col3": "\uCC38\uC870 \uBC94\uC704 Promotes blood circulation & passive recovery"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 2",
          "col2": "Moderate Aerobic Training",
          "col3": "\uCC38\uC870 \uBC94\uC704 Often used for aerobic base training and moderate-intensity exercise"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 3",
          "col2": "Aerobic Endurance / Fitness",
          "col3": "\uCC38\uC870 \uBC94\uC704 Improves cardiovascular efficiency & stamina"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 4",
          "col2": "Anaerobic / Lactate Threshold",
          "col3": "\uCC38\uC870 \uBC94\uC704 Increases high-intensity exercise tolerance"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 5",
          "col2": "Maximal VO2 Max Peak Power",
          "col3": "\uCC38\uC870 \uBC94\uC704 Neuromuscular speed & peak sprint conditioning"
        }
      ],
      "faqs": [
        {
          "question": "heart rate zone calculator \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
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
      "title": "Karvonen Heart Rate Zone \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 & Target Heart Rate \u091F\u0942\u0932 \u2013 \u092E\u0941\u092B\u094D\u0924 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930",
      "intro": "\u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u0914\u0930 \u0938\u0940\u0921\u0940\u0938\u0940 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u092E\u093E\u0928\u0915\u094B\u0902 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0928\u093F\u0930\u094D\u092E\u093F\u0924 \u0938\u0902\u0926\u0930\u094D\u092D \u091F\u0942\u0932\u0964 \u0905\u092A\u0928\u0940 \u092E\u0947\u091F\u094D\u0930\u093F\u0915\u094D\u0938 \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902 \u0914\u0930 \u0938\u094D\u0925\u093E\u092A\u093F\u0924 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0938\u0940\u092E\u093E\u0913\u0902 \u0915\u0940 \u0938\u092E\u0940\u0915\u094D\u0937\u093E \u0915\u0930\u0947\u0902\u0964",
      "formulaTitle": "\u092E\u093E\u0928\u0915 \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0942\u0924\u094D\u0930",
      "formulaDesc": "\u092E\u093E\u0928\u0915 \u0938\u0924\u094D\u092F\u093E\u092A\u093F\u0924 \u0938\u092E\u0940\u0915\u0930\u0923\u094B\u0902 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0915\u0947 \u0917\u0923\u0928\u093E \u0915\u0940 \u0917\u0908\u0964",
      "formulaCode": "Target HR = RHR + [(220 - Age - RHR) \xD7 % Intensity]",
      "tableTitle": "\u092E\u093E\u0928\u0915 \u0938\u0902\u0926\u0930\u094D\u092D \u0924\u093E\u0932\u093F\u0915\u093E",
      "tableRows": [
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 1",
          "col2": "Active Recovery / Warmup",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E Promotes blood circulation & passive recovery"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 2",
          "col2": "Moderate Aerobic Training",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E Often used for aerobic base training and moderate-intensity exercise"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 3",
          "col2": "Aerobic Endurance / Fitness",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E Improves cardiovascular efficiency & stamina"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 4",
          "col2": "Anaerobic / Lactate Threshold",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E Increases high-intensity exercise tolerance"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 5",
          "col2": "Maximal VO2 Max Peak Power",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E Neuromuscular speed & peak sprint conditioning"
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
      "title": "Karvonen Heart Rate Calculator \u2013 Target Heart Rate Zones & HRR \u2013 Gu\xEDa y Calculadora",
      "intro": "Herramienta de c\xE1lculo y referencia educativa dise\xF1ada seg\xFAn los est\xE1ndares de salud publicados de la OMS y CDC. Calcula tus m\xE9tricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "F\xF3rmula de Referencia Est\xE1ndar",
      "formulaDesc": "Calculado utilizando ecuaciones est\xE1ndar validadas.",
      "formulaCode": "THR = (HRR \xD7 Intensity%) + Resting HR",
      "tableTitle": "Tabla de Referencia Est\xE1ndar",
      "tableRows": [
        {
          "col1": "Categor\xEDa / Nivel 1",
          "col2": "50% \u2013 60% HRR",
          "col3": "Rango de referencia Warm-up, cooldown, and active recovery"
        },
        {
          "col1": "Categor\xEDa / Nivel 2",
          "col2": "60% \u2013 70% HRR",
          "col3": "Rango de referencia Optimal zone for sustainable fat burning and aerobic base building"
        },
        {
          "col1": "Categor\xEDa / Nivel 3",
          "col2": "70% \u2013 80% HRR",
          "col3": "Rango de referencia Improves cardiovascular capacity and stamina"
        },
        {
          "col1": "Categor\xEDa / Nivel 4",
          "col2": "80% \u2013 90% HRR",
          "col3": "Rango de referencia Increases high-intensity performance and lactate threshold"
        },
        {
          "col1": "Categor\xEDa / Nivel 5",
          "col2": "90% \u2013 100% HRR",
          "col3": "Rango de referencia Maximal speed and interval training"
        }
      ],
      "faqs": [
        {
          "question": "\xBFC\xF3mo funciona la calculadora de karvonen heart rate calculator y qu\xE9 mide?",
          "answer": "Esta calculadora eval\xFAa tus datos personales utilizando ecuaciones validadas. Proporciona una estimaci\xF3n educativa para ayudarte a comprender tu estado de salud y referencias est\xE1ndar."
        },
        {
          "question": "Por qu\xE9 es the Karvonen method more accurate than standard 220-age?",
          "answer": "Standard formulas only estimate maximum heart rate. The Karvonen formula factors in resting heart rate, reflecting your personal cardiovascular fitness level."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de R\xE9f\xE9rence de Sant\xE9",
      "title": "Karvonen Heart Rate Calculator \u2013 Target Heart Rate Zones & HRR \u2013 Outil de R\xE9f\xE9rence",
      "intro": "Outil de calcul et de r\xE9f\xE9rence \xE9ducatif con\xE7u selon les normes de sant\xE9 publi\xE9es de l'OMS et du CDC. Calculez vos m\xE9triques et consultez les plages de r\xE9f\xE9rence.",
      "formulaTitle": "Formule de R\xE9f\xE9rence Standard",
      "formulaDesc": "Calcul\xE9 \xE0 l'aide d'\xE9quations standards valid\xE9es.",
      "formulaCode": "THR = (HRR \xD7 Intensity%) + Resting HR",
      "tableTitle": "Tableau de R\xE9f\xE9rence Standard",
      "tableRows": [
        {
          "col1": "Cat\xE9gorie / Niveau 1",
          "col2": "50% \u2013 60% HRR",
          "col3": "Plage de r\xE9f\xE9rence Warm-up, cooldown, and active recovery"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 2",
          "col2": "60% \u2013 70% HRR",
          "col3": "Plage de r\xE9f\xE9rence Optimal zone for sustainable fat burning and aerobic base building"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 3",
          "col2": "70% \u2013 80% HRR",
          "col3": "Plage de r\xE9f\xE9rence Improves cardiovascular capacity and stamina"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 4",
          "col2": "80% \u2013 90% HRR",
          "col3": "Plage de r\xE9f\xE9rence Increases high-intensity performance and lactate threshold"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 5",
          "col2": "90% \u2013 100% HRR",
          "col3": "Plage de r\xE9f\xE9rence Maximal speed and interval training"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de karvonen heart rate calculator et que mesure-t-il ?",
          "answer": "Ce calculateur \xE9value vos donn\xE9es personnelles \xE0 l'aide d'\xE9quations valid\xE9es. Il fournit une estimation \xE9ducative pour vous aider \xE0 comprendre vos m\xE9triques et r\xE9f\xE9rences standards."
        },
        {
          "question": "Pourquoi the Karvonen method more accurate than standard 220-age?",
          "answer": "Standard formulas only estimate maximum heart rate. The Karvonen formula factors in resting heart rate, reflecting your personal cardiovascular fitness level."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "Karvonen Heart Rate Calculator \u2013 Target Heart Rate Zones & HRR \u2013 Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den ver\xF6ffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und pr\xFCfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardm\xE4\xDFig validierten Gleichungen.",
      "formulaCode": "THR = (HRR \xD7 Intensity%) + Resting HR",
      "tableTitle": "Standard-Referenztabelle",
      "tableRows": [
        {
          "col1": "Kategorie / Stufe 1",
          "col2": "50% \u2013 60% HRR",
          "col3": "Referenzbereich Warm-up, cooldown, and active recovery"
        },
        {
          "col1": "Kategorie / Stufe 2",
          "col2": "60% \u2013 70% HRR",
          "col3": "Referenzbereich Optimal zone for sustainable fat burning and aerobic base building"
        },
        {
          "col1": "Kategorie / Stufe 3",
          "col2": "70% \u2013 80% HRR",
          "col3": "Referenzbereich Improves cardiovascular capacity and stamina"
        },
        {
          "col1": "Kategorie / Stufe 4",
          "col2": "80% \u2013 90% HRR",
          "col3": "Referenzbereich Increases high-intensity performance and lactate threshold"
        },
        {
          "col1": "Kategorie / Stufe 5",
          "col2": "90% \u2013 100% HRR",
          "col3": "Referenzbereich Maximal speed and interval training"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der karvonen heart rate calculator-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre pers\xF6nlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        },
        {
          "question": "Warum ist the Karvonen method more accurate than standard 220-age?",
          "answer": "Standard formulas only estimate maximum heart rate. The Karvonen formula factors in resting heart rate, reflecting your personal cardiovascular fitness level."
        }
      ]
    },
    "ko": {
      "eyebrow": "\uAC74\uAC15 \uCC38\uC870 \uD45C\uC900 \uC9C0\uCE68",
      "title": "Karvonen Heart Rate \uACC4\uC0B0\uAE30 \u2013 Target Heart Rate Zones & HRR \u2013 \uCC38\uC870 \uACC4\uC0B0\uAE30",
      "intro": "WHO \uBC0F CDC \uC9C0\uCE68\uC5D0 \uAE30\uBC18\uD55C \uC2E4\uC2DC\uAC04 \uCC38\uACE0 \uACC4\uC0B0\uAE30\uC785\uB2C8\uB2E4. \uAC1C\uC778\uBCC4 \uC218\uCE58\uB97C \uCE21\uC815\uD558\uACE0 \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uD655\uC778\uD558\uC138\uC694.",
      "formulaTitle": "\uD45C\uC900 \uACC4\uC0B0 \uACF5\uC2DD",
      "formulaDesc": "\uAC80\uC99D\uB41C \uD45C\uC900 \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uACC4\uC0B0\uB429\uB2C8\uB2E4.",
      "formulaCode": "THR = (HRR \xD7 Intensity%) + Resting HR",
      "tableTitle": "\uD45C\uC900 \uCC38\uC870 \uC9C4\uB2E8\uD45C",
      "tableRows": [
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 1",
          "col2": "50% \u2013 60% HRR",
          "col3": "\uCC38\uC870 \uBC94\uC704 Warm-up, cooldown, and active recovery"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 2",
          "col2": "60% \u2013 70% HRR",
          "col3": "\uCC38\uC870 \uBC94\uC704 Optimal zone for sustainable fat burning and aerobic base building"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 3",
          "col2": "70% \u2013 80% HRR",
          "col3": "\uCC38\uC870 \uBC94\uC704 Improves cardiovascular capacity and stamina"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 4",
          "col2": "80% \u2013 90% HRR",
          "col3": "\uCC38\uC870 \uBC94\uC704 Increases high-intensity performance and lactate threshold"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 5",
          "col2": "90% \u2013 100% HRR",
          "col3": "\uCC38\uC870 \uBC94\uC704 Maximal speed and interval training"
        }
      ],
      "faqs": [
        {
          "question": "karvonen heart rate calculator \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uBCF8 \uACC4\uC0B0\uAE30\uB294 \uAC80\uC99D\uB41C \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uAC1C\uC778\uBCC4 \uC2E0\uCCB4 \uC9C0\uC218\uB97C \uC0B0\uCD9C\uD569\uB2C8\uB2E4. \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uBC14\uD0D5\uC73C\uB85C \uAD50\uC721\uC801 \uBD84\uC11D \uACB0\uACFC\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."
        },
        {
          "question": "Why is the Karvonen method more accurate than standard 220-age? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "Standard formulas only estimate maximum heart rate. The Karvonen formula factors in resting heart rate, reflecting your personal cardiovascular fitness level."
        }
      ]
    },
    "hi": {
      "eyebrow": "\u0915\u093E\u0930\u094D\u0921\u093F\u092F\u094B\u0935\u0948\u0938\u094D\u0915\u0941\u0932\u0930 \u092B\u093F\u091C\u093F\u092F\u094B\u0932\u0949\u091C\u0940",
      "title": "\u0915\u093E\u0930\u094D\u0935\u094B\u0928\u0947\u0928 \u0939\u093E\u0930\u094D\u091F \u0930\u0947\u091F \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 (Karvonen Heart Rate \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930)",
      "intro": "\u0915\u093E\u0930\u094D\u0935\u094B\u0928\u0947\u0928 \u092B\u0949\u0930\u094D\u092E\u0942\u0932\u093E \u0914\u0930 \u0939\u093E\u0930\u094D\u091F \u0930\u0947\u091F \u0930\u093F\u091C\u0930\u094D\u0935 (HRR) \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0915\u0947 \u0905\u092A\u0928\u0947 \u0932\u0915\u094D\u0937\u093F\u0924 \u0935\u094D\u092F\u093E\u092F\u093E\u092E \u0939\u093E\u0930\u094D\u091F \u0930\u0947\u091F \u091C\u093C\u094B\u0928 \u0915\u0940 \u0938\u091F\u0940\u0915 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902\u0964",
      "formulaTitle": "\u0906\u0927\u093F\u0915\u093E\u0930\u093F\u0915 \u0915\u093E\u0930\u094D\u0935\u094B\u0928\u0947\u0928 \u0938\u0942\u0924\u094D\u0930",
      "formulaDesc": "Target HR = [(HRmax - HRrest) \xD7 %intensity] + HRrest",
      "formulaCode": "THR = (HRR \xD7 Intensity%) + Resting HR",
      "tableTitle": "\u0915\u093E\u0930\u094D\u0935\u094B\u0928\u0947\u0928 \u0939\u093E\u0930\u094D\u091F \u0930\u0947\u091F \u091F\u094D\u0930\u0947\u0928\u093F\u0902\u0917 \u091C\u093C\u094B\u0928 \u0924\u093E\u0932\u093F\u0915\u093E",
      "tableRows": [
        {
          "col1": "\u091C\u093C\u094B\u0928 1: \u0930\u093F\u0915\u0935\u0930\u0940",
          "col2": "50% \u2013 60% HRR",
          "col3": "\u0935\u093E\u0930\u094D\u092E-\u0905\u092A \u0914\u0930 \u0930\u093F\u0915\u0935\u0930\u0940"
        },
        {
          "col1": "\u091C\u093C\u094B\u0928 2: \u092B\u0948\u091F \u092C\u0930\u094D\u0928 / \u090F\u0902\u0921\u094D\u092F\u094B\u0930\u0947\u0902\u0938",
          "col2": "60% \u2013 70% HRR",
          "col3": "\u0935\u0938\u093E \u091C\u0932\u093E\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0938\u0930\u094D\u0935\u094B\u0924\u094D\u0924\u092E \u091C\u093C\u094B\u0928"
        },
        {
          "col1": "\u091C\u093C\u094B\u0928 3: \u090F\u0930\u094B\u092C\u093F\u0915 \u0915\u093E\u0930\u094D\u0921\u093F\u092F\u094B",
          "col2": "70% \u2013 80% HRR",
          "col3": "\u0915\u093E\u0930\u094D\u0921\u093F\u092F\u094B \u0915\u094D\u0937\u092E\u0924\u093E \u092E\u0947\u0902 \u0938\u0941\u0927\u093E\u0930"
        },
        {
          "col1": "\u091C\u093C\u094B\u0928 4: \u090F\u0928\u090F\u0930\u094B\u092C\u093F\u0915 \u0925\u094D\u0930\u0947\u0936\u094B\u0932\u094D\u0921",
          "col2": "80% \u2013 90% HRR",
          "col3": "\u0938\u0939\u0928\u0936\u0915\u094D\u0924\u093F \u092E\u0947\u0902 \u0935\u0943\u0926\u094D\u0927\u093F"
        },
        {
          "col1": "\u091C\u093C\u094B\u0928 5: VO2 \u092E\u0948\u0915\u094D\u0938",
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
          "question": "Is the 1RM calculator accurate for bench press and squat?",
          "answer": "Yes, formulas like Epley and Brzycki are accurate within 2-4% for rep ranges between 1 and 10 reps."
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
          "col1": "Categor\xEDa / Nivel 1",
          "col2": "1 Repetition",
          "col3": "Rango de referencia Absolute maximum strength single"
        },
        {
          "col1": "Categor\xEDa / Nivel 2",
          "col2": "2 Repetitions",
          "col3": "Rango de referencia Heavy strength training load"
        },
        {
          "col1": "Categor\xEDa / Nivel 3",
          "col2": "3 Repetitions",
          "col3": "Rango de referencia Power lifting strength sets"
        },
        {
          "col1": "Categor\xEDa / Nivel 4",
          "col2": "5 Repetitions",
          "col3": "Rango de referencia Hypertrophy & heavy strength blend"
        },
        {
          "col1": "Categor\xEDa / Nivel 5",
          "col2": "7 Repetitions",
          "col3": "Rango de referencia Hypertrophy muscle building range"
        },
        {
          "col1": "Categor\xEDa / Nivel 6",
          "col2": "10 Repetitions",
          "col3": "Rango de referencia Volume hypertrophy & endurance"
        }
      ],
      "faqs": [
        {
          "question": "\xBFC\xF3mo funciona la calculadora de 1rm calculator y qu\xE9 mide?",
          "answer": "Esta calculadora eval\xFAa tus datos personales utilizando ecuaciones validadas. Proporciona una estimaci\xF3n educativa para ayudarte a comprender tu estado de salud y referencias est\xE1ndar."
        },
        {
          "question": "Is the 1RM calculator accurate for bench press and squat?",
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
          "col1": "Cat\xE9gorie / Niveau 1",
          "col2": "1 Repetition",
          "col3": "Plage de r\xE9f\xE9rence Absolute maximum strength single"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 2",
          "col2": "2 Repetitions",
          "col3": "Plage de r\xE9f\xE9rence Heavy strength training load"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 3",
          "col2": "3 Repetitions",
          "col3": "Plage de r\xE9f\xE9rence Power lifting strength sets"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 4",
          "col2": "5 Repetitions",
          "col3": "Plage de r\xE9f\xE9rence Hypertrophy & heavy strength blend"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 5",
          "col2": "7 Repetitions",
          "col3": "Plage de r\xE9f\xE9rence Hypertrophy muscle building range"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 6",
          "col2": "10 Repetitions",
          "col3": "Plage de r\xE9f\xE9rence Volume hypertrophy & endurance"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de 1rm calculator et que mesure-t-il ?",
          "answer": "Ce calculateur \xE9value vos donn\xE9es personnelles \xE0 l'aide d'\xE9quations valid\xE9es. Il fournit une estimation \xE9ducative pour vous aider \xE0 comprendre vos m\xE9triques et r\xE9f\xE9rences standards."
        },
        {
          "question": "Is the 1RM calculator accurate for bench press and squat?",
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
          "col1": "Kategorie / Stufe 1",
          "col2": "1 Repetition",
          "col3": "Referenzbereich Absolute maximum strength single"
        },
        {
          "col1": "Kategorie / Stufe 2",
          "col2": "2 Repetitions",
          "col3": "Referenzbereich Heavy strength training load"
        },
        {
          "col1": "Kategorie / Stufe 3",
          "col2": "3 Repetitions",
          "col3": "Referenzbereich Power lifting strength sets"
        },
        {
          "col1": "Kategorie / Stufe 4",
          "col2": "5 Repetitions",
          "col3": "Referenzbereich Hypertrophy & heavy strength blend"
        },
        {
          "col1": "Kategorie / Stufe 5",
          "col2": "7 Repetitions",
          "col3": "Referenzbereich Hypertrophy muscle building range"
        },
        {
          "col1": "Kategorie / Stufe 6",
          "col2": "10 Repetitions",
          "col3": "Referenzbereich Volume hypertrophy & endurance"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der 1rm calculator-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre pers\xF6nlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        },
        {
          "question": "Is the 1RM calculator accurate for bench press and squat?",
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
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 1",
          "col2": "1 Repetition",
          "col3": "\uCC38\uC870 \uBC94\uC704 Absolute maximum strength single"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 2",
          "col2": "2 Repetitions",
          "col3": "\uCC38\uC870 \uBC94\uC704 Heavy strength training load"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 3",
          "col2": "3 Repetitions",
          "col3": "\uCC38\uC870 \uBC94\uC704 Power lifting strength sets"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 4",
          "col2": "5 Repetitions",
          "col3": "\uCC38\uC870 \uBC94\uC704 Hypertrophy & heavy strength blend"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 5",
          "col2": "7 Repetitions",
          "col3": "\uCC38\uC870 \uBC94\uC704 Hypertrophy muscle building range"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 6",
          "col2": "10 Repetitions",
          "col3": "\uCC38\uC870 \uBC94\uC704 Volume hypertrophy & endurance"
        }
      ],
      "faqs": [
        {
          "question": "1rm calculator \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uBCF8 \uACC4\uC0B0\uAE30\uB294 \uAC80\uC99D\uB41C \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uAC1C\uC778\uBCC4 \uC2E0\uCCB4 \uC9C0\uC218\uB97C \uC0B0\uCD9C\uD569\uB2C8\uB2E4. \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uBC14\uD0D5\uC73C\uB85C \uAD50\uC721\uC801 \uBD84\uC11D \uACB0\uACFC\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."
        },
        {
          "question": "Is the 1RM calculator accurate for bench press and squat? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
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
          "col1": "100% 1RM",
          "col2": "1 \u0930\u0947\u092A",
          "col3": "\u0905\u0927\u093F\u0915\u0924\u092E \u0915\u094D\u0937\u092E\u0924\u093E"
        },
        {
          "col1": "90% 1RM",
          "col2": "3 \u0930\u0947\u092A\u094D\u0938",
          "col3": "\u092D\u093E\u0930\u0940 \u0938\u094D\u091F\u094D\u0930\u0947\u0902\u0925 \u0932\u094B\u0921"
        },
        {
          "col1": "85% 1RM",
          "col2": "5 \u0930\u0947\u092A\u094D\u0938",
          "col3": "\u092E\u093E\u0902\u0938\u092A\u0947\u0936\u0940 \u0935\u0943\u0926\u094D\u0927\u093F (Hypertrophy)"
        },
        {
          "col1": "75% 1RM",
          "col2": "10 \u0930\u0947\u092A\u094D\u0938",
          "col3": "\u0935\u0949\u0932\u094D\u092F\u0942\u092E \u091F\u094D\u0930\u0947\u0928\u093F\u0902\u0917"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 5",
          "col2": "7 Repetitions",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E Hypertrophy muscle building range"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 6",
          "col2": "10 Repetitions",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E Volume hypertrophy & endurance"
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
          "question": "How accurate is the Epley 1RM formula for bench press, squat, and deadlift?",
          "answer": "Formula-based estimates can differ from actual one-repetition performance. The Epley 1RM formula provides reference estimates for bench press and squat sets between 2 to 10 repetitions."
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
          "col1": "Categor\xEDa / Nivel 1",
          "col2": "1 Repetition",
          "col3": "Rango de referencia Peak single rep strength capacity estimate"
        },
        {
          "col1": "Categor\xEDa / Nivel 2",
          "col2": "3 Repetitions",
          "col3": "Rango de referencia Heavy strength building & neural adaptation"
        },
        {
          "col1": "Categor\xEDa / Nivel 3",
          "col2": "5 \u2013 6 Repetitions",
          "col3": "Rango de referencia Common training use & compound strength (5x5 protocols)"
        },
        {
          "col1": "Categor\xEDa / Nivel 4",
          "col2": "10 Repetitions",
          "col3": "Rango de referencia Hypertrophy volume & metabolic conditioning"
        },
        {
          "col1": "Categor\xEDa / Nivel 5",
          "col2": "15 Repetitions",
          "col3": "Rango de referencia Muscular endurance & active recovery sets"
        }
      ],
      "faqs": [
        {
          "question": "\xBFC\xF3mo funciona la calculadora de one rep max calculator y qu\xE9 mide?",
          "answer": "Esta calculadora eval\xFAa tus datos personales utilizando ecuaciones validadas. Proporciona una estimaci\xF3n educativa para ayudarte a comprender tu estado de salud y referencias est\xE1ndar."
        },
        {
          "question": "C\xF3mo calculate 1 rep max bench press using the Epley formula?",
          "answer": "To calculate your 1RM bench press: Lift a manageable weight for submaximal reps (e.g. 100 kg for 5 reps). Multiply 100 by (1 + 5/30), which equals 100 \xD7 1.1667 = 116.7 kg estimated 1RM bench press."
        },
        {
          "question": "How accurate is the Epley 1RM formula for bench press, squat, and deadlift?",
          "answer": "Formula-based estimates can differ from actual one-repetition performance. The Epley 1RM formula provides reference estimates for bench press and squat sets between 2 to 10 repetitions."
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
          "col1": "Cat\xE9gorie / Niveau 1",
          "col2": "1 Repetition",
          "col3": "Plage de r\xE9f\xE9rence Peak single rep strength capacity estimate"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 2",
          "col2": "3 Repetitions",
          "col3": "Plage de r\xE9f\xE9rence Heavy strength building & neural adaptation"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 3",
          "col2": "5 \u2013 6 Repetitions",
          "col3": "Plage de r\xE9f\xE9rence Common training use & compound strength (5x5 protocols)"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 4",
          "col2": "10 Repetitions",
          "col3": "Plage de r\xE9f\xE9rence Hypertrophy volume & metabolic conditioning"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 5",
          "col2": "15 Repetitions",
          "col3": "Plage de r\xE9f\xE9rence Muscular endurance & active recovery sets"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de one rep max calculator et que mesure-t-il ?",
          "answer": "Ce calculateur \xE9value vos donn\xE9es personnelles \xE0 l'aide d'\xE9quations valid\xE9es. Il fournit une estimation \xE9ducative pour vous aider \xE0 comprendre vos m\xE9triques et r\xE9f\xE9rences standards."
        },
        {
          "question": "Comment calculate 1 rep max bench press using the Epley formula?",
          "answer": "To calculate your 1RM bench press: Lift a manageable weight for submaximal reps (e.g. 100 kg for 5 reps). Multiply 100 by (1 + 5/30), which equals 100 \xD7 1.1667 = 116.7 kg estimated 1RM bench press."
        },
        {
          "question": "How accurate is the Epley 1RM formula for bench press, squat, and deadlift?",
          "answer": "Formula-based estimates can differ from actual one-repetition performance. The Epley 1RM formula provides reference estimates for bench press and squat sets between 2 to 10 repetitions."
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
          "col1": "Kategorie / Stufe 1",
          "col2": "1 Repetition",
          "col3": "Referenzbereich Peak single rep strength capacity estimate"
        },
        {
          "col1": "Kategorie / Stufe 2",
          "col2": "3 Repetitions",
          "col3": "Referenzbereich Heavy strength building & neural adaptation"
        },
        {
          "col1": "Kategorie / Stufe 3",
          "col2": "5 \u2013 6 Repetitions",
          "col3": "Referenzbereich Common training use & compound strength (5x5 protocols)"
        },
        {
          "col1": "Kategorie / Stufe 4",
          "col2": "10 Repetitions",
          "col3": "Referenzbereich Hypertrophy volume & metabolic conditioning"
        },
        {
          "col1": "Kategorie / Stufe 5",
          "col2": "15 Repetitions",
          "col3": "Referenzbereich Muscular endurance & active recovery sets"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der one rep max calculator-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre pers\xF6nlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        },
        {
          "question": "Wie man calculate 1 rep max bench press using the Epley formula?",
          "answer": "To calculate your 1RM bench press: Lift a manageable weight for submaximal reps (e.g. 100 kg for 5 reps). Multiply 100 by (1 + 5/30), which equals 100 \xD7 1.1667 = 116.7 kg estimated 1RM bench press."
        },
        {
          "question": "How accurate is the Epley 1RM formula for bench press, squat, and deadlift?",
          "answer": "Formula-based estimates can differ from actual one-repetition performance. The Epley 1RM formula provides reference estimates for bench press and squat sets between 2 to 10 repetitions."
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
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 1",
          "col2": "1 Repetition",
          "col3": "\uCC38\uC870 \uBC94\uC704 Peak single rep strength capacity estimate"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 2",
          "col2": "3 Repetitions",
          "col3": "\uCC38\uC870 \uBC94\uC704 Heavy strength building & neural adaptation"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 3",
          "col2": "5 \u2013 6 Repetitions",
          "col3": "\uCC38\uC870 \uBC94\uC704 Common training use & compound strength (5x5 protocols)"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 4",
          "col2": "10 Repetitions",
          "col3": "\uCC38\uC870 \uBC94\uC704 Hypertrophy volume & metabolic conditioning"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 5",
          "col2": "15 Repetitions",
          "col3": "\uCC38\uC870 \uBC94\uC704 Muscular endurance & active recovery sets"
        }
      ],
      "faqs": [
        {
          "question": "one rep max calculator \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
          "answer": "\uBCF8 \uACC4\uC0B0\uAE30\uB294 \uAC80\uC99D\uB41C \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uAC1C\uC778\uBCC4 \uC2E0\uCCB4 \uC9C0\uC218\uB97C \uC0B0\uCD9C\uD569\uB2C8\uB2E4. \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uBC14\uD0D5\uC73C\uB85C \uAD50\uC721\uC801 \uBD84\uC11D \uACB0\uACFC\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."
        },
        {
          "question": " calculate 1 rep max bench press using the Epley formula? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "To calculate your 1RM bench press: Lift a manageable weight for submaximal reps (e.g. 100 kg for 5 reps). Multiply 100 by (1 + 5/30), which equals 100 \xD7 1.1667 = 116.7 kg estimated 1RM bench press."
        },
        {
          "question": "How accurate is the Epley 1RM formula for bench press, squat, and deadlift? \uC548\uB0B4 \uBC0F \uC6D0\uB9AC",
          "answer": "Formula-based estimates can differ from actual one-repetition performance. The Epley 1RM formula provides reference estimates for bench press and squat sets between 2 to 10 repetitions."
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
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 1",
          "col2": "1 Repetition",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E Peak single rep strength capacity estimate"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 2",
          "col2": "3 Repetitions",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E Heavy strength building & neural adaptation"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 3",
          "col2": "5 \u2013 6 Repetitions",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E Common training use & compound strength (5x5 protocols)"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 4",
          "col2": "10 Repetitions",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E Hypertrophy volume & metabolic conditioning"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 5",
          "col2": "15 Repetitions",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E Muscular endurance & active recovery sets"
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
      "title": "Pregnancy Weight Gain Calculator & Trimester Tracker \u2013 Gu\xEDa y Calculadora",
      "intro": "Herramienta de c\xE1lculo y referencia educativa dise\xF1ada seg\xFAn los est\xE1ndares de salud publicados de la OMS y CDC. Calcula tus m\xE9tricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "F\xF3rmula de Referencia Est\xE1ndar",
      "formulaDesc": "Calculado utilizando ecuaciones est\xE1ndar validadas.",
      "tableTitle": "Tabla de Referencia Est\xE1ndar",
      "tableRows": [
        {
          "col1": "Categor\xEDa / Nivel 1",
          "col2": "12.5 \u2013 18.0 kg (28 - 40 lbs)",
          "col3": "Rango de referencia ~0.5 kg / week in 2nd/3rd trimester"
        },
        {
          "col1": "Categor\xEDa / Nivel 2",
          "col2": "11.5 \u2013 16.0 kg (25 - 35 lbs)",
          "col3": "Rango de referencia ~0.4 kg / week in 2nd/3rd trimester"
        },
        {
          "col1": "Categor\xEDa / Nivel 3",
          "col2": "7.0 \u2013 11.5 kg (15 - 25 lbs)",
          "col3": "Rango de referencia ~0.3 kg / week in 2nd/3rd trimester"
        }
      ],
      "faqs": [
        {
          "question": "\xBFC\xF3mo funciona la calculadora de pregnancy weight gain calculator y qu\xE9 mide?",
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
      "title": "Pregnancy Weight Gain Calculator & Trimester Tracker \u2013 Outil de R\xE9f\xE9rence",
      "intro": "Outil de calcul et de r\xE9f\xE9rence \xE9ducatif con\xE7u selon les normes de sant\xE9 publi\xE9es de l'OMS et du CDC. Calculez vos m\xE9triques et consultez les plages de r\xE9f\xE9rence.",
      "formulaTitle": "Formule de R\xE9f\xE9rence Standard",
      "formulaDesc": "Calcul\xE9 \xE0 l'aide d'\xE9quations standards valid\xE9es.",
      "tableTitle": "Tableau de R\xE9f\xE9rence Standard",
      "tableRows": [
        {
          "col1": "Cat\xE9gorie / Niveau 1",
          "col2": "12.5 \u2013 18.0 kg (28 - 40 lbs)",
          "col3": "Plage de r\xE9f\xE9rence ~0.5 kg / week in 2nd/3rd trimester"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 2",
          "col2": "11.5 \u2013 16.0 kg (25 - 35 lbs)",
          "col3": "Plage de r\xE9f\xE9rence ~0.4 kg / week in 2nd/3rd trimester"
        },
        {
          "col1": "Cat\xE9gorie / Niveau 3",
          "col2": "7.0 \u2013 11.5 kg (15 - 25 lbs)",
          "col3": "Plage de r\xE9f\xE9rence ~0.3 kg / week in 2nd/3rd trimester"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de pregnancy weight gain calculator et que mesure-t-il ?",
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
      "title": "Pregnancy Weight Gain Calculator & Trimester Tracker \u2013 Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den ver\xF6ffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und pr\xFCfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardm\xE4\xDFig validierten Gleichungen.",
      "tableTitle": "Standard-Referenztabelle",
      "tableRows": [
        {
          "col1": "Kategorie / Stufe 1",
          "col2": "12.5 \u2013 18.0 kg (28 - 40 lbs)",
          "col3": "Referenzbereich ~0.5 kg / week in 2nd/3rd trimester"
        },
        {
          "col1": "Kategorie / Stufe 2",
          "col2": "11.5 \u2013 16.0 kg (25 - 35 lbs)",
          "col3": "Referenzbereich ~0.4 kg / week in 2nd/3rd trimester"
        },
        {
          "col1": "Kategorie / Stufe 3",
          "col2": "7.0 \u2013 11.5 kg (15 - 25 lbs)",
          "col3": "Referenzbereich ~0.3 kg / week in 2nd/3rd trimester"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der pregnancy weight gain calculator-Rechner und was misst er?",
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
      "title": "Pregnancy Weight Gain \uACC4\uC0B0\uAE30 & Trimester Tracker \u2013 \uCC38\uC870 \uACC4\uC0B0\uAE30",
      "intro": "WHO \uBC0F CDC \uC9C0\uCE68\uC5D0 \uAE30\uBC18\uD55C \uC2E4\uC2DC\uAC04 \uCC38\uACE0 \uACC4\uC0B0\uAE30\uC785\uB2C8\uB2E4. \uAC1C\uC778\uBCC4 \uC218\uCE58\uB97C \uCE21\uC815\uD558\uACE0 \uC131\uC778 \uD45C\uC900 \uCC38\uC870 \uBC94\uC704\uB97C \uD655\uC778\uD558\uC138\uC694.",
      "formulaTitle": "\uD45C\uC900 \uACC4\uC0B0 \uACF5\uC2DD",
      "formulaDesc": "\uAC80\uC99D\uB41C \uD45C\uC900 \uACF5\uC2DD\uC744 \uC0AC\uC6A9\uD558\uC5EC \uACC4\uC0B0\uB429\uB2C8\uB2E4.",
      "tableTitle": "\uD45C\uC900 \uCC38\uC870 \uC9C4\uB2E8\uD45C",
      "tableRows": [
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 1",
          "col2": "12.5 \u2013 18.0 kg (28 - 40 lbs)",
          "col3": "\uCC38\uC870 \uBC94\uC704 ~0.5 kg / week in 2nd/3rd trimester"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 2",
          "col2": "11.5 \u2013 16.0 kg (25 - 35 lbs)",
          "col3": "\uCC38\uC870 \uBC94\uC704 ~0.4 kg / week in 2nd/3rd trimester"
        },
        {
          "col1": "\uBC94\uC8FC / \uB2E8\uACC4 3",
          "col2": "7.0 \u2013 11.5 kg (15 - 25 lbs)",
          "col3": "\uCC38\uC870 \uBC94\uC704 ~0.3 kg / week in 2nd/3rd trimester"
        }
      ],
      "faqs": [
        {
          "question": "pregnancy weight gain calculator \uACC4\uC0B0\uAE30\uC758 \uC6D0\uB9AC\uC640 \uCE21\uC815 \uD56D\uBAA9\uC740 \uBB34\uC5C7\uC778\uAC00\uC694?",
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
      "title": "Pregnancy Weight Gain \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930 & Trimester Tracker \u2013 \u092E\u0941\u092B\u094D\u0924 \u0915\u0948\u0932\u0915\u0941\u0932\u0947\u091F\u0930",
      "intro": "\u0921\u092C\u094D\u0932\u094D\u092F\u0942\u090F\u091A\u0913 \u0914\u0930 \u0938\u0940\u0921\u0940\u0938\u0940 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u092E\u093E\u0928\u0915\u094B\u0902 \u0915\u0947 \u0905\u0928\u0941\u0938\u093E\u0930 \u0928\u093F\u0930\u094D\u092E\u093F\u0924 \u0938\u0902\u0926\u0930\u094D\u092D \u091F\u0942\u0932\u0964 \u0905\u092A\u0928\u0940 \u092E\u0947\u091F\u094D\u0930\u093F\u0915\u094D\u0938 \u0915\u0940 \u0917\u0923\u0928\u093E \u0915\u0930\u0947\u0902 \u0914\u0930 \u0938\u094D\u0925\u093E\u092A\u093F\u0924 \u0938\u094D\u0935\u093E\u0938\u094D\u0925\u094D\u092F \u0938\u0940\u092E\u093E\u0913\u0902 \u0915\u0940 \u0938\u092E\u0940\u0915\u094D\u0937\u093E \u0915\u0930\u0947\u0902\u0964",
      "formulaTitle": "\u092E\u093E\u0928\u0915 \u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0942\u0924\u094D\u0930",
      "formulaDesc": "\u092E\u093E\u0928\u0915 \u0938\u0924\u094D\u092F\u093E\u092A\u093F\u0924 \u0938\u092E\u0940\u0915\u0930\u0923\u094B\u0902 \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0915\u0947 \u0917\u0923\u0928\u093E \u0915\u0940 \u0917\u0908\u0964",
      "tableTitle": "\u092E\u093E\u0928\u0915 \u0938\u0902\u0926\u0930\u094D\u092D \u0924\u093E\u0932\u093F\u0915\u093E",
      "tableRows": [
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 1",
          "col2": "12.5 \u2013 18.0 kg (28 - 40 lbs)",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E ~0.5 kg / week in 2nd/3rd trimester"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 2",
          "col2": "11.5 \u2013 16.0 kg (25 - 35 lbs)",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E ~0.4 kg / week in 2nd/3rd trimester"
        },
        {
          "col1": "\u0936\u094D\u0930\u0947\u0923\u0940 / \u0938\u094D\u0924\u0930 3",
          "col2": "7.0 \u2013 11.5 kg (15 - 25 lbs)",
          "col3": "\u0938\u0902\u0926\u0930\u094D\u092D \u0938\u0940\u092E\u093E ~0.3 kg / week in 2nd/3rd trimester"
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
