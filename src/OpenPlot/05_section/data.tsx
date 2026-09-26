import type { Language } from "../../context/LanguageContext";
export const dataEn = {
  overline: "Evaluation",
  title: "Free Evaluation",
  headline: "How strong is your team's Open Plot knowledge?",
  desc1: "Don't wait for performance issues to tell you where the gaps are.",
  desc2:
    "Take the FARE Free Evaluation Test and get a snapshot of your team's knowledge across key areas.",
  testAreas: [
    "Real Estate Fundamentals",
    "Open Plot Knowledge",
    "Product Knowledge",
    "Location & Market Knowledge",
    "Sales Knowledge",
  ],
  evaluationFlow: "21 Questions → Score → Knowledge Snapshot",
  primaryButton: "How it works",
  secondaryButton: "Evaluate My Team",
  footerText:
    "Use the evaluation as a starting point for identifying learning and training requirements.",
  illustrationData: {
    title: "Evaluation Flow",
    subtitle: "Standardized Assessment",
  },
};
export const dataTe = {
  overline: "Evaluation",
  title: "Free Evaluation",
  headline: "మీ టీమ్కు Open Plot Knowledge ఎంత బలంగా ఉంది?",
  desc1:
    "Performance Issues బయటపడే వరకు Knowledge Gaps ఎక్కడున్నాయో తెలుసుకోవడానికి వేచి ఉండకండి.",
  desc2:
    "FARE Free Evaluation Test తీసుకుని, మీ టీమ్ Knowledgeను ముఖ్యమైన అంశాల్లో అంచనా వేయండి.",
  testAreas: [
    "Real Estate Fundamentals",
    "Open Plot Knowledge",
    "Product Knowledge",
    "Location & Market Knowledge",
    "Sales Knowledge",
  ],
  evaluationFlow: "21 Questions → Score → Knowledge Snapshot",
  primaryButton: "How it works",
  secondaryButton: "నా టీమ్ను Evaluate చేయండి",
  footerText:
    "Learning మరియు Training Requirementsను గుర్తించడానికి ఈ Evaluationను ఒక Starting Pointగా ఉపయోగించండి.",
  illustrationData: {
    title: "ఎవాల్యుయేషన్ ఫ్లో",
    subtitle: "ప్రామాణిక మదింపు",
  },
};
export const getData = (lang: Language = "en") =>
  lang === "te" ? dataTe : dataEn;
export const data = dataEn;
