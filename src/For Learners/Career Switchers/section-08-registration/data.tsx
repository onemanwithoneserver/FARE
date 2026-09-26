import type { Language } from "../../../context/LanguageContext";

export const dataEn = {
  "title": "Ready to Make the Switch?",
  "subtitle": "Bring Your Experience. Build Your Real Estate Expertise. Start Your New Career.",
  "description": "Start your FARE journey with a free self-evaluation and discover how your existing skills can translate into real estate opportunities.",
  "buttons": {
    "primary": "Start Free Self-Evaluation",
    "secondary": "Register with FARE"
  },
  "footer": "Self-Evaluation · Learning Programs · Skill Practice · Career Guidance · Opportunity Access"
};

export const dataTe = {
  "title": "స్విచ్ చేయడానికి సిద్ధంగా ఉన్నారా?",
  "subtitle": "మీ అనుభవాన్ని తీసుకురండి. మీ రియల్ ఎస్టేట్ నైపుణ్యాన్ని రూపొందించండి. మీ కొత్త కెరీర్‌ని ప్రారంభించండి.",
  "description": "ఉచిత స్వీయ-మూల్యాంకనంతో మీ FARE ప్రయాణాన్ని ప్రారంభించండి మరియు మీ ప్రస్తుత నైపుణ్యాలను రియల్ ఎస్టేట్ అవకాశాలుగా ఎలా అనువదించవచ్చో కనుగొనండి.",
  "buttons": {
    "primary": "ఉచిత స్వీయ-మూల్యాంకనం ప్రారంభించండి",
    "secondary": "FAREతో నమోదు చేసుకోండి"
  },
  "footer": "స్వీయ-మూల్యాంకనం · అభ్యాస కార్యక్రమాలు · నైపుణ్య సాధన · కెరీర్ మార్గదర్శకత్వం · అవకాశ యాక్సెస్"
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
