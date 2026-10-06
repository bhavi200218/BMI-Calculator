const fs = require('fs');

const filePath = 'src/data/seoDatabase.ts';
let raw = fs.readFileSync(filePath, 'utf8');

// Remove broken tableUi insertion
raw = raw.replace(/\s*export const tableUi[\s\S]*/, '');

// Ensure end of seoDatabase is closed cleanly
if (!raw.trim().endsWith('};')) {
  raw = raw.trim() + '\n};\n';
}

const tableUiCode = `
export const tableUi: Record<Locale, {
  col1Header: string;
  col2Header: string;
  col3Header: string;
  faqTitle: string;
  cat: string;
  metric: string;
  guidance: string;
  faq: string;
  embedBadge: string;
  embedTitle: string;
  embedDesc: string;
  embedPreview: string;
  copyBtn: string;
  sourcesTitle: string;
}> = {
  en: {
    col1Header: "Category / Level",
    col2Header: "Reference / Metric",
    col3Header: "Reference Context",
    faqTitle: "Frequently Asked Questions & Answers",
    cat: "Category / Level",
    metric: "Reference / Metric",
    guidance: "Reference Context",
    faq: "Frequently Asked Questions & Answers",
    embedBadge: "Free Webmaster & Blogger Tool",
    embedTitle: "Embed Real BMI Calculator on Your Website",
    embedDesc: "Add a free, responsive BMI Calculator to your blog or website with simple HTML code. No API key required.",
    embedPreview: "Live Widget Preview",
    copyBtn: "Copy HTML Code",
    sourcesTitle: "References & Published Research"
  },
  es: {
    col1Header: "Categoría / Nivel",
    col2Header: "Referencia / Métrica",
    col3Header: "Contexto de Referencia",
    faqTitle: "Preguntas Frecuentes y Respuestas",
    cat: "Categoría / Nivel",
    metric: "Referencia / Métrica",
    guidance: "Contexto de Referencia",
    faq: "Preguntas Frecuentes y Respuestas",
    embedBadge: "Herramienta Gratuita para Webmasters y Blogueros",
    embedTitle: "Incrustar Calculadora de IMC Real en su Sitio Web",
    embedDesc: "Agregue una calculadora de IMC adaptativa gratuita a su blog o sitio web con un código HTML simple. Sin clave API.",
    embedPreview: "Vista Previa del Widget",
    copyBtn: "Copiar Código HTML",
    sourcesTitle: "Referencias e Investigaciones Publicadas"
  },
  fr: {
    col1Header: "Catégorie / Niveau",
    col2Header: "Référence / Métrique",
    col3Header: "Contexte de Référence",
    faqTitle: "Foire Aux Questions et Réponses",
    cat: "Catégorie / Niveau",
    metric: "Référence / Métrique",
    guidance: "Contexte de Référence",
    faq: "Foire Aux Questions et Réponses",
    embedBadge: "Outil Gratuit pour Webmasters & Blogueurs",
    embedTitle: "Intégrer le Calculateur IMC Réel Gratuit sur Votre Site Web",
    embedDesc: "Ajoutez un calculateur d'IMC gratuit et adaptatif à votre blog ou site Web avec un simple code HTML. Aucune clé API requise.",
    embedPreview: "Aperçu du Widget",
    copyBtn: "Copier le Code HTML",
    sourcesTitle: "Références et Recherches Publiées"
  },
  de: {
    col1Header: "Kategorie / Stufe",
    col2Header: "Referenz / Metrik",
    col3Header: "Referenzkontext",
    faqTitle: "Häufig gestellte Fragen und Antworten",
    cat: "Kategorie / Stufe",
    metric: "Referenz / Metrik",
    guidance: "Referenzkontext",
    faq: "Häufig gestellte Fragen und Antworten",
    embedBadge: "Kostenloses Tool für Webmaster & Blogger",
    embedTitle: "Binden Sie den Real BMI Rechner auf Ihrer Website ein",
    embedDesc: "Fügen Sie Ihrem Blog oder Ihrer Website mit einfachem HTML-Code einen kostenlosen, flexiblen BMI-Rechner hinzu. Keine API erforderlich.",
    embedPreview: "Live-Widget-Vorschau",
    copyBtn: "HTML-Code kopieren",
    sourcesTitle: "Referenzen & Veröffentlichte Studien"
  },
  ko: {
    col1Header: "범주 / 단계",
    col2Header: "참조 / 메트릭",
    col3Header: "참조 컨텍스트",
    faqTitle: "자주 묻는 질문 및 답변",
    cat: "범주 / 단계",
    metric: "참조 / 메트릭",
    guidance: "참조 컨텍스트",
    faq: "자주 묻는 질문 및 답변",
    embedBadge: "무료 웹마스터 및 블로거 도구",
    embedTitle: "무료 리얼 BMI 계산기를 귀하의 웹사이트에 임베드하세요",
    embedDesc: "간단한 HTML 코드로 블로그나 웹사이트에 무료 반응형 BMI 계산기를 추가하세요. API 키가 필요하지 않습니다.",
    embedPreview: "라이브 위젯 미리보기",
    copyBtn: "HTML 코드 복사",
    sourcesTitle: "참고 문헌 및 출판 연구"
  },
  hi: {
    col1Header: "श्रेणी / स्तर",
    col2Header: "संदर्भ / मापदंड",
    col3Header: "संदर्भ विवरण",
    faqTitle: "अक्सर पूछे जाने वाले प्रश्न एवं उत्तर",
    cat: "श्रेणी / स्तर",
    metric: "संदर्भ / मापदंड",
    guidance: "संदर्भ विवरण",
    faq: "अक्सर पूछे जाने वाले प्रश्न एवं उत्तर",
    embedBadge: "वेबमास्टर एवं ब्लॉगर के लिए मुफ़्त टूल",
    embedTitle: "अपनी वेबसाइट पर मुफ़्त बीएमआई कैलकुलेटर जोड़ें",
    embedDesc: "सरल एचटीएमएल कोड की मदद से अपने ब्लॉग या वेबसाइट पर मुफ़्त बीएमआई कैलकुलेटर जोड़ें।",
    embedPreview: "विजेट पूर्वावलोकन",
    copyBtn: "एचटीएमएल कोड कॉपी करें",
    sourcesTitle: "संदर्भ एवं शोध सामग्री"
  }
};
`;

fs.writeFileSync(filePath, raw + '\n' + tableUiCode, 'utf8');
console.log('seoDatabase.ts structure cleanly repaired.');
