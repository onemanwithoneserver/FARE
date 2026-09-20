import type { Language } from '../../context/LanguageContext';

export const dataEn = {
    title: "Section 8 — You Bring the Expertise. FARE Brings the Platform.",
    headline: "You bring the expertise. FARE brings the platform.",
    headlineAccent: "FARE brings the audience.",
    youBring: {
        title: "You Bring",
        items: ["Industry Experience", "Expertise", "Methodology", "Content", "Training Approach"]
    },
    fareBrings: {
        title: "FARE Brings",
        items: ["RE LMS", "Learning Infrastructure", "Assessment & Practice Tools", "Learner Engagement", "Trainer Discovery", "Access to RE Professionals & Companies"]
    },
    together: {
        title: "Together",
        flow: ["Expertise", "Platform", "Learners", "Organisations"]
    },
    footerText: "Focus on what you know best. Let FARE handle the learning ecosystem."
};

export const dataTe = { ...dataEn };

export const getData = (lang: Language = 'en') => lang === 'te' ? dataTe : dataEn;
export const data = dataEn;
