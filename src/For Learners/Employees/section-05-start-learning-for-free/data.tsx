import type { Language } from "../../../context/LanguageContext";
import { MessageCircle, GraduationCap } from "lucide-react";

export const ICONS = [MessageCircle, GraduationCap];

export const GRADIENTS = [
  "from-[#10B981] to-[#047857]",
  "from-[#FBBF24] to-[#D97706]"
];

export const dataEn = {
  "title": "Start Your Learning Journey Today",
  "subtitle": "You don't have to wait for your next career move to start learning.",
  "items": [
    {
      "title": "JOIN OUR WHATSAPP COMMUNITY",
      "text": "Stay connected with real estate learning, knowledge updates, tips and opportunities.",
      "cta": "Join WhatsApp Community"
    },
    {
      "title": "ENROLL FOR A FREE COURSE",
      "text": "Experience FARE first-hand with a free course designed for real estate professionals.",
      "cta": "Enroll for FREE Course"
    }
  ],
  "closing": "Start free. Keep learning. Build what's next."
};

export const dataTe = {
  "title": "Start Your Learning Journey Today",
  "subtitle": "You don't have to wait for your next career move to start learning.",
  "items": [
    {
      "title": "JOIN OUR WHATSAPP COMMUNITY",
      "text": "Stay connected with real estate learning, knowledge updates, tips and opportunities.",
      "cta": "Join WhatsApp Community"
    },
    {
      "title": "ENROLL FOR A FREE COURSE",
      "text": "Experience FARE first-hand with a free course designed for real estate professionals.",
      "cta": "Enroll for FREE Course"
    }
  ],
  "closing": "Start free. Keep learning. Build what's next."
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
