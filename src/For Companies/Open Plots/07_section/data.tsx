import type { Language } from "../../../context/LanguageContext";
export const dataEn = {
  overline: "Get Started",
  title: "Final CTA",
  headline: "Make training work harder for your team.",
  subtitle:
    "Build a structured learning and development system for your Open Plot business with FARE.",
  buttons: {
    primary: "Register for a Demo",
    secondary: "How it works",
  },
};
export const dataTe = {
  overline: "Get Started",
  title: "Final CTA",
  headline: "మీ టీమ్ కోసం Trainingను మరింత ప్రభావవంతంగా మార్చండి.",
  subtitle:
    "FAREతో మీ Open Plot Business కోసం Structured Learning and Development Systemను నిర్మించండి.",
  buttons: {
    primary: "డెమో కోసం రిజిస్టర్ చేయండి",
    secondary: "How it works",
  },
};
export const getData = (lang: Language = "en") =>
  lang === "te" ? dataTe : dataEn;
export const data = dataEn;
