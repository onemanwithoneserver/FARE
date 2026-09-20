import type { Language } from '../../context/LanguageContext';

export const dataEn = {
    overline: "Customise",
    title: "Customise FARE Around Your Business",
    headline: "Every project is different. Your learning system can be too.",
    desc1: "FARE can be customised around your:",
    highlights: "Projects · Products · Sales Process · Channel Partner Program · Team Structure · Training Requirements",
    desc2: "Tailor the platform to match your specific operational needs.",
    featuresHeading: "Custom solutions can include",
    features: [
        "Project-specific courses",
        "Company-specific learning",
        "Product knowledge programs",
        "CP onboarding",
        "Custom knowledge banks",
        "Sales mocks",
        "Custom assessments",
        "Senior team programs",
        "Trainer-led programs",
        "Custom RE LMS"
    ],
    ctaHeading: "Ready to sharpen your Sales & Channel Partner teams?",
    ctaDesc: "See how FARE Custom RE LMS can work for your organisation.",
    ctaButton: "Book a Demo",
    secondaryCtaButton: "Want to Know How It Works?"
};

export const dataTe = {
    overline: "Customise",
    title: "మీ వ్యాపారానికి అనుగుణంగా FAREని కస్టమైజ్ చేయండి",
    headline: "ప్రతి ప్రాజెక్ట్ భిన్నంగా ఉంటుంది. మీ లెర్నింగ్ సిస్టమ్ కూడా అలానే ఉండవచ్చు.",
    desc1: "FARE వీటి ఆధారంగా కస్టమైజ్ చేయబడుతుంది:",
    highlights: "ప్రాజెక్ట్స్ · ప్రొడక్ట్స్ · సేల్స్ ప్రాసెస్ · ఛానల్ పార్ట్నర్ ప్రోగ్రామ్ · టీమ్ స్ట్రక్చర్ · ట్రైనింగ్ రిక్వైర్‌మెంట్స్",
    desc2: "మీ నిర్దిష్ట ఆపరేషనల్ అవసరాలకు సరిపోయేలా ప్లాట్‌ఫారమ్‌ను అనుకూలీకరించండి.",
    featuresHeading: "కస్టమ్ సొల్యూషన్స్‌లో ఇవి ఉండవచ్చు:",
    features: [
        "ప్రాజెక్ట్-స్పెసిఫిక్ కోర్సులు",
        "కంపెనీ-స్పెసిఫిక్ లెర్నింగ్",
        "ప్రొడక్ట్ నాలెడ్జ్ ప్రోగ్రామ్స్",
        "CP ఆన్‌బోర్డింగ్",
        "కస్టమ్ నాలెడ్జ్ బ్యాంక్స్",
        "సేల్స్ మాక్స్",
        "కస్టమ్ అసెస్‌మెంట్స్",
        "సీనియర్ టీమ్ ప్రోగ్రామ్స్",
        "ట్రైనర్-లెడ్ ప్రోగ్రామ్స్",
        "కస్టమ్ RE LMS"
    ],
    ctaHeading: "మీ సేల్స్ & ఛానల్ పార్టనర్ టీమ్‌లను పదును పెట్టడానికి సిద్ధంగా ఉన్నారా?",
    ctaDesc: "FARE కస్టమ్ RE LMS మీ ఆర్గనైజేషన్ కోసం ఎలా పనిచేస్తుందో చూడండి.",
    ctaButton: "డెమో బుక్ చేయండి",
    secondaryCtaButton: "ఇది ఎలా పనిచేస్తుందో తెలుసుకోవాలనుకుంటున్నారా?"
};

export const getData = (lang: Language = 'en') => lang === 'te' ? dataTe : dataEn;
export const data = dataEn;
