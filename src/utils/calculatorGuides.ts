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
  const isMetabolic = ['bmr-calculator', 'tdee-calculator', 'maintenance-calorie-calculator', 'calorie-calculator', 'macro-calculator'].includes(slug);
  const isBodyComp = ['body-fat-calculator', 'lean-body-mass-calculator', 'ideal-weight-calculator', 'waist-to-hip-ratio-calculator', 'body-surface-area-calculator'].includes(slug);
  const isCardio = ['heart-rate-zone-calculator', 'karvonen-heart-rate-calculator'].includes(slug);
  const isStrength = ['1rm-calculator', 'one-rep-max-calculator'].includes(slug);
  const isDiabetes = slug === 'diabetes-risk-calculator';
  const isSpecialty = ['protein-intake-calculator', 'water-intake-calculator', 'pregnancy-weight-gain-calculator'].includes(slug);

  const domain = isRegional ? 'regional' : (isMetabolic ? 'metabolic' : (isBodyComp ? 'bodycomp' : (isCardio ? 'cardio' : (isStrength ? 'strength' : (isDiabetes ? 'diabetes' : (isSpecialty ? 'specialty' : 'bmi'))))));

  const GUIDES: Record<string, Record<Locale, DomainInterpretationGuide>> = {
    bmi: {
      en: {
        domain: 'bmi',
        sectionTitle: 'BMI Results & Health Guide',
        sectionSubtitle: 'How to interpret your BMI score and understand its screening limits.',
        interpretationTitle: 'WHO Adult BMI Categories',
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
        interpretationTitle: 'Interpretación según la Referencia Global de la OMS',
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
        interpretationTitle: 'Interprétation selon les Normes Mondiales de l’OMS',
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
        interpretationTitle: 'Interpretation nach weltweiten WHO-Referenzen',
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
        interpretationTitle: 'WHO 글로벌 기준에 따른 해석',
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
        interpretationTitle: 'डब्ल्यूएचओ वैश्विक संदर्भ व्याख्या',
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
        sectionTitle: 'Body Composition & Weight Guide',
        sectionSubtitle: 'Understanding body fat, lean muscle, and healthy weight ranges.',
        interpretationTitle: 'Body Measurement & Composition Models',
        interpretationText: 'Body composition formulas estimate the balance of muscle, bone, and body fat. Weight formulas give a healthy target range for your height. Tape measurements use your neck, waist, and hip size to estimate body fat. These tools help you see if weight changes come from muscle or fat.',
        limitationsTitle: 'Accuracy of Body Fat & Weight Formulas',
        limitationsText: 'Tape measurements can vary by 3% to 4% compared to clinical body scans. Fluid retention, recent meals, and tape position can change your daily numbers. Measure at the same time each day for the most reliable trends.',
        medicalNoticeTitle: 'Health Assessment Notice',
        medicalNoticeText: 'These calculations offer helpful fitness guidelines. They do not replace a medical exam by your doctor.'
      },
      es: {
        domain: 'bodycomp',
        sectionTitle: 'Composición Corporal y Estimaciones Antropométricas',
        sectionSubtitle: 'Interpretación del porcentaje de grasa, masa magra y fórmulas de perímetro.',
        interpretationTitle: 'Modelos de Estimación Antropométrica',
        interpretationText: 'Las fórmulas de perímetros corporales (como el método de la Marina de EE. UU.) y las de peso magro (Boer, Devine) estiman la proporción entre tejido adiposo y masa libre de grasa, ayudando a distinguir la masa muscular del exceso de grasa.',
        limitationsTitle: 'Precisión de Medición y Límites Técnicos',
        limitationsText: 'Las mediciones con cinta métrica presentan un margen de error del 3% al 4% frente a densitometrías DEXA o pesaje hidrostático. La tensión de la cinta, la ubicación exacta y la retención de líquidos pueden alterar los resultados.',
        medicalNoticeTitle: 'Contexto Clínico',
        medicalNoticeText: 'Estas estimaciones son útiles para el seguimiento deportivo y educativo. Para evaluaciones precisas de densidad ósea y composición corporal, se recomienda un escaneo DEXA clínico.'
      },
      fr: {
        domain: 'bodycomp',
        sectionTitle: 'Composition Corporelle et Estimations Anthropométriques',
        sectionSubtitle: 'Interprétation du taux de masse grasse, de la masse maigre et des mesures au ruban.',
        interpretationTitle: 'Modèles d’Évaluation Anthropométrique',
        interpretationText: 'Les formules basées sur les circonférences (telles que celle de l’US Navy) et sur la taille (Boer, Devine) évaluent la répartition entre masse maigre et tissu adipeux afin de mieux cerner le profil corporel que le seul IMC.',
        limitationsTitle: 'Précision et Tolérances Techniques',
        limitationsText: 'L’évaluation anthropométrique présente une marge d’écart de 3 à 4 % par rapport à l’ostéodensitométrie DEXA. La précision du ruban, la tension appliquée et l’état d’hydratation influencent les résultats.',
        medicalNoticeTitle: 'Information Médicale',
        medicalNoticeText: 'Ces calculs sont destinés au suivi forme et éducation. Pour une mesure médicale exacte de la composition corporelle, effectuez un bilan DEXA en centre spécialisé.'
      },
      de: {
        domain: 'bodycomp',
        sectionTitle: 'Körperzusammensetzung & Anthropometrische Schätzungen',
        sectionSubtitle: 'Einordnung von Körperfettanteil, fettfreier Masse und Umfangsmessungen.',
        interpretationTitle: 'Anthropometrische Berechnungsmodelle',
        interpretationText: 'Umfangsbasierte Verfahren (wie die US Navy-Methode) und Formeln zur fettfreien Masse (Boer, Devine) schätzen das Verhältnis von stoffwechselaktiver Muskelmasse zu Fettgewebe, um muskuläre Dichte von Übergewicht abzugrenzen.',
        limitationsTitle: 'Messgenauigkeit & Technische Grenzen',
        limitationsText: 'Umfangsmessungen haben gegenüber klinischen DEXA-Scans eine methodische Abweichung von ca. 3 % bis 4 %. Exakte Platzierung des Maßbands, Bandspannung und der Hydratationszustand beeinflussen das Ergebnis.',
        medicalNoticeTitle: 'Klinischer Hinweis',
        medicalNoticeText: 'Diese Formeln bieten Orientierung für Fitness und Training. Für eine medizinisch präzise Analyse empfiehlt sich ein klinischer DEXA-Körperscan.'
      },
      ko: {
        domain: 'bodycomp',
        sectionTitle: '신체 구성 및 인체 계측 추정치 가이드',
        sectionSubtitle: '체지방률, 제지방량(LBM) 및 신체 둘레 측정 공식의 해석 기준입니다.',
        interpretationTitle: '인체 계측 기반 신체 구성 모델',
        interpretationText: '미 해군(US Navy) 체지방 공식 및 Boer 제지방량 공식은 신체 둘레 및 체중을 활용하여 체지방 조직과 근육 조직의 비율을 추정합니다. 이는 단순 체중만으로 알 수 없는 근육 발달도를 평가하는 데 유용합니다.',
        limitationsTitle: '측정 정확도 및 기술적 한계',
        limitationsText: '줄자 측정 기반 공식은 임상 정밀 DEXA 스캔 대비 통상 3% ~ 4%의 측정 편차를 가집니다. 줄자의 측정 위치, 당김 장력, 수분 저류 상태에 따라 오차가 발생할 수 있습니다.',
        medicalNoticeTitle: '임상 신체 구성 검사 안내',
        medicalNoticeText: '본 도구는 운동 및 건강 관리 추세를 모니터링하기 위한 교육용 추정치입니다. 정밀한 골밀도 및 체지방률 진단을 위해서는 병원 DEXA 검사를 권장합니다.'
      },
      hi: {
        domain: 'bodycomp',
        sectionTitle: 'शारीरिक संरचना एवं मानवशास्त्रीय अनुमान',
        sectionSubtitle: 'शरीर में वसा प्रतिशत, लीन बॉडी मास और नाप सूत्रों की व्याख्या।',
        interpretationTitle: 'मानवशास्त्रीय आकलन मॉडल',
        interpretationText: 'अमेरिकी नौसेना सूत्र और बोएर लीन मास समीकरण शारीरिक परिधियों के आधार पर वसा और मांसपेशियों के अनुपात का अनुमान लगाते हैं, जिससे वजन और वसा के बीच अंतर स्पष्ट होता है।',
        limitationsTitle: 'मापन सटीकता एवं सीमाएं',
        limitationsText: 'डेक्सा (DEXA) स्कैन की तुलना में फीते की माप में लगभग 3% से 4% का अंतर आ सकता है। फीते का सही स्थान, खिंचाव और शरीर में पानी की मात्रा परिणामों को प्रभावित कर सकती है।',
        medicalNoticeTitle: 'नैदानिक संदर्भ',
        medicalNoticeText: 'यह अनुमान फिटनेस ट्रैकिंग के लिए है। सटीक शारीरिक संरचना विश्लेषण के लिए अस्पताल में डेक्सा स्कैन करवाएं।'
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
        interpretationText: 'Your One-Rep Max (1RM) is the heaviest weight you can lift for one clean repetition. Formulas like Epley and Brzycki estimate this max from sets of 2 to 10 reps. This protects your joints by avoiding risky single-rep maximum attempts.',
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
        interpretationText: 'La Repetición Máxima (1RM) define la mayor carga que un grupo muscular puede desplazar en una sola repetición con técnica adecuada. Ecuaciones como Brzycki, Epley y Lander permiten estimar este valor a partir de series submáximas, minimizando el riesgo de lesión osteoarticular.',
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
    specialty: {
      en: {
        domain: 'specialty',
        sectionTitle: 'Nutrition & Daily Needs Guide',
        sectionSubtitle: 'Evidence-based guidelines for daily protein, hydration, and wellness targets.',
        interpretationTitle: 'Daily Protein & Nutrition Guidelines',
        interpretationText: 'Your daily protein needs depend on your weight and activity level. Sedentary adults need about 0.8 grams of protein per kilogram of body weight. Active adults and lifters usually benefit from 1.2 to 2.0 grams per kilogram. Eating protein across three or four meals helps support muscle recovery.',
        limitationsTitle: 'Health Conditions & Dietary Adjustments',
        limitationsText: 'Standard protein targets assume normal kidney and liver function. People with kidney conditions should follow protein limits set by their doctor. Drink plenty of fresh water throughout the day to support healthy digestion.',
        medicalNoticeTitle: 'Dietary Guidance Notice',
        medicalNoticeText: 'These numbers are educational guidelines. Talk to a doctor or dietitian before making large diet changes.'
      },
      es: {
        domain: 'specialty',
        sectionTitle: 'Pautas Nutricionales y Contexto Clínico',
        sectionSubtitle: 'Interpretación de requerimientos proteicos, hidratación y cribados especializados.',
        interpretationTitle: 'Pautas de Nutrición y Fisiología Basadas en Evidencia',
        interpretationText: 'Los objetivos nutricionales siguen directrices respaldadas por la investigación científica (como las pautas de la ISSN de 1.4–2.0 g/kg de proteína en deportistas) y estándares de hidratación recomendados.',
        limitationsTitle: 'Condiciones de Salud Específicas',
        limitationsText: 'Estas pautas presuponen una función renal y hepática normal. Pacientes con insuficiencia renal o hepática precisan límites específicos de líquidos y proteínas supervisados por un médico. Los cribados no sustituyen análisis clínicos.',
        medicalNoticeTitle: 'Aviso Médico y Nutricional',
        medicalNoticeText: 'Consulte a un dietista colegiado o a su médico antes de modificar drásticamente su dieta o si presenta factores de riesgo clínicos.'
      },
      fr: {
        domain: 'specialty',
        sectionTitle: 'Bases Nutritionnelles et Contexte Clinique',
        sectionSubtitle: 'Interprétation des apports protéiques, de l’hydratation et des scores spécialisés.',
        interpretationTitle: 'Recommandations Nutritionnelles Fondées sur les Preuves',
        interpretationText: 'Les repères nutritionnels s’appuient sur les recommandations internationales (comme celles de l’ISSN préconisant 1,4 à 2,0 g/kg de protéines pour les sportifs) et les normes de santé publique en matière d’hydratation.',
        limitationsTitle: 'Pathologies et Restrictions Spécifiques',
        limitationsText: 'Ces calculs s’appliquent aux personnes ayant une fonction rénale et hépatique saine. En cas d’insuffisance rénale ou hépatique, les apports en protéines et en eau doivent faire l’objet d’un contrôle médical strict.',
        medicalNoticeTitle: 'Mise en Garde Diététique',
        medicalNoticeText: 'Ces valeurs sont purement indicatives. Consultez un professionnel de santé ou un diététicien avant tout changement alimentaire important.'
      },
      de: {
        domain: 'specialty',
        sectionTitle: 'Ernährungsbasen & Klinischer Kontext',
        sectionSubtitle: 'Einordnung von Proteinbedarf, Flüssigkeitszufuhr und Risikoscores.',
        interpretationTitle: 'Evidenzbasierte Ernährungs- und Hydratationsleitlinien',
        interpretationText: 'Die Nährstoffempfehlungen orientieren sich an anerkannten Standards der Sportwissenschaft (z. B. ISSN-Leitlinien von 1,4–2,0 g/kg Protein für Aktive) und offiziellen Richtwerten zur Flüssigkeitsversorgung.',
        limitationsTitle: 'Individuelle Vorerkrankungen & Einschränkungen',
        limitationsText: 'Die Orientierungswerte setzen eine gesunde Nieren- und Leberfunktion voraus. Bei chronischen Nierenerkrankungen sind Protein- und Flüssigkeitsmengen zwingend ärztlich anzupassen. Risiko-Scores ersetzen keine Labordiagnostik.',
        medicalNoticeTitle: 'Ernährungsmedizinischer Hinweis',
        medicalNoticeText: 'Wenden Sie sich vor gravierenden Ernährungsumstellungen oder bei auffälligen Screeningwerten an einen Arzt oder qualifizierten Ernährungsberater.'
      },
      ko: {
        domain: 'specialty',
        sectionTitle: '영양 기준치 및 임상 고려사항',
        sectionSubtitle: '단백질 권장 섭취량, 수분 섭취 기준 및 전문 선별 지표의 해석입니다.',
        interpretationTitle: '증거 기반 영양 및 수분 섭취 가이드라인',
        interpretationText: '본 영양 가이드라인은 국제스포츠영양학회(ISSN)의 활성 성인 단백질 권장 기준(체중 1kg당 1.4 ~ 2.0g) 및 의학 수분 섭취 기준을 따릅니다. 전문 선별 도구는 기초 통계 위험도를 안내합니다.',
        limitationsTitle: '기저 질환 및 식이 제한 사항',
        limitationsText: '이 계산은 신장 및 간 기능이 정상인 성인을 전제로 합니다. 만성 신부전(CKD)이나 간 질환이 있는 경우 단백질과 수분 섭취를 의학적으로 제한해야 합니다. 선별 점수는 진단 혈액 검사를 대신하지 않습니다.',
        medicalNoticeTitle: '임상 영양 상담 안내',
        medicalNoticeText: '급격한 식단 변경이나 임상 위험 점수 해석이 필요한 경우 공인 영양사 또는 주치의와 상담하십시오.'
      },
      hi: {
        domain: 'specialty',
        sectionTitle: 'पोषण संदर्भ एवं नैदानिक विचार',
        sectionSubtitle: 'प्रोटीन लक्ष्य, जलयोजन आवश्यकता और विशेष स्क्रीनिंग स्कोर की व्याख्या।',
        interpretationTitle: 'साक्ष्य-आधारित पोषण और जलयोजन मानक',
        interpretationText: 'पोषण लक्ष्य अंतरराष्ट्रीय खेल पोषण दिशा-निर्देशों (सक्रिय व्यक्तियों के लिए 1.4–2.0 ग्राम/किग्रा प्रोटीन) और सामान्य जलयोजन मानकों पर आधारित हैं।',
        limitationsTitle: 'व्यक्तिगत स्वास्थ्य स्थितियां और सीमाएं',
        limitationsText: 'ये आंकड़े सामान्य गुर्दे और यकृत कार्यप्रणाली वाले वयस्कों के लिए हैं। गुर्दे की बीमारी वाले व्यक्तियों को चिकित्सकीय देखरेख में प्रोटीन और तरल पदार्थ सीमित करने की आवश्यकता होती है।',
        medicalNoticeTitle: 'चिकित्सीय एवं पोषण सलाह अस्वीकरण',
        medicalNoticeText: 'आहार में बड़ा बदलाव करने से पहले पंजीकृत आहार विशेषज्ञ या डॉक्टर से परामर्श करें।'
      }
    }
  };

  const domainMap = GUIDES[domain] || GUIDES.bmi;
  return domainMap[lang] || domainMap.en;
}
