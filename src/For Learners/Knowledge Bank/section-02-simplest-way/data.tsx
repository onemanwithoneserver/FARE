import type { Language } from "../../../context/LanguageContext";
import { CheckCircle, Search, Lightbulb, RotateCw, Clock } from "lucide-react";

export const ICONS = [CheckCircle, Search, Lightbulb, RotateCw, Clock];

export const GRADIENTS = [
  "from-[#38BDF8] to-[#0284C7]", // Blue
  "from-[#34D399] to-[#059669]", // Emerald
  "from-[#F472B6] to-[#DB2777]", // Pink
  "from-[#A78BFA] to-[#7C3AED]", // Violet
  "from-[#FBBF24] to-[#D97706]", // Amber
];

export const dataEn = {
  "title": "Learn Real Estate. One Quiz at a Time.",
  "badge": "The Simplest Way to Keep Learning",
  "intro": "You don't always need another course to improve your knowledge.\nSometimes, you just need the right question.\n\nFARE Knowledge Bank gives you ready-made quizzes across 15 real estate knowledge specializations, helping you learn while testing yourself.",
  "features": [
    {
      "title": "Test What You Know",
      "text": "Answer questions covering real estate concepts, markets, properties, projects, finance, sales and more."
    },
    {
      "title": "Discover What You Don't Know",
      "text": "Identify the areas where your knowledge needs improvement."
    },
    {
      "title": "Learn As You Go",
      "text": "Every question gives you an opportunity to learn something new."
    },
    {
      "title": "Keep Practising",
      "text": "Come back anytime and continue testing yourself across different knowledge areas."
    },
    {
      "title": "Learn Without Blocking Your Schedule",
      "text": "Take a quick quiz whenever you have a few minutes — before work, between meetings or while travelling."
    }
  ],
  "quote": "Don't find time to study. Find time to quiz."
};

export const dataTe = {
  "title": "Learn Real Estate. One Quiz at a Time.",
  "badge": "The Simplest Way to Keep Learning",
  "intro": "You don't always need another course to improve your knowledge.\nSometimes, you just need the right question.\n\nFARE Knowledge Bank gives you ready-made quizzes across 15 real estate knowledge specializations, helping you learn while testing yourself.",
  "features": [
    {
      "title": "Test What You Know",
      "text": "Answer questions covering real estate concepts, markets, properties, projects, finance, sales and more."
    },
    {
      "title": "Discover What You Don't Know",
      "text": "Identify the areas where your knowledge needs improvement."
    },
    {
      "title": "Learn As You Go",
      "text": "Every question gives you an opportunity to learn something new."
    },
    {
      "title": "Keep Practising",
      "text": "Come back anytime and continue testing yourself across different knowledge areas."
    },
    {
      "title": "Learn Without Blocking Your Schedule",
      "text": "Take a quick quiz whenever you have a few minutes — before work, between meetings or while travelling."
    }
  ],
  "quote": "Don't find time to study. Find time to quiz."
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
