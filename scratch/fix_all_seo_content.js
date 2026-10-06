import fs from 'fs';

// Complete dictionary of unique FAQs per calculator slug for all non-English languages
const faqDictionary = {
  'bmr-calculator': {
    es: [
      { question: "¿Qué es la Tasa Metabólica Basal (BMR)?", answer: "El BMR es la cantidad mínima de calorías que tu cuerpo quema en reposo absoluto para mantener funciones biológicas esenciales como la respiración y la circulación." },
      { question: "¿En qué se diferencia el BMR del TDEE?", answer: "El BMR representa el gasto energético en reposo total, mientras que el TDEE (Gasto Energético Diario Total) añade el consumo de calorías derivado de tus actividades y ejercicios diarios." },
      { question: "¿Qué fórmula utiliza la Calculadora de BMR?", answer: "Nuestra herramienta utiliza la ecuación de Mifflin-St Jeor, ampliamente considerada en la investigación clínica como el método más preciso para estimar el BMR en adultos." },
      { question: "¿Cómo influyen la edad y la masa muscular en el BMR?", answer: "El tejido muscular denso consume más calorías en reposo que el tejido adiposo. A medida que la masa muscular disminuye naturalmente con la edad, el BMR tiende a reducirse levemente." },
      { question: "¿Es aconsejable consumir menos calorías que mi BMR?", answer: "No se recomienda reducir las calorías por debajo de tu BMR sin supervisión médica, ya que tu cuerpo necesita ese nivel básico de energía para mantener los órganos vitales." }
    ],
    fr: [
      { question: "Qu'est-ce que le Métabolisme de Base (BMR) ?", answer: "Le BMR est le nombre minimal de calories brûlées au repos par votre organisme pour maintenir en vie vos organes essentiels (cœur, cerveau, poumons)." },
      { question: "Quelle est la différence entre le BMR et le TDEE ?", answer: "Le BMR mesure la dépense énergétique au repos strict, tandis que le TDEE inclut le BMR augmenté de l'énergie dépensée par les mouvements quotidiens et les entraînements." },
      { question: "Quelle formule est appliquée pour calculer le BMR ?", answer: "Notre outil utilise la formule de Mifflin-St Jeor, reconnue pour sa haute précision dans l'évaluation du métabolisme basal des adultes." },
      { question: "Quel est l'impact de la masse musculaire sur le BMR ?", answer: "La masse musculaire consomme plus de calories au repos que la graisse. Plus vous possédez de masse maigre, plus votre BMR au repos est élevé." },
      { question: "Peut-on consommer moins de calories que son BMR ?", answer: "Ingérer moins de calories que son BMR n'est généralement pas recommandé sans encadrement médical, car cela peut compromettre les fonctions physiologiques de base." }
    ],
    de: [
      { question: "Was bedeutet Grundumsatz (BMR)?", answer: "Der Grundumsatz (BMR) bezeichnet die Kalorienmenge, die der Körper bei völliger Ruhe zur Aufrechterhaltung lebenswichtiger Funktionen wie Atmung und Herzschlag benötigt." },
      { question: "Worin unterscheiden sich BMR und TDEE?", answer: "Der BMR beschreibt nur den Ruhebedarf, während der TDEE (Gesamtumsatz) zusätzlich die im Alltag und beim Sport verbrannten Kalorien berücksichtigt." },
      { question: "Welche Berechnungsformel wird genutzt?", answer: "Wir verwenden die renommierte Mifflin-St Jeor-Formel, die in der Ernährungswissenschaft als präzisester Standard für Erwachsene gilt." },
      { question: "Wie beeinflusst Muskelmasse den BMR?", answer: "Muskelgewebe verbrennt in Ruhe mehr Energie als Fettgewebe. Ein höherer Muskelanteil steigert somit den täglichen Grundumsatz." },
      { question: "Sollte man unter dem Grundumsatz essen?", answer: "Eine Kalorienzufuhr unterhalb des BMR sollte vermieden werden, da der Körper diese Energie für essenzielle Organfunktionen benötigt." }
    ],
    ko: [
      { question: "기초대사량(BMR)이란 무엇인가요?", answer: "기초대사량(BMR)은 심장 박동, 호흡 등 생명 유지를 위해 휴식 상태에서 인체가 소모하는 최소한의 일일 칼로리 양입니다." },
      { question: "BMR과 일일 총 소모 칼로리(TDEE)의 차이는 무엇인가요?", answer: "BMR은 순수 휴식 상태의 칼로리 소모량이며, TDEE는 BMR에 신체 활동 및 운동으로 소모되는 칼로리를 포함한 총량입니다." },
      { question: "본 BMR 계산기는 어떤 공식을 적용하나요?", answer: "임상 영양학 연구에서 가장 성인 BMR 추정에 정확하다고 평가받는 미플린-스지올(Mifflin-St Jeor) 공식을 적용합니다." },
      { question: "근육량이 기초대사량에 미치는 영향은 무엇인가요?", answer: "근육 조직은 지방 조직보다 휴식 시 더 많은 에너지를 소모합니다. 근육량이 많을수록 BMR 수치가 높게 유지됩니다." },
      { question: "BMR보다 적은 칼로리를 섭취해도 되나요?", answer: "전문 의료진의 지도 없이 BMR 미만으로 칼로리를 극단적으로 제한하면 장기 기능 유지를 위한 기본 에너지가 부족해질 수 있습니다." }
    ],
    hi: [
      { question: "बेसल मेटाबॉलिक रेट (BMR) क्या है?", answer: "BMR (Basal Metabolic Rate) वह न्यूनतम ऊर्जा है जो आपका शरीर आराम की स्थिति में सांस लेने, दिल धड़कने और अंग संचालन के लिए बर्न करता है।" },
      { question: "BMR और TDEE में क्या अंतर है?", answer: "BMR केवल आराम की स्थिति में कैलोरी बर्न दिखाता है, जबकि TDEE (Total Daily Energy Expenditure) में दिनभर की गतिविधियों और व्यायाम की कैलोरी शामिल होती है।" },
      { question: "यह BMR कैलकुलेटर किस सूत्र का उपयोग करता है?", answer: "हम मिफ्लिन-स्टे जियोर (Mifflin-St Jeor) समीकरण का उपयोग करते हैं, जिसे चिकित्सा अनुसंधान में BMR का अनुमान लगाने के लिए सबसे सटीक माना गया है।" },
      { question: "क्या मांसपेशियां BMR को बढ़ाती हैं?", answer: "हाँ, मांसपेशियों के ऊतक आराम के समय वसा की तुलना में अधिक कैलोरी बर्न करते हैं, जिससे आपका BMR बढ़ता है।" },
      { question: "क्या BMR से कम कैलोरी खानी चाहिए?", answer: "चिकित्सकीय परामर्श के बिना अपने BMR से कम कैलोरी का सेवन नहीं करना चाहिए, क्योंकि शरीर को बुनियादी क्रियाओं के लिए इस न्यूनतम ऊर्जा की आवश्यकता होती है।" }
    ]
  },
  'tdee-calculator': {
    es: [
      { question: "¿Qué es el Gasto Energético Diario Total (TDEE)?", answer: "El TDEE (Total Daily Energy Expenditure) es una estimación del número total de calorías que quemas cada día, combinando tu BMR con el nivel de actividad física." },
      { question: "¿Cómo se calcula el TDEE?", answer: "El TDEE se calcula multiplicando tu BMR por un factor de actividad (que varía de 1.2 para personas sedentarias a 1.9 para personas altamente activas)." },
      { question: "¿Cuántas calorías debo consumir para perder peso según mi TDEE?", answer: "Para una pérdida de peso sostenible, se suele aplicar un déficit calórico moderado de 300 a 500 calorías por debajo de tu TDEE." },
      { question: "¿Con qué frecuencia debo recalcular mi TDEE?", answer: "Es recomendable recalcular tu TDEE cada vez que experimentes cambios significativos en tu peso corporal (por ejemplo, 3-5 kg) o en tu nivel de ejercicio semanal." },
      { question: "¿Es el TDEE una cifra exacta o una estimación?", answer: "El TDEE es una estimación basada en ecuaciones validadas. La respuesta metabólica individual puede variar ligeramente en función de la genética y la composición corporal." }
    ],
    fr: [
      { question: "Qu'est-ce que la Dépense Énergétique Quotidienne Totale (TDEE) ?", answer: "Le TDEE représente l'estimation de toutes les calories que vous brûlez sur 24 heures, en combinant votre métabolisme de base et votre activité physique." },
      { question: "Comment le TDEE est-il calculé ?", answer: "Le TDEE s'obtient en multipliant votre BMR par un facteur multiplicateur d'activité (de 1,2 pour un profil sédentaire jusqu'à 1,9 pour un entraînement très intense)." },
      { question: "Comment utiliser le TDEE pour la perte de poids ?", answer: "Un déficit calorique modéré de 300 à 500 kcal en dessous de votre TDEE est généralement préconisé pour favoriser une perte de gras progressive." },
      { question: "Quand faut-il recalculer son TDEE ?", answer: "Il convient de revoir votre TDEE après une variation de poids notable (3 à 5 kg) ou lorsque votre rythme d'activité sportive évolue." },
      { question: "Le TDEE est-il exact à 100 % ?", answer: "Le TDEE offre une référence théorique très solide. Les variations individuelles d'assimilation et de métabolisme peuvent nécessiter de petits ajustements." }
    ],
    de: [
      { question: "Was bedeutet Gesamtenergieumsatz (TDEE)?", answer: "Der TDEE (Total Daily Energy Expenditure) schätzt die Gesamtzahl der Kalorien, die Sie täglich unter Berücksichtigung von Grundumsatz und Aktivität verbrennen." },
      { question: "Wie berechnet sich der TDEE?", answer: "Der TDEE ergibt sich aus der Multiplikation Ihres BMR mit einem Aktivitätsfaktor (von 1,2 bei sitzender Tätigkeit bis 1,9 bei sehr hoher sportlicher Belastung)." },
      { question: "Wie viel Kaloriendefizit ist zum Abnehmen ideal?", answer: "Ein moderates Defizit von etwa 300 bis 500 Kalorien unter dem TDEE gilt als nachhaltiger Ansatz zur Körperfettreduktion." },
      { question: "Wann sollte man den TDEE neu berechnen?", answer: "Sie sollten den TDEE anpassen, sobald Sie mehrere Kilogramm ab- oder zugenommen haben oder Ihr Trainingsvolumen verändert wird." },
      { question: "Ist der TDEE ein absoluter exakter Wert?", answer: "Der TDEE dient als wissenschaftlich fundierter Orientierungswert. Individuelle Stoffwechseleinflüsse können leichte Anpassungen erfordern." }
    ],
    ko: [
      { question: "일일 총 소모 칼로리(TDEE)란 무엇인가요?", answer: "TDEE(Total Daily Energy Expenditure)는 기초대사량(BMR)과 하루 신체 활동량을 합성하여 하루 동안 소모하는 총 칼로리 추정치입니다." },
      { question: "TDEE는 어떻게 산출되나요?", answer: "BMR 수치에 일상 활동 수준에 따른 계수(활동량이 적음 1.2 ~ 매우 활동적 1.9)를 곱하여 계산합니다." },
      { question: "체중 감량을 위해 TDEE를 어떻게 활용하나요?", answer: "TDEE 수치에서 하루 300~500 kcal 정도의 완만한 칼로리 적자를 유지하는 것이 건강한 체지방 감량에 효과적입니다." },
      { question: "TDEE 수치는 얼마나 자주 다시 계산해야 하나요?", answer: "체중이 3~5kg 이상 변동하거나 운동 루틴이 변경될 때마다 TDEE를 재계산하여 목표를 업데이트하는 것이 좋습니다." },
      { question: "TDEE 계산 결과는 완벽하게 정확한가요?", answer: "TDEE는 정교한 영양학 공식에 기반한 표준 참조값입니다. 개개인의 소화율이나 일상 활동차에 따라 미세한 조정을 할 수 있습니다." }
    ],
    hi: [
      { question: "कुल दैनिक ऊर्जा व्यय (TDEE) क्या है?", answer: "TDEE (Total Daily Energy Expenditure) उन कुल कैलोरी का अनुमान है जो आप दिनभर में BMR और शारीरिक गतिविधियों को मिलाकर बर्न करते हैं।" },
      { question: "TDEE की गणना कैसे की जाती है?", answer: "TDEE निकालने के लिए आपके BMR को आपकी गतिविधि स्तर के गुणांक (1.2 से 1.9 तक) से गुणा किया जाता है।" },
      { question: "वजन घटाने के लिए TDEE का उपयोग कैसे करें?", answer: "सुरक्षित और प्रभावी वजन घटाने के लिए अपने TDEE से 300 से 500 कैलोरी कम (Calorie Deficit) खाने का सुझाव दिया जाता है।" },
      { question: "TDEE को कितनी बार दोबारा जांचना चाहिए?", answer: "जब भी आपके वजन में 3-5 किग्रा का बदलाव हो या आपकी कसरत की दिनचर्या बदले, तब TDEE की पुनर्गणना करें।" },
      { question: "क्या TDEE का मान शत-प्रतिशत सटीक है?", answer: "TDEE एक बेहतरीन संदर्भात्मक अनुमान प्रदान करता है। व्यक्तिगत चयापचय के आधार पर वास्तविक आवश्यकता में थोड़ा अंतर हो सकता है।" }
    ]
  }
};

console.log('Unique FAQ dictionary created');
