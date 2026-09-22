import type { Language } from '../../context/LanguageContext';

export const dataEn = {
    title: "Header",
    navLinks: [
        { title: "Platform", href: "#platform" },
        {
            title: "For Companies",
            href: "#for-companies",
            subItems: [
                {
                    title: "Residential & Commercial",
                    desc: "Skill diagnostic labs for real estate developers & agency teams",
                    href: "#residential-commercial"
                },
                {
                    title: "Open Plots",
                    desc: "Specialized training for land & plot sales professionals",
                    href: "#open-plots"
                }
            ]
        },
        { title: "For Trainers", href: "#for-trainers" },
        { title: "Trainer Directory", href: "#trainer-directory" },
        { title: "About", href: "#about" },
        { title: "Contact Us", href: "#contact" }
    ]
};

export const dataTe = {
    title: "Header",
    navLinks: [
        { title: "ప్లాట్‌ఫారమ్", href: "#platform" },
        {
            title: "కంపెనీల కోసం",
            href: "#for-companies",
            subItems: [
                {
                    title: "రెసిడెన్షియల్ & కమర్షియల్",
                    desc: "రియల్ ఎస్టేట్ డెవలపర్లు మరియు ఏజెన్సీ బృందాల కోసం స్కిల్ డయాగ్నోస్టిక్ ల్యాబ్‌లు",
                    href: "#residential-commercial"
                },
                {
                    title: "ఓపెన్ ప్లాట్స్",
                    desc: "భూమి & ప్లాట్ సేల్స్ నిపుణుల కోసం ప్రత్యేక శిక్షణ",
                    href: "#open-plots"
                }
            ]
        },
        { title: "ట్రైనర్ల కోసం", href: "#for-trainers" },
        { title: "ట్రైనర్ డైరెక్టరీ", href: "#trainer-directory" },
        { title: "మా గురించి", href: "#about" },
        { title: "సంప్రదించండి", href: "#contact" }
    ]
};

export const getData = (lang: Language = 'en') => lang === 'te' ? dataTe : dataEn;
export const data = dataEn;
