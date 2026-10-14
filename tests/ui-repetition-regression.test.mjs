import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

test('UI & Reference Table Repetition Regression Tests', async (t) => {
  const toolSeoPath = path.resolve('src/components/ToolSEOContent.astro');
  const toolSeoContent = fs.readFileSync(toolSeoPath, 'utf8');

  await t.test('ToolSEOContent: Exactly one reference table rendered (no duplicate md:hidden card list)', () => {
    assert.strictEqual(toolSeoContent.includes('md:hidden'), false, 'Should not contain duplicate md:hidden card list in DOM');
    assert.strictEqual(toolSeoContent.includes('<table class="w-full text-left border-collapse text-sm min-w-[500px]">'), true, 'Should contain responsive table');
    const tableOccurrences = (toolSeoContent.match(/<table/g) || []).length;
    assert.strictEqual(tableOccurrences, 1, 'Exactly one <table> should exist in ToolSEOContent');
  });

  const calcResultPath = path.resolve('src/components/CalculatorResult.astro');
  const calcResultContent = fs.readFileSync(calcResultPath, 'utf8');

  await t.test('CalculatorResult: Only one h3 calculation header, distinct state eyebrows, and empty initial headerLabel', () => {
    const h3Occurrences = (calcResultContent.match(/<h3[^>]*id="resultHeaderLabel"[^>]*>/g) || []).length;
    assert.strictEqual(h3Occurrences, 1, 'Exactly one resultHeaderLabel h3 should exist');
    assert.strictEqual(calcResultContent.includes('{studioEyebrow}'), true, 'Distinct studioEyebrow must be present');
    assert.strictEqual(calcResultContent.includes('{resultEyebrow}'), true, 'Distinct resultEyebrow must be present');
    assert.strictEqual(calcResultContent.includes('{t.metricsTitle}'), false, 'resultHeaderLabel must not render metricsTitle statically in initial HTML');
    assert.strictEqual(calcResultContent.includes('bmiCalculated'), false, 'Redundant bmiCalculated listener removed');
  });

  const univCalcPath = path.resolve('src/components/UniversalCalculator.astro');
  const univCalcContent = fs.readFileSync(univCalcPath, 'utf8');

  await t.test('UniversalCalculator: Distinct input eyebrow instead of repeating calculator name', () => {
    assert.strictEqual(univCalcContent.includes('{inputEyebrow}'), true, 'Distinct inputEyebrow must be present');
    assert.strictEqual(univCalcContent.includes('bmiCalculated'), false, 'Redundant bmiCalculated dispatch removed');
  });

  const deepHealthPath = path.resolve('src/components/DeepHealthSEO.astro');
  const deepHealthContent = fs.readFileSync(deepHealthPath, 'utf8');

  await t.test('DeepHealthSEO: contentBmi has exactly 8 authoritative chapters without duplicate questions', () => {
    assert.strictEqual(deepHealthContent.includes('How Do I Calculate My BMI & Related Metrics?'), false, 'Redundant FAQ question should be removed from contentBmi');
    assert.strictEqual(deepHealthContent.includes('Is a BMI of 25 Realistic?'), false, 'Redundant athlete question should be removed from contentBmi');
    assert.strictEqual(deepHealthContent.includes('Body Mass Index (BMI) & Population Health Guidelines'), true, 'Authoritative guide retained');
    assert.strictEqual(deepHealthContent.includes('Clinical Screening Limitations & Diagnostic Context'), true, 'Clinical screening limitations chapter added');
    assert.strictEqual(deepHealthContent.includes('Evidence-Based Lifestyle & Preventive Strategies'), true, 'Evidence-based lifestyle chapter added');
  });

  await t.test('ToolSEOContent: Does not duplicate introductory paragraph (currentData.intro removed from post-calculator block)', () => {
    assert.strictEqual(toolSeoContent.includes('{currentData.intro}'), false, 'ToolSEOContent must not re-render duplicate introductory paragraph');
  });

  await t.test('CalculatorResult: Initial state has no hardcoded -- in primaryDisplay or primaryNameLabel and has aria-hidden/role attributes', () => {
    assert.strictEqual(calcResultContent.includes('>--<'), false, 'CalculatorResult must not contain hardcoded -- placeholder text');
    assert.strictEqual(calcResultContent.includes('role="status" aria-live="polite"'), true, 'initialState must be an accessible live region');
    assert.strictEqual(calcResultContent.includes('id="resultContent" class="hidden flex-1 flex flex-col" aria-hidden="true"'), true, 'resultContent must be aria-hidden in initial state');
  });

  await t.test('Homepage Index: No duplicate DeepHealthSEO alongside HealthContent on index pages', () => {
    const enIndexPath = path.resolve('src/pages/en/index.astro');
    const enIndexContent = fs.readFileSync(enIndexPath, 'utf8');
    assert.strictEqual(enIndexContent.includes('<DeepHealthSEO'), false, 'en/index.astro must not duplicate generic health guide alongside HealthContent');
  });

  const calcPagePath = path.resolve('src/pages/[lang]/[calculator].astro');
  const calcPageContent = fs.readFileSync(calcPagePath, 'utf8');

  await t.test('[lang]/[calculator].astro: Generic embed box restricted to bmi-calculator only', () => {
    assert.strictEqual(calcPageContent.includes("calc.slug === 'bmi-calculator' && <EmbedWidgetBox"), true, 'Embed box must be scoped to bmi-calculator');
  });
});
