import fs from 'fs';

// Read seoDatabase.ts and extract the JSON-like object by removing exports/imports
const content = fs.readFileSync('src/data/seoDatabase.ts', 'utf8');

// We can run node with --experimental-strip-types by pointing to a file that imports calculators.ts
// Or we can just temporarily patch the import in memory or write a temp file
const tempContent = content.replace("from '../utils/calculators';", "from '../utils/calculators.ts';");
fs.writeFileSync('scratch/tempSeo.ts', tempContent);
