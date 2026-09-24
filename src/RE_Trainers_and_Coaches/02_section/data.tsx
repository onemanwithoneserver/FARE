import type { Language } from "../../context/LanguageContext";
export const dataEn = {
  overline: "Challenges",
  title: "Common Challenges for RE Trainers & Coaches",
  subtitle: "Real estate training doesn't end in the classroom.",
  challenges: [
    "Connection with learners often ends after the training session",
    "Difficult to support 1-to-1 implementation",
    "No simple way to track daily habits and activities",
    "Difficult to reach a wider pool of RE learners",
    "Limited access to corporate training opportunities",
  ],
  transitionTitle:
    "What if your expertise could continue working with your learners — even after the training room?",
  transitionSubtitle: "That's what FARE enables.",
};
export const dataTe = {
  overline: "Challenges",
  title: "సాధారణ సవాళ్లు",
  subtitle:
    "రియల్ ఎస్టేట్ ట్రైనింగ్ కేవలం తరగతి గదితో ముగియదు. అభ్యాసకుల దీర్ఘకాలిక విజయం కోసం ట్రైనర్స్ ఎదుర్కొనే ప్రత్యేక సవాళ్లు.",
  challenges: [
    "ట్రైనింగ్ సెషన్ తర్వాత అభ్యాసకులతో కనెక్షన్ ముగిసిపోతుంది",
    "1-టు-1 ఇంప్లిమెంటేషన్‌కు మద్దతు ఇవ్వడం కష్టం",
    "రోజువారీ అలవాట్లు మరియు కార్యకలాపాలను ట్రాక్ చేయడానికి సులభమైన మార్గం లేదు",
    "విస్తృతమైన RE అభ్యాసకులను చేరుకోవడం కష్టం",
    "కార్పొరేట్ ట్రైనింగ్ అవకాశాలకు పరిమిత ప్రాప్యత",
  ],
  transitionTitle:
    "శిక్షణను కేవలం ఒక ఈవెంట్‌గా కాకుండా, నిరంతర వ్యవస్థగా ఎలా మార్చాలి?",
  transitionSubtitle: "అక్కడే FARE మీకు సహాయపడుతుంది.",
};
export const getData = (lang: Language = "en") =>
  lang === "te" ? dataTe : dataEn;
export const data = dataEn;
