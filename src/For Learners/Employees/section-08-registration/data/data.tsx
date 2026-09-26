import type { Language } from "../../../../context/LanguageContext";

export const dataEn = {
  "title": "Ready for Your Next Step?",
  "subtitle": "Know Where You Stand. Build What You're Missing. Move Forward.",
  "description": "Start your FARE journey with a free self-evaluation and discover where you can grow.",
  "buttons": {
    "primary": "Start Free Self-Evaluation",
    "secondary": "Register with FARE"
  },
  "footer": "Self-Evaluation · Learning Programs · Skill Practice · Mentoring · Career Opportunities"
};

export const dataTe = {
  "title": "Ready for Your Next Step?",
  "subtitle": "Know Where You Stand. Build What You're Missing. Move Forward.",
  "description": "Start your FARE journey with a free self-evaluation and discover where you can grow.",
  "buttons": {
    "primary": "Start Free Self-Evaluation",
    "secondary": "Register with FARE"
  },
  "footer": "Self-Evaluation · Learning Programs · Skill Practice · Mentoring · Career Opportunities"
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
