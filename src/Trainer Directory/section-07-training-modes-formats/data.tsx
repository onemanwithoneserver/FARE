import type { Language } from "../../context/LanguageContext";

export const dataEn = {
  title: "Training Modes & Formats",
  content: "Details for Training Modes & Formats will go here."
};

export const dataTe = {
  title: "శిక్షణ మోడ్‌లు & ఆకృతులు",
  content: "శిక్షణ మోడ్‌లు & ఆకృతులు వివరాలు ఇక్కడ ఉంటాయి."
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
