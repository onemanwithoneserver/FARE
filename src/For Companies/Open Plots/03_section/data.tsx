import type { Language } from "../../../context/LanguageContext";
export const dataEn = {
  overline: "Capabilities",
  title: "Four Ways to Use FARE",
  headline: {
    line1: "One platform.",
    line2: "Four ways",
    line3: "to strengthen",
    line4: "your team.",
  },
  subtitle:
    "Whether you're onboarding a new Associate, preparing a team for a project launch, improving sales skills or looking for a trainer — FARE gives your organisation a structured way to develop people.",
  cards: [
    {
      tag: "ONBOARD",
      title: "New Associate Induction",
      desc: "Get every new Associate started with a structured learning journey covering your company, projects, products and sales fundamentals.",
      icon: "BookOpen",
      color: "#34D399",
    },
    {
      tag: "KNOWLEDGE BANK",
      title: "Ready Made Quizzes",
      desc: "Give your team access to ready-made real estate and Open Plot quizzes to build and measure knowledge.",
      icon: "BarChart2",
      color: "#60A5FA",
    },
    {
      tag: "PRACTISE",
      title: "Habit Builders",
      desc: "Go beyond courses with Mocks, Daily Habits and Sales Forecast tools designed around your team's day-to-day development.",
      icon: "Target",
      color: "#C99A2E",
    },
    {
      tag: "TRAINING DIRECTORY",
      title: "Expert Trainers",
      desc: "Discover and connect with trainers based on expertise, real estate segment, format, delivery, experience and availability.",
      icon: "Users",
      color: "#F472B6",
    },
  ],
  cta: "Explore How FARE Works ↓",
  learnMore: "Learn more",
};
export const dataTe = {
  overline: "Capabilities",
  title: "FAREని ఉపయోగించే నాలుగు మార్గాలు",
  headline: {
    line1: "ఒకే ప్లాట్ఫారమ్.",
    line2: "మీ టీమ్ను బలోపేతం చేయడానికి",
    line3: "నాలుగు మార్గాలు.",
    line4: "",
  },
  subtitle:
    "మీరు కొత్త Associateను Onboard చేస్తున్నా, Project Launch కోసం టీమ్ను సిద్ధం చేస్తున్నా, Sales Skillsను మెరుగుపరుస్తున్నా లేదా Trainer కోసం చూస్తున్నా — మీ టీమ్ను అభివృద్ధి చేయడానికి FARE ఒక Structured విధానాన్ని అందిస్తుంది.",
  cards: [
    {
      tag: "ONBOARD",
      title: "New Associate Induction",
      desc: "మీ Company, Projects, Products మరియు Sales Fundamentalsను కవర్ చేసే Structured Learning Journey ద్వారా ప్రతి కొత్త Associateను సరైన విధంగా ప్రారంభించండి.",
      icon: "BookOpen",
      color: "#34D399",
    },
    {
      tag: "KNOWLEDGE BANK",
      title: "Ready Made Quizzes",
      desc: "Knowledgeను Build మరియు Measure చేయడానికి మీ టీమ్కు Ready-made Real Estate మరియు Open Plot Quizzes అందించండి.",
      icon: "BarChart2",
      color: "#60A5FA",
    },
    {
      tag: "PRACTISE",
      title: "Habit Builders",
      desc: "Coursesను దాటి Mocks, Daily Habits మరియు Sales Forecast Tools ద్వారా మీ టీమ్ రోజువారీ అభివృద్ధికి అనుగుణమైన Learning Systemను రూపొందించండి.",
      icon: "Target",
      color: "#C99A2E",
    },
    {
      tag: "TRAINING DIRECTORY",
      title: "Expert Trainers",
      desc: "Expertise, Real Estate Segment, Format, Delivery, Experience మరియు Availability ఆధారంగా Trainersను కనుగొని వారితో కనెక్ట్ అవ్వండి.",
      icon: "Users",
      color: "#F472B6",
    },
  ],
  cta: "FARE ఎలా పనిచేస్తుందో తెలుసుకోండి ↓",
  learnMore: "మరింత తెలుసుకోండి",
};
export const getData = (lang: Language = "en") =>
  lang === "te" ? dataTe : dataEn;
export const data = dataEn;
