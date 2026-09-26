import type { Language } from "../../../context/LanguageContext";
export const dataEn = {
  overline: "Capabilities",
  title: "Four Ways FARE Strengthens Your Sales Ecosystem",
  headline: {
    line1: "One Custom Learning System.",
    line2: "Four powerful ways",
    line3: "to develop",
    line4: "your teams.",
  },
  subtitle:
    "Whether you're providing project knowledge, engaging teams, practicing skills, or sourcing trainers — FARE offers a comprehensive solution.",
  cards: [
    {
      tag: "KNOW",
      title: "Structured Project Knowledge",
      desc: "Give your Sales and Channel Partner teams a structured course covering everything they need to know about your project.",
      icon: "BookOpen",
      color: "#34D399",
    },
    {
      tag: "ENGAGE",
      title: "Project Knowledge Bank",
      desc: "Keep your Sales and CP teams engaged with your project through quizzes and knowledge checks.",
      icon: "BarChart2",
      color: "#60A5FA",
    },
    {
      tag: "PRACTISE",
      title: "Mocks to Improve Sales Skills",
      desc: "Move beyond theoretical learning. Learn, practise, get feedback, and improve real sales skills.",
      icon: "Target",
      color: "#C99A2E",
    },
    {
      tag: "SOURCE",
      title: "Trainer Onboarding",
      desc: "Need specialised training? Bring the right trainer into your learning program when your team needs specialised skills.",
      icon: "Users",
      color: "#F472B6",
    },
  ],
  cta: "Explore FARE Custom RE LMS ↓",
  learnMore: "Learn more",
};
export const dataTe = {
  overline: "Capabilities",
  title: "FARE మీ సేల్స్ ఎకోసిస్టమ్‌ను బలోపేతం చేసే నాలుగు మార్గాలు",
  headline: {
    line1: "ఒక కస్టమ్ లెర్నింగ్ సిస్టమ్.",
    line2: "మీ టీమ్‌ను అభివృద్ధి చేయడానికి",
    line3: "నాలుగు శక్తివంతమైన మార్గాలు.",
    line4: "",
  },
  subtitle:
    "మీరు ప్రాజెక్ట్ నాలెడ్జ్ అందించాలన్నా, టీమ్‌ను ఎంగేజ్ చేయాలన్నా, స్కిల్స్ ప్రాక్టీస్ చేయాలన్నా లేదా ట్రైనర్స్‌ను వెతకాలన్నా — FARE సమగ్ర పరిష్కారాన్ని అందిస్తుంది.",
  cards: [
    {
      tag: "KNOW",
      title: "స్ట్రక్చర్డ్ ప్రాజెక్ట్ నాలెడ్జ్",
      desc: "మీ ప్రాజెక్ట్ గురించి తెలుసుకోవలసిన ప్రతిదానిని కవర్ చేసే స్ట్రక్చర్డ్ కోర్సును మీ సేల్స్ మరియు ఛానల్ పార్టనర్ టీమ్‌లకు అందించండి.",
      icon: "BookOpen",
      color: "#34D399",
    },
    {
      tag: "ENGAGE",
      title: "ప్రాజెక్ట్ నాలెడ్జ్ బ్యాంక్",
      desc: "క్విజ్‌లు మరియు నాలెడ్జ్ చెక్ ద్వారా మీ సేల్స్ మరియు CP టీమ్‌లను మీ ప్రాజెక్ట్‌తో ఎంగేజ్ చేయండి.",
      icon: "BarChart2",
      color: "#60A5FA",
    },
    {
      tag: "PRACTISE",
      title: "సేల్స్ స్కిల్స్ పెంచే మాక్స్",
      desc: "థియరిటికల్ లెర్నింగ్ దాటి ముందుకు వెళ్లండి. నిజమైన సేల్స్ స్కిల్స్ నేర్చుకోండి, ప్రాక్టీస్ చేయండి, ఫీడ్‌బ్యాక్ పొందండి మరియు మెరుగుపడండి.",
      icon: "Target",
      color: "#C99A2E",
    },
    {
      tag: "SOURCE",
      title: "ట్రైనర్ ఆన్‌బోర్డింగ్",
      desc: "ప్రత్యేక ట్రైనింగ్ అవసరమా? మీ టీమ్‌కు ప్రత్యేక స్కిల్స్ అవసరమైనప్పుడు సరైన ట్రైనర్‌ను మీ లెర్నింగ్ ప్రోగ్రామ్‌లోకి తీసుకురండి.",
      icon: "Users",
      color: "#F472B6",
    },
  ],
  cta: "FARE కస్టమ్ RE LMS అన్వేషించండి ↓",
  learnMore: "మరింత తెలుసుకోండి",
};
export const getData = (lang: Language = "en") =>
  lang === "te" ? dataTe : dataEn;
export const data = dataEn;
