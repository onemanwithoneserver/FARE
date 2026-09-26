import type { Language } from "../../../../context/LanguageContext";

export const dataEn = {
  "title": "Learn. Practise. Transition.",
  "experiences": [
    {
      "title": "Test Your Knowledge",
      "label": "Quizzes",
      "text": "Build and test your understanding of real estate fundamentals, terminology, processes, markets and industry practices."
    },
    {
      "title": "Learn at Your Own Pace",
      "label": "Courses",
      "text": "Structured programs designed to help you understand real estate and build relevant professional capabilities."
    },
    {
      "title": "Learn With Trainers",
      "label": "Live Classes",
      "text": "Interactive sessions with real estate trainers and industry experts."
    },
    {
      "title": "Practise Real Situations",
      "label": "Mocks",
      "text": "Apply your existing professional skills to real estate scenarios, customer conversations and business situations."
    },
    {
      "title": "Learn & Practise Together",
      "label": "Workshops",
      "text": "Focused learning experiences around real estate concepts, skills and business situations."
    },
    {
      "title": "Get Personal Guidance",
      "label": "Mentoring",
      "text": "Work with experienced trainers and mentors to understand your career path, build relevant skills and navigate your transition."
    }
  ]
};

export const dataTe = {
  "title": "నేర్చుకో. సాధన చేయండి. పరివర్తన.",
  "experiences": [
    {
      "title": "మీ జ్ఞానాన్ని పరీక్షించుకోండి",
      "label": "క్విజ్‌లు",
      "text": "రియల్ ఎస్టేట్ ఫండమెంటల్స్, టెర్మినాలజీ, ప్రాసెస్‌లు, మార్కెట్‌లు మరియు పరిశ్రమ పద్ధతులపై మీ అవగాహనను రూపొందించండి మరియు పరీక్షించండి."
    },
    {
      "title": "మీ స్వంత వేగంతో నేర్చుకోండి",
      "label": "కోర్సులు",
      "text": "రియల్ ఎస్టేట్‌ను అర్థం చేసుకోవడానికి మరియు సంబంధిత వృత్తిపరమైన సామర్థ్యాలను రూపొందించడంలో మీకు సహాయపడటానికి రూపొందించబడిన నిర్మాణాత్మక ప్రోగ్రామ్‌లు."
    },
    {
      "title": "శిక్షకులతో నేర్చుకోండి",
      "label": "ప్రత్యక్ష తరగతులు",
      "text": "రియల్ ఎస్టేట్ శిక్షకులు మరియు పరిశ్రమ నిపుణులతో ఇంటరాక్టివ్ సెషన్‌లు."
    },
    {
      "title": "వాస్తవ పరిస్థితులను ప్రాక్టీస్ చేయండి",
      "label": "వెక్కిరిస్తుంది",
      "text": "రియల్ ఎస్టేట్ దృశ్యాలు, కస్టమర్ సంభాషణలు మరియు వ్యాపార పరిస్థితులకు మీ ప్రస్తుత వృత్తిపరమైన నైపుణ్యాలను వర్తింపజేయండి."
    },
    {
      "title": "కలిసి నేర్చుకోండి & సాధన చేయండి",
      "label": "వర్క్‌షాప్‌లు",
      "text": "రియల్ ఎస్టేట్ భావనలు, నైపుణ్యాలు మరియు వ్యాపార పరిస్థితులపై దృష్టి కేంద్రీకరించిన అభ్యాస అనుభవాలు."
    },
    {
      "title": "వ్యక్తిగత మార్గదర్శకత్వం పొందండి",
      "label": "మార్గదర్శకత్వం",
      "text": "మీ కెరీర్ మార్గాన్ని అర్థం చేసుకోవడానికి, సంబంధిత నైపుణ్యాలను పెంపొందించడానికి మరియు మీ పరివర్తనను నావిగేట్ చేయడానికి అనుభవజ్ఞులైన శిక్షకులు మరియు మార్గదర్శకులతో కలిసి పని చేయండి."
    }
  ]
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
