import type { Language } from "../../../context/LanguageContext";
import { Briefcase, Users, UserPlus } from "lucide-react";

export const ICONS = [Briefcase, Users, UserPlus];

export const GRADIENTS = [
  "from-[#38BDF8] to-[#0284C7]", 
  "from-[#A78BFA] to-[#7C3AED]", 
  "from-[#F472B6] to-[#DB2777]"
];

export const dataEn = {
  "badge": "FARE Career Fastrack",
  "title": "Turn Learning Into Career Opportunities",
  "subtitle": "FARE Career Fastrack connects learning, mentoring and opportunities to help you take the next step in your career.",
  "items": [
    {
      "title": "PLACEMENT OPPORTUNITIES",
      "text": "Explore relevant job opportunities with participating real estate companies based on your experience, skills and career interests.",
      "cta": "Explore Placements"
    },
    {
      "title": "NETWORKING",
      "text": "Connect with real estate companies, professionals and industry experts to expand your professional network and discover new opportunities.",
      "cta": "Explore Networking"
    },
    {
      "title": "PERSONAL MENTORING",
      "text": "Get one-to-one guidance from experienced trainers and mentors to work on specific skills, career goals and professional challenges.",
      "cta": "Find a Mentor"
    }
  ]
};

export const dataTe = {
  "badge": "FARE Career Fastrack",
  "title": "Turn Learning Into Career Opportunities",
  "subtitle": "FARE Career Fastrack connects learning, mentoring and opportunities to help you take the next step in your career.",
  "items": [
    {
      "title": "PLACEMENT OPPORTUNITIES",
      "text": "Explore relevant job opportunities with participating real estate companies based on your experience, skills and career interests.",
      "cta": "Explore Placements"
    },
    {
      "title": "NETWORKING",
      "text": "Connect with real estate companies, professionals and industry experts to expand your professional network and discover new opportunities.",
      "cta": "Explore Networking"
    },
    {
      "title": "PERSONAL MENTORING",
      "text": "Get one-to-one guidance from experienced trainers and mentors to work on specific skills, career goals and professional challenges.",
      "cta": "Find a Mentor"
    }
  ]
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
