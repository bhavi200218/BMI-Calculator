import fs from 'fs';

const content = fs.readFileSync('src/components/ToolSEOContent.astro', 'utf-8');
const match = content.match(/const seoDatabase[^{]*= (\{[\s\S]*?\n\};)/);
let seoDatabase = {};
if (match) {
  eval('seoDatabase = ' + match[1].replace(/;\s*$/, ''));
}

console.log('--- 3D-BMI-CALCULATOR ES ---');
console.log(JSON.stringify(seoDatabase['3d-bmi-calculator']?.es, null, 2));

console.log('--- 3D-BODY-VISUALIZER ES ---');
console.log(JSON.stringify(seoDatabase['3d-body-visualizer']?.es, null, 2));
