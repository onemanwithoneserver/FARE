import type { Language } from "../../../context/LanguageContext";
import { Lightbulb, BookOpen, Target, Sparkles, Award, Users } from "lucide-react";

export const ICONS = [Lightbulb, BookOpen, Target, Sparkles, Award, Users];

export const GRADIENTS = [
  "from-[#FBBF24] to-[#D97706]", "from-[#38BDF8] to-[#0284C7]", "from-[#34D399] to-[#059669]", 
  "from-[#A78BFA] to-[#7C3AED]", "from-[#F87171] to-[#DC2626]", "from-[#F472B6] to-[#DB2777]"
];

export const dataEn = {
  "title": "What Can You Walk Away With?",
  "subtitle": "FARE is designed to help you move beyond simply completing a course.",
  "experiences": [
    {
      "title": "Know your possible career paths",
      "label": "CLARITY",
      "text": "Know your possible career paths and where you want to start."
    },
    {
      "title": "Build a strong foundation",
      "label": "KNOWLEDGE",
      "text": "Build a strong foundation in real estate and your chosen area."
    },
    {
      "title": "Develop practical skills",
      "label": "SKILLS",
      "text": "Develop practical skills relevant to real-world roles and opportunities."
    },
    {
      "title": "Practise real situations",
      "label": "CONFIDENCE",
      "text": "Practise real situations before stepping into the industry."
    },
    {
      "title": "Build evidence",
      "label": "CREDENTIALS",
      "text": "Build evidence of your learning, knowledge and skill development."
    },
    {
      "title": "Access opportunities",
      "label": "OPPORTUNITIES",
      "text": "Access employment, networking and independent career opportunities."
    }
  ],
  "closing": "Learn. Practise. Connect. Launch your career."
};

export const dataTe = {
  "title": "మీరు దేనితో నడిచివెళ్లగలరు?",
  "subtitle": "కేవలం కోర్సును పూర్తి చేయడం కంటే ముందుకు సాగడంలో మీకు సహాయపడటానికి FARE రూపొందించబడింది.",
  "experiences": [
    {
      "title": "మీ కెరీర్ మార్గాలను తెలుసుకోండి",
      "label": "స్పష్టత",
      "text": "మీరు ఎంచుకోగల కెరీర్ మార్గాలు మరియు మీరు ఎక్కడ ప్రారంభించాలనుకుంటున్నారో తెలుసుకోండి."
    },
    {
      "title": "బలమైన పునాదిని నిర్మించుకోండి",
      "label": "జ్ఞానం",
      "text": "రియల్ ఎస్టేట్ మరియు మీరు ఎంచుకున్న రంగంలో బలమైన పునాదిని నిర్మించుకోండి."
    },
    {
      "title": "ఆచరణాత్మక నైపుణ్యాలను అభివృద్ధి చేయండి",
      "label": "నైపుణ్యాలు",
      "text": "వాస్తవ-ప్రపంచ పాత్రలు మరియు అవకాశాలకు సంబంధించిన ఆచరణాత్మక నైపుణ్యాలను అభివృద్ధి చేయండి."
    },
    {
      "title": "వాస్తవ పరిస్థితులను ప్రాక్టీస్ చేయండి",
      "label": "ఆత్మవిశ్వాసం",
      "text": "పరిశ్రమలోకి అడుగుపెట్టే ముందు వాస్తవ పరిస్థితులను ప్రాక్టీస్ చేయండి."
    },
    {
      "title": "ఆధారాలను నిర్మించండి",
      "label": "క్రెడెన్షియల్స్",
      "text": "మీ అభ్యాసం, జ్ఞానం మరియు నైపుణ్యాభివృద్ధికి సంబంధించిన ఆధారాలను రూపొందించండి."
    },
    {
      "title": "అవకాశాలను యాక్సెస్ చేయండి",
      "label": "అవకాశాలు",
      "text": "ఉపాధి, నెట్‌వర్కింగ్ మరియు స్వతంత్ర కెరీర్ అవకాశాలను యాక్సెస్ చేయండి."
    }
  ],
  "closing": "నేర్చుకోండి. ప్రాక్టీస్ చేయండి. కనెక్ట్ అవ్వండి. మీ కెరీర్‌ను ప్రారంభించండి."
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
