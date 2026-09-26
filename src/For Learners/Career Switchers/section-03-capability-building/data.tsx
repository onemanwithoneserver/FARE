import type { Language } from "../../../context/LanguageContext";

export const dataEn = {
  "title": "Build the Real Estate Expertise You Need",
  "categories": [
    {
      "name": "Real Estate Fundamentals",
      "skills": [
        "Industry Basics",
        "Terminology",
        "Property Types",
        "Stakeholders",
        "Business Models",
        "Transaction Process",
        "Real Estate Lifecycle"
      ]
    },
    {
      "name": "Market & Segment Knowledge",
      "skills": [
        "Residential",
        "Plotted Development",
        "Commercial",
        "Land",
        "Leasing",
        "Property Management",
        "Other Real Estate Segments"
      ]
    },
    {
      "name": "Sales & Customer Skills",
      "skills": [
        "Lead Handling",
        "Customer Profiling",
        "Need Analysis",
        "Property Presentation",
        "Site Visit",
        "Objection Handling",
        "Negotiation",
        "Follow-up",
        "Closing"
      ]
    },
    {
      "name": "Marketing & Digital Skills",
      "skills": [
        "Real Estate Marketing",
        "Project Marketing",
        "Digital Marketing",
        "Lead Generation",
        "Content Creation",
        "Social Media",
        "Personal Branding",
        "Marketing Automation"
      ]
    },
    {
      "name": "Product & Project Knowledge",
      "skills": [
        "Project Knowledge",
        "Location Knowledge",
        "Product Knowledge",
        "Amenities",
        "Pricing",
        "Payment Plans",
        "Approvals",
        "RERA"
      ]
    },
    {
      "name": "Business & Functional Skills",
      "skills": [
        "Business Development",
        "CRM",
        "Sales Operations",
        "Customer Experience",
        "Data & Analytics",
        "Technology",
        "Process Management"
      ]
    },
    {
      "name": "Communication & Leadership",
      "skills": [
        "Business Communication",
        "Presentation Skills",
        "Negotiation",
        "Team Management",
        "Leadership",
        "Coaching",
        "Decision Making"
      ]
    }
  ]
};

export const dataTe = {
  "title": "మీకు అవసరమైన రియల్ ఎస్టేట్ నైపుణ్యాన్ని రూపొందించండి",
  "categories": [
    {
      "name": "రియల్ ఎస్టేట్ ఫండమెంటల్స్",
      "skills": [
        "ఇండస్ట్రీ బేసిక్స్",
        "పరిభాష",
        "ఆస్తి రకాలు",
        "వాటాదారులు",
        "వ్యాపార నమూనాలు",
        "లావాదేవీ ప్రక్రియ",
        "రియల్ ఎస్టేట్ జీవితచక్రం"
      ]
    },
    {
      "name": "మార్కెట్ & సెగ్మెంట్ నాలెడ్జ్",
      "skills": [
        "నివాసస్థలం",
        "ప్లాట్లు చేసిన అభివృద్ధి",
        "వాణిజ్యపరమైన",
        "భూమి",
        "లీజింగ్",
        "ఆస్తి నిర్వహణ",
        "ఇతర రియల్ ఎస్టేట్ విభాగాలు"
      ]
    },
    {
      "name": "సేల్స్ & కస్టమర్ స్కిల్స్",
      "skills": [
        "లీడ్ హ్యాండ్లింగ్",
        "కస్టమర్ ప్రొఫైలింగ్",
        "విశ్లేషణ అవసరం",
        "ఆస్తి ప్రదర్శన",
        "సైట్ సందర్శన",
        "అభ్యంతరం నిర్వహణ",
        "చర్చలు",
        "ఫాలో-అప్",
        "మూసివేయడం"
      ]
    },
    {
      "name": "మార్కెటింగ్ & డిజిటల్ నైపుణ్యాలు",
      "skills": [
        "రియల్ ఎస్టేట్ మార్కెటింగ్",
        "ప్రాజెక్ట్ మార్కెటింగ్",
        "డిజిటల్ మార్కెటింగ్",
        "లీడ్ జనరేషన్",
        "కంటెంట్ సృష్టి",
        "సోషల్ మీడియా",
        "వ్యక్తిగత బ్రాండింగ్",
        "మార్కెటింగ్ ఆటోమేషన్"
      ]
    },
    {
      "name": "ఉత్పత్తి & ప్రాజెక్ట్ నాలెడ్జ్",
      "skills": [
        "ప్రాజెక్ట్ నాలెడ్జ్",
        "స్థాన జ్ఞానం",
        "ఉత్పత్తి జ్ఞానం",
        "సౌకర్యాలు",
        "ధర నిర్ణయించడం",
        "చెల్లింపు ప్రణాళికలు",
        "ఆమోదాలు",
        "రెరా"
      ]
    },
    {
      "name": "వ్యాపారం & క్రియాత్మక నైపుణ్యాలు",
      "skills": [
        "వ్యాపార అభివృద్ధి",
        "CRM",
        "విక్రయ కార్యకలాపాలు",
        "కస్టమర్ అనుభవం",
        "డేటా & అనలిటిక్స్",
        "సాంకేతికత",
        "ప్రక్రియ నిర్వహణ"
      ]
    },
    {
      "name": "కమ్యూనికేషన్ & నాయకత్వం",
      "skills": [
        "వ్యాపార కమ్యూనికేషన్",
        "ప్రదర్శన నైపుణ్యాలు",
        "చర్చలు",
        "జట్టు నిర్వహణ",
        "నాయకత్వం",
        "కోచింగ్",
        "డెసిషన్ మేకింగ్"
      ]
    }
  ]
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
