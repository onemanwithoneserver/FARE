import type { Language } from '../../context/LanguageContext';

export const dataEn = {
    overline: "How It Works",
    title: "How It Works",
    headline: "From project knowledge to sales performance.",
    steps: [
        {
            number: "1",
            title: "Configure",
            desc: "Tell us about your organisation, projects, teams and training requirements."
        },
        {
            number: "2",
            title: "Build",
            desc: "FARE creates your customised learning environment, courses, quizzes and practice modules."
        },
        {
            number: "3",
            title: "Engage",
            desc: "Your Sales and Channel Partner teams learn, practise and participate regularly."
        },
        {
            number: "4",
            title: "Measure",
            desc: "Use quizzes, mocks and assessments to identify knowledge and skill gaps."
        },
        {
            number: "5",
            title: "Improve",
            desc: "Continuously reinforce knowledge and improve practical sales skills."
        }
    ],
    journeyLabel: "Learn → Engage → Practise → Measure → Improve"
};

export const dataTe = {
    overline: "How It Works",
    title: "ఇది ఎలా పనిచేస్తుంది",
    headline: "ప్రాజెక్ట్ నాలెడ్జ్ నుండి సేల్స్ పెర్ఫార్మెన్స్ వరకు.",
    steps: [
        {
            number: "1",
            title: "కాన్ఫిగర్",
            desc: "మీ ఆర్గనైజేషన్, ప్రాజెక్ట్‌లు, టీమ్‌లు మరియు ట్రైనింగ్ రిక్వైర్‌మెంట్స్ గురించి మాకు చెప్పండి."
        },
        {
            number: "2",
            title: "బిల్డ్",
            desc: "FARE మీ కస్టమైజ్డ్ లెర్నింగ్ ఎన్విరాన్‌మెంట్, కోర్సులు, క్విజ్‌లు మరియు ప్రాక్టీస్ మాడ్యూల్స్‌ను సృష్టిస్తుంది."
        },
        {
            number: "3",
            title: "ఎంగేజ్",
            desc: "మీ సేల్స్ మరియు ఛానల్ పార్టనర్ టీమ్‌లు రెగ్యులర్‌గా నేర్చుకుంటాయి, ప్రాక్టీస్ చేస్తాయి మరియు పాల్గొంటాయి."
        },
        {
            number: "4",
            title: "కొలవండి",
            desc: "నాలెడ్జ్ మరియు స్కిల్ గ్యాప్‌లను గుర్తించడానికి క్విజ్‌లు, మాక్స్ మరియు అసెస్‌మెంట్స్‌ను ఉపయోగించండి."
        },
        {
            number: "5",
            title: "మెరుగుపడండి",
            desc: "నాలెడ్జ్‌ను నిరంతరం బలోపేతం చేయండి మరియు ప్రాక్టికల్ సేల్స్ స్కిల్స్‌ను మెరుగుపరచండి."
        }
    ],
    journeyLabel: "Learn → Engage → Practise → Measure → Improve"
};

export const getData = (lang: Language = 'en') => lang === 'te' ? dataTe : dataEn;
export const data = dataEn;
