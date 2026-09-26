import type { Language } from "../../../context/LanguageContext";
import type { LucideIcon } from "lucide-react";
import { BookOpen, HelpCircle, MonitorPlay, Target, Users, Sparkles } from "lucide-react";

export const ICONS: LucideIcon[] = [HelpCircle, BookOpen, MonitorPlay, Target, Users, Sparkles];

export const GRADIENTS = [
  "from-[#38BDF8] to-[#0284C7]",
  "from-[#FBBF24] to-[#D97706]",
  "from-[#34D399] to-[#059669]",
  "from-[#F472B6] to-[#DB2777]",
  "from-[#A78BFA] to-[#7C3AED]",
  "from-[#F87171] to-[#DC2626]"
];

export const dataEn = {
  "title": "Learn. Practise. Grow.",
  "experiences": [
    {
      "title": "Test Your Knowledge",
      "label": "Quizzes",
      "text": "Open plot fundamentals, projects, locations, approvals, RERA, market knowledge and more."
    },
    {
      "title": "Learn at Your Own Pace",
      "label": "Courses",
      "text": "Structured programs covering open plots, sales, digital and professional skills."
    },
    {
      "title": "Learn With Trainers",
      "label": "Live Classes",
      "text": "Interactive sessions with real estate trainers and industry experts."
    },
    {
      "title": "Practise Real Situations",
      "label": "Mocks",
      "text": "Customer conversations, objections, negotiations, site visits, sales situations and more."
    },
    {
      "title": "Learn & Practise Together",
      "label": "Workshops",
      "text": "Focused learning experiences around specific skills and business challenges."
    },
    {
      "title": "Get Personal Guidance",
      "label": "Mentoring",
      "text": "Work with experienced trainers and mentors on specific skills, business goals and professional challenges."
    }
  ]
};

export const dataTe = {
  "title": "Learn. Practise. Grow.",
  "experiences": [
    {
      "title": "Test Your Knowledge",
      "label": "Quizzes",
      "text": "Open plot fundamentals, projects, locations, approvals, RERA, market knowledge and more."
    },
    {
      "title": "Learn at Your Own Pace",
      "label": "Courses",
      "text": "Structured programs covering open plots, sales, digital and professional skills."
    },
    {
      "title": "Learn With Trainers",
      "label": "Live Classes",
      "text": "Interactive sessions with real estate trainers and industry experts."
    },
    {
      "title": "Practise Real Situations",
      "label": "Mocks",
      "text": "Customer conversations, objections, negotiations, site visits, sales situations and more."
    },
    {
      "title": "Learn & Practise Together",
      "label": "Workshops",
      "text": "Focused learning experiences around specific skills and business challenges."
    },
    {
      "title": "Get Personal Guidance",
      "label": "Mentoring",
      "text": "Work with experienced trainers and mentors on specific skills, business goals and professional challenges."
    }
  ]
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
