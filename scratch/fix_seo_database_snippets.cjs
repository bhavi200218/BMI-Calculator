const fs = require('fs');

let content = fs.readFileSync('src/data/seoDatabase.ts', 'utf8');

// 1. Fix Asian BMI calculator English errors
content = content.replace(
  '"col3": "High risk obesity classification für asiatische Erwachsene"',
  '"col3": "High risk obesity classification for Asian adults"'
);
content = content.replace(
  '"question": "What is a normal BMI para adultos asiáticos?"',
  '"question": "What is a normal BMI for Asian adults?"'
);

// 2. Fix bmi-calculator-for-indians Hindi English parentheticals
content = content.replace(
  '"title": "भारतीयों के लिए बीएमआई कैलकुलेटर (BMI Calculator for Indians)"',
  '"title": "भारतीयों के लिए बीएमआई कैलकुलेटर"'
);
content = content.replace(
  '"question": "भारतीय बीएमआई मानक (Indian BMI Standard) क्या हैं?"',
  '"question": "भारतीय बीएमआई मानक क्या हैं?"'
);
content = content.replace(
  '"question": "कमर का आकार (Waist Size) बीएमआई के साथ क्यों जरूरी है?"',
  '"question": "कमर का आकार बीएमआई के साथ क्यों जरूरी है?"'
);
content = content.replace(
  '3D आयतन (Volume)',
  '3D आयतन'
);

// 3. Fix 3d-bmi-calculator / 3d-body-visualizer
content = content.replace(/3D फॉर्मूला 3D आयतन \(Volume\) को संतुलित करता है/g, '3D फॉर्मूला 3D आयतन को संतुलित करता है');

// 4. Fix bmi-chart English leftovers across ES, FR, DE, KO, HI
content = content.replace(
  /Optimal healthy baseline range for adults/g,
  (m, offset) => {
    // We can replace in context
    return 'Optimal healthy baseline range for adults';
  }
);

// Let's create an exact dictionary of replacements for ES, FR, DE, KO, HI
const replacements = [
  // bmi-chart
  {
    target: 'Optimal healthy baseline range for adults',
    es: 'Rango de referencia saludable óptimo para adultos',
    fr: 'Plage de référence saine optimale pour les adultes',
    de: 'Optimaler gesunder Referenzbereich für Erwachsene',
    ko: '성인을 위한 최적의 건강 기준 범위',
    hi: 'वयस्कों के लिए इष्टतम स्वस्थ संदर्भ सीमा'
  },
  {
    target: 'Class I obesity screening reference',
    es: 'Referencia de evaluación para obesidad clase I',
    fr: 'Référence de dépistage pour l\'obésité de classe I',
    de: 'Screening-Referenz für Adipositas Klasse I',
    ko: '1단계 비만 선별 참고 기준',
    hi: 'मोटापा श्रेणी I स्क्रीनिंग संदर्भ'
  },
  {
    target: 'Class II obesity screening reference',
    es: 'Referencia de evaluación para obesidad clase II',
    fr: 'Référence de dépistage pour l\'obésité de classe II',
    de: 'Screening-Referenz für Adipositas Klasse II',
    ko: '2단계 비만 선별 참고 기준',
    hi: 'मोटापा श्रेणी II स्क्रीनिंग संदर्भ'
  },
  {
    target: 'Overweight 참조 범위 (Asian cutoff: 23.0 kg/m²)',
    all: '과체중 참고 범위 (아시아 기준: 23.0 kg/m²)'
  },

  // maintenance-calorie-calculator
  {
    target: 'Preserves current body weight and energy balance',
    es: 'Mantiene el peso corporal actual y el balance energético',
    fr: 'Maintient le poids corporel actuel et l\'équilibre énergétique',
    de: 'Erhält das aktuelle Körpergewicht und die Energiebilanz',
    ko: '현재 체중 유지 및 에너지 균형 보존',
    hi: 'वर्तमान शरीर के वजन और ऊर्जा संतुलन को बनाए रखता है'
  },
  {
    target: 'Mathematical example of 250 kcal lower daily intake',
    es: 'Ejemplo matemático de ingesta diaria reducida en 250 kcal',
    fr: 'Exemple mathématique d\'un apport quotidien inférieur de 250 kcal',
    de: 'Mathematisches Beispiel für 250 kcal geringere tägliche Zufuhr',
    ko: '일일 250 kcal 적은 섭취량의 수학적 예시',
    hi: 'प्रतिदिन 250 किलोकैलोरी कम खपत का गणितीय उदाहरण'
  },
  {
    target: 'Mathematical example of 500 kcal lower daily intake',
    es: 'Ejemplo matemático de ingesta diaria reducida en 500 kcal',
    fr: 'Exemple mathématique d\'un apport quotidien inférieur de 500 kcal',
    de: 'Mathematisches Beispiel für 500 kcal geringere tägliche Zufuhr',
    ko: '일일 500 kcal 적은 섭취량의 수학적 예시',
    hi: 'प्रतिदिन 500 किलोकैलोरी कम खपत का गणितीय उदाहरण'
  },
  {
    target: 'Mathematical example of 750 kcal lower daily intake',
    es: 'Ejemplo matemático de ingesta diaria reducida en 750 kcal',
    fr: 'Exemple mathématique d\'un apport quotidien inférieur de 750 kcal',
    de: 'Mathematisches Beispiel für 750 kcal geringere tägliche Zufuhr',
    ko: '일일 750 kcal 적은 섭취량의 수학적 예시',
    hi: 'प्रतिदिन 750 किलोकैलोरी कम खपत का गणितीय उदाहरण'
  },
  {
    target: 'Mathematical example of 250–300 kcal higher daily intake',
    es: 'Ejemplo matemático de ingesta diaria superior en 250–300 kcal',
    fr: 'Exemple mathématique d\'un apport quotidien supérieur de 250–300 kcal',
    de: 'Mathematisches Beispiel für 250–300 kcal höhere tägliche Zufuhr',
    ko: '일일 250–300 kcal 높은 섭취량의 수학적 예시',
    hi: 'प्रतिदिन 250–300 किलोकैलोरी अधिक खपत का गणितीय उदाहरण'
  },

  // body-fat-calculator
  {
    target: 'Reference range commonly associated with fitness-oriented populations',
    es: 'Rango de referencia común en personas orientadas al fitness',
    fr: 'Plage de référence courante pour les populations sportives',
    de: 'Referenzbereich für fitnessorientierte Personen',
    ko: '피트니스 지향 인구에서 흔히 사용되는 기준 범위',
    hi: 'फिटनेस उन्मुख व्यक्तियों के लिए संदर्भ सीमा'
  },
  {
    target: 'Standard acceptable body fat percentage range for healthy adults',
    es: 'Rango de porcentaje de grasa corporal aceptable para adultos sanos',
    fr: 'Plage de pourcentage de graisse corporelle acceptable pour adultes en bonne santé',
    de: 'Standardmäßig akzeptabler Körperfettanteil für gesunde Erwachsene',
    ko: '건강한 성인을 위한 표준 권장 체지방률 범위',
    hi: 'स्वस्थ वयस्कों के लिए मानक स्वीकार्य शरीर वसा प्रतिशत सीमा'
  },
  {
    target: 'Higher body-fat reference category; interpretation varies by age, sex, population, and measurement method',
    es: 'Categoría de referencia de mayor grasa corporal; varía según edad y sexo',
    fr: 'Catégorie de référence de masse grasse plus élevée ; varie selon l\'âge et le sexe',
    de: 'Höhere Körperfett-Referenzkategorie; Einordnung variiert nach Alter und Geschlecht',
    ko: '높은 체지방 참고 범주; 연령 및 성별에 따라 해석 차이',
    hi: 'उच्च शरीर वसा संदर्भ श्रेणी; आयु और लिंग के अनुसार व्याख्या भिन्न'
  },

  // lean-body-mass-calculator
  {
    target: 'Predictive formula for estimated lean mass in males',
    es: 'Fórmula predictiva para masa magra estimada en hombres',
    fr: 'Formule prédictive de masse maigre estimée chez les hommes',
    de: 'Prädiktive Formel für geschätzte Magermasse bei Männern',
    ko: '남성의 추정 제지방량 산출 공식',
    hi: 'पुरुषों में अनुमानित लीन मास का सूत्र'
  },
  {
    target: 'Predictive formula for estimated lean mass in females',
    es: 'Fórmula predictiva para masa magra estimada en mujeres',
    fr: 'Formule prédictive de masse maigre estimée chez les femmes',
    de: 'Prädiktive Formel für geschätzte Magermasse bei Frauen',
    ko: '여성의 추정 제지방량 산출 공식',
    hi: 'महिलाओं में अनुमानित लीन मास का सूत्र'
  },

  // ideal-weight-calculator
  {
    target: 'Widely cited formula introduced in 1974',
    es: 'Fórmula ampliamente citada introducida en 1974',
    fr: 'Formule largement citée introduite en 1974',
    de: 'Weit verbreitete Formel aus dem Jahr 1974',
    ko: '1974년에 발표된 널리 인용되는 공식',
    hi: '1974 में प्रस्तुत व्यापक रूप से उद्धृत सूत्र'
  },
  {
    target: 'Modification of Devine formula optimized for medium frame adults',
    es: 'Modificación de la fórmula Devine para complexión media',
    fr: 'Modification de la formule Devine optimisée pour morphologie moyenne',
    de: 'Modifikation der Devine-Formel für mittlere Statur',
    ko: '보통 체격 성인을 위해 최적화된 Devine 공식 수정본',
    hi: 'मध्यम शारीरिक बनावट के वयस्कों के लिए संशोधित डिवाइन सूत्र'
  },
  {
    target: 'Higher base estimate for shorter individuals, gentler slope per inch',
    es: 'Mayor estimación base para estatura baja y pendiente más suave',
    fr: 'Estimation de base plus élevée pour personnes plus petites',
    de: 'Höhere Basisschätzung für kleinere Personen',
    ko: '단신 인구를 위한 높은 기본 추정치 적용',
    hi: 'कम ऊंचाई वाले व्यक्तियों के लिए उच्चतर आधार अनुमान'
  },
  {
    target: 'Historical reference formula',
    es: 'Fórmula de referencia histórica',
    fr: 'Formule de référence historique',
    de: 'Historische Referenzformel',
    ko: '역사적 참고 공식',
    hi: 'ऐतिहासिक संदर्भ सूत्र'
  },
  {
    target: 'Population health reference window based on height squared',
    es: 'Rango de referencia poblacional basado en la altura al cuadrado',
    fr: 'Plage de référence basée sur la taille au carré',
    de: 'Bevölkerungsreferenzbereich basierend auf der quadrierten Größe',
    ko: '신장 제곱에 기반한 인구 건강 참고 범위',
    hi: 'ऊंचाई के वर्ग पर आधारित जनसंख्या स्वास्थ्य संदर्भ सीमा'
  },

  // calorie-calculator
  {
    target: 'Estimated TDEE energy balance for weight stabilization',
    es: 'Balance energético estimado según TDEE para estabilizar peso',
    fr: 'Équilibre énergétique TDEE estimé pour la stabilisation du poids',
    de: 'Geschätzte TDEE-Energiebilanz zur Gewichtsstabilisierung',
    ko: '체중 유지를 위한 추정 TDEE 에너지 균형',
    hi: 'वजन स्थिर रखने के लिए अनुमानित टीडीईई ऊर्जा संतुलन'
  },
  {
    target: 'Example reference for weight-management planning',
    es: 'Referencia de ejemplo para la planificación del control de peso',
    fr: 'Référence d\'exemple pour la planification du contrôle du poids',
    de: 'Beispielreferenz für die Gewichtskontrollplanung',
    ko: '체중 관리 계획을 위한 예시 참고 기준',
    hi: 'वजन प्रबंधन योजना के लिए संदर्भ उदाहरण'
  },

  // protein-intake-calculator
  {
    target: 'RDA baseline reference',
    es: 'Referencia basal de IDR (ingesta diaria recomendada)',
    fr: 'Référence de base AJR (apports journaliers recommandés)',
    de: 'RDA-Basisreferenz (Empfohlene Tagesdosis)',
    ko: '권장 일일 섭취량(RDA) 기준',
    hi: 'आरडीए (RDA) आधारभूत संदर्भ'
  },
  {
    target: 'Reference athletic range',
    es: 'Rango de referencia para atletas',
    fr: 'Plage de référence pour les athlètes',
    de: 'Sportler-Referenzbereich',
    ko: '운동선수 권장 기준 범위',
    hi: 'एथलीट संदर्भ सीमा'
  },
  {
    target: 'Common athletic target for training',
    es: 'Objetivo deportivo habitual para entrenamiento',
    fr: 'Objectif sportif courant pour l\'entraînement',
    de: 'Übliches Trainingsziel für Sportler',
    ko: '트레이닝을 위한 일반적 운동선수 목표치',
    hi: 'प्रशिक्षण के लिए सामान्य एथलेटिक लक्ष्य'
  },
  {
    target: 'Example range referenced during calorie deficit planning',
    es: 'Rango de ejemplo en planificación de déficit calórico',
    fr: 'Plage indicative lors d\'un déficit calorique',
    de: 'Beispielbereich bei der Planung eines Kaloriendefizits',
    ko: '칼로리 제한 계획 시 참고하는 예시 범위',
    hi: 'कैलोरी घाटा योजना के दौरान संदर्भित उदाहरण सीमा'
  },

  // water-intake-calculator
  {
    target: '~7 standard 250ml glasses',
    es: '~7 vasos estándar de 250 ml',
    fr: '~7 verres standards de 250 ml',
    de: '~7 Standardgläser (250 ml)',
    ko: '~250ml 표준 컵 7잔',
    hi: '~7 मानक 250 मिली गिलास'
  },
  {
    target: '~10 standard 250ml glasses',
    es: '~10 vasos estándar de 250 ml',
    fr: '~10 verres standards de 250 ml',
    de: '~10 Standardgläser (250 ml)',
    ko: '~250ml 표준 컵 10잔',
    hi: '~10 मानक 250 मिली गिलास'
  },
  {
    target: '~13 standard 250ml glasses',
    es: '~13 vasos estándar de 250 ml',
    fr: '~13 verres standards de 250 ml',
    de: '~13 Standardgläser (250 ml)',
    ko: '~250ml 표준 컵 13잔',
    hi: '~13 मानक 250 मिली गिलास'
  },
  {
    target: '~17 standard 250ml glasses',
    es: '~17 vasos estándar de 250 ml',
    fr: '~17 verres standards de 250 ml',
    de: '~17 Standardgläser (250 ml)',
    ko: '~250ml 표준 컵 17잔',
    hi: '~17 मानक 250 मिली गिलास'
  },

  // macro-calculator
  {
    target: 'Example fuel source allocation',
    es: 'Distribución de ejemplo de fuentes de energía',
    fr: 'Répartition indicative des sources d\'énergie',
    de: 'Beispielhafte Verteilung von Energiequellen',
    ko: '에너지원의 예시 배분율',
    hi: 'ऊर्जा स्रोतों का उदाहरण आवंटन'
  },
  {
    target: 'Example protein allocation',
    es: 'Distribución de ejemplo de proteínas',
    fr: 'Répartition indicative des protéines',
    de: 'Beispielhafte Verteilung von Proteinen',
    ko: '단백질의 예시 배분율',
    hi: 'प्रोटीन का उदाहरण आवंटन'
  },
  {
    target: 'Example dietary fat allocation',
    es: 'Distribución de ejemplo de grasas saludables',
    fr: 'Répartition indicative des lipides alimentaires',
    de: 'Beispielhafte Verteilung von Nahrungsfetten',
    ko: '지방의 예시 배분율',
    hi: 'आहारीय वसा का उदाहरण आवंटन'
  },

  // waist-to-hip-ratio-calculator
  {
    target: 'Subcutaneous fat distribution reference window',
    es: 'Referencia de distribución de grasa subcutánea',
    fr: 'Fenêtre de distribution de graisse sous-cutanée',
    de: 'Referenzbereich für subkutane Fettverteilung',
    ko: '피하지방 분포 참고 기준',
    hi: 'उपचर्म वसा वितरण संदर्भ सीमा'
  },
  {
    target: 'Moderate abdominal central fat reference window',
    es: 'Referencia moderada de grasa abdominal central',
    fr: 'Fenêtre modérée de graisse abdominale centrale',
    de: 'Moderater Referenzbereich für zentrales Bauchfett',
    ko: '중등도 복부 내장지방 참고 기준',
    hi: 'मध्यम पेट की वसा संदर्भ सीमा'
  },
  {
    target: 'Higher central fat distribution reference window; additional screening context',
    es: 'Mayor distribución de grasa central; contexto adicional',
    fr: 'Distribution plus élevée de graisse centrale ; contexte additionnel',
    de: 'Höhere zentrale Fettverteilung; zusätzlicher Screening-Kontext',
    ko: '높은 중심부 지방 분포 기준; 추가 검토 필요',
    hi: 'उच्च केंद्रीय वसा वितरण संदर्भ सीमा'
  },

  // body-surface-area-calculator
  {
    target: 'Infant population 참조 범위',
    all: '영아 인구 참고 기준'
  },
  {
    target: 'Child population 참조 범위',
    all: '소아 인구 참고 기준'
  },
  {
    target: 'Infant population संदर्भ सीमा',
    all: 'शिशु जनसंख्या संदर्भ सीमा'
  },
  {
    target: 'Child population संदर्भ सीमा',
    all: 'बाल जनसंख्या संदर्भ सीमा'
  },
  {
    target: 'Standard adult female population average',
    es: 'Promedio poblacional en mujeres adultas',
    fr: 'Moyenne de la population féminine adulte',
    de: 'Durchschnitt bei erwachsenen Frauen',
    ko: '성인 여성 인구 표준 평균',
    hi: 'वयस्क महिला जनसंख्या का मानक औसत'
  },
  {
    target: 'Standard adult male population average',
    es: 'Promedio poblacional en hombres adultos',
    fr: 'Moyenne de la population masculine adulte',
    de: 'Durchschnitt bei erwachsenen Männern',
    ko: '성인 남성 인구 표준 평균',
    hi: 'वयस्क पुरुष जनसंख्या का मानक औसत'
  },

  // heart rate zones
  {
    target: 'Promotes blood circulation & passive recovery',
    es: 'Favorece la circulación sanguínea y recuperación pasiva',
    fr: 'Favorise la circulation sanguine et la récupération passive',
    de: 'Fördert die Durchblutung & passive Regeneration',
    ko: '혈액 순환 촉진 및 수동적 회복 지원',
    hi: 'रक्त परिसंचरण और निष्क्रिय रिकवरी को बढ़ावा देता है'
  },
  {
    target: 'Often used for aerobic base training and moderate-intensity exercise',
    es: 'Base aeróbica y ejercicio de intensidad moderada',
    fr: 'Base aérobie et exercice d\'intensité modérée',
    de: 'Für aerobes Basistraining & mäßige Intensität',
    ko: '유산소 기초 훈련 및 중강도 운동에 주로 활용',
    hi: 'एरोबिक आधार प्रशिक्षण और मध्यम तीव्रता वाले व्यायाम के लिए'
  },
  {
    target: 'Improves cardiovascular efficiency & stamina',
    es: 'Mejora la eficiencia cardiovascular y resistencia',
    fr: 'Améliore l\'efficacité cardiovasculaire et l\'endurance',
    de: 'Verbessert die kardiovaskuläre Effizienz & Ausdauer',
    ko: '심혈관 효율성 및 지구력 향상',
    hi: 'हृदय दक्षता और सहनशक्ति में सुधार'
  },
  {
    target: 'Increases high-intensity exercise tolerance',
    es: 'Aumenta la tolerancia al ejercicio de alta intensidad',
    fr: 'Augmente la tolérance à l\'exercice de haute intensité',
    de: 'Erhöht die Toleranz für hochintensives Training',
    ko: '고강도 운동 지구력 향상',
    hi: 'उच्च तीव्रता व्यायाम सहनशीलता बढ़ाता है'
  },
  {
    target: 'Neuromuscular speed & peak sprint conditioning',
    es: 'Velocidad neuromuscular y acondicionamiento de sprint',
    fr: 'Vitesse neuromusculaire et conditionnement au sprint',
    de: 'Neuromuskuläre Schnelligkeit & Sprint-Konditionierung',
    ko: '신경근 속도 및 최고 전력질주 훈련',
    hi: 'न्यूरोमस्कुलर गति और स्प्रिंट कंडीशनिंग'
  },
  {
    target: 'Warm-up, cooldown, and active recovery',
    es: 'Calentamiento, enfriamiento y recuperación activa',
    fr: 'Échauffement, retour au calme et récupération active',
    de: 'Aufwärmen, Abkühlen und aktive Erholung',
    ko: '웜업, 쿨다운 및 적극적 회복',
    hi: 'वार्म-अप, कूलडाउन और सक्रिय रिकवरी'
  },
  {
    target: 'Optimal zone for sustainable fat burning and aerobic base building',
    es: 'Zona óptima para quema de grasa y base aeróbica',
    fr: 'Zone optimale pour la combustion des graisses et l\'endurance',
    de: 'Optimale Zone für Fettverbrennung und aerobe Basis',
    ko: '지속 가능한 지방 연소 및 유산소 기초 형성을 위한 최적 구간',
    hi: 'स्थायी वसा जलने और एरोबिक आधार के लिए इष्टतम क्षेत्र'
  },
  {
    target: 'Improves cardiovascular capacity and stamina',
    es: 'Mejora la capacidad cardiovascular y la resistencia',
    fr: 'Améliore la capacité cardiovasculaire et l\'endurance',
    de: 'Verbessert die kardiovaskuläre Kapazität und Ausdauer',
    ko: '심혈관 능력 및 지구력 향상',
    hi: 'कार्डियोवैस्कुलर क्षमता और सहनशक्ति में सुधार'
  },
  {
    target: 'Maximal speed and interval training',
    es: 'Velocidad máxima y entrenamiento a intervalos',
    fr: 'Vitesse maximale et entraînement par intervalles',
    de: 'Maximalgeschwindigkeit und Intervalltraining',
    ko: '최고 속도 및 인터벌 훈련',
    hi: 'अधिकतम गति और अंतराल प्रशिक्षण'
  },

  // 1RM
  {
    target: 'Peak single rep strength capacity estimate',
    es: 'Estimación de fuerza máxima para una sola repetición',
    fr: 'Estimation de la force maximale sur une seule répétition',
    de: 'Schätzung der maximalen Maximalkraft (1 Wdh.)',
    ko: '1회 최대 반복 근력 추정치',
    hi: 'अधिकतम एकल प्रतिनिधि शक्ति क्षमता अनुमान'
  },
  {
    target: 'Heavy strength building & neural adaptation',
    es: 'Desarrollo de fuerza pesada y adaptación neural',
    fr: 'Force lourde et adaptation neurale',
    de: 'Schwerer Kraftaufbau & neuronale Anpassung',
    ko: '고중량 근력 강화 및 신경계 적응',
    hi: 'भारी शक्ति निर्माण और तंत्रिका अनुकूलन'
  },
  {
    target: 'Common training use & compound strength (5x5 protocols)',
    es: 'Fuerza básica en ejercicios compuestos (protocolo 5x5)',
    fr: 'Force globale sur mouvements de base (protocoles 5x5)',
    de: 'Grundkraft bei Mehrgelenksübungen (5x5-System)',
    ko: '복합 다관절 운동의 기본 근력 훈련 (5x5 방식)',
    hi: 'संयुक्त शक्ति निर्माण और 5x5 प्रोटोकॉल'
  },
  {
    target: 'Hypertrophy muscle building range',
    es: 'Rango de hipertrofia y desarrollo muscular',
    fr: 'Zone d\'hypertrophie et développement musculaire',
    de: 'Hypertrophie-Bereich für Muskelaufbau',
    ko: '근비대를 위한 근육 성장 범위',
    hi: 'हाइपरट्रॉफी मांसपेशी निर्माण सीमा'
  },
  {
    target: 'Hypertrophy volume & metabolic conditioning',
    es: 'Volumen de hipertrofia y acondicionamiento metabólico',
    fr: 'Volume d\'hypertrophie et conditionnement métabolique',
    de: 'Volumen-Hypertrophie & metabolisches Training',
    ko: '볼륨 근비대 및 대사 조절 훈련',
    hi: 'हाइपरट्रॉफी वॉल्यूम और मेटाबॉलिक कंडीशनिंग'
  },
  {
    target: 'Volume hypertrophy & endurance',
    es: 'Volumen de hipertrofia y resistencia muscular',
    fr: 'Volume d\'hypertrophie et endurance musculaire',
    de: 'Volumen-Hypertrophie & Kraftausdauer',
    ko: '볼륨 근비대 및 근지구력 훈련',
    hi: 'वॉल्यूम हाइपरट्रॉफी और सहनशक्ति'
  },
  {
    target: 'Muscular endurance & active recovery sets',
    es: 'Resistencia muscular y series de recuperación activa',
    fr: 'Endurance musculaire et séries de récupération active',
    de: 'Kraftausdauer und aktive Erholungssätze',
    ko: '근지구력 및 적극적 회복 세트',
    hi: 'मांसपेशियों की सहनशक्ति और सक्रिय रिकवरी सेट'
  },

  // Pregnancy
  {
    target: '~0.5 kg / week in 2nd/3rd trimester',
    es: '~0.5 kg / semana en el 2.º y 3.er trimestre',
    fr: '~0,5 kg / semaine au 2e et 3e trimestre',
    de: '~0,5 kg / Woche im 2. und 3. Trimester',
    ko: '임신 2/3분기 주당 약 0.5kg',
    hi: 'दूसरी/तीसरी तिमाही में ~0.5 किग्रा/सप्ताह'
  },
  {
    target: '~0.4 kg / week in 2nd/3rd trimester',
    es: '~0.4 kg / semana en el 2.º y 3.er trimestre',
    fr: '~0,4 kg / semaine au 2e et 3e trimestre',
    de: '~0,4 kg / Woche im 2. und 3. Trimester',
    ko: '임신 2/3분기 주당 약 0.4kg',
    hi: 'दूसरी/तीसरी तिमाही में ~0.4 किग्रा/सप्ताह'
  },
  {
    target: '~0.3 kg / week in 2nd/3rd trimester',
    es: '~0.3 kg / semana en el 2.º y 3.er trimestre',
    fr: '~0,3 kg / semaine au 2e et 3e trimestre',
    de: '~0,3 kg / Woche im 2. und 3. Trimester',
    ko: '임신 2/3분기 주당 약 0.3kg',
    hi: 'दूसरी/तीसरी तिमाही में ~0.3 किग्रा/सप्ताह'
  }
];

// Apply each replacement based on prefix (Rango de referencia, Plage de référence, Referenzbereich, 참조 범위, संदर्भ सीमा)
for (const r of replacements) {
  if (r.all) {
    content = content.replaceAll(r.target, r.all);
  } else {
    // Replace when preceded by language prefixes
    if (r.es) {
      content = content.replaceAll('Rango de referencia ' + r.target, r.es);
      content = content.replaceAll('Rango de referencia: ' + r.target, r.es);
    }
    if (r.fr) {
      content = content.replaceAll('Plage de référence ' + r.target, r.fr);
      content = content.replaceAll('Plage de référence : ' + r.target, r.fr);
    }
    if (r.de) {
      content = content.replaceAll('Referenzbereich ' + r.target, r.de);
      content = content.replaceAll('Referenzbereich: ' + r.target, r.de);
    }
    if (r.ko) {
      content = content.replaceAll('참조 범위 ' + r.target, r.ko);
      content = content.replaceAll('참조 범위: ' + r.target, r.ko);
    }
    if (r.hi) {
      content = content.replaceAll('संदर्भ सीमा ' + r.target, r.hi);
      content = content.replaceAll('संदर्भ सीमा: ' + r.target, r.hi);
    }
    // Also if target appears bare in non-en sections, replace
    content = content.replaceAll('Ideal Devine Weight:', 'Devine IBW:');
  }
}

// 5. Replace Ideal Devine Weight table rows in healthy-weight-by-height across languages
const devineWeights = [
  { m: '~43.2', f: '~36.3' },
  { m: '~50.0', f: '~45.5' },
  { m: '~54.6', f: '~50.1' },
  { m: '~59.2', f: '~54.7' },
  { m: '~63.8', f: '~59.3' },
  { m: '~68.4', f: '~63.9' },
  { m: '~73.0', f: '~68.5' },
  { m: '~77.6', f: '~73.1' },
  { m: '~82.2', f: '~77.7' }
];

for (const dw of devineWeights) {
  const engTarget = `Ideal Devine Weight: Male ${dw.m} kg | Female ${dw.f} kg`;
  const rawEngTarget2 = `Devine IBW: Male ${dw.m} kg | Female ${dw.f} kg`;
  
  // Spanish
  content = content.replaceAll(`Rango de referencia ${engTarget}`, `Peso Devine ideal: Hombres ${dw.m} kg | Mujeres ${dw.f} kg`);
  content = content.replaceAll(`Rango de referencia ${rawEngTarget2}`, `Peso Devine ideal: Hombres ${dw.m} kg | Mujeres ${dw.f} kg`);
  // French
  content = content.replaceAll(`Plage de référence ${engTarget}`, `Poids Devine idéal : Hommes ${dw.m} kg | Femmes ${dw.f} kg`);
  content = content.replaceAll(`Plage de référence ${rawEngTarget2}`, `Poids Devine idéal : Hommes ${dw.m} kg | Femmes ${dw.f} kg`);
  // German
  content = content.replaceAll(`Referenzbereich ${engTarget}`, `Ideales Devine-Gewicht: Männer ${dw.m} kg | Frauen ${dw.f} kg`);
  content = content.replaceAll(`Referenzbereich ${rawEngTarget2}`, `Ideales Devine-Gewicht: Männer ${dw.m} kg | Frauen ${dw.f} kg`);
  // Korean
  content = content.replaceAll(`참조 범위 ${engTarget}`, `Devine 이상 체중: 남성 ${dw.m} kg | 여성 ${dw.f} kg`);
  content = content.replaceAll(`참조 범위 ${rawEngTarget2}`, `Devine 이상 체중: 남성 ${dw.m} kg | 여성 ${dw.f} kg`);
  // Hindi
  content = content.replaceAll(`संदर्भ सीमा ${engTarget}`, `आदर्श डिवाइन वजन: पुरुष ${dw.m} kg | महिला ${dw.f} kg`);
  content = content.replaceAll(`संदर्भ सीमा ${rawEngTarget2}`, `आदर्श डिवाइन वजन: पुरुष ${dw.m} kg | महिला ${dw.f} kg`);
}

fs.writeFileSync('src/data/seoDatabase.ts', content);
console.log('Successfully updated src/data/seoDatabase.ts');
