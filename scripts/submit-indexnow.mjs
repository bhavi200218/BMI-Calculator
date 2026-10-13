import fs from 'node:fs';
import path from 'node:path';

const HOST = 'realbmicalculator.com';
const KEY = 'D04E5B333D0B5BDC1386D5DB2D0CB6F8';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

async function main() {
  console.log('--- Submitting URLs to IndexNow (Bing, Yandex, Seznam, Naver) ---');

  let urls = [];
  const sitemapPath = path.resolve('dist', 'sitemap-0.xml');

  if (fs.existsSync(sitemapPath)) {
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    const matches = [...sitemapContent.matchAll(/<loc>(https:\/\/[^<]+)<\/loc>/g)];
    urls = matches.map(m => m[1]);
  } else {
    // Collect from dist html files
    function scan(dir) {
      for (const f of fs.readdirSync(dir)) {
        const full = path.join(dir, f);
        if (fs.statSync(full).isDirectory()) scan(full);
        else if (f === 'index.html') {
          const rel = full.replace('dist', '').replace(/\\/g, '/').replace(/\/index\.html$/, '/');
          urls.push(`https://${HOST}${rel}`);
        }
      }
    }
    scan('dist');
  }

  // Ensure unique and filter out non-indexable
  urls = [...new Set(urls)].filter(u => !u.includes('/embed/') && !u.includes('/search/'));
  console.log(`Discovered ${urls.length} canonical URLs for IndexNow submission.`);

  // IndexNow payload format (batches of up to 10,000 URLs)
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls
  };

  const endpoints = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow'
  ];

  for (const endpoint of endpoints) {
    try {
      console.log(`Submitting ${urls.length} URLs to ${endpoint}...`);
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok || response.status === 200 || response.status === 202) {
        console.log(`✓ Successfully submitted to ${endpoint} (Status: ${response.status})`);
      } else {
        const errText = await response.text();
        console.warn(`! Response from ${endpoint}: Status ${response.status} - ${errText}`);
      }
    } catch (err) {
      console.error(`✕ Error submitting to ${endpoint}:`, err.message);
    }
  }

  console.log('IndexNow submission finished.');
}

main();
