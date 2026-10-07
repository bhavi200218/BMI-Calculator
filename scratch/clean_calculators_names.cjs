const fs = require('fs');

let code = fs.readFileSync('src/utils/calculators.ts', 'utf8');

// Replace Korean English parentheticals in calculator names
code = code.replace("ko: 'TDEE 계산기 (TDEE Calculator)'", "ko: 'TDEE 계산기'");
code = code.replace("ko: '체지방 계산기 (Body Fat Calculator)'", "ko: '체지방 계산기'");
code = code.replace("ko: '이상 체중 계산기 (Ideal Weight Calculator)'", "ko: '이상 체중 계산기'");
code = code.replace("ko: '칼로리 적자 계산기 (Calorie Deficit Calculator)'", "ko: '칼로리 적자 계산기'");
code = code.replace("ko: '단백질 섭취량 계산기 (Protein Intake Calculator)'", "ko: '단백질 섭취량 계산기'");
code = code.replace("ko: '허리 엉덩이 비율 계산기 (WHR Calculator)'", "ko: '허리 엉덩이 비율 계산기'");
code = code.replace("ko: 'Mosteller 체표면적 계산기 (Square Meters BSA)'", "ko: 'Mosteller 체표면적 계산기'");
code = code.replace("ko: '1RM 측정기 (1 Rep Max 계산기)'", "ko: '1RM 측정기'");

// Replace Hindi English parentheticals
code = code.replace("hi: 'ऊंचाई के अनुसार स्वस्थ वजन (Healthy Weight by Height)'", "hi: 'ऊंचाई के अनुसार स्वस्थ वजन'");
code = code.replace("hi: 'आदर्श वजन कैलकुलेटर (Ideal Weight Calculator)'", "hi: 'आदर्श वजन कैलकुलेटर'");
code = code.replace("hi: 'बॉडी विजुअलाइज़र (3D Body Visualizer)'", "hi: '3D बॉडी विजुअलाइज़र'");
code = code.replace("hi: 'बीएमआई कैलकुलेटर भारत (BMI Calculator India)'", "hi: 'बीएमआई कैलकुलेटर भारत'");
code = code.replace("hi: 'रखरखाव कैलोरी कैलकुलेटर (Maintenance Calorie Calculator)'", "hi: 'रखरखाव कैलोरी कैलकुलेटर'");
code = code.replace("hi: 'मुफ़्त लीन बॉडी मास कैलकुलेटर (LBM Calculator)'", "hi: 'मुफ़्त लीन बॉडी मास कैलकुलेटर'");
code = code.replace("hi: 'ऊंचाई के अनुसार आइडियल बॉडी वेट (IBW Calculator)'", "hi: 'ऊंचाई के अनुसार आदर्श शरीर वजन'");
code = code.replace("hi: 'कूल्हे का अनुपात कैलकुलेटर (WHR Calculator)'", "hi: 'कमर से कूल्हे का अनुपात कैलकुलेटर'");
code = code.replace("hi: 'मुफ़्त बॉडी सरफेस एरिया कैलकुलेटर (BSA Calculator)'", "hi: 'मुफ़्त बॉडी सरफेस एरिया कैलकुलेटर'");
code = code.replace("hi: 'कैलकुलेटर (One-Rep Max Calculator)'", "hi: '1RM कैलकुलेटर'");
code = code.replace("hi: 'BMR कैलकुलेटर (बेसल मेटाबॉलिक रेट)'", "hi: 'BMR कैलकुलेटर'");

fs.writeFileSync('src/utils/calculators.ts', code);
console.log('Successfully updated src/utils/calculators.ts');
