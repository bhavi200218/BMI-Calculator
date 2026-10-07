import fs from 'fs';

const faqDict = {
  // Q1
  'Is the BMI chart for men different from the BMI chart for women?': {
    es: {
      q: '¿Es diferente la tabla de IMC para hombres de la tabla de IMC para mujeres?',
      a: 'La tabla de IMC para adultos de la OMS utiliza los mismos puntos de corte (18.5 a 24.9 para peso normal) tanto para hombres como para mujeres adultas. No obstante, las medidas de cintura aportan contexto complementario.'
    },
    fr: {
      q: 'Le tableau de l\'IMC pour hommes est-il différent de celui pour femmes ?',
      a: 'Le tableau officiel de l\'OMS utilise les mêmes seuils (18,5 à 24,9 pour le poids normal) pour les hommes et les femmes adultes. La mesure du tour de taille apporte un contexte d\'évaluation supplémentaire.'
    },
    de: {
      q: 'Unterscheidet sich die BMI-Tabelle für Männer von der für Frauen?',
      a: 'Die WHO-BMI-Tabelle für Erwachsene verwendet dieselben Grenzwerte (18,5 bis 24,9 für Normalgewicht) für Männer und Frauen. Taillenumfang und Körperzusammensetzung bieten zusätzlichen Kontext.'
    },
    ko: {
      q: '남성과 여성의 BMI 차트 기준은 서로 다른가요?',
      a: 'WHO 성인 BMI 분류표는 성인 남성과 여성 모두에게 동일한 정상 체중 기준(18.5~24.9)을 적용합니다. 체지방 분포를 확인하기 위해 허리둘레 측정을 함께 고려하는 것이 권장됩니다.'
    }
  },
  // Q2
  'How does the BMI chart by age work for adults vs seniors?': {
    es: {
      q: '¿Cómo funciona la tabla de IMC según la edad en adultos y adultos mayores?',
      a: 'Las categorías estándar de la OMS se aplican a todos los adultos a partir de los 20 años. En mayores de 65 años, un IMC ligeramente superior (23.0 a 27.0 kg/m²) puede ser protector frente a la fragilidad.'
    },
    fr: {
      q: 'Comment le tableau d\'IMC évolue-t-il selon l\'âge chez les adultes et les seniors ?',
      a: 'Les catégories standards de l\'OMS s\'appliquent dès 20 ans. Chez les seniors de plus de 65 ans, un IMC légèrement plus élevé (23,0 à 27,0 kg/m²) peut protéger contre la fragilité.'
    },
    de: {
      q: 'Wie funktioniert die BMI-Tabelle nach Alter für Erwachsene und Senioren?',
      a: 'Die Standardkategorien der WHO gelten für alle Erwachsenen ab 20 Jahren. Bei Senioren über 65 Jahren kann ein leicht höherer BMI (23,0 bis 27,0 kg/m²) Schutz vor Knochendichteverlust bieten.'
    },
    ko: {
      q: '성인과 고령자에서 연령별 BMI 차트는 어떻게 적용되나요?',
      a: 'WHO 표준 분류 기준은 20세 이상 성인 전 연령에 적용됩니다. 65세 이상 고령층의 경우 약간 높은 BMI(23.0~27.0 kg/m²)가 골밀도 유지 및 노쇠 예방에 유리할 수 있습니다.'
    }
  },
  // Q3
  'What are the main BMI categories on the official chart?': {
    es: {
      q: '¿Cuáles son las categorías principales de la tabla oficial de IMC?',
      a: 'Las categorías oficiales de la OMS son: Bajo peso (< 18.5), Peso normal (18.5 – 24.9), Sobrepeso (25.0 – 29.9), Obesidad Clase I (30.0 – 34.9), Obesidad Clase II (35.0 – 39.9) y Obesidad Clase III (≥ 40.0).'
    },
    fr: {
      q: 'Quelles sont les catégories officielles du tableau de l\'OMS ?',
      a: 'Les catégories officielles de l\'OMS sont : Sous-poids (< 18,5), Poids normal (18,5 – 24,9), Surpoids (25,0 – 29,9), Obésité classe I (30,0 – 34,9), Obésité classe II (35,0 – 39,9) et Obésité classe III (≥ 40,0).'
    },
    de: {
      q: 'Was sind die Hauptkategorien der offiziellen WHO-BMI-Tabelle?',
      a: 'Die offiziellen WHO-Kategorien lauten: Untergewicht (< 18,5), Normalgewicht (18,5 – 24,9), Übergewicht (25,0 – 29,9), Adipositas Grad I (30,0 – 34,9), Adipositas Grad II (35,0 – 39,9) und Adipositas Grad III (≥ 40,0).'
    },
    ko: {
      q: '공식 BMI 차트의 주요 분류 범주는 어떻게 되나요?',
      a: '공식 WHO 기준 범주는 저체중(< 18.5), 정상 체중(18.5~24.9), 과체중(25.0~29.9), 1단계 비만(30.0~34.9), 2단계 비만(35.0~39.9), 3단계 고도 비만(≥ 40.0)으로 구분됩니다.'
    }
  },
  // Q4
  'Is the weight chart for men different from the weight chart for women?': {
    es: {
      q: '¿Es diferente la tabla de peso saludable para hombres y mujeres?',
      a: 'Aunque los rangos de IMC de la OMS (18.5 a 24.9) aplican por igual a hombres y mujeres, las fórmulas de peso ideal (como Devine) establecen referencias ligeramente distintas debido a diferencias musculares y óseas.'
    },
    fr: {
      q: 'Le tableau de poids santé est-il différent pour les hommes et les femmes ?',
      a: 'Bien que les seuils d\'IMC de l\'OMS (18,5 à 24,9) soient identiques pour les deux sexes, les formules de poids idéal (comme Devine) adaptent légèrement les estimations selon la morphologie.'
    },
    de: {
      q: 'Unterscheidet sich die Idealgewichtstabelle für Männer und Frauen?',
      a: 'Während der WHO-BMI-Bereich (18,5 bis 24,9) universell gilt, berechnen Formeln für das ideale Körpergewicht (wie Devine) für Männer leicht höhere Zielgewichte aufgrund höherer Muskelmasse.'
    },
    ko: {
      q: '남성과 여성의 신장별 이상 체중 표는 차이가 있나요?',
      a: 'WHO 표준 BMI 범위(18.5~24.9)는 남녀 모두에게 동일하지만, Devine 공식 등 의학적 이상 체중 계산식은 근육량과 골격 차이를 반영하여 성별에 따라 약간 다른 기준치를 산출합니다.'
    }
  },
  // Q5
  'Why is the Asian BMI reference cutoff set at 23 kg/m² instead of 25 kg/m²?': {
    es: {
      q: '¿Por qué el umbral de referencia del IMC asiático es de 23 kg/m² en lugar de 25 kg/m²?',
      a: 'Estudios de la Organización Mundial de la Salud (OMS) observaron que las poblaciones asiáticas presentan un mayor porcentaje de grasa visceral a índices de masa corporal más bajos, aumentando el riesgo cardiometabólico a partir de 23.0 kg/m².'
    },
    fr: {
      q: 'Pourquoi le seuil de référence de l\'IMC asiatique est-il fixé à 23 kg/m² au lieu de 25 kg/m² ?',
      a: 'Des études épidémiologiques de l\'OMS ont montré que les populations asiatiques présentent un taux de graisse viscérale plus élevé à des valeurs d\'IMC plus faibles, augmentant le risque cardiométabolique dès 23,0 kg/m².'
    },
    de: {
      q: 'Warum liegt der asiatische BMI-Referenzschwellenwert bei 23 kg/m² statt 25 kg/m²?',
      a: 'Epidemiologische Studien der WHO haben gezeigt, dass asiatische Populationen bei niedrigerem BMI einen höheren viszeralen Fettanteil aufweisen, wodurch kardiometabolische Risiken bereits ab 23,0 kg/m² steigen.'
    },
    ko: {
      q: '아시아인 BMI 기준치가 25 kg/m²가 아닌 23 kg/m²로 설정된 이유는 무엇인가요?',
      a: 'WHO 역학 조사에 따르면 아시아계 인구는 동일한 체질량지수에서도 내장지방 비율이 더 높아 23.0 kg/m² 이상부터 당뇨 및 심혈관 대사 위험이 유의미하게 증가하기 때문입니다.'
    }
  },
  // Q6
  'What should I do if my BMI score is 23 or higher?': {
    es: {
      q: '¿Qué debo hacer si mi puntuación de IMC es de 23 o superior?',
      a: 'Un IMC entre 23.0 y 27.4 se sitúa en el rango de sobrepeso asiático. Se recomienda evaluar la circunferencia de cintura, mantener actividad física regular y consultar a un profesional médico para una evaluación personalizada.'
    },
    fr: {
      q: 'Que faire si mon score d\'IMC est de 23 ou plus ?',
      a: 'Un IMC compris entre 23,0 et 27,4 se situe dans la plage de surpoids asiatique. Il est recommandé de surveiller son tour de taille, d\'adopter une alimentation équilibrée et de consulter un professionnel de santé.'
    },
    de: {
      q: 'Was sollte ich tun, wenn mein BMI-Wert bei 23 oder höher liegt?',
      a: 'Ein BMI von 23,0 bis 27,4 liegt im asiatischen Übergewichtsbereich. Es wird empfohlen, den Taillenumfang zu kontrollieren, sich regelmäßig zu bewegen und bei Bedarf einen Arzt zu konsultieren.'
    },
    ko: {
      q: 'BMI 점수가 23 이상인 경우 어떻게 해야 하나요?',
      a: '23.0~27.4 구간은 아시아인 기준 과체중 범위에 해당합니다. 허리둘레를 확인하고 규칙적인 운동과 건강한 식습관을 실천하며 필요시 의료진과 상담하는 것이 좋습니다.'
    }
  },
  // Q7
  'What BMI is considered overweight for Asians?': {
    es: {
      q: '¿Qué IMC se considera sobrepeso para las poblaciones asiáticas?',
      a: 'Según los criterios de la OMS para Asia-Pacífico, un IMC de 23.0 kg/m² o superior se considera sobrepeso.'
    },
    fr: {
      q: 'Quel IMC est considéré comme un surpoids pour les populations asiatiques ?',
      a: 'Selon les critères Asie-Pacifique de l\'OMS, un IMC de 23,0 kg/m² ou plus est considéré comme un surpoids.'
    },
    de: {
      q: 'Ab welchem BMI gilt man bei asiatischen Standards als übergewichtig?',
      a: 'Nach den WHO-Asien-Pazifik-Kriterien gilt ein BMI von 23,0 kg/m² oder höher als Übergewicht.'
    },
    ko: {
      q: '아시아인 기준에서 과체중으로 간주되는 BMI 수치는 얼마인가요?',
      a: 'WHO 아시아-태평양 기준에 따르면 BMI 23.0 kg/m² 이상부터 과체중 범위로 분류됩니다.'
    }
  },
  // Q8
  'Is the IBW calculator suitable for muscular individuals?': {
    es: {
      q: '¿Es adecuada la calculadora de peso ideal para personas musculosas?',
      a: 'Las fórmulas tradicionales como Devine estiman el peso promedio según la altura y el marco óseo. Para atletas con mayor masa muscular, las mediciones de porcentaje de grasa y circunferencia de cintura son más representativas.'
    },
    fr: {
      q: 'Le calculateur de poids idéal convient-il aux personnes musclées ?',
      a: 'Les formules historiques comme Devine estiment le poids moyen selon la taille. Pour les athlètes très musclés, l\'analyse du taux de masse grasse et du tour de taille est plus pertinente.'
    },
    de: {
      q: 'Ist der Idealgewichtsrechner für muskulöse Sportler geeignet?',
      a: 'Klassische Formeln wie Devine schätzen das Durchschnittsgewicht anhand der Körpergröße. Bei muskulösen Sportlern bieten Körperfettmessung und Taillenumfang eine genauere Einschätzung.'
    },
    ko: {
      q: '이상 체중 계산기가 근육량이 많은 운동선수에게도 적합한가요?',
      a: 'Devine 등의 표준 공식은 골격 크기와 신장을 기준으로 평균 체중을 산출합니다. 근육량이 많은 경우 체지방률 및 제지방량 측정이 더 정확한 참고 기준이 됩니다.'
    }
  },
  // Q9
  'What are the best high-protein food sources to reach daily targets?': {
    es: {
      q: '¿Cuáles son las mejores fuentes de alimentos ricos en proteínas?',
      a: 'Las fuentes completas de proteínas incluyen pechuga de pollo, huevos, pescado, yogur griego, tofu, legumbres y proteína de suero para alcanzar los objetivos diarios.'
    },
    fr: {
      q: 'Quelles sont les meilleures sources de protéines pour atteindre ses objectifs ?',
      a: 'Les sources recommandées incluent les œufs, le poulet, le poisson, le yaourt grec, le tofu, les lentilles et les poudres de protéines pour couvrir les besoins journaliers.'
    },
    de: {
      q: 'Was sind die besten Proteinquellen zur Deckung des Tagesbedarfs?',
      a: 'Hochwertige Proteinquellen sind Hähnchenbrust, Eier, Fisch, Magerquark, Tofu, Hülsenfrüchte und Proteinpulver zur Erreichung des täglichen Ziels.'
    },
    ko: {
      q: '일일 단백질 목표 섭취량을 채우기 위한 권장 식품은 무엇인가요?',
      a: '닭가슴살, 계란, 생선, 그릭요거트, 두부, 콩류 및 유청 단백질 등이 단백질 요구량을 채우는 데 효과적인 식품입니다.'
    }
  },
  // Q10
  'What are the early signs of dehydration and overhydration?': {
    es: {
      q: '¿Cuáles son los primeros signos de deshidratación y sobrehidratación?',
      a: 'La deshidratación causa sed, orina oscura y fatiga. La sobrehidratación excesiva puede provocar dolores de cabeza y niveles bajos de sodio; mantén una ingesta equilibrada guiándote por la sed y el color claro de la orina.'
    },
    fr: {
      q: 'Quels sont les premiers signes de déshydratation et de surhydratation ?',
      a: 'La déshydratation se manifeste par la soif, une urine foncée et de la fatigue. Une surhydratation excessive peut provoquer des maux de tête ; écoutez votre soif et visez une urine jaune pâle.'
    },
    de: {
      q: 'Was sind frühe Anzeichen von Dehydratation und Überhydratation?',
      a: 'Dehydratation zeigt sich durch Durst, dunklen Urin und Müdigkeit. Übermäßige Flüssigkeitszufuhr kann Kopfschmerzen verursachen; orientieren Sie sich an natürlichem Durst und hellgelbem Urin.'
    },
    ko: {
      q: '탈수와 과다 수분 섭취의 초기 증상은 무엇인가요?',
      a: '탈수의 징후는 갈증, 짙은 소변 색, 피로감 등입니다. 과도한 수분 섭취는 두통과 전해질 불균형을 유발할 수 있으므로 맑고 연한 노란색 소변을 목표로 수분을 조절하세요.'
    }
  }
};

let raw = fs.readFileSync('src/data/seoDatabase.ts', 'utf8');

// Also fix the 3 remaining table issues in bmi-chart
raw = raw.replace(
  '"col3": "Rango de referencia Overweight rango de referencia (Asian cutoff: 23.0 kg/m²)"',
  '"col3": "Rango de sobrepeso (Punto de corte asiático: 23.0 kg/m²)"'
);
raw = raw.replace(
  '"col3": "Plage de référence Overweight plage de référence (Asian cutoff: 23.0 kg/m²)"',
  '"col3": "Plage de surpoids (Seuil asiatique : 23.0 kg/m²)"'
);
raw = raw.replace(
  '"col3": "Referenzbereich Overweight Referenzbereich (Asian cutoff: 23.0 kg/m²)"',
  '"col3": "Referenzbereich Übergewicht (Asiatischer Schwellenwert: 23.0 kg/m²)"'
);

// Also remove French Indian pollution in bmi-chart
raw = raw.replace('"col1": "Sous-poids (Norme Indienne)"', '"col1": "Sous-poids Sévère"');
raw = raw.replace('"col1": "Poids Normal & Optimal"', '"col1": "Sous-poids Modéré"');
raw = raw.replace('"col1": "Surpoids / Zone d\'Action"', '"col1": "Sous-poids Léger"');
raw = raw.replace('"col1": "Obésité Classe I (ICMR)"', '"col1": "Poids Normal"');
raw = raw.replace('"col1": "Obésité Classe II (Sévère)"', '"col1": "Surpoids"');

// Fix the answers in raw content
for (const [engQ, trMap] of Object.entries(faqDict)) {
  for (const [lang, { q, a }] of Object.entries(trMap)) {
    // replace question
    raw = raw.replaceAll(engQ, q);
    raw = raw.replaceAll(engQ + ' 안내 및 원리', q);
  }
}

// Replace the English answer in all non-en blocks
const engAnswersToReplace = [
  {
    en: 'The WHO adult BMI chart uses identical cutoff numbers (18.5 to 24.9 for normal weight) for both adult men and women. However, because women naturally carry higher body fat percentages, waist measurements and body composition testing provide additional context.',
    es: 'La tabla de IMC para adultos de la OMS utiliza los mismos puntos de corte (18.5 a 24.9 para peso normal) tanto para hombres como para mujeres adultas. No obstante, las medidas de cintura aportan contexto complementario.',
    fr: 'Le tableau officiel de l\'OMS utilise les mêmes seuils (18,5 à 24,9 pour le poids normal) pour les hommes et les femmes adultes. La mesure du tour de taille apporte un contexte d\'évaluation supplémentaire.',
    de: 'Die WHO-BMI-Tabelle für Erwachsene verwendet dieselben Grenzwerte (18,5 bis 24,9 für Normalgewicht) für Männer und Frauen. Taillenumfang und Körperzusammensetzung bieten zusätzlichen Kontext.',
    ko: 'WHO 성인 BMI 분류표는 성인 남성과 여성 모두에게 동일한 정상 체중 기준(18.5~24.9)을 적용합니다. 체지방 분포를 확인하기 위해 허리둘레 측정을 함께 고려하는 것이 권장됩니다.'
  },
  {
    en: 'Standard WHO BMI categories apply to all adults aged 20 and older. However, research suggests that for seniors over age 65, a slightly higher BMI (23.0 to 27.0 kg/m²) may protect against bone density loss and frailty.',
    es: 'Las categorías estándar de la OMS se aplican a todos los adultos a partir de los 20 años. En mayores de 65 años, un IMC ligeramente superior (23.0 a 27.0 kg/m²) puede ser protector frente a la fragilidad.',
    fr: 'Les catégories standards de l\'OMS s\'appliquent dès 20 ans. Chez les seniors de plus de 65 ans, un IMC légèrement plus élevé (23,0 à 27,0 kg/m²) peut protéger contre la fragilité.',
    de: 'Die Standardkategorien der WHO gelten für alle Erwachsenen ab 20 Jahren. Bei Senioren über 65 Jahren kann ein leicht höherer BMI (23,0 bis 27,0 kg/m²) Schutz vor Knochendichteverlust bieten.',
    ko: 'WHO 표준 분류 기준은 20세 이상 성인 전 연령에 적용됩니다. 65세 이상 고령층의 경우 약간 높은 BMI(23.0~27.0 kg/m²)가 골밀도 유지 및 노쇠 예방에 유리할 수 있습니다.'
  },
  {
    en: 'A metric BMI chart lists height in centimeters (cm) and weight in kilograms (kg). For example: Height 170 cm with Weight 65 kg yields a BMI of 22.5 kg/m² (Healthy Weight).',
    es: 'Una tabla métrica de IMC relaciona la estatura en centímetros con el peso en kilogramos. Por ejemplo: una altura de 170 cm con un peso de 65 kg da un IMC de 22.5 kg/m² (rango de peso saludable).',
    fr: 'Un tableau métrique associe la taille en centimètres et le poids en kilogrammes. Par exemple : une taille de 170 cm pour 65 kg donne un IMC de 22,5 kg/m² (catégorie poids santé).',
    de: 'Eine metrische BMI-Tabelle ordnet Körpergröße in Zentimetern und Gewicht in Kilogramm zu. Beispiel: 170 cm Größe und 65 kg Gewicht ergeben einen BMI von 22,5 kg/m² (Normalgewicht).',
    ko: '미터법 차트는 신장(cm)과 체중(kg)을 대조하여 표시합니다. 예를 들어 신장 170cm에 체중 65kg인 경우 BMI는 22.5 kg/m²(정상 체중)로 계산됩니다.'
  },
  {
    en: 'The official WHO BMI categories are: Underweight (< 18.5), Normal Weight (18.5 – 24.9), Overweight (25.0 – 29.9), Obese Class I (30.0 – 34.9), Obese Class II (35.0 – 39.9), and Obese Class III (≥ 40.0).',
    es: 'Las categorías oficiales de la OMS son: Bajo peso (< 18.5), Peso normal (18.5 – 24.9), Sobrepeso (25.0 – 29.9), Obesidad Clase I (30.0 – 34.9), Obesidad Clase II (35.0 – 39.9) y Obesidad Clase III (≥ 40.0).',
    fr: 'Les catégories officielles de l\'OMS sont : Sous-poids (< 18,5), Poids normal (18,5 – 24,9), Surpoids (25,0 – 29,9), Obésité classe I (30,0 – 34,9), Obésité classe II (35,0 – 39,9) et Obésité classe III (≥ 40,0).',
    de: 'Die offiziellen WHO-Kategorien lauten: Untergewicht (< 18,5), Normalgewicht (18,5 – 24,9), Übergewicht (25,0 – 29,9), Adipositas Grad I (30,0 – 34,9), Adipositas Grad II (35,0 – 39,9) und Adipositas Grad III (≥ 40,0).',
    ko: '공식 WHO 기준 범주는 저체중(< 18.5), 정상 체중(18.5~24.9), 과체중(25.0~29.9), 1단계 비만(30.0~34.9), 2단계 비만(35.0~39.9), 3단계 고도 비만(≥ 40.0)으로 구분됩니다.'
  },
  {
    en: 'While WHO BMI ranges (18.5 to 24.9) apply to both adult men and women, ideal body weight formulas (Devine, Robinson, Miller) provide sex-specific benchmarks that account for differences in lean muscle mass and skeletal frame size.',
    es: 'Aunque los rangos de IMC de la OMS (18.5 a 24.9) aplican por igual a hombres y mujeres, las fórmulas de peso ideal (como Devine) establecen referencias ligeramente distintas debido a diferencias musculares y óseas.',
    fr: 'Bien que les seuils d\'IMC de l\'OMS (18,5 à 24,9) soient identiques pour les deux sexes, les formules de poids idéal (comme Devine) adaptent légèrement les estimations selon la morphologie.',
    de: 'Während der WHO-BMI-Bereich (18,5 bis 24,9) universell gilt, berechnen Formeln für das ideale Körpergewicht (wie Devine) für Männer leicht höhere Zielgewichte aufgrund höherer Muskelmasse.',
    ko: 'WHO 표준 BMI 범위(18.5~24.9)는 남녀 모두에게 동일하지만, Devine 공식 등 의학적 이상 체중 계산식은 근육량과 골격 차이를 반영하여 성별에 따라 약간 다른 기준치를 산출합니다.'
  },
  {
    en: 'World Health Organization (WHO) epidemiological studies observed that Asian populations face elevated risks of type 2 diabetes and cardiovascular disease at lower BMI cutoffs (23.0 kg/m² vs. 25.0 kg/m²) due to higher percentages of visceral body fat.',
    es: 'Estudios de la Organización Mundial de la Salud (OMS) observaron que las poblaciones asiáticas presentan un mayor porcentaje de grasa visceral a índices de masa corporal más bajos, aumentando el riesgo cardiometabólico a partir de 23.0 kg/m².',
    fr: 'Des études épidémiologiques de l\'OMS ont montré que les populations asiatiques présentent un taux de graisse viscérale plus élevé à des valeurs d\'IMC plus faibles, augmentant le risque cardiométabolique dès 23,0 kg/m².',
    de: 'Epidemiologische Studien der WHO haben gezeigt, dass asiatische Populationen bei niedrigerem BMI einen höheren viszeralen Fettanteil aufweisen, wodurch kardiometabolische Risiken bereits ab 23,0 kg/m² steigen.',
    ko: 'WHO 역학 조사에 따르면 아시아계 인구는 동일한 체질량지수에서도 내장지방 비율이 더 높아 23.0 kg/m² 이상부터 당뇨 및 심혈관 대사 위험이 유의미하게 증가하기 때문입니다.'
  },
  {
    en: 'Divide your weight in kg by your height in meters squared. A score of 23.0 kg/m² or higher marks the overweight reference threshold under WHO Asian guidelines; 27.5 kg/m² or above reflects obesity classification.',
    es: 'Divide tu peso en kg entre la altura en metros al cuadrado. Un valor de 23.0 kg/m² o superior indica el umbral de acción para sobrepeso según las recomendaciones de la OMS para Asia; 27.5 kg/m² o más refleja obesidad.',
    fr: 'Divisez votre poids en kg par votre taille en mètres au carré. Un score de 23,0 kg/m² ou plus indique le seuil d\'action pour le surpoids selon les recommandations de l\'OMS pour l\'Asie ; 27,5 kg/m² ou plus indique l\'obésité.',
    de: 'Teilen Sie Ihr Gewicht in kg durch das Quadrat Ihrer Größe in Metern. Ein Wert von 23,0 kg/m² oder höher markiert den Schwellenwert für Übergewicht nach asiatischen WHO-Richtlinien; ab 27,5 kg/m² gilt Adipositas.',
    ko: '체중(kg)을 신장(m)의 제곱으로 나누어 계산합니다. 23.0 kg/m² 이상인 경우 WHO 아시아-태평양 지침에 따른 과체중 기준이며, 27.5 kg/m² 이상은 비만 범주로 분류됩니다.'
  },
  {
    en: 'A BMI score of 23.0 to 27.4 falls within the Asian overweight reference range. Beneficial next steps include monitoring waist circumference (<90 cm for men, <80 cm for women), adopting an active routine, and consulting a healthcare professional for comprehensive metabolic screening.',
    es: 'Un IMC entre 23.0 y 27.4 se sitúa en el rango de sobrepeso asiático. Se recomienda evaluar la circunferencia de cintura (<90 cm en hombres, <80 cm en mujeres), mantener actividad física regular y consultar a un médico.',
    fr: 'Un IMC compris entre 23,0 et 27,4 se situe dans la plage de surpoids asiatique. Il est recommandé de surveiller son tour de taille (<90 cm chez les hommes, <80 cm chez les femmes) et de consulter un professionnel de santé.',
    de: 'Ein BMI von 23,0 bis 27,4 liegt im asiatischen Übergewichtsbereich. Es wird empfohlen, den Taillenumfang zu kontrollieren (<90 cm für Männer, <80 cm für Frauen), sich regelmäßig zu bewegen und bei Bedarf einen Arzt zu konsultieren.',
    ko: '23.0~27.4 구간은 아시아인 기준 과체중 범위에 해당합니다. 허리둘레(남성 90cm 미만, 여성 80cm 미만)를 확인하고 규칙적인 운동을 실천하며 필요시 의료진과 상담하는 것이 좋습니다.'
  },
  {
    en: 'According to WHO Asia-Pacific criteria, a BMI of 23.0 kg/m² or higher is considered overweight for Asian populations, compared to 25.0 kg/m² in standard Western classifications.',
    es: 'Según los criterios de la OMS para Asia-Pacífico, un IMC de 23.0 kg/m² o superior se considera sobrepeso para las poblaciones asiáticas, frente a 25.0 kg/m² en los estándares occidentales.',
    fr: 'Selon les critères Asie-Pacifique de l\'OMS, un IMC de 23,0 kg/m² ou plus est considéré comme un surpoids pour les populations asiatiques, contre 25,0 kg/m² dans les classifications occidentales.',
    de: 'Nach den WHO-Asien-Pazifik-Kriterien gilt ein BMI von 23,0 kg/m² oder höher als Übergewicht für asiatische Populationen, verglichen mit 25,0 kg/m² bei westlichen Standards.',
    ko: 'WHO 아시아-태평양 기준에 따르면 서구 기준(25.0 kg/m²)과 달리 BMI 23.0 kg/m² 이상부터 과체중 범위로 분류됩니다.'
  },
  {
    en: 'Lean Body Mass (LBM) subtracts body fat from total scale weight, giving the mass of muscle, bone, organs, and water. Tracking LBM during weight-loss diets ensures that calorie deficits burn body fat rather than lean muscle tissue.',
    es: 'La masa magra (LBM) resta la grasa corporal del peso total, mostrando el peso de músculos, huesos y agua. Monitorear la masa magra asegura que el déficit calórico queme grasa y preserve músculo.',
    fr: 'La masse maigre (LBM) soustrait la masse grasse du poids total, reflétant les muscles, os et organes. Le suivi de la masse maigre garantit que le déficit calorique brûle des graisses et préserve le muscle.',
    de: 'Die fettfreie Masse (LBM) zieht Körperfett vom Gesamtgewicht ab und erfasst Muskeln, Knochen und Organe. Das Verfolgen der LBM stellt sicher, dass ein Kaloriendefizit Fett verbrennt und Muskulatur schützt.',
    ko: '제지방량(LBM)은 총 체중에서 지방량을 제외한 근육, 뼈, 수분의 무게입니다. 다이어트 중 순수 근육 손실 여부를 추적하는 핵심 지표로 활용됩니다.'
  },
  {
    en: 'Ideal body weight formulas (Devine, Robinson, Miller) estimate target weight based on skeletal height alone and do not distinguish dense muscle mass from fat mass. Muscular athletes should reference body fat percentage and waist circumference instead.',
    es: 'Las fórmulas de peso ideal (Devine, Robinson, Miller) estiman el peso objetivo basándose únicamente en la estatura. Los atletas musculosos deben guiarse por el porcentaje de grasa corporal y circunferencia de cintura.',
    fr: 'Les formules de poids idéal (Devine, Robinson, Miller) estiment le poids cible uniquement selon la taille. Les athlètes musclés doivent plutôt se référer au pourcentage de masse grasse et au tour de taille.',
    de: 'Formeln für das ideale Körpergewicht (Devine, Robinson, Miller) schätzen das Zielgewicht nur anhand der Körpergröße. Bei muskulösen Sportlern bieten Körperfettanteil und Taillenumfang verlässlichere Werte.',
    ko: 'Devine, Robinson 등의 이상 체중 공식은 신장만을 기준으로 체중을 산출합니다. 근육질 운동선수는 체지방률 및 허리둘레 측정을 더 신뢰할 수 있는 기준으로 삼아야 합니다.'
  },
  {
    en: 'High-quality complete protein sources include chicken breast, eggs, salmon, tuna, Greek yogurt, cottage cheese, tofu, tempeh, lentils, and whey/casein protein supplements.',
    es: 'Las fuentes completas de proteínas de alta calidad incluyen pechuga de pollo, huevos, salmón, atún, yogur griego, queso fresco, tofu, tempeh, lentejas y proteína de suero.',
    fr: 'Les sources de protéines de haute qualité comprennent les blancs de poulet, les œufs, le saumon, le thon, le yaourt grec, le fromage blanc, le tofu, les lentilles et les protéines de lactosérum.',
    de: 'Hochwertige Proteinquellen sind Hähnchenbrust, Eier, Lachs, Thunfisch, Magerquark, griechischer Joghurt, Tofu, Hülsenfrüchte und Proteinpulver.',
    ko: '우수한 단백질 식품으로는 닭가슴살, 계란, 연어, 참치, 그릭요거트, 코티지 치즈, 두부, 템페, 렌틸콩 및 단백질 보충제 등이 있습니다.'
  },
  {
    en: 'Early dehydration symptoms include dark yellow urine, dry mouth, mild headaches, and fatigue. Overhydration (hyponatremia) is marked by clear urine, nausea, confusion, and muscle weakness. Aim for pale straw-colored urine throughout the day.',
    es: 'Los signos tempranos de deshidratación son orina oscura, boca seca, dolor de cabeza leve y fatiga. La sobrehidratación se manifiesta por orina transparente, náuseas y debilidad. Busca una orina de color amarillo claro.',
    fr: 'La déshydratation se traduit par une urine foncée, la bouche sèche et de la fatigue. La surhydratation provoque une urine claire, des nausées et des maux de tête. Visez une urine jaune pâle tout au long de la journée.',
    de: 'Frühe Dehydratationssymptome sind dunkelgelber Urin, Mundtrockenheit und Müdigkeit. Eine Überhydratation zeigt sich durch farblosen Urin, Übelkeit und Schwäche. Streben Sie hellgelben Urin an.',
    ko: '탈수의 초기 증상은 짙은 노란색 소변, 구강 건조 및 피로감입니다. 과다 수분 섭취는 메스꺼움과 두통을 유발할 수 있으므로 하루 종일 맑은 짚색(연노랑) 소변을 유지하세요.'
  },
  {
    en: 'According to WHO guidelines, a healthy Waist-to-Hip Ratio is 0.90 or less for men and 0.85 or less for women. Ratios above these thresholds indicate abdominal visceral fat accumulation and higher cardiometabolic disease risk.',
    es: 'Según la OMS, una relación cintura-cadera saludable es de 0.90 o inferior para hombres y de 0.85 o inferior para mujeres. Valores superiores indican acumulación de grasa visceral y mayor riesgo cardiometabólico.',
    fr: 'Selon l\'OMS, un rapport taille-hanche sain est de 0,90 ou moins pour les hommes et de 0,85 ou moins pour les femmes. Un ratio supérieur indique une accumulation de graisse viscérale et un risque cardiométabolique accru.',
    de: 'Laut WHO liegt ein gesundes Taille-zu-Hüfte-Verhältnis bei ≤ 0,90 für Männer und ≤ 0,85 für Frauen. Höhere Werte deuten auf viszerales Bauchfett und ein erhöhtes kardiometabolisches Risiko hin.',
    ko: 'WHO 지침에 따르면 건강한 허리-엉덩이 비율(WHR)은 남성 0.90 이하, 여성 0.85 이하입니다. 이 기준치를 초과할 경우 복부 내장지방 축적으로 심혈관 대사 위험이 증가합니다.'
  },
  {
    en: 'BMI cannot distinguish between visceral belly fat and peripheral subcutaneous fat. Waist-to-hip ratio directly measures central adiposity, providing critical supplementary context that BMI alone can miss.',
    es: 'El IMC no distingue entre grasa visceral abdominal y grasa subcutánea periférica. La relación cintura-cadera evalúa directamente la adiposidad central, aportando un contexto vital que el IMC por sí solo no detecta.',
    fr: 'L\'IMC ne distingue pas la graisse viscérale abdominale de la graisse sous-cutanée. Le rapport taille-hanche mesure directement l\'adiposité abdominale centrale, apportant un complément essentiel à l\'IMC seul.',
    de: 'Der BMI unterscheidet nicht zwischen viszeralem Bauchfett und subkutanem Fett. Das Taille-Hüft-Verhältnis erfasst die zentrale Fettverteilung direkt und liefert unverzichtbaren Kontext.',
    ko: 'BMI는 복부 내장지방과 피하지방을 구별하지 못합니다. 허리-엉덩이 비율은 중심부 복부 비만을 직접 측정하여 BMI만으로는 놓칠 수 있는 중요한 건강 지표를 보완합니다.'
  },
  {
    en: 'The Epley and Brzycki equations demonstrate high accuracy (within 2–4% of actual 1RM) when predicting maximal strength from 1 to 10 repetitions on compound lifts like the bench press, barbell squat, and deadlift.',
    es: 'Las ecuaciones de Epley y Brzycki tienen una alta precisión (margen del 2 al 4%) al calcular la fuerza máxima a partir de 1 a 10 repeticiones en levantamientos compuestos como press de banca, sentadilla y peso muerto.',
    fr: 'Les équations d\'Epley et de Brzycki offrent une excellente précision (erreur de 2 à 4 %) pour prédire la force maximale à partir de 1 à 10 répétitions sur les mouvements de base comme le développé couché et le squat.',
    de: 'Die Epley- und Brzycki-Gleichungen bieten eine sehr hohe Genauigkeit (Abweichung von 2–4 %) bei der Vorhersage der Maximalkraft aus 1 bis 10 Wiederholungen bei Grundübungen wie Bankdrücken und Kniebeugen.',
    ko: 'Epley 및 Brzycki 공식은 벤치프레스, 스쿼트, 데드리프트 등 주요 다관절 복합 운동에서 1~10회 반복 수행 시 실제 1RM의 2~4% 오차 범위 내에서 매우 높은 정확도를 보입니다.'
  }
];

// In non-en blocks, replace English answers with their language-specific counterpart
// Split content into blocks by language
const langMarkers = ['"es": {', '"fr": {', '"de": {', '"ko": {', '"hi": {' ];

// For each block, replace the English answers with the corresponding language
let sections = raw.split(/("es":\s*\{|"fr":\s*\{|"de":\s*\{|"ko":\s*\{|"hi":\s*\{)/);

for (let i = 1; i < sections.length; i += 2) {
  const marker = sections[i];
  let lang = 'es';
  if (marker.includes('"fr"')) lang = 'fr';
  if (marker.includes('"de"')) lang = 'de';
  if (marker.includes('"ko"')) lang = 'ko';
  if (marker.includes('"hi"')) lang = 'hi';

  let body = sections[i + 1];

  for (const item of engAnswersToReplace) {
    if (item[lang]) {
      body = body.replaceAll(item.en, item[lang]);
    }
  }

  // Also replace any lingering English questions in this language block
  for (const [engQ, trMap] of Object.entries(faqDict)) {
    if (trMap[lang]) {
      body = body.replaceAll(engQ, trMap[lang].q);
      body = body.replaceAll(engQ + ' 안내 및 원리', trMap[lang].q);
    }
  }

  sections[i + 1] = body;
}

raw = sections.join('');
fs.writeFileSync('src/data/seoDatabase.ts', raw);
console.log('Successfully completed full FAQ translation across seoDatabase.ts');
