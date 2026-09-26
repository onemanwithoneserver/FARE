import type { Language } from "../../context/LanguageContext";

export const dataEn = {
  title: "Case Studies",
  studies: [
    {
      client: "Top Tier Developer",
      title: "Luxury Sales Conversion Uplift",
      domain: "Sales Skills",
      segment: "Luxury Residential",
      audience: "Senior Sales Managers",
      duration: "4 Weeks (Blended)",
      challenge: "The client was struggling with converting site visits for a premium luxury villa project. Sales cycles were extending beyond 90 days, and price objections were mishandled.",
      approach: "Conducted a baseline capability diagnostic followed by a 2-day immersive role-play workshop focused on consultative selling and high-ticket objection handling. Implemented 4 weeks of on-ground mentoring.",
      outcome: "Site visit to booking ratio increased from 4% to 11%. Average sales cycle reduced to 45 days. Successfully closed inventory worth ₹120 Cr within the quarter."
    },
    {
      client: "Mid-Market Brokerage",
      title: "Building a High-Performance Sales Engine",
      domain: "Leadership & Management",
      segment: "Plotted Development",
      audience: "Team Leads & Founders",
      duration: "3 Months Retainer",
      challenge: "High attrition rate among junior agents and lack of standardized pitch processes across teams.",
      approach: "Redesigned the onboarding process, established clear KPIs, and trained team leads on performance coaching rather than micromanagement.",
      outcome: "Attrition dropped by 30%. Agent productivity (calls to site visits) increased by 45%. Established a scalable sales playbook."
    }
  ]
};

export const dataTe = {
  title: "కేస్ స్టడీస్",
  studies: [
    {
      client: "అగ్రశ్రేణి డెవలపర్",
      title: "లగ్జరీ సేల్స్ కన్వర్షన్ అప్‌లిఫ్ట్",
      domain: "సేల్స్ స్కిల్స్",
      segment: "లగ్జరీ నివాస",
      audience: "సీనియర్ సేల్స్ మేనేజర్లు",
      duration: "4 వారాలు (బ్లెండెడ్)",
      challenge: "ప్రీమియం విల్లా ప్రాజెక్ట్ కోసం సైట్ సందర్శనలను మార్చడంలో క్లయింట్ ఇబ్బంది పడ్డాడు. అమ్మకాల చక్రాలు 90 రోజులకు మించి పొడిగించబడ్డాయి.",
      approach: "కన్సల్టేటివ్ సెల్లింగ్ మరియు అభ్యంతరాల నిర్వహణపై దృష్టి సారించి 2-రోజుల రోల్-ప్లే వర్క్‌షాప్‌ను నిర్వహించారు. 4 వారాల ఆన్-గ్రౌండ్ మెంటరింగ్ అమలు చేయబడింది.",
      outcome: "బుకింగ్ నిష్పత్తి 4% నుండి 11% కు పెరిగింది. సగటు విక్రయ చక్రం 45 రోజులకు తగ్గింది. ₹120 కోట్ల విలువైన జాబితా అమ్ముడైంది."
    },
    {
      client: "మిడ్-మార్కెట్ బ్రోకరేజ్",
      title: "హై-పెర్ఫార్మెన్స్ సేల్స్ ఇంజిన్‌ను నిర్మించడం",
      domain: "నాయకత్వం & నిర్వహణ",
      segment: "ప్లాట్ చేయబడిన అభివృద్ధి",
      audience: "టీమ్ లీడ్స్ & ఫౌండర్స్",
      duration: "3 నెలల రిటైనర్",
      challenge: "జూనియర్ ఏజెంట్లలో అధిక అట్రిషన్ రేటు మరియు జట్ల అంతటా ప్రామాణిక పిచ్ ప్రక్రియలు లేకపోవడం.",
      approach: "ఆన్‌బోర్డింగ్ ప్రక్రియను పునఃరూపకల్పన చేశారు, స్పష్టమైన KPIలను ఏర్పాటు చేశారు మరియు మైక్రో మేనేజ్‌మెంట్ కాకుండా పనితీరు కోచింగ్‌పై శిక్షణ ఇచ్చారు.",
      outcome: "అట్రిషన్ 30% పడిపోయింది. ఏజెంట్ ఉత్పాదకత 45% పెరిగింది. స్కేలబుల్ సేల్స్ ప్లేబుక్‌ని ఏర్పాటు చేశారు."
    }
  ]
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
