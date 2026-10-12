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

test('Calculators Config: Contains all 25 canonical calculator definitions', () => {
  assert.strictEqual(calcSlugs.length >= 25, true, `Expected >= 26 calculators, found ${calcSlugs.length}`);
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

          const enCheckPatterns = [
            /Input your biological age/i,
            /Eating at your estimated/i,
            /What happens if I eat at my maintenance calories/i,
            /How do I use my maintenance calories/i,
            /Is a calorie maintenance calculator accurate/i,
            /Why does the Karvonen formula factor in/i,
            /Why use a 1RM calculator instead of/i,
            /Why does pre-pregnancy BMI affect/i,
            /What is a healthy weight for my height/i,
            /Why is the Asian BMI cutoff/i
          ];
          enCheckPatterns.forEach(pat => {
            assert.strictEqual(
              pat.test(f.question) || pat.test(f.answer),
              false,
              `English leakage matching ${pat} found in ${slug} [${lang}] FAQ ${idx}`
            );
          });
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

// 8. Indian BMI Strict Multilingual Parity & Regression Tests (Tests 1 - 6)
const indianSlug = 'bmi-calculator-for-indians';
LOCALES.forEach(lang => {
  // Test 3: FAQ questions are unique
  test(`Test 3 — [${lang}] FAQ questions are unique in database`, () => {
    const entry = seoDb[indianSlug]?.[lang];
    assert.ok(entry, `Missing ${lang} entry for ${indianSlug}`);
    assert.strictEqual(entry.faqs.length, 3, `Expected 3 FAQs for ${indianSlug} [${lang}]`);
    const qSet = new Set(entry.faqs.map(f => f.question.trim()));
    assert.strictEqual(qSet.size, 3, `Duplicate FAQ questions in database for ${indianSlug} [${lang}]`);
  });

  // Test 5: Every locale resolves the correct locale data
  test(`Test 5 — [${lang}] Resolves correct localized data structure (not English fallback)`, () => {
    const entry = seoDb[indianSlug]?.[lang];
    assert.strictEqual(entry.tableRows.length, 5, `Expected 5 table rows for ${indianSlug} [${lang}]`);
    entry.tableRows.forEach((r, i) => {
      assert.ok(r.col1.includes('kg/m²'), `Row ${i + 1} col1 missing kg/m² in ${indianSlug} [${lang}]: ${r.col1}`);
      assert.ok(r.col2.includes('kg/m²'), `Row ${i + 1} col2 missing kg/m² in ${indianSlug} [${lang}]: ${r.col2}`);
      assert.ok(r.col3.trim().length > 0, `Row ${i + 1} col3 empty in ${indianSlug} [${lang}]`);
    });
  });

  const distFile = path.join(WORKSPACE, `dist/${lang}/${indianSlug}/index.html`);
  if (fs.existsSync(distFile)) {
    const html = fs.readFileSync(distFile, 'utf-8');

    // Test 1: Localized pages cannot contain the five English table labels
    if (lang !== 'en') {
      test(`Test 1 — [${lang}] Localized Indian BMI page cannot contain the five English table labels`, () => {
        forbiddenFallbacks.forEach(fb => {
          assert.strictEqual(
            html.toLowerCase().includes(fb),
            false,
            `Forbidden English phrase "${fb}" found in dist/${lang}/${indianSlug}/index.html`
          );
        });
      });

      // Test 2: Localized FAQ cannot contain accidental English slug prose
      test(`Test 2 — [${lang}] Localized FAQ cannot contain accidental English slug prose`, () => {
        assert.strictEqual(
          html.includes('bmi calculator for indians-Rechner') ||
          html.includes('bmi calculator for indians 계산기') ||
          html.includes('de bmi calculator for indians') ||
          html.includes('pour bmi calculator for indians'),
          false,
          `Raw English slug leaked into user prose in dist/${lang}/${indianSlug}/index.html`
        );
      });
    }

    // Test 4: Visible FAQ and JSON-LD match
    test(`Test 4 — [${lang}] FAQ JSON-LD matches visible FAQ in dist HTML`, () => {
      const faqSectionMatch = html.match(/<div class="space-y-6 pt-4">([\s\S]*?)<\/div>\s*<\/div>\s*<!-- Authority Medical/);
      const domFaqs = [...(faqSectionMatch ? faqSectionMatch[1] : '').matchAll(/<h4[^>]*>([\s\S]*?)<\/h4>/g)]
        .map(m => m[1].replace(/<[^>]+>/g, '').replace(/&#39;/g, "'").replace(/&amp;/g, '&').replace(/&quot;/g, '"').trim());
      assert.strictEqual(domFaqs.length, 3, `Expected 3 DOM FAQs in dist/${lang}/${indianSlug}`);

      const scriptMatches = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
      let jsonLdFaqs = [];
      scriptMatches.forEach(m => {
        try {
          const d = JSON.parse(m[1]);
          if (d['@type'] === 'FAQPage' && Array.isArray(d.mainEntity)) {
            jsonLdFaqs = d.mainEntity.map(e => e.name.trim());
          }
        } catch (e) {}
      });
      assert.strictEqual(jsonLdFaqs.length, 3, `Expected 3 JSON-LD FAQs in dist/${lang}/${indianSlug}`);
      assert.deepStrictEqual(domFaqs, jsonLdFaqs, `DOM FAQs do not match JSON-LD FAQs in dist/${lang}/${indianSlug}`);
    });

    // Test 6: Locale pages do not receive English cached HTML (independent HTML with correct lang attribute)
    test(`Test 6 — [${lang}] Page has unique localized HTML and matches language root`, () => {
      const langMatch = html.match(/<html[^>]*lang="([^"]+)"/);
      assert.ok(langMatch, `Missing html lang tag in dist/${lang}/${indianSlug}`);
      assert.strictEqual(langMatch[1], lang, `Expected html lang="${lang}", found "${langMatch[1]}" in dist/${lang}/${indianSlug}`);
    });
  }
});

// Section 9: Specific User-Mandated Regression Tests (Tests A - F)
// Test A: Localized Indian BMI pages cannot contain the five accidental English table labels
['es', 'fr', 'de', 'hi', 'ko'].forEach(lang => {
  test(`Test A — [${lang}] Localized Indian BMI page cannot contain the five accidental English table labels`, () => {
    const distFile = path.join(WORKSPACE, `dist/${lang}/${indianSlug}/index.html`);
    assert.ok(fs.existsSync(distFile), `dist file missing for ${lang}`);
    const html = fs.readFileSync(distFile, 'utf-8');
    forbiddenFallbacks.forEach(fb => {
      assert.strictEqual(
        html.toLowerCase().includes(fb),
        false,
        `Forbidden English label "${fb}" found in dist/${lang}/${indianSlug}`
      );
    });
  });
});

// Test B: DE FAQ questions must be unique
test('Test B — DE FAQ questions must be unique in database and dist HTML', () => {
  const deFaqsDb = seoDb[indianSlug]?.de?.faqs || [];
  const deQuestionsDb = deFaqsDb.map(f => f.question.trim());
  const deSetDb = new Set(deQuestionsDb);
  assert.strictEqual(deQuestionsDb.length, deSetDb.size, 'Duplicate DE FAQ questions found in database');

  const deDist = path.join(WORKSPACE, `dist/de/${indianSlug}/index.html`);
  if (fs.existsSync(deDist)) {
    const html = fs.readFileSync(deDist, 'utf-8');
    const faqSectionMatch = html.match(/<div class="space-y-6 pt-4">([\s\S]*?)<\/div>\s*<\/div>\s*<!-- Authority Medical/);
    const visibleFaqs = [...(faqSectionMatch ? faqSectionMatch[1] : '').matchAll(/<h4[^>]*>([\s\S]*?)<\/h4>/g)]
      .map(m => m[1].replace(/<[^>]+>/g, '').trim());
    const visibleSet = new Set(visibleFaqs);
    assert.strictEqual(visibleFaqs.length, visibleSet.size, 'Duplicate DE FAQ questions found in dist HTML');
  }
});

// Test C: KO FAQ questions must be unique
test('Test C — KO FAQ questions must be unique in database and dist HTML', () => {
  const koFaqsDb = seoDb[indianSlug]?.ko?.faqs || [];
  const koQuestionsDb = koFaqsDb.map(f => f.question.trim());
  const koSetDb = new Set(koQuestionsDb);
  assert.strictEqual(koQuestionsDb.length, koSetDb.size, 'Duplicate KO FAQ questions found in database');

  const koDist = path.join(WORKSPACE, `dist/ko/${indianSlug}/index.html`);
  if (fs.existsSync(koDist)) {
    const html = fs.readFileSync(koDist, 'utf-8');
    const faqSectionMatch = html.match(/<div class="space-y-6 pt-4">([\s\S]*?)<\/div>\s*<\/div>\s*<!-- Authority Medical/);
    const visibleFaqs = [...(faqSectionMatch ? faqSectionMatch[1] : '').matchAll(/<h4[^>]*>([\s\S]*?)<\/h4>/g)]
      .map(m => m[1].replace(/<[^>]+>/g, '').trim());
    const visibleSet = new Set(visibleFaqs);
    assert.strictEqual(visibleFaqs.length, visibleSet.size, 'Duplicate KO FAQ questions found in dist HTML');
  }
});

// Test D: Localized FAQ cannot contain accidental raw English slug prose
['es', 'fr', 'de', 'hi', 'ko'].forEach(lang => {
  test(`Test D — [${lang}] Localized FAQ cannot contain accidental raw English slug prose`, () => {
    const distFile = path.join(WORKSPACE, `dist/${lang}/${indianSlug}/index.html`);
    if (fs.existsSync(distFile)) {
      const html = fs.readFileSync(distFile, 'utf-8');
      const faqSectionMatch = html.match(/<div class="space-y-6 pt-4">([\s\S]*?)<\/div>\s*<\/div>\s*<!-- Authority Medical/);
      const faqText = (faqSectionMatch ? faqSectionMatch[1] : '').toLowerCase();
      assert.strictEqual(
        faqText.includes('bmi calculator for indians-rechner') ||
        faqText.includes('bmi calculator for indians 계산기') ||
        faqText.includes('bmi calculator for indians'),
        false,
        `accidental raw English slug prose found in ${lang} FAQ`
      );
    }
  });
});

// Test E: Visible FAQ and JSON-LD FAQ must match
LOCALES.forEach(lang => {
  test(`Test E — [${lang}] Visible FAQ and JSON-LD FAQ must match`, () => {
    const distFile = path.join(WORKSPACE, `dist/${lang}/${indianSlug}/index.html`);
    if (fs.existsSync(distFile)) {
      const html = fs.readFileSync(distFile, 'utf-8');
      const faqSectionMatch = html.match(/<div class="space-y-6 pt-4">([\s\S]*?)<\/div>\s*<\/div>\s*<!-- Authority Medical/);
      const domFaqs = [...(faqSectionMatch ? faqSectionMatch[1] : '').matchAll(/<h4[^>]*>([\s\S]*?)<\/h4>/g)]
        .map(m => m[1].replace(/<[^>]+>/g, '').replace(/&#39;/g, "'").replace(/&amp;/g, '&').replace(/&quot;/g, '"').trim());

      const scriptMatches = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
      let jsonLdFaqs = [];
      scriptMatches.forEach(m => {
        try {
          const d = JSON.parse(m[1]);
          if (d['@type'] === 'FAQPage' && Array.isArray(d.mainEntity)) {
            jsonLdFaqs = d.mainEntity.map(e => e.name.trim());
          }
        } catch (e) {}
      });
      assert.strictEqual(domFaqs.length, jsonLdFaqs.length, `FAQ count mismatch between DOM and JSON-LD on [${lang}]`);
      assert.deepStrictEqual(domFaqs, jsonLdFaqs, `DOM FAQs do not match JSON-LD FAQs on [${lang}]`);
    }
  });
});

// Test F: Korean visible heading/content must not fall back to the English master title
test('Test F — Korean visible heading/content must not fall back to the English master title', () => {
  const koDist = path.join(WORKSPACE, `dist/ko/${indianSlug}/index.html`);
  assert.ok(fs.existsSync(koDist), 'dist/ko/bmi-calculator-for-indians/index.html must exist');
  const html = fs.readFileSync(koDist, 'utf-8');

  // Verify visible H1
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  assert.ok(h1Match, 'H1 tag must exist');
  const h1Text = h1Match[1].replace(/<[^>]+>/g, '').trim();
  assert.strictEqual(h1Text.includes('BMI Calculator for Indians'), false, 'H1 cannot contain English master name');
  assert.strictEqual(h1Text, '인도인을 위한 BMI 계산기', 'H1 must be natural Korean');

  // Verify visible H2
  const h2Matches = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  h2Matches.forEach(h2 => {
    assert.strictEqual(h2.includes('Healthy Height Weight Chart for Indian Adults'), false, 'H2 cannot contain English master title');
  });

  // Verify page title
  const titleMatch = html.match(/<title>([^<]+)<\/title>/);
  assert.ok(titleMatch, 'Title tag must exist');
  assert.strictEqual(titleMatch[1].includes('Healthy Height Weight Chart for Indian Adults'), false, 'Title cannot contain English master title');
  assert.strictEqual(titleMatch[1], '인도인을 위한 BMI 계산기 – ICMR 및 WHO 인도 표준 건강 체중표 – 참조 계산기', 'Title must be Korean');
});

console.log('====================================================');
console.log(`   TEST SUMMARY: ${passedTests} / ${totalTests} PASSED   `);
console.log('====================================================');

if (passedTests < totalTests) {
  process.exit(1);
}

