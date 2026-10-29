// Module 2: Asian & Indian Population BMI (2 Articles)
import type { BlogArticleData } from './types';

export const asianBmiArticles: Record<string, BlogArticleData> = {
  "bmi-calculator-india": {
    "datePublished": "2026-06-10",
    "dateModified": "2026-10-28",
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
      "en": "Comprehensive evidence-based action guide for applying Asian BMI thresholds in daily life. Learn South Asian carbohydrate reduction strategies, high-protein vegetarian swaps, daily step goals, and preventive blood tests.",
      "hi": "दैनिक जीवन में भारतीय बीएमआई मानकों को लागू करने की संपूर्ण गाइड। कार्बोहाइड्रेट नियंत्रण, उच्च प्रोटीन शाकाहारी विकल्प, व्यायाम और आवश्यक रक्त जांच।",
      "ko": "인도 및 아시아 인구의 일상생활 BMI 실천 지침. 정제 탄수화물 절제법, 경제적인 고단백 채식 식단 구성, 일일 유산소 운동 목표 및 정기 혈액 검사 항목을 종합 안내합니다.",
      "de": "Praktischer Leitfaden zur Umsetzung asiatischer BMI-Grenzwerte im Alltag: Reduzierung raffinierter Kohlenhydrate, günstige pflanzliche Proteine und kardiometabolische Vorsorge.",
      "es": "Guía basada en evidencia para aplicar el IMC en población india y asiática: sustitución de carbohidratos refinados, fuentes de proteína vegetal y pruebas preventivas.",
      "fr": "Guide fondé sur des preuves pour appliquer les seuils d'IMC asiatiques au quotidien : gestion des glucides, sources de protéines végétales, activité physique et bilans préventifs."
    },
    "contentHtml": {
      "en": `
      <h2>Translating Your Asian BMI Result into Practical Action</h2>
      <p>Calculating your Body Mass Index (BMI) using Asian population criteria—where <strong>18.5 to 22.9 kg/m² represents normal weight</strong>, <strong>23.0 to 24.9 kg/m² defines overweight</strong>, and <strong>&ge; 25.0 kg/m² signifies obesity</strong>—is an essential first-line educational screening milestone. However, the true preventative value emerges when you translate that calculation into tangible daily lifestyle adjustments tailored to the unique metabolic architecture of South Asian biology.</p>
      <p>Because individuals of Indian and broader South Asian descent carry a documented genetic and phenotypic predisposition toward premature visceral adiposity, higher abdominal fat distribution, and earlier beta-cell pancreatic exhaustion, proactive nutritional management, muscle preservation, and structured preventive clinical screenings are essential for lifelong cardiometabolic health.</p>

      <h2>The South Asian Metabolic Architecture: Carbohydrate Dominance vs. Protein Scarcity</h2>
      <p>In traditional Indian households across urban and rural demographics, everyday diets frequently derive between <strong>70% and 80% of total daily energy from refined carbohydrates</strong>. Common dietary staples include polished white rice, refined wheat flour (maida), fried savory preparations (parathas, puris, samosas, pakoras), and sugar-sweetened beverages such as masala chai and commercial fruit drinks. Simultaneously, dietary protein intake remains substantially below physiological requirements, averaging merely 0.5 to 0.6 grams per kilogram of body weight—well below the recommended daily allowance (RDA) of 0.8 to 1.0 g/kg, and the optimal athletic target of 1.2 to 1.6 g/kg.</p>
      <p>This carbohydrate-dominant pattern produces dramatic postprandial glucose surges. In response, the pancreas hypersecretes insulin to clear circulating glucose. Over years of chronic postprandial hyperglycemia, peripheral tissues develop receptor-level insulin resistance, prompting the liver to accelerate de novo lipogenesis and deposit excess triglycerides directly into intra-abdominal visceral adipose tissue and hepatic parenchyma (Non-Alcoholic Fatty Liver Disease / MASLD).</p>

      <h2>Evidence-Based Kitchen Swaps for South Asian Culinary Traditions</h2>
      <p>Optimizing your macronutrient balance does not require abandoning beloved cultural recipes. Mindful ingredient substitutions dramatically improve dietary fiber, boost satiety, lower glycemic index, and protect skeletal muscle mass:</p>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">Nutritional Category</th>
              <th class="p-3 border border-[#e6e6e6]">Traditional Dietary Choice</th>
              <th class="p-3 border border-[#e6e6e6] text-[#464feb] font-bold">Health-Promoting Kitchen Swap</th>
              <th class="p-3 border border-[#e6e6e6]">Metabolic Mechanism</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6]">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">Grain Staples</td>
              <td class="p-3 border border-[#e6e6e6]">Polished white rice, refined wheat rotis</td>
              <td class="p-3 border border-[#e6e6e6] text-[#464feb] font-bold">Millets (ragi, bajra, jowar), brown basmati, quinoa, steel-cut oats</td>
              <td class="p-3 border border-[#e6e6e6]">Provides soluble beta-glucan fibers, attenuates post-meal glucose spikes</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">Vegetarian Protein</td>
              <td class="p-3 border border-[#e6e6e6]">Watery dal with low pulse-to-liquid ratio</td>
              <td class="p-3 border border-[#e6e6e6] text-[#464feb] font-bold">Sprouted moong, kala chana, low-fat paneer, textured soy chunks (52% protein)</td>
              <td class="p-3 border border-[#e6e6e6]">Supplies essential branched-chain amino acids (BCAAs) for muscle preservation</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">Cooking Fats &amp; Oils</td>
              <td class="p-3 border border-[#e6e6e6]">Repeatedly heated refined vegetable/seed oils</td>
              <td class="p-3 border border-[#e6e6e6] text-[#464feb] font-bold">Cold-pressed mustard oil, groundnut oil, virgin coconut oil, measured A2 desi ghee</td>
              <td class="p-3 border border-[#e6e6e6]">Limits lipid oxidation and trans-fatty acid formation; cap total cooking fat to 15–20 ml/day</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">Snack Routines</td>
              <td class="p-3 border border-[#e6e6e6]">Deep-fried namkeen, bakery rusks, sugary biscuits</td>
              <td class="p-3 border border-[#e6e6e6] text-[#464feb] font-bold">Dry-roasted makhana (foxnuts), roasted chana, unsalted almonds, walnuts, plain chaas</td>
              <td class="p-3 border border-[#e6e6e6]">Rich in magnesium, zinc, polyphenols, and cardioprotective omega-3 fatty acids</td>
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
      "hi": `
      <h2>भारतीय एशियाई बीएमआई परिणामों को दैनिक जीवन में लागू करना</h2>
      <p>भारतीय और एशियाई आबादी के लिए विश्व स्वास्थ्य संगठन (WHO) तथा भारतीय चिकित्सा अनुसंधान परिषद (ICMR) द्वारा निर्धारित संशोधित बीएमआई कट-ऑफ के अनुसार: <strong>18.5 से 22.9 kg/m² सामान्य वजन</strong>, <strong>23.0 से 24.9 kg/m² अधिक वजन (ओवरवेट)</strong> और <strong>&ge; 25.0 kg/m² मोटापा (ओबेसिटी)</strong> माना जाता है। केवल अपना बीएमआई अंक जानना ही पर्याप्त नहीं है; दक्षिण एशियाई शारीरिक संरचना के अनुसार दैनिक खानपान और व्यायाम में ठोस बदलाव करना दीर्घकालिक स्वास्थ्य के लिए अनिवार्य है।</p>
      <p>दक्षिण एशियाई मूल के व्यक्तियों में आनुवंशिक रूप से पेट के भीतरी अंगों के आसपास विसरल वसा (आंतरिक चर्बी) जमा होने की प्रवृत्ति अधिक होती है, जबकि कंकाल की मांसपेशियों का द्रव्यमान पश्चिमी आबादी की तुलना में कम होता है। इसे चिकित्सा विज्ञान में 'थिन-फैट' (Thin-Fat Phenotype) कहा जाता है, जिसके कारण कम वजन पर भी टाइप-2 डायबिटीज और हृदय रोगों का खतरा तेजी से बढ़ जाता है।</p>

      <h2>पारंपरिक भारतीय खानपान: कार्बोहाइड्रेट की अधिकता बनाम प्रोटीन की कमी</h2>
      <p>पारंपरिक भारतीय भोजन में कुल दैनिक कैलोरी का लगभग <strong>70% से 80% हिस्सा परिष्कृत कार्बोहाइड्रेट</strong> से आता है, जैसे पॉलिश किए गए सफेद चावल, मैदा, परांठे, पूरियां, समोसे और अत्यधिक चीनी वाली चाय। इसके विपरीत, दैनिक प्रोटीन का सेवन अनुशंसित मात्रा (0.8 से 1.0 ग्राम प्रति किलोग्राम शारीरिक वजन) से बहुत कम, औसतन केवल 0.5 ग्राम/किग्रा ही रह जाता है।</p>
      <p>यह असंतुलन भोजन के तुरंत बाद रक्त शर्करा में तीव्र उछाल लाता है, जिससे अग्न्याशय (पैंक्रियाज) को अत्यधिक इंसुलिन स्रावित करना पड़ता है। वर्षों तक लगातार इंसुलिन का उच्च स्तर रहने से कोशिकाएं प्रतिरोधी हो जाती हैं, और यकृत (लिवर) अतिरिक्त शर्करा को ट्राइग्लिसराइड्स में बदलकर पेट के आंतरिक अंगों में जमा करने लगता है, जिससे फैटी लिवर (MASLD) की समस्या पैदा होती है।</p>

      <h2>भारतीय रसोई के लिए साक्ष्य-आधारित स्वस्थ विकल्प (Kitchen Swaps)</h2>
      <p>अपने भोजन में पोषण का संतुलन बनाने के लिए पारंपरिक भारतीय स्वादों को छोड़ने की आवश्यकता नहीं है, बल्कि समझदारी से सामग्री बदलने की जरूरत है:</p>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">खाद्य श्रेणी</th>
              <th class="p-3 border border-[#e6e6e6]">पारंपरिक विकल्प</th>
              <th class="p-3 border border-[#e6e6e6] text-[#464feb] font-bold">स्वास्थ्यवर्धक भारतीय विकल्प</th>
              <th class="p-3 border border-[#e6e6e6]">नैदानिक व शारीरिक लाभ</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6]">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">अनाज व रोटियां</td>
              <td class="p-3 border border-[#e6e6e6]">सफेद चावल, मैदा की पूरियां व नान</td>
              <td class="p-3 border border-[#e6e6e6] text-[#464feb] font-bold">मिलेट्स (रागी, बाजरा, ज्वार), भूरा बासमती चावल, जौ</td>
              <td class="p-3 border border-[#e6e6e6]">घुलनशील फाइबर प्रदान करता है, रक्त शर्करा के उतार-चढ़ाव को धीमा करता है</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">शाकाहारी प्रोटीन</td>
              <td class="p-3 border border-[#e6e6e6]">पानीदार पतली दाल (कम दाल, ज्यादा पानी)</td>
              <td class="p-3 border border-[#e6e6e6] text-[#464feb] font-bold">अंकुरित मूंग, काला चना, लो-फैट पनीर, सोया चंक्स (52% प्रोटीन)</td>
              <td class="p-3 border border-[#e6e6e6]">मांसपेशियों की सुरक्षा के लिए आवश्यक अमीनो एसिड (BCAAs) की आपूर्ति करता है</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">कुकिंग तेल व घी</td>
              <td class="p-3 border border-[#e6e6e6]">बार-बार गर्म किया गया रिफाइंड वनस्पति तेल</td>
              <td class="p-3 border border-[#e6e6e6] text-[#464feb] font-bold">कच्ची घानी सरसों का तेल, मूंगफली तेल, सीमित A2 देसी घी (15-20 ml/दिन)</td>
              <td class="p-3 border border-[#e6e6e6]">ट्रांस-फैट और लिपिड ऑक्सीकरण को कम करता है; रक्त वाहिकाओं की सुरक्षा करता है</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">शाम का नाश्ता</td>
              <td class="p-3 border border-[#e6e6e6]">तली नमकीन, रस्क, बिस्कुट, समोसा</td>
              <td class="p-3 border border-[#e6e6e6] text-[#464feb] font-bold">रोस्टेड मखाना, भुना चना, बिना नमक वाले बादाम, अखरोट, छाछ</td>
              <td class="p-3 border border-[#e6e6e6]">मैग्नीशियम, जिंक, ओमेगा-3 और हृदय-सुरक्षात्मक पॉलीफेनोल्स से भरपूर</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>आंतरिक विसरल चर्बी घटाने के लिए लक्षित व्यायाम प्रोटोकॉल</h2>
      <p>केवल वजन कम करने के बजाय आंतरिक विसरल फैट को कम करने और मांसपेशियों को मजबूत करने के लिए एरोबिक और स्ट्रेंथ ट्रेनिंग का संयोजन सर्वोत्तम है:</p>
      <ul>
        <li><strong>मध्यम-तीव्रता एरोबिक व्यायाम:</strong> सप्ताह में 150 से 300 मिनट तेज गति से पैदल चलना (5.5 से 6 किमी/घंटा), साइकिल चलाना या तैराकी करना मांसपेशियों के GLUT4 ट्रांसपोर्टर्स को सक्रिय करता है, जिससे बिना इंसुलिन के भी ग्लूकोज की खपत बढ़ती है।</li>
        <li><strong>दैनिक 8,000 से 10,000 कदम:</strong> लंबे समय तक बैठे रहने के दुष्प्रभावों को समाप्त करता है और भोजनोपरांत ट्राइग्लिसराइड्स के स्तर को तुरंत नियंत्रित करता है।</li>
        <li><strong>प्रोग्रेसिव रेजिस्टेंस ट्रेनिंग (वेट ट्रेनिंग):</strong> सप्ताह में 2 से 3 दिन स्क्वैट्स, पुश-अप्स और डंबल एक्सरसाइज करें। कंकाल की मांसपेशियां शरीर का सबसे बड़ा ग्लूकोज भण्डारण केंद्र हैं; मांसपेशियों का विकास इंसुलिन संवेदनशीलता को सीधे बढ़ाता है।</li>
      </ul>

      <h2>दक्षिण एशियाई वयस्कों के लिए वार्षिक प्रिवेंटिव हेल्थ चेकअप सूची</h2>
      <p>चूंकि सामान्य दिखने वाले वजन पर भी आंतरिक चयापचय संबंधी विकार बिना किसी लक्षण के विकसित हो सकते हैं, इसलिए 25 वर्ष की आयु के बाद प्रत्येक भारतीय वयस्क को वार्षिक रक्त जांच करानी चाहिए:</p>
      <ol class="space-y-2 my-4">
        <li><strong>ग्लाइकेटेड हीमोग्लोबिन (HbA1c) व फास्टिंग ग्लूकोज:</strong> पिछले 90 दिनों के रक्त शर्करा का औसत (सामान्य: &lt; 5.7%, प्रीडायबिटीज: 5.7%–6.4%, डायबिटीज: &ge; 6.5%)।</li>
        <li><strong>संपूर्ण लिपिड प्रोफाइल (Lipid Profile):</strong> ट्राइग्लिसराइड्स और एचडीएल का अनुपात 2.0 से कम होना चाहिए। भारतीयों में ट्राइग्लिसराइड्स अक्सर 150 mg/dL से अधिक और अच्छा एचडीएल 40 mg/dL से कम पाया जाता है।</li>
        <li><strong>एपोलिपोप्रोटीन बी (ApoB):</strong> धमनियों में प्लाक जमाने वाले हानिकारक कणों की सटीक गणना करता है, जो सामान्य एलडीएल की तुलना में हृदय रोग का अधिक सटीक संकेतक है।</li>
        <li><strong>लिवर अल्ट्रासाउंड व लिवर एंजाइम (SGOT / SGPT):</strong> प्रारंभिक अवस्था के फैटी लिवर (NAFLD/MASLD) की पहचान करता है, जो 30% से अधिक शहरी भारतीयों में मौजूद है।</li>
        <li><strong>रक्तचाप (Blood Pressure):</strong> इष्टतम रक्तचाप 120/80 mmHg से नीचे होना चाहिए; 130/80 से ऊपर होने पर तत्काल जीवनशैली में सुधार की आवश्यकता होती है।</li>
      </ol>

      <h2>अक्सर पूछे जाने वाले प्रश्न (FAQ)</h2>
      <div class="space-y-4 my-6">
        <div>
          <h3 class="text-base font-bold text-[var(--foreground)]">क्या 100% शाकाहारी भोजन से एक भारतीय वयस्क को पर्याप्त प्रोटीन मिल सकता है?</h3>
          <p class="text-sm text-[var(--muted-foreground)]">हां, बशर्ते आप प्रोटीन के स्रोतों को मिलाकर खाएं। दालों और छोले-राजमा के साथ कम वसा वाला पनीर, दही और सोया चंक्स (जिसमें 52% शुद्ध प्रोटीन होता है) को शामिल करके बिना अधिक कार्बोहाइड्रेट लिए प्रतिदिन 60 से 90 ग्राम उच्च गुणवत्ता वाला प्रोटीन आसानी से प्राप्त किया जा सकता है।</p>
        </div>
        <div>
          <h3 class="text-base font-bold text-[var(--foreground)]">सामान्य वजन वाले 30 वर्ष के युवाओं को दिल का दौरा क्यों पड़ रहा है?</h3>
          <p class="text-sm text-[var(--muted-foreground)]">इसका मुख्य कारण 'थिन-फैट' फेनोटाइप है: ऊपर से व्यक्ति पतला दिखता है लेकिन आंतरिक धमनियों और पेट के अंगों में अत्यधिक विसरल वसा, आनुवंशिक रूप से पतली कोरोनरी धमनियां, उच्च लिपोप्रोटीन(ए) का स्तर और परिष्कृत भोजन से धमनियों में लगातार सूजन (इन्फ्लेमेशन) रहता है।</p>
        </div>
      </div>

      <h2>प्रमुख वैज्ञानिक संदर्भ एवं उद्धरण</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Misra A, Chowbey P, Makkar BM, et al. <em>Consensus statement for diagnosis of obesity, abdominal obesity and the metabolic syndrome for Asian Indians.</em> J Assoc Physicians India 2009; 57:163-170. PMID: 19582986.</li>
        <li>Indian Council of Medical Research (ICMR). <em>Guidelines for Management of Type 2 Diabetes.</em> New Delhi: ICMR, 2018.</li>
        <li>Yajnik CS, Yudkin JS. <em>The Y-Y paradox.</em> The Lancet 2004; 363(9403):163. DOI: 10.1016/S0140-6736(03)15301-9.</li>
      </ul>
`,
      "es": `
      <h2>Cómo Aplicar el IMC para Población Asiática e India en la Vida Diaria</h2>
      <p>Calcular el Índice de Masa Corporal con los criterios específicos de la OMS para poblaciones asiáticas—donde <strong>18.5 a 22.9 kg/m² representa el peso normal</strong>, <strong>23.0 a 24.9 kg/m² sobrepeso</strong> y <strong>&ge; 25.0 kg/m² obesidad</strong>—es el primer paso para prevenir la diabetes tipo 2 y la enfermedad coronaria prematura en adultos del sur de Asia.</p>
      <p>Debido al fenotipo denominado 'falso delgado' (Thin-Fat), las personas de origen indio acumulan una cantidad desproporcionada de grasa visceral intraabdominal con un IMC que en Occidente se consideraría completamente inofensivo. Por tanto, se requieren ajustes dietéticos y de actividad física adaptados a su biología.</p>

      <h2>Ajustes Nutricionales Clave en la Cocina Tradicional</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">Categoría</th>
              <th class="p-3 border border-[#e6e6e6]">Hábito Tradicional</th>
              <th class="p-3 border border-[#e6e6e6] text-[#464feb] font-bold">Sustitución Saludable</th>
              <th class="p-3 border border-[#e6e6e6]">Beneficio Metabólico</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6]">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">Cereales</td>
              <td class="p-3 border border-[#e6e6e6]">Arroz blanco pulido, harinas refinadas (maida)</td>
              <td class="p-3 border border-[#e6e6e6] text-[#464feb] font-bold">Mijos (ragi, bajra, jowar), arroz integral basmati, avena</td>
              <td class="p-3 border border-[#e6e6e6]">Aporta betaglucanos y reduce los picos glucémicos postprandiales</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">Proteínas</td>
              <td class="p-3 border border-[#e6e6e6]">Dal aguado con escasa concentración de legumbre</td>
              <td class="p-3 border border-[#e6e6e6] text-[#464feb] font-bold">Lentejas germinadas, garbanzos, paneer bajo en grasa, soja texturizada</td>
              <td class="p-3 border border-[#e6e6e6]">Preserva la masa muscular y estimula la síntesis proteica con BCAAs</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">Aceites</td>
              <td class="p-3 border border-[#e6e6e6]">Aceites vegetales recalentados repetidamente</td>
              <td class="p-3 border border-[#e6e6e6] text-[#464feb] font-bold">Aceite de mostaza o cacahuete prensado en frío, ghee A2 medido (15 ml/día)</td>
              <td class="p-3 border border-[#e6e6e6]">Evita la formación de ácidos grasos trans y la peroxidación lipídica</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Protocolos de Ejercicio para Movilizar la Grasa Visceral</h2>
      <ul>
        <li><strong>Ejercicio cardiovascular moderado:</strong> Acumular de 150 a 300 minutos semanales de caminata rápida a 5.5–6 km/h para estimular el transporte de glucosa GLUT4 en el músculo.</li>
        <li><strong>Meta de pasos diarios:</strong> Mantener de 8,000 a 10,000 pasos al día para combatir el sedentarismo y reducir los triglicéridos postprandiales.</li>
        <li><strong>Entrenamiento de fuerza progresivo:</strong> 2 a 3 sesiones semanales de sentadillas, flexiones y peso libre para aumentar la masa muscular esquelética, principal depósito de aclaramiento de glucosa.</li>
      </ul>

      <h2>Chequeos Clínicos Preventivos Anuales</h2>
      <p>Se recomienda realizar anualmente: hemoglobina glicada (HbA1c &lt; 5.7%), perfil lipídico completo (ratio triglicéridos/HDL &lt; 2.0), ecografía hepática (para descartar esteatosis / MASLD) y medición estricta de la tensión arterial.</p>
`,
      "fr": `
      <h2>Mettre en Pratique l'IMC Spécifique aux Populations Asiatiques</h2>
      <p>Les seuils de l'OMS pour les populations asiatiques—<strong>18,5 à 22,9 kg/m² pour le poids normal</strong>, <strong>23,0 à 24,9 kg/m² pour le surpoids</strong> et <strong>&ge; 25,0 kg/m² pour l'obésité</strong>—constituent un outil clinique de dépistage précoce essentiel pour contrer le diabète de type 2 et les maladies coronariennes précoces.</p>
      <p>Le phénotype dit 'mince-gras' (Thin-Fat) propre aux populations sud-asiatiques se traduit par une masse musculaire réduite associée à une accumulation accrue de tissu adipeux viscéral péritonéal dès un IMC de 23 kg/m².</p>

      <h2>Substitutions Culinaires et Équilibre des Macronutriments</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">Groupe Alimentaire</th>
              <th class="p-3 border border-[#e6e6e6]">Alimentation Traditionnelle</th>
              <th class="p-3 border border-[#e6e6e6] text-[#464feb] font-bold">Alternative Protectrice</th>
              <th class="p-3 border border-[#e6e6e6]">Mécanisme Clinique</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6]">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">Féculents</td>
              <td class="p-3 border border-[#e6e6e6]">Riz blanc poli, galettes de farine raffinée</td>
              <td class="p-3 border border-[#e6e6e6] text-[#464feb] font-bold">Mils traditionnels (ragi, bajra), riz basmati complet, avoine</td>
              <td class="p-3 border border-[#e6e6e6]">Ralentit l'absorption glucidique grâce aux bêta-glucanes solubles</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">Protéines végétales</td>
              <td class="p-3 border border-[#e6e6e6]">Soupe de lentilles très diluée</td>
              <td class="p-3 border border-[#e6e6e6] text-[#464feb] font-bold">Légumineuses germées, pois chiches, paneer allégé, protéines de soja (52%)</td>
              <td class="p-3 border border-[#e6e6e6]">Fournit les acides aminés ramifiés essentiels (BCAA) préservant le muscle</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Protocoles d'Activité Physique Visant la Graisse Viscérale</h2>
      <ul>
        <li><strong>Cardio d'intensité modérée :</strong> 150 à 300 minutes par semaine de marche active à 6 km/h afin de stimuler les transporteurs membranaires GLUT4.</li>
        <li><strong>Renforcement musculaire régulier :</strong> 2 à 3 séances hebdomadaires d'exercices polyarticulaires pour développer la masse maigre, principal organe d'élimination du glucose sanguin.</li>
      </ul>
`,
      "de": `
      <h2>Indische und südasiatische BMI-Standards nach ICMR und WHO</h2>
      <p>Über Jahrzehnte hinweg bewerteten Gesundheitssysteme das Körpergewicht weltweit anhand einheitlicher WHO-Standards. Kardiologen und Diabetologen stellten jedoch fest, dass Menschen südasiatischer Herkunft (Indien, Pakistan, Bangladesch, Sri Lanka) bereits bei scheinbar völlig normalen westlichen BMI-Werten von 22 bis 24 kg/m² massiv erhöhte Raten an Typ-2-Diabetes, frühzeitiger koronarer Herzkrankheit und Fettleber aufweisen.</p>
      <p>Um dieser genetischen und metabolischen Besonderheit Rechnung zu tragen, formulierte das Indian Council of Medical Research (ICMR) zusammen mit der WHO spezifische <strong>südasiatische Konsensus-Grenzwerte</strong>:</p>

      <h2>Vergleich der BMI-Grenzwerte: Global vs. Indien / Südasien (ICMR)</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">Kategorie</th>
              <th class="p-3 border border-[#e6e6e6] text-blue-500 font-bold">Standard WHO Global (kg/m²)</th>
              <th class="p-3 border border-[#e6e6e6] text-[#464feb] font-bold">ICMR Indien / Südasien (kg/m²)</th>
              <th class="p-3 border border-[#e6e6e6]">Klinische Relevanz für Südasiaten</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6] font-mono">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold">Untergewicht</td>
              <td class="p-3 border border-[#e6e6e6]">&lt; 18,5</td>
              <td class="p-3 border border-[#e6e6e6] text-[#464feb]">&lt; 18,0</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">Nährstoffdefizit, Anämierisiko</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold text-emerald-600 font-bold">Normalgewicht</td>
              <td class="p-3 border border-[#e6e6e6]">18,5 – 24,9</td>
              <td class="p-3 border border-[#e6e6e6] text-[#464feb] font-bold">18,0 – 22,9</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">Optimaler kardiometabolischer Bereich</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold text-amber-600 font-bold">Übergewicht</td>
              <td class="p-3 border border-[#e6e6e6]">25,0 – 29,9</td>
              <td class="p-3 border border-[#e6e6e6] text-amber-600 font-bold">23,0 – 24,9</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">Früher Interventionspunkt für Insulinresistenz</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold text-rose-600 font-bold">Adipositas</td>
              <td class="p-3 border border-[#e6e6e6]">&ge; 30,0</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-600 font-bold">&ge; 25,0</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">Hohes Risiko für vaskuläre Komplikationen</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Der 'Thin-Fat'-Phänotyp und das Y-Y-Paradoxon</h2>
      <p>In der medizinischen Fachwelt wird die spezifische südasiatische Phänotypik häufig als <em>Thin-Fat-Syndrom</em> bezeichnet, wissenschaftlich untermauert durch das berühmte <strong>Yajnik-Yudkin-Paradoxon (Y-Y-Paradoxon)</strong>: Zwei Ärzte – einer kaukasischer, der andere indischer Herkunft – wiesen denselben BMI von 22,3 kg/m² auf. Die DEXA-Untersuchung ergab jedoch beim indischen Arzt einen Körperfettanteil von 21,2 % gegenüber lediglich 9,1 % beim kaukasischen Kollegen. Trotz schlanker Gliedmaßen speichern Menschen südasiatischer Abstammung vermehrt entzündungsförderndes Fettgewebe intraabdominal und intramuskulär.</p>

      <h2>Evidenzbasierte Ernährungsempfehlungen für Südasiaten</h2>
      <p>Um das kardiometabolische Risiko wirksam zu senken, empfehlen Diabetologen:</p>
      <ul class="list-disc pl-5 my-4 space-y-2 text-sm text-[var(--muted-foreground)]">
        <li><strong>Reduktion raffinierter Kohlenhydrate:</strong> Weißer polierter Reis, Naan-Brote und frittierte Snacks (Samosas, Pakoras) sollten durch traditionelle Hirsearten (Ragi, Jowar, Bajra) und Hülsenfrüchte ersetzt werden.</li>
        <li><strong>Erhöhung der Proteindichte:</strong> Vegetarische Ernährungsweisen sollten gezielt mit Linsen (Dal), Kichererbsen, fettarmem Paneer, Magerquark oder Sojaprodukten angereichert werden.</li>
        <li><strong>Regelmäßiges Muskelaufbautraining:</strong> Mindestens 2- bis 3-mal wöchentlich progressives Krafttraining zur Steigerung der GLUT-4-vermittelten Glukoseaufnahme in die Muskulatur.</li>
      </ul>
`,
      "ko": `
      <h2>아시아 및 인도 표준 BMI 수치의 일상 속 임상 실천 가이드</h2>
      <p>세계보건기구(WHO)와 인도의학연구위원회(ICMR)의 아시아 전용 기준치(<strong>18.5~22.9 kg/m² 정상</strong>, <strong>23.0~24.9 kg/m² 과체중</strong>, <strong>&ge; 25.0 kg/m² 비만</strong>)는 서양인에 비해 근육량이 적고 내장 지방 축적률이 높은 아시아인의 대사질환을 조기에 예방하기 위해 고안되었습니다.</p>
      <p>아시아인은 동일한 체중에서도 장기 주변에 염증성 지방(내장지방)이 많이 축적되는 '마른 비만(Thin-Fat)' 특성을 지니므로, 단순 체중 감량보다 복부 비만 개선과 골격근 보존이 핵심입니다.</p>

      <h2>식단 개선 및 일상 속 영양 교체 전략</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">영양군</th>
              <th class="p-3 border border-[#e6e6e6]">전통적 식습관</th>
              <th class="p-3 border border-[#e6e6e6] text-[#464feb] font-bold">건강 대체 식품</th>
              <th class="p-3 border border-[#e6e6e6]">대사적 이점</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6]">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">탄수화물</td>
              <td class="p-3 border border-[#e6e6e6]">도정 백미, 정제 밀가루 음식</td>
              <td class="p-3 border border-[#e6e6e6] text-[#464feb] font-bold">잡곡(수수, 조), 현미, 귀리, 퀴노아</td>
              <td class="p-3 border border-[#e6e6e6]">수용성 식이섬유 공급으로 식후 혈당 급상승 방지</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">단백질</td>
              <td class="p-3 border border-[#e6e6e6]">탄수화물 위주의 저단백 식단</td>
              <td class="p-3 border border-[#e6e6e6] text-[#464feb] font-bold">발아 콩, 병아리콩, 저지방 코티지치즈, 대두 단백</td>
              <td class="p-3 border border-[#e6e6e6]">필수 분지사슬 아미노산(BCAA) 공급 및 근손실 방지</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>내장 지방 제거를 위한 운동 및 정기 검진</h2>
      <p>주당 150~300분의 중강도 유산소 운동(빠른 걷기)과 주 2~3회의 복합 다관절 근력 운동(스쿼트, 팔굽혀펴기)을 병행하고, 연 1회 당화혈색소(HbA1c &lt; 5.7%) 및 공복 지질 패널 검사를 받는 것이 권장됩니다.</p>
`
    }
  },

  "healthy-bmi-range-indians": {
    "datePublished": "2026-06-20",
    "dateModified": "2026-10-28",
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
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">Weight Status Category</th>
              <th class="p-3 border border-[#e6e6e6] font-mono text-blue-500">Standard WHO International Range</th>
              <th class="p-3 border border-[#e6e6e6] font-mono text-[#464feb] font-bold">Asian Indian / ICMR Guidelines</th>
              <th class="p-3 border border-[#e6e6e6]">Action Trigger</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6] font-mono">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold">Underweight</td>
              <td class="p-3 border border-[#e6e6e6] text-blue-500">&lt; 18.5 kg/m²</td>
              <td class="p-3 border border-[#e6e6e6] text-[#464feb] font-bold">&lt; 18.0 kg/m²</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">Screen for malnutrition, anemia, and micronutrient deficits</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold text-emerald-600 font-bold">Healthy / Normal Weight</td>
              <td class="p-3 border border-[#e6e6e6] text-blue-500">18.5 – 24.9 kg/m²</td>
              <td class="p-3 border border-[#e6e6e6] text-[#464feb] font-bold">18.0 – 22.9 kg/m²</td>
              <td class="p-3 border border-[#e6e6e6] font-sans text-emerald-600 font-bold">Optimal longevity window; lowest cardiometabolic risk</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold text-amber-600 font-bold">Overweight (Action Trigger 1)</td>
              <td class="p-3 border border-[#e6e6e6] text-blue-500">25.0 – 29.9 kg/m²</td>
              <td class="p-3 border border-[#e6e6e6] text-amber-600 font-bold">23.0 – 24.9 kg/m²</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">Early dietary intervention, reduce refined carbohydrates, increase daily steps</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold text-rose-600 font-bold">Obesity (Action Trigger 2)</td>
              <td class="p-3 border border-[#e6e6e6] text-blue-500">&ge; 30.0 kg/m²</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-600 font-bold">&ge; 25.0 kg/m²</td>
              <td class="p-3 border border-[#e6e6e6] font-sans text-rose-600">Formal clinical screening for insulin resistance, NAFLD, and dyslipidemia</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>The "Thin-Fat" Phenotype: The Y-Y Paradox Explained</h2>
      <p>The biological explanation for why Indians require lower cut-offs was famously illustrated in 2004 by Dr. Chittaranjan S. Yajnik of KEM Hospital Pune and Professor John S. Yudkin of University College London in their landmark publication, <em>The Y-Y Paradox</em>.</p>
      <div class="my-6 p-6 rounded-xl border border-[#e6e6e6] bg-[var(--card)] font-mono text-sm leading-relaxed space-y-3">
        <p class="font-bold text-[#464feb]">The Classic Y-Y Paradox Experiment:</p>
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
      "hi": `
      <h2>भारतीयों के लिए विशिष्ट बीएमआई मानकों की आवश्यकता क्यों पड़ी?</h2>
      <p>दशकों तक दुनिया भर में वयस्कों के वजन का आकलन विश्व स्वास्थ्य संगठन (WHO) के मानक बीएमआई वर्गीकरण (18.5 से 24.9 सामान्य, 25 से 29.9 ओवरवेट, 30 या अधिक मोटापा) के आधार पर किया जाता रहा। यह मानक मुख्य रूप से पश्चिमी और कोकेशियान आबादी के अध्ययनों पर आधारित था। लेकिन भारतीय और दक्षिण एशियाई आबादी पर काम कर रहे हृदय रोग विशेषज्ञों और महामारी विज्ञानियों ने एक गंभीर विरोधाभास देखा:</p>
      <p><strong>भारतीय मूल के लोगों में 22 से 24 के तथाकथित "सामान्य" बीएमआई पर भी टाइप-2 डायबिटीज, कम उम्र में दिल का दौरा (कोरोनरी आर्टरी डिजीज), उच्च रक्तचाप और फैटी लिवर की समस्या तेजी से विकसित हो रही थी।</strong></p>
      <p>इसके समाधान के लिए डब्ल्यूएचओ विशेषज्ञ समिति, भारतीय चिकित्सा अनुसंधान परिषद (ICMR) और एसोसिएशन ऑफ फिजिशियन ऑफ इंडिया (API) ने संयुक्त रूप से भारतीयों के लिए संशोधित एवं अधिक सख्त बीएमआई कट-ऑफ की औपचारिक घोषणा की।</p>

      <h2>अंतर्राष्ट्रीय WHO मानक बनाम भारतीय ICMR बीएमआई वर्गीकरण</h2>
      <p>नीचे दी गई तुलनात्मक तालिका में अंतर्राष्ट्रीय और भारतीय मानकों के बीच के स्पष्ट अंतर को देखा जा सकता है:</p>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">वजन स्थिति श्रेणी</th>
              <th class="p-3 border border-[#e6e6e6] font-mono text-blue-500">वैश्विक WHO मानक (kg/m²)</th>
              <th class="p-3 border border-[#e6e6e6] font-mono text-[#464feb] font-bold">भारतीय ICMR मानक (kg/m²)</th>
              <th class="p-3 border border-[#e6e6e6]">नैदानिक स्वास्थ्य कार्रवाई</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6] font-mono">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold">कम वजन (अंडरवेट)</td>
              <td class="p-3 border border-[#e6e6e6] text-blue-500">&lt; 18.5</td>
              <td class="p-3 border border-[#e6e6e6] text-[#464feb] font-bold">&lt; 18.0</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">कुपोषण, एनीमिया और पोषण संबंधी कमियों की जांच</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold text-emerald-600 font-bold">स्वस्थ / सामान्य वजन</td>
              <td class="p-3 border border-[#e6e6e6] text-blue-500">18.5 – 24.9</td>
              <td class="p-3 border border-[#e6e6e6] text-[#464feb] font-bold">18.0 – 22.9</td>
              <td class="p-3 border border-[#e6e6e6] font-sans text-emerald-600 font-bold">दीर्घायु व न्यूनतम कार्डियोमेटाबोलिक जोखिम</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold text-amber-600 font-bold">अधिक वजन (ओवरवेट)</td>
              <td class="p-3 border border-[#e6e6e6] text-blue-500">25.0 – 29.9</td>
              <td class="p-3 border border-[#e6e6e6] text-amber-600 font-bold">23.0 – 24.9</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">प्रारंभिक आहार सुधार, कार्ब्स घटाएं, दैनिक कदम बढ़ाएं</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold text-rose-600 font-bold">मोटापा (ओबेसिटी)</td>
              <td class="p-3 border border-[#e6e6e6] text-blue-500">&ge; 30.0</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-600 font-bold">&ge; 25.0</td>
              <td class="p-3 border border-[#e6e6e6] font-sans text-rose-600">इंसुलिन प्रतिरोध, फैटी लिवर व डिस्लिपिडेमिया की डॉक्टरी जांच</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>'थिन-फैट' फेनोटाइप और प्रसिद्ध वाई-वाई विरोधाभास (The Y-Y Paradox)</h2>
      <p>भारतीयों के लिए कम बीएमआई की आवश्यकता का जैविक प्रमाण 2004 में केईएम अस्पताल पुणे के डॉ. चित्तरंजन याज्ञिक और यूनिवर्सिटी कॉलेज लंदन के प्रोफेसर जॉन युडकिन द्वारा द लैंसेट में प्रकाशित ऐतिहासिक शोध से मिला:</p>
      <div class="my-6 p-6 rounded-xl border border-[#e6e6e6] bg-[var(--card)] font-mono text-sm leading-relaxed space-y-3">
        <p class="font-bold text-[#464feb]">ऐतिहासिक वाई-वाई विरोधाभास प्रयोग:</p>
        <p class="text-[var(--foreground)]">समान ऊंचाई और बिल्कुल एक जैसे सामान्य बीएमआई (22.3 kg/m²) वाले दो डॉक्टरों की डेक्सा (DEXA) स्कैन से जांच की गई:</p>
        <p class="text-[var(--muted-foreground)]">&bull; <strong>यूरोपीय डॉक्टर (डॉ. युडकिन):</strong> बीएमआई = 22.3 | मापी गई कुल बॉडी फैट: <strong>9.1%</strong></p>
        <p class="text-[var(--muted-foreground)]">&bull; <strong>भारतीय डॉक्टर (डॉ. याज्ञिक):</strong> बीएमआई = 22.3 | मापी गई कुल बॉडी फैट: <strong>21.2%</strong></p>
        <p class="text-[var(--foreground)] font-bold mt-2">निष्कर्ष: बिल्कुल समान 22.3 के "सामान्य" बीएमआई पर भी भारतीय डॉक्टर के शरीर में यूरोपीय सहकर्मी की तुलना में दोगुनी से अधिक चर्बी और अत्यधिक आंतरिक विसरल फैट मौजूद था।</p>
      </div>
      <p>इसे चिकित्सा जगत में <strong>'थिन-फैट' (Thin-Fat) अथवा सरकोपेनिक-एडीपोज फेनोटाइप</strong> कहा जाता है। दक्षिण एशियाई लोगों की हड्डियों की बनावट पतली और मांसपेशियों का प्राकृतिक द्रव्यमान कम होता है, लेकिन अतिरिक्त ऊर्जा को पेट के आंतरिक अंगों के आसपास चर्बी के रूप में जमा करने की क्षमता बहुत अधिक होती है।</p>

      <h2>कमर के घेरे (वेस्ट सरकमफेरेंस) के सख्त भारतीय मानक</h2>
      <p>चूंकि पेट की भीतरी चर्बी ही सीधे तौर पर हृदय रोग और शुगर को जन्म देती है, इसलिए आईसीएमआर ने कमर के माप के लिए भी पश्चिमी देशों की तुलना में काफी कड़े मानक निर्धारित किए हैं:</p>
      <ul>
        <li><strong>भारतीय पुरुषों के लिए कमर की सीमा:</strong> <strong>&le; 90 सेमी (35.4 इंच)</strong> (पश्चिमी पुरुषों के 102 सेमी के मुकाबले)</li>
        <li><strong>भारतीय महिलाओं के लिए कमर की सीमा:</strong> <strong>&le; 80 सेमी (31.5 इंच)</strong> (पश्चिमी महिलाओं के 88 सेमी के मुकाबले)</li>
      </ul>
      <p>यदि किसी भारतीय पुरुष का वजन सामान्य है लेकिन कमर 92 सेमी है, तो वह सामान्य वजन होने के बावजूद उच्च मेटाबोलिक जोखिम की श्रेणी में आता है।</p>

      <h2>देर से जांच के गंभीर कार्डियोमेटाबोलिक दुष्परिणाम</h2>
      <p>जब लोग पश्चिमी 25 या 30 के बीएमआई कट-ऑफ का इंतजार करते हैं, तब तक उनके शरीर में इंसुलिन रेजिस्टेंस, फैटी लिवर और धमनियों में प्लाक जमने की प्रक्रिया बहुत आगे बढ़ चुकी होती है। <strong>23.0 kg/m² का कट-ऑफ</strong> अपनाने से बीमारी की शुरुआत में ही प्रारंभिक जीवनशैली सुधार करके स्वास्थ्य को पूरी तरह सामान्य किया जा सकता है।</p>

      <h2>अक्सर पूछे जाने वाले प्रश्न (FAQ)</h2>
      <div class="space-y-4 my-6">
        <div>
          <h3 class="text-base font-bold text-[var(--foreground)]">क्या 24 का बीएमआई भारतीय व्यक्ति के लिए स्वस्थ है?</h3>
          <p class="text-sm text-[var(--muted-foreground)]">अंतर्राष्ट्रीय मानकों में 24 सामान्य दिखता है, लेकिन भारतीय आईसीएमआर मानकों के तहत 24 का बीएमआई अधिक वजन (ओवरवेट) की श्रेणी में आता है और यह संकेत देता है कि तुरंत मीठा व रिफाइंड कार्ब्स कम करें और शारीरिक सक्रियता बढ़ाएं।</p>
        </div>
        <div>
          <h3 class="text-base font-bold text-[var(--foreground)]">क्या विदेश में जन्मे भारतीय मूल के बच्चों पर भी यही मानक लागू होते हैं?</h3>
          <p class="text-sm text-[var(--muted-foreground)]">हां। वैज्ञानिक अध्ययनों से सिद्ध हुआ है कि उच्च बॉडी फैट और विसरल चर्बी जमा करने की आनुवंशिक प्रवृत्ति पश्चिमी देशों में पले-बढ़े दूसरी और तीसरी पीढ़ी के दक्षिण एशियाई लोगों में भी समान रूप से बनी रहती है।</p>
        </div>
      </div>

      <h2>वैज्ञानिक संदर्भ एवं उद्धरण</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>WHO Expert Consultation. <em>Appropriate body-mass index for Asian populations and its implications for policy and intervention strategies.</em> The Lancet 2004; 363(9403):157-163. PMID: 14726171.</li>
        <li>Misra A, Chowbey P, Makkar BM, et al. <em>Consensus statement for diagnosis of obesity, abdominal obesity and the metabolic syndrome for Asian Indians.</em> J Assoc Physicians India 2009; 57:163-170. PMID: 19582986.</li>
        <li>Yajnik CS, Yudkin JS. <em>The Y-Y paradox.</em> The Lancet 2004; 363(9403):163. DOI: 10.1016/S0140-6736(03)15301-9.</li>
      </ul>
`,
      "es": `
      <h2>Por Qué la Población India Requiere Límites de IMC Más Bajos</h2>
      <p>Durante décadas, los sistemas de salud internacionales evaluaron el peso corporal con las clasificaciones de la OMS basadas en poblaciones caucásicas (18.5 a 24.9 normal, 25 a 29.9 sobrepeso, &ge; 30 obesidad). Sin embargo, los investigadores observaron que los adultos del sur de Asia desarrollaban diabetes tipo 2 y cardiopatía isquémica con valores de IMC muy inferiores.</p>
      <p>En respuesta, la OMS y el Consejo Indio de Investigación Médica (ICMR) fijaron puntos de corte específicos: <strong>18.0 a 22.9 kg/m² normal</strong>, <strong>23.0 a 24.9 kg/m² sobrepeso</strong> y <strong>&ge; 25.0 kg/m² obesidad</strong>.</p>

      <h2>Comparativa: Criterios Internacionales vs. Criterios para Población India (ICMR)</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">Categoría</th>
              <th class="p-3 border border-[#e6e6e6] text-blue-500 font-mono">OMS Estándar (kg/m²)</th>
              <th class="p-3 border border-[#e6e6e6] text-[#464feb] font-mono font-bold">ICMR India / Asia (kg/m²)</th>
              <th class="p-3 border border-[#e6e6e6]">Acción Clínica</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6] font-mono">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold">Bajo peso</td>
              <td class="p-3 border border-[#e6e6e6]">&lt; 18.5</td>
              <td class="p-3 border border-[#e6e6e6] text-[#464feb]">&lt; 18.0</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">Descartar anemia y déficit nutricional</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold text-emerald-600 font-bold">Peso saludable</td>
              <td class="p-3 border border-[#e6e6e6]">18.5 – 24.9</td>
              <td class="p-3 border border-[#e6e6e6] text-[#464feb] font-bold">18.0 – 22.9</td>
              <td class="p-3 border border-[#e6e6e6] font-sans text-emerald-600 font-bold">Rango óptimo cardiometabólico</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold text-amber-600 font-bold">Sobrepeso</td>
              <td class="p-3 border border-[#e6e6e6]">25.0 – 29.9</td>
              <td class="p-3 border border-[#e6e6e6] text-amber-600 font-bold">23.0 – 24.9</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">Intervención temprana en carbohidratos refinados</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold text-rose-600 font-bold">Obesidad</td>
              <td class="p-3 border border-[#e6e6e6]">&ge; 30.0</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-600 font-bold">&ge; 25.0</td>
              <td class="p-3 border border-[#e6e6e6] font-sans text-rose-600">Evaluación médica de esteatosis y dislipidemia</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>El Fenotipo 'Falso Delgado' y la Paradoja Y-Y</h2>
      <p>El famoso experimento de los doctores Yajnik y Yudkin demostró que dos médicos con idéntico IMC de 22.3 kg/m² presentaban composiciones radicalmente distintas: el médico europeo registraba un 9.1% de grasa corporal frente al <strong>21.2% del médico indio</strong>. Las personas de ascendencia sudasiática presentan una menor masa muscular y una mayor capacidad genética para almacenar grasa visceral alrededor de los órganos abdominales.</p>

      <h2>Límites de Circunferencia de Cintura Específicos</h2>
      <ul>
        <li><strong>Hombres sudasiáticos:</strong> <strong>&le; 90 cm</strong> (frente a 102 cm en varones caucásicos).</li>
        <li><strong>Mujeres sudasiáticas:</strong> <strong>&le; 80 cm</strong> (frente a 88 cm en mujeres caucásicas).</li>
      </ul>
`,
      "fr": `
      <h2>Pourquoi les Seuils d'IMC sont Réduits pour les Populations Asiatiques</h2>
      <p>Les études épidémiologiques ont démontré que les personnes d'origine sud-asiatique présentent un risque cardiométabolique élevé à des valeurs d'IMC considérées comme normales en Occident. L'OMS et l'ICMR recommandent donc les seuils suivants : <strong>18,0 à 22,9 kg/m² pour le poids normal</strong>, <strong>23,0 à 24,9 kg/m² pour le surpoids</strong> et <strong>&ge; 25,0 kg/m² pour l'obésité</strong>.</p>

      <h2>Comparatif des Seuils d'IMC : OMS Global vs. ICMR Asie</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">Statut Pondéral</th>
              <th class="p-3 border border-[#e6e6e6] text-blue-500 font-mono">Norme OMS Globale</th>
              <th class="p-3 border border-[#e6e6e6] text-[#464feb] font-mono font-bold">Recommandation ICMR Inde</th>
              <th class="p-3 border border-[#e6e6e6]">Intervention Clinique</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6] font-mono">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold">Poids normal</td>
              <td class="p-3 border border-[#e6e6e6]">18,5 – 24,9</td>
              <td class="p-3 border border-[#e6e6e6] text-[#464feb] font-bold">18,0 – 22,9</td>
              <td class="p-3 border border-[#e6e6e6] font-sans text-emerald-600 font-bold">Zone optimale de longévité</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold text-amber-600 font-bold">Surpoids</td>
              <td class="p-3 border border-[#e6e6e6]">25,0 – 29,9</td>
              <td class="p-3 border border-[#e6e6e6] text-amber-600 font-bold">23,0 – 24,9</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">Réduction des glucides raffinés</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold text-rose-600 font-bold">Obésité</td>
              <td class="p-3 border border-[#e6e6e6]">&ge; 30,0</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-600 font-bold">&ge; 25,0</td>
              <td class="p-3 border border-[#e6e6e6] font-sans text-rose-600">Bilan hépatique et métabolique approfondi</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Le Phénotype 'Mince-Gras' et le Paradoxe Y-Y</h2>
      <p>L'expérience pionnière des docteurs Yajnik et Yudkin (Le Paradoxe Y-Y) a révélé qu'à un IMC identique de 22,3 kg/m², le médecin d'origine indienne affichait plus du double de masse grasse (21,2% contre 9,1%) par rapport à son confrère européen en raison d'une prédisposition génétique au stockage de graisse viscérale.</p>
`,
      "de": `
      <h2>Warum für Indien gesonderte BMI-Richtwerte gelten</h2>
      <p>Das Y-Y-Paradoxon belegt, dass Menschen südasiatischer Herkunft bei gleichem BMI einen deutlich höheren viszeralen Fettanteil aufweisen, weshalb Übergewicht bereits ab 23,0 kg/m² definiert wird.</p>
      <p>Das Indian Council of Medical Research (ICMR) und die Weltgesundheitsorganisation legten daher fest: <strong>18,0 bis 22,9 kg/m² Normalgewicht</strong>, <strong>23,0 bis 24,9 kg/m² Übergewicht</strong> und <strong>&ge; 25,0 kg/m² Adipositas</strong>.</p>

      <h2>Spezifische Taillenumfang-Grenzwerte</h2>
      <ul>
        <li><strong>Südasiatische Männer:</strong> <strong>&le; 90 cm</strong> (gegenüber 102 cm bei Kaukasiern).</li>
        <li><strong>Südasiatische Frauen:</strong> <strong>&le; 80 cm</strong> (gegenüber 88 cm bei Kaukasierinnen).</li>
      </ul>
`,
      "ko": `
      <h2>아시아인 맞춤형 기준점의 의학적 필요성</h2>
      <p>'마른 비만(Thin-Fat)' 현상으로 인해 아시아 성인은 동일한 BMI에서도 체지방률이 높고 복부 내장 지방이 많아 23.0 kg/m²부터 심대사 위험이 급격히 증가합니다.</p>
      <p>세계보건기구(WHO)와 인도의학연구위원회(ICMR)의 공식 가이드라인은 <strong>18.0~22.9 kg/m²를 정상 체중</strong>, <strong>23.0~24.9 kg/m²를 과체중</strong>, <strong>&ge; 25.0 kg/m²를 비만</strong>으로 분류합니다.</p>

      <h2>허리둘레 기준치 및 심대사 예방</h2>
      <ul>
        <li><strong>남성 권장 허리둘레:</strong> <strong>90 cm 이하</strong> (서양 기준 102 cm 대비 엄격)</li>
        <li><strong>여성 권장 허리둘레:</strong> <strong>80 cm 이하</strong> (서양 기준 88 cm 대비 엄격)</li>
      </ul>
`
    }
  }
};
