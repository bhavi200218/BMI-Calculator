// Module 1: Core BMI & Demographics (7 Articles)
import type { BlogArticleData } from './types';

export const bmiArticles: Record<string, BlogArticleData> = {
  "what-is-bmi": {
  datePublished: "2026-01-15",
  dateModified: "2026-10-25",
  title: {
    en: "What is BMI? Complete Definition, Formula & WHO Standards",
    hi: "बीएमआई क्या है? संपूर्ण परिभाषा, फॉर्मूला और स्वास्थ्य मानक",
    ko: "BMI란 무엇인가? 체질량지수 정의와 세계보건기구 표준 기준표",
    de: "Was ist der BMI? Definition, Formel & WHO-Grenzwerte",
    es: "¿Qué es el IMC? Definición, Fórmulas y Estándares de la OMS",
    fr: "Qu'est-ce que l'IMC ? Définition, Calcul et Normes OMS"
  },
  category: {
    en: "BMI & Health Basics",
    hi: "बीएमआई और स्वास्थ्य मूल बातें",
    ko: "BMI 기초",
    de: "BMI & Grundlagen",
    es: "Conceptos Básicos del IMC",
    fr: "Bases de l'IMC"
  },
  description: {
    en: "Comprehensive evidence-based guide to Body Mass Index (BMI). Learn its historical origins, metric and imperial formulas, WHO weight classification thresholds, Asian action triggers, physiological limitations, and complementary body composition markers.",
    hi: "बॉडी मास इंडेक्स (BMI) की संपूर्ण प्रमाण-आधारित गाइड। जानें इसका इतिहास, मीट्रिक और इंपीरियल फॉर्मूला, डब्ल्यूएचओ श्रेणियां, एशियाई मानक और स्वास्थ्य में इसका सही उपयोग।",
    ko: "체질량지수(BMI)의 정의와 표준 계산 공식을 상세하게 확인하세요. 세계보건기구(WHO) 기준에 따른 저체중, 정상, 과체중, 비만 분류 체계와 아시아인 분별점, 측정 한계점을 종합 안내합니다.",
    de: "Umfassender evidenzbasierter Leitfaden zum Body-Mass-Index (BMI). Definition, Formeln, WHO-Gewichtsklassen, asiatische Grenzwerte und physiologische Grenzen im Überblick.",
    es: "Guía completa basada en evidencia sobre el Índice de Masa Corporal (IMC). Aprende sus orígenes, fórmulas métricas e imperiales, categorías de la OMS y limitaciones fisiológicas.",
    fr: "Guide complet fondé sur des preuves sur l'Indice de Masse Corporelle (IMC). Histoire, formules métriques et impériales, classifications de l'OMS, seuils asiatiques et limites physiologiques."
  },
  contentHtml: {
    en: `
      <h2>What is Body Mass Index (BMI)?</h2>
      <p><strong>Body Mass Index (BMI)</strong> is an internationally recognized health screening measurement. It compares your body weight to your height to help determine if your weight falls within a healthy, balanced range.</p>
      <p>Belgian mathematician <strong>Lambert Adolphe Jacques Quetelet</strong> first designed the formula in the 1830s. In 1972, researcher Ancel Keys confirmed that Quetelet's math strongly matches real body composition across large adult populations. Today, the <strong>World Health Organization (WHO)</strong> and the <strong>CDC</strong> use BMI worldwide as the primary benchmark for adult weight screening.</p>

      <div class="my-5 p-5 rounded-xl border border-[var(--border)] bg-[var(--card)] space-y-3">
        <p class="font-bold text-[var(--accent)] text-xs uppercase tracking-wider">Quick Key Takeaways:</p>
        <ul class="text-sm space-y-1.5 text-[var(--foreground)] list-disc pl-5">
          <li><strong>Purpose:</strong> Screens baseline weight categories across large populations quickly and safely.</li>
          <li><strong>Healthy benchmark:</strong> 18.5 to 24.9 kg/m² for most adults.</li>
          <li><strong>Key strength:</strong> Non-invasive, instantaneous, and mathematically standardized worldwide.</li>
          <li><strong>Key limitation:</strong> Does not measure body fat percentage or muscle mass directly.</li>
        </ul>
      </div>

      <h2>Official Mathematical Formulas: Metric &amp; Imperial</h2>
      <p>Body Mass Index divides your weight by your height squared. It is universally expressed in kilograms per square meter (kg/m²):</p>
      <ul class="my-3 space-y-1.5 list-disc pl-5 text-sm">
        <li><strong>Standard Metric Formula:</strong> <code>BMI = Weight (kg) / [Height (m)]²</code></li>
        <li><strong>Imperial Formula (US):</strong> <code>BMI = [Weight (lbs) &times; 703] / [Height (inches)]²</code></li>
      </ul>
      <p>The number <strong>703</strong> is the exact conversion constant between metric units (kilograms and meters) and imperial units (pounds and inches).</p>

      <div class="my-6 p-6 rounded-xl border border-[var(--border)] bg-[var(--card)] font-mono text-sm leading-relaxed space-y-2">
        <p class="font-bold text-[var(--accent)]">Step-by-Step Numerical Calculation Examples:</p>
        <p class="text-[var(--foreground)]"><strong>Metric Example:</strong> An adult female weighing 68.0 kg with a height of 1.68 meters:</p>
        <p class="text-[var(--muted-foreground)]">&bull; Step 1: Square the height: 1.68 &times; 1.68 = 2.8224 m²</p>
        <p class="text-[var(--muted-foreground)]">&bull; Step 2: Divide body weight by squared height: 68.0 / 2.8224 = <strong>24.09 kg/m²</strong> (Normal Weight)</p>
        <p class="text-[var(--foreground)] mt-2"><strong>Imperial Example:</strong> An adult male weighing 185.0 lbs with a height of 5 feet 11 inches (71 inches):</p>
        <p class="text-[var(--muted-foreground)]">&bull; Step 1: Square the stature in inches: 71 &times; 71 = 5,041 in²</p>
        <p class="text-[var(--muted-foreground)]">&bull; Step 2: Multiply body weight by imperial constant: 185.0 &times; 703 = 130,055</p>
        <p class="text-[var(--muted-foreground)]">&bull; Step 3: Divide product by squared height: 130,055 / 5,041 = <strong>25.80 kg/m²</strong> (Overweight)</p>
      </div>

      <h2>World Health Organization (WHO) Adult Classification Matrix</h2>
      <p>The World Health Organization groups adult BMI scores into distinct categories to help individuals and healthcare providers evaluate general wellness:</p>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">WHO Category</th>
              <th class="p-3 font-mono text-[var(--accent)]">BMI Range (kg/m²)</th>
              <th class="p-3">Health Status</th>
              <th class="p-3">Cardiometabolic Risk Profile</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)]">
            <tr><td class="p-3 font-semibold">Severe Thinness</td><td class="p-3 font-mono">&lt; 16.0</td><td class="p-3">Nutritional deficit, fatigue</td><td class="p-3">Elevated immune and electrolyte risk</td></tr>
            <tr><td class="p-3 font-semibold">Moderate Thinness</td><td class="p-3 font-mono">16.0 – 16.9</td><td class="p-3">Low energy reserve</td><td class="p-3">Elevated osteopenia and fatigue risk</td></tr>
            <tr><td class="p-3 font-semibold">Mild Thinness</td><td class="p-3 font-mono">17.0 – 18.4</td><td class="p-3">Slender natural phenotype</td><td class="p-3">Mild baseline risk</td></tr>
            <tr><td class="p-3 font-semibold text-[var(--accent)]">Normal Healthy Weight</td><td class="p-3 font-mono font-bold text-[var(--accent)]">18.5 – 24.9</td><td class="p-3">Balanced body composition</td><td class="p-3">Statistically lowest all-cause health risk</td></tr>
            <tr><td class="p-3 font-semibold">Pre-Obesity (Overweight)</td><td class="p-3 font-mono">25.0 – 29.9</td><td class="p-3">Carrying extra weight or muscle</td><td class="p-3">Gradual rise in blood pressure and cholesterol</td></tr>
            <tr><td class="p-3 font-semibold">Obesity Class I</td><td class="p-3 font-mono">30.0 – 34.9</td><td class="p-3">Elevated body fat accumulation</td><td class="p-3">Substantially higher type 2 diabetes risk</td></tr>
            <tr><td class="p-3 font-semibold">Obesity Class II</td><td class="p-3 font-mono">35.0 – 39.9</td><td class="p-3">High central adiposity</td><td class="p-3">High cardiovascular and joint strain risk</td></tr>
            <tr><td class="p-3 font-semibold">Obesity Class III</td><td class="p-3 font-mono">&ge; 40.0</td><td class="p-3">Significant metabolic impact</td><td class="p-3">Comprehensive clinical guidance recommended</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Ethnic Cut-Off Adjustments: Asian Population Risk Profiles</h2>
      <p>Body composition varies by genetic background. Clinical research from the WHO Western Pacific Region and the Indian Council of Medical Research (ICMR) shows that adults of Asian descent tend to carry more visceral belly fat at lower body weights than Western populations.</p>
      <p>Because of this difference, health experts established earlier <strong>Asian Action Triggers</strong>:</p>
      <ul class="my-3 space-y-1.5 list-disc pl-5 text-sm">
        <li><strong>Healthy Asian Range:</strong> 18.5 to 22.9 kg/m²</li>
        <li><strong>Asian Overweight Action Point:</strong> 23.0 to 24.9 kg/m²</li>
        <li><strong>Asian Obesity Action Point:</strong> 25.0 kg/m² and above</li>
      </ul>
      <p>These lower thresholds help individuals identify cardiovascular and diabetes risks earlier, allowing for timely dietary and fitness adjustments.</p>

      <h2>Important Limitations: What BMI Cannot Measure</h2>
      <p>BMI is a practical first screening tool, but it does not tell the whole story about your body. Keep these three main limitations in mind:</p>
      <ul class="my-3 space-y-2 list-disc pl-5 text-sm">
        <li><strong>Muscle vs. Fat:</strong> BMI treats every pound the same. An athletic weightlifter with high muscle mass might score as "overweight" or "obese" despite having very low body fat.</li>
        <li><strong>Body Fat Placement:</strong> Visceral fat around the stomach carries higher health risks than subcutaneous fat on the hips. BMI cannot detect where your body stores fat.</li>
        <li><strong>Age and Bone Changes:</strong> As adults age, natural spine disc compression can slightly reduce height, which raises the calculated BMI without any real change in body fat.</li>
      </ul>

      <h2>Helpful Assessments to Pair with Your BMI</h2>
      <p>To build a complete picture of your physical wellness, health professionals suggest combining your BMI with these simple measurements:</p>
      <ol class="space-y-2 my-4 list-decimal pl-5 text-sm">
        <li><strong>Waist-to-Height Ratio (WHtR):</strong> Aim to keep your waist circumference to less than half your height (ratio under 0.50) for healthy abdominal fat levels.</li>
        <li><strong>Daily Energy Needs (BMR &amp; TDEE):</strong> Calculate your baseline calorie burn to plan your daily meals and active lifestyle with confidence.</li>
        <li><strong>Routine Health Panels:</strong> Fasting blood glucose, lipid panels, and resting blood pressure provide direct confirmation of internal metabolic health.</li>
      </ol>

      <h2>Frequently Asked Questions Regarding Body Mass Index</h2>
      <div class="space-y-4 my-6">
        <div>
          <h3 class="text-base font-bold text-[var(--foreground)]">Is a BMI of 25 always considered overweight?</h3>
          <p class="text-sm text-[var(--muted-foreground)]">In standard international adult guidelines, 25.0 kg/m² marks the threshold for overweight. However, for heavily muscled individuals, this elevated score frequently reflects dense lean muscle rather than excess body fat. Conversely, in South Asian populations, 25.0 kg/m² already represents the threshold for obesity.</p>
        </div>
        <div>
          <h3 class="text-base font-bold text-[var(--foreground)]">Does BMI apply equally to men and women?</h3>
          <p class="text-sm text-[var(--muted-foreground)]">Standard WHO BMI categories are unisex. However, women naturally carry approximately 8% to 12% more essential biological body fat than men at an identical BMI score. Evaluating waist circumference alongside BMI helps differentiate healthy female fat distribution from harmful central adiposity.</p>
        </div>
        <div>
          <h3 class="text-base font-bold text-[var(--foreground)]">How often should an adult monitor their BMI?</h3>
          <p class="text-sm text-[var(--muted-foreground)]">Measuring weight and calculating BMI once a month or quarterly is sufficient for most adults. Daily fluctuations typically reflect water shifts and glycogen storage rather than meaningful changes in skeletal muscle or fat mass.</p>
        </div>
      </div>

      <h2>Scientific References and Foundational Literature</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>World Health Organization. <em>Physical status: The use and interpretation of anthropometry.</em> WHO Technical Report Series 854. Geneva: WHO, 1995.</li>
        <li>Keys A, Fidanza F, Karvonen MJ, Kimura N, Taylor HL. <em>Indices of relative weight and obesity.</em> Journal of Chronic Diseases, 1972; 25(6-7):329-343.</li>
        <li>WHO Expert Consultation. <em>Appropriate body-mass index for Asian populations and its implications for policy and intervention strategies.</em> The Lancet, 2004; 363(9403):157-163.</li>
        <li>National Institutes of Health. <em>Clinical Guidelines on the Identification, Evaluation, and Treatment of Overweight and Obesity in Adults.</em> Obes Res 1998; 6(Suppl 2):51S-209S.</li>
      </ul>
    `,
    es: `
      <h2>Definición y Origen Histórico del Índice de Masa Corporal</h2>
      <p>El <strong>Índice de Masa Corporal (IMC)</strong> es un parámetro antropométrico internacionalmente estandarizado diseñado para evaluar la relación entre la masa corporal y la estatura de un adulto. Concebido entre 1830 y 1850 por el astrónomo y estadístico belga <strong>Lambert Adolphe Jacques Quetelet</strong>, se conoció originariamente como el <em>Índice de Quetelet</em>. Quetelet determinó que en personas sanas la masa corporal aumenta de forma aproximadamente proporcional al cuadrado de la estatura.</p>
      <p>En 1972, el fisiólogo estadounidense Ancel Keys publicó un estudio pionero en el <em>Journal of Chronic Diseases</em> con 7.424 hombres de cinco países, acuñando formalmente el término "Índice de Masa Corporal". La Organización Mundial de la Salud (OMS), los CDC y los NIH adoptaron posteriormente el IMC como el estándar universal de cribado poblacional.</p>

      <h2>Fórmulas Matemáticas Oficiales</h2>
      <ul>
        <li><strong>Fórmula Métrica Oficial:</strong> <code>IMC = Peso (kg) / [Estatura (m)]²</code></li>
        <li><strong>Fórmula Imperial:</strong> <code>IMC = [Peso (lbs) &times; 703] / [Estatura (pulgadas)]²</code></li>
      </ul>
      <p>El factor <strong>703</strong> proviene de la conversión exacta de libras a kilogramos y de pulgadas a metros: <code>0.45359237 / (0.0254)² &asymp; 703.07</code>.</p>

      <h2>Clasificación Oficial de la Organización Mundial de la Salud</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">Categoría de la OMS</th>
              <th class="p-3 font-mono text-[var(--accent)]">Rango de IMC (kg/m²)</th>
              <th class="p-3">Significado Clínico</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)]">
            <tr><td class="p-3 font-semibold">Bajo Peso Severo</td><td class="p-3 font-mono">&lt; 16.0</td><td class="p-3">Desnutrición calórico-proteica grave, riesgo inmunitario</td></tr>
            <tr><td class="p-3 font-semibold">Bajo Peso Moderado</td><td class="p-3 font-mono">16.0 – 16.9</td><td class="p-3">Déficit ponderal, fatiga crónica y fragilidad ósea</td></tr>
            <tr><td class="p-3 font-semibold">Bajo Peso Leve</td><td class="p-3 font-mono">17.0 – 18.4</td><td class="p-3">Reserva energética reducida, fenotipo delgado</td></tr>
            <tr><td class="p-3 font-semibold text-[var(--accent)]">Peso Saludable Normal</td><td class="p-3 font-mono font-bold text-[var(--accent)]">18.5 – 24.9</td><td class="p-3">Mínimo riesgo estadístico de morbilidad cardiometabólica</td></tr>
            <tr><td class="p-3 font-semibold">Sobrepeso (Pre-obesidad)</td><td class="p-3 font-mono">25.0 – 29.9</td><td class="p-3">Ligero incremento del riesgo cardiovascular y dislipemia</td></tr>
            <tr><td class="p-3 font-semibold">Obesidad Clase I</td><td class="p-3 font-mono">30.0 – 34.9</td><td class="p-3">Incremento sustancial de riesgo de diabetes tipo 2</td></tr>
            <tr><td class="p-3 font-semibold">Obesidad Clase II</td><td class="p-3 font-mono">35.0 – 39.9</td><td class="p-3">Adiposidad visceral severa, apnea obstructiva</td></tr>
            <tr><td class="p-3 font-semibold">Obesidad Clase III</td><td class="p-3 font-mono">&ge; 40.0</td><td class="p-3">Riesgo crítico; requiere abordaje clínico multidisciplinar</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Limitaciones Fisiológicas del IMC</h2>
      <p>El IMC es una métrica de cribado y no distingue entre tejido adiposo y masa muscular magra. Atletas con hipertrofia muscular pueden presentar un IMC superior a 28 sin sobrepeso graso. Por ello, se recomienda complementar el IMC con la medición de la circunferencia de cintura y el porcentaje de grasa corporal.</p>
    `,
    fr: `
      <h2>Définition et Origine Historique de l'IMC</h2>
      <p>L'<strong>Indice de Masse Corporelle (IMC)</strong> est une mesure anthropométrique internationale conçue pour estimer la corpulence d'un individu en rapportant son poids au carré de sa taille. Développé entre 1830 et 1850 par le mathématicien belge <strong>Lambert Adolphe Jacques Quetelet</strong> sous le nom d'<em>Indice de Quetelet</em>, ce paramètre a été validé en 1972 par Ancel Keys puis adopté par l'Organisation Mondiale de la Santé (OMS).</p>

      <h2>Formules de Calcul Officielles</h2>
      <ul>
        <li><strong>Système Métrique :</strong> <code>IMC = Poids (kg) / [Taille (m)]²</code></li>
        <li><strong>Système Impérial :</strong> <code>IMC = [Poids (lbs) &times; 703] / [Taille (pouces)]²</code></li>
      </ul>

      <h2>Grille de Classification Internationale OMS</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">Classification OMS</th>
              <th class="p-3 font-mono text-[var(--accent)]">Intervalle d'IMC (kg/m²)</th>
              <th class="p-3">Signification Médicale</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)]">
            <tr><td class="p-3 font-semibold">Insuffisance pondérale sévère</td><td class="p-3 font-mono">&lt; 16,0</td><td class="p-3">Dénutrition aiguë, risque immunitaire élevé</td></tr>
            <tr><td class="p-3 font-semibold">Insuffisance pondérale modérée</td><td class="p-3 font-mono">16,0 – 16,9</td><td class="p-3">Fragilité osseuse, carences chroniques</td></tr>
            <tr><td class="p-3 font-semibold">Insuffisance pondérale légère</td><td class="p-3 font-mono">17,0 – 18,4</td><td class="p-3">Faible réserve métabolique, morphotype mince</td></tr>
            <tr><td class="p-3 font-semibold text-[var(--accent)]">Corpulence normale</td><td class="p-3 font-mono font-bold text-[var(--accent)]">18,5 – 24,9</td><td class="p-3">Risque de mortalité cardiométabolique minimal</td></tr>
            <tr><td class="p-3 font-semibold">Surpoids</td><td class="p-3 font-mono">25,0 – 29,9</td><td class="p-3">Risque accru d'hypertension et de dyslipidémie</td></tr>
            <tr><td class="p-3 font-semibold">Obésité classe I</td><td class="p-3 font-mono">30,0 – 34,9</td><td class="p-3">Risque modéré de diabète de type 2</td></tr>
            <tr><td class="p-3 font-semibold">Obésité classe II</td><td class="p-3 font-mono">35,0 – 39,9</td><td class="p-3">Risque élevé d'apnée du sommeil et de maladies coronariennes</td></tr>
            <tr><td class="p-3 font-semibold">Obésité classe III (morbide)</td><td class="p-3 font-mono">&ge; 40,0</td><td class="p-3">Risque critique justifiant une prise en charge médicale</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Limites Cliniques et Mesures Complémentaires</h2>
      <p>L'IMC ne différencie pas la masse musculaire de la masse adipeuse. Pour une évaluation de précision, associez votre résultat au ratio taille-hanches et à la composition corporelle par bio-impédancemétrie.</p>
    `,
    de: `
      <h2>Definition und Geschichte des Body-Mass-Index (BMI)</h2>
      <p>Der <strong>Body-Mass-Index (BMI)</strong> ist ein international standardisierter anthropometrischer Messwert, der das Körpergewicht zur Körpergröße ins Verhältnis setzt. Erfunden wurde die Formel zwischen 1830 und 1850 vom belgischen Gelehrten <strong>Lambert Adolphe Jacques Quetelet</strong>. 1972 wies Ancel Keys nach, dass der Quetelet-Index die beste Korrelation mit dem gemessenen Körperfett aufweist, woraufhin die WHO den BMI als weltweites Standardmaß übernahm.</p>

      <h2>Mathematische Formeln</h2>
      <ul>
        <li><strong>Metrische Formel:</strong> <code>BMI = Gewicht (kg) / [Größe (m)]²</code></li>
        <li><strong>Imperiale Formel:</strong> <code>BMI = [Gewicht (lbs) &times; 703] / [Größe (Zoll)]²</code></li>
      </ul>

      <h2>Offizielle WHO-Klassifikation für Erwachsene</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">WHO-Kategorie</th>
              <th class="p-3 font-mono text-[var(--accent)]">BMI-Bereich (kg/m²)</th>
              <th class="p-3">Gesundheitliche Einstufung</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)]">
            <tr><td class="p-3 font-semibold">Starkes Untergewicht</td><td class="p-3 font-mono">&lt; 16,0</td><td class="p-3">Akute Mangelernährung, Immunschwäche</td></tr>
            <tr><td class="p-3 font-semibold">Mäßiges Untergewicht</td><td class="p-3 font-mono">16,0 – 16,9</td><td class="p-3">Chronisches Energiedefizit, Osteoporoserisiko</td></tr>
            <tr><td class="p-3 font-semibold">Leichtes Untergewicht</td><td class="p-3 font-mono">17,0 – 18,4</td><td class="p-3">Geringe Energiereserven, schlanker Phänotyp</td></tr>
            <tr><td class="p-3 font-semibold text-[var(--accent)]">Normalgewicht</td><td class="p-3 font-mono font-bold text-[var(--accent)]">18,5 – 24,9</td><td class="p-3">Geringstes relatives Krankheits- und Sterberisiko</td></tr>
            <tr><td class="p-3 font-semibold">Präadipositas (Übergewicht)</td><td class="p-3 font-mono">25,0 – 29,9</td><td class="p-3">Leicht erhöhtes Risiko für Bluthochdruck</td></tr>
            <tr><td class="p-3 font-semibold">Adipositas Grad I</td><td class="p-3 font-mono">30,0 – 34,9</td><td class="p-3">Deutlich erhöhtes Risiko für Diabetes Typ 2</td></tr>
            <tr><td class="p-3 font-semibold">Adipositas Grad II</td><td class="p-3 font-mono">35,0 – 39,9</td><td class="p-3">Hohes Risiko für kardiovaskuläre Folgeerkrankungen</td></tr>
            <tr><td class="p-3 font-semibold">Adipositas Grad III</td><td class="p-3 font-mono">&ge; 40,0</td><td class="p-3">Kritisch; umfassende ärztliche Therapie erforderlich</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Grenzen des BMI</h2>
      <p>Der BMI unterscheidet nicht zwischen Muskelgewebe und Fettgewebe. Sportler sollten ergänzend das Taillen-Größen-Verhältnis (WHtR) oder eine Körperfettmessung durchführen.</p>
    `,
    ko: `
      <h2>체질량지수(BMI)의 의학적 정의와 역사</h2>
      <p><strong>체질량지수(Body Mass Index, BMI)</strong>는 성인의 신장과 체중의 상관관계를 통계적으로 표준화한 대표적인 비만도 선별 지표입니다. 1830년대 벨기에의 천문학자이자 통계학자인 <strong>아돌프 케틀레(Adolphe Quetelet)</strong>가 인간의 신체 질량이 대략 키의 제곱에 비례한다는 사실을 발견하면서 <em>케틀레 지수</em>로 처음 명명되었습니다. 이후 1972년 안셀 키스(Ancel Keys) 박사의 대규모 연구를 거쳐 세계보건기구(WHO)의 글로벌 표준 선별 지표로 공식 채택되었습니다.</p>

      <h2>공식 계산 공식</h2>
      <ul>
        <li><strong>미터법 표준 공식:</strong> <code>BMI = 체중(kg) / [신장(m)]²</code></li>
        <li><strong>야드파운드법 공식:</strong> <code>BMI = [체중(lbs) &times; 703] / [신장(인치)]²</code></li>
      </ul>

      <h2>세계보건기구(WHO) 성인 표준 체중 분류 기준표</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">분류 명칭</th>
              <th class="p-3 font-mono text-[var(--accent)]">BMI 범위(kg/m²)</th>
              <th class="p-3">의학적 특징 및 대사 위험도</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)]">
            <tr><td class="p-3 font-semibold">고도 저체중</td><td class="p-3 font-mono">&lt; 16.0</td><td class="p-3">급성 영양 결핍, 면역 저하 및 부정맥 위험</td></tr>
            <tr><td class="p-3 font-semibold">중등도 저체중</td><td class="p-3 font-mono">16.0 – 16.9</td><td class="p-3">만성 영양 부족, 골밀도 감소 및 피로</td></tr>
            <tr><td class="p-3 font-semibold">경도 저체중</td><td class="p-3 font-mono">17.0 – 18.4</td><td class="p-3">기초 대사 예비력 부족, 마른 체형</td></tr>
            <tr><td class="p-3 font-semibold text-[var(--accent)]">정상 건강 체중</td><td class="p-3 font-mono font-bold text-[var(--accent)]">18.5 – 24.9</td><td class="p-3">통계학적으로 가장 낮은 심혈관 및 전체 사망률</td></tr>
            <tr><td class="p-3 font-semibold">과체중 (비만 전단계)</td><td class="p-3 font-mono">25.0 – 29.9</td><td class="p-3">고혈압, 이상지질혈증 발생 위험 완만 상승</td></tr>
            <tr><td class="p-3 font-semibold">1단계 비만</td><td class="p-3 font-mono">30.0 – 34.9</td><td class="p-3">내장지방 누적, 제2형 당뇨병 유병률 대폭 증가</td></tr>
            <tr><td class="p-3 font-semibold">2단계 비만</td><td class="p-3 font-mono">35.0 – 39.9</td><td class="p-3">중증 복부 비만, 폐쇄성 수면무호흡증 위험</td></tr>
            <tr><td class="p-3 font-semibold">3단계 비만 (고도 비만)</td><td class="p-3 font-mono">&ge; 40.0</td><td class="p-3">임상적 다학제 치료가 필수적인 고위험 상태</td></tr>
          </tbody>
        </table>
      </div>

      <h2>아시아인 맞춤형 기준점</h2>
      <p>한국을 포함한 동아시아 성인은 동일한 체중에서도 내장지방 축적이 빠르기 때문에 과체중 기준이 23.0 kg/m², 비만 기준이 25.0 kg/m²로 하향 조정 적용됩니다.</p>
    `,
    hi: `
      <h2>बॉडी मास इंडेक्स (बीएमआई) क्या है?</h2>
      <p><strong>बॉडी मास इंडेक्स (Body Mass Index / BMI)</strong> एक अंतरराष्ट्रीय स्तर पर मान्यता प्राप्त नैदानिक स्क्रीनिंग पैमाना है, जो किसी व्यक्ति के कुल शारीरिक वजन और उसकी लंबाई (कद) के गणितीय अनुपात का मूल्यांकन करता है। चिकित्सा और सार्वजनिक स्वास्थ्य में इसका प्राथमिक उद्देश्य यह निर्धारित करना है कि क्या व्यक्ति का वजन उसके कद के अनुपात में एक स्वस्थ, चिकित्सकीय रूप से सुरक्षित सीमा में आता है।</p>
      <p>19वीं सदी के शुरुआती दौर (1832) में बेल्जियम के प्रसिद्ध गणितज्ञ और समाजशास्त्री <strong>लैम्बर्ट एडोल्फ जैक्स क्वेटलेट (Lambert Adolphe Jacques Quetelet)</strong> ने मानव शरीर के अनुपात पर शोध करते हुए इस फॉर्मूले को तैयार किया था, जिसे मूल रूप से <em>'क्वेटलेट इंडेक्स' (Quetelet Index)</em> कहा जाता था। इसके बाद 1972 में प्रसिद्ध अमेरिकी शोधकर्ता <strong>एन्सेल कीज (Ancel Keys)</strong> ने अपने ऐतिहासिक बहु-राष्ट्रीय अध्ययन में यह सिद्ध किया कि क्वेटलेट का यह गणितीय सूचकांक विभिन्न जनसंख्या समूहों में शारीरिक वसा के स्तर से सबसे सटीक सहसंबंध दर्शाता है। इसके बाद से <strong>विश्व स्वास्थ्य संगठन (WHO)</strong> और <strong>यूएस सेंटर फॉर डिजीज कंट्रोल एंड प्रिवेंशन (CDC)</strong> ने इसे वयस्क आबादी के वजन वर्गीकरण के लिए वैश्विक मानक घोषित किया।</p>

      <h2>बीएमआई का आधिकारिक गणितीय फॉर्मूला: मीट्रिक एवं इंपीरियल</h2>
      <p>बीएमआई की गणना व्यक्ति के कुल शारीरिक द्रव्यमान (वजन) को उसके कद (लंबाई) के वर्ग से विभाजित करके की जाती है। अंतरराष्ट्रीय स्तर पर इसे किलोग्राम प्रति वर्ग मीटर (kg/m²) में व्यक्त किया जाता है:</p>

      <div class="my-6 p-5 rounded-2xl border border-[#e6e6e6] bg-[var(--card)] space-y-4">
        <h3 class="text-base font-bold text-[#464feb] uppercase tracking-wider">आधिकारिक गणना सूत्र</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl border border-[#e6e6e6] bg-[var(--background)]">
            <p class="font-bold text-sm text-[var(--foreground)]">मीट्रिक प्रणाली (मानक SI इकाई):</p>
            <p class="font-mono text-base font-bold text-[#464feb] mt-2">BMI = वजन (kg) / [कद (m)]²</p>
            <p class="text-xs text-[var(--muted-foreground)] mt-2"><strong>उदाहरण:</strong> यदि वजन 70 किग्रा और लंबाई 1.75 मीटर है: 70 / (1.75 × 1.75) = 70 / 3.0625 = <strong>22.86 kg/m²</strong> (सामान्य वजन)।</p>
          </div>
          <div class="p-4 rounded-xl border border-[#e6e6e6] bg-[var(--background)]">
            <p class="font-bold text-sm text-[var(--foreground)]">इंपीरियल प्रणाली (पाउंड व इंच):</p>
            <p class="font-mono text-base font-bold text-[#464feb] mt-2">BMI = [वजन (lbs) × 703] / [कद (inches)]²</p>
            <p class="text-xs text-[var(--muted-foreground)] mt-2"><strong>उदाहरण:</strong> यदि वजन 154 lbs और लंबाई 69 इंच (5'9") है: (154 × 703) / (69 × 69) = 108262 / 4761 = <strong>22.74 kg/m²</strong>।</p>
          </div>
        </div>
      </div>

      <h2>विश्व स्वास्थ्य संगठन (WHO) की मानक वयस्क बीएमआई श्रेणियां</h2>
      <p>20 वर्ष और उससे अधिक उम्र के वयस्कों के लिए, डब्ल्यूएचओ ने दीर्घकालिक मृत्यु दर और रुग्णता जोखिम के आधार पर निम्नलिखित श्रेणियां निर्धारित की हैं:</p>

      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">बीएमआई श्रेणी</th>
              <th class="p-3 border border-[#e6e6e6] text-[#464feb] font-bold">मानक सीमा (kg/m²)</th>
              <th class="p-3 border border-[#e6e6e6]">स्वास्थ्य स्थिति एवं नैदानिक जोखिम प्रोफाइल</th>
            </tr>
          </thead>
          <tbody class="divide-y border-[#e6e6e6]">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-amber-600 font-bold">कम वजन (अंडरवेट)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-amber-600 font-bold">&lt; 18.5</td>
              <td class="p-3 border border-[#e6e6e6]">सूक्ष्म पोषक तत्वों की कमी, ऑस्टियोपोरोसिस, कमजोर इम्युनिटी और एनीमिया का बढ़ा जोखिम।</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-emerald-600 font-bold">सामान्य / स्वस्थ वजन</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-emerald-600 font-bold">18.5 – 24.9</td>
              <td class="p-3 border border-[#e6e6e6]">कार्डियोमेटाबॉलिक रोगों, स्ट्रोक और समयपूर्व मृत्यु का सबसे कम सांख्यिकीय जोखिम।</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-amber-500 font-bold">अधिक वजन (प्री-ओबीस)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-amber-500 font-bold">25.0 – 29.9</td>
              <td class="p-3 border border-[#e6e6e6]">उच्च रक्तचाप, इंसुलिन प्रतिरोध, डिस्लिपिडेमिया और जोड़ों के ऑस्टियोआर्थराइटिस का मध्यम जोखिम।</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-rose-500 font-bold">मोटापा श्रेणी I (मध्यम)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-rose-500 font-bold">30.0 – 34.9</td>
              <td class="p-3 border border-[#e6e6e6]">टाइप-2 डायबिटीज, कोरोनरी धमनी रोग और स्लीप एपनिया का उच्च नैदानिक जोखिम।</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-rose-600 font-bold">मोटापा श्रेणी II (गंभीर)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-rose-600 font-bold">35.0 – 39.9</td>
              <td class="p-3 border border-[#e6e6e6]">फैटी लिवर, संवहनी सूजन, हृदय विफलता और कुछ कैंसर का अत्यधिक उच्च जोखिम।</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-purple-600 font-bold">मोटापा श्रेणी III (अत्यधिक/रुग्ण)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-purple-600 font-bold">&ge; 40.0</td>
              <td class="p-3 border border-[#e6e6e6]">तत्काल चिकित्सा या बैरिएट्रिक हस्तक्षेप की आवश्यकता; जीवन प्रत्याशा में 8-10 वर्ष की संभावित कमी।</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>एशियाई आबादी के लिए संशोधित कट-ऑफ (The Asian BMI Modification)</h2>
      <p>विश्व स्वास्थ्य संगठन की विशेषज्ञ परामर्श समिति (WHO Asian BMI Consultation, <em>The Lancet 2004</em>) ने पाया कि दक्षिण एशियाई (भारतीय उपमहाद्वीप) और पूर्वी एशियाई व्यक्तियों में समान बीएमआई स्तर पर कोकेशियान (यूरोपीय) आबादी की तुलना में 3% से 5% अधिक शारीरिक वसा और अत्यधिक आंतरिक पेट की चर्बी (विसरल फैट) होती है। इसलिए एशियाई वयस्कों के लिए संवेदनशीलता सीमाएं कम रखी गई हैं:</p>
      <ul>
        <li><strong>एशियाई सामान्य वजन:</strong> 18.5 से 22.9 kg/m²</li>
        <li><strong>एशियाई अधिक वजन (कार्रवाई बिंदु):</strong> 23.0 से 27.4 kg/m²</li>
        <li><strong>एशियाई मोटापा:</strong> &ge; 27.5 kg/m²</li>
      </ul>

      <h2>बीएमआई के लाभ और चिकित्सीय सीमाएं</h2>
      <p>बीएमआई का सबसे बड़ा लाभ इसकी सरलता, गैर-आक्रामक प्रकृति और शून्य लागत है। यह प्राथमिक चिकित्सा में त्वरित स्वास्थ्य स्क्रीनिंग के लिए एक अत्यंत प्रभावी उपकरण है। हालांकि, बीएमआई केवल कुल वजन मापता है; यह वसा (फैट मास) और मांसपेशियों (लीन मास) के बीच अंतर नहीं कर सकता। इसलिए पुख्ता स्वास्थ्य मूल्यांकन के लिए इसे कमर की परिधि और रक्त परीक्षणों के साथ देखा जाना चाहिए।</p>

      <h2>वैज्ञानिक संदर्भ एवं साक्ष्य</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>World Health Organization. <em>Physical status: The use and interpretation of anthropometry.</em> <a href="https://apps.who.int/iris/handle/10665/37003" class="text-[#464feb] underline">WHO Technical Report Series 854; 1995.</a></li>
        <li>Keys A, et al. <em>Indices of relative weight and obesity.</em> <a href="https://pubmed.ncbi.nlm.nih.gov/4650929/" class="text-[#464feb] underline">J Chronic Dis 1972; 25(6):329-343. PMID: 4650929</a>.</li>
        <li>WHO Expert Consultation. <em>Appropriate body-mass index for Asian populations and its implications for policy and intervention strategies.</em> <a href="https://pubmed.ncbi.nlm.nih.gov/14726171/" class="text-[#464feb] underline">Lancet 2004; 363(9403):157-163. PMID: 14726171</a>.</li>
      </ul>
    `
  }
},

  "is-bmi-accurate": {
  datePublished: "2026-02-10",
  dateModified: "2026-10-28",
  title: {
    en: "Is BMI Accurate? Research Analysis, Limitations & Better Metrics",
    hi: "क्या बीएमआई सटीक है? अनुसंधान विश्लेषण, सीमाएं और बेहतर विकल्प",
    ko: "BMI는 얼마나 정확한가? 비만도 측정의 연구 분석과 대안",
    de: "Ist der BMI genau? Forschungsanalyse, Grenzen & moderne Alternativen",
    es: "¿Es Preciso el IMC? Análisis de Investigación, Límites y Alternativas",
    fr: "L'IMC est-il Précis ? Analyse Scientifique, Limites et Alternatives"
  },
  category: {
    en: "Research Evidence & Limitations",
    hi: "अनुसंधान साक्ष्य और सीमाएं",
    ko: "연구 근거 및 한계점",
    de: "Forschungsevidenz & Grenzen",
    es: "Evidencia de Investigación y Límites",
    fr: "Évaluation & Limites Scientifiques"
  },
  description: {
    en: "An in-depth scientific evaluation of Body Mass Index accuracy. Learn why BMI fails for muscular athletes, older adults, and ethnically diverse populations, and explore superior alternative metrics like DEXA scans, WHtR, and visceral fat imaging.",
    hi: "बॉडी मास इंडेक्स की सटीकता का गहन वैज्ञानिक विश्लेषण। जानें कि बीएमआई एथलीटों, बुजुर्गों और एशियाई लोगों में क्यों अधूरा साबित होता है और इसके बेहतर साक्ष्य-आधारित विकल्प क्या हैं।",
    ko: "체질량지수(BMI)의 정확도에 대한 심층 연구 분석. 근육형 운동선수, 고령층의 근감소증, 인종별 지방 분포 차이로 인한 왜곡 현상과 DEXA, 허리둘레-신장 비율(WHtR) 등 정밀 대체 지표를 상세히 안내합니다.",
    de: "Detaillierte wissenschaftliche Analyse der Genauigkeit des Body-Mass-Index. Warum der BMI bei Sportlern und Senioren fehlerhaft sein kann und welche Alternativen wie WHtR und DEXA aussagekräftiger sind.",
    es: "Evaluación científica rigurosa sobre la precisión del IMC. Por qué falla en atletas musculados y ancianos con sarcopenia, y qué métodos alternativos ofrecen una valoración superior.",
    fr: "Examen scientifique approfondi de la fiabilité de l'Indice de Masse Corporelle. Découvrez les limites chez les sportifs et les seniors, ainsi que les alternatives fiables comme le DEXA et le ratio taille-hauteur."
  },
  contentHtml: {
    en: `
      <h2>The Paradox of Body Mass Index in Modern Research & Practice</h2>
      <p>Body Mass Index (BMI) is arguably the most widely utilized anthropometric screening metric in contemporary medicine. Adopted by the World Health Organization (WHO), the National Institutes of Health (NIH), and healthcare institutions worldwide, its straightforward calculation—total weight in kilograms divided by height in meters squared—allows rapid population-level risk stratification at zero direct financial cost. However, the scientific premise upon which BMI rests has generated vigorous debate across endocrinology, cardiology, and sports medicine.</p>
      <p>The core clinical paradox is that <strong>BMI measures excess weight, not excess adiposity (fat tissue)</strong>. By combining skeletal muscle, internal organs, skeletal bone mineral density, extracellular fluids, and adipose tissue into a single gross numerator, BMI frequently produces misleading classifications across both athletic and sedentary clinical cohorts.</p>

      <h2>The Three Primary Failure Modes of Standard BMI</h2>
      <div class="my-6 space-y-4">
        <div class="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[var(--accent)]">1. The Athlete / Muscle Mass False Positive</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">Skeletal muscle tissue has a physical density of approximately 1.06 g/cm³, whereas adipose fat tissue has a density of roughly 0.90 g/cm³. Well-conditioned athletes, bodybuilders, and manual laborers carry substantial muscular hypertrophy, which drives total mass upwards without increasing cardiovascular risk. A rugby player or strength athlete standing 180 cm (5'11") and weighing 98 kg possesses a calculated BMI of <strong>30.2 kg/m²</strong> (categorized as "Obese Class I"), despite exhibiting a lean body fat percentage below 12% and pristine lipid profiles.</p>
        </div>
        <div class="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[var(--accent)]">2. Sarcopenic Obesity & Normal-Weight Metabolic Obesity (MONW)</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">Conversely, the most dangerous clinical failure mode of BMI is the false negative. In older adults or sedentary individuals, progressive age-related muscle loss (sarcopenia) reduces total scale weight while visceral adipose tissue steadily accumulates around vital organs. An individual may register a completely "normal" BMI of <strong>22.5 kg/m²</strong>, yet carry over 35% body fat with severe insulin resistance, elevated liver enzymes, and systemic vascular inflammation—a phenomenon recognized medically as "Normal-Weight Obesity" (NWO) or the metabolically obese normal-weight phenotype.</p>
        </div>
        <div class="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[var(--accent)]">3. Anatomical Distribution: Visceral vs. Subcutaneous Adiposity</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">BMI provides zero information regarding anatomical fat distribution. Subcutaneous adipose tissue deposited on the hips and thighs (gynoid pattern) carries minimal cardiometabolic penalty and may even exert protective metabolic effects. In contrast, <em>intra-abdominal visceral fat</em> (android pattern) surrounds the pancreas, liver, and intestines, secreting pro-inflammatory cytokines (IL-6, TNF-alpha) directly into the portal circulation and precipitating atherosclerosis, non-alcoholic steatohepatitis (NASH), and endothelial dysfunction.</p>
        </div>
      </div>

      <h2>Comparative Accuracy: BMI vs. Modern Body Composition Methods</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">Measurement Modality</th>
              <th class="p-3">Diagnostic Precision</th>
              <th class="p-3">Primary Advantage</th>
              <th class="p-3">Primary Limitation</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)]">
            <tr>
              <td class="p-3 font-semibold">Standard Body Mass Index (BMI)</td>
              <td class="p-3 font-mono text-amber-500">Moderate (Population)</td>
              <td class="p-3">Zero cost, instant, highly reproducible universally</td>
              <td class="p-3">Cannot distinguish lean mass from adipose tissue</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Waist-to-Height Ratio (WHtR)</td>
              <td class="p-3 font-mono text-emerald-500">High (Cardiovascular)</td>
              <td class="p-3">Superior predictor of visceral fat and heart disease risk</td>
              <td class="p-3">Requires standardized tape measure protocol at navel</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Dual-Energy X-Ray Absorptiometry (DEXA)</td>
              <td class="p-3 font-mono text-emerald-600 font-bold">Gold Standard</td>
              <td class="p-3">Precise quantification of bone, fat, and appendicular lean mass</td>
              <td class="p-3">Requires specialized imaging facility; moderate cost</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">Multi-Frequency Bioelectrical Impedance (BIA)</td>
              <td class="p-3 font-mono text-blue-500">High (When Controlled)</td>
              <td class="p-3">Segmental lean mass and intra/extracellular water tracking</td>
              <td class="p-3">Sensitive to hydration shifts, caffeine, and recent meals</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold">U.S. Navy Anthropometric Method</td>
              <td class="p-3 font-mono text-blue-400">Moderate-High</td>
              <td class="p-3">Correlates well with hydrostatic weighing using neck & waist</td>
              <td class="p-3">Susceptible to improper measuring technique or taping pressure</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>The "Keep Your Waist to Less Than Half Your Height" Rule</h2>
      <p>Because of BMI's blind spot toward central adiposity, preventive health agencies such as the UK National Institute for Health and Care Excellence (NICE) now officially recommend calculating the <strong>Waist-to-Height Ratio (WHtR)</strong> alongside standard BMI. The screening formula is remarkably simple:</p>
      <div class="my-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--card)] font-mono text-sm">
        <code>Waist-to-Height Ratio = Waist Circumference / Stature (Both in Same Units)</code>
      </div>
      <p>Evidence-based cut-offs for WHtR are consistent across adult men and women, ages, and ethnic backgrounds:</p>
      <ul>
        <li><strong>WHtR &lt; 0.40:</strong> Increased risk of undernutrition or sarcopenia</li>
        <li><strong>WHtR 0.40 to 0.49:</strong> Healthy normal visceral fat distribution (Lowest risk)</li>
        <li><strong>WHtR 0.50 to 0.59:</strong> Increased cardiometabolic risk (Early central adiposity)</li>
        <li><strong>WHtR &ge; 0.60:</strong> Substantially elevated risk of cardiovascular events and diabetes</li>
      </ul>

      <h2>When Should You Rely on BMI, and When Should You Look Beyond It?</h2>
      <p>For roughly 70% to 80% of the non-athletic general adult population, BMI tracks surprisingly well with overall body fat percentage and long-term health trajectories. It remains an invaluable initial screening metric for identifying significant undernutrition or severe obesity in population health programs.</p>
      <p>However, if you engage in regular resistance training, are over age 65, belong to an Asian or South Asian ethnic background, or suspect you carry central abdominal weight despite a normal scale reading, you should combine BMI with waist circumference, body fat percentage calculations, and routine annual metabolic blood testing (HbA1c, fasting lipids, and resting blood pressure).</p>

      <h2>Frequently Asked Questions Regarding BMI Accuracy</h2>
      <div class="space-y-4 my-6">
        <div>
          <h3 class="text-base font-bold text-[var(--foreground)]">Why doesn't BMI factor in muscle mass?</h3>
          <p class="text-sm text-[var(--muted-foreground)]">BMI was developed in the 19th century by a statistician analyzing population-level averages, long before body composition scanning existed. Factoring in muscle mass requires physical measurements such as skinfolds, bioimpedance currents, or radiographic DEXA scans that cannot be calculated from height and weight alone.</p>
        </div>
        <div>
          <h3 class="text-base font-bold text-[var(--foreground)]">Can a person with an "obese" BMI be metabolically healthy?</h3>
          <p class="text-sm text-[var(--muted-foreground)]">Yes. Highly trained athletes with substantial muscle hypertrophy frequently register BMI scores over 30 kg/m² while exhibiting normal insulin sensitivity, excellent cardiovascular endurance, and low visceral fat. Conversely, sedentary individuals can appear healthy by BMI while having elevated internal risk.</p>
        </div>
      </div>

      <h2>Scientific References</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>NICE guideline [NG181]. <em>Identification and management of overweight and obesity.</em> National Institute for Health and Care Excellence, updated 2022.</li>
        <li>Romero-Corral A, Somers VK, Sierra-Johnson J, et al. <em>Accuracy of body mass index in diagnosing obesity in the adult general population.</em> Int J Obes (Lond) 2008; 32(6):959-966.</li>
        <li>Ashwell M, Gibson S. <em>Waist-to-height ratio as an indicator of early health risk: systematic review.</em> BMJ Open 2016; 6:e010159.</li>
      </ul>
    `,
    es: `
      <h2>El Dilema de la Precisión del IMC en la Medicina Actual</h2>
      <p>El <strong>Índice de Masa Corporal (IMC)</strong> es el parámetro de cribado más utilizado en el mundo por su facilidad de cálculo y bajo coste. No obstante, la principal limitación clínica radica en que <strong>el IMC mide el exceso de peso total y no el exceso de grasa corporal</strong>.</p>
      <p>Al no diferenciar entre masa muscular esquelética, densidad mineral ósea y tejido adiposo visceral, el IMC clasifica con frecuencia de forma errónea a personas con alta masa muscular o personas mayores con pérdida de masa muscular (sarcopenia).</p>

      <h2>Los Principales Casos Donde Falla el IMC</h2>
      <ul>
        <li><strong>Atletas y Culturistas:</strong> El músculo es un 18% más denso que la grasa. Un atleta puede tener un IMC de 31 (clasificado como "obesidad") con un porcentaje de grasa corporal menor al 12%.</li>
        <li><strong>Obesidad Sarcopénica ("Falso Delgado"):</strong> Adultos mayores o sedentarios que pierden masa muscular pueden mantener un IMC "normal" de 22 mientras acumulan grasa visceral metabólicamente dañina alrededor de los órganos internos.</li>
        <li><strong>Distribución Anatómica:</strong> El IMC no detecta si la grasa se ubica en caderas y piernas (grasa subcutánea) o en el abdomen (grasa visceral perjudicial).</li>
      </ul>

      <h2>Alternativas Clínicas Superiores</h2>
      <p>Organismos sanitarios internacionales recomiendan utilizar la <strong>Relación Cintura-Estatura (RCE)</strong>. La regla general es mantener la circunferencia de cintura por debajo de la mitad de la estatura (RCE &lt; 0.50) para minimizar el riesgo cardiovascular.</p>
    `,
    fr: `
      <h2>Le Paradoxe de la Fiabilité de l'IMC en Médecine</h2>
      <p>L'<strong>Indice de Masse Corporelle (IMC)</strong> est un outil de santé publique incontournable en raison de sa simplicité. Cependant, il présente une limite majeure : <strong>l'IMC mesure le poids global et non la masse grasse réelle</strong>.</p>
      <p>En agrégeant la masse musculaire, les os, l'eau corporelle et le tissu adipeux dans une seule variable, il engendre des erreurs d'interprétation notables chez les sportifs comme chez les personnes âgées.</p>

      <h2>Les Trois Principales Limites de l'IMC</h2>
      <ul>
        <li><strong>Les Sportifs de Force :</strong> Le muscle étant plus dense que la graisse, un sportif très musclé peut afficher un IMC supérieur à 30 ("obèse") avec un taux de graisse corporelle athlétique inférieur à 12%.</li>
        <li><strong>L'Obésité Sarcopénique ("Faux Mince") :</strong> Une perte musculaire liée à l'âge ou à la sédentarité peut masquer une accumulation dangereuse de graisse viscérale tout en conservant un IMC normal.</li>
        <li><strong>La Répartition Anatomique :</strong> L'IMC ne distingue pas la graisse sous-cutanée de la graisse viscérale intra-abdominale, qui est le facteur déterminant du risque métabolique.</li>
      </ul>

      <h2>Indicateurs Complémentaires Recommandés</h2>
      <p>Le ratio <strong>tour de taille sur taille (RTH)</strong> est aujourd'hui préconisé par la Haute Autorité de Santé et le NICE : conserver un tour de taille inférieur à la moitié de sa stature garantit une protection cardiométabolique optimale.</p>
    `,
    de: `
      <h2>Genauigkeit des BMI: Grenzen und klinische Realität</h2>
      <p>Der <strong>Body-Mass-Index (BMI)</strong> ist das weltweit am häufigsten genutzte Screening-Verfahren. Seine fundamentale Schwachstelle ist jedoch bekannt: <strong>Der BMI erfasst das Gesamtgewicht, nicht den eigentlichen Körperfettanteil</strong>.</p>
      <p>Er unterscheidet nicht zwischen dichter Muskelmasse, Knochensubstanz, Wasserhaushalt und metabolisch schädlichem Viszeralfett.</p>

      <h2>Typische Fehlinterpretationen</h2>
      <ul>
        <li><strong>Muskulöse Personen und Sportler:</strong> Hohe Muskelmasse führt oft zu einem BMI über 28 oder 30 ("Übergewicht/Adipositas"), obwohl der Fettanteil im optimalen Bereich liegt.</li>
        <li><strong>Sarkopenische Adipositas ("Skinny Fat"):</strong> Ältere oder inaktive Personen verlieren Muskelmasse und lagern Fett um die inneren Organe ein, weisen aber einen unauffälligen BMI von 22 auf.</li>
        <li><strong>Fettverteilung:</strong> Der BMI liefert keine Information über die Verteilung von subkutanem Fett und gefährlichem intraabdominalem Bauchfett.</li>
      </ul>

      <h2>Aussagekräftige Alternativen</h2>
      <p>Das <strong>Taille-zu-Größe-Verhältnis (WHtR)</strong> gilt als überlegener Prädiktor für Herz-Kreislauf-Erkrankungen. Die Faustformel: Der Taillenumfang sollte weniger als die Hälfte der Körpergröße betragen (WHtR &lt; 0,50).</p>
    `,
    ko: `
      <h2>체질량지수(BMI)의 정확도와 의학적 한계점</h2>
      <p><strong>체질량지수(BMI)</strong>는 간편성 덕분에 전 세계적으로 널리 쓰이지만, 근본적인 의학적 맹점을 안고 있습니다. <strong>BMI는 체지방량이 아닌 전체 체중만을 측정</strong>하기 때문입니다.</p>
      <p>골격근량, 골밀도, 체수분, 내장 지방의 차이를 구분하지 못해 근육량이 많은 운동선수나 근감소증을 겪는 고령층에서 중대한 판정 왜곡이 발생합니다.</p>

      <h2>BMI의 3대 대표적 오류 사례</h2>
      <ul>
        <li><strong>근육형 과체중:</strong> 근육은 지방보다 밀도가 약 18% 높습니다. 보디빌더나 근력 운동선수는 체지방률이 10% 미만이어도 BMI 기준상 '비만(30 이상)'으로 잘못 분류될 수 있습니다.</li>
        <li><strong>마른 비만(정상체중 비만):</strong> 근육량이 적고 복부 내장 지방이 축적된 성인은 정상 BMI(21~22)를 유지하더라도 당뇨병 및 지방간 위험이 심각할 수 있습니다.</li>
        <li><strong>지방 분포 미반영:</strong> 둔부의 피하지방과 심혈관 질환을 유발하는 복부 내장지방의 생리학적 차이를 식별하지 못합니다.</li>
      </ul>

      <h2>현대 의학이 추천하는 대체 지표</h2>
      <p>영국 국립보건임상연구원(NICE)은 허리둘레를 신장으로 나눈 <strong>허리둘레-신장 비율(WHtR)</strong>을 0.50 미만으로 유지할 것을 강력히 권고합니다.</p>
    `,
    hi: `
      <h2>क्या बीएमआई सटीक है? आधुनिक चिकित्सा जगत का विश्लेषण</h2>
      <p>बॉडी मास इंडेक्स (BMI) वर्तमान चिकित्सा प्रणाली में सबसे व्यापक रूप से इस्तेमाल किया जाने वाला शारीरिक स्क्रीनिंग टूल है। विश्व स्वास्थ्य संगठन (WHO) और नेशनल इंस्टीट्यूट्स ऑफ हेल्थ (NIH) द्वारा समर्थित होने के बावजूद, एंडोक्रिनोलॉजी, कार्डियोलॉजी और स्पोर्ट्स मेडिसिन में इसकी सटीकता को लेकर लगातार सवाल उठते रहे हैं।</p>
      <p>इसकी मूल नैदानिक समस्या यह है कि <strong>बीएमआई शरीर के अतिरिक्त वजन को मापता है, अतिरिक्त चर्बी (Adiposity) को नहीं</strong>। यह मांसपेशियों, हड्डियों, आंतरिक अंगों, पानी और वसा को एक ही संख्या में मिला देता है, जिससे कई बार भ्रामक परिणाम मिलते हैं।</p>

      <h2>बीएमआई की 3 प्रमुख नैदानिक विफलताएं (Primary Failure Modes)</h2>
      <div class="my-6 space-y-4">
        <div class="p-4 rounded-xl border border-[#e6e6e6] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[#464feb]">1. एथलीट व बॉडीबिल्डर पैराडॉक्स (फॉल्स पॉजिटिव)</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">कंकाल की मांसपेशियों का घनत्व (1.06 g/cm³) वसा ऊतक (0.90 g/cm³) से अधिक होता है। भारी व्यायाम और वेट ट्रेनिंग करने वाले एथलीटों में मांसपेशियों का भार अधिक होता है। उदाहरण के लिए, 180 सेमी लंबे और 98 किग्रा वजनी रग्बी खिलाड़ी का बीएमआई <strong>30.2 kg/m²</strong> (मोटापा श्रेणी I) आएगा, भले ही उसके शरीर में केवल 10% बॉडी फैट हो और उसका कोलेस्ट्रॉल व रक्तचाप बिल्कुल स्वस्थ हो।</p>
        </div>
        <div class="p-4 rounded-xl border border-[#e6e6e6] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[#464feb]">2. सरकोपेनिक मोटापा व सामान्य-वजन मोटापा (फॉल्स नेगेटिव)</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">यह बीएमआई की सबसे खतरनाक विफलता है। बुजुर्गों या गतिहीन व्यक्तियों में उम्र के साथ मांसपेशियां घट जाती हैं (सरकोपेनिया), जिससे स्केल पर वजन सामान्य रहता है। ऐसे व्यक्ति का बीएमआई <strong>22.0 kg/m²</strong> (पूरी तरह सामान्य) हो सकता है, लेकिन उसके शरीर में 35% से अधिक वसा और गंभीर इंसुलिन प्रतिरोध हो सकता है। इसे चिकित्सा में <em>'मेटाबॉलिकली ओबीस नॉर्मल-वेट' (MONW)</em> या <em>'टॉफी' (TOFI - Thin Outside, Fat Inside)</em> कहा जाता है।</p>
        </div>
        <div class="p-4 rounded-xl border border-[#e6e6e6] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[#464feb]">3. वसा के वितरण की उपेक्षा (विसरल बनाम सबक्यूटेनियस फैट)</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">बीएमआई यह नहीं बता सकता कि चर्बी कूल्हों पर जमा है या पेट के अंदर लिवर और आंतों के चारों ओर। पेट के अंदर की आंतरिक चर्बी (विसरल फैट) सीधे पोर्टल वेन में फैटी एसिड छोड़ती है और दिल के दौरे का कारण बनती है, जबकि कूल्हों की चर्बी तुलनात्मक रूप से सुरक्षित होती है।</p>
        </div>
      </div>

      <h2>तुलनात्मक विश्लेषण: बीएमआई बनाम आधुनिक नैदानिक तकनीकें</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">माप विधि</th>
              <th class="p-3 border border-[#e6e6e6] text-[#464feb] font-bold">नैदानिक सटीकता</th>
              <th class="p-3 border border-[#e6e6e6]">मांसपेशी बनाम वसा अंतर</th>
              <th class="p-3 border border-[#e6e6e6]">व्यावहारिक उपलब्धता व लागत</th>
            </tr>
          </thead>
          <tbody class="divide-y border-[#e6e6e6]">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-rose-600 font-bold">बॉडी मास इंडेक्स (BMI)</td>
              <td class="p-3 border border-[#e6e6e6] text-amber-600 font-bold">मध्यम (जनसंख्या स्क्रीनिंग)</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-600 font-bold">शून्य (केवल कुल वजन मापता है)</td>
              <td class="p-3 border border-[#e6e6e6] text-emerald-600 font-bold">100% निःशुल्क, त्वरित और सर्वसुलभ</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-blue-500 font-bold">कमर-कद अनुपात (WHtR)</td>
              <td class="p-3 border border-[#e6e6e6] text-blue-500 font-bold">उच्च (हृदय व डायबिटीज जोखिम)</td>
              <td class="p-3 border border-[#e6e6e6]">अप्रत्यक्ष (केंद्रीय वसा संचय दर्शाता है)</td>
              <td class="p-3 border border-[#e6e6e6] text-emerald-600 font-bold">अत्यंत सुलभ (केवल एक साधारण इंची टेप)</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-emerald-600 font-bold">DEXA बॉडी स्कैन</td>
              <td class="p-3 border border-[#e6e6e6] text-emerald-600 font-bold">स्वर्ण मानक (Gold Standard)</td>
              <td class="p-3 border border-[#e6e6e6] text-emerald-600 font-bold">सटीक ग्राम स्तर पर फैट, मसल व बोन डेंसिटी</td>
              <td class="p-3 border border-[#e6e6e6] text-rose-600 font-bold">महंगा, क्लिनिकल लैब की आवश्यकता</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>अमेरिकन मेडिकल एसोसिएशन (AMA 2023) की आधिकारिक नीति</h2>
      <p>जून 2023 में, <strong>अमेरिकन मेडिकल एसोसिएशन (AMA)</strong> ने बीएमआई के उपयोग पर एक ऐतिहासिक नीति प्रस्ताव पारित किया। AMA ने चिकित्सकों को निर्देश दिया कि बीएमआई का उपयोग कभी भी अकेले नैदानिक उपकरण के रूप में न किया जाए। इसके स्थान पर बीएमआई को हमेशा <em>कमर की परिधि, विसरल वसा सूचकांक, आनुवंशिकी और रक्त जैव-मार्करों (HbA1c, लिपिड प्रोफाइल)</em> के संयोजन में उपयोग किया जाना चाहिए।</p>

      <h2>वैज्ञानिक संदर्भ एवं साक्ष्य</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Romero-Corral A, et al. <em>Accuracy of body mass index in diagnosing obesity in the adult general population.</em> <a href="https://pubmed.ncbi.nlm.nih.gov/18283284/" class="text-[#464feb] underline">Int J Obes (Lond) 2008; 32(6):959-966. PMID: 18283284</a>.</li>
        <li>American Medical Association. <em>AMA adopts new policy on BMI as a measure in medicine.</em> <a href="https://www.ama-assn.org/press-center/press-releases/ama-adopts-new-policy-bmi-measure-medicine" class="text-[#464feb] underline">AMA Press Release; June 2023.</a></li>
        <li>Ashwell M, et al. <em>Waist-to-height ratio is a better screening tool than waist circumference and BMI for adult cardiometabolic risk factors: systematic review and meta-analysis.</em> <a href="https://pubmed.ncbi.nlm.nih.gov/22434878/" class="text-[#464feb] underline">Obes Rev 2012; 13(3):275-286. PMID: 22434878</a>.</li>
      </ul>
    `
  }
},

  "bmi-chart": {
    "datePublished": "2026-03-01",
    "dateModified": "2026-10-25",
    "title": {
      "en": "Official BMI Chart: Height to Weight Ratio Reference Guide",
      "hi": "आधिकारिक बीएमआई चार्ट: लंबाई और वजन अनुपात संदर्भ गाइड",
      "ko": "표준 BMI 차트: 신장별 체중 기준표 및 비만도 판정 가이드",
      "de": "Offizielle BMI-Tabelle: Referenzwerte für Größe & Gewicht",
      "es": "Tabla Oficial de IMC: Guía de Referencia Estatura y Peso",
      "fr": "Tableau Officiel de l'IMC : Guide des Seuils Poids et Taille"
    },
    "category": {
      "en": "BMI & Health Basics",
      "hi": "बीएमआई और स्वास्थ्य मूल बातें",
      "ko": "BMI 기초",
      "de": "BMI & Grundlagen",
      "es": "Conceptos Básicos del IMC",
      "fr": "Bases de l'IMC"
    },
    "description": {
      "en": "Complete World Health Organization BMI reference chart. Find your exact height and weight intersection, understand the color-coded health risk quadrants, and see Asian population adjustments.",
      "hi": "विश्व स्वास्थ्य संगठन (WHO) का संपूर्ण बीएमआई संदर्भ चार्ट। अपनी लंबाई और वजन का मिलान करें, स्वास्थ्य श्रेणियों को समझें और एशियाई आबादी के विशेष मानक देखें।",
      "ko": "세계보건기구(WHO) 표준 성인 BMI 대조표. 신장과 체중의 교차점을 통해 본인의 체질량지수를 즉시 확인하고 정상, 과체중, 비만 판정 기준과 아시아인 전용 기준을 비교 검토하세요.",
      "de": "Offizielle WHO-Referenztabelle für den Body-Mass-Index. Finden Sie Ihre Schnittmenge aus Größe und Gewicht und verstehen Sie die klinischen Risikostufen.",
      "es": "Tabla de referencia oficial de la OMS para el IMC. Encuentra la intersección exacta entre tu estatura y peso y comprende las categorías diagnósticas.",
      "fr": "Tableau de référence officiel de l'OMS pour l'IMC. Repérez l'intersection exacte de votre taille et de votre poids et découvrez les seuils cardiométaboliques."
    },
    "contentHtml": {
      "en": `
      <h2>The Global Standard: Understanding the Official BMI Chart</h2>
      <p>A standardized <strong>Body Mass Index (BMI) Chart</strong> translates mathematical anthropometry into an intuitive, visual screening matrix. By aligning an individual's stature along one axis and total body weight along the other, the matrix immediately identifies which international health classification envelope an adult falls into. Established by the World Health Organization (WHO) and integrated into clinical preventive protocols by the National Institutes of Health (NIH) and Centers for Disease Control and Prevention (CDC), the chart provides an objective first-line assessment of cardiometabolic risk.</p>
      <p>Rather than evaluating body weight in isolation, the chart recognizes that a weight of 75 kg (165 lbs) represents an entirely different physiological profile for an adult standing 155 cm (5'1") compared to one standing 190 cm (6'3"). Below is a clinical breakdown of the matrix, the color-coded risk tiers, and how to accurately interpret your position on the continuum.</p>

      <h2>Comprehensive Adult Height vs. Weight BMI Reference Grid</h2>
      <p>The following standardized reference table provides exact Body Mass Index classifications across common adult statures (metric and imperial) and scale weights:</p>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-2 sm:p-3">Height</th>
              <th class="p-2 sm:p-3 text-blue-500">Underweight (&lt;18.5)</th>
              <th class="p-2 sm:p-3 text-emerald-500 font-bold">Healthy Weight (18.5–24.9)</th>
              <th class="p-2 sm:p-3 text-amber-500">Overweight (25.0–29.9)</th>
              <th class="p-2 sm:p-3 text-rose-500 font-bold">Obese (&ge;30.0)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)] font-mono">
            <tr>
              <td class="p-2 sm:p-3 font-sans font-semibold">152 cm (5'0")</td>
              <td class="p-2 sm:p-3">&lt; 42.7 kg (&lt; 94 lbs)</td>
              <td class="p-2 sm:p-3 text-emerald-500 font-bold">42.7 – 57.5 kg (94 – 127 lbs)</td>
              <td class="p-2 sm:p-3 text-amber-500">57.6 – 69.1 kg (128 – 152 lbs)</td>
              <td class="p-2 sm:p-3 text-rose-500">&ge; 69.2 kg (&ge; 153 lbs)</td>
            </tr>
            <tr>
              <td class="p-2 sm:p-3 font-sans font-semibold">157 cm (5'2")</td>
              <td class="p-2 sm:p-3">&lt; 45.6 kg (&lt; 100 lbs)</td>
              <td class="p-2 sm:p-3 text-emerald-500 font-bold">45.6 – 61.4 kg (101 – 135 lbs)</td>
              <td class="p-2 sm:p-3 text-amber-500">61.5 – 73.7 kg (136 – 162 lbs)</td>
              <td class="p-2 sm:p-3 text-rose-500">&ge; 73.8 kg (&ge; 163 lbs)</td>
            </tr>
            <tr>
              <td class="p-2 sm:p-3 font-sans font-semibold">163 cm (5'4")</td>
              <td class="p-2 sm:p-3">&lt; 49.2 kg (&lt; 108 lbs)</td>
              <td class="p-2 sm:p-3 text-emerald-500 font-bold">49.2 – 66.2 kg (109 – 146 lbs)</td>
              <td class="p-2 sm:p-3 text-amber-500">66.3 – 79.4 kg (147 – 175 lbs)</td>
              <td class="p-2 sm:p-3 text-rose-500">&ge; 79.5 kg (&ge; 176 lbs)</td>
            </tr>
            <tr>
              <td class="p-2 sm:p-3 font-sans font-semibold">168 cm (5'6")</td>
              <td class="p-2 sm:p-3">&lt; 52.2 kg (&lt; 115 lbs)</td>
              <td class="p-2 sm:p-3 text-emerald-500 font-bold">52.2 – 70.3 kg (116 – 155 lbs)</td>
              <td class="p-2 sm:p-3 text-amber-500">70.4 – 84.4 kg (156 – 186 lbs)</td>
              <td class="p-2 sm:p-3 text-rose-500">&ge; 84.5 kg (&ge; 187 lbs)</td>
            </tr>
            <tr>
              <td class="p-2 sm:p-3 font-sans font-semibold">173 cm (5'8")</td>
              <td class="p-2 sm:p-3">&lt; 55.4 kg (&lt; 122 lbs)</td>
              <td class="p-2 sm:p-3 text-emerald-500 font-bold">55.4 – 74.5 kg (123 – 164 lbs)</td>
              <td class="p-2 sm:p-3 text-amber-500">74.6 – 89.5 kg (165 – 197 lbs)</td>
              <td class="p-2 sm:p-3 text-rose-500">&ge; 89.6 kg (&ge; 198 lbs)</td>
            </tr>
            <tr>
              <td class="p-2 sm:p-3 font-sans font-semibold">178 cm (5'10")</td>
              <td class="p-2 sm:p-3">&lt; 58.6 kg (&lt; 129 lbs)</td>
              <td class="p-2 sm:p-3 text-emerald-500 font-bold">58.6 – 78.9 kg (130 – 174 lbs)</td>
              <td class="p-2 sm:p-3 text-amber-500">79.0 – 94.7 kg (175 – 209 lbs)</td>
              <td class="p-2 sm:p-3 text-rose-500">&ge; 94.8 kg (&ge; 210 lbs)</td>
            </tr>
            <tr>
              <td class="p-2 sm:p-3 font-sans font-semibold">183 cm (6'0")</td>
              <td class="p-2 sm:p-3">&lt; 62.0 kg (&lt; 137 lbs)</td>
              <td class="p-2 sm:p-3 text-emerald-500 font-bold">62.0 – 83.4 kg (138 – 184 lbs)</td>
              <td class="p-2 sm:p-3 text-amber-500">83.5 – 100.1 kg (185 – 221 lbs)</td>
              <td class="p-2 sm:p-3 text-rose-500">&ge; 100.2 kg (&ge; 222 lbs)</td>
            </tr>
            <tr>
              <td class="p-2 sm:p-3 font-sans font-semibold">188 cm (6'2")</td>
              <td class="p-2 sm:p-3">&lt; 65.4 kg (&lt; 144 lbs)</td>
              <td class="p-2 sm:p-3 text-emerald-500 font-bold">65.4 – 88.0 kg (145 – 194 lbs)</td>
              <td class="p-2 sm:p-3 text-amber-500">88.1 – 105.7 kg (195 – 233 lbs)</td>
              <td class="p-2 sm:p-3 text-rose-500">&ge; 105.8 kg (&ge; 234 lbs)</td>
            </tr>
            <tr>
              <td class="p-2 sm:p-3 font-sans font-semibold">193 cm (6'4")</td>
              <td class="p-2 sm:p-3">&lt; 68.9 kg (&lt; 152 lbs)</td>
              <td class="p-2 sm:p-3 text-emerald-500 font-bold">68.9 – 92.8 kg (153 – 205 lbs)</td>
              <td class="p-2 sm:p-3 text-amber-500">92.9 – 111.4 kg (206 – 245 lbs)</td>
              <td class="p-2 sm:p-3 text-rose-500">&ge; 111.5 kg (&ge; 246 lbs)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Evidence-Based Significance of the Chart's Four Primary Quadrants</h2>
      <div class="my-6 space-y-4">
        <div>
          <h3 class="text-base font-bold text-blue-500">1. Underweight Zone (BMI &lt; 18.5 kg/m²)</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">Falling below the 18.5 threshold indicates an inadequate energy reserve relative to stature. Clinical risks include protein-calorie undernutrition, compromised immune cell proliferation, delayed wound healing, amenorrhea in females, and progressive osteopenia resulting from reduced mechanical bone loading.</p>
        </div>
        <div>
          <h3 class="text-base font-bold text-emerald-500">2. Healthy Normal Envelope (BMI 18.5 – 24.9 kg/m²)</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">Large-scale prospective epidemiological investigations (including the Global BMI Mortality Collaboration analyzing over 10.6 million participants) consistently demonstrate that all-cause mortality is lowest within this weight band. Cardiovascular strain is minimized, insulin receptors maintain high physiological sensitivity, and systemic inflammatory markers remain low.</p>
        </div>
        <div>
          <h3 class="text-base font-bold text-amber-500">3. Overweight Pre-Obesity Band (BMI 25.0 – 29.9 kg/m²)</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">This transition zone marks progressive adipose accumulation. In non-athletic adults, reaching this threshold corresponds to gradual increases in resting blood pressure, elevated fasting triglycerides, and subclinical endothelial dysfunction. For strength-trained individuals, however, this zone frequently represents athletic muscular hypertrophy without metabolic pathology.</p>
        </div>
        <div>
          <h3 class="text-base font-bold text-rose-500">4. Obesity Spectrum (Class I: 30.0–34.9, Class II: 35.0–39.9, Class III: &ge;40.0 kg/m²)</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">Crossing the 30.0 threshold significantly elevates the odds of developing obstructive sleep apnea, non-alcoholic fatty liver disease (NAFLD), osteoarthritis in weight-bearing joints (knees and hips), and cardiovascular events. Clinical guidelines recommend medical supervision and structured lifestyle or pharmacological intervention.</p>
        </div>
      </div>

      <h2>Asian Population Adjustments on the BMI Chart</h2>
      <p>Public health authorities in Asia (including India, China, Japan, and Singapore) modify the traditional chart thresholds downwards because Asian populations exhibit a distinctive metabolic phenotype characterized by higher body fat percentages and greater visceral adiposity at lower scale weights:</p>
      <ul>
        <li><strong>Asian Normal Range:</strong> 18.5 to 22.9 kg/m²</li>
        <li><strong>Asian Overweight Threshold:</strong> 23.0 to 24.9 kg/m²</li>
        <li><strong>Asian Obesity Threshold:</strong> &ge; 25.0 kg/m²</li>
      </ul>
      <p>An Asian adult with a BMI of 24.5 kg/m² is categorized as overweight and carries an elevated risk of Type 2 diabetes equivalent to a Caucasian adult with a BMI of 27.5 kg/m².</p>

      <h2>How to Accurately Plot Your Location on the Chart</h2>
      <ol class="space-y-2 my-4">
        <li><strong>Measure Height Correctly:</strong> Remove footwear, stand upright against a flat vertical wall, look straight ahead in the Frankfort horizontal plane, and record stature to the nearest half-centimeter or quarter-inch.</li>
        <li><strong>Measure Weight Consistently:</strong> Weigh yourself in the morning upon waking, after emptying your bladder and bowels, before consuming liquids or breakfast, wearing minimal light clothing.</li>
        <li><strong>Find Your Intersection:</strong> Locate your height row and follow horizontally until reaching your current weight column. Note your boundary distance from neighboring categories.</li>
      </ol>

      <h2>Frequently Asked Questions Regarding the BMI Chart</h2>
      <div class="space-y-4 my-6">
        <div>
          <h3 class="text-base font-bold text-[var(--foreground)]">Is the BMI chart different for men and women?</h3>
          <p class="text-sm text-[var(--muted-foreground)]">Standard clinical BMI charts are unisex for adults aged 20 and older. The mathematical formula does not change between men and women. However, women naturally possess more biological essential fat (10–13% vs 2–5% in men) at identical BMI values.</p>
        </div>
        <div>
          <h3 class="text-base font-bold text-[var(--foreground)]">Can children and teenagers use this adult chart?</h3>
          <p class="text-sm text-[var(--muted-foreground)]">No. Pediatric screening requires age-and-gender-specific BMI growth percentile curves developed by the CDC or WHO, because children's body proportions change dynamically throughout normal physical development and puberty.</p>
        </div>
      </div>

      <h2>Scientific References</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>The Global BMI Mortality Collaboration. <em>Body-mass index and all-cause mortality: individual-participant-data meta-analysis of 239 prospective studies.</em> The Lancet 2016; 388(10046):776-786.</li>
        <li>World Health Organization. <em>Obesity: Preventing and managing the global epidemic.</em> WHO Technical Report Series 894, Geneva, 2000.</li>
        <li>Centers for Disease Control and Prevention. <em>About Adult BMI.</em> National Center for Chronic Disease Prevention and Health Promotion, 2022.</li>
      </ul>
`,
      "es": `
      <h2>La Guía Oficial de la Tabla de Índice de Masa Corporal</h2>
      <p>La <strong>Tabla de IMC</strong> es una herramienta visual estandarizada por la Organización Mundial de la Salud (OMS) que permite evaluar la relación entre la estatura y el peso corporal de un adulto de forma instantánea y objetiva.</p>
      <h2>Categorías Diagnósticas Principales</h2>
      <ul>
        <li><strong>Bajo Peso (&lt; 18.5):</strong> Déficit energético, riesgo de desnutrición y debilidad inmunológica.</li>
        <li><strong>Peso Normal (18.5 – 24.9):</strong> Rango óptimo con menor tasa de morbilidad y mortalidad global.</li>
        <li><strong>Sobrepeso (25.0 – 29.9):</strong> Incremento gradual del riesgo de hipertensión y sobrecarga articular.</li>
        <li><strong>Obesidad (&ge; 30.0):</strong> Alto riesgo de diabetes tipo 2 y enfermedades cardiovasculares.</li>
      </ul>
      <h2>Ajustes para Poblaciones Asiáticas</h2>
      <p>Para poblaciones de origen asiático, las directrices fijan el sobrepeso a partir de 23.0 kg/m² y la obesidad desde 25.0 kg/m² debido a una mayor acumulación de grasa visceral.</p>
    `,
      "fr": `
      <h2>Le Tableau Officiel de l'Indice de Masse Corporelle</h2>
      <p>La <strong>grille de référence de l'IMC</strong> de l'OMS offre une lecture directe des plages de corpulence en fonction de la taille et du poids des adultes.</p>
      <h2>Seuils Cliniques Fondamentaux</h2>
      <ul>
        <li><strong>Insuffisance pondérale (&lt; 18,5) :</strong> Risque accru de carences nutritionnelles et d'ostéopénie.</li>
        <li><strong>Poids normal (18,5 – 24,9) :</strong> Zone de longévité statistiquement optimale.</li>
        <li><strong>Surpoids (25,0 – 29,9) :</strong> Prise en charge préventive conseillée pour protéger le système cardiovasculaire.</li>
        <li><strong>Obésité (&ge; 30,0) :</strong> Nécessite un suivi médical pour prévenir les complications métaboliques.</li>
      </ul>
    `,
      "de": `
      <h2>Die offizielle BMI-Tabelle der Weltgesundheitsorganisation (WHO)</h2>
      <p>Die <strong>WHO-BMI-Tabelle</strong> dient als international standardisiertes Referenzraster, um das Körpergewicht im Verhältnis zur Körpergröße schnell, reproduzierbar und ohne apparativen Aufwand einzuordnen. Epidemiologische Langzeitstudien mit über 10 Millionen Teilnehmern belegen, dass die Zuordnung zu diesen Kategorien eng mit statistischen Morbiditäts- und Mortalitätsrisiken korreliert.</p>

      <h2>Körpergröße-Gewichts-Referenztabelle für Erwachsene</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-2 sm:p-3">Körpergröße</th>
              <th class="p-2 sm:p-3 text-blue-500 font-bold">Untergewicht (&lt; 18,5)</th>
              <th class="p-2 sm:p-3 text-emerald-500 font-bold">Normalgewicht (18,5 – 24,9)</th>
              <th class="p-2 sm:p-3 text-amber-500 font-bold">Übergewicht (25,0 – 29,9)</th>
              <th class="p-2 sm:p-3 text-rose-500 font-bold">Adipositas (&ge; 30,0)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)] font-mono">
            <tr>
              <td class="p-2 sm:p-3 font-sans font-semibold">160 cm</td>
              <td class="p-2 sm:p-3">&lt; 47,4 kg</td>
              <td class="p-2 sm:p-3 text-emerald-500 font-bold">47,4 – 63,7 kg</td>
              <td class="p-2 sm:p-3 text-amber-500">63,8 – 76,5 kg</td>
              <td class="p-2 sm:p-3 text-rose-500">&ge; 76,8 kg</td>
            </tr>
            <tr>
              <td class="p-2 sm:p-3 font-sans font-semibold">165 cm</td>
              <td class="p-2 sm:p-3">&lt; 50,4 kg</td>
              <td class="p-2 sm:p-3 text-emerald-500 font-bold">50,4 – 67,8 kg</td>
              <td class="p-2 sm:p-3 text-amber-500">67,9 – 81,4 kg</td>
              <td class="p-2 sm:p-3 text-rose-500">&ge; 81,7 kg</td>
            </tr>
            <tr>
              <td class="p-2 sm:p-3 font-sans font-semibold">170 cm</td>
              <td class="p-2 sm:p-3">&lt; 53,5 kg</td>
              <td class="p-2 sm:p-3 text-emerald-500 font-bold">53,5 – 72,0 kg</td>
              <td class="p-2 sm:p-3 text-amber-500">72,1 – 86,4 kg</td>
              <td class="p-2 sm:p-3 text-rose-500">&ge; 86,7 kg</td>
            </tr>
            <tr>
              <td class="p-2 sm:p-3 font-sans font-semibold">175 cm</td>
              <td class="p-2 sm:p-3">&lt; 56,7 kg</td>
              <td class="p-2 sm:p-3 text-emerald-500 font-bold">56,7 – 76,3 kg</td>
              <td class="p-2 sm:p-3 text-amber-500">76,4 – 91,6 kg</td>
              <td class="p-2 sm:p-3 text-rose-500">&ge; 91,9 kg</td>
            </tr>
            <tr>
              <td class="p-2 sm:p-3 font-sans font-semibold">180 cm</td>
              <td class="p-2 sm:p-3">&lt; 59,9 kg</td>
              <td class="p-2 sm:p-3 text-emerald-500 font-bold">59,9 – 80,7 kg</td>
              <td class="p-2 sm:p-3 text-amber-500">80,8 – 96,9 kg</td>
              <td class="p-2 sm:p-3 text-rose-500">&ge; 97,2 kg</td>
            </tr>
            <tr>
              <td class="p-2 sm:p-3 font-sans font-semibold">185 cm</td>
              <td class="p-2 sm:p-3">&lt; 63,3 kg</td>
              <td class="p-2 sm:p-3 text-emerald-500 font-bold">63,3 – 85,2 kg</td>
              <td class="p-2 sm:p-3 text-amber-500">85,3 – 102,3 kg</td>
              <td class="p-2 sm:p-3 text-rose-500">&ge; 102,7 kg</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Die 4 zentralen Risikobereiche im Detail</h2>
      <ul class="list-disc pl-5 my-4 space-y-2 text-sm text-[var(--muted-foreground)]">
        <li><strong>Untergewicht (&lt; 18,5 kg/m²):</strong> Geringe Energiespeicher, erhöhtes Risiko für Mangelernährung, Osteopenie, Amenorrhö bei Frauen und geschwächte Infektabwehr.</li>
        <li><strong>Normalgewicht (18,5 – 24,9 kg/m²):</strong> Epidemiologisch geringste Gesamtsterblichkeit, optimale Insulinsensitivität und minimaler vaskulärer Blutdruckstress.</li>
        <li><strong>Übergewicht (25,0 – 29,9 kg/m²):</strong> Schleichender Anstieg des kardiometabolischen Risikos (Hypertonie, Dyslipidämie). Bei Sportlern mit hoher Muskelmasse häufig harmlos.</li>
        <li><strong>Adipositas (&ge; 30,0 kg/m²):</strong> Stark erhöhtes Risiko für Typ-2-Diabetes, obstruktives Schlafapnoe-Syndrom, Fettleber (NAFLD) und degenerative Gelenkerkrankungen.</li>
      </ul>

      <h2>Spezifische Grenzwerte für asiatische Populationen</h2>
      <p>Aufgrund eines höheren Körperfettanteils und vermehrter viszeraler Fetteinlagerung empfiehlt die WHO für Menschen asiatischer Herkunft niedrigere Interventionsschwellen: <strong>Normalbereich 18,5 bis 22,9 kg/m²</strong>, Übergewicht ab 23,0 kg/m² und Adipositas ab 25,0 kg/m² (ICMR) bzw. 27,5 kg/m² (WHO WPRO).</p>
    `,
      "ko": `
      <h2>세계보건기구(WHO) 표준 BMI 차트 가이드</h2>
      <p><strong>표준 BMI 대조표</strong>는 성인의 신장과 체중이 만나는 지점을 통해 체형 범주를 판정하는 대표적인 시각 선별 도구입니다.</p>
      <h2>4대 핵심 건강 구간</h2>
      <ul>
        <li><strong>저체중 (&lt; 18.5):</strong> 영양 결핍, 골다공증 및 면역 저하 위험 구간.</li>
        <li><strong>정상 건강 체중 (18.5 – 24.9):</strong> 전체 사망률이 가장 낮은 이상적 구간.</li>
        <li><strong>과체중 (25.0 – 29.9):</strong> 심혈관 및 대사 질환 발생 위험 완만 상승 구간.</li>
        <li><strong>비만 (&ge; 30.0):</strong> 적극적인 생활 습관 교정 및 임상 치료 권장 구간.</li>
      </ul>
    `,
      "hi": `
      <h2>आधिकारिक बीएमआई संदर्भ चार्ट एवं स्वास्थ्य श्रेणियां</h2>
      <p>एक मानकीकृत <strong>बीएमआई संदर्भ चार्ट (BMI Chart)</strong> जटिल जैव-सांख्यिकी को एक सरल, दृश्य ग्रिड में बदल देता है। अपने कद की पंक्ति और वर्तमान वजन के कॉलम के मिलान बिंदु को देखकर कोई भी व्यक्ति तुरंत अपनी स्वास्थ्य श्रेणी और चयापचय जोखिम का सटीक पता लगा सकता है।</p>

      <h2>वयस्क बीएमआई और वजन संदर्भ तालिका (Height-to-Weight Matrix)</h2>
      <p>नीचे दी गई तालिका विभिन्न कद श्रेणियों के लिए विश्व स्वास्थ्य संगठन (WHO) के अनुसार न्यूनतम और अधिकतम स्वस्थ वजन सीमाएं प्रदर्शित करती है:</p>

      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">कद (फीट/इंच व सेमी)</th>
              <th class="p-3 border border-[#e6e6e6] text-amber-600 font-bold">कम वजन (&lt;18.5)</th>
              <th class="p-3 border border-[#e6e6e6] text-emerald-600 font-bold">स्वस्थ वजन (18.5–24.9)</th>
              <th class="p-3 border border-[#e6e6e6] text-amber-500 font-bold">अधिक वजन (25.0–29.9)</th>
              <th class="p-3 border border-[#e6e6e6] text-rose-600 font-bold">मोटापा (&ge;30.0)</th>
            </tr>
          </thead>
          <tbody class="divide-y border-[#e6e6e6]">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">5'0" (152 सेमी)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-amber-600">&lt; 42.7 kg</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-emerald-600 font-bold">42.7 – 57.5 kg</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-amber-500">57.6 – 69.1 kg</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-rose-600 font-bold">&ge; 69.2 kg</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">5'2" (157 सेमी)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-amber-600">&lt; 45.6 kg</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-emerald-600 font-bold">45.6 – 61.4 kg</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-amber-500">61.5 – 73.7 kg</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-rose-600 font-bold">&ge; 73.8 kg</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">5'4" (163 सेमी)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-amber-600">&lt; 49.2 kg</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-emerald-600 font-bold">49.2 – 66.2 kg</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-amber-500">66.3 – 79.5 kg</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-rose-600 font-bold">&ge; 79.6 kg</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">5'6" (168 सेमी)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-amber-600">&lt; 52.2 kg</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-emerald-600 font-bold">52.2 – 70.3 kg</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-amber-500">70.4 – 84.4 kg</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-rose-600 font-bold">&ge; 84.5 kg</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">5'8" (173 सेमी)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-amber-600">&lt; 55.4 kg</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-emerald-600 font-bold">55.4 – 74.5 kg</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-amber-500">74.6 – 89.5 kg</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-rose-600 font-bold">&ge; 89.6 kg</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">5'10" (178 सेमी)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-amber-600">&lt; 58.6 kg</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-emerald-600 font-bold">58.6 – 78.9 kg</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-amber-500">79.0 – 94.7 kg</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-rose-600 font-bold">&ge; 94.8 kg</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">6'0" (183 सेमी)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-amber-600">&lt; 62.0 kg</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-emerald-600 font-bold">62.0 – 83.4 kg</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-amber-500">83.5 – 100.1 kg</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-rose-600 font-bold">&ge; 100.2 kg</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">6'2" (188 सेमी)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-amber-600">&lt; 65.4 kg</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-emerald-600 font-bold">65.4 – 88.0 kg</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-amber-500">88.1 – 105.7 kg</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-rose-600 font-bold">&ge; 105.8 kg</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>बीएमआई चार्ट के 4 रंग-कोडेड स्वास्थ्य जोखिम चतुर्थांश</h2>
      <ul>
        <li><strong>नीला / पीला (&lt; 18.5):</strong> कुपोषण और मांसपेशियों के क्षरण का जोखिम। कैलोरी और प्रोटीन बढ़ाने की आवश्यकता।</li>
        <li><strong>हरा (18.5 – 24.9):</strong> इष्टतम चयापचय स्वास्थ्य। इस सीमा को संतुलित आहार और नियमित व्यायाम से बनाए रखें।</li>
        <li><strong>नारंगी (25.0 – 29.9):</strong> प्रारंभिक चेतावनी संकेत। पेट की चर्बी और ब्लड प्रेशर की नियमित जांच आवश्यक।</li>
        <li><strong>लाल (&ge; 30.0):</strong> गंभीर कार्डियोमेटाबॉलिक जोखिम। योग्य चिकित्सक से परामर्श और सुनियोजित वजन घटाने का कार्यक्रम अनिवार्य।</li>
      </ul>

      <h2>वैज्ञानिक संदर्भ एवं साक्ष्य</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>World Health Organization. <em>Obesity: preventing and managing the global epidemic.</em> <a href="https://apps.who.int/iris/handle/10665/42330" class="text-[#464feb] underline">WHO Technical Report Series 894; 2000.</a></li>
        <li>Flegal KM, et al. <em>Association of all-cause mortality with overweight and obesity using standard body mass index categories.</em> <a href="https://pubmed.ncbi.nlm.nih.gov/23280227/" class="text-[#464feb] underline">JAMA 2013; 309(1):71-82. PMID: 23280227</a>.</li>
      </ul>
    `
    }
  },

  "healthy-weight-chart": {
    "datePublished": "2026-03-15",
    "dateModified": "2026-10-28",
    "title": {
      "en": "Healthy Weight by Height: Evidence-Based Determination & Formula Guide",
      "hi": "कद के अनुसार स्वस्थ वजन: प्रमाण-आधारित फॉर्मूला व संदर्भ तालिका",
      "ko": "키별 적정 건강 체중: 근거 기반 공식 및 신장별 권장 체중 가이드",
      "de": "Idealgewicht nach Größe: Evidenzbasierte Richtwerte & Formeln",
      "es": "Peso Saludable por Estatura: Fórmulas Basadas en Evidencia y Rangos",
      "fr": "Poids Idéal selon la Taille : Formules Fondées sur des Preuves et Seuils"
    },
    "category": {
      "en": "Body Composition & Weight",
      "hi": "शारीरिक संरचना और वजन",
      "ko": "신체 구성 및 체중",
      "de": "Körperzusammensetzung & Gewicht",
      "es": "Composición Corporal y Peso",
      "fr": "Composition Corporelle"
    },
    "description": {
      "en": "Find your optimal healthy weight range based on height using WHO standards, the Quetelet equation, Devine ideal body weight formula, and frame size considerations.",
      "hi": "डब्ल्यूएचओ मानकों, क्वेटलेट फॉर्मूला और डिवाइन समीकरण के आधार पर अपनी लंबाई के अनुसार स्वस्थ वजन सीमा जानें। शारीरिक ढांचे के अनुसार सटीक मार्गदर्शन।",
      "ko": "세계보건기구(WHO) 기준과 드바인(Devine) 공식을 활용하여 본인의 신장에 맞는 적정 건강 체중 범위를 확인하세요. 골격 크기 및 체지방률을 고려한 실천 지침을 제공합니다.",
      "de": "Ermitteln Sie Ihren gesunden Gewichtsbereich nach der Körpergröße mit WHO-Standards, der Devine-Formel und Anpassungen an den individuellen Knochenbau.",
      "es": "Descubre tu rango de peso saludable óptimo según tu estatura utilizando los estándares de la OMS, la fórmula de Devine y consideraciones sobre la constitución ósea.",
      "fr": "Déterminez votre fourchette de poids santé selon votre taille avec les normes de l'OMS, la formule de Devine et les critères de corpulence osseuse."
    },
    "contentHtml": {
      "en": `
      <h2>Research Principles of Healthy Weight by Stature</h2>
      <p>Determining your optimal healthy body weight is one of the most critical foundational benchmarks in preventive medicine. Rather than representing a rigid, single-number target on a scale, a <strong>healthy body weight</strong> is defined clinically as a <em>statistical weight range</em> for your specific stature that minimizes all-cause mortality, preserves cardiovascular elasticity, maintains normal insulin sensitivity, and prevents degenerative joint diseases such as osteoarthritis.</p>
      <p>Because individuals possess varying skeletal frame sizes (small, medium, or large wrist and elbow breadths) and genetic variations in lean muscle mass, health authorities utilize an anthropometric continuum rather than a dogmatic number. Below, we detail the mathematical formulas used to derive healthy weight ranges, compare international clinical standards, and provide an evidence-based height-to-weight reference chart.</p>

      <h2>Mathematical Derivation of the Healthy Weight Range</h2>
      <p>Under World Health Organization (WHO) and National Institutes of Health (NIH) criteria, an adult's healthy weight window corresponds to a Body Mass Index between <strong>18.5 kg/m²</strong> (lower boundary) and <strong>24.9 kg/m²</strong> (upper boundary). By algebraically rearranging the Quetelet formula (<code>BMI = Weight / Height²</code>), we derive the exact minimum and maximum healthy weights for any given stature:</p>
      <ul>
        <li><strong>Minimum Healthy Weight Formula (Metric):</strong> <code>Weight (kg) = 18.5 &times; [Height (m)]²</code></li>
        <li><strong>Maximum Healthy Weight Formula (Metric):</strong> <code>Weight (kg) = 24.9 &times; [Height (m)]²</code></li>
        <li><strong>Minimum Healthy Weight Formula (Imperial):</strong> <code>Weight (lbs) = (18.5 &times; [Height (in)]²) / 703</code></li>
        <li><strong>Maximum Healthy Weight Formula (Imperial):</strong> <code>Weight (lbs) = (24.9 &times; [Height (in)]²) / 703</code></li>
      </ul>

      <div class="my-6 p-6 rounded-xl border border-[var(--border)] bg-[var(--card)] font-mono text-sm leading-relaxed space-y-2">
        <p class="font-bold text-[var(--accent)]">Step-by-Step Calculation Example for 175 cm (5'9"):</p>
        <p class="text-[var(--foreground)]">Stature = 1.75 meters (69 inches)</p>
        <p class="text-[var(--muted-foreground)]">&bull; Height squared = 1.75 &times; 1.75 = 3.0625 m²</p>
        <p class="text-[var(--muted-foreground)]">&bull; Minimum Healthy Weight = 18.5 &times; 3.0625 = <strong>56.7 kg (125.0 lbs)</strong></p>
        <p class="text-[var(--muted-foreground)]">&bull; Maximum Healthy Weight = 24.9 &times; 3.0625 = <strong>76.3 kg (168.2 lbs)</strong></p>
        <p class="text-[var(--foreground)] font-bold">Conclusion: A 175 cm adult maintains a healthy BMI when weighing between 56.7 kg and 76.3 kg.</p>
      </div>

      <h2>Ideal Body Weight (IBW) Equations: Devine, Robinson, and Miller</h2>
      <p>While the WHO healthy range provides an envelope of approximately 18 to 20 kilograms, clinical pharmacologists require single-point target estimates for medication dosing. Three prominent clinical formulas developed for this purpose are:</p>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">Formula Name</th>
              <th class="p-3">Calculation for Men (Height &gt; 5 ft)</th>
              <th class="p-3">Calculation for Women (Height &gt; 5 ft)</th>
              <th class="p-3">Primary Medical Application</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)] font-mono">
            <tr>
              <td class="p-3 font-sans font-semibold">Devine Formula (1974)</td>
              <td class="p-3">50.0 kg + 2.3 kg &times; (Height in inches - 60)</td>
              <td class="p-3">45.5 kg + 2.3 kg &times; (Height in inches - 60)</td>
              <td class="p-3 font-sans">Mechanical ventilation settings, renal clearance clearance</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold font-sans">Robinson Formula (1983)</td>
              <td class="p-3">52.0 kg + 1.9 kg &times; (Height in inches - 60)</td>
              <td class="p-3">49.0 kg + 1.7 kg &times; (Height in inches - 60)</td>
              <td class="p-3 font-sans">Empirical nutritional replacement planning</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold font-sans">Miller Formula (1983)</td>
              <td class="p-3">56.2 kg + 1.41 kg &times; (Height in inches - 60)</td>
              <td class="p-3">53.1 kg + 1.36 kg &times; (Height in inches - 60)</td>
              <td class="p-3 font-sans">Conservative target weight for small-framed populations</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Comprehensive Healthy Weight by Height Reference Table</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-2 sm:p-3">Height</th>
              <th class="p-2 sm:p-3 text-emerald-500 font-bold">Standard Healthy Weight (BMI 18.5–24.9)</th>
              <th class="p-2 sm:p-3 text-amber-500">Asian Population Range (BMI 18.5–22.9)</th>
              <th class="p-2 sm:p-3 font-mono text-[var(--accent)]">Devine Ideal Target (Men / Women)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)] font-mono">
            <tr>
              <td class="p-2 sm:p-3 font-sans font-semibold">152 cm (5'0")</td>
              <td class="p-2 sm:p-3 text-emerald-500">42.7 – 57.5 kg (94 – 127 lbs)</td>
              <td class="p-2 sm:p-3 text-amber-500">42.7 – 52.9 kg (94 – 117 lbs)</td>
              <td class="p-2 sm:p-3 text-[var(--accent)]">50.0 kg / 45.5 kg</td>
            </tr>
            <tr>
              <td class="p-2 sm:p-3 font-sans font-semibold">157 cm (5'2")</td>
              <td class="p-2 sm:p-3 text-emerald-500">45.6 – 61.4 kg (101 – 135 lbs)</td>
              <td class="p-2 sm:p-3 text-amber-500">45.6 – 56.4 kg (101 – 124 lbs)</td>
              <td class="p-2 sm:p-3 text-[var(--accent)]">54.6 kg / 50.1 kg</td>
            </tr>
            <tr>
              <td class="p-2 sm:p-3 font-sans font-semibold">163 cm (5'4")</td>
              <td class="p-2 sm:p-3 text-emerald-500">49.2 – 66.2 kg (108 – 146 lbs)</td>
              <td class="p-2 sm:p-3 text-amber-500">49.2 – 60.8 kg (108 – 134 lbs)</td>
              <td class="p-2 sm:p-3 text-[var(--accent)]">59.2 kg / 54.7 kg</td>
            </tr>
            <tr>
              <td class="p-2 sm:p-3 font-sans font-semibold">168 cm (5'6")</td>
              <td class="p-2 sm:p-3 text-emerald-500">52.2 – 70.3 kg (115 – 155 lbs)</td>
              <td class="p-2 sm:p-3 text-amber-500">52.2 – 64.6 kg (115 – 142 lbs)</td>
              <td class="p-2 sm:p-3 text-[var(--accent)]">63.8 kg / 59.3 kg</td>
            </tr>
            <tr>
              <td class="p-2 sm:p-3 font-sans font-semibold">173 cm (5'8")</td>
              <td class="p-2 sm:p-3 text-emerald-500">55.4 – 74.5 kg (122 – 164 lbs)</td>
              <td class="p-2 sm:p-3 text-amber-500">55.4 – 68.5 kg (122 – 151 lbs)</td>
              <td class="p-2 sm:p-3 text-[var(--accent)]">68.4 kg / 63.9 kg</td>
            </tr>
            <tr>
              <td class="p-2 sm:p-3 font-sans font-semibold">178 cm (5'10")</td>
              <td class="p-2 sm:p-3 text-emerald-500">58.6 – 78.9 kg (129 – 174 lbs)</td>
              <td class="p-2 sm:p-3 text-amber-500">58.6 – 72.5 kg (129 – 160 lbs)</td>
              <td class="p-2 sm:p-3 text-[var(--accent)]">73.0 kg / 68.5 kg</td>
            </tr>
            <tr>
              <td class="p-2 sm:p-3 font-sans font-semibold">183 cm (6'0")</td>
              <td class="p-2 sm:p-3 text-emerald-500">62.0 – 83.4 kg (137 – 184 lbs)</td>
              <td class="p-2 sm:p-3 text-amber-500">62.0 – 76.7 kg (137 – 169 lbs)</td>
              <td class="p-2 sm:p-3 text-[var(--accent)]">77.6 kg / 73.1 kg</td>
            </tr>
            <tr>
              <td class="p-2 sm:p-3 font-sans font-semibold">188 cm (6'2")</td>
              <td class="p-2 sm:p-3 text-emerald-500">65.4 – 88.0 kg (144 – 194 lbs)</td>
              <td class="p-2 sm:p-3 text-amber-500">65.4 – 80.9 kg (144 – 178 lbs)</td>
              <td class="p-2 sm:p-3 text-[var(--accent)]">82.2 kg / 77.7 kg</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Factors Modifying Your Individual Healthy Weight Target</h2>
      <ul>
        <li><strong>Skeletal Bone Structure:</strong> Frame size modifies where you belong within the healthy range. Individuals with a wide chest circumference, broad shoulders, and large wrist circumferences naturally sit comfortably in the upper quartile of the healthy band.</li>
        <li><strong>Physical Training History:</strong> Consistent resistance training accumulates dense, metabolically active skeletal muscle tissue. A trained lifter may weigh above the standard BMI healthy range while possessing single-digit body fat and low vascular strain.</li>
        <li><strong>Ethnic Heritage:</strong> South Asian, East Asian, and Pacific Islander populations experience unique metabolic risk patterns, justifying tailored reference thresholds.</li>
      </ul>

      <h2>Frequently Asked Questions Regarding Healthy Body Weight</h2>
      <div class="space-y-4 my-6">
        <div>
          <h3 class="text-base font-bold text-[var(--foreground)]">What if my current weight is slightly below or above the chart?</h3>
          <p class="text-sm text-[var(--muted-foreground)]">Minor deviations of 1 to 2 kilograms rarely present clinical risk if your blood pressure, lipid panel, and blood glucose are optimal. Evaluate trends over 6 to 12 months rather than reacting to short-term fluctuations.</p>
        </div>
        <div>
          <h3 class="text-base font-bold text-[var(--foreground)]">Which ideal body weight formula is most accurate?</h3>
          <p class="text-sm text-[var(--muted-foreground)]">The Devine formula remains the primary clinical benchmark in hospitals and pharmacokinetics. However, the Robinson and Miller equations provide slightly adjusted targets for individuals of average stature.</p>
        </div>
      </div>

      <h2>Scientific References</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Devine BJ. <em>Gentamicin therapy.</em> Drug Intell Clin Pharm 1974; 8:650-655.</li>
        <li>Robinson JD, Lupkiewicz SM, Palenik L, et al. <em>Determination of ideal body weight for drug dosage calculations.</em> Am J Hosp Pharm 1983; 40(6):1016-1019.</li>
        <li>Miller PF, Sanchez-Garza M, Spencer DC. <em>Comparative evaluation of ideal weight equations.</em> Clin Pharm 1983; 2:562-566.</li>
      </ul>
`,
      "es": `
      <h2>Determinación Médica del Peso Saludable por Estatura</h2>
      <p>El <strong>peso saludable</strong> no es una cifra estática única, sino un <em>rango de peso estadístico</em> que reduce al mínimo el riesgo de mortalidad cardiovascular, diabetes y desgaste articular.</p>
      <h2>Fórmulas de Peso Saludable</h2>
      <ul>
        <li><strong>Peso Mínimo Saludable:</strong> <code>18.5 &times; [Estatura (m)]²</code></li>
        <li><strong>Peso Máximo Saludable:</strong> <code>24.9 &times; [Estatura (m)]²</code></li>
      </ul>
      <p>La fórmula clásica de Devine estima el peso ideal para dosificación médica: 50 kg para hombres y 45.5 kg para mujeres para los primeros 5 pies, sumando 2.3 kg por cada pulgada adicional.</p>
    `,
      "fr": `
      <h2>Détermination Médicale du Poids Santé selon la Stature</h2>
      <p>Le <strong>poids de forme</strong> représente une fourchette de référence réduisant les risques d'hypertension et de diabète de type 2.</p>
      <h2>Formules de Calcul Fondamentales</h2>
      <ul>
        <li><strong>Poids minimal santé :</strong> <code>18,5 &times; [Taille (m)]²</code></li>
        <li><strong>Poids maximal santé :</strong> <code>24,9 &times; [Taille (m)]²</code></li>
      </ul>
    `,
      "de": `
      <h2>Medizinische Bestimmung des Normalgewichts nach Körpergröße</h2>
      <p>Ein <strong>gesundes Körpergewicht</strong> entspricht dem Bereich, in dem der BMI zwischen 18,5 und 24,9 kg/m² liegt.</p>
      <h2>Berechnungsgrundlagen</h2>
      <ul>
        <li><strong>Minimales Normalgewicht:</strong> <code>18,5 &times; [Körpergröße (m)]²</code></li>
        <li><strong>Maximales Normalgewicht:</strong> <code>24,9 &times; [Körpergröße (m)]²</code></li>
      </ul>
    `,
      "ko": `
      <h2>신장별 적정 건강 체중의 의학적 산출법</h2>
      <p><strong>건강 체중</strong>은 고정된 단일 숫자가 아니며, 성인의 신장에 따른 BMI 18.5~24.9 kg/m² 범위 내의 체중 구간을 의미합니다.</p>
      <ul>
        <li><strong>최소 건강 체중 (kg):</strong> <code>18.5 &times; [신장(m)]²</code></li>
        <li><strong>최대 건강 체중 (kg):</strong> <code>24.9 &times; [신장(m)]²</code></li>
      </ul>
    `,
      "hi": `
      <h2>कद के अनुसार स्वस्थ वजन: क्लिनिकल फॉर्मूला व संदर्भ तालिका</h2>
      <p>निवारक चिकित्सा (Preventive Medicine) में सबसे महत्वपूर्ण सिद्धांतों में से एक यह समझना है कि <strong>'स्वस्थ वजन' कोई एकल जादुई संख्या नहीं है</strong>। मानव शरीर में हड्डियों का ढांचा (Small, Medium, Large Bone Frame), मांसपेशियों का घनत्व और द्रव संतुलन हर व्यक्ति में भिन्न होता है। इसलिए नैदानिक रूप से स्वस्थ वजन हमेशा एक वैज्ञानिक सीमा (Range) के रूप में निर्धारित किया जाता है, जो सामान्य बीएमआई (18.5 से 24.9 kg/m²) के अनुरूप होती है।</p>

      <h2>कद और स्वस्थ वजन की व्यापक संदर्भ तालिका</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">कद (इंच / सेमी)</th>
              <th class="p-3 border border-[#e6e6e6] text-emerald-600 font-bold">स्वस्थ बीएमआई सीमा (किग्रा)</th>
              <th class="p-3 border border-[#e6e6e6] text-emerald-600 font-bold">स्वस्थ बीएमआई सीमा (lbs)</th>
              <th class="p-3 border border-[#e6e6e6] text-[#464feb] font-bold">डेवाइन आदर्श वजन (पुरुष / महिला)</th>
            </tr>
          </thead>
          <tbody class="divide-y border-[#e6e6e6]">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">4'10" (147 सेमी)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-emerald-600">40.0 – 53.8 kg</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-emerald-600">88.2 – 118.6 lbs</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-[#464feb]">45.5 kg / 41.0 kg</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">5'0" (152 सेमी)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-emerald-600">42.7 – 57.5 kg</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-emerald-600">94.1 – 126.8 lbs</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-[#464feb]">50.0 kg / 45.5 kg</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">5'2" (157 सेमी)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-emerald-600">45.6 – 61.4 kg</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-emerald-600">100.5 – 135.4 lbs</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-[#464feb]">54.6 kg / 50.1 kg</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">5'4" (163 सेमी)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-emerald-600">49.2 – 66.2 kg</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-emerald-600">108.5 – 145.9 lbs</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-[#464feb]">59.2 kg / 54.7 kg</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">5'6" (168 सेमी)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-emerald-600">52.2 – 70.3 kg</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-emerald-600">115.1 – 155.0 lbs</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-[#464feb]">63.8 kg / 59.3 kg</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">5'8" (173 सेमी)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-emerald-600">55.4 – 74.5 kg</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-emerald-600">122.1 – 164.2 lbs</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-[#464feb]">68.4 kg / 63.9 kg</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">5'10" (178 सेमी)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-emerald-600">58.6 – 78.9 kg</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-emerald-600">129.2 – 173.9 lbs</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-[#464feb]">73.0 kg / 68.5 kg</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">6'0" (183 सेमी)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-emerald-600">62.0 – 83.4 kg</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-emerald-600">136.7 – 183.9 lbs</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-[#464feb]">77.6 kg / 73.1 kg</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">6'2" (188 सेमी)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-emerald-600">65.4 – 88.0 kg</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-emerald-600">144.2 – 194.0 lbs</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-[#464feb]">82.2 kg / 77.7 kg</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>आदर्श शारीरिक वजन (IBW) के 4 नैदानिक फॉर्मूले</h2>
      <p>अस्पतालों में दवा की खुराक (जैसे कीमोथेरेपी या एनेस्थीसिया) और वेंटिलेटर सेटिंग्स तय करने के लिए डॉक्टर निम्नलिखित 4 ऐतिहासिक आदर्श वजन फॉर्मूलों का उपयोग करते हैं:</p>
      <ul>
        <li><strong>डेवाइन फॉर्मूला (Devine 1974 - स्वर्ण मानक):</strong> पुरुष: 50 kg + 2.3 kg प्रति 5 फीट से ऊपर प्रति इंच; महिला: 45.5 kg + 2.3 kg प्रति इंच।</li>
        <li><strong>रॉबिन्सन फॉर्मूला (Robinson 1983):</strong> पुरुष: 52 kg + 1.9 kg प्रति इंच; महिला: 49 kg + 1.7 kg प्रति इंच।</li>
        <li><strong>मिलर फॉर्मूला (Miller 1983):</strong> पुरुष: 56.2 kg + 1.41 kg प्रति इंच; महिला: 53.1 kg + 1.36 kg प्रति इंच।</li>
        <li><strong>हैमवी फॉर्मूला (Hamwi 1964):</strong> पुरुष: 48 kg + 2.7 kg प्रति इंच; महिला: 45.5 kg + 2.2 kg प्रति इंच।</li>
      </ul>

      <h2>वैज्ञानिक संदर्भ एवं साक्ष्य</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Devine BJ. <em>Gentamicin therapy.</em> <a href="https://pubmed.ncbi.nlm.nih.gov/4365738/" class="text-[#464feb] underline">Drug Intell Clin Pharm 1974; 8:650-655.</a></li>
        <li>Robinson JD, et al. <em>Determination of ideal body weight for drug dosage calculations.</em> <a href="https://pubmed.ncbi.nlm.nih.gov/6869387/" class="text-[#464feb] underline">Am J Hosp Pharm 1983; 40(6):1016-1019. PMID: 6869387</a>.</li>
        <li>Pai MP, Paloucek FP. <em>The origin of the "ideal" body weight equations.</em> <a href="https://pubmed.ncbi.nlm.nih.gov/11075335/" class="text-[#464feb] underline">Ann Pharmacother 2000; 34(9):1066-1069. PMID: 11075335</a>.</li>
      </ul>
    `
    }
  },

  "bmi-chart-for-men-women": {
    "datePublished": "2026-04-01",
    "dateModified": "2026-10-25",
    "title": {
      "en": "BMI Chart for Men & Women: Biological Differences & Adiposity Science",
      "hi": "पुरुषों और महिलाओं के लिए बीएमआई: शारीरिक अंतर व फैट वितरण",
      "ko": "남녀별 BMI 차트와 체지방 분포의 생리학적 차이 완벽 가이드",
      "de": "BMI-Vergleich Männer & Frauen: Geschlechtsspezifische Unterschiede",
      "es": "Tabla de IMC para Hombres y Mujeres: Diferencias y Fisiología",
      "fr": "Tableau IMC Hommes et Femmes : Différences Biologiques et Graisse"
    },
    "category": {
      "en": "Biological Differences & Adiposity",
      "hi": "शारीरिक अंतर और फैट वितरण",
      "ko": "성별 신체 지표",
      "de": "Geschlecht & Fettverteilung",
      "es": "Diferencias de Género y Grasa",
      "fr": "Différences Hommes-Femmes"
    },
    "description": {
      "en": "Explore biological differences in Body Mass Index between men and women. Understand why women naturally carry 8-12% more essential body fat, how estrogen and testosterone govern fat storage, and when waist circumference is essential.",
      "hi": "पुरुषों और महिलाओं के बीएमआई में शारीरिक अंतर। जानें कि महिलाओं में आवश्यक फैट 8-12% अधिक क्यों होता है और कमर का माप स्वास्थ्य में क्यों महत्वपूर्ण है।",
      "ko": "남성과 여성의 체지방 분포 및 BMI 해석 차이를 의학적으로 분석합니다. 에스트로겐과 테스토스테론의 작용, 필수 지방률 차이, 허리둘레 기준치를 상세히 안내합니다.",
      "de": "Erfahren Sie, warum Frauen biologisch 8–12 % mehr Fettgewebe benötigen, wie Hormone die Fettverteilung steuern und warum der Taillenumfang unverzichtbar ist.",
      "es": "Comprende por qué las mujeres poseen entre un 8% y 12% más de grasa esencial, cómo los estrógenos y la testosterona determinan la grasa visceral y el papel de la cintura.",
      "fr": "Comprenez pourquoi les femmes ont naturellement 8 à 12 % de graisse essentielle en plus et comment les hormones influencent la répartition abdominale."
    },
    "contentHtml": {
      "en": `
      <h2>Gender-Specific Anthropometry: The Biological Differences in Body Composition</h2>
      <p>A frequent question in clinical anthropometry is whether <strong>men and women should use separate Body Mass Index charts</strong>. Under official World Health Organization (WHO) and Centers for Disease Control and Prevention (CDC) guidelines, standard adult BMI categories are strictly unisex. The mathematical calculation—body weight in kilograms divided by stature in meters squared—is calculated identically regardless of biological gender.</p>
      <p>However, from a physiological and endocrinological perspective, men and women possess radically divergent body compositions at identical BMI values. Below, we examine the hormonal drivers of biological dimorphism in adipose storage, compare essential body fat percentages, explain why standard BMI tables can mask gender-specific health risks, review a side-by-side numerical case study, and examine complementary diagnostic measurements.</p>

      <h2>Hormonal Regulation of Adipose Distribution: Estrogen vs. Testosterone</h2>
      <div class="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[var(--accent)]">Female Endocrine Architecture</h3>
          <p class="text-sm text-[var(--foreground)] mt-2">Circulating estrogens (estradiol) promote the accumulation of <strong>subcutaneous gynoid adipose tissue</strong> predominantly on the gluteofemoral region (hips, thighs, and buttocks). This subcutaneous fat serves essential evolutionary reproductive functions, supplying energy reserves for pregnancy and lactation. Crucially, gluteofemoral subcutaneous fat does not release free fatty acids directly into the hepatic circulation and produces elevated levels of adiponectin, an insulin-sensitizing anti-inflammatory hormone.</p>
        </div>
        <div class="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[var(--accent)]">Male Endocrine Architecture</h3>
          <p class="text-sm text-[var(--foreground)] mt-2">Testosterone and androgenic hormones promote greater skeletal muscle mass development and higher bone mineral density. However, when men enter an energy surplus, excess lipids are preferentially partitioned into <strong>intra-abdominal visceral fat depots</strong> (android pattern) surrounding the intestines, liver, and pancreas. Visceral fat is metabolically hyperactive, releasing inflammatory cytokines (TNF-&alpha;, IL-6) that accelerate atherosclerosis and hepatic steatosis.</p>
        </div>
      </div>

      <h2>Essential and Typical Body Fat Percentages for Men & Women</h2>
      <p>Because women require reproductive biological fat, their normal healthy body fat percentage is <strong>8% to 12% higher</strong> than that of men at an identical BMI score:</p>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">Adiposity Category</th>
              <th class="p-3 text-blue-500">Men Body Fat %</th>
              <th class="p-3 text-rose-500">Women Body Fat %</th>
              <th class="p-3">Physiological State</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)] font-mono">
            <tr>
              <td class="p-3 font-sans font-semibold">Essential Biological Fat</td>
              <td class="p-3 text-blue-500">2% – 5%</td>
              <td class="p-3 text-rose-500">10% – 13%</td>
              <td class="p-3 font-sans">Minimum physiological lipid required for organ insulation & nerve transmission</td>
            </tr>
            <tr>
              <td class="p-3 font-sans font-semibold">Athletic Level</td>
              <td class="p-3 text-blue-500">6% – 13%</td>
              <td class="p-3 text-rose-500">14% – 20%</td>
              <td class="p-3 font-sans">High vascularity, prominent muscular definition, competitive performance</td>
            </tr>
            <tr>
              <td class="p-3 font-sans font-semibold text-emerald-500 font-bold">Fitness / Healthy Baseline</td>
              <td class="p-3 text-blue-500 font-bold">14% – 17%</td>
              <td class="p-3 text-rose-500 font-bold">21% – 24%</td>
              <td class="p-3 font-sans text-emerald-500 font-bold">Optimal longevity, balanced hormonal production, low inflammation</td>
            </tr>
            <tr>
              <td class="p-3 font-sans font-semibold">Acceptable Average</td>
              <td class="p-3 text-blue-500">18% – 24%</td>
              <td class="p-3 text-rose-500">25% – 31%</td>
              <td class="p-3 font-sans">Typical sedentary population average; low immediate clinical risk</td>
            </tr>
            <tr>
              <td class="p-3 font-sans font-semibold text-rose-500">Clinical Obesity Threshold</td>
              <td class="p-3 text-blue-500 font-bold">&ge; 25%</td>
              <td class="p-3 text-rose-500 font-bold">&ge; 32%</td>
              <td class="p-3 font-sans text-rose-500">Elevated risk of insulin resistance, dyslipidemia, and metabolic syndrome</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Comparative Case Study: Man vs. Woman at Identical 24.5 BMI</h2>
      <div class="my-6 p-6 rounded-xl border border-[var(--border)] bg-[var(--card)] font-mono text-sm leading-relaxed space-y-3">
        <p class="font-bold text-[var(--accent)]">Side-by-Side Physiological Analysis (Stature: 175 cm / Weight: 75.0 kg / BMI: 24.49 kg/m²):</p>
        <p class="text-[var(--foreground)]"><strong>Case A (Adult Male, Age 32):</strong></p>
        <p class="text-[var(--muted-foreground)]">&bull; Body Fat Percentage: ~15.5% (Total Adipose Mass: 11.6 kg)</p>
        <p class="text-[var(--muted-foreground)]">&bull; Lean Skeletal & Organ Mass: 63.4 kg</p>
        <p class="text-[var(--muted-foreground)]">&bull; Waist Circumference: 81 cm (Low cardiometabolic risk)</p>
        <p class="text-[var(--foreground)] mt-2"><strong>Case B (Adult Female, Age 32):</strong></p>
        <p class="text-[var(--muted-foreground)]">&bull; Body Fat Percentage: ~25.0% (Total Adipose Mass: 18.8 kg)</p>
        <p class="text-[var(--muted-foreground)]">&bull; Lean Skeletal & Organ Mass: 56.2 kg</p>
        <p class="text-[var(--muted-foreground)]">&bull; Waist Circumference: 74 cm (Normal healthy gynoid distribution)</p>
        <p class="text-[var(--foreground)] font-bold mt-2">Clinical Finding: Both individuals register an identical 24.5 BMI within the normal WHO range, yet the female carries 7.2 kg more physiological fat without any cardiovascular penalty, reflecting natural male and female biology.</p>
      </div>

      <h2>Gender-Specific Waist Circumference and Ratio Guidelines</h2>
      <p>Because unisex BMI fails to capture gender-specific fat distribution, the World Health Organization and International Diabetes Federation (IDF) established distinct waist circumference thresholds to define central abdominal obesity:</p>
      <ul>
        <li><strong>Men Action Threshold:</strong> Waist circumference &gt; 94 cm (37 inches) indicates increased cardiometabolic risk; &gt; 102 cm (40 inches) indicates substantial risk.</li>
        <li><strong>Women Action Threshold:</strong> Waist circumference &gt; 80 cm (31.5 inches) indicates increased cardiometabolic risk; &gt; 88 cm (35 inches) indicates substantial risk.</li>
        <li><strong>Asian Specific Thresholds:</strong> For South and East Asian populations, cut-offs are stricter: &gt; 90 cm (35.4 inches) for men and &gt; 80 cm (31.5 inches) for women.</li>
      </ul>

      <h2>Menopause and the Post-Menopausal Shift in Female Adiposity</h2>
      <p>During the menopausal transition, ovarian production of 17&beta;-estradiol decreases substantially. This hormonal drop triggers a dramatic redistribution of body fat in women, shifting storage from protective subcutaneous hip sites toward intra-abdominal visceral adipose tissue. Consequently, post-menopausal women experience a marked rise in insulin resistance, non-alcoholic fatty liver disease, and coronary artery disease even when their total scale weight and BMI remain completely unchanged.</p>

      <h2>Frequently Asked Questions on Gender Differences in BMI</h2>
      <div class="space-y-4 my-6">
        <div>
          <h3 class="text-base font-bold text-[var(--foreground)]">Should a woman aim for a lower BMI than a man of the same height?</h3>
          <p class="text-sm text-[var(--muted-foreground)]">Not necessarily. Because men have heavier skeletal frames and greater muscle density, their scale weight naturally skews higher. Women comfortably fit anywhere in the 18.5 to 24.9 window as long as their waist-to-height ratio remains below 0.50.</p>
        </div>
        <div>
          <h3 class="text-base font-bold text-[var(--foreground)]">Why do men develop a protruding "beer belly" more easily than women?</h3>
          <p class="text-sm text-[var(--muted-foreground)]">Male physiology lacks protective subcutaneous estrogenic fat depots on the thighs and hips. As a result, excess calories are directed immediately beneath the abdominal wall into the visceral omentum and mesentery, pushing the stomach outward.</p>
        </div>
      </div>

      <h2>Scientific References</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>World Health Organization. <em>Waist circumference and waist-hip ratio: report of a WHO expert consultation.</em> Geneva, 2011.</li>
        <li>Karastergiou K, Smith SR, Davis AS, Fried SK. <em>Biological differences in human adipose tissue - the biology of gynoid and android fat.</em> Biology of Adipose Tissue Differences 2012; 3:13.</li>
        <li>Alberti KG, Eckel RH, Grundy SM, et al. <em>Harmonizing the metabolic syndrome.</em> Circulation 2009; 120(16):1640-1645.</li>
      </ul>
`,
      "es": `
      <h2>Diferencias Biológicas entre Hombres y Mujeres en el IMC</h2>
      <p>Aunque los criterios de la OMS para adultos son unisex, la composición corporal presenta marcadas diferencias hormonales. Las mujeres necesitan biológicamente entre un 8% y un 12% más de grasa corporal esencial para la función reproductora y endocrina.</p>
      <h2>Hormonas y Distribución de Grasa</h2>
      <ul>
        <li><strong>Estrógenos:</strong> Favorecen el depósito subcutáneo en caderas y muslos (patrón ginoide protector).</li>
        <li><strong>Testosterona:</strong> Desarrolla mayor masa muscular, pero ante el exceso calórico favorece la grasa visceral intraabdominal (patrón androide de mayor riesgo).</li>
      </ul>
    `,
      "fr": `
      <h2>Différences Hommes-Femmes dans l'Interprétation de l'IMC</h2>
      <p>Bien que les catégories de l'OMS soient unisexes, les femmes possèdent naturellement plus de tissu adipeux essentiel (10-13% contre 2-5% chez les hommes) sans que cela n'augmente leur risque cardiovasculaire.</p>
    `,
      "de": `
      <h2>Geschlechtsspezifische Unterschiede: Warum der Unisex-BMI biologische Realitäten verschleiert</h2>
      <p>Die offizielle Einstufung der Weltgesundheitsorganisation (WHO) unterscheidet beim BMI nicht zwischen den biologischen Geschlechtern: Für Männer und Frauen gilt gleichermaßen ein Bereich von 18,5 bis 24,9 kg/m² als Normalgewicht. Aus endokrinologischer und sportmedizinischer Sicht birgt diese Einheitlichkeit jedoch eine gravierende Limitation: <strong>Frauen weisen bei identischem BMI im Durchschnitt einen um 8 bis 12 Prozentpunkte höheren Körperfettanteil auf als Männer</strong>.</p>
      <p>Während bei einem Mann mit einem BMI von 23 kg/m² der typische Körperfettanteil bei etwa 13 bis 17 % liegt, besitzt eine gesunde Frau mit demselben BMI typischerweise 23 bis 27 % Körperfett. Dieses zusätzliche Fettgewebe ist biologisch essenziell für die ovarielle Hormonproduktion, den Menstruationszyklus und die Knochendichte.</p>

      <h2>Hormonelle Steuerung: Gynoide vs. androide Fettverteilungsmuster</h2>
      <p>Die Sexualhormone steuern maßgeblich, an welchen Stellen des Körpers überschüssige Lipide eingelagert werden:</p>
      <ul class="list-disc pl-5 my-4 space-y-2 text-sm text-[var(--muted-foreground)]">
        <li><strong>Östrogene (Weibliches Profil):</strong> Begünstigen die subkutane Fetteinlagerung im Bereich von Hüfte, Gesäß und Oberschenkeln (<em>gynoide Birnenform</em>). Dieses Unterhautfettgewebe ist metabolisch weitgehend inert und schützt vor kardiovaskulären Schäden.</li>
        <li><strong>Testosteron & Androgene (Männliches Profil):</strong> Fördern eine höhere Muskelmasse, führen bei Kalorienüberschuss jedoch bevorzugt zur viszeralen Fetteinlagerung im Bauchraum zwischen den Organen (<em>androide Apfelform</em>), was mit einem stark erhöhten Risiko für Bluthochdruck und Arteriosklerose einhergeht.</li>
      </ul>

      <h2>Grenzwerte für den Taillenumfang nach WHO und IDF</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">Geschlecht / Population</th>
              <th class="p-3 text-emerald-500 font-bold">Normalbereich (Niedriges Risiko)</th>
              <th class="p-3 text-amber-500 font-bold">Erhöhtes Risiko (Warnschwelle)</th>
              <th class="p-3 text-rose-500 font-bold">Deutlich erhöhtes Risiko (Aktionspunkt)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)] font-mono">
            <tr>
              <td class="p-3 font-sans font-semibold">Männer (Europäisch / Kaukasisch)</td>
              <td class="p-3 text-emerald-500">&lt; 94 cm</td>
              <td class="p-3 text-amber-500">94 – 101 cm</td>
              <td class="p-3 text-rose-500 font-bold">&ge; 102 cm</td>
            </tr>
            <tr>
              <td class="p-3 font-sans font-semibold">Frauen (Europäisch / Kaukasisch)</td>
              <td class="p-3 text-emerald-500">&lt; 80 cm</td>
              <td class="p-3 text-amber-500">80 – 87 cm</td>
              <td class="p-3 text-rose-500 font-bold">&ge; 88 cm</td>
            </tr>
            <tr>
              <td class="p-3 font-sans font-semibold">Männer (Asiatische Populationen)</td>
              <td class="p-3 text-emerald-500">&lt; 90 cm</td>
              <td class="p-3 text-amber-500">90 – 94 cm</td>
              <td class="p-3 text-rose-500 font-bold">&ge; 95 cm</td>
            </tr>
            <tr>
              <td class="p-3 font-sans font-semibold">Frauen (Asiatische Populationen)</td>
              <td class="p-3 text-emerald-500">&lt; 80 cm</td>
              <td class="p-3 text-amber-500">80 – 84 cm</td>
              <td class="p-3 text-rose-500 font-bold">&ge; 85 cm</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Menopause: Die viszerale Fettumverteilung nach den Wechseljahren</h2>
      <p>Mit dem Absinken des Östrogenspiegels während der Perimenopause verlagert sich die Fetteinlagerung bei Frauen zunehmend von den Hüften in den Bauchraum. Viele Frauen bemerken, dass ihr Taillenumfang wächst und das viszerale Bauchfett zunimmt, obwohl das Gesamtgewicht auf der Waage konstant bleibt. Regelmäßige Messungen der Taille-zu-Größe-Relation (WHtR &lt; 0,50) sind daher ab dem 50. Lebensjahr aussagekräftiger als der BMI allein.</p>
    `,
      "ko": `
      <h2>남녀별 BMI와 체지방 분포의 의학적 차이</h2>
      <p>성인 BMI 공식은 남녀 공통으로 적용되지만, 여성은 생식 호르몬 기능 유지를 위해 남성보다 필수 체지방률이 약 8~12%포인트 더 높게 형성됩니다.</p>
    `,
      "hi": `
      <h2>पुरुषों और महिलाओं के लिए बीएमआई: शारीरिक अंतर व वसा वितरण</h2>
      <p>क्लिनिकल एंथ्रोपोमेट्री में अक्सर यह सवाल पूछा जाता है कि क्या पुरुषों और महिलाओं के लिए अलग-अलग बीएमआई फॉर्मूले होने चाहिए? यद्यपि विश्व स्वास्थ्य संगठन (WHO) का मानक बीएमआई फॉर्मूला लिंग-तटस्थ (Unisex) है, लेकिन <strong>पुरुषों और महिलाओं की शारीरिक संरचना और हार्मोनल प्रोफाइल में भारी जैविक अंतर होता है</strong>।</p>

      <h2>आवश्यक शारीरिक वसा (Essential Body Fat) में मूलभूत अंतर</h2>
      <p>मानव शरीर में जीवन रक्षा, तंत्रिका तंत्र की सुरक्षा और हार्मोन उत्पादन के लिए न्यूनतम आवश्यक वसा की आवश्यकता होती है:</p>
      <ul>
        <li><strong>पुरुषों में आवश्यक वसा:</strong> केवल <strong>3% से 5%</strong>। पुरुषों में टेस्टोस्टेरोन हार्मोन अधिक मांसपेशी द्रव्यमान (Muscle Mass) और हड्डियों के घनत्व को बढ़ावा देता है।</li>
        <li><strong>महिलाओं में आवश्यक वसा:</strong> कम से कम <strong>10% से 13%</strong>। महिलाओं में एस्ट्रोजेन और प्रोजेस्टेरोन हार्मोन प्रजनन क्षमता, स्तन ऊतक और गर्भावस्था के पोषण के लिए वसा के उच्च स्तर को अनिवार्य बनाते हैं।</li>
      </ul>
      <p>इसका नैदानिक अर्थ यह है कि समान 22.5 kg/m² बीएमआई होने पर भी, एक सामान्य महिला के शरीर में एक सामान्य पुरुष की तुलना में स्वाभाविक रूप से <strong>8% से 12% अधिक वसा</strong> होगी, जो पूरी तरह स्वस्थ और जैविक रूप से अनिवार्य है।</p>

      <h2>वसा वितरण पैटर्न: एंड्रॉइड बनाम गाइनॉइड मोटापा</h2>
      <div class="my-6 space-y-3">
        <div class="p-4 rounded-xl border border-[#e6e6e6] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[#464feb]">1. एंड्रॉइड पैटर्न (सेब का आकार - पुरुषों में आम)</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">टेस्टोस्टेरोन और कोर्टिसोल के प्रभाव से पुरुषों में अतिरिक्त वसा मुख्य रूप से पेट के क्षेत्र और आंतरिक अंगों (लिवर, आंतों) के चारों ओर जमा होती है। यह विसरल वसा उच्च रक्तचाप, ट्राइग्लिसराइड्स और कोरोनरी धमनी रोग का सीधा कारण बनती है।</p>
        </div>
        <div class="p-4 rounded-xl border border-[#e6e6e6] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[#464feb]">2. गाइनॉइड पैटर्न (नाशपाती का आकार - महिलाओं में आम)</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">एस्ट्रोजेन हार्मोन के कारण प्री-मेनोपॉजल महिलाओं में वसा मुख्य रूप से नितंबों, कूल्हों और जांघों पर सबक्यूटेनियस परत के रूप में जमा होती है। यह वसा मेटाबॉलिक रूप से सुरक्षात्मक होती है और हृदय रोगों से बचाती है। हालांकि, रजोनिवृत्ति (Menopause) के बाद एस्ट्रोजेन घटने पर महिलाओं में भी वसा पेट पर जमा होने लगती है।</p>
        </div>
      </div>

      <h2>लिंग-विशिष्ट नैदानिक सीमाएं: कमर परिधि व कमर-कूल्हा अनुपात (WHR)</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">माप पैमाना</th>
              <th class="p-3 border border-[#e6e6e6] text-[#464feb] font-bold">पुरुष (सुरक्षित सीमा)</th>
              <th class="p-3 border border-[#e6e6e6] text-rose-500 font-bold">महिला (सुरक्षित सीमा)</th>
              <th class="p-3 border border-[#e6e6e6]">उच्च जोखिम सीमा</th>
            </tr>
          </thead>
          <tbody class="divide-y border-[#e6e6e6]">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">कमर की परिधि (अंतरराष्ट्रीय)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-[#464feb] font-bold">&lt; 94 सेमी (37 इंच)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-rose-500 font-bold">&lt; 80 सेमी (31.5 इंच)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-rose-600">&ge; 102 सेमी (पुरुष) / &ge; 88 सेमी (महिला)</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">कमर की परिधि (एशियाई मानक)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-[#464feb] font-bold">&lt; 90 सेमी (35.4 इंच)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-rose-500 font-bold">&lt; 80 सेमी (31.5 इंच)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-rose-600">&ge; 90 सेमी (पुरुष) / &ge; 80 सेमी (महिला)</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold">कमर-कूल्हा अनुपात (WHR)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-[#464feb] font-bold">&lt; 0.90</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-rose-500 font-bold">&lt; 0.85</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-rose-600">&ge; 1.0 (पुरुष) / &ge; 0.85 (महिला)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>वैज्ञानिक संदर्भ एवं साक्ष्य</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>World Health Organization. <em>Waist circumference and waist-hip ratio: report of a WHO expert consultation.</em> <a href="https://apps.who.int/iris/handle/10665/44583" class="text-[#464feb] underline">WHO Guidelines 2008.</a></li>
        <li>Jackson AS, Pollock ML. <em>Generalized equations for predicting body density of men.</em> <a href="https://pubmed.ncbi.nlm.nih.gov/7403453/" class="text-[#464feb] underline">Br J Nutr 1978; 40(3):497-504. PMID: 7403453</a>.</li>
        <li>Jackson AS, et al. <em>Generalized equations for predicting body density of women.</em> <a href="https://pubmed.ncbi.nlm.nih.gov/6298501/" class="text-[#464feb] underline">Med Sci Sports Exerc 1980; 12(3):175-181. PMID: 6298501</a>.</li>
      </ul>
    `
    }
  },

  "bmi-by-age": {
    "datePublished": "2026-04-15",
    "dateModified": "2026-10-28",
    "title": {
      "en": "BMI by Age: Lifespan Trajectory, Sarcopenia & Senior Guidelines",
      "hi": "उम्र के अनुसार बीएमआई: जीवन के पड़ाव, मांसपेशी क्षय और बुजुर्गों के दिशानिर्देश",
      "ko": "연령별 BMI 가이드: 생애주기별 비만도 변화와 노인 비만의 역설",
      "de": "BMI nach Alter: Lebensphasen, Sarkopenie & Richtwerte für Senioren",
      "es": "IMC por Edad: Trayectoria Vital, Sarcopenia y Guía para Mayores",
      "fr": "L'IMC selon l'Âge : Évolution, Sarcopénie et Normes pour Seniors"
    },
    "category": {
      "en": "Age & Lifespan Health",
      "hi": "उम्र और दीर्घायु स्वास्थ्य",
      "ko": "연령 및 노년 건강",
      "de": "Alter & Geriatrie",
      "es": "Edad y Salud Geriátrica",
      "fr": "Âge et Gériatrie"
    },
    "description": {
      "en": "Learn how Body Mass Index interpretation evolves across adulthood. Understand the Geriatric Obesity Paradox, age-related stature compression, sarcopenic obesity, and optimal BMI targets for seniors.",
      "hi": "जानें कि उम्र बढ़ने के साथ बीएमआई का आकलन कैसे बदलता है। जेरियाट्रिक ओबेसिटी पैराडॉक्स, मांसपेशियों का नुकसान (सार्कोपेनिया) और 65+ आयु वर्ग के लिए सुरक्षित वजन सीमा।",
      "ko": "나이에 따른 체질량지수(BMI)의 의학적 해석 변화를 종합 분석합니다. 65세 이상 고령층의 '비만의 역설', 근감소성 비만 예방법 및 연령대별 최적 체중 목표를 확인하세요.",
      "de": "Verstehen Sie, wie sich der BMI im Alter verändert, warum Senioren von einem leicht höheren BMI profitieren (Adipositas-Paradoxon) und wie Sarkopenie erkannt wird.",
      "es": "Aprende cómo evoluciona la interpretación del IMC con la edad, la paradoja de la obesidad en la tercera edad y los objetivos de peso ideales para mayores de 65 años.",
      "fr": "Découvrez comment l'âge modifie l'interprétation de l'IMC, le paradoxe de l'obésité chez les seniors et les cibles de poids adaptées pour préserver la masse musculaire."
    },
    "contentHtml": {
      "en": `
      <h2>The Lifespan Continuum: How Age Influences Body Mass Index Interpretation</h2>
      <p>Body composition is not a static physiological state; it evolves dramatically across every decade of human life. While the standard adult Body Mass Index (BMI) formula—body weight in kilograms divided by stature in meters squared—remains mathematically constant from age 20 to 100, its <strong>clinical interpretation must be adapted to age-specific biological changes</strong>. What represents an ideal, longevity-promoting BMI for a 22-year-old athlete can signify acute malnutrition and frailty in an 82-year-old nursing home resident.</p>
      <p>Below, we examine the physiological progression of human body composition across four primary life stages, explore the clinical phenomenon known as the <em>Obesity Paradox in Geriatrics</em>, detail how age-related stature compression alters calculated BMI, and provide an evidence-based clinical reference guide.</p>

      <h2>The Four Major Life Stages of Anthropometric Evolution</h2>
      <div class="my-6 space-y-4">
        <div class="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[var(--accent)]">1. Early Adulthood (Ages 20 to 39): Peak Bone Mass and Muscular Development</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">During young adulthood, individuals reach peak bone mineral density and maximum baseline skeletal muscle mass. The standard World Health Organization (WHO) healthy range of <strong>18.5 to 24.9 kg/m²</strong> demonstrates its highest diagnostic accuracy during this life stage. Because metabolic rates are elevated and hormonal profiles (growth hormone, testosterone, and estradiol) are robust, excess weight in this cohort almost exclusively reflects dietary energy surplus rather than age-related hormonal shifts.</p>
        </div>
        <div class="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[var(--accent)]">2. Middle Adulthood (Ages 40 to 64): Metabolic Slowdown & Visceral Redistribution</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">Beginning in the fourth decade, resting metabolic rate declines by roughly 1% to 2% per decade, primarily driven by subclinical losses of appendicular lean muscle (sarcopenia) and decreased physical activity. In women, the perimenopausal drop in estrogens prompts a migration of adipose tissue from subcutaneous gluteofemoral depots to visceral abdominal locations. In men, gradual androgen declines lead to reduced muscular tone and increased hepatic fat deposition. An adult may maintain an unchanged scale weight of 70 kg throughout this period while covertly gaining 4 kg of visceral fat and losing 4 kg of muscle.</p>
        </div>
        <div class="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[var(--accent)]">3. Older Adulthood (Ages 65 to 74): The Emergence of Sarcopenic Obesity</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">In early seniority, muscle protein synthesis efficiency decreases in response to dietary amino acids. Adults who do not engage in targeted resistance exercise lose up to 3% to 5% of muscle mass per decade. Sarcopenic obesity—the simultaneous coexistence of high body fat and deficient skeletal muscle mass—frequently emerges. Clinicians advise against aggressive calorie-restriction diets in this age bracket unless accompanied by high protein intake and resistance training, as rapid weight loss accelerates muscular deterioration and fall risk.</p>
        </div>
        <div class="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[var(--accent)]">4. Advanced Age (Ages 75+): Frailty and Involuntary Weight Loss</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">In late senescence, involuntary weight loss and cachexia represent severe clinical warning signs. A declining BMI below 22 kg/m² correlates strongly with increased mortality, susceptibility to severe respiratory infections, hip fractures following minor falls, and postoperative complications. Preserving nutritional reserves takes precedence over traditional weight-loss goals.</p>
        </div>
      </div>

      <h2>The Geriatric Obesity Paradox: Why Higher BMI Protects Older Adults</h2>
      <p>One of the most robust findings in geriatric epidemiology is the <strong>"Obesity Paradox."</strong> Across dozens of large-scale international prospective studies, the lowest all-cause mortality rate for adults aged 65 and older occurs not at the standard adult ideal of 21 to 23 kg/m², but rather between <strong>25.0 and 29.9 kg/m²</strong> (traditionally classified as "overweight").</p>
      <p>Gerontologists identify several protective biological mechanisms explaining this paradox:</p>
      <ul>
        <li><strong>Metabolic Reserve Capacity:</strong> Modest fat reserves provide essential catabolic substrate during acute medical events such as pneumonia, sepsis, major orthopedic surgery, or cancer treatments.</li>
        <li><strong>Mechanical Cushioning:</strong> Greater subcutaneous adipose tissue over the greater trochanter of the femur absorbs impact energy during falls, directly reducing the incidence of catastrophic hip fractures.</li>
        <li><strong>Protection Against Undernutrition:</strong> Older adults with higher baseline weights are far less likely to suffer from micronutrient deficiencies, zinc depletion, and severe immune compromise.</li>
      </ul>

      <h2>Age-Stratified Recommended BMI Reference Targets</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table style="width: 100%; text-align: left; border-collapse: collapse; font-size: 0.875rem;">
          <thead>
            <tr style="background-color: #f5f5f5;">
              <th style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #1e293b; background-color: #f5f5f5;">Age Bracket</th>
              <th style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #10b981; background-color: #f5f5f5;">Optimal Longevity BMI Target</th>
              <th style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #1e293b; background-color: #f5f5f5;">Primary Anthropometric Focus</th>
              <th style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #1e293b; background-color: #f5f5f5;">Clinical Screening Priorities</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 600;">18 – 35 Years</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #10b981;">19.0 – 24.5 kg/m²</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">Cardiorespiratory fitness, muscular development</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">Baseline lipid panels, blood pressure monitoring</td>
            </tr>
            <tr>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 600;">36 – 54 Years</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #10b981;">20.5 – 25.5 kg/m²</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">Visceral fat prevention, waist-to-height ratio &lt; 0.50</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">Fasting blood glucose, HbA1c, liver function tests</td>
            </tr>
            <tr>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 600;">55 – 64 Years</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #10b981;">22.0 – 26.5 kg/m²</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">Preservation of skeletal muscle, joint preservation</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">Cardiovascular stress testing, carotid ultrasound</td>
            </tr>
            <tr>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 600;">65 – 74 Years</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #10b981;">23.5 – 28.0 kg/m²</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">Sarcopenia prevention, balance, functional mobility</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">DEXA bone density scan, grip strength dynamometry</td>
            </tr>
            <tr>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 600; color: #464feb;">75+ Years</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #10b981;">24.0 – 29.0 kg/m²</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">Nutritional density, fall prevention, frailty avoidance</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">Mini Nutritional Assessment (MNA), albumin screening</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>The Impact of Age-Related Stature Compression</h2>
      <p>As humans age, the hydration and thickness of intervertebral fibrocartilaginous discs decline, and subtle osteoporotic microfractures can lead to mild spinal kyphosis. On average, adults lose approximately 1 to 2 cm of height per decade after age 40, and up to 3 to 5 cm by age 75. Because height is squared in the BMI denominator, this stature loss artificially inflates calculated BMI by 1.0 to 1.5 units without any true gain in adipose mass. Clinicians working with older adults frequently measure arm span or knee height as surrogate markers to estimate original stature.</p>

      <h2>Frequently Asked Questions on BMI Across Ages</h2>
      <div class="space-y-4 my-6">
        <div>
          <h3 class="text-base font-bold text-[var(--foreground)]">Should a 70-year-old attempt to lose weight if their BMI is 27?</h3>
          <p class="text-sm text-[var(--muted-foreground)]">In the absence of severe mobility impairment or uncontrolled Type 2 diabetes, most geriatricians recommend maintaining weight rather than dieting at a BMI of 27. Unsupervised dieting in seniors disproportionately strips away vital lean muscle tissue and bone density.</p>
        </div>
        <div>
          <h3 class="text-base font-bold text-[var(--foreground)]">What is the most dangerous weight pattern in older adults?</h3>
          <p class="text-sm text-[var(--muted-foreground)]">Involuntary weight loss exceeding 5% of body weight over 6 to 12 months is a major clinical indicator of frailty, malignancy, or chronic malabsorption, warranting immediate medical investigation.</p>
        </div>
      </div>

      <h2>Scientific References</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Winter JE, MacInnis RJ, Wattanapenpaiboon N, Nowson CA. <em><a href="https://pubmed.ncbi.nlm.nih.gov/24451310/" target="_blank" rel="noopener noreferrer" style="color: #464feb; text-decoration: none;">BMI and all-cause mortality in older adults: a meta-analysis.</a></em> Am J Clin Nutr 2014; 99(4):875-890. PMID: 24451310.</li>
        <li>Cruz-Jentoft AJ, Bahat G, Bauer J, et al. <em><a href="https://pubmed.ncbi.nlm.nih.gov/30312372/" target="_blank" rel="noopener noreferrer" style="color: #464feb; text-decoration: none;">Sarcopenia: revised European consensus on definition and diagnosis.</a></em> Age Ageing 2019; 48(1):16-31. PMID: 30312372.</li>
        <li>Volkert D, Beck AM, Cederholm T, et al. <em><a href="https://pubmed.ncbi.nlm.nih.gov/30352776/" target="_blank" rel="noopener noreferrer" style="color: #464feb; text-decoration: none;">ESPEN guideline on clinical nutrition and hydration in geriatrics.</a></em> Clin Nutr 2019; 38(1):10-47. PMID: 30352776.</li>
      </ul>
`,
      "es": `
      <h2>La Trayectoria a lo Largo de la Vida: Cómo la Edad Transforma la Interpretación del IMC</h2>
      <p>La composición corporal evoluciona profundamente en cada década de la vida. Aunque la fórmula estándar del Índice de Masa Corporal (IMC)—peso corporal en kilogramos dividido por la estatura en metros al cuadrado—se mantiene constante desde los 20 hasta los 100 años, su <strong>interpretación clínica debe adaptarse a los cambios biológicos propios de cada etapa vital</strong>. Lo que representa un IMC óptimo para un atleta joven de 22 años puede significar desnutrición aguda o fragilidad en un adulto mayor de 82 años.</p>

      <h2>Las Cuatro Grandes Etapas de la Evolución Antropométrica</h2>
      <div class="my-6 space-y-4">
        <div class="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[var(--accent)]">1. Adultez Temprana (20 a 39 Años): Máxima Masa Ósea y Muscular</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">El rango saludable estándar de la OMS de <strong>18,5 a 24,9 kg/m²</strong> ofrece su mayor precisión diagnóstica en esta fase, cuando la densidad mineral ósea y la masa muscular esquelética alcanzan su pico biológico.</p>
        </div>
        <div class="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[var(--accent)]">2. Adultez Media (40 a 64 Años): Ralentización Metabólica y Grasa Visceral</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">El gasto metabólico basal disminuye entre un 1% y 2% por década. Los cambios hormonales favorecen el depósito de grasa visceral abdominal a expensas de la masa muscular magra.</p>
        </div>
        <div class="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[var(--accent)]">3. Tercera Edad (65 a 74 Años): Riesgo de Obesidad Sarcopénica</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">Aparece la pérdida involuntaria de masa muscular (sarcopenia). Las dietas hipocalóricas severas no supervisadas están contraindicadas porque aumentan la fragilidad y el riesgo de caídas.</p>
        </div>
        <div class="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[var(--accent)]">4. Vejez Avanzada (75+ Años): Prevención de Fragilidad y Caquexia</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">Un IMC inferior a 22 kg/m² se asocia fuertemente con mayor mortalidad, fracturas de cadera y complicaciones infecciosas. Preservar las reservas nutricionales es la máxima prioridad médica.</p>
        </div>
      </div>

      <h2>La Paradoja de la Obesidad Geriátrica</h2>
      <p>Estudios epidemiológicos a gran escala demuestran que en adultos mayores de 65 años, la menor tasa de mortalidad por todas las causas se sitúa entre <strong>25,0 y 29,9 kg/m²</strong> (zona clasificada tradicionalmente como sobrepeso). Esta reserva metabólica protege contra infecciones agudas, hospitalizaciones y fracturas graves por impacto mecánico.</p>

      <h2>Objetivos de Referencia de IMC por Grupo de Edad</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table style="width: 100%; text-align: left; border-collapse: collapse; font-size: 0.875rem;">
          <thead>
            <tr style="background-color: #f5f5f5;">
              <th style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #1e293b; background-color: #f5f5f5;">Grupo de Edad</th>
              <th style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #10b981; background-color: #f5f5f5;">IMC Óptimo de Longevidad</th>
              <th style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #1e293b; background-color: #f5f5f5;">Foco Antropométrico</th>
              <th style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #1e293b; background-color: #f5f5f5;">Prioridades de Cribado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 600;">18 – 35 Años</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #10b981;">19,0 – 24,5 kg/m²</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">Capacidad cardiorrespiratoria y masa muscular</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">Perfil lipídico basal, presión arterial</td>
            </tr>
            <tr>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 600;">36 – 54 Años</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #10b981;">20,5 – 25,5 kg/m²</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">Control de grasa visceral (cintura/estatura &lt; 0,50)</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">Glucemia en ayunas, HbA1c, enzimas hepáticas</td>
            </tr>
            <tr>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 600;">55 – 64 Años</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #10b981;">22,0 – 26,5 kg/m²</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">Preservación musculoesquelética y articular</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">Pruebas de esfuerzo, ecografía carotídea</td>
            </tr>
            <tr>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 600;">65 – 74 Años</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #10b981;">23,5 – 28,0 kg/m²</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">Prevención de sarcopenia, equilibrio funcional</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">Densitometría DEXA, dinamometría de agarre</td>
            </tr>
            <tr>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 600; color: #464feb;">75+ Años</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #10b981;">24,0 – 29,0 kg/m²</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">Densidad nutricional y prevención de caídas</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">Mini Nutritional Assessment (MNA), albúmina</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Compresión de la Estatura Ligada a la Edad</h2>
      <p>Debido a la deshidratación de los discos vertebrales, los adultos pierden entre 1 y 2 cm de estatura por década tras los 40 años. Como la estatura está al cuadrado en el denominador del IMC, esta pérdida eleva artificialmente el valor entre 1,0 y 1,5 unidades sin que haya aumento real de grasa corporal.</p>

      <h2>Referencias Científicas</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Winter JE, et al. <em><a href="https://pubmed.ncbi.nlm.nih.gov/24451310/" target="_blank" rel="noopener noreferrer" style="color: #464feb; text-decoration: none;">BMI and all-cause mortality in older adults: a meta-analysis.</a></em> Am J Clin Nutr 2014; PMID: 24451310.</li>
        <li>Cruz-Jentoft AJ, et al. <em><a href="https://pubmed.ncbi.nlm.nih.gov/30312372/" target="_blank" rel="noopener noreferrer" style="color: #464feb; text-decoration: none;">Sarcopenia: revised European consensus.</a></em> Age Ageing 2019; PMID: 30312372.</li>
      </ul>
`,
      "fr": `
      <h2>La Trajectoire du Cycle de Vie : Comment l'Âge Influence l'Interprétation de l'IMC</h2>
      <p>La composition corporelle évolue continuellement à chaque étape de l'existence. Si la formule de base de l'Indice de Masse Corporelle (poids en kg divisé par la taille en mètres au carré) demeure constante, son <strong>interprétation clinique doit impérativement s'adapter aux modifications physiologiques liées à l'âge</strong>.</p>

      <h2>Les Quatre Grandes Étapes Anthropométriques</h2>
      <div class="my-6 space-y-4">
        <div class="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[var(--accent)]">1. Jeune Adulte (20 à 39 Ans) : Pic Musculaire et Densité Osseuse</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">L'intervalle de référence de l'OMS (<strong>18,5 à 24,9 kg/m²</strong>) présente ici sa valeur diagnostique optimale.</p>
        </div>
        <div class="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[var(--accent)]">2. Âge Mûr (40 à 64 Ans) : Ralentissement Métabolique et Graisse Viscérale</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">Le métabolisme de base décline de 1 à 2 % par décennie, avec une redistribution adipeuse abdominale.</p>
        </div>
        <div class="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[var(--accent)]">3. Seniors (65 à 74 Ans) : Prévention de la Sarcopénie</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">L'obésité sarcopénique (faible masse musculaire et masse grasse élevée) impose de proscrire les régimes restrictifs drastiques non suivis.</p>
        </div>
        <div class="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[var(--accent)]">4. Grand Âge (75+ Ans) : Lutte Contre la Dénutrition et la Fragilité</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">Un IMC inférieur à 22 kg/m² constitue un signal d'alerte clinique majeur nécessitant une évaluation gériatrique immédiate.</p>
        </div>
      </div>

      <h2>Le Paradoxe de l'Obésité chez les Seniors</h2>
      <p>Chez les adultes de plus de 65 ans, la mortalité globale la plus faible est observée dans une zone comprise entre <strong>25,0 et 29,9 kg/m²</strong>. Ce léger surplus protège contre les fractures de hanche en absorbant les chocs et fournit une réserve d'énergie vitale en cas d'infection respiratoire ou d'opération chirurgicale.</p>

      <h2>Valeurs Cibles de Référence de l'IMC selon l'Âge</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table style="width: 100%; text-align: left; border-collapse: collapse; font-size: 0.875rem;">
          <thead>
            <tr style="background-color: #f5f5f5;">
              <th style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #1e293b; background-color: #f5f5f5;">Tranche d'Âge</th>
              <th style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #10b981; background-color: #f5f5f5;">IMC Optimal de Longévité</th>
              <th style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #1e293b; background-color: #f5f5f5;">Priorité Anthropométrique</th>
              <th style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #1e293b; background-color: #f5f5f5;">Examens Cliniques</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 600;">18 – 35 Ans</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #10b981;">19,0 – 24,5 kg/m²</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">Condition cardiorespiratoire et masse maigre</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">Bilan lipidique, tension artérielle</td>
            </tr>
            <tr>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 600;">36 – 54 Ans</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #10b981;">20,5 – 25,5 kg/m²</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">Prévention de la graisse viscérale</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">Glycémie à jeun, HbA1c, bilan hépatique</td>
            </tr>
            <tr>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 600;">55 – 64 Ans</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #10b981;">22,0 – 26,5 kg/m²</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">Maintien musculaire et articulaire</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">Épreuve d'effort, écho-Doppler carotidien</td>
            </tr>
            <tr>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 600;">65 – 74 Ans</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #10b981;">23,5 – 28,0 kg/m²</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">Prévention de la sarcopénie et équilibre</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">Ostéodensitométrie DEXA, dynamométrie</td>
            </tr>
            <tr>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 600; color: #464feb;">75+ Ans</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #10b981;">24,0 – 29,0 kg/m²</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">Densité nutritionnelle, prévention des chutes</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">Mini Nutritional Assessment (MNA), albuminémie</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Références Scientifiques</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Winter JE, et al. <em><a href="https://pubmed.ncbi.nlm.nih.gov/24451310/" target="_blank" rel="noopener noreferrer" style="color: #464feb; text-decoration: none;">BMI and all-cause mortality in older adults: a meta-analysis.</a></em> Am J Clin Nutr 2014; PMID: 24451310.</li>
        <li>Volkert D, et al. <em><a href="https://pubmed.ncbi.nlm.nih.gov/30352776/" target="_blank" rel="noopener noreferrer" style="color: #464feb; text-decoration: none;">ESPEN guideline on clinical nutrition in geriatrics.</a></em> Clin Nutr 2019; PMID: 30352776.</li>
      </ul>
`,
      "de": `
      <h2>Die Lebensspannen-Trajektorie: Wie das Alter die BMI-Interpretation verändert</h2>
      <p>Die Körperzusammensetzung des Menschen ist kein statischer Zustand, sondern unterliegt in jedem Lebensjahrzehnt physiologischen Transformationen. Während die mathematische Formel des Body-Mass-Index (Körpergewicht in kg geteilt durch Körpergröße in Metern zum Quadrat) für alle Altersgruppen von 20 bis 100 Jahren identisch bleibt, muss die <strong>medizinische Interpretation zwingend an altersbedingte biologische Veränderungen angepasst werden</strong>. Was für einen 22-jährigen Athleten ein optimaler BMI ist, kann bei einem 82-jährigen Senior bereits auf eine gefährliche Mangelernährung und Gebrechlichkeit hindeuten.</p>

      <h2>Die vier Hauptphasen der anthropometrischen Entwicklung</h2>
      <div class="my-6 space-y-4">
        <div class="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[var(--accent)]">1. Frühes Erwachsenenalter (20 bis 39 Jahre): Maximale Muskel- und Knochenmasse</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">In dieser Lebensphase erreichen Menschen ihre maximale Knochendichte und ihr höchstes natürliches Muskelmassenniveau. Der Standardbereich der WHO von 18,5 bis 24,9 kg/m² besitzt hier seine höchste diagnostische Validität. Erhöhte BMI-Werte spiegeln in diesem Alter primär eine positive Energiebilanz und Fettakkumulation wider.</p>
        </div>
        <div class="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[var(--accent)]">2. Mittleres Erwachsenenalter (40 bis 64 Jahre): Metabolischer Wandel & viszerale Fettumverteilung</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">Ab dem 40. Lebensjahr sinkt der Ruhe-Grundumsatz um etwa 1 bis 2 % pro Dekade. Hormonelle Umstellungen begünstigen die Einlagerung von viszeralem Fett im Bauchraum bei gleichzeitig schleichendem Abbau peripherer Muskelmasse.</p>
        </div>
        <div class="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[var(--accent)]">3. Höheres Erwachsenenalter (65 bis 74 Jahre): Risiko der sarkopenischen Adipositas</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">Im frühen Seniorenalter nimmt die Effizienz der muskulären Proteinsynthese ab. Ohne gezieltes Krafttraining verliert der Körper kontinuierlich Muskelmasse (Sarkopenie). Radikale Reduktionsdiäten sind in dieser Lebensphase kontraindiziert, da sie den Muskelabbau beschleunigen und das Sturzrisiko erhöhen.</p>
        </div>
        <div class="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[var(--accent)]">4. Hohes Seniorenalter (ab 75 Jahren): Schutz vor Gebrechlichkeit und Auszehrung</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">In dieser Phase ist ein unbeabsichtigter Gewichtsverlust (BMI &lt; 22 kg/m²) ein ernstzunehmendes Warnsignal. Ausreichende Energiereserves schützen vor Komplikationen bei Infektionen, Operationen und schenkelhalsnahen Frakturen.</p>
        </div>
      </div>

      <h2>Das geriatrische Adipositas-Paradoxon</h2>
      <p>Internationale geriatrische Studien belegen konsistent das sogenannte <strong>Adipositas-Paradoxon</strong>: Bei Senioren über 65 Jahren liegt die geringste Gesamtsterblichkeit nicht im schlanken Bereich von 20 bis 22 kg/m², sondern in der leichten Übergewichtszone von <strong>25,0 bis 29,9 kg/m²</strong>. Ein moderates Fettgewebspolster dient als überlebenswichtige Stoffwechselreserve bei akuten Erkrankungen und federt mechanische Erschütterungen bei Stürzen effektiv ab.</p>

      <h2>Altersstratifizierte BMI-Zielwerte für optimale Langlebigkeit</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table style="width: 100%; text-align: left; border-collapse: collapse; font-size: 0.875rem;">
          <thead>
            <tr style="background-color: #f5f5f5;">
              <th style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #1e293b; background-color: #f5f5f5;">Altersgruppe</th>
              <th style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #10b981; background-color: #f5f5f5;">Optimaler BMI-Bereich</th>
              <th style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #1e293b; background-color: #f5f5f5;">Anthropometrischer Fokus</th>
              <th style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #1e293b; background-color: #f5f5f5;">Klinische Screening-Prioritäten</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 600;">18 – 35 Jahre</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #10b981;">19,0 – 24,5 kg/m²</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">Kardiorespiratorische Fitness, Muskelaufbau</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">Basislipidprofil, Blutdrucküberwachung</td>
            </tr>
            <tr>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 600;">36 – 54 Jahre</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #10b981;">20,5 – 25,5 kg/m²</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">Prävention viszeraler Adipositas (Taille-zu-Größe &lt; 0,50)</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">Nüchternblutzucker, HbA1c, Leberwerte</td>
            </tr>
            <tr>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 600;">55 – 64 Jahre</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #10b981;">22,0 – 26,5 kg/m²</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">Erhalt der Skelettmuskulatur und Gelenkschonung</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">Belastungs-EKG, Karotis-Ultraschall</td>
            </tr>
            <tr>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 600;">65 – 74 Jahre</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #10b981;">23,5 – 28,0 kg/m²</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">Sarkopenie-Prävention, Gleichgewicht, Mobilität</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">DEXA-Knochendichtemessung, Handkraftmessung</td>
            </tr>
            <tr>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 600; color: #464feb;">75+ Jahre</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #10b981;">24,0 – 29,0 kg/m²</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">Nährstoffdichte, Sturzprophylaxe, Vermeidung von Frailty</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">Mini Nutritional Assessment (MNA), Serumalbumin</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Einfluss der altersbedingten Körpergrößenabnahme</h2>
      <p>Durch die Dehydratation der Bandscheiben und osteoporotische Veränderungen der Wirbelsäule verlieren Erwachsene ab dem 40. Lebensjahr etwa 1 bis 2 cm Körpergröße pro Dekade. Da die Körpergröße im BMI-Nenner quadriert wird, steigt der errechnete BMI rein rechnerisch um 1,0 bis 1,5 Einheiten an, selbst wenn das tatsächliche Fettgewebe völlig konstant geblieben ist.</p>

      <h2>Wissenschaftliche Referenzen</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Winter JE, et al. <em><a href="https://pubmed.ncbi.nlm.nih.gov/24451310/" target="_blank" rel="noopener noreferrer" style="color: #464feb; text-decoration: none;">BMI and all-cause mortality in older adults: a meta-analysis.</a></em> Am J Clin Nutr 2014; PMID: 24451310.</li>
        <li>Cruz-Jentoft AJ, et al. <em><a href="https://pubmed.ncbi.nlm.nih.gov/30312372/" target="_blank" rel="noopener noreferrer" style="color: #464feb; text-decoration: none;">Sarcopenia: revised European consensus.</a></em> Age Ageing 2019; PMID: 30312372.</li>
      </ul>
`,
      "ko": `
      <h2>생애주기 궤적: 연령이 체질량지수(BMI) 해석에 미치는 임상적 영향</h2>
      <p>신체 조성(Body Composition)은 생애 전 주기에 걸쳐 끊임없이 변화합니다. 성인 표준 BMI 공식(체중 kg ÷ 신장 m²)은 수학적으로 동일하지만, <strong>그 의학적 해석은 연령대별 생물학적 변화에 반드시 맞춰져야 합니다</strong>. 22세 청년에게 이상적인 BMI가 82세 고령자에게는 심각한 영양실조와 노쇠(Frailty)의 징후가 될 수 있습니다.</p>

      <h2>연령대별 4대 신체 조성 변화 단계</h2>
      <div class="my-6 space-y-4">
        <div class="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[var(--accent)]">1. 초기 성인기 (20~39세): 최고 골밀도 및 근육 발달기</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">골밀도와 골격근량이 정점에 달하는 시기입니다. 세계보건기구(WHO) 기준 <strong>18.5~24.9 kg/m²</strong>가 가장 정확한 건강 지표로 작용합니다.</p>
        </div>
        <div class="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[var(--accent)]">2. 중년기 (40~64세): 대사 저하 및 내장지방 재분포</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">기초대사량이 10년마다 1~2%씩 감소하며 호르몬 변화로 인해 복부 내장지방이 급증하고 근육량은 서서히 감소합니다.</p>
        </div>
        <div class="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[var(--accent)]">3. 초기 고령기 (65~74세): 근감소성 비만(Sarcopenic Obesity) 위험</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">단백질 합성 능력이 저하되어 근감소증이 발생하기 쉽습니다. 무리한 저칼로리 다이어트는 근육 손실과 낙상 위험을 초래하므로 피해야 합니다.</p>
        </div>
        <div class="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[var(--accent)]">4. 후기 고령기 (75세 이상): 체중 감소 및 쇠약 예방</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">BMI 22 kg/m² 미만은 감염증 및 고관절 골절 후 사망 위험을 크게 높입니다. 체중 감량보다 충분한 영양 비축이 최우선입니다.</p>
        </div>
      </div>

      <h2>노인 비만의 역설 (Geriatric Obesity Paradox)</h2>
      <p>65세 이상 노년층에서는 가벼운 과체중 구간인 <strong>25.0~29.9 kg/m²</strong>에서 전체 원인 사망률이 가장 낮게 나타납니다. 적절한 지방층은 낙상 시 충격을 흡수해 골절을 예방하고, 급성 질환 시 생명을 지키는 대사 에너지 비축원 역할을 합니다.</p>

      <h2>연령대별 권장 최적 BMI 목표치</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table style="width: 100%; text-align: left; border-collapse: collapse; font-size: 0.875rem;">
          <thead>
            <tr style="background-color: #f5f5f5;">
              <th style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #1e293b; background-color: #f5f5f5;">연령대</th>
              <th style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #10b981; background-color: #f5f5f5;">장수 최적 BMI 목표치</th>
              <th style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #1e293b; background-color: #f5f5f5;">주요 신체 관리 초점</th>
              <th style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #1e293b; background-color: #f5f5f5;">임상 선별 검사</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 600;">18 – 35세</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #10b981;">19.0 – 24.5 kg/m²</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">심폐 지구력, 근력 및 근육량 형성</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">기본 지질 패널, 혈압 측정</td>
            </tr>
            <tr>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 600;">36 – 54세</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #10b981;">20.5 – 25.5 kg/m²</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">내장지방 예방 (허리둘레/키 비율 &lt; 0.50)</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">공복 혈당, 당화혈색소(HbA1c), 간기능 검사</td>
            </tr>
            <tr>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 600;">55 – 64세</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #10b981;">22.0 – 26.5 kg/m²</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">골격근 보존, 관절 보호</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">심혈관 부하 검사, 경동맥 초음파</td>
            </tr>
            <tr>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 600;">65 – 74세</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #10b981;">23.5 – 28.0 kg/m²</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">근감소증 예방, 균형 감각 유지</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">DEXA 골밀도 검사, 악력 측정</td>
            </tr>
            <tr>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 600; color: #464feb;">75세 이상</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #10b981;">24.0 – 29.0 kg/m²</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">영양 밀도, 낙상 예방, 노쇠 방지</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">간이 영양 평가(MNA), 혈청 알부민</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>노화에 따른 신장 수축과 BMI 왜곡</h2>
      <p>척추 디스크 수분 감소로 40세 이후 10년마다 1~2cm의 키가 줄어들며, 분모(신장의 제곱) 감소로 인해 실제 지방 증가 없이도 BMI 수치가 1.0~1.5단위 인위적으로 상승합니다.</p>

      <h2>학술 참고문헌</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Winter JE, et al. <em><a href="https://pubmed.ncbi.nlm.nih.gov/24451310/" target="_blank" rel="noopener noreferrer" style="color: #464feb; text-decoration: none;">BMI and all-cause mortality in older adults: a meta-analysis.</a></em> Am J Clin Nutr 2014; PMID: 24451310.</li>
        <li>Cruz-Jentoft AJ, et al. <em><a href="https://pubmed.ncbi.nlm.nih.gov/30312372/" target="_blank" rel="noopener noreferrer" style="color: #464feb; text-decoration: none;">Sarcopenia: revised European consensus.</a></em> Age Ageing 2019; PMID: 30312372.</li>
      </ul>
`,
      "hi": `
      <h2>जीवन चक्र और बीएमआई: उम्र बढ़ने के साथ बॉडी मास इंडेक्स का नैदानिक मूल्यांकन</h2>
      <p>शारीरिक संरचना (Body Composition) जीवन भर स्थिर नहीं रहती; यह उम्र के प्रत्येक दशक के साथ जैविक रूप से बदलती है। यद्यपि मानक वयस्क बॉडी मास इंडेक्स (BMI) का गणितीय सूत्र—किलोग्राम में वजन को मीटर में ऊंचाई के वर्ग से विभाजित करना—20 से 100 वर्ष की आयु तक समान रहता है, लेकिन इसका <strong>नैदानिक और चिकित्सीय मूल्यांकन आयु-विशिष्ट शारीरिक परिवर्तनों के आधार पर किया जाना अनिवार्य है</strong>। 22 वर्षीय एथलीट के लिए जो बीएमआई आदर्श और दीर्घायु को बढ़ावा देने वाला माना जाता है, वही बीएमआई 82 वर्षीय बुजुर्ग के लिए गंभीर कुपोषण और दुर्बलता (Frailty) का संकेत हो सकता है।</p>
      <p>नीचे, हम मानव शारीरिक संरचना के चार प्रमुख जीवन चरणों का विश्लेषण करेंगे, <em>जेरियाट्रिक ओबेसिटी पैराडॉक्स</em> (बुजुर्गों में मोटापे का विरोधाभास) के वैज्ञानिक कारणों को समझेंगे, यह जानेंगे कि उम्र के साथ रीढ़ की हड्डी में संकुचन से बीएमआई कैसे प्रभावित होता है, और साक्ष्य-आधारित आयु-विशिष्ट संदर्भ तालिका प्रस्तुत करेंगे।</p>

      <h2>शारीरिक संरचना के चार प्रमुख जीवन पड़ाव</h2>
      <div class="my-6 space-y-4">
        <div class="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[var(--accent)]">1. शुरुआती वयस्कता (20 से 39 वर्ष): चरम अस्थि घनत्व और पेशी विकास</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">शुरुआती वयस्कता के दौरान मानव शरीर अपने उच्चतम बोन मिनरल डेंसिटी और अधिकतम कंकाल पेशी द्रव्यमान (Skeletal Muscle Mass) पर होता है। विश्व स्वास्थ्य संगठन (WHO) की मानक स्वस्थ श्रेणी <strong>18.5 से 24.9 kg/m²</strong> इस आयु वर्ग में सबसे सटीक नैदानिक परिणाम देती है। इस उम्र में मेटाबॉलिज्म तेज होता है और विकास हार्मोन व टेस्टोस्टेरोन/एस्ट्रोजन मजबूत होते हैं, जिससे अतिरिक्त वजन मुख्य रूप से कैलोरी सरप्लस और वसा संचय को दर्शाता है।</p>
        </div>
        <div class="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[var(--accent)]">2. मध्य वयस्कता (40 से 64 वर्ष): चयापचय में गिरावट और आंतों की चर्बी (विसेरल फैट) का संचय</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">40 वर्ष की आयु के बाद रेस्टिंग मेटाबॉलिक रेट प्रति दशक लगभग 1% से 2% कम हो जाती है। यह गिरावट मुख्य रूप से मांसपेशियों के धीमे क्षय (सार्कोपेनिया) और शारीरिक गतिविधि की कमी के कारण होती है। महिलाओं में मेनोपॉज के दौरान एस्ट्रोजन कम होने से वसा नितंबों और जांघों से हटकर पेट (विसेरल एरिया) में जमा होने लगती है। पुरुषों में टेस्टोस्टेरोन घटने से आंतों के आसपास फैट जमा होता है। इस अवस्था में व्यक्ति का कुल वजन 70 किलो ही रह सकता है, लेकिन चुपके से 4 किलो मांसपेशी कम होकर 4 किलो हानिकारक विसेरल फैट बढ़ सकता है।</p>
        </div>
        <div class="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[var(--accent)]">3. वरिष्ठ वयस्कता (65 से 74 वर्ष): सार्कोपेनिक ओबेसिटी का उद्भव</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">वरिष्ठ उम्र में आहार के प्रोटीन को मांसपेशियों में बदलने की शारीरिक क्षमता धीमी हो जाती है। यदि नियमित स्ट्रेंथ या रेजिस्टेंस व्यायाम न किया जाए, तो हर दशक में 3% से 5% तक मांसपेशियां कम होने लगती हैं। इसे सार्कोपेनिक ओबेसिटी कहा जाता है—जहां शरीर में वसा अधिक होती है लेकिन मांसपेशियां बेहद कमजोर होती हैं। इस आयु वर्ग में डॉक्टरों द्वारा बिना डॉक्टरी सलाह के सख्त कैलोरी-प्रतिबंधक डाइटिंग की मनाही होती है, क्योंकि तेजी से वजन घटने से मांसपेशियों का नुकसान और गिरने का जोखिम बढ़ जाता है।</p>
        </div>
        <div class="p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
          <h3 class="text-base font-bold text-[var(--accent)]">4. उन्नत वृद्धावस्था (75+ वर्ष): दुर्बलता और अनपेक्षित वजन घटने का खतरा</h3>
          <p class="text-sm text-[var(--foreground)] mt-1">75 वर्ष से अधिक उम्र में अनपेक्षित वजन घटना (Involuntary Weight Loss) एक गंभीर चिकित्सीय चेतावनी संकेत है। 22 kg/m² से कम बीएमआई श्वसन संक्रमण, कूल्हे के फ्रैक्चर और सर्जरी के बाद जटिलताओं के खतरे को काफी बढ़ा देता है। इस उम्र में वजन घटाने के पारंपरिक लक्ष्यों की तुलना में पोषण संबंधी भंडार (Nutritional Reserve) को बनाए रखना सर्वोच्च प्राथमिकता होती है।</p>
        </div>
      </div>

      <h2>जेरियाट्रिक ओबेसिटी पैराडॉक्स: बुजुर्गों के लिए थोड़ा अधिक बीएमआई क्यों सुरक्षात्मक है?</h2>
      <p>वृद्ध स्वास्थ्य महामारी विज्ञान (Geriatric Epidemiology) के सबसे ठोस निष्कर्षों में से एक <strong>"मोटापा विरोधाभास" (Obesity Paradox)</strong> है। दर्जनों बड़े अंतरराष्ट्रीय अनुसंधानों में यह पाया गया है कि 65 वर्ष या उससे अधिक आयु के वयस्कों में सबसे कम मृत्यु दर मानक आदर्श 21 से 23 kg/m² पर नहीं, बल्कि <strong>25.0 से 29.9 kg/m²</strong> (जिसे पारंपरिक रूप से 'ओवरवेट' कहा जाता है) के बीच दर्ज की जाती है।</p>
      <p>जेरियाट्रिशियन इसके पीछे निम्नलिखित सुरक्षात्मक जैविक कारण बताते हैं:</p>
      <ul>
        <li><strong>मेटाबॉलिक रिजर्व क्षमता:</strong> निमोनिया, सेप्सिस, बड़ी आर्थोपेडिक सर्जरी या कैंसर के इलाज जैसी गंभीर बीमारियों के दौरान शरीर के मध्यम वसा भंडार जीवन रक्षक ऊर्जा प्रदान करते हैं।</li>
        <li><strong>हड्डियों की सुरक्षा (यांत्रिक कुशनिंग):</strong> कूल्हे के आसपास की सबक्यूटेनियस वसा गिरने के दौरान झटके को अवशोषित करती है, जिससे कूल्हे के फ्रैक्चर की संभावना सीधे तौर पर कम हो जाती है।</li>
        <li><strong>कुपोषण से बचाव:</strong> थोड़े अधिक वजन वाले बुजुर्गों में माइक्रोन्यूट्रिएंट्स, जिंक और आवश्यक विटामिन्स की कमी होने की संभावना बहुत कम होती है, जिससे रोग प्रतिरोधक क्षमता सुरक्षित रहती है।</li>
      </ul>

      <h2>उम्र के अनुसार अनुशंसित बीएमआई संदर्भ तालिका (Age-Stratified BMI Targets)</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table style="width: 100%; text-align: left; border-collapse: collapse; font-size: 0.875rem;">
          <thead>
            <tr style="background-color: #f5f5f5;">
              <th style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #1e293b; background-color: #f5f5f5;">आयु वर्ग</th>
              <th style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #10b981; background-color: #f5f5f5;">दीर्घायु हेतु आदर्श बीएमआई</th>
              <th style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #1e293b; background-color: #f5f5f5;">प्राथमिक शारीरिक फोकस</th>
              <th style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #1e293b; background-color: #f5f5f5;">नैदानिक स्क्रीनिंग प्राथमिकताएं</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 600;">18 – 35 वर्ष</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #10b981;">19.0 – 24.5 kg/m²</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">कार्डियोरेस्पिरेटरी फिटनेस, लीन मांसपेशी निर्माण</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">बेसलाइन लिपिड प्रोफाइल, ब्लड प्रेशर जांच</td>
            </tr>
            <tr>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 600;">36 – 54 वर्ष</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #10b981;">20.5 – 25.5 kg/m²</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">विसेरल फैट की रोकथाम, कमर-से-कद अनुपात &lt; 0.50</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">फास्टिंग ब्लड ग्लूकोज, HbA1c, लिवर फंक्शन टेस्ट</td>
            </tr>
            <tr>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 600;">55 – 64 वर्ष</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #10b981;">22.0 – 26.5 kg/m²</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">मांसपेशियों का संरक्षण, जोड़ों का लचीलापन</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">कार्डियोवस्कुलर स्ट्रेस टेस्ट, कैरोटिड अल्ट्रासाउंड</td>
            </tr>
            <tr>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 600;">65 – 74 वर्ष</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #10b981;">23.5 – 28.0 kg/m²</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">सार्कोपेनिया रोकथाम, संतुलन, क्रियात्मक गतिशीलता</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">DEXA बोन डेंसिटी स्कैन, ग्रिप स्ट्रेंथ टेस्ट</td>
            </tr>
            <tr>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 600; color: #464feb;">75+ वर्ष</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px; font-weight: 700; color: #10b981;">24.0 – 29.0 kg/m²</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">पोषक तत्वों का घनत्व, गिरने से बचाव, दुर्बलता निवारण</td>
              <td style="border: 1px solid #e6e6e6; padding: 12px;">मिनी न्यूट्रिशनल असेसमेंट (MNA), सीरम एल्ब्यूमिन जांच</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>उम्र के साथ लंबाई में संकुचन (Stature Compression) का बीएमआई पर प्रभाव</h2>
      <p>उम्र बढ़ने के साथ रीढ़ की हड्डियों के बीच मौजूद कार्टिलेज डिस्क में पानी की मात्रा कम होने लगती है और ऑस्टियोपोरोसिस के कारण रीढ़ में हल्का झुकाव आ जाता है। औसतन, 40 वर्ष की आयु के बाद वयस्क प्रति दशक लगभग 1 से 2 सेमी लंबाई खो देते हैं, और 75 वर्ष तक यह कमी 3 से 5 सेमी तक हो सकती है। क्योंकि बीएमआई सूत्र में ऊंचाई का वर्ग हर (Denominator) में होता है, इसलिए लंबाई घटने से बिना किसी अतिरिक्त चर्बी बढ़े भी बीएमआई कृत्रिम रूप से 1.0 से 1.5 अंक बढ़ जाता है। बुजुर्गों के साथ काम करने वाले डॉक्टर वास्तविक कद का अनुमान लगाने के लिए आर्म स्पैन (हाथों का फैलाव) या घुटने की ऊंचाई मापते हैं।</p>

      <h2>अक्सर पूछे जाने वाले महत्वपूर्ण प्रश्न (Frequently Asked Questions)</h2>
      <div class="space-y-4 my-6">
        <div>
          <h3 class="text-base font-bold text-[var(--foreground)]">क्या 70 वर्ष के व्यक्ति को 27 बीएमआई पर वजन कम करने की कोशिश करनी चाहिए?</h3>
          <p class="text-sm text-[var(--muted-foreground)]">गंभीर गतिशीलता विकार या अनियंत्रित टाइप 2 डायबिटीज की अनुपस्थिति में, अधिकांश जेरियाट्रिशियन 27 के बीएमआई पर वजन घटाने के बजाय स्थिर वजन बनाए रखने की सलाह देते हैं। बुजुर्गों में अचानक डाइटिंग से महत्वपूर्ण मांसपेशियां और हड्डियों का घनत्व घट सकता है।</p>
        </div>
        <div>
          <h3 class="text-base font-bold text-[var(--foreground)]">बुजुर्गों में सबसे खतरनाक वजन पैटर्न कौन सा है?</h3>
          <p class="text-sm text-[var(--muted-foreground)]">6 से 12 महीनों के भीतर बिना किसी प्रयास के 5% से अधिक वजन कम होना (Involuntary Weight Loss) दुर्बलता, अवशोषण विकार या गंभीर बीमारी का प्रमुख नैदानिक संकेतक है, जिसके लिए तत्काल चिकित्सा जांच की आवश्यकता होती है।</p>
        </div>
      </div>

      <h2>प्राथमिक वैज्ञानिक संदर्भ (Scientific References)</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Winter JE, MacInnis RJ, Wattanapenpaiboon N, Nowson CA. <em><a href="https://pubmed.ncbi.nlm.nih.gov/24451310/" target="_blank" rel="noopener noreferrer" style="color: #464feb; text-decoration: none;">BMI and all-cause mortality in older adults: a meta-analysis.</a></em> Am J Clin Nutr 2014; 99(4):875-890. PMID: 24451310.</li>
        <li>Cruz-Jentoft AJ, Bahat G, Bauer J, et al. <em><a href="https://pubmed.ncbi.nlm.nih.gov/30312372/" target="_blank" rel="noopener noreferrer" style="color: #464feb; text-decoration: none;">Sarcopenia: revised European consensus on definition and diagnosis.</a></em> Age Ageing 2019; 48(1):16-31. PMID: 30312372.</li>
        <li>Volkert D, Beck AM, Cederholm T, et al. <em><a href="https://pubmed.ncbi.nlm.nih.gov/30352776/" target="_blank" rel="noopener noreferrer" style="color: #464feb; text-decoration: none;">ESPEN guideline on clinical nutrition and hydration in geriatrics.</a></em> Clin Nutr 2019; 38(1):10-47. PMID: 30352776.</li>
      </ul>
`
    }
  },

  "bmi-calculator-teens": {
    "datePublished": "2026-05-01",
    "dateModified": "2026-10-25",
    "title": {
      "en": "Teen BMI Calculator Guide: Pediatric Percentiles & Puberty Growth",
      "hi": "किशोरों के लिए बीएमआई गाइड: पीडियाट्रिक पर्सेंटाइल व प्यूबर्टी ग्रोथ",
      "ko": "청소년 BMI 계산기 완벽 가이드: 연령별 성장 백분위수와 사춘기 변화",
      "de": "BMI für Teenager: Perzentilkurven & Wachstum in der Pubertät",
      "es": "Calculadora de IMC para Adolescentes: Percentiles CDC y Pubertad",
      "fr": "Calculateur d'IMC pour Adolescents : Percentiles et Croissance"
    },
    "category": {
      "en": "Pediatric & Teen Health",
      "hi": "किशोर स्वास्थ्य एवं विकास",
      "ko": "청소년 및 소아 건강",
      "de": "Jugendgesundheit & Perzentile",
      "es": "Salud de Adolescentes",
      "fr": "Santé des Adolescents"
    },
    "description": {
      "en": "Evidence-based guide to adolescent BMI screening. Learn why static adult cut-offs fail for teens, how CDC and WHO BMI-for-Age percentiles work, the role of Tanner pubertal staging, and healthy adolescent nutrition.",
      "hi": "किशोरों (13-19 वर्ष) के बीएमआई की संपूर्ण प्रमाण-आधारित गाइड। जानें कि वयस्कों के कट-ऑफ किशोरों पर क्यों लागू नहीं होते, सीडीसी पर्सेंटाइल चार्ट कैसे देखें और स्वस्थ खानपान के नियम।",
      "ko": "청소년(13~19세) 체질량지수 평가를 위한 가이드. 성인 고정 기준 대신 연령별 백분위수를 사용하는 이유와 탠너(Tanner) 사춘기 성숙도 단계의 중요성을 안내합니다.",
      "de": "Evidenzbasierter Leitfaden zum BMI bei Jugendlichen. Warum feste Erwachsenen-Grenzwerte ungeeignet sind und wie CDC-Perzentilkurven Wachstumsphasen berücksichtigen.",
      "es": "Guía basada en evidencia sobre el IMC en adolescentes. Por qué los cortes de adultos no sirven, cómo interpretar los percentiles de los CDC y la influencia del desarrollo puberal.",
      "fr": "Guide fondé sur des preuves sur l'IMC des adolescents. Pourquoi les seuils adultes sont inadaptés et comment interpréter les courbes de percentiles de croissance de l'OMS et des CDC."
    },
    "contentHtml": {
      "en": `
      <h2>Pediatric Anthropometry: Why Adolescent BMI Differs from Adult Screening</h2>
      <p>Evaluating the growth, physical development, and weight status of teenagers (adolescents aged 13 to 19) requires a fundamentally different scientific methodology than adult Body Mass Index screening. In adults aged 20 and older, BMI categories use fixed, static cut-off numbers (such as 18.5 for underweight, 25.0 for overweight, and 30.0 for obesity). In teenagers, however, <strong>fixed numerical thresholds cannot be clinically applied</strong>.</p>
      <p>During adolescence, the human body undergoes rapid pubertal growth spurts, dynamic skeletal elongation, endocrine hormone-driven alterations in adipose distribution, and fluctuating ratios of muscle mass to bone mineral density. Consequently, pediatricians, endocrinologists, and public health agencies—including the Centers for Disease Control and Prevention (CDC) and World Health Organization (WHO)—utilize <strong>BMI-for-Age Percentiles</strong> to assess teenage weight status.</p>

      <h2>The Science of CDC & WHO BMI-for-Age Growth Percentiles</h2>
      <p>A teenager's Body Mass Index is calculated using the standard formula (<code>Weight / Height²</code>), but the resulting score is plotted against national and international reference growth charts consisting of thousands of healthy youth evaluated longitudinally. The teenager receives a <strong>percentile ranking</strong> comparing their score to peers of the exact same age (in months) and biological gender profile:</p>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">CDC Percentile Range</th>
              <th class="p-3">Pediatric Weight Classification</th>
              <th class="p-3">Interpretation & Guidance</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)]">
            <tr>
              <td class="p-3 font-mono text-blue-500 font-bold">&lt; 5th Percentile</td>
              <td class="p-3 font-semibold">Underweight</td>
              <td class="p-3">Screen for inadequate caloric intake, disordered eating, celiac disease, or chronic conditions</td>
            </tr>
            <tr>
              <td class="p-3 font-mono text-emerald-500 font-bold">5th to 84th Percentile</td>
              <td class="p-3 font-semibold text-emerald-500">Healthy Normal Weight</td>
              <td class="p-3">Optimal growth trajectory; reinforce balanced whole-food nutrition and daily physical play</td>
            </tr>
            <tr>
              <td class="p-3 font-mono text-amber-500 font-bold">85th to 94th Percentile</td>
              <td class="p-3 font-semibold text-amber-500">Overweight</td>
              <td class="p-3">Evaluate lifestyle habits, screen for family cardiometabolic history; avoid restrictive dieting</td>
            </tr>
            <tr>
              <td class="p-3 font-mono text-rose-500 font-bold">&ge; 95th Percentile</td>
              <td class="p-3 font-semibold text-rose-500">Obesity</td>
              <td class="p-3">Comprehensive clinical evaluation: blood pressure, fasting lipids, hepatic enzymes, lifestyle support</td>
            </tr>
            <tr>
              <td class="p-3 font-mono text-rose-700 font-bold">&ge; 120% of 95th Percentile</td>
              <td class="p-3 font-semibold text-rose-700">Severe Obesity (Class II/III)</td>
              <td class="p-3">Specialized multidisciplinary pediatric endocrinology and metabolic support indicated</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Pubertal Maturation: The Influence of Tanner Staging</h2>
      <p>A critical confounding variable in teen BMI assessment is <strong>biological maturity vs. chronological age</strong>. Two 14-year-old boys of the same age can differ dramatically in pubertal development:</p>
      <ul>
        <li><strong>Tanner Stage 1–2 (Pre-pubertal / Early Puberty):</strong> Has not yet experienced peak height velocity. Carries lower bone density and less muscular development.</li>
        <li><strong>Tanner Stage 4–5 (Late Puberty / Mature):</strong> Has completed peak height velocity, experienced substantial testosterone-driven muscular hypertrophy, and increased skeletal bone density.</li>
      </ul>
      <p>A mature 14-year-old athlete in Tanner Stage 5 may register a higher BMI-for-age percentile purely due to early pubertal muscle accumulation, whereas an early-stage peer may appear leaner. Pediatric clinicians always assess pubertal maturity staging (Tanner stages) before making clinical weight diagnoses.</p>

      <h2>Practical Example: Reading Teen Percentile Curves</h2>
      <div class="my-6 p-6 rounded-xl border border-[var(--border)] bg-[var(--card)] font-mono text-sm leading-relaxed space-y-2">
        <p class="font-bold text-[var(--accent)]">Case Study: 15-Year-Old Female (Chronological Age: 15 Years, 4 Months):</p>
        <p class="text-[var(--foreground)]">Stature: 162 cm (5'4") | Weight: 55 kg (121.3 lbs)</p>
        <p class="text-[var(--muted-foreground)]">&bull; Calculated Raw BMI: 55 / (1.62)² = <strong>20.95 kg/m²</strong></p>
        <p class="text-[var(--muted-foreground)]">&bull; On CDC Adult Chart: 21.0 is considered "Normal Weight" (18.5–24.9)</p>
        <p class="text-[var(--muted-foreground)]">&bull; On CDC Teen Girl Percentile Chart: 20.95 corresponds to approximately the <strong>58th Percentile</strong></p>
        <p class="text-[var(--foreground)] font-bold">Clinical Assessment: The teenager sits comfortably within the healthy weight envelope (5th to 84th percentile), tracking along a normal growth trajectory.</p>
      </div>

      <h2>Healthy Lifestyle Support for Teens: What Parents and Caregivers Should Know</h2>
      <p>Clinical guidelines strictly caution against placing adolescents on restrictive low-calorie diets. Caloric deprivation during puberty impairs linear skeletal growth, decreases peak bone mass accrual, and significantly elevates the risk of developing clinical eating disorders. Recommended strategies emphasize:</p>
      <ol class="space-y-2 my-4">
        <li><strong>Whole-Family Nutrition:</strong> Eliminate sugar-sweetened beverages (sodas, sweetened juices, energy drinks) and ultra-processed snacks from the household environment rather than singling out the adolescent.</li>
        <li><strong>Daily Physical Activity:</strong> Encourage at least 60 minutes of moderate-to-vigorous physical activity daily, incorporating sports, cycling, swimming, or introductory resistance training for neuromuscular strength.</li>
        <li><strong>Adequate Sleep Hygiene:</strong> Ensure 8 to 10 hours of uninterrupted sleep per night. Chronic sleep restriction disrupts leptin and ghrelin signaling, promoting daytime carbohydrate cravings.</li>
      </ol>

      <h2>Frequently Asked Questions Regarding Teenage BMI</h2>
      <div class="space-y-4 my-6">
        <div>
          <h3 class="text-base font-bold text-[var(--foreground)]">At what age does a person transition to adult BMI charts?</h3>
          <p class="text-sm text-[var(--muted-foreground)]">At age 20. Through age 19 years and 11 months, CDC and WHO recommend utilizing pediatric percentile growth curves. Starting at exact age 20, the standard adult thresholds (18.5, 25.0, 30.0) apply.</p>
        </div>
        <div>
          <h3 class="text-base font-bold text-[var(--foreground)]">What if a teen's BMI percentile jumps sharply within a single year?</h3>
          <p class="text-sm text-[var(--muted-foreground)]">A sudden upward or downward shift crossing two major percentile curves (e.g., jumping from the 50th to the 88th percentile) warrants a consultation with a pediatrician to evaluate thyroid function, lifestyle changes, or pubertal timing.</p>
        </div>
      </div>

      <h2>Scientific References</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Kuczmarski RJ, Ogden CL, Guo SS, et al. <em>2000 CDC Growth Charts for the United States: methods and development.</em> Vital Health Stat 11 2002; (246):1-190.</li>
        <li>de Onis M, Onyango AW, Borghi E, et al. <em>Development of a WHO growth reference for school-aged children and adolescents.</em> Bull World Health Organ 2007; 85(9):660-667.</li>
        <li>Hampl SE, Hassink SG, Skinner AC, et al. <em>Clinical Practice Guideline for the Evaluation and Treatment of Children and Adolescents With Obesity.</em> Pediatrics 2023; 151(2):e2022060640.</li>
      </ul>
`,
      "es": `
      <h2>Cómo Evaluar el IMC en Adolescentes mediante Percentiles</h2>
      <p>En jóvenes de 13 a 19 años no se aplican los puntos de corte fijos de adultos. El crecimiento rápido y la maduración puberal exigen utilizar las <strong>curvas de percentiles de IMC para la edad</strong> de los CDC y la OMS.</p>
      <ul>
        <li><strong>Bajo Peso:</strong> &lt; percentil 5</li>
        <li><strong>Peso Saludable:</strong> percentil 5 a 84</li>
        <li><strong>Sobrepeso:</strong> percentil 85 a 94</li>
        <li><strong>Obesidad:</strong> &ge; percentil 95</li>
      </ul>
    `,
      "fr": `
      <h2>L'Évaluation de l'IMC chez les Adolescents par Percentiles</h2>
      <p>Chez les 13-19 ans, le diagnostic de corpulence repose impérativement sur les <strong>courbes de percentiles de corpulence</strong> qui prennent en compte l'âge exact en mois et le sexe biologique.</p>
    `,
      "de": `
      <h2>Pädiatrische Anthropometrie: Warum Jugendliche nicht mit Erwachsenenwerten beurteilt werden dürfen</h2>
      <p>Die Beurteilung des Wachstums, der körperlichen Reifung und des Gewichtsstatus von Jugendlichen (Heranwachsende im Alter von 13 bis 19 Jahren) erfordert eine völlig andere wissenschaftliche Methodik als bei Erwachsenen. Während bei Erwachsenen ab 20 Jahren starre Grenzwerte gelten (18,5 für Untergewicht, 25,0 für Übergewicht und 30,0 für Adipositas), können <strong>feste numerische Schwellenwerte bei Jugendlichen nicht klinisch angewendet werden</strong>.</p>
      <p>Während der Pubertät erlebt der Körper dynamische Wachstumsschübe, eine Verlängerung der Röhrenknochen, hormonell gesteuerte Veränderungen der Fettverteilung und starke Schwankungen im Verhältnis zwischen Muskelmasse und Knochendichte. Kinderärzte und Fachgesellschaften (wie die Arbeitsgemeinschaft Adipositas im Kindes- und Jugendalter AGA, CDC und WHO) verwenden daher <strong>alters- und geschlechtsspezifische BMI-Perzentilen</strong>.</p>

      <h2>Die Klassifikation nach Perzentilen</h2>
      <div class="my-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[var(--border)] bg-[var(--muted)] font-bold text-[var(--foreground)]">
              <th class="p-3">Perzentilbereich</th>
              <th class="p-3">Pädiatrische Einstufung</th>
              <th class="p-3">Klinische Handlungsempfehlung</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[var(--border)]">
            <tr>
              <td class="p-3 font-mono text-blue-500 font-bold">&lt; 10. Perzentile</td>
              <td class="p-3 font-semibold">Untergewicht</td>
              <td class="p-3">Ernährungsanamnese, Ausschluss von Zöliakie, chronischen Erkrankungen oder Essstörungen</td>
            </tr>
            <tr>
              <td class="p-3 font-mono text-emerald-500 font-bold">10. bis 84. Perzentile</td>
              <td class="p-3 font-semibold text-emerald-500">Normalgewicht</td>
              <td class="p-3">Gesunde physiologische Entwicklung; Förderung von ausgewogener Ernährung und Sport</td>
            </tr>
            <tr>
              <td class="p-3 font-mono text-amber-500 font-bold">85. bis 94. Perzentile</td>
              <td class="p-3 font-semibold text-amber-500">Übergewicht</td>
              <td class="p-3">Überprüfung von Alltagsaktivität und Bildschirmzeit; keine restriktiven Reduktionsdiäten</td>
            </tr>
            <tr>
              <td class="p-3 font-mono text-rose-500 font-bold">&ge; 95. Perzentile</td>
              <td class="p-3 font-semibold text-rose-500">Adipositas</td>
              <td class="p-3">Pädiatrische Abklärung von Blutdruck, Blutzucker und Leberwerten; multimodale Schulung</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Der Einfluss der Tanner-Stadien auf die biologische Reifung</h2>
      <p>Ein wesentlicher Störfaktor bei der Beurteilung jugendlicher BMI-Werte ist der Unterschied zwischen <strong>biologischem Entwicklungsstand und kalendarischem Alter</strong>. Zwei 14-jährige Jugendliche gleichen Alters können sich in völlig unterschiedlichen pubertären Entwicklungsstadien (Tanner-Stadien) befinden: Ein Junge in Tanner-Stufe 5 besitzt bereits eine ausgeprägte, testosterongesteuerte Muskelmasse und Knochendichte, was seinen BMI rein rechnerisch anhebt, ohne dass Übergewicht vorliegt. Erfahrene Pädiater beurteilen den BMI daher stets im Kontext der körperlichen Reifezeichen.</p>

      <h2>Handlungsempfehlungen für Eltern: Gesunder Lebensstil ohne Diätzwang</h2>
      <p>Medizinische Leitlinien warnen ausdrücklich davor, Jugendliche auf strenge kalorienreduzierte Diäten zu setzen. Ein Nährstoffdefizit während des pubertären Wachstumsschubs gefährdet das Längenwachstum, verringert die Knochendichte und erhöht das Risiko für Essstörungen drastisch. Im Vordergrund stehen:</p>
      <ul class="list-disc pl-5 my-4 space-y-2 text-sm text-[var(--muted-foreground)]">
        <li><strong>Gesunde Familienküche:</strong> Verzicht auf zuckerhaltige Softdrinks und hochverarbeitete Snacks im Haushalt, ohne das Kind zu isolieren oder zu stigmatisieren.</li>
        <li><strong>Tägliche Bewegung:</strong> Mindestens 60 Minuten moderate bis intensive Alltagsbewegung oder Sportverein.</li>
        <li><strong>Ausreichender Schlaf:</strong> 8 bis 10 Stunden Schlaf zur hormonellen Regeneration und Appetitregulation.</li>
      </ul>
    `,
      "ko": `
      <h2>청소년 BMI 평가: 연령별 성장 백분위수의 과학</h2>
      <p>13~19세 청소년은 급격한 신체 성장과 사춘기 성숙도를 겪기 때문에 고정 수치 대신 질병관리청 및 CDC <strong>성장 도표 백분위수(5~84 백분위수 정상)</strong>로 판정합니다.</p>
    `,
      "hi": `
      <h2>किशोरों के लिए बीएमआई गाइड: पीडियाट्रिक पर्सेंटाइल व प्यूबर्टी ग्रोथ</h2>
      <p>किशोरावस्था (आयु 13 से 19 वर्ष) के दौरान मानव शरीर में तीव्र हार्मोनल, कंकाल और जैविक बदलाव होते हैं। यही कारण है कि <strong>वयस्कों के स्थिर बीएमआई कट-ऑफ (जैसे 25.0 kg/m² को ओवरवेट मानना) किशोरों पर कभी लागू नहीं किए जा सकते</strong>। 14 वर्षीय लड़के में 22.0 का बीएमआई अधिक वजन हो सकता है, जबकि वही संख्या 19 वर्षीय वयस्क में बिल्कुल सामान्य होती है।</p>

      <h2>सीडीसी बीएमआई-फॉर-एज पर्सेंटाइल विकास चार्ट (CDC Growth Percentiles)</h2>
      <p>बाल रोग विशेषज्ञ (Pediatricians) किशोरों के वजन और विकास का मूल्यांकन करने के लिए उम्र और लिंग विशिष्ट <strong>सीडीसी बीएमआई पर्सेंटाइल (BMI-for-Age Percentiles)</strong> का उपयोग करते हैं:</p>

      <div class="my-6 overflow-x-auto rounded-xl border border-[#e6e6e6] bg-[var(--card)] p-4">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="border-b border-[#e6e6e6] bg-[#f5f5f5] font-bold text-[#1f2937]">
              <th class="p-3 border border-[#e6e6e6]">पीडियाट्रिक श्रेणी</th>
              <th class="p-3 border border-[#e6e6e6] text-[#464feb] font-bold">सीडीसी पर्सेंटाइल सीमा</th>
              <th class="p-3 border border-[#e6e6e6]">नैदानिक व्याख्या व स्वास्थ्य प्राथमिकता</th>
            </tr>
          </thead>
          <tbody class="divide-y border-[#e6e6e6]">
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-amber-600 font-bold">कम वजन (अंडरवेट)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-amber-600 font-bold">&lt; 5वां पर्सेंटाइल</td>
              <td class="p-3 border border-[#e6e6e6]">अपर्याप्त पोषण, विकास में देरी या ईटिंग डिसऑर्डर का संकेत; विस्तृत बाल रोग विशेषज्ञ जांच आवश्यक।</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-emerald-600 font-bold">स्वस्थ / सामान्य वजन</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-emerald-600 font-bold">5वां से 84वां पर्सेंटाइल</td>
              <td class="p-3 border border-[#e6e6e6]">संतुलित वृद्धि और हड्डियों का सामान्य खनिजीकरण; स्वस्थ जीवनशैली बनाए रखें।</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-amber-500 font-bold">अधिक वजन (ओवरवेट)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-amber-500 font-bold">85वां से 94वां पर्सेंटाइल</td>
              <td class="p-3 border border-[#e6e6e6]">प्रारंभिक चयापचय जोखिम; सख्त डाइटिंग के बजाय शारीरिक खेलकूद और प्रसंस्कृत भोजन कम करने पर बल।</td>
            </tr>
            <tr>
              <td class="p-3 border border-[#e6e6e6] font-semibold text-rose-600 font-bold">मोटापा (ओबेसिटी)</td>
              <td class="p-3 border border-[#e6e6e6] font-mono text-rose-600 font-bold">&ge; 95वां पर्सेंटाइल</td>
              <td class="p-3 border border-[#e6e6e6]">बाल्यावस्था प्रीडायबिटीज, फैटी लिवर व ऑस्टियोआर्टिकुलर तनाव; संपूर्ण पारिवारिक पोषण मार्गदर्शन अनिवार्य।</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>प्यूबर्टी और टैनर स्टेजिंग (Tanner Stages): शारीरिक संरचना का विस्फोट</h2>
      <p>प्यूबर्टी के दौरान लड़के और लड़कियों में विकास दर पूरी तरह अलग होती है:</p>
      <ul>
        <li><strong>लड़कों में पीक हाइट वेलोसिटी (PHV):</strong> औसतन 13.5 से 14 वर्ष की आयु में लड़के तेजी से लंबे होते हैं और टेस्टोस्टेरोन के कारण लीन मसल मास और अस्थि घनत्व में भारी उछाल आता है।</li>
        <li><strong>लड़कियों में वसा संचय:</strong> 11 से 13 वर्ष की आयु में एस्ट्रोजेन के कारण लड़कियों के कूल्हों और पेल्विस में प्राकृतिक वसा जमा होती है, जो सामान्य हार्मोनल विकास का अनिवार्य हिस्सा है।</li>
      </ul>

      <h2>माता-पिता और शिक्षकों के लिए महत्वपूर्ण मनोवैज्ञानिक सलाह</h2>
      <p>किशोरावस्था में शरीर की छवि (Body Image) अत्यंत संवेदनशील होती है। बीएमआई नंबर को लेकर किशोरों को शर्मिंदा (Weight Stigma) करने से एनोरेक्सिया या बुलिमिया जैसे गंभीर ईटिंग डिसऑर्डर का खतरा बढ़ जाता है। कभी भी किशोरों को वयस्कों वाली क्रैश डाइट पर न डालें; इसके स्थान पर घर में पौष्टिक भोजन, पर्याप्त नींद और सक्रिय आउटडोर खेलों को प्रोत्साहित करें।</p>

      <h2>वैज्ञानिक संदर्भ एवं साक्ष्य</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-1">
        <li>Kuczmarski RJ, et al. <em>CDC Growth Charts: United States.</em> <a href="https://pubmed.ncbi.nlm.nih.gov/11183311/" class="text-[#464feb] underline">Adv Data 2000; (314):1-27. PMID: 11183311</a>.</li>
        <li>Barlow SE; Expert Committee. <em>Expert committee recommendations regarding the prevention, assessment, and treatment of child and adolescent overweight and obesity.</em> <a href="https://pubmed.ncbi.nlm.nih.gov/18055651/" class="text-[#464feb] underline">Pediatrics 2007; 120(Suppl 4):S164-S192. PMID: 18055651</a>.</li>
        <li>Styne DM, et al. <em>Pediatric Obesity-Assessment, Treatment, and Prevention: An Endocrine Society Clinical Practice Guideline.</em> <a href="https://pubmed.ncbi.nlm.nih.gov/28141951/" class="text-[#464feb] underline">J Clin Endocrinol Metab 2017; 102(3):709-757. PMID: 28141951</a>.</li>
      </ul>
    `
    }
  }
};
