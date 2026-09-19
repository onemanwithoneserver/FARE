export const data = {
    title: "Section 3 - Explore FARE",
    headline: "Everything you need to build a better-trained Open Plot team.",
    subtitle: "Use the tabs to explore how FARE can fit into your organisation.",
    tabs: [
        { id: "tab1", title: "Custom Onboarding" },
        { id: "tab2", title: "Knowledge Bank" },
        { id: "tab3", title: "Custom LMS" },
        { id: "tab4", title: "Trainer Directory" }
    ],
    tabContent: {
        tab1: {
            title: "Get every new Associate started the right way.",
            desc: "Create a structured onboarding journey for every new joiner — without depending on a trainer for every new Associate.",
            sections: [
                {
                    heading: "Real Estate Fundamentals",
                    items: ["Industry basics", "Real estate terminology", "Stakeholders", "Transaction process"]
                },
                {
                    heading: "Open Plot Knowledge",
                    items: ["Plot fundamentals", "Layout concepts", "Approvals", "Product understanding"]
                },
                {
                    heading: "Company Knowledge",
                    items: ["Company introduction", "Processes", "Roles & responsibilities", "Policies"]
                },
                {
                    heading: "Project Knowledge",
                    items: ["Project details", "Location", "Product", "Infrastructure & amenities", "Pricing & payment plans"]
                },
                {
                    heading: "Sales Foundation",
                    items: ["Lead handling", "Customer profiling", "Pitching", "Follow-up"]
                }
            ],
            journey: "Assign → Learn → Quiz → Complete",
            footerText: "Create once. Onboard every new Associate consistently.",
            buttons: ["Build Your Onboarding Program"]
        },
        tab2: {
            title: "Ready-made knowledge. Ready to test.",
            desc: "Give your team structured quizzes covering the knowledge they need to work confidently in Open Plot sales.",
            sections: [
                {
                    heading: "Knowledge Areas",
                    items: ["Real Estate Fundamentals", "Open Plot Knowledge", "Project & Product Knowledge", "Location & Market Knowledge", "Legal & Approvals", "Sales Knowledge"]
                },
                {
                    heading: "Use It For",
                    items: [
                        "New Joiners: Check foundational knowledge during onboarding.",
                        "Knowledge Checks: Regularly test what your team knows.",
                        "Pre-Training Assessment: Understand knowledge gaps before a training program.",
                        "Project Launch Preparation: Test project and product knowledge before going to market.",
                        "Continuous Learning: Keep knowledge active through regular quizzes."
                    ]
                }
            ],
            footerText: "Don't assume your team knows. Measure it.",
            buttons: ["Explore Knowledge Bank", "Take Free Evaluation Test"]
        },
        tab3: {
            title: "Turn training into everyday practice.",
            desc: "Create a customised learning environment for your organisation — connecting learning with the activities that actually happen on the ground.",
            sections: [
                {
                    heading: "Platform Features",
                    items: [
                        "Courses: Create company-specific, role-specific and project-specific learning journeys.",
                        "Mocks with Trainers: Practise real customer conversations, sales situations and objections through guided mock sessions.",
                        "Daily Habits: Create and track the daily activities that help Associates build consistent sales behaviour.",
                        "Sales Forecast: Give Associates and managers a structured way to plan, track and forecast sales activity."
                    ]
                }
            ],
            journey: "Learn → Practise → Track → Improve",
            footerText: "Move beyond training. Build a system for continuous development.",
            buttons: ["Explore Custom LMS"]
        },
        tab4: {
            title: "Need a trainer? Find the right one.",
            desc: "When your team needs specialised training, discover trainers who understand your requirement and your real estate segment.",
            sections: [
                {
                    heading: "Find Trainers By",
                    items: [
                        "Expertise: Sales, Communication, Digital & Technology, Leadership, Marketing, Product Knowledge, Functional Skills",
                        "Real Estate Segment: Residential, Plotted Development, Commercial, Generic Real Estate",
                        "Training Format: Workshops, Half-Day Sessions, Full-Day Sessions, Mocks, Bootcamps, Coaching, Mentoring",
                        "Delivery: Online, Offline, Blended, Recorded"
                    ]
                }
            ],
            evaluateBasedOn: "Experience · Expertise · RE Segment · Methodology · Format · Delivery · Pricing · Availability",
            journey: "Discover → Shortlist → Compare → Request",
            footerText: "Bring the right trainer into your learning program when you need one.",
            buttons: ["Explore Trainer Directory"]
        }
    }
};
