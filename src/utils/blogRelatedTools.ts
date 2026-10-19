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
};

export function getBlogCta(slug: string, lang: Locale): BlogCtaConfig {
  const meta = blogArticleToolsMap[slug] || blogArticleToolsMap['what-is-bmi'];
  return meta.cta[lang] || meta.cta.en;
}

export function getBlogRelatedSlugs(slug: string): string[] {
  const meta = blogArticleToolsMap[slug] || blogArticleToolsMap['what-is-bmi'];
  return meta.relatedSlugs;
}
