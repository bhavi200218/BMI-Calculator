const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'seoDatabase.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Korean block for bmi-calculator-india
const koCleanBlock = `    "ko": {
      "eyebrow": "건강 참조 표준 지침",
      "title": "인도 성인을 위한 체질량지수 계산기 – ICMR 및 WHO 인도 기준",
      "intro": "WHO 및 ICMR 남아시아 아시아 태평양 지침에 기반한 실시간 참고 계산기입니다. 개인별 수치를 측정하고 성인 표준 참조 범위를 확인하세요.",
      "formulaTitle": "표준 계산 공식",
      "formulaDesc": "검증된 표준 공식을 사용하여 계산됩니다.",
      "formulaCode": "Asian BMI = Weight (kg) / [Height (cm) / 100]²",
      "tableTitle": "표준 참조 진단표",
      "tableRows": [
        {
          "col1": "저체중",
          "col2": "< 18.5 kg/m²",
          "col3": "저체중 참조 기준"
        },
        {
          "col1": "정상 체중",
          "col2": "18.5 – 22.9 kg/m²",
          "col3": "인도 성인을 위한 최적 건강 체중 범위"
        },
        {
          "col1": "과체중 (위험 증가)",
          "col2": "23.0 – 24.9 kg/m²",
          "col3": "심혈관 및 대사 위험 증가 기준 (BMI ≥ 23)"
        },
        {
          "col1": "1단계 비만",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": "WHO 아시아 태평양 기준 1단계 비만"
        },
        {
          "col1": "2단계 고도 비만",
          "col2": "≥ 30.0 kg/m²",
          "col3": "고위험 중증 비만 분류"
        }
      ],
      "faqs": [
        {
          "question": "인도 표준 BMI 계산기의 원리와 측정 항목은 무엇인가요?",
          "answer": "본 계산기는 ICMR 및 WHO 남아시아 지침에 따라 체질량지수(BMI)와 건강 체중 범위를 측정합니다."
        },
        {
          "question": "인도에서 BMI 23이 과체중 기준인 이유는 무엇인가요?",
          "answer": "남아시아 인구는 낮은 BMI에서도 높은 복부 내장 지방 비율을 보여 23.0 kg/m²부터 심대사 위험이 증가합니다."
        },
        {
          "question": "인도 성인의 허리둘레 기준 가이드라인은 무엇인가요?",
          "answer": "ICMR 지침에 따르면 권장 허리둘레 기준은 남성 90cm 미만, 여성 80cm 미만입니다."
        }
      ]
    }`;

// Hindi block for bmi-calculator-india
const hiCleanBlock = `    "hi": {
      "eyebrow": "डब्ल्यूएचओ एवं आईसीएमआर भारतीय दिशानिर्देश",
      "title": "भारतीयों के लिए बीएमआई कैलकुलेटर – आईसीएमआर एवं डब्ल्यूएचओ मानक",
      "intro": "भारतीय चिकित्सा अनुसंधान परिषद (ICMR) और WHO दक्षिण एशियाई दिशानिर्देशों पर आधारित भारतीयों के लिए मुफ़्त बीएमआई कैलकुलेटर। किलोग्राम और सेंटीमीटर में अपने बीएमआई और स्वस्थ वजन सीमा की गणना करें।",
      "formulaTitle": "भारतीय बीएमआई सूत्र (किग्रा और सेमी)",
      "formulaDesc": "बीएमआई = वजन (किग्रा) / [ऊंचाई (मीटर)]² | भारतीयों के लिए ओवरवेट कटऑफ: 23.0 kg/m²",
      "formulaCode": "BMI = kg / m²",
      "tableTitle": "भारतीय पुरुषों एवं महिलाओं के लिए बीएमआई चार्ट (ICMR एवं WHO मानक)",
      "tableRows": [
        {
          "col1": "कम वजन",
          "col2": "< 18.5 kg/m²",
          "col3": "कम वजन संदर्भ सीमा"
        },
        {
          "col1": "सामान्य एवं स्वस्थ बीएमआई",
          "col2": "18.5 – 22.9 kg/m²",
          "col3": "भारतीयों के लिए आदर्श स्वस्थ बीएमआई सीमा"
        },
        {
          "col1": "अधिक वजन (कटऑफ 23.0)",
          "col2": "23.0 – 24.9 kg/m²",
          "col3": "भारतीयों के लिए अधिक वजन एवं जोखिम सीमा"
        },
        {
          "col1": "मोटापा श्रेणी I",
          "col2": "25.0 – 29.9 kg/m²",
          "col3": "दक्षिण एशियाई मानकों के तहत मोटापा श्रेणी I"
        },
        {
          "col1": "गंभीर मोटापा श्रेणी II",
          "col2": "≥ 30.0 kg/m²",
          "col3": "गंभीर मोटापा श्रेणी"
        }
      ],
      "faqs": [
        {
          "question": "भारतीय वयस्कों के लिए बीएमआई कैलकुलेटर कैसे काम करता है?",
          "answer": "यह कैलकुलेटर ICMR और WHO के दिशानिर्देशों के आधार पर ऊंचाई और वजन का विश्लेषण करके बीएमआई की गणना करता है।"
        },
        {
          "question": "भारत में बीएमआई 23.0 को ओवरवेट क्यों माना जाता है?",
          "answer": "आईसीएमआर (ICMR) के शोध के अनुसार, भारतीय आबादी में कम बीएमआई पर भी पेट की विसरल वसा अधिक होती है, जिससे 23.0 kg/m² से ही जोखिम बढ़ने लगता है।"
        },
        {
          "question": "भारतीयों के लिए आदर्श बीएमआई सीमा क्या है?",
          "answer": "आईसीएमआर और डब्ल्यूएचओ दिशानिर्देशों के अनुसार भारतीय वयस्कों के लिए आदर्श बीएमआई 18.5 से 22.9 kg/m² के बीच है।"
        }
      ]
    }`;

// Replace the KO and HI sections of bmi-calculator-india in content
const indiaIdx = content.indexOf('"bmi-calculator-india"');
if (indiaIdx !== -1) {
  const nextToolIdx = content.indexOf('"bmi-calculator-for-indians"', indiaIdx);
  const indiaChunk = content.slice(indiaIdx, nextToolIdx);
  
  const koPos = indiaChunk.indexOf('"ko": {');
  const hiPos = indiaChunk.indexOf('"hi": {');

  // Replace ko and hi inside indiaChunk
  const beforeKo = indiaChunk.slice(0, koPos);
  const newChunk = beforeKo + koCleanBlock.trim() + ',\n' + hiCleanBlock.trim() + '\n  },\n';
  
  content = content.slice(0, indiaIdx) + newChunk + content.slice(nextToolIdx);
  console.log('Successfully updated KO and HI in bmi-calculator-india!');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Written updated content to seoDatabase.ts');
