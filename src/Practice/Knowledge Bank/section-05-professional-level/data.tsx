import type { Language } from "../../../context/LanguageContext";
import { GraduationCap, Briefcase, Award, TrendingUp, Crown, Users, Rocket } from "lucide-react";

export const ICONS = [GraduationCap, Briefcase, Award, TrendingUp, Crown, Users, Rocket];

export const GRADIENTS = [
  "from-[#38BDF8] to-[#0284C7]", "from-[#34D399] to-[#059669]", "from-[#F472B6] to-[#DB2777]", 
  "from-[#A78BFA] to-[#7C3AED]", "from-[#FBBF24] to-[#D97706]", "from-[#F87171] to-[#DC2626]",
  "from-[#60A5FA] to-[#2563EB]"
];

export const dataEn = {
  "badge": "For Every Professional Level",
  "title": "Knowledge That Grows With Your Career",
  "levels": [
    {
      "title": "Students & Freshers",
      "text": "Build your real estate foundation.",
      "flow": ["Learn Basics", "Practise Quizzes", "Build Profile", "Connect", "Get Hired"]
    },
    {
      "title": "Entry-Level Professionals",
      "text": "Strengthen your industry and functional knowledge.",
      "flow": ["Upskill", "Practise", "Perform", "Get Promoted"]
    },
    {
      "title": "Experienced Professionals",
      "text": "Test and refresh your existing knowledge.",
      "flow": ["Refresh", "Test", "Track Market Trends", "Stay Relevant"]
    },
    {
      "title": "Managers",
      "text": "Expand your functional, business and leadership knowledge.",
      "flow": ["Learn", "Assess Team", "Close Gaps", "Coach", "Drive Results"]
    },
    {
      "title": "Leaders",
      "text": "Stay updated across market, business and strategic areas.",
      "flow": ["Scan Market", "Strategize", "Align Teams", "Lead Growth"]
    },
    {
      "title": "Freelancers & Channel Partners",
      "text": "Build stronger market, product, customer and sales knowledge.",
      "flow": ["Learn Products", "Know Customers", "Pitch", "Close Deals"]
    },
    {
      "title": "Career Switchers",
      "text": "Understand the industry and build the domain knowledge needed to enter real estate.",
      "flow": ["Explore Industry", "Learn Domain", "Practise", "Switch Roles", "Succeed"]
    }
  ]
};

export const dataTe = {
  "badge": "For Every Professional Level",
  "title": "Knowledge That Grows With Your Career",
  "levels": [
    {
      "title": "Students & Freshers",
      "text": "Build your real estate foundation.",
      "flow": ["Learn Basics", "Practise Quizzes", "Build Profile", "Connect", "Get Hired"]
    },
    {
      "title": "Entry-Level Professionals",
      "text": "Strengthen your industry and functional knowledge.",
      "flow": ["Upskill", "Practise", "Perform", "Get Promoted"]
    },
    {
      "title": "Experienced Professionals",
      "text": "Test and refresh your existing knowledge.",
      "flow": ["Refresh", "Test", "Track Market Trends", "Stay Relevant"]
    },
    {
      "title": "Managers",
      "text": "Expand your functional, business and leadership knowledge.",
      "flow": ["Learn", "Assess Team", "Close Gaps", "Coach", "Drive Results"]
    },
    {
      "title": "Leaders",
      "text": "Stay updated across market, business and strategic areas.",
      "flow": ["Scan Market", "Strategize", "Align Teams", "Lead Growth"]
    },
    {
      "title": "Freelancers & Channel Partners",
      "text": "Build stronger market, product, customer and sales knowledge.",
      "flow": ["Learn Products", "Know Customers", "Pitch", "Close Deals"]
    },
    {
      "title": "Career Switchers",
      "text": "Understand the industry and build the domain knowledge needed to enter real estate.",
      "flow": ["Explore Industry", "Learn Domain", "Practise", "Switch Roles", "Succeed"]
    }
  ]
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
