import type { Language } from "../../context/LanguageContext";

export const dataEn = {
  title: "Corporate Request Form",
  content: "Details for Corporate Request Form will go here."
};

export const dataTe = {
  title: "కార్పొరేట్ అభ్యర్థన ఫారం",
  content: "కార్పొరేట్ అభ్యర్థన ఫారం వివరాలు ఇక్కడ ఉంటాయి."
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
