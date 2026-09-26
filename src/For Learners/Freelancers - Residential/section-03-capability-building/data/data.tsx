import type { Language } from "../../../../context/LanguageContext";

export const dataEn = {
  "title": "Everything You Need to Build Your Residential Practice",
  "categories": [
    {
      "name": "Residential Market Knowledge",
      "skills": [
        "Project Knowledge",
        "Builder Knowledge",
        "Property Types",
        "Location Knowledge",
        "Market Trends",
        "Pricing",
        "Amenities",
        "Approvals",
        "Home Loans",
        "RERA"
      ]
    },
    {
      "name": "Location Mastery",
      "skills": [
        "Micro-Market Knowledge",
        "Location Mapping",
        "Connectivity",
        "Infrastructure",
        "Schools & Hospitals",
        "Lifestyle & Social Infrastructure",
        "Neighbourhood Comparison",
        "Upcoming Developments",
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
        "Requirement Understanding",
        "Budget Analysis",
        "Property Matching",
        "Investment Conversations",
        "Homebuyer Conversations",
        "Communication",
        "Trust Building",
        "Customer Experience"
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
        "Lead Management",
        "Follow-up Systems",
        "CRM",
        "Sales Tracking",
        "Planning",
        "Networking",
        "Relationship Management",
        "Referral Building"
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
  "title": "Everything You Need to Build Your Residential Practice",
  "categories": [
    {
      "name": "Residential Market Knowledge",
      "skills": [
        "Project Knowledge",
        "Builder Knowledge",
        "Property Types",
        "Location Knowledge",
        "Market Trends",
        "Pricing",
        "Amenities",
        "Approvals",
        "Home Loans",
        "RERA"
      ]
    },
    {
      "name": "Location Mastery",
      "skills": [
        "Micro-Market Knowledge",
        "Location Mapping",
        "Connectivity",
        "Infrastructure",
        "Schools & Hospitals",
        "Lifestyle & Social Infrastructure",
        "Neighbourhood Comparison",
        "Upcoming Developments",
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
        "Requirement Understanding",
        "Budget Analysis",
        "Property Matching",
        "Investment Conversations",
        "Homebuyer Conversations",
        "Communication",
        "Trust Building",
        "Customer Experience"
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
        "Lead Management",
        "Follow-up Systems",
        "CRM",
        "Sales Tracking",
        "Planning",
        "Networking",
        "Relationship Management",
        "Referral Building"
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
