const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '../dist/ko/bmi-calculator-for-indians/index.html');
const content = fs.readFileSync(htmlPath, 'utf8');

const targetStr = '인도 성인 전용 BMI 계산기의 원리와 측정 항목은 무엇인가요?';
let pos = content.indexOf(targetStr);
let count = 0;
while (pos !== -1) {
  count++;
  console.log(`\n--- Occurrence #${count} at position ${pos} ---`);
  const snippet = content.substring(Math.max(0, pos - 150), Math.min(content.length, pos + 300));
  console.log(snippet);
  pos = content.indexOf(targetStr, pos + 1);
}
