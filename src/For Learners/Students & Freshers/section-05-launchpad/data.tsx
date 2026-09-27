import type { Language } from "../../../context/LanguageContext";
import { Briefcase, Target, Users, Map } from "lucide-react";

export const ICONS = [Briefcase, Target, Map, Users];

export const GRADIENTS = [
  "from-[#10B981] to-[#047857]",
  "from-[#FBBF24] to-[#D97706]",
  "from-[#38BDF8] to-[#0284C7]",
  "from-[#F472B6] to-[#DB2777]"
];

export const dataEn = {
  "title": "FARE Launchpad",
  "subtitle": "Move From Learning to Real-World Opportunities",
  "items": [
    {
      "title": "INTERNSHIPS",
      "text": "Get opportunities to gain practical industry exposure and understand how real estate businesses work."
    },
    {
      "title": "PLACEMENTS",
      "text": "Explore employment opportunities with participating real estate companies based on your skills, interests and career path."
    },
    {
      "title": "FREELANCE OPPORTUNITIES",
      "text": "Explore opportunities to work independently, take up projects and build experience across real estate sales, digital, content and supporting functions."
    },
    {
      "title": "NETWORKING",
      "text": "Connect with real estate companies, professionals and industry contacts to discover collaborations, opportunities and relationships."
    }
  ],
  "closing": ""
};

export const dataTe = {
  "title": "FARE లాంచ్‌ప్యాడ్",
  "subtitle": "అభ్యాసం నుండి వాస్తవ ప్రపంచ అవకాశాలకు వెళ్లండి",
  "items": [
    {
      "title": "ఇంటర్న్‌షిప్‌లు",
      "text": "ఆచరణాత్మక పరిశ్రమ ఎక్స్‌పోజర్‌ను పొందేందుకు మరియు రియల్ ఎస్టేట్ వ్యాపారాలు ఎలా పనిచేస్తాయో అర్థం చేసుకోవడానికి అవకాశాలను పొందండి."
    },
    {
      "title": "ప్లేస్‌మెంట్‌లు",
      "text": "మీ నైపుణ్యాలు, ఆసక్తులు మరియు కెరీర్ మార్గం ఆధారంగా పాల్గొనే రియల్ ఎస్టేట్ కంపెనీలతో ఉపాధి అవకాశాలను అన్వేషించండి."
    },
    {
      "title": "ఫ్రీలాన్స్ అవకాశాలు",
      "text": "రియల్ ఎస్టేట్ సేల్స్, డిజిటల్, కంటెంట్ మరియు సపోర్టింగ్ ఫంక్షన్‌లలో స్వతంత్రంగా పని చేయడానికి, ప్రాజెక్ట్‌లను చేపట్టడానికి మరియు అనుభవాన్ని పెంపొందించుకోవడానికి అవకాశాలను అన్వేషించండి."
    },
    {
      "title": "నెట్‌వర్కింగ్",
      "text": "సహకారాలు, అవకాశాలు మరియు సంబంధాలను కనుగొనడానికి రియల్ ఎస్టేట్ కంపెనీలు, నిపుణులు మరియు పరిశ్రమ పరిచయాలతో కనెక్ట్ అవ్వండి."
    }
  ],
  "closing": ""
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
