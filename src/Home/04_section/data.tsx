import type { Language } from '../../context/LanguageContext';

export const dataEn = {
    title: "04_section",
    academyText: "FARE ACADEMY",
    headline: {
        line1: "THE INSTITUTIONAL STANDARD",
        line2: "FOR REAL ESTATE EXCELLENCE.",
        subtitle: "Empowering professionals and organizations with real-world learning, practical tools, and benchmarks to build stronger people and a stronger real estate industry."
    },
    buttons: {
        primary: "EXPLORE FARE CAPABILITY PLATFORM",
        secondary: "Schedule Enterprise Briefing"
    },
    trustBadges: [
        { title: "100% RERA & Legal Framework Compliant", subtitle: "Trusted. Compliant. Future Ready.", icon: "shield" },
        { title: "Live Simulated AI & Master Coach Labs", subtitle: "Learn by Doing. Perform in Real Life.", icon: "target" },
        { title: "Real-Time Top 5% Peer Benchmarks", subtitle: "Measure. Improve. Stay Ahead.", icon: "chart" }
    ],
    cornerLabels: {
        topLeft: ["LEARN", "PRACTISE", "BENCHMARK", "BUILD"],
        bottomLeft: ["BETTER", "PEOPLE", "BRIGHTER", "TOMORROW"],
        topRight: ["REAL", "ESTATE", "PEOPLE", "PROGRESS"],
        bottomRight: ["KNOWLEDGE", "CREATES", "OPPORTUNITY"]
    }
};

export const dataTe = {
    title: "04_section",
    academyText: "ఫేర్ అకాడమీ",
    headline: {
        line1: "రియల్ ఎస్టేట్ ఎక్సలెన్స్ కోసం",
        line2: "సంస్థాగత ప్రామాణికత.",
        subtitle: "నిజ జీవిత అభ్యాసం, ప్రాక్టికల్ టూల్స్ మరియు బెంచ్‌మార్క్‌లతో నిపుణులను, సంస్థలను బలోపేతం చేయడం."
    },
    buttons: {
        primary: "ఫేర్ ప్లాట్‌ఫారమ్‌ను అన్వేషించండి",
        secondary: "ఎంటర్‌ప్రైజ్ బ్రీఫింగ్ షెడ్యూల్ చేయండి"
    },
    trustBadges: [
        { title: "100% RERA & లీగల్ ఫ్రేమ్‌వర్క్ కంప్లైంట్", subtitle: "విశ్వసనీయమైనది. చట్టబద్ధమైనది. భవిష్యత్తుకు సిద్ధం.", icon: "shield" },
        { title: "లైవ్ సిమ్యులేటెడ్ AI & మాస్టర్ కోచ్ ల్యాబ్‌లు", subtitle: "చేస్తూ నేర్చుకోండి. నిజ జీవితంలో రాణించండి.", icon: "target" },
        { title: "రియల్-టైమ్ టాప్ 5% పీర్ బెంచ్‌మార్క్‌లు", subtitle: "కొలవండి. మెరుగుపరచండి. ముందుండండి.", icon: "chart" }
    ],
    cornerLabels: {
        topLeft: ["నేర్చుకోండి", "ప్రాక్టీస్", "బెంచ్‌మార్క్", "నిర్మించండి"],
        bottomLeft: ["మెరుగైన", "ప్రజలు", "ఉజ్వల", "భవిష్యత్తు"],
        topRight: ["రియల్", "ఎస్టేట్", "ప్రజలు", "ప్రగతి"],
        bottomRight: ["జ్ఞానం", "అవకాశాలను", "సృష్టిస్తుంది"]
    }
};

export const getData = (lang: Language = 'en') => lang === 'te' ? dataTe : dataEn;
export const data = dataEn;
