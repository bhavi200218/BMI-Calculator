// Module 2: Asian & Indian Population BMI (2 Articles)
import type { BlogArticleData } from './types';

export const asianBmiArticles: Record<string, BlogArticleData> = {
  "bmi-calculator-india": {
    "datePublished": "2026-06-10",
    "dateModified": "2026-10-25",
    "title": {
      "en": "BMI for Indians: Practical Diet, Screening & Action Guide",
      "hi": "भारतीयों के लिए बीएमआई एक्शन गाइड: आहार, व्यायाम व स्वास्थ्य",
      "ko": "인도 및 아시아인을 위한 실천적 BMI 가이드: 식단, 운동 및 정기 검진",
      "de": "BMI-Leitfaden für Indien: Ernährung, Bewegung & Vorsorge",
      "es": "Guía Práctica de IMC para India: Dieta, Ejercicio y Chequeos",
      "fr": "Guide d'IMC pour l'Inde : Nutrition, Sport et Bilan de Santé"
    },
    "category": {
      "en": "Practical Health Guidance",
      "hi": "व्यावहारिक स्वास्थ्य मार्गदर्शन",
      "ko": "실천 건강 가이드",
      "de": "Praxisorientierte Gesundheit",
      "es": "Guía de Salud Práctica",
      "fr": "Santé Pratique et Nutrition"
    },
    "description": {
      "en": "Comprehensive clinical action guide for applying Asian BMI thresholds in daily life. Learn South Asian carbohydrate reduction strategies, high-protein vegetarian swaps, daily step goals, and preventive blood tests.",
      "hi": "दैनिक जीवन में भारतीय बीएमआई मानकों को लागू करने की संपूर्ण गाइड। कार्बोहाइड्रेट नियंत्रण, उच्च प्रोटीन शाकाहारी विकल्प, व्यायाम और आवश्यक रक्त जांच।",
      "ko": "인도 및 아시아 인구의 일상생활 BMI 실천 지침. 정제 탄수화물 절제법, 경제적인 고단백 채식 식단 구성, 일일 유산소 운동 목표 및 정기 혈액 검사 항목을 종합 안내합니다.",
      "de": "Praktischer Leitfaden zur Umsetzung asiatischer BMI-Grenzwerte im Alltag: Reduzierung raffinierter Kohlenhydrate, günstige pflanzliche Proteine und kardiometabolische Vorsorge.",
      "es": "Guía clínica práctica para aplicar el IMC en población india y asiática: sustitución de carbohidratos refinados, fuentes de proteína vegetal y pruebas diagnósticas anuales.",
      "fr": "Guide clinique pour appliquer les seuils d'IMC asiatiques au quotidien : gestion des glucides, sources de protéines végétales, activité physique et bilans préventifs."
    },
    "contentHtml": {
      "en": `
      <h2>Translating Your Asian BMI Result into Daily Clinical & Nutritional Action</h2>
      <p>Calculating your Body Mass Index (BMI) using Asian population criteria—where <strong>18.5 to 22.9 kg/m² represents normal weight</strong>, <strong>23.0 to 24.9 kg/m² defines overweight</strong>, and <strong>&ge; 25.0 kg/m² signifies obesity</strong>—is an essential first-line educational screening milestone. However, the true preventative value emerges when you translate that calculation into tangible daily lifestyle adjustments tailored to the unique metabolic architecture of South Asian biology.</p>
      <p>Because individuals of Indian and broader South Asian descent carry a documented genetic and phenotypic predisposition toward premature visceral adiposity, higher abdominal fat distribution, and earlier beta-cell pancreatic exhaustion, proactive nutritional management, muscle preservation, and structured preventive clinical screenings are essential for lifelong cardiometabolic health.</p>

      <h2>The South Asian Metabolic Architecture: Carbohydrate Dominance vs. Protein Scarcity</h2>
      <p>In traditional Indian households across urban and rural demographics, everyday diets frequently derive between <strong>70% and 80% of total daily energy from refined carbohydrates</strong>. Common dietary staples include polished white rice, refined wheat flour (maida), fried savory preparations (parathas, puris, samosas, pakoras), and sugar-sweetened beverages such as masala chai and commercial fruit drinks. Simultaneously, dietary protein intake remains substantially below physiological requirements, averaging merely 0.5 to 0.6 grams per kilogram of body weight—well below the recommended daily allowance (RDA) of 0.8 to 1.0 g/kg, and the optimal athletic target of 1.2 to 1.6 g/kg.</p>
      <p>This carbohydrate-dominant pattern produces dramatic postprandial glucose surges. In response, the pancreas hypersecretes insulin to clear circulating glucose. Over years of chronic postprandial hyperglycemia, peripheral tissues develop receptor-level insulin resistance, prompting the liver to accelerate de novo lipogenesis and deposit excess triglycerides directly into intra-abdominal visceral adipose tissue and hepatic parenchyma (Non-Alcoholic Fatty Liver Disease / MASLD).</p>

      <h2>Evidence-Based Kitchen Swaps for South Asian Culinary Traditions</h2>
      <p>Optimizing your macronutrient balance does not require abandoning beloved cultural recipes. Mindful ingredient substitutions dramatically improve dietary fiber, boost satiety, lower glycemic index, and protect skeletal muscle mass:</p>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">Nutritional Category</th>
              <th class="p-3">Traditional Dietary Choice</th>
              <th class="p-3 text-[var(--accent)] font-bold">Health-Promoting Kitchen Swap</th>
              <th class="p-3">Clinical Metabolic Mechanism</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)]">
            <tr>
              <td class="p-3 font-semibold">Grain Staples</td>
              <td class="p-3">Polished white rice, refined wheat rotis</td>
              <td class="p-3 text-[var(--accent)] font-bold">Millets (ragi, bajra, jowar), brown basmati, quinoa, steel-cut oats</td>
              <td class="p-3">Provides soluble beta-glucan fibers, attenuates post-meal glucose spikes</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Vegetarian Protein</td>
              <td class="p-3">Watery dal with low pulse-to-liquid ratio</td>
              <td class="p-3 text-[var(--accent)] font-bold">Sprouted moong, kala chana, low-fat paneer, textured soy chunks (52% protein)</td>
              <td class="p-3">Supplies essential branched-chain amino acids (BCAAs) for muscle preservation</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Cooking Fats &amp; Oils</td>
              <td class="p-3">Repeatedly heated refined vegetable/seed oils</td>
              <td class="p-3 text-[var(--accent)] font-bold">Cold-pressed mustard oil, groundnut oil, virgin coconut oil, measured A2 desi ghee</td>
              <td class="p-3">Limits lipid oxidation and trans-fatty acid formation; cap total cooking fat to 15–20 ml/day</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Snack Routines</td>
              <td class="p-3">Deep-fried namkeen, bakery rusks, sugary biscuits</td>
              <td class="p-3 text-[var(--accent)] font-bold">Dry-roasted makhana (foxnuts), roasted chana, unsalted almonds, walnuts, plain chaas</td>
              <td class="p-3">Rich in magnesium, zinc, polyphenols, and cardioprotective omega-3 fatty acids</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Targeted Physical Activity Protocols for Visceral Adipose Mobilization</h2>
      <p>Cardiorespiratory endurance exercise combined synergistically with progressive resistance training represents the most potent non-pharmacological strategy for mobilizing deep visceral abdominal fat:</p>
      <ul>
        <li><strong>Aerobic Glycogen Depletion:</strong> Accumulate at least 150 to 300 minutes of moderate-intensity aerobic physical activity weekly. Sustained brisk walking at 5.5 to 6.0 km/h, outdoor cycling, or lane swimming helps deplete intramuscular glycogen stores, promoting insulin-independent glucose uptake via GLUT4 transporter translocation.</li>
        <li><strong>The 10,000 Step Milestone:</strong> Achieving 8,000 to 10,000 steps daily significantly reduces sedentary vascular compression and lowers postprandial triglyceride surges.</li>
        <li><strong>Progressive Resistance Training (PRT):</strong> Perform 2 to 3 structured resistance sessions weekly targeting primary compound movement patterns (bodyweight squats, push-ups, dumbbell lunges, or resistance band rows). Skeletal muscle is your body's largest glucose disposal reservoir; increasing muscular mass directly enhances insulin sensitivity.</li>
      </ul>

      <h2>Annual Preventative Cardiometabolic Screening Checklist for South Asians</h2>
      <p>Because metabolic disturbances frequently occur silently in normal-weight or mildly overweight South Asian adults, regular laboratory blood chemistry panels are imperative regardless of perceived fitness:</p>
      <ol class="space-y-2 my-4">
        <li><strong>Glycated Hemoglobin (HbA1c) &amp; Fasting Blood Glucose:</strong> HbA1c offers an accurate 90-day rolling index of glycemic regulation (normal: &lt; 5.7%, prediabetes: 5.7%–6.4%, clinical diabetes: &ge; 6.5%).</li>
        <li><strong>Comprehensive Lipid Panel:</strong> Measures total serum cholesterol, LDL-C, HDL-C, and fasting triglycerides. Because South Asians typically present with elevated triglycerides and low HDL, aim for fasting triglycerides &lt; 150 mg/dL and a Triglyceride-to-HDL ratio below 2.0.</li>
        <li><strong>Apolipoprotein B (ApoB):</strong> Measures the total concentration of atherogenic lipoproteins (VLDL, IDL, LDL) particles, offering superior predictive value over standard LDL-C.</li>
        <li><strong>Hepatic Ultrasound and Liver Enzymes (SGOT / SGPT):</strong> Screens for early-stage hepatic steatosis (NAFLD/MASLD), which is present in over 30% of urban South Asian adults.</li>
        <li><strong>Resting Blood Pressure:</strong> Consistent readings below 120/80 mmHg represent optimal vascular health; readings exceeding 130/80 mmHg require structured clinical lifestyle intervention.</li>
      </ol>

      <h2>Frequently Asked Questions Regarding South Asian BMI &amp; Lifestyle</h2>
      <div class="space-y-4 my-6">
        <div>
          <h3 class="text-base font-bold text-[var(--foreground)]">Can a purely vegetarian diet provide adequate protein for an Indian adult?</h3>
          <p class="text-sm text-[var(--muted-foreground)]">Yes, provided you consciously combine protein sources. Pairing legumes (dals, chickpeas, kidney beans) with dairy (low-fat paneer, curd/yogurt) or incorporating high-density soy chunks and plant protein powders easily achieves 60 to 90 grams of complete protein daily without excessive carbohydrate co-ingestion.</p>
        </div>
        <div>
          <h3 class="text-base font-bold text-[var(--foreground)]">Why do young Indians in their 30s experience heart attacks with "normal" weight?</h3>
          <p class="text-sm text-[var(--muted-foreground)]">This phenomenon stems from the "Thin-Fat" phenotype: normal scale weight accompanied by elevated visceral fat, small coronary artery diameter, high Lipoprotein(a) levels, and chronic low-grade vascular inflammation from refined carbohydrate diets and physical inactivity.</p>
        </div>
      </div>

      <h2>Scientific References</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Misra A, Chowbey P, Makkar BM, et al. <em>Consensus statement for diagnosis of obesity, abdominal obesity and the metabolic syndrome for Asian Indians.</em> J Assoc Physicians India 2009; 57:163-170.</li>
        <li>Indian Council of Medical Research (ICMR). <em>Guidelines for Management of Type 2 Diabetes.</em> New Delhi: ICMR, 2018.</li>
        <li>Yajnik CS, Yudkin JS. <em>The Y-Y paradox.</em> The Lancet 2004; 363(9403):163.</li>
      </ul>
`,
      "es": `
      <h2>Cómo Aplicar el IMC para Población Asiática e India en la Vida Diaria</h2>
      <p>Calcular el IMC con los criterios específicos (18.5–22.9 normal, 23.0–24.9 sobrepeso, &ge; 25.0 obesidad) es el primer paso para prevenir la diabetes tipo 2 y la enfermedad coronaria prematura en adultos del sur de Asia.</p>
      <h2>Pautas Nutricionales Clave</h2>
      <ul>
        <li><strong>Reducir carbohidratos refinados:</strong> Sustituir el arroz blanco y harinas refinadas por mijos tradicionales y cereales integrales.</li>
        <li><strong>Aumentar la proteína:</strong> Incorporar legumbres germinadas, soja texturizada y quesos bajos en grasa.</li>
        <li><strong>Actividad física:</strong> Realizar 150 a 300 minutos semanales de ejercicio cardiovascular y 2 sesiones de fuerza.</li>
      </ul>
    `,
      "fr": `
      <h2>Mettre en Pratique l'IMC Asiatique au Quotidien</h2>
      <p>Les seuils abaissés de l'OMS Asie (18,5–22,9 normal, 23,0–24,9 surpoids, &ge; 25,0 obésité) permettent d'agir précocement contre l'accumulation de graisse viscérale abdominale.</p>
    `,
      "de": `
      <h2>Asiatische BMI-Werte im Alltag praktisch nutzen</h2>
      <p>Aufgrund der genetischen Neigung zu abdominellem Bauchfett profitieren Personen südasiatischer Herkunft von gezielten Ernährungsumstellungen und Krafttraining.</p>
    `,
      "ko": `
      <h2>아시아 및 인도 표준 BMI 수치의 일상 속 실천 가이드</h2>
      <p>아시아 기준치(18.5~22.9 정상, 23.0~24.9 과체중, &ge; 25.0 비만)를 토대로 정제 탄수화물을 줄이고 양질의 단백질 섭취와 유산소 운동을 병행해야 합니다.</p>
    `,
      "hi": `
      <h2>भारतीय बीएमआई स्कोर को दैनिक जीवन में कैसे लागू करें?</h2>
      <p>आईसीएमआर और डब्ल्यूएचओ एशियाई मानकों (18.5–22.9 सामान्य, 23.0–24.9 अधिक वजन, &ge; 25.0 मोटापा) के अनुसार खानपान में कार्बोहाइड्रेट्स कम करना और प्रोटीन बढ़ाना आवश्यक है।</p>
    `
    }
  },

  "healthy-bmi-range-indians": {
    "datePublished": "2026-06-20",
    "dateModified": "2026-10-25",
    "title": {
      "en": "Healthy BMI Range for Indians: Why Asian Guidelines Differ",
      "hi": "भारतीयों के लिए स्वस्थ बीएमआई सीमा: एशियाई मानक पश्चिमी देशों से अलग क्यों हैं?",
      "ko": "인도 및 아시아인의 적정 BMI 기준: 서양 기준과 다른 의학적 이유",
      "de": "Gesunder BMI für Indien: Warum asiatische Grenzwerte abweichen",
      "es": "Rango Saludable de IMC para India: Por Qué Difieren los Criterios",
      "fr": "Plage Santé d'IMC pour l'Inde : Pourquoi les Normes Asiatiques Diffèrent"
    },
    "category": {
      "en": "Ethnic Guidelines & Epidemiology",
      "hi": "एशियाई स्वास्थ्य मानक और शोध",
      "ko": "인종별 가이드라인",
      "de": "Ethnische Richtwerte",
      "es": "Criterios Étnicos y Salud",
      "fr": "Normes Épidémiologiques"
    },
    "description": {
      "en": "Discover why WHO and ICMR establish lower BMI cut-offs for Indians (18.5-22.9 healthy, 23+ overweight). Explore the 'Thin-Fat' phenotype, the Y-Y paradox, visceral adiposity, and tighter waist targets.",
      "hi": "जानें कि डब्ल्यूएचओ और आईसीएमआर ने भारतीयों के लिए कम बीएमआई सीमाएं (18.5-22.9 स्वस्थ, 23+ ओवरवेट) क्यों तय की हैं। वाई-वाई विरोधाभास और विसरल फैट का वैज्ञानिक विश्लेषण।",
      "ko": "세계보건기구(WHO)와 인도의학연구위원회(ICMR)가 아시아인에게 더 엄격한 BMI 기준(18.5~22.9 정상, 23 이상 과체중)을 적용하는 이유와 '마른 비만(Thin-Fat)'의 의학적 실체를 밝힙니다.",
      "de": "Warum für Menschen südasiatischer Herkunft strengere BMI-Grenzwerte gelten (18,5–22,9 normal, ab 23 Übergewicht): Das Y-Y-Paradoxon und viszerales Bauchfett im Fokus.",
      "es": "Descubre por qué la OMS y el ICMR fijan puntos de corte más bajos para población india (18.5-22.9 normal, 23+ sobrepeso): el fenotipo 'falso delgado' y el riesgo visceral.",
      "fr": "Comprenez pourquoi l'OMS et l'ICMR préconisent des seuils plus stricts pour les populations asiatiques (18,5–22,9 normal, dès 23 surpoids) en raison du phénotype 'mince-gras'."
    },
    "contentHtml": {
      "en": `
      <h2>The Epidemiological Need for Tailored BMI Thresholds in South Asians</h2>
      <p>For decades, international health systems assessed adult weight using the standard World Health Organization (WHO) Body Mass Index classifications established primarily from studies of Caucasian populations in North America and Western Europe: 18.5 to 24.9 kg/m² for normal weight, 25.0 to 29.9 kg/m² for overweight, and 30.0 kg/m² or greater for obesity. However, clinical researchers, cardiologists, and public health epidemiologists across India, China, Japan, and the WHO Western Pacific Region observed a disturbing paradox:</p>
      <p><strong>Individuals of South Asian descent were developing severe metabolic complications—including Type 2 diabetes mellitus, early-onset coronary artery disease, hypertension, and non-alcoholic fatty liver disease—at Body Mass Index levels traditionally considered completely "normal" or only borderline elevated.</strong></p>
      <p>In response, international consensus consultations convened by the WHO, the Indian Council of Medical Research (ICMR), and the Association of Physicians of India (API) formally established tailored, lower anthropometric cut-offs specifically calibrated to the unique physiological profile of South Asian populations.</p>

      <h2>Standard WHO International vs. Asian Indian BMI Classifications</h2>
      <p>The comparative table below outlines the critical differences between universal Western reference points and the official revised criteria for South Asian adults:</p>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">Weight Status Category</th>
              <th class="p-3 font-mono text-blue-500">Standard WHO International Range</th>
              <th class="p-3 font-mono text-emerald-500 font-bold">Asian Indian / ICMR Guidelines</th>
              <th class="p-3">Clinical Action Trigger</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)] font-mono">
            <tr>
              <td class="p-3 font-sans font-semibold">Underweight</td>
              <td class="p-3 text-blue-500">&lt; 18.5 kg/m²</td>
              <td class="p-3 text-emerald-500 font-bold">&lt; 18.0 kg/m²</td>
              <td class="p-3 font-sans">Screen for malnutrition, anemia, and micronutrient deficits</td>
            </tr>
            <tr>
              <td class="p-3 font-sans font-semibold text-emerald-500 font-bold">Healthy / Normal Weight</td>
              <td class="p-3 text-blue-500">18.5 – 24.9 kg/m²</td>
              <td class="p-3 text-emerald-500 font-bold">18.0 – 22.9 kg/m²</td>
              <td class="p-3 font-sans text-emerald-500 font-bold">Optimal longevity window; lowest cardiometabolic risk</td>
            </tr>
            <tr>
              <td class="p-3 font-sans font-semibold text-amber-500 font-bold">Overweight (Action Trigger 1)</td>
              <td class="p-3 text-blue-500">25.0 – 29.9 kg/m²</td>
              <td class="p-3 text-amber-500 font-bold">23.0 – 24.9 kg/m²</td>
              <td class="p-3 font-sans">Early dietary intervention, reduce refined carbohydrates, increase daily steps</td>
            </tr>
            <tr>
              <td class="p-3 font-sans font-semibold text-rose-500 font-bold">Obesity (Action Trigger 2)</td>
              <td class="p-3 text-blue-500">&ge; 30.0 kg/m²</td>
              <td class="p-3 text-rose-500 font-bold">&ge; 25.0 kg/m²</td>
              <td class="p-3 font-sans text-rose-500">Formal clinical screening for insulin resistance, NAFLD, and dyslipidemia</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>The "Thin-Fat" Phenotype: The Y-Y Paradox Explained</h2>
      <p>The biological explanation for why Indians require lower cut-offs was famously illustrated in 2004 by Dr. Chittaranjan S. Yajnik of KEM Hospital Pune and Professor John S. Yudkin of University College London in their landmark publication, <em>The Y-Y Paradox</em>.</p>
      <div class="my-6 p-6 rounded-xl border border-[var(--border)] bg-[var(--card)] font-mono text-sm leading-relaxed space-y-3">
        <p class="font-bold text-[var(--accent)]">The Classic Y-Y Paradox Experiment:</p>
        <p class="text-[var(--foreground)]">Researchers compared two adult male physicians of similar stature and identical Body Mass Index (22.3 kg/m²):</p>
        <p class="text-[var(--muted-foreground)]">&bull; <strong>Caucasian Subject (Dr. Yudkin):</strong> BMI = 22.3 kg/m² | Measured Body Fat (DEXA): <strong>9.1%</strong></p>
        <p class="text-[var(--muted-foreground)]">&bull; <strong>Indian Subject (Dr. Yajnik):</strong> BMI = 22.3 kg/m² | Measured Body Fat (DEXA): <strong>21.2%</strong></p>
        <p class="text-[var(--foreground)] font-bold mt-2">Key Finding: At an identical "healthy" BMI of 22.3 kg/m², the Indian individual carried more than DOUBLE the total body fat percentage and significantly greater visceral abdominal adipose mass compared to his European peer.</p>
      </div>
      <p>This distinct biological characteristic is known medically as the <strong>"Thin-Fat" (or Sarcopenic-Adipose) Phenotype</strong>. Individuals of South Asian lineage naturally possess smaller skeletal bone structures and significantly lower baseline skeletal muscle mass, but a disproportionately high capacity for accumulating visceral abdominal fat around vital internal organs.</p>

      <h2>Ethnic-Specific Waist Circumference Thresholds</h2>
      <p>Because visceral abdominal fat directly drives cardiometabolic risk, the ICMR and API establish specialized waist circumference criteria that are significantly tighter than Western standards:</p>
      <ul>
        <li><strong>South Asian Men Waist Cut-off:</strong> <strong>&le; 90 cm (35.4 inches)</strong> (vs. 102 cm for Caucasian men)</li>
        <li><strong>South Asian Women Waist Cut-off:</strong> <strong>&le; 80 cm (31.5 inches)</strong> (vs. 88 cm for Caucasian women)</li>
      </ul>
      <p>A South Asian man with a waist circumference of 96 cm (37.8 inches) carries substantial visceral adiposity even if his scale weight and calculated BMI fall entirely within the "normal" range.</p>

      <h2>Cardiometabolic Consequences of Delayed Screening</h2>
      <p>When healthcare providers and individuals mistakenly apply Western BMI thresholds (waiting until a BMI of 25.0 to declare overweight or 30.0 for obesity), South Asian adults are diagnosed years too late. By the time an Indian adult reaches a BMI of 28 kg/m², they frequently exhibit advanced endothelial dysfunction, high circulating ApoB, severe hepatic steatosis, and subclinical atherosclerosis.</p>
      <p>Adopting the <strong>23.0 kg/m² threshold</strong> ensures that lifestyle modifications, dietary changes, and clinical blood testing begin during early, fully reversible stages of metabolic dysfunction.</p>

      <h2>Frequently Asked Questions Regarding Indian BMI Standards</h2>
      <div class="space-y-4 my-6">
        <div>
          <h3 class="text-base font-bold text-[var(--foreground)]">Is an Indian BMI of 24 considered healthy?</h3>
          <p class="text-sm text-[var(--muted-foreground)]">Under international WHO guidelines, 24.0 kg/m² appears normal. However, under official ICMR South Asian criteria, 24.0 kg/m² is classified as overweight and marks an early clinical action trigger requiring carbohydrate moderation and physical activity.</p>
        </div>
        <div>
          <h3 class="text-base font-bold text-[var(--foreground)]">Do these lower thresholds apply to children of Indian descent born abroad?</h3>
          <p class="text-sm text-[var(--muted-foreground)]">Yes. Epidemiological studies demonstrate that the genetic predisposition toward higher body fat percentage and visceral deposition persists across second- and third-generation South Asians raised in Western environments.</p>
        </div>
      </div>

      <h2>Scientific References</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>WHO Expert Consultation. <em>Appropriate body-mass index for Asian populations and its implications for policy and intervention strategies.</em> The Lancet 2004; 363(9403):157-163.</li>
        <li>Misra A, et al. <em>Consensus statement for diagnosis of obesity, abdominal obesity and the metabolic syndrome for Asian Indians.</em> J Assoc Physicians India 2009; 57:163-170.</li>
        <li>Yajnik CS, Yudkin JS. <em>The Y-Y paradox.</em> The Lancet 2004; 363(9403):163.</li>
      </ul>
`,
      "es": `
      <h2>Por Qué la Población India Requiere Límites de IMC Más Bajos</h2>
      <p>Estudios epidemiológicos demostraron que las personas del sur de Asia desarrollan diabetes tipo 2 y cardiopatía isquémica con un IMC significativamente inferior al de los países occidentales.</p>
      <h2>El Fenotipo 'Falso Delgado' y la Paradoja Y-Y</h2>
      <p>El célebre experimento del Dr. Yajnik y el Dr. Yudkin demostró que con un IMC idéntico de 22.3, un adulto indio presentaba más del doble de grasa corporal (21.2% frente a 9.1%) que su homólogo europeo.</p>
    `,
      "fr": `
      <h2>Pourquoi les Seuils d'IMC sont Réduits pour les Populations Asiatiques</h2>
      <p>Le phénotype 'mince-gras' se caractérise par une masse musculaire modeste mais une propension accrue à stocker de la graisse viscérale péritonéale dès un IMC de 23 kg/m².</p>
    `,
      "de": `
      <h2>Warum für Indien gesonderte BMI-Richtwerte gelten</h2>
      <p>Das Y-Y-Paradoxon belegt, dass Menschen südasiatischer Herkunft bei gleichem BMI einen deutlich höheren viszeralen Fettanteil aufweisen, weshalb Übergewicht bereits ab 23,0 kg/m² definiert wird.</p>
    `,
      "ko": `
      <h2>아시아인 맞춤형 기준점의 의학적 필요성</h2>
      <p>'마른 비만(Thin-Fat)' 현상으로 인해 아시아 성인은 동일한 BMI에서도 체지방률이 높고 복부 내장 지방이 많아 23.0 kg/m²부터 심대사 위험이 급격히 증가합니다.</p>
    `,
      "hi": `
      <h2>भारतीयों के लिए कम बीएमआई मानक क्यों जरूरी हैं?</h2>
      <p>वाई-वाई विरोधाभास के अनुसार, समान बीएमआई (22.3) पर भी एक भारतीय व्यक्ति में यूरोपीय व्यक्ति की तुलना में दोगुनी चर्बी पाई गई। इसीलिए 23 से ऊपर ओवरवेट माना जाता है।</p>
    `
    }
  }
};
