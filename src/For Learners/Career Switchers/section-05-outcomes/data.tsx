import type { Language } from "../../../context/LanguageContext";
import type { LucideIcon } from "lucide-react";
import { Compass, Move3d, Lightbulb, Workflow, Network, Briefcase } from "lucide-react";

export const ICONS: LucideIcon[] = [Compass, Move3d, Lightbulb, Workflow, Network, Briefcase];

export const GRADIENTS = [
  "from-[#FBBF24] to-[#D97706]",
  "from-[#38BDF8] to-[#0284C7]",
  "from-[#34D399] to-[#059669]",
  "from-[#F472B6] to-[#DB2777]",
  "from-[#A78BFA] to-[#7C3AED]",
  "from-[#F87171] to-[#DC2626]"
];

export const dataEn = {
  "title": "Outcomes You Can Achieve",
  "outcomes": [
    {
      "title": "Understand Real Estate",
      "text": "Build a strong foundation in the industry, its terminology, processes, segments and stakeholders."
    },
    {
      "title": "Identify Your Career Path",
      "text": "Understand where your existing experience and skills can fit within real estate."
    },
    {
      "title": "Build Domain Expertise",
      "text": "Add real estate knowledge to the professional skills you already possess."
    },
    {
      "title": "Apply Your Existing Skills",
      "text": "Learn how to transfer your experience into real estate-specific roles and situations."
    },
    {
      "title": "Build Industry Confidence",
      "text": "Practise real-world situations before stepping into your new role."
    },
    {
      "title": "Expand Your Professional Network",
      "text": "Connect with real estate companies, professionals, trainers and industry participants."
    }
  ],
  "quote": "Don't start over. Add real estate expertise to what you already know."
};

export const dataTe = {
  "title": "మీరు సాధించగల ఫలితాలు",
  "outcomes": [
    {
      "title": "రియల్ ఎస్టేట్ అర్థం చేసుకోండి",
      "text": "పరిశ్రమ, దాని పరిభాష, ప్రక్రియలు, విభాగాలు మరియు వాటాదారులలో బలమైన పునాదిని నిర్మించండి."
    },
    {
      "title": "మీ కెరీర్ మార్గాన్ని గుర్తించండి",
      "text": "మీ ప్రస్తుత అనుభవం మరియు నైపుణ్యాలు రియల్ ఎస్టేట్‌లో ఎక్కడ సరిపోతాయో అర్థం చేసుకోండి."
    },
    {
      "title": "డొమైన్ నైపుణ్యాన్ని రూపొందించండి",
      "text": "మీరు ఇప్పటికే కలిగి ఉన్న వృత్తిపరమైన నైపుణ్యాలకు రియల్ ఎస్టేట్ పరిజ్ఞానాన్ని జోడించండి."
    },
    {
      "title": "మీ ప్రస్తుత నైపుణ్యాలను వర్తించండి",
      "text": "మీ అనుభవాన్ని రియల్ ఎస్టేట్-నిర్దిష్ట పాత్రలు మరియు పరిస్థితులకు ఎలా బదిలీ చేయాలో తెలుసుకోండి."
    },
    {
      "title": "ఇండస్ట్రీ కాన్ఫిడెన్స్ బిల్డ్",
      "text": "మీ కొత్త పాత్రలో అడుగు పెట్టడానికి ముందు వాస్తవ ప్రపంచ పరిస్థితులను ప్రాక్టీస్ చేయండి."
    },
    {
      "title": "మీ వృత్తిపరమైన నెట్‌వర్క్‌ని విస్తరించండి",
      "text": "రియల్ ఎస్టేట్ కంపెనీలు, నిపుణులు, శిక్షకులు మరియు పరిశ్రమలో పాల్గొనే వారితో కనెక్ట్ అవ్వండి."
    }
  ],
  "quote": "మళ్లీ ప్రారంభించవద్దు. మీకు ఇప్పటికే తెలిసిన వాటికి రియల్ ఎస్టేట్ నైపుణ్యాన్ని జోడించండి."
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
