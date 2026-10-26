import type { Locale } from './calculators';

export interface BlogCtaConfig {
  title: string;
  descPrefix: string;
  linkText: string;
  descSuffix: string;
  btnText: string;
  targetSlug: string;
}

export interface BlogToolMeta {
  targetSlug: string;
  relatedSlugs: string[];
  cta: Record<Locale, BlogCtaConfig>;
}

export const relatedToolsSectionHeading: Record<Locale, { title: string; subtitle: string }> = {
  en: {
    title: "Related Health & Screening Calculators",
    subtitle: "Explore evidence-based calculation tools complementary to this article's topic."
  },
  es: {
    title: "Calculadoras de Salud y Cribado Relacionadas",
    subtitle: "Explora herramientas de cálculo basadas en evidencia complementarias a este artículo."
  },
  fr: {
    title: "Calculateurs de Santé et de Dépistage Associés",
    subtitle: "Découvrez des outils de calcul fondés sur des preuves en lien avec cet article."
  },
  de: {
    title: "Verwandte Gesundheits- & Screening-Rechner",
    subtitle: "Erkunden Sie evidenzbasierte Berechnungstools passend zum Thema dieses Artikels."
  },
  ko: {
    title: "관련 건강 및 신체 지표 계산기",
    subtitle: "본 아티클의 주제와 직접 연계된 과학적 근거 기반 계산 도구입니다."
  },
  hi: {
    title: "संबंधित स्वास्थ्य एवं स्क्रीनिंग कैलकुलेटर",
    subtitle: "इस लेख के विषय से जुड़े वैज्ञानिक सूत्रों पर आधारित उपयोगी कैलकुलेटर।"
  }
};

export const blogArticleToolsMap: Record<string, BlogToolMeta> = {
  'bmi-calculator-india': {
    targetSlug: 'bmi-calculator-for-indians',
    relatedSlugs: ['bmi-calculator-for-indians', 'asian-bmi-calculator', 'waist-to-hip-ratio-calculator', 'ideal-weight-calculator'],
    cta: {
      en: {
        title: "Calculate Your Asian / Indian BMI",
        descPrefix: "Check your weight category against WHO Asian action points and ICMR guidelines using our free",
        linkText: "BMI Calculator for Indians",
        descSuffix: "for instant personalized results.",
        btnText: "Calculate Indian BMI Now →",
        targetSlug: "bmi-calculator-for-indians"
      },
      es: {
        title: "Calcula tu IMC para Población India y Asiática",
        descPrefix: "Comprueba tu categoría según los puntos de acción de la OMS usando nuestra",
        linkText: "Calculadora de IMC para India",
        descSuffix: "gratuita.",
        btnText: "Calcular IMC para India →",
        targetSlug: "bmi-calculator-for-indians"
      },
      fr: {
        title: "Calculez Votre IMC selon les Normes Asiatiques",
        descPrefix: "Vérifiez vos seuils d'action OMS Asie avec notre",
        linkText: "Calculateur d'IMC Inde",
        descSuffix: "gratuit.",
        btnText: "Calculer Mon IMC Maintenant →",
        targetSlug: "bmi-calculator-for-indians"
      },
      de: {
        title: "Berechnen Sie Ihren asiatischen / indischen BMI",
        descPrefix: "Überprüfen Sie Ihre WHO-Aktionsschwellen mit unserem kostenlosen",
        linkText: "BMI-Rechner für Indien",
        descSuffix: "in Sekunden.",
        btnText: "Jetzt indischen BMI berechnen →",
        targetSlug: "bmi-calculator-for-indians"
      },
      ko: {
        title: "아시아 및 인도 표준 BMI 계산하기",
        descPrefix: "WHO 아시아 기준 및 ICMR 지침에 따른 수치를",
        linkText: "인도/아시아 BMI 계산기",
        descSuffix: "로 즉시 확인하세요.",
        btnText: "아시아 기준 BMI 계산하기 →",
        targetSlug: "bmi-calculator-for-indians"
      },
      hi: {
        title: "भारतीय व एशियाई मानकों पर अपना बीएमआई जांचें",
        descPrefix: "आईसीएमआर और डब्ल्यूएचओ एशियाई एक्शन पॉइंट्स के अनुसार सटीक परिणाम के लिए हमारे",
        linkText: "भारतीय बीएमआई कैलकुलेटर",
        descSuffix: "का उपयोग करें।",
        btnText: "अभी भारतीय बीएमआई निकालें →",
        targetSlug: "bmi-calculator-for-indians"
      }
    }
  },
  'what-is-bmi': {
    targetSlug: 'bmi-calculator',
    relatedSlugs: ['bmi-calculator', 'bmi-chart', 'ideal-weight-calculator', 'bmr-calculator'],
    cta: {
      en: {
        title: "Check Your Baseline BMI Score",
        descPrefix: "Apply the official Quetelet formula to your height and weight with our free",
        linkText: "BMI Calculator",
        descSuffix: "for immediate screening results.",
        btnText: "Calculate My BMI Now →",
        targetSlug: "bmi-calculator"
      },
      es: {
        title: "¿Quieres Calcular tu IMC?",
        descPrefix: "Aplica la fórmula oficial a tu estatura y peso con nuestra",
        linkText: "Calculadora de IMC",
        descSuffix: "gratuita.",
        btnText: "Calcular Mi IMC Ahora →",
        targetSlug: "bmi-calculator"
      },
      fr: {
        title: "Calculez Votre Indice de Masse Corporelle",
        descPrefix: "Appliquez la formule officielle à votre taille et poids avec notre",
        linkText: "Calculateur d'IMC",
        descSuffix: "gratuit.",
        btnText: "Calculer Mon IMC Maintenant →",
        targetSlug: "bmi-calculator"
      },
      de: {
        title: "Berechnen Sie Ihren Body-Mass-Index",
        descPrefix: "Ermitteln Sie Ihren genauen Wert nach offizieller Formel mit unserem kostenlosen",
        linkText: "BMI-Rechner",
        descSuffix: "in Sekunden.",
        btnText: "Jetzt Meinen BMI Berechnen →",
        targetSlug: "bmi-calculator"
      },
      ko: {
        title: "나의 체질량지수(BMI) 측정하기",
        descPrefix: "공식 퀘틀레 산출 공식에 따라 키와 몸무게를 입력하고 무료",
        linkText: "BMI 계산기",
        descSuffix: "로 확인하세요.",
        btnText: "지금 내 BMI 계산하기 →",
        targetSlug: "bmi-calculator"
      },
      hi: {
        title: "अपना बॉडी मास इंडेक्स (BMI) जांचें",
        descPrefix: "आधिकारिक फॉर्मूले के अनुसार अपनी ऊंचाई और वजन से सटीक स्कोर पाने के लिए हमारे",
        linkText: "बीएमआई कैलकुलेटर",
        descSuffix: "का उपयोग करें।",
        btnText: "अभी बीएमआई कैलकुलेट करें →",
        targetSlug: "bmi-calculator"
      }
    }
  },
  'is-bmi-accurate': {
    targetSlug: 'body-fat-calculator',
    relatedSlugs: ['body-fat-calculator', 'lean-body-mass-calculator', 'waist-to-hip-ratio-calculator', 'bmi-calculator'],
    cta: {
      en: {
        title: "Look Beyond BMI: Estimate Your Body Fat %",
        descPrefix: "Separate lean muscle from adipose tissue using the US Navy circumference method with our free",
        linkText: "Body Fat Calculator",
        descSuffix: "for a clearer body composition view.",
        btnText: "Estimate Body Fat % Now →",
        targetSlug: "body-fat-calculator"
      },
      es: {
        title: "Más Allá del IMC: Calcula tu Porcentaje de Grasa",
        descPrefix: "Distingue entre masa muscular y tejido graso mediante el método de la Marina en nuestra",
        linkText: "Calculadora de Grasa Corporal",
        descSuffix: "gratuita.",
        btnText: "Calcular % de Grasa Ahora →",
        targetSlug: "body-fat-calculator"
      },
      fr: {
        title: "Au-delà de l'IMC : Évaluez Votre Taux de Masse Grasse",
        descPrefix: "Distinguez masse musculaire et tissu adipeux grâce à la méthode de l'US Navy sur notre",
        linkText: "Calculateur de Graisse Corporelle",
        descSuffix: "gratuit.",
        btnText: "Calculer Mon Taux de Graisse →",
        targetSlug: "body-fat-calculator"
      },
      de: {
        title: "Mehr als nur BMI: Körperfettanteil berechnen",
        descPrefix: "Unterscheiden Sie Muskelmasse von Fettgewebe mit der US-Navy-Umfangsmethode in unserem kostenlosen",
        linkText: "Körperfettrechner",
        descSuffix: ".",
        btnText: "Jetzt Körperfettanteil berechnen →",
        targetSlug: "body-fat-calculator"
      },
      ko: {
        title: "BMI를 넘어: 체지방률(%) 정밀 측정하기",
        descPrefix: "근육량과 지방 조직을 구분하기 위해 미 해군 둘레 측정 방식을 적용한 무료",
        linkText: "체지방 계산기",
        descSuffix: "를 이용해보세요.",
        btnText: "체지방률 계산하기 →",
        targetSlug: "body-fat-calculator"
      },
      hi: {
        title: "बीएमआई से आगे: अपने शरीर का बॉडी फैट % जानें",
        descPrefix: "मांसपेशियों और वसा के सटीक अनुपात को अमेरिकी नौसेना विधि द्वारा मापने के लिए हमारे",
        linkText: "बॉडी फैट कैलकुलेटर",
        descSuffix: "का उपयोग करें।",
        btnText: "अभी बॉडी फैट प्रतिशत मापें →",
        targetSlug: "body-fat-calculator"
      }
    }
  },
  'bmr-vs-tdee-calculator': {
    targetSlug: 'tdee-calculator',
    relatedSlugs: ['tdee-calculator', 'bmr-calculator', 'calorie-calculator', 'macro-calculator'],
    cta: {
      en: {
        title: "Calculate Your Daily Calorie Burn (TDEE)",
        descPrefix: "Find your exact maintenance calories and safe deficit target using our free",
        linkText: "TDEE Calculator",
        descSuffix: "with Mifflin-St Jeor metabolic equations.",
        btnText: "Calculate Daily TDEE Burn →",
        targetSlug: "tdee-calculator"
      },
      es: {
        title: "Calcula tu Gasto Diario Total (TDEE)",
        descPrefix: "Determina tus calorías de mantenimiento y tu déficit calórico ideal con nuestra",
        linkText: "Calculadora TDEE",
        descSuffix: "gratuita.",
        btnText: "Calcular Gasto Calórico TDEE →",
        targetSlug: "tdee-calculator"
      },
      fr: {
        title: "Calculez Votre Dépense Énergétique (TDEE)",
        descPrefix: "Découvrez vos calories de maintien et votre déficit optimal grâce à notre",
        linkText: "Calculateur de TDEE",
        descSuffix: "gratuit.",
        btnText: "Calculer Ma Dépense Quotidienne →",
        targetSlug: "tdee-calculator"
      },
      de: {
        title: "Berechnen Sie Ihren Gesamtenergieumsatz (TDEE)",
        descPrefix: "Ermitteln Sie Ihre Erhaltungskalorien und Ihr Defizitziel mit unserem kostenlosen",
        linkText: "TDEE-Rechner",
        descSuffix: "auf Basis der Mifflin-St Jeor Formel.",
        btnText: "Jetzt Gesamtumsatz berechnen →",
        targetSlug: "tdee-calculator"
      },
      ko: {
        title: "하루 총 에너지 소비량(TDEE) 계산하기",
        descPrefix: "Mifflin-St Jeor 표준 공식을 통해 유지 칼로리와 다이어트 결손 목표를 무료",
        linkText: "TDEE 계산기",
        descSuffix: "로 산출하세요.",
        btnText: "일일 TDEE 소비 칼로리 계산 →",
        targetSlug: "tdee-calculator"
      },
      hi: {
        title: "अपने दैनिक कैलोरी व्यय (TDEE) की गणना करें",
        descPrefix: "अपने शरीर के मेंटेनेंस कैलोरी और सुरक्षित कैलोरी डेफिसिट का पता लगाने के लिए हमारे",
        linkText: "TDEE कैलकुलेटर",
        descSuffix: "का उपयोग करें।",
        btnText: "दैनिक कैलोरी बर्न निकालें →",
        targetSlug: "tdee-calculator"
      }
    }
  },
  'bmi-chart-for-men-women': {
    targetSlug: 'bmi-chart',
    relatedSlugs: ['bmi-chart', 'bmi-calculator', 'ideal-weight-calculator', 'body-fat-calculator'],
    cta: {
      en: {
        title: "Explore the Complete BMI Reference Chart",
        descPrefix: "View detailed height-weight brackets and classification cutoffs in our interactive",
        linkText: "BMI Chart",
        descSuffix: "for adults of all statures.",
        btnText: "View Interactive BMI Chart →",
        targetSlug: "bmi-chart"
      },
      es: {
        title: "Consulta la Tabla Completa de IMC",
        descPrefix: "Explora los rangos detallados de peso y estatura en nuestra",
        linkText: "Tabla de IMC",
        descSuffix: "interactiva.",
        btnText: "Ver Tabla Interactiva de IMC →",
        targetSlug: "bmi-chart"
      },
      fr: {
        title: "Consultez le Tableau d'IMC Complet",
        descPrefix: "Découvrez les correspondances détaillées taille-poids dans notre",
        linkText: "Tableau d'IMC",
        descSuffix: "interactif.",
        btnText: "Voir le Tableau d'IMC →",
        targetSlug: "bmi-chart"
      },
      de: {
        title: "Vollständige BMI-Tabelle ansehen",
        descPrefix: "Vergleichen Sie Körpergröße und Gewichtsstufen in unserer interaktiven",
        linkText: "BMI-Tabelle",
        descSuffix: "für Erwachsene.",
        btnText: "Interaktive BMI-Tabelle öffnen →",
        targetSlug: "bmi-chart"
      },
      ko: {
        title: "인터랙티브 BMI 판정 차트 확인하기",
        descPrefix: "신장별·체중별 상세 분류 기준표를",
        linkText: "BMI 차트",
        descSuffix: "에서 한눈에 확인하세요.",
        btnText: "BMI 대조 차트 열기 →",
        targetSlug: "bmi-chart"
      },
      hi: {
        title: "संपूर्ण बीएमआई संदर्भ चार्ट देखें",
        descPrefix: "अपनी ऊंचाई और वजन के अनुसार सटीक वर्गीकरण को हमारे इंटरैक्टिव",
        linkText: "बीएमआई चार्ट",
        descSuffix: "पर तुरंत देखें।",
        btnText: "इंटरैक्टिव बीएमआई चार्ट देखें →",
        targetSlug: "bmi-chart"
      }
    }
  },
  'healthy-bmi-range-indians': {
    targetSlug: 'bmi-calculator-for-indians',
    relatedSlugs: ['bmi-calculator-for-indians', 'asian-bmi-calculator', 'waist-to-hip-ratio-calculator', 'ideal-weight-calculator'],
    cta: {
      en: {
        title: "Calculate Your Score on the Indian BMI Scale",
        descPrefix: "Check whether your body mass aligns with the ICMR 18.5–22.9 healthy bracket using our free",
        linkText: "BMI Calculator for Indians",
        descSuffix: ".",
        btnText: "Check Indian BMI Range →",
        targetSlug: "bmi-calculator-for-indians"
      },
      es: {
        title: "Calcula tu Puntuación en la Escala India de IMC",
        descPrefix: "Comprueba si tu peso entra en el rango saludable 18.5–22.9 del ICMR con nuestra",
        linkText: "Calculadora de IMC para India",
        descSuffix: ".",
        btnText: "Verificar Rango Saludable →",
        targetSlug: "bmi-calculator-for-indians"
      },
      fr: {
        title: "Vérifiez Votre IMC selon les Normes de l'Inde",
        descPrefix: "Vérifiez votre positionnement par rapport au seuil de santé 18,5–22,9 de l'ICMR avec notre",
        linkText: "Calculateur d'IMC Inde",
        descSuffix: ".",
        btnText: "Vérifier Mon IMC Indien →",
        targetSlug: "bmi-calculator-for-indians"
      },
      de: {
        title: "Prüfen Sie Ihren BMI nach indischen ICMR-Richtlinien",
        descPrefix: "Stellen Sie fest, ob Ihr Gewicht im gesunden Bereich von 18,5–22,9 liegt, mit unserem",
        linkText: "BMI-Rechner für Indien",
        descSuffix: ".",
        btnText: "Indischen BMI-Bereich prüfen →",
        targetSlug: "bmi-calculator-for-indians"
      },
      ko: {
        title: "ICMR 인도 보건 기준에 맞춘 BMI 판정",
        descPrefix: "18.5~22.9 정상 체중 구간 부합 여부를 무료",
        linkText: "인도 BMI 계산기",
        descSuffix: "로 확인하세요.",
        btnText: "인도 기준 BMI 판정하기 →",
        targetSlug: "bmi-calculator-for-indians"
      },
      hi: {
        title: "आईसीएमआर दिशानिर्देशों पर अपना बीएमआई जांचें",
        descPrefix: "जानिए कि आपका वजन 18.5–22.9 के स्वस्थ ब्रैकेट में है या नहीं, हमारे",
        linkText: "भारतीय बीएमआई कैलकुलेटर",
        descSuffix: "के साथ।",
        btnText: "भारतीय बीएमआई रेंज जांचें →",
        targetSlug: "bmi-calculator-for-indians"
      }
    }
  },
  'bmi-calculator-teens': {
    targetSlug: 'bmi-calculator',
    relatedSlugs: ['bmi-calculator', 'ideal-weight-calculator', 'water-intake-calculator', 'calorie-calculator'],
    cta: {
      en: {
        title: "Calculate Youth & Adult Stature Screening",
        descPrefix: "Screen baseline stature and adult weight-for-height with our free",
        linkText: "BMI Calculator",
        descSuffix: "and explore growth context.",
        btnText: "Calculate Stature BMI →",
        targetSlug: "bmi-calculator"
      },
      es: {
        title: "Calcula el IMC de Estatura",
        descPrefix: "Evalúa el peso para la estatura con nuestra",
        linkText: "Calculadora de IMC",
        descSuffix: "gratuita.",
        btnText: "Calcular IMC de Estatura →",
        targetSlug: "bmi-calculator"
      },
      fr: {
        title: "Évaluez l'Indice de Masse Corporelle",
        descPrefix: "Calculez le rapport taille-poids grâce à notre",
        linkText: "Calculateur d'IMC",
        descSuffix: "gratuit.",
        btnText: "Calculer l'IMC →",
        targetSlug: "bmi-calculator"
      },
      de: {
        title: "Körpermaße & BMI schnell berechnen",
        descPrefix: "Ermitteln Sie das Verhältnis von Größe zu Gewicht mit unserem kostenlosen",
        linkText: "BMI-Rechner",
        descSuffix: ".",
        btnText: "Jetzt BMI berechnen →",
        targetSlug: "bmi-calculator"
      },
      ko: {
        title: "신장 대비 체중 선별 BMI 계산",
        descPrefix: "키와 몸무게의 표준 비율을 무료",
        linkText: "BMI 계산기",
        descSuffix: "로 즉시 확인하세요.",
        btnText: "체질량지수 연산하기 →",
        targetSlug: "bmi-calculator"
      },
      hi: {
        title: "ऊंचाई और वजन के अनुपात का बीएमआई निकालें",
        descPrefix: "शारीरिक अनुपात की जांच के लिए हमारे मुफ़्त",
        linkText: "बीएमआई कैलकुलेटर",
        descSuffix: "का उपयोग करें।",
        btnText: "अभी बीएमआई निकालें →",
        targetSlug: "bmi-calculator"
      }
    }
  },
  'bmi-by-age': {
    targetSlug: 'bmr-calculator',
    relatedSlugs: ['bmr-calculator', 'bmi-calculator', 'bmi-chart', 'ideal-weight-calculator'],
    cta: {
      en: {
        title: "Calculate Age-Adjusted Resting Calorie Burn",
        descPrefix: "Account for age-related metabolic shifts using the Mifflin-St Jeor formula in our free",
        linkText: "BMR Calculator",
        descSuffix: ".",
        btnText: "Calculate Age-Adjusted BMR →",
        targetSlug: "bmr-calculator"
      },
      es: {
        title: "Calcula tu Gasto en Reposo Ajustado por Edad",
        descPrefix: "Ten en cuenta los cambios metabólicos con la fórmula de Mifflin-St Jeor en nuestra",
        linkText: "Calculadora de BMR",
        descSuffix: "gratuita.",
        btnText: "Calcular BMR Ajustado →",
        targetSlug: "bmr-calculator"
      },
      fr: {
        title: "Calculez Votre Métabolisme de Base selon l'Âge",
        descPrefix: "Prenez en compte l'évolution métabolique avec la formule de Mifflin-St Jeor sur notre",
        linkText: "Calculateur de BMR",
        descSuffix: "gratuit.",
        btnText: "Calculer Mon BMR →",
        targetSlug: "bmr-calculator"
      },
      de: {
        title: "Altersangepassten Grundumsatz (BMR) berechnen",
        descPrefix: "Berücksichtigen Sie altersbedingte Stoffwechselveränderungen mit unserem kostenlosen",
        linkText: "BMR-Rechner",
        descSuffix: ".",
        btnText: "Jetzt BMR berechnen →",
        targetSlug: "bmr-calculator"
      },
      ko: {
        title: "연령 맞춤 기초대사량(BMR) 계산하기",
        descPrefix: "연령에 따른 기초 대사율 변화를 반영한 Mifflin-St Jeor 공식의 무료",
        linkText: "기초대사량(BMR) 계산기",
        descSuffix: "를 사용하세요.",
        btnText: "연령별 BMR 계산하기 →",
        targetSlug: "bmr-calculator"
      },
      hi: {
        title: "उम्र के अनुसार बेसल मेटाबॉलिक रेट (BMR) जांचें",
        descPrefix: "उम्र बढ़ने के साथ मेटाबॉलिज्म के बदलावों को सटीक रूप से मापने के लिए हमारे",
        linkText: "BMR कैलकुलेटर",
        descSuffix: "का उपयोग करें।",
        btnText: "उम्र-अनुसार BMR निकालें →",
        targetSlug: "bmr-calculator"
      }
    }
  },
  'bmi-chart': {
    targetSlug: 'bmi-calculator',
    relatedSlugs: ['bmi-calculator', 'bmi-chart', 'ideal-weight-calculator', 'waist-to-hip-ratio-calculator'],
    cta: {
      en: {
        title: "Calculate Your Exact Point on the Chart",
        descPrefix: "Enter your height and weight to calculate your numeric BMI and plot your category instantly with our",
        linkText: "BMI Calculator",
        descSuffix: ".",
        btnText: "Calculate My BMI Number →",
        targetSlug: "bmi-calculator"
      },
      es: {
        title: "Calcula tu Posición Exacta en la Tabla",
        descPrefix: "Introduce tu altura y peso para obtener tu cifra exacta en nuestra",
        linkText: "Calculadora de IMC",
        descSuffix: "gratuita.",
        btnText: "Calcular Mi IMC Ahora →",
        targetSlug: "bmi-calculator"
      },
      fr: {
        title: "Trouvez Votre Position sur le Graphique d'IMC",
        descPrefix: "Indiquez votre taille et poids pour obtenir votre indice précis avec notre",
        linkText: "Calculateur d'IMC",
        descSuffix: "gratuit.",
        btnText: "Calculer Mon Indice IMC →",
        targetSlug: "bmi-calculator"
      },
      de: {
        title: "Finden Sie Ihren genauen Punkt in der Skala",
        descPrefix: "Geben Sie Größe und Gewicht ein und berechnen Sie Ihren Wert mit unserem kostenlosen",
        linkText: "BMI-Rechner",
        descSuffix: ".",
        btnText: "Jetzt Meinen BMI Berechnen →",
        targetSlug: "bmi-calculator"
      },
      ko: {
        title: "차트 상의 정확한 내 BMI 수치 계산",
        descPrefix: "신장과 체중을 입력하여 해당 체중 구간을 무료",
        linkText: "BMI 계산기",
        descSuffix: "로 확인하세요.",
        btnText: "내 BMI 수치 계산하기 →",
        targetSlug: "bmi-calculator"
      },
      hi: {
        title: "चार्ट पर अपना सटीक बीएमआई स्कोर जांचें",
        descPrefix: "अपनी ऊंचाई और वजन दर्ज करके अपने वर्गीकरण का तुरंत पता लगाने के लिए हमारे",
        linkText: "बीएमआई कैलकुलेटर",
        descSuffix: "का उपयोग करें।",
        btnText: "मेरा बीएमआई स्कोर निकालें →",
        targetSlug: "bmi-calculator"
      }
    }
  },
  'healthy-weight-chart': {
    targetSlug: 'ideal-weight-calculator',
    relatedSlugs: ['ideal-weight-calculator', 'bmi-calculator', 'lean-body-mass-calculator', 'body-fat-calculator'],
    cta: {
      en: {
        title: "Calculate Your Ideal Body Weight Range",
        descPrefix: "Compare historical medical formulas (Devine, Robinson, Miller) to find your target weight in our free",
        linkText: "Ideal Weight Calculator",
        descSuffix: ".",
        btnText: "Find My Ideal Weight Range →",
        targetSlug: "ideal-weight-calculator"
      },
      es: {
        title: "Calcula tu Rango de Peso Ideal",
        descPrefix: "Compara fórmulas médicas clásicas (Devine, Robinson) con nuestra",
        linkText: "Calculadora de Peso Ideal",
        descSuffix: "gratuita.",
        btnText: "Calcular Rango de Peso Ideal →",
        targetSlug: "ideal-weight-calculator"
      },
      fr: {
        title: "Calculez Votre Poids Idéal Théorique",
        descPrefix: "Comparez les formules de référence (Devine, Robinson) grâce à notre",
        linkText: "Calculateur de Poids Idéal",
        descSuffix: "gratuit.",
        btnText: "Calculer Mon Poids Idéal →",
        targetSlug: "ideal-weight-calculator"
      },
      de: {
        title: "Berechnen Sie Ihr Idealgewicht nach Formeln",
        descPrefix: "Vergleichen Sie etablierte Berechnungsverfahren (Devine, Robinson) mit unserem kostenlosen",
        linkText: "Idealgewicht-Rechner",
        descSuffix: ".",
        btnText: "Idealgewicht jetzt berechnen →",
        targetSlug: "ideal-weight-calculator"
      },
      ko: {
        title: "의학 공식 기반 이상적 건강 체중 계산",
        descPrefix: "Devine, Robinson 등 임상 표준 공식을 비교하여 적정 체중 구간을 무료",
        linkText: "적정 체중(표준 체중) 계산기",
        descSuffix: "로 확인하세요.",
        btnText: "내 적정 체중 확인하기 →",
        targetSlug: "ideal-weight-calculator"
      },
      hi: {
        title: "अपना आदर्श शारीरिक वजन (Ideal Weight) जानें",
        descPrefix: "डिवाइन और रॉबिन्सन जैसे स्थापित चिकित्सा सूत्रों के आधार पर अपना लक्ष्य वजन हमारे",
        linkText: "आदर्श वजन कैलकुलेटर",
        descSuffix: "से निकालें।",
        btnText: "मेरा आदर्श वजन खोजें →",
        targetSlug: "ideal-weight-calculator"
      }
    }
  },
  'bmi-vs-body-fat': {
    targetSlug: 'body-fat-calculator',
    relatedSlugs: ['body-fat-calculator', 'lean-body-mass-calculator', 'waist-to-hip-ratio-calculator', 'bmi-calculator'],
    cta: {
      en: {
        title: "Estimate Your Body Fat Percentage",
        descPrefix: "Use tape measurements with the US Navy formula to calculate your body fat percentage in our free",
        linkText: "Body Fat Calculator",
        descSuffix: ".",
        btnText: "Calculate Body Fat % Now →",
        targetSlug: "body-fat-calculator"
      },
      es: {
        title: "Calcula tu Porcentaje de Grasa Corporal",
        descPrefix: "Aplica las medidas de perímetro corporal y la fórmula de la Marina en nuestra",
        linkText: "Calculadora de Grasa Corporal",
        descSuffix: "gratuita.",
        btnText: "Calcular Grasa Corporal →",
        targetSlug: "body-fat-calculator"
      },
      fr: {
        title: "Calculez Votre Pourcentage de Graisse",
        descPrefix: "Utilisez vos mensurations et la formule de l'US Navy sur notre",
        linkText: "Calculateur de Graisse Corporelle",
        descSuffix: "gratuit.",
        btnText: "Calculer Ma Graisse Corporelle →",
        targetSlug: "body-fat-calculator"
      },
      de: {
        title: "Ermitteln Sie Ihren Körperfettanteil",
        descPrefix: "Nutzen Sie Ihre Umfangsmaße und die US-Navy-Formel in unserem kostenlosen",
        linkText: "Körperfettrechner",
        descSuffix: ".",
        btnText: "Jetzt Körperfettanteil berechnen →",
        targetSlug: "body-fat-calculator"
      },
      ko: {
        title: "미 해군 공식 체지방률(%) 측정하기",
        descPrefix: "줄자 둘레 측정을 통해 체지방 비율을 정확히 산출하는 무료",
        linkText: "체지방 계산기",
        descSuffix: "를 이용해보세요.",
        btnText: "체지방률 연산하기 →",
        targetSlug: "body-fat-calculator"
      },
      hi: {
        title: "अपने शरीर का वसा प्रतिशत (Body Fat %) निकालें",
        descPrefix: "फीते की माप और अमेरिकी नौसेना सूत्र के आधार पर अपने बॉडी फैट प्रतिशत को हमारे",
        linkText: "बॉडी फैट कैलकुलेटर",
        descSuffix: "से मापें।",
        btnText: "बॉडी फैट % मापें →",
        targetSlug: "body-fat-calculator"
      }
    }
  }
,
  'how-to-measure-body-fat-percentage': {
    targetSlug: 'body-fat-calculator',
    relatedSlugs: ['body-fat-calculator', 'lean-body-mass-calculator', 'waist-to-hip-ratio-calculator', 'bmi-calculator'],
    cta: {
      en: {
        title: "Calculate Your Body Fat Percentage",
        descPrefix: "Estimate your body fat and lean mass using the US Navy circumference method with our free",
        linkText: "Body Fat Calculator",
        descSuffix: "for instant feedback.",
        btnText: "Calculate Body Fat Now →",
        targetSlug: "body-fat-calculator"
      },
      es: {
        title: "Calcula tu Porcentaje de Grasa Corporal",
        descPrefix: "Estima tu grasa corporal con el método de la Marina usando nuestra",
        linkText: "Calculadora de Grasa Corporal",
        descSuffix: "gratuita.",
        btnText: "Calcular Grasa Corporal →",
        targetSlug: "body-fat-calculator"
      },
      fr: {
        title: "Calculez Votre Taux de Masse Grasse",
        descPrefix: "Estimez votre pourcentage adipeux avec la méthode US Navy sur notre",
        linkText: "Calculateur de Masse Grasse",
        descSuffix: "gratuit.",
        btnText: "Calculer Ma Masse Grasse →",
        targetSlug: "body-fat-calculator"
      },
      de: {
        title: "Berechnen Sie Ihren Körperfettanteil",
        descPrefix: "Ermitteln Sie Fett- und Magermasse nach der US-Navy-Methode mit unserem",
        linkText: "Körperfettrechner",
        descSuffix: "online.",
        btnText: "Jetzt Körperfett berechnen →",
        targetSlug: "body-fat-calculator"
      },
      ko: {
        title: "체지방률 정밀 계산하기",
        descPrefix: "미 해군 둘레 공식을 활용하여 체지방률을 측정하는",
        linkText: "체지방률 계산기",
        descSuffix: "로 확인하세요.",
        btnText: "체지방률 계산하기 →",
        targetSlug: "body-fat-calculator"
      },
      hi: {
        title: "अपना बॉडी फैट प्रतिशत जांचें",
        descPrefix: "यूएस नेवी फॉर्मूले के आधार पर शरीर की चर्बी मापने के लिए हमारे",
        linkText: "बॉडी फैट कैलकुलेटर",
        descSuffix: "का उपयोग करें।",
        btnText: "बॉडी फैट निकालें →",
        targetSlug: "body-fat-calculator"
      }
    }
  },
  'lean-body-mass-calculation-guide': {
    targetSlug: 'lean-body-mass-calculator',
    relatedSlugs: ['lean-body-mass-calculator', 'body-fat-calculator', 'ideal-weight-calculator', 'protein-intake-calculator'],
    cta: {
      en: {
        title: "Calculate Your Lean Body Mass",
        descPrefix: "Determine your fat-free skeletal muscle and organ weight with our free",
        linkText: "Lean Body Mass Calculator",
        descSuffix: "using Boer and James formulas.",
        btnText: "Calculate Lean Mass Now →",
        targetSlug: "lean-body-mass-calculator"
      },
      es: {
        title: "Calcula tu Masa Corporal Magra",
        descPrefix: "Determina tus kilos libres de grasa con nuestra",
        linkText: "Calculadora de Masa Magra",
        descSuffix: "usando las fórmulas de Boer y James.",
        btnText: "Calcular Masa Magra →",
        targetSlug: "lean-body-mass-calculator"
      },
      fr: {
        title: "Calculez Votre Masse Corporelle Maigre",
        descPrefix: "Évaluez votre masse musculaire et osseuse hors graisse avec notre",
        linkText: "Calculateur de Masse Maigre",
        descSuffix: "médical.",
        btnText: "Calculer Ma Masse Maigre →",
        targetSlug: "lean-body-mass-calculator"
      },
      de: {
        title: "Berechnen Sie Ihre fettfreie Magermasse",
        descPrefix: "Ermitteln Sie Muskel- und Skelettgewicht mit unserem",
        linkText: "Magermasse-Rechner",
        descSuffix: "nach Boer und James.",
        btnText: "Jetzt Magermasse berechnen →",
        targetSlug: "lean-body-mass-calculator"
      },
      ko: {
        title: "제지방량(LBM) 계산하기",
        descPrefix: "체지방을 제외한 순수 골격근 및 제지방량을",
        linkText: "제지방량 계산기",
        descSuffix: "로 정밀 측정하세요.",
        btnText: "제지방량 계산하기 →",
        targetSlug: "lean-body-mass-calculator"
      },
      hi: {
        title: "लीन बॉडी मास (LBM) की गणना करें",
        descPrefix: "चर्बी रहित मांसपेशियों और शारीरिक वजन की गणना के लिए हमारे",
        linkText: "लीन बॉडी मास कैलकुलेटर",
        descSuffix: "का प्रयोग करें।",
        btnText: "लीन मास निकालें →",
        targetSlug: "lean-body-mass-calculator"
      }
    }
  },
  'waist-to-hip-ratio-guide': {
    targetSlug: 'waist-to-hip-ratio-calculator',
    relatedSlugs: ['waist-to-hip-ratio-calculator', 'body-fat-calculator', 'bmi-calculator', 'asian-bmi-calculator'],
    cta: {
      en: {
        title: "Calculate Your Waist-to-Hip Ratio",
        descPrefix: "Evaluate your central visceral fat distribution and cardiovascular risk using our free",
        linkText: "Waist-to-Hip Ratio Calculator",
        descSuffix: "in seconds.",
        btnText: "Calculate WHR Now →",
        targetSlug: "waist-to-hip-ratio-calculator"
      },
      es: {
        title: "Calcula tu Relación Cintura-Cadera",
        descPrefix: "Evalúa tu distribución de grasa visceral y riesgo cardiovascular con nuestra",
        linkText: "Calculadora Cintura-Cadera",
        descSuffix: "gratuita.",
        btnText: "Calcular Índice Cintura-Cadera →",
        targetSlug: "waist-to-hip-ratio-calculator"
      },
      fr: {
        title: "Calculez Votre Rapport Taille-Hanches",
        descPrefix: "Mesurez la répartition de votre graisse abdominale avec notre",
        linkText: "Calculateur Taille-Hanches",
        descSuffix: "conforme aux normes OMS.",
        btnText: "Calculer Mon Rapport RTH →",
        targetSlug: "waist-to-hip-ratio-calculator"
      },
      de: {
        title: "Taille-Hüft-Verhältnis (WHR) berechnen",
        descPrefix: "Erkennen Sie viszerales Bauchfett und Herz-Kreislauf-Risiken mit unserem",
        linkText: "Taille-Hüft-Rechner",
        descSuffix: "sofort.",
        btnText: "Jetzt WHR berechnen →",
        targetSlug: "waist-to-hip-ratio-calculator"
      },
      ko: {
        title: "허리-엉덩이 비율(WHR) 계산하기",
        descPrefix: "복부 내장 비만과 심혈관 대사 위험도를 평가하는",
        linkText: "허리-엉덩이 비율 계산기",
        descSuffix: "를 이용해 보세요.",
        btnText: "WHR 비율 계산하기 →",
        targetSlug: "waist-to-hip-ratio-calculator"
      },
      hi: {
        title: "कमर और कूल्हे का अनुपात (WHR) निकालें",
        descPrefix: "पेट की आंतरिक चर्बी और हृदय स्वास्थ्य जोखिम जांचने के लिए हमारे",
        linkText: "कमर-कूल्हा अनुपात कैलकुलेटर",
        descSuffix: "का उपयोग करें।",
        btnText: "WHR अनुपात निकालें →",
        targetSlug: "waist-to-hip-ratio-calculator"
      }
    }
  },
  'ideal-body-weight-formulas': {
    targetSlug: 'ideal-weight-calculator',
    relatedSlugs: ['ideal-weight-calculator', 'healthy-weight-by-height', 'bmi-calculator', 'lean-body-mass-calculator'],
    cta: {
      en: {
        title: "Calculate Your Ideal Body Weight",
        descPrefix: "Compare Devine, Robinson, Miller, and Hamwi equations with our free",
        linkText: "Ideal Weight Calculator",
        descSuffix: "for your height and gender.",
        btnText: "Calculate Ideal Weight →",
        targetSlug: "ideal-weight-calculator"
      },
      es: {
        title: "Calcula tu Peso Corporal Ideal",
        descPrefix: "Compara las fórmulas de Devine, Robinson y Miller con nuestra",
        linkText: "Calculadora de Peso Ideal",
        descSuffix: "médica.",
        btnText: "Calcular Peso Ideal →",
        targetSlug: "ideal-weight-calculator"
      },
      fr: {
        title: "Calculez Votre Poids Idéal Santé",
        descPrefix: "Comparez les équations de Devine, Robinson et Hamwi avec notre",
        linkText: "Calculateur de Poids Idéal",
        descSuffix: "gratuit.",
        btnText: "Calculer Mon Poids Idéal →",
        targetSlug: "ideal-weight-calculator"
      },
      de: {
        title: "Berechnen Sie Ihr Idealgewicht",
        descPrefix: "Vergleichen Sie die Formeln von Devine, Robinson und Miller mit unserem",
        linkText: "Idealgewichts-Rechner",
        descSuffix: "für Ihre Größe.",
        btnText: "Jetzt Idealgewicht berechnen →",
        targetSlug: "ideal-weight-calculator"
      },
      ko: {
        title: "신장별 이상 체중(IBW) 산출하기",
        descPrefix: "드바인, 로빈슨, 밀러 임상 공식을 비교 분석하는",
        linkText: "이상 체중 계산기",
        descSuffix: "를 사용하세요.",
        btnText: "이상 체중 확인하기 →",
        targetSlug: "ideal-weight-calculator"
      },
      hi: {
        title: "अपना आदर्श शारीरिक वजन (IBW) जानें",
        descPrefix: "डिवाइन, रॉबिन्सन और मिलर सूत्रों द्वारा सही वजन निकालने के लिए हमारे",
        linkText: "आदर्श वजन कैलकुलेटर",
        descSuffix: "का उपयोग करें।",
        btnText: "आदर्श वजन निकालें →",
        targetSlug: "ideal-weight-calculator"
      }
    }
  },
  'how-to-calculate-tdee': {
    targetSlug: 'tdee-calculator',
    relatedSlugs: ['tdee-calculator', 'bmr-calculator', 'calorie-calculator', 'maintenance-calorie-calculator'],
    cta: {
      en: {
        title: "Calculate Your Daily Energy Expenditure",
        descPrefix: "Determine your maintenance calories based on your activity multiplier with our free",
        linkText: "TDEE Calculator",
        descSuffix: "today.",
        btnText: "Calculate TDEE Now →",
        targetSlug: "tdee-calculator"
      },
      es: {
        title: "Calcula tu Gasto Energético Total (TDEE)",
        descPrefix: "Determina tus calorías diarias de mantenimiento con nuestra",
        linkText: "Calculadora de TDEE",
        descSuffix: "personalizada.",
        btnText: "Calcular TDEE Ahora →",
        targetSlug: "tdee-calculator"
      },
      fr: {
        title: "Calculez Votre Dépense Énergétique Totale",
        descPrefix: "Trouvez vos calories de maintien selon votre niveau d'activité avec notre",
        linkText: "Calculateur TDEE",
        descSuffix: "en ligne.",
        btnText: "Calculer Mon TDEE →",
        targetSlug: "tdee-calculator"
      },
      de: {
        title: "Ermitteln Sie Ihren Gesamtumsatz (TDEE)",
        descPrefix: "Berechnen Sie Ihre täglichen Erhaltungskalorien mit unserem",
        linkText: "TDEE-Rechner",
        descSuffix: "präzise.",
        btnText: "Jetzt TDEE berechnen →",
        targetSlug: "tdee-calculator"
      },
      ko: {
        title: "일일 총 에너지 소비량(TDEE) 계산하기",
        descPrefix: "신체 활동 수준에 맞춘 유지 칼로리를 산출하는",
        linkText: "TDEE 계산기",
        descSuffix: "로 최적 식단을 계획하세요.",
        btnText: "TDEE 계산하기 →",
        targetSlug: "tdee-calculator"
      },
      hi: {
        title: "दैनिक ऊर्जा व्यय (TDEE) की गणना करें",
        descPrefix: "अपनी शारीरिक गतिविधि के अनुसार मेंटेनेंस कैलोरी जानने के लिए हमारे",
        linkText: "टीडीईई कैलकुलेटर",
        descSuffix: "का उपयोग करें।",
        btnText: "TDEE निकालें →",
        targetSlug: "tdee-calculator"
      }
    }
  },
  'bmr-formulas-mifflin-vs-harris-benedict': {
    targetSlug: 'bmr-calculator',
    relatedSlugs: ['bmr-calculator', 'tdee-calculator', 'calorie-calculator', 'lean-body-mass-calculator'],
    cta: {
      en: {
        title: "Calculate Your Basal Metabolic Rate",
        descPrefix: "Compare Mifflin-St Jeor and Harris-Benedict baseline metabolic burn with our free",
        linkText: "BMR Calculator",
        descSuffix: "for exact calories.",
        btnText: "Calculate BMR Now →",
        targetSlug: "bmr-calculator"
      },
      es: {
        title: "Calcula tu Tasa Metabólica Basal (TMB)",
        descPrefix: "Compara las fórmulas de Mifflin-St Jeor y Harris-Benedict con nuestra",
        linkText: "Calculadora de TMB",
        descSuffix: "gratuita.",
        btnText: "Calcular TMB →",
        targetSlug: "bmr-calculator"
      },
      fr: {
        title: "Calculez Votre Métabolisme de Base (BMR)",
        descPrefix: "Comparez les équations de Mifflin et Harris-Benedict grâce à notre",
        linkText: "Calculateur de BMR",
        descSuffix: "rapide.",
        btnText: "Calculer Mon BMR →",
        targetSlug: "bmr-calculator"
      },
      de: {
        title: "Berechnen Sie Ihren Grundumsatz (BMR)",
        descPrefix: "Vergleichen Sie die Mifflin-St-Jeor- und Harris-Benedict-Formel mit unserem",
        linkText: "BMR-Rechner",
        descSuffix: "sofort.",
        btnText: "Jetzt BMR berechnen →",
        targetSlug: "bmr-calculator"
      },
      ko: {
        title: "기초대사량(BMR) 비교 산출하기",
        descPrefix: "미플린-세인트 지어 및 해리스-베네딕트 공식으로",
        linkText: "기초대사량 계산기",
        descSuffix: "에서 정확한 칼로리를 확인하세요.",
        btnText: "기초대사량 계산하기 →",
        targetSlug: "bmr-calculator"
      },
      hi: {
        title: "बेसल मेटाबॉलिक रेट (BMR) निकालें",
        descPrefix: "मिफ्लिन और हैरिस-बेनेडिक्ट सूत्रों द्वारा न्यूनतम कैलोरी खपत जानने के लिए हमारे",
        linkText: "बीएमआर कैलकुलेटर",
        descSuffix: "का उपयोग करें।",
        btnText: "BMR निकालें →",
        targetSlug: "bmr-calculator"
      }
    }
  },
  'healthy-calorie-deficit-guide': {
    targetSlug: 'calorie-calculator',
    relatedSlugs: ['calorie-calculator', 'tdee-calculator', 'maintenance-calorie-calculator', 'macro-calculator'],
    cta: {
      en: {
        title: "Calculate Your Target Daily Caloric Deficit",
        descPrefix: "Plan safe and sustainable fat loss targets with our evidence-based",
        linkText: "Calorie Calculator",
        descSuffix: "tailored to your goals.",
        btnText: "Calculate Calories Now →",
        targetSlug: "calorie-calculator"
      },
      es: {
        title: "Calcula tus Calorías para Perder Grasa",
        descPrefix: "Diseña un déficit calórico seguro y sostenible con nuestra",
        linkText: "Calculadora de Calorías",
        descSuffix: "personalizada.",
        btnText: "Calcular Déficit Calórico →",
        targetSlug: "calorie-calculator"
      },
      fr: {
        title: "Calculez Vos Besoins Caloriques Journaliers",
        descPrefix: "Définissez un déficit calorique sain et progressif avec notre",
        linkText: "Calculateur de Calories",
        descSuffix: "gratuit.",
        btnText: "Calculer Mes Calories →",
        targetSlug: "calorie-calculator"
      },
      de: {
        title: "Berechnen Sie Ihr optimales Kaloriendefizit",
        descPrefix: "Planen Sie einen gesunden und nachhaltigen Fettabbau mit unserem",
        linkText: "Kalorienrechner",
        descSuffix: "online.",
        btnText: "Jetzt Kalorienbedarf berechnen →",
        targetSlug: "calorie-calculator"
      },
      ko: {
        title: "감량 목표 칼로리 적자 계산하기",
        descPrefix: "요요 현상 없는 지속 가능한 감량 식단을 위한",
        linkText: "칼로리 계산기",
        descSuffix: "를 통해 일일 섭취량을 설정하세요.",
        btnText: "칼로리 계산하기 →",
        targetSlug: "calorie-calculator"
      },
      hi: {
        title: "दैनिक कैलोरी डेफिसिट लक्ष्य तय करें",
        descPrefix: "सुरक्षित और टिकाऊ वजन घटाने के लिए सही कैलोरी जानने के लिए हमारे",
        linkText: "कैलोरी कैलकुलेटर",
        descSuffix: "का उपयोग करें।",
        btnText: "कैलोरी लक्ष्य निकालें →",
        targetSlug: "calorie-calculator"
      }
    }
  },
  'daily-protein-intake-science': {
    targetSlug: 'protein-intake-calculator',
    relatedSlugs: ['protein-intake-calculator', 'macro-calculator', 'lean-body-mass-calculator', 'calorie-calculator'],
    cta: {
      en: {
        title: "Calculate Your Optimal Daily Protein Target",
        descPrefix: "Determine exact protein grams for muscle growth, fat loss, or healthy aging with our free",
        linkText: "Protein Intake Calculator",
        descSuffix: "in seconds.",
        btnText: "Calculate Protein Now →",
        targetSlug: "protein-intake-calculator"
      },
      es: {
        title: "Calcula tu Ingesta Óptima de Proteína Diaria",
        descPrefix: "Determina tus gramos exactos de proteína para preservar masa muscular con nuestra",
        linkText: "Calculadora de Proteínas",
        descSuffix: "gratuita.",
        btnText: "Calcular Proteína Diaria →",
        targetSlug: "protein-intake-calculator"
      },
      fr: {
        title: "Calculez Vos Besoins Quotidiens en Protéines",
        descPrefix: "Déterminez votre grammage idéal de protéines pour la synthèse musculaire avec notre",
        linkText: "Calculateur de Protéines",
        descSuffix: "gratuit.",
        btnText: "Calculer Mes Protéines →",
        targetSlug: "protein-intake-calculator"
      },
      de: {
        title: "Berechnen Sie Ihren täglichen Proteinbedarf",
        descPrefix: "Ermitteln Sie Ihre optimale Grammzahl für Muskelaufbau und Fettabbau mit unserem",
        linkText: "Protein-Rechner",
        descSuffix: "sofort.",
        btnText: "Jetzt Proteinbedarf berechnen →",
        targetSlug: "protein-intake-calculator"
      },
      ko: {
        title: "일일 단백질 최적 섭취량 계산하기",
        descPrefix: "체중 및 운동 목표에 맞춘 단백질 필요량을",
        linkText: "단백질 계산기",
        descSuffix: "로 정밀 산출하세요.",
        btnText: "단백질 섭취량 계산하기 →",
        targetSlug: "protein-intake-calculator"
      },
      hi: {
        title: "दैनिक प्रोटीन की सही मात्रा निकालें",
        descPrefix: "मांसपेशियों की मजबूती और वजन प्रबंधन के लिए सही ग्राम जानने के लिए हमारे",
        linkText: "प्रोटीन कैलकुलेटर",
        descSuffix: "का प्रयोग करें।",
        btnText: "प्रोटीन की मात्रा जानें →",
        targetSlug: "protein-intake-calculator"
      }
    }
  },
  'macro-split-calculator-guide': {
    targetSlug: 'macro-calculator',
    relatedSlugs: ['macro-calculator', 'protein-intake-calculator', 'calorie-calculator', 'tdee-calculator'],
    cta: {
      en: {
        title: "Calculate Your Personalized Macro Split",
        descPrefix: "Balance protein, carbohydrates, and healthy fats tailored to your caloric goals with our free",
        linkText: "Macro Calculator",
        descSuffix: "today.",
        btnText: "Calculate Macros Now →",
        targetSlug: "macro-calculator"
      },
      es: {
        title: "Calcula tu Reparto de Macronutrientes",
        descPrefix: "Distribuye tus proteínas, carbohidratos y grasas con nuestra",
        linkText: "Calculadora de Macros",
        descSuffix: "personalizada.",
        btnText: "Calcular Macronutrientes →",
        targetSlug: "macro-calculator"
      },
      fr: {
        title: "Calculez Votre Répartition de Macronutriments",
        descPrefix: "Équilibrez vos protéines, glucides et lipides selon vos objectifs avec notre",
        linkText: "Calculateur de Macros",
        descSuffix: "en ligne.",
        btnText: "Calculer Mes Macros →",
        targetSlug: "macro-calculator"
      },
      de: {
        title: "Berechnen Sie Ihre Makronährstoff-Verteilung",
        descPrefix: "Optimieren Sie Ihre Grammzahlen für Protein, Carbs und Fett mit unserem",
        linkText: "Makro-Rechner",
        descSuffix: "für jedes Fitnessziel.",
        btnText: "Jetzt Makros berechnen →",
        targetSlug: "macro-calculator"
      },
      ko: {
        title: "맞춤 매크로 영양소 비율 계산하기",
        descPrefix: "단백질, 탄수화물, 지방의 그램 수를 목표별로 배분하는",
        linkText: "매크로 계산기",
        descSuffix: "로 최적 식단을 완성하세요.",
        btnText: "매크로 비율 계산하기 →",
        targetSlug: "macro-calculator"
      },
      hi: {
        title: "मैक्रोन्यूट्रिएंट्स (प्रोटीन, कार्ब्स, फैट) का सही अनुपात निकालें",
        descPrefix: "अपने दैनिक कैलोरी लक्ष्य के अनुसार पोषण के सही विभाजन के लिए हमारे",
        linkText: "मैक्रो कैलकुलेटर",
        descSuffix: "का उपयोग करें।",
        btnText: "मैक्रो अनुपात निकालें →",
        targetSlug: "macro-calculator"
      }
    }
  },
  'daily-water-intake-guide': {
    targetSlug: 'water-intake-calculator',
    relatedSlugs: ['water-intake-calculator', 'tdee-calculator', 'body-surface-area-calculator', 'calorie-calculator'],
    cta: {
      en: {
        title: "Calculate Your Daily Water Intake Target",
        descPrefix: "Determine clinical fluid needs based on body weight, climate, and exercise with our free",
        linkText: "Water Intake Calculator",
        descSuffix: "in seconds.",
        btnText: "Calculate Water Intake →",
        targetSlug: "water-intake-calculator"
      },
      es: {
        title: "Calcula tu Ingesta de Agua Diaria",
        descPrefix: "Calcula los litros exactos de fluidos que tu cuerpo necesita con nuestra",
        linkText: "Calculadora de Agua",
        descSuffix: "científica.",
        btnText: "Calcular Consumo de Agua →",
        targetSlug: "water-intake-calculator"
      },
      fr: {
        title: "Calculez Vos Besoins Journaliers en Eau",
        descPrefix: "Estimez votre volume d'hydratation optimal selon votre poids et activité avec notre",
        linkText: "Calculateur d'Eau",
        descSuffix: "gratuit.",
        btnText: "Calculer Mon Eau Quotidienne →",
        targetSlug: "water-intake-calculator"
      },
      de: {
        title: "Berechnen Sie Ihren täglichen Wasserbedarf",
        descPrefix: "Ermitteln Sie Ihre empfohlene Trinkmenge basierend auf Gewicht und Sport mit unserem",
        linkText: "Wasserbedarfsrechner",
        descSuffix: "online.",
        btnText: "Jetzt Wasserbedarf berechnen →",
        targetSlug: "water-intake-calculator"
      },
      ko: {
        title: "체중 맞춤 일일 수분 권장량 계산하기",
        descPrefix: "신체 무게와 운동량에 맞춘 하루 최적 음용량을",
        linkText: "수분 섭취 계산기",
        descSuffix: "에서 즉시 산출하세요.",
        btnText: "수분 섭취량 계산하기 →",
        targetSlug: "water-intake-calculator"
      },
      hi: {
        title: "प्रतिदिन पानी की सही मात्रा जानें",
        descPrefix: "वजन और व्यायाम के अनुसार दैनिक जल आवश्यकता निकालने के लिए हमारे",
        linkText: "वाटर इनटेक कैलकुलेटर",
        descSuffix: "का उपयोग करें।",
        btnText: "पानी की मात्रा निकालें →",
        targetSlug: "water-intake-calculator"
      }
    }
  },
  'body-surface-area-mosteller-guide': {
    targetSlug: 'body-surface-area-calculator',
    relatedSlugs: ['body-surface-area-calculator', 'bmi-calculator', 'lean-body-mass-calculator', 'ideal-weight-calculator'],
    cta: {
      en: {
        title: "Calculate Your Body Surface Area (BSA)",
        descPrefix: "Compute skin surface area using Mosteller and Du Bois formulas with our free",
        linkText: "Body Surface Area Calculator",
        descSuffix: "for clinical precision.",
        btnText: "Calculate BSA Now →",
        targetSlug: "body-surface-area-calculator"
      },
      es: {
        title: "Calcula tu Superficie Corporal (BSA)",
        descPrefix: "Calcula el área total de tu piel con las fórmulas de Mosteller y Du Bois en nuestra",
        linkText: "Calculadora de Superficie Corporal",
        descSuffix: "médica.",
        btnText: "Calcular Superficie Corporal →",
        targetSlug: "body-surface-area-calculator"
      },
      fr: {
        title: "Calculez Votre Surface Corporelle (BSA)",
        descPrefix: "Déterminez votre surface cutanée totale selon Mosteller et Du Bois avec notre",
        linkText: "Calculateur de Surface Corporelle",
        descSuffix: "clinique.",
        btnText: "Calculer Ma Surface Corporelle →",
        targetSlug: "body-surface-area-calculator"
      },
      de: {
        title: "Berechnen Sie Ihre Körperoberfläche (BSA)",
        descPrefix: "Ermitteln Sie Ihre Hautoberfläche nach Mosteller und Du Bois mit unserem",
        linkText: "Körperoberflächen-Rechner",
        descSuffix: "präzise.",
        btnText: "Jetzt BSA berechnen →",
        targetSlug: "body-surface-area-calculator"
      },
      ko: {
        title: "체표면적(BSA) 정밀 계산하기",
        descPrefix: "Mosteller 및 Du Bois 의학 공식을 활용한",
        linkText: "체표면적 계산기",
        descSuffix: "로 신체 표면적을 산출하세요.",
        btnText: "체표면적 계산하기 →",
        targetSlug: "body-surface-area-calculator"
      },
      hi: {
        title: "बॉडी सरफेस एरिया (BSA) निकालें",
        descPrefix: "मोस्टेलर और डू बॉइस क्लिनिकल सूत्रों द्वारा शरीर की सतह मापने के लिए हमारे",
        linkText: "बॉडी सरफेस एरिया कैलकुलेटर",
        descSuffix: "का उपयोग करें।",
        btnText: "BSA निकालें →",
        targetSlug: "body-surface-area-calculator"
      }
    }
  },
  'target-heart-rate-training-zones': {
    targetSlug: 'heart-rate-zone-calculator',
    relatedSlugs: ['heart-rate-zone-calculator', 'karvonen-heart-rate-calculator', 'tdee-calculator', '1rm-calculator'],
    cta: {
      en: {
        title: "Calculate Your Target Heart Rate Zones",
        descPrefix: "Determine your Zone 2 aerobic and lactate threshold training intensities with our free",
        linkText: "Heart Rate Zone Calculator",
        descSuffix: "today.",
        btnText: "Calculate Heart Rate Zones →",
        targetSlug: "heart-rate-zone-calculator"
      },
      es: {
        title: "Calcula tus Zonas de Frecuencia Cardíaca",
        descPrefix: "Establece tus intensidades aeróbicas de Zona 2 y umbral anaeróbico con nuestra",
        linkText: "Calculadora de Zonas Cardíacas",
        descSuffix: "gratuita.",
        btnText: "Calcular Zonas de Pulso →",
        targetSlug: "heart-rate-zone-calculator"
      },
      fr: {
        title: "Calculez Vos Zones Cibles d'Entraînement",
        descPrefix: "Déterminez votre Zone 2 d'endurance fondamentale et votre seuil lactique avec notre",
        linkText: "Calculateur de Zones Cardiaques",
        descSuffix: "en ligne.",
        btnText: "Calculer Mes Zones Cardiaques →",
        targetSlug: "heart-rate-zone-calculator"
      },
      de: {
        title: "Berechnen Sie Ihre Herzfrequenz-Zonen",
        descPrefix: "Bestimmen Sie Ihre aeroben Grundlagenausdauer-Zonen mit unserem",
        linkText: "Herzfrequenzzonen-Rechner",
        descSuffix: "sofort.",
        btnText: "Jetzt Pulszonen berechnen →",
        targetSlug: "heart-rate-zone-calculator"
      },
      ko: {
        title: "목표 심박수 5대 트레이닝 구간 계산하기",
        descPrefix: "지방 연소 Zone 2부터 젖산 역치 구간까지",
        linkText: "심박수 구간 계산기",
        descSuffix: "로 최적 유산소 훈련 강도를 확인하세요.",
        btnText: "심박수 구간 계산하기 →",
        targetSlug: "heart-rate-zone-calculator"
      },
      hi: {
        title: "टारगेट हार्ट रेट जोन की गणना करें",
        descPrefix: "फैट बर्निंग और स्टैमिना बढ़ाने के लिए एरोबिक जोन 2 निकालने के लिए हमारे",
        linkText: "हार्ट रेट जोन कैलकुलेटर",
        descSuffix: "का उपयोग करें।",
        btnText: "हार्ट रेट जोन निकालें →",
        targetSlug: "heart-rate-zone-calculator"
      }
    }
  },
  'one-rep-max-strength-guide': {
    targetSlug: '1rm-calculator',
    relatedSlugs: ['1rm-calculator', 'heart-rate-zone-calculator', 'lean-body-mass-calculator', 'protein-intake-calculator'],
    cta: {
      en: {
        title: "Calculate Your One Rep Max (1RM)",
        descPrefix: "Safely estimate your maximum single lift from submaximal sets using our free",
        linkText: "One Rep Max Calculator",
        descSuffix: "based on Epley and Brzycki.",
        btnText: "Calculate 1RM Now →",
        targetSlug: "1rm-calculator"
      },
      es: {
        title: "Calcula tu Repetición Máxima (1RM)",
        descPrefix: "Estima tu levantamiento máximo sin riesgo de lesión usando nuestra",
        linkText: "Calculadora de 1RM",
        descSuffix: "basada en Epley y Brzycki.",
        btnText: "Calcular 1RM Ahora →",
        targetSlug: "1rm-calculator"
      },
      fr: {
        title: "Calculez Votre 1RM en Toute Sécurité",
        descPrefix: "Estimez votre charge maximale sans risquer de blessure grâce à notre",
        linkText: "Calculateur de 1RM",
        descSuffix: "fondé sur Epley et Brzycki.",
        btnText: "Calculer Mon 1RM →",
        targetSlug: "1rm-calculator"
      },
      de: {
        title: "Berechnen Sie Ihr One Rep Max (1RM)",
        descPrefix: "Schätzen Sie Ihre Maximalkraft verletzungsfrei aus 2 bis 10 Wiederholungen mit unserem",
        linkText: "1RM-Rechner",
        descSuffix: "online.",
        btnText: "Jetzt 1RM berechnen →",
        targetSlug: "1rm-calculator"
      },
      ko: {
        title: "1RM 최대 근력 안전하게 산출하기",
        descPrefix: "부상 위험 없이 하위최대 반복 세트 데이터로 산출하는",
        linkText: "1RM 계산기",
        descSuffix: "로 중량별 세트를 구성하세요.",
        btnText: "1RM 계산하기 →",
        targetSlug: "1rm-calculator"
      },
      hi: {
        title: "वन रेप मैक्स (1RM) सुरक्षित रूप से निकालें",
        descPrefix: "बिना किसी चोट के जोखिम के 2 से 10 रेप्स के आधार पर अधिकतम भार जानने के लिए हमारे",
        linkText: "1RM कैलकुलेटर",
        descSuffix: "का उपयोग करें।",
        btnText: "1RM निकालें →",
        targetSlug: "1rm-calculator"
      }
    }
  },
  'bmi-interpretation-guidelines': {
    targetSlug: 'bmi-calculator',
    relatedSlugs: ['bmi-calculator', 'bmi-chart', 'asian-bmi-calculator', 'waist-to-hip-ratio-calculator'],
    cta: {
      en: {
        title: "Check Your Clinical BMI Category",
        descPrefix: "Apply evidence-based WHO interpretation thresholds to your height and weight with our free",
        linkText: "Clinical BMI Calculator",
        descSuffix: "for clear personalized risk stratification.",
        btnText: "Calculate Your BMI Now →",
        targetSlug: "bmi-calculator"
      },
      es: {
        title: "Comprueba tu Categoría Clínica de IMC",
        descPrefix: "Aplica los umbrales de la OMS a tu estatura y peso con nuestra",
        linkText: "Calculadora Clínica de IMC",
        descSuffix: "para una estratificación de riesgo personalizada.",
        btnText: "Evaluar mi IMC Ahora →",
        targetSlug: "bmi-calculator"
      },
      fr: {
        title: "Vérifiez Votre Catégorie Clinique d'IMC",
        descPrefix: "Appliquez les seuils de référence de l'OMS avec notre",
        linkText: "Calculateur Clinique d'IMC",
        descSuffix: "pour une stratification personnalisée de vos risques.",
        btnText: "Évaluer Mon IMC Maintenant →",
        targetSlug: "bmi-calculator"
      },
      de: {
        title: "Prüfen Sie Ihre klinische BMI-Kategorie",
        descPrefix: "Wenden Sie die WHO-Grenzwerte auf Ihre Körpergröße und Ihr Gewicht an mit unserem",
        linkText: "Klinischen BMI-Rechner",
        descSuffix: "für eine fundierte Risikostratifizierung.",
        btnText: "Jetzt BMI bestimmen →",
        targetSlug: "bmi-calculator"
      },
      ko: {
        title: "임상 기준에 맞춘 나의 BMI 범주 확인하기",
        descPrefix: "세계보건기구(WHO) 기준에 맞춘 신장과 체중 분석을 위해",
        linkText: "임상 BMI 계산기",
        descSuffix: "를 통해 맞춤형 건강 위험도를 점검하세요.",
        btnText: "내 BMI 측정하기 →",
        targetSlug: "bmi-calculator"
      },
      hi: {
        title: "अपनी नैदानिक बीएमआई श्रेणी की जाँच करें",
        descPrefix: "डब्ल्यूएचओ के दिशानिर्देशों के अनुसार अपनी ऊंचाई और वजन का विश्लेषण करने के लिए हमारे",
        linkText: "नैदानिक बीएमआई कैलकुलेटर",
        descSuffix: "का तुरंत उपयोग करें।",
        btnText: "अपना बीएमआई मापें →",
        targetSlug: "bmi-calculator"
      }
    }
  },
  'age-specific-bmi-charts': {
    targetSlug: 'bmi-chart',
    relatedSlugs: ['bmi-chart', 'bmi-calculator', 'ideal-weight-calculator', 'body-fat-calculator'],
    cta: {
      en: {
        title: "Explore the Full Demographic BMI Chart",
        descPrefix: "Compare percentile curves, gender distribution, and age-adjusted thresholds on our interactive",
        linkText: "Comprehensive BMI Chart",
        descSuffix: "table.",
        btnText: "View Complete BMI Chart →",
        targetSlug: "bmi-chart"
      },
      es: {
        title: "Explora la Tabla Completa de IMC por Edad",
        descPrefix: "Compara curvas percentiles y rangos ajustados en nuestra",
        linkText: "Tabla Interactiva de IMC",
        descSuffix: "con datos demográficos detallados.",
        btnText: "Ver Tabla Completa de IMC →",
        targetSlug: "bmi-chart"
      },
      fr: {
        title: "Consultez le Tableau Complet d'IMC par Âge",
        descPrefix: "Comparez les percentiles et seuils ajustés selon l'âge grâce à notre",
        linkText: "Tableau Interactif d'IMC",
        descSuffix: "détaillé.",
        btnText: "Voir le Tableau d'IMC →",
        targetSlug: "bmi-chart"
      },
      de: {
        title: "Erkunden Sie die vollständige altersabhängige BMI-Tabelle",
        descPrefix: "Vergleichen Sie Perzentilkurven und altersangepasste Referenzbereiche in unserer",
        linkText: "Interaktiven BMI-Tabelle",
        descSuffix: "mit demografischen Daten.",
        btnText: "Vollständige BMI-Tabelle ansehen →",
        targetSlug: "bmi-chart"
      },
      ko: {
        title: "연령별 종합 BMI 도표 인터랙티브 확인",
        descPrefix: "성별 및 연령대별 백분위수와 적정 범위를 한눈에 비교할 수 있는",
        linkText: "종합 BMI 차트",
        descSuffix: "에서 상세 지표를 확인해 보세요.",
        btnText: "전체 BMI 도표 보기 →",
        targetSlug: "bmi-chart"
      },
      hi: {
        title: "आयु-विशिष्ट संपूर्ण बीएमआई चार्ट देखें",
        descPrefix: "उम्र और लिंग के अनुसार विभिन्न श्रेणियों और पर्सेंटाइल की तुलना करने के लिए हमारे",
        linkText: "इंटरैक्टिव बीएमआई चार्ट",
        descSuffix: "का अवलोकन करें।",
        btnText: "संपूर्ण चार्ट देखें →",
        targetSlug: "bmi-chart"
      }
    }
  },
  'healthy-weight-strategies': {
    targetSlug: 'calorie-calculator',
    relatedSlugs: ['calorie-calculator', 'tdee-calculator', 'macro-calculator', 'protein-intake-calculator'],
    cta: {
      en: {
        title: "Determine Your Daily Energy Target",
        descPrefix: "Establish a safe, sustainable caloric deficit or surplus tailored to your lean mass with our",
        linkText: "Daily Calorie Calculator",
        descSuffix: "for lasting lifestyle progress.",
        btnText: "Find Your Calorie Target →",
        targetSlug: "calorie-calculator"
      },
      es: {
        title: "Determina tu Objetivo Calórico Diario",
        descPrefix: "Establece un déficit o superávit sostenible y seguro con nuestra",
        linkText: "Calculadora de Calorías Diarias",
        descSuffix: "para un progreso duradero.",
        btnText: "Obtener Meta Calórica →",
        targetSlug: "calorie-calculator"
      },
      fr: {
        title: "Déterminez Votre Objectif Calorique Quotidien",
        descPrefix: "Établissez un déficit ou surplus calorique durable et sécurisé grâce à notre",
        linkText: "Calculateur de Calories",
        descSuffix: "personnalisé.",
        btnText: "Obtenir Mon Objectif Calorique →",
        targetSlug: "calorie-calculator"
      },
      de: {
        title: "Ermitteln Sie Ihren täglichen Kalorienbedarf",
        descPrefix: "Definieren Sie ein nachhaltiges, sicheres Defizit oder einen Überschuss mit unserem",
        linkText: "Täglichen Kalorienrechner",
        descSuffix: "für dauerhaften Erfolg.",
        btnText: "Kalorienziel ermitteln →",
        targetSlug: "calorie-calculator"
      },
      ko: {
        title: "지속 가능한 일일 칼로리 목표 설정하기",
        descPrefix: "건강한 감량 또는 근육 증량을 위한 과학적 에너지 섭취 기준을",
        linkText: "일일 칼로리 계산기",
        descSuffix: "를 통해 지금 바로 산출해 보세요.",
        btnText: "칼로리 목표 확인하기 →",
        targetSlug: "calorie-calculator"
      },
      hi: {
        title: "अपने दैनिक कैलोरी लक्ष्य की गणना करें",
        descPrefix: "सुरक्षित और टिकाऊ वजन प्रबंधन के लिए अपने दैनिक ऊर्जा सेवन का सटीक अनुमान हमारे",
        linkText: "दैनिक कैलोरी कैलकुलेटर",
        descSuffix: "से लगाएं।",
        btnText: "दैनिक कैलोरी लक्ष्य जानें →",
        targetSlug: "calorie-calculator"
      }
    }
  },
  'metabolic-adaptation-weight-loss': {
    targetSlug: 'tdee-calculator',
    relatedSlugs: ['tdee-calculator', 'bmr-calculator', 'maintenance-calorie-calculator', 'calorie-calculator'],
    cta: {
      en: {
        title: "Estimate Your Total Daily Energy Expenditure",
        descPrefix: "Prevent adaptive thermogenesis plateaus by accurately mapping your basal burn, NEAT, and TEF using our",
        linkText: "TDEE Calculator",
        descSuffix: "with activity multipliers.",
        btnText: "Estimate Your TDEE Now →",
        targetSlug: "tdee-calculator"
      },
      es: {
        title: "Estima tu Gasto Energético Total Diario (TDEE)",
        descPrefix: "Evita los estancamientos metabólicos midiendo tu tasa basal y factor de actividad en nuestra",
        linkText: "Calculadora TDEE",
        descSuffix: "avanzada.",
        btnText: "Estimar mi TDEE Ahora →",
        targetSlug: "tdee-calculator"
      },
      fr: {
        title: "Estimez Votre Dépense Énergétique Totale (TDEE)",
        descPrefix: "Prévenez les plateaux métaboliques en évaluant précisément votre métabolisme de base et activité avec notre",
        linkText: "Calculateur TDEE",
        descSuffix: "complet.",
        btnText: "Estimer Mon TDEE Maintenant →",
        targetSlug: "tdee-calculator"
      },
      de: {
        title: "Bestimmen Sie Ihren täglichen Gesamtenergiebedarf (TDEE)",
        descPrefix: "Beugen Sie metabolischen Plateaus vor, indem Sie Grundumsatz und Aktivitätsfaktor mit unserem",
        linkText: "TDEE-Rechner",
        descSuffix: "präzise ermitteln.",
        btnText: "Jetzt TDEE bestimmen →",
        targetSlug: "tdee-calculator"
      },
      ko: {
        title: "일일 총 에너지 소비량 (TDEE) 산출하기",
        descPrefix: "대사 적응 정체기를 예방하고 기초대사량과 활동 에너지를 정밀 측정할 수 있는",
        linkText: "TDEE 계산기",
        descSuffix: "로 정확한 에너지 소모량을 확인하세요.",
        btnText: "나의 TDEE 측정하기 →",
        targetSlug: "tdee-calculator"
      },
      hi: {
        title: "अपने कुल दैनिक ऊर्जा व्यय (TDEE) का आकलन करें",
        descPrefix: "मेटाबॉलिक मंदी से बचने और अपनी शारीरिक गतिविधि के अनुसार सही ऊर्जा खपत जानने के लिए हमारे",
        linkText: "TDEE कैलकुलेटर",
        descSuffix: "का उपयोग करें।",
        btnText: "अपना TDEE जानें →",
        targetSlug: "tdee-calculator"
      }
    }
  },
  'visceral-fat-vs-subcutaneous-fat': {
    targetSlug: 'waist-to-hip-ratio-calculator',
    relatedSlugs: ['waist-to-hip-ratio-calculator', 'body-fat-calculator', 'lean-body-mass-calculator', 'bmi-calculator'],
    cta: {
      en: {
        title: "Screen for Deep Visceral Adiposity",
        descPrefix: "Assess intra-abdominal fat distribution and cardiometabolic risk in seconds using our validated",
        linkText: "Waist-to-Hip Ratio Calculator",
        descSuffix: "with biological reference thresholds.",
        btnText: "Check Waist-to-Hip Ratio →",
        targetSlug: "waist-to-hip-ratio-calculator"
      },
      es: {
        title: "Evalúa tu Adiposidad Visceral y Grasa Abdominal",
        descPrefix: "Analiza la distribución de grasa intraabdominal y el riesgo cardiometabólico con nuestra",
        linkText: "Calculadora de Relación Cintura-Cadera",
        descSuffix: "validada.",
        btnText: "Comprobar Relación Cintura-Cadera →",
        targetSlug: "waist-to-hip-ratio-calculator"
      },
      fr: {
        title: "Évaluez Votre Adiposité Viscérale Profonde",
        descPrefix: "Analysez la répartition des graisses abdominales et les risques associés à l'aide de notre",
        linkText: "Calculateur du Rapport Taille-Hanche",
        descSuffix: "validé médicalement.",
        btnText: "Vérifier Mon Rapport Taille-Hanche →",
        targetSlug: "waist-to-hip-ratio-calculator"
      },
      de: {
        title: "Prüfen Sie Ihr viszerales Bauchfett-Risiko",
        descPrefix: "Bewerten Sie die intraabdominelle Fettverteilung und kardiometabolische Risiken mit unserem",
        linkText: "Taille-Hüft-Verhältnis Rechner",
        descSuffix: "nach aktuellen Leitlinien.",
        btnText: "Taille-Hüft-Verhältnis prüfen →",
        targetSlug: "waist-to-hip-ratio-calculator"
      },
      ko: {
        title: "복부 내장지방 축적도 및 심혈관 위험도 평가",
        descPrefix: "내장지방 분포와 대사 질환 위험성을 간편하게 선별할 수 있는",
        linkText: "허리-엉덩이 둘레 비율(WHR) 계산기",
        descSuffix: "로 건강 지표를 측정해 보세요.",
        btnText: "내장지방 비율 측정하기 →",
        targetSlug: "waist-to-hip-ratio-calculator"
      },
      hi: {
        title: "गहरी विसरल चर्बी और कमर-कूल्हे के अनुपात की जाँच करें",
        descPrefix: "पेट की अंदरूनी चर्बी और हृदय स्वास्थ्य जोखिम का आकलन करने के लिए हमारे",
        linkText: "कमर-कूल्हा अनुपात (WHR) कैलकुलेटर",
        descSuffix: "का तुरंत उपयोग करें।",
        btnText: "अनुपात की जाँच करें →",
        targetSlug: "waist-to-hip-ratio-calculator"
      }
    }
  },
  'cardiovascular-fitness-resting-heart-rate': {
    targetSlug: 'heart-rate-zone-calculator',
    relatedSlugs: ['heart-rate-zone-calculator', 'karvonen-heart-rate-calculator', '1rm-calculator', 'tdee-calculator'],
    cta: {
      en: {
        title: "Target Your Five Aerobic Training Zones",
        descPrefix: "Optimize mitochondrial density, VO2 max, and stroke volume by pinpointing your training intensity on our",
        linkText: "Heart Rate Zone Calculator",
        descSuffix: "with resting pulse integration.",
        btnText: "Find Your Heart Rate Zones →",
        targetSlug: "heart-rate-zone-calculator"
      },
      es: {
        title: "Define tus Cinco Zonas de Entrenamiento Aeróbico",
        descPrefix: "Optimiza tu VO2 máx y resistencia cardiovascular calculando tus intensidades con nuestra",
        linkText: "Calculadora de Zonas Cardíacas",
        descSuffix: "con pulso en reposo.",
        btnText: "Ver mis Zonas Cardíacas →",
        targetSlug: "heart-rate-zone-calculator"
      },
      fr: {
        title: "Définissez Vos Cinq Zones d'Entraînement Aérobie",
        descPrefix: "Optimisez votre VO2 max et votre endurance en déterminant précisément vos intensités grâce à notre",
        linkText: "Calculateur de Zones Cardiaques",
        descSuffix: "intégrant votre pouls au repos.",
        btnText: "Découvrir Mes Zones Cardiaques →",
        targetSlug: "heart-rate-zone-calculator"
      },
      de: {
        title: "Bestimmen Sie Ihre 5 aeroben Herzfrequenzzonen",
        descPrefix: "Optimieren Sie VO2max und Herzgesundheit durch gezielte Trainingsbereiche mit unserem",
        linkText: "Herzfrequenzzonen-Rechner",
        descSuffix: "inklusive Ruhepulsintegration.",
        btnText: "Herzfrequenzzonen anzeigen →",
        targetSlug: "heart-rate-zone-calculator"
      },
      ko: {
        title: "맞춤형 5단계 유산소 심박수 구간 설정",
        descPrefix: "안정 시 심박수를 반영하여 최대산소섭취량(VO2 max) 향상과 지방 연소 구간을 도출하는",
        linkText: "심박수 구간 계산기",
        descSuffix: "를 확인하세요.",
        btnText: "심박수 구간 확인하기 →",
        targetSlug: "heart-rate-zone-calculator"
      },
      hi: {
        title: "अपने 5 हृदय गति प्रशिक्षण क्षेत्रों को जानें",
        descPrefix: "अपने कार्डियोवैस्कुलर स्वास्थ्य और स्टैमिना को अधिकतम करने के लिए हमारे",
        linkText: "हृदय गति ज़ोन कैलकुलेटर",
        descSuffix: "से अपने अनुकूलित प्रशिक्षण ज़ोन निकालें।",
        btnText: "हृदय गति ज़ोन जानें →",
        targetSlug: "heart-rate-zone-calculator"
      }
    }
  }
};

export function getBlogCta(slug: string, lang: Locale): BlogCtaConfig {
  const meta = blogArticleToolsMap[slug] || blogArticleToolsMap['what-is-bmi'];
  return meta.cta[lang] || meta.cta.en;
}

export function getBlogRelatedSlugs(slug: string): string[] {
  const meta = blogArticleToolsMap[slug] || blogArticleToolsMap['what-is-bmi'];
  return meta.relatedSlugs;
}
