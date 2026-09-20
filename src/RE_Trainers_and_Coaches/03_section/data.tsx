import type { Language } from '../../context/LanguageContext';

export const dataEn = {
    overline: "Capabilities",
    title: "What You Can Do With FARE",
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

export const dataTe = {
    overline: "Capabilities",
    title: "FARE తో మీరు ఏమి చేయగలరు",
    headline: "మీ నైపుణ్యాన్ని పూర్తి అభ్యాస అనుభవంగా మార్చండి.",
    cards: [
        {
            tag: "లాంచ్ (LAUNCH)",
            title: "కో-బ్రాండెడ్ ప్రోగ్రామ్స్",
            desc: "మీ నైపుణ్యం, పద్దతి మరియు కంటెంట్ ఆధారంగా FARE తో మీ స్వంత ట్రైనింగ్ ప్రోగ్రామ్‌లను సృష్టించండి మరియు ప్రారంభించండి.",
            icon: "Rocket",
            color: "#34D399"
        },
        {
            tag: "కనెక్ట్ (CONNECT)",
            title: "లెర్నర్ LMS",
            desc: "మీ అభ్యాసకులతో కనెక్ట్ అయి ఉంటూనే కోర్సులు, క్విజ్‌లు, యాక్టివిటీలు మరియు అసెస్‌మెంట్‌లను అందించడానికి FARE ని ఉపయోగించండి.",
            icon: "Link2",
            color: "#60A5FA"
        },
        {
            tag: "ప్రాక్టీస్ & మెంటర్ (PRACTISE & MENTOR)",
            title: "మాక్స్ & మెంటరింగ్",
            desc: "అభ్యాసకులు నైపుణ్యాలను వాస్తవికంగా అన్వయించడానికి ప్రీమియం మాక్స్, 1-టు-1 మెంటరింగ్ మరియు స్ట్రక్చర్డ్ ఫీడ్‌బ్యాక్‌ను అందించండి.",
            icon: "Target",
            color: "#C99A2E"
        },
        {
            tag: "సృష్టించండి (CREATE)",
            title: "కస్టమ్ RE కంటెంట్",
            desc: "మీ నైపుణ్యాన్ని కోర్సులు, క్విజ్‌లు, అసెస్‌మెంట్‌లు, మాక్ దృశ్యాలు మరియు మెంటరింగ్ ప్రోగ్రామ్‌లుగా మార్చండి.",
            icon: "PenTool",
            color: "#F472B6"
        }
    ],
    learnMore: "మరింత తెలుసుకోండి"
};

export const getData = (lang: Language = 'en') => lang === 'te' ? dataTe : dataEn;
export const data = dataEn;
