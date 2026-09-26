import type { Language } from "../../context/LanguageContext";

export const dataEn = {
  title: "TrainingExpertise Section"
};

export const dataTe = {
  title: "TrainingExpertise విభాగం"
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
