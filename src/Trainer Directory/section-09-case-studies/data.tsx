import type { Language } from "../../context/LanguageContext";

export const dataEn = {
  title: "Case Studies",
  content: "Details for Case Studies will go here."
};

export const dataTe = {
  title: "కేస్ స్టడీస్",
  content: "కేస్ స్టడీస్ వివరాలు ఇక్కడ ఉంటాయి."
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
