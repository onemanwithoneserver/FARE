import type { Language } from "../../context/LanguageContext";

export const dataEn = {
  title: "CaseStudies Section"
};

export const dataTe = {
  title: "CaseStudies విభాగం"
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
