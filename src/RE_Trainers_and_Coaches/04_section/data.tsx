import type { Language } from '../../context/LanguageContext';

export const dataEn = {
    title: "Section 4 — FARE LMS Is For",
    headline: "One RE Learning Platform. Every Segment. Every Learner.",
    segmentsHeading: "All Types of Real Estate Segments",
    segments: [
        {
            title: "Residential",
            items: ["Apartments", "Villas", "Gated Communities", "Luxury", "Affordable", "Resale"],
            icon: "Home",
            color: "#34D399"
        },
        {
            title: "Plotted Development",
            items: ["Open Plots", "Gated Plots", "Layouts", "Plot Sales", "Land Investment"],
            icon: "Map",
            color: "#60A5FA"
        },
        {
            title: "Commercial",
            items: ["Office", "Retail", "High Street", "Commercial Leasing", "Pre-Leased", "Investment"],
            icon: "Building2",
            color: "#C99A2E"
        },
        {
            title: "Other RE Segments",
            items: ["Property Management", "Facilities", "Warehousing", "Industrial", "Hospitality", "Other Real Estate Services"],
            icon: "Layers",
            color: "#8B5CF6"
        }
    ],
    learnersHeading: "All Types of RE Learners",
    learners: [
        {
            title: "Freshers",
            desc: "Build industry knowledge and foundational skills.",
            icon: "GraduationCap",
            color: "#34D399"
        },
        {
            title: "Real Estate Professionals",
            desc: "Upgrade skills, learn new practices and move into advanced roles.",
            icon: "Briefcase",
            color: "#60A5FA"
        },
        {
            title: "Career Switchers",
            desc: "Understand the real estate industry and build the skills needed to enter the sector.",
            icon: "RefreshCcw",
            color: "#F59E0B"
        },
        {
            title: "Managers & Leaders",
            desc: "Develop leadership, coaching, team management and advanced business skills.",
            icon: "Crown",
            color: "#C99A2E"
        },
        {
            title: "Channel Partners & Agents",
            desc: "Strengthen sales, product, customer and business development capabilities.",
            icon: "Handshake",
            color: "#F472B6"
        }
    ]
};

export const dataTe = { ...dataEn };

export const getData = (lang: Language = 'en') => lang === 'te' ? dataTe : dataEn;
export const data = dataEn;
