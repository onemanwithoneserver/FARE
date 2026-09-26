import type { Language } from "../../context/LanguageContext";

export const dataEn = {
  title: "Credentials & Verification",
  content: "Details for Credentials & Verification will go here."
};

export const dataTe = {
  title: "అర్హతలు & ధృవీకరణ",
  content: "అర్హతలు & ధృవీకరణ వివరాలు ఇక్కడ ఉంటాయి."
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
