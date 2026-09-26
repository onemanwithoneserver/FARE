import type { Language } from "../../../context/LanguageContext";
import type { LucideIcon } from "lucide-react";
import { MessageCircle, GraduationCap } from "lucide-react";

export const ICONS: LucideIcon[] = [MessageCircle, GraduationCap];

export const GRADIENTS = [
  "from-[#22C55E] to-[#15803D]",
  "from-[#C99A2E] to-[#9A741E]"
];

export const dataEn = {
  "title": "Start Building Your Residential Career Today",
  "subtitle": "You don't have to wait to start improving your skills.",
  "items": [
    {
      "title": "Join Our WhatsApp Community",
      "text": "Stay connected with real estate learning, knowledge updates, tips and opportunities.",
      "cta": "Join WhatsApp Community"
    },
    {
      "title": "Enroll for a Free Course",
      "text": "Experience FARE with a free learning program designed for real estate professionals.",
      "cta": "Enroll for FREE Course"
    }
  ],
  "quote": "Start free. Keep learning. Build your practice."
};

export const dataTe = {
  "title": "Start Building Your Residential Career Today",
  "subtitle": "You don't have to wait to start improving your skills.",
  "items": [
    {
      "title": "Join Our WhatsApp Community",
      "text": "Stay connected with real estate learning, knowledge updates, tips and opportunities.",
      "cta": "Join WhatsApp Community"
    },
    {
      "title": "Enroll for a Free Course",
      "text": "Experience FARE with a free learning program designed for real estate professionals.",
      "cta": "Enroll for FREE Course"
    }
  ],
  "quote": "Start free. Keep learning. Build your practice."
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
