import type { Language } from "../../context/LanguageContext";

export const dataEn = {
  title: "Training Methodology",
  content: "Details for Training Methodology will go here."
};

export const dataTe = {
  title: "శిక్షణ విధానం",
  content: "శిక్షణ విధానం వివరాలు ఇక్కడ ఉంటాయి."
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
