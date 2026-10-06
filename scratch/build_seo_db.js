import fs from 'fs';

// Node script to generate ToolSEOContent.astro with 100% multilingual parity across EN, ES, FR, DE, KO, HI

const fileHeader = `---
import { type Locale } from '../utils/calculators';

interface Props {
  slug: string;
  lang: Locale;
}

const { slug, lang = 'en' } = Astro.props;

interface ToolContent {
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

const tableUi: Record<string, { cat: string; metric: string; guidance: string; faq: string; refs: string }> = {
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

const ui = tableUi[lang] || tableUi.en;
`;

console.log('Script template created');
