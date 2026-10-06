const fs = require('fs');

const file = 'src/data/seoDatabase.ts';
let content = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');

// WHR FAQs
content = content.replace(
  `"question": "Cómo accurately measure waist and hip circumference for the WHR calculator?"`,
  `"question": "¿Cómo medir con precisión la circunferencia de cintura y cadera para la calculadora de índice cintura-cadera?"`
);
content = content.replace(
  `"question": "Comment accurately measure waist and hip circumference for the WHR calculator?"`,
  `"question": "Comment mesurer avec précision le tour de taille et de hanches pour le calculateur RTH ?"`
);
content = content.replace(
  `"question": "Wie man accurately measure waist and hip circumference for the WHR calculator?"`,
  `"question": "Wie misst man das Taille-Hüft-Verhältnis (WHR) genau?"`
);
content = content.replace(
  `"question": " accurately measure waist and hip circumference for the WHR calculator? 안내 및 원리"`,
  `"question": "허리-둘레 비율(WHR)을 정확하게 측정하는 방법은 무엇인가요?"`
);

// Karvonen FAQs
content = content.replace(
  `"question": "Por qué es the Karvonen method more accurate than standard 220-age?"`,
  `"question": "¿Por qué el método Karvonen considera la frecuencia cardíaca en reposo en lugar de solo 220 menos edad?"`
);
content = content.replace(
  `"question": "Pourquoi the Karvonen method more accurate than standard 220-age?"`,
  `"question": "Pourquoi la méthode Karvonen prend-elle en compte la fréquence cardiaque au repos ?"`
);
content = content.replace(
  `"question": "Warum ist the Karvonen method more accurate than standard 220-age?"`,
  `"question": "Warum berücksichtigt die Karvonen-Formel den Ruhepuls?"`
);
content = content.replace(
  `"question": "Why is the Karvonen method more accurate than standard 220-age? 안내 및 원리"`,
  `"question": "카르보넨 공식이 일반 220-나이 공식과 다른 점은 무엇인가요?"`
);

// 1RM FAQs
content = content.replace(
  `"question": "Is the 1RM calculator accurate for bench press and squat? 안내 및 원리"`,
  `"question": "1RM 계산기는 벤치프레스, 스쿼트, 데드리프트 측정 시 유용한가요?"`
);
content = content.replace(
  `"question": "How accurate is the Epley 1RM formula for bench press, squat, and deadlift? 안내 및 원리"`,
  `"question": "Epley 1RM 추정 공식의 기본 원리와 사용 방법은 무엇인가요?"`
);

fs.writeFileSync(file, content, 'utf8');
console.log("Cleaned up remaining mixed-language FAQ question titles in seoDatabase.ts!");
