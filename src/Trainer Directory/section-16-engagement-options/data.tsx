import type { Language } from "../../context/LanguageContext";

export const dataEn = {
  title: "EngagementOptions Section"
};

export const dataTe = {
  title: "EngagementOptions విభాగం"
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
