import { BookOpen, Target, BarChart2, CheckCircle } from 'lucide-react';
import type { Language } from '../../context/LanguageContext';

export const dataEn = {
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

export const dataTe = {
    title: "01_section",
    headline: {
        line1: "నేర్చుకోండి.",
        line2: "ప్రాక్టీస్ చేయండి.",
        line3: "బెంచ్‌మార్క్.",
        line4: "అలవాట్లు పెంచుకోండి."
    },
    subtitle: "రియల్ ఎస్టేట్ కోసం ప్రత్యేకంగా నిర్మించిన కస్టమ్ లెర్నింగ్ ప్లాట్‌ఫారమ్.",
    capabilities: ["నాలెడ్జ్", "స్కిల్స్", "సామర్థ్యం", "అలవాట్లు"],
    buttons: {
        primary: "FARE ని అన్వేషించండి",
        secondary: "ఇది ఎలా పనిచేస్తుంది"
    },
    footerLinks: ["రియల్ ఎస్టేట్ కంపెనీల కోసం", "ట్రైనర్ల కోసం", "ప్రొఫెషనల్స్ కోసం"],
    signature: "మెరుగైన వ్యక్తులు\nమెరుగైన రియల్ ఎస్టేట్ నిర్మిస్తారు",
    dashboard: {
        greeting: "శుభోదయం, రాహుల్",
        date: "సోమ, 14 సెప్ 2026",
        userInitials: "RS",
        userName: "రాహుల్ S.",
        userRole: "సేల్స్ అసోసియేట్",
        url: "app.fare.academy/dashboard",
        stats: [
            { id: 'knowledge', label: 'నాలెడ్జ్ బ్యాంక్', subtitle: 'క్విజ్‌లు', val: '68%', progress: 68, color: '#6B8AFF', icon: <BookOpen size={15} /> },
            { id: 'skills', label: 'స్కిల్ ప్రాక్టీస్', subtitle: 'మాక్స్', val: '4/10', progress: 40, color: '#34D399', icon: <Target size={15} /> },
            { id: 'functional', label: 'ఫంక్షనల్ స్కిల్స్', subtitle: 'ప్రశ్నావళి', val: '82వ', progress: 82, color: '#A78BFA', icon: <BarChart2 size={15} /> },
            { id: 'habits', label: 'డైలీ హ్యాబిట్స్', subtitle: 'హ్యాబిట్ ట్రాకర్', val: '7/7', progress: 100, color: '#D5AA45', icon: <CheckCircle size={15} /> }
        ],
        upcoming: [
            { title: "మాక్ కాల్ — అభ్యంతరాల నిర్వహణ", time: "ఈరోజు 3:00 PM", color: "#34D399" },
            { title: "RERA క్విజ్ · మాడ్యూల్ 4", time: "బుధ 16 సెప్", color: "#6B8AFF" }
        ]
    }
};

export const getData = (lang: Language = 'en') => lang === 'te' ? dataTe : dataEn;
export const data = dataEn;
