import type { Language } from "../../../../context/LanguageContext";

export const dataEn = {
  "title": "Turn Your Experience Into Real Estate Opportunities",
  "badge": "FARE Opportunity Network",
  "subtitle": "FARE helps you discover opportunities where your existing skills and newly developed real estate knowledge can come together.",
  "opportunities": [
    {
      "num": "01",
      "category": "Real Estate Career Opportunities",
      "title": "Find Where Your Skills Fit",
      "text": "Explore opportunities across sales, marketing, digital, business development, customer experience, operations, technology and other functions."
    },
    {
      "num": "02",
      "category": "Independent Opportunities",
      "title": "Build Your Own Practice",
      "text": "Explore freelance, consulting, advisory and project-based opportunities across real estate."
    },
    {
      "num": "03",
      "category": "Professional Opportunities",
      "title": "Use Your Existing Expertise",
      "text": "Find opportunities where your existing professional skills can be applied within the real estate ecosystem."
    }
  ]
};

export const dataTe = {
  "title": "మీ అనుభవాన్ని రియల్ ఎస్టేట్ అవకాశాలుగా మార్చుకోండి",
  "badge": "FARE అవకాశ నెట్‌వర్క్",
  "subtitle": "మీ ప్రస్తుత నైపుణ్యాలు మరియు కొత్తగా అభివృద్ధి చెందిన రియల్ ఎస్టేట్ పరిజ్ఞానం కలిసివచ్చే అవకాశాలను కనుగొనడంలో FARE మీకు సహాయపడుతుంది.",
  "opportunities": [
    {
      "num": "01",
      "category": "రియల్ ఎస్టేట్ కెరీర్ అవకాశాలు",
      "title": "మీ నైపుణ్యాలు ఎక్కడ సరిపోతాయో కనుగొనండి",
      "text": "విక్రయాలు, మార్కెటింగ్, డిజిటల్, వ్యాపార అభివృద్ధి, కస్టమర్ అనుభవం, కార్యకలాపాలు, సాంకేతికత మరియు ఇతర విధుల్లో అవకాశాలను అన్వేషించండి."
    },
    {
      "num": "02",
      "category": "స్వతంత్ర అవకాశాలు",
      "title": "మీ స్వంత అభ్యాసాన్ని రూపొందించండి",
      "text": "రియల్ ఎస్టేట్‌లో ఫ్రీలాన్స్, కన్సల్టింగ్, అడ్వైజరీ మరియు ప్రాజెక్ట్ ఆధారిత అవకాశాలను అన్వేషించండి."
    },
    {
      "num": "03",
      "category": "వృత్తిపరమైన అవకాశాలు",
      "title": "మీ ప్రస్తుత నైపుణ్యాన్ని ఉపయోగించండి",
      "text": "రియల్ ఎస్టేట్ పర్యావరణ వ్యవస్థలో మీ ప్రస్తుత వృత్తిపరమైన నైపుణ్యాలు వర్తించే అవకాశాలను కనుగొనండి."
    }
  ]
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
