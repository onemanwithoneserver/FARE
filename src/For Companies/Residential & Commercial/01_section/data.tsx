import type { Language } from "../../../context/LanguageContext";
export const dataEn = {
  tagline: "Skill Enhancement For Real Estate",
  headline: "FARE for Residential & Commercial Companies",
  subheadline: "Hone your Sales Team & Channel Partner Skills",
  subheadlineAccent: "With a Custom RE Learning System.",
  description:
    "Give your sales and channel partner teams the project knowledge, practical skills and continuous learning they need to perform better.",
  buttons: {
    primary: "Book a Demo",
    secondary: "How it works",
  },
  features: ["Project Knowledge", "Knowledge Bank", "Mocks", "Trainer Network"],
  footerText:
    "Built specifically for the needs of Residential & Commercial Real Estate businesses.",
  dashboard: {
    title: "RE Mastery",
    stats: [
      {
        title: "Project Knowledge",
        progress: "100%",
        progressNum: 100,
        color: "#34D399",
      },
      {
        title: "Knowledge Bank",
        progress: "85%",
        progressNum: 85,
        color: "#60A5FA",
      },
      { title: "Mocks", progress: "70%", progressNum: 70, color: "#C99A2E" },
      {
        title: "Trainer Network",
        progress: "92%",
        progressNum: 92,
        color: "#F472B6",
      },
    ],
    floatingBadge: {
      title: "Team Ready",
      subtitle: "For next project",
    },
  },
};
export const dataTe = {
  tagline: "రియల్ ఎస్టేట్ కోసం నైపుణ్యాల పెంపు",
  headline: "రెసిడెన్షియల్ & కమర్షియల్ కంపెనీల కోసం FARE",
  subheadline: "మీ సేల్స్ టీమ్ & ఛానల్ పార్ట్నర్ స్కిల్స్ మెరుగుపరచండి",
  subheadlineAccent: "కస్టమ్ RE లెర్నింగ్ సిస్టమ్‌తో.",
  description:
    "మీ సేల్స్ మరియు ఛానల్ పార్టనర్ టీమ్‌లకు మెరుగ్గా పని చేయడానికి అవసరమైన ప్రాజెక్ట్ నాలెడ్జ్, ప్రాక్టికల్ స్కిల్స్ మరియు నిరంతర అభ్యాసాన్ని అందించండి.",
  buttons: {
    primary: "డెమో కోసం బుక్ చేయండి",
    secondary: "How it works",
  },
  features: [
    "ప్రాజెక్ట్ నాలెడ్జ్",
    "నాలెడ్జ్ బ్యాంక్",
    "మాక్స్",
    "ట్రైనర్ నెట్‌వర్క్",
  ],
  footerText:
    "ప్రత్యేకంగా రెసిడెన్షియల్ & కమర్షియల్ రియల్ ఎస్టేట్ వ్యాపారాల అవసరాలను దృష్టిలో పెట్టుకుని రూపొందించబడింది.",
  dashboard: {
    title: "RE మాస్టరీ",
    stats: [
      {
        title: "ప్రాజెక్ట్ నాలెడ్జ్",
        progress: "100%",
        progressNum: 100,
        color: "#34D399",
      },
      {
        title: "నాలెడ్జ్ బ్యాంక్",
        progress: "85%",
        progressNum: 85,
        color: "#60A5FA",
      },
      { title: "మాక్స్", progress: "70%", progressNum: 70, color: "#C99A2E" },
      {
        title: "ట్రైనర్ నెట్‌వర్క్",
        progress: "92%",
        progressNum: 92,
        color: "#F472B6",
      },
    ],
    floatingBadge: {
      title: "టీమ్ రెడీ",
      subtitle: "తదుపరి ప్రాజెక్ట్ కోసం",
    },
  },
};
export const getData = (lang: Language = "en") =>
  lang === "te" ? dataTe : dataEn;
export const data = dataEn;
