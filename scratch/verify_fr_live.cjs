const https = require('https');

const url = 'https://realbmicalculator.com/fr/bmi-calculator-for-indians/?utm_source=chatgpt.com';
https.get(url, { headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache', 'User-Agent': 'Mozilla/5.0' } }, (res) => {
  let html = '';
  res.on('data', c => html += c);
  res.on('end', () => {
    console.log('HTTP Status:', res.statusCode);
    const titleMatch = html.match(/<title>([^<]+)<\/title>/);
    console.log('Exact Title:', titleMatch ? titleMatch[1] : 'NOT FOUND');
    const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
    console.log('Exact H1:', h1Match ? h1Match[1].trim() : 'NOT FOUND');
    console.log('Includes old English heading:', html.includes('BMI Calculator for Indians – Healthy Height Weight Chart for Indian Adults – Outil de Référence'));
    console.log('Includes French title:', html.includes('Calculateur d&#39;IMC pour les Indiens – Tableau Poids-Taille Santé – Outil de Référence'));
    console.log('Occurrences of "Healthy Height Weight Chart":', (html.match(/Healthy Height Weight Chart/g) || []).length);
    console.log('Occurrences of "BMI Calculator for Indians":', (html.match(/BMI Calculator for Indians/g) || []).length);
    console.log('Occurrences of "Outil de Référence":', (html.match(/Outil de Référence/g) || []).length);
  });
});
