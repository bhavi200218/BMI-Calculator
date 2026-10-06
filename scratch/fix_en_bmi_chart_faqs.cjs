const fs = require('fs');

const filePath = 'src/data/seoDatabase.ts';
let raw = fs.readFileSync(filePath, 'utf8');

const startIdx = raw.indexOf('export const seoDatabase');
const objStart = raw.indexOf('{', startIdx);
const codeStr = 'module.exports = ' + raw.slice(objStart);

fs.writeFileSync('scratch/temp_db.cjs', codeStr);
const database = require('./temp_db.cjs');

database['bmi-chart']['en']['faqs'] = [
  {
    "question": "What is a BMI chart and how do I read a BMI table?",
    "answer": "A BMI chart is a reference matrix that maps your height against your weight to determine your Body Mass Index score and category. Locate your height on the left column and trace across to your weight in kg or lbs to find your BMI classification."
  },
  {
    "question": "Is the BMI chart for men different from the BMI chart for women?",
    "answer": "The WHO adult BMI chart uses identical cutoff numbers (18.5 to 24.9 for normal weight) for both adult men and women. However, because women naturally carry higher body fat percentages, waist measurements and body composition testing provide additional context."
  },
  {
    "question": "How does the BMI chart by age work for adults vs seniors?",
    "answer": "Standard WHO BMI categories apply to all adults aged 20 and older. However, research suggests that for seniors over age 65, a slightly higher BMI (23.0 to 27.0 kg/m²) may protect against bone density loss and frailty."
  },
  {
    "question": "What is the BMI chart in kg and cm?",
    "answer": "A metric BMI chart lists height in centimeters (cm) and weight in kilograms (kg). For example: Height 170 cm with Weight 65 kg yields a BMI of 22.5 kg/m² (Healthy Weight)."
  },
  {
    "question": "What are the main BMI categories on the official chart?",
    "answer": "The official WHO BMI categories are: Underweight (< 18.5), Normal Weight (18.5 – 24.9), Overweight (25.0 – 29.9), Obese Class I (30.0 – 34.9), Obese Class II (35.0 – 39.9), and Obese Class III (≥ 40.0)."
  }
];

const updatedCode = 'import { type Locale } from \'../utils/calculators\';\n\ninterface ToolContent {\n  eyebrow: string;\n  title: string;\n  intro: string;\n  formulaTitle: string;\n  formulaDesc: string;\n  formulaCode: string;\n  tableTitle: string;\n  tableRows: { col1: string; col2: string; col3: string }[];\n  faqs: { question: string; answer: string }[];\n}\n\nexport const seoDatabase: Record<string, Record<Locale, ToolContent>> = ' + JSON.stringify(database, null, 2) + ';\n';

fs.writeFileSync(filePath, updatedCode, 'utf8');

if (fs.existsSync('scratch/temp_db.cjs')) {
  fs.unlinkSync('scratch/temp_db.cjs');
}

console.log('English bmi-chart FAQs restored cleanly!');
