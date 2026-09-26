import type { Language } from "../../context/LanguageContext";

export const dataEn = {
  title: "PreDefinedPrograms Section"
};

export const dataTe = {
  title: "PreDefinedPrograms విభాగం"
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
