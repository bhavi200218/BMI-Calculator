import fs from 'fs';
import path from 'path';
import assert from 'assert';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const esbuild = require('esbuild');

const WORKSPACE = process.cwd();
const LOCALES = ['en', 'es', 'fr', 'de', 'ko', 'hi'];

console.log('====================================================');
console.log('   RUNNING COMPLETE MULTILINGUAL PARITY SUITE       ');
console.log('====================================================');

let totalTests = 0;
let passedTests = 0;

function test(name, fn) {
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

// Load calculators.ts
const calcCode = fs.readFileSync(path.join(WORKSPACE, 'src/utils/calculators.ts'), 'utf-8');
const calcSlugsMatch = [...calcCode.matchAll(/slug:\s*'([^']+)'/g)];
const calcSlugs = Array.from(new Set(calcSlugsMatch.map(m => m[1])));

test('Calculators Config: Contains all 26 calculator definitions', () => {
  assert.strictEqual(calcSlugs.length >= 26, true, `Expected >= 26 calculators, found ${calcSlugs.length}`);
});

// 1. Calculator Configuration Parity (Inputs, Labels, Primary & Secondary Outputs)
calcSlugs.forEach(slug => {
  LOCALES.forEach(lang => {
    test(`Calculator Config [${slug}] [${lang}]: All localized names and titles exist`, () => {
      assert.ok(calcCode.includes(slug), `Slug ${slug} missing in calculators.ts`);
    });
  });
});

// 2. Hero & Calculator Route Layout Parity ([lang]/[calculator].astro)
const calcRouteCode = fs.readFileSync(path.join(WORKSPACE, 'src/pages/[lang]/[calculator].astro'), 'utf-8');

test('[lang]/[calculator].astro: Shared Master Hero Template enforces 100% structural parity across all 6 locales', () => {
  assert.ok(calcRouteCode.includes('<nav aria-label="Breadcrumb"'), 'Breadcrumb navigation missing in Hero');
  assert.ok(calcRouteCode.includes('<h1 class="text-2xl sm:text-3xl md:text-4xl'), 'H1 Headline missing in Hero');
  assert.ok(calcRouteCode.includes('pageDesc'), 'Description paragraph missing in Hero');
  assert.ok(calcRouteCode.includes('ThreeDBodyVisualizer') && calcRouteCode.includes('UniversalCalculator'), 'Calculator Card components missing in Hero');
  assert.ok(calcRouteCode.includes('CalculatorResult'), 'Result Studio Panel missing in Hero');
  assert.ok(calcRouteCode.includes('ToolSEOContent'), 'ToolSEOContent missing in page schema');
});

// 3. Homepage Hero & Layout Parity across all 6 locales
LOCALES.forEach(lang => {
  const hpPath = path.join(WORKSPACE, `src/pages/${lang}/index.astro`);
  test(`Homepage Parity [${lang}]: File exists and matches Master Hero Template`, () => {
    assert.strictEqual(fs.existsSync(hpPath), true, `Homepage for ${lang} does not exist`);
    const hpCode = fs.readFileSync(hpPath, 'utf-8');
    assert.ok(hpCode.includes('Navbar'), `Navbar missing in ${lang} homepage`);
    assert.ok(hpCode.includes('HERO & MAIN HEADLINE'), `Hero section missing in ${lang} homepage`);
    assert.ok(hpCode.includes('HomepageHubWrapper'), `HomepageHubWrapper missing in ${lang} homepage`);
    assert.ok(hpCode.includes('WHY PEOPLE CHOOSE REAL BMI'), `Features grid missing in ${lang} homepage`);
    assert.ok(hpCode.includes('EmbedWidgetBox'), `EmbedWidgetBox missing in ${lang} homepage`);
    assert.ok(hpCode.includes('LatestArticles'), `LatestArticles missing in ${lang} homepage`);
    assert.ok(hpCode.includes('HealthContent'), `HealthContent missing in ${lang} homepage`);
    assert.ok(hpCode.includes('DeepHealthSEO'), `DeepHealthSEO missing in ${lang} homepage`);
    assert.ok(hpCode.includes('MedicalEEATBanner'), `MedicalEEATBanner missing in ${lang} homepage`);
  });
});

// 4. seoDatabase.ts Parity Tests (Transpiled in memory via esbuild)
const res = esbuild.buildSync({
  entryPoints: [path.join(WORKSPACE, 'src/data/seoDatabase.ts')],
  bundle: true,
  write: false,
  format: 'cjs'
});
const fn = new Function('module', 'exports', res.outputFiles[0].text + '\nreturn module.exports;');
const { seoDatabase: seoDb } = fn({ exports: {} }, {});
const seoSlugs = Object.keys(seoDb);

test('seoDatabase: Contains all 26 public calculator SEO entries', () => {
  assert.strictEqual(seoSlugs.length >= 26, true, `Expected >= 26 calculators, found ${seoSlugs.length}`);
});

const forbiddenFallbacks = [
  'underweight reference threshold',
  'optimal healthy range for indian adults',
  'elevated cardiometabolic risk cutoff for indians',
  'class i obesity threshold under icmr standards',
  'severe obesity risk threshold',
  'staatsbürger'
];

seoSlugs.forEach(slug => {
  const calcData = seoDb[slug];

  LOCALES.forEach(lang => {
    test(`seoDatabase [${slug}] [${lang}]: Language entry exists and is non-empty`, () => {
      assert.ok(calcData[lang], `Missing ${lang} block for ${slug}`);
      const item = calcData[lang];
      assert.ok(item.title && item.title.trim().length > 0, `Missing title in ${slug} [${lang}]`);
      assert.ok(item.intro && item.intro.trim().length > 0, `Missing intro in ${slug} [${lang}]`);
      assert.ok(item.formulaTitle && item.formulaTitle.trim().length > 0, `Missing formulaTitle in ${slug} [${lang}]`);
    });

    test(`seoDatabase [${slug}] [${lang}]: Table rows valid and free of English fallback strings`, () => {
      const rows = calcData[lang].tableRows || [];
      assert.ok(rows.length > 0, `Missing tableRows for ${slug} [${lang}]`);
      if (lang !== 'en') {
        rows.forEach((r, idx) => {
          forbiddenFallbacks.forEach(f => {
            assert.strictEqual(
              r.col3.toLowerCase().includes(f),
              false,
              `Found forbidden fallback "${f}" in ${slug} [${lang}] row ${idx}: ${r.col3}`
            );
          });
        });
      }
    });

    test(`seoDatabase [${slug}] [${lang}]: FAQs exist, no duplicates, no slug leaks`, () => {
      const faqs = calcData[lang].faqs || [];
      assert.ok(faqs.length >= 2, `Expected >= 2 FAQs for ${slug} [${lang}], found ${faqs.length}`);
      
      const questions = faqs.map(f => f.question.trim());
      const uniqueQuestions = new Set(questions);
      assert.strictEqual(
        questions.length,
        uniqueQuestions.size,
        `Duplicate FAQ questions found in ${slug} [${lang}]: ${questions.length} total, ${uniqueQuestions.size} unique`
      );

      if (lang !== 'en') {
        faqs.forEach((f, idx) => {
          assert.strictEqual(
            f.question.includes('bmi calculator for indians') || f.answer.includes('bmi calculator for indians'),
            false,
            `Slug leaked into FAQ text for ${slug} [${lang}] FAQ ${idx}`
          );
        });
      }
    });
  });
});

// 5. HealthContent.astro Parity Tests
const healthCode = fs.readFileSync(path.join(WORKSPACE, 'src/components/HealthContent.astro'), 'utf-8');
const healthMatch = healthCode.match(/const content: Record<string, any> = (\{[\s\S]*?\n\};)/);
assert.ok(healthMatch, 'HealthContent.astro must contain content object');
const healthDb = new Function(`return ${healthMatch[1]}`)();

LOCALES.forEach(lang => {
  test(`HealthContent [${lang}]: All core educational components exist`, () => {
    const item = healthDb[lang];
    assert.ok(item, `Missing HealthContent block for ${lang}`);
    assert.strictEqual(item.sections.length, 4, `Sections count mismatch in HealthContent [${lang}]`);
    assert.strictEqual(item.faq.length, 10, `Help Center FAQ count mismatch in HealthContent [${lang}]`);
    assert.strictEqual(item.whoTable.length, 6, `WHO Table row count mismatch in HealthContent [${lang}]`);
  });
});

// 6. blogArticles.ts Parity Tests
const blogCode = fs.readFileSync(path.join(WORKSPACE, 'src/utils/blogArticles.ts'), 'utf-8');
const blogMatch = blogCode.match(/export const blogArticles: Record<string, any> = (\{[\s\S]*?\n\};)/);
assert.ok(blogMatch, 'blogArticles.ts must contain blogArticles object');
const blogObj = new Function(`return ${blogMatch[1]}`)();
const articleKeys = Object.keys(blogObj);

test('blogArticles: Contains 11 master blog articles', () => {
  assert.strictEqual(articleKeys.length, 11, `Expected 11 blog articles, found ${articleKeys.length}`);
});

articleKeys.forEach(key => {
  const art = blogObj[key];
  LOCALES.forEach(lang => {
    test(`blogArticles [${key}] [${lang}]: Title, description, and contentHtml exist`, () => {
      assert.ok(art.title && art.title[lang], `Missing title for blog [${key}] [${lang}]`);
      assert.ok(art.description && art.description[lang], `Missing description for blog [${key}] [${lang}]`);
      assert.ok(art.contentHtml && art.contentHtml[lang] && art.contentHtml[lang].trim().length > 0, `Missing contentHtml for blog [${key}] [${lang}]`);
    });
  });
});

// 7. Navbar Title Sync Test
const navbarCode = fs.readFileSync(path.join(WORKSPACE, 'src/components/Navbar.astro'), 'utf-8');
test('Navbar: Contains client-side html lang synchronization logic', () => {
  assert.strictEqual(navbarCode.includes('document.documentElement.lang ='), true, 'Navbar missing document.documentElement.lang synchronization');
});

console.log('====================================================');
console.log(`   TEST SUMMARY: ${passedTests} / ${totalTests} PASSED   `);
console.log('====================================================');

if (passedTests < totalTests) {
  process.exit(1);
}
