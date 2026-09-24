import type { Language } from "../../context/LanguageContext";
export const dataEn = {
  overline: "Become a Trainer",
  title: "Want to Become an RE Trainer or Coach?",
  headline: "Are you an experienced Real Estate Professional?",
  description: "Explore Training as a Career Path and earn extra money",
  exploreHeading: "We can help you explore:",
  exploreItems: [
    "Your area of expertise",
    "Training opportunities",
    "Program design",
    "Content creation",
    "Mocks & mentoring",
    "Building your trainer profile",
    "Getting started with FARE",
  ],
  footerText:
    "Bring your real estate experience. Let's explore your trainer journey.",
  ctaButton: "Connect With FARE",
};
export const dataTe = {
  overline: "Become a Trainer",
  title: "మీరు RE ట్రైనర్ లేదా కోచ్ కావాలనుకుంటున్నారా?",
  headline: "Are you an experienced Real Estate Professional?",
  description: "Explore Training as a Career Path and earn extra money",
  exploreHeading: "వీటిని అన్వేషించడానికి మేము మీకు సహాయపడతాము:",
  exploreItems: [
    "మీ నైపుణ్యం ఉన్న ప్రాంతం",
    "శిక్షణా అవకాశాలు",
    "ప్రోగ్రామ్ డిజైన్",
    "కంటెంట్ క్రియేషన్",
    "మాక్స్ & మెంటరింగ్",
    "మీ ట్రైనర్ ప్రొఫైల్‌ను నిర్మించడం",
    "FARE తో ప్రారంభించడం",
  ],
  footerText:
    "మీ రియల్ ఎస్టేట్ అనుభవాన్ని తీసుకురండి. మీ ట్రైనర్ ప్రయాణాన్ని అన్వేషిద్దాం.",
  ctaButton: "FARE తో కనెక్ట్ అవ్వండి",
};
export const getData = (lang: Language = "en") =>
  lang === "te" ? dataTe : dataEn;
export const data = dataEn;
