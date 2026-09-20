import type { Language } from '../../context/LanguageContext';

export const dataEn = {
    title: "Section 5 - Custom Solutions",
    headline: "Your business is different. Your learning system can be too.",
    desc1: "Every Open Plot company has its own:",
    highlights: "Products · Locations · Processes · Sales Approach · Team Structure · Training Requirements",
    desc2: "FARE can be customised around your organisation.",
    featuresHeading: "Custom Solutions Can Include",
    features: [
        "Custom onboarding programs",
        "Company-specific courses",
        "Project & product courses",
        "Custom quizzes",
        "Custom assessments",
        "Mock templates",
        "Daily habit programs",
        "Custom LMS",
        "Trainer-led programs"
    ],
    ctaHeading: "Have a Specific Requirement?",
    ctaDesc: "Tell us what you want your team to learn, practise or improve.",
    ctaButton: "Talk to FARE"
};

export const dataTe = {
    title: "సెక్షన్ 5 — Custom Solutions",
    headline: "మీ Business ప్రత్యేకమైనది. మీ Learning System కూడా అలాగే ఉండవచ్చు.",
    desc1: "ప్రతి Open Plot Companyకు ప్రత్యేకంగా ఉంటాయి:",
    highlights: "Products · Locations · Processes · Sales Approach · Team Structure · Training Requirements",
    desc2: "మీ Organisation చుట్టూ FAREను Customise చేయవచ్చు.",
    featuresHeading: "Custom Solutionsలో ఇవి ఉండవచ్చు:",
    features: [
        "Custom Onboarding Programs",
        "Company-specific Courses",
        "Project & Product Courses",
        "Custom Quizzes",
        "Custom Assessments",
        "Mock Templates",
        "Daily Habit Programs",
        "Custom LMS",
        "Trainer-led Programs"
    ],
    ctaHeading: "ప్రత్యేకమైన Requirement ఉందా?",
    ctaDesc: "మీ టీమ్ ఏమి Learn చేయాలి, Practise చేయాలి లేదా Improve చేయాలి అనుకుంటున్నారో మాకు చెప్పండి.",
    ctaButton: "FAREతో మాట్లాడండి"
};

export const getData = (lang: Language = 'en') => lang === 'te' ? dataTe : dataEn;
export const data = dataEn;
