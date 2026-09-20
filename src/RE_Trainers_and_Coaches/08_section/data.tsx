import type { Language } from '../../context/LanguageContext';

export const dataEn = {
    overline: "The Platform",
    title: "You Bring the Expertise. FARE Brings the Platform.",
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

export const dataTe = {
    overline: "The Platform",
    title: "మీరు నైపుణ్యాన్ని తీసుకురండి",
    headline: "మీరు నైపుణ్యాన్ని తీసుకురండి.",
    headlineAccent: "FARE ప్లాట్‌ఫారమ్‌ను అందిస్తుంది.",
    youBring: {
        title: "మీరు తీసుకురండి",
        items: [
            "మీ రియల్ ఎస్టేట్ పరిజ్ఞానం",
            "మీ ప్రత్యేక శిక్షణా శైలి",
            "బోధన పట్ల మీ అభిరుచి",
            "మీ వ్యక్తిగత బ్రాండ్"
        ]
    },
    fareBrings: {
        title: "FARE అందిస్తుంది",
        items: [
            "టెక్నాలజీ & LMS మౌలిక సదుపాయాలు",
            "RE నిపుణుల సిద్ధంగా ఉన్న ప్రేక్షకులు (Ready audience)",
            "మాక్ & అసెస్‌మెంట్ సాధనాలు",
            "కార్పొరేట్ కనెక్షన్లు"
        ]
    },
    together: {
        title: "కలిసి, మనం నిర్మిస్తాము",
        flow: ["మెరుగైన ఏజెంట్లు", "బలమైన ఏజెన్సీలు", "వృత్తిపరమైన RE పర్యావరణ వ్యవస్థ"]
    },
    footerText: "మీరు ఉత్తమంగా చేసే దానిపై దృష్టి పెట్టండి. మిగిలిన వాటిని FARE చూసుకుంటుంది."
};

export const getData = (lang: Language = 'en') => lang === 'te' ? dataTe : dataEn;
export const data = dataEn;
