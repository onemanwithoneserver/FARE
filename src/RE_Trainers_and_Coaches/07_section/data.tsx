import type { Language } from '../../context/LanguageContext';

export const dataEn = {
    overline: "Explore",
    title: "Explore What FARE Can Do for Trainers",
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

export const dataTe = {
    overline: "Explore",
    title: "ట్రైనర్స్ కోసం FARE ని అన్వేషించండి",
    headline: "ఒకే ప్లాట్‌ఫారమ్. మీ ట్రైనింగ్ ప్రాక్టీస్‌ను పెంచుకోవడానికి బహుళ మార్గాలు.",
    tabs: [
        {
            id: "co-branded",
            label: "కో-బ్రాండెడ్ ప్రోగ్రామ్స్",
            title: "కో-బ్రాండెడ్ ప్రోగ్రామ్స్",
            desc: "మీ నైపుణ్యం మరియు పద్దతి ఆధారంగా స్ట్రక్చర్డ్ ప్రోగ్రామ్‌లను నిర్మించి ప్రారంభించండి.",
            icon: "Rocket",
            color: "#34D399",
            features: [
                "మీ బ్రాండ్ + FARE క్రింద ప్రోగ్రామ్‌లను ప్రారంభించండి",
                "స్ట్రక్చర్డ్ కరికులం డిజైన్",
                "ఎన్‌రోల్‌మెంట్ & లెర్నర్ మేనేజ్‌మెంట్",
                "సర్టిఫికేట్‌లు & కంప్లీషన్ ట్రాకింగ్"
            ]
        },
        {
            id: "learner-lms",
            label: "లెర్నర్ LMS",
            title: "లెర్నర్ LMS",
            desc: "కోర్సులు, క్విజ్‌లు, యాక్టివిటీలు మరియు అసెస్‌మెంట్‌ల ద్వారా తరగతి గదికి మించి అభ్యాసకులతో కనెక్ట్ అయి ఉండండి.",
            icon: "BookOpen",
            color: "#60A5FA",
            features: [
                "కోర్సు డెలివరీ & నిర్వహణ",
                "క్విజ్‌లు & అసెస్‌మెంట్‌లు",
                "యాక్టివిటీ ట్రాకింగ్",
                "లెర్నర్ ప్రోగ్రెస్ డాష్‌బోర్డ్"
            ]
        },
        {
            id: "mocks-mentoring",
            label: "మాక్స్ & మెంటరింగ్",
            title: "మాక్స్ & మెంటరింగ్",
            desc: "ప్రాక్టీస్, ఫీడ్‌బ్యాక్ మరియు మెంటరింగ్ ద్వారా జ్ఞానాన్ని ఆచరణాత్మక నైపుణ్యాలుగా మార్చడంలో అభ్యాసకులకు సహాయపడండి.",
            icon: "Target",
            color: "#C99A2E",
            features: [
                "స్ట్రక్చర్డ్ మాక్ దృశ్యాలు (Mock scenarios)",
                "1-టు-1 మెంటరింగ్ సెషన్‌లు",
                "ఫీడ్‌బ్యాక్ & స్కోరింగ్",
                "దీర్ఘకాలిక మెంటరింగ్ ప్రయాణాలు"
            ]
        },
        {
            id: "custom-content",
            label: "కస్టమ్ కంటెంట్",
            title: "కస్టమ్ RE కంటెంట్",
            desc: "మీ నైపుణ్యాన్ని తిరిగి ఉపయోగించగల డిజిటల్ లెర్నింగ్ అనుభవాలుగా మార్చండి.",
            icon: "PenTool",
            color: "#F472B6",
            features: [
                "కోర్సు సృష్టి సాధనాలు",
                "క్విజ్ & అసెస్‌మెంట్ బిల్డర్",
                "మాక్ దృశ్య రూపకల్పన (Mock scenario design)",
                "కంటెంట్ లైబ్రరీ నిర్వహణ"
            ]
        }
    ]
};

export const getData = (lang: Language = 'en') => lang === 'te' ? dataTe : dataEn;
export const data = dataEn;
