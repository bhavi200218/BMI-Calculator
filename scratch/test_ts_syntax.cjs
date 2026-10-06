const fs = require('fs');
const esbuild = require('esbuild');

try {
  const result = esbuild.transformSync(fs.readFileSync('src/data/seoDatabase.ts', 'utf8'), {
    loader: 'ts',
  });
  console.log("Syntax check PASSED! Length of transpiled code:", result.code.length);
} catch (e) {
  console.error("Syntax Error found:", e.message);
}
