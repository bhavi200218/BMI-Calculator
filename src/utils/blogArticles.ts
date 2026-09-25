export const blogArticles: Record<string, any> = {
  'bmi-calculator-india': {
    title: {
      en: 'BMI Calculator India (2026 Guide): Revised WHO Ranges, Formula & Chart',
      hi: 'बीएमआई कैलकुलेटर इंडिया (2026 गाइड): संशोधित डब्ल्यूएचओ सीमा, फॉर्मूला और चार्ट',
      ko: '인도 BMI 계산기 (2026 가이드): 개정된 WHO 범주, 공식 및 차트',
      de: 'BMI Rechner Indien (Leitfaden 2026): WHO-Standards, Formel & Tabelle',
      es: 'Calculadora de IMC India (Guía 2026): Rangos de la OMS, Fórmula y Tabla',
      fr: 'Calculateur IMC Inde (Guide 2026) : Normes OMS, Formule et Tableau'
    },
    category: {
      en: 'BMI & Regional Standards',
      hi: 'बीएमआई और क्षेत्रीय मानक',
      ko: '지역별 BMI 지침',
      de: 'BMI & Regionale Standards',
      es: 'IMC y Normas Regionales',
      fr: 'IMC et Normes Régionales'
    },
    description: {
      en: 'Complete 2026 guide on BMI for Indians. Learn why 23 is overweight in India, WHO South-East Asia cut-offs, ideal weight chart, formula, and FAQs.',
      hi: 'भारतीयों के लिए बीएमआई की संपूर्ण 2026 गाइड। जानें कि भारत में 23 पर ही ओवरवेट क्यों माना जाता है, फॉर्मूला, चार्ट और उत्तर।',
      ko: '인도인 및 아시아인을 위한 BMI 2026 가이드. 아시아인 과체중 기준이 23인 이유와 WHO 지침, 공식 및 FAQ 안내.',
      de: 'Vollständiger Leitfaden zum BMI für asiatische Bevölkerungen. Warum 23 als Übergewicht gilt, WHO-Standards und Formeln.',
      es: 'Guía completa sobre el IMC para poblaciones asiáticas. Aprende por qué 23 es sobrepeso, límites de la OMS y fórmulas.',
      fr: 'Guide complet sur l\'IMC pour les populations asiatiques. Découvrez pourquoi 23 est un surpoids, normes OMS et formules.'
    },
    contentHtml: {
      en: `
        <h2>Overview of BMI for Indian & South Asian Populations</h2>
        <p>Body Mass Index (BMI) is an internationally recognized clinical screening tool that measures total body mass relative to height squared (expressed as kg/m²). However, clinical consensus published by the <strong>World Health Organization (WHO)</strong>, the <strong>Indian Council of Medical Research (ICMR)</strong>, and the <strong>Diabetes India Consensus Group</strong> confirms that standard Western BMI cut-offs fail to diagnose health risks in South Asian individuals accurately.</p>
        <p>In South Asian and Indian adults, metabolic disorders—such as Type 2 Diabetes, hypertension, fatty liver disease, and coronary artery disease—manifest at significantly lower BMI levels compared to Western populations. As a result, the WHO South-East Asia Regional Office established revised BMI classifications tailored specifically to Indian physiology.</p>

        <h2>Why 23.0 kg/m² is Overweight in India (The WHO Asian Cut-off)</h2>
        <p>Under Western BMI standards, a BMI of 25.0 kg/m² marks the start of the overweight category. However, for Indians and South Asians, clinical research shows that metabolic risk begins at a lower cutoff of <strong>23.0 kg/m²</strong>.</p>
        <p>The primary driver behind this disparity is body composition: South Asian populations exhibit the <em>"Thin-Fat Phenotype"</em> (TOFI - Thin Outside, Fat Inside). Indian individuals tend to have a higher body fat percentage and greater abdominal visceral adiposity (deep internal fat surrounding abdominal organs) at identical BMI numbers compared to Caucasians, combined with lower skeletal muscle mass.</p>

        <h2>WHO & ICMR Indian BMI Classification Chart</h2>
        <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
          <table class="w-full text-left border-collapse text-sm">
            <thead>
              <tr class="border-b border-[var(--border)] bg-[var(--muted)] text-[var(--foreground)] font-bold">
                <th class="p-3">Category</th>
                <th class="p-3">Standard Western Cut-off</th>
                <th class="p-3 text-[var(--accent)] font-extrabold">WHO Asian / Indian Cut-off</th>
                <th class="p-3">Clinical Risk Profile</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[var(--border)]">
              <tr>
                <td class="p-3 font-semibold">Underweight</td>
                <td class="p-3 font-mono">&lt; 18.5 kg/m²</td>
                <td class="p-3 font-mono font-bold text-[var(--accent)]">&lt; 18.5 kg/m²</td>
                <td class="p-3">Nutritional deficiency &amp; low muscle density</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold">Normal / Healthy Weight</td>
                <td class="p-3 font-mono">18.5 – 24.9 kg/m²</td>
                <td class="p-3 font-mono font-bold text-[var(--accent)]">18.5 – 22.9 kg/m²</td>
                <td class="p-3">Optimal metabolic baseline</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold">Overweight (Increased Risk)</td>
                <td class="p-3 font-mono">25.0 – 29.9 kg/m²</td>
                <td class="p-3 font-mono font-bold text-[var(--accent)]">23.0 – 27.4 kg/m²</td>
                <td class="p-3">Moderate risk for Type 2 Diabetes &amp; fatty liver</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold">Obesity Class I (High Risk)</td>
                <td class="p-3 font-mono">30.0 – 34.9 kg/m²</td>
                <td class="p-3 font-mono font-bold text-[var(--accent)]">27.5 – 32.4 kg/m²</td>
                <td class="p-3">High risk for cardiovascular strain &amp; hypertension</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold">Obesity Class II (Very High Risk)</td>
                <td class="p-3 font-mono">≥ 35.0 kg/m²</td>
                <td class="p-3 font-mono font-bold text-[var(--accent)]">≥ 32.5 kg/m²</td>
                <td class="p-3">Severe clinical metabolic risk</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>How to Calculate BMI for Indian Adults</h2>
        <p>Calculating your BMI uses the standard metric equation:</p>
        <div class="my-6 p-6 rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 font-mono text-sm leading-relaxed">
          <p class="font-bold text-[var(--accent)] mb-1">Metric Formula Equation:</p>
          <p class="text-[var(--foreground)] font-bold text-base">BMI = Weight (kg) / [Height (m)]²</p>
          <p class="text-xs text-[var(--muted-foreground)] mt-2">Example: For an adult weighing 68 kg with a height of 170 cm (1.70 m): 68 / (1.70 × 1.70) = 23.53 kg/m² (Classified as Overweight under WHO Asian cut-offs).</p>
        </div>

        <h2>Waist Circumference Cut-offs for South Asians</h2>
        <p>In addition to computing your BMI score, medical consensus strongly recommends measuring your waist circumference. Abdominal visceral fat carries a much stronger correlation with Type 2 Diabetes and heart disease than total scale weight.</p>
        <ul>
          <li><strong>Indian Men:</strong> High risk cutoff is <strong>&gt; 90 cm (35 inches)</strong></li>
          <li><strong>Indian Women:</strong> High risk cutoff is <strong>&gt; 80 cm (31.5 inches)</strong></li>
        </ul>
        <p>If your BMI exceeds 23.0 kg/m² or your waist circumference exceeds these clinical thresholds, physicians recommend scheduling annual blood glucose (HbA1c) and lipid profile tests.</p>

        <h2>Summary & Next Steps</h2>
        <p>Maintaining a healthy BMI score between <strong>18.5 and 22.9 kg/m²</strong>, eating a whole-food diet rich in protein and fiber, and completing 150 minutes of aerobic and strength exercise weekly are essential for long-term health in South Asian adults.</p>
      `,
      hi: `
        <h2>भारतीयों के लिए बीएमआई का महत्व</h2>
        <p>बॉडी मास इंडेक्स (BMI) एक अंतरराष्ट्रीय नैदानिक मापदंड है जो ऊंचाई के अनुपात में शरीर के वजन का मूल्यांकन करता है। हालांकि, विश्व स्वास्थ्य संगठन (WHO) और इंडियन काउंसिल ऑफ मेडिकल रिसर्च (ICMR) के अनुसार, भारतीयों के लिए बीएमआई की सीमाएं सामान्य पश्चिमी मानकों से अलग हैं।</p>
        
        <h2>भारत में 23.0 kg/m² पर ओवरवेट क्यों माना जाता है?</h2>
        <p>पश्चिमी देशों में 25.0 kg/m² को ओवरवेट माना जाता है, लेकिन भारतीय आबादी में 23.0 kg/m² पर ही टाइप 2 डायबिटीज और हृदय रोग का खतरा शुरू हो जाता है। इसका मुख्य कारण <em>"थिन-फैट फेनोटाइप"</em> है, जिसमें वजन कम दिखने के बावजूद पेट के अंदरूनी अंगों में वसा (विस्कल फैट) अधिक जमा होती है।</p>

        <h2>डब्ल्यूएचओ एशियाई बीएमआई तालिका</h2>
        <ul>
          <li><strong>कम वजन (Underweight):</strong> 18.5 kg/m² से कम</li>
          <li><strong>सामान्य वजन (Normal Weight):</strong> 18.5 – 22.9 kg/m²</li>
          <li><strong>अधिक वजन (Overweight):</strong> 23.0 – 27.4 kg/m²</li>
          <li><strong>मोटापा (Obesity):</strong> 27.5 kg/m² या अधिक</li>
        </ul>
      `
    }
  },

  'what-is-bmi': {
    title: {
      en: 'What is BMI? Body Mass Index Definition, Calculation & Health Meaning',
      hi: 'बीएमआई क्या है? बॉडी मास इंडेक्स की पूरी जानकारी और स्वास्थ्य प्रभाव',
      ko: 'BMI(체질량지수)란? 정의, 계산 법 및 건강 지표 안내',
      de: 'Was ist der BMI? Definition, Berechnung & Bedeutung für die Gesundheit',
      es: '¿Qué es el IMC? Definición del Índice de Masa Corporal y Salud',
      fr: 'Qu\'est-ce que l\'IMC ? Définition, Calcul et Signification pour la Santé'
    },
    category: {
      en: 'BMI & Health Basics',
      hi: 'बीएमआई और स्वास्थ्य मूल बातें',
      ko: 'BMI 기초',
      de: 'BMI & Grundlagen',
      es: 'Conceptos Básicos del IMC',
      fr: 'Bases de l\'IMC'
    },
    description: {
      en: 'Comprehensive 2026 guide to Body Mass Index (BMI). Understand what BMI is, how it is calculated, WHO scale ranges, and what your score means.',
      hi: 'बॉडी मास इंडेक्स (BMI) की संपूर्ण गाइड। जानें कि बीएमआई क्या है, इसकी गणना कैसे की जाती है और डब्ल्यूएचओ श्रेणियां।',
      ko: '체질량지수(BMI) 2026 종합 가이드. BMI의 정의, 계산 법, WHO 진단 범주 및 점수의 의미.',
      de: 'Umfassender BMI-Leitfaden 2026. Was der BMI ist, wie er berechnet wird und was Ihr Wert bedeutet.',
      es: 'Guía completa sobre el Índice de Masa Corporal (IMC). Qué es, cómo se calcula y rangos de la OMS.',
      fr: 'Guide complet sur l\'Indice de Masse Corporelle (IMC). Définition, calcul et plages de l\'OMS.'
    },
    contentHtml: {
      en: `
        <h2>What is Body Mass Index (BMI)?</h2>
        <p><strong>Body Mass Index (BMI)</strong> is a statistical and clinical health screening metric that compares an adult's body weight to their height. Developed in the 19th century by Belgian mathematician and statistician <em>Adolphe Quetelet</em>, BMI provides a quick, standardized method to categorize individuals into distinct weight brackets: Underweight, Healthy Weight, Overweight, and Obese.</p>
        <p>Today, major global medical organizations—including the <strong>World Health Organization (WHO)</strong> and the <strong>Centers for Disease Control and Prevention (CDC)</strong>—utilize BMI as an initial population screening tool to identify potential health risks associated with undernutrition or excess body fat.</p>

        <h2>How is BMI Calculated? (The Official Formula)</h2>
        <p>BMI is computed by dividing an individual's mass in kilograms by the square of their height in meters. It can also be calculated using imperial measurements (pounds and inches) with a conversion factor of 703.</p>

        <div class="my-6 p-6 rounded-xl border border-[var(--border)] bg-[var(--card)] space-y-4">
          <div>
            <p class="font-bold text-[var(--accent)] text-sm uppercase tracking-wider">1. Metric BMI Formula Equation:</p>
            <p class="text-[var(--foreground)] font-mono font-bold text-lg">BMI = Weight (kg) ÷ [Height (m)]²</p>
          </div>
          <hr class="border-[var(--border)]" />
          <div>
            <p class="font-bold text-[var(--accent)] text-sm uppercase tracking-wider">2. Imperial BMI Formula Equation:</p>
            <p class="text-[var(--foreground)] font-mono font-bold text-lg">BMI = [Weight (lbs) ÷ Height (inches)²] × 703</p>
          </div>
        </div>

        <h2>WHO Adult BMI Scale & Health Categories</h2>
        <p>For most general adult populations aged 20 and older, the World Health Organization classifies BMI scores into four major categories:</p>
        
        <ul>
          <li><strong>Underweight (&lt; 18.5 kg/m²):</strong> Indicates low body mass relative to height. May correlate with nutrient deficiencies, compromised immune function, and lower bone density.</li>
          <li><strong>Healthy Weight (18.5 – 24.9 kg/m²):</strong> Represents the statistically optimal weight range associated with the lowest overall mortality and chronic disease risk.</li>
          <li><strong>Overweight (25.0 – 29.9 kg/m²):</strong> Indicates moderate excess body weight. Associated with elevated risk for Type 2 Diabetes, hypertension, and cardiovascular strain.</li>
          <li><strong>Obesity Class I to III (≥ 30.0 kg/m²):</strong> Indicates significant excess adiposity requiring clinical monitoring for metabolic and cardiovascular conditions.</li>
        </ul>

        <h2>What BMI Does Not Measure</h2>
        <p>While BMI is highly effective for rapid population screening, it has recognized clinical limitations for individual diagnosis:</p>
        <ol>
          <li><strong>Does Not Differentiate Muscle from Fat:</strong> Muscle tissue is substantially denser than adipose fat. Muscular athletes often register high BMI scores despite having low body fat.</li>
          <li><strong>Does Not Measure Fat Distribution:</strong> Abdominal visceral fat poses a much higher cardiovascular risk than subcutaneous fat on the hips or legs. BMI cannot measure waist circumference.</li>
          <li><strong>Ignores Age and Sex Variances:</strong> Women naturally carry higher physiological fat levels than men, and older seniors naturally lose skeletal muscle mass.</li>
        </ol>

        <h2>How to Use BMI Effectively</h2>
        <p>To get a complete view of your metabolic health, clinicians recommend pairing your BMI score with your <strong>Waist-to-Height Ratio (WHtR)</strong>, <strong>Basal Metabolic Rate (BMR)</strong>, and daily calorie expenditure (<strong>TDEE</strong>).</p>
      `,
      hi: `
        <h2>बीएमआई (BMI) क्या है?</h2>
        <p>बॉडी मास इंडेक्स (BMI) एक सांख्यिकीय और नैदानिक स्वास्थ्य उपकरण है जो व्यक्ति के वजन की तुलना उसकी ऊंचाई से करता है। विश्व स्वास्थ्य संगठन (WHO) और सीडीसी (CDC) इसका उपयोग पोषण और वजन संबंधी जोखिमों की जांच के लिए करते हैं।</p>

        <h2>बीएमआई की गणना कैसे की जाती है?</h2>
        <p>बीएमआई की गणना वजन (किग्रा में) को ऊंचाई के वर्ग (मीटर में) से विभाजित करके की जाती है:</p>
        <p><strong>BMI = वजन (kg) ÷ [ऊंचाई (m)]²</strong></p>

        <h2>डब्ल्यूएचओ बीएमआई श्रेणियां</h2>
        <ul>
          <li><strong>कम वजन (Underweight):</strong> 18.5 से कम</li>
          <li><strong>सामान्य वजन (Healthy Weight):</strong> 18.5 से 24.9</li>
          <li><strong>अधिक वजन (Overweight):</strong> 25.0 से 29.9</li>
          <li><strong>मोटापा (Obesity):</strong> 30.0 या अधिक</li>
        </ul>
      `
    }
  },

  'is-bmi-accurate': {
    title: {
      en: 'Is BMI Accurate? Evidence, Flaws & Oxford 2.5 Power Formula',
      hi: 'क्या बीएमआई सटीक है? साक्ष्य, सीमाएं और 2.5 घात फॉर्मूला',
      ko: 'BMI는 정확한가요? 증거, 한계 및 옥스포드 2.5 보정 공식',
      de: 'Ist der BMI genau? Fakten, Mängel & Oxford 2.5 Formel',
      es: '¿Es Preciso el IMC? Evidencia, Limitaciones y Fórmula 2.5',
      fr: 'L\'IMC est-il Précis ? Preuves, Limites et Formule 2.5'
    },
    category: {
      en: 'Research & Evidence',
      hi: 'शोध और साक्ष्य',
      ko: '연구 및 증거',
      de: 'Forschung & Fakten',
      es: 'Investigación y Evidencia',
      fr: 'Recherche et Preuves'
    },
    description: {
      en: 'Is BMI actually accurate for your body? Read 2026 medical evidence on muscle density flaws, Oxford height scaling formula, and WHO ethnic guidelines.',
      hi: 'क्या बीएमआई आपके लिए सटीक है? मांसपेशियों के घनत्व, ऊंचाई के भ्रम और डब्ल्यूएचओ दिशानिर्देशों पर 2026 का साक्ष्य पढ़ें।',
      ko: 'BMI가 내 몸에 정말 정확할까요? 근육 밀도 한계, 옥스포드 신장 보정 공식 및 2026 임상 연구 결과.',
      de: 'Ist der BMI für Ihren Körper wirklich genau? Lesen Sie klinische Fakten zu Muskeldichte und Höhenskalierung.',
      es: '¿Es el IMC realmente preciso para tu cuerpo? Lee la evidencia médica sobre densidad muscular y escala de altura.',
      fr: 'L\'IMC est-il vraiment précis pour votre corps ? Découvrez les preuves médicales sur la masse musculaire et la taille.'
    },
    contentHtml: {
      en: `
        <h2>Is BMI Accurate? The Truth About Standard Weight Scales</h2>
        <p>Millions of people calculate their Body Mass Index (BMI) daily and ask a fundamental question: <strong>Is BMI actually accurate for my unique body type?</strong></p>
        <p>The short answer: <em>BMI is an excellent population-level screening metric, but it contains major mathematical and physiological flaws when applied to individual health evaluation.</em> Medical research published in journals such as the <em>Lancet</em> and <em>Nature Medicine</em> highlights key areas where standard BMI distorts reality.</p>

        <h2>Flaw #1: The Muscular Athlete Paradox (Muscle vs. Adipose Fat)</h2>
        <p>Standard BMI treats every kilogram of mass identically. However, skeletal muscle tissue is significantly denser and heavier per unit of volume than adipose fat tissue. As a result, bodybuilders, weightlifters, and muscular athletes frequently register as "Overweight" or "Obese" on standard BMI charts despite having extremely healthy low body fat levels (6–12%).</p>

        <h2>Flaw #2: 2D Height Scaling Distortion & The Oxford 2.5 Formula</h2>
        <p>The standard BMI formula (<code>weight / height²</code>) divides mass by height squared. Mathematically, dividing by height squared assumes human body volume scales in two dimensions (like a flat square). In reality, humans grow three-dimensionally.</p>
        <p>Oxford mathematician <strong>Nick Trefethen</strong> demonstrated that standard 2D scaling penalizes tall adults (making tall people look heavier than they are) while undercounting fatness in short adults. He proposed the modernized <strong>3D Height-Adjusted BMI Formula</strong>:</p>

        <div class="my-6 p-6 rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 font-mono text-sm leading-relaxed">
          <p class="font-bold text-[var(--accent)] mb-1">Oxford 3D Height-Adjusted Equation:</p>
          <p class="text-[var(--foreground)] font-bold text-base">3D BMI = 1.3 × Weight (kg) / [Height (m)]²·⁵</p>
        </div>

        <h2>Flaw #3: Ignoring Abdominal Visceral Fat (Central Obesity)</h2>
        <p>BMI measures total scale weight, not fat location. Subcutaneous fat stored on the hips or thighs is relatively benign. In contrast, <strong>visceral fat</strong> stored deep inside the abdominal cavity surrounding vital organs secretes inflammatory cytokines that directly cause cardiovascular disease and insulin resistance.</p>
        <p>Up to 15% of adults with a "Normal" BMI have elevated waist circumferences, carrying significant hidden metabolic risk (the <em>"Normal Weight Obesity"</em> paradox).</p>

        <h2>Flaw #4: Ignoring Ethnic Body Composition Differences</h2>
        <p>World Health Organization (WHO) clinical data shows Asian and South Asian populations accumulate higher percentages of visceral fat at lower body mass indexes compared to Caucasians. This is why the WHO revised overweight cut-offs for Asian adults from 25.0 kg/m² down to <strong>23.0 kg/m²</strong>.</p>

        <h2>What You Should Use Instead of Plain BMI</h2>
        <p>Leading clinicians recommend evaluating three complementary metrics for a true health snapshot:</p>
        <ol>
          <li><strong>BMI Score:</strong> For baseline stature screening.</li>
          <li><strong>Waist-to-Height Ratio (WHtR):</strong> Keep your waist circumference to less than half your height (Waist ÷ Height &lt; 0.5).</li>
          <li><strong>BMR &amp; TDEE:</strong> To determine daily caloric intake needs.</li>
        </ol>
      `,
      hi: `
        <h2>क्या बीएमआई (BMI) सटीक है?</h2>
        <p>बीएमआई एक बेहतरीन प्राथमिक जांच मीट्रिक है, लेकिन जब इसे व्यक्तिगत स्वास्थ्य पर लागू किया जाता है तो इसमें कई शारीरिक और गणितीय सीमाएं पाई जाती हैं।</p>

        <h2>बीएमआई की प्रमुख सीमाएं:</h2>
        <ul>
          <li><strong>मांसपेशियों और फैट में अंतर न करना:</strong> मांसपेशियां फैट से घनी होती हैं। एथलीट अक्सर कम फैट के बावजूद 'ओवरवेट' श्रेणी में आ जाते हैं।</li>
          <li><strong>पेट की अंदरूनी वसा (Visceral Fat) की अनदेखी:</strong> बीएमआई यह नहीं बताता कि फैट कमर पर जमा है या पैरों पर।</li>
          <li><strong>ऊंचाई का भ्रम:</strong> मानक फॉर्मूला लंबे लोगों को अधिक वजन का दिखाता है। इसके लिए ऑक्सफोर्ड 2.5 फॉर्मूला का उपयोग किया जाता है।</li>
        </ul>
      `
    }
  },

  'bmr-vs-tdee-calculator': {
    title: {
      en: 'BMR vs. TDEE Calculator: Key Differences & Weight Loss Math',
      hi: 'बीएमआर बनाम टीडीईई कैलकुलेटर: मुख्य अंतर और वजन घटाने का फॉर्मूला',
      ko: 'BMR vs TDEE 계산기: 핵심 차이점 및 다이어트 칼로리 계산',
      de: 'BMR vs. TDEE Rechner: Unterschiede & Kalorienbedarf zum Abnehmen',
      es: 'Calculadora de BMR vs TDEE: Diferencias y Cálculo de Calorías',
      fr: 'Calculateur BMR vs TDEE : Différences et Calcul des Calories'
    },
    category: {
      en: 'Metabolic Science',
      hi: 'चयापचय विज्ञान',
      ko: '대사 과학',
      de: 'Stoffwechselwissenschaft',
      es: 'Ciencia Metabólica',
      fr: 'Science Métabolique'
    },
    description: {
      en: 'Understand the difference between BMR (Basal Metabolic Rate) and TDEE (Total Daily Energy Expenditure). Learn how to calculate daily deficit calories.',
      hi: 'बीएमआर और टीडीईई के बीच अंतर समझें। जानें कि वजन घटाने के लिए दैनिक कैलोरी की गणना कैसे करें।',
      ko: '기초대사량(BMR)과 일일 총 에너지 소비량(TDEE)의 차이점 및 칼로리 계산법.',
      de: 'Verstehen Sie den Unterschied zwischen BMR und TDEE. Kalorienbedarf zum Abnehmen berechnen.',
      es: 'Entiende la diferencia entre BMR y TDEE. Aprende a calcular el déficit calórico diario.',
      fr: 'Comprenez la différence entre BMR et TDEE. Calculez votre déficit calorique quotidien.'
    },
    contentHtml: {
      en: `
        <h2>Understanding BMR vs. TDEE</h2>
        <p>When planning weight loss, muscle gain, or athletic performance, understanding energy expenditure is crucial. Two essential acronyms dominate metabolic nutrition: <strong>BMR</strong> and <strong>TDEE</strong>.</p>

        <h2>1. What is BMR (Basal Metabolic Rate)?</h2>
        <p>Your <strong>Basal Metabolic Rate (BMR)</strong> is the absolute minimum number of calories your body burns in 24 hours while at complete rest in a thermo-neutral environment. BMR powers your vital life functions—including breathing, blood circulation, cellular repair, brain function, and body temperature regulation.</p>
        <p>The clinical gold standard for computing BMR is the <strong>Mifflin-St Jeor Equation</strong>:</p>

        <div class="my-6 p-6 rounded-xl border border-[var(--border)] bg-[var(--card)] font-mono text-sm leading-relaxed">
          <p class="font-bold text-[var(--accent)] mb-1">Mifflin-St Jeor Equations:</p>
          <p class="text-[var(--foreground)] font-bold">Men: BMR = (10 × weight kg) + (6.25 × height cm) - (5 × age yrs) + 5</p>
          <p class="text-[var(--foreground)] font-bold mt-1">Women: BMR = (10 × weight kg) + (6.25 × height cm) - (5 × age yrs) - 161</p>
        </div>

        <h2>2. What is TDEE (Total Daily Energy Expenditure)?</h2>
        <p>Your <strong>Total Daily Energy Expenditure (TDEE)</strong> is the total number of calories your body burns in 24 hours, accounting for BMR plus all physical movement, daily chores, work activity, and structured workout sessions.</p>
        <p>TDEE is calculated by multiplying your BMR by a <strong>Physical Activity Level (PAL) Factor</strong>:</p>

        <ul>
          <li><strong>Sedentary (Desk Job, little exercise):</strong> TDEE = BMR × 1.200</li>
          <li><strong>Lightly Active (1–3 workout days/week):</strong> TDEE = BMR × 1.375</li>
          <li><strong>Moderately Active (3–5 workout days/week):</strong> TDEE = BMR × 1.550</li>
          <li><strong>Very Active (6–7 heavy workout days/week):</strong> TDEE = BMR × 1.725</li>
          <li><strong>Extra Active (Heavy physical labor / double sessions):</strong> TDEE = BMR × 1.900</li>
        </ul>

        <h2>BMR vs. TDEE Comparison Table</h2>
        <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
          <table class="w-full text-left border-collapse text-sm">
            <thead>
              <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
                <th class="p-3">Feature</th>
                <th class="p-3">BMR (Basal Metabolic Rate)</th>
                <th class="p-3">TDEE (Total Daily Energy Expenditure)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[var(--border)]">
              <tr>
                <td class="p-3 font-semibold">Definition</td>
                <td class="p-3">Resting calorie burn to stay alive</td>
                <td class="p-3">Total daily calories burned with movement</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold">Activity Factor</td>
                <td class="p-3">Includes zero activity (Coma state)</td>
                <td class="p-3">Multiplies BMR by PAL factor (1.2 to 1.9)</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold">Usage Goal</td>
                <td class="p-3">Absolute caloric intake floor</td>
                <td class="p-3">Maintenance caloric target</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>How to Use TDEE for Weight Loss</h2>
        <p>To lose fat safely without sacrificing lean skeletal muscle, consume <strong>300 to 500 calories below your TDEE</strong> daily. Never consume fewer calories than your BMR score for prolonged periods.</p>
      `,
      hi: `
        <h2>बीएमआर (BMR) और टीडीईई (TDEE) में क्या अंतर है?</h2>
        <p>वजन घटाने या बढ़ाने के लिए कैलोरी को समझना आवश्यक है। बीएमआर और टीडीईई आपके शरीर की ऊर्जा खपत को मापते हैं।</p>
        
        <ul>
          <li><strong>BMR (बेसल मेटाबॉलिक रेट):</strong> विश्राम अवस्था में आपका शरीर जीवित रहने के लिए जितनी कैलोरी बर्न करता है।</li>
          <li><strong>TDEE (टोटल डेली एनर्जी एक्सपेंडिचर):</strong> दिनभर की शारीरिक गतिविधियों और व्यायाम को मिलाकर कुल बर्न की गई कैलोरी।</li>
        </ul>
      `
    }
  },

  'bmi-chart-for-men-women': {
    title: {
      en: 'BMI Chart for Men and Women (Age-Based Reference Ranges 2026)',
      hi: 'पुरुषों और महिलाओं के लिए बीएमआई चार्ट (आयु-आधारित संदर्भ सीमाएं)',
      ko: '남성 및 여성 BMI 차트 (2026 연령별 참조 범위)',
      de: 'BMI Tabelle für Männer und Frauen (Altersbasierte Referenzwerte 2026)',
      es: 'Tabla de IMC para Hombres y Mujeres (Rangos de Referencia por Edad 2026)',
      fr: 'Tableau d\'IMC pour Hommes et Femmes (Plages de Référence par Âge 2026)'
    },
    category: {
      en: 'Health & Age Standards',
      hi: 'स्वास्थ्य और आयु मानक',
      ko: '연령별 건강 지침',
      de: 'Altersstandards',
      es: 'Estándares por Edad',
      fr: 'Normes d\'Âge'
    },
    description: {
      en: 'Detailed gender and age-adjusted BMI reference chart. Compare body fat distribution traits between male and female adults.',
      hi: 'पुरुषों और महिलाओं के लिए विस्तृत बीएमआई संदर्भ चार्ट। लिंग और आयु के अनुसार स्वास्थ्य सीमाएं।',
      ko: '남성과 여성을 위한 상세 성별 및 연령 조정 BMI 참조 차트.',
      de: 'Detaillierte BMI-Referenztabelle für Männer und Frauen mit altersspezifischen Richtwerten.',
      es: 'Tabla de referencia de IMC detallada para hombres y mujeres ajustada por edad.',
      fr: 'Tableau de référence détaillé de l\'IMC pour hommes et femmes ajusté selon l\'âge.'
    },
    contentHtml: {
      en: `
        <h2>Gender Differences in BMI & Body Composition</h2>
        <p>Although standard Body Mass Index (BMI) formulas calculate height and weight identically for adult men and women, biological body composition differs significantly between sexes.</p>
        <p>Women naturally carry higher essential fat levels (10–13%) than men (2–5%) to support reproductive functions, endocrine regulation, and childbearing. Men typically possess greater skeletal muscle mass and higher bone mineral density.</p>

        <h2>Age-Based BMI Reference Chart for Adults</h2>
        <p>As adults age, natural physiological changes occur: lean skeletal muscle mass slowly declines (sarcopenia) while body fat percentage tends to increase. Illustrative reference ranges suggest target healthy BMI windows shift upward slightly in older adults (Note: WHO and CDC maintain a single adult BMI classification standard regardless of age):</p>

        <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
          <table class="w-full text-left border-collapse text-sm">
            <thead>
              <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
                <th class="p-3">BMI Category</th>
                <th class="p-3">Standard Adult Cutoff</th>
                <th class="p-3">Asian Cutoff Threshold</th>
                <th class="p-3">Health Reference Guidance</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[var(--border)]">
              <tr>
                <td class="p-3 font-semibold">Underweight</td>
                <td class="p-3 font-mono font-bold text-[var(--accent)]">&lt; 18.5 kg/m²</td>
                <td class="p-3 font-mono font-bold text-[var(--accent)]">&lt; 18.5 kg/m²</td>
                <td class="p-3">May indicate lean mass loss or nutritional deficit</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold">Healthy Weight</td>
                <td class="p-3 font-mono font-bold text-[var(--accent)]">18.5 – 24.9 kg/m²</td>
                <td class="p-3 font-mono font-bold text-[var(--accent)]">18.5 – 22.9 kg/m²</td>
                <td class="p-3">Standard baseline for lowest cardiometabolic risk</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold">Overweight</td>
                <td class="p-3 font-mono font-bold text-[var(--accent)]">25.0 – 29.9 kg/m²</td>
                <td class="p-3 font-mono font-bold text-[var(--accent)]">23.0 – 27.4 kg/m²</td>
                <td class="p-3">Increased risk window; monitor waist circumference</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold">Obesity Class I</td>
                <td class="p-3 font-mono font-bold text-[var(--accent)]">30.0 – 34.9 kg/m²</td>
                <td class="p-3 font-mono font-bold text-[var(--accent)]">27.5 – 32.4 kg/m²</td>
                <td class="p-3">Elevated metabolic risk factor</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold">Obesity Class II+</td>
                <td class="p-3 font-mono font-bold text-[var(--accent)]">&ge; 35.0 kg/m²</td>
                <td class="p-3 font-mono font-bold text-[var(--accent)]">&ge; 32.5 kg/m²</td>
                <td class="p-3">High clinical relevance for lifestyle guidance</td>
              </tr>
            </tbody>
          </table>
        </div>
      `,
      hi: `
        <h2>पुरुषों और महिलाओं के लिए बीएमआई चार्ट</h2>
        <p>महिलाओं में प्राकृतिक रूप से पुरुषों की तुलना में अधिक वसा (10–13%) पाई जाती है। इसलिए दोनों के स्वास्थ्य लक्ष्यों में मामूली अंतर होता है।</p>
      `
    }
  },

  'healthy-bmi-range-indians': {
    title: {
      en: 'Healthy BMI Range for Indians: Understanding Asian BMI Thresholds (23.0 kg/m²)',
      hi: 'भारतीयों के लिए स्वस्थ बीएमआई सीमा: एशियाई बीएमआई मानकों को समझें (23.0 kg/m²)',
      ko: '아시아인을 위한 건강 BMI 범위: 과체중 기준 23의 이유',
      de: 'Gesunder BMI-Bereich für asiatische Bevölkerungen (WHO-Standard)',
      es: 'Rango de IMC Saludable para Poblaciones Asiáticas (Límite OMS 23)',
      fr: 'Plage d\'IMC Santé pour les Populations Asiatiques (Seuil OMS 23)'
    },
    category: {
      en: 'Indian Health',
      hi: 'भारतीय स्वास्थ्य',
      ko: '아시아 건강',
      de: 'Regionale Gesundheit',
      es: 'Salud Regional',
      fr: 'Santé Régionale'
    },
    description: {
      en: 'In-depth analysis of WHO South-East Asia BMI guidelines. Discover why 18.5–22.9 is optimal for Indian adults.',
      hi: 'डब्ल्यूएचओ दक्षिण-पूर्व एशिया बीएमआई दिशानिर्देशों का विश्लेषण। जानें कि 18.5-22.9 भारतीयों के लिए सर्वश्रेष्ठ क्यों है।',
      ko: 'WHO 아시아-태평양 BMI 지침 분석. 아시아인에게 18.5~22.9가 최적인 이유.',
      de: 'Analyse der WHO-Richtlinien für asiatische Bevölkerungen. Warum 18,5–22,9 optimal ist.',
      es: 'Análisis de las pautas de la OMS para poblaciones asiáticas. Por qué 18.5–22.9 es el rango óptimo.',
      fr: 'Analyse des directives OMS pour les populations asiatiques. Pourquoi 18,5–22,9 est la plage optimale.'
    },
    contentHtml: {
      en: `
        <h2>Why Asian Adults Require Lower BMI Thresholds</h2>
        <p>Extensive clinical studies conducted by the World Health Organization (WHO) revealed that South Asian adults develop metabolic disease risk—including Type 2 Diabetes, abdominal visceral fat, and hypertension—at lower body weights compared to European populations.</p>
        
        <h2>The Optimal Indian BMI Range: 18.5 to 22.9 kg/m²</h2>
        <p>While Western standards consider 24.5 kg/m² healthy, the WHO South-East Asia Regional Office established that <strong>18.5 to 22.9 kg/m²</strong> represents the true healthy baseline for South Asian adults.</p>
        
        <ul>
          <li><strong>Healthy Target Range:</strong> 18.5 – 22.9 kg/m²</li>
          <li><strong>Overweight Risk Trigger:</strong> ≥ 23.0 kg/m²</li>
          <li><strong>Obesity Class I Trigger:</strong> ≥ 27.5 kg/m²</li>
        </ul>
      `,
      hi: `
        <h2>भारतीयों के लिए स्वस्थ बीएमआई सीमा (18.5 – 22.9 kg/m²)</h2>
        <p>शोध से पता चलता है कि भारतीयों के लिए 18.5 से 22.9 kg/m² का बीएमआई सबसे सुरक्षित और स्वस्थ माना जाता है।</p>
      `
    }
  },

  'bmi-calculator-teens': {
    title: {
      en: 'BMI Calculator for Teens & Children: Growth Charts & Percentiles',
      hi: 'किशोरों और बच्चों के लिए बीएमआई कैलकुलेटर: पर्सेंटाइल और ग्रोथ चार्ट',
      ko: '청소년 및 어린이용 BMI 계산기: 성장 차트 백분위수',
      de: 'BMI-Rechner für Kinder & Jugendliche: Perzentilen & Wachstum',
      es: 'Calculadora de IMC para Niños y Adolescentes: Percentiles',
      fr: 'Calculateur d\'IMC pour Enfants et Adolescents : Percentiles'
    },
    category: {
      en: 'Pediatric Health',
      hi: 'बाल स्वास्थ्य',
      ko: '소아 건강',
      de: 'Kindergesundheit',
      es: 'Salud Infantil',
      fr: 'Santé Pédiatrique'
    },
    description: {
      en: 'Guide to pediatric BMI percentiles for children and teenagers (ages 2 to 19). Learn how CDC growth charts evaluate youth health.',
      hi: 'बच्चों और किशोरों (2 से 19 वर्ष) के लिए बीएमआई पर्सेंटाइल गाइड। सीडीसी ग्रोथ चार्ट के आधार पर स्वास्थ्य मूल्यांकन।',
      ko: '어린이 및 청소년(2~19세)을 위한 소아 BMI 백분위수 가이드.',
      de: 'Leitfaden zu Perzentilen für Kinder und Jugendliche (2–19 Jahre) basierend auf WHO- und CDC-Wachstumstabellen.',
      es: 'Guía de percentiles de IMC para niños y adolescentes (2 a 19 años) según las tablas de crecimiento del CDC.',
      fr: 'Guide des percentiles d\'IMC pour enfants et adolescents (2 à 19 ans) selon les courbes de croissance du CDC.'
    },
    contentHtml: {
      en: `
        <h2>Pediatric BMI & CDC Percentiles Explained</h2>
        <p>In children and teens (ages 2 through 19), body composition changes constantly with growth and differs markedly between boys and girls. Therefore, fixed adult BMI numbers (18.5, 25, 30) do not apply to youth.</p>
        <p>Instead, pediatricians evaluate youth health using <strong>CDC Growth Chart Percentiles</strong>, comparing a child's BMI against peers of the exact same age and biological sex:</p>

        <ul>
          <li><strong>Underweight:</strong> Below the 5th percentile</li>
          <li><strong>Healthy Weight:</strong> 5th percentile to less than the 85th percentile</li>
          <li><strong>Overweight:</strong> 85th to less than the 95th percentile</li>
          <li><strong>Obesity:</strong> Equal to or greater than the 95th percentile</li>
        </ul>
      `,
      hi: `
        <h2>बच्चों और किशोरों में बीएमआई पर्सेंटाइल</h2>
        <p>बच्चों में उम्र और लंबाई के साथ बीएमआई बदलता है, इसलिए वयस्कों का बीएमआई कट-ऑफ बच्चों पर लागू नहीं होता।</p>
      `
    }
  },

  'bmi-by-age': {
    title: {
      en: 'BMI by Age Chart: Children, Adults & Seniors Health Cut-offs',
      hi: 'उम्र के अनुसार बीएमआई चार्ट: बच्चों, वयस्कों और बुजुर्गों के लिए गाइड',
      ko: '연령별 BMI 차트: 어린이, 성인 및 노인 건강 기준',
      de: 'BMI nach Alter: Altersabhängige Richtwerte für Kinder & Senioren',
      es: 'Tabla de IMC por Edad: Niños, Adultos y Adultos Mayores',
      fr: 'IMC par Âge : Enfants, Adultes et Seniors'
    },
    category: {
      en: 'Age & Metrics',
      hi: 'आयु एवं मापदंड',
      ko: '연령 및 지표',
      de: 'Alter & Metriken',
      es: 'Edad y Métricas',
      fr: 'Santé et Âge'
    },
    description: {
      en: 'Learn how age impacts BMI interpretation. View BMI charts by age for kids, teens, adults, and elderly seniors with WHO percentiles.',
      hi: 'उम्र के अनुसार बीएमआई कैसे बदलता है। बच्चों, वयस्कों और बुजुर्गों के लिए बीएमआई चार्ट और स्वास्थ्य दिशानिर्देश।',
      ko: '연령이 BMI 해석에 미치는 영향. 어린이, 청소년 백분위수 및 노년층 건강 BMI 범위 안내.',
      de: 'Erfahren Sie, wie das Alter die BMI-Interpretation beeinflusst. BMI-Tabellen für Kinder, Erwachsene und Senioren.',
      es: 'Aprende cómo afecta la edad a la interpretación del IMC. Tablas de IMC por edad para niños, adultos y mayores.',
      fr: 'Découvrez l\'impact de l\'âge sur l\'interprétation de l\'IMC. Tableaux d\'IMC par âge pour enfants, adultes et seniors.'
    },
    contentHtml: {
      en: `
        <h2>How Age Alters BMI Interpretation</h2>
        <p>A person's age significantly influences body composition, muscle density, and fat storage. While fixed cut-offs apply to adults (ages 20 to 65), pediatricians use age-percentile charts for children (ages 2 to 19), and geriatricians recommend slightly higher BMI windows (24–28 kg/m²) for seniors over 65 to protect against frailty and osteoporosis.</p>
      `,
      hi: `
        <h2>उम्र के साथ बीएमआई में बदलाव</h2>
        <p>उम्र बढ़ने के साथ मांसपेशियों की मात्रा और शरीर की वसा में बदलाव आता है। बुजुर्गों के लिए थोड़ा अधिक बीएमआई (24–28) सुरक्षित माना जाता है।</p>
      `
    }
  },

  'bmi-chart': {
    title: {
      en: 'BMI Chart 2026: Visual Weight Status Grid & Category Cut-offs',
      hi: 'बीएमआई चार्ट 2026: वजन श्रेणी ग्रिड और विस्तृत कट-ऑफ',
      ko: '2026 BMI 차트: 시각적 체중 범주 및 건강 기준',
      de: 'BMI Tabelle 2026: Übersichtliche Gewichtstabelle & WHO-Kategorien',
      es: 'Tabla de IMC 2026: Cuadrícula Visual de Peso y Categorías de la OMS',
      fr: 'Tableau d\'IMC 2026 : Grille Visuelle des Catégories et Normes OMS'
    },
    category: {
      en: 'Visual Reference',
      hi: 'विजुअल संदर्भ',
      ko: '시각적 참조',
      de: 'Visuelle Referenz',
      es: 'Referencia Visual',
      fr: 'Référence Visuelle'
    },
    description: {
      en: 'Complete visual BMI chart for men and women. View height vs weight grid, global vs Asian thresholds, and health risk indicators.',
      hi: 'पुरुषों और महिलाओं के लिए बीएमआई चार्ट। ऊंचाई बनाम वजन ग्रिड, वैश्विक और भारतीय मानकों के साथ।',
      ko: '남성과 여성을 위한 시각적 BMI 차트. 키와 체중 대비 비만도 범주 한눈에 확인.',
      de: 'Vollständige visuelle BMI-Tabelle für Männer und Frauen. Körpergröße vs. Gewichtstabelle und Risikostufen.',
      es: 'Tabla visual completa de IMC para hombres y mujeres. Cuadrícula de altura frente a peso y niveles de riesgo.',
      fr: 'Tableau visuel complet d\'IMC pour hommes et femmes. Grille taille/poids et indicateurs de risque pour la santé.'
    },
    contentHtml: {
      en: `
        <h2>Complete BMI Reference Chart</h2>
        <p>The BMI chart grid helps adults quickly determine where their weight falls relative to height. Locate your height in inches or centimeters along the side and match it with your weight in pounds or kilograms.</p>
      `,
      hi: `
        <h2>बीएमआई संदर्भ चार्ट 2026</h2>
        <p>यह चार्ट आपकी ऊंचाई और वजन के आधार पर आपकी स्वास्थ्य श्रेणी को तुरंत जानने में मदद करता है।</p>
      `
    }
  },

  'healthy-weight-chart': {
    title: {
      en: 'Healthy Weight Chart by Height for Men & Women (kg & lbs)',
      hi: 'ऊंचाई के अनुसार स्वस्थ वजन चार्ट: पुरुषों और महिलाओं के लिए',
      ko: '신장별 적정 체중 차트: 남성 및 여성 (kg & lbs)',
      de: 'Idealgewicht Tabelle nach Körpergröße für Männer & Frauen',
      es: 'Tabla de Peso Saludable por Estatura para Hombres y Mujeres',
      fr: 'Tableau du Poids Idéal selon la Taille pour Hommes et Femmes'
    },
    category: {
      en: 'Weight Management',
      hi: 'वजन प्रबंधन',
      ko: '체중 관리',
      de: 'Gewichtsmanagement',
      es: 'Control de Peso',
      fr: 'Gestion du Poids'
    },
    description: {
      en: 'Find your ideal healthy weight target based on height. Includes metric (cm/kg) and imperial (ft-in/lbs) reference tables for adults.',
      hi: 'अपनी ऊंचाई के अनुसार अपना आदर्श स्वस्थ वजन जानें। किलोग्राम और पाउंड में आसान संदर्भ तालिकाएं।',
      ko: '키에 따른 이상적인 적정 체중 범위를 확인하세요. 미터법(cm/kg) 참조 표 제공.',
      de: 'Finden Sie Ihr ideales Zielgewicht basierend auf Ihrer Körpergröße. Enthält Tabellen in kg und lbs.',
      es: 'Encuentra tu peso ideal saludable según tu estatura. Incluye tablas de referencia en kg y lbs.',
      fr: 'Trouvez votre poids idéal selon votre taille. Comprend des tableaux de référence en kg et lbs.'
    },
    contentHtml: {
      en: `
        <h2>Healthy Weight Targets by Height</h2>
        <p>Your ideal healthy weight range is the mass span at which your BMI stays between 18.5 and 24.9 kg/m². Using clinical formulas such as the Devine and Robinson equations, adults can set clear, realistic body weight goals.</p>
      `,
      hi: `
        <h2>ऊंचाई के अनुसार स्वस्थ वजन की सीमा</h2>
        <p>अपनी ऊंचाई के अनुसार सही वजन सीमा जानने से वजन प्रबंधन में आसानी होती है।</p>
      `
    }
  },

  'bmi-vs-body-fat': {
    title: {
      en: 'BMI vs. Body Fat Percentage: Key Differences & Which is Better?',
      hi: 'बीएमआई बनाम बॉडी फैट प्रतिशत: मुख्य अंतर और कौन सा बेहतर है?',
      ko: 'BMI vs 체지방률: 핵심 차이점과 더 정확한 지표는?',
      de: 'BMI vs. Körperfettanteil: Unterschiede & was ist genauer?',
      es: 'IMC vs Porcentaje de Grasa Corporal: Diferencias Principales',
      fr: 'IMC vs Pourcentage de Graisse Corporelle : Différences Clés'
    },
    category: {
      en: 'Body Composition',
      hi: 'शरीर संरचना',
      ko: '체성분 분석',
      de: 'Körperzusammensetzung',
      es: 'Composición Corporal',
      fr: 'Composition Corporelle'
    },
    description: {
      en: 'Compare BMI score against Body Fat Percentage. Learn why body fat percentage provides a more accurate measure of athletic lean body mass.',
      hi: 'बीएमआई और बॉडी फैट प्रतिशत की तुलना करें। जानें कि शारीरिक फिटनेस के लिए कौन सा मापदंड अधिक सटीक है।',
      ko: 'BMI와 체지방률의 차이점 비교. 왜 체지방률이 근육량과 지방을 정확히 구분하는가?',
      de: 'Vergleichen Sie den BMI mit dem Körperfettanteil. Welcher Messwert ist für Ihre Fitnessziele besser?',
      es: 'Compara el IMC con el porcentaje de grasa corporal. Descubre cuál es más preciso para tus objetivos de salud.',
      fr: 'Comparez l\'IMC au pourcentage de graisse corporelle. Découvrez quel indicateur est le plus précis.'
    },
    contentHtml: {
      en: `
        <h2>BMI vs. Body Fat Percentage: What is the Difference?</h2>
        <p>While <strong>BMI</strong> measures total body mass relative to height, <strong>Body Fat Percentage (% Fat)</strong> calculates the exact proportion of total weight composed of adipose fat tissue versus lean body mass (skeletal muscle, bone, and water).</p>
        <p>For active individuals, athletes, and fitness enthusiasts, Body Fat Percentage offers far superior insight into physical conditioning than scale weight alone.</p>
      `,
      hi: `
        <h2>बीएमआई बनाम बॉडी फैट प्रतिशत</h2>
        <p>बीएमआई कुल वजन को मापता है, जबकि बॉडी फैट प्रतिशत यह बताता है कि शरीर में कुल वजन का कितना हिस्सा फैट है।</p>
      `
    }
  }
};