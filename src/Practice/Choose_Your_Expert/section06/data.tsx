import raviKumarImg from "../../../assets/experts/ravi_kumar.jpg";
import sureshRaoImg from "../../../assets/experts/suresh_rao.jpg";
import anitaDesaiImg from "../../../assets/experts/anita_desai.jpg";
import mohammadAliImg from "../../../assets/experts/mohammad_ali.jpg";
import priyaSharmaImg from "../../../assets/experts/priya_sharma.jpg";

export interface CompareExpert {
  name: string;
  role: string;
  image: string;
  values: string[];
}

export const data = {
  title: "Compare Experts",
  subtitle: "For learners who are unsure, allow comparison of up to 3 experts side-by-side.",
  criteria: [
    "RE Experience",
    "Segment",
    "Expertise",
    "This Scenario",
    "Mock Sessions",
    "Languages",
    "30 min Price",
    "Availability"
  ],
  allExperts: [
    {
      name: "Ravi Kumar",
      role: "Sales Manager · Residential",
      image: raviKumarImg,
      values: ["12+ yrs", "Residential", "Sales & Negotiation", "✓", "126 Sessions", "English, Telugu, Hindi", "₹999", "Today · 6:30 PM"]
    },
    {
      name: "Suresh Rao",
      role: "Channel Partner · Plotted Development",
      image: sureshRaoImg,
      values: ["9+ yrs", "Plotted Development", "Sales & Investment", "✓", "84 Sessions", "English, Telugu", "₹799", "Tomorrow · 10:00 AM"]
    },
    {
      name: "Anita Desai",
      role: "Senior Consultant · Commercial",
      image: anitaDesaiImg,
      values: ["15+ yrs", "Commercial Spaces", "B2B Sales & Leasing", "✓", "210 Sessions", "English, Hindi, Marathi", "₹1,499", "Today · 4:00 PM"]
    },
    {
      name: "Mohammad Ali",
      role: "Team Lead · Premium Residential",
      image: mohammadAliImg,
      values: ["8+ yrs", "Luxury Villas & NRI", "High-ticket Sales", "✓", "142 Sessions", "English, Hindi, Urdu", "₹1,199", "Tomorrow · 2:00 PM"]
    },
    {
      name: "Priya Sharma",
      role: "Sales Executive · Apartments",
      image: priyaSharmaImg,
      values: ["5+ yrs", "Apartments", "First-time Buyers & CX", "✓", "56 Sessions", "English, Hindi", "₹599", "Today · 8:00 PM"]
    }
  ]
};
