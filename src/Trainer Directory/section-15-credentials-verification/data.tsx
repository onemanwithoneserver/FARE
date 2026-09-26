import type { Language } from "../../context/LanguageContext";

export const dataEn = {
  title: "CredentialsVerification Section"
};

export const dataTe = {
  title: "CredentialsVerification విభాగం"
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
