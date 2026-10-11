import type { Language } from "../../../context/LanguageContext";

export interface Plan {
  title: string;
  price: string;
  daily: string;
  text: string;
  cta: string;
  bestValue: boolean;
  highlight?: string;
  highlightDesc?: string;
  isCommunity?: boolean;
  features?: string[];
  link?: string;
}

export const dataEn = {
  "title": "Unlimited Knowledge. For Less Than ₹7 a Day.",
  "subtitle": "Get unlimited access to the FARE Knowledge Bank with ready-made quizzes across your selected real estate specialization.",
  "plans": [
    {
      "title": "6 MONTHS",
      "price": "₹1,499",
      "daily": "₹8.33/day",
      "text": "Unlimited Knowledge Bank Access",
      "cta": "Get 6-Month Access",
      "bestValue": false,
      "features": [
        "Unlimited Access to 2,000+ Practice Questions",
        "All 15 Knowledge Specializations & 113 Topics",
        "Ready-Made Quizzes Across All RE Segments",
        "Instant Answer Explanations & Key Insights",
        "Self-Paced Learning with Revision History"
      ]
    },
    {
      "title": "1 YEAR",
      "price": "₹2,499",
      "daily": "₹6.85/day",
      "text": "Unlimited Knowledge Bank Access",
      "cta": "Get 1-Year Access",
      "bestValue": true,
      "highlight": "1 Year — Best Value",
      "highlightDesc": "That's just ₹6.85 per day for unlimited access to the Knowledge Bank.",
      "features": [
        "Full 12 Months of Unlimited Question Bank Access",
        "All 15 Knowledge Specializations & 113 Topics",
        "Continuous New Question Additions & RE Updates",
        "Unlimited Ready-Made Quizzes & Performance Tracking",
        "Priority Access to Newly Released Modules",
        "Best Value — Save over ₹500/year"
      ]
    },
    {
      "title": "COMMUNITY",
      "price": "FREE",
      "daily": "Free Forever",
      "text": "Join 5,000+ Real Estate Professionals on WhatsApp",
      "cta": "Join WhatsApp Community",
      "bestValue": false,
      "isCommunity": true,
      "highlight": "WhatsApp Community",
      "features": [
        "Daily RE Knowledge Drops & Quiz Alerts",
        "Peer Networking with 5,000+ RE Professionals",
        "Instant Updates on New Mock Simulations",
        "Direct Access to Community Mentor Discussions",
        "100% Free Forever"
      ],
      "link": "https://chat.whatsapp.com/"
    }
  ] as Plan[],
  "footer": "2,000+ Questions · 15 Knowledge Specializations · Multiple RE Segments · Unlimited Access",
  "cta": "Get 1-Year Access",
  "quote": "Learn more. One question at a time."
};

export const dataTe = {
  "title": "Unlimited Knowledge. For Less Than ₹7 a Day.",
  "subtitle": "Get unlimited access to the FARE Knowledge Bank with ready-made quizzes across your selected real estate specialization.",
  "plans": [
    {
      "title": "6 MONTHS",
      "price": "₹1,499",
      "daily": "₹8.33/day",
      "text": "Unlimited Knowledge Bank Access",
      "cta": "Get 6-Month Access",
      "bestValue": false,
      "features": [
        "Unlimited Access to 2,000+ Practice Questions",
        "All 15 Knowledge Specializations & 113 Topics",
        "Ready-Made Quizzes Across All RE Segments",
        "Instant Answer Explanations & Key Insights",
        "Self-Paced Learning with Revision History"
      ]
    },
    {
      "title": "1 YEAR",
      "price": "₹2,499",
      "daily": "₹6.85/day",
      "text": "Unlimited Knowledge Bank Access",
      "cta": "Get 1-Year Access",
      "bestValue": true,
      "highlight": "1 Year — Best Value",
      "highlightDesc": "That's just ₹6.85 per day for unlimited access to the Knowledge Bank.",
      "features": [
        "Full 12 Months of Unlimited Question Bank Access",
        "All 15 Knowledge Specializations & 113 Topics",
        "Continuous New Question Additions & RE Updates",
        "Unlimited Ready-Made Quizzes & Performance Tracking",
        "Priority Access to Newly Released Modules",
        "Best Value — Save over ₹500/year"
      ]
    },
    {
      "title": "COMMUNITY",
      "price": "FREE",
      "daily": "Free Forever",
      "text": "Join 5,000+ Real Estate Professionals on WhatsApp",
      "cta": "Join WhatsApp Community",
      "bestValue": false,
      "isCommunity": true,
      "highlight": "WhatsApp Community",
      "features": [
        "Daily RE Knowledge Drops & Quiz Alerts",
        "Peer Networking with 5,000+ RE Professionals",
        "Instant Updates on New Mock Simulations",
        "Direct Access to Community Mentor Discussions",
        "100% Free Forever"
      ],
      "link": "https://chat.whatsapp.com/"
    }
  ] as Plan[],
  "footer": "2,000+ Questions · 15 Knowledge Specializations · Multiple RE Segments · Unlimited Access",
  "cta": "Get 1-Year Access",
  "quote": "Learn more. One question at a time."
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
