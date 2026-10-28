// Module 3: Body Composition, Fat & Muscle Mass (5 Articles)
import type { BlogArticleData } from './types';

export const bodyCompArticles: Record<string, BlogArticleData> = {
  "bmi-vs-body-fat": {
    "datePublished": "2026-07-01",
    "dateModified": "2026-10-28",
    "title": {
      "en": "BMI vs Body Fat Percentage: Key Differences & Clinical Meaning",
      "hi": "बीएमआई बनाम बॉडी फैट प्रतिशत: मुख्य अंतर व स्वास्थ्य महत्व",
      "ko": "BMI vs 체지방률: 측정 방식의 근본적 차이와 임상적 해석",
      "de": "BMI vs. Körperfettanteil: Unterschiede & klinische Bedeutung",
      "es": "IMC vs Porcentaje de Grasa Corporal: Diferencias Clínicas",
      "fr": "IMC vs Pourcentage de Graisse : Différences et Diagnostic"
    },
    "category": {
      "en": "Body Composition Analysis",
      "hi": "शारीरिक संरचना विश्लेषण",
      "ko": "신체 구성 분석",
      "de": "Körperzusammensetzung",
      "es": "Análisis de Composición Corporal",
      "fr": "Composition Corporelle"
    },
    "description": {
      "en": "Explore the critical differences between Body Mass Index and Body Fat Percentage. Learn the 2-compartment vs 4-compartment models, normal weight obesity (NWO), and how to combine both metrics.",
      "hi": "बॉडी मास इंडेक्स और बॉडी फैट प्रतिशत के बीच का अंतर। दो और चार कंपार्टमेंट मॉडल, सामान्य वजन में छिपा मोटापा (NWO) और दोनों मापों का सही संयोजन।",
      "ko": "체질량지수(BMI)와 체지방률(%BF)의 생리학적 차이점을 완벽 비교합니다. 마른 비만(정상체중 비만)의 위험성과 2구획 및 4구획 신체 구성 분석 모델을 상세 안내합니다.",
      "de": "Der Unterschied zwischen BMI und Körperfett: Erfahren Sie, warum die Waage täuschen kann, was 'Skinny Fat' bedeutet und wie beide Werte kombiniert werden.",
      "es": "Diferencias clave entre el IMC y el porcentaje de grasa corporal: modelos de 2 y 4 compartimentos, obesidad de peso normal (NWO) y rangos saludables por género.",
      "fr": "Comprenez les différences entre l'IMC et la masse grasse réelle : modèles à 2 et 4 compartiments, obésité à poids normal et normes physiologiques."
    },
    "contentHtml": {
      "en": `
      <h2>The Critical Distinction Between Gross Mass and Tissue Composition</h2>
      <p>When tracking health, body recomposition, or weight management, individuals frequently encounter confusion between <strong>Body Mass Index (BMI)</strong> and <strong>Body Fat Percentage (%BF)</strong>. While both metrics serve as valuable health parameters, they measure fundamentally distinct physiological phenomena. BMI is a rapid, non-invasive mathematical ratio evaluating total gravitational mass relative to stature. Body fat percentage, in contrast, divides total mass into physiological compartments, quantifying the exact proportion of adipose tissue relative to metabolically active lean tissue.</p>
      <p>Treating these two metrics interchangeably is one of the most common mistakes in fitness and clinical medicine. A muscular athlete with 10% body fat can register an identical BMI to an inactive adult with 35% body fat. Below, we break down the physiological models of human body composition, compare their clinical diagnostic accuracy, and review how to use both parameters together for optimal health management.</p>

      <h2>The Two-Compartment and Four-Compartment Models of the Human Body</h2>
      <p>In clinical exercise physiology and nutritional science, human body composition is evaluated using compartmental modeling:</p>
      <div class="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 rounded-xl border border-[#e6e6e6] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[#464feb]">The 2-Compartment (2C) Model</h3>
          <p class="text-sm text-[var(--foreground)] mt-2">The classic physiological model divides total scale weight into two primary components:</p>
          <ul class="text-xs text-[var(--muted-foreground)] space-y-1 mt-2">
            <li><strong>Fat Mass (FM):</strong> All extractable biological lipids, including essential lipids (in bone marrow, nervous system, and cell membranes) and non-essential storage adipose tissue (subcutaneous and visceral).</li>
            <li><strong>Fat-Free Mass (FFM / Lean Body Mass):</strong> Skeletal muscle tissue, vital internal organs (heart, liver, kidneys), bone mineral matrix, and total body water.</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl border border-[#e6e6e6] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[#464feb]">The Advanced 4-Compartment (4C) Model</h3>
          <p class="text-sm text-[var(--foreground)] mt-2">The scientific gold standard in clinical research further subdivides Fat-Free Mass into:</p>
          <ul class="text-xs text-[var(--muted-foreground)] space-y-1 mt-2">
            <li><strong>Total Body Water (TBW):</strong> Intracellular and extracellular fluid compartments (~60–70% of FFM).</li>
            <li><strong>Bone Mineral Content (BMC):</strong> Hydroxyapatite calcium phosphate crystal matrix.</li>
            <li><strong>Body Cell Mass (Protein):</strong> Enzymatic, contractile skeletal muscle proteins.</li>
            <li><strong>Total Lipid Mass (Fat):</strong> Adipose storage depots.</li>
          </ul>
        </div>
      </div>

      <h2>Comparative Analysis: BMI vs. Body Fat Percentage</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">Evaluation Parameter</th>
              <th class="p-3 border border-[#e6e6e6] text-blue-500 font-bold">Body Mass Index (BMI)</th>
              <th class="p-3 border border-[#e6e6e6] text-emerald-600 font-bold">Body Fat Percentage (%BF)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6]">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">Underlying Measurement</td>
              <td class="p-3 border border-[#e6e6e6]">Total weight divided by height squared (kg/m²)</td>
              <td class="p-3 border border-[#e6e6e6]">Adipose mass divided by total weight &times; 100</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">Equipment Required</td>
              <td class="p-3 border border-[#e6e6e6]">Basic scale and stadiometer (tape measure)</td>
              <td class="p-3 border border-[#e6e6e6]">Skinfold calipers, bioimpedance device, or DEXA scanner</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">Tissue Differentiation</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-500 font-bold">No (treats muscle, fat, and bone identically)</td>
              <td class="p-3 border border-[#e6e6e6] text-emerald-600 font-bold">Yes (isolates adipose tissue from lean mass)</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">Primary Clinical Utility</td>
              <td class="p-3 border border-[#e6e6e6]">Population-level epidemiological screening, rapid risk triage</td>
              <td class="p-3 border border-[#e6e6e6]">Individual metabolic health, sports conditioning, longevity</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">Major Diagnostic Blind Spot</td>
              <td class="p-3 border border-[#e6e6e6]">Classifies muscular individuals as overweight/obese; misses sarcopenia</td>
              <td class="p-3 border border-[#e6e6e6]">Requires calibrated equipment; sensitive to hydration fluctuations</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>The 'Skinny-Fat' Phenomenon: Normal Weight Obesity (NWO)</h2>
      <p>A dangerous cardiometabolic condition termed <strong>Normal Weight Obesity (NWO)</strong> occurs when an individual maintains a normal BMI (18.5 to 24.9 kg/m²) but carries an excessive proportion of body fat (&gt; 25% in men or &gt; 35% in women) alongside underdeveloped skeletal muscle. Individuals with NWO face a four-fold higher risk of developing metabolic syndrome, systemic low-grade inflammation (elevated hs-CRP), and dyslipidemia compared to lean adults of identical weight.</p>

      <h2>Clinical Reference Ranges for Body Fat Percentage</h2>
      <ul class="list-disc pl-5 my-4 space-y-2 text-sm text-[var(--muted-foreground)]">
        <li><strong>Men:</strong> Essential Fat: 2–5% | Athletes: 6–13% | Fitness: 14–17% | Average: 18–24% | Obesity: &ge; 25%</li>
        <li><strong>Women:</strong> Essential Fat: 10–13% | Athletes: 14–20% | Fitness: 21–24% | Average: 25–31% | Obesity: &ge; 32%</li>
      </ul>

      <h2>Scientific References</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Deurenberg P, Weststrate JA, Seidell JC. <em>Body mass index as a measure of body fatness: age- and sex-specific prediction formulas.</em> Br J Nutr 1991; 65(2):105-114. PMID: 2043597.</li>
        <li>Romero-Corral A, et al. <em>Normal weight obesity: a risk factor for cardiometabolic dysregulation and cardiovascular mortality.</em> Eur Heart J 2010; 31(6):737-746. PMID: 19933515.</li>
      </ul>
`,
      "hi": `
      <h2>सकल शारीरिक वजन बनाम ऊतक संरचना: मूलभूत अंतर</h2>
      <p>स्वास्थ्य और फिटनेस की निगरानी करते समय लोग अक्सर <strong>बॉडी मास इंडेक्स (BMI)</strong> और <strong>बॉडी फैट प्रतिशत (%BF)</strong> के बीच भ्रमित हो जाते हैं। यद्यपि दोनों ही स्वास्थ्य के महत्वपूर्ण पैमाने हैं, लेकिन वे शरीर के दो पूरी तरह अलग पहलुओं को मापते हैं। बीएमआई केवल ऊंचाई के अनुपात में कुल वजन का एक गणितीय अनुपात है, जबकि बॉडी फैट प्रतिशत यह स्पष्ट करता है कि उस कुल वजन में कितनी चर्बी (वसा ऊतक) है और कितनी सक्रिय मांसपेशियां व हड्डियां हैं।</p>
      <p>एक भारी मस्कुलर एथलीट जिसका बॉडी फैट केवल 10% है, उसका बीएमआई 28 (ओवरवेट) आ सकता है, जबकि एक सामान्य दिखने वाला व्यक्ति जिसका बीएमआई 22 है, उसके शरीर में 30% से अधिक हानिकारक आंतरिक चर्बी हो सकती है। इसे चिकित्सा में 'थिन-फैट' या सामान्य वजन का मोटापा कहा जाता है।</p>

      <h2>मानव शरीर के 2-कंपार्टमेंट और 4-कंपार्टमेंट वैज्ञानिक मॉडल</h2>
      <p>नैदानिक पोषण विज्ञान में मानव शरीर संरचना को वैज्ञानिक रूप से विभाजित किया जाता है:</p>
      <div class="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 rounded-xl border border-[#e6e6e6] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[#464feb]">2-कंपार्टमेंट (2C) मॉडल</h3>
          <p class="text-sm text-[var(--foreground)] mt-2">शरीर के कुल वजन को दो मुख्य भागों में बांटा जाता है:</p>
          <ul class="text-xs text-[var(--muted-foreground)] space-y-1 mt-2">
            <li><strong>फैट मास (Fat Mass):</strong> शरीर की आवश्यक वसा (अस्थि मज्जा, तंत्रिका तंत्र) तथा त्वचा के नीचे व पेट में जमा अतिरिक्त चर्बी।</li>
            <li><strong>फैट-फ्री मास (Fat-Free Mass / LBM):</strong> कंकाल की मांसपेशियां, आंतरिक अंग (हृदय, यकृत, वृक्क), हड्डियां और कुल शारीरिक जल।</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl border border-[#e6e6e6] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[#464feb]">उन्नत 4-कंपार्टमेंट (4C) मॉडल</h3>
          <p class="text-sm text-[var(--foreground)] mt-2">अनुसंधान का सर्वोच्च मानक जो फैट-फ्री मास को और सूक्ष्म रूप में मापता है:</p>
          <ul class="text-xs text-[var(--muted-foreground)] space-y-1 mt-2">
            <li><strong>कुल शारीरिक जल (TBW):</strong> अंतःकोशिकीय और बाह्यकोशिकीय तरल (~60-70%)।</li>
            <li><strong>अस्थि खनिज घटक (BMC):</strong> कैल्शियम फॉस्फेट क्रिस्टल मैट्रिक्स।</li>
            <li><strong>शारीरिक प्रोटीन:</strong> मांसपेशियों के सिकुड़ने वाले रेशे।</li>
            <li><strong>लिपिड द्रव्यमान:</strong> वसीय ऊतक भंडार।</li>
          </ul>
        </div>
      </div>

      <h2>तुलनात्मक विश्लेषण: बीएमआई बनाम बॉडी फैट प्रतिशत</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">तुलना का आधार</th>
              <th class="p-3 border border-[#e6e6e6] text-blue-500 font-bold">बॉडी मास इंडेक्स (BMI)</th>
              <th class="p-3 border border-[#e6e6e6] text-emerald-600 font-bold">बॉडी फैट प्रतिशत (%BF)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6]">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">मूल मापन सिद्धांत</td>
              <td class="p-3 border border-[#e6e6e6]">कुल वजन / [ऊंचाई]² (kg/m²)</td>
              <td class="p-3 border border-[#e6e6e6]">(कुल वसा द्रव्यमान / कुल शारीरिक भार) &times; 100</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">मांसपेशी व चर्बी में अंतर</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-500 font-bold">नहीं (मांसपेशियों और वसा को एक समान वजन मानता है)</td>
              <td class="p-3 border border-[#e6e6e6] text-emerald-600 font-bold">हाँ (सक्रिय मांसपेशियों को निष्क्रिय वसा से अलग करता है)</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">प्राथमिक चिकित्सीय उपयोग</td>
              <td class="p-3 border border-[#e6e6e6]">जनसंख्या स्तर पर त्वरित स्वास्थ्य स्क्रीनिंग</td>
              <td class="p-3 border border-[#e6e6e6]">व्यक्तिगत चयापचय स्वास्थ्य, एथलेटिक प्रदर्शन व दीर्घायु</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">सबसे बड़ी सीमा / खामी</td>
              <td class="p-3 border border-[#e6e6e6]">मांसपेशियों वाले लोगों को गलत रूप से मोटा बताता है</td>
              <td class="p-3 border border-[#e6e6e6]">विशेष उपकरणों की आवश्यकता होती है; शरीर में पानी की मात्रा से प्रभावित होता है</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>'स्किनी-फैट' स्थिति: सामान्य वजन का छिपा हुआ मोटापा (NWO)</h2>
      <p><strong>नॉर्मल वेट ओबेसिटी (Normal Weight Obesity, NWO)</strong> एक गंभीर स्थिति है जिसमें व्यक्ति का बीएमआई तो 18.5 से 24.9 के बीच सामान्य दिखता है, लेकिन उसके शरीर में फैट प्रतिशत पुरुषों में 25% और महिलाओं में 35% से अधिक होता है। मांसपेशियों की कमी और आंतरिक अंगों में चर्बी जमा होने से इन लोगों में टाइप-2 डायबिटीज, फैटी लिवर और उच्च रक्तचाप का खतरा सामान्य से चार गुना अधिक होता है।</p>

      <h2>बॉडी फैट प्रतिशत के स्वस्थ नैदानिक मानक</h2>
      <ul class="list-disc pl-5 my-4 space-y-2 text-sm text-[var(--muted-foreground)]">
        <li><strong>पुरुष:</strong> आवश्यक वसा: 2–5% | एथलीट्स: 6–13% | फिटनेस: 14–17% | औसत स्वस्थ: 18–24% | मोटापा: &ge; 25%</li>
        <li><strong>महिलाएं:</strong> आवश्यक वसा: 10–13% | एथलीट्स: 14–20% | फिटनेस: 21–24% | औसत स्वस्थ: 25–31% | मोटापा: &ge; 32%</li>
      </ul>

      <h2>प्रमुख वैज्ञानिक संदर्भ एवं शोध उद्धरण</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Deurenberg P, Weststrate JA, Seidell JC. <em>Body mass index as a measure of body fatness: age- and sex-specific prediction formulas.</em> Br J Nutr 1991; 65(2):105-114. PMID: 2043597.</li>
        <li>Romero-Corral A, et al. <em>Normal weight obesity: a risk factor for cardiometabolic dysregulation and cardiovascular mortality.</em> Eur Heart J 2010; 31(6):737-746. PMID: 19933515.</li>
      </ul>
`,
      "es": `
      <h2>Diferencias Clínicas entre el IMC y el Porcentaje de Grasa Corporal</h2>
      <p>El <strong>Índice de Masa Corporal (IMC)</strong> y el <strong>Porcentaje de Grasa Corporal (%GC)</strong> miden variables fisiológicas radicalmente distintas. Mientras que el IMC evalúa la masa total en función de la altura, el porcentaje de grasa desglosa esa masa en compartimentos fisiológicos: tejido adiposo y masa libre de grasa.</p>
      
      <h2>Modelos de 2 y 4 Compartimentos</h2>
      <p>En fisiología del ejercicio, el modelo de 2 compartimentos (2C) separa la masa grasa (FM) de la masa libre de grasa (FFM: músculo, hueso, órganos y agua). El modelo avanzado de 4 compartimentos (4C) cuantifica con exactitud el agua corporal total, el contenido mineral óseo y la masa celular activa.</p>

      <h2>Tabla Comparativa: IMC vs. Porcentaje de Grasa</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">Parámetro</th>
              <th class="p-3 border border-[#e6e6e6] text-blue-500 font-bold">IMC (kg/m²)</th>
              <th class="p-3 border border-[#e6e6e6] text-emerald-600 font-bold">% Grasa Corporal</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6]">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">Diferenciación de Tejidos</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-500 font-bold">No distingue masa muscular de grasa</td>
              <td class="p-3 border border-[#e6e6e6] text-emerald-600 font-bold">Aísla el tejido adiposo activo</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">Utilidad Clínica</td>
              <td class="p-3 border border-[#e6e6e6]">Cribado poblacional rápido</td>
              <td class="p-3 border border-[#e6e6e6]">Salud metabólica y rendimiento atlético</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Obesidad de Peso Normal (NWO)</h2>
      <p>La obesidad de peso normal se define por un IMC normal (18.5 a 24.9) acompañado de un porcentaje de grasa elevado (&gt; 25% en hombres, &gt; 35% en mujeres), lo que multiplica por cuatro el riesgo de síndrome metabólico.</p>
`,
      "fr": `
      <h2>Différence Fondamentale entre IMC et Masse Grasse</h2>
      <p>L'<strong>Indice de Masse Corporelle (IMC)</strong> est un ratio mathématique rapide reliant le poids total à la taille au carré, sans distinguer le tissu musculaire de la masse adipeuse. À l'inverse, le <strong>pourcentage de graisse corporelle</strong> quantifie précisément la proportion de lipides stockés par rapport à la masse maigre métaboliquement active.</p>

      <h2>L'Obésité à Poids Normal : Le Danger Invisible</h2>
      <p>L'obésité à poids normal (Normal Weight Obesity) touche les individus dont l'IMC est compris entre 18,5 et 24,9 kg/m² mais dont la masse grasse dépasse 25% chez l'homme ou 35% chez la femme, augmentant considérablement les risques cardiovasculaires et l'inflammation systémique.</p>
`,
      "de": `
      <h2>Der physiologische Unterschied zwischen BMI und Körperfettanteil</h2>
      <p>Während der BMI lediglich das Verhältnis von Gesamtgewicht zu Körpergröße misst, unterscheidet der Körperfettanteil (%KFA) zwischen stoffwechselaktiver fettfreier Masse und Speicherfettgewebe.</p>

      <h2>Normalgewichtige Adipositas ('Skinny-Fat')</h2>
      <p>Personen mit normalem BMI (18,5–24,9 kg/m²), aber hohem Körperfettanteil (&gt; 25 % bei Männern, &gt; 35 % bei Frauen) weisen ein vierfach erhöhtes Risiko für metabolisches Syndrom und Insulinresistenz auf.</p>
`,
      "ko": `
      <h2>BMI와 체지방률의 근본적 생리학적 차이</h2>
      <p>체질량지수(BMI)는 체중과 신장만을 이용한 신속한 비만도 선별 지표이지만, 근육량과 체지방 조직을 직접 구별하지 못합니다. 반면 <strong>체지방률(%BF)</strong>은 체중 중 실제 지방 조직의 비율을 정확히 측정합니다.</p>

      <h2>정상체중 비만(Normal Weight Obesity, 마른 비만)</h2>
      <p>BMI는 18.5~24.9 kg/m²로 정상이지만 체지방률이 남성 25% 초과, 여성 35%를 초과하는 상태를 의미하며, 심대사 질환 및 인슐린 저항성 발생 위험이 현저히 높습니다.</p>
`
    }
  },

  "how-to-measure-body-fat-percentage": {
    "datePublished": "2026-07-15",
    "dateModified": "2026-10-28",
    "title": {
      "en": "How to Measure Body Fat Percentage: DEXA, Calipers & Methods Compared",
      "hi": "बॉडी फैट प्रतिशत कैसे मापें? डेक्सा स्कैन, कैलिपर्स व विधियों की तुलना",
      "ko": "체지방률 측정법 완벽 비교: DEXA 스캔, 캘리퍼, BIA 및 미 해군 공식",
      "de": "Körperfettanteil messen: DEXA, Caliper & BIA im wissenschaftlichen Vergleich",
      "es": "Cómo Medir el Porcentaje de Grasa Corporal: DEXA, Calibradores y Métodos",
      "fr": "Comment Mesurer son Taux de Graisse : DEXA, Pince et Impédance"
    },
    "category": {
      "en": "Measurement Science & Tools",
      "hi": "मापन विज्ञान और उपकरण",
      "ko": "측정 과학 및 도구",
      "de": "Messmethoden & Diagnostik",
      "es": "Métodos de Medición",
      "fr": "Méthodes de Mesure"
    },
    "description": {
      "en": "Comprehensive clinical comparison of body fat measurement methods. Explore DEXA scans, hydrostatic weighing, skinfold calipers, the U.S. Navy circumference method, and bioimpedance scales.",
      "hi": "बॉडी फैट मापने की 5 प्रमुख विधियों का तुलनात्मक विश्लेषण। जानें डेक्सा स्कैन, हाइड्रोस्टैटिक वेइंग, स्किनफोल्ड कैलिपर्स, नेवी फॉर्मूला और बीआईए स्केल्स की सटीकता।",
      "ko": "체지방률을 정밀하게 측정하는 5가지 임상 방법(DEXA 스캔, 수중 체중 측정법, 캘리퍼 피하지방 측정, 미 해군 신체둘레 공식, 생체전기임피던스 BIA)의 정확도와 비용을 전격 비교합니다.",
      "de": "Wissenschaftlicher Vergleich der 5 Methoden zur Körperfettmessung: DEXA, hydrostatisches Wiegen, Hautfalten-Caliper, US-Navy-Formel und Bioimpedanzwaagen.",
      "es": "Comparativa de métodos para medir grasa corporal: DEXA, pesaje hidrostático, plicómetros, método de la Marina de EE. UU. y básculas de bioimpedancia.",
      "fr": "Comparatif médical des méthodes de mesure de la graisse corporelle : scanner DEXA, pesée hydrostatique, pince à plis cutanés et balance impédancemètre."
    },
    "contentHtml": {
      "en": `
      <h2>Clinical Modalities for Measuring Human Body Fat Percentage</h2>
      <p>Accurately determining human body fat percentage requires specialized diagnostic modalities. Each measurement technique balances clinical precision against cost, radiation exposure, and accessibility. Below, we compare the five primary modalities used in sports science and clinical medicine.</p>

      <h2>The 5 Primary Body Fat Measurement Modalities Compared</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">Modality</th>
              <th class="p-3 border border-[#e6e6e6]">Clinical Accuracy</th>
              <th class="p-3 border border-[#e6e6e6]">Underlying Mechanism</th>
              <th class="p-3 border border-[#e6e6e6]">Primary Limitation</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6]">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-[#464feb]">DEXA Scan (DXA)</td>
              <td class="p-3 border border-[#e6e6e6] text-emerald-600 font-bold">&plusmn; 1.0–1.5% (Gold Standard)</td>
              <td class="p-3 border border-[#e6e6e6]">Dual-energy X-ray photon attenuation through bone, fat, and lean mass</td>
              <td class="p-3 border border-[#e6e6e6]">High clinical cost ($100–$250), minimal ionizing radiation</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">Hydrostatic Weighing</td>
              <td class="p-3 border border-[#e6e6e6] font-bold">&plusmn; 1.5–2.0%</td>
              <td class="p-3 border border-[#e6e6e6]">Archimedes water displacement to compute total body density (Siri equation)</td>
              <td class="p-3 border border-[#e6e6e6]">Requires total underwater submersion after complete lung exhalation</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">Skinfold Calipers (Jackson-Pollock)</td>
              <td class="p-3 border border-[#e6e6e6] font-bold">&plusmn; 3.0–3.5%</td>
              <td class="p-3 border border-[#e6e6e6]">Double-fold subcutaneous pinch at 3 or 7 anatomical landmark sites</td>
              <td class="p-3 border border-[#e6e6e6]">Highly dependent on practitioner calibration; misses deep visceral fat</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-[#464feb]">U.S. Navy Circumference Formula</td>
              <td class="p-3 border border-[#e6e6e6] font-bold">&plusmn; 3.0–4.0%</td>
              <td class="p-3 border border-[#e6e6e6]">Logarithmic equations using neck, waist, hip circumferences and height</td>
              <td class="p-3 border border-[#e6e6e6]">Zero cost, accessible at home; requires strict standardized tape placement</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">Bioelectrical Impedance (BIA)</td>
              <td class="p-3 border border-[#e6e6e6] font-bold">&plusmn; 4.0–6.0%</td>
              <td class="p-3 border border-[#e6e6e6]">Alternating micro-current voltage drop (impedance) through fluid compartments</td>
              <td class="p-3 border border-[#e6e6e6]">Heavily distorted by hydration state, recent meals, caffeine, and menstrual cycle</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>The U.S. Navy Method: Mathematical Architecture</h2>
      <p>Developed by Hodgdon and Beckett (1984) at the Naval Health Research Center, this validated equation estimates body fat using circumferences:</p>
      <ul>
        <li><strong>Men Formula:</strong> <code>%BF = 86.010 &times; log10(waist - neck) - 70.041 &times; log10(height) + 36.76</code></li>
        <li><strong>Women Formula:</strong> <code>%BF = 163.205 &times; log10(waist + hip - neck) - 97.684 &times; log10(height) - 78.387</code></li>
      </ul>
      <p>It remains the most reliable, zero-cost screening tool available for home use.</p>

      <h2>Scientific References</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Hodgdon JA, Beckett PR. <em>Prediction of percent body fat for U.S. Navy men and women from body circumferences and height.</em> Naval Health Research Center Reports 1984; 84-29.</li>
        <li>Jackson AS, Pollock ML. <em>Generalized equations for predicting body density of men.</em> Br J Nutr 1978; 40(3):497-504.</li>
      </ul>
`,
      "hi": `
      <h2>बॉडी फैट प्रतिशत मापने की प्रमुख वैज्ञानिक विधियां</h2>
      <p>मानव शरीर में फैट प्रतिशत को सटीक रूप से मापने के लिए खेल विज्ञान और अस्पतालों में विभिन्न तकनीकों का उपयोग किया जाता है। प्रत्येक विधि की सटीकता, लागत और उपलब्धता अलग-अलग होती है।</p>

      <h2>बॉडी फैट मापने की 5 प्रमुख तकनीकों का तुलनात्मक विश्लेषण</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">मापन विधि</th>
              <th class="p-3 border border-[#e6e6e6]">नैदानिक सटीकता</th>
              <th class="p-3 border border-[#e6e6e6]">कार्य सिद्धांत</th>
              <th class="p-3 border border-[#e6e6e6]">मुख्य सीमा व खर्च</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6]">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-[#464feb]">डेक्सा स्कैन (DEXA Scan)</td>
              <td class="p-3 border border-[#e6e6e6] text-emerald-600 font-bold">&plusmn; 1.0–1.5% (स्वर्ण मानक)</td>
              <td class="p-3 border border-[#e6e6e6]">दोहरी ऊर्जा एक्स-रे फोटॉन द्वारा हड्डियों, वसा और मांसपेशियों का त्रि-आयामी विश्लेषण</td>
              <td class="p-3 border border-[#e6e6e6]">उच्च लागत (₹3,000–₹8,000 प्रति स्कैन), विशेष केंद्रों में ही उपलब्ध</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">हाइड्रोस्टैटिक वेइंग (जल विस्थापन)</td>
              <td class="p-3 border border-[#e6e6e6] font-bold">&plusmn; 1.5–2.0%</td>
              <td class="p-3 border border-[#e6e6e6]">आर्किमिडीज सिद्धांत द्वारा पानी में वजन मापकर शरीर का घनत्व निकालना</td>
              <td class="p-3 border border-[#e6e6e6]">फेफड़ों की पूरी हवा निकालकर पानी में पूरी तरह डूबना पड़ता है</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">स्किनफोल्ड कैलिपर्स (कैलिपर चिमटी)</td>
              <td class="p-3 border border-[#e6e6e6] font-bold">&plusmn; 3.0–3.5%</td>
              <td class="p-3 border border-[#e6e6e6]">शरीर के 3 या 7 विशिष्ट बिंदुओं पर त्वचा के नीचे की वसा की परत की मोटाई मापना</td>
              <td class="p-3 border border-[#e6e6e6]">मापने वाले के कौशल पर निर्भर; पेट की गहरी आंतरिक विसरल चर्बी को नहीं मापता</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-[#464feb]">यू.एस. नेवी फॉर्मूला (टेप माप विधि)</td>
              <td class="p-3 border border-[#e6e6e6] font-bold">&plusmn; 3.0–4.0%</td>
              <td class="p-3 border border-[#e6e6e6]">गर्दन, कमर, कूल्हे और ऊंचाई के गणितीय लॉगरिदमिक अनुपात पर आधारित</td>
              <td class="p-3 border border-[#e6e6e6]">शून्य खर्च, घर पर आसानी से उपलब्ध; टेप सही जगह लगाना आवश्यक</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">बायोइलेक्ट्रिकल इम्पीडेंस (BIA स्केल्स)</td>
              <td class="p-3 border border-[#e6e6e6] font-bold">&plusmn; 4.0–6.0%</td>
              <td class="p-3 border border-[#e6e6e6]">शरीर में हानिरहित सूक्ष्म विद्युत तरंग भेजकर जल प्रतिरोध मापना</td>
              <td class="p-3 border border-[#e6e6e6]">पानी पीने की स्थिति, भोजन, कैफीन और पसीने से परिणाम में बहुत उतार-चढ़ाव आता है</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>यू.एस. नेवी फॉर्मूला: घर पर बॉडी फैट मापने का सबसे सटीक तरीका</h2>
      <p>अमेरिकी नौसेना स्वास्थ्य अनुसंधान केंद्र (हॉजडन व बेकेट, 1984) द्वारा विकसित यह सूत्र सेंटीमीटर में मापी गई परिधियों का उपयोग करता है:</p>
      <ul>
        <li><strong>पुरुषों के लिए:</strong> <code>%BF = 86.010 &times; log10(कमर - गर्दन) - 70.041 &times; log10(ऊंचाई) + 36.76</code></li>
        <li><strong>महिलाओं के लिए:</strong> <code>%BF = 163.205 &times; log10(कमर + कूल्हा - गर्दन) - 97.684 &times; log10(ऊंचाई) - 78.387</code></li>
      </ul>
      <p>यह विधि बिना किसी महंगे उपकरण के घर पर बॉडी फैट ट्रैक करने का सबसे विश्वसनीय और वैज्ञानिक तरीका है।</p>

      <h2>वैज्ञानिक संदर्भ</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Hodgdon JA, Beckett PR. <em>Prediction of percent body fat for U.S. Navy men and women from body circumferences and height.</em> Naval Health Research Center 1984.</li>
        <li>Jackson AS, Pollock ML. <em>Generalized equations for predicting body density of men.</em> Br J Nutr 1978; 40(3):497-504.</li>
      </ul>
`,
      "es": `
      <h2>Métodos Clínicos para Medir el Porcentaje de Grasa Corporal</h2>
      <p>Existen cinco modalidades principales: el <strong>escáner DEXA</strong> (patrón oro hospitalario, precisión &plusmn; 1.5%), el <strong>pesaje hidrostático</strong> subacuático, los <strong>plicómetros de pliegues cutáneos</strong> (Jackson-Pollock), el <strong>método de la Marina de EE. UU.</strong> (basado en circunferencias de cuello, cintura y cadera) y las <strong>básculas de bioimpedancia (BIA)</strong>.</p>
`,
      "fr": `
      <h2>Comment Mesurer son Taux de Graisse Corporelle</h2>
      <p>Le <strong>scanner DEXA</strong> constitue la référence médicale absolue. Pour un suivi régulier à domicile sans frais, la <strong>méthode de la Navy américaine</strong> (mesure du tour de cou, de taille et de hanches) offre une excellente précision clinique (&plusmn; 3%).</p>
`,
      "de": `
      <h2>Methoden zur Bestimmung des Körperfettanteils im Vergleich</h2>
      <p>DEXA-Scans gelten als klinischer Goldstandard. Für den Alltag stellt die <strong>US-Navy-Umfangsmethode</strong> (Taille, Nacken, Hüfte) die verlässlichste, kostenfreie Alternative zu fehleranfälligen Bioimpedanzwaagen dar.</p>
`,
      "ko": `
      <h2>체지방률 정밀 측정 5대 방식 종합 비교</h2>
      <p>병원 임상 기준인 <strong>DEXA 스캔</strong>(오차 &plusmn; 1.5%)이 가장 정확하며, 가정에서는 수분량에 따라 오차가 큰 BIA 체중계보다 <strong>미 해군 둘레 공식(목, 허리, 엉덩이 둘레)</strong>을 활용하는 것이 신뢰도가 높습니다.</p>
`
    }
  },

  "lean-body-mass-calculation-guide": {
    "datePublished": "2026-08-01",
    "dateModified": "2026-10-28",
    "title": {
      "en": "Lean Body Mass (LBM) Guide: Boer, James & Hume Formulas Compared",
      "hi": "लीन बॉडी मास (LBM) गाइड: बोअर, जेम्स व ह्यूम फॉर्मूलों की तुलना",
      "ko": "제지방량(LBM) 계산 가이드: Boer, James, Hume 공식과 기초대사량의 관계",
      "de": "Lean Body Mass (LBM) berechnen: Boer, James & Hume Formeln",
      "es": "Masa Magra Corporal (LBM): Fórmulas de Boer, James y Hume",
      "fr": "Masse Maigre (LBM) : Comparatif des Formules Boer, James et Hume"
    },
    "category": {
      "en": "Body Composition Analysis",
      "hi": "शारीरिक संरचना विश्लेषण",
      "ko": "신체 구성 분석",
      "de": "Körperzusammensetzung",
      "es": "Análisis de Composición Corporal",
      "fr": "Composition Corporelle"
    },
    "description": {
      "en": "Clinical guide to Lean Body Mass (LBM). Compare Boer, James, and Hume formulas, understand step-by-step calculations, and connect LBM to BMR with Katch-McArdle.",
      "hi": "लीन बॉडी मास (LBM) की क्लिनिकल गाइड। बोअर, जेम्स और ह्यूम सूत्रों की तुलना, चरणबद्ध गणना और कैच-मैकआर्डल सूत्र द्वारा बीएमआर का निर्धारण।",
      "ko": "제지방량(LBM)을 정밀 산출하는 3대 의학 공식(Boer, James, Hume)의 장단점과 Katch-McArdle 기초대사량 공식을 심층 분석합니다.",
      "de": "Leitfaden zur fettfreien Magermasse (LBM): Boer, James und Hume Formeln im Vergleich sowie die Katch-McArdle-Stoffwechselgleichung.",
      "es": "Guía clínica de masa magra corporal (LBM): comparativa de las fórmulas de Boer, James y Hume, y cómo calcular el metabolismo basal con Katch-McArdle.",
      "fr": "Guide médical de la masse maigre (LBM) : formules de Boer, James et Hume, calcul pas à pas et lien avec le métabolisme de base (Katch-McArdle)."
    },
    "contentHtml": {
      "en": `
      <h2>The Clinical Significance of Lean Body Mass (LBM)</h2>
      <p><strong>Lean Body Mass (LBM)</strong>—also referred to as Fat-Free Mass (FFM)—represents the total weight of all non-adipose tissues in the human body: skeletal muscle, vital organs (heart, liver, kidneys, brain), bone mineral structure, and intracellular and extracellular fluids. Unlike total scale weight, LBM is the primary physiological driver of resting basal metabolic rate (BMR), systemic glucose disposal, and physical longevity.</p>

      <h2>The Three Primary Clinical LBM Equations</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">Formula</th>
              <th class="p-3 border border-[#e6e6e6] text-blue-500">Men Equation (W in kg, H in cm)</th>
              <th class="p-3 border border-[#e6e6e6] text-rose-500">Women Equation (W in kg, H in cm)</th>
              <th class="p-3 border border-[#e6e6e6]">Clinical Application</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6] font-mono text-xs">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold text-[#464feb]">Boer Formula (1984)</td>
              <td class="p-3 border border-[#e6e6e6] text-blue-500">0.407 &times; W + 0.267 &times; H - 19.2</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-500">0.252 &times; W + 0.473 &times; H - 48.3</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">Hospital medication dosing, renal filtration estimation</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold">James Formula (1976)</td>
              <td class="p-3 border border-[#e6e6e6] text-blue-500">1.10 &times; W - 128 &times; (W / H)²</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-500">1.07 &times; W - 148 &times; (W / H)²</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">Anesthetic drug clearance, baseline metabolic estimation</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold">Hume Formula (1966)</td>
              <td class="p-3 border border-[#e6e6e6] text-blue-500">0.3281 &times; W + 0.33929 &times; H - 29.5336</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-500">0.29569 &times; W + 0.41813 &times; H - 43.2933</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">Pharmacokinetics and body water volume modeling</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>The Katch-McArdle Formula: Linking Lean Body Mass to BMR</h2>
      <p>Standard equations calculate calories using total scale weight. However, fat burns very few calories compared to muscle. The <strong>Katch-McArdle equation</strong> calculates resting metabolic rate directly from Lean Body Mass:</p>
      <div class="my-4 p-4 rounded-xl border border-[#e6e6e6] bg-[var(--card)] font-mono text-sm">
        <code>BMR (kcal/day) = 370 + (21.6 &times; Lean Body Mass in kg)</code>
      </div>
      <p>For an individual with 60 kg of LBM: <code>BMR = 370 + (21.6 &times; 60) = 1,666 kcal/day</code>.</p>

      <h2>Scientific References</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Boer P. <em>Estimated lean body mass as an index for normalization of body fluid volumes in humans.</em> Am J Physiol 1984; 247(4 Pt 2):F632-F636. PMID: 6496712.</li>
        <li>Katch FI, McArdle WD. <em>Nutrition, Weight Control, and Exercise.</em> Boston: Houghton Mifflin, 1977.</li>
      </ul>
`,
      "hi": `
      <h2>लीन बॉडी मास (LBM) का चिकित्सीय व चयापचय महत्व</h2>
      <p><strong>लीन बॉडी मास (Lean Body Mass / LBM)</strong>—जिसे फैट-फ्री मास भी कहा जाता है—शरीर के वसा रहित संपूर्ण भार को दर्शाता है। इसमें कंकाल की मांसपेशियां, महत्वपूर्ण आंतरिक अंग (हृदय, यकृत, वृक्क, मस्तिष्क), हड्डियों का खनिज ढांचा और शरीर का समस्त जल शामिल होता है। कुल शारीरिक भार की तुलना में लीन बॉडी मास ही यह तय करता है कि आपका शरीर आराम की स्थिति में कितनी कैलोरी जलाता है (BMR) और रक्त शर्करा का कितनी कुशलता से निस्तारण करता है।</p>

      <h2>तीन प्रमुख नैदानिक लीन बॉडी मास सूत्र</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">वैज्ञानिक सूत्र</th>
              <th class="p-3 border border-[#e6e6e6] text-blue-500">पुरुष समीकरण (वजन kg, कद cm)</th>
              <th class="p-3 border border-[#e6e6e6] text-rose-500">महिला समीकरण (वजन kg, कद cm)</th>
              <th class="p-3 border border-[#e6e6e6]">नैदानिक उपयोग</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6] font-mono text-xs">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold text-[#464feb]">बोअर फॉर्मूला (Boer 1984)</td>
              <td class="p-3 border border-[#e6e6e6] text-blue-500">0.407 &times; W + 0.267 &times; H - 19.2</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-500">0.252 &times; W + 0.473 &times; H - 48.3</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">अस्पतालों में दवा की खुराक व किडनी फिल्ट्रेशन का आकलन</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold">जेम्स फॉर्मूला (James 1976)</td>
              <td class="p-3 border border-[#e6e6e6] text-blue-500">1.10 &times; W - 128 &times; (W / H)²</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-500">1.07 &times; W - 148 &times; (W / H)²</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">एनेस्थीसिया क्लीयरेंस और आधारभूत मेटाबॉलिज्म</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold">ह्यूम फॉर्मूला (Hume 1966)</td>
              <td class="p-3 border border-[#e6e6e6] text-blue-500">0.3281 &times; W + 0.33929 &times; H - 29.5336</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-500">0.29569 &times; W + 0.41813 &times; H - 43.2933</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">फार्माकोकाइनेटिक्स व शारीरिक जल आयतन मॉडलिंग</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>कैच-मैकआर्डल सूत्र: लीन बॉडी मास से बीएमआर निकालना</h2>
      <p>पारंपरिक सूत्र पूरे वजन के आधार पर कैलोरी निकालते हैं, जिससे अधिक वसा वाले लोगों का कैलोरी लक्ष्य गलत हो जाता है। <strong>कैच-मैकआर्डल (Katch-McArdle) समीकरण</strong> केवल सक्रिय मांसपेशियों और अंगों के वजन पर आधारित है:</p>
      <div class="my-4 p-4 rounded-xl border border-[#e6e6e6] bg-[var(--card)] font-mono text-sm">
        <code>BMR (kcal/दिन) = 370 + (21.6 &times; लीन बॉडी मास kg में)</code>
      </div>
      <p>उदाहरण के लिए, 60 kg लीन मास वाले व्यक्ति का न्यूनतम दैनिक कैलोरी खर्च <code>370 + (21.6 &times; 60) = 1,666 kcal/दिन</code> होगा।</p>

      <h2>मांसपेशियों की सुरक्षा क्यों जरूरी है?</h2>
      <ul>
        <li><strong>मेटाबॉलिज्म की सुरक्षा:</strong> मांसपेशियां आराम की अवस्था में वसा की तुलना में 3 गुना अधिक कैलोरी खर्च करती हैं। डाइटिंग के दौरान मांसपेशियां घटने से मेटाबॉलिज्म धीमा हो जाता है।</li>
        <li><strong>ग्लूकोज नियंत्रण:</strong> भोजन के बाद 80% से अधिक ग्लूकोज कंकाल की मांसपेशियों में ही अवशोषित होता है। अधिक लीन मास डायबिटीज से सीधी सुरक्षा देता है।</li>
        <li><strong>बुढ़ापे में कमजोरी से बचाव (Sarcopenia):</strong> पर्याप्त मांसपेशियां उम्र बढ़ने पर हड्डियों को टूटने से बचाती हैं और संतुलन बनाए रखती हैं।</li>
      </ul>

      <h2>वैज्ञानिक संदर्भ</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Boer P. <em>Estimated lean body mass as an index for normalization of body fluid volumes in humans.</em> Am J Physiol 1984; 247:F632-F636. PMID: 6496712.</li>
        <li>Katch FI, McArdle WD. <em>Nutrition, Weight Control, and Exercise.</em> Boston: Houghton Mifflin, 1977.</li>
      </ul>
`,
      "es": `
      <h2>Importancia Clínica de la Masa Magra Corporal (LBM)</h2>
      <p>La masa magra engloba todos los tejidos libres de grasa (músculo, hueso, órganos y agua). Las fórmulas clínicas de <strong>Boer (1984)</strong>, <strong>James (1976)</strong> y <strong>Hume (1966)</strong> permiten estimarla con precisión matemática para dosificación hospitalaria y cálculo metabólico mediante la fórmula de <strong>Katch-McArdle</strong> (BMR = 370 + 21.6 &times; LBM en kg).</p>
`,
      "fr": `
      <h2>Rôle Métabolique de la Masse Maigre (LBM)</h2>
      <p>La masse maigre représente le déterminant majeur de la dépense énergétique de repos. L'équation de Boer (1984) et la formule métabolique de Katch-McArdle permettent d'adapter les apports caloriques et protéiques au profil musculaire réel de chaque individu.</p>
`,
      "de": `
      <h2>Klinische Bedeutung der fettfreien Magermasse (LBM)</h2>
      <p>Die Formeln nach Boer, James und Hume berechnen die fettfreie Masse als Grundlage für Arzneimitteldosierungen und die Katch-McArdle-Formel zur präzisen Bestimmung des Grundumsatzes.</p>
`,
      "ko": `
      <h2>제지방량(LBM) 산출 공식과 대사적 가치</h2>
      <p>Boer(1984), James(1976), Hume(1966) 공식은 체중과 신장을 통해 제지방량을 산출하며, 이를 바탕으로 한 Katch-McArdle 공식은 근육량 중심의 가장 정확한 기초대사량을 도출합니다.</p>
`
    }
  },

  "waist-to-hip-ratio-guide": {
    "datePublished": "2026-08-15",
    "dateModified": "2026-10-28",
    "title": {
      "en": "Waist-to-Hip Ratio Guide: Measuring Protocol & Heart Risk Thresholds",
      "hi": "कमर-कूल्हा अनुपात (WHR) गाइड: मापन प्रोटोकॉल व हृदय जोखिम सीमाएं",
      "ko": "허리-엉덩이 둘레 비율(WHR) 가이드: WHO 측정 프로토콜 및 심혈관 위험도",
      "de": "Taille-Hüft-Verhältnis (WHR): Messung & kardiovaskuläre Grenzwerte",
      "es": "Relación Cintura-Cadera (RCC): Protocolo de Medición y Riesgo Cardíaco",
      "fr": "Ratio Taille-Hanches (RTH) : Protocole de Mesure et Risques Cardiaques"
    },
    "category": {
      "en": "Cardiovascular Screening",
      "hi": "हृदय स्वास्थ्य और स्क्रीनिंग",
      "ko": "심혈관 건강 선별",
      "de": "Kardiovaskuläres Screening",
      "es": "Cribado Cardiovascular",
      "fr": "Dépistage Cardiovasculaire"
    },
    "description": {
      "en": "Official guide to the Waist-to-Hip Ratio (WHR). Learn the standardized WHO measuring protocol, android vs gynoid fat distribution, and gender-specific cardiovascular risk thresholds.",
      "hi": "कमर-कूल्हा अनुपात (WHR) की आधिकारिक गाइड। डब्ल्यूएचओ मापन तकनीक, पेट की चर्बी (एंड्रॉइड) बनाम कूल्हे की चर्बी (गाइनॉइड) और हृदय रोग की सीमाएं।",
      "ko": "세계보건기구(WHO) 공인 허리-엉덩이 둘레 비율(WHR) 가이드. 사과형(내장지방)과 서양배형(피하지방) 체형 구분법과 성별 심혈관 질환 위험 기준치를 확인하세요.",
      "de": "Leitfaden zum Taille-Hüft-Verhältnis (WHR): WHO-Messanleitung, viszerales Bauchfett vs. subkutanes Hüftfett und kardiovaskuläre Risikoschwellen.",
      "es": "Guía de la relación cintura-cadera (RCC): protocolo oficial de la OMS, grasa androide vs ginoide y valores de corte para hombres y mujeres.",
      "fr": "Guide du ratio taille-hanches (RTH) : protocole officiel de l'OMS, différenciation graisse androïde vs ginoïde et seuils de risque coronarien."
    },
    "contentHtml": {
      "en": `
      <h2>Waist-to-Hip Ratio (WHR): Clinical Protocol and Diagnostic Value</h2>
      <p>While Body Mass Index evaluates overall weight relative to height, it provides zero insight into where fat is stored on the body. Clinical cardiology and endocrinology recognize that <strong>fat distribution matters far more than total scale weight</strong> in predicting cardiovascular events, stroke, and metabolic syndrome. The <strong>Waist-to-Hip Ratio (WHR)</strong> is the gold-standard epidemiological measurement for distinguishing android (abdominal/apple) from gynoid (gluteofemoral/pear) fat distribution.</p>

      <h2>Official WHO and International Diabetes Federation (IDF) Risk Thresholds</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">Cardiometabolic Risk Level</th>
              <th class="p-3 border border-[#e6e6e6] text-blue-500 font-bold">Men WHR Range</th>
              <th class="p-3 border border-[#e6e6e6] text-rose-500 font-bold">Women WHR Range</th>
              <th class="p-3 border border-[#e6e6e6]">Clinical Meaning</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6] font-mono">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold text-emerald-600 font-bold">Low Risk (Healthy Gynoid)</td>
              <td class="p-3 border border-[#e6e6e6] text-emerald-600 font-bold">&le; 0.90</td>
              <td class="p-3 border border-[#e6e6e6] text-emerald-600 font-bold">&le; 0.80</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">Optimal visceral fat levels; lowest cardiovascular morbidity</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold text-amber-600 font-bold">Moderate Risk</td>
              <td class="p-3 border border-[#e6e6e6] text-amber-600 font-bold">0.91 – 0.99</td>
              <td class="p-3 border border-[#e6e6e6] text-amber-600 font-bold">0.81 – 0.84</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">Early central fat accumulation; lifestyle intervention recommended</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold text-rose-600 font-bold">High Risk (Android Obesity)</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-600 font-bold">&ge; 1.00</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-600 font-bold">&ge; 0.85</td>
              <td class="p-3 border border-[#e6e6e6] font-sans text-rose-600">Substantially elevated incidence of Type 2 diabetes and heart attacks</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>The INTERHEART Study: Why WHR Outperforms BMI</h2>
      <p>The definitive scientific justification for prioritizing WHR over BMI came from the landmark <strong>INTERHEART study</strong> in <em>The Lancet</em> (27,098 participants across 52 countries). Researchers proved that abdominal obesity measured by Waist-to-Hip Ratio accounts for over <strong>24% of all first heart attacks worldwide</strong>, whereas BMI showed a weak and inconsistent correlation.</p>

      <h2>Scientific References</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>World Health Organization. <em>Waist circumference and waist-hip ratio: report of a WHO expert consultation.</em> Geneva: WHO, 2011.</li>
        <li>Yusuf S, Hawken S, Ounpuu S, et al. <em>Obesity and the risk of myocardial infarction in 27,000 participants from 52 countries: a case-control study.</em> The Lancet 2005; 366(9497):1640-1649. PMID: 16271642.</li>
      </ul>
`,
      "hi": `
      <h2>कमर-कूल्हा अनुपात (WHR): मापन प्रोटोकॉल और हृदय स्वास्थ्य</h2>
      <p>बॉडी मास इंडेक्स केवल ऊंचाई के अनुपात में कुल वजन बताता है, लेकिन यह नहीं बता पाता कि चर्बी शरीर के किस हिस्से में जमा है। कार्डियोलॉजी में यह सिद्ध हो चुका है कि <strong>चर्बी का वितरण कुल वजन से कहीं अधिक महत्वपूर्ण है</strong>। <strong>कमर-कूल्हा अनुपात (Waist-to-Hip Ratio / WHR)</strong> पेट की आंतरिक चर्बी (एंड्रॉइड/सेब जैसी आकृति) और कूल्हों की चर्बी (गाइनॉइड/नाशपाती जैसी आकृति) के बीच अंतर करने का सबसे सटीक पैमाना है।</p>

      <h2>डब्ल्यूएचओ मापन प्रोटोकॉल (टेप से सही माप कैसे लें?)</h2>
      <ol class="space-y-2 my-4">
        <li><strong>कमर का घेरा:</strong> सीधे खड़े होकर सामान्य रूप से सांस बाहर छोड़ें। अपनी सबसे निचली पसली और कूल्हे की हड्डी के ठीक बीच के सबसे संकरे हिस्से पर लचीला टेप लपेटें।</li>
        <li><strong>कूल्हे का घेरा:</strong> नितंबों (हिप्स) के सबसे चौड़े हिस्से पर टेप को जमीन के बिल्कुल समानांतर रखते हुए मापें।</li>
        <li><strong>अनुपात की गणना:</strong> <code>WHR = कमर का माप / कूल्हे का माप</code> (दोनों माप एक ही इकाई में होने चाहिए, जैसे सेंटीमीटर)।</li>
      </ol>

      <h2>विश्व स्वास्थ्य संगठन (WHO) द्वारा निर्धारित जोखिम सीमाएं</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">हृदय-संवहनी जोखिम स्तर</th>
              <th class="p-3 border border-[#e6e6e6] text-blue-500 font-bold">पुरुष WHR सीमा</th>
              <th class="p-3 border border-[#e6e6e6] text-rose-500 font-bold">महिला WHR सीमा</th>
              <th class="p-3 border border-[#e6e6e6]">नैदानिक स्वास्थ्य प्रभाव</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6] font-mono">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold text-emerald-600 font-bold">कम जोखिम (स्वस्थ गाइनॉइड)</td>
              <td class="p-3 border border-[#e6e6e6] text-emerald-600 font-bold">&le; 0.90</td>
              <td class="p-3 border border-[#e6e6e6] text-emerald-600 font-bold">&le; 0.80</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">विसरल फैट का सुरक्षित स्तर; न्यूनतम हृदय रोग जोखिम</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold text-amber-600 font-bold">मध्यम जोखिम</td>
              <td class="p-3 border border-[#e6e6e6] text-amber-600 font-bold">0.91 – 0.99</td>
              <td class="p-3 border border-[#e6e6e6] text-amber-600 font-bold">0.81 – 0.84</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">पेट में चर्बी का संचय शुरू; खानपान व व्यायाम में सुधार आवश्यक</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold text-rose-600 font-bold">उच्च जोखिम (एंड्रॉइड मोटापा)</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-600 font-bold">&ge; 1.00</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-600 font-bold">&ge; 0.85</td>
              <td class="p-3 border border-[#e6e6e6] font-sans text-rose-600">टाइप-2 डायबिटीज, स्ट्रोक और दिल के दौरे का अत्यधिक जोखिम</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>प्रसिद्ध इंटरहार्ट (INTERHEART) अध्ययन के निष्कर्ष</h2>
      <p>52 देशों के 27,000 से अधिक लोगों पर किए गए प्रतिष्ठित <em>The Lancet</em> के <strong>INTERHEART अध्ययन</strong> ने साबित किया कि दिल के दौरे की भविष्यवाणी करने में बीएमआई की तुलना में कमर-कूल्हा अनुपात कहीं अधिक शक्तिशाली है। शीर्ष 20% WHR वाले व्यक्तियों में दिल का दौरा पड़ने की संभावना सामान्य से <strong>3 गुना अधिक</strong> पाई गई। पेट की भीतरी चर्बी सीधे पोर्टल वेन द्वारा लिवर में फ्री फैटी एसिड छोड़ती है, जिससे धमनियों में सूजन और ब्लॉकेज तेजी से बढ़ता है।</p>

      <h2>वैज्ञानिक संदर्भ</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>World Health Organization. <em>Waist circumference and waist-hip ratio: report of a WHO expert consultation.</em> Geneva: WHO, 2011.</li>
        <li>Yusuf S, et al. <em>Obesity and the risk of myocardial infarction in 27,000 participants from 52 countries.</em> The Lancet 2005; 366:1640-1649. PMID: 16271642.</li>
      </ul>
`,
      "es": `
      <h2>Protocolo Oficial de la Relación Cintura-Cadera (RCC)</h2>
      <p>La relación cintura-cadera es el estándar epidemiológico para diferenciar la distribución androide (abdominal) de la ginoide (glúteos y muslos). El estudio internacional INTERHEART (The Lancet) demostró que la obesidad abdominal evaluada por la RCC predice el riesgo de infarto de miocardio con mucha mayor precisión que el IMC.</p>
      <p><strong>Criterios de riesgo de la OMS:</strong> Riesgo elevado a partir de <strong>&ge; 0.90 en hombres</strong> y <strong>&ge; 0.85 en mujeres</strong>.</p>
`,
      "fr": `
      <h2>Protocole Officiel du Ratio Taille-Hanches (RTH)</h2>
      <p>L'étude internationale INTERHEART a prouvé que la graisse abdominale viscérale mesurée par le ratio taille-hanches explique plus de 24% des premiers infarctus du myocarde dans le monde. L'OMS fixe le seuil d'alerte cardiovasculaire à <strong>0,90 chez l'homme</strong> et <strong>0,85 chez la femme</strong>.</p>
`,
      "de": `
      <h2>Taille-Hüft-Verhältnis (WHR): Risikoschwellen nach WHO</h2>
      <p>Die renommierte INTERHEART-Studie belegte, dass das Taille-Hüft-Verhältnis Herzinfarkte dreifach genauer vorhersagt als der BMI. Werte ab <strong>0,90 bei Männern</strong> und <strong>0,85 bei Frauen</strong> kennzeichnen behandlungsbedürftiges viszerales Bauchfett.</p>
`,
      "ko": `
      <h2>허리-엉덩이 둘레 비율(WHR)과 심근경색 위험도</h2>
      <p>52개국 2만 7천 명을 대상으로 한 란셋(Lancet) INTERHEART 연구는 복부 비만을 나타내는 WHR이 단순 BMI보다 심근경색을 3배 더 정확히 예측함을 입증했습니다. WHO 기준치는 <strong>남성 0.90 이하</strong>, <strong>여성 0.80 이하</strong>가 정상입니다.</p>
`
    }
  },

  "ideal-body-weight-formulas": {
    "datePublished": "2026-09-01",
    "dateModified": "2026-10-28",
    "title": {
      "en": "Ideal Body Weight Formulas: Devine, Robinson, Miller & Hamwi Compared",
      "hi": "आदर्श शारीरिक वजन (IBW) फॉर्मूले: डिवाइन, रॉबिन्सन, मिलर व हामवी की तुलना",
      "ko": "이상 체중(IBW) 공식 비교: Devine, Robinson, Miller 및 Hamwi 완벽 분석",
      "de": "Idealgewicht-Formeln im Vergleich: Devine, Robinson, Miller & Hamwi",
      "es": "Fórmulas de Peso Corporal Ideal: Devine, Robinson, Miller y Hamwi",
      "fr": "Formules du Poids Idéal : Comparatif Devine, Robinson, Miller et Hamwi"
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
      "en": "Clinical comparison of the four major Ideal Body Weight (IBW) equations: Devine, Robinson, Miller, and Hamwi. Learn how hospitals dose medications and adjust weight for obesity.",
      "hi": "चार प्रमुख आदर्श वजन (IBW) फॉर्मूलों की तुलना। जानें कि अस्पताल दवाओं की सही खुराक निर्धारित करने के लिए डिवाइन समीकरण का उपयोग कैसे करते हैं।",
      "ko": "병원 임상 투약 및 인공호흡기 설정에 사용되는 4대 이상 체중(IBW) 공식(Devine, Robinson, Miller, Hamwi)의 산출식과 비만 환자를 위한 조정 체중(AdjBW)을 비교합니다.",
      "de": "Klinischer Vergleich der 4 Idealgewicht-Formeln: Devine, Robinson, Miller und Hamwi sowie die Anwendung des korrigierten Körpergewichts.",
      "es": "Comparativa de las cuatro fórmulas de peso ideal clínico: Devine, Robinson, Miller y Hamwi, y cómo calcular el peso corporal ajustado en obesidad.",
      "fr": "Comparatif clinique des 4 formules de poids idéal (Devine, Robinson, Miller, Hamwi) et calcul du poids ajusté pour la posologie médicale."
    },
    "contentHtml": {
      "en": `
      <h2>The History and Clinical Science of Ideal Body Weight (IBW)</h2>
      <p>In medical pharmacokinetics, toxicology, and nutritional therapy, healthcare professionals frequently need to determine an individual's <strong>Ideal Body Weight (IBW)</strong>. While standard Body Mass Index provides a broad healthy weight range spanning nearly 20 kilograms, clinical situations such as mechanical ventilation tidal volume calculation, chemotherapy dosing, and aminoglycoside antibiotic administration require exact single-number targets based on physiological lung volume and lean tissue distribution.</p>

      <h2>The Four Major Clinical Ideal Body Weight Formulas</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">Formula</th>
              <th class="p-3 border border-[#e6e6e6] text-blue-500">Men Equation (Height &gt; 5 ft / 60 inches)</th>
              <th class="p-3 border border-[#e6e6e6] text-rose-500">Women Equation (Height &gt; 5 ft / 60 inches)</th>
              <th class="p-3 border border-[#e6e6e6]">Clinical Application</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6] font-mono text-xs">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold text-[#464feb]">Devine Formula (1974)</td>
              <td class="p-3 border border-[#e6e6e6] text-blue-500">50.0 kg + 2.3 kg &times; (Height in - 60)</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-500">45.5 kg + 2.3 kg &times; (Height in - 60)</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">Universal ICU standard, ventilator tidal volumes (ARDSnet)</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold">Robinson Formula (1983)</td>
              <td class="p-3 border border-[#e6e6e6] text-blue-500">52.0 kg + 1.9 kg &times; (Height in - 60)</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-500">49.0 kg + 1.7 kg &times; (Height in - 60)</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">Empirical nutritional therapy, slightly higher baseline</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold">Miller Formula (1983)</td>
              <td class="p-3 border border-[#e6e6e6] text-blue-500">56.2 kg + 1.41 kg &times; (Height in - 60)</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-500">53.1 kg + 1.36 kg &times; (Height in - 60)</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">Adjusts weight curve for shorter adult statures</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold">Hamwi Formula (1964)</td>
              <td class="p-3 border border-[#e6e6e6] text-blue-500">106 lbs + 6 lbs &times; (Height in - 60)</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-500">100 lbs + 5 lbs &times; (Height in - 60)</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">Widely used in United States clinical dietetics</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Adjusted Body Weight (AdjBW) for Individuals with Obesity</h2>
      <p>When an individual weighs significantly above their Ideal Body Weight (BMI &ge; 30 kg/m² or Actual Weight &gt; 120% of IBW), dosing medications based purely on actual total weight causes drug toxicity. Clinical pharmacologists calculate <strong>Adjusted Body Weight (AdjBW)</strong>:</p>
      <div class="my-4 p-4 rounded-xl border border-[#e6e6e6] bg-[var(--card)] font-mono text-sm">
        <code>Adjusted Body Weight (kg) = IBW + 0.40 &times; (Actual Weight - IBW)</code>
      </div>

      <h2>Critical Care: Mechanical Ventilation in ARDS</h2>
      <p>During acute respiratory distress syndrome (ARDS), the ARDS Network clinical trial proved that mechanical ventilators must be set to deliver low tidal volumes of <strong>6 mL per kilogram of Ideal Body Weight (not actual weight)</strong>. Lungs do not expand when a person gains adipose tissue; setting ventilator volumes based on actual weight ruptures alveoli (barotrauma).</p>

      <h2>Scientific References</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Devine BJ. <em>Gentamicin therapy.</em> Drug Intell Clin Pharm 1974; 8:650-655.</li>
        <li>The ARDS Network. <em>Ventilation with lower tidal volumes for acute lung injury and ARDS.</em> N Engl J Med 2000; 342:1301-1308. PMID: 10793162.</li>
      </ul>
`,
      "hi": `
      <h2>आदर्श शारीरिक वजन (IBW) का इतिहास और चिकित्सीय महत्व</h2>
      <p>क्लिनिकल मेडिसिन, आईसीयू क्रिटिकल केयर और फार्माकोलॉजी में डॉक्टरों को किसी मरीज के <strong>आदर्श शारीरिक वजन (Ideal Body Weight / IBW)</strong> की सटीक गणना करनी होती है। जहां बीएमआई लगभग 15 से 20 किलोग्राम की एक विस्तृत वजन सीमा देता है, वहीं अस्पताल में वेंटिलेटर की सेटिंग्स, कीमोथेरेपी और एंटीबायोटिक्स (जैसे वैनकोमाइसिन व जेंटामाइसिन) की सटीक खुराक तय करने के लिए मरीज के फेफड़ों और सक्रिय अंगों के आधार पर एक निश्चित वजन आंकड़े की आवश्यकता होती है।</p>

      <h2>आदर्श वजन के चार प्रमुख ऐतिहासिक और नैदानिक सूत्र</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">सूत्र का नाम</th>
              <th class="p-3 border border-[#e6e6e6] text-blue-500">पुरुष समीकरण (5 फीट से अधिक ऊंचाई पर)</th>
              <th class="p-3 border border-[#e6e6e6] text-rose-500">महिला समीकरण (5 फीट से अधिक ऊंचाई पर)</th>
              <th class="p-3 border border-[#e6e6e6]">प्रमुख चिकित्सीय उपयोग</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#e6e6e6] font-mono text-xs">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold text-[#464feb]">डिवाइन फॉर्मूला (Devine 1974)</td>
              <td class="p-3 border border-[#e6e6e6] text-blue-500">50.0 kg + 2.3 kg &times; (इंच - 60)</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-500">45.5 kg + 2.3 kg &times; (इंच - 60)</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">विश्वव्यापी आईसीयू मानक, वेंटिलेटर टाइडल वॉल्यूम (ARDSnet)</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold">रॉबिन्सन फॉर्मूला (Robinson 1983)</td>
              <td class="p-3 border border-[#e6e6e6] text-blue-500">52.0 kg + 1.9 kg &times; (इंच - 60)</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-500">49.0 kg + 1.7 kg &times; (इंच - 60)</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">नैदानिक पोषण और आहार योजना निर्धारण</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold">मिलर फॉर्मूला (Miller 1983)</td>
              <td class="p-3 border border-[#e6e6e6] text-blue-500">56.2 kg + 1.41 kg &times; (इंच - 60)</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-500">53.1 kg + 1.36 kg &times; (इंच - 60)</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">कम ऊंचाई वाले वयस्कों के लिए संशोधित वक्र</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-sans font-semibold">हामवी फॉर्मूला (Hamwi 1964)</td>
              <td class="p-3 border border-[#e6e6e6] text-blue-500">106 lbs + 6 lbs &times; (इंच - 60)</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-500">100 lbs + 5 lbs &times; (इंच - 60)</td>
              <td class="p-3 border border-[#e6e6e6] font-sans">अमेरिकी क्लिनिकल डायटेटिक्स में व्यापक रूप से प्रचलित</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>मोटे व्यक्तियों के लिए समायोजित शारीरिक वजन (Adjusted Body Weight)</h2>
      <p>जब किसी मरीज का वास्तविक वजन उसके आदर्श वजन से 20% अधिक या बीएमआई 30 से अधिक होता है, तो दवा की खुराक कुल वजन पर देने से विषाक्तता (toxicity) हो सकती है। इसलिए फार्माकोलॉजिस्ट <strong>एडजस्टेड बॉडी वेट (AdjBW)</strong> की गणना करते हैं:</p>
      <div class="my-4 p-4 rounded-xl border border-[#e6e6e6] bg-[var(--card)] font-mono text-sm">
        <code>एडजस्टेड वजन (kg) = IBW + 0.40 &times; (वास्तविक वजन - IBW)</code>
      </div>
      <p>उदाहरण के लिए, यदि 70 किग्रा आदर्श वजन वाले व्यक्ति का वास्तविक वजन 120 किग्रा है, तो उसका समायोजित वजन <code>70 + 0.4 &times; (120 - 70) = 90.0 किग्रा</code> होगा, जिसका उपयोग एंटीबायोटिक खुराक के लिए किया जाता है।</p>

      <h2>आईसीयू में वेंटिलेटर सेटिंग्स: फेफड़ों की सुरक्षा</h2>
      <p>तीव्र श्वसन संकट (ARDS) के दौरान, प्रसिद्ध ARDS Network परीक्षण ने साबित किया कि मैकेनिकल वेंटिलेटर को वास्तविक वजन के बजाय <strong>आदर्श वजन के प्रति किलोग्राम केवल 6 मिलीलीटर टाइडल वॉल्यूम</strong> पर सेट किया जाना चाहिए। वजन बढ़ने पर फेफड़े बड़े नहीं होते; वास्तविक वजन पर वेंटिलेटर चलाने से फेफड़ों की वायु-थैलियां फट सकती हैं (barotrauma)।</p>

      <h2>वैज्ञानिक संदर्भ</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Devine BJ. <em>Gentamicin therapy.</em> Drug Intell Clin Pharm 1974; 8:650-655.</li>
        <li>The ARDS Network. <em>Ventilation with lower tidal volumes for acute lung injury and ARDS.</em> N Engl J Med 2000; 342:1301-1308. PMID: 10793162.</li>
      </ul>
`,
      "es": `
      <h2>Fórmulas Clínicas de Peso Corporal Ideal (IBW)</h2>
      <p>Las fórmulas de <strong>Devine (1974)</strong>, <strong>Robinson (1983)</strong>, <strong>Miller (1983)</strong> y <strong>Hamwi (1964)</strong> son la referencia en farmacocinética para calcular la dosis de antibióticos y el volumen corriente en ventilación mecánica (ARDSnet: 6 mL/kg de peso ideal, no real). En pacientes con obesidad, se aplica el <strong>peso corporal ajustado (AdjBW = IBW + 0.40 &times; [Peso Real - IBW])</strong>.</p>
`,
      "fr": `
      <h2>Formules du Poids Idéal Médical (IBW)</h2>
      <p>La formule de Devine (1974) est le standard mondial en réanimation pour le réglage des volumes des respirateurs artificiels et l'ajustement posologique des médicaments à marge thérapeutique étroite.</p>
`,
      "de": `
      <h2>Klinische Idealgewichtsformeln im Vergleich</h2>
      <p>Die Devine-Formel dient seit 1974 als intensivmedizinischer Standard für Beatmungsvolumina (6 ml/kg Idealgewicht) und das korrigierte Körpergewicht bei Adipositas.</p>
`,
      "ko": `
      <h2>임상 투약 및 중환자 관리를 위한 이상 체중(IBW)</h2>
      <p>Devine(1974), Robinson(1983), Miller(1983), Hamwi(1964) 공식 중 Devine 공식이 인공호흡기 설정(이상 체중 kg당 6mL) 및 비만 환자의 조정 체중(AdjBW) 산출에 표준으로 사용됩니다.</p>
`
    }
  }
};
