import type { Language } from "../../../context/LanguageContext";
import type { LucideIcon } from "lucide-react";
import { Building, Layout, Target, Layers, Briefcase, Compass, Users } from "lucide-react";

export const ICONS: LucideIcon[] = [Building, Layout, Target, Layers, Briefcase, Compass, Users];

export const GRADIENTS = [
  "from-[#38BDF8] to-[#0284C7]",
  "from-[#34D399] to-[#059669]",
  "from-[#F472B6] to-[#DB2777]",
  "from-[#A78BFA] to-[#7C3AED]",
  "from-[#FBBF24] to-[#D97706]",
  "from-[#F87171] to-[#DC2626]",
  "from-[#60A5FA] to-[#2563EB]"
];

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
