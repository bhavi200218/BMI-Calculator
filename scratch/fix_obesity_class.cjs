const fs = require('fs');

let content = fs.readFileSync('src/components/ToolSEOContent.astro', 'utf8');

const langs = ['es', 'fr', 'de', 'ko', 'hi'];
const toolRegex = /\"([a-z0-9-]+)\":\s*\{/g;
let match;
const tools = [];

while ((match = toolRegex.exec(content)) !== null) {
  tools.push({ name: match[1], index: match.index });
}

// Perform replacements per language block
for (let i = tools.length - 1; i >= 0; i--) {
  const t = tools[i];
  const nextIdx = i < tools.length - 1 ? tools[i+1].index : content.indexOf('const effectiveSlug =');
  let tBlock = content.substring(t.index, nextIdx);

  langs.forEach(lang => {
    const lIdx = tBlock.indexOf(`"${lang}": {`);
    if (lIdx === -1) return;

    const nextLangs = langs.map(l => tBlock.indexOf(`"${l}": {`, lIdx + 5)).filter(p => p !== -1);
    const lEnd = nextLangs.length > 0 ? Math.min(...nextLangs) : tBlock.length;
    let lBlock = tBlock.substring(lIdx, lEnd);

    if (lang === 'es') {
      lBlock = lBlock.replace(/Obesity Class I/gi, 'Obesidad Clase I')
                     .replace(/Obesity Class II/gi, 'Obesidad Clase II')
                     .replace(/Obesity Class III/gi, 'Obesidad Clase III')
                     .replace(/Obesity Class/gi, 'Obesidad Clase');
    } else if (lang === 'fr') {
      lBlock = lBlock.replace(/Obesity Class I/gi, 'Obésité Classe I')
                     .replace(/Obesity Class II/gi, 'Obésité Classe II')
                     .replace(/Obesity Class III/gi, 'Obésité Classe III')
                     .replace(/Obesity Class/gi, 'Obésité Classe');
    } else if (lang === 'de') {
      lBlock = lBlock.replace(/Obesity Class I/gi, 'Adipositas Klasse I')
                     .replace(/Obesity Class II/gi, 'Adipositas Klasse II')
                     .replace(/Obesity Class III/gi, 'Adipositas Klasse III')
                     .replace(/Obesity Class/gi, 'Adipositas Klasse');
    } else if (lang === 'ko') {
      lBlock = lBlock.replace(/Obesity Class I/gi, '비만 1단계')
                     .replace(/Obesity Class II/gi, '비만 2단계')
                     .replace(/Obesity Class III/gi, '비만 3단계')
                     .replace(/Obesity Class/gi, '비만 단계');
    } else if (lang === 'hi') {
      lBlock = lBlock.replace(/Obesity Class I/gi, 'ओबेसिटी क्लास I')
                     .replace(/Obesity Class II/gi, 'ओबेसिटी क्लास II')
                     .replace(/Obesity Class III/gi, 'ओबेसिटी क्लास III')
                     .replace(/Obesity Class/gi, 'ओबेसिटी क्लास');
    }

    tBlock = tBlock.substring(0, lIdx) + lBlock + tBlock.substring(lEnd);
  });

  content = content.substring(0, t.index) + tBlock + content.substring(nextIdx);
}

fs.writeFileSync('src/components/ToolSEOContent.astro', content, 'utf8');
console.log("Successfully localized Obesity Class references!");
