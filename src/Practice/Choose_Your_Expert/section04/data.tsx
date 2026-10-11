import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  Award,
  BadgePercent,
  Zap,
  Flame,
  GraduationCap,
  Timer,
  TrendingUp,
  Star,
  Users,
  Layers,
} from "lucide-react";


export type ViewMode = "experts" | "scenarios";

export interface SortOption {
  label: string;
  caption: string;
  tag: string;
  icon: LucideIcon;
  color: string;
  bg: string;
}

export interface PracticeQuestion {
  id: string;
  short: string;
  question: string;
}

export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export interface Scenario {
  id: string;
  questionId: string;
  title: string;
  summary: string;
  persona: { name: string; profile: string };
  difficulty: Difficulty;
  durationMin: number;
  segment: string;
  skills: string[];
  practisedCount: number;
  rating: number;
  relevance: number;
  tag?: string;
  expertKeyword: string;
}


export const VIEW_TABS: { id: ViewMode; label: string; icon: LucideIcon }[] = [
  { id: "experts", label: "Experts By", icon: Users },
  { id: "scenarios", label: "Scenarios By", icon: Layers },
];

export const SEARCH_PLACEHOLDERS: Record<ViewMode, string> = {
  experts: "Search by name, expertise, role...",
  scenarios: "Search scenarios, skills, customer personas...",
};


export const EXPERT_SORT_OPTIONS: SortOption[] = [
  { label: "Most Relevant", caption: "Best match for practice & scenario", tag: "Recommended", icon: Sparkles, color: "#C99A2E", bg: "rgba(201, 154, 46, 0.12)" },
  { label: "Experience", caption: "Senior real estate professionals first", tag: "Seniority", icon: Award, color: "#2563EB", bg: "rgba(37, 99, 235, 0.1)" },
  { label: "Lowest Price", caption: "Budget friendly sessions from ₹599", tag: "Economy", icon: BadgePercent, color: "#059669", bg: "rgba(5, 150, 105, 0.1)" },
  { label: "Earliest Availability", caption: "Slots open today and tomorrow", tag: "Fastest", icon: Zap, color: "#7C3AED", bg: "rgba(124, 58, 237, 0.1)" },
  { label: "Most Sessions Completed", caption: "Highest volume of role-play mocks", tag: "Top Rated", icon: Flame, color: "#EA580C", bg: "rgba(234, 88, 12, 0.1)" },
];

export const SCENARIO_SORT_OPTIONS: SortOption[] = [
  { label: "Most Relevant", caption: "Closest match to your selected question", tag: "Recommended", icon: Sparkles, color: "#C99A2E", bg: "rgba(201, 154, 46, 0.12)" },
  { label: "Difficulty", caption: "Beginner first, advanced last", tag: "Progressive", icon: GraduationCap, color: "#2563EB", bg: "rgba(37, 99, 235, 0.1)" },
  { label: "Shortest Duration", caption: "Quick 30 min drills first", tag: "Quick", icon: Timer, color: "#059669", bg: "rgba(5, 150, 105, 0.1)" },
  { label: "Most Practised", caption: "Popular with other learners", tag: "Trending", icon: TrendingUp, color: "#EA580C", bg: "rgba(234, 88, 12, 0.1)" },
  { label: "Highest Rated", caption: "Best learner feedback scores", tag: "Top Rated", icon: Star, color: "#7C3AED", bg: "rgba(124, 58, 237, 0.1)" },
];

export const SORT_OPTIONS_BY_MODE: Record<ViewMode, SortOption[]> = {
  experts: EXPERT_SORT_OPTIONS,
  scenarios: SCENARIO_SORT_OPTIONS,
};


export const PRACTICE_QUESTIONS: PracticeQuestion[] = [
  { id: "q-price", short: "Price Objection", question: "How do I handle a customer's price objection?" },
  { id: "q-negotiation", short: "Negotiation", question: "How do I negotiate without giving big discounts?" },
  { id: "q-site-visit", short: "Site Visit", question: "How do I convert a site visit into a booking?" },
  { id: "q-trust", short: "Trust Building", question: "How do I build trust with first-time buyers?" },
  { id: "q-roi", short: "Investor ROI", question: "How do I defend ROI to a skeptical investor?" },
];

export const SCENARIOS: Scenario[] = [
  {
    id: "sc-price-1", questionId: "q-price", tag: "Most Popular",
    title: "\u201CYour price is 15% above the market\u201D",
    summary: "A well-researched buyer compares your project with two nearby launches and insists your rate is inflated.",
    persona: { name: "Rahul, 34", profile: "IT professional · 2BHK buyer · Comparing 3 projects" },
    difficulty: "Intermediate", durationMin: 30, segment: "Residential",
    skills: ["Value Justification", "Comparison Handling", "Objection Handling"],
    practisedCount: 1840, rating: 4.9, relevance: 98, expertKeyword: "Price Objection",
  },
  {
    id: "sc-price-2", questionId: "q-price",
    title: "Budget mismatch on the final call",
    summary: "The customer loves the unit but says the total cost is \u20B915L beyond their approved loan amount.",
    persona: { name: "Meera & Vikram", profile: "Young couple · First home · Loan pre-approved" },
    difficulty: "Beginner", durationMin: 30, segment: "Residential",
    skills: ["Need Analysis", "Payment Plans", "Empathy"],
    practisedCount: 1210, rating: 4.7, relevance: 92, expertKeyword: "Price Objection",
  },
  {
    id: "sc-price-3", questionId: "q-price", tag: "High-Ticket",
    title: "Luxury villa \u2014 \u201CNot worth the premium\u201D",
    summary: "An HNI questions why a villa costs 40% more than a premium apartment in the same micro-market.",
    persona: { name: "Mr. Kapoor, 52", profile: "Business owner · Upgrading · Cash-rich" },
    difficulty: "Advanced", durationMin: 45, segment: "Premium Residential",
    skills: ["Premium Positioning", "Lifestyle Selling", "Closing"],
    practisedCount: 640, rating: 4.8, relevance: 86, expertKeyword: "Price Objection",
  },
  {
    id: "sc-neg-1", questionId: "q-negotiation", tag: "Closing",
    title: "\u201CGive me 10% off and I'll book today\u201D",
    summary: "A ready-to-buy customer uses urgency as leverage to push for a steep discount before paying the token.",
    persona: { name: "Sanjay, 41", profile: "Repeat investor · Decisive · Price-sensitive" },
    difficulty: "Intermediate", durationMin: 30, segment: "Residential",
    skills: ["Negotiation", "Margin Protection", "Closing"],
    practisedCount: 1520, rating: 4.8, relevance: 96, expertKeyword: "Negotiation",
  },
  {
    id: "sc-neg-2", questionId: "q-negotiation",
    title: "Trading value instead of price",
    summary: "Offer non-price concessions \u2014 parking, flexible payment plan, upgrades \u2014 to close without cutting the rate.",
    persona: { name: "Anjali, 29", profile: "First-time buyer · Wants a 'deal'" },
    difficulty: "Beginner", durationMin: 30, segment: "Residential",
    skills: ["Value Trading", "Payment Plans", "Rapport"],
    practisedCount: 980, rating: 4.6, relevance: 90, expertKeyword: "Negotiation",
  },
  {
    id: "sc-neg-3", questionId: "q-negotiation", tag: "B2B",
    title: "Corporate lease renegotiation",
    summary: "A procurement head demands a lower per-sq-ft rate and a longer rent-free period for a 20,000 sq ft office.",
    persona: { name: "Ms. Iyer", profile: "Procurement Head · MNC · Multi-vendor RFP" },
    difficulty: "Advanced", durationMin: 60, segment: "Commercial",
    skills: ["High-ticket Negotiation", "Stakeholder Mapping", "Leasing"],
    practisedCount: 410, rating: 4.9, relevance: 84, expertKeyword: "Negotiation",
  },
  {
    id: "sc-site-1", questionId: "q-site-visit", tag: "Most Popular",
    title: "\u201CWe'll think about it and get back\u201D",
    summary: "After a great site visit, the family stalls. Create genuine urgency and secure a spot booking.",
    persona: { name: "The Reddy Family", profile: "Joint family · 3BHK · Multiple decision makers" },
    difficulty: "Intermediate", durationMin: 45, segment: "Residential",
    skills: ["Urgency Creation", "Decision Delay", "Closing"],
    practisedCount: 1390, rating: 4.8, relevance: 95, expertKeyword: "Site Visit",
  },
  {
    id: "sc-site-2", questionId: "q-site-visit",
    title: "Guided walkthrough for a first visit",
    summary: "Structure a site visit from parking lot to sample flat, uncovering needs at every step.",
    persona: { name: "Karthik, 31", profile: "Software engineer · Relocating · Visiting alone" },
    difficulty: "Beginner", durationMin: 30, segment: "Apartments",
    skills: ["Need Analysis", "Product Presentation", "Rapport"],
    practisedCount: 1105, rating: 4.7, relevance: 89, expertKeyword: "Site Visit",
  },
  {
    id: "sc-trust-1", questionId: "q-trust", tag: "Consultative",
    title: "Fear of possession delays",
    summary: "A buyer has been burnt by a delayed project before and doubts your developer's delivery timeline.",
    persona: { name: "Pooja, 33", profile: "Doctor · Burnt by past delay · Skeptical" },
    difficulty: "Intermediate", durationMin: 30, segment: "Residential",
    skills: ["Trust Building", "Credibility Proof", "Empathy"],
    practisedCount: 920, rating: 4.8, relevance: 94, expertKeyword: "Trust",
  },
  {
    id: "sc-trust-2", questionId: "q-trust", tag: "NRI",
    title: "Remote NRI buyer on a video call",
    summary: "Build credibility with an overseas buyer who can't visit and worries about documentation and fraud.",
    persona: { name: "Arvind, 45", profile: "NRI in Dubai · Investing back home" },
    difficulty: "Advanced", durationMin: 45, segment: "Premium Residential",
    skills: ["NRI Sales", "Virtual Tours", "Documentation"],
    practisedCount: 530, rating: 4.9, relevance: 88, expertKeyword: "Trust",
  },
  {
    id: "sc-roi-1", questionId: "q-roi", tag: "Commercial",
    title: "\u201CRental yield is too low for this price\u201D",
    summary: "An investor challenges your projected 6% yield and compares it with fixed deposits and REITs.",
    persona: { name: "Mr. Shah, 48", profile: "Portfolio investor · Data-driven" },
    difficulty: "Advanced", durationMin: 45, segment: "Commercial",
    skills: ["ROI Analysis", "Market Data", "Investment Pitch"],
    practisedCount: 610, rating: 4.8, relevance: 93, expertKeyword: "ROI",
  },
  {
    id: "sc-roi-2", questionId: "q-roi", tag: "Plots",
    title: "Open plot appreciation doubts",
    summary: "A first-time land investor fears the area won't develop and wants proof of appreciation potential.",
    persona: { name: "Naveen, 38", profile: "Govt. employee · First land purchase" },
    difficulty: "Beginner", durationMin: 30, segment: "Plotted",
    skills: ["Investment Objection", "Infrastructure Story", "Customer Profiling"],
    practisedCount: 720, rating: 4.6, relevance: 87, expertKeyword: "Investment",
  },
];

export const DIFFICULTY_STYLES: Record<Difficulty, { color: string; bg: string; border: string; level: number }> = {
  Beginner: { color: "#047857", bg: "#E9FBF3", border: "#A7F3D0", level: 1 },
  Intermediate: { color: "#B45309", bg: "#FFF7E6", border: "#FDE68A", level: 2 },
  Advanced: { color: "#BE123C", bg: "#FFF0F3", border: "#FECDD3", level: 3 },
};

export function getSortedAndFilteredScenarios(
  scenarios: Scenario[],
  searchQuery: string,
  sortBy: string
): Scenario[] {
  let result = [...scenarios];

  const q = searchQuery.toLowerCase().trim();
  if (q) {
    result = result.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.summary.toLowerCase().includes(q) ||
        s.segment.toLowerCase().includes(q) ||
        s.difficulty.toLowerCase().includes(q) ||
        s.persona.name.toLowerCase().includes(q) ||
        s.persona.profile.toLowerCase().includes(q) ||
        s.skills.some((k) => k.toLowerCase().includes(q))
    );
  }

  switch (sortBy) {
    case "Difficulty":
      result.sort((a, b) => DIFFICULTY_STYLES[a.difficulty].level - DIFFICULTY_STYLES[b.difficulty].level);
      break;
    case "Shortest Duration":
      result.sort((a, b) => a.durationMin - b.durationMin);
      break;
    case "Most Practised":
      result.sort((a, b) => b.practisedCount - a.practisedCount);
      break;
    case "Highest Rated":
      result.sort((a, b) => b.rating - a.rating);
      break;
    default:
      result.sort((a, b) => b.relevance - a.relevance);
  }

  return result;
}

export const data = {
  expertsFound: "18 Experts Found",
  sortByOptions: EXPERT_SORT_OPTIONS.map((o) => o.label),
};
