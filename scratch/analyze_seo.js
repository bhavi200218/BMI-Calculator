import fs from 'fs';
import path from 'path';

const fileContent = fs.readFileSync('src/components/ToolSEOContent.astro', 'utf-8');

// Match all keys in seoDatabase
const calcMatches = [...fileContent.matchAll(/"([a-z0-9-]+)":\s*\{/g)];
console.log('Found calculator slugs in ToolSEOContent:');
calcMatches.forEach(m => console.log(m[1]));
