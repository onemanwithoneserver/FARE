import { BookOpen, Target, CheckCircle, GraduationCap, TrendingUp, HelpCircle } from 'lucide-react';
import type { Language } from '../../context/LanguageContext';

export const dataEn = {
    title: "01_section",
    headline: {
        line1: "LEARN",
        line2: "PRACTISE",
        line3: "BUILD HABITS",
    },
    subtitle: "A custom learning platform built specifically for real estate.",
    capabilities: [
        "Programs",
        "Courses",
        "Knowledge Bank (Quizzes)",
        "Skill Practice (Mock Tests)",
        "Habit Tracker",
        "Sales Forecast"
    ],
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
        url: "fare.training",
        stats: [
            { id: 'programs', label: 'Programs & Courses', subtitle: '6 Modules', val: '84%', progress: 84, color: '#6B8AFF', icon: <GraduationCap size={15} /> },
            { id: 'knowledge', label: 'Knowledge Bank', subtitle: 'Quizzes', val: '92%', progress: 92, color: '#38BDF8', icon: <HelpCircle size={15} /> },
            { id: 'skills', label: 'Skill Practice', subtitle: 'Mock Tests', val: '8/10', progress: 80, color: '#34D399', icon: <Target size={15} /> },
            { id: 'habits', label: 'Habit Tracker', subtitle: 'Daily Streak', val: '7/7', progress: 100, color: '#D5AA45', icon: <CheckCircle size={15} /> },
            { id: 'forecast', label: 'Sales Forecast', subtitle: 'Pipeline Q3', val: '₹1.2 Cr', progress: 75, color: '#A78BFA', icon: <TrendingUp size={15} /> }
        ],
        upcoming: [
            { title: "Mock Test — Objection Handling", time: "Today 3:00 PM", color: "#34D399" },
            { title: "RERA Knowledge Quiz · Module 4", time: "Wed 16 Sep", color: "#6B8AFF" },
            { title: "Sales Forecast Review · Q3 Target", time: "Thu 17 Sep", color: "#A78BFA" }
        ]
    }
};

export const dataTe = {
    title: "01_section",
    headline: {
        line1: "నేర్చుకోండి.",
        line2: "ప్రాక్టీస్ చేయండి.",
        line3: "అలవాట్లు పెంచుకోండి."
    },
    subtitle: "రియల్ ఎస్టేట్ కోసం ప్రత్యేకంగా నిర్మించిన కస్టమ్ లెర్నింగ్ ప్లాట్‌ఫారమ్.",
    capabilities: [
        "ప్రోగ్రామ్స్",
        "కోర్సులు",
        "నాలెడ్జ్ బ్యాంక్ (క్విజ్‌లు)",
        "స్కిల్ ప్రాక్టీస్ (మాక్ టెస్ట్‌లు)",
        "హ్యాబిట్ ట్రాకర్",
        "సేల్స్ ఫోర్‌కాస్ట్"
    ],
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
        url: "fare.training",
        stats: [
            { id: 'programs', label: 'ప్రోగ్రామ్స్ & కోర్సులు', subtitle: '6 మాడ్యూల్స్', val: '84%', progress: 84, color: '#6B8AFF', icon: <GraduationCap size={15} /> },
            { id: 'knowledge', label: 'నాలెడ్జ్ బ్యాంక్', subtitle: 'క్విజ్‌లు', val: '92%', progress: 92, color: '#38BDF8', icon: <HelpCircle size={15} /> },
            { id: 'skills', label: 'స్కిల్ ప్రాక్టీస్', subtitle: 'మాక్ టెస్ట్‌లు', val: '8/10', progress: 80, color: '#34D399', icon: <Target size={15} /> },
            { id: 'habits', label: 'హ్యాబిట్ ట్రాకర్', subtitle: 'డైలీ స్ట్రీక్', val: '7/7', progress: 100, color: '#D5AA45', icon: <CheckCircle size={15} /> },
            { id: 'forecast', label: 'సేల్స్ ఫోర్‌కాస్ట్', subtitle: 'పైప్‌లైన్ Q3', val: '₹1.2 Cr', progress: 75, color: '#A78BFA', icon: <TrendingUp size={15} /> }
        ],
        upcoming: [
            { title: "మాక్ టెస్ట్ — అభ్యంతరాల నిర్వహణ", time: "ఈరోజు 3:00 PM", color: "#34D399" },
            { title: "RERA నాలెడ్జ్ క్విజ్ · మాడ్యూల్ 4", time: "బుధ 16 సెప్", color: "#6B8AFF" },
            { title: "సేల్స్ ఫోర్‌కాస్ట్ సమీక్ష · Q3 టార్గెట్", time: "గురు 17 సెప్", color: "#A78BFA" }
        ]
    }
};

export const getData = (lang: Language = 'en') => lang === 'te' ? dataTe : dataEn;
export const data = dataEn;
