export const getData = (lang: 'en' | 'te' = 'en') => {
    if (lang === 'te') {
        return {
            copyright: "© {year} FARE. సర్వహక్కులు ప్రత్యేకించబడ్డాయి.",
            navLinks: [
                { label: "ప్లాట్‌ఫారమ్", path: "home" },
                { label: "ఓపెన్ ప్లాట్స్", path: "open-plots" },
                { label: "కంపెనీల కోసం", path: "re-companies" },
                { label: "ట్రైనర్ల కోసం", path: "re-trainers-coaches" },
                { label: "ట్రైనర్ డైరెక్టరీ", path: "home" },
                { label: "మా గురించి", path: "home" },
                { label: "సంప్రదించండి", path: "home" },
                { label: "గోప్యత", path: "home" },
                { label: "నిబంధనలు", path: "home" }
            ]
        };
    }
    return {
        copyright: "© {year} FARE. All rights reserved.",
        navLinks: [
            { label: "Platform", path: "home" },
            { label: "Open Plots", path: "open-plots" },
            { label: "For Companies", path: "re-companies" },
            { label: "For Trainers", path: "re-trainers-coaches" },
            { label: "Trainer Directory", path: "home" },
            { label: "About", path: "home" },
            { label: "Contact", path: "home" },
            { label: "Privacy", path: "home" },
            { label: "Terms", path: "home" }
        ]
    };
};

export const data = getData('en');
