import type { Language } from "../../../context/LanguageContext";
import { Map, Home } from "lucide-react";

export const ICONS = [Map, Home];

export const GRADIENTS = [
  "from-[#38BDF8] to-[#0284C7]", 
  "from-[#FBBF24] to-[#D97706]"
];

export const dataEn = {
  "badge": "Choose Your Knowledge Path",
  "title": "What Do You Want to Know Better?",
  "paths": [
    {
      "title": "OPEN PLOTS",
      "text": "Test your knowledge across land, layouts, approvals, locations, development, investment, project knowledge and plot sales.",
      "cta": "Explore Open Plot Quizzes →"
    },
    {
      "title": "RESIDENTIAL",
      "text": "Test your knowledge across projects, builders, locations, property types, pricing, amenities, RERA, finance, Vastu and residential sales.",
      "cta": "Explore Residential Quizzes →"
    }
  ],
  "more": {
    "title": "MORE REAL ESTATE SEGMENTS",
    "text": "Commercial · Land · Property Management · Industrial · Warehousing · Hospitality · Other RE Segments"
  }
};

export const dataTe = {
  "badge": "Choose Your Knowledge Path",
  "title": "What Do You Want to Know Better?",
  "paths": [
    {
      "title": "OPEN PLOTS",
      "text": "Test your knowledge across land, layouts, approvals, locations, development, investment, project knowledge and plot sales.",
      "cta": "Explore Open Plot Quizzes →"
    },
    {
      "title": "RESIDENTIAL",
      "text": "Test your knowledge across projects, builders, locations, property types, pricing, amenities, RERA, finance, Vastu and residential sales.",
      "cta": "Explore Residential Quizzes →"
    }
  ],
  "more": {
    "title": "MORE REAL ESTATE SEGMENTS",
    "text": "Commercial · Land · Property Management · Industrial · Warehousing · Hospitality · Other RE Segments"
  }
};

export const getData = (lang: Language = "en") => lang === "te" ? dataTe : dataEn;
export const data = dataEn;
