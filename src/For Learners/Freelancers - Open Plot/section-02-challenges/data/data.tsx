import type { Language } from "../../../../context/LanguageContext";

export const dataEn = {
  "title": "Working Independently Isn't Easy",
  "challenges": [
    {
      "title": "Limited Open Plot Knowledge",
      "text": "Knowing a project is not enough. Customers expect you to understand locations, layouts, approvals, development, pricing, investment potential and more."
    },
    {
      "title": "Depending Too Much on Project Information",
      "text": "Project brochures and WhatsApp messages give you information — but not necessarily the knowledge and confidence to sell it effectively."
    },
    {
      "title": "Difficulty Generating Consistent Leads",
      "text": "Finding prospects consistently can become one of the biggest challenges when working independently."
    },
    {
      "title": "Struggling to Convert Leads",
      "text": "Getting a lead is one thing. Understanding the customer, presenting the right opportunity and moving them towards a site visit or decision is another."
    },
    {
      "title": "Traditional Selling Methods Are Becoming Less Effective",
      "text": "Customers are increasingly discovering properties through digital channels, video and social media."
    },
    {
      "title": "Limited Digital Presence",
      "text": "Without content, personal branding and digital lead-generation skills, it can be difficult to build visibility beyond your immediate network."
    },
    {
      "title": "No Structured Way to Improve",
      "text": "When working independently, there may be no manager or trainer regularly assessing your knowledge, sales skills and performance."
    },
    {
      "title": "Difficult to Build a Professional Network",
      "text": "Independent agents need relationships with developers, project teams, other channel partners, marketers and customers to keep opportunities flowing."
    }
  ]
};

export const dataTe = {
  "title": "Working Independently Isn't Easy",
  "challenges": [
    {
      "title": "Limited Open Plot Knowledge",
      "text": "Knowing a project is not enough. Customers expect you to understand locations, layouts, approvals, development, pricing, investment potential and more."
    },
    {
      "title": "Depending Too Much on Project Information",
      "text": "Project brochures and WhatsApp messages give you information — but not necessarily the knowledge and confidence to sell it effectively."
    },
    {
      "title": "Difficulty Generating Consistent Leads",
      "text": "Finding prospects consistently can become one of the biggest challenges when working independently."
    },
    {
      "title": "Struggling to Convert Leads",
      "text": "Getting a lead is one thing. Understanding the customer, presenting the right opportunity and moving them towards a site visit or decision is another."
    },
    {
      "title": "Traditional Selling Methods Are Becoming Less Effective",
      "text": "Customers are increasingly discovering properties through digital channels, video and social media."
    },
    {
      "title": "Limited Digital Presence",
      "text": "Without content, personal branding and digital lead-generation skills, it can be difficult to build visibility beyond your immediate network."
    },
    {
      "title": "No Structured Way to Improve",
      "text": "When working independently, there may be no manager or trainer regularly assessing your knowledge, sales skills and performance."
    },
    {
      "title": "Difficult to Build a Professional Network",
      "text": "Independent agents need relationships with developers, project teams, other channel partners, marketers and customers to keep opportunities flowing."
    }
  ]
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
