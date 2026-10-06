import { type Locale } from '../utils/calculators';

export interface ToolContent {
  title: string;
  eyebrow: string;
  intro: string;
  formulaTitle: string;
  formulaDesc: string;
  formulaCode?: string;
  tableTitle?: string;
  tableRows?: { col1: string; col2: string; col3: string }[];
  faqs: { question: string; answer: string }[];
}

export const tableUi: Record<string, { cat: string; metric: string; guidance: string; faq: string; refs: string }> = {
  en: {
    cat: 'Category / Level',
    metric: 'Reference Range / Metric',
    guidance: 'Reference Context',
    faq: 'Frequently Asked Questions',
    refs: 'References & Published Research'
  },
  es: {
    cat: 'Categoría / Nivel',
    metric: 'Referencia / Métrica',
    guidance: 'Contexto de Referencia',
    faq: 'Preguntas Frecuentes y Respuestas',
    refs: 'Referencias e Investigaciones Publicadas'
  },
  fr: {
    cat: 'Catégorie / Niveau',
    metric: 'Référence / Métrique',
    guidance: 'Contexte de Référence',
    faq: 'Foire Aux Questions et Réponses',
    refs: 'Références et Recherches Publiées'
  },
  de: {
    cat: 'Kategorie / Stufe',
    metric: 'Referenz / Metrik',
    guidance: 'Referenzkontext',
    faq: 'Häufig gestellte Fragen',
    refs: 'Referenzen & Veröffentlichte Forschung'
  },
  ko: {
    cat: '범주 / 단계',
    metric: '참조 / 메트릭',
    guidance: '참조 컨텍스트',
    faq: '자주 묻는 질문 및 답변',
    refs: '참고 문헌 및 출판 연구'
  },
  hi: {
    cat: 'श्रेणी / स्तर',
    metric: 'संदर्भ / मीट्रिक',
    guidance: 'संदर्भ विवरण',
    faq: 'अक्सर पूछे जाने वाले प्रश्न और उत्तर',
    refs: 'प्रकाशित शोध एवं संदर्भ'
  }
};

export const seoDatabase: Record<string, Record<string, ToolContent>> = {
  "bmi-calculator": {
    "en": {
      "eyebrow": "WHO Health Standards",
      "title": "BMI Calculator – Calculate Body Mass Index",
      "intro": "Our free BMI Calculator (Body Mass Index Calculator) is a health screening tool built according to World Health Organization (WHO) and CDC standards. Calculate your Body Mass Index (BMI) category and review standard weight ranges based on established health references.",
      "formulaTitle": "Standard WHO BMI Calculator Formula",
      "formulaDesc": "Metric: BMI = Weight (kg) / [Height (m)]² | Imperial: BMI = [Weight (lbs) / Height (inches)²] × 703",
      "formulaCode": "BMI = kg / m²",
      "tableTitle": "WHO Adult BMI Scale & Classification Chart",
      "tableRows": [
        {
          "col1": "Underweight",
          "col2": "< 18.5 kg/m²",
          "col3": ""
        },
        {
          "col1": "Healthy Weight",
          "col2": "18.5 – 24.9 kg/m²",
          "col3": ""
        },
        {
          "col1": "Overweight",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": " (Asian cutoff: 23.0 kg/m²)"
        },
        {
          "col1": "Obesity Class I",
          "col2": "30.0 – 34.9 kg/m²",
          "col3": ""
        },
        {
          "col1": "Obesity Class II",
          "col2": "35.0 – 39.9 kg/m²",
          "col3": ""
        },
        {
          "col1": "Obesity Class III",
          "col2": "≥ 40.0 kg/m²",
          "col3": ""
        }
      ],
      "faqs": [
        {
          "question": "What is the BMI Calculator and how to calculate BMI?",
          "answer": "Body Mass Index (BMI) is a widely used population health screening measure. To calculate BMI, divide weight in kilograms by height in meters squared (kg/m²), or use imperial units [Weight (lbs) / Height (inches)²] × 703. Our free BMI tool applies this standard formula to compute your score instantly."
        },
        {
          "question": "How to calculate BMI accurately for men and women?",
          "answer": "BMI calculation is identical for adult men and women, relying on height and weight metrics. Our BMI Calculator evaluates your metric score against WHO reference ranges to determine healthy weight boundaries."
        },
        {
          "question": "What is the official WHO BMI chart and BMI scale?",
          "answer": "The WHO BMI chart categorizes adults into four main ranges on the BMI scale: Underweight (<18.5), Healthy Weight (18.5–24.9), Overweight (25.0–29.9), and Obese (≥30.0). For Asian populations, the overweight cutoff begins at 23.0."
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
      "eyebrow": "Estándares de Salud de la OMS",
      "title": "Calculadora de IMC – Calcular el Índice de Masa Corporal",
      "intro": "Nuestra calculadora gratuita de IMC es una herramienta basada en las normas de la Organización Mundial de la Salud (OMS) y los CDC. Calcula tu categoría de IMC y revisa los rangos de peso estándar.",
      "formulaTitle": "Fórmula Estándar de IMC de la OMS",
      "formulaDesc": "Métrico: IMC = Peso (kg) / [Altura (m)]² | Imperial: IMC = [Peso (lbs) / Altura (pulgadas)²] × 703",
      "formulaCode": "IMC = kg / m²",
      "tableTitle": "Tabla de Clasificación de IMC para Adultos de la OMS",
      "tableRows": [
        {
          "col1": "Bajo Peso",
          "col2": "< 18.5 kg/m²",
          "col3": "Rango de referencia de bajo peso"
        },
        {
          "col1": "Peso Saludable",
          "col2": "18.5 – 24.9 kg/m²",
          "col3": "Rango de referencia de peso saludable"
        },
        {
          "col1": "Sobrepeso",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": "Rango de referencia de sobrepeso (Corte asiático: 23.0 kg/m²)"
        },
        {
          "col1": "Obesidad Clase I",
          "col2": "30.0 – 34.9 kg/m²",
          "col3": "Rango de referencia de obesidad clase I"
        },
        {
          "col1": "Obesidad Clase II",
          "col2": "35.0 – 39.9 kg/m²",
          "col3": "Rango de referencia de obesidad clase II"
        },
        {
          "col1": "Obesidad Clase III",
          "col2": "≥ 40.0 kg/m²",
          "col3": "Rango de referencia de obesidad clase III"
        }
      ],
      "faqs": [
        {
          "question": "¿Qué es la Calculadora de IMC y cómo calcular el IMC?",
          "answer": "El Índice de Masa Corporal (IMC) es una medida estándar de salud poblacional. Para calcular el IMC, divide el peso en kg por la altura en metros al cuadrado (kg/m²), o usa unidades imperiales [Peso (lbs) / Altura (pulgadas)²] × 703."
        },
        {
          "question": "¿Cómo calcular el IMC con precisión para hombres y mujeres?",
          "answer": "El cálculo del IMC es idéntico para hombres y mujeres adultos, basándose en la altura y el peso. Nuestra calculadora evalúa tu puntuación con los rangos de la OMS."
        },
        {
          "question": "¿Cuál es la tabla y escala oficial de IMC de la OMS?",
          "answer": "La tabla de la OMS categoriza a los adultos en cuatro rangos principales: Bajo peso (<18.5), Peso saludable (18.5–24.9), Sobrepeso (25.0–29.9) y Obesidad (≥30.0). Para poblaciones asiáticas, el corte de sobrepeso comienza en 23.0."
        },
        {
          "question": "¿Qué contexto adicional proporciona Real BMI?",
          "answer": "Real BMI presenta el cálculo estándar de IMC junto con métricas de referencia seleccionadas y estimaciones complementarias (como BMR y TDEE) para ofrecer un contexto educativo."
        },
        {
          "question": "¿Es precisa una calculadora de IMC estándar para atletas musculosos?",
          "answer": "Una calculadora de IMC mide la masa corporal total en relación con la altura. Los atletas musculosos pueden registrar un IMC de 25 o superior porque el IMC no distingue la masa muscular de la masa grasa."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de Santé de l'OMS",
      "title": "Calculateur d'IMC – Calculez votre Indice de Masse Corporelle",
      "intro": "Notre calculateur d'IMC gratuit est un outil d'évaluation basé sur les normes de l'OMS et du CDC. Calculez votre catégorie d'IMC et consultez les plages de poids de référence.",
      "formulaTitle": "Formule de Référence IMC de l'OMS",
      "formulaDesc": "Métrique : IMC = Poids (kg) / [Taille (m)]² | Impérial : IMC = [Poids (lbs) / Taille (pouces)²] × 703",
      "formulaCode": "IMC = kg / m²",
      "tableTitle": "Tableau de Classification de l'IMC pour Adultes selon l'OMS",
      "tableRows": [
        {
          "col1": "Sous-poids",
          "col2": "< 18.5 kg/m²",
          "col3": "Plage de référence de sous-poids"
        },
        {
          "col1": "Poids Normal",
          "col2": "18.5 – 24.9 kg/m²",
          "col3": "Plage de référence de poids normal"
        },
        {
          "col1": "Surpoids",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": "Plage de référence de surpoids (Seuil asiatique : 23.0 kg/m²)"
        },
        {
          "col1": "Obésité Classe I",
          "col2": "30.0 – 34.9 kg/m²",
          "col3": "Plage de référence d'obésité classe I"
        },
        {
          "col1": "Obésité Classe II",
          "col2": "35.0 – 39.9 kg/m²",
          "col3": "Plage de référence d'obésité classe II"
        },
        {
          "col1": "Obésité Classe III",
          "col2": "≥ 40.0 kg/m²",
          "col3": "Plage de référence d'obésité classe III"
        }
      ],
      "faqs": [
        {
          "question": "Qu'est-ce que le calculateur d'IMC et comment le calculer ?",
          "answer": "L'Indice de Masse Corporelle (IMC) est une mesure d'évaluation de la santé de la population. Pour calculer l'IMC, divisez le poids en kg par la taille en mètres au carré (kg/m²), ou utilisez les unités impériales [Poids (lbs) / Taille (pouces)²] × 703."
        },
        {
          "question": "Comment calculer l'IMC avec précision pour les hommes et les femmes ?",
          "answer": "Le calcul de l'IMC est identique pour les hommes et les femmes adultes, basé sur la taille et le poids. Notre calculateur évalue votre score par rapport aux plages de référence de l'OMS."
        },
        {
          "question": "Quel est le tableau et l'échelle d'IMC officiels de l'OMS ?",
          "answer": "Le tableau de l'OMS classe les adultes en quatre plages principales : Sous-poids (<18,5), Poids normal (18,5–24,9), Surpoids (25,0–29,9) et Obésité (≥30,0). Pour les populations asiatiques, le seuil de surpoids commence à 23,0."
        },
        {
          "question": "Quel contexte supplémentaire Real BMI fournit-il ?",
          "answer": "Real BMI présente le calcul d'IMC standard aux côtés de métriques de référence sélectionnées et d'estimations complémentaires (telles que le BMR et le TDEE) pour offrir un contexte éducatif."
        },
        {
          "question": "Un calculateur d'IMC standard est-il précis pour les athlètes musclés ?",
          "answer": "Un calculateur d'IMC mesure la masse corporelle totale par rapport à la taille. Les athlètes musclés peuvent avoir un IMC supérieur à 25 car l'IMC ne distingue pas la masse musculaire de la masse grasse."
        }
      ]
    },
    "de": {
      "eyebrow": "WHO Gesundheitsstandards",
      "title": "BMI Rechner – Body-Mass-Index Berechnen",
      "intro": "Unser kostenloser BMI-Rechner ist ein Tool zur Einschätzung nach Standards der WHO und der CDC. Berechnen Sie Ihre BMI-Kategorie und überprüfen Sie Richtwerte.",
      "formulaTitle": "WHO BMI-Referenzformel",
      "formulaDesc": "Metrisch: BMI = Gewicht (kg) / [Größe (m)]² | Imperial: BMI = [Gewicht (lbs) / Größe (Zoll)²] × 703",
      "formulaCode": "BMI = kg / m²",
      "tableTitle": "WHO BMI-Skala & Klassifizierungstabelle für Erwachsene",
      "tableRows": [
        {
          "col1": "Untergewicht",
          "col2": "< 18.5 kg/m²",
          "col3": "Referenzbereich Untergewicht"
        },
        {
          "col1": "Normalgewicht",
          "col2": "18.5 – 24.9 kg/m²",
          "col3": "Referenzbereich Normalgewicht"
        },
        {
          "col1": "Übergewicht",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": "Referenzbereich Übergewicht (Asiatischer Wert: 23.0 kg/m²)"
        },
        {
          "col1": "Adipositas Klasse I",
          "col2": "30.0 – 34.9 kg/m²",
          "col3": "Referenzbereich Adipositas Klasse I"
        },
        {
          "col1": "Adipositas Klasse II",
          "col2": "35.0 – 39.9 kg/m²",
          "col3": "Referenzbereich Adipositas Klasse II"
        },
        {
          "col1": "Adipositas Klasse III",
          "col2": "≥ 40.0 kg/m²",
          "col3": "Referenzbereich Adipositas Klasse III"
        }
      ],
      "faqs": [
        {
          "question": "Was ist der BMI-Rechner und wie berechnet man den BMI?",
          "answer": "Der Body-Mass-Index (BMI) ist ein weit verbreitetes Maß zur Beurteilung des Körpergewichts. Um den BMI zu berechnen, teilen Sie das Gewicht in kg durch die Körpergröße in Metern zum Quadrat (kg/m²)."
        },
        {
          "question": "Wie berechnet man den BMI genau für Männer und Frauen?",
          "answer": "Die BMI-Berechnung ist für erwachsene Männer und Frauen identisch und basiert auf Größe und Gewicht. Unser Rechner vergleicht Ihren Wert mit den WHO-Referenzbereichen."
        },
        {
          "question": "Was ist die offizielle WHO-BMI-Tabelle und -Skala?",
          "answer": "Die WHO-Tabelle unterteilt Erwachsene in vier Hauptbereiche: Untergewicht (<18,5), Normalgewicht (18,5–24,9), Übergewicht (25,0–29,9) und Adipositas (≥30,0). Für asiatische Populationen beginnt die Übergewichtsschwelle bei 23,0."
        },
        {
          "question": "Welchen zusätzlichen Kontext bietet Real BMI?",
          "answer": "Real BMI zeigt die Standard-BMI-Berechnung zusammen mit ausgewählten Referenzwerten und ergänzenden Schätzungen (wie BMR und TDEE) an, um lehrreichen Kontext zu bieten."
        },
        {
          "question": "Ist ein Standard-BMI-Rechner für muskulöse Sportler genau?",
          "answer": "Ein Standard-BMI-Rechner misst die Gesamtkörpermasse im Verhältnis zur Größe. Muskel-Sportler können einen BMI von 25 oder höher haben, da der BMI Muskelmasse nicht von Fettmasse unterscheidet."
        }
      ]
    },
    "ko": {
      "eyebrow": "WHO 건강 기준",
      "title": "BMI 계산기 – 체질량지수 계산",
      "intro": "세계보건기구(WHO) 및 CDC 기준에 따른 무료 BMI 계산기입니다. 체질량지수 범주 및 정상 체중 참조 범위를 계산하세요.",
      "formulaTitle": "표준 WHO BMI 계산 공식",
      "formulaDesc": "미터법: BMI = 체중 (kg) / [신장 (m)]² | 야드파운드법: BMI = [체중 (lbs) / 신장 (인치)²] × 703",
      "formulaCode": "BMI = kg / m²",
      "tableTitle": "WHO 성인 BMI 진단표 및 분류 차트",
      "tableRows": [
        {
          "col1": "저체중 (Underweight)",
          "col2": "< 18.5 kg/m²",
          "col3": "저체중 참조 범위"
        },
        {
          "col1": "정상 체중 (Healthy Weight)",
          "col2": "18.5 – 24.9 kg/m²",
          "col3": "정상 체중 참조 범위"
        },
        {
          "col1": "과체중 (Overweight)",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": "과체중 참조 범위 (아시아인 기준: 23.0 kg/m²)"
        },
        {
          "col1": "비만 1단계 (비만 1단계)",
          "col2": "30.0 – 34.9 kg/m²",
          "col3": "비만 1단계 참조 범위"
        },
        {
          "col1": "비만 2단계 (2단계 비만)",
          "col2": "35.0 – 39.9 kg/m²",
          "col3": "비만 2단계 참조 범위"
        },
        {
          "col1": "비만 3단계 (3단계 고도비만)",
          "col2": "≥ 40.0 kg/m²",
          "col3": "비만 3단계 참조 범위"
        }
      ],
      "faqs": [
        {
          "question": "BMI 계산기란 무엇이며 어떻게 계산하나요?",
          "answer": "체질량지수(BMI)는 널리 사용되는 인구 보건학적 지표입니다. 체중(kg)을 신장(m)의 제곱으로 나누어 계산합니다(kg/m²)."
        },
        {
          "question": "남성과 여성의 BMI를 정확하게 계산하는 방법은 무엇인가요?",
          "answer": "성인 남성과 여성의 BMI 계산 방식은 동일하며 신장과 체중 수치를 기반으로 합니다."
        },
        {
          "question": "공식 WHO BMI 차트와 진단 기준은 무엇인가요?",
          "answer": "WHO 차트는 성인을 저체중(<18.5), 정상 체중(18.5–24.9), 과체중(25.0–29.9), 비만(≥30.0)의 4가지 주요 범위로 분류합니다."
        },
        {
          "question": "Real BMI는 어떤 추가 컨텍스트를 제공하나요?",
          "answer": "Real BMI는 표준 BMI 계산과 함께 BMR 및 TDEE와 같은 보완적 추정 지표를 함께 제공하여 교육적 참고 컨텍스트를 제시합니다."
        },
        {
          "question": "표준 BMI 계산기는 근육질 운동선수에게도 정확한가요?",
          "answer": "표준 BMI 계산기는 키 대비 전체 체중을 측정합니다. 근육질 운동선수는 근육량이 지방 mass와 구분되지 않아 BMI가 25 이상으로 나올 수 있습니다."
        }
      ]
    },
    "hi": {
      "eyebrow": "डब्ल्यूएचओ स्वास्थ्य मानक",
      "title": "बीएमआई कैलकुलेटर – बॉडी मास इंडेक्स की गणना करें",
      "intro": "हमारा मुफ्त बीएमआई कैलकुलेटर (Body Mass Index Calculator) विश्व स्वास्थ्य संगठन (WHO) और CDC मानकों के अनुसार बनाया गया एक स्वास्थ्य स्क्रीनिंग टूल है। अपनी बॉडी मास इंडेक्स (BMI) श्रेणी की गणना करें और स्थापित स्वास्थ्य संदर्भों के आधार पर मानक वजन सीमाओं की समीक्षा करें।",
      "formulaTitle": "मानक डब्ल्यूएचओ बीएमआई कैलकुलेटर सूत्र",
      "formulaDesc": "मीट्रिक: बीएमआई = वजन (किग्रा) / [ऊंचाई (मीटर)]² | इंपीरियल: बीएमआई = [वजन (पाउंड) / ऊंचाई (इंच)²] × 703",
      "formulaCode": "BMI = kg / m²",
      "tableTitle": "डब्ल्यूएचओ वयस्क बीएमआई स्केल एवं वर्गीकरण चार्ट",
      "tableRows": [
        {
          "col1": "कम वजन (Underweight)",
          "col2": "< 18.5 kg/m²",
          "col3": "कम वजन संदर्भ सीमा"
        },
        {
          "col1": "सामान्य वजन (Healthy Weight)",
          "col2": "18.5 – 24.9 kg/m²",
          "col3": "सामान्य वजन संदर्भ सीमा"
        },
        {
          "col1": "अधिक वजन (Overweight)",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": "अधिक वजन संदर्भ सीमा (एशियाई कटऑफ: 23.0 kg/m²)"
        },
        {
          "col1": "मोटापा श्रेणी I (ओबेसिटी क्लास I)",
          "col2": "30.0 – 34.9 kg/m²",
          "col3": "मोटापा श्रेणी I संदर्भ सीमा"
        },
        {
          "col1": "मोटापा श्रेणी II (ओबेसिटी क्लास II)",
          "col2": "35.0 – 39.9 kg/m²",
          "col3": "मोटापा श्रेणी II संदर्भ सीमा"
        },
        {
          "col1": "मोटापा श्रेणी III (ओबेसिटी क्लास III)",
          "col2": "≥ 40.0 kg/m²",
          "col3": "मोटापा श्रेणी III संदर्भ सीमा"
        }
      ],
      "faqs": [
        {
          "question": "बीएमआई (BMI) क्या है और इसकी गणना कैसे की जाती है?",
          "answer": "बॉडी मास इंडेक्स (BMI) ऊंचाई के सापेक्ष आपके वजन का मूल्यांकन करने वाला मानक है। इसकी गणना वजन (किग्रा) को ऊंचाई के वर्ग (मीटर²) से विभाजित करके की जाती है।"
        },
        {
          "question": "पुरुषों और महिलाओं के लिए स्वस्थ बीएमआई क्या माना जाता है?",
          "answer": "अधिकांश वयस्कों के लिए 18.5 से 24.9 kg/m² का बीएमआई सामान्य और स्वस्थ माना जाता है। एशियाई आबादी के लिए 23.0 से अधिक वजन की सीमा शुरू होती है।"
        },
        {
          "question": "क्या बीएमआई मांसपेशियों वाले लोगों के लिए सटीक है?",
          "answer": "बीएमआई वसा और मांसपेशियों में अंतर नहीं करता है, इसलिए एथलीटों या अधिक मांसपेशियों वाले व्यक्तियों में बीएमआई अधिक हो सकता है।"
        },
        {
          "question": "Real BMI और मानक बीएमआई में क्या अंतर है?",
          "answer": "Real BMI मानक बीएमआई के साथ-साथ बीएमआर (BMR) और कमर-से-ऊंचाई अनुपात जैसे पूरक स्वास्थ्य संकेतकों का एक साथ मूल्यांकन प्रदान करता है।"
        },
        {
          "question": "क्या बीएमआई स्वास्थ्य जोखिम का स्वतंत्र निदान करता है?",
          "answer": "नहीं, बीएमआई केवल एक प्राथमिक स्क्रीनिंग मानक (Screening Measure) है, यह स्वतंत्र रूप से किसी बीमारी का निदान नहीं करता है।"
        }
      ]
    }
  },
  "3d-bmi-calculator": {
    "en": {
      "eyebrow": "Oxford 2.5-Power BMI Model & 3D Body Visualization",
      "title": "3D BMI Calculator & Interactive 3D Body Visualizer",
      "intro": "Our free 3D BMI Calculator uses the Oxford 2.5-power height-adjusted formula (1.3 × weight / height²·⁵) to render interactive 3D body shape models and height-proportional volume geometry.",
      "formulaTitle": "Oxford 2.5-Power Height-Adjusted 3D BMI Formula",
      "formulaDesc": "3D BMI = 1.3 × Weight (kg) / [Height (m)]²·⁵ | Proposed by Oxford mathematician Prof. Nick Trefethen as an educational mathematical alternative to standard 2D BMI height scaling.",
      "formulaCode": "3D BMI = 1.3 × kg / m²·⁵",
      "tableTitle": "Standard 2D BMI vs. Oxford 3D Height-Adjusted BMI Comparison",
      "tableRows": [
        {
          "col1": "Shorter Adults (< 160 cm / 5'3\")",
          "col2": "Standard 2D BMI underestimates height scaling",
          "col3": "3D BMI adjusts score proportionally for shorter statures"
        },
        {
          "col1": "Average Height Adults (170 cm / 5'7\")",
          "col2": "Standard 2D & 3D BMI produce identical results",
          "col3": "No difference between 2D and 3D formula categories"
        },
        {
          "col1": "Taller Adults (> 185 cm / 6'1\")",
          "col2": "Standard 2D BMI overestimates height scaling",
          "col3": "3D BMI corrects volumetric distortion for taller statures"
        }
      ],
      "faqs": [
        {
          "question": "How does 3D BMI differ from standard 2D BMI?",
          "answer": "Standard 2D BMI divides weight by height squared (m²), whereas 3D BMI uses height raised to the 2.5 power (m²·⁵) to account for 3D body volume scaling."
        },
        {
          "question": "How does the interactive 3D body visualizer work?",
          "answer": "It renders an interactive 3D avatar in your browser using height-to-weight proportions derived from your inputs. You can rotate the avatar 360° and toggle mesh, wireframe, and heatmap modes."
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
        }
              ,
        {
          "question": "Can I use the 3D Body Visualizer on mobile devices?",
          "answer": "Yes, the 3D visualizer is fully responsive and optimized for mobile touch controls, allowing 360° rotation and pinch-to-zoom on smartphones and tablets."
        }        ,
        {
          "question": "How does body mass index relate to 3D avatar proportion scaling?",
          "answer": "The 3D avatar dynamically adjusts mesh thickness, waist curvature, and volumetric proportions based on your height-to-weight ratio and calculated BMI score."
        }
      ]
    },
    "es": {
      "eyebrow": "Modelo IMC Exponencial de Oxford 2.5 y Visualización Corporal 3D",
      "title": "Calculadora de IMC 3D y Visualizador Corporal Interactivo",
      "intro": "Nuestra calculadora de IMC 3D y visualizador corporal interactivo calcula el índice de masa corporal mediante la fórmula exponencial de Oxford 2.5 (1.3 × peso / altura²·⁵) y principios de geometría corporal tridimensional. Gira 360° para ver la malla sólida, estructura de alambre y mapa de calor de IMC.",
      "formulaTitle": "Fórmula Exponencial 3D de Oxford Ajustada a la Altura",
      "formulaDesc": "IMC 3D Ajustado = 1.3 × Peso (kg) / [Altura (m)]²·⁵ | Propuesta por el matemático de Oxford Prof. Nick Trefethen como una alternativa matemática educativa al IMC 2D tradicional.",
      "formulaCode": "IMC 3D = 1.3 × kg / m²·⁵",
      "tableTitle": "Comparación de IMC 2D Estándar vs IMC 3D Ajustado por Altura",
      "tableRows": [
        {
          "col1": "Personas Bajas (< 160 cm)",
          "col2": "El IMC 2D estándar suele subestimar el resultado",
          "col3": "El IMC 3D compensa la estatura menor adecuadamente"
        },
        {
          "col1": "Estatura Promedio (170 cm)",
          "col2": "Alineación de clasificación idéntica",
          "col3": "Sin diferencia entre la fórmula 2D y 3D"
        },
        {
          "col1": "Personas Altas (> 185 cm)",
          "col2": "El IMC 2D estándar suele sobreestimar el exceso de peso",
          "col3": "El IMC 3D ajusta el volumen tridimensional real"
        }
      ],
      "faqs": [
        {
          "question": "¿En qué se diferencia el IMC 3D del IMC tradicional?",
          "answer": "El IMC tradicional usa la altura al cuadrado (m²), mientras que el IMC 3D usa la masa tridimensional dividida entre la altura a la potencia 2.5 (m²·⁵)."
        },
        {
          "question": "¿Cómo funciona la visualización corporal 3D?",
          "answer": "Genera una silueta anatómica tridimensional interactiva que se escala según tu altura y peso en tiempo real dentro del navegador."
        },
        {
          "question": "¿Qué representan los modos Malla, Alambre y Mapa de Calor?",
          "answer": "El modo sólido muestra la masa corporal, la malla de alambre muestra los contornos estructurales, y el mapa de calor resalta las zonas según el nivel de IMC."
        },
        {
          "question": "¿Es precisa la fórmula de Oxford 2.5 para personas muy altas?",
          "answer": "Propuesta por el Prof. Nick Trefethen de la Universidad de Oxford, la ecuación de potencia 2.5 proporciona un enfoque alternativo de escala de altura para personas altas y bajas."
        },
        {
          "question": "¿El modelo 3D almacena datos o fotografías personales?",
          "answer": "No, el modelo 3D es una simulación matemática generada en tiempo real en tu navegador sin guardar datos ni requerir cámara."
        }
              ,
        {
          "question": "¿Puedo usar el Visualizador Corporal 3D en dispositivos móviles?",
          "answer": "Sí, el visualizador 3D es totalmente adaptable a móviles y controles táctiles, lo que permite rotación de 360° en teléfonos inteligentes y tabletas."
        }        ,
        {
          "question": "¿Cómo se relaciona el índice de masa corporal con el escalado del avatar 3D?",
          "answer": "El avatar 3D ajusta dinámicamente el grosor de la malla, la curvatura de la cintura y las proporciones volumétricas según tu IMC."
        }
      ]
    },
    "fr": {
      "eyebrow": "Modèle IMC d'Oxford 2.5 et Visualisation Corporelle 3D",
      "title": "Calculateur d'IMC 3D et Visualiseur Corporel Interactif",
      "intro": "Notre calculateur d'IMC 3D calcule votre indice de masse corporelle selon la formule d'Oxford 2.5 (1.3 × poids / taille²·⁵) et modélise votre silhouette en 3D sous tous los angles à 360°.",
      "formulaTitle": "Formule Exponentielle 3D d'Oxford Ajustée à la Taille",
      "formulaDesc": "IMC 3D Ajusté = 1.3 × Poids (kg) / [Taille (m)]²·⁵ | Élaborée par des mathématiciens de l'Université d'Oxford pour corriger les biais liés à la taille.",
      "formulaCode": "IMC 3D = 1.3 × kg / m²·⁵",
      "tableTitle": "Comparaison IMC 2D Standard vs IMC 3D Ajusté d'Oxford",
      "tableRows": [
        {
          "col1": "Personnes de Petite Taille (< 160 cm)",
          "col2": "L'IMC 2D sous-estime souvent la catégorie",
          "col3": "L'IMC 3D réajuste le score proportionnellement"
        },
        {
          "col1": "Taille Moyenne (170 cm)",
          "col2": "Résultats identiques sur les deux formules",
          "col3": "Aucune différence de catégorie"
        },
        {
          "col1": "Personnes de Grande Taille (> 185 cm)",
          "col2": "L'IMC 2D surestime le niveau de surpoids",
          "col3": "L'IMC 3D corrige la distorsion volumétrique"
        }
      ],
      "faqs": [
        {
          "question": "En quoi l'IMC 3D diffère-t-il de l'IMC classique ?",
          "answer": "L'IMC classique divise le poids par la taille au carré (m²), tandis que l'IMC 3D utilise la puissance 2,5 (m²·⁵) pour refléter le volume corporel."
        },
        {
          "question": "Comment fonctionne la visualisation 3D ?",
          "answer": "Elle génère un avatar anatomique 3D interactif modélisé en temps réel selon vos mensurations dans votre navigateur."
        },
        {
          "question": "Que signifient les modes Maillage, Fil de fer et Carte de chaleur ?",
          "answer": "Le mode solide montre la masse, le fil de fer révèle la structure géométrique, et la carte de chaleur indique les zones d'IMC."
        },
        {
          "question": "Pourquoi la formule d'Oxford 2.5 est-elle recommandée pour les grands ?",
          "answer": "Elle élimine la distorsion mathématique de la formule de Quetelet qui désavantage systématiquement les personnes très grandes."
        },
        {
          "question": "L'outil 3D enregistre-t-il des images personnelles ?",
          "answer": "Non, toutes les modélisations sont des simulations mathématiques anonymes exécutées localement sur votre navigateur."
        }
              ,
        {
          "question": "Puis-je utiliser le Visualiseur Corporel 3D sur des appareils mobiles ?",
          "answer": "Oui, le visualiseur 3D est entièrement adapté aux mobiles et aux commandes tactiles, permettant une rotation à 360° sur smartphones et tablettes."
        }        ,
        {
          "question": "Comment l'indice de masse corporelle est-il lié à la modélisation 3D ?",
          "answer": "L'avatar 3D ajuste dynamiquement l'épaisseur du maillage et les proportions volumétriques en fonction de votre rapport taille/poids et de votre score IMC."
        }
      ]
    },
    "de": {
      "eyebrow": "Oxford 2.5 Potenzformel & 3D-Körper-Visualisierung",
      "title": "Interaktiver 3D BMI-Rechner & 3D-Körper-Visualisierer",
      "intro": "Berechnen Sie Ihren höhenkorrigierten BMI mit der Oxford 2.5 Formel (1.3 × Gewicht / Größe²·⁵) und betrachten Sie ein interaktives 360°-3D-Körpermodell direkt in Ihrem Browser.",
      "formulaTitle": "Oxford 3D Potenzformel für dreidimensionale Körpergeometrie",
      "formulaDesc": "3D-BMI = 1.3 × Gewicht (kg) / [Größe (m)]²·⁵ | Entwickelt von Mathematikern der Universität Oxford zur Korrektur von Größenverzerrungen.",
      "formulaCode": "3D-BMI = 1.3 × kg / m²·⁵",
      "tableTitle": "Vergleich: Standard 2D-BMI vs. Höhenkorrigierter 3D-BMI",
      "tableRows": [
        {
          "col1": "Kleine Personen (< 160 cm)",
          "col2": "Standard 2D-BMI zeigt tendenziell zu niedrige Werte",
          "col3": "3D-Formel gleicht die Körpergröße aus"
        },
        {
          "col1": "Durchschnittliche Größe (170 cm)",
          "col2": "Identische Ergebnisse bei beiden Formeln",
          "col3": "Kein Unterschied in der Kategorie"
        },
        {
          "col1": "Große Personen (> 185 cm)",
          "col2": "Standard 2D-BMI zeigt oft zu hohe Werte",
          "col3": "3D-Formel berücksichtigt das dreidimensionale Volumen"
        }
      ],
      "faqs": [
        {
          "question": "Was unterscheidet den 3D-BMI vom klassischen BMI?",
          "answer": "Der klassische BMI nutzt die Körpergröße zum Quadrat (m²), während der 3D-BMI die Potenz 2.5 nutzt, um das dreidimensionale Körpervolumen besser abzubilden."
        },
        {
          "question": "Wie funktioniert der 3D-Körper-Visualisierer?",
          "answer": "Er erzeugt einen interaktiven 3D-Avatar, der sich in Echtzeit an Ihre eingegebenen Daten anpasst und um 360° gedreht werden kann."
        },
        {
          "question": "Was bedeuten Drahtmodell, Solid-Mesh und Heatmap?",
          "answer": "Solid-Mesh zeigt die Körperoberfläche, das Drahtmodell zeigt die Gitterstruktur und die Heatmap hebt BMI-Zonen farblich hervor."
        },
        {
          "question": "Warum ist die Oxford 2.5 Formel für große Menschen genauer?",
          "answer": "Von Prof. Nick Trefethen an der Universität Oxford vorgeschlagen, bietet die 2,5-Potenz-Gleichung einen alternativen Skalierungsansatz für die Körpergröße."
        },
        {
          "question": "Werden Bilder oder persönliche Daten gespeichert?",
          "answer": "Nein, das 3D-Modell ist eine rein mathematische Echtzeit-Simulation in Ihrem Browser ohne Datenspeicherung."
        }
              ,
        {
          "question": "Kann ich den 3D-Körper-Visualisierer auf Mobilgeräten verwenden?",
          "answer": "Ja, der 3D-Visualisierer ist vollständig für mobile Touch-Steuerung optimiert und ermöglicht 360°-Drehung auf Smartphones und Tablets."
        }        ,
        {
          "question": "Wie hängt der Body-Mass-Index mit der 3D-Proportionenskalierung zusammen?",
          "answer": "Der 3D-Avatar passt die Netzstärke und die volumetrischen Proportionen dynamisch basierend auf Ihrem BMI-Wert an."
        }
      ]
    },
    "ko": {
      "eyebrow": "옥스포드 2.5 신장 보정 공식 및 3D 체형 시각화",
      "title": "3D BMI 계산기 및 대화형 3D 체형 시각화 도구",
      "intro": "옥스포드 2.5 체질량 공식(1.3 × 체중 / 신장²·⁵)을 기반으로 신장 왜곡을 보정한 BMI를 산출하고 360° 회전 가능한 3D 입체 실루엣 아바타를 실시간으로 확인하세요.",
      "formulaTitle": "3D 옥스포드 신장 보정 체질량 공식",
      "formulaDesc": "3D 보정 BMI = 1.3 × 체중 (kg) / [신장 (m)]²·⁵ | 옥스퍼드 대학교 수학과 연구진이 개발한 3차원 신체 부피 스케일링 공식.",
      "formulaCode": "3D BMI = 1.3 × kg / m²·⁵",
      "tableTitle": "표준 2D BMI vs 옥스포드 3D 신장 보정 BMI 비교",
      "tableRows": [
        {
          "col1": "단신 성인 (< 160 cm)",
          "col2": "표준 2D 공식은 상대적으로 낮게 측정됨",
          "col3": "3D 보정 공식이 올바른 수치 보정"
        },
        {
          "col1": "평균 신장 (170 cm)",
          "col2": "두 공식 결과 동일",
          "col3": "범주 차이 없음 (동일)"
        },
        {
          "col1": "장신 성인 (> 185 cm)",
          "col2": "표준 2D 공식은 과도하게 높게 측정됨",
          "col3": "3D 보정 공식이 3차원 부피 왜곡 보정"
        }
      ],
      "faqs": [
        {
          "question": "3D BMI와 기존 일반 BMI의 차이점은 무엇인가요?",
          "answer": "기존 BMI는 신장의 제곱(m²)으로 나누지만, 3D BMI는 3차원 신체 부피 비율인 신장의 2.5제곱(m²·⁵)을 적용합니다."
        },
        {
          "question": "3D 체형 시각화 기능은 어떻게 구동되나요?",
          "answer": "입력한 신장과 체중 비율에 따라 브라우저 내에서 실시간으로 3D 아바타 모델을 생성하고 360° 회전을 지원합니다."
        },
        {
          "question": "솔리드, 와이어프레임, 히트맵 모드의 차이는 무엇인가요?",
          "answer": "솔리드는 체형 실루엣, 와이어프레임은 3D 구조 망, 히트맵은 BMI 범주별 색상 위험도를 시각적으로 표현합니다."
        },
        {
          "question": "키가 큰 사람에게 옥스포드 2.5 공식이 더 정확한 이유는?",
          "answer": "옥스퍼드 대학교 트레페젠 교수가 입증했듯 2차원 제곱 공식은 키가 큰 사람을 불필요하게 비만으로 판정하는 오류를 보정합니다."
        },
        {
          "question": "3D 아바타 생성 시 개인정보나 사진이 저장되나요?",
          "answer": "아니요, 사진 업로드가 필요 없으며 모든 계산 및 3D 렌더링은 사용자 브라우저에서 100% 안전하게 구동됩니다."
        }
              ,
        {
          "question": "모바일 기기에서도 3D 체형 시각화 도구를 사용할 수 있나요?",
          "answer": "네, 3D 시각화 도구는 모바일 터치 조작에 완벽하게 최적화되어 스마트폰과 태블릿에서 360° 회전을 지원합니다."
        }        ,
        {
          "question": "체질량지수(BMI)는 3D 아바타의 비율 스케일링과 어떻게 연결되나요?",
          "answer": "3D 아바타는 입력된 신장 대 체중 비율과 계산된 BMI 수치에 따라 실루엣 두께와 부피 비율을 실시간으로 조정합니다."
        }
      ]
    },
    "hi": {
      "eyebrow": "ऑक्सफोर्ड 2.5 एक्सपोनेंशियल फॉर्मूला और 3D मॉडल",
      "title": "3D बीएमआई कैलकुलेटर और इंटरएक्टिव 3D बॉडी विजुअलाइज़र",
      "intro": "ऑक्सफोर्ड 2.5 फॉर्मूला (1.3 × वजन / ऊंचाई²·⁵) के साथ अपने बीएमआई की गणना करें और 360° इंटरएक्टिव 3D बॉडी मॉडलर का उपयोग करके अपनी शारीरिक संरचना को समझें।",
      "formulaTitle": "ऑक्सफोर्ड 3D ऊंचाई-समायोजित बीएमआई फॉर्मूला",
      "formulaDesc": "3D बीएमआई = 1.3 × वजन (किग्रा) / [ऊंचाई (मीटर)]²·⁵ | ऑक्सफोर्ड विश्वविद्यालय के गणितज्ञों द्वारा विकसित सूत्र जो लंबे या छोटे कद के लोगों में ऊंचाई के गणितीय भ्रम को दूर करता है।",
      "formulaCode": "3D BMI = 1.3 × kg / m²·⁵",
      "tableTitle": "मानक 2D बीएमआई बनाम 3D ऊंचाई-समायोजित बीएमआई",
      "tableRows": [
        {
          "col1": "कम ऊंचाई वाले वयस्क (< 160 सेमी)",
          "col2": "मानक 2D बीएमआई कम स्कोर दिखाता है",
          "col3": "3D फॉर्मूला सही ऊंचाई अनुपात को समायोजित करता है"
        },
        {
          "col1": "औसत ऊंचाई (170 सेमी)",
          "col2": "दोनों फॉर्मूलों में समान परिणाम",
          "col3": "कोई अंतर नहीं (समान श्रेणी)"
        },
        {
          "col1": "अधिक ऊंचाई वाले वयस्क (> 185 सेमी)",
          "col2": "मानक 2D बीएमआई अधिक स्कोर दिखाता है",
          "col3": "3D फॉर्मूला 3D आयतन (Volume) को संतुलित करता है"
        }
      ],
      "faqs": [
        {
          "question": "3D बीएमआई और मानक बीएमआई में क्या अंतर है?",
          "answer": "मानक बीएमआई ऊंचाई के वर्ग (m²) का उपयोग करता है, जबकि 3D बीएमआई शारीरिक मात्रा को संतुलित करने के लिए 2.5 की घात (m²·⁵) का उपयोग करता है।"
        },
        {
          "question": "3D बॉडी विजुअलाइज़र कैसे काम करता है?",
          "answer": "यह आपके दर्ज किए गए वजन और ऊंचाई के आधार पर आपके ब्राउज़र में ही वास्तविक समय में 3D अवतार मॉडल तैयार करता है जिसे आप 360° घुमा सकते हैं।"
        },
        {
          "question": "वायरफ्रेम, मेश और हीटमैप व्यू क्या दर्शाते हैं?",
          "answer": "मेश शरीर के आकार को दिखाता है, वायरफ्रेम ज्यामितीय लाइनों को दिखाता है, और हीटमैप बीएमआई श्रेणी के अनुसार रंगों से जोखिम क्षेत्र दिखाता है।"
        },
        {
          "question": "लंबे लोगों के लिए ऑक्सफोर्ड 2.5 फॉर्मूला क्यों बेहतर है?",
          "answer": "ऑक्सफोर्ड विश्वविद्यालय के प्रोफेसर निक त्रेफेथेन के अनुसार, पुराना फॉर्मूला लंबे लोगों के बीएमआई को अकारण अधिक दिखाता था, जिसे 2.5 फॉर्मूला ठीक करता है।"
        },
        {
          "question": "क्या 3D विजुअलाइज़र आपकी कोई निजी फोटो लेता है?",
          "answer": "नहीं, इसके लिए किसी कैमरे या फोटो की आवश्यकता नहीं है; यह केवल आपके अंकों पर आधारित एक मुफ़्त 3D गणितीय मॉडल है।"
        }
              ,
        {
          "question": "क्या मैं मोबाइल उपकरणों पर 3D बॉडी विजुअलाइज़र का उपयोग कर सकता हूं?",
          "answer": "हाँ, 3D विज़ुअलाइज़र मोबाइल टच कंट्रोल के लिए पूरी तरह से अनुकूलित है, जिससे स्मार्टफ़ोन और टैबलेट पर 360° रोटेशन की अनुमति मिलती है।"
        }        ,
        {
          "question": "बॉडी मास इंडेक्स 3D अवतार अनुपात स्केलिंग से कैसे संबंधित है?",
          "answer": "3D अवतार आपकी ऊंचाई-से-वजन अनुपात और बीएमआई स्कोर के आधार पर मेश की मोटाई और 3D आकृतियों को वास्तविक समय में समायोजित करता है।"
        }
      ]
    }
  },
  "bmi-chart": {
    "en": {
      "eyebrow": "WHO Official Adult BMI Scales",
      "title": "BMI Chart for Adults – Height & Weight Lookup Table (kg & cm)",
      "intro": "Our comprehensive adult BMI Chart and BMI Table provides an instant visual reference for adult men and women. Look up your Body Mass Index (BMI) category across standard metric ranges (kg & cm) and imperial units (lbs & inches) aligned with World Health Organization (WHO) and CDC population standards.",
      "formulaTitle": "Standard Metric & Imperial BMI Chart Formulas",
      "formulaDesc": "Metric: BMI = Weight (kg) / [Height (m)]²  |  Imperial: BMI = [Weight (lbs) / Height (inches)²] × 703",
      "formulaCode": "BMI = kg / m²",
      "tableTitle": "Official WHO BMI Categories Chart & Table for Adults (Men & Women)",
      "tableRows": [
        {
          "col1": "Severe Thinness",
          "col2": "< 16.0 kg/m²",
          "col3": "Severe underweight risk threshold"
        },
        {
          "col1": "Moderate Thinness",
          "col2": "16.0 – 16.9 kg/m²",
          "col3": "Moderate underweight reference range"
        },
        {
          "col1": "Mild Thinness",
          "col2": "17.0 – 18.4 kg/m²",
          "col3": "Mild underweight reference threshold"
        },
        {
          "col1": "Normal / Healthy Weight",
          "col2": "18.5 – 24.9 kg/m²",
          "col3": "Optimal healthy baseline range for adults"
        },
        {
          "col1": "Overweight (Pre-obese)",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": " (Asian cutoff: 23.0 kg/m²)"
        },
        {
          "col1": "Obesity Class I",
          "col2": "30.0 – 34.9 kg/m²",
          "col3": "Class I obesity screening reference"
        },
        {
          "col1": "Obesity Class II",
          "col2": "35.0 – 39.9 kg/m²",
          "col3": "Class II obesity screening reference"
        },
        {
          "col1": "Obesity Class III (Severe)",
          "col2": "≥ 40.0 kg/m²",
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
          "answer": "Standard WHO BMI categories apply to all adults aged 20 and older. However, research suggests that for seniors over age 65, a slightly higher BMI (23.0 to 27.0 kg/m²) may protect against bone density loss and frailty."
        },
        {
          "question": "What is the BMI chart in kg and cm?",
          "answer": "A metric BMI chart lists height in centimeters (cm) and weight in kilograms (kg). For example: Height 170 cm with Weight 65 kg yields a BMI of 22.5 kg/m² (Healthy Weight)."
        },
        {
          "question": "What are the main BMI categories on the official chart?",
          "answer": "The official WHO BMI categories are: Underweight (< 18.5), Normal Weight (18.5 – 24.9), Overweight (25.0 – 29.9), Obese Class I (30.0 – 34.9), Obese Class II (35.0 – 39.9), and Obese Class III (≥ 40.0)."
        }
      ]
    },
    "es": {
      "eyebrow": "Estándares de Referencia de Salud",
      "title": "BMI Chart for Adults – Height & Weight Lookup Table (kg & cm) – Guía y Calculadora",
      "intro": "Herramienta de cálculo y referencia educativa diseñada según los estándares de salud publicados de la OMS y CDC. Calcula tus métricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "Fórmula de Referencia Estándar",
      "formulaDesc": "Calculado utilizando ecuaciones estándar validadas.",
      "formulaCode": "BMI = kg / m²",
      "tableTitle": "Tabla de Referencia Estándar",
      "tableRows": [
        {
          "col1": "Categoría / Nivel 1",
          "col2": "< 16.0 kg/m²",
          "col3": "Rango de referencia Severe underweight risk threshold"
        },
        {
          "col1": "Categoría / Nivel 2",
          "col2": "16.0 – 16.9 kg/m²",
          "col3": "Rango de referencia Moderate underweight rango de referencia"
        },
        {
          "col1": "Categoría / Nivel 3",
          "col2": "17.0 – 18.4 kg/m²",
          "col3": "Rango de referencia Mild underweight reference threshold"
        },
        {
          "col1": "Categoría / Nivel 4",
          "col2": "18.5 – 24.9 kg/m²",
          "col3": "Rango de referencia Optimal healthy baseline range for adults"
        },
        {
          "col1": "Categoría / Nivel 5",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": "Rango de referencia Overweight rango de referencia (Asian cutoff: 23.0 kg/m²)"
        },
        {
          "col1": "Categoría / Nivel 6",
          "col2": "30.0 – 34.9 kg/m²",
          "col3": "Rango de referencia Class I obesity screening reference"
        },
        {
          "col1": "Categoría / Nivel 7",
          "col2": "35.0 – 39.9 kg/m²",
          "col3": "Rango de referencia Class II obesity screening reference"
        },
        {
          "col1": "Categoría / Nivel 8",
          "col2": "≥ 40.0 kg/m²",
          "col3": "Rango de referencia Severe Class III obesity screening threshold"
        }
      ],
      "faqs": [
        {
          "question": "¿Cómo funciona la calculadora de bmi chart y qué mide?",
          "answer": "Esta calculadora evalúa tus datos personales utilizando ecuaciones validadas. Proporciona una estimación educativa para ayudarte a comprender tu estado de salud y referencias estándar."
        }
      ,
        {
          "question": "Is the BMI chart for men different from the BMI chart for women?",
          "answer": "The WHO adult BMI chart uses identical cutoff numbers (18.5 to 24.9 for normal weight) for both adult men and women. However, because women naturally carry higher body fat percentages, waist measurements and body composition testing provide additional context."
        },
        {
          "question": "How does the BMI chart by age work for adults vs seniors?",
          "answer": "Standard WHO BMI categories apply to all adults aged 20 and older. However, research suggests that for seniors over age 65, a slightly higher BMI (23.0 to 27.0 kg/m²) may protect against bone density loss and frailty."
        },
        {
          "question": "¿Qué es el BMI chart in kg and cm?",
          "answer": "A metric BMI chart lists height in centimeters (cm) and weight in kilograms (kg). For example: Height 170 cm with Weight 65 kg yields a BMI of 22.5 kg/m² (Healthy Weight)."
        },
        {
          "question": "What are the main BMI categories on the official chart?",
          "answer": "The official WHO BMI categories are: Underweight (< 18.5), Normal Weight (18.5 – 24.9), Overweight (25.0 – 29.9), Obese Class I (30.0 – 34.9), Obese Class II (35.0 – 39.9), and Obese Class III (≥ 40.0)."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de Référence de Santé",
      "title": "BMI Chart for Adults – Height & Weight Lookup Table (kg & cm) – Outil de Référence",
      "intro": "Outil de calcul et de référence éducatif conçu selon les normes de santé publiées de l'OMS et du CDC. Calculez vos métriques et consultez les plages de référence.",
      "formulaTitle": "Formule de Référence Standard",
      "formulaDesc": "Calculé à l'aide d'équations standards validées.",
      "formulaCode": "BMI = kg / m²",
      "tableTitle": "Tableau de Référence Standard",
      "tableRows": [
        {
          "col1": "Catégorie / Niveau 1",
          "col2": "< 16.0 kg/m²",
          "col3": "Plage de référence Severe underweight risk threshold"
        },
        {
          "col1": "Catégorie / Niveau 2",
          "col2": "16.0 – 16.9 kg/m²",
          "col3": "Plage de référence Moderate underweight plage de référence"
        },
        {
          "col1": "Catégorie / Niveau 3",
          "col2": "17.0 – 18.4 kg/m²",
          "col3": "Plage de référence Mild underweight reference threshold"
        },
        {
          "col1": "Catégorie / Niveau 4",
          "col2": "18.5 – 24.9 kg/m²",
          "col3": "Plage de référence Optimal healthy baseline range for adults"
        },
        {
          "col1": "Catégorie / Niveau 5",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": "Plage de référence Overweight plage de référence (Asian cutoff: 23.0 kg/m²)"
        },
        {
          "col1": "Catégorie / Niveau 6",
          "col2": "30.0 – 34.9 kg/m²",
          "col3": "Plage de référence Class I obesity screening reference"
        },
        {
          "col1": "Catégorie / Niveau 7",
          "col2": "35.0 – 39.9 kg/m²",
          "col3": "Plage de référence Class II obesity screening reference"
        },
        {
          "col1": "Catégorie / Niveau 8",
          "col2": "≥ 40.0 kg/m²",
          "col3": "Plage de référence Severe Class III obesity screening threshold"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de bmi chart et que mesure-t-il ?",
          "answer": "Ce calculateur évalue vos données personnelles à l'aide d'équations validées. Il fournit une estimation éducative pour vous aider à comprendre vos métriques et références standards."
        }
      ,
        {
          "question": "Is the BMI chart for men different from the BMI chart for women?",
          "answer": "The WHO adult BMI chart uses identical cutoff numbers (18.5 to 24.9 for normal weight) for both adult men and women. However, because women naturally carry higher body fat percentages, waist measurements and body composition testing provide additional context."
        },
        {
          "question": "How does the BMI chart by age work for adults vs seniors?",
          "answer": "Standard WHO BMI categories apply to all adults aged 20 and older. However, research suggests that for seniors over age 65, a slightly higher BMI (23.0 to 27.0 kg/m²) may protect against bone density loss and frailty."
        },
        {
          "question": "Qu'est-ce que le BMI chart in kg and cm?",
          "answer": "A metric BMI chart lists height in centimeters (cm) and weight in kilograms (kg). For example: Height 170 cm with Weight 65 kg yields a BMI of 22.5 kg/m² (Healthy Weight)."
        },
        {
          "question": "What are the main BMI categories on the official chart?",
          "answer": "The official WHO BMI categories are: Underweight (< 18.5), Normal Weight (18.5 – 24.9), Overweight (25.0 – 29.9), Obese Class I (30.0 – 34.9), Obese Class II (35.0 – 39.9), and Obese Class III (≥ 40.0)."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "BMI Chart for Adults – Height & Weight Lookup Table (kg & cm) – Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den veröffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und prüfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardmäßig validierten Gleichungen.",
      "formulaCode": "BMI = kg / m²",
      "tableTitle": "Standard-Referenztabelle",
      "tableRows": [
        {
          "col1": "Kategorie / Stufe 1",
          "col2": "< 16.0 kg/m²",
          "col3": "Referenzbereich Severe underweight risk threshold"
        },
        {
          "col1": "Kategorie / Stufe 2",
          "col2": "16.0 – 16.9 kg/m²",
          "col3": "Referenzbereich Moderate underweight Referenzbereich"
        },
        {
          "col1": "Kategorie / Stufe 3",
          "col2": "17.0 – 18.4 kg/m²",
          "col3": "Referenzbereich Mild underweight reference threshold"
        },
        {
          "col1": "Kategorie / Stufe 4",
          "col2": "18.5 – 24.9 kg/m²",
          "col3": "Referenzbereich Optimal healthy baseline range for adults"
        },
        {
          "col1": "Kategorie / Stufe 5",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": "Referenzbereich Overweight Referenzbereich (Asian cutoff: 23.0 kg/m²)"
        },
        {
          "col1": "Kategorie / Stufe 6",
          "col2": "30.0 – 34.9 kg/m²",
          "col3": "Referenzbereich Class I obesity screening reference"
        },
        {
          "col1": "Kategorie / Stufe 7",
          "col2": "35.0 – 39.9 kg/m²",
          "col3": "Referenzbereich Class II obesity screening reference"
        },
        {
          "col1": "Kategorie / Stufe 8",
          "col2": "≥ 40.0 kg/m²",
          "col3": "Referenzbereich Severe Class III obesity screening threshold"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der bmi chart-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre persönlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        }
      ,
        {
          "question": "Is the BMI chart for men different from the BMI chart for women?",
          "answer": "The WHO adult BMI chart uses identical cutoff numbers (18.5 to 24.9 for normal weight) for both adult men and women. However, because women naturally carry higher body fat percentages, waist measurements and body composition testing provide additional context."
        },
        {
          "question": "How does the BMI chart by age work for adults vs seniors?",
          "answer": "Standard WHO BMI categories apply to all adults aged 20 and older. However, research suggests that for seniors over age 65, a slightly higher BMI (23.0 to 27.0 kg/m²) may protect against bone density loss and frailty."
        },
        {
          "question": "Was ist der BMI chart in kg and cm?",
          "answer": "A metric BMI chart lists height in centimeters (cm) and weight in kilograms (kg). For example: Height 170 cm with Weight 65 kg yields a BMI of 22.5 kg/m² (Healthy Weight)."
        },
        {
          "question": "What are the main BMI categories on the official chart?",
          "answer": "The official WHO BMI categories are: Underweight (< 18.5), Normal Weight (18.5 – 24.9), Overweight (25.0 – 29.9), Obese Class I (30.0 – 34.9), Obese Class II (35.0 – 39.9), and Obese Class III (≥ 40.0)."
        }
      ]
    },
    "ko": {
      "eyebrow": "건강 참조 표준 지침",
      "title": "BMI Chart for Adults – Height & Weight Lookup Table (kg & cm) – 참조 계산기",
      "intro": "WHO 및 CDC 지침에 기반한 실시간 참고 계산기입니다. 개인별 수치를 측정하고 성인 표준 참조 범위를 확인하세요.",
      "formulaTitle": "표준 계산 공식",
      "formulaDesc": "검증된 표준 공식을 사용하여 계산됩니다.",
      "formulaCode": "BMI = kg / m²",
      "tableTitle": "표준 참조 진단표",
      "tableRows": [
        {
          "col1": "범주 / 단계 1",
          "col2": "< 16.0 kg/m²",
          "col3": "참조 범위 Severe underweight risk threshold"
        },
        {
          "col1": "범주 / 단계 2",
          "col2": "16.0 – 16.9 kg/m²",
          "col3": "참조 범위 Moderate underweight 참조 범위"
        },
        {
          "col1": "범주 / 단계 3",
          "col2": "17.0 – 18.4 kg/m²",
          "col3": "참조 범위 Mild underweight reference threshold"
        },
        {
          "col1": "범주 / 단계 4",
          "col2": "18.5 – 24.9 kg/m²",
          "col3": "참조 범위 Optimal healthy baseline range for adults"
        },
        {
          "col1": "범주 / 단계 5",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": "참조 범위 Overweight 참조 범위 (Asian cutoff: 23.0 kg/m²)"
        },
        {
          "col1": "범주 / 단계 6",
          "col2": "30.0 – 34.9 kg/m²",
          "col3": "참조 범위 Class I obesity screening reference"
        },
        {
          "col1": "범주 / 단계 7",
          "col2": "35.0 – 39.9 kg/m²",
          "col3": "참조 범위 Class II obesity screening reference"
        },
        {
          "col1": "범주 / 단계 8",
          "col2": "≥ 40.0 kg/m²",
          "col3": "참조 범위 Severe Class III obesity screening threshold"
        }
      ],
      "faqs": [
        {
          "question": "bmi chart 계산기의 원리와 측정 항목은 무엇인가요?",
          "answer": "본 계산기는 검증된 공식을 사용하여 개인별 신체 지수를 산출합니다. 성인 표준 참조 범위를 바탕으로 교육적 분석 결과를 제공합니다."
        }
      ,
        {
          "question": "Is the BMI chart for men different from the BMI chart for women? 안내 및 원리",
          "answer": "The WHO adult BMI chart uses identical cutoff numbers (18.5 to 24.9 for normal weight) for both adult men and women. However, because women naturally carry higher body fat percentages, waist measurements and body composition testing provide additional context."
        },
        {
          "question": "How does the BMI chart by age work for adults vs seniors? 안내 및 원리",
          "answer": "Standard WHO BMI categories apply to all adults aged 20 and older. However, research suggests that for seniors over age 65, a slightly higher BMI (23.0 to 27.0 kg/m²) may protect against bone density loss and frailty."
        },
        {
          "question": " BMI chart in kg and cm? 안내 및 원리",
          "answer": "A metric BMI chart lists height in centimeters (cm) and weight in kilograms (kg). For example: Height 170 cm with Weight 65 kg yields a BMI of 22.5 kg/m² (Healthy Weight)."
        },
        {
          "question": "What are the main BMI categories on the official chart? 안내 및 원리",
          "answer": "The official WHO BMI categories are: Underweight (< 18.5), Normal Weight (18.5 – 24.9), Overweight (25.0 – 29.9), Obese Class I (30.0 – 34.9), Obese Class II (35.0 – 39.9), and Obese Class III (≥ 40.0)."
        }
      ]
    },
    "hi": {
      "eyebrow": "डब्ल्यूएचओ आधिकारिक वयस्क बीएमआई स्केल",
      "title": "वयस्कों के लिए बीएमआई चार्ट - ऊंचाई एवं वजन तालिका (BMI Chart kg cm)",
      "intro": "हमारा विस्तृत बीएमआई चार्ट (BMI Chart) और तालिका वयस्क पुरुषों और महिलाओं के लिए तुरंत दृश्य संदर्भ प्रदान करती है। विश्व स्वास्थ्य संगठन (WHO) और CDC मानकों के अनुसार मीट्रिक (किग्रा और सेमी) और इंपीरियल (पाउंड और इंच) श्रेणियों में अपना बीएमआई देखें।",
      "formulaTitle": "मानक बीएमआई चार्ट फॉर्मूला",
      "formulaDesc": "मीट्रिक: बीएमआई = वजन (किग्रा) / [ऊंचाई (मीटर)]²",
      "formulaCode": "BMI = kg / m²",
      "tableTitle": "वयस्कों (पुरुषों एवं महिलाओं) के लिए आधिकारिक डब्ल्यूएचओ बीएमआई श्रेणियां चार्ट",
      "tableRows": [
        {
          "col1": "कम वजन (Underweight)",
          "col2": "< 18.5 kg/m²",
          "col3": "कम वजन संदर्भ सीमा"
        },
        {
          "col1": "सामान्य / स्वस्थ वजन (Normal Weight)",
          "col2": "18.5 – 24.9 kg/m²",
          "col3": "वयस्कों के लिए आदर्श स्वस्थ बीएमआई सीमा"
        },
        {
          "col1": "अधिक वजन (Overweight)",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": "अधिक वजन संदर्भ सीमा (एशियाई कटऑफ: 23.0 kg/m²)"
        },
        {
          "col1": "मोटापा श्रेणी I (ओबेसिटी क्लास I)",
          "col2": "30.0 – 34.9 kg/m²",
          "col3": "मोटापा श्रेणी I संदर्भ"
        },
        {
          "col1": "मोटापा श्रेणी II (ओबेसिटी क्लास II)",
          "col2": "35.0 – 39.9 kg/m²",
          "col3": "मोटापा श्रेणी II संदर्भ"
        },
        {
          "col1": "मोटापा श्रेणी III (ओबेसिटी क्लास III)",
          "col2": "≥ 40.0 kg/m²",
          "col3": "गंभीर मोटापा संदर्भ श्रेणी"
        },
        {
          "col1": "श्रेणी / स्तर 7",
          "col2": "35.0 – 39.9 kg/m²",
          "col3": "संदर्भ सीमा Class II obesity screening reference"
        },
        {
          "col1": "श्रेणी / स्तर 8",
          "col2": "≥ 40.0 kg/m²",
          "col3": "संदर्भ सीमा Severe Class III obesity screening threshold"
        }
      ],
      "faqs": [
        {
          "question": "बीएमआई चार्ट (BMI Chart) क्या है और इसे कैसे पढ़ें?",
          "answer": "बीएमआई चार्ट ऊंचाई और वजन के संयोजनों को डब्ल्यूएचओ (WHO) की मानक श्रेणियों में वर्गीकृत करके प्रस्तुत करता है।"
        },
        {
          "question": "बीएमआई चार्ट में सामान्य वजन सीमा क्या है?",
          "answer": "बीएमआई चार्ट पर 18.5 से 24.9 का बीएमआई क्षेत्र हरे रंग से सामान्य स्वस्थ वजन सीमा को दर्शाता है।"
        },
        {
          "question": "क्या वयस्कों के लिए उम्र के साथ बीएमआई चार्ट बदलता है?",
          "answer": "डब्ल्यूएचओ का वयस्क बीएमआई चार्ट 20 से 65 वर्ष के सभी पुरुषों और महिलाओं के लिए समान संदर्भ सीमाओं का उपयोग करता है।"
        },
        {
          "question": "इंपीरियल और मीट्रिक बीएमआई चार्ट में क्या अंतर है?",
          "answer": "मीट्रिक चार्ट सेमी और किग्रा का उपयोग करता है, जबकि इंपीरियल चार्ट फीट/इंच और पाउंड (lbs) का उपयोग करता है।"
        },
        {
          "question": "बीएमआई चार्ट में ओवरवेट cutoff क्या है?",
          "answer": "मानक चार्ट में 25.0 kg/m² से ओवरवेट सीमा शुरू होती है, जबकि एशियाई आबादी के लिए यह 23.0 kg/m² पर शुरू होती है।"
        }
      ]
    }
  },
  "3d-body-visualizer": {
    "en": {
      "eyebrow": "Oxford 2.5-Power BMI Model & 3D Body Visualization",
      "title": "3D BMI Calculator & Interactive 3D Body Visualizer",
      "intro": "Our free 3D BMI Calculator uses the Oxford 2.5-power height-adjusted formula (1.3 × weight / height²·⁵) to render interactive 3D body shape models and height-proportional volume geometry.",
      "formulaTitle": "Oxford 2.5-Power Height-Adjusted 3D BMI Formula",
      "formulaDesc": "3D BMI = 1.3 × Weight (kg) / [Height (m)]²·⁵ | Developed by University of Oxford mathematicians to correct height scaling distortions in traditional 2D BMI.",
      "formulaCode": "3D BMI = 1.3 × kg / m²·⁵",
      "tableTitle": "Standard 2D BMI vs. Oxford 3D Height-Adjusted BMI Comparison",
      "tableRows": [
        {
          "col1": "Shorter Adults (< 160 cm / 5'3\")",
          "col2": "Standard 2D BMI underestimates height scaling",
          "col3": "3D BMI adjusts score proportionally for shorter statures"
        },
        {
          "col1": "Average Height Adults (170 cm / 5'7\")",
          "col2": "Standard 2D & 3D BMI produce identical results",
          "col3": "No difference between 2D and 3D formula categories"
        },
        {
          "col1": "Taller Adults (> 185 cm / 6'1\")",
          "col2": "Standard 2D BMI overestimates height scaling",
          "col3": "3D BMI corrects volumetric distortion for taller statures"
        }
      ],
      "faqs": [
        {
          "question": "How does 3D BMI differ from standard 2D BMI?",
          "answer": "Standard 2D BMI divides weight by height squared (m²), whereas 3D BMI uses height raised to the 2.5 power (m²·⁵) to account for 3D body volume scaling."
        },
        {
          "question": "How does the interactive 3D body visualizer work?",
          "answer": "It renders an interactive 3D avatar in your browser using height-to-weight proportions derived from your inputs. You can rotate the avatar 360° and toggle mesh, wireframe, and heatmap modes."
        },
        {
          "question": "What do solid mesh, wireframe, and heatmap modes represent?",
          "answer": "Solid mesh shows body shape volume, wireframe shows 3D geometric structure, and heatmap highlights weight category distribution."
        },
        {
          "question": "Why is the Oxford 2.5-power formula better for tall or short individuals?",
          "answer": "As demonstrated by Prof. Nick Trefethen at Oxford University, traditional BMI (m²) overestimates fatness in tall people and underestimates it in short people. The 2.5 exponent corrects this mathematical bias."
        },
        {
          "question": "Does the 3D visualizer store photos or personal data?",
          "answer": "No. The 3D model is generated mathematically in real time inside your browser. No photos are required, and no data is uploaded or stored."
        },
        {
          "question": "Can I use the 3D Body Visualizer on mobile devices?",
          "answer": "Yes, the 3D visualizer is fully responsive and optimized for mobile touch controls, allowing 360° rotation and pinch-to-zoom on smartphones and tablets."
        },
        {
          "question": "How does body mass index relate to 3D avatar proportion scaling?",
          "answer": "The 3D avatar dynamically adjusts mesh thickness, waist curvature, and volumetric proportions based on your height-to-weight ratio and calculated BMI score."
        }
      ]
    },
    "es": {
      "eyebrow": "Modelo IMC Exponencial de Oxford 2.5 y Visualización Corporal 3D",
      "title": "Calculadora de IMC 3D y Visualizador Corporal Interactivo",
      "intro": "Nuestra calculadora de IMC 3D y visualizador corporal interactivo calcula el índice de masa corporal mediante la fórmula exponencial de Oxford 2.5 (1.3 × peso / altura²·⁵) y principios de geometría corporal tridimensional. Gira 360° para ver la malla sólida, estructura de alambre y mapa de calor de IMC.",
      "formulaTitle": "Fórmula Exponencial 3D de Oxford Ajustada a la Altura",
      "formulaDesc": "IMC 3D Ajustado = 1.3 × Peso (kg) / [Altura (m)]²·⁵ | Diseñada por matemáticos de la Universidad de Oxford para eliminar la distorsión de altura que afecta a personas altas o bajas en la fórmula clásica de Quetelet.",
      "formulaCode": "IMC 3D = 1.3 × kg / m²·⁵",
      "tableTitle": "Comparación de IMC 2D Estándar vs IMC 3D Ajustado por Altura",
      "tableRows": [
        {
          "col1": "Personas Bajas (< 160 cm)",
          "col2": "El IMC 2D estándar suele subestimar el resultado",
          "col3": "El IMC 3D compensa la estatura menor adecuadamente"
        },
        {
          "col1": "Estatura Promedio (170 cm)",
          "col2": "Alineación de clasificación idéntica",
          "col3": "Sin diferencia entre la fórmula 2D y 3D"
        },
        {
          "col1": "Personas Altas (> 185 cm)",
          "col2": "El IMC 2D estándar suele sobreestimar el exceso de peso",
          "col3": "El IMC 3D ajusta el volumen tridimensional real"
        }
      ],
      "faqs": [
        {
          "question": "¿En qué se diferencia el IMC 3D del IMC tradicional?",
          "answer": "El IMC tradicional usa la altura al cuadrado (m²), mientras que el IMC 3D usa la masa tridimensional dividida entre la altura a la potencia 2.5 (m²·⁵)."
        },
        {
          "question": "¿Cómo funciona la visualización corporal 3D?",
          "answer": "Genera una silueta anatómica tridimensional interactiva que se escala según tu altura y peso en tiempo real dentro del navegador."
        },
        {
          "question": "¿Qué representan los modos Malla, Alambre y Mapa de Calor?",
          "answer": "El modo sólido muestra la masa corporal, la malla de alambre muestra los contornos estructurales, y el mapa de calor resalta las zonas según el nivel de IMC."
        },
        {
          "question": "¿Es precisa la fórmula de Oxford 2.5 para personas muy altas?",
          "answer": "Sí, el profesor Nick Trefethen de la Universidad de Oxford diseñó esta fórmula para eliminar la distorsión matemática en personas muy altas o bajas."
        },
        {
          "question": "¿El modelo 3D almacena datos o fotografías personales?",
          "answer": "No, el modelo 3D es una simulación matemática generada en tiempo real en tu navegador sin guardar datos ni requerir cámara."
        }
              ,
        {
          "question": "¿Puedo usar el Visualizador Corporal 3D en dispositivos móviles?",
          "answer": "Sí, el visualizador 3D es totalmente adaptable a móviles y controles táctiles, lo que permite rotación de 360° en teléfonos inteligentes y tabletas."
        }        ,
        {
          "question": "¿Cómo se relaciona el índice de masa corporal con el escalado del avatar 3D?",
          "answer": "El avatar 3D ajusta dinámicamente el grosor de la malla, la curvatura de la cintura y las proporciones volumétricas según tu IMC."
        }
      ]
    },
    "fr": {
      "eyebrow": "Modèle IMC d'Oxford 2.5 et Visualisation Corporelle 3D",
      "title": "Calculateur d'IMC 3D et Visualiseur Corporel Interactif",
      "intro": "Notre calculateur d'IMC 3D calcule votre indice de masse corporelle selon la formule d'Oxford 2.5 (1.3 × poids / taille²·⁵) et modélise votre silhouette en 3D sous tous los angles à 360°.",
      "formulaTitle": "Formule Exponentielle 3D d'Oxford Ajustée à la Taille",
      "formulaDesc": "IMC 3D Ajusté = 1.3 × Poids (kg) / [Taille (m)]²·⁵ | Élaborée par des mathématiciens de l'Université d'Oxford pour corriger les biais liés à la taille.",
      "formulaCode": "IMC 3D = 1.3 × kg / m²·⁵",
      "tableTitle": "Comparaison IMC 2D Standard vs IMC 3D Ajusté d'Oxford",
      "tableRows": [
        {
          "col1": "Personnes de Petite Taille (< 160 cm)",
          "col2": "L'IMC 2D sous-estime souvent la catégorie",
          "col3": "L'IMC 3D réajuste le score proportionnellement"
        },
        {
          "col1": "Taille Moyenne (170 cm)",
          "col2": "Résultats identiques sur les deux formules",
          "col3": "Aucune différence de catégorie"
        },
        {
          "col1": "Personnes de Grande Taille (> 185 cm)",
          "col2": "L'IMC 2D surestime le niveau de surpoids",
          "col3": "L'IMC 3D corrige la distorsion volumétrique"
        }
      ],
      "faqs": [
        {
          "question": "En quoi l'IMC 3D diffère-t-il de l'IMC classique ?",
          "answer": "L'IMC classique divise le poids par la taille au carré (m²), tandis que l'IMC 3D utilise la puissance 2,5 (m²·⁵) pour refléter le volume corporel."
        },
        {
          "question": "Comment fonctionne la visualisation 3D ?",
          "answer": "Elle génère un avatar anatomique 3D interactif modélisé en temps réel selon vos mensurations dans votre navigateur."
        },
        {
          "question": "Que signifient les modes Maillage, Fil de fer et Carte de chaleur ?",
          "answer": "Le mode solide montre la masse, le fil de fer révèle la structure géométrique, et la carte de chaleur indique les zones d'IMC."
        },
        {
          "question": "Pourquoi la formule d'Oxford 2.5 est-elle recommandée pour les grands ?",
          "answer": "Elle élimine la distorsion mathématique de la formule de Quetelet qui désavantage systématiquement les personnes très grandes."
        },
        {
          "question": "L'outil 3D enregistre-t-il des images personnelles ?",
          "answer": "Non, toutes les modélisations sont des simulations mathématiques anonymes exécutées localement sur votre navigateur."
        }
              ,
        {
          "question": "Puis-je utiliser le Visualiseur Corporel 3D sur des appareils mobiles ?",
          "answer": "Oui, le visualiseur 3D est entièrement adapté aux mobiles et aux commandes tactiles, permettant une rotation à 360° sur smartphones et tablettes."
        }        ,
        {
          "question": "Comment l'indice de masse corporelle est-il lié à la modélisation 3D ?",
          "answer": "L'avatar 3D ajuste dynamiquement l'épaisseur du maillage et les proportions volumétriques en fonction de votre rapport taille/poids et de votre score IMC."
        }
      ]
    },
    "de": {
      "eyebrow": "Oxford 2.5 Potenzformel & 3D-Körper-Visualisierung",
      "title": "Interaktiver 3D BMI-Rechner & 3D-Körper-Visualisierer",
      "intro": "Berechnen Sie Ihren höhenkorrigierten BMI mit der Oxford 2.5 Formel (1.3 × Gewicht / Größe²·⁵) und betrachten Sie ein interaktives 360°-3D-Körpermodell direkt in Ihrem Browser.",
      "formulaTitle": "Oxford 3D Potenzformel für dreidimensionale Körpergeometrie",
      "formulaDesc": "3D-BMI = 1.3 × Gewicht (kg) / [Größe (m)]²·⁵ | Entwickelt von Mathematikern der Universität Oxford zur Korrektur von Größenverzerrungen.",
      "formulaCode": "3D-BMI = 1.3 × kg / m²·⁵",
      "tableTitle": "Vergleich: Standard 2D-BMI vs. Höhenkorrigierter 3D-BMI",
      "tableRows": [
        {
          "col1": "Kleine Personen (< 160 cm)",
          "col2": "Standard 2D-BMI zeigt tendenziell zu niedrige Werte",
          "col3": "3D-Formel gleicht die Körpergröße aus"
        },
        {
          "col1": "Durchschnittliche Größe (170 cm)",
          "col2": "Identische Ergebnisse bei beiden Formeln",
          "col3": "Kein Unterschied in der Kategorie"
        },
        {
          "col1": "Große Personen (> 185 cm)",
          "col2": "Standard 2D-BMI zeigt oft zu hohe Werte",
          "col3": "3D-Formel berücksichtigt das dreidimensionale Volumen"
        }
      ],
      "faqs": [
        {
          "question": "Was unterscheidet den 3D-BMI vom klassischen BMI?",
          "answer": "Der klassische BMI nutzt die Körpergröße zum Quadrat (m²), während der 3D-BMI die Potenz 2.5 nutzt, um das dreidimensionale Körpervolumen besser abzubilden."
        },
        {
          "question": "Wie funktioniert der 3D-Körper-Visualisierer?",
          "answer": "Er erzeugt einen interaktiven 3D-Avatar, der sich in Echtzeit an Ihre eingegebenen Daten anpasst und um 360° gedreht werden kann."
        },
        {
          "question": "Was bedeuten Drahtmodell, Solid-Mesh und Heatmap?",
          "answer": "Solid-Mesh zeigt die Körperoberfläche, das Drahtmodell zeigt die Gitterstruktur und die Heatmap hebt BMI-Zonen farblich hervor."
        },
        {
          "question": "Warum ist die Oxford 2.5 Formel für große Menschen genauer?",
          "answer": "Prof. Nick Trefethen von der Universität Oxford zeigte, dass die alte Quetelet-Formel große Menschen mathematisch benachteiligt."
        },
        {
          "question": "Werden Bilder oder persönliche Daten gespeichert?",
          "answer": "Nein, das 3D-Modell ist eine rein mathematische Echtzeit-Simulation in Ihrem Browser ohne Datenspeicherung."
        }
              ,
        {
          "question": "Kann ich den 3D-Körper-Visualisierer auf Mobilgeräten verwenden?",
          "answer": "Ja, der 3D-Visualisierer ist vollständig für mobile Touch-Steuerung optimiert und ermöglicht 360°-Drehung auf Smartphones und Tablets."
        }        ,
        {
          "question": "Wie hängt der Body-Mass-Index mit der 3D-Proportionenskalierung zusammen?",
          "answer": "Der 3D-Avatar passt die Netzstärke und die volumetrischen Proportionen dynamisch basierend auf Ihrem BMI-Wert an."
        }
      ]
    },
    "ko": {
      "eyebrow": "옥스포드 2.5 신장 보정 공식 및 3D 체형 시각화",
      "title": "3D BMI 계산기 및 대화형 3D 체형 시각화 도구",
      "intro": "옥스포드 2.5 체질량 공식(1.3 × 체중 / 신장²·⁵)을 기반으로 신장 왜곡을 보정한 BMI를 산출하고 360° 회전 가능한 3D 입체 실루엣 아바타를 실시간으로 확인하세요.",
      "formulaTitle": "3D 옥스포드 신장 보정 체질량 공식",
      "formulaDesc": "3D 보정 BMI = 1.3 × 체중 (kg) / [신장 (m)]²·⁵ | 옥스퍼드 대학교 수학과 연구진이 개발한 3차원 신체 부피 스케일링 공식.",
      "formulaCode": "3D BMI = 1.3 × kg / m²·⁵",
      "tableTitle": "표준 2D BMI vs 옥스포드 3D 신장 보정 BMI 비교",
      "tableRows": [
        {
          "col1": "단신 성인 (< 160 cm)",
          "col2": "표준 2D 공식은 상대적으로 낮게 측정됨",
          "col3": "3D 보정 공식이 올바른 수치 보정"
        },
        {
          "col1": "평균 신장 (170 cm)",
          "col2": "두 공식 결과 동일",
          "col3": "범주 차이 없음 (동일)"
        },
        {
          "col1": "장신 성인 (> 185 cm)",
          "col2": "표준 2D 공식은 과도하게 높게 측정됨",
          "col3": "3D 보정 공식이 3차원 부피 왜곡 보정"
        }
      ],
      "faqs": [
        {
          "question": "3D BMI와 기존 일반 BMI의 차이점은 무엇인가요?",
          "answer": "기존 BMI는 신장의 제곱(m²)으로 나누지만, 3D BMI는 3차원 신체 부피 비율인 신장의 2.5제곱(m²·⁵)을 적용합니다."
        },
        {
          "question": "3D 체형 시각화 기능은 어떻게 구동되나요?",
          "answer": "입력한 신장과 체중 비율에 따라 브라우저 내에서 실시간으로 3D 아바타 모델을 생성하고 360° 회전을 지원합니다."
        },
        {
          "question": "솔리드, 와이어프레임, 히트맵 모드의 차이는 무엇인가요?",
          "answer": "솔리드는 체형 실루엣, 와이어프레임은 3D 구조 망, 히트맵은 BMI 범주별 색상 위험도를 시각적으로 표현합니다."
        },
        {
          "question": "키가 큰 사람에게 옥스포드 2.5 공식이 더 정확한 이유는?",
          "answer": "옥스퍼드 대학교 트레페젠 교수가 입증했듯 2차원 제곱 공식은 키가 큰 사람을 불필요하게 비만으로 판정하는 오류를 보정합니다."
        },
        {
          "question": "3D 아바타 생성 시 개인정보나 사진이 저장되나요?",
          "answer": "아니요, 사진 업로드가 필요 없으며 모든 계산 및 3D 렌더링은 사용자 브라우저에서 100% 안전하게 구동됩니다."
        }
              ,
        {
          "question": "모바일 기기에서도 3D 체형 시각화 도구를 사용할 수 있나요?",
          "answer": "네, 3D 시각화 도구는 모바일 터치 조작에 완벽하게 최적화되어 스마트폰과 태블릿에서 360° 회전을 지원합니다."
        }        ,
        {
          "question": "체질량지수(BMI)는 3D 아바타의 비율 스케일링과 어떻게 연결되나요?",
          "answer": "3D 아바타는 입력된 신장 대 체중 비율과 계산된 BMI 수치에 따라 실루엣 두께와 부피 비율을 실시간으로 조정합니다."
        }
      ]
    },
    "hi": {
      "eyebrow": "ऑक्सफोर्ड 2.5 एक्सपोनेंशियल फॉर्मूला और 3D मॉडल",
      "title": "3D बीएमआई कैलकुलेटर और इंटरएक्टिव 3D बॉडी विजुअलाइज़र",
      "intro": "ऑक्सफोर्ड 2.5 फॉर्मूला (1.3 × वजन / ऊंचाई²·⁵) के साथ अपने बीएमआई की गणना करें और 360° इंटरएक्टिव 3D बॉडी मॉडलर का उपयोग करके अपनी शारीरिक संरचना को समझें।",
      "formulaTitle": "ऑक्सफोर्ड 3D ऊंचाई-समायोजित बीएमआई फॉर्मूला",
      "formulaDesc": "3D बीएमआई = 1.3 × वजन (किग्रा) / [ऊंचाई (मीटर)]²·⁵ | ऑक्सफोर्ड विश्वविद्यालय के गणितज्ञों द्वारा विकसित सूत्र जो लंबे या छोटे कद के लोगों में ऊंचाई के गणितीय भ्रम को दूर करता है।",
      "formulaCode": "3D BMI = 1.3 × kg / m²·⁵",
      "tableTitle": "मानक 2D बीएमआई बनाम 3D ऊंचाई-समायोजित बीएमआई",
      "tableRows": [
        {
          "col1": "कम ऊंचाई वाले वयस्क (< 160 सेमी)",
          "col2": "मानक 2D बीएमआई कम स्कोर दिखाता है",
          "col3": "3D फॉर्मूला सही ऊंचाई अनुपात को समायोजित करता है"
        },
        {
          "col1": "औसत ऊंचाई (170 सेमी)",
          "col2": "दोनों फॉर्मूलों में समान परिणाम",
          "col3": "कोई अंतर नहीं (समान श्रेणी)"
        },
        {
          "col1": "अधिक ऊंचाई वाले वयस्क (> 185 सेमी)",
          "col2": "मानक 2D बीएमआई अधिक स्कोर दिखाता है",
          "col3": "3D फॉर्मूला 3D आयतन (Volume) को संतुलित करता है"
        }
      ],
      "faqs": [
        {
          "question": "3D बीएमआई और मानक बीएमआई में क्या अंतर है?",
          "answer": "मानक बीएमआई ऊंचाई के वर्ग (m²) का उपयोग करता है, जबकि 3D बीएमआई शारीरिक मात्रा को संतुलित करने के लिए 2.5 की घात (m²·⁵) का उपयोग करता है।"
        },
        {
          "question": "3D बॉडी विजुअलाइज़र कैसे काम करता है?",
          "answer": "यह आपके दर्ज किए गए वजन और ऊंचाई के आधार पर आपके ब्राउज़र में ही वास्तविक समय में 3D अवतार मॉडल तैयार करता है जिसे आप 360° घुमा सकते हैं।"
        },
        {
          "question": "वायरफ्रेम, मेश और हीटमैप व्यू क्या दर्शाते हैं?",
          "answer": "मेश शरीर के आकार को दिखाता है, वायरफ्रेम ज्यामितीय लाइनों को दिखाता है, और हीटमैप बीएमआई श्रेणी के अनुसार रंगों से जोखिम क्षेत्र दिखाता है।"
        },
        {
          "question": "लंबे लोगों के लिए ऑक्सफोर्ड 2.5 फॉर्मूला क्यों बेहतर है?",
          "answer": "ऑक्सफोर्ड विश्वविद्यालय के प्रोफेसर निक त्रेफेथेन के अनुसार, पुराना फॉर्मूला लंबे लोगों के बीएमआई को अकारण अधिक दिखाता था, जिसे 2.5 फॉर्मूला ठीक करता है।"
        },
        {
          "question": "क्या 3D विजुअलाइज़र आपकी कोई निजी फोटो लेता है?",
          "answer": "नहीं, इसके लिए किसी कैमरे या फोटो की आवश्यकता नहीं है; यह केवल आपके अंकों पर आधारित एक मुफ़्त 3D गणितीय मॉडल है।"
        }
              ,
        {
          "question": "क्या मैं मोबाइल उपकरणों पर 3D बॉडी विजुअलाइज़र का उपयोग कर सकता हूं?",
          "answer": "हाँ, 3D विज़ुअलाइज़र मोबाइल टच कंट्रोल के लिए पूरी तरह से अनुकूलित है, जिससे स्मार्टफ़ोन और टैबलेट पर 360° रोटेशन की अनुमति मिलती है।"
        }        ,
        {
          "question": "बॉडी मास इंडेक्स 3D अवतार अनुपात स्केलिंग से कैसे संबंधित है?",
          "answer": "3D अवतार आपकी ऊंचाई-से-वजन अनुपात और बीएमआई स्कोर के आधार पर मेश की मोटाई और 3D आकृतियों को वास्तविक समय में समायोजित करता है।"
        }
      ]
    }
  },
  "bmi-calculator-india": {
    "en": {
      "eyebrow": "WHO & ICMR South Asian Guidelines",
      "title": "BMI Calculator India – Asian BMI Cutoff Reference (BMI 23)",
      "intro": "Calculate your Body Mass Index (BMI) using the official WHO & ICMR (Indian Council of Medical Research) consensus guidelines for Indians. Unlike Western standards where overweight begins at BMI 25.0, South Asian guidelines establish BMI 23.0 kg/m² as the overweight cutoff threshold due to higher visceral fat accumulation at lower body weights.",
      "formulaTitle": "ICMR & WHO Indian BMI Calculator Formula (kg & cm)",
      "formulaDesc": "Metric: BMI = Weight (kg) / [Height (m)]² | Overweight Cutoff for Indians: BMI ≥ 23.0 kg/m² | Obesity Cutoff for Indians: BMI ≥ 25.0 kg/m²",
      "formulaCode": "Asian BMI = Weight (kg) / [Height (cm) / 100]²",
      "tableTitle": "Official BMI Chart for Indians & South Asian Adults (WHO & ICMR Standards)",
      "tableRows": [
        {
          "col1": "Underweight",
          "col2": "< 18.5 kg/m²",
          "col3": " for Indian adults"
        },
        {
          "col1": "Healthy / Normal BMI for Indians",
          "col2": "18.5 – 22.9 kg/m²",
          "col3": "Optimal healthy BMI range for Indian men & women"
        },
        {
          "col1": "Overweight (Action Threshold)",
          "col2": "23.0 – 24.9 kg/m²",
          "col3": "Increased cardiometabolic risk cutoff (BMI 23 India threshold)"
        },
        {
          "col1": "Obese Class I (Indian Standard)",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": "Obesity Class I classification under WHO South Asian criteria"
        },
        {
          "col1": "Obese Class II (Severe Obesity)",
          "col2": "≥ 30.0 kg/m²",
          "col3": "High risk obesity classification for Indian adults"
        }
      ],
      "faqs": [
        {
          "question": "What is the healthy BMI range for Indian men and women?",
          "answer": "According to WHO Asia-Pacific and ICMR consensus guidelines, the healthy BMI range for Indian men and Indian women is 18.5 to 22.9 kg/m². Any score of 23.0 or higher is classified as overweight/at-risk."
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
          "answer": "An ideal weight for Indian adults keeps BMI between 18.5 and 22.9 kg/m². For example, for an Indian male or female of height 168 cm (5 ft 6 in), the healthy weight range is 52.2 kg to 64.6 kg."
        }
              ,
        {
          "question": "Can I use the 3D Body Visualizer on mobile devices?",
          "answer": "Yes, the 3D visualizer is fully responsive and optimized for mobile touch controls, allowing 360° rotation and pinch-to-zoom on smartphones and tablets."
        }        ,
        {
          "question": "How does body mass index relate to 3D avatar proportion scaling?",
          "answer": "The 3D avatar dynamically adjusts mesh thickness, waist curvature, and volumetric proportions based on your height-to-weight ratio and calculated BMI score."
        }
      ]
    },
    "es": {
      "eyebrow": "Estándares de Referencia de Salud",
      "title": "BMI Calculator India – Asian BMI Cutoff Reference (BMI 23) – Guía y Calculadora",
      "intro": "Herramienta de cálculo y referencia educativa diseñada según los estándares de salud publicados de la OMS y CDC. Calcula tus métricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "Fórmula de Referencia Estándar",
      "formulaDesc": "Calculado utilizando ecuaciones estándar validadas.",
      "formulaCode": "Asian BMI = Weight (kg) / [Height (cm) / 100]²",
      "tableTitle": "Tabla de Referencia Estándar",
      "tableRows": [
        {
          "col1": "Categoría / Nivel 1",
          "col2": "< 18.5 kg/m²",
          "col3": "Rango de referencia Underweight rango de referencia for Indian adults"
        },
        {
          "col1": "Categoría / Nivel 2",
          "col2": "18.5 – 22.9 kg/m²",
          "col3": "Rango de referencia Optimal healthy BMI range for Indian men & women"
        },
        {
          "col1": "Categoría / Nivel 3",
          "col2": "23.0 – 24.9 kg/m²",
          "col3": "Rango de referencia Increased cardiometabolic risk cutoff (BMI 23 India threshold)"
        },
        {
          "col1": "Categoría / Nivel 4",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": "Rango de referencia Obesidad Clase I classification under WHO South Asian criteria"
        },
        {
          "col1": "Categoría / Nivel 5",
          "col2": "≥ 30.0 kg/m²",
          "col3": "Rango de referencia High risk Obesidad Claseification for Indian adults"
        }
      ],
      "faqs": [
        {
          "question": "¿Cómo funciona la calculadora de bmi calculator india y qué mide?",
          "answer": "Esta calculadora evalúa tus datos personales utilizando ecuaciones validadas. Proporciona una estimación educativa para ayudarte a comprender tu estado de salud y referencias estándar."
        }
      ,
        {
          "question": "Por qué es BMI 23 the overweight cutoff threshold in India?",
          "answer": "Epidemiological research shows that South Asian populations carry higher abdominal visceral fat and face elevated cardiometabolic risks (such as type 2 diabetes and hypertension) at lower body mass index levels compared to Western populations."
        },
        {
          "question": "Cómo calculate BMI in India using kg and cm?",
          "answer": "To calculate BMI in kg and cm: Convert height in cm to meters by dividing by 100. Multiply height in meters by itself to get height squared. Divide weight in kg by height squared. Example: 65 kg / (1.68m x 1.68m) = 23.0 BMI."
        },
        {
          "question": "What are the waist circumference guidelines for Indian adults?",
          "answer": "The Indian Council of Medical Research (ICMR) recommends keeping waist circumference under 90 cm (35 inches) for Indian men and under 80 cm (31.5 inches) for Indian women to reduce abdominal fat risk."
        },
        {
          "question": "¿Qué es el ideal height weight chart for Indians?",
          "answer": "An ideal weight for Indian adults keeps BMI between 18.5 and 22.9 kg/m². For example, for an Indian male or female of height 168 cm (5 ft 6 in), the healthy weight range is 52.2 kg to 64.6 kg."
        }
      ,
        {
          "question": "¿Cómo se calcula el IMC para adultos indios?",
          "answer": "Para calcular el IMC en indios, divide el peso en kg por la altura en metros al cuadrado. Por ejemplo, 65 kg / (1.68 m x 1.68 m) = 23.0 kg/m² (sobrepeso según el punto de corte de la OMS para Asia)."
        },
        {
          "question": "¿Cuál es la tabla de peso ideal para la población india?",
          "answer": "Un peso ideal para adultos indios mantiene el IMC entre 18.5 y 22.9 kg/m² según las pautas de referencia del ICMR y la OMS."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de Référence de Santé",
      "title": "BMI Calculator India – Asian BMI Cutoff Reference (BMI 23) – Outil de Référence",
      "intro": "Outil de calcul et de référence éducatif conçu selon les normes de santé publiées de l'OMS et du CDC. Calculez vos métriques et consultez les plages de référence.",
      "formulaTitle": "Formule de Référence Standard",
      "formulaDesc": "Calculé à l'aide d'équations standards validées.",
      "formulaCode": "Asian BMI = Weight (kg) / [Height (cm) / 100]²",
      "tableTitle": "Tableau de Référence Standard",
      "tableRows": [
        {
          "col1": "Catégorie / Niveau 1",
          "col2": "< 18.5 kg/m²",
          "col3": "Plage de référence Underweight plage de référence for Indian adults"
        },
        {
          "col1": "Catégorie / Niveau 2",
          "col2": "18.5 – 22.9 kg/m²",
          "col3": "Plage de référence Optimal healthy BMI range for Indian men & women"
        },
        {
          "col1": "Catégorie / Niveau 3",
          "col2": "23.0 – 24.9 kg/m²",
          "col3": "Plage de référence Increased cardiometabolic risk cutoff (BMI 23 India threshold)"
        },
        {
          "col1": "Catégorie / Niveau 4",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": "Plage de référence Obésité Classe I classification under WHO South Asian criteria"
        },
        {
          "col1": "Catégorie / Niveau 5",
          "col2": "≥ 30.0 kg/m²",
          "col3": "Plage de référence High risk Obésité Classeification for Indian adults"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de bmi calculator india et que mesure-t-il ?",
          "answer": "Ce calculateur évalue vos données personnelles à l'aide d'équations validées. Il fournit une estimation éducative pour vous aider à comprendre vos métriques et références standards."
        }
      ,
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
          "answer": "An ideal weight for Indian adults keeps BMI between 18.5 and 22.9 kg/m². For example, for an Indian male or female of height 168 cm (5 ft 6 in), the healthy weight range is 52.2 kg to 64.6 kg."
        }
      ,
        {
          "question": "Comment calculer l'IMC pour les adultes indiens ?",
          "answer": "Pour calculer l'IMC chez les Indiens, divisez le poids en kg par la taille en mètres au carré. Par exemple, 65 kg / (1.68 m x 1.68 m) = 23.0 kg/m² (surpoids selon le seuil asiatique de l'OMS)."
        },
        {
          "question": "Quel est le tableau de poids idéal pour la population indienne ?",
          "answer": "Un poids idéal pour les adultes indiens maintient l'IMC entre 18.5 et 22.9 kg/m² selon les directives de l'ICMR et de l'OMS."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "BMI Calculator India – Asian BMI Cutoff Reference (BMI 23) – Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den veröffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und prüfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardmäßig validierten Gleichungen.",
      "formulaCode": "Asian BMI = Weight (kg) / [Height (cm) / 100]²",
      "tableTitle": "Standard-Referenztabelle",
      "tableRows": [
        {
          "col1": "Kategorie / Stufe 1",
          "col2": "< 18.5 kg/m²",
          "col3": "Referenzbereich Underweight Referenzbereich for Indian adults"
        },
        {
          "col1": "Kategorie / Stufe 2",
          "col2": "18.5 – 22.9 kg/m²",
          "col3": "Referenzbereich Optimal healthy BMI range for Indian men & women"
        },
        {
          "col1": "Kategorie / Stufe 3",
          "col2": "23.0 – 24.9 kg/m²",
          "col3": "Referenzbereich Increased cardiometabolic risk cutoff (BMI 23 India threshold)"
        },
        {
          "col1": "Kategorie / Stufe 4",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": "Referenzbereich Adipositas Klasse I classification under WHO South Asian criteria"
        },
        {
          "col1": "Kategorie / Stufe 5",
          "col2": "≥ 30.0 kg/m²",
          "col3": "Referenzbereich High risk Adipositas Klasseification for Indian adults"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der bmi calculator india-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre persönlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        }
      ,
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
          "answer": "An ideal weight for Indian adults keeps BMI between 18.5 and 22.9 kg/m². For example, for an Indian male or female of height 168 cm (5 ft 6 in), the healthy weight range is 52.2 kg to 64.6 kg."
        }
      ,
        {
          "question": "Wie berechnet man den BMI für indische Erwachsene?",
          "answer": "Um den BMI bei Indern zu berechnen, teilen Sie das Gewicht in kg durch die Größe in Metern zum Quadrat. Beispiel: 65 kg / (1,68 m x 1,68 m) = 23,0 kg/m² (Übergewicht nach dem WHO-Asien-Schwellenwert)."
        },
        {
          "question": "Was ist die Idealgewichtstabelle für die indische Bevölkerung?",
          "answer": "Ein Idealgewicht für indische Erwachsene hält den BMI zwischen 18,5 und 22,9 kg/m² gemäß den ICMR- und WHO-Leitlinien."
        }
      ]
    },
    "ko": {
      "eyebrow": "건강 참조 표준 지침",
      "title": "BMI 계산기 India – Asian BMI Cutoff Reference (BMI 23) – 참조 계산기",
      "intro": "WHO 및 CDC 지침에 기반한 실시간 참고 계산기입니다. 개인별 수치를 측정하고 성인 표준 참조 범위를 확인하세요.",
      "formulaTitle": "표준 계산 공식",
      "formulaDesc": "검증된 표준 공식을 사용하여 계산됩니다.",
      "formulaCode": "Asian BMI = Weight (kg) / [Height (cm) / 100]²",
      "tableTitle": "표준 참조 진단표",
      "tableRows": [
        {
          "col1": "범주 / 단계 1",
          "col2": "< 18.5 kg/m²",
          "col3": "참조 범위 Underweight 참조 범위 for Indian adults"
        },
        {
          "col1": "범주 / 단계 2",
          "col2": "18.5 – 22.9 kg/m²",
          "col3": "참조 범위 Optimal healthy BMI range for Indian men & women"
        },
        {
          "col1": "범주 / 단계 3",
          "col2": "23.0 – 24.9 kg/m²",
          "col3": "참조 범위 Increased cardiometabolic risk cutoff (BMI 23 India threshold)"
        },
        {
          "col1": "범주 / 단계 4",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": "참조 범위 비만 1단계 classification under WHO South Asian criteria"
        },
        {
          "col1": "범주 / 단계 5",
          "col2": "≥ 30.0 kg/m²",
          "col3": "참조 범위 High risk 비만 단계ification for Indian adults"
        }
      ],
      "faqs": [
        {
          "question": "bmi calculator india 계산기의 원리와 측정 항목은 무엇인가요?",
          "answer": "본 계산기는 검증된 공식을 사용하여 개인별 신체 지수를 산출합니다. 성인 표준 참조 범위를 바탕으로 교육적 분석 결과를 제공합니다."
        }
      ,
        {
          "question": "Why is BMI 23 the overweight cutoff threshold in India? 안내 및 원리",
          "answer": "Epidemiological research shows that South Asian populations carry higher abdominal visceral fat and face elevated cardiometabolic risks (such as type 2 diabetes and hypertension) at lower body mass index levels compared to Western populations."
        },
        {
          "question": " calculate BMI in India using kg and cm? 안내 및 원리",
          "answer": "To calculate BMI in kg and cm: Convert height in cm to meters by dividing by 100. Multiply height in meters by itself to get height squared. Divide weight in kg by height squared. Example: 65 kg / (1.68m x 1.68m) = 23.0 BMI."
        },
        {
          "question": "What are the waist circumference guidelines for Indian adults? 안내 및 원리",
          "answer": "The Indian Council of Medical Research (ICMR) recommends keeping waist circumference under 90 cm (35 inches) for Indian men and under 80 cm (31.5 inches) for Indian women to reduce abdominal fat risk."
        },
        {
          "question": " ideal height weight chart for Indians? 안내 및 원리",
          "answer": "An ideal weight for Indian adults keeps BMI between 18.5 and 22.9 kg/m². For example, for an Indian male or female of height 168 cm (5 ft 6 in), the healthy weight range is 52.2 kg to 64.6 kg."
        }
      ,
        {
          "question": "인도 성인의 BMI는 어떻게 계산하나요?",
          "answer": "인도 성인의 BMI 계산은 체중(kg)을 신장(m)의 제곱으로 나눕니다. 예: 65 kg / (1.68 m x 1.68 m) = 23.0 kg/m² (WHO 아시아 과체중 기준)."
        },
        {
          "question": "인도 인구의 적정 체중 범위는 어떻게 되나요?",
          "answer": "ICMR 및 WHO 지침에 따르면 인도 성인의 적정 체중은 BMI 18.5~22.9 kg/m² 범위입니다."
        }
      ]
    },
    "hi": {
      "eyebrow": "डब्ल्यूएचओ एवं आईसीएमआर भारतीय दिशानिर्देश",
      "title": "बीएमआई कैलकुलेटर भारत (BMI कैलकुलेटर India)",
      "intro": "भारतीय वयस्कों के लिए आधिकारिक WHO और ICMR (भारतीय चिकित्सा अनुसंधान परिषद) के दिशानिर्देशों के आधार पर अपने बीएमआई की गणना करें। पश्चिमी मानकों के विपरीत, भारतीय आबादी के लिए 23.0 kg/m² बीएमआई से अधिक वजन (Overweight) की शुरुआत मानी जाती है।",
      "formulaTitle": "भारतीय बीएमआई सूत्र (किग्रा और सेमी)",
      "formulaDesc": "बीएमआई = वजन (किग्रा) / [ऊंचाई (मीटर)]² | भारतीयों के लिए ओवरवेट कटऑफ: 23.0 kg/m²",
      "formulaCode": "BMI = kg / m²",
      "tableTitle": "भारतीय पुरुषों एवं महिलाओं के लिए बीएमआई चार्ट (ICMR एवं WHO मानक)",
      "tableRows": [
        {
          "col1": "कम वजन (Underweight)",
          "col2": "< 18.5 kg/m²",
          "col3": "कम वजन संदर्भ सीमा"
        },
        {
          "col1": "सामान्य / स्वास्थ्यप्रद बीएमआई (Healthy)",
          "col2": "18.5 – 22.9 kg/m²",
          "col3": "भारतीयों के लिए आदर्श स्वस्थ बीएमआई सीमा"
        },
        {
          "col1": "अधिक वजन (Overweight / Cutoff 23)",
          "col2": "23.0 – 24.9 kg/m²",
          "col3": "भारतीयों के लिए अधिक वजन एवं जोखिम सीमा"
        },
        {
          "col1": "मोटापा श्रेणी I (Obese Class I)",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": "दक्षिण एशियाई मानकों के तहत मोटापा श्रेणी I"
        },
        {
          "col1": "मोटापा श्रेणी II (Obese Class II)",
          "col2": "≥ 30.0 kg/m²",
          "col3": "गंभीर मोटापा श्रेणी"
        }
      ],
      "faqs": [
        {
          "question": "भारतीयों के लिए बीएमआई की सीमाएं अलग क्यों हैं?",
          "answer": "ICMR और डब्ल्यूएचओ दिशानिर्देशों के अनुसार एशियाई/भारतीय आबादी में कम बीएमआई पर भी विसरल फैट (पेट की वसा) का जोखिम अधिक होता है।"
        },
        {
          "question": "भारत के लिए संशोधित बीएमआई कटऑफ क्या है?",
          "answer": "भारत में 18.5-22.9 स्वस्थ वजन, 23.0-24.9 ओवरवेट (जोखिम) और 25.0 से अधिक को मोटापा श्रेणी माना जाता है।"
        },
        {
          "question": "ICMR के अनुसार कमर की परिधि (Waist Circumference) की सीमा क्या है?",
          "answer": "पुरुषों के लिए 90 सेमी और महिलाओं के लिए 80 सेमी से अधिक कमर की माप चयापचय जोखिम का संकेत देती है।"
        },
        {
          "question": "क्या भारतीय बीएमआई कैलकुलेटर में कमर का माप शामिल है?",
          "answer": "हाँ, यह कैलकुलेटर बीएमआई के साथ कमर के आकार का मूल्यांकन करके ICMR विसरल फैट रिस्क स्टेटस दिखाता है।"
        },
        {
          "question": "एशियाई बीएमआई कटऑफ कब लागू करना चाहिए?",
          "answer": "यदि आप दक्षिण एशियाई या भारतीय मूल के हैं, तो 23.0 kg/m² की सीमा को संदर्भ बिंदु मानना चाहिए।"
        }
      ,
        {
          "question": "भारतीय वयस्कों के लिए बीएमआई की गणना कैसे की जाती है?",
          "answer": "भारतीयों के लिए बीएमआई गणना: वजन (किग्रा) को ऊंचाई के वर्ग (मीटर²) से विभाजित करें। उदाहरण: 65 किग्रा / (1.68 मीटर x 1.68 मीटर) = 23.0 kg/m² (डब्ल्यूएचओ एशियाई कटऑफ के तहत ओवरवेट)।"
        },
        {
          "question": "भारतीयों के लिए आदर्श वजन सीमा क्या है?",
          "answer": "आईसीएमआर (ICMR) और डब्ल्यूएचओ (WHO) के दिशानिर्देशों के अनुसार भारतीय वयस्कों के लिए आदर्श बीएमआई 18.5 से 22.9 kg/m² के बीच रहता है।"
        }
      ]
    }
  },
  "bmi-calculator-for-indians": {
    "en": {
      "eyebrow": "ICMR & WHO South Asian Standards",
      "title": "BMI Calculator for Indians – Healthy Height Weight Chart for Indian Adults",
      "intro": "Free online BMI Calculator for Indians based on Indian Council of Medical Research (ICMR) and WHO Asia-Pacific reference standards. Compute your exact Body Mass Index (BMI) using kg and cm, check whether your weight falls into the healthy Indian range (18.5 – 22.9 kg/m²), and review ICMR waist circumference guidelines.",
      "formulaTitle": "Official ICMR Indian BMI Formula (kg & cm)",
      "formulaDesc": "BMI = Weight (kg) / [Height (m)]² | Healthy Range for Indians: 18.5 – 22.9 kg/m² | Overweight Cutoff: ≥ 23.0 kg/m²",
      "formulaCode": "BMI = Weight (kg) / [(Height in cm / 100)²]",
      "tableTitle": "ICMR & WHO Adult BMI Reference Chart for Indians (kg/m²)",
      "tableRows": [
        {
          "col1": "Underweight",
          "col2": "< 18.5 kg/m²",
          "col3": "Underweight reference threshold"
        },
        {
          "col1": "Healthy Normal Weight",
          "col2": "18.5 – 22.9 kg/m²",
          "col3": "Optimal healthy range for Indian adults"
        },
        {
          "col1": "Overweight / At Risk (Action Threshold)",
          "col2": "23.0 – 24.9 kg/m²",
          "col3": "Elevated cardiometabolic risk cutoff for Indians"
        },
        {
          "col1": "Obese Class I (Indian Standard)",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": "Class I obesity threshold under ICMR standards"
        },
        {
          "col1": "Obese Class II (Severe Obesity)",
          "col2": "≥ 30.0 kg/m²",
          "col3": "Severe obesity risk threshold"
        }
      ],
      "faqs": [
        {
          "question": "What is the healthy BMI range for Indians?",
          "answer": "According to ICMR and WHO South Asian guidelines, the healthy BMI range for Indian men and women is 18.5 to 22.9 kg/m²."
        },
        {
          "question": "Why is the overweight cutoff 23.0 for Indians instead of 25.0?",
          "answer": "Indians have a higher percentage of visceral fat at lower body mass index levels, leading to increased risk of diabetes and hypertension at BMI 23.0 kg/m²."
        },
        {
          "question": "How to calculate ideal body weight for height in India?",
          "answer": "Divide your height in meters squared and multiply by 18.5 for minimum healthy weight and by 22.9 for maximum healthy weight. For example, at 170 cm, healthy weight is 53.5 kg to 66.2 kg."
        }
      ]
    },
    "es": {
      "eyebrow": "Estándares de Referencia de Salud",
      "title": "BMI Calculator for Indians – Healthy Height Weight Chart for Indian Adults – Guía y Calculadora",
      "intro": "Herramienta de cálculo y referencia educativa diseñada según los estándares de salud publicados de la OMS y CDC. Calcula tus métricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "Fórmula de Referencia Estándar",
      "formulaDesc": "Calculado utilizando ecuaciones estándar validadas.",
      "formulaCode": "BMI = Weight (kg) / [(Height in cm / 100)²]",
      "tableTitle": "Tabla de Referencia Estándar",
      "tableRows": [
        {
          "col1": "Categoría / Nivel 1",
          "col2": "< 18.5 kg/m²",
          "col3": "Rango de referencia Underweight reference threshold"
        },
        {
          "col1": "Categoría / Nivel 2",
          "col2": "18.5 – 22.9 kg/m²",
          "col3": "Rango de referencia Optimal healthy range for Indian adults"
        },
        {
          "col1": "Categoría / Nivel 3",
          "col2": "23.0 – 24.9 kg/m²",
          "col3": "Rango de referencia Elevated cardiometabolic risk cutoff for Indians"
        },
        {
          "col1": "Categoría / Nivel 4",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": "Rango de referencia Class I obesity threshold under ICMR standards"
        },
        {
          "col1": "Categoría / Nivel 5",
          "col2": "≥ 30.0 kg/m²",
          "col3": "Rango de referencia Severe obesity risk threshold"
        }
      ],
      "faqs": [
        {
          "question": "¿Cómo funciona la calculadora de bmi calculator for indians y qué mide?",
          "answer": "Esta calculadora evalúa tus datos personales utilizando ecuaciones validadas. Proporciona una estimación educativa para ayudarte a comprender tu estado de salud y referencias estándar."
        }
      ,
        {
          "question": "Por qué es the overweight cutoff 23.0 for Indians instead of 25.0?",
          "answer": "Indians have a higher percentage of visceral fat at lower body mass index levels, leading to increased risk of diabetes and hypertension at BMI 23.0 kg/m²."
        },
        {
          "question": "Cómo calculate ideal body weight for height in India?",
          "answer": "Divide your height in meters squared and multiply by 18.5 for minimum healthy weight and by 22.9 for maximum healthy weight. For example, at 170 cm, healthy weight is 53.5 kg to 66.2 kg."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de Référence de Santé",
      "title": "BMI Calculator for Indians – Healthy Height Weight Chart for Indian Adults – Outil de Référence",
      "intro": "Outil de calcul et de référence éducatif conçu selon les normes de santé publiées de l'OMS et du CDC. Calculez vos métriques et consultez les plages de référence.",
      "formulaTitle": "Formule de Référence Standard",
      "formulaDesc": "Calculé à l'aide d'équations standards validées.",
      "formulaCode": "BMI = Weight (kg) / [(Height in cm / 100)²]",
      "tableTitle": "Tableau de Référence Standard",
      "tableRows": [
        {
          "col1": "Catégorie / Niveau 1",
          "col2": "< 18.5 kg/m²",
          "col3": "Plage de référence Underweight reference threshold"
        },
        {
          "col1": "Catégorie / Niveau 2",
          "col2": "18.5 – 22.9 kg/m²",
          "col3": "Plage de référence Optimal healthy range for Indian adults"
        },
        {
          "col1": "Catégorie / Niveau 3",
          "col2": "23.0 – 24.9 kg/m²",
          "col3": "Plage de référence Elevated cardiometabolic risk cutoff for Indians"
        },
        {
          "col1": "Catégorie / Niveau 4",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": "Plage de référence Class I obesity threshold under ICMR standards"
        },
        {
          "col1": "Catégorie / Niveau 5",
          "col2": "≥ 30.0 kg/m²",
          "col3": "Plage de référence Severe obesity risk threshold"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de bmi calculator for indians et que mesure-t-il ?",
          "answer": "Ce calculateur évalue vos données personnelles à l'aide d'équations validées. Il fournit une estimation éducative pour vous aider à comprendre vos métriques et références standards."
        }
      ,
        {
          "question": "Pourquoi the overweight cutoff 23.0 for Indians instead of 25.0?",
          "answer": "Indians have a higher percentage of visceral fat at lower body mass index levels, leading to increased risk of diabetes and hypertension at BMI 23.0 kg/m²."
        },
        {
          "question": "Comment calculate ideal body weight for height in India?",
          "answer": "Divide your height in meters squared and multiply by 18.5 for minimum healthy weight and by 22.9 for maximum healthy weight. For example, at 170 cm, healthy weight is 53.5 kg to 66.2 kg."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "BMI Calculator for Indians – Healthy Height Weight Chart for Indian Adults – Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den veröffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und prüfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardmäßig validierten Gleichungen.",
      "formulaCode": "BMI = Weight (kg) / [(Height in cm / 100)²]",
      "tableTitle": "Standard-Referenztabelle",
      "tableRows": [
        {
          "col1": "Kategorie / Stufe 1",
          "col2": "< 18.5 kg/m²",
          "col3": "Referenzbereich Underweight reference threshold"
        },
        {
          "col1": "Kategorie / Stufe 2",
          "col2": "18.5 – 22.9 kg/m²",
          "col3": "Referenzbereich Optimal healthy range for Indian adults"
        },
        {
          "col1": "Kategorie / Stufe 3",
          "col2": "23.0 – 24.9 kg/m²",
          "col3": "Referenzbereich Elevated cardiometabolic risk cutoff for Indians"
        },
        {
          "col1": "Kategorie / Stufe 4",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": "Referenzbereich Class I obesity threshold under ICMR standards"
        },
        {
          "col1": "Kategorie / Stufe 5",
          "col2": "≥ 30.0 kg/m²",
          "col3": "Referenzbereich Severe obesity risk threshold"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der bmi calculator for indians-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre persönlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        }
      ,
        {
          "question": "Warum ist the overweight cutoff 23.0 for Indians instead of 25.0?",
          "answer": "Indians have a higher percentage of visceral fat at lower body mass index levels, leading to increased risk of diabetes and hypertension at BMI 23.0 kg/m²."
        },
        {
          "question": "Wie man calculate ideal body weight for height in India?",
          "answer": "Divide your height in meters squared and multiply by 18.5 for minimum healthy weight and by 22.9 for maximum healthy weight. For example, at 170 cm, healthy weight is 53.5 kg to 66.2 kg."
        }
      ]
    },
    "ko": {
      "eyebrow": "건강 참조 표준 지침",
      "title": "BMI 계산기 for Indians – Healthy Height Weight Chart for Indian Adults – 참조 계산기",
      "intro": "WHO 및 CDC 지침에 기반한 실시간 참고 계산기입니다. 개인별 수치를 측정하고 성인 표준 참조 범위를 확인하세요.",
      "formulaTitle": "표준 계산 공식",
      "formulaDesc": "검증된 표준 공식을 사용하여 계산됩니다.",
      "formulaCode": "BMI = Weight (kg) / [(Height in cm / 100)²]",
      "tableTitle": "표준 참조 진단표",
      "tableRows": [
        {
          "col1": "범주 / 단계 1",
          "col2": "< 18.5 kg/m²",
          "col3": "참조 범위 Underweight reference threshold"
        },
        {
          "col1": "범주 / 단계 2",
          "col2": "18.5 – 22.9 kg/m²",
          "col3": "참조 범위 Optimal healthy range for Indian adults"
        },
        {
          "col1": "범주 / 단계 3",
          "col2": "23.0 – 24.9 kg/m²",
          "col3": "참조 범위 Elevated cardiometabolic risk cutoff for Indians"
        },
        {
          "col1": "범주 / 단계 4",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": "참조 범위 Class I obesity threshold under ICMR standards"
        },
        {
          "col1": "범주 / 단계 5",
          "col2": "≥ 30.0 kg/m²",
          "col3": "참조 범위 Severe obesity risk threshold"
        }
      ],
      "faqs": [
        {
          "question": "bmi calculator for indians 계산기의 원리와 측정 항목은 무엇인가요?",
          "answer": "본 계산기는 검증된 공식을 사용하여 개인별 신체 지수를 산출합니다. 성인 표준 참조 범위를 바탕으로 교육적 분석 결과를 제공합니다."
        }
      ,
        {
          "question": "Why is the overweight cutoff 23.0 for Indians instead of 25.0? 안내 및 원리",
          "answer": "Indians have a higher percentage of visceral fat at lower body mass index levels, leading to increased risk of diabetes and hypertension at BMI 23.0 kg/m²."
        },
        {
          "question": " calculate ideal body weight for height in India? 안내 및 원리",
          "answer": "Divide your height in meters squared and multiply by 18.5 for minimum healthy weight and by 22.9 for maximum healthy weight. For example, at 170 cm, healthy weight is 53.5 kg to 66.2 kg."
        }
      ]
    },
    "hi": {
      "eyebrow": "आईसीएमआर एवं डब्ल्यूएचओ भारतीय मानक",
      "title": "भारतीयों के लिए बीएमआई कैलकुलेटर (BMI कैलकुलेटर for Indians)",
      "intro": "भारतीय चिकित्सा अनुसंधान परिषद (ICMR) और WHO दक्षिण एशियाई दिशानिर्देशों पर आधारित भारतीयों के लिए मुफ़्त बीएमआई कैलकुलेटर। किलोग्राम और सेंटीमीटर में अपने बीएमआई और स्वस्थ वजन सीमा की गणना करें।",
      "formulaTitle": "भारतीय बीएमआई सूत्र",
      "formulaDesc": "बीएमआई = वजन (किग्रा) / [ऊंचाई (मीटर)]² | भारतीयों के लिए स्वस्थ सीमा: 18.5 - 22.9 kg/m²",
      "formulaCode": "BMI = kg / m²",
      "tableTitle": "भारतीय वयस्कों के लिए बीएमआई श्रेणी चार्ट (ICMR मानक)",
      "tableRows": [
        {
          "col1": "कम वजन (Underweight)",
          "col2": "< 18.5 kg/m²",
          "col3": "कम वजन सीमा"
        },
        {
          "col1": "सामान्य वजन (Healthy Weight)",
          "col2": "18.5 – 22.9 kg/m²",
          "col3": "भारतीयों के लिए स्वस्थ सामान्य बीएमआई"
        },
        {
          "col1": "अधिक वजन (Overweight Cutoff 23)",
          "col2": "23.0 – 24.9 kg/m²",
          "col3": "भारतीयों के लिए अधिक वजन सीमा"
        },
        {
          "col1": "मोटापा श्रेणी I (Obese Class I)",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": "मोटापा श्रेणी I"
        },
        {
          "col1": "मोटापा श्रेणी II (Obese Class II)",
          "col2": "≥ 30.0 kg/m²",
          "col3": "गंभीर मोटापा"
        }
      ],
      "faqs": [
        {
          "question": "भारतीय बीएमआई मानक (Indian BMI Standard) क्या हैं?",
          "answer": "ICMR और डब्ल्यूएचओ के संशोधित मानकों के अनुसार दक्षिण एशियाई लोगों के लिए 23.0 kg/m² से ओवरवेट कटऑफ शुरू होता है।"
        },
        {
          "question": "सामान्य बीएमआई और भारतीय बीएमआई में क्या अंतर है?",
          "answer": "मानक बीएमआई में 25.0 पर ओवरवेट माना जाता है, जबकि भारतीय बीएमआई में 23.0 kg/m² पर ही स्वास्थ्य जोखिम का संदर्भ माना जाता है।"
        },
        {
          "question": "कमर का आकार (Waist Size) बीएमआई के साथ क्यों जरूरी है?",
          "answer": "भारतीयों में पेट की आंतरिक (विसरल) वसा जमा होने की प्रवृत्ति अधिक होती है, इसलिए बीएमआई और कमर दोनों का माप आवश्यक है।"
        },
        {
          "question": "क्या यह कैलकुलेटर निःशुल्क और सुरक्षित है?",
          "answer": "हाँ, यह 100% मुफ़्त है और आपकी सभी जानकारी आपके ब्राउज़र में ही सुरक्षित रहती है।"
        },
        {
          "question": "भारतीय बीएमआई के अनुसार स्वस्थ वजन कैसे बनाए रखें?",
          "answer": "संतुलित भारतीय आहार, नियमित व्यायाम और 22.9 kg/m² से कम बीएमआई बनाए रखना लाभदायक होता है।"
        }
      ,
        {
          "question": "भारतीय वयस्कों के लिए बीएमआई की गणना कैसे की जाती है?",
          "answer": "भारतीयों के लिए बीएमआई गणना: वजन (किग्रा) को ऊंचाई के वर्ग (मीटर²) से विभाजित करें। उदाहरण: 65 किग्रा / (1.68 मीटर x 1.68 मीटर) = 23.0 kg/m² (डब्ल्यूएचओ एशियाई कटऑफ के तहत ओवरवेट)।"
        },
        {
          "question": "भारतीयों के लिए आदर्श वजन सीमा क्या है?",
          "answer": "आईसीएमआर (ICMR) और डब्ल्यूएचओ (WHO) के दिशानिर्देशों के अनुसार भारतीय वयस्कों के लिए आदर्श बीएमआई 18.5 से 22.9 kg/m² के बीच रहता है।"
        }
      ]
    }
  },
  "healthy-weight-by-height": {
    "en": {
      "eyebrow": "WHO & Devine Reference Charts",
      "title": "Healthy Weight by Height Chart – Ideal Weight Range for Men & Women",
      "intro": "Explore official healthy weight by height reference ranges and height-weight lookup charts for men and women. Calculate your ideal weight according to height in kilograms (kg) and pounds (lbs) based on World Health Organization (WHO), CDC, and Devine formula standards.",
      "formulaTitle": "Healthy Weight Range & Ideal Weight Equations",
      "formulaDesc": "WHO Healthy Weight Range: Min Weight = 18.5 × [Height (m)]² | Max Weight = 24.9 × [Height (m)]² | Devine IBW Male: 50kg + 2.3kg/inch >5ft | Devine IBW Female: 45.5kg + 2.3kg/inch >5ft",
      "formulaCode": "Min Healthy (kg) = 18.5 × m²  |  Max Healthy (kg) = 24.9 × m²",
      "tableTitle": "Height Weight Chart for Men & Women (Official WHO Healthy Range in kg & lbs)",
      "tableRows": [
        {
          "col1": "4' 10\" (147 cm)",
          "col2": "40.0 – 53.8 kg (88 – 119 lbs)",
          "col3": "Ideal Devine Weight: Male ~43.2 kg | Female ~36.3 kg"
        },
        {
          "col1": "5' 0\" (152 cm)",
          "col2": "42.8 – 57.6 kg (94 – 127 lbs)",
          "col3": "Ideal Devine Weight: Male ~50.0 kg | Female ~45.5 kg"
        },
        {
          "col1": "5' 2\" (157 cm)",
          "col2": "45.6 – 61.4 kg (100 – 135 lbs)",
          "col3": "Ideal Devine Weight: Male ~54.6 kg | Female ~50.1 kg"
        },
        {
          "col1": "5' 4\" (163 cm)",
          "col2": "49.2 – 66.2 kg (108 – 146 lbs)",
          "col3": "Ideal Devine Weight: Male ~59.2 kg | Female ~54.7 kg"
        },
        {
          "col1": "5' 6\" (168 cm)",
          "col2": "52.2 – 70.3 kg (115 – 155 lbs)",
          "col3": "Ideal Devine Weight: Male ~63.8 kg | Female ~59.3 kg"
        },
        {
          "col1": "5' 8\" (173 cm)",
          "col2": "55.4 – 74.5 kg (122 – 164 lbs)",
          "col3": "Ideal Devine Weight: Male ~68.4 kg | Female ~63.9 kg"
        },
        {
          "col1": "5' 10\" (178 cm)",
          "col2": "58.6 – 78.9 kg (129 – 174 lbs)",
          "col3": "Ideal Devine Weight: Male ~73.0 kg | Female ~68.5 kg"
        },
        {
          "col1": "6' 0\" (183 cm)",
          "col2": "62.0 – 83.4 kg (136 – 184 lbs)",
          "col3": "Ideal Devine Weight: Male ~77.6 kg | Female ~73.1 kg"
        },
        {
          "col1": "6' 2\" (188 cm)",
          "col2": "65.4 – 88.0 kg (144 – 194 lbs)",
          "col3": "Ideal Devine Weight: Male ~82.2 kg | Female ~77.7 kg"
        }
      ],
      "faqs": [
        {
          "question": "What is a healthy weight for my height?",
          "answer": "A healthy weight for your height is determined by a BMI between 18.5 and 24.9 kg/m² according to WHO standards. Multiply your height in meters squared by 18.5 for minimum weight and 24.9 for maximum healthy weight."
        },
        {
          "question": "What is the healthy weight chart by height for men and women?",
          "answer": "A height weight chart lists healthy weight ranges based on stature. For example: 5'4\" (163cm) is 49–66 kg; 5'8\" (173cm) is 55–74 kg; 6'0\" (183cm) is 62–83 kg."
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
          "answer": "For South Asian and Indian adults, consensus guidelines recommend keeping BMI between 18.5 and 22.9 kg/m² due to higher visceral fat risk at lower body mass."
        }
      ]
    },
    "es": {
      "eyebrow": "Estándares de Referencia de Salud",
      "title": "Healthy Weight by Height Chart – Ideal Weight Range for Men & Women – Guía y Calculadora",
      "intro": "Herramienta de cálculo y referencia educativa diseñada según los estándares de salud publicados de la OMS y CDC. Calcula tus métricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "Fórmula de Referencia Estándar",
      "formulaDesc": "Calculado utilizando ecuaciones estándar validadas.",
      "formulaCode": "Min Healthy (kg) = 18.5 × m²  |  Max Healthy (kg) = 24.9 × m²",
      "tableTitle": "Tabla de Referencia Estándar",
      "tableRows": [
        {
          "col1": "Categoría / Nivel 1",
          "col2": "40.0 – 53.8 kg (88 – 119 lbs)",
          "col3": "Rango de referencia Ideal Devine Weight: Male ~43.2 kg | Female ~36.3 kg"
        },
        {
          "col1": "Categoría / Nivel 2",
          "col2": "42.8 – 57.6 kg (94 – 127 lbs)",
          "col3": "Rango de referencia Ideal Devine Weight: Male ~50.0 kg | Female ~45.5 kg"
        },
        {
          "col1": "Categoría / Nivel 3",
          "col2": "45.6 – 61.4 kg (100 – 135 lbs)",
          "col3": "Rango de referencia Ideal Devine Weight: Male ~54.6 kg | Female ~50.1 kg"
        },
        {
          "col1": "Categoría / Nivel 4",
          "col2": "49.2 – 66.2 kg (108 – 146 lbs)",
          "col3": "Rango de referencia Ideal Devine Weight: Male ~59.2 kg | Female ~54.7 kg"
        },
        {
          "col1": "Categoría / Nivel 5",
          "col2": "52.2 – 70.3 kg (115 – 155 lbs)",
          "col3": "Rango de referencia Ideal Devine Weight: Male ~63.8 kg | Female ~59.3 kg"
        },
        {
          "col1": "Categoría / Nivel 6",
          "col2": "55.4 – 74.5 kg (122 – 164 lbs)",
          "col3": "Rango de referencia Ideal Devine Weight: Male ~68.4 kg | Female ~63.9 kg"
        },
        {
          "col1": "Categoría / Nivel 7",
          "col2": "58.6 – 78.9 kg (129 – 174 lbs)",
          "col3": "Rango de referencia Ideal Devine Weight: Male ~73.0 kg | Female ~68.5 kg"
        },
        {
          "col1": "Categoría / Nivel 8",
          "col2": "62.0 – 83.4 kg (136 – 184 lbs)",
          "col3": "Rango de referencia Ideal Devine Weight: Male ~77.6 kg | Female ~73.1 kg"
        },
        {
          "col1": "Categoría / Nivel 9",
          "col2": "65.4 – 88.0 kg (144 – 194 lbs)",
          "col3": "Rango de referencia Ideal Devine Weight: Male ~82.2 kg | Female ~77.7 kg"
        }
      ],
      "faqs": [
        {
          "question": "¿Cómo funciona la calculadora de healthy weight by height y qué mide?",
          "answer": "Esta calculadora evalúa tus datos personales utilizando ecuaciones validadas. Proporciona una estimación educativa para ayudarte a comprender tu estado de salud y referencias estándar."
        }
      ,
        {
          "question": "¿Qué es el healthy weight chart by height for men and women?",
          "answer": "Un gráfico de peso y altura enumera los rangos de peso saludable según la estatura. Por ejemplo, para una altura de 163 cm (5 ft 4 in), el rango normal es de 49 kg a 66 kg (108 lbs a 145 lbs)."
        },
        {
          "question": "Cómo calculate ideal weight according to height?",
          "answer": "Ideal weight according to height can be calculated using the Devine formula: For Men: 50 kg + 2.3 kg per inch over 5 feet. For Women: 45.5 kg + 2.3 kg per inch over 5 feet."
        },
        {
          "question": "Is the weight chart for men different from the weight chart for women?",
          "answer": "While WHO BMI ranges (18.5 to 24.9) apply to both adult men and women, ideal body weight formulas (such as Devine or Robinson) adjust for gender due to differences in average skeletal mass and muscle composition."
        },
        {
          "question": "¿Qué es a healthy weight for Indian adults by height?",
          "answer": "For South Asian and Indian adults, consensus guidelines recommend keeping BMI between 18.5 and 22.9 kg/m² due to higher visceral fat risk at lower body mass."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de Référence de Santé",
      "title": "Healthy Weight by Height Chart – Ideal Weight Range for Men & Women – Outil de Référence",
      "intro": "Outil de calcul et de référence éducatif conçu selon les normes de santé publiées de l'OMS et du CDC. Calculez vos métriques et consultez les plages de référence.",
      "formulaTitle": "Formule de Référence Standard",
      "formulaDesc": "Calculé à l'aide d'équations standards validées.",
      "formulaCode": "Min Healthy (kg) = 18.5 × m²  |  Max Healthy (kg) = 24.9 × m²",
      "tableTitle": "Tableau de Référence Standard",
      "tableRows": [
        {
          "col1": "Catégorie / Niveau 1",
          "col2": "40.0 – 53.8 kg (88 – 119 lbs)",
          "col3": "Plage de référence Ideal Devine Weight: Male ~43.2 kg | Female ~36.3 kg"
        },
        {
          "col1": "Catégorie / Niveau 2",
          "col2": "42.8 – 57.6 kg (94 – 127 lbs)",
          "col3": "Plage de référence Ideal Devine Weight: Male ~50.0 kg | Female ~45.5 kg"
        },
        {
          "col1": "Catégorie / Niveau 3",
          "col2": "45.6 – 61.4 kg (100 – 135 lbs)",
          "col3": "Plage de référence Ideal Devine Weight: Male ~54.6 kg | Female ~50.1 kg"
        },
        {
          "col1": "Catégorie / Niveau 4",
          "col2": "49.2 – 66.2 kg (108 – 146 lbs)",
          "col3": "Plage de référence Ideal Devine Weight: Male ~59.2 kg | Female ~54.7 kg"
        },
        {
          "col1": "Catégorie / Niveau 5",
          "col2": "52.2 – 70.3 kg (115 – 155 lbs)",
          "col3": "Plage de référence Ideal Devine Weight: Male ~63.8 kg | Female ~59.3 kg"
        },
        {
          "col1": "Catégorie / Niveau 6",
          "col2": "55.4 – 74.5 kg (122 – 164 lbs)",
          "col3": "Plage de référence Ideal Devine Weight: Male ~68.4 kg | Female ~63.9 kg"
        },
        {
          "col1": "Catégorie / Niveau 7",
          "col2": "58.6 – 78.9 kg (129 – 174 lbs)",
          "col3": "Plage de référence Ideal Devine Weight: Male ~73.0 kg | Female ~68.5 kg"
        },
        {
          "col1": "Catégorie / Niveau 8",
          "col2": "62.0 – 83.4 kg (136 – 184 lbs)",
          "col3": "Plage de référence Ideal Devine Weight: Male ~77.6 kg | Female ~73.1 kg"
        },
        {
          "col1": "Catégorie / Niveau 9",
          "col2": "65.4 – 88.0 kg (144 – 194 lbs)",
          "col3": "Plage de référence Ideal Devine Weight: Male ~82.2 kg | Female ~77.7 kg"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de healthy weight by height et que mesure-t-il ?",
          "answer": "Ce calculateur évalue vos données personnelles à l'aide d'équations validées. Il fournit une estimation éducative pour vous aider à comprendre vos métriques et références standards."
        }
      ,
        {
          "question": "Qu'est-ce que le healthy weight chart by height for men and women?",
          "answer": "Un tableau de référence poids-taille indique les plages de poids santé en fonction de la taille. Par exemple, pour 163 cm (5 ft 4 in), la plage normale est de 49 kg à 66 kg (108 lbs à 145 lbs)."
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
          "answer": "For South Asian and Indian adults, consensus guidelines recommend keeping BMI between 18.5 and 22.9 kg/m² due to higher visceral fat risk at lower body mass."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "Healthy Weight by Height Chart – Ideal Weight Range for Men & Women – Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den veröffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und prüfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardmäßig validierten Gleichungen.",
      "formulaCode": "Min Healthy (kg) = 18.5 × m²  |  Max Healthy (kg) = 24.9 × m²",
      "tableTitle": "Standard-Referenztabelle",
      "tableRows": [
        {
          "col1": "Kategorie / Stufe 1",
          "col2": "40.0 – 53.8 kg (88 – 119 lbs)",
          "col3": "Referenzbereich Ideal Devine Weight: Male ~43.2 kg | Female ~36.3 kg"
        },
        {
          "col1": "Kategorie / Stufe 2",
          "col2": "42.8 – 57.6 kg (94 – 127 lbs)",
          "col3": "Referenzbereich Ideal Devine Weight: Male ~50.0 kg | Female ~45.5 kg"
        },
        {
          "col1": "Kategorie / Stufe 3",
          "col2": "45.6 – 61.4 kg (100 – 135 lbs)",
          "col3": "Referenzbereich Ideal Devine Weight: Male ~54.6 kg | Female ~50.1 kg"
        },
        {
          "col1": "Kategorie / Stufe 4",
          "col2": "49.2 – 66.2 kg (108 – 146 lbs)",
          "col3": "Referenzbereich Ideal Devine Weight: Male ~59.2 kg | Female ~54.7 kg"
        },
        {
          "col1": "Kategorie / Stufe 5",
          "col2": "52.2 – 70.3 kg (115 – 155 lbs)",
          "col3": "Referenzbereich Ideal Devine Weight: Male ~63.8 kg | Female ~59.3 kg"
        },
        {
          "col1": "Kategorie / Stufe 6",
          "col2": "55.4 – 74.5 kg (122 – 164 lbs)",
          "col3": "Referenzbereich Ideal Devine Weight: Male ~68.4 kg | Female ~63.9 kg"
        },
        {
          "col1": "Kategorie / Stufe 7",
          "col2": "58.6 – 78.9 kg (129 – 174 lbs)",
          "col3": "Referenzbereich Ideal Devine Weight: Male ~73.0 kg | Female ~68.5 kg"
        },
        {
          "col1": "Kategorie / Stufe 8",
          "col2": "62.0 – 83.4 kg (136 – 184 lbs)",
          "col3": "Referenzbereich Ideal Devine Weight: Male ~77.6 kg | Female ~73.1 kg"
        },
        {
          "col1": "Kategorie / Stufe 9",
          "col2": "65.4 – 88.0 kg (144 – 194 lbs)",
          "col3": "Referenzbereich Ideal Devine Weight: Male ~82.2 kg | Female ~77.7 kg"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der healthy weight by height-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre persönlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        }
      ,
        {
          "question": "Was ist der healthy weight chart by height for men and women?",
          "answer": "Eine Größe-Gewichts-Tabelle listet gesunde Gewichtsbereiche basierend auf der Körpergröße auf. Zum Beispiel liegt der normale Bereich bei 163 cm (5 ft 4 in) zwischen 49 kg und 66 kg (108 lbs bis 145 lbs)."
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
          "answer": "For South Asian and Indian adults, consensus guidelines recommend keeping BMI between 18.5 and 22.9 kg/m² due to higher visceral fat risk at lower body mass."
        }
      ]
    },
    "ko": {
      "eyebrow": "건강 참조 표준 지침",
      "title": "Healthy Weight by Height Chart – Ideal Weight Range for Men & Women – 참조 계산기",
      "intro": "WHO 및 CDC 지침에 기반한 실시간 참고 계산기입니다. 개인별 수치를 측정하고 성인 표준 참조 범위를 확인하세요.",
      "formulaTitle": "표준 계산 공식",
      "formulaDesc": "검증된 표준 공식을 사용하여 계산됩니다.",
      "formulaCode": "Min Healthy (kg) = 18.5 × m²  |  Max Healthy (kg) = 24.9 × m²",
      "tableTitle": "표준 참조 진단표",
      "tableRows": [
        {
          "col1": "범주 / 단계 1",
          "col2": "40.0 – 53.8 kg (88 – 119 lbs)",
          "col3": "참조 범위 Ideal Devine Weight: Male ~43.2 kg | Female ~36.3 kg"
        },
        {
          "col1": "범주 / 단계 2",
          "col2": "42.8 – 57.6 kg (94 – 127 lbs)",
          "col3": "참조 범위 Ideal Devine Weight: Male ~50.0 kg | Female ~45.5 kg"
        },
        {
          "col1": "범주 / 단계 3",
          "col2": "45.6 – 61.4 kg (100 – 135 lbs)",
          "col3": "참조 범위 Ideal Devine Weight: Male ~54.6 kg | Female ~50.1 kg"
        },
        {
          "col1": "범주 / 단계 4",
          "col2": "49.2 – 66.2 kg (108 – 146 lbs)",
          "col3": "참조 범위 Ideal Devine Weight: Male ~59.2 kg | Female ~54.7 kg"
        },
        {
          "col1": "범주 / 단계 5",
          "col2": "52.2 – 70.3 kg (115 – 155 lbs)",
          "col3": "참조 범위 Ideal Devine Weight: Male ~63.8 kg | Female ~59.3 kg"
        },
        {
          "col1": "범주 / 단계 6",
          "col2": "55.4 – 74.5 kg (122 – 164 lbs)",
          "col3": "참조 범위 Ideal Devine Weight: Male ~68.4 kg | Female ~63.9 kg"
        },
        {
          "col1": "범주 / 단계 7",
          "col2": "58.6 – 78.9 kg (129 – 174 lbs)",
          "col3": "참조 범위 Ideal Devine Weight: Male ~73.0 kg | Female ~68.5 kg"
        },
        {
          "col1": "범주 / 단계 8",
          "col2": "62.0 – 83.4 kg (136 – 184 lbs)",
          "col3": "참조 범위 Ideal Devine Weight: Male ~77.6 kg | Female ~73.1 kg"
        },
        {
          "col1": "범주 / 단계 9",
          "col2": "65.4 – 88.0 kg (144 – 194 lbs)",
          "col3": "참조 범위 Ideal Devine Weight: Male ~82.2 kg | Female ~77.7 kg"
        }
      ],
      "faqs": [
        {
          "question": "healthy weight by height 계산기의 원리와 측정 항목은 무엇인가요?",
          "answer": "본 계산기는 검증된 공식을 사용하여 개인별 신체 지수를 산출합니다. 성인 표준 참조 범위를 바탕으로 교육적 분석 결과를 제공합니다."
        }
      ,
        {
          "question": "신장별 표준 체중 차트의 기준은 무엇인가요?",
          "answer": "신장별 표준 체중 차트는 키에 따른 건강한 체중 범위를 나타냅니다. 예를 들어 163 cm (5 ft 4 in)의 경우 표준 권장 범위는 49 kg ~ 66 kg (108 lbs ~ 145 lbs)입니다."
        },
        {
          "question": " calculate ideal weight according to height? 안내 및 원리",
          "answer": "Ideal weight according to height can be calculated using the Devine formula: For Men: 50 kg + 2.3 kg per inch over 5 feet. For Women: 45.5 kg + 2.3 kg per inch over 5 feet."
        },
        {
          "question": "Is the weight chart for men different from the weight chart for women? 안내 및 원리",
          "answer": "While WHO BMI ranges (18.5 to 24.9) apply to both adult men and women, ideal body weight formulas (such as Devine or Robinson) adjust for gender due to differences in average skeletal mass and muscle composition."
        },
        {
          "question": " a healthy weight for Indian adults by height? 안내 및 원리",
          "answer": "For South Asian and Indian adults, consensus guidelines recommend keeping BMI between 18.5 and 22.9 kg/m² due to higher visceral fat risk at lower body mass."
        }
      ]
    },
    "hi": {
      "eyebrow": "डब्ल्यूएचओ एवं डिवाइन संदर्भ तालिका",
      "title": "ऊंचाई के अनुसार स्वस्थ वजन चार्ट (Healthy Weight by Height)",
      "intro": "पुरुषों और महिलाओं के लिए ऊंचाई के अनुसार स्वस्थ वजन संदर्भ सीमाओं और हाइट-वेट चार्ट की समीक्षा करें। WHO, CDC और डिवाइन फॉर्मूला के आधार पर किलोग्राम (kg) और पाउंड (lbs) में अपनी ऊंचाई के अनुसार आदर्श वजन खोजें।",
      "formulaTitle": "ऊंचाई के अनुसार स्वस्थ वजन का गणितीय सूत्र",
      "formulaDesc": "न्यूनतम स्वस्थ वजन = 18.5 × [ऊंचाई (मीटर)]² | अधिकतम स्वस्थ वजन = 24.9 × [ऊंचाई (मीटर)]²",
      "formulaCode": "Min (kg) = 18.5 × m²  |  Max (kg) = 24.9 × m²",
      "tableTitle": "पुरुषों एवं महिलाओं के लिए हाइट-वेट चार्ट (डब्ल्यूएचओ स्वस्थ वजन सीमा)",
      "tableRows": [
        {
          "col1": "5 फीट 0 इंच (152 cm)",
          "col2": "42.8 – 57.6 किग्रा (94 – 127 lbs)",
          "col3": "आदर्श वजन: पुरुष ~50.0 kg | महिला ~45.5 kg"
        },
        {
          "col1": "5 फीट 2 इंच (157 cm)",
          "col2": "45.6 – 61.4 किग्रा (100 – 135 lbs)",
          "col3": "आदर्श वजन: पुरुष ~54.6 kg | महिला ~50.1 kg"
        },
        {
          "col1": "5 फीट 4 इंच (163 cm)",
          "col2": "49.2 – 66.2 किग्रा (108 – 146 lbs)",
          "col3": "आदर्श वजन: पुरुष ~59.2 kg | महिला ~54.7 kg"
        },
        {
          "col1": "5 फीट 6 इंच (168 cm)",
          "col2": "52.2 – 70.3 किग्रा (115 – 155 lbs)",
          "col3": "आदर्श वजन: पुरुष ~63.8 kg | महिला ~59.3 kg"
        },
        {
          "col1": "5 फीट 8 इंच (173 cm)",
          "col2": "55.4 – 74.5 किग्रा (122 – 164 lbs)",
          "col3": "आदर्श वजन: पुरुष ~68.4 kg | महिला ~63.9 kg"
        },
        {
          "col1": "5 फीट 10 इंच (178 cm)",
          "col2": "58.6 – 78.9 किग्रा (129 – 174 lbs)",
          "col3": "आदर्श वजन: पुरुष ~73.0 kg | महिला ~68.5 kg"
        },
        {
          "col1": "6 फीट 0 इंच (183 cm)",
          "col2": "62.0 – 83.4 किग्रा (136 – 184 lbs)",
          "col3": "आदर्श वजन: पुरुष ~77.6 kg | महिला ~73.1 kg"
        },
        {
          "col1": "श्रेणी / स्तर 8",
          "col2": "62.0 – 83.4 kg (136 – 184 lbs)",
          "col3": "संदर्भ सीमा Ideal Devine Weight: Male ~77.6 kg | Female ~73.1 kg"
        },
        {
          "col1": "श्रेणी / स्तर 9",
          "col2": "65.4 – 88.0 kg (144 – 194 lbs)",
          "col3": "संदर्भ सीमा Ideal Devine Weight: Male ~82.2 kg | Female ~77.7 kg"
        }
      ],
      "faqs": [
        {
          "question": "मेरी ऊंचाई के अनुसार मेरा स्वस्थ वजन क्या होना चाहिए?",
          "answer": "आपकी ऊंचाई के आधार पर 18.5 से 24.9 बीएमआई की सीमा के बीच का वजन आपका स्वस्थ वजन क्षेत्र (Healthy Weight Range) है।"
        },
        {
          "question": "डिवाइन सूत्र (Devine IBW) क्या है?",
          "answer": "डिवाइन सूत्र ऊंचाई के आधार पर आदर्श शरीर वजन (Ideal Body Weight) का अनुमान लगाने का एक स्थापित नैदानिक सूत्र है।"
        },
        {
          "question": "क्या पुरुषों और महिलाओं के लिए ऊंचाई के अनुसार वजन सीमा अलग है?",
          "answer": "बीएमआई रेंज समान होती है, लेकिन डिवाइन सूत्र पुरुषों के लिए 50 किग्रा और महिलाओं के लिए 45.5 किग्रा बेस (5 फीट से ऊपर) का उपयोग करता है।"
        },
        {
          "question": "ऊंचाई के अनुसार वजन कम या ज्यादा होने पर क्या करें?",
          "answer": "यदि आपका वजन स्वस्थ सीमा से बाहर है, तो आहार और शारीरिक गतिविधि की समीक्षा करके संतुलित लक्ष्य निर्धारित करें।"
        },
        {
          "question": "क्या हड्डियों के ढांचे (Frame Size) का वजन पर असर पड़ता है?",
          "answer": "हाँ, बड़े फ्रेम वाले व्यक्तियों का स्वस्थ वजन सीमा के ऊपरी छोर पर होना स्वाभाविक हो सकता है।"
        }
      ]
    }
  },
  "diabetes-risk-calculator": {
    "en": {
      "eyebrow": "WHO Asian Regional Guidance",
      "title": "Asian BMI Reference Calculator — BMI 23 Threshold",
      "intro": "Calculate BMI using commonly referenced Asian-population BMI thresholds and waist measurements. Results provide population-level reference context and are not a diabetes diagnosis.",
      "formulaTitle": "WHO Asian BMI Reference Criteria & Waist Thresholds",
      "formulaDesc": "Asian Overweight Reference Threshold: BMI ≥ 23.0 kg/m² | Asian Obesity Reference Threshold: BMI ≥ 27.5 kg/m² | Asian Waist Screening Reference: Men ≥ 90 cm, Women ≥ 80 cm",
      "formulaCode": "Asian Overweight: BMI 23.0 - 27.4 | Asian Obesity: BMI ≥ 27.5",
      "tableTitle": "WHO Asian BMI Reference Matrix vs Western Baseline",
      "tableRows": [
        {
          "col1": "Underweight",
          "col2": "BMI < 18.5 kg/m²",
          "col3": ""
        },
        {
          "col1": "Standard Reference Weight",
          "col2": "BMI 18.5 – 22.9 kg/m²",
          "col3": ""
        },
        {
          "col1": "Asian Overweight Reference Threshold (23)",
          "col2": "BMI 23.0 – 27.4 kg/m²",
          "col3": ""
        },
        {
          "col1": "Asian Obesity Class I",
          "col2": "BMI 27.5 – 32.4 kg/m²",
          "col3": ""
        },
        {
          "col1": "Asian Obesity Class II",
          "col2": "BMI ≥ 32.5 kg/m²",
          "col3": ""
        }
      ],
      "faqs": [
        {
          "question": "What is the Asian BMI Cutoff Calculator 23?",
          "answer": "The Asian BMI Cutoff Calculator 23 is a health screening reference tool aligned with WHO reference guidelines. It provides reference context for the lower BMI thresholds often applied in Asian population health studies."
        },
        {
          "question": "Why is the Asian BMI reference cutoff set at 23 kg/m² instead of 25 kg/m²?",
          "answer": "World Health Organization (WHO) epidemiological studies observed that Asian populations often exhibit higher percentages of body fat at lower BMI values compared to European populations, prompting the use of 23.0 kg/m² as a screening reference threshold."
        },
        {
          "question": "How is the Asian BMI threshold of 23 kg/m² evaluated?",
          "answer": "Divide your weight in kg by your height in meters squared. A score of 23.0 kg/m² or higher indicates the Asian overweight reference threshold, providing educational screening context."
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
      "eyebrow": "Estándares de Referencia de Salud",
      "title": "Asian BMI Reference Calculator — BMI 23 Threshold – Guía y Calculadora",
      "intro": "Herramienta de cálculo y referencia educativa diseñada según los estándares de salud publicados de la OMS y CDC. Calcula tus métricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "Fórmula de Referencia Estándar",
      "formulaDesc": "Calculado utilizando ecuaciones estándar validadas.",
      "formulaCode": "Asian Overweight: BMI 23.0 - 27.4 | Asian Obesity: BMI ≥ 27.5",
      "tableTitle": "Tabla de Referencia Estándar",
      "tableRows": [
        {
          "col1": "Categoría / Nivel 1",
          "col2": "BMI < 18.5 kg/m²",
          "col3": "Rango de referencia "
        },
        {
          "col1": "Categoría / Nivel 2",
          "col2": "BMI 18.5 – 22.9 kg/m²",
          "col3": "Rango de referencia "
        },
        {
          "col1": "Categoría / Nivel 3",
          "col2": "BMI 23.0 – 27.4 kg/m²",
          "col3": "Rango de referencia "
        },
        {
          "col1": "Categoría / Nivel 4",
          "col2": "BMI 27.5 – 32.4 kg/m²",
          "col3": "Rango de referencia "
        },
        {
          "col1": "Categoría / Nivel 5",
          "col2": "BMI ≥ 32.5 kg/m²",
          "col3": "Rango de referencia "
        }
      ],
      "faqs": [
        {
          "question": "¿Cómo funciona la calculadora de diabetes risk calculator y qué mide?",
          "answer": "Esta calculadora evalúa tus datos personales utilizando ecuaciones validadas. Proporciona una estimación educativa para ayudarte a comprender tu estado de salud y referencias estándar."
        }
      ,
        {
          "question": "Por qué es the Asian BMI reference cutoff set at 23 kg/m² instead of 25 kg/m²?",
          "answer": "World Health Organization (WHO) epidemiological studies observed that Asian populations often exhibit higher percentages of body fat at lower BMI values compared to European populations, prompting the use of 23.0 kg/m² as a screening reference threshold."
        },
        {
          "question": "¿Cómo se the Asian BMI threshold of 23 kg/m² evaluated?",
          "answer": "Divide your weight in kg by your height in meters squared. A score of 23.0 kg/m² or higher indicates the Asian overweight reference threshold, providing educational screening context."
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
      "eyebrow": "Normes de Référence de Santé",
      "title": "Asian BMI Reference Calculator — BMI 23 Threshold – Outil de Référence",
      "intro": "Outil de calcul et de référence éducatif conçu selon les normes de santé publiées de l'OMS et du CDC. Calculez vos métriques et consultez les plages de référence.",
      "formulaTitle": "Formule de Référence Standard",
      "formulaDesc": "Calculé à l'aide d'équations standards validées.",
      "formulaCode": "Asian Overweight: BMI 23.0 - 27.4 | Asian Obesity: BMI ≥ 27.5",
      "tableTitle": "Tableau de Référence Standard",
      "tableRows": [
        {
          "col1": "Catégorie / Niveau 1",
          "col2": "BMI < 18.5 kg/m²",
          "col3": "Plage de référence "
        },
        {
          "col1": "Catégorie / Niveau 2",
          "col2": "BMI 18.5 – 22.9 kg/m²",
          "col3": "Plage de référence "
        },
        {
          "col1": "Catégorie / Niveau 3",
          "col2": "BMI 23.0 – 27.4 kg/m²",
          "col3": "Plage de référence "
        },
        {
          "col1": "Catégorie / Niveau 4",
          "col2": "BMI 27.5 – 32.4 kg/m²",
          "col3": "Plage de référence "
        },
        {
          "col1": "Catégorie / Niveau 5",
          "col2": "BMI ≥ 32.5 kg/m²",
          "col3": "Plage de référence "
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de diabetes risk calculator et que mesure-t-il ?",
          "answer": "Ce calculateur évalue vos données personnelles à l'aide d'équations validées. Il fournit une estimation éducative pour vous aider à comprendre vos métriques et références standards."
        }
      ,
        {
          "question": "Pourquoi the Asian BMI reference cutoff set at 23 kg/m² instead of 25 kg/m²?",
          "answer": "World Health Organization (WHO) epidemiological studies observed that Asian populations often exhibit higher percentages of body fat at lower BMI values compared to European populations, prompting the use of 23.0 kg/m² as a screening reference threshold."
        },
        {
          "question": "Comment est the Asian BMI threshold of 23 kg/m² evaluated?",
          "answer": "Divide your weight in kg by your height in meters squared. A score of 23.0 kg/m² or higher indicates the Asian overweight reference threshold, providing educational screening context."
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
      "title": "Asian BMI Reference Calculator — BMI 23 Threshold – Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den veröffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und prüfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardmäßig validierten Gleichungen.",
      "formulaCode": "Asian Overweight: BMI 23.0 - 27.4 | Asian Obesity: BMI ≥ 27.5",
      "tableTitle": "Standard-Referenztabelle",
      "tableRows": [
        {
          "col1": "Kategorie / Stufe 1",
          "col2": "BMI < 18.5 kg/m²",
          "col3": "Referenzbereich "
        },
        {
          "col1": "Kategorie / Stufe 2",
          "col2": "BMI 18.5 – 22.9 kg/m²",
          "col3": "Referenzbereich "
        },
        {
          "col1": "Kategorie / Stufe 3",
          "col2": "BMI 23.0 – 27.4 kg/m²",
          "col3": "Referenzbereich "
        },
        {
          "col1": "Kategorie / Stufe 4",
          "col2": "BMI 27.5 – 32.4 kg/m²",
          "col3": "Referenzbereich "
        },
        {
          "col1": "Kategorie / Stufe 5",
          "col2": "BMI ≥ 32.5 kg/m²",
          "col3": "Referenzbereich "
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der diabetes risk calculator-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre persönlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        }
      ,
        {
          "question": "Warum ist the Asian BMI reference cutoff set at 23 kg/m² instead of 25 kg/m²?",
          "answer": "World Health Organization (WHO) epidemiological studies observed that Asian populations often exhibit higher percentages of body fat at lower BMI values compared to European populations, prompting the use of 23.0 kg/m² as a screening reference threshold."
        },
        {
          "question": "Wie wird the Asian BMI threshold of 23 kg/m² evaluated?",
          "answer": "Divide your weight in kg by your height in meters squared. A score of 23.0 kg/m² or higher indicates the Asian overweight reference threshold, providing educational screening context."
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
      "eyebrow": "건강 참조 표준 지침",
      "title": "Asian BMI Reference 계산기 — BMI 23 Threshold – 참조 계산기",
      "intro": "WHO 및 CDC 지침에 기반한 실시간 참고 계산기입니다. 개인별 수치를 측정하고 성인 표준 참조 범위를 확인하세요.",
      "formulaTitle": "표준 계산 공식",
      "formulaDesc": "검증된 표준 공식을 사용하여 계산됩니다.",
      "formulaCode": "Asian Overweight: BMI 23.0 - 27.4 | Asian Obesity: BMI ≥ 27.5",
      "tableTitle": "표준 참조 진단표",
      "tableRows": [
        {
          "col1": "범주 / 단계 1",
          "col2": "BMI < 18.5 kg/m²",
          "col3": "참조 범위 "
        },
        {
          "col1": "범주 / 단계 2",
          "col2": "BMI 18.5 – 22.9 kg/m²",
          "col3": "참조 범위 "
        },
        {
          "col1": "범주 / 단계 3",
          "col2": "BMI 23.0 – 27.4 kg/m²",
          "col3": "참조 범위 "
        },
        {
          "col1": "범주 / 단계 4",
          "col2": "BMI 27.5 – 32.4 kg/m²",
          "col3": "참조 범위 "
        },
        {
          "col1": "범주 / 단계 5",
          "col2": "BMI ≥ 32.5 kg/m²",
          "col3": "참조 범위 "
        }
      ],
      "faqs": [
        {
          "question": "diabetes risk calculator 계산기의 원리와 측정 항목은 무엇인가요?",
          "answer": "본 계산기는 검증된 공식을 사용하여 개인별 신체 지수를 산출합니다. 성인 표준 참조 범위를 바탕으로 교육적 분석 결과를 제공합니다."
        }
      ,
        {
          "question": "Why is the Asian BMI reference cutoff set at 23 kg/m² instead of 25 kg/m²? 안내 및 원리",
          "answer": "World Health Organization (WHO) epidemiological studies observed that Asian populations often exhibit higher percentages of body fat at lower BMI values compared to European populations, prompting the use of 23.0 kg/m² as a screening reference threshold."
        },
        {
          "question": " the Asian BMI threshold of 23 kg/m² evaluated? 안내 및 원리",
          "answer": "Divide your weight in kg by your height in meters squared. A score of 23.0 kg/m² or higher indicates the Asian overweight reference threshold, providing educational screening context."
        },
        {
          "question": "What waist circumference screening thresholds apply to Asian populations? 안내 및 원리",
          "answer": "According to International Diabetes Federation (IDF) reference standards, abdominal waist circumference screening thresholds for Asian adults are 90 cm (35 inches) for men and 80 cm (31.5 inches) for women."
        },
        {
          "question": "What should I do if my BMI score is 23 or higher? 안내 및 원리",
          "answer": "A BMI score of 23.0 to 27.4 falls within the Asian overweight reference range. Because BMI is a screening metric, consult a qualified healthcare provider for personalized medical evaluation."
        }
      ]
    },
    "hi": {
      "eyebrow": "स्वास्थ्य संदर्भ मानक",
      "title": "Asian BMI Reference कैलकुलेटर — BMI 23 Threshold – मुफ्त कैलकुलेटर",
      "intro": "डब्ल्यूएचओ और सीडीसी स्वास्थ्य मानकों के अनुसार निर्मित संदर्भ टूल। अपनी मेट्रिक्स की गणना करें और स्थापित स्वास्थ्य सीमाओं की समीक्षा करें।",
      "formulaTitle": "मानक संदर्भ सूत्र",
      "formulaDesc": "मानक सत्यापित समीकरणों का उपयोग करके गणना की गई।",
      "formulaCode": "Asian Overweight: BMI 23.0 - 27.4 | Asian Obesity: BMI ≥ 27.5",
      "tableTitle": "मानक संदर्भ तालिका",
      "tableRows": [
        {
          "col1": "श्रेणी / स्तर 1",
          "col2": "BMI < 18.5 kg/m²",
          "col3": "संदर्भ सीमा "
        },
        {
          "col1": "श्रेणी / स्तर 2",
          "col2": "BMI 18.5 – 22.9 kg/m²",
          "col3": "संदर्भ सीमा "
        },
        {
          "col1": "श्रेणी / स्तर 3",
          "col2": "BMI 23.0 – 27.4 kg/m²",
          "col3": "संदर्भ सीमा "
        },
        {
          "col1": "श्रेणी / स्तर 4",
          "col2": "BMI 27.5 – 32.4 kg/m²",
          "col3": "संदर्भ सीमा "
        },
        {
          "col1": "श्रेणी / स्तर 5",
          "col2": "BMI ≥ 32.5 kg/m²",
          "col3": "संदर्भ सीमा "
        }
      ],
      "faqs": [
        {
          "question": "बीएमआई और टाइप 2 मधुमेह जोखिम में क्या संबंध है?",
          "answer": "बढ़ा हुआ बीएमआई (विशेषकर एशियाई आबादी में ≥23.0 kg/m²) इंसुलिन प्रतिरोध और मधुमेह जोखिम के उच्च संकेतकों से जुड़ा है।"
        },
        {
          "question": "कमर की माप मधुमेह के जोखिम को कैसे दर्शाती है?",
          "answer": "कमर के आसपास विसरल वसा (Visceral Fat) का जमाव इंसुलिन संवेदनशीलता को प्रभावित करने वाला मुख्य कारक है।"
        },
        {
          "question": "यह कैलकुलेटर किन जोखिम श्रेणियों का मूल्यांकन करता है?",
          "answer": "यह बीएमआई, कमर की माप और उम्र का संयोजन करके मानक संदर्भ, मध्यम सीमा और उच्च जोखिम सीमा दिखाता है।"
        },
        {
          "question": "एशियाई लोगों के लिए मधुमेह जोखिम कटऑफ कम क्यों है?",
          "answer": "एशियाई आबादी में कम बीएमआई पर भी पेट की वसा अधिक होने के कारण एडा (ADA) और डब्ल्यूएचओ कम कटऑफ की सिफारिश करते हैं।"
        },
        {
          "question": "क्या यह कैलकुलेटर कोई मेडिकल डायग्नोसिस प्रदान करता है?",
          "answer": "नहीं, यह एक शैक्षणिक स्क्रीनिंग टूल है। किसी भी स्वास्थ्य जांच के लिए चिकित्सक से परामर्श लें।"
        }
      ]
    }
  },
  "asian-bmi-calculator": {
    "en": {
      "eyebrow": "WHO Asia-Pacific Guidelines",
      "title": "Asian BMI Calculator – WHO Asian Cutoff Reference Standards",
      "intro": "Free online Asian BMI Calculator designed specifically for individuals of Asian descent based on official WHO Expert Consultation reference standards. The World Health Organization established lower BMI cutoffs for Asian populations (Overweight at 23.0 kg/m², Obese at 27.5 kg/m²) because Asians experience higher body fat percentages and metabolic health risks at lower BMI values than Western populations.",
      "formulaTitle": "WHO Asian BMI Formula (kg & cm / lbs & in)",
      "formulaDesc": "Metric: BMI = Weight (kg) / [Height (m)]² | Asian Overweight Cutoff: BMI ≥ 23.0 kg/m² | Asian Obese Cutoff: BMI ≥ 27.5 kg/m²",
      "formulaCode": "Asian BMI = kg / m²",
      "tableTitle": "WHO Asia-Pacific Adult BMI Scale & Classification Matrix",
      "tableRows": [
        {
          "col1": "Underweight",
          "col2": "< 18.5 kg/m²",
          "col3": "Underweight reference threshold"
        },
        {
          "col1": "Normal Healthy Weight (Asian)",
          "col2": "18.5 – 22.9 kg/m²",
          "col3": "Healthy weight window for Asian men & women"
        },
        {
          "col1": "Overweight / Increased Risk",
          "col2": "23.0 – 27.4 kg/m²",
          "col3": "Action threshold for Asian population screening"
        },
        {
          "col1": "Obese (High Risk)",
          "col2": "≥ 27.5 kg/m²",
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
          "answer": "For Asian adults, a normal healthy BMI ranges from 18.5 to 22.9 kg/m²."
        },
        {
          "question": "What BMI is considered overweight for Asians?",
          "answer": "Under WHO Asia-Pacific criteria, a BMI of 23.0 kg/m² or higher is considered overweight."
        }
      ]
    },
    "es": {
      "eyebrow": "Estándares de Referencia de Salud",
      "title": "Asian BMI Calculator – WHO Asian Cutoff Reference Standards – Guía y Calculadora",
      "intro": "Herramienta de cálculo y referencia educativa diseñada según los estándares de salud publicados de la OMS y CDC. Calcula tus métricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "Fórmula de Referencia Estándar",
      "formulaDesc": "Calculado utilizando ecuaciones estándar validadas.",
      "formulaCode": "Asian BMI = kg / m²",
      "tableTitle": "Tabla de Referencia Estándar",
      "tableRows": [
        {
          "col1": "Categoría / Nivel 1",
          "col2": "< 18.5 kg/m²",
          "col3": "Rango de referencia Underweight reference threshold"
        },
        {
          "col1": "Categoría / Nivel 2",
          "col2": "18.5 – 22.9 kg/m²",
          "col3": "Rango de referencia Healthy weight window for Asian men & women"
        },
        {
          "col1": "Categoría / Nivel 3",
          "col2": "23.0 – 27.4 kg/m²",
          "col3": "Rango de referencia Action threshold for Asian population screening"
        },
        {
          "col1": "Categoría / Nivel 4",
          "col2": "≥ 27.5 kg/m²",
          "col3": "Rango de referencia High risk Obesidad Claseification for Asian adults"
        }
      ],
      "faqs": [
        {
          "question": "¿Cómo funciona la calculadora de asian bmi calculator y qué mide?",
          "answer": "Esta calculadora evalúa tus datos personales utilizando ecuaciones validadas. Proporciona una estimación educativa para ayudarte a comprender tu estado de salud y referencias estándar."
        }
      ,
        {
          "question": "¿Qué es a normal BMI for Asian adults?",
          "answer": "For Asian adults, a normal healthy BMI ranges from 18.5 to 22.9 kg/m²."
        },
        {
          "question": "What BMI is considered overweight for Asians?",
          "answer": "Under WHO Asia-Pacific criteria, a BMI of 23.0 kg/m² or higher is considered overweight."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de Référence de Santé",
      "title": "Asian BMI Calculator – WHO Asian Cutoff Reference Standards – Outil de Référence",
      "intro": "Outil de calcul et de référence éducatif conçu selon les normes de santé publiées de l'OMS et du CDC. Calculez vos métriques et consultez les plages de référence.",
      "formulaTitle": "Formule de Référence Standard",
      "formulaDesc": "Calculé à l'aide d'équations standards validées.",
      "formulaCode": "Asian BMI = kg / m²",
      "tableTitle": "Tableau de Référence Standard",
      "tableRows": [
        {
          "col1": "Catégorie / Niveau 1",
          "col2": "< 18.5 kg/m²",
          "col3": "Plage de référence Underweight reference threshold"
        },
        {
          "col1": "Catégorie / Niveau 2",
          "col2": "18.5 – 22.9 kg/m²",
          "col3": "Plage de référence Healthy weight window for Asian men & women"
        },
        {
          "col1": "Catégorie / Niveau 3",
          "col2": "23.0 – 27.4 kg/m²",
          "col3": "Plage de référence Action threshold for Asian population screening"
        },
        {
          "col1": "Catégorie / Niveau 4",
          "col2": "≥ 27.5 kg/m²",
          "col3": "Plage de référence High risk Obésité Classeification for Asian adults"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de asian bmi calculator et que mesure-t-il ?",
          "answer": "Ce calculateur évalue vos données personnelles à l'aide d'équations validées. Il fournit une estimation éducative pour vous aider à comprendre vos métriques et références standards."
        }
      ,
        {
          "question": "Qu'est-ce que a normal BMI for Asian adults?",
          "answer": "For Asian adults, a normal healthy BMI ranges from 18.5 to 22.9 kg/m²."
        },
        {
          "question": "What BMI is considered overweight for Asians?",
          "answer": "Under WHO Asia-Pacific criteria, a BMI of 23.0 kg/m² or higher is considered overweight."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "Asian BMI Calculator – WHO Asian Cutoff Reference Standards – Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den veröffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und prüfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardmäßig validierten Gleichungen.",
      "formulaCode": "Asian BMI = kg / m²",
      "tableTitle": "Standard-Referenztabelle",
      "tableRows": [
        {
          "col1": "Kategorie / Stufe 1",
          "col2": "< 18.5 kg/m²",
          "col3": "Referenzbereich Underweight reference threshold"
        },
        {
          "col1": "Kategorie / Stufe 2",
          "col2": "18.5 – 22.9 kg/m²",
          "col3": "Referenzbereich Healthy weight window for Asian men & women"
        },
        {
          "col1": "Kategorie / Stufe 3",
          "col2": "23.0 – 27.4 kg/m²",
          "col3": "Referenzbereich Action threshold for Asian population screening"
        },
        {
          "col1": "Kategorie / Stufe 4",
          "col2": "≥ 27.5 kg/m²",
          "col3": "Referenzbereich High risk Adipositas Klasseification for Asian adults"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der asian bmi calculator-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre persönlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        }
      ,
        {
          "question": "Was ist a normal BMI for Asian adults?",
          "answer": "For Asian adults, a normal healthy BMI ranges from 18.5 to 22.9 kg/m²."
        },
        {
          "question": "What BMI is considered overweight for Asians?",
          "answer": "Under WHO Asia-Pacific criteria, a BMI of 23.0 kg/m² or higher is considered overweight."
        }
      ]
    },
    "ko": {
      "eyebrow": "건강 참조 표준 지침",
      "title": "Asian BMI 계산기 – WHO Asian Cutoff Reference Standards – 참조 계산기",
      "intro": "WHO 및 CDC 지침에 기반한 실시간 참고 계산기입니다. 개인별 수치를 측정하고 성인 표준 참조 범위를 확인하세요.",
      "formulaTitle": "표준 계산 공식",
      "formulaDesc": "검증된 표준 공식을 사용하여 계산됩니다.",
      "formulaCode": "Asian BMI = kg / m²",
      "tableTitle": "표준 참조 진단표",
      "tableRows": [
        {
          "col1": "범주 / 단계 1",
          "col2": "< 18.5 kg/m²",
          "col3": "참조 범위 Underweight reference threshold"
        },
        {
          "col1": "범주 / 단계 2",
          "col2": "18.5 – 22.9 kg/m²",
          "col3": "참조 범위 Healthy weight window for Asian men & women"
        },
        {
          "col1": "범주 / 단계 3",
          "col2": "23.0 – 27.4 kg/m²",
          "col3": "참조 범위 Action threshold for Asian population screening"
        },
        {
          "col1": "범주 / 단계 4",
          "col2": "≥ 27.5 kg/m²",
          "col3": "참조 범위 High risk 비만 단계ification for Asian adults"
        }
      ],
      "faqs": [
        {
          "question": "asian bmi calculator 계산기의 원리와 측정 항목은 무엇인가요?",
          "answer": "본 계산기는 검증된 공식을 사용하여 개인별 신체 지수를 산출합니다. 성인 표준 참조 범위를 바탕으로 교육적 분석 결과를 제공합니다."
        }
      ,
        {
          "question": " a normal BMI for Asian adults? 안내 및 원리",
          "answer": "For Asian adults, a normal healthy BMI ranges from 18.5 to 22.9 kg/m²."
        },
        {
          "question": "What BMI is considered overweight for Asians? 안내 및 원리",
          "answer": "Under WHO Asia-Pacific criteria, a BMI of 23.0 kg/m² or higher is considered overweight."
        }
      ]
    },
    "hi": {
      "eyebrow": "डब्ल्यूएचओ एशिया-पैसिफिक मानक",
      "title": "एशियाई बीएमआई कैलकुलेटर (Asian BMI कैलकुलेटर)",
      "intro": "WHO विशेषज्ञ परामर्श मानकों पर आधारित एशियाई बीएमआई कैलकुलेटर। एशियाई आबादी में कम बीएमआई (23.0 kg/m²) पर भी अधिक वसा और स्वास्थ्य जोखिम का मूल्यांकन करें।",
      "formulaTitle": "डब्ल्यूएचओ एशियाई बीएमआई सूत्र",
      "formulaDesc": "बीएमआई = वजन (किग्रा) / [ऊंचाई (मीटर)]² | एशियाई ओवरवेट कटऑफ: 23.0 kg/m²",
      "formulaCode": "Asian BMI = kg / m²",
      "tableTitle": "डब्ल्यूएचओ एशियाई वयस्क बीएमआई वर्गीकरण तालिका",
      "tableRows": [
        {
          "col1": "कम वजन (Underweight)",
          "col2": "< 18.5 kg/m²",
          "col3": "कम वजन सीमा"
        },
        {
          "col1": "सामान्य स्वस्थ वजन (Normal)",
          "col2": "18.5 – 22.9 kg/m²",
          "col3": "एशियाई पुरुषों और महिलाओं के लिए स्वस्थ सीमा"
        },
        {
          "col1": "अधिक वजन (Overweight)",
          "col2": "23.0 – 27.4 kg/m²",
          "col3": "एशियाई जोखिम सीमा"
        },
        {
          "col1": "मोटापा (Obese)",
          "col2": "≥ 27.5 kg/m²",
          "col3": "उच्च जोखिम बीएमआई सीमा"
        }
      ],
      "faqs": [
        {
          "question": "एशियाई बीएमआई कैलकुलेटर (Asian BMI) की आवश्यकता क्यों है?",
          "answer": "एशियाई आबादी में कम वजन पर भी हृदय और चयापचय संबंधी जोखिम अधिक देखे गए हैं, इसलिए डब्ल्यूएचओ ने विशेष कटऑफ तय किए हैं।"
        },
        {
          "question": "एशियाई बीएमआई की श्रेणियां क्या हैं?",
          "answer": "कम वजन (<18.5), स्वस्थ (18.5-22.9), अधिक वजन (23.0-27.4), और मोटापा (≥27.5 kg/m²)।"
        },
        {
          "question": "23.0 kg/m² का एक्शन कटऑफ क्या है?",
          "answer": "यह वह सीमा है जहाँ से एशियाई आबादी में चयापचय संबंधी जोखिमों की निगरानी और जीवनशैली में सुधार की सिफारिश की जाती है।"
        },
        {
          "question": "क्या एशियाई बीएमआई पुरुषों और महिलाओं पर समान लागू होता है?",
          "answer": "हाँ, डब्ल्यूएचओ एशिया-प्रशांत दिशानिर्देश दोनों लिंगों के लिए 23.0 kg/m² की समान कटऑफ सीमा का उपयोग करते हैं।"
        },
        {
          "question": "एशियाई बीएमआई को बेहतर बनाने के लिए क्या कदम उठाएं?",
          "answer": "कमर के आकार को नियंत्रित करना, सक्रिय जीवनशैली अपनाना और प्रसंस्कृत भोजन कम करना सहायक है।"
        }
      ]
    }
  },
  "bmr-calculator": {
    "en": {
      "eyebrow": "Mifflin-St Jeor Equation Standard",
      "title": "BMR Calculator Online – Basal Metabolic Rate Calculator for Men & Women",
      "intro": "Calculate your daily Basal Metabolic Rate (BMR) with our free BMR Calculator online. Using the scientifically recognized Mifflin-St Jeor formula calculator equation, calculate how many resting calories your body burns in 24 hours based on age, gender (men and women), height in cm or inches, and weight in kg or lbs.",
      "formulaTitle": "Mifflin-St Jeor BMR Calculator Formula Equations",
      "formulaDesc": "BMR for Men: (10 × weight in kg) + (6.25 × height in cm) - (5 × age in yrs) + 5  |  BMR for Women: (10 × weight in kg) + (6.25 × height in cm) - (5 × age in yrs) - 161",
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
          "answer": "The Mifflin-St Jeor equation calculates BMR as follows: For Men: BMR = (10 × kg) + (6.25 × cm) - (5 × age) + 5. For Women: BMR = (10 × kg) + (6.25 × cm) - (5 × age) - 161."
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
      "eyebrow": "Ecuación Estándar de Mifflin-St Jeor",
      "title": "Calculadora de BMR – Tasa Metabólica Basal en Línea",
      "intro": "Calcula tu Tasa Metabólica Basal (BMR) diaria con nuestra calculadora gratuita. Utiliza la fórmula de Mifflin-St Jeor para estimar las calorías quemadas en reposo en 24 horas.",
      "formulaTitle": "Fórmula de BMR de Mifflin-St Jeor para Hombres y Mujeres",
      "formulaDesc": "Hombres: (10 × peso kg) + (6.25 × altura cm) - (5 × edad) + 5 | Mujeres: (10 × peso kg) + (6.25 × altura cm) - (5 × edad) - 161",
      "formulaCode": "Hombres: BMR = 10W + 6.25H - 5A + 5 | Mujeres: BMR = 10W + 6.25H - 5A - 161",
      "tableTitle": "Matriz de Comparación de Fórmulas de BMR",
      "tableRows": [
        {
          "col1": "Fórmula Mifflin-St Jeor",
          "col2": "Ecuación Predictiva (1990)",
          "col3": "Estándar recomendado para estimación de BMR"
        },
        {
          "col1": "Harris-Benedict Revisada",
          "col2": "Referencia Histórica (1984)",
          "col3": "Referencia histórica para BMR"
        },
        {
          "col1": "Fórmula Katch-McArdle",
          "col2": "Fórmula basada en la masa corporal magra",
          "col3": "Calcula la tasa metabólica basal utilizando la masa corporal magra (LBM)"
        }
      ],
      "faqs": [
        {
          "question": "¿Qué es la Tasa Metabólica Basal (BMR) y cómo se calcula?",
          "answer": "La BMR es la cantidad de calorías que tu cuerpo quema en reposo absoluto durante 24 horas para mantener funciones vitales."
        },
        {
          "question": "¿Cuál es la fórmula de Mifflin-St Jeor para hombres y mujeres?",
          "answer": "Hombres: (10×kg) + (6.25×cm) - (5×edad) + 5. Mujeres: (10×kg) + (6.25×cm) - (5×edad) - 161."
        },
        {
          "question": "¿Cómo afecta la edad al cálculo del BMR?",
          "answer": "El BMR disminuye gradualmente con la edad debido a la pérdida natural de masa muscular."
        },
        {
          "question": "¿Cuál es la diferencia entre BMR y TDEE?",
          "answer": "El BMR es el gasto en reposo (0% actividad). El TDEE es el gasto calórico total diario incluyendo ejercicio y movimiento."
        },
        {
          "question": "¿Cómo funciona la calculadora de bmr calculator y qué mide?",
          "answer": "Esta calculadora evalúa tus datos personales utilizando ecuaciones validadas. Proporciona una estimación educativa para ayudarte a comprender tu estado de salud y referencias estándar."
        }
      ]
    },
    "fr": {
      "eyebrow": "Équation Référence de Mifflin-St Jeor",
      "title": "Calculateur de BMR – Métabolisme de Base en Ligne",
      "intro": "Calculez votre taux métabolique de base (BMR) quotidien avec notre calculateur gratuit. Basé sur la formule reconnue de Mifflin-St Jeor.",
      "formulaTitle": "Formule de BMR Mifflin-St Jeor Hommes et Femmes",
      "formulaDesc": "Hommes : (10 × poids kg) + (6.25 × taille cm) - (5 × âge) + 5 | Femmes : (10 × poids kg) + (6.25 × taille cm) - (5 × âge) - 161",
      "formulaCode": "Hommes : BMR = 10W + 6.25H - 5A + 5 | Femmes : BMR = 10W + 6.25H - 5A - 161",
      "tableTitle": "Comparatif des Formules de BMR",
      "tableRows": [
        {
          "col1": "Formule Mifflin-St Jeor",
          "col2": "Équation Prédictive (1990)",
          "col3": "Standard recommandé pour l'estimation du BMR"
        },
        {
          "col1": "Harris-Benedict Révisée",
          "col2": "Référence Historique (1984)",
          "col3": "Équation historique de référence"
        },
        {
          "col1": "Formule Katch-McArdle",
          "col2": "Basée sur la Masse Corporelle Maigre",
          "col3": "Calcule l'estimation du BMR à l'aide de la masse corporelle maigre (LBM)"
        }
      ],
      "faqs": [
        {
          "question": "Qu'est-ce que le BMR et comment est-il calculé ?",
          "answer": "Le BMR (métabolisme de base) est le nombre de calories brûlées au repos pendant 24h pour maintenir les fonctions vitales."
        },
        {
          "question": "Quelle est la formule de Mifflin-St Jeor pour hommes et femmes ?",
          "answer": "Hommes : (10×kg) + (6,25×cm) - (5×âge) + 5. Femmes : (10×kg) + (6,25×cm) - (5×âge) - 161."
        },
        {
          "question": "Quelle est la différence entre le BMR et le TDEE ?",
          "answer": "Le BMR représente la dépense au repos complet. Le TDEE inclut l'activité physique et l'exercice quotidien."
        },
        {
          "question": "Comment fonctionne le calculateur de bmr calculator et que mesure-t-il ?",
          "answer": "Ce calculateur évalue vos données personnelles à l'aide d'équations validées. Il fournit une estimation éducative pour vous aider à comprendre vos métriques et références standards."
        }
      ,
        {
          "question": "Quelle est la différence entre la formule Mifflin-St Jeor et Katch-McArdle ?",
          "answer": "Mifflin-St Jeor estime le BMR à partir du poids total, de la taille et de l'âge. Katch-McArdle utilise la masse corporelle maigre (LBM), ce qui convient particulièrement aux athlètes."
        }
      ]
    },
    "de": {
      "eyebrow": "Mifflin-St Jeor Referenzformel",
      "title": "BMR Rechner Online – Grundumsatz Berechnen für Männer & Frauen",
      "intro": "Berechnen Sie Ihren täglichen Grundumsatz (BMR) mit unserem kostenlosen BMR-Rechner online nach der wissenschaftlich anerkannten Mifflin-St Jeor Formel.",
      "formulaTitle": "Mifflin-St Jeor BMR-Formel für Männer und Frauen",
      "formulaDesc": "Männer: (10 × Gewicht kg) + (6.25 × Größe cm) - (5 × Alter) + 5 | Frauen: (10 × Gewicht kg) + (6.25 × Größe cm) - (5 × Alter) - 161",
      "formulaCode": "Männer: BMR = 10W + 6.25H - 5A + 5 | Frauen: BMR = 10W + 6.25H - 5A - 161",
      "tableTitle": "BMR Formel-Vergleichsmatrix",
      "tableRows": [
        {
          "col1": "Mifflin-St Jeor Formel",
          "col2": "Prädiktive Gleichung (1990)",
          "col3": "Standard-Referenz für die BMR-Berechnung"
        },
        {
          "col1": "Revidierte Harris-Benedict",
          "col2": "Historischer Standard (1984)",
          "col3": "Historische Vergleichsformel"
        },
        {
          "col1": "Katch-McArdle Formel",
          "col2": "Basierend auf Magerer Körpermasse",
          "col3": "Berechnet die BMR-Schätzung anhand der mageren Körpermasse (LBM)"
        }
      ],
      "faqs": [
        {
          "question": "Was ist der BMR (Grundumsatz) und wie wird er berechnet?",
          "answer": "Der BMR ist die Kalorienmenge, die der Körper in 24 Stunden in absoluter Ruhe zur Aufrechterhaltung der Lebensfunktionen verbrennt."
        },
        {
          "question": "Was ist die Mifflin-St Jeor Formel für Männer und Frauen?",
          "answer": "Männer: (10×kg) + (6,25×cm) - (5×Alter) + 5. Frauen: (10×kg) + (6,25×cm) - (5×Alter) - 161."
        },
        {
          "question": "Was ist der Unterschied zwischen BMR und TDEE?",
          "answer": "Der BMR misst den Ruheumsatz (0% Aktivität). Der TDEE berechnet den Gesamtkalorienbedarf inklusive Bewegung und Sport."
        },
        {
          "question": "Wie funktioniert der bmr calculator-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre persönlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        }
      ,
        {
          "question": "Was ist der Unterschied zwischen der Mifflin-St Jeor und Katch-McArdle Formel?",
          "answer": "Mifflin-St Jeor berechnet den Grundumsatz aus Gesamtgewicht, Körpergröße und Alter. Katch-McArdle berücksichtigt die magere Körpermasse (LBM), was für sehr muskulöse Menschen präziser ist."
        }
      ]
    },
    "ko": {
      "eyebrow": "Mifflin-St Jeor 표준 공식",
      "title": "BMR 계산기 온라인 – 기초대사량 계산기",
      "intro": "무료 온라인 BMR 계산기로 일일 기초대사량(BMR)을 계산하세요. Mifflin-St Jeor 공식을 사용하여 24시간 동안 휴식 시 소비되는 칼로리를 추정합니다.",
      "formulaTitle": "남성 및 여성 Mifflin-St Jeor BMR 공식",
      "formulaDesc": "남성: (10 × 체중 kg) + (6.25 × 신장 cm) - (5 × 연령) + 5 | 여성: (10 × 체중 kg) + (6.25 × 신장 cm) - (5 × 연령) - 161",
      "formulaCode": "남성: BMR = 10W + 6.25H - 5A + 5 | 여성: BMR = 10W + 6.25H - 5A - 161",
      "tableTitle": "BMR 공식 비교표",
      "tableRows": [
        {
          "col1": "Mifflin-St Jeor 공식",
          "col2": "예측 방정식 (1990)",
          "col3": "성인 BMR 추정에 널리 사용되는 공식"
        },
        {
          "col1": "수정된 Harris-Benedict",
          "col2": "역사적 표준 (1984)",
          "col3": "기초대사량 참조 공식"
        },
        {
          "col1": "Katch-McArdle 공식",
          "col2": "제지방량(LBM) 기반",
          "col3": "제지방량(LBM)을 바탕으로 기초대사량을 산출합니다"
        }
      ],
      "faqs": [
        {
          "question": "BMR(기초대사량)이란 무엇이며 어떻게 계산하나요?",
          "answer": "BMR은 신체가 휴식 상태에서 장기 기능을 유지하기 위해 24시간 동안 소비하는 최소한의 에너지입니다."
        },
        {
          "question": "BMR과 TDEE의 차이점은 무엇인가요?",
          "answer": "BMR은 0% 활동 시의 휴식 대사량이며, TDEE는 일상 활동과 운동을 포함한 총 일일 에너지 소비량입니다."
        },
        {
          "question": "bmr calculator 계산기의 원리와 측정 항목은 무엇인가요?",
          "answer": "본 계산기는 검증된 공식을 사용하여 개인별 신체 지수를 산출합니다. 성인 표준 참조 범위를 바탕으로 교육적 분석 결과를 제공합니다."
        }
      ,
        {
          "question": "온라인으로 신장(cm)과 체중(kg)을 통해 BMR을 계산하는 방법은?",
          "answer": "온라인 BMR 계산기에 신장(cm), 체중(kg), 연령, 성별을 입력하면 미플린-스토어 공식을 통해 즉시 기초대사량이 산출됩니다."
        },
        {
          "question": "Mifflin-St Jeor 공식과 Katch-McArdle 공식의 차이는 무엇인가요?",
          "answer": "미플린-스토어 공식은 전체 체중과 신장을 바탕으로 산출하며, 캐치-맥아들 공식은 제지방량(LBM)을 기반으로 계산하여 근육량이 많은 운동선수에게 적합합니다."
        }
      ]
    },
    "hi": {
      "eyebrow": "Mifflin-St Jeor समीकरण मानक",
      "title": "बीएमआर कैलकुलेटर ऑनलाइन - बेसल मेटाबॉलिक रेट (BMR कैलकुलेटर kg cm)",
      "intro": "हमारे मुफ़्त बीएमआर कैलकुलेटर ऑनलाइन से अपनी दैनिक बेसल मेटाबॉलिक रेट का अनुमान लगाएं।",
      "formulaTitle": "पुरुषों एवं महिलाओं के लिए बीएमआर फॉर्मूला",
      "formulaDesc": "पुरुषों के लिए: बीएमआर = (10 × वजन kg) + (6.25 × ऊंचाई cm) - (5 × आयु) + 5  |  महिलाओं के लिए: बीएमआर = (10 × वजन kg) + (6.25 × ऊंचाई cm) - (5 × आयु) - 161",
      "formulaCode": "पुरुष: BMR = 10W + 6.25H - 5A + 5  |  महिलाएँ: BMR = 10W + 6.25H - 5A - 161",
      "tableTitle": "बीएमआर फॉर्मूला तुलना (Mifflin-St Jeor बनाम Harris-Benedict)",
      "tableRows": [
        {
          "col1": "Mifflin-St Jeor फॉर्मूला",
          "col2": "अनुमानित सूत्र (1990)",
          "col3": "वयस्कों के लिए बीएमआर अनुमान सूत्र"
        },
        {
          "col1": "Harris-Benedict फॉर्मूला",
          "col2": "ऐतिहासिक मानक (1984)",
          "col3": "ऐतिहासिक बीएमआर संदर्भ सूत्र"
        },
        {
          "col1": "कैच-मैकआर्डल फॉर्मूला",
          "col2": "लीन बॉडी मास पर आधारित",
          "col3": "लीन बॉडी मास (LBM) का उपयोग करके बीएमआर का अनुमान लगाता है"
        }
      ],
      "faqs": [
        {
          "question": "बेसल मेटाबॉलिक रेट (BMR) क्या है?",
          "answer": "BMR वह न्यूनतम कैलोरी है जो आपका शरीर पूर्ण आराम की स्थिति में जीवन रक्षा संबंधी बुनियादी कार्यों के लिए बर्न करता है।"
        },
        {
          "question": "BMR और TDEE में क्या अंतर है?",
          "answer": "BMR केवल आराम की कैलोरी दिखाता है, जबकि TDEE में शारीरिक गतिविधियों और व्यायाम से बर्न होने वाली कैलोरी भी शामिल होती है।"
        },
        {
          "question": "मिफ्लिन-स्टे जियोर सूत्र क्या है?",
          "answer": "यह BMR गणना का सबसे सटीक सूत्र है, जो वजन, ऊंचाई, उम्र और लिंग के आधार पर कैलोरी बर्न का अनुमान लगाता है।"
        },
        {
          "question": "मांसपेशियों का BMR पर क्या प्रभाव पड़ता है?",
          "answer": "मांसपेशियों के ऊतक आराम के समय वसा की तुलना में अधिक कैलोरी बर्न करते हैं, जिससे आपका BMR बढ़ता है।"
        },
        {
          "question": "क्या BMR से कम कैलोरी खानी चाहिए?",
          "answer": "बिना डॉक्टरी सलाह के BMR से कम कैलोरी का सेवन नहीं करना चाहिए, क्योंकि यह ऊर्जा अंगों के लिए आवश्यक है।"
        }
      ]
    }
  },
  "tdee-calculator": {
    "en": {
      "eyebrow": "Energy Balance & Metabolism",
      "title": "TDEE Calculator Online – Total Daily Energy Expenditure Calculator",
      "intro": "Our free TDEE Calculator (Total Daily Energy Expenditure Calculator) estimates your daily energy expenditure based on age, sex, weight (kg or lbs), height (cm or inches), and physical activity multiplier (PAL). Explore your estimated maintenance calories and example weight planning ranges.",
      "formulaTitle": "TDEE Calculation Formula (Mifflin-St Jeor Predictive Equation & PAL Multiplier)",
      "formulaDesc": "Step 1: Estimate BMR (Mifflin-St Jeor): Men: (10 × W) + (6.25 × H) - (5 × A) + 5 | Women: (10 × W) + (6.25 × H) - (5 × A) - 161. Step 2: Multiply BMR by Physical Activity Level (PAL): Sedentary (1.2), Light (1.375), Moderate (1.55), Heavy (1.725).",
      "formulaCode": "TDEE = BMR × Activity Factor",
      "tableTitle": "TDEE Activity Multipliers & Daily Calorie Breakdown Table",
      "tableRows": [
        {
          "col1": "Sedentary (PAL 1.2)",
          "col2": "BMR × 1.2",
          "col3": "Desk job, little or no structured exercise"
        },
        {
          "col1": "Lightly Active (PAL 1.375)",
          "col2": "BMR × 1.375",
          "col3": "Light exercise or sport 1–3 days per week"
        },
        {
          "col1": "Moderately Active (PAL 1.55)",
          "col2": "BMR × 1.55",
          "col3": "Moderate exercise or sports 3–5 days per week"
        },
        {
          "col1": "Very Active (PAL 1.725)",
          "col2": "BMR × 1.725",
          "col3": "Hard exercise or physical labor 6–7 days per week"
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
      "eyebrow": "Balance Energético y Metabolismo",
      "title": "Calculadora de TDEE – Gasto Energético Diario Total",
      "intro": "Calcula tu Gasto Energético Diario Total (TDEE) y tus calorías de mantenimiento con nuestra calculadora gratuita según tu edad, peso, altura y nivel de actividad física.",
      "formulaTitle": "Fórmula del TDEE (Ecuación de Mifflin-St Jeor y Factor PAL)",
      "formulaDesc": "Paso 1: Calcular BMR (Mifflin-St Jeor). Paso 2: Multiplicar BMR por el factor de actividad física: Sedentario (1.2), Ligero (1.375), Moderado (1.55), Intenso (1.725).",
      "formulaCode": "TDEE = BMR × Factor de Actividad",
      "tableTitle": "Factores de Actividad del TDEE y Desglose Calórico",
      "tableRows": [
        {
          "col1": "Sedentario (PAL 1.2)",
          "col2": "BMR × 1.2",
          "col3": "Trabajo de escritorio, poco o ningún ejercicio"
        },
        {
          "col1": "Ligeramente Activo (PAL 1.375)",
          "col2": "BMR × 1.375",
          "col3": "Ejercicio ligero 1–3 días a la semana"
        },
        {
          "col1": "Moderadamente Activo (PAL 1.55)",
          "col2": "BMR × 1.55",
          "col3": "Ejercicio moderado 3–5 días a la semana"
        },
        {
          "col1": "Muy Activo (PAL 1.725)",
          "col2": "BMR × 1.725",
          "col3": "Ejercicio intenso 6–7 días a la semana"
        },
        {
          "col1": "Ejemplo de Déficit Calórico",
          "col2": "TDEE menos un déficit elegido",
          "col3": "Referencia de ejemplo para planificación de peso"
        }
      ],
      "faqs": [
        {
          "question": "¿Qué es el TDEE y cómo calcula las calorías de mantenimiento?",
          "answer": "El TDEE (Gasto Energético Diario Total) estima el total de calorías que quemas en 24 horas incluyendo el metabolismo en reposo, el efecto térmico de los alimentos y la actividad física."
        },
        {
          "question": "¿Cómo calcular el TDEE para perder peso?",
          "answer": "Introduce tu edad, sexo, peso y altura. Al restar un déficit calórico moderado de tu TDEE estimado obtendrás una guía calórica para la pérdida de peso."
        },
        {
          "question": "¿Cuál es la diferencia entre BMR y TDEE?",
          "answer": "El BMR es el gasto energético en reposo. El TDEE engloba el BMR más la energía quemada durante el movimiento diario y el ejercicio."
        },
        {
          "question": "¿Cómo funciona la calculadora de tdee calculator y qué mide?",
          "answer": "Esta calculadora evalúa tus datos personales utilizando ecuaciones validadas. Proporciona una estimación educativa para ayudarte a comprender tu estado de salud y referencias estándar."
        }
      ,
        {
          "question": "How often should I recalculate my maintenance calories and TDEE?",
          "answer": "Consider recalculating when your body weight or physical activity level changes significantly, as body mass changes alter daily energy maintenance estimates."
        }
      ]
    },
    "fr": {
      "eyebrow": "Équilibre Énergétique et Métabolisme",
      "title": "Calculateur de TDEE – Dépense Énergétique Quotidienne Totale",
      "intro": "Calculez votre dépense énergétique quotidienne totale (TDEE) et vos calories de maintien avec notre calculateur gratuit selon votre âge, poids, taille et niveau d'activité.",
      "formulaTitle": "Formule de Calcul du TDEE (Mifflin-St Jeor et Facteur PAL)",
      "formulaDesc": "Étape 1 : Calcul du BMR. Étape 2 : Multiplier par le facteur d'activité : Sédentaire (1.2), Légèrement actif (1.375), Modérément actif (1.55), Très actif (1.725).",
      "formulaCode": "TDEE = BMR × Facteur d'Activité",
      "tableTitle": "Facteurs d'Activité TDEE et Répartition Calorique",
      "tableRows": [
        {
          "col1": "Sédentaire (PAL 1.2)",
          "col2": "BMR × 1.2",
          "col3": "Travail de bureau, peu ou pas d'exercice"
        },
        {
          "col1": "Légèrement Actif (PAL 1.375)",
          "col2": "BMR × 1.375",
          "col3": "Exercice léger 1–3 jours par semaine"
        },
        {
          "col1": "Modérément Actif (PAL 1.55)",
          "col2": "BMR × 1.55",
          "col3": "Exercice modéré 3–5 jours par semaine"
        },
        {
          "col1": "Très Actif (PAL 1.725)",
          "col2": "BMR × 1.725",
          "col3": "Exercice intense 6–7 jours par semaine"
        },
        {
          "col1": "Catégorie / Niveau 5",
          "col2": "TDEE minus a chosen deficit",
          "col3": "Plage de référence Example reference for weight-management planning"
        }
      ],
      "faqs": [
        {
          "question": "Qu'est-ce que le TDEE et comment calcule-t-il les calories de maintien ?",
          "answer": "Le TDEE (Dépense Énergétique Quotidienne Totale) estime le total des calories brûlées par jour, incluant le métabolisme de base et l'exercice physique."
        },
        {
          "question": "Quelle est la différence entre le BMR et le TDEE ?",
          "answer": "Le BMR représente le métabolisme au repos. Le TDEE englobe le BMR ainsi que toutes les dépenses liées aux activités et à l'exercice."
        },
        {
          "question": "Comment fonctionne le calculateur de tdee calculator et que mesure-t-il ?",
          "answer": "Ce calculateur évalue vos données personnelles à l'aide d'équations validées. Il fournit une estimation éducative pour vous aider à comprendre vos métriques et références standards."
        }
      ,
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
      "title": "TDEE Rechner Online – Gesamtenergieumsatz & Erhaltungskalorien",
      "intro": "Berechnen Sie Ihren Gesamtenergieumsatz (TDEE) und Ihre Erhaltungskalorien mit unserem kostenlosen Rechner basierend auf Alter, Gewicht, Größe und Aktivitätslevel.",
      "formulaTitle": "TDEE Berechnungsformel (Mifflin-St Jeor & Aktivitätsfaktor)",
      "formulaDesc": "Schritt 1: BMR berechnen. Schritt 2: BMR mit dem Aktivitätsfaktor multiplizieren: Sitzend (1.2), Leicht aktiv (1.375), Moderat aktiv (1.55), Sehr aktiv (1.725).",
      "formulaCode": "TDEE = BMR × Aktivitätsfaktor",
      "tableTitle": "TDEE Aktivitätsfaktoren & Kalorienübersicht",
      "tableRows": [
        {
          "col1": "Sitzend (PAL 1.2)",
          "col2": "BMR × 1.2",
          "col3": "Bürotätigkeit, kaum oder kein Sport"
        },
        {
          "col1": "Leicht aktiv (PAL 1.375)",
          "col2": "BMR × 1.375",
          "col3": "Leichter Sport 1–3 Tage pro Woche"
        },
        {
          "col1": "Moderat aktiv (PAL 1.55)",
          "col2": "BMR × 1.55",
          "col3": "Moderater Sport 3–5 Tage pro Woche"
        },
        {
          "col1": "Sehr aktiv (PAL 1.725)",
          "col2": "BMR × 1.725",
          "col3": "Intensiver Sport 6–7 Tage pro Woche"
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
          "answer": "Der TDEE (Gesamtenergieumsatz) schätzt die Gesamtzahl der Kalorien, die Ihr Körper in 24 Stunden inklusive Grundumsatz und Bewegung verbrennt."
        },
        {
          "question": "Wie unterscheidet sich der BMR vom TDEE?",
          "answer": "Der BMR ist der reine Ruheumsatz. Der TDEE beinhaltet den BMR plus den Kalorienverbrauch durch alltägliche Bewegung und Sport."
        },
        {
          "question": "Wie funktioniert der tdee calculator-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre persönlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        }
      ,
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
      "eyebrow": "에너지 균형 및 대사량",
      "title": "TDEE 계산기 – 일일 총 에너지 소비량 및 유지 칼로리",
      "intro": "무료 TDEE 계산기로 연령, 성별, 체중, 신장 및 활동 수준을 기반으로 일일 총 에너지 소비량(TDEE)과 유지 칼로리를 추정하세요.",
      "formulaTitle": "TDEE 계산 공식 (Mifflin-St Jeor 및 활동 계수)",
      "formulaDesc": "1단계: BMR 계산. 2단계: 활동 계수 곱하기: 좌식 (1.2), 가벼운 활동 (1.375), 보통 활동 (1.55), 매우 활동적 (1.725).",
      "formulaCode": "TDEE = BMR × 활동 계수",
      "tableTitle": "TDEE 활동 계수 및 일일 칼로리 상세표",
      "tableRows": [
        {
          "col1": "좌식 / 거의 운동 안 함 (PAL 1.2)",
          "col2": "BMR × 1.2",
          "col3": "데스크톱 업무, 운동 거의 없음"
        },
        {
          "col1": "가벼운 활동 (PAL 1.375)",
          "col2": "BMR × 1.375",
          "col3": "주 1~3회 가벼운 운동"
        },
        {
          "col1": "보통 활동 (PAL 1.55)",
          "col2": "BMR × 1.55",
          "col3": "주 3~5회 보통 운동"
        },
        {
          "col1": "매우 활동적 (PAL 1.725)",
          "col2": "BMR × 1.725",
          "col3": "주 6~7회 강한 운동"
        },
        {
          "col1": "범주 / 단계 5",
          "col2": "TDEE minus a chosen deficit",
          "col3": "참조 범위 Example reference for weight-management planning"
        }
      ],
      "faqs": [
        {
          "question": "TDEE 계산기란 무엇이며 유지 칼로리는 어떻게 계산하나요?",
          "answer": "TDEE(일일 총 에너지 소비량)는 기초대사량(BMR)과 일상 활동 및 운동을 포함하여 24시간 동안 소비되는 총 칼로리를 추정합니다."
        },
        {
          "question": "BMR과 TDEE 칼로리의 차이점은 무엇인가요?",
          "answer": "BMR은 완전히 휴식할 때의 대사량이며, TDEE는 BMR에 일상 활동 및 운동으로 소비되는 칼로리를 더한 값입니다."
        },
        {
          "question": "tdee calculator 계산기의 원리와 측정 항목은 무엇인가요?",
          "answer": "본 계산기는 검증된 공식을 사용하여 개인별 신체 지수를 산출합니다. 성인 표준 참조 범위를 바탕으로 교육적 분석 결과를 제공합니다."
        }
      ,
        {
          "question": "How many calories should I eat daily for weight loss using TDEE? 안내 및 원리",
          "answer": "A calorie deficit below estimated TDEE is commonly used for weight-loss planning, but the appropriate amount varies by individual."
        },
        {
          "question": "How often should I recalculate my maintenance calories and TDEE? 안내 및 원리",
          "answer": "Consider recalculating when your body weight or physical activity level changes significantly, as body mass changes alter daily energy maintenance estimates."
        }
      ]
    },
    "hi": {
      "eyebrow": "ऊर्जा संतुलन और चयापचय",
      "title": "टीडीईई कैलकुलेटर ऑनलाइन – कुल दैनिक ऊर्जा व्यय और रखरखाव कैलोरी",
      "intro": "हमारा मुफ़्त TDEE कैलकुलेटर (Total Daily Energy Expenditure) आपकी उम्र, लिंग, वजन (किग्रा या पाउंड), ऊंचाई (सेमी या इंच) और शारीरिक गतिविधि स्तर के आधार पर आपकी दैनिक रखरखाव कैलोरी का अनुमान लगाता है।",
      "formulaTitle": "TDEE गणना सूत्र (मिफ्लिन-सेंट जिओर एवं गतिविधि गुणक)",
      "formulaDesc": "चरण 1: BMR निकालें: पुरुष: (10 × W) + (6.25 × H) - (5 × A) + 5 | महिला: (10 × W) + (6.25 × H) - (5 × A) - 161। चरण 2: BMR को गतिविधि स्तर (1.2 से 1.725) से गुणा करें।",
      "formulaCode": "TDEE = BMR × Activity Factor",
      "tableTitle": "TDEE गतिविधि गुणक एवं दैनिक कैलोरी तालिका",
      "tableRows": [
        {
          "col1": "गतिहीन (PAL 1.2)",
          "col2": "BMR × 1.2",
          "col3": "डेस्क जॉब, बहुत कम या कोई व्यायाम नहीं"
        },
        {
          "col1": "हल्का सक्रिय (PAL 1.375)",
          "col2": "BMR × 1.375",
          "col3": "सप्ताह में 1–3 दिन हल्का व्यायाम"
        },
        {
          "col1": "मध्यम सक्रिय (PAL 1.55)",
          "col2": "BMR × 1.55",
          "col3": "सप्ताह में 3–5 दिन मध्यम व्यायाम"
        },
        {
          "col1": "अत्यधिक सक्रिय (PAL 1.725)",
          "col2": "BMR × 1.725",
          "col3": "सप्ताह में 6–7 दिन कठिन व्यायाम"
        },
        {
          "col1": "उदाहरण कैलोरी घाटा",
          "col2": "TDEE घटाव अनुमानित घाटा",
          "col3": "वजन योजना के लिए उदाहरण संदर्भ"
        }
      ],
      "faqs": [
        {
          "question": "टीडीईई (TDEE) क्या है?",
          "answer": "TDEE (Total Daily Energy Expenditure) वह कुल कैलोरी है जो आप अपने BMR और दैनिक गतिविधियों को मिलाकर 24 घंटे में बर्न करते हैं।"
        },
        {
          "question": "TDEE की गणना कैसे की जाती है?",
          "answer": "TDEE = BMR × गतिविधि गुणांक (Activity Multiplier), जो 1.2 (गतिहीन) से 1.9 (अत्यधिक सक्रिय) तक होता है।"
        },
        {
          "question": "वजन घटाने के लिए TDEE का उपयोग कैसे करें?",
          "answer": "अपने TDEE से 300 से 500 कैलोरी कम (Calorie Deficit) खाने से सुरक्षित रूप से वजन घटाया जा सकता है।"
        },
        {
          "question": "TDEE को कब दोबारा अपडेट करना चाहिए?",
          "answer": "वजन में 3-5 किग्रा का बदलाव होने पर या अपनी वर्कआउट दिनचर्या बदलने पर TDEE की पुनर्गणना करें।"
        },
        {
          "question": "क्या TDEE हर दिन समान रहता है?",
          "answer": "नहीं, आपकी दैनिक गतिविधियों और कसरत के आधार पर वास्तविक कैलोरी बर्न में रोज थोड़ा अंतर हो सकता है।"
        }
      ]
    }
  },
  "maintenance-calorie-calculator": {
    "en": {
      "eyebrow": "Calorie Maintenance & Deficit Planning",
      "title": "Maintenance Calorie Calculator – Calorie Maintenance Calculator Online",
      "intro": "Our free Maintenance Calorie Calculator estimates your daily maintenance calories, total energy expenditure, and target calorie ranges for weight goals. Enter your age, gender, weight in kg, height in cm, and exercise frequency to view baseline maintenance caloric estimates.",
      "formulaTitle": "Maintenance Calorie Math & Energy Balance Standards",
      "formulaDesc": "Maintenance Calories = Basal Metabolic Rate (BMR) × Physical Activity Level (PAL). Energy adjustments can be made based on individual weight goals.",
      "formulaCode": "Maintenance = BMR × PAL",
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
          "col3": "Mathematical example of 250–300 kcal higher daily intake"
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
      "eyebrow": "Estándares de Referencia de Salud",
      "title": "Maintenance Calorie Calculator – Calorie Maintenance Calculator Online – Guía y Calculadora",
      "intro": "Herramienta de cálculo y referencia educativa diseñada según los estándares de salud publicados de la OMS y CDC. Calcula tus métricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "Fórmula de Referencia Estándar",
      "formulaDesc": "Calculado utilizando ecuaciones estándar validadas.",
      "formulaCode": "Maintenance = BMR × PAL",
      "tableTitle": "Tabla de Referencia Estándar",
      "tableRows": [
        {
          "col1": "Categoría / Nivel 1",
          "col2": "100% TDEE (0 kcal net change)",
          "col3": "Rango de referencia Preserves current body weight and energy balance"
        },
        {
          "col1": "Categoría / Nivel 2",
          "col2": "TDEE - 250 kcal/day",
          "col3": "Rango de referencia Mathematical example of 250 kcal lower daily intake"
        },
        {
          "col1": "Categoría / Nivel 3",
          "col2": "TDEE - 500 kcal/day",
          "col3": "Rango de referencia Mathematical example of 500 kcal lower daily intake"
        },
        {
          "col1": "Categoría / Nivel 4",
          "col2": "TDEE - 750 kcal/day",
          "col3": "Rango de referencia Mathematical example of 750 kcal lower daily intake"
        },
        {
          "col1": "Categoría / Nivel 5",
          "col2": "TDEE + 250 to 300 kcal/day",
          "col3": "Rango de referencia Mathematical example of 250–300 kcal higher daily intake"
        }
      ],
      "faqs": [
        {
          "question": "¿Cómo funciona la calculadora de maintenance calorie calculator y qué mide?",
          "answer": "Esta calculadora evalúa tus datos personales utilizando ecuaciones validadas. Proporciona una estimación educativa para ayudarte a comprender tu estado de salud y referencias estándar."
        }
      ,
        {
          "question": "Cómo calculate calorie maintenance by age, height (cm), and weight (kg)?",
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
      "eyebrow": "Normes de Référence de Santé",
      "title": "Maintenance Calorie Calculator – Calorie Maintenance Calculator Online – Outil de Référence",
      "intro": "Outil de calcul et de référence éducatif conçu selon les normes de santé publiées de l'OMS et du CDC. Calculez vos métriques et consultez les plages de référence.",
      "formulaTitle": "Formule de Référence Standard",
      "formulaDesc": "Calculé à l'aide d'équations standards validées.",
      "formulaCode": "Maintenance = BMR × PAL",
      "tableTitle": "Tableau de Référence Standard",
      "tableRows": [
        {
          "col1": "Catégorie / Niveau 1",
          "col2": "100% TDEE (0 kcal net change)",
          "col3": "Plage de référence Preserves current body weight and energy balance"
        },
        {
          "col1": "Catégorie / Niveau 2",
          "col2": "TDEE - 250 kcal/day",
          "col3": "Plage de référence Mathematical example of 250 kcal lower daily intake"
        },
        {
          "col1": "Catégorie / Niveau 3",
          "col2": "TDEE - 500 kcal/day",
          "col3": "Plage de référence Mathematical example of 500 kcal lower daily intake"
        },
        {
          "col1": "Catégorie / Niveau 4",
          "col2": "TDEE - 750 kcal/day",
          "col3": "Plage de référence Mathematical example of 750 kcal lower daily intake"
        },
        {
          "col1": "Catégorie / Niveau 5",
          "col2": "TDEE + 250 to 300 kcal/day",
          "col3": "Plage de référence Mathematical example of 250–300 kcal higher daily intake"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de maintenance calorie calculator et que mesure-t-il ?",
          "answer": "Ce calculateur évalue vos données personnelles à l'aide d'équations validées. Il fournit une estimation éducative pour vous aider à comprendre vos métriques et références standards."
        }
      ,
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
      "title": "Maintenance Calorie Calculator – Calorie Maintenance Calculator Online – Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den veröffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und prüfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardmäßig validierten Gleichungen.",
      "formulaCode": "Maintenance = BMR × PAL",
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
          "col3": "Referenzbereich Mathematical example of 250–300 kcal higher daily intake"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der maintenance calorie calculator-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre persönlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        }
      ,
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
      "eyebrow": "건강 참조 표준 지침",
      "title": "Maintenance Calorie 계산기 – Calorie Maintenance 계산기 Online – 참조 계산기",
      "intro": "WHO 및 CDC 지침에 기반한 실시간 참고 계산기입니다. 개인별 수치를 측정하고 성인 표준 참조 범위를 확인하세요.",
      "formulaTitle": "표준 계산 공식",
      "formulaDesc": "검증된 표준 공식을 사용하여 계산됩니다.",
      "formulaCode": "Maintenance = BMR × PAL",
      "tableTitle": "표준 참조 진단표",
      "tableRows": [
        {
          "col1": "범주 / 단계 1",
          "col2": "100% TDEE (0 kcal net change)",
          "col3": "참조 범위 Preserves current body weight and energy balance"
        },
        {
          "col1": "범주 / 단계 2",
          "col2": "TDEE - 250 kcal/day",
          "col3": "참조 범위 Mathematical example of 250 kcal lower daily intake"
        },
        {
          "col1": "범주 / 단계 3",
          "col2": "TDEE - 500 kcal/day",
          "col3": "참조 범위 Mathematical example of 500 kcal lower daily intake"
        },
        {
          "col1": "범주 / 단계 4",
          "col2": "TDEE - 750 kcal/day",
          "col3": "참조 범위 Mathematical example of 750 kcal lower daily intake"
        },
        {
          "col1": "범주 / 단계 5",
          "col2": "TDEE + 250 to 300 kcal/day",
          "col3": "참조 범위 Mathematical example of 250–300 kcal higher daily intake"
        }
      ],
      "faqs": [
        {
          "question": "maintenance calorie calculator 계산기의 원리와 측정 항목은 무엇인가요?",
          "answer": "본 계산기는 검증된 공식을 사용하여 개인별 신체 지수를 산출합니다. 성인 표준 참조 범위를 바탕으로 교육적 분석 결과를 제공합니다."
        }
      ,
        {
          "question": " calculate calorie maintenance by age, height (cm), and weight (kg)? 안내 및 원리",
          "answer": "Input your biological age, gender, height (cm), weight (kg), and weekly activity level to estimate your maintenance calorie baseline."
        },
        {
          "question": "What happens if I eat at my maintenance calories every day? 안내 및 원리",
          "answer": "Eating at your estimated maintenance calorie level keeps your total energy balance neutral. Your body weight remains relatively constant over time."
        },
        {
          "question": "How do I use my maintenance calories to calculate calories for weight loss? 안내 및 원리",
          "answer": "A calorie deficit below estimated maintenance calories is commonly used for weight-loss planning, but the appropriate amount varies by individual."
        },
        {
          "question": "Is a calorie maintenance calculator accurate for men and women of all ages? 안내 및 원리",
          "answer": "Maintenance calorie calculators utilize published mathematical formulas like Mifflin-St Jeor and Harris-Benedict, providing baseline estimates for healthy adults."
        }
      ]
    },
    "hi": {
      "eyebrow": "कैलोरी रखरखाव और योजना",
      "title": "रखरखाव कैलोरी कैलकुलेटर – Calorie Maintenance कैलकुलेटर Online",
      "intro": "हमारा मुफ़्त Maintenance Calorie Calculator आपकी दैनिक रखरखाव कैलोरी और वजन लक्ष्यों के लिए अनुमानित कैलोरी की गणना करता है।",
      "formulaTitle": "रखरखाव कैलोरी सूत्र एवं ऊर्जा संतुलन",
      "formulaDesc": "रखरखाव कैलोरी = BMR × activity गुणक। व्यक्तिगत लक्ष्यों के आधार पर ऊर्जा समायोजन किया जा सकता है।",
      "formulaCode": "Maintenance = BMR × PAL",
      "tableTitle": "कैलोरी रखरखाव एवं वजन लक्ष्य तालिका",
      "tableRows": [
        {
          "col1": "रखरखाव कैलोरी",
          "col2": "100% TDEE (0 kcal बदलाव)",
          "col3": "वर्तमान वजन को बनाए रखता है"
        },
        {
          "col1": "हल्की कमी (वजन घटाना)",
          "col2": "TDEE - 250 kcal/दिन",
          "col3": "धीमा, निरंतर वजन घटाना (~0.25 किग्रा प्रति सप्ताह)"
        },
        {
          "col1": "उदाहरण कैलोरी घाटा",
          "col2": "TDEE घटाव अनुमानित घाटा",
          "col3": "वजन योजना के लिए उदाहरण संदर्भ"
        },
        {
          "col1": "मांसपेशी वृद्धि (सरप्लस)",
          "col2": "TDEE + 250 से 300 kcal/दिन",
          "col3": "मांसपेशी निर्माण के लिए अतिरिक्त कैलोरी"
        },
        {
          "col1": "श्रेणी / स्तर 5",
          "col2": "TDEE + 250 to 300 kcal/day",
          "col3": "संदर्भ सीमा Mathematical example of 250–300 kcal higher daily intake"
        }
      ],
      "faqs": [
        {
          "question": "रखरखाव कैलोरी (Maintenance Calories) क्या हैं?",
          "answer": "रखरखाव कैलोरी वह कैलोरी मात्रा है जिसे खाने से आपका वजन न तो बढ़ता है और न ही घटता है।"
        },
        {
          "question": "रखरखाव कैलोरी की गणना कैसे होती है?",
          "answer": "यह आपके BMR और आपकी दैनिक शारीरिक गतिविधि के स्तर (TDEE) के सटीक जोड़ पर आधारित होती है।"
        },
        {
          "question": "वजन घटाने के लिए रखरखाव कैलोरी से कितना कम खाएं?",
          "answer": "धीमी और टिकाऊ वसा हानि के लिए रखरखाव कैलोरी से 250 से 500 कैलोरी कम खाएं।"
        },
        {
          "question": "मांसपेशियां बढ़ाने (Bulking) के लिए कितनी कैलोरी जोड़ें?",
          "answer": "मांसपेशियां बढ़ाने के लिए रखरखाव कैलोरी में 250 से 500 कैलोरी का हल्का सरप्लस (Surplus) जोड़ें।"
        },
        {
          "question": "क्या उम्र बढ़ने से रखरखाव कैलोरी कम होती है?",
          "answer": "हाँ, उम्र बढ़ने के साथ मेटाबॉलिज्म और मांसपेशियों में प्राकृतिक कमी के कारण रखरखाव कैलोरी थोड़ा घट सकती है।"
        }
      ]
    }
  },
  "body-fat-calculator": {
    "en": {
      "eyebrow": "US Navy Anthropometric Reference",
      "title": "Body Fat Calculator – US Navy Body Fat Percentage Tool",
      "intro": "Estimate your body fat percentage using the US Navy circumference-based estimation formula. Based on waist, neck, height, and hip circumference measurements, estimate your body fat %, lean mass ratio, and ACE health category reference thresholds.",
      "formulaTitle": "US Navy Body Fat Formula Equations (Logarithmic Tape Method)",
      "formulaDesc": "Men: %Fat = 495 / [1.0324 - 0.19077 × log10(waist - neck in cm) + 0.15456 × log10(height in cm)] - 450 | Women: %Fat = 495 / [1.29579 - 0.35004 × log10(waist + hip - neck in cm) + 0.22100 × log10(height in cm)] - 450",
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
          "col2": "Men: ≥ 25% | Women: ≥ 32%",
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
      "eyebrow": "Referencia Antropométrica de la US Navy",
      "title": "Calculadora de Grasa Corporal – Porcentaje de Grasa US Navy",
      "intro": "Calcula tu porcentaje de grasa corporal estimado mediante la fórmula basada en circunferencias de la US Navy. Basado en mediciones de cintura, cuello, altura y cadera.",
      "formulaTitle": "Fórmula de Grasa Corporal de la US Navy (Método de Cinta)",
      "formulaDesc": "Hombres: %Grasa = 495 / [1.0324 - 0.19077 × log10(cintura - cuello cm) + 0.15456 × log10(altura cm)] - 450 | Mujeres: %Grasa = 495 / [1.29579 - 0.35004 × log10(cintura + cadera - cuello cm) + 0.22100 × log10(altura cm)] - 450",
      "formulaCode": "Fórmula US Navy (Cintura + Cuello + Altura)",
      "tableTitle": "Tabla de Clasificación de Grasa Corporal (ACE y US Navy)",
      "tableRows": [
        {
          "col1": "Grasa Esencial",
          "col2": "Hombres: 2% - 5% | Mujeres: 10% - 13%",
          "col3": "Nivel mínimo fisiológico esencial"
        },
        {
          "col1": "Atletas",
          "col2": "Hombres: 6% - 13% | Mujeres: 14% - 20%",
          "col3": "Nivel típico en deportistas de resistencia"
        },
        {
          "col1": "Fitness",
          "col2": "Hombres: 14% - 17% | Mujeres: 21% - 24%",
          "col3": "Rango de referencia saludable"
        },
        {
          "col1": "Promedio Poblacional",
          "col2": "Hombres: 18% - 24% | Mujeres: 25% - 31%",
          "col3": "Rango común en adultos"
        },
        {
          "col1": "Categoría / Nivel 5",
          "col2": "Men: ≥ 25% | Women: ≥ 32%",
          "col3": "Rango de referencia Higher body-fat reference category; interpretation varies by age, sex, population, and measurement method"
        }
      ],
      "faqs": [
        {
          "question": "¿Cómo calcula esta herramienta el porcentaje de grasa corporal?",
          "answer": "Utiliza el método de circunferencia de la Marina de los EE. UU., basándose en la altura, cuello, cintura y cadera."
        },
        {
          "question": "¿En qué se diferencia el porcentaje de grasa corporal del IMC?",
          "answer": "El IMC solo evalúa el peso total respecto a la altura, mientras que el porcentaje de grasa distingue la masa magra de la masa adiposa."
        },
        {
          "question": "¿Cuáles son los rangos saludables de grasa corporal para hombres y mujeres?",
          "answer": "Para hombres adultos el rango de fitness suele estar entre 14-17% y en mujeres entre 21-24% según los estándares de la ACE."
        },
        {
          "question": "¿Qué tan precisa es la cinta métrica en comparación con la exploración DEXA?",
          "answer": "El método de la Marina tiene un margen de error típico de ±3-4%, siendo una alternativa práctica y accesible sin costo."
        },
        {
          "question": "¿Cómo puedo reducir el porcentaje de grasa corporal preservando la masa muscular?",
          "answer": "Un déficit calórico moderado combinado con un consumo adecuado de proteínas y entrenamiento de fuerza ayuda a preservar el músculo."
        }
      ]
    },
    "fr": {
      "eyebrow": "Référence Anthropométrique de la US Navy",
      "title": "Calculateur de Graisse Corporelle – Formule US Navy",
      "intro": "Estimez votre pourcentage de graisse corporelle avec la formule de la US Navy basée sur les circonférences de la taille, du cou et des hanches.",
      "formulaTitle": "Formule de la US Navy pour le Taux de Graisse Corporelle",
      "formulaDesc": "Calcul basé sur les circonférences du cou, de la taille et des hanches combinées à la taille.",
      "formulaCode": "Formule US Navy",
      "tableTitle": "Catégories de Taux de Graisse Corporelle (ACE & US Navy)",
      "tableRows": [
        {
          "col1": "Graisse Essentielle",
          "col2": "Hommes : 2% - 5% | Femmes : 10% - 13%",
          "col3": "Niveau minimal physiologique"
        },
        {
          "col1": "Athlètes",
          "col2": "Hommes : 6% - 13% | Femmes : 14% - 20%",
          "col3": "Niveau habituel chez les sportifs"
        },
        {
          "col1": "Catégorie / Niveau 3",
          "col2": "Men: 14% - 17% | Women: 21% - 24%",
          "col3": "Plage de référence Reference range commonly associated with fitness-oriented populations"
        },
        {
          "col1": "Catégorie / Niveau 4",
          "col2": "Men: 18% - 24% | Women: 25% - 31%",
          "col3": "Plage de référence Standard acceptable body fat percentage range for healthy adults"
        },
        {
          "col1": "Catégorie / Niveau 5",
          "col2": "Men: ≥ 25% | Women: ≥ 32%",
          "col3": "Plage de référence Higher body-fat reference category; interpretation varies by age, sex, population, and measurement method"
        }
      ],
      "faqs": [
        {
          "question": "Comment ce calculateur évalue-t-il le taux de masse grasse ?",
          "answer": "Il applique la méthode anthropométrique de l'US Navy basée sur les mensurations du cou, de la taille, des hanches et de la taille."
        },
        {
          "question": "Quelle est la différence entre l'IMC et le taux de graisse corporelle ?",
          "answer": "L'IMC compare le poids global à la taille, tandis que la masse grasse distingue précisément les tissus adipeux de la masse musculaire."
        },
        {
          "question": "Quels sont les taux de graisse recommandés pour les hommes et les femmes ?",
          "answer": "Selon l'ACE, une plage de forme se situe entre 14 et 17 % pour les hommes et entre 21 et 24 % pour les femmes."
        },
        {
          "question": "La méthode du mètre ruban est-elle fiable ?",
          "answer": "La méthode US Navy offre une excellente estimation pratique avec un écart moyen de seulement 3 à 4 % par rapport aux scanners DEXA."
        },
        {
          "question": "Comment perdre du gras sans perdre de muscle ?",
          "answer": "Associez un léger déficit calorique à un apport élevé en protéines et à un entraînement contre résistance."
        }
      ]
    },
    "de": {
      "eyebrow": "US Navy Anthropometrische Referenz",
      "title": "Körperfett Rechner – US Navy Körperfettanteil Berechnen",
      "intro": "Schätzen Sie Ihren Körperfettanteil nach der US Navy Formel basierend auf Taillen-, Nacken- und Hüftumfang.",
      "formulaTitle": "US Navy Körperfett Formel",
      "formulaDesc": "Berechnung des Fettanteils aus Umfangsmessungen und Körpergröße.",
      "formulaCode": "US Navy Formel",
      "tableTitle": "Körperfettanteil Kategorisierung (ACE & US Navy)",
      "tableRows": [
        {
          "col1": "Essentielles Fett",
          "col2": "Männer: 2% - 5% | Frauen: 10% - 13%",
          "col3": "Physiologisches Minimum"
        },
        {
          "col1": "Sportler",
          "col2": "Männer: 6% - 13% | Frauen: 14% - 20%",
          "col3": "Typisch für trainierte Athleten"
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
          "col2": "Men: ≥ 25% | Women: ≥ 32%",
          "col3": "Referenzbereich Higher body-fat reference category; interpretation varies by age, sex, population, and measurement method"
        }
      ],
      "faqs": [
        {
          "question": "Wie berechnet dieser Rechner den Körperfettanteil?",
          "answer": "Er nutzt die US Navy-Methode basierend auf den Umfangsmessungen von Nacken, Taille, Hüfte und Körpergröße."
        },
        {
          "question": "Was unterscheidet den Körperfettanteil vom BMI?",
          "answer": "Der BMI berücksichtigt nur das Gesamtgewicht, während der Körperfettanteil gezielt Fettmasse von Muskelmasse unterscheidet."
        },
        {
          "question": "Welche Körperfettwerte gelten als gesund?",
          "answer": "Nach ACE-Standards liegt ein fitter Bereich bei Männern zwischen 14-17 % und bei Frauen zwischen 21-24 %."
        },
        {
          "question": "Wie genau ist die Maßband-Methode?",
          "answer": "Die US Navy-Methode bietet eine sehr gute Orientierung mit einer typischen Abweichung von ca. ±3-4 % im Vergleich zu DEXA-Scans."
        },
        {
          "question": "Wie senkt man den Körperfettanteil effektiv?",
          "answer": "Ein moderates Kaloriendefizit kombiniert mit ausreichender Proteinaufnahme und Krafttraining ist die bewährteste Strategie."
        }
      ]
    },
    "ko": {
      "eyebrow": "미 해군(US Navy) 신체 측정 기준",
      "title": "체지방 계산기 – 미 해군 체지방률 공식",
      "intro": "미 해군(US Navy) 둘레 공식을 사용하여 목, 허리, 엉덩이 둘레 및 키 측정값으로 추정 체지방률(%)을 계산하세요.",
      "formulaTitle": "미 해군 체지방 계산 공식",
      "formulaDesc": "목둘레, 허리둘레, 신장을 로그 회귀 방정식에 대입하여 산출.",
      "formulaCode": "US Navy 체지방 공식",
      "tableTitle": "ACE 및 미 해군 체지방률 분류표",
      "tableRows": [
        {
          "col1": "필수 지방 수준",
          "col2": "남성: 2% - 5% | 여성: 10% - 13%",
          "col3": "생리학적 필수 최소 범위"
        },
        {
          "col1": "운동선수 범주",
          "col2": "남성: 6% - 13% | 여성: 14% - 20%",
          "col3": "운동선수의 일반적 체지방률"
        },
        {
          "col1": "범주 / 단계 3",
          "col2": "Men: 14% - 17% | Women: 21% - 24%",
          "col3": "참조 범위 Reference range commonly associated with fitness-oriented populations"
        },
        {
          "col1": "범주 / 단계 4",
          "col2": "Men: 18% - 24% | Women: 25% - 31%",
          "col3": "참조 범위 Standard acceptable body fat percentage range for healthy adults"
        },
        {
          "col1": "범주 / 단계 5",
          "col2": "Men: ≥ 25% | Women: ≥ 32%",
          "col3": "참조 범위 Higher body-fat reference category; interpretation varies by age, sex, population, and measurement method"
        }
      ],
      "faqs": [
        {
          "question": "체지방률 계산기는 어떤 공식을 사용하나요?",
          "answer": "신장, 목, 허리, 엉덩이 둘레 측정값을 활용하는 미국 해군(US Navy) 신체 조성 공식을 적용합니다."
        },
        {
          "question": "BMI 수치와 체지방률의 차이는 무엇인가요?",
          "answer": "BMI는 전체 체중과 신장만을 비교하지만, 체지방률은 실제 체지방량과 제지방 근육량을 구분하여 측정합니다."
        },
        {
          "question": "남성과 여성의 권장 체지방률 기준은 무엇인가요?",
          "answer": "ACE 지침 기준 피트니스 권장 범주는 성인 남성 14~17%, 성인 여성 21~24% 수준입니다."
        },
        {
          "question": "줄자 측정 방식의 정확도는 어느 정도인가요?",
          "answer": "US Navy 방식은 DEXA 스캔 대비 약 ±3~4%의 오차 범위를 갖는 매우 실용적이고 접근성 높은 추정법입니다."
        },
        {
          "question": "근손실 없이 체지방만 감량하려면 어떻게 해야 하나요?",
          "answer": "완만한 칼로리 적자를 유지하면서 충분한 단백질 섭취와 근력 운동을 병행하는 것이 핵심입니다."
        }
      ]
    },
    "hi": {
      "eyebrow": "यूएस नेवी एंथ्रोपोमेट्रिक मानक",
      "title": "बॉडी फैट कैलकुलेटर – यूएस नेवी वसा प्रतिशत",
      "intro": "कमर, गर्दन, ऊंचाई और कूल्हे की परिधि के आधार पर यूएस नेवी फॉर्मूला से अपने शरीर के वसा प्रतिशत का अनुमान लगाएं।",
      "formulaTitle": "यूएस नेवी बॉडी फैट सूत्र",
      "formulaDesc": "कमर और गर्दन की परिधि तथा ऊंचाई से बॉडी फैट की गणना।",
      "formulaCode": "US Navy Body Fat Formula",
      "tableTitle": "बॉडी फैट प्रतिशत वर्गीकरण तालिका",
      "tableRows": [
        {
          "col1": "आवश्यक वसा स्तर",
          "col2": "पुरुष: 2% - 5% | महिला: 10% - 13%",
          "col3": "न्यूनतम जैविक वसा स्तर"
        },
        {
          "col1": "एथलीट श्रेणी",
          "col2": "पुरुष: 6% - 13% | महिला: 14% - 20%",
          "col3": "एथलीटों में सामान्य वसा"
        },
        {
          "col1": "श्रेणी / स्तर 3",
          "col2": "Men: 14% - 17% | Women: 21% - 24%",
          "col3": "संदर्भ सीमा Reference range commonly associated with fitness-oriented populations"
        },
        {
          "col1": "श्रेणी / स्तर 4",
          "col2": "Men: 18% - 24% | Women: 25% - 31%",
          "col3": "संदर्भ सीमा Standard acceptable body fat percentage range for healthy adults"
        },
        {
          "col1": "श्रेणी / स्तर 5",
          "col2": "Men: ≥ 25% | Women: ≥ 32%",
          "col3": "संदर्भ सीमा Higher body-fat reference category; interpretation varies by age, sex, population, and measurement method"
        }
      ],
      "faqs": [
        {
          "question": "बॉडी फैट कैलकुलेटर शरीर की वसा कैसे मापता है?",
          "answer": "यह यूएस नेवी विधि का उपयोग करके गर्दन, कमर, कूल्हे और ऊंचाई की माप से वसा प्रतिशत का अनुमान लगाता है।"
        },
        {
          "question": "बॉडी फैट और बीएमआई में क्या अंतर है?",
          "answer": "बीएमआई केवल ऊंचाई और वजन का अनुपात है, जबकि बॉडी फैट कैलकुलेटर मांसपेशियों और वसा के अनुपात को अलग करता है।"
        },
        {
          "question": "पुरुषों और महिलाओं के लिए स्वस्थ वसा प्रतिशत क्या है?",
          "answer": "एसीई (ACE) मानकों के अनुसार पुरुषों के लिए 14-17% और महिलाओं के लिए 21-24% को फिटनेस का अच्छा स्तर माना जाता है।"
        },
        {
          "question": "क्या टेप माप से वसा मापना सटीक है?",
          "answer": "यूएस नेवी विधि DEXA स्कैन की तुलना में ±3-4% के अंतर के साथ एक विश्वसनीय और आसान मुफ़्त विकल्प है।"
        },
        {
          "question": "मांसपेशियों को बचाते हुए वसा कैसे घटाएं?",
          "answer": "हल्का कैलोरी घाटा, पर्याप्त प्रोटीन और नियमित स्ट्रेंथ ट्रेनिंग से वसा कम करते समय मांसपेशियां बनी रहती हैं।"
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
      "formulaDesc": "Men: LBM = (0.407 × W) + (0.267 × H) - 19.2 | Women: LBM = (0.252 × W) + (0.473 × H) - 48.3",
      "tableTitle": "Boer Equation Formula Reference",
      "tableRows": [
        {
          "col1": "Boer Equation (Men)",
          "col2": "(0.407 × W) + (0.267 × H) - 19.2",
          "col3": "Predictive formula for estimated lean mass in males"
        },
        {
          "col1": "Boer Equation (Women)",
          "col2": "(0.252 × W) + (0.473 × H) - 48.3",
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
      "eyebrow": "Estándares de Referencia de Salud",
      "title": "Lean Body Mass Calculator & LBM Reference Tool – Guía y Calculadora",
      "intro": "Herramienta de cálculo y referencia educativa diseñada según los estándares de salud publicados de la OMS y CDC. Calcula tus métricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "Fórmula de Referencia Estándar",
      "formulaDesc": "Calculado utilizando ecuaciones estándar validadas.",
      "tableTitle": "Tabla de Referencia Estándar",
      "tableRows": [
        {
          "col1": "Categoría / Nivel 1",
          "col2": "(0.407 × W) + (0.267 × H) - 19.2",
          "col3": "Rango de referencia Predictive formula for estimated lean mass in males"
        },
        {
          "col1": "Categoría / Nivel 2",
          "col2": "(0.252 × W) + (0.473 × H) - 48.3",
          "col3": "Rango de referencia Predictive formula for estimated lean mass in females"
        }
      ],
      "faqs": [
        {
          "question": "¿Cómo funciona la calculadora de lean body mass calculator y qué mide?",
          "answer": "Esta calculadora evalúa tus datos personales utilizando ecuaciones validadas. Proporciona una estimación educativa para ayudarte a comprender tu estado de salud y referencias estándar."
        }
      ,
        {
          "question": "Por qué es Lean Body Mass useful in body composition tracking?",
          "answer": "LBM estimates can be used as one reference when tracking changes in estimated non-fat body mass."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de Référence de Santé",
      "title": "Lean Body Mass Calculator & LBM Reference Tool – Outil de Référence",
      "intro": "Outil de calcul et de référence éducatif conçu selon les normes de santé publiées de l'OMS et du CDC. Calculez vos métriques et consultez les plages de référence.",
      "formulaTitle": "Formule de Référence Standard",
      "formulaDesc": "Calculé à l'aide d'équations standards validées.",
      "tableTitle": "Tableau de Référence Standard",
      "tableRows": [
        {
          "col1": "Catégorie / Niveau 1",
          "col2": "(0.407 × W) + (0.267 × H) - 19.2",
          "col3": "Plage de référence Predictive formula for estimated lean mass in males"
        },
        {
          "col1": "Catégorie / Niveau 2",
          "col2": "(0.252 × W) + (0.473 × H) - 48.3",
          "col3": "Plage de référence Predictive formula for estimated lean mass in females"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de lean body mass calculator et que mesure-t-il ?",
          "answer": "Ce calculateur évalue vos données personnelles à l'aide d'équations validées. Il fournit une estimation éducative pour vous aider à comprendre vos métriques et références standards."
        }
      ,
        {
          "question": "Pourquoi Lean Body Mass useful in body composition tracking?",
          "answer": "LBM estimates can be used as one reference when tracking changes in estimated non-fat body mass."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "Lean Body Mass Calculator & LBM Reference Tool – Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den veröffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und prüfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardmäßig validierten Gleichungen.",
      "tableTitle": "Standard-Referenztabelle",
      "tableRows": [
        {
          "col1": "Kategorie / Stufe 1",
          "col2": "(0.407 × W) + (0.267 × H) - 19.2",
          "col3": "Referenzbereich Predictive formula for estimated lean mass in males"
        },
        {
          "col1": "Kategorie / Stufe 2",
          "col2": "(0.252 × W) + (0.473 × H) - 48.3",
          "col3": "Referenzbereich Predictive formula for estimated lean mass in females"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der lean body mass calculator-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre persönlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        }
      ,
        {
          "question": "Warum ist Lean Body Mass useful in body composition tracking?",
          "answer": "LBM estimates can be used as one reference when tracking changes in estimated non-fat body mass."
        }
      ]
    },
    "ko": {
      "eyebrow": "건강 참조 표준 지침",
      "title": "Lean Body Mass 계산기 & LBM Reference 도구 – 참조 계산기",
      "intro": "WHO 및 CDC 지침에 기반한 실시간 참고 계산기입니다. 개인별 수치를 측정하고 성인 표준 참조 범위를 확인하세요.",
      "formulaTitle": "표준 계산 공식",
      "formulaDesc": "검증된 표준 공식을 사용하여 계산됩니다.",
      "tableTitle": "표준 참조 진단표",
      "tableRows": [
        {
          "col1": "범주 / 단계 1",
          "col2": "(0.407 × W) + (0.267 × H) - 19.2",
          "col3": "참조 범위 Predictive formula for estimated lean mass in males"
        },
        {
          "col1": "범주 / 단계 2",
          "col2": "(0.252 × W) + (0.473 × H) - 48.3",
          "col3": "참조 범위 Predictive formula for estimated lean mass in females"
        }
      ],
      "faqs": [
        {
          "question": "lean body mass calculator 계산기의 원리와 측정 항목은 무엇인가요?",
          "answer": "본 계산기는 검증된 공식을 사용하여 개인별 신체 지수를 산출합니다. 성인 표준 참조 범위를 바탕으로 교육적 분석 결과를 제공합니다."
        }
      ,
        {
          "question": "Why is Lean Body Mass useful in body composition tracking? 안내 및 원리",
          "answer": "LBM estimates can be used as one reference when tracking changes in estimated non-fat body mass."
        }
      ]
    },
    "hi": {
      "eyebrow": "स्वास्थ्य संदर्भ मानक",
      "title": "Lean Body Mass कैलकुलेटर & LBM Reference टूल – मुफ्त कैलकुलेटर",
      "intro": "डब्ल्यूएचओ और सीडीसी स्वास्थ्य मानकों के अनुसार निर्मित संदर्भ टूल। अपनी मेट्रिक्स की गणना करें और स्थापित स्वास्थ्य सीमाओं की समीक्षा करें।",
      "formulaTitle": "मानक संदर्भ सूत्र",
      "formulaDesc": "मानक सत्यापित समीकरणों का उपयोग करके गणना की गई।",
      "tableTitle": "मानक संदर्भ तालिका",
      "tableRows": [
        {
          "col1": "श्रेणी / स्तर 1",
          "col2": "(0.407 × W) + (0.267 × H) - 19.2",
          "col3": "संदर्भ सीमा Predictive formula for estimated lean mass in males"
        },
        {
          "col1": "श्रेणी / स्तर 2",
          "col2": "(0.252 × W) + (0.473 × H) - 48.3",
          "col3": "संदर्भ सीमा Predictive formula for estimated lean mass in females"
        }
      ],
      "faqs": [
        {
          "question": "लीन बॉडी मास (Lean Body Mass) क्या है?",
          "answer": "लीन बॉडी मास आपके कुल शरीर के वजन में से वसा के वजन को घटाने के बाद बची मांसपेशियों, हड्डियों और पानी का वजन है।"
        },
        {
          "question": "लीन बॉडी मास कैलकुलेटर किस सूत्र का उपयोग करता है?",
          "answer": "यह बोअर (Boer) सूत्र का उपयोग करता है जो वजन और ऊंचाई के आधार पर लीन मास का सटीक अनुमान लगाता है।"
        },
        {
          "question": "प्रोटीन की आवश्यकता के लिए LBM क्यों महत्वपूर्ण है?",
          "answer": "एथलीट और बॉडीबिल्डर अक्सर कुल वजन के बजाय लीन बॉडी मास के आधार पर अपने प्रोटीन लक्ष्य तय करते हैं।"
        },
        {
          "question": "LBM और वसा द्रव्यमान (Fat Mass) में क्या अंतर है?",
          "answer": "LBM शरीर के गैर-वसा वाले ऊतकों का वजन है, जबकि फैट मास शरीर में मौजूद वसा का कुल वजन है।"
        },
        {
          "question": "डाइट के दौरान LBM को कैसे बचाएं?",
          "answer": "उच्च प्रोटीन आहार और भारी वजन उठाने (Resistance Training) से डाइट के दौरान लीन मास सुरक्षित रहता है।"
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
      "formulaDesc": "Devine, Robinson, Miller and Hamwi equations provide different reference estimates; they should not be interpreted as a universally \"ideal\" or medically required body weight.",
      "formulaCode": "IBW = Base Weight + (Factor × Height over 5ft)",
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
          "col2": "18.5 – 24.9 kg/m²",
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
          "answer": "IBW formulas provide specific formula-based estimates, whereas the WHO healthy BMI weight range gives a broad window (18.5 to 24.9 kg/m²) accommodating different frame sizes and body compositions."
        },
        {
          "question": "Is the IBW calculator suitable for muscular individuals?",
          "answer": "IBW formulas provide population reference benchmarks. Muscular individuals or athletes may weigh more than calculated IBW targets while maintaining low body fat."
        }
      ]
    },
    "es": {
      "eyebrow": "Estándares de Referencia de Salud",
      "title": "Estimate Ideal Body Weight (IBW) using commonly cited equations – Guía y Calculadora",
      "intro": "Herramienta de cálculo y referencia educativa diseñada según los estándares de salud publicados de la OMS y CDC. Calcula tus métricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "Fórmula de Referencia Estándar",
      "formulaDesc": "Calculado utilizando ecuaciones estándar validadas.",
      "formulaCode": "IBW = Base Weight + (Factor × Height over 5ft)",
      "tableTitle": "Tabla de Referencia Estándar",
      "tableRows": [
        {
          "col1": "Categoría / Nivel 1",
          "col2": "50 kg (M) / 45.5 kg (F) + 2.3 kg/in > 5ft",
          "col3": "Rango de referencia Widely cited formula introduced in 1974"
        },
        {
          "col1": "Categoría / Nivel 2",
          "col2": "52 kg (M) / 49.0 kg (F) + 1.9 or 1.7 kg/in",
          "col3": "Rango de referencia Modification of Devine formula optimized for medium frame adults"
        },
        {
          "col1": "Categoría / Nivel 3",
          "col2": "56.2 kg (M) / 53.1 kg (F) + 1.41 or 1.36 kg/in",
          "col3": "Rango de referencia Higher base estimate for shorter individuals, gentler slope per inch"
        },
        {
          "col1": "Categoría / Nivel 4",
          "col2": "48 kg (M) / 45.5 kg (F) + 2.7 or 2.2 kg/in",
          "col3": "Rango de referencia Historical reference formula"
        },
        {
          "col1": "Categoría / Nivel 5",
          "col2": "18.5 – 24.9 kg/m²",
          "col3": "Rango de referencia Population health reference window based on height squared"
        }
      ],
      "faqs": [
        {
          "question": "¿Cómo funciona la calculadora de ideal weight calculator y qué mide?",
          "answer": "Esta calculadora evalúa tus datos personales utilizando ecuaciones validadas. Proporciona una estimación educativa para ayudarte a comprender tu estado de salud y referencias estándar."
        }
      ,
        {
          "question": "¿Qué es my ideal weight for my height in kg or lbs?",
          "answer": "Enter your height in cm or feet/inches and select male or female. For example, a 5 ft 10 in (178 cm) male has an estimated IBW of ~73 kg via Devine formula, with a WHO healthy weight range of 58.6 kg to 78.9 kg."
        },
        {
          "question": "Why are there different formulas for calculating ideal weight for females vs males?",
          "answer": "Biological males typically have higher average muscle density and bone mass per unit of height than females, resulting in separate base constants in formulas."
        },
        {
          "question": "¿Qué es el difference between Ideal Body Weight (IBW) and healthy BMI weight range?",
          "answer": "IBW formulas provide specific formula-based estimates, whereas the WHO healthy BMI weight range gives a broad window (18.5 to 24.9 kg/m²) accommodating different frame sizes and body compositions."
        },
        {
          "question": "Is the IBW calculator suitable for muscular individuals?",
          "answer": "IBW formulas provide population reference benchmarks. Muscular individuals or athletes may weigh more than calculated IBW targets while maintaining low body fat."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de Référence de Santé",
      "title": "Estimate Ideal Body Weight (IBW) using commonly cited equations – Outil de Référence",
      "intro": "Outil de calcul et de référence éducatif conçu selon les normes de santé publiées de l'OMS et du CDC. Calculez vos métriques et consultez les plages de référence.",
      "formulaTitle": "Formule de Référence Standard",
      "formulaDesc": "Calculé à l'aide d'équations standards validées.",
      "formulaCode": "IBW = Base Weight + (Factor × Height over 5ft)",
      "tableTitle": "Tableau de Référence Standard",
      "tableRows": [
        {
          "col1": "Catégorie / Niveau 1",
          "col2": "50 kg (M) / 45.5 kg (F) + 2.3 kg/in > 5ft",
          "col3": "Plage de référence Widely cited formula introduced in 1974"
        },
        {
          "col1": "Catégorie / Niveau 2",
          "col2": "52 kg (M) / 49.0 kg (F) + 1.9 or 1.7 kg/in",
          "col3": "Plage de référence Modification of Devine formula optimized for medium frame adults"
        },
        {
          "col1": "Catégorie / Niveau 3",
          "col2": "56.2 kg (M) / 53.1 kg (F) + 1.41 or 1.36 kg/in",
          "col3": "Plage de référence Higher base estimate for shorter individuals, gentler slope per inch"
        },
        {
          "col1": "Catégorie / Niveau 4",
          "col2": "48 kg (M) / 45.5 kg (F) + 2.7 or 2.2 kg/in",
          "col3": "Plage de référence Historical reference formula"
        },
        {
          "col1": "Catégorie / Niveau 5",
          "col2": "18.5 – 24.9 kg/m²",
          "col3": "Plage de référence Population health reference window based on height squared"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de ideal weight calculator et que mesure-t-il ?",
          "answer": "Ce calculateur évalue vos données personnelles à l'aide d'équations validées. Il fournit une estimation éducative pour vous aider à comprendre vos métriques et références standards."
        }
      ,
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
          "answer": "IBW formulas provide specific formula-based estimates, whereas the WHO healthy BMI weight range gives a broad window (18.5 to 24.9 kg/m²) accommodating different frame sizes and body compositions."
        },
        {
          "question": "Is the IBW calculator suitable for muscular individuals?",
          "answer": "IBW formulas provide population reference benchmarks. Muscular individuals or athletes may weigh more than calculated IBW targets while maintaining low body fat."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "Estimate Ideal Body Weight (IBW) using commonly cited equations – Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den veröffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und prüfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardmäßig validierten Gleichungen.",
      "formulaCode": "IBW = Base Weight + (Factor × Height over 5ft)",
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
          "col2": "18.5 – 24.9 kg/m²",
          "col3": "Referenzbereich Population health reference window based on height squared"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der ideal weight calculator-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre persönlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        }
      ,
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
          "answer": "IBW formulas provide specific formula-based estimates, whereas the WHO healthy BMI weight range gives a broad window (18.5 to 24.9 kg/m²) accommodating different frame sizes and body compositions."
        },
        {
          "question": "Is the IBW calculator suitable for muscular individuals?",
          "answer": "IBW formulas provide population reference benchmarks. Muscular individuals or athletes may weigh more than calculated IBW targets while maintaining low body fat."
        }
      ]
    },
    "ko": {
      "eyebrow": "건강 참조 표준 지침",
      "title": "Estimate Ideal Body Weight (IBW) using commonly cited equations – 참조 계산기",
      "intro": "WHO 및 CDC 지침에 기반한 실시간 참고 계산기입니다. 개인별 수치를 측정하고 성인 표준 참조 범위를 확인하세요.",
      "formulaTitle": "표준 계산 공식",
      "formulaDesc": "검증된 표준 공식을 사용하여 계산됩니다.",
      "formulaCode": "IBW = Base Weight + (Factor × Height over 5ft)",
      "tableTitle": "표준 참조 진단표",
      "tableRows": [
        {
          "col1": "범주 / 단계 1",
          "col2": "50 kg (M) / 45.5 kg (F) + 2.3 kg/in > 5ft",
          "col3": "참조 범위 Widely cited formula introduced in 1974"
        },
        {
          "col1": "범주 / 단계 2",
          "col2": "52 kg (M) / 49.0 kg (F) + 1.9 or 1.7 kg/in",
          "col3": "참조 범위 Modification of Devine formula optimized for medium frame adults"
        },
        {
          "col1": "범주 / 단계 3",
          "col2": "56.2 kg (M) / 53.1 kg (F) + 1.41 or 1.36 kg/in",
          "col3": "참조 범위 Higher base estimate for shorter individuals, gentler slope per inch"
        },
        {
          "col1": "범주 / 단계 4",
          "col2": "48 kg (M) / 45.5 kg (F) + 2.7 or 2.2 kg/in",
          "col3": "참조 범위 Historical reference formula"
        },
        {
          "col1": "범주 / 단계 5",
          "col2": "18.5 – 24.9 kg/m²",
          "col3": "참조 범위 Population health reference window based on height squared"
        }
      ],
      "faqs": [
        {
          "question": "ideal weight calculator 계산기의 원리와 측정 항목은 무엇인가요?",
          "answer": "본 계산기는 검증된 공식을 사용하여 개인별 신체 지수를 산출합니다. 성인 표준 참조 범위를 바탕으로 교육적 분석 결과를 제공합니다."
        }
      ,
        {
          "question": " my ideal weight for my height in kg or lbs? 안내 및 원리",
          "answer": "Enter your height in cm or feet/inches and select male or female. For example, a 5 ft 10 in (178 cm) male has an estimated IBW of ~73 kg via Devine formula, with a WHO healthy weight range of 58.6 kg to 78.9 kg."
        },
        {
          "question": "Why are there different formulas for calculating ideal weight for females vs males? 안내 및 원리",
          "answer": "Biological males typically have higher average muscle density and bone mass per unit of height than females, resulting in separate base constants in formulas."
        },
        {
          "question": " difference between Ideal Body Weight (IBW) and healthy BMI weight range? 안내 및 원리",
          "answer": "IBW formulas provide specific formula-based estimates, whereas the WHO healthy BMI weight range gives a broad window (18.5 to 24.9 kg/m²) accommodating different frame sizes and body compositions."
        },
        {
          "question": "Is the IBW calculator suitable for muscular individuals? 안내 및 원리",
          "answer": "IBW formulas provide population reference benchmarks. Muscular individuals or athletes may weigh more than calculated IBW targets while maintaining low body fat."
        }
      ]
    },
    "hi": {
      "eyebrow": "आदर्श वजन संदर्भ",
      "title": "आदर्श वजन कैलकुलेटर – ऊंचाई के अनुसार आइडियल बॉडी वेट (IBW)",
      "intro": "हमारा मुफ़्त Ideal Weight Calculator (IBW Calculator) आपकी ऊंचाई (सेमी या इंच) और लिंग (महिला या पुरुष) के आधार पर आदर्श वजन का अनुमान लगाता है। Devine, Robinson, Miller और Hamwi सूत्रों की तुलना करें।",
      "formulaTitle": "मानक IBW सूत्र (Devine, Robinson, Miller & Hamwi)",
      "formulaDesc": "Devine, Robinson, Miller और Hamwi सूत्र विभिन्न संदर्भ अनुमान प्रदान करते हैं; इन्हें सार्वभौमिक \"आदर्श\" या चिकित्सीय आवश्यकता नहीं माना जाना चाहिए।",
      "formulaCode": "IBW = Base Weight + (Factor × Height over 5ft)",
      "tableTitle": "ऊंचाई एवं सूत्र के अनुसार आदर्श शरीर वजन (IBW) तालिका",
      "tableRows": [
        {
          "col1": "Devine फॉर्मूला (1974)",
          "col2": "50 kg (M) / 45.5 kg (F) + 2.3 kg/in > 5ft",
          "col3": "पोषण और शोध अध्ययनों में व्यापक रूप से इस्तेमाल"
        },
        {
          "col1": "Robinson फॉर्मूला (1983)",
          "col2": "52 kg (M) / 49.0 kg (F) + 1.9 या 1.7 kg/in",
          "col3": "मध्यम फ्रेम वयस्कों के लिए अनुकूलित"
        },
        {
          "col1": "Miller फॉर्मूला (1983)",
          "col2": "56.2 kg (M) / 53.1 kg (F) + 1.41 या 1.36 kg/in",
          "col3": "कम ऊंचाई वालों के लिए उच्च बेस अनुमान"
        },
        {
          "col1": "Hamwi फॉर्मूला (1964)",
          "col2": "48 kg (M) / 45.5 kg (F) + 2.7 या 2.2 kg/in",
          "col3": "त्वरित मानक अनुमान के लिए डिज़ाइन"
        },
        {
          "col1": "WHO स्वस्थ बीएमआई सीमा",
          "col2": "18.5 – 24.9 kg/m²",
          "col3": "ऊंचाई वर्ग के आधार पर सामान्य स्वास्थ्य सीमा"
        }
      ],
      "faqs": [
        {
          "question": "आदर्श शरीर वजन (Ideal Body Weight) क्या है?",
          "answer": "आदर्श वजन आपकी ऊंचाई और लिंग के आधार पर एक स्वस्थ शरीर का अनुमानित मानक वजन है।"
        },
        {
          "question": "यह कैलकुलेटर किन प्रसिद्ध सूत्रों का उपयोग करता है?",
          "answer": "यह डिवाइन (Devine) और रॉबिन्सन (Robinson) जैसे स्थापित नैदानिक सूत्रों का उपयोग करता है।"
        },
        {
          "question": "डिवाइन सूत्र (Devine Formula) कैसे काम करता है?",
          "answer": "यह 5 फीट से ऊपर की प्रत्येक अतिरिक्त इंच ऊंचाई के लिए पुरुषों में 2.3 किग्रा और महिलाओं में 2.3 किग्रा जोड़ता है।"
        },
        {
          "question": "क्या आदर्श वजन और बीएमआई रेंज एक ही हैं?",
          "answer": "आदर्श वजन एक सटीक बिंदु अनुमान (Point Estimate) देता है, जबकि बीएमआई एक स्वस्थ सीमा (Range) प्रदान करता है।"
        },
        {
          "question": "क्या एथलीटों का वजन आदर्श वजन से अधिक हो सकता है?",
          "answer": "हाँ, अधिक मांसपेशियों वाले एथलीटों का वजन स्वास्थ्यप्रद रूप से आदर्श वजन अनुमान से अधिक हो सकता है।"
        }
      ]
    }
  },
  "calorie-calculator": {
    "en": {
      "eyebrow": "Calorie Planning Reference",
      "title": "Calorie Deficit Calculator – Estimated Calorie Planning",
      "intro": "Use our free Calorie Deficit Calculator to estimate daily calorie differences for weight goals based on BMR and TDEE equations. A calorie deficit is commonly used for weight-loss planning, but individual energy needs and appropriate adjustments vary.",
      "formulaTitle": "Calorie Deficit Calculation Formulas & Weight Change Math",
      "formulaDesc": "Daily Calorie Intake = TDEE - Target Deficit | Weekly Energy Difference Estimate = Daily Deficit × 7 (Note: ~7700 kcal/kg is a mathematical energy-equivalent reference)",
      "formulaCode": "Target Calories = [ (10 × W_kg) + (6.25 × H_cm) - (5 × Age) + S ] × Activity Multiplier - Daily Deficit",
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
      "eyebrow": "Planificación Calórica",
      "title": "Calculadora de Déficit Calórico – Planificación de Calorías",
      "intro": "Utiliza nuestra calculadora gratuita de déficit calórico para estimar tus necesidades calóricas diarias según tus objetivos de peso a partir del BMR y TDEE.",
      "formulaTitle": "Fórmulas de Déficit Calórico",
      "formulaDesc": "Consumo Calórico Diario = TDEE - Déficit Objetivo | Referencia energética estimada: ~7,700 kcal por kg de masa.",
      "formulaCode": "Calorías Objetivo = TDEE - Déficit Diario",
      "tableTitle": "Ejemplos de Déficit Calórico y Cambios Estimados",
      "tableRows": [
        {
          "col1": "Escenario A: Déficit de 250 kcal/día",
          "col2": "~1,750 kcal de diferencia semanal",
          "col3": "Ejemplo matemático de un déficit diario ligero"
        },
        {
          "col1": "Escenario B: Déficit de 500 kcal/día",
          "col2": "~3,500 kcal de diferencia semanal",
          "col3": "Ejemplo matemático de un déficit diario estándar"
        },
        {
          "col1": "Equilibrio Energético (0 kcal)",
          "col2": "0 kcal de cambio",
          "col3": "TDEE estimado para mantenimiento de peso"
        },
        {
          "col1": "Categoría / Nivel 4",
          "col2": "0 kcal net difference / week",
          "col3": "Rango de referencia Estimated TDEE energy balance for weight stabilization"
        }
      ],
      "faqs": [
        {
          "question": "¿Qué es un déficit calórico y cómo funciona la calculadora?",
          "answer": "Un déficit calórico ocurre cuando el consumo de energía es menor que el TDEE. La calculadora estima tu TDEE y resta un déficit seleccionado para planificar tus calorías diarias."
        },
        {
          "question": "¿Qué déficit calórico es recomendable?",
          "answer": "No existe una cifra única para todos. Las necesidades calóricas varían según la salud, la actividad y los objetivos de cada persona."
        },
        {
          "question": "¿Cómo funciona la calculadora de calorie calculator y qué mide?",
          "answer": "Esta calculadora evalúa tus datos personales utilizando ecuaciones validadas. Proporciona una estimación educativa para ayudarte a comprender tu estado de salud y referencias estándar."
        }
      ,
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
      "title": "Calculateur de Déficit Calorique – Planification des Calories",
      "intro": "Utilisez notre calculateur gratuit de déficit calorique pour estimer vos besoins caloriques quotidiens en fonction de vos objectifs de poids.",
      "formulaTitle": "Formules de Calcul du Déficit Calorique",
      "formulaDesc": "Apport Calorique Cible = TDEE - Déficit Souhaité | Référence énergétique : ~7700 kcal par kg de masse.",
      "formulaCode": "Calories Cibles = TDEE - Déficit Quotidien",
      "tableTitle": "Exemples de Déficits Caloriques et Répartitions",
      "tableRows": [
        {
          "col1": "Scénario A : Déficit de 250 kcal/jour",
          "col2": "~1 750 kcal de différence par semaine",
          "col3": "Exemple de déficit quotidien modéré"
        },
        {
          "col1": "Scénario B : Déficit de 500 kcal/jour",
          "col2": "~3 500 kcal de différence par semaine",
          "col3": "Exemple de déficit quotidien standard"
        },
        {
          "col1": "Maintien Énergétique (0 kcal)",
          "col2": "0 kcal de variation",
          "col3": "TDEE estimé pour stabiliser le poids"
        },
        {
          "col1": "Catégorie / Niveau 4",
          "col2": "0 kcal net difference / week",
          "col3": "Plage de référence Estimated TDEE energy balance for weight stabilization"
        }
      ],
      "faqs": [
        {
          "question": "Qu'est-ce qu'un déficit calorique et comment fonctionne le calculateur ?",
          "answer": "Un déficit calorique survient lorsque vous consommez moins de calories que votre TDEE. Le calculateur établit votre TDEE puis soustrait le déficit choisi pour planifier vos repas."
        },
        {
          "question": "Comment fonctionne le calculateur de calorie calculator et que mesure-t-il ?",
          "answer": "Ce calculateur évalue vos données personnelles à l'aide d'équations validées. Il fournit une estimation éducative pour vous aider à comprendre vos métriques et références standards."
        }
      ,
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
      "title": "Kaloriendefizit Rechner – Tägliche Kalorienplanung",
      "intro": "Nutzen Sie unseren kostenlosen Kaloriendefizit-Rechner zur Schätzung Ihres täglichen Kalorienbedarfs für Ihre Gewichtsziele basierend auf BMR und TDEE.",
      "formulaTitle": "Kaloriendefizit Formel & Energiebilanz",
      "formulaDesc": "Tägliche Zielkalorien = TDEE - Ziel-Defizit | Mathematische Referenz: ~7.700 kcal pro kg Körpergewicht.",
      "formulaCode": "Zielkalorien = TDEE - Täglicher Defizit",
      "tableTitle": "Beispiel-Defizite & Mathematische Übersicht",
      "tableRows": [
        {
          "col1": "Szenario A: 250 kcal/Tag Defizit",
          "col2": "~1.750 kcal Differenz / Woche",
          "col3": "Mathematisches Beispiel für ein leichtes Defizit"
        },
        {
          "col1": "Szenario B: 500 kcal/Tag Defizit",
          "col2": "~3.500 kcal Differenz / Woche",
          "col3": "Mathematisches Beispiel für ein Standard-Defizit"
        },
        {
          "col1": "Erhaltung (0 kcal Defizit)",
          "col2": "0 kcal Differenz",
          "col3": "Geschätzter TDEE zur Gewichtserhaltung"
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
          "answer": "Ein Kaloriendefizit entsteht, wenn die tägliche Energiezufuhr geringer ist als der Gesamtenergieumsatz (TDEE). Der Rechner berechnet den TDEE und zieht ein gewähltes Defizit ab."
        },
        {
          "question": "Wie funktioniert der calorie calculator-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre persönlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        }
      ,
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
      "eyebrow": "칼로리 계획 및 섭취량",
      "title": "칼로리 결손 계산기 – 칼로리 계획 계산기",
      "intro": "무료 칼로리 결손 계산기를 사용하여 BMR 및 TDEE를 기반으로 체중 목표에 따른 일일 칼로리 목표를 추정하세요.",
      "formulaTitle": "칼로리 결손 계산 공식",
      "formulaDesc": "일일 목표 칼로리 = TDEE - 목표 결손량 | 칼로리 에너지 참조: 체중 1kg당 약 7,700 kcal.",
      "formulaCode": "목표 칼로리 = TDEE - 일일 결손량",
      "tableTitle": "칼로리 결손 시나리오 및 예시표",
      "tableRows": [
        {
          "col1": "시나리오 A: 일 250 kcal 결손",
          "col2": "주당 약 1,750 kcal 차이",
          "col3": "가벼운 일일 칼로리 감축 예시"
        },
        {
          "col1": "시나리오 B: 일 500 kcal 결손",
          "col2": "주당 약 3,500 kcal 차이",
          "col3": "표준 일일 칼로리 감축 예시"
        },
        {
          "col1": "유지 상태 (0 kcal 결손)",
          "col2": "0 kcal 차이",
          "col3": "체중 유지를 위한 추정 TDEE"
        },
        {
          "col1": "범주 / 단계 4",
          "col2": "0 kcal net difference / week",
          "col3": "참조 범위 Estimated TDEE energy balance for weight stabilization"
        }
      ],
      "faqs": [
        {
          "question": "칼로리 결손이란 무엇이며 계산기는 어떻게 작동하나요?",
          "answer": "칼로리 결손은 일일 섭취 칼로리가 일일 총 에너지 소비량(TDEE)보다 적을 때 발생합니다. 계산기는 TDEE를 구한 후 목표 결손량을 차감하여 표시합니다."
        },
        {
          "question": "calorie calculator 계산기의 원리와 측정 항목은 무엇인가요?",
          "answer": "본 계산기는 검증된 공식을 사용하여 개인별 신체 지수를 산출합니다. 성인 표준 참조 범위를 바탕으로 교육적 분석 결과를 제공합니다."
        }
      ,
        {
          "question": "What calorie deficit is commonly used for weight management? 안내 및 원리",
          "answer": "There is no single calorie-deficit value that is appropriate for everyone. Individual energy needs, health status, activity, and dietary intake should be considered. Energy adjustments are evaluated based on individual goals and health context."
        },
        {
          "question": "How much protein should I eat while in a calorie deficit? 안내 및 원리",
          "answer": "During a calorie deficit, protein intake ranges from 1.6 to 2.2 grams per kilogram of body weight are commonly referenced in sports nutrition literature."
        },
        {
          "question": "What should I do if my weight loss stalls in a calorie deficit? 안내 및 원리",
          "answer": "Weight loss stalls often stem from uncounted food calories, reduced non-exercise physical activity (NEAT), or fluid retention. Recalculate your TDEE at your new lower weight to keep energy goals accurate."
        }
      ]
    },
    "hi": {
      "eyebrow": "कैलोरी योजना एवं संदर्भ",
      "title": "कैलोरी घाटा कैलकुलेटर – Calorie Deficit कैलकुलेटर Online",
      "intro": "हमारे मुफ़्त Calorie Deficit Calculator से अपने वजन लक्ष्यों के लिए दैनिक कैलोरी अंतर और TDEE की गणना करें।",
      "formulaTitle": "कैलोरी घाटा सूत्र एवं ऊर्जा गणित",
      "formulaDesc": "दैनिक कैलोरी 섭취 = TDEE - लक्ष्य घाटा | साप्ताहिक ऊर्जा अंतर = दैनिक घाटा × 7 (लगभग 7700 kcal/kg गणितीय संदर्भ)",
      "formulaCode": "Target Calories = TDEE - Daily Deficit",
      "tableTitle": "कैलोरी घाटा एवं वजन परिवर्तन संदर्भ तालिका",
      "tableRows": [
        {
          "col1": "परिदृश्य A: 250 kcal/दिन घाटा",
          "col2": "~1,750 kcal साप्ताहिक अंतर",
          "col3": "हल्का दैनिक कैलोरी अंतर संदर्भ"
        },
        {
          "col1": "परिदृश्य B: 500 kcal/दिन घाटा",
          "col2": "~3,500 kcal साप्ताहिक अंतर",
          "col3": "मानक दैनिक कैलोरी अंतर संदर्भ"
        },
        {
          "col1": "ऊर्जा संतुलन (0 kcal)",
          "col2": "0 kcal अंतर",
          "col3": "वजन स्थिरता के लिए TDEE"
        },
        {
          "col1": "श्रेणी / स्तर 4",
          "col2": "0 kcal net difference / week",
          "col3": "संदर्भ सीमा Estimated TDEE energy balance for weight stabilization"
        }
      ],
      "faqs": [
        {
          "question": "कैलोरी कैलकुलेटर दैनिक कैलोरी आवश्यकता कैसे निकालता है?",
          "answer": "यह आपके BMR और आपकी दैनिक गतिविधियों (TDEE) को मिलाकर वजन घटाने या बढ़ाने के लिए लक्षित कैलोरी तय करता है।"
        },
        {
          "question": "कैलोरी घाटा (Calorie Deficit) क्या है?",
          "answer": "अपनी बर्न की गई कैलोरी से कम कैलोरी खाना कैलोरी घाटा कहलाता है, जिससे शरीर वसा बर्न करता है।"
        },
        {
          "question": "1 किग्रा वसा घटाने के लिए कितनी कैलोरी की कमी चाहिए?",
          "answer": "लगभग 7,700 कैलोरी की कुल कमी से शरीर का 1 किग्रा वजन कम होता है।"
        },
        {
          "question": "सुरक्षित वजन घटाने की गति क्या है?",
          "answer": "प्रति सप्ताह 0.5 से 1 किग्रा वजन घटाना सुरक्षित और टिकाऊ माना जाता है।"
        },
        {
          "question": "क्या भोजन की गुणवत्ता केवल कैलोरी गिनती से अधिक महत्वपूर्ण है?",
          "answer": "हाँ, कैलोरी के साथ-साथ प्रोटीन, फाइबर और पोषक तत्वों से भरपूर संतुलित आहार आवश्यक है।"
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
      "formulaCode": "Protein Target (g) = Weight (kg) × Goal Factor (0.8 to 2.4 g/kg)",
      "tableTitle": "Daily Protein Reference Range (g/kg) Matrix by Activity & Goal",
      "tableRows": [
        {
          "col1": "Sedentary Adult Baseline",
          "col2": "0.8 g / kg body weight",
          "col3": "RDA baseline reference"
        },
        {
          "col1": "Active Endurance Athlete",
          "col2": "1.2 – 1.4 g / kg body weight",
          "col3": "Reference athletic range"
        },
        {
          "col1": "Muscle Growth (Hypertrophy)",
          "col2": "1.6 – 2.2 g / kg body weight",
          "col3": "Common athletic target for training"
        },
        {
          "col1": "Fat Loss Calorie Deficit",
          "col2": "1.8 – 2.4 g / kg body weight",
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
          "answer": "Multiply your weight in kg by your target factor. For example, a 70 kg lifter aiming for muscle growth: 70 kg × 2.0 g/kg = 140 grams of protein daily."
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
      "eyebrow": "Estándares de Referencia de Salud",
      "title": "Protein Intake Calculator & Daily Protein Reference Range Tool – Guía y Calculadora",
      "intro": "Herramienta de cálculo y referencia educativa diseñada según los estándares de salud publicados de la OMS y CDC. Calcula tus métricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "Fórmula de Referencia Estándar",
      "formulaDesc": "Calculado utilizando ecuaciones estándar validadas.",
      "formulaCode": "Protein Target (g) = Weight (kg) × Goal Factor (0.8 to 2.4 g/kg)",
      "tableTitle": "Tabla de Referencia Estándar",
      "tableRows": [
        {
          "col1": "Categoría / Nivel 1",
          "col2": "0.8 g / kg body weight",
          "col3": "Rango de referencia RDA baseline reference"
        },
        {
          "col1": "Categoría / Nivel 2",
          "col2": "1.2 – 1.4 g / kg body weight",
          "col3": "Rango de referencia Reference athletic range"
        },
        {
          "col1": "Categoría / Nivel 3",
          "col2": "1.6 – 2.2 g / kg body weight",
          "col3": "Rango de referencia Common athletic target for training"
        },
        {
          "col1": "Categoría / Nivel 4",
          "col2": "1.8 – 2.4 g / kg body weight",
          "col3": "Rango de referencia Example range referenced during calorie deficit planning"
        }
      ],
      "faqs": [
        {
          "question": "¿Cómo funciona la calculadora de protein intake calculator y qué mide?",
          "answer": "Esta calculadora evalúa tus datos personales utilizando ecuaciones validadas. Proporciona una estimación educativa para ayudarte a comprender tu estado de salud y referencias estándar."
        }
      ,
        {
          "question": "How much protein do I need per day for muscle building vs weight loss?",
          "answer": "Suggested protein ranges vary based on physical activity: 1.6 to 2.2 g/kg is commonly used for muscle building, and 1.8 to 2.4 g/kg for calorie deficit training. Individual needs vary based on age, health status, and overall diet."
        },
        {
          "question": "Cómo calculate daily protein requirement in grams per kg of body weight?",
          "answer": "Multiply your weight in kg by your target factor. For example, a 70 kg lifter aiming for muscle growth: 70 kg × 2.0 g/kg = 140 grams of protein daily."
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
      "eyebrow": "Normes de Référence de Santé",
      "title": "Protein Intake Calculator & Daily Protein Reference Range Tool – Outil de Référence",
      "intro": "Outil de calcul et de référence éducatif conçu selon les normes de santé publiées de l'OMS et du CDC. Calculez vos métriques et consultez les plages de référence.",
      "formulaTitle": "Formule de Référence Standard",
      "formulaDesc": "Calculé à l'aide d'équations standards validées.",
      "formulaCode": "Protein Target (g) = Weight (kg) × Goal Factor (0.8 to 2.4 g/kg)",
      "tableTitle": "Tableau de Référence Standard",
      "tableRows": [
        {
          "col1": "Catégorie / Niveau 1",
          "col2": "0.8 g / kg body weight",
          "col3": "Plage de référence RDA baseline reference"
        },
        {
          "col1": "Catégorie / Niveau 2",
          "col2": "1.2 – 1.4 g / kg body weight",
          "col3": "Plage de référence Reference athletic range"
        },
        {
          "col1": "Catégorie / Niveau 3",
          "col2": "1.6 – 2.2 g / kg body weight",
          "col3": "Plage de référence Common athletic target for training"
        },
        {
          "col1": "Catégorie / Niveau 4",
          "col2": "1.8 – 2.4 g / kg body weight",
          "col3": "Plage de référence Example range referenced during calorie deficit planning"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de protein intake calculator et que mesure-t-il ?",
          "answer": "Ce calculateur évalue vos données personnelles à l'aide d'équations validées. Il fournit une estimation éducative pour vous aider à comprendre vos métriques et références standards."
        }
      ,
        {
          "question": "How much protein do I need per day for muscle building vs weight loss?",
          "answer": "Suggested protein ranges vary based on physical activity: 1.6 to 2.2 g/kg is commonly used for muscle building, and 1.8 to 2.4 g/kg for calorie deficit training. Individual needs vary based on age, health status, and overall diet."
        },
        {
          "question": "Comment calculate daily protein requirement in grams per kg of body weight?",
          "answer": "Multiply your weight in kg by your target factor. For example, a 70 kg lifter aiming for muscle growth: 70 kg × 2.0 g/kg = 140 grams of protein daily."
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
      "title": "Protein Intake Calculator & Daily Protein Reference Range Tool – Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den veröffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und prüfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardmäßig validierten Gleichungen.",
      "formulaCode": "Protein Target (g) = Weight (kg) × Goal Factor (0.8 to 2.4 g/kg)",
      "tableTitle": "Standard-Referenztabelle",
      "tableRows": [
        {
          "col1": "Kategorie / Stufe 1",
          "col2": "0.8 g / kg body weight",
          "col3": "Referenzbereich RDA baseline reference"
        },
        {
          "col1": "Kategorie / Stufe 2",
          "col2": "1.2 – 1.4 g / kg body weight",
          "col3": "Referenzbereich Reference athletic range"
        },
        {
          "col1": "Kategorie / Stufe 3",
          "col2": "1.6 – 2.2 g / kg body weight",
          "col3": "Referenzbereich Common athletic target for training"
        },
        {
          "col1": "Kategorie / Stufe 4",
          "col2": "1.8 – 2.4 g / kg body weight",
          "col3": "Referenzbereich Example range referenced during calorie deficit planning"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der protein intake calculator-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre persönlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        }
      ,
        {
          "question": "How much protein do I need per day for muscle building vs weight loss?",
          "answer": "Suggested protein ranges vary based on physical activity: 1.6 to 2.2 g/kg is commonly used for muscle building, and 1.8 to 2.4 g/kg for calorie deficit training. Individual needs vary based on age, health status, and overall diet."
        },
        {
          "question": "Wie man calculate daily protein requirement in grams per kg of body weight?",
          "answer": "Multiply your weight in kg by your target factor. For example, a 70 kg lifter aiming for muscle growth: 70 kg × 2.0 g/kg = 140 grams of protein daily."
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
      "eyebrow": "건강 참조 표준 지침",
      "title": "Protein Intake 계산기 & Daily Protein Reference Range 도구 – 참조 계산기",
      "intro": "WHO 및 CDC 지침에 기반한 실시간 참고 계산기입니다. 개인별 수치를 측정하고 성인 표준 참조 범위를 확인하세요.",
      "formulaTitle": "표준 계산 공식",
      "formulaDesc": "검증된 표준 공식을 사용하여 계산됩니다.",
      "formulaCode": "Protein Target (g) = Weight (kg) × Goal Factor (0.8 to 2.4 g/kg)",
      "tableTitle": "표준 참조 진단표",
      "tableRows": [
        {
          "col1": "범주 / 단계 1",
          "col2": "0.8 g / kg body weight",
          "col3": "참조 범위 RDA baseline reference"
        },
        {
          "col1": "범주 / 단계 2",
          "col2": "1.2 – 1.4 g / kg body weight",
          "col3": "참조 범위 Reference athletic range"
        },
        {
          "col1": "범주 / 단계 3",
          "col2": "1.6 – 2.2 g / kg body weight",
          "col3": "참조 범위 Common athletic target for training"
        },
        {
          "col1": "범주 / 단계 4",
          "col2": "1.8 – 2.4 g / kg body weight",
          "col3": "참조 범위 Example range referenced during calorie deficit planning"
        }
      ],
      "faqs": [
        {
          "question": "protein intake calculator 계산기의 원리와 측정 항목은 무엇인가요?",
          "answer": "본 계산기는 검증된 공식을 사용하여 개인별 신체 지수를 산출합니다. 성인 표준 참조 범위를 바탕으로 교육적 분석 결과를 제공합니다."
        }
      ,
        {
          "question": "How much protein do I need per day for muscle building vs weight loss? 안내 및 원리",
          "answer": "Suggested protein ranges vary based on physical activity: 1.6 to 2.2 g/kg is commonly used for muscle building, and 1.8 to 2.4 g/kg for calorie deficit training. Individual needs vary based on age, health status, and overall diet."
        },
        {
          "question": " calculate daily protein requirement in grams per kg of body weight? 안내 및 원리",
          "answer": "Multiply your weight in kg by your target factor. For example, a 70 kg lifter aiming for muscle growth: 70 kg × 2.0 g/kg = 140 grams of protein daily."
        },
        {
          "question": "What are the best high-protein food sources to reach daily targets? 안내 및 원리",
          "answer": "Complete protein sources include chicken breast (31g/100g), Greek yogurt (10g/100g), eggs (6g/egg), whey protein (24g/scoop), salmon (22g/100g), tofu (8g/100g), and lentils (9g/100g cooked)."
        },
        {
          "question": "Who should consult a professional regarding protein intake targets? 안내 및 원리",
          "answer": "Sports nutrition literature provides general protein range estimates based on physical activity. Individuals with kidney disease, liver conditions, or other medical issues should discuss specific dietary protein targets with a qualified healthcare professional."
        }
      ]
    },
    "hi": {
      "eyebrow": "स्वास्थ्य संदर्भ मानक",
      "title": "Protein Intake कैलकुलेटर & Daily Protein Reference Range टूल – मुफ्त कैलकुलेटर",
      "intro": "डब्ल्यूएचओ और सीडीसी स्वास्थ्य मानकों के अनुसार निर्मित संदर्भ टूल। अपनी मेट्रिक्स की गणना करें और स्थापित स्वास्थ्य सीमाओं की समीक्षा करें।",
      "formulaTitle": "मानक संदर्भ सूत्र",
      "formulaDesc": "मानक सत्यापित समीकरणों का उपयोग करके गणना की गई।",
      "formulaCode": "Protein Target (g) = Weight (kg) × Goal Factor (0.8 to 2.4 g/kg)",
      "tableTitle": "मानक संदर्भ तालिका",
      "tableRows": [
        {
          "col1": "श्रेणी / स्तर 1",
          "col2": "0.8 g / kg body weight",
          "col3": "संदर्भ सीमा RDA baseline reference"
        },
        {
          "col1": "श्रेणी / स्तर 2",
          "col2": "1.2 – 1.4 g / kg body weight",
          "col3": "संदर्भ सीमा Reference athletic range"
        },
        {
          "col1": "श्रेणी / स्तर 3",
          "col2": "1.6 – 2.2 g / kg body weight",
          "col3": "संदर्भ सीमा Common athletic target for training"
        },
        {
          "col1": "श्रेणी / स्तर 4",
          "col2": "1.8 – 2.4 g / kg body weight",
          "col3": "संदर्भ सीमा Example range referenced during calorie deficit planning"
        }
      ],
      "faqs": [
        {
          "question": "मुझे रोजाना कितने ग्राम प्रोटीन की आवश्यकता है?",
          "answer": "एक सामान्य वयस्क को प्रति किग्रा वजन पर न्यूनतम 0.8 ग्राम, जबकि सक्रिय एथलीटों को 1.6 से 2.2 ग्राम प्रोटीन चाहिए।"
        },
        {
          "question": "मांसपेशियां बनाने के लिए प्रोटीन का दैनिक लक्ष्य क्या है?",
          "answer": "मांसपेशियों के निर्माण के लिए आपके शरीर के वजन के प्रति किग्रा पर 1.6 से 2.0 ग्राम प्रोटीन की सलाह दी जाती है।"
        },
        {
          "question": "वजन घटाते समय प्रोटीन क्यों महत्वपूर्ण है?",
          "answer": "प्रोटीन पेट को भरा रखता है और कैलोरी घाटे के दौरान मांसपेशियों के क्षय (Muscle Loss) को रोकता है।"
        },
        {
          "question": "क्या एक बार में बहुत अधिक प्रोटीन पचाना संभव है?",
          "answer": "शरीर दिनभर में विभाजित प्रोटीन का बेहतर उपयोग करता है, इसलिए 3-4 भोजन में प्रोटीन बांटना बेहतर है।"
        },
        {
          "question": "शाकाहारी स्रोतों से प्रोटीन की आवश्यकता कैसे पूरी करें?",
          "answer": "दालें, पनीर, सोया, तोफू, बेसन और व्हे प्रोटीन जैसे स्रोतों से दैनिक प्रोटीन लक्ष्य पूरा किया जा सकता है।"
        }
      ]
    }
  },
  "water-intake-calculator": {
    "en": {
      "eyebrow": "Hydration Guidelines",
      "title": "Water Intake Calculator & Daily Hydration Target Tool",
      "intro": "Calculate \"how much water should I drink daily\" with our free Water Intake Calculator. Using hydration formulas based on body weight, activity level, and climate loss, determine your estimated daily fluid target. (Note: Hydration requirements vary based on climate, sweat rate, health conditions, and pregnancy.)",
      "formulaTitle": "Water Intake by Body Weight Mathematical Equation",
      "formulaDesc": "Baseline Water (Liters) = [Weight (kg) × 35 ml] / 1000 + Physical Activity Sweat Factor (500 ml to 1000 ml per hour of exercise)",
      "formulaCode": "Water (L) = (W_kg × 0.035) + (Exercise_hrs × 0.75)",
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
          "answer": "Multiply your weight in kilograms by 35 ml (or weight in lbs by 0.5 oz). For a 70 kg person: 70 × 35 = 2,450 ml (2.45 Liters), which equals about 10 standard 250ml glasses of water."
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
      "eyebrow": "Estándares de Referencia de Salud",
      "title": "Water Intake Calculator & Daily Hydration Target Tool – Guía y Calculadora",
      "intro": "Herramienta de cálculo y referencia educativa diseñada según los estándares de salud publicados de la OMS y CDC. Calcula tus métricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "Fórmula de Referencia Estándar",
      "formulaDesc": "Calculado utilizando ecuaciones estándar validadas.",
      "formulaCode": "Water (L) = (W_kg × 0.035) + (Exercise_hrs × 0.75)",
      "tableTitle": "Tabla de Referencia Estándar",
      "tableRows": [
        {
          "col1": "Categoría / Nivel 1",
          "col2": "1.75 Liters / day",
          "col3": "Rango de referencia ~7 standard 250ml glasses"
        },
        {
          "col1": "Categoría / Nivel 2",
          "col2": "2.45 Liters / day",
          "col3": "Rango de referencia ~10 standard 250ml glasses"
        },
        {
          "col1": "Categoría / Nivel 3",
          "col2": "3.20 Liters / day",
          "col3": "Rango de referencia ~13 standard 250ml glasses"
        },
        {
          "col1": "Categoría / Nivel 4",
          "col2": "4.15 Liters / day",
          "col3": "Rango de referencia ~17 standard 250ml glasses"
        }
      ],
      "faqs": [
        {
          "question": "¿Cómo funciona la calculadora de water intake calculator y qué mide?",
          "answer": "Esta calculadora evalúa tus datos personales utilizando ecuaciones validadas. Proporciona una estimación educativa para ayudarte a comprender tu estado de salud y referencias estándar."
        }
      ,
        {
          "question": "How much water should I drink per day based on body weight?",
          "answer": "A common rule of thumb is to drink 35 ml of water per kilogram of body weight daily (or approximately 0.5 ounces per pound of body weight), plus additional fluids during workout sessions."
        },
        {
          "question": "Cómo calculate daily water intake using the weight formula?",
          "answer": "Multiply your weight in kilograms by 35 ml (or weight in lbs by 0.5 oz). For a 70 kg person: 70 × 35 = 2,450 ml (2.45 Liters), which equals about 10 standard 250ml glasses of water."
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
      "eyebrow": "Normes de Référence de Santé",
      "title": "Water Intake Calculator & Daily Hydration Target Tool – Outil de Référence",
      "intro": "Outil de calcul et de référence éducatif conçu selon les normes de santé publiées de l'OMS et du CDC. Calculez vos métriques et consultez les plages de référence.",
      "formulaTitle": "Formule de Référence Standard",
      "formulaDesc": "Calculé à l'aide d'équations standards validées.",
      "formulaCode": "Water (L) = (W_kg × 0.035) + (Exercise_hrs × 0.75)",
      "tableTitle": "Tableau de Référence Standard",
      "tableRows": [
        {
          "col1": "Catégorie / Niveau 1",
          "col2": "1.75 Liters / day",
          "col3": "Plage de référence ~7 standard 250ml glasses"
        },
        {
          "col1": "Catégorie / Niveau 2",
          "col2": "2.45 Liters / day",
          "col3": "Plage de référence ~10 standard 250ml glasses"
        },
        {
          "col1": "Catégorie / Niveau 3",
          "col2": "3.20 Liters / day",
          "col3": "Plage de référence ~13 standard 250ml glasses"
        },
        {
          "col1": "Catégorie / Niveau 4",
          "col2": "4.15 Liters / day",
          "col3": "Plage de référence ~17 standard 250ml glasses"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de water intake calculator et que mesure-t-il ?",
          "answer": "Ce calculateur évalue vos données personnelles à l'aide d'équations validées. Il fournit une estimation éducative pour vous aider à comprendre vos métriques et références standards."
        }
      ,
        {
          "question": "How much water should I drink per day based on body weight?",
          "answer": "A common rule of thumb is to drink 35 ml of water per kilogram of body weight daily (or approximately 0.5 ounces per pound of body weight), plus additional fluids during workout sessions."
        },
        {
          "question": "Comment calculate daily water intake using the weight formula?",
          "answer": "Multiply your weight in kilograms by 35 ml (or weight in lbs by 0.5 oz). For a 70 kg person: 70 × 35 = 2,450 ml (2.45 Liters), which equals about 10 standard 250ml glasses of water."
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
      "title": "Water Intake Calculator & Daily Hydration Target Tool – Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den veröffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und prüfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardmäßig validierten Gleichungen.",
      "formulaCode": "Water (L) = (W_kg × 0.035) + (Exercise_hrs × 0.75)",
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
          "answer": "Dieser Rechner wertet Ihre persönlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        }
      ,
        {
          "question": "How much water should I drink per day based on body weight?",
          "answer": "A common rule of thumb is to drink 35 ml of water per kilogram of body weight daily (or approximately 0.5 ounces per pound of body weight), plus additional fluids during workout sessions."
        },
        {
          "question": "Wie man calculate daily water intake using the weight formula?",
          "answer": "Multiply your weight in kilograms by 35 ml (or weight in lbs by 0.5 oz). For a 70 kg person: 70 × 35 = 2,450 ml (2.45 Liters), which equals about 10 standard 250ml glasses of water."
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
      "eyebrow": "건강 참조 표준 지침",
      "title": "Water Intake 계산기 & Daily Hydration Target 도구 – 참조 계산기",
      "intro": "WHO 및 CDC 지침에 기반한 실시간 참고 계산기입니다. 개인별 수치를 측정하고 성인 표준 참조 범위를 확인하세요.",
      "formulaTitle": "표준 계산 공식",
      "formulaDesc": "검증된 표준 공식을 사용하여 계산됩니다.",
      "formulaCode": "Water (L) = (W_kg × 0.035) + (Exercise_hrs × 0.75)",
      "tableTitle": "표준 참조 진단표",
      "tableRows": [
        {
          "col1": "범주 / 단계 1",
          "col2": "1.75 Liters / day",
          "col3": "참조 범위 ~7 standard 250ml glasses"
        },
        {
          "col1": "범주 / 단계 2",
          "col2": "2.45 Liters / day",
          "col3": "참조 범위 ~10 standard 250ml glasses"
        },
        {
          "col1": "범주 / 단계 3",
          "col2": "3.20 Liters / day",
          "col3": "참조 범위 ~13 standard 250ml glasses"
        },
        {
          "col1": "범주 / 단계 4",
          "col2": "4.15 Liters / day",
          "col3": "참조 범위 ~17 standard 250ml glasses"
        }
      ],
      "faqs": [
        {
          "question": "water intake calculator 계산기의 원리와 측정 항목은 무엇인가요?",
          "answer": "본 계산기는 검증된 공식을 사용하여 개인별 신체 지수를 산출합니다. 성인 표준 참조 범위를 바탕으로 교육적 분석 결과를 제공합니다."
        }
      ,
        {
          "question": "How much water should I drink per day based on body weight? 안내 및 원리",
          "answer": "A common rule of thumb is to drink 35 ml of water per kilogram of body weight daily (or approximately 0.5 ounces per pound of body weight), plus additional fluids during workout sessions."
        },
        {
          "question": " calculate daily water intake using the weight formula? 안내 및 원리",
          "answer": "Multiply your weight in kilograms by 35 ml (or weight in lbs by 0.5 oz). For a 70 kg person: 70 × 35 = 2,450 ml (2.45 Liters), which equals about 10 standard 250ml glasses of water."
        },
        {
          "question": "Does coffee, tea, or soda count toward my daily water intake? 안내 및 원리",
          "answer": "Yes, caffeinated beverages like tea and coffee contribute to fluid hydration. However, plain water remains the healthiest and most efficient source of cellular hydration."
        },
        {
          "question": "What are the early signs of dehydration and overhydration? 안내 및 원리",
          "answer": "Dehydration symptoms include dark yellow urine, fatigue, headaches, and dry mouth. Overhydration (hyponatremia) symptoms include clear urine accompanied by nausea and muscle cramps from diluted blood sodium."
        }
      ]
    },
    "hi": {
      "eyebrow": "स्वास्थ्य संदर्भ मानक",
      "title": "Water Intake कैलकुलेटर & Daily Hydration Target टूल – मुफ्त कैलकुलेटर",
      "intro": "डब्ल्यूएचओ और सीडीसी स्वास्थ्य मानकों के अनुसार निर्मित संदर्भ टूल। अपनी मेट्रिक्स की गणना करें और स्थापित स्वास्थ्य सीमाओं की समीक्षा करें।",
      "formulaTitle": "मानक संदर्भ सूत्र",
      "formulaDesc": "मानक सत्यापित समीकरणों का उपयोग करके गणना की गई।",
      "formulaCode": "Water (L) = (W_kg × 0.035) + (Exercise_hrs × 0.75)",
      "tableTitle": "मानक संदर्भ तालिका",
      "tableRows": [
        {
          "col1": "श्रेणी / स्तर 1",
          "col2": "1.75 Liters / day",
          "col3": "संदर्भ सीमा ~7 standard 250ml glasses"
        },
        {
          "col1": "श्रेणी / स्तर 2",
          "col2": "2.45 Liters / day",
          "col3": "संदर्भ सीमा ~10 standard 250ml glasses"
        },
        {
          "col1": "श्रेणी / स्तर 3",
          "col2": "3.20 Liters / day",
          "col3": "संदर्भ सीमा ~13 standard 250ml glasses"
        },
        {
          "col1": "श्रेणी / स्तर 4",
          "col2": "4.15 Liters / day",
          "col3": "संदर्भ सीमा ~17 standard 250ml glasses"
        }
      ],
      "faqs": [
        {
          "question": "मुझे रोजाना कितना पानी पीना चाहिए?",
          "answer": "सामान्य नियम के अनुसार आपके शरीर के वजन के प्रति किग्रा पर लगभग 35 मिलीलीटर पानी की आवश्यकता होती है।"
        },
        {
          "question": "व्यायाम करने पर पानी का सेवन कितना बढ़ाएं?",
          "answer": "प्रत्येक 30 मिनट के गहन व्यायाम के लिए अतिरिक्त 500 से 750 मिलीलीटर पानी पीने की सिफारिश की जाती है।"
        },
        {
          "question": "हल्के निर्जलीकरण (Dehydration) के लक्षण क्या हैं?",
          "answer": "सिरदर्द, थकान, शुष्क मुँह और गहरे रंग का पेशाब निर्जलीकरण के प्राथमिक संकेत हैं।"
        },
        {
          "question": "क्या चाय, कॉफी और फल दैनिक पानी की गिनती में आते हैं?",
          "answer": "हाँ, भोजन और तरल पदार्थों से मिलने वाला पानी कुल दैनिक जलयोजन (Hydration) में योगदान देता है।"
        },
        {
          "question": "क्या बहुत अधिक पानी पीना हानिकारक हो सकता है?",
          "answer": "अत्यधिक पानी पीने से इलेक्ट्रोलाइट असंतुलन (Hyponatremia) हो सकता है, इसलिए प्यास और गतिविधि के अनुसार पीएं।"
        }
      ]
    }
  },
  "macro-calculator": {
    "en": {
      "eyebrow": "Macronutrient Reference",
      "title": "Macro Calculator – Estimated Daily Macro Split",
      "intro": "Calculate your estimated daily carb, protein, and fat targets in grams with our free Macro Calculator to explore an example macronutrient ratio for meal planning. There is no single optimal macronutrient ratio that applies universally.",
      "formulaTitle": "Macro Caloric Conversion Formulas",
      "formulaDesc": "Carbohydrate Grams = (Total Calories × Carb %) / 4 | Protein Grams = (Total Calories × Protein %) / 4 | Fat Grams = (Total Calories × Fat %) / 9",
      "formulaCode": "Carbs = (kcal × C%) / 4 | Protein = (kcal × P%) / 4 | Fat = (kcal × F%) / 9",
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
      "eyebrow": "Estándares de Referencia de Salud",
      "title": "Macro Calculator – Estimated Daily Macro Split – Guía y Calculadora",
      "intro": "Herramienta de cálculo y referencia educativa diseñada según los estándares de salud publicados de la OMS y CDC. Calcula tus métricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "Fórmula de Referencia Estándar",
      "formulaDesc": "Calculado utilizando ecuaciones estándar validadas.",
      "formulaCode": "Carbs = (kcal × C%) / 4 | Protein = (kcal × P%) / 4 | Fat = (kcal × F%) / 9",
      "tableTitle": "Tabla de Referencia Estándar",
      "tableRows": [
        {
          "col1": "Categoría / Nivel 1",
          "col2": "Balanced: 40% | Low-Carb: 20% | High-Protein: 35%",
          "col3": "Rango de referencia Example fuel source allocation"
        },
        {
          "col1": "Categoría / Nivel 2",
          "col2": "Balanced: 30% | Low-Carb: 40% | High-Protein: 40%",
          "col3": "Rango de referencia Example protein allocation"
        },
        {
          "col1": "Categoría / Nivel 3",
          "col2": "Balanced: 30% | Low-Carb: 40% | High-Protein: 25%",
          "col3": "Rango de referencia Example dietary fat allocation"
        }
      ],
      "faqs": [
        {
          "question": "¿Qué son los macronutrientes y por qué calcularlos?",
          "answer": "Los macronutrientes (proteínas, carbohidratos y grasas) proporcionan las calorías que alimentan tu cuerpo y determinan tu composición corporal."
        },
        {
          "question": "¿Cómo se distribuyen los gramos de proteínas, carbohidratos y grasas?",
          "answer": "Las proteínas y los carbohidratos aportan 4 kcal por gramo, mientras que las grasas aportan 9 kcal por gramo."
        },
        {
          "question": "¿Cuál es la mejor proporción de macros para perder grasa?",
          "answer": "Una distribución equilibrada para perder grasa suele ser 35% proteínas, 35% carbohidratos y 30% grasas."
        },
        {
          "question": "¿Es obligatorio contar macros todos los días?",
          "answer": "No es estrictamente obligatorio, pero registrar tus macros durante unas semanas te ayuda a comprender mejor tus hábitos alimenticios."
        },
        {
          "question": "¿Cómo adapto mis macros a una dieta baja en carbohidratos?",
          "answer": "Puedes ajustar los carbohidratos al 20% de tus calorías totales e incrementar las proteínas y grasas saludables adecuadamente."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de Référence de Santé",
      "title": "Macro Calculator – Estimated Daily Macro Split – Outil de Référence",
      "intro": "Outil de calcul et de référence éducatif conçu selon les normes de santé publiées de l'OMS et du CDC. Calculez vos métriques et consultez les plages de référence.",
      "formulaTitle": "Formule de Référence Standard",
      "formulaDesc": "Calculé à l'aide d'équations standards validées.",
      "formulaCode": "Carbs = (kcal × C%) / 4 | Protein = (kcal × P%) / 4 | Fat = (kcal × F%) / 9",
      "tableTitle": "Tableau de Référence Standard",
      "tableRows": [
        {
          "col1": "Catégorie / Niveau 1",
          "col2": "Balanced: 40% | Low-Carb: 20% | High-Protein: 35%",
          "col3": "Plage de référence Example fuel source allocation"
        },
        {
          "col1": "Catégorie / Niveau 2",
          "col2": "Balanced: 30% | Low-Carb: 40% | High-Protein: 40%",
          "col3": "Plage de référence Example protein allocation"
        },
        {
          "col1": "Catégorie / Niveau 3",
          "col2": "Balanced: 30% | Low-Carb: 40% | High-Protein: 25%",
          "col3": "Plage de référence Example dietary fat allocation"
        }
      ],
      "faqs": [
        {
          "question": "Que sont les macronutriments et pourquoi les calculer ?",
          "answer": "Les macronutriments (protéines, glucides, lipides) fournissent l'énergie et façonnent votre composition corporelle."
        },
        {
          "question": "Comment convertir les calories en grammes de macronutriments ?",
          "answer": "Les protéines et glucides fournissent 4 kcal/g, tandis que les lipides fournissent 9 kcal/g."
        },
        {
          "question": "Quelle est la meilleure répartition pour la sèche ?",
          "answer": "Une répartition courante pour la sèche consiste en 35 % de protéines, 35 % de glucides et 30 % de lipides."
        },
        {
          "question": "Doit-on suivre ses macros quotidiennement ?",
          "answer": "Le suivi des macros est un outil pédagogique puissant pour structurer ses apports selon ses objectifs sportifs."
        },
        {
          "question": "Peut-on adapter le calculateur pour un régime low-carb ?",
          "answer": "Oui, vous pouvez régler la part des glucides à 20 % et augmenter proportionnellement les protéines et lipides."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "Macro Calculator – Estimated Daily Macro Split – Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den veröffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und prüfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardmäßig validierten Gleichungen.",
      "formulaCode": "Carbs = (kcal × C%) / 4 | Protein = (kcal × P%) / 4 | Fat = (kcal × F%) / 9",
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
          "question": "Was sind Makronährstoffe?",
          "answer": "Makronährstoffe (Proteine, Kohlenhydrate, Fette) liefern dem Körper Energie und Baustoffe für Muskeln und Gewebe."
        },
        {
          "question": "Wie werden Makros in Gramm umgerechnet?",
          "answer": "Proteine und Kohlenhydrate enthalten jeweils 4 kcal pro Gramm, während Fett 9 kcal pro Gramm liefert."
        },
        {
          "question": "Welche Makroverteilung eignet sich zum Fettabbau?",
          "answer": "Eine bewährte Aufteilung für den Fettabbau liegt oft bei 35 % Protein, 35 % Kohlenhydraten und 30 % Fett."
        },
        {
          "question": "Muss man Makros dauerhaft tracken?",
          "answer": "Ein temporäres Tracking hilft, ein besseres Gefühl für Nährstoffdichten und Portionsgrößen zu entwickeln."
        },
        {
          "question": "Wie funktioniert die Verteilung bei einer Low-Carb Ernährung?",
          "answer": "Bei Low-Carb wird der Kohlenhydratanteil auf ca. 20 % gesenkt und der Anteil an Protein und gesunden Fetten erhöht."
        }
      ]
    },
    "ko": {
      "eyebrow": "건강 참조 표준 지침",
      "title": "Macro 계산기 – Estimated Daily Macro Split – 참조 계산기",
      "intro": "WHO 및 CDC 지침에 기반한 실시간 참고 계산기입니다. 개인별 수치를 측정하고 성인 표준 참조 범위를 확인하세요.",
      "formulaTitle": "표준 계산 공식",
      "formulaDesc": "검증된 표준 공식을 사용하여 계산됩니다.",
      "formulaCode": "Carbs = (kcal × C%) / 4 | Protein = (kcal × P%) / 4 | Fat = (kcal × F%) / 9",
      "tableTitle": "표준 참조 진단표",
      "tableRows": [
        {
          "col1": "범주 / 단계 1",
          "col2": "Balanced: 40% | Low-Carb: 20% | High-Protein: 35%",
          "col3": "참조 범위 Example fuel source allocation"
        },
        {
          "col1": "범주 / 단계 2",
          "col2": "Balanced: 30% | Low-Carb: 40% | High-Protein: 40%",
          "col3": "참조 범위 Example protein allocation"
        },
        {
          "col1": "범주 / 단계 3",
          "col2": "Balanced: 30% | Low-Carb: 40% | High-Protein: 25%",
          "col3": "참조 범위 Example dietary fat allocation"
        }
      ],
      "faqs": [
        {
          "question": "영양소(매크로) 계산이란 무엇인가요?",
          "answer": "탄수화물, 단백질, 지방의 일일 섭취 비율을 목표 칼로리에 맞게 분배하여 신체 조성을 관리하는 방법입니다."
        },
        {
          "question": "각 영양소의 칼로리 환산 기준은 어떻게 되나요?",
          "answer": "단백질과 탄수화물은 1g당 4 kcal, 지방은 1g당 9 kcal의 에너지를 공급합니다."
        },
        {
          "question": "체지방 감량을 위한 권장 매크로 비율은 무엇인가요?",
          "answer": "일반적인 체지방 감량 목표에는 단백질 35%, 탄수화물 35%, 지방 30%의 분배 비율이 효과적입니다."
        },
        {
          "question": "매일 매크로를 정확히 기록해야 하나요?",
          "answer": "매일 식단을 기록하면 본인의 균형 잡힌 영양 섭취 습관을 이해하고 유지하는 데 큰 도움이 됩니다."
        },
        {
          "question": "저탄수화물 식단에는 매크로를 어떻게 적용하나요?",
          "answer": "탄수화물 비율을 20% 수준으로 낮추고 단백질과 건강한 지방 비율을 늘려 설정할 수 있습니다."
        }
      ]
    },
    "hi": {
      "eyebrow": "स्वास्थ्य संदर्भ मानक",
      "title": "Macro कैलकुलेटर – Estimated Daily Macro Split – मुफ्त कैलकुलेटर",
      "intro": "डब्ल्यूएचओ और सीडीसी स्वास्थ्य मानकों के अनुसार निर्मित संदर्भ टूल। अपनी मेट्रिक्स की गणना करें और स्थापित स्वास्थ्य सीमाओं की समीक्षा करें।",
      "formulaTitle": "मानक संदर्भ सूत्र",
      "formulaDesc": "मानक सत्यापित समीकरणों का उपयोग करके गणना की गई।",
      "formulaCode": "Carbs = (kcal × C%) / 4 | Protein = (kcal × P%) / 4 | Fat = (kcal × F%) / 9",
      "tableTitle": "मानक संदर्भ तालिका",
      "tableRows": [
        {
          "col1": "श्रेणी / स्तर 1",
          "col2": "Balanced: 40% | Low-Carb: 20% | High-Protein: 35%",
          "col3": "संदर्भ सीमा Example fuel source allocation"
        },
        {
          "col1": "श्रेणी / स्तर 2",
          "col2": "Balanced: 30% | Low-Carb: 40% | High-Protein: 40%",
          "col3": "संदर्भ सीमा Example protein allocation"
        },
        {
          "col1": "श्रेणी / स्तर 3",
          "col2": "Balanced: 30% | Low-Carb: 40% | High-Protein: 25%",
          "col3": "संदर्भ सीमा Example dietary fat allocation"
        }
      ],
      "faqs": [
        {
          "question": "मैक्रोन्यूट्रिएंट्स (Macros) क्या हैं और इन्हें क्यों गिनें?",
          "answer": "मैक्रोन्यूट्रिएंट्स (प्रोटीन, कार्बोहाइड्रेट और वसा) शरीर को ऊर्जा प्रदान करते हैं और आपकी शारीरिक संरचना को निर्धारित करते हैं।"
        },
        {
          "question": "कैलोरी से ग्राम में रूपांतरण कैसे होता है?",
          "answer": "प्रोटीन और कार्बोहाइड्रेट प्रति ग्राम 4 kcal प्रदान करते हैं, जबकि वसा प्रति ग्राम 9 kcal प्रदान करती है।"
        },
        {
          "question": "वसा घटाने के लिए सबसे अच्छा मैक्रो अनुपात क्या है?",
          "answer": "वजन और वसा घटाने के लिए 35% प्रोटीन, 35% कार्बोहाइड्रेट और 30% वसा का अनुपात काफी लोकप्रिय है।"
        },
        {
          "question": "क्या रोज़ाना मैक्रोज़ ट्रैक करना ज़रूरी है?",
          "answer": "रोज़ाना मैक्रोज़ ट्रैक करने से आपको अपनी आहार संबंधी आदतों और पोषण संतुलन का सही अंदाजा मिलता है।"
        },
        {
          "question": "कम कार्ब (Low-Carb) डाइट के लिए मैक्रोज़ कैसे सेट करें?",
          "answer": "आप कार्बोहाइड्रेट को 20% तक कम कर सकते हैं और प्रोटीन तथा स्वस्थ वसा के अनुपात को बढ़ा सकते हैं।"
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
          "col2": "Men: 0.90 – 0.99 | Women: 0.80 – 0.84",
          "col3": "Moderate abdominal central fat reference window"
        },
        {
          "col1": "Higher Reference Category",
          "col2": "Men: ≥ 1.00 | Women: ≥ 0.85",
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
      "eyebrow": "Estándares de Referencia de Salud",
      "title": "Waist to Hip Ratio Calculator & WHR Reference Tool – Guía y Calculadora",
      "intro": "Herramienta de cálculo y referencia educativa diseñada según los estándares de salud publicados de la OMS y CDC. Calcula tus métricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "Fórmula de Referencia Estándar",
      "formulaDesc": "Calculado utilizando ecuaciones estándar validadas.",
      "formulaCode": "WHR = Waist / Hip",
      "tableTitle": "Tabla de Referencia Estándar",
      "tableRows": [
        {
          "col1": "Categoría / Nivel 1",
          "col2": "Men: < 0.90 | Women: < 0.80",
          "col3": "Rango de referencia Subcutaneous fat distribution reference window"
        },
        {
          "col1": "Categoría / Nivel 2",
          "col2": "Men: 0.90 – 0.99 | Women: 0.80 – 0.84",
          "col3": "Rango de referencia Moderate abdominal central fat reference window"
        },
        {
          "col1": "Categoría / Nivel 3",
          "col2": "Men: ≥ 1.00 | Women: ≥ 0.85",
          "col3": "Rango de referencia Higher central fat distribution reference window; additional screening context"
        }
      ],
      "faqs": [
        {
          "question": "¿Cómo funciona la calculadora de waist to hip ratio calculator y qué mide?",
          "answer": "Esta calculadora evalúa tus datos personales utilizando ecuaciones validadas. Proporciona una estimación educativa para ayudarte a comprender tu estado de salud y referencias estándar."
        }
      ,
        {
          "question": "Cómo calculate waist to hip ratio with the WHR formula?",
          "answer": "Divide your waist circumference in inches or cm by your hip circumference in the same units. For example, a 32-inch waist divided by a 40-inch hip equals a Waist to Hip Ratio of 0.80."
        },
        {
          "question": "¿Qué es a healthy waist to hip ratio for men and women according to WHO?",
          "answer": "According to World Health Organization (WHO) reference guidelines, a ratio below 0.90 for men and below 0.80 for women is standard for lower relative abdominal fat."
        },
        {
          "question": "Por qué es waist to hip ratio a useful indicator alongside BMI?",
          "answer": "While BMI measures total body mass relative to height, WHR is an anthropometric ratio that provides context about body-fat distribution; it does not directly measure visceral fat or diagnose cardiovascular disease."
        },
        {
          "question": "¿Cómo medir con precisión la circunferencia de cintura y cadera para la calculadora de índice cintura-cadera?",
          "answer": "Stand upright and exhale gently. Wrap a flexible tape measure around your waist horizontally at the narrowest point (or at navel level). Measure your hips at the maximum protrusion of your buttocks."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de Référence de Santé",
      "title": "Waist to Hip Ratio Calculator & WHR Reference Tool – Outil de Référence",
      "intro": "Outil de calcul et de référence éducatif conçu selon les normes de santé publiées de l'OMS et du CDC. Calculez vos métriques et consultez les plages de référence.",
      "formulaTitle": "Formule de Référence Standard",
      "formulaDesc": "Calculé à l'aide d'équations standards validées.",
      "formulaCode": "WHR = Waist / Hip",
      "tableTitle": "Tableau de Référence Standard",
      "tableRows": [
        {
          "col1": "Catégorie / Niveau 1",
          "col2": "Men: < 0.90 | Women: < 0.80",
          "col3": "Plage de référence Subcutaneous fat distribution reference window"
        },
        {
          "col1": "Catégorie / Niveau 2",
          "col2": "Men: 0.90 – 0.99 | Women: 0.80 – 0.84",
          "col3": "Plage de référence Moderate abdominal central fat reference window"
        },
        {
          "col1": "Catégorie / Niveau 3",
          "col2": "Men: ≥ 1.00 | Women: ≥ 0.85",
          "col3": "Plage de référence Higher central fat distribution reference window; additional screening context"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de waist to hip ratio calculator et que mesure-t-il ?",
          "answer": "Ce calculateur évalue vos données personnelles à l'aide d'équations validées. Il fournit une estimation éducative pour vous aider à comprendre vos métriques et références standards."
        }
      ,
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
          "question": "Comment mesurer avec précision le tour de taille et de hanches pour le calculateur RTH ?",
          "answer": "Stand upright and exhale gently. Wrap a flexible tape measure around your waist horizontally at the narrowest point (or at navel level). Measure your hips at the maximum protrusion of your buttocks."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "Waist to Hip Ratio Calculator & WHR Reference Tool – Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den veröffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und prüfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardmäßig validierten Gleichungen.",
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
          "col2": "Men: 0.90 – 0.99 | Women: 0.80 – 0.84",
          "col3": "Referenzbereich Moderate abdominal central fat reference window"
        },
        {
          "col1": "Kategorie / Stufe 3",
          "col2": "Men: ≥ 1.00 | Women: ≥ 0.85",
          "col3": "Referenzbereich Higher central fat distribution reference window; additional screening context"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der waist to hip ratio calculator-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre persönlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        }
      ,
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
          "question": "Wie misst man das Taille-Hüft-Verhältnis (WHR) genau?",
          "answer": "Stand upright and exhale gently. Wrap a flexible tape measure around your waist horizontally at the narrowest point (or at navel level). Measure your hips at the maximum protrusion of your buttocks."
        }
      ]
    },
    "ko": {
      "eyebrow": "건강 참조 표준 지침",
      "title": "Waist to Hip Ratio 계산기 & WHR Reference 도구 – 참조 계산기",
      "intro": "WHO 및 CDC 지침에 기반한 실시간 참고 계산기입니다. 개인별 수치를 측정하고 성인 표준 참조 범위를 확인하세요.",
      "formulaTitle": "표준 계산 공식",
      "formulaDesc": "검증된 표준 공식을 사용하여 계산됩니다.",
      "formulaCode": "WHR = Waist / Hip",
      "tableTitle": "표준 참조 진단표",
      "tableRows": [
        {
          "col1": "범주 / 단계 1",
          "col2": "Men: < 0.90 | Women: < 0.80",
          "col3": "참조 범위 Subcutaneous fat distribution reference window"
        },
        {
          "col1": "범주 / 단계 2",
          "col2": "Men: 0.90 – 0.99 | Women: 0.80 – 0.84",
          "col3": "참조 범위 Moderate abdominal central fat reference window"
        },
        {
          "col1": "범주 / 단계 3",
          "col2": "Men: ≥ 1.00 | Women: ≥ 0.85",
          "col3": "참조 범위 Higher central fat distribution reference window; additional screening context"
        }
      ],
      "faqs": [
        {
          "question": "waist to hip ratio calculator 계산기의 원리와 측정 항목은 무엇인가요?",
          "answer": "본 계산기는 검증된 공식을 사용하여 개인별 신체 지수를 산출합니다. 성인 표준 참조 범위를 바탕으로 교육적 분석 결과를 제공합니다."
        }
      ,
        {
          "question": " calculate waist to hip ratio with the WHR formula? 안내 및 원리",
          "answer": "Divide your waist circumference in inches or cm by your hip circumference in the same units. For example, a 32-inch waist divided by a 40-inch hip equals a Waist to Hip Ratio of 0.80."
        },
        {
          "question": " a healthy waist to hip ratio for men and women according to WHO? 안내 및 원리",
          "answer": "According to World Health Organization (WHO) reference guidelines, a ratio below 0.90 for men and below 0.80 for women is standard for lower relative abdominal fat."
        },
        {
          "question": "Why is waist to hip ratio a useful indicator alongside BMI? 안내 및 원리",
          "answer": "While BMI measures total body mass relative to height, WHR is an anthropometric ratio that provides context about body-fat distribution; it does not directly measure visceral fat or diagnose cardiovascular disease."
        },
        {
          "question": "허리-둘레 비율(WHR)을 정확하게 측정하는 방법은 무엇인가요?",
          "answer": "Stand upright and exhale gently. Wrap a flexible tape measure around your waist horizontally at the narrowest point (or at navel level). Measure your hips at the maximum protrusion of your buttocks."
        }
      ]
    },
    "hi": {
      "eyebrow": "स्वास्थ्य संदर्भ मानक",
      "title": "Waist to Hip Ratio कैलकुलेटर & WHR Reference टूल – मुफ्त कैलकुलेटर",
      "intro": "डब्ल्यूएचओ और सीडीसी स्वास्थ्य मानकों के अनुसार निर्मित संदर्भ टूल। अपनी मेट्रिक्स की गणना करें और स्थापित स्वास्थ्य सीमाओं की समीक्षा करें।",
      "formulaTitle": "मानक संदर्भ सूत्र",
      "formulaDesc": "मानक सत्यापित समीकरणों का उपयोग करके गणना की गई।",
      "formulaCode": "WHR = Waist / Hip",
      "tableTitle": "मानक संदर्भ तालिका",
      "tableRows": [
        {
          "col1": "श्रेणी / स्तर 1",
          "col2": "Men: < 0.90 | Women: < 0.80",
          "col3": "संदर्भ सीमा Subcutaneous fat distribution reference window"
        },
        {
          "col1": "श्रेणी / स्तर 2",
          "col2": "Men: 0.90 – 0.99 | Women: 0.80 – 0.84",
          "col3": "संदर्भ सीमा Moderate abdominal central fat reference window"
        },
        {
          "col1": "श्रेणी / स्तर 3",
          "col2": "Men: ≥ 1.00 | Women: ≥ 0.85",
          "col3": "संदर्भ सीमा Higher central fat distribution reference window; additional screening context"
        }
      ],
      "faqs": [
        {
          "question": "कमर से कूल्हे का अनुपात (WHR) क्या मापता है?",
          "answer": "WHR कमर के आकार को कूल्हे के आकार से विभाजित करके शरीर में वसा के वितरण और विसरल वसा का मूल्यांकन करता है।"
        },
        {
          "question": "पुरुषों और महिलाओं के लिए जोखिम भरा WHR क्या है?",
          "answer": "डब्ल्यूएचओ के अनुसार पुरुषों में WHR ≥ 1.0 और महिलाओं में WHR ≥ 0.85 उच्च चयापचय जोखिम को दर्शाता है।"
        },
        {
          "question": "एप्पल और पियर बॉडी शेप में क्या अंतर है?",
          "answer": "एप्पल शेप में कमर पर अधिक वसा होती है (उच्च जोखिम), जबकि पियर शेप में कूल्हों पर वसा होती है (कम जोखिम)।"
        },
        {
          "question": "कमर और कूल्हे की सही माप कैसे लें?",
          "answer": "कमर को नाभि के ठीक ऊपर और कूल्हे को सबसे चौड़े हिस्से पर टेप को सीधा रखकर मापें।"
        },
        {
          "question": "WHR बीएमआई से बेहतर क्यों माना जाता है?",
          "answer": "WHR पेट की आंतरिक खतरनाक वसा (Visceral Fat) को अलग से पहचानता है, जो बीएमआई नहीं कर पाता।"
        }
      ]
    }
  },
  "body-surface-area-calculator": {
    "en": {
      "eyebrow": "Body Surface Area Reference",
      "title": "Body Surface Area Calculator — Mosteller & Du Bois Reference Equations",
      "intro": "BSA is an estimated body-surface-area value calculated from height and weight. Some medical research protocols use BSA as one input, but this calculator does not provide medication doses or treatment recommendations.",
      "formulaTitle": "Mosteller & Du Bois BSA Equations",
      "formulaDesc": "Mosteller BSA (m²) = √ [ Height (cm) × Weight (kg) / 3600 ] | Du Bois BSA (m²) = 0.007184 × Height (cm)^0.725 × Weight (kg)^0.425",
      "formulaCode": "BSA (m²) = √ [ (Height cm × Weight kg) / 3600 ]",
      "tableTitle": "Body Surface Area (m²) Adult & Population Reference Ranges",
      "tableRows": [
        {
          "col1": "Infants (0–12 months)",
          "col2": "0.25 m² – 0.35 m²",
          "col3": "Infant population reference range"
        },
        {
          "col1": "Children (1–12 years)",
          "col2": "0.50 m² – 1.07 m²",
          "col3": "Child population reference range"
        },
        {
          "col1": "Adult Women Average",
          "col2": "1.60 m²",
          "col3": "Standard adult female population average"
        },
        {
          "col1": "Adult Men Average",
          "col2": "1.90 m²",
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
          "answer": "The Mosteller equation multiplies height in cm by weight in kg, divides by 3600, and takes the square root: BSA = √ (Height × Weight / 3600)."
        },
        {
          "question": "What is the average body surface area for adults?",
          "answer": "The average estimated body surface area is approximately 1.60 m² for adult women and 1.90 m² for adult men."
        }
      ]
    },
    "es": {
      "eyebrow": "Estándares de Referencia de Salud",
      "title": "Body Surface Area Calculator — Mosteller & Du Bois Reference Equations – Guía y Calculadora",
      "intro": "Herramienta de cálculo y referencia educativa diseñada según los estándares de salud publicados de la OMS y CDC. Calcula tus métricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "Fórmula de Referencia Estándar",
      "formulaDesc": "Calculado utilizando ecuaciones estándar validadas.",
      "formulaCode": "BSA (m²) = √ [ (Height cm × Weight kg) / 3600 ]",
      "tableTitle": "Tabla de Referencia Estándar",
      "tableRows": [
        {
          "col1": "Categoría / Nivel 1",
          "col2": "0.25 m² – 0.35 m²",
          "col3": "Rango de referencia Infant population rango de referencia"
        },
        {
          "col1": "Categoría / Nivel 2",
          "col2": "0.50 m² – 1.07 m²",
          "col3": "Rango de referencia Child population rango de referencia"
        },
        {
          "col1": "Categoría / Nivel 3",
          "col2": "1.60 m²",
          "col3": "Rango de referencia Standard adult female population average"
        },
        {
          "col1": "Categoría / Nivel 4",
          "col2": "1.90 m²",
          "col3": "Rango de referencia Standard adult male population average"
        }
      ],
      "faqs": [
        {
          "question": "¿Cómo funciona la calculadora de body surface area calculator y qué mide?",
          "answer": "Esta calculadora evalúa tus datos personales utilizando ecuaciones validadas. Proporciona una estimación educativa para ayudarte a comprender tu estado de salud y referencias estándar."
        }
      ,
        {
          "question": "¿Cómo se BSA calculated using the Mosteller equation?",
          "answer": "The Mosteller equation multiplies height in cm by weight in kg, divides by 3600, and takes the square root: BSA = √ (Height × Weight / 3600)."
        },
        {
          "question": "¿Qué es el average body surface area for adults?",
          "answer": "The average estimated body surface area is approximately 1.60 m² for adult women and 1.90 m² for adult men."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de Référence de Santé",
      "title": "Body Surface Area Calculator — Mosteller & Du Bois Reference Equations – Outil de Référence",
      "intro": "Outil de calcul et de référence éducatif conçu selon les normes de santé publiées de l'OMS et du CDC. Calculez vos métriques et consultez les plages de référence.",
      "formulaTitle": "Formule de Référence Standard",
      "formulaDesc": "Calculé à l'aide d'équations standards validées.",
      "formulaCode": "BSA (m²) = √ [ (Height cm × Weight kg) / 3600 ]",
      "tableTitle": "Tableau de Référence Standard",
      "tableRows": [
        {
          "col1": "Catégorie / Niveau 1",
          "col2": "0.25 m² – 0.35 m²",
          "col3": "Plage de référence Infant population plage de référence"
        },
        {
          "col1": "Catégorie / Niveau 2",
          "col2": "0.50 m² – 1.07 m²",
          "col3": "Plage de référence Child population plage de référence"
        },
        {
          "col1": "Catégorie / Niveau 3",
          "col2": "1.60 m²",
          "col3": "Plage de référence Standard adult female population average"
        },
        {
          "col1": "Catégorie / Niveau 4",
          "col2": "1.90 m²",
          "col3": "Plage de référence Standard adult male population average"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de body surface area calculator et que mesure-t-il ?",
          "answer": "Ce calculateur évalue vos données personnelles à l'aide d'équations validées. Il fournit une estimation éducative pour vous aider à comprendre vos métriques et références standards."
        }
      ,
        {
          "question": "Comment est BSA calculated using the Mosteller equation?",
          "answer": "The Mosteller equation multiplies height in cm by weight in kg, divides by 3600, and takes the square root: BSA = √ (Height × Weight / 3600)."
        },
        {
          "question": "Qu'est-ce que le average body surface area for adults?",
          "answer": "The average estimated body surface area is approximately 1.60 m² for adult women and 1.90 m² for adult men."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "Body Surface Area Calculator — Mosteller & Du Bois Reference Equations – Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den veröffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und prüfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardmäßig validierten Gleichungen.",
      "formulaCode": "BSA (m²) = √ [ (Height cm × Weight kg) / 3600 ]",
      "tableTitle": "Standard-Referenztabelle",
      "tableRows": [
        {
          "col1": "Kategorie / Stufe 1",
          "col2": "0.25 m² – 0.35 m²",
          "col3": "Referenzbereich Infant population Referenzbereich"
        },
        {
          "col1": "Kategorie / Stufe 2",
          "col2": "0.50 m² – 1.07 m²",
          "col3": "Referenzbereich Child population Referenzbereich"
        },
        {
          "col1": "Kategorie / Stufe 3",
          "col2": "1.60 m²",
          "col3": "Referenzbereich Standard adult female population average"
        },
        {
          "col1": "Kategorie / Stufe 4",
          "col2": "1.90 m²",
          "col3": "Referenzbereich Standard adult male population average"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der body surface area calculator-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre persönlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        }
      ,
        {
          "question": "Wie wird BSA calculated using the Mosteller equation?",
          "answer": "The Mosteller equation multiplies height in cm by weight in kg, divides by 3600, and takes the square root: BSA = √ (Height × Weight / 3600)."
        },
        {
          "question": "Was ist der average body surface area for adults?",
          "answer": "The average estimated body surface area is approximately 1.60 m² for adult women and 1.90 m² for adult men."
        }
      ]
    },
    "ko": {
      "eyebrow": "건강 참조 표준 지침",
      "title": "Body Surface Area 계산기 — Mosteller & Du Bois Reference Equations – 참조 계산기",
      "intro": "WHO 및 CDC 지침에 기반한 실시간 참고 계산기입니다. 개인별 수치를 측정하고 성인 표준 참조 범위를 확인하세요.",
      "formulaTitle": "표준 계산 공식",
      "formulaDesc": "검증된 표준 공식을 사용하여 계산됩니다.",
      "formulaCode": "BSA (m²) = √ [ (Height cm × Weight kg) / 3600 ]",
      "tableTitle": "표준 참조 진단표",
      "tableRows": [
        {
          "col1": "범주 / 단계 1",
          "col2": "0.25 m² – 0.35 m²",
          "col3": "참조 범위 Infant population 참조 범위"
        },
        {
          "col1": "범주 / 단계 2",
          "col2": "0.50 m² – 1.07 m²",
          "col3": "참조 범위 Child population 참조 범위"
        },
        {
          "col1": "범주 / 단계 3",
          "col2": "1.60 m²",
          "col3": "참조 범위 Standard adult female population average"
        },
        {
          "col1": "범주 / 단계 4",
          "col2": "1.90 m²",
          "col3": "참조 범위 Standard adult male population average"
        }
      ],
      "faqs": [
        {
          "question": "body surface area calculator 계산기의 원리와 측정 항목은 무엇인가요?",
          "answer": "본 계산기는 검증된 공식을 사용하여 개인별 신체 지수를 산출합니다. 성인 표준 참조 범위를 바탕으로 교육적 분석 결과를 제공합니다."
        }
      ,
        {
          "question": " BSA calculated using the Mosteller equation? 안내 및 원리",
          "answer": "The Mosteller equation multiplies height in cm by weight in kg, divides by 3600, and takes the square root: BSA = √ (Height × Weight / 3600)."
        },
        {
          "question": " average body surface area for adults? 안내 및 원리",
          "answer": "The average estimated body surface area is approximately 1.60 m² for adult women and 1.90 m² for adult men."
        }
      ]
    },
    "hi": {
      "eyebrow": "स्वास्थ्य संदर्भ मानक",
      "title": "Body Surface Area कैलकुलेटर — Mosteller & Du Bois Reference Equations – मुफ्त कैलकुलेटर",
      "intro": "डब्ल्यूएचओ और सीडीसी स्वास्थ्य मानकों के अनुसार निर्मित संदर्भ टूल। अपनी मेट्रिक्स की गणना करें और स्थापित स्वास्थ्य सीमाओं की समीक्षा करें।",
      "formulaTitle": "मानक संदर्भ सूत्र",
      "formulaDesc": "मानक सत्यापित समीकरणों का उपयोग करके गणना की गई।",
      "formulaCode": "BSA (m²) = √ [ (Height cm × Weight kg) / 3600 ]",
      "tableTitle": "मानक संदर्भ तालिका",
      "tableRows": [
        {
          "col1": "श्रेणी / स्तर 1",
          "col2": "0.25 m² – 0.35 m²",
          "col3": "संदर्भ सीमा Infant population संदर्भ सीमा"
        },
        {
          "col1": "श्रेणी / स्तर 2",
          "col2": "0.50 m² – 1.07 m²",
          "col3": "संदर्भ सीमा Child population संदर्भ सीमा"
        },
        {
          "col1": "श्रेणी / स्तर 3",
          "col2": "1.60 m²",
          "col3": "संदर्भ सीमा Standard adult female population average"
        },
        {
          "col1": "श्रेणी / स्तर 4",
          "col2": "1.90 m²",
          "col3": "संदर्भ सीमा Standard adult male population average"
        }
      ],
      "faqs": [
        {
          "question": "बॉडी सरफेस एरिया (BSA) क्या है?",
          "answer": "BSA आपके शरीर के कुल बाहरी सतह क्षेत्र का वर्ग मीटर (m²) में अनुमानित माप है।"
        },
        {
          "question": "मोस्टेलर (Mosteller) सूत्र कैसे काम करता है?",
          "answer": "मोस्टेलर सूत्र BSA = √[ (ऊंचाई सेमी × वजन किग्रा) / 3600 ] का उपयोग करके तुरंत वर्ग मीटर निकालता है।"
        },
        {
          "question": "BSA का उपयोग किन क्षेत्रों में होता है?",
          "answer": "BSA का उपयोग मुख्य रूप से फिजियोलॉजी, मेडिकल स्केलिंग और नैदानिक अनुसंधानों में किया जाता है।"
        },
        {
          "question": "औसत वयस्क का BSA कितना होता है?",
          "answer": "एक औसत वयस्क पुरुष का BSA लगभग 1.9 m² और वयस्क महिला का लगभग 1.6 m² होता है।"
        },
        {
          "question": "क्या इस कैलकुलेटर का उपयोग दवा की खुराक के लिए कर सकते हैं?",
          "answer": "नहीं, यह एक शैक्षणिक कैलकुलेटर है। दवा की खुराक केवल योग्य चिकित्सक द्वारा तय की जानी चाहिए।"
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
      "formulaDesc": "Max HR = 220 - Age in years (commonly used estimate) | Heart Rate Reserve (HRR) = Max HR - Resting HR | Target HR = Resting HR + [HRR × % Intensity]",
      "formulaCode": "Target HR = RHR + [(220 - Age - RHR) × % Intensity]",
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
      "eyebrow": "Estándares de Referencia de Salud",
      "title": "Karvonen Heart Rate Zone Calculator & Target Heart Rate Tool – Guía y Calculadora",
      "intro": "Herramienta de cálculo y referencia educativa diseñada según los estándares de salud publicados de la OMS y CDC. Calcula tus métricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "Fórmula de Referencia Estándar",
      "formulaDesc": "Calculado utilizando ecuaciones estándar validadas.",
      "formulaCode": "Target HR = RHR + [(220 - Age - RHR) × % Intensity]",
      "tableTitle": "Tabla de Referencia Estándar",
      "tableRows": [
        {
          "col1": "Categoría / Nivel 1",
          "col2": "Active Recovery / Warmup",
          "col3": "Rango de referencia Promotes blood circulation & passive recovery"
        },
        {
          "col1": "Categoría / Nivel 2",
          "col2": "Moderate Aerobic Training",
          "col3": "Rango de referencia Often used for aerobic base training and moderate-intensity exercise"
        },
        {
          "col1": "Categoría / Nivel 3",
          "col2": "Aerobic Endurance / Fitness",
          "col3": "Rango de referencia Improves cardiovascular efficiency & stamina"
        },
        {
          "col1": "Categoría / Nivel 4",
          "col2": "Anaerobic / Lactate Threshold",
          "col3": "Rango de referencia Increases high-intensity exercise tolerance"
        },
        {
          "col1": "Categoría / Nivel 5",
          "col2": "Maximal VO2 Max Peak Power",
          "col3": "Rango de referencia Neuromuscular speed & peak sprint conditioning"
        }
      ],
      "faqs": [
        {
          "question": "¿Cómo funciona la calculadora de heart rate zone calculator y qué mide?",
          "answer": "Esta calculadora evalúa tus datos personales utilizando ecuaciones validadas. Proporciona una estimación educativa para ayudarte a comprender tu estado de salud y referencias estándar."
        }
      ,
        {
          "question": "Cómo calculate target heart rate using the Karvonen formula?",
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
      "eyebrow": "Normes de Référence de Santé",
      "title": "Karvonen Heart Rate Zone Calculator & Target Heart Rate Tool – Outil de Référence",
      "intro": "Outil de calcul et de référence éducatif conçu selon les normes de santé publiées de l'OMS et du CDC. Calculez vos métriques et consultez les plages de référence.",
      "formulaTitle": "Formule de Référence Standard",
      "formulaDesc": "Calculé à l'aide d'équations standards validées.",
      "formulaCode": "Target HR = RHR + [(220 - Age - RHR) × % Intensity]",
      "tableTitle": "Tableau de Référence Standard",
      "tableRows": [
        {
          "col1": "Catégorie / Niveau 1",
          "col2": "Active Recovery / Warmup",
          "col3": "Plage de référence Promotes blood circulation & passive recovery"
        },
        {
          "col1": "Catégorie / Niveau 2",
          "col2": "Moderate Aerobic Training",
          "col3": "Plage de référence Often used for aerobic base training and moderate-intensity exercise"
        },
        {
          "col1": "Catégorie / Niveau 3",
          "col2": "Aerobic Endurance / Fitness",
          "col3": "Plage de référence Improves cardiovascular efficiency & stamina"
        },
        {
          "col1": "Catégorie / Niveau 4",
          "col2": "Anaerobic / Lactate Threshold",
          "col3": "Plage de référence Increases high-intensity exercise tolerance"
        },
        {
          "col1": "Catégorie / Niveau 5",
          "col2": "Maximal VO2 Max Peak Power",
          "col3": "Plage de référence Neuromuscular speed & peak sprint conditioning"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de heart rate zone calculator et que mesure-t-il ?",
          "answer": "Ce calculateur évalue vos données personnelles à l'aide d'équations validées. Il fournit une estimation éducative pour vous aider à comprendre vos métriques et références standards."
        }
      ,
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
      "title": "Karvonen Heart Rate Zone Calculator & Target Heart Rate Tool – Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den veröffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und prüfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardmäßig validierten Gleichungen.",
      "formulaCode": "Target HR = RHR + [(220 - Age - RHR) × % Intensity]",
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
          "answer": "Dieser Rechner wertet Ihre persönlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        }
      ,
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
      "eyebrow": "건강 참조 표준 지침",
      "title": "Karvonen Heart Rate Zone 계산기 & Target Heart Rate 도구 – 참조 계산기",
      "intro": "WHO 및 CDC 지침에 기반한 실시간 참고 계산기입니다. 개인별 수치를 측정하고 성인 표준 참조 범위를 확인하세요.",
      "formulaTitle": "표준 계산 공식",
      "formulaDesc": "검증된 표준 공식을 사용하여 계산됩니다.",
      "formulaCode": "Target HR = RHR + [(220 - Age - RHR) × % Intensity]",
      "tableTitle": "표준 참조 진단표",
      "tableRows": [
        {
          "col1": "범주 / 단계 1",
          "col2": "Active Recovery / Warmup",
          "col3": "참조 범위 Promotes blood circulation & passive recovery"
        },
        {
          "col1": "범주 / 단계 2",
          "col2": "Moderate Aerobic Training",
          "col3": "참조 범위 Often used for aerobic base training and moderate-intensity exercise"
        },
        {
          "col1": "범주 / 단계 3",
          "col2": "Aerobic Endurance / Fitness",
          "col3": "참조 범위 Improves cardiovascular efficiency & stamina"
        },
        {
          "col1": "범주 / 단계 4",
          "col2": "Anaerobic / Lactate Threshold",
          "col3": "참조 범위 Increases high-intensity exercise tolerance"
        },
        {
          "col1": "범주 / 단계 5",
          "col2": "Maximal VO2 Max Peak Power",
          "col3": "참조 범위 Neuromuscular speed & peak sprint conditioning"
        }
      ],
      "faqs": [
        {
          "question": "heart rate zone calculator 계산기의 원리와 측정 항목은 무엇인가요?",
          "answer": "본 계산기는 검증된 공식을 사용하여 개인별 신체 지수를 산출합니다. 성인 표준 참조 범위를 바탕으로 교육적 분석 결과를 제공합니다."
        }
      ,
        {
          "question": " calculate target heart rate using the Karvonen formula? 안내 및 원리",
          "answer": "To use the Karvonen formula: 1) Subtract your age from 220 to get Max HR estimate. 2) Subtract your Resting HR from Max HR to get Heart Rate Reserve (HRR). 3) Multiply HRR by desired intensity % (e.g., 60% to 70% for moderate aerobic training). 4) Add your Resting HR back to get your target heart rate in BPM."
        },
        {
          "question": "Why does the Karvonen formula factor in Resting Heart Rate? 안내 및 원리",
          "answer": "Traditional formulas (220 - age) provide a population estimate of Max HR. The Karvonen formula provides individualized context by factoring in Resting Heart Rate (RHR)."
        },
        {
          "question": "Which heart rate zone is associated with aerobic base training? 안내 및 원리",
          "answer": "Karvonen Zone 2 (60% to 70% of Heart Rate Reserve) is commonly associated with aerobic base training and moderate-intensity endurance workouts."
        },
        {
          "question": "How do I measure my Resting Heart Rate (RHR) for the Karvonen calculator? 안내 및 원리",
          "answer": "Measure your pulse for 60 seconds immediately upon waking in the morning while resting calmly in bed before sitting up or taking caffeine."
        }
      ]
    },
    "hi": {
      "eyebrow": "स्वास्थ्य संदर्भ मानक",
      "title": "Karvonen Heart Rate Zone कैलकुलेटर & Target Heart Rate टूल – मुफ्त कैलकुलेटर",
      "intro": "डब्ल्यूएचओ और सीडीसी स्वास्थ्य मानकों के अनुसार निर्मित संदर्भ टूल। अपनी मेट्रिक्स की गणना करें और स्थापित स्वास्थ्य सीमाओं की समीक्षा करें।",
      "formulaTitle": "मानक संदर्भ सूत्र",
      "formulaDesc": "मानक सत्यापित समीकरणों का उपयोग करके गणना की गई।",
      "formulaCode": "Target HR = RHR + [(220 - Age - RHR) × % Intensity]",
      "tableTitle": "मानक संदर्भ तालिका",
      "tableRows": [
        {
          "col1": "श्रेणी / स्तर 1",
          "col2": "Active Recovery / Warmup",
          "col3": "संदर्भ सीमा Promotes blood circulation & passive recovery"
        },
        {
          "col1": "श्रेणी / स्तर 2",
          "col2": "Moderate Aerobic Training",
          "col3": "संदर्भ सीमा Often used for aerobic base training and moderate-intensity exercise"
        },
        {
          "col1": "श्रेणी / स्तर 3",
          "col2": "Aerobic Endurance / Fitness",
          "col3": "संदर्भ सीमा Improves cardiovascular efficiency & stamina"
        },
        {
          "col1": "श्रेणी / स्तर 4",
          "col2": "Anaerobic / Lactate Threshold",
          "col3": "संदर्भ सीमा Increases high-intensity exercise tolerance"
        },
        {
          "col1": "श्रेणी / स्तर 5",
          "col2": "Maximal VO2 Max Peak Power",
          "col3": "संदर्भ सीमा Neuromuscular speed & peak sprint conditioning"
        }
      ],
      "faqs": [
        {
          "question": "कार्वोनेन (Karvonen) हार्ट रेट ज़ोन कैलकुलेटर क्या है?",
          "answer": "यह आपकी विश्राम स्थिति की हृदय गति (RHR) का उपयोग करके सटीक लक्षित कसरत ज़ोन (Target Heart Rate Zones) निकालता है।"
        },
        {
          "question": "अधिकतम हृदय गति (Max Heart Rate) कैसे निकाली जाती है?",
          "answer": "मानक सूत्र के अनुसार अधिकतम हृदय गति = 220 - आपकी उम्र (bpm) होती है।"
        },
        {
          "question": "फैट बर्न ज़ोन (Zone 2) क्या है?",
          "answer": "यह आपकी अधिकतम क्षमता का 60% से 70% ज़ोन है जहाँ शरीर ऊर्जा के लिए मुख्य रूप से वसा बर्न करता है।"
        },
        {
          "question": "हार्ट रेट रिजर्व (HRR) क्या है?",
          "answer": "HRR = अधिकतम हृदय गति - विश्राम हृदय गति। यह आपकी हृदय संबंधी कार्यक्षमता की सीमा दिखाता है।"
        },
        {
          "question": "विश्राम हृदय गति (Resting Heart Rate) कब मापें?",
          "answer": "सुबह उठते ही बिस्तर पर बिना किसी गतिविधि के 1 मिनट तक अपनी नब्ज गिनकर RHR मापें।"
        }
      ]
    }
  },
  "karvonen-heart-rate-calculator": {
    "en": {
      "eyebrow": "Cardiovascular Physiology",
      "title": "Karvonen Heart Rate Calculator – Target Heart Rate Zones & HRR",
      "intro": "Calculate your target exercise heart rate zones using the Karvonen Formula and Heart Rate Reserve (HRR). Unlike basic percentage formulas, the Karvonen method accounts for your resting heart rate (RHR), providing customized training zones for fat loss, aerobic endurance, and VO2 max improvement.",
      "formulaTitle": "Official Karvonen Formula Equation",
      "formulaDesc": "Target Heart Rate (THR) = [(HRmax - HRrest) × %intensity] + HRrest | HRmax = 220 - Age | Heart Rate Reserve (HRR) = HRmax - HRrest",
      "formulaCode": "THR = (HRR × Intensity%) + Resting HR",
      "tableTitle": "Karvonen Heart Rate Training Zones Breakdown",
      "tableRows": [
        {
          "col1": "Zone 1: Active Recovery",
          "col2": "50% – 60% HRR",
          "col3": "Warm-up, cooldown, and active recovery"
        },
        {
          "col1": "Zone 2: Endurance & Fat Loss",
          "col2": "60% – 70% HRR",
          "col3": "Optimal zone for sustainable fat burning and aerobic base building"
        },
        {
          "col1": "Zone 3: Aerobic Fitness",
          "col2": "70% – 80% HRR",
          "col3": "Improves cardiovascular capacity and stamina"
        },
        {
          "col1": "Zone 4: Anaerobic Threshold",
          "col2": "80% – 90% HRR",
          "col3": "Increases high-intensity performance and lactate threshold"
        },
        {
          "col1": "Zone 5: VO2 Max Peak",
          "col2": "90% – 100% HRR",
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
      "eyebrow": "Estándares de Referencia de Salud",
      "title": "Karvonen Heart Rate Calculator – Target Heart Rate Zones & HRR – Guía y Calculadora",
      "intro": "Herramienta de cálculo y referencia educativa diseñada según los estándares de salud publicados de la OMS y CDC. Calcula tus métricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "Fórmula de Referencia Estándar",
      "formulaDesc": "Calculado utilizando ecuaciones estándar validadas.",
      "formulaCode": "THR = (HRR × Intensity%) + Resting HR",
      "tableTitle": "Tabla de Referencia Estándar",
      "tableRows": [
        {
          "col1": "Categoría / Nivel 1",
          "col2": "50% – 60% HRR",
          "col3": "Rango de referencia Warm-up, cooldown, and active recovery"
        },
        {
          "col1": "Categoría / Nivel 2",
          "col2": "60% – 70% HRR",
          "col3": "Rango de referencia Optimal zone for sustainable fat burning and aerobic base building"
        },
        {
          "col1": "Categoría / Nivel 3",
          "col2": "70% – 80% HRR",
          "col3": "Rango de referencia Improves cardiovascular capacity and stamina"
        },
        {
          "col1": "Categoría / Nivel 4",
          "col2": "80% – 90% HRR",
          "col3": "Rango de referencia Increases high-intensity performance and lactate threshold"
        },
        {
          "col1": "Categoría / Nivel 5",
          "col2": "90% – 100% HRR",
          "col3": "Rango de referencia Maximal speed and interval training"
        }
      ],
      "faqs": [
        {
          "question": "¿Cómo funciona la calculadora de karvonen heart rate calculator y qué mide?",
          "answer": "Esta calculadora evalúa tus datos personales utilizando ecuaciones validadas. Proporciona una estimación educativa para ayudarte a comprender tu estado de salud y referencias estándar."
        }
      ,
        {
          "question": "¿Por qué el método Karvonen considera la frecuencia cardíaca en reposo en lugar de solo 220 menos edad?",
          "answer": "Standard formulas only estimate maximum heart rate. The Karvonen formula factors in resting heart rate, reflecting your personal cardiovascular fitness level."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de Référence de Santé",
      "title": "Karvonen Heart Rate Calculator – Target Heart Rate Zones & HRR – Outil de Référence",
      "intro": "Outil de calcul et de référence éducatif conçu selon les normes de santé publiées de l'OMS et du CDC. Calculez vos métriques et consultez les plages de référence.",
      "formulaTitle": "Formule de Référence Standard",
      "formulaDesc": "Calculé à l'aide d'équations standards validées.",
      "formulaCode": "THR = (HRR × Intensity%) + Resting HR",
      "tableTitle": "Tableau de Référence Standard",
      "tableRows": [
        {
          "col1": "Catégorie / Niveau 1",
          "col2": "50% – 60% HRR",
          "col3": "Plage de référence Warm-up, cooldown, and active recovery"
        },
        {
          "col1": "Catégorie / Niveau 2",
          "col2": "60% – 70% HRR",
          "col3": "Plage de référence Optimal zone for sustainable fat burning and aerobic base building"
        },
        {
          "col1": "Catégorie / Niveau 3",
          "col2": "70% – 80% HRR",
          "col3": "Plage de référence Improves cardiovascular capacity and stamina"
        },
        {
          "col1": "Catégorie / Niveau 4",
          "col2": "80% – 90% HRR",
          "col3": "Plage de référence Increases high-intensity performance and lactate threshold"
        },
        {
          "col1": "Catégorie / Niveau 5",
          "col2": "90% – 100% HRR",
          "col3": "Plage de référence Maximal speed and interval training"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de karvonen heart rate calculator et que mesure-t-il ?",
          "answer": "Ce calculateur évalue vos données personnelles à l'aide d'équations validées. Il fournit une estimation éducative pour vous aider à comprendre vos métriques et références standards."
        }
      ,
        {
          "question": "Pourquoi la méthode Karvonen prend-elle en compte la fréquence cardiaque au repos ?",
          "answer": "Standard formulas only estimate maximum heart rate. The Karvonen formula factors in resting heart rate, reflecting your personal cardiovascular fitness level."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "Karvonen Heart Rate Calculator – Target Heart Rate Zones & HRR – Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den veröffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und prüfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardmäßig validierten Gleichungen.",
      "formulaCode": "THR = (HRR × Intensity%) + Resting HR",
      "tableTitle": "Standard-Referenztabelle",
      "tableRows": [
        {
          "col1": "Kategorie / Stufe 1",
          "col2": "50% – 60% HRR",
          "col3": "Referenzbereich Warm-up, cooldown, and active recovery"
        },
        {
          "col1": "Kategorie / Stufe 2",
          "col2": "60% – 70% HRR",
          "col3": "Referenzbereich Optimal zone for sustainable fat burning and aerobic base building"
        },
        {
          "col1": "Kategorie / Stufe 3",
          "col2": "70% – 80% HRR",
          "col3": "Referenzbereich Improves cardiovascular capacity and stamina"
        },
        {
          "col1": "Kategorie / Stufe 4",
          "col2": "80% – 90% HRR",
          "col3": "Referenzbereich Increases high-intensity performance and lactate threshold"
        },
        {
          "col1": "Kategorie / Stufe 5",
          "col2": "90% – 100% HRR",
          "col3": "Referenzbereich Maximal speed and interval training"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der karvonen heart rate calculator-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre persönlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        }
      ,
        {
          "question": "Warum berücksichtigt die Karvonen-Formel den Ruhepuls?",
          "answer": "Standard formulas only estimate maximum heart rate. The Karvonen formula factors in resting heart rate, reflecting your personal cardiovascular fitness level."
        }
      ]
    },
    "ko": {
      "eyebrow": "건강 참조 표준 지침",
      "title": "Karvonen Heart Rate 계산기 – Target Heart Rate Zones & HRR – 참조 계산기",
      "intro": "WHO 및 CDC 지침에 기반한 실시간 참고 계산기입니다. 개인별 수치를 측정하고 성인 표준 참조 범위를 확인하세요.",
      "formulaTitle": "표준 계산 공식",
      "formulaDesc": "검증된 표준 공식을 사용하여 계산됩니다.",
      "formulaCode": "THR = (HRR × Intensity%) + Resting HR",
      "tableTitle": "표준 참조 진단표",
      "tableRows": [
        {
          "col1": "범주 / 단계 1",
          "col2": "50% – 60% HRR",
          "col3": "참조 범위 Warm-up, cooldown, and active recovery"
        },
        {
          "col1": "범주 / 단계 2",
          "col2": "60% – 70% HRR",
          "col3": "참조 범위 Optimal zone for sustainable fat burning and aerobic base building"
        },
        {
          "col1": "범주 / 단계 3",
          "col2": "70% – 80% HRR",
          "col3": "참조 범위 Improves cardiovascular capacity and stamina"
        },
        {
          "col1": "범주 / 단계 4",
          "col2": "80% – 90% HRR",
          "col3": "참조 범위 Increases high-intensity performance and lactate threshold"
        },
        {
          "col1": "범주 / 단계 5",
          "col2": "90% – 100% HRR",
          "col3": "참조 범위 Maximal speed and interval training"
        }
      ],
      "faqs": [
        {
          "question": "karvonen heart rate calculator 계산기의 원리와 측정 항목은 무엇인가요?",
          "answer": "본 계산기는 검증된 공식을 사용하여 개인별 신체 지수를 산출합니다. 성인 표준 참조 범위를 바탕으로 교육적 분석 결과를 제공합니다."
        }
      ,
        {
          "question": "카르보넨 공식이 일반 220-나이 공식과 다른 점은 무엇인가요?",
          "answer": "Standard formulas only estimate maximum heart rate. The Karvonen formula factors in resting heart rate, reflecting your personal cardiovascular fitness level."
        }
      ]
    },
    "hi": {
      "eyebrow": "कार्डियोवैस्कुलर फिजियोलॉजी",
      "title": "कार्वोनेन हार्ट रेट कैलकुलेटर (Karvonen Heart Rate कैलकुलेटर)",
      "intro": "कार्वोनेन फॉर्मूला और हार्ट रेट रिजर्व (HRR) का उपयोग करके अपने लक्षित व्यायाम हार्ट रेट ज़ोन की सटीक गणना करें।",
      "formulaTitle": "आधिकारिक कार्वोनेन सूत्र",
      "formulaDesc": "Target HR = [(HRmax - HRrest) × %intensity] + HRrest",
      "formulaCode": "THR = (HRR × Intensity%) + Resting HR",
      "tableTitle": "कार्वोनेन हार्ट रेट ट्रेनिंग ज़ोन तालिका",
      "tableRows": [
        {
          "col1": "ज़ोन 1: रिकवरी",
          "col2": "50% – 60% HRR",
          "col3": "वार्म-अप और रिकवरी"
        },
        {
          "col1": "ज़ोन 2: फैट बर्न / एंड्योरेंस",
          "col2": "60% – 70% HRR",
          "col3": "वसा जलाने के लिए सर्वोत्तम ज़ोन"
        },
        {
          "col1": "ज़ोन 3: एरोबिक कार्डियो",
          "col2": "70% – 80% HRR",
          "col3": "कार्डियो क्षमता में सुधार"
        },
        {
          "col1": "ज़ोन 4: एनएरोबिक थ्रेशोल्ड",
          "col2": "80% – 90% HRR",
          "col3": "सहनशक्ति में वृद्धि"
        },
        {
          "col1": "ज़ोन 5: VO2 मैक्स",
          "col2": "90% – 100% HRR",
          "col3": "अधिकतम तीव्रता अंतराल"
        }
      ],
      "faqs": [
        {
          "question": "कार्वोनेन सूत्र मानक हृदय गति सूत्र से बेहतर क्यों है?",
          "answer": "कार्वोनेन सूत्र में आपकी विश्राम हृदय गति (Resting HR) को भी जोड़ा जाता है, जिससे यह अधिक व्यक्तिगत होता है।"
        },
        {
          "question": "एरोबिक ज़ोन (70-80%) के क्या फायदे हैं?",
          "answer": "यह ज़ोन आपके स्टैमिना, फेफड़ों की क्षमता और कार्डियोवैस्कुलर सहनशक्ति को मजबूत बनाता है।"
        },
        {
          "question": "क्या उम्र बढ़ने से अधिकतम हृदय गति कम होती है?",
          "answer": "हाँ, 220 - उम्र सूत्र के अनुसार उम्र बढ़ने के साथ अधिकतम हृदय गति स्वाभाविक रूप से घटती है।"
        },
        {
          "question": "कसरत के दौरान हृदय गति की निगरानी कैसे करें?",
          "answer": "आप स्मार्टवॉच, चेस्ट स्ट्रैप या वर्कआउट के बीच 10 सेकंड की नब्ज गिनकर हृदय गति जांच सकते हैं।"
        },
        {
          "question": "ज़ोन 1 (50-60%) का उपयोग कब किया जाता है?",
          "answer": "ज़ोन 1 का उपयोग वार्म-अप, कूल-डाउन और हल्की रिकवरी कसरत के दौरान किया जाता है।"
        }
      ]
    }
  },
  "1rm-calculator": {
    "en": {
      "eyebrow": "Strength Conditioning Science",
      "title": "1RM Calculator – Free One Rep Max Calculator (Bench, Squat, Deadlift)",
      "intro": "Free 1RM Calculator (One Rep Max Calculator). Calculate your maximum single-repetition lift for bench press, back squat, overhead press, and deadlift without needing to lift to failure, using verified Epley, Brzycki, and Lander mathematical equations.",
      "formulaTitle": "Standard Strength 1RM Calculation Formulas",
      "formulaDesc": "Epley: 1RM = Weight × (1 + Reps / 30) | Brzycki: 1RM = Weight × [36 / (37 - Reps)] | Lander: 1RM = (100 × Weight) / (101.3 - 2.67123 × Reps)",
      "formulaCode": "Epley 1RM = W × (1 + R / 30)",
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
          "answer": "One Rep Max (1RM) is the maximum weight you can lift for a single repetition with proper form. Our 1RM Calculator uses submaximal weight and rep counts with the Epley formula [Weight × (1 + Reps/30)] to safely estimate your max."
        },
        {
          "question": "Is the 1RM calculator accurate for bench press and squat?",
          "answer": "Yes, formulas like Epley and Brzycki are accurate within 2-4% for rep ranges between 1 and 10 reps."
        }
      ]
    },
    "es": {
      "eyebrow": "Estándares de Referencia de Salud",
      "title": "1RM Calculator – Free One Rep Max Calculator (Bench, Squat, Deadlift) – Guía y Calculadora",
      "intro": "Herramienta de cálculo y referencia educativa diseñada según los estándares de salud publicados de la OMS y CDC. Calcula tus métricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "Fórmula de Referencia Estándar",
      "formulaDesc": "Calculado utilizando ecuaciones estándar validadas.",
      "formulaCode": "Epley 1RM = W × (1 + R / 30)",
      "tableTitle": "Tabla de Referencia Estándar",
      "tableRows": [
        {
          "col1": "Categoría / Nivel 1",
          "col2": "1 Repetition",
          "col3": "Rango de referencia Absolute maximum strength single"
        },
        {
          "col1": "Categoría / Nivel 2",
          "col2": "2 Repetitions",
          "col3": "Rango de referencia Heavy strength training load"
        },
        {
          "col1": "Categoría / Nivel 3",
          "col2": "3 Repetitions",
          "col3": "Rango de referencia Power lifting strength sets"
        },
        {
          "col1": "Categoría / Nivel 4",
          "col2": "5 Repetitions",
          "col3": "Rango de referencia Hypertrophy & heavy strength blend"
        },
        {
          "col1": "Categoría / Nivel 5",
          "col2": "7 Repetitions",
          "col3": "Rango de referencia Hypertrophy muscle building range"
        },
        {
          "col1": "Categoría / Nivel 6",
          "col2": "10 Repetitions",
          "col3": "Rango de referencia Volume hypertrophy & endurance"
        }
      ],
      "faqs": [
        {
          "question": "¿Cómo funciona la calculadora de 1rm calculator y qué mide?",
          "answer": "Esta calculadora evalúa tus datos personales utilizando ecuaciones validadas. Proporciona una estimación educativa para ayudarte a comprender tu estado de salud y referencias estándar."
        }
      ,
        {
          "question": "Is the 1RM calculator accurate for bench press and squat?",
          "answer": "Yes, formulas like Epley and Brzycki are accurate within 2-4% for rep ranges between 1 and 10 reps."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de Référence de Santé",
      "title": "1RM Calculator – Free One Rep Max Calculator (Bench, Squat, Deadlift) – Outil de Référence",
      "intro": "Outil de calcul et de référence éducatif conçu selon les normes de santé publiées de l'OMS et du CDC. Calculez vos métriques et consultez les plages de référence.",
      "formulaTitle": "Formule de Référence Standard",
      "formulaDesc": "Calculé à l'aide d'équations standards validées.",
      "formulaCode": "Epley 1RM = W × (1 + R / 30)",
      "tableTitle": "Tableau de Référence Standard",
      "tableRows": [
        {
          "col1": "Catégorie / Niveau 1",
          "col2": "1 Repetition",
          "col3": "Plage de référence Absolute maximum strength single"
        },
        {
          "col1": "Catégorie / Niveau 2",
          "col2": "2 Repetitions",
          "col3": "Plage de référence Heavy strength training load"
        },
        {
          "col1": "Catégorie / Niveau 3",
          "col2": "3 Repetitions",
          "col3": "Plage de référence Power lifting strength sets"
        },
        {
          "col1": "Catégorie / Niveau 4",
          "col2": "5 Repetitions",
          "col3": "Plage de référence Hypertrophy & heavy strength blend"
        },
        {
          "col1": "Catégorie / Niveau 5",
          "col2": "7 Repetitions",
          "col3": "Plage de référence Hypertrophy muscle building range"
        },
        {
          "col1": "Catégorie / Niveau 6",
          "col2": "10 Repetitions",
          "col3": "Plage de référence Volume hypertrophy & endurance"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de 1rm calculator et que mesure-t-il ?",
          "answer": "Ce calculateur évalue vos données personnelles à l'aide d'équations validées. Il fournit une estimation éducative pour vous aider à comprendre vos métriques et références standards."
        }
      ,
        {
          "question": "Is the 1RM calculator accurate for bench press and squat?",
          "answer": "Yes, formulas like Epley and Brzycki are accurate within 2-4% for rep ranges between 1 and 10 reps."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "1RM Calculator – Free One Rep Max Calculator (Bench, Squat, Deadlift) – Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den veröffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und prüfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardmäßig validierten Gleichungen.",
      "formulaCode": "Epley 1RM = W × (1 + R / 30)",
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
          "answer": "Dieser Rechner wertet Ihre persönlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        }
      ,
        {
          "question": "Is the 1RM calculator accurate for bench press and squat?",
          "answer": "Yes, formulas like Epley and Brzycki are accurate within 2-4% for rep ranges between 1 and 10 reps."
        }
      ]
    },
    "ko": {
      "eyebrow": "건강 참조 표준 지침",
      "title": "1RM 계산기 – 무료 One Rep Max 계산기 (Bench, Squat, Deadlift) – 참조 계산기",
      "intro": "WHO 및 CDC 지침에 기반한 실시간 참고 계산기입니다. 개인별 수치를 측정하고 성인 표준 참조 범위를 확인하세요.",
      "formulaTitle": "표준 계산 공식",
      "formulaDesc": "검증된 표준 공식을 사용하여 계산됩니다.",
      "formulaCode": "Epley 1RM = W × (1 + R / 30)",
      "tableTitle": "표준 참조 진단표",
      "tableRows": [
        {
          "col1": "범주 / 단계 1",
          "col2": "1 Repetition",
          "col3": "참조 범위 Absolute maximum strength single"
        },
        {
          "col1": "범주 / 단계 2",
          "col2": "2 Repetitions",
          "col3": "참조 범위 Heavy strength training load"
        },
        {
          "col1": "범주 / 단계 3",
          "col2": "3 Repetitions",
          "col3": "참조 범위 Power lifting strength sets"
        },
        {
          "col1": "범주 / 단계 4",
          "col2": "5 Repetitions",
          "col3": "참조 범위 Hypertrophy & heavy strength blend"
        },
        {
          "col1": "범주 / 단계 5",
          "col2": "7 Repetitions",
          "col3": "참조 범위 Hypertrophy muscle building range"
        },
        {
          "col1": "범주 / 단계 6",
          "col2": "10 Repetitions",
          "col3": "참조 범위 Volume hypertrophy & endurance"
        }
      ],
      "faqs": [
        {
          "question": "1rm calculator 계산기의 원리와 측정 항목은 무엇인가요?",
          "answer": "본 계산기는 검증된 공식을 사용하여 개인별 신체 지수를 산출합니다. 성인 표준 참조 범위를 바탕으로 교육적 분석 결과를 제공합니다."
        }
      ,
        {
          "question": "1RM 계산기는 벤치프레스, 스쿼트, 데드리프트 측정 시 유용한가요?",
          "answer": "Yes, formulas like Epley and Brzycki are accurate within 2-4% for rep ranges between 1 and 10 reps."
        }
      ]
    },
    "hi": {
      "eyebrow": "स्ट्रेंथ कंडीशनिंग साइंस",
      "title": "1RM कैलकुलेटर (1RM कैलकुलेटर - One Rep Max)",
      "intro": "बेंच प्रेस, स्क्वाट और डेडलिफ्ट के लिए अपने 1RM (वन रेप मैक्स) की सुरक्षित गणना करें। एपले और ब्रज़िकी सूत्रों से अपने 100% मैक्स की गणना करें।",
      "formulaTitle": "मानक 1RM गणना सूत्र",
      "formulaDesc": "एपले सूत्र: 1RM = वजन × (1 + रेप्स / 30) | ब्रज़िकी सूत्र: 1RM = वजन × [36 / (37 - रेप्स)]",
      "formulaCode": "Epley 1RM = W × (1 + R / 30)",
      "tableTitle": "1RM प्रतिशत प्रशिक्षण तालिका",
      "tableRows": [
        {
          "col1": "100% 1RM",
          "col2": "1 रेप",
          "col3": "अधिकतम क्षमता"
        },
        {
          "col1": "90% 1RM",
          "col2": "3 रेप्स",
          "col3": "भारी स्ट्रेंथ लोड"
        },
        {
          "col1": "85% 1RM",
          "col2": "5 रेप्स",
          "col3": "मांसपेशी वृद्धि (Hypertrophy)"
        },
        {
          "col1": "75% 1RM",
          "col2": "10 रेप्स",
          "col3": "वॉल्यूम ट्रेनिंग"
        },
        {
          "col1": "श्रेणी / स्तर 5",
          "col2": "7 Repetitions",
          "col3": "संदर्भ सीमा Hypertrophy muscle building range"
        },
        {
          "col1": "श्रेणी / स्तर 6",
          "col2": "10 Repetitions",
          "col3": "संदर्भ सीमा Volume hypertrophy & endurance"
        }
      ],
      "faqs": [
        {
          "question": "वन रेप मैक्स (1RM) क्या है?",
          "answer": "1RM वह अधिकतम वजन है जिसे आप सही फॉर्म के साथ केवल एक बार उठा सकते हैं।"
        },
        {
          "question": "इपली (Epley) और ब्रज़िकी (Brzycki) सूत्रों में क्या अंतर है?",
          "answer": "इपली सूत्र 1RM = W × (1 + R/30) का उपयोग करता है, जो 10 से कम रेप्स के लिए अत्यधिक सटीक है।"
        },
        {
          "question": "1RM कैलकुलेटर का उपयोग करना असली 1RM उठाने से बेहतर क्यों है?",
          "answer": "कैलकुलेटर भारी वजन से होने वाली चोट के जोखिम के बिना आपकी 1RM क्षमता का सुरक्षित अनुमान देता है।"
        },
        {
          "question": "1RM का उपयोग स्ट्रेंथ ट्रेनिंग प्रोग्राम में कैसे करें?",
          "answer": "आप अपनी 1RM का 75-85% वजन चुनकर 6 से 10 रेप्स के सेट डिजाइन कर सकते हैं।"
        },
        {
          "question": "1RM निकालने के लिए कितने रेप्स का सेट सबसे अच्छा है?",
          "answer": "3 से 6 रेप्स का भारी सेट 1RM कैलकुलेटर में सबसे सटीक परिणाम देता है।"
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
      "formulaDesc": "1RM = Weight Lifted in kg/lbs × (1 + [Reps Performed / 30]) | Brzycki 1RM = Weight Lifted × [36 / (37 - Reps)]",
      "formulaCode": "1RM = W × (1 + R / 30)",
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
          "col2": "5 – 6 Repetitions",
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
          "answer": "To calculate your 1RM bench press: Lift a manageable weight for submaximal reps (e.g. 100 kg for 5 reps). Multiply 100 by (1 + 5/30), which equals 100 × 1.1667 = 116.7 kg estimated 1RM bench press."
        },
        {
          "question": "How accurate is the Epley 1RM formula for bench press, squat, and deadlift?",
          "answer": "Formula-based estimates can differ from actual one-repetition performance. The Epley 1RM formula provides reference estimates for bench press and squat sets between 2 to 10 repetitions."
        },
        {
          "question": "What is the difference between Epley and Brzycki 1RM formulas?",
          "answer": "The Epley formula (1RM = W × [1 + R/30]) and Brzycki formula (1RM = W × [36 / (37 - R)]) are two widely referenced formulas. Epley is commonly used for lower rep ranges (1 to 6 reps), while Brzycki performs well up to 10 reps."
        },
        {
          "question": "Why use a 1RM calculator instead of testing max weight directly?",
          "answer": "Testing true 1RM max weight creates significant spinal and tendon strain during heavy bench press attempts. An Epley 1RM calculator allows lifters to estimate reference target weights using submaximal loads."
        }
      ]
    },
    "es": {
      "eyebrow": "Estándares de Referencia de Salud",
      "title": "Epley 1RM Bench Press Calculator & 1 Rep Max Reference Tool – Guía y Calculadora",
      "intro": "Herramienta de cálculo y referencia educativa diseñada según los estándares de salud publicados de la OMS y CDC. Calcula tus métricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "Fórmula de Referencia Estándar",
      "formulaDesc": "Calculado utilizando ecuaciones estándar validadas.",
      "formulaCode": "1RM = W × (1 + R / 30)",
      "tableTitle": "Tabla de Referencia Estándar",
      "tableRows": [
        {
          "col1": "Categoría / Nivel 1",
          "col2": "1 Repetition",
          "col3": "Rango de referencia Peak single rep strength capacity estimate"
        },
        {
          "col1": "Categoría / Nivel 2",
          "col2": "3 Repetitions",
          "col3": "Rango de referencia Heavy strength building & neural adaptation"
        },
        {
          "col1": "Categoría / Nivel 3",
          "col2": "5 – 6 Repetitions",
          "col3": "Rango de referencia Common training use & compound strength (5x5 protocols)"
        },
        {
          "col1": "Categoría / Nivel 4",
          "col2": "10 Repetitions",
          "col3": "Rango de referencia Hypertrophy volume & metabolic conditioning"
        },
        {
          "col1": "Categoría / Nivel 5",
          "col2": "15 Repetitions",
          "col3": "Rango de referencia Muscular endurance & active recovery sets"
        }
      ],
      "faqs": [
        {
          "question": "¿Cómo funciona la calculadora de one rep max calculator y qué mide?",
          "answer": "Esta calculadora evalúa tus datos personales utilizando ecuaciones validadas. Proporciona una estimación educativa para ayudarte a comprender tu estado de salud y referencias estándar."
        }
      ,
        {
          "question": "Cómo calculate 1 rep max bench press using the Epley formula?",
          "answer": "To calculate your 1RM bench press: Lift a manageable weight for submaximal reps (e.g. 100 kg for 5 reps). Multiply 100 by (1 + 5/30), which equals 100 × 1.1667 = 116.7 kg estimated 1RM bench press."
        },
        {
          "question": "How accurate is the Epley 1RM formula for bench press, squat, and deadlift?",
          "answer": "Formula-based estimates can differ from actual one-repetition performance. The Epley 1RM formula provides reference estimates for bench press and squat sets between 2 to 10 repetitions."
        },
        {
          "question": "¿Qué es el difference between Epley and Brzycki 1RM formulas?",
          "answer": "The Epley formula (1RM = W × [1 + R/30]) and Brzycki formula (1RM = W × [36 / (37 - R)]) are two widely referenced formulas. Epley is commonly used for lower rep ranges (1 to 6 reps), while Brzycki performs well up to 10 reps."
        },
        {
          "question": "Why use a 1RM calculator instead of testing max weight directly?",
          "answer": "Testing true 1RM max weight creates significant spinal and tendon strain during heavy bench press attempts. An Epley 1RM calculator allows lifters to estimate reference target weights using submaximal loads."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de Référence de Santé",
      "title": "Epley 1RM Bench Press Calculator & 1 Rep Max Reference Tool – Outil de Référence",
      "intro": "Outil de calcul et de référence éducatif conçu selon les normes de santé publiées de l'OMS et du CDC. Calculez vos métriques et consultez les plages de référence.",
      "formulaTitle": "Formule de Référence Standard",
      "formulaDesc": "Calculé à l'aide d'équations standards validées.",
      "formulaCode": "1RM = W × (1 + R / 30)",
      "tableTitle": "Tableau de Référence Standard",
      "tableRows": [
        {
          "col1": "Catégorie / Niveau 1",
          "col2": "1 Repetition",
          "col3": "Plage de référence Peak single rep strength capacity estimate"
        },
        {
          "col1": "Catégorie / Niveau 2",
          "col2": "3 Repetitions",
          "col3": "Plage de référence Heavy strength building & neural adaptation"
        },
        {
          "col1": "Catégorie / Niveau 3",
          "col2": "5 – 6 Repetitions",
          "col3": "Plage de référence Common training use & compound strength (5x5 protocols)"
        },
        {
          "col1": "Catégorie / Niveau 4",
          "col2": "10 Repetitions",
          "col3": "Plage de référence Hypertrophy volume & metabolic conditioning"
        },
        {
          "col1": "Catégorie / Niveau 5",
          "col2": "15 Repetitions",
          "col3": "Plage de référence Muscular endurance & active recovery sets"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de one rep max calculator et que mesure-t-il ?",
          "answer": "Ce calculateur évalue vos données personnelles à l'aide d'équations validées. Il fournit une estimation éducative pour vous aider à comprendre vos métriques et références standards."
        }
      ,
        {
          "question": "Comment calculate 1 rep max bench press using the Epley formula?",
          "answer": "To calculate your 1RM bench press: Lift a manageable weight for submaximal reps (e.g. 100 kg for 5 reps). Multiply 100 by (1 + 5/30), which equals 100 × 1.1667 = 116.7 kg estimated 1RM bench press."
        },
        {
          "question": "How accurate is the Epley 1RM formula for bench press, squat, and deadlift?",
          "answer": "Formula-based estimates can differ from actual one-repetition performance. The Epley 1RM formula provides reference estimates for bench press and squat sets between 2 to 10 repetitions."
        },
        {
          "question": "Qu'est-ce que le difference between Epley and Brzycki 1RM formulas?",
          "answer": "The Epley formula (1RM = W × [1 + R/30]) and Brzycki formula (1RM = W × [36 / (37 - R)]) are two widely referenced formulas. Epley is commonly used for lower rep ranges (1 to 6 reps), while Brzycki performs well up to 10 reps."
        },
        {
          "question": "Why use a 1RM calculator instead of testing max weight directly?",
          "answer": "Testing true 1RM max weight creates significant spinal and tendon strain during heavy bench press attempts. An Epley 1RM calculator allows lifters to estimate reference target weights using submaximal loads."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "Epley 1RM Bench Press Calculator & 1 Rep Max Reference Tool – Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den veröffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und prüfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardmäßig validierten Gleichungen.",
      "formulaCode": "1RM = W × (1 + R / 30)",
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
          "col2": "5 – 6 Repetitions",
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
          "answer": "Dieser Rechner wertet Ihre persönlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        }
      ,
        {
          "question": "Wie man calculate 1 rep max bench press using the Epley formula?",
          "answer": "To calculate your 1RM bench press: Lift a manageable weight for submaximal reps (e.g. 100 kg for 5 reps). Multiply 100 by (1 + 5/30), which equals 100 × 1.1667 = 116.7 kg estimated 1RM bench press."
        },
        {
          "question": "How accurate is the Epley 1RM formula for bench press, squat, and deadlift?",
          "answer": "Formula-based estimates can differ from actual one-repetition performance. The Epley 1RM formula provides reference estimates for bench press and squat sets between 2 to 10 repetitions."
        },
        {
          "question": "Was ist der difference between Epley and Brzycki 1RM formulas?",
          "answer": "The Epley formula (1RM = W × [1 + R/30]) and Brzycki formula (1RM = W × [36 / (37 - R)]) are two widely referenced formulas. Epley is commonly used for lower rep ranges (1 to 6 reps), while Brzycki performs well up to 10 reps."
        },
        {
          "question": "Why use a 1RM calculator instead of testing max weight directly?",
          "answer": "Testing true 1RM max weight creates significant spinal and tendon strain during heavy bench press attempts. An Epley 1RM calculator allows lifters to estimate reference target weights using submaximal loads."
        }
      ]
    },
    "ko": {
      "eyebrow": "건강 참조 표준 지침",
      "title": "Epley 1RM Bench Press 계산기 & 1 Rep Max Reference 도구 – 참조 계산기",
      "intro": "WHO 및 CDC 지침에 기반한 실시간 참고 계산기입니다. 개인별 수치를 측정하고 성인 표준 참조 범위를 확인하세요.",
      "formulaTitle": "표준 계산 공식",
      "formulaDesc": "검증된 표준 공식을 사용하여 계산됩니다.",
      "formulaCode": "1RM = W × (1 + R / 30)",
      "tableTitle": "표준 참조 진단표",
      "tableRows": [
        {
          "col1": "범주 / 단계 1",
          "col2": "1 Repetition",
          "col3": "참조 범위 Peak single rep strength capacity estimate"
        },
        {
          "col1": "범주 / 단계 2",
          "col2": "3 Repetitions",
          "col3": "참조 범위 Heavy strength building & neural adaptation"
        },
        {
          "col1": "범주 / 단계 3",
          "col2": "5 – 6 Repetitions",
          "col3": "참조 범위 Common training use & compound strength (5x5 protocols)"
        },
        {
          "col1": "범주 / 단계 4",
          "col2": "10 Repetitions",
          "col3": "참조 범위 Hypertrophy volume & metabolic conditioning"
        },
        {
          "col1": "범주 / 단계 5",
          "col2": "15 Repetitions",
          "col3": "참조 범위 Muscular endurance & active recovery sets"
        }
      ],
      "faqs": [
        {
          "question": "one rep max calculator 계산기의 원리와 측정 항목은 무엇인가요?",
          "answer": "본 계산기는 검증된 공식을 사용하여 개인별 신체 지수를 산출합니다. 성인 표준 참조 범위를 바탕으로 교육적 분석 결과를 제공합니다."
        }
      ,
        {
          "question": " calculate 1 rep max bench press using the Epley formula? 안내 및 원리",
          "answer": "To calculate your 1RM bench press: Lift a manageable weight for submaximal reps (e.g. 100 kg for 5 reps). Multiply 100 by (1 + 5/30), which equals 100 × 1.1667 = 116.7 kg estimated 1RM bench press."
        },
        {
          "question": "Epley 1RM 추정 공식의 기본 원리와 사용 방법은 무엇인가요?",
          "answer": "Formula-based estimates can differ from actual one-repetition performance. The Epley 1RM formula provides reference estimates for bench press and squat sets between 2 to 10 repetitions."
        },
        {
          "question": " difference between Epley and Brzycki 1RM formulas? 안내 및 원리",
          "answer": "The Epley formula (1RM = W × [1 + R/30]) and Brzycki formula (1RM = W × [36 / (37 - R)]) are two widely referenced formulas. Epley is commonly used for lower rep ranges (1 to 6 reps), while Brzycki performs well up to 10 reps."
        },
        {
          "question": "Why use a 1RM calculator instead of testing max weight directly? 안내 및 원리",
          "answer": "Testing true 1RM max weight creates significant spinal and tendon strain during heavy bench press attempts. An Epley 1RM calculator allows lifters to estimate reference target weights using submaximal loads."
        }
      ]
    },
    "hi": {
      "eyebrow": "स्वास्थ्य संदर्भ मानक",
      "title": "Epley 1RM Bench Press कैलकुलेटर & 1 Rep Max Reference टूल – मुफ्त कैलकुलेटर",
      "intro": "डब्ल्यूएचओ और सीडीसी स्वास्थ्य मानकों के अनुसार निर्मित संदर्भ टूल। अपनी मेट्रिक्स की गणना करें और स्थापित स्वास्थ्य सीमाओं की समीक्षा करें।",
      "formulaTitle": "मानक संदर्भ सूत्र",
      "formulaDesc": "मानक सत्यापित समीकरणों का उपयोग करके गणना की गई।",
      "formulaCode": "1RM = W × (1 + R / 30)",
      "tableTitle": "मानक संदर्भ तालिका",
      "tableRows": [
        {
          "col1": "श्रेणी / स्तर 1",
          "col2": "1 Repetition",
          "col3": "संदर्भ सीमा Peak single rep strength capacity estimate"
        },
        {
          "col1": "श्रेणी / स्तर 2",
          "col2": "3 Repetitions",
          "col3": "संदर्भ सीमा Heavy strength building & neural adaptation"
        },
        {
          "col1": "श्रेणी / स्तर 3",
          "col2": "5 – 6 Repetitions",
          "col3": "संदर्भ सीमा Common training use & compound strength (5x5 protocols)"
        },
        {
          "col1": "श्रेणी / स्तर 4",
          "col2": "10 Repetitions",
          "col3": "संदर्भ सीमा Hypertrophy volume & metabolic conditioning"
        },
        {
          "col1": "श्रेणी / स्तर 5",
          "col2": "15 Repetitions",
          "col3": "संदर्भ सीमा Muscular endurance & active recovery sets"
        }
      ],
      "faqs": [
        {
          "question": "बेंच प्रेस और स्क्वाट के लिए 1RM कैसे निकालें?",
          "answer": "आपने जिस वजन से जितने रेप्स किए हैं, उन्हें कैलकुलेटर में दर्ज करें और अपना अनुमानित 1RM देखें।"
        },
        {
          "question": "85% 1RM का क्या मतलब है?",
          "answer": "85% 1RM वह वजन है जिससे आप आमतौर पर 5 से 6 रेप्स का कड़ा सेट कर सकते हैं।"
        },
        {
          "question": "क्या यह कैलकुलेटर शुरुआती (Beginners) के लिए उपयुक्त है?",
          "answer": "हाँ, शुरुआती लिफ्टर्स बिना अधिकतम वजन उठाए अपनी शक्ति सीमा का अंदाजा लगा सकते हैं।"
        },
        {
          "question": "क्या रेप्स की संख्या बढ़ने पर कैलकुलेटर सटीक रहता है?",
          "answer": "10 से अधिक रेप्स पर 1RM अनुमान की सटीकता थोड़ी कम हो जाती है, इसलिए 3-8 रेप्स का डेटा सबसे अच्छा है।"
        },
        {
          "question": "कैलकुलेशन के बाद प्रोग्रेसिव ओवरलोड कैसे करें?",
          "answer": "प्रत्येक 2-3 सप्ताह में अपनी 1RM अपडेट करें और कसरत में धीरे-धीरे वजन या रेप्स बढ़ाएं।"
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
          "col2": "12.5 – 18.0 kg (28 - 40 lbs)",
          "col3": "~0.5 kg / week in 2nd/3rd trimester"
        },
        {
          "col1": "Normal BMI (18.5-24.9)",
          "col2": "11.5 – 16.0 kg (25 - 35 lbs)",
          "col3": "~0.4 kg / week in 2nd/3rd trimester"
        },
        {
          "col1": "Overweight (25.0-29.9)",
          "col2": "7.0 – 11.5 kg (15 - 25 lbs)",
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
          "answer": "To calculate pregnancy weight gain week by week: Enter your current weight, pre-pregnancy weight, and pregnancy week (1 to 40). For a normal pre-pregnancy BMI (18.5–24.9), reference target gain is 1 to 4.5 lbs in the 1st trimester and ~1 lb per week in the 2nd and 3rd trimesters."
        },
        {
          "question": "How much total weight should you gain during pregnancy?",
          "answer": "According to IOM reference guidelines: Underweight (<18.5 BMI) range is 28–40 lbs (12.5–18 kg); Normal BMI (18.5–24.9) range is 25–35 lbs (11.5–16 kg); Overweight (25–29.9 BMI) range is 15–25 lbs (7–11.5 kg); Obese (≥30 BMI) range is 11–20 lbs (5–9 kg)."
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
      "eyebrow": "Estándares de Referencia de Salud",
      "title": "Pregnancy Weight Gain Calculator & Trimester Tracker – Guía y Calculadora",
      "intro": "Herramienta de cálculo y referencia educativa diseñada según los estándares de salud publicados de la OMS y CDC. Calcula tus métricas y consulta los rangos de referencia establecidos.",
      "formulaTitle": "Fórmula de Referencia Estándar",
      "formulaDesc": "Calculado utilizando ecuaciones estándar validadas.",
      "tableTitle": "Tabla de Referencia Estándar",
      "tableRows": [
        {
          "col1": "Categoría / Nivel 1",
          "col2": "12.5 – 18.0 kg (28 - 40 lbs)",
          "col3": "Rango de referencia ~0.5 kg / week in 2nd/3rd trimester"
        },
        {
          "col1": "Categoría / Nivel 2",
          "col2": "11.5 – 16.0 kg (25 - 35 lbs)",
          "col3": "Rango de referencia ~0.4 kg / week in 2nd/3rd trimester"
        },
        {
          "col1": "Categoría / Nivel 3",
          "col2": "7.0 – 11.5 kg (15 - 25 lbs)",
          "col3": "Rango de referencia ~0.3 kg / week in 2nd/3rd trimester"
        }
      ],
      "faqs": [
        {
          "question": "¿Cómo funciona la calculadora de pregnancy weight gain calculator y qué mide?",
          "answer": "Esta calculadora evalúa tus datos personales utilizando ecuaciones validadas. Proporciona una estimación educativa para ayudarte a comprender tu estado de salud y referencias estándar."
        }
      ,
        {
          "question": "Cómo calculate healthy pregnancy weight gain week by week?",
          "answer": "To calculate pregnancy weight gain week by week: Enter your current weight, pre-pregnancy weight, and pregnancy week (1 to 40). For a normal pre-pregnancy BMI (18.5–24.9), reference target gain is 1 to 4.5 lbs in the 1st trimester and ~1 lb per week in the 2nd and 3rd trimesters."
        },
        {
          "question": "How much total weight should you gain during pregnancy?",
          "answer": "According to IOM reference guidelines: Underweight (<18.5 BMI) range is 28–40 lbs (12.5–18 kg); Normal BMI (18.5–24.9) range is 25–35 lbs (11.5–16 kg); Overweight (25–29.9 BMI) range is 15–25 lbs (7–11.5 kg); Obese (≥30 BMI) range is 11–20 lbs (5–9 kg)."
        },
        {
          "question": "¿Qué es typical first trimester weight gain?",
          "answer": "Most women gain between 0.5 and 2.0 kg (1 to 4.5 lbs) total during the first 12 weeks of pregnancy due to minimal fetal weight growth."
        },
        {
          "question": "Why does pre-pregnancy BMI affect gestational weight targets?",
          "answer": "Pre-pregnancy BMI determines initial energy reserves. Maternal-fetal reference guidelines tailor weight targets based on initial BMI."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de Référence de Santé",
      "title": "Pregnancy Weight Gain Calculator & Trimester Tracker – Outil de Référence",
      "intro": "Outil de calcul et de référence éducatif conçu selon les normes de santé publiées de l'OMS et du CDC. Calculez vos métriques et consultez les plages de référence.",
      "formulaTitle": "Formule de Référence Standard",
      "formulaDesc": "Calculé à l'aide d'équations standards validées.",
      "tableTitle": "Tableau de Référence Standard",
      "tableRows": [
        {
          "col1": "Catégorie / Niveau 1",
          "col2": "12.5 – 18.0 kg (28 - 40 lbs)",
          "col3": "Plage de référence ~0.5 kg / week in 2nd/3rd trimester"
        },
        {
          "col1": "Catégorie / Niveau 2",
          "col2": "11.5 – 16.0 kg (25 - 35 lbs)",
          "col3": "Plage de référence ~0.4 kg / week in 2nd/3rd trimester"
        },
        {
          "col1": "Catégorie / Niveau 3",
          "col2": "7.0 – 11.5 kg (15 - 25 lbs)",
          "col3": "Plage de référence ~0.3 kg / week in 2nd/3rd trimester"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de pregnancy weight gain calculator et que mesure-t-il ?",
          "answer": "Ce calculateur évalue vos données personnelles à l'aide d'équations validées. Il fournit une estimation éducative pour vous aider à comprendre vos métriques et références standards."
        }
      ,
        {
          "question": "Comment calculate healthy pregnancy weight gain week by week?",
          "answer": "To calculate pregnancy weight gain week by week: Enter your current weight, pre-pregnancy weight, and pregnancy week (1 to 40). For a normal pre-pregnancy BMI (18.5–24.9), reference target gain is 1 to 4.5 lbs in the 1st trimester and ~1 lb per week in the 2nd and 3rd trimesters."
        },
        {
          "question": "How much total weight should you gain during pregnancy?",
          "answer": "According to IOM reference guidelines: Underweight (<18.5 BMI) range is 28–40 lbs (12.5–18 kg); Normal BMI (18.5–24.9) range is 25–35 lbs (11.5–16 kg); Overweight (25–29.9 BMI) range is 15–25 lbs (7–11.5 kg); Obese (≥30 BMI) range is 11–20 lbs (5–9 kg)."
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
      "title": "Pregnancy Weight Gain Calculator & Trimester Tracker – Rechner & Leitfaden",
      "intro": "Berechnungs- und Bildungs-Referenzwerkzeug nach den veröffentlichten Gesundheitsstandards der WHO und CDC. Berechnen Sie Ihre Werte und prüfen Sie die Referenzbereiche.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardmäßig validierten Gleichungen.",
      "tableTitle": "Standard-Referenztabelle",
      "tableRows": [
        {
          "col1": "Kategorie / Stufe 1",
          "col2": "12.5 – 18.0 kg (28 - 40 lbs)",
          "col3": "Referenzbereich ~0.5 kg / week in 2nd/3rd trimester"
        },
        {
          "col1": "Kategorie / Stufe 2",
          "col2": "11.5 – 16.0 kg (25 - 35 lbs)",
          "col3": "Referenzbereich ~0.4 kg / week in 2nd/3rd trimester"
        },
        {
          "col1": "Kategorie / Stufe 3",
          "col2": "7.0 – 11.5 kg (15 - 25 lbs)",
          "col3": "Referenzbereich ~0.3 kg / week in 2nd/3rd trimester"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der pregnancy weight gain calculator-Rechner und was misst er?",
          "answer": "Dieser Rechner wertet Ihre persönlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        }
      ,
        {
          "question": "Wie man calculate healthy pregnancy weight gain week by week?",
          "answer": "To calculate pregnancy weight gain week by week: Enter your current weight, pre-pregnancy weight, and pregnancy week (1 to 40). For a normal pre-pregnancy BMI (18.5–24.9), reference target gain is 1 to 4.5 lbs in the 1st trimester and ~1 lb per week in the 2nd and 3rd trimesters."
        },
        {
          "question": "How much total weight should you gain during pregnancy?",
          "answer": "According to IOM reference guidelines: Underweight (<18.5 BMI) range is 28–40 lbs (12.5–18 kg); Normal BMI (18.5–24.9) range is 25–35 lbs (11.5–16 kg); Overweight (25–29.9 BMI) range is 15–25 lbs (7–11.5 kg); Obese (≥30 BMI) range is 11–20 lbs (5–9 kg)."
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
      "eyebrow": "건강 참조 표준 지침",
      "title": "Pregnancy Weight Gain 계산기 & Trimester Tracker – 참조 계산기",
      "intro": "WHO 및 CDC 지침에 기반한 실시간 참고 계산기입니다. 개인별 수치를 측정하고 성인 표준 참조 범위를 확인하세요.",
      "formulaTitle": "표준 계산 공식",
      "formulaDesc": "검증된 표준 공식을 사용하여 계산됩니다.",
      "tableTitle": "표준 참조 진단표",
      "tableRows": [
        {
          "col1": "범주 / 단계 1",
          "col2": "12.5 – 18.0 kg (28 - 40 lbs)",
          "col3": "참조 범위 ~0.5 kg / week in 2nd/3rd trimester"
        },
        {
          "col1": "범주 / 단계 2",
          "col2": "11.5 – 16.0 kg (25 - 35 lbs)",
          "col3": "참조 범위 ~0.4 kg / week in 2nd/3rd trimester"
        },
        {
          "col1": "범주 / 단계 3",
          "col2": "7.0 – 11.5 kg (15 - 25 lbs)",
          "col3": "참조 범위 ~0.3 kg / week in 2nd/3rd trimester"
        }
      ],
      "faqs": [
        {
          "question": "pregnancy weight gain calculator 계산기의 원리와 측정 항목은 무엇인가요?",
          "answer": "본 계산기는 검증된 공식을 사용하여 개인별 신체 지수를 산출합니다. 성인 표준 참조 범위를 바탕으로 교육적 분석 결과를 제공합니다."
        }
      ,
        {
          "question": " calculate healthy pregnancy weight gain week by week? 안내 및 원리",
          "answer": "To calculate pregnancy weight gain week by week: Enter your current weight, pre-pregnancy weight, and pregnancy week (1 to 40). For a normal pre-pregnancy BMI (18.5–24.9), reference target gain is 1 to 4.5 lbs in the 1st trimester and ~1 lb per week in the 2nd and 3rd trimesters."
        },
        {
          "question": "How much total weight should you gain during pregnancy? 안내 및 원리",
          "answer": "According to IOM reference guidelines: Underweight (<18.5 BMI) range is 28–40 lbs (12.5–18 kg); Normal BMI (18.5–24.9) range is 25–35 lbs (11.5–16 kg); Overweight (25–29.9 BMI) range is 15–25 lbs (7–11.5 kg); Obese (≥30 BMI) range is 11–20 lbs (5–9 kg)."
        },
        {
          "question": " typical first trimester weight gain? 안내 및 원리",
          "answer": "Most women gain between 0.5 and 2.0 kg (1 to 4.5 lbs) total during the first 12 weeks of pregnancy due to minimal fetal weight growth."
        },
        {
          "question": "Why does pre-pregnancy BMI affect gestational weight targets? 안내 및 원리",
          "answer": "Pre-pregnancy BMI determines initial energy reserves. Maternal-fetal reference guidelines tailor weight targets based on initial BMI."
        }
      ]
    },
    "hi": {
      "eyebrow": "स्वास्थ्य संदर्भ मानक",
      "title": "Pregnancy Weight Gain कैलकुलेटर & Trimester Tracker – मुफ्त कैलकुलेटर",
      "intro": "डब्ल्यूएचओ और सीडीसी स्वास्थ्य मानकों के अनुसार निर्मित संदर्भ टूल। अपनी मेट्रिक्स की गणना करें और स्थापित स्वास्थ्य सीमाओं की समीक्षा करें।",
      "formulaTitle": "मानक संदर्भ सूत्र",
      "formulaDesc": "मानक सत्यापित समीकरणों का उपयोग करके गणना की गई।",
      "tableTitle": "मानक संदर्भ तालिका",
      "tableRows": [
        {
          "col1": "श्रेणी / स्तर 1",
          "col2": "12.5 – 18.0 kg (28 - 40 lbs)",
          "col3": "संदर्भ सीमा ~0.5 kg / week in 2nd/3rd trimester"
        },
        {
          "col1": "श्रेणी / स्तर 2",
          "col2": "11.5 – 16.0 kg (25 - 35 lbs)",
          "col3": "संदर्भ सीमा ~0.4 kg / week in 2nd/3rd trimester"
        },
        {
          "col1": "श्रेणी / स्तर 3",
          "col2": "7.0 – 11.5 kg (15 - 25 lbs)",
          "col3": "संदर्भ सीमा ~0.3 kg / week in 2nd/3rd trimester"
        }
      ],
      "faqs": [
        {
          "question": "गर्भावस्था के दौरान कितना वजन बढ़ना सामान्य है?",
          "answer": "ACOG और IOM के अनुसार सामान्य बीएमआई वाली महिलाओं के लिए कुल 11.5 से 16 किग्रा (25-35 lbs) वजन बढ़ना recommended है।"
        },
        {
          "question": "गर्भावस्था से पहले का बीएमआई वजन वृद्धि को कैसे प्रभावित करता है?",
          "answer": "कम बीएमआई वाली महिलाओं को अधिक वजन (12.5-18 किग्रा) और अधिक बीएमआई वाली महिलाओं को कम वजन (7-11.5 किग्रा) की सलाह दी जाती है।"
        },
        {
          "question": "तीसरी तिमाही (3rd Trimester) में प्रति सप्ताह कितना वजन बढ़ना चाहिए?",
          "answer": "दूसरी और तीसरी तिमाही में औसतन 0.4 किग्रा (1 पाउंड) प्रति सप्ताह वजन बढ़ना सामान्य संदर्भ है।"
        },
        {
          "question": "क्या जुड़वां बच्चों (Twins) की गर्भावस्था में वजन सीमा अलग होती है?",
          "answer": "हाँ, जुड़वां बच्चों की गर्भावस्था में सामान्य बीएमआई वाली महिलाओं के लिए 17 से 25 किग्रा वजन वृद्धि की सिफारिश की जाती है।"
        },
        {
          "question": "गर्भावस्था में अचानक वजन बढ़ने पर क्या करें?",
          "answer": "यदि वजन बहुत तेजी से बढ़ता या घटता है, तो तुरंत अपनी स्त्री रोग विशेषज्ञ (Obstetrician) से सलाह लें।"
        }
      ]
    }
  }
};
