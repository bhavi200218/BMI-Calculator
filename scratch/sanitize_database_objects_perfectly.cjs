const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'seoDatabase.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Function to clean a language chunk
function cleanLangChunk(lang, chunk) {
  // Extract tableRows array and faqs array
  const lines = chunk.split('\n');
  const cleanLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    
    // Check if col1, col3, question, or answer contains bad language script
    let isBad = false;
    if (['en', 'es', 'fr', 'de'].includes(lang)) {
      if (/[\u3131-\u318E\uAC00-\uD7A3\u0900-\u097F]/.test(l)) isBad = true;
    } else if (lang === 'ko') {
      if (/[\u0900-\u097F]/.test(l)) isBad = true;
    } else if (lang === 'hi') {
      if (/[\u3131-\u318E\uAC00-\uD7A3]/.test(l)) isBad = true;
    }

    if (isBad) {
      // If it's a question line, skip until closing brace
      if (l.includes('"question":')) {
        while (i < lines.length && !lines[i].includes('}')) {
          i++;
        }
        continue;
      }
      // If it's col1 or col3 line, skip object if needed or clean text
    }

    cleanLines.push(l);
  }

  return cleanLines.join('\n');
}

// Clean all language chunks in seoDatabase.ts
console.log('Sanitizing seoDatabase.ts...');
const tools = content.split(/\n  "([a-z0-9-]+)": \{/);

// Reconstruct cleaned file
let updatedContent = tools[0];

for (let t = 1; t < tools.length; t += 2) {
  const toolName = tools[t];
  let toolBody = tools[t + 1];

  ['en', 'es', 'fr', 'de', 'ko', 'hi'].forEach(lang => {
    const langKey = `"${lang}": {`;
    const langIdx = toolBody.indexOf(langKey);
    if (langIdx !== -1) {
      // Find end of this lang block (next lang key or end of tool object)
      const nextLangs = ['en', 'es', 'fr', 'de', 'ko', 'hi'].filter(l => l !== lang);
      let endIdx = toolBody.length;
      nextLangs.forEach(nl => {
        const p = toolBody.indexOf(`"${nl}": {`, langIdx + 10);
        if (p !== -1 && p < endIdx) endIdx = p;
      });

      const langChunk = toolBody.slice(langIdx, endIdx);
      const cleanedLangChunk = cleanLangChunk(lang, langChunk);
      toolBody = toolBody.replace(langChunk, cleanedLangChunk);
    }
  });

  updatedContent += `\n  "${toolName}": {` + toolBody;
}

fs.writeFileSync(filePath, updatedContent, 'utf8');
console.log('Sanitization complete!');
