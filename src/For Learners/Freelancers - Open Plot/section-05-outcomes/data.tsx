import type { Language } from "../../../context/LanguageContext";
import type { LucideIcon } from "lucide-react";
import { Compass, Move3d, Lightbulb, Workflow, Network, Briefcase } from "lucide-react";

export const ICONS: LucideIcon[] = [Compass, Move3d, Lightbulb, Workflow, Network, Briefcase];

export const GRADIENTS = [
  "from-[#FBBF24] to-[#D97706]",
  "from-[#38BDF8] to-[#0284C7]",
  "from-[#34D399] to-[#059669]",
  "from-[#F472B6] to-[#DB2777]",
  "from-[#A78BFA] to-[#7C3AED]",
  "from-[#F87171] to-[#DC2626]"
];

export const dataEn = {
  "title": "Outcomes You Can Achieve",
  "outcomes": [
    {
      "title": "Generate More Leads",
      "text": "Build practical skills to create and manage a more consistent flow of prospects."
    },
    {
      "title": "Build Your Personal Brand",
      "text": "Use content, video and digital channels to create visibility and credibility."
    },
    {
      "title": "Strengthen Your Market Knowledge",
      "text": "Build deeper knowledge of projects, locations and markets for better customer conversations."
    },
    {
      "title": "Improve Conversions",
      "text": "Develop better customer profiling, presentation, objection handling and follow-up skills."
    },
    {
      "title": "Build Your Professional Network",
      "text": "Connect with developers, project teams, channel partners and other real estate professionals."
    }
  ],
  "quote": "Build the skills, network and visibility to grow your independent practice."
};

export const dataTe = {
  "title": "Outcomes You Can Achieve",
  "outcomes": [
    {
      "title": "Generate More Leads",
      "text": "Build practical skills to create and manage a more consistent flow of prospects."
    },
    {
      "title": "Build Your Personal Brand",
      "text": "Use content, video and digital channels to create visibility and credibility."
    },
    {
      "title": "Strengthen Your Market Knowledge",
      "text": "Build deeper knowledge of projects, locations and markets for better customer conversations."
    },
    {
      "title": "Improve Conversions",
      "text": "Develop better customer profiling, presentation, objection handling and follow-up skills."
    },
    {
      "title": "Build Your Professional Network",
      "text": "Connect with developers, project teams, channel partners and other real estate professionals."
    }
  ],
  "quote": "Build the skills, network and visibility to grow your independent practice."
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
