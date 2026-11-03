const fs = require('fs');

const html = fs.readFileSync('dist/index.html', 'utf8');
const match = html.match(/id="latest-articles"[\s\S]*?<\/section>/);
if (match) {
  const cards = match[0].split('<a href=');
  for (let i = 1; i < cards.length; i++) {
    const card = cards[i];
    const href = card.match(/^["']([^"']+)["']/);
    const title = card.match(/<h3[^>]*>([\s\S]*?)<\/h3>/);
    const desc = card.match(/<p class="[^"]*line-clamp-3[^"]*">([\s\S]*?)<\/p>/);
    console.log(`Card #${i}:`);
    console.log('  Href:', href ? href[1] : '');
    console.log('  Title:', title ? title[1].trim() : '');
    console.log('  Desc:', desc ? desc[1].trim() : '');
  }
}
