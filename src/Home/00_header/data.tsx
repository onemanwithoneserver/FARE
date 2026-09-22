import type { Language } from '../../context/LanguageContext';

export const dataEn = {
    title: "Header",
    navLinks: [
        { title: "Platform", href: "home" },
        {
            title: "For Companies",
            href: "re-companies",
            subItems: [
                {
                    title: "Residential & Commercial",
                    desc: "Skill diagnostic labs for real estate developers & agency teams",
                    href: "re-companies"
                },
                {
                    title: "Open Plots",
                    desc: "Specialized training for land & plot sales professionals",
                    href: "open-plots"
                }
            ]
        },
        { title: "For Trainers", href: "re-trainers-coaches" },
        { title: "Trainer Directory", href: "#" },
        { title: "About", href: "#" },
        { title: "Contact Us", href: "contact-us" }
    ]
};

export const dataTe = {
    title: "Header",
    navLinks: [
        { title: "ప్లాట్‌ఫారమ్", href: "home" },
        {
            title: "కంపెనీల కోసం",
            href: "re-companies",
            subItems: [
                {
                    title: "రెసిడెన్షియల్ & కమర్షియల్",
                    desc: "రియల్ ఎస్టేట్ డెవలపర్లు మరియు ఏజెన్సీ బృందాల కోసం స్కిల్ డయాగ్నోస్టిక్ ల్యాబ్‌లు",
                    href: "re-companies"
                },
                {
                    title: "ఓపెన్ ప్లాట్స్",
                    desc: "భూమి & ప్లాట్ సేల్స్ నిపుణుల కోసం ప్రత్యేక శిక్షణ",
                    href: "open-plots"
                }
            ]
        },
        { title: "ట్రైనర్ల కోసం", href: "re-trainers-coaches" },
        { title: "ట్రైనర్ డైరెక్టరీ", href: "#" },
        { title: "మా గురించి", href: "#" },
        { title: "సంప్రదించండి", href: "contact-us" }
    ]
};

export const getData = (lang: Language = 'en') => lang === 'te' ? dataTe : dataEn;
export const data = dataEn;
