const fs = require('fs');

let content = fs.readFileSync('src/data/seoDatabase.ts', 'utf8');

// 1. Fix BMR [es] Row 3
content = content.replace(
  `"col1": "Categoría / Nivel 3",\n          "col2": "Lean Body Mass Based",\n          "col3": "Rango de referencia Calculates BMR estimate using lean body mass"`,
  `"col1": "Fórmula Katch-McArdle",\n          "col2": "Basada en Masa Corporal Magra",\n          "col3": "Calcula la estimación de BMR utilizando la masa corporal magra (LBM)"`
);

// 2. Add "en" to "3d-body-visualizer"
const en3DVis = `    "en": {
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
        },
        {
          "question": "Can I use the 3D Body Visualizer on mobile devices?",
          "answer": "Yes, the 3D visualizer is fully responsive and optimized for mobile touch controls, allowing 360° rotation and pinch-to-zoom on smartphones and tablets."
        },
        {
          "question": "How does body mass index relate to 3D avatar proportion scaling?",
          "answer": "The 3D avatar dynamically adjusts mesh thickness, waist curvature, and volumetric proportions based on your height-to-weight ratio and calculated BMI score."
        }
      ]
    },`;

content = content.replace('"3d-body-visualizer": {', '"3d-body-visualizer": {\n' + en3DVis);

fs.writeFileSync('src/data/seoDatabase.ts', content, 'utf8');
console.log("Successfully fixed BMR Spanish matrix and added 3D body visualizer EN entry!");
