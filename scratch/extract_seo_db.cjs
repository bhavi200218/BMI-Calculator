const fs = require('fs');

const content = fs.readFileSync('src/components/ToolSEOContent.astro', 'utf8');

const dbStart = content.indexOf('const seoDatabase: Record<string, Record<string, ToolContent>> = {');
const dbEnd = content.indexOf('const effectiveSlug =');

const dbCode = content.substring(dbStart, dbEnd);

const tsFileContent = `import { type Locale } from '../utils/calculators';

export interface ToolContent {
  title: string;
  eyebrow: string;
  intro: string;
  formulaTitle: string;
  formulaDesc: string;
  formulaCode?: string;
  tableTitle?: string;
  tableRows?: { col1: string; col2: string; col3: string }[];
  faqs: { question: string; answer: string }[];
}

export const tableUi: Record<string, { cat: string; metric: string; guidance: string; faq: string; refs: string }> = {
  en: {
    cat: 'Category / Level',
    metric: 'Reference Range / Metric',
    guidance: 'Reference Context',
    faq: 'Frequently Asked Questions',
    refs: 'References & Published Research'
  },
  es: {
    cat: 'Categoría / Nivel',
    metric: 'Referencia / Métrica',
    guidance: 'Contexto de Referencia',
    faq: 'Preguntas Frecuentes y Respuestas',
    refs: 'Referencias e Investigaciones Publicadas'
  },
  fr: {
    cat: 'Catégorie / Niveau',
    metric: 'Référence / Métrique',
    guidance: 'Contexte de Référence',
    faq: 'Foire Aux Questions et Réponses',
    refs: 'Références et Recherches Publiées'
  },
  de: {
    cat: 'Kategorie / Stufe',
    metric: 'Referenz / Metrik',
    guidance: 'Referenzkontext',
    faq: 'Häufig gestellte Fragen',
    refs: 'Referenzen & Veröffentlichte Forschung'
  },
  ko: {
    cat: '범주 / 단계',
    metric: '참조 / 메트릭',
    guidance: '참조 컨텍스트',
    faq: '자주 묻는 질문 및 답변',
    refs: '참고 문헌 및 출판 연구'
  },
  hi: {
    cat: 'श्रेणी / स्तर',
    metric: 'संदर्भ / मीट्रिक',
    guidance: 'संदर्भ विवरण',
    faq: 'अक्सर पूछे जाने वाले प्रश्न और उत्तर',
    refs: 'प्रकाशित शोध एवं संदर्भ'
  }
};

export ${dbCode.trim()}
`;

// Write to src/data/seoDatabase.ts
fs.mkdirSync('src/data', { recursive: true });
fs.writeFileSync('src/data/seoDatabase.ts', tsFileContent, 'utf8');
console.log("Successfully created src/data/seoDatabase.ts!");

// Now refactor ToolSEOContent.astro
const topPart = `---
import { type Locale } from '../utils/calculators';
import { seoDatabase, tableUi, type ToolContent } from '../data/seoDatabase';

interface Props {
  slug: string;
  lang: Locale;
}

const { slug, lang = 'en' } = Astro.props;

const ui = tableUi[lang] || tableUi.en;
`;

const bottomPart = content.substring(dbEnd);

const newAstroContent = topPart + '\n' + bottomPart;
fs.writeFileSync('src/components/ToolSEOContent.astro', newAstroContent, 'utf8');
console.log("Successfully updated ToolSEOContent.astro!");
