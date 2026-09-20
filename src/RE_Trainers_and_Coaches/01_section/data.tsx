import type { Language } from '../../context/LanguageContext';

export const dataEn = {
    tagline: "FARE for RE Trainers & Coaches",
    headline: "Finally, a Custom RE LMS for Trainers.",
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

export const dataTe = { ...dataEn };

export const getData = (lang: Language = 'en') => lang === 'te' ? dataTe : dataEn;
export const data = dataEn;
