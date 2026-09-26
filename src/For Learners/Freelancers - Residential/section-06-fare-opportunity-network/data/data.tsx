import type { Language } from "../../../../context/LanguageContext";

export const dataEn = {
  "title": "More Skills. More Connections. More Opportunities.",
  "badge": "FARE Opportunity Network",
  "subtitle": "FARE helps you discover opportunities across real estate and connect with companies looking for independent professionals.",
  "opportunities": [
    {
      "num": "01",
      "category": "Residential Opportunities",
      "title": "Connect with Builders & Developers",
      "text": "Residential projects, new launches and channel partner opportunities directly from participating builders and developers."
    },
    {
      "num": "02",
      "category": "Other Real Estate Opportunities",
      "title": "Go Beyond Residential",
      "text": "Open plots, commercial, leasing, pre-leased and other real estate sales opportunities."
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
      "category": "Residential Opportunities",
      "title": "Connect with Builders & Developers",
      "text": "Residential projects, new launches and channel partner opportunities directly from participating builders and developers."
    },
    {
      "num": "02",
      "category": "Other Real Estate Opportunities",
      "title": "Go Beyond Residential",
      "text": "Open plots, commercial, leasing, pre-leased and other real estate sales opportunities."
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
