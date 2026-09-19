import type { Language } from '../../context/LanguageContext';

export const dataEn = {
    headline: {
        line1: "FARE for",
        line2: "Open Plot",
        line3: "Companies",
    },
    subheadline: "You understand the importance of training. Get more value from it with FARE.",
    description: "Build a better-trained Open Plot sales team — from onboarding and knowledge building to skill practice, daily habits and continuous improvement.",
    buttons: {
        primary: "Register for a Demo",
        secondary: "Take Free Evaluation Test"
    },
    features: "Custom Onboarding · Knowledge Bank · Skill Practice · Daily Habits · Trainer Directory",
    footerText: "Built specifically for the needs of Open Plot businesses.",
    tagline: "Skill Enhancement For Real Estate",
    dashboard: {
        title: "Open Plot Mastery",
        stats: [
            { title: "Custom Onboarding", progress: "100%", color: "#34D399" },
            { title: "Knowledge Bank", progress: "85%", color: "#60A5FA" },
            { title: "Skill Practice", progress: "70%", color: "#C99A2E" },
            { title: "Daily Habits", progress: "92%", color: "#F472B6" }
        ],
        floatingBadge: {
            title: "Team Ready",
            subtitle: "For next project"
        }
    }
};

export const dataTe = {
    headline: {
        line1: "ఓపెన్ ప్లాట్",
        line2: "కంపెనీల కోసం",
        line3: "FARE",
    },
    subheadline: "ట్రైనింగ్ యొక్క ప్రాముఖ్యత మీకు తెలుసు. FAREతో మీ ట్రైనింగ్ ద్వారా మరింత విలువ పొందండి.",
    description: "మీ Open Plot సేల్స్ టీమ్ను మరింత మెరుగ్గా తీర్చిదిద్దండి — Onboarding మరియు Knowledge Building నుంచి Skill Practice, Daily Habits మరియు Continuous Improvement వరకు.",
    buttons: {
        primary: "డెమో కోసం రిజిస్టర్ చేయండి",
        secondary: "ఉచిత Evaluation Test తీసుకోండి"
    },
    features: "Custom Onboarding · Knowledge Bank · Skill Practice · Daily Habits · Trainer Directory",
    footerText: "ప్రత్యేకంగా Open Plot వ్యాపారాల అవసరాలను దృష్టిలో పెట్టుకుని రూపొందించబడింది.",
    tagline: "రియల్ ఎస్టేట్ కోసం నైపుణ్యాల పెంపు",
    dashboard: {
        title: "ఓపెన్ ప్లాట్ మాస్టరీ",
        stats: [
            { title: "కస్టమ్ ఆన్‌బోర్డింగ్", progress: "100%", color: "#34D399" },
            { title: "నాలెడ్జ్ బ్యాంక్", progress: "85%", color: "#60A5FA" },
            { title: "స్కిల్ ప్రాక్టీస్", progress: "70%", color: "#C99A2E" },
            { title: "డైలీ హ్యాబిట్స్", progress: "92%", color: "#F472B6" }
        ],
        floatingBadge: {
            title: "టీమ్ రెడీ",
            subtitle: "తదుపరి ప్రాజెక్ట్ కోసం"
        }
    }
};

export const getData = (lang: Language = 'en') => lang === 'te' ? dataTe : dataEn;
export const data = dataEn;
