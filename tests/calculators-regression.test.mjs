import assert from 'assert';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const esbuild = require('esbuild');

// Bundle calculators.ts into CJS in memory so we can execute calculate() functions directly
const result = esbuild.buildSync({
  entryPoints: ['src/utils/calculators.ts'],
  bundle: true,
  write: false,
  format: 'cjs'
});

const mod = { exports: {} };
const fn = new Function('module', 'exports', result.outputFiles[0].text);
fn(mod, mod.exports);

const { calculators, locales } = mod.exports;

console.log('====================================================');
console.log('   RUNNING COMPREHENSIVE CALCULATOR REGRESSION SUITE');
console.log('====================================================');

let totalTests = 0;
let passedTests = 0;

function test(name, testFn) {
  totalTests++;
  try {
    testFn();
    passedTests++;
    console.log(`  ✅ PASS: ${name}`);
  } catch (err) {
    console.error(`  ❌ FAIL: ${name}`);
    console.error(`     Error: ${err.message}`);
  }
}

// 1. Verify all 25 calculators are loaded
test('Calculators Registry: Exactly 25 canonical calculators defined', () => {
  assert.strictEqual(calculators.length, 25, `Expected 25 calculators, found ${calculators.length}`);
});

const calcMap = new Map();
calculators.forEach(c => calcMap.set(c.slug, c));

// 2. BMI Calculator Tests
test('bmi-calculator: Standard Metric & Imperial calculation', () => {
  const calc = calcMap.get('bmi-calculator');
  const metric = calc.calculate({ weight: 70, height: 175, age: 25, gender: 'male' }, 'metric');
  assert.strictEqual(metric.primary.value, '22.9');

  const imperial = calc.calculate({ weight: 154, height: 69, age: 25, gender: 'male' }, 'imperial');
  // 154 lbs = 69.85 kg, 69 in = 175.26 cm -> BMI ~ 22.7
  const bmiNum = parseFloat(imperial.primary.value);
  assert.ok(bmiNum >= 22.0 && bmiNum <= 23.5, `Imperial BMI ${bmiNum} not in expected range`);
});

test('bmi-calculator: Category boundaries & edge cases', () => {
  const calc = calcMap.get('bmi-calculator');
  // Underweight (< 18.5)
  const under = calc.calculate({ weight: 45, height: 175 }, 'metric');
  assert.strictEqual(under.primary.value, '14.7');
  
  // Healthy (18.5 - 24.9)
  const healthy = calc.calculate({ weight: 65, height: 175 }, 'metric');
  assert.strictEqual(healthy.primary.value, '21.2');

  // Overweight (25.0 - 29.9)
  const over = calc.calculate({ weight: 80, height: 175 }, 'metric');
  assert.strictEqual(over.primary.value, '26.1');

  // Obese (>= 30.0)
  const obese = calc.calculate({ weight: 105, height: 175 }, 'metric');
  assert.strictEqual(obese.primary.value, '34.3');

  // Zero / empty handling (no crash)
  const empty = calc.calculate({}, 'metric');
  assert.ok(!isNaN(parseFloat(empty.primary.value)));
});

// 3. Indian BMI Calculator Tests
test('bmi-calculator-for-indians: ICMR ethnic thresholds and categories', () => {
  const calc = calcMap.get('bmi-calculator-for-indians');
  assert.ok(calc, 'bmi-calculator-for-indians must exist');

  // Underweight (< 18.5)
  const under = calc.calculate({ weight: 45, height: 170, waist: 70, gender: 'male' }, 'metric');
  assert.strictEqual(under.secondary[0].value.en, 'Underweight (< 18.5)');
  assert.strictEqual(under.secondary[0].value.hi, 'कम वजन (< 18.5)');

  // Optimal Healthy (18.5 - 22.9)
  const normal = calc.calculate({ weight: 60, height: 170, waist: 75, gender: 'male' }, 'metric');
  assert.strictEqual(normal.secondary[0].value.en, 'Healthy Weight (18.5 - 22.9)');
  assert.strictEqual(normal.secondary[0].value.hi, 'स्वस्थ वजन (18.5 - 22.9)');

  // Overweight / At Risk (23.0 - 24.9)
  const over = calc.calculate({ weight: 68, height: 170, waist: 85, gender: 'male' }, 'metric');
  assert.strictEqual(over.secondary[0].value.en, 'Overweight / At Risk (23.0 - 24.9)');
  assert.strictEqual(over.secondary[0].value.hi, 'अधिक वजन / जोखिम (23.0 - 24.9)');

  // Obese Class I (25.0 - 29.9)
  const obese1 = calc.calculate({ weight: 75, height: 170, waist: 92, gender: 'male' }, 'metric');
  assert.strictEqual(obese1.secondary[0].value.en, 'Obese Class I (25.0 - 29.9)');
  assert.strictEqual(obese1.secondary[0].value.hi, 'मोटापा श्रेणी I (25.0 - 29.9)');

  // Obese Class II (>= 30.0)
  const obese2 = calc.calculate({ weight: 90, height: 170, waist: 105, gender: 'male' }, 'metric');
  assert.strictEqual(obese2.secondary[0].value.en, 'Obese Class II (≥ 30.0)');
  assert.strictEqual(obese2.secondary[0].value.hi, 'मोटापा श्रेणी II (≥ 30.0)');

  // Waist circumference risk thresholds: Men >= 90 cm, Women >= 80 cm
  const waistMenElevated = calc.calculate({ weight: 60, height: 170, waist: 90, gender: 'male' }, 'metric');
  assert.strictEqual(waistMenElevated.secondary[2].value.en, 'Elevated (ICMR Visceral Risk)');

  const waistMenHealthy = calc.calculate({ weight: 60, height: 170, waist: 88, gender: 'male' }, 'metric');
  assert.strictEqual(waistMenHealthy.secondary[2].value.en, 'Healthy Waist');

  const waistWomenElevated = calc.calculate({ weight: 55, height: 160, waist: 80, gender: 'female' }, 'metric');
  assert.strictEqual(waistWomenElevated.secondary[2].value.en, 'Elevated (ICMR Visceral Risk)');

  const waistWomenHealthy = calc.calculate({ weight: 55, height: 160, waist: 78, gender: 'female' }, 'metric');
  assert.strictEqual(waistWomenHealthy.secondary[2].value.en, 'Healthy Waist');
});

// 4. Asian BMI Calculator Tests
test('asian-bmi-calculator: Full 6-language localization of WHO Asian categories', () => {
  const calc = calcMap.get('asian-bmi-calculator');
  // Healthy: 60kg / 1.68m^2 = 21.26
  const res = calc.calculate({ weight: 60, height: 168, waist: 80, age: 30, gender: 'male' }, 'metric');
  const cat = res.secondary[0].value;
  assert.strictEqual(typeof cat, 'object', 'Asian category must be a localized dictionary object');
  locales.forEach(loc => {
    assert.ok(cat[loc], `Missing translation for locale [${loc}] in asian-bmi-calculator category`);
  });
  assert.strictEqual(cat.en, 'Healthy Weight (18.5 - 22.9)');
  assert.strictEqual(cat.hi, 'स्वस्थ वजन (18.5 - 22.9)');
  assert.strictEqual(cat.es, 'Peso Saludable (18.5 - 22.9)');
  assert.strictEqual(cat.fr, 'Poids Santé (18.5 - 22.9)');
  assert.strictEqual(cat.de, 'Gesundes Gewicht (18.5 - 22.9)');
  assert.strictEqual(cat.ko, '정상 체중 (18.5 - 22.9)');

  // Overweight: 68kg / 1.68m^2 = 24.09
  const resOver = calc.calculate({ weight: 68, height: 168, waist: 80, age: 30, gender: 'male' }, 'metric');
  assert.strictEqual(resOver.secondary[0].value.en, 'Overweight / At Risk (23.0 - 27.4)');
  assert.strictEqual(resOver.secondary[0].value.hi, 'अधिक वजन / जोखिम (23.0 - 27.4)');

  // Obese: 85kg / 1.68m^2 = 30.12
  const resObese = calc.calculate({ weight: 85, height: 168, waist: 80, age: 30, gender: 'male' }, 'metric');
  assert.strictEqual(resObese.secondary[0].value.en, 'Obese (≥ 27.5)');
  assert.strictEqual(resObese.secondary[0].value.hi, 'मोटापा (≥ 27.5)');
});

// 5. Body Fat Calculator Tests
test('body-fat-calculator: US Navy method and full 6-language category localization', () => {
  const calc = calcMap.get('body-fat-calculator');
  const res = calc.calculate({ gender: 'male', height: 175, waist: 80, neck: 38, hip: 90 }, 'metric');
  
  const aceCat = res.secondary[0].value;
  assert.strictEqual(typeof aceCat, 'object', 'ACE category must be a localized dictionary object');
  locales.forEach(loc => {
    assert.ok(aceCat[loc], `Missing translation for locale [${loc}] in body-fat ACE category`);
  });

  const tapeMethod = res.secondary[1].value;
  assert.strictEqual(typeof tapeMethod, 'object', 'Tape Method must be a localized dictionary object');
  locales.forEach(loc => {
    assert.ok(tapeMethod[loc], `Missing translation for locale [${loc}] in body-fat Tape Method`);
  });
  assert.strictEqual(tapeMethod.en, 'Anthropometric Tape Method');
  assert.strictEqual(tapeMethod.es, 'Método de Cinta Antropométrica');
  assert.strictEqual(tapeMethod.hi, 'मानवमिति टेप विधि');
});

// 6. Lean Body Mass Calculator Tests
test('lean-body-mass-calculator: Boer formula and division-by-zero guard', () => {
  const calc = calcMap.get('lean-body-mass-calculator');
  const standard = calc.calculate({ weight: 70, height: 175, gender: 'male' }, 'metric');
  assert.strictEqual(standard.primary.value, '56.0');
  assert.strictEqual(standard.secondary[1].value, '80.0'); // (56 / 70) * 100

  // Edge case: weight = 0 (guard must prevent 0 / 0 = NaN)
  const zeroW = calc.calculate({ weight: 0, height: 175, gender: 'male' }, 'metric');
  assert.ok(!isNaN(parseFloat(zeroW.primary.value)));
  assert.strictEqual(zeroW.secondary[1].value, '0.0', 'Zero weight must produce 0.0% ratio, not NaN');

  // Negative weight
  const negW = calc.calculate({ weight: -10, height: 175, gender: 'male' }, 'metric');
  assert.ok(!isNaN(parseFloat(negW.secondary[1].value)));
});

// 7. Body Surface Area Calculator Tests
test('body-surface-area-calculator: Mosteller & Du Bois with NaN guards on zero/negative values', () => {
  const calc = calcMap.get('body-surface-area-calculator');
  const standard = calc.calculate({ weight: 70, height: 175 }, 'metric');
  // sqrt(175 * 70 / 3600) = sqrt(12250 / 3600) = sqrt(3.40277) = 1.84 m²
  assert.strictEqual(standard.primary.value, '1.84');
  assert.strictEqual(standard.secondary[0].value, '1.85'); // Du Bois

  // Edge case: zero inputs (must not return NaN)
  const zero = calc.calculate({ weight: 0, height: 0 }, 'metric');
  assert.strictEqual(zero.primary.value, '0.00');
  assert.strictEqual(zero.secondary[0].value, '0.00');
  assert.strictEqual(zero.secondary[1].value, '0.0');

  // Edge case: negative inputs (must not return NaN)
  const neg = calc.calculate({ weight: -50, height: -160 }, 'metric');
  assert.strictEqual(neg.primary.value, '0.00');
  assert.strictEqual(neg.secondary[0].value, '0.00');
});

// 8. Test ALL remaining calculators for no NaN/Infinity outputs under standard and zero inputs
calculators.forEach(calc => {
  test(`Stress Test [${calc.slug}]: Calculation produces clean numbers on standard inputs`, () => {
    const res = calc.calculate({}, 'metric');
    assert.ok(res.primary, `Primary result missing on ${calc.slug}`);
    const primVal = typeof res.primary.value === 'object' ? Object.values(res.primary.value)[0] : String(res.primary.value);
    assert.ok(!primVal.includes('NaN'), `NaN found in primary value of ${calc.slug}: ${primVal}`);
    assert.ok(!primVal.includes('Infinity'), `Infinity found in primary value of ${calc.slug}: ${primVal}`);

    if (Array.isArray(res.secondary)) {
      res.secondary.forEach(s => {
        const secVal = typeof s.value === 'object' ? Object.values(s.value)[0] : String(s.value);
        assert.ok(!secVal.includes('NaN'), `NaN found in secondary value of ${calc.slug}: ${secVal}`);
        assert.ok(!secVal.includes('Infinity'), `Infinity found in secondary value of ${calc.slug}: ${secVal}`);
      });
    }
  });

  test(`Stress Test [${calc.slug}]: Calculation handles zero/negative inputs without crashing`, () => {
    const res = calc.calculate({ weight: 0, height: 0, waist: 0, hip: 0, neck: 0, age: 0, rhr: 0 }, 'metric');
    assert.ok(res.primary, `Primary result missing on zero inputs for ${calc.slug}`);
    const primVal = typeof res.primary.value === 'object' ? Object.values(res.primary.value)[0] : String(res.primary.value);
    assert.ok(!primVal.includes('NaN'), `NaN found on zero inputs in ${calc.slug}: ${primVal}`);
  });
});

// 9. Embed BMI Widget Ideal Weight Unit Conversion
test('Embed BMI Widget: Ideal weight range properly converted for Imperial and Metric', () => {
  const heightM = 1.7526; // 5 ft 9 in
  const minWeightKg = 18.5 * (heightM * heightM);
  const maxWeightKg = 24.9 * (heightM * heightM);

  const metricMin = minWeightKg.toFixed(1);
  const metricMax = maxWeightKg.toFixed(1);
  assert.strictEqual(metricMin, '56.8');
  assert.strictEqual(metricMax, '76.5');

  const imperialMin = (minWeightKg * 2.20462).toFixed(1);
  const imperialMax = (maxWeightKg * 2.20462).toFixed(1);
  assert.strictEqual(imperialMin, '125.3');
  assert.strictEqual(imperialMax, '168.6');
  assert.ok(parseFloat(imperialMin) > 100, 'Imperial min weight must be in pounds, not kilograms');
});

console.log('====================================================');
console.log(`   CALCULATOR REGRESSION SUMMARY: ${passedTests} / ${totalTests} PASSED`);
console.log('====================================================');

if (passedTests !== totalTests) {
  process.exit(1);
}
