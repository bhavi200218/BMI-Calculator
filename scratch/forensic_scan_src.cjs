const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src');

const suspiciousPatterns = [
  { name: 'Underweight reference threshold', regex: /Underweight reference threshold/gi },
  { name: 'Optimal healthy range for Indian adults', regex: /Optimal healthy range for Indian adults/gi },
  { name: 'Elevated cardiometabolic risk cutoff for Indians', regex: /Elevated cardiometabolic risk cutoff for Indians/gi },
  { name: 'Class I obesity threshold under ICMR standards', regex: /Class I obesity threshold under ICMR standards/gi },
  { name: 'Severe obesity risk threshold', regex: /Severe obesity risk threshold/gi },
  { name: 'indische Staatsbürger', regex: /Staatsbürger/gi },
  { name: 'WHO Medical Standards', regex: /WHO Medical Standards/gi },
  { name: 'WHO certified/approved/endorsed', regex: /WHO (certified|approved|endorsed)/gi },
  { name: 'medical-grade/clinical standards', regex: /(medical-grade|clinical standards)/gi }
];

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      scanDir(full);
    } else if (/\.(ts|js|astro|json)$/.test(f)) {
      const content = fs.readFileSync(full, 'utf8');
      suspiciousPatterns.forEach(p => {
        const matches = content.match(p.regex);
        if (matches) {
          console.log(`[FOUND ${p.name}] in ${path.relative(srcDir, full)} (${matches.length} matches)`);
          // Show line numbers
          const lines = content.split('\n');
          lines.forEach((line, idx) => {
            if (p.regex.test(line)) {
              console.log(`   L${idx + 1}: ${line.trim().slice(0, 120)}`);
            }
          });
        }
      });
    }
  }
}

console.log('=== SCANNING SRC FOR TARGET STRINGS ===');
scanDir(srcDir);
console.log('=== SCAN COMPLETE ===');
