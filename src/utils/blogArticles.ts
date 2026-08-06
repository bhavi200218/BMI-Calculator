export const blogArticles: Record<string, any> = {
  'bmi-calculator-india': {
    title: {
      en: 'BMI Calculator India (2026 Guide): Revised WHO Ranges, Formula & Chart',
      hi: 'बीएमआई कैलकुलेटर इंडिया (2026 गाइड): संशोधित डब्ल्यूएचओ सीमा, फॉर्मूला और चार्ट',
      ko: '인도 BMI 계산기 (2026 가이드): 개정된 WHO 범주, 공식 및 차트',
      de: 'BMI Rechner Indien (Leitfaden 2026): WHO-Standards, Formel & Tabelle',
      es: 'Calculadora de IMC India (Guía 2026): Rangos de la OMS, Fórmula y Tabla',
      fr: 'Calculateur IMC Inde (Guide 2026) : Normes OMS, Formule et Tableau'
    },
    category: {
      en: 'Clinical Guidelines India',
      hi: 'नैदानिक निर्देश भारत',
      ko: '임상 지침',
      de: 'Klinische Leitlinien',
      es: 'Pautas Clínicas',
      fr: 'Directives Cliniques'
    },
    description: {
      en: 'Complete 2026 guide on BMI for Indians. Learn why 23 is overweight in India, WHO South-East Asia cut-offs, ideal weight chart, formula, and FAQs.',
      hi: 'भारतीयों के लिए बीएमआई की संपूर्ण 2026 गाइड। जानें कि भारत में 23 पर ही ओवरवेट क्यों माना जाता है, फॉर्मूला, चार्ट और उत्तर।',
      ko: '인도인 및 아시아인을 위한 BMI 2026 가이드. 아시아인 과체중 기준이 23인 이유와 WHO 지침, 공식 및 FAQ 안내.',
      de: 'Vollständiger Leitfaden zum BMI für asiatische Bevölkerungen. Warum 23 als Übergewicht gilt, WHO-Standards und Formeln.',
      es: 'Guía completa sobre el IMC para poblaciones asiáticas. Aprende por qué 23 es sobrepeso, límites de la OMS y fórmulas.',
      fr: 'Guide complet sur l\'IMC pour les populations asiatiques. Découvrez pourquoi 23 est un surpoids, normes OMS et formules.'
    },
    contentHtml: {
      en: `
        <h2>What is BMI?</h2>
        <p>Body Mass Index (BMI) is a universal clinical screening metric that evaluates body weight relative to height (expressed as kg/m²). It helps healthcare professionals and individuals quickly determine weight categories.</p>
        <h2>BMI Formula</h2>
        <div class="my-6 p-6 rounded-xl border border-[var(--border)] bg-[var(--card)] font-mono text-sm leading-relaxed">
          <p class="font-bold text-[var(--accent)] mb-2">Metric Formula (Kilograms & Meters):</p>
          <p class="text-[var(--foreground)] font-bold">BMI = Weight (kg) / [Height (m)]²</p>
        </div>
      `,
      hi: `
        <h2>बीएमआई (BMI) क्या है?</h2>
        <p>बॉडी मास इंडेक्स (BMI) एक अंतरराष्ट्रीय नैदानिक मापदंड है जो ऊंचाई के अनुपात में शरीर के वजन का मूल्यांकन करता है।</p>
        <h2>बीएमआई फॉर्मूला (BMI Formula)</h2>
        <div class="my-6 p-6 rounded-xl border border-[var(--border)] bg-[var(--card)] font-mono text-sm leading-relaxed">
          <p class="font-bold text-[var(--accent)] mb-2">मीट्रिक फॉर्मूला (किलोग्राम और मीटर):</p>
          <p class="text-[var(--foreground)] font-bold">BMI = वजन (kg) / [ऊंचाई (m)]²</p>
        </div>
      `,
      ko: `
        <h2>BMI(체질량지수)란 무엇인가요?</h2>
        <p>체질량지수(BMI)는 키 대비 체중을 평가하는 글로벌 임상 스크리닝 지표(kg/m²)입니다.</p>
        <h2>BMI 계산 공식</h2>
        <div class="my-6 p-6 rounded-xl border border-[var(--border)] bg-[var(--card)] font-mono text-sm leading-relaxed">
          <p class="font-bold text-[var(--accent)] mb-2">미터법 공식 (킬로그램 & 미터):</p>
          <p class="text-[var(--foreground)] font-bold">BMI = 체중 (kg) / [키 (m)]²</p>
        </div>
      `,
      de: `
        <h2>Was ist der BMI?</h2>
        <p>Der Body-Mass-Index (BMI) ist ein weltweit anerkannter klinischer Messwert zur Beurteilung des Körpergewichts im Verhältnis zur Körpergröße (kg/m²).</p>
        <h2>BMI-Berechnungsformel</h2>
        <div class="my-6 p-6 rounded-xl border border-[var(--border)] bg-[var(--card)] font-mono text-sm leading-relaxed">
          <p class="font-bold text-[var(--accent)] mb-2">Metrische Formel (Kilogramm & Meter):</p>
          <p class="text-[var(--foreground)] font-bold">BMI = Gewicht (kg) / [Größe (m)]²</p>
        </div>
      `,
      es: `
        <h2>¿Qué es el IMC?</h2>
        <p>El Índice de Masa Corporal (IMC) es una métrica de evaluación clínica universal que evalúa el peso corporal en relación con la estatura (kg/m²).</p>
        <h2>Fórmula del IMC</h2>
        <div class="my-6 p-6 rounded-xl border border-[var(--border)] bg-[var(--card)] font-mono text-sm leading-relaxed">
          <p class="font-bold text-[var(--accent)] mb-2">Fórmula Métrica (Kilogramos y Metros):</p>
          <p class="text-[var(--foreground)] font-bold">IMC = Peso (kg) / [Estatura (m)]²</p>
        </div>
      `,
      fr: `
        <h2>Qu'est-ce que l'IMC ?</h2>
        <p>L'Indice de Masse Corporelle (IMC) est un indicateur médical universel permettant d'évaluer le poids par rapport à la taille (kg/m²).</p>
        <h2>Formule de Calcul de l'IMC</h2>
        <div class="my-6 p-6 rounded-xl border border-[var(--border)] bg-[var(--card)] font-mono text-sm leading-relaxed">
          <p class="font-bold text-[var(--accent)] mb-2">Formule Métrique (Kilogrammes & Mètres) :</p>
          <p class="text-[var(--foreground)] font-bold">IMC = Poids (kg) / [Taille (m)]²</p>
        </div>
      `
    }
  },

  'what-is-bmi': {
    title: {
      en: 'What is BMI? Body Mass Index Definition, Calculation & Health Meaning',
      hi: 'बीएमआई क्या है? बॉडी मास इंडेक्स की पूरी जानकारी और स्वास्थ्य प्रभाव',
      ko: 'BMI(체질량지수)란? 정의, 계산 법 및 건강 지표 안내',
      de: 'Was ist der BMI? Definition, Berechnung & Bedeutung für die Gesundheit',
      es: '¿Qué es el IMC? Definición del Índice de Masa Corporal y Salud',
      fr: 'Qu\'est-ce que l\'IMC ? Définition, Calcul et Signification pour la Santé'
    },
    category: {
      en: 'Clinical Basics',
      hi: 'नैदानिक मूल बातें',
      ko: '임상 기초',
      de: 'Klinische Grundlagen',
      es: 'Conceptos Clínicos',
      fr: 'Bases Cliniques'
    },
    description: {
      en: 'Understand Body Mass Index (BMI). Learn what BMI means, how it is calculated, official WHO categories, clinical limitations, and health implications.',
      hi: 'बॉडी मास इंडेक्स (BMI) को विस्तार से समझें। बीएमआई का क्या अर्थ है, इसे कैसे मापा जाता है और इसका स्वास्थ्य महत्व क्या है।',
      ko: '체질량지수(BMI)의 정의와 공식, WHO 공식 지침 범주, 임상적 한계점 및 건강 의미를 자세히 알아보세요.',
      de: 'Verstehen Sie den Body-Mass-Index (BMI), offizielle WHO-Kategorien, klinische Grenzen und gesundheitliche Bedeutung.',
      es: 'Comprende el Índice de Masa Corporal (IMC), categorías oficiales de la OMS, limitaciones clínicas e implicaciones para la salud.',
      fr: 'Comprenez l\'Indice de Masse Corporelle (IMC), les catégories officielles de l\'OMS, les limites cliniques et les risques pour la santé.'
    },
    contentHtml: {
      en: `
        <h2>What is BMI (Body Mass Index)?</h2>
        <p>Body Mass Index (BMI) is a standardized mathematical metric used worldwide by clinical practitioners to assess weight relative to height.</p>
        <h2>WHO BMI Categories</h2>
        <ul class="list-disc pl-6 space-y-2 my-4">
          <li><strong>Underweight:</strong> &lt; 18.5 kg/m²</li>
          <li><strong>Healthy Weight:</strong> 18.5 – 24.9 kg/m²</li>
          <li><strong>Overweight:</strong> 25.0 – 29.9 kg/m²</li>
          <li><strong>Obesity:</strong> ≥ 30.0 kg/m²</li>
        </ul>
      `,
      hi: `
        <h2>बीएमआई (Body Mass Index) क्या है?</h2>
        <p>बॉडी मास इंडेक्स (बीएमआई) दुनिया भर में डॉक्टरों द्वारा इस्तेमाल किया जाने वाला एक मापदंड है।</p>
        <h2>डब्ल्यूएचओ (WHO) बीएमआई श्रेणियां</h2>
        <ul class="list-disc pl-6 space-y-2 my-4">
          <li><strong>कम वजन:</strong> 18.5 से कम</li>
          <li><strong>सामान्य वजन:</strong> 18.5 – 24.9</li>
          <li><strong>अधिक वजन:</strong> 25.0 – 29.9</li>
          <li><strong>मोटापा:</strong> 30.0 या अधिक</li>
        </ul>
      `,
      ko: `
        <h2>BMI(체질량지수)의 정의</h2>
        <p>체질량지수(BMI)는 키 대비 체중을 측정하는 세계적인 임상 기준입니다.</p>
        <h2>WHO 기준 BMI 범주</h2>
        <ul class="list-disc pl-6 space-y-2 my-4">
          <li><strong>저체중:</strong> 18.5 미만</li>
          <li><strong>정상 체중:</strong> 18.5 – 24.9 (아시아인 18.5 – 22.9)</li>
          <li><strong>과체중:</strong> 25.0 – 29.9 (아시아인 23.0 – 24.9)</li>
          <li><strong>비만:</strong> 30.0 이상</li>
        </ul>
      `,
      de: `
        <h2>Was ist der BMI (Body-Mass-Index)?</h2>
        <p>Der Body-Mass-Index (BMI) ist ein standardisierter mathematischer Wert, der weltweit von Ärzten verwendet wird, um das Gewicht im Verhältnis zur Größe zu bewerten.</p>
        <h2>WHO BMI-Kategorien</h2>
        <ul class="list-disc pl-6 space-y-2 my-4">
          <li><strong>Untergewicht:</strong> &lt; 18,5 kg/m²</li>
          <li><strong>Normalgewicht:</strong> 18,5 – 24,9 kg/m²</li>
          <li><strong>Übergewicht:</strong> 25,0 – 29,9 kg/m²</li>
          <li><strong>Adipositas:</strong> ≥ 30,0 kg/m²</li>
        </ul>
      `,
      es: `
        <h2>¿Qué es el IMC (Índice de Masa Corporal)?</h2>
        <p>El Índice de Masa Corporal (IMC) es una métrica matemática estandarizada utilizada en todo el mundo por profesionales médicos para evaluar el peso en relación con la estatura.</p>
        <h2>Categorías de IMC de la OMS</h2>
        <ul class="list-disc pl-6 space-y-2 my-4">
          <li><strong>Bajo peso:</strong> &lt; 18.5 kg/m²</li>
          <li><strong>Peso saludable:</strong> 18.5 – 24.9 kg/m²</li>
          <li><strong>Sobrepeso:</strong> 25.0 – 29.9 kg/m²</li>
          <li><strong>Obesidad:</strong> ≥ 30.0 kg/m²</li>
        </ul>
      `,
      fr: `
        <h2>Qu'est-ce que l'IMC (Indice de Masse Corporelle) ?</h2>
        <p>L'Indice de Masse Corporelle (IMC) est un indicateur mathématique standardisé utilisé par les médecins pour évaluer le poids par rapport à la taille.</p>
        <h2>Catégories d'IMC selon l'OMS</h2>
        <ul class="list-disc pl-6 space-y-2 my-4">
          <li><strong>Insuffisance pondérale :</strong> &lt; 18,5 kg/m²</li>
          <li><strong>Poids normal :</strong> 18,5 – 24,9 kg/m²</li>
          <li><strong>Surpoids :</strong> 25,0 – 29,9 kg/m²</li>
          <li><strong>Obésité :</strong> ≥ 30,0 kg/m²</li>
        </ul>
      `
    }
  },

  'bmi-calculator-for-men': {
    title: {
      en: 'BMI Calculator for Men: Healthy Ranges, Muscle Mass & Chart Guide',
      hi: 'पुरुषों के लिए बीएमआई कैलकुलेटर: स्वस्थ सीमा और संपूर्ण गाइड',
      ko: '남성용 BMI 계산기: 건강 범위, 근육량 및 차트 가이드',
      de: 'BMI-Rechner für Männer: Gesunde Bereiche, Muskelmasse & Leitfaden',
      es: 'Calculadora de IMC para Hombres: Rangos Saludables y Masa Muscular',
      fr: 'Calculateur d\'IMC pour Hommes : Plages Santé et Masse Musculaire'
    },
    category: {
      en: 'Men\'s Health',
      hi: 'पुरुष स्वास्थ्य',
      ko: '남성 건강',
      de: 'Männergesundheit',
      es: 'Salud Masculina',
      fr: 'Santé des Hommes'
    },
    description: {
      en: 'Complete guide to BMI for men. Learn male body composition traits, healthy BMI ranges, muscle density factors, and get instant calculations.',
      hi: 'पुरुषों के लिए बीएमआई की गाइड। पुरुषों के बॉडी कंपोज़िशन, मसल मास और बीएमआई चार्ट की पूरी जानकारी।',
      ko: '남성을 위한 BMI 완벽 가이드. 남성 체성분 특징, 건강한 BMI 범위, 근육 밀도 요소 및 즉시 계산 방법.',
      de: 'Vollständiger Leitfaden zum BMI für Männer. Erfahren Sie mehr über männliche Körperzusammensetzung, Muskeldichte und gesunde Bereiche.',
      es: 'Guía completa del IMC para hombres. Aprende sobre composición corporal masculina, densidad muscular y rangos saludables.',
      fr: 'Guide complet de l\'IMC pour hommes. Découvrez la composition corporelle masculine, la densité musculaire et les plages recommandées.'
    },
    contentHtml: {
      en: `
        <h2>Understanding BMI in Men</h2>
        <p>Male physiological characteristics carry higher skeletal muscle mass and lower essential fat percentages than female biology.</p>
      `,
      hi: `
        <h2>पुरुषों में बीएमआई (BMI) को समझें</h2>
        <p>महिलाओं की तुलना में पुरुषों में मांसपेशियों की मात्रा और हड्डियों का घनत्व अधिक होता है।</p>
      `,
      ko: `
        <h2>남성의 BMI 이해하기</h2>
        <p>남성은 골격근량이 많고 필수 체지방 비율이 낮으므로 근육 밀도를 함께 고려하는 것이 바람직합니다.</p>
      `,
      de: `
        <h2>Den BMI bei Männern verstehen</h2>
        <p>Männer besitzen im Durchschnitt eine höhere Muskelmasse und geringere essenzielle Fettanteile als Frauen. Bei sportlichen Männern sollte der BMI zusammen mit dem Taifenumfang betrachtet werden.</p>
      `,
      es: `
        <h2>Comprender el IMC en Hombres</h2>
        <p>Los hombres poseen una mayor masa muscular esquelética y menor porcentaje de grasa esencial. En hombres activos, se recomienda evaluar el IMC junto con la circunferencia de cintura.</p>
      `,
      fr: `
        <h2>Comprendre l'IMC chez les Hommes</h2>
        <p>Les hommes possèdent en moyenne une masse musculaire plus élevée et un pourcentage de graisse essentielle plus faible. Pour les sportifs, l'IMC doit être complété par le tour de taille.</p>
      `
    }
  },

  'bmi-calculator-for-women': {
    title: {
      en: 'BMI Calculator for Women: Essential Fat, Pregnancy & Health Ranges',
      hi: 'महिलाओं के लिए बीएमआई कैलकुलेटर: स्वास्थ्य सीमाएं और गाइड',
      ko: '여성용 BMI 계산기: 필수 지방, 임신 및 건강 범위',
      de: 'BMI-Rechner für Frauen: Essentielles Fett, Schwangerschaft & Richtwerte',
      es: 'Calculadora de IMC para Mujeres: Grasa Esencial y Rangos de Salud',
      fr: 'Calculateur d\'IMC pour Femmes : Graisse Essentielle et Plages Santé'
    },
    category: {
      en: 'Women\'s Health',
      hi: 'महिला स्वास्थ्य',
      ko: '여성 건강',
      de: 'Frauengesundheit',
      es: 'Salud Femenina',
      fr: 'Santé des Femmes'
    },
    description: {
      en: 'Comprehensive guide to BMI for women. Learn female essential fat percentages, hormonal shifts, pregnancy considerations, and healthy BMI charts.',
      hi: 'महिलाओं के लिए बीएमआई की संपूर्ण गाइड। महिलाओं में आवश्यक वसा, हार्मोनल बदलाव और स्वस्थ वजन सीमा की जानकारी।',
      ko: '여성을 위한 BMI 종합 가이드. 여성 필수 체지방률, 호르몬 변화, 임신 시 체중 관리 및 건강 가이드.',
      de: 'Umfassender Leitfaden zum BMI für Frauen. Erfahren Sie mehr über essenziellen Fettanteil, hormonelle Veränderungen und Schwangerschaft.',
      es: 'Guía completa sobre el IMC para mujeres. Aprende sobre porcentaje de grasa esencial, cambios hormonales y embarazo.',
      fr: 'Guide complet sur l\'IMC pour les femmes. Découvrez les pourcentages de graisse essentielle, les variations hormonales et la grossesse.'
    },
    contentHtml: {
      en: `
        <h2>Understanding BMI in Women</h2>
        <p>Biologically, women carry higher essential body fat (10–13%) than men (2–5%) to support reproductive functions and hormonal balance.</p>
      `,
      hi: `
        <h2>महिलाओं में बीएमआई (BMI) का महत्व</h2>
        <p>प्रजनन और हार्मोनल संतुलन के लिए महिलाओं के शरीर में पुरुषों की तुलना में स्वाभाविक रूप से आवश्यक वसा का प्रतिशत अधिक होता है।</p>
      `,
      ko: `
        <h2>여성의 BMI 이해하기</h2>
        <p>여성은 호르몬 균형과 생식 기능을 위해 필수 체지방률(10~13%)이 높게 유지됩니다.</p>
      `,
      de: `
        <h2>Den BMI bei Frauen verstehen</h2>
        <p>Frauen besitzen von Natur aus einen höheren essenziellen Fettanteil (10–13%) als Männer (2–5%), um hormonelle Funktionen zu unterstützen.</p>
      `,
      es: `
        <h2>Comprender el IMC en Mujeres</h2>
        <p>Biológicamente, las mujeres poseen un mayor porcentaje de grasa esencial (10–13%) que los hombres para mantener el equilibrio hormonal.</p>
      `,
      fr: `
        <h2>Comprendre l'IMC chez les Femmes</h2>
        <p>Biologiquement, les femmes possèdent un taux de graisse essentielle plus élevé (10–13 %) que les hommes pour soutenir l'équilibre hormonal.</p>
      `
    }
  },

  'bmi-by-age': {
    title: {
      en: 'BMI by Age Chart: Children, Adults & Seniors Health Cut-offs',
      hi: 'उम्र के अनुसार बीएमआई चार्ट: बच्चों, वयस्कों और बुजुर्गों के लिए गाइड',
      ko: '연령별 BMI 차트: 어린이, 성인 및 노인 건강 기준',
      de: 'BMI nach Alter: Altersabhängige Richtwerte für Kinder & Senioren',
      es: 'Tabla de IMC por Edad: Niños, Adultos y Adultos Mayores',
      fr: 'IMC par Âge : Enfants, Adultes et Seniors'
    },
    category: {
      en: 'Age & Metrics',
      hi: 'आयु एवं मापदंड',
      ko: '연령 및 지표',
      de: 'Alter & Metriken',
      es: 'Edad y Métricas',
      fr: 'Âge et Métriques'
    },
    description: {
      en: 'Learn how age impacts BMI interpretation. View BMI charts by age for kids, teens, adults, and elderly seniors with WHO percentiles.',
      hi: 'उम्र के अनुसार बीएमआई कैसे बदलता है। बच्चों, वयस्कों और बुजुर्गों के लिए बीएमआई चार्ट और स्वास्थ्य दिशानिर्देश।',
      ko: '연령이 BMI 해석에 미치는 영향. 어린이, 청소년 백분위수 및 노년층 건강 BMI 범위 안내.',
      de: 'Erfahren Sie, wie das Alter die BMI-Interpretation beeinflusst. BMI-Tabellen für Kinder, Erwachsene und Senioren.',
      es: 'Aprende cómo afecta la edad a la interpretación del IMC. Tablas de IMC por edad para niños, adultos y mayores.',
      fr: 'Découvrez l\'impact de l\'âge sur l\'interprétation de l\'IMC. Tableaux d\'IMC par âge pour enfants, adultes et seniors.'
    },
    contentHtml: {
      en: `
        <h2>How Age Alters BMI Interpretation</h2>
        <p>For adults (20–65), fixed cut-offs apply. For children (2–19), age and sex percentiles are used.</p>
      `,
      hi: `
        <h2>उम्र के साथ बीएमआई की व्याख्या</h2>
        <p>20 से 65 वर्ष के वयस्कों के लिए मानक बीएमआई लागू होता है। बच्चों के लिए आयु पर्सेंटाइल उपयोग किया जाता है।</p>
      `,
      ko: `
        <h2>연령에 따른 BMI 해석의 차이</h2>
        <p>성인은 표준 범주를 적용하지만 소아 및 청소년은 백분위수를 사용합니다.</p>
      `,
      de: `
        <h2>Wie das Alter den BMI beeinflusst</h2>
        <p>Für Erwachsene gelten feste Grenzwerte. Bei Kindern und Jugendlichen (2–19 Jahre) werden Perzentilen nach Alter und Geschlecht verwendet.</p>
      `,
      es: `
        <h2>Cómo Afecta la Edad al IMC</h2>
        <p>En adultos se aplican límites fijos. En niños y adolescentes (2–19 años) se utilizan percentiles por edad y sexo.</p>
      `,
      fr: `
        <h2>Comment l'Âge Influence l'IMC</h2>
        <p>Chez les adultes, des seuils fixes s'appliquent. Chez les enfants (2–19 ans), on utilise des percentiles selon l'âge et le sexe.</p>
      `
    }
  },

  'bmi-chart': {
    title: {
      en: 'BMI Chart 2026: Visual Weight Status Grid & Category Cut-offs',
      hi: 'बीएमआई चार्ट 2026: वजन श्रेणी ग्रिड और विस्तृत कट-ऑफ',
      ko: '2026 BMI 차트: 시각적 체중 범주 및 건강 기준',
      de: 'BMI Tabelle 2026: Übersichtliche Gewichtstabelle & WHO-Kategorien',
      es: 'Tabla de IMC 2026: Cuadrícula Visual de Peso y Categorías de la OMS',
      fr: 'Tableau d\'IMC 2026 : Grille Visuelle des Catégories et Normes OMS'
    },
    category: {
      en: 'Visual Reference',
      hi: 'विजुअल संदर्भ',
      ko: '시각적 참조',
      de: 'Visuelle Referenz',
      es: 'Referencia Visual',
      fr: 'Référence Visuelle'
    },
    description: {
      en: 'Complete visual BMI chart for men and women. View height vs weight grid, global vs Asian thresholds, and health risk indicators.',
      hi: 'पुरुषों और महिलाओं के लिए बीएमआई चार्ट। ऊंचाई बनाम वजन ग्रिड, वैश्विक और भारतीय मानकों के साथ।',
      ko: '남성과 여성을 위한 시각적 BMI 차트. 키와 체중 대비 비만도 범주 한눈에 확인.',
      de: 'Vollständige visuelle BMI-Tabelle für Männer und Frauen. Körpergröße vs. Gewichtstabelle und Risikostufen.',
      es: 'Tabla visual completa de IMC para hombres y mujeres. Cuadrícula de altura frente a peso y niveles de riesgo.',
      fr: 'Tableau visuel complet d\'IMC pour hommes et femmes. Grille taille/poids et indicateurs de risque pour la santé.'
    },
    contentHtml: {
      en: `
        <h2>How to Read the BMI Chart</h2>
        <p>Locate your height on the horizontal axis and your weight on the vertical axis to find your BMI classification.</p>
      `,
      hi: `
        <h2>बीएमआई चार्ट को कैसे समझें</h2>
        <p>अपनी ऊंचाई और वजन के आधार पर आप आसानी से अपनी बीएमआई श्रेणी जान सकते हैं।</p>
      `,
      ko: `
        <h2>BMI 차트 읽는 방법</h2>
        <p>키와 체중이 만나는 지점에서 자신의 BMI 범주를 쉽게 확인하세요.</p>
      `,
      de: `
        <h2>Wie man die BMI-Tabelle liest</h2>
        <p>Suchen Sie Ihre Körpergröße auf der horizontalen Achse und Ihr Gewicht auf der vertikalen Achse, um Ihre Kategorie abzulesen.</p>
      `,
      es: `
        <h2>Cómo Leer la Tabla de IMC</h2>
        <p>Encuentra tu estatura en el eje horizontal y tu peso en el eje vertical para determinar tu clasificación de peso.</p>
      `,
      fr: `
        <h2>Comment Lire le Tableau d'IMC</h2>
        <p>Repérez votre taille sur l'axe horizontal et votre poids sur l'axe vertical pour connaître votre catégorie de poids.</p>
      `
    }
  },

  'healthy-weight-chart': {
    title: {
      en: 'Healthy Weight Chart by Height for Men & Women (kg & lbs)',
      hi: 'ऊंचाई के अनुसार स्वस्थ वजन चार्ट: पुरुषों और महिलाओं के लिए',
      ko: '신장별 적정 체중 차트: 남성 및 여성 (kg & lbs)',
      de: 'Idealgewicht Tabelle nach Körpergröße für Männer & Frauen',
      es: 'Tabla de Peso Saludable por Estatura para Hombres y Mujeres',
      fr: 'Tableau du Poids Idéal selon la Taille pour Hommes et Femmes'
    },
    category: {
      en: 'Weight Management',
      hi: 'वजन प्रबंधन',
      ko: '체중 관리',
      de: 'Gewichtsmanagement',
      es: 'Control de Peso',
      fr: 'Gestion du Poids'
    },
    description: {
      en: 'Find your ideal healthy weight target based on height. Includes metric (cm/kg) and imperial (ft-in/lbs) reference tables for adults.',
      hi: 'अपनी ऊंचाई के अनुसार अपना आदर्श स्वस्थ वजन जानें। किलोग्राम और पाउंड में आसान संदर्भ तालिकाएं।',
      ko: '키에 따른 이상적인 적정 체중 범위를 확인하세요. 미터법(cm/kg) 참조 표 제공.',
      de: 'Finden Sie Ihr ideales Zielgewicht basierend auf Ihrer Körpergröße. Enthält Tabellen in kg und lbs.',
      es: 'Encuentra tu peso ideal saludable según tu estatura. Incluye tablas de referencia en kg y lbs.',
      fr: 'Trouvez votre poids idéal selon votre taille. Comprend des tableaux de référence en kg et lbs.'
    },
    contentHtml: {
      en: `
        <h2>Healthy Weight Range by Height</h2>
        <p>Your ideal weight range is the weight band at which your BMI stays between 18.5 and 24.9.</p>
      `,
      hi: `
        <h2>ऊंचाई के अनुसार सही वजन की तालिका</h2>
        <p>वह वजन सीमा जहां आपका बीएमआई 18.5 से 22.9 के बीच रहता है, वह आपका आदर्श स्वस्थ वजन है।</p>
      `,
      ko: `
        <h2>신장별 이상적인 적정 체중</h2>
        <p>BMI 18.5 ~ 22.9 kg/m²를 유지하는 체중 구간이 가장 이상적인 적정 체중입니다.</p>
      `,
      de: `
        <h2>Gesundes Gewicht nach Körpergröße</h2>
        <p>Ihr idealer Gewichtsbereich ist der Bereich, in dem Ihr BMI zwischen 18,5 und 24,9 kg/m² liegt.</p>
      `,
      es: `
        <h2>Rango de Peso Saludable por Estatura</h2>
        <p>Tu rango de peso ideal es la franja en la que tu IMC se mantiene entre 18.5 y 24.9 kg/m².</p>
      `,
      fr: `
        <h2>Plage de Poids Idéal selon la Taille</h2>
        <p>Votre plage de poids idéal correspond à l'intervalle où votre IMC reste compris entre 18,5 et 24,9 kg/m².</p>
      `
    }
  },

  'bmi-vs-body-fat': {
    title: {
      en: 'BMI vs. Body Fat Percentage: Key Differences & Which is Better?',
      hi: 'बीएमआई बनाम बॉडी फैट प्रतिशत: मुख्य अंतर और कौन सा बेहतर है?',
      ko: 'BMI vs 체지방률: 핵심 차이점과 더 정확한 지표는?',
      de: 'BMI vs. Körperfettanteil: Unterschiede & was ist genauer?',
      es: 'IMC vs. Porcentaje de Grasa Corporal: Diferencias Clave',
      fr: 'IMC vs Pourcentage de Graisse Corporelle : Différences Clés'
    },
    category: {
      en: 'Clinical Science',
      hi: 'नैदानिक विज्ञान',
      ko: '임상 과학',
      de: 'Klinische Wissenschaft',
      es: 'Ciencia Clínica',
      fr: 'Science Clinique'
    },
    description: {
      en: 'Compare BMI vs Body Fat Percentage. Learn differences in accuracy, muscle differentiation, visceral fat tracking, and practical health monitoring.',
      hi: 'बीएमआई और बॉडी फैट प्रतिशत में तुलना। जानें कि मांसपेशियों और वसा के मापन में कौन सा उपकरण अधिक सटीक है।',
      ko: 'BMI와 체지방률의 차이 비교. 정확도, 근육량 구분, 내장지방 측정 및 올바른 건강 관리 방법.',
      de: 'Vergleichen Sie den BMI mit dem Körperfettanteil. Erfahren Sie mehr über Unterschiede in Genauigkeit und Muskelmasse.',
      es: 'Compara el IMC con el porcentaje de grasa corporal. Diferencias en precisión, músculo y grasa visceral.',
      fr: 'Comparez l\'IMC au pourcentage de graisse corporelle. Différences de précision et prise en compte du muscle.'
    },
    contentHtml: {
      en: `
        <h2>BMI vs Body Fat %</h2>
        <p>BMI calculates total mass relative to height, while Body Fat Percentage measures the exact proportion of adipose tissue.</p>
      `,
      hi: `
        <h2>बीएमआई बनाम बॉडी फैट %</h2>
        <p>बीएमआई आपकी ऊंचाई के हिसाब से कुल वजन मापता है, जबकि बॉडी फैट प्रतिशत वसा की सटीक मात्रा बताता है।</p>
      `,
      ko: `
        <h2>BMI와 체지방률 비교</h2>
        <p>BMI는 체중 전체를 계산하며, 체지방률은 전체 체중 중 실제 지방 조직의 비율(%)을 직접 측정합니다.</p>
      `,
      de: `
        <h2>BMI vs. Körperfettanteil</h2>
        <p>Der BMI berechnet die Gesamtmasse relativ zur Größe, während der Körperfettanteil den genauen Anteil an Fettgewebe misst.</p>
      `,
      es: `
        <h2>IMC vs. Porcentaje de Grasa Corporal</h2>
        <p>El IMC evalúa la masa total según la estatura, mientras que el porcentaje de grasa mide la proporción exacta de tejido graso.</p>
      `,
      fr: `
        <h2>IMC vs Pourcentage de Graisse Corporelle</h2>
        <p>L'IMC évalue la masse totale par rapport à la taille, tandis que le pourcentage de graisse mesure la proportion exacte de tissu adipeux.</p>
      `
    }
  },

  'bmi-formula': {
    title: {
      en: 'BMI Formula: How to Calculate Body Mass Index Manually (kg/m² & lbs/in²)',
      hi: 'बीएमआई फॉर्मूला: बॉडी मास इंडेक्स की गणना खुद कैसे करें',
      ko: 'BMI 계산 공식: 체질량지수 직접 계산하는 방법',
      de: 'BMI Formel: Body-Mass-Index manuell berechnen (kg/m² & lbs/in²)',
      es: 'Fórmula del IMC: Cómo Calcular el Índice de Masa Corporal Manualmente',
      fr: 'Formule de l\'IMC : Comment Calculer l\'Indice de Masse Corporelle Manuellement'
    },
    category: {
      en: 'Mathematics',
      hi: 'गणित एवं फॉर्मूला',
      ko: '계산 공식',
      de: 'Mathematische Formeln',
      es: 'Fórmulas Matemáticas',
      fr: 'Formules Mathématiques'
    },
    description: {
      en: 'Step-by-step mathematical guide to calculating BMI. Includes metric formula, imperial formula, worked calculation examples, and conversion tables.',
      hi: 'बीएमआई निकालने का गणितीय फॉर्मूला। किलोग्राम/मीटर और पाउंड/इंच दोनों तरीकों से आसान उदाहरण।',
      ko: 'BMI 직접 계산을 위한 단계별 수학 공식 가이드. 미터법(kg/m²) 계산 예시 포함.',
      de: 'Schritt-für-Schritt-Anleitung zur manuellen BMI-Berechnung mit metrischen und imperradialen Formeln.',
      es: 'Guía paso a paso para calcular el IMC manualmente con fórmulas métricas e imperiales.',
      fr: 'Guide pas à pas pour calculer l\'IMC manuellement avec les formules métriques et impériales.'
    },
    contentHtml: {
      en: `
        <h2>The Mathematical Formula for BMI</h2>
        <p>In metric units: <code>BMI = weight (kg) / [height (m)]²</code>.</p>
      `,
      hi: `
        <h2>बीएमआई निकालने का फॉर्मूला</h2>
        <p>मीट्रिक पद्धति: <code>बीएमआई = वजन (किलोग्राम) ÷ [ऊंचाई (मीटर)]²</code></p>
      `,
      ko: `
        <h2>BMI 계산 공식</h2>
        <p>미터법 기준: <code>BMI = 체중 (kg) ÷ [키 (m)]²</code></p>
      `,
      de: `
        <h2>Die mathematische Formel für den BMI</h2>
        <p>Im metrischen System: <code>BMI = Gewicht (kg) / [Größe (m)]²</code>.</p>
      `,
      es: `
        <h2>La Fórmula Matemática del IMC</h2>
        <p>En unidades métricas: <code>IMC = peso (kg) / [estatura (m)]²</code>.</p>
      `,
      fr: `
        <h2>La Formule Mathématique de l'IMC</h2>
        <p>En unités métriques : <code>IMC = poids (kg) / [taille (m)]²</code>.</p>
      `
    }
  },

  'calories-for-weight-loss': {
    title: {
      en: 'How Many Calories Should I Eat to Lose Weight? BMR & TDEE Guide',
      hi: 'वजन घटाने के लिए कितनी कैलोरी खाएं? BMR और TDEE गाइड',
      ko: '체중 감량을 위해 하루 몇 칼로리를 먹어야 할까요? BMR & TDEE 가이드',
      de: 'Wie viele Kalorien zum Abnehmen? BMR & TDEE Kalorienrechner-Guide',
      es: '¿Cuántas Calorías Debo Comer para Perder Peso? Guía de BMR y TDEE',
      fr: 'Combien de Calories Consommer pour Perdre du Poids ? Guide BMR et TDEE'
    },
    category: {
      en: 'Nutrition & Calories',
      hi: 'पोषण एवं कैलोरी',
      ko: '영양 및 칼로리',
      de: 'Ernährung & Kalorien',
      es: 'Nutrición y Calorías',
      fr: 'Nutrition et Calories'
    },
    description: {
      en: 'Calculate your daily calorie deficit for weight loss. Learn BMR, TDEE, macro ratios, safe deficit limits, and realistic weight loss rates.',
      hi: 'वजन घटाने के लिए दैनिक कैलोरी घाटे (Calorie Deficit) की गणना करें। BMR, TDEE और सुरक्षित वजन घटाने की गाइड।',
      ko: '체중 감량을 위한 일일 칼로리 적자(Calorie Deficit) 계산법. BMR, TDEE 및 건강한 칼로리 조절 가이드.',
      de: 'Berechnen Sie Ihr Kaloriendefizit zum Abnehmen. Erfahren Sie mehr über BMR, TDEE und sichere Gewichtsreduktion.',
      es: 'Calcula tu déficit calórico diario para perder peso. Aprende sobre BMR, TDEE y ritmos de pérdida de peso seguros.',
      fr: 'Calculez votre déficit calorique quotidien pour perdre du poids. Apprenez le BMR, le TDEE et un rythme sain.'
    },
    contentHtml: {
      en: `
        <h2>Understanding Calorie Deficit for Weight Loss</h2>
        <p>Maintain a daily calorie deficit of 300 to 500 kcal below your TDEE to achieve sustainable fat loss.</p>
      `,
      hi: `
        <h2>वजन घटाने के लिए कैलोरी डेफिसिट</h2>
        <p>सुरक्षित रूप से वजन घटाने के लिए अपने TDEE से 300 से 500 कैलोरी कम खाना सबसे प्रभावी तरीका है।</p>
      `,
      ko: `
        <h2>체중 감량을 위한 칼로리 적자 원리</h2>
        <p>지속 가능한 다이어트를 위해 TDEE보다 하루 300~500 kcal 적게 섭취하는 것을 권장합니다.</p>
      `,
      de: `
        <h2>Das Kaloriendefizit zum Abnehmen verstehen</h2>
        <p>Für eine nachhaltige Gewichtsabnahme empfiehlt sich ein tägliches Kaloriendefizit von 300 bis 500 kcal unter Ihrem TDEE.</p>
      `,
      es: `
        <h2>Entender el Déficit Calórico para Perder Peso</h2>
        <p>Para perder grasa de forma sostenible, mantén un déficit calórico diario de 300 a 500 kcal por debajo de tu TDEE.</p>
      `,
      fr: `
        <h2>Comprendre le Déficit Calorique pour Perdre du Poids</h2>
        <p>Pour une perte de poids durable, maintenez un déficit calorique quotidien de 300 à 500 kcal en dessous de votre TDEE.</p>
      `
    }
  },

  'protein-intake-calculator': {
    title: {
      en: 'How Much Protein Do You Need Per Day? Calorie & Fitness Targets',
      hi: 'आपको प्रति दिन कितने प्रोटीन की आवश्यकता है? संपूर्ण गाइड',
      ko: '하루에 얼마나 많은 단백질이 필요한가요? 목표별 단백질 가이드',
      de: 'Wie viel Protein brauchen Sie pro Tag? Eiweißbedarf berechnen',
      es: '¿Cuánta Proteína Necesitas al Día? Calculadora y Guía',
      fr: 'Combien de Protéines par Jour ? Guide des Besoins en Protéines'
    },
    category: {
      en: 'Nutrition Science',
      hi: 'पोषण विज्ञान',
      ko: '영양학',
      de: 'Ernährungswissenschaft',
      es: 'Ciencia Nutricional',
      fr: 'Science de la Nutrition'
    },
    description: {
      en: 'Determine your optimal daily protein intake based on weight, activity level, muscle building goals, or fat loss targets.',
      hi: 'अपने वजन और कसरत के आधार पर अपने दैनिक प्रोटीन लक्ष्य की गणना करें। मांसपेशियों के निर्माण और वसा घटाने के लिए गाइड।',
      ko: '체중, 활동량, 근육 증량 및 다이어트 목표에 맞는 최적의 일일 단백질 섭취량을 계산하세요.',
      de: 'Ermitteln Sie Ihren optimalen täglichen Eiweißbedarf basierend auf Gewicht, Aktivität und Fitnesszielen.',
      es: 'Determina tu ingesta diaria óptima de proteínas según tu peso, nivel de actividad y objetivos físicos.',
      fr: 'Déterminez votre apport quotidien optimal en protéines en fonction de votre poids, activité et objectifs.'
    },
    contentHtml: {
      en: `
        <h2>Daily Protein Intake Guidelines</h2>
        <p>Active adults require 1.2g to 2.0g protein per kg of bodyweight daily for muscle repair and recovery.</p>
      `,
      hi: `
        <h2>दैनिक प्रोटीन की आवश्यकता</h2>
        <p>नियमित व्यायाम करने वालों के लिए 1.2 से 2.0 ग्राम प्रति किलोग्राम अनुशंसित है।</p>
      `,
      ko: `
        <h2>일일 권장 단백질 섭취량</h2>
        <p>운동을 하거나 근육 증량을 목표로 하는 경우 체중 1 kg당 1.2g~2.0g의 단백질 섭취가 권장됩니다.</p>
      `,
      de: `
        <h2>Täglicher Eiweißbedarf</h2>
        <p>Sportlich aktive Personen benötigen täglich etwa 1,2 g bis 2,0 g Protein pro kg Körpergewicht für den Muskelaufbau.</p>
      `,
      es: `
        <h2>Pautas de Ingesta Diaria de Proteínas</h2>
        <p>Las personas activas necesitan de 1.2 g a 2.0 g de proteína por kg de peso corporal al día para la recuperación muscular.</p>
      `,
      fr: `
        <h2>Recommandations d'Apport Quotidien en Protéines</h2>
        <p>Les personnes actives ont besoin de 1,2 g à 2,0 g de protéines par kg de poids corporel par jour pour la récupération musculaire.</p>
      `
    }
  },

  'bmi-chart-for-men-women': {
    title: {
      en: 'BMI Chart for Men and Women (Age-Adjusted Cut-offs 2026)',
      hi: 'पुरुषों और महिलाओं के लिए बीएमआई चार्ट (आयु-समायोजित कट-ऑफ)',
      ko: '남성 및 여성 BMI 차트 (2026 연령별 진단 기준)',
      de: 'BMI Tabelle für Männer und Frauen (Alterskorrigiert 2026)',
      es: 'Tabla de IMC para Hombres y Mujeres (Ajustada por Edad 2026)',
      fr: 'Tableau d\'IMC pour Hommes et Femmes (Ajusté selon l\'Âge 2026)'
    },
    category: {
      en: 'Clinical Standards',
      hi: 'नैदानिक मानक',
      ko: '임상 표준',
      de: 'Klinische Standards',
      es: 'Estándares Clínicos',
      fr: 'Normes Cliniques'
    },
    description: {
      en: 'Detailed gender and age-adjusted BMI reference chart. Compare body fat distribution traits between male and female adults.',
      hi: 'पुरुषों और महिलाओं के लिए विस्तृत बीएमआई संदर्भ चार्ट। लिंग और आयु के अनुसार स्वास्थ्य सीमाएं।',
      ko: '남성과 여성을 위한 상세 성별 및 연령 조정 BMI 참조 차트.',
      de: 'Detaillierte BMI-Referenztabelle für Männer und Frauen mit altersspezifischen Richtwerten.',
      es: 'Tabla de referencia de IMC detallada para hombres y mujeres ajustada por edad.',
      fr: 'Tableau de référence détaillé de l\'IMC pour hommes et femmes ajusté selon l\'âge.'
    },
    contentHtml: {
      en: `
        <h2>Gender Differences in BMI Interpretation</h2>
        <p>Women naturally carry a higher percentage of essential body fat than men at identical BMI values.</p>
      `,
      hi: `
        <h2>बीएमआई व्याख्या में लिंग का अंतर</h2>
        <p>भले ही बीएमआई फॉर्मूला समान है, महिलाओं में आवश्यक वसा का स्तर पुरुषों से अधिक होता है।</p>
      `,
      ko: `
        <h2>성별에 따른 BMI 해석 차이</h2>
        <p>동일한 BMI 지수라도 여성은 남성보다 높은 필수 체지방량을 보유합니다.</p>
      `,
      de: `
        <h2>Geschlechtsspezifische Unterschiede beim BMI</h2>
        <p>Frauen besitzen bei gleichem BMI von Natur aus einen höheren essenziellen Fettanteil als Männer.</p>
      `,
      es: `
        <h2>Diferencias de Género en la Interpretación del IMC</h2>
        <p>Las mujeres poseen de forma natural un porcentaje de grasa esencial mayor que los hombres con el mismo IMC.</p>
      `,
      fr: `
        <h2>Différences de Genre dans l'Interprétation de l'IMC</h2>
        <p>Les femmes possèdent naturellement un pourcentage de graisse essentielle plus élevé que les hommes à IMC égal.</p>
      `
    }
  },

  'healthy-bmi-range-indians': {
    title: {
      en: 'Healthy BMI Range for Indians: Why 23 is the New Overweight',
      hi: 'भारतीयों के लिए स्वस्थ बीएमआई सीमा: 23 ही नया ओवरवेट क्यों है',
      ko: '아시아인을 위한 건강 BMI 범위: 과체중 기준 23의 이유',
      de: 'Gesunder BMI-Bereich für asiatische Bevölkerungen (WHO-Standard)',
      es: 'Rango de IMC Saludable para Poblaciones Asiáticas (Límite OMS 23)',
      fr: 'Plage d\'IMC Santé pour les Populations Asiatiques (Seuil OMS 23)'
    },
    category: {
      en: 'Indian Health',
      hi: 'भारतीय स्वास्थ्य',
      ko: '아시아 건강',
      de: 'Regionale Gesundheit',
      es: 'Salud Regional',
      fr: 'Santé Régionale'
    },
    description: {
      en: 'In-depth analysis of WHO South-East Asia BMI guidelines. Discover why 18.5–22.9 is optimal for Indian adults.',
      hi: 'डब्ल्यूएचओ दक्षिण-पूर्व एशिया बीएमआई दिशानिर्देशों का विश्लेषण। जानें कि 18.5-22.9 भारतीयों के लिए सर्वश्रेष्ठ क्यों है।',
      ko: 'WHO 아시아-태평양 BMI 지침 분석. 아시아인에게 18.5~22.9가 최적인 이유.',
      de: 'Analyse der WHO-Richtlinien für asiatische Bevölkerungen. Warum 18,5–22,9 optimal ist.',
      es: 'Análisis de las pautas de la OMS para poblaciones asiáticas. Por qué 18.5–22.9 es el rango óptimo.',
      fr: 'Analyse des directives OMS pour les populations asiatiques. Pourquoi 18,5–22,9 est la plage optimale.'
    },
    contentHtml: {
      en: `
        <h2>Why Asian Adults Require Lower BMI Thresholds</h2>
        <p>Epidemiological research shows South Asian adults develop metabolic risk at lower body weights.</p>
      `,
      hi: `
        <h2>भारतीयों के लिए कम बीएमआई सीमा क्यों आवश्यक है?</h2>
        <p>अध्ययनों से पता चलता है कि कम वजन पर भी भारतीय शरीर में आंतरिक अंगों के आसपास वसा जमा होने का खतरा अधिक होता है।</p>
      `,
      ko: `
        <h2>아시아인에게 낮은 BMI 기준이 필요한 이유</h2>
        <p>아시아인은 낮은 체중에서도 내장지방 비율이 높아 대사 질환 위험이 더 빠르게 시작됩니다.</p>
      `,
      de: `
        <h2>Warum asiatische Bevölkerungen niedrigere BMI-Grenzwerte benötigen</h2>
        <p>Studien zeigen, dass Stoffwechselrisiken bei asiatischen Erwachsenen bereits bei geringerem Gewicht beginnen.</p>
      `,
      es: `
        <h2>Por qué las Poblaciones Asiáticas Necesitan Límites de IMC Más Bajos</h2>
        <p>Los estudios demuestran que los riesgos metabólicos comienzan con un peso menor en poblaciones asiáticas.</p>
      `,
      fr: `
        <h2>Pourquoi les Populations Asiatiques ont des Seuils d'IMC Plus Bas</h2>
        <p>Les études montrent que les risques métaboliques apparaissent à un poids plus faible chez les adultes asiatiques.</p>
      `
    }
  },

  'bmi-calculator-teens': {
    title: {
      en: 'BMI Calculator for Teens & Children: Growth Charts & Percentiles',
      hi: 'किशोरों और बच्चों के लिए बीएमआई कैलकुलेटर: पर्सेंटाइल और ग्रोथ चार्ट',
      ko: '청소년 및 어린이용 BMI 계산기: 성장 차트 백분위수',
      de: 'BMI-Rechner für Kinder & Jugendliche: Perzentilen & Wachstum',
      es: 'Calculadora de IMC para Niños y Adolescentes: Percentiles',
      fr: 'Calculateur d\'IMC pour Enfants et Adolescents : Percentiles'
    },
    category: {
      en: 'Pediatric Health',
      hi: 'बाल स्वास्थ्य',
      ko: '소아 건강',
      de: 'Kindergesundheit',
      es: 'Salud Infantil',
      fr: 'Santé Pédiatrique'
    },
    description: {
      en: 'Guide to pediatric BMI percentiles for children and teenagers (ages 2 to 19). Learn how CDC growth charts evaluate youth health.',
      hi: 'बच्चों और किशोरों (2 से 19 वर्ष) के लिए बीएमआई पर्सेंटाइल गाइड। सीडीसी ग्रोथ चार्ट के आधार पर स्वास्थ्य मूल्यांकन।',
      ko: '어린이 및 청소년(2~19세)을 위한 소아 BMI 백분위수 가이드.',
      de: 'Leitfaden zu Perzentilen für Kinder und Jugendliche (2–19 Jahre) basierend auf WHO- und CDC-Wachstumstabellen.',
      es: 'Guía de percentiles de IMC para niños y adolescentes (2 a 19 años) según las tablas de crecimiento del CDC.',
      fr: 'Guide des percentiles d\'IMC pour enfants et adolescents (2 à 19 ans) selon les courbes de croissance du CDC.'
    },
    contentHtml: {
      en: `
        <h2>Pediatric BMI & Percentiles Explained</h2>
        <p>In children and teens, BMI changes constantly with age and growth, evaluated using percentiles relative to peers.</p>
      `,
      hi: `
        <h2>बच्चों और किशोरों में बीएमआई पर्सेंटाइल</h2>
        <p>बच्चों और किशोरों का बीएमआई उम्र और लंबाई के साथ बदलता रहता है।</p>
      `,
      ko: `
        <h2>소아 및 청소년 BMI 백분위수</h2>
        <p>어린이와 청소년의 BMI는 성장에 따라 변하므로 동일 연령대 백분위수로 평가합니다.</p>
      `,
      de: `
        <h2>BMI-Perzentilen bei Kindern und Jugendlichen</h2>
        <p>Bei Kindern verändert sich der BMI mit dem Wachstum und wird anhand von Perzentilen im Vergleich zur Altersgruppe bewertet.</p>
      `,
      es: `
        <h2>Percentiles de IMC en Niños y Adolescentes</h2>
        <p>En niños y adolescentes, el IMC cambia constantemente con el crecimiento y se evalúa mediante percentiles por edad y sexo.</p>
      `,
      fr: `
        <h2>Percentiles d'IMC chez les Enfants et Adolescents</h2>
        <p>Chez les enfants et adolescents, l'IMC évolue avec la croissance et s'évalue à l'aide de percentiles par âge et sexe.</p>
      `
    }
  }
};