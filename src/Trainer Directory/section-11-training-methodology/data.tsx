import type { Language } from "../../context/LanguageContext";

export const dataEn = {
  title: "TrainingMethodology Section"
};

export const dataTe = {
  title: "TrainingMethodology విభాగం"
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
