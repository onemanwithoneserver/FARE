import type { Language } from "../../context/LanguageContext";

export const dataEn = {
  title: "Meet Your Trainer",
  subtitle: "Get to know Priya’s training style, philosophy, and what you can expect from her sessions.",
  videoUrl: "FARE_Video.mp4",
  posterUrl: "re_trainers_hero.jpg",
  duration: "1:45"
};

export const dataTe = {
  title: "మీ ట్రైనర్‌ని కలవండి",
  subtitle: "ప్రియా శిక్షణ శైలి, తత్వశాస్త్రం మరియు ఆమె సెషన్‌ల నుండి మీరు ఆశించే విషయాలను తెలుసుకోండి.",
  videoUrl: "FARE_Video.mp4",
  posterUrl: "re_trainers_hero.jpg",
  duration: "1:45"
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
