import type { Language } from '../../context/LanguageContext';

export const dataEn = {
    title: "Section 2 — Common Challenges for RE Trainers & Coaches",
    subtitle: "Real estate training doesn't end in the classroom.",
    challenges: [
        "Connection with learners often ends after the training session",
        "Difficult to support 1-to-1 implementation",
        "No simple way to track daily habits and activities",
        "Long-term mentoring is difficult to manage",
        "Limited platforms built specifically for RE trainers",
        "Difficult to reach a wider pool of RE learners",
        "Limited access to corporate training opportunities",
        "Creating and managing customised RE learning content takes time"
    ],
    transitionTitle: "What if your expertise could continue working with your learners — even after the training room?",
    transitionSubtitle: "That's what FARE enables."
};

export const dataTe = { ...dataEn };

export const getData = (lang: Language = 'en') => lang === 'te' ? dataTe : dataEn;
export const data = dataEn;
