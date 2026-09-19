export const data = {
    title: "02_section",
    headline: {
        line1: "One Platform.",
        line2: "Four Ways",
        line3: "to build",
        line4: "capability."
    },
    subtitle: "Designed around the way real estate professionals learn and develop.",
    tabs: [
        { id: '01', title: 'KNOWLEDGE BANK', subtitle: '(Quizzes)', desc: 'Build and test real estate knowledge.' },
        { id: '02', title: 'SKILL PRACTICE', subtitle: '(Mocks with Trainers)', desc: 'Practise real-world skills through guided mocks.' },
        { id: '03', title: 'FUNCTIONAL SKILLS', subtitle: '(Questionnaires)', desc: 'Benchmark where you stand on non-sales skills.' },
        { id: '04', title: 'DAILY HABITS', subtitle: '(Habit Tracker)', desc: 'Build and track professional habits.' }
    ],
    browser: {
        url: "app.fare.academy",
        content: {
            "01": {
                tag: "KNOWLEDGE BANK",
                title: "RERA Regulations — Module 3",
                progress: "Q 4 of 12",
                question: "Under RERA, what is the maximum penalty a developer can face for non-disclosure of project details?",
                options: [
                    'A. 5% of estimated cost',
                    'B. 10% of project value',
                    'C. ₹10 lakh flat fine',
                    'D. 3 years imprisonment'
                ]
            },
            "02": {
                tag: "SKILL PRACTICE",
                title: "Mock: Objection Handling",
                status: "Live Session",
                trainer: { name: "Priya Mehta", role: "Trainer · Certified" },
                learner: { name: "Rahul Sharma", role: "Learner · L2" },
                scenario: '"The buyer says: \'I\'ll wait 6 months — prices might drop.\' How do you respond without being pushy?"'
            },
            "03": {
                tag: "FUNCTIONAL SKILLS",
                title: "Capability Benchmark",
                percentile: "82nd %ile",
                skills: [
                    { label: 'Communication', val: 88, peer: 72 },
                    { label: 'Market Knowledge', val: 74, peer: 68 },
                    { label: 'Negotiation', val: 62, peer: 55 },
                    { label: 'Lead Management', val: 91, peer: 75 }
                ]
            },
            "04": {
                tag: "DAILY HABITS",
                title: "Habit Tracker — Q3",
                streak: "7 Day Streak",
                habits: [
                    { label: 'Morning Market Review', status: 'done', color: '#C99A2E' },
                    { label: '5 Client Follow-ups', status: 'done', color: '#C99A2E' },
                    { label: 'Update CRM', status: 'pending', color: '#C99A2E' }
                ]
            }
        }
    }
};
