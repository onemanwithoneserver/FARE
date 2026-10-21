import type { Language } from "../../context/LanguageContext";

export interface FeatureItem {
  id: string;
  title: string;
  tag: string;
  description: string;
  badge: string;
  stats: string;
  color: string;
  accentBg: string;
  iconName: "Bot" | "ShieldCheck" | "Award" | "Sparkles" | "TrendingUp" | "Zap";
}

export interface Section02Data {
  title: string;
  eyebrow: string;
  badgeText: string;
  headline: {
    line1: string;
    highlight: string;
    line2: string;
    description: string;
  };
  logoCard: {
    brandName: string;
    brandSubtitle: string;
    tagline: string;
    status: string;
    experienceBadge: string;
    metrics: { label: string; value: string }[];
    pills: string[];
  };
  features: FeatureItem[];
  earlyAccess: {
    badge: string;
    title: string;
    subtitle: string;
    placeholder: string;
    buttonText: string;
    successMessage: string;
    waitlistCount: string;
    perks: string[];
  };
}

export const dataEn: Section02Data = {
  title: "02_section",
  eyebrow: "COMING SOON",
  badgeText: "PHASE II PLATFORM EXPANSION",
  headline: {
    line1: "NEXT-GEN PLATFORM",
    highlight: "POWERING",
    line2: "REAL ESTATE EXCELLENCE",
  },
  logoCard: {
    brandName: "FARE",
    brandSubtitle: "Finishing Academy for Real Estate",
    tagline: "Better People Build Better Real Estate",
    status: "Upcoming Module",
    experienceBadge: "Official Academy Portal",
    metrics: [
      { label: "Active Learners", value: "12,500+" },
      { label: "Builder Partners", value: "85+" },
      { label: "Avg Career Growth", value: "45%" },
    ],
    pills: [
      "AI-Powered Roleplay",
      "Industry Certified",
      "RERA Compliant",
      "Top 1% Mentors",
    ],
  },
  features: [
    {
      id: "ai-simulator",
      title: "AI Client & Pitch Simulator",
      tag: "INTERACTIVE AI",
      description:
        "Practice high-stakes client negotiations and objection handling with adaptive AI buyer personas across open plots, residential & commercial deals.",
      badge: "Beta Testing",
      stats: "100+ Deal Scenarios",
      color: "#3B82F6",
      accentBg: "rgba(59, 130, 246, 0.08)",
      iconName: "Bot",
    },
    {
      id: "deal-vault",
      title: "RERA & Legal Deal Vault",
      tag: "LEGAL & COMPLIANCE",
      description:
        "Instant access to verified legal deed templates, title investigation checklists, and RERA compliance playbooks vetted by senior property lawyers.",
      badge: "In Production",
      stats: "100% Vetted Standards",
      color: "#C99A2E",
      accentBg: "rgba(201, 154, 46, 0.08)",
      iconName: "ShieldCheck",
    },
    {
      id: "expert-passport",
      title: "Verified Skill Passport",
      tag: "CREDENTIALS",
      description:
        "Blockchain-verifiable digital achievement badges recognized by leading property developers, corporate IPCs, and brokerage houses nationwide.",
      badge: "Accredited",
      stats: "50+ Developer Tie-Ups",
      color: "#10B981",
      accentBg: "rgba(16, 185, 129, 0.08)",
      iconName: "Award",
    },
    {
      id: "live-mastermind",
      title: "Deal-Closing Masterminds",
      tag: "LIVE WORKSHOPS",
      description:
        "Weekly live tactical pitch clinics, high-ticket closing breakdowns, and direct mentorship sessions with India's highest-grossing realtors.",
      badge: "Exclusive Access",
      stats: "Weekly Live Sessions",
      color: "#8B5CF6",
      accentBg: "rgba(139, 92, 246, 0.08)",
      iconName: "Sparkles",
    },
  ],
  earlyAccess: {
    badge: "VIP WAITLIST OPEN",
    title: "Be the First to Experience the New Academy",
    subtitle:
      "Join over 2,450+ real estate professionals waiting for exclusive Phase II beta access.",
    placeholder: "Enter your professional email...",
    buttonText: "Join Priority Waitlist",
    successMessage:
      "🎉 You're on the priority VIP list! We will notify you before the public release.",
    waitlistCount: "2,450+ on waitlist",
    perks: [
      "Priority Beta Access",
      "Exclusive Launch Toolkit",
      "Invitation to Private Mastermind",
    ],
  },
};

export const dataTe: Section02Data = {
  title: "02_section",
  eyebrow: "త్వరలో రాబోతోంది",
  badgeText: "ఫేర్ ఫేజ్ II విస్తరణ",
  headline: {
    line1: "నూతన తరం ఆవిష్కరణలు",
    highlight: "రియల్ ఎస్టేట్ రంగానికి",
    line2: "మరింత బలం & విజయం",
    description:
      "మీ రియల్ ఎస్టేట్ కెరీర్‌ను ఉన్నత శిఖరాలకు తీసుకెళ్లేందుకు అత్యాధునిక AI శిక్షణ, ఆచరణాత్మక మార్కెట్ విశ్లేషణలు మరియు సర్టిఫైడ్ మాస్టర్‌క్లాస్‌లను సిద్ధం చేస్తున్నాము.",
  },
  logoCard: {
    brandName: "FARE",
    brandSubtitle: "ఫినిషింగ్ అకాడమీ ఫర్ రియల్ ఎస్టేట్",
    tagline: "మెరుగైన వ్యక్తులు మెరుగైన రియల్ ఎస్టేట్‌ను నిర్మిస్తారు",
    status: "త్వరలో రానున్న మాడ్యూల్",
    experienceBadge: "అధికారిక అకాడమీ పోర్టల్",
    metrics: [
      { label: "క్రియాశీల అభ్యాసకులు", value: "12,500+" },
      { label: "భాగస్వామ్య బిల్డర్లు", value: "85+" },
      { label: "కెరీర్ వృద్ధి సగటు", value: "45%" },
    ],
    pills: [
      "AI రోల్‌ప్లే శిక్షణ",
      "పరిశ్రమ గుర్తింపు",
      "RERA చట్టాలు",
      "టాప్ మెంటార్లు",
    ],
  },
  features: [
    {
      id: "ai-simulator",
      title: "AI సేల్స్ & పిచ్ సిమ్యులేటర్",
      tag: "ఇంటరాక్టివ్ AI",
      description:
        "ఓపెన్ ప్లాట్లు, రెసిడెన్షియల్ మరియు కమర్షియల్ ఒప్పందాల కోసం క్లయింట్ అభ్యంతరాలను ఎదుర్కొనేలా రూపొందించిన వినూత్న AI శిక్షణ.",
      badge: "బీటా టెస్టింగ్",
      stats: "100+ రియల్ దృశ్యాలు",
      color: "#3B82F6",
      accentBg: "rgba(59, 130, 246, 0.08)",
      iconName: "Bot",
    },
    {
      id: "deal-vault",
      title: "RERA & లీగల్ కాంట్రాక్ట్ వాల్ట్",
      tag: "చట్టపరమైన రక్షణ",
      description:
        "అనుభవజ్ఞులైన లాయర్లు రూపొందించిన లీగల్ డాక్యుమెంట్లు, టైటిల్ ఇన్వెస్టిగేషన్ చెక్‌లిస్టులు మరియు RERA మార్గదర్శకాలు.",
      badge: "రూపకల్పనలో ఉంది",
      stats: "100% ధృవీకరించబడినవి",
      color: "#C99A2E",
      accentBg: "rgba(201, 154, 46, 0.08)",
      iconName: "ShieldCheck",
    },
    {
      id: "expert-passport",
      title: "ఇండస్ట్రీ-వెరిఫైడ్ స్కిల్ పాస్‌పోర్ట్",
      tag: "సర్టిఫికేషన్",
      description:
        "అగ్రగామి డెవలపర్లు మరియు రియల్ ఎస్టేట్ సంస్థలు అధికారికంగా గుర్తించే డిజిటల్ వెరిఫైడ్ స్కిల్ పాస్‌పోర్ట్.",
      badge: "అధికారిక గుర్తింపు",
      stats: "50+ బిల్డర్ భాగస్వాములు",
      color: "#10B981",
      accentBg: "rgba(16, 185, 129, 0.08)",
      iconName: "Award",
    },
    {
      id: "live-mastermind",
      title: "ఎక్స్‌క్లూజివ్ డీల్ క్లోజింగ్ మాస్టర్‌మైండ్",
      tag: "ప్రత్యక్ష శిక్షణ",
      description:
        "టాప్ రియల్ ఎస్టేట్ నిపుణులతో వారపు లైవ్ పిచ్ వర్క్‌షాప్‌లు మరియు పెద్ద డీల్స్ క్లోజ్ చేసే వ్యూహాలు.",
      badge: "ప్రత్యేక ప్రవేశం",
      stats: "ప్రతి వారం లైవ్ సెషన్లు",
      color: "#8B5CF6",
      accentBg: "rgba(139, 92, 246, 0.08)",
      iconName: "Sparkles",
    },
  ],
  earlyAccess: {
    badge: "VIP వెయిట్‌లిస్ట్ ప్రారంభం",
    title: "కొత్త ఫేర్ అకాడమీని ముందుగా అనుభవించండి",
    subtitle:
      "ఫేజ్ II బీటా యాక్సెస్ కోసం వేచి చూస్తున్న 2,450+ రియల్ ఎస్టేట్ నిపుణులతో చేరండి.",
    placeholder: "మీ ఇమెయిల్ నమోదు చేయండి...",
    buttonText: "వెయిట్‌లిస్ట్‌లో చేరండి",
    successMessage:
      "🎉 మీరు ప్రాధాన్యత VIP జాబితాలో చేరారు! లాంచ్ సమాచారం ముందుగా మీకు చేరుతుంది.",
    waitlistCount: "2,450+ మంది సభ్యులు",
    perks: [
      "ప్రాధాన్యత బీటా యాక్సెస్",
      "ఉచిత లాంచ్ టూల్‌కిట్",
      "లైవ్ మాస్టర్‌మైండ్ ఆహ్వానం",
    ],
  },
};

export const getData = (lang: Language): Section02Data => {
  return lang === "te" ? dataTe : dataEn;
};
