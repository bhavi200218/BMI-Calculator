const fs = require('fs');

const content = fs.readFileSync('src/components/ToolSEOContent.astro', 'utf8');

const langs = ['es', 'fr', 'de', 'ko', 'hi'];

// Split database into tool blocks
const toolRegex = /\"([a-z0-9-]+)\":\s*\{/g;
let match;
const tools = [];

while ((match = toolRegex.exec(content)) !== null) {
  tools.push({ name: match[1], index: match.index });
}

console.log("Found " + tools.length + " tool blocks in ToolSEOContent.astro\n");

let leakCount = 0;

tools.forEach((t, i) => {
  const nextIdx = i < tools.length - 1 ? tools[i+1].index : content.indexOf('const enData');
  const tBlock = content.substring(t.index, nextIdx);

  langs.forEach(lang => {
    const lIdx = tBlock.indexOf(`"${lang}": {`);
    if (lIdx === -1) return;

    const nextLangs = langs.map(l => tBlock.indexOf(`"${l}": {`, lIdx + 5)).filter(p => p !== -1);
    const lEnd = nextLangs.length > 0 ? Math.min(...nextLangs) : tBlock.length;
    const lBlock = tBlock.substring(lIdx, lEnd);

    // Common English leak patterns
    const englishPatterns = [
      /Reference category for/i,
      /Baseline reference window/i,
      /Reference threshold used/i,
      /Higher reference category/i,
      /Elevated screening reference/i,
      /Underweight reference range/i,
      /Healthy-weight reference range/i,
      /Overweight reference range/i,
      /Obesity Class/i,
      /Oxford 2\.5-Power/i,
      /Interactive 3D Body Visualizer/i,
      /Calculates body mass index/i,
      /Standard reference formula/i,
      /Frequently Asked Questions/i
    ];

    englishPatterns.forEach(pattern => {
      if (pattern.test(lBlock)) {
        const matches = lBlock.match(pattern);
        console.log(`🚨 LEAK: Tool "${t.name}" [${lang}] contains English text matching ${pattern}: "${matches[0]}"`);
        leakCount++;
      }
    });
  });
});

console.log(`\nLeak check complete. Total leaks found: ${leakCount}`);
