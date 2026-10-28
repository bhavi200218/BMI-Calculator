// Module 5: Nutrition, Fitness & Clinical Physiology (6 Articles)
import type { BlogArticleData } from './types';

export const nutritionAndFitnessArticles: Record<string, BlogArticleData> = {
  "daily-protein-intake-science": {
    "datePublished": "2026-10-12",
    "dateModified": "2026-10-28",
    "title": {
      "en": "Daily Protein Intake: Optimal Grams for Muscle, Satiety & Aging",
      "hi": "दैनिक प्रोटीन की सही मात्रा: मांसपेशियां, तृप्ति व स्वस्थ बुढ़ापा",
      "ko": "일일 단백질 권장 섭취량: 근육 합성, 포만감 및 노화 방지 과학",
      "de": "Optimaler täglicher Proteinbedarf: Muskelaufbau, Sättigung & Alter",
      "es": "Ingesta Diaria de Proteína: Gramos Óptimos para Músculo y Saciedad",
      "fr": "Apport Quotidien en Protéines : Grammes Optimaux pour les Muscles"
    },
    "category": {
      "en": "Macronutrient Science",
      "hi": "मैक्रोन्यूट्रिएंट विज्ञान",
      "ko": "영양 대사 과학",
      "de": "Sporternährung",
      "es": "Ciencia de Macronutrientes",
      "fr": "Nutrition et Protéines"
    },
    "description": {
      "en": "Clinical guide to daily dietary protein intake. Learn why the 0.8 g/kg RDA is only a minimum floor, the leucine threshold for muscle protein synthesis, and DIAAS protein quality scores.",
      "hi": "दैनिक प्रोटीन की मात्रा का वैज्ञानिक विश्लेषण। जानें कि 0.8 g/kg केवल न्यूनतम सीमा क्यों है, ल्यूसीन ट्रिगर और मांसपेशियों के लिए उच्च गुणवत्ता वाले प्रोटीन स्रोत।",
      "ko": "임상 영양학 기반 일일 단백질 섭취 가이드. 0.8g/kg 권장량이 단순 결핍 예방선인 이유, 류신(Leucine) 임계값과 DIAAS 단백질 품질 평가 지표를 상세 안내합니다.",
      "de": "Wissenschaftlicher Leitfaden zum täglichen Proteinbedarf: Warum die RDA von 0,8 g/kg zu niedrig ist, die Leucin-Schwelle und DIAAS-Qualitätswerte.",
      "es": "Guía clínica de proteína diaria: por qué el mínimo de 0.8 g/kg es insuficiente para deportistas, el umbral de leucina y las puntuaciones DIAAS de calidad.",
      "fr": "Guide clinique sur les protéines : pourquoi les 0,8 g/kg constituent un simple minimum, le seuil de leucine et l'indice de qualité DIAAS."
    },
    "contentHtml": {
      "en": `
      <h2>The Molecular and Clinical Science of Dietary Protein Requirements</h2>
      <p>Dietary protein is unique among the three primary macronutrients. Unlike carbohydrates and dietary fats, which are stored in substantial quantities as glycogen in the liver and skeletal muscle or as triglycerides in adipose depots for future energy mobilization, <strong>the human body maintains no dedicated, non-functional storage depot for amino acids</strong>. Every single gram of protein in your body serves an active, indispensable biological role: structural contractile myofibrils in skeletal muscle, circulating transport immunoglobulins, peptide hormones (such as insulin, glucagon, and growth hormone), neurotransmitters, digestive enzymes, and connective collagen fibers.</p>

      <h2>Evidence-Based Protein Intake Guidelines by Population</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">Population Cohort</th>
              <th class="p-3 border border-[#e6e6e6] font-mono text-[#464feb] font-bold">Daily Target (g/kg)</th>
              <th class="p-3 border border-[#e6e6e6]">Daily Grams for 75 kg Adult</th>
              <th class="p-3 border border-[#e6e6e6]">Primary Physiological Objective</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6]">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">Sedentary Adult Baseline (RDA)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono">0.8 – 1.0 g/kg</td>
              <td class="p-3 border border-[#e6e6e6] font-mono">60 – 75 grams</td>
              <td class="p-3 border border-[#e6e6e6]">Prevention of nitrogen deficit and basic enzymatic maintenance</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-emerald-600 font-bold">Resistance Athletes (Hypertrophy / Strength)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono font-bold text-[#464feb]">1.6 – 2.2 g/kg</td>
              <td class="p-3 border border-[#e6e6e6] font-mono font-bold text-[#464feb]">120 – 165 grams</td>
              <td class="p-3 border border-[#e6e6e6]">Maximizing fractional synthetic rate of skeletal muscle protein</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-blue-500 font-bold">Active Fat Loss (Calorie Deficit)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono font-bold text-blue-500">1.8 – 2.4 g/kg</td>
              <td class="p-3 border border-[#e6e6e6] font-mono font-bold text-blue-500">135 – 180 grams</td>
              <td class="p-3 border border-[#e6e6e6]">Preventing skeletal muscle proteolysis during hypocaloric dieting</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-amber-600 font-bold">Older Adults (Ages 65+)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono font-bold text-amber-600">1.2 – 1.5 g/kg</td>
              <td class="p-3 border border-[#e6e6e6] font-mono font-bold text-amber-600">90 – 112 grams</td>
              <td class="p-3 border border-[#e6e6e6]">Overcoming age-related anabolic resistance; sarcopenia prevention</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>The Leucine Trigger and Muscle Protein Synthesis (MPS)</h2>
      <p>Muscle mass is governed by the dynamic equilibrium between <strong>Muscle Protein Synthesis (MPS)</strong> and <strong>Muscle Protein Breakdown (MPB)</strong>. To stimulate MPS, meal ingestion must achieve the <strong>"Leucine Threshold"</strong> (approximately 2.5 to 3.0 grams of leucine per meal), which directly triggers the mTORC1 signaling cascade inside muscle cells.</p>

      <h2>Scientific References</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Morton RW, et al. <em>A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training.</em> Br J Sports Med 2018; 52(6):376-384. PMID: 28698222.</li>
        <li>Bauer J, et al. <em>Evidence-based recommendations for optimal dietary protein intake in older people: a position paper from the PROT-AGE Study Group.</em> J Am Med Dir Assoc 2013; 14(8):542-559. PMID: 23867520.</li>
      </ul>
`,
      "hi": `
      <h2>दैनिक प्रोटीन आवश्यकता का आणविक व नैदानिक विज्ञान</h2>
      <p>तीन प्रमुख मैक्रोन्यूट्रिएंट्स (कार्ब्स, फैट और प्रोटीन) में से प्रोटीन सबसे अनूठा है। कार्बोहाइड्रेट और वसा को शरीर भविष्य के लिए ग्लाइकोजन और चर्बी के रूप में जमा कर सकता है, लेकिन <strong>मानव शरीर में अतिरिक्त अमीनो एसिड का कोई संचय केंद्र (गोदाम) नहीं होता</strong>। आपके शरीर में मौजूद प्रोटीन का प्रत्येक ग्राम किसी न किसी सक्रिय कार्य में लगा होता है: जैसे मांसपेशियों के तंतु, प्रतिरक्षा एंटीबॉडी, इंसुलिन हार्मोन, पाचन एंजाइम और त्वचा-हड्डियों का कोलेजन।</p>
      <p>यही कारण है कि दैनिक आहार में पर्याप्त प्रोटीन लेना केवल बॉडीबिल्डर्स के लिए ही नहीं, बल्कि हर सामान्य व्यक्ति के इम्यून सिस्टम, हड्डियों के घनत्व और उम्र बढ़ने पर मांसपेशियों की रक्षा के लिए अत्यंत आवश्यक है।</p>

      <h2>विभिन्न आबादी वर्गों के लिए साक्ष्य-आधारित प्रोटीन दिशानिर्देश</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">वर्ग / जीवनशैली</th>
              <th class="p-3 border border-[#e6e6e6] font-mono text-[#464feb] font-bold">दैनिक प्रोटीन लक्ष्य (g/kg)</th>
              <th class="p-3 border border-[#e6e6e6]">70 किग्रा व्यक्ति के लिए दैनिक ग्राम</th>
              <th class="p-3 border border-[#e6e6e6]">प्रमुख शारीरिक लाभ</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6]">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">गतिहीन सामान्य वयस्क (RDA न्यूनतम)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono">0.8 – 1.0 g/kg</td>
              <td class="p-3 border border-[#e6e6e6] font-mono">56 – 70 ग्राम</td>
              <td class="p-3 border border-[#e6e6e6]">नाइट्रोजन संतुलन बनाए रखना व बुनियादी अंगों का रख-रखाव</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-emerald-600 font-bold">कसरत करने वाले (स्ट्रेंथ व मसल ट्रेनिंग)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono font-bold text-[#464feb]">1.6 – 2.2 g/kg</td>
              <td class="p-3 border border-[#e6e6e6] font-mono font-bold text-[#464feb]">112 – 154 ग्राम</td>
              <td class="p-3 border border-[#e6e6e6]">मांसपेशियों के प्रोटीन संश्लेषण (MPS) को अधिकतम करना</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-blue-500 font-bold">फैट लॉस (कैलोरी डेफिसिट डाइट पर)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono font-bold text-blue-500">1.8 – 2.4 g/kg</td>
              <td class="p-3 border border-[#e6e6e6] font-mono font-bold text-blue-500">126 – 168 ग्राम</td>
              <td class="p-3 border border-[#e6e6e6]">कम कैलोरी में मांसपेशियों को गलने से बचाना और तृप्ति देना</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-amber-600 font-bold">वरिष्ठ नागरिक (आयु 60 वर्ष से अधिक)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono font-bold text-amber-600">1.2 – 1.5 g/kg</td>
              <td class="p-3 border border-[#e6e6e6] font-mono font-bold text-amber-600">84 – 105 ग्राम</td>
              <td class="p-3 border border-[#e6e6e6]">उम्र से संबंधित कमजोरी (सरकोपेनिया) व हड्डियों की रक्षा</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>ल्यूसीन ट्रिगर और मांसपेशियों का निर्माण (Muscle Protein Synthesis)</h2>
      <p>मांसपेशियों का विकास केवल कुल प्रोटीन की मात्रा पर नहीं, बल्कि प्रत्येक भोजन में <strong>ल्यूसीन (Leucine)</strong> नामक आवश्यक अमीनो एसिड की मात्रा पर निर्भर करता है। वैज्ञानिक शोध दर्शाते हैं कि मांसपेशियों की वृद्धि का सिग्नल (mTORC1 पाथवे) सक्रिय करने के लिए प्रत्येक भोजन में कम से कम <strong>2.5 से 3.0 ग्राम ल्यूसीन</strong> (लगभग 25 से 35 ग्राम उच्च गुणवत्ता वाले प्रोटीन के बराबर) होना अनिवार्य है।</p>

      <h2>वैज्ञानिक संदर्भ</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Morton RW, et al. <em>A systematic review and meta-analysis of protein supplementation.</em> Br J Sports Med 2018; 52:376-384. PMID: 28698222.</li>
        <li>Bauer J, et al. <em>Optimal dietary protein intake in older people: PROT-AGE Study Group.</em> J Am Med Dir Assoc 2013; 14:542-559. PMID: 23867520.</li>
      </ul>
`,
      "es": `
      <h2>Pautas Clínicas de Ingesta Diaria de Proteína</h2>
      <p>La dosis mínima de 0.8 g/kg evita deficiencias nutricionales, pero la evidencia deportiva demuestra que <strong>1.6 a 2.2 g/kg</strong> maximiza la síntesis de proteína muscular en deportistas, mientras que en déficits calóricos se recomienda <strong>1.8 a 2.4 g/kg</strong> para prevenir el catabolismo.</p>
`,
      "fr": `
      <h2>Apports Protéiques Recommandés</h2>
      <p>Le seuil d'apport protéique optimal s'établit entre 1,6 et 2,2 g/kg/jour pour stimuler la synthèse musculaire via le seuil de leucine (2,5 à 3 g par repas), et grimpe à 2,4 g/kg en période de sèche.</p>
`,
      "de": `
      <h2>Evidenzbasierte Proteinzufuhr im Sport</h2>
      <p>Die 0,8 g/kg der DGE stellen lediglich das Existenzminimum dar. Für Muskelaufbau und Fettabbau sind 1,6 bis 2,2 g/kg Körpergewicht optimal, um die Leucin-Schwelle pro Mahlzeit zu erreichen.</p>
`,
      "ko": `
      <h2>임상 영양학 기반 일일 단백질 권장량</h2>
      <p>체중 유지를 위한 최소 권장량(0.8g/kg)과 달리, 근성장과 대사 보존을 위해서는 <strong>체중 kg당 1.6~2.2g</strong>이 권장되며 식사당 2.5~3g의 류신 섭취가 근합성(MPS)의 필수 조건입니다.</p>
`
    }
  },

  "macro-split-calculator-guide": {
    "datePublished": "2026-10-15",
    "dateModified": "2026-10-28",
    "title": {
      "en": "Macro Split Calculator Guide: 4-4-9 Rule, Ratios & Step-by-Step Grams",
      "hi": "मैक्रो स्प्लिट गाइड: 4-4-9 नियम, अनुपात व ग्राम में सही विभाजन",
      "ko": "매크로 분배 계산 가이드: 4-4-9 칼로리 법칙, 탄단지 비율 및 그램(g) 환산",
      "de": "Makronährstoff-Verteilung berechnen: 4-4-9 Regel, Grammangaben & Ziele",
      "es": "Distribución de Macronutrientes: Regla 4-4-9 y Cálculo en Gramos",
      "fr": "Répartition des Macronutriments : Règle 4-4-9 et Calcul en Grammes"
    },
    "category": {
      "en": "Macronutrient Science",
      "hi": "मैक्रोन्यूट्रिएंट विज्ञान",
      "ko": "영양 대사 과학",
      "de": "Sporternährung",
      "es": "Ciencia de Macronutrientes",
      "fr": "Nutrition et Protéines"
    },
    "description": {
      "en": "Learn the physiological Atwater 4-4-9 energy density rule. Calculate exact grams of protein, carbs, and fat tailored to your body composition and training volume.",
      "hi": "मैक्रोन्यूट्रिएंट्स को ग्राम में विभाजित करने की वैज्ञानिक विधि। एटवाटर 4-4-9 कैलोरी नियम, कार्ब्स-प्रोटीन-फैट का अनुपात और लक्ष्य आधारित विभाजन।",
      "ko": "애트워터(Atwater) 4-4-9 에너지 밀도 원칙을 적용한 맞춤형 탄수화물·단백질·지방 그램(g) 산출법 및 목표별 최적 분배 비율 안내.",
      "de": "Praxisleitfaden zur Makroverteilung nach der Atwater 4-4-9 Regel: Exakte Grammwerte für Protein, Kohlenhydrate und Fett berechnen.",
      "es": "Aprende la regla de densidad energética 4-4-9 de Atwater y cómo distribuir proteínas, grasas y carbohidratos en gramos según tus objetivos.",
      "fr": "Maîtrisez la règle énergétique 4-4-9 d'Atwater pour convertir vos calories cibles en grammes de protéines, lipides et glucides."
    },
    "contentHtml": {
      "en": `
      <h2>The Thermodynamics of Macronutrient Caloric Density: The Atwater 4-4-9 Rule</h2>
      <p>Every calorie in human food originates from three core macronutrients, plus alcohol. Wilbur Atwater established the bomb-calorimetry energy densities:</p>
      <ul>
        <li><strong>Protein:</strong> 4.0 kcal per gram</li>
        <li><strong>Carbohydrate:</strong> 4.0 kcal per gram</li>
        <li><strong>Dietary Fat:</strong> 9.0 kcal per gram (more than double the energy density)</li>
      </ul>

      <h2>Evidence-Based Macronutrient Split Templates</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">Dietary Strategy</th>
              <th class="p-3 border border-[#e6e6e6] text-blue-500 font-bold">Protein %</th>
              <th class="p-3 border border-[#e6e6e6] text-amber-600 font-bold">Carbohydrate %</th>
              <th class="p-3 border border-[#e6e6e6] text-rose-600 font-bold">Dietary Fat %</th>
              <th class="p-3 border border-[#e6e6e6]">Optimal Application</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6] font-mono">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold text-[#464feb]">Balanced Athletic (Zone)</td>
              <td class="p-3 border border-[#e6e6e6] text-blue-500">30%</td>
              <td class="p-3 border border-[#e6e6e6] text-amber-600">40%</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-600">30%</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">General fitness, sports conditioning, sustained satiety</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold">High-Carb Endurance</td>
              <td class="p-3 border border-[#e6e6e6] text-blue-500">20%</td>
              <td class="p-3 border border-[#e6e6e6] text-amber-600">55–60%</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-600">20–25%</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">Marathon runners, cyclists, glycogen replenishment</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold text-emerald-600 font-bold">Bodybuilding / Cutting</td>
              <td class="p-3 border border-[#e6e6e6] text-blue-500 font-bold">35–40%</td>
              <td class="p-3 border border-[#e6e6e6] text-amber-600">35–40%</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-600">20–25%</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">Maximal muscle sparing during aggressive fat loss</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Step-by-Step Gram Calculation for a 2,000 kcal Target (40/30/30 Split)</h2>
      <ul>
        <li><strong>Protein (30%):</strong> <code>(2,000 &times; 0.30) / 4 kcal/g = 600 / 4 = 150 grams</code></li>
        <li><strong>Carbs (40%):</strong> <code>(2,000 &times; 0.40) / 4 kcal/g = 800 / 4 = 200 grams</code></li>
        <li><strong>Fat (30%):</strong> <code>(2,000 &times; 0.30) / 9 kcal/g = 600 / 9 = 67 grams</code></li>
      </ul>

      <h2>Scientific References</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Atwater WO. <em>Principles of Nutrition and Nutritive Value of Food.</em> USDA Farmers' Bulletin 1902; 142.</li>
        <li>Thomas DT, Erdman KA, Burke LM. <em>Position of the Academy of Nutrition and Dietetics: Nutrition and Athletic Performance.</em> J Acad Nutr Diet 2016; 116(3):501-528.</li>
      </ul>
`,
      "hi": `
      <h2>मैक्रोन्यूट्रिएंट्स का ऊर्जा सिद्धांत: एटवाटर का 4-4-9 नियम</h2>
      <p>भोजन से प्राप्त होने वाली प्रत्येक कैलोरी मुख्य रूप से तीन मैक्रोन्यूट्रिएंट्स से आती है। वैज्ञानिक विल्बर एटवाटर द्वारा स्थापित ऊर्जा घनत्व के नियम के अनुसार:</p>
      <ul>
        <li><strong>प्रोटीन:</strong> प्रति ग्राम 4.0 कैलोरी (4 kcal/g)</li>
        <li><strong>कार्बोहाइड्रेट:</strong> प्रति ग्राम 4.0 कैलोरी (4 kcal/g)</li>
        <li><strong>वसा (फैट):</strong> प्रति ग्राम 9.0 कैलोरी (9 kcal/g) - प्रोटीन व कार्ब्स से दोगुने से अधिक ऊर्जा</li>
      </ul>

      <h2>प्रमुख साक्ष्य-आधारित मैक्रो स्प्लिट टेम्प्लेट्स</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">आहार रणनीति</th>
              <th class="p-3 border border-[#e6e6e6] text-blue-500 font-bold">प्रोटीन %</th>
              <th class="p-3 border border-[#e6e6e6] text-amber-600 font-bold">कार्ब्स %</th>
              <th class="p-3 border border-[#e6e6e6] text-rose-600 font-bold">फैट %</th>
              <th class="p-3 border border-[#e6e6e6]">सर्वोत्तम अनुप्रयोग</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6] font-mono">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold text-[#464feb]">संतुलित एथलेटिक (Balanced)</td>
              <td class="p-3 border border-[#e6e6e6] text-blue-500">30%</td>
              <td class="p-3 border border-[#e6e6e6] text-amber-600">40%</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-600">30%</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">सामान्य स्वास्थ्य, निरंतर ऊर्जा और भूख पर नियंत्रण</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold">उच्च कार्ब्स इंड्यूरेंस (Endurance)</td>
              <td class="p-3 border border-[#e6e6e6] text-blue-500">20%</td>
              <td class="p-3 border border-[#e6e6e6] text-amber-600">55–60%</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-600">20–25%</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">धावक, साइकिल चालक, मांसपेशियों में ग्लाइकोजन पुनःपूर्ति</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold text-emerald-600 font-bold">बॉडीबिल्डिंग / फैट कटिंग</td>
              <td class="p-3 border border-[#e6e6e6] text-blue-500 font-bold">35–40%</td>
              <td class="p-3 border border-[#e6e6e6] text-amber-600">35–40%</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-600">20–25%</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">वजन घटाने के दौरान मांसपेशियों की अधिकतम सुरक्षा</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>2,000 कैलोरी लक्ष्य के लिए चरणबद्ध ग्राम गणना (40/30/30 स्प्लिट)</h2>
      <ul>
        <li><strong>प्रोटीन (30%):</strong> <code>(2,000 &times; 0.30) / 4 kcal/g = 600 / 4 = 150 ग्राम</code></li>
        <li><strong>कार्ब्स (40%):</strong> <code>(2,000 &times; 0.40) / 4 kcal/g = 800 / 4 = 200 ग्राम</code></li>
        <li><strong>फैट (30%):</strong> <code>(2,000 &times; 0.30) / 9 kcal/g = 600 / 9 = 67 ग्राम</code></li>
      </ul>

      <h2>वैज्ञानिक संदर्भ</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Atwater WO. <em>Principles of Nutrition and Nutritive Value of Food.</em> USDA Farmers' Bulletin 1902; 142.</li>
        <li>Thomas DT, et al. <em>Nutrition and Athletic Performance.</em> J Acad Nutr Diet 2016; 116(3):501-528. PMID: 26920240.</li>
      </ul>
`,
      "es": `
      <h2>Distribución de Macronutrientes por la Regla 4-4-9</h2>
      <p>Las proteínas y carbohidratos aportan 4 kcal/g, mientras que las grasas aportan 9 kcal/g. Para calcular los gramos exactos: divide las calorías asignadas a proteína y carbohidratos entre 4, y las de grasa entre 9.</p>
`,
      "fr": `
      <h2>Calcul Pratique des Macronutriments (Règle 4-4-9)</h2>
      <p>La conversion calorique s'effectue en divisant l'énergie allouée aux protéines et glucides par 4, et celle allouée aux lipides par 9 (9 kcal/g).</p>
`,
      "de": `
      <h2>Makronährstoff-Verteilung nach der Atwater-Regel</h2>
      <p>1 g Protein = 4 kcal, 1 g Kohlenhydrate = 4 kcal, 1 g Fett = 9 kcal. Diese Faktoren ermöglichen die exakte Umrechnung von Kalorienzielen in Grammwerte.</p>
`,
      "ko": `
      <h2>애트워터(Atwater) 4-4-9 원칙과 매크로 분배</h2>
      <p>단백질 4kcal/g, 탄수화물 4kcal/g, 지방 9kcal/g의 공식을 사용하여 총 칼로리 목표를 실생활 맞춤형 그램(g) 수치로 정확히 환산합니다.</p>
`
    }
  },

  "daily-water-intake-guide": {
    "datePublished": "2026-10-18",
    "dateModified": "2026-10-28",
    "title": {
      "en": "Daily Water Intake Guide: Science, Body Weight Formula & Urine Color",
      "hi": "दैनिक जल सेवन गाइड: वैज्ञानिक आवश्यकता, वजन अनुसार सूत्र व मूत्र का रंग",
      "ko": "일일 수분 섭취 가이드: 체중별 권장 공식, 전해질 균형 및 소변 색상 판독법",
      "de": "Täglicher Wasserbedarf: Wissenschaftliche Formeln & Urinfarbe-Check",
      "es": "Ingesta Diaria de Agua: Fórmula por Peso Corporal y Color de Orina",
      "fr": "Apport Journalier en Eau : Formule par Poids et Contrôle de l'Hydratation"
    },
    "category": {
      "en": "Fluid Physiology & Hydration",
      "hi": "जलीय शरीरक्रिया विज्ञान",
      "ko": "수분 생리학 및 건강",
      "de": "Hydratation & Gesundheit",
      "es": "Fisiología de la Hidratación",
      "fr": "Hydratation et Physiologie"
    },
    "description": {
      "en": "Clinical hydration science guide. Calculate daily water intake using the 30-35 mL/kg rule, decode the 8-cup myth, and use the clinical Armstrong urine color scale.",
      "hi": "नैदानिक जलयोजन (हाइड्रेशन) विज्ञान गाइड। 30-35 मिली/किग्रा सूत्र, 8 गिलास पानी के मिथक का सच और आर्मस्ट्रांग यूरिन कलर चार्ट द्वारा जलयोजन जांच।",
      "ko": "임상 수분 섭취 과학. 체중 kg당 30~35mL 공식, 잘못된 '하루 8잔' 미신 분석 및 Armstrong 임상 소변 색상 척도를 안내합니다.",
      "de": "Wissenschaftlicher Leitfaden zum Wasserbedarf: Die 30-35 ml/kg Regel, der 8-Gläser-Mythos und die klinische Armstrong-Farbskala.",
      "es": "Guía médica de hidratación: la regla de 30-35 ml/kg de peso, desmontando el mito de los 8 vasos y la escala de color de orina de Armstrong.",
      "fr": "Guide scientifique de l'hydratation : règle des 30-35 ml/kg de poids corporel, mythe des 8 verres et échelle de couleur urinaire d'Armstrong."
    },
    "contentHtml": {
      "en": `
      <h2>The Physiology of Human Fluid Balance</h2>
      <p>Water constitutes approximately 55% to 65% of adult human body mass (~73% of lean muscle tissue, ~10% of adipose tissue). The National Academies of Sciences, Engineering, and Medicine (NASEM) established baseline adequate fluid intakes:</p>
      <ul>
        <li><strong>Adult Men:</strong> 3.7 liters (125 oz) total daily fluid (including ~20% from food)</li>
        <li><strong>Adult Women:</strong> 2.7 liters (91 oz) total daily fluid (including ~20% from food)</li>
      </ul>

      <h2>The Weight-Based Clinical Hydration Formula</h2>
      <p>Sports medicine clinicians use the validated body weight equation: <strong>30 to 35 mL of water per kilogram of body weight daily</strong> (plus 500 mL per hour of vigorous sweat exercise).</p>
      <div class="my-4 p-4 rounded-xl border border-[#e6e6e6] bg-[var(--card)] font-mono text-sm">
        <code>Daily Fluid Target (Liters) = Body Weight (kg) &times; 0.033</code>
      </div>
      <p>For a 70 kg individual: <code>70 &times; 0.033 = 2.3 liters of pure drinking fluid daily</code>.</p>

      <h2>Armstrong Clinical Urine Color Scale for Real-Time Hydration</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">Urine Shade</th>
              <th class="p-3 border border-[#e6e6e6]">Clinical Hydration Status</th>
              <th class="p-3 border border-[#e6e6e6]">Recommended Clinical Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6]">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-emerald-600 font-bold">Pale Straw / Clear Lemonade</td>
              <td class="p-3 border border-[#e6e6e6] text-emerald-600 font-bold">Optimal Euhydration</td>
              <td class="p-3 border border-[#e6e6e6]">Maintain current fluid intake schedule</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-amber-600 font-bold">Dark Yellow / Apple Juice</td>
              <td class="p-3 border border-[#e6e6e6] text-amber-600 font-bold">Mild Dehydration (1–2% body mass deficit)</td>
              <td class="p-3 border border-[#e6e6e6]">Drink 500 mL of water immediately</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-rose-600 font-bold">Amber / Tea Colored</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-600 font-bold">Severe Clinical Hypohydration</td>
              <td class="p-3 border border-[#e6e6e6]">Rehydrate immediately with balanced water and electrolytes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Scientific References</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Armstrong LE, et al. <em>Urinary indices during dehydration, exercise, and rehydration.</em> Int J Sport Nutr 1998; 8(4):345-355. PMID: 9841955.</li>
        <li>National Academies of Sciences, Engineering, and Medicine (NASEM). <em>Dietary Reference Intakes for Water, Potassium, Sodium, Chloride, and Sulfate.</em> Washington, DC: The National Academies Press, 2005.</li>
      </ul>
`,
      "hi": `
      <h2>मानव शरीर में जलयोजन (हाइड्रेशन) का शरीरक्रिया विज्ञान</h2>
      <p>वयस्क मानव शरीर का लगभग 55% से 65% हिस्सा पानी से बना होता है। मांसपेशी ऊतक में 73% पानी होता है, जबकि वसा ऊतक में केवल 10%। यूएस नेशनल एकेडमी ऑफ साइंसेज के अनुसार सामान्य स्वस्थ वयस्कों के लिए कुल दैनिक तरल आवश्यकता:</p>
      <ul>
        <li><strong>पुरुष:</strong> लगभग 3.7 लीटर कुल तरल (भोजन से मिलने वाले 20% पानी सहित ~3.0 लीटर पेयजल)</li>
        <li><strong>महिलाएं:</strong> लगभग 2.7 लीटर कुल तरल (भोजन के 20% पानी सहित ~2.2 लीटर पेयजल)</li>
      </ul>

      <h2>शारीरिक वजन के अनुसार पानी पीने का वैज्ञानिक सूत्र</h2>
      <p>स्पोर्ट्स मेडिसिन में वजन के आधार पर पानी की आवश्यकता निकाली जाती है: <strong>प्रति किलोग्राम शारीरिक वजन पर 30 से 35 मिलीलीटर पानी</strong>:</p>
      <div class="my-4 p-4 rounded-xl border border-[#e6e6e6] bg-[var(--card)] font-mono text-sm">
        <code>दैनिक पीने का पानी (लीटर) = वजन (kg) &times; 0.033</code>
      </div>
      <p>उदाहरण के लिए, 70 किग्रा वजन वाले व्यक्ति को प्रतिदिन <code>70 &times; 0.033 = 2.3 लीटर</code> शुद्ध पानी पीना चाहिए (व्यायाम में पसीना आने पर 500 मिली अतिरिक्त)।</p>

      <h2>आर्मस्ट्रांग यूरिन कलर चार्ट: हाइड्रेशन जांच का स्वर्ण मानक</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">मूत्र का रंग</th>
              <th class="p-3 border border-[#e6e6e6]">नैदानिक हाइड्रेशन स्थिति</th>
              <th class="p-3 border border-[#e6e6e6]">सुझाई गई स्वास्थ्य कार्रवाई</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6]">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-emerald-600 font-bold">हल्का पीला / नींबू पानी जैसा</td>
              <td class="p-3 border border-[#e6e6e6] text-emerald-600 font-bold">इष्टतम जलयोजन (उत्तम स्वास्थ्य)</td>
              <td class="p-3 border border-[#e6e6e6]">वर्तमान पानी पीने का नियम बनाए रखें</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-amber-600 font-bold">गहरा पीला / सेब के रस जैसा</td>
              <td class="p-3 border border-[#e6e6e6] text-amber-600 font-bold">हल्का निर्जलीकरण (Dehydration)</td>
              <td class="p-3 border border-[#e6e6e6]">तुरंत 1 से 2 गिलास (500 ml) पानी पिएं</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-rose-600 font-bold">गहरा भूरा / चाय जैसा</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-600 font-bold">गंभीर निर्जलीकरण</td>
              <td class="p-3 border border-[#e6e6e6]">तुरंत इलेक्ट्रोलाइट्स (ORS) युक्त पानी पिएं</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>वैज्ञानिक संदर्भ</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Armstrong LE, et al. <em>Urinary indices during dehydration, exercise, and rehydration.</em> Int J Sport Nutr 1998; 8:345-355. PMID: 9841955.</li>
        <li>NASEM. <em>Dietary Reference Intakes for Water and Electrolytes.</em> National Academies Press 2005.</li>
      </ul>
`,
      "es": `
      <h2>Fisiología de la Hidratación Diaria</h2>
      <p>La regla estándar de la medicina deportiva establece una ingesta de <strong>30 a 35 ml de agua por kilogramo de peso corporal</strong> al día. La escala de color de orina de Armstrong permite verificar en tiempo real si el estado de hidratación es óptimo (tono amarillo pálido) o si existe deshidratación celular.</p>
`,
      "fr": `
      <h2>Besoins Hydriques Quotidiens</h2>
      <p>La formule médicale recommande <strong>30 à 35 mL d'eau par kg de poids corporel</strong>. Le contrôle visuel de la couleur de l'urine selon l'échelle d'Armstrong constitue le moyen le plus simple et fiable d'évaluer son statut d'hydratation au quotidien.</p>
`,
      "de": `
      <h2>Wissenschaftlicher Leitfaden zum täglichen Wasserbedarf</h2>
      <p>Als Faustregel gelten 30 bis 35 ml Wasser pro kg Körpergewicht. Die Armstrong-Urinfarbskala dient im Leistungssport als verlässlicher Indikator zur Vermeidung von Dehydratation.</p>
`,
      "ko": `
      <h2>체중 기반 일일 수분 섭취 공식</h2>
      <p>스포츠 의학에서는 <strong>체중 kg당 30~35mL</strong>(70kg 기준 약 2.3L)의 수분 섭취를 권장하며, Armstrong 소변 색상 지표를 통해 탈수 상태를 실시간으로 점검하는 것이 중요합니다.</p>
`
    }
  },

  "body-surface-area-mosteller-guide": {
    "datePublished": "2026-10-20",
    "dateModified": "2026-10-28",
    "title": {
      "en": "Body Surface Area (BSA): Mosteller & Du Bois Formulas in Medicine",
      "hi": "बॉडी सरफेस एरिया (BSA): दवा खुराक में मोस्टेलर व डु बोइस फॉर्मूले",
      "ko": "체표면적(BSA) 가이드: Mosteller 및 Du Bois 공식과 임상 약물 투약 기준",
      "de": "Körperoberfläche (BSA) berechnen: Mosteller & Du Bois Formeln",
      "es": "Área de Superficie Corporal (BSA): Fórmulas de Mosteller y Du Bois",
      "fr": "Surface Corporelle (BSA) : Formules de Mosteller et Du Bois en Médecine"
    },
    "category": {
      "en": "Clinical Pharmacokinetics & Weight",
      "hi": "क्लिनिकल फार्माकोकाइनेटिक्स व वजन",
      "ko": "임상 약동학 및 적정 체중",
      "de": "Pharmakokinetik & Idealgewicht",
      "es": "Farmacocinética y Peso Ideal",
      "fr": "Pharmacocinétique et Poids Idéal"
    },
    "description": {
      "en": "Clinical guide to Body Surface Area (BSA). Compare Mosteller and Du Bois equations, understand why chemotherapy and GFR are indexed to BSA, and see step-by-step calculations.",
      "hi": "बॉडी सरफेस एरिया (BSA) का चिकित्सीय महत्व। मोस्टेलर और डु बोइस सूत्रों की तुलना, कीमोथेरेपी खुराक और किडनी जीएफआर (GFR) में बीएसए की भूमिका।",
      "ko": "체표면적(BSA)의 의학적 중요성. Mosteller 및 Du Bois 공식의 산출 방식, 항암 화학요법 투약량 결정 및 신장 사구체여과율(GFR) 표준화 원리를 설명합니다.",
      "de": "Klinischer Leitfaden zur Körperoberfläche (BSA): Warum Chemotherapien und Nierenwerte nach Mosteller auf m² normiert werden.",
      "es": "Guía clínica del Área de Superficie Corporal (BSA): fórmulas de Mosteller y Du Bois en oncología y ajuste de dosis farmacológica.",
      "fr": "Guide médical de la surface corporelle (BSA) : équations de Mosteller et Du Bois pour la posologie des chimiothérapies et le débit de filtration glomérulaire."
    },
    "contentHtml": {
      "en": `
      <h2>What is Body Surface Area (BSA) and Why Does It Matter?</h2>
      <p>In clinical oncology, nephrology, and pediatric critical care, dosing narrow-therapeutic-index drugs based on weight alone leads to severe toxicity in obese patients or ineffective underdosing in slender patients. <strong>Body Surface Area (BSA)</strong>—the measured or calculated surface area of the human body expressed in square meters (m²)—correlates far more closely with cardiac output, renal blood flow, and basal metabolic rate than simple body mass.</p>

      <h2>The Two Universal BSA Formulas Compared</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">Formula</th>
              <th class="p-3 border border-[#e6e6e6] font-mono text-[#464feb] font-bold">Mathematical Equation</th>
              <th class="p-3 border border-[#e6e6e6]">Clinical Use Case</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6]">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-[#464feb]">Mosteller Formula (1987)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono font-bold text-[#464feb]">BSA (m²) = &radic;([Height (cm) &times; Weight (kg)] / 3600)</td>
              <td class="p-3 border border-[#e6e6e6]">Universal modern hospital standard, simple to compute, validated in clinical oncology</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">Du Bois &amp; Du Bois (1916)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono">BSA (m²) = 0.007184 &times; Weight(kg)<sup>0.425</sup> &times; Height(cm)<sup>0.725</sup></td>
              <td class="p-3 border border-[#e6e6e6]">Historical gold standard derived from coated paper whole-body wrap studies</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Step-by-Step Mosteller Calculation</h2>
      <p>For an adult male with height 175 cm and weight 70 kg:</p>
      <ul>
        <li><code>Height &times; Weight = 175 &times; 70 = 12,250</code></li>
        <li><code>12,250 / 3600 = 3.4028</code></li>
        <li><code>&radic;3.4028 = 1.84 m² (Standard adult average is ~1.73 m²)</code></li>
      </ul>

      <h2>Scientific References</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Mosteller RD. <em>Simplified calculation of body-surface area.</em> N Engl J Med 1987; 317(17):1098. PMID: 3657876.</li>
        <li>Du Bois D, Du Bois EF. <em>A formula to estimate the approximate surface area if height and weight be known.</em> Arch Intern Med 1916; 17(6):863-871.</li>
      </ul>
`,
      "hi": `
      <h2>बॉडी सरफेस एरिया (BSA) क्या है और अस्पतालों में इसका क्या महत्व है?</h2>
      <p>कैंसर की कीमोथेरेपी, आईसीयू और किडनी के इलाज में दवाओं की खुराक केवल मरीज के वजन पर तय करने से गंभीर दुष्प्रभाव हो सकते हैं। <strong>बॉडी सरफेस एरिया (Body Surface Area / BSA)</strong>—मानव शरीर का कुल बाहरी क्षेत्रफल वर्ग मीटर (m²) में—हृदय के रक्त प्रवाह (Cardiac Output), किडनी के फिल्ट्रेशन (GFR) और बेसल मेटाबॉलिज्म के साथ शरीर के कुल वजन से कहीं अधिक सटीक रूप से मेल खाता है।</p>

      <h2>दो प्रमुख नैदानिक बीएसए सूत्र</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">सूत्र का नाम</th>
              <th class="p-3 border border-[#e6e6e6] font-mono text-[#464feb] font-bold">गणितीय समीकरण</th>
              <th class="p-3 border border-[#e6e6e6]">नैदानिक उपयोगिता</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6]">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-[#464feb]">मोस्टेलर फॉर्मूला (Mosteller 1987)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono font-bold text-[#464feb]">BSA (m²) = &radic;([कद (cm) &times; वजन (kg)] / 3600)</td>
              <td class="p-3 border border-[#e6e6e6]">आधुनिक अस्पतालों का सार्वभौमिक मानक, कीमोथेरेपी में सबसे अधिक इस्तेमाल</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">डु बोइस फॉर्मूला (Du Bois 1916)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono">BSA = 0.007184 &times; W<sup>0.425</sup> &times; H<sup>0.725</sup></td>
              <td class="p-3 border border-[#e6e6e6]">ऐतिहासिक शोध का क्लासिक मानक; दोनों सूत्रों का परिणाम लगभग समान आता है</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>मोस्टेलर सूत्र से चरणबद्ध गणना (Worked Example)</h2>
      <p>मान लीजिए किसी वयस्क का कद 175 सेमी और वजन 70 किग्रा है:</p>
      <ul>
        <li><code>कद &times; वजन = 175 &times; 70 = 12,250</code></li>
        <li><code>12,250 को 3600 से भाग दें = 3.4028</code></li>
        <li><code>3.4028 का वर्गमूल निकालें = 1.84 m²</code> (औसत वयस्क मानक लगभग 1.73 m² होता है)</li>
      </ul>

      <h2>वैज्ञानिक संदर्भ</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Mosteller RD. <em>Simplified calculation of body-surface area.</em> N Engl J Med 1987; 317(17):1098. PMID: 3657876.</li>
        <li>Du Bois D, Du Bois EF. <em>A formula to estimate the approximate surface area.</em> Arch Intern Med 1916; 17:863-871.</li>
      </ul>
`,
      "es": `
      <h2>Área de Superficie Corporal (BSA) en Farmacocinética</h2>
      <p>La fórmula de <strong>Mosteller (1987)</strong> [BSA = &radic;([Altura cm &times; Peso kg] / 3600)] es el estándar clínico universal para dosificar fármacos de estrecho margen terapéutico como quimioterápicos y para normalizar la tasa de filtración glomerular renal (1.73 m²).</p>
`,
      "fr": `
      <h2>Surface Corporelle (BSA) : Formule de Mosteller</h2>
      <p>L'équation simplifiée de Mosteller permet d'ajuster avec précision les doses de chimiothérapie et les paramètres d'hémodialyse en fonction de la surface d'échange métabolique réelle de l'organisme.</p>
`,
      "de": `
      <h2>Körperoberfläche (BSA) nach Mosteller</h2>
      <p>Die Mosteller-Formel bildet die Grundlage der Dosisberechnung in der Onkologie und Intensivmedizin, da die Körperoberfläche besser mit dem Herzzeitvolumen und der Nierenfunktion korreliert als das reine Körpergewicht.</p>
`,
      "ko": `
      <h2>체표면적(BSA) Mosteller 공식의 임상적 활용</h2>
      <p>Mosteller(1987) 공식 [BSA = &radic;(키(cm) &times; 몸무게(kg) / 3600)]은 항암 화학요법 투약량 산출 및 신장 사구체여과율(GFR/1.73m²) 표준화에 사용되는 글로벌 임상 표준입니다.</p>
`
    }
  },

  "target-heart-rate-training-zones": {
    "datePublished": "2026-10-22",
    "dateModified": "2026-10-28",
    "title": {
      "en": "Target Heart Rate Training Zones: Karvonen Formula & 5 Physiology Zones",
      "hi": "हृदय गति प्रशिक्षण क्षेत्र: कार्वोनेन सूत्र व 5 एरोबिक हार्ट रेट ज़ोन",
      "ko": "목표 심박수 트레이닝 존: Karvonen 공식과 5가지 생리학적 운동 강도",
      "de": "Herzfrequenz-Trainingszonen: Karvonen-Formel & 5 Trainingsbereiche",
      "es": "Zonas de Frecuencia Cardíaca: Fórmula de Karvonen y las 5 Zonas",
      "fr": "Zones de Fréquence Cardiaque : Formule de Karvonen et les 5 Zones"
    },
    "category": {
      "en": "Cardiovascular Physiology & Fitness",
      "hi": "हृदय-संवहनी व्यायाम शरीरक्रिया विज्ञान",
      "ko": "심폐 생리학 및 피트니스",
      "de": "Kardiovaskuläre Leistungsdiagnostik",
      "es": "Fisiología Cardiovascular y Fitness",
      "fr": "Physiologie Cardiovasculaire"
    },
    "description": {
      "en": "Master target heart rate training. Calculate your maximum heart rate with Tanaka (208 - 0.7 &times; Age), use the Karvonen Heart Rate Reserve formula, and train across 5 zones.",
      "hi": "टारगेट हार्ट रेट प्रशिक्षण की वैज्ञानिक गाइड। तनाका सूत्र से अधिकतम हृदय गति, कार्वोनेन हार्ट रेट रिजर्व फॉर्मूला और 5 एरोबिक प्रशिक्षण क्षेत्रों का सही उपयोग।",
      "ko": "목표 심박수 트레이닝 완벽 가이드. Tanaka 공식(208 - 0.7 &times; 나이)과 Karvonen 심박 예비력(HRR) 공식을 활용한 5가지 맞춤형 운동 강도 영역을 확인하세요.",
      "de": "Kardiovaskuläres Zonentraining: Tanaka-Formel für HRmax, Karvonen-Herzfrequenzreserve und gezielte Fettverbrennung in Zone 2.",
      "es": "Guía de entrenamiento por zonas de frecuencia cardíaca: fórmula de Tanaka, reserva cardíaca de Karvonen y entrenamiento en Zona 2.",
      "fr": "Guide d'entraînement par zones de fréquence cardiaque : formule de Tanaka, réserve cardiaque de Karvonen et travail d'endurance en Zone 2."
    },
    "contentHtml": {
      "en": `
      <h2>The Physiology of Cardiovascular Conditioning</h2>
      <p>Cardiorespiratory training improves mitochondrial density, increases left-ventricular stroke volume, and optimizes vascular compliance. Maximizing training efficiency requires tailoring exercise intensity to your physiological heart rate zones.</p>

      <h2>The Two Essential Mathematical Equations</h2>
      <ul>
        <li><strong>Tanaka Equation (Max Heart Rate):</strong> <code>HRmax = 208 - (0.7 &times; Age)</code> (significantly more accurate than the obsolete 220 - Age formula)</li>
        <li><strong>Karvonen Heart Rate Reserve (HRR) Formula:</strong> <code>Target HR = Resting HR + [(HRmax - Resting HR) &times; % Intensity]</code></li>
      </ul>

      <h2>The 5 Evidence-Based Cardiovascular Training Zones</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">Zone</th>
              <th class="p-3 border border-[#e6e6e6] font-mono text-[#464feb] font-bold">Intensity (% HRR)</th>
              <th class="p-3 border border-[#e6e6e6]">Primary Energy Substrate</th>
              <th class="p-3 border border-[#e6e6e6]">Clinical Training Adaptation</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6]">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">Zone 1: Active Recovery</td>
              <td class="p-3 border border-[#e6e6e6] font-mono">50% – 60%</td>
              <td class="p-3 border border-[#e6e6e6]">Pure fatty acid oxidation</td>
              <td class="p-3 border border-[#e6e6e6]">Post-exercise lactate clearance, restorative blood flow</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-emerald-600 font-bold">Zone 2: Aerobic Base (FatMax)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono font-bold text-emerald-600">60% – 70%</td>
              <td class="p-3 border border-[#e6e6e6]">Peak fat oxidation rate (FatMax)</td>
              <td class="p-3 border border-[#e6e6e6]">Mitochondrial biogenesis, metabolic flexibility, longevity</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-blue-500 font-bold">Zone 3: Tempo / Aerobic Power</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-blue-500">70% – 80%</td>
              <td class="p-3 border border-[#e6e6e6]">Mixed carbohydrates and fats</td>
              <td class="p-3 border border-[#e6e6e6]">Aerobic endurance capacity, heart stroke volume</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-amber-600 font-bold">Zone 4: Lactate Threshold</td>
              <td class="p-3 border border-[#e6e6e6] font-mono font-bold text-amber-600">80% – 90%</td>
              <td class="p-3 border border-[#e6e6e6]">Primarily muscle glycogen</td>
              <td class="p-3 border border-[#e6e6e6]">Buffering hydrogen ions, raising anaerobic threshold</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-rose-600 font-bold">Zone 5: Neuromuscular / VO2 Max</td>
              <td class="p-3 border border-[#e6e6e6] font-mono font-bold text-rose-600">90% – 100%</td>
              <td class="p-3 border border-[#e6e6e6]">Anaerobic glycolysis &amp; phosphagen</td>
              <td class="p-3 border border-[#e6e6e6]">Maximal oxygen consumption (VO2 max), peak athletic output</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Scientific References</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Tanaka H, Monahan KD, Seals DR. <em>Age-predicted maximal heart rate revisited.</em> J Am Coll Cardiol 2001; 37(1):153-156. PMID: 11153730.</li>
        <li>Karvonen MJ, Kentala E, Mustala O. <em>The effects of training on heart rate; a longitudinal study.</em> Ann Med Exp Biol Fenn 1957; 35(3):307-315.</li>
      </ul>
`,
      "hi": `
      <h2>हृदय गति प्रशिक्षण का शरीरक्रिया विज्ञान</h2>
      <p>कार्डियोवस्कुलर व्यायाम से हृदय की मांसपेशियां मजबूत होती हैं, स्ट्रोक वॉल्यूम बढ़ता है और माइटोकॉन्ड्रिया की संख्या बढ़ती है। मनमाने ढंग से दौड़ने के बजाय अपनी हृदय गति (Heart Rate) को मापकर विशिष्ट ज़ोन में व्यायाम करना सबसे प्रभावी होता है।</p>

      <h2>हृदय गति निकालने के दो बुनियादी गणितीय सूत्र</h2>
      <ul>
        <li><strong>तनाका सूत्र (अधिकतम हृदय गति):</strong> <code>HRmax = 208 - (0.7 &times; उम्र)</code> (यह पुराने 220 - उम्र सूत्र से कहीं अधिक सटीक है)</li>
        <li><strong>कार्वोनेन हार्ट रेट रिजर्व (HRR) सूत्र:</strong> <code>टारगेट HR = रेस्टिंग HR + [(HRmax - रेस्टिंग HR) &times; % तीव्रता]</code></li>
      </ul>

      <h2>5 वैज्ञानिक एरोबिक प्रशिक्षण ज़ोन (5 Training Zones)</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">ज़ोन</th>
              <th class="p-3 border border-[#e6e6e6] font-mono text-[#464feb] font-bold">तीव्रता (% HRR)</th>
              <th class="p-3 border border-[#e6e6e6]">ऊर्जा का मुख्य स्रोत</th>
              <th class="p-3 border border-[#e6e6e6]">प्रमुख स्वास्थ्य व फिटनेस लाभ</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6]">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">ज़ोन 1: एक्टिव रिकवरी</td>
              <td class="p-3 border border-[#e6e6e6] font-mono">50% – 60%</td>
              <td class="p-3 border border-[#e6e6e6]">शुद्ध फैटी एसिड ऑक्सीकरण</td>
              <td class="p-3 border border-[#e6e6e6]">कसरत के बाद लैक्टेट हटाना और रक्त संचार बढ़ाना</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-emerald-600 font-bold">ज़ोन 2: एरोबिक बेस (FatMax)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono font-bold text-emerald-600">60% – 70%</td>
              <td class="p-3 border border-[#e6e6e6]">अधिकतम वसा दहन (फैट बर्निंग)</td>
              <td class="p-3 border border-[#e6e6e6]">माइटोकॉन्ड्रिया का विकास, इंसुलिन संवेदनशीलता व दीर्घायु</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-blue-500 font-bold">ज़ोन 3: टेम्पो पेस</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-blue-500">70% – 80%</td>
              <td class="p-3 border border-[#e6e6e6]">कार्ब्स व फैट का मिश्रित उपयोग</td>
              <td class="p-3 border border-[#e6e6e6]">धीरज (Endurance) क्षमता और हृदय का पंपिंग वॉल्यूम</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-amber-600 font-bold">ज़ोन 4: लैक्टेट थ्रेशोल्ड</td>
              <td class="p-3 border border-[#e6e6e6] font-mono font-bold text-amber-600">80% – 90%</td>
              <td class="p-3 border border-[#e6e6e6]">मुख्य रूप से मसल ग्लाइकोजन</td>
              <td class="p-3 border border-[#e6e6e6]">थकान सहने की क्षमता और तेज गति बनाए रखना</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-rose-600 font-bold">ज़ोन 5: VO2 Max (चरम तीव्रता)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono font-bold text-rose-600">90% – 100%</td>
              <td class="p-3 border border-[#e6e6e6]">एनारोबिक ऊर्जा सिस्टम</td>
              <td class="p-3 border border-[#e6e6e6]">अधिकतम ऑक्सीजन खपत (VO2 max) और एथलेटिक गति</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>वैज्ञानिक संदर्भ</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Tanaka H, et al. <em>Age-predicted maximal heart rate revisited.</em> J Am Coll Cardiol 2001; 37:153-156. PMID: 11153730.</li>
        <li>Karvonen MJ, et al. <em>The effects of training on heart rate.</em> Ann Med Exp Biol Fenn 1957; 35:307-315.</li>
      </ul>
`,
      "es": `
      <h2>Zonas de Entrenamiento por Frecuencia Cardíaca</h2>
      <p>La fórmula de Tanaka [HRmax = 208 - (0.7 &times; edad)] combinada con la fórmula de reserva de Karvonen define con exactitud las 5 zonas fisiológicas, destacando la <strong>Zona 2 (60–70% de la reserva cardíaca)</strong> para la biogénesis mitocondrial y la máxima tasa de oxidación de grasas.</p>
`,
      "fr": `
      <h2>Zones Cardiaques et Formule de Karvonen</h2>
      <p>L'utilisation de la fréquence cardiaque de réserve (Karvonen) permet de calibrer les séances : la Zone 2 développe le métabolisme lipidique de base, tandis que la Zone 4 repousse le seuil d'accumulation des lactates.</p>
`,
      "de": `
      <h2>Herzfrequenz-Trainingszonen nach Karvonen</h2>
      <p>Die Karvonen-Formel unter Berücksichtigung des Ruhepulses teilt das Ausdauertraining in 5 evidenzbasierte Zonen ein, von der aktiven Regeneration in Zone 1 bis zur VO2max-Steigerung in Zone 5.</p>
`,
      "ko": `
      <h2>Karvonen 공식을 활용한 5단계 심박수 트레이닝</h2>
      <p>안정시 심박수를 고려한 Karvonen 공식과 Tanaka 최대 심박수 공식을 통해 미토콘드리아 기능을 향상시키는 존2(지방 연소 최대 구간)부터 VO2max 구간까지 과학적인 유산소 운동 강도를 설계할 수 있습니다.</p>
`
    }
  },

  "one-rep-max-strength-guide": {
    "datePublished": "2026-10-24",
    "dateModified": "2026-10-28",
    "title": {
      "en": "One-Rep Max (1RM) Strength Guide: Brzycki, Epley & Percentage Charts",
      "hi": "वन-रेप मैक्स (1RM) स्ट्रेंथ गाइड: ब्रज़ीकी, एपले सूत्र व प्रतिशत चार्ट",
      "ko": "1RM(최대 근력) 계산 가이드: Brzycki, Epley 공식과 퍼센트 로딩 차트",
      "de": "One-Rep Max (1RM) berechnen: Brzycki, Epley & Prozent-Tabellen",
      "es": "Guía de Una Repetición Máxima (1RM): Fórmulas de Brzycki y Epley",
      "fr": "Guide du 1RM (Répétition Maximale) : Formules Brzycki et Epley"
    },
    "category": {
      "en": "Cardiovascular Physiology & Fitness",
      "hi": "हृदय-संवहनी व्यायाम शरीरक्रिया विज्ञान",
      "ko": "심폐 생리학 및 피트니스",
      "de": "Kardiovaskuläre Leistungsdiagnostik",
      "es": "Fisiología Cardiovascular y Fitness",
      "fr": "Physiologie Cardiovasculaire"
    },
    "description": {
      "en": "Clinical strength science guide to estimating your One-Rep Max (1RM). Compare the Brzycki and Epley equations, understand percentage-based loading, and lift safely.",
      "hi": "वन-रेप मैक्स (1RM) निकालने की वैज्ञानिक गाइड। ब्रज़ीकी और एपले सूत्रों की तुलना, प्रतिशत आधारित लोडिंग चार्ट और बिना चोट के अधिकतम ताकत का आकलन।",
      "ko": "최대 근력(1RM)을 부상 없이 정밀 추정하는 과학적 공식. Brzycki 및 Epley 공식의 정확도, 퍼센트 기반 중량 설정표 및 안전 수칙을 안내합니다.",
      "de": "Wissenschaftlicher Leitfaden zur 1RM-Berechnung: Brzycki und Epley Formeln im Vergleich sowie Prozenttabellen für das periodisierte Krafttraining.",
      "es": "Guía científica para calcular tu 1RM sin riesgo de lesión: comparativa de Brzycki y Epley, y tablas de porcentajes para programar la fuerza.",
      "fr": "Guide scientifique du calcul du 1RM : formules de Brzycki et Epley, et tableau des pourcentages de charge pour la musculation."
    },
    "contentHtml": {
      "en": `
      <h2>The Physiology of Maximal Neuromuscular Strength (1RM)</h2>
      <p>A One-Repetition Maximum (1RM) represents the heaviest gravitational load an athlete can lift for a single, technically complete repetition through a full range of motion. Direct 1RM testing carries substantial injury risks for connective tissue. Therefore, exercise physiologists use validated submaximal prediction formulas.</p>

      <h2>The Two Gold-Standard 1RM Formulas Compared</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">Equation</th>
              <th class="p-3 border border-[#e6e6e6] font-mono text-[#464feb] font-bold">Mathematical Formula</th>
              <th class="p-3 border border-[#e6e6e6]">Optimal Application Range</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6]">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-[#464feb]">Brzycki Formula (1993)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono font-bold text-[#464feb]">1RM = Weight / (1.0278 - 0.0278 &times; Reps)</td>
              <td class="p-3 border border-[#e6e6e6]">Highest accuracy for heavy sets between 3 and 8 repetitions</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">Epley Formula (1985)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono">1RM = Weight &times; (1 + Reps / 30)</td>
              <td class="p-3 border border-[#e6e6e6]">Widely used in powerlifting; reliable up to 10 repetitions</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Percentage-Based Training Load Chart</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm font-mono">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">Percent of 1RM</th>
              <th class="p-3 border border-[#e6e6e6]">Maximum Repetitions</th>
              <th class="p-3 border border-[#e6e6e6]">Primary Training Adaptation</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6]">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-bold text-rose-600">100%</td>
              <td class="p-3 border border-[#e6e6e6]">1 Repetition</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">Maximal neuromuscular motor unit recruitment</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-bold text-amber-600">85%</td>
              <td class="p-3 border border-[#e6e6e6]">5–6 Repetitions</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">Mechanical tension and functional strength</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-bold text-blue-500">75%</td>
              <td class="p-3 border border-[#e6e6e6]">10 Repetitions</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">Optimal muscular hypertrophy and volume</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Scientific References</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Brzycki M. <em>Strength testing—predicting a one-rep max from reps-to-fatigue.</em> JOPERD 1993; 64(1):88-90.</li>
        <li>Epley B. <em>Poundage Chart.</em> Lincoln, NE: Boyd Epley Workout, 1985.</li>
      </ul>
`,
      "hi": `
      <h2>अधिकतम न्यूरोमस्कुलर ताकत (1RM) का शरीरक्रिया विज्ञान</h2>
      <p>वन-रेप मैक्स (1RM) वह अधिकतम वजन है जिसे कोई व्यक्ति सही तकनीक और पूर्ण गति के साथ केवल एक बार उठा सकता है। सीधे तौर पर 1RM वजन उठाने की कोशिश करने से जोड़ों और टेंडन में गंभीर चोट का खतरा रहता है। इसीलिए खेल वैज्ञानिक सब-मैक्सिमल (कम वजन से अधिक रेप्स) फॉर्मूलों द्वारा 1RM का सटीक अनुमान लगाते हैं।</p>

      <h2>दो प्रमुख वैज्ञानिक 1RM सूत्र</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">सूत्र का नाम</th>
              <th class="p-3 border border-[#e6e6e6] font-mono text-[#464feb] font-bold">गणितीय समीकरण</th>
              <th class="p-3 border border-[#e6e6e6]">सर्वोत्तम उपयोगिता सीमा</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6]">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-[#464feb]">ब्रज़ीकी फॉर्मूला (Brzycki 1993)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono font-bold text-[#464feb]">1RM = वजन / (1.0278 - 0.0278 &times; रेप्स)</td>
              <td class="p-3 border border-[#e6e6e6]">3 से 8 रेप्स के भारी सेट्स में सबसे सटीक परिणाम देता है</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">एपले फॉर्मूला (Epley 1985)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono">1RM = वजन &times; (1 + रेप्स / 30)</td>
              <td class="p-3 border border-[#e6e6e6]">पावरलिफ्टिंग में लोकप्रिय; 10 रेप्स तक के सेट्स के लिए विश्वसनीय</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>प्रतिशत-आधारित ट्रेनिंग भार तालिका (Percentage Load Chart)</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm font-mono">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">1RM का प्रतिशत</th>
              <th class="p-3 border border-[#e6e6e6]">अधिकतम संभावित रेप्स</th>
              <th class="p-3 border border-[#e6e6e6]">मुख्य प्रशिक्षण अनुकूलन</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6]">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-bold text-rose-600">100%</td>
              <td class="p-3 border border-[#e6e6e6]">1 रेप</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">अधिकतम न्यूरोमस्कुलर मोटर यूनिट सक्रियण</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-bold text-amber-600">85%</td>
              <td class="p-3 border border-[#e6e6e6]">5–6 रेप्स</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">मैकेनिकल टेंशन और शुद्ध ताकत (Strength)</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-bold text-blue-500">75%</td>
              <td class="p-3 border border-[#e6e6e6]">10 रेप्स</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">मांसपेशियों के आकार में वृद्धि (हाइपरट्रॉफी)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>वैज्ञानिक संदर्भ</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Brzycki M. <em>Strength testing—predicting a one-rep max from reps-to-fatigue.</em> JOPERD 1993; 64:88-90.</li>
        <li>Epley B. <em>Poundage Chart.</em> Boyd Epley Workout 1985.</li>
      </ul>
`,
      "es": `
      <h2>Cálculo de la Repetición Máxima (1RM)</h2>
      <p>Las fórmulas de <strong>Brzycki [Peso / (1.0278 - 0.0278 &times; Repeticiones)]</strong> y <strong>Epley [Peso &times; (1 + Repeticiones / 30)]</strong> permiten calcular la fuerza máxima sin riesgo articular a partir de series submáximas de 3 a 10 repeticiones.</p>
`,
      "fr": `
      <h2>Évaluation de la Force Maximale (1RM)</h2>
      <p>Les formules de Brzycki et d'Epley permettent de déduire avec précision le 1RM théorique et de planifier les cycles de force (85% du 1RM pour la force pure, 75% pour l'hypertrophie).</p>
`,
      "de": `
      <h2>1RM-Berechnung nach Brzycki und Epley</h2>
      <p>Die Formeln von Brzycki und Epley ermöglichen die sichere Ermittlung des Maximalgewichts aus submaximalen Wiederholungen (z. B. 5 Wdh.) zur optimalen Periodisierung des Krafttrainings.</p>
`,
      "ko": `
      <h2>1RM(최대 근력) 정밀 산출 공식</h2>
      <p>Brzycki 공식과 Epley 공식은 직접적인 1RM 측정 시 발생할 수 있는 관절 부상을 방지하고, 5~10회 반복 중량을 통해 최대 근력 및 퍼센트 기반 훈련 강도(85% 근력, 75% 근비대)를 안전하게 설정하도록 돕습니다.</p>
`
    }
  }
};
