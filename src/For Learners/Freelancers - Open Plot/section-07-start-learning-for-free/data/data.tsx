import type { Language } from "../../../../context/LanguageContext";

export const dataEn = {
  "title": "Start Building Your Open Plot Career Today",
  "subtitle": "You don't have to wait to start improving your skills.",
  "items": [
    {
      "title": "Join Our WhatsApp Community",
      "text": "Stay connected with real estate learning, knowledge updates, tips and opportunities.",
      "cta": "Join WhatsApp Community"
    },
    {
      "title": "Enroll for a Free Course",
      "text": "Experience FARE with a free learning program designed for real estate professionals.",
      "cta": "Enroll for FREE Course"
    }
  ],
  "quote": "Start free. Keep learning. Build your practice."
};

export const dataTe = {
  "title": "Start Building Your Open Plot Career Today",
  "subtitle": "You don't have to wait to start improving your skills.",
  "items": [
    {
      "title": "Join Our WhatsApp Community",
      "text": "Stay connected with real estate learning, knowledge updates, tips and opportunities.",
      "cta": "Join WhatsApp Community"
    },
    {
      "title": "Enroll for a Free Course",
      "text": "Experience FARE with a free learning program designed for real estate professionals.",
      "cta": "Enroll for FREE Course"
    }
  ],
  "quote": "Start free. Keep learning. Build your practice."
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
