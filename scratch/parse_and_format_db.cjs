const fs = require('fs');

let content = fs.readFileSync('src/data/seoDatabase.ts', 'utf8');

// Fix unescaped 5'6" inside strings
content = content.replaceAll(`5'6"`, `5 ft 6 in`);
content = content.replaceAll(`5'3"`, `5 ft 3 in`);
content = content.replaceAll(`5'7"`, `5 ft 7 in`);
content = content.replaceAll(`6'1"`, `6 ft 1 in`);

// Fix double quotes ending ."."
content = content.replaceAll(`kg."."`, `kg."`);

// Fix stray comma lines
content = content.replaceAll(`}\n              ,`, `},`);
content = content.replaceAll(`}        ,`, `},`);

fs.writeFileSync('src/data/seoDatabase.ts', content, 'utf8');

// Test if it parses cleanly as JS
try {
  let jsOnly = content.replace("import { type Locale } from '../utils/calculators';", "");
  jsOnly = jsOnly.replace(/export interface ToolContent \{[\s\S]*?\}/, "");
  jsOnly = jsOnly.replace("export const tableUi", "const tableUi");
  jsOnly = jsOnly.replace("export const seoDatabase", "const seoDatabase");
  eval(jsOnly);
  console.log("SUCCESS! seoDatabase.ts parsed with ZERO syntax errors!");
} catch (err) {
  console.error("Syntax Error found:", err.message);
}
