export const blogArticles: Record<string, any> = {
  "bmi-calculator-india": {
    "title": {
      "en": "BMI Calculator India (2026 Guide): Revised WHO Ranges, Formula & Chart",
      "hi": "बीएमआई कैलकुलेटर इंडिया (2026 गाइड): संशोधित डब्ल्यूएचओ सीमा, फॉर्मूला और चार्ट",
      "ko": "인도 BMI 계산기 (2026 가이드): 개정된 WHO 범주, 공식 및 차트",
      "de": "BMI Rechner Indien (Leitfaden 2026): WHO-Standards, Formel & Tabelle",
      "es": "Calculadora de IMC India (Guía 2026): Rangos de la OMS, Fórmula y Tabla",
      "fr": "Calculateur IMC Inde (Guide 2026) : Normes OMS, Formule et Tableau"
    },
    "category": {
      "en": "BMI & Regional Standards",
      "hi": "बीएमआई और क्षेत्रीय मानक",
      "ko": "지역별 BMI 지침",
      "de": "BMI & Regionale Standards",
      "es": "IMC y Normas Regionales",
      "fr": "IMC et Normes Régionales"
    },
    "description": {
      "en": "Complete 2026 guide on BMI for Indians. Learn about BMI 23 and Asian-population reference thresholds, WHO South-East Asia cut-offs, healthy weight ranges, formulas, and FAQs.",
      "hi": "भारतीयों के लिए बीएमआई की संपूर्ण 2026 गाइड। एशियाई आबादी के बीएमआई 23 संदर्भ मानकों, डब्ल्यूएचओ दिशानिर्देशों, स्वस्थ वजन सीमाओं और उत्तरों के बारे में जानें।",
      "ko": "인도인 및 아시아인을 위한 BMI 2026 가이드. 아시아인과 체중 지침 23과 WHO 지침, 공식 및 FAQ 안내.",
      "de": "Vollständiger Leitfaden zum BMI für asiatische Bevölkerungen. Asiatische 23-Schwellenwerte, WHO-Standards und Formeln.",
      "es": "Guía completa sobre el IMC para poblaciones asiáticas. Aprende sobre los umbrales asiáticos de 23, límites de la OMS y fórmulas.",
      "fr": "Guide complet sur l'IMC pour les populations asiatiques. Découvrez les seuils asiatiques de 23, normes OMS et formules."
    },
    "contentHtml": {
      "en": "\n        <h2>Overview of BMI for Indian & South Asian Populations</h2>\n        <p>Body Mass Index (BMI) is an internationally recognized health screening tool that measures total body mass relative to height squared (expressed as kg/m²). However, consensus guidance published by the <strong>World Health Organization (WHO)</strong>, the <strong>Indian Council of Medical Research (ICMR)</strong>, and the <strong>Diabetes India Consensus Group</strong> confirms that standard Western BMI cut-offs differ from South Asian population reference guidance.</p>\n        <p>In South Asian and Indian adults, metabolic risk indicators manifest at lower BMI levels compared to European reference populations. As a result, the WHO South-East Asia Regional Office established revised BMI classifications tailored specifically to Asian population data.</p>\n\n        <h2>Why 23.0 kg/m² is Overweight in India (The WHO Asian Cut-off)</h2>\n        <p>Under Western BMI standards, a BMI of 25.0 kg/m² marks the start of the overweight category. However, for Indians and South Asians, population research shows that reference action thresholds begin at a lower cutoff of <strong>23.0 kg/m²</strong>.</p>\n        <p>The primary driver behind this disparity is body composition: South Asian populations exhibit the <em>\"Thin-Fat Phenotype\"</em> (TOFI - Thin Outside, Fat Inside). Indian individuals tend to have a higher body fat percentage and greater abdominal visceral adiposity (deep internal fat surrounding abdominal organs) at identical BMI numbers compared to Caucasians, combined with lower skeletal muscle mass.</p>\n\n        <h2>WHO & ICMR Indian BMI Classification Chart</h2>\n        <div class=\"my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4\">\n          <table class=\"w-full text-left border-collapse text-sm\">\n            <thead>\n              <tr class=\"border-b border-[var(--border)] bg-[var(--muted)] text-[var(--foreground)] font-bold\">\n                <th class=\"p-3\">Category</th>\n                <th class=\"p-3\">Standard Western Cut-off</th>\n                <th class=\"p-3 text-[var(--accent)] font-extrabold\">WHO Asian / Indian Cut-off</th>\n                <th class=\"p-3\">Reference Status Indicator</th>\n              </tr>\n            </thead>\n            <tbody class=\"divide-y divide-[var(--border)]\">\n              <tr>\n                <td class=\"p-3 font-semibold\">Underweight</td>\n                <td class=\"p-3 font-mono\">&lt; 18.5 kg/m²</td>\n                <td class=\"p-3 font-mono font-bold text-[var(--accent)]\">&lt; 18.5 kg/m²</td>\n                <td class=\"p-3\">Underweight reference category</td>\n              </tr>\n              <tr>\n                <td class=\"p-3 font-semibold\">Normal / Healthy Weight</td>\n                <td class=\"p-3 font-mono\">18.5 – 24.9 kg/m²</td>\n                <td class=\"p-3 font-mono font-bold text-[var(--accent)]\">18.5 – 22.9 kg/m²</td>\n                <td class=\"p-3\">Standard reference baseline</td>\n              </tr>\n              <tr>\n                <td class=\"p-3 font-semibold\">Overweight (Increased Risk)</td>\n                <td class=\"p-3 font-mono\">25.0 – 29.9 kg/m²</td>\n                <td class=\"p-3 font-mono font-bold text-[var(--accent)]\">23.0 – 27.4 kg/m²</td>\n                <td class=\"p-3\">Moderate reference threshold for Asian populations</td>\n              </tr>\n              <tr>\n                <td class=\"p-3 font-semibold\">Obesity Class I (High Risk)</td>\n                <td class=\"p-3 font-mono\">30.0 – 34.9 kg/m²</td>\n                <td class=\"p-3 font-mono font-bold text-[var(--accent)]\">27.5 – 32.4 kg/m²</td>\n                <td class=\"p-3\">Elevated reference threshold for Asian populations</td>\n              </tr>\n              <tr>\n                <td class=\"p-3 font-semibold\">Obesity Class II (Very High Risk)</td>\n                <td class=\"p-3 font-mono\">≥ 35.0 kg/m²</td>\n                <td class=\"p-3 font-mono font-bold text-[var(--accent)]\">≥ 32.5 kg/m²</td>\n                <td class=\"p-3\">High reference category</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n        <h2>How to Calculate BMI for Indian Adults</h2>\n        <p>Calculating your BMI uses the standard metric equation:</p>\n        <div class=\"my-6 p-6 rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 font-mono text-sm leading-relaxed\">\n          <p class=\"font-bold text-[var(--accent)] mb-1\">Metric Formula Equation:</p>\n          <p class=\"text-[var(--foreground)] font-bold text-base\">BMI = Weight (kg) / [Height (m)]²</p>\n          <p class=\"text-xs text-[var(--muted-foreground)] mt-2\">Example: For an adult weighing 68 kg with a height of 170 cm (1.70 m): 68 / (1.70 × 1.70) = 23.53 kg/m² (Classified as Overweight under WHO Asian cut-offs).</p>\n        </div>\n\n        <h2>Waist Circumference Cut-offs for South Asians</h2>\n        <p>In addition to computing your BMI score, measuring waist circumference provides supplementary context on central body-fat distribution.</p>\n        <ul>\n          <li><strong>Indian Men:</strong> Reference threshold is <strong>&gt; 90 cm (35 inches)</strong></li>\n          <li><strong>Indian Women:</strong> Reference threshold is <strong>&gt; 80 cm (31.5 inches)</strong></li>\n        </ul>\n        <p>If your BMI exceeds 23.0 kg/m² or your waist circumference exceeds these reference thresholds, consult a healthcare provider for personalized guidance.</p>\n\n        <h2>Summary & Next Steps</h2>\n        <p>Understanding BMI 18.5–22.9 in Asian-Population Reference Guidance, eating a balanced whole-food diet, and engaging in regular physical activity are general health planning principles.</p>\n      ",
      "hi": "\n        <h2>भारतीयों के लिए बीएमआई का महत्व</h2>\n        <p>बॉडी मास इंडेक्स (BMI) एक अंतरराष्ट्रीय मानक है जो ऊंचाई के अनुपात में शरीर के वजन का मूल्यांकन करता है। हालांकि, विश्व स्वास्थ्य संगठन (WHO) और इंडियन काउंसिल ऑफ मेडिकल रिसर्च (ICMR) के अनुसार, भारतीयों के लिए बीएमआई की सीमाएं सामान्य पश्चिमी मानकों से अलग हैं।</p>\n        \n        <h2>भारत में 23.0 kg/m² पर ओवरवेट क्यों माना जाता है?</h2>\n        <p>पश्चिमी देशों में 25.0 kg/m² को ओवरवेट माना जाता है, लेकिन भारतीय आबादी में 23.0 kg/m² पर ही टाइप 2 डायबिटीज और हृदय रोग का खतरा शुरू हो जाता है। इसका मुख्य कारण <em>\"थिन-फैट फेनोटाइप\"</em> है, जिसमें वजन कम दिखने के बावजूद पेट के अंदरूनी अंगों में वसा (विस्कल फैट) अधिक जमा होती है।</p>\n\n        <h2>डब्ल्यूएचओ एशियाई बीएमआई तालिका</h2>\n        <ul>\n          <li><strong>कम वजन (Underweight):</strong> 18.5 kg/m² से कम</li>\n          <li><strong>सामान्य वजन (Normal Weight):</strong> 18.5 – 22.9 kg/m²</li>\n          <li><strong>अधिक वजन (Overweight):</strong> 23.0 – 27.4 kg/m²</li>\n          <li><strong>मोटापा (Obesity):</strong> 27.5 kg/m² या अधिक</li>\n        </ul>\n      ",
      "es": "\n          <h2>Calculadora de IMC India (Guía 2026): Rangos de la OMS, Fórmula y Tabla</h2>\n          <p>Guía completa sobre el IMC para poblaciones asiáticas. Aprende sobre los umbrales asiáticos de 23, límites de la OMS y fórmulas.</p>\n          <p>Esta guía proporciona información detallada basada en las directrices de salud de la Organización Mundial de la Salud (OMS) y los Centros para el Control y la Prevención de Enfermedades (CDC).</p>\n          <h3>Puntos Clave y Metodología</h3>\n          <p>La evaluación se basa en mediciones estándar ajustadas a la altura y el peso, ofreciendo un contexto educativo claro para la interpretación de los datos de salud.</p>\n        ",
      "fr": "\n          <h2>Calculateur IMC Inde (Guide 2026) : Normes OMS, Formule et Tableau</h2>\n          <p>Guide complet sur l'IMC pour les populations asiatiques. Découvrez les seuils asiatiques de 23, normes OMS et formules.</p>\n          <p>Ce guide fournit des informations détaillées basées sur les directives de santé publiées par l'Organisation Mondiale de la Santé (OMS) et le CDC.</p>\n          <h3>Points Clés et Méthodologie</h3>\n          <p>L'évaluation repose sur des mesures standards ajustées en fonction de la taille et du poids, offrant un contexte éducatif clair pour l'interprétation des données de santé.</p>\n        ",
      "de": "\n          <h2>BMI Rechner Indien (Leitfaden 2026): WHO-Standards, Formel & Tabelle</h2>\n          <p>Vollständiger Leitfaden zum BMI für asiatische Bevölkerungen. Asiatische 23-Schwellenwerte, WHO-Standards und Formeln.</p>\n          <p>Dieser Leitfaden bietet ausführliche Informationen basierend auf den veröffentlichten Gesundheitsrichtlinien der Weltgesundheitsorganisation (WHO) und der CDC.</p>\n          <h3>Wichtige Erkenntnisse & Methodik</h3>\n          <p>Die Auswertung basiert auf standardmäßigen Höhen- und Gewichtsmessungen und bietet einen klaren Bildungskontext zur Einordnung von Gesundheitsdaten.</p>\n        ",
      "ko": "\n          <h2>인도 BMI 계산기 (2026 가이드): 개정된 WHO 범주, 공식 및 차트</h2>\n          <p>인도인 및 아시아인을 위한 BMI 2026 가이드. 아시아인과 체중 지침 23과 WHO 지침, 공식 및 FAQ 안내.</p>\n          <p>본 가이드는 세계보건기구(WHO) 및 질병관리청(CDC)의 공표된 보건 지침을 바탕으로 작성된 교육 자료입니다.</p>\n          <h3>핵심 지침 및 산출 방식</h3>\n          <p>신장과 체중 비율을 바탕으로 한 표준 측정 공식을 적용하여 신체 지표를 이해하는 데 도움을 줍니다.</p>\n        "
    }
  },
  "what-is-bmi": {
    "title": {
      "en": "What is BMI? Body Mass Index Definition, Calculation & Health Meaning",
      "hi": "बीएमआई क्या है? बॉडी मास इंडेक्स की पूरी जानकारी और स्वास्थ्य प्रभाव",
      "ko": "BMI(체질량지수)란? 정의, 계산 법 및 건강 지표 안내",
      "de": "Was ist der BMI? Definition, Berechnung & Bedeutung für die Gesundheit",
      "es": "¿Qué es el IMC? Definición del Índice de Masa Corporal y Salud",
      "fr": "Qu'est-ce que l'IMC ? Définition, Calcul et Signification pour la Santé"
    },
    "category": {
      "en": "BMI & Health Basics",
      "hi": "बीएमआई और स्वास्थ्य मूल बातें",
      "ko": "BMI 기초",
      "de": "BMI & Grundlagen",
      "es": "Conceptos Básicos del IMC",
      "fr": "Bases de l'IMC"
    },
    "description": {
      "en": "Comprehensive 2026 guide to Body Mass Index (BMI). Understand what BMI is, how it is calculated, WHO scale ranges, and what your score means.",
      "hi": "बॉडी मास इंडेक्स (BMI) की संपूर्ण गाइड। जानें कि बीएमआई क्या है, इसकी गणना कैसे की जाती है और डब्ल्यूएचओ श्रेणियां।",
      "ko": "체질량지수(BMI) 2026 종합 가이드. BMI의 정의, 계산 법, WHO 진단 범주 및 점수의 의미.",
      "de": "Umfassender BMI-Leitfaden 2026. Was der BMI ist, wie er berechnet wird und was Ihr Wert bedeutet.",
      "es": "Guía completa sobre el Índice de Masa Corporal (IMC). Qué es, cómo se calcula y rangos de la OMS.",
      "fr": "Guide complet sur l'Indice de Masse Corporelle (IMC). Définition, calcul et plages de l'OMS."
    },
    "contentHtml": {
      "en": "\n        <h2>What is Body Mass Index (BMI)?</h2>\n        <p><strong>Body Mass Index (BMI)</strong> is a statistical and educational health screening metric that compares an adult's body weight to their height. Developed in the 19th century by Belgian mathematician and statistician <em>Adolphe Quetelet</em>, BMI provides a quick, standardized method to categorize individuals into distinct weight brackets: Underweight, Healthy Weight, Overweight, and Obese.</p>\n        <p>Today, major global medical organizations—including the <strong>World Health Organization (WHO)</strong> and the <strong>Centers for Disease Control and Prevention (CDC)</strong>—utilize BMI as an initial population screening tool to identify potential health risks associated with undernutrition or excess body fat.</p>\n\n        <h2>How is BMI Calculated? (The Official Formula)</h2>\n        <p>BMI is computed by dividing an individual's mass in kilograms by the square of their height in meters. It can also be calculated using imperial measurements (pounds and inches) with a conversion factor of 703.</p>\n\n        <div class=\"my-6 p-6 rounded-xl border border-[var(--border)] bg-[var(--card)] space-y-4\">\n          <div>\n            <p class=\"font-bold text-[var(--accent)] text-sm uppercase tracking-wider\">1. Metric BMI Formula Equation:</p>\n            <p class=\"text-[var(--foreground)] font-mono font-bold text-lg\">BMI = Weight (kg) ÷ [Height (m)]²</p>\n          </div>\n          <hr class=\"border-[var(--border)]\" />\n          <div>\n            <p class=\"font-bold text-[var(--accent)] text-sm uppercase tracking-wider\">2. Imperial BMI Formula Equation:</p>\n            <p class=\"text-[var(--foreground)] font-mono font-bold text-lg\">BMI = [Weight (lbs) ÷ Height (inches)²] × 703</p>\n          </div>\n        </div>\n\n        <h2>WHO Adult BMI Scale & Health Categories</h2>\n        <p>For most general adult populations aged 20 and older, the World Health Organization classifies BMI scores into four major categories:</p>\n        \n        <ul>\n          <li><strong>Underweight (&lt; 18.5 kg/m²):</strong> Indicates low body mass relative to height. May correlate with nutrient deficiencies, compromised immune function, and lower bone density.</li>\n          <li><strong>Healthy Weight (18.5 – 24.9 kg/m²):</strong> Represents the standard reference weight range associated with population-level health baselines.</li>\n          <li><strong>Overweight (25.0 – 29.9 kg/m²):</strong> Indicates moderate excess body weight. Associated with elevated risk for Type 2 Diabetes, hypertension, and cardiovascular strain.</li>\n          <li><strong>Obesity Class I to III (≥ 30.0 kg/m²):</strong> Indicates higher body mass requiring evaluation with a healthcare provider for overall health context.</li>\n        </ul>\n\n        <h2>What BMI Does Not Measure</h2>\n        <p>While BMI is highly effective for rapid population screening, it has recognized limitations for individual evaluation:</p>\n        <ol>\n          <li><strong>Does Not Differentiate Muscle from Fat:</strong> Muscle tissue is substantially denser than adipose fat. Muscular athletes often register high BMI scores despite having low body fat.</li>\n          <li><strong>Does Not Measure Fat Distribution:</strong> Abdominal visceral fat poses a much higher cardiovascular risk than subcutaneous fat on the hips or legs. BMI cannot measure waist circumference.</li>\n          <li><strong>Ignores Age and Sex Variances:</strong> Women naturally carry higher physiological fat levels than men, and older seniors naturally lose skeletal muscle mass.</li>\n        </ol>\n\n        <h2>How to Use BMI Effectively</h2>\n        <p>To evaluate your overall health context, public health guidelines suggest pairing your BMI score with your <strong>Waist-to-Height Ratio (WHtR)</strong>, <strong>Basal Metabolic Rate (BMR)</strong>, and daily calorie expenditure (<strong>TDEE</strong>).</p>\n      ",
      "hi": "\n        <h2>बीएमआई (BMI) क्या है?</h2>\n        <p>बॉडी मास इंडेक्स (BMI) एक सांख्यिकीय स्वास्थ्य उपकरण है जो व्यक्ति के वजन की तुलना उसकी ऊंचाई से करता है। विश्व स्वास्थ्य संगठन (WHO) और सीडीसी (CDC) इसका उपयोग पोषण और वजन संबंधी जोखिमों की जांच के लिए करते हैं।</p>\n\n        <h2>बीएमआई की गणना कैसे की जाती है?</h2>\n        <p>बीएमआई की गणना वजन (किग्रा में) को ऊंचाई के वर्ग (मीटर में) से विभाजित करके की जाती है:</p>\n        <p><strong>BMI = वजन (kg) ÷ [ऊंचाई (m)]²</strong></p>\n\n        <h2>डब्ल्यूएचओ बीएमआई श्रेणियां</h2>\n        <ul>\n          <li><strong>कम वजन (Underweight):</strong> 18.5 से कम</li>\n          <li><strong>सामान्य वजन (Healthy Weight):</strong> 18.5 से 24.9</li>\n          <li><strong>अधिक वजन (Overweight):</strong> 25.0 से 29.9</li>\n          <li><strong>मोटापा (Obesity):</strong> 30.0 या अधिक</li>\n        </ul>\n      ",
      "es": "\n          <h2>¿Qué es el IMC? Definición del Índice de Masa Corporal y Salud</h2>\n          <p>Guía completa sobre el Índice de Masa Corporal (IMC). Qué es, cómo se calcula y rangos de la OMS.</p>\n          <p>Esta guía proporciona información detallada basada en las directrices de salud de la Organización Mundial de la Salud (OMS) y los Centros para el Control y la Prevención de Enfermedades (CDC).</p>\n          <h3>Puntos Clave y Metodología</h3>\n          <p>La evaluación se basa en mediciones estándar ajustadas a la altura y el peso, ofreciendo un contexto educativo claro para la interpretación de los datos de salud.</p>\n        ",
      "fr": "\n          <h2>Qu'est-ce que l'IMC ? Définition, Calcul et Signification pour la Santé</h2>\n          <p>Guide complet sur l'Indice de Masse Corporelle (IMC). Définition, calcul et plages de l'OMS.</p>\n          <p>Ce guide fournit des informations détaillées basées sur les directives de santé publiées par l'Organisation Mondiale de la Santé (OMS) et le CDC.</p>\n          <h3>Points Clés et Méthodologie</h3>\n          <p>L'évaluation repose sur des mesures standards ajustées en fonction de la taille et du poids, offrant un contexte éducatif clair pour l'interprétation des données de santé.</p>\n        ",
      "de": "\n          <h2>Was ist der BMI? Definition, Berechnung & Bedeutung für die Gesundheit</h2>\n          <p>Umfassender BMI-Leitfaden 2026. Was der BMI ist, wie er berechnet wird und was Ihr Wert bedeutet.</p>\n          <p>Dieser Leitfaden bietet ausführliche Informationen basierend auf den veröffentlichten Gesundheitsrichtlinien der Weltgesundheitsorganisation (WHO) und der CDC.</p>\n          <h3>Wichtige Erkenntnisse & Methodik</h3>\n          <p>Die Auswertung basiert auf standardmäßigen Höhen- und Gewichtsmessungen und bietet einen klaren Bildungskontext zur Einordnung von Gesundheitsdaten.</p>\n        ",
      "ko": "\n          <h2>BMI(체질량지수)란? 정의, 계산 법 및 건강 지표 안내</h2>\n          <p>체질량지수(BMI) 2026 종합 가이드. BMI의 정의, 계산 법, WHO 진단 범주 및 점수의 의미.</p>\n          <p>본 가이드는 세계보건기구(WHO) 및 질병관리청(CDC)의 공표된 보건 지침을 바탕으로 작성된 교육 자료입니다.</p>\n          <h3>핵심 지침 및 산출 방식</h3>\n          <p>신장과 체중 비율을 바탕으로 한 표준 측정 공식을 적용하여 신체 지표를 이해하는 데 도움을 줍니다.</p>\n        "
    }
  },
  "is-bmi-accurate": {
    "title": {
      "en": "Is BMI Accurate? Evidence, Limitations & the Oxford 2.5 Height-Adjusted Formula",
      "hi": "क्या बीएमआई सटीक है? साक्ष्य, सीमाएं और 2.5 घात फॉर्मूला",
      "ko": "BMI는 정확한가요? 증거, 한계 및 옥스포드 2.5 보정 공식",
      "de": "Ist der BMI genau? Evidenz, Grenzen & Oxford 2.5 Formel",
      "es": "¿Es Preciso el IMC? Evidencia, Limitaciones y Fórmula 2.5",
      "fr": "L'IMC est-il Précis ? Preuves, Limites et Formule 2.5"
    },
    "category": {
      "en": "Research & Evidence",
      "hi": "शोध और साक्ष्य",
      "ko": "연구 및 증거",
      "de": "Forschung & Fakten",
      "es": "Investigación y Evidencia",
      "fr": "Recherche et Preuves"
    },
    "description": {
      "en": "Is BMI actually accurate for your body? Read 2026 published reference research on muscle density factors, Oxford height scaling formula, and WHO ethnic guidelines.",
      "hi": "क्या बीएमआई आपके लिए सटीक है? मांसपेशियों के घनत्व, ऊंचाई के संदर्भ और डब्ल्यूएचओ दिशानिर्देशों पर 2026 का शोध पढ़ें।",
      "ko": "BMI가 내 몸에 정말 정확할까요? 근육 밀도 한계, 옥스포드 신장 보정 공식 및 2026 연구 결과.",
      "de": "Ist der BMI für Ihren Körper wirklich genau? Lesen Sie Referenzdaten zu Muskeldichte und Höhenskalierung.",
      "es": "¿Es el IMC realmente preciso para tu cuerpo? Lee la investigación sobre densidad muscular y escala de altura.",
      "fr": "L'IMC est-il vraiment précis pour votre corps ? Découvrez les analyses sur la masse musculaire et la taille."
    },
    "contentHtml": {
      "en": "\n        <h2>Is BMI Accurate? Understanding Standard Weight Metrics</h2>\n        <p>Millions of people calculate their Body Mass Index (BMI) daily and ask a fundamental question: <strong>Is BMI accurate for every unique body type?</strong></p>\n        <p>The short answer: <em>BMI is an established population-level screening metric, but it has key mathematical and physiological limitations when applied to individual health evaluation.</em> Research published in public health literature highlights key areas where standard BMI may not fully capture individual body composition.</p>\n\n        <h2>Limitation #1: The Muscular Athlete Paradox (Muscle vs. Adipose Fat)</h2>\n        <p>Standard BMI treats every kilogram of mass identically. However, skeletal muscle tissue is significantly denser and heavier per unit of volume than adipose fat tissue. As a result, bodybuilders, weightlifters, and muscular athletes frequently register as \"Overweight\" or \"Obese\" on standard BMI charts despite having low body fat percentages.</p>\n\n        <h2>Limitation #2: Height Scaling and Alternative BMI Formulas</h2>\n        <p>The standard BMI formula (<code>weight / height²</code>) divides mass by height squared. Mathematically, dividing by height squared assumes human body volume scales in two dimensions (like a flat square). In reality, humans grow three-dimensionally.</p>\n        <p>Oxford mathematician <strong>Prof. Nick Trefethen</strong> (<a href=\"https://www.maths.ox.ac.uk/profiles/nick.trefethen/bmi\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-[var(--accent)] underline font-semibold\">Oxford University Mathematics</a>) proposed an alternative mathematical formulation to adjust for height scaling in tall and short adults. He introduced the <strong>3D Height-Adjusted BMI Formula</strong>:</p>\n\n        <div class=\"my-6 p-6 rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 font-mono text-sm leading-relaxed\">\n          <p class=\"font-bold text-[var(--accent)] mb-1\">Oxford 3D Height-Adjusted Equation:</p>\n          <p class=\"text-[var(--foreground)] font-bold text-base\">3D BMI = 1.3 × Weight (kg) / [Height (m)]²·⁵</p>\n        </div>\n\n        <h2>Limitation #3: Abdominal Visceral Fat (Central Obesity)</h2>\n        <p>BMI measures total scale weight, not fat location. While subcutaneous fat stored under the skin carries different implications, <strong>visceral fat</strong> stored deep inside the abdominal cavity surrounding vital organs is associated with different metabolic and cardiovascular risk patterns.</p>\n        <p>In population health studies, some adults with a \"Normal\" BMI score present with higher waist circumferences, indicating central adiposity despite normal total body mass (the <em>\"Normal Weight Obesity\"</em> pattern).</p>\n\n        <h2>Limitation #4: Ethnic Body Composition Differences</h2>\n        <p>World Health Organization (WHO) population data shows Asian and South Asian populations accumulate higher percentages of visceral fat at lower body mass indexes compared to Caucasians. This is why the WHO revised overweight cut-offs for Asian adults from 25.0 kg/m² down to <strong>23.0 kg/m²</strong>.</p>\n\n        <h2>Additional Metrics That Can Provide Context</h2>\n        <p>Public health resources suggest reviewing complementary metrics for a broader educational health snapshot:</p>\n        <ol>\n          <li><strong>BMI Score:</strong> For baseline stature screening.</li>\n          <li><strong>Waist-to-Height Ratio (WHtR):</strong> Provides context on waist circumference relative to height.</li>\n          <li><strong>BMR &amp; TDEE:</strong> To estimate resting and total daily energy expenditure for planning.</li>\n        </ol>\n      ",
      "hi": "\n        <h2>क्या बीएमआई (BMI) सटीक है?</h2>\n        <p>बीएमआई एक बेहतरीन प्राथमिक जांच मीट्रिक है, लेकिन जब इसे व्यक्तिगत स्वास्थ्य पर लागू किया जाता है तो इसमें कई शारीरिक और गणितीय सीमाएं पाई जाती हैं।</p>\n\n        <h2>बीएमआई की प्रमुख सीमाएं:</h2>\n        <ul>\n          <li><strong>मांसपेशियों और फैट में अंतर न करना:</strong> मांसपेशियां फैट से घनी होती हैं। एथलीट अक्सर कम फैट के बावजूद 'ओवरवेट' श्रेणी में आ जाते हैं।</li>\n          <li><strong>पेट की अंदरूनी वसा (Visceral Fat) की अनदेखी:</strong> बीएमआई यह नहीं बताता कि फैट कमर पर जमा है या पैरों पर।</li>\n          <li><strong>ऊंचाई का भ्रम:</strong> मानक फॉर्मूला लंबे लोगों को अधिक वजन का दिखाता है। इसके लिए ऑक्सफोर्ड 2.5 फॉर्मूला का उपयोग किया जाता है।</li>\n        </ul>\n      ",
      "es": "\n          <h2>¿Es Preciso el IMC? Evidencia, Limitaciones y Fórmula 2.5</h2>\n          <p>¿Es el IMC realmente preciso para tu cuerpo? Lee la investigación sobre densidad muscular y escala de altura.</p>\n          <p>Esta guía proporciona información detallada basada en las directrices de salud de la Organización Mundial de la Salud (OMS) y los Centros para el Control y la Prevención de Enfermedades (CDC).</p>\n          <h3>Puntos Clave y Metodología</h3>\n          <p>La evaluación se basa en mediciones estándar ajustadas a la altura y el peso, ofreciendo un contexto educativo claro para la interpretación de los datos de salud.</p>\n        ",
      "fr": "\n          <h2>L'IMC est-il Précis ? Preuves, Limites et Formule 2.5</h2>\n          <p>L'IMC est-il vraiment précis pour votre corps ? Découvrez les analyses sur la masse musculaire et la taille.</p>\n          <p>Ce guide fournit des informations détaillées basées sur les directives de santé publiées par l'Organisation Mondiale de la Santé (OMS) et le CDC.</p>\n          <h3>Points Clés et Méthodologie</h3>\n          <p>L'évaluation repose sur des mesures standards ajustées en fonction de la taille et du poids, offrant un contexte éducatif clair pour l'interprétation des données de santé.</p>\n        ",
      "de": "\n          <h2>Ist der BMI genau? Evidenz, Grenzen & Oxford 2.5 Formel</h2>\n          <p>Ist der BMI für Ihren Körper wirklich genau? Lesen Sie Referenzdaten zu Muskeldichte und Höhenskalierung.</p>\n          <p>Dieser Leitfaden bietet ausführliche Informationen basierend auf den veröffentlichten Gesundheitsrichtlinien der Weltgesundheitsorganisation (WHO) und der CDC.</p>\n          <h3>Wichtige Erkenntnisse & Methodik</h3>\n          <p>Die Auswertung basiert auf standardmäßigen Höhen- und Gewichtsmessungen und bietet einen klaren Bildungskontext zur Einordnung von Gesundheitsdaten.</p>\n        ",
      "ko": "\n          <h2>BMI는 정확한가요? 증거, 한계 및 옥스포드 2.5 보정 공식</h2>\n          <p>BMI가 내 몸에 정말 정확할까요? 근육 밀도 한계, 옥스포드 신장 보정 공식 및 2026 연구 결과.</p>\n          <p>본 가이드는 세계보건기구(WHO) 및 질병관리청(CDC)의 공표된 보건 지침을 바탕으로 작성된 교육 자료입니다.</p>\n          <h3>핵심 지침 및 산출 방식</h3>\n          <p>신장과 체중 비율을 바탕으로 한 표준 측정 공식을 적용하여 신체 지표를 이해하는 데 도움을 줍니다.</p>\n        "
    }
  },
  "bmr-vs-tdee-calculator": {
    "title": {
      "en": "BMR vs. TDEE Calculator: Key Differences & Weight Loss Math",
      "hi": "बीएमआर बनाम टीडीईई कैलकुलेटर: मुख्य अंतर और वजन घटाने का फॉर्मूला",
      "ko": "BMR vs TDEE 계산기: 핵심 차이점 및 다이어트 칼로리 계산",
      "de": "BMR vs. TDEE Rechner: Unterschiede & Kalorienbedarf zum Abnehmen",
      "es": "Calculadora de BMR vs TDEE: Diferencias y Cálculo de Calorías",
      "fr": "Calculateur BMR vs TDEE : Différences et Calcul des Calories"
    },
    "category": {
      "en": "Metabolic Science",
      "hi": "चयापचय विज्ञान",
      "ko": "대사 과학",
      "de": "Stoffwechselwissenschaft",
      "es": "Ciencia Metabólica",
      "fr": "Science Métabolique"
    },
    "description": {
      "en": "Understand the difference between BMR (Basal Metabolic Rate) and TDEE (Total Daily Energy Expenditure). Learn how to calculate daily deficit calories.",
      "hi": "बीएमआर और टीडीईई के बीच अंतर समझें। जानें कि वजन घटाने के लिए दैनिक कैलोरी की गणना कैसे करें।",
      "ko": "기초대사량(BMR)과 일일 총 에너지 소비량(TDEE)의 차이점 및 칼로리 계산법.",
      "de": "Verstehen Sie den Unterschied zwischen BMR und TDEE. Kalorienbedarf zum Abnehmen berechnen.",
      "es": "Entiende la diferencia entre BMR y TDEE. Aprende a calcular el déficit calórico diario.",
      "fr": "Comprenez la différence entre BMR et TDEE. Calculez votre déficit calorique quotidien."
    },
    "contentHtml": {
      "en": "\n        <h2>Understanding BMR vs. TDEE</h2>\n        <p>When planning weight loss, muscle gain, or athletic performance, understanding energy expenditure is crucial. Two essential acronyms dominate metabolic nutrition: <strong>BMR</strong> and <strong>TDEE</strong>.</p>\n\n        <h2>1. What is BMR (Basal Metabolic Rate)?</h2>\n        <p>Your <strong>Basal Metabolic Rate (BMR)</strong> is the absolute minimum number of calories your body burns in 24 hours while at complete rest in a thermo-neutral environment. BMR powers your vital life functions—including breathing, blood circulation, cellular repair, brain function, and body temperature regulation.</p>\n        <p>The Mifflin-St Jeor Equation is a commonly used predictive equation for estimating resting energy expenditure. Calculator results are estimates and may differ from measured energy expenditure.</p>\n\n        <div class=\"my-6 p-6 rounded-xl border border-[var(--border)] bg-[var(--card)] font-mono text-sm leading-relaxed\">\n          <p class=\"font-bold text-[var(--accent)] mb-1\">Mifflin-St Jeor Equations:</p>\n          <p class=\"text-[var(--foreground)] font-bold\">Men: BMR = (10 × weight kg) + (6.25 × height cm) - (5 × age yrs) + 5</p>\n          <p class=\"text-[var(--foreground)] font-bold mt-1\">Women: BMR = (10 × weight kg) + (6.25 × height cm) - (5 × age yrs) - 161</p>\n        </div>\n\n        <h2>2. What is TDEE (Total Daily Energy Expenditure)?</h2>\n        <p>Your <strong>Total Daily Energy Expenditure (TDEE)</strong> is the total number of calories your body burns in 24 hours, accounting for BMR plus all physical movement, daily chores, work activity, and structured workout sessions.</p>\n        <p>TDEE is calculated by multiplying your BMR by a <strong>Physical Activity Level (PAL) Factor</strong>:</p>\n\n        <ul>\n          <li><strong>Sedentary (Desk Job, little exercise):</strong> TDEE = BMR × 1.200</li>\n          <li><strong>Lightly Active (1–3 workout days/week):</strong> TDEE = BMR × 1.375</li>\n          <li><strong>Moderately Active (3–5 workout days/week):</strong> TDEE = BMR × 1.550</li>\n          <li><strong>Very Active (6–7 heavy workout days/week):</strong> TDEE = BMR × 1.725</li>\n          <li><strong>Extra Active (Heavy physical labor / double sessions):</strong> TDEE = BMR × 1.900</li>\n        </ul>\n\n        <h2>BMR vs. TDEE Comparison Table</h2>\n        <div class=\"my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4\">\n          <table class=\"w-full text-left border-collapse text-sm\">\n            <thead>\n              <tr class=\"border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]\">\n                <th class=\"p-3\">Feature</th>\n                <th class=\"p-3\">BMR (Basal Metabolic Rate)</th>\n                <th class=\"p-3\">TDEE (Total Daily Energy Expenditure)</th>\n              </tr>\n            </thead>\n            <tbody class=\"divide-y divide-[var(--border)]\">\n              <tr>\n                <td class=\"p-3 font-semibold\">Definition</td>\n                <td class=\"p-3\">Resting calorie burn to stay alive</td>\n                <td class=\"p-3\">Total daily calories burned with movement</td>\n              </tr>\n              <tr>\n                <td class=\"p-3 font-semibold\">Activity Factor</td>\n                <td class=\"p-3\">Includes zero activity (Coma state)</td>\n                <td class=\"p-3\">Multiplies BMR by PAL factor (1.2 to 1.9)</td>\n              </tr>\n              <tr>\n                <td class=\"p-3 font-semibold\">Usage Goal</td>\n                <td class=\"p-3\">Resting energy baseline estimate</td>\n                <td class=\"p-3\">Maintenance caloric target</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n        <h2>How to Use TDEE for Weight Loss</h2>\n        <p>As a generic planning example, a moderate calorie deficit below your TDEE is sometimes referenced in dietary planning. Individual calorie needs and target rates vary based on personal health and activity goals.</p>\n        <p class=\"text-xs text-[var(--muted-foreground)] italic mt-4\">Note: A BMR estimate should not be treated as a fixed minimum calorie intake. Individual energy needs vary, and people with medical conditions or special nutritional needs should seek individualized advice from a qualified healthcare professional.</p>\n      ",
      "hi": "\n        <h2>बीएमआर (BMR) और टीडीईई (TDEE) में क्या अंतर है?</h2>\n        <p>वजन घटाने या बढ़ाने के लिए कैलोरी को समझना आवश्यक है। बीएमआर और टीडीईई आपके शरीर की ऊर्जा खपत को मापते हैं।</p>\n        \n        <ul>\n          <li><strong>BMR (बेसल मेटाबॉलिक रेट):</strong> विश्राम अवस्था में आपका शरीर जीवित रहने के लिए जितनी कैलोरी बर्न करता है।</li>\n          <li><strong>TDEE (टोटल डेली एनर्जी एक्सपेंडिचर):</strong> दिनभर की शारीरिक गतिविधियों और व्यायाम को मिलाकर कुल बर्न की गई कैलोरी।</li>\n        </ul>\n      ",
      "es": "\n          <h2>Calculadora de BMR vs TDEE: Diferencias y Cálculo de Calorías</h2>\n          <p>Entiende la diferencia entre BMR y TDEE. Aprende a calcular el déficit calórico diario.</p>\n          <p>Esta guía proporciona información detallada basada en las directrices de salud de la Organización Mundial de la Salud (OMS) y los Centros para el Control y la Prevención de Enfermedades (CDC).</p>\n          <h3>Puntos Clave y Metodología</h3>\n          <p>La evaluación se basa en mediciones estándar ajustadas a la altura y el peso, ofreciendo un contexto educativo claro para la interpretación de los datos de salud.</p>\n        ",
      "fr": "\n          <h2>Calculateur BMR vs TDEE : Différences et Calcul des Calories</h2>\n          <p>Comprenez la différence entre BMR et TDEE. Calculez votre déficit calorique quotidien.</p>\n          <p>Ce guide fournit des informations détaillées basées sur les directives de santé publiées par l'Organisation Mondiale de la Santé (OMS) et le CDC.</p>\n          <h3>Points Clés et Méthodologie</h3>\n          <p>L'évaluation repose sur des mesures standards ajustées en fonction de la taille et du poids, offrant un contexte éducatif clair pour l'interprétation des données de santé.</p>\n        ",
      "de": "\n          <h2>BMR vs. TDEE Rechner: Unterschiede & Kalorienbedarf zum Abnehmen</h2>\n          <p>Verstehen Sie den Unterschied zwischen BMR und TDEE. Kalorienbedarf zum Abnehmen berechnen.</p>\n          <p>Dieser Leitfaden bietet ausführliche Informationen basierend auf den veröffentlichten Gesundheitsrichtlinien der Weltgesundheitsorganisation (WHO) und der CDC.</p>\n          <h3>Wichtige Erkenntnisse & Methodik</h3>\n          <p>Die Auswertung basiert auf standardmäßigen Höhen- und Gewichtsmessungen und bietet einen klaren Bildungskontext zur Einordnung von Gesundheitsdaten.</p>\n        ",
      "ko": "\n          <h2>BMR vs TDEE 계산기: 핵심 차이점 및 다이어트 칼로리 계산</h2>\n          <p>기초대사량(BMR)과 일일 총 에너지 소비량(TDEE)의 차이점 및 칼로리 계산법.</p>\n          <p>본 가이드는 세계보건기구(WHO) 및 질병관리청(CDC)의 공표된 보건 지침을 바탕으로 작성된 교육 자료입니다.</p>\n          <h3>핵심 지침 및 산출 방식</h3>\n          <p>신장과 체중 비율을 바탕으로 한 표준 측정 공식을 적용하여 신체 지표를 이해하는 데 도움을 줍니다.</p>\n        "
    }
  },
  "bmi-chart-for-men-women": {
    "title": {
      "en": "BMI Chart for Men and Women (Age-Based Reference Ranges 2026)",
      "hi": "पुरुषों और महिलाओं के लिए बीएमआई चार्ट (आयु-आधारित संदर्भ सीमाएं)",
      "ko": "남성 및 여성 BMI 차트 (2026 연령별 참조 범위)",
      "de": "BMI Tabelle für Männer und Frauen (Altersbasierte Referenzwerte 2026)",
      "es": "Tabla de IMC para Hombres y Mujeres (Rangos de Referencia por Edad 2026)",
      "fr": "Tableau d'IMC pour Hommes et Femmes (Plages de Référence par Âge 2026)"
    },
    "category": {
      "en": "Health & Age Standards",
      "hi": "स्वास्थ्य और आयु मानक",
      "ko": "연령별 건강 지침",
      "de": "Altersstandards",
      "es": "Estándares por Edad",
      "fr": "Normes d'Âge"
    },
    "description": {
      "en": "Detailed gender and age-adjusted BMI reference chart. Compare body fat distribution traits between male and female adults.",
      "hi": "पुरुषों और महिलाओं के लिए विस्तृत बीएमआई संदर्भ चार्ट। लिंग और आयु के अनुसार स्वास्थ्य सीमाएं।",
      "ko": "남성과 여성을 위한 상세 성별 및 연령 조정 BMI 참조 차트.",
      "de": "Detaillierte BMI-Referenztabelle für Männer und Frauen mit altersspezifischen Richtwerten.",
      "es": "Tabla de referencia de IMC detallada para hombres y mujeres ajustada por edad.",
      "fr": "Tableau de référence détaillé de l'IMC pour hommes et femmes ajusté selon l'âge."
    },
    "contentHtml": {
      "en": "\n        <h2>Gender Differences in BMI & Body Composition</h2>\n        <p>Although standard Body Mass Index (BMI) formulas calculate height and weight identically for adult men and women, biological body composition differs significantly between sexes.</p>\n        <p>Women naturally carry higher essential fat levels (10–13%) than men (2–5%) to support reproductive functions, endocrine regulation, and childbearing. Men typically possess greater skeletal muscle mass and higher bone mineral density.</p>\n\n        <h2>Age-Based BMI Reference Chart for Adults</h2>\n        <p>As adults age, natural physiological changes occur: lean skeletal muscle mass slowly declines (sarcopenia) while body fat percentage tends to increase. Illustrative reference ranges suggest target healthy BMI windows shift upward slightly in older adults (Note: WHO and CDC maintain a single adult BMI classification standard regardless of age):</p>\n\n        <div class=\"my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4\">\n          <table class=\"w-full text-left border-collapse text-sm\">\n            <thead>\n              <tr class=\"border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]\">\n                <th class=\"p-3\">BMI Category</th>\n                <th class=\"p-3\">Standard Adult Cutoff</th>\n                <th class=\"p-3\">Asian Cutoff Threshold</th>\n                <th class=\"p-3\">Health Reference Guidance</th>\n              </tr>\n            </thead>\n            <tbody class=\"divide-y divide-[var(--border)]\">\n              <tr>\n                <td class=\"p-3 font-semibold\">Underweight</td>\n                <td class=\"p-3 font-mono font-bold text-[var(--accent)]\">&lt; 18.5 kg/m²</td>\n                <td class=\"p-3 font-mono font-bold text-[var(--accent)]\">&lt; 18.5 kg/m²</td>\n                <td class=\"p-3\">May indicate lean mass loss or nutritional deficit</td>\n              </tr>\n              <tr>\n                <td class=\"p-3 font-semibold\">Healthy Weight</td>\n                <td class=\"p-3 font-mono font-bold text-[var(--accent)]\">18.5 – 24.9 kg/m²</td>\n                <td class=\"p-3 font-mono font-bold text-[var(--accent)]\">18.5 – 22.9 kg/m²</td>\n                <td class=\"p-3\">Standard reference baseline range</td>\n              </tr>\n              <tr>\n                <td class=\"p-3 font-semibold\">Overweight</td>\n                <td class=\"p-3 font-mono font-bold text-[var(--accent)]\">25.0 – 29.9 kg/m²</td>\n                <td class=\"p-3 font-mono font-bold text-[var(--accent)]\">23.0 – 27.4 kg/m²</td>\n                <td class=\"p-3\">Moderate reference threshold; consider waist circumference</td>\n              </tr>\n              <tr>\n                <td class=\"p-3 font-semibold\">Obesity Class I</td>\n                <td class=\"p-3 font-mono font-bold text-[var(--accent)]\">30.0 – 34.9 kg/m²</td>\n                <td class=\"p-3 font-mono font-bold text-[var(--accent)]\">27.5 – 32.4 kg/m²</td>\n                <td class=\"p-3\">Elevated reference category indicator</td>\n              </tr>\n              <tr>\n                <td class=\"p-3 font-semibold\">Obesity Class II+</td>\n                <td class=\"p-3 font-mono font-bold text-[var(--accent)]\">&ge; 35.0 kg/m²</td>\n                <td class=\"p-3 font-mono font-bold text-[var(--accent)]\">&ge; 32.5 kg/m²</td>\n                <td class=\"p-3\">Higher reference category indicator</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      ",
      "hi": "\n        <h2>पुरुषों और महिलाओं के लिए बीएमआई चार्ट</h2>\n        <p>महिलाओं में प्राकृतिक रूप से पुरुषों की तुलना में अधिक वसा (10–13%) पाई जाती है। इसलिए दोनों के स्वास्थ्य लक्ष्यों में मामूली अंतर होता है।</p>\n      ",
      "es": "\n          <h2>Tabla de IMC para Hombres y Mujeres (Rangos de Referencia por Edad 2026)</h2>\n          <p>Tabla de referencia de IMC detallada para hombres y mujeres ajustada por edad.</p>\n          <p>Esta guía proporciona información detallada basada en las directrices de salud de la Organización Mundial de la Salud (OMS) y los Centros para el Control y la Prevención de Enfermedades (CDC).</p>\n          <h3>Puntos Clave y Metodología</h3>\n          <p>La evaluación se basa en mediciones estándar ajustadas a la altura y el peso, ofreciendo un contexto educativo claro para la interpretación de los datos de salud.</p>\n        ",
      "fr": "\n          <h2>Tableau d'IMC pour Hommes et Femmes (Plages de Référence par Âge 2026)</h2>\n          <p>Tableau de référence détaillé de l'IMC pour hommes et femmes ajusté selon l'âge.</p>\n          <p>Ce guide fournit des informations détaillées basées sur les directives de santé publiées par l'Organisation Mondiale de la Santé (OMS) et le CDC.</p>\n          <h3>Points Clés et Méthodologie</h3>\n          <p>L'évaluation repose sur des mesures standards ajustées en fonction de la taille et du poids, offrant un contexte éducatif clair pour l'interprétation des données de santé.</p>\n        ",
      "de": "\n          <h2>BMI Tabelle für Männer und Frauen (Altersbasierte Referenzwerte 2026)</h2>\n          <p>Detaillierte BMI-Referenztabelle für Männer und Frauen mit altersspezifischen Richtwerten.</p>\n          <p>Dieser Leitfaden bietet ausführliche Informationen basierend auf den veröffentlichten Gesundheitsrichtlinien der Weltgesundheitsorganisation (WHO) und der CDC.</p>\n          <h3>Wichtige Erkenntnisse & Methodik</h3>\n          <p>Die Auswertung basiert auf standardmäßigen Höhen- und Gewichtsmessungen und bietet einen klaren Bildungskontext zur Einordnung von Gesundheitsdaten.</p>\n        ",
      "ko": "\n          <h2>남성 및 여성 BMI 차트 (2026 연령별 참조 범위)</h2>\n          <p>남성과 여성을 위한 상세 성별 및 연령 조정 BMI 참조 차트.</p>\n          <p>본 가이드는 세계보건기구(WHO) 및 질병관리청(CDC)의 공표된 보건 지침을 바탕으로 작성된 교육 자료입니다.</p>\n          <h3>핵심 지침 및 산출 방식</h3>\n          <p>신장과 체중 비율을 바탕으로 한 표준 측정 공식을 적용하여 신체 지표를 이해하는 데 도움을 줍니다.</p>\n        "
    }
  },
  "healthy-bmi-range-indians": {
    "title": {
      "en": "Understanding BMI 18.5–22.9 in Asian-Population Reference Guidance",
      "hi": "एशियाई आबादी संदर्भ मार्गदर्शिका में बीएमआई 18.5–22.9 को समझें",
      "ko": "아시아인 참조 지침 18.5~22.9 BMI 이해하기",
      "de": "BMI 18,5–22,9 in der asiatischen Referenzleitlinie verstehen",
      "es": "Comprendiendo el IMC 18.5–22.9 en la Guía de Referencia Asiática",
      "fr": "Comprendre l'IMC 18,5–22,9 dans le Guide de Référence Asiatique"
    },
    "category": {
      "en": "Asian Health Guidance",
      "hi": "एशियाई स्वास्थ्य मार्गदर्शन",
      "ko": "아시아 건강 지침",
      "de": "Regionale Gesundheit",
      "es": "Salud Regional",
      "fr": "Santé Régionale"
    },
    "description": {
      "en": "In-depth analysis of WHO South-East Asia BMI reference guidelines. Understanding BMI 18.5–22.9 in Asian-Population Reference Guidance.",
      "hi": "डब्ल्यूएचओ दक्षिण-पूर्व एशिया बीएमआई दिशानिर्देशों का विश्लेषण। एशियाई आबादी के संदर्भ में बीएमआई 18.5–22.9 को समझें।",
      "ko": "WHO 아시아-태평양 BMI 지침 분석. 아시아인 체중 기준 18.5~22.9 이해.",
      "de": "Analyse der WHO-Richtlinien für asiatische Bevölkerungen. BMI 18,5–22,9 als Referenzwert verstehen.",
      "es": "Análisis de las pautas de la OMS para poblaciones asiáticas. Comprendiendo el IMC 18.5–22.9 como guía de referencia.",
      "fr": "Analyse des directives OMS pour les populations asiatiques. Comprendre l'IMC 18,5–22,9 comme repère de référence."
    },
    "contentHtml": {
      "en": "\n        <h2>Asian-Population BMI Guidelines & Reference Cutoffs</h2>\n        <p>Published reference guidelines from WHO expert consultations indicate that Asian and South Asian populations exhibit statistical risk indicators at lower BMI cutoffs compared to European reference populations.</p>\n        \n        <h2>Asian-Population Reference Range: 18.5 to 22.9 kg/m²</h2>\n        <p>While Western reference standards mark overweight at 25.0 kg/m², the WHO South-East Asia Regional Office established that 18.5 to 22.9 kg/m² represents a reference healthy weight range for South Asian adults. <em>BMI 18.5–22.9 is an Asian-population reference range used in some guidance; it should not be interpreted as a universal measure of an individual's healthiest weight.</em></p>\n        \n        <ul>\n          <li><strong>Healthy Reference Range:</strong> 18.5 – 22.9 kg/m²</li>\n          <li><strong>Overweight Action Threshold:</strong> ≥ 23.0 kg/m²</li>\n          <li><strong>Obesity Class I Threshold:</strong> ≥ 27.5 kg/m²</li>\n        </ul>\n      ",
      "hi": "\n        <h2>एशियाई आबादी संदर्भ मार्गदर्शिका (18.5 – 22.9 kg/m²)</h2>\n        <p>डब्ल्यूएचओ दक्षिण-पूर्व एशिया क्षेत्रीय दिशानिर्देशों के अनुसार, 18.5 से 22.9 kg/m² एशियाई आबादी के लिए एक संदर्भ सीमा है; इसे किसी व्यक्ति के व्यक्तिगत स्वस्थ वजन के सार्वभौमिक माप के रूप में नहीं समझा जाना चाहिए।</p>\n        <ul>\n          <li><strong>सामान्य संदर्भ सीमा:</strong> 18.5 – 22.9 kg/m²</li>\n          <li><strong>अधिक वजन एक्शन थ्रेसहोल्ड:</strong> ≥ 23.0 kg/m²</li>\n          <li><strong>मोटापा श्रेणी I थ्रेसहोल्ड:</strong> ≥ 27.5 kg/m²</li>\n        </ul>\n      ",
      "es": "\n        <h2>Pautas de Referencia del IMC para Poblaciones Asiáticas (18.5 – 22.9 kg/m²)</h2>\n        <p>Según las guías de la Oficina Regional de la OMS para el Sudeste Asiático, el rango de 18.5 a 22.9 kg/m² se utiliza como referencia poblacional; no debe interpretarse como una medida universal del peso más saludable de un individuo.</p>\n        <ul>\n          <li><strong>Rango de Referencia Estándar:</strong> 18.5 – 22.9 kg/m²</li>\n          <li><strong>Umbral de Acción para Sobrepeso:</strong> ≥ 23.0 kg/m²</li>\n          <li><strong>Umbral de Obesidad Clase I:</strong> ≥ 27.5 kg/m²</li>\n        </ul>\n      ",
      "fr": "\n        <h2>Directives de Référence de l'IMC pour les Populations Asiatiques (18,5 – 22,9 kg/m²)</h2>\n        <p>Selon les directives du Bureau régional de l'OMS pour l'Asie du Sud-Est, la plage de 18,5 à 22,9 kg/m² est une plage de référence ; elle ne doit pas être interprétée comme une mesure universelle du poids le plus sain d'un individu.</p>\n        <ul>\n          <li><strong>Plage de Référence Standard :</strong> 18,5 – 22,9 kg/m²</li>\n          <li><strong>Seuil d'Action pour le Surpoids :</strong> ≥ 23,0 kg/m²</li>\n          <li><strong>Seuil d'Obésité Classe I :</strong> ≥ 27,5 kg/m²</li>\n        </ul>\n      ",
      "de": "\n        <h2>Asiatische Referenz-Leitlinien für den BMI (18,5 – 22,9 kg/m²)</h2>\n        <p>Nach den Richtlinien des WHO-Regionalbüros für Südostasien dient der Bereich von 18,5 bis 22,9 kg/m² als Populationsreferenz; er sollte nicht als universelles Maß für das gesündeste Gewicht eines Einzelnen interpretiert werden.</p>\n        <ul>\n          <li><strong>Standard-Referenzbereich:</strong> 18,5 – 22,9 kg/m²</li>\n          <li><strong>Schwellenwert für Übergewicht:</strong> ≥ 23,0 kg/m²</li>\n          <li><strong>Schwellenwert für Adipositas Klasse I:</strong> ≥ 27,5 kg/m²</li>\n        </ul>\n      ",
      "ko": "\n        <h2>아시아인 BMI 참고 지침 (18.5 ~ 22.9 kg/m²)</h2>\n        <p>WHO 동남아시아 지역 사무소 지침에 따르면 18.5~22.9 kg/m²는 아시아 성인을 위한 인구 집단 참고 범위입니다. 이는 개인의 가장 건강한 체중에 대한 보편적인 측정 기준으로 해석되어서는 안 됩니다.</p>\n        <ul>\n          <li><strong>표준 참고 범위:</strong> 18.5 – 22.9 kg/m²</li>\n          <li><strong>과체중 조치 기준:</strong> ≥ 23.0 kg/m²</li>\n          <li><strong>비만 1단계 기준:</strong> ≥ 27.5 kg/m²</li>\n        </ul>\n      "
    }
  },
  "bmi-calculator-teens": {
    "title": {
      "en": "BMI Calculator for Teens & Children: Growth Charts & Percentiles",
      "hi": "किशोरों और बच्चों के लिए बीएमआई कैलकुलेटर: पर्सेंटाइल और ग्रोथ चार्ट",
      "ko": "청소년 및 어린이용 BMI 계산기: 성장 차트 백분위수",
      "de": "BMI-Rechner für Kinder & Jugendliche: Perzentilen & Wachstum",
      "es": "Calculadora de IMC para Niños y Adolescentes: Percentiles",
      "fr": "Calculateur d'IMC pour Enfants et Adolescents : Percentiles"
    },
    "category": {
      "en": "Pediatric Health",
      "hi": "बाल स्वास्थ्य",
      "ko": "소아 건강",
      "de": "Kindergesundheit",
      "es": "Salud Infantil",
      "fr": "Santé Pédiatrique"
    },
    "description": {
      "en": "Guide to pediatric BMI percentiles for children and teenagers (ages 2 to 19). Learn how CDC growth charts evaluate youth health.",
      "hi": "बच्चों और किशोरों (2 से 19 वर्ष) के लिए बीएमआई पर्सेंटाइल गाइड। सीडीसी ग्रोथ चार्ट के आधार पर स्वास्थ्य मूल्यांकन।",
      "ko": "어린이 및 청소년(2~19세)을 위한 소아 BMI 백분위수 가이드.",
      "de": "Leitfaden zu Perzentilen für Kinder und Jugendliche (2–19 Jahre) basierend auf WHO- und CDC-Wachstumstabellen.",
      "es": "Guía de percentiles de IMC para niños y adolescentes (2 a 19 años) según las tablas de crecimiento del CDC.",
      "fr": "Guide des percentiles d'IMC pour enfants et adolescents (2 à 19 ans) selon les courbes de croissance du CDC."
    },
    "contentHtml": {
      "en": "\n        <h2>Pediatric BMI & CDC Percentiles Explained</h2>\n        <p>In children and teens (ages 2 through 19), body composition changes constantly with growth and differs markedly between boys and girls. Therefore, fixed adult BMI numbers (18.5, 25, 30) do not apply to youth.</p>\n        <p>Instead, pediatricians evaluate youth health using <strong>CDC Growth Chart Percentiles</strong>, comparing a child's BMI against peers of the same age and biological sex:</p>\n\n        <ul>\n          <li><strong>Underweight:</strong> Below the 5th percentile</li>\n          <li><strong>Healthy Weight:</strong> 5th percentile to less than the 85th percentile</li>\n          <li><strong>Overweight:</strong> 85th to less than the 95th percentile</li>\n          <li><strong>Obesity:</strong> Equal to or greater than the 95th percentile</li>\n        </ul>\n      ",
      "hi": "\n        <h2>बच्चों और किशोरों में बीएमआई पर्सेंटाइल</h2>\n        <p>बच्चों में उम्र और लंबाई के साथ बीएमआई बदलता है, इसलिए वयस्कों का बीएमआई कट-ऑफ बच्चों पर लागू नहीं होता।</p>\n      ",
      "es": "\n          <h2>Calculadora de IMC para Niños y Adolescentes: Percentiles</h2>\n          <p>Guía de percentiles de IMC para niños y adolescentes (2 a 19 años) según las tablas de crecimiento del CDC.</p>\n          <p>Esta guía proporciona información detallada basada en las directrices de salud de la Organización Mundial de la Salud (OMS) y los Centros para el Control y la Prevención de Enfermedades (CDC).</p>\n          <h3>Puntos Clave y Metodología</h3>\n          <p>La evaluación se basa en mediciones estándar ajustadas a la altura y el peso, ofreciendo un contexto educativo claro para la interpretación de los datos de salud.</p>\n        ",
      "fr": "\n          <h2>Calculateur d'IMC pour Enfants et Adolescents : Percentiles</h2>\n          <p>Guide des percentiles d'IMC pour enfants et adolescents (2 à 19 ans) selon les courbes de croissance du CDC.</p>\n          <p>Ce guide fournit des informations détaillées basées sur les directives de santé publiées par l'Organisation Mondiale de la Santé (OMS) et le CDC.</p>\n          <h3>Points Clés et Méthodologie</h3>\n          <p>L'évaluation repose sur des mesures standards ajustées en fonction de la taille et du poids, offrant un contexte éducatif clair pour l'interprétation des données de santé.</p>\n        ",
      "de": "\n          <h2>BMI-Rechner für Kinder & Jugendliche: Perzentilen & Wachstum</h2>\n          <p>Leitfaden zu Perzentilen für Kinder und Jugendliche (2–19 Jahre) basierend auf WHO- und CDC-Wachstumstabellen.</p>\n          <p>Dieser Leitfaden bietet ausführliche Informationen basierend auf den veröffentlichten Gesundheitsrichtlinien der Weltgesundheitsorganisation (WHO) und der CDC.</p>\n          <h3>Wichtige Erkenntnisse & Methodik</h3>\n          <p>Die Auswertung basiert auf standardmäßigen Höhen- und Gewichtsmessungen und bietet einen klaren Bildungskontext zur Einordnung von Gesundheitsdaten.</p>\n        ",
      "ko": "\n          <h2>청소년 및 어린이용 BMI 계산기: 성장 차트 백분위수</h2>\n          <p>어린이 및 청소년(2~19세)을 위한 소아 BMI 백분위수 가이드.</p>\n          <p>본 가이드는 세계보건기구(WHO) 및 질병관리청(CDC)의 공표된 보건 지침을 바탕으로 작성된 교육 자료입니다.</p>\n          <h3>핵심 지침 및 산출 방식</h3>\n          <p>신장과 체중 비율을 바탕으로 한 표준 측정 공식을 적용하여 신체 지표를 이해하는 데 도움을 줍니다.</p>\n        "
    }
  },
  "bmi-by-age": {
    "title": {
      "en": "BMI by Age Chart: Children, Adults & Seniors Health Cut-offs",
      "hi": "उम्र के अनुसार बीएमआई चार्ट: बच्चों, वयस्कों और बुजुर्गों के लिए गाइड",
      "ko": "연령별 BMI 차트: 어린이, 성인 및 노인 건강 기준",
      "de": "BMI nach Alter: Altersabhängige Richtwerte für Kinder & Senioren",
      "es": "Tabla de IMC por Edad: Niños, Adultos y Adultos Mayores",
      "fr": "IMC par Âge : Enfants, Adultes et Seniors"
    },
    "category": {
      "en": "Age & Metrics",
      "hi": "आयु एवं मापदंड",
      "ko": "연령 및 지표",
      "de": "Alter & Metriken",
      "es": "Edad y Métricas",
      "fr": "Santé et Âge"
    },
    "description": {
      "en": "Learn how age impacts BMI interpretation. View BMI charts by age for kids, teens, adults, and elderly seniors with WHO percentiles.",
      "hi": "उम्र के अनुसार बीएमआई कैसे बदलता है। बच्चों, वयस्कों और बुजुर्गों के लिए बीएमआई चार्ट और स्वास्थ्य दिशानिर्देश।",
      "ko": "연령이 BMI 해석에 미치는 영향. 어린이, 청소년 백분위수 및 노년층 건강 BMI 범위 안내.",
      "de": "Erfahren Sie, wie das Alter die BMI-Interpretation beeinflusst. BMI-Tabellen für Kinder, Erwachsene und Senioren.",
      "es": "Aprende cómo afecta la edad a la interpretación del IMC. Tablas de IMC por edad para niños, adultos y mayores.",
      "fr": "Découvrez l'impact de l'âge sur l'interprétation de l'IMC. Tableaux d'IMC par âge pour enfants, adultes et seniors."
    },
    "contentHtml": {
      "en": "\n        <h2>How Age Alters BMI Interpretation</h2>\n        <p>A person's age can influence body composition, muscle density, and fat distribution. WHO and CDC adult BMI classifications maintain a single standard adult reference category table regardless of age. Age-related interpretation may require additional context from a healthcare provider.</p>\n      ",
      "hi": "\n        <h2>उम्र के साथ बीएमआई में बदलाव</h2>\n        <p>उम्र के साथ शरीर की संरचना में स्वाभाविक बदलाव आते हैं। डब्ल्यूएचओ और सीडीसी वयस्क बीएमआई वर्गीकरण प्रत्येक आयु वर्ग के लिए अलग तालिका का उपयोग नहीं करते हैं। आयु-संबंधित संदर्भ के लिए अतिरिक्त स्वास्थ्य जानकारी आवश्यक हो सकती है।</p>\n      ",
      "es": "\n          <h2>Tabla de IMC por Edad: Niños, Adultos y Adultos Mayores</h2>\n          <p>Aprende cómo afecta la edad a la interpretación del IMC. Tablas de IMC por edad para niños, adultos y mayores.</p>\n          <p>Esta guía proporciona información detallada basada en las directrices de salud de la Organización Mundial de la Salud (OMS) y los Centros para el Control y la Prevención de Enfermedades (CDC).</p>\n          <h3>Puntos Clave y Metodología</h3>\n          <p>La evaluación se basa en mediciones estándar ajustadas a la altura y el peso, ofreciendo un contexto educativo claro para la interpretación de los datos de salud.</p>\n        ",
      "fr": "\n          <h2>IMC par Âge : Enfants, Adultes et Seniors</h2>\n          <p>Découvrez l'impact de l'âge sur l'interprétation de l'IMC. Tableaux d'IMC par âge pour enfants, adultes et seniors.</p>\n          <p>Ce guide fournit des informations détaillées basées sur les directives de santé publiées par l'Organisation Mondiale de la Santé (OMS) et le CDC.</p>\n          <h3>Points Clés et Méthodologie</h3>\n          <p>L'évaluation repose sur des mesures standards ajustées en fonction de la taille et du poids, offrant un contexte éducatif clair pour l'interprétation des données de santé.</p>\n        ",
      "de": "\n          <h2>BMI nach Alter: Altersabhängige Richtwerte für Kinder & Senioren</h2>\n          <p>Erfahren Sie, wie das Alter die BMI-Interpretation beeinflusst. BMI-Tabellen für Kinder, Erwachsene und Senioren.</p>\n          <p>Dieser Leitfaden bietet ausführliche Informationen basierend auf den veröffentlichten Gesundheitsrichtlinien der Weltgesundheitsorganisation (WHO) und der CDC.</p>\n          <h3>Wichtige Erkenntnisse & Methodik</h3>\n          <p>Die Auswertung basiert auf standardmäßigen Höhen- und Gewichtsmessungen und bietet einen klaren Bildungskontext zur Einordnung von Gesundheitsdaten.</p>\n        ",
      "ko": "\n          <h2>연령별 BMI 차트: 어린이, 성인 및 노인 건강 기준</h2>\n          <p>연령이 BMI 해석에 미치는 영향. 어린이, 청소년 백분위수 및 노년층 건강 BMI 범위 안내.</p>\n          <p>본 가이드는 세계보건기구(WHO) 및 질병관리청(CDC)의 공표된 보건 지침을 바탕으로 작성된 교육 자료입니다.</p>\n          <h3>핵심 지침 및 산출 방식</h3>\n          <p>신장과 체중 비율을 바탕으로 한 표준 측정 공식을 적용하여 신체 지표를 이해하는 데 도움을 줍니다.</p>\n        "
    }
  },
  "bmi-chart": {
    "title": {
      "en": "BMI Chart 2026: Visual Weight Status Grid & Category Cut-offs",
      "hi": "बीएमआई चार्ट 2026: वजन श्रेणी ग्रिड और विस्तृत कट-ऑफ",
      "ko": "2026 BMI 차트: 시각적 체중 범주 및 건강 기준",
      "de": "BMI Tabelle 2026: Übersichtliche Gewichtstabelle & WHO-Kategorien",
      "es": "Tabla de IMC 2026: Cuadrícula Visual de Peso y Categorías de la OMS",
      "fr": "Tableau d'IMC 2026 : Grille Visuelle des Catégories et Normes OMS"
    },
    "category": {
      "en": "Visual Reference",
      "hi": "विजुअल संदर्भ",
      "ko": "시각적 참조",
      "de": "Visuelle Referenz",
      "es": "Referencia Visual",
      "fr": "Référence Visuelle"
    },
    "description": {
      "en": "Complete visual BMI chart for men and women. View height vs weight grid, global vs Asian thresholds, and health risk indicators.",
      "hi": "पुरुषों और महिलाओं के लिए बीएमआई चार्ट। ऊंचाई बनाम वजन ग्रिड, वैश्विक और भारतीय मानकों के साथ।",
      "ko": "남성과 여성을 위한 시각적 BMI 차트. 키와 체중 대비 비만도 범주 한눈에 확인.",
      "de": "Vollständige visuelle BMI-Tabelle für Männer und Frauen. Körpergröße vs. Gewichtstabelle und Risikostufen.",
      "es": "Tabla visual completa de IMC para hombres y mujeres. Cuadrícula de altura frente a peso y niveles de riesgo.",
      "fr": "Tableau visuel complet d'IMC pour hommes et femmes. Grille taille/poids et indicateurs de risque pour la santé."
    },
    "contentHtml": {
      "en": "\n        <h2>Complete BMI Reference Chart</h2>\n        <p>The BMI chart grid helps adults quickly determine where their weight falls relative to height. Locate your height in inches or centimeters along the side and match it with your weight in pounds or kilograms.</p>\n      ",
      "hi": "\n        <h2>बीएमआई संदर्भ चार्ट 2026</h2>\n        <p>यह चार्ट आपकी ऊंचाई और वजन के आधार पर आपकी स्वास्थ्य श्रेणी को तुरंत जानने में मदद करता है।</p>\n      ",
      "es": "\n          <h2>Tabla de IMC 2026: Cuadrícula Visual de Peso y Categorías de la OMS</h2>\n          <p>Tabla visual completa de IMC para hombres y mujeres. Cuadrícula de altura frente a peso y niveles de riesgo.</p>\n          <p>Esta guía proporciona información detallada basada en las directrices de salud de la Organización Mundial de la Salud (OMS) y los Centros para el Control y la Prevención de Enfermedades (CDC).</p>\n          <h3>Puntos Clave y Metodología</h3>\n          <p>La evaluación se basa en mediciones estándar ajustadas a la altura y el peso, ofreciendo un contexto educativo claro para la interpretación de los datos de salud.</p>\n        ",
      "fr": "\n          <h2>Tableau d'IMC 2026 : Grille Visuelle des Catégories et Normes OMS</h2>\n          <p>Tableau visuel complet d'IMC pour hommes et femmes. Grille taille/poids et indicateurs de risque pour la santé.</p>\n          <p>Ce guide fournit des informations détaillées basées sur les directives de santé publiées par l'Organisation Mondiale de la Santé (OMS) et le CDC.</p>\n          <h3>Points Clés et Méthodologie</h3>\n          <p>L'évaluation repose sur des mesures standards ajustées en fonction de la taille et du poids, offrant un contexte éducatif clair pour l'interprétation des données de santé.</p>\n        ",
      "de": "\n          <h2>BMI Tabelle 2026: Übersichtliche Gewichtstabelle & WHO-Kategorien</h2>\n          <p>Vollständige visuelle BMI-Tabelle für Männer und Frauen. Körpergröße vs. Gewichtstabelle und Risikostufen.</p>\n          <p>Dieser Leitfaden bietet ausführliche Informationen basierend auf den veröffentlichten Gesundheitsrichtlinien der Weltgesundheitsorganisation (WHO) und der CDC.</p>\n          <h3>Wichtige Erkenntnisse & Methodik</h3>\n          <p>Die Auswertung basiert auf standardmäßigen Höhen- und Gewichtsmessungen und bietet einen klaren Bildungskontext zur Einordnung von Gesundheitsdaten.</p>\n        ",
      "ko": "\n          <h2>2026 BMI 차트: 시각적 체중 범주 및 건강 기준</h2>\n          <p>남성과 여성을 위한 시각적 BMI 차트. 키와 체중 대비 비만도 범주 한눈에 확인.</p>\n          <p>본 가이드는 세계보건기구(WHO) 및 질병관리청(CDC)의 공표된 보건 지침을 바탕으로 작성된 교육 자료입니다.</p>\n          <h3>핵심 지침 및 산출 방식</h3>\n          <p>신장과 체중 비율을 바탕으로 한 표준 측정 공식을 적용하여 신체 지표를 이해하는 데 도움을 줍니다.</p>\n        "
    }
  },
  "healthy-weight-chart": {
    "title": {
      "en": "Healthy Weight Chart by Height for Men & Women (kg & lbs)",
      "hi": "ऊंचाई के अनुसार स्वस्थ वजन चार्ट: पुरुषों और महिलाओं के लिए",
      "ko": "신장별 적정 체중 차트: 남성 및 여성 (kg & lbs)",
      "de": "Idealgewicht Tabelle nach Körpergröße für Männer & Frauen",
      "es": "Tabla de Peso Saludable por Estatura para Hombres y Mujeres",
      "fr": "Tableau du Poids Idéal selon la Taille pour Hommes et Femmes"
    },
    "category": {
      "en": "Weight Management",
      "hi": "वजन प्रबंधन",
      "ko": "체중 관리",
      "de": "Gewichtsmanagement",
      "es": "Control de Peso",
      "fr": "Gestion du Poids"
    },
    "description": {
      "en": "Find your ideal healthy weight target based on height. Includes metric (cm/kg) and imperial (ft-in/lbs) reference tables for adults.",
      "hi": "अपनी ऊंचाई के अनुसार अपना आदर्श स्वस्थ वजन जानें। किलोग्राम और पाउंड में आसान संदर्भ तालिकाएं।",
      "ko": "키에 따른 이상적인 적정 체중 범위를 확인하세요. 미터법(cm/kg) 참조 표 제공.",
      "de": "Finden Sie Ihr ideales Zielgewicht basierend auf Ihrer Körpergröße. Enthält Tabellen in kg und lbs.",
      "es": "Encuentra tu peso ideal saludable según tu estatura. Incluye tablas de referencia en kg y lbs.",
      "fr": "Trouvez votre poids idéal selon votre taille. Comprend des tableaux de référence en kg et lbs."
    },
    "contentHtml": {
      "en": "\n        <h2>Healthy Weight Targets by Height</h2>\n        <p>Your healthy weight range by height is the mass span at which your BMI stays between 18.5 and 24.9 kg/m². Using published equations (such as the Devine and Robinson formulas), adults can evaluate reference body weight targets.</p>\n      ",
      "hi": "\n        <h2>ऊंचाई के अनुसार स्वस्थ वजन की सीमा</h2>\n        <p>अपनी ऊंचाई के अनुसार सही वजन सीमा जानने से वजन प्रबंधन में आसानी होती है।</p>\n      ",
      "es": "\n          <h2>Tabla de Peso Saludable por Estatura para Hombres y Mujeres</h2>\n          <p>Encuentra tu peso ideal saludable según tu estatura. Incluye tablas de referencia en kg y lbs.</p>\n          <p>Esta guía proporciona información detallada basada en las directrices de salud de la Organización Mundial de la Salud (OMS) y los Centros para el Control y la Prevención de Enfermedades (CDC).</p>\n          <h3>Puntos Clave y Metodología</h3>\n          <p>La evaluación se basa en mediciones estándar ajustadas a la altura y el peso, ofreciendo un contexto educativo claro para la interpretación de los datos de salud.</p>\n        ",
      "fr": "\n          <h2>Tableau du Poids Idéal selon la Taille pour Hommes et Femmes</h2>\n          <p>Trouvez votre poids idéal selon votre taille. Comprend des tableaux de référence en kg et lbs.</p>\n          <p>Ce guide fournit des informations détaillées basées sur les directives de santé publiées par l'Organisation Mondiale de la Santé (OMS) et le CDC.</p>\n          <h3>Points Clés et Méthodologie</h3>\n          <p>L'évaluation repose sur des mesures standards ajustées en fonction de la taille et du poids, offrant un contexte éducatif clair pour l'interprétation des données de santé.</p>\n        ",
      "de": "\n          <h2>Idealgewicht Tabelle nach Körpergröße für Männer & Frauen</h2>\n          <p>Finden Sie Ihr ideales Zielgewicht basierend auf Ihrer Körpergröße. Enthält Tabellen in kg und lbs.</p>\n          <p>Dieser Leitfaden bietet ausführliche Informationen basierend auf den veröffentlichten Gesundheitsrichtlinien der Weltgesundheitsorganisation (WHO) und der CDC.</p>\n          <h3>Wichtige Erkenntnisse & Methodik</h3>\n          <p>Die Auswertung basiert auf standardmäßigen Höhen- und Gewichtsmessungen und bietet einen klaren Bildungskontext zur Einordnung von Gesundheitsdaten.</p>\n        ",
      "ko": "\n          <h2>신장별 적정 체중 차트: 남성 및 여성 (kg & lbs)</h2>\n          <p>키에 따른 이상적인 적정 체중 범위를 확인하세요. 미터법(cm/kg) 참조 표 제공.</p>\n          <p>본 가이드는 세계보건기구(WHO) 및 질병관리청(CDC)의 공표된 보건 지침을 바탕으로 작성된 교육 자료입니다.</p>\n          <h3>핵심 지침 및 산출 방식</h3>\n          <p>신장과 체중 비율을 바탕으로 한 표준 측정 공식을 적용하여 신체 지표를 이해하는 데 도움을 줍니다.</p>\n        "
    }
  },
  "bmi-vs-body-fat": {
    "title": {
      "en": "BMI vs. Body Fat Percentage: Key Differences & Which is Better?",
      "hi": "बीएमआई बनाम बॉडी फैट प्रतिशत: मुख्य अंतर और कौन सा बेहतर है?",
      "ko": "BMI vs 체지방률: 핵심 차이점과 더 정확한 지표는?",
      "de": "BMI vs. Körperfettanteil: Unterschiede & was ist genauer?",
      "es": "IMC vs Porcentaje de Grasa Corporal: Diferencias Principales",
      "fr": "IMC vs Pourcentage de Graisse Corporelle : Différences Clés"
    },
    "category": {
      "en": "Body Composition",
      "hi": "शरीर संरचना",
      "ko": "체성분 분석",
      "de": "Körperzusammensetzung",
      "es": "Composición Corporal",
      "fr": "Composition Corporelle"
    },
    "description": {
      "en": "Compare BMI score against Body Fat Percentage. Learn why body fat percentage provides a more accurate measure of athletic lean body mass.",
      "hi": "बीएमआई और बॉडी फैट प्रतिशत की तुलना करें। जानें कि शारीरिक फिटनेस के लिए कौन सा मापदंड अधिक सटीक है।",
      "ko": "BMI와 체지방률의 차이점 비교. 왜 체지방률이 근육량과 지방을 정확히 구분하는가?",
      "de": "Vergleichen Sie den BMI mit dem Körperfettanteil. Welcher Messwert ist für Ihre Fitnessziele besser?",
      "es": "Compara el IMC con el porcentaje de grasa corporal. Descubre cuál es más preciso para tus objetivos de salud.",
      "fr": "Comparez l'IMC au pourcentage de graisse corporelle. Découvrez quel indicateur est le plus précis."
    },
    "contentHtml": {
      "en": "\n        <h2>BMI vs. Body Fat Percentage: What is the Difference?</h2>\n        <p>While <strong>BMI</strong> measures total body mass relative to height, <strong>Body Fat Percentage (% Fat)</strong> estimates the proportion of body mass that is fat versus lean tissue (skeletal muscle, bone, and water).</p>\n        <p>For active individuals, athletes, and fitness enthusiasts, Body Fat Percentage offers additional insight into physical conditioning compared to scale weight alone.</p>\n      ",
      "hi": "\n        <h2>बीएमआई बनाम बॉडी फैट प्रतिशत</h2>\n        <p>बीएमआई कुल वजन को मापता है, जबकि बॉडी फैट प्रतिशत यह बताता है कि शरीर में कुल वजन का कितना हिस्सा फैट है।</p>\n      ",
      "es": "\n          <h2>IMC vs Porcentaje de Grasa Corporal: Diferencias Principales</h2>\n          <p>Compara el IMC con el porcentaje de grasa corporal. Descubre cuál es más preciso para tus objetivos de salud.</p>\n          <p>Esta guía proporciona información detallada basada en las directrices de salud de la Organización Mundial de la Salud (OMS) y los Centros para el Control y la Prevención de Enfermedades (CDC).</p>\n          <h3>Puntos Clave y Metodología</h3>\n          <p>La evaluación se basa en mediciones estándar ajustadas a la altura y el peso, ofreciendo un contexto educativo claro para la interpretación de los datos de salud.</p>\n        ",
      "fr": "\n          <h2>IMC vs Pourcentage de Graisse Corporelle : Différences Clés</h2>\n          <p>Comparez l'IMC au pourcentage de graisse corporelle. Découvrez quel indicateur est le plus précis.</p>\n          <p>Ce guide fournit des informations détaillées basées sur les directives de santé publiées par l'Organisation Mondiale de la Santé (OMS) et le CDC.</p>\n          <h3>Points Clés et Méthodologie</h3>\n          <p>L'évaluation repose sur des mesures standards ajustées en fonction de la taille et du poids, offrant un contexte éducatif clair pour l'interprétation des données de santé.</p>\n        ",
      "de": "\n          <h2>BMI vs. Körperfettanteil: Unterschiede & was ist genauer?</h2>\n          <p>Vergleichen Sie den BMI mit dem Körperfettanteil. Welcher Messwert ist für Ihre Fitnessziele besser?</p>\n          <p>Dieser Leitfaden bietet ausführliche Informationen basierend auf den veröffentlichten Gesundheitsrichtlinien der Weltgesundheitsorganisation (WHO) und der CDC.</p>\n          <h3>Wichtige Erkenntnisse & Methodik</h3>\n          <p>Die Auswertung basiert auf standardmäßigen Höhen- und Gewichtsmessungen und bietet einen klaren Bildungskontext zur Einordnung von Gesundheitsdaten.</p>\n        ",
      "ko": "\n          <h2>BMI vs 체지방률: 핵심 차이점과 더 정확한 지표는?</h2>\n          <p>BMI와 체지방률의 차이점 비교. 왜 체지방률이 근육량과 지방을 정확히 구분하는가?</p>\n          <p>본 가이드는 세계보건기구(WHO) 및 질병관리청(CDC)의 공표된 보건 지침을 바탕으로 작성된 교육 자료입니다.</p>\n          <h3>핵심 지침 및 산출 방식</h3>\n          <p>신장과 체중 비율을 바탕으로 한 표준 측정 공식을 적용하여 신체 지표를 이해하는 데 도움을 줍니다.</p>\n        "
    }
  }
};