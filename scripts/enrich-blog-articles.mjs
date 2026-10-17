import fs from 'fs';
import path from 'path';

// Load existing blogArticles
const filePath = path.resolve('src/utils/blogArticles.ts');
const fileContent = fs.readFileSync(filePath, 'utf-8');

// Match the JSON-like object
const match = fileContent.match(/export const blogArticles: Record<string, any> = (\{[\s\S]*?\n\};)/);
if (!match) {
  console.error("Could not find blogArticles object in src/utils/blogArticles.ts");
  process.exit(1);
}

const existingObj = new Function(`return ${match[1]}`)();

// Keep first 5 articles
const preservedKeys = [
  'bmi-calculator-india',
  'what-is-bmi',
  'is-bmi-accurate',
  'bmr-vs-tdee-calculator',
  'bmi-chart-for-men-women'
];

const newArticles = {};
for (const key of preservedKeys) {
  newArticles[key] = existingObj[key];
}

// 6. healthy-bmi-range-indians
newArticles['healthy-bmi-range-indians'] = {
  title: {
    en: "Healthy BMI for Indians: Asian Cut-offs & Risks",
    hi: "भारतीयों के लिए स्वस्थ बीएमआई: एशियाई सीमाएं व स्वास्थ्य जोखिम",
    ko: "한국인 및 아시아인 정상 BMI 범위: 18.5~22.9 가이드",
    de: "Gesunder BMI für Asiaten: Richtlinie 18,5–22,9",
    es: "IMC Saludable para Poblaciones Asiáticas: Guía y Pautas OMS",
    fr: "IMC Santé pour Populations Asiatiques : Guide OMS 18,5–22,9"
  },
  category: {
    en: "Asian Health Guidance",
    hi: "एशियाई स्वास्थ्य मार्गदर्शन",
    ko: "아시아 건강 지침",
    de: "Regionale Gesundheit",
    es: "Salud Regional",
    fr: "Santé Régionale"
  },
  description: {
    en: "Why is 18.5–22.9 the healthy BMI range for Asian populations? Review clinical research on cardiometabolic risk, visceral adiposity, and ICMR-WHO guidelines.",
    hi: "एशियाई आबादी के लिए 18.5–22.9 स्वस्थ बीएमआई क्यों है? कार्डियोमेटाबॉलिक जोखिम, आंतरिक विसरल फैट और आईसीएमआर-डब्ल्यूएचओ दिशानिर्देशों का विस्तृत विश्लेषण।",
    ko: "아시아 성인에게 18.5~22.9 구간이 표준 건강 권장선인 과학적 이유를 확인하세요. 마른 비만(TOFI), 복부 내장 지방이 심혈관 대사 건강에 미치는 영향과 세계보건기구(WHO)의 세부 지침을 상세히 설명합니다. 개인정보 수집 없는 안전한 브라우저 연산 안내.",
    de: "Warum liegt der gesunde BMI für asiatische Gruppen bei 18,5–22,9? Erfahren Sie mehr über viszerales Bauchfett, kardiometabolische Risiken und WHO-Standards.",
    es: "¿Por qué 18.5–22.9 es el rango saludable para poblaciones asiáticas? Analiza la investigación médica sobre grasa visceral, riesgo metabólico y pautas OMS.",
    fr: "Pourquoi 18,5–22,9 est-il la plage santé pour les adultes asiatiques ? Découvrez les données sur la graisse viscérale et les directives officielles de l'OMS."
  },
  contentHtml: {
    en: `
      <h2>Asian-Population BMI Guidelines & Reference Cutoffs</h2>
      <p>Published epidemiological research and consensus statements from the <strong>World Health Organization (WHO) Expert Consultation (Lancet 2004)</strong> and the <strong>Indian Council of Medical Research (ICMR)</strong> confirm that standard Western BMI cut-offs do not align directly with South Asian cardiometabolic risk patterns. In South Asian and Asian populations, health risk indicators (including insulin resistance, hypertension, dyslipidemia, and type 2 diabetes) manifest at substantially lower Body Mass Index thresholds than in European cohorts.</p>

      <h2>The Asian-Population Reference Range: 18.5 to 22.9 kg/m²</h2>
      <p>Under conventional WHO international classifications, overweight begins at 25.0 kg/m². However, for adults of Asian descent, public health guidelines define the healthy baseline range as <strong>18.5 to 22.9 kg/m²</strong>. The cutoff of <strong>23.0 kg/m²</strong> serves as an established public health action threshold representing moderate risk (overweight), while <strong>27.5 kg/m²</strong> designates high risk (obesity).</p>

      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">Classification</th>
              <th class="p-3">Standard International BMI</th>
              <th class="p-3 text-[var(--accent)] font-extrabold">WHO Asian / ICMR BMI</th>
              <th class="p-3">Clinical Action Indicator</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)]">
            <tr>
              <td class="p-3 font-semibold">Underweight</td>
              <td class="p-3 font-mono">&lt; 18.5 kg/m²</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">&lt; 18.5 kg/m²</td>
              <td class="p-3">Evaluate nutritional sufficiency and lean mass</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Normal / Healthy Range</td>
              <td class="p-3 font-mono">18.5 – 24.9 kg/m²</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">18.5 – 22.9 kg/m²</td>
              <td class="p-3">Population baseline reference range</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Overweight (Action Threshold)</td>
              <td class="p-3 font-mono">25.0 – 29.9 kg/m²</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">23.0 – 27.4 kg/m²</td>
              <td class="p-3">Increased cardiometabolic surveillance recommended</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Obesity Class I</td>
              <td class="p-3 font-mono">30.0 – 34.9 kg/m²</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">27.5 – 32.4 kg/m²</td>
              <td class="p-3">High risk; lifestyle intervention and clinical screening</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Obesity Class II+</td>
              <td class="p-3 font-mono">&ge; 35.0 kg/m²</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">&ge; 32.5 kg/m²</td>
              <td class="p-3">Very high risk requiring medical management</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Why the Disparity? The "Thin-Fat Phenotype"</h2>
      <p>The primary physiological driver behind this lower threshold is body composition: South Asian individuals frequently exhibit the <strong>"Thin-Fat Phenotype"</strong> (also referred to as <em>TOFI: Thin on the Outside, Fat on the Inside</em>). Even when total scale weight appears normal, individuals may have a higher percentage of total body fat and, crucially, greater deposits of <strong>visceral adipose tissue</strong>—fat packed deep inside the abdominal cavity around the liver, pancreas, and intestines—paired with lower skeletal muscle mass.</p>

      <h2>Waist Circumference Cut-offs for South Asian Adults</h2>
      <p>Because BMI cannot measure abdominal fat distribution directly, consensus panels strongly advise combining BMI screening with waist circumference measurements:</p>
      <ul>
        <li><strong>South Asian Men:</strong> Waist circumference &ge; <strong>90 cm (35.4 inches)</strong> indicates increased abdominal obesity risk.</li>
        <li><strong>South Asian Women:</strong> Waist circumference &ge; <strong>80 cm (31.5 inches)</strong> indicates increased abdominal obesity risk.</li>
      </ul>

      <h2>Screening Limitations & Next Steps</h2>
      <p>A BMI reading between 18.5 and 22.9 kg/m² serves as an educational population reference, not an individualized guarantee of optimal health. Comprehensive health assessments should integrate blood pressure monitoring, fasting blood glucose, HbA1c, and lipid panels under the care of a licensed physician.</p>
    `,
    hi: `
      <h2>भारतीय एवं एशियाई आबादी के लिए बीएमआई दिशानिर्देश</h2>
      <p><strong>विश्व स्वास्थ्य संगठन (WHO Lancet 2004)</strong> और <strong>इंडियन काउंसिल ऑफ मेडिकल रिसर्च (ICMR)</strong> के साक्ष्य-आधारित दिशानिर्देश यह स्पष्ट करते हैं कि अंतरराष्ट्रीय पश्चिमी बीएमआई कट-ऑफ भारतीय आबादी के लिए उपयुक्त नहीं हैं। दक्षिण एशियाई वयस्कों में टाइप 2 मधुमेह, उच्च रक्तचाप और हृदय रोग के जोखिम काफी कम वजन और कम बीएमआई स्तर पर ही प्रकट होने लगते हैं।</p>

      <h2>18.5 से 22.9 kg/m²: एशियाई सामान्य वजन सीमा</h2>
      <p>पश्चिमी मानकों में 25.0 kg/m² पर ओवरवेट माना जाता है, जबकि एशियाई आबादी के लिए सामान्य स्वस्थ सीमा <strong>18.5 से 22.9 kg/m²</strong> निर्धारित की गई है। <strong>23.0 kg/m²</strong> को 'एक्शन थ्रेशोल्ड' (ओवरवेट) माना जाता है, जहां से स्वास्थ्य जांच और जीवनशैली में सुधार की आवश्यकता होती है।</p>

      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">श्रेणी</th>
              <th class="p-3">अंतरराष्ट्रीय मानक</th>
              <th class="p-3 text-[var(--accent)] font-extrabold">एशियाई / ICMR मानक</th>
              <th class="p-3">स्वास्थ्य संदर्भ संकेत</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)]">
            <tr>
              <td class="p-3 font-semibold">कम वजन (Underweight)</td>
              <td class="p-3 font-mono">&lt; 18.5 kg/m²</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">&lt; 18.5 kg/m²</td>
              <td class="p-3">पोषण व मांसपेशियों के स्तर की जांच</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">सामान्य वजन (Healthy)</td>
              <td class="p-3 font-mono">18.5 – 24.9 kg/m²</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">18.5 – 22.9 kg/m²</td>
              <td class="p-3">अनुशंसित सामान्य स्वास्थ्य संदर्भ</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">अधिक वजन (Overweight)</td>
              <td class="p-3 font-mono">25.0 – 29.9 kg/m²</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">23.0 – 27.4 kg/m²</td>
              <td class="p-3">बढ़ा हुआ जोखिम; आहार व व्यायाम परामर्श</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">मोटापा श्रेणी I (Obese)</td>
              <td class="p-3 font-mono">&ge; 30.0 kg/m²</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">&ge; 27.5 kg/m²</td>
              <td class="p-3">उच्च जोखिम; नैदानिक रक्त परीक्षण आवश्यक</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>"थिन-फैट फेनोटाइप" (Thin-Fat Phenotype) क्या है?</h2>
      <p>भारतीयों में कम बीएमआई पर भी बीमारी का जोखिम अधिक होने का मुख्य कारण शरीर की संरचना है। इसे <em>थिन-फैट फेनोटाइप</em> कहा जाता है: शरीर बाहर से सामान्य या पतला दिखता है, लेकिन आंतरिक अंगों के आसपास <strong>विसरल फैट (आंतरिक वसा)</strong> अधिक और कंकाल की मांसपेशियां कम होती हैं।</p>

      <h2>कमर की परिधि के दिशानिर्देश</h2>
      <p>आईसीएमआर दिशानिर्देशों के अनुसार केवल बीएमआई पर निर्भर न रहकर कमर की माप की जांच भी करें:</p>
      <ul>
        <li><strong>पुरुषों के लिए:</strong> कमर की परिधि <strong>&ge; 90 सेमी (35.4 इंच)</strong> होने पर जोखिम अधिक माना जाता है।</li>
        <li><strong>महिलाओं के लिए:</strong> कमर की परिधि <strong>&ge; 80 सेमी (31.5 इंच)</strong> होने पर जोखिम अधिक माना जाता है।</li>
      </ul>

      <h2>महत्वपूर्ण निष्कर्ष</h2>
      <p>बीएमआई केवल एक प्राथमिक स्क्रीनिंग सूचक है, चिकित्सीय निदान नहीं। सटीक स्वास्थ्य मूल्यांकन के लिए पंजीकृत चिकित्सक से रक्तचाप, ब्लड शुगर और लिपिड प्रोफाइल की जांच करवाएं।</p>
    `,
    es: `
      <h2>Directrices de IMC para Poblaciones Asiáticas y de India</h2>
      <p>Las investigaciones de la <strong>Organización Mundial de la Salud (OMS, Lancet 2004)</strong> y el <strong>Consejo Indio de Investigación Médica (ICMR)</strong> demuestran que los puntos de corte estándar occidentales no reflejan adecuadamente los riesgos metabólicos en poblaciones asiáticas. En estos grupos, los factores de riesgo cardiovascular y diabetes tipo 2 aparecen con niveles de IMC significativamente más bajos.</p>

      <h2>Rango de Referencia Saludable: 18.5 a 22.9 kg/m²</h2>
      <p>Mientras que en Europa y América el sobrepeso comienza en 25.0 kg/m², para adultos de origen asiático el rango saludable se sitúa entre <strong>18.5 y 22.9 kg/m²</strong>. El umbral de <strong>23.0 kg/m²</strong> marca el sobrepeso, y <strong>27.5 kg/m²</strong> define la obesidad de clase I.</p>

      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">Categoría</th>
              <th class="p-3">Estándar Internacional</th>
              <th class="p-3 text-[var(--accent)] font-extrabold">Corte OMS Asiático</th>
              <th class="p-3">Indicador de Acción</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)]">
            <tr>
              <td class="p-3 font-semibold">Bajo Peso</td>
              <td class="p-3 font-mono">&lt; 18.5 kg/m²</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">&lt; 18.5 kg/m²</td>
              <td class="p-3">Revisión de suficiencia nutricional</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Peso Normal</td>
              <td class="p-3 font-mono">18.5 – 24.9 kg/m²</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">18.5 – 22.9 kg/m²</td>
              <td class="p-3">Rango de referencia saludable recomendado</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Sobrepeso</td>
              <td class="p-3 font-mono">25.0 – 29.9 kg/m²</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">23.0 – 27.4 kg/m²</td>
              <td class="p-3">Umbral de acción preventiva y control</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Obesidad</td>
              <td class="p-3 font-mono">&ge; 30.0 kg/m²</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">&ge; 27.5 kg/m²</td>
              <td class="p-3">Alto riesgo metabólico y seguimiento médico</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>El Fenotipo "Delgado por Fuera, Graso por Dentro" (TOFI)</h2>
      <p>La razón principal de esta diferencia es la composición corporal. Muchas personas de ascendencia sudasiática presentan una mayor proporción de <strong>grasa visceral abdominal</strong> acumulada alrededor de los órganos internos a pesar de tener un peso corporal total aparentemente bajo o normal, acompañado de una menor masa muscular esquelética.</p>

      <h2>Circunferencia de Cintura Recomendada</h2>
      <p>Los expertos recomiendan medir la circunferencia de la cintura junto con el IMC:</p>
      <ul>
        <li><strong>Hombres asiáticos:</strong> &ge; <strong>90 cm</strong> indica riesgo aumentado.</li>
        <li><strong>Mujeres asiáticas:</strong> &ge; <strong>80 cm</strong> indica riesgo aumentado.</li>
      </ul>

      <h2>Consideraciones Finales</h2>
      <p>El IMC es una métrica de detección educativa poblacional, no un diagnóstico clínico individualizado. Consulte a su médico para evaluar su tensión arterial, glucemia basal y perfil lipídico.</p>
    `,
    fr: `
      <h2>Normes d'IMC pour les Populations Asiatiques et Sud-Asiatiques</h2>
      <p>Les données de consultation d'experts publiées par l'<strong>Organisation Mondiale de la Santé (OMS, Lancet 2004)</strong> établissent que les seuils d'IMC occidentaux classiques ne correspondent pas aux profils de risque cardiométabolique des populations d'Asie. Chez les adultes sud-asiatiques, les risques d'hypertension, de dyslipidémie et de diabète de type 2 surviennent à des indices de masse corporelle nettement plus faibles.</p>

      <h2>La Plage de Référence Asiatique : 18,5 à 22,9 kg/m²</h2>
      <p>Dans les normes internationales habituelles, le surpoids débute à 25,0 kg/m². Cependant, pour les populations asiatiques, l'OMS recommande une plage de poids normal comprise entre <strong>18,5 et 22,9 kg/m²</strong>. Le seuil de <strong>23,0 kg/m²</strong> constitue un seuil d'intervention (surpoids), tandis que <strong>27,5 kg/m²</strong> définit l'obésité.</p>

      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">Classification</th>
              <th class="p-3">Seuil International</th>
              <th class="p-3 text-[var(--accent)] font-extrabold">Seuil OMS Asie</th>
              <th class="p-3">Indicateur Clinique</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)]">
            <tr>
              <td class="p-3 font-semibold">Sous-poids</td>
              <td class="p-3 font-mono">&lt; 18,5 kg/m²</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">&lt; 18,5 kg/m²</td>
              <td class="p-3">Évaluation de l'apport nutritionnel</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Poids Normal</td>
              <td class="p-3 font-mono">18,5 – 24,9 kg/m²</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">18,5 – 22,9 kg/m²</td>
              <td class="p-3">Plage de référence santé recommandée</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Surpoids</td>
              <td class="p-3 font-mono">25,0 – 29,9 kg/m²</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">23,0 – 27,4 kg/m²</td>
              <td class="p-3">Seuil d'action préventive et surveillance</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Obésité</td>
              <td class="p-3 font-mono">&ge; 30,0 kg/m²</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">&ge; 27,5 kg/m²</td>
              <td class="p-3">Risque métabolique élevé; suivi médical</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Le Phénotype "Mince à l'Extérieur, Gras à l'Intérieur" (TOFI)</h2>
      <p>Cette différence découle de la composition corporelle : les personnes d'origine asiatique présentent en moyenne une proportion plus élevée de <strong>graisse viscérale abdominale</strong> à un IMC égal, combinée à une masse musculaire plus restreinte. Cette graisse profonde entourant les organes abdominaux altère directement la sensibilité à l'insuline.</p>

      <h2>Seuils de Tour de Taille Recommandés</h2>
      <p>L'évaluation du tour de taille apporte un complément indispensable :</p>
      <ul>
        <li><strong>Hommes sud-asiatiques :</strong> Tour de taille &ge; <strong>90 cm</strong> (risque accru).</li>
        <li><strong>Femmes sud-asiatiques :</strong> Tour de taille &ge; <strong>80 cm</strong> (risque accru).</li>
      </ul>

      <h2>Avertissement</h2>
      <p>L'IMC est un outil statistique de dépistage préliminaire et ne remplace pas un examen médical complet avec bilan biologique (glycémie, lipides, pression artérielle).</p>
    `,
    de: `
      <h2>BMI-Richtlinien für asiatische Bevölkerungen</h2>
      <p>Konsensusberichte der <strong>Weltgesundheitsorganisation (WHO Lancet 2004)</strong> und medizinischer Fachgesellschaften belegen, dass internationale Standard-Grenzwerte das kardiometabolische Risiko asiatischer Bevölkerungsgruppen unterschätzen. Typ-2-Diabetes und Gefäßerkrankungen treten bei südasiatischen Erwachsenen bereits bei deutlich niedrigeren BMI-Werten auf.</p>

      <h2>Der gesunde Asien-Referenzbereich: 18,5 bis 22,9 kg/m²</h2>
      <p>Während der internationale Grenzwert für Übergewicht bei 25,0 kg/m² liegt, definiert die WHO für asiatische Erwachsene einen Normalgewichtsbereich von <strong>18,5 bis 22,9 kg/m²</strong>. Der Wert von <strong>23,0 kg/m²</strong> stellt einen Interventions-Grenzwert dar, ab <strong>27,5 kg/m²</strong> beginnt die Adipositas-Klassifikation.</p>

      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">Kategorie</th>
              <th class="p-3">Internationaler Standard</th>
              <th class="p-3 text-[var(--accent)] font-extrabold">WHO Asien Grenzwert</th>
              <th class="p-3">Medizinische Orientierung</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)]">
            <tr>
              <td class="p-3 font-semibold">Untergewicht</td>
              <td class="p-3 font-mono">&lt; 18,5 kg/m²</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">&lt; 18,5 kg/m²</td>
              <td class="p-3">Ernährungsstatus und Muskelmasse prüfen</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Normalgewicht</td>
              <td class="p-3 font-mono">18,5 – 24,9 kg/m²</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">18,5 – 22,9 kg/m²</td>
              <td class="p-3">Empfohlener Referenzbereich</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Übergewicht</td>
              <td class="p-3 font-mono">25,0 – 29,9 kg/m²</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">23,0 – 27,4 kg/m²</td>
              <td class="p-3">Erhöhtes Risiko; Lebensstilanpassung</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Adipositas</td>
              <td class="p-3 font-mono">&ge; 30,0 kg/m²</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">&ge; 27,5 kg/m²</td>
              <td class="p-3">Hohes Risiko; ärztliche Abklärung ratsam</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Ursache: Der "Thin-Fat"-Phänotyp</h2>
      <p>Hintergrund ist die abweichende Körperzusammensetzung: Asiatische Menschen weisen bei identischem Körpergewicht häufig einen höheren Anteil an <strong>viszeralem Bauchfett</strong> und gleichzeitig eine geringere Skelettmuskelmasse auf als kaukasische Vergleichsgruppen.</p>

      <h2>Taillenumfang als ergänzender Indikator</h2>
      <p>Ergänzend zum BMI empfiehlt die WHO die Messung des Bauchumfangs:</p>
      <ul>
        <li><strong>Männer:</strong> Taillenumfang &ge; <strong>90 cm</strong> signalisiert erhöhtes Risiko.</li>
        <li><strong>Frauen:</strong> Taillenumfang &ge; <strong>80 cm</strong> signalisiert erhöhtes Risiko.</li>
      </ul>

      <h2>Zusammenfassung</h2>
      <p>Der BMI ist ein statistisches Screening-Instrument. Zur individuellen Risikobewertung sollten stets Blutdruck, Nüchternglukose und Blutfettwerte durch einen Arzt beurteilt werden.</p>
    `,
    ko: `
      <h2>아시아인 및 한국인을 위한 BMI 기준과 건강 지침</h2>
      <p><strong>세계보건기구(WHO 서태평양지역사무처)</strong>와 <strong>대한비만학회</strong>의 역학 연구에 따르면, 서구 기준의 BMI 분별점은 아시아인의 심대사 질환 위험을 적절히 반영하지 못합니다. 아시아인은 서구인에 비해 상대적으로 낮은 BMI 수치에서도 제2형 당뇨병, 고혈압, 이상지질혈증 등의 위험이 조기에 증가하는 경향이 있습니다.</p>

      <h2>아시아 표준 권장 정상 범위: 18.5 ~ 22.9 kg/m²</h2>
      <p>서구 기준에서는 25.0 kg/m² 이상을 과체중으로 분류하지만, 아시아인 기준에서는 <strong>18.5 ~ 22.9 kg/m²</strong>를 정상 체중으로 권장합니다. <strong>23.0 kg/m²</strong>부터는 과체중(위험 증가), <strong>25.0 또는 27.5 kg/m²</strong> 이상은 비만 범주로 분류됩니다.</p>

      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">분류</th>
              <th class="p-3">국제 표준 BMI</th>
              <th class="p-3 text-[var(--accent)] font-extrabold">WHO 아시아 기준</th>
              <th class="p-3">건강 관리 권장사항</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)]">
            <tr>
              <td class="p-3 font-semibold">저체중</td>
              <td class="p-3 font-mono">&lt; 18.5 kg/m²</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">&lt; 18.5 kg/m²</td>
              <td class="p-3">영양 섭취 및 근육량 보충 필요</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">정상 체중</td>
              <td class="p-3 font-mono">18.5 – 24.9 kg/m²</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">18.5 – 22.9 kg/m²</td>
              <td class="p-3">표준 건강 유지 권장 범위</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">과체중 (위험 증가)</td>
              <td class="p-3 font-mono">25.0 – 29.9 kg/m²</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">23.0 – 24.9 kg/m²</td>
              <td class="p-3">식습관 점검 및 유산소/근력 운동 권장</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">비만 1단계</td>
              <td class="p-3 font-mono">30.0 – 34.9 kg/m²</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">25.0 – 29.9 kg/m²</td>
              <td class="p-3">심혈관 질환 예방 및 생활습관 개선</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>마른 비만과 내장 지방(Visceral Fat)의 중요성</h2>
      <p>체중이 정상 범위에 속하더라도 골격근량이 적고 복부 내장 주위에 지방이 집중된 <em>'마른 비만'</em> 형태는 대사 증후군의 주요 원인이 됩니다. 따라서 체질량지수뿐만 아니라 허리둘레 측정을 반드시 병행해야 합니다.</p>

      <h2>허리둘레 기준선</h2>
      <ul>
        <li><strong>남성:</strong> <strong>90 cm (약 35.4인치)</strong> 이상 시 복부 비만 주의</li>
        <li><strong>여성:</strong> <strong>85 cm (약 33.5인치)</strong> 이상 시 복부 비만 주의</li>
      </ul>

      <h2>안내 사항</h2>
      <p>BMI는 기초 선별 검사 도구이며 개인의 진단 검사를 대신할 수 없습니다. 정확한 건강 상태 파악을 위해서는 정기 건강검진을 통한 혈압, 혈당 및 지질 검사가 필수적입니다.</p>
    `
  }
};

// 7. bmi-calculator-teens
newArticles['bmi-calculator-teens'] = {
  title: {
    en: "BMI Calculator for Teens: Percentiles & Growth",
    hi: "किशोरों और बच्चों के लिए बीएमआई: पर्सेंटाइल और ग्रोथ चार्ट",
    ko: "청소년 및 소아 BMI 계산기: 백분위수 성장 도표",
    de: "BMI Rechner für Jugendliche: Perzentilen & Skala",
    es: "Calculadora de IMC para Adolescentes: Percentiles y Crecimiento",
    fr: "Calculateur IMC pour Adolescents : Percentiles et Croissance"
  },
  category: {
    en: "Pediatric Health",
    hi: "बाल स्वास्थ्य",
    ko: "소아 건강",
    de: "Kindergesundheit",
    es: "Salud Infantil",
    fr: "Santé Pédiatrique"
  },
  description: {
    en: "Complete guide to teen and pediatric BMI percentiles (ages 2–19). Learn how CDC growth charts evaluate weight status differently than adult BMI calculations.",
    hi: "बच्चों और किशोरों (2 से 19 वर्ष) के लिए बीएमआई पर्सेंटाइल गाइड। जानें कि सीडीसी ग्रोथ चार्ट उम्र और लिंग के अनुसार स्वास्थ्य का सटीक मूल्यांकन कैसे करते हैं।",
    ko: "어린이 및 청소년(2~19세)을 위한 소아 청소년 BMI 백분위수 종합 가이드입니다. 미국 CDC 연령별·성별 성장 도표를 적용하여 성인 기준과 다른 자녀의 성장 발달 상태를 올바르고 정밀하게 평가하는 법을 안내합니다. 개인정보 수집 없는 안전한 브라우저 연산 제공.",
    de: "Leitfaden zu BMI-Perzentilen für Kinder und Jugendliche (2–19 Jahre). Erfahren Sie, wie CDC-Wachstumskurven den Entwicklungsstand altersgerecht einordnen.",
    es: "Guía de percentiles de IMC para niños y adolescentes (2 a 19 años). Aprende cómo las tablas de crecimiento de los CDC evalúan el desarrollo según edad y sexo.",
    fr: "Guide des percentiles d'IMC pour enfants et ados (2 à 19 ans). Comprenez comment les courbes de croissance du CDC évaluent la santé selon l'âge et le sexe."
  },
  contentHtml: {
    en: `
      <h2>Why Pediatric BMI Differs from Adult BMI</h2>
      <p>In growing children and teenagers (ages 2 through 19), body composition is in a continuous state of development. Body fat percentage changes dramatically with skeletal growth, muscle development, and puberty. Furthermore, physiological growth patterns differ substantially between biological boys and girls of the same calendar age.</p>
      <p>For this reason, <strong>fixed adult BMI cut-offs (such as 18.5, 25.0, or 30.0 kg/m²) cannot be used for adolescents</strong>. Instead, pediatric health authorities (including the <strong>CDC</strong> and the <strong>American Academy of Pediatrics</strong>) evaluate youth weight status using <strong>BMI-for-Age Percentiles</strong>.</p>

      <h2>Understanding CDC Growth Chart Percentiles</h2>
      <p>A teen's BMI percentile expresses their relative position compared to a national reference population of youth of the exact same age (in months) and biological sex:</p>

      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">Weight Category</th>
              <th class="p-3 font-mono text-[var(--accent)]">CDC Percentile Range</th>
              <th class="p-3">Clinical Context & Follow-up</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)]">
            <tr>
              <td class="p-3 font-semibold">Underweight</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">&lt; 5th percentile</td>
              <td class="p-3">May indicate caloric insufficiency or delayed growth spurt</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Healthy Weight</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">5th to &lt; 85th percentile</td>
              <td class="p-3">Normal growth trajectory consistent with developmental norms</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Overweight</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">85th to &lt; 95th percentile</td>
              <td class="p-3">Review family physical activity, sleep, and nutritional patterns</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Obesity</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">&ge; 95th percentile</td>
              <td class="p-3">Comprehensive pediatric clinical assessment recommended</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Growth Trajectories Over Time Matter Most</h2>
      <p>A single percentile reading provides only a snapshot. Pediatricians monitor a teen's growth curve over consecutive annual visits. For instance, a teen who has consistently grown along the 70th percentile is following a stable personal growth pattern, whereas a sharp jump from the 50th to the 92nd percentile within 12 months warrants supportive exploration.</p>

      <h2>Practical Guidance for Families & Teens</h2>
      <ul>
        <li><strong>Avoid Restrictive Diets:</strong> Growing teenagers require balanced macronutrients, calcium, vitamin D, and iron for bone mineralization and cognitive growth. Extreme calorie restriction can harm endocrine health.</li>
        <li><strong>Daily Movement:</strong> Public health recommendations advise at least 60 minutes of moderate-to-vigorous physical activity daily, combining aerobic play with muscle-strengthening exercises.</li>
        <li><strong>Restorative Sleep:</strong> Adolescents need 8 to 10 hours of quality sleep per night for optimal metabolic regulation and growth hormone release.</li>
      </ul>
    `,
    hi: `
      <h2>किशोरों के लिए बीएमआई वयस्कों से भिन्न क्यों है?</h2>
      <p>बच्चों और किशोरों (2 से 19 वर्ष) के शरीर में निरंतर विकास और हार्मोनल परिवर्तन होते रहते हैं। प्यूबर्टी (किशोरावस्था) के दौरान हड्डियों की लंबाई, मांसपेशियों का विकास और वसा का वितरण तेजी से बदलता है। इसके अलावा, समान आयु के लड़कों और लड़कियों में शारीरिक विकास की गति अलग-अलग होती है।</p>
      <p>यही कारण है कि <strong>वयस्कों के निश्चित बीएमआई आंकड़े (18.5 या 25.0) बच्चों पर लागू नहीं किए जा सकते</strong>। बाल रोग विशेषज्ञ इसके स्थान पर <strong>सीडीसी ग्रोथ चार्ट पर्सेंटाइल (CDC Growth Chart Percentiles)</strong> का उपयोग करते हैं।</p>

      <h2>सीडीसी पर्सेंटाइल श्रेणियों की व्याख्या</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">श्रेणी</th>
              <th class="p-3 font-mono text-[var(--accent)]">सीडीसी पर्सेंटाइल</th>
              <th class="p-3">अर्थ व बाल स्वास्थ्य संदर्भ</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)]">
            <tr>
              <td class="p-3 font-semibold">कम वजन (Underweight)</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">&lt; 5वां पर्सेंटाइल</td>
              <td class="p-3">पोषण की कमी या धीमी विकास दर का संकेत</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">स्वस्थ वजन (Healthy)</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">5वां से 84वां पर्सेंटाइल</td>
              <td class="p-3">सामान्य और संतुलित शारीरिक विकास</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">अधिक वजन (Overweight)</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">85वां से 94वां पर्सेंटाइल</td>
              <td class="p-3">शारीरिक गतिविधि और खानपान पर ध्यान देने की आवश्यकता</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">मोटापा (Obese)</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">&ge; 95वां पर्सेंटाइल</td>
              <td class="p-3">बाल रोग विशेषज्ञ से परामर्श की सिफारिश</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>विकास की निरंतरता का महत्व</h2>
      <p>एक बार का बीएमआई माप पूरी स्थिति नहीं बताता। डॉक्टर समय के साथ बच्चे के विकास वक्र (Growth Curve) की निगरानी करते हैं। यदि कोई बच्चा हमेशा 60वें पर्सेंटाइल पर रहा है तो यह सामान्य है, लेकिन अचानक भारी बदलाव आने पर विशेषज्ञ से जांच करवानी चाहिए।</p>

      <h2>अभिभावकों के लिए स्वास्थ्य सलाह</h2>
      <ul>
        <li>बच्चों पर सख्त डाइटिंग न थोपें; संतुलित आहार, फल, सब्जियां और दूध दें।</li>
        <li>प्रतिदिन कम से कम 60 मिनट का खेलकूद या शारीरिक व्यायाम सुनिश्चित करें।</li>
        <li>पर्याप्त 8 से 10 घंटे की नींद मानसिक और शारीरिक विकास के लिए आवश्यक है।</li>
      </ul>
    `,
    es: `
      <h2>Por Qué el IMC Pediátrico Difiere del IMC de Adultos</h2>
      <p>En niños y adolescentes en crecimiento (de 2 a 19 años), la composición corporal cambia constantemente debido al estirón puberal, el desarrollo muscular y la mineralización ósea. Además, los patrones de grasa corporal difieren drásticamente entre niños y niñas de la misma edad cronológica.</p>
      <p>Por este motivo, <strong>los cortes fijos de adultos (como 18.5 o 25.0) no se aplican a menores</strong>. Los pediatras y los <strong>Centros para el Control y la Prevención de Enfermedades (CDC)</strong> emplean <strong>percentiles de IMC por edad y sexo</strong>.</p>

      <h2>Interpretación de las Tablas de Percentiles de los CDC</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">Categoría de Peso</th>
              <th class="p-3 font-mono text-[var(--accent)]">Percentil CDC</th>
              <th class="p-3">Contexto Clínico</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)]">
            <tr>
              <td class="p-3 font-semibold">Bajo Peso</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">&lt; Percentil 5</td>
              <td class="p-3">Posible ingesta calórica insuficiente o retraso constitucional</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Peso Saludable</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">Percentil 5 a &lt; 85</td>
              <td class="p-3">Trayectoria de crecimiento y desarrollo óptima</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Sobrepeso</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">Percentil 85 a &lt; 95</td>
              <td class="p-3">Revisar hábitos de alimentación familiar y actividad física</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Obesidad</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">&ge; Percentil 95</td>
              <td class="p-3">Evaluación médica pediátrica integral recomendada</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>La Curva de Crecimiento a lo Largo del Tiempo</h2>
      <p>Un percentil aislado es solo una instantánea. Los pediatras observan la trayectoria del percentil a lo largo de los años. Una ganancia repentina de varios percentiles es más relevante clínicamente que una posición estable mantenida.</p>

      <h2>Consejos Prácticos para la Familia</h2>
      <ul>
        <li><strong>Evite dietas restrictivas:</strong> Los adolescentes necesitan calorías, calcio y proteínas para el crecimiento óseo y cerebral.</li>
        <li><strong>Actividad diaria:</strong> Se recomiendan al menos 60 minutos diarios de ejercicio moderado o vigoroso.</li>
        <li><strong>Sueño adecuado:</strong> De 8 a 10 horas de sueño reparador para una correcta regulación hormonal.</li>
      </ul>
    `,
    fr: `
      <h2>Pourquoi l'IMC Pédiatrique est Différent de l'Adulte</h2>
      <p>Chez les enfants et adolescents de 2 à 19 ans, la croissance modifie continuellement la répartition de la masse grasse et de la masse musculaire. De plus, les étapes de la puberté introduisent des différences majeures entre garçons et filles du même âge.</p>
      <p>Par conséquent, <strong>les chiffres fixes d'IMC pour adultes ne peuvent pas être utilisés chez les jeunes</strong>. Les pédiatres et les autorités de santé (notamment le <strong>CDC</strong> et l'OMS) évaluent la corpulence à l'aide de <strong>courbes de percentiles selon l'âge et le sexe</strong>.</p>

      <h2>Grille des Percentiles de Référence</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">Catégorie</th>
              <th class="p-3 font-mono text-[var(--accent)]">Percentile CDC</th>
              <th class="p-3">Interprétation Médicale</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)]">
            <tr>
              <td class="p-3 font-semibold">Insuffisance pondérale</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">&lt; 5e percentile</td>
              <td class="p-3">Évaluer l'équilibre nutritionnel et la croissance</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Poids Normal</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">5e à &lt; 85e percentile</td>
              <td class="p-3">Évolution harmonieuse conforme aux repères pédiatriques</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Surpoids</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">85e à &lt; 95e percentile</td>
              <td class="p-3">Encourager l'activité physique et l'équilibre alimentaire</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Obésité</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">&ge; 95e percentile</td>
              <td class="p-3">Bilan clinique pédiatrique recommandé</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Importance du Suivi Longitudinal</h2>
      <p>Une mesure isolée a peu de valeur. Ce qui compte est la trajectoire de la courbe de croissance tracée dans le carnet de santé lors des visites annuelles chez le médecin traitant ou le pédiatre.</p>

      <h2>Recommandations pour les Ados</h2>
      <ul>
        <li>Ne commencez jamais de régime restrictif sans encadrement médical.</li>
        <li>Pratiquez au moins 60 minutes d'activité physique par jour.</li>
        <li>Privilégiez 8 à 10 heures de sommeil par nuit pour soutenir les hormones de croissance.</li>
      </ul>
    `,
    de: `
      <h2>Warum sich der Kinder- und Jugend-BMI unterscheidet</h2>
      <p>Im Wachstumsalter (2 bis 19 Jahre) verändert sich die Körperzusammensetzung fortlaufend. Muskelzuwachs, Knochendichte und Fettverteilung unterliegen während der Pubertät starken Schwankungen. Zudem verlaufen die Wachstumsschübe bei Mädchen und Jungen zeitlich versetzt.</p>
      <p>Aus diesem Grund sind <strong>starre Erwachsenen-Grenzwerte (18,5 oder 25,0) für Kinder und Jugendliche nicht anwendbar</strong>. Kinderärzte und Fachgesellschaften beurteilen das Körpergewicht anhand von <strong>alters- und geschlechtsspezifischen BMI-Perzentilen</strong>.</p>

      <h2>Bedeutung der Perzentilenkurven</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">Gewichtsklasse</th>
              <th class="p-3 font-mono text-[var(--accent)]">Perzentilbereich</th>
              <th class="p-3">Pädiatrische Einordnung</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)]">
            <tr>
              <td class="p-3 font-semibold">Untergewicht</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">&lt; 5. Perzentil</td>
              <td class="p-3">Ggf. Nährstoffzufuhr und Wachstumstempo überprüfen</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Normalgewicht</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">5. bis &lt; 85. Perzentil</td>
              <td class="p-3">Gesunde und altersgemäße körperliche Entwicklung</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Übergewicht</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">85. bis &lt; 95. Perzentil</td>
              <td class="p-3">Ernährungsgewohnheiten und Bewegung im Alltag stärken</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Adipositas</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">&ge; 95. Perzentil</td>
              <td class="p-3">Ärztliche Abklärung beim Kinder- und Jugendarzt angeraten</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Der Wachstumsverlauf ist entscheidend</h2>
      <p>Ein einzelner Wert ist lediglich eine Momentaufnahme. Entscheidend ist der Verlauf über mehrere Jahre im Vorsorgeheft. Starke Ausschläge nach oben oder unten sollten ärztlich besprochen werden.</p>

      <h2>Empfehlungen für den Alltag</h2>
      <ul>
        <li>Keine unausgewogenen Diäten für heranwachsende Jugendliche.</li>
        <li>Täglich mindestens 60 Minuten moderate bis intensive Bewegung.</li>
        <li>8 bis 10 Stunden Schlaf zur Unterstützung des gesunden Stoffwechsels.</li>
      </ul>
    `,
    ko: `
      <h2>소아 청소년 BMI가 성인과 다른 이유</h2>
      <p>성장기 아동 및 청소년(2~19세)은 신장 성장, 골격 발달 및 2차 성징에 따라 체성분이 지속적으로 변화합니다. 또한 동일한 연령이라도 남학생과 여학생의 생리학적 성장 속도와 체지방 분포는 크게 다릅니다.</p>
      <p>따라서 <strong>성인용 고정 BMI 수치(18.5, 25.0 등)를 청소년에게 그대로 적용할 수 없습니다</strong>. 소아청소년과 전문의와 질병관리청(CDC)은 성별과 개월 수를 반영한 <strong>BMI 연령별 백분위수(Percentile)</strong>를 사용하여 비만도를 판정합니다.</p>

      <h2>소아 청소년 BMI 백분위수 판정 기준</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">비만도 구분</th>
              <th class="p-3 font-mono text-[var(--accent)]">백분위수 기준</th>
              <th class="p-3">성장 평가 및 임상 참고</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)]">
            <tr>
              <td class="p-3 font-semibold">저체중</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">5 백분위수 미만</td>
              <td class="p-3">성장 지연이나 영양 부족 여부 확인 필요</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">정상 체중</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">5 ~ 85 백분위수 미만</td>
              <td class="p-3">연령과 성별에 적합한 표준 성장 곡선 유지</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">과체중</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">85 ~ 95 백분위수 미만</td>
              <td class="p-3">식습관 및 일상 신체 활동량 증진 권장</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">비만</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">95 백분위수 이상</td>
              <td class="p-3">소아청소년과 상담 및 정밀 성장 평가 권장</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>단일 수치보다 연속 성장 곡선이 핵심입니다</h2>
      <p>청소년의 건강 평가는 특정 시점의 단일 측정보다 시간의 흐름에 따른 '성장 곡선(Growth Curve)'의 추세가 훨씬 중요합니다. 꾸준히 자신의 곡선을 따라 자라고 있다면 정상적인 발달 단계로 평가됩니다.</p>

      <h2>가정과 청소년을 위한 건강 지침</h2>
      <ul>
        <li>성장기 자녀에게 무리한 굶기나 초저칼로리 다이어트는 금물입니다.</li>
        <li>하루 최소 60분 이상 유산소 운동 및 활동적인 신체 활동을 실천합니다.</li>
        <li>성장 호르몬 분비와 신체 회복을 위해 밤 8~10시간의 충분한 수면이 필수입니다.</li>
      </ul>
    `
  }
};

// 8. bmi-by-age
newArticles['bmi-by-age'] = {
  title: {
    en: "BMI by Age Chart: Children, Adults & Seniors",
    hi: "उम्र के अनुसार बीएमआई चार्ट: बच्चों, वयस्कों और बुजुर्गों के लिए गाइड",
    ko: "연령별 BMI 차트: 생애주기별 정상 체중 기준표",
    de: "BMI nach Alter: Richtwerte für jedes Lebensjahr",
    es: "Tabla de IMC por Edad: Niños, Adultos y Mayores",
    fr: "Tableau d'IMC par Âge : Enfants, Adultes, Seniors"
  },
  category: {
    en: "Age & Metrics",
    hi: "आयु एवं मापदंड",
    ko: "연령 및 지표",
    de: "Alter & Metriken",
    es: "Edad y Métricas",
    fr: "Santé et Âge"
  },
  description: {
    en: "Discover how age influences healthy BMI thresholds. View clinical recommendations for young adults, middle age, and seniors to maintain vitality and muscle.",
    hi: "उम्र के अनुसार बीएमआई कैसे बदलता है। बच्चों, वयस्कों और बुजुर्गों के लिए मांसपेशियों के संरक्षण और स्वस्थ जीवन के लिए डब्ल्यूएचओ स्वास्थ्य दिशानिर्देश समझें।",
    ko: "연령 증가에 따른 BMI 해석법과 건강 기준을 알아보세요. 어린이부터 중장년층, 노년층에 이르기까지 골격근량 변화와 체지방 재분포 특성을 반영한 세계보건기구(WHO) 연령대별 건강 체중 유지 가이드를 안내합니다. 개인정보 수집 없는 안전한 브라우저 무료 연산 도구 안내.",
    de: "Erfahren Sie, wie das Alter gesunde BMI-Grenzwerte beeinflusst. Empfehlungen für Erwachsene und Senioren zum Erhalt von Muskelmasse und Vitalität im Alter.",
    es: "Descubre cómo la edad modifica los umbrales de IMC saludable. Pautas médicas para adultos jóvenes, mediana edad y adultos mayores para mantener la vitalidad.",
    fr: "Découvrez l'influence de l'âge sur les seuils d'IMC recommandés. Conseils médicaux pour adultes et seniors afin de préserver la masse musculaire et la santé."
  },
  contentHtml: {
    en: `
      <h2>How Age Alters Body Composition and BMI Interpretation</h2>
      <p>Body Mass Index (BMI) divides weight by height squared, but human physiology evolves across decades. As adults age from their twenties into their seventies, fundamental body composition shifts occur: basal metabolic rate declines, skeletal muscle mass gradually decreases (a clinical process called <strong>sarcopenia</strong>), and visceral adipose tissue naturally redistributes toward the abdomen.</p>
      <p>While public health agencies like the <strong>WHO</strong> and <strong>CDC</strong> maintain a single adult classification standard (18.5 to 24.9 kg/m² for ages 20 and older), geriatric health researchers often interpret BMI ranges differently depending on life stage.</p>

      <h2>Lifespan BMI Breakdown</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">Age Group</th>
              <th class="p-3">Recommended Evaluation Tool</th>
              <th class="p-3 font-mono text-[var(--accent)]">Target Reference Window</th>
              <th class="p-3">Clinical Priority</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)]">
            <tr>
              <td class="p-3 font-semibold">Children & Teens (2–19 yrs)</td>
              <td class="p-3">CDC Growth Percentiles</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">5th to 84th percentile</td>
              <td class="p-3">Balanced skeletal growth and pubertal progression</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Young Adults (20–39 yrs)</td>
              <td class="p-3">Standard WHO Scale</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">18.5 – 24.9 kg/m²</td>
              <td class="p-3">Cardiovascular fitness and lean mass optimization</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Middle Age (40–64 yrs)</td>
              <td class="p-3">BMI + Waist Circumference</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">18.5 – 24.9 kg/m²</td>
              <td class="p-3">Preventing visceral adiposity and metabolic syndrome</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Seniors (65+ yrs)</td>
              <td class="p-3">Geriatric BMI Guidelines</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">23.0 – 27.5 kg/m²</td>
              <td class="p-3">Preserving bone density, muscle, and fracture protection</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>The "Obesity Paradox" in Older Adults (65+ Years)</h2>
      <p>In individuals aged 65 and older, observational geriatric studies consistently reveal that a slightly higher BMI (between <strong>23.0 and 27.5 kg/m²</strong>) is associated with lower all-cause mortality compared to being on the lower end of the "normal" scale (below 22.0 kg/m²). This phenomenon, known as the <em>geriatric obesity paradox</em>, reflects the protective benefit of nutritional reserves during illness, superior bone mineral density, and resilience against hip fractures.</p>

      <h2>Practical Takeaway</h2>
      <p>Rather than obsessing over an arbitrary single scale weight as you age, focus on functional strength, grip strength, mobility, and abdominal circumference. Maintaining physical vitality and resistance training preserves independence far better than extreme caloric restriction.</p>
    `,
    hi: `
      <h2>उम्र बढ़ने के साथ बीएमआई और शरीर की संरचना कैसे बदलती है?</h2>
      <p>20 वर्ष की आयु से लेकर 70 वर्ष की आयु तक मानव शरीर में कई शारीरिक बदलाव आते हैं। उम्र के साथ मेटाबॉलिज्म धीमा हो जाता है, हड्डियों का घनत्व घटता है और मांसपेशियों की मात्रा कम होने लगती है (जिसे <strong>सार्कोपेनिया / Sarcopenia</strong> कहा जाता है)। साथ ही पेट के आसपास आंतरिक वसा का अनुपात बढ़ने लगता है।</p>
      <p>हालांकि डब्ल्यूएचओ वयस्क बीएमआई के लिए 18.5 से 24.9 kg/m² का एक ही मानक रखता है, लेकिन वृद्धावस्था चिकित्सा विशेषज्ञ जीवन के विभिन्न पड़ावों पर बीएमआई की व्याख्या अलग तरह से करते हैं।</p>

      <h2>आयु वर्ग अनुसार बीएमआई संदर्भ तालिका</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">आयु वर्ग</th>
              <th class="p-3">मूल्यांकन पद्धति</th>
              <th class="p-3 font-mono text-[var(--accent)]">लक्ष्य सीमा</th>
              <th class="p-3">मुख्य स्वास्थ्य प्राथमिकता</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)]">
            <tr>
              <td class="p-3 font-semibold">बच्चे व किशोर (2–19 वर्ष)</td>
              <td class="p-3">सीडीसी ग्रोथ पर्सेंटाइल</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">5वां से 84वां पर्सेंटाइल</td>
              <td class="p-3">निरंतर शारीरिक विकास</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">युवा वयस्क (20–39 वर्ष)</td>
              <td class="p-3">मानक डब्ल्यूएचओ बीएमआई</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">18.5 – 24.9 kg/m²</td>
              <td class="p-3">हृदय स्वास्थ्य और मांसपेशियों का निर्माण</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">मध्यम आयु (40–64 वर्ष)</td>
              <td class="p-3">बीएमआई + कमर की माप</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">18.5 – 24.9 kg/m²</td>
              <td class="p-3">पेट की चर्बी व शुगर की रोकथाम</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">वरिष्ठ नागरिक (65+ वर्ष)</td>
              <td class="p-3">वृद्धावस्था स्वास्थ्य गाइड</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">23.0 – 27.5 kg/m²</td>
              <td class="p-3">हड्डियों की सुरक्षा और कमजोरी से बचाव</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>वरिष्ठ नागरिकों में थोड़ा अधिक बीएमआई क्यों सुरक्षित माना जाता है?</h2>
      <p>चिकित्सीय शोधों से पता चला है कि 65 वर्ष से अधिक उम्र के बुजुर्गों में 23.0 से 27.5 का थोड़ा अधिक बीएमआई बीमारियों से लड़ने, कमजोरी रोकने और हड्डियों के फ्रैक्चर के जोखिम को कम करने में मदद करता है। वृद्धावस्था में बहुत कम वजन होना गंभीर स्वास्थ्य जोखिम माना जाता है।</p>
    `,
    es: `
      <h2>Cómo Altera la Edad la Composición Corporal y el IMC</h2>
      <p>El Índice de Masa Corporal relaciona peso y altura, pero a lo largo de las décadas el cuerpo experimenta profundas transformaciones metabólicas. A partir de los 40 años, la tasa metabólica basal disminuye de forma progresiva, la masa muscular esquelética se reduce (proceso conocido como <strong>sarcopenia</strong>) y la grasa corporal tiende a depositarse en la región abdominal.</p>
      <p>Aunque la <strong>OMS</strong> mantiene una tabla estándar para adultos (18.5 a 24.9 kg/m²), los especialistas en geriatría valoran rangos ligeramente distintos según la etapa de la vida.</p>

      <h2>Rangos de Referencia por Etapa Vital</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">Grupo de Edad</th>
              <th class="p-3">Método de Evaluación</th>
              <th class="p-3 font-mono text-[var(--accent)]">Rango Objetivo</th>
              <th class="p-3">Prioridad de Salud</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)]">
            <tr>
              <td class="p-3 font-semibold">Jóvenes (20–39 años)</td>
              <td class="p-3">IMC Estándar OMS</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">18.5 – 24.9 kg/m²</td>
              <td class="p-3">Optimización cardiovascular y tono muscular</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Mediana Edad (40–64 años)</td>
              <td class="p-3">IMC + Perímetro Abdominal</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">18.5 – 24.9 kg/m²</td>
              <td class="p-3">Control de grasa visceral y riesgo metabólico</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Adultos Mayores (65+ años)</td>
              <td class="p-3">Pautas Geriátricas</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">23.0 – 27.5 kg/m²</td>
              <td class="p-3">Protección frente a fracturas y desnutrición</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>La "Paradoja de la Obesidad" en la Tercera Edad</h2>
      <p>En personas mayores de 65 años, múltiples estudios clínicos han demostrado que mantener un IMC ligeramente superior (entre <strong>23.0 y 27.5 kg/m²</strong>) se asocia con una menor mortalidad general. Un peso ligeramente más elevado proporciona reservas nutricionales en caso de convalecencia y protege contra fracturas óseas.</p>
    `,
    fr: `
      <h2>L'Évolution de l'IMC et de la Morphologie avec l'Âge</h2>
      <p>Au fil des décennies, le métabolisme de base ralentit, la masse musculaire diminue progressivement (phénomène de <strong>sarcopénie</strong>) et le tissu adipeux tend à se concentrer au niveau de l'abdomen.</p>
      <p>Bien que l'<strong>OMS</strong> applique la même grille adulte (18,5 à 24,9 kg/m²) à partir de 20 ans, les spécialistes en gériatrie recommandent d'adapter l'interprétation en fonction de l'âge biologique.</p>

      <h2>Repères par Tranche d'Âge</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">Tranche d'Âge</th>
              <th class="p-3">Outil d'Évaluation</th>
              <th class="p-3 font-mono text-[var(--accent)]">Plage Cible</th>
              <th class="p-3">Objectif Majeur</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)]">
            <tr>
              <td class="p-3 font-semibold">Adultes (20–39 ans)</td>
              <td class="p-3">IMC Standard OMS</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">18,5 – 24,9 kg/m²</td>
              <td class="p-3">Condition physique et masse maigre</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Âge Mûr (40–64 ans)</td>
              <td class="p-3">IMC + Tour de Taille</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">18,5 – 24,9 kg/m²</td>
              <td class="p-3">Prévention de l'adiposité viscérale</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Séniors (65 ans et plus)</td>
              <td class="p-3">Critères Gériatriques</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">23,0 – 27,5 kg/m²</td>
              <td class="p-3">Préservation musculaire et densité osseuse</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Le Paradoxe de l'Obésité chez les Personnes Âgées</h2>
      <p>Chez les personnes de plus de 65 ans, un IMC légèrement plus élevé (entre <strong>23,0 et 27,5 kg/m²</strong>) est souvent associé à un risque moindre de fracture et à une meilleure résistance face aux infections qu'un IMC inférieur à 22 kg/m².</p>
    `,
    de: `
      <h2>Wie das Alter den BMI und die Körperzusammensetzung verändert</h2>
      <p>Zwischen dem 20. und 70. Lebensjahr verändert sich der Stoffwechsel grundlegend. Muskelmasse baut sich ohne gezieltes Krafttraining langsam ab (<strong>Sarkopenie</strong>), während der relative Körperfettanteil tendenziell zunimmt.</p>
      <p>Obwohl die <strong>WHO</strong> für alle Erwachsenen denselben Bereich von 18,5 bis 24,9 kg/m² angibt, gewichten Altersmediziner die Werte je nach Lebensabschnitt unterschiedlich.</p>

      <h2>Referenzbereiche nach Lebensphasen</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">Altersgruppe</th>
              <th class="p-3">Bewertungsmethode</th>
              <th class="p-3 font-mono text-[var(--accent)]">Zielbereich</th>
              <th class="p-3">Gesundheitlicher Schwerpunkt</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)]">
            <tr>
              <td class="p-3 font-semibold">Junge Erwachsene (20–39 J.)</td>
              <td class="p-3">Standard-WHO-BMI</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">18,5 – 24,9 kg/m²</td>
              <td class="p-3">Kardiovaskuläre Fitness & Muskelaufbau</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Mittleres Alter (40–64 J.)</td>
              <td class="p-3">BMI + Taillenumfang</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">18,5 – 24,9 kg/m²</td>
              <td class="p-3">Vermeidung von viszeralem Bauchfett</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Senioren (ab 65 Jahren)</td>
              <td class="p-3">Geriatrische Richtwerte</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">23,0 – 27,5 kg/m²</td>
              <td class="p-3">Knochenschutz und Erhalt der Mobilität</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Das Adipositas-Paradoxon im Alter</h2>
      <p>Geriatrische Studien zeigen, dass für ältere Menschen ab 65 Jahren ein leicht höherer BMI zwischen <strong>23,0 und 27,5 kg/m²</strong> protektiv wirken kann. Ein kleineres Gewichtspolster schützt vor Gebrechlichkeit und Knochenbrüchen bei Stürzen.</p>
    `,
    ko: `
      <h2>나이에 따른 체성분 변화와 BMI 해석법</h2>
      <p>성인의 체성분은 20대부터 70대에 이르기까지 끊임없이 변화합니다. 나이가 들면서 기초대사량이 완만히 감소하고, 골격근량이 자연 감소하는 <strong>근감소증(Sarcopenia)</strong>이 진행되며, 체지방이 복부 내장 주변으로 재배치되는 경향이 있습니다.</p>
      <p>비록 세계보건기구(WHO) 기준은 20세 이상 성인에게 단일 기준(18.5~24.9)을 적용하지만, 노인의학 분야에서는 생애주기별 신체 특성을 고려하여 체중 지표를 평가합니다.</p>

      <h2>생애주기별 BMI 평가 지침</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">연령대</th>
              <th class="p-3">권장 평가 도구</th>
              <th class="p-3 font-mono text-[var(--accent)]">권장 참고 구간</th>
              <th class="p-3">건강 관리 핵심</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)]">
            <tr>
              <td class="p-3 font-semibold">청년층 (20~39세)</td>
              <td class="p-3">WHO 표준 BMI</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">18.5 – 22.9 kg/m²</td>
              <td class="p-3">심폐 지구력 및 골격근량 최적화</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">중장년층 (40~64세)</td>
              <td class="p-3">BMI + 허리둘레</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">18.5 – 24.9 kg/m²</td>
              <td class="p-3">복부 내장 지방 및 대사증후군 예방</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">노년층 (65세 이상)</td>
              <td class="p-3">노인 건강 지침</td>
              <td class="p-3 font-mono font-bold text-[var(--accent)]">23.0 – 27.5 kg/m²</td>
              <td class="p-3">골다공증 및 낙상 골절 예방, 면역력 유지</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>노인층의 비만 역설(Obesity Paradox)</h2>
      <p>65세 이상 노년층의 대규모 역학 연구에 따르면, BMI가 <strong>23.0 ~ 27.5 kg/m²</strong> 수준으로 약간 여유 있는 상태가 오히려 영양 결핍과 낙상 골절 위험을 낮추고 장기 생존율에 긍정적인 영향을 미치는 것으로 보고되고 있습니다.</p>
    `
  }
};

// 9. bmi-chart
newArticles['bmi-chart'] = {
  title: {
    en: "BMI Chart 2026: Visual Weight Status Grid & Guide",
    hi: "बीएमआई चार्ट 2026: वजन श्रेणी ग्रिड और विस्तृत गाइड",
    ko: "2026 BMI 차트: 시각적 신장 체중 종합 진단표",
    de: "BMI Tabelle 2026: Übersichtliche Gewichtstabelle",
    es: "Tabla de IMC 2026: Gráfico Visual y Rangos OMS",
    fr: "Tableau d'IMC 2026 : Grille Visuelle des Normes"
  },
  category: {
    en: "Visual Reference",
    hi: "विजुअल संदर्भ",
    ko: "시각적 참조",
    de: "Visuelle Referenz",
    es: "Referencia Visual",
    fr: "Référence Visuelle"
  },
  description: {
    en: "Explore the complete 2026 visual BMI chart for men and women. Lookup height and weight combinations, official WHO cut-offs, and Asian risk classifications.",
    hi: "पुरुषों और महिलाओं के लिए 2026 का संपूर्ण विजुअल बीएमआई चार्ट। ऊंचाई बनाम वजन ग्रिड, डब्ल्यूएचओ मानक और एशियाई आबादी के स्वास्थ्य जोखिम स्तरों की जांच करें।",
    ko: "성인 남녀를 위한 시각적 2026 체질량지수(BMI) 차트 및 신장-체중 진단표입니다. 매트릭스 그리드를 통해 세계보건기구(WHO) 공식 체중 분류, 표준 건강 체중 범위 및 심대사 질환 위험 지표를 한눈에 확인하세요. 개인정보 수집 없는 안전한 브라우저 무료 연산 도구 제공.",
    de: "Übersichtliche visuelle BMI-Tabelle 2026 für Männer und Frauen. Finden Sie Ihre Größe-Gewicht-Kombination, offizielle WHO-Grenzwerte und Gesundheitsstufen.",
    es: "Tabla visual completa de IMC 2026 para hombres y mujeres. Consulta tu combinación de estatura y peso, categorías oficiales de la OMS y niveles de riesgo.",
    fr: "Tableau visuel complet d'IMC 2026 pour hommes et femmes. Consultez votre rapport taille-poids, les catégories officielles de l'OMS et les repères de santé."
  },
  contentHtml: {
    en: `
      <h2>How to Read the Visual BMI Matrix</h2>
      <p>A visual Body Mass Index (BMI) chart plots height along one axis and weight along the other, forming a comprehensive matrix. The colored curves intersecting the grid represent mathematical contour lines (isobars) derived from the equation <code>BMI = kg / m²</code>.</p>
      <p>Using a chart allows you to see not only your current classification, but also exactly how many kilograms or pounds separate you from the adjacent weight category.</p>

      <h2>Visual Reference Lookup: Height vs. Weight Combinations</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">Height (cm / ft-in)</th>
              <th class="p-3">Underweight (&lt; 18.5)</th>
              <th class="p-3 text-[var(--accent)] font-extrabold">Healthy Range (18.5–24.9)</th>
              <th class="p-3">Overweight (25.0–29.9)</th>
              <th class="p-3">Obese (&ge; 30.0)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)] font-mono text-xs sm:text-sm">
            <tr>
              <td class="p-3 font-sans font-semibold">152 cm (5'0")</td>
              <td class="p-3">&lt; 42.7 kg (&lt; 94 lbs)</td>
              <td class="p-3 font-bold text-[var(--accent)]">42.7 – 57.5 kg (94–127 lbs)</td>
              <td class="p-3">57.6 – 69.1 kg (128–152 lbs)</td>
              <td class="p-3">&ge; 69.2 kg (&ge; 153 lbs)</td>
            </tr>
            <tr>
              <td class="p-3 font-sans font-semibold">160 cm (5'3")</td>
              <td class="p-3">&lt; 47.4 kg (&lt; 104 lbs)</td>
              <td class="p-3 font-bold text-[var(--accent)]">47.4 – 63.7 kg (105–140 lbs)</td>
              <td class="p-3">63.8 – 76.5 kg (141–169 lbs)</td>
              <td class="p-3">&ge; 76.6 kg (&ge; 170 lbs)</td>
            </tr>
            <tr>
              <td class="p-3 font-sans font-semibold">168 cm (5'6")</td>
              <td class="p-3">&lt; 52.2 kg (&lt; 115 lbs)</td>
              <td class="p-3 font-bold text-[var(--accent)]">52.2 – 70.3 kg (116–155 lbs)</td>
              <td class="p-3">70.4 – 84.4 kg (156–186 lbs)</td>
              <td class="p-3">&ge; 84.5 kg (&ge; 187 lbs)</td>
            </tr>
            <tr>
              <td class="p-3 font-sans font-semibold">175 cm (5'9")</td>
              <td class="p-3">&lt; 56.7 kg (&lt; 125 lbs)</td>
              <td class="p-3 font-bold text-[var(--accent)]">56.7 – 76.3 kg (126–168 lbs)</td>
              <td class="p-3">76.4 – 91.6 kg (169–202 lbs)</td>
              <td class="p-3">&ge; 91.7 kg (&ge; 203 lbs)</td>
            </tr>
            <tr>
              <td class="p-3 font-sans font-semibold">183 cm (6'0")</td>
              <td class="p-3">&lt; 62.0 kg (&lt; 137 lbs)</td>
              <td class="p-3 font-bold text-[var(--accent)]">62.0 – 83.4 kg (138–184 lbs)</td>
              <td class="p-3">83.5 – 100.1 kg (185–221 lbs)</td>
              <td class="p-3">&ge; 100.2 kg (&ge; 222 lbs)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Interpreting Chart Fluctuations</h2>
      <p>Daily body weight naturally fluctuates by 1 to 2 kg due to hydration, glycogen storage, sodium intake, and digestive transit time. Rather than reacting to daily swings on the chart, calculate a weekly rolling average to monitor authentic body composition trends over weeks and months.</p>
    `,
    hi: `
      <h2>विजुअल बीएमआई चार्ट को कैसे समझें?</h2>
      <p>बीएमआई चार्ट एक दो-आयामी ग्रिड है जिसमें एक तरफ ऊंचाई (सेंटीमीटर या फीट-इंच में) और दूसरी तरफ वजन (किलोग्राम या पाउंड में) होता है। इसके मिलन बिंदु से आप तुरंत जान सकते हैं कि आपका वजन किस स्वास्थ्य श्रेणी में आता है।</p>

      <h2>ऊंचाई बनाम स्वस्थ वजन संदर्भ तालिका</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">ऊंचाई</th>
              <th class="p-3 text-[var(--accent)] font-extrabold">स्वस्थ वजन सीमा (18.5–24.9)</th>
              <th class="p-3">अधिक वजन (25.0–29.9)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)]">
            <tr>
              <td class="p-3 font-semibold">152 सेमी (5'0")</td>
              <td class="p-3 font-bold text-[var(--accent)]">42.7 – 57.5 किग्रा</td>
              <td class="p-3">57.6 – 69.1 किग्रा</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">160 सेमी (5'3")</td>
              <td class="p-3 font-bold text-[var(--accent)]">47.4 – 63.7 किग्रा</td>
              <td class="p-3">63.8 – 76.5 किग्रा</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">168 सेमी (5'6")</td>
              <td class="p-3 font-bold text-[var(--accent)]">52.2 – 70.3 किग्रा</td>
              <td class="p-3">70.4 – 84.4 किग्रा</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">175 सेमी (5'9")</td>
              <td class="p-3 font-bold text-[var(--accent)]">56.7 – 76.3 किग्रा</td>
              <td class="p-3">76.4 – 91.6 किग्रा</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">183 सेमी (6'0")</td>
              <td class="p-3 font-bold text-[var(--accent)]">62.0 – 83.4 किग्रा</td>
              <td class="p-3">83.5 – 100.1 किग्रा</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>दैनिक वजन में पानी और नमक के सेवन से 1 से 2 किलो का उतार-चढ़ाव होना सामान्य है। सही प्रगति देखने के लिए साप्ताहिक औसत पर ध्यान दें।</p>
    `,
    es: `
      <h2>Cómo Interpretar la Tabla Visual de IMC</h2>
      <p>Una tabla visual de IMC organiza la estatura en un eje y el peso en el otro. En las intersecciones se muestran los límites de las clasificaciones de la OMS, permitiendo comprobar con rapidez tanto la categoría actual como la cantidad de peso que separa del rango saludable.</p>

      <h2>Combinaciones de Altura y Peso Saludable</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">Estatura</th>
              <th class="p-3 text-[var(--accent)] font-extrabold">Peso Saludable (18.5–24.9)</th>
              <th class="p-3">Sobrepeso (25.0–29.9)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)]">
            <tr>
              <td class="p-3 font-semibold">152 cm (5'0")</td>
              <td class="p-3 font-bold text-[var(--accent)]">42.7 – 57.5 kg</td>
              <td class="p-3">57.6 – 69.1 kg</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">160 cm (5'3")</td>
              <td class="p-3 font-bold text-[var(--accent)]">47.4 – 63.7 kg</td>
              <td class="p-3">63.8 – 76.5 kg</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">168 cm (5'6")</td>
              <td class="p-3 font-bold text-[var(--accent)]">52.2 – 70.3 kg</td>
              <td class="p-3">70.4 – 84.4 kg</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">175 cm (5'9")</td>
              <td class="p-3 font-bold text-[var(--accent)]">56.7 – 76.3 kg</td>
              <td class="p-3">76.4 – 91.6 kg</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">183 cm (6'0")</td>
              <td class="p-3 font-bold text-[var(--accent)]">62.0 – 83.4 kg</td>
              <td class="p-3">83.5 – 100.1 kg</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    fr: `
      <h2>Comment Utiliser la Grille Visuelle de l'IMC</h2>
      <p>La grille visuelle permet de croiser facilement la taille et le poids corporel pour situer son indice par rapport aux seuils officiels de l'Organisation Mondiale de la Santé.</p>

      <h2>Repères de Poids Idéal par Taille</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">Taille</th>
              <th class="p-3 text-[var(--accent)] font-extrabold">Poids Normal (18,5–24,9)</th>
              <th class="p-3">Surpoids (25,0–29,9)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)]">
            <tr>
              <td class="p-3 font-semibold">152 cm</td>
              <td class="p-3 font-bold text-[var(--accent)]">42,7 – 57,5 kg</td>
              <td class="p-3">57,6 – 69,1 kg</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">160 cm</td>
              <td class="p-3 font-bold text-[var(--accent)]">47,4 – 63,7 kg</td>
              <td class="p-3">63,8 – 76,5 kg</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">168 cm</td>
              <td class="p-3 font-bold text-[var(--accent)]">52,2 – 70,3 kg</td>
              <td class="p-3">70,4 – 84,4 kg</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">175 cm</td>
              <td class="p-3 font-bold text-[var(--accent)]">56,7 – 76,3 kg</td>
              <td class="p-3">76,4 – 91,6 kg</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">183 cm</td>
              <td class="p-3 font-bold text-[var(--accent)]">62,0 – 83,4 kg</td>
              <td class="p-3">83,5 – 100,1 kg</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    de: `
      <h2>Die visuelle BMI-Tabelle richtig anwenden</h2>
      <p>In der zweidimensionalen BMI-Tabelle lässt sich über den Schnittpunkt von Körpergröße und aktuellem Gewicht die genaue Einstufung gemäß WHO-Referenzwert direkt ablesen.</p>

      <h2>Größe-Gewicht-Referenztabelle</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">Körpergröße</th>
              <th class="p-3 text-[var(--accent)] font-extrabold">Normalgewicht (18,5–24,9)</th>
              <th class="p-3">Übergewicht (25,0–29,9)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)]">
            <tr>
              <td class="p-3 font-semibold">152 cm</td>
              <td class="p-3 font-bold text-[var(--accent)]">42,7 – 57,5 kg</td>
              <td class="p-3">57,6 – 69,1 kg</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">160 cm</td>
              <td class="p-3 font-bold text-[var(--accent)]">47,4 – 63,7 kg</td>
              <td class="p-3">63,8 – 76,5 kg</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">168 cm</td>
              <td class="p-3 font-bold text-[var(--accent)]">52,2 – 70,3 kg</td>
              <td class="p-3">70,4 – 84,4 kg</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">175 cm</td>
              <td class="p-3 font-bold text-[var(--accent)]">56,7 – 76,3 kg</td>
              <td class="p-3">76,4 – 91,6 kg</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">183 cm</td>
              <td class="p-3 font-bold text-[var(--accent)]">62,0 – 83,4 kg</td>
              <td class="p-3">83,5 – 100,1 kg</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    ko: `
      <h2>시각적 BMI 차트 활용법</h2>
      <p>신장과 체중을 격자형 그리드로 교차하여 본인의 체중 상태를 확인하는 시각적 도표입니다. 현재 수치뿐만 아니라 정상 체중 구간까지 남은 체중 폭을 직관적으로 확인할 수 있습니다.</p>

      <h2>신장별 표준 정상 체중 구간</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">신장</th>
              <th class="p-3 text-[var(--accent)] font-extrabold">WHO 표준 정상 체중 (18.5~24.9)</th>
              <th class="p-3">과체중 구간 (25.0~29.9)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)]">
            <tr>
              <td class="p-3 font-semibold">152 cm</td>
              <td class="p-3 font-bold text-[var(--accent)]">42.7 – 57.5 kg</td>
              <td class="p-3">57.6 – 69.1 kg</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">160 cm</td>
              <td class="p-3 font-bold text-[var(--accent)]">47.4 – 63.7 kg</td>
              <td class="p-3">63.8 – 76.5 kg</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">168 cm</td>
              <td class="p-3 font-bold text-[var(--accent)]">52.2 – 70.3 kg</td>
              <td class="p-3">70.4 – 84.4 kg</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">175 cm</td>
              <td class="p-3 font-bold text-[var(--accent)]">56.7 – 76.3 kg</td>
              <td class="p-3">76.4 – 91.6 kg</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">183 cm</td>
              <td class="p-3 font-bold text-[var(--accent)]">62.0 – 83.4 kg</td>
              <td class="p-3">83.5 – 100.1 kg</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  }
};

// 10. healthy-weight-chart
newArticles['healthy-weight-chart'] = {
  title: {
    en: "Healthy Weight Chart by Height for Men & Women",
    hi: "ऊंचाई के अनुसार स्वस्थ वजन चार्ट: महिला व पुरुष",
    ko: "신장별 건강 체중 차트: 남녀 이상적인 체중 범위",
    de: "Idealgewicht Tabelle nach Körpergröße für Erwachsene",
    es: "Tabla de Peso Saludable por Estatura para Adultos",
    fr: "Tableau du Poids Idéal selon la Taille Adulte"
  },
  category: {
    en: "Weight Management",
    hi: "वजन प्रबंधन",
    ko: "체중 관리",
    de: "Gewichtsmanagement",
    es: "Control de Peso",
    fr: "Gestion du Poids"
  },
  description: {
    en: "Find your target healthy weight range by height. Includes accurate metric (cm/kg) and imperial (ft-in/lbs) lookup tables based on WHO standards and Devine.",
    hi: "अपनी ऊंचाई के अनुसार अपना स्वस्थ वजन लक्ष्य जानें। डब्ल्यूएचओ और डिवाइन मानकों पर आधारित किलोग्राम (kg) और पाउंड (lbs) में सटीक संदर्भ तालिकाओं की जांच करें।",
    ko: "신장에 따른 이상적인 정상 체중 범위를 확인하세요. 성인 남성과 여성을 위한 미터법(cm/kg) 및 야드파운드법(lbs) 기준의 정밀 참조 차트, Devine 공식 기반 적정 체중 및 건강 유지 관리 지침을 종합 안내합니다. 개인정보 수집 없는 안전한 브라우저 연산 안내.",
    de: "Finden Sie Ihr ideales Zielgewicht nach Körpergröße. Enthält genaue Referenztabellen in kg und lbs basierend auf offiziellen WHO-Standards und Devine-Formeln.",
    es: "Encuentra tu peso ideal según tu estatura. Incluye tablas de referencia métricas (kg) e imperiales (lbs) basadas en directrices de la OMS y la fórmula Devine.",
    fr: "Trouvez votre poids de santé idéal selon votre taille. Tableaux précis en kg et livres basés sur les normes de l'OMS et les équations médicales de Devine."
  },
  contentHtml: {
    en: `
      <h2>Calculating Your Healthy Weight Range by Height</h2>
      <p>A healthy weight range represents the body weight interval at which an adult's Body Mass Index falls within the standard <strong>18.5 to 24.9 kg/m²</strong> envelope. Rather than targeting a single rigid number on the scale, public health guidelines encourage aiming for a personal range that accounts for skeletal frame size, natural muscularity, and hydration.</p>

      <h2>The Mathematical Derivation</h2>
      <p>The mathematical boundaries for any given height are derived directly from the BMI formula:</p>
      <ul>
        <li><strong>Minimum Healthy Weight (kg):</strong> <code>18.5 &times; [Height (m)]&sup2;</code></li>
        <li><strong>Maximum Healthy Weight (kg):</strong> <code>24.9 &times; [Height (m)]&sup2;</code></li>
      </ul>
      <p>For example, for an individual with a height of 170 cm (1.70 m):</p>
      <ul>
        <li>Lower bound: <code>18.5 &times; (1.70 &times; 1.70) = 53.5 kg (118 lbs)</code></li>
        <li>Upper bound: <code>24.9 &times; (1.70 &times; 1.70) = 72.0 kg (159 lbs)</code></li>
      </ul>

      <h2>Historical Ideal Body Weight (IBW) Formulas</h2>
      <p>In addition to the WHO BMI range, clinicians historically utilized pharmacokinetic equations to estimate lean tissue baselines for medication dosing. The most renowned is the <strong>Devine Formula (1974)</strong>:</p>
      <div class="my-6 p-6 rounded-xl border border-[var(--border)] bg-[var(--card)] font-mono text-sm leading-relaxed space-y-2">
        <p class="font-bold text-[var(--accent)]">Devine Ideal Body Weight Formula (1974):</p>
        <p class="text-[var(--foreground)] font-bold">Men: IBW (kg) = 50.0 + 2.3 &times; [Height (inches) - 60]</p>
        <p class="text-[var(--foreground)] font-bold">Women: IBW (kg) = 45.5 + 2.3 &times; [Height (inches) - 60]</p>
      </div>

      <h2>Body Frame Size Adjustments</h2>
      <p>An individual's bone architecture (small, medium, or large frame) influences where they naturally fall within the healthy range. Frame size is conventionally evaluated by measuring wrist circumference relative to height. Individuals with larger bone structures and higher muscle mass comfortably sit near the upper end of the BMI range without excess adiposity.</p>
    `,
    hi: `
      <h2>ऊंचाई के अनुसार स्वस्थ वजन लक्ष्य कैसे तय करें?</h2>
      <p>स्वस्थ वजन वह सीमा है जहां आपका बीएमआई <strong>18.5 से 24.9 kg/m²</strong> के बीच रहता है। किसी एक निश्चित वजन के बजाय एक सीमा का पालन करना अधिक व्यावहारिक और स्वास्थ्यप्रद होता है, क्योंकि इसमें हड्डियों की बनावट और मांसपेशियों के भार का अंतर शामिल होता है।</p>

      <h2>गणितीय गणना का तरीका</h2>
      <ul>
        <li><strong>न्यूनतम स्वस्थ वजन:</strong> <code>18.5 &times; [ऊंचाई (मीटर में)]&sup2;</code></li>
        <li><strong>अधिकतम स्वस्थ वजन:</strong> <code>24.9 &times; [ऊंचाई (मीटर में)]&sup2;</code></li>
      </ul>

      <h2>डिवाइन आदर्श वजन फॉर्मूला (Devine IBW Formula)</h2>
      <p>दवाइयों की मात्रा तय करने और क्लीनिकल संदर्भ के लिए प्रसिद्ध <em>डिवाइन फॉर्मूला</em> का उपयोग किया जाता है:</p>
      <ul>
        <li><strong>पुरुष:</strong> 50 किग्रा + 2.3 किग्रा प्रति इंच (5 फीट से ऊपर)</li>
        <li><strong>महिलाएं:</strong> 45.5 किग्रा + 2.3 किग्रा प्रति इंच (5 फीट से ऊपर)</li>
      </ul>
    `,
    es: `
      <h2>Cómo Calcular el Rango de Peso Saludable por Estatura</h2>
      <p>El rango de peso saludable define el intervalo de masa corporal en el que el IMC se mantiene entre <strong>18.5 y 24.9 kg/m²</strong>. En lugar de buscar una cifra exacta en la báscula, las organizaciones médicas aconsejan mantener un rango adaptado a la complexión ósea y la masa muscular.</p>

      <h2>Fórmulas Matemáticas de Referencia</h2>
      <ul>
        <li><strong>Peso Mínimo Saludable:</strong> <code>18.5 &times; [Altura (m)]&sup2;</code></li>
        <li><strong>Peso Máximo Saludable:</strong> <code>24.9 &times; [Altura (m)]&sup2;</code></li>
      </ul>

      <h2>Fórmula Devine de Peso Ideal (1974)</h2>
      <p>Ampliamente utilizada en medicina clínica y farmacología:</p>
      <ul>
        <li><strong>Hombres:</strong> 50 kg + 2.3 kg por pulgada sobre los 5 pies (152.4 cm).</li>
        <li><strong>Mujeres:</strong> 45.5 kg + 2.3 kg por pulgada sobre los 5 pies (152.4 cm).</li>
      </ul>
    `,
    fr: `
      <h2>Calculer sa Fourchette de Poids Santé par Taille</h2>
      <p>Une fourchette de poids saine correspond à l'intervalle dans lequel l'indice de masse corporelle reste situé entre <strong>18,5 et 24,9 kg/m²</strong>.</p>

      <h2>Formules de Calcul de Base</h2>
      <ul>
        <li><strong>Poids Minimum :</strong> <code>18,5 &times; [Taille (m)]&sup2;</code></li>
        <li><strong>Poids Maximum :</strong> <code>24,9 &times; [Taille (m)]&sup2;</code></li>
      </ul>

      <h2>Équation de Devine (Poids Idéal Théorique)</h2>
      <ul>
        <li><strong>Hommes :</strong> 50 kg + 2,3 kg par pouce au-dessus de 5 pieds.</li>
        <li><strong>Femmes :</strong> 45,5 kg + 2,3 kg par pouce au-dessus de 5 pieds.</li>
      </ul>
    `,
    de: `
      <h2>Gesunden Gewichtsbereich nach Körpergröße berechnen</h2>
      <p>Der gesunde Referenzbereich umfasst alle Gewichtswerte, bei denen der BMI zwischen <strong>18,5 und 24,9 kg/m²</strong> liegt.</p>

      <h2>Berechnung der Grenzwerte</h2>
      <ul>
        <li><strong>Untergrenze Normalgewicht:</strong> <code>18,5 &times; [Größe (m)]&sup2;</code></li>
        <li><strong>Obergrenze Normalgewicht:</strong> <code>24,9 &times; [Größe (m)]&sup2;</code></li>
      </ul>

      <h2>Die Devine-Formel für das Idealgewicht (1974)</h2>
      <ul>
        <li><strong>Männer:</strong> 50 kg + 2,3 kg je Zoll über 5 Fuß.</li>
        <li><strong>Frauen:</strong> 45,5 kg + 2,3 kg je Zoll über 5 Fuß.</li>
      </ul>
    `,
    ko: `
      <h2>신장별 적정 정상 체중 범위 산출법</h2>
      <p>건강한 정상 체중 범위는 성인의 BMI가 <strong>18.5 ~ 24.9 kg/m²</strong>(아시아 기준 18.5 ~ 22.9 kg/m²)에 머무르는 체중 구간을 의미합니다.</p>

      <h2>산출 공식</h2>
      <ul>
        <li><strong>정상 체중 하한선:</strong> <code>18.5 &times; [신장(m)]&sup2;</code></li>
        <li><strong>정상 체중 상한선:</strong> <code>24.9 &times; [신장(m)]&sup2;</code></li>
      </ul>

      <h2>드바인(Devine) 적정 체중 공식</h2>
      <ul>
        <li><strong>남성:</strong> 50.0 kg + 2.3 kg &times; (신장 인치 - 60)</li>
        <li><strong>여성:</strong> 45.5 kg + 2.3 kg &times; (신장 인치 - 60)</li>
      </ul>
    `
  }
};

// 11. bmi-vs-body-fat
newArticles['bmi-vs-body-fat'] = {
  title: {
    en: "BMI vs Body Fat Percentage: Which Metric is Better?",
    hi: "बीएमआई बनाम बॉडी फैट: कौन सा पैमाना अधिक सटीक है?",
    ko: "BMI vs 체지방률: 더 정확한 비만 측정 지표 비교",
    de: "BMI vs. Körperfettanteil: Welcher Wert ist genauer?",
    es: "IMC vs Grasa Corporal: ¿Cuál Medida es Más Precisa?",
    fr: "IMC vs Pourcentage de Graisse : Quel est le Meilleur Indicateur ?"
  },
  category: {
    en: "Body Composition",
    hi: "शरीर संरचना",
    ko: "체성분 분석",
    de: "Körperzusammensetzung",
    es: "Composición Corporal",
    fr: "Composition Corporelle"
  },
  description: {
    en: "Compare BMI and body fat percentage for health screening. Learn why athletes need body fat tests, how visceral fat impacts risk, and which metric to trust.",
    hi: "बीएमआई और बॉडी फैट प्रतिशत की तुलना करें। जानें कि एथलीटों के लिए बॉडी फैट क्यों बेहतर है, विसरल फैट का क्या प्रभाव है और फिटनेस के लिए किसे प्राथमिकता दें।",
    ko: "체질량지수(BMI)와 체지방률(%)의 핵심 차이점을 비교 분석합니다. 운동선수의 근육량 평가와 일반인의 복부 내장 지방 판정에 있어 더 정확한 지표와 올바른 신체 성분 관리법을 알기 쉽게 종합적으로 설명합니다. 개인정보 수집 없는 안전한 브라우저 무료 연산 도구 안내.",
    de: "Vergleichen Sie den BMI mit dem Körperfettanteil. Warum Muskelmasse den BMI verzerrt, was Bauchfett bedeutet und welcher Wert für Ihre Fitnessziele zählt.",
    es: "Compara el IMC y el porcentaje de grasa corporal. Descubre por qué los atletas necesitan medir su grasa, el impacto de la grasa visceral y qué métrica elegir.",
    fr: "Comparez l'IMC et le taux de masse grasse. Découvrez pourquoi le muscle fausse l'IMC, l'impact de la graisse viscérale et quel indicateur suivre au quotidien."
  },
  contentHtml: {
    en: `
      <h2>BMI vs. Body Fat Percentage: Fundamental Differences</h2>
      <p>While <strong>Body Mass Index (BMI)</strong> calculates total scale weight relative to height, <strong>Body Fat Percentage (% Fat)</strong> evaluates the specific proportion of body mass composed of adipose tissue compared to lean tissue (skeletal muscle, organs, bones, and body water).</p>
      <p>Because scale weight treats dense muscle and adipose fat identically, BMI and body fat percentage frequently tell two very different stories about an individual's physical conditioning.</p>

      <h2>Side-by-Side Comparison: BMI vs. Body Fat Percentage</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">Feature</th>
              <th class="p-3">Body Mass Index (BMI)</th>
              <th class="p-3 text-[var(--accent)] font-extrabold">Body Fat Percentage (%)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)]">
            <tr>
              <td class="p-3 font-semibold">What it Measures</td>
              <td class="p-3">Total weight relative to stature</td>
              <td class="p-3 font-bold text-[var(--accent)]">Ratio of adipose tissue to lean mass</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Tools Needed</td>
              <td class="p-3">Scale and measuring tape</td>
              <td class="p-3 font-bold text-[var(--accent)]">Calipers, Navy tape method, DEXA, or BIA</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Athlete Accuracy</td>
              <td class="p-3">Poor (flags muscular athletes as overweight)</td>
              <td class="p-3 font-bold text-[var(--accent)]">Excellent (isolates lean tissue mass)</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Detection of "Skinny Fat" (TOFI)</td>
              <td class="p-3">Misses normal-weight central adiposity</td>
              <td class="p-3 font-bold text-[var(--accent)]">Identifies elevated fat with low muscle</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Accessibility & Cost</td>
              <td class="p-3">100% Free, instant calculation</td>
              <td class="p-3 font-bold text-[var(--accent)]">Requires specialized tools or clinic access</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>The Two Major Clinical Paradoxes</h2>
      <ol class="space-y-3">
        <li><strong>The Muscular Athlete Paradox:</strong> Weightlifters, rugby players, and sprinters regularly possess high muscle density. Their BMI may register as 27.0 or 31.0 ("Overweight" or "Obese"), yet a DEXA scan reveals a low body fat percentage (8% to 12%). For athletes, BMI is clinically misleading.</li>
        <li><strong>The Normal Weight Obesity (NWO) Paradox:</strong> Sedentary adults with poor muscle tone may register a "normal" BMI of 22.5 kg/m², but carry an unhealthy 32% body fat concentrated viscerally around organs. These individuals face elevated metabolic risks that BMI alone fails to expose.</li>
      </ol>

      <h2>ACE Body Fat Reference Categories</h2>
      <p>The <strong>American Council on Exercise (ACE)</strong> establishes the following reference classifications:</p>
      <ul>
        <li><strong>Essential Fat:</strong> Men: 2–5% | Women: 10–13%</li>
        <li><strong>Athletes:</strong> Men: 6–13% | Women: 14–20%</li>
        <li><strong>Fitness:</strong> Men: 14–17% | Women: 21–24%</li>
        <li><strong>Average:</strong> Men: 18–24% | Women: 25–31%</li>
        <li><strong>Obesity:</strong> Men: &ge; 25% | Women: &ge; 32%</li>
      </ul>

      <h2>Which Metric Should You Trust?</h2>
      <p>For broad population screenings and quick personal tracking, BMI provides an accessible, zero-cost starting point. However, if you engage in regular resistance training, are monitoring athletic body recomposition, or want insight into visceral metabolic risk, pairing BMI with <strong>Body Fat Percentage</strong> and <strong>Waist-to-Height Ratio</strong> provides a far more complete educational picture.</p>
    `,
    hi: `
      <h2>बीएमआई बनाम बॉडी फैट प्रतिशत: मूल अंतर</h2>
      <p><strong>बीएमआई (BMI)</strong> केवल ऊंचाई के अनुपात में कुल वजन मापता है, जबकि <strong>बॉडी फैट प्रतिशत (% Body Fat)</strong> यह बताता है कि आपके कुल वजन में से फैट (चर्बी) कितना है और मांसपेशियां, हड्डियां व पानी (लीन मास) कितना है।</p>
      <p>चूंकि तराजू मांसपेशियों और फैट में अंतर नहीं कर सकता, इसलिए बीएमआई और बॉडी फैट कई बार बिल्कुल अलग संकेत देते हैं।</p>

      <h2>बीएमआई बनाम बॉडी फैट तुलना तालिका</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">विशेषता</th>
              <th class="p-3">बॉडी मास इंडेक्स (BMI)</th>
              <th class="p-3 text-[var(--accent)] font-extrabold">बॉडी फैट प्रतिशत (%)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)]">
            <tr>
              <td class="p-3 font-semibold">क्या मापता है</td>
              <td class="p-3">ऊंचाई के आधार पर कुल भार</td>
              <td class="p-3 font-bold text-[var(--accent)]">चर्बी बनाम मांसपेशियों का सटीक अनुपात</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">एथलीटों के लिए सटीकता</td>
              <td class="p-3">कम (मांसपेशियों को भी वजन मान लेता है)</td>
              <td class="p-3 font-bold text-[var(--accent)]">अत्यंत सटीक और उपयोगी</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">मापने का खर्च</td>
              <td class="p-3">बिल्कुल मुफ़्त और तुरंत</td>
              <td class="p-3 font-bold text-[var(--accent)]">कैलिपर्स या डेक्सा (DEXA) स्कैन की जरूरत</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>किसे किस पर भरोसा करना चाहिए?</h2>
      <p>सामान्य स्वास्थ्य जांच के लिए बीएमआई एक अच्छा प्रारंभिक पैमाना है। लेकिन यदि आप नियमित जिम करते हैं, वजन उठाते हैं या एथलीट हैं, तो बॉडी फैट प्रतिशत और कमर की माप पर ध्यान देना अधिक आवश्यक है।</p>
    `,
    es: `
      <h2>IMC vs Porcentaje de Grasa Corporal: Diferencias Clave</h2>
      <p>Mientras que el <strong>IMC</strong> evalúa la masa total respecto a la altura, el <strong>Porcentaje de Grasa Corporal</strong> distingue con precisión entre tejido graso (adiposo) y masa magra (músculos, huesos y órganos vitales).</p>

      <h2>Tabla Comparativa</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">Aspecto</th>
              <th class="p-3">IMC (Índice de Masa Corporal)</th>
              <th class="p-3 text-[var(--accent)] font-extrabold">Porcentaje de Grasa (%)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)]">
            <tr>
              <td class="p-3 font-semibold">Qué evalúa</td>
              <td class="p-3">Peso total / altura²</td>
              <td class="p-3 font-bold text-[var(--accent)]">Proporción de grasa vs masa magra</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Precisión en Atletas</td>
              <td class="p-3">Baja (clasifica músculo como sobrepeso)</td>
              <td class="p-3 font-bold text-[var(--accent)]">Excelente (mide el tejido real)</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Coste y Accesibilidad</td>
              <td class="p-3">Gratuito e inmediato</td>
              <td class="p-3 font-bold text-[var(--accent)]">Requiere báscula BIA, plicómetro o DEXA</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>¿Qué métrica elegir?</h2>
      <p>Para la mayoría de personas que inician un control de peso, el IMC es un buen punto de partida. Para deportistas y entusiastas del fitness, medir el porcentaje de grasa corporal y el perímetro de la cintura proporciona información mucho más útil.</p>
    `,
    fr: `
      <h2>IMC vs Pourcentage de Graisse : Différences Fondamentales</h2>
      <p>L'<strong>IMC</strong> évalue la masse corporelle globale en fonction de la taille, sans distinguer le tissu musculaire dense du tissu adipeux. Le <strong>taux de masse grasse</strong> mesure précisément la part de graisse par rapport à la masse maigre.</p>

      <h2>Comparatif Direct</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">Critère</th>
              <th class="p-3">Indice de Masse Corporelle (IMC)</th>
              <th class="p-3 text-[var(--accent)] font-extrabold">Masse Grasse (%)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)]">
            <tr>
              <td class="p-3 font-semibold">Mesure</td>
              <td class="p-3">Poids total rapporté à la taille</td>
              <td class="p-3 font-bold text-[var(--accent)]">Ratio de tissu adipeux réel</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Sportifs et Musculation</td>
              <td class="p-3">Faible (muscle compté comme surpoids)</td>
              <td class="p-3 font-bold text-[var(--accent)]">Très précis</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Accessibilité</td>
              <td class="p-3">Gratuit et immédiat</td>
              <td class="p-3 font-bold text-[var(--accent)]">Nécessite impédancemètre ou DEXA</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Quel Indicateur Choisir ?</h2>
      <p>L'IMC reste excellent pour un premier repère de santé publique. Pour les sportifs réguliers ou pour surveiller l'adiposité abdominale, le taux de masse grasse et le tour de taille sont indispensables.</p>
    `,
    de: `
      <h2>BMI vs. Körperfettanteil: Grundlegende Unterschiede</h2>
      <p>Der <strong>BMI</strong> setzt das Gesamtgewicht ins Verhältnis zur Körpergröße, kann jedoch nicht zwischen schwerem Muskelgewebe und Fettgewebe unterscheiden. Der <strong>Körperfettanteil (%)</strong> isoliert den tatsächlichen Anteil des Fettgewebes.</p>

      <h2>Vergleichstabelle: BMI vs. Körperfettanteil</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">Eigenschaft</th>
              <th class="p-3">Body-Mass-Index (BMI)</th>
              <th class="p-3 text-[var(--accent)] font-extrabold">Körperfettanteil (%)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)]">
            <tr>
              <td class="p-3 font-semibold">Messgröße</td>
              <td class="p-3">Gesamtgewicht relativ zur Größe</td>
              <td class="p-3 font-bold text-[var(--accent)]">Anteil der Fettmasse an der Gesamtreferenz</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Genauigkeit bei Sportlern</td>
              <td class="p-3">Gering (Muskelmasse wird als Übergewicht gewertet)</td>
              <td class="p-3 font-bold text-[var(--accent)]">Sehr hoch</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Aufwand</td>
              <td class="p-3">Kostenlos und sofort berechenbar</td>
              <td class="p-3 font-bold text-[var(--accent)]">Caliper, BIA-Waage oder DEXA-Scan nötig</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Fazit</h2>
      <p>Als erste Orientierung ist der BMI unschlagbar einfach. Wer aktiv Muskelaufbau betreibt oder seinen Fettverlust genau tracken möchte, sollte jedoch auf den Körperfettanteil und den Taillenumfang setzen.</p>
    `,
    ko: `
      <h2>BMI vs 체지방률: 핵심 차이점과 분석</h2>
      <p><strong>체질량지수(BMI)</strong>는 신장 대비 전체 몸무게만을 측정하는 반면, <strong>체지방률(%)</strong>은 총 체중 중에서 순수 지방 조직이 차지하는 비율을 측정합니다.</p>
      <p>체중계는 무거운 골격근과 지방을 구분하지 못하기 때문에, 운동선수나 마른 비만 체형에서는 BMI와 체지방률이 완전히 상반된 결과를 보일 수 있습니다.</p>

      <h2>BMI vs 체지방률 비교표</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">비교 항목</th>
              <th class="p-3">체질량지수 (BMI)</th>
              <th class="p-3 text-[var(--accent)] font-extrabold">체지방률 (%)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)]">
            <tr>
              <td class="p-3 font-semibold">측정 대상</td>
              <td class="p-3">신장 대비 총 체중</td>
              <td class="p-3 font-bold text-[var(--accent)]">제지방량 대비 순수 체지방 비율</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">운동선수 정확도</td>
              <td class="p-3">낮음 (근육량을 과체중으로 오판)</td>
              <td class="p-3 font-bold text-[var(--accent)]">매우 정밀함</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">마른 비만 발견</td>
              <td class="p-3">정상 체중으로 판정되어 간과하기 쉬움</td>
              <td class="p-3 font-bold text-[var(--accent)]">근육 부족 및 내장 지방 판별 가능</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">측정 편의성</td>
              <td class="p-3">무료 및 즉시 산출</td>
              <td class="p-3 font-bold text-[var(--accent)]">인바디(BIA), 캘리퍼, DEXA 장비 필요</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>어떤 지표를 참고해야 할까요?</h2>
      <p>일반적인 인구 보건 선별 목적으로는 무료로 간편한 BMI가 훌륭한 출발점입니다. 하지만 정기적인 근력 운동을 하거나 복부 내장 지방을 체계적으로 관리하고자 한다면 <strong>체지방률</strong>과 <strong>허리둘레</strong>를 반드시 함께 확인하는 것이 과학적입니다.</p>
    `
  }
};

// Write out back into src/utils/blogArticles.ts
const outputCode = `export const blogArticles: Record<string, any> = ${JSON.stringify(newArticles, null, 2)};\n`;
fs.writeFileSync(filePath, outputCode, 'utf-8');
console.log("Successfully enriched all 11 blog articles across all 6 languages!");
