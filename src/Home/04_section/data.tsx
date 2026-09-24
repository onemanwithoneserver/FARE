import type { Language } from "../../context/LanguageContext";
export const dataEn = {
  title: "04_section",
  academyText: "FARE",
  headline: {
    line1: "FINISHING ACADEMY FOR",
    line2: "REAL ESTATE",
    subtitle:
      "A custom LMS designed exclusively for the needs of real estate professionals.",
  },
  buttons: [
    "Register as a Learner",
    "Register as a Trainer",
    "Register as a Company",
  ],
  trustBadges: [
    { title: "Ready-to-use Quizzes", subtitle: "", icon: "shield" },
    { title: "Ready-made Mock Scenarios", subtitle: "", icon: "target" },
    { title: "Wide Range of Courses", subtitle: "", icon: "chart" },
  ],
  cornerLabels: {
    topLeft: ["LEARN", "PRACTISE", "BENCHMARK", "BUILD"],
    bottomLeft: ["BETTER", "PEOPLE", "BRIGHTER", "TOMORROW"],
    topRight: ["REAL", "ESTATE", "PEOPLE", "PROGRESS"],
    bottomRight: ["KNOWLEDGE", "CREATES", "OPPORTUNITY"],
  },
  companyDropdown: [
    {
      title: "Residential & Commercial",
      path: "re-companies",
    },
    {
      title: "Open Plots",
      path: "open-plots",
    },
  ],
};
export const dataTe = {
  title: "04_section",
  academyText: "ఫేర్ అకాడమీ",
  headline: {
    line1: "రియల్ ఎస్టేట్ ఎక్సలెన్స్ కోసం",
    line2: "సంస్థాగత ప్రామాణికత.",
    subtitle:
      "నిజ జీవిత అభ్యాసం, ప్రాక్టికల్ టూల్స్ మరియు బెంచ్‌మార్క్‌లతో నిపుణులను, సంస్థలను బలోపేతం చేయడం.",
  },
  buttons: [
    "అభ్యాసకుడిగా నమోదు చేసుకోండి",
    "ట్రైనర్‌గా నమోదు చేసుకోండి",
    "కంపెనీగా నమోదు చేసుకోండి",
  ],
  trustBadges: [
    {
      title: "100% RERA & లీగల్ ఫ్రేమ్‌వర్క్ కంప్లైంట్",
      subtitle: "విశ్వసనీయమైనది. చట్టబద్ధమైనది. భవిష్యత్తుకు సిద్ధం.",
      icon: "shield",
    },
    {
      title: "లైవ్ సిమ్యులేటెడ్ AI & మాస్టర్ కోచ్ ల్యాబ్‌లు",
      subtitle: "చేస్తూ నేర్చుకోండి. నిజ జీవితంలో రాణించండి.",
      icon: "target",
    },
    {
      title: "రియల్-టైమ్ టాప్ 5% పీర్ బెంచ్‌మార్క్‌లు",
      subtitle: "కొలవండి. మెరుగుపరచండి. ముందుండండి.",
      icon: "chart",
    },
  ],
  cornerLabels: {
    topLeft: ["నేర్చుకోండి", "ప్రాక్టీస్", "బెంచ్‌మార్క్", "నిర్మించండి"],
    bottomLeft: ["మెరుగైన", "ప్రజలు", "ఉజ్వల", "భవిష్యత్తు"],
    topRight: ["రియల్", "ఎస్టేట్", "ప్రజలు", "ప్రగతి"],
    bottomRight: ["జ్ఞానం", "అవకాశాలను", "సృష్టిస్తుంది"],
  },
  companyDropdown: [
    {
      title: "రెసిడెన్షియల్ & కమర్షియల్",
      path: "re-companies",
    },
    {
      title: "ఓపెన్ ప్లాట్స్",
      path: "open-plots",
    },
  ],
};
export const getData = (lang: Language = "en") =>
  lang === "te" ? dataTe : dataEn;
export const data = dataEn;
