const fs = require('fs');

let content = fs.readFileSync('src/data/seoDatabase.ts', 'utf8');

// Replace corrupted questions and answers across all languages in seoDatabase.ts
const faqFixes = [
  // 1. BMI Chart
  {
    targetQ: 'Is the BMI chart for men different from the BMI chart for women?',
    targetQKo: 'Is the BMI chart for men different from the BMI chart for women? 안내 및 원리',
    esQ: '¿Es diferente la tabla de IMC para hombres de la tabla de IMC para mujeres?',
    esA: 'La tabla de IMC para adultos de la OMS utiliza los mismos puntos de corte (18.5 a 24.9 para peso normal) tanto para hombres como para mujeres adultas. No obstante, las medidas de cintura aportan contexto complementario.',
    frQ: 'Le tableau de l\'IMC pour hommes est-il différent de celui pour femmes ?',
    frA: 'Le tableau de l\'OMS utilise les mêmes seuils (18,5 à 24,9 pour le poids normal) pour les hommes et les femmes adultes. La mesure du tour de taille apporte un contexte d\'évaluation supplémentaire.',
    deQ: 'Unterscheidet sich die BMI-Tabelle für Männer von der für Frauen?',
    deA: 'Die WHO-BMI-Tabelle für Erwachsene verwendet dieselben Grenzwerte (18,5 bis 24,9 für Normalgewicht) für Männer und Frauen. Taillenumfang und Körperzusammensetzung bieten zusätzlichen Kontext.',
    koQ: '남성과 여성의 BMI 차트 기준은 서로 다른가요?',
    koA: 'WHO 성인 BMI 분류표는 성인 남성과 여성 모두에게 동일한 정상 체중 기준(18.5~24.9)을 적용합니다. 체지방 분포를 확인하기 위해 허리둘레 측정을 함께 고려하는 것이 권장됩니다.'
  },
  {
    targetQ: 'How does the BMI chart by age work for adults vs seniors?',
    targetQKo: 'How does the BMI chart by age work for adults vs seniors? 안내 및 원리',
    esQ: '¿Cómo funciona la tabla de IMC según la edad en adultos y adultos mayores?',
    esA: 'Las categorías estándar de la OMS se aplican a todos los adultos a partir de los 20 años. En mayores de 65 años, un IMC ligeramente superior (23.0 a 27.0 kg/m²) puede ser protector frente a la fragilidad.',
    frQ: 'Comment le tableau d\'IMC évolue-t-il selon l\'âge chez les adultes et les seniors ?',
    frA: 'Les catégories standards de l\'OMS s\'appliquent dès 20 ans. Chez les seniors de plus de 65 ans, un IMC légèrement plus élevé (23,0 à 27,0 kg/m²) peut protéger contre la fragilité.',
    deQ: 'Wie funktioniert die BMI-Tabelle nach Alter für Erwachsene und Senioren?',
    deA: 'Die Standardkategorien der WHO gelten für alle Erwachsenen ab 20 Jahren. Bei Senioren über 65 Jahren kann ein leicht höherer BMI (23,0 bis 27,0 kg/m²) Schutz vor Knochendichteverlust bieten.',
    koQ: '성인과 고령자에서 연령별 BMI 차트는 어떻게 적용되나요?',
    koA: 'WHO 표준 분류 기준은 20세 이상 성인 전 연령에 적용됩니다. 65세 이상 고령층의 경우 약간 높은 BMI(23.0~27.0 kg/m²)가 골밀도 유지 및 노쇠 예방에 유리할 수 있습니다.'
  },
  {
    targetQ: 'What are the main BMI categories on the official chart?',
    targetQKo: 'What are the main BMI categories on the official chart? 안내 및 원리',
    esQ: '¿Cuáles son las categorías principales de la tabla oficial de IMC?',
    esA: 'Las categorías oficiales de la OMS son: Bajo peso (< 18.5), Peso normal (18.5 – 24.9), Sobrepeso (25.0 – 29.9), Obesidad Clase I (30.0 – 34.9), Obesidad Clase II (35.0 – 39.9) y Obesidad Clase III (≥ 40.0).',
    frQ: 'Quelles sont les catégories officielles du tableau de l\'OMS ?',
    frA: 'Les catégories officielles de l\'OMS sont : Sous-poids (< 18,5), Poids normal (18,5 – 24,9), Surpoids (25,0 – 29,9), Obésité classe I (30,0 – 34,9), Obésité classe II (35,0 – 39,9) et Obésité classe III (≥ 40,0).',
    deQ: 'Was sind die Hauptkategorien der offiziellen WHO-BMI-Tabelle?',
    deA: 'Die offiziellen WHO-Kategorien lauten: Untergewicht (< 18,5), Normalgewicht (18,5 – 24,9), Übergewicht (25,0 – 29,9), Adipositas Grad I (30,0 – 34,9), Adipositas Grad II (35,0 – 39,9) und Adipositas Grad III (≥ 40,0).',
    koQ: '공식 BMI 차트의 주요 분류 범주는 어떻게 되나요?',
    koA: '공식 WHO 기준 범주는 저체중(< 18.5), 정상 체중(18.5~24.9), 과체중(25.0~29.9), 1단계 비만(30.0~34.9), 2단계 비만(35.0~39.9), 3단계 고도 비만(≥ 40.0)으로 구분됩니다.'
  },
  // Metric chart question
  {
    rawEsQ: '¿Qué es el BMI chart in kg and cm?',
    esQ: '¿Cómo se interpreta la tabla de IMC en kg y cm?',
    esA: 'Una tabla métrica de IMC relaciona la estatura en centímetros con el peso en kilogramos. Por ejemplo: una altura de 170 cm con un peso de 65 kg da un IMC de 22.5 kg/m² (rango de peso saludable).',
    rawFrQ: "Qu'est-ce que le BMI chart in kg and cm?",
    frQ: 'Comment interpréter le tableau d\'IMC en kg et cm ?',
    frA: 'Un tableau métrique associe la taille en centimètres et le poids en kilogrammes. Par exemple : une taille de 170 cm pour 65 kg donne un IMC de 22,5 kg/m² (catégorie poids santé).',
    rawDeQ: 'Was ist der BMI chart in kg and cm?',
    deQ: 'Wie liest man die metrische BMI-Tabelle in kg und cm?',
    deA: 'Eine metrische BMI-Tabelle ordnet Körpergröße in Zentimetern und Gewicht in Kilogramm zu. Beispiel: 170 cm Größe und 65 kg Gewicht ergeben einen BMI von 22,5 kg/m² (Normalgewicht).',
    rawKoQ: ' BMI chart in kg and cm? 안내 및 원리',
    koQ: 'kg 및 cm 단위의 미터법 BMI 차트는 어떻게 읽나요?',
    koA: '미터법 차트는 신장(cm)과 체중(kg)을 대조하여 표시합니다. 예를 들어 신장 170cm에 체중 65kg인 경우 BMI는 22.5 kg/m²(정상 체중)로 계산됩니다.'
  },

  // 2. Healthy weight by height
  {
    targetQ: 'Is the weight chart for men different from the weight chart for women?',
    targetQKo: 'Is the weight chart for men different from the weight chart for women? 안내 및 원리',
    esQ: '¿Es diferente la tabla de peso saludable para hombres y mujeres?',
    esA: 'Aunque los rangos de IMC de la OMS (18.5 a 24.9) aplican por igual a hombres y mujeres, las fórmulas de peso ideal (como Devine) establecen referencias ligeramente distintas debido a diferencias musculares y óseas.',
    frQ: 'Le tableau de poids santé est-il différent pour les hommes et les femmes ?',
    frA: 'Bien que les seuils d\'IMC de l\'OMS (18,5 à 24,9) soient identiques pour les deux sexes, les formules de poids idéal (comme Devine) adaptent légèrement les estimations selon la morphologie.',
    deQ: 'Unterscheidet sich die Idealgewichtstabelle für Männer und Frauen?',
    deA: 'Während der WHO-BMI-Bereich (18,5 bis 24,9) universell gilt, berechnen Formeln für das ideale Körpergewicht (wie Devine) für Männer leicht höhere Zielgewichte aufgrund höherer Muskelmasse.',
    koQ: '남성과 여성의 신장별 이상 체중 표는 차이가 있나요?',
    koA: 'WHO 표준 BMI 범위(18.5~24.9)는 남녀 모두에게 동일하지만, Devine 공식 등 의학적 이상 체중 계산식은 근육량과 골격 차이를 반영하여 성별에 따라 약간 다른 기준치를 산출합니다.'
  },

  // 3. Diabetes Risk Calculator
  {
    rawEsQ: 'Por qué es the Asian BMI reference cutoff set at 23 kg/m² instead of 25 kg/m²?',
    rawFrQ: 'Pourquoi the Asian BMI reference cutoff set at 23 kg/m² instead of 25 kg/m²?',
    rawDeQ: 'Warum ist the Asian BMI reference cutoff set at 23 kg/m² instead of 25 kg/m²?',
    rawKoQ: '아시아인 BMI 기준 23 kg/m² 임계값은 어떻게 평가되나요?',
    esQ: '¿Por qué el umbral de referencia del IMC asiático es de 23 kg/m² en lugar de 25 kg/m²?',
    esA: 'Estudios de la Organización Mundial de la Salud (OMS) observaron que las poblaciones asiáticas presentan un mayor porcentaje de grasa visceral a índices de masa corporal más bajos, aumentando el riesgo cardiometabólico a partir de 23.0 kg/m².',
    frQ: 'Pourquoi le seuil de référence de l\'IMC asiatique est-il fixé à 23 kg/m² au lieu de 25 kg/m² ?',
    frA: 'Des études épidémiologiques de l\'OMS ont montré que les populations asiatiques présentent un taux de graisse viscérale plus élevé à des valeurs d\'IMC plus faibles, augmentant le risque cardiométabolique dès 23,0 kg/m².',
    deQ: 'Warum liegt der asiatische BMI-Referenzschwellenwert bei 23 kg/m² statt 25 kg/m²?',
    deA: 'Epidemiologische Studien der WHO haben gezeigt, dass asiatische Populationen bei niedrigerem BMI einen höheren viszeralen Fettanteil aufweisen, wodurch kardiometabolische Risiken bereits ab 23,0 kg/m² steigen.',
    koQ: '아시아인 BMI 기준치가 25 kg/m²가 아닌 23 kg/m²로 설정된 이유는 무엇인가요?',
    koA: 'WHO 역학 조사에 따르면 아시아계 인구는 동일한 체질량지수에서도 내장지방 비율이 더 높아 23.0 kg/m² 이상부터 당뇨 및 심혈관 대사 위험이 유의미하게 증가하기 때문입니다.'
  },
  {
    targetQ: 'What should I do if my BMI score is 23 or higher?',
    targetQKo: 'What should I do if my BMI score is 23 or higher? 안내 및 원리',
    esQ: '¿Qué debo hacer si mi puntuación de IMC es de 23 o superior?',
    esA: 'Un IMC entre 23.0 y 27.4 se sitúa en el rango de sobrepeso asiático. Se recomienda evaluar la circunferencia de cintura, mantener actividad física regular y consultar a un profesional médico para una evaluación personalizada.',
    frQ: 'Que faire si mon score d\'IMC est de 23 ou plus ?',
    frA: 'Un IMC compris entre 23,0 et 27,4 se situe dans la plage de surpoids asiatique. Il est recommandé de surveiller son tour de taille, d\'adopter une alimentation équilibrée et de consulter un professionnel de santé.',
    deQ: 'Was sollte ich tun, wenn mein BMI-Wert bei 23 oder höher liegt?',
    deA: 'Ein BMI von 23,0 bis 27,4 liegt im asiatischen Übergewichtsbereich. Es wird empfohlen, den Taillenumfang zu kontrollieren, sich regelmäßig zu bewegen und bei Bedarf einen Arzt zu konsultieren.',
    koQ: 'BMI 점수가 23 이상인 경우 어떻게 해야 하나요?',
    koA: '23.0~27.4 구간은 아시아인 기준 과체중 범위에 해당합니다. 허리둘레를 확인하고 규칙적인 운동과 건강한 식습관을 실천하며 필요시 의료진과 상담하는 것이 좋습니다.'
  },
  {
    targetQ: 'Divide your weight in kg by your height in meters squared. A score of 23.0 kg/m² or higher marks the overweight reference threshold under WHO Asian guidelines; 27.5 kg/m² or above reflects obesity classification.',
    esA: 'Divide tu peso en kg entre la altura en metros al cuadrado. Un valor de 23.0 kg/m² o superior indica el umbral de acción para sobrepeso según las recomendaciones de la OMS para Asia; 27.5 kg/m² o más refleja obesidad.',
    frA: 'Divisez votre poids en kg par votre taille en mètres au carré. Un score de 23,0 kg/m² ou plus indique le seuil d\'action pour le surpoids selon les recommandations de l\'OMS pour l\'Asie ; 27,5 kg/m² ou plus indique l\'obésité.',
    deA: 'Teilen Sie Ihr Gewicht in kg durch das Quadrat Ihrer Größe in Metern. Ein Wert von 23,0 kg/m² oder höher markiert den Schwellenwert für Übergewicht nach asiatischen WHO-Richtlinien; ab 27,5 kg/m² gilt Adipositas.',
    koA: '체중(kg)을 신장(m)의 제곱으로 나누어 계산합니다. 23.0 kg/m² 이상인 경우 WHO 아시아-태평양 지침에 따른 과체중 기준이며, 27.5 kg/m² 이상은 비만 범주로 분류됩니다.'
  },

  // 4. Asian BMI Calculator
  {
    targetQ: 'What BMI is considered overweight for Asians?',
    targetQKo: '아시아인에게 과체중으로 간주되는 BMI 기준은 얼마인가요?',
    esQ: '¿Qué IMC se considera sobrepeso para las poblaciones asiáticas?',
    esA: 'Según los criterios de la OMS para Asia-Pacífico, un IMC de 23.0 kg/m² o superior se considera sobrepeso.',
    frQ: 'Quel IMC est considéré comme un surpoids pour les populations asiatiques ?',
    frA: 'Selon les critères Asie-Pacifique de l\'OMS, un IMC de 23,0 kg/m² ou plus est considéré comme un surpoids.',
    deQ: 'Ab welchem BMI gilt man bei asiatischen Standards als übergewichtig?',
    deA: 'Nach den WHO-Asien-Pazifik-Kriterien gilt ein BMI von 23,0 kg/m² oder höher als Übergewicht.',
    koQ: '아시아인 기준에서 과체중으로 간주되는 BMI 수치는 얼마인가요?',
    koA: 'WHO 아시아-태평양 기준에 따르면 BMI 23.0 kg/m² 이상부터 과체중 범위로 분류됩니다.'
  },

  // 5. Lean Body Mass
  {
    targetQKo: 'Why is Lean Body Mass useful in body composition tracking? 안내 및 원리',
    koQ: '체성분 관리에서 제지방량(LBM)이 유용한 이유는 무엇인가요?',
    koA: '제지방량은 총 체중에서 지방량을 제외한 근육, 뼈, 수분의 무게입니다. 다이어트 중 순수 근육 손실 여부를 추적하는 핵심 지표로 활용됩니다.'
  },

  // 6. Ideal Weight Calculator
  {
    targetQ: 'Is the IBW calculator suitable for muscular individuals?',
    targetQKo: 'Is the IBW calculator suitable for muscular individuals? 안내 및 원리',
    esQ: '¿Es adecuada la calculadora de peso ideal para personas musculosas?',
    esA: 'Las fórmulas tradicionales como Devine estiman el peso promedio según la altura y el marco óseo. Para atletas con mayor masa muscular, las mediciones de porcentaje de grasa y circunferencia de cintura son más representativas.',
    frQ: 'Le calculateur de poids idéal convient-il aux personnes musclées ?',
    frA: 'Les formules historiques comme Devine estiment le poids moyen selon la taille. Pour les athlètes très musclés, l\'analyse du taux de masse grasse et du tour de taille est plus pertinente.',
    deQ: 'Ist der Idealgewichtsrechner für muskulöse Sportler geeignet?',
    deA: 'Klassische Formeln wie Devine schätzen das Durchschnittsgewicht anhand der Körpergröße. Bei muskulösen Sportlern bieten Körperfettmessung und Taillenumfang eine genauere Einschätzung.',
    koQ: '이상 체중 계산기가 근육량이 많은 운동선수에게도 적합한가요?',
    koA: 'Devine 등의 표준 공식은 골격 크기와 신장을 기준으로 평균 체중을 산출합니다. 근육량이 많은 경우 체지방률 및 제지방량 측정이 더 정확한 참고 기준이 됩니다.'
  },

  // 7. Protein Intake Calculator
  {
    targetQ: 'What are the best high-protein food sources to reach daily targets?',
    targetQKo: 'What are the best high-protein food sources to reach daily targets? 안내 및 원리',
    esQ: '¿Cuáles son las mejores fuentes de alimentos ricos en proteínas?',
    esA: 'Las fuentes completas de proteínas incluyen pechuga de pollo, huevos, pescado, yogur griego, tofu, legumbres y proteína de suero para alcanzar los objetivos diarios.',
    frQ: 'Quelles sont les meilleures sources de protéines pour atteindre ses objectifs ?',
    frA: 'Les sources recommandées incluent les œufs, le poulet, le poisson, le yaourt grec, le tofu, les lentilles et les poudres de protéines pour couvrir les besoins journaliers.',
    deQ: 'Was sind die besten Proteinquellen zur Deckung des Tagesbedarfs?',
    deA: 'Hochwertige Proteinquellen sind Hähnchenbrust, Eier, Fisch, Magerquark, Tofu, Hülsenfrüchte und Proteinpulver zur Erreichung des täglichen Ziels.',
    koQ: '일일 단백질 목표 섭취량을 채우기 위한 권장 식품은 무엇인가요?',
    koA: '닭가슴살, 계란, 생선, 그릭요거트, 두부, 콩류 및 유청 단백질 등이 단백질 요구량을 채우는 데 효과적인 식품입니다.'
  },

  // 8. Water Intake Calculator
  {
    targetQ: 'What are the early signs of dehydration and overhydration?',
    targetQKo: 'What are the early signs of dehydration and overhydration? 안내 및 원리',
    esQ: '¿Cuáles son los primeros signos de deshidratación y sobrehidratación?',
    esA: 'La deshidratación causa sed, orina oscura y fatiga. La sobrehidratación excesiva puede provocar dolores de cabeza y niveles bajos de sodio; mantén una ingesta equilibrada guiándote por la sed y el color claro de la orina.',
    frQ: 'Quels sont les premiers signes de déshydratation et de surhydratation ?',
    frA: 'La déshydratation se manifeste par la soif, une urine foncée et de la fatigue. Une surhydratation excessive peut provoquer des maux de tête ; écoutez votre soif et visez une urine jaune pâle.',
    deQ: 'Was sind frühe Anzeichen von Dehydratation und Überhydratation?',
    deA: 'Dehydratation zeigt sich durch Durst, dunklen Urin und Müdigkeit. Übermäßige Flüssigkeitszufuhr kann Kopfschmerzen verursachen; orientieren Sie sich an natürlichem Durst und hellgelbem Urin.',
    koQ: '탈수와 과다 수분 섭취의 초기 증상은 무엇인가요?',
    koA: '탈수의 징후는 갈증, 짙은 소변 색, 피로감 등입니다. 과도한 수분 섭취는 두통과 전해질 불균형을 유발할 수 있으므로 맑고 연한 노란색 소변을 목표로 수분을 조절하세요.'
  },

  // 9. Waist to Hip Ratio Calculator
  {
    rawEsQ: '¿Qué es a healthy waist to hip ratio for men and women according to WHO?',
    rawFrQ: "Qu'est-ce que a healthy waist to hip ratio for men and women according to WHO?",
    rawDeQ: 'Was ist a healthy waist to hip ratio for men and women according to WHO?',
    rawKoQ: 'a healthy waist to hip ratio for men and women according to WHO? 안내 및 원리',
    esQ: '¿Cuál es una relación cintura-cadera saludable para hombres y mujeres según la OMS?',
    esA: 'Según la OMS, un índice cintura-cadera saludable es de 0.90 o inferior para hombres y de 0.85 o inferior para mujeres para mantener un perfil metabólico favorable.',
    frQ: 'Quel est le rapport taille-hanche sain pour les hommes et les femmes selon l\'OMS ?',
    frA: 'Selon l\'OMS, un rapport taille-hanches sain est de 0,90 ou moins pour les hommes et de 0,85 ou moins pour les femmes.',
    deQ: 'Was ist ein gesundes Taille-zu-Hüfte-Verhältnis für Männer und Frauen nach der WHO?',
    deA: 'Laut WHO liegt ein gesundes Taille-Hüft-Verhältnis bei ≤ 0,90 für Männer und ≤ 0,85 für Frauen für ein geringes kardiometabolisches Risiko.',
    koQ: 'WHO 기준 남성과 여성의 건강한 허리-엉덩이 비율(WHR)은 얼마인가요?',
    koA: '세계보건기구(WHO) 지침에 따르면 건강한 허리-엉덩이 비율은 남성 0.90 이하, 여성 0.85 이하로 권장됩니다.'
  },
  {
    targetQKo: 'Why is waist to hip ratio a useful indicator alongside BMI? 안내 및 원리',
    koQ: 'BMI와 함께 허리-엉덩이 비율(WHR)을 측정하는 것이 왜 유용한가요?',
    koA: 'BMI는 전체 체중만을 평가하지만, WHR은 내장지방이 집중된 복부 중심부 비만을 정확히 파악하여 심혈관 건강 위험을 추가로 평가하는 데 도움을 줍니다.'
  },

  // 10. 1RM Calculator
  {
    rawEsQ: 'Is the 1RM calculator accurate para press de banca y sentadilla?',
    rawFrQ: 'Is the 1RM calculator accurate para press de banca y sentadilla?',
    rawDeQ: 'Is the 1RM calculator accurate para press de banca y sentadilla?',
    rawKoQ: 'Is the 1RM calculator accurate para press de banca y sentadilla? 안내 및 원리',
    esQ: '¿Es precisa la calculadora de 1RM para press de banca y sentadillas?',
    esA: 'Las fórmulas de Epley y Brzycki tienen una alta precisión para series de 1 a 10 repeticiones en ejercicios básicos como press de banca, sentadilla y peso muerto.',
    frQ: 'Le calculateur de 1RM est-il précis pour le développé couché et le squat ?',
    frA: 'Les formules d\'Epley et de Brzycki offrent une excellente précision pour les séries de 1 à 10 répétitions sur les mouvements de base comme le développé couché et le squat.',
    deQ: 'Ist der 1RM-Rechner für Bankdrücken und Kniebeugen genau?',
    deA: 'Die Formeln nach Epley und Brzycki bieten für Sätze von 1 bis 10 Wiederholungen bei Grundübungen wie Bankdrücken und Kniebeugen eine sehr hohe Genauigkeit.',
    koQ: '1RM 계산기는 벤치프레스와 스쿼트에 정확하게 적용되나요?',
    koA: 'Epley 및 Brzycki 공식은 벤치프레스, 스쿼트, 데드리프트 등 주요 다관절 복합 운동에서 1~10회 반복 수행 시 높은 정확도를 제공합니다.'
  }
];

// Apply replacements
for (const fix of faqFixes) {
  if (fix.rawEsQ) content = content.replaceAll(fix.rawEsQ, fix.esQ);
  if (fix.rawFrQ) content = content.replaceAll(fix.rawFrQ, fix.frQ);
  if (fix.rawDeQ) content = content.replaceAll(fix.rawDeQ, fix.deQ);
  if (fix.rawKoQ) content = content.replaceAll(fix.rawKoQ, fix.koQ);

  if (fix.targetQKo && fix.koQ) content = content.replaceAll(fix.targetQKo, fix.koQ);
  if (fix.koA) content = content.replaceAll('The WHO adult BMI chart uses identical cutoff numbers (18.5 to 24.9 for normal weight) for both adult men and women. However, because women naturally carry higher body fat percentages, waist measurements and body composition testing provide additional context.', fix.koA);
}

// Also replace specific English questions in ES, FR, DE, KO blocks
// Let's use a programmatic approach by loading the data and updating it safely!
console.log('Preparing programmatic update...');

fs.writeFileSync('src/data/seoDatabase.ts', content);
console.log('Pre-replacements done.');
