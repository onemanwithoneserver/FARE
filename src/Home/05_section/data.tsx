export const getData = (lang: 'en' | 'te' = 'en') => {
    if (lang === 'te') {
        return {
            title: "05_section",
            topLabel: "FARE",
            headline: {
                white: "FINISHING ACADEMY FOR",
                gold: "REAL ESTATE"
            },
            description: "రియల్ ఎస్టేట్ నిపుణుల అవసరాల కోసం ప్రత్యేకంగా రూపొందించబడిన కస్టమ్ LMS.",
            buttons: [
                { label: "అభ్యాసకుడిగా నమోదు చేసుకోండి", path: "home" },
                { label: "ట్రైనర్‌గా నమోదు చేసుకోండి", path: "home" },
                { label: "కంపెనీగా నమోదు చేసుకోండి", path: "home" }
            ],
            features: [
                { title: "ఉపయోగించడానికి సిద్ధంగా ఉన్న క్విజ్‌లు", icon: "quiz" },
                { title: "సిద్ధంగా ఉన్న మాక్ దృశ్యాలు", icon: "mock" },
                { title: "విస్తృత శ్రేణి కోర్సులు", icon: "courses" }
            ],
            copyright: "© {year} FARE. సర్వహక్కులు ప్రత్యేకించబడ్డాయి."
        };
    }
    return {
        title: "05_section",
        topLabel: "FARE",
        headline: {
            white: "FINISHING ACADEMY FOR",
            gold: "REAL ESTATE"
        },
        description: "A custom LMS designed exclusively for the needs of real estate professionals.",
        buttons: [
            { label: "Register as a Learner", path: "home" },
            { label: "Register as a Trainer", path: "home" },
            { label: "Register as a Company", path: "home" }
        ],
        features: [
            { title: "Ready-to-use Quizzes", icon: "quiz" },
            { title: "Ready-made Mock Scenarios", icon: "mock" },
            { title: "Wide Range of Courses", icon: "courses" }
        ],
        copyright: "© {year} FARE. All rights reserved."
    };
};

export const data = getData('en');
