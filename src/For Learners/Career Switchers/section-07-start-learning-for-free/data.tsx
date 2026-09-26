import type { Language } from "../../../context/LanguageContext";
import type { LucideIcon } from "lucide-react";
import { MessageCircle, GraduationCap } from "lucide-react";

export const ICONS: LucideIcon[] = [MessageCircle, GraduationCap];

export const GRADIENTS = [
  "from-[#22C55E] to-[#15803D]",
  "from-[#C99A2E] to-[#9A741E]"
];

export const dataEn = {
  "title": "Start Your Real Estate Journey Today",
  "subtitle": "You don't have to leave your experience behind to enter a new industry.",
  "items": [
    {
      "title": "Join Our WhatsApp Community",
      "text": "Stay connected with real estate learning, industry knowledge, tips and opportunities.",
      "cta": "Join WhatsApp Community"
    },
    {
      "title": "Enroll for a Free Course",
      "text": "Experience FARE with a free learning program designed to help you understand real estate.",
      "cta": "Enroll for FREE Course"
    }
  ],
  "quote": "Start learning. Build domain expertise. Make your move."
};

export const dataTe = {
  "title": "ఈరోజే మీ రియల్ ఎస్టేట్ జర్నీ ప్రారంభించండి",
  "subtitle": "కొత్త పరిశ్రమలోకి ప్రవేశించడానికి మీరు మీ అనుభవాన్ని వదిలివేయవలసిన అవసరం లేదు.",
  "items": [
    {
      "title": "మా WhatsApp సంఘంలో చేరండి",
      "text": "రియల్ ఎస్టేట్ లెర్నింగ్, ఇండస్ట్రీ పరిజ్ఞానం, చిట్కాలు మరియు అవకాశాలతో కనెక్ట్ అయి ఉండండి.",
      "cta": "WhatsApp సంఘంలో చేరండి"
    },
    {
      "title": "ఉచిత కోర్సు కోసం నమోదు చేసుకోండి",
      "text": "రియల్ ఎస్టేట్‌ను అర్థం చేసుకోవడంలో మీకు సహాయపడటానికి రూపొందించబడిన ఉచిత లెర్నింగ్ ప్రోగ్రామ్‌తో FAREని అనుభవించండి.",
      "cta": "ఉచిత కోర్సు కోసం నమోదు చేసుకోండి"
    }
  ],
  "quote": "నేర్చుకోవడం ప్రారంభించండి. డొమైన్ నైపుణ్యాన్ని రూపొందించండి. మీ కదలికను చేయండి."
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
