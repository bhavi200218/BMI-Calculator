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

export const tableUi: Record<string, { cat: string; metric: string; guidance: string; faq: string; faqSubtitle: string; refs: string }> = {
  "en": {
    "cat": "Category / Level",
    "metric": "Reference Range / Metric",
    "guidance": "Reference Context",
    "faq": "Frequently Asked Questions",
    "faqSubtitle": "Clear answers to common questions about formulas, body metrics, and healthy weight management.",
    "refs": "References & Published Research"
  },
  "es": {
    "cat": "Categoría / Nivel",
    "metric": "Referencia / Métrica",
    "guidance": "Contexto de Referencia",
    "faq": "Preguntas Frecuentes y Respuestas",
    "faqSubtitle": "Respuestas de referencia a dudas habituales sobre fórmulas matemáticas, factores fisiológicos, estándares de salud y control del peso.",
    "refs": "Referencias e Investigaciones Publicadas"
  },
  "fr": {
    "cat": "Catégorie / Niveau",
    "metric": "Référence / Métrique",
    "guidance": "Contexte de Référence",
    "faq": "Foire Aux Questions et Réponses",
    "faqSubtitle": "Réponses détaillées aux questions fréquentes sur les formules mathématiques, les facteurs physiologiques et les repères de santé.",
    "refs": "Références et Recherches Publiées"
  },
  "de": {
    "cat": "Kategorie / Stufe",
    "metric": "Referenz / Metrik",
    "guidance": "Referenzkontext",
    "faq": "Häufig gestellte Fragen",
    "faqSubtitle": "Fundierte Antworten auf häufige Fragen zu mathematischen Formeln, physiologischen Faktoren und gesundheitlichen Referenzstandards.",
    "refs": "Referenzen & Veröffentlichte Forschung"
  },
  "ko": {
    "cat": "범주 / 단계",
    "metric": "참조 / 메트릭",
    "guidance": "참조 컨텍스트",
    "faq": "자주 묻는 질문 및 답변",
    "faqSubtitle": "수학적 산출 공식, 개인별 생리학적 요인, 공중보건 참조 기준 및 건강 관리에 관한 자주 묻는 질문을 확인하세요.",
    "refs": "참고 문헌 및 출판 연구"
  },
  "hi": {
    "cat": "श्रेणी / स्तर",
    "metric": "संदर्भ / मीट्रिक",
    "guidance": "संदर्भ विवरण",
    "faq": "अक्सर पूछे जाने वाले प्रश्न और उत्तर",
    "faqSubtitle": "गणितीय सूत्रों, शारीरिक कारकों, सार्वजनिक स्वास्थ्य मानकों और स्वस्थ वजन प्रबंधन से संबंधित अक्सर पूछे जाने वाले प्रश्नों के उत्तर।",
    "refs": "प्रकाशित शोध एवं संदर्भ"
  }
};

export const seoDatabase: Record<string, Record<string, ToolContent>> = {
  "bmi-calculator": {
    "en": {
      "eyebrow": "WHO Health Standards",
      "title": "BMI Calculator – Calculate Body Mass Index",
      "intro": "Calculate your Body Mass Index (BMI) instantly with our free calculator. BMI compares your weight to your height using official World Health Organization (WHO) and CDC standards. Find your category and healthy weight range in seconds.",
      "formulaTitle": "Standard WHO BMI Calculator Formula",
      "formulaDesc": "Metric: BMI = Weight (kg) / [Height (m)]² | Imperial: BMI = [Weight (lbs) / Height (inches)²] × 703",
      "formulaCode": "BMI = kg / m²",
      "tableTitle": "WHO Adult BMI Scale & Classification Chart",
      "tableRows": [
        {
          "col1": "Underweight",
          "col2": "< 18.5 kg/m²",
          "col3": "Below the standard weight baseline"
        },
        {
          "col1": "Healthy Weight",
          "col2": "18.5 – 24.9 kg/m²",
          "col3": "Standard healthy reference range for adults"
        },
        {
          "col1": "Overweight",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": "Above standard weight (Asian cutoff begins at 23.0)"
        },
        {
          "col1": "Obesity Class I",
          "col2": "30.0 – 34.9 kg/m²",
          "col3": "Moderate health risk category"
        },
        {
          "col1": "Obesity Class II",
          "col2": "35.0 – 39.9 kg/m²",
          "col3": "High health risk category"
        },
        {
          "col1": "Obesity Class III",
          "col2": "≥ 40.0 kg/m²",
          "col3": "Severe health risk category"
        }
      ],
      "faqs": [
        {
          "question": "What is BMI and how is it calculated?",
          "answer": "Body Mass Index (BMI) is a simple screening tool. It estimates whether your weight is healthy for your height. The metric formula divides your weight in kilograms by your height in meters squared (kg/m²). In imperial units, divide your weight in pounds by your height in inches squared and multiply by 703."
        },
        {
          "question": "Do men and women use the same BMI formula?",
          "answer": "Yes. The math formula is the same for adult men and women. Both use the standard WHO cutoffs to assess body weight."
        },
        {
          "question": "What are the standard adult BMI categories?",
          "answer": "Adults are grouped into four main ranges: Underweight (below 18.5), Healthy weight (18.5 to 24.9), Overweight (25.0 to 29.9), and Obese (30.0 or higher). For Asian adults, the overweight threshold starts earlier at 23.0."
        },
        {
          "question": "What are the limitations of a standard BMI score?",
          "answer": "BMI uses only your height and weight. It does not measure body fat directly. It cannot tell the difference between heavy muscle and excess fat. Because of this, muscular athletes may score in the overweight range with very low body fat. Older adults who have lost muscle may score as healthy despite carrying excess fat."
        },
        {
          "question": "Is BMI a clinical medical diagnosis?",
          "answer": "No. BMI is only a quick screening tool. It does not diagnose illness. A doctor will check your blood pressure, cholesterol, blood sugar, and lifestyle to evaluate your true health."
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
          "col1": "Bajo Peso (< 18.5 kg/m²)",
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
          "col1": "Obesidad Clase I (25.0 – 29.9 kg/m²)",
          "col2": "30.0 – 34.9 kg/m²",
          "col3": "Rango de referencia de obesidad clase I"
        },
        {
          "col1": "Obesidad Clase II (≥ 30.0 kg/m²)",
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
          "col1": "Obésité Classe I (25.0 – 29.9 kg/m²)",
          "col2": "30.0 – 34.9 kg/m²",
          "col3": "Plage de référence d'obésité classe I"
        },
        {
          "col1": "Obésité Classe II (≥ 30.0 kg/m²)",
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
          "col1": "Untergewicht (< 18,5 kg/m²)",
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
      "intro": "세계보건기구(WHO) 및 CDC 기준에 따른 무료 BMI 계산기입니다. 신장과 체중을 입력하여 성인 체질량지수 범주, 정상 체중 참조 범위 및 비만도 단계를 브라우저에서 안전하고 정확하게 계산하세요. 세계보건기구(WHO) 기준에 따른 안전한 무료 건강 도구입니다.",
      "formulaTitle": "표준 WHO BMI 계산 공식",
      "formulaDesc": "미터법: BMI = 체중 (kg) / [신장 (m)]² | 야드파운드법: BMI = [체중 (lbs) / 신장 (인치)²] × 703",
      "formulaCode": "BMI = kg / m²",
      "tableTitle": "WHO 성인 BMI 진단표 및 분류 차트",
      "tableRows": [
        {
          "col1": "저체중 (< 18.5 kg/m²)",
          "col2": "< 18.5 kg/m²",
          "col3": "저체중 참조 범위"
        },
        {
          "col1": "정상 체중",
          "col2": "18.5 – 24.9 kg/m²",
          "col3": "정상 체중 참조 범위"
        },
        {
          "col1": "과체중",
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
          "col1": "कम वजन (< 18.5 kg/m²)",
          "col2": "< 18.5 kg/m²",
          "col3": "कम वजन संदर्भ सीमा"
        },
        {
          "col1": "सामान्य (स्वस्थ) वजन",
          "col2": "18.5 – 24.9 kg/m²",
          "col3": "सामान्य वजन संदर्भ सीमा"
        },
        {
          "col1": "अधिक वजन",
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
      "eyebrow": "Oxford 2.5-Power BMI Formula & Mathematical Analysis",
      "title": "3D BMI Calculator – Oxford Height-Adjusted 2.5 Formula",
      "intro": "Our free 3D BMI Calculator and 3D Body Visualizer applies the Oxford 2.5-power height-adjusted formula (1.3 × weight / height²·⁵) proposed by Oxford mathematician Prof. Nick Trefethen. Compare standard 2D Quetelet scaling against volumetric 3D exponent curves to understand how height affects BMI accuracy for tall and short statures while interacting with a 360° virtual mannequin in mesh, wireframe, and heatmap modes.",
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
      "eyebrow": "Fórmula de IMC Exponencial de Oxford 2.5 y Análisis Matemático",
      "title": "Calculadora de IMC 3D – Fórmula de Oxford Ajustada a la Altura",
      "intro": "Calcula tu índice de masa corporal con la fórmula exponencial de Oxford 2.5 (1.3 × peso / altura²·⁵) propuesta por el matemático Prof. Nick Trefethen de la Universidad de Oxford. Compara el escalado clásico 2D frente a curvas volumétricas 3D para corregir distorsiones de estatura.",
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
        },
        {
          "question": "¿Puedo usar el Visualizador Corporal 3D en dispositivos móviles?",
          "answer": "Sí, el visualizador 3D es totalmente adaptable a móviles y controles táctiles, lo que permite rotación de 360° en teléfonos inteligentes y tabletas."
        },
        {
          "question": "¿Cómo se relaciona el índice de masa corporal con el escalado del avatar 3D?",
          "answer": "El avatar 3D ajusta dinámicamente el grosor de la malla, la curvatura de la cintura y las proporciones volumétricas según tu IMC."
        }
      ]
    },
    "fr": {
      "eyebrow": "Modèle IMC d'Oxford 2.5 & Analyse Mathématique Volumétrique",
      "title": "Calculateur d'IMC 3D – Formule d'Oxford",
      "intro": "Notre calculateur d'IMC 3D applique la formule exponentielle d'Oxford 2.5 (1.3 × poids / taille²·⁵) formulée par le professeur Nick Trefethen de l'Université d'Oxford. Comparez l'indice traditionnel de Quetelet avec l'échelle volumétrique 3D pour les personnes de grande ou petite taille.",
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
        },
        {
          "question": "Puis-je utiliser le Visualiseur Corporel 3D sur des appareils mobiles ?",
          "answer": "Oui, le visualiseur 3D est entièrement adapté aux mobiles et aux commandes tactiles, permettant une rotation à 360° sur smartphones et tablettes."
        },
        {
          "question": "Comment l'indice de masse corporelle est-il lié à la modélisation 3D ?",
          "answer": "L'avatar 3D ajuste dynamiquement l'épaisseur du maillage et les proportions volumétriques en fonction de votre rapport taille/poids et de votre score IMC."
        }
      ]
    },
    "de": {
      "eyebrow": "Oxford 2.5 Potenz-BMI-Formel & Mathematische Skalierung",
      "title": "3D-BMI-Rechner – Oxford Potenzformel mit Größenkorrektur",
      "intro": "Berechnen Sie Ihren höhenkorrigierten BMI mit der wissenschaftlichen Oxford 2.5 Potenzformel (1.3 × Gewicht / Größe²·⁵) von Prof. Nick Trefethen (Universität Oxford). Vergleichen Sie das traditionelle Quetelet-Quadrat mit dreidimensionaler Volumenskalierung für kleine und große Personen.",
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
        },
        {
          "question": "Kann ich den 3D-Körper-Visualisierer auf Mobilgeräten verwenden?",
          "answer": "Ja, der 3D-Visualisierer ist vollständig für mobile Touch-Steuerung optimiert und ermöglicht 360°-Drehung auf Smartphones und Tablets."
        },
        {
          "question": "Wie hängt der Body-Mass-Index mit der 3D-Proportionenskalierung zusammen?",
          "answer": "Der 3D-Avatar passt die Netzstärke und die volumetrischen Proportionen dynamisch basierend auf Ihrem BMI-Wert an."
        }
      ]
    },
    "ko": {
      "eyebrow": "옥스퍼드 2.5 신장 보정 공식 및 3차원 체질량 분석",
      "title": "3D BMI 계산기 – 옥스퍼드 2.5 신장 보정 체질량 공식",
      "intro": "옥스퍼드 대학교 수학과 닉 트레페젠 교수가 제안한 2.5 거듭제곱 신장 보정 공식(1.3 × 체중 / 신장²·⁵)을 적용한 3D BMI 계산기입니다. 전통적인 케틀레 2차원 제곱 공식의 신장 왜곡을 교정하고 단신 및 장신 성인의 정밀한 체질량 비율을 확인하세요.",
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
        },
        {
          "question": "모바일 기기에서도 3D 체형 시각화 도구를 사용할 수 있나요?",
          "answer": "네, 3D 시각화 도구는 모바일 터치 조작에 완벽하게 최적화되어 스마트폰과 태블릿에서 360° 회전을 지원합니다."
        },
        {
          "question": "체질량지수(BMI)는 3D 아바타의 비율 스케일링과 어떻게 연결되나요?",
          "answer": "3D 아바타는 입력된 신장 대 체중 비율과 계산된 BMI 수치에 따라 실루엣 두께와 부피 비율을 실시간으로 조정합니다."
        }
      ]
    },
    "hi": {
      "eyebrow": "ऑक्सफोर्ड 2.5 एक्सपोनेंशियल बीएमआई फॉर्मूला और गणितीय विश्लेषण",
      "title": "3D बीएमआई कैलकुलेटर – ऑक्सफोर्ड 2.5 ऊंचाई-समायोजित फॉर्मूला",
      "intro": "ऑक्सफोर्ड विश्वविद्यालय के गणितज्ञ प्रो. निक त्रेफेथेन द्वारा विकसित 2.5 एक्सपोनेंशियल फॉर्मूले (1.3 × वजन / ऊंचाई²·⁵) का उपयोग करके अपने 3D बीएमआई की गणना करें। जानें कि पारंपरिक 2D फॉर्मूला लंबे और छोटे कद के लोगों के बीएमआई में क्या गणितीय विसंगतियां उत्पन्न करता है।",
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
          "col3": "3D फॉर्मूला 3D आयतन को संतुलित करता है"
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
        },
        {
          "question": "क्या मैं मोबाइल उपकरणों पर 3D बॉडी विजुअलाइज़र का उपयोग कर सकता हूं?",
          "answer": "हाँ, 3D विज़ुअलाइज़र मोबाइल टच कंट्रोल के लिए पूरी तरह से अनुकूलित है, जिससे स्मार्टफ़ोन और टैबलेट पर 360° रोटेशन की अनुमति मिलती है।"
        },
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
      "title": "BMI Chart for Adults – Height & Weight Lookup Table",
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
          "col3": "Mild underweight reference range"
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
          "question": "What is a BMI Chart and how do I read it?",
          "answer": "A BMI chart is a visual reference grid that cross-references height and weight to display standard Body Mass Index classifications defined by the World Health Organization (WHO)."
        },
        {
          "question": "Are reference ranges identical for men and women?",
          "answer": "Standard WHO BMI charts use identical reference categories (18.5 to 24.9 kg/m² for normal weight) for both adult men and women, although biological gender influences body-fat distribution."
        },
        {
          "question": "How do weight categories shift for older adults and seniors?",
          "answer": "While standard adult BMI categories apply from age 20 onward, geriatric health guidelines suggest that older adults (65+) may benefit from slightly higher BMI ranges (22 to 27 kg/m²) for longevity protection."
        },
        {
          "question": "How do you look up classifications using metric height and weight?",
          "answer": "A metric reference table lists height in centimeters (cm) and weight in kilograms (kg), allowing you to identify your weight tier without manual mathematical unit conversions."
        },
        {
          "question": "What are the primary adult classification tiers defined by the WHO?",
          "answer": "The official WHO BMI categories are: Underweight (< 18.5), Normal Weight (18.5 – 24.9), Overweight (25.0 – 29.9), Obese Class I (30.0 – 34.9), Obese Class II (35.0 – 39.9), and Obese Class III (≥ 40.0)."
        }
      ]
    },
    "es": {
      "eyebrow": "Estándares de Referencia de Salud",
      "title": "Tabla de IMC para Adultos – Consulta de Altura y Peso (kg y cm)",
      "intro": "Tabla oficial de IMC de la OMS para adultos, hombres y mujeres. Calculadora interactiva de escala de IMC, tablas de consulta de altura y peso en sistema métrico (kg y cm), categorías de la OMS y guía de referencia por edad. Uso gratuito con privacidad en el navegador.",
      "formulaTitle": "Fórmula de Referencia Estándar",
      "formulaDesc": "Calculado utilizando ecuaciones estándar validadas.",
      "formulaCode": "BMI = kg / m²",
      "tableTitle": "Tabla de Referencia Internacional de Categorías de IMC de la OMS",
      "tableRows": [
        {
          "col1": "Bajo Peso Severo",
          "col2": "< 16.0 kg/m²",
          "col3": "Umbral de referencia para bajo peso severo"
        },
        {
          "col1": "Bajo Peso Moderado",
          "col2": "16.0 – 16.9 kg/m²",
          "col3": "Umbral de referencia para bajo peso moderado"
        },
        {
          "col1": "Bajo Peso Leve",
          "col2": "17.0 – 18.4 kg/m²",
          "col3": "Umbral de referencia para bajo peso leve"
        },
        {
          "col1": "Peso Normal",
          "col2": "18.5 – 24.9 kg/m²",
          "col3": "Rango de referencia saludable óptimo para adultos"
        },
        {
          "col1": "Sobrepeso",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": "Rango de sobrepeso (Punto de corte asiático: 23.0 kg/m²)"
        },
        {
          "col1": "Obesidad Clase I",
          "col2": "30.0 – 34.9 kg/m²",
          "col3": "Referencia de evaluación para obesidad clase I"
        },
        {
          "col1": "Obesidad Clase II",
          "col2": "35.0 – 39.9 kg/m²",
          "col3": "Referencia de evaluación para obesidad clase II"
        },
        {
          "col1": "Obesidad Clase III",
          "col2": "≥ 40.0 kg/m²",
          "col3": "Umbral de evaluación para obesidad severa Clase III"
        }
      ],
      "faqs": [
        {
          "question": "¿Qué es una tabla de IMC y cómo se interpreta?",
          "answer": "Una tabla de IMC es una cuadrícula de referencia visual que cruza la altura y el peso para mostrar las categorías estándar del Índice de Masa Corporal definidas por la Organización Mundial de la Salud (OMS)."
        },
        {
          "question": "¿Es diferente la tabla de IMC para hombres de la tabla de IMC para mujeres?",
          "answer": "La tabla de IMC para adultos de la OMS utiliza los mismos puntos de corte (18.5 a 24.9 para peso normal) tanto para hombres como para mujeres adultas. No obstante, las medidas de cintura aportan contexto complementario."
        },
        {
          "question": "¿Cómo funciona la tabla de IMC según la edad en adultos y adultos mayores?",
          "answer": "Las categorías estándar de la OMS se aplican a todos los adultos a partir de los 20 años. En mayores de 65 años, un IMC ligeramente superior (23.0 a 27.0 kg/m²) puede ser protector frente a la fragilidad."
        },
        {
          "question": "¿Qué es una tabla de IMC en kg y cm?",
          "answer": "Una tabla métrica de IMC relaciona la estatura en centímetros con el peso en kilogramos. Por ejemplo: una altura de 170 cm con un peso de 65 kg da un IMC de 22.5 kg/m² (rango de peso saludable)."
        },
        {
          "question": "¿Cuáles son las categorías principales de la tabla oficial de IMC?",
          "answer": "Las categorías oficiales de la OMS son: Bajo peso (< 18.5), Peso normal (18.5 – 24.9), Sobrepeso (25.0 – 29.9), Obesidad Clase I (30.0 – 34.9), Obesidad Clase II (35.0 – 39.9) y Obesidad Clase III (≥ 40.0)."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de Référence de Santé",
      "title": "Tableau de l'IMC Adultes – Table Poids et Taille",
      "intro": "Tableau d'IMC officiel de l'OMS pour adultes, hommes et femmes. Calculateur d'échelle d'IMC interactif, tableaux de consultation taille-poids en unités métriques (kg et cm), catégories de l'OMS et repères d'âge. Gratuit avec confidentialité sur navigateur.",
      "formulaTitle": "Formule de Référence Standard",
      "formulaDesc": "Calculé à l'aide d'équations standards validées.",
      "formulaCode": "BMI = kg / m²",
      "tableTitle": "Tableau de Référence International des Catégories d'IMC de l'OMS",
      "tableRows": [
        {
          "col1": "Sous-poids Sévère",
          "col2": "< 16.0 kg/m²",
          "col3": "Seuil de référence pour insuffisance pondérale sévère"
        },
        {
          "col1": "Sous-poids Modéré",
          "col2": "16.0 – 16.9 kg/m²",
          "col3": "Seuil de référence pour insuffisance pondérale modérée"
        },
        {
          "col1": "Sous-poids Léger",
          "col2": "17.0 – 18.4 kg/m²",
          "col3": "Seuil de référence pour insuffisance pondérale légère"
        },
        {
          "col1": "Poids Normal",
          "col2": "18.5 – 24.9 kg/m²",
          "col3": "Plage de référence saine optimale pour les adultes"
        },
        {
          "col1": "Surpoids",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": "Plage de surpoids (Seuil asiatique : 23.0 kg/m²)"
        },
        {
          "col1": "Obésité Classe I",
          "col2": "30.0 – 34.9 kg/m²",
          "col3": "Référence de dépistage pour l'obésité de classe I"
        },
        {
          "col1": "Obésité Classe II",
          "col2": "35.0 – 39.9 kg/m²",
          "col3": "Référence de dépistage pour l'obésité de classe II"
        },
        {
          "col1": "Obésité Classe III",
          "col2": "≥ 40.0 kg/m²",
          "col3": "Seuil d'évaluation de l'obésité sévère de classe III"
        }
      ],
      "faqs": [
        {
          "question": "Qu'est-ce qu'un tableau d'IMC et comment le lire ?",
          "answer": "Un tableau d'IMC est une grille visuelle qui croise la taille et le poids pour présenter les catégories standards définies par l'Organisation mondiale de la Santé (OMS)."
        },
        {
          "question": "Le tableau d'IMC est-il différent pour les hommes et les femmes ?",
          "answer": "Le tableau officiel de l'OMS utilise les mêmes seuils (18,5 à 24,9 pour le poids normal) pour les hommes et les femmes adultes. La mesure du tour de taille apporte un contexte d'évaluation supplémentaire."
        },
        {
          "question": "Comment le tableau d'IMC varie-t-il selon l'âge chez les adultes et les seniors ?",
          "answer": "Les catégories standards de l'OMS s'appliquent dès 20 ans. Chez les seniors de plus de 65 ans, un IMC légèrement plus élevé (23,0 à 27,0 kg/m²) peut protéger contre la fragilité."
        },
        {
          "question": "Qu'est-ce qu'un tableau d'IMC en kg et cm ?",
          "answer": "Un tableau métrique associe la taille en centimètres et le poids en kilogrammes. Par exemple : une taille de 170 cm pour 65 kg donne un IMC de 22,5 kg/m² (catégorie poids santé)."
        },
        {
          "question": "Quelles sont les catégories principales du tableau officiel de l'IMC ?",
          "answer": "Les catégories officielles de l'OMS sont : Sous-poids (< 18,5), Poids normal (18,5 – 24,9), Surpoids (25,0 – 29,9), Obésité classe I (30,0 – 34,9), Obésité classe II (35,0 – 39,9) et Obésité classe III (≥ 40,0)."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "BMI-Tabelle für Erwachsene – Größen- & Gewichtstabelle (kg)",
      "intro": "Offizielle WHO BMI-Tabelle für Erwachsene, Männer und Frauen. Interaktiver BMI-Skala-Rechner, Größe-Gewicht-Referenztabellen in metrischen Einheiten (kg & cm), WHO-Kategorien und Altersreferenzwerte. Kostenlos und datenschutzorientiert im Browser.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardmäßig validierten Gleichungen.",
      "formulaCode": "BMI = kg / m²",
      "tableTitle": "WHO Internationale BMI-Gewichtsklassen-Referenztabelle",
      "tableRows": [
        {
          "col1": "Starkes Untergewicht",
          "col2": "< 16.0 kg/m²",
          "col3": "Referenzwert für starkes Untergewicht"
        },
        {
          "col1": "Mäßiges Untergewicht",
          "col2": "16.0 – 16.9 kg/m²",
          "col3": "Referenzwert für mäßiges Untergewicht"
        },
        {
          "col1": "Leichtes Untergewicht",
          "col2": "17.0 – 18.4 kg/m²",
          "col3": "Referenzwert für leichtes Untergewicht"
        },
        {
          "col1": "Normalgewicht",
          "col2": "18.5 – 24.9 kg/m²",
          "col3": "Optimaler gesunder Referenzbereich für Erwachsene"
        },
        {
          "col1": "Übergewicht",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": "Referenzbereich Übergewicht (Asiatischer Schwellenwert: 23.0 kg/m²)"
        },
        {
          "col1": "Adipositas Grad I (25,0 – 29,9 kg/m²)",
          "col2": "30.0 – 34.9 kg/m²",
          "col3": "Screening-Referenz für Adipositas Klasse I"
        },
        {
          "col1": "Adipositas Grad II (≥ 30,0 kg/m²)",
          "col2": "35.0 – 39.9 kg/m²",
          "col3": "Screening-Referenz für Adipositas Klasse II"
        },
        {
          "col1": "Adipositas Grad III",
          "col2": "≥ 40.0 kg/m²",
          "col3": "Schwellenwert für schwere Adipositas Klasse III"
        }
      ],
      "faqs": [
        {
          "question": "Was ist eine BMI-Tabelle und wie liest man sie?",
          "answer": "Eine BMI-Tabelle ist ein visuelles Referenzraster, das Körpergröße und Gewicht abgleicht, um die von der Weltgesundheitsorganisation (WHO) definierten Standard-Kategorien des Body-Mass-Index darzustellen."
        },
        {
          "question": "Gelten die Richtwerte gleichermaßen für Männer und Frauen?",
          "answer": "Die WHO-BMI-Tabelle für Erwachsene verwendet dieselben Grenzwerte (18,5 bis 24,9 für Normalgewicht) für Männer und Frauen. Taillenumfang und Körperzusammensetzung bieten zusätzlichen Kontext."
        },
        {
          "question": "Wie verändern sich die Referenzbereiche im höheren Lebensalter?",
          "answer": "Die Standardkategorien der WHO gelten für alle Erwachsenen ab 20 Jahren. Bei Senioren über 65 Jahren kann ein leicht höherer BMI (23,0 bis 27,0 kg/m²) Schutz vor Knochendichteverlust bieten."
        },
        {
          "question": "Wie funktioniert der Größen- und Gewichtsabgleich nach dem metrischen System?",
          "answer": "Eine metrische Übersicht ordnet Körpergröße in Zentimetern und Gewicht in Kilogramm zu. Beispiel: 170 cm Größe und 65 kg Gewicht ergeben einen BMI von 22,5 kg/m² (Normalgewicht)."
        },
        {
          "question": "Welche Klassifizierungsstufen definiert die Weltgesundheitsorganisation (WHO)?",
          "answer": "Die offiziellen WHO-Kategorien lauten: Untergewicht (< 18,5), Normalgewicht (18,5 – 24,9), Übergewicht (25,0 – 29,9), Adipositas Grad I (30,0 – 34,9), Adipositas Grad II (35,0 – 39,9) und Adipositas Grad III (≥ 40,0)."
        }
      ]
    },
    "ko": {
      "eyebrow": "건강 참조 표준 지침",
      "title": "성인 BMI 표준 체중표 – 신장 및 체중 비교 차트 (kg 및 cm) – 참조 계산기",
      "intro": "성인 남성과 여성을 위한 공식 WHO BMI 차트입니다. 대화형 BMI 지수 계산기, 신장-체중 미터법 진단표(kg & cm), WHO 체중 범주 및 연령별 건강 체중 참조 지침을 브라우저에서 100% 무료로 확인하세요. 세계보건기구(WHO) 기준에 따른 안전한 무료 건강 도구입니다.",
      "formulaTitle": "표준 계산 공식",
      "formulaDesc": "검증된 표준 공식을 사용하여 계산됩니다.",
      "formulaCode": "BMI = kg / m²",
      "tableTitle": "WHO 국제 표준 BMI 체중 범주 참조 차트",
      "tableRows": [
        {
          "col1": "중증 저체중 (< 16.0)",
          "col2": "< 16.0 kg/m²",
          "col3": "심각한 저체중 위험 기준"
        },
        {
          "col1": "중등도 저체중 (16.0 – 16.9)",
          "col2": "16.0 – 16.9 kg/m²",
          "col3": "중등도 저체중 참조 범위"
        },
        {
          "col1": "경도 저체중 (17.0 – 18.4)",
          "col2": "17.0 – 18.4 kg/m²",
          "col3": "경도 저체중 참조 기준"
        },
        {
          "col1": "정상 체중 (18.5 – 24.9)",
          "col2": "18.5 – 24.9 kg/m²",
          "col3": "성인을 위한 최적의 건강 기준 범위"
        },
        {
          "col1": "과체중 (25.0 – 29.9)",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": "과체중 범위 (아시아인 기준: 23.0 kg/m²)"
        },
        {
          "col1": "비만 1단계 (30.0 – 34.9)",
          "col2": "30.0 – 34.9 kg/m²",
          "col3": "비만 1단계 판정 기준"
        },
        {
          "col1": "비만 2단계 (35.0 – 39.9)",
          "col2": "35.0 – 39.9 kg/m²",
          "col3": "비만 2단계 판정 기준"
        },
        {
          "col1": "고도 비만 3단계 (≥ 40.0)",
          "col2": "≥ 40.0 kg/m²",
          "col3": "고도 비만 3단계 판정 임계치"
        }
      ],
      "faqs": [
        {
          "question": "성인 BMI 기준표란 무엇인가요?",
          "answer": "신장과 체중을 바탕으로 저체중, 정상, 과체중, 비만 범주를 한눈에 확인할 수 있는 공식 참고 기준표입니다."
        },
        {
          "question": "BMI 차트는 남성과 여성 간에 차이가 있나요?",
          "answer": "WHO 표준 BMI 기준(18.5~24.9)은 성인 남녀 공통으로 적용되지만, 개인의 체지방률과 근육량에 따라 신체 구성은 다를 수 있습니다."
        },
        {
          "question": "연령에 따라 성인 및 노인의 BMI 차트 적용 방식이 달라지나요?",
          "answer": "노년층의 경우 체중 감소로 인한 건강 위험을 고려하여 약간 더 높은 BMI 범위가 권장되기도 합니다."
        },
        {
          "question": "kg 및 cm 단위의 미터법 BMI 차트는 어떻게 보나요?",
          "answer": "신장(cm)과 체중(kg)이 교차하는 지점을 확인하여 해당되는 체중 범주를 쉽게 확인할 수 있습니다."
        },
        {
          "question": "공식 BMI 차트의 주요 4가지 범주는 무엇인가요?",
          "answer": "WHO 기준: 저체중(18.5 미만), 정상 체중(18.5–24.9), 과체중(25.0–29.9), 비만(30.0 이상)으로 분류됩니다."
        }
      ]
    },
    "hi": {
      "eyebrow": "डब्ल्यूएचओ आधिकारिक वयस्क बीएमआई स्केल",
      "title": "वयस्कों के लिए बीएमआई चार्ट - ऊंचाई एवं वजन तालिका",
      "intro": "हमारा विस्तृत बीएमआई चार्ट (BMI Chart) और तालिका वयस्क पुरुषों और महिलाओं के लिए तुरंत दृश्य संदर्भ प्रदान करती है। विश्व स्वास्थ्य संगठन (WHO) और CDC मानकों के अनुसार मीट्रिक (किग्रा और सेमी) और इंपीरियल (पाउंड और इंच) श्रेणियों में अपना बीएमआई देखें।",
      "formulaTitle": "मानक बीएमआई चार्ट फॉर्मूला",
      "formulaDesc": "मीट्रिक: बीएमआई = वजन (किग्रा) / [ऊंचाई (मीटर)]²",
      "formulaCode": "BMI = kg / m²",
      "tableTitle": "वयस्कों (पुरुषों एवं महिलाओं) के लिए आधिकारिक डब्ल्यूएचओ बीएमआई श्रेणियां चार्ट",
      "tableRows": [
        {
          "col1": "कम वजन",
          "col2": "< 18.5 kg/m²",
          "col3": "कम वजन संदर्भ सीमा"
        },
        {
          "col1": "सामान्य / स्वस्थ वजन (Normal Weight)",
          "col2": "18.5 – 24.9 kg/m²",
          "col3": "वयस्कों के लिए आदर्श स्वस्थ बीएमआई सीमा"
        },
        {
          "col1": "अधिक वजन",
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
          "col3": "मोटापा श्रेणी II स्क्रीनिंग संदर्भ"
        },
        {
          "col1": "श्रेणी / स्तर 8",
          "col2": "≥ 40.0 kg/m²",
          "col3": "गंभीर मोटापा श्रेणी III संदर्भ सीमा"
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
  "bmi-calculator-for-indians": {
    "en": {
      "eyebrow": "ICMR & WHO South Asian Standards",
      "title": "BMI Calculator for Indians – Healthy Weight Chart & Cutoffs",
      "intro": "Free online BMI Calculator for Indians based on Indian Council of Medical Research (ICMR) and WHO Asia-Pacific reference standards. Compute your Body Mass Index (BMI) using kg and cm, check whether your weight falls into the healthy Indian range (18.5 – 22.9 kg/m²), and review ICMR waist circumference guidelines.",
      "formulaTitle": "Official ICMR Indian BMI Formula (kg & cm)",
      "formulaDesc": "BMI = Weight (kg) / [Height (m)]² | Healthy Range for Indians: 18.5 – 22.9 kg/m² | Overweight Cutoff: ≥ 23.0 kg/m²",
      "formulaCode": "BMI = Weight (kg) / [(Height in cm / 100)²]",
      "tableTitle": "ICMR & WHO Adult BMI Reference Chart for Indians (kg/m²)",
      "tableRows": [
        {
          "col1": "Underweight (< 18.5 kg/m²)",
          "col2": "< 18.5 kg/m²",
          "col3": "Nutritional deficiency and low body mass risk"
        },
        {
          "col1": "Optimal Normal Weight (18.5 – 22.9 kg/m²)",
          "col2": "18.5 – 22.9 kg/m²",
          "col3": "Recommended healthy target range for Indian adults"
        },
        {
          "col1": "Overweight / Elevated Risk (23.0 – 24.9 kg/m²)",
          "col2": "23.0 – 24.9 kg/m²",
          "col3": "Action threshold for cardiometabolic screening"
        },
        {
          "col1": "Obese Class I (25.0 – 29.9 kg/m²)",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": "Moderate obesity threshold under ICMR guidelines"
        },
        {
          "col1": "Obese Class II (≥ 30.0 kg/m²)",
          "col2": "≥ 30.0 kg/m²",
          "col3": "Severe obesity risk bracket requiring medical guidance"
        }
      ],
      "faqs": [
        {
          "question": "What is the healthy BMI range for Indians?",
          "answer": "According to ICMR and WHO South Asian guidelines, the healthy BMI range for Indian men and women is 18.5 to 22.9 kg/m²."
        },
        {
          "question": "Why is the overweight cutoff 23.0 for Indians instead of 25.0?",
          "answer": "South Asian populations exhibit higher visceral fat percentages at lower Body Mass Index scores, increasing cardiometabolic risk starting at a BMI of 23.0 kg/m² under ICMR and WHO guidelines."
        },
        {
          "question": "How to calculate ideal body weight for height in India?",
          "answer": "Multiply your height in meters squared by 18.5 for the minimum healthy weight and by 22.9 for the maximum recommended healthy weight under WHO and ICMR Indian standards."
        }
      ]
    },
    "es": {
      "eyebrow": "Estándares ICMR y OMS para el Sur de Asia",
      "title": "Calculadora de IMC Adultos Indios – Pautas ICMR y OMS",
      "intro": "Calculadora de IMC para la población india en línea gratuita basada en los estándares de referencia del Consejo Indio de Investigación Médica (ICMR) y la OMS para Asia-Pacífico. Calcula tu Índice de Masa Corporal (IMC) usando kg y cm, comprueba si tu peso se sitúa en el rango saludable para adultos indios (18.5 – 22.9 kg/m²) y consulta las pautas de circunferencia de cintura del ICMR.",
      "formulaTitle": "Fórmula Oficial del IMC para la Población India según ICMR (kg y cm)",
      "formulaDesc": "IMC = Peso (kg) / [Altura (m)]² | Rango saludable para adultos indios: 18.5 – 22.9 kg/m² | Punto de corte para sobrepeso: ≥ 23.0 kg/m²",
      "formulaCode": "IMC = Peso (kg) / [(Altura en cm / 100)²]",
      "tableTitle": "Tabla de Referencia de IMC para Adultos Indios según ICMR y la OMS (kg/m²)",
      "tableRows": [
        {
          "col1": "Bajo Peso (< 18.5 kg/m²)",
          "col2": "< 18.5 kg/m²",
          "col3": "Riesgo de deficiencia nutricional y bajo peso corporal"
        },
        {
          "col1": "Peso Normal Óptimo (18.5 – 22.9 kg/m²)",
          "col2": "18.5 – 22.9 kg/m²",
          "col3": "Rango saludable recomendado para adultos indios"
        },
        {
          "col1": "Sobrepeso / Riesgo Elevado (23.0 – 24.9 kg/m²)",
          "col2": "23.0 – 24.9 kg/m²",
          "col3": "Umbral de intervención cardiometabólica temprana"
        },
        {
          "col1": "Obesidad Clase I (25.0 – 29.9 kg/m²)",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": "Criterio de obesidad moderada según directrices ICMR"
        },
        {
          "col1": "Obesidad Clase II (≥ 30.0 kg/m²)",
          "col2": "≥ 30.0 kg/m²",
          "col3": "Umbral de riesgo de obesidad severa"
        }
      ],
      "faqs": [
        {
          "question": "¿Cuál es el rango de IMC saludable para los indios?",
          "answer": "Según las pautas del ICMR y de la OMS para el sur de Asia, el rango saludable de IMC para hombres y mujeres indios es de 18.5 a 22.9 kg/m²."
        },
        {
          "question": "¿Por qué el límite de sobrepeso es 23.0 para la población india en lugar de 25.0?",
          "answer": "Las poblaciones del sur de Asia presentan un mayor porcentaje de grasa visceral a índices de masa corporal más bajos, lo que incrementa el riesgo cardiometabólico a partir de un IMC de 23.0 kg/m² según las directrices del ICMR y la OMS."
        },
        {
          "question": "¿Cómo calcular el peso corporal ideal según la altura en India?",
          "answer": "Multiplica tu altura en metros al cuadrado por 18.5 para el peso saludable mínimo y por 22.9 para el peso saludable máximo recomendado según los estándares indios de la OMS y el ICMR."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes ICMR et OMS pour l'Asie du Sud",
      "title": "Calculateur d'IMC Adultes Indiens – Normes ICMR et OMS",
      "intro": "Calculateur d'IMC gratuit pour les Indiens basé sur les normes de référence du Conseil indien de la recherche médicale (ICMR) et de l'OMS Asie-Pacifique. Calculez votre Indice de Masse Corporelle (IMC) en kg et cm, vérifiez si votre poids se situe dans la plage saine pour adultes indiens (18,5 – 22,9 kg/m²) et consultez les recommandations de tour de taille de l'ICMR.",
      "formulaTitle": "Formule Officielle d'IMC Indien selon l'ICMR (kg et cm)",
      "formulaDesc": "IMC = Poids (kg) / [Taille (m)]² | Plage saine pour adultes indiens : 18,5 – 22,9 kg/m² | Seuil de surpoids : ≥ 23,0 kg/m²",
      "formulaCode": "IMC = Poids (kg) / [(Taille en cm / 100)²]",
      "tableTitle": "Tableau de Référence d'IMC pour Adultes Indiens selon l'ICMR et l'OMS (kg/m²)",
      "tableRows": [
        {
          "col1": "Insuffisance Pondérale (< 18.5 kg/m²)",
          "col2": "< 18.5 kg/m²",
          "col3": "Seuil de référence pour déficits nutritionnels"
        },
        {
          "col1": "Poids Normal Optimal (18.5 – 22.9 kg/m²)",
          "col2": "18.5 – 22.9 kg/m²",
          "col3": "Plage de santé optimale pour adultes indiens"
        },
        {
          "col1": "Surpoids / Risque Accru (23.0 – 24.9 kg/m²)",
          "col2": "23.0 – 24.9 kg/m²",
          "col3": "Seuil de vigilance cardiométabolique précoce"
        },
        {
          "col1": "Obésité Classe I (25.0 – 29.9 kg/m²)",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": "Seuil d'obésité modérée selon l'ICMR"
        },
        {
          "col1": "Obésité Classe II (≥ 30.0 kg/m²)",
          "col2": "≥ 30.0 kg/m²",
          "col3": "Palier de risque d'obésité sévère"
        }
      ],
      "faqs": [
        {
          "question": "Quelle est la plage d'IMC saine pour les Indiens ?",
          "answer": "Selon les directives de l'ICMR et de l'OMS pour l'Asie du Sud, la plage d'IMC saine pour les hommes et femmes indiens se situe entre 18,5 et 22,9 kg/m²."
        },
        {
          "question": "Pourquoi le seuil de surpoids est-il de 23.0 pour les Indiens au lieu de 25.0 ?",
          "answer": "Les populations d'Asie du Sud présentent un pourcentage plus élevé de graisse viscérale à des indices de masse corporelle plus bas, ce qui augmente le risque cardiométabolique dès un IMC de 23,0 kg/m² selon les directives de l'ICMR et de l'OMS."
        },
        {
          "question": "Comment calculer le poids idéal selon la taille en Inde ?",
          "answer": "Multipliez votre taille en mètres au carré par 18,5 pour le poids santé minimum et par 22,9 pour le poids santé maximum recommandé selon les normes indiennes de l'OMS et de l'ICMR."
        }
      ]
    },
    "de": {
      "eyebrow": "ICMR & WHO Südasien-Referenzstandards",
      "title": "BMI-Rechner für indische Erwachsene – ICMR Referenz",
      "intro": "Kostenloser Online-BMI-Rechner für Erwachsene basierend auf den Referenzstandards des Indian Council of Medical Research (ICMR) und der WHO-Südasien-Region. Berechnen Sie Ihren Body-Mass-Index (BMI) in kg und cm, prüfen Sie, ob Ihr Gewicht im gesunden Zielbereich liegt (18,5 – 22,9 kg/m²), und überprüfen Sie die populationsspezifischen ICMR-Taillenumfangsrichtlinien.",
      "formulaTitle": "Offizielle ICMR-BMI-Formel für indische Erwachsene (kg & cm)",
      "formulaDesc": "BMI = Gewicht (kg) / [Größe (m)]² | Gesunder Bereich für indische Erwachsene: 18,5 – 22,9 kg/m² | Übergewichtsschwelle: ≥ 23,0 kg/m²",
      "formulaCode": "BMI = Gewicht (kg) / [(Größe in cm / 100)²]",
      "tableTitle": "ICMR & WHO Erwachsenen-BMI-Referenztabelle für indische Erwachsene",
      "tableRows": [
        {
          "col1": "Untergewicht (< 18,5 kg/m²)",
          "col2": "< 18,5 kg/m²",
          "col3": "Erhöhtes Risiko für Nährstoffmängel und Unterernährung"
        },
        {
          "col1": "Normalgewicht / Optimal (18,5 – 22,9 kg/m²)",
          "col2": "18,5 – 22,9 kg/m²",
          "col3": "Optimaler gesunder Bereich für indische Erwachsene"
        },
        {
          "col1": "Übergewicht / Erhöhtes Risiko (23,0 – 24,9 kg/m²)",
          "col2": "23,0 – 24,9 kg/m²",
          "col3": "Erhöhter kardiometabolischer Risikogrenzwert für Inder"
        },
        {
          "col1": "Adipositas Grad I (25,0 – 29,9 kg/m²)",
          "col2": "25,0 – 29,9 kg/m²",
          "col3": "Schwellenwert für Adipositas Grad I nach ICMR-Standards"
        },
        {
          "col1": "Adipositas Grad II (≥ 30,0 kg/m²)",
          "col2": "≥ 30,0 kg/m²",
          "col3": "Risikoschwelle für schwere Adipositas"
        }
      ],
      "faqs": [
        {
          "question": "Was ist der gesunde BMI-Bereich für indische Erwachsene?",
          "answer": "Gemäß den Richtlinien von ICMR und WHO für Südasien liegt der gesunde BMI-Bereich für indische Männer und Frauen zwischen 18,5 und 22,9 kg/m²."
        },
        {
          "question": "Warum liegt der Grenzwert für Übergewicht bei Indern bei 23.0 statt 25.0?",
          "answer": "Südasiatische Populationen weisen bei niedrigerem Body-Mass-Index einen höheren Anteil an viszeralem Fett auf, wodurch das kardiometabolische Risiko gemäß ICMR- und WHO-Richtlinien bereits ab einem BMI von 23,0 kg/m² steigt."
        },
        {
          "question": "Wie berechnet man das ideale Körpergewicht nach der Größe in Indien?",
          "answer": "Multiplizieren Sie Ihre Körpergröße in Metern zum Quadrat mit 18,5 für das Mindestgesundgewicht und mit 22,9 für das empfohlene Höchstgewicht nach indischen WHO- und ICMR-Standards."
        }
      ]
    },
    "ko": {
      "eyebrow": "ICMR 및 WHO 남아시아 공중보건 참조 기준",
      "title": "인도인을 위한 BMI 계산기 – ICMR 및 WHO 인도 표준 건강 체중표 – 참조 계산기",
      "intro": "인도 의학연구위원회(ICMR) 및 WHO 아시아-태평양 공중보건 참조 기준을 바탕으로 설계된 인도 성인 전용 무료 온라인 BMI 계산기입니다. kg 및 cm 단위로 체질량지수를 계산하고, 인도 성인 표준 건강 체중 범위(18.5 – 22.9 kg/m²) 충족 여부와 ICMR 허리둘레 권장 기준을 확인하세요.",
      "formulaTitle": "공식 ICMR 인도 성인 BMI 계산 공식 (kg & cm)",
      "formulaDesc": "BMI = 체중 (kg) / [신장 (m)]² | 인도 성인 건강 체중 범위: 18.5 – 22.9 kg/m² | 과체중 주의 기준: ≥ 23.0 kg/m²",
      "formulaCode": "BMI = 체중 (kg) / [(신장 cm / 100)²]",
      "tableTitle": "ICMR 및 WHO 인도 성인 BMI 표준 참조 진단표 (kg/m²)",
      "tableRows": [
        {
          "col1": "저체중 (< 18.5 kg/m²)",
          "col2": "< 18.5 kg/m²",
          "col3": "영양 결핍 및 저체중 건강 위험군"
        },
        {
          "col1": "최적 정상 체중 (18.5 – 22.9 kg/m²)",
          "col2": "18.5 – 22.9 kg/m²",
          "col3": "인도 성인 최적 건강 체중 범위"
        },
        {
          "col1": "과체중 / 위험군 (23.0 – 24.9 kg/m²)",
          "col2": "23.0 – 24.9 kg/m²",
          "col3": "인도인 심대사 위험 증가 주의 기준점"
        },
        {
          "col1": "1단계 비만 (25.0 – 29.9 kg/m²)",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": "ICMR 기준 1단계 비만 임계값"
        },
        {
          "col1": "2단계 비만 (≥ 30.0 kg/m²)",
          "col2": "≥ 30.0 kg/m²",
          "col3": "중증 비만 고위험 임계값"
        }
      ],
      "faqs": [
        {
          "question": "인도 성인의 건강한 BMI 정상 범위는 얼마인가요?",
          "answer": "ICMR 및 WHO 남아시아 지침에 따르면 인도 성인 남녀의 건강한 정상 BMI 범위는 18.5 ~ 22.9 kg/m²입니다."
        },
        {
          "question": "인도 성인의 과체중 기준이 25.0이 아닌 23.0인 이유는 무엇인가요?",
          "answer": "남아시아 및 인도인 인구는 낮은 BMI에서도 더 높은 내장지방 비율을 보여, ICMR 및 WHO 지침에 따라 23.0 kg/m²부터 심대사 위험이 증가합니다."
        },
        {
          "question": "인도 표준 지침에 따른 신장별 적정 체중은 어떻게 계산하나요?",
          "answer": "신장(m)의 제곱에 18.5를 곱하면 최소 권장 건강 체중이 되고, 22.9를 곱하면 최대 권장 건강 체중 범위가 됩니다."
        }
      ]
    },
    "hi": {
      "eyebrow": "आईसीएमआर एवं डब्ल्यूएचओ भारतीय मानक",
      "title": "भारतीयों के लिए बीएमआई कैलकुलेटर – स्वस्थ वजन चार्ट एवं ICMR कटऑफ",
      "intro": "भारतीय चिकित्सा अनुसंधान परिषद (ICMR) और WHO दक्षिण एशियाई दिशानिर्देशों पर आधारित भारतीयों के लिए मुफ़्त बीएमआई कैलकुलेटर। किलोग्राम और सेंटीमीटर में अपने बीएमआई और स्वस्थ वजन सीमा की गणना करें।",
      "formulaTitle": "भारतीय बीएमआई सूत्र",
      "formulaDesc": "बीएमआई = वजन (किग्रा) / [ऊंचाई (मीटर)]² | भारतीयों के लिए स्वस्थ सीमा: 18.5 - 22.9 kg/m²",
      "formulaCode": "BMI = kg / m²",
      "tableTitle": "भारतीय वयस्कों के लिए बीएमआई श्रेणी चार्ट (ICMR मानक)",
      "tableRows": [
        {
          "col1": "कम वजन (< 18.5 kg/m²)",
          "col2": "< 18.5 kg/m²",
          "col3": "पोषण की कमी और कम वजन का जोखिम"
        },
        {
          "col1": "इष्टतम सामान्य वजन (18.5 – 22.9 kg/m²)",
          "col2": "18.5 – 22.9 kg/m²",
          "col3": "भारतीय वयस्कों के लिए इष्टतम स्वस्थ वजन सीमा"
        },
        {
          "col1": "अधिक वजन / जोखिम सीमा (23.0 – 24.9 kg/m²)",
          "col2": "23.0 – 24.9 kg/m²",
          "col3": "भारतीयों के लिए ऊंचा कार्डियोमेटाबॉलिक जोखिम कटऑफ"
        },
        {
          "col1": "मोटापा श्रेणी I (25.0 – 29.9 kg/m²)",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": "ICMR मानकों के तहत मोटापा श्रेणी I सीमा"
        },
        {
          "col1": "मोटापा श्रेणी II (≥ 30.0 kg/m²)",
          "col2": "≥ 30.0 kg/m²",
          "col3": "गंभीर मोटापा जोखिम सीमा"
        }
      ],
      "faqs": [
        {
          "question": "भारतीयों के लिए स्वस्थ बीएमआई सीमा क्या है?",
          "answer": "ICMR और WHO दक्षिण एशियाई दिशानिर्देशों के अनुसार भारतीय पुरुषों और महिलाओं के लिए स्वस्थ बीएमआई सीमा 18.5 से 22.9 kg/m² है।"
        },
        {
          "question": "भारतीयों के लिए अधिक वजन का कटऑफ 25.0 के बजाय 23.0 क्यों है?",
          "answer": "दक्षिण एशियाई आबादी कम बॉडी मास इंडेक्स पर भी उच्च विसरल वसा प्रतिशत प्रदर्शित करती है, जिससे ICMR और WHO दिशानिर्देशों के तहत 23.0 kg/m² पर कार्डियोमेटाबॉलिक जोखिम बढ़ने लगता है।"
        },
        {
          "question": "भारत में ऊंचाई के अनुसार आदर्श शरीर भार की गणना कैसे करें?",
          "answer": "WHO और ICMR भारतीय मानकों के तहत न्यूनतम स्वस्थ वजन के लिए अपनी ऊंचाई के वर्ग (मीटर²) को 18.5 से और अधिकतम अनुशंसित स्वस्थ वजन के लिए 22.9 से गुणा करें।"
        }
      ]
    }
  },
  "healthy-weight-by-height": {
    "en": {
      "eyebrow": "WHO & Devine Reference Charts",
      "title": "Optimal Weight by Height Chart & Recommended Ranges",
      "intro": "Explore standard adult weight brackets and stature lookup tables for men and women. Check your target body mass in kilograms (kg) and pounds (lbs) based on World Health Organization (WHO), CDC, and Devine clinical formulas.",
      "formulaTitle": "Standard Target Weight & Ideal Body Mass Equations",
      "formulaDesc": "WHO Healthy Weight Range: Min Weight = 18.5 × [Height (m)]² | Max Weight = 24.9 × [Height (m)]² | Devine IBW Male: 50kg + 2.3kg/inch >5ft | Devine IBW Female: 45.5kg + 2.3kg/inch >5ft",
      "formulaCode": "Min Target (kg) = 18.5 × m²  |  Max Target (kg) = 24.9 × m²",
      "tableTitle": "Stature-to-Weight Chart for Men & Women (WHO Baseline in kg & lbs)",
      "tableRows": [
        {
          "col1": "4' 10\" (147 cm)",
          "col2": "40.0 – 53.8 kg (88 – 119 lbs)",
          "col3": "Devine IBW: Male ~43.2 kg | Female ~36.3 kg"
        },
        {
          "col1": "5' 0\" (152 cm)",
          "col2": "42.8 – 57.6 kg (94 – 127 lbs)",
          "col3": "Devine IBW: Male ~50.0 kg | Female ~45.5 kg"
        },
        {
          "col1": "5' 2\" (157 cm)",
          "col2": "45.6 – 61.4 kg (100 – 135 lbs)",
          "col3": "Devine IBW: Male ~54.6 kg | Female ~50.1 kg"
        },
        {
          "col1": "5' 4\" (163 cm)",
          "col2": "49.2 – 66.2 kg (108 – 146 lbs)",
          "col3": "Devine IBW: Male ~59.2 kg | Female ~54.7 kg"
        },
        {
          "col1": "5' 6\" (168 cm)",
          "col2": "52.2 – 70.3 kg (115 – 155 lbs)",
          "col3": "Devine IBW: Male ~63.8 kg | Female ~59.3 kg"
        },
        {
          "col1": "5' 8\" (173 cm)",
          "col2": "55.4 – 74.5 kg (122 – 164 lbs)",
          "col3": "Devine IBW: Male ~68.4 kg | Female ~63.9 kg"
        },
        {
          "col1": "5' 10\" (178 cm)",
          "col2": "58.6 – 78.9 kg (129 – 174 lbs)",
          "col3": "Devine IBW: Male ~73.0 kg | Female ~68.5 kg"
        },
        {
          "col1": "6' 0\" (183 cm)",
          "col2": "62.0 – 83.4 kg (136 – 184 lbs)",
          "col3": "Devine IBW: Male ~77.6 kg | Female ~73.1 kg"
        },
        {
          "col1": "6' 2\" (188 cm)",
          "col2": "65.4 – 88.0 kg (144 – 194 lbs)",
          "col3": "Devine IBW: Male ~82.2 kg | Female ~77.7 kg"
        }
      ],
      "faqs": [
        {
          "question": "What is the recommended body weight bracket for my stature?",
          "answer": "A standard target range corresponds to a BMI between 18.5 and 24.9 kg/m² under World Health Organization (WHO) adult reference baselines."
        },
        {
          "question": "How do height-weight reference tables work for adults?",
          "answer": "These lookup charts map proportional mass boundaries to specific vertical statures. For example, for an individual measuring 5 ft 10 in (178 cm), the normal weight window spans approximately 59 to 79 kg (129 to 174 lbs)."
        },
        {
          "question": "How to calculate ideal weight by height?",
          "answer": "Ideal weight can be estimated using the classic Devine equation: For Men: 50 kg + 2.3 kg per inch over 5 feet. For Women: 45.5 kg + 2.3 kg per inch over 5 feet."
        },
        {
          "question": "Are recommended target weights different for men and women?",
          "answer": "While standard WHO BMI cutoffs (18.5 to 24.9) apply identically to adult men and women, clinical ideal body weight (IBW) formulas assign slightly lower target values to biological females due to differences in skeletal frame and musculature."
        },
        {
          "question": "What is the recommended weight range for Indian and South Asian adults?",
          "answer": "Under ICMR and WHO South Asian guidelines, recommended target BMI ranges between 18.5 and 22.9 kg/m², producing lower upper-boundary weights to safeguard against premature visceral fat accumulation."
        }
      ]
    },
    "es": {
      "eyebrow": "Estándares de Referencia de Salud",
      "title": "Tabla de Peso Saludable por Altura – Rango de Peso Ideal",
      "intro": "Calculadora gratuita de peso saludable por altura y matriz de peso corporal ideal. Consulta rangos de peso saludable por altura (cm, pies, pulgadas) según los estándares OMS IMC 18.5 - 24.9 y la fórmula de Devine con cálculos privados en el navegador.",
      "formulaTitle": "Fórmula de Referencia Estándar",
      "formulaDesc": "Calculado utilizando ecuaciones estándar validadas.",
      "formulaCode": "Min Healthy (kg) = 18.5 × m²  |  Max Healthy (kg) = 24.9 × m²",
      "tableTitle": "Tabla de Peso y Altura para Hombres y Mujeres (Rango Saludable Oficial OMS en kg y lbs)",
      "tableRows": [
        {
          "col1": "4' 10\" (147 cm)",
          "col2": "40.0 – 53.8 kg (88 – 119 lbs)",
          "col3": "IBW Devine: Hombres ~43.2 kg | Mujeres ~36.3 kg"
        },
        {
          "col1": "5' 0\" (152 cm)",
          "col2": "42.8 – 57.6 kg (94 – 127 lbs)",
          "col3": "IBW Devine: Hombres ~50.0 kg | Mujeres ~45.5 kg"
        },
        {
          "col1": "5' 2\" (157 cm)",
          "col2": "45.6 – 61.4 kg (100 – 135 lbs)",
          "col3": "IBW Devine: Hombres ~54.6 kg | Mujeres ~50.1 kg"
        },
        {
          "col1": "5' 4\" (163 cm)",
          "col2": "49.2 – 66.2 kg (108 – 146 lbs)",
          "col3": "IBW Devine: Hombres ~59.2 kg | Mujeres ~54.7 kg"
        },
        {
          "col1": "5' 6\" (168 cm)",
          "col2": "52.2 – 70.3 kg (115 – 155 lbs)",
          "col3": "IBW Devine: Hombres ~63.8 kg | Mujeres ~59.3 kg"
        },
        {
          "col1": "5' 8\" (173 cm)",
          "col2": "55.4 – 74.5 kg (122 – 164 lbs)",
          "col3": "IBW Devine: Hombres ~68.4 kg | Mujeres ~63.9 kg"
        },
        {
          "col1": "5' 10\" (178 cm)",
          "col2": "58.6 – 78.9 kg (129 – 174 lbs)",
          "col3": "IBW Devine: Hombres ~73.0 kg | Mujeres ~68.5 kg"
        },
        {
          "col1": "6' 0\" (183 cm)",
          "col2": "62.0 – 83.4 kg (136 – 184 lbs)",
          "col3": "IBW Devine: Hombres ~77.6 kg | Mujeres ~73.1 kg"
        },
        {
          "col1": "6' 2\" (188 cm)",
          "col2": "65.4 – 88.0 kg (144 – 194 lbs)",
          "col3": "IBW Devine: Hombres ~82.2 kg | Mujeres ~77.7 kg"
        }
      ],
      "faqs": [
        {
          "question": "¿Cuál es un peso saludable para mi altura?",
          "answer": "Un peso saludable para tu estatura se sitúa generalmente dentro de un IMC de 18.5 a 24.9 kg/m² según los estándares de la OMS."
        },
        {
          "question": "¿Qué es la tabla de peso saludable por altura para hombres y mujeres?",
          "answer": "Es una tabla de referencia que muestra los rangos de peso recomendados según la estatura en centímetros o pies y pulgadas."
        },
        {
          "question": "¿Cómo calcular el peso ideal según la altura?",
          "answer": "Puede estimarse con fórmulas como Devine: hombres: 50 kg + 2.3 kg por cada pulgada sobre 5 pies; mujeres: 45.5 kg + 2.3 kg por pulgada sobre 5 pies."
        },
        {
          "question": "¿Es diferente la tabla de peso saludable para hombres y mujeres?",
          "answer": "Aunque los rangos de IMC de la OMS (18.5 a 24.9) aplican a ambos sexos, las fórmulas de peso ideal (IBW) suelen diferenciar por masa ósea y muscular promedio."
        },
        {
          "question": "¿Cuál es el peso saludable por altura para adultos indios?",
          "answer": "Para poblaciones del sur de Asia e India, las directrices del ICMR recomiendan un rango de IMC saludable de 18.5 a 22.9 kg/m²."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de Référence de Santé",
      "title": "Tableau du Poids Santé selon la Taille – Plage Idéale",
      "intro": "Calculateur gratuit de poids idéal par taille et matrice de poids santé. Consultez les plages de poids santé selon la taille (cm, pieds, pouces) basées sur les normes OMS IMC 18,5 - 24,9 et la formule de Devine avec calculs sur navigateur.",
      "formulaTitle": "Formule de Référence Standard",
      "formulaDesc": "Calculé à l'aide d'équations standards validées.",
      "formulaCode": "Min Healthy (kg) = 18.5 × m²  |  Max Healthy (kg) = 24.9 × m²",
      "tableTitle": "Tableau Poids-Taille pour Hommes et Femmes (Plage Santé Officielle OMS en kg et lbs)",
      "tableRows": [
        {
          "col1": "4' 10\" (147 cm)",
          "col2": "40.0 – 53.8 kg (88 – 119 lbs)",
          "col3": "Poids idéal Devine : Hommes ~43.2 kg | Femmes ~36.3 kg"
        },
        {
          "col1": "5' 0\" (152 cm)",
          "col2": "42.8 – 57.6 kg (94 – 127 lbs)",
          "col3": "Poids idéal Devine : Hommes ~50.0 kg | Femmes ~45.5 kg"
        },
        {
          "col1": "5' 2\" (157 cm)",
          "col2": "45.6 – 61.4 kg (100 – 135 lbs)",
          "col3": "Poids idéal Devine : Hommes ~54.6 kg | Femmes ~50.1 kg"
        },
        {
          "col1": "5' 4\" (163 cm)",
          "col2": "49.2 – 66.2 kg (108 – 146 lbs)",
          "col3": "Poids idéal Devine : Hommes ~59.2 kg | Femmes ~54.7 kg"
        },
        {
          "col1": "5' 6\" (168 cm)",
          "col2": "52.2 – 70.3 kg (115 – 155 lbs)",
          "col3": "Poids idéal Devine : Hommes ~63.8 kg | Femmes ~59.3 kg"
        },
        {
          "col1": "5' 8\" (173 cm)",
          "col2": "55.4 – 74.5 kg (122 – 164 lbs)",
          "col3": "Poids idéal Devine : Hommes ~68.4 kg | Femmes ~63.9 kg"
        },
        {
          "col1": "5' 10\" (178 cm)",
          "col2": "58.6 – 78.9 kg (129 – 174 lbs)",
          "col3": "Poids idéal Devine : Hommes ~73.0 kg | Femmes ~68.5 kg"
        },
        {
          "col1": "6' 0\" (183 cm)",
          "col2": "62.0 – 83.4 kg (136 – 184 lbs)",
          "col3": "Poids idéal Devine : Hommes ~77.6 kg | Femmes ~73.1 kg"
        },
        {
          "col1": "6' 2\" (188 cm)",
          "col2": "65.4 – 88.0 kg (144 – 194 lbs)",
          "col3": "Poids idéal Devine : Hommes ~82.2 kg | Femmes ~77.7 kg"
        }
      ],
      "faqs": [
        {
          "question": "Quel est un poids santé pour ma taille ?",
          "answer": "Un poids santé correspond généralement à un IMC compris entre 18,5 et 24,9 kg/m² selon les critères de l'OMS."
        },
        {
          "question": "Qu'est-ce que le tableau de poids idéal par taille pour hommes et femmes ?",
          "answer": "C'est un tableau de référence qui indique les fourchettes de poids recommandées en fonction de la taille en cm."
        },
        {
          "question": "Comment calculer le poids idéal selon la taille ?",
          "answer": "On utilise souvent la formule de Devine : Hommes : 50 kg + 2,3 kg par pouce au-dessus de 5 pieds ; Femmes : 45,5 kg + 2,3 kg par pouce au-dessus de 5 pieds."
        },
        {
          "question": "Le tableau de poids santé est-il différent pour les hommes et les femmes ?",
          "answer": "Bien que la plage d'IMC standard de l'OMS (18,5 à 24,9) s'applique aux hommes comme aux femmes, les formules de poids idéal intègrent les différences de masse musculaire moyenne."
        },
        {
          "question": "Quel est le poids santé par taille pour les adultes indiens ?",
          "answer": "Pour les adultes d'Asie du Sud et d'Inde, l'ICMR recommande de maintenir un IMC entre 18,5 et 22,9 kg/m²."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "Gesundes Gewicht nach Größe – Idealer Gewichtsbereich",
      "intro": "Kostenloser Idealgewicht-nach-Größe-Rechner & Körpergewicht-Matrix. Schlagen Sie gesunde Gewichtsbereiche nach Körpergröße (cm, Fuß, Zoll) basierend auf WHO-BMI-Normen (18,5 - 24,9) und Devine-Formel datenschutzorientiert im Browser nach.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardmäßig validierten Gleichungen.",
      "formulaCode": "Min Healthy (kg) = 18.5 × m²  |  Max Healthy (kg) = 24.9 × m²",
      "tableTitle": "Größen- und Gewichtstabelle für Männer & Frauen (Offizieller WHO-Gesundheitsbereich in kg & lbs)",
      "tableRows": [
        {
          "col1": "4' 10\" (147 cm)",
          "col2": "40.0 – 53.8 kg (88 – 119 lbs)",
          "col3": "Devine IBW: Männer ~43.2 kg | Frauen ~36.3 kg"
        },
        {
          "col1": "5' 0\" (152 cm)",
          "col2": "42.8 – 57.6 kg (94 – 127 lbs)",
          "col3": "Devine IBW: Männer ~50.0 kg | Frauen ~45.5 kg"
        },
        {
          "col1": "5' 2\" (157 cm)",
          "col2": "45.6 – 61.4 kg (100 – 135 lbs)",
          "col3": "Devine IBW: Männer ~54.6 kg | Frauen ~50.1 kg"
        },
        {
          "col1": "5' 4\" (163 cm)",
          "col2": "49.2 – 66.2 kg (108 – 146 lbs)",
          "col3": "Devine IBW: Männer ~59.2 kg | Frauen ~54.7 kg"
        },
        {
          "col1": "5' 6\" (168 cm)",
          "col2": "52.2 – 70.3 kg (115 – 155 lbs)",
          "col3": "Devine IBW: Männer ~63.8 kg | Frauen ~59.3 kg"
        },
        {
          "col1": "5' 8\" (173 cm)",
          "col2": "55.4 – 74.5 kg (122 – 164 lbs)",
          "col3": "Devine IBW: Männer ~68.4 kg | Frauen ~63.9 kg"
        },
        {
          "col1": "5' 10\" (178 cm)",
          "col2": "58.6 – 78.9 kg (129 – 174 lbs)",
          "col3": "Devine IBW: Männer ~73.0 kg | Frauen ~68.5 kg"
        },
        {
          "col1": "6' 0\" (183 cm)",
          "col2": "62.0 – 83.4 kg (136 – 184 lbs)",
          "col3": "Devine IBW: Männer ~77.6 kg | Frauen ~73.1 kg"
        },
        {
          "col1": "6' 2\" (188 cm)",
          "col2": "65.4 – 88.0 kg (144 – 194 lbs)",
          "col3": "Devine IBW: Männer ~82.2 kg | Frauen ~77.7 kg"
        }
      ],
      "faqs": [
        {
          "question": "Was ist ein gesundes Gewicht für meine Körpergröße?",
          "answer": "Ein gesundes Gewicht entspricht laut WHO in der Regel einem BMI zwischen 18,5 und 24,9 kg/m²."
        },
        {
          "question": "Was ist die Gewichtstabelle nach Körpergröße für Männer und Frauen?",
          "answer": "Eine Tabelle, die gesunde Gewichtsbereiche basierend auf der Körpergröße in cm oder Zoll darstellt."
        },
        {
          "question": "Wie berechnet man das Idealgewicht nach der Körpergröße?",
          "answer": "Häufig wird die Devine-Formel genutzt: Männer: 50 kg + 2,3 kg pro Zoll über 5 Fuß; Frauen: 45,5 kg + 2,3 kg pro Zoll über 5 Fuß."
        },
        {
          "question": "Unterscheidet sich die Tabelle für Männer und Frauen?",
          "answer": "Der gesunde WHO-BMI-Bereich (18,5–24,9) gilt für beide Geschlechter, aber Idealgewichtsformeln berücksichtigen geschlechtsspezifische Muskelmasseunterschiede."
        },
        {
          "question": "Was ist ein gesundes Gewicht für indische Erwachsene nach Körpergröße?",
          "answer": "Für Erwachsene aus Südasien und Indien empfiehlt der ICMR einen gesunden BMI-Bereich von 18,5 bis 22,9 kg/m²."
        }
      ]
    },
    "ko": {
      "eyebrow": "건강 참조 표준 지침",
      "title": "키별 건강 체중 차트 – 남성 및 여성 이상적인 체중 범위 – 참조 계산기",
      "intro": "신장별 정상 체중 무료 계산기 및 이상적 체중 진단표. 세계보건기구(WHO) BMI 18.5 - 24.9 기준 및 Devine 공식에 따라 신장(cm, 피트, 인치)별 건강한 체중 참조 범위를 브라우저에서 안전하게 조회하세요. 세계보건기구(WHO) 기준에 따른 안전한 무료 건강 도구입니다.",
      "formulaTitle": "표준 계산 공식",
      "formulaDesc": "검증된 표준 공식을 사용하여 계산됩니다.",
      "formulaCode": "Min Healthy (kg) = 18.5 × m²  |  Max Healthy (kg) = 24.9 × m²",
      "tableTitle": "남녀 신장별 적정 체중 차트 (WHO 공식 표준 체중 범위 kg 및 lbs)",
      "tableRows": [
        {
          "col1": "4' 10\" (147 cm)",
          "col2": "40.0 – 53.8 kg (88 – 119 lbs)",
          "col3": "드바인 공식 이상체중: 남성 ~43.2 kg | 여성 ~36.3 kg"
        },
        {
          "col1": "5' 0\" (152 cm)",
          "col2": "42.8 – 57.6 kg (94 – 127 lbs)",
          "col3": "드바인 공식 이상체중: 남성 ~50.0 kg | 여성 ~45.5 kg"
        },
        {
          "col1": "5' 2\" (157 cm)",
          "col2": "45.6 – 61.4 kg (100 – 135 lbs)",
          "col3": "드바인 공식 이상체중: 남성 ~54.6 kg | 여성 ~50.1 kg"
        },
        {
          "col1": "5' 4\" (163 cm)",
          "col2": "49.2 – 66.2 kg (108 – 146 lbs)",
          "col3": "드바인 공식 이상체중: 남성 ~59.2 kg | 여성 ~54.7 kg"
        },
        {
          "col1": "5' 6\" (168 cm)",
          "col2": "52.2 – 70.3 kg (115 – 155 lbs)",
          "col3": "드바인 공식 이상체중: 남성 ~63.8 kg | 여성 ~59.3 kg"
        },
        {
          "col1": "5' 8\" (173 cm)",
          "col2": "55.4 – 74.5 kg (122 – 164 lbs)",
          "col3": "드바인 공식 이상체중: 남성 ~68.4 kg | 여성 ~63.9 kg"
        },
        {
          "col1": "5' 10\" (178 cm)",
          "col2": "58.6 – 78.9 kg (129 – 174 lbs)",
          "col3": "드바인 공식 이상체중: 남성 ~73.0 kg | 여성 ~68.5 kg"
        },
        {
          "col1": "6' 0\" (183 cm)",
          "col2": "62.0 – 83.4 kg (136 – 184 lbs)",
          "col3": "드바인 공식 이상체중: 남성 ~77.6 kg | 여성 ~73.1 kg"
        },
        {
          "col1": "6' 2\" (188 cm)",
          "col2": "65.4 – 88.0 kg (144 – 194 lbs)",
          "col3": "드바인 공식 이상체중: 남성 ~82.2 kg | 여성 ~77.7 kg"
        }
      ],
      "faqs": [
        {
          "question": "내 신장에 맞는 건강한 적정 체중은 얼마인가요?",
          "answer": "WHO 기준 성인의 건강 체중은 일반적으로 BMI 18.5에서 24.9 kg/m² 사이의 범위에 해당합니다."
        },
        {
          "question": "남녀 신장별 표준 체중표란 무엇인가요?",
          "answer": "키(cm)에 따라 권장되는 정상 건강 체중 범위를 일목요연하게 정리한 참조 도표입니다."
        },
        {
          "question": "신장을 기준으로 이상적인 체중을 어떻게 계산하나요?",
          "answer": "디바인(Devine) 공식을 널리 활용합니다: 남성: 50kg + 5피트 초과 인치당 2.3kg, 여성: 45.5kg + 5피트 초과 인치당 2.3kg."
        },
        {
          "question": "건강 체중표는 남성과 여성 간에 차이가 있나요?",
          "answer": "WHO의 표준 BMI 범위(18.5~24.9)는 남녀 공통으로 적용되지만, 이상 체중 공식은 평균적인 골격과 근육량 차이를 반영합니다."
        },
        {
          "question": "인도 성인의 신장별 권장 건강 체중 기준은 무엇인가요?",
          "answer": "남아시아 및 인도 성인은 ICMR 지침에 따라 BMI 18.5~22.9 kg/m²를 적정 건강 체중 범위로 권장합니다."
        }
      ]
    },
    "hi": {
      "eyebrow": "डब्ल्यूएचओ एवं डिवाइन संदर्भ तालिका",
      "title": "ऊंचाई के अनुसार स्वस्थ वजन चार्ट – पुरुषों व महिलाओं का आदर्श वजन",
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
          "col3": "आदर्श डिवाइन वजन: पुरुष ~77.6 kg | महिला ~73.1 kg"
        },
        {
          "col1": "श्रेणी / स्तर 9",
          "col2": "65.4 – 88.0 kg (144 – 194 lbs)",
          "col3": "आदर्श डिवाइन वजन: पुरुष ~82.2 kg | महिला ~77.7 kg"
        }
      ],
      "faqs": [
        {
          "question": "मेरी ऊंचाई के अनुसार स्वस्थ वजन क्या है?",
          "answer": "डब्ल्यूएचओ (WHO) के अनुसार आपकी ऊंचाई के लिए स्वस्थ वजन 18.5 से 24.9 kg/m² बीएमआई के बीच निर्धारित होता है।"
        },
        {
          "question": "पुरुषों और महिलाओं के लिए ऊंचाई के अनुसार स्वस्थ वजन चार्ट क्या है?",
          "answer": "यह चार्ट कद के आधार पर स्वस्थ वजन सीमा दर्शाता है। उदाहरण के लिए, 178 सेमी (5'10\") कद के लिए स्वस्थ सीमा लगभग 59 से 79 किग्रा है।"
        },
        {
          "question": "ऊंचाई के अनुसार आदर्श वजन की गणना कैसे करें?",
          "answer": "डिवाइन सूत्र का उपयोग करें: पुरुषों के लिए: 50 किग्रा + 5 फीट से ऊपर प्रति इंच 2.3 किग्रा। महिलाओं के लिए: 45.5 किग्रा + प्रति इंच 2.3 किग्रा।"
        },
        {
          "question": "क्या पुरुषों और महिलाओं के लिए स्वस्थ वजन चार्ट अलग होता है?",
          "answer": "डब्ल्यूएचओ बीएमआई सीमा (18.5 से 24.9) दोनों के लिए समान है, लेकिन आदर्श वजन सूत्र मांसपेशियों और हड्डियों के घनत्व के कारण महिलाओं के लिए थोड़ा कम मान देते हैं।"
        },
        {
          "question": "कद के अनुसार भारतीय वयस्कों के लिए स्वस्थ वजन क्या है?",
          "answer": "आईसीएमआर (ICMR) दिशानिर्देशों के अनुसार भारतीयों के लिए स्वस्थ बीएमआई सीमा 18.5 से 22.9 kg/m² अनुशंसित है।"
        }
      ]
    }
  },
  "diabetes-risk-calculator": {
    "en": {
      "eyebrow": "Health Risk Screening",
      "title": "Type 2 Diabetes Risk Calculator – BMI & Waist Risk Reference",
      "intro": "Use our free Type 2 Diabetes Risk Calculator to check your risk factors. It uses your BMI, waist size, age, and activity habits. All calculations run privately in your web browser.",
      "formulaTitle": "IDF & WHO Diabetes Screening Guidelines",
      "formulaDesc": "Key risk factors include a BMI of 25 or higher (23 for Asian adults), a larger waist size (over 94 cm for men and 80 cm for women), and age 40 or older.",
      "formulaCode": "Risk Level = Based on BMI, Waist Size, Age, and Activity",
      "tableTitle": "Type 2 Diabetes Screening Risk Levels",
      "tableRows": [
        {
          "col1": "Standard Risk",
          "col2": "BMI under 25 (under 23 for Asian adults) & Normal Waist",
          "col3": "Baseline range with lower statistical risk of type 2 diabetes"
        },
        {
          "col1": "Moderate Risk",
          "col2": "BMI 23–27.4 (Asian adults) or Waist at warning level",
          "col3": "Early warning range. Healthy eating and regular exercise help lower your risk"
        },
        {
          "col1": "Elevated Risk",
          "col2": "BMI 27.5 or higher, or High Waist with Age 40+",
          "col3": "Higher statistical risk. A formal clinical checkup with your doctor is recommended"
        }
      ],
      "faqs": [
        {
          "question": "How are BMI and Type 2 diabetes connected?",
          "answer": "Carrying extra body weight makes it harder for your cells to respond to insulin. When cells resist insulin, blood sugar stays high. Over time, insulin resistance can lead to type 2 diabetes."
        },
        {
          "question": "Why is the risk cutoff lower for Asian adults (BMI 23)?",
          "answer": "Studies from the WHO and IDF show that Asian adults store more belly fat at lower body weights. Because deep belly fat raises blood sugar risks, health guidelines use a lower BMI cutoff of 23."
        },
        {
          "question": "Why should I measure my waist along with my BMI?",
          "answer": "Your waist measurement checks for deep belly fat around your organs. Research shows that belly fat predicts diabetes risk better than total body weight alone."
        },
        {
          "question": "What do the diabetes risk score levels mean?",
          "answer": "The scores show your risk compared to large population health studies. Standard risk means lower odds. Moderate risk suggests improving daily habits. Elevated risk means you should talk to a doctor."
        },
        {
          "question": "Can this calculator diagnose type 2 diabetes?",
          "answer": "No. This tool is for educational screening only. It cannot diagnose any medical condition. A real diagnosis requires blood tests, such as fasting glucose or HbA1c, ordered by a licensed doctor."
        }
      ]
    },
    "es": {
      "eyebrow": "Evaluación de Riesgo Cardiometabólico",
      "title": "Calculadora de Riesgo de Diabetes Tipo 2 – Referencia",
      "intro": "Calculadora gratuita de riesgo de diabetes tipo 2 basada en IMC, circunferencia de cintura y edad. Evalúa factores de riesgo metabólico en el navegador.",
      "formulaTitle": "Criterios de Riesgo Cardiometabólico de la IDF y OMS",
      "formulaDesc": "Criterios combinados: IMC ≥ 25.0 kg/m² (≥ 23.0 adultos asiáticos), cintura ≥ 94 cm hombres (≥ 90 cm asiáticos) y ≥ 80 cm mujeres, edad ≥ 40-45 años.",
      "formulaCode": "Índice de Riesgo Metabólico = f(IMC, Cintura, Edad, Género)",
      "tableTitle": "Matriz de Categorías de Riesgo de Diabetes Tipo 2",
      "tableRows": [
        {
          "col1": "Referencia Estándar",
          "col2": "IMC < 23 (Asiático) / < 25 (Global) & Cintura Normal",
          "col3": "Rango de referencia metabólica basal con bajo riesgo estadístico"
        },
        {
          "col1": "Umbral Moderado",
          "col2": "IMC 23–27.4 (Asiático) o Cintura en umbral",
          "col3": "Rango de acción temprana; se aconsejan hábitos saludables"
        },
        {
          "col1": "Umbral Elevado",
          "col2": "IMC ≥ 27.5 o Cintura Elevada con Edad ≥ 40",
          "col3": "Corte de riesgo metabólico aumentado; evaluación clínica sugerida"
        }
      ],
      "faqs": [
        {
          "question": "¿Cuál es la relación entre el IMC y el riesgo de diabetes tipo 2?",
          "answer": "Un índice de masa corporal elevado, especialmente combinado con acumulación de grasa abdominal, está fuertemente correlacionado con resistencia a la insulina y mayor riesgo de diabetes tipo 2."
        },
        {
          "question": "¿Por qué el umbral de riesgo es menor para poblaciones asiáticas (IMC 23)?",
          "answer": "Investigaciones de la OMS y la IDF indican que las poblaciones asiáticas desarrollan más grasa visceral con un IMC más bajo, elevando el riesgo metabólico desde los 23.0 kg/m²."
        },
        {
          "question": "¿Por qué se mide la circunferencia de cintura junto al IMC?",
          "answer": "La circunferencia de cintura evalúa la grasa visceral que rodea los órganos internos, siendo un indicador más directo de alteraciones metabólicas que el peso total por sí solo."
        },
        {
          "question": "¿Qué significan las categorías de puntuación de riesgo?",
          "answer": "Indican riesgo estadístico poblacional: Referencia Estándar refleja riesgo basal bajo, Umbral Moderado sugiere optimizar hábitos, y Umbral Elevado recomienda revisión médica."
        },
        {
          "question": "¿Esta calculadora proporciona un diagnóstico médico de diabetes?",
          "answer": "No. Es una herramienta educativa de detección basada en factores de riesgo epidemiológicos publicados. El diagnóstico formal requiere análisis clínicos como la prueba de HbA1c supervisada por un médico."
        }
      ]
    },
    "fr": {
      "eyebrow": "Dépistage du Risque Cardiométabolique",
      "title": "Calculateur de Risque de Diabète Type 2 – IMC et Tour de Taille",
      "intro": "Calculateur gratuit de risque de diabète de type 2 basé sur l'IMC, le tour de taille et l'âge selon l'OMS. Évaluez vos facteurs de risque en toute confidentialité.",
      "formulaTitle": "Critères d'Évaluation du Risque Cardiométabolique FID & OMS",
      "formulaDesc": "Critères combinés : IMC ≥ 25,0 kg/m² (≥ 23,0 populations asiatiques), tour de taille ≥ 94 cm hommes (≥ 90 cm asiatiques) et ≥ 80 cm femmes, âge ≥ 40-45 ans.",
      "formulaCode": "Indice de Risque Métabolique = f(IMC, Tour de Taille, Âge, Sexe)",
      "tableTitle": "Matrice des Catégories de Risque de Diabète de Type 2",
      "tableRows": [
        {
          "col1": "Référence Standard",
          "col2": "IMC < 23 (Asiatique) / < 25 (Global) & Tour Normal",
          "col3": "Plage de référence métabolique avec risque statistique faible"
        },
        {
          "col1": "Seuil Modéré",
          "col2": "IMC 23–27,4 (Asiatique) ou Tour de taille limite",
          "col3": "Zone d'action préventive ; suivi de l'hygiène de vie conseillé"
        },
        {
          "col1": "Seuil Élevé",
          "col2": "IMC ≥ 27,5 ou Tour Élevé avec Âge ≥ 40 ans",
          "col3": "Seuil de risque accru ; bilan médical recommandé"
        }
      ],
      "faqs": [
        {
          "question": "Quel est le lien entre l'IMC et le risque de diabète de type 2 ?",
          "answer": "Un IMC élevé associé à une adiposité abdominale viscérale favorise l'insulinorésistance et augmente significativement le risque de développer un diabète de type 2."
        },
        {
          "question": "Pourquoi le seuil est-il plus bas pour les populations asiatiques (IMC 23) ?",
          "answer": "Selon l'OMS et la Fédération Internationale du Diabète, les personnes d'origine asiatique accumulent plus de graisse viscérale à un poids corporel moindre, d'où un seuil d'alerte dès 23,0 kg/m²."
        },
        {
          "question": "Pourquoi mesurer le tour de taille en plus de l'IMC ?",
          "answer": "Le tour de taille cible la graisse abdominale profonde autour des organes, constituant un prédicteur métabolique plus précis que le simple ratio poids-taille."
        },
        {
          "question": "Que signifient les catégories de résultat ?",
          "answer": "Elles reflètent un niveau de risque statistique : Référence Standard correspond au risque de base, Seuil Modéré invite à la vigilance, et Seuil Élevé conseille un bilan médical."
        },
        {
          "question": "Ce calculateur fournit-il un diagnostic médical ?",
          "answer": "Non. Cet outil est un guide de dépistage éducatif. Seuls des examens sanguins prescrits par un médecin (comme l'HbA1c ou la glycémie à jeun) permettent d'établir un diagnostic."
        }
      ]
    },
    "de": {
      "eyebrow": "Kardiometabolisches Risikoscreening",
      "title": "Typ-2-Diabetes-Risiko-Rechner – BMI & Taillenumfang Referenz",
      "intro": "Kostenloser Typ-2-Diabetes-Risikorechner basierend auf BMI, Taillenumfang und Alter nach WHO-Richtlinien. Bewerten Sie Stoffwechsel-Risikofaktoren privat im Browser.",
      "formulaTitle": "IDF & WHO Kardiometabolische Risikokriterien",
      "formulaDesc": "Kombinierte Kriterien: BMI ≥ 25,0 kg/m² (≥ 23,0 asiatische Erwachsene), Taillenumfang ≥ 94 cm Männer (≥ 90 cm asiatisch) und ≥ 80 cm Frauen, Alter ≥ 40-45 Jahre.",
      "formulaCode": "Metabolischer Risiko-Index = f(BMI, Taillenumfang, Alter, Geschlecht)",
      "tableTitle": "Matrix der Risikokategorien für Typ-2-Diabetes",
      "tableRows": [
        {
          "col1": "Standardreferenz",
          "col2": "BMI < 23 (Asiatisch) / < 25 (Global) & Normaler Umfang",
          "col3": "Metabolischer Basis-Referenzbereich mit geringem statistischem Risiko"
        },
        {
          "col1": "Mäßige Schwelle",
          "col2": "BMI 23–27,4 (Asiatisch) oder Taillenumfang am Grenzwert",
          "col3": "Frühzeitiger Handlungsbereich ; Überprüfung der Lebensgewohnheiten ratsam"
        },
        {
          "col1": "Erhöhte Schwelle",
          "col2": "BMI ≥ 27,5 oder erhöhter Taillenumfang & Alter ≥ 40",
          "col3": "Erhöhter metabolischer Risikowert ; ärztliche Abklärung empfohlen"
        }
      ],
      "faqs": [
        {
          "question": "Wie hängen BMI und das Risiko für Typ-2-Diabetes zusammen?",
          "answer": "Ein erhöhter Body-Mass-Index – insbesondere in Kombination mit viszeralem Bauchfett – begünstigt eine Insulinresistenz und steigert das statistische Diabetes-Risiko."
        },
        {
          "question": "Warum liegt die Risikoschwelle bei asiatischen Erwachsenen bei BMI 23?",
          "answer": "Studien von WHO und IDF belegen, dass asiatische Bevölkerungsgruppen bereits bei geringerem Körpergewicht mehr viszerales Bauchfett einlagern, was das Risiko ab 23,0 kg/m² erhöht."
        },
        {
          "question": "Warum ist der Taillenumfang neben dem BMI entscheidend?",
          "answer": "Der Taillenumfang erfasst das stoffwechselaktive Bauchfett um die Organe, welches ein zuverlässigerer Prädiktor für metabolische Risiken ist als das reine Körpergewicht."
        },
        {
          "question": "Was bedeuten die Risikostufen?",
          "answer": "Sie beschreiben statistische Risikokategorien: Standardreferenz bedeutet Basisrisiko, Mäßige Schwelle rät zu gesundem Lebensstil, und Erhöhte Schwelle empfiehlt ärztlichen Rat."
        },
        {
          "question": "Ersetzt dieser Rechner eine ärztliche Diagnose?",
          "answer": "Nein. Dies ist ein rein lehrreiches Screening-Werkzeug. Eine verlässliche Diagnose erfordert Blutuntersuchungen (wie HbA1c oder Nüchternblutzucker) durch medizinisches Fachpersonal."
        }
      ]
    },
    "ko": {
      "eyebrow": "심대사 질환 위험 선별 지침",
      "title": "제2형 당뇨병 위험도 계산기 – BMI 및 허리둘레 대사 위험 지표",
      "intro": "체질량지수(BMI), 허리둘레 비율, 연령 및 세계보건기구(WHO) 대사 건강 기준을 결합하여 성인 제2형 당뇨병 위험 요인을 조기에 스크리닝하는 무료 계산기입니다. 개인정보 수집 없는 100% 브라우저 보안 연산. 세계보건기구(WHO) 기준에 따른 안전한 무료 건강 도구입니다.",
      "formulaTitle": "IDF 및 WHO 심대사 질환 위험 평가 기준",
      "formulaDesc": "종합 선별 기준: BMI ≥ 25.0 kg/m² (아시아 성인 ≥ 23.0), 허리둘레 남성 ≥ 90 cm 및 여성 ≥ 80 cm, 연령 40-45세 이상 복합 평가.",
      "formulaCode": "대사 위험 지표 = f(BMI, 허리둘레, 연령, 성별)",
      "tableTitle": "제2형 당뇨병 대사 위험 단계별 분류 매트릭스",
      "tableRows": [
        {
          "col1": "표준 기준",
          "col2": "BMI < 23 (아시아) / < 25 (서구) & 정상 허리둘레",
          "col3": "통계적 위험도가 낮은 표준 대사 건강 참조 구간"
        },
        {
          "col1": "주의 필요 수치",
          "col2": "BMI 23–27.4 (아시아) 또는 경계치 허리둘레",
          "col3": "조기 생활 습관 개선 및 정기 모니터링 권장 구간"
        },
        {
          "col1": "고위험군 판정 기준",
          "col2": "BMI ≥ 27.5 또는 복부비만 & 40세 이상",
          "col3": "심대사 질환 위험 증가 구간 ; 전문의 상담 권장"
        }
      ],
      "faqs": [
        {
          "question": "체질량지수(BMI)와 제2형 당뇨병 위험은 어떤 관계가 있나요?",
          "answer": "높은 BMI와 특히 복부 내장 지방의 축적은 인슐린 저항성을 유발하여 제2형 당뇨병 발병 위험을 크게 높이는 주요 원인입니다."
        },
        {
          "question": "아시아인의 당뇨병 위험 기준선이 BMI 23으로 더 낮은 이유는 무엇인가요?",
          "answer": "WHO와 국제당뇨병연맹(IDF) 연구에 따르면 아시아 인구는 서구인에 비해 상대적으로 낮은 체중에서도 내장 지방 비율이 높아 BMI 23.0 kg/m²부터 대사 질환 위험이 조기에 증가합니다."
        },
        {
          "question": "BMI 외에 허리둘레 측정이 왜 필수적인가요?",
          "answer": "허리둘레는 장기 주변에 쌓인 내장 지방을 직접 반영하므로, 단순 체중이나 BMI보다 대사 이상을 예측하는 데 훨씬 정확한 지표로 활용됩니다."
        },
        {
          "question": "위험도 결과 단계는 무엇을 의미하나요?",
          "answer": "표준 기준은 통계적 기본 상태, 주의 필요 수치는 식습관 및 유산소 운동 관리 권장, 고위험군은 의료진을 통한 혈당 검진이 권장됨을 나타냅니다."
        },
        {
          "question": "이 계산기로 당뇨병을 의학적으로 진단할 수 있나요?",
          "answer": "아닙니다. 이 도구는 공개된 역학 통계를 바탕으로 한 참고용 교육 스크리닝 도구이며, 실제 진단은 공복 혈당이나 당화혈색소(HbA1c) 검사를 통해 전문의가 내려야 합니다."
        }
      ]
    },
    "hi": {
      "eyebrow": "हृदय एवं चयापचय जोखिम स्क्रीनिंग",
      "title": "टाइप 2 डायबिटीज रिस्क कैलकुलेटर – बीएमआई एवं कमर माप संदर्भ",
      "intro": "बीएमआई, कमर की माप और उम्र के आधार पर टाइप 2 मधुमेह के जोखिम कारकों का मूल्यांकन करने वाला मुफ़्त कैलकुलेटर। सुरक्षित व गोपनीय गणना तुरंत अपने ब्राउज़र में करें।",
      "formulaTitle": "आईडीएफ एवं डब्ल्यूएचओ चयापचय जोखिम मूल्यांकन मानदंड",
      "formulaDesc": "संयुक्त स्क्रीनिंग मानदंड: बीएमआई ≥ 25.0 kg/m² (एशियाई वयस्कों में ≥ 23.0), कमर की माप पुरुषों में ≥ 90 सेमी व महिलाओं में ≥ 80 सेमी, उम्र ≥ 40-45 वर्ष।",
      "formulaCode": "चयापचय जोखिम सूचकांक = f(बीएमआई, कमर माप, उम्र, लिंग)",
      "tableTitle": "टाइप 2 मधुमेह स्क्रीनिंग जोखिम श्रेणी मैट्रिक्स",
      "tableRows": [
        {
          "col1": "मानक संदर्भ",
          "col2": "BMI < 23 (एशियाई) / < 25 (वैश्विक) एवं सामान्य कमर",
          "col3": "कम सांख्यिकीय जोखिम वाली सामान्य संदर्भ सीमा"
        },
        {
          "col1": "मध्यम जोखिम सीमा",
          "col2": "BMI 23–27.4 (एशियाई) या कमर सीमा पर",
          "col3": "प्रारंभिक जीवनशैली समीक्षा एवं सतर्कता अनुशंसित"
        },
        {
          "col1": "उच्च जोखिम सीमा",
          "col2": "BMI ≥ 27.5 या उच्च कमर एवं उम्र ≥ 40 वर्ष",
          "col3": "उन्नत चयापचय जोखिम कटऑफ; चिकित्सीय जांच की सलाह"
        }
      ],
      "faqs": [
        {
          "question": "बीएमआई और टाइप 2 मधुमेह जोखिम में क्या संबंध है?",
          "answer": "बढ़ा हुआ बीएमआई (विशेषकर पेट के आसपास विसरल वसा) इंसुलिन प्रतिरोध को बढ़ाता है, जिससे टाइप 2 मधुमेह का खतरा काफी बढ़ जाता है।"
        },
        {
          "question": "एशियाई लोगों के लिए मधुमेह जोखिम कटऑफ कम (BMI 23) क्यों है?",
          "answer": "डब्ल्यूएचओ और आईडीएफ अध्ययनों के अनुसार एशियाई आबादी में कम वजन पर भी पेट की वसा अधिक होती है, जिससे 23.0 kg/m² पर ही मधुमेह का जोखिम शुरू हो जाता है।"
        },
        {
          "question": "कमर की माप मधुमेह के जोखिम को कैसे दर्शाती है?",
          "answer": "कमर की माप आंतरिक अंगों के आसपास जमा हानिकारक विसरल वसा को दर्शाती है, जो केवल कुल शरीर वजन की तुलना में चयापचय संबंधी बीमारियों का बेहतर संकेतक है।"
        },
        {
          "question": "जोखिम स्कोर श्रेणियों का क्या अर्थ है?",
          "answer": "मानक संदर्भ कम सांख्यिकीय जोखिम दर्शाता है, मध्यम सीमा जीवनशैली में सुधार की आवश्यकता बताती है, और उच्च सीमा चिकित्सक से स्वास्थ्य जांच कराने की सलाह देती है।"
        },
        {
          "question": "क्या यह कैलकुलेटर कोई मेडिकल डायग्नोसिस प्रदान करता है?",
          "answer": "नहीं, यह एक शैक्षणिक स्क्रीनिंग टूल है। किसी भी औपचारिक निदान के लिए रक्त परीक्षण (जैसे HbA1c या फास्टिंग ब्लड शुगर) चिकित्सक द्वारा किया जाना अनिवार्य है।"
        }
      ]
    }
  },
  "asian-bmi-calculator": {
    "en": {
      "eyebrow": "WHO Asia-Pacific Guidelines",
      "title": "Asian BMI Calculator – WHO Asian Cutoff Reference Standards",
      "intro": "Free online Asian BMI Calculator designed specifically for individuals of Asian descent based on official WHO Expert Consultation reference standards. The World Health Organization established lower BMI cutoffs for Asian populations (Overweight at 23.0 kg/m², Obese at 27.5 kg/m²) because Asians experience higher body fat percentages and metabolic health risks at lower BMI values than Western populations. For individuals seeking guidelines specific to Indian adults under ICMR standards (where obesity begins at 25.0 kg/m²), visit our <a href=\"/en/bmi-calculator-for-indians/\" class=\"text-[var(--accent)] hover:underline font-bold\">BMI Calculator for Indians</a>.",
      "formulaTitle": "WHO Asian BMI Formula (kg & cm / lbs & in)",
      "formulaDesc": "Metric: BMI = Weight (kg) / [Height (m)]² | Asian Overweight Cutoff: BMI ≥ 23.0 kg/m² | Asian Obese Cutoff: BMI ≥ 27.5 kg/m²",
      "formulaCode": "Asian BMI = kg / m²",
      "tableTitle": "WHO Asia-Pacific Adult BMI Scale & Classification Matrix",
      "tableRows": [
        {
          "col1": "Underweight",
          "col2": "< 18.5 kg/m²",
          "col3": "Underweight guidance threshold (< 18.5 kg/m²)"
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
          "question": "What BMI is considered overweight for Asian populations?",
          "answer": "Under WHO Asia-Pacific criteria, a BMI of 23.0 kg/m² or higher is considered overweight."
        }
      ]
    },
    "es": {
      "eyebrow": "Estándares de Referencia de Salud",
      "title": "Calculadora de IMC Asiático – Estándares de Referencia OMS Asia",
      "intro": "Calculadora de IMC asiático gratuita basada en los cortes asiáticos revisados de la OMS (Saludable: 18.5-22.9, Sobrepeso: 23.0-27.4, Obesidad: ≥ 27.5 kg/m²). Calcula tu IMC étnico y rango de peso saludable con cálculos en el navegador.",
      "formulaTitle": "Fórmula de Referencia Estándar",
      "formulaDesc": "Calculado utilizando ecuaciones estándar validadas.",
      "formulaCode": "Asian BMI = kg / m²",
      "tableTitle": "Escala de IMC y Clasificación para Adultos de Asia-Pacífico de la OMS",
      "tableRows": [
        {
          "col1": "Bajo peso",
          "col2": "< 18.5 kg/m²",
          "col3": "Umbral de referencia de peso bajo (< 18.5 kg/m²)"
        },
        {
          "col1": "Peso Normal Saludable (Asiático)",
          "col2": "18.5 – 22.9 kg/m²",
          "col3": "Rango de peso saludable para población asiática"
        },
        {
          "col1": "Sobrepeso / Riesgo Aumentado",
          "col2": "23.0 – 27.4 kg/m²",
          "col3": "Umbral de alerta metabólica en poblaciones asiáticas"
        },
        {
          "col1": "Obesidad (Alto Riesgo)",
          "col2": "≥ 27.5 kg/m²",
          "col3": "Clasificación de obesidad de alto riesgo para adultos asiáticos"
        }
      ],
      "faqs": [
        {
          "question": "¿Cómo funciona la calculadora de IMC asiático y qué mide?",
          "answer": "Esta calculadora evalúa tus datos personales utilizando ecuaciones validadas. Proporciona una estimación educativa para ayudarte a comprender tu estado de salud y referencias estándar."
        },
        {
          "question": "¿Cuál es el IMC normal para los adultos asiáticos?",
          "answer": "Para los adultos asiáticos, un IMC normal y saludable se sitúa entre 18.5 y 22.9 kg/m²."
        },
        {
          "question": "¿Qué IMC se considera sobrepeso para las poblaciones asiáticas?",
          "answer": "Según los criterios de la OMS para Asia-Pacífico, un IMC de 23.0 kg/m² o superior se considera sobrepeso."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de Référence de Santé",
      "title": "Calculateur d'IMC Asiatique – Normes de Référence OMS Asie",
      "intro": "Calculateur d'IMC asiatique gratuit basé sur les seuils asiatiques révisés de l'OMS (Normal : 18,5-22,9, Surpoids : 23,0-27,4, Obésité : ≥ 27,5 kg/m²). Calculez votre score d'IMC éthnique et poids idéal avec calculs sur navigateur.",
      "formulaTitle": "Formule de Référence Standard",
      "formulaDesc": "Calculé à l'aide d'équations standards validées.",
      "formulaCode": "Asian BMI = kg / m²",
      "tableTitle": "Échelle et Classification de l'IMC Adulte Asie-Pacifique de l'OMS",
      "tableRows": [
        {
          "col1": "Insuffisance pondérale",
          "col2": "< 18.5 kg/m²",
          "col3": "Seuil de poids faible (< 18.5 kg/m²)"
        },
        {
          "col1": "Poids Normal et Sain (Asiatique)",
          "col2": "18.5 – 22.9 kg/m²",
          "col3": "Plage de poids saine pour adultes asiatiques"
        },
        {
          "col1": "Surpoids / Risque Accru",
          "col2": "23.0 – 27.4 kg/m²",
          "col3": "Seuil d'intervention et de vigilance pour populations asiatiques"
        },
        {
          "col1": "Obésité (Risque Élevé)",
          "col2": "≥ 27.5 kg/m²",
          "col3": "Classification d'obésité à haut risque pour adultes asiatiques"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur d'IMC asiatique et que mesure-t-il ?",
          "answer": "Ce calculateur évalue vos données personnelles à l'aide d'équations validées. Il fournit une estimation éducative pour vous aider à comprendre vos métriques et références standards."
        },
        {
          "question": "Quel est l'IMC normal pour les adultes asiatiques ?",
          "answer": "Pour les adultes asiatiques, un IMC normal et sain se situe entre 18,5 et 22,9 kg/m²."
        },
        {
          "question": "Quel IMC est considéré comme un surpoids pour les populations asiatiques ?",
          "answer": "Selon les critères de l'OMS pour l'Asie-Pacifique, un IMC égal ou supérieur à 23,0 kg/m² est considéré comme un surpoids."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "Asiatischer BMI Rechner – WHO Asien-Referenzstandards",
      "intro": "Kostenloser asiatischer BMI-Rechner basierend auf den überarbeiteten WHO-Asien-Schwellenwerten (Normal: 18,5-22,9, Übergewicht: 23,0-27,4, Adipositas: ≥ 27,5 kg/m²). Berechnen Sie Ihren asiatischen BMI-Wert datenschutzorientiert im Browser.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardmäßig validierten Gleichungen.",
      "formulaCode": "Asian BMI = kg / m²",
      "tableTitle": "WHO Asien-Pazifik Erwachsenen-BMI-Skala & Klassifizierungsmatrix",
      "tableRows": [
        {
          "col1": "Untergewicht",
          "col2": "< 18.5 kg/m²",
          "col3": "Referenzwert für Untergewicht (< 18.5 kg/m²)"
        },
        {
          "col1": "Normalgewicht (Asiatischer Standard)",
          "col2": "18.5 – 22.9 kg/m²",
          "col3": "Gesunder Gewichtsbereich für asiatische Erwachsene"
        },
        {
          "col1": "Übergewicht / Erhöhtes Risiko",
          "col2": "23.0 – 27.4 kg/m²",
          "col3": "Schwellenwert für asiatische Risikoprävention"
        },
        {
          "col1": "Adipositas (Hohes Risiko)",
          "col2": "≥ 27.5 kg/m²",
          "col3": "Adipositas-Klassifikation mit hohem Risiko für asiatische Erwachsene"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der Rechner für asiatischen BMI und was misst er?",
          "answer": "Dieser Rechner wertet Ihre persönlichen Angaben anhand validierter Formeln aus. Er bietet eine lehrreiche Orientierungshilfe zur besseren Einordnung Ihrer Werte."
        },
        {
          "question": "Was ist ein normaler BMI für asiatische Erwachsene?",
          "answer": "Für asiatische Erwachsene liegt ein normaler gesunder BMI-Bereich zwischen 18,5 und 22,9 kg/m²."
        },
        {
          "question": "Ab welchem BMI gilt man in asiatischen Populationen als übergewichtig?",
          "answer": "Nach den Asien-Pazifik-Kriterien der WHO gilt ein BMI von 23,0 kg/m² oder höher als Übergewicht."
        }
      ]
    },
    "ko": {
      "eyebrow": "건강 참조 표준 지침",
      "title": "아시아인 전용 BMI 계산기 – WHO 아시아 공중보건 참조 기준",
      "intro": "개정된 WHO 아시아인 판정 기준(정상: 18.5-22.9, 과체중: 23.0-27.4, 비만: ≥ 27.5 kg/m²)에 맞춘 무료 아시아인 BMI 계산기. 아시아인 전용 BMI 점수와 건강 체중 범위를 브라우저에서 안전하게 산출하세요. 세계보건기구(WHO) 기준에 따른 안전한 무료 건강 도구입니다.",
      "formulaTitle": "표준 계산 공식",
      "formulaDesc": "검증된 표준 공식을 사용하여 계산됩니다.",
      "formulaCode": "Asian BMI = kg / m²",
      "tableTitle": "WHO 아시아-태평양 성인 BMI 기준치 및 분류 매트릭스",
      "tableRows": [
        {
          "col1": "저체중 기준",
          "col2": "< 18.5 kg/m²",
          "col3": "저체중 판정 기준치 (< 18.5 kg/m²)"
        },
        {
          "col1": "표준 정상 체중 (아시아인 기준)",
          "col2": "18.5 – 22.9 kg/m²",
          "col3": "아시아 성인 남녀 최적 건강 체중 범위"
        },
        {
          "col1": "과체중 / 위험 증가",
          "col2": "23.0 – 27.4 kg/m²",
          "col3": "아시아인 건강 모니터링 시작 구간"
        },
        {
          "col1": "비만 (고위험군)",
          "col2": "≥ 27.5 kg/m²",
          "col3": "아시아 성인 고위험 비만 진단 기준"
        }
      ],
      "faqs": [
        {
          "question": "아시아인 전용 BMI 계산기가 별도로 존재하는 이유는 무엇인가요?",
          "answer": "세계보건기구(WHO)는 아시아 성인이 낮은 체질량지수에서도 높은 체지방률과 심대사 질환 위험을 보인다는 연구를 바탕으로 아시아 전용 기준(과체중 ≥ 23.0 kg/m²)을 마련했습니다."
        },
        {
          "question": "아시아 성인의 표준 정상 BMI 범위는 얼마인가요?",
          "answer": "WHO 아시아-태평양 및 보건복지부 기준에 따르면 아시아 성인의 정상 건강 체중 범위는 18.5 ~ 22.9 kg/m²입니다."
        },
        {
          "question": "아시아인에게 과체중으로 분류되는 BMI 수치는 얼마인가요?",
          "answer": "아시아-태평양 지침에 따라 BMI 23.0 kg/m² 이상부터 과체중 주의 구간으로 분류되며, 25.0 kg/m² 이상은 1단계 비만으로 정의됩니다."
        }
      ]
    },
    "hi": {
      "eyebrow": "डब्ल्यूएचओ एशिया-पैसिफिक मानक",
      "title": "एशियाई बीएमआई कैलकुलेटर – डब्ल्यूएचओ एशियाई संदर्भ कटऑफ",
      "intro": "WHO विशेषज्ञ परामर्श मानकों पर आधारित एशियाई बीएमआई कैलकुलेटर। एशियाई आबादी में कम बीएमआई (23.0 kg/m²) पर भी अधिक वसा और स्वास्थ्य जोखिम का मूल्यांकन करें।",
      "formulaTitle": "डब्ल्यूएचओ एशियाई बीएमआई सूत्र",
      "formulaDesc": "बीएमआई = वजन (किग्रा) / [ऊंचाई (मीटर)]² | एशियाई ओवरवेट कटऑफ: 23.0 kg/m²",
      "formulaCode": "Asian BMI = kg / m²",
      "tableTitle": "डब्ल्यूएचओ एशियाई वयस्क बीएमआई वर्गीकरण तालिका",
      "tableRows": [
        {
          "col1": "कम वजन",
          "col2": "< 18.5 kg/m²",
          "col3": "कम वजन सीमा"
        },
        {
          "col1": "सामान्य स्वस्थ वजन",
          "col2": "18.5 – 22.9 kg/m²",
          "col3": "एशियाई पुरुषों और महिलाओं के लिए स्वस्थ सीमा"
        },
        {
          "col1": "अधिक वजन",
          "col2": "23.0 – 27.4 kg/m²",
          "col3": "एशियाई जोखिम सीमा"
        },
        {
          "col1": "मोटापा",
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
      "eyebrow": "Resting Metabolism & BER",
      "title": "BMR Calculator Online – Basal Metabolic Rate for Men & Women",
      "intro": "Find your daily Basal Metabolic Rate (BMR) with our free online calculator. BMR is the number of calories your body burns at complete rest each day. In clinical nutrition, it is also called your Basal Energy Requirement (BER). We use the proven Mifflin-St Jeor equation to give you fast, accurate results.",
      "formulaTitle": "Mifflin-St Jeor BMR Calculator Formulas",
      "formulaDesc": "For men: (10 × weight in kg) + (6.25 × height in cm) - (5 × age) + 5. For women: (10 × weight in kg) + (6.25 × height in cm) - (5 × age) - 161. These formulas estimate your baseline daily calorie burn.",
      "formulaCode": "Men: BMR = 10W + 6.25H - 5A + 5  |  Women: BMR = 10W + 6.25H - 5A - 161",
      "tableTitle": "BMR Formula Comparison (Mifflin-St Jeor vs. Other Formulas)",
      "tableRows": [
        {
          "col1": "Mifflin-St Jeor Formula",
          "col2": "Standard Equation (1990)",
          "col3": "The most widely recommended equation for adult BMR estimation"
        },
        {
          "col1": "Revised Harris-Benedict",
          "col2": "Classic Historical Formula",
          "col3": "An older equation that can slightly overestimate calorie needs"
        },
        {
          "col1": "Katch-McArdle Formula",
          "col2": "Lean Body Mass Formula",
          "col3": "Estimates resting calories using your measured lean muscle mass"
        }
      ],
      "faqs": [
        {
          "question": "What is a BMR calculator and what does it measure?",
          "answer": "A BMR calculator estimates the calories your body burns while resting quietly over 24 hours. It covers the baseline energy your lungs, heart, liver, and brain need to stay alive."
        },
        {
          "question": "What is the difference between BMR and BER (Basal Energy Requirement)?",
          "answer": "BMR and BER refer to the same biological measurement. In sports nutrition and clinical dietetics, Basal Energy Requirement (BER) is simply another name for your daily basal metabolic rate."
        },
        {
          "question": "What is the Mifflin-St Jeor formula for men and women?",
          "answer": "For men, the formula is: (10 × weight in kg) + (6.25 × height in cm) - (5 × age) + 5. For women, it is: (10 × weight in kg) + (6.25 × height in cm) - (5 × age) - 161."
        },
        {
          "question": "Why does metabolic rate slow down with age?",
          "answer": "Your resting burn drops slowly over the decades because most adults lose lean muscle mass. Regular strength training helps protect muscle tissue and keeps your metabolism healthy."
        },
        {
          "question": "What is the difference between BMR and TDEE?",
          "answer": "BMR is the energy you burn while doing nothing at all. TDEE is your Total Daily Energy Expenditure. It adds all your daily movement, chores, and exercise to your BMR."
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
          "question": "¿Cómo calcular el BMR en kg y cm en línea?",
          "answer": "Introduce tu peso en kilogramos (kg) y tu altura en centímetros (cm) junto con tu edad y sexo en nuestra calculadora para obtener tu estimación instantánea de gasto calórico en reposo."
        }
      ]
    },
    "fr": {
      "eyebrow": "Équation Référence de Mifflin-St Jeor",
      "title": "Calculateur de BMR – Métabolisme de Base en Ligne",
      "intro": "Calculez votre taux métabolique de base (BMR) quotidien en calories avec notre calculateur gratuit basé sur la formule médicale reconnue de Mifflin-St Jeor.",
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
          "question": "Comment calculer le BMR en ligne en kg et en cm ?",
          "answer": "Saisissez votre poids en kilogrammes (kg) et votre taille en centimètres (cm) ainsi que votre âge et votre sexe dans notre calculateur pour obtenir une estimation instantanée de votre dépense énergétique au repos."
        },
        {
          "question": "Quelle est la différence entre la formule Mifflin-St Jeor et Katch-McArdle ?",
          "answer": "Mifflin-St Jeor estime le BMR à partir du poids total, de la taille et de l'âge. Katch-McArdle utilise la masse corporelle maigre (LBM), ce qui convient particulièrement aux athlètes."
        }
      ]
    },
    "de": {
      "eyebrow": "Mifflin-St Jeor Referenzformel",
      "title": "BMR Rechner Online – Grundumsatz Berechnen",
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
          "question": "Wie berechnet man den BMR online in kg und cm?",
          "answer": "Geben Sie Ihr Gewicht in Kilogramm (kg) und Ihre Größe in Zentimetern (cm) zusammen mit Alter und Geschlecht in unseren Online-BMR-Rechner ein, um Ihren geschätzten Ruhekalorienverbrauch sofort zu erhalten."
        },
        {
          "question": "Was ist der Unterschied zwischen der Mifflin-St Jeor und Katch-McArdle Formel?",
          "answer": "Mifflin-St Jeor berechnet den Grundumsatz aus Gesamtgewicht, Körpergröße und Alter. Katch-McArdle berücksichtigt die magere Körpermasse (LBM), was für sehr muskulöse Menschen präziser ist."
        }
      ]
    },
    "ko": {
      "eyebrow": "Mifflin-St Jeor 표준 공식",
      "title": "BMR 계산기 온라인 – 기초대사량 계산기",
      "intro": "무료 온라인 BMR 계산기로 일일 기초대사량(BMR)을 정밀하게 계산하세요. 신뢰도 높은 Mifflin-St Jeor 공식을 사용하여 24시간 동안 신체 기초 생명 유지에 필요한 최소 소비 칼로리를 브라우저에서 산출합니다. 세계보건기구(WHO) 기준에 따른 안전한 무료 건강 도구입니다.",
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
          "question": "BMR 기초대사량 계산기의 원리와 측정 항목은 무엇인가요?",
          "answer": "본 계산기는 검증된 공식을 사용하여 개인별 신체 지수를 산출합니다. 성인 표준 참조 범위를 바탕으로 교육적 분석 결과를 제공합니다."
        },
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
      "title": "बीएमआर कैलकुलेटर ऑनलाइन - बेसल मेटाबॉलिक रेट (BMR)",
      "intro": "हमारे मुफ़्त बीएमआर कैलकुलेटर ऑनलाइन से अपनी दैनिक बेसल मेटाबॉलिक रेट (BMR) का अनुमान लगाएं। वैज्ञानिक रूप से प्रमाणित मिफ्लिन-सेंट जोर फॉर्मूले के आधार पर अपने शरीर की न्यूनतम आवश्यक कैलोरी जानिए।",
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
      "eyebrow": "Daily Energy Expenditure",
      "title": "TDEE Calculator – Total Daily Energy Expenditure",
      "intro": "Find your Total Daily Energy Expenditure (TDEE) with our free calculator. TDEE is the total number of calories you burn every day. It combines your resting burn with your daily movement and workouts. Use your result to set clear calorie targets for weight loss, maintenance, or muscle gain.",
      "formulaTitle": "TDEE Formula (BMR × Activity Multiplier)",
      "formulaDesc": "First, estimate your resting calorie burn (BMR). Then multiply it by your activity factor: Sedentary (1.2), Lightly Active (1.375), Moderately Active (1.55), or Very Active (1.725).",
      "formulaCode": "TDEE = BMR × Activity Factor",
      "tableTitle": "TDEE Activity Multipliers and Daily Energy Levels",
      "tableRows": [
        {
          "col1": "Sedentary (Factor 1.2)",
          "col2": "BMR × 1.2",
          "col3": "Desk work with little or no structured exercise"
        },
        {
          "col1": "Lightly Active (Factor 1.375)",
          "col2": "BMR × 1.375",
          "col3": "Light workouts or brisk walking 1 to 3 days each week"
        },
        {
          "col1": "Moderately Active (Factor 1.55)",
          "col2": "BMR × 1.55",
          "col3": "Moderate sports or gym workouts 3 to 5 days each week"
        },
        {
          "col1": "Very Active (Factor 1.725)",
          "col2": "BMR × 1.725",
          "col3": "Hard training or physical labor 6 to 7 days each week"
        },
        {
          "col1": "Weight Loss Deficit",
          "col2": "TDEE minus 300 to 500 kcal",
          "col3": "A balanced calorie deficit for steady fat loss"
        }
      ],
      "faqs": [
        {
          "question": "What is TDEE and how is it calculated?",
          "answer": "TDEE stands for Total Daily Energy Expenditure. It is the total number of calories your body burns in 24 hours. It includes your resting metabolism, digesting food, and daily physical movement."
        },
        {
          "question": "How do I use my TDEE to lose weight?",
          "answer": "To lose body fat steadily, eat 300 to 500 calories below your TDEE each day. This small calorie deficit lets your body burn stored fat without causing extreme hunger or low energy."
        },
        {
          "question": "What is the difference between BMR and TDEE?",
          "answer": "BMR is the baseline energy needed to keep your organs working while you rest in bed. TDEE adds all your daily steps, work, chores, and workouts on top of your BMR."
        },
        {
          "question": "Why do daily energy needs vary between people of the same weight?",
          "answer": "People burn calories differently based on muscle mass, daily movement, and genetics. Two people of the same weight can have different energy needs if one has an active job and more muscle."
        },
        {
          "question": "How often should I recalculate my TDEE?",
          "answer": "Recalculate your TDEE whenever you gain or lose 5 to 10 pounds (2 to 5 kg). You should also recalculate if your job activity or workout routine changes significantly."
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
          "question": "¿Cómo calcular el TDEE en línea según edad, altura (cm) y peso (kg)?",
          "answer": "Introduce tu edad, sexo, peso en kg y altura en cm. Primero se determina tu BMR mediante la ecuación Mifflin-St Jeor y luego se multiplica por tu factor de actividad física para obtener el gasto energético diario total."
        },
        {
          "question": "¿Cuál es la diferencia entre BMR y TDEE?",
          "answer": "El BMR es el gasto energético en reposo. El TDEE engloba el BMR más la energía quemada durante el movimiento diario y el ejercicio."
        },
        {
          "question": "¿Cuántas calorías debo consumir al día para perder peso usando el TDEE?",
          "answer": "Un déficit calórico moderado por debajo del TDEE estimado se emplea con frecuencia para la pérdida de peso, variando la cantidad según cada persona."
        },
        {
          "question": "¿Con qué frecuencia debo recalcular mis calorías de mantenimiento y el TDEE?",
          "answer": "Conviene recalcular el TDEE cuando tu peso corporal cambie en 2 o 3 kg, o si modificas tu nivel semanal de actividad física o tu rutina de entrenamiento."
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
          "col1": "Exemple de Déficit Calorique",
          "col2": "TDEE moins un déficit choisi",
          "col3": "Référence d'exemple pour la planification de la gestion du poids"
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
          "question": "Comment calculer le TDEE en ligne selon l'âge, la taille (cm) et le poids (kg) ?",
          "answer": "Saisissez votre âge, sexe, poids en kg et taille en cm. Votre BMR est d'abord calculé via la formule Mifflin-St Jeor, puis multiplié par votre facteur d'activité. Un déficit modéré par rapport au TDEE est couramment utilisé pour planifier une perte de poids."
        },
        {
          "question": "Combien de calories dois-je consommer par jour pour perdre du poids avec le TDEE ?",
          "answer": "Un déficit calorique modéré par rapport au TDEE estimé est couramment utilisé pour la gestion du poids, l'ajustement optimal dépendant de chaque profil."
        },
        {
          "question": "À quelle fréquence dois-je recalculer mes calories de maintien et mon TDEE ?",
          "answer": "Il est conseillé de recalculer votre TDEE lorsque votre poids varie de 2 à 3 kg ou si votre niveau d'activité physique hebdomadaire change."
        }
      ]
    },
    "de": {
      "eyebrow": "Energiebilanz & Stoffwechsel",
      "title": "TDEE Rechner Online – Gesamtenergieumsatz",
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
          "col1": "Beispiel-Kaloriendefizit",
          "col2": "TDEE abzüglich eines gewählten Defizits",
          "col3": "Beispielreferenz für die Planung des Gewichtsmanagements"
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
          "question": "Wie berechnet man den TDEE online anhand von Alter, Größe (cm) und Gewicht (kg)?",
          "answer": "Geben Sie Alter, Geschlecht, Gewicht in kg und Größe in cm ein. Zuerst wird Ihr BMR mit der Mifflin-St Jeor-Formel ermittelt und dann mit Ihrem Aktivitätsfaktor multipliziert. Ein moderates Defizit unterhalb des geschätzten TDEE dient häufig der Gewichtsplanung."
        },
        {
          "question": "Wie viele Kalorien sollte ich täglich zur Gewichtsabnahme anhand des TDEE zu mir nehmen?",
          "answer": "Ein moderates Kaloriendefizit unter dem geschätzten TDEE wird üblicherweise zur Gewichtsreduktion eingesetzt; die passende Anpassung hängt vom Einzelfall ab."
        },
        {
          "question": "Wie oft sollte ich meine Erhaltungskalorien und den TDEE neu berechnen?",
          "answer": "Eine Neuberechnung empfiehlt sich, wenn sich Ihr Körpergewicht um 2 bis 3 kg verändert oder Sie Ihr wöchentliches Aktivitäts- bzw. Trainingsniveau anpassen."
        }
      ]
    },
    "ko": {
      "eyebrow": "에너지 균형 및 대사량",
      "title": "TDEE 계산기 – 일일 총 에너지 소비량 및 유지 칼로리",
      "intro": "무료 TDEE 계산기로 연령, 성별, 체중, 신장 및 일상 활동 수준을 기반으로 일일 총 에너지 소비량(TDEE)과 현재 체중 유지 칼로리를 브라우저 내에서 안전하고 정밀하게 추정하세요. 100% 무료 건강 도구입니다. 세계보건기구(WHO) 기준에 따른 안전한 무료 건강 도구입니다.",
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
          "col1": "예시 칼로리 적자 (Calorie Deficit)",
          "col2": "TDEE - 설정한 칼로리 적자",
          "col3": "체중 관리 계획을 위한 예시 참고 기준"
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
          "question": "TDEE 일일 총 에너지 계산기의 원리와 측정 항목은 무엇인가요?",
          "answer": "본 계산기는 검증된 공식을 사용하여 개인별 신체 지수를 산출합니다. 성인 표준 참조 범위를 바탕으로 교육적 분석 결과를 제공합니다."
        },
        {
          "question": "TDEE를 기준으로 체중 감량을 위해 하루에 몇 칼로리를 섭취해야 하나요?",
          "answer": "일반적으로 체중 감량을 위해 추정된 TDEE보다 낮은 칼로리 결손을 계획하지만, 개인의 건강 상태와 목표에 따라 달라집니다."
        },
        {
          "question": "유지 칼로리와 TDEE는 얼마나 자주 재계산해야 하나요?",
          "answer": "체중이 2~3kg 이상 변화하거나 주간 운동 빈도 및 일상 활동량에 변동이 생겼을 때 재계산하는 것이 좋습니다."
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
          "question": "TDEE के आधार पर वजन घटाने के लिए रोजाना कितनी कैलोरी खानी चाहिए?",
          "answer": "वजन घटाने के लिए आमतौर पर TDEE से 300-500 कैलोरी कम का घाटा (deficit) रखा जाता है, लेकिन यह व्यक्तिगत लक्ष्यों पर निर्भर करता है।"
        },
        {
          "question": "मुझे अपने रखरखाव कैलोरी और TDEE की पुनर्गणना कितनी बार करनी चाहिए?",
          "answer": "जब आपके शरीर के वजन में 2-3 किग्रा का बदलाव हो या आपकी साप्ताहिक शारीरिक गतिविधि बदले, तब TDEE की पुनर्गणना करें।"
        }
      ]
    }
  },
  "maintenance-calorie-calculator": {
    "en": {
      "eyebrow": "Daily Energy Balance",
      "title": "Maintenance Calorie Calculator – Daily Calorie Needs",
      "intro": "Find how many calories you need to keep your current weight. Our free Maintenance Calorie Calculator combines your resting metabolism with your daily workouts. Enter your age, gender, height, weight, and exercise habits to see your daily target in seconds.",
      "formulaTitle": "Maintenance Calorie Math & Energy Balance",
      "formulaDesc": "Maintenance Calories = Basal Metabolic Rate (BMR) × Physical Activity Level (PAL). Eating at maintenance matches your daily burn and keeps your weight steady.",
      "formulaCode": "Maintenance Calories = BMR × Activity Factor",
      "tableTitle": "Calorie Maintenance and Goal Planning Table",
      "tableRows": [
        {
          "col1": "Maintenance Level",
          "col2": "100% of TDEE (Zero net change)",
          "col3": "Keeps your current weight and daily energy in balance"
        },
        {
          "col1": "Mild Deficit (-250 kcal/day)",
          "col2": "TDEE minus 250 kcal/day",
          "col3": "Gradual fat loss of about half a pound per week"
        },
        {
          "col1": "Standard Deficit (-500 kcal/day)",
          "col2": "TDEE minus 500 kcal/day",
          "col3": "Standard deficit for losing about one pound per week"
        },
        {
          "col1": "Moderate Deficit (-750 kcal/day)",
          "col2": "TDEE minus 750 kcal/day",
          "col3": "Faster fat loss for people with higher calorie needs"
        },
        {
          "col1": "Lean Surplus (+250 kcal/day)",
          "col2": "TDEE plus 250 kcal/day",
          "col3": "Helps build lean muscle while limiting extra body fat"
        }
      ],
      "faqs": [
        {
          "question": "What are maintenance calories and how do they work?",
          "answer": "Maintenance calories are the total calories you burn each day. When calories in match calories out, your body weight stays the same."
        },
        {
          "question": "How do I find my maintenance calories?",
          "answer": "Enter your age, gender, height, weight, and weekly activity. The calculator finds your resting burn with the Mifflin-St Jeor formula, then multiplies it by your activity."
        },
        {
          "question": "Why do real energy needs differ from formula calculations?",
          "answer": "Formulas provide helpful estimates. Daily burn can vary by 10% to 15% due to genetics, muscle mass, sleep, and non-exercise movement."
        },
        {
          "question": "How can I test my true maintenance calories?",
          "answer": "Eat your estimated calories for two to three weeks. Track your weight each morning. If your average weight stays flat, you have found your true maintenance."
        },
        {
          "question": "How do I adjust calories for weight loss or muscle gain?",
          "answer": "To lose fat, eat 300 to 500 calories below maintenance each day. To build muscle, eat 200 to 300 calories above maintenance while lifting weights."
        }
      ]
    },
    "es": {
      "eyebrow": "Estándares de Referencia de Salud",
      "title": "Calculadora de Calorías de Mantenimiento – Necesidades Diarias",
      "intro": "Calculadora de calorías de mantenimiento gratuita en línea. Calcula tus calorías diarias de mantenimiento, gasto energético total diario (TDEE) y calorías objetivo para pérdida de peso por edad, altura (cm) y peso (kg) con cálculos privados en el navegador.",
      "formulaTitle": "Fórmula de Referencia Estándar",
      "formulaDesc": "Calculado utilizando ecuaciones estándar validadas.",
      "formulaCode": "Maintenance = BMR × PAL",
      "tableTitle": "Mantenimiento Calórico y Desglose por Objetivos de Peso",
      "tableRows": [
        {
          "col1": "Calorías de Mantenimiento",
          "col2": "100% TDEE (0 kcal netas)",
          "col3": "Mantiene el peso corporal y el balance energético actual"
        },
        {
          "col1": "Déficit Ligero (-250 kcal/día)",
          "col2": "TDEE - 250 kcal/día",
          "col3": "Reducción gradual para pérdida de peso moderada"
        },
        {
          "col1": "Déficit Moderado (-500 kcal/día)",
          "col2": "TDEE - 500 kcal/día",
          "col3": "Déficit estándar para perder ~0.45 kg por semana"
        },
        {
          "col1": "Déficit Intenso (-750 kcal/día)",
          "col2": "TDEE - 750 kcal/día",
          "col3": "Reducción calórica para pérdida de peso más rápida"
        },
        {
          "col1": "Superávit Controlado (+250 kcal/día)",
          "col2": "TDEE + 250 a 300 kcal/día",
          "col3": "Superávit para aumento gradual de masa muscular"
        }
      ],
      "faqs": [
        {
          "question": "¿Qué es una calculadora de calorías de mantenimiento y cómo funciona?",
          "answer": "Una calculadora de calorías de mantenimiento calcula la ingesta calórica diaria estimada necesaria para mantener tu peso corporal actual, combinando ecuaciones metabólicas (Mifflin-St Jeor) con tu nivel de actividad física."
        },
        {
          "question": "¿Cómo calcular las calorías de mantenimiento según edad, altura (cm) y peso (kg)?",
          "answer": "Introduce tu edad, sexo biológico, altura (cm), peso (kg) y nivel de actividad semanal para estimar tu línea base de calorías de mantenimiento."
        },
        {
          "question": "¿Qué sucede si consumo mis calorías de mantenimiento todos los días?",
          "answer": "Consumir tu nivel estimado de calorías de mantenimiento mantiene neutro tu balance energético total, por lo que el peso corporal tiende a permanecer estable en el tiempo."
        },
        {
          "question": "¿Cómo utilizo las calorías de mantenimiento para planificar la pérdida de peso?",
          "answer": "Un déficit calórico moderado por debajo de las calorías de mantenimiento estimadas se utiliza habitualmente para la pérdida de peso, aunque el ajuste adecuado varía según cada persona."
        },
        {
          "question": "¿Es precisa la calculadora de calorías de mantenimiento para hombres y mujeres de todas las edades?",
          "answer": "Las calculadoras de calorías de mantenimiento emplean fórmulas publicadas como Mifflin-St Jeor y Harris-Benedict, proporcionando estimaciones de referencia para adultos sanos."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de Référence de Santé",
      "title": "Calculateur de Calories de Maintien – Besoin Calorique",
      "intro": "Calculateur gratuit de calories de maintien en ligne. Calculez vos calories quotidiennes de maintien, votre dépense énergétique totale (TDEE) et vos objectifs de déficit calorigène selon l'âge, la taille (cm) et le poids (kg) avec calculs sur navigateur.",
      "formulaTitle": "Formule de Référence Standard",
      "formulaDesc": "Calculé à l'aide d'équations standards validées.",
      "formulaCode": "Maintenance = BMR × PAL",
      "tableTitle": "Maintien Calorique et Répartition selon les Objectifs de Poids",
      "tableRows": [
        {
          "col1": "Calories de Maintien",
          "col2": "100% TDEE (0 kcal nettes)",
          "col3": "Préserve le poids corporel actuel et l'équilibre énergétique"
        },
        {
          "col1": "Déficit Léger (-250 kcal/jour)",
          "col2": "TDEE - 250 kcal/jour",
          "col3": "Réduction progressive pour perte de poids modérée"
        },
        {
          "col1": "Déficit Modéré (-500 kcal/jour)",
          "col2": "TDEE - 500 kcal/jour",
          "col3": "Déficit classique pour perdre environ 0,45 kg par semaine"
        },
        {
          "col1": "Déficit Soutenu (-750 kcal/jour)",
          "col2": "TDEE - 750 kcal/jour",
          "col3": "Réduction calorique pour perte plus soutenue"
        },
        {
          "col1": "Surplus Contrôlé (+250 kcal/jour)",
          "col2": "TDEE + 250 à 300 kcal/jour",
          "col3": "Surplus pour prise de masse musculaire maîtrisée"
        }
      ],
      "faqs": [
        {
          "question": "Qu'est-ce qu'un calculateur de calories de maintien et comment fonctionne-t-il ?",
          "answer": "Un calculateur de calories de maintien estime l'apport calorique quotidien nécessaire pour stabiliser votre poids actuel en combinant des équations métaboliques (Mifflin-St Jeor) avec votre coefficient d'activité physique."
        },
        {
          "question": "Comment calculer les calories de maintien selon l'âge, la taille (cm) et le poids (kg) ?",
          "answer": "Indiquez votre âge, sexe biologique, taille (cm), poids (kg) et niveau d'activité hebdomadaire pour obtenir une estimation de vos calories de maintien."
        },
        {
          "question": "Que se passe-t-il si je consomme mes calories de maintien chaque jour ?",
          "answer": "Consommer vos calories de maintien permet de conserver un bilan énergétique neutre, maintenant ainsi un poids corporel relativement stable au fil du temps."
        },
        {
          "question": "Comment utiliser les calories de maintien pour calculer un déficit de perte de poids ?",
          "answer": "Un déficit calorique modéré par rapport aux calories de maintien estimées est généralement utilisé pour la perte de poids, l'ajustement optimal variant selon chaque individu."
        },
        {
          "question": "Le calculateur de calories de maintien est-il fiable pour les hommes et les femmes de tous âges ?",
          "answer": "Ces calculateurs reposent sur des formules scientifiques publiées (Mifflin-St Jeor, Harris-Benedict) et offrent des estimations de référence pour adultes en bonne santé."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "Rechner für Erhaltungskalorien – Kalorienbedarf",
      "intro": "Kostenloser Erhaltungskalorien-Rechner online. Berechnen Sie Ihre täglichen Erhaltungskalorien, Ihren Gesamtenergiebedarf (TDEE) und Zielkalorien zum Abnehmen nach Alter, Größe (cm) und Gewicht (kg) datenschutzorientiert im Browser.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardmäßig validierten Gleichungen.",
      "formulaCode": "Maintenance = BMR × PAL",
      "tableTitle": "Erhaltungskalorien & Kalorienaufteilung nach Gewichtsziel",
      "tableRows": [
        {
          "col1": "Erhaltungskalorien",
          "col2": "100% TDEE (0 kcal Nettoänderung)",
          "col3": "Hält das aktuelle Körpergewicht und die Energiebilanz stabil"
        },
        {
          "col1": "Leichtes Defizit (-250 kcal/Tag)",
          "col2": "TDEE - 250 kcal/Tag",
          "col3": "Moderate Kalorienreduktion zur sanften Abnahme"
        },
        {
          "col1": "Moderates Defizit (-500 kcal/Tag)",
          "col2": "TDEE - 500 kcal/Tag",
          "col3": "Standard-Defizit für ca. 0,45 kg Gewichtsverlust pro Woche"
        },
        {
          "col1": "Starkes Defizit (-750 kcal/Tag)",
          "col2": "TDEE - 750 kcal/Tag",
          "col3": "Deutliches Defizit für schnellere Gewichtsreduktion"
        },
        {
          "col1": "Moderater Überschuss (+250 kcal/Tag)",
          "col2": "TDEE + 250 bis 300 kcal/Tag",
          "col3": "Kontrollierter Überschuss für Muskelaufbau"
        }
      ],
      "faqs": [
        {
          "question": "Was ist ein Erhaltungskalorien-Rechner und wie funktioniert er?",
          "answer": "Ein Erhaltungskalorien-Rechner ermittelt die geschätzte tägliche Kalorienaufnahme, die erforderlich ist, um Ihr aktuelles Körpergewicht zu halten, basierend auf Stoffwechselformeln (Mifflin-St Jeor) und Ihrem Aktivitätsfaktor."
        },
        {
          "question": "Wie berechnet man Erhaltungskalorien nach Alter, Größe (cm) und Gewicht (kg)?",
          "answer": "Geben Sie Alter, biologisches Geschlecht, Größe (cm), Gewicht (kg) und wöchentliches Aktivitätsniveau ein, um Ihren Kaloriengrundbedarf zu ermitteln."
        },
        {
          "question": "Was passiert, wenn ich jeden Tag meine Erhaltungskalorien zu mir nehme?",
          "answer": "Wenn Sie täglich Ihre geschätzten Erhaltungskalorien aufnehmen, bleibt Ihre Energiebilanz ausgeglichen und Ihr Körpergewicht im Zeitverlauf weitgehend konstant."
        },
        {
          "question": "Wie nutze ich meine Erhaltungskalorien zur Planung einer Gewichtsabnahme?",
          "answer": "Ein moderates Kaloriendefizit unterhalb der Erhaltungskalorien wird häufig zur Gewichtsreduktion genutzt, wobei die ideale Anpassung individuell variiert."
        },
        {
          "question": "Ist ein Erhaltungskalorien-Rechner für Männer und Frauen jeden Alters verlässlich?",
          "answer": "Erhaltungskalorien-Rechner verwenden anerkannte wissenschaftliche Formeln wie Mifflin-St Jeor und Harris-Benedict und bieten Orientierungswerte für gesunde Erwachsene."
        }
      ]
    },
    "ko": {
      "eyebrow": "건강 참조 표준 지침",
      "title": "유지 칼로리 계산기 – 일일 에너지 소모량 측정을 위한 참조 도구",
      "intro": "무료 온라인 유지 칼로리 계산기. 나이, 신장(cm), 체중(kg) 및 활동량 계수에 따라 일일 유지 칼로리, 총 에너지 소모량(TDEE) 및 건강한 다이어트 목표 칼로리를 브라우저 내에서 안전하게 산출하세요. 세계보건기구(WHO) 기준에 따른 안전한 무료 건강 도구입니다.",
      "formulaTitle": "표준 계산 공식",
      "formulaDesc": "검증된 표준 공식을 사용하여 계산됩니다.",
      "formulaCode": "Maintenance = BMR × PAL",
      "tableTitle": "유지 칼로리 및 체중 조절 목표별 칼로리 산출표",
      "tableRows": [
        {
          "col1": "체중 유지 칼로리",
          "col2": "100% TDEE (변동 0 kcal)",
          "col3": "현재 체중 및 에너지 균형을 완벽히 유지하는 칼로리"
        },
        {
          "col1": "가벼운 결손 (-250 kcal/일)",
          "col2": "TDEE - 250 kcal/일",
          "col3": "점진적이고 부담 없는 체중 감량 목표치"
        },
        {
          "col1": "표준 결손 (-500 kcal/일)",
          "col2": "TDEE - 500 kcal/일",
          "col3": "주당 약 0.45kg 감량을 위한 가장 보편적인 결손 기준"
        },
        {
          "col1": "집중 결손 (-750 kcal/일)",
          "col2": "TDEE - 750 kcal/일",
          "col3": "적극적인 체중 감량을 위한 단기 결손 구간"
        },
        {
          "col1": "근육 성장 잉여 (+250 kcal/일)",
          "col2": "TDEE + 250 ~ 300 kcal/일",
          "col3": "근육 합성 및 체중 증량을 위한 완만한 잉여 칼로리"
        }
      ],
      "faqs": [
        {
          "question": "체중 유지 칼로리 계산기의 원리와 작동 방식은 무엇인가요?",
          "answer": "유지 칼로리 계산기는 현재 체중을 유지하는 데 필요한 일일 추정 에너지 섭취량을 미플린-세인트 지어(Mifflin-St Jeor) 공식과 활동 계수를 바탕으로 산출합니다."
        },
        {
          "question": "나이, 신장(cm), 체중(kg)을 이용해 유지 칼로리를 어떻게 계산하나요?",
          "answer": "생물학적 연령, 성별, 키(cm), 체중(kg) 및 주간 신체 활동량을 입력하면 일일 유지 칼로리 기준선이 계산됩니다."
        },
        {
          "question": "매일 유지 칼로리만큼 섭취하면 신체에 어떤 변화가 생기나요?",
          "answer": "추정된 유지 칼로리 수준으로 식단을 유지하면 총 에너지 균형이 중립을 이루어 체중이 장기적으로 일정하게 유지됩니다."
        },
        {
          "question": "체중 감량을 위해 유지 칼로리를 어떻게 활용해야 하나요?",
          "answer": "체중 감량 계획에서는 유지 칼로리보다 적은 칼로리 결손을 설정하는 방식이 널리 활용되며, 개인의 건강 상태에 따라 조절할 수 있습니다."
        },
        {
          "question": "유지 칼로리 계산기는 모든 연령의 성인 남녀에게 적합한가요?",
          "answer": "미플린-세인트 지어 및 해리스-베네딕트와 같은 표준 학술 공식을 기반으로 하여 건강한 성인을 위한 기초 참고 지표를 제공합니다."
        }
      ]
    },
    "hi": {
      "eyebrow": "ऊर्जा संतुलन एवं पोषण योजना",
      "title": "मेंटेनेंस कैलोरी कैलकुलेटर – दैनिक ऊर्जा आवश्यकता की गणना",
      "intro": "हमारा मुफ़्त Maintenance Calorie Calculator आपकी दैनिक ऊर्जा आवश्यकता, कुल दैनिक व्यय (TDEE) और स्वस्थ शारीरिक भार प्रबंधन के लिए आवश्यक पोषण लक्ष्यों का पारदर्शी आकलन करता है।",
      "formulaTitle": "दैनिक मेंटेनेंस कैलोरी सूत्र एवं ऊर्जा संतुलन",
      "formulaDesc": "मेंटेनेंस कैलोरी = BMR × शारीरिक गतिविधि गुणक (PAL)। व्यक्तिगत लक्ष्यों और जीवनशैली के अनुसार ऊर्जा का सटीक समायोजन किया जाता है।",
      "formulaCode": "Maintenance = BMR × PAL",
      "tableTitle": "ऊर्जा आवश्यकता एवं शारीरिक भार लक्ष्य तालिका",
      "tableRows": [
        {
          "col1": "स्थिर वजन ऊर्जा (Maintenance)",
          "col2": "100% TDEE (शून्य ऊर्जा अंतर)",
          "col3": "वर्तमान शारीरिक भार और चयापचय संतुलन बनाए रखने हेतु"
        },
        {
          "col1": "हल्का ऊर्जा घाटा (-250 kcal/दिन)",
          "col2": "TDEE - 250 kcal/दिन",
          "col3": "धीमा एवं सतत भार प्रबंधन (~0.25 किग्रा प्रति सप्ताह)"
        },
        {
          "col1": "मानक ऊर्जा घाटा (-500 kcal/दिन)",
          "col2": "TDEE - 500 kcal/दिन",
          "col3": "संतुलित वसा घटाने हेतु मानक पोषण स्तर (~0.5 किग्रा प्रति सप्ताह)"
        },
        {
          "col1": "मांसपेशी विकास सरप्लस (+250 kcal/दिन)",
          "col2": "TDEE + 250 से 300 kcal/दिन",
          "col3": "लीन मसल मास निर्माण हेतु नियंत्रित अतिरिक्त पोषण"
        },
        {
          "col1": "तीव्र ऊर्जा घाटा (-750 kcal/दिन)",
          "col2": "TDEE - 750 kcal/दिन",
          "col3": "विशेषज्ञ देखरेख में अल्पकालिक ऊर्जा कमी का उदाहरण"
        }
      ],
      "faqs": [
        {
          "question": "दैनिक मेंटेनेंस कैलोरी (Maintenance Calories) का क्या अर्थ है?",
          "answer": "यह वह दैनिक ऊर्जा मात्रा है, जिसका उपभोग करने पर आपके शरीर का वजन यथावत बना रहता है—अर्थात ग्रहण की गई ऊर्जा खर्च की गई ऊर्जा के बराबर होती है।"
        },
        {
          "question": "शरीर के ऊर्जा संतुलन की गणना किस प्रकार की जाती है?",
          "answer": "यह आकलन मिफलिन-सेंट जेओर सूत्र से प्राप्त बेसल मेटाबॉलिक रेट (BMR) और आपकी नियमित शारीरिक दिनचर्या (PAL) के संयोजन पर आधारित होता है।"
        },
        {
          "question": "सुरक्षित वजन घटाने के लिए दैनिक उपभोग में कितनी कमी करनी चाहिए?",
          "answer": "धीमी और टिकाऊ वसा हानि के लिए मेंटेनेंस ऊर्जा से 250 से 500 किलोकैलोरी का मध्यम घाटा सबसे सुरक्षित माना जाता है।"
        },
        {
          "question": "मांसपेशियों के विकास (Bulking) हेतु कितना अतिरिक्त आहार उपयुक्त रहता है?",
          "answer": "अनावश्यक चर्बी बढ़ाए बिना मांसपेशियां विकसित करने के लिए दैनिक मेंटेनेंस में 250 से 300 किलोकैलोरी का हल्का सरप्लस जोड़ना उचित है।"
        },
        {
          "question": "क्या उम्र बढ़ने के साथ शरीर की ऊर्जा आवश्यकताएं स्वाभाविक रूप से घटती हैं?",
          "answer": "हाँ, उम्र बढ़ने के साथ प्राकृतिक रूप से चयापचय दर और मांसपेशियों के घनत्व में आने वाले धीमे बदलावों के कारण दैनिक ऊर्जा जरूरतें थोड़ी कम हो सकती हैं।"
        }
      ]
    }
  },
  "body-fat-calculator": {
    "en": {
      "eyebrow": "US Navy Anthropometric Reference",
      "title": "Body Composition & Navy Tape Method Calculator",
      "intro": "Estimate your adipose and lean tissue distribution using the US Navy circumference model. By entering your waist, neck, height, and hip measurements, this tool calculates estimated body fat percentage, lean mass ratio, and ACE reference thresholds.",
      "formulaTitle": "US Navy Circumference Equations (Logarithmic Tape Method)",
      "formulaDesc": "Men: %Fat = 495 / [1.0324 - 0.19077 × log10(waist - neck in cm) + 0.15456 × log10(height in cm)] - 450 | Women: %Fat = 495 / [1.29579 - 0.35004 × log10(waist + hip - neck in cm) + 0.22100 × log10(height in cm)] - 450",
      "formulaCode": "Men: 495 / [ 1.0324 - 0.19077 log10(W - N) + 0.15456 log10(H) ] - 450 | Women: 495 / [ 1.29579 - 0.35004 log10(W + Hip - N) + 0.22100 log10(H) ] - 450",
      "tableTitle": "ACE & US Navy Body Composition Classification Matrix",
      "tableRows": [
        {
          "col1": "Essential Fat Level",
          "col2": "Men: 2% - 5% | Women: 10% - 13%",
          "col3": "Essential adipose threshold required for hormonal and cellular health"
        },
        {
          "col1": "Athletes Category",
          "col2": "Men: 6% - 13% | Women: 14% - 20%",
          "col3": "Lean athletic range typical for endurance and strength athletes"
        },
        {
          "col1": "Fitness Level",
          "col2": "Men: 14% - 17% | Women: 21% - 24%",
          "col3": "Optimal fitness proportion for active adults"
        },
        {
          "col1": "Average Population",
          "col2": "Men: 18% - 24% | Women: 25% - 31%",
          "col3": "Standard population baseline for general health"
        },
        {
          "col1": "Obese Classification",
          "col2": "Men: ≥ 25% | Women: ≥ 32%",
          "col3": "Elevated adiposity threshold indicating increased metabolic risk"
        }
      ],
      "faqs": [
        {
          "question": "How does the US Navy circumference method estimate body composition?",
          "answer": "This method was developed by the Naval Health Research Center. It calculates relative adiposity using logarithmic equations comparing waist, neck, and hip circumferences against total stature."
        },
        {
          "question": "How do tape-based estimates compare to DEXA scans?",
          "answer": "Anthropometric calculations provide an accessible home screening benchmark within roughly 3% to 4% of dual-energy X-ray absorptiometry (DEXA), though fluid retention and measuring technique can introduce variance."
        },
        {
          "question": "What is the recommended technique for taking circumference measurements?",
          "answer": "For men: measure the neck just below the larynx and the waist horizontally at navel level. For women: measure the neck below the larynx, the narrowest point of the natural waist, and the hips at the widest protrusion of the gluteal muscles."
        },
        {
          "question": "Why evaluate circumferences rather than bathroom scale weight alone?",
          "answer": "Standard scale weight cannot distinguish between dense skeletal muscle and adipose tissue. Evaluating abdominal circumferences isolates central adiposity, which correlates more closely with cardiovascular and metabolic health."
        },
        {
          "question": "What are the recommended health categories defined by the American Council on Exercise (ACE)?",
          "answer": "ACE guidelines identify 14%–17% for men and 21%–24% for women as a typical fitness range. Acceptable general health spans 18%–24% for men and 25%–31% for women, while essential biological minimums are 2%–5% and 10%–13% respectively."
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
          "col3": "Categoría de referencia de mayor grasa corporal; varía según edad y sexo"
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
          "col3": "Plage de référence courante pour les populations sportives"
        },
        {
          "col1": "Catégorie / Niveau 4",
          "col2": "Men: 18% - 24% | Women: 25% - 31%",
          "col3": "Plage de pourcentage de graisse corporelle acceptable pour adultes en bonne santé"
        },
        {
          "col1": "Catégorie / Niveau 5",
          "col2": "Men: ≥ 25% | Women: ≥ 32%",
          "col3": "Catégorie de référence de masse grasse plus élevée ; varie selon l'âge et le sexe"
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
      "intro": "Schätzen Sie Ihren Körperfettanteil nach der US Navy Formel basierend auf Taillen-, Nacken- und Hüftumfang privat und sicher direkt in Ihrem Browser.",
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
          "col3": "Referenzbereich für fitnessorientierte Personen"
        },
        {
          "col1": "Kategorie / Stufe 4",
          "col2": "Men: 18% - 24% | Women: 25% - 31%",
          "col3": "Standardmäßig akzeptabler Körperfettanteil für gesunde Erwachsene"
        },
        {
          "col1": "Kategorie / Stufe 5",
          "col2": "Men: ≥ 25% | Women: ≥ 32%",
          "col3": "Höhere Körperfett-Referenzkategorie; Einordnung variiert nach Alter und Geschlecht"
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
      "intro": "미 해군(US Navy) 둘레 공식을 사용하여 목, 허리, 엉덩이 둘레 및 신장 측정값으로 성인 남녀의 추정 체지방률(%)을 정확하게 계산하세요. 가입 없이 브라우저 내에서 구동되는 100% 무료 건강 도구입니다. 세계보건기구(WHO) 기준에 따른 안전한 무료 건강 도구입니다.",
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
          "col3": "피트니스 지향 인구에서 흔히 사용되는 기준 범위"
        },
        {
          "col1": "범주 / 단계 4",
          "col2": "Men: 18% - 24% | Women: 25% - 31%",
          "col3": "건강한 성인을 위한 표준 권장 체지방률 범위"
        },
        {
          "col1": "범주 / 단계 5",
          "col2": "Men: ≥ 25% | Women: ≥ 32%",
          "col3": "높은 체지방 참고 범주; 연령 및 성별에 따라 해석 차이"
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
      "intro": "कमर, गर्दन, ऊंचाई और कूल्हे की परिधि के आधार पर यूएस नेवी फॉर्मूला से अपने शरीर के वसा प्रतिशत (% Body Fat) का सटीक अनुमान लगाएं। 100% सुरक्षित और ब्राउज़र-आधारित मुफ़्त स्वास्थ्य कैलकुलेटर।",
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
          "col3": "फिटनेस उन्मुख व्यक्तियों के लिए संदर्भ सीमा"
        },
        {
          "col1": "श्रेणी / स्तर 4",
          "col2": "Men: 18% - 24% | Women: 25% - 31%",
          "col3": "स्वस्थ वयस्कों के लिए मानक स्वीकार्य शरीर वसा प्रतिशत सीमा"
        },
        {
          "col1": "श्रेणी / स्तर 5",
          "col2": "Men: ≥ 25% | Women: ≥ 32%",
          "col3": "उच्च शरीर वसा संदर्भ श्रेणी; आयु और लिंग के अनुसार व्याख्या भिन्न"
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
      "intro": "Using the Boer formula, estimate lean body mass from height, weight and gender. LBM is a mathematical estimate and is not the same as skeletal muscle mass or organ weight.",
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
          "answer": "The Lean Body Mass Calculator uses the Boer predictive equation to estimate non-fat body mass from height, weight, and gender. It is a mathematical estimate and does not directly measure skeletal muscle or organ weight."
        },
        {
          "question": "Why is Lean Body Mass useful in body composition tracking?",
          "answer": "LBM estimates can be used as one reference when tracking changes in estimated non-fat body mass."
        }
      ]
    },
    "es": {
      "eyebrow": "Estándares de Referencia de Salud",
      "title": "Calculadora de Masa Magra – Índice de Masa Libre de Grasa LBM",
      "intro": "Calculadora de masa corporal magra (LBM) gratuita. Calcula la masa corporal magra, el porcentaje de masa libre de grasa y la composición corporal utilizando las ecuaciones de Boer, James y Hume por altura y peso con cálculos privados en el navegador.",
      "formulaTitle": "Fórmula de Referencia Estándar",
      "formulaDesc": "Calculado utilizando ecuaciones estándar validadas.",
      "tableTitle": "Referencia de la Fórmula de la Ecuación de Boer",
      "tableRows": [
        {
          "col1": "Ecuación de Boer (Hombres)",
          "col2": "(0.407 × W) + (0.267 × H) - 19.2",
          "col3": "Fórmula predictiva de masa magra estimada en hombres"
        },
        {
          "col1": "Ecuación de Boer (Mujeres)",
          "col2": "(0.252 × W) + (0.473 × H) - 48.3",
          "col3": "Fórmula predictiva de masa magra estimada en mujeres"
        }
      ],
      "faqs": [
        {
          "question": "¿Cómo funciona la calculadora de masa corporal magra y qué mide?",
          "answer": "Esta calculadora evalúa tus datos personales utilizando ecuaciones validadas. Proporciona una estimación educativa para ayudarte a comprender tu estado de salud y referencias estándar."
        },
        {
          "question": "¿Por qué es útil la masa corporal magra (LBM) para evaluar la composición corporal?",
          "answer": "Las estimaciones de LBM sirven como referencia clave para monitorear los cambios en el tejido no graso al evaluar el progreso físico."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de Référence de Santé",
      "title": "Calculateur de Masse Maigre – Estimation de l'Indice LBM",
      "intro": "Calculateur de masse corporelle maigre (LBM) gratuit. Calculez la masse corporelle maigre, le pourcentage de masse sans graisse et la composition corporelle à l'aide des équations de Boer, James et Hume selon la taille et le poids avec calculs sur navigateur.",
      "formulaTitle": "Formule de Référence Standard",
      "formulaDesc": "Calculé à l'aide d'équations standards validées.",
      "tableTitle": "Référence de la Formule de l'Équation de Boer",
      "tableRows": [
        {
          "col1": "Équation de Boer (Hommes)",
          "col2": "(0.407 × W) + (0.267 × H) - 19.2",
          "col3": "Formule prédictive de la masse maigre chez l'homme"
        },
        {
          "col1": "Équation de Boer (Femmes)",
          "col2": "(0.252 × W) + (0.473 × H) - 48.3",
          "col3": "Formule prédictive de la masse maigre chez la femme"
        }
      ],
      "faqs": [
        {
          "question": "Comment fonctionne le calculateur de masse corporelle maigre et que mesure-t-il ?",
          "answer": "Ce calculateur évalue vos données personnelles à l'aide d'équations validées. Il fournit une estimation éducative pour vous aider à comprendre vos métriques et références standards."
        },
        {
          "question": "Pourquoi la masse corporelle maigre (LBM) est-elle utile pour le suivi corporel ?",
          "answer": "L'estimation de la masse maigre constitue un repère précieux pour suivre l'évolution des tissus non adipeux lors d'un rééquilibrage physique."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "Rechner für fettfreie Körpermasse – LBM Referenz",
      "intro": "Kostenloser Magermasse-Rechner (LBM-Rechner). Berechnen Sie Ihre magere Körpermasse, den fettfreien Masseprozentsatz und die Körperzusammensetzung mit den Formeln nach Boer, James und Hume datenschutzorientiert im Browser.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardmäßig validierten Gleichungen.",
      "tableTitle": "Boer-Formel Referenzübersicht",
      "tableRows": [
        {
          "col1": "Boer-Formel (Männer)",
          "col2": "(0.407 × W) + (0.267 × H) - 19.2",
          "col3": "Vorhersageformel für geschätzte fettfreie Masse bei Männern"
        },
        {
          "col1": "Boer-Formel (Frauen)",
          "col2": "(0.252 × W) + (0.473 × H) - 48.3",
          "col3": "Vorhersageformel für geschätzte fettfreie Masse bei Frauen"
        }
      ],
      "faqs": [
        {
          "question": "Wie funktioniert der Rechner für fettfreie Körpermasse (LBM) und was misst er?",
          "answer": "Dieser Rechner schätzt anhand validierter anthropometrischer Formeln (wie der Boer-Gleichung) Ihre fettfreie Körpermasse aus Größe, Gewicht und biologischem Geschlecht."
        },
        {
          "question": "Warum ist die fettfreie Körpermasse (LBM) wichtig für die Beurteilung der Körperzusammensetzung?",
          "answer": "LBM-Schätzungen helfen zu beurteilen, ob Gewichtsveränderungen auf den Abbau von Fettgewebe oder den Erhalt wertvoller Muskelmasse zurückzuführen sind."
        }
      ]
    },
    "ko": {
      "eyebrow": "건강 참조 표준 지침",
      "title": "제지방량(LBM) 계산기 – 체성분 측정 및 한국 표준 가이드",
      "intro": "무료 제지방량(LBM) 계산기. Boer, James 및 Hume 공식을 활용하여 신장과 체중별 제지방량, 무지방 체중 비율 및 골격근 체성분 지표를 정확하게 산출하세요. 개인정보 수집 없는 100% 브라우저 계산. 세계보건기구(WHO) 기준에 따른 안전한 무료 건강 도구입니다.",
      "formulaTitle": "표준 계산 공식",
      "formulaDesc": "검증된 표준 공식을 사용하여 계산됩니다.",
      "tableTitle": "보어 공식(Boer Equation) 제지방량 참조 산출식",
      "tableRows": [
        {
          "col1": "보어 공식 (남성)",
          "col2": "(0.407 × W) + (0.267 × H) - 19.2",
          "col3": "성인 남성 제지방량(LBM) 정밀 산출 공식"
        },
        {
          "col1": "보어 공식 (여성)",
          "col2": "(0.252 × W) + (0.473 × H) - 48.3",
          "col3": "성인 여성 제지방량(LBM) 정밀 산출 공식"
        }
      ],
      "faqs": [
        {
          "question": "제지방량(LBM) 계산기란 무엇인가요?",
          "answer": "제지방량(Lean Body Mass) 계산기는 보어(Boer) 공식을 사용하여 총 체중에서 지방을 제외한 근육, 뼈, 수분 등의 무게를 추정합니다."
        },
        {
          "question": "신체 구성 추적에서 제지방량이 중요한 이유는 무엇인가요?",
          "answer": "단순 체중 감소가 아닌 근육량을 보존하면서 순수 체지방이 빠지고 있는지 확인하는 핵심 지표로 활용됩니다."
        }
      ]
    },
    "hi": {
      "eyebrow": "स्वास्थ्य संदर्भ मानक",
      "title": "लीन बॉडी मास (LBM) कैलकुलेटर – शरीर संरचना संदर्भ टूल",
      "intro": "मुफ़्त लीन बॉडी मास कैलकुलेटर (LBM Calculator)। ऊंचाई और वजन के अनुसार बोअर, जेम्स और ह्यूम समीकरणों का उपयोग करके दुबले शरीर के द्रव्यमान, वसा रहित द्रव्यमान प्रतिशत और शरीर की संरचना की गणना करें। मुफ़्त और गोपनीयता-केंद्रित।",
      "formulaTitle": "मानक संदर्भ सूत्र",
      "formulaDesc": "मानक सत्यापित समीकरणों का उपयोग करके गणना की गई।",
      "tableTitle": "बोअर समीकरण फॉर्मूला संदर्भ तालिका",
      "tableRows": [
        {
          "col1": "बोअर समीकरण (पुरुष)",
          "col2": "(0.407 × W) + (0.267 × H) - 19.2",
          "col3": "पुरुषों में लीन मास अनुमान लगाने का फॉर्मूला"
        },
        {
          "col1": "बोअर समीकरण (महिला)",
          "col2": "(0.252 × W) + (0.473 × H) - 48.3",
          "col3": "महिलाओं में लीन मास अनुमान लगाने का फॉर्मूला"
        }
      ],
      "faqs": [
        {
          "question": "लीन बॉडी मास (LBM) कैलकुलेटर क्या है?",
          "answer": "लीन बॉडी मास कैलकुलेटर बोअर (Boer) सूत्र का उपयोग करके कुल शरीर के वजन में से वसा को छोड़कर हड्डियों, मांसपेशियों और अंगों का शुद्ध वजन आंकता है।"
        },
        {
          "question": "शरीर संरचना ट्रैकिंग में लीन बॉडी मास क्यों उपयोगी है?",
          "answer": "यह वजन घटाने के दौरान मांसपेशियों की रक्षा करते हुए वास्तविक वसा हानि को ट्रैक करने में मदद करता है।"
        }
      ]
    }
  },
  "ideal-weight-calculator": {
    "en": {
      "eyebrow": "Ideal Body Weight Reference",
      "title": "Estimate Ideal Body Weight (IBW) using commonly cited equations",
      "intro": "Find your ideal body weight with our free calculator. It estimates healthy weight ranges based on your height and gender profile. Compare four classic formulas: Devine, Robinson, Miller, and Hamwi. View your target weight and WHO healthy range in seconds.",
      "formulaTitle": "Standard IBW Formulas (Devine, Robinson, Miller & Hamwi)",
      "formulaDesc": "Each formula calculates a healthy baseline starting at 5 feet tall. These numbers are reference guides, not strict rules. Frame size, muscle mass, and bone density all shape your healthy weight.",
      "formulaCode": "IBW = Base Weight + (Factor × Height over 5ft)",
      "tableTitle": "Ideal Body Weight (IBW) Comparison Table by Height & Formula",
      "tableRows": [
        {
          "col1": "Devine Formula (1974)",
          "col2": "50 kg (M) / 45.5 kg (F) + 2.3 kg/in > 5ft",
          "col3": "Classic medical formula used since 1974"
        },
        {
          "col1": "Robinson Formula (1983)",
          "col2": "52 kg (M) / 49.0 kg (F) + 1.9 or 1.7 kg/in",
          "col3": "Popular formula tuned for average adult frames"
        },
        {
          "col1": "Miller Formula (1983)",
          "col2": "56.2 kg (M) / 53.1 kg (F) + 1.41 or 1.36 kg/in",
          "col3": "Slightly higher base weight for shorter adults"
        },
        {
          "col1": "Hamwi Formula (1964)",
          "col2": "48 kg (M) / 45.5 kg (F) + 2.7 or 2.2 kg/in",
          "col3": "Early clinical benchmark formula"
        },
        {
          "col1": "WHO Healthy BMI Range",
          "col2": "18.5 – 24.9 kg/m²",
          "col3": "Flexible population range based on height squared"
        }
      ],
      "faqs": [
        {
          "question": "What is an Ideal Weight Calculator?",
          "answer": "An Ideal Weight Calculator estimates a healthy weight range for your height and gender profile. It uses classic formulas like Devine, Robinson, Miller, and Hamwi."
        },
        {
          "question": "What is my ideal weight for my height?",
          "answer": "Enter your height and gender profile to check your numbers. For example, a 5'10\" male has an estimated Devine weight of 73 kg (161 lbs), within a WHO healthy range of 59 to 79 kg."
        },
        {
          "question": "Why do formulas use different numbers for men and women?",
          "answer": "Men naturally have higher muscle mass and bone density per inch of height. Formulas account for these physical differences."
        },
        {
          "question": "How does ideal weight differ from a healthy BMI range?",
          "answer": "Formulas provide a single reference target. In contrast, BMI gives a broad window (18.5 to 24.9) that accommodates different bone structures."
        },
        {
          "question": "Is this calculator accurate for muscular lifters and athletes?",
          "answer": "Formulas assume average body frames. Muscular lifters often weigh more than formula targets while maintaining low, healthy body fat."
        }
      ]
    },
    "es": {
      "eyebrow": "Estándares de Referencia de Salud",
      "title": "Calculadora de Peso Corporal Ideal – Fórmulas IBW",
      "intro": "Calculadora de peso ideal gratuita. Calcula rangos de referencia de peso corporal ideal (IBW) utilizando las ecuaciones médicas de Devine, Robinson, Miller y Hamwi según altura y género con cálculos privados en el navegador.",
      "formulaTitle": "Fórmula de Referencia Estándar",
      "formulaDesc": "Calculado utilizando ecuaciones estándar validadas.",
      "formulaCode": "IBW = Base Weight + (Factor × Height over 5ft)",
      "tableTitle": "Tabla Comparativa de Peso Corporal Ideal (IBW) por Altura y Fórmula",
      "tableRows": [
        {
          "col1": "Fórmula de Devine (1974)",
          "col2": "50 kg (H) / 45.5 kg (M) + 2.3 kg/in > 5ft",
          "col3": "Fórmula clásica ampliamente utilizada desde 1974"
        },
        {
          "col1": "Fórmula de Robinson (1983)",
          "col2": "52 kg (H) / 49.0 kg (M) + 1.9 o 1.7 kg/in",
          "col3": "Modificación de Devine optimizada para complexión media"
        },
        {
          "col1": "Fórmula de Miller (1983)",
          "col2": "56.2 kg (H) / 53.1 kg (M) + 1.41 o 1.36 kg/in",
          "col3": "Estimación base más alta para estaturas bajas"
        },
        {
          "col1": "Fórmula de Hamwi (1964)",
          "col2": "48 kg (H) / 45.5 kg (M) + 2.7 o 2.2 kg/in",
          "col3": "Fórmula histórica tradicional de peso corporal ideal"
        },
        {
          "col1": "Rango de IMC Saludable de la OMS",
          "col2": "18.5 – 24.9 kg/m²",
          "col3": "Intervalo de salud poblacional basado en altura al cuadrado"
        }
      ],
      "faqs": [
        {
          "question": "¿Qué es una calculadora de peso ideal (IBW)?",
          "answer": "Es una herramienta que estima rangos de peso objetivo según la altura y el sexo biológico utilizando fórmulas clásicas como Devine, Robinson y Miller."
        },
        {
          "question": "¿Cuál es mi peso ideal para mi altura en kg o libras?",
          "answer": "Introduce tu altura y sexo. Por ejemplo, para un hombre de 178 cm, la fórmula de Devine estima un peso de referencia cercano a 73 kg."
        },
        {
          "question": "¿Por qué existen diferentes fórmulas para hombres y mujeres?",
          "answer": "Los hombres biológicos presentan en promedio mayor densidad muscular y masa ósea por centímetro de estatura, lo que se refleja en los coeficientes matemáticos."
        },
        {
          "question": "¿Cuál es la diferencia entre el peso corporal ideal (IBW) y el rango saludable de IMC?",
          "answer": "Las fórmulas de IBW proporcionan un valor numérico específico, mientras que el IMC de la OMS ofrece un rango más amplio y flexible (18.5 a 24.9 kg/m²)."
        },
        {
          "question": "¿Es adecuada la calculadora de peso ideal para personas musculosas?",
          "answer": "Las fórmulas de IBW se basan en medias poblacionales; los atletas con alta masa muscular pueden superar estos valores manteniéndose saludables."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de Référence de Santé",
      "title": "Calculateur de Poids Idéal – Équations IBW Devine et Robinson",
      "intro": "Calculateur de poids idéal gratuit. Calculez les plages de référence du poids idéal (IBW) à l'aide des équations médicales de Devine, Robinson, Miller et Hamwi selon la taille et le genre avec calculs sur navigateur.",
      "formulaTitle": "Formule de Référence Standard",
      "formulaDesc": "Calculé à l'aide d'équations standards validées.",
      "formulaCode": "IBW = Base Weight + (Factor × Height over 5ft)",
      "tableTitle": "Tableau Comparatif du Poids Idéal (IBW) selon la Taille et la Formule",
      "tableRows": [
        {
          "col1": "Formule de Devine (1974)",
          "col2": "50 kg (H) / 45.5 kg (F) + 2.3 kg/in > 5ft",
          "col3": "Formule de référence la plus citée depuis 1974"
        },
        {
          "col1": "Formule de Robinson (1983)",
          "col2": "52 kg (H) / 49.0 kg (F) + 1.9 ou 1.7 kg/in",
          "col3": "Variante de Devine optimisée pour morphologie moyenne"
        },
        {
          "col1": "Formule de Miller (1983)",
          "col2": "56.2 kg (H) / 53.1 kg (F) + 1.41 ou 1.36 kg/in",
          "col3": "Estimation de base plus haute pour personnes de petite taille"
        },
        {
          "col1": "Formule de Hamwi (1964)",
          "col2": "48 kg (H) / 45.5 kg (F) + 2.7 ou 2.2 kg/in",
          "col3": "Formule historique traditionnelle de poids idéal"
        },
        {
          "col1": "Plage d'IMC Santé de l'OMS",
          "col2": "18.5 – 24.9 kg/m²",
          "col3": "Fenêtre de référence de santé publique basée sur la taille au carré"
        }
      ],
      "faqs": [
        {
          "question": "Qu'est-ce qu'un calculateur de poids idéal (IBW) ?",
          "answer": "C'est un outil qui calcule des estimations de poids de référence selon votre taille et votre sexe à l'aide de formules reconnues (Devine, Robinson, Miller)."
        },
        {
          "question": "Quel est mon poids idéal selon ma taille en kg ?",
          "answer": "Entrez votre taille et votre sexe. Par exemple, pour un homme de 178 cm, la formule de Devine estime un poids cible autour de 73 kg."
        },
        {
          "question": "Pourquoi les formules sont-elles différentes pour les hommes et les femmes ?",
          "answer": "Les hommes possèdent en moyenne une masse musculaire et osseuse plus dense par centimètre de taille, ce qui motive des coefficients distincts."
        },
        {
          "question": "Quelle est la différence entre le poids idéal (IBW) et la fourchette d'IMC santé ?",
          "answer": "L'IBW donne une estimation ponctuelle, alors que l'IMC santé de l'OMS définit une plage complète (18,5 à 24,9 kg/m²)."
        },
        {
          "question": "Le calculateur de poids idéal convient-il aux personnes musclées ?",
          "answer": "Ces équations sont basées sur des moyennes générales ; les sportifs musclés peuvent naturellement peser plus lourd sans excès de graisse."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "Idealgewicht-Rechner – IBW-Formeln nach Devine & Robinson",
      "intro": "Kostenloser Idealgewicht-Rechner. Berechnen Sie den Referenzbereich für das ideale Körpergewicht (IBW) mit den medizinischen Formeln nach Devine, Robinson, Miller und Hamwi nach Körpergröße und Geschlecht datenschutzorientiert im Browser.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardmäßig validierten Gleichungen.",
      "formulaCode": "IBW = Base Weight + (Factor × Height over 5ft)",
      "tableTitle": "Idealgewicht-Vergleichstabelle (IBW) nach Größe und Formel",
      "tableRows": [
        {
          "col1": "Devine-Formel (1974)",
          "col2": "50 kg (M) / 45.5 kg (F) + 2.3 kg/in > 5ft",
          "col3": "Weit verbreitete Referenzformel von 1974"
        },
        {
          "col1": "Robinson-Formel (1983)",
          "col2": "52 kg (M) / 49.0 kg (F) + 1.9 bzw. 1.7 kg/in",
          "col3": "Devine-Modifikation für durchschnittliche Statur"
        },
        {
          "col1": "Miller-Formel (1983)",
          "col2": "56.2 kg (M) / 53.1 kg (F) + 1.41 bzw. 1.36 kg/in",
          "col3": "Höherer Basiswert für kleinere Personen"
        },
        {
          "col1": "Hamwi-Formel (1964)",
          "col2": "48 kg (M) / 45.5 kg (F) + 2.7 bzw. 2.2 kg/in",
          "col3": "Traditionelle historische Referenzformel"
        },
        {
          "col1": "WHO Gesunder BMI-Bereich",
          "col2": "18.5 – 24.9 kg/m²",
          "col3": "Referenzbereich basierend auf Körpergröße zum Quadrat"
        }
      ],
      "faqs": [
        {
          "question": "Was ist ein Idealgewicht-Rechner (IBW-Rechner)?",
          "answer": "Ein Werkzeug, das Orientierungswerte für das Zielgewicht basierend auf Größe und biologischem Geschlecht mithilfe anerkannter Formeln (Devine, Robinson) berechnet."
        },
        {
          "question": "Was ist mein Idealgewicht für meine Körpergröße in kg?",
          "answer": "Geben Sie Größe und Geschlecht ein. Für einen 178 cm großen Mann schätzt die Devine-Formel beispielsweise ein Referenzgewicht von ca. 73 kg."
        },
        {
          "question": "Warum gibt es unterschiedliche Formeln für Männer und Frauen?",
          "answer": "Männer haben im statistischen Durchschnitt mehr Knochen- und Muskelmasse pro Zentimeter Körpergröße, was in den Berechnungen berücksichtigt wird."
        },
        {
          "question": "Was ist der Unterschied zwischen Idealgewicht (IBW) und dem gesunden BMI-Bereich?",
          "answer": "IBW-Formeln liefern eine konkrete Punktschätzung, während der WHO-BMI einen flexiblen gesunden Bereich (18,5 bis 24,9 kg/m²) beschreibt."
        },
        {
          "question": "Ist der Idealgewicht-Rechner für muskulöse Personen geeignet?",
          "answer": "Die Formeln basieren auf Bevölkerungsdurchschnitten; Kraftsportler mit hohem Muskelanteil können gesunde Werte oberhalb dieser Schätzungen aufweisen."
        }
      ]
    },
    "ko": {
      "eyebrow": "건강 참조 표준 지침",
      "title": "이상적인 체중 계산기 – Devine 및 Robinson 공식 기반 IBW 분석 – 참조 계산기",
      "intro": "무료 이상 체중 계산기. 신장과 성별에 따라 Devine, Robinson, Miller 및 Hamwi 의학 공식을 종합 적용하여 개인별 이상적인 체중(IBW) 권장 범위를 산출하세요. 가입 없이 구동되는 100% 브라우저 계산. 세계보건기구(WHO) 기준에 따른 안전한 무료 건강 도구입니다.",
      "formulaTitle": "표준 계산 공식",
      "formulaDesc": "검증된 표준 공식을 사용하여 계산됩니다.",
      "formulaCode": "IBW = Base Weight + (Factor × Height over 5ft)",
      "tableTitle": "신장 및 산출 공식별 이상적 표준 체중(IBW) 비교표",
      "tableRows": [
        {
          "col1": "드바인 공식 (1974)",
          "col2": "50 kg (남) / 45.5 kg (여) + 5피트 초과 1인치당 2.3 kg",
          "col3": "1974년 발표되어 의학계에서 널리 인용되는 표준 공식"
        },
        {
          "col1": "로빈슨 공식 (1983)",
          "col2": "52 kg (남) / 49.0 kg (여) + 1인치당 1.9 또는 1.7 kg",
          "col3": "중간 체형 성인에 최적화된 드바인 보정 공식"
        },
        {
          "col1": "밀러 공식 (1983)",
          "col2": "56.2 kg (남) / 53.1 kg (여) + 1인치당 1.41 또는 1.36 kg",
          "col3": "키가 작은 체형에 적합한 완만한 기울기의 공식"
        },
        {
          "col1": "함위 공식 (1964)",
          "col2": "48 kg (남) / 45.5 kg (여) + 1인치당 2.7 또는 2.2 kg",
          "col3": "초기 임상 연구에서 사용된 전통적 기준 공식"
        },
        {
          "col1": "WHO 표준 정상 BMI 범위",
          "col2": "18.5 – 24.9 kg/m²",
          "col3": "키의 제곱에 비례하는 보편적 국제 건강 체중 구간"
        }
      ],
      "faqs": [
        {
          "question": "이상 체중(IBW) 계산기란 무엇인가요?",
          "answer": "키와 성별을 바탕으로 디바인(Devine), 로빈슨(Robinson) 등 표준 의학 공식을 사용하여 목표 체중을 추정하는 도구입니다."
        },
        {
          "question": "신장별 권장 이상 체중은 몇 kg인가요?",
          "answer": "키와 성별을 입력하면 계산됩니다. 예를 들어 키 178cm 남성의 경우 디바인 공식 기준 약 73kg의 기준 체중이 산출됩니다."
        },
        {
          "question": "남성과 여성의 이상 체중 계산 공식이 다른 이유는 무엇인가요?",
          "answer": "생물학적 남성은 신장당 평균 골격량과 근육량이 상대적으로 높기 때문에 공식의 기초 가중치에 차이가 있습니다."
        },
        {
          "question": "이상 체중(IBW)과 건강 BMI 정상 범위의 차이점은 무엇인가요?",
          "answer": "IBW 공식은 특정 기준값을 단일 수치로 제공하는 반면, WHO 정상 BMI는 18.5~24.9 사이의 폭넓고 유연한 체중 범위를 제시합니다."
        },
        {
          "question": "근육량이 많은 사람에게도 이상 체중 계산기가 정확한가요?",
          "answer": "IBW 공식은 일반 성인 평균을 기준으로 하므로, 근육량이 발달한 운동선수는 계산된 수치보다 체중이 더 나가더라도 건강한 상태일 수 있습니다."
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
          "question": "क्या आदर्श वजन कैलकुलेटर मांसपेशियों वाले लोगों के लिए उपयुक्त है?",
          "answer": "IBW सूत्र सामान्य औसत पर आधारित हैं; अधिक मांसपेशियों वाले एथलीट बिना अतिरिक्त व사 के भी इस अनुमान से अधिक वजन रख सकते हैं।"
        }
      ]
    }
  },
  "calorie-calculator": {
    "en": {
      "eyebrow": "Calorie Planning Reference",
      "title": "Daily Calorie Target & Energy Balance Calculator",
      "intro": "Use our free Calorie Calculator to plan your daily meals and weight goals. It estimates how many calories you burn each day based on BMR and TDEE. You can easily see how small calorie changes affect your weight over time. Simply enter your age, gender, height, weight, and activity level to get started.",
      "formulaTitle": "Energy Expenditure & Caloric Adjustment Math",
      "formulaDesc": "Daily Target = TDEE - Planned Deficit. A negative energy balance of 500 kcal daily totals 3,500 kcal per week, roughly equivalent to one pound of fat tissue.",
      "formulaCode": "Target Calories = TDEE - Planned Reduction",
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
          "question": "What is an energy deficit and how does this calculator determine daily intake?",
          "answer": "An energy deficit occurs when daily intake is lower than total daily energy expenditure (TDEE). The tool calculates your maintenance expenditure and applies a gradual adjustment to establish your daily target."
        },
        {
          "question": "How does caloric reduction translate to weight loss over time?",
          "answer": "One pound of adipose tissue holds approximately 3,500 kcal of stored energy. Creating a 500 kcal daily gap creates a 3,500 kcal weekly deficit, which typically yields roughly one pound of gradual fat reduction."
        },
        {
          "question": "What reduction rate is recommended for sustainable progress?",
          "answer": "A moderate deficit of 300 to 500 calories per day provides steady fat loss while preserving metabolic health. Excessive restriction risks lethargy, micronutrient deficiency, and muscle loss."
        },
        {
          "question": "How much protein should I consume during a cutting phase?",
          "answer": "Consuming 1.6 to 2.2 grams of protein per kilogram of body weight helps preserve lean muscle tissue and increases satiety while in a negative energy balance."
        },
        {
          "question": "Why does weight loss sometimes stall during an extended diet?",
          "answer": "Metabolic adaptation occurs as body mass drops, slightly reducing daily expenditure. Track portion accuracy and recalculate your TDEE every 4 to 6 weeks to adjust your target intake."
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
          "col3": "Balance energético estimado según TDEE para estabilizar peso"
        }
      ],
      "faqs": [
        {
          "question": "¿Qué es un déficit calórico y cómo funciona la calculadora?",
          "answer": "Un déficit calórico ocurre cuando consumes menos energía de la que gastas a diario (TDEE). La calculadora estima las calorías diarias necesarias para alcanzar tus metas."
        },
        {
          "question": "¿Cómo funciona la relación matemática entre calorías y cambio de peso?",
          "answer": "En la literatura científica se suele estimar que un déficit acumulado de unas 3500 kcal equivale aproximadamente a medio kilo de grasa corporal, aunque la adaptación metabólica varía individualmente."
        },
        {
          "question": "¿Qué déficit calórico es el más recomendado para una pérdida de peso sostenible?",
          "answer": "Un déficit moderado de 300 a 500 kcal diarias suele ser el más sostenible para preservar la masa muscular y mantener la energía."
        },
        {
          "question": "¿Cuánta proteína debo consumir durante un déficit calórico?",
          "answer": "Durante una etapa de déficit, se aconseja consumir entre 1.6 y 2.2 gramos de proteína por kilogramo de peso corporal para proteger la masa magra."
        },
        {
          "question": "¿Qué debo hacer si mi pérdida de peso se estanca en déficit calórico?",
          "answer": "Los estancamientos suelen deberse a una adaptación metabólica o a pequeñas calorías no contabilizadas; se aconseja reevaluar el TDEE o tomar un descanso dietético temporal."
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
          "col3": "Équilibre énergétique TDEE estimé pour la stabilisation du poids"
        }
      ],
      "faqs": [
        {
          "question": "Qu'est-ce qu'un déficit calorique et comment fonctionne ce calculateur ?",
          "answer": "Un déficit calorique survient lorsque l'apport énergétique quotidien est inférieur à la dépense totale (TDEE). Le calculateur estime vos calories cibles pour vos objectifs."
        },
        {
          "question": "Comment fonctionne la formule mathématique du déficit calorique ?",
          "answer": "Un déficit cumulé d'environ 3500 kcal correspond en moyenne à 0,45 kg de perte de tissu adipeux, les réponses métaboliques restant variables d'une personne à l'autre."
        },
        {
          "question": "Quel déficit calorique est recommandé pour perdre du poids durablement ?",
          "answer": "Un déficit modéré de 300 à 500 kcal par jour est généralement recommandé pour une perte de graisse progressive sans fatigue excessive."
        },
        {
          "question": "Quelle quantité de protéines consommer en déficit calorique ?",
          "answer": "Un apport de 1,6 à 2,2 g de protéines par kg de poids de corps est conseillé pour préserver la masse musculaire pendant une restriction calorique."
        },
        {
          "question": "Que faire si la perte de poids stagne malgré le déficit calorique ?",
          "answer": "Les plateaux sont souvent liés à des dépenses non sportives réduites ou des calories non comptabilisées ; recalculez votre TDEE ou prévoyez une courte phase de maintien."
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
          "col3": "Geschätzte TDEE-Energiebilanz zur Gewichtsstabilisierung"
        }
      ],
      "faqs": [
        {
          "question": "Was ist ein Kaloriendefizit und wie arbeitet der Rechner?",
          "answer": "Ein Kaloriendefizit entsteht, wenn die tägliche Kalorienaufnahme unter dem Gesamtenergiebedarf (TDEE) liegt. Der Rechner berechnet individuelle Zielwerte."
        },
        {
          "question": "Wie funktioniert die Mathematik hinter Kaloriendefizit und Gewichtsabnahme?",
          "answer": "Ein kumuliertes Defizit von etwa 3500 kcal entspricht rechnerisch etwa 0,5 kg Körperfett, wobei individuelle Stoffwechselanpassungen zu beachten sind."
        },
        {
          "question": "Welches Kaloriendefizit ist für nachhaltiges Abnehmen ideal?",
          "answer": "Ein moderates Defizit von 300 bis 500 kcal pro Tag gilt als besonders nachhaltig und schont Muskelmasse und Leistungsfähigkeit."
        },
        {
          "question": "Wie viel Protein sollte man während eines Kaloriendefizits essen?",
          "answer": "Um die Muskelmasse im Defizit zu schützen, wird eine Proteinzufuhr von 1,6 bis 2,2 Gramm pro Kilogramm Körpergewicht empfohlen."
        },
        {
          "question": "Was tun bei einem Gewichtsplateau im Kaloriendefizit?",
          "answer": "Stagnationen entstehen oft durch unbewusste Kalorienzufuhr oder verringerte Alltagsbewegung; eine Neuberechnung des TDEE verschafft Klarheit."
        }
      ]
    },
    "ko": {
      "eyebrow": "칼로리 계획 및 섭취량",
      "title": "칼로리 결손 계산기 – 칼로리 계획 계산기",
      "intro": "무료 칼로리 결손 계산기를 사용하여 기초대사량(BMR) 및 활동량(TDEE)을 기반으로 체중 감량, 유지, 증량 목표에 따른 일일 맞춤형 목표 칼로리 섭취량을 브라우저 내에서 정밀하게 산출하세요. 세계보건기구(WHO) 기준에 따른 안전한 무료 건강 도구입니다.",
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
          "col3": "체중 유지를 위한 추정 TDEE 에너지 균형"
        }
      ],
      "faqs": [
        {
          "question": "칼로리 결손이란 무엇이며 계산기는 어떻게 작동하나요?",
          "answer": "칼로리 결손은 하루 섭취 에너지가 총 일일 에너지 소비량(TDEE)보다 적은 상태를 의미하며, 목표에 맞는 일일 섭취 기준을 산출합니다."
        },
        {
          "question": "칼로리 결손과 체중 감량의 수학적 원리는 무엇인가요?",
          "answer": "학술적으로 약 3500 kcal의 누적 결손이 약 0.45kg의 체지방 감량에 상응한다고 알려져 있으나, 대사 적응에 따라 개인차가 존재합니다."
        },
        {
          "question": "건강하고 지속 가능한 권장 칼로리 결손량은 얼마인가요?",
          "answer": "근손실을 최소화하고 일상 활력을 유지하기 위해 하루 300~500 kcal 수준의 완만한 결손이 가장 권장됩니다."
        },
        {
          "question": "칼로리 결손 기간 동안 단백질은 얼마나 섭취해야 하나요?",
          "answer": "체중 감량 중 제지방(근육량)을 보호하기 위해 체중 1kg당 1.6~2.2g의 충분한 단백질 섭취가 권장됩니다."
        },
        {
          "question": "칼로리 결손 중 체중 감량이 정체되면 어떻게 해야 하나요?",
          "answer": "활동량 감소나 식단 기록 누락이 원인일 수 있으므로, TDEE를 재계산하거나 단기간 유지 칼로리로 재정비하는 것이 좋습니다."
        }
      ]
    },
    "hi": {
      "eyebrow": "पोषण योजना एवं ऊर्जा घाटा संदर्भ",
      "title": "कैलोरी घाटा कैलकुलेटर – Calorie Deficit ऑनलाइन गणना",
      "intro": "हमारे मुफ़्त Calorie Deficit Calculator से अपने वजन प्रबंधन लक्ष्यों के लिए दैनिक ऊर्जा अंतर और TDEE का वैज्ञानिक आकलन करें। Mifflin-St Jeor फॉर्मूले पर आधारित सुरक्षित गणना।",
      "formulaTitle": "कैलोरी घाटा सूत्र एवं ऊर्जा गणित",
      "formulaDesc": "दैनिक लक्षित ऊर्जा = TDEE - दैनिक ऊर्जा घाटा | साप्ताहिक ऊर्जा अंतर = दैनिक घाटा × 7 (लगभग 7,700 kcal प्रति किलोग्राम वसा का गणितीय मानक)",
      "formulaCode": "Target Calories = TDEE - Daily Deficit",
      "tableTitle": "ऊर्जा घाटा परिदृश्य एवं वजन परिवर्तन संदर्भ तालिका",
      "tableRows": [
        {
          "col1": "परिदृश्य A: 250 kcal/दिन घाटा",
          "col2": "~1,750 kcal साप्ताहिक संचयी अंतर",
          "col3": "हल्का दैनिक ऊर्जा अंतर संदर्भ"
        },
        {
          "col1": "परिदृश्य B: 500 kcal/दिन घाटा",
          "col2": "~3,500 kcal साप्ताहिक संचयी अंतर",
          "col3": "मानक दैनिक ऊर्जा अंतर संदर्भ"
        },
        {
          "col1": "ऊर्जा संतुलन (0 kcal)",
          "col2": "0 kcal साप्ताहिक अंतर",
          "col3": "शारीरिक भार स्थिरता के लिए TDEE स्तर"
        },
        {
          "col1": "परिदृश्य C: 750 kcal/दिन घाटा",
          "col2": "~5,250 kcal साप्ताहिक संचयी अंतर",
          "col3": "सक्रिय जीवनशैली के लिए उच्च ऊर्जा अंतर संदर्भ"
        }
      ],
      "faqs": [
        {
          "question": "दैनिक कैलोरी आवश्यकता का आकलन किस प्रकार किया जाता है?",
          "answer": "यह कैलकुलेटर मिफलिन-सेंट जेओर समीकरण द्वारा आपके बेसल मेटाबॉलिज्म (BMR) और दैनिक शारीरिक गतिविधि (TDEE) के संयोजन से संतुलित ऊर्जा लक्ष्य निर्धारित करता है।"
        },
        {
          "question": "ऊर्जा घाटे (Calorie Deficit) की वैज्ञानिक परिभाषा क्या है?",
          "answer": "जब शरीर द्वारा दैनिक गतिविधियों में व्यय की गई ऊर्जा की तुलना में भोजन से कम ऊर्जा ग्रहण की जाती है, तो इसे कैलोरी डेफिसिट कहा जाता है। इस अवस्था में शरीर ऊर्जा आपूर्ति हेतु संचित वसा का उपयोग करता है।"
        },
        {
          "question": "एक किलोग्राम शारीरिक वसा घटाने के लिए कितने संचयी ऊर्जा अंतर की आवश्यकता होती है?",
          "answer": "वैज्ञानिक पोषण मानकों के अनुसार लगभग 7,700 किलोकैलोरी के संचयी घाटे से एक किलोग्राम शारीरिक वसा कम होती है।"
        },
        {
          "question": "टिकाऊ और स्वस्थ वजन प्रबंधन के लिए अनुशंसित गति क्या है?",
          "answer": "स्वास्थ्य विशेषज्ञों के अनुसार प्रति सप्ताह 0.5 से 1 किलोग्राम (लगभग 500 से 1,000 kcal/दिन की मध्यम कमी) वजन घटाना दीर्घकालिक स्वास्थ्य और मांसपेशियों की सुरक्षा हेतु सर्वोत्तम माना जाता है।"
        },
        {
          "question": "क्या पोषक तत्वों की गुणवत्ता केवल ऊर्जा की मात्रा से अधिक महत्वपूर्ण है?",
          "answer": "निसंदेह। कैलोरी की संख्या के अतिरिक्त पर्याप्त प्रोटीन, आहारीय फाइबर, विटामिन और खनिजों से युक्त संतुलित आहार चयापचय को सक्रिय रखने और मांसपेशियों के संरक्षण के लिए अनिवार्य है।"
        }
      ]
    }
  },
  "protein-intake-calculator": {
    "en": {
      "eyebrow": "Daily Nutrition Reference",
      "title": "Protein Intake Calculator – Daily Protein Reference",
      "intro": "Find your daily protein target with our free Protein Intake Calculator. It estimates how much protein you need each day based on your body weight, workout routine, and fitness goals. View your personalized recommendations in grams per day.",
      "formulaTitle": "Protein Intake Formula & Activity Multipliers",
      "formulaDesc": "Daily Protein (g) = Body Weight (kg) × Goal Multiplier. Sedentary adults need about 0.8 g/kg. Active runners and cyclists need 1.2 to 1.4 g/kg. Strength athletes benefit from 1.6 to 2.2 g/kg.",
      "formulaCode": "Protein Target (g) = Weight (kg) × Goal Factor (0.8 to 2.4 g/kg)",
      "tableTitle": "Daily Protein Recommendations by Activity & Goal",
      "tableRows": [
        {
          "col1": "Sedentary Adult Baseline",
          "col2": "0.8 g per kg body weight",
          "col3": "Baseline recommended daily allowance (RDA) to prevent nutritional deficiency"
        },
        {
          "col1": "Endurance Athlete",
          "col2": "1.2 – 1.4 g per kg body weight",
          "col3": "Supports muscle recovery from distance running, swimming, or cycling"
        },
        {
          "col1": "Strength Training & Muscle Growth",
          "col2": "1.6 – 2.2 g per kg body weight",
          "col3": "Optimal range to build muscle and support strength gains"
        },
        {
          "col1": "Fat Loss Calorie Deficit",
          "col2": "1.8 – 2.4 g per kg body weight",
          "col3": "Helps preserve lean muscle and curbs hunger while eating fewer calories"
        }
      ],
      "faqs": [
        {
          "question": "How much protein do I need each day?",
          "answer": "Sedentary adults need at least 0.8 grams of protein per kilogram of body weight. Active people and gym goers generally benefit from 1.2 to 2.2 grams per kilogram."
        },
        {
          "question": "Why is protein intake important when losing weight?",
          "answer": "Protein helps keep you full and satisfied between meals. Eating enough protein during a calorie deficit also protects your muscles, ensuring that most weight lost is fat."
        },
        {
          "question": "How do I calculate my daily protein target?",
          "answer": "Multiply your body weight in kilograms by your target factor. For example, a 70 kg adult who lifts weights might choose 1.8 g/kg, which equals 126 grams of protein daily."
        },
        {
          "question": "What are some high-protein foods to include in my diet?",
          "answer": "Healthy protein sources include chicken breast (31g per 100g), Greek yogurt (10g per 100g), eggs (6g each), tofu (8g per 100g), and cooked lentils (9g per 100g)."
        },
        {
          "question": "Who should be cautious with high protein intake?",
          "answer": "Anyone with kidney or liver conditions should consult a doctor before increasing protein. Healthy kidneys easily handle athletic protein levels, but impaired organs may need lower amounts."
        }
      ]
    },
    "es": {
      "eyebrow": "Estándares de Referencia de Salud",
      "title": "Calculadora de Proteínas – Requerimiento Diario de Proteína",
      "intro": "Calculadora de ingesta diaria de proteínas gratuita. Calcula la ingesta óptima diaria de proteínas en gramos para crecimiento muscular, pérdida de grasa y rendimiento deportivo según peso, objetivos y actividad con cálculos privados en el navegador.",
      "formulaTitle": "Fórmula de Referencia Estándar",
      "formulaDesc": "Calculado utilizando ecuaciones estándar validadas.",
      "formulaCode": "Protein Target (g) = Weight (kg) × Goal Factor (0.8 to 2.4 g/kg)",
      "tableTitle": "Matriz de Ingesta Diaria de Proteína (g/kg) por Actividad y Objetivo",
      "tableRows": [
        {
          "col1": "Adulto Sedentario (Base)",
          "col2": "0.8 g / kg de peso corporal",
          "col3": "Referencia básica de la dosis diaria recomendada (RDA)"
        },
        {
          "col1": "Atleta de Resistencia Activo",
          "col2": "1.2 – 1.4 g / kg de peso corporal",
          "col3": "Rango de referencia para atletas de fondo"
        },
        {
          "col1": "Hipertrofia y Ganancia Muscular",
          "col2": "1.6 – 2.2 g / kg de peso corporal",
          "col3": "Objetivo atlético habitual para entrenamiento de fuerza"
        },
        {
          "col1": "Definición y Déficit Calórico",
          "col2": "1.8 – 2.4 g / kg de peso corporal",
          "col3": "Rango protector de la masa muscular durante el déficit"
        }
      ],
      "faqs": [
        {
          "question": "¿Qué es la calculadora de ingesta de proteínas?",
          "answer": "Es una herramienta de nutrición deportiva que estima tus necesidades diarias de proteínas en gramos según tu peso, objetivo y nivel de actividad."
        },
        {
          "question": "¿Cuánta proteína necesito al día para ganar músculo frente a perder peso?",
          "answer": "Para mantenimiento suele bastar 1.2 a 1.6 g/kg, mientras que para desarrollo muscular o definición se recomiendan habitualmente de 1.6 a 2.2 g por kg de peso."
        },
        {
          "question": "¿Cómo calcular los gramos diarios de proteína por kg de peso corporal?",
          "answer": "Multiplica tu peso en kg por el factor deseado (ej. 70 kg × 2.0 g/kg = 140 g de proteína al día)."
        },
        {
          "question": "¿Cuáles son las mejores fuentes de alimentos ricos en proteínas?",
          "answer": "Pechuga de pollo, pescado, huevos, yogur griego, tofu, legumbres y proteína de suero son excelentes fuentes de proteína de alta calidad."
        },
        {
          "question": "¿Quiénes deben consultar a un profesional sobre sus metas de proteína?",
          "answer": "Personas con afecciones renales o metas atléticas específicas deben coordinar sus requerimientos con un nutricionista o médico."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de Référence de Santé",
      "title": "Calculateur de Protéines – Apport Protéique Quotidien",
      "intro": "Calculateur de besoin quotidien en protéines gratuit. Calculez l'apport quotidien optimal en protéines (g) pour la prise de muscle, la perte de graisse et la performance selon le poids, les objectifs et l'activité avec calculs sur navigateur.",
      "formulaTitle": "Formule de Référence Standard",
      "formulaDesc": "Calculé à l'aide d'équations standards validées.",
      "formulaCode": "Protein Target (g) = Weight (kg) × Goal Factor (0.8 to 2.4 g/kg)",
      "tableTitle": "Matrice d'Apport Quotidien en Protéines (g/kg) par Activité et Objectif",
      "tableRows": [
        {
          "col1": "Adulte Sédentaire (Base)",
          "col2": "0.8 g / kg de poids corporel",
          "col3": "Référence de base des apports journaliers recommandés (AJR)"
        },
        {
          "col1": "Athlète d'Endurance Actif",
          "col2": "1.2 – 1.4 g / kg de poids corporel",
          "col3": "Plage recommandée pour les sports d'endurance"
        },
        {
          "col1": "Prise de Muscle (Hypertrophie)",
          "col2": "1.6 – 2.2 g / kg de poids corporel",
          "col3": "Cible fréquente pour l'entraînement en musculation"
        },
        {
          "col1": "Perte de Graisse en Déficit",
          "col2": "1.8 – 2.4 g / kg de poids corporel",
          "col3": "Apport ciblé pour préserver le muscle en déficit calorique"
        }
      ],
      "faqs": [
        {
          "question": "Qu'est-ce que le calculateur d'apport en protéines ?",
          "answer": "C'est un outil de nutrition qui calcule votre besoin quotidien en protéines en grammes selon votre poids, votre activité et vos objectifs."
        },
        {
          "question": "Combien de protéines par jour pour la prise de muscle ou la perte de poids ?",
          "answer": "Les recommandations courantes se situent entre 1,6 et 2,2 g par kilo de poids de corps pour la musculation et la préservation de la masse maigre."
        },
        {
          "question": "Comment calculer son besoin quotidien en protéines en g/kg ?",
          "answer": "Multipliez votre poids corporel en kg par votre objectif (par exemple, 70 kg × 2,0 g/kg = 140 g de protéines par jour)."
        },
        {
          "question": "Quelles sont les meilleures sources d'aliments riches en protéines ?",
          "answer": "Le poulet, le poisson, les œufs, le fromage blanc, le tofu, les lentilles et la whey sont d'excellentes sources de protéines complètes."
        },
        {
          "question": "Qui devrait consulter un professionnel pour son apport en protéines ?",
          "answer": "Toute personne ayant des antécédents rénaux ou des objectifs spécifiques devrait valider son plan alimentaire avec un professionnel de santé."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "Proteinrechner – Täglicher Eiweißbedarf & Referenzwerte",
      "intro": "Kostenloser Proteinbedarf-Rechner. Berechnen Sie Ihre optimale tägliche Proteinaufnahme in Gramm für Muskelaufbau, Fettabbau und sportliche Leistung basierend auf Gewicht, Zielen und Aktivität datenschutzorientiert im Browser.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardmäßig validierten Gleichungen.",
      "formulaCode": "Protein Target (g) = Weight (kg) × Goal Factor (0.8 to 2.4 g/kg)",
      "tableTitle": "Täglicher Proteinbedarf (g/kg) nach Aktivität und Trainingsziel",
      "tableRows": [
        {
          "col1": "Bewegungsmangel (Basiswert)",
          "col2": "0.8 g / kg Körpergewicht",
          "col3": "RDA-Basisexemplar für sitzende Lebensweise"
        },
        {
          "col1": "Ausdauersportler",
          "col2": "1.2 – 1.4 g / kg Körpergewicht",
          "col3": "Referenzbereich für aktives Ausdauertraining"
        },
        {
          "col1": "Muskelaufbau (Hypertrophie)",
          "col2": "1.6 – 2.2 g / kg Körpergewicht",
          "col3": "Gängiger Richtwert für Hypertrophie-Krafttraining"
        },
        {
          "col1": "Fettabbau im Kaloriendefizit",
          "col2": "1.8 – 2.4 g / kg Körpergewicht",
          "col3": "Empfohlener Bereich zum Schutz der Muskelmasse im Defizit"
        }
      ],
      "faqs": [
        {
          "question": "Was ist der Proteinbedarfs-Rechner?",
          "answer": "Ein Sporternährungs-Rechner, der Ihre empfohlene tägliche Proteinmenge in Gramm basierend auf Körpergewicht und Trainingsziel ermittelt."
        },
        {
          "question": "Wie viel Protein benötige ich täglich für Muskelaufbau oder Fettabbau?",
          "answer": "In der Sporternährung werden für aktiven Muskelaufbau und Muskelerhalt im Defizit meist 1,6 bis 2,2 g Protein pro kg Körpergewicht empfohlen."
        },
        {
          "question": "Wie berechnet man den täglichen Proteinbedarf in Gramm pro kg?",
          "answer": "Multiplizieren Sie Ihr Gewicht in kg mit Ihrem Zielfaktor (z. B. 70 kg × 2,0 g/kg = 140 g Protein täglich)."
        },
        {
          "question": "Welche Lebensmittel sind besonders reich an hochwertigem Eiweiß?",
          "answer": "Hähnchenbrust, Fisch, Eier, Magerquark, Tofu, Hülsenfrüchte und Proteinpulver bieten eine optimale Aminosäurenbilanz."
        },
        {
          "question": "Wer sollte vor einer Ernährungsumstellung ärztlichen Rat einholen?",
          "answer": "Personen mit Vorerkrankungen der Nieren sollten ihren Proteinbedarf individuell mit einem Arzt oder Ernährungsberater abstimmen."
        }
      ]
    },
    "ko": {
      "eyebrow": "건강 참조 표준 지침",
      "title": "단백질 섭취량 계산기 – 일일 단백질 권장량 측정 도구",
      "intro": "일일 단백질 섭취량 무료 계산기. 체중, 운동 강도, 피트니스 목표 및 일상 활동량에 따라 근육 성장, 지방 감량 및 운동 회복 능력을 위한 최적의 일일 단백질 섭취량(g)을 안전하게 산출하세요. 세계보건기구(WHO) 기준에 따른 안전한 무료 건강 도구입니다.",
      "formulaTitle": "표준 계산 공식",
      "formulaDesc": "검증된 표준 공식을 사용하여 계산됩니다.",
      "formulaCode": "Protein Target (g) = Weight (kg) × Goal Factor (0.8 to 2.4 g/kg)",
      "tableTitle": "활동량 및 목표별 일일 단백질 권장 섭취량(g/kg) 기준표",
      "tableRows": [
        {
          "col1": "좌식 생활 성인 기본치",
          "col2": "0.8 g / kg 체중",
          "col3": "일일 권장 섭취량(RDA) 기초 기준치"
        },
        {
          "col1": "지구력 운동 선수",
          "col2": "1.2 – 1.4 g / kg 체중",
          "col3": "유산소 및 마라톤 러너 권장 섭취 범위"
        },
        {
          "col1": "근육 성장 (근비대 트레이닝)",
          "col2": "1.6 – 2.2 g / kg 체중",
          "col3": "근력 운동 및 웨이트 트레이닝 핵심 목표치"
        },
        {
          "col1": "다이어트 및 칼로리 결손",
          "col2": "1.8 – 2.4 g / kg 체중",
          "col3": "체지방 감량 중 근손실 방지를 위한 권장 섭취량"
        }
      ],
      "faqs": [
        {
          "question": "단백질 섭취량 계산기란 무엇인가요?",
          "answer": "체중, 운동 강도 및 목표에 맞춰 하루에 필요한 단백질 섭취량을 그램(g) 단위로 안내하는 스포츠 영양 계산기입니다."
        },
        {
          "question": "근육 증가 및 체중 감량을 위해 하루에 단백질을 얼마나 섭취해야 하나요?",
          "answer": "일반적으로 근육 합성 및 체중 감량 시 근손실 방지를 위해 체중 1kg당 1.6~2.2g의 단백질 섭취가 권장됩니다."
        },
        {
          "question": "체중당 단백질 권장량을 어떻게 계산하나요?",
          "answer": "체중(kg)에 목표 섭취 계수를 곱합니다(예: 체중 70kg × 2.0g = 하루 140g의 단백질)."
        },
        {
          "question": "단백질이 풍부한 대표적인 권장 식품은 무엇인가요?",
          "answer": "닭가슴살, 계란, 그릭요거트, 생선, 두부, 콩류 및 단백질 보충제 등이 훌륭한 단백질 공급원입니다."
        },
        {
          "question": "단백질 섭취량을 늘릴 때 전문가 상담이 필요한 경우는 언제인가요?",
          "answer": "신장 질환이 있거나 특이 건강 상태가 있는 분은 고단백 식단을 시작하기 전 전문의 또는 임상영양사와 상의해야 합니다."
        }
      ]
    },
    "hi": {
      "eyebrow": "स्वास्थ्य संदर्भ मानक",
      "title": "प्रोटीन सेवन कैलकुलेटर – दैनिक प्रोटीन आवश्यकता की गणना",
      "intro": "मुफ़्त दैनिक प्रोटीन सेवन कैलकुलेटर। वजन, फिटनेस लक्ष्यों और गतिविधि के आधार पर मांसपेशियों की वृद्धि, वसा हानि और एथलेटिक प्रदर्शन के लिए ग्राम में इष्टतम दैनिक प्रोटीन सेवन की गणना करें। मुफ़्त और गोपनीयता-केंद्रित।",
      "formulaTitle": "मानक संदर्भ सूत्र",
      "formulaDesc": "मानक सत्यापित समीकरणों का उपयोग करके गणना की गई।",
      "formulaCode": "Protein Target (g) = Weight (kg) × Goal Factor (0.8 to 2.4 g/kg)",
      "tableTitle": "गतिविधि और लक्ष्य के अनुसार दैनिक प्रोटीन संदर्भ सीमा (g/kg) मैट्रिक्स",
      "tableRows": [
        {
          "col1": "गतिहीन वयस्क बेसलाइन",
          "col2": "0.8 ग्राम / किग्रा शरीर का वजन",
          "col3": "दैनिक अनुशंसित सेवन (RDA) आधार"
        },
        {
          "col1": "सक्रिय धीरज एथलीट",
          "col2": "1.2 – 1.4 ग्राम / किग्रा शरीर का वजन",
          "col3": "धीरज एथलेटिक संदर्भ सीमा"
        },
        {
          "col1": "मांसपेशियों की वृद्धि (हाइपरट्रॉफी)",
          "col2": "1.6 – 2.2 ग्राम / किग्रा शरीर का वजन",
          "col3": "शक्ति प्रशिक्षण के लिए मुख्य लक्ष्य"
        },
        {
          "col1": "फैट लॉस कैलोरी घाटा",
          "col2": "1.8 – 2.4 ग्राम / किग्रा शरीर का वजन",
          "col3": "मांसपेशियों के संरक्षण के लिए अनुशंसित सीमा"
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
          "answer": "Dehydration symptoms include dark yellow urine, fatigue, headaches, and dry mouth. Overhydration (water intoxication/hyponatremia) symptoms include completely clear urine, nausea, and disorientation."
        }
      ]
    },
    "es": {
      "eyebrow": "Estándares de Referencia de Salud",
      "title": "Calculadora de Consumo de Agua – Meta Diaria de Hidratación",
      "intro": "Calculadora de ingesta diaria de agua gratuita. Calcula el consumo diario recomendado de agua en litros, vasos u onzas según el peso corporal, el clima, la duración del ejercicio y el nivel de actividad con cálculos privados en el navegador.",
      "formulaTitle": "Fórmula de Referencia Estándar",
      "formulaDesc": "Calculado utilizando ecuaciones estándar validadas.",
      "formulaCode": "Water (L) = (W_kg × 0.035) + (Exercise_hrs × 0.75)",
      "tableTitle": "Pautas de Ingesta Diaria de Agua por Peso Corporal (Litros y Vasos)",
      "tableRows": [
        {
          "col1": "Adulto Sedentario (50 kg)",
          "col2": "1.75 Liters / day",
          "col3": "~7 vasos estándar de 250 ml"
        },
        {
          "col1": "Adulto Sedentario (70 kg)",
          "col2": "2.45 Liters / day",
          "col3": "~10 vasos estándar de 250 ml"
        },
        {
          "col1": "Atleta Activo (70 kg)",
          "col2": "3.20 Liters / day",
          "col3": "~13 vasos estándar de 250 ml"
        },
        {
          "col1": "Atleta Entrenamiento Intenso (90 kg)",
          "col2": "4.15 Liters / day",
          "col3": "~17 vasos estándar de 250 ml"
        }
      ],
      "faqs": [
        {
          "question": "¿Qué es la calculadora de ingesta de agua?",
          "answer": "Es una herramienta de hidratación que estima tus necesidades diarias de líquidos según tu peso corporal y nivel de actividad."
        },
        {
          "question": "¿Cuánta agua debo beber al día según mi peso corporal?",
          "answer": "Una regla orientativa común es beber aproximadamente 35 ml de agua por kilogramo de peso al día (unos 2.5 litros para una persona de 70 kg)."
        },
        {
          "question": "¿Cómo calcular la ingesta diaria de agua con la fórmula por peso?",
          "answer": "Multiplica tu peso en kilogramos por 35 ml. Si realizas ejercicio intenso, añade entre 500 y 1000 ml adicionales según la duración y el calor."
        },
        {
          "question": "¿El café, el té o los refrescos cuentan para la ingesta diaria de agua?",
          "answer": "Sí, las bebidas contribuyen a la hidratación total, aunque el agua pura sigue siendo la opción principal más saludable."
        },
        {
          "question": "¿Cuáles son los primeros signos de deshidratación?",
          "answer": "Orina oscura, sensación de boca seca, fatiga leve y dolor de cabeza son indicadores comunes de hidratación insuficiente."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de Référence de Santé",
      "title": "Calculateur d'Apport en Eau – Hydratation Quotidienne",
      "intro": "Calculateur d'apport quotidien en eau gratuit. Calculez la consommation d'eau quotidienne recommandée en litres, verres et onces selon le poids, le climat, la durée de l'exercice et l'activité avec calculs sur navigateur.",
      "formulaTitle": "Formule de Référence Standard",
      "formulaDesc": "Calculé à l'aide d'équations standards validées.",
      "formulaCode": "Water (L) = (W_kg × 0.035) + (Exercise_hrs × 0.75)",
      "tableTitle": "Repères d'Hydratation Quotidienne selon le Poids (Litres et Verres)",
      "tableRows": [
        {
          "col1": "Adulte Sédentaire (50 kg)",
          "col2": "1.75 Liters / day",
          "col3": "~7 verres standards de 250 ml"
        },
        {
          "col1": "Adulte Sédentaire (70 kg)",
          "col2": "2.45 Liters / day",
          "col3": "~10 verres standards de 250 ml"
        },
        {
          "col1": "Athlète Actif (70 kg)",
          "col2": "3.20 Liters / day",
          "col3": "~13 verres standards de 250 ml"
        },
        {
          "col1": "Athlète Entraînement Intensif (90 kg)",
          "col2": "4.15 Liters / day",
          "col3": "~17 verres standards de 250 ml"
        }
      ],
      "faqs": [
        {
          "question": "Qu'est-ce que le calculateur de consommation d'eau ?",
          "answer": "C'est un outil d'hydratation qui estime vos besoins quotidiens en liquides en fonction de votre poids et de votre niveau d'activité."
        },
        {
          "question": "Combien d'eau dois-je boire par jour selon mon poids ?",
          "answer": "Une règle générale courante est de consommer environ 35 ml d'eau par kilo de poids corporel par jour (soit environ 2,5 L pour 70 kg)."
        },
        {
          "question": "Comment calculer son besoin quotidien en eau avec la formule ?",
          "answer": "Multipliez votre poids en kg par 35 ml. Ajoutez 500 à 1000 ml en cas d'exercice physique prolongé ou de climat chaud."
        },
        {
          "question": "Le café et le thé comptent-ils dans l'hydratation quotidienne ?",
          "answer": "Oui, ces boissons contribuent à l'apport hydrique global, même si l'eau reste la source d'hydratation privilégiée."
        },
        {
          "question": "Quels sont les premiers signes de déshydratation ?",
          "answer": "Une urine foncée, la bouche sèche, une fatigue passagère et des maux de tête sont des signes fréquents d'un manque d'eau."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "Wasserbedarfsrechner – Tägliches Hydratationsziel berechnen",
      "intro": "Kostenloser Wasserbedarf-Rechner. Berechnen Sie Ihre empfohlene tägliche Wasseraufnahme in Litern, Gläsern und Unzen basierend auf Körpergewicht, Klima, Trainingsdauer und Aktivität datenschutzorientiert im Browser.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardmäßig validierten Gleichungen.",
      "formulaCode": "Water (L) = (W_kg × 0.035) + (Exercise_hrs × 0.75)",
      "tableTitle": "Täglicher Wasserbedarf nach Körpergewicht (Liter und Gläser)",
      "tableRows": [
        {
          "col1": "Bewegungsarmer Erwachsener (50 kg)",
          "col2": "1.75 Liters / day",
          "col3": "~7 Standardgläser (250 ml)"
        },
        {
          "col1": "Bewegungsarmer Erwachsener (70 kg)",
          "col2": "2.45 Liters / day",
          "col3": "~10 Standardgläser (250 ml)"
        },
        {
          "col1": "Aktiver Sportler (70 kg)",
          "col2": "3.20 Liters / day",
          "col3": "~13 Standardgläser (250 ml)"
        },
        {
          "col1": "Intensiver Sportler (90 kg)",
          "col2": "4.15 Liters / day",
          "col3": "~17 Standardgläser (250 ml)"
        }
      ],
      "faqs": [
        {
          "question": "Was ist der Wasserbedarfs-Rechner?",
          "answer": "Ein praktisches Hydratationswerkzeug, das Ihren täglichen Flüssigkeitsbedarf basierend auf Körpergewicht und Aktivitätslevel schätzt."
        },
        {
          "question": "Wie viel Wasser sollte ich pro Tag bezogen auf mein Körpergewicht trinken?",
          "answer": "Eine bewährte Faustformel empfiehlt etwa 35 ml Wasser pro Kilogramm Körpergewicht täglich (ca. 2,5 Liter bei 70 kg)."
        },
        {
          "question": "Wie berechnet man die tägliche Trinkmenge mit der Gewichtsformel?",
          "answer": "Multiplizieren Sie Ihr Körpergewicht in kg mit 35 ml. Bei intensivem Sport oder Hitze sollten 500 bis 1000 ml zusätzlich eingeplant werden."
        },
        {
          "question": "Zählen Kaffee und Tee zur täglichen Flüssigkeitsaufnahme?",
          "answer": "Ja, ungesüßter Tee und Kaffee tragen zur Gesamtflüssigkeit bei, reines Wasser bleibt jedoch die beste Basis."
        },
        {
          "question": "Was sind frühe Anzeichen von Dehydrierung?",
          "answer": "Dunkler Urin, trockener Mund, Konzentrationsschwäche und leichte Kopfschmerzen deuten auf eine unzureichende Flüssigkeitszufuhr hin."
        }
      ]
    },
    "ko": {
      "eyebrow": "건강 참조 표준 지침",
      "title": "수분 섭취량 계산기 – 일일 목표 수분 섭취량 측정 도구",
      "intro": "일일 권장 수분 섭취량 무료 계산기. 체중, 기후 환경, 운동 시간 및 일상 활동 수준에 따라 리터(L), 컵 및 온스 단위로 권장되는 일일 적정 수분 섭취량을 브라우저 내에서 안전하게 계산하세요. 세계보건기구(WHO) 기준에 따른 안전한 무료 건강 도구입니다.",
      "formulaTitle": "표준 계산 공식",
      "formulaDesc": "검증된 표준 공식을 사용하여 계산됩니다.",
      "formulaCode": "Water (L) = (W_kg × 0.035) + (Exercise_hrs × 0.75)",
      "tableTitle": "체중 및 활동 수준별 일일 권장 수분 섭취량 (리터 및 잔 기준)",
      "tableRows": [
        {
          "col1": "비활동 성인 (50 kg)",
          "col2": "1.75 Liters / day",
          "col3": "~250ml 표준 컵 7잔"
        },
        {
          "col1": "비활동 성인 (70 kg)",
          "col2": "2.45 Liters / day",
          "col3": "~250ml 표준 컵 10잔"
        },
        {
          "col1": "활동적인 운동선수 (70 kg)",
          "col2": "3.20 Liters / day",
          "col3": "~250ml 표준 컵 13잔"
        },
        {
          "col1": "고강도 운동선수 (90 kg)",
          "col2": "4.15 Liters / day",
          "col3": "~250ml 표준 컵 17잔"
        }
      ],
      "faqs": [
        {
          "question": "일일 물 섭취량 계산기란 무엇인가요?",
          "answer": "체중과 신체 활동량을 바탕으로 하루 권장 수분 섭취량을 안내하는 건강 관리 도구입니다."
        },
        {
          "question": "체중에 따라 하루에 물을 얼마나 마셔야 하나요?",
          "answer": "일반적으로 체중 1kg당 약 30~35ml의 수분 섭취가 권장됩니다(체중 70kg 기준 약 2.1~2.5리터)."
        },
        {
          "question": "체중 공식을 사용해 일일 권장 수분량을 어떻게 계산하나요?",
          "answer": "체중(kg)에 35ml를 곱하여 기본 필요량을 구합니다. 격렬한 운동을 하거나 더운 환경에서는 500~1000ml를 추가로 보충합니다."
        },
        {
          "question": "커피나 차도 하루 수분 섭취량에 포함되나요?",
          "answer": "커피와 차도 전반적인 수분 공급에 기여하지만, 순수한 물을 주된 수분 공급원으로 섭취하는 것이 가장 좋습니다."
        },
        {
          "question": "수분 부족(탈수)의 초기 증상에는 어떤 것들이 있나요?",
          "answer": "진한 색의 소변, 구강 건조, 가벼운 피로감 및 두통 등은 수분 보충이 필요하다는 대표적인 신호입니다."
        }
      ]
    },
    "hi": {
      "eyebrow": "स्वास्थ्य संदर्भ मानक",
      "title": "पानी के सेवन का कैलकुलेटर – दैनिक जल आवश्यकता की गणना",
      "intro": "मुफ़्त दैनिक जल सेवन कैलकुलेटर। शरीर के वजन, जलवायु, व्यायाम की अवधि और गतिविधि स्तर के आधार पर लीटर, ग्लास और औंस में अनुशंसित दैनिक पानी की खपत की गणना करें। मुफ़्त और गोपनीयता-केंद्रित।",
      "formulaTitle": "मानक संदर्भ सूत्र",
      "formulaDesc": "मानक सत्यापित समीकरणों का उपयोग करके गणना की गई।",
      "formulaCode": "Water (L) = (W_kg × 0.035) + (Exercise_hrs × 0.75)",
      "tableTitle": "शरीर के वजन के अनुसार दैनिक पानी की खपत का पैमाना (लीटर और गिलास)",
      "tableRows": [
        {
          "col1": "गतिहीन 50 किग्रा वयस्क",
          "col2": "1.75 Liters / day",
          "col3": "~7 मानक 250 मिली गिलास"
        },
        {
          "col1": "गतिहीन 70 किग्रा वयस्क",
          "col2": "2.45 Liters / day",
          "col3": "~10 मानक 250 मिली गिलास"
        },
        {
          "col1": "सक्रिय 70 किग्रा एथलीट",
          "col2": "3.20 Liters / day",
          "col3": "~13 मानक 250 मिली गिलास"
        },
        {
          "col1": "कठिन व्यायाम 90 किग्रा एथलीट",
          "col2": "4.15 Liters / day",
          "col3": "~17 मानक 250 मिली गिलास"
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
      "intro": "Calculate your daily protein, carbohydrate, and fat targets with our free Macro Calculator. It turns your daily calorie goal into practical gram amounts for easy meal planning. Pick a balanced, low-carb, or high-protein split to match your fitness routine.",
      "formulaTitle": "Macro Caloric Conversion Formulas",
      "formulaDesc": "Carbohydrates and protein each provide 4 calories per gram. Dietary fats supply 9 calories per gram. The calculator multiplies your daily calories by your macro split, then divides by each nutrient's energy density.",
      "formulaCode": "Carbs = (kcal × C%) / 4 | Protein = (kcal × P%) / 4 | Fat = (kcal × F%) / 9",
      "tableTitle": "Macronutrient Energy Density & Dieting Ratios",
      "tableRows": [
        {
          "col1": "Carbohydrates (4 kcal/g)",
          "col2": "40% to 50% of daily calories",
          "col3": "Primary fuel for brain function and high-intensity workouts"
        },
        {
          "col1": "Protein (4 kcal/g)",
          "col2": "25% to 35% of daily calories",
          "col3": "Builds and repairs muscle tissue while supporting fullness"
        },
        {
          "col1": "Dietary Fat (9 kcal/g)",
          "col2": "20% to 30% of daily calories",
          "col3": "Supports hormone production and absorption of fat-soluble vitamins"
        }
      ],
      "faqs": [
        {
          "question": "What is a Macro Calculator?",
          "answer": "A macro calculator turns your daily calories into grams of protein, carbs, and fats. Tracking macros helps you meet specific body composition and athletic goals."
        },
        {
          "question": "How do I calculate macros in grams?",
          "answer": "Multiply your total calories by your target percentage for each macronutrient. Divide carb and protein calories by 4, and divide fat calories by 9."
        },
        {
          "question": "What is the best macro split for weight loss?",
          "answer": "A common fat-loss split is 40% protein, 35% carbs, and 25% fats. Higher protein helps curb appetite and protects lean muscle during a calorie deficit."
        },
        {
          "question": "What is IIFYM (If It Fits Your Macros)?",
          "answer": "IIFYM is a flexible eating style. It lets you eat varied foods as long as you hit your daily targets for protein, carbs, and fats."
        },
        {
          "question": "Do I need to hit my macros exactly every day?",
          "answer": "No. Aiming within 5 to 10 grams of each daily goal is fine for progress. Consistency across the week matters more than daily perfection."
        }
      ]
    },
    "es": {
      "eyebrow": "Estándares de Referencia de Salud",
      "title": "Calculadora de Macronutrientes – Distribución Diaria de Macros",
      "intro": "Calculadora de macronutrientes gratuita. Calcula tus objetivos diarios de macronutrientes (proteínas, carbohidratos, grasas en gramos) para definición, mantenimiento o volumen según tu TDEE y objetivos con cálculos privados en el navegador.",
      "formulaTitle": "Fórmula de Referencia Estándar",
      "formulaDesc": "Calculado utilizando ecuaciones estándar validadas.",
      "formulaCode": "Carbs = (kcal × C%) / 4 | Protein = (kcal × P%) / 4 | Fat = (kcal × F%) / 9",
      "tableTitle": "Densidad Energética de Macronutrientes y Ratios Nutricionales",
      "tableRows": [
        {
          "col1": "Carbohidratos (4 kcal/g)",
          "col2": "Balanced: 40% | Low-Carb: 20% | High-Protein: 35%",
          "col3": "Distribución de ejemplo de fuentes de energía"
        },
        {
          "col1": "Proteínas (4 kcal/g)",
          "col2": "Balanced: 30% | Low-Carb: 40% | High-Protein: 40%",
          "col3": "Distribución de ejemplo de proteínas"
        },
        {
          "col1": "Grasas (9 kcal/g)",
          "col2": "Balanced: 30% | Low-Carb: 40% | High-Protein: 25%",
          "col3": "Distribución de ejemplo de grasas saludables"
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
      "title": "Calculateur de Macronutriments – Répartition des Macros",
      "intro": "Calculateur de macronutriments gratuit. Calculez vos objectifs quotidiens en macronutriments (protéines, glucides, lipides en grammes) pour la sèche, le maintien ou la prise de masse selon votre TDEE avec calculs sur navigateur.",
      "formulaTitle": "Formule de Référence Standard",
      "formulaDesc": "Calculé à l'aide d'équations standards validées.",
      "formulaCode": "Carbs = (kcal × C%) / 4 | Protein = (kcal × P%) / 4 | Fat = (kcal × F%) / 9",
      "tableTitle": "Densité Énergétique des Macronutriments et Ratios Nutritionnels",
      "tableRows": [
        {
          "col1": "Glucides (4 kcal/g)",
          "col2": "Balanced: 40% | Low-Carb: 20% | High-Protein: 35%",
          "col3": "Répartition indicative des sources d'énergie"
        },
        {
          "col1": "Protéines (4 kcal/g)",
          "col2": "Balanced: 30% | Low-Carb: 40% | High-Protein: 40%",
          "col3": "Répartition indicative des protéines"
        },
        {
          "col1": "Lipides (9 kcal/g)",
          "col2": "Balanced: 30% | Low-Carb: 40% | High-Protein: 25%",
          "col3": "Répartition indicative des lipides alimentaires"
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
      "title": "Makronährstoff-Rechner – Tägliche Makroverteilung berechnen",
      "intro": "Kostenloser Makronährstoff-Rechner. Berechnen Sie Ihre optimalen täglichen Makroziele (Proteine, Kohlenhydrate, Fette in Gramm) zum Abnehmen, Halten oder Muskelaufbau basierend auf Ihrem TDEE datenschutzorientiert im Browser.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardmäßig validierten Gleichungen.",
      "formulaCode": "Carbs = (kcal × C%) / 4 | Protein = (kcal × P%) / 4 | Fat = (kcal × F%) / 9",
      "tableTitle": "Makronährstoff-Energiedichte & empfohlene Ernährungsverhältnisse",
      "tableRows": [
        {
          "col1": "Kohlenhydrate (4 kcal/g)",
          "col2": "Balanced: 40% | Low-Carb: 20% | High-Protein: 35%",
          "col3": "Beispielhafte Verteilung von Energiequellen"
        },
        {
          "col1": "Proteine / Eiweiß (4 kcal/g)",
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
      "title": "매크로 영양소 계산기 – 일일 탄단지 영양소 비율 계산",
      "intro": "무료 매크로 영양소 계산기. TDEE 및 피트니스 목표에 따라 다이어트, 체중 유지 또는 근육 증량을 위한 일일 맞춤형 영양소 비율(단백질, 탄수화물, 지방 g)을 브라우저 내에서 정확하게 산출하세요. 세계보건기구(WHO) 기준에 따른 안전한 무료 건강 도구입니다.",
      "formulaTitle": "표준 계산 공식",
      "formulaDesc": "검증된 표준 공식을 사용하여 계산됩니다.",
      "formulaCode": "Carbs = (kcal × C%) / 4 | Protein = (kcal × P%) / 4 | Fat = (kcal × F%) / 9",
      "tableTitle": "영양소별 에너지 밀도 및 다이어트 목표별 영양 비율표",
      "tableRows": [
        {
          "col1": "탄수화물 (4 kcal/g)",
          "col2": "Balanced: 40% | Low-Carb: 20% | High-Protein: 35%",
          "col3": "에너지원의 예시 배분율"
        },
        {
          "col1": "단백질 (4 kcal/g)",
          "col2": "Balanced: 30% | Low-Carb: 40% | High-Protein: 40%",
          "col3": "단백질의 예시 배분율"
        },
        {
          "col1": "지방 (9 kcal/g)",
          "col2": "Balanced: 30% | Low-Carb: 40% | High-Protein: 25%",
          "col3": "지방의 예시 배분율"
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
      "title": "मैक्रो पोषक तत्व कैलकुलेटर – दैनिक मैक्रो अनुपात की गणना",
      "intro": "मुफ़्त मैक्रो कैलकुलेटर। अपने TDEE और फिटनेस लक्ष्यों के आधार पर कटिंग, रखरखाव या मांसपेशियों को बढ़ाने के लिए इष्टतम दैनिक मैक्रोन्यूट्रिएंट लक्ष्यों (प्रोटीन, कार्ब्स, ग्राम में वसा) की गणना करें। मुफ़्त और गोपनीयता-केंद्रित।",
      "formulaTitle": "मानक संदर्भ सूत्र",
      "formulaDesc": "मानक सत्यापित समीकरणों का उपयोग करके गणना की गई।",
      "formulaCode": "Carbs = (kcal × C%) / 4 | Protein = (kcal × P%) / 4 | Fat = (kcal × F%) / 9",
      "tableTitle": "मैक्रोन्यूट्रिएंट ऊर्जा घनत्व और आहार अनुपात तालिका",
      "tableRows": [
        {
          "col1": "कार्बोहाइड्रेट (4 kcal/g)",
          "col2": "Balanced: 40% | Low-Carb: 20% | High-Protein: 35%",
          "col3": "ऊर्जा स्रोतों का उदाहरण आवंटन"
        },
        {
          "col1": "प्रोटीन (4 kcal/g)",
          "col2": "Balanced: 30% | Low-Carb: 40% | High-Protein: 40%",
          "col3": "प्रोटीन का उदाहरण आवंटन"
        },
        {
          "col1": "वसा (9 kcal/g)",
          "col2": "Balanced: 30% | Low-Carb: 40% | High-Protein: 25%",
          "col3": "आहारीय वसा का उदाहरण आवंटन"
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
      "title": "Waist-to-Hip Ratio (WHR) Calculator & Body Proportions Tool",
      "intro": "Evaluate your waist-to-hip proportion using our free WHR screening tool. Aligned with World Health Organization (WHO) reference guidelines, it provides insight into body composition and adipose distribution patterns.",
      "formulaTitle": "WHO Circumference Ratio Equation",
      "formulaDesc": "WHR = Waist Circumference (at narrowest point or navel) / Hip Circumference (at widest point of buttocks)",
      "formulaCode": "WHR = Waist / Hip",
      "tableTitle": "WHO Waist-to-Hip Proportion Reference Categories",
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
          "question": "What is the Waist-to-Hip Ratio (WHR) index?",
          "answer": "This anthropometric screening metric compares waist circumference to hip circumference to evaluate regional adipose distribution and assess central body fat placement."
        },
        {
          "question": "How do you calculate WHR with circumference measurements?",
          "answer": "Divide waist circumference by hip circumference using identical units. For example, an 80 cm waist divided by a 100 cm hip yields a proportion of 0.80."
        },
        {
          "question": "What are the standard WHO health thresholds for men and women?",
          "answer": "World Health Organization (WHO) guidelines define low risk as a ratio below 0.90 for men and below 0.85 for women, reflecting reduced abdominal fat concentration."
        },
        {
          "question": "Why evaluate body proportions alongside Body Mass Index?",
          "answer": "While BMI measures total weight relative to stature, circumference proportions reveal body shape and fat distribution, differentiating between android (apple-shaped) and gynoid (pear-shaped) fat patterns."
        },
        {
          "question": "What is the proper technique for measuring waist and hips?",
          "answer": "Stand relaxed and exhale naturally. Measure your waist midway between the lowest rib and iliac crest (or at navel level). Measure hips horizontally across the widest point of the buttocks."
        }
      ]
    },
    "es": {
      "eyebrow": "Estándares de Referencia de Salud",
      "title": "Calculadora de Relación Cintura-Cadera – Índice WHR de Salud",
      "intro": "Calculadora de relación cintura-cadera (WHR) gratuita. Calcula tu relación cintura-cadera, tipo de forma corporal (manzana vs pera) y clasificación de riesgo cardiovascular de la OMS con cálculos privados en el navegador.",
      "formulaTitle": "Fórmula de Referencia Estándar",
      "formulaDesc": "Calculado utilizando ecuaciones estándar validadas.",
      "formulaCode": "WHR = Waist / Hip",
      "tableTitle": "Umbrales de Riesgo de Salud del Índice Cintura-Cadera (OMS)",
      "tableRows": [
        {
          "col1": "Categoría de Riesgo Bajo",
          "col2": "Men: < 0.90 | Women: < 0.80",
          "col3": "Referencia de distribución de grasa subcutánea"
        },
        {
          "col1": "Categoría de Riesgo Moderado",
          "col2": "Men: 0.90 – 0.99 | Women: 0.80 – 0.84",
          "col3": "Referencia moderada de grasa abdominal central"
        },
        {
          "col1": "Categoría de Riesgo Alto",
          "col2": "Men: ≥ 1.00 | Women: ≥ 0.85",
          "col3": "Mayor distribución de grasa central; contexto adicional"
        }
      ],
      "faqs": [
        {
          "question": "¿Qué es el ratio cintura-cadera (RCC) y cómo funciona la calculadora?",
          "answer": "El ratio cintura-cadera es una medida antropométrica que compara el perímetro de la cintura con el de la cadera, ofreciendo información sobre la distribución de la grasa corporal."
        },
        {
          "question": "¿Cómo calcular el ratio cintura-cadera con la fórmula RCC?",
          "answer": "Divide el perímetro de la cintura entre el de la cadera utilizando la misma unidad (cm o pulgadas). Fórmula: RCC = Cintura / Cadera."
        },
        {
          "question": "¿Cuál es un ratio cintura-cadera saludable para hombres y mujeres según la OMS?",
          "answer": "Según la OMS, un ratio inferior a 0.90 en hombres e inferior a 0.80 en mujeres se considera el estándar de menor riesgo de acumulación de grasa abdominal."
        },
        {
          "question": "¿Por qué el ratio cintura-cadera es un indicador útil junto con el IMC?",
          "answer": "Mientras el IMC evalúa la masa corporal en relación con la altura, el RCC aporta información sobre la distribución de la grasa corporal y la grasa abdominal."
        },
        {
          "question": "¿Cómo medir con precisión la cintura y la cadera para la calculadora RCC?",
          "answer": "Ponte de pie y exhala con normalidad. Mide la cintura horizontalmente en su punto más estrecho (o nivel del ombligo) y la cadera en la parte más prominente de los glúteos."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de Référence de Santé",
      "title": "Calculateur Ratio Taille-Hanche – Indice WHR et Références",
      "intro": "Calculateur du rapport taille/hanches (WHR) gratuit. Calculez votre rapport taille/hanches, votre morphologie (pomme vs poire) et la classification des risques cardiovasculaires selon l'OMS avec calculs sur navigateur.",
      "formulaTitle": "Formule de Référence Standard",
      "formulaDesc": "Calculé à l'aide d'équations standards validées.",
      "formulaCode": "WHR = Waist / Hip",
      "tableTitle": "Seuils de Risque pour la Santé du Ratio Taille-Hanches (OMS)",
      "tableRows": [
        {
          "col1": "Catégorie Risque Faible",
          "col2": "Men: < 0.90 | Women: < 0.80",
          "col3": "Fenêtre de distribution de graisse sous-cutanée"
        },
        {
          "col1": "Catégorie Risque Modéré",
          "col2": "Men: 0.90 – 0.99 | Women: 0.80 – 0.84",
          "col3": "Fenêtre modérée de graisse abdominale centrale"
        },
        {
          "col1": "Catégorie Risque Élevé",
          "col2": "Men: ≥ 1.00 | Women: ≥ 0.85",
          "col3": "Distribution plus élevée de graisse centrale ; contexte additionnel"
        }
      ],
      "faqs": [
        {
          "question": "Qu'est-ce que le rapport taille-hanches (RTH) et comment fonctionne le calculateur ?",
          "answer": "Le rapport taille-hanches compare le tour de taille au tour de hanches pour évaluer la répartition de la graisse corporelle."
        },
        {
          "question": "Comment calculer le rapport taille-hanches avec la formule RTH ?",
          "answer": "Divisez le tour de taille par le tour de hanches en utilisant la même unité (cm ou pouces). Formule : RTH = Tour de taille / Tour de hanches."
        },
        {
          "question": "Quel est un rapport taille-hanches sain pour les hommes et les femmes selon l'OMS ?",
          "answer": "Selon l'OMS, un rapport inférieur à 0,90 pour les hommes et inférieur à 0,80 pour les femmes indique une faible concentration de graisse abdominale."
        },
        {
          "question": "Pourquoi le rapport taille-hanches est-il un bon complément à l'IMC ?",
          "answer": "Alors que l'IMC évalue la masse totale par rapport à la taille, le RTH renseigne sur la répartition des graisses, notamment au niveau abdominal."
        },
        {
          "question": "Comment mesurer avec précision le tour de taille et de hanches ?",
          "answer": "Tenez-vous debout et expirez calmement. Mesurez votre taille au point le plus étroit (ou au niveau du nombril) et vos hanches au point le plus large des fessiers."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "Taille-Hüft-Verhältnis Rechner – WHR-Wert & Referenztabelle",
      "intro": "Kostenloser Taille-Hüft-Verhältnis Rechner (WHR-Rechner). Berechnen Sie Ihr Taille-Hüft-Verhältnis, Ihren Körpertyp (Apfel vs. Birne) und die WHO-Risikoklassifizierung für kardiovaskuläre Gesundheit datenschutzorientiert im Browser.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardmäßig validierten Gleichungen.",
      "formulaCode": "WHR = Waist / Hip",
      "tableTitle": "WHO-Grenzwerte für das Taille-Hüft-Verhältnis (WHR)",
      "tableRows": [
        {
          "col1": "Niedrige Risiko-Kategorie",
          "col2": "Men: < 0.90 | Women: < 0.80",
          "col3": "Referenzbereich für subkutane Fettverteilung"
        },
        {
          "col1": "Moderate Risiko-Kategorie",
          "col2": "Men: 0.90 – 0.99 | Women: 0.80 – 0.84",
          "col3": "Moderater Referenzbereich für zentrales Bauchfett"
        },
        {
          "col1": "Höhere Risiko-Kategorie",
          "col2": "Men: ≥ 1.00 | Women: ≥ 0.85",
          "col3": "Höhere zentrale Fettverteilung; zusätzlicher Screening-Kontext"
        }
      ],
      "faqs": [
        {
          "question": "Was ist das Taille-Hüft-Verhältnis (WHR) und wie funktioniert der Rechner?",
          "answer": "Das Taille-Hüft-Verhältnis (Waist-to-Hip Ratio) setzt den Taillenumfang ins Verhältnis zum Hüftumfang und gibt Aufschluss über die Verteilung des Körperfetts."
        },
        {
          "question": "Wie berechnet man das Taille-Hüft-Verhältnis mit der WHR-Formel?",
          "answer": "Teilen Sie den Taillenumfang durch den Hüftumfang in der gleichen Einheit (cm oder Zoll). Formel: WHR = Taillenumfang / Hüftumfang."
        },
        {
          "question": "Was ist ein gesundes Taille-Hüft-Verhältnis nach WHO-Richtlinien?",
          "answer": "Laut WHO liegt der empfohlene Richtwert für Männer unter 0,90 und für Frauen unter 0,80 für ein geringeres relatives Risiko von Bauchfett."
        },
        {
          "question": "Warum ist das Taille-Hüft-Verhältnis eine sinnvolle Ergänzung zum BMI?",
          "answer": "Während der BMI nur das Gesamtgewicht in Relation zur Körpergröße misst, liefert das WHR wichtige Hinweise auf die Fettverteilung und das Bauchfett."
        },
        {
          "question": "Wie misst man Taillen- und Hüftumfang für den WHR-Rechner exakt?",
          "answer": "Stehend und entspannt ausatmend messen: Die Taille an der schmalsten Stelle (oder Bauchnabelhöhe), die Hüfte an der breitesten Stelle des Gesäßes."
        }
      ]
    },
    "ko": {
      "eyebrow": "건강 참조 표준 지침",
      "title": "허리 엉덩이 비율 계산기 – WHR 수치 및 건강 참조 도구",
      "intro": "무료 허리-엉덩이 둘레 비율 계산기 (WHR Calculator). 허리둘레와 엉덩이둘레 비율(WHR), 체형 유형(사과형 vs 배형) 및 WHO 심혈관 질환 위험 범주를 브라우저 내에서 즉시 산출하세요. 세계보건기구(WHO) 기준에 따른 안전한 무료 건강 도구입니다.",
      "formulaTitle": "표준 계산 공식",
      "formulaDesc": "검증된 표준 공식을 사용하여 계산됩니다.",
      "formulaCode": "WHR = Waist / Hip",
      "tableTitle": "WHO 허리-엉덩이 비율(WHR) 건강 위험 기준표",
      "tableRows": [
        {
          "col1": "낮은 위험군",
          "col2": "Men: < 0.90 | Women: < 0.80",
          "col3": "피하지방 분포 참고 기준"
        },
        {
          "col1": "중간 위험군",
          "col2": "Men: 0.90 – 0.99 | Women: 0.80 – 0.84",
          "col3": "중등도 복부 내장지방 참고 기준"
        },
        {
          "col1": "높은 위험군",
          "col2": "Men: ≥ 1.00 | Women: ≥ 0.85",
          "col3": "높은 중심부 지방 분포 기준; 추가 검토 필요"
        }
      ],
      "faqs": [
        {
          "question": "허리-엉덩이 둘레 비율(WHR)이란 무엇이며 어떻게 측정되나요?",
          "answer": "허리-엉덩이 비율(WHR)은 허리둘레와 엉덩이둘레를 비교하여 복부 지방의 분포 상태를 파악하는 신체 계측 지표입니다."
        },
        {
          "question": "WHR 공식을 사용하여 허리-엉덩이 비율을 어떻게 계산하나요?",
          "answer": "동일한 단위(cm 또는 인치)를 기준으로 허리둘레를 엉덩이둘레로 나눕니다. 공식: WHR = 허리둘레 / 엉덩이둘레."
        },
        {
          "question": "WHO 기준 성인 남녀의 건강한 허리-엉덩이 비율 기준은 얼마인가요?",
          "answer": "세계보건기구(WHO) 기준에 따르면 남성은 0.90 미만, 여성은 0.80 미만일 때 상대적으로 복부 비만 위험이 낮은 정상 범위로 평가됩니다."
        },
        {
          "question": "WHR이 BMI와 함께 유용한 건강 지표로 쓰이는 이유는 무엇인가요?",
          "answer": "BMI는 신장 대비 총 체중을 측정하지만, WHR은 지방이 복부에 집중되어 있는지 체지방 분포 형태를 추가적으로 파악할 수 있게 해줍니다."
        },
        {
          "question": "허리와 엉덩이 둘레를 정확하게 측정하는 방법은 무엇인가요?",
          "answer": "편안하게 서서 숨을 내쉰 후, 허리는 가장 잘록한 부위(또는 배꼽 높이)에서, 엉덩이는 가장 돌출된 부위에서 수평으로 줄자를 둘러 측정합니다."
        }
      ]
    },
    "hi": {
      "eyebrow": "स्वास्थ्य संदर्भ मानक",
      "title": "कमर से कूल्हे के अनुपात का कैलकुलेटर – WHR संदर्भ टूल",
      "intro": "मुफ़्त कमर-से-कूल्हे का अनुपात कैलकुलेटर (WHR Calculator)। अपने कमर-से-कूल्हे के अनुपात, शरीर के आकार के प्रकार (सेब बनाम नाशपाती) और डब्ल्यूएचओ हृदय स्वास्थ्य जोखिम वर्गीकरण की गणना करें। मुफ़्त और गोपनीयता-केंद्रित।",
      "formulaTitle": "मानक संदर्भ सूत्र",
      "formulaDesc": "मानक सत्यापित समीकरणों का उपयोग करके गणना की गई।",
      "formulaCode": "WHR = Waist / Hip",
      "tableTitle": "डब्ल्यूएचओ कमर से कूल्हे के अनुपात (WHR) स्वास्थ्य जोखिम सीमा",
      "tableRows": [
        {
          "col1": "निम्न जोखिम श्रेणी",
          "col2": "Men: < 0.90 | Women: < 0.80",
          "col3": "उपचर्म वसा वितरण संदर्भ सीमा"
        },
        {
          "col1": "मध्यम जोखिम श्रेणी",
          "col2": "Men: 0.90 – 0.99 | Women: 0.80 – 0.84",
          "col3": "मध्यम पेट की वसा संदर्भ सीमा"
        },
        {
          "col1": "उच्च जोखिम श्रेणी",
          "col2": "Men: ≥ 1.00 | Women: ≥ 0.85",
          "col3": "उच्च केंद्रीय वसा वितरण संदर्भ सीमा"
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
      "title": "Body Surface Area Calculator — Mosteller & Du Bois BSA",
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
          "answer": "Body Surface Area (BSA) is the measured or calculated surface of a human body expressed in square meters (m²). In physiological research and clinical assessment, BSA is widely utilized to normalize metabolic rates, cardiac index, and renal clearance across individuals of differing statures."
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
      "title": "Calculadora de Superficie Corporal – Ecuaciones BSA",
      "intro": "Calculadora de superficie corporal (BSA) gratuita. Calcula la superficie corporal total en metros cuadrados (m²) utilizando las ecuaciones publicadas de Mosteller, DuBois, Haycock y Boyd con cálculos privados en el navegador.",
      "formulaTitle": "Fórmula de Referencia Estándar",
      "formulaDesc": "Calculado utilizando ecuaciones estándar validadas.",
      "formulaCode": "BSA (m²) = √ [ (Height cm × Weight kg) / 3600 ]",
      "tableTitle": "Rangos de Referencia Poblacionales de Superficie Corporal (m²)",
      "tableRows": [
        {
          "col1": "Lactantes (0–12 meses)",
          "col2": "0.25 m² – 0.35 m²",
          "col3": "Rango de referencia Infant population rango de referencia"
        },
        {
          "col1": "Niños (1–12 años)",
          "col2": "0.50 m² – 1.07 m²",
          "col3": "Rango de referencia Child population rango de referencia"
        },
        {
          "col1": "Promedio Mujeres Adultas",
          "col2": "1.60 m²",
          "col3": "Promedio poblacional en mujeres adultas"
        },
        {
          "col1": "Promedio Hombres Adultos",
          "col2": "1.90 m²",
          "col3": "Promedio poblacional en hombres adultos"
        }
      ],
      "faqs": [
        {
          "question": "¿Qué es el área de superficie corporal (BSA)?",
          "answer": "El área de superficie corporal es un valor estimado a partir de la altura y el peso. Se utiliza como referencia en protocolos de investigación, pero esta herramienta no ofrece dosificación de medicamentos ni recomendaciones clínicas."
        },
        {
          "question": "¿Cómo se calcula el BSA con la fórmula de Mosteller?",
          "answer": "La fórmula de Mosteller multiplica la altura en cm por el peso en kg, lo divide entre 3600 y extrae la raíz cuadrada: BSA = √(Altura × Peso / 3600)."
        },
        {
          "question": "¿Cuál es el área de superficie corporal promedio en adultos?",
          "answer": "El promedio de superficie corporal estimado es de aproximadamente 1.60 m² para mujeres adultas y 1.90 m² para hombres adultos."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de Référence de Santé",
      "title": "Calculateur de Surface Corporelle – Formules BSA",
      "intro": "Calculateur de surface corporelle (BSA) gratuit. Calculez la surface corporelle totale en mètres carrés (m²) à l'aide des équations publiées de Mosteller, DuBois, Haycock et Boyd avec calculs sur navigateur.",
      "formulaTitle": "Formule de Référence Standard",
      "formulaDesc": "Calculé à l'aide d'équations standards validées.",
      "formulaCode": "BSA (m²) = √ [ (Height cm × Weight kg) / 3600 ]",
      "tableTitle": "Plages de Référence de la Surface Corporelle Adulte (m²)",
      "tableRows": [
        {
          "col1": "Nourrissons (0–12 mois)",
          "col2": "0.25 m² – 0.35 m²",
          "col3": "Plage de référence Infant population plage de référence"
        },
        {
          "col1": "Enfants (1–12 ans)",
          "col2": "0.50 m² – 1.07 m²",
          "col3": "Plage de référence Child population plage de référence"
        },
        {
          "col1": "Moyenne Femmes Adultes",
          "col2": "1.60 m²",
          "col3": "Moyenne de la population féminine adulte"
        },
        {
          "col1": "Moyenne Hommes Adultes",
          "col2": "1.90 m²",
          "col3": "Moyenne de la population masculine adulte"
        }
      ],
      "faqs": [
        {
          "question": "Qu'est-ce que la surface corporelle (BSA) ?",
          "answer": "La surface corporelle (BSA) est une estimation calculée à partir de la taille et du poids. Elle sert de repère dans la recherche, mais ce calculateur ne fournit aucun dosage médicamenteux ni prescription."
        },
        {
          "question": "Comment la surface corporelle est-elle calculée avec l'équation de Mosteller ?",
          "answer": "L'équation de Mosteller multiplie la taille en cm par le poids en kg, divise par 3600 et en extrait la racine carrée : BSA = √(Taille × Poids / 3600)."
        },
        {
          "question": "Quelle est la surface corporelle moyenne chez les adultes ?",
          "answer": "La surface corporelle moyenne estimée est d'environ 1,60 m² pour les femmes adultes et de 1,90 m² pour les hommes adultes."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "Körperoberflächen-Rechner – KOF / BSA Formeln nach Mosteller",
      "intro": "Kostenloser Körperoberflächen-Rechner (BSA-Rechner). Berechnen Sie die gesamte Körperoberfläche in Quadratmetern (m²) mit den publizierten Formeln nach Mosteller, DuBois, Haycock und Boyd datenschutzorientiert im Browser.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardmäßig validierten Gleichungen.",
      "formulaCode": "BSA (m²) = √ [ (Height cm × Weight kg) / 3600 ]",
      "tableTitle": "Körperoberfläche (m²) Referenzbereiche für Erwachsene & Populationen",
      "tableRows": [
        {
          "col1": "Säuglinge (0–12 Monate)",
          "col2": "0.25 m² – 0.35 m²",
          "col3": "Referenzbereich Infant population Referenzbereich"
        },
        {
          "col1": "Kinder (1–12 Jahre)",
          "col2": "0.50 m² – 1.07 m²",
          "col3": "Referenzbereich Child population Referenzbereich"
        },
        {
          "col1": "Erwachsene Frauen (Durchschnitt)",
          "col2": "1.60 m²",
          "col3": "Durchschnitt bei erwachsenen Frauen"
        },
        {
          "col1": "Erwachsene Männer (Durchschnitt)",
          "col2": "1.90 m²",
          "col3": "Durchschnitt bei erwachsenen Männern"
        }
      ],
      "faqs": [
        {
          "question": "Was ist die Körperoberfläche (BSA)?",
          "answer": "Die Körperoberfläche (Body Surface Area) ist ein Schätzwert, der aus Größe und Gewicht berechnet wird. Er dient als Forschungsorientierung, liefert jedoch keine Medikamentendosierungen oder Behandlungsempfehlungen."
        },
        {
          "question": "Wie wird die Körperoberfläche mit der Mosteller-Formel berechnet?",
          "answer": "Die Mosteller-Formel multipliziert Größe in cm mit Gewicht in kg, teilt durch 3600 und zieht die Quadratwurzel: BSA = √(Größe × Gewicht / 3600)."
        },
        {
          "question": "Was ist die durchschnittliche Körperoberfläche von Erwachsenen?",
          "answer": "Die durchschnittliche geschätzte Körperoberfläche beträgt etwa 1,60 m² bei erwachsenen Frauen und 1,90 m² bei erwachsenen Männern."
        }
      ]
    },
    "ko": {
      "eyebrow": "건강 참조 표준 지침",
      "title": "체표면적(BSA) 계산기 – Mosteller 및 Du Bois 계산 공식",
      "intro": "무료 체표면적 계산기 (BSA Calculator). Mosteller, DuBois, Haycock 및 Boyd 공식을 사용하여 제곱미터(m²) 단위의 전체 신체 표면적을 안전하게 산출하세요. 개인정보 수집 없는 100% 무료 도구. 세계보건기구(WHO) 기준에 따른 안전한 무료 건강 도구입니다.",
      "formulaTitle": "표준 계산 공식",
      "formulaDesc": "검증된 표준 공식을 사용하여 계산됩니다.",
      "formulaCode": "BSA (m²) = √ [ (Height cm × Weight kg) / 3600 ]",
      "tableTitle": "체표면적(BSA, m²) 연령별 및 성인 평균 참조 범위",
      "tableRows": [
        {
          "col1": "영아 (0–12개월)",
          "col2": "0.25 m² – 0.35 m²",
          "col3": "참조 범위 영아 인구 참고 기준"
        },
        {
          "col1": "소아/어린이 (1–12세)",
          "col2": "0.50 m² – 1.07 m²",
          "col3": "참조 범위 소아 인구 참고 기준"
        },
        {
          "col1": "성인 여성 평균",
          "col2": "1.60 m²",
          "col3": "성인 여성 인구 표준 평균"
        },
        {
          "col1": "성인 남성 평균",
          "col2": "1.90 m²",
          "col3": "성인 남성 인구 표준 평균"
        }
      ],
      "faqs": [
        {
          "question": "체표면적(BSA)이란 무엇인가요?",
          "answer": "체표면적(Body Surface Area)은 키와 체중을 바탕으로 산출된 인체 표면적의 추정치입니다. 본 계산기는 교육적 참고 지표이며 약물 용량이나 의료적 처방을 제공하지 않습니다."
        },
        {
          "question": "모스텔러(Mosteller) 공식을 사용하여 체표면적을 어떻게 계산하나요?",
          "answer": "키(cm)와 체중(kg)을 곱한 뒤 3600으로 나누고 제곱근을 취합니다: BSA = √(신장 × 체중 / 3600)."
        },
        {
          "question": "성인의 평균 체표면적은 어느 정도인가요?",
          "answer": "성인 여성의 평균 체표면적은 약 1.60 m², 성인 남성의 평균 체표면적은 약 1.90 m² 내외입니다."
        }
      ]
    },
    "hi": {
      "eyebrow": "स्वास्थ्य संदर्भ मानक",
      "title": "बॉडी सरफेस एरिया (BSA) कैलकुलेटर – मोस्टेलर सूत्र",
      "intro": "मुफ़्त बॉडी सरफेस एरिया कैलकुलेटर (BSA Calculator)। मोस्टेलर, डुबॉइस, हेकॉक और बॉयड प्रकाशित समीकरणों का उपयोग करके वर्ग मीटर (m²) में कुल शरीर के सतह क्षेत्र की गणना करें। मुफ़्त और गोपनीयता-केंद्रित।",
      "formulaTitle": "मानक संदर्भ सूत्र",
      "formulaDesc": "मानक सत्यापित समीकरणों का उपयोग करके गणना की गई।",
      "formulaCode": "BSA (m²) = √ [ (Height cm × Weight kg) / 3600 ]",
      "tableTitle": "वयस्क और जनसंख्या के लिए शरीर की सतह का क्षेत्रफल (m²) संदर्भ सीमा",
      "tableRows": [
        {
          "col1": "शिशु (0–12 महीने)",
          "col2": "0.25 m² – 0.35 m²",
          "col3": "संदर्भ सीमा शिशु जनसंख्या संदर्भ सीमा"
        },
        {
          "col1": "बच्चे (1–12 वर्ष)",
          "col2": "0.50 m² – 1.07 m²",
          "col3": "संदर्भ सीमा बाल जनसंख्या संदर्भ सीमा"
        },
        {
          "col1": "वयस्क महिला औसत",
          "col2": "1.60 m²",
          "col3": "वयस्क महिला जनसंख्या का मानक औसत"
        },
        {
          "col1": "वयस्क पुरुष औसत",
          "col2": "1.90 m²",
          "col3": "वयस्क पुरुष जनसंख्या का मानक औसत"
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
      "eyebrow": "Cardiovascular Training Protocol",
      "title": "Target Heart Rate Zones Calculator – 5 Exercise Training Zones",
      "intro": "Identify your five cardiovascular intensity zones to optimize endurance, recovery, and metabolic conditioning. Using your age and resting pulse, this tool provides clear target boundaries so you can pace warm-ups, aerobic foundation building, and sprint intervals with precision.",
      "formulaTitle": "Cardiorespiratory Training Intensity Equation",
      "formulaDesc": "Max Heart Rate = 220 - Age. Heart Rate Reserve (HRR) = Max HR - Resting Pulse. Target Pulse = Resting Pulse + [HRR × Intensity %].",
      "formulaCode": "Target HR = RHR + [(220 - Age - RHR) × % Intensity]",
      "tableTitle": "5-Zone Cardiovascular Training Intensity Matrix",
      "tableRows": [
        {
          "col1": "Zone 1 (50% - 60% HRR)",
          "col2": "Active Recovery / Warmup",
          "col3": "Promotes blood circulation & passive recovery"
        },
        {
          "col1": "Zone 2 (60% - 70% HRR)",
          "col2": "Aerobic Base Conditioning",
          "col3": "Optimizes lipid oxidation and builds baseline endurance"
        },
        {
          "col1": "Zone 3 (70% - 80% HRR)",
          "col2": "Aerobic Stamina & Fitness",
          "col3": "Improves cardiovascular efficiency & sustained pacing"
        },
        {
          "col1": "Zone 4 (80% - 90% HRR)",
          "col2": "Anaerobic / Lactate Threshold",
          "col3": "Increases high-intensity exercise tolerance and power output"
        },
        {
          "col1": "Zone 5 (90% - 100% HRR)",
          "col2": "Maximal VO2 Peak Interval",
          "col3": "Neuromuscular speed, sprint stamina & peak conditioning"
        }
      ],
      "faqs": [
        {
          "question": "How do target cardiovascular intensity zones work?",
          "answer": "These training tiers divide exercise effort into five distinct physiological bands. Training within specific ranges develops targeted adaptations, from efficient fat oxidation and capillary growth to lactate tolerance and neuromuscular sprint speed."
        },
        {
          "question": "How do you calculate your exercise pulse range?",
          "answer": "First, estimate your maximum pulse by subtracting your age from 220. Next, subtract your resting pulse to find your heart rate reserve. Finally, multiply by your target intensity percentage and add back your resting pulse."
        },
        {
          "question": "Why should resting pulse be considered alongside maximum heart rate?",
          "answer": "Resting pulse indicates your baseline stroke volume and cardiovascular efficiency. Factoring it into calculations produces individualized targets rather than generic population estimates."
        },
        {
          "question": "Which training zone builds optimal aerobic stamina?",
          "answer": "Zone 2 (60% to 70% of heart rate reserve) is the primary range for building mitochondrial density and aerobic endurance, allowing sustained energy output with low systemic fatigue."
        },
        {
          "question": "What is the best way to record baseline resting pulse?",
          "answer": "Check your pulse for 60 seconds first thing in the morning while resting in bed. Measure it before you get up, drink coffee, or start moving around."
        }
      ]
    },
    "es": {
      "eyebrow": "Estándares de Referencia de Salud",
      "title": "Calculadora de Zonas de Frecuencia Cardíaca – Fórmula Karvonen",
      "intro": "Calculadora de zonas de frecuencia cardíaca gratuita. Calcula tus zonas objetivo de entrenamiento (Quema de grasa, Aeróbica, Anaeróbica, Pico) según edad, frecuencia en reposo y frecuencia máxima con cálculos privados en el navegador.",
      "formulaTitle": "Fórmula de Referencia Estándar",
      "formulaDesc": "Calculado utilizando ecuaciones estándar validadas.",
      "formulaCode": "Target HR = RHR + [(220 - Age - RHR) × % Intensity]",
      "tableTitle": "Matriz de Intensidad de Frecuencia Cardíaca en 5 Zonas (Karvonen)",
      "tableRows": [
        {
          "col1": "Zona 1 (50% - 60% HRR)",
          "col2": "Active Recovery / Warmup",
          "col3": "Favorece la circulación sanguínea y recuperación pasiva"
        },
        {
          "col1": "Zona 2 (60% - 70% HRR)",
          "col2": "Moderate Aerobic Training",
          "col3": "Base aeróbica y ejercicio de intensidad moderada"
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
          "question": "¿Qué es la calculadora de zonas de frecuencia cardíaca de Karvonen?",
          "answer": "La calculadora de zonas de Karvonen es una herramienta de entrenamiento cardiovascular que estima rangos de intensidad personalizados utilizando la fórmula de Karvonen y la frecuencia cardíaca de reserva (HRR)."
        },
        {
          "question": "¿Cómo se calcula la frecuencia cardíaca objetivo con la fórmula de Karvonen?",
          "answer": "Para aplicar la fórmula de Karvonen: 1) Resta tu edad a 220 para estimar la FC máxima. 2) Resta tu FC en reposo a la FC máxima para obtener la reserva cardíaca (HRR). 3) Multiplica la HRR por el porcentaje deseado (ej. 60%-70%). 4) Suma de nuevo tu FC en reposo para obtener las pulsaciones por minuto objetivo."
        },
        {
          "question": "¿Por qué la fórmula de Karvonen incluye la frecuencia cardíaca en reposo?",
          "answer": "Las fórmulas estándar (220 - edad) proporcionan estimaciones generales, mientras que Karvonen personaliza el cálculo al considerar la frecuencia cardíaca en reposo (RHR), reflejando tu nivel de condición física."
        },
        {
          "question": "¿Qué zona de frecuencia cardíaca corresponde al entrenamiento aeróbico base?",
          "answer": "La Zona 2 de Karvonen (60% al 70% de la reserva cardíaca) se asocia habitualmente con el desarrollo aeróbico base y el entrenamiento de resistencia moderada."
        },
        {
          "question": "¿Cómo medir la frecuencia cardíaca en reposo (RHR) para esta calculadora?",
          "answer": "Mide tu pulso durante 60 segundos justo al despertar por la mañana, mientras descansas relajado en la cama antes de levantarte o tomar cafeína."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de Référence de Santé",
      "title": "Calculateur de Zones de Fréquence Cardiaque – Formule Karvonen",
      "intro": "Calculateur de zones de fréquence cardiaque gratuit. Calculez vos zones cibles d'entraînement (Brûle-graisse, Aérobie, Anaérobie, Maximale) selon l'âge, le pouls au repos et la fréquence maximale avec calculs sur navigateur.",
      "formulaTitle": "Formule de Référence Standard",
      "formulaDesc": "Calculé à l'aide d'équations standards validées.",
      "formulaCode": "Target HR = RHR + [(220 - Age - RHR) × % Intensity]",
      "tableTitle": "Matrice d'Intensité de Fréquence Cardiaque en 5 Zones (Karvonen)",
      "tableRows": [
        {
          "col1": "Zone 1 (50% - 60% HRR)",
          "col2": "Active Recovery / Warmup",
          "col3": "Favorise la circulation sanguine et la récupération passive"
        },
        {
          "col1": "Zone 2 (60% - 70% HRR)",
          "col2": "Moderate Aerobic Training",
          "col3": "Base aérobie et exercice d'intensité modérée"
        },
        {
          "col1": "Zone 3 (70% - 80% HRR)",
          "col2": "Aerobic Endurance / Fitness",
          "col3": "Améliore l'efficacité cardiovasculaire et l'endurance"
        },
        {
          "col1": "Zone 4 (80% - 90% HRR)",
          "col2": "Anaerobic / Lactate Threshold",
          "col3": "Augmente la tolérance à l'exercice de haute intensité"
        },
        {
          "col1": "Zone 5 (90% - 100% HRR)",
          "col2": "Maximal VO2 Max Peak Power",
          "col3": "Vitesse neuromusculaire et conditionnement au sprint"
        }
      ],
      "faqs": [
        {
          "question": "Qu'est-ce que le calculateur de zones de fréquence cardiaque de Karvonen ?",
          "answer": "Le calculateur de Karvonen est un outil d'entraînement cardiovasculaire qui estime vos zones cibles personnalisées grâce à la formule de Karvonen et la réserve de fréquence cardiaque (HRR)."
        },
        {
          "question": "Comment calculer la fréquence cardiaque cible avec la formule de Karvonen ?",
          "answer": "Pour utiliser la formule de Karvonen : 1) Soustrayez votre âge de 220 pour estimer la FC maximale. 2) Soustrayez la FC au repos de la FC maximale pour trouver la réserve cardiaque (HRR). 3) Multipliez par l'intensité souhaitée (ex. 60 % à 70 %). 4) Ajoutez la FC au repos pour obtenir la fréquence cible en battements par minute."
        },
        {
          "question": "Pourquoi la formule de Karvonen prend-elle en compte la fréquence cardiaque au repos ?",
          "answer": "Contrairement aux formules simples (220 - âge), la formule de Karvonen intègre la fréquence cardiaque au repos (RHR), ce qui permet de mieux refléter votre condition physique individuelle."
        },
        {
          "question": "Quelle zone correspond à l'entraînement aérobie de base ?",
          "answer": "La Zone 2 de Karvonen (60 % à 70 % de la réserve cardiaque) est la zone de référence pour l'endurance fondamentale et le développement aérobie."
        },
        {
          "question": "Comment mesurer sa fréquence cardiaque au repos (RHR) ?",
          "answer": "Prenez votre pouls pendant 60 secondes le matin au réveil, en restant calmement allongé dans votre lit avant de vous lever ou de consommer de la caféine."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "Herzfrequenzzonen-Rechner – Zielherzfrequenz & Karvonen Zonen",
      "intro": "Kostenloser Herzfrequenzzonen-Rechner. Berechnen Sie Ihre Ziel-Trainingszonen (Fettverbrennung, Aerob, Anaerob, Maximal) basierend auf Alter, Ruhepuls und maximaler Herzfrequenz datenschutzorientiert im Browser.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardmäßig validierten Gleichungen.",
      "formulaCode": "Target HR = RHR + [(220 - Age - RHR) × % Intensity]",
      "tableTitle": "Karvonen 5-Zonen-Herzfrequenz-Intensitätsmatrix",
      "tableRows": [
        {
          "col1": "Zone 1 (50% - 60% HRR)",
          "col2": "Active Recovery / Warmup",
          "col3": "Fördert die Durchblutung & passive Regeneration"
        },
        {
          "col1": "Zone 2 (60% - 70% HRR)",
          "col2": "Moderate Aerobic Training",
          "col3": "Für aerobes Basistraining & mäßige Intensität"
        },
        {
          "col1": "Zone 3 (70% - 80% HRR)",
          "col2": "Aerobic Endurance / Fitness",
          "col3": "Verbessert die kardiovaskuläre Effizienz & Ausdauer"
        },
        {
          "col1": "Zone 4 (80% - 90% HRR)",
          "col2": "Anaerobic / Lactate Threshold",
          "col3": "Erhöht die Toleranz für hochintensives Training"
        },
        {
          "col1": "Zone 5 (90% - 100% HRR)",
          "col2": "Maximal VO2 Max Peak Power",
          "col3": "Neuromuskuläre Schnelligkeit & Sprint-Konditionierung"
        }
      ],
      "faqs": [
        {
          "question": "Was ist der Karvonen-Herzfrequenzzonen-Rechner?",
          "answer": "Der Karvonen-Herzfrequenzzonen-Rechner ist ein Trainingswerkzeug, das individuelle Trainingszonen anhand der Karvonen-Formel und der Herzfrequenzreserve (HRR) ermittelt."
        },
        {
          "question": "Wie berechnet man die Zielherzfrequenz mit der Karvonen-Formel?",
          "answer": "Vorgehensweise: 1) 220 minus Alter ergibt die maximale Herzfrequenz. 2) Maximalpuls minus Ruhepuls ergibt die Herzfrequenzreserve (HRR). 3) HRR mit der gewünschten Intensität multiplizieren (z. B. 60 % bis 70 %). 4) Ruhepuls addieren, um die Zielherzfrequenz in Schlägen pro Minute zu erhalten."
        },
        {
          "question": "Warum berücksichtigt die Karvonen-Formel den Ruhepuls?",
          "answer": "Einfache Formeln (220 - Alter) bieten nur grobe Durchschnittswerte. Durch die Einbeziehung des Ruhepulses (RHR) passt Karvonen die Trainingszonen an das persönliche Fitnessniveau an."
        },
        {
          "question": "Welche Herzfrequenzzone ist für das Grundlagenausdauertraining optimal?",
          "answer": "Die Karvonen-Zone 2 (60 % bis 70 % der Herzfrequenzreserve) wird typischerweise für das aerobe Grundlagentraining und moderate Ausdauereinheiten genutzt."
        },
        {
          "question": "Wie messe ich meinen Ruhepuls (RHR) für den Rechner?",
          "answer": "Messen Sie Ihren Puls 60 Sekunden lang morgens direkt nach dem Aufwachen, während Sie noch entspannt im Bett liegen, vor dem Aufstehen oder Kaffeetrinken."
        }
      ]
    },
    "ko": {
      "eyebrow": "건강 참조 표준 지침",
      "title": "심박수 구간 계산기 – Karvonen 목표 심박수 측정",
      "intro": "무료 심박수 구간 계산기. 연령, 안정 시 심박수 및 최대 심박수를 바탕으로 목표 유산소 운동 심박수 구간(지방 연소, 심폐 지구력, 무산소 구간)을 브라우저 내에서 정밀하게 산출하세요. 100% 무료 도구입니다. 세계보건기구(WHO) 기준에 따른 안전한 무료 건강 도구입니다.",
      "formulaTitle": "표준 계산 공식",
      "formulaDesc": "검증된 표준 공식을 사용하여 계산됩니다.",
      "formulaCode": "Target HR = RHR + [(220 - Age - RHR) × % Intensity]",
      "tableTitle": "카르보넨 공식 5단계 심박수 운동 강도 구간표",
      "tableRows": [
        {
          "col1": "1구간 (50% - 60% HRR)",
          "col2": "Active Recovery / Warmup",
          "col3": "혈액 순환 촉진 및 수동적 회복 지원"
        },
        {
          "col1": "2구간 (60% - 70% HRR)",
          "col2": "Moderate Aerobic Training",
          "col3": "유산소 기초 훈련 및 중강도 운동에 주로 활용"
        },
        {
          "col1": "3구간 (70% - 80% HRR)",
          "col2": "Aerobic Endurance / Fitness",
          "col3": "심혈관 효율성 및 지구력 향상"
        },
        {
          "col1": "4구간 (80% - 90% HRR)",
          "col2": "Anaerobic / Lactate Threshold",
          "col3": "고강도 운동 지구력 향상"
        },
        {
          "col1": "5구간 (90% - 100% HRR)",
          "col2": "Maximal VO2 Max Peak Power",
          "col3": "신경근 속도 및 최고 전력질주 훈련"
        }
      ],
      "faqs": [
        {
          "question": "카르보넨 심박수 구간 계산기란 무엇인가요?",
          "answer": "카르보넨 심박수 계산기는 마르티 카르보넨(Martti Karvonen) 박사의 공식을 기반으로 심박수 예비량(HRR)을 활용해 개인 맞춤형 유산소 운동 강도 구간을 산출하는 도구입니다."
        },
        {
          "question": "카르보넨 공식으로 목표 심박수를 어떻게 계산하나요?",
          "answer": "1) 220에서 나이를 빼 최대 심박수를 추정합니다. 2) 최대 심박수에서 안정시 심박수를 빼 심박수 예비량(HRR)을 구합니다. 3) 목표 운동 강도(예: 60%~70%)를 곱합니다. 4) 안정시 심박수를 다시 더해 목표 심박수(BPM)를 구합니다."
        },
        {
          "question": "카르보넨 공식이 안정시 심박수를 반영하는 이유는 무엇인가요?",
          "answer": "단순한 220-나이 공식과 달리, 개인의 안정시 심박수(RHR)를 반영함으로써 개인별 심폐 체력 수준에 맞춘 정밀한 운동 강도를 제시할 수 있습니다."
        },
        {
          "question": "유산소 기초 체력 향상에 적합한 심박수 구간은 어디인가요?",
          "answer": "카르보넨 2구간(심박수 예비량의 60%~70%)은 유산소 기초 지구력 훈련 및 중강도 유산소 운동에 가장 권장되는 구간입니다."
        },
        {
          "question": "안정시 심박수(RHR)는 어떻게 정확하게 측정하나요?",
          "answer": "아침 기상 직후 침대에서 일어나거나 카페인을 섭취하기 전, 편안하게 누운 상태에서 60초 동안 맥박을 측정하는 것이 가장 정확합니다."
        }
      ]
    },
    "hi": {
      "eyebrow": "स्वास्थ्य संदर्भ मानक",
      "title": "हार्ट रेट ज़ोन कैलकुलेटर – लक्ष्य हृदय गति संदर्भ",
      "intro": "मुफ़्त हृदय गति क्षेत्र कैलकुलेटर। उम्र, विश्राम हृदय गति और अधिकतम हृदय गति के आधार पर लक्षित प्रशिक्षण हृदय गति क्षेत्रों (फैट बर्न, एरोबिक, एनारोबिक, पीक) की गणना करें। मुफ़्त और गोपनीयता-केंद्रित।",
      "formulaTitle": "मानक संदर्भ सूत्र",
      "formulaDesc": "मानक सत्यापित समीकरणों का उपयोग करके गणना की गई।",
      "formulaCode": "Target HR = RHR + [(220 - Age - RHR) × % Intensity]",
      "tableTitle": "कार्वोनेन 5-ज़ोन हृदय गति तीव्रता मैट्रिक्स",
      "tableRows": [
        {
          "col1": "ज़ोन 1 (50% - 60% HRR)",
          "col2": "Active Recovery / Warmup",
          "col3": "रक्त परिसंचरण और निष्क्रिय रिकवरी को बढ़ावा देता है"
        },
        {
          "col1": "ज़ोन 2 (50% - 60% HRR)",
          "col2": "Moderate Aerobic Training",
          "col3": "एरोबिक आधार प्रशिक्षण और मध्यम तीव्रता वाले व्यायाम के लिए"
        },
        {
          "col1": "ज़ोन 3 (70% - 80% HRR)",
          "col2": "Aerobic Endurance / Fitness",
          "col3": "हृदय दक्षता और सहनशक्ति में सुधार"
        },
        {
          "col1": "ज़ोन 4 (80% - 90% HRR)",
          "col2": "Anaerobic / Lactate Threshold",
          "col3": "उच्च तीव्रता व्यायाम सहनशीलता बढ़ाता है"
        },
        {
          "col1": "ज़ोन 5 (90% - 100% HRR)",
          "col2": "Maximal VO2 Max Peak Power",
          "col3": "न्यूरोमस्कुलर गति और स्प्रिंट कंडीशनिंग"
        }
      ],
      "faqs": [
        {
          "question": "कार्वोनेन (Karvonen) हार्ट रेट ज़ोन कैलकुलेटर क्या है?",
          "answer": "कार्वोनेन हार्ट रेट कैलकुलेटर एक कार्डियो प्रशिक्षण उपकरण है जो हार्ट रेट रिजर्व (HRR) का उपयोग करके व्यक्तिगत व्यायाम तीव्रता क्षेत्र निर्धारित करता है।"
        },
        {
          "question": "कार्वोनेन सूत्र से लक्ष्य हृदय गति की गणना कैसे करें?",
          "answer": "1) 220 में से अपनी आयु घटाएं। 2) अधिकतम दर से विश्राम दर (RHR) घटाकर HRR निकालें। 3) वांछित प्रतिशत (60%-70%) से गुणा करें। 4) फिर विश्राम दर जोड़कर लक्ष्य दर प्राप्त करें।"
        },
        {
          "question": "कार्वोनेन सूत्र में विश्राम हृदय गति (RHR) क्यों शामिल की जाती है?",
          "answer": "मानक सूत्र केवल सामान्य औसत बताते हैं, जबकि विश्राम हृदय गति शामिल करने से व्यक्तिगत फिटनेस स्तर के अनुसार सटीक प्रशिक्षण क्षेत्र प्राप्त होता है।"
        },
        {
          "question": "एरोबिक बेस ट्रेनिंग के लिए कौन सा हार्ट रेट ज़ोन सबसे अच्छा है?",
          "answer": "कार्वोनेन ज़ोन 2 (HRR का 60% से 70%) आमतौर पर एरोबिक बेस और मध्यम सहनशक्ति व्यायाम के लिए अनुशंसित है।"
        },
        {
          "question": "कार्वोनेन कैलकुलेटर के लिए विश्राम हृदय गति (RHR) कैसे मापें?",
          "answer": "सुबह सोकर उठने के तुरंत बाद, बिस्तर पर शांत रहते हुए 60 सेकंड तक अपनी नाड़ी मापें।"
        }
      ]
    }
  },
  "karvonen-heart-rate-calculator": {
    "en": {
      "eyebrow": "Cardiovascular Physiology",
      "title": "Karvonen Calculator – Target Heart Rate Zones & HRR",
      "intro": "Determine your personal aerobic and anaerobic training zones using the Heart Rate Reserve (HRR) methodology. By combining your age with your baseline resting pulse, this tool provides customized exertion ranges for fat oxidation, stamina development, and high-intensity interval training.",
      "formulaTitle": "Heart Rate Reserve Equation",
      "formulaDesc": "Target Exertion = [(Max Pulse - Resting Pulse) × % Intensity] + Resting Pulse. Maximum rate is estimated as 220 minus age, with reserve representing the span between baseline rest and peak effort.",
      "formulaCode": "THR = (HRR × Intensity%) + Resting HR",
      "tableTitle": "Karvonen Heart Rate Reserve (HRR) Intensity Matrix",
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
          "col3": "Increases high-intensity exercise tolerance and power output"
        },
        {
          "col1": "Zone 5: VO2 Max Peak",
          "col2": "90% – 100% HRR",
          "col3": "Maximal speed and interval training"
        }
      ],
      "faqs": [
        {
          "question": "How does the Karvonen formula determine target training ranges?",
          "answer": "This physiological model calculates workout zones by subtracting resting pulse from maximum pulse to determine Heart Rate Reserve (HRR). It then scales your workout intensity to that individual baseline rather than relying on population averages alone."
        },
        {
          "question": "Why is this method more accurate than simple age-based formulas?",
          "answer": "Traditional 220-minus-age formulas ignore individual aerobic conditioning. Incorporating baseline resting pulse rewards higher cardiovascular fitness with customized zones that reflect true physiological capacity."
        }
      ]
    },
    "es": {
      "eyebrow": "Estándares de Referencia de Salud",
      "title": "Calculadora Karvonen – Reserva de Frecuencia Cardíaca HRR",
      "intro": "Calculadora de frecuencia cardíaca Karvonen gratuita. Calcula las zonas de frecuencia cardíaca objetivo (THR) utilizando la fórmula de Karvonen (método de Reserva de Frecuencia Cardíaca %) según edad y frecuencia en reposo (BPM) con cálculos privados en el navegador.",
      "formulaTitle": "Fórmula de Referencia Estándar",
      "formulaDesc": "Calculado utilizando ecuaciones estándar validadas.",
      "formulaCode": "THR = (HRR × Intensity%) + Resting HR",
      "tableTitle": "Desglose de Zonas de Entrenamiento de Frecuencia Cardíaca de Karvonen",
      "tableRows": [
        {
          "col1": "Zona 1: Recuperación Activa",
          "col2": "50% – 60% HRR",
          "col3": "Calentamiento, enfriamiento y recuperación activa"
        },
        {
          "col1": "Zona 2: Resistencia y Quema de Grasa",
          "col2": "60% – 70% HRR",
          "col3": "Zona óptima para quema de grasa y base aeróbica"
        },
        {
          "col1": "Zona 3: Aptitud Aeróbica",
          "col2": "70% – 80% HRR",
          "col3": "Mejora la capacidad cardiovascular y la resistencia"
        },
        {
          "col1": "Zona 4: Umbral Anaeróbico",
          "col2": "80% – 90% HRR",
          "col3": "Mejora el rendimiento de alta intensidad y el umbral de lactato"
        },
        {
          "col1": "Zona 5: Pico VO2 Máx",
          "col2": "90% – 100% HRR",
          "col3": "Velocidad máxima y entrenamiento a intervalos"
        }
      ],
      "faqs": [
        {
          "question": "¿Qué es la fórmula de Karvonen?",
          "answer": "La fórmula de Karvonen es un método matemático para determinar la frecuencia cardíaca objetivo considerando tanto la frecuencia cardíaca máxima como la frecuencia cardíaca en reposo (HRR)."
        },
        {
          "question": "¿Por qué el método Karvonen es más preciso que la fórmula tradicional 220 menos edad?",
          "answer": "La fórmula tradicional solo estima un límite general, mientras que Karvonen incluye tu frecuencia cardíaca en reposo, reflejando de forma personalizada tu condición cardiovascular actual."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de Référence de Santé",
      "title": "Calculateur Karvonen – Réserve Cardiaque HRR & Zones de Forme",
      "intro": "Calculateur de fréquence cardiaque Karvonen gratuit. Calculez les zones cibles (THR) avec la formule de Karvonen (méthode de Réserve de Fréquence Cardiaque %) selon l'âge et le pouls au repos avec calculs sur navigateur.",
      "formulaTitle": "Formule de Référence Standard",
      "formulaDesc": "Calculé à l'aide d'équations standards validées.",
      "formulaCode": "THR = (HRR × Intensity%) + Resting HR",
      "tableTitle": "Répartition des Zones d'Entraînement Cardiaque selon Karvonen",
      "tableRows": [
        {
          "col1": "Zone 1 : Récupération Active",
          "col2": "50% – 60% HRR",
          "col3": "Échauffement, retour au calme et récupération active"
        },
        {
          "col1": "Zone 2 : Endurance & Perte de Gras",
          "col2": "60% – 70% HRR",
          "col3": "Zone optimale pour la combustion des graisses et l'endurance"
        },
        {
          "col1": "Zone 3 : Forme Aérobie",
          "col2": "70% – 80% HRR",
          "col3": "Améliore la capacité cardiovasculaire et l'endurance"
        },
        {
          "col1": "Zone 4 : Seuil Anaérobie",
          "col2": "80% – 90% HRR",
          "col3": "Augmente les performances à haute intensité et le seuil de lactate"
        },
        {
          "col1": "Zone 5 : Pic VO2 Max",
          "col2": "90% – 100% HRR",
          "col3": "Vitesse maximale et entraînement par intervalles"
        }
      ],
      "faqs": [
        {
          "question": "Qu'est-ce que la formule de Karvonen ?",
          "answer": "La formule de Karvonen est une équation mathématique permettant d'établir la fréquence cardiaque cible d'entraînement en intégrant la fréquence cardiaque de réserve (HRR)."
        },
        {
          "question": "Pourquoi la méthode de Karvonen est-elle plus précise que la règle 220 - âge ?",
          "answer": "La formule standard ne donne qu'une moyenne statistique, tandis que Karvonen prend en compte votre rythme cardiaque au repos, reflétant ainsi votre niveau de forme réel."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "Karvonen Herzfrequenz-Rechner – Herzfrequenzreserve HRR Zonen",
      "intro": "Kostenloser Karvonen-Herzfrequenz-Rechner. Berechnen Sie Ihre Zielherzfrequenz (THR) mit der Karvonen-Formel (Herzfrequenzreserve-%-Methode) nach Alter und Ruhepuls (BPM) datenschutzorientiert im Browser.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardmäßig validierten Gleichungen.",
      "formulaCode": "THR = (HRR × Intensity%) + Resting HR",
      "tableTitle": "Karvonen-Herzfrequenz-Trainingszonen im Überblick",
      "tableRows": [
        {
          "col1": "Zone 1: Aktive Erholung",
          "col2": "50% – 60% HRR",
          "col3": "Aufwärmen, Abkühlen und aktive Erholung"
        },
        {
          "col1": "Zone 2: Ausdauer & Fettverbrennung",
          "col2": "60% – 70% HRR",
          "col3": "Optimale Zone für Fettverbrennung und aerobe Basis"
        },
        {
          "col1": "Zone 3: Aerobe Fitness",
          "col2": "70% – 80% HRR",
          "col3": "Verbessert die kardiovaskuläre Kapazität und Ausdauer"
        },
        {
          "col1": "Zone 4: Anaerobe Schwelle",
          "col2": "80% – 90% HRR",
          "col3": "Steigert die Hochleistungsfähigkeit und die Laktatschwelle"
        },
        {
          "col1": "Zone 5: VO2 Max Spitzenbereich",
          "col2": "90% – 100% HRR",
          "col3": "Maximalgeschwindigkeit und Intervalltraining"
        }
      ],
      "faqs": [
        {
          "question": "Was ist die Karvonen-Formel?",
          "answer": "Die Karvonen-Formel ist eine bewährte Berechnungsmethode für die Trainings-Zielherzfrequenz, die neben dem Maximalpuls auch den Ruhepuls einbezieht."
        },
        {
          "question": "Warum ist die Karvonen-Methode genauer als die Standardformel 220 minus Alter?",
          "answer": "Standardformeln liefern nur pauschale Schätzwerte. Karvonen bezieht den individuellen Ruhepuls mit ein und passt die Trainingszonen an Ihre persönliche Fitness an."
        }
      ]
    },
    "ko": {
      "eyebrow": "건강 참조 표준 지침",
      "title": "Karvonen 심박수 계산기 – 심박 예비능(HRR) 측정",
      "intro": "무료 카보넨(Karvonen) 심박수 계산기. 나이와 안정 시 심박수(BPM)를 활용하여 심박수 예비능(HRR) 공식으로 목표 운동 심박수 트레이닝 구간을 브라우저 내에서 안전하게 계산하세요. 100% 무료 도구. 세계보건기구(WHO) 기준에 따른 안전한 무료 건강 도구입니다.",
      "formulaTitle": "표준 계산 공식",
      "formulaDesc": "검증된 표준 공식을 사용하여 계산됩니다.",
      "formulaCode": "THR = (HRR × Intensity%) + Resting HR",
      "tableTitle": "카르보넨 예비 심박수(HRR) 기반 트레이닝 구간 분석표",
      "tableRows": [
        {
          "col1": "1구간: 능동적 회복",
          "col2": "50% – 60% HRR",
          "col3": "웜업, 쿨다운 및 적극적 회복"
        },
        {
          "col1": "2구간: 지구력 및 지방 연소",
          "col2": "60% – 70% HRR",
          "col3": "지속 가능한 지방 연소 및 유산소 기초 형성을 위한 최적 구간"
        },
        {
          "col1": "3구간: 유산소 피트니스",
          "col2": "70% – 80% HRR",
          "col3": "심혈관 능력 및 지구력 향상"
        },
        {
          "col1": "4구간: 무산소 역치",
          "col2": "80% – 90% HRR",
          "col3": "고강도 운동 능력 및 젖산 역치 향상"
        },
        {
          "col1": "5구간: 최대 산소 섭취량 (VO2 Max)",
          "col2": "90% – 100% HRR",
          "col3": "최고 속도 및 인터벌 훈련"
        }
      ],
      "faqs": [
        {
          "question": "카르보넨 공식이란 무엇인가요?",
          "answer": "카르보넨 공식은 최대 심박수와 안정시 심박수의 차이인 심박수 예비량(HRR)을 활용하여 목표 운동 심박수를 정밀하게 계산하는 공식입니다."
        },
        {
          "question": "카르보넨 공식이 일반 220-나이 공식보다 정확한 이유는 무엇인가요?",
          "answer": "단순 220-나이 공식은 대략적인 최대치만 제시하지만, 카르보넨 방식은 개인의 안정시 심박수를 반영하여 현재의 심폐 체력 수준에 꼭 맞는 운동 강도를 제공합니다."
        }
      ]
    },
    "hi": {
      "eyebrow": "कार्डियोवैस्कुलर फिजियोलॉजी",
      "title": "कार्वोनेन हार्ट रेट कैलकुलेटर – हार्ट रेट रिजर्व (HRR) ज़ोन",
      "intro": "कार्वोनेन फॉर्मूला और हार्ट रेट रिजर्व (HRR) का उपयोग करके फैट बर्निंग और कार्डियो फिटनेस के लिए अपने लक्षित व्यायाम हार्ट रेट ज़ोन की सटीक और सुरक्षित गणना करें।",
      "formulaTitle": "आधिकारिक कार्वोनेन सूत्र",
      "formulaDesc": "Target HR = [(HRmax - HRrest) × %intensity] + HRrest",
      "formulaCode": "THR = (HRR × Intensity%) + Resting HR",
      "tableTitle": "कार्वोनेन हार्ट रेट ट्रेनिंग ज़ोन तालिका",
      "tableRows": [
        {
          "col1": "ज़ोन 1: सक्रिय रिकवरी",
          "col2": "50% – 60% HRR",
          "col3": "वार्म-अप और रिकवरी"
        },
        {
          "col1": "ज़ोन 2: धीरज एवं वसा हानि",
          "col2": "60% – 70% HRR",
          "col3": "वसा जलाने के लिए सर्वोत्तम ज़ोन"
        },
        {
          "col1": "ज़ोन 3: एरोबिक फिटनेस",
          "col2": "70% – 80% HRR",
          "col3": "कार्डियो क्षमता में सुधार"
        },
        {
          "col1": "ज़ोन 4: एनारोबिक सीमा",
          "col2": "80% – 90% HRR",
          "col3": "सहनशक्ति में वृद्धि"
        },
        {
          "col1": "ज़ोन 5: VO2 मैक्स शिखर",
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
      "title": "1RM Calculator – One Rep Max Bench, Squat, Deadlift",
      "intro": "Find your one-rep max with our free 1RM Calculator. It estimates the heaviest weight you can lift for a single rep on the bench press, squat, or deadlift. You do not need to test dangerous maximum lifts to failure. Simply enter the weight you lifted and your rep count to get instant targets.",
      "formulaTitle": "Standard Strength 1RM Calculation Formulas",
      "formulaDesc": "The Epley formula estimates your max lift: 1RM = Weight × (1 + Reps / 30). The Brzycki formula offers a close second opinion: 1RM = Weight × [36 / (37 - Reps)]. Both equations work best when using sets of 2 to 6 reps.",
      "formulaCode": "Epley 1RM = W × (1 + R / 30)",
      "tableTitle": "1RM Percentage Intensity & Repetition Training Chart",
      "tableRows": [
        {
          "col1": "100% 1RM",
          "col2": "1 Repetition",
          "col3": "Your absolute maximum single lift"
        },
        {
          "col1": "90% 1RM",
          "col2": "3 to 4 Repetitions",
          "col3": "Heavy strength training load"
        },
        {
          "col1": "85% 1RM",
          "col2": "5 to 6 Repetitions",
          "col3": "Optimal balance of strength and muscle size"
        },
        {
          "col1": "80% 1RM",
          "col2": "7 to 8 Repetitions",
          "col3": "Standard hypertrophy muscle-building load"
        },
        {
          "col1": "75% 1RM",
          "col2": "10 Repetitions",
          "col3": "Volume hypertrophy and muscular endurance"
        }
      ],
      "faqs": [
        {
          "question": "What is a 1RM and why does it matter?",
          "answer": "A one-rep max is the heaviest weight you can lift once with clean form. Coaches use this number to assign exact training weights for bench presses, squats, and deadlifts."
        },
        {
          "question": "How does the 1RM calculator estimate my max lift?",
          "answer": "The calculator uses submaximal formulas like Epley and Brzycki. It takes a lighter weight and your repetition count to predict your top single lift safely."
        },
        {
          "question": "How many reps give the most accurate 1RM estimate?",
          "answer": "Sets of 2 to 6 clean reps give the most reliable results. Sets over 10 reps test muscle stamina rather than pure strength, which reduces formula accuracy."
        },
        {
          "question": "How should I warm up before testing a heavy set?",
          "answer": "Start with an empty barbell. Gradually add weight over 3 to 4 easy sets of 3 to 5 reps. Rest two to three minutes before your main working set."
        },
        {
          "question": "Is it safe to attempt a true 1RM in the gym?",
          "answer": "Testing true maximum singles carries higher joint and muscle strain. Always use safety pins or have an experienced spotter nearby when lifting near your limit."
        }
      ]
    },
    "es": {
      "eyebrow": "Estándares de Referencia de Salud",
      "title": "Calculadora de 1RM – Repetición Máxima Press Banca y Sentadilla",
      "intro": "Calculadora de 1RM (Máximo para una repetición) gratuita. Calcula tu fuerza máxima para 1 repetición, porcentajes de levantamiento y marcas de repetición utilizando las ecuaciones de Epley y Brzycki con cálculos privados en el navegador.",
      "formulaTitle": "Fórmula de Referencia Estándar",
      "formulaDesc": "Calculado utilizando ecuaciones estándar validadas.",
      "formulaCode": "Epley 1RM = W × (1 + R / 30)",
      "tableTitle": "Tabla de Intensidad Porcentual y Repeticiones según 1RM",
      "tableRows": [
        {
          "col1": "100% 1RM Fuerza Máxima",
          "col2": "1 Repetition",
          "col3": "Carga máxima absoluta de fuerza (100% 1RM)"
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
          "col3": "Rango de hipertrofia y construcción muscular (80% 1RM)"
        },
        {
          "col1": "Categoría / Nivel 6",
          "col2": "10 Repetitions",
          "col3": "Resistencia muscular e hipertrofia de volumen (75% 1RM)"
        }
      ],
      "faqs": [
        {
          "question": "¿Qué es 1RM y cómo se calcula?",
          "answer": "El 1RM (repetición máxima) es el peso máximo que puedes levantar una sola vez con técnica adecuada. Nuestra calculadora utiliza repeticiones submáximas y la fórmula de Epley para estimarlo de forma segura."
        },
        {
          "question": "¿Cómo funcionan las fórmulas de estimación submáxima de 1RM?",
          "answer": "Fórmulas como Epley y Brzycki estiman tu repetición máxima a partir de cargas más ligeras y número de repeticiones, evitando el riesgo de lesiones de un intento máximo."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de Référence de Santé",
      "title": "Calculateur de 1RM – Répétition Maximale Développé Couché",
      "intro": "Calculateur de 1RM (Maximum pour une répétition) gratuit. Calculez votre force maximale pour 1 répétition, vos pourcentages de musculation et repères de répétition avec les équations d'Epley et Brzycki avec calculs sur navigateur.",
      "formulaTitle": "Formule de Référence Standard",
      "formulaDesc": "Calculé à l'aide d'équations standards validées.",
      "formulaCode": "Epley 1RM = W × (1 + R / 30)",
      "tableTitle": "Tableau d'Intensité en Pourcentage et Répétitions selon le 1RM",
      "tableRows": [
        {
          "col1": "100% 1RM Force Maximale",
          "col2": "1 Repetition",
          "col3": "Charge maximale absolue de force (100% 1RM)"
        },
        {
          "col1": "90% 1RM Charge Lourde",
          "col2": "2 Repetitions",
          "col3": "Charge lourde d'entraînement de force (95% 1RM)"
        },
        {
          "col1": "85% 1RM Développement Force",
          "col2": "3 Repetitions",
          "col3": "Séries de force et d'haltérophilie (93% 1RM)"
        },
        {
          "col1": "80% 1RM Hypertrophie",
          "col2": "5 Repetitions",
          "col3": "Plage de développement de la force (87% 1RM)"
        },
        {
          "col1": "75% 1RM Endurance Musculaire",
          "col2": "7 Repetitions",
          "col3": "Plage de construction musculaire (80% 1RM)"
        },
        {
          "col1": "Catégorie / Niveau 6",
          "col2": "10 Repetitions",
          "col3": "Endurance musculaire et hypertrophie de volume (75% 1RM)"
        }
      ],
      "faqs": [
        {
          "question": "Qu'est-ce que le 1RM et comment est-il calculé ?",
          "answer": "Le 1RM (une répétition maximale) est la charge la plus lourde que vous pouvez soulever sur une seule répétition avec une technique correcte. Notre calculateur utilise la formule d'Epley pour l'estimer en toute sécurité."
        },
        {
          "question": "Comment fonctionnent les formules d'estimation submoximale du 1RM ?",
          "answer": "Des formules comme Epley ou Brzycki permettent d'évaluer votre charge maximale à partir de séries plus légères, évitant ainsi le stress articulaire extrême."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "1RM-Rechner – Maximalgewicht für Bankdrücken & Kniebeugen",
      "intro": "Kostenloser 1RM-Rechner (Maximalkraft-Rechner). Berechnen Sie Ihre Maximalkraft für eine Wiederholung, Gewichtheber-Prozentwerte und Wiederholungs-Benchmarks mit Epley und Brzycki datenschutzorientiert im Browser.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardmäßig validierten Gleichungen.",
      "formulaCode": "Epley 1RM = W × (1 + R / 30)",
      "tableTitle": "1RM-Prozentsatz-Intensitäts- und Wiederholungstabelle",
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
          "col3": "Kraftsätze für Maximalkraft (93% 1RM)"
        },
        {
          "col1": "85% 1RM Muskelaufbau",
          "col2": "5 Repetitions",
          "col3": "Bereich für schweren Kraftaufbau (87% 1RM)"
        },
        {
          "col1": "80% 1RM Hypertrophie",
          "col2": "7 Repetitions",
          "col3": "Bereich für Muskelaufbau (80% 1RM)"
        },
        {
          "col1": "75% 1RM Kraftausdauer",
          "col2": "10 Repetitions",
          "col3": "Muskelausdauer und Volumen-Hypertrophie (75% 1RM)"
        }
      ],
      "faqs": [
        {
          "question": "Was ist das 1RM und wie wird es berechnet?",
          "answer": "Das 1RM (One Rep Max) ist das Maximalgewicht, das Sie für eine einzelne Wiederholung mit sauberer Technik heben können. Unser Rechner nutzt die Epley-Formel, um diesen Wert sicher zu schätzen."
        },
        {
          "question": "Wie funktionieren Formeln zur submaximalen 1RM-Schätzung?",
          "answer": "Formeln wie Epley und Brzycki berechnen Ihre Maximalkraft aus leichteren Sätzen und Wiederholungszahlen, wodurch das Verletzungsrisiko minimiert wird."
        }
      ]
    },
    "ko": {
      "eyebrow": "건강 참조 표준 지침",
      "title": "1RM 계산기 – 1회 최대 반복 중량 계산기 (벤치프레스, 스쿼트, 데드리프트) – 참조 계산기",
      "intro": "무료 1RM(1회 최대 중량) 계산기. Epley 및 Brzycki 공식을 활용하여 벤치프레스, 스쿼트의 1회 최대 근력, 웨이트 리프팅 중량 비율(%)을 브라우저 내에서 안전하고 정밀하게 산출하세요. 세계보건기구(WHO) 기준에 따른 안전한 무료 건강 도구입니다.",
      "formulaTitle": "표준 계산 공식",
      "formulaDesc": "검증된 표준 공식을 사용하여 계산됩니다.",
      "formulaCode": "Epley 1RM = W × (1 + R / 30)",
      "tableTitle": "1RM 백분율 강도 및 반복 횟수 트레이닝 차트",
      "tableRows": [
        {
          "col1": "100% 1RM 최대 기준",
          "col2": "1 Repetition",
          "col3": "단일 최고 근력 측정 구간 (100% 1RM)"
        },
        {
          "col1": "95% 1RM 고부하",
          "col2": "2 Repetitions",
          "col3": "고중량 근력 훈련 구간 (95% 1RM)"
        },
        {
          "col1": "90% 1RM 근력 향상",
          "col2": "3 Repetitions",
          "col3": "파워 리프팅 세트 구간 (93% 1RM)"
        },
        {
          "col1": "85% 1RM 근비대",
          "col2": "5 Repetitions",
          "col3": "고중량 근력 발달 구간 (87% 1RM)"
        },
        {
          "col1": "80% 1RM 하이퍼트로피",
          "col2": "7 Repetitions",
          "col3": "근비대 집중 훈련 구간 (80% 1RM)"
        },
        {
          "col1": "75% 1RM 근지구력",
          "col2": "10 Repetitions",
          "col3": "근지구력 및 볼륨 훈련 구간 (75% 1RM)"
        }
      ],
      "faqs": [
        {
          "question": "1RM이란 무엇이며 어떻게 계산되나요?",
          "answer": "1RM(1 Rep Max)은 올바른 자세로 1회 들 수 있는 최대 중량입니다. 본 계산기는 에플리 공식을 적용하여 가벼운 무게의 반복 횟수로 안전하게 최대치를 추정합니다."
        },
        {
          "question": "서브맥시멀 1RM 추정 공식의 원리는 무엇인가요?",
          "answer": "에플리 및 브지키 공식은 부상 위험이 높은 최대 중량 대신, 안전한 중량의 반복 횟수를 기반으로 수학적으로 1RM을 추정합니다."
        }
      ]
    },
    "hi": {
      "eyebrow": "स्ट्रेंथ कंडीशनिंग साइंस",
      "title": "1RM कैलकुलेटर – एक पुनरावृत्ति अधिकतम वजन (बेंच प्रेस व स्क्वैट)",
      "intro": "बेंच प्रेस, स्क्वाट और डेडलिफ्ट के लिए अपने 1RM (वन रेप मैक्स) की सुरक्षित गणना करें। एपले और ब्रज़िकी सूत्रों से अपने 100% मैक्स की गणना करें।",
      "formulaTitle": "मानक 1RM गणना सूत्र",
      "formulaDesc": "एपले सूत्र: 1RM = वजन × (1 + रेप्स / 30) | ब्रज़िकी सूत्र: 1RM = वजन × [36 / (37 - रेप्स)]",
      "formulaCode": "Epley 1RM = W × (1 + R / 30)",
      "tableTitle": "1RM प्रतिशत प्रशिक्षण तालिका",
      "tableRows": [
        {
          "col1": "100% 1RM अधिकतम शक्ति",
          "col2": "1 रेप",
          "col3": "अधिकतम क्षमता"
        },
        {
          "col1": "95% 1RM भारी भार",
          "col2": "3 रेप्स",
          "col3": "भारी स्ट्रेंथ लोड"
        },
        {
          "col1": "90% 1RM शक्ति विकास",
          "col2": "5 रेप्स",
          "col3": "मांसपेशी वृद्धि"
        },
        {
          "col1": "85% 1RM मांसपेशी वृद्धि",
          "col2": "10 रेप्स",
          "col3": "वॉल्यूम ट्रेनिंग"
        },
        {
          "col1": "80% 1RM हाइपरट्रॉफी",
          "col2": "7 Repetitions",
          "col3": "हाइपरट्रॉफी मांसपेशी निर्माण सीमा"
        },
        {
          "col1": "75% 1RM मांसपेशी धीरज",
          "col2": "10 Repetitions",
          "col3": "वॉल्यूम हाइपरट्रॉफी और सहनशक्ति"
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
  "pregnancy-weight-gain-calculator": {
    "en": {
      "eyebrow": "Gestational Health Reference",
      "title": "Gestational Weight Tracker & Pregnancy Growth Stages",
      "intro": "Track maternal mass changes and developmental benchmarks based on published National Academies/IOM and ACOG clinical consensus guidelines. Understand personalized targets calculated from pre-pregnancy BMI.",
      "formulaTitle": "IOM Maternal Progression Recommendations",
      "formulaDesc": "Normal BMI (18.5-24.9): 11.5 - 16.0 kg total (25 - 35 lbs)",
      "tableTitle": "IOM Trimester Maternal Progress Reference Chart",
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
          "question": "How does the Gestational Weight Tracker calculate target ranges?",
          "answer": "This reference tool applies Institute of Medicine (IOM) and ACOG guidelines, estimating healthy maternal mass progression based on baseline BMI before conception."
        },
        {
          "question": "How should maternal progress be evaluated across pregnancy trimesters?",
          "answer": "For an individual starting with normal pre-pregnancy BMI (18.5–24.9), standard guidelines anticipate 1 to 4.5 lbs in the first trimester, followed by approximately 1 lb per week during the second and third trimesters."
        },
        {
          "question": "What are the recommended total gestational targets according to the IOM?",
          "answer": "According to IOM standards: Underweight (<18.5 BMI) targets 28–40 lbs (12.5–18 kg); Normal BMI (18.5–24.9) targets 25–35 lbs (11.5–16 kg); Overweight (25–29.9 BMI) targets 15–25 lbs (7–11.5 kg); Obese (≥30 BMI) targets 11–20 lbs (5–9 kg)."
        },
        {
          "question": "What is typical first trimester maternal change?",
          "answer": "Most expectant mothers gain between 0.5 and 2.0 kg (1 to 4.5 lbs) total during the first 12 weeks of pregnancy, reflecting blood volume expansion and placental development rather than significant fetal weight."
        },
        {
          "question": "Why does baseline pre-pregnancy BMI influence gestational guidance?",
          "answer": "Pre-conception body composition reflects maternal nutrient stores. Tailoring progression targets helps minimize risks of gestational diabetes, preeclampsia, and macrosomia."
        }
      ]
    },
    "es": {
      "eyebrow": "Estándares de Referencia de Salud",
      "title": "Calculadora de Aumento de Peso en el Embarazo",
      "intro": "Calculadora gratuita de peso en el embarazo según las guías del ACOG y el IOM. Realiza un seguimiento del aumento de peso gestacional semana a semana por trimestre e IMC previo al embarazo con cálculos privados en el navegador.",
      "formulaTitle": "Fórmula de Referencia Estándar",
      "formulaDesc": "Calculado utilizando ecuaciones estándar validadas.",
      "tableTitle": "Tabla de Peso Objetivo por Trimestre según el IOM",
      "tableRows": [
        {
          "col1": "Bajo peso pregestacional (< 18.5)",
          "col2": "12.5 – 18.0 kg (28 - 40 lbs)",
          "col3": "~0.5 kg / semana en el 2.º y 3.er trimestre"
        },
        {
          "col1": "IMC Normal (18.5–24.9)",
          "col2": "11.5 – 16.0 kg (25 - 35 lbs)",
          "col3": "~0.4 kg / semana en el 2.º y 3.er trimestre"
        },
        {
          "col1": "Sobrepeso (25.0–29.9)",
          "col2": "7.0 – 11.5 kg (15 - 25 lbs)",
          "col3": "~0.3 kg / semana en el 2.º y 3.er trimestre"
        }
      ],
      "faqs": [
        {
          "question": "¿Qué es la calculadora de aumento de peso en el embarazo?",
          "answer": "Es una herramienta de referencia basada en las directrices de ACOG e IOM que ofrece rangos recomendados de aumento de peso gestacional según el IMC previo al embarazo."
        },
        {
          "question": "¿Cómo calcular el aumento de peso en el embarazo semana a semana?",
          "answer": "Introduce tu peso actual, peso previo y semana de gestación (1 a 40). Con un IMC normal (18.5–24.9), la ganancia de referencia es de 0.5 a 2 kg en el primer trimestre y aproximadamente 0.4 kg por semana en el segundo y tercer trimestre."
        },
        {
          "question": "¿Cuánto peso total se recomienda aumentar durante el embarazo?",
          "answer": "Según el IOM: bajo peso (<18.5): 12.5–18 kg; peso normal (18.5–24.9): 11.5–16 kg; sobrepeso (25–29.9): 7–11.5 kg; obesidad (≥30): 5–9 kg."
        },
        {
          "question": "¿Cuál es el aumento de peso típico en el primer trimestre?",
          "answer": "La mayoría de las mujeres aumentan entre 0.5 y 2.0 kg en total durante las primeras 12 semanas, ya que el crecimiento fetal en esta etapa inicial es pequeño."
        },
        {
          "question": "¿Por qué el IMC previo al embarazo influye en las metas de peso gestacional?",
          "answer": "El IMC previo determina las reservas energéticas iniciales, por lo que las pautas médicas adaptan los rangos de ganancia recomendados al estado nutricional de partida."
        }
      ]
    },
    "fr": {
      "eyebrow": "Normes de Référence de Santé",
      "title": "Calculateur de Prise de Poids pendant la Grossesse",
      "intro": "Calculateur gratuit de prise de poids pendant la grossesse selon les directives de l'ACOG et de l'IOM. Suivez l'évolution du poids gestationnel semaine par semaine par trimestre et IMC avant grossesse avec calculs sur navigateur.",
      "formulaTitle": "Formule de Référence Standard",
      "formulaDesc": "Calculé à l'aide d'équations standards validées.",
      "tableTitle": "Tableau de Prise de Poids Recommandée par Trimestre (IOM)",
      "tableRows": [
        {
          "col1": "Insuffisance pondérale avant grossesse (< 18.5)",
          "col2": "12.5 – 18.0 kg (28 - 40 lbs)",
          "col3": "~0,5 kg / semaine au 2e et 3e trimestre"
        },
        {
          "col1": "IMC Normal (18.5–24.9)",
          "col2": "11.5 – 16.0 kg (25 - 35 lbs)",
          "col3": "~0,4 kg / semaine au 2e et 3e trimestre"
        },
        {
          "col1": "Surpoids (25.0–29.9)",
          "col2": "7.0 – 11.5 kg (15 - 25 lbs)",
          "col3": "~0,3 kg / semaine au 2e et 3e trimestre"
        }
      ],
      "faqs": [
        {
          "question": "Qu'est-ce que le calculateur de prise de poids pendant la grossesse ?",
          "answer": "Il s'agit d'un outil d'orientation basé sur les recommandations de l'ACOG et de l'IOM, estimant la prise de poids gestationnelle idéale selon l'IMC d'avant grossesse."
        },
        {
          "question": "Comment calculer la prise de poids semaine par semaine pendant la grossesse ?",
          "answer": "Entrez votre poids actuel, votre poids avant grossesse et la semaine actuelle (1 à 40). Pour un IMC normal (18,5–24,9), la recommandation est de 0,5 à 2 kg au 1er trimestre, puis d'environ 0,4 kg par semaine aux 2e et 3e trimestres."
        },
        {
          "question": "Combien de poids au total doit-on prendre pendant la grossesse ?",
          "answer": "Selon les directives de l'IOM : insuffisance pondérale (<18,5) : 12,5–18 kg ; IMC normal (18,5–24,9) : 11,5–16 kg ; surpoids (25–29,9) : 7–11,5 kg ; obésité (≥30) : 5–9 kg."
        },
        {
          "question": "Quelle est la prise de poids habituelle au premier trimestre ?",
          "answer": "La plupart des femmes prennent entre 0,5 et 2,0 kg au total au cours des 12 premières semaines de grossesse."
        },
        {
          "question": "Pourquoi l'IMC d'avant grossesse influence-t-il les objectifs de prise de poids ?",
          "answer": "L'IMC initial reflète les réserves énergétiques de la mère, ce qui permet d'adapter les recommandations nutritionnelles pour la santé maternelle et fœtale."
        }
      ]
    },
    "de": {
      "eyebrow": "Gesundheits-Referenzstandards",
      "title": "Schwangerschafts-Gewichtszunahme Rechner – Trimester-Tracking",
      "intro": "Kostenloser Schwangerschafts-Gewichtszunahme-Rechner nach ACOG- und IOM-Richtlinien. Verfolgen Sie die wöchentliche Gewichtszunahme nach Trimester und BMI vor der Schwangerschaft datenschutzorientiert im Browser.",
      "formulaTitle": "Standard-Referenzformel",
      "formulaDesc": "Berechnet mit standardmäßig validierten Gleichungen.",
      "tableTitle": "IOM-Gewichtszunahme-Empfehlungen nach Trimestern",
      "tableRows": [
        {
          "col1": "Untergewicht vor Schwangerschaft (< 18.5)",
          "col2": "12.5 – 18.0 kg (28 - 40 lbs)",
          "col3": "~0,5 kg / Woche im 2. und 3. Trimester"
        },
        {
          "col1": "Normalgewicht (18.5–24.9)",
          "col2": "11.5 – 16.0 kg (25 - 35 lbs)",
          "col3": "~0,4 kg / Woche im 2. und 3. Trimester"
        },
        {
          "col1": "Übergewicht (25.0–29.9)",
          "col2": "7.0 – 11.5 kg (15 - 25 lbs)",
          "col3": "~0,3 kg / Woche im 2. und 3. Trimester"
        }
      ],
      "faqs": [
        {
          "question": "Was ist der Rechner für die Gewichtszunahme in der Schwangerschaft?",
          "answer": "Dieser Rechner basiert auf den Leitlinien von ACOG und IOM und bietet Orientierungswerte für die empfohlene Gewichtszunahme basierend auf dem Ausgangs-BMI vor der Schwangerschaft."
        },
        {
          "question": "Wie berechnet man die gesunde Gewichtszunahme Woche für Woche?",
          "answer": "Geben Sie Ihr aktuelles Gewicht, das Ausgangsgewicht und die Schwangerschaftswoche ein. Bei normalem Ausgangs-BMI (18,5–24,9) liegt die Richtlinie bei 0,5–2 kg im 1. Trimester und ca. 0,4 kg pro Woche im 2. und 3. Trimester."
        },
        {
          "question": "Wie viel Gewicht sollte man während der gesamten Schwangerschaft zunehmen?",
          "answer": "Nach IOM-Richtlinien: Untergewicht (<18,5): 12,5–18 kg; Normalgewicht (18,5–24,9): 11,5–16 kg; Übergewicht (25–29,9): 7–11,5 kg; Adipositas (≥30): 5–9 kg."
        },
        {
          "question": "Was ist eine typische Gewichtszunahme im ersten Trimester?",
          "answer": "Die meisten Frauen nehmen in den ersten 12 Schwangerschaftswochen insgesamt zwischen 0,5 und 2,0 kg zu, da das fetale Wachstum zu Beginn gering ist."
        },
        {
          "question": "Warum beeinflusst der Ausgangs-BMI die Zielwerte für die Gewichtszunahme?",
          "answer": "Der Ausgangs-BMI bestimmt die vorhandenen Energiereserven, weshalb medizinische Empfehlungen die Zielbereiche individuell anpassen."
        }
      ]
    },
    "ko": {
      "eyebrow": "건강 참조 표준 지침",
      "title": "임신 중 체중 증가 계산기 – 분기별 체중 증가 권장 범위",
      "intro": "미국 산부인과학회(ACOG) 및 IOM 지침에 맞춘 무료 임신 주수별 체중 증가 계산기. 임신 전 BMI 및 분기별 주수별 권장 체중 증가 범위를 브라우저 내에서 안전하게 확인하세요. 100% 무료 도구. 세계보건기구(WHO) 기준에 따른 안전한 무료 건강 도구입니다.",
      "formulaTitle": "표준 계산 공식",
      "formulaDesc": "검증된 표준 공식을 사용하여 계산됩니다.",
      "tableTitle": "미국의학연구소(IOM) 임신 분기별 권장 체중 증가표",
      "tableRows": [
        {
          "col1": "임신 전 저체중 (< 18.5)",
          "col2": "12.5 – 18.0 kg (28 - 40 lbs)",
          "col3": "임신 2/3분기 주당 약 0.5kg"
        },
        {
          "col1": "정상 BMI (18.5–24.9)",
          "col2": "11.5 – 16.0 kg (25 - 35 lbs)",
          "col3": "임신 2/3분기 주당 약 0.4kg"
        },
        {
          "col1": "과체중 (25.0–29.9)",
          "col2": "7.0 – 11.5 kg (15 - 25 lbs)",
          "col3": "임신 2/3분기 주당 약 0.3kg"
        }
      ],
      "faqs": [
        {
          "question": "임신 중 체중 증가 계산기란 무엇인가요?",
          "answer": "ACOG(미국산부인과학회) 및 IOM(미국의학연구소) 지침을 기반으로 임신 전 BMI에 따른 적정 체중 증가 범위를 안내하는 참고 계산기입니다."
        },
        {
          "question": "임신 주차별 적정 체중 증가량은 어떻게 계산하나요?",
          "answer": "현재 체중, 임신 전 체중, 현재 임신 주수(1~40주)를 입력하여 계산합니다. 정상 BMI(18.5~24.9) 기준, 1분기에는 0.5~2kg, 2·3분기에는 주당 약 0.4kg의 체중 증가가 권장됩니다."
        },
        {
          "question": "임신 기간 동안 총 권장 체중 증가는 얼마인가요?",
          "answer": "IOM 지침 기준: 저체중(<18.5)은 12.5~18kg, 정상 체중(18.5~24.9)은 11.5~16kg, 과체중(25~29.9)은 7~11.5kg, 비만(≥30)은 5~9kg 증가가 권장됩니다."
        },
        {
          "question": "임신 초기(1분기)의 일반적인 체중 증가량은 어느 정도인가요?",
          "answer": "태아의 초기 성장이 완만하므로 임신 첫 12주 동안은 대다수 산모가 총 0.5~2.0kg 내외의 완만한 체중 증가를 보입니다."
        },
        {
          "question": "임신 전 BMI가 주차별 목표 체중 증가량에 영향을 주는 이유는 무엇인가요?",
          "answer": "임신 전 체질량지수는 산모의 초기 영양 및 에너지 비축량을 나타내므로, 모체와 태아의 건강을 위해 초기 BMI에 맞춰 체중 증가 목표를 다르게 설정합니다."
        }
      ]
    },
    "hi": {
      "eyebrow": "स्वास्थ्य संदर्भ मानक",
      "title": "गर्भावस्था में वजन वृद्धि का कैलकुलेटर – तिमाही ट्रैकिंग",
      "intro": "ACOG और IOM दिशानिर्देशों के अनुसार मुफ़्त गर्भावस्था वजन बढ़ना कैलकुलेटर। गर्भावस्था से पहले के बीएमआई और तिमाही के अनुसार सप्ताह-दर-सप्ताह वजन संचय को ट्रैक करें। मुफ़्त और गोपनीयता-केंद्रित।",
      "formulaTitle": "मानक संदर्भ सूत्र",
      "formulaDesc": "मानक सत्यापित समीकरणों का उपयोग करके गणना की गई।",
      "tableTitle": "आईओएम तिमाही लक्षित वजन वृद्धि संदर्भ चार्ट",
      "tableRows": [
        {
          "col1": "गर्भावस्था पूर्व कम वजन (< 18.5)",
          "col2": "12.5 – 18.0 kg (28 - 40 lbs)",
          "col3": "दूसरी/तीसरी तिमाही में ~0.5 किग्रा/सप्ताह"
        },
        {
          "col1": "सामान्य बीएमआई (18.5–24.9)",
          "col2": "11.5 – 16.0 kg (25 - 35 lbs)",
          "col3": "दूसरी/तीसरी तिमाही में ~0.4 किग्रा/सप्ताह"
        },
        {
          "col1": "अधिक वजन (25.0–29.9)",
          "col2": "7.0 – 11.5 kg (15 - 25 lbs)",
          "col3": "दूसरी/तीसरी तिमाही में ~0.3 किग्रा/सप्ताह"
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

// Legacy and alternate slug aliases for 100% data consistency
seoDatabase['bmi-calculator-india'] = seoDatabase['bmi-calculator-for-indians'];
seoDatabase['3d-body-visualizer'] = seoDatabase['3d-bmi-calculator'];
seoDatabase['one-rep-max-calculator'] = seoDatabase['1rm-calculator'];
