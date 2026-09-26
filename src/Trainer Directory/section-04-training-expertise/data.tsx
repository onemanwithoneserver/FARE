import type { Language } from "../../context/LanguageContext";

export const dataEn = {
  title: "Training Expertise",
  domains: [
    {
      domain: "Sales Skills",
      subDomains: ["High-Ticket Closing", "Objection Handling", "Lead Qualification", "Site Visit Conversion"],
      level: "Advanced"
    },
    {
      domain: "Communication",
      subDomains: ["Client Consultation", "Needs Analysis", "Persuasive Pitching"],
      level: "Advanced"
    },
    {
      domain: "Leadership & Management",
      subDomains: ["Sales Team Building", "Performance Metrics", "Pipeline Management"],
      level: "Intermediate"
    }
  ]
};

export const dataTe = {
  title: "శిక్షణ నైపుణ్యం",
  domains: [
    {
      domain: "సేల్స్ స్కిల్స్",
      subDomains: ["హై-టికెట్ క్లోజింగ్", "అభ్యంతరాల నిర్వహణ", "లీడ్ అర్హత", "సైట్ విజిట్ మార్పిడి"],
      level: "అధునాతన"
    },
    {
      domain: "కమ్యూనికేషన్",
      subDomains: ["క్లయింట్ సంప్రదింపులు", "అవసరాల విశ్లేషణ", "ఆకట్టుకునే పిచ్"],
      level: "అధునాతన"
    },
    {
      domain: "నాయకత్వం & నిర్వహణ",
      subDomains: ["సేల్స్ టీమ్ బిల్డింగ్", "పనితీరు కొలమానాలు", "పైప్‌లైన్ మేనేజ్‌మెంట్"],
      level: "ఇంటర్మీడియట్"
    }
  ]
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
