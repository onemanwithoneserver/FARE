import type { Language } from "../../context/LanguageContext";

export const dataEn = {
  title: "Learner Audience",
  content: "Details for Learner Audience will go here."
};

export const dataTe = {
  title: "అభ్యాసకుల ప్రేక్షకులు",
  content: "అభ్యాసకుల ప్రేక్షకులు వివరాలు ఇక్కడ ఉంటాయి."
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
