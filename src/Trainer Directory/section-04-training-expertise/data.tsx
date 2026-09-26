import type { Language } from "../../context/LanguageContext";

export const dataEn = {
  title: "Training Expertise",
  content: "Details for Training Expertise will go here."
};

export const dataTe = {
  title: "శిక్షణ నైపుణ్యం",
  content: "శిక్షణ నైపుణ్యం వివరాలు ఇక్కడ ఉంటాయి."
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
