import type { Language } from "../../../context/LanguageContext";

export const dataEn = {
  "badge": "FARE Knowledge Bank",
  "headline": "Upgrade Your Real Estate Knowledge — The Simple Way: Quizzes.",
  "description": "No lengthy courses.\nNo complicated learning process.\n\nJust ready-made real estate quizzes designed to help you test what you know, discover knowledge gaps and keep improving.\n\nChoose your area. Take a quiz. Learn something new.",
  "buttons": {
    "primary": "Start Quizzing"
  },
  "supporting": "2,000+ Questions · 15 Knowledge Specializations · Multiple RE Segments · Unlimited Access"
};

export const dataTe = {
  "badge": "FARE Knowledge Bank",
  "headline": "Upgrade Your Real Estate Knowledge — The Simple Way: Quizzes.",
  "description": "No lengthy courses.\nNo complicated learning process.\n\nJust ready-made real estate quizzes designed to help you test what you know, discover knowledge gaps and keep improving.\n\nChoose your area. Take a quiz. Learn something new.",
  "buttons": {
    "primary": "Start Quizzing"
  },
  "supporting": "2,000+ Questions · 15 Knowledge Specializations · Multiple RE Segments · Unlimited Access"
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
