const fs = require('fs');

const filePath = 'src/utils/articles/guidelinesAndStrategiesArticles.ts';
let content = fs.readFileSync(filePath, 'utf8');
const isCrlf = content.includes('\r\n');
content = content.replace(/\r\n/g, '\n');

// 1. Prepare bmi-interpretation-guidelines HTML
const bmiInterpEn = `
      <h2>Scientific Foundation of Body Mass Index (BMI) Interpretation</h2>
      <p>Body Mass Index (BMI), initially formulated by Belgian mathematician Adolphe Quetelet in the 19th century and adopted by the <strong>World Health Organization (WHO)</strong> in the 1970s, serves as the global standard epidemiological screening tool for classifying adult weight status. While calculated through the straightforward mathematical relationship of body mass divided by stature squared (kg/m²), proper clinical interpretation requires understanding statistical reference thresholds, physiological limitations, and complementary anthropometric assessments.</p>
      <p>BMI is fundamentally an indirect estimate of adiposity. It does not measure body fat directly, nor does it differentiate between fat mass, lean muscle mass, skeletal weight, or total body water. Consequently, clinicians utilize BMI not as a stand-alone diagnostic tool, but as an initial tier in comprehensive metabolic risk stratification.</p>

      <h2>Official WHO International Adult BMI Classifications</h2>
      <p>For adult men and women aged 20 years and older, the World Health Organization defines five core nutritional categories associated with distinct statistical mortality and morbidity risks:</p>
      
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left text-sm border-collapse">
          <thead>
            <tr class="border-b border-[var(--border)] text-[var(--foreground)] font-bold">
              <th class="py-2.5 px-3">BMI Category</th>
              <th class="py-2.5 px-3">WHO Range (kg/m²)</th>
              <th class="py-2.5 px-3">Associated Health Risk Profile</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)]/60 text-[var(--muted-foreground)]">
            <tr>
              <td class="py-2.5 px-3 font-semibold text-sky-400">Underweight</td>
              <td class="py-2.5 px-3 font-mono">&lt; 18.5</td>
              <td class="py-2.5 px-3">Elevated risk of nutrient deficiencies, osteoporosis, and compromised immune response.</td>
            </tr>
            <tr>
              <td class="py-2.5 px-3 font-semibold text-emerald-400">Normal / Healthy Weight</td>
              <td class="py-2.5 px-3 font-mono">18.5 – 24.9</td>
              <td class="py-2.5 px-3">Lowest statistical risk of cardiovascular disease, type 2 diabetes, and premature all-cause mortality.</td>
            </tr>
            <tr>
              <td class="py-2.5 px-3 font-semibold text-amber-400">Overweight (Pre-Obese)</td>
              <td class="py-2.5 px-3 font-mono">25.0 – 29.9</td>
              <td class="py-2.5 px-3">Moderate elevation in systemic blood pressure, dyslipidemia, and metabolic strain.</td>
            </tr>
            <tr>
              <td class="py-2.5 px-3 font-semibold text-rose-400">Obesity Class I</td>
              <td class="py-2.5 px-3 font-mono">30.0 – 34.9</td>
              <td class="py-2.5 px-3">Substantially increased risk of insulin resistance, sleep apnea, and osteoarthritis.</td>
            </tr>
            <tr>
              <td class="py-2.5 px-3 font-semibold text-red-500">Obesity Class II &amp; III</td>
              <td class="py-2.5 px-3 font-mono">&ge; 35.0</td>
              <td class="py-2.5 px-3">Severe cardiometabolic risk, non-alcoholic fatty liver disease, and significant joint impairment.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Ethnic-Specific Modifications: Asian &amp; South Asian Action Points</h2>
      <p>Substantial epidemiological research confirms that the relationship between BMI, body fat percentage, and chronic disease risk varies significantly across racial and ethnic groups. Asian and South Asian populations experience elevated risks of cardiovascular disease and type 2 diabetes at substantially lower BMI cutoffs than individuals of European ancestry. This heightened vulnerability stems from higher abdominal adiposity and visceral fat accumulation at lower overall weights.</p>
      <p>In response, the WHO Western Pacific Region (WPRO) and the Indian Council of Medical Research (ICMR) established revised regional action points:</p>
      <ul class="list-disc pl-5 my-4 space-y-2 text-sm text-[var(--muted-foreground)]">
        <li><strong>Asian Increasing Risk (Overweight Cutoff):</strong> 23.0 to 24.9 kg/m² (compared to 25.0 kg/m² in standard international criteria).</li>
        <li><strong>Asian High Risk (Obesity Cutoff):</strong> 25.0 kg/m² for Indian and South Asian populations (ICMR guidelines) and 27.5 kg/m² for broader East Asian populations (WHO WPRO).</li>
      </ul>

      <h2>Step-by-Step Practical Worked Examples</h2>

      <div class="my-6 space-y-4">
        <div class="p-5 rounded-xl border border-[var(--border)] bg-[var(--card)] space-y-3">
          <h3 class="text-base font-bold text-[var(--accent)] font-display uppercase tracking-wide">
            Worked Example 1: South Asian Adult Navigating Conflicting Cutoffs
          </h3>
          <p class="text-sm text-[var(--foreground)]">
            <strong>Persona: Amit</strong> | Age: 36 years | Stature: 174 cm (1.74 m) | Weight: 78 kg | Waist Circumference: 88 cm.
          </p>
          <div class="p-4 rounded-lg bg-[var(--muted)]/40 font-mono text-xs sm:text-sm space-y-1.5 leading-relaxed">
            <p><strong>Step 1: Calculate Stature Squared</strong>: 1.74 &times; 1.74 = <strong>3.0276 m²</strong></p>
            <p><strong>Step 2: Calculate BMI</strong>: 78 / 3.0276 = <strong>25.76 kg/m²</strong> (&approx; 25.8 kg/m²)</p>
            <p><strong>Step 3: Western WHO Classification</strong>: 25.8 falls into <em>Overweight</em> (25.0–29.9 kg/m²)</p>
            <p><strong>Step 4: ICMR South Asian Classification</strong>: 25.8 falls into <em>Class I Obesity</em> (&ge; 25.0 kg/m²)</p>
            <p><strong>Step 5: Waist-to-Height Ratio (WHtR) Check</strong>: 88 cm / 174 cm = <strong>0.505</strong> (&gt; 0.50 risk threshold)</p>
          </div>
          <p class="text-xs sm:text-sm text-[var(--muted-foreground)]">
            <strong>Clinical Interpretation & Action Plan:</strong> If Amit relied purely on a Western chart, he would be categorized as mildly overweight. Under South Asian clinical guidelines and his elevated WHtR, he carries high visceral metabolic risk. Actionable steps: Target a modest 300 kcal daily deficit, achieve 8,500 daily steps, and screen fasting blood glucose and lipid panels.
          </p>
        </div>

        <div class="p-5 rounded-xl border border-[var(--border)] bg-[var(--card)] space-y-3">
          <h3 class="text-base font-bold text-[var(--accent)] font-display uppercase tracking-wide">
            Worked Example 2: Normal Weight Obesity ("TOFI" Persona)
          </h3>
          <p class="text-sm text-[var(--foreground)]">
            <strong>Persona: Sunita</strong> | Age: 48 years | Stature: 158 cm (1.58 m) | Weight: 52 kg | Waist: 82 cm.
          </p>
          <div class="p-4 rounded-lg bg-[var(--muted)]/40 font-mono text-xs sm:text-sm space-y-1.5 leading-relaxed">
            <p><strong>Step 1: Calculate BMI</strong>: 52 / (1.58)² = 52 / 2.4964 = <strong>20.83 kg/m²</strong> (&approx; 20.8)</p>
            <p><strong>Step 2: Adult Standard Assessment</strong>: 20.8 is "Normal Healthy Weight" (18.5–24.9)</p>
            <p><strong>Step 3: Waist-to-Height Ratio Check</strong>: 82 cm / 158 cm = <strong>0.519</strong> (&gt; 0.50 threshold)</p>
          </div>
          <p class="text-xs sm:text-sm text-[var(--muted-foreground)]">
            <strong>Clinical Interpretation & Action Plan:</strong> Despite an ideal BMI, Sunita presents with severe sarcopenia (low skeletal muscle) and visceral abdominal fat. Her metabolic profile mirrors that of Class I obesity. Actionable steps: Do NOT lose weight; initiate progressive resistance training 3 days weekly and consume 1.4–1.6 g/kg of dietary protein to rebuild muscle tissue.
          </p>
        </div>
      </div>

      <h2>The 4-Quadrant BMI &amp; Waist Risk Decision Matrix</h2>
      <p>To avoid false positives in athletes and false negatives in normal weight obesity, reference this clinical triage matrix combining BMI with Waist-to-Height Ratio (WHtR):</p>

      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">Quadrant Profile</th>
              <th class="p-3">BMI Status</th>
              <th class="p-3">Waist (WHtR)</th>
              <th class="p-3">Clinical Assessment</th>
              <th class="p-3">Primary Action Strategy</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)] text-[var(--muted-foreground)]">
            <tr>
              <td class="p-3 font-semibold text-emerald-600 dark:text-emerald-400 font-bold">Q1: Lean & Healthy</td>
              <td class="p-3 font-mono">18.5–24.9 (Asian 18.5–22.9)</td>
              <td class="p-3 font-mono text-emerald-600 dark:text-emerald-400">&lt; 0.50</td>
              <td class="p-3">Optimal metabolic health; low visceral fat</td>
              <td class="p-3">Maintain caloric balance, preserve lean muscle</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-amber-600 dark:text-amber-400 font-bold">Q2: Normal Weight Obesity</td>
              <td class="p-3 font-mono">18.5–24.9 (Asian 18.5–22.9)</td>
              <td class="p-3 font-mono text-rose-500 font-bold">&ge; 0.50</td>
              <td class="p-3">Hidden visceral fat, sarcopenic muscle deficit</td>
              <td class="p-3">Resistance training, increase protein (1.6 g/kg), do not crash diet</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-blue-500 font-bold">Q3: Muscular Athlete</td>
              <td class="p-3 font-mono">&ge; 25.0 (Asian &ge; 23.0)</td>
              <td class="p-3 font-mono text-emerald-600 dark:text-emerald-400">&lt; 0.50</td>
              <td class="p-3">False positive; dense muscle mass, low body fat</td>
              <td class="p-3">No weight loss required; track performance & blood pressure</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-rose-600 dark:text-rose-400 font-bold">Q4: Cardiometabolic Risk</td>
              <td class="p-3 font-mono">&ge; 25.0 (Asian &ge; 23.0)</td>
              <td class="p-3 font-mono text-rose-500 font-bold">&ge; 0.50</td>
              <td class="p-3">True excess adiposity; heightened vascular risk</td>
              <td class="p-3">300–500 kcal deficit, daily Zone 2 walking, check HbA1c/lipids</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Category-by-Category User Guidance</h2>
      <div class="my-4 space-y-3">
        <div class="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
          <h4 class="font-bold text-sm text-sky-500">Underweight (&lt; 18.5 kg/m²)</h4>
          <p class="text-xs sm:text-sm text-[var(--muted-foreground)] pt-1">
            Focus on nutrient-dense calorie surplus (+300 to +500 kcal/day) incorporating healthy fats (avocados, nuts, olive oil) and consistent protein (1.6 g/kg). Pair with progressive resistance training to promote functional muscle mass accretion rather than purely subcutaneous fat.
          </p>
        </div>
        <div class="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
          <h4 class="font-bold text-sm text-emerald-500">Normal Weight (18.5–24.9 kg/m² / Asian 18.5–22.9)</h4>
          <p class="text-xs sm:text-sm text-[var(--muted-foreground)] pt-1">
            Prioritize body recomposition and metabolic flexibility. Maintain daily energy balance, perform at least 150 minutes of weekly Zone 2 aerobic conditioning, and monitor waist circumference annually to guard against insidious visceral fat creep.
          </p>
        </div>
        <div class="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
          <h4 class="font-bold text-sm text-amber-500">Overweight (25.0–29.9 kg/m² / Asian 23.0–24.9)</h4>
          <p class="text-xs sm:text-sm text-[var(--muted-foreground)] pt-1">
            Implement a moderate 300 to 500 kcal daily energy deficit. Prioritize high-satiety dietary fiber (30+ grams/day) and structured resistance training to ensure weight lost is adipose tissue rather than skeletal muscle.
          </p>
        </div>
        <div class="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
          <h4 class="font-bold text-sm text-rose-500">Obesity (&ge; 30.0 kg/m² / Asian &ge; 25.0)</h4>
          <p class="text-xs sm:text-sm text-[var(--muted-foreground)] pt-1">
            Consult a physician for metabolic blood panels (fasting glucose, HbA1c, comprehensive lipid panel). Utilize low-impact cardiovascular exercise (swimming, cycling, brisk walking) to protect knee and hip joint cartilage while implementing sustainable dietary changes.
          </p>
        </div>
      </div>

      <h2>Age-Specific Interpretations &amp; The Geriatric Obesity Paradox</h2>
      <p>Standard adult BMI cutoffs apply uniformly from age 20 to 64, but clinical interpretations must shift substantially for geriatric adults aged 65 and older. Multiple large-scale epidemiological meta-analyses (including studies published in <em>The Lancet</em> and <em>American Journal of Clinical Nutrition</em>) demonstrate a U-shaped or J-shaped mortality curve in older adults, known as the <strong>Geriatric Obesity Paradox</strong>:</p>
      <ul class="list-disc pl-5 my-4 space-y-2 text-sm text-[var(--muted-foreground)]">
        <li><strong>Frailty &amp; Underweight Danger:</strong> In adults over 65, a BMI below 22.0 kg/m² is strongly associated with accelerated sarcopenia, osteoporosis, hip fractures, post-surgical complications, and elevated all-cause mortality.</li>
        <li><strong>Protective Adiposity Reserve:</strong> Older adults with a "mildly overweight" BMI between <strong>25.0 and 28.5 kg/m²</strong> exhibit the lowest statistical mortality rates, as modest subcutaneous lipid reserves provide vital energy buffering during acute illnesses, major surgeries, or prolonged hospitalizations.</li>
      </ul>

      <h2>Scientific References</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>World Health Organization. <em>Appropriate body-mass index for Asian populations and its implications for policy and intervention strategies.</em> Lancet 2004; 363(9403):157-163.</li>
        <li>Flegal KM, et al. <em>Association of all-cause mortality with overweight and obesity using standard body mass index categories.</em> JAMA 2013; 309(1):71-82.</li>
        <li>Romero-Corral A, et al. <em>Normal weight obesity: a risk factor for cardiometabolic dysregulation and cardiovascular mortality.</em> Eur Heart J 2010; 31(6):737-746.</li>
        <li>Winter JE, et al. <em>BMI and all-cause mortality in older adults: a meta-analysis.</em> Am J Clin Nutr 2014; 99(4):875-890.</li>
        <li>Misra A, et al. <em>Consensus statement for diagnosis of obesity, abdominal obesity and the metabolic syndrome for Asian Indians.</em> J Assoc Physicians India 2009; 57:163-170.</li>
      </ul>
`;

const bmiInterpHi = `
      <h2>बॉडी मास इंडेक्स (बीएमआई) की वैज्ञानिक व्याख्या</h2>
      <p>बॉडी मास इंडेक्स (बीएमआई) <strong>विश्व स्वास्थ्य संगठन (WHO)</strong> द्वारा वयस्कों के वजन की स्थिति को वर्गीकृत करने के लिए इस्तेमाल किया जाने वाला प्राथमिक जनसंख्या स्क्रीनिंग टूल है। यह शरीर के वजन (किलोग्राम) को ऊंचाई के वर्ग (मीटर²) से विभाजित करके निकाला जाता है (kg/m²)।</p>
      <p>बीएमआई केवल ऊंचाई और वजन का अनुपात बताता है; यह सीधे तौर पर मांसपेशियों, हड्डियों के घनत्व और चर्बी में अंतर नहीं करता। इसलिए, नैदानिक रूप से बीएमआई का उपयोग स्वतंत्र बीमारी निदान के बजाय समग्र चयापचय जोखिम को समझने के शुरुआती चरण के रूप में किया जाता है।</p>

      <h2>डब्ल्यूएचओ मानक वयस्क वर्गीकरण तालिका</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left text-sm border-collapse">
          <thead>
            <tr class="border-b border-[var(--border)] text-[var(--foreground)] font-bold">
              <th class="py-2.5 px-3">श्रेणी</th>
              <th class="py-2.5 px-3">मानक सीमा (kg/m²)</th>
              <th class="py-2.5 px-3">स्वास्थ्य जोखिम प्रोफाइल</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)]/60 text-[var(--muted-foreground)]">
            <tr>
              <td class="py-2.5 px-3 font-semibold text-sky-400">कम वजन (Underweight)</td>
              <td class="py-2.5 px-3 font-mono">&lt; 18.5</td>
              <td class="py-2.5 px-3">पोषक तत्वों की कमी, ऑस्टियोपोरोसिस और कमजोर प्रतिरक्षा प्रणाली का जोखिम।</td>
            </tr>
            <tr>
              <td class="py-2.5 px-3 font-semibold text-emerald-400">सामान्य वजन (Normal)</td>
              <td class="py-2.5 px-3 font-mono">18.5 – 24.9</td>
              <td class="py-2.5 px-3">हृदय रोग, टाइप-2 डायबिटीज और अकाल मृत्यु का न्यूनतम सांख्यिकीय जोखिम।</td>
            </tr>
            <tr>
              <td class="py-2.5 px-3 font-semibold text-amber-400">अधिक वजन (Overweight)</td>
              <td class="py-2.5 px-3 font-mono">25.0 – 29.9</td>
              <td class="py-2.5 px-3">रक्तचाप, डिस्लिपिडेमिया और चयापचय तनाव का मध्यम जोखिम।</td>
            </tr>
            <tr>
              <td class="py-2.5 px-3 font-semibold text-rose-400">मोटापा श्रेणी I (Obesity I)</td>
              <td class="py-2.5 px-3 font-mono">30.0 – 34.9</td>
              <td class="py-2.5 px-3">इंसुलिन प्रतिरोध, स्लीप एप्निया और जोड़ों के दर्द का उच्च जोखिम।</td>
            </tr>
            <tr>
              <td class="py-2.5 px-3 font-semibold text-red-500">गंभीर मोटापा (Obesity II &amp; III)</td>
              <td class="py-2.5 px-3 font-mono">&ge; 35.0</td>
              <td class="py-2.5 px-3">गंभीर हृदय रोग, फैटी लिवर और गतिशीलता में अत्यधिक कठिनाई।</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>भारतीय एवं एशियाई आबादी के लिए संशोधित मानक (ICMR Guidelines)</h2>
      <p>द लैंसेट (Lancet 2004) और आईसीएमआर (ICMR 2009) के अध्ययनों के अनुसार, एशियाई और भारतीय लोगों में कम वजन पर भी आंतरिक चर्बी (विसेरल फैट) अधिक पाई जाती है:</p>
      <ul class="list-disc pl-5 my-3 space-y-1.5 text-xs sm:text-sm text-[var(--muted-foreground)]">
        <li><strong>एशियाई अधिक वजन सीमा:</strong> 23.0 से 24.9 kg/m² (पश्चिमी देशों में यह 25.0 से शुरू होती है)।</li>
        <li><strong>एशियाई मोटापा सीमा:</strong> 25.0 kg/m² या अधिक (पश्चिमी देशों में यह 30.0 से शुरू होती है)।</li>
      </ul>

      <h2>कदम-दर-कदम व्यावहारिक उदाहरण (Worked Examples)</h2>

      <div class="my-6 space-y-4">
        <div class="p-5 rounded-xl border border-[var(--border)] bg-[var(--card)] space-y-3">
          <h3 class="text-base font-bold text-[var(--accent)] font-display uppercase tracking-wide">
            उदाहरण 1: एशियाई वयस्क और कटऑफ का अंतर
          </h3>
          <p class="text-sm text-[var(--foreground)]">
            <strong>व्यक्ति: अमित</strong> | उम्र: 36 वर्ष | ऊंचाई: 174 सेमी (1.74 मी) | वजन: 78 किग्रा | कमर: 88 सेमी.
          </p>
          <div class="p-4 rounded-lg bg-[var(--muted)]/40 font-mono text-xs sm:text-sm space-y-1.5 leading-relaxed">
            <p><strong>स्टेप 1: ऊंचाई का वर्ग</strong>: 1.74 &times; 1.74 = <strong>3.0276 मी²</strong></p>
            <p><strong>स्टेप 2: बीएमआई की गणना</strong>: 78 / 3.0276 = <strong>25.76 kg/m²</strong> (&approx; 25.8)</p>
            <p><strong>स्टेप 3: पश्चिमी WHO चार्ट</strong>: 25.8 = <em>ओवरवेट (अधिक वजन)</em> श्रेणी</p>
            <p><strong>स्टेप 4: भारतीय ICMR चार्ट</strong>: 25.8 = <em>मोटापा श्रेणी I (Obesity I)</em> श्रेणी</p>
            <p><strong>स्टेप 5: कमर-से-ऊंचाई अनुपात (WHtR)</strong>: 88 / 174 = <strong>0.505</strong> (&gt; 0.50 जोखिम सीमा)</p>
          </div>
          <p class="text-xs sm:text-sm text-[var(--muted-foreground)]">
            <strong>व्यावहारिक सलाह:</strong> पश्चिमी पैमाने पर केवल हल्का अधिक वजन दिखने के बावजूद, भारतीय मानकों के अनुसार अमित क्लास I मोटापे के दायरे में है। उसे रोजाना 8,500 कदम चलने, चीनी कम करने और ब्लड शुगर जांचने की सलाह दी जाती है।
          </p>
        </div>

        <div class="p-5 rounded-xl border border-[var(--border)] bg-[var(--card)] space-y-3">
          <h3 class="text-base font-bold text-[var(--accent)] font-display uppercase tracking-wide">
            उदाहरण 2: सामान्य वजन मोटापा ("TOFI" स्थिति)
          </h3>
          <p class="text-sm text-[var(--foreground)]">
            <strong>व्यक्ति: सुनीता</strong> | उम्र: 48 वर्ष | ऊंचाई: 158 सेमी | वजन: 52 किग्रा | कमर: 82 सेमी.
          </p>
          <div class="p-4 rounded-lg bg-[var(--muted)]/40 font-mono text-xs sm:text-sm space-y-1.5 leading-relaxed">
            <p><strong>स्टेप 1: बीएमआई गणना</strong>: 52 / (1.58)² = <strong>20.8 kg/m²</strong> (मानक रूप से सामान्य)</p>
            <p><strong>स्टेप 2: कमर-से-ऊंचाई अनुपात</strong>: 82 / 158 = <strong>0.519</strong> (&gt; 0.50 सुरक्षित सीमा से अधिक)</p>
          </div>
          <p class="text-xs sm:text-sm text-[var(--muted-foreground)]">
            <strong>व्यावहारिक सलाह:</strong> वजन सही होने के बावजूद पेट पर विसरल चर्बी अधिक है और मांसपेशियां कम हैं। सुनीता को वजन घटाने के लिए भूखा रहने के बजाय स्ट्रेंथ ट्रेनिंग करने और प्रोटीन बढ़ाने की आवश्यकता है।
          </p>
        </div>
      </div>

      <h2>बीएमआई एवं कमर अनुपात की 4-क्वाड्रेंट निर्णय मैट्रिक्स</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">स्थिति</th>
              <th class="p-3">बीएमआई</th>
              <th class="p-3">कमर अनुपात (WHtR)</th>
              <th class="p-3">स्वास्थ्य मूल्यांकन</th>
              <th class="p-3">कार्रवाई की प्राथमिकता</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)] text-[var(--muted-foreground)]">
            <tr>
              <td class="p-3 font-semibold text-emerald-600 dark:text-emerald-400 font-bold">1: स्वस्थ व लीन</td>
              <td class="p-3 font-mono">18.5–24.9 (एशियाई 18.5–22.9)</td>
              <td class="p-3 font-mono text-emerald-600 dark:text-emerald-400">&lt; 0.50</td>
              <td class="p-3">उत्कृष्ट चयापचय स्वास्थ्य</td>
              <td class="p-3">वर्तमान दिनचर्या जारी रखें</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-amber-600 dark:text-amber-400 font-bold">2: सामान्य वजन मोटापा (TOFI)</td>
              <td class="p-3 font-mono">18.5–24.9 (एशियाई 18.5–22.9)</td>
              <td class="p-3 font-mono text-rose-500 font-bold">&ge; 0.50</td>
              <td class="p-3">छिपी हुई आंतरिक पेट की चर्बी</td>
              <td class="p-3">वजन घटाने से बचें, स्ट्रेंथ ट्रेनिंग करें, प्रोटीन लें</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-blue-500 font-bold">3: मांसपेशीयुक्त एथलीट</td>
              <td class="p-3 font-mono">&ge; 25.0 (एशियाई &ge; 23.0)</td>
              <td class="p-3 font-mono text-emerald-600 dark:text-emerald-400">&lt; 0.50</td>
              <td class="p-3">घनी मांसपेशियां, कम चर्बी (फाल्स पॉजिटिव)</td>
              <td class="p-3">डाइट कम करने की कोई जरूरत नहीं</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-rose-600 dark:text-rose-400 font-bold">4: चयापचय जोखिम (मोटापा)</td>
              <td class="p-3 font-mono">&ge; 25.0 (एशियाई &ge; 23.0)</td>
              <td class="p-3 font-mono text-rose-500 font-bold">&ge; 0.50</td>
              <td class="p-3">अत्यधिक चर्बी, हृदय व शुगर का वास्तविक जोखिम</td>
              <td class="p-3">300-500 कैलोरी की कमी, दैनिक वॉक, लिपिड/HbA1c जांच</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>वैज्ञानिक संदर्भ</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>World Health Organization. <em>Appropriate body-mass index for Asian populations.</em> Lancet 2004; 363:157-163.</li>
        <li>Romero-Corral A, et al. <em>Normal weight obesity: a risk factor for cardiometabolic dysregulation.</em> Eur Heart J 2010; 31:737-746.</li>
        <li>Winter JE, et al. <em>BMI and all-cause mortality in older adults: a meta-analysis.</em> Am J Clin Nutr 2014; 99:875-890.</li>
        <li>Misra A, et al. <em>Consensus statement for diagnosis of obesity for Asian Indians.</em> JAPI 2009; 57:163-170.</li>
      </ul>
`;

// Helper regex replace function for guidelinesAndStrategiesArticles
function replaceArticleHtml(key, enHtml, hiHtml) {
  const keyEscaped = key.replace(/-/g, '\\-');
  const reg = new RegExp(`("${keyEscaped}":\\s*{[\\s\\S]*?"contentHtml":\\s*{[\\s\\S]*?"en":\\s*\`)([\\s\\S]*?)(\`[\\s\\S]*?"hi":\\s*\`)([\\s\\S]*?)(\`[\\s\\S]*?}\\s*},)`);
  if (!reg.test(content)) {
    console.error(`Regex failed for ${key}`);
    return false;
  }
  content = content.replace(reg, (match, p1, p2, p3, p4, p5) => {
    return p1 + enHtml + p3 + hiHtml + p5;
  });
  console.log(`Successfully replaced ${key}`);
  return true;
}

replaceArticleHtml('bmi-interpretation-guidelines', bmiInterpEn, bmiInterpHi);

if (isCrlf) content = content.replace(/\n/g, '\r\n');
fs.writeFileSync(filePath, content, 'utf8');
console.log('Saved updated bmi-interpretation-guidelines in guidelinesAndStrategiesArticles.ts');

