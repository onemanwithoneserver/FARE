import type { Language } from "../../../../context/LanguageContext";

export const dataEn = {
  "title": "Everything You Need to Build Your Open Plot Practice",
  "categories": [
    {
      "name": "Open Plot Knowledge",
      "skills": [
        "Project Knowledge",
        "Layout Understanding",
        "Approvals",
        "RERA",
        "Development Status",
        "Pricing",
        "Payment Plans",
        "Investment Factors"
      ]
    },
    {
      "name": "Location Mastery",
      "skills": [
        "Micro-Market Knowledge",
        "Location Mapping",
        "Connectivity",
        "Infrastructure",
        "Growth Drivers",
        "Surrounding Developments",
        "Comparable Projects",
        "Future Development",
        "Location-Based Customer Pitching"
      ]
    },
    {
      "name": "Sales Skills",
      "skills": [
        "Lead Generation",
        "Lead Handling",
        "Customer Profiling",
        "Need Analysis",
        "Property Presentation",
        "Site Visit",
        "Objection Handling",
        "Negotiation",
        "Follow-up",
        "Closing"
      ]
    },
    {
      "name": "Customer & Advisory Skills",
      "skills": [
        "Customer Understanding",
        "Investment Conversations",
        "Risk Awareness",
        "Requirement Matching",
        "Communication",
        "Trust Building"
      ]
    },
    {
      "name": "Digital & Personal Branding",
      "skills": [
        "Content Creation",
        "Video Selling",
        "Social Media",
        "Digital Marketing",
        "Lead Generation",
        "Personal Branding",
        "WhatsApp Marketing"
      ]
    },
    {
      "name": "Business Skills",
      "skills": [
        "Planning",
        "Lead Management",
        "Follow-up Systems",
        "CRM",
        "Sales Tracking",
        "Networking",
        "Relationship Management"
      ]
    },
    {
      "name": "Leadership & Team Skills",
      "skills": [
        "Team Building",
        "Team Management",
        "Goal Setting",
        "Performance Tracking",
        "Coaching & Mentoring",
        "Delegation",
        "Conflict Management",
        "Leadership Communication",
        "Team Motivation"
      ]
    }
  ]
};

export const dataTe = {
  "title": "Everything You Need to Build Your Open Plot Practice",
  "categories": [
    {
      "name": "Open Plot Knowledge",
      "skills": [
        "Project Knowledge",
        "Layout Understanding",
        "Approvals",
        "RERA",
        "Development Status",
        "Pricing",
        "Payment Plans",
        "Investment Factors"
      ]
    },
    {
      "name": "Location Mastery",
      "skills": [
        "Micro-Market Knowledge",
        "Location Mapping",
        "Connectivity",
        "Infrastructure",
        "Growth Drivers",
        "Surrounding Developments",
        "Comparable Projects",
        "Future Development",
        "Location-Based Customer Pitching"
      ]
    },
    {
      "name": "Sales Skills",
      "skills": [
        "Lead Generation",
        "Lead Handling",
        "Customer Profiling",
        "Need Analysis",
        "Property Presentation",
        "Site Visit",
        "Objection Handling",
        "Negotiation",
        "Follow-up",
        "Closing"
      ]
    },
    {
      "name": "Customer & Advisory Skills",
      "skills": [
        "Customer Understanding",
        "Investment Conversations",
        "Risk Awareness",
        "Requirement Matching",
        "Communication",
        "Trust Building"
      ]
    },
    {
      "name": "Digital & Personal Branding",
      "skills": [
        "Content Creation",
        "Video Selling",
        "Social Media",
        "Digital Marketing",
        "Lead Generation",
        "Personal Branding",
        "WhatsApp Marketing"
      ]
    },
    {
      "name": "Business Skills",
      "skills": [
        "Planning",
        "Lead Management",
        "Follow-up Systems",
        "CRM",
        "Sales Tracking",
        "Networking",
        "Relationship Management"
      ]
    },
    {
      "name": "Leadership & Team Skills",
      "skills": [
        "Team Building",
        "Team Management",
        "Goal Setting",
        "Performance Tracking",
        "Coaching & Mentoring",
        "Delegation",
        "Conflict Management",
        "Leadership Communication",
        "Team Motivation"
      ]
    }
  ]
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
