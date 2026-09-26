import type { Language } from "../../context/LanguageContext";

export const dataEn = {
  trainerName: "Priya Sharma",
  professionalTitle: "RE Sales Trainer & Coach",
  isVerified: true,
  positioningStatement: "Helping real estate professionals master the art of negotiation, client communication, and high-ticket closures.",
  experience: {
    industry: "12+ Years",
    training: "8+ Years",
    professionalsTrained: "5,000+"
  },
  location: "Hyderabad, India",
  languages: ["English", "Telugu", "Hindi"],
  cta: "Request This Trainer"
};

export const dataTe = {
  trainerName: "ప్రియా శర్మ",
  professionalTitle: "రియల్ ఎస్టేట్ సేల్స్ ట్రైనర్ & కోచ్",
  isVerified: true,
  positioningStatement: "రియల్ ఎస్టేట్ నిపుణులకు బేరసారాలు, క్లయింట్ కమ్యూనికేషన్ మరియు హై-టికెట్ క్లోజర్‌ల కళలో నైపుణ్యం సాధించడంలో సహాయం చేయడం.",
  experience: {
    industry: "12+ సంవత్సరాలు",
    training: "8+ సంవత్సరాలు",
    professionalsTrained: "5,000+"
  },
  location: "హైదరాబాద్, ఇండియా",
  languages: ["ఇంగ్లీష్", "తెలుగు", "హిందీ"],
  cta: "ఈ ట్రైనర్‌ని అభ్యర్థించండి"
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
