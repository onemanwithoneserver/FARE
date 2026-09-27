import type { Language } from "../../../context/LanguageContext";

export const dataEn = {
  "badge": "FARE for Students & Freshers",
  "headline": "Start Your Real Estate Career With Direction",
  "subheadline": "Real estate is one of the industries where young professionals can build both employment and independent income opportunities.",
  "description": "But knowing where to start, what opportunities exist and what skills to build isn't always easy.\n\nFARE helps you discover the possibilities, understand your strengths, build relevant skills and prepare for real-world opportunities.",
  "buttons": {
    "primary": "Take Free Self-Evaluation",
    "secondary": "Talk to a Career Advisor"
  }
};

export const dataTe = {
  "badge": "విద్యార్థులు & ఫ్రెషర్ల కోసం FARE",
  "headline": "మీ రియల్ ఎస్టేట్ కెరీర్‌ను సరైన దిశలో ప్రారంభించండి",
  "subheadline": "యువ నిపుణులు ఉపాధి మరియు స్వతంత్ర ఆదాయ అవకాశాలను నిర్మించుకోగల పరిశ్రమలలో రియల్ ఎస్టేట్ ఒకటి.",
  "description": "కానీ ఎక్కడ ప్రారంభించాలి, ఏ అవకాశాలు ఉన్నాయి మరియు ఏ నైపుణ్యాలను పెంపొందించుకోవాలో తెలుసుకోవడం ఎల్లప్పుడూ సులభం కాదు.\n\nఅవకాశాలను కనుగొనడంలో, మీ బలాలను అర్థం చేసుకోవడంలో, సంబంధిత నైపుణ్యాలను పెంపొందించుకోవడంలో మరియు వాస్తవ ప్రపంచ అవకాశాల కోసం సిద్ధం కావడంలో FARE మీకు సహాయపడుతుంది.",
  "buttons": {
    "primary": "ఉచిత స్వీయ-మూల్యాంకనం తీసుకోండి",
    "secondary": "కెరీర్ సలహాదారుతో మాట్లాడండి"
  }
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
