import type { Language } from '../../context/LanguageContext';

export const dataEn = {
    title: "Section 9 — Want to Become an RE Trainer or Coach?",
    headline: "You don't have to be a trainer already.",
    description: "If you are an experienced Real Estate Professional and want to start your journey as an RE Trainer or Coach, FARE can help you understand how to convert your experience into a structured training offering.",
    exploreHeading: "We can help you explore:",
    exploreItems: [
        "Your area of expertise",
        "Training opportunities",
        "Program design",
        "Content creation",
        "Mocks & mentoring",
        "Building your trainer profile",
        "Getting started with FARE"
    ],
    footerText: "Bring your real estate experience. Let's explore your trainer journey.",
    ctaButton: "Connect With FARE"
};

export const dataTe = { ...dataEn };

export const getData = (lang: Language = 'en') => lang === 'te' ? dataTe : dataEn;
export const data = dataEn;
