const fs = require('fs');

let code = fs.readFileSync('src/utils/blogArticles.ts', 'utf8');

// Replace Hindi English parentheticals in blogArticles
code = code.replace(/कम वजन \(Underweight\)/g, 'कम वजन');
code = code.replace(/सामान्य वजन \(Normal Weight\)/g, 'सामान्य वजन');
code = code.replace(/सामान्य वजन \(Healthy Weight\)/g, 'सामान्य वजन');
code = code.replace(/अधिक वजन \(Overweight\)/g, 'अधिक वजन');
code = code.replace(/मोटापा \(Obesity\)/g, 'मोटापा');

fs.writeFileSync('src/utils/blogArticles.ts', code);
console.log('Successfully updated src/utils/blogArticles.ts');
