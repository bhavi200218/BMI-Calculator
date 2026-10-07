const https = require('https');

function check(url) {
  https.get(url, { headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache', 'User-Agent': 'Mozilla/5.0' } }, (res) => {
    let data = '';
    res.on('data', c => data += c);
    res.on('end', () => {
      console.log('=== URL:', url);
      console.log('Status:', res.statusCode);
      const titleMatch = data.match(/<title>([^<]+)<\/title>/);
      console.log('Title:', titleMatch ? titleMatch[1] : 'NONE');
      console.log('Has BMI Calculator for Indians:', data.includes('BMI Calculator for Indians'));
      console.log('Has Healthy Height Weight Chart:', data.includes('Healthy Height Weight Chart'));
      console.log('Has Calculadora de IMC para la Población India:', data.includes('Calculadora de IMC para la Población India'));
    });
  });
}

check('https://121669a7.real-bmi-calculator.pages.dev/es/bmi-calculator-for-indians/');
check('https://realbmicalculator.com/es/bmi-calculator-for-indians/');
