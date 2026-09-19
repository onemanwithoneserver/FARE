export const getData = (lang: 'en' | 'te' = 'en') => {
    if (lang === 'te') {
        return {
            title: "05_section",
            links: [
                { label: "ప్లాట్‌ఫారమ్", path: "home" },
                { label: "ఓపెన్ ప్లాట్స్", path: "open-plots" },
                { label: "కంపెనీల కోసం", path: "home" },
                { label: "ట్రైనర్ల కోసం", path: "home" },
                { label: "ట్రైనర్ డైరెక్టరీ", path: "open-plots" },
                { label: "మా గురించి", path: "home" },
                { label: "సంప్రదించండి", path: "home" },
                { label: "గోప్యత", path: "home" },
                { label: "నిబంధనలు", path: "home" }
            ],
            copyright: "© {year} FARE. సర్వహక్కులు ప్రత్యేకించబడ్డాయి."
        };
    }
    return {
        title: "05_section",
        links: [
            { label: "Platform", path: "home" },
            { label: "Open Plots", path: "open-plots" },
            { label: "For Companies", path: "home" },
            { label: "For Trainers", path: "home" },
            { label: "Trainer Directory", path: "open-plots" },
            { label: "About", path: "home" },
            { label: "Contact", path: "home" },
            { label: "Privacy", path: "home" },
            { label: "Terms", path: "home" }
        ],
        copyright: "© {year} FARE. All rights reserved."
    };
};

export const data = getData('en');
