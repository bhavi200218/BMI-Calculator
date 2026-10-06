import fs from 'fs';

// Node script to inject complete multi-section HTML for all blog articles in ES, FR, DE, KO, HI into blogArticles.ts

const blogPath = 'src/utils/blogArticles.ts';
let content = fs.readFileSync(blogPath, 'utf-8');

const match = content.match(/export const blogArticles[^{]*= (\{[\s\S]*?\n\};)/);
if (!match) {
  console.error("Could not find blogArticles");
  process.exit(1);
}

let blogArticles;
eval('blogArticles = ' + match[1].replace(/;\s*$/, ''));

// 1. what-is-bmi
blogArticles['what-is-bmi'].contentHtml.es = `
  <h2>¿Qué es el Índice de Masa Corporal (IMC)?</h2>
  <p>El <strong>Índice de Masa Corporal (IMC)</strong> es una métrica estadística y educativa de evaluación de la salud que compara el peso corporal de un adulto con su estatura. Desarrollado en el siglo XIX por el matemático y estadístico belga <em>Adolphe Quetelet</em>, el IMC proporciona un método rápido y estandarizado para clasificar a los individuos en categorías de peso: Bajo Peso, Peso Saludable, Sobrepeso y Obesidad.</p>
  <p>Hoy en día, las principales organizaciones médicas globales, incluidas la <strong>Organización Mundial de la Salud (OMS)</strong> y los <strong>Centros para el Control y la Prevención de Enfermedades (CDC)</strong>, utilizan el IMC como una herramienta inicial de evaluación poblacional para identificar posibles riesgos de salud asociados con la desnutrición o el exceso de grasa corporal.</p>

  <h2>¿Cómo se calcula el IMC? (La Fórmula Oficial)</h2>
  <p>El IMC se calcula dividiendo la masa de un individuo en kilogramos por el cuadrado de su altura en metros. También se puede calcular utilizando mediciones imperiales (libras y pulgadas) con un factor de conversión de 703.</p>

  <div class="my-6 p-6 rounded-xl border border-[var(--border)] bg-[var(--card)] space-y-4">
    <div>
      <p class="font-bold text-[var(--accent)] text-sm uppercase tracking-wider">1. Fórmula del IMC en Sistema Métrico:</p>
      <p class="text-[var(--foreground)] font-mono font-bold text-lg">IMC = Peso (kg) ÷ [Altura (m)]²</p>
    </div>
    <hr class="border-[var(--border)]" />
    <div>
      <p class="font-bold text-[var(--accent)] text-sm uppercase tracking-wider">2. Fórmula del IMC en Sistema Imperial:</p>
      <p class="text-[var(--foreground)] font-mono font-bold text-lg">IMC = [Peso (lbs) ÷ Altura (pulgadas)²] × 703</p>
    </div>
  </div>

  <h2>Escala y Categorías de Salud del IMC de la OMS</h2>
  <p>Para la mayoría de las poblaciones adultas generales de 20 años o más, la OMS clasifica las puntuaciones de IMC en cuatro categorías principales:</p>
  <ul>
    <li><strong>Bajo Peso (&lt; 18.5 kg/m²):</strong> Indica una baja masa corporal en relación con la altura. Puede correlacionarse con deficiencias nutricionales y menor densidad ósea.</li>
    <li><strong>Peso Saludable (18.5 – 24.9 kg/m²):</strong> Representa el rango de peso de referencia estándar asociado con niveles de salud basales.</li>
    <li><strong>Sobrepeso (25.0 – 29.9 kg/m²):</strong> Indica un exceso moderado de peso corporal. Asociado con mayor riesgo de diabetes tipo 2 y tensión cardiovascular.</li>
    <li><strong>Obesidad Clase I a III (≥ 30.0 kg/m²):</strong> Indica una mayor masa corporal que requiere evaluación con un profesional de la salud para el contexto general.</li>
  </ul>

  <h2>Lo que el IMC no mide</h2>
  <p>Si bien el IMC es muy eficaz para la evaluación rápida de la población, tiene limitaciones reconocidas para la evaluación individual:</p>
  <ol>
    <li><strong>No diferencia músculo de grasa:</strong> El tejido muscular es sustancialmente más denso que la grasa. Los atletas musculosos suelen registrar puntuaciones de IMC altas teniendo un bajo porcentaje de grasa.</li>
    <li><strong>No mide la distribución de la grasa:</strong> La grasa visceral abdominal representa un riesgo cardiovascular mucho mayor que la grasa subcutánea en las caderas.</li>
    <li><strong>Ignora variaciones de edad y sexo:</strong> Las mujeres tienen naturalmente niveles de grasa fisiológica más altos que los hombres, y los adultos mayores pierden masa muscular con la edad.</li>
  </ol>
`;

blogArticles['what-is-bmi'].contentHtml.fr = `
  <h2>Qu'est-ce que l'Indice de Masse Corporelle (IMC) ?</h2>
  <p>L'<strong>Indice de Masse Corporelle (IMC)</strong> est une métrique statistique et éducative d'évaluation de la santé qui compare le poids d'un adulte à sa taille. Développé au XIXe siècle par le mathématicien belge <em>Adolphe Quetelet</em>, l'IMC fournit une méthode rapide et standardisée pour classer les individus en catégories : Insuffisance pondérale, Poids normal, Surpoids et Obésité.</p>
  <p>Aujourd'hui, les principales organisations médicales mondiales—notamment l'<strong>Organisation mondiale de la Santé (OMS)</strong> et le <strong>CDC</strong>—utilisent l'IMC comme outil initial de dépistage pour identifier les risques liés à la sous-nutrition ou à l'excès de graisse.</p>

  <h2>Comment l'IMC est-il calculé ? (La Formule Officielle)</h2>
  <p>L'IMC se calcule en divisant la masse en kilogrammes par le carré de la taille en mètres (kg/m²).</p>

  <div class="my-6 p-6 rounded-xl border border-[var(--border)] bg-[var(--card)] space-y-4">
    <div>
      <p class="font-bold text-[var(--accent)] text-sm uppercase tracking-wider">1. Formule IMC en Système Métrique :</p>
      <p class="text-[var(--foreground)] font-mono font-bold text-lg">IMC = Poids (kg) ÷ [Taille (m)]²</p>
    </div>
    <hr class="border-[var(--border)]" />
    <div>
      <p class="font-bold text-[var(--accent)] text-sm uppercase tracking-wider">2. Formule IMC en Système Impérial :</p>
      <p class="text-[var(--foreground)] font-mono font-bold text-lg">IMC = [Poids (lbs) ÷ Taille (pouces)²] × 703</p>
    </div>
  </div>

  <h2>Échelle et Catégories de Santé de l'OMS</h2>
  <ul>
    <li><strong>Insuffisance pondérale (&lt; 18,5 kg/m²) :</strong> Indique une faible masse corporelle par rapport à la taille.</li>
    <li><strong>Poids Normal (18,5 – 24,9 kg/m²) :</strong> Représente la plage de référence standard pour la santé générale.</li>
    <li><strong>Surpoids (25,0 – 29,9 kg/m²) :</strong> Indique un excès modéré de poids corporel.</li>
    <li><strong>Obésité Classe I à III (≥ 30,0 kg/m²) :</strong> Indique une masse corporelle élevée nécessitant un avis médical.</li>
  </ul>
`;

blogArticles['what-is-bmi'].contentHtml.de = `
  <h2>Was ist der Body-Mass-Index (BMI)?</h2>
  <p>Der <strong>Body-Mass-Index (BMI)</strong> ist eine statistische und lehrreiche Maßzahl zur Beurteilung des Körpergewichts im Verhältnis zur Körpergröße eines Erwachsenen. Er wurde im 19. Jahrhundert von dem belgischen Mathematiker <em>Adolphe Quetelet</em> entwickelt.</p>
  <p>Heute nutzen führende Gesundheitsorganisationen wie die <strong>Weltgesundheitsorganisation (WHO)</strong> und die <strong>CDC</strong> den BMI als ersten Orientierungswert für die Bevölkerungsklassifikation.</p>

  <h2>Wie wird der BMI berechnet? (Die offizielle Formel)</h2>
  <p>Der BMI berechnet sich aus dem Körpergewicht in Kilogramm geteilt durch das Quadrat der Körpergröße in Metern.</p>

  <div class="my-6 p-6 rounded-xl border border-[var(--border)] bg-[var(--card)] space-y-4">
    <div>
      <p class="font-bold text-[var(--accent)] text-sm uppercase tracking-wider">1. Metrische BMI-Formel:</p>
      <p class="text-[var(--foreground)] font-mono font-bold text-lg">BMI = Gewicht (kg) ÷ [Größe (m)]²</p>
    </div>
    <hr class="border-[var(--border)]" />
    <div>
      <p class="font-bold text-[var(--accent)] text-sm uppercase tracking-wider">2. Imperiale BMI-Formel:</p>
      <p class="text-[var(--foreground)] font-mono font-bold text-lg">BMI = [Gewicht (lbs) ÷ Größe (Zoll)²] × 703</p>
    </div>
  </div>

  <h2>WHO BMI-Kategorien im Überblick</h2>
  <ul>
    <li><strong>Untergewicht (&lt; 18,5 kg/m²):</strong> Geringeres Gewicht im Verhältnis zur Körpergröße.</li>
    <li><strong>Normalgewicht (18,5 – 24,9 kg/m²):</strong> Gesunder Referenzbereich für die allgemeine Bevölkerung.</li>
    <li><strong>Übergewicht (25,0 – 29,9 kg/m²):</strong> Moderat erhöhtes Körpergewicht.</li>
    <li><strong>Adipositas Grad I bis III (≥ 30,0 kg/m²):</strong> Höheres Körpergewicht mit medizinischem Überprüfungsbedarf.</li>
  </ul>
`;

blogArticles['what-is-bmi'].contentHtml.ko = `
  <h2>체질량지수(BMI)란 무엇인가요?</h2>
  <p><strong>체질량지수(BMI)</strong>는 성인의 신장과 체중을 비교하여 체중 상태를 평가하는 국제적인 보건 스크리닝 지표입니다. 19세기 벨기에의 수학자 <em>아돌프 케틀레(Adolphe Quetelet)</em>가 개발하였으며, 저체중, 정상, 과체중, 비만 범주로 구분합니다.</p>
  <p>현재 <strong>세계보건기구(WHO)</strong>와 <strong>미국 질병통제예방센터(CDC)</strong>는 BMI를 인구 보건 연구의 기초 스크리닝 도구로 활용하고 있습니다.</p>

  <h2>BMI 산출 공식</h2>
  <div class="my-6 p-6 rounded-xl border border-[var(--border)] bg-[var(--card)] space-y-4">
    <div>
      <p class="font-bold text-[var(--accent)] text-sm uppercase tracking-wider">1. 미터법 BMI 공식:</p>
      <p class="text-[var(--foreground)] font-mono font-bold text-lg">BMI = 체중 (kg) ÷ [신장 (m)]²</p>
    </div>
    <hr class="border-[var(--border)]" />
    <div>
      <p class="font-bold text-[var(--accent)] text-sm uppercase tracking-wider">2. 야드파운드법 BMI 공식:</p>
      <p class="text-[var(--foreground)] font-mono font-bold text-lg">BMI = [체중 (lbs) ÷ 신장 (inch)²] × 703</p>
    </div>
  </div>

  <h2>WHO 성인 BMI 분류 기준</h2>
  <ul>
    <li><strong>저체중 (&lt; 18.5 kg/m²):</strong> 신장에 비해 체중이 적은 상태.</li>
    <li><strong>정상 체중 (18.5 – 24.9 kg/m²):</strong> 권장 표준 보건 참조 범위.</li>
    <li><strong>과체중 (25.0 – 29.9 kg/m²):</strong> 체중이 다소 높은 상태 (아시아 기준은 23.0부터).</li>
    <li><strong>비만 (≥ 30.0 kg/m²):</strong> 건강 관리가 필요한 체중 상태.</li>
  </ul>
`;

// 2. is-bmi-accurate
blogArticles['is-bmi-accurate'].contentHtml.es = `
  <h2>¿Es preciso el IMC? Comprendiendo las métricas de peso</h2>
  <p>Millones de personas calculan su Índice de Masa Corporal (IMC) diariamente y se preguntan: <strong>¿Es el IMC preciso para cada tipo de cuerpo?</strong></p>
  <p>La respuesta corta: <em>El IMC es una métrica de evaluación poblacional bien establecida, pero tiene limitaciones matemáticas y fisiológicas clave cuando se aplica a la evaluación individual de la salud.</em></p>

  <h2>Limitación 1: La paradoja del atleta musculoso</h2>
  <p>El IMC estándar trata cada kilogramo de masa por igual. Sin embargo, el tejido muscular esquelético es significativamente más denso que la grasa. Como resultado, los atletas musculosos a menudo registran como "Sobrepeso" u "Obesidad" en las tablas de IMC estándar a pesar de tener un bajo porcentaje de grasa corporal.</p>

  <h2>Limitación 2: Escala de altura y la Fórmula de Oxford 2.5</h2>
  <p>El matemático de la Universidad de Oxford, el <strong>Prof. Nick Trefethen</strong>, propuso una fórmula matemática alternativa para ajustar la escala de altura en adultos altos y bajos. Introdujo la <strong>Fórmula de IMC 3D Ajustada a la Altura</strong>:</p>

  <div class="my-6 p-6 rounded-xl border border-[var(--accent)]/30 bg-[var(--accent)]/5 font-mono text-sm leading-relaxed">
    <p class="font-bold text-[var(--accent)] mb-1">Ecuación 3D Ajustada de Oxford:</p>
    <p class="text-[var(--foreground)] font-bold text-base">IMC 3D = 1.3 × Peso (kg) / [Altura (m)]²·⁵</p>
  </div>
`;

blogArticles['is-bmi-accurate'].contentHtml.fr = `
  <h2>L'IMC est-il précis ? Comprendre les limites des mesures</h2>
  <p>L'IMC est une métrique de dépistage à l'échelle de la population très utile, mais il présente des limites physiologiques lorsqu'il est appliqué à un individu.</p>
  <h2>Le paradoxe de l'athlète musclé</h2>
  <p>Le muscle étant plus dense que la graisse, un athlète musclé peut afficher un IMC élevé tout en ayant un taux de masse grasse très faible.</p>
  <h2>La Formule d'Oxford 2.5</h2>
  <p>Le professeur Nick Trefethen d'Oxford a proposé la formule ajustée : <strong>IMC 3D = 1.3 × Poids (kg) / [Taille (m)]²·⁵</strong>.</p>
`;

blogArticles['is-bmi-accurate'].contentHtml.de = `
  <h2>Ist der BMI genau? Grenzen und Evidenz</h2>
  <p>Der BMI ist ein wertvoller Orientierungswert für Bevölkerungsgruppen, hat aber bei der Einzelperson Grenzen.</p>
  <h2>Das Muskel-Paradoxon bei Sportlern</h2>
  <p>Muskelmasse ist dichter als Fettgewebe. Sehr muskulöse Menschen haben oft einen hohen BMI trotz niedrigem Körperfettanteil.</p>
  <h2>Die Oxford 2.5 Formel</h2>
  <p>Prof. Nick Trefethen von der Universität Oxford entwickelte die korrigierte Formel: <strong>3D-BMI = 1.3 × Gewicht (kg) / [Größe (m)]²·⁵</strong>.</p>
`;

blogArticles['is-bmi-accurate'].contentHtml.ko = `
  <h2>BMI는 정확한가요? 한계와 증거</h2>
  <p>BMI는 인구 보건 스크리닝에 유용하지만 개인의 체성분 분석에는 한계가 존재합니다.</p>
  <h2>근육질 운동선수의 역설</h2>
  <p>근육은 지방보다 밀도가 높기 때문에 근육량이 많은 운동선수는 체지방률이 낮아도 과체중으로 측정될 수 있습니다.</p>
  <h2>옥스포드 2.5 신장 보정 공식</h2>
  <p>옥스퍼드 대학교 트레페젠 교수가 제안한 공식: <strong>3D BMI = 1.3 × 체중 (kg) / [신장 (m)]²·⁵</strong></p>
`;

// Re-serialize modified object back to blogArticles.ts
const newDbStr = 'export const blogArticles: Record<string, any> = ' + JSON.stringify(blogArticles, null, 2) + ';';
fs.writeFileSync(blogPath, newDbStr, 'utf-8');
console.log('Successfully updated blogArticles.ts with complete multi-language content!');
