import type { Language } from "../../context/LanguageContext";

export const dataEn = {
  title: "Testimonials",
  content: "Details for Testimonials will go here."
};

export const dataTe = {
  title: "టెస్టిమోనియల్స్",
  content: "టెస్టిమోనియల్స్ వివరాలు ఇక్కడ ఉంటాయి."
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
