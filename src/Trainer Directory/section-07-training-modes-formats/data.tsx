import type { Language } from "../../context/LanguageContext";

export const dataEn = {
  title: "TrainingModesFormats Section"
};

export const dataTe = {
  title: "TrainingModesFormats విభాగం"
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
