import type { Language } from '../../context/LanguageContext';

export const dataEn = {
    title: "Section 7 — Explore What FARE Can Do for Trainers",
    headline: "One platform. Multiple ways to grow your training practice.",
    tabs: [
        {
            id: "co-branded",
            label: "Co-Branded Programs",
            title: "Co-Branded Programs",
            desc: "Build and launch structured programs around your expertise and methodology.",
            icon: "Rocket",
            color: "#34D399",
            features: [
                "Launch programs under your brand + FARE",
                "Structured curriculum design",
                "Enrollment & learner management",
                "Certificates & completion tracking"
            ]
        },
        {
            id: "learner-lms",
            label: "Learner LMS",
            title: "Learner LMS",
            desc: "Stay connected with learners beyond the classroom through courses, quizzes, activities and assessments.",
            icon: "BookOpen",
            color: "#60A5FA",
            features: [
                "Course delivery & management",
                "Quizzes & assessments",
                "Activity tracking",
                "Learner progress dashboard"
            ]
        },
        {
            id: "mocks-mentoring",
            label: "Mocks & Mentoring",
            title: "Mocks & Mentoring",
            desc: "Help learners convert knowledge into practical skills through practice, feedback and mentoring.",
            icon: "Target",
            color: "#C99A2E",
            features: [
                "Structured mock scenarios",
                "1-to-1 mentoring sessions",
                "Feedback & scoring",
                "Long-term mentoring journeys"
            ]
        },
        {
            id: "custom-content",
            label: "Custom Content",
            title: "Custom RE Content",
            desc: "Turn your expertise into reusable digital learning experiences.",
            icon: "PenTool",
            color: "#F472B6",
            features: [
                "Course creation tools",
                "Quiz & assessment builder",
                "Mock scenario design",
                "Content library management"
            ]
        }
    ]
};

export const dataTe = { ...dataEn };

export const getData = (lang: Language = 'en') => lang === 'te' ? dataTe : dataEn;
export const data = dataEn;
