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

export const dataTe = {
    title: "సెక్షన్ 9 — మీరు RE ట్రైనర్ లేదా కోచ్ కావాలనుకుంటున్నారా?",
    headline: "మీరు ఇప్పటికే ట్రైనర్‌గా ఉండాల్సిన అవసరం లేదు.",
    description: "మీరు అనుభవజ్ఞుడైన రియల్ ఎస్టేట్ ప్రొఫెషనల్ అయితే మరియు RE ట్రైనర్ లేదా కోచ్‌గా మీ ప్రయాణాన్ని ప్రారంభించాలనుకుంటే, మీ అనుభవాన్ని స్ట్రక్చర్డ్ ట్రైనింగ్ ఆఫర్‌గా ఎలా మార్చుకోవాలో అర్థం చేసుకోవడానికి FARE మీకు సహాయపడుతుంది.",
    exploreHeading: "వీటిని అన్వేషించడానికి మేము మీకు సహాయపడతాము:",
    exploreItems: [
        "మీ నైపుణ్యం ఉన్న ప్రాంతం",
        "శిక్షణా అవకాశాలు",
        "ప్రోగ్రామ్ డిజైన్",
        "కంటెంట్ క్రియేషన్",
        "మాక్స్ & మెంటరింగ్",
        "మీ ట్రైనర్ ప్రొఫైల్‌ను నిర్మించడం",
        "FARE తో ప్రారంభించడం"
    ],
    footerText: "మీ రియల్ ఎస్టేట్ అనుభవాన్ని తీసుకురండి. మీ ట్రైనర్ ప్రయాణాన్ని అన్వేషిద్దాం.",
    ctaButton: "FARE తో కనెక్ట్ అవ్వండి"
};

export const getData = (lang: Language = 'en') => lang === 'te' ? dataTe : dataEn;
export const data = dataEn;
