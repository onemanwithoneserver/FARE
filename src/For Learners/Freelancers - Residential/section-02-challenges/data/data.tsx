import type { Language } from "../../../../context/LanguageContext";

export const dataEn = {
  "title": "Building a Residential Practice on Your Own Isn't Easy",
  "challenges": [
    {
      "title": "Working Alone limiting Your Capacity",
      "text": "Handling lead generation, follow-ups, customer calls, site visits and closures independently can make it difficult to stay productive and grow your business."
    },
    {
      "title": "Customers Trust Inventory Owners More",
      "text": "Customers may naturally place greater trust in builders, developers and direct inventory owners than independent channel partners."
    },
    {
      "title": "Your Knowledge Isn't Translating Into Authority",
      "text": "You may have years of market experience, but demonstrating your expertise and establishing authority with customers can still be challenging."
    },
    {
      "title": "Not Getting Enough Quality Leads",
      "text": "Generating a consistent flow of genuine, relevant residential prospects can be difficult when relying heavily on personal contacts and referrals."
    },
    {
      "title": "Customers Expect More Than Sales Knowledge",
      "text": "Residential customers have questions around finance, documentation, legal, construction, Vastu and other aspects of the property — requiring broader knowledge to advise them confidently."
    },
    {
      "title": "Limited Skills Beyond the Sales Function",
      "text": "Building a sustainable practice also requires capabilities in marketing, digital lead generation, CRM, customer experience, business development and other functions."
    },
    {
      "title": "Difficulty Building a Team",
      "text": "Moving from an individual practice to a team requires skills in hiring, delegation, training, performance management and team leadership."
    }
  ],
  "quotes": [
    "Selling residential property is only one part of building a successful independent practice.",
    "You need the knowledge, skills, systems and network to operate like a professional real estate business."
  ]
};

export const dataTe = {
  "title": "Building a Residential Practice on Your Own Isn't Easy",
  "challenges": [
    {
      "title": "Working Alone limiting Your Capacity",
      "text": "Handling lead generation, follow-ups, customer calls, site visits and closures independently can make it difficult to stay productive and grow your business."
    },
    {
      "title": "Customers Trust Inventory Owners More",
      "text": "Customers may naturally place greater trust in builders, developers and direct inventory owners than independent channel partners."
    },
    {
      "title": "Your Knowledge Isn't Translating Into Authority",
      "text": "You may have years of market experience, but demonstrating your expertise and establishing authority with customers can still be challenging."
    },
    {
      "title": "Not Getting Enough Quality Leads",
      "text": "Generating a consistent flow of genuine, relevant residential prospects can be difficult when relying heavily on personal contacts and referrals."
    },
    {
      "title": "Customers Expect More Than Sales Knowledge",
      "text": "Residential customers have questions around finance, documentation, legal, construction, Vastu and other aspects of the property — requiring broader knowledge to advise them confidently."
    },
    {
      "title": "Limited Skills Beyond the Sales Function",
      "text": "Building a sustainable practice also requires capabilities in marketing, digital lead generation, CRM, customer experience, business development and other functions."
    },
    {
      "title": "Difficulty Building a Team",
      "text": "Moving from an individual practice to a team requires skills in hiring, delegation, training, performance management and team leadership."
    }
  ],
  "quotes": [
    "Selling residential property is only one part of building a successful independent practice.",
    "You need the knowledge, skills, systems and network to operate like a professional real estate business."
  ]
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
