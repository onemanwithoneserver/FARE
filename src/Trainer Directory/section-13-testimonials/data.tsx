import type { Language } from "../../context/LanguageContext";

export const dataEn = {
  title: "Testimonials Section"
};

export const dataTe = {
  title: "Testimonials విభాగం"
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
