import type { Language } from "../../../context/LanguageContext";
import { TrendingUp, Move3d, Computer, Award, Briefcase, PlusCircle } from "lucide-react";

export const ICONS = [TrendingUp, Move3d, Computer, Award, Briefcase, PlusCircle];

export const GRADIENTS = [
  "from-[#FBBF24] to-[#D97706]", "from-[#38BDF8] to-[#0284C7]", "from-[#34D399] to-[#059669]", 
  "from-[#F472B6] to-[#DB2777]", "from-[#A78BFA] to-[#7C3AED]", "from-[#F87171] to-[#DC2626]"
];

export const dataEn = {
  "title": "What Can FARE Help You Achieve?",
  "outcomes": [
    {
      "title": "PERFORM BETTER",
      "text": "Improve the skills that directly affect your current role and performance."
    },
    {
      "title": "BECOME MORE VERSATILE",
      "text": "Build capabilities beyond your core role and become equipped for changing business requirements."
    },
    {
      "title": "ADAPT TO THE NEW REAL ESTATE",
      "text": "Develop digital, technology and modern selling capabilities alongside traditional real estate skills."
    },
    {
      "title": "PREPARE FOR LEADERSHIP",
      "text": "Build the communication, people management, coaching and business skills needed for greater responsibility."
    },
    {
      "title": "LEVERAGE YOUR EXPERIENCE",
      "text": "Turn your years of experience into stronger capabilities, broader responsibilities and new possibilities."
    },
    {
      "title": "EXPLORE NEW OPPORTUNITIES",
      "text": "Use your skills, learning, network and experience to explore relevant career opportunities."
    }
  ],
  "closing": "Don't let your experience define where you stop. Use it to build where you go next."
};

export const dataTe = {
  "title": "What Can FARE Help You Achieve?",
  "outcomes": [
    {
      "title": "PERFORM BETTER",
      "text": "Improve the skills that directly affect your current role and performance."
    },
    {
      "title": "BECOME MORE VERSATILE",
      "text": "Build capabilities beyond your core role and become equipped for changing business requirements."
    },
    {
      "title": "ADAPT TO THE NEW REAL ESTATE",
      "text": "Develop digital, technology and modern selling capabilities alongside traditional real estate skills."
    },
    {
      "title": "PREPARE FOR LEADERSHIP",
      "text": "Build the communication, people management, coaching and business skills needed for greater responsibility."
    },
    {
      "title": "LEVERAGE YOUR EXPERIENCE",
      "text": "Turn your years of experience into stronger capabilities, broader responsibilities and new possibilities."
    },
    {
      "title": "EXPLORE NEW OPPORTUNITIES",
      "text": "Use your skills, learning, network and experience to explore relevant career opportunities."
    }
  ],
  "closing": "Don't let your experience define where you stop. Use it to build where you go next."
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
