import type { Language } from "../../context/LanguageContext";

export const dataEn = {
  title: "Engagement Options",
  content: "Details for Engagement Options will go here."
};

export const dataTe = {
  title: "ఎంగేజ్‌మెంట్ ఎంపికలు",
  content: "ఎంగేజ్‌మెంట్ ఎంపికలు వివరాలు ఇక్కడ ఉంటాయి."
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
