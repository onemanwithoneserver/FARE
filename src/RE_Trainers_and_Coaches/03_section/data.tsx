import type { Language } from '../../context/LanguageContext';

export const dataEn = {
    title: "Section 3 — What You Can Do With FARE",
    headline: "Turn your expertise into a complete learning experience.",
    cards: [
        {
            tag: "LAUNCH",
            title: "Co-Branded Programs",
            desc: "Create and launch your own training programs with FARE around your expertise, methodology and content.",
            icon: "Rocket",
            color: "#34D399"
        },
        {
            tag: "CONNECT",
            title: "Learner LMS",
            desc: "Use FARE to deliver courses, quizzes, activities and assessments while staying connected with your learners.",
            icon: "Link2",
            color: "#60A5FA"
        },
        {
            tag: "PRACTISE & MENTOR",
            title: "Mocks & Mentoring",
            desc: "Offer premium mocks, 1-to-1 mentoring and structured feedback to help learners apply skills on the ground.",
            icon: "Target",
            color: "#C99A2E"
        },
        {
            tag: "CREATE",
            title: "Custom RE Content",
            desc: "Convert your expertise into courses, quizzes, assessments, mock scenarios and mentoring programs.",
            icon: "PenTool",
            color: "#F472B6"
        }
    ],
    learnMore: "Learn more"
};

export const dataTe = { ...dataEn };

export const getData = (lang: Language = 'en') => lang === 'te' ? dataTe : dataEn;
export const data = dataEn;
