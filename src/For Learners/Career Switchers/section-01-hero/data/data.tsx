import type { Language } from "../../../../context/LanguageContext";

export const dataEn = {
  "badge": "FARE for Career Switchers",
  "headline": "Bring Your Experience. Build Your Real Estate Career.",
  "description": "You already have professional experience and valuable skills. But moving into real estate requires more than transferring what you already know.\n\nYou need to understand the industry, identify where your skills fit, build real estate knowledge and develop the confidence to apply your experience in a new domain.\n\nFARE helps you understand the real estate industry, identify relevant career paths, build domain knowledge and prepare for real-world opportunities.",
  "buttons": {
    "primary": "Take Free Self-Evaluation",
    "secondary": "Talk to a Career Advisor"
  }
};

export const dataTe = {
  "badge": "కెరీర్ స్విచ్చర్స్ కోసం FARE",
  "headline": "మీ అనుభవాన్ని తీసుకురండి. మీ రియల్ ఎస్టేట్ కెరీర్‌ను నిర్మించుకోండి.",
  "description": "మీకు ఇప్పటికే వృత్తిపరమైన అనుభవం మరియు విలువైన నైపుణ్యాలు ఉన్నాయి. కానీ రియల్ ఎస్టేట్‌లోకి వెళ్లడానికి మీకు ఇప్పటికే తెలిసిన వాటిని బదిలీ చేయడం కంటే ఎక్కువ అవసరం.\n\nమీరు పరిశ్రమను అర్థం చేసుకోవాలి, మీ నైపుణ్యాలు ఎక్కడ సరిపోతాయో గుర్తించాలి, రియల్ ఎస్టేట్ పరిజ్ఞానాన్ని పెంపొందించుకోవాలి మరియు కొత్త డొమైన్‌లో మీ అనుభవాన్ని వర్తింపజేయడానికి విశ్వాసాన్ని పెంపొందించుకోవాలి.\n\nరియల్ ఎస్టేట్ పరిశ్రమను అర్థం చేసుకోవడానికి, సంబంధిత కెరీర్ మార్గాలను గుర్తించడానికి, డొమైన్ పరిజ్ఞానాన్ని పెంపొందించడానికి మరియు వాస్తవ ప్రపంచ అవకాశాల కోసం సిద్ధం చేయడానికి FARE మీకు సహాయపడుతుంది.",
  "buttons": {
    "primary": "ఉచిత స్వీయ-మూల్యాంకనం తీసుకోండి",
    "secondary": "కెరీర్ అడ్వైజర్‌తో మాట్లాడండి"
  }
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
