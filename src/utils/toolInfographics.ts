import type { Locale } from './calculators';

export interface SpectrumSegment {
  label: string;
  range: string;
  color: string;
}

export interface ToolInfographicConfig {
  badge: string;
  titleSuffix: string;
  source: string;
  desc: string;
  caption: string;
  segments: SpectrumSegment[];
}

export function getToolInfographic(slug: string, lang: Locale, toolTitle: string): ToolInfographicConfig {
  const isHeartRate = ['heart-rate-zone-calculator', 'karvonen-heart-rate-calculator'].includes(slug);
  const isStrength = ['1rm-calculator', 'one-rep-max-calculator'].includes(slug);
  const isPregnancy = slug === 'pregnancy-weight-gain-calculator';
  const isIndianBmi = ['bmi-calculator-for-indians', 'bmi-calculator-india'].includes(slug);
  const isAsianBmi = slug === 'asian-bmi-calculator';
  const isBodyFat = ['body-fat-calculator', 'lean-body-mass-calculator'].includes(slug);
  const isWHR = slug === 'waist-to-hip-ratio-calculator';
  const isBmr = slug === 'bmr-calculator';
  const isMetabolic = ['tdee-calculator', 'maintenance-calorie-calculator', 'calorie-calculator'].includes(slug);
  const isMacro = slug === 'macro-calculator';
  const isProtein = slug === 'protein-intake-calculator';
  const isWater = slug === 'water-intake-calculator';
  const isDiabetes = slug === 'diabetes-risk-calculator';
  const isBsa = slug === 'body-surface-area-calculator';
  const isIdealWeight = slug === 'ideal-weight-calculator';

  // 1. HEART RATE ZONES (AHA & ACSM 5-Zone Continuum)
  if (isHeartRate) {
    const badges: Record<Locale, string> = {
      en: 'Cardiovascular Training Spectrum',
      es: 'Espectro de Entrenamiento Cardiovascular',
      fr: 'Spectre d\'Entraînement Cardiovasculaire',
      de: 'Kardiovaskuläres Trainingsspektrum',
      ko: '심혈관 트레이닝 강도 스펙트럼',
      hi: 'हृदय गति प्रशिक्षण स्पेक्ट्रम'
    };
    const titleSuffixes: Record<Locale, string> = {
      en: '5-Zone Heart Rate Training Continuum',
      es: 'Continuo de Frecuencia Cardíaca de 5 Zonas',
      fr: 'Continuum d\'Entraînement Cardiaque en 5 Zones',
      de: '5-Zonen-Herzfrequenz-Trainingskontinuum',
      ko: '5단계 심박수 트레이닝 연속체',
      hi: '5-ज़ोन हृदय गति प्रशिक्षण सातत्य'
    };
    const descs: Record<Locale, string> = {
      en: 'Cardiovascular training intensity zones based on maximum heart rate and Karvonen heart rate reserve standards.',
      es: 'Zonas de intensidad de entrenamiento cardiovascular basadas en la frecuencia cardíaca máxima y de reserva.',
      fr: 'Zones d\'intensité d\'entraînement cardiovasculaire basées sur la fréquence cardiaque maximale et de réserve.',
      de: 'Kardiovaskuläre Trainingszonen basierend auf maximaler Herzfrequenz und Herzfrequenzreserve nach Karvonen.',
      ko: '최대 심박수 및 카르보넨 예비 심박수(HRR) 기준에 따른 5단계 심혈관 운동 강도 구간입니다.',
      hi: 'अधिकतम हृदय गति और कार्वोनेन हार्ट रेट रिज़र्व पर आधारित 5-ज़ोन कार्डियोवास्कुलर प्रशिक्षण तीव्रता।'
    };
    const captions: Record<Locale, string> = {
      en: `Figure 1.1: 5-Zone cardiovascular training intensity continuum for ${toolTitle}. Source: American Heart Association (AHA) & ACSM Guidelines. Published for educational reference.`,
      es: `Figura 1.1: Continuo de entrenamiento cardiovascular en 5 zonas para ${toolTitle}. Fuente: American Heart Association (AHA) y ACSM.`,
      fr: `Figure 1.1 : Continuum d'entraînement cardiovasculaire en 5 zones pour ${toolTitle}. Source : American Heart Association (AHA) & ACSM.`,
      de: `Abbildung 1.1: 5-Zonen-Herzfrequenz-Trainingskontinuum für ${toolTitle}. Quelle: American Heart Association (AHA) & ACSM.`,
      ko: `그림 1.1: ${toolTitle}에 대한 5단계 심혈관 트레이닝 강도 스펙트럼. 출처: 미국심장협회(AHA) 및 ACSM 지침.`,
      hi: `चित्र 1.1: ${toolTitle} के लिए 5-ज़ोन हृदय गति प्रशिक्षण स्पेक्ट्रम। स्रोत: अमेरिकन हार्ट एसोसिएशन (AHA) एवं ACSM दिशानिर्देश।`
    };

    const zoneLabels: Record<Locale, [string, string, string, string, string]> = {
      en: ['Zone 1: Recovery', 'Zone 2: Fat Burn', 'Zone 3: Tempo', 'Zone 4: Threshold', 'Zone 5: VO2 Max'],
      es: ['Zona 1: Recuperación', 'Zona 2: Quema Grasa', 'Zona 3: Tempo', 'Zona 4: Umbral', 'Zona 5: VO2 Máx'],
      fr: ['Zone 1 : Récupération', 'Zone 2 : Base Aérobie', 'Zone 3 : Tempo', 'Zone 4 : Seuil', 'Zone 5 : VO2 Max'],
      de: ['Zone 1: Erholung', 'Zone 2: Fettverbrennung', 'Zone 3: Tempo', 'Zone 4: Schwellenbereich', 'Zone 5: VO2 Max'],
      ko: ['존 1: 적극적 회복', '존 2: 유산소 기초', '존 3: 템포 페이스', '존 4: 젖산 역치', '존 5: 최대산소섭취'],
      hi: ['ज़ोन 1: रिकवरी', 'ज़ोन 2: फैट बर्न', 'ज़ोन 3: टेम्पो', 'ज़ोन 4: थ्रेशोल्ड', 'ज़ोन 5: VO2 मैक्स']
    };
    const zl = zoneLabels[lang] || zoneLabels.en;

    return {
      badge: badges[lang] || badges.en,
      titleSuffix: titleSuffixes[lang] || titleSuffixes.en,
      source: 'American Heart Association (AHA) & ACSM',
      desc: descs[lang] || descs.en,
      caption: captions[lang] || captions.en,
      segments: [
        { label: zl[0], range: '50% – 60%', color: '#38bdf8' },
        { label: zl[1], range: '60% – 70%', color: '#34d399' },
        { label: zl[2], range: '70% – 80%', color: '#fbbf24' },
        { label: zl[3], range: '80% – 90%', color: '#fb923c' },
        { label: zl[4], range: '90% – 100%', color: '#f87171' }
      ]
    };
  }

  // 2. 1RM STRENGTH (NSCA & ACSM Resistance Continuum)
  if (isStrength) {
    const badges: Record<Locale, string> = {
      en: 'Strength & Load Continuum',
      es: 'Continuo de Fuerza y Carga',
      fr: 'Continuum de Force et de Charge',
      de: 'Kraft- & Belastungskontinuum',
      ko: '근력 및 중량 부하 스펙트럼',
      hi: 'शक्ति एवं भार सातत्य'
    };
    const titleSuffixes: Record<Locale, string> = {
      en: '1RM Intensity & Training Target Matrix',
      es: 'Matriz de Intensidad de 1RM y Objetivos',
      fr: 'Matrice d\'Intensité 1RM et Cibles',
      de: '1RM-Intensitätsmatrix & Trainingsziele',
      ko: '1RM 강도 백분율 및 훈련 목표 매트릭스',
      hi: '1RM तीव्रता एवं प्रशिक्षण लक्ष्य मैट्रिक्स'
    };
    const captions: Record<Locale, string> = {
      en: `Figure 1.1: One-Repetition Maximum (1RM) continuum for ${toolTitle}. Source: National Strength and Conditioning Association (NSCA) & ACSM Guidelines.`,
      es: `Figura 1.1: Continuo de 1RM para ${toolTitle}. Fuente: National Strength and Conditioning Association (NSCA) y ACSM.`,
      fr: `Figure 1.1 : Continuum du 1RM pour ${toolTitle}. Source : National Strength and Conditioning Association (NSCA) & ACSM.`,
      de: `Abbildung 1.1: Maximalkraft-Kontinuum (1RM) für ${toolTitle}. Quelle: NSCA & ACSM-Leitlinien.`,
      ko: `그림 1.1: ${toolTitle}에 대한 1RM 백분율 부하 연속체. 출처: 미국근력조절학회(NSCA) 및 ACSM 지침.`,
      hi: `चित्र 1.1: ${toolTitle} के लिए 1RM शक्ति सातत्य। स्रोत: NSCA एवं ACSM दिशानिर्देश।`
    };

    const sLabels: Record<Locale, [string, string, string, string]> = {
      en: ['Speed / Warm-up', 'Muscular Endurance', 'Hypertrophy', 'Maximal Strength (1RM)'],
      es: ['Velocidad / Calentamiento', 'Resistencia Muscular', 'Hipertrofia', 'Fuerza Máxima (1RM)'],
      fr: ['Vitesse / Échauffement', 'Endurance Musculaire', 'Hypertrophie', 'Force Maximale (1RM)'],
      de: ['Schnelligkeit / Aufwärmen', 'Kraftausdauer', 'Hypertrophie', 'Maximalkraft (1RM)'],
      ko: ['스피드 / 웜업', '근지구력', '근비대 (성장)', '최대 근력 (1RM)'],
      hi: ['गति / वॉर्म-अप', 'मांसपेशीय सहनशक्ति', 'हाइपरट्रॉफी', 'अधिकतम शक्ति (1RM)']
    };
    const sl = sLabels[lang] || sLabels.en;

    return {
      badge: badges[lang] || badges.en,
      titleSuffix: titleSuffixes[lang] || titleSuffixes.en,
      source: 'NSCA & ACSM Resistance Training Guidelines',
      desc: 'Resistance training load zones and repetition continuum based on percentage of 1-Repetition Maximum.',
      caption: captions[lang] || captions.en,
      segments: [
        { label: sl[0], range: '50% – 60% 1RM', color: '#38bdf8' },
        { label: sl[1], range: '60% – 70% 1RM', color: '#34d399' },
        { label: sl[2], range: '75% – 85% 1RM', color: '#fbbf24' },
        { label: sl[3], range: '85% – 100% 1RM', color: '#f87171' }
      ]
    };
  }

  // 3. PREGNANCY WEIGHT GAIN (Institute of Medicine & ACOG Benchmarks)
  if (isPregnancy) {
    const badges: Record<Locale, string> = {
      en: 'Maternal Health Guidelines',
      es: 'Pautas de Salud Materna',
      fr: 'Directives de Santé Maternelle',
      de: 'Mütterliche Gesundheitsrichtlinien',
      ko: '모성 보건 임신 체중 지침',
      hi: 'मातृ स्वास्थ्य दिशानिर्देश'
    };
    const titleSuffixes: Record<Locale, string> = {
      en: 'IOM Trimester Maternal Weight Gain Targets',
      es: 'Objetivos de Aumento de Peso Gestacional del IOM',
      fr: 'Objectifs de Prise de Poids Gestationnelle de l\'IOM',
      de: 'IOM-Empfehlungen zur Gewichtszunahme in der Schwangerschaft',
      ko: '미국의학연구소(IOM) 임신 중 권장 체중 증가 기준',
      hi: 'आईओएम तिमाही मातृ वजन वृद्धि लक्ष्य'
    };
    const captions: Record<Locale, string> = {
      en: `Figure 1.1: Recommended singleton pregnancy total weight gain ranges across pre-pregnancy BMI categories. Source: Institute of Medicine (IOM) & ACOG Guidelines.`,
      es: `Figura 1.1: Rangos recomendados de aumento de peso gestacional según el IMC previo al embarazo. Fuente: Instituto de Medicina (IOM) y ACOG.`,
      fr: `Figure 1.1 : Prise de poids totale recommandée selon l'IMC pré-grossesse. Source : Institut de Médecine (IOM) et ACOG.`,
      de: `Abbildung 1.1: Empfohlene Gewichtszunahme in der Schwangerschaft nach Ausgangs-BMI. Quelle: Institute of Medicine (IOM) & ACOG.`,
      ko: `그림 1.1: 임신 전 BMI 범주별 권장 총 체중 증가 범위. 출처: 미국의학연구소(IOM) 및 미국산부인과학회(ACOG) 지침.`,
      hi: `चित्र 1.1: गर्भावस्था पूर्व बीएमआई श्रेणियों के अनुसार अनुशंसित कुल वजन वृद्धि सीमा। स्रोत: आईओएम एवं ACOG दिशानिर्देश।`
    };

    const pLabels: Record<Locale, [string, string, string, string]> = {
      en: ['Pre-BMI < 18.5', 'Pre-BMI 18.5–24.9', 'Pre-BMI 25.0–29.9', 'Pre-BMI ≥ 30.0'],
      es: ['IMC Previo < 18.5', 'IMC Previo 18.5–24.9', 'IMC Previo 25.0–29.9', 'IMC Previo ≥ 30.0'],
      fr: ['IMC Initial < 18,5', 'IMC Initial 18,5–24,9', 'IMC Initial 25,0–29,9', 'IMC Initial ≥ 30,0'],
      de: ['Ausgangs-BMI < 18,5', 'Ausgangs-BMI 18,5–24,9', 'Ausgangs-BMI 25,0–29,9', 'Ausgangs-BMI ≥ 30,0'],
      ko: ['임신 전 저체중 (<18.5)', '임신 전 정상 (18.5–24.9)', '임신 전 과체중 (25.0–29.9)', '임신 전 비만 (≥30.0)'],
      hi: ['पूर्व-बीएमआई < 18.5', 'पूर्व-बीएमआई 18.5–24.9', 'पूर्व-बीएमआई 25.0–29.9', 'पूर्व-बीएमआई ≥ 30.0']
    };
    const pl = pLabels[lang] || pLabels.en;

    return {
      badge: badges[lang] || badges.en,
      titleSuffix: titleSuffixes[lang] || titleSuffixes.en,
      source: 'Institute of Medicine (IOM) & ACOG',
      desc: 'Singleton pregnancy total maternal weight gain targets tailored to pre-pregnancy BMI.',
      caption: captions[lang] || captions.en,
      segments: [
        { label: pl[0], range: '28 – 40 lbs (12.5–18 kg)', color: '#38bdf8' },
        { label: pl[1], range: '25 – 35 lbs (11.5–16 kg)', color: '#34d399' },
        { label: pl[2], range: '15 – 25 lbs (7–11.5 kg)', color: '#fbbf24' },
        { label: pl[3], range: '11 – 20 lbs (5–9 kg)', color: '#f87171' }
      ]
    };
  }

  // 4. INDIAN BMI (ICMR South Asian Criteria)
  if (isIndianBmi) {
    const badges: Record<Locale, string> = {
      en: 'ICMR National Consensus',
      es: 'Consenso Nacional ICMR',
      fr: 'Consensus National ICMR',
      de: 'ICMR Nationaler Konsensus',
      ko: '인도 의학연구위원회(ICMR) 표준',
      hi: 'आईसीएमआर राष्ट्रीय मानक'
    };
    const titleSuffixes: Record<Locale, string> = {
      en: 'Indian Adult BMI Cutoff Standards',
      es: 'Puntos de Corte de IMC para Adultos Indios',
      fr: 'Seuils d\'IMC pour Adultes Indiens',
      de: 'Indische Erwachsenen-BMI-Grenzwerte',
      ko: '인도 성인 BMI 기준치 및 위험도 판정표',
      hi: 'भारतीय वयस्क बीएमआई मानक श्रेणियां'
    };
    const captions: Record<Locale, string> = {
      en: `Figure 1.1: Official Indian Council of Medical Research (ICMR) adult BMI categories and risk cutoffs. Published for public health reference.`,
      es: `Figura 1.1: Puntos de corte oficiales del ICMR para adultos indios. Fuente: ICMR y directrices de consenso para la India.`,
      fr: `Figure 1.1 : Seuils officiels de l'ICMR pour adultes indiens. Source : Conseil indien de la recherche médicale (ICMR).`,
      de: `Abbildung 1.1: Offizielle ICMR-Grenzwerte für indische Erwachsene. Quelle: Indian Council of Medical Research.`,
      ko: `그림 1.1: 인도 의학연구위원회(ICMR) 성인 BMI 판정 기준치. 출처: ICMR 남아시아 합의 지침.`,
      hi: `चित्र 1.1: भारतीय चिकित्सा अनुसंधान परिषद (ICMR) वयस्क बीएमआई श्रेणियां एवं कटऑफ मानक।`
    };

    const iLabels: Record<Locale, [string, string, string, string]> = {
      en: ['Underweight', 'Normal Weight', 'Overweight', 'Obese (ICMR Threshold)'],
      es: ['Bajo Peso', 'Peso Saludable', 'Sobrepeso', 'Obesidad (Umbral ICMR)'],
      fr: ['Sous-poids', 'Poids Normal', 'Surpoids', 'Obésité (Seuil ICMR)'],
      de: ['Untergewicht', 'Normalgewicht', 'Übergewicht', 'Adipositas (ICMR-Grenze)'],
      ko: ['저체중', '정상 체중', '과체중 (주의)', '비만 (ICMR 고위험)'],
      hi: ['कम वजन', 'सामान्य वजन', 'अधिक वजन', 'मोटापा (ICMR कटऑफ)']
    };
    const il = iLabels[lang] || iLabels.en;

    return {
      badge: badges[lang] || badges.en,
      titleSuffix: titleSuffixes[lang] || titleSuffixes.en,
      source: 'Indian Council of Medical Research (ICMR 2009)',
      desc: 'Specific South Asian BMI screening cutoffs reflecting higher percentage body fat and central adiposity risk.',
      caption: captions[lang] || captions.en,
      segments: [
        { label: il[0], range: '< 18.5 kg/m²', color: '#38bdf8' },
        { label: il[1], range: '18.5 – 22.9 kg/m²', color: '#34d399' },
        { label: il[2], range: '23.0 – 24.9 kg/m²', color: '#fbbf24' },
        { label: il[3], range: '≥ 25.0 kg/m²', color: '#f87171' }
      ]
    };
  }

  // 5. ASIAN BMI (WHO Western Pacific Region WPRO)
  if (isAsianBmi) {
    const badges: Record<Locale, string> = {
      en: 'WHO Western Pacific Standards',
      es: 'Normas de la OMS para el Pacífico Occidental',
      fr: 'Normes OMS pour le Pacifique Occidental',
      de: 'WHO-Standards für den Westlichen Pazifik',
      ko: 'WHO 서태평양 지역 표준 지침',
      hi: 'डब्ल्यूएचओ पश्चिमी प्रशांत क्षेत्रीय मानक'
    };
    const titleSuffixes: Record<Locale, string> = {
      en: 'WHO Asian Action Points Diagram',
      es: 'Diagrama de Puntos de Acción de la OMS para Asia',
      fr: 'Diagramme des Points d\'Action OMS pour l\'Asie',
      de: 'WHO-Aktionspunkte-Diagramm für Asien',
      ko: 'WHO 아시아-태평양 BMI 실행 분별점 차트',
      hi: 'डब्ल्यूएचओ एशियाई एक्शन पॉइंट्स आरेख'
    };
    const captions: Record<Locale, string> = {
      en: `Figure 1.1: World Health Organization (WHO) Western Pacific Region (WPRO) Asian adult BMI classification and action triggers.`,
      es: `Figura 1.1: Puntos de corte de la OMS (WPRO) para adultos del Este y Sudeste Asiático. Fuente: Lancet 2004 y OMS.`,
      fr: `Figure 1.1 : Seuils de l'OMS (WPRO) pour les adultes d'Asie de l'Est et du Sud-Est. Source : Lancet 2004 & OMS.`,
      de: `Abbildung 1.1: WHO-WPRO-Klassifikation für ost- und südostasiatische Erwachsene. Quelle: Lancet 2004 & WHO.`,
      ko: `그림 1.1: WHO 서태평양 지침(WPRO) 동아시아·동남아시아 성인 BMI 실행 분별점. 출처: Lancet 2004 & WHO.`,
      hi: `चित्र 1.1: डब्ल्यूएचओ पश्चिमी प्रशांत क्षेत्र (WPRO) एशियाई वयस्क बीएमआई वर्गीकरण मानक।`
    };

    const aLabels: Record<Locale, [string, string, string, string]> = {
      en: ['Underweight', 'Normal / Low Risk', 'Increased Risk', 'High Risk (Obesity)'],
      es: ['Bajo Peso', 'Normal / Bajo Riesgo', 'Riesgo Aumentado', 'Alto Riesgo (Obesidad)'],
      fr: ['Sous-poids', 'Normal / Risque Faible', 'Risque Accru', 'Risque Élevé (Obésité)'],
      de: ['Untergewicht', 'Normal / Geringes Risiko', 'Erhöhtes Risiko', 'Hohes Risiko (Adipositas)'],
      ko: ['저체중', '정상 / 저위험군', '위험 증가 (과체중)', '고위험군 (비만)'],
      hi: ['कम वजन', 'सामान्य / कम जोखिम', 'बढ़ा हुआ जोखिम', 'उच्च जोखिम (मोटापा)']
    };
    const al = aLabels[lang] || aLabels.en;

    return {
      badge: badges[lang] || badges.en,
      titleSuffix: titleSuffixes[lang] || titleSuffixes.en,
      source: 'WHO Western Pacific Region (WPRO 2004 / Lancet)',
      desc: 'WHO Expert Consultation action triggers for East and Southeast Asian populations.',
      caption: captions[lang] || captions.en,
      segments: [
        { label: al[0], range: '< 18.5 kg/m²', color: '#38bdf8' },
        { label: al[1], range: '18.5 – 22.9 kg/m²', color: '#34d399' },
        { label: al[2], range: '23.0 – 27.4 kg/m²', color: '#fbbf24' },
        { label: al[3], range: '≥ 27.5 kg/m²', color: '#f87171' }
      ]
    };
  }

  // 6. BODY FAT & LEAN MASS (ACE Body Composition Standards)
  if (isBodyFat) {
    const badges: Record<Locale, string> = {
      en: 'Body Composition Standards',
      es: 'Estándares de Composición Corporal',
      fr: 'Normes de Composition Corporelle',
      de: 'Körperzusammensetzungs-Standards',
      ko: '체성분 분류 공식 기준',
      hi: 'शरीर संरचना मानक'
    };
    const titleSuffixes: Record<Locale, string> = {
      en: 'ACE Body Fat Percentage Spectrum',
      es: 'Espectro de Grasa Corporal de la ACE',
      fr: 'Spectre du Pourcentage de Graisse de l\'ACE',
      de: 'ACE Körperfett-Klassifikationsspektrum',
      ko: 'ACE 체지방률 생리학적 분류 스펙트럼',
      hi: 'ACE शरीर वसा प्रतिशत स्पेक्ट्रम'
    };
    const captions: Record<Locale, string> = {
      en: `Figure 1.1: Body fat percentage reference ranges and physiological classification based on American Council on Exercise (ACE) standards.`,
      es: `Figura 1.1: Rangos de porcentaje de grasa corporal según el Consejo Americano de Ejercicio (ACE).`,
      fr: `Figure 1.1 : Seuils de référence du pourcentage de graisse corporelle selon l'American Council on Exercise (ACE).`,
      de: `Abbildung 1.1: Referenzbereiche des Körperfettanteils nach Standards des American Council on Exercise (ACE).`,
      ko: `그림 1.1: 미국운동협의회(ACE) 기준에 따른 체지방률 생리학적 분류 구간.`,
      hi: `चित्र 1.1: अमेरिकन काउंसिल ऑन एक्सरसाइज (ACE) मानकों पर आधारित शरीर वसा प्रतिशत संदर्भ सीमाएं।`
    };

    const bfLabels: Record<Locale, [string, string, string, string]> = {
      en: ['Essential Fat', 'Athletes / Fitness', 'Average / Moderate', 'Excess Adiposity'],
      es: ['Grasa Esencial', 'Atletas / Forma Física', 'Promedio / Moderado', 'Exceso Adiposo'],
      fr: ['Graisse Essentielle', 'Athlètes / Forme', 'Moyenne / Modérée', 'Excès Adipeux'],
      de: ['Essentielles Fett', 'Sportler / Fitness', 'Durchschnitt', 'Erhöhtes Fettgewebe'],
      ko: ['필수 지방', '운동선수 / 피트니스', '일반 적정 범위', '과다 체지방'],
      hi: ['आवश्यक वसा', 'एथलीट / फिटनेस', 'औसत / मध्यम', 'अतिरिक्त वसा']
    };
    const bfl = bfLabels[lang] || bfLabels.en;

    return {
      badge: badges[lang] || badges.en,
      titleSuffix: titleSuffixes[lang] || titleSuffixes.en,
      source: 'American Council on Exercise (ACE)',
      desc: 'Physiological body fat thresholds distinguishing essential fat from fitness and excess adiposity.',
      caption: captions[lang] || captions.en,
      segments: [
        { label: bfl[0], range: '2–5% M | 10–13% W', color: '#38bdf8' },
        { label: bfl[1], range: '6–17% M | 14–24% W', color: '#34d399' },
        { label: bfl[2], range: '18–24% M | 25–31% W', color: '#fbbf24' },
        { label: bfl[3], range: '≥ 25% M | ≥ 32% W', color: '#f87171' }
      ]
    };
  }

  // 7. WAIST-TO-HIP RATIO (WHO Abdominal Adiposity)
  if (isWHR) {
    const badges: Record<Locale, string> = {
      en: 'Cardiometabolic Risk Spectrum',
      es: 'Espectro de Riesgo Cardiometabólico',
      fr: 'Spectre de Risque Cardiométabolique',
      de: 'Kardiometabolisches Risikospektrum',
      ko: '심혈관 대사 위험도 스펙트럼',
      hi: 'हृदय एवं चयापचय जोखिम स्पेक्ट्रम'
    };
    const titleSuffixes: Record<Locale, string> = {
      en: 'WHO Waist-to-Hip Health Risk Continuum',
      es: 'Continuo de Riesgo del Índice Cintura-Cadera de la OMS',
      fr: 'Continuum de Risque du Ratio Taille-Hanches de l\'OMS',
      de: 'WHO-Grenzwerte für das Taille-Hüft-Verhältnis',
      ko: 'WHO 허리-엉덩이 비율(WHR) 건강 위험 지표',
      hi: 'डब्ल्यूएचओ कमर-कूल्हा अनुपात स्वास्थ्य जोखिम सातत्य'
    };
    const captions: Record<Locale, string> = {
      en: `Figure 1.1: Abdominal adiposity risk categories based on World Health Organization (WHO) Waist Circumference & Waist-to-Hip Ratio Report.`,
      es: `Figura 1.1: Categorías de riesgo por grasa abdominal según el informe de la Organización Mundial de la Salud (OMS).`,
      fr: `Figure 1.1 : Risque d'adiposité abdominale selon les rapports de l'Organisation Mondiale de la Santé (OMS).`,
      de: `Abbildung 1.1: Abdominales Fettgeweberisiko nach Berichten der Weltgesundheitsorganisation (WHO).`,
      ko: `그림 1.1: 세계보건기구(WHO) 복부 비만 및 허리-엉덩이 둘레 비율 보고서에 따른 건강 위험도.`,
      hi: `चित्र 1.1: विश्व स्वास्थ्य संगठन (WHO) कमर-कूल्हा अनुपात रिपोर्ट पर आधारित पेट की चर्बी जोखिम श्रेणियां।`
    };

    const whrLabels: Record<Locale, [string, string, string]> = {
      en: ['Low Risk', 'Moderate Risk', 'High Risk (Visceral)'],
      es: ['Riesgo Bajo', 'Riesgo Moderado', 'Riesgo Alto (Visceral)'],
      fr: ['Risque Faible', 'Risque Modéré', 'Risque Élevé (Viscéral)'],
      de: ['Geringes Risiko', 'Moderates Risiko', 'Hohes Risiko (Viszeral)'],
      ko: ['낮은 위험도', '중등도 위험도', '고위험군 (내장지방)'],
      hi: ['कम जोखिम', 'मध्यम जोखिम', 'उच्च जोखिम (आंतरिक चर्बी)']
    };
    const whrl = whrLabels[lang] || whrLabels.en;

    return {
      badge: badges[lang] || badges.en,
      titleSuffix: titleSuffixes[lang] || titleSuffixes.en,
      source: 'World Health Organization (WHO 2011 Report)',
      desc: 'Central visceral adiposity thresholds correlating with cardiovascular and metabolic disease risks.',
      caption: captions[lang] || captions.en,
      segments: [
        { label: whrl[0], range: '< 0.85 W | < 0.90 M', color: '#34d399' },
        { label: whrl[1], range: '0.85–0.89 W | 0.90–0.99 M', color: '#fbbf24' },
        { label: whrl[2], range: '≥ 0.90 W | ≥ 1.00 M', color: '#f87171' }
      ]
    };
  }

  // 7B. BASAL METABOLIC RATE (Elia 1992 & Gallagher et al. 1998 Organ Energy Demands)
  if (isBmr) {
    const badges: Record<Locale, string> = {
      en: 'Basal Organ Energy Demands',
      es: 'Gasto Energético Basal por Órgano',
      fr: 'Dépense Métabolique Basale par Organe',
      de: 'Grundumsatz-Verteilung nach Organen',
      ko: '장기별 기초대사량 소모 비율',
      hi: 'अंगों द्वारा बेसल मेटाबॉलिक ऊर्जा खपत'
    };
    const titleSuffixes: Record<Locale, string> = {
      en: 'Resting Metabolic Rate by Organ System',
      es: 'Distribución del Gasto Metabólico por Órgano',
      fr: 'Répartition Métabolique Basale par Organe',
      de: 'Aufteilung des Grundumsatzes nach Organen',
      ko: '주요 장기별 휴식기 에너지 소비 분포',
      hi: 'विश्राम अवस्था में प्रमुख अंगों द्वारा ऊर्जा व्यय'
    };
    const descs: Record<Locale, string> = {
      en: 'Proportional contribution of vital internal organs and skeletal muscle to Basal Metabolic Rate (BMR) at complete rest.',
      es: 'Contribución proporcional de los órganos vitales y la masa muscular al metabolismo basal en reposo completo.',
      fr: 'Contribution proportionnelle des organes vitaux et du muscle squelettique au métabolisme de base au repos complet.',
      de: 'Prozentualer Anteil lebenswichtiger Organe und der Skelettmuskulatur am Grundumsatz (BMR) in völliger Ruhe.',
      ko: '완전한 휴식 상태에서 주요 생명 유지 장기와 골격근이 기초대사량(BMR)에서 차지하는 소모 비율.',
      hi: 'पूर्ण विश्राम की स्थिति में महत्वपूर्ण आंतरिक अंगों और मांसपेशियों द्वारा बेसल मेटाबॉलिक रेट (BMR) में योगदान।'
    };
    const captions: Record<Locale, string> = {
      en: `Figure 1.1: Relative organ and tissue contributions to resting Basal Metabolic Rate (BMR) for ${toolTitle}. Source: Elia M (1992) & Gallagher et al. Published for educational reference.`,
      es: `Figura 1.1: Contribución relativa de órganos y tejidos al metabolismo basal (BMR) para ${toolTitle}. Fuente: Elia M (1992) y Gallagher et al.`,
      fr: `Figure 1.1 : Contribution relative des organes et tissus au métabolisme de base (MB) pour ${toolTitle}. Source : Elia M (1992) et Gallagher et al.`,
      de: `Abbildung 1.1: Anteil von Organen und Geweben am Grundumsatz (BMR) für ${toolTitle}. Quelle: Elia M (1992) & Gallagher et al.`,
      ko: `그림 1.1: ${toolTitle}에 대한 인체 주요 장기 및 조직별 휴식기 기초대사량(BMR) 소모 기여도. 출처: Elia M (1992) 및 Gallagher et al.`,
      hi: `चित्र 1.1: ${toolTitle} के लिए विश्राम अवस्था में प्रमुख अंगों और ऊतकों का बेसल मेटाबॉलिक रेट (BMR) योगदान। स्रोत: Elia M (1992) एवं Gallagher et al.`
    };

    const bmrLabels: Record<Locale, [string, string, string, string, string]> = {
      en: ['Liver (Hepatic)', 'Brain (Neuronal)', 'Skeletal Muscle', 'Heart & Kidneys', 'Other Organs'],
      es: ['Hígado (Hepático)', 'Cerebro (Neuronal)', 'Músculo Esquelético', 'Corazón y Riñones', 'Otros Tejidos'],
      fr: ['Foie (Hépatique)', 'Cerveau (Neuronal)', 'Muscles Squelettiques', 'Cœur et Reins', 'Autres Tissus'],
      de: ['Leber (Hepatisch)', 'Gehirn (Neuronal)', 'Skelettmuskulatur', 'Herz & Nieren', 'Übrige Organe'],
      ko: ['간 (간장 대사)', '뇌 (신경계 활동)', '골격근 (휴식기 근긴장)', '심장 및 신장', '기타 장기 및 피부'],
      hi: ['यकृत (लिवर)', 'मस्तिष्क (न्यूरोनल)', 'कंकाल मांसपेशी', 'हृदय एवं गुर्दे', 'अन्य अंग एवं ऊतक']
    };
    const bl = bmrLabels[lang] || bmrLabels.en;

    return {
      badge: badges[lang] || badges.en,
      titleSuffix: titleSuffixes[lang] || titleSuffixes.en,
      source: 'Elia M (1992) & Gallagher et al. (Am J Clin Nutr 1998)',
      desc: descs[lang] || descs.en,
      caption: captions[lang] || captions.en,
      segments: [
        { label: bl[0], range: '~20–22%', color: '#f59e0b' },
        { label: bl[1], range: '~19–20%', color: '#38bdf8' },
        { label: bl[2], range: '~20–22%', color: '#34d399' },
        { label: bl[3], range: '~15–17%', color: '#f87171' },
        { label: bl[4], range: '~20–24%', color: '#a855f7' }
      ]
    };
  }

  // 8. METABOLIC & CALORIES (TDEE, Maintenance, Calorie)
  if (isMetabolic) {
    const badges: Record<Locale, string> = {
      en: 'Energy Balance Continuum',
      es: 'Continuo de Balance Energético',
      fr: 'Continuum de Bilan Énergétique',
      de: 'Energiebilanz-Kontinuum',
      ko: '에너지 소비 및 대사 연속체',
      hi: 'ऊर्जा संतुलन सातत्य'
    };
    const titleSuffixes: Record<Locale, string> = {
      en: 'Physical Activity Level (PAL) Multipliers',
      es: 'Factores de Nivel de Actividad Física (PAL)',
      fr: 'Coefficients de Niveau d\'Activité Physique (PAL)',
      de: 'Multiplikatoren des Körperlichen Aktivitätsniveaus (PAL)',
      ko: '신체 활동 수준(PAL) 에너지 소비 배수',
      hi: 'शारीरिक गतिविधि स्तर (PAL) मल्टीप्लायर'
    };
    const captions: Record<Locale, string> = {
      en: `Figure 1.1: Physical Activity Level (PAL) multipliers and energy expenditure continuum based on FAO/WHO/UNU Human Energy Requirements.`,
      es: `Figura 1.1: Factores PAL de gasto energético diario basados en las pautas de energía de la FAO/OMS/UNU.`,
      fr: `Figure 1.1 : Multiplicateurs PAL de dépense énergétique selon les recommandations de la FAO/OMS/UNU.`,
      de: `Abbildung 1.1: PAL-Aktivitätsmultiplikatoren und täglicher Energieumsatz nach FAO/WHO/UNU-Richtlinien.`,
      ko: `그림 1.1: FAO/WHO/UNU 인체 에너지 요구량 지침에 따른 신체 활동 수준(PAL) 배수 및 일일 소비량.`,
      hi: `चित्र 1.1: FAO/WHO/UNU ऊर्जा आवश्यकताओं पर आधारित शारीरिक गतिविधि स्तर (PAL) एवं दैनिक ऊर्जा व्यय।`
    };

    const mLabels: Record<Locale, [string, string, string, string]> = {
      en: ['Sedentary (Desk)', 'Light Active (1–3d)', 'Moderate (3–5d)', 'Very Active (Daily)'],
      es: ['Sedentario (Oficina)', 'Ligero (1–3d)', 'Moderado (3–5d)', 'Muy Activo (Diario)'],
      fr: ['Sédentaire (Bureau)', 'Légèrement Actif (1–3j)', 'Modéré (3–5j)', 'Très Actif (Quotidien)'],
      de: ['Sitzend (Büro)', 'Leicht Aktiv (1–3 Tage)', 'Moderat (3–5 Tage)', 'Sehr Aktiv (Täglich)'],
      ko: ['좌식 생활 (사무직)', '가벼운 활동 (주 1~3회)', '보통 활동 (주 3~5회)', '매우 활동적 (매일 고강도)'],
      hi: ['गतिहीन (डेस्क जॉब)', 'हल्का सक्रिय (1-3 दिन)', 'मध्यम सक्रिय (3-5 दिन)', 'अत्यधिक सक्रिय (दैनिक)']
    };
    const ml = mLabels[lang] || mLabels.en;

    return {
      badge: badges[lang] || badges.en,
      titleSuffix: titleSuffixes[lang] || titleSuffixes.en,
      source: 'FAO / WHO / UNU Human Energy Requirements',
      desc: 'Physical activity multipliers determining total daily energy expenditure from resting metabolic rate.',
      caption: captions[lang] || captions.en,
      segments: [
        { label: ml[0], range: 'BMR × 1.20', color: '#38bdf8' },
        { label: ml[1], range: 'BMR × 1.375', color: '#34d399' },
        { label: ml[2], range: 'BMR × 1.55', color: '#fbbf24' },
        { label: ml[3], range: 'BMR × 1.725+', color: '#f87171' }
      ]
    };
  }

  // 9. MACRONUTRIENTS (USDA AMDR & ISSN Macro Protocols)
  if (isMacro) {
    const badges: Record<Locale, string> = {
      en: 'Macronutrient Split Continuum',
      es: 'Distribución de Macronutrientes',
      fr: 'Répartition des Macronutriments',
      de: 'Makronährstoff-Verteilungsspektrum',
      ko: '탄단지 매크로 영양소 분배 스펙트럼',
      hi: 'मैक्रोन्यूट्रिएंट वितरण स्पेक्ट्रम'
    };
    const titleSuffixes: Record<Locale, string> = {
      en: 'Target Macro Ratio Protocols',
      es: 'Protocolos de Proporciones de Macros',
      fr: 'Protocoles de Ratios de Macronutriments',
      de: 'Ziel-Makronährstoff-Verhältnisprotokolle',
      ko: '목표별 3대 영양소 분배 프로토콜',
      hi: 'लक्ष्य-आधारित मैक्रो अनुपात प्रोटोकॉल'
    };
    const captions: Record<Locale, string> = {
      en: `Figure 1.1: Evidence-based macronutrient distribution ratios based on USDA AMDR and ISSN consensus standards. Published for educational reference.`,
      es: `Figura 1.1: Ratios de distribución de macronutrientes basados en los estándares AMDR del USDA e ISSN.`,
      fr: `Figure 1.1 : Ratios de répartition des macronutriments selon les normes AMDR de l'USDA et de l'ISSN.`,
      de: `Abbildung 1.1: Makronährstoff-Verteilungsverhältnisse nach USDA-AMDR- und ISSN-Konsensrichtlinien.`,
      ko: `그림 1.1: 미국 농무부(USDA) 허용 매크로 범위(AMDR) 및 국제스포츠영양학회(ISSN) 기준 매크로 분배 비율.`,
      hi: `चित्र 1.1: यूएसडीए (USDA) और इंटरनेशनल सोसाइटी ऑफ स्पोर्ट्स न्यूट्रिशन (ISSN) दिशानिर्देशों पर आधारित मैक्रोन्यूट्रिएंट अनुपात।`
    };

    const macroLabels: Record<Locale, [string, string, string, string]> = {
      en: ['Balanced (40/30/30)', 'High-Protein (35/40/25)', 'Endurance (55/20/25)', 'Low-Carb (20/40/40)'],
      es: ['Equilibrado (40/30/30)', 'Alto en Proteína (35/40/25)', 'Resistencia (55/20/25)', 'Bajo en Carbos (20/40/40)'],
      fr: ['Équilibré (40/30/30)', 'Riche en Protéines (35/40/25)', 'Endurance (55/20/25)', 'Pauvre en Glucides (20/40/40)'],
      de: ['Ausgewogen (40/30/30)', 'Proteinreich (35/40/25)', 'Ausdauer (55/20/25)', 'Kohlenhydratarm (20/40/40)'],
      ko: ['균형 식단 (40/30/30)', '고단백 식단 (35/40/25)', '지구력 운동 (55/20/25)', '저탄수화물 (20/40/40)'],
      hi: ['संतुलित (40/30/30)', 'उच्च प्रोटीन (35/40/25)', 'सहनशक्ति (55/20/25)', 'कम कार्ब (20/40/40)']
    };
    const mcl = macroLabels[lang] || macroLabels.en;

    return {
      badge: badges[lang] || badges.en,
      titleSuffix: titleSuffixes[lang] || titleSuffixes.en,
      source: 'USDA Dietary Guidelines & ISSN Position Stand',
      desc: 'Caloric distribution protocols optimizing muscle protein synthesis, athletic glycogen replenishment, and hormonal health.',
      caption: captions[lang] || captions.en,
      segments: [
        { label: mcl[0], range: '40% C · 30% P · 30% F', color: '#38bdf8' },
        { label: mcl[1], range: '35% C · 40% P · 25% F', color: '#34d399' },
        { label: mcl[2], range: '55% C · 20% P · 25% F', color: '#fbbf24' },
        { label: mcl[3], range: '20% C · 40% P · 40% F', color: '#f87171' }
      ]
    };
  }

  // 9. DIABETES RISK (FINDRISC / ADA Score)
  if (isDiabetes) {
    const badges: Record<Locale, string> = {
      en: 'Type 2 Diabetes Screening',
      es: 'Cribado de Diabetes Tipo 2',
      fr: 'Dépistage du Diabète de Type 2',
      de: 'Typ-2-Diabetes-Früherkennung',
      ko: '제2형 당뇨병 대사 위험 선별',
      hi: 'टाइप 2 मधुमेह स्क्रीनिंग'
    };
    const titleSuffixes: Record<Locale, string> = {
      en: 'FINDRISC & ADA Risk Score Tiers',
      es: 'Niveles de Puntuación de Riesgo FINDRISC y ADA',
      fr: 'Paliers de Risque FINDRISC et ADA',
      de: 'FINDRISC- & ADA-Risikostufen',
      ko: 'FINDRISC 및 미국당뇨병학회(ADA) 위험도 단계',
      hi: 'FINDRISC एवं ADA जोखिम स्कोर स्तर'
    };
    const captions: Record<Locale, string> = {
      en: `Figure 1.1: 10-Year Type 2 diabetes probability tiers based on FINDRISC and American Diabetes Association (ADA) criteria.`,
      es: `Figura 1.1: Niveles de probabilidad de diabetes tipo 2 según la escala FINDRISC y la ADA.`,
      fr: `Figure 1.1 : Paliers de probabilité de diabète de type 2 fondés sur les critères FINDRISC et ADA.`,
      de: `Abbildung 1.1: 10-Jahres-Wahrscheinlichkeitsstufen für Typ-2-Diabetes nach FINDRISC und ADA.`,
      ko: `그림 1.1: FINDRISC 및 미국당뇨병학회(ADA) 기준에 따른 10년 내 제2형 당뇨병 발병 위험도.`,
      hi: `चित्र 1.1: FINDRISC और अमेरिकन डायबिटीज एसोसिएशन (ADA) मानदंडों पर आधारित टाइप 2 मधुमेह जोखिम स्तर।`
    };

    const dLabels: Record<Locale, [string, string, string, string]> = {
      en: ['Low Risk (< 1%)', 'Slightly Elevated (4%)', 'Moderate Risk (17%)', 'High Risk (33%+)'],
      es: ['Riesgo Bajo (< 1%)', 'Ligeramente Elevado (4%)', 'Riesgo Moderado (17%)', 'Riesgo Alto (33%+)'],
      fr: ['Risque Faible (< 1%)', 'Légèrement Élevé (4%)', 'Risque Modéré (17%)', 'Risque Élevé (33%+)'],
      de: ['Geringes Risiko (< 1%)', 'Leicht Erhöht (4%)', 'Mittleres Risiko (17%)', 'Hohes Risiko (33%+)'],
      ko: ['낮은 위험 (< 1%)', '약간 증가 (약 4%)', '중등도 위험 (약 17%)', '고위험군 (33% 이상)'],
      hi: ['कम जोखिम (< 1%)', 'हल्का बढ़ा हुआ (4%)', 'मध्यम जोखिम (17%)', 'उच्च जोखिम (33%+)']
    };
    const dl = dLabels[lang] || dLabels.en;

    return {
      badge: badges[lang] || badges.en,
      titleSuffix: titleSuffixes[lang] || titleSuffixes.en,
      source: 'American Diabetes Association (ADA) & FINDRISC',
      desc: 'Validated non-invasive clinical risk tiers estimating 10-year probability of developing Type 2 diabetes.',
      caption: captions[lang] || captions.en,
      segments: [
        { label: dl[0], range: '< 7 Points', color: '#34d399' },
        { label: dl[1], range: '7 – 11 Points', color: '#38bdf8' },
        { label: dl[2], range: '12 – 14 Points', color: '#fbbf24' },
        { label: dl[3], range: '≥ 15 Points', color: '#f87171' }
      ]
    };
  }

  // 10. PROTEIN INTAKE (ISSN & ACSM Targets)
  if (isProtein) {
    const badges: Record<Locale, string> = {
      en: 'Dietary Protein Guidelines',
      es: 'Pautas de Proteína Dietética',
      fr: 'Recommandations en Protéines',
      de: 'Ernährungsrichtlinien Protein',
      ko: '일일 단백질 섭취 기준',
      hi: 'दैनिक प्रोटीन दिशानिर्देश'
    };
    const titleSuffixes: Record<Locale, string> = {
      en: 'ISSN & ACSM Protein Target Continuum',
      es: 'Continuo de Proteína según ISSN y ACSM',
      fr: 'Continuum d\'Apport Protéique ISSN & ACSM',
      de: 'Protein-Zielbereiche nach ISSN & ACSM',
      ko: 'ISSN 및 ACSM 목표별 단백질 섭취량 스펙트럼',
      hi: 'ISSN एवं ACSM प्रोटीन लक्ष्य सातत्य'
    };
    const captions: Record<Locale, string> = {
      en: `Figure 1.1: Daily dietary protein requirements per kilogram of body weight. Source: International Society of Sports Nutrition (ISSN) & ACSM.`,
      es: `Figura 1.1: Requerimientos diarios de proteína por kilogramo de peso. Fuente: ISSN y ACSM.`,
      fr: `Figure 1.1 : Besoins quotidiens en protéines par kilogramme de poids corporel. Source : ISSN & ACSM.`,
      de: `Abbildung 1.1: Täglicher Proteinbedarf pro Kilogramm Körpergewicht nach ISSN & ACSM.`,
      ko: `그림 1.1: 체중 1kg당 일일 권장 단백질 섭취량. 출처: 국제스포츠영양학회(ISSN) 및 ACSM.`,
      hi: `चित्र 1.1: शरीर के वजन के प्रति किलोग्राम दैनिक प्रोटीन की आवश्यकताएं। स्रोत: ISSN एवं ACSM दिशानिर्देश।`
    };

    const protLabels: Record<Locale, [string, string, string, string]> = {
      en: ['Sedentary Baseline', 'Endurance Athlete', 'Fitness & Recovery', 'Hypertrophy & Strength'],
      es: ['Sedentario Base', 'Atleta de Resistencia', 'Forma Física', 'Hipertrofia y Fuerza'],
      fr: ['Base Sédentaire', 'Athlète d\'Endurance', 'Forme & Récupération', 'Hypertrophie & Force'],
      de: ['Sitzende Basis', 'Ausdauersport', 'Fitness & Erholung', 'Hypertrophie & Kraft'],
      ko: ['최소 권장량 (사무직)', '지구력 운동선수', '일반 피트니스 및 회복', '근비대 및 파워 스트렝스'],
      hi: ['गतिहीन न्यूनतम', 'सहनशक्ति एथलीट', 'फिटनेस एवं रिकवरी', 'हाइपरट्रॉफी एवं शक्ति']
    };
    const ptl = protLabels[lang] || protLabels.en;

    return {
      badge: badges[lang] || badges.en,
      titleSuffix: titleSuffixes[lang] || titleSuffixes.en,
      source: 'ISSN & ACSM Sports Nutrition Guidelines',
      desc: 'Evidence-based daily protein targets based on physical training demands and body mass.',
      caption: captions[lang] || captions.en,
      segments: [
        { label: ptl[0], range: '0.8 g / kg', color: '#38bdf8' },
        { label: ptl[1], range: '1.2 – 1.4 g / kg', color: '#34d399' },
        { label: ptl[2], range: '1.4 – 1.6 g / kg', color: '#fbbf24' },
        { label: ptl[3], range: '1.6 – 2.2 g / kg', color: '#f87171' }
      ]
    };
  }

  // 11. WATER INTAKE (National Academies / ACSM Hydration)
  if (isWater) {
    const badges: Record<Locale, string> = {
      en: 'Daily Hydration Standards',
      es: 'Estándares de Hidratación Diaria',
      fr: 'Normes d\'Hydratation Quotidienne',
      de: 'Tägliche Flüssigkeitsstandards',
      ko: '일일 수분 섭취 권장 기준',
      hi: 'दैनिक जलयोजन मानक'
    };
    const titleSuffixes: Record<Locale, string> = {
      en: 'Hydration Target Continuum',
      es: 'Continuo de Objetivos de Hidratación',
      fr: 'Continuum des Besoins Hydriques',
      de: 'Flüssigkeitsbedarf-Kontinuum',
      ko: '활동량 및 기후별 일일 수분 섭취 연속체',
      hi: 'दैनिक जलयोजन लक्ष्य सातत्य'
    };
    const captions: Record<Locale, string> = {
      en: `Figure 1.1: Recommended daily fluid intake baseline and active exercise compensation. Source: National Academies & ACSM.`,
      es: `Figura 1.1: Pautas de ingesta diaria de líquidos según las Academias Nacionales y ACSM.`,
      fr: `Figure 1.1 : Repères d'apport hydrique quotidien selon les Académies Nationales et l'ACSM.`,
      de: `Abbildung 1.1: Richtwerte für die tägliche Flüssigkeitsaufnahme nach National Academies & ACSM.`,
      ko: `그림 1.1: 미국 한림원(National Academies) 및 ACSM 지침에 따른 일일 수분 섭취 기준.`,
      hi: `चित्र 1.1: नेशनल एकेडमीज और ACSM दिशानिर्देशों पर आधारित दैनिक तरल सेवन संदर्भ।`
    };

    const wLabels: Record<Locale, [string, string, string, string]> = {
      en: ['Sedentary Baseline', 'Moderate Active', 'Intense Workout', 'Heat & Endurance'],
      es: ['Sedentario Base', 'Moderadamente Activo', 'Entrenamiento Intenso', 'Calor y Resistencia'],
      fr: ['Base Sédentaire', 'Modérément Actif', 'Entraînement Intense', 'Chaleur & Endurance'],
      de: ['Sitzende Basis', 'Moderat Aktiv', 'Intensives Training', 'Hitze & Ausdauer'],
      ko: ['기본 권장량 (사무직)', '보통 활동량', '고강도 운동', '폭염 및 장시간 지구력'],
      hi: ['गतिहीन आधार रेखा', 'मध्यम सक्रिय', 'तीव्र कसरत', 'गर्मी एवं सहनशक्ति']
    };
    const wl = wLabels[lang] || wLabels.en;

    return {
      badge: badges[lang] || badges.en,
      titleSuffix: titleSuffixes[lang] || titleSuffixes.en,
      source: 'National Academies of Sciences & ACSM',
      desc: 'Baseline daily fluid intake adjusted for physical exercise sweat losses and environmental heat.',
      caption: captions[lang] || captions.en,
      segments: [
        { label: wl[0], range: '2.0 – 2.5 L / day', color: '#38bdf8' },
        { label: wl[1], range: '2.5 – 3.0 L / day', color: '#34d399' },
        { label: wl[2], range: '3.0 – 3.8 L / day', color: '#fbbf24' },
        { label: wl[3], range: '3.8 – 4.5+ L / day', color: '#f87171' }
      ]
    };
  }

  // 12. BODY SURFACE AREA (Mosteller RD 1987 NEJM & Du Bois 1916)
  if (isBsa) {
    const badges: Record<Locale, string> = {
      en: 'BSA Surface Spectrum',
      es: 'Espectro de Superficie Corporal (BSA)',
      fr: 'Spectre de Surface Corporelle (BSA)',
      de: 'Körperoberflächen-Spektrum (BSA)',
      ko: '체표면적(BSA) 참조 스펙트럼',
      hi: 'शारीरिक सतह क्षेत्र (BSA) स्पेक्ट्रम'
    };
    const titleSuffixes: Record<Locale, string> = {
      en: 'Mosteller & Du Bois BSA Distribution',
      es: 'Distribución de Superficie Corporal Mosteller y Du Bois',
      fr: 'Distribution de la Surface Corporelle Mosteller & Du Bois',
      de: 'Mosteller & Du Bois KOF-Verteilungskontinuum',
      ko: 'Mosteller 및 Du Bois 체표면적 분포 연속체',
      hi: 'मोस्टेलर एवं डु बोइस शारीरिक सतह क्षेत्र वितरण'
    };
    const captions: Record<Locale, string> = {
      en: `Figure 1.1: Body Surface Area (BSA) reference distribution and clinical benchmarks in m². Source: Mosteller RD (1987) & Du Bois (1916). Published for educational reference.`,
      es: `Figura 1.1: Distribución de referencia de superficie corporal (BSA) en m². Fuente: Mosteller RD (1987) y Du Bois (1916).`,
      fr: `Figure 1.1 : Distribution de référence de la surface corporelle (BSA) en m². Source : Mosteller RD (1987) et Du Bois (1916).`,
      de: `Abbildung 1.1: Referenzverteilung der Körperoberfläche (KOF/BSA) in m². Quelle: Mosteller RD (1987) & Du Bois (1916).`,
      ko: `그림 1.1: 신체 체표면적(BSA) 표준 분포 및 성인 참조 벤치마크 (m² 단위). 출처: Mosteller RD (1987) 및 Du Bois (1916).`,
      hi: `चित्र 1.1: शारीरिक सतह क्षेत्र (BSA) संदर्भ वितरण और नैदानिक बेंचमार्क (m²)। स्रोत: मोस्टेलर (1987) एवं डु बोइस (1916)।`
    };

    const bsaLabels: Record<Locale, [string, string, string, string]> = {
      en: ['Children / Pediatric', 'Petite Adult Stature', 'Standard Adult Average', 'Large Stature / High BSA'],
      es: ['Pediátrico / Niños', 'Adulto de Baja Estatura', 'Promedio Adulto Estándar', 'Gran Estatura / BSA Alto'],
      fr: ['Pédiatrique / Enfants', 'Adulte Petite Taille', 'Moyenne Adulte Standard', 'Grande Taille / Forte Surface'],
      de: ['Pädiatrisch / Kinder', 'Zierliche Statur', 'Erwachsenen-Mittelwert', 'Große Statur / Hohe KOF'],
      ko: ['소아 / 청소년 (<1.2 m²)', '소체격 성인 (1.2–1.6 m²)', '표준 성인 평균 (1.6–2.0 m²)', '대체격 성인 (≥2.0 m²)'],
      hi: ['बाल चिकित्सा (<1.2 m²)', 'छोटे कद के वयस्क (1.2–1.6 m²)', 'मानक वयस्क औसत (1.6–2.0 m²)', 'विशाल कद / उच्च BSA (≥2.0 m²)']
    };
    const bl = bsaLabels[lang] || bsaLabels.en;

    return {
      badge: badges[lang] || badges.en,
      titleSuffix: titleSuffixes[lang] || titleSuffixes.en,
      source: 'Mosteller RD (1987 NEJM) & Du Bois (1916)',
      desc: 'Adult and pediatric body surface area reference ranges in square meters (m²) across statures.',
      caption: captions[lang] || captions.en,
      segments: [
        { label: bl[0], range: '< 1.20 m²', color: '#38bdf8' },
        { label: bl[1], range: '1.20 – 1.60 m²', color: '#34d399' },
        { label: bl[2], range: '1.60 – 2.00 m²', color: '#fbbf24' },
        { label: bl[3], range: '≥ 2.00 m²', color: '#f87171' }
      ]
    };
  }

  // 13. IDEAL BODY WEIGHT (Devine, Robinson, Miller, Hamwi)
  if (isIdealWeight) {
    const badges: Record<Locale, string> = {
      en: 'Ideal Body Weight (IBW) Spectrum',
      es: 'Espectro de Peso Corporal Ideal',
      fr: 'Spectre du Poids Idéal Théorique',
      de: 'Idealgewicht-Spektrum (IBW)',
      ko: '이상적 표준 체중(IBW) 스펙트럼',
      hi: 'आदर्श शारीरिक वजन (IBW) स्पेक्ट्रम'
    };
    const titleSuffixes: Record<Locale, string> = {
      en: 'Clinical IBW Formula Benchmark Spectrum',
      es: 'Continuo de Fórmulas Clínicas de Peso Ideal',
      fr: 'Continuum des Formules Cliniques de Poids Idéal',
      de: 'Klinisches Idealgewicht-Formelkontinuum',
      ko: '임상 표준 체중 공식 연속체 (Devine / Robinson / Miller)',
      hi: 'नैदानिक IBW फॉर्मूला बेंचमार्क सातत्य'
    };
    const captions: Record<Locale, string> = {
      en: `Figure 1.1: Ideal Body Weight (IBW) reference targets across validated clinical equations for height. Published for educational reference.`,
      es: `Figura 1.1: Objetivos de peso corporal ideal (IBW) según ecuaciones clínicas validadas.`,
      fr: `Figure 1.1 : Repères de poids idéal théorique (IBW) selon les équations cliniques validées.`,
      de: `Abbildung 1.1: Idealgewicht-Zielbereiche (IBW) nach validierten klinischen Formeln.`,
      ko: `그림 1.1: 신장별 검증된 임상 표준 체중 공식(Devine, Robinson, Miller) 산출 범위.`,
      hi: `चित्र 1.1: ऊंचाई के अनुसार मान्य नैदानिक सूत्रों (डिवाइन, रॉबिन्सन, मिलर) पर आधारित आदर्श वजन सीमा।`
    };

    const ibwLabels: Record<Locale, [string, string, string, string]> = {
      en: ['Petite Frame', 'Average Adult IBW', 'Tall Stature IBW', 'Broad / Athletic Frame'],
      es: ['Constitución Menuda', 'Peso Ideal Promedio', 'Estatura Alta', 'Complexión Robusta/Atlética'],
      fr: ['Petite Morphologie', 'Poids Idéal Moyen', 'Grande Taille', 'Morphologie Athlétique'],
      de: ['Zierlicher Körperbau', 'Durchschnittliches IBW', 'Große Statur', 'Breiter/Athletischer Bau'],
      ko: ['작은 골격 (슬림)', '표준 성인 이상 체중', '장신 성인 체중', '넓은 골격 / 운동선수형'],
      hi: ['छोटा शारीरिक ढांचा', 'औसत वयस्क आदर्श वजन', 'लंबा कद आदर्श वजन', 'मजबूत / एथलेटिक ढांचा']
    };
    const il = ibwLabels[lang] || ibwLabels.en;

    return {
      badge: badges[lang] || badges.en,
      titleSuffix: titleSuffixes[lang] || titleSuffixes.en,
      source: 'Devine (1974), Robinson (1983) & Hamwi (1964)',
      desc: 'Validated clinical target body weight equations indexed to height and anatomical skeletal frame.',
      caption: captions[lang] || captions.en,
      segments: [
        { label: il[0], range: '48.0 – 58.0 kg', color: '#38bdf8' },
        { label: il[1], range: '58.0 – 68.0 kg', color: '#34d399' },
        { label: il[2], range: '68.0 – 78.0 kg', color: '#fbbf24' },
        { label: il[3], range: '78.0 – 88.0+ kg', color: '#f87171' }
      ]
    };
  }

  // 12. DEFAULT: STANDARD WHO ADULT BMI (WHO Technical Report Series 854 & CDC)
  const defaultBadges: Record<Locale, string> = {
    en: 'Visual Reference Infographic',
    es: 'Infografía de Referencia Visual',
    fr: 'Infographie de Référence Visuelle',
    de: 'Visuelle Referenz-Infografik',
    ko: '시각적 참조 인포그래픽',
    hi: 'दृश्य संदर्भ इन्फोग्राफिक'
  };
  const defaultTitleSuffixes: Record<Locale, string> = {
    en: 'Visual Spectrum Diagram',
    es: 'Diagrama de Espectro Visual',
    fr: 'Diagramme du Spectre Visuel',
    de: 'Visuelles Spektrum-Diagramm',
    ko: '시각적 스펙트럼 다이어그램',
    hi: 'विज़ुअल स्पेक्ट्रम आरेख'
  };
  const defaultCaptions: Record<Locale, string> = {
    en: `Figure 1.1: Reference spectrum and classification cutoffs for ${toolTitle}. Source & Credit: World Health Organization (WHO) Technical Report Series 854 & CDC Guidelines. Published for educational reference.`,
    es: `Figura 1.1: Espectro de referencia y puntos de corte para ${toolTitle}. Fuente y Crédito: Serie de Informes Técnicos de la OMS y CDC.`,
    fr: `Figure 1.1 : Repères et seuils de référence pour ${toolTitle}. Source et Crédit : Série de Rapports Techniques de l'OMS et CDC.`,
    de: `Abbildung 1.1: Referenzspektrum und Richtwerte für ${toolTitle}. Quelle & Urheber: Technische Berichtsreihe der WHO und CDC.`,
    ko: `그림 1.1: ${toolTitle}에 대한 참조 스펙트럼 및 기준치. 출처 및 크레딧: 세계보건기구(WHO) 기술 보고서 시리즈 854 및 CDC 지침.`,
    hi: `चित्र 1.1: ${toolTitle} के लिए संदर्भ स्पेक्ट्रम एवं सीमाएं। स्रोत एवं श्रेय: विश्व स्वास्थ्य संगठन (WHO) तकनीकी रिपोर्ट श्रृंखला 854 एवं CDC दिशानिर्देश।`
  };

  const defaultBmiLabels: Record<Locale, [string, string, string, string]> = {
    en: ['Underweight / Low', 'Normal / Healthy', 'Overweight / Moderate', 'Obese / High Risk'],
    es: ['Bajo peso / Bajo', 'Normal / Saludable', 'Sobrepeso / Moderado', 'Obesidad / Alto riesgo'],
    fr: ['Insuffisance pondérale', 'Normal / Santé', 'Surpoids / Modéré', 'Obésité / Risque élevé'],
    de: ['Untergewicht / Niedrig', 'Normalgewicht / Gesund', 'Übergewicht / Moderat', 'Adipositas / Hohes Risiko'],
    ko: ['저체중 / 위험도 낮음', '정상 / 건강 체중', '과체중 / 주의 요망', '비만 / 고위험군'],
    hi: ['कम वजन / निम्न', 'सामान्य / स्वस्थ', 'अधिक वजन / मध्यम', 'मोटापा / उच्च जोखिम']
  };
  const dbl = defaultBmiLabels[lang] || defaultBmiLabels.en;

  return {
    badge: defaultBadges[lang] || defaultBadges.en,
    titleSuffix: defaultTitleSuffixes[lang] || defaultTitleSuffixes.en,
    source: 'WHO Technical Report Series 854',
    desc: 'Graphical representation of standard classification cutoffs and category ranges based on published WHO guidelines.',
    caption: defaultCaptions[lang] || defaultCaptions.en,
    segments: [
      { label: dbl[0], range: '< 18.5', color: '#38bdf8' },
      { label: dbl[1], range: '18.5 – 24.9', color: '#34d399' },
      { label: dbl[2], range: '25.0 – 29.9', color: '#fbbf24' },
      { label: dbl[3], range: '≥ 30.0', color: '#f87171' }
    ]
  };
}

