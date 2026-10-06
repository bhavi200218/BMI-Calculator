const fs = require('fs');
const esbuild = require('esbuild');

const databaseContent = fs.readFileSync('src/data/seoDatabase.ts', 'utf8');
const transformed = esbuild.transformSync(databaseContent, { loader: 'ts', format: 'cjs' }).code;

fs.writeFileSync('scratch/temp_seo_db_check.cjs', transformed);
const { seoDatabase } = require('../scratch/temp_seo_db_check.cjs');

console.log('Available keys in seoDatabase:', Object.keys(seoDatabase));
