import type { Language } from "../../context/LanguageContext";

export const dataEn = {
  title: "IntroVideo Section"
};

export const dataTe = {
  title: "IntroVideo విభాగం"
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
