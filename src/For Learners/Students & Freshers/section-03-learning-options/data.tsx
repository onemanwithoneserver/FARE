import type { Language } from "../../../context/LanguageContext";
import { HelpCircle, MonitorPlay, Video, Target, Users, UserPlus } from "lucide-react";

export const ICONS = [HelpCircle, MonitorPlay, Video, Target, Users, UserPlus];

export const GRADIENTS = [
  "from-[#38BDF8] to-[#0284C7]", "from-[#34D399] to-[#059669]", "from-[#F472B6] to-[#DB2777]", 
  "from-[#A78BFA] to-[#7C3AED]", "from-[#FBBF24] to-[#D97706]", "from-[#F87171] to-[#DC2626]"
];

export const dataEn = {
  "title": "Choose How You Want to Learn",
  "subtitle": "",
  "categories": [
    {
      "name": "QUIZZES",
      "subtitle": "Test Your Knowledge",
      "text": "Real estate fundamentals, terminology, projects, locations, approvals, RERA and more."
    },
    {
      "name": "COURSES",
      "subtitle": "Learn at Your Own Pace",
      "text": "Structured pre-recorded programs covering real estate and professional skills."
    },
    {
      "name": "LIVE CLASSES",
      "subtitle": "Learn With Trainers",
      "text": "Interactive online sessions with real estate trainers."
    },
    {
      "name": "MOCKS",
      "subtitle": "Practise Real Situations",
      "text": "Customer conversations, objections, site visits, sales situations and more."
    },
    {
      "name": "WORKSHOPS",
      "subtitle": "Learn & Practise Together",
      "text": "Focused offline learning experiences."
    },
    {
      "name": "MENTORING",
      "subtitle": "Get Personal Guidance",
      "text": "Work with a mentor to improve your skills and implementation."
    }
  ]
};

export const dataTe = {
  "title": "మీరు ఎలా నేర్చుకోవాలో ఎంచుకోండి",
  "subtitle": "",
  "categories": [
    {
      "name": "క్విజ్‌లు",
      "subtitle": "మీ జ్ఞానాన్ని పరీక్షించుకోండి",
      "text": "రియల్ ఎస్టేట్ ఫండమెంటల్స్, పదజాలం, ప్రాజెక్ట్‌లు, స్థానాలు, ఆమోదాలు, RERA మరియు మరిన్ని."
    },
    {
      "name": "కోర్సులు",
      "subtitle": "మీ స్వంత వేగంతో నేర్చుకోండి",
      "text": "రియల్ ఎస్టేట్ మరియు వృత్తిపరమైన నైపుణ్యాలను కవర్ చేసే నిర్మాణాత్మక ప్రీ-రికార్డెడ్ ప్రోగ్రామ్‌లు."
    },
    {
      "name": "లైవ్ క్లాసులు",
      "subtitle": "ట్రైనర్లతో నేర్చుకోండి",
      "text": "రియల్ ఎస్టేట్ శిక్షకులతో ఇంటరాక్టివ్ ఆన్‌లైన్ సెషన్‌లు."
    },
    {
      "name": "మాక్ ఇంటర్వ్యూలు",
      "subtitle": "వాస్తవ పరిస్థితులను ప్రాక్టీస్ చేయండి",
      "text": "కస్టమర్ సంభాషణలు, అభ్యంతరాలు, సైట్ సందర్శనలు, విక్రయ పరిస్థితులు మరియు మరిన్ని."
    },
    {
      "name": "వర్క్‌షాప్‌లు",
      "subtitle": "కలిసి నేర్చుకోండి & ప్రాక్టీస్ చేయండి",
      "text": "కేంద్రీకృత ఆఫ్‌లైన్ అభ్యాస అనుభవాలు."
    },
    {
      "name": "మెంటరింగ్",
      "subtitle": "వ్యక్తిగత మార్గదర్శకత్వం పొందండి",
      "text": "మీ నైపుణ్యాలు మరియు అమలును మెరుగుపరచడానికి మెంటార్‌తో కలిసి పని చేయండి."
    }
  ]
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
