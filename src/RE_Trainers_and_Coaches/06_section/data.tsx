import type { Language } from '../../context/LanguageContext';

export const dataEn = {
    title: "Section 6 — Modes of Training & Program Types",
    headline: "Train the way your learners learn best.",
    modesHeading: "Choose Your Delivery Mode",
    modes: [
        {
            title: "Online",
            desc: "Reach learners across locations through digital learning.",
            icon: "Globe",
            color: "#60A5FA"
        },
        {
            title: "Offline",
            desc: "Conduct classroom, workshop and face-to-face training.",
            icon: "Users",
            color: "#34D399"
        },
        {
            title: "Blended",
            desc: "Combine online learning with live sessions, practice and mentoring.",
            icon: "Shuffle",
            color: "#C99A2E"
        }
    ],
    typesHeading: "Choose Your Program Type",
    types: [
        {
            title: "Workshops",
            desc: "Short, focused programs around a specific skill or topic.",
            icon: "Wrench",
            color: "#34D399"
        },
        {
            title: "Pre-Recorded Courses",
            desc: "Create structured self-paced learning programs.",
            icon: "PlayCircle",
            color: "#60A5FA"
        },
        {
            title: "Live Courses",
            desc: "Conduct instructor-led programs with live interaction.",
            icon: "Radio",
            color: "#8B5CF6"
        },
        {
            title: "Bootcamps",
            desc: "Intensive learning programs designed around a specific outcome.",
            icon: "Flame",
            color: "#EF4444"
        },
        {
            title: "Mocks",
            desc: "Practise real-world situations with structured feedback.",
            icon: "Target",
            color: "#C99A2E"
        },
        {
            title: "Mentoring — 1 to 1",
            desc: "Provide personalised guidance and implementation support.",
            icon: "UserCheck",
            color: "#F472B6"
        },
        {
            title: "Group Mentoring",
            desc: "Continue supporting learners through structured group sessions.",
            icon: "UsersRound",
            color: "#06B6D4"
        }
    ],
    footerTagline: "Your Expertise. Your Format. Your Learners.",
    footerModes: ["Online", "Offline", "Blended"],
    footerTypes: ["Workshop", "Pre-Recorded Course", "Live Course", "Bootcamp", "Mock", "1-to-1 Mentoring", "Group Mentoring"]
};

export const dataTe = { ...dataEn };

export const getData = (lang: Language = 'en') => lang === 'te' ? dataTe : dataEn;
export const data = dataEn;
