import type { Language } from "../../../../context/LanguageContext";

export const dataEn = {
  "title": "Working Hard. But Is Your Career Moving Forward?",
  "challenges": [
    {
      "title": "Stuck in the Same Role",
      "text": "Putting in the years, but not seeing the career progression you expected."
    },
    {
      "title": "100% Effort. But Not the Desired Results",
      "text": "Working hard, but your performance isn't translating into the outcomes you want."
    },
    {
      "title": "Non-Sales Skills Are Holding You Back",
      "text": "Communication, negotiation, planning, customer handling, digital skills or other capabilities may be affecting your performance."
    },
    {
      "title": "Not Being Groomed for Leadership",
      "text": "You may be ready for more responsibility, but haven't had the opportunity to build the skills needed to lead teams."
    },
    {
      "title": "Unable to Leverage Your Experience",
      "text": "You have years of experience, but may not be converting that experience into better performance, broader responsibilities or career growth."
    },
    {
      "title": "Struggling to Adapt to Changing Market Demands",
      "text": "Customer expectations, technology and business practices are changing. Staying with the same skills can make it difficult to keep up."
    },
    {
      "title": "Still Relying on Traditional Selling Methods",
      "text": "Customers are changing and digital channels are becoming increasingly important, but your selling approach may not have evolved with them."
    }
  ],
  "closing": "Experience gives you a foundation. Continuous learning helps you build what's next.\nThat's where FARE comes in."
};

export const dataTe = {
  "title": "కష్టపడి పనిచేస్తున్నారు. అయితే మీ కెరీర్ ముందుకు సాగుతోందా?",
  "challenges": [
    {
      "title": "అదే పాత్రలో ఇమిడిపోయింది",
      "text": "సంవత్సరాలు గడిచినా, మీరు ఆశించిన కెరీర్ పురోగతిని చూడలేదు."
    },
    {
      "title": "100% ప్రయత్నం. కానీ ఆశించిన ఫలితాలు కాదు",
      "text": "కష్టపడి పని చేస్తున్నా, మీ పనితీరు మీరు కోరుకున్న ఫలితాలకు అనువదించడం లేదు."
    },
    {
      "title": "నాన్-సేల్స్ స్కిల్స్ మిమ్మల్ని వెనక్కి నెట్టివేస్తున్నాయి",
      "text": "కమ్యూనికేషన్, చర్చలు, ప్రణాళిక, కస్టమర్ హ్యాండ్లింగ్, డిజిటల్ నైపుణ్యాలు లేదా ఇతర సామర్థ్యాలు మీ పనితీరును ప్రభావితం చేయవచ్చు."
    },
    {
      "title": "నాయకత్వం కోసం గ్రూమ్ చేయబడలేదు",
      "text": "మీరు మరింత బాధ్యత కోసం సిద్ధంగా ఉండవచ్చు, కానీ జట్లను నడిపించడానికి అవసరమైన నైపుణ్యాలను పెంపొందించే అవకాశం లేదు."
    },
    {
      "title": "మీ అనుభవాన్ని ఉపయోగించుకోవడం సాధ్యం కాలేదు",
      "text": "మీకు సంవత్సరాల అనుభవం ఉంది, కానీ ఆ అనుభవాన్ని మెరుగైన పనితీరు, విస్తృత బాధ్యతలు లేదా కెరీర్ వృద్ధిగా మార్చుకోకపోవచ్చు."
    },
    {
      "title": "మారుతున్న మార్కెట్ డిమాండ్లకు అనుగుణంగా పోరాడుతున్నారు",
      "text": "కస్టమర్ అంచనాలు, సాంకేతికత మరియు వ్యాపార పద్ధతులు మారుతున్నాయి. అదే నైపుణ్యాలతో ఉండడం వల్ల కొనసాగించడం కష్టమవుతుంది."
    },
    {
      "title": "ఇప్పటికీ సంప్రదాయ విక్రయ పద్ధతులపైనే ఆధారపడుతున్నారు",
      "text": "కస్టమర్‌లు మారుతున్నారు మరియు డిజిటల్ ఛానెల్‌లు చాలా ముఖ్యమైనవి అవుతున్నాయి, కానీ మీ విక్రయ విధానం వారితో అభివృద్ధి చెంది ఉండకపోవచ్చు."
    }
  ],
  "closing": "అనుభవం మీకు పునాదిని ఇస్తుంది. నిరంతర అభ్యాసం తదుపరి దాన్ని రూపొందించడంలో మీకు సహాయపడుతుంది.\nఇక్కడే FARE వస్తుంది."
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
