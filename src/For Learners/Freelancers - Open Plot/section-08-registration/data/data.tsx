import type { Language } from "../../../../context/LanguageContext";

export const dataEn = {
  "title": "Ready to Build Your Open Plot Practice?",
  "subtitle": "Build Your Knowledge. Sharpen Your Skills. Grow Your Business.",
  "description": "Start your FARE journey with a free self-evaluation and discover where you can build your capabilities.",
  "buttons": {
    "primary": "Start Free Self-Evaluation",
    "secondary": "Register with FARE"
  },
  "footer": "Self-Evaluation · Learning Programs · Skill Practice · Opportunity Network · Business Growth"
};

export const dataTe = {
  "title": "Ready to Build Your Open Plot Practice?",
  "subtitle": "Build Your Knowledge. Sharpen Your Skills. Grow Your Business.",
  "description": "Start your FARE journey with a free self-evaluation and discover where you can build your capabilities.",
  "buttons": {
    "primary": "Start Free Self-Evaluation",
    "secondary": "Register with FARE"
  },
  "footer": "Self-Evaluation · Learning Programs · Skill Practice · Opportunity Network · Business Growth"
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
