import type { Language } from "../../context/LanguageContext";

export const dataEn = {
  title: "Organisations Trained",
  content: "Details for Organisations Trained will go here."
};

export const dataTe = {
  title: "శిక్షణ పొందిన సంస్థలు",
  content: "శిక్షణ పొందిన సంస్థలు వివరాలు ఇక్కడ ఉంటాయి."
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
