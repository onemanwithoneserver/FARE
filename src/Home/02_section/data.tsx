import type { Language } from "../../context/LanguageContext";

export interface ComingSoonFeature {
  title: string;
  iconName: "Bot" | "ShieldCheck" | "Award" | "Sparkles";
  color: string;
}

export interface Section02Data {
  badge: string;
  headline: string;
  subtitle: string;
  offer: {
    tag: string;
    title: string;
    cta: string;
  };
  contact: {
    title: string;
    email: string;
    phone: string;
    hours: string;
  };
  comingSoonCard: {
    tag: string;
    title: string;
    description: string;
    features: ComingSoonFeature[];
    floatingBadge: {
      tag: string;
      title: string;
    };
  };
}

export const dataEn: Section02Data = {
  badge: "REAL ESTATE ACADEMY",
  headline: "Learn Real Estate From Industry Experts",
  subtitle:
    "Structured, practical courses for employees, freelancers, career switchers and freshers. Build skills, practise real situations and grow with confidence.",
  offer: {
    tag: "Coming Soon",
    title: "Exclusive early launch offers for first learners",
    cta: "Register for Early Launch",
  },
  contact: {
    title: "Contact Us & Early Inquiries",
    email: "hello@yardstack.in",
    phone: "+91 950 243 7979",
    hours: "Mon – Fri, 9:30 AM to 6:30 PM IST",
  },
  comingSoonCard: {
    tag: "FARE ACADEMY",
    title: "Coming Soon",
    description:
      "Our next level collection of real estate and finishing academy features is on its way.",
    features: [
      {
        title: "AI Sales & Objection Simulator",
        iconName: "Bot",
        color: "#2563EB",
      },
      {
        title: "RERA & Legal Compliance Vault",
        iconName: "ShieldCheck",
        color: "#C99A2E",
      },
      {
        title: "Verified Industry Skill Passport",
        iconName: "Award",
        color: "#059669",
      },
      {
        title: "High-Ticket Closing Masterminds",
        iconName: "Sparkles",
        color: "#7C3AED",
      },
    ],
    floatingBadge: {
      tag: "Early Launch",
      title: "Special offers await",
    },
  },
};

export const dataTe: Section02Data = {
  badge: "రియల్ ఎస్టేట్ అకాడమీ",
  headline: "పరిశ్రమ నిపుణుల నుండి రియల్ ఎస్టేట్ నేర్చుకోండి",
  subtitle:
    "ఉద్యోగులు, ఫ్రీలాన్సర్లు, కెరీర్ స్విచ్చర్లు మరియు ఫ్రెషర్ల కోసం ఆచరణాత్మక కోర్సులు. నైపుణ్యాలను పెంపొందించుకోండి మరియు విశ్వాసంతో వృద్ధి చెందండి.",
  offer: {
    tag: "త్వరలో రాబోతోంది",
    title: "మొదటి అభ్యాసకుల కోసం ప్రత్యేక ముందస్తు లాంచ్ ఆఫర్లు",
    cta: "ముందస్తు రిజిస్ట్రేషన్ చేసుకోండి",
  },
  contact: {
    title: "సంప్రదింపులు & ముందస్తు వివరాలు",
    email: "hello@yardstack.in",
    phone: "+91 950 243 7979",
    hours: "సోమ – శుక్ర, ఉదయం 9:30 నుండి సాయంత్రం 6:30 వరకు IST",
  },
  comingSoonCard: {
    tag: "ఫేర్ అకాడమీ",
    title: "త్వరలో రాబోతోంది",
    description:
      "అత్యాధునిక రియల్ ఎస్టేట్ శిక్షణా మాడ్యూల్స్ మరియు సర్టిఫికేషన్లు త్వరలోనే అందుబాటులోకి రానున్నాయి.",
    features: [
      {
        title: "AI సేల్స్ & అబ్జెక్షన్ సిమ్యులేటర్",
        iconName: "Bot",
        color: "#2563EB",
      },
      {
        title: "RERA & లీగల్ కాంప్లయన్స్ వాల్ట్",
        iconName: "ShieldCheck",
        color: "#C99A2E",
      },
      {
        title: "వెరిఫైడ్ స్కిల్ పాస్‌పోర్ట్",
        iconName: "Award",
        color: "#059669",
      },
      {
        title: "డీల్ క్లోజింగ్ మాస్టర్‌మైండ్స్",
        iconName: "Sparkles",
        color: "#7C3AED",
      },
    ],
    floatingBadge: {
      tag: "ముందస్తు లాంచ్",
      title: "ప్రత్యేక ఆఫర్లు అందుబాటులో ఉన్నాయి",
    },
  },
};

export const getData = (lang: Language): Section02Data => {
  return lang === "te" ? dataTe : dataEn;
};
