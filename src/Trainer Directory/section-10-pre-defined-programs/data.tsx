import type { Language } from "../../context/LanguageContext";

export const dataEn = {
  title: "Pre-Defined Programs",
  content: "Details for Pre-Defined Programs will go here."
};

export const dataTe = {
  title: "ముందే నిర్వచించబడిన ప్రోగ్రామ్‌లు",
  content: "ముందే నిర్వచించబడిన ప్రోగ్రామ్‌లు వివరాలు ఇక్కడ ఉంటాయి."
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
