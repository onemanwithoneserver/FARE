import type { Language } from "../../context/LanguageContext";

export const dataEn = {
  title: "Media Showcase",
  content: "Details for Media Showcase will go here."
};

export const dataTe = {
  title: "మీడియా ప్రదర్శన",
  content: "మీడియా ప్రదర్శన వివరాలు ఇక్కడ ఉంటాయి."
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
