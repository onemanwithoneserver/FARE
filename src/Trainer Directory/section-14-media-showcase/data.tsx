import type { Language } from "../../context/LanguageContext";

export const dataEn = {
  title: "MediaShowcase Section"
};

export const dataTe = {
  title: "MediaShowcase విభాగం"
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
