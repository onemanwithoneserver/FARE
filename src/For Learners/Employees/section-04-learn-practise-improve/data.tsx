import type { Language } from "../../../context/LanguageContext";
import { BookOpen, HelpCircle, MonitorPlay, Target, Users, Sparkles } from "lucide-react";

export const ICONS = [HelpCircle, BookOpen, MonitorPlay, Target, Users, Sparkles];

export const GRADIENTS = [
  "from-[#38BDF8] to-[#0284C7]", "from-[#FBBF24] to-[#D97706]", "from-[#34D399] to-[#059669]", 
  "from-[#F472B6] to-[#DB2777]", "from-[#A78BFA] to-[#7C3AED]", "from-[#F87171] to-[#DC2626]"
];

export const dataEn = {
  "title": "Choose the Learning Experience That Fits You",
  "experiences": [
    {
      "title": "Build & Test Your Knowledge",
      "label": "QUIZZES",
      "text": "Test your understanding of real estate, products, projects, markets, processes and industry fundamentals."
    },
    {
      "title": "Learn at Your Own Pace",
      "label": "COURSES",
      "text": "Structured programs covering real estate, sales, digital and professional skills."
    },
    {
      "title": "Learn With Trainers",
      "label": "LIVE CLASSES",
      "text": "Interactive sessions with trainers and industry experts."
    },
    {
      "title": "Practise Real Situations",
      "label": "MOCKS",
      "text": "Customer conversations, objections, negotiations, site visits, sales situations, leadership scenarios and more."
    },
    {
      "title": "Learn & Practise Together",
      "label": "WORKSHOPS",
      "text": "Focused learning experiences around specific skills and business challenges."
    },
    {
      "title": "Get Personal Guidance",
      "label": "MENTORING",
      "text": "Work with experienced trainers and mentors on specific skills, career goals and professional challenges."
    }
  ]
};

export const dataTe = {
  "title": "Choose the Learning Experience That Fits You",
  "experiences": [
    {
      "title": "Build & Test Your Knowledge",
      "label": "QUIZZES",
      "text": "Test your understanding of real estate, products, projects, markets, processes and industry fundamentals."
    },
    {
      "title": "Learn at Your Own Pace",
      "label": "COURSES",
      "text": "Structured programs covering real estate, sales, digital and professional skills."
    },
    {
      "title": "Learn With Trainers",
      "label": "LIVE CLASSES",
      "text": "Interactive sessions with trainers and industry experts."
    },
    {
      "title": "Practise Real Situations",
      "label": "MOCKS",
      "text": "Customer conversations, objections, negotiations, site visits, sales situations, leadership scenarios and more."
    },
    {
      "title": "Learn & Practise Together",
      "label": "WORKSHOPS",
      "text": "Focused learning experiences around specific skills and business challenges."
    },
    {
      "title": "Get Personal Guidance",
      "label": "MENTORING",
      "text": "Work with experienced trainers and mentors on specific skills, career goals and professional challenges."
    }
  ]
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
