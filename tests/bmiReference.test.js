import test from 'node:test';
import assert from 'node:assert/strict';
import { getBmiClassification, getBmiReferenceLabel } from '../src/utils/bmiReference.js';

test('uses WHO thresholds by default', () => {
  const result = getBmiClassification(27.5, 'standard');
  assert.equal(result.categoryKey, 'overweight');
  assert.equal(result.rangeLabel, '25.0–29.9');
});

test('uses Asian/Indian thresholds when requested', () => {
  const result = getBmiClassification(24.5, 'asian-indian');
  assert.equal(result.categoryKey, 'overweight');
  assert.equal(result.rangeLabel, '23.0–24.9');
});

test('labels the reference mode clearly', () => {
  assert.equal(getBmiReferenceLabel('asian-indian'), 'Asian / Indian');
  assert.equal(getBmiReferenceLabel('standard'), 'WHO / Global');
});
