import type { Language } from "../../../context/LanguageContext";

export const dataEn = {
  "badge": "FARE for Employees",
  "headline": "Move Beyond Your Current Role",
  "subheadline": "You have the experience. You put in the effort.",
  "description": "But career growth often requires new skills, new approaches and continuous learning.\n\nFARE helps real estate employees identify their skill gaps, build relevant capabilities, practise real-world situations and prepare for the next stage of their career.",
  "buttons": {
    "primary": "Take Free Self-Evaluation",
    "secondary": "Explore FARE"
  }
};

export const dataTe = {
  "badge": "ఉద్యోగులకు FARE",
  "headline": "మీ ప్రస్తుత పాత్రను దాటి వెళ్లండి",
  "subheadline": "మీకు అనుభవం ఉంది. మీరు కృషి చేసారు.",
  "description": "కానీ కెరీర్ వృద్ధికి తరచుగా కొత్త నైపుణ్యాలు, కొత్త విధానాలు మరియు నిరంతర అభ్యాసం అవసరం.\n\nరియల్ ఎస్టేట్ ఉద్యోగులు తమ నైపుణ్యాల అంతరాలను గుర్తించడంలో, సంబంధిత సామర్థ్యాలను పెంపొందించుకోవడంలో, వాస్తవ ప్రపంచ పరిస్థితులను ఆచరించడంలో మరియు వారి కెరీర్ యొక్క తదుపరి దశకు సిద్ధం కావడానికి FARE సహాయపడుతుంది.",
  "buttons": {
    "primary": "ఉచిత స్వీయ-మూల్యాంకనం తీసుకోండి",
    "secondary": "FAREని అన్వేషించండి"
  }
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
