import type { Language } from "../../context/LanguageContext";

export const dataEn = {
  title: "RE Segment Expertise",
  content: "Details for RE Segment Expertise will go here."
};

export const dataTe = {
  title: "రియల్ ఎస్టేట్ విభాగం నైపుణ్యం",
  content: "రియల్ ఎస్టేట్ విభాగం నైపుణ్యం వివరాలు ఇక్కడ ఉంటాయి."
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
