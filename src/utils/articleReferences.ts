/**
 * Academic Citation & Verification Engine
 * Resolves scientific references to direct, verified PubMed / WHO / CDC / NIH / Lancet primary sources
 * and automatically injects missing citation metadata into health guides.
 */

export interface ScientificCitation {
  match: RegExp;
  url: string;
  title?: string;
}

export const landmarkCitations: ScientificCitation[] = [
  // Landmark WHO Reports
  { match: /Physical status.*WHO|WHO Technical Report Series 854/i, url: 'https://pubmed.ncbi.nlm.nih.gov/8594834/' },
  { match: /Obesity: Preventing and managing the global epidemic|WHO Technical Report Series 894/i, url: 'https://pubmed.ncbi.nlm.nih.gov/11234459/' },
  { match: /Waist circumference and waist-hip ratio.*WHO/i, url: 'https://www.who.int/publications/i/item/9789241501491' },
  { match: /Appropriate body-mass index for Asian populations/i, url: 'https://pubmed.ncbi.nlm.nih.gov/14726171/' },
  { match: /growth reference for school-aged children and adolescents.*WHO|WHO growth reference/i, url: 'https://www.who.int/tools/growth-reference-data-for-5to19-years' },

  // Landmark CDC & NIH Guidelines
  { match: /About Adult BMI|CDC.*Adult BMI/i, url: 'https://www.cdc.gov/bmi/faq/' },
  { match: /2000 CDC Growth Charts|CDC Growth Charts/i, url: 'https://www.cdc.gov/growthcharts/' },
  { match: /Clinical Guidelines on the Identification.*Overweight and Obesity in Adults|NIH.*Clinical Guidelines/i, url: 'https://www.nhlbi.nih.gov/health-topics/guidelines-for-obesity-treatment' },
  { match: /Dietary Reference Intakes for Water.*NASEM|NASEM.*Water/i, url: 'https://www.nationalacademies.org/our-work/dietary-reference-intakes-for-water-potassium-sodium-chloride-and-sulfate' },
  { match: /NICE guideline.*NG181|NG181.*overweight and obesity/i, url: 'https://www.nice.org.uk/guidance/ng181' },
  { match: /Nutrition Facts Label.*FDA|FDA.*Nutrition Facts/i, url: 'https://www.fda.gov/food/nutrition-facts-label/how-understand-and-use-nutrition-facts-label' },

  // Indian Council of Medical Research (ICMR) & South Asian Consensus
  { match: /Consensus statement for diagnosis of obesity.*Asian Indians|Misra A.*Consensus/i, url: 'https://pubmed.ncbi.nlm.nih.gov/19582986/' },
  { match: /Guidelines for Management of Type 2 Diabetes.*ICMR|ICMR.*Diabetes/i, url: 'https://main.icmr.nic.in/content/guidelines-0' },
  { match: /The Y-Y paradox|Yajnik.*Y-Y/i, url: 'https://pubmed.ncbi.nlm.nih.gov/14726172/' },

  // Foundational Anthropometric & BMI Papers
  { match: /Indices of relative weight and obesity|Keys A.*Indices/i, url: 'https://pubmed.ncbi.nlm.nih.gov/4650629/' },
  { match: /Body-mass index and all-cause mortality: individual-participant-data|Global BMI Mortality Collaboration/i, url: 'https://pubmed.ncbi.nlm.nih.gov/27423423/' },
  { match: /Accuracy of body mass index in diagnosing obesity|Romero-Corral A.*Accuracy/i, url: 'https://pubmed.ncbi.nlm.nih.gov/18283284/' },
  { match: /Normal weight obesity.*Romero-Corral/i, url: 'https://pubmed.ncbi.nlm.nih.gov/19933515/' },
  { match: /Waist-to-height ratio as an indicator of early health risk|Ashwell M.*Waist-to-height/i, url: 'https://pubmed.ncbi.nlm.nih.gov/26961858/' },
  { match: /Body mass index as a measure of body fatness.*Deurenberg/i, url: 'https://pubmed.ncbi.nlm.nih.gov/2043597/' },
  { match: /all-cause mortality with overweight and obesity.*Flegal|Flegal.*mortality/i, url: 'https://pubmed.ncbi.nlm.nih.gov/23282859/' },
  { match: /BMI and all-cause mortality in older adults.*Winter|Winter JE.*older adults/i, url: 'https://pubmed.ncbi.nlm.nih.gov/24451310/' },

  // Ideal Body Weight & Body Surface Area Equations
  { match: /Gentamicin therapy.*Devine|Devine BJ/i, url: 'https://pubmed.ncbi.nlm.nih.gov/4422203/' },
  { match: /Determination of ideal body weight.*Robinson|Robinson JD/i, url: 'https://pubmed.ncbi.nlm.nih.gov/6869387/' },
  { match: /Comparative evaluation of ideal weight equations.*Miller|Miller PF/i, url: 'https://pubmed.ncbi.nlm.nih.gov/10265278/' },
  { match: /Simplified calculation of body-surface area.*Mosteller|Mosteller RD/i, url: 'https://pubmed.ncbi.nlm.nih.gov/3657876/' },
  { match: /approximate surface area.*Du Bois|Du Bois.*Du Bois/i, url: 'https://pubmed.ncbi.nlm.nih.gov/2520314/' },
  { match: /Estimated lean body mass as an index.*Boer|Boer P/i, url: 'https://pubmed.ncbi.nlm.nih.gov/6496712/' },
  { match: /predicting body density of men.*Jackson|Jackson AS.*Pollock/i, url: 'https://pubmed.ncbi.nlm.nih.gov/708816/' },
  { match: /percent body fat.*U\.S\. Navy.*Hodgdon|Hodgdon JA/i, url: 'https://apps.dtic.mil/sti/citations/ADA148490' },

  // Metabolism, BMR, TDEE & Energy Expenditure
  { match: /predictive equation for resting energy expenditure.*Mifflin|Mifflin MD/i, url: 'https://pubmed.ncbi.nlm.nih.gov/2305711/' },
  { match: /Human energy requirements: Report of a Joint Expert Consultation|FAO.*energy requirements/i, url: 'https://www.fao.org/3/y5686e/y5686e00.htm' },
  { match: /Comparison of predictive equations for resting metabolic rate.*Frankenfield/i, url: 'https://pubmed.ncbi.nlm.nih.gov/15883556/' },
  { match: /Quantification of the effect of energy imbalance.*Hall|Hall KD.*energy imbalance/i, url: 'https://pubmed.ncbi.nlm.nih.gov/21872751/' },
  { match: /Non-exercise activity thermogenesis.*Levine|Levine JA.*NEAT/i, url: 'https://pubmed.ncbi.nlm.nih.gov/12468415/' },
  { match: /Sleep curtailment in healthy young men.*Spiegel|Spiegel K.*leptin/i, url: 'https://pubmed.ncbi.nlm.nih.gov/15583226/' },
  { match: /Adverse metabolic consequences.*sleep restriction.*Buxton/i, url: 'https://pubmed.ncbi.nlm.nih.gov/22496545/' },
  { match: /Daily steps and all-cause mortality.*Paluch/i, url: 'https://pubmed.ncbi.nlm.nih.gov/35247352/' },

  // Nutrition, Protein & Fitness Physiology
  { match: /protein supplementation on resistance training.*Morton|Morton RW/i, url: 'https://pubmed.ncbi.nlm.nih.gov/28698222/' },
  { match: /dietary protein intake in older people.*PROT-AGE|Bauer J.*PROT-AGE/i, url: 'https://pubmed.ncbi.nlm.nih.gov/23867520/' },
  { match: /Nutrition and Athletic Performance.*Thomas|Thomas DT.*Burke LM/i, url: 'https://pubmed.ncbi.nlm.nih.gov/26920240/' },
  { match: /Urinary indices during dehydration.*Armstrong/i, url: 'https://pubmed.ncbi.nlm.nih.gov/9841955/' },
  { match: /Ultra-processed diets cause excess calorie intake.*Hall/i, url: 'https://pubmed.ncbi.nlm.nih.gov/31105044/' },
  { match: /Principles of Nutrition and Nutritive Value.*Atwater/i, url: 'https://naldc.nal.usda.gov/catalog/IND43894451' },
  { match: /natural bodybuilding contest preparation.*Helms/i, url: 'https://pubmed.ncbi.nlm.nih.gov/24864135/' },
  { match: /repetitions in reserve.*Helms/i, url: 'https://pubmed.ncbi.nlm.nih.gov/27064287/' },
  { match: /resistance training volume and increases in muscle mass.*Schoenfeld/i, url: 'https://pubmed.ncbi.nlm.nih.gov/27433992/' },
  { match: /exercise-induced muscular hypertrophy.*Phillips/i, url: 'https://pubmed.ncbi.nlm.nih.gov/24791918/' },
  { match: /Age-predicted maximal heart rate revisited.*Tanaka/i, url: 'https://pubmed.ncbi.nlm.nih.gov/11153730/' },
  { match: /effects of training on heart rate.*Karvonen/i, url: 'https://pubmed.ncbi.nlm.nih.gov/13470504/' },
  { match: /cardiorespiratory fitness with long-term mortality.*Mandsager/i, url: 'https://pubmed.ncbi.nlm.nih.gov/30646262/' },
  { match: /maximal oxygen intake.*Cooper|Cooper KH/i, url: 'https://pubmed.ncbi.nlm.nih.gov/5694044/' },
  { match: /training intensity and duration distribution.*Seiler/i, url: 'https://pubmed.ncbi.nlm.nih.gov/20861526/' },
  { match: /Metabolic Flexibility and Lactate Clearance.*San-Mill/i, url: 'https://pubmed.ncbi.nlm.nih.gov/29256133/' },
  { match: /Strength testing.*Brzycki|Brzycki M/i, url: 'https://www.tandfonline.com/doi/abs/10.1080/07303084.1993.10606684' },
  { match: /Harmonizing the metabolic syndrome.*Alberti/i, url: 'https://pubmed.ncbi.nlm.nih.gov/19805654/' },
  { match: /Sarcopenia: revised European consensus.*Cruz-Jentoft/i, url: 'https://pubmed.ncbi.nlm.nih.gov/30312372/' },
  { match: /ESPEN guideline on clinical nutrition and hydration in geriatrics.*Volkert/i, url: 'https://pubmed.ncbi.nlm.nih.gov/30352776/' },
  { match: /2017 ACC\/AHA.*High Blood Pressure.*Whelton/i, url: 'https://pubmed.ncbi.nlm.nih.gov/29146535/' },
  { match: /Effects on blood pressure of reduced dietary sodium.*DASH.*Sacks/i, url: 'https://pubmed.ncbi.nlm.nih.gov/11136953/' },
  { match: /Obesity and the risk of myocardial infarction.*INTERHEART.*Yusuf/i, url: 'https://pubmed.ncbi.nlm.nih.gov/16271642/' },
  { match: /Biological differences in human adipose tissue.*Karastergiou/i, url: 'https://pubmed.ncbi.nlm.nih.gov/22657434/' },
  { match: /Evaluation and Treatment of Children and Adolescents With Obesity.*Hampl/i, url: 'https://pubmed.ncbi.nlm.nih.gov/36622115/' }
];

export function getCitationUrl(text: string): string | null {
  const clean = text.replace(/[\u2010-\u2015]/g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // 1. PMID match
  const pmidMatch = clean.match(/PMID:\s*(\d+)/i);
  if (pmidMatch) {
    return `https://pubmed.ncbi.nlm.nih.gov/${pmidMatch[1]}/`;
  }

  // 2. Pattern match in landmark database
  for (const entry of landmarkCitations) {
    if (entry.match.test(clean)) {
      return entry.url;
    }
  }

  return null;
}

/**
 * Fallback verified scientific citations for articles that currently lack a references section
 */
const fallbackArticleCitations: Record<string, Array<{ text: string; url: string }>> = {
  'age-specific-bmi-charts': [
    { text: 'Kuczmarski RJ, Ogden CL, Guo SS, et al. 2000 CDC Growth Charts for the United States: methods and development. Vital Health Stat 11 2002; (246):1-190.', url: 'https://www.cdc.gov/growthcharts/' },
    { text: 'de Onis M, Onyango AW, Borghi E, et al. Development of a WHO growth reference for school-aged children and adolescents. Bull World Health Organ 2007; 85(9):660-667.', url: 'https://www.who.int/tools/growth-reference-data-for-5to19-years' },
    { text: 'Winter JE, MacInnis RJ, Wattanapenpaiboon N, Nowson CA. BMI and all-cause mortality in older adults: a meta-analysis. Am J Clin Nutr 2014; 99(4):875-890.', url: 'https://pubmed.ncbi.nlm.nih.gov/24451310/' }
  ],
  'cardiovascular-fitness-resting-heart-rate': [
    { text: 'Whelton PK, et al. 2017 ACC/AHA/AAPA/ABC/ACPM/AGS/APhA/ASH/ASPC/NMA/PCNA Guideline for High Blood Pressure in Adults. J Am Coll Cardiol 2018; 71(19):e127-e248.', url: 'https://pubmed.ncbi.nlm.nih.gov/29146535/' },
    { text: 'Tanaka H, Monahan KD, Seals DR. Age-predicted maximal heart rate revisited. J Am Coll Cardiol 2001; 37(1):153-156.', url: 'https://pubmed.ncbi.nlm.nih.gov/11153730/' },
    { text: 'Mandsager K, et al. Association of cardiorespiratory fitness with long-term mortality among adults undergoing exercise treadmill testing. JAMA Netw Open 2018; 1(6):e183605.', url: 'https://pubmed.ncbi.nlm.nih.gov/30646262/' }
  ],
  'healthy-weight-strategies': [
    { text: 'Hall KD, et al. Quantification of the effect of energy imbalance on bodyweight. The Lancet 2011; 378(9793):826-837.', url: 'https://pubmed.ncbi.nlm.nih.gov/21872751/' },
    { text: 'National Institutes of Health. Clinical Guidelines on the Identification, Evaluation, and Treatment of Overweight and Obesity in Adults. Obes Res 1998; 6(Suppl 2):51S-209S.', url: 'https://www.nhlbi.nih.gov/health-topics/guidelines-for-obesity-treatment' },
    { text: 'Centers for Disease Control and Prevention. Steps for Losing Weight and Healthy Living. National Center for Chronic Disease Prevention and Health Promotion, 2023.', url: 'https://www.cdc.gov/healthy-weight-growth/losing-weight/' }
  ],
  'metabolic-adaptation-weight-loss': [
    { text: 'Rosenbaum M, Leibel RL. Adaptive thermogenesis in humans. Int J Obes (Lond) 2010; 34(Suppl 1):S47-S55.', url: 'https://pubmed.ncbi.nlm.nih.gov/20935667/' },
    { text: 'Hall KD, et al. Energy balance and its components: implications for body weight regulation. Am J Clin Nutr 2012; 95(4):989-994.', url: 'https://pubmed.ncbi.nlm.nih.gov/22434603/' },
    { text: 'Trexler ET, Smith-Ryan AE, Norton LE. Metabolic adaptation to weight loss: implications for the athlete. J Int Soc Sports Nutr 2014; 11(1):7.', url: 'https://pubmed.ncbi.nlm.nih.gov/24571926/' }
  ],
  'visceral-fat-vs-subcutaneous-fat': [
    { text: 'World Health Organization. Waist circumference and waist-hip ratio: report of a WHO expert consultation. Geneva: WHO, 2011.', url: 'https://www.who.int/publications/i/item/9789241501491' },
    { text: 'Despres JP, Lemieux I. Abdominal obesity and metabolic syndrome. Nature 2006; 444(7121):881-887.', url: 'https://pubmed.ncbi.nlm.nih.gov/17167477/' },
    { text: 'Karastergiou K, Smith SR, Davis AS, Fried SK. Biological differences in human adipose tissue - the biology of gynoid and android fat. Biol Sex Differ 2012; 3:13.', url: 'https://pubmed.ncbi.nlm.nih.gov/22657434/' }
  ]
};

const sectionHeadings: Record<string, string> = {
  en: 'Scientific References and Foundational Literature',
  es: 'Fuentes y Referencias Científicas',
  fr: 'Références et Littérature Scientifique',
  de: 'Wissenschaftliche Referenzen & Literatur',
  ko: '과학적 참고문헌 및 표준 의학 자료',
  hi: 'वैज्ञानिक संदर्भ एवं शोध साहित्य'
};

/**
 * Enhances an article's HTML content by ensuring all academic references
 * are hyperlinked to verified sources (PubMed, WHO, CDC, etc.) and adding
 * citations if none are present.
 */
export function enhanceArticleReferences(slug: string, html: string, lang: string = 'en'): string {
  if (!html) return html;

  let enhanced = html;

  // 1. If references section exists, enhance unlinked <li> tags inside it
  const refSectionRegex = /(<h[23]>[^<]*(?:Scientific References|References|Literature|Standards|Sources|Fuentes|Références|Literatur|참고|संदर्भ)[^<]*<\/h[23]>)([\s\S]*?)(<\/ul>)/gi;

  if (refSectionRegex.test(enhanced)) {
    enhanced = enhanced.replace(refSectionRegex, (match, hTag, listInner, closeUl) => {
      // Process each <li> inside listInner
      const replacedList = listInner.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (liMatch: string, innerText: string) => {
        // If already has an <a> link, ensure target and rel are set
        if (/<a\s+[^>]*href=/i.test(innerText)) {
          return liMatch.replace(/<a\s+([^>]*)>/gi, (aMatch: string, attrs: string) => {
            let updated = attrs;
            if (!/target=/i.test(updated)) updated += ' target="_blank"';
            if (!/rel=/i.test(updated)) updated += ' rel="noopener noreferrer"';
            if (!/class=/i.test(updated)) updated += ' class="hover:text-[var(--accent)] underline font-medium"';
            return `<a ${updated}>`;
          });
        }

        // Try to match URL
        const plain = innerText.replace(/<[^>]+>/g, '').trim();
        const url = getCitationUrl(plain);
        if (url) {
          return `<li class="my-1.5"><a href="${url}" target="_blank" rel="noopener noreferrer" class="hover:text-[var(--accent)] underline font-medium text-[var(--foreground)]/90 transition-colors">${innerText} &rarr;</a></li>`;
        }

        return liMatch;
      });

      return `${hTag}${replacedList}${closeUl}`;
    });
  } else if (fallbackArticleCitations[slug]) {
    // 2. If article is one of the missing reference articles, append verified landmark citations
    const citations = fallbackArticleCitations[slug];
    const heading = sectionHeadings[lang] || sectionHeadings.en;
    const citationItems = citations.map(c => 
      `<li class="my-1.5"><a href="${c.url}" target="_blank" rel="noopener noreferrer" class="hover:text-[var(--accent)] underline font-medium text-[var(--foreground)]/90 transition-colors">${c.text} &rarr;</a></li>`
    ).join('\n        ');

    const appendedSection = `
      <h2>${heading}</h2>
      <ul class="text-xs text-[var(--muted-foreground)] space-y-2 my-4 pl-5 list-disc">
        ${citationItems}
      </ul>
    `;
    enhanced += appendedSection;
  }

  return enhanced;
}
