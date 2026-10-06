const fs = require('fs');

const raw = fs.readFileSync('src/data/seoDatabase.ts', 'utf8');
const startIdx = raw.indexOf('export const seoDatabase');
const objStart = raw.indexOf('{', startIdx);
const codeStr = 'module.exports = ' + raw.slice(objStart);

fs.writeFileSync('scratch/temp_db.cjs', codeStr);
const database = require('./temp_db.cjs');

console.log(JSON.stringify(database['bmi-chart']['hi']['tableRows'], null, 2));

if (fs.existsSync('scratch/temp_db.cjs')) {
  fs.unlinkSync('scratch/temp_db.cjs');
}
