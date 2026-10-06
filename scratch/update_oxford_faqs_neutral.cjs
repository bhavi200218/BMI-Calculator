const fs = require('fs');

const file = 'src/data/seoDatabase.ts';
let content = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');

// EN 3D FAQ 4
content = content.replace(
  `"As demonstrated by Prof. Nick Trefethen at Oxford University, traditional BMI (m²) overestimates fatness in tall people and underestimates it in short people. The 2.5 exponent corrects this mathematical bias."`,
  `"Proposed by Prof. Nick Trefethen at Oxford University, the 2.5-power equation provides an alternative height-scaling approach that changes how height is represented in the BMI calculation for tall and short statures."`
);

// ES 3D FAQ 4
content = content.replace(
  `"Sí, el profesor Nick Trefethen de la Universidad de Oxford diseñó esta fórmula para eliminar la distorsión matemática en personas muy altas o bajas."`,
  `"Propuesta por el Prof. Nick Trefethen de la Universidad de Oxford, la ecuación de potencia 2.5 proporciona un enfoque alternativo de escala de altura para personas altas y bajas."`
);

// FR 3D FAQ 4
content = content.replace(
  `"Elle élimine la distorsition mathématique de la formule de Quetelet qui désavantage systématiquement les personnes très grandes."`,
  `"Proposée par le professeur Nick Trefethen de l'Université d'Oxford, l'équation à la puissance 2,5 offre une approche alternative d’échelle de taille."`
);

// DE 3D FAQ 4
content = content.replace(
  `"Prof. Nick Trefethen von der Universität Oxford zeigte, dass die alte Quetelet-Formel große Menschen mathematisch benachteiligt."`,
  `"Von Prof. Nick Trefethen an der Universität Oxford vorgeschlagen, bietet die 2,5-Potenz-Gleichung einen alternativen Skalierungsansatz für die Körpergröße."`
);

// KO 3D FAQ 4
content = content.replace(
  `"옥스퍼드 대학교 닉 트레페젠(Nick Trefethen) 교수의 연구에 따르면, 2차원 제곱 공식은 키가 큰 사람을 불필요하게 높은 BMI로 산출하는 기하학적 편향이 있어 2.5제곱 공식으로 이를 보정합니다."`,
  `"옥스퍼드 대학교 닉 트레페젠 교수가 제안한 2.5제곱 공식은 키가 큰 사람과 작은 사람의 신장이 BMI 산출에 반영되는 방식을 조정하는 대안적 수학적 접근법을 제공합니다."`
);

// HI 3D FAQ 4
content = content.replace(
  `"ऑक्सफोर्ड 2.5-पावर फॉर्मूला लंबे या छोटे लोगों के लिए अधिक सटीक गणितीय संतुलन प्रदान करता है।"`,
  `"ऑक्सफोर्ड विश्वविद्यालय के प्रो. निक ट्रेफेथेन द्वारा प्रस्तावित 2.5-पावर समीकरण एक वैकल्पिक ऊंचाई-स्केलिंग दृष्टिकोण प्रदान करता है।"`
);

fs.writeFileSync(file, content, 'utf8');
console.log("Updated 3D Oxford FAQs to neutral, scientifically accurate phrasing across all 6 locales!");
