export const bmiReferenceModes = {
  standard: {
    key: 'standard',
    label: 'WHO / Global',
    shortLabel: 'WHO / Global',
    thresholds: {
      underweight: 18.5,
      healthyStart: 18.5,
      healthyEnd: 24.9,
      overweightStart: 25,
      obeseStart: 30
    }
  },
  'asian-indian': {
    key: 'asian-indian',
    label: 'Asian / Indian',
    shortLabel: 'Asian / Indian',
    thresholds: {
      underweight: 18.5,
      healthyStart: 18.5,
      healthyEnd: 22.9,
      overweightStart: 23,
      obeseStart: 25
    }
  }
};

export function getBmiReferenceLabel(mode) {
  return bmiReferenceModes[mode]?.label || bmiReferenceModes.standard.label;
}

export function getBmiClassification(bmi, mode = 'standard') {
  const reference = bmiReferenceModes[mode] || bmiReferenceModes.standard;
  const { thresholds } = reference;

  if (bmi < thresholds.underweight) {
    return {
      categoryKey: 'underweight',
      categoryLabel: 'Underweight',
      rangeLabel: `< ${thresholds.underweight.toFixed(1)}`,
      thresholds: reference.thresholds,
      referenceLabel: reference.label
    };
  }

  if (bmi < thresholds.healthyEnd) {
    return {
      categoryKey: 'healthy',
      categoryLabel: 'Healthy',
      rangeLabel: `${thresholds.healthyStart.toFixed(1)}–${thresholds.healthyEnd.toFixed(1)}`,
      thresholds: reference.thresholds,
      referenceLabel: reference.label
    };
  }

  if (bmi < thresholds.obeseStart) {
    return {
      categoryKey: 'overweight',
      categoryLabel: 'Overweight',
      rangeLabel: `${thresholds.overweightStart.toFixed(1)}–${(thresholds.obeseStart - 0.1).toFixed(1)}`,
      thresholds: reference.thresholds,
      referenceLabel: reference.label
    };
  }

  return {
    categoryKey: 'obese',
    categoryLabel: 'Obese',
    rangeLabel: `≥ ${thresholds.obeseStart.toFixed(1)}`,
    thresholds: reference.thresholds,
    referenceLabel: reference.label
  };
}
