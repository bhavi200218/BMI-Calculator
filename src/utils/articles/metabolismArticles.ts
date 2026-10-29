// Module 4: Energy Expenditure & Caloric Science (4 Articles)
import type { BlogArticleData } from './types';

export const metabolismArticles: Record<string, BlogArticleData> = {
  "bmr-vs-tdee-calculator": {
    "datePublished": "2026-09-10",
    "dateModified": "2026-10-28",
    "title": {
      "en": "BMR vs TDEE: Metabolic Components & Energy Balance Guide",
      "hi": "बीएमआर बनाम टीडीईई: मेटाबॉलिज्म के घटक और ऊर्जा संतुलन",
      "ko": "BMR vs TDEE: 기초대사량과 일일 총 에너지 소비량 완벽 비교",
      "de": "BMR vs. TDEE: Grundumsatz und Gesamtenergiebedarf im Vergleich",
      "es": "TMB vs TDEE: Metabolismo Basal y Gasto Calórico Total",
      "fr": "BMR vs TDEE : Métabolisme de Base et Dépense Énergétique Totale"
    },
    "category": {
      "en": "Metabolic Science & Energy",
      "hi": "मेटाबॉलिक विज्ञान व ऊर्जा",
      "ko": "대사 과학 및 에너지",
      "de": "Stoffwechsel & Kalorienbedarf",
      "es": "Gasto Energético y Metabolismo",
      "fr": "Métabolisme et Dépense Énergétique"
    },
    "description": {
      "en": "Learn the physiological differences between Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE). Discover the 4 pillars of metabolism (BMR, NEAT, TEF, EAT) and why eating below BMR is dangerous.",
      "hi": "बेसल मेटाबॉलिक रेट (BMR) और टोटल डेली एनर्जी एक्सपेंडिचर (TDEE) में अंतर। मेटाबॉलिज्म के 4 स्तंभ और बीएमआर से कम कैलोरी खाने के खतरे।",
      "ko": "기초대사량(BMR)과 일일 총 에너지 소비량(TDEE)의 생리학적 차이. 신진대사의 4대 구성 요소(BMR, NEAT, TEF, EAT)와 BMR 이하 초저열량 식단의 위험성을 상세히 알아봅니다.",
      "de": "Verstehen Sie den Unterschied zwischen Grundumsatz (BMR) und Gesamtumsatz (TDEE), die 4 Säulen des Stoffwechsels und warum extremes Hungern schadet.",
      "es": "Diferencias clave entre la Tasa Metabólica Basal (TMB) y el Gasto Energético Total Diario (TDEE): los 4 pilares metabólicos y los riesgos de comer menos de la TMB.",
      "fr": "Comprenez la différence entre Métabolisme de Base (BMR) et Dépense Énergétique Totale (TDEE) : les 4 piliers de la dépense calorique et les dangers du sous-calorique."
    },
    "contentHtml": {
      "en": `
      <h2>The Thermodynamics of Human Metabolism: BMR vs. TDEE</h2>
      <p>In nutritional science, clinical dietetics, and athletic conditioning, formulating an effective dietary plan requires a rigorous understanding of <strong>Basal Metabolic Rate (BMR)</strong> and <strong>Total Daily Energy Expenditure (TDEE)</strong>. While both terms describe caloric burn, they represent vastly different components of human energetic expenditure. Confusing the two metrics is the primary cause of severe undereating, chronic lethargy, hormonal dysregulation, or frustrated weight loss plateaus.</p>
      <p>Simply put: <strong>BMR is the absolute minimum energy required to keep your biological cells alive in a state of complete rest</strong>, while <strong>TDEE accounts for every single calorie burned throughout your entire 24-hour day</strong>, including physical movement, digestion, and daily cognitive tasks. Below, we break down the four components of daily energy expenditure, compare the metabolic equations, and provide a clinical blueprint for energy balance.</p>

      <h2>The Four Distinct Pillars of Total Daily Energy Expenditure</h2>
      <p>Total Daily Energy Expenditure is not a monolithic number; it is the mathematical sum of four distinct physiological processes:</p>
      <div class="my-6 space-y-4">
        <div class="p-4 rounded-xl border border-[#e6e6e6] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[#464feb]">1. Basal Metabolic Rate (BMR): ~60% to 70% of TDEE</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">BMR quantifies the basal caloric cost of sustaining vegetative life over 24 hours in a thermoneutral environment. This fuels cellular ATP production, cardiac myocardial contraction, pulmonary alveolar respiration, and hepatic/renal filtration.</p>
        </div>
        <div class="p-4 rounded-xl border border-[#e6e6e6] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[#464feb]">2. Non-Exercise Activity Thermogenesis (NEAT): ~15% to 20% of TDEE</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">NEAT encompasses all spontaneous physical movement that is not structured athletic exercise: taking stairs, pacing, typing, household chores, and maintaining posture.</p>
        </div>
        <div class="p-4 rounded-xl border border-[#e6e6e6] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[#464feb]">3. Thermic Effect of Food (TEF): ~8% to 10% of TDEE</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">The metabolic cost of digesting macronutrients: protein requires 20–30% of its caloric value to process, carbohydrates 5–10%, and dietary fats 0–3%.</p>
        </div>
        <div class="p-4 rounded-xl border border-[#e6e6e6] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[#464feb]">4. Exercise Activity Thermogenesis (EAT): ~5% to 15% of TDEE</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">Calories burned during intentional cardiovascular conditioning, resistance training, or competitive sports.</p>
        </div>
      </div>

      <h2>BMR vs. TDEE: Side-by-Side Comparison</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">Characteristic</th>
              <th class="p-3 border border-[#e6e6e6] text-blue-500 font-bold">Basal Metabolic Rate (BMR)</th>
              <th class="p-3 border border-[#e6e6e6] text-emerald-600 font-bold">Total Daily Energy Expenditure (TDEE)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6]">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">Physiological Scope</td>
              <td class="p-3 border border-[#e6e6e6]">Cellular survival and autonomic organ function at complete rest</td>
              <td class="p-3 border border-[#e6e6e6]">Complete 24-hour total energy cost (BMR + NEAT + TEF + EAT)</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">Typical Adult Range</td>
              <td class="p-3 border border-[#e6e6e6] font-mono">1,300 – 1,900 kcal/day</td>
              <td class="p-3 border border-[#e6e6e6] font-mono">1,800 – 3,200 kcal/day</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">Role in Calorie Planning</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-500 font-bold">Floor Threshold: Never consume below BMR long-term</td>
              <td class="p-3 border border-[#e6e6e6] text-emerald-600 font-bold">Baseline Anchor: Deficit or surplus is calculated from TDEE</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>The Dangerous Mistake: Eating Below Your BMR</h2>
      <p>When chronic energy intake falls below basal survival requirements (e.g., a 1,000 kcal crash diet for someone with a 1,500 kcal BMR), the body initiates <strong>adaptive thermogenesis</strong>: thyroid hormone T3 drops, leptin collapses while ghrelin surges, spontaneous NEAT drops by up to 500 kcal/day, and muscle tissue is catabolized to provide glucose.</p>

      <h2>Scientific References</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Mifflin MD, St Jeor ST, et al. <em>A new predictive equation for resting energy expenditure in healthy individuals.</em> Am J Clin Nutr 1990; 51(2):241-247. PMID: 2305711.</li>
        <li>Levine JA. <em>Non-exercise activity thermogenesis (NEAT).</em> Best Pract Res Clin Endocrinol Metab 2002; 16(4):679-702. PMID: 12468415.</li>
      </ul>
`,
      "hi": `
      <h2>मानव चयापचय (मेटाबॉलिज्म) के दो मूल आधार: BMR बनाम TDEE</h2>
      <p>वजन कम करने या स्वस्थ जीवनशैली अपनाने के लिए <strong>बेसल मेटाबॉलिक रेट (BMR)</strong> और <strong>टोटल डेली एनर्जी एक्सपेंडिचर (TDEE)</strong> के बीच के अंतर को समझना सबसे महत्वपूर्ण है। अक्सर लोग इन दोनों को एक ही समझ लेते हैं, जिसके कारण वे बहुत कम खाना खाने लगते हैं और उनका मेटाबॉलिज्म क्रैश हो जाता है।</p>
      <p>सीधे शब्दों में कहें तो: <strong>BMR वह न्यूनतम ऊर्जा (कैलोरी) है जो आपके शरीर को जीवित रखने, सांस लेने, दिल धड़कने और अंगों को काम करने के लिए बिस्तर पर पूरी तरह आराम की स्थिति में चाहिए।</strong> जबकि <strong>TDEE पूरे 24 घंटे में आपके चलने-फिरने, काम करने, भोजन पचाने और व्यायाम सहित खर्च होने वाली कुल वास्तविक कैलोरी है।</strong></p>

      <h2>दैनिक ऊर्जा व्यय के चार मुख्य स्तंभ (4 Pillars of TDEE)</h2>
      <div class="my-6 space-y-4">
        <div class="p-4 rounded-xl border border-[#e6e6e6] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[#464feb]">1. बेसल मेटाबॉलिक रेट (BMR) - कुल ऊर्जा का 60% से 70%</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">यह शरीर की बुनियादी जैविक क्रियाओं (मस्तिष्क, हृदय, फेफड़े, यकृत और गुर्दे) को 24 घंटे चालू रखने की लागत है। मस्तिष्क और यकृत कुल बीएमआर का लगभग 40% अकेले उपभोग करते हैं।</p>
        </div>
        <div class="p-4 rounded-xl border border-[#e6e6e6] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[#464feb]">2. नॉन-एक्सरसाइज एक्टिविटी थर्मोजेनेसिस (NEAT) - कुल ऊर्जा का 15% से 20%</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">इसमें वह सभी शारीरिक गतिविधियां शामिल हैं जो औपचारिक व्यायाम नहीं हैं: जैसे सीढ़ियां चढ़ना, खड़े रहना, घर के काम करना, टाइपिंग करना और चलते-फिरते रहना। गतिहीन और सक्रिय व्यक्ति के बीच NEAT में 800 कैलोरी तक का अंतर हो सकता है।</p>
        </div>
        <div class="p-4 rounded-xl border border-[#e6e6e6] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[#464feb]">3. भोजन का थर्मिक प्रभाव (TEF) - कुल ऊर्जा का 8% से 10%</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">खाए गए भोजन को पचाने और अवशोषित करने में खर्च होने वाली कैलोरी। <strong>प्रोटीन पचाने में उसकी कुल ऊर्जा का 20% से 30% हिस्सा खर्च होता है</strong>, जबकि कार्ब्स में केवल 5-10% और वसा में 0-3%।</p>
        </div>
        <div class="p-4 rounded-xl border border-[#e6e6e6] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[#464feb]">4. व्यायाम थर्मोजेनेसिस (EAT) - कुल ऊर्जा का 5% से 15%</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">जिम में कसरत, दौड़ना या खेलकूद के दौरान खर्च होने वाली कैलोरी। आम लोगों में पूरे दिन की कुल कैलोरी में व्यायाम का हिस्सा आश्चर्यजनक रूप से कम (10% के आसपास) होता है।</p>
        </div>
      </div>

      <h2>तुलनात्मक विश्लेषण: BMR बनाम TDEE</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">मापदंड</th>
              <th class="p-3 border border-[#e6e6e6] text-blue-500 font-bold">बेसल मेटाबॉलिक रेट (BMR)</th>
              <th class="p-3 border border-[#e6e6e6] text-emerald-600 font-bold">टोटल डेली एनर्जी एक्सपेंडिचर (TDEE)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6]">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">शारीरिक परिभाषा</td>
              <td class="p-3 border border-[#e6e6e6]">बिना हिले-डुले कोशिकाओं व आंतरिक अंगों को जीवित रखने की न्यूनतम ऊर्जा</td>
              <td class="p-3 border border-[#e6e6e6]">पूरे दिन की वास्तविक कुल जलाई गई कैलोरी (BMR + NEAT + TEF + EAT)</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">वयस्कों में सामान्य सीमा</td>
              <td class="p-3 border border-[#e6e6e6] font-mono">1,300 – 1,800 kcal/दिन</td>
              <td class="p-3 border border-[#e6e6e6] font-mono">1,800 – 3,000 kcal/दिन</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">डाइट प्लानिंग में भूमिका</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-500 font-bold">न्यूनतम सीमा: लंबे समय तक BMR से कम कभी न खाएं</td>
              <td class="p-3 border border-[#e6e6e6] text-emerald-600 font-bold">कैलोरी डेफिसिट की आधार रेखा (TDEE से 300-500 कम खाएं)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>BMR से कम कैलोरी खाने का गंभीर खतरा (मेटाबॉलिक स्लोडाउन)</h2>
      <p>जब कोई व्यक्ति अत्यधिक कम कैलोरी वाली क्रैश डाइट (जैसे 1000 या 1200 कैलोरी) शुरू करता है, तो शरीर भुखमरी की स्थिति मानकर <strong>एडाप्टिव थर्मोजेनेसिस</strong> शुरू कर देता है:</p>
      <ul>
        <li><strong>थायराइड हार्मोन में गिरावट:</strong> सक्रिय T3 हार्मोन का स्तर तेजी से गिरता है, जिससे शरीर आराम की स्थिति में कैलोरी जलाना बहुत कम कर देता है।</li>
        <li><strong>मांसपेशियों का टूटना:</strong> शरीर ऊर्जा के लिए अपनी ही मांसपेशियों को घोलने लगता है, जिससे स्थायी रूप से मेटाबॉलिज्म धीमा हो जाता है।</li>
        <li><strong>थकान व सुस्ती:</strong> मस्तिष्क अनजाने में NEAT को बंद कर देता है, जिससे व्यक्ति दिनभर आलसी और ठंडा महसूस करता है।</li>
      </ul>

      <h2>वैज्ञानिक संदर्भ</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Mifflin MD, St Jeor ST, et al. <em>A new predictive equation for resting energy expenditure in healthy individuals.</em> Am J Clin Nutr 1990; 51(2):241-247. PMID: 2305711.</li>
        <li>Levine JA. <em>Non-exercise activity thermogenesis (NEAT).</em> Best Pract Res Clin Endocrinol Metab 2002; 16:679-702. PMID: 12468415.</li>
      </ul>
`,
      "es": `
      <h2>Diferencias Clave entre la TMB y el Gasto Calórico Total (TDEE)</h2>
      <p>La <strong>Tasa Metabólica Basal (TMB)</strong> representa la energía mínima vital para mantener los órganos en reposo absoluto (60–70% del gasto total). El <strong>Gasto Energético Total Diario (TDEE)</strong> suma la TMB más la termogénesis de la actividad no deportiva (NEAT), el efecto térmico de los alimentos (TEF) y el ejercicio (EAT).</p>
      <p><strong>Regla clínica fundamental:</strong> El déficit calórico para perder peso debe calcularse restando 300 a 500 kcal del TDEE, nunca comiendo por debajo de la TMB, lo que desencadenaría adaptación metabólica y pérdida muscular.</p>
`,
      "fr": `
      <h2>Comprendre le Métabolisme de Base (BMR) et la Dépense Totale (TDEE)</h2>
      <p>Le <strong>BMR</strong> correspond à l'énergie minimale requise pour assurer les fonctions végétatives vitales (respiration, circulation, filtration rénale). Le <strong>TDEE</strong> représente la dépense énergétique globale sur 24 heures en intégrant l'activité spontanée (NEAT), la digestion (TEF) et le sport (EAT).</p>
`,
      "de": `
      <h2>Grundumsatz (BMR) vs. Gesamtumsatz (TDEE)</h2>
      <p>Der Grundumsatz (BMR) sichert das reine Überleben im Ruhezustand. Der Gesamtenergiebedarf (TDEE) umfasst alle täglichen Bewegungen. Ein gesundes Kaloriendefizit wird immer vom TDEE abgezogen und darf den Grundumsatz nicht langfristig unterschreiten.</p>
`,
      "ko": `
      <h2>기초대사량(BMR)과 일일 총 에너지 소비량(TDEE)</h2>
      <p>BMR은 생명 유지를 위한 최소 에너지(심장 박동, 세포 대사)이며, TDEE는 활동량과 소화 대사량을 합산한 실제 24시간 에너지 소비량입니다. 건강한 체중 감량을 위해서는 TDEE에서 300~500kcal를 제한하되 BMR 이하로 섭취하지 않아야 요요 현상을 방지할 수 있습니다.</p>
`
    }
  },

  "how-to-calculate-tdee": {
    "datePublished": "2026-09-20",
    "dateModified": "2026-10-28",
    "title": {
      "en": "How to Calculate TDEE: Step-by-Step Multipliers & Calorie Deficit",
      "hi": "TDEE कैसे निकालें? चरणबद्ध गतिविधि गुणक व सही कैलोरी डेफिसिट",
      "ko": "TDEE(일일 총 에너지 소비량) 계산법: 활동 계수 적용 및 칼로리 설정 가이드",
      "de": "TDEE berechnen: Schritt-für-Schritt-Anleitung mit Aktivitätsfaktoren",
      "es": "Cómo Calcular el TDEE: Factores de Actividad y Déficit Calórico",
      "fr": "Comment Calculer son TDEE : Facteurs d'Activité et Déficit Calorique"
    },
    "category": {
      "en": "Metabolic Science & Energy",
      "hi": "मेटाबॉलिक विज्ञान व ऊर्जा",
      "ko": "대사 과학 및 에너지",
      "de": "Stoffwechsel & Kalorienbedarf",
      "es": "Gasto Energético y Metabolismo",
      "fr": "Métabolisme et Dépense Énergétique"
    },
    "description": {
      "en": "Step-by-step evidence-based methodology for calculating Total Daily Energy Expenditure (TDEE). Learn physical activity level (PAL) multipliers, worked mathematical examples, and how to dial in calories.",
      "hi": "टोटल डेली एनर्जी एक्सपेंडिचर (TDEE) निकालने की वैज्ञानिक विधि। शारीरिक गतिविधि गुणक (PAL), गणितीय उदाहरण और वजन घटाने के लिए सटीक कैलोरी लक्ष्य।",
      "ko": "일일 총 에너지 소비량(TDEE)을 산출하는 표준 공식. 신체 활동 수준(PAL) 계수 선택법, 계산 예제 및 안전한 칼로리 설정법을 확인하세요.",
      "de": "Schritt-für-Schritt-Anleitung zur Berechnung des Gesamtumsatzes (TDEE) mittels PAL-Faktoren und präziser Kalorienbedarfsplanung.",
      "es": "Guía práctica para calcular el Gasto Energético Total Diario (TDEE) usando factores de actividad física (PAL) y ejemplos paso a paso.",
      "fr": "Méthode pas à pas pour calculer votre dépense calorique journalière (TDEE) grâce aux coefficients d'activité physique (PAL)."
    },
    "contentHtml": {
      "en": `
      <h2>Mathematical Framework for Calculating TDEE</h2>
      <p>Calculating Total Daily Energy Expenditure (TDEE) begins with determining Basal Metabolic Rate using the validated <strong>Mifflin-St Jeor equation</strong>, followed by applying an empirical <strong>Physical Activity Level (PAL) multiplier</strong> established by the Food and Agriculture Organization (FAO) and World Health Organization (WHO):</p>
      <div class="my-4 p-4 rounded-xl border border-[#e6e6e6] bg-[var(--card)] font-mono text-sm">
        <code>TDEE = Basal Metabolic Rate (BMR) &times; Physical Activity Level (PAL)</code>
      </div>

      <h2>Standard FAO/WHO Physical Activity Level Multipliers</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">Activity Level</th>
              <th class="p-3 border border-[#e6e6e6] font-mono text-blue-500">PAL Multiplier</th>
              <th class="p-3 border border-[#e6e6e6]">Lifestyle & Activity Description</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6]">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">Sedentary</td>
              <td class="p-3 border border-[#e6e6e6] font-mono font-bold text-[#464feb]">1.20</td>
              <td class="p-3 border border-[#e6e6e6]">Desk job, under 5,000 steps/day, zero structured workouts</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">Lightly Active</td>
              <td class="p-3 border border-[#e6e6e6] font-mono font-bold text-[#464feb]">1.375</td>
              <td class="p-3 border border-[#e6e6e6]">Light walking, 5,000–8,000 steps/day, 1–3 light workout sessions/week</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">Moderately Active</td>
              <td class="p-3 border border-[#e6e6e6] font-mono font-bold text-[#464feb]">1.55</td>
              <td class="p-3 border border-[#e6e6e6]">8,000–12,000 steps/day, 3–5 moderate-to-vigorous training sessions/week</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">Very Active</td>
              <td class="p-3 border border-[#e6e6e6] font-mono font-bold text-[#464feb]">1.725</td>
              <td class="p-3 border border-[#e6e6e6]">Physical occupation or 6–7 intense training sessions weekly</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">Extremely Active</td>
              <td class="p-3 border border-[#e6e6e6] font-mono font-bold text-[#464feb]">1.90</td>
              <td class="p-3 border border-[#e6e6e6]">Competitive endurance athletes, double training sessions daily</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Step-by-Step Calculation Example</h2>
      <p>Consider a 30-year-old male weighing 80 kg, height 180 cm, who works an office desk job but lifts weights 4 times per week (Moderately Active, PAL = 1.55):</p>
      <ul>
        <li><strong>Step 1 (Calculate BMR):</strong> <code>(10 &times; 80) + (6.25 &times; 180) - (5 &times; 30) + 5 = 800 + 1125 - 150 + 5 = 1,780 kcal/day</code></li>
        <li><strong>Step 2 (Apply PAL):</strong> <code>1,780 &times; 1.55 = 2,759 kcal/day (TDEE)</code></li>
        <li><strong>Step 3 (Set Calorie Deficit):</strong> For steady fat loss of ~0.5 kg/week, subtract 500 kcal: <code>2,759 - 500 = 2,259 kcal/day</code></li>
      </ul>

      <h2>Scientific References</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Mifflin MD, St Jeor ST, et al. <em>A new predictive equation for resting energy expenditure.</em> Am J Clin Nutr 1990; 51(2):241-247.</li>
        <li>FAO/WHO/UNU. <em>Human energy requirements: Report of a Joint Expert Consultation.</em> Rome: FAO Food and Nutrition Technical Report Series 2004; 1.</li>
      </ul>
`,
      "hi": `
      <h2>TDEE निकालने का गणितीय व वैज्ञानिक ढांचा</h2>
      <p>टोटल डेली एनर्जी एक्सपेंडिचर (TDEE) निकालने के लिए सबसे पहले <strong>मिफलिन-सेंट जियोर (Mifflin-St Jeor) फॉर्मूले</strong> से BMR निकाला जाता है, और फिर उसमें आपकी जीवनशैली के अनुसार विश्व स्वास्थ्य संगठन (WHO) द्वारा निर्धारित <strong>शारीरिक गतिविधि स्तर (PAL Multiplier)</strong> से गुणा किया जाता है:</p>
      <div class="my-4 p-4 rounded-xl border border-[#e6e6e6] bg-[var(--card)] font-mono text-sm">
        <code>TDEE = बेसल मेटाबॉलिक रेट (BMR) &times; शारीरिक गतिविधि स्तर (PAL)</code>
      </div>

      <h2>मानक WHO गतिविधि स्तर गुणक (PAL Multipliers)</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">गतिविधि स्तर</th>
              <th class="p-3 border border-[#e6e6e6] font-mono text-blue-500">गुणक (PAL)</th>
              <th class="p-3 border border-[#e6e6e6]">दैनिक जीवनशैली का विवरण</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6]">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">गतिहीन (Sedentary)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono font-bold text-[#464feb]">1.20</td>
              <td class="p-3 border border-[#e6e6e6]">डेस्क जॉब, दिन में 5,000 से कम कदम, कोई व्यायाम नहीं</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">हल्का सक्रिय (Lightly Active)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono font-bold text-[#464feb]">1.375</td>
              <td class="p-3 border border-[#e6e6e6]">दैनिक 5,000–8,000 कदम, सप्ताह में 1–3 दिन हल्का व्यायाम</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">मध्यम सक्रिय (Moderately Active)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono font-bold text-[#464feb]">1.55</td>
              <td class="p-3 border border-[#e6e6e6]">दैनिक 8,000–12,000 कदम, सप्ताह में 3–5 दिन जिम या कसरत</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">अति सक्रिय (Very Active)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono font-bold text-[#464feb]">1.725</td>
              <td class="p-3 border border-[#e6e6e6]">शारीरिक मेहनत का काम या सप्ताह में 6-7 दिन कठिन वर्कआउट</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">अत्यधिक सक्रिय (Extremely Active)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono font-bold text-[#464feb]">1.90</td>
              <td class="p-3 border border-[#e6e6e6]">पेशेवर एथलीट, दिन में दो बार गहन प्रशिक्षण</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>चरणबद्ध गणना का व्यावहारिक उदाहरण</h2>
      <p>मान लीजिए 30 वर्षीय पुरुष का वजन 80 किग्रा, कद 180 सेमी है, और वह सप्ताह में 4 दिन कसरत करता है (मध्यम सक्रिय, PAL = 1.55):</p>
      <ul>
        <li><strong>चरण 1 (BMR निकालें):</strong> <code>(10 &times; 80) + (6.25 &times; 180) - (5 &times; 30) + 5 = 1,780 kcal/दिन</code></li>
        <li><strong>चरण 2 (TDEE निकालें):</strong> <code>1,780 &times; 1.55 = 2,759 kcal/दिन</code> (यह वजन बनाए रखने की कैलोरी है)</li>
        <li><strong>चरण 3 (वजन घटाने का लक्ष्य):</strong> सुरक्षित रूप से प्रति सप्ताह 500 ग्राम वजन घटाने के लिए TDEE में से 500 कैलोरी घटाएं: <code>2,759 - 500 = 2,259 kcal/दिन</code></li>
      </ul>

      <h2>वैज्ञानिक संदर्भ</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Mifflin MD, St Jeor ST, et al. <em>A new predictive equation for resting energy expenditure.</em> Am J Clin Nutr 1990; 51(2):241-247. PMID: 2305711.</li>
        <li>FAO/WHO/UNU. <em>Human energy requirements.</em> Food and Nutrition Technical Report Series 2004; 1.</li>
      </ul>
`,
      "es": `
      <h2>Cómo Calcular el TDEE Paso a Paso</h2>
      <p>El cálculo combina la TMB con los factores de actividad de la FAO/OMS: Sedentario (1.20), Ligero (1.375), Moderado (1.55), Muy activo (1.725) y Extremo (1.90). Para perder grasa de forma sostenible, se resta un déficit moderado de 500 kcal al TDEE resultante.</p>
`,
      "fr": `
      <h2>Méthode de Calcul du TDEE</h2>
      <p>Le TDEE s'obtient en multipliant le BMR par le coefficient d'activité physique (PAL : 1,20 pour la sédentarité à 1,90 pour le sport intensif). Un déficit de 500 kcal/jour permet une perte de graisse saine d'environ 0,5 kg par semaine.</p>
`,
      "de": `
      <h2>Schritt-für-Schritt-Berechnung des Gesamtumsatzes (TDEE)</h2>
      <p>Grundumsatz multipliziert mit dem PAL-Faktor (1,2 bis 1,9). Ein moderates Defizit von 500 kcal pro Tag sichert einen stetigen Fettabbau ohne Muskelverlust.</p>
`,
      "ko": `
      <h2>TDEE 계산 공식 및 활동 계수 가이드</h2>
      <p>기초대사량(BMR)에 FAO/WHO 활동 계수(좌식 1.20 ~ 격렬한 운동 1.90)를 곱하여 TDEE를 도출합니다. 건강한 감량을 위해 TDEE에서 500kcal를 감량한 식단을 구성하는 것이 이상적입니다.</p>
`
    }
  },

  "bmr-formulas-mifflin-vs-harris-benedict": {
    "datePublished": "2026-10-01",
    "dateModified": "2026-10-28",
    "title": {
      "en": "BMR Formulas Compared: Mifflin-St Jeor vs. Harris-Benedict & Katch-McArdle",
      "hi": "BMR फॉर्मूलों की तुलना: मिफलिन-सेंट जियोर बनाम हैरिस-बेनेडिक्ट व कैच-मैकआर्डल",
      "ko": "BMR 공식 완벽 비교: Mifflin-St Jeor vs Harris-Benedict 및 Katch-McArdle",
      "de": "BMR-Formeln im Vergleich: Mifflin-St Jeor, Harris-Benedict & Katch-McArdle",
      "es": "Fórmulas de TMB Comparadas: Mifflin-St Jeor vs Harris-Benedict",
      "fr": "Formules du BMR Comparées : Mifflin-St Jeor vs Harris-Benedict"
    },
    "category": {
      "en": "Metabolic Science & Energy",
      "hi": "मेटाबॉलिक विज्ञान व ऊर्जा",
      "ko": "대사 과학 및 에너지",
      "de": "Stoffwechsel & Kalorienbedarf",
      "es": "Gasto Energético y Metabolismo",
      "fr": "Métabolisme et Dépense Énergétique"
    },
    "description": {
      "en": "Research comparison of predictive resting metabolic equations: Mifflin-St Jeor (1990), original Harris-Benedict (1919), revised Roza-Shizgal (1984), and Katch-McArdle.",
      "hi": "बीएमआर फॉर्मूलों का वैज्ञानिक विश्लेषण। जानें कि अमेरिकन डायटेटिक एसोसिएशन मिफलिन-सेंट जियोर समीकरण को सबसे सटीक स्वर्ण मानक क्यों मानती है।",
      "ko": "현대 영양학의 표준 BMR 공식 비교. Mifflin-St Jeor(1990), Harris-Benedict(1919/1984 개정), Katch-McArdle 공식의 정확도와 차이점을 분석합니다.",
      "de": "Wissenschaftlicher Vergleich der Grundumsatzformeln: Warum Mifflin-St Jeor heute der anerkannte Goldstandard gegenüber Harris-Benedict ist.",
      "es": "Comparativa de fórmulas de metabolismo basal: por qué Mifflin-St Jeor supera a Harris-Benedict según la Asociación Americana de Dietética.",
      "fr": "Comparatif des formules de métabolisme basal : pourquoi Mifflin-St Jeor surpasse Harris-Benedict dans la recherche moderne."
    },
    "contentHtml": {
      "en": `
      <h2>The Evolution of Predictive Metabolic Equations</h2>
      <p>Estimating Resting Energy Expenditure (REE / BMR) is essential for nutrition planning and energy balance. Direct and indirect calorimetry represent the physical laboratory standards, but require expensive metabolic carts. For non-laboratory settings, researchers rely on validated regression formulas:</p>

      <h2>The Major BMR Predictive Equations Compared</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">Equation</th>
              <th class="p-3 border border-[#e6e6e6] text-blue-500 font-bold">Men Formula</th>
              <th class="p-3 border border-[#e6e6e6] text-rose-500 font-bold">Women Formula</th>
              <th class="p-3 border border-[#e6e6e6]">Research Validation</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6] font-mono text-xs">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold text-[#464feb]">Mifflin-St Jeor (1990)</td>
              <td class="p-3 border border-[#e6e6e6] text-blue-500">10 &times; W + 6.25 &times; H - 5 &times; A + 5</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-500">10 &times; W + 6.25 &times; H - 5 &times; A - 161</td>
              <td class="p-3 border border-[#e6e6e6] font-sans font-bold text-emerald-600">Gold Standard (ADA recommended, &plusmn;10% accuracy for 82% of adults)</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold">Harris-Benedict (Revised 1984)</td>
              <td class="p-3 border border-[#e6e6e6] text-blue-500">88.362 + 13.397W + 4.799H - 5.677A</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-500">447.593 + 9.247W + 3.098H - 4.330A</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">Historically common; overestimates BMR by ~5% in modern sedentary populations</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold text-[#464feb]">Katch-McArdle (1977)</td>
              <td class="p-3 border border-[#e6e6e6] colspan-2 text-[#464feb]">370 + 21.6 &times; Lean Body Mass (kg)</td>
              <td class="p-3 border border-[#e6e6e6] text-[#464feb]">370 + 21.6 &times; Lean Body Mass (kg)</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">Best for muscular athletes where body fat % is precisely known</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Why Mifflin-St Jeor is the Universal Modern Standard</h2>
      <p>A comprehensive systematic review by the <strong>Academy of Nutrition and Dietetics (ADA)</strong> evaluated all published predictive equations against indirect calorimetry. The panel concluded that the <strong>Mifflin-St Jeor formula is the most reliable equation</strong>, yielding the narrowest error range across both normal-weight and obese individuals.</p>

      <h2>Scientific References</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Mifflin MD, St Jeor ST, et al. <em>A new predictive equation for resting energy expenditure.</em> Am J Clin Nutr 1990; 51(2):241-247. PMID: 2305711.</li>
        <li>Frankenfield D, Roth-Yousey L, Compher C. <em>Comparison of predictive equations for resting metabolic rate in healthy nonobese and obese adults.</em> J Am Diet Assoc 2005; 105(5):775-789. PMID: 15883556.</li>
      </ul>
`,
      "hi": `
      <h2>बीएमआर फॉर्मूलों का विकास और वैज्ञानिक तुलना</h2>
      <p>बिना लैब उपकरणों के किसी व्यक्ति का बेसल मेटाबॉलिक रेट (BMR) निकालने के लिए पोषण विज्ञान में कई गणितीय सूत्रों का विकास हुआ है। इनमें सबसे प्रमुख <strong>मिफलिन-सेंट जियोर (Mifflin-St Jeor)</strong>, <strong>हैरिस-बेनेडिक्ट (Harris-Benedict)</strong> और <strong>कैच-मैकआर्डल (Katch-McArdle)</strong> हैं।</p>

      <h2>तीन प्रमुख बीएमआर सूत्रों का तुलनात्मक विश्लेषण</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">सूत्र का नाम</th>
              <th class="p-3 border border-[#e6e6e6] text-blue-500 font-bold">पुरुष समीकरण</th>
              <th class="p-3 border border-[#e6e6e6] text-rose-500 font-bold">महिला समीकरण</th>
              <th class="p-3 border border-[#e6e6e6]">वैज्ञानिक प्रमाण</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6] font-mono text-xs">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold text-[#464feb]">मिफलिन-सेंट जियोर (1990)</td>
              <td class="p-3 border border-[#e6e6e6] text-blue-500">10W + 6.25H - 5A + 5</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-500">10W + 6.25H - 5A - 161</td>
              <td class="p-3 border border-[#e6e6e6] font-sans font-bold text-emerald-600">स्वर्ण मानक (82% वयस्कों में &plusmn;10% सटीक, ADA द्वारा स्वीकृत)</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold">हैरिस-बेनेडिक्ट (संशोधित 1984)</td>
              <td class="p-3 border border-[#e6e6e6] text-blue-500">88.36 + 13.4W + 4.8H - 5.68A</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-500">447.6 + 9.25W + 3.1H - 4.33A</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">ऐतिहासिक रूप से लोकप्रिय; आधुनिक जीवनशैली में 5% अधिक आंकता है</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold text-[#464feb]">कैच-मैकआर्डल (1977)</td>
              <td class="p-3 border border-[#e6e6e6] text-[#464feb]">370 + (21.6 &times; लीन मास kg)</td>
              <td class="p-3 border border-[#e6e6e6] text-[#464feb]">370 + (21.6 &times; लीन मास kg)</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">एथलीटों व बॉडीबिल्डर्स के लिए सबसे सटीक जहां बॉडी फैट ज्ञात हो</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>अमेरिकन डायटेटिक एसोसिएशन (ADA) का फैसला</h2>
      <p>हजारों वयस्कों पर किए गए गहन शोध में यह पाया गया कि 1919 का पुराना हैरिस-बेनेडिक्ट सूत्र आज के लोगों की कैलोरी आवश्यकता को 5% से 10% तक बढ़ा-चढ़ाकर पेश करता है। <strong>अमेरिकन डायटेटिक एसोसिएशन ने मिफलिन-सेंट जियोर समीकरण को सबसे सटीक और विश्वसनीय सूत्र घोषित किया है।</strong></p>

      <h2>वैज्ञानिक संदर्भ</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Mifflin MD, St Jeor ST, et al. <em>A new predictive equation for resting energy expenditure.</em> Am J Clin Nutr 1990; 51(2):241-247. PMID: 2305711.</li>
        <li>Frankenfield D, et al. <em>Comparison of predictive equations for resting metabolic rate.</em> J Am Diet Assoc 2005; 105:775-789. PMID: 15883556.</li>
      </ul>
`,
      "es": `
      <h2>Comparativa de Fórmulas de Tasa Metabólica Basal</h2>
      <p>La <strong>ecuación de Mifflin-St Jeor (1990)</strong> es reconocida unánimemente por la Asociación Americana de Dietética como la más exacta, superando a la histórica <strong>Harris-Benedict (1919)</strong> que sobrestima las calorías en personas sedentarias. Para deportistas musculados, <strong>Katch-McArdle</strong> ofrece la máxima precisión basada en la masa magra.</p>
`,
      "fr": `
      <h2>Comparatif des Équations du Métabolisme de Base</h2>
      <p>L'équation de <strong>Mifflin-St Jeor</strong> s'est imposée comme le standard international moderne avec une marge d'erreur inférieure à 10% chez 82% des sujets. La formule de Katch-McArdle reste idéale pour les profils athlétiques dont la composition corporelle est connue.</p>
`,
      "de": `
      <h2>Vergleich der BMR-Gleichungen</h2>
      <p>Mifflin-St Jeor ist die modernste und am besten validierte Formel für den Grundumsatz, da sie gegenüber der alten Harris-Benedict-Formel Überbewertungen bei modernen Bürotätigkeiten vermeidet.</p>
`,
      "ko": `
      <h2>BMR 예측 공식 비교 분석</h2>
      <p>미국영양사협회(ADA)의 임상 검증에 따라 <strong>Mifflin-St Jeor 공식</strong>이 현대인에게 가장 정확한 표준 공식으로 채택되었습니다. 제지방량을 정확히 아는 운동선수에게는 Katch-McArdle 공식이 가장 이상적입니다.</p>
`
    }
  },

  "healthy-calorie-deficit-guide": {
    "datePublished": "2026-10-10",
    "dateModified": "2026-10-28",
    "title": {
      "en": "Healthy Calorie Deficit Guide: Science, Rates & Preventing Burnout",
      "hi": "स्वस्थ कैलोरी डेफिसिट गाइड: सुरक्षित दर, प्रोटीन व मेटाबॉलिज्म की सुरक्षा",
      "ko": "건강한 칼로리 적자 가이드: 안전한 감량 속도, 단백질 섭취 및 대사 적응 예방",
      "de": "Gesundes Kaloriendefizit: Wissenschaft, optimale Raten & Burnout-Prävention",
      "es": "Guía del Déficit Calórico Saludable: Ritmo Óptimo y Preservación Muscular",
      "fr": "Guide du Déficit Calorique Sain : Rythme Idéal et Maintien Musculaire"
    },
    "category": {
      "en": "Metabolic Science & Energy",
      "hi": "मेटाबॉलिक विज्ञान व ऊर्जा",
      "ko": "대사 과학 및 에너지",
      "de": "Stoffwechsel & Kalorienbedarf",
      "es": "Gasto Energético y Metabolismo",
      "fr": "Métabolisme et Dépense Énergétique"
    },
    "description": {
      "en": "Evidence-based guide to setting a sustainable calorie deficit. Understand the Kevin Hall NIH dynamic metabolic model, optimal rates of loss (0.5–1.0% body weight/week), and protein targets.",
      "hi": "साक्ष्य-आधारित कैलोरी डेफिसिट गाइड। केविन हॉल का एनआईएच डायनेमिक मॉडल, सुरक्षित वजन घटाने की दर (0.5-1.0% प्रति सप्ताह) और मेटाबॉलिज्म की सुरक्षा।",
      "ko": "지속 가능한 칼로리 적자 설정법. NIH Kevin Hall 박사의 동적 대사 모델, 주당 적정 감량률(체중의 0.5~1.0%) 및 근육 보존 단백질 섭취법을 안내합니다.",
      "de": "Evidenzbasierter Leitfaden für ein nachhaltiges Kaloriendefizit nach dem dynamischen Kevin-Hall-Modell der NIH: Fettabbau ohne Muskelverlust.",
      "es": "Guía basada en evidencia para establecer un déficit calórico sostenible: el modelo dinámico del NIH, pérdida semanal del 0.5–1% y requerimientos proteicos.",
      "fr": "Guide scientifique pour un déficit calorique durable : modèle métabolique dynamique du NIH, rythme de perte sécurisé et apports protéiques optimaux."
    },
    "contentHtml": {
      "en": `
      <h2>The Physiology of a Sustainable Calorie Deficit</h2>
      <p>Fat loss requires energy balance deficit, but aggressive caloric restriction triggers catastrophic metabolic adaptation. Modern clinical research by Dr. Kevin Hall at the <strong>National Institutes of Health (NIH)</strong> disproved the simplistic 3,500 kcal rule (Wishnofsky 1958), proving that human metabolism dynamically adapts as weight drops.</p>

      <h2>Optimal Deficit Tiers for Fat Loss</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">Deficit Tier</th>
              <th class="p-3 border border-[#e6e6e6] text-blue-500 font-bold">Daily Deficit below TDEE</th>
              <th class="p-3 border border-[#e6e6e6]">Weekly Fat Loss Rate</th>
              <th class="p-3 border border-[#e6e6e6]">Muscle Retention Probability</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6]">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-emerald-600 font-bold">Conservative (Recommended)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-[#464feb]">300 – 400 kcal/day</td>
              <td class="p-3 border border-[#e6e6e6]">~0.3 – 0.4 kg/week (0.4% body weight)</td>
              <td class="p-3 border border-[#e6e6e6] text-emerald-600 font-bold">&gt; 95% lean mass preserved</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-blue-500 font-bold">Moderate Standard</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-[#464feb]">500 – 600 kcal/day</td>
              <td class="p-3 border border-[#e6e6e6]">~0.5 – 0.6 kg/week (0.7% body weight)</td>
              <td class="p-3 border border-[#e6e6e6]">Excellent with 1.8–2.2 g/kg protein</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-rose-600 font-bold">Aggressive Crash</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-rose-500">&gt; 800 kcal/day</td>
              <td class="p-3 border border-[#e6e6e6]">&gt; 1.0 kg/week (&gt; 1.5% body weight)</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-600 font-bold">High muscle loss, severe metabolic slowdown</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Preserving Muscle During a Deficit: The Two Critical Rules</h2>
      <ul>
        <li><strong>High Protein Intake:</strong> Consume 1.6 to 2.2 grams of protein per kilogram of body weight daily (or 2.0 to 2.4 g/kg of Lean Body Mass) to trigger muscle protein synthesis.</li>
        <li><strong>Progressive Resistance Training:</strong> Lift weights 3–4 times weekly to signal to the body that skeletal muscle tissue is vital and must not be oxidized for fuel.</li>
      </ul>

      <h2>Scientific References</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Hall KD, et al. <em>Quantification of the effect of energy imbalance on bodyweight.</em> The Lancet 2011; 378(9793):826-837. PMID: 21872751.</li>
        <li>Helms ER, et al. <em>Evidence-based recommendations for natural bodybuilding contest preparation: nutrition and supplementation.</em> J Int Soc Sports Nutr 2014; 11:20.</li>
      </ul>
`,
      "hi": `
      <h2>सुरक्षित कैलोरी डेफिसिट का वैज्ञानिक सिद्धांत</h2>
      <p>वजन कम करने के लिए शरीर में कैलोरी की कमी (डेफिसिट) होना अनिवार्य है, लेकिन जरूरत से ज्यादा कम खाना शरीर के चयापचय को बर्बाद कर देता है। <strong>यूएस नेशनल इंस्टीट्यूट्स ऑफ हेल्थ (NIH) के डॉ. केविन हॉल</strong> के अध्ययनों ने साबित किया कि वजन घटने के साथ शरीर का ऊर्जा खर्च भी अनुकूलित (adapt) हो जाता है, इसलिए क्रैश डाइट के बजाय संयमित डेफिसिट ही दीर्घकालिक सफलता देता है।</p>

      <h2>कैलोरी डेफिसिट की तीन श्रेणियां और उनके परिणाम</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">डेफिसिट स्तर</th>
              <th class="p-3 border border-[#e6e6e6] text-blue-500 font-bold">दैनिक कैलोरी कटौती (TDEE से)</th>
              <th class="p-3 border border-[#e6e6e6]">साप्ताहिक वजन कमी दर</th>
              <th class="p-3 border border-[#e6e6e6]">मांसपेशियों की सुरक्षा</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6]">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-emerald-600 font-bold">सुरक्षित (अनुशंसित)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-[#464feb]">300 – 400 kcal/दिन</td>
              <td class="p-3 border border-[#e6e6e6]">~300 से 400 ग्राम/हफ्ता</td>
              <td class="p-3 border border-[#e6e6e6] text-emerald-600 font-bold">&gt; 95% मांसपेशियां सुरक्षित रहती हैं</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-blue-500 font-bold">मानक मध्यम स्तर</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-[#464feb]">500 kcal/दिन</td>
              <td class="p-3 border border-[#e6e6e6]">~500 ग्राम/हफ्ता (0.5–1% कुल वजन)</td>
              <td class="p-3 border border-[#e6e6e6]">पर्याप्त प्रोटीन के साथ उत्कृष्ट परिणाम</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-rose-600 font-bold">अत्यधिक क्रैश डाइट</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-rose-500">&gt; 800 kcal/दिन</td>
              <td class="p-3 border border-[#e6e6e6]">&gt; 1 किग्रा/हफ्ता</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-600 font-bold">मांसपेशियां तेजी से गलती हैं, थायराइड धीमा</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>डाइटिंग के दौरान मांसपेशियों को बचाने के 2 सुनहरे नियम</h2>
      <ul>
        <li><strong>उच्च प्रोटीन का सेवन:</strong> शारीरिक वजन के प्रति किलोग्राम पर 1.6 से 2.2 ग्राम प्रोटीन अवश्य लें, ताकि शरीर ऊर्जा के लिए मांसपेशियों को न तोड़े।</li>
        <li><strong>रेजिस्टेंस ट्रेनिंग (वेट ट्रेनिंग):</strong> सप्ताह में कम से कम 3 से 4 दिन वजन उठाने का अभ्यास करें ताकि मांसपेशियों को सक्रिय रहने का संकेत मिले।</li>
      </ul>

      <h2>वैज्ञानिक संदर्भ</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Hall KD, et al. <em>Quantification of the effect of energy imbalance on bodyweight.</em> The Lancet 2011; 378:826-837. PMID: 21872751.</li>
        <li>Helms ER, et al. <em>Recommendations for natural bodybuilding: nutrition and supplementation.</em> J Int Soc Sports Nutr 2014; 11:20.</li>
      </ul>
`,
      "es": `
      <h2>Guía del Déficit Calórico Saludable y Sostenible</h2>
      <p>El modelo dinámico del Dr. Kevin Hall (NIH) demostró que el cuerpo reduce el gasto metabólico a medida que pierde peso. Por ello, el déficit óptimo es moderado: <strong>300 a 500 kcal diarias por debajo del TDEE</strong> (ritmo de 0.5% a 1% del peso corporal semanal) combinado con 1.6 a 2.2 g de proteína/kg para conservar el 100% de la masa muscular.</p>
`,
      "fr": `
      <h2>Le Déficit Calorique Scientifique et Durable</h2>
      <p>Selon les recherches de l'Institut National de la Santé (NIH), un déficit modéré de 300 à 500 kcal/jour garantit une perte de tissu adipeux pure sans dégradation musculaire, à condition de maintenir un apport en protéines de 1,6 à 2,2 g/kg et un entraînement contre résistance.</p>
`,
      "de": `
      <h2>Nachhaltiges Kaloriendefizit ohne Jo-Jo-Effekt</h2>
      <p>Ein moderates Defizit von 300 bis 500 kcal/Tag sichert laut NIH-Studien von Dr. Kevin Hall den optimalen Fettverlust bei gleichzeitigem Schutz des Stoffwechsels und Erhalt der fettfreien Muskelmasse.</p>
`,
      "ko": `
      <h2>지속 가능한 칼로리 적자 설정 및 대사 보존</h2>
      <p>미국 국립보건원(NIH) Kevin Hall 박사의 연구에 따르면 주당 체중의 0.5~1.0%를 감량하는 <strong>300~500kcal의 완만한 칼로리 적자</strong>와 체중 kg당 1.6~2.2g의 단백질 섭취가 근손실을 막는 가장 완벽한 방법입니다.</p>
`
    }
  },

  "sleep-and-metabolism": {
    "datePublished": "2026-03-01",
    "dateModified": "2026-10-28",
    "title": {
      "en": "Sleep & Metabolism: Circadian Rhythms, Leptin, Ghrelin & Caloric Burn",
      "hi": "नींद और चयापचय (Metabolism): लेप्टिन, घ्रेलिन और कैलोरी बर्न का विज्ञान",
      "ko": "수면과 대사 과학: 렙틴, 그렐린 호르몬과 일일 칼로리 소비의 상관관계",
      "de": "Schlaf & Stoffwechsel: Zirkadiane Rhythmen, Leptin, Ghrelin & Energieverbrauch",
      "es": "Sueño y Metabolismo: Ritmos Circadianos, Leptina, Grelina y Quema de Calorías",
      "fr": "Sommeil et Métabolisme : Rythmes Circadiens, Leptine, Ghréline et Dépense Énergétique"
    },
    "category": {
      "en": "Metabolic Science & Energy",
      "hi": "मेटाबॉलिक विज्ञान व ऊर्जा",
      "ko": "대사 과학 및 에너지",
      "de": "Stoffwechsel & Kalorienbedarf",
      "es": "Gasto Energético y Metabolismo",
      "fr": "Métabolisme et Dépense Énergétique"
    },
    "description": {
      "en": "Explore the profound scientific link between sleep deprivation and metabolic health. Learn how insufficient sleep alters leptin and ghrelin, increases cortisol, and impairs glucose regulation.",
      "hi": "नींद की कमी और मेटाबॉलिज्म के बीच वैज्ञानिक संबंध। जानें कैसे अपर्याप्त नींद भूख हार्मोन (लेप्टिन व घ्रेलिन) को असंतुलित करती है और इंसुलिन संवेदनशीलता को प्रभावित करती है।",
      "ko": "수면 부족이 신진대사에 미치는 과학적 영향. 렙틴과 그렐린의 불균형, 코르티솔 분비 증가, 인슐린 저항성 및 기초대사량 저하 메커니즘을 상세히 설명합니다.",
      "de": "Erfahren Sie den wissenschaftlichen Zusammenhang zwischen Schlafmangel und Stoffwechsel: Wie Schlafdefizite Leptin und Ghrelin stören und Heißhunger auslösen.",
      "es": "Descubre la conexión científica entre la falta de sueño y el metabolismo. Cómo la privación del sueño altera la leptina, la grelina y la sensibilidad a la insulina.",
      "fr": "Découvrez le lien scientifique entre sommeil et métabolisme : impact sur la leptine, la ghréline, le cortisol et la dépense énergétique quotidienne."
    },
    "contentHtml": {
      "en": `
      <h2>The Neuroendocrine Architecture of Sleep and Metabolism</h2>
      <p>In metabolic science, sleep is increasingly recognized as the fourth pillar of human health, sitting alongside nutrition, physical activity, and stress regulation. When individuals experience acute or chronic sleep restriction (fewer than 7 hours per night), the body's neuroendocrine signaling undergoes profound shifts that disrupt energy homeostasis, hunger signaling, and glucose disposal.</p>
      <p>Laboratory sleep restriction studies conducted at the University of Chicago and published in the <em>Annals of Internal Medicine</em> demonstrate that restricting sleep to 4.5 to 5.5 hours per night for just one week produces a <strong>drop in systemic insulin sensitivity comparable to 10 to 20 years of chronological aging</strong>. When sleep-deprived subjects consume meals, their skeletal muscle cells fail to clear blood glucose efficiently, prompting prolonged postprandial hyperinsulinemia and preferential lipid storage in intra-abdominal visceral adipose tissue.</p>

      <h2>The Leptin and Ghrelin Seesaw: Why Tired Brains Crave Calories</h2>
      <p>Two primary peripheral peptide hormones govern central appetite signaling in the hypothalamus:</p>
      <ul>
        <li><strong>Leptin (Satiety Hormone):</strong> Synthesized primarily by subcutaneous adipocytes, leptin circulates in proportion to energy reserves and signals satiety to the arcuate nucleus of the hypothalamus. Sleep restriction suppresses circulating leptin levels by 15% to 20%, generating a persistent false starvation signal.</li>
        <li><strong>Ghrelin (Hunger Hormone):</strong> Secreted by oxyntic cells in the gastric fundus, ghrelin stimulates appetite, gut motility, and food-seeking behavior. Sleep deprivation elevates circulating ghrelin by 20% to 30%, triggering heightened hedonic cravings for ultra-processed, energy-dense carbohydrates and saturated fats.</li>
      </ul>

      <h2>Metabolic Impact of Sleep Quality vs. Sleep Duration</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">Sleep Parameter</th>
              <th class="p-3 border border-[#e6e6e6] text-blue-500 font-bold">Optimal Range (7–9 Hours)</th>
              <th class="p-3 border border-[#e6e6e6] text-rose-500 font-bold">Sleep Deprived (&lt; 6 Hours)</th>
              <th class="p-3 border border-[#e6e6e6]">Metabolic Consequence</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6]">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">Morning Fasting Cortisol</td>
              <td class="p-3 border border-[#e6e6e6]">Normal circadian spike &amp; rapid daytime decline</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-600 font-bold">Prolonged evening elevation</td>
              <td class="p-3 border border-[#e6e6e6]">Promotes skeletal muscle catabolism and visceral lipogenesis</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">Growth Hormone (GH) Secretion</td>
              <td class="p-3 border border-[#e6e6e6]">Robust pulse during slow-wave stage 3 sleep</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-600 font-bold">Attenuated by 50% to 70%</td>
              <td class="p-3 border border-[#e6e6e6]">Impairs cellular tissue repair and nitrogen retention</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">Spontaneous Daily NEAT</td>
              <td class="p-3 border border-[#e6e6e6]">Vibrant unconscious movement and posture</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-600 font-bold">Suppressed by 200–400 kcal/day</td>
              <td class="p-3 border border-[#e6e6e6]">Reduces overall Total Daily Energy Expenditure (TDEE)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Evidence-Based Sleep Hygiene Rules for Metabolic Health</h2>
      <ol class="space-y-2 my-4 list-decimal pl-5 text-sm text-[var(--muted-foreground)]">
        <li><strong>Maintain a Consistent Sleep-Wake Schedule:</strong> Waking up at the same hour seven days a week locks in the master circadian clock located in the suprachiasmatic nucleus (SCN).</li>
        <li><strong>Eliminate Evening Blue-Light Exposure:</strong> Blue wavelengths (450–480 nm) emitted by smartphones, laptops, and tablets suppress pineal melatonin secretion for up to 90 minutes.</li>
        <li><strong>Thermal Sleep Environment:</strong> Cooler bedroom ambient temperatures (around 18°C to 19°C / 65°F to 67°F) facilitate the physiological core body temperature drop required for deep stage 3 slow-wave sleep.</li>
        <li><strong>Avoid Late Caffeine and Heavy Meals:</strong> Caffeine has a half-life of 5 to 7 hours; consuming caffeine within 8 hours of bedtime fragments REM and slow-wave sleep architecture.</li>
      </ol>

      <h2>Scientific References</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Spiegel K, Tasali E, Penev P, Van Cauter E. <em>Brief communication: Sleep curtailment in healthy young men is associated with decreased leptin levels, elevated ghrelin levels, and increased hunger and appetite.</em> Ann Intern Med 2004; 141(11):846-850. PMID: 15583226.</li>
        <li>Buxton OM, et al. <em>Adverse metabolic consequences in humans of prolonged sleep restriction combined with circadian disruption.</em> Sci Transl Med 2012; 4(129):129ra43. PMID: 22496545.</li>
      </ul>
`,
      "hi": `
      <h2>नींद और मेटाबॉलिज्म का न्यूरोएंडोक्राइन विज्ञान</h2>
      <p>मेटाबॉलिक स्वास्थ्य में नींद को आहार और व्यायाम जितना ही महत्वपूर्ण माना जाता है। जब कोई व्यक्ति लगातार 7 घंटे से कम सोता है, तो शरीर के भूख और तृप्ति को नियंत्रित करने वाले हार्मोन असंतुलित हो जाते हैं। यूनिवर्सिटी ऑफ शिकागो के अध्ययनों में पाया गया कि केवल एक सप्ताह तक 5 घंटे की नींद लेने से इंसुलिन संवेदनशीलता में भारी गिरावट आ जाती है।</p>

      <h2>लेप्टिन और घ्रेलिन का असंतुलन: नींद की कमी से भूख क्यों बढ़ती है?</h2>
      <p>नींद पूरी न होने पर वसा कोशिकाओं द्वारा स्रावित होने वाला <strong>लेप्टिन (तृप्ति हार्मोन)</strong> घट जाता है, जबकि पेट से निकलने वाला <strong>घ्रेलिन (भूख हार्मोन)</strong> 20% से 30% तक बढ़ जाता है। इसका परिणाम यह होता है कि मस्तिष्क को निरंतर ऊर्जा की कमी का संकेत मिलता है, जिससे मीठा, तला-भुना और अधिक कैलोरी वाला भोजन खाने की तीव्र इच्छा होती है।</p>

      <h2>मेटाबॉलिक स्वास्थ्य के लिए स्वस्थ नींद की आदतें</h2>
      <ul class="list-disc pl-5 my-3 space-y-1 text-sm text-[var(--muted-foreground)]">
        <li>प्रतिदिन सोने और जागने का समय एक समान रखें।</li>
        <li>सोने से कम से कम 1 घंटा पहले मोबाइल और टीवी की नीली रोशनी से बचें।</li>
        <li>कमरे का तापमान ठंडा और शांत रखें ताकि गहरी नींद (Slow-Wave Sleep) आ सके।</li>
      </ul>
`,
      "es": `
      <h2>La Conexión Neuroendocrina entre Sueño y Metabolismo</h2>
      <p>Dormir menos de 7 horas por noche altera profundamente la regulación hormonal del apetito y la glucosa. Los estudios demuestran que la falta de sueño disminuye la leptina (hormona de la saciedad) en un 18% y eleva la grelina (hormona del apetito) en un 28%, provocando antojos intensos de carbohidratos refinados y reduciendo el gasto energético diario.</p>
`,
      "fr": `
      <h2>Lien entre Sommeil et Régulation Métabolique</h2>
      <p>Le manque de sommeil réduit la sensibilité à l'insuline et perturbe l'équilibre entre la leptine et la ghréline. Les recherches confirment qu'une dette de sommeil chronique abaisse le métabolisme de repos et augmente le stockage des graisses viscérales.</p>
`,
      "de": `
      <h2>Schlafmangel und Stoffwechselregulation</h2>
      <p>Chronischer Schlafmangel (unter 7 Stunden) führt nachweislich zu Insulinresistenz und Dysregulation der Hungerhormone Leptin und Ghrelin. Die Folge sind Heißhungerattacken und ein reduzierter Kaloriengrundumsatz.</p>
`,
      "ko": `
      <h2>수면 부족과 신진대사 저하의 의학적 상관관계</h2>
      <p>수면 시간이 7시간 미만으로 줄어들면 포만감을 전달하는 렙틴 호르몬이 감소하고 식욕을 자극하는 그렐린 호르몬이 급증하여 당분과 고지방 식품에 대한 갈망이 심해집니다. 충분한 양질의 수면은 호르몬 균형과 기초대사량 유지의 핵심입니다.</p>
`
    }
  },

  "walking-calories-and-neat": {
    "datePublished": "2026-03-05",
    "dateModified": "2026-10-28",
    "title": {
      "en": "Walking Calories & NEAT: How Daily Steps Drive Non-Exercise Thermogenesis",
      "hi": "पैदल चलना और NEAT: जानें दैनिक कदम कैसे बढ़ाते हैं कैलोरी बर्न",
      "ko": "걷기 칼로리와 NEAT: 일상 속 걸음 수가 비운동성 활동 열생성에 미치는 영향",
      "de": "Kalorienverbrauch beim Gehen & NEAT: Wie tägliche Schritte den Stoffwechsel antreiben",
      "es": "Calorías al Caminar y NEAT: Cómo los Pasos Diarios Aumentan el Gasto Calórico",
      "fr": "Calories Brûlées en Marchant et NEAT : Comment le Nombre de Pas Active la Thermogenèse"
    },
    "category": {
      "en": "Metabolic Science & Energy",
      "hi": "मेटाबॉलिक विज्ञान व ऊर्जा",
      "ko": "대사 과학 및 에너지",
      "de": "Stoffwechsel & Kalorienbedarf",
      "es": "Gasto Energético y Metabolismo",
      "fr": "Métabolisme et Dépense Énergétique"
    },
    "description": {
      "en": "Discover the science of Non-Exercise Activity Thermogenesis (NEAT). Learn how walking step counts impact daily caloric expenditure, cardiovascular health, and sustainable fat loss.",
      "hi": "नॉन-एक्सरसाइज एक्टिविटी थर्मोजेनेसिस (NEAT) का विज्ञान। समझें कि दैनिक कदमों की संख्या कैसे कैलोरी खर्च, हृदय स्वास्थ्य और वजन घटाने में मदद करती है।",
      "ko": "비운동성 열생성(NEAT)의 과학적 원리와 걷기 운동의 가치. 일일 걸음 수별 실제 칼로리 소비량과 지속 가능한 체지방 감량 전략을 안내합니다.",
      "de": "Die Wissenschaft der alltagsbezogenen Aktivitätsthermogenese (NEAT): Wie Gehen und Schrittziele den Kalorienverbrauch ohne Erschöpfung maximieren.",
      "es": "Aprende la ciencia de la termogénesis por actividad sin ejercicio (NEAT). Cómo el conteo de pasos influye en el gasto calórico diario y el control de peso.",
      "fr": "Découvrez la science de la thermogenèse liée aux activités non sportives (NEAT) : comment la marche quotidienne optimise le métabolisme et la combustion des graisses."
    },
    "contentHtml": {
      "en": `
      <h2>The Overlooked Power of Non-Exercise Activity Thermogenesis (NEAT)</h2>
      <p>When most people think about burning calories to lose weight or improve cardiovascular fitness, they imagine vigorous gym workouts, high-intensity interval training (HIIT), or strenuous running. However, in exercise physiology and metabolic balance, intentional workouts—known as <strong>Exercise Activity Thermogenesis (EAT)</strong>—typically account for only <strong>5% to 10% of Total Daily Energy Expenditure (TDEE)</strong> in average adults.</p>
      <p>In contrast, <strong>Non-Exercise Activity Thermogenesis (NEAT)</strong>—the energy expended for everything we do that is not sleeping, eating, or sports-like exercise—can vary by up to <strong>1,000 to 2,000 calories per day between two individuals of identical body size</strong>. Pioneered by Dr. James Levine at the Mayo Clinic, NEAT research proves that ordinary daily physical activity, led primarily by walking step volume, is the single greatest adjustable variable in human daily energy expenditure.</p>

      <h2>How Walking Burns Calories: The Biomechanics and MET Values</h2>
      <p>Walking is a low-impact, highly sustainable aerobic movement powered primarily by the oxidation of free fatty acids. Energy expenditure during walking is quantified in <strong>Metabolic Equivalents of Task (METs)</strong>:</p>
      <ul>
        <li><strong>Casual walking (3.2 km/h / 2.0 mph):</strong> 2.5 METs (~150 kcal/hour for a 70 kg individual)</li>
        <li><strong>Moderate walking (4.8 km/h / 3.0 mph):</strong> 3.3 METs (~230 kcal/hour for a 70 kg individual)</li>
        <li><strong>Brisk walking (6.4 km/h / 4.0 mph):</strong> 5.0 METs (~350 kcal/hour for a 70 kg individual)</li>
      </ul>

      <h2>Step Volume vs. Daily Caloric Expenditure Reference Table</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">Daily Steps</th>
              <th class="p-3 border border-[#e6e6e6]">Activity Category</th>
              <th class="p-3 border border-[#e6e6e6] text-blue-500 font-bold">Approx. Walking Caloric Burn (70 kg)</th>
              <th class="p-3 border border-[#e6e6e6]">Cardiometabolic Health Impact</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6]">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">&lt; 5,000</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-500 font-bold">Sedentary Lifestyle</td>
              <td class="p-3 border border-[#e6e6e6]">&lt; 150 kcal/day</td>
              <td class="p-3 border border-[#e6e6e6]">Elevated risk of insulin resistance and endothelial stiffness</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">5,000 – 7,499</td>
              <td class="p-3 border border-[#e6e6e6]">Low-Active Baseline</td>
              <td class="p-3 border border-[#e6e6e6]">150 – 250 kcal/day</td>
              <td class="p-3 border border-[#e6e6e6]">Baseline threshold associated with reduced all-cause mortality</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">7,500 – 9,999</td>
              <td class="p-3 border border-[#e6e6e6] text-[#464feb] font-bold">Somewhat Active</td>
              <td class="p-3 border border-[#e6e6e6]">250 – 350 kcal/day</td>
              <td class="p-3 border border-[#e6e6e6]">Significant improvement in arterial elasticity and lipid clearance</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-emerald-600 font-bold">&ge; 10,000</td>
              <td class="p-3 border border-[#e6e6e6] text-emerald-600 font-bold">Highly Active</td>
              <td class="p-3 border border-[#e6e6e6] font-bold text-emerald-600">350 – 500+ kcal/day</td>
              <td class="p-3 border border-[#e6e6e6]">Optimal blood glucose stabilization and long-term weight maintenance</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Practical Strategies to Increase Daily NEAT Effortlessly</h2>
      <ul class="space-y-2 my-4 list-disc pl-5 text-sm text-[var(--muted-foreground)]">
        <li><strong>Take Short Walking Breaks Every Hour:</strong> Standing up and walking for 2 minutes every hour reactivates skeletal muscle lipoprotein lipase (LPL) enzymes that clear triglycerides from the bloodstream.</li>
        <li><strong>Pace During Phone Calls:</strong> Turning 30 minutes of daily phone conversations into a walking habit adds 1,500 to 2,000 steps without taking dedicated workout time.</li>
        <li><strong>Park Further and Choose Stairs:</strong> Simple environmental choices compound over weeks to create an effortless caloric deficit without triggering metabolic adaptation.</li>
      </ul>

      <h2>Scientific References</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Levine JA. <em>Non-exercise activity thermogenesis (NEAT).</em> Best Pract Res Clin Endocrinol Metab 2002; 16(4):679-702. PMID: 12468415.</li>
        <li>Paluch AE, et al. <em>Daily steps and all-cause mortality: a meta-analysis of 15 international cohorts.</em> Lancet Public Health 2022; 7(3):e219-e228. PMID: 35247352.</li>
      </ul>
`,
      "hi": `
      <h2>नॉन-एक्सरसाइज एक्टिविटी थर्मोजेनेसिस (NEAT) का महत्व</h2>
      <p>अधिकांश लोग कैलोरी जलाने के लिए केवल भारी वर्कआउट या जिम पर ध्यान देते हैं। लेकिन वैज्ञानिक अध्ययनों (मेयो क्लिनिक) के अनुसार, जिम का व्यायाम कुल दैनिक ऊर्जा खर्च (TDEE) का केवल 5% से 10% होता है। इसके विपरीत, <strong>NEAT (गैर-व्यायाम गतिविधि 열생성)</strong> जैसे चलना, खड़े रहना और सीढ़ियां चढ़ना दिन भर में सैकड़ों अतिरिक्त कैलोरी खर्च कर सकता है।</p>

      <h2>कदमों की संख्या और कैलोरी खर्च तालिका</h2>
      <p>एक 70 किग्रा वयस्क 10,000 कदम चलने पर लगभग 350 से 450 कैलोरी जलाता है। यह कैलोरी मुख्य रूप से शरीर में संचित वसा से आती है, जिससे थकान या मांसपेशियों के नुकसान के बिना वजन नियंत्रित रहता है।</p>

      <h2>NEAT बढ़ाने के सरल उपाय</h2>
      <ul class="list-disc pl-5 my-3 space-y-1 text-sm text-[var(--muted-foreground)]">
        <li>फोन पर बात करते समय टहलने की आदत डालें।</li>
        <li>हर एक घंटे में 2 से 3 मिनट का वॉक ब्रेक लें।</li>
        <li>लिफ्ट की जगह सीढ़ियों का उपयोग करें।</li>
      </ul>
`,
      "es": `
      <h2>El Poder del NEAT y los Pasos Diarios</h2>
      <p>La termogénesis por actividad sin ejercicio (NEAT) representa la mayor parte del gasto energético variable. Caminar entre 8.000 y 10.000 pasos al día permite quemar entre 300 y 450 kcal adicionales sin inducir fatiga central ni apetito desmedido, siendo la herramienta más sostenible para el déficit calórico.</p>
`,
      "fr": `
      <h2>La Marche et la Thermogenèse Non Liée à l'Exercice (NEAT)</h2>
      <p>Les recherches de la Mayo Clinic démontrent que le NEAT peut faire varier la dépense énergétique journalière de plus de 1000 kcal entre deux personnes de même corpulence. Viser 8 000 à 10 000 pas par jour stabilise la glycémie et accélère la perte de masse grasse durablement.</p>
`,
      "de": `
      <h2>Kalorienverbrauch durch Alltagsbewegung (NEAT)</h2>
      <p>Nicht-sportliche Aktivitäts-Thermogenese (NEAT) ist der stärkste Hebel zur Steigerung des Gesamtenergieumsatzes. 8.000 bis 10.000 Schritte täglich verbrennen 300 bis 450 kcal, ohne die Regeneration zu belasten.</p>
`,
      "ko": `
      <h2>비운동성 활동 열생성(NEAT)과 걷기 칼로리의 비밀</h2>
      <p>메이요 클리닉(Mayo Clinic)의 연구에 따르면 일상 속 활동(NEAT)은 하루 1,000kcal 이상의 에너지 소비 차이를 만듭니다. 매일 8,000~10,000보를 걷는 습관은 무리한 고강도 운동 없이도 체지방을 안전하고 지속 가능하게 연소시키는 가장 효과적인 방법입니다.</p>
`
    }
  }
};
