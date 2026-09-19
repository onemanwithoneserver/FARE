import { BookOpen, Target, BarChart2, CheckCircle } from 'lucide-react';

export const data = {
    title: "01_section",
    headline: {
        line1: "LEARN.",
        line2: "PRACTISE.",
        line3: "BENCHMARK.",
        line4: "BUILD HABITS."
    },
    subtitle: "A custom learning platform built specifically for real estate.",
    capabilities: ["Knowledge", "Skills", "Capability", "Habits"],
    buttons: {
        primary: "Explore FARE",
        secondary: "How It Works"
    },
    footerLinks: ["For Real Estate Companies", "Trainers", "Professionals"],
    signature: "Better People\nBuild Better Real Estate",
    dashboard: {
        greeting: "Good morning, Rahul",
        date: "Mon, 14 Sep 2026",
        userInitials: "RS",
        userName: "Rahul S.",
        userRole: "Sales Associate",
        url: "app.fare.academy/dashboard",
        stats: [
            { id: 'knowledge', label: 'Knowledge Bank', subtitle: 'Quizzes', val: '68%', progress: 68, color: '#6B8AFF', icon: <BookOpen size={15} /> },
            { id: 'skills', label: 'Skill Practice', subtitle: 'Mocks', val: '4/10', progress: 40, color: '#34D399', icon: <Target size={15} /> },
            { id: 'functional', label: 'Functional Skills', subtitle: 'Questionnaires', val: '82nd', progress: 82, color: '#A78BFA', icon: <BarChart2 size={15} /> },
            { id: 'habits', label: 'Daily Habits', subtitle: 'Habit Tracker', val: '7/7', progress: 100, color: '#D5AA45', icon: <CheckCircle size={15} /> }
        ],
        upcoming: [
            { title: "Mock Call — Objection Handling", time: "Today 3:00 PM", color: "#34D399" },
            { title: "RERA Quiz · Module 4", time: "Wed 16 Sep", color: "#6B8AFF" }
        ]
    }
};
