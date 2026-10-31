import type { Locale, InputField } from './calculators';

export interface VariableGuideItem {
  id: string;
  name: string;
  description: string;
  metricUnit: string;
  imperialUnit: string;
}

export interface DomainInterpretationGuide {
  domain: string;
  sectionTitle: string;
  sectionSubtitle: string;
  interpretationTitle: string;
  interpretationText: string;
  limitationsTitle: string;
  limitationsText: string;
  medicalNoticeTitle: string;
  medicalNoticeText: string;
}

const UI_TITLES: Record<Locale, { varTitle: string; varSubtitle: string; metricLabel: string; imperialLabel: string }> = {
  en: {
    varTitle: 'Input Variables & Measurement Units',
    varSubtitle: 'Measurement units and simple guidelines for this calculator.',
    metricLabel: 'Metric',
    imperialLabel: 'Imperial'
  },
  es: {
    varTitle: 'Variables de Entrada y Unidades de Medida',
    varSubtitle: 'Parámetros de medición estandarizados y conversiones de unidades empleados en este cálculo.',
    metricLabel: 'Métrico',
    imperialLabel: 'Imperial'
  },
  fr: {
    varTitle: 'Variables d’Entrée et Unités de Mesure',
    varSubtitle: 'Paramètres de mesure standardisés et conversions d’unités utilisés par ce calculateur.',
    metricLabel: 'Métrique',
    imperialLabel: 'Impérial'
  },
  de: {
    varTitle: 'Eingabevariablen & Maßeinheiten',
    varSubtitle: 'Standardisierte Messparameter und Einheitenumrechnungen dieses Rechners.',
    metricLabel: 'Metrisch',
    imperialLabel: 'Imperial'
  },
  ko: {
    varTitle: '입력 변수 및 측정 단위 가이드',
    varSubtitle: '본 계산기에 적용되는 표준 측정 파라미터 및 단위 변환 기준입니다.',
    metricLabel: '미터법',
    imperialLabel: '야드파운드법'
  },
  hi: {
    varTitle: 'इनपुट चर एवं मापन इकाइयाँ',
    varSubtitle: 'इस कैलकुलेटर द्वारा उपयोग किए जाने वाले मानकीकृत मापन पैरामीटर और इकाई रूपांतरण।',
    metricLabel: 'मीट्रिक',
    imperialLabel: 'इंपीरियल'
  }
};

const VARIABLE_DEFINITIONS: Record<string, Record<Locale, { name: string; desc: string; metric: string; imperial: string }>> = {
  weight: {
    en: { name: 'Body Weight', desc: 'Total body weight measured on a scale in light clothing without shoes.', metric: 'Kilograms (kg)', imperial: 'Pounds (lbs)' },
    es: { name: 'Peso Corporal', desc: 'Masa total medida en báscula con ropa ligera y descalzo.', metric: 'Kilogramos (kg)', imperial: 'Libras (lbs)' },
    fr: { name: 'Poids Corporel', desc: 'Masse corporelle totale mesurée avec des vêtements légers et sans chaussures.', metric: 'Kilogrammes (kg)', imperial: 'Livres (lbs)' },
    de: { name: 'Körpergewicht', desc: 'Gesamte Körpermasse, gewogen in leichter Kleidung ohne Schuhe.', metric: 'Kilogramm (kg)', imperial: 'Pfund (lbs)' },
    ko: { name: '체중', desc: '가벼운 옷차림과 맨발 상태에서 측정한 체중계 총 질량입니다.', metric: '킬로그램 (kg)', imperial: '파운드 (lbs)' },
    hi: { name: 'शरीर का वजन', desc: 'हल्के कपड़ों में बिना जूते के मापा गया कुल शारीरिक वजन।', metric: 'किलोग्राम (kg)', imperial: 'पाउंड (lbs)' }
  },
  height: {
    en: { name: 'Stature / Height', desc: 'Standing height measured from the soles of your feet to the top of your head.', metric: 'Centimeters (cm)', imperial: 'Feet & Inches (ft/in)' },
    es: { name: 'Estatura / Altura', desc: 'Distancia vertical desde la planta de los pies hasta la coronilla en posición erguida.', metric: 'Centímetros (cm)', imperial: 'Pies y Pulgadas (ft/in)' },
    fr: { name: 'Taille / Stature', desc: 'Distance verticale de la plante des pieds au sommet du crâne, en position debout.', metric: 'Centimètres (cm)', imperial: 'Pieds et Pouces (ft/in)' },
    de: { name: 'Körpergröße', desc: 'Vertikaler Abstand von den Fußsohlen bis zum Scheitel bei aufrechter Haltung.', metric: 'Zentimeter (cm)', imperial: 'Fuß & Zoll (ft/in)' },
    ko: { name: '신장 (키)', desc: '곧은 자세로 발바닥부터 정수리까지 수직으로 측정한 체격입니다.', metric: '센티미터 (cm)', imperial: '피트 & 인치 (ft/in)' },
    hi: { name: 'ऊंचाई / कद', desc: 'सीधे खड़े होने पर पैरों के तलवों से लेकर सिर के शीर्ष तक की ऊर्ध्वाधर माप।', metric: 'सेंटीमीटर (cm)', imperial: 'फीट और इंच (ft/in)' }
  },
  age: {
    en: { name: 'Chronological Age', desc: 'Age in completed years. Used for age-adjusted metabolic coefficients and baseline health references.', metric: 'Years (integer)', imperial: 'Years (integer)' },
    es: { name: 'Edad Cronológica', desc: 'Años cumplidos, necesarios para coeficientes metabólicos ajustados por edad.', metric: 'Años (entero)', imperial: 'Años (entero)' },
    fr: { name: 'Âge Chronologique', desc: 'Années révolues, requises pour les coefficients métaboliques ajustés selon l’âge.', metric: 'Années (entier)', imperial: 'Années (entier)' },
    de: { name: 'Lebensalter', desc: 'Vollendete Lebensjahre, erforderlich für alterskorrigierte Stoffwechselkoeffizienten.', metric: 'Jahre (Ganzzahl)', imperial: 'Jahre (Ganzzahl)' },
    ko: { name: '만 나이', desc: '연령별 대사율 계수 산출 및 성장 기준선 평가에 사용되는 만 나이입니다.', metric: '세 (정수)', imperial: '세 (정수)' },
    hi: { name: 'आयु', desc: 'पूर्ण किए गए जीवन वर्ष, जो आयु-समायोजित चयापचय गुणांक के लिए आवश्यक हैं।', metric: 'वर्ष (पूर्णांक)', imperial: 'वर्ष (पूर्णांक)' }
  },
  gender: {
    en: { name: 'Biological Profile', desc: 'Biological gender profile. Used for sex-specific metabolic baselines and reference body composition ranges.', metric: 'Male / Female', imperial: 'Male / Female' },
    es: { name: 'Género Biológico', desc: 'Requerido porque el perfil biológico determina la proporción de grasa esencial y la tasa metabólica basal.', metric: 'Masculino / Femenino', imperial: 'Masculino / Femenino' },
    fr: { name: 'Profil Biologique', desc: 'Nécessaire car le profil biologique influence la masse grasse essentielle et le métabolisme de base.', metric: 'Homme / Femme', imperial: 'Homme / Femme' },
    de: { name: 'Biologisches Geschlecht', desc: 'Erforderlich, da das biologische Geschlecht den essenziellen Fettanteil und den Grundumsatz bestimmt.', metric: 'Männlich / Weiblich', imperial: 'Männlich / Weiblich' },
    ko: { name: '생물학적 성별', desc: '필수 체지방 비율 및 기초 대사량 계수가 성별에 따라 다르므로 계산에 적용됩니다.', metric: '남성 / 여성', imperial: '남성 / 여성' },
    hi: { name: 'जैविक लिंग', desc: 'आवश्यक क्योंकि जैविक लिंग आवश्यक वसा अनुपात और बेसल मेटाबोलिक दर को प्रभावित करता है।', metric: 'पुरुष / महिला', imperial: 'पुरुष / महिला' }
  },
  waist: {
    en: { name: 'Waist Circumference', desc: 'Waist circumference measured at the narrowest point above your hip bone.', metric: 'Centimeters (cm)', imperial: 'Inches (in)' },
    es: { name: 'Circunferencia de Cintura', desc: 'Medida en el punto medio entre el borde inferior de la última costilla palpable y la cresta ilíaca.', metric: 'Centímetros (cm)', imperial: 'Pulgadas (in)' },
    fr: { name: 'Tour de Taille', desc: 'Mesuré à mi-chemin entre le bord inférieur de la dernière côte palpable et la crête iliaque.', metric: 'Centimètres (cm)', imperial: 'Pouces (in)' },
    de: { name: 'Taillenumfang', desc: 'Gemessen in der Mitte zwischen dem unteren Rippenrand und der Oberkante des Beckenkamms.', metric: 'Zentimeter (cm)', imperial: 'Zoll (in)' },
    ko: { name: '허리둘레', desc: '가장 아래 갈비뼈 밑단과 골반 장골능 사이의 중간 지점을 수평으로 측정합니다.', metric: '센티미터 (cm)', imperial: '인치 (in)' },
    hi: { name: 'कमर की परिधि', desc: 'अंतिम पसली के निचले सिरे और कूल्हे की हड्डी के शीर्ष के मध्य बिंदु पर मापी गई परिधि।', metric: 'सेंटीमीटर (cm)', imperial: 'इंच (in)' }
  },
  hip: {
    en: { name: 'Hip Circumference', desc: 'Hip circumference measured around the widest point of your hips.', metric: 'Centimeters (cm)', imperial: 'Inches (in)' },
    es: { name: 'Circunferencia de Cadera', desc: 'Medida horizontalmente en el punto de máxima prominencia de los glúteos.', metric: 'Centímetros (cm)', imperial: 'Pulgadas (in)' },
    fr: { name: 'Tour de Hanches', desc: 'Mesuré horizontalement au niveau de la circonférence maximale des fessiers.', metric: 'Centimètres (cm)', imperial: 'Pouces (in)' },
    de: { name: 'Hüftumfang', desc: 'Horizontal an der breitesten Stelle des Gesäßes gemessen.', metric: 'Zentimeter (cm)', imperial: 'Zoll (in)' },
    ko: { name: '엉덩이둘레', desc: '둔부에서 가장 둘레가 넓은 돌출 부위를 수평으로 측정합니다.', metric: '센티미터 (cm)', imperial: '인치 (in)' },
    hi: { name: 'कूल्हे की परिधि', desc: 'नितंबों के सबसे चौड़े हिस्से पर क्षैतिज रूप से मापी गई माप।', metric: 'सेंटीमीटर (cm)', imperial: 'इंच (in)' }
  },
  neck: {
    en: { name: 'Neck Circumference', desc: 'Neck circumference measured just below the Adam’s apple.', metric: 'Centimeters (cm)', imperial: 'Inches (in)' },
    es: { name: 'Circunferencia de Cuello', desc: 'Medida justo debajo de la manzana de Adán, perpendicular al eje longitudinal del cuello.', metric: 'Centímetros (cm)', imperial: 'Pulgadas (in)' },
    fr: { name: 'Tour de Cou', desc: 'Mesuré juste sous la pomme d’Adam, perpendiculairement à l’axe du cou.', metric: 'Centimètres (cm)', imperial: 'Pouces (in)' },
    de: { name: 'Halsumfang', desc: 'Direkt unterhalb des Kehlkopfs rechtwinklig zur Längsachse des Halses gemessen.', metric: 'Zentimeter (cm)', imperial: 'Zoll (in)' },
    ko: { name: '목둘레', desc: '후두 융기(목젖) 바로 아래 부위를 목 축에 수직으로 측정합니다.', metric: '센티미터 (cm)', imperial: '인치 (in)' },
    hi: { name: 'गर्दन की परिधि', desc: 'कंठ (एडम्स एप्पल) के ठीक नीचे गर्दन के अक्ष के लंबवत मापी गई परिधि।', metric: 'सेंटीमीटर (cm)', imperial: 'इंच (in)' }
  },
  activity: {
    en: { name: 'Physical Activity Level (PAL)', desc: 'Daily physical movement and weekly workouts used to scale your calorie burn.', metric: 'Multiplier (1.2 to 1.725)', imperial: 'Multiplier (1.2 to 1.725)' },
    es: { name: 'Nivel de Actividad Física (PAL)', desc: 'Multiplicador que pondera el movimiento laboral y el ejercicio estructurado semanal.', metric: 'Multiplicador (1.2 a 1.725)', imperial: 'Multiplicador (1.2 a 1.725)' },
    fr: { name: 'Niveau d’Activité Physique (NAP)', desc: 'Facteur multiplicateur évaluant l’activité professionnelle et les séances de sport.', metric: 'Facteur (1,2 à 1,725)', imperial: 'Facteur (1,2 à 1,725)' },
    de: { name: 'Körperliche Aktivität (PAL)', desc: 'Multiplikator zur Erfassung der beruflichen und sportlichen Energieverbrennung.', metric: 'Faktor (1,2 bis 1,725)', imperial: 'Faktor (1,2 bis 1,725)' },
    ko: { name: '신체 활동 수준 (PAL 계수)', desc: '일상 직업 활동량 및 규칙적인 주간 운동 강도를 반영하는 대사 계수입니다.', metric: '계수 (1.2 ~ 1.725)', imperial: '계수 (1.2 ~ 1.725)' },
    hi: { name: 'शारीरिक गतिविधि स्तर (PAL)', desc: 'दैनिक कार्य और व्यायाम की ऊर्जा खपत का मूल्यांकन करने वाला गुणक।', metric: 'गुणक (1.2 से 1.725)', imperial: 'गुणक (1.2 से 1.725)' }
  },
  goal: {
    en: { name: 'Metabolic Goal', desc: 'Your weight goal: calorie deficit for fat loss, maintenance, or surplus for muscle.', metric: 'Caloric Delta (kcal/day)', imperial: 'Caloric Delta (kcal/day)' },
    es: { name: 'Objetivo Metabólico', desc: 'Establece el balance calórico deseado: déficit (-500 kcal), mantenimiento (0) o superávit (+500 kcal).', metric: 'Delta Calórico (kcal/día)', imperial: 'Delta Calórico (kcal/día)' },
    fr: { name: 'Objectif Métabolique', desc: 'Définit le bilan énergétique ciblé : déficit (-500 kcal), maintien (0) ou surplus (+500 kcal).', metric: 'Delta Énergétique (kcal/jour)', imperial: 'Delta Énergétique (kcal/jour)' },
    de: { name: 'Kalorisches Ziel', desc: 'Definiert die Energiebilanz: Kaloriendefizit (-500 kcal), Erhalt (0) oder Kalorienüberschuss (+500 kcal).', metric: 'Delta (kcal/Tag)', imperial: 'Delta (kcal/Tag)' },
    ko: { name: '체중 관리 목표', desc: '감량(-500 kcal 적자), 유지(균형), 증량(+500 kcal 잉여) 목표에 맞춘 일일 열량 조정치입니다.', metric: '열량 증감치 (kcal/일)', imperial: '열량 증감치 (kcal/일)' },
    hi: { name: 'चयापचय लक्ष्य', desc: 'कैलोरी संतुलन निर्धारित करता है: वजन घटाना (-500 किलोकैलोरी), स्थिर रखना (0), या वजन बढ़ाना (+500)।', metric: 'दैनिक परिवर्तन (kcal/दिन)', imperial: 'दैनिक परिवर्तन (kcal/दिन)' }
  },
  rhr: {
    en: { name: 'Resting Heart Rate (RHR)', desc: 'Resting pulse in beats per minute, measured right after waking in bed.', metric: 'Beats per minute (bpm)', imperial: 'Beats per minute (bpm)' },
    es: { name: 'Frecuencia Cardíaca en Reposo', desc: 'Pulsaciones por minuto en reposo total, preferentemente al despertar antes de levantarse.', metric: 'Latidos por minuto (lpm)', imperial: 'Latidos por minuto (lpm)' },
    fr: { name: 'Fréquence Cardiaque au Repos (FCR)', desc: 'Battements par minute au repos complet, idéalement mesurés au réveil avant le lever.', metric: 'Battements par minute (bpm)', imperial: 'Battements par minute (bpm)' },
    de: { name: 'Ruhepuls (RHR)', desc: 'Herzschläge pro Minute in völliger körperlicher Ruhe, optimal morgens direkt nach dem Erwachen.', metric: 'Schläge pro Minute (S/min)', imperial: 'Schläge pro Minute (S/min)' },
    ko: { name: '안정 시 심박수 (RHR)', desc: '신체적 휴식 상태에서 1분간 측정한 맥박 수로, 기상 직후 침대에서 측정하는 것이 가장 정확합니다.', metric: '분당 심박수 (bpm)', imperial: '분당 심박수 (bpm)' },
    hi: { name: 'विश्राम हृदय गति (RHR)', desc: 'पूर्ण विश्राम की स्थिति में प्रति मिनट हृदय की धड़कन, विशेष रूप से सुबह जागने पर मापी गई।', metric: 'धड़कन प्रति मिनट (bpm)', imperial: 'धड़कन प्रति मिनट (bpm)' }
  },
  preweight: {
    en: { name: 'Pre-Pregnancy Weight', desc: 'Maternal baseline body weight prior to conception, used to establish recommended gestational weight gain brackets.', metric: 'Kilograms (kg)', imperial: 'Pounds (lbs)' },
    es: { name: 'Peso Previo al Embarazo', desc: 'Peso materno antes de la gestación para definir el rango de ganancia ponderal recomendado según la ACOG.', metric: 'Kilogramos (kg)', imperial: 'Libras (lbs)' },
    fr: { name: 'Poids Pré-Grossesse', desc: 'Poids maternel avant la conception permettant de définir la prise de poids recommandée selon l’ACOG.', metric: 'Kilogrammes (kg)', imperial: 'Livres (lbs)' },
    de: { name: 'Vor-Schwangerschaftsgewicht', desc: 'Körpergewicht vor der Empfängnis zur Festlegung der empfohlenen Gewichtszunahme nach IOM/ACOG.', metric: 'Kilogramm (kg)', imperial: 'Pfund (lbs)' },
    ko: { name: '임신 전 체중', desc: '임신 전 산모의 기준 체중으로, 임신 기간 권장 체중 증가 범위를 분류하는 기준이 됩니다.', metric: '킬로그램 (kg)', imperial: '파운드 (lbs)' },
    hi: { name: 'गर्भावस्था पूर्व वजन', desc: 'गर्भाधान से पहले माता का मूल शारीरिक वजन, जो गर्भावस्था में अनुशंसित वजन वृद्धि सीमा तय करता है।', metric: 'किलोग्राम (kg)', imperial: 'पाउंड (lbs)' }
  }
};

const LIFT_VARIABLE_DEFINITIONS: Record<string, Record<Locale, { name: string; desc: string; metric: string; imperial: string }>> = {
  weight: {
    en: { name: 'Weight Lifted (Barbell Load)', desc: 'Total barbell, dumbbell, or machine weight lifted for all completed reps.', metric: 'Kilograms (kg)', imperial: 'Pounds (lbs)' },
    es: { name: 'Carga Levantada (Peso en Barra)', desc: 'La resistencia externa total desplazada en la barra o máquina durante las repeticiones completadas.', metric: 'Kilogramos (kg)', imperial: 'Libras (lbs)' },
    fr: { name: 'Charge Soulevée (Barre)', desc: 'La charge externe totale déplacée sur la barre ou la machine pour les répétitions réalisées.', metric: 'Kilogrammes (kg)', imperial: 'Livres (lbs)' },
    de: { name: 'Bewältigtes Hantelgewicht', desc: 'Die gesamte externe Last auf der Hantel oder Maschine für die absolvierten Wiederholungen.', metric: 'Kilogramm (kg)', imperial: 'Pfund (lbs)' },
    ko: { name: '리프팅 수행 중량 (바벨 부하)', desc: '완수한 반복 횟수 동안 바벨, 덤벨 또는 머신으로 들어올린 순수 외부 저항 중량입니다.', metric: '킬로그램 (kg)', imperial: '파운드 (lbs)' },
    hi: { name: 'उठाया गया भार (बारबेल लोड)', desc: 'पूरी की गई पुनरावृत्तियों के लिए बारबेल या मशीन पर उठाया गया कुल बाहरी वजन।', metric: 'किलोग्राम (kg)', imperial: 'पाउंड (lbs)' }
  },
  age: {
    en: { name: 'Repetitions Completed', desc: 'Number of clean repetitions completed with good form before fatigue.', metric: 'Rep count (integer)', imperial: 'Rep count (integer)' },
    es: { name: 'Repeticiones Realizadas', desc: 'Número de repeticiones consecutivas ejecutadas con técnica estricta hasta el fallo técnico momentáneo (rango ideal: 2 a 10 reps).', metric: 'Número de repeticiones', imperial: 'Número de repeticiones' },
    fr: { name: 'Répétitions Complétées', desc: 'Nombre de répétitions consécutives effectuées avec une technique rigoureuse jusqu’à l’échec technique (plage idéale : 2 à 10 reps).', metric: 'Nombre de répétitions', imperial: 'Nombre de répétitions' },
    de: { name: 'Absolvierte Wiederholungen', desc: 'Anzahl der aufeinanderfolgenden Wiederholungen mit sauberer technischer Ausführung bis zur lokalen Muskelermüdung (optimal: 2–10 Wdh).', metric: 'Wiederholungsanzahl', imperial: 'Wiederholungsanzahl' },
    ko: { name: '완수한 반복 횟수 (Reps)', desc: '정확한 자세를 유지하며 일시적 기술적 한계점까지 완수한 연속 반복 횟수입니다 (최적 권장 구간: 2~10회).', metric: '반복 횟수 (정수)', imperial: '반복 횟수 (정수)' },
    hi: { name: 'पूरी की गई पुनरावृत्तियां (Reps)', desc: 'सटीक तकनीक के साथ मांसपेशियों की थकान तक पूरी की गई लगातार पुनरावृत्तियों की संख्या (इष्टतम सीमा: 2-10 रेप्स)।', metric: 'रेप्स संख्या (पूर्णांक)', imperial: 'रेप्स संख्या (पूर्णांक)' }
  }
};

export function getInputVariablesGuide(inputs: InputField[] = [], lang: Locale, slug: string = '', toolTitle?: string) {
  const ui = UI_TITLES[lang] || UI_TITLES.en;
  const is1RM = slug === '1rm-calculator' || slug === 'one-rep-max-calculator';
  const isBmiDomain = [
    'bmi-calculator', 
    '3d-bmi-calculator', 
    'bmi-calculator-for-indians', 
    'asian-bmi-calculator', 
    'bmi-chart', 
    'new-bmi-calculator', 
    '3d-body-visualizer'
  ].includes(slug);

  const items: VariableGuideItem[] = inputs.map(input => {
    // Tailor age and gender explanations accurately for BMI calculators
    if (isBmiDomain && input.id === 'age') {
      const ageBmiDesc: Record<Locale, string> = {
        en: 'Age is collected for educational context and interpretation. Age is not part of the BMI equation.',
        es: 'La edad se recopila para contexto educativo e interpretación. No forma parte de la ecuación del IMC.',
        fr: 'L’âge est recueilli à des fins de contexte éducatif et d’interprétation. Il ne fait pas partie de l’équation de l’IMC.',
        de: 'Das Alter dient dem pädagogischen Kontext und der Referenzinterpretation. Das Alter ist kein Bestandteil der BMI-Gleichung.',
        ko: '연령은 교육적 맥락 및 기준선 해석을 위해 수집됩니다. 연령은 BMI 계산 공식 자체에는 영향을 주지 않습니다.',
        hi: 'आयु शैक्षिक संदर्भ और व्याख्या के लिए एकत्र की जाती है। आयु बीएमआई समीकरण का हिस्सा नहीं है।'
      };
      const def = VARIABLE_DEFINITIONS.age[lang] || VARIABLE_DEFINITIONS.age.en;
      return {
        id: input.id,
        name: def.name,
        description: ageBmiDesc[lang] || ageBmiDesc.en,
        metricUnit: def.metric,
        imperialUnit: def.imperial
      };
    }

    if (isBmiDomain && input.id === 'gender') {
      const genderBmiDesc: Record<Locale, string> = {
        en: 'Gender may be used for educational interpretation and related health references. It does not affect the BMI calculation itself.',
        es: 'El género se puede utilizar para interpretación educativa y referencias de salud. No afecta el cálculo del IMC en sí.',
        fr: 'Le genre peut être utilisé pour l’interprétation éducative et les références de santé. Il n’affecte pas le calcul de l’IMC lui-même.',
        de: 'Das Geschlecht kann für die Interpretation und gesundheitliche Referenzen herangezogen werden. Es hat keinen Einfluss auf die eigentliche BMI-Berechnung.',
        ko: '성별은 교육적 해석 및 관련 건강 기준을 위해 참조될 수 있으며, BMI 계산 공식 자체에는 영향을 주지 않습니다.',
        hi: 'लिंग का उपयोग शैक्षिक व्याख्या और संबंधित स्वास्थ्य संदर्भों के लिए किया जा सकता है। यह स्वयं बीएमआई गणना को प्रभावित नहीं करता है।'
      };
      const def = VARIABLE_DEFINITIONS.gender[lang] || VARIABLE_DEFINITIONS.gender.en;
      return {
        id: input.id,
        name: def.name,
        description: genderBmiDesc[lang] || genderBmiDesc.en,
        metricUnit: def.metric,
        imperialUnit: def.imperial
      };
    }

    if (slug === 'protein-intake-calculator' && input.id === 'goal') {
      const proteinGoalDefs: Record<Locale, { name: string; desc: string; metric: string; imperial: string }> = {
        en: {
          name: 'Dietary & Fitness Goal',
          desc: 'Your body composition goal: Maintenance (1.6 g/kg), Weight Loss (2.0 g/kg to protect muscle during a deficit), or Weight Gain (2.2 g/kg for hypertrophy).',
          metric: 'Target Factor (g/kg/day)',
          imperial: 'Target Factor (g/lb/day)'
        },
        es: {
          name: 'Objetivo Físico y Dietético',
          desc: 'Meta de composición corporal: Mantenimiento (1.6 g/kg), Pérdida de Peso (2.0 g/kg para preservar masa muscular) o Ganancia de Peso (2.2 g/kg para hipertrofia).',
          metric: 'Factor Objetivo (g/kg/día)',
          imperial: 'Factor Objetivo (g/lb/día)'
        },
        fr: {
          name: 'Objectif Physique et Diététique',
          desc: 'Objectif de composition corporelle : Maintien (1,6 g/kg), Perte de Poids (2,0 g/kg pour préserver le muscle) ou Prise de Masse (2,2 g/kg pour l’hypertrophie).',
          metric: 'Facteur Cible (g/kg/jour)',
          imperial: 'Facteur Cible (g/lb/jour)'
        },
        de: {
          name: 'Trainings- & Ernährungsziel',
          desc: 'Individuelles Ziel: Gewichtserhalt (1,6 g/kg), Fettabbau (2,0 g/kg zum Muskelschutz) oder Muskelaufbau (2,2 g/kg für Hypertrophie).',
          metric: 'Zielwert (g/kg/Tag)',
          imperial: 'Zielwert (g/lb/Tag)'
        },
        ko: {
          name: '운동 및 식단 관리 목표',
          desc: '체성분 목표: 체중 유지(1.6 g/kg), 감량(다이어트 중 근손실 방지 2.0 g/kg), 근육 증량(근비대 극대화 2.2 g/kg).',
          metric: '목표 계수 (g/kg/일)',
          imperial: '목표 계수 (g/lb/일)'
        },
        hi: {
          name: 'फिटनेस एवं आहार लक्ष्य',
          desc: 'शारीरिक लक्ष्य: वजन बनाए रखना (1.6 ग्राम/किग्रा), वजन घटाना (मांसपेशियों की सुरक्षा हेतु 2.0 ग्राम/किग्रा), या वजन बढ़ाना (मांसपेशी निर्माण हेतु 2.2 ग्राम/किग्रा)।',
          metric: 'लक्षित गुणक (ग्राम/किग्रा/दिन)',
          imperial: 'लक्षित गुणक (ग्राम/पाउंड/दिन)'
        }
      };
      const def = proteinGoalDefs[lang] || proteinGoalDefs.en;
      return {
        id: input.id,
        name: def.name,
        description: def.desc,
        metricUnit: def.metric,
        imperialUnit: def.imperial
      };
    }

    const sourceDefs = is1RM && LIFT_VARIABLE_DEFINITIONS[input.id] 
      ? LIFT_VARIABLE_DEFINITIONS 
      : VARIABLE_DEFINITIONS;
      
    const def = sourceDefs[input.id]?.[lang] || sourceDefs[input.id]?.en;
    if (def) {
      return {
        id: input.id,
        name: def.name,
        description: def.desc,
        metricUnit: def.metric,
        imperialUnit: def.imperial
      };
    }
    const labelText = typeof input.label === 'object' ? (input.label[lang] || input.label.en || input.id) : String(input.label);
    return {
      id: input.id,
      name: labelText,
      description: labelText,
      metricUnit: 'Standard units',
      imperialUnit: 'Standard units'
    };
  });

  const dynamicSubtitle = toolTitle ? ({
    en: `Standardized measurement parameters and unit conversions for ${toolTitle}.`,
    es: `Parámetros de medición estandarizados y conversiones de unidades empleados en ${toolTitle}.`,
    fr: `Paramètres de mesure standardisés et conversions d’unités utilisés pour ${toolTitle}.`,
    de: `Standardisierte Messparameter und Einheitenumrechnungen für ${toolTitle}.`,
    ko: `${toolTitle}에 적용되는 표준 측정 파라미터 및 단위 변환 기준입니다.`,
    hi: `${toolTitle} द्वारा उपयोग किए जाने वाले मानकीकृत मापन पैरामीटर और इकाई रूपांतरण।`
  }[lang] || ui.varSubtitle) : ui.varSubtitle;

  return {
    title: ui.varTitle,
    subtitle: dynamicSubtitle,
    metricLabel: ui.metricLabel,
    imperialLabel: ui.imperialLabel,
    items
  };
}

export function getToolInterpretationAndLimitations(slug: string, lang: Locale): DomainInterpretationGuide {
  const isRegional = ['bmi-calculator-for-indians', 'asian-bmi-calculator', 'bmi-calculator-india'].includes(slug);
  const isHydration = slug === 'water-intake-calculator';
  const isCalorieDeficit = slug === 'calorie-calculator';
  const isTdee = slug === 'tdee-calculator';
  const isBmr = slug === 'bmr-calculator';
  const isMetabolic = slug === 'maintenance-calorie-calculator';
  const isMacro = slug === 'macro-calculator';
  const isIdealWeight = slug === 'ideal-weight-calculator';
  const isLbm = slug === 'lean-body-mass-calculator';
  const isHealthyWeight = slug === 'healthy-weight-by-height';
  const isBodyComp = slug === 'body-fat-calculator';
  const isWHR = slug === 'waist-to-hip-ratio-calculator';
  const isBsa = slug === 'body-surface-area-calculator';
  const isCardio = ['heart-rate-zone-calculator', 'karvonen-heart-rate-calculator'].includes(slug);
  const isStrength = ['1rm-calculator', 'one-rep-max-calculator'].includes(slug);
  const isDiabetes = slug === 'diabetes-risk-calculator';
  const isPregnancy = slug === 'pregnancy-weight-gain-calculator';
  const isSpecialty = ['protein-intake-calculator'].includes(slug);

  const domain = isBmr ? 'bmr' : (isRegional ? 'regional' : (isHydration ? 'hydration' : (isMacro ? 'macro' : (isCalorieDeficit ? 'calorieDeficit' : (isTdee ? 'tdee' : (isIdealWeight ? 'idealWeight' : (isLbm ? 'lbm' : (isHealthyWeight ? 'healthyWeight' : (isMetabolic ? 'metabolic' : (isBsa ? 'bsa' : (isWHR ? 'whr' : (isBodyComp ? 'bodycomp' : (isCardio ? 'cardio' : (isStrength ? 'strength' : (isDiabetes ? 'diabetes' : (isPregnancy ? 'pregnancy' : (isSpecialty ? 'specialty' : 'bmi')))))))))))))))));

  const GUIDES: Record<string, Record<Locale, DomainInterpretationGuide>> = {
    whr: {
      en: {
        domain: 'whr',
        sectionTitle: 'Waist-to-Hip Ratio & Fat Distribution Guide',
        sectionSubtitle: 'Understanding body shape, visceral adiposity, and cardiovascular health risks.',
        interpretationTitle: 'Apple vs. Pear Body Shape & Fat Distribution',
        interpretationText: 'Waist-to-Hip Ratio (WHR) assesses where your body stores fat rather than overall weight. Lower WHR values indicate a "pear" body shape (gynoid pattern), where fat is stored subcutaneously around the hips and thighs (gluteofemoral fat), which is metabolically neutral or protective. Higher WHR values indicate an "apple" body shape (android pattern), signaling central obesity where fat accumulates around internal abdominal organs (visceral adipose tissue). According to World Health Organization (WHO) benchmarks, a WHR above 0.85 for women or above 0.90 for men signifies substantially increased risk for insulin resistance, hypertension, dyslipidemia, and cardiovascular disease.',
        limitationsTitle: 'Measurement Technique, Skeletal Structure & Pregnancy',
        limitationsText: 'WHR measures proportion, not absolute body fat percentage. Individuals with wide pelvic bone structures naturally exhibit lower ratios, while narrow-hipped individuals may register elevated ratios despite low visceral fat. WHR is inaccurate during pregnancy due to uterine expansion. For clinical accuracy, measure waist circumference at the midpoint between the lower margin of the last rib and the top of the iliac crest at the end of normal expiration, and measure hips at the widest circumference over the buttocks.',
        medicalNoticeTitle: 'Cardiometabolic Screening Notice',
        medicalNoticeText: 'WHR is a primary screening index for metabolic risk, not a diagnostic medical test. Combine WHR insights with blood pressure checks, fasting blood glucose tests, and lipid panels under medical supervision.'
      },
      es: {
        domain: 'whr',
        sectionTitle: 'Índice Cintura-Cadera y Distribución de Grasa Corporal',
        sectionSubtitle: 'Comprenda la forma corporal (manzana vs. pera), la grasa visceral y el riesgo cardiovascular.',
        interpretationTitle: 'Morfología en Manzana vs. Pera y Adiposidad Visceral',
        interpretationText: 'El Índice Cintura-Cadera (ICC) evalúa la localización del tejido adiposo en lugar del peso total. Los valores bajos reflejan un patrón ginoide o en forma de pera, con almacenamiento subcutáneo en caderas y muslos (grasa femoroglútea), el cual resulta metabólicamente protector. Valores elevados indican un patrón androide o en forma de manzana, característico de la obesidad central con acumulación de grasa visceral alrededor de órganos vitales. Según la OMS, un ICC superior a 0.85 en mujeres o a 0.90 en hombres se asocia a un riesgo significativamente mayor de resistencia a la insulina y patología cardiovascular.',
        limitationsTitle: 'Estructura Ósea, Técnica de Medición y Embarazo',
        limitationsText: 'El ICC es una proporción relativa, no una medición de grasa total. Personas con pelvis ancha pueden presentar índices bajos a pesar de un perímetro abdominal elevado, mientras que personas con caderas estrechas pueden registrar valores altos con poca grasa. No es aplicable durante el embarazo. Mida la cintura en el punto medio entre la última costilla y la cresta ilíaca al final de una espiración normal.',
        medicalNoticeTitle: 'Aviso de Cribado Cardiometabólico',
        medicalNoticeText: 'El ICC es un indicador epidemiológico de riesgo cardiovascular, no un diagnóstico definitivo. Complemente este cálculo con análisis de lípidos, glucemia en ayunas y presión arterial.'
      },
      fr: {
        domain: 'whr',
        sectionTitle: 'Rapport Taille-Hanches et Distribution des Graisses',
        sectionSubtitle: 'Comprendre la morphologie (pomme vs poire), la graisse viscérale et les risques cardiovasculaires.',
        interpretationTitle: 'Morphologie en Pomme vs Poire et Graisse Viscérale',
        interpretationText: 'Le Rapport Taille-Hanches (RTH) évalue la répartition régionale de la masse grasse plutôt que le poids brut. Un RTH bas caractérise une silhouette gynoïde ou en poire, où la graisse est stockée sous la peau au niveau des hanches et des cuisses (graisse fémoro-fessière), protectrice sur le plan métabolique. Un RTH élevé traduit une silhouette androïde ou en pomme, révélant une obésité abdominale centrale avec excès de graisse viscérale autour des organes. Selon l\'OMS, un ratio supérieur à 0,85 chez la femme ou à 0,90 chez l\'homme indique un risque cardiométabolique et diabétique accru.',
        limitationsTitle: 'Morphologie Squelettique, Mesures et Grossesse',
        limitationsText: 'Le RTH évalue un rapport géométrique et non le pourcentage de graisse absolu. Un bassin large réduit mécaniquement le ratio, tandis qu\'un bassin étroit peut le surévaluer. Le RTH est inapplicable durant la grossesse. Pour une mesure fiable, placez le ruban à mi-distance entre la dernière côte palpable et la crête iliaque en fin d\'expiration normale.',
        medicalNoticeTitle: 'Information Médicale Cardiométabolique',
        medicalNoticeText: 'Le RTH est un indice de dépistage préventif. Consultez votre médecin pour compléter ce bilan par une mesure de la tension artérielle, de la glycémie à jeun et du profil lipidique.'
      },
      de: {
        domain: 'whr',
        sectionTitle: 'Taille-Hüft-Verhältnis & Fettverteilungsmuster',
        sectionSubtitle: 'Körpertypen (Apfel- vs. Birnenform), viszerales Bauchfett und kardiovaskuläre Risiken verstehen.',
        interpretationTitle: 'Apfel- vs. Birnenform & Viszerale Adipositas',
        interpretationText: 'Das Taille-Hüft-Verhältnis (THV/WHR) erfasst die Verteilung des Fettgewebes anstelle des reinen Gesamtgewichts. Ein niedriges THV kennzeichnet den gynoiden Körpertyp (Birnenform), bei dem Fett vorwiegend subkutan an Hüften und Oberschenkeln gespeichert wird – was metabolisch neutral bis schützend wirkt. Ein hohes THV signalisiert den androiden Körpertyp (Apfelform) mit viszeralem Fettgewebe um die Bauchorgane. Nach WHO-Kriterien bedeutet ein THV von über 0,85 bei Frauen oder über 0,90 bei Männern ein deutlich erhöhtes Risiko für Insulinresistenz, Bluthochdruck und Herz-Kreislauf-Erkrankungen.',
        limitationsTitle: 'Knochenbau, Messtechnik und Schwangerschaft',
        limitationsText: 'Das THV spiegelt ein geometrisches Verhältnis wider, keinen absoluten Körperfettanteil. Ein breiter Beckenknochen führt rechnerisch zu niedrigeren Werten, während schmale Hüften den Wert erhöhen können. In der Schwangerschaft ist das THV nicht aussagekräftig. Messen Sie die Taille am Mittelpunkt zwischen unterstem Rippenbogen und Beckenkamm am Ende einer normalen Ausatmung.',
        medicalNoticeTitle: 'Kardiometabolistischer Screening-Hinweis',
        medicalNoticeText: 'Das THV dient der epidemiologischen Früherkennung von Bauchfett-Risiken. Lassen Sie Ihr Gesamtrisiko durch Blutdruck-, Nüchternblutzucker- und Lipidkontrollen beim Arzt abklären.'
      },
      ko: {
        domain: 'whr',
        sectionTitle: '허리-엉덩이 비율(WHR) 및 체지방 분포 가이드',
        sectionSubtitle: '사과형 vs 배형 체형, 복부 내장지방 축적 및 심혈관 대사 질환 위험을 안내합니다.',
        interpretationTitle: '사과형 vs 배형 체형과 복부 내장지방의 임상적 의미',
        interpretationText: '허리-엉덩이 비율(WHR)은 단순 체중이 아닌 체지방의 신체 부위별 분포를 정밀하게 평가합니다. 낮은 WHR 수치는 둔부와 대퇴부 피하에 지방이 저장되는 배형(gynoid, 여성형) 체형을 나타내며 대사적으로 비교적 안전합니다. 반면 높은 WHR 수치는 복부 장기 주변에 내장지방이 과다 축적되는 사과형(android, 남성형) 중심성 비만을 나타냅니다. 세계보건기구(WHO) 기준에 따르면 여성 0.85 초과, 남성 0.90 초과 시 인슐린 저항성, 제2형 당뇨병, 고혈압 및 심혈관 질환 발병 위험이 현저히 증가합니다.',
        limitationsTitle: '골격 구조 편차, 계측 오차 및 임신 중 제한',
        limitationsText: 'WHR은 비율 지표이므로 절대적인 총 체지방률을 직접 측정하지는 못합니다. 골반 골격이 선천적으로 넓은 사람은 상대적으로 수치가 낮게 나오고, 골반이 좁은 체형은 수치가 높게 나타날 수 있습니다. 임신 중에는 자궁 팽창으로 적용할 수 없습니다. 정확한 측정을 위해 마지막 갈비뼈 밑단과 골반 장골능 능선 중간 지점에서 정상 호기(숨을 내쉰 상태) 시 수평으로 허리둘레를 측정하세요.',
        medicalNoticeTitle: '심혈관 대사 건강 안내',
        medicalNoticeText: 'WHR은 복부 비만에 따른 대사 위험을 선별하는 지표입니다. 정확한 건강 상태 진단을 위해 혈압, 공복 혈당, 중성지방 및 콜레스테롤 검사를 정기적으로 병행하시기 바랍니다.'
      },
      hi: {
        domain: 'whr',
        sectionTitle: 'कमर-से-कूल्हा अनुपात (WHR) एवं वसा वितरण गाइड',
        sectionSubtitle: 'सेब बनाम नाशपाती शारीरिक आकार, आंतरिक पेट की चर्बी और हृदय जोखिम को समझें।',
        interpretationTitle: 'सेब बनाम नाशपाती शरीर का आकार एवं विसरल फैट',
        interpretationText: 'कमर-से-कूल्हा अनुपात (WHR) कुल वजन के बजाय यह मापता है कि शरीर में वसा कहां जमा हो रही है। कम WHR मान नाशपाती के आकार (गायनोइड पैटर्न) को दर्शाता है, जहां वसा मुख्य रूप से कूल्हों और जांघों पर त्वचा के नीचे जमा होती है, जो चयापचय दृष्टि से सुरक्षित मानी जाती है। उच्च WHR मान सेब के आकार (एंड्रॉइड पैटर्न) को दर्शाता है, जो पेट के आंतरिक अंगों के आसपास हानिकारक आंतरिक वसा (विसरल फैट) के संचय का संकेत है। विश्व स्वास्थ्य संगठन (WHO) के अनुसार, महिलाओं के लिए 0.85 से अधिक और पुरुषों के लिए 0.90 से अधिक WHR इंसुलिन प्रतिरोध, उच्च रक्तचाप और हृदय रोगों के जोखिम को काफी बढ़ा देता है।',
        limitationsTitle: 'शारीरिक संरचना, मापन तकनीक एवं गर्भावस्था की सीमाएं',
        limitationsText: 'WHR एक अनुपात है, यह कुल वसा प्रतिशत नहीं मापता। चौड़े कूल्हे की हड्डियों वाले व्यक्तियों में यह अनुपात स्वाभाविक रूप से कम आ सकता है, जबकि संकरे कूल्हों वाले व्यक्तियों में वसा कम होने पर भी अनुपात अधिक दिख सकता है। गर्भावस्था के दौरान यह लागू नहीं होता। सटीक माप के लिए अंतिम पसली और कूल्हे की हड्डी के मध्य बिंदु पर सामान्य सांस छोड़ने के बाद कमर मापें।',
        medicalNoticeTitle: 'हृदय-चयापचय स्वास्थ्य सूचना',
        medicalNoticeText: 'WHR पेट की चर्बी के जोखिम की प्रारंभिक जांच के लिए है, किसी डॉक्टर के स्वतंत्र निदान का विकल्प नहीं। इसके साथ रक्तचाप, फास्टिंग ब्लड शुगर और लिपिड प्रोफाइल की नियमित जांच कराएं।'
      }
    },
    bsa: {
      en: {
        domain: 'bsa',
        sectionTitle: 'Body Surface Area & Clinical Physiology Guide',
        sectionSubtitle: 'Understanding how BSA standardizes metabolic rates, cardiac index, and pharmacokinetics.',
        interpretationTitle: 'Mosteller Formula & Physiological Normalization',
        interpretationText: 'Body Surface Area (BSA) measures the total external surface area of the human body in square meters (m²). The standard reference average is roughly 1.90 m² for adult men and 1.60 m² for adult women (with 1.73 m² serving as the universal reference standard in renal clearance formulas). In clinical physiology, BSA correlates much more strongly with circulating blood volume, cardiac output (Cardiac Index = Cardiac Output ÷ BSA), and basal metabolic rate than total body weight alone, because heat dissipation and cellular respiration scale with surface boundary area.',
        limitationsTitle: 'Clinical Context & Pharmacological Limitations',
        limitationsText: 'Mathematical BSA formulas approximate standard human geometries. Variations can occur in individuals with severe obesity, extreme fluid retention (ascites, severe edema), or limb amputations. While oncologists and nephrologists calculate BSA to determine narrow-therapeutic-index chemotherapy and medication dosages, this calculator is strictly an educational tool and must never be used for independent clinical dosing.',
        medicalNoticeTitle: 'Clinical Medication & Dosing Safety Notice',
        medicalNoticeText: 'This tool provides educational estimates of surface area. Never alter medication doses, chemotherapy schedules, or clinical protocols without direct oversight from your medical team.'
      },
      es: {
        domain: 'bsa',
        sectionTitle: 'Superficie Corporal y Fisiología Clínica',
        sectionSubtitle: 'Cómo la superficie corporal (BSA) estandariza el metabolismo, el índice cardíaco y la dosificación.',
        interpretationTitle: 'Fórmula de Mosteller y Normalización Fisiológica',
        interpretationText: 'La Superficie Corporal (BSA) cuantifica el área externa total del organismo en metros cuadrados (m²). La media de referencia ronda 1.90 m² en hombres y 1.60 m² en mujeres (con 1.73 m² como estándar en depuración renal). En fisiología clínica, la BSA se correlaciona con mayor precisión que el peso con el volumen sanguíneo circulante y el gasto cardíaco.',
        limitationsTitle: 'Contexto Clínico y Limitaciones Farmacológicas',
        limitationsText: 'Las ecuaciones de BSA son aproximaciones geométricas. Pueden existir discrepancias en casos de obesidad mórbida o retención hídrica masiva (anasarca, ascitis). Aunque se utiliza para dosificar fármacos oncológicos, esta herramienta no debe emplearse con fines terapéuticos independientes.',
        medicalNoticeTitle: 'Aviso de Seguridad y Dosificación Clínica',
        medicalNoticeText: 'Esta herramienta ofrece estimaciones puramente educativas. Nunca modifique dosis de medicamentos, quimioterapia ni tratamientos clínicos sin la supervisión directa de su médico especialista.'
      },
      fr: {
        domain: 'bsa',
        sectionTitle: 'Surface Corporelle et Guide de Physiologie Clinique',
        sectionSubtitle: 'Comprendre comment la surface corporelle (BSA) standardise le métabolisme, l\'index cardiaque et l\'élimination.',
        interpretationTitle: 'Formule de Mosteller et Normalisation Physiologique',
        interpretationText: 'La Surface Corporelle (BSA) mesure l\'aire externe totale du corps humain en mètres carrés (m²). La moyenne standard est d\'environ 1,90 m² chez l\'homme adulte et 1,60 m² chez la femme adulte (avec 1,73 m² comme norme universelle de référence en clairance rénale). En physiologie clinique, la surface corporelle est bien plus corrélée au volume sanguin, au débit cardiaque (Index Cardiaque = Débit ÷ BSA) et au métabolisme de base que le poids corporel brut.',
        limitationsTitle: 'Contexte Clinique et Limites Pharmacologiques',
        limitationsText: 'Les formules mathématiques de BSA reposent sur une géométrie anatomique théorique. Des écarts peuvent survenir chez les sujets atteints d\'obésité massive, d\'œdèmes majeurs (ascite, anasarque) ou d\'amputations. Bien que la BSA serve en oncologie et néphrologie pour calibrer certains traitements à marge étroite, cet outil ne doit en aucun cas servir à l\'autothérapie.',
        medicalNoticeTitle: 'Avertissement Médical et Posologie',
        medicalNoticeText: 'Ce calculateur propose une estimation éducative. Ne modifiez jamais une posologie médicamenteuse ou un protocole de chimiothérapie sans la supervision directe de votre équipe médicale oncologique.'
      },
      de: {
        domain: 'bsa',
        sectionTitle: 'Körperoberfläche & Klinische Physiologie',
        sectionSubtitle: 'Wie die Körperoberfläche (KOF/BSA) Stoffwechselrate, Herzindex und pharmakologische Skalierung standardisiert.',
        interpretationTitle: 'Mosteller-Formel & Physiologische Normalisierung',
        interpretationText: 'Die Körperoberfläche (KOF oder BSA) erfasst die gesamte äußere Körperhülle in Quadratmetern (m²). Der weltweite Referenzmittelwert liegt bei ca. 1,90 m² für Männer und 1,60 m² für Frauen (wobei 1,73 m² als universeller Standardwert in der Nephrologie gilt). In der klinischen Physiologie korreliert die KOF enger mit Blutvolumen, Herzzeitvolumen (Herzindex = HZV ÷ KOF) und Grundumsatz als das reine Körpergewicht, da Wärmeverlust und Organleistung an die Oberfläche gekoppelt sind.',
        limitationsTitle: 'Klinischer Kontext & Pharmakologische Grenzen',
        limitationsText: 'Mathematische KOF-Formeln basieren auf standardisierten Körperproportionen. Bei extremer Adipositas, ausgeprägten Ödemen (Aszites, Anasarka) oder Amputationen können Abweichungen auftreten. Obwohl Onkologen und Nierenfachärzte die KOF zur Dosierung engmaschiger Medikamente heranziehen, darf dieser Rechner niemals zur eigenmächtigen Dosierungsanpassung genutzt werden.',
        medicalNoticeTitle: 'Hinweis zu Medikamentendosierung & Klinischer Sicherheit',
        medicalNoticeText: 'Dieses Werkzeug dient ausschließlich der physiologischen Orientierung. Verändern Sie keinesfalls eigenständig Medikamentendosierungen, Chemotherapien oder klinische Behandlungen ohne direkte Anweisung Ihres Onkologen oder Facharztes.'
      },
      ko: {
        domain: 'bsa',
        sectionTitle: '체표면적(BSA) 및 임상 생리학 가이드',
        sectionSubtitle: '체표면적이 대사율, 심박출 지수(Cardiac Index) 및 약동학적 표준화에 어떻게 활용되는지 안내합니다.',
        interpretationTitle: 'Mosteller 공식과 생리학적 표준화 원리',
        interpretationText: '체표면적(Body Surface Area, BSA)은 인체 외피의 총면적을 제곱미터(m²) 단위로 계측한 지표입니다. 성인 남성의 평균 체표면적은 약 1.90 m², 성인 여성은 약 1.60 m²이며, 신장내과 사구체여과율(eGFR) 표준화에는 1.73 m²가 범용 기준선으로 사용됩니다. 임상 생리학에서 체표면적은 단순 체중보다 순환 혈액량, 심박출 지수(심박출량 ÷ BSA), 기초대사량과 훨씬 더 밀접한 상관관계를 가집니다.',
        limitationsTitle: '임상적 적용 맥락 및 약리학적 한계점',
        limitationsText: '수학적 BSA 공식은 일반적인 신체 해부학적 비례를 전제로 합니다. 고도 비만 환자(지방 조직 증가율이 표면적 확장률을 초과함), 중증 체액 저류(복수, 전신 부종) 또는 사지 절단 환자의 경우 공식 추정치와 실제 면적 간에 편차가 발생할 수 있습니다. 항암 화학요법 등의 투약 용량 결정에 사용되나, 온라인 도구를 자가 투약 기준으로 삼아서는 절대 안 됩니다.',
        medicalNoticeTitle: '임상 투약 안전 주의 안내',
        medicalNoticeText: '본 계산기는 생리학적 교육 참고 목적으로만 제공됩니다. 종양내과 전문의나 담당 의료진의 정밀한 처방 없이 항암제 또는 전문 의약품의 용량을 임의로 산정하거나 조정하지 마십시오.'
      },
      hi: {
        domain: 'bsa',
        sectionTitle: 'शारीरिक सतह क्षेत्र (BSA) एवं नैदानिक शरीर क्रिया विज्ञान',
        sectionSubtitle: 'समझें कि BSA चयापचय दर, कार्डियक इंडेक्स और नैदानिक मानकों को कैसे मानकीकृत करता है।',
        interpretationTitle: 'मोस्टेलर फॉर्मूला एवं शारीरिक मानकीकरण',
        interpretationText: 'शारीरिक सतह क्षेत्र (BSA) वर्ग मीटर (m²) में मानव शरीर की कुल बाहरी सतह को मापता है। वैश्विक मानक औसत वयस्क पुरुषों के लिए लगभग 1.90 m² और महिलाओं के लिए 1.60 m² है (गुर्दे की जांच में 1.73 m² को सार्वभौमिक संदर्भ माना जाता है)। नैदानिक शरीर क्रिया विज्ञान में, BSA केवल वजन की तुलना में रक्त की मात्रा, कार्डियक इंडेक्स (कार्डियक आउटपुट ÷ BSA) और बेसल मेटाबोलिक दर से अधिक निकटता से संबंधित है।',
        limitationsTitle: 'नैदानिक संदर्भ एवं औषधीय सीमाएं',
        limitationsText: 'गणितीय BSA सूत्र मानक शारीरिक ज्यामिति मानते हैं। अत्यधिक मोटापे, गंभीर सूजन (एडिमा/जलोदर) या अंग विच्छेदन के मामलों में भिन्नता हो सकती है। यद्यपि कैंसर विशेषज्ञ कीमोथेरेपी दवाओं के सटीक निर्धारण के लिए BSA का उपयोग करते हैं, इस ऑनलाइन कैलकुलेटर का उपयोग कभी भी स्वयं दवा की खुराक तय करने के लिए नहीं किया जाना चाहिए।',
        medicalNoticeTitle: 'नैदानिक दवा खुराक एवं सुरक्षा सूचना',
        medicalNoticeText: 'यह उपकरण केवल शैक्षिक संदर्भ के लिए है। अपने पंजीकृत ऑन्कोलॉजिस्ट या डॉक्टर के प्रत्यक्ष परामर्श के बिना कभी भी किसी दवा, कीमोथेरेपी या उपचार की खुराक को स्वयं समायोजित न करें।'
      }
    },
    macro: {
      en: {
        domain: 'macro',
        sectionTitle: 'Macronutrient Split & Nutritional Partitioning Guide',
        sectionSubtitle: 'How macronutrient ratios influence body composition, satiety, metabolic rate, and athletic performance.',
        interpretationTitle: 'Thermic Effect of Food, Satiety & Fuel Partitioning',
        interpretationText: 'While total calorie balance governs overall weight change, macronutrient distribution determines whether weight loss comes from adipose tissue or lean muscle mass. Protein exerts the highest Thermic Effect of Food (TEF ~20%–30%), meaning roughly a quarter of its caloric value is dissipated as heat during digestion and protein synthesis, while stimulating gut satiety hormones (peptide YY, GLP-1) to suppress hunger. Dietary carbohydrates replenish hepatic and muscle glycogen stores to sustain high-intensity anaerobic training and spare muscle tissue from gluconeogenesis. Dietary fats are essential for steroid hormone synthesis (including testosterone and estrogen), lipid-soluble vitamin absorption (A, D, E, K), and cellular membrane integrity.',
        limitationsTitle: 'Dietary Adherence, Food Quality & Individual Metabolism',
        limitationsText: 'Calculated macronutrient gram targets serve as an evidence-based starting baseline, not an immutable prescription. A mathematically sound macro split can still fail if food quality is neglected; prioritize whole, minimally processed foods, adequate dietary fiber (at least 14 g per 1,000 kcal), and micronutrient density. Furthermore, individual carbohydrate tolerance varies according to peripheral insulin sensitivity, training volume, and glycogen depletion rates. Track body weight trends, training performance, and energy levels over 2 to 4 weeks before adjusting carbohydrate and fat allocations.',
        medicalNoticeTitle: 'Clinical & Nutritional Supervision Notice',
        medicalNoticeText: 'Macronutrient guidelines provide educational targets for healthy adults. Individuals with chronic kidney disease (CKD), liver cirrhosis, metabolic disorders, or diabetes should consult a registered dietitian or physician before undertaking high-protein or restrictive ketogenic diets.'
      },
      es: {
        domain: 'macro',
        sectionTitle: 'Distribución de Macronutrientes y Partición Nutricional',
        sectionSubtitle: 'Cómo influyen las proporciones de macronutrientes en la composición corporal, la saciedad y el rendimiento.',
        interpretationTitle: 'Efecto Térmico de los Alimentos, Saciedad y Partición Energética',
        interpretationText: 'Si bien el balance calórico total determina el cambio de peso, la distribución de macronutrientes modula si la pérdida procede de tejido adiposo o masa muscular magra. La proteína posee el mayor Efecto Térmico de los Alimentos (ETA ~20%–30%), disipando una cuarta parte de su valor calórico en la digestión y estimulando hormonas de saciedad (PYY, GLP-1). Los carbohidratos reponen el glucógeno muscular y hepático para entrenamientos intensos y protegen la masa muscular. Las grasas dietéticas son indispensables para la síntesis de hormonas esteroideas, la absorción de vitaminas liposolubles (A, D, E, K) y la integridad de las membranas celulares.',
        limitationsTitle: 'Adherencia Dietética, Calidad de los Alimentos y Tolerancia Individual',
        limitationsText: 'Las metas en gramos de macronutrientes son una referencia inicial fundamentada en la evidencia. La calidad nutricional es primordial: priorice alimentos mínimamente procesados, fibra dietética (mínimo 14 g por cada 1.000 kcal) y densidad de micronutrientes. Asimismo, la tolerancia a los carbohidratos depende de la sensibilidad a la insulina y el volumen de entrenamiento. Evalúe su rendimiento y peso durante 2 a 4 semanas antes de reajustar carbohidratos y grasas.',
        medicalNoticeTitle: 'Aviso de Supervisión Clínica y Nutricional',
        medicalNoticeText: 'Estas recomendaciones son educativas para adultos sanos. Personas con enfermedad renal crónica, patologías hepáticas o diabetes deben consultar a un dietista colegiado o médico antes de adoptar dietas hiperproteicas o cetogénicas.'
      },
      fr: {
        domain: 'macro',
        sectionTitle: 'Répartition des Macronutriments et Partition Énergétique',
        sectionSubtitle: 'Comment les ratios nutritionnels influencent la composition corporelle, la satiété et la performance.',
        interpretationTitle: 'Effet Thermique des Aliments, Satiété et Rôle Physiologique',
        interpretationText: 'Si le bilan calorique régit la variation de masse corporelle, la répartition en macronutriments détermine si la perte pondérale cible le tissu adipeux ou préserve la masse musculaire. Les protéines présentent l’Effet Thermique des Aliments (ETA ~20 % à 30 %) le plus élevé, stimulant les peptides de satiété (PYY, GLP-1) pour réguler l’appétit. Les glucides reconstituent les réserves de glycogène musculaire indispensables aux efforts intenses et évitent le catabolisme musculaire. Les lipides alimentaires sont essentiels à la synthèse des hormones stéroïdiennes, à l’absorption des vitamines liposolubles (A, D, E, K) et à la structure membranaire.',
        limitationsTitle: 'Adhésion au Régime, Qualité Nutritionnelle et Tolérance Métabolique',
        limitationsText: 'Les objectifs en grammes constituent un point de départ fondé sur des preuves scientifiques. La qualité globale des aliments demeure déterminante : privilégiez les produits bruts, un apport en fibres suffisant (au moins 14 g par 1 000 kcal) et une bonne densité en micronutriments. La tolérance aux glucides varie selon la sensibilité à l’insuline et le volume d’activité. Ajustez vos apports après 2 à 4 semaines de suivi régulier.',
        medicalNoticeTitle: 'Mise en Garde Diététique et Médicale',
        medicalNoticeText: 'Ces repères s’adressent aux adultes en bonne santé à visée éducative. En cas d’insuffisance rénale, de troubles hépatiques ou de diabète, consultez un diététicien-nutritionniste ou un médecin avant tout régime hyperprotéiné ou cétogène.'
      },
      de: {
        domain: 'macro',
        sectionTitle: 'Makronährstoff-Verteilung & Nährstoff-Partitionierung',
        sectionSubtitle: 'Wie Makronährstoffverhältnisse Körperzusammensetzung, Sättigung, Stoffwechsel und Leistungsfähigkeit steuern.',
        interpretationTitle: 'Thermischer Effekt der Nahrung, Sättigung & Stoffwechselsteuerung',
        interpretationText: 'Während die Gesamtenergiebilanz das Körpergewicht steuert, entscheidet die Makronährstoffverteilung darüber, ob Gewicht als Fettgewebe oder fettfreie Muskelmasse abgebaut wird. Protein besitzt den höchsten thermischen Effekt (TEF ~20 %–30 %), wodurch rund ein Viertel seiner Energie bei der Verdauung als Wärme freigesetzt wird, während Sättigungshormone (PYY, GLP-1) den Appetit dämpfen. Kohlenhydrate füllen Muskel- und Leberglykogenspeicher für hochintensives Training auf und schützen Muskelgewebe vor Glukoneogenese. Nahrungsfette sind essenziell für die Synthese von Steroidhormonen, fettlöslichen Vitaminen (A, D, E, K) und Zellmembranen.',
        limitationsTitle: 'Ernährungsqualität, Ballaststoffe & Individuelle Glukosetoleranz',
        limitationsText: 'Berechnete Grammzahlen bieten eine evidenzbasierte Basis, keine starre Vorgabe. Neben den Makros entscheidet die Lebensmittelqualität: Achten Sie auf unverarbeitete Vollwertkost, mindestens 14 g Ballaststoffe pro 1.000 kcal und Mikronährstoffdichte. Die Kohlenhydrattoleranz hängt zudem von der individuellen Insulinsensitivität und dem Trainingsvolumen ab. Beobachten Sie Trainingsleistung und Körpergewicht über 2 bis 4 Wochen vor Anpassungen.',
        medicalNoticeTitle: 'Klinischer & Ernährungsmedizinischer Hinweis',
        medicalNoticeText: 'Diese Leitlinien dienen der allgemeinen Bildung gesunder Erwachsener. Personen mit chronischer Nierenerkrankung, Leberleiden oder Diabetes sollten vor proteinreichen oder ketogenen Ernährungsformen ärztlichen oder ernährungswissenschaftlichen Rat einholen.'
      },
      ko: {
        domain: 'macro',
        sectionTitle: '다량영양소 분배 및 영양소 대사 가이드',
        sectionSubtitle: '탄수화물·단백질·지방 비율이 체성분, 포만감, 대사율 및 운동 수행 능력에 미치는 영향입니다.',
        interpretationTitle: '식이성 발열효과(TEF), 포만감 및 영양소 체내 분배',
        interpretationText: '총 칼로리 균형이 체중 변화의 폭을 결정한다면, 다량영양소의 비율은 감량 체중이 체지방에서 나오는지 제지방 근육에서 빠져나가는지를 결정합니다. 단백질은 가장 높은 식이성 발열효과(TEF ~20%–30%)를 지녀 소화 과정에서 열량의 4분의 1가량이 소모되며 포만 호르몬(PYY, GLP-1) 분비를 촉진합니다. 탄수화물은 간과 근육의 글리코겐을 재합성하여 고강도 운동을 지원하고 근단백 분해를 억제합니다. 지방은 성호르몬 합성, 지용성 비타민(A, D, E, K) 흡수, 세포막 유지에 필수적입니다.',
        limitationsTitle: '식단 지속 가능성, 식품의 질 및 대사 민감도',
        limitationsText: '계산된 영양소별 그램(g) 목표는 과학적 기초 출발선입니다. 가공식품을 줄이고 통곡물과 채소 위주의 식단, 충분한 식이섬유(1,000 kcal당 최소 14g) 및 미량영양소 밀도를 확보해야 합니다. 또한 개인의 인슐린 감수성과 활동량에 따라 탄수화물 반응이 다르므로 2~4주간 체중 및 컨디션 추이를 살피며 섭취량을 조절하세요.',
        medicalNoticeTitle: '임상 및 영양 상담 안내',
        medicalNoticeText: '본 가이드라인은 건강한 성인을 위한 교육용 지침입니다. 만성 신장 질환, 간 질환, 대사 증후군 또는 당뇨병이 있는 경우 고단백 또는 케토제닉 식단을 시작하기 전 전문의 또는 임상영양사와 상담하십시오.'
      },
      hi: {
        domain: 'macro',
        sectionTitle: 'मैक्रोन्यूट्रिएंट वितरण एवं पोषण विभाजन दिशानिर्देश',
        sectionSubtitle: 'मैक्रोन्यूट्रिएंट अनुपात शरीर की संरचना, तृप्ति, चयापचय और फिटनेस प्रदर्शन को कैसे प्रभावित करते हैं।',
        interpretationTitle: 'भोजन का थर्मिक प्रभाव (TEF), तृप्ति एवं शारीरिक ईंधन विभाजन',
        interpretationText: 'यद्यपि कुल कैलोरी संतुलन समग्र वजन परिवर्तन को नियंत्रित करता है, लेकिन मैक्रोन्यूट्रिएंट अनुपात यह तय करते हैं कि वजन वसा से घट रहा है या मांसपेशियों से। प्रोटीन में भोजन का थर्मिक प्रभाव (TEF ~20%–30%) सबसे अधिक होता है, जिससे पाचन के दौरान इसकी लगभग एक चौथाई कैलोरी ऊष्मा के रूप में खर्च हो जाती है और भूख दबाने वाले हार्मोन (PYY, GLP-1) सक्रिय होते हैं। कार्बोहाइड्रेट उच्च तीव्रता वाले वर्कआउट के लिए मांसपेशियों में ग्लाइकोजन की पूर्ति करते हैं और मांसपेशियों को सुरक्षित रखते हैं। वसा हार्मोन संश्लेषण (टेस्टोस्टेरोन आदि), वसा में घुलनशील विटामिन (A, D, E, K) के अवशोषण और कोशिका स्वास्थ्य के लिए आवश्यक है।',
        limitationsTitle: 'आहार निरंतरता, भोजन की गुणवत्ता और व्यक्तिगत सहनशीलता',
        limitationsText: 'गणना किए गए ग्राम लक्ष्य एक वैज्ञानिक प्रारंभिक बिंदु हैं। पोषक तत्वों की गुणवत्ता अत्यंत महत्वपूर्ण है: संपूर्ण अप्रसंस्कृत खाद्य पदार्थों, पर्याप्त फाइबर (प्रति 1,000 kcal कम से कम 14 ग्राम) और सूक्ष्म पोषक तत्वों को प्राथमिकता दें। इसके अतिरिक्त, इंसुलिन संवेदनशीलता और वर्कआउट की मात्रा के आधार पर कार्बोहाइड्रेट की आवश्यकता भिन्न हो सकती है। बदलाव करने से पहले 2 से 4 सप्ताह तक प्रगति की निगरानी करें।',
        medicalNoticeTitle: 'चिकित्सीय एवं पोषण संबंधी सूचना',
        medicalNoticeText: 'यह दिशा-निर्देश स्वस्थ वयस्कों के लिए शैक्षिक संदर्भ हैं। क्रोनिक किडनी रोग, लीवर रोग या मधुमेह वाले व्यक्तियों को उच्च-प्रोटीन या कीटो आहार शुरू करने से पहले योग्य पोषण विशेषज्ञ या चिकित्सक से परामर्श करना चाहिए।'
      }
    },
    hydration: {
      en: {
        domain: 'hydration',
        sectionTitle: 'Hydration Physiology & Electrolyte Balance Guide',
        sectionSubtitle: 'How fluid turnover, sweat rates, sodium-potassium balance, and climate affect daily hydration needs.',
        interpretationTitle: 'Hydration Physiology, Electrolytes & Sweat Loss Science',
        interpretationText: 'Maintaining optimal fluid balance is critical for cellular metabolism, cardiovascular stroke volume, body temperature regulation, and renal filtration. Baseline water requirements (~30–35 mL per kg of body weight) satisfy standard metabolic turnover under temperate conditions. However, physical activity accelerates fluid loss through sweat, ranging from 0.5 to 2.0 Liters per hour depending on exercise intensity and environment. Sweat contains both water and essential electrolytes, predominantly sodium and chloride, with smaller concentrations of potassium and magnesium. Adequate sodium intake maintains plasma osmolality and stimulates thirst, preventing the dehydration-induced cardiovascular strain that elevates heart rate and perceived exertion.',
        limitationsTitle: 'Exercise Sweat Loss, Heat Stress & Hyponatremia (Overhydration)',
        limitationsText: 'Thirst is a delayed physiological indicator—by the time thirst is felt, 1% to 2% of body weight in fluids is often already lost, impairing aerobic endurance and cognitive vigilance. Check hydration proactively using the 8-level Armstrong Urine Color Scale: pale straw (levels 1–3) signals normal equilibrium, while amber or dark tea hues (levels 6–8) require immediate rehydration. Crucially, during prolonged endurance events (>4 hours in heat), consuming excessive plain water without sodium replacement risks Exercise-Associated Hyponatremia (EAH), a potentially dangerous condition where blood sodium levels fall too low. In endurance sessions, include electrolyte beverages.',
        medicalNoticeTitle: 'Clinical Hydration & Fluid Restriction Notice',
        medicalNoticeText: 'Standard fluid intake formulas assume normal kidney, heart, and liver function. Individuals diagnosed with congestive heart failure (CHF), chronic kidney disease (CKD), end-stage renal disease (ESRD), or those prescribed diuretic medications must strictly adhere to their nephrologist\'s or cardiologist\'s individualized fluid restriction guidelines.'
      },
      es: {
        domain: 'hydration',
        sectionTitle: 'Fisiología de la Hidratación y Equilibrio de Electrólitos',
        sectionSubtitle: 'Cómo el recambio hídrico, la tasa de sudoración, el sodio y el clima determinan las necesidades de líquidos.',
        interpretationTitle: 'Fisiología Hídrica, Electrólitos y Pérdida por Sudoración',
        interpretationText: 'Mantener un adecuado volumen hídrico es fundamental para la función cardiovascular, la termorregulación y la filtración renal. El requerimiento basal (~30–35 mL por kg de peso corporal) cubre el metabolismo estándar en condiciones templadas. Durante el ejercicio, la tasa de sudoración oscila entre 0,5 y 2,0 litros por hora. El sudor contiene agua y electrólitos esenciales, principalmente sodio y cloruro, junto a potasio y magnesio. El sodio preserva la osmolaridad plasmática y estimula la sed fisiológica, evitando la sobrecarga cardiovascular asociada a la deshidratación.',
        limitationsTitle: 'Estrés Térmico, Pérdida de Sudor e Hiponatremia por Dilución',
        limitationsText: 'La sensación de sed presenta un retraso biológico: al manifestarse, ya se ha perdido entre el 1% y el 2% del peso corporal, reduciendo el rendimiento físico y cognitivo. Supervise el estado de hidratación mediante la escala de color de orina de Armstrong (tonos pálidos niveles 1–3 reflejan hidratación óptima; ámbar niveles 6–8 exigen rehidratación inmediata). En esfuerzos prolongados (>4 horas en calor), consumir agua sin sodio puede provocar hiponatremia asociada al ejercicio (HAE). Añada soluciones isotónicas con electrólitos en entrenamientos extensos.',
        medicalNoticeTitle: 'Aviso Clínico de Restricción Hídrica',
        medicalNoticeText: 'Estas pautas presuponen una función renal y cardíaca normal. Pacientes con insuficiencia cardíaca congestiva, nefropatía crónica o bajo tratamiento con diuréticos deben seguir de forma estricta las restricciones de líquidos prescritas por su especialista médico.'
      },
      fr: {
        domain: 'hydration',
        sectionTitle: 'Physiologie de l’Hydratation et Équilibre Électrolytique',
        sectionSubtitle: 'Comment le renouvellement hydrique, la sudation, les électrolytes et le climat déterminent vos besoins quotidiens.',
        interpretationTitle: 'Bases Physiologiques de l’Hydratation et Pertes Sudorales',
        interpretationText: 'L’équilibre hydrique assure la volémie cardiovasculaire, la thermorégulation et la filtration rénale. Le besoin de base (~30 à 35 mL par kg de poids) compense le métabolisme de repos en climat tempéré. L’activité physique augmente les pertes sudorales entre 0,5 et 2,0 litres par heure. La sueur est composée d’eau et d’électrolytes majeurs, en particulier le sodium et le chlorure, avec du potassium et du magnésium. Le sodium maintient la pression osmotique plasmatique et prévient la dérive cardiovasculaire qui augmente la fatigue perçue.',
        limitationsTitle: 'Stress Thermique, Sudation à l’Effort et Hyponatrémie',
        limitationsText: 'La soif est un signal tardif qui apparaît souvent après une perte hydrique de 1 % à 2 % de la masse corporelle, altérant l’endurance et la vigilance. Évaluez votre état avec l’échelle colorimétrique urinaire d’Armstrong (jaune paille niveaux 1–3 = équilibre optimal ; ambré niveaux 6–8 = déshydratation nette). Lors d’efforts d’endurance de plus de 4 heures par forte chaleur, boire exclusivement de l’eau pure sans apport de sodium expose au risque d’hyponatrémie d’effort. Intégrez des boissons électrolytiques adaptées.',
        medicalNoticeTitle: 'Avertissement Médical et Restriction Hydrique',
        medicalNoticeText: 'Ces recommandations s’appliquent aux adultes ayant une fonction rénale et cardiaque saine. En cas d’insuffisance cardiaque ou d’insuffisance rénale chronique, ou sous traitement diurétique, respectez impérativement la prescription de restriction hydrique de votre cardiologue ou néphrologue.'
      },
      de: {
        domain: 'hydration',
        sectionTitle: 'Hydratationsphysiologie & Elektrolythaushalt',
        sectionSubtitle: 'Wie Flüssigkeitsumsatz, Schweißraten, Natrium-Kalium-Balance und Umgebungstemperaturen den Wasserbedarf steuern.',
        interpretationTitle: 'Wissenschaftliche Grundlagen zu Flüssigkeitsbedarf & Schweißverlust',
        interpretationText: 'Ein ausgeglichener Flüssigkeitshaushalt ist unabdingbar für Blutvolumen, Thermoregulation und Nierenfunktion. Der Ruhebedarf (~30–35 ml je kg Körpergewicht) sichert den Grundstoffwechsel unter gemäßigten Klimabedingungen. Körperliche Anstrengung erhöht den Flüssigkeitsverlust über Schweißbildung auf 0,5 bis 2,0 Liter pro Stunde. Schweiß enthält neben Wasser vor allem Natrium und Chlorid sowie geringere Mengen Kalium und Magnesium. Natrium stabilisiert die Plasma-Osmolalität und verhindert kardiovaskuläre Drift, die Herzfrequenz und Belastungsempfinden ansteigen lässt.',
        limitationsTitle: 'Hitzebelastung, Schweißverlust & Hyponatriämie (Überwässerung)',
        limitationsText: 'Das Durstgefühl setzt mit physiologischer Verzögerung ein – oft erst nach einem Flüssigkeitsverlust von 1 % bis 2 % des Körpergewichts, was Ausdauer und Konzentration mindert. Nutzen Sie zur Früherkennung die 8-stufige Armstrong-Urinfarbskala (helles Strohgelb Stufe 1–3 = optimal; Bernstein bis Teebraun Stufe 6–8 = akuter Rehydratationsbedarf). Bei extremen Ausdauerbelastungen (>4 Stunden bei Hitze) birgt das alleinige Trinken von reinem Wasser ohne Natriumzufuhr das Risiko einer belastungsassoziierten Hyponatriämie. Nutzen Sie elektrolythaltige Sportgetränke.',
        medicalNoticeTitle: 'Klinischer Hinweis zu Flüssigkeitsrestriktionen',
        medicalNoticeText: 'Diese Richtwerte setzen gesunde Nieren und ein gesundes Herz-Kreislauf-System voraus. Bei Herzinsuffizienz, chronischer Niereninsuffizienz oder Diuretika-Einnahme gelten streng ärztlich überwachte Flüssigkeitsbegrenzungen.'
      },
      ko: {
        domain: 'hydration',
        sectionTitle: '수분 생리학 및 전해질 균형 가이드',
        sectionSubtitle: '체내 수분 대사, 발한량, 나트륨·칼륨 균형 및 기후 환경이 일일 수분 요구량에 미치는 영향입니다.',
        interpretationTitle: '체내 수분 대사, 전해질 조절 및 발한 손실 원리',
        interpretationText: '적절한 체액량 유지는 혈액 순환, 심박출량, 체온 조절 및 신장 여과 기능의 핵심입니다. 기초 수분 요구량(체중 1kg당 약 30~35mL)은 온화한 기후에서 안정 시 대사를 충족합니다. 그러나 운동 시 땀 배출량은 강도와 환경에 따라 시간당 0.5 ~ 2.0리터에 달합니다. 땀에는 수분과 함께 나트륨, 염소, 칼륨, 마그네슘 등 필수 전해질이 함께 배출됩니다. 충분한 나트륨 섭취는 혈장 삼투압을 유지하고 탈수로 인한 심박수 급상승(심혈관 표류)을 억제합니다.',
        limitationsTitle: '열 스트레스, 발한 손실 및 운동성 저나트륨혈증(과수분)',
        limitationsText: '갈증 신호는 생리학적으로 지연되어 나타납니다. 갈증을 느낄 때는 이미 체중의 1% ~ 2%에 달하는 수분이 손실되어 유산소 능력과 집중력이 저하됩니다. 암스트롱 소변 색상 지표(연한 짚색 1~3단계는 적정, 호박색·갈색 6~8단계는 즉시 보충)를 통해 수분 상태를 점검하세요. 특히 4시간 이상의 장거리 지구력 운동 시 나트륨 보충 없이 맹물만 과다 섭취하면 운동성 저나트륨혈증(EAH) 위험이 발생하므로 전해질 음료를 병행해야 합니다.',
        medicalNoticeTitle: '임상 수분 제한 및 질환 주의사항',
        medicalNoticeText: '본 계산 수치는 신장과 심장 기능이 정상인 성인을 기준으로 합니다. 울혈성 심부전(CHF), 만성 신장 질환(CKD) 환자나 이뇨제를 복용 중인 분은 담당 전문의가 처방한 수분 제한 지침을 엄격히 준수해야 합니다.'
      },
      hi: {
        domain: 'hydration',
        sectionTitle: 'जलयोजन शरीरक्रिया विज्ञान एवं इलेक्ट्रोलाइट संतुलन गाइड',
        sectionSubtitle: 'शारीरिक जल स्तर, पसीने की दर, सोडियम-पोटेशियम संतुलन और जलवायु दैनिक पानी की आवश्यकता को कैसे प्रभावित करते हैं।',
        interpretationTitle: 'जलयोजन विज्ञान, इलेक्ट्रोलाइट्स एवं पसीने से द्रव की कमी',
        interpretationText: 'शरीर में पर्याप्त जल संतुलन बनाए रखना रक्त परिसंचरण, तापमान नियंत्रण और गुर्दे की कार्यप्रणाली के लिए अनिवार्य है। आधारभूत पानी की आवश्यकता (लगभग 30–35 मिली प्रति किग्रा वजन) सामान्य मौसम में चयापचय जरूरतों को पूरा करती है। शारीरिक व्यायाम के दौरान पसीने के माध्यम से प्रति घंटे 0.5 से 2.0 लीटर तक पानी की कमी हो सकती है। पसीने में सोडियम, क्लोराइड, पोटेशियम और मैग्नीशियम जैसे आवश्यक इलेक्ट्रोलाइट्स भी बाहर निकलते हैं। पर्याप्त सोडियम रक्त के परासरण दाब को बनाए रखता है और निर्जलीकरण से हृदय पर पड़ने वाले दबाव को रोकता है।',
        limitationsTitle: 'गर्मी का प्रभाव, पसीना और हाइपोनेट्रेमिया (अत्यधिक पानी पीने का जोखिम)',
        limitationsText: 'प्यास लगना एक विलंबित शारीरिक संकेत है—जब तक प्यास का अनुभव होता है, तब तक शरीर 1% से 2% तरल पदार्थ खो चुका होता है जिससे ऊर्जा और एकाग्रता घटती है। आर्मस्ट्रांग यूरिन कलर स्केल (हल्का पीला स्तर 1–3 सामान्य, गहरा भूरा स्तर 6–8 निर्जलीकरण) से अपने जलयोजन स्तर की जांच करें। 4 घंटे से अधिक समय तक चलने वाले लंबे खेलों में बिना सोडियम के केवल सादा पानी अधिक मात्रा में पीने से एक्सरसाइज-एसोसिएटेड हाइपोनेट्रेमिया (EAH) का खतरा हो सकता है। ऐसे समय में इलेक्ट्रोलाइट्स का उपयोग करें।',
        medicalNoticeTitle: 'चिकित्सीय द्रव प्रतिबंध एवं स्वास्थ्य सूचना',
        medicalNoticeText: 'यह गणना सामान्य गुर्दे और हृदय स्वास्थ्य वाले व्यक्तियों के लिए है। कंजेस्टिव हार्ट फेल्योर, क्रोनिक किडनी रोग या मूत्रवर्धक (diuretics) दवाएं लेने वाले रोगियों को डॉक्टर द्वारा निर्धारित तरल प्रतिबंध दिशानिर्देशों का कड़ाई से पालन करना चाहिए।'
      }
    },

    bmi: {
      en: {
        domain: 'bmi',
        sectionTitle: 'BMI Results & Health Guide',
        sectionSubtitle: 'How to interpret your BMI score and understand its screening limits.',
        interpretationTitle: 'Clinical Score Interpretation',
        interpretationText: 'A BMI between 18.5 and 24.9 is considered a healthy weight for adults by the World Health Organization (WHO) and CDC. A BMI between 25.0 and 29.9 falls in the overweight range. A score of 30.0 or higher falls into the obesity category. These numbers are general screening guidelines used to track health trends in large populations.',
        limitationsTitle: 'Key Limitations of BMI',
        limitationsText: 'BMI uses only your height and weight. It does not measure body fat directly or separate muscle from fat. Athletes with high muscle mass may score in the overweight range even with low body fat. In contrast, older adults who have lost muscle may have a normal BMI despite having excess body fat.',
        medicalNoticeTitle: 'Health Screening Notice',
        medicalNoticeText: 'BMI is a quick screening tool, not a medical diagnosis. Talk to your doctor for a complete health checkup, including blood pressure, blood sugar, and cholesterol tests.'
      },
      es: {
        domain: 'bmi',
        sectionTitle: 'Interpretación de Resultados y Límites de Salud',
        sectionSubtitle: 'Cómo interpretar la puntuación obtenida y comprender los límites del cribado poblacional.',
        interpretationTitle: 'Interpretación Clínica del Resultado',
        interpretationText: 'Un Índice de Masa Corporal entre 18.5 y 24.9 kg/m² constituye el intervalo de referencia estándar para adultos según la Organización Mundial de la Salud (OMS) y los CDC. Los valores de 25.0 a 29.9 kg/m² indican sobrepeso, y ≥ 30.0 kg/m² definen obesidad. Estas clasificaciones son herramientas estadísticas de salud pública, no diagnósticos individuales.',
        limitationsTitle: 'Limitaciones Fisiológicas Clave',
        limitationsText: 'El IMC utiliza únicamente el peso y la estatura, sin diferenciar entre masa magra muscular, densidad ósea y tejido adiposo. Por este motivo, personas atléticas pueden registrar valores de sobrepeso con baja grasa corporal, mientras que adultos mayores con sarcopenia pueden tener un IMC normal pero un exceso de grasa visceral oculta.',
        medicalNoticeTitle: 'Aviso de Orientación en Salud',
        medicalNoticeText: 'Esta herramienta proporciona cálculos educativos preliminares. Para evaluar su estado de salud integral, consulte a un profesional médico colegiado que examine su presión arterial, perfil lipídico y glucemia en ayunas.'
      },
      fr: {
        domain: 'bmi',
        sectionTitle: 'Interprétation des Résultats et Limites de Santé',
        sectionSubtitle: 'Comment analyser votre résultat et appréhender les seuils de dépistage épidémiologique.',
        interpretationTitle: 'Interprétation Clinique du Score',
        interpretationText: 'Un Indice de Masse Corporelle compris entre 18,5 et 24,9 kg/m² correspond à la norme de référence pour la population adulte selon l’OMS et les CDC. Les valeurs de 25,0 à 29,9 kg/m² indiquent un surpoids et celles ≥ 30,0 kg/m² définissent l’obésité. Ces fourchettes constituent des repères statistiques et non un bilan métabolique personnalisé.',
        limitationsTitle: 'Limites Physiologiques Essentielles',
        limitationsText: 'L’IMC repose uniquement sur le ratio masse/taille sans distinguer le muscle du tissu adipeux ni de la masse osseuse. Ainsi, un sportif musclé peut être classé en surpoids avec un taux de graisse faible, tandis qu’une personne âgée souffrant de sarcopénie peut présenter un IMC normal malgré un excès de graisse viscérale.',
        medicalNoticeTitle: 'Avis de Dépistage Santé',
        medicalNoticeText: 'Ce calculateur offre une estimation éducative. Pour un examen complet de votre santé métabolique, consultez un médecin qualifié (bilan lipidique, glycémie à jeun et tension artérielle).'
      },
      de: {
        domain: 'bmi',
        sectionTitle: 'Ergebnisinterpretation & Gesundheitliche Grenzen',
        sectionSubtitle: 'So ordnen Sie Ihren berechneten Wert ein und verstehen die Grenzen des Screenings.',
        interpretationTitle: 'Klinische Interpretation des Ergebnisses',
        interpretationText: 'Ein Body-Mass-Index von 18,5 bis 24,9 kg/m² bildet den internationalen Referenzbereich für Erwachsene nach Vorgaben der WHO und der CDC. Werte zwischen 25,0 und 29,9 kg/m² gelten als Übergewicht, Werte ab 30,0 kg/m² als Adipositas. Diese Stufen dienen der epidemiologischen Früherkennung, nicht der individuellen Diagnose.',
        limitationsTitle: 'Wesentliche Physiologische Einschränkungen',
        limitationsText: 'Der BMI erfasst lediglich das Verhältnis von Körpergewicht zu Körpergröße, ohne Muskelmasse, Knochendichte oder Fettgewebe separat zu messen. Gut trainierte Personen fallen dadurch oft in die Kategorie Übergewicht, während ältere Menschen mit altersbedingtem Muskelabbau (Sarkopenie) trotz erhöhtem viszeralem Fett einen normalen BMI aufweisen können.',
        medicalNoticeTitle: 'Gesundheitlicher Screening-Hinweis',
        medicalNoticeText: 'Dieses Werkzeug dient ausschließlich der gesundheitlichen Orientierung. Für eine fundierte Diagnose wenden Sie sich an einen Arzt zur Kontrolle von Blutdruck, Nüchternblutzucker und Lipidprofil.'
      },
      ko: {
        domain: 'bmi',
        sectionTitle: '산출 결과 해석 및 보건학적 한계점',
        sectionSubtitle: '계산된 지표의 보건학적 의미와 집단 선별 검사의 한계점을 안내합니다.',
        interpretationTitle: '측정 결과의 임상적 해석',
        interpretationText: '세계보건기구(WHO)와 질병통제예방센터(CDC)에 따르면 성인의 표준 정상 BMI 범위는 18.5 ~ 24.9 kg/m²입니다. 25.0 ~ 29.9 kg/m²는 과체중, 30.0 kg/m² 이상은 비만으로 분류됩니다. 이 수치는 대중 보건 통계용 기준선이며 개인의 대사 건강 상태를 단독으로 확정하지 않습니다.',
        limitationsTitle: '주요 생리학적 한계점',
        limitationsText: 'BMI는 총 체중과 신장만을 연산하므로 근육량, 골밀도, 체지방의 구성을 구분하지 못합니다. 근육질 체형의 운동선수는 체지방이 낮아도 과체중으로 판정될 수 있으며, 노화로 인한 근감소증(Sarcopenia)이 있는 경우 내장지방이 많아도 정상 체중으로 나타날 수 있습니다.',
        medicalNoticeTitle: '건강 선별 안내',
        medicalNoticeText: '본 도구는 교육용 참고 수치만을 제공합니다. 정확한 건강 상태 평가는 전문의와 상담하여 혈압, 공복 혈당, 지질 수치 등을 종합적으로 확인해야 합니다.'
      },
      hi: {
        domain: 'bmi',
        sectionTitle: 'परिणाम व्याख्या एवं स्वास्थ्य सीमाएं',
        sectionSubtitle: 'अपने प्राप्त स्कोर का अर्थ समझें और जनसंख्या स्क्रीनिंग की सीमाओं को जानें।',
        interpretationTitle: 'स्कोर की नैदानिक व्याख्या',
        interpretationText: 'विश्व स्वास्थ्य संगठन (WHO) और सीडीसी के अनुसार वयस्कों के लिए 18.5 से 24.9 kg/m² सामान्य संदर्भ सीमा है। 25.0 से 29.9 kg/m² अधिक वजन और 30.0 या अधिक मोटापे को दर्शाता है। ये श्रेणियां सार्वजनिक स्वास्थ्य स्क्रीनिंग के लिए हैं, व्यक्तिगत नैदानिक पुष्टि के लिए नहीं।',
        limitationsTitle: 'प्रमुख शारीरिक सीमाएं',
        limitationsText: 'बीएमआई केवल ऊंचाई और कुल वजन पर आधारित है। यह मांसपेशियों और वसा के बीच अंतर नहीं कर सकता। मांसपेशियों वाले एथलीट कम वसा के बावजूद अधिक वजन की श्रेणी में आ सकते हैं, जबकि बुजुर्ग व्यक्ति मांसपेशियों की कमी (सार्कोपेनिया) के कारण सामान्य बीएमआई पर भी अतिरिक्त आंतरिक वसा रख सकते हैं।',
        medicalNoticeTitle: 'स्वास्थ्य स्क्रीनिंग सूचना',
        medicalNoticeText: 'यह कैलकुलेटर केवल शैक्षिक स्क्रीनिंग संदर्भ प्रदान करता है। व्यक्तिगत स्वास्थ्य मूल्यांकन के लिए पंजीकृत चिकित्सक से परामर्श करें और रक्तचाप, ब्लड शुगर तथा लिपिड प्रोफाइल की जांच कराएं।'
      }
    },
    regional: {
      en: {
        domain: 'regional',
        sectionTitle: 'Regional Action Points & Population Specificity',
        sectionSubtitle: 'Distinguishing international WHO classifications from population-specific public-health intervention triggers.',
        interpretationTitle: 'WHO Asian Action Points (2004) & ICMR Guidelines (2009)',
        interpretationText: 'Epidemiological studies confirm that Asian and South Asian adults experience elevated risks of type 2 diabetes and cardiovascular disease at lower BMI levels. The WHO 2004 Expert Consultation identified 23.0 kg/m² (increased risk) and 27.5 kg/m² (high risk) as action points for national intervention policies, while preserving 18.5–24.9 kg/m² as the international standard. For Asian Indians, the ICMR consensus panel (Misra et al., JAPI 2009) recommends maintaining BMI between 18.5 and 22.9 kg/m².',
        limitationsTitle: 'Public-Health Triggers vs Individual Diagnosis',
        limitationsText: 'Population action points are public-health triggers designed for earlier dietary guidance and clinical surveillance—they are not universal individual diagnostic labels. Because of the "Thin-Fat Phenotype" (higher visceral fat with lower skeletal muscle), BMI must be interpreted alongside waist circumference (elevated risk at ≥ 90 cm in South Asian men, ≥ 80 cm in women).',
        medicalNoticeTitle: 'Cardiometabolic Screening Recommendation',
        medicalNoticeText: 'A regional BMI score between 18.5 and 22.9 kg/m² serves as a population reference window, not a personal guarantee of cardiovascular immunity. Routine clinical screening for glycated hemoglobin (HbA1c), fasting insulin, and blood lipids is recommended.'
      },
      es: {
        domain: 'regional',
        sectionTitle: 'Puntos de Acción Regionales y Especificidad Poblacional',
        sectionSubtitle: 'Diferenciación entre la clasificación internacional de la OMS y los umbrales de intervención regional.',
        interpretationTitle: 'Puntos de Acción de la OMS (2004) y Normas ICMR (2009)',
        interpretationText: 'La evidencia demuestra que los adultos asiáticos e indios presentan mayor riesgo de diabetes tipo 2 e hipertensión con valores de IMC menores. La consulta de expertos de la OMS (2004) estableció 23.0 kg/m² (riesgo incrementado) y 27.5 kg/m² (alto riesgo) como puntos de acción para políticas de salud pública, manteniendo 18.5–24.9 kg/m² como referencia global. Para India, el consenso del ICMR fija el rango saludable en 18.5–22.9 kg/m².',
        limitationsTitle: 'Umbrales de Intervención frente a Diagnóstico Clínico',
        limitationsText: 'Los puntos de acción son desencadenantes de salud pública para iniciar intervenciones preventivas, no etiquetas diagnósticas universales. Debido al fenotipo de grasa visceral acumulada (TOFI), el IMC debe complementarse con la circunferencia de cintura (riesgo a partir de ≥ 90 cm en hombres y ≥ 80 cm en mujeres).',
        medicalNoticeTitle: 'Recomendación de Cribado Clínico',
        medicalNoticeText: 'Tener un IMC de 18.5–22.9 kg/m² es una referencia orientativa y no sustituye la evaluación médica periódica de glucosa basal, colesterol y presión arterial.'
      },
      fr: {
        domain: 'regional',
        sectionTitle: 'Points d’Action Régionaux et Spécificités de Population',
        sectionSubtitle: 'Distinction entre la classification globale OMS et les seuils d’intervention régionaux.',
        interpretationTitle: 'Points d’Action OMS Asie (2004) et Consensus ICMR (2009)',
        interpretationText: 'Les recherches confirment que les risques cardiométaboliques apparaissent à un IMC plus bas chez les adultes asiatiques. La consultation d’experts de l’OMS (Lancet 2004) a identifié les seuils d’action de 23,0 kg/m² (risque accru) et 27,5 kg/m² (haut risque) pour guider les politiques nationales, tout en conservant 18,5–24,9 kg/m² comme norme mondiale. L’ICMR recommande une plage de 18,5–22,9 kg/m² pour l’Inde.',
        limitationsTitle: 'Seuils d’Alerte de Santé Publique vs Diagnostic Médical',
        limitationsText: 'Ces points d’action sont des indicateurs statistiques de prévention et non des diagnostics médicaux infaillibles. En raison d’une adiposité viscérale accrue à poids égal (phénotype TOFI), le tour de taille doit être mesuré en complément (risque dès ≥ 90 cm pour les hommes, ≥ 80 cm pour les femmes).',
        medicalNoticeTitle: 'Conseil de Bilan Médical',
        medicalNoticeText: 'Une valeur d’IMC située entre 18,5 et 22,9 kg/m² ne dispense pas d’un suivi médical régulier comprenant la mesure de la glycémie à jeun, de l’HbA1c et du bilan lipidique.'
      },
      de: {
        domain: 'regional',
        sectionTitle: 'Regionale Aktionspunkte & Populationsspezifische Einordnung',
        sectionSubtitle: 'Unterscheidung zwischen internationalem WHO-Standard und regionalen Interventionsschwellen.',
        interpretationTitle: 'WHO-Asien-Aktionspunkte (2004) & ICMR-Leitlinien (2009)',
        interpretationText: 'Studien belegen, dass asiatische Erwachsene bereits bei niedrigerem BMI erhöhte Risiken für Typ-2-Diabetes aufweisen. Die WHO-Expertenkonsultation (Lancet 2004) definierte 23,0 kg/m² (erhöhtes Risiko) und 27,5 kg/m² (hohes Risiko) als Aktionsschwellen für nationale Gesundheitsprogramme, behielt jedoch 18,5–24,9 kg/m² als weltweiten Standard bei. Das ICMR empfiehlt für Indien 18,5–22,9 kg/m².',
        limitationsTitle: 'Präventive Interventionsschwellen vs. Individuelle Diagnose',
        limitationsText: 'Aktionspunkte sind bevölkerungsbezogene Schwellenwerte zur frühzeitigen Lebensstilberatung und keine universellen klinischen Diagnosen. Wegen des häufigen Auftretens von vermehrtem viszeralem Bauchfett (TOFI-Phänotyp) sollte stets der Taillenumfang hinzugezogen werden (erhöht ab ≥ 90 cm bei Männern, ≥ 80 cm bei Frauen).',
        medicalNoticeTitle: 'Kardiometabolische Vorsorgeempfehlung',
        medicalNoticeText: 'Ein BMI von 18,5–22,9 kg/m² ist ein nützlicher Orientierungswert, schließt jedoch kardiometabolische Risiken nicht aus. Regelmäßige ärztliche Kontrollen von Blutzucker, HbA1c und Blutfettwerten bleiben unerlässlich.'
      },
      ko: {
        domain: 'regional',
        sectionTitle: '지역별 실행 분별점 및 인구 집단 특이성',
        sectionSubtitle: '국제 WHO 표준 분류와 지역별 공중보건 조기 개입 기준을 구별하여 설명합니다.',
        interpretationTitle: 'WHO 아시아 실행 분별점 (2004) 및 ICMR 가이드라인 (2009)',
        interpretationText: '아시아 성인은 서양인에 비해 상대적으로 낮은 BMI 수준에서도 인슐린 저항성 및 제2형 당뇨병 위험이 조기에 증가합니다. WHO 전문가 자문회의(Lancet 2004)는 국제 표준(18.5~24.9)을 유지하면서도 국가별 보건 개입을 위한 실행 분별점으로 23.0 kg/m²(위험 증가) 및 27.5 kg/m²(고위험)를 제시했습니다. 인도 ICMR 합의 지침은 18.5~22.9 kg/m²를 정상 기준으로 권고합니다.',
        limitationsTitle: '공중보건 조기 경고 기준 vs 개인 의학 진단',
        limitationsText: '이 분별점은 조기 식습관 개선과 검진을 촉진하기 위한 보건 행정상 기준선이며 단독 의학적 진단명이 아닙니다. 체중 대비 복부 내장 지방이 높은 체형 특성(마른 비만)을 반영하므로 허리둘레(남성 90cm 이상, 여성 80cm 이상 주의)를 함께 종합 판단해야 합니다.',
        medicalNoticeTitle: '심대사 정밀 검진 권고',
        medicalNoticeText: '지역 기준 18.5 ~ 22.9 kg/m² 범위 내에 있더라도 공복 혈당, 당화혈색소(HbA1c), 혈중 지질 등의 정기 혈액 검사를 통한 정밀 평가를 권장합니다.'
      },
      hi: {
        domain: 'regional',
        sectionTitle: 'क्षेत्रीय एक्शन पॉइंट एवं जनसंख्या विशिष्टता',
        sectionSubtitle: 'अंतरराष्ट्रीय डब्ल्यूएचओ वर्गीकरण और क्षेत्रीय सार्वजनिक स्वास्थ्य हस्तक्षेप बिंदुओं का अंतर।',
        interpretationTitle: 'डब्ल्यूएचओ एशियाई एक्शन पॉइंट (2004) और आईसीएमआर मानक (2009)',
        interpretationText: 'अध्ययनों से सिद्ध हुआ है कि एशियाई वयस्कों में कम बीएमआई स्तर पर भी मधुमेह और हृदय रोग का खतरा बढ़ जाता है। डब्ल्यूएचओ विशेषज्ञ परामर्श (2004) ने 23.0 kg/m² (बढ़ा हुआ जोखिम) और 27.5 kg/m² (उच्च जोखिम) को सार्वजनिक स्वास्थ्य नीतियों के लिए एक्शन पॉइंट माना, जबकि अंतरराष्ट्रीय मानक 18.5–24.9 बना रहा। भारतीयों के लिए आईसीएमआर 18.5–22.9 kg/m² को सामान्य वजन मानता है।',
        limitationsTitle: 'जनसंख्या एक्शन पॉइंट बनाम व्यक्तिगत निदान',
        limitationsText: 'ये एक्शन पॉइंट जीवनशैली में समय रहते सुधार के लिए बनाए गए सार्वजनिक स्वास्थ्य संकेत हैं, सार्वभौमिक नैदानिक लेबल नहीं। आंतरिक पेट की चर्बी (थिन-फैट फेनोटाइप) के कारण बीएमआई के साथ कमर की माप (पुरुष ≥ 90 सेमी, महिला ≥ 80 सेमी) की जांच भी आवश्यक है।',
        medicalNoticeTitle: 'नैदानिक जांच परामर्श',
        medicalNoticeText: '18.5 से 22.9 kg/m² का बीएमआई स्कोर एक शैक्षिक संदर्भ है। सटीक स्वास्थ्य स्थिति के लिए डॉक्टर से रक्तचाप, ब्लड शुगर और लिपिड प्रोफाइल की नियमित जांच कराएं।'
      }
    },
    calorieDeficit: {
      en: {
        domain: 'calorieDeficit',
        sectionTitle: 'Caloric Deficit Physiology & Fat Loss Guide',
        sectionSubtitle: 'Dynamic energy balance, adaptive thermogenesis, and safe fat reduction rates.',
        interpretationTitle: 'The 3,500 kcal Rule vs. Kevin Hall Dynamic Metabolic Model',
        interpretationText: 'Historical dietetics relied on the Wishnofsky rule, assuming a cumulative 3,500 kcal deficit invariably yields one pound (0.45 kg) of fat loss linearly. However, NIH mathematical modeling spearheaded by Dr. Kevin Hall demonstrates that human metabolism is dynamic. As body mass declines, resting energy expenditure and non-exercise activity thermogenesis (NEAT) involuntarily drop (adaptive thermogenesis). To achieve predictable, steady progress, a moderate deficit of 15% to 25% below TDEE (typically 300 to 500 kcal/day) is optimal. This preserves lean muscle mass, maintains healthy leptin and thyroid hormone signaling, and avoids severe metabolic plateaus.',
        limitationsTitle: 'Adaptive Thermogenesis, Caloric Tracking Variance & Lean Mass Retention',
        limitationsText: 'Calculated targets assume precise dietary adherence. In real life, unmeasured cooking oils, sauces, and temporary water retention (due to cortisol or sodium fluctuations) can obscure fat loss on the scale for several weeks. Crucially, crash diets with severe deficits (>1,000 kcal/day) trigger muscle catabolism and metabolic downregulation. To protect lean mass, always pair your deficit with resistance training and elevated protein intake (1.6 to 2.2 g/kg).',
        medicalNoticeTitle: 'Biological Safety Floors & Nutritional Precaution',
        medicalNoticeText: 'Daily calorie intake should not drop below biological safety thresholds (generally 1,200 kcal/day for adult females and 1,500 kcal/day for adult males) without physician supervision, to prevent gallstone formation, electrolyte imbalances, and micronutrient deficiencies. Individuals with a history of eating disorders, pregnant individuals, or those with endocrine conditions must consult a licensed medical provider or registered dietitian before initiating an energy deficit.'
      },
      es: {
        domain: 'calorieDeficit',
        sectionTitle: 'Fisiología del Déficit Calórico y Pérdida de Grasa',
        sectionSubtitle: 'Balance energético dinámico, termogénesis adaptativa y ritmos seguros de pérdida de grasa.',
        interpretationTitle: 'La Regla de 3,500 kcal vs. el Modelo Dinámico de Kevin Hall',
        interpretationText: 'La dietética tradicional se basó en la regla de Wishnofsky, asumiendo que un déficit acumulado de 3,500 kcal genera invariablemente 0.45 kg (1 lb) de pérdida de grasa de forma lineal. No obstante, los modelos dinámicos del NIH dirigidos por el Dr. Kevin Hall demuestran que el metabolismo humano es adaptable. A medida que disminuye el peso corporal, el gasto basal y la actividad involuntaria (NEAT) descienden (termogénesis adaptativa). Para un progreso continuo y seguro, un déficit moderado del 15% al 25% respecto al TDEE (300 a 500 kcal/día) es idóneo para preservar masa muscular y hormonas tiroideas activas.',
        limitationsTitle: 'Termogénesis Adaptativa, Desviación en el Registro y Retención Muscular',
        limitationsText: 'Las estimaciones matemáticas asumen un cumplimiento exacto. En la práctica diaria, calorías ocultas en aderezos y la retención hídrica por cortisol o sodio pueden disimular la pérdida de grasa en la báscula durante semanas. Las restricciones extremas (>1,000 kcal/día) provocan catabolismo muscular. Proteja su masa libre de grasa combinando el déficit con entrenamiento de fuerza y consumo óptimo de proteína (1.6 a 2.2 g/kg).',
        medicalNoticeTitle: 'Límites Biológicos de Seguridad y Precaución Nutricional',
        medicalNoticeText: 'La ingesta energética nunca debe descender por debajo de los umbrales fisiológicos de seguridad (generalmente 1,200 kcal/día en mujeres y 1,500 kcal/día en hombres) sin monitorización médica, para evitar deficiencias de micronutrientes y litiasis biliar. Personas con antecedentes de trastornos alimentarios o patologías endocrinas deben consultar con un profesional cualificado.'
      },
      fr: {
        domain: 'calorieDeficit',
        sectionTitle: 'Physiologie du Déficit Calorique et Perte de Masse Grasse',
        sectionSubtitle: 'Bilan énergétique dynamique, thermogenèse adaptative et rythmes de perte sains.',
        interpretationTitle: 'La Règle des 3 500 kcal vs Modèle Dynamique de Kevin Hall',
        interpretationText: 'La diététique conventionnelle s’est longtemps appuyée sur la règle de Wishnofsky, affirmant qu’un déficit de 3 500 kcal induisait la perte linéaire de 0,45 kg de graisse. Or, les recherches biomathématiques du NIH menées par le Dr Kevin Hall prouvent que l’organisme s’adapte dynamiquement. Avec la réduction pondérale, le métabolisme de repos et la dépense spontanée hors sport (NEAT) diminuent (thermogenèse adaptative). Un déficit énergétique modéré de 15 % à 25 % sous la DEJ (300 à 500 kcal/jour) offre le meilleur compromis pour perdre du tissu adipeux tout en préservant le tissu musculaire et la fonction thyroïdienne.',
        limitationsTitle: 'Thermogenèse Adaptative, Marge d’Erreur et Préservation Musculaire',
        limitationsText: 'Les prévisions supposent une traçabilité alimentaire infaillible. En réalité, les matières grasses invisibles et la rétention d’eau réactionnelle (cortisol) peuvent masquer l’évolution sur la balance pendant plusieurs semaines. Les restrictions agressives (> 1 000 kcal/jour) majorent la dégradation musculaire. Associez obligatoirement le déficit à des exercices de musculation et une ration protéique renforcée (1,6 à 2,2 g/kg).',
        medicalNoticeTitle: 'Seuils Biologiques Minimaux et Précautions Médicales',
        medicalNoticeText: 'L’apport journalier ne doit pas chuter sous les planchers de sécurité physiologique (1 200 kcal/jour pour les femmes et 1 500 kcal/jour pour les hommes) sans encadrement médical, au risque de provoquer des carences aiguës ou des calculs biliaires. Les personnes avec antécédents de troubles des conduites alimentaires doivent consulter un médecin spécialisé.'
      },
      de: {
        domain: 'calorieDeficit',
        sectionTitle: 'Physiologie des Kaloriendefizits & Fettabbau-Leitfaden',
        sectionSubtitle: 'Dynamische Energiebilanz, adaptive Thermogenese und sichere Fettabbau-Raten.',
        interpretationTitle: 'Die 3.500-kcal-Regel vs. Dynamisches Stoffwechselmodell nach Kevin Hall',
        interpretationText: 'Die traditionelle Ernährungslehre postulierte nach der Wishnofsky-Regel, dass 3.500 kcal Einsparung exakt 0,45 kg Fettabbau bewirken. Computermodelle des NIH unter Leitung von Dr. Kevin Hall widerlegen jedoch eine starre Linearität: Bei Gewichtsverlust sinken Ruheumsatz und die unbewusste Alltagsbewegung (NEAT) automatisch ab (adaptive Thermogenese). Ein moderates Defizit von 15 % bis 25 % unterhalb des Gesamtenergiebedarfs (300 bis 500 kcal/Tag) gilt als physiologisch ideal, um gezielt Fett zu verbrennen und den Abbau von Skelettmuskulatur zu minimieren.',
        limitationsTitle: 'Adaptive Thermogenese, Tracking-Toleranzen & Muskelschutz',
        limitationsText: 'Modellrechnungen setzen eine lückenlose Nährwertprotokollierung voraus. Versteckte Fette und stressbedingte Wassereinlagerungen (Cortisol) täuschen auf der Waage häufig wochenlange Plateaus vor. Ein Übermaß an Kalorienrestriktion (>1.000 kcal/Tag) forciert den Verlust von Muskelsubstanz. Um fettfreie Masse zu sichern, muss jedes Energiedefizit von Krafttraining und einer gezielten Proteinzufuhr (1,6 bis 2,2 g/kg) begleitet werden.',
        medicalNoticeTitle: 'Biologische Mindestgrenzen & Medizinische Hinweise',
        medicalNoticeText: 'Die tägliche Nahrungszufuhr sollte ohne ärztliche Aufsicht niemals unter die physiologischen Sicherheitsgrenzen (1.200 kcal/Tag für Frauen, 1.500 kcal/Tag für Männer) sinken, um Gallensteinbildung und Mangelerscheinungen abzuwenden. Bei Schilddrüsenerkrankungen oder Essstörungen ist eine fachärztliche oder ernährungstherapeutische Betreuung zwingend ratsam.'
      },
      ko: {
        domain: 'calorieDeficit',
        sectionTitle: '칼로리 적자 대사 생리학 및 체지방 감량 가이드',
        sectionSubtitle: '동적 에너지 균형, 적응형 열발생(대사 저하), 안전한 주간 체지방 감량 기준.',
        interpretationTitle: '전통적 3,500 kcal 법칙 대 케빈 홀(NIH) 동적 대사 모델',
        interpretationText: '전통적인 칼로리 이론은 3,500 kcal 적자가 누적되면 정확히 1파운드(0.45 kg)의 지방이 감량된다고 보았습니다. 그러나 미국 국립보건원(NIH) 케빈 홀 박사의 수학적 대사 모델에 따르면 체중이 감소함에 따라 인체는 기초대사량과 비운동성 활동 열발생(NEAT)을 무의식적으로 낮추는 적응형 열발생을 일으킵니다. 따라서 유지 칼로리(TDEE) 대비 15~25% 수준의 절제된 적자(하루 300~500 kcal)를 설정하는 것이 근육량 보존과 갑상선 호르몬 안정성에 가장 효과적입니다.',
        limitationsTitle: '적응형 대사 저하, 식단 기록 오차 및 근육량 보존 전략',
        limitationsText: '이론상 수치는 완벽한 식단 준수를 전제합니다. 실제로는 조리유 누락 및 나트륨·코르티솔 분비에 따른 수분 저류로 인해 2~3주간 체중계 눈금이 정체될 수 있습니다. 하루 1,000 kcal 이상의 극단적 결핍은 심각한 근손실을 유발하므로, 반드시 규칙적인 저항성 근력 운동과 충분한 단백질 섭취(1.6~2.2 g/kg)를 병행해야 합니다.',
        medicalNoticeTitle: '생물학적 최소 섭취 하한선 및 임상 안전 공지',
        medicalNoticeText: '담석증 및 미량 영양소 결핍을 예방하기 위해 의학적 감독 없이 생물학적 최저 안전 하한선(성인 여성 1,200 kcal/일, 성인 남성 1,500 kcal/일) 이하로 식단을 제한해서는 안 됩니다. 섭식장애 병력자, 임산부 및 내분비 질환자는 감량 전 전문의 또는 임상영양사와 상의해야 합니다.'
      },
      hi: {
        domain: 'calorieDeficit',
        sectionTitle: 'कैलोरी घाटा शरीर विज्ञान एवं वसा हानि गाइड',
        sectionSubtitle: 'गतिशील ऊर्जा संतुलन, अनुकूलक थर्मोजेनेसिस और सुरक्षित वसा हानि दरें।',
        interpretationTitle: 'पारंपरिक 3,500 कैलोरी नियम बनाम केविन हॉल गतिशील चयापचय मॉडल',
        interpretationText: 'पारंपरिक पोषण विज्ञान विशोनोफ़्स्की नियम पर निर्भर था, जिसके अनुसार 3,500 कैलोरी का कुल घाटा सीधे 1 पाउंड (0.45 किग्रा) वसा कम करता है। हालांकि, अमेरिकी स्वास्थ्य संस्थान (NIH) के डॉ. केविन हॉल के गतिशील गणितीय मॉडल दर्शाते हैं कि वजन घटने के साथ शरीर का बेसल चयापचय और गैर-व्यायाम गतिविधि व्यय (NEAT) स्वाभाविक रूप से धीमा हो जाता है (अनुकूलक थर्मोजेनेसिस)। निरंतर प्रगति के लिए मेंटेनेंस टीडीईई से 15% से 25% (लगभग 300 से 500 कैलोरी/दिन) का मध्यम घाटा सबसे प्रभावी है, जो मांसपेशियों की रक्षा करता है और चयापचय को स्थिर रखता है।',
        limitationsTitle: 'अनुकूलक थर्मोजेनेसिस, ट्रैकिंग भिन्नता और मांसपेशियों की सुरक्षा',
        limitationsText: 'गणना किए गए लक्ष्य सटीक आहार ट्रैकिंग पर निर्भर करते हैं। वास्तविक जीवन में खाना पकाने के तेल या सोडियम और तनाव (कोर्टिसोल) के कारण पानी रुकने से वजन में बदलाव 2 से 3 सप्ताह तक छिप सकता है। प्रतिदिन 1,000 से अधिक कैलोरी का अत्यधिक घाटा मांसपेशियों के नुकसान का कारण बनता है। मांसपेशियों की सुरक्षा के लिए घाटे के साथ स्ट्रेंth ट्रेनिंग और पर्याप्त प्रोटीन (1.6 से 2.2 ग्राम/किग्रा) का सेवन अनिवार्य है।',
        medicalNoticeTitle: 'जैविक सुरक्षा सीमा एवं चिकित्सकीय परामर्श',
        medicalNoticeText: 'पोषक तत्वों की कमी और पित्त पथरी के जोखिम से बचने के लिए डॉक्टर की देखरेख के बिना दैनिक सेवन को न्यूनतम जैविक सुरक्षा सीमा (महिलाओं के लिए 1,200 कैलोरी/दिन और पुरुषों के लिए 1,500 कैलोरी/दिन) से नीचे नहीं ले जाना चाहिए। गर्भवती महिलाओं या ईटिंग डिसऑर्डर के इतिहास वाले व्यक्तियों को आहार शुरू करने से पहले डॉक्टर से परामर्श लेना चाहिए।'
      }
    },
    lbm: {
      en: {
        domain: 'lbm',
        sectionTitle: 'Lean Body Mass (LBM) & Fat-Free Tissue Guide',
        sectionSubtitle: 'Boer, James, and Hume predictive equations, metabolic rate, and muscle tracking.',
        interpretationTitle: 'What is Lean Body Mass & Why Does it Drive Metabolism?',
        interpretationText: 'Lean Body Mass (LBM), often referred to interchangeably with Fat-Free Mass (FFM), represents your total body weight minus storage adipose tissue. It comprises skeletal muscle, bone minerals, vital internal organs (heart, liver, kidneys, brain), and extracellular fluid. While standard BMI treats every kilogram of scale weight identically, LBM is the primary biological driver of your Basal Metabolic Rate (BMR)—each kilogram of active skeletal muscle and vital organ tissue burns substantially more energy at rest than fat tissue. Tracking LBM across training programs or caloric deficits confirms that weight loss reflects genuine fat reduction rather than detrimental muscle catabolism.',
        limitationsTitle: 'Boer vs. James vs. Hume Formulas & Hydration Fluctuations',
        limitationsText: 'Statistical equations (Boer 1984, James 1976, Hume 1966) estimate LBM using population regression models based on height, weight, and biological sex. While fast, accessible, and non-invasive, these formulas can underestimate lean mass in competitive bodybuilders or individuals with heavy bone density. Furthermore, acute glycogen depletion, high sodium intake, or transient dehydration alter cellular fluid volumes, temporarily skewing mathematical estimates. For the most reliable trends, evaluate measurements consistently under identical morning conditions.',
        medicalNoticeTitle: 'Clinical Evaluation & Sarcopenia Screening Notice',
        medicalNoticeText: 'Calculated LBM provides an educational fitness estimate. For formal medical diagnosis of sarcopenia, muscle-wasting disorders, or cachexia in clinical settings, healthcare providers use dual-energy X-ray absorptiometry (DEXA), bioelectrical impedance spectroscopy (BIS), or magnetic resonance imaging (MRI).'
      },
      es: {
        domain: 'lbm',
        sectionTitle: 'Guía de Masa Corporal Magra (LBM) y Tejido Libre de Grasa',
        sectionSubtitle: 'Ecuaciones predictivas de Boer, James y Hume, gasto metabólico y control muscular.',
        interpretationTitle: '¿Qué es la Masa Corporal Magra y Por Qué Impulsa el Metabolismo?',
        interpretationText: 'La Masa Corporal Magra (LBM), o Masa Libre de Grasa (FFM), representa el peso corporal total tras restar el tejido adiposo de reserva. Incluye masa muscular esquelética, contenido mineral óseo, órganos vitales y agua corporal. Mientras que el IMC estándar trata todos los kilogramos de peso por igual, el LBM es el principal motor biológico de la Tasa Metabólica Basal (TMB). Monitorizar el LBM en fases de déficit calórico confirma que la pérdida de peso proviene de grasa subcutánea y visceral y no de la masa muscular.',
        limitationsTitle: 'Fórmulas de Boer, James y Hume y Fluctuaciones de Hidratación',
        limitationsText: 'Las ecuaciones antropométricas (Boer 1984, James 1976, Hume 1966) estiman el LBM mediante regresiones estadísticas basadas en altura, peso y sexo. Si bien son prácticas y accesibles, pueden subestimar la masa muscular en culturistas con gran hipertrofia o complexión ósea muy densa. Además, fluctuaciones en la hidratación o depleción de glucógeno alteran temporalmente los resultados. Evalúe sus datos siempre en ayunas y a la misma hora.',
        medicalNoticeTitle: 'Aviso sobre Evaluación Clínica y Detección de Sarcopenia',
        medicalNoticeText: 'Los valores de LBM ofrecen una estimación orientativa para fitness y acondicionamiento. Para diagnósticos clínicos de sarcopenia o desnutrición proteica, los profesionales sanitarios emplean densitometría DEXA, espectroscopía de bioimpedancia o resonancia magnética.'
      },
      fr: {
        domain: 'lbm',
        sectionTitle: 'Guide de la Masse Corporelle Maigre (LBM) et Tissu Aqueux',
        sectionSubtitle: 'Équations de Boer, James et Hume, dépense métabolique et suivi musculaire.',
        interpretationTitle: 'Qu’est-ce que la Masse Maigre et Pourquoi Stimule-t-elle le Métabolisme ?',
        interpretationText: 'La Masse Corporelle Maigre (LBM), ou Masse Non Grasse (FFM), désigne la masse totale du corps déduction faite des réserves de tissu adipeux. Elle englobe les muscles squelettiques, la charpente minérale osseuse, les organes vitaux et l’eau corporelle. Contrairement à l’IMC qui assimile tous les kilos sans distinction, la masse maigre constitue le principal moteur du métabolisme de base (MB). Le suivi du LBM permet de vérifier qu\'une perte de poids résulte bien d\'un déstockage lipidique et non d\'une fonte musculaire délétère.',
        limitationsTitle: 'Équations de Boer, James et Hume et Fluctuations Hydriques',
        limitationsText: 'Les équations prédictives (Boer 1984, James 1976, Hume 1966) estiment la masse maigre à partir de régressions statistiques combinant taille, poids et profil biologique. Très accessibles, elles peuvent sous-estimer la masse maigre chez les athlètes très musclés. De plus, la déshydratation temporaire ou la déplétion en glycogène influencent le volume hydrique et faussent temporairement le calcul mathématique. Effectuez vos pesées de contrôle le matin à jeun.',
        medicalNoticeTitle: 'Avis Médical et Dépistage de la Sarcopénie',
        medicalNoticeText: 'Les estimations de LBM ont une vocation éducative et sportive. Pour le diagnostic clinique de sarcopénie ou de dénutrition, les praticiens de santé ont recours à l\'ostéodensitométrie DEXA, à la bio-impédancemétrie médicale ou à l\'IRM.'
      },
      de: {
        domain: 'lbm',
        sectionTitle: 'Leitfaden zur fettfreien Körpermasse (LBM)',
        sectionSubtitle: 'Prädiktive Formeln nach Boer, James und Hume, Grundumsatz und Muskelschutz.',
        interpretationTitle: 'Was ist fettfreie Masse (LBM) und warum steuert sie den Grundumsatz?',
        interpretationText: 'Die fettfreie Körpermasse (LBM bzw. FFM) bezeichnet das Gesamtgewicht abzüglich des speichernden Fettgewebes. Sie setzt sich aus Skelettmuskulatur, Knochenmineralien, inneren Organen und Körperwasser zusammen. Während der Standard-BMI jedes Kilogramm gleich bewertet, ist die fettfreie Masse der entscheidende physiologische Motor des Grundumsatzes (BMR). Die Kontrolle der LBM stellt sicher, dass Gewichtsreduktionen auf den Abbau von Fettgewebe und nicht auf den Verlust stoffwechselaktiver Muskelmasse zurückzuführen sind.',
        limitationsTitle: 'Formeln nach Boer, James und Hume & Hydratationsschwankungen',
        limitationsText: 'Anthropometrische Regressionsformeln (Boer 1984, James 1976, Hume 1966) schätzen die fettfreie Masse auf Basis von Größe, Gewicht und Geschlecht. Bei Leistungssportlern mit außergewöhnlicher Muskelhypertrophie unterschätzen diese Formeln mitunter die tatsächliche Magermasse. Ebenso können Schwankungen im Wasserhaushalt und der Glykogenspeicher das rechnerische Ergebnis kurzfristig beeinflussen. Messen Sie stets unter identischen Bedingungen am Morgen.',
        medicalNoticeTitle: 'Klinischer Hinweis & Sarkopenie-Diagnostik',
        medicalNoticeText: 'Die berechnete fettfreie Masse dient als Fitness-Richtschnur. Zur medizinischen Diagnostik von Sarkopenie, Kachexie oder Muskeldystrophie verwenden Fachärzte Goldstandard-Methoden wie DEXA-Ganzkörperscans oder die Magnetresonanztomographie (MRT).'
      },
      ko: {
        domain: 'lbm',
        sectionTitle: '제지방량(LBM) 및 체조직 분석 임상 가이드',
        sectionSubtitle: 'Boer, James, Hume 예측 공식, 기초대사량 연계 및 근육량 보존 전략.',
        interpretationTitle: '제지방량(LBM)의 정의와 대사율을 결정하는 생리학적 이유',
        interpretationText: '제지방량(LBM)은 전체 체중에서 저장 지방(체지방)을 제외한 모든 신체 조직(골격근, 뼈 미네랄, 주요 장기 및 세포 수분)의 총합을 의미합니다. 기존 BMI는 체중계에 찍힌 모든 무게를 동일하게 취급하지만, 제지방량은 기초대사량(BMR)을 결정하는 핵심 생물학적 지표입니다. 다이어트나 운동 프로그램 중 LBM을 추적하면 체중 감량이 소중한 근육 손실 없이 순수 체지방 위주로 진행되는지 정확히 검증할 수 있습니다.',
        limitationsTitle: 'Boer, James, Hume 공식 간 차이 및 체내 수분 변동의 영향',
        limitationsText: '통계적 추정 공식(Boer 1984, James 1976, Hume 1966)은 신장, 체중, 성별을 조합한 인구 회귀 모델을 기반으로 합니다. 일상적인 추적에는 매우 유용하지만, 근육 발달이 극대화된 보디빌더나 골밀도가 높은 운동선수는 실제 제지방량이 과소평가될 수 있습니다. 또한 글리코겐 고갈이나 체내 수분 저류에 따라 단기적 오차가 발생할 수 있으므로, 항상 기상 직후 동일한 조건에서 측정 추이를 확인해야 합니다.',
        medicalNoticeTitle: '임상 진단 및 근감소증(Sarcopenia) 평가 안내',
        medicalNoticeText: '산출된 제지방량 수치는 피트니스 관리를 위한 교육용 추정치입니다. 노인성 근감소증(Sarcopenia), 악액질 또는 질환성 근육 소모의 정밀한 임상 진단을 위해서는 병원에서 DEXA(이중에너지 X선 흡수계측법) 스캔이나 정밀 체성분 분석을 받아야 합니다.'
      },
      hi: {
        domain: 'lbm',
        sectionTitle: 'लीन बॉडी मास (LBM) एवं वसा रहित द्रव्यमान गाइड',
        sectionSubtitle: 'बोअर, जेम्स और ह्यूम समीकरण, चयापचय दर और मांसपेशियों की ट्रैकिंग।',
        interpretationTitle: 'लीन बॉडी मास (LBM) क्या है और यह चयापचय को क्यों बढ़ाता है?',
        interpretationText: 'लीन बॉडी मास (LBM) शरीर के कुल वजन में से अतिरिक्त वसा को घटाने के बाद बचा हुआ द्रव्यमान है। इसमें कंकाल की मांसपेशियां, हड्डियां, आंतरिक अंग और पानी शामिल हैं। पारंपरिक बीएमआई हर वजन को एक जैसा मानता है, जबकि LBM आपके बेसल मेटाबोलिक दर (BMR) का मुख्य निर्धारक है। वजन घटाने के दौरान LBM ट्रैक करने से यह पक्का होता है कि वजन वसा से कम हो रहा है, मांसपेशियों से नहीं।',
        limitationsTitle: 'बोअर, जेम्स और ह्यूम सूत्र और जलयोजन (हाइड्रेशन) में बदलाव',
        limitationsText: 'सांख्यिकीय सूत्र (बोअर 1984, जेम्स 1976, ह्यूम 1966) ऊंचाई, वजन और लिंग के आधार पर LBM का अनुमान लगाते हैं। यह रोजमर्रा की फिटनेस के लिए बहुत उपयोगी हैं, लेकिन अत्यधिक मांसपेशियों वाले बॉडीबिल्डर्स में यह वास्तविक लीन मास को थोड़ा कम आंक सकते हैं। पानी की कमी या नमक के कारण वजन में आए तात्कालिक बदलाव भी गणना को प्रभावित कर सकते हैं। सटीक रुझान के लिए हमेशा सुबह खाली पेट मापें।',
        medicalNoticeTitle: 'चिकित्सीय मूल्यांकन एवं सार्कोपेनिया सूचना',
        medicalNoticeText: 'यह गणना की गई LBM फिटनेस मार्गदर्शन के लिए एक अनुमान है। सार्कोपेनिया (मांसपेशियों के क्षय) या कुपोषण के औपचारिक चिकित्सीय निदान के लिए डॉक्टरों द्वारा DEXA स्कैन या एमआरआई जैसी आधुनिक तकनीकों का उपयोग किया जाता है।'
      }
    },
    idealWeight: {
      en: {
        domain: 'idealWeight',
        sectionTitle: 'Ideal Body Weight (IBW) Clinical Guide',
        sectionSubtitle: 'Medical formula origins, pharmacological dosing, and body frame variance.',
        interpretationTitle: 'Pharmacokinetic Origins & Why IBW is Not an Aesthetic Goal',
        interpretationText: 'The primary formulas for Ideal Body Weight—Devine (1974), Robinson (1983), Miller (1983), and Hamwi (1964)—were not developed for personal cosmetic targets. Dr. Ben J. Devine introduced his equation in clinical pharmacokinetics to calibrate therapeutic drug clearances (such as theophylline, aminoglycosides, and anesthetic agents) that distribute selectively into lean fat-free mass rather than adipose tissue. For general health assessment, IBW serves as a baseline reference point. When compared against the World Health Organization healthy BMI range (18.5 to 24.9 kg/m²), IBW typically aligns near a BMI of 21.5 to 23.0 kg/m² for average-framed adults.',
        limitationsTitle: 'Skeletal Frame Size, Muscular Hypertrophy & Dosing Adjustments',
        limitationsText: 'Standard IBW equations assume an average skeletal frame and typical body composition. People with small skeletal frames naturally register healthy weights 5% to 10% below formula baselines, while broad-framed individuals require 5% to 10% higher ranges. Furthermore, athletes with high lean muscle mass will exceed IBW targets without excess adiposity. In clinical medicine for patients with significant obesity, physicians calculate Adjusted Body Weight (AdjBW = IBW + 0.4 × [Actual Weight - IBW]) to prevent dangerous medication under- or overdosing.',
        medicalNoticeTitle: 'Clinical Application & Pharmacotherapy Notice',
        medicalNoticeText: 'Ideal Body Weight figures provided by this calculator are educational benchmarks and should not be used for direct clinical self-prescription or critical hospital dosing calculations. Drug regimens, ventilator settings, and nutritional support should always be calibrated by licensed clinicians and hospital pharmacists based on comprehensive diagnostic evaluations.'
      },
      es: {
        domain: 'idealWeight',
        sectionTitle: 'Guía Clínica del Peso Corporal Ideal (IBW)',
        sectionSubtitle: 'Orígenes médicos, dosificación farmacológica y variabilidad de complexión.',
        interpretationTitle: 'Orígenes Farmacocinéticos y Por Qué el IBW no es un Estándar Estético',
        interpretationText: 'Las principales fórmulas de Peso Corporal Ideal—Devine (1974), Robinson (1983), Miller (1983) y Hamwi (1964)—no se concibieron como metas estéticas. El Dr. Ben J. Devine diseñó su ecuación en farmacocinética hospitalaria para ajustar la dosificación de medicamentos (teofilina, aminoglucósidos, anestésicos) que se distribuyen en masa libre de grasa. A nivel poblacional, el IBW representa un valor de referencia neutro que generalmente equivale a un IMC de 21.5 a 23.0 kg/m² en individuos de complexión mediana según la OMS.',
        limitationsTitle: 'Tamaño de Complexión Ósea, Hipertrofia Muscular y Peso Ajustado',
        limitationsText: 'Las ecuaciones asumen una complexión ósea estándar. Individuos con constitución delgada tienen un peso saludable un 5% a 10% inferior al cálculo, mientras que quienes poseen una estructura ósea ancha se sitúan un 5% a 10% por encima. Asimismo, atletas con gran masa muscular superarán el IBW sin que ello represente exceso de grasa. En farmacología clínica, para pacientes con obesidad se recurre al Peso Corporal Ajustado (AdjBW = IBW + 0.4 × [Peso Real - IBW]).',
        medicalNoticeTitle: 'Aviso sobre Aplicación Clínica y Farmacoterapia',
        medicalNoticeText: 'Los valores de Peso Corporal Ideal calculados tienen un propósito exclusivamente educativo y no deben emplearse para automedicación ni ajuste de fármacos hospitalarios. La pauta de tratamientos debe ser establecida por médicos y farmacéuticos clínicos basándose en una valoración completa.'
      },
      fr: {
        domain: 'idealWeight',
        sectionTitle: 'Guide Clinique du Poids Idéal Théorique (IBW)',
        sectionSubtitle: 'Origines pharmacologiques, posologie médicamenteuse et morphologie osseuse.',
        interpretationTitle: 'Origines Pharmacocinétiques et Définition Non Esthétique de l’IBW',
        interpretationText: 'Les formules canoniques de Poids Idéal Théorique (IBW)—Devine (1974), Robinson (1983), Miller (1983) et Hamwi (1964)—n\'ont pas été établies à des fins esthétiques. Le Dr Ben J. Devine a conçu son équation en pharmacocinétique clinique afin de doser avec précision les médicaments hydrosolubles (théophylline, aminosides, anesthésiques) qui diffusent dans la masse maigre. Sur le plan de la santé générale, l\'IBW fournit une valeur repère médiane qui coïncide généralement avec un IMC compris entre 21,5 et 23,0 kg/m² selon les standards de l\'OMS.',
        limitationsTitle: 'Morphologie Osseuse, Masse Musculaire et Poids Ajusté',
        limitationsText: 'Les équations d\'IBW postulent une charpente osseuse moyenne. Les morphologies fines présentent un poids de forme inférieur de 5 % à 10 %, tandis que les ossatures larges nécessitent une marge supérieure de 5 % à 10 %. Les sportifs musclés dépassent fréquemment l\'IBW théorique sans présenter d\'excès adipeux. Chez les patients obèses en milieu hospitalier, les cliniciens emploient le Poids Ajusté (AdjBW = IBW + 0,4 × [Poids Réel - IBW]) pour doser les traitements en toute sécurité.',
        medicalNoticeTitle: 'Avis Médical et Utilisation Pharmacologique',
        medicalNoticeText: 'Les valeurs de Poids Idéal fournies sont des repères éducatifs et ne doivent en aucun cas être utilisées pour l\'auto-prescription ou le paramétrage de perfusions médicales. Tout protocole thérapeutique doit être validé par un médecin ou un pharmacien hospitalier qualifié.'
      },
      de: {
        domain: 'idealWeight',
        sectionTitle: 'Klinischer Leitfaden zum Idealgewicht (IBW)',
        sectionSubtitle: 'Medizinische Formelursprünge, Arzneimitteldosierung und Körperbautypen.',
        interpretationTitle: 'Pharmakokinetische Ursprünge & Warum IBW kein ästhetisches Ideal ist',
        interpretationText: 'Die klassischen Idealgewichtsformeln—Devine (1974), Robinson (1983), Miller (1983) und Hamwi (1964)—wurden nicht als ästhetische Schlankheitsideale formuliert. Dr. Ben J. Devine entwickelte seine Formel für die klinische Pharmakokinetik zur exakten Dosierung renal eliminierter Arzneistoffe (z. B. Theophyllin, Aminoglykoside), die sich überwiegend im fettfreien Gewebe verteilen. Im medizinischen Alltag dient das IBW als stabiler Referenzwert, der bei durchschnittlichem Knochenbau typischerweise einem BMI von etwa 21,5 bis 23,0 kg/m² nach WHO-Kriterien entspricht.',
        limitationsTitle: 'Knochenbau-Klassifikation, Muskelhypertrophie & Dosierungsanpassung',
        limitationsText: 'Standard-IBW-Formeln gehen von einem mittleren Skelettbau aus. Personen mit feingliedrigem Knochenbau liegen natürlicherweise 5 % bis 10 % unter dem Wert, während breite Knochenstrukturen einen 5 % bis 10 % höheren Zielwert erfordern. Kraftsportler mit hoher Muskelmasse überschreiten das IBW regelmäßig ohne schädlichen Fettanteil. Bei ausgeprägter Adipositas nutzen Mediziner das adjustierte Körpergewicht (AdjBW = IBW + 0,4 × [Ist-Gewicht - IBW]) für eine sichere Medikation.',
        medicalNoticeTitle: 'Hinweis zu klinischer Anwendung und Pharmakotherapie',
        medicalNoticeText: 'Die ermittelten Idealgewichtswerte dienen der Orientierung und dürfen nicht zur selbstständigen Medikamentendosierung herangezogen werden. Klinische Arzneimittelgaben und Ernährungstherapien obliegen stets der fachärztlichen und pharmazeutischen Beurteilung.'
      },
      ko: {
        domain: 'idealWeight',
        sectionTitle: '표준 이상 체중(IBW) 임상 해석 가이드',
        sectionSubtitle: '약물 투약 용량 산출 기원, 골격 크기(체형) 보정 및 임상적 활용.',
        interpretationTitle: '약동학적 산출 기원 및 IBW가 미용적 기준이 아닌 이유',
        interpretationText: '대표적인 표준 이상 체중(IBW) 공식인 드바인(Devine, 1974), 로빈슨(1983), 밀러(1983), 함위(1964)는 미용 목적이 아닌 임상 약리학에서 출발했습니다. 벤 드바인 박사는 지방 조직이 아닌 제지방 조직에 주로 분포하는 치료 약물(아미노글리코사이드계 항생제, 테오필린, 마취제 등)의 투약 용량을 계산하기 위해 이 공식을 고안했습니다. 공중보건학적으로 IBW는 표준 골격을 가진 성인의 WHO 정상 BMI 구간(18.5~24.9 kg/m²) 중 중간 지점(약 21.5~23.0 kg/m²)과 밀접하게 일치합니다.',
        limitationsTitle: '골격 프레임 크기, 근육량 발달 및 조정 체중(AdjBW) 적용',
        limitationsText: '표준 공식은 중간 크기의 골격을 가정합니다. 손목이나 팔꿈치 너비가 좁은 작은 체형은 산출치보다 5~10% 낮게, 골격이 굵고 넓은 체형은 5~10% 높게 유지하는 것이 생리학적으로 정상입니다. 근육량이 많은 운동선수는 체지방이 적어도 IBW를 크게 초과할 수 있습니다. 임상에서 비만 환자의 약물 용량 결정 시에는 과소 또는 과다 투약을 방지하기 위해 조정 체중(AdjBW = IBW + 0.4 × [실제 체중 - IBW])을 별도로 산출하여 적용합니다.',
        medicalNoticeTitle: '임상 적용 및 약물 요법 관련 안내',
        medicalNoticeText: '본 계산기가 제공하는 수치는 참고용 교육 지표이며, 개인의 임의 약물 복용이나 병원 내 투약 기준으로 직접 사용할 수 없습니다. 정확한 치료 약물 용량 및 영양 공급 계획은 반드시 의사 및 병원 약사의 전문적 진단을 거쳐야 합니다.'
      },
      hi: {
        domain: 'idealWeight',
        sectionTitle: 'आदर्श शारीरिक वजन (IBW) चिकित्सीय गाइड',
        sectionSubtitle: 'चिकित्सीय सूत्रों की उत्पत्ति, दवा खुराक निर्धारण और शारीरिक संरचना भिन्नता।',
        interpretationTitle: 'औषधीय खुराक उत्पत्ति और IBW एक सौंदर्य मानक क्यों नहीं है',
        interpretationText: 'आदर्श शारीरिक वजन (IBW) के मुख्य सूत्र—डिवाइन (1974), रॉबिन्सन (1983), मिलर (1983) और हमवी (1964)—व्यक्तिगत सौंदर्य के लिए नहीं बनाए गए थे। डॉ. बेन जे. डिवाइन ने यह सूत्र अस्पताल में दवाओं (जैसे थियोफिलाइन, एंटीबायोटिक्स और एनेस्थेटिक्स) की सटीक खुराक निर्धारित करने के लिए विकसित किया था, जो वसा के बजाय दुबली मांसपेशियों में वितरित होती हैं। स्वास्थ्य मूल्यांकन में यह एक संदर्भ बिंदु है जो आमतौर पर 21.5 से 23.0 के स्वस्थ बीएमआई से मेल खाता है।',
        limitationsTitle: 'हड्डी का ढांचा (फ्रेम साइज), मांसपेशी निर्माण और समायोजित वजन',
        limitationsText: 'मानक सूत्र औसत हड्डी के ढांचे को मानकर चलते हैं। पतले फ्रेम वाले लोगों का स्वस्थ वजन फॉर्मूले से 5% से 10% कम हो सकता है, जबकि चौड़े फ्रेम वालों का 5% से 10% अधिक। मांसपेशियों वाले एथलीट बिना अतिरिक्त वसा के भी IBW से अधिक वजन के हो सकते हैं। चिकित्सा में गंभीर मोटापे वाले रोगियों के लिए डॉक्टर सुरक्षित दवा खुराक हेतु एडजस्टेड बॉडी वेट (AdjBW) सूत्र का उपयोग करते हैं।',
        medicalNoticeTitle: 'चिकित्सीय उपयोग एवं दवा संबंधी सूचना',
        medicalNoticeText: 'इस कैलकुलेटर द्वारा दिए गए आदर्श वजन केवल शैक्षिक संदर्भ के लिए हैं और इनका उपयोग दवाओं के स्व-प्रिस्क्रिप्शन या अस्पताल की खुराक के लिए नहीं किया जाना चाहिए। दवा की खुराक हमेशा योग्य डॉक्टरों और फार्मासिस्टों द्वारा निर्धारित की जानी चाहिए।'
      }
    },
    healthyWeight: {
      en: {
        domain: 'healthyWeight',
        sectionTitle: 'Healthy Weight Range & Body Frame Guide',
        sectionSubtitle: 'Why healthy weight is a flexible physiological spectrum rather than a single rigid number.',
        interpretationTitle: 'Weight Spectrum vs. Single Ideal Target: Skeletal Frame & Composition',
        interpretationText: 'For any given height, the World Health Organization (WHO) defines a healthy weight window spanning approximately 15 to 22 kg (BMI 18.5 to 24.9 kg/m²). Clinical formulas like Devine or Robinson generate a single target value, but human biology varies widely by skeletal frame size and lean tissue mass. Individuals with small skeletal frames (measured via wrist circumference or elbow breadth) naturally maintain lower weights within the healthy spectrum without nutritional deficit. Conversely, individuals with broad shoulders, denser bone structure, or large skeletal frames typically thrive at the upper tier of the range. Furthermore, strength-trained individuals and athletes carry significant fat-free muscle mass, placing them near or slightly above the statistical upper threshold while preserving optimal cardiovascular and metabolic biomarker profiles.',
        limitationsTitle: 'Frame Size Adjustments, Muscularity & Geriatric Targets',
        limitationsText: 'Standard height-to-weight tables do not directly differentiate between dense skeletal muscle and adipose tissue. For clinical personalization: 1) Frame size adjustments typically shift ideal targets by ±10% based on wrist circumference (<16.5 cm small, 16.5-18.5 cm medium, >18.5 cm large for men). 2) Older adults (aged 65+) benefit from slightly higher BMI cutoffs (23.0 to 29.9 kg/m²) to protect against sarcopenia, osteoporosis, and frailty. 3) Individuals of South Asian and East Asian ancestry face elevated cardiometabolic risk at lower BMI cutoffs (overweight at ≥23.0 kg/m² instead of 25.0 kg/m²).',
        medicalNoticeTitle: 'Clinical Weight Management Notice',
        medicalNoticeText: 'Height-weight tables serve as population screening tools. Body composition (fat mass vs. muscle mass), waist circumference, blood pressure, and metabolic blood panels provide a far more complete assessment of health than body weight alone. Consult a physician or registered dietitian before beginning restrictive weight loss programs.'
      },
      es: {
        domain: 'healthyWeight',
        sectionTitle: 'Guía de Rango de Peso Saludable y Contextura Corporal',
        sectionSubtitle: 'Por qué el peso saludable es un espectro fisiológico flexible y no una cifra rígida única.',
        interpretationTitle: 'Espectro de Peso vs. Peso Ideal Único: Contextura y Composición',
        interpretationText: 'Para cualquier estatura determinada, la Organización Mundial de la Salud (OMS) establece una ventana de peso saludable de 15 a 22 kg (IMC 18.5 a 24.9 kg/m²). Fórmulas clásicas como Devine o Robinson calculan un peso ideal único, pero la variabilidad biológica depende de la contextura ósea (medida por el perímetro de muñeca o anchura del codo) y de la masa muscular. Una contextura delgada o pequeña se sitúa de forma saludable en el tercio inferior del rango sin déficit nutricional. Por el contrario, personas con contextura ancha, alta densidad ósea o atletas con masa muscular desarrollada se ubican de manera óptima en el límite superior, manteniendo una excelente salud metabólica.',
        limitationsTitle: 'Ajustes por Contextura, Musculatura y Consideraciones Geriátricas',
        limitationsText: 'Las tablas estándar de peso por altura no distinguen directamente entre masa muscular magra y grasa corporal. Consideraciones clínicas: 1) La contextura ósea ajusta los objetivos en un ±10% según el perímetro de muñeca (pequeña, mediana, grande). 2) En adultos mayores de 65 años, un IMC ligeramente más elevado (23.0 a 29.9 kg/m²) se asocia con menor mortalidad y protección contra la sarcopenia y fragilidad. 3) En poblaciones asiáticas, el riesgo cardiometabólico se incrementa a partir de un IMC de 23.0 kg/m².',
        medicalNoticeTitle: 'Aviso de Manejo Clínico del Peso',
        medicalNoticeText: 'Las tablas de peso por altura son herramientas de cribado poblacional. La composición corporal (grasa vs. músculo), el perímetro abdominal y los análisis clínicos ofrecen una visión de salud mucho más precisa que la báscula sola. Consulte con un médico o nutricionista colegiado antes de emprender programas dietéticos restrictivos.'
      },
      fr: {
        domain: 'healthyWeight',
        sectionTitle: 'Guide des Plages de Poids Santé et Morphotype',
        sectionSubtitle: 'Comprendre pourquoi le poids santé est une fourchette dynamique et non un chiffre unique figé.',
        interpretationTitle: 'Fourchette de Poids vs Poids Idéal Unique : Morphologie et Composition',
        interpretationText: 'Pour une taille donnée, l\'Organisation mondiale de la santé (OMS) définit une plage de poids santé s\'étendant sur 15 à 22 kg (IMC 18,5 à 24,9 kg/m²). Les formules cliniques comme Devine ou Robinson indiquent une valeur cible unique, mais la morphologie humaine dépend de l\'ossature (mesurée au poignet ou à la largeur du coude) et de la masse musculaire. Une ossature fine s\'épanouit naturellement dans le bas de la fourchette sans carence, tandis qu\'une ossature large ou une masse musculaire développée pousse le poids vers le haut de la plage tout en préservant d\'excellents paramètres cardiovasculaires et métaboliques.',
        limitationsTitle: 'Ajustement par Ossature, Masse Musculaire et Cibles Gériatriques',
        limitationsText: 'Les tables standards ne distinguent pas la masse musculaire de la masse grasse. Recommandations cliniques : 1) La morphologie ajuste les cibles de ±10 % selon le tour de poignet (fin, moyen, large). 2) Chez les seniors (65 ans et plus), un IMC légèrement supérieur (23,0 à 29,9 kg/m²) protège contre la sarcopénie et l\'ostéoporose. 3) Chez les personnes d\'origine asiatique, le seuil de risque cardiométabolique débute dès 23,0 kg/m².',
        medicalNoticeTitle: 'Avis Médical de Gestion du Poids',
        medicalNoticeText: 'Les tables taille-poids sont des outils de dépistage statistique. La composition corporelle (graisse vs muscle), le tour de taille et les bilans biologiques fournissent une évaluation médicale bien plus précise que le poids brut. Consultez un médecin avant d\'entreprendre une restriction calorique sévère.'
      },
      de: {
        domain: 'healthyWeight',
        sectionTitle: 'Leitfaden für gesunde Gewichtsbereiche und Körperbau',
        sectionSubtitle: 'Warum ein gesundes Körpergewicht eine flexible Bandbreite statt einer starren Zahl ist.',
        interpretationTitle: 'Gewichtsspektrum vs. starres Idealgewicht: Knochenbau & Zusammensetzung',
        interpretationText: 'Für jede Körpergröße definiert die Weltgesundheitsorganisation (WHO) ein Normalgewicht-Spektrum von ca. 15 bis 22 kg (BMI 18,5 bis 24,9 kg/m²). Klassische Formeln wie Devine oder Robinson liefern einen einzelnen Punktwert, doch der individuelle Körperbau variiert beträchtlich nach Knochenbau (Handgelenksumfang) und Muskelmasse. Zierliche Personen mit schmalem Knochenbau fühlen sich im unteren Bereich des Spektrums wohl, während Personen mit breitem Knochenbau oder trainierte Sportler naturgemäß im oberen Bereich oder leicht darüber liegen, ohne überschüssiges Fettgewebe aufzuweisen.',
        limitationsTitle: 'Knochenbau-Korrektur, Muskelmasse und Altersgrenzen',
        limitationsText: 'Standardtabellen unterscheiden nicht zwischen Muskelmasse und Fettgewebe. Klinische Differenzierung: 1) Der Knochenbau variiert das Zielgewicht um ca. ±10 % (Handgelenksumfang: zierlich, mittel, kräftig). 2) Für Senioren ab 65 Jahren gilt ein leicht höherer BMI-Bereich (23,0 bis 29,9 kg/m²) als schützend gegen Muskelabbau (Sarkopenie) und Frakturen. 3) Für asiatische Bevölkerungsgruppen liegt die kardiovaskuläre Risikoschwelle bereits bei einem BMI von 23,0 kg/m².',
        medicalNoticeTitle: 'Klinischer Hinweis zum Gewichtsmanagement',
        medicalNoticeText: 'Größe-Gewicht-Tabellen sind epidemiologische Orientierungswerte. Körperzusammensetzung (Fett vs. Muskel), Bauchumfang und Blutwerte liefern ein deutlich valideres Bild der Gesundheit als das reine Waagengewicht. Konsultieren Sie einen Arzt oder Ernährungsberater vor einer drastischen Gewichtsreduktion.'
      },
      ko: {
        domain: 'healthyWeight',
        sectionTitle: '키별 적정 체중 구간 및 골격 프레임 가이드',
        sectionSubtitle: '건강 체중이 고정된 단일 숫자가 아닌 유연한 생리학적 체중 스펙트럼인 이유.',
        interpretationTitle: '단일 이상 체중 vs 체중 스펙트럼: 골격 크기와 체성분',
        interpretationText: '동일한 신장이라 하더라도 세계보건기구(WHO) 기준 정상 체중 범위는 약 15~22kg의 유연한 구간(BMI 18.5~24.9 kg/m²)을 가집니다. Devine이나 Robinson 같은 고전 공식은 단일 목표 수치를 제시하지만, 실제 최적 체중은 손목 둘레 등으로 측정되는 골격 프레임(체형)과 제지방 근육량에 따라 크게 달라집니다. 골격이 가는 체형은 정상 구간 하단에서 건강을 유지하고, 골격이 크거나 근력 운동으로 근육량이 많은 성인은 상단 근처에 위치하더라도 대사 질환 위험 없이 최상의 심혈관 지표를 나타냅니다.',
        limitationsTitle: '골격 보정 계수, 근육량 및 노년층 맞춤 기준',
        limitationsText: '표준 신장별 체중표는 근육과 지방의 질적 차이를 반영하지 못합니다. 임상적 고려사항: 1) 손목 둘레에 따른 골격 크기(소형, 중형, 대형)에 따라 체중 목표치를 약 ±10% 보정합니다. 2) 65세 이상 노년층은 근감소증(사코페니아)과 골다공증 예방을 위해 약간 높은 BMI(23.0~29.9 kg/m²) 유지가 생리학적으로 권장됩니다. 3) 아시아계 인구는 체지방 비율이 높아 BMI 23.0 kg/m²부터 심혈관 및 대사 질환 위험이 증가합니다.',
        medicalNoticeTitle: '임상 체중 관리 안내',
        medicalNoticeText: '키별 체중표는 일반 인구 대상 선별 참고 자료입니다. 단순 체중계 수치보다는 체성분(체지방률 및 골격근량), 허리둘레, 혈압 및 혈액 대사 검사를 종합하여 전문의와 상담하는 것이 바람직합니다.'
      },
      hi: {
        domain: 'healthyWeight',
        sectionTitle: 'ऊंचाई अनुसार स्वस्थ वजन सीमा एवं शारीरिक संरचना गाइड',
        sectionSubtitle: 'समझें कि स्वस्थ वजन एक कठोर संख्या नहीं बल्कि एक लचीला शारीरिक दायरा क्यों है।',
        interpretationTitle: 'एकल आदर्श वजन बनाम वजन दायरा: शारीरिक ढांचा एवं संरचना',
        interpretationText: 'किसी भी निश्चित ऊंचाई के लिए, विश्व स्वास्थ्य संगठन (WHO) लगभग 15 से 22 किलोग्राम (बीएमआई 18.5 से 24.9 kg/m²) की एक स्वस्थ वजन सीमा निर्धारित करता है। डिवाइन या रॉबिन्सन जैसे सूत्र एक निश्चित संख्या देते हैं, लेकिन मानव शरीर रचना हड्डियों के ढांचे (कलाई का घेरा) और मांसपेशियों के द्रव्यमान पर निर्भर करती है। पतले ढांचे वाले व्यक्ति स्वस्थ सीमा के निचले हिस्से में रहते हैं, जबकि चौड़े ढांचे वाले व्यक्ति और नियमित व्यायाम करने वाले एथलीट बिना किसी अतिरिक्त वसा के ऊपरी सीमा पर भी पूरी तरह स्वस्थ रहते हैं।',
        limitationsTitle: 'शारीरिक ढांचे का समायोजन, मांसपेशियां एवं वरिष्ठ नागरिकों के मानक',
        limitationsText: 'मानक ऊंचाई-वजन तालिकाएं मांसपेशियों और वसा के बीच अंतर नहीं करती हैं। नैदानिक मार्गदर्शन: 1) कलाई के घेरे के आधार पर शारीरिक ढांचे के अनुसार लक्ष्य में ±10% का समायोजन किया जाता है। 2) 65 वर्ष से अधिक उम्र के वरिष्ठ नागरिकों के लिए मांसपेशियों के क्षय (सार्कोपेनिया) से बचाव हेतु थोड़ा अधिक बीएमआई (23.0 से 29.9 kg/m²) सुरक्षित माना जाता है। 3) एशियाई आबादी में 23.0 बीएमआई से ही चयापचय जोखिम बढ़ने लगता है।',
        medicalNoticeTitle: 'नैदानिक वजन प्रबंधन सूचना',
        medicalNoticeText: 'ऊंचाई-वजन तालिका एक प्रारंभिक संदर्भ उपकरण है। केवल वजन के बजाय शरीर की संरचना (वसा बनाम मांसपेशी), कमर का घेरा और रक्त परीक्षण स्वास्थ्य का अधिक सटीक मूल्यांकन करते हैं। किसी भी कठोर आहार कार्यक्रम से पहले डॉक्टर से परामर्श लें।'
      }
    },
    tdee: {
      en: {
        domain: 'tdee',
        sectionTitle: 'Total Daily Energy Expenditure (TDEE) & Metabolism Guide',
        sectionSubtitle: 'Where your daily calories actually go: The 4 physiological components of human metabolism.',
        interpretationTitle: 'The 4 Pillars of Daily Burn: BMR, NEAT, TEF, and Exercise',
        interpretationText: 'Total Daily Energy Expenditure (TDEE) is not a single static engine—it is the dynamic sum of four distinct biological processes: 1) Basal Metabolic Rate (BMR, 60–70% of total burn): The baseline energy consumed by vital organs (brain, liver, heart, kidneys) at rest. 2) Non-Exercise Activity Thermogenesis (NEAT, 15–20% of burn): All unplanned, spontaneous physical movement—fidgeting, standing, walking, typing, and occupational tasks. NEAT is the most variable component of daily burn, varying by up to 800 kcal between individuals. 3) Thermic Effect of Food (TEF, 8–10% of burn): Energy required to digest and assimilate macronutrients (protein demands 20–30% of its caloric value to process, compared to 5–10% for carbs and 0–3% for fats). 4) Exercise Activity Thermogenesis (EAT, 5–10% of burn): Dedicated athletic training and structured cardio/resistance workouts.',
        limitationsTitle: 'Metabolic Adaptation & The Subconscious NEAT Drop',
        limitationsText: 'During prolonged caloric restriction, the human body deploys adaptive survival defenses: 1) Adaptive thermogenesis depresses resting metabolic rate beyond weight loss predictions. 2) Subconscious down-regulation of NEAT occurs—individuals unconsciously move more sluggishly, sit more, and fidget less, frequently erasing 200 to 400 kcal of daily expenditure without noticing. 3) Mathematical formulas like Mifflin-St Jeor carry an empirical variance of ±10–15%. Use the calculated TDEE as an initial baseline and monitor average scale weight across 3 to 4 weeks to determine your true biological energy balance.',
        medicalNoticeTitle: 'Clinical Energy Balance Notice',
        medicalNoticeText: 'TDEE figures are calculated estimates for dietary planning. Consult a registered dietitian or physician before embarking on aggressive caloric deficits or high-volume athletic energy protocols.'
      },
      es: {
        domain: 'tdee',
        sectionTitle: 'Guía del Gasto Energético Total Diario (TDEE) y Metabolismo',
        sectionSubtitle: 'A dónde van realmente sus calorías diarias: Los 4 componentes fisiológicos del gasto energético.',
        interpretationTitle: 'Los 4 Pilares del Gasto Calórico: TMB, NEAT, TEF y Ejercicio',
        interpretationText: 'El Gasto Energético Total Diario (TDEE) no es un motor único y estático, sino la suma dinámica de cuatro procesos biológicos: 1) Tasa Metabólica Basal (TMB, 60–70% del gasto): Energía vital consumida por órganos vitales en reposo. 2) Termogénesis por Actividad No Asociada al Ejercicio (NEAT, 15–20%): Movimiento espontáneo no estructurado (caminar, gesticular, subir escaleras, estar de pie). Es el componente más variable entre personas (hasta 800 kcal de diferencia). 3) Efecto Térmico de los Alimentos (TEF, 8–10%): Energía requerida para digerir y procesar nutrientes (las proteínas consumen el 20–30% de sus calorías en digerirse). 4) Termogénesis por Ejercicio (EAT, 5–10%): Entrenamientos estructurados de fuerza y cardio.',
        limitationsTitle: 'Adaptación Metabólica y Reducción Inconsciente del NEAT',
        limitationsText: 'En déficits calóricos prolongados, el organismo activa mecanismos de defensa evolutiva: 1) La adaptación metabólica ralentiza el gasto basal. 2) Ocurre una caída involuntaria del NEAT (la persona se mueve menos, gesticula menos y se sienta más tiempo), reduciendo el gasto en 200–400 kcal/día sin advertirlo. 3) Las fórmulas presentan un margen de variación de ±10–15%. Ajuste su ingesta observando la tendencia de peso durante 3 o 4 semanas.',
        medicalNoticeTitle: 'Aviso sobre Balance Energético Clínico',
        medicalNoticeText: 'El TDEE es una estimación de referencia para la planificación nutricional. Consulte a un médico o dietista colegiado antes de adoptar déficits calóricos severos.'
      },
      fr: {
        domain: 'tdee',
        sectionTitle: 'Guide de la Dépense Énergétique Totale (TDEE) et Métabolisme',
        sectionSubtitle: 'Où vont réellement vos calories quotidiennes : Les 4 composantes de la dépense métabolique.',
        interpretationTitle: 'Les 4 Piliers de la Dépense : MB, NEAT, TEF et Exercice',
        interpretationText: 'La Dépense Énergétique Totale (TDEE) représente l\'addition de quatre mécanismes physiologiques : 1) Métabolisme de Base (MB, 60–70 %) : Énergie minimale vitale pour les organes nobles au repos. 2) Thermogenèse des Activités Non Sportives (NEAT, 15–20 %) : Mouvements spontanés de la vie quotidienne (marche, maintien postural, tâches domestiques). C\'est la variable la plus modulable (jusqu\'à 800 kcal d\'écart interindividuel). 3) Effet Thermique des Aliments (TEF, 8–10 %) : Coût énergétique de la digestion (les protéines requièrent 20–30 % de leur apport pour être assimilées). 4) Thermogenèse liée à l\'Exercice (EAT, 5–10 %) : Séances d\'entraînement programmées.',
        limitationsTitle: 'Adaptation Métabolique et Chute Inconsciente du NEAT',
        limitationsText: 'Lors d\'une restriction calorique soutenue, l\'organisme réagit : 1) L\'adaptation métabolique réduit le métabolisme de base. 2) Une baisse subconsciente du NEAT intervient (on bouge moins, on s\'assoit davantage), effaçant souvent 200 à 400 kcal de déficit journalier à notre insu. 3) Les équations prédictives comportent une incertitude de ±10 à 15 %. Évaluez l\'évolution pondérale sur 3 à 4 semaines pour calibrer votre maintien réel.',
        medicalNoticeTitle: 'Avis Médical sur l\'Équilibre Énergétique',
        medicalNoticeText: 'La valeur de TDEE est une estimation théorique. Demandez conseil à un professionnel de santé avant d\'entreprendre une restriction calorique importante.'
      },
      de: {
        domain: 'tdee',
        sectionTitle: 'Leitfaden für den Gesamtenergiebedarf (TDEE) & Stoffwechsel',
        sectionSubtitle: 'Wohin Ihre täglichen Kalorien fließen: Die 4 physiologischen Komponenten des Verbrauchs.',
        interpretationTitle: 'Die 4 Säulen des Kalorienverbrauchs: BMR, NEAT, TEF und Training',
        interpretationText: 'Der Gesamtenergiebedarf (TDEE) setzt sich aus vier physiologischen Säulen zusammen: 1) Grundumsatz (BMR, 60–70 %): Energieverbrauch der lebenswichtigen Organe in Ruhe. 2) Nicht-sportliche Alltagsaktivität (NEAT, 15–20 %): Unbewusste Alltagsbewegung (Gehen, Stehen, Treppensteigen, Gestikulieren). NEAT variiert interindividuell um bis zu 800 kcal täglich. 3) Thermischer Effekt der Nahrung (TEF, 8–10 %): Verdauungsenergie für Nährstoffe (Proteine verbrauchen 20–30 % ihres Brennwerts zur Verstoffwechselung). 4) Trainingsaktivität (EAT, 5–10 %): Gezielt geplante Sport- und Fitnesseinheiten.',
        limitationsTitle: 'Metabolische Adaptation & unbewusster NEAT-Abfall',
        limitationsText: 'Bei längeren Kaloriendefiziten greifen evolutionäre Schutzmechanismen: 1) Die metabolische Anpassung senkt den Energieumsatz. 2) Das NEAT sinkt unbewusst drastisch ab (weniger Spontanbewegung, längeres Sitzen), was oft 200 bis 400 kcal des Defizits unbemerkt aufhebt. 3) Mathematische Formeln haben eine Streuung von ±10–15 %. Dokumentieren Sie Ihr Gewicht über 3 bis 4 Wochen zur exakten Ermittlung.',
        medicalNoticeTitle: 'Klinischer Hinweis zum Energiehaushalt',
        medicalNoticeText: 'TDEE-Werte sind Orientierungswerte für Ernährungspläne. Konsultieren Sie einen Ernährungsmediziner oder Diätassistenten vor extremen Reduktionsdiäten.'
      },
      ko: {
        domain: 'tdee',
        sectionTitle: '일일 총 에너지 소비량(TDEE) 및 대사 생리학 가이드',
        sectionSubtitle: '하루 동안 소비되는 칼로리의 실제 행방: 인체 대사의 4대 생리학적 구성 요소.',
        interpretationTitle: 'TDEE 4대 핵심 기둥: 기초대사량, NEAT, 식품열역학, 운동',
        interpretationText: '일일 총 에너지 소비량(TDEE)은 단일 수치가 아니며 4가지 대사 경로의 합산입니다: 1) 기초대사량 (BMR, 60~70%): 생명 유지 장기(뇌, 간, 심장, 신장)가 안정 시 소비하는 고정 에너지. 2) 비운동성 활동 열생성 (NEAT, 15~20%): 걷기, 서 있기, 자세 유지 등 일상생활 속 모든 자발적 움직임. 개인 간 하루 최대 800 kcal 이상 차이를 유발하는 가장 가변적인 영역입니다. 3) 식사성 발열효과 (TEF, 8~10%): 영양소 소화·흡수 대사비용 (단백질은 섭취 칼로리의 20~30% 소모). 4) 운동 활동 열생성 (EAT, 5~10%): 계획된 웨이트 트레이닝 및 유산소 운동.',
        limitationsTitle: '대사 적응 및 무의식적 NEAT 활동 저하 현상',
        limitationsText: '장기적인 다이어트(칼로리 결손) 지속 시 인체는 방어 기전을 가동합니다: 1) 대사 적응으로 인해 기초 에너지 소모가 둔화됩니다. 2) 무의식적인 NEAT 감소가 발생하여 활동량이 줄어들고 쉽게 피로해지며, 본인도 모르는 사이에 하루 200~400 kcal의 소비량이 증발할 수 있습니다. 3) Mifflin-St Jeor 등 수학 공식은 ±10~15%의 통계적 오차를 가집니다. 일정한 식단을 3~4주간 유지하며 체중 변화 추이를 관찰해 실제 유지 칼로리를 확정하세요.',
        medicalNoticeTitle: '에너지 대사 임상 안내',
        medicalNoticeText: '산출된 TDEE는 식단 구성을 위한 기준 추정치입니다. 극단적인 초저칼로리 식이요법 시작 전에는 반드시 의사 또는 전문 임상영양사와 상담하십시오.'
      },
      hi: {
        domain: 'tdee',
        sectionTitle: 'कुल दैनिक ऊर्जा व्यय (TDEE) एवं चयापचय गाइड',
        sectionSubtitle: 'आपकी दैनिक कैलोरी वास्तव में कहां खर्च होती है: मानव चयापचय के 4 मुख्य शारीरिक घटक।',
        interpretationTitle: 'दैनिक कैलोरी व्यय के 4 मुख्य स्तंभ: BMR, NEAT, TEF एवं व्यायाम',
        interpretationText: 'कुल दैनिक ऊर्जा व्यय (TDEE) कोई स्थिर इंजन नहीं है, बल्कि चार जैविक प्रक्रियाओं का योग है: 1) बेसल मेटाबॉलिक रेट (BMR, 60–70%): विश्राम की अवस्था में मस्तिष्क, हृदय, यकृत और गुर्दे द्वारा खर्च की जाने वाली ऊर्जा। 2) गैर-व्यायाम गतिविधि थर्मोजेनेसिस (NEAT, 15–20%): दिन भर की सहज गतिविधियां (चलना, खड़े रहना, सीढ़ियां चढ़ना)। यह व्यक्तियों के बीच 800 कैलोरी तक भिन्न हो सकती है। 3) भोजन का थर्मिक प्रभाव (TEF, 8–10%): पोषक तत्वों को पचाने में खर्च ऊर्जा (प्रोटीन पचाने में 20–30% ऊर्जा लगती है)। 4) व्यायाम थर्मोजेनेसिस (EAT, 5–10%): संरचित जिम वर्कआउट और कार्डियो।',
        limitationsTitle: 'चयापचय अनुकूलन एवं अवचेतन NEAT में गिरावट',
        limitationsText: 'लंबे समय तक कैलोरी की कमी (डाइट) में रहने पर शरीर रक्षात्मक अनुकूलन अपनाता है: 1) चयापचय अनुकूलन से बेसल बर्न घट जाता है। 2) अवचेतन रूप से NEAT में गिरावट आती है (व्यक्ति अनजाने में अधिक बैठता है और कम हिलता-डुलता है), जिससे बिना पता चले प्रतिदिन 200 से 400 कैलोरी का व्यय कम हो जाता है। 3) गणितीय सूत्रों में ±10-15% का अंतर हो सकता है। सटीक ऊर्जा संतुलन जानने के लिए 3 से 4 सप्ताह तक शरीर के वजन के रुझान को ट्रैक करें।',
        medicalNoticeTitle: 'नैदानिक ऊर्जा संतुलन सूचना',
        medicalNoticeText: 'TDEE के आंकड़े आहार योजना के लिए शैक्षिक अनुमान हैं। अत्यधिक कैलोरी घाटा शुरू करने से पहले योग्य पोषण विशेषज्ञ या डॉक्टर से परामर्श लें।'
      }
    },
        bmr: {
      en: {
        domain: 'bmr',
        sectionTitle: 'Basal Metabolism & Organ Demands Guide',
        sectionSubtitle: 'Understanding the physiological metabolic floor, vital organ caloric consumption, and endocrine regulation.',
        interpretationTitle: 'Organ Energy Partitioning & The Non-Negotiable Metabolic Floor',
        interpretationText: 'Basal Metabolic Rate (BMR) represents the non-negotiable energy floor required to sustain life at complete rest in a thermoneutral environment. According to seminal metabolic research by Elia (1992) and Gallagher et al. (1998), internal organs account for the vast majority of BMR despite making up less than 6% of total body weight: the liver consumes ~20–22% (glycogen synthesis and detoxification), the brain ~19–20% (continuous neuronal ion pumping), skeletal muscle ~20–22% (resting muscle tone and protein turnover), the heart and kidneys ~15–17% (myocardial pumping and renal filtration), and residual tissues ~20–24%. Chronically consuming fewer calories than your BMR triggers severe adaptive thermogenesis, thyroid down-regulation (decreased active T3), leptin suppression, and hormonal disruption.',
        limitationsTitle: 'Predictive Equation Variances: Mifflin vs Katch-McArdle',
        limitationsText: 'Standard formulas like Mifflin-St Jeor rely on total body weight, height, age, and sex, achieving an accuracy of ±10% for the general population. However, because adipose fat tissue is metabolically inert (~4.5 kcal/kg/day) compared to lean muscle tissue (~13 kcal/kg/day), individuals with high muscularity or substantial adiposity benefit more from body-composition-based formulas like Katch-McArdle: BMR = 370 + (21.6 × LBM in kg).',
        medicalNoticeTitle: 'Metabolic Health & Endocrine Screening Notice',
        medicalNoticeText: 'Calculated BMR values reflect statistical norms for healthy euthyroid adults. Clinical conditions including hypothyroidism (lowering metabolic rate), hyperthyroidism (accelerating burn), polycystic ovary syndrome (PCOS), and severe prolonged starvation alter cellular energy expenditure. If experiencing unexplained weight fluctuations or chronic fatigue, consult a qualified physician or endocrinologist for thyroid panel (TSH, free T3/T4) and indirect calorimetry testing.'
      },
      es: {
        domain: 'bmr',
        sectionTitle: 'Guía de Metabolismo Basal y Demandas Orgánicas',
        sectionSubtitle: 'Comprende el suelo metabólico vital, el consumo calórico de los órganos internos y el control endocrino.',
        interpretationTitle: 'Distribución Energética por Órganos y el Suelo Metabólico Vital',
        interpretationText: 'La Tasa Metabólica Basal (TMB) representa el suelo energético obligatorio para sostener la vida en reposo total y temperatura neutra. Según investigaciones de Elia (1992) y Gallagher et al. (1998), los órganos internos consumen la mayor parte de la TMB a pesar de representar menos del 6% del peso corporal: el hígado consume ~20–22%, el cerebro ~19–20%, el músculo esquelético ~20–22%, el corazón y riñones ~15–17%, y los tejidos residuales ~20–24%. Consumir crónicamente menos calorías que tu TMB desencadena una adaptación metabólica severa, supresión de la hormona tiroidea activa (T3) y pérdida muscular acelerada.',
        limitationsTitle: 'Variaciones entre Ecuaciones: Mifflin vs Katch-McArdle',
        limitationsText: 'La fórmula de Mifflin-St Jeor utiliza peso, estatura, edad y sexo, con una precisión de ±10% en población general. Sin embargo, dado que el tejido graso es metabólicamente poco activo (~4.5 kcal/kg/día) comparado con el músculo (~13 kcal/kg/día), atletas o personas con composición corporal diferenciada obtienen mayor precisión con la fórmula de Katch-McArdle basada en masa magra: TMB = 370 + (21.6 × MCM en kg).',
        medicalNoticeTitle: 'Aviso de Salud Metabólica y Cribado Endocrino',
        medicalNoticeText: 'Los valores de TMB calculados representan normas estadísticas para adultos con función tiroidea normal. Trastornos como hipotiroidismo, hipertiroidismo o fatiga suprarrenal modifican sustancialmente el gasto celular. Ante variaciones inexplicables de peso o cansancio crónico, consulte a un endocrinólogo.'
      },
      fr: {
        domain: 'bmr',
        sectionTitle: 'Guide du Métabolisme de Base et Dépenses Organiques',
        sectionSubtitle: 'Comprendre le seuil métabolique vital, la consommation énergétique des organes internes et la régulation endocrinienne.',
        interpretationTitle: 'Répartition Énergétique par Organe et Seuil Métabolique Incompressible',
        interpretationText: 'Le Métabolisme de Base (MB) constitue le plancher énergétique vital nécessaire au maintien des fonctions cellulaires au repos complet. Selon les travaux d\'Elia (1992) et de Gallagher et al. (1998), les organes internes consomment l\'essentiel du MB bien qu\'ils représentent moins de 6% du poids corporel : le foie ~20–22%, le cerveau ~19–20%, le muscle squelettique ~20–22%, le cœur et les reins ~15–17%, et les tissus résiduels ~20–24%. Un apport calorique chroniquement inférieur à votre MB déclenche une thermogenèse adaptative sévère, un effondrement de l\'hormone thyroïdienne T3 et une fonte musculaire.',
        limitationsTitle: 'Variabilité des Équations : Mifflin vs Katch-McArdle',
        limitationsText: 'La formule de Mifflin-St Jeor se base sur le poids, la taille, l\'âge et le sexe, avec une marge de précision de ±10% en population générale. Toutefois, le tissu adipeux étant métaboliquement peu actif (~4,5 kcal/kg/jour) face au muscle (~13 kcal/kg/jour), les sportifs musclés ont intérêt à utiliser la formule de Katch-McArdle fondée sur la masse maigre : MB = 370 + (21,6 × masse maigre en kg).',
        medicalNoticeTitle: 'Avis Médical et Bilan Endocrinien',
        medicalNoticeText: 'Les valeurs calculées reflètent les normes statistiques chez l\'adulte euthyroïdien. Les dysfonctionnements tels que l\'hypothyroïdie ou l\'hyperthyroïdie modifient profondément la dépense basale. En cas de fatigue inexpliquée ou de blocage pondéral, consultez un médecin ou un endocrinologue.'
      },
      de: {
        domain: 'bmr',
        sectionTitle: 'Leitfaden zum Grundumsatz & Organenergiebedarf',
        sectionSubtitle: 'Physiologischer Minimalbedarf, Kalorienverbrauch lebenswichtiger Organe und endokrine Regulation.',
        interpretationTitle: 'Energieaufteilung der Organe & Der Unverzichtbare Grundumsatz',
        interpretationText: 'Der Grundumsatz (BMR) beziffert das unumstößliche physiologische Minimum, das der Organismus bei völliger Ruhe benötigt. Nach grundlegenden Studien von Elia (1992) und Gallagher et al. (1998) verbrauchen die inneren Organe den Löwenanteil des BMR, obwohl sie unter 6% des Körpergewichts ausmachen: die Leber ~20–22%, das Gehirn ~19–20%, die Skelettmuskulatur ~20–22%, Herz und Nieren ~15–17% und übrige Gewebe ~20–24%. Wer chronisch unter seinem Grundumsatz isst, riskiert eine drastische adaptive Thermogenese, Schilddrüsendrosselung (T3-Abfall) und Muskelabbau.',
        limitationsTitle: 'Formelunterschiede: Mifflin-St Jeor vs. Katch-McArdle',
        limitationsText: 'Die Mifflin-St Jeor-Formel stützt sich auf Gesamtgewicht, Größe, Alter und Geschlecht mit einer Genauigkeit von ±10% für die Allgemeinbevölkerung. Da Fettgewebe mit ~4,5 kcal/kg/Tag metabolisch deutlich inaktiver ist als Muskelgewebe (~13 kcal/kg/Tag), liefert bei trainierten Athleten die Katch-McArdle-Formel präzisere Ergebnisse: BMR = 370 + (21,6 × Magermasse in kg).',
        medicalNoticeTitle: 'Medizinischer Hinweis zur Stoffwechselgesundheit',
        medicalNoticeText: 'Die berechneten BMR-Werte spiegeln statistische Richtwerte für schilddrüsengesunde Erwachsene wider. Erkrankungen wie Hypothyreose oder Hyperthyreose verändern den zellulären Energieverbrauch maßgeblich. Bei unerklärlichen Gewichtsschwankungen oder chronischer Erschöpfung wird ein ärztlicher Schilddrüsentest empfohlen.'
      },
      ko: {
        domain: 'bmr',
        sectionTitle: '기초대사량(BMR) 및 장기별 에너지 소비 가이드',
        sectionSubtitle: '생명 유지를 위한 최소 대사 기준치, 내부 장기별 칼로리 소모 및 내분비계 조절 기전 이해.',
        interpretationTitle: '주요 장기별 에너지 분배와 타협할 수 없는 기초대사량 기준선',
        interpretationText: '기초대사량(BMR)은 완전한 안정 상태에서 체온 유지와 생명 유지를 위해 요구되는 필수적인 에너지의 마지노선입니다. Elia(1992)와 Gallagher 등(1998)의 인체 대사 연구에 따르면, 내부 장기는 체중의 6% 미만에 불과하지만 기초대사량의 대부분을 소비합니다: 간 ~20–22%(해독 및 글리코겐 대사), 뇌 ~19–20%(신경 세포 이온 펌프), 골격근 ~20–22%(안정 시 근긴장 및 단백질 교체), 심장 및 신장 ~15–17%(심근 박동 및 사구체 여과), 기타 조직 ~20–24%. 기초대사량 미만으로 만성적인 절식 다이어트를 지속하면 적응성 열발생으로 인한 대사 저하, 갑상선 호르몬(T3) 감소, 렙틴 억제 및 근손실이 초래됩니다.',
        limitationsTitle: '산출 공식별 특성: 미플린-세인트 지어 vs 캐치-맥아들',
        limitationsText: 'Mifflin-St Jeor 공식은 일반 성인 기준 ±10%의 높은 정확도를 보입니다. 그러나 체지방 조직의 휴식기 에너지 소비량(~4.5 kcal/kg/일)은 제지방 근육 조직(~13 kcal/kg/일)에 비해 훨씬 적으므로, 근육량이 많거나 체지방률 편차가 큰 경우에는 순수 제지방량을 반영하는 Katch-McArdle 공식[BMR = 370 + (21.6 × 제지방량 kg)]을 활용하는 것이 더욱 정확합니다.',
        medicalNoticeTitle: '대사 건강 및 내분비계 임상 안내',
        medicalNoticeText: '계산된 BMR 수치는 갑상선 기능이 정상인 성인의 통계적 평균치입니다. 갑상선기능저하증(대사 저하), 갑상선기능항진증(대사 급증) 등의 내분비 질환은 세포 에너지 소모량을 크게 변화시킵니다. 원인 불명의 급격한 체중 변화나 만성 피로가 동반될 경우 내분비내과 전문의와 상담하여 혈액 검사(TSH, 유리 T3/T4)를 받아보시기 바랍니다.'
      },
      hi: {
        domain: 'bmr',
        sectionTitle: 'बेसल मेटाबॉलिज्म एवं अंग ऊर्जा आवश्यकता गाइड',
        sectionSubtitle: 'शारीरिक मेटाबॉलिक न्यूनतम सीमा, आंतरिक अंगों की कैलोरी खपत और अंतःस्रावी नियंत्रण को समझें।',
        interpretationTitle: 'अंगों द्वारा ऊर्जा विभाजन एवं अनिवार्य न्यूनतम मेटाबॉलिक सीमा',
        interpretationText: 'बेसल मेटाबॉलिक रेट (BMR) पूर्ण विश्राम की स्थिति में जीवन बनाए रखने के लिए आवश्यक न्यूनतम ऊर्जा सीमा है। एलिया (1992) और गैलाघर एट अल (1998) के शोध के अनुसार, आंतरिक अंग शरीर के वजन के 6% से भी कम होने के बावजूद अधिकांश BMR का उपभोग करते हैं: यकृत (लिवर) ~20–22%, मस्तिष्क ~19–20%, कंकाल की मांसपेशियां ~20–22%, हृदय और गुर्दे ~15–17%, और अन्य ऊतक ~20–24%। अपने BMR से लगातार कम कैलोरी खाने से गंभीर मेटाबॉलिक मंदी (अडैप्टिव थर्मोजेनेसिस), थायरॉयड T3 हार्मोन में गिरावट और मांसपेशियों का क्षय होता है।',
        limitationsTitle: 'पूर्वानुमान सूत्रों में भिन्नता: मिफ्लिन बनाम कैच-मैकआर्डल',
        limitationsText: 'मिफ्लिन-सेंट जेओर फॉर्मूला सामान्य आबादी के लिए ±10% सटीक है। हालांकि, चूंकि वसा ऊतक (~4.5 कैलोरी/किग्रा/दिन) मांसपेशियों (~13 कैलोरी/किग्रा/दिन) की तुलना में बहुत कम सक्रिय है, इसलिए एथलीटों के लिए लीन बॉडी मास पर आधारित कैच-मैकआर्डल फॉर्मूला [BMR = 370 + (21.6 × लीन मास किग्रा)] अधिक सटीक परिणाम देता है।',
        medicalNoticeTitle: 'मेटाबॉलिक स्वास्थ्य एवं अंतःस्रावी सूचना',
        medicalNoticeText: 'यह BMR मान सामान्य थायरॉयड स्वास्थ्य वाले वयस्कों के लिए सांख्यिकीय अनुमान हैं। हाइपोथायरायडिज्म (कम मेटाबॉलिज्म) या हाइपरथायरायडिज्म (तेज मेटाबॉलिज्म) जैसी स्थितियां ऊर्जा व्यय को बदल देती हैं। अकारण वजन परिवर्तन या अत्यधिक थकान होने पर एंडोक्रिनोलॉजिस्ट से परामर्श लें।'
      }
    },

metabolic: {
      en: {
        domain: 'metabolic',
        sectionTitle: 'Energy Expenditure & Calorie Guide',
        sectionSubtitle: 'How your body burns calories at rest and during physical activity.',
        interpretationTitle: 'Mifflin-St Jeor Formula & Activity Multipliers',
        interpretationText: 'Your Basal Metabolic Rate (BMR) is the energy your body burns at complete rest. It powers vital organ functions like breathing, blood flow, and cell repair. Your Total Daily Energy Expenditure (TDEE) adds the calories you burn through movement and exercise. Eating at your maintenance level keeps your weight stable. Eating fewer calories creates a deficit for weight loss. Eating more calories supports muscle growth and weight gain.',
        limitationsTitle: 'Individual Differences in Calorie Formulas',
        limitationsText: 'Calorie formulas provide an estimate, typically within 10% to 15% of your true burn. Real metabolic rates vary from person to person. Genetics, muscle mass, age, and hormone levels all affect your daily calorie burn. Track your scale weight for three to four weeks. Then adjust your daily calorie intake based on your real-world progress.',
        medicalNoticeTitle: 'Nutritional Guidance Notice',
        medicalNoticeText: 'Calorie targets are educational estimates. Speak with a doctor or dietitian before starting a strict diet, especially if you have a medical condition.'
      },
      es: {
        domain: 'metabolic',
        sectionTitle: 'Gasto Energético y Calibración Metabólica',
        sectionSubtitle: 'Fundamentos científicos de la tasa metabólica basal y los factores de actividad.',
        interpretationTitle: 'Ecuación de Mifflin-St Jeor y Factores de Actividad',
        interpretationText: 'La Tasa Metabólica Basal (TMB) cuantifica la energía mínima que el cuerpo consume para mantener funciones vitales en reposo absoluto. El Gasto Energético Total Diario (TDEE) añade el gasto derivado de la actividad física mediante factores multiplicadores (1.2 a 1.725). Consumir las calorías de mantenimiento mantiene el peso estable.',
        limitationsTitle: 'Variabilidad Biológica en las Ecuaciones Predictivas',
        limitationsText: 'Las ecuaciones predictivas conllevan un margen de error fisiológico del ±10% al ±15%. Factores como la masa muscular magra, la función tiroidea y la termogénesis inducida por la dieta varían entre individuos. Ajuste su ingesta observando la tendencia de peso durante 3 o 4 semanas.',
        medicalNoticeTitle: 'Aviso Nutricional',
        medicalNoticeText: 'Estos cálculos son estimaciones educativas. Personas con trastornos metabólicos o endocrinos deben consultar a un dietista-nutricionista antes de realizar déficits calóricos significativos.'
      },
      fr: {
        domain: 'metabolic',
        sectionTitle: 'Dépense Énergétique et Étalonnage Métabolique',
        sectionSubtitle: 'Principes scientifiques du métabolisme de base et des coefficients d’activité.',
        interpretationTitle: 'Équation de Mifflin-St Jeor et Coefficients d’Activité',
        interpretationText: 'Le Métabolisme de Base (MB) correspond à l’énergie vitale nécessaire au fonctionnement des organes au repos absolu. La Dépense Énergétique Journalière (DEJ) intègre les coefficients d’activité (1,2 à 1,725). Un apport calorique équivalent à la DEJ permet de stabiliser le poids corporel.',
        limitationsTitle: 'Variabilité Biologique des Équations Prédictives',
        limitationsText: 'Les formules mathématiques comportent une marge de variation d’environ ±10 % à ±15 % par rapport à la calorimétrie indirecte. Le profil génétique, la fonction thyroïdienne et la masse musculaire influencent la dépense réelle. Suivez votre poids sur 3 à 4 semaines pour ajuster vos apports.',
        medicalNoticeTitle: 'Recommandation Diététique',
        medicalNoticeText: 'Ce résultat est une estimation informative. En cas de pathologie métabolique ou de troubles du comportement alimentaire, consultez un médecin ou un diététicien-nutritionniste.'
      },
      de: {
        domain: 'metabolic',
        sectionTitle: 'Energieverbrauch & Stoffwechsel-Kalibrierung',
        sectionSubtitle: 'Wissenschaftliche Grundlagen des Grundumsatzes und der Aktivitätsfaktoren.',
        interpretationTitle: 'Mifflin-St Jeor-Gleichung & Aktivitätsmultiplikatoren',
        interpretationText: 'Der Grundumsatz (BMR) beziffert die minimale Energiemenge, die der Organismus in völliger Ruhe zur Aufrechterhaltung der Vitalfunktionen benötigt. Der Gesamtenergiebedarf (TDEE) berücksichtigt zusätzlich den Lebensstil durch Aktivitätsfaktoren (1,2 bis 1,725). Bei ausgeglichener Kalorienzufuhr bleibt das Körpergewicht stabil.',
        limitationsTitle: 'Biologische Schwankungsbreite mathematischer Formeln',
        limitationsText: 'Prädiktive Formeln weisen eine natürliche biologische Abweichung von etwa ±10 % bis ±15 % auf. Muskelmasse, Schilddrüsenhormone und adaptive Thermogenese beeinflussen den tatsächlichen Verbrauch. Beobachten Sie Ihren Gewichtsverlauf über 3 bis 4 Wochen zur Feinjustierung.',
        medicalNoticeTitle: 'Ernährungsmedizinischer Hinweis',
        medicalNoticeText: 'Berechnete Kalorienwerte bieten eine rechnerische Richtschnur. Bei Stoffwechselerkrankungen oder Essstörungen sollte vor einer Ernährungsumstellung ärztlicher Rat eingeholt werden.'
      },
      ko: {
        domain: 'metabolic',
        sectionTitle: '에너지 소비량 및 대사율 산출 가이드',
        sectionSubtitle: '기초대사량 공식 및 신체 활동 계수의 과학적 산출 원리를 안내합니다.',
        interpretationTitle: 'Mifflin-St Jeor 공식과 일일 총 에너지 소비량(TDEE)',
        interpretationText: '기초대사량(BMR)은 생명 유지(호흡, 혈액 순환, 세포 재생)에 필요한 최소한의 안정 시 열량입니다. TDEE는 여기에 일상 활동 계수(1.2 ~ 1.725)를 곱하여 산출됩니다. 유지 칼로리만큼 섭취하면 체중이 안정적으로 유지됩니다.',
        limitationsTitle: '생리학적 예측 오차와 개인별 편차',
        limitationsText: '수학적 대사 방정식은 간접 열량 측정법 대비 통상 ±10% ~ ±15%의 예측 편차를 가집니다. 갑상선 호르몬 수치, 근육량 비율, 식후 열생성 등에 따라 실제 소비량이 달라지므로 3~4주간의 체중 변화 추이를 보며 섭취량을 미세 조정하는 것이 권장됩니다.',
        medicalNoticeTitle: '영양 상담 안내',
        medicalNoticeText: '본 수치는 교육용 가이드라인입니다. 대사 질환이나 식이 장애가 있는 경우 급격한 칼로리 제한 전에 공인 영양사 또는 내분비내과 전문의와 상담하세요.'
      },
      hi: {
        domain: 'metabolic',
        sectionTitle: 'ऊर्जा खपत एवं चयापचय गणना',
        sectionSubtitle: 'बेसल मेटाबोलिक दर और शारीरिक गतिविधि गुणक के वैज्ञानिक आधार।',
        interpretationTitle: 'मिफलिन-सेंट जियोर समीकरण और दैनिक ऊर्जा व्यय (TDEE)',
        interpretationText: 'बेसल मेटाबोलिक दर (BMR) शरीर के अंगों को सुचारू रखने के लिए आवश्यक न्यूनतम ऊर्जा है। दैनिक ऊर्जा व्यय (TDEE) में गतिविधि गुणक (1.2 से 1.725) शामिल होते हैं। अपने रखरखाव कैलोरी के बराबर खाने से वजन स्थिर रहता है।',
        limitationsTitle: 'पूर्वानुमान सूत्रों में शारीरिक भिन्नता',
        limitationsText: 'गणितीय सूत्रों में लगभग ±10% से ±15% की प्राकृतिक भिन्नता हो सकती है। मांसपेशी द्रव्यमान, थायरॉयड स्तर और व्यक्तिगत चयापचय वास्तविक खपत को प्रभावित करते हैं। सटीक आवश्यकता जानने के लिए 3 से 4 सप्ताह तक वजन के रुझान की निगरानी करें।',
        medicalNoticeTitle: 'पोषण सलाह अस्वीकरण',
        medicalNoticeText: 'यह गणना केवल शैक्षिक मार्गदर्शन के लिए है। किसी भी बड़े कैलोरी बदलाव से पहले योग्य पोषण विशेषज्ञ या डॉक्टर से सलाह लें।'
      }
    },
    bodycomp: {
      en: {
        domain: 'bodycomp',
        sectionTitle: 'Body Fat Measurement Methods & Anatomical Guide',
        sectionSubtitle: 'US Navy circumference method, DEXA scans, hydrostatic weighing, and measurement technique.',
        interpretationTitle: 'US Navy Circumference Method vs. Laboratory Standards (DEXA & Hydrostatic)',
        interpretationText: 'The US Navy circumference method (developed by Hodgdon and Beckett at the Naval Health Research Center in 1984) estimates body fat percentage using anatomical circumferences and height. By measuring the difference between the abdomen (waist) and the neck, the formula models body density (Db), which is then converted into fat percentage via the Siri equation. In validation trials against dual-energy X-ray absorptiometry (DEXA) and underwater hydrostatic weighing (the 4-compartment model), the US Navy method demonstrated a high correlation coefficient (r ≈ 0.85 to 0.90) with an average standard error of approximately 3% to 3.5% in typical active adults.',
        limitationsTitle: 'Standardized Tape Placement & Bioelectrical Impedance (BIA) Differences',
        limitationsText: 'Precision depends strictly on standardized anatomical tape placement: (1) Neck: Measured just inferior to the larynx (Adam’s apple) with tape perpendicular to the neck axis; (2) Waist for Men: Measured horizontally across the abdomen at the level of the umbilicus (navel) at the end of a normal exhalation; (3) Waist for Women: Measured at the narrowest torso point between ribs and iliac crest; (4) Hips for Women: Measured horizontally at the widest posterior protrusion of the buttocks. Unlike bioelectrical impedance analysis (BIA) scales, which fluctuate wildly based on recent hydration, caffeine, and food intake, circumference measurements remain impervious to fluid balance shifts.',
        medicalNoticeTitle: 'Cardiometabolic Risk & Body Composition Notice',
        medicalNoticeText: 'Body fat percentage is a far superior predictor of cardiometabolic health than scale weight or standard BMI alone, as it differentiates visceral and subcutaneous adiposity from metabolically protective lean tissue. For individuals with cardiovascular disease, hormonal disorders, or competitive athletic requirements, clinical DEXA scans provide the ultimate reference standard for regional fat distribution.'
      },
      es: {
        domain: 'bodycomp',
        sectionTitle: 'Métodos de Medición de Grasa Corporal y Guía Anatómica',
        sectionSubtitle: 'Método US Navy, densitometría DEXA, pesaje hidrostático y técnica de medición.',
        interpretationTitle: 'Método de la Marina de EE. UU. vs. Estándares de Laboratorio (DEXA e Hidrostático)',
        interpretationText: 'El método de perímetros de la Marina de EE. UU. (Hodgdon y Beckett, 1984) estima el porcentaje de grasa mediante perímetros corporales y estatura. Relacionando la diferencia abdomen-cuello, la ecuación modela la densidad corporal (Db) para derivar la grasa mediante la fórmula de Siri. Frente al pesaje hidrostático y la absorciometría DEXA, presenta una correlación de r ≈ 0.85 a 0.90 con un error estándar de solo 3% a 3.5%.',
        limitationsTitle: 'Ubicación Anatómica de la Cinta y Diferencias con Bioimpedancia (BIA)',
        limitationsText: 'La precisión requiere ubicar la cinta rigurosamente: (1) Cuello: justo debajo de la manzana de Adán; (2) Cintura hombres: horizontal a nivel del ombligo tras una espiración normal; (3) Cintura mujeres: en el punto más estrecho del torso; (4) Caderas mujeres: en la máxima prominencia glútea. A diferencia de las básculas de bioimpedancia (BIA), que oscilan con la hidratación o el café, el método de perímetros no se altera por fluctuaciones de líquidos.',
        medicalNoticeTitle: 'Aviso sobre Riesgo Cardiometabólico y Composición Corporal',
        medicalNoticeText: 'El porcentaje de grasa corporal predice el riesgo metabólico con mayor exactitud que el peso o el IMC al aislar la grasa visceral. Para deportistas de élite o patologías metabólicas, el escaneo DEXA hospitalario constituye el estándar de referencia absoluto.'
      },
      fr: {
        domain: 'bodycomp',
        sectionTitle: 'Méthodes de Mesure de Graisse Corporelle et Repères Anatomiques',
        sectionSubtitle: 'Méthode US Navy, absorptiométrie DEXA, pesée hydrostatique et technique de mesure.',
        interpretationTitle: 'Méthode US Navy vs Standards de Laboratoire (DEXA et Pesée Hydrostatique)',
        interpretationText: 'La méthode anthropométrique de l’US Navy (Hodgdon et Beckett, 1984) évalue le taux de masse grasse à partir des circonférences et de la taille. En confrontant l’abdomen au cou, l’équation modélise la densité corporelle (Db) convertie par la formule de Siri. Face à la pesée hydrostatique et au scanner DEXA, elle démontre une excellente corrélation (r ≈ 0,85 à 0,90) avec un écart moyen de 3 à 3,5 % chez l’adulte.',
        limitationsTitle: 'Repères Anatomiques du Ruban et Différences avec l’Impédancemétrie (BIA)',
        limitationsText: 'La précision exige une pose anatomique rigoureuse : (1) Cou : immédiatement sous la pomme d’Adam ; (2) Taille homme : horizontalement au niveau du nombril en fin d’expiration normale ; (3) Taille femme : au niveau le plus étroit du buste ; (4) Hanches femme : à la circonférence fessière maximale. Contrairement aux balances à impédancemétrie (BIA) sensibles à l’eau et au café, les mesures au ruban ne subissent pas les variations hydriques immédiates.',
        medicalNoticeTitle: 'Avis Médical sur la Composition Corporelle',
        medicalNoticeText: 'Le pourcentage de masse grasse reflète le profil cardiométabolique bien plus fidèlement que le simple IMC. Pour les sportifs d’élite ou le suivi médicalisé, l’ostéodensitométrie DEXA hospitalière demeure la référence absolue.'
      },
      de: {
        domain: 'bodycomp',
        sectionTitle: 'Körperfett-Messmethoden & Anatomischer Leitfaden',
        sectionSubtitle: 'US-Navy-Methode, DEXA-Scans, hydrostatisches Wiegen und Messtechnik.',
        interpretationTitle: 'US-Navy-Umfangsmethode vs. Laborstandards (DEXA & Hydrostatik)',
        interpretationText: 'Die US-Navy-Methode (Hodgdon & Beckett, 1984) schätzt den Körperfettanteil über anatomische Umfangsmaße und Körpergröße. Über die Differenz von Bauch- und Nackenumfang berechnet die Formel die Körperdichte (Db), welche über die Siri-Gleichung in Körperfett umgerechnet wird. In Vergleichsstudien mit DEXA und hydrostatischem Wiegen erreicht die Methode eine Korrelation von r ≈ 0,85 bis 0,90 bei einem Standardfehler von 3 % bis 3,5 %.',
        limitationsTitle: 'Anatomische Maßband-Platzierung & Abgrenzung zur Bioimpedanz (BIA)',
        limitationsText: 'Exakte Ergebnisse erfordern standardisierte Messpunkte: (1) Nacken: unmittelbar unterhalb des Kehlkopfs; (2) Taille Männer: horizontal auf Nabelhöhe nach normaler Ausatmung; (3) Taille Frauen: an der schmalsten Stelle des Rumpfes; (4) Hüfte Frauen: an der breitesten Stelle des Gesäßes. Im Gegensatz zu Bioimpedanz-Waagen (BIA), die stark auf Kaffeekonsum oder Flüssigkeitsschwankungen reagieren, bleiben Umfangsmessungen unbeeinflusst vom akuten Wasserhaushalt.',
        medicalNoticeTitle: 'Klinischer Hinweis zu Kardiometabolischem Risiko',
        medicalNoticeText: 'Der prozentuale Körperfettanteil liefert eine überlegene Aussagekraft gegenüber dem bloßen Skalengewicht oder Standard-BMI. Für klinische Fragestellungen oder Leistungssportler bietet der DEXA-Scan die höchste diagnostische Präzision.'
      },
      ko: {
        domain: 'bodycomp',
        sectionTitle: '체지방률 측정 방식 비교 및 인체 계측 임상 가이드',
        sectionSubtitle: '미 해군(US Navy) 둘레 측정법, DEXA 스캔, 수중 체밀도법 및 정밀 측정 위치 안내.',
        interpretationTitle: '미 해군(US Navy) 둘레법 대 정밀 검사(DEXA 및 수중 체밀도법) 비교',
        interpretationText: '미 해군 체지방 측정법(1984년 해군 건강연구센터 Hodgdon & Beckett 개발)은 신체 둘레와 신장을 이용하여 체지방률을 추정합니다. 복부(허리)와 목둘레의 비율 차이를 통해 신체 밀도(Db)를 산출하고 이를 Siri 공식에 대입하여 최종 체지방률을 구합니다. 4구획 모델 표준인 수중 체밀도법 및 임상 DEXA 스캔과의 상관계수는 r ≈ 0.85~0.90에 달하며 평균 표준 오차는 3%~3.5% 수준으로 매우 신뢰성이 높습니다.',
        limitationsTitle: '해부학적 표준 측정 부위 및 생체전기임피던스(BIA) 인바디와의 차이',
        limitationsText: '정확한 측정을 위해 엄격한 부위 선정이 필수적입니다: (1) 목둘레: 목젖(후두 융기) 바로 아랫부분을 수평 측정; (2) 남성 허리둘레: 숨을 편안히 내쉰 상태에서 배꼽 높이 수평 측정; (3) 여성 허리둘레: 갈비뼈와 골반 사이 가장 잘록한 부위; (4) 여성 엉덩이둘레: 둔부의 가장 넓은 돌출 부위. 체내 수분량, 염분 섭취, 카페인에 따라 수치가 요동치는 가정용 BIA 체지방계와 달리, 줄자 둘레법은 단기 수분 변동에 영향을 받지 않습니다.',
        medicalNoticeTitle: '심장대사 위험도 및 체성분 평가 안내',
        medicalNoticeText: '체지방률은 체중이나 표준 BMI보다 심혈관 및 대사 질환 위험을 훨씬 정확하게 반영합니다. 내장지방과 피하지방의 정밀 구분이 필요한 환자나 엘리트 선수는 병원 DEXA 검사를 통해 정밀 체조직 분포를 확인하십시오.'
      },
      hi: {
        domain: 'bodycomp',
        sectionTitle: 'बॉडी फैट मापन विधियां एवं शारीरिक गाइड',
        sectionSubtitle: 'अमेरिकी नौसेना विधि, डेक्सा (DEXA) स्कैन, हाइड्रोस्टैटिक वजन और सटीक नाप तकनीक।',
        interpretationTitle: 'अमेरिकी नौसेना विधि बनाम प्रयोगशाला मानक (DEXA और हाइड्रोस्टैटिक)',
        interpretationText: 'अमेरिकी नौसेना परिधि विधि (हॉजडन और बेकेट, 1984) शारीरिक परिधियों और ऊंचाई का उपयोग करके बॉडी फैट का सटीक अनुमान लगाती है। पेट और गर्दन के अनुपात से शारीरिक घनत्व (Db) की गणना होती है, जिसे सिरी समीकरण द्वारा वसा प्रतिशत में बदला जाता है। अस्पताल के डेक्सा स्कैन और पानी के अंदर वजन मापने की तकनीकों के मुकाबले यह विधि 85% से 90% सटीक बैठती है (मानक त्रुटि केवल 3% से 3.5%)।',
        limitationsTitle: 'फीते का सही शारीरिक स्थान एवं बायोइम्पीडेंस (BIA) से अंतर',
        limitationsText: 'सटीक परिणाम के लिए फीते का सही स्थान आवश्यक है: (1) गर्दन: एडम्स एप्पल के ठीक नीचे; (2) पुरुष कमर: सामान्य सांस छोड़ने के बाद नाभि के स्तर पर क्षैतिज; (3) महिला कमर: पसलियों और कूल्हे के बीच सबसे संकरा भाग; (4) महिला कूल्हे: नितंबों का सबसे चौड़ा भाग। बायोइम्पीडेंस (BIA) मशीनों के विपरीत जो पानी या कॉफी पीने से बदल जाती हैं, फीते की नाप तात्कालिक पानी के उतार-चढ़ाव से अप्रभावित रहती है।',
        medicalNoticeTitle: 'हृदय एवं चयापचय स्वास्थ्य सूचना',
        medicalNoticeText: 'बॉडी फैट प्रतिशत तराजू के वजन या बीएमआई की तुलना में आंतरिक स्वास्थ्य का बहुत बेहतर सूचक है। चिकित्सीय आवश्यकताओं या पेशेवर एथलीटों के लिए अस्पताल का डेक्सा स्कैन अंतिम स्वर्ण मानक है।'
      }
    },
    cardio: {
      en: {
        domain: 'cardio',
        sectionTitle: 'Cardiovascular Training Bands & Intensity Guide',
        sectionSubtitle: 'How to utilize target exertion levels for safe and effective aerobic conditioning.',
        interpretationTitle: 'Training Intensity & The Karvonen Method',
        interpretationText: 'Pacing zones help you exercise at the right intensity for your fitness goals. Lower zones improve aerobic endurance, fat oxidation, and vascular conditioning. Higher zones build anaerobic power and speed. The Karvonen formula factors in your resting pulse, yielding a more personalized workout window than basic age formulas.',
        limitationsTitle: 'Physiological Factors Affecting Pulse',
        limitationsText: 'Age-predicted maximums provide a baseline, but individual peak readings vary by 10 to 12 beats per minute. Medications (such as beta-blockers), caffeine, hydration, heat, and stress all change exertion pulse. Always listen to your body and moderate pace if you experience lightheadedness or excessive breathlessness.',
        medicalNoticeTitle: 'Cardiovascular Safety Notice',
        medicalNoticeText: 'Speak with your doctor before starting vigorous cardio workouts, especially if you have high blood pressure, heart disease, or chest discomfort.'
      },
      es: {
        domain: 'cardio',
        sectionTitle: 'Interpretación de Zonas Cardiorrespiratorias y Frecuencia Cardíaca',
        sectionSubtitle: 'Cómo interpretar la frecuencia cardíaca de reserva (FCR) y las intensidades aeróbicas.',
        interpretationTitle: 'Principios de Frecuencia Cardíaca Objetivo y Fórmula de Karvonen',
        interpretationText: 'Las zonas de frecuencia cardíaca objetivo—calculadas mediante la fórmula estándar de Fox o el método de Reserva Cardíaca de Karvonen—establecen las intensidades de entrenamiento aeróbico, umbral de lactato y anaeróbico. El método de Karvonen incorpora la frecuencia en reposo para una calibración personalizada.',
        limitationsTitle: 'Variabilidad Cardíaca y Límites Fisiológicos',
        limitationsText: 'Las fórmulas de pulso máximo teórico presentan una desviación estándar de ±10 a ±12 latidos por minuto. Factores como fármacos betabloqueantes, cafeína, temperatura ambiente y fatiga modifican de forma directa la respuesta del miocardio.',
        medicalNoticeTitle: 'Aviso de Apto Médico y Salud Cardiovascular',
        medicalNoticeText: 'Consulte a su médico o cardiólogo antes de iniciar entrenamientos cardiovasculares de alta intensidad, especialmente ante antecedentes de hipertensión o cardiopatías.'
      },
      fr: {
        domain: 'cardio',
        sectionTitle: 'Interprétation des Zones Cardiorespiratoires et Fréquence Cardiaque',
        sectionSubtitle: 'Comprendre la fréquence cardiaque de réserve (FCR) et les plages d’effort aérobie.',
        interpretationTitle: 'Principes des Fréquences Cibles et de la Formule de Karvonen',
        interpretationText: 'Les zones de fréquence cardiaque cible—calculées selon la formule classique de Fox ou la méthode de réserve de Karvonen—définissent les filières aérobie, le seuil lactique et la filière anaérobie. L’intégration de la fréquence cardiaque au repos affine l’adaptation au niveau d’endurance individuel.',
        limitationsTitle: 'Variations Physiologiques et Écarts de Formule',
        limitationsText: 'La fréquence cardiaque maximale estimée comporte un écart-type naturel de ±10 à ±12 battements par minute. La prise de bêtabloquants, la caféine, la déshydratation et la chaleur influencent sensiblement la cinétique cardiaque.',
        medicalNoticeTitle: 'Avis Médical et Dépistage Cardiovasculaire',
        medicalNoticeText: 'Demandez l’avis d’un cardiologue ou médecin du sport avant d’entreprendre des séances d’endurance fractionnée intense, particulièrement en cas d’antécédents d’arythmie ou d’hypertension.'
      },
      de: {
        domain: 'cardio',
        sectionTitle: 'Interpretation von Herzfrequenzzonen & Kardiophysiologie',
        sectionSubtitle: 'Trainingspulsbereiche, Herzfrequenzreserve (HFR) und aerobe Belastungsstufen verstehen.',
        interpretationTitle: 'Zielherzfrequenz & Karvonen-Formel-Grundsätze',
        interpretationText: 'Trainingspulszonen—berechnet nach der Standardformel von Fox oder der differenzierten Karvonen-Herzfrequenzreserve-Methode—strukturieren das Grundlagenausdauer-, Schwellen- und Spitzenbelastungstraining. Der Einbezug des Ruhepulses bei Karvonen berücksichtigt den individuellen Trainingszustand.',
        limitationsTitle: 'Kardiologische Streubreite & Einflussfaktoren',
        limitationsText: 'Formeln zur maximalen Herzfrequenz unterliegen einer statistischen Streuung von ca. ±10 bis ±12 Schlägen pro Minute. Medikamentöse Einflüsse (z. B. Betablocker), Dehydratation, Umgebungshitze und Ermüdung verändern die Herzreaktion deutlich.',
        medicalNoticeTitle: 'Sportkardiologischer Beratungshinweis',
        medicalNoticeText: 'Holen Sie vor Beginn hochintensiver Ausdauereinheiten ärztlichen Rat ein, vor allem bei bestehendem Bluthochdruck oder kardiovaskulären Vorerkrankungen.'
      },
      ko: {
        domain: 'cardio',
        sectionTitle: '심폐 지구력 및 목표 심박수 존 해석 가이드',
        sectionSubtitle: '여유 심박수(HRR), 유산소 운동 강도 및 카르보넨(Karvonen) 공식 분석 기준입니다.',
        interpretationTitle: '목표 심박수 구간과 카르보넨 공식 원리',
        interpretationText: 'Fox 220-연령 공식과 Karvonen 여유 심박수 공식은 유산소 지구력, 젖산 역치 및 고강도 인터벌 훈련 구간을 정밀하게 설정합니다. 특히 카르보넨 방식은 안정 시 심박수를 반영하여 개인의 심폐 체력 수준에 맞춘 최적 훈련 범위를 제공합니다.',
        limitationsTitle: '심박수 생리적 편차 및 공식 한계',
        limitationsText: '연령 기반 최대 심박수 예측치는 개인별로 약 ±10~12 bpm의 생리적 편차를 보입니다. 혈압 조절제(베타차단제) 복용, 카페인 섭취, 탈수, 피로도 및 환경 온도에 따라 심장 박동 반응이 크게 달라집니다.',
        medicalNoticeTitle: '심혈관 건강 및 운동 전 의학적 확인',
        medicalNoticeText: '고강도 인터벌 러닝이나 심폐 지구력 훈련을 시작하기 전, 특히 고혈압이나 심혈관 질환 병력이 있는 경우 순환기내과 전문의 상담을 권장합니다.'
      },
      hi: {
        domain: 'cardio',
        sectionTitle: 'हृदय गति क्षेत्र एवं कार्डियोरेस्पिरेटरी व्याख्या',
        sectionSubtitle: 'हार्ट रेट रिजर्व (HRR), एरोबिक फिटनेस और कार्वोनेन ज़ोन को समझें।',
        interpretationTitle: 'लक्षित हृदय गति और कार्वोनेन सूत्र के सिद्धांत',
        interpretationText: 'लक्षित हृदय गति क्षेत्र—फॉक्स 220-आयु समीकरण या कार्वोनेन हार्ट रेट रिजर्व (HRR) पद्धति द्वारा निर्धारित—एरोबिक सहनशक्ति और एनारोबिक थ्रेशोल्ड को परिभाषित करते हैं। कार्वोनेन फॉर्मूला आराम की हृदय गति (RHR) को जोड़कर व्यक्तिगत कार्डियो स्तर के अनुसार सटीक सीमा प्रदान करता है।',
        limitationsTitle: 'हृदय गति में शारीरिक विभिन्नताएं व सीमाएं',
        limitationsText: 'आयु-आधारित अधिकतम हृदय गति अनुमान में ±10 से ±12 धड़कन प्रति मिनट का प्राकृतिक अंतर हो सकता है। दवाएं (जैसे बीटा-ब्लॉकर्स), कैफीन, डिहाइड्रेशन और थकान हृदय की धड़कन पर सीधा असर डालते हैं।',
        medicalNoticeTitle: 'हृदय स्वास्थ्य डॉक्टरी परामर्श चेतावनी',
        medicalNoticeText: 'तीव्र कार्डियो या एरोबिक प्रशिक्षण शुरू करने से पहले चिकित्सक से परामर्श लें, खासकर यदि उच्च रक्तचाप या हृदय रोग का इतिहास रहा हो।'
      }
    },
    strength: {
      en: {
        domain: 'strength',
        sectionTitle: 'Muscular Strength & 1RM Guide',
        sectionSubtitle: 'How to estimate your one-rep max and plan safe training weights.',
        interpretationTitle: 'What One-Rep Max (1RM) Means',
        interpretationText: 'Your One-Rep Max (1RM) is the heaviest weight you can lift for one clean repetition on key compound lifts—including the Bench Press, Back Squat, Deadlift, and Overhead Press. Validated formulas like Epley, Brzycki, and Lander estimate this max from submaximal sets of 2 to 10 reps, protecting your joints and ligaments while providing precise loading percentages for Hypertrophy (75–85%) and Maximal Strength (85–100%).',
        limitationsTitle: 'Best Repetition Ranges for Accuracy',
        limitationsText: 'Formulas are most accurate when you test between 2 and 6 reps. Sets with more than 10 reps measure muscle stamina rather than pure strength. This can make the estimated 1RM less reliable.',
        medicalNoticeTitle: 'Lifting Safety & Spotter Notice',
        medicalNoticeText: 'Warm up thoroughly before lifting heavy weights. Always use safety pins or a spotter on bench presses and squats. Stop lifting if you feel sharp pain.'
      },
      es: {
        domain: 'strength',
        sectionTitle: 'Guía de Fuerza Muscular y Estimación de 1RM',
        sectionSubtitle: 'Interpretación de repetición máxima, fórmulas submáximas y porcentajes de carga.',
        interpretationTitle: 'Principios de Repetición Máxima (1RM)',
        interpretationText: 'La Repetición Máxima (1RM) define la mayor carga que puedes mover en una sola repetición en los levantamientos fundamentales: press de banca, sentadilla, peso muerto y press militar. Ecuaciones como Epley, Brzycki y Lander estiman este valor a partir de series submáximas de 2 a 10 repeticiones, permitiendo programar rangos de hipertrofia (75–85%) y fuerza máxima (85–100%) sin riesgo de lesión articular.',
        limitationsTitle: 'Rangos de Repeticiones y Límites Mecánicos',
        limitationsText: 'Las fórmulas de 1RM ofrecen alta precisión cuando la serie se completa entre 2 y 10 repeticiones hasta el fallo técnico. Con más de 10 repeticiones, la resistencia muscular y la fatiga glucolítica distorsionan la estimación del peso máximo.',
        medicalNoticeTitle: 'Seguridad en Entrenamiento de Fuerza',
        medicalNoticeText: 'Realice un calentamiento articular adecuado y cuente con la asistencia de observadores (spotters) o soportes de seguridad al levantar cargas elevadas.'
      },
      fr: {
        domain: 'strength',
        sectionTitle: 'Guide de Force Musculaire et Évaluation du 1RM',
        sectionSubtitle: 'Interprétation de la répétition maximale, des formules d’extrapolation et des pourcentages de charge.',
        interpretationTitle: 'Principes de la Répétition Maximale (1RM)',
        interpretationText: 'Le 1RM correspond à la charge maximale qu’un groupe musculaire peut soulever sur une seule répétition complète. Les équations de Brzycki, Epley et Lander permettent de déduire cette valeur à partir de séries submédianes, réduisant le risque de blessure lié aux tests maximaux directs.',
        limitationsTitle: 'Plages de Répétitions et Tolérances Biomécaniques',
        limitationsText: 'Les formules prédictives restent fiables pour des séries de 2 à 10 répétitions menées jusqu’à l’échec technique. Au-delà de 10 répétitions, l’endurance musculaire locale et la fatigue métabolique faussent significativement l’estimation de la force pure.',
        medicalNoticeTitle: 'Consignes de Sécurité en Musculation',
        medicalNoticeText: 'Utilisez systématiquement des barres de sécurité et la présence d’un pareur lors de charges lourdes. Cessez l’exercice en cas de douleur articulaire anormale.'
      },
      de: {
        domain: 'strength',
        sectionTitle: 'Maximalkraft-Leitfaden & 1RM-Berechnung',
        sectionSubtitle: 'Einordnung von Maximalkraftwerten, Wiederholungsformeln und Trainingslasten.',
        interpretationTitle: 'Grundsätze des Ein-Wiederholungs-Maximums (1RM)',
        interpretationText: 'Das 1RM definiert das maximale Gewicht, das ein Muskel bei einmaliger sauberer Ausführung bewältigen kann. Mathematische Näherungsverfahren (wie Brzycki, Epley und Lander) errechnen diesen Spitzenwert aus submaximalen Sätzen und senken so das Verletzungsrisiko gegenüber Maximalversuchen.',
        limitationsTitle: 'Wiederholungsbereiche & Biomechanische Grenzen',
        limitationsText: 'Die 1RM-Schätzformeln besitzen die höchste Genauigkeit im Bereich von 2 bis 10 Wiederholungen bis zur technischen Ermüdung. Bei mehr als 10 Wiederholungen verfälschen Kraftausdauer und metabolische Ermüdung das Ergebnis zunehmend.',
        medicalNoticeTitle: 'Sicherheitshinweis für das Krafttraining',
        medicalNoticeText: 'Achten Sie bei schweren Grundübungen auf saubere Technik, angemessenes Aufwärmen und den Einsatz von Sicherheitsablagen oder Trainingspartnern (Spottern).'
      },
      ko: {
        domain: 'strength',
        sectionTitle: '근력 측정 및 1RM 최대 중량 가이드',
        sectionSubtitle: '1회 최대 중량(1RM), 서브맥시멀 반복 공식 및 부하 비율 해석입니다.',
        interpretationTitle: '1RM(One-Repetition Maximum) 산출 원리',
        interpretationText: '1RM은 특정 근육군이 단 1회 완벽한 자세로 들어올릴 수 있는 최대 외부 중량을 의미합니다. Brzycki, Epley, Lander 공식 등은 다중 반복(서브맥시멀) 세트 결과를 기반으로 1RM을 추정하여, 무리한 최고 중량 시도로 인한 부상 위험을 최소화합니다.',
        limitationsTitle: '반복 횟수 구간 및 역학적 오차',
        limitationsText: '1RM 예측 공식은 기술적 한계점까지 2회~10회 반복한 세트에서 가장 높은 정확도를 보입니다. 10회를 초과하는 고반복 세트에서는 근지구력 및 근섬유 조성 비율에 따른 개인차가 커져 최대 근력 추정치에 오차가 발생합니다.',
        medicalNoticeTitle: '중량 리프팅 안전 수칙 안내',
        medicalNoticeText: '고중량 웨이트 트레이닝 시 충분한 관절 웜업을 시행하고 안전 바(Safety Pin) 또는 보조자(Spotter)를 반드시 확보하세요. 급성 관절 통증 발생 시 즉시 중단해야 합니다.'
      },
      hi: {
        domain: 'strength',
        sectionTitle: 'मांसपेशीय शक्ति एवं 1RM आकलन गाइड',
        sectionSubtitle: 'अधिकतम भार क्षमता (1RM), रिपीटीशन फॉर्मूले और लिफ्टिंग प्रतिशत की व्याख्या।',
        interpretationTitle: 'वन-रिपीटीशन मैक्सिमम (1RM) के सिद्धांत',
        interpretationText: '1RM वह अधिकतम भार है जिसे कोई मांसपेशी समूह सटीक तकनीक के साथ केवल एक बार उठा सकता है। ब्रज़िकी, एपले और लैंडर समीकरण सब-मैक्सिमल रेप्स के आधार पर सुरक्षित रूप से 1RM का अनुमान लगाते हैं, जिससे सीधे भारी वजन उठाने के चोट जोखिम से बचा जा सकता है।',
        limitationsTitle: 'रिपीटीशन सीमा एवं यांत्रिक सीमाएं',
        limitationsText: '1RM फॉर्मूले 2 से 10 रिपीटीशन के बीच सबसे सटीक परिणाम देते हैं। 10 से अधिक रेप्स होने पर मांसपेशियों की सहनशक्ति और थकान के कारण अधिकतम भार का अनुमान कम सटीक हो जाता है।',
        medicalNoticeTitle: 'स्ट्रेंथ ट्रेनिंग सुरक्षा सावधानी',
        medicalNoticeText: 'भारी वजन उठाते समय हमेशा उचित वॉर्म-अप करें, सेफ्टी पिन का उपयोग करें और सहायक (स्पॉटर) की उपस्थिति सुनिश्चित करें।'
      }
    },
    diabetes: {
      en: {
        domain: 'specialty',
        sectionTitle: 'Type 2 Diabetes Screening Guide',
        sectionSubtitle: 'Understanding lifestyle risk factors, statistical scores, and medical testing limits.',
        interpretationTitle: 'What This Risk Score Estimates',
        interpretationText: 'This calculator estimates statistical risk for Type 2 Diabetes using key lifestyle and physical markers. It evaluates your age, BMI, waist circumference, and activity habits. A higher score means a greater statistical chance of insulin resistance or elevated blood sugar over time.',
        limitationsTitle: 'Important Screening Limits',
        limitationsText: 'This online score is a lifestyle screening guide, not a medical test. It cannot measure your blood sugar directly. Many people with prediabetes have no symptoms at all. You can have elevated blood sugar even with a lower risk score.',
        medicalNoticeTitle: 'Clinical Diagnosis Notice',
        medicalNoticeText: 'Only a doctor can diagnose prediabetes or Type 2 Diabetes using laboratory blood tests, such as fasting blood sugar or an HbA1c test. If your score is moderate or high, schedule a routine checkup with your healthcare provider.'
      },
      es: {
        domain: 'specialty',
        sectionTitle: 'Guía de Cribado de Diabetes Tipo 2',
        sectionSubtitle: 'Comprensión de factores de riesgo, puntuaciones estadísticas y límites del cribado.',
        interpretationTitle: 'Qué Estima esta Puntuación de Riesgo',
        interpretationText: 'Esta calculadora evalúa factores de riesgo estadísticos de diabetes tipo 2 usando indicadores físicos y hábitos de vida. Analiza la edad, el IMC, el perímetro de cintura y la actividad física.',
        limitationsTitle: 'Límites Importantes del Cribado',
        limitationsText: 'Esta puntuación es una guía orientativa de estilo de vida, no una prueba médica. No mide la glucosa en sangre. Muchas personas con prediabetes no presentan ningún síntoma visible.',
        medicalNoticeTitle: 'Aviso de Diagnóstico Médico',
        medicalNoticeText: 'Solo un médico colegiado puede diagnosticar prediabetes o diabetes tipo 2 mediante análisis de laboratorio, como glucosa en ayunas o hemoglobina glicosilada (HbA1c).'
      },
      fr: {
        domain: 'specialty',
        sectionTitle: 'Guide de Dépistage du Diabète de Type 2',
        sectionSubtitle: 'Comprendre les facteurs de risque, les scores statistiques et les limites médicales.',
        interpretationTitle: 'Ce que Mesure ce Score de Risque',
        interpretationText: 'Ce calculateur évalue les facteurs de risque statistiques du diabète de type 2 en fonction de votre âge, de votre IMC, de votre tour de taille et de votre niveau d\'activité physique.',
        limitationsTitle: 'Limites Importantes du Dépistage',
        limitationsText: 'Ce score est un repère éducatif sur le mode de vie et non un test médical. Il ne mesure pas directement la glycémie. De nombreuses personnes prédiabétiques ne présentent aucun symptôme apparent.',
        medicalNoticeTitle: 'Avis Médical et Diagnostic',
        medicalNoticeText: 'Seul un médecin peut diagnostiquer un prédiabète ou un diabète de type 2 au moyen d\'analyses sanguines de laboratoire (glycémie à jeun ou test d\'HbA1c).'
      },
      de: {
        domain: 'specialty',
        sectionTitle: 'Leitfaden zum Typ-2-Diabetes-Screening',
        sectionSubtitle: 'Risikofaktoren, statistische Einschätzungen und medizinische Grenzen verstehen.',
        interpretationTitle: 'Was dieser Risikoscore bewertet',
        interpretationText: 'Dieser Rechner ermittelt statistische Risikofaktoren für Typ-2-Diabetes anhand von Alter, BMI, Taillenumfang und körperlicher Aktivität. Ein höherer Wert weist auf eine statistisch erhöhte Wahrscheinlichkeit für Insulinresistenz hin.',
        limitationsTitle: 'Wichtige Grenzen des Screenings',
        limitationsText: 'Dieser Score ist ein Orientierungswert und kein medizinischer Test. Er misst den Blutzucker nicht direkt. Viele Menschen mit Prädiabetes zeigen keinerlei spürbare Symptome.',
        medicalNoticeTitle: 'Hinweis zur Ärztlichen Diagnose',
        medicalNoticeText: 'Ausschließlich ein Arzt kann Prädiabetes oder Typ-2-Diabetes durch standardisierte Laborblutuntersuchungen (z. B. Nüchternblutzucker oder HbA1c-Wert) diagnostizieren.'
      },
      ko: {
        domain: 'specialty',
        sectionTitle: '제2형 당뇨병 위험 선별 안내',
        sectionSubtitle: '생활습관 위험 요인, 통계적 점수 및 의학적 검사의 한계점을 안내합니다.',
        interpretationTitle: '본 위험 점수가 추정하는 내용',
        interpretationText: '이 계산기는 연령, BMI, 허리둘레 및 신체 활동량을 바탕으로 제2형 당뇨병의 통계적 위험 요인을 평가합니다. 점수가 높을수록 인슐린 저항성 발생 위험이 통계적으로 높음을 의미합니다.',
        limitationsTitle: '주요 선별 검사 한계점',
        limitationsText: '본 온라인 점수는 생활습관 스크리닝 도구이며 의학적 진단 검사가 아닙니다. 혈당을 직접 측정하지 않으며, 전당뇨 단계에서는 겉으로 드러나는 증상이 전혀 없을 수 있습니다.',
        medicalNoticeTitle: '임상 진단 관련 안내',
        medicalNoticeText: '전당뇨 및 제2형 당뇨병의 확진은 전문의를 통한 공복 혈당 검사 또는 당화혈색소(HbA1c) 혈액 검사를 통해서만 가능합니다.'
      },
      hi: {
        domain: 'specialty',
        sectionTitle: 'टाइप 2 डायबिटीज स्क्रीनिंग गाइड',
        sectionSubtitle: 'जोखिम कारकों, सांख्यिकीय स्कोर और चिकित्सीय सीमाओं की समझ।',
        interpretationTitle: 'यह जोखिम स्कोर क्या अनुमानित करता है',
        interpretationText: 'यह कैलकुलेटर आयु, बीएमआई, कमर की परिधि और गतिविधि स्तर के आधार पर टाइप 2 डायबिटीज के सांख्यिकीय जोखिम का आकलन करता है। उच्च स्कोर समय के साथ इंसुलिन प्रतिरोध की उच्च संभावना दर्शाता है।',
        limitationsTitle: 'स्क्रीनिंग की महत्वपूर्ण सीमाएं',
        limitationsText: 'यह स्कोर केवल एक सामान्य जीवनशैली मार्गदर्शिका है, कोई चिकित्सीय परीक्षण नहीं। यह सीधे ब्लड शुगर नहीं मापता। प्रीडायबिटीज वाले कई व्यक्तियों में कोई लक्षण दिखाई नहीं देते।',
        medicalNoticeTitle: 'नैदानिक परीक्षण सूचना',
        medicalNoticeText: 'केवल पंजीकृत चिकित्सक ही फास्टिंग ब्लड ग्लूकोज या HbA1c रक्त परीक्षण द्वारा प्रीडायबिटीज या डायबिटीज का वास्तविक निदान कर सकते हैं।'
      }
    },
    pregnancy: {
      en: {
        domain: 'pregnancy',
        sectionTitle: 'Pregnancy Trimester Trajectory & Clinical Guidelines',
        sectionSubtitle: 'Evidence-based weight milestones, essential prenatal micronutrients, and clinical safety triggers.',
        interpretationTitle: 'Gestational Weight Gain Milestones & Energy Demands',
        interpretationText: 'Gestational weight accumulation is not uniform across all 40 weeks. During the first trimester (weeks 1–12), fetal growth requires minimal additional energy (0 extra kcal/day), with typical maternal gain of 0.5 to 2.0 kg (1–4.5 lbs) primarily from expanding blood volume and uterine tissue. During the second trimester (weeks 13–27), caloric requirements increase by approximately +340 kcal/day, supporting steady gain of ~0.42 kg (0.9 lbs) per week for normal BMI. In the third trimester (weeks 28–40), rapid fetal fat deposition and lung maturation demand +450 kcal/day with continued steady gain. Key micronutrient priorities include Folic Acid (400–600 mcg/day for neural tube defect prevention), Elemental Iron (27 mg/day for maternal hemoglobin expansion), Calcium (1,000 mg/day for fetal skeletal ossification), Choline (450 mg/day for neurodevelopment), and daily hydration of 2.5 to 3.0 liters.',
        limitationsTitle: 'Clinical Warning Triggers, Preeclampsia & Red Flags',
        limitationsText: 'Gestational weight targets are guidelines for singleton pregnancies, not rigid prescriptions. High-priority clinical red flags require immediate obstetric evaluation: (1) Rapid sudden weight gain of greater than 1 kg (2.2 lbs) in a single week during the 2nd or 3rd trimester, especially when accompanied by face or hand edema, severe headaches, or visual disturbances—a cardinal warning sign for preeclampsia; (2) Persistent weight loss or inability to maintain baseline weight due to severe nausea/vomiting (hyperemesis gravidarum), which carries risks of intrauterine growth restriction (IUGR); and (3) Atypical glucose tolerance, warranting gestational diabetes mellitus (GDM) oral screening routinely between weeks 24 and 28. Always consult your OB-GYN or certified midwife for individualized clinical monitoring.',
        medicalNoticeTitle: 'Obstetric & Prenatal Health Notice',
        medicalNoticeText: 'This calculator is an educational tracking reference based on published IOM/ACOG population standards. It does not replace individualized prenatal medical care, ultrasound biometry, or laboratory diagnostics. Twin and multiple gestations require separate specialized nutritional targets.'
      },
      es: {
        domain: 'pregnancy',
        sectionTitle: 'Trayectoria Gestacional por Trimestre y Pautas Clínicas',
        sectionSubtitle: 'Hitos ponderales basados en evidencia, micronutrientes prenatales clave y alertas clínicas.',
        interpretationTitle: 'Hitos de Aumento de Peso Gestacional y Demanda Energética',
        interpretationText: 'El aumento de peso gestacional no es lineal a lo largo de las 40 semanas. Durante el primer trimestre (semanas 1–12), el gasto calórico fetal es mínimo (0 kcal adicionales/día), con un aumento habitual de 0.5 a 2.0 kg atribuible al volumen plasmático y tejido uterino. En el segundo trimestre (semanas 13–27), el requerimiento calórico asciende a +340 kcal/día, sosteniendo una ganancia promedio de ~0.42 kg/semana para IMC normal. En el tercer trimestre (semanas 28–40), el rápido crecimiento fetal exige +450 kcal/día. Los requerimientos esenciales de micronutrientes incluyen Ácido Fólico (400–600 mcg/día para prevenir defectos del tubo neural), Hierro Elemental (27 mg/día), Calcio (1,000 mg/día), Colina (450 mg/día) y una ingesta hídrica diaria de 2.5 a 3.0 litros.',
        limitationsTitle: 'Signos de Alarma Clínica, Preeclampsia y Riesgos',
        limitationsText: 'Las metas de aumento ponderal son pautas poblacionales para embarazos únicos. Ciertas señales de alerta exigen valoración obstétrica inmediata: (1) Aumento brusco y repentino superior a 1 kg (2.2 lbs) en una sola semana durante el 2.º o 3.er trimestre, en particular si se acompaña de edema facial o en manos, cefaleas intensas o fotopsias—signo de sospecha de preeclampsia; (2) Pérdida de peso continua o vómitos incoercibles (hiperémesis gravídica), con riesgo de retraso del crecimiento intrauterino (RCIU); y (3) Cribado rutinario de diabetes gestacional (SOG) entre las semanas 24 y 28. Consulte siempre con su ginecólogo u obstetra.',
        medicalNoticeTitle: 'Aviso de Salud Obstétrica y Prenatal',
        medicalNoticeText: 'Esta calculadora es una herramienta de orientación educativa fundamentada en consensos IOM/ACOG. No reemplaza las consultas de control prenatal, ecografías biométricas ni exámenes de laboratorio clínico. Los embarazos gemelares requieren metas nutricionales específicas.'
      },
      fr: {
        domain: 'pregnancy',
        sectionTitle: 'Trajectoire Gestationnelle par Trimestre et Repères Cliniques',
        sectionSubtitle: 'Paliers de prise de poids validés, micronutriments prénataux essentiels et signaux d’alerte.',
        interpretationTitle: 'Paliers Gestationnels et Besoins Énergétiques',
        interpretationText: 'La prise de poids pendant la grossesse varie selon le terme. Au premier trimestre (semaines 1–12), les besoins énergétiques additionnels sont nuls (+0 kcal/jour) et la prise moyenne se situe entre 0,5 et 2,0 kg, correspondant à l expansion du volume plasmatique. Au deuxième trimestre (semaines 13–27), les besoins augmentent d environ +340 kcal/jour avec un rythme de ~0,42 kg/semaine pour un IMC normal. Au troisième trimestre (semaines 28–40), la maturation fœtale nécessite +450 kcal/jour. Les nutriments clés incluent l Acide Folique (400–600 mcg/jour pour la prévention des anomalies de fermeture du tube neural), le Fer Élémentaire (27 mg/jour), le Calcium (1 000 mg/jour), la Choline (450 mg/jour) et 2,5 à 3,0 litres d eau par jour.',
        limitationsTitle: 'Signes d’Alerte Obstétrique, Prééclampsie et Limites',
        limitationsText: 'Ces recommandations concernent les grossesses uniques. Plusieurs signes cliniques requièrent une consultation médicale sans délai : (1) Prise de poids brutale supérieure à 1 kg en une seule semaine au 2e ou 3e trimestre, surtout associée à des œdèmes du visage et des mains, céphalées persistantes ou troubles visuels—signe évocateur de prééclampsie ; (2) Perte de poids continue liée à des nausées sévères (hyperémèse gravidique) pouvant induire un retard de croissance intra-utérin (RCIU) ; et (3) Dépistage du diabète gestationnel systématique entre 24 et 28 semaines. Consultez systématiquement votre sage-femme ou gynécologue obstétricien.',
        medicalNoticeTitle: 'Avertissement Médical et Suivi Prénatal',
        medicalNoticeText: 'Ce calculateur est un repère éducatif basé sur les standards IOM et CNGOF. Il ne saurait se substituer au suivi prénatal personnalisé, aux échographies obstétricales ou aux bilans biologiques. Les grossesses multiples requièrent un suivi nutritionnel individualisé.'
      },
      de: {
        domain: 'pregnancy',
        sectionTitle: 'Schwangerschaftsverlauf nach Trimestern & Klinische Leitlinien',
        sectionSubtitle: 'Evidenzbasierte Gewichtsetappen, essenzielle Mikronährstoffe und klinische Warnsignale.',
        interpretationTitle: 'Gewichtsentwicklung und Kalorienbedarf in den Trimestern',
        interpretationText: 'Die Gewichtszunahme in der Schwangerschaft verläuft nicht gleichförmig. Im ersten Trimester (Wochen 1–12) besteht kaum Mehrbedarf an Kalorien (+0 kcal/Tag); eine Zunahme von 0,5 bis 2,0 kg resultiert primär aus Blutvolumenerweiterung und Uterusgewebe. Im zweiten Trimester (Wochen 13–27) steigt der Energiebedarf um ca. +340 kcal/Tag bei einer Zunahme von ~0,42 kg/Woche bei normalem Ausgangs-BMI. Im dritten Trimester (Wochen 28–40) erfordert das fetale Wachstum +450 kcal/Tag. Wichtige Mikronährstoffe umfassen Folsäure (400–600 mcg/Tag zur Neuralrohrdefekt-Prävention), elementares Eisen (27 mg/Tag), Calcium (1.000 mg/Tag), Cholin (450 mg/Tag) sowie 2,5 bis 3,0 Liter tägliche Flüssigkeitszufuhr.',
        limitationsTitle: 'Klinische Warnsignale, Präeklampsie & Risikobeurteilung',
        limitationsText: 'Die IOM-Richtlinien gelten für Einlingsschwangerschaften. Folgende Warnzeichen erfordern umgehende ärztliche Abklärung: (1) Plötzliche, rapide Gewichtszunahme von mehr als 1 kg innerhalb einer einzigen Woche im 2. oder 3. Trimester, insbesondere bei begleitenden Ödemen an Händen/Gesicht, starken Kopfschmerzen oder Sehstörungen—ein Kardinalzeichen für Präeklampsie; (2) Anhaltender Gewichtsverlust oder schwere Hyperemesis gravidarum mit Risiko für intrauterine Wachstumsretardierung (IUGR); sowie (3) Das Standard-Screening auf Gestationsdiabetes (oGTT) in den Wochen 24 bis 28. Wenden Sie sich stets an Ihre betreuende Gynäkologin oder Hebamme.',
        medicalNoticeTitle: 'Hinweis zur Schwangerschaftsvorsorge',
        medicalNoticeText: 'Dieser Rechner dient als Bildungs- und Orientierungshilfe nach IOM/ACOG-Kriterien. Er ersetzt keinesfalls die regelmäßige Schwangerschaftsvorsorge, Ultraschallbiometrie oder Labordiagnostik. Bei Mehrlingsschwangerschaften gelten gesonderte Richtwerte.'
      },
      ko: {
        domain: 'pregnancy',
        sectionTitle: '임신 분기별 체중 증가 궤적 및 임상 가이드라인',
        sectionSubtitle: '증거 기반 체중 증가 이정표, 필수 산전 미량영양소 및 주요 임상 위험 신호입니다.',
        interpretationTitle: '임신 주기별 체중 증가 권장 기준 및 에너지 요구량',
        interpretationText: '임신 40주 동안의 체중 증가는 균일하게 일어나지 않습니다. 임신 초기(1~12주)에는 태아 성장에 따른 추가 칼로리 소모가 거의 없어(+0 kcal/일) 모체 혈액량 및 자궁 조직 확장에 따른 0.5~2.0kg 증가가 일반적입니다. 임신 중기(13~27주)에는 에너지 요구량이 하루 약 +340 kcal 증가하며, 정상 체중 산모 기준 주당 약 0.42kg씩 꾸준히 증가합니다. 임신 후기(28~40주)에는 태아의 빠른 피하지방 축적과 폐 성숙을 위해 하루 +450 kcal가 추가로 필요합니다. 필수 미량영양소로는 엽산(신경관 결손 예방을 위한 400~600 mcg/일), 철분(27 mg/일), 칼슘(1,000 mg/일), 콜린(450 mg/일) 및 하루 2.5~3.0리터의 충분한 수분 섭취가 권장됩니다.',
        limitationsTitle: '임상 주의 신호, 임신중독증(자간전증) 및 위험 징후',
        limitationsText: '본 체중 증가 권장치는 단태아 임신을 기준으로 한 지침입니다. 다음 증상이 나타나면 즉시 산부인과 전문의의 진료를 받아야 합니다: (1) 임신 중기나 후기에 일주일 만에 1kg 이상 체중이 급격히 증가하고 얼굴이나 손 부종, 심한 두통, 시야 흐림이 동반되는 경우—임신중독증(자간전증)의 전형적인 경고 신호입니다; (2) 심한 입덧(임신오조)으로 인한 지속적인 체중 감소—태아 자궁내 성장지연(IUGR) 위험이 있습니다; (3) 임신 24~28주 사이에 시행하는 임신성 당뇨병(GDM) 선별 검사. 산모와 태아의 건강을 위해 반드시 정기 산전 검진을 받으시기 바랍니다.',
        medicalNoticeTitle: '산전 관리 및 의학적 안내',
        medicalNoticeText: '본 계산기는 미국 의학연구소(IOM) 및 미국산부인과학회(ACOG) 인구 통계 표준에 기반한 교육용 참고 도구입니다. 전문의의 정기 산전 진찰, 정밀 초음파 계측 또는 임상병리 검사를 대신할 수 없으며 다태아(쌍둥이) 임신은 별도의 전문 영양 관리가 필요합니다.'
      },
      hi: {
        domain: 'pregnancy',
        sectionTitle: 'गर्भावस्था तिमाही वजन प्रक्षेपवक्र एवं नैदानिक दिशानिर्देश',
        sectionSubtitle: 'साक्ष्य-आधारित वजन मील के पत्थर, आवश्यक प्रसवपूर्व सूक्ष्म पोषक तत्व और नैदानिक सुरक्षा संकेत।',
        interpretationTitle: 'गर्भावस्था वजन वृद्धि के चरण एवं ऊर्जा आवश्यकताएं',
        interpretationText: '40 हफ्तों की गर्भावस्था के दौरान वजन वृद्धि एक समान नहीं होती। पहली तिमाही (सप्ताह 1–12) में भ्रूण विकास के लिए अतिरिक्त कैलोरी की आवश्यकता नहीं होती (0 अतिरिक्त kcal/दिन), और आमतौर पर 0.5 से 2.0 किग्रा वजन बढ़ता है जो मुख्य रूप से मातृ रक्त की मात्रा और गर्भाशय ऊतक के विस्तार के कारण होता है। दूसरी तिमाही (सप्ताह 13–27) में दैनिक कैलोरी आवश्यकता लगभग +340 kcal/दिन बढ़ जाती है, जिससे सामान्य बीएमआई पर प्रति सप्ताह ~0.42 किग्रा की स्थिर वृद्धि होती है। तीसरी तिमाही (सप्ताह 28–40) में भ्रूण के तेजी से विकास हेतु +450 kcal/दिन की आवश्यकता होती है। आवश्यक सूक्ष्म पोषक तत्वों में फोलिक एसिड (न्यूरल ट्यूब दोष रोकथाम के लिए 400–600 mcg/दिन), आयरन (27 mg/दिन), कैल्शियम (1,000 mg/दिन), कोलीन (450 mg/दिन) और रोजाना 2.5 से 3.0 लीटर पानी का सेवन शामिल है।',
        limitationsTitle: 'नैदानिक चेतावनी संकेत, प्री-एक्लेम्पसिया एवं आपात स्थितियां',
        limitationsText: 'गर्भावस्था वजन लक्ष्य एकल गर्भावस्था के लिए सामान्य दिशानिर्देश हैं। इन चेतावनी संकेतों में तुरंत डॉक्टर से संपर्क करना आवश्यक है: (1) दूसरी या तीसरी तिमाही में एक ही सप्ताह में 1 किग्रा से अधिक का अचानक तीव्र वजन बढ़ना, विशेष रूप से चेहरे या हाथों में सूजन, तेज सिरदर्द या आंखों में धुंधलापन दिखने पर—जो प्री-एक्लेम्पसिया का प्रमुख चेतावनी संकेत है; (2) गंभीर उल्टी (हाइपरएमिसिस ग्रेविडेरम) के कारण लगातार वजन कम होना, जिससे गर्भ में शिशु के धीमे विकास (IUGR) का खतरा होता है; तथा (3) सप्ताह 24 से 28 के बीच जेस्टेशनल डायबिटीज (GDM) की नियमित जांच। हमेशा अपने स्त्री रोग विशेषज्ञ (OB-GYN) से व्यक्तिगत परामर्श लें।',
        medicalNoticeTitle: 'प्रसवपूर्व एवं प्रसूति स्वास्थ्य अस्वीकरण',
        medicalNoticeText: 'यह कैलकुलेटर प्रकाशित IOM/ACOG मानकों पर आधारित एक शैक्षणिक संदर्भ उपकरण है। यह व्यक्तिगत डॉक्टर परामर्श, अल्ट्रासाउंड बायोमेट्री या प्रयोगशाला रक्त परीक्षण का विकल्प नहीं है। जुड़वां गर्भावस्था में अलग पोषण लक्ष्यों की आवश्यकता होती है।'
      }
    },
    specialty: {
      en: {
        domain: 'specialty',
        sectionTitle: 'Dietary Protein Physiology & Muscle Protein Synthesis Guide',
        sectionSubtitle: 'How protein targets, the leucine threshold, per-meal distribution, and caloric state drive muscle repair and metabolic health.',
        interpretationTitle: 'Muscle Protein Synthesis (MPS), Leucine Threshold & Nitrogen Balance',
        interpretationText: 'The standard Recommended Dietary Allowance (RDA) of 0.8 g/kg/day represents a statistical baseline to prevent overt protein deficiency and negative nitrogen balance in sedentary adults—it is not an optimal target for active individuals or those seeking muscle preservation. Clinical exercise physiology confirms that active individuals and lifters require 1.4 to 2.2 g/kg/day to maximize fractional Muscle Protein Synthesis (MPS) rates via the mTORC1 signaling pathway. Triggering MPS requires reaching the "leucine threshold" (~2.5 to 3.0 grams of leucine per meal), achievable with approximately 25 to 40 grams of high-quality, bioavailable intact protein (such as eggs, poultry, whey, fish, or dairy) evenly spaced across 3 to 5 meals throughout the day.',
        limitationsTitle: 'Renal Safety, Protein Quality (DIAAS) & Hypocaloric Muscle Sparing',
        limitationsText: 'Extensive clinical trials by the International Society of Sports Nutrition (ISSN) demonstrate that high protein intakes (up to 3.0 g/kg/day) cause no detrimental changes to glomerular filtration rate, renal function, or bone mineral density in healthy individuals. During a caloric deficit for fat loss, protein requirements increase to 1.8 to 2.4 g/kg/day to protect skeletal muscle from gluconeogenesis and elevate the Thermic Effect of Food (TEF). Plant-based athletes should combine complementary protein sources (legumes and grains) to ensure complete essential amino acid profiles and overcome lower Digestible Indispensable Amino Acid Scores (DIAAS).',
        medicalNoticeTitle: 'Clinical Renal & Hepatic Medical Notice',
        medicalNoticeText: 'High-protein targets apply exclusively to individuals with healthy kidney and liver function. Patients diagnosed with Chronic Kidney Disease (CKD Stages 3–5), diabetic nephropathy, hepatic encephalopathy, or those on medically prescribed low-protein regimens must adhere strictly to clinical guidelines under the direct supervision of a nephrologist or registered clinical dietitian.'
      },
      es: {
        domain: 'specialty',
        sectionTitle: 'Fisiología Proteica y Síntesis de Masa Muscular',
        sectionSubtitle: 'Cómo las metas proteicas, el umbral de leucina y la distribución por comida optimizan la masa magra y la salud metabólica.',
        interpretationTitle: 'Síntesis Proteica Muscular (SPM), Umbral de Leucina y Balance de Nitrógeno',
        interpretationText: 'La ingesta recomendada básica de 0.8 g/kg/día previene deficiencias en adultos sedentarios, pero resulta insuficiente para deportistas y personas activas. En fisiología del ejercicio, se requieren de 1.4 a 2.2 g/kg/día para maximizar la síntesis proteica muscular (SPM) mediante la vía mTORC1. Para activar la SPM de forma óptima se necesita alcanzar el umbral de leucina (~2.5 a 3.0 g por toma), lo que se logra con 25 a 40 g de proteína de alto valor biológico repartidos en 3 a 5 comidas.',
        limitationsTitle: 'Seguridad Renal, Calidad de Proteína (DIAAS) y Protección Muscular en Déficit',
        limitationsText: 'Los consensos de la ISSN ratifican que ingestas elevadas de hasta 3.0 g/kg/día son plenamente seguras para la función renal y la densidad ósea en personas sanas. En etapas de déficit calórico para definición, los requerimientos aumentan a 1.8–2.4 g/kg para evitar el catabolismo muscular. Quienes sigan dietas vegetales deben combinar legumbres y cereales para optimizar el perfil de aminoácidos esenciales y la puntuación DIAAS.',
        medicalNoticeTitle: 'Aviso Médico sobre Función Renal y Hepática',
        medicalNoticeText: 'Estas recomendaciones asumen una función hepatorrenal sana. Pacientes con enfermedad renal crónica (estadios 3 a 5) o hepatopatías deben seguir dietas normo o hipoproteicas estrictamente supervisadas por su médico especialista.'
      },
      fr: {
        domain: 'specialty',
        sectionTitle: 'Physiologie des Protéines et Synthèse Musculaire',
        sectionSubtitle: 'Comment les cibles protéiques, le seuil de leucine et la répartition par repas optimisent la masse musculaire et la santé métabolique.',
        interpretationTitle: 'Synthèse Protéique Musculaire, Seuil de Leucine et Bilan Azoté',
        interpretationText: 'L’apport minimal recommandé de 0,8 g/kg/jour prévient les carences chez le sédentaire, mais ne répond pas aux besoins du sportif. En physiologie sportive, un apport de 1,4 à 2,2 g/kg/jour est requis pour stimuler la synthèse protéique musculaire (SPM) via la voie mTORC1. Chaque repas principal doit atteindre le seuil de leucine (~2,5 à 3,0 g), soit environ 25 à 40 g de protéines complètes, idéalement fractionnés en 3 à 5 prises quotidiennes.',
        limitationsTitle: 'Sécurité Rénale, Qualité des Protéines (DIAAS) et Préservation en Déficit',
        limitationsText: 'Les études cliniques de l’ISSN confirment qu’un apport allant jusqu’à 3,0 g/kg/jour ne détériore ni la filtration glomérulaire ni la santé osseuse chez l’adulte sain. En période de restriction calorique (sèche), les besoins montent à 1,8–2,4 g/kg pour contrer le catabolisme musculaire. Les sportifs végétariens veilleront à associer légumineuses et céréales pour assurer un indice DIAAS optimal.',
        medicalNoticeTitle: 'Avertissement Médical sur la Fonction Rénale et Hépatique',
        medicalNoticeText: 'Ces apports s’adressent exclusivement aux personnes sans insuffisance rénale ni pathologie hépatique. Les patients atteints de maladie rénale chronique ou d’encéphalopathie hépatique doivent impérativement respecter les restrictions protéiques prescrites par leur médecin.'
      },
      de: {
        domain: 'specialty',
        sectionTitle: 'Proteinphysiologie & Muskelproteinsynthese',
        sectionSubtitle: 'Wie Proteinmengen, die Leucin-Schwelle und die Mahlzeitenverteilung Muskelregeneration und Stoffwechsel optimieren.',
        interpretationTitle: 'Muskelproteinsynthese (MPS), Leucin-Schwelle & Stickstoffbilanz',
        interpretationText: 'Der empfohlene Mindestbedarf von 0,8 g/kg/Tag sichert das Überleben ohne Mangel bei Inaktivität, ist aber für Trainierende unzureichend. Sportwissenschaftliche Leitlinien belegen einen optimalen Bereich von 1,4 bis 2,2 g/kg/Tag zur Maximierung der Muskelproteinsynthese (MPS) über mTORC1. Entscheidend ist das Erreichen der Leucin-Schwelle (ca. 2,5 bis 3,0 g Leucin pro Mahlzeit), was durch 25 bis 40 g hochwertige Proteine über 3 bis 5 Tagesmahlzeiten erreicht wird.',
        limitationsTitle: 'Nierensicherheit, Proteinqualität (DIAAS) & Muskelschutz im Defizit',
        limitationsText: 'Klinische Studien der ISSN belegen, dass Proteinzufuhren von bis zu 3,0 g/kg/Tag bei gesunden Erwachsenen weder Nierenfiltration noch Knochendichte beeinträchtigen. Bei Kaloriendefiziten zur Fettreduktion steigt der Bedarf auf 1,8 bis 2,4 g/kg, um Muskelverlust durch Glukoneogenese zu verhindern. Pflanzliche Sportler sollten Hülsenfrüchte und Getreide kombinieren, um optimale DIAAS-Aminosäurewerte zu erzielen.',
        medicalNoticeTitle: 'Klinischer Hinweis zu Nieren- und Lebererkrankungen',
        medicalNoticeText: 'Erhöhte Proteinempfehlungen gelten ausschließlich für nieren- und lebergesunde Personen. Bei chronischer Niereninsuffizienz (CKD) oder Leberzirrhose sind strenge diätetische Eiweißbeschränkungen unter nephrologischer Kontrolle zwingend einzuhalten.'
      },
      ko: {
        domain: 'specialty',
        sectionTitle: '식이 단백질 생리학 및 근단백질 합성(MPS) 가이드',
        sectionSubtitle: '단백질 섭취량, 류신 임계치, 끼니별 분배 및 칼로리 상태가 근육 회복과 대사 건강에 미치는 영향입니다.',
        interpretationTitle: '근단백질 합성(MPS), 류신 임계치 및 질소 평형의 과학',
        interpretationText: '일반 권장 섭취량(RDA)인 체중 1kg당 0.8g은 비운동 성인의 질소 결핍을 막는 최소한의 기준선일 뿐, 운동선수와 활성 성인의 근육 보존에는 부족합니다. 임상 운동 생리학에 따르면 체중 1kg당 1.4 ~ 2.2g을 섭취해야 mTORC1 경로를 통한 근단백질 합성(MPS)이 극대화됩니다. 한 끼 식사 시 류신 임계치(~2.5~3.0g)를 충족해야 하므로 25~40g의 양질의 단백질을 하루 3~5회 분할 섭취하는 것이 가장 이상적입니다.',
        limitationsTitle: '신장 안전성, 단백질 품질(DIAAS) 및 다이어트 중 근손실 방지',
        limitationsText: '국제스포츠영양학회(ISSN)의 대규모 임상 연구에 따르면 건강한 성인의 경우 하루 최대 3.0g/kg의 고단백 식단을 유지해도 사구체 여과율이나 골밀도에 악영향이 없습니다. 체지방 감량을 위한 칼로리 적자 상태에서는 근육 분해를 막기 위해 1.8~2.4g/kg까지 증량하는 것이 권장됩니다. 채식 운동선수는 콩류와 곡류를 조합하여 아미노산 점수(DIAAS)를 보완해야 합니다.',
        medicalNoticeTitle: '신장 및 간 질환 임상 주의사항',
        medicalNoticeText: '고단백 식단 가이드라인은 신장과 간 기능이 정상인 성인을 전제로 합니다. 만성 신부전(CKD 3~5단계), 당뇨병성 신증 또는 간 질환이 있는 환자는 반드시 신장내과 전문의가 지정한 단백질 제한 식단을 따라야 합니다.'
      },
      hi: {
        domain: 'specialty',
        sectionTitle: 'आहार प्रोटीन शरीर क्रिया विज्ञान एवं मांसपेशी संश्लेषण गाइड',
        sectionSubtitle: 'प्रोटीन लक्ष्य, ल्यूसीन सीमा, भोजन-वार वितरण और कैलोरी स्थिति मांसपेशियों की मरम्मत को कैसे अनुकूलित करते हैं।',
        interpretationTitle: 'मांसपेशी प्रोटीन संश्लेषण (MPS), ल्यूसीन सीमा एवं नाइट्रोजन संतुलन',
        interpretationText: 'सामान्य अनुशंसित 0.8 ग्राम/किग्रा/दिन का स्तर केवल गतिहीन वयस्कों में प्रोटीन की कमी और नाइट्रोजन घाटे को रोकने के लिए न्यूनतम सीमा है। सक्रिय व्यक्तियों और भारोत्तोलकों को mTORC1 मार्ग द्वारा मांसपेशी प्रोटीन संश्लेषण (MPS) को अधिकतम करने के लिए 1.4 से 2.2 ग्राम/किग्रा की आवश्यकता होती है। इसके लिए प्रति भोजन ल्यूसीन सीमा (~2.5 से 3.0 ग्राम ल्यूसीन) तक पहुंचना आवश्यक है, जो दिन भर में 3 से 5 भोजन में 25 से 40 ग्राम उच्च गुणवत्ता वाले प्रोटीन द्वारा प्राप्त होता है।',
        limitationsTitle: 'गुर्दे की सुरक्षा, प्रोटीन गुणवत्ता (DIAAS) और कैलोरी कमी में मांसपेशियों की सुरक्षा',
        limitationsText: 'इंटरनेशनल सोसाइटी ऑफ स्पोर्ट्स न्यूट्रिशन (ISSN) के अध्ययनों से सिद्ध होता है कि स्वस्थ वयस्कों में 3.0 ग्राम/किग्रा/दिन तक का प्रोटीन गुर्दे की कार्यप्रणाली या हड्डियों के घनत्व को कोई नुकसान नहीं पहुंचाता। वजन घटाने (कैलोरी की कमी) के दौरान मांसपेशियों के क्षय को रोकने के लिए 1.8 से 2.4 ग्राम/किग्रा आवश्यक होता है। शाकाहारी एथलीटों को संपूर्ण अमीनो एसिड प्रोफाइल के लिए दालों और अनाजों का संयोजन करना चाहिए।',
        medicalNoticeTitle: 'गुर्दे एवं यकृत संबंधी चिकित्सीय सूचना',
        medicalNoticeText: 'यह उच्च-प्रोटीन लक्ष्य केवल सामान्य गुर्दे और यकृत स्वास्थ्य वाले व्यक्तियों पर लागू होते हैं। क्रोनिक किडनी रोग (CKD), डायबिटिक नेफ्रोपैथी या यकृत रोग से पीड़ित रोगियों को अपने डॉक्टर द्वारा निर्धारित कम-प्रोटीन आहार का कड़ाई से पालन करना चाहिए।'
      }
    }
  };

  const domainMap = GUIDES[domain] || GUIDES.bmi;
  return domainMap[lang] || domainMap.en;
}
