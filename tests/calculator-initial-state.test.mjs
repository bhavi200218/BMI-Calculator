import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

test('Calculator Initial State & UI Integrity Suite', async (t) => {
  const calcFile = fs.readFileSync(path.resolve('src/components/UniversalCalculator.astro'), 'utf8');
  const resultFile = fs.readFileSync(path.resolve('src/components/CalculatorResult.astro'), 'utf8');
  const calcUtilsFile = fs.readFileSync(path.resolve('src/utils/calculators.ts'), 'utf8');

  await t.test('UniversalCalculator: Inputs do not contain hardcoded prefilled number placeholders', () => {
    assert.match(calcFile, /id=\{`input-\$\{calculator\.slug\}-height`\}\s+placeholder=""/);
    assert.match(calcFile, /id=\{`input-\$\{calculator\.slug\}-height-ft`\}\s+placeholder=""/);
    assert.match(calcFile, /id=\{`input-\$\{calculator\.slug\}-height-in`\}\s+placeholder=""/);
    assert.match(calcFile, /id=\{`input-\$\{calculator\.slug\}-\$\{input\.id\}`\}\s+placeholder=""/);
    assert.doesNotMatch(calcFile, /placeholder="175"/);
    assert.doesNotMatch(calcFile, /placeholder="70"/);
    assert.doesNotMatch(calcFile, /placeholder="25"/);
  });

  await t.test('UniversalCalculator: Renders localized Reset button and error container', () => {
    assert.match(calcFile, /id=\{`resetCalcBtn-\$\{calculator\.slug\}`\}/);
    assert.match(calcFile, /id=\{`calcErrorMsg-\$\{calculator\.slug\}`\}/);
    assert.match(calcUtilsFile, /resetBtn:\s*\{/);
    assert.match(calcUtilsFile, /enterPrompt:\s*\{/);
    ['en', 'es', 'fr', 'de', 'ko', 'hi'].forEach(lang => {
      assert.ok(calcUtilsFile.includes(`${lang}:`), `Locale ${lang} missing in calculators.ts`);
    });
  });

  await t.test('CalculatorResult: Copy and Share buttons start disabled and with aria-disabled="true"', () => {
    assert.match(resultFile, /<button\s+id="copyBtn"\s+disabled\s+aria-disabled="true"/);
    assert.match(resultFile, /<button\s+id="shareBtn"\s+disabled\s+aria-disabled="true"/);
    assert.match(resultFile, /copyBtn\.disabled\s*=\s*true/);
    assert.match(resultFile, /shareBtn\.disabled\s*=\s*true/);
  });

  await t.test('CalculatorResult: Listens for calculationReset and resets on load and astro:after-swap', () => {
    assert.match(resultFile, /window\.addEventListener\('calculationReset'/);
    assert.match(resultFile, /document\.addEventListener\('astro:after-swap',\s*resetResultState\)/);
  });
});
