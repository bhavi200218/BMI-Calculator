import fs from 'fs';

// 1. UPDATE ToolSEOContent.astro for 3d-bmi-calculator and 3d-body-visualizer across ES, FR, DE, KO, HI
const seoContentPath = 'src/components/ToolSEOContent.astro';
let seoContent = fs.readFileSync(seoContentPath, 'utf-8');

const match = seoContent.match(/const seoDatabase[^{]*= (\{[\s\S]*?\n\};)/);
if (!match) {
  console.error("Could not find seoDatabase");
  process.exit(1);
}

let seoDatabase;
eval('seoDatabase = ' + match[1].replace(/;\s*$/, ''));

const localized3DBmi = {
  es: {
    eyebrow: "Modelo IMC Exponencial de Oxford 2.5 y Visualización Corporal 3D",
    title: "Calculadora de IMC 3D y Visualizador Corporal Interactivo",
    intro: "Nuestra calculadora de IMC 3D y visualizador corporal interactivo calcula el índice de masa corporal mediante la fórmula exponencial de Oxford 2.5 (1.3 × peso / altura²·⁵) y principios de geometría corporal tridimensional. Gira 360° para ver la malla sólida, estructura de alambre y mapa de calor de IMC.",
    formulaTitle: "Fórmula Exponencial 3D de Oxford Ajustada a la Altura",
    formulaDesc: "IMC 3D Ajustado = 1.3 × Peso (kg) / [Altura (m)]²·⁵ | Diseñada por matemáticos de la Universidad de Oxford para eliminar la distorsión de altura que afecta a personas altas o bajas en la fórmula clásica de Quetelet.",
    formulaCode: "IMC 3D = 1.3 × kg / m²·⁵",
    tableTitle: "Comparación de IMC 2D Estándar vs IMC 3D Ajustado por Altura",
    tableRows: [
      { col1: "Personas Bajas (< 160 cm)", col2: "El IMC 2D estándar suele subestimar el resultado", col3: "El IMC 3D compensa la estatura menor adecuadamente" },
      { col1: "Estatura Promedio (170 cm)", col2: "Alineación de clasificación idéntica", col3: "Sin diferencia entre la fórmula 2D y 3D" },
      { col1: "Personas Altas (> 185 cm)", col2: "El IMC 2D estándar suele sobreestimar el exceso de peso", col3: "El IMC 3D ajusta el volumen tridimensional real" }
    ],
    faqs: [
      { question: "¿En qué se diferencia el IMC 3D del IMC tradicional?", answer: "El IMC tradicional usa la altura al cuadrado (m²), mientras que el IMC 3D usa la masa tridimensional dividida entre la altura a la potencia 2.5 (m²·⁵)." },
      { question: "¿Cómo funciona la visualización corporal 3D?", answer: "Genera una silueta anatómica tridimensional interactiva que se escala según tu altura y peso en tiempo real dentro del navegador." },
      { question: "¿Qué representan los modos Malla, Alambre y Mapa de Calor?", answer: "El modo sólido muestra la masa corporal, la malla de alambre muestra los contornos estructurales, y el mapa de calor resalta las zonas según el nivel de IMC." },
      { question: "¿Es precisa la fórmula de Oxford 2.5 para personas muy altas?", answer: "Sí, el profesor Nick Trefethen de la Universidad de Oxford diseñó esta fórmula para eliminar la distorsión matemática en personas muy altas o bajas." },
      { question: "¿El modelo 3D almacena datos o fotografías personales?", answer: "No, el modelo 3D es una simulación matemática generada en tiempo real en tu navegador sin guardar datos ni requerir cámara." }
    ]
  },
  fr: {
    eyebrow: "Modèle IMC d'Oxford 2.5 et Visualisation Corporelle 3D",
    title: "Calculateur d'IMC 3D et Visualiseur Corporel Interactif",
    intro: "Notre calculateur d'IMC 3D calcule votre indice de masse corporelle selon la formule d'Oxford 2.5 (1.3 × poids / taille²·⁵) et modélise votre silhouette en 3D sous tous los angles à 360°.",
    formulaTitle: "Formule Exponentielle 3D d'Oxford Ajustée à la Taille",
    formulaDesc: "IMC 3D Ajusté = 1.3 × Poids (kg) / [Taille (m)]²·⁵ | Élaborée par des mathématiciens de l'Université d'Oxford pour corriger les biais liés à la taille.",
    formulaCode: "IMC 3D = 1.3 × kg / m²·⁵",
    tableTitle: "Comparaison IMC 2D Standard vs IMC 3D Ajusté d'Oxford",
    tableRows: [
      { col1: "Personnes de Petite Taille (< 160 cm)", col2: "L'IMC 2D sous-estime souvent la catégorie", col3: "L'IMC 3D réajuste le score proportionnellement" },
      { col1: "Taille Moyenne (170 cm)", col2: "Résultats identiques sur les deux formules", col3: "Aucune différence de catégorie" },
      { col1: "Personnes de Grande Taille (> 185 cm)", col2: "L'IMC 2D surestime le niveau de surpoids", col3: "L'IMC 3D corrige la distorsion volumétrique" }
    ],
    faqs: [
      { question: "En quoi l'IMC 3D diffère-t-il de l'IMC classique ?", answer: "L'IMC classique divise le poids par la taille au carré (m²), tandis que l'IMC 3D utilise la puissance 2,5 (m²·⁵) pour refléter le volume corporel." },
      { question: "Comment fonctionne la visualisation 3D ?", answer: "Elle génère un avatar anatomique 3D interactif modélisé en temps réel selon vos mensurations dans votre navigateur." },
      { question: "Que signifient les modes Maillage, Fil de fer et Carte de chaleur ?", answer: "Le mode solide montre la masse, le fil de fer révèle la structure géométrique, et la carte de chaleur indique les zones d'IMC." },
      { question: "Pourquoi la formule d'Oxford 2.5 est-elle recommandée pour les grands ?", answer: "Elle élimine la distorsion mathématique de la formule de Quetelet qui désavantage systématiquement les personnes très grandes." },
      { question: "L'outil 3D enregistre-t-il des images personnelles ?", answer: "Non, toutes les modélisations sont des simulations mathématiques anonymes exécutées localement sur votre navigateur." }
    ]
  },
  de: {
    eyebrow: "Oxford 2.5 Potenzformel & 3D-Körper-Visualisierung",
    title: "Interaktiver 3D BMI-Rechner & 3D-Körper-Visualisierer",
    intro: "Berechnen Sie Ihren höhenkorrigierten BMI mit der Oxford 2.5 Formel (1.3 × Gewicht / Größe²·⁵) und betrachten Sie ein interaktives 360°-3D-Körpermodell direkt in Ihrem Browser.",
    formulaTitle: "Oxford 3D Potenzformel für dreidimensionale Körpergeometrie",
    formulaDesc: "3D-BMI = 1.3 × Gewicht (kg) / [Größe (m)]²·⁵ | Entwickelt von Mathematikern der Universität Oxford zur Korrektur von Größenverzerrungen.",
    formulaCode: "3D-BMI = 1.3 × kg / m²·⁵",
    tableTitle: "Vergleich: Standard 2D-BMI vs. Höhenkorrigierter 3D-BMI",
    tableRows: [
      { col1: "Kleine Personen (< 160 cm)", col2: "Standard 2D-BMI zeigt tendenziell zu niedrige Werte", col3: "3D-Formel gleicht die Körpergröße aus" },
      { col1: "Durchschnittliche Größe (170 cm)", col2: "Identische Ergebnisse bei beiden Formeln", col3: "Kein Unterschied in der Kategorie" },
      { col1: "Große Personen (> 185 cm)", col2: "Standard 2D-BMI zeigt oft zu hohe Werte", col3: "3D-Formel berücksichtigt das dreidimensionale Volumen" }
    ],
    faqs: [
      { question: "Was unterscheidet den 3D-BMI vom klassischen BMI?", answer: "Der klassische BMI nutzt die Körpergröße zum Quadrat (m²), während der 3D-BMI die Potenz 2.5 nutzt, um das dreidimensionale Körpervolumen besser abzubilden." },
      { question: "Wie funktioniert der 3D-Körper-Visualisierer?", answer: "Er erzeugt einen interaktiven 3D-Avatar, der sich in Echtzeit an Ihre eingegebenen Daten anpasst und um 360° gedreht werden kann." },
      { question: "Was bedeuten Drahtmodell, Solid-Mesh und Heatmap?", answer: "Solid-Mesh zeigt die Körperoberfläche, das Drahtmodell zeigt die Gitterstruktur und die Heatmap hebt BMI-Zonen farblich hervor." },
      { question: "Warum ist die Oxford 2.5 Formel für große Menschen genauer?", answer: "Prof. Nick Trefethen von der Universität Oxford zeigte, dass die alte Quetelet-Formel große Menschen mathematisch benachteiligt." },
      { question: "Werden Bilder oder persönliche Daten gespeichert?", answer: "Nein, das 3D-Modell ist eine rein mathematische Echtzeit-Simulation in Ihrem Browser ohne Datenspeicherung." }
    ]
  },
  ko: {
    eyebrow: "옥스포드 2.5 신장 보정 공식 및 3D 체형 시각화",
    title: "3D BMI 계산기 및 대화형 3D 체형 시각화 도구",
    intro: "옥스포드 2.5 체질량 공식(1.3 × 체중 / 신장²·⁵)을 기반으로 신장 왜곡을 보정한 BMI를 산출하고 360° 회전 가능한 3D 입체 실루엣 아바타를 실시간으로 확인하세요.",
    formulaTitle: "3D 옥스포드 신장 보정 체질량 공식",
    formulaDesc: "3D 보정 BMI = 1.3 × 체중 (kg) / [신장 (m)]²·⁵ | 옥스퍼드 대학교 수학과 연구진이 개발한 3차원 신체 부피 스케일링 공식.",
    formulaCode: "3D BMI = 1.3 × kg / m²·⁵",
    tableTitle: "표준 2D BMI vs 옥스포드 3D 신장 보정 BMI 비교",
    tableRows: [
      { col1: "단신 성인 (< 160 cm)", col2: "표준 2D 공식은 상대적으로 낮게 측정됨", col3: "3D 보정 공식이 올바른 수치 보정" },
      { col1: "평균 신장 (170 cm)", col2: "두 공식 결과 동일", col3: "범주 차이 없음 (동일)" },
      { col1: "장신 성인 (> 185 cm)", col2: "표준 2D 공식은 과도하게 높게 측정됨", col3: "3D 보정 공식이 3차원 부피 왜곡 보정" }
    ],
    faqs: [
      { question: "3D BMI와 기존 일반 BMI의 차이점은 무엇인가요?", answer: "기존 BMI는 신장의 제곱(m²)으로 나누지만, 3D BMI는 3차원 신체 부피 비율인 신장의 2.5제곱(m²·⁵)을 적용합니다." },
      { question: "3D 체형 시각화 기능은 어떻게 구동되나요?", answer: "입력한 신장과 체중 비율에 따라 브라우저 내에서 실시간으로 3D 아바타 모델을 생성하고 360° 회전을 지원합니다." },
      { question: "솔리드, 와이어프레임, 히트맵 모드의 차이는 무엇인가요?", answer: "솔리드는 체형 실루엣, 와이어프레임은 3D 구조 망, 히트맵은 BMI 범주별 색상 위험도를 시각적으로 표현합니다." },
      { question: "키가 큰 사람에게 옥스포드 2.5 공식이 더 정확한 이유는?", answer: "옥스퍼드 대학교 트레페젠 교수가 입증했듯 2차원 제곱 공식은 키가 큰 사람을 불필요하게 비만으로 판정하는 오류를 보정합니다." },
      { question: "3D 아바타 생성 시 개인정보나 사진이 저장되나요?", answer: "아니요, 사진 업로드가 필요 없으며 모든 계산 및 3D 렌더링은 사용자 브라우저에서 100% 안전하게 구동됩니다." }
    ]
  },
  hi: {
    eyebrow: "ऑक्सफोर्ड 2.5 एक्सपोनेंशियल फॉर्मूला और 3D मॉडल",
    title: "3D बीएमआई कैलकुलेटर और इंटरएक्टिव 3D बॉडी विजुअलाइज़र",
    intro: "ऑक्सफोर्ड 2.5 फॉर्मूला (1.3 × वजन / ऊंचाई²·⁵) के साथ अपने बीएमआई की गणना करें और 360° इंटरएक्टिव 3D बॉडी मॉडलर का उपयोग करके अपनी शारीरिक संरचना को समझें।",
    formulaTitle: "ऑक्सफोर्ड 3D ऊंचाई-समायोजित बीएमआई फॉर्मूला",
    formulaDesc: "3D बीएमआई = 1.3 × वजन (किग्रा) / [ऊंचाई (मीटर)]²·⁵ | ऑक्सफोर्ड विश्वविद्यालय के गणितज्ञों द्वारा विकसित सूत्र जो लंबे या छोटे कद के लोगों में ऊंचाई के गणितीय भ्रम को दूर करता है।",
    formulaCode: "3D BMI = 1.3 × kg / m²·⁵",
    tableTitle: "मानक 2D बीएमआई बनाम 3D ऊंचाई-समायोजित बीएमआई",
    tableRows: [
      { col1: "कम ऊंचाई वाले वयस्क (< 160 सेमी)", col2: "मानक 2D बीएमआई कम स्कोर दिखाता है", col3: "3D फॉर्मूला सही ऊंचाई अनुपात को समायोजित करता है" },
      { col1: "औसत ऊंचाई (170 सेमी)", col2: "दोनों फॉर्मूलों में समान परिणाम", col3: "कोई अंतर नहीं (समान श्रेणी)" },
      { col1: "अधिक ऊंचाई वाले वयस्क (> 185 सेमी)", col2: "मानक 2D बीएमआई अधिक स्कोर दिखाता है", col3: "3D फॉर्मूला 3D आयतन (Volume) को संतुलित करता है" }
    ],
    faqs: [
      { question: "3D बीएमआई और मानक बीएमआई में क्या अंतर है?", answer: "मानक बीएमआई ऊंचाई के वर्ग (m²) का उपयोग करता है, जबकि 3D बीएमआई शारीरिक मात्रा को संतुलित करने के लिए 2.5 की घात (m²·⁵) का उपयोग करता है।" },
      { question: "3D बॉडी विजुअलाइज़र कैसे काम करता है?", answer: "यह आपके दर्ज किए गए वजन और ऊंचाई के आधार पर आपके ब्राउज़र में ही वास्तविक समय में 3D अवतार मॉडल तैयार करता है जिसे आप 360° घुमा सकते हैं।" },
      { question: "वायरफ्रेम, मेश और हीटमैप व्यू क्या दर्शाते हैं?", answer: "मेश शरीर के आकार को दिखाता है, वायरफ्रेम ज्यामितीय लाइनों को दिखाता है, और हीटमैप बीएमआई श्रेणी के अनुसार रंगों से जोखिम क्षेत्र दिखाता है।" },
      { question: "लंबे लोगों के लिए ऑक्सफोर्ड 2.5 फॉर्मूला क्यों बेहतर है?", answer: "ऑक्सफोर्ड विश्वविद्यालय के प्रोफेसर निक त्रेफेथेन के अनुसार, पुराना फॉर्मूला लंबे लोगों के बीएमआई को अकारण अधिक दिखाता था, जिसे 2.5 फॉर्मूला ठीक करता है।" },
      { question: "क्या 3D विजुअलाइज़र आपकी कोई निजी फोटो लेता है?", answer: "नहीं, इसके लिए किसी कैमरे या फोटो की आवश्यकता नहीं है; यह केवल आपके अंकों पर आधारित एक मुफ़्त 3D गणितीय मॉडल है।" }
    ]
  }
};

seoDatabase['3d-bmi-calculator'] = localized3DBmi;
seoDatabase['3d-body-visualizer'] = localized3DBmi;

// Re-serialize modified object back to ToolSEOContent.astro
const newDbStr = 'const seoDatabase: Record<string, Record<string, ToolContent>> = ' + JSON.stringify(seoDatabase, null, 2) + ';';
const newContent = seoContent.replace(/const seoDatabase[^{]*= (\{[\s\S]*?\n\};)/, newDbStr);

fs.writeFileSync(seoContentPath, newContent, 'utf-8');
console.log('Successfully updated 3D BMI entries in ToolSEOContent.astro across ES, FR, DE, KO, HI!');
