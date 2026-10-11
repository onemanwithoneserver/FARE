import raviKumarImg from "../../../assets/experts/ravi_kumar.jpg";
import sureshRaoImg from "../../../assets/experts/suresh_rao.jpg";
import anitaDesaiImg from "../../../assets/experts/anita_desai.jpg";
import mohammadAliImg from "../../../assets/experts/mohammad_ali.jpg";
import priyaSharmaImg from "../../../assets/experts/priya_sharma.jpg";
import {
  Briefcase,
  Building2,
  Sparkles,
  Target,
  Users,
  Globe2,
  Coins,
  Calendar,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface CompareExpert {
  name: string;
  role: string;
  image: string;
  values: string[];
}

export interface CriterionItem {
  id: string;
  label: string;
  icon: LucideIcon;
  hint: string;
}

export const CRITERIA_ITEMS: CriterionItem[] = [
  { id: "exp", label: "RE Experience", icon: Briefcase, hint: "Total verified real estate tenure" },
  { id: "segment", label: "RE Segment", icon: Building2, hint: "Primary property specialization" },
  { id: "skills", label: "Core Expertise", icon: Sparkles, hint: "Strengths & coaching focus" },
  { id: "scenario", label: "Scenario Fit", icon: Target, hint: "High-pressure objection handling" },
  { id: "sessions", label: "Mock Sessions", icon: Users, hint: "Completed candidate drills" },
  { id: "languages", label: "Languages", icon: Globe2, hint: "Fluency for role-play practice" },
  { id: "price", label: "30-Min Rate", icon: Coins, hint: "Starting 1-on-1 session fee" },
  { id: "availability", label: "Next Slot", icon: Calendar, hint: "Earliest verified availability" },
];

export const data = {
  title: "Side-by-Side Evaluation",
  subtitle: "Evaluate top verified real estate mentors across experience, methodology, pricing, and availability to find your exact match.",
  criteria: [
    "RE Experience",
    "Segment",
    "Expertise",
    "This Scenario",
    "Mock Sessions",
    "Languages",
    "30 min Price",
    "Availability",
  ],
  defaultCompareNames: ["Ravi Kumar", "Anita Desai", "Suresh Rao"],
  allExperts: [
    {
      name: "Ravi Kumar",
      role: "Sales Manager · Residential",
      image: raviKumarImg,
      values: [
        "12+ yrs",
        "Residential",
        "Sales & Negotiation",
        "✓ Specialist",
        "126 Sessions",
        "English, Telugu, Hindi",
        "₹999",
        "Today · 6:30 PM",
      ],
    },
    {
      name: "Anita Desai",
      role: "Senior Consultant · Commercial",
      image: anitaDesaiImg,
      values: [
        "15+ yrs",
        "Commercial Spaces",
        "B2B Sales & Leasing",
        "✓ Specialist",
        "210 Sessions",
        "English, Hindi, Marathi",
        "₹1,499",
        "Today · 4:00 PM",
      ],
    },
    {
      name: "Suresh Rao",
      role: "Channel Partner · Plotted Development",
      image: sureshRaoImg,
      values: [
        "9+ yrs",
        "Plotted Development",
        "Sales & Investment",
        "✓ Specialist",
        "84 Sessions",
        "English, Telugu",
        "₹799",
        "Tomorrow · 10:00 AM",
      ],
    },
    {
      name: "Mohammad Ali",
      role: "Team Lead · Premium Residential",
      image: mohammadAliImg,
      values: [
        "8+ yrs",
        "Luxury Villas & NRI",
        "High-ticket Sales",
        "✓ Specialist",
        "142 Sessions",
        "English, Hindi, Urdu",
        "₹1,199",
        "Tomorrow · 2:00 PM",
      ],
    },
    {
      name: "Priya Sharma",
      role: "Sales Executive · Apartments",
      image: priyaSharmaImg,
      values: [
        "5+ yrs",
        "Apartments",
        "First-time Buyers & CX",
        "✓ Specialist",
        "56 Sessions",
        "English, Hindi",
        "₹599",
        "Today · 8:00 PM",
      ],
    },
  ],
};
