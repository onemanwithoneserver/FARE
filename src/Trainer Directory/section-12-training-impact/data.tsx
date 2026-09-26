import type { Language } from "../../context/LanguageContext";

export const dataEn = {
  title: "Training Impact",
  content: "Details for Training Impact will go here."
};

export const dataTe = {
  title: "శిక్షణ ప్రభావం",
  content: "శిక్షణ ప్రభావం వివరాలు ఇక్కడ ఉంటాయి."
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
