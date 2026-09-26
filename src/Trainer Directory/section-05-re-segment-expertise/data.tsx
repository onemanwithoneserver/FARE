import type { Language } from "../../context/LanguageContext";

export const dataEn = {
  title: "Real Estate Segments",
  segments: [
    {
      segment: "Residential",
      subSegments: ["Affordable Housing", "Premium Apartments", "Luxury Villas"],
      icon: "building"
    },
    {
      segment: "Plotted Development",
      subSegments: ["Gated Communities", "Investment Plots", "Farm Houses"],
      icon: "map"
    },
    {
      segment: "Commercial",
      subSegments: ["Office Spaces", "Retail Outlets", "Co-working"],
      icon: "briefcase"
    }
  ]
};

export const dataTe = {
  title: "రియల్ ఎస్టేట్ విభాగాలు",
  segments: [
    {
      segment: "నివాస",
      subSegments: ["సరసమైన ఇళ్ళు", "ప్రీమియం అపార్ట్‌మెంట్‌లు", "లగ్జరీ విల్లాలు"],
      icon: "building"
    },
    {
      segment: "ప్లాట్ చేయబడిన అభివృద్ధి",
      subSegments: ["గేటెడ్ కమ్యూనిటీలు", "పెట్టుబడి ప్లాట్లు", "ఫార్మ్ హౌస్‌లు"],
      icon: "map"
    },
    {
      segment: "వాణిజ్య",
      subSegments: ["ఆఫీస్ స్పేస్‌లు", "రిటైల్ అవుట్‌లెట్‌లు", "కో-వర్కింగ్"],
      icon: "briefcase"
    }
  ]
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
