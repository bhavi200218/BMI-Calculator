const fs = require('fs');

let content = fs.readFileSync('src/components/ToolSEOContent.astro', 'utf8');

// 1. Add effectiveSlug logic
content = content.replace(
  "const enData = seoDatabase[slug]?.['en'] || seoDatabase['bmi-calculator']['en'];",
  "const effectiveSlug = (slug === '3d-body-visualizer' || slug === 'new-bmi-calculator') ? '3d-bmi-calculator' : slug;\nconst enData = seoDatabase[effectiveSlug]?.['en'] || seoDatabase['bmi-calculator']['en'];"
);

content = content.replace(
  "const langFallback = seoDatabase[slug]?.[lang] || seoDatabase['bmi-calculator']?.[lang] || enData;",
  "const langFallback = seoDatabase[effectiveSlug]?.[lang] || seoDatabase['bmi-calculator']?.[lang] || enData;"
);

content = content.replace(
  "const rawData = seoDatabase[slug]?.[lang] || langFallback;",
  "const rawData = seoDatabase[effectiveSlug]?.[lang] || langFallback;"
);

content = content.replace(
  "const activeReferences = toolSpecificReferences[slug] || [",
  "const activeReferences = toolSpecificReferences[effectiveSlug] || ["
);

// 2. Add "en" entry to "3d-bmi-calculator"
const en3D = `    "en": {
      "eyebrow": "Oxford 2.5-Power BMI Model & 3D Body Visualization",
      "title": "3D BMI Calculator & Interactive 3D Body Visualizer",
      "intro": "Our free 3D BMI Calculator uses the Oxford 2.5-power height-adjusted formula (1.3 × weight / height²·⁵) to render interactive 3D body shape models and height-proportional volume geometry.",
      "formulaTitle": "Oxford 2.5-Power Height-Adjusted 3D BMI Formula",
      "formulaDesc": "3D BMI = 1.3 × Weight (kg) / [Height (m)]²·⁵ | Developed by University of Oxford mathematicians to correct height scaling distortions in traditional 2D BMI.",
      "formulaCode": "3D BMI = 1.3 × kg / m²·⁵",
      "tableTitle": "Standard 2D BMI vs. Oxford 3D Height-Adjusted BMI Comparison",
      "tableRows": [
        {
          "col1": "Shorter Adults (< 160 cm / 5'3\\")",
          "col2": "Standard 2D BMI underestimates height scaling",
          "col3": "3D BMI adjusts score proportionally for shorter statures"
        },
        {
          "col1": "Average Height Adults (170 cm / 5'7\\")",
          "col2": "Standard 2D & 3D BMI produce identical results",
          "col3": "No difference between 2D and 3D formula categories"
        },
        {
          "col1": "Taller Adults (> 185 cm / 6'1\\")",
          "col2": "Standard 2D BMI overestimates height scaling",
          "col3": "3D BMI corrects volumetric distortion for taller statures"
        }
      ],
      "faqs": [
        {
          "question": "How does 3D BMI differ from standard 2D BMI?",
          "answer": "Standard 2D BMI divides weight by height squared (m²), whereas 3D BMI uses height raised to the 2.5 power (m²·⁵) to account for 3D body volume scaling."
        },
        {
          "question": "How does the interactive 3D body visualizer work?",
          "answer": "It renders an interactive 3D avatar in your browser using height-to-weight proportions derived from your inputs. You can rotate the avatar 360° and toggle mesh, wireframe, and heatmap modes."
        },
        {
          "question": "What do solid mesh, wireframe, and heatmap modes represent?",
          "answer": "Solid mesh shows body shape volume, wireframe shows 3D geometric structure, and heatmap highlights weight category distribution."
        },
        {
          "question": "Why is the Oxford 2.5-power formula better for tall or short individuals?",
          "answer": "As demonstrated by Prof. Nick Trefethen at Oxford University, traditional BMI (m²) overestimates fatness in tall people and underestimates it in short people. The 2.5 exponent corrects this mathematical bias."
        },
        {
          "question": "Does the 3D visualizer store photos or personal data?",
          "answer": "No. The 3D model is generated mathematically in real time inside your browser. No photos are required, and no data is uploaded or stored."
        }
      ]
    },`;

content = content.replace('"3d-bmi-calculator": {', '"3d-bmi-calculator": {\n' + en3D);

// 3. Clean up residual English phrases in tableRows across non-EN blocks
const cleanupReplacements = [
  { from: /Reference category for lower relative body mass/g, to: '' },
  { from: /Baseline reference window for Asian populations/g, to: '' },
  { from: /Reference threshold used in some Asian-population guidance/g, to: '' },
  { from: /Higher reference category for population screening/g, to: '' },
  { from: /Elevated screening reference window/g, to: '' },
  { from: /Underweight reference range/g, to: '' },
  { from: /Healthy-weight reference range/g, to: '' },
  { from: /Overweight reference range/g, to: '' },
  { from: /Obesity Class I reference range/g, to: '' },
  { from: /Obesity Class II reference range/g, to: '' },
  { from: /Obesity Class III reference range/g, to: '' }
];

cleanupReplacements.forEach(r => {
  content = content.replaceAll(r.from, r.to);
});

fs.writeFileSync('src/components/ToolSEOContent.astro', content, 'utf8');
console.log("Successfully updated ToolSEOContent.astro!");
