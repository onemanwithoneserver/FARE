import type { Language } from "../../../../context/LanguageContext";

export const dataEn = {
  "title": "Outcomes You Can Achieve",
  "outcomes": [
    {
      "title": "Generate More Leads",
      "text": "Build practical skills to create and manage a more consistent flow of residential prospects."
    },
    {
      "title": "Build Your Personal Brand",
      "text": "Use content, video and digital channels to create visibility and credibility."
    },
    {
      "title": "Strengthen Your Market Knowledge",
      "text": "Build deeper knowledge of projects, builders, locations and residential markets."
    },
    {
      "title": "Improve Conversions",
      "text": "Develop better customer profiling, property matching, presentation, objection handling and follow-up skills."
    },
    {
      "title": "Build Your Professional Network",
      "text": "Connect with builders, developers, project teams, channel partners and other real estate professionals."
    }
  ],
  "quote": "Build the skills, network and visibility to grow your independent practice."
};

export const dataTe = {
  "title": "Outcomes You Can Achieve",
  "outcomes": [
    {
      "title": "Generate More Leads",
      "text": "Build practical skills to create and manage a more consistent flow of residential prospects."
    },
    {
      "title": "Build Your Personal Brand",
      "text": "Use content, video and digital channels to create visibility and credibility."
    },
    {
      "title": "Strengthen Your Market Knowledge",
      "text": "Build deeper knowledge of projects, builders, locations and residential markets."
    },
    {
      "title": "Improve Conversions",
      "text": "Develop better customer profiling, property matching, presentation, objection handling and follow-up skills."
    },
    {
      "title": "Build Your Professional Network",
      "text": "Connect with builders, developers, project teams, channel partners and other real estate professionals."
    }
  ],
  "quote": "Build the skills, network and visibility to grow your independent practice."
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
