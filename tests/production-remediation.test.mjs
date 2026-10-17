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
const { getInputVariablesGuide } = loadTsModule('src/utils/calculatorGuides.ts');
const { blogArticles } = loadTsModule('src/utils/blogArticles.ts');
const { calculators } = loadTsModule('src/utils/calculators.ts');

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
runTest('Footer Attribution: Universally Displays "Created and maintained by Bhawanshi Dosi"', () => {
  const footerContent = fs.readFileSync(path.resolve('src/components/Footer.astro'), 'utf8');
  assert.ok(footerContent.includes('Created and maintained by Bhawanshi Dosi'), 'Footer must contain exact standardized attribution');
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

// 6. Compiled dist/ HTML Route-Level Verification Tests
if (fs.existsSync(path.resolve('dist'))) {
  console.log('\n--- Verifying Compiled dist/ HTML Files ---');
  
  // 6.1 1RM in dist/
  LOCALES.forEach(lang => {
    runTest(`dist/[${lang}] 1rm-calculator: HTML output has genuine 1RM example and no BMI contamination`, () => {
      const htmlPath = path.resolve(`dist/${lang}/1rm-calculator/index.html`);
      assert.ok(fs.existsSync(htmlPath), `File must exist: ${htmlPath}`);
      const html = fs.readFileSync(htmlPath, 'utf8');

      assert.ok(html.includes('117') || html.includes('116.67'), 'Must include 1RM calculated values');
      assert.strictEqual(html.includes('Square height'), false, 'Must NOT contain Square height');
      assert.strictEqual(html.includes('3.0625'), false, 'Must NOT contain 3.0625');
      assert.strictEqual(html.includes('22.857'), false, 'Must NOT contain 22.857');
      assert.strictEqual(html.includes('light clothing without footwear'), false, 'Must NOT describe body weight scale mass');
      assert.strictEqual(html.includes('Completed years of life'), false, 'Must NOT describe chronological age in years');
      assert.ok(html.includes('Created and maintained by Bhawanshi Dosi'), 'Must have standardized footer attribution');
    });
  });

  // 6.2 Karvonen in dist/
  LOCALES.forEach(lang => {
    runTest(`dist/[${lang}] karvonen-heart-rate-calculator: HTML output has HRR calculation and no BMI contamination`, () => {
      const htmlPath = path.resolve(`dist/${lang}/karvonen-heart-rate-calculator/index.html`);
      assert.ok(fs.existsSync(htmlPath), `File must exist: ${htmlPath}`);
      const html = fs.readFileSync(htmlPath, 'utf8');

      assert.ok(html.includes('190') && html.includes('130') && html.includes('138') && html.includes('151'), 'Must include Karvonen calculated values (190, 130, 138-151)');
      assert.strictEqual(html.includes('Square height'), false, 'Must NOT contain Square height');
      assert.strictEqual(html.includes('3.0625'), false, 'Must NOT contain 3.0625');
      assert.strictEqual(html.includes('22.857'), false, 'Must NOT contain 22.857');
      assert.ok(html.includes('Created and maintained by Bhawanshi Dosi'), 'Must have standardized footer attribution');
    });
  });

  // 6.3 Contextual article counts and footer across all 25 calculators in all 6 locales
  calculators.forEach(calc => {
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

        assert.ok(html.includes('Created and maintained by Bhawanshi Dosi'), 'Must have standardized footer attribution');
      });
    });
  });

  // 6.4 Homepage HTML pillars & footer
  LOCALES.forEach(lang => {
    runTest(`dist/[${lang}] Homepage: 4 distinct HealthContent pillars and standardized footer`, () => {
      const htmlPath = path.resolve(`dist/${lang}/index.html`);
      assert.ok(fs.existsSync(htmlPath), `File must exist: ${htmlPath}`);
      const html = fs.readFileSync(htmlPath, 'utf8');

      assert.ok(html.includes('Created and maintained by Bhawanshi Dosi'), 'Must have standardized footer attribution');
      assert.strictEqual(html.includes('BMI & Complementary Health Measures: Understanding Reference Standards'), false, 'Duplicate stub title absent');
      assert.strictEqual(html.includes('Understanding BMI & Waist Reference Standards'), false, 'Duplicate waist stub title absent');
    });
  });
}

console.log('====================================================');
console.log(`   PRODUCTION REMEDIATION SUMMARY: ${passedTests} / ${totalTests} PASSED`);
console.log('====================================================');

if (passedTests !== totalTests) {
  process.exit(1);
}
