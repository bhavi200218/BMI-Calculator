const fs = require('fs');
const content = fs.readFileSync('src/components/ToolSEOContent.astro', 'utf8');

// Find all top-level keys in seoDatabase
const matches = content.match(/\"([a-z0-9-]+)\":\s*\{\s*\"en\":/g);
if (matches) {
  console.log("Found tool keys in seoDatabase:");
  matches.forEach(m => console.log(m));
} else {
  console.log("No top level tool keys found directly matching pattern");
}

// Search for 3d or visualizer
const lines = content.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('3d') || line.includes('Oxford') || line.includes('visualizer')) {
    console.log(`L${idx+1}: ${line.trim().substring(0, 100)}`);
  }
});
