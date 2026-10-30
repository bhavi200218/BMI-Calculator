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
runTest('Footer Attribution: Universally Displays institutional "Real BMI Team" with zero PII', () => {
  const footerContent = fs.readFileSync(path.resolve('src/components/Footer.astro'), 'utf8');
  assert.ok(footerContent.includes('Real BMI Team') || footerContent.includes('Real BMI'), 'Footer must contain institutional attribution');
  assert.strictEqual(footerContent.includes('Bhawanshi'), false, 'Footer must contain ZERO personal PII');
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

        // Extract article links rendered in the LatestArticles section
        const articleMatches = html.match(new RegExp(`href="/${lang}/blog/[a-z0-9-]+/"`, 'g')) || [];
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
}

console.log('====================================================');
console.log(`   PRODUCTION REMEDIATION SUMMARY: ${passedTests} / ${totalTests} PASSED`);
console.log('====================================================');

if (passedTests !== totalTests) {
  process.exit(1);
}
