import type { Language } from "../../../context/LanguageContext";

export const dataEn = {
  "title": "Start Your Real Estate Journey Today",
  "subtitle": "The real estate industry is growing. Opportunities are everywhere. The only thing missing is your preparation.\n\nCreate your free FARE account, explore the learning ecosystem and take your first step toward a career in real estate.",
  "buttons": {
    "primary": "Create Free Account",
    "secondary": "Talk to Us"
  }
};

export const dataTe = {
  "title": "ఈరోజే మీ రియల్ ఎస్టేట్ ప్రయాణాన్ని ప్రారంభించండి",
  "subtitle": "రియల్ ఎస్టేట్ పరిశ్రమ అభివృద్ధి చెందుతోంది. అవకాశాలు ప్రతిచోటా ఉన్నాయి. మీ ప్రిపరేషన్ మాత్రమే లోపించింది.\n\nమీ ఉచిత FARE ఖాతాను సృష్టించండి, అభ్యాస పర్యావరణ వ్యవస్థను అన్వేషించండి మరియు రియల్ ఎస్టేట్‌లో కెరీర్ వైపు మీ మొదటి అడుగు వేయండి.",
  "buttons": {
    "primary": "ఉచిత ఖాతాను సృష్టించండి",
    "secondary": "మాతో మాట్లాడండి"
  }
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
