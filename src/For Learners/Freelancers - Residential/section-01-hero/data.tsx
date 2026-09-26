import type { Language } from "../../../context/LanguageContext";

export const dataEn = {
  "badge": "Freelancers_Residential",
  "headline": "Build Your Independent Career in Residential Real Estate",
  "description": "Residential real estate offers multiple opportunities to build an independent practice — from apartments and villas to resale and new project sales.\n\nFARE helps you build residential market knowledge, sales skills, customer-handling capabilities and professional habits needed to build and grow your independent practice.",
  "buttons": {
    "primary": "Take Free Self-Evaluation",
    "secondary": "Explore FARE"
  }
};

export const dataTe = {
  "badge": "Freelancers_Residential",
  "headline": "Build Your Independent Career in Residential Real Estate",
  "description": "Residential real estate offers multiple opportunities to build an independent practice — from apartments and villas to resale and new project sales.\n\nFARE helps you build residential market knowledge, sales skills, customer-handling capabilities and professional habits needed to build and grow your independent practice.",
  "buttons": {
    "primary": "Take Free Self-Evaluation",
    "secondary": "Explore FARE"
  }
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
