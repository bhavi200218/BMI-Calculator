import assert from 'assert';
import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const esbuild = require('esbuild');

// Bundle utilities in memory
function loadTsModule(entryPoint) {
  const result = esbuild.buildSync({
    entryPoints: [entryPoint],
    bundle: true,
    write: false,
    format: 'cjs'
  });
  const mod = { exports: {} };
  const fn = new Function('module', 'exports', result.outputFiles[0].text);
  fn(mod, mod.exports);
  return mod.exports;
}

const { getWorkedExample } = loadTsModule('src/utils/workedExamples.ts');
const { getInputVariablesGuide, getToolInterpretationAndLimitations } = loadTsModule('src/utils/calculatorGuides.ts');
const { blogArticles } = loadTsModule('src/utils/blogArticles.ts');
const { calculators } = loadTsModule('src/utils/calculators.ts');
const { blogArticleToolsMap, relatedToolsSectionHeading } = loadTsModule('src/utils/blogRelatedTools.ts');

const LOCALES = ['en', 'es', 'fr', 'de', 'ko', 'hi'];

console.log('====================================================');
console.log('   RUNNING PRODUCTION REMEDIATION VERIFICATION SUITE');
console.log('====================================================');

let totalTests = 0;
let passedTests = 0;

function runTest(name, fn) {
  totalTests++;
  try {
    fn();
    passedTests++;
    console.log(`  ✅ PASS: ${name}`);
  } catch (err) {
    console.error(`  ❌ FAIL: ${name}`);
    console.error(`     Error: ${err.message}`);
  }
}

// 1. 1RM Calculator Tests
['1rm-calculator', 'one-rep-max-calculator'].forEach(slug => {
  LOCALES.forEach(lang => {
    runTest(`1RM [${slug}] [${lang}]: Worked example calculates 1RM with zero BMI contamination`, () => {
      const ex = getWorkedExample(slug, lang);
      assert.ok(ex, 'Worked example must exist');
      
      const allSteps = ex.steps.join(' ');
      assert.ok(allSteps.includes('Epley') || allSteps.includes('एपले') || allSteps.includes('1RM'), `Steps must mention Epley/1RM: ${allSteps}`);
      assert.ok(allSteps.includes('117') || allSteps.includes('116.67'), `Steps must calculate 116.67 or 117: ${allSteps}`);
      assert.ok(ex.result.value.includes('117'), `Result must show 117 kg: ${ex.result.value}`);

      // Assert ZERO BMI contamination
      assert.strictEqual(allSteps.includes('Square height'), false, '1RM steps must NOT contain Square height');
      assert.strictEqual(allSteps.includes('3.0625'), false, '1RM steps must NOT contain height squared constant 3.0625');
      assert.strictEqual(allSteps.includes('22.857'), false, '1RM steps must NOT contain BMI ratio 22.857');
      assert.strictEqual(ex.result.label.toLowerCase().includes('bmi'), false, 'Result label must not mention BMI');
    });

    runTest(`1RM [${slug}] [${lang}]: Input variable guide uses lift & reps descriptions, not body weight & age`, () => {
      const calc = calculators.find(c => c.slug === slug);
      assert.ok(calc, `Calculator config must exist for ${slug}`);
      const guide = getInputVariablesGuide(calc.inputs, lang, slug);
      assert.strictEqual(guide.items.length, 2, 'Must have exactly 2 input items');

      const weightItem = guide.items.find(i => i.id === 'weight');
      const ageItem = guide.items.find(i => i.id === 'age');

      assert.ok(weightItem, 'weight input item must exist');
      assert.ok(ageItem, 'age input item must exist');

      assert.ok(!weightItem.description.includes('light clothing without footwear'), 'weight description must not talk about light clothing/scale mass');
      assert.ok(weightItem.name.toLowerCase().includes('load') || 
                weightItem.name.toLowerCase().includes('carga') || 
                weightItem.name.toLowerCase().includes('lifted') ||
                weightItem.name.toLowerCase().includes('soulevée') ||
                weightItem.name.toLowerCase().includes('hantel') ||
                weightItem.name.includes('중량') ||
                weightItem.name.includes('भार'), 
                `Weight item name should reflect barbell/lifted weight: ${weightItem.name}`);

      assert.ok(!ageItem.description.includes('Completed years of life'), 'age description must not talk about completed years of life');
      assert.ok(ageItem.name.toLowerCase().includes('repetition') || 
                ageItem.name.toLowerCase().includes('repeticion') || 
                ageItem.name.toLowerCase().includes('wiederhol') || 
                ageItem.name.toLowerCase().includes('répétition') || 
                ageItem.name.includes('반복') || 
                ageItem.name.includes('पुनरावृत्ति'), 
                `Age item name should reflect repetitions: ${ageItem.name}`);
    });
  });
});

// 2. Karvonen Heart Rate Calculator Tests
['karvonen-heart-rate-calculator', 'heart-rate-zone-calculator'].forEach(slug => {
  LOCALES.forEach(lang => {
    runTest(`Karvonen [${slug}] [${lang}]: Worked example calculates HRR with zero BMI contamination`, () => {
      const ex = getWorkedExample(slug, lang);
      assert.ok(ex, 'Worked example must exist');

      const allSteps = ex.steps.join(' ');
      assert.ok(allSteps.includes('190'), `Steps must calculate Max HR = 190 bpm: ${allSteps}`);
      assert.ok(allSteps.includes('130'), `Steps must calculate HRR = 130 bpm: ${allSteps}`);
      assert.ok(allSteps.includes('138') && allSteps.includes('151'), `Steps must calculate Zone 2 bounds 138 - 151: ${allSteps}`);
      assert.ok(ex.result.value.includes('138') && ex.result.value.includes('151'), `Result must show 138 – 151: ${ex.result.value}`);

      // Assert ZERO BMI contamination
      assert.strictEqual(allSteps.includes('Square height'), false, 'Karvonen steps must NOT contain Square height');
      assert.strictEqual(allSteps.includes('3.0625'), false, 'Karvonen steps must NOT contain 3.0625');
      assert.strictEqual(ex.result.label.toLowerCase().includes('bmi'), false, 'Result label must not mention BMI');
    });
  });
});

// 3. Contextual Article Mapping Tests
const calcFile = fs.readFileSync(path.resolve('src/pages/[lang]/[calculator].astro'), 'utf8');
const match = calcFile.match(/const relevantArticlesBySlug:\s*Record<string,\s*string\[\]>\s*=\s*({[\s\S]*?});/);
assert.ok(match, 'relevantArticlesBySlug must be defined in [calculator].astro');
const mapping = eval(`(${match[1]})`);

calculators.forEach(calc => {
  runTest(`Contextual Articles [${calc.slug}]: Has 2-3 curated articles and all slugs exist`, () => {
    const articles = mapping[calc.slug];
    assert.ok(articles, `Missing relevantArticlesBySlug mapping for ${calc.slug}`);
    assert.ok(Array.isArray(articles), `Articles for ${calc.slug} must be an array`);
    assert.ok(articles.length >= 2 && articles.length <= 3, `${calc.slug} must have 2 or 3 curated articles, got ${articles.length}`);
    
    articles.forEach(artSlug => {
      assert.ok(blogArticles[artSlug], `Article slug "${artSlug}" referenced by ${calc.slug} does not exist in blogArticles`);
    });
  });
});

// 4. Footer Attribution Tests
runTest('Footer Attribution: Displays verified author identity (Bhawanshi Dosi) and transparent governance', () => {
  const footerContent = fs.readFileSync(path.resolve('src/components/Footer.astro'), 'utf8');
  assert.ok(footerContent.includes('Bhawanshi Dosi'), 'Footer must prominently display verified creator Bhawanshi Dosi');
});

// 5. Homepage Information Architecture Tests
runTest('Homepage HealthContent: All 4 Sections Distinct & Non-Repetitive across all 6 locales', () => {
  const healthContent = fs.readFileSync(path.resolve('src/components/HealthContent.astro'), 'utf8');

  // Verify that duplicate stub phrases are completely removed
  assert.strictEqual(healthContent.includes('BMI & Complementary Health Measures: Understanding Reference Standards'), false, 'Duplicate stub title removed');
  assert.strictEqual(healthContent.includes('Understanding BMI & Waist Reference Standards'), false, 'Duplicate waist stub title removed');
  
  // Verify all 4 enriched pillars exist
  assert.ok(healthContent.includes('Anthropometric Screening & International Reference Standards'), 'Enriched Section 1 present');
  assert.ok(healthContent.includes('Metabolic Energy Balance: Integrating BMR & TDEE'), 'Enriched Section 2 present');
  assert.ok(healthContent.includes('Body Composition & Abdominal Visceral Adiposity'), 'Enriched Section 3 present');
  assert.ok(healthContent.includes('Clinical Limitations & Screening Scope'), 'Enriched Section 4 present');

  // Verify non-English pillars
  assert.ok(healthContent.includes('एंथ्रोपोमेट्रिक स्क्रीनिंग एवं अंतरराष्ट्रीय संदर्भ मानक'), 'Hindi Section 1 present');
  assert.ok(healthContent.includes('Cribado Antropométrico y Estándares Internacionales'), 'Spanish Section 1 present');
  assert.ok(healthContent.includes('Dépistage Anthropométrique et Normes Internationales'), 'French Section 1 present');
  assert.ok(healthContent.includes('Anthropometrisches Screening & Internationale WHO-Standards'), 'German Section 1 present');
  assert.ok(healthContent.includes('인체 계측 스크리닝 및 국제 WHO 표준 기준'), 'Korean Section 1 present');
});

// 6. Dead External Citation URLs Absent from Source Code
const DEAD_CITATION_PATTERNS = [
  'cdc.gov/healthyweight/assessing/bmi/adult_bmi',
  'cdc.gov/healthyweight/losing_weight',
  'navyfitness.org/fitness/500-physical-readiness/body-composition-assessment',
  'acog.org/clinical/guidance/committee-opinion/articles/2013/01/weight-gain-during-pregnancy',
  'who.int/publications/i/item/9241208546',
  '//maths.ox.ac.uk/trefethen/bmi.html'
];

function scanDirectoryForDeadUrls(dir, extFilter = ['.astro', '.ts', '.js', '.mjs', '.html']) {
  const matches = [];
  function recurse(current) {
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const ent of entries) {
      const fullPath = path.join(current, ent.name);
      if (ent.isDirectory()) {
        if (ent.name !== 'node_modules' && ent.name !== '.git') {
          recurse(fullPath);
        }
      } else if (ent.isFile() && extFilter.some(ext => ent.name.endsWith(ext))) {
        const content = fs.readFileSync(fullPath, 'utf8');
        for (const deadPattern of DEAD_CITATION_PATTERNS) {
          if (content.includes(deadPattern)) {
            matches.push({ file: fullPath, pattern: deadPattern });
          }
        }
      }
    }
  }
  recurse(dir);
  return matches;
}

runTest('Dead Citation URLs: Zero occurrences across src/ directory', () => {
  const violations = scanDirectoryForDeadUrls(path.resolve('src'));
  assert.strictEqual(violations.length, 0, `Found dead citation URLs in src/: ${JSON.stringify(violations, null, 2)}`);
});

// 7. Karvonen vs 1RM Domain Separation across All 6 Locales
LOCALES.forEach(lang => {
  runTest(`Karvonen Guide [${lang}]: Cardiovascular guidance separated with zero 1RM / repetition contamination`, () => {
    const cardioGuide = getToolInterpretationAndLimitations('karvonen-heart-rate-calculator', lang);
    assert.strictEqual(cardioGuide.domain, 'cardio', 'Domain must be cardio');
    const combinedText = `${cardioGuide.sectionTitle} ${cardioGuide.sectionSubtitle} ${cardioGuide.interpretationTitle} ${cardioGuide.interpretationText} ${cardioGuide.limitationsTitle} ${cardioGuide.limitationsText}`;
    
    assert.strictEqual(combinedText.includes('1RM'), false, 'Karvonen guide must NOT mention 1RM');
    assert.strictEqual(combinedText.includes('repetition') || combinedText.includes('repeticion') || combinedText.includes('répétition'), false, 'Karvonen guide must NOT mention repetition');
    assert.strictEqual(combinedText.includes('10 repetitions'), false, 'Karvonen guide must NOT mention 10 repetitions');
    assert.ok(combinedText.toLowerCase().includes('heart') || combinedText.toLowerCase().includes('cardio') || combinedText.toLowerCase().includes('kardio') || combinedText.toLowerCase().includes('herz') || combinedText.includes('हृदय') || combinedText.includes('심박'), 'Karvonen guide must focus on cardiovascular heart rate');
  });

  runTest(`1RM Guide [${lang}]: Muscular strength guidance separated with zero cardiovascular / heart rate contamination`, () => {
    const strengthGuide = getToolInterpretationAndLimitations('1rm-calculator', lang);
    assert.strictEqual(strengthGuide.domain, 'strength', 'Domain must be strength');
    const combinedText = `${strengthGuide.sectionTitle} ${strengthGuide.sectionSubtitle} ${strengthGuide.interpretationTitle} ${strengthGuide.interpretationText} ${strengthGuide.limitationsTitle} ${strengthGuide.limitationsText}`;
    
    assert.strictEqual(combinedText.toLowerCase().includes('heart rate'), false, '1RM guide must NOT mention heart rate');
    assert.strictEqual(combinedText.includes('HRR'), false, '1RM guide must NOT mention HRR');
    assert.strictEqual(combinedText.includes('हृदय गति'), false, '1RM guide must NOT mention heart rate in Hindi');
    assert.strictEqual(combinedText.includes('심박'), false, '1RM guide must NOT mention heart rate in Korean');
    assert.ok(combinedText.includes('1RM'), '1RM guide must focus on 1RM principles');
  });
});

// 8. Tool-Specific Citations in ToolSEOContent.astro
runTest('ToolSEOContent: Karvonen and 1RM have verified tool-specific citations, not generic BMI citations', () => {
  const toolSeoContent = fs.readFileSync(path.resolve('src/components/ToolSEOContent.astro'), 'utf8');
  assert.ok(toolSeoContent.includes("'karvonen-heart-rate-calculator'"), 'Karvonen must have entry in toolSpecificReferences');
  assert.ok(toolSeoContent.includes('13443783'), 'Karvonen entry must reference Karvonen 1957 study (PMID 13443783)');
  assert.ok(toolSeoContent.includes('heart.org'), 'Karvonen entry must reference AHA Target Heart Rates');
  
  assert.ok(toolSeoContent.includes("'1rm-calculator'"), '1RM must have entry in toolSpecificReferences');
  assert.ok(toolSeoContent.includes('19204579'), '1RM entry must reference ACSM Position Stand (PMID 19204579)');
  assert.ok(toolSeoContent.includes('9565931'), '1RM entry must reference LeSuer/Brzycki study (PMID 9565931)');
});

// 9. Blog Contextual CTAs and Curated Related Tools
const allArticleSlugs = Object.keys(blogArticles);
allArticleSlugs.forEach(slug => {
  runTest(`Blog Article [${slug}]: Has contextual CTA and 3-4 curated related calculators across all 6 locales`, () => {
    const meta = blogArticleToolsMap[slug];
    assert.ok(meta, `Missing blogArticleToolsMap entry for article ${slug}`);
    
    const calcSlugs = calculators.map(c => c.slug);
    assert.ok(calcSlugs.includes(meta.targetSlug), `targetSlug "${meta.targetSlug}" must exist in calculators.ts`);
    assert.ok(Array.isArray(meta.relatedSlugs), 'relatedSlugs must be an array');
    assert.ok(meta.relatedSlugs.length >= 3 && meta.relatedSlugs.length <= 4, `relatedSlugs must have 3 or 4 items, got ${meta.relatedSlugs.length}`);
    meta.relatedSlugs.forEach(rel => {
      assert.ok(calcSlugs.includes(rel), `relatedSlug "${rel}" must exist in calculators.ts`);
    });

    LOCALES.forEach(lang => {
      const cta = meta.cta[lang];
      assert.ok(cta, `Missing CTA for locale ${lang} in article ${slug}`);
      assert.ok(cta.title && cta.title.trim().length > 0, `CTA title must not be empty for ${slug} [${lang}]`);
      assert.ok(cta.btnText && cta.btnText.trim().length > 0, `CTA btnText must not be empty for ${slug} [${lang}]`);
      assert.ok(cta.linkText && cta.linkText.trim().length > 0, `CTA linkText must not be empty for ${slug} [${lang}]`);
      
      // Verify translated button text does not contain English fallback in other locales
      if (lang === 'hi') {
        assert.ok(cta.btnText.includes('→'), 'Button text should include arrow');
        assert.ok(!cta.btnText.toLowerCase().includes('calculate'), `Hindi button text should not be English: ${cta.btnText}`);
      } else if (lang === 'es') {
        assert.ok(!cta.btnText.toLowerCase().includes('calculate'), `Spanish button text should not be English: ${cta.btnText}`);
      } else if (lang === 'fr') {
        assert.ok(!cta.btnText.toLowerCase().includes('calculate'), `French button text should not be English: ${cta.btnText}`);
      } else if (lang === 'de') {
        assert.ok(!cta.btnText.toLowerCase().includes('calculate'), `German button text should not be English: ${cta.btnText}`);
      } else if (lang === 'ko') {
        assert.ok(!cta.btnText.toLowerCase().includes('calculate'), `Korean button text should not be English: ${cta.btnText}`);
      }
    });
  });
});

// 10. Homepage HealthContent Deduplication and In-Depth Chart Link
runTest('HealthContent: Single responsive table, no duplicate mobile cards, in-depth chart link present', () => {
  const healthContent = fs.readFileSync(path.resolve('src/components/HealthContent.astro'), 'utf8');
  assert.strictEqual(healthContent.includes('sm:hidden'), false, 'HealthContent must not contain duplicate sm:hidden mobile cards');
  assert.strictEqual(healthContent.includes('hidden sm:block'), false, 'HealthContent must not contain hidden sm:block desktop wrapper');
  const tableOccurrences = (healthContent.match(/<table/g) || []).length;
  assert.strictEqual(tableOccurrences, 1, 'Exactly one <table> element should exist in HealthContent');
  assert.strictEqual(healthContent.includes('inDepthTitle'), true, 'Must include inDepthTitle in HealthContent');
  assert.strictEqual(healthContent.includes('href={`/${lang}/bmi-chart/`}'), true, 'Must link to dedicated in-depth BMI chart page');
});

// 11. Compiled dist/ HTML Route-Level Verification Tests
if (fs.existsSync(path.resolve('dist'))) {
  console.log('\n--- Verifying Compiled dist/ HTML Files ---');
  
  // 11.0 Dead URLs in dist/
  runTest('dist/ HTML: Zero dead citation URLs across all compiled HTML files', () => {
    const violations = scanDirectoryForDeadUrls(path.resolve('dist'), ['.html']);
    assert.strictEqual(violations.length, 0, `Found dead citation URLs in dist/: ${JSON.stringify(violations, null, 2)}`);
  });

  // 11.1 1RM in dist/
  LOCALES.forEach(lang => {
    runTest(`dist/[${lang}] 1rm-calculator: HTML output has genuine 1RM example, citations, and no BMI contamination`, () => {
      const htmlPath = path.resolve(`dist/${lang}/1rm-calculator/index.html`);
      assert.ok(fs.existsSync(htmlPath), `File must exist: ${htmlPath}`);
      const html = fs.readFileSync(htmlPath, 'utf8');

      assert.ok(html.includes('117') || html.includes('116.67'), 'Must include 1RM calculated values');
      assert.strictEqual(html.includes('Square height'), false, 'Must NOT contain Square height');
      assert.strictEqual(html.includes('3.0625'), false, 'Must NOT contain 3.0625');
      assert.strictEqual(html.includes('22.857'), false, 'Must NOT contain 22.857');
      assert.strictEqual(html.includes('light clothing without footwear'), false, 'Must NOT describe body weight scale mass');
      assert.strictEqual(html.includes('Completed years of life'), false, 'Must NOT describe chronological age in years');
      assert.ok(html.includes('85% – 100% 1RM') || html.includes('85% – 100%'), 'Must include 1RM percentage intensity spectrum in infographic');
      assert.strictEqual(html.includes('Underweight / Low'), false, 'Infographic must NOT contain adult BMI categories');
      assert.ok(html.includes('Real BMI Team') || html.includes('Real BMI'), 'Must have standardized footer attribution');
    });
  });

  // 11.2 Karvonen in dist/
  LOCALES.forEach(lang => {
    runTest(`dist/[${lang}] karvonen-heart-rate-calculator: HTML output has HRR calculation and no BMI contamination`, () => {
      const htmlPath = path.resolve(`dist/${lang}/karvonen-heart-rate-calculator/index.html`);
      assert.ok(fs.existsSync(htmlPath), `File must exist: ${htmlPath}`);
      const html = fs.readFileSync(htmlPath, 'utf8');

      assert.ok(html.includes('190') && html.includes('130') && html.includes('138') && html.includes('151'), 'Must include Karvonen calculated values (190, 130, 138-151)');
      assert.strictEqual(html.includes('Square height'), false, 'Must NOT contain Square height');
      assert.strictEqual(html.includes('3.0625'), false, 'Must NOT contain 3.0625');
      assert.strictEqual(html.includes('22.857'), false, 'Must NOT contain 22.857');
      assert.ok(html.includes('Real BMI Team') || html.includes('Real BMI'), 'Must have standardized footer attribution');
    });
  });

  // 11.3 Contextual article counts and footer across canonical calculators in all 6 locales
  calculators.filter(c => c.slug !== 'one-rep-max-calculator' && c.slug !== '3d-body-visualizer').forEach(calc => {
    LOCALES.forEach(lang => {
      runTest(`dist/[${lang}] [${calc.slug}]: Exactly 2-3 curated articles rendered & standardized footer`, () => {
        const htmlPath = path.resolve(`dist/${lang}/${calc.slug}/index.html`);
        assert.ok(fs.existsSync(htmlPath), `File must exist: ${htmlPath}`);
        const html = fs.readFileSync(htmlPath, 'utf8');

        // Extract article links rendered in the LatestArticles section (canonical /en/blog/ or localized)
        const articleMatches = html.match(/href="\/(?:en|[a-z]{2})\/blog\/[a-z0-9-]+\/"/g) || [];
        // Unique article slugs linked
        const uniqueArticles = [...new Set(articleMatches)];
        assert.ok(uniqueArticles.length >= 2 && uniqueArticles.length <= 3, 
          `${lang}/${calc.slug} must render 2 or 3 curated articles, found ${uniqueArticles.length}: ${JSON.stringify(uniqueArticles)}`);

        assert.ok(html.includes('Real BMI Team') || html.includes('Real BMI'), 'Must have standardized footer attribution');
      });
    });
  });

  // 11.3b Consolidated 1RM edge redirect verification across all 6 locales
  const redirectsContent = fs.readFileSync(path.resolve('public/_redirects'), 'utf8');
  LOCALES.forEach(lang => {
    runTest(`_redirects: [${lang}] [one-rep-max-calculator] has 301 edge redirect to 1rm-calculator`, () => {
      assert.ok(redirectsContent.includes(`/${lang}/one-rep-max-calculator  /${lang}/1rm-calculator/  301`), `_redirects must contain 301 for /${lang}/one-rep-max-calculator`);
    });
  });

  // 11.3c Consolidated 3D Body Visualizer edge redirect verification across all 6 locales
  LOCALES.forEach(lang => {
    runTest(`_redirects: [${lang}] [3d-body-visualizer] has 301 edge redirect to 3d-bmi-calculator`, () => {
      assert.ok(redirectsContent.includes(`/${lang}/3d-body-visualizer  /${lang}/3d-bmi-calculator/  301`), `_redirects must contain 301 for /${lang}/3d-body-visualizer`);
    });
  });

  // 11.4 Homepage HTML pillars & footer
  LOCALES.forEach(lang => {
    runTest(`dist/[${lang}] Homepage: 4 distinct HealthContent pillars and standardized footer`, () => {
      const htmlPath = path.resolve(`dist/${lang}/index.html`);
      assert.ok(fs.existsSync(htmlPath), `File must exist: ${htmlPath}`);
      const html = fs.readFileSync(htmlPath, 'utf8');

      assert.ok(html.includes('Real BMI Team') || html.includes('Real BMI'), 'Must have standardized footer attribution');
      assert.strictEqual(html.includes('BMI & Complementary Health Measures: Understanding Reference Standards'), false, 'Duplicate stub title absent');
      assert.strictEqual(html.includes('Understanding BMI & Waist Reference Standards'), false, 'Duplicate waist stub title absent');
    });
  });

  // 11.5 Blog Articles dist/ HTML: Contextual CTA and 3-4 Related Calculators (No HubGrid Dump)
  allArticleSlugs.forEach(slug => {
    LOCALES.forEach(lang => {
      runTest(`dist/[${lang}] blog/[${slug}]: Has contextual CTA, 3-4 related calculator cards, and no full HubGrid dump`, () => {
        const htmlPath = path.resolve(`dist/${lang}/blog/${slug}/index.html`);
        assert.ok(fs.existsSync(htmlPath), `File must exist: ${htmlPath}`);
        const html = fs.readFileSync(htmlPath, 'utf8');

        const meta = blogArticleToolsMap[slug];
        assert.ok(meta, `Meta must exist for ${slug}`);
        const cta = meta.cta[lang];

        // Assert contextual CTA button link exists
        assert.ok(html.includes(`href="/${lang}/${meta.targetSlug}/"`), `HTML must contain link to target calculator /${lang}/${meta.targetSlug}/`);

        // Assert HubGrid (full calculator directory dump) is NOT present
        assert.strictEqual(html.includes('class="hub-grid"'), false, 'Blog post must NOT dump full HubGrid');

        // Assert Related Calculators section exists and links to the 3-4 related slugs
        meta.relatedSlugs.forEach(rel => {
          assert.ok(html.includes(`href="/${lang}/${rel}/"`), `Must link to related tool /${lang}/${rel}/`);
        });

        // Assert footer attribution
        assert.ok(html.includes('Real BMI Team') || html.includes('Real BMI'), 'Must have standardized footer attribution');
      });
    });
  });

  // 11.6 Homepage dist/ HTML: Exactly one table and in-depth chart link present
  LOCALES.forEach(lang => {
    runTest(`dist/[${lang}] Homepage: Single responsive WHO table and in-depth chart link`, () => {
      const htmlPath = path.resolve(`dist/${lang}/index.html`);
      assert.ok(fs.existsSync(htmlPath), `File must exist: ${htmlPath}`);
      const html = fs.readFileSync(htmlPath, 'utf8');

      assert.ok(html.includes(`href="/${lang}/bmi-chart/"`), `Must link to dedicated in-depth BMI chart /${lang}/bmi-chart/`);
      assert.strictEqual(html.includes('sm:hidden'), false, 'Must NOT contain duplicate sm:hidden table cards');
    });
  });

  // 11.7 Embed Widget dist/ HTML: Completely AdSense-free, CMP-free, CookieBanner-free, and Footer-free
  runTest('dist/embed/bmi-calculator: 100% AdSense-free, CMP-free, CookieBanner-free, and Footer-free (AdSense Policy Compliant)', () => {
    const embedHtmlPath = path.resolve('dist/embed/bmi-calculator/index.html');
    assert.ok(fs.existsSync(embedHtmlPath), `File must exist: ${embedHtmlPath}`);
    const embedHtml = fs.readFileSync(embedHtmlPath, 'utf8');

    // Must be noindex
    assert.ok(embedHtml.includes('noindex, follow'), 'Embed page must be noindex');

    // Must NOT contain AdSense auto-ads or account tag
    assert.strictEqual(embedHtml.includes('adsbygoogle.js'), false, 'Embed page must NOT load adsbygoogle.js');
    assert.strictEqual(embedHtml.includes('google-adsense-account'), false, 'Embed page must NOT have google-adsense-account tag');

    // Must NOT contain Funding Choices CMP script
    assert.strictEqual(embedHtml.includes('fundingchoicesmessages.google.com/i/pub'), false, 'Embed page must NOT load Funding Choices CMP script');

    // Must NOT contain Cookie Consent banner or preferences modal
    assert.strictEqual(embedHtml.includes('cookieConsentBanner'), false, 'Embed page must NOT render cookieConsentBanner');
    assert.strictEqual(embedHtml.includes('cookiePreferencesSheet'), false, 'Embed page must NOT render cookiePreferencesSheet');

    // Must NOT render full site footer
    assert.strictEqual(embedHtml.includes('<footer'), false, 'Embed page must NOT render full site footer');

    // Must NOT render slideshow DOM
    assert.strictEqual(embedHtml.includes('bg-slideshow'), false, 'Embed page must NOT render background slideshow');

    // Must contain functional calculator widget form
    assert.ok(embedHtml.includes('embed-widget-form'), 'Embed page must render embed-widget-form');
    assert.ok(embedHtml.includes('Powered by'), 'Embed page must contain attribution backlink');
  });

  // 11.8 Error Pages dist/ HTML: Completely AdSense-free and CMP-free (AdSense Policy Compliant)
  runTest('dist/404.html & dist/500.html: 100% AdSense-free and CMP-free (AdSense Policy Compliant)', () => {
    ['dist/404.html', 'dist/500.html'].forEach(filePath => {
      const fullPath = path.resolve(filePath);
      assert.ok(fs.existsSync(fullPath), `Error page file must exist: ${fullPath}`);
      const html = fs.readFileSync(fullPath, 'utf8');

      // Must NOT contain AdSense auto-ads or account tag
      assert.strictEqual(html.includes('adsbygoogle.js'), false, `${filePath} must NOT load adsbygoogle.js`);
      assert.strictEqual(html.includes('google-adsense-account'), false, `${filePath} must NOT have google-adsense-account tag`);

      // Must NOT contain Funding Choices CMP script
      assert.strictEqual(html.includes('fundingchoicesmessages.google.com/i/pub'), false, `${filePath} must NOT load Funding Choices CMP script`);
    });
  });

  // 11.9 Blog Directory dist/ HTML: Empty-state message not rendered in SSR (AdSense Under-Construction & Low-Value Policy Compliant)
  runTest('dist/en/blog/index.html: #noResultsMsg container is empty in SSR and carries dynamic data attributes', () => {
    const blogHtmlPath = path.resolve('dist/en/blog/index.html');
    assert.ok(fs.existsSync(blogHtmlPath), `Blog directory must exist: ${blogHtmlPath}`);
    const blogHtml = fs.readFileSync(blogHtmlPath, 'utf8');

    // Container must exist and be empty of pre-rendered text in SSR
    const match = blogHtml.match(/<div id="noResultsMsg"[^>]*>([\s\S]*?)<\/div>/i);
    assert.ok(match, '#noResultsMsg must exist');
    assert.strictEqual(match[1].trim(), '', '#noResultsMsg must NOT render text content in SSR');

    // Must carry data attributes for dynamic client-side rendering
    assert.ok(blogHtml.includes('data-empty-title="No health guides found"'), 'Must have data-empty-title');
    assert.ok(blogHtml.includes('data-empty-desc="Try searching with a different term or clear the filter."'), 'Must have data-empty-desc');

    // All 37 article cards must be present
    const cardMatches = blogHtml.match(/class="[^"]*article-item[^"]*"/g) || [];
    assert.strictEqual(cardMatches.length, 37, 'Must render all 37 blog article cards in SSR');
  });

  // 12. METHODOLOGY & LIVE CALCULATOR SUITE ALIGNMENT AUDIT
  runTest('12.1 seoDatabase: ideal-weight-calculator.en formula is in English (no Hindi leakage)', () => {
    const seoContent = fs.readFileSync(path.resolve('src/data/seoDatabase.ts'), 'utf8');
    const ibwMatch = seoContent.match(/"ideal-weight-calculator":\s*\{[\s\S]*?"en":\s*\{[\s\S]*?"formulaCode":\s*"([^"]+)"/);
    assert.ok(ibwMatch, 'ideal-weight-calculator en entry must exist');
    const formulaCode = ibwMatch[1];
    assert.ok(formulaCode.includes('IBW (Devine)'), 'Formula must reference Devine');
    assert.strictEqual(/[\u0900-\u097F]/.test(formulaCode), false, 'Formula code must NOT contain Devanagari characters');
  });

  runTest('12.2 HubGrid: filters alias slugs so directory buttons link strictly to canonical 200 URLs', () => {
    const hubGrid = fs.readFileSync(path.resolve('src/components/HubGrid.astro'), 'utf8');
    assert.ok(hubGrid.includes('aliasSlugs'), 'HubGrid must define aliasSlugs');
    assert.ok(hubGrid.includes('activeCalculators'), 'HubGrid must filter calculators using activeCalculators');
    assert.strictEqual(hubGrid.includes('calculators.map'), false, 'HubGrid must NOT map over unfiltered calculators');
  });

  runTest('12.3 methodology.astro: contains documentation for all 25 calculator slugs', () => {
    const methodology = fs.readFileSync(path.resolve('src/pages/[lang]/methodology.astro'), 'utf8');
    const slugs = [...methodology.matchAll(/"slug":\s*"([^"]+)"/g)].map(m => m[1]);
    assert.strictEqual(slugs.length, 25, 'Methodology matrix must have exactly 25 items');
    assert.ok(slugs.includes('pregnancy-weight-gain-calculator'), 'Must include pregnancy calculator');
    assert.ok(slugs.includes('diabetes-risk-calculator'), 'Must include diabetes risk calculator');
  });

  runTest('12.4 calculatorGuides & methodology: clinical limitations explicitly defined for pregnancy & diabetes', () => {
    const guides = fs.readFileSync(path.resolve('src/utils/calculatorGuides.ts'), 'utf8');
    assert.ok(guides.includes('singleton pregnancies'), 'Pregnancy guide must state limitation to singleton pregnancies');
    assert.ok(guides.includes('preeclampsia'), 'Pregnancy guide must alert on preeclampsia warning signs');
    assert.ok(guides.includes('Only a doctor can diagnose'), 'Diabetes guide must clarify that only a doctor can diagnose');
    assert.ok(guides.includes('lifestyle screening guide, not a medical test'), 'Diabetes guide must clarify lifestyle screening guide');

    const methodology = fs.readFileSync(path.resolve('src/pages/[lang]/methodology.astro'), 'utf8');
    assert.ok(methodology.includes('singleton pregnancies') || methodology.includes('gestational'), 'Methodology must detail pregnancy limitations');
  });

  runTest('12.5 CalculatorResult: no unsupported medical diagnosis or treatment claims', () => {
    const resultComp = fs.readFileSync(path.resolve('src/components/CalculatorResult.astro'), 'utf8');
    assert.strictEqual(resultComp.includes('hasDiagnosticClaim: true'), false, 'CalculatorResult must NOT assert diagnostic claims');
  });

  runTest('12.6 dist/: all 23 active unique calculators exist across all 6 locales (138 pages)', () => {
    const activeSlugs = [
      'bmi-calculator', '3d-bmi-calculator', 'bmi-chart', 'bmi-calculator-for-indians',
      'healthy-weight-by-height', 'diabetes-risk-calculator', 'asian-bmi-calculator',
      'bmr-calculator', 'tdee-calculator', 'maintenance-calorie-calculator',
      'body-fat-calculator', 'lean-body-mass-calculator', 'ideal-weight-calculator',
      'calorie-calculator', 'protein-intake-calculator', 'water-intake-calculator',
      'macro-calculator', 'waist-to-hip-ratio-calculator', 'body-surface-area-calculator',
      'heart-rate-zone-calculator', 'karvonen-heart-rate-calculator', '1rm-calculator',
      'pregnancy-weight-gain-calculator'
    ];
    let count = 0;
    for (const lang of LOCALES) {
      for (const slug of activeSlugs) {
        const filePath = path.resolve(`dist/${lang}/${slug}/index.html`);
        assert.ok(fs.existsSync(filePath), `Calculator page must exist: dist/${lang}/${slug}/index.html`);
        const stats = fs.statSync(filePath);
        assert.ok(stats.size > 1000, `Calculator page dist/${lang}/${slug}/index.html must not be empty`);
        count++;
      }
    }
    assert.strictEqual(count, 138, 'Must verify all 138 unique calculator locale pages');
  });

  runTest('12.7 Calculator count consistency: verified exactly 23 live tools across homepages, contact, footer, and methodology', () => {
    // 1. Homepage hub wrapper renders exactly 23 cards
    const hubWrapper = fs.readFileSync(path.resolve('src/components/HomepageHubWrapper.astro'), 'utf8');
    assert.ok(hubWrapper.includes('karvonen-heart-rate-calculator'), 'HubWrapper must include karvonen calculator');
    assert.ok(hubWrapper.includes('bmi-chart'), 'HubWrapper must include bmi-chart');

    // 2. Root index and en index badges say 23
    const rootIndex = fs.readFileSync(path.resolve('src/pages/index.astro'), 'utf8');
    assert.ok(rootIndex.includes('23 Tools'), 'Root index must say 23 Tools');
    assert.strictEqual(rootIndex.includes('18+ Tools'), false, 'Root index must NOT say 18+ Tools');

    const enIndex = fs.readFileSync(path.resolve('src/pages/en/index.astro'), 'utf8');
    assert.ok(enIndex.includes('23 Tools'), 'EN index must say 23 Tools');
    assert.strictEqual(enIndex.includes('18+ Tools'), false, 'EN index must NOT say 18+ Tools');
    assert.strictEqual(enIndex.includes('15+'), false, 'EN index must NOT say 15+');

    // 3. Contact page scope says 23
    const enContact = fs.readFileSync(path.resolve('src/pages/en/contact.astro'), 'utf8');
    assert.ok(enContact.includes('23 Free Health Calculators'), 'EN contact page must state 23 Free Health Calculators');
    assert.strictEqual(enContact.includes('25 Free Health Calculators'), false, 'EN contact page must NOT state 25');

    // 4. Methodology table view desc says 23
    const methodology = fs.readFileSync(path.resolve('src/pages/[lang]/methodology.astro'), 'utf8');
    assert.ok(methodology.includes('all 23 computational health tools'), 'Methodology must state 23 computational health tools');
    assert.strictEqual(methodology.includes('all 25 computational health tools'), false, 'Methodology must NOT state 25');

    // 5. Footer says 23
    const footer = fs.readFileSync(path.resolve('src/components/Footer.astro'), 'utf8');
    assert.ok(footer.includes('All 23 Calculators'), 'Footer must state All 23 Calculators');
    assert.strictEqual(footer.includes('All 18+ Calculators'), false, 'Footer must NOT state 18+');
  });

  runTest('12.8 Hreflang integrity: zero hreflang links point to redirects or broken pages', () => {
    const layout = fs.readFileSync(path.resolve('src/layouts/Layout.astro'), 'utf8');
    assert.strictEqual(layout.includes('/de/blog/bmi-interpretation-guidelines/'), false, 'Layout must NOT output German hreflang for blog stubs');
    assert.strictEqual(layout.includes('hreflang="de" href="https://realbmicalculator.com/de/blog/'), false, 'Layout must NOT have redirecting blog hreflang');
  });
}

console.log('====================================================');
console.log(`   PRODUCTION REMEDIATION SUMMARY: ${passedTests} / ${totalTests} PASSED`);
console.log('====================================================');

if (passedTests !== totalTests) {
  process.exit(1);
}
