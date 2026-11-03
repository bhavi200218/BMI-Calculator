const fs = require('fs');

if (fs.existsSync('dist/en/blog/index.html')) {
  const html = fs.readFileSync('dist/en/blog/index.html', 'utf8');
  console.log('=== Checking: dist/en/blog/index.html');
  // Find all cards or articles
  const matches = html.match(/<h[23][^>]*>[\s\S]*?<\/h[23]>/g) || [];
  matches.forEach(m => console.log('Heading:', m.replace(/<[^>]+>/g, '').trim()));
  
  if (html.includes('18.5')) {
    console.log('Found 18.5 in dist/en/blog/index.html');
  }
} else {
  console.log('dist/en/blog/index.html does not exist');
}

