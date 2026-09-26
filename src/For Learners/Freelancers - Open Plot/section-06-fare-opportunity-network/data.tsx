import type { Language } from "../../../context/LanguageContext";
import type { LucideIcon } from "lucide-react";
import { Briefcase, Building2, UserCircle } from "lucide-react";

export const ICONS: LucideIcon[] = [Briefcase, Building2, UserCircle];

export const GRADIENTS = [
  "from-[#38BDF8] to-[#0284C7]", 
  "from-[#A78BFA] to-[#7C3AED]", 
  "from-[#F472B6] to-[#DB2777]"
];

export const dataEn = {
  "title": "More Skills. More Connections. More Opportunities.",
  "badge": "FARE Opportunity Network",
  "subtitle": "FARE helps you discover opportunities across real estate and connect with companies looking for independent professionals.",
  "opportunities": [
    {
      "num": "01",
      "category": "Open Plot Opportunities",
      "title": "Connect with Builders & Developers",
      "text": "Open plot projects, launches and channel partner opportunities directly from participating builders and developers."
    },
    {
      "num": "02",
      "category": "Other Real Estate Opportunities",
      "title": "Go Beyond Open Plots",
      "text": "Residential, commercial, leasing, pre-leased and other real estate sales opportunities."
    },
    {
      "num": "03",
      "category": "Professional Opportunities",
      "title": "Build Beyond Sales",
      "text": "Freelance opportunities in digital marketing, lead generation, content, video, social media, CRM, research, technology and other real estate support functions."
    }
  ]
};

export const dataTe = {
  "title": "More Skills. More Connections. More Opportunities.",
  "badge": "FARE Opportunity Network",
  "subtitle": "FARE helps you discover opportunities across real estate and connect with companies looking for independent professionals.",
  "opportunities": [
    {
      "num": "01",
      "category": "Open Plot Opportunities",
      "title": "Connect with Builders & Developers",
      "text": "Open plot projects, launches and channel partner opportunities directly from participating builders and developers."
    },
    {
      "num": "02",
      "category": "Other Real Estate Opportunities",
      "title": "Go Beyond Open Plots",
      "text": "Residential, commercial, leasing, pre-leased and other real estate sales opportunities."
    },
    {
      "num": "03",
      "category": "Professional Opportunities",
      "title": "Build Beyond Sales",
      "text": "Freelance opportunities in digital marketing, lead generation, content, video, social media, CRM, research, technology and other real estate support functions."
    }
  ]
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
