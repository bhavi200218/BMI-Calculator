const fs = require('fs');

const filePath = 'src/data/seoDatabase.ts';
let raw = fs.readFileSync(filePath, 'utf8');

const startIdx = raw.indexOf('export const seoDatabase');
const objStart = raw.indexOf('{', startIdx);
const codeStr = 'module.exports = ' + raw.slice(objStart);

fs.writeFileSync('scratch/temp_db.cjs', codeStr);
const database = require('./temp_db.cjs');

database['bmi-chart']['hi']['tableRows'] = [
  {
    "col1": "कम वजन (गंभीर/मध्यम)",
    "col2": "< 18.5 kg/m²",
    "col3": "कम वजन संदर्भ सीमा"
  },
  {
    "col1": "सामान्य (स्वस्थ) वजन",
    "col2": "18.5 – 24.9 kg/m²",
    "col3": "वयस्कों के लिए आदर्श स्वस्थ बीएमआई सीमा"
  },
  {
    "col1": "अधिक वजन",
    "col2": "25.0 – 29.9 kg/m²",
    "col3": "अधिक वजन संदर्भ सीमा (एशियाई कटऑफ: 23.0 kg/m²)"
  },
  {
    "col1": "मोटापा श्रेणी I",
    "col2": "30.0 – 34.9 kg/m²",
    "col3": "मोटापा श्रेणी I संदर्भ सीमा"
  },
  {
    "col1": "मोटापा श्रेणी II",
    "col2": "35.0 – 39.9 kg/m²",
    "col3": "मोटापा श्रेणी II संदर्भ सीमा"
  },
  {
    "col1": "मोटापा श्रेणी III (गंभीर)",
    "col2": "≥ 40.0 kg/m²",
    "col3": "गंभीर मोटापा श्रेणी III संदर्भ सीमा"
  }
];

const updatedCode = 'import { type Locale } from \'../utils/calculators\';\n\ninterface ToolContent {\n  eyebrow: string;\n  title: string;\n  intro: string;\n  formulaTitle: string;\n  formulaDesc: string;\n  formulaCode: string;\n  tableTitle: string;\n  tableRows: { col1: string; col2: string; col3: string }[];\n  faqs: { question: string; answer: string }[];\n}\n\nexport const seoDatabase: Record<string, Record<Locale, ToolContent>> = ' + JSON.stringify(database, null, 2) + ';\n';

fs.writeFileSync(filePath, updatedCode, 'utf8');

if (fs.existsSync('scratch/temp_db.cjs')) {
  fs.unlinkSync('scratch/temp_db.cjs');
}

console.log('Hindi bmi-chart tableRows cleaned!');
