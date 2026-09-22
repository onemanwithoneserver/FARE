import type { Language } from '../../context/LanguageContext';

export const dataEn = {
    tagline: "FARE for RE Trainers & Coaches",
    headline: "Finally, a Custom LMS for RE trainers",
    subheadline: "Turn your expertise into a more powerful learning experience.",
    subheadlineAccent: "",
    description: "Use FARE to connect with your learners, deliver structured programs, practise through mocks, build long-term mentoring journeys and reach organisations looking for real estate training.",
    buttons: {
        primary: "Explore FARE for Trainers",
        secondary: "Schedule a Demo"
    },
    features: ["Your Expertise", "Your Content", "Your Learners", "Powered by FARE"],
    footerText: "Built specifically for RE Trainers, Coaches and Training Professionals.",
    dashboard: {
        title: "Trainer Hub",
        stats: [
            { title: "Programs Launched", progress: "88%", progressNum: 88, color: "#34D399" },
            { title: "Active Learners", progress: "95%", progressNum: 95, color: "#60A5FA" },
            { title: "Mocks Delivered", progress: "72%", progressNum: 72, color: "#C99A2E" },
            { title: "Mentoring Hours", progress: "80%", progressNum: 80, color: "#F472B6" }
        ],
        floatingBadge: {
            title: "Live",
            subtitle: "4 active programs"
        }
    }
};

export const dataTe = {
    tagline: "RE Trainers & Coaches కోసం FARE",
    headline: "చివరికి, ట్రైనర్స్ కోసం ఒక Custom RE LMS.",
    subheadline: "మీ నైపుణ్యాన్ని మరింత శక్తివంతమైన అభ్యాస అనుభవంగా మార్చండి.",
    description: "మీ అభ్యాసకులతో కనెక్ట్ కావడానికి, స్ట్రక్చర్డ్ ప్రోగ్రామ్స్ అందించడానికి, మాక్స్ ద్వారా ప్రాక్టీస్ చేయడానికి మరియు రియల్ ఎస్టేట్ ట్రైనింగ్ కోసం చూస్తున్న సంస్థలను చేరుకోవడానికి FARE ని ఉపయోగించండి.",
    features: ["మీ నైపుణ్యం", "మీ కంటెంట్", "మీ అభ్యాసకులు", "Powered by FARE"],
    buttons: {
        primary: "FARE for Trainers అన్వేషించండి",
        secondary: "డెమో షెడ్యూల్ చేయండి"
    },
    dashboard: {
        title: "మొత్తం అభ్యాసకులు (Total Learners)",
        floatingBadge: {
            title: "Live Class: Sales Pitch",
            subtitle: "Top Rated Trainer"
        },
        stats: [
            { title: "Active Courses", progress: "12", color: "#60A5FA" },
            { title: "Completed Mocks", progress: "450+", color: "#34D399" },
            { title: "Mentoring Sessions", progress: "85", color: "#C99A2E" },
            { title: "Avg. Learner Score", progress: "92%", color: "#F472B6" }
        ]
    },
    footerText: "*FARE ప్లాట్‌ఫారమ్ మరియు అభ్యాసకులను అందిస్తుంది. మీరు శిక్షణను అందిస్తారు."
};

export const getData = (lang: Language = 'en') => lang === 'te' ? dataTe : dataEn;
export const data = dataEn;
