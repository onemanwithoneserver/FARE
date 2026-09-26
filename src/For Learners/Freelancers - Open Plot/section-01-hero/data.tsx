import type { Language } from "../../../context/LanguageContext";

export const dataEn = {
  "badge": "Freelancers_Open Plot",
  "headline": "Build Your Independent Career in Open Plots",
  "description": "Open plots offer opportunities to build an independent real estate practice — but success requires more than knowing a few projects.\n\nFARE helps you build open plot knowledge, sales skills, customer-handling capabilities and professional habits needed to build and grow your independent practice.",
  "buttons": {
    "primary": "Take Free Self-Evaluation",
    "secondary": "Explore FARE"
  }
};

export const dataTe = {
  "badge": "Freelancers_Open Plot",
  "headline": "Build Your Independent Career in Open Plots",
  "description": "Open plots offer opportunities to build an independent real estate practice — but success requires more than knowing a few projects.\n\nFARE helps you build open plot knowledge, sales skills, customer-handling capabilities and professional habits needed to build and grow your independent practice.",
  "buttons": {
    "primary": "Take Free Self-Evaluation",
    "secondary": "Explore FARE"
  }
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
