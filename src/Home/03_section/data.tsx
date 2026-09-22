import type { Language } from '../../context/LanguageContext';

export const dataEn = {
    title: "03_section",
    eyebrow: "FARE ACADEMY",
    headline: {
        line1: "WHAT DOES FARE HAVE",
        line2: "FOR YOU?",
        subtitle: "Explore tailored platforms built for companies, trainers, and real estate professionals."
    },
    personas: [
        {
            id: "companies",
            path: "re-companies",
            tag: "REAL ESTATE COMPANIES",
            cta: "Explore RE Companies",
            color: "#0B1D3A",
            accent: "#10B981",
            items: [
                "Open Plot",
                "Residential",
                "Commercial",
                "Fractional",
                "Others"
            ]
        },
        {
            id: "trainers",
            path: "re-trainers-coaches",
            tag: "REAL ESTATE TRAINERS & COACHES",
            cta: "Explore Trainers & Coaches",
            color: "#0B1D3A",
            accent: "#3B82F6",
            items: [
                "Real Estate Subject-Matter Experts",
                "Sales & Business Coaches",
                "Digital & Technology Trainers",
                "Communication & Personal Development Experts",
                "Others"
            ]
        },
        {
            id: "professionals",
            path: "open-plots",
            tag: "REAL ESTATE LEARNERS",
            cta: "Explore Real Estate Learners",
            color: "#0B1D3A",
            accent: "#C99A2E",
            items: [
                "Freelancers",
                "Real Estate Employees",
                "Freshers",
                "Career Switchers"
            ]
        }
    ]
};

export const dataTe = {
    title: "03_section",
    eyebrow: "FARE అకాడమీ",
    headline: {
        line1: "మీ కోసం FARE లో",
        line2: "ఏమి ఉంది?",
        subtitle: "కంపెనీలు, ట్రైనర్లు మరియు రియల్ ఎస్టేట్ నిపుణుల కోసం ప్రత్యేకంగా రూపొందించిన ప్లాట్‌ఫారమ్‌లను అన్వేషించండి."
    },
    personas: [
        {
            id: "companies",
            path: "re-companies",
            tag: "రియల్ ఎస్టేట్ కంపెనీలు",
            cta: "కంపెనీల సొల్యూషన్స్ చూడండి",
            color: "#0B1D3A",
            accent: "#10B981",
            items: [
                "ఓపెన్ ప్లాట్",
                "రెసిడెన్షియల్",
                "కమర్షియల్",
                "ఫ్రాక్షనల్",
                "ఇతరులు"
            ]
        },
        {
            id: "trainers",
            path: "re-trainers-coaches",
            tag: "రియల్ ఎస్టేట్ ట్రైనర్లు & కోచ్‌లు",
            cta: "ట్రైనర్ ప్రోగ్రామ్‌లు చూడండి",
            color: "#0B1D3A",
            accent: "#3B82F6",
            items: [
                "రియల్ ఎస్టేట్ సబ్జెక్ట్-మ్యాటర్ నిపుణులు",
                "సేల్స్ & బిజినెస్ కోచ్‌లు",
                "డిజిటల్ & టెక్నాలజీ ట్రైనర్లు",
                "కమ్యూనికేషన్ & వ్యక్తిత్వ వికాస నిపుణులు",
                "ఇతరులు"
            ]
        },
        {
            id: "professionals",
            path: "open-plots",
            tag: "రియల్ ఎస్టేట్ లెర్నర్లు",
            cta: "లెర్నర్ ప్రోగ్రామ్‌లు చూడండి",
            color: "#0B1D3A",
            accent: "#C99A2E",
            items: [
                "ఫ్రీలాన్సర్లు",
                "రియల్ ఎస్టేట్ ఉద్యోగులు",
                "ఫ్రెషర్లు",
                "కెరీర్ మార్పు కోరుకునేవారు"
            ]
        }
    ]
};

export const getData = (lang: Language = 'en') => lang === 'te' ? dataTe : dataEn;
export const data = dataEn;
