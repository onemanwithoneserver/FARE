import type { Language } from '../../context/LanguageContext';

export const dataEn = {
    title: "Section 5 — What Skills Can You Launch?",
    headline: "From Traditional Real Estate Skills to New-Age Digital Capabilities",
    subtitle: "FARE gives trainers the flexibility to create programs across the complete real estate skill ecosystem.",
    categories: [
        {
            title: "Sales Skills",
            color: "#34D399",
            icon: "TrendingUp",
            subcategories: [
                {
                    label: "Traditional RE",
                    skills: ["Lead Handling", "Prospecting", "Customer Profiling", "Need Analysis", "Property Presentation", "Site Visit Skills", "Objection Handling", "Negotiation", "Follow-up", "Closing", "Referral Generation"]
                },
                {
                    label: "Advanced",
                    skills: ["Consultative Selling", "Solution Selling", "Value Selling", "Sales Planning", "Sales Forecasting", "Key Account Management"]
                }
            ]
        },
        {
            title: "Communication",
            color: "#60A5FA",
            icon: "MessageCircle",
            subcategories: [
                {
                    label: "",
                    skills: ["Verbal Communication", "Business Communication", "Presentation Skills", "Storytelling", "Active Listening", "Questioning Skills", "Negotiation Communication", "Email & Written Communication", "Public Speaking"]
                }
            ]
        },
        {
            title: "Digital & Technology",
            color: "#8B5CF6",
            icon: "Monitor",
            subcategories: [
                {
                    label: "New-Age Digital RE",
                    skills: ["Digital Selling", "Social Selling", "Digital Marketing", "Performance Marketing", "Content Marketing", "Personal Branding", "Lead Generation", "Marketing Automation", "CRM", "AI for Real Estate", "PropTech", "Data & Analytics", "Video Selling", "WhatsApp & Messaging"]
                }
            ]
        },
        {
            title: "Leadership & Management",
            color: "#C99A2E",
            icon: "Shield",
            subcategories: [
                {
                    label: "",
                    skills: ["Team Management", "Leadership", "Coaching", "Performance Management", "Goal Setting", "Sales Management", "Conflict Management", "Delegation", "Decision Making", "Team Building", "Manager Development", "Strategic Thinking"]
                }
            ]
        },
        {
            title: "Customer Experience",
            color: "#F472B6",
            icon: "Heart",
            subcategories: [
                {
                    label: "",
                    skills: ["Customer Journey", "Customer Engagement", "Customer Communication", "Experience Management", "Complaint Handling", "Relationship Management", "Retention", "Referral & Loyalty"]
                }
            ]
        },
        {
            title: "Marketing",
            color: "#F59E0B",
            icon: "Megaphone",
            subcategories: [
                {
                    label: "",
                    skills: ["Real Estate Marketing", "Project Marketing", "Brand Building", "Digital Marketing", "Lead Generation", "Campaign Planning", "Content Strategy", "Social Media", "Performance Marketing", "Personal Branding", "Channel Marketing"]
                }
            ]
        },
        {
            title: "Product & Project Knowledge",
            color: "#06B6D4",
            icon: "Database",
            subcategories: [
                {
                    label: "",
                    skills: ["Project Knowledge", "Product Knowledge", "Location Knowledge", "Market Knowledge", "Property Types", "Specifications", "Amenities", "Pricing", "Payment Plans", "Approvals", "Legal Awareness", "Competitive Analysis", "Project Positioning"]
                }
            ]
        },
        {
            title: "Functional Skills",
            color: "#EF4444",
            icon: "Settings",
            subcategories: [
                {
                    label: "",
                    skills: ["Pre-Sales", "Channel Partner Management", "CRM", "Inside Sales", "Sales Operations", "Business Development", "Leasing", "Property Management", "Customer Support", "Documentation", "Real Estate Finance", "Other Functional Skills"]
                }
            ]
        }
    ],
    footerLine1: "Traditional RE + New-Age Digital",
    footerLine2: "Field Skills + Digital Skills + Business Skills + Leadership Skills",
    footerCta: "If it is a skill required to perform better in real estate, it can become a learning program on FARE."
};

export const dataTe = { ...dataEn };

export const getData = (lang: Language = 'en') => lang === 'te' ? dataTe : dataEn;
export const data = dataEn;
