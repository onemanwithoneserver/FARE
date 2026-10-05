import { useMemo, useState } from "react";
import {
  Building2,
  LandPlot,
  Handshake,
  Scale,
  TrendingUp,
  Megaphone,
  Home,
  Landmark,
  type LucideIcon,
} from "lucide-react";

export type Level = "Beginner" | "Intermediate" | "Advanced";
export type SortKey = "popular" | "rating" | "priceLow" | "priceHigh" | "newest";

export interface Course {
  id: number;
  title: string;
  instructor: string;
  category: string;
  level: Level;
  rating: number;
  reviews: number;
  students: number;
  hours: number;
  lessons: number;
  price: number;
  originalPrice: number;
  language: string;
  badge?: "Bestseller" | "New" | "Top Rated";
  icon: LucideIcon;
  gradient: string;
  addedOrder: number;
}

export const heroData = {
  badge: "FARE Courses",
  headline: "Learn Real Estate From Industry Experts",
  description:
    "Structured, practical courses for employees, freelancers, career switchers and freshers. Build skills, practise real situations and grow with confidence.",
  primary: "Browse All Courses",
  secondary: "Free Courses",
  stats: [
    { value: "40+", label: "Expert-led courses" },
    { value: "25K+", label: "Active learners" },
    { value: "4.7", label: "Average rating" },
  ],
};

export const categories: { name: string; icon: LucideIcon }[] = [
  { name: "All", icon: Landmark },
  { name: "Sales & Marketing", icon: Megaphone },
  { name: "Open Plots", icon: LandPlot },
  { name: "Residential", icon: Home },
  { name: "Commercial", icon: Building2 },
  { name: "Legal & Compliance", icon: Scale },
  { name: "Investment", icon: TrendingUp },
  { name: "Negotiation", icon: Handshake },
];

export const levels: ("All" | Level)[] = ["All", "Beginner", "Intermediate", "Advanced"];
export const priceFilters = ["All", "Free", "Paid"] as const;
export const ratingFilters = [0, 4, 4.5] as const;

export const sortOptions: { value: SortKey; label: string }[] = [
  { value: "popular", label: "Most Popular" },
  { value: "rating", label: "Highest Rated" },
  { value: "newest", label: "Newest" },
  { value: "priceLow", label: "Price: Low to High" },
  { value: "priceHigh", label: "Price: High to Low" },
];

const G = {
  navy: "from-[#0B1D3A] to-[#1E3A6B]",
  gold: "from-[#C99A2E] to-[#E2C068]",
  blue: "from-[#2563EB] to-[#60A5FA]",
  teal: "from-[#0F766E] to-[#2DD4BF]",
  violet: "from-[#6D28D9] to-[#A78BFA]",
  rose: "from-[#BE123C] to-[#FB7185]",
};

export const courses: Course[] = [
  { id: 1, title: "Real Estate Sales Mastery: From Lead to Closing", instructor: "Ravi Kumar", category: "Sales & Marketing", level: "Beginner", rating: 4.8, reviews: 3240, students: 12400, hours: 12, lessons: 64, price: 1999, originalPrice: 4999, language: "English", badge: "Bestseller", icon: Megaphone, gradient: G.navy, addedOrder: 6 },
  { id: 2, title: "Open Plot Investment & Layout Approvals Explained", instructor: "Anitha Reddy", category: "Open Plots", level: "Intermediate", rating: 4.7, reviews: 1890, students: 7800, hours: 9, lessons: 48, price: 1499, originalPrice: 3999, language: "English / Telugu", badge: "Top Rated", icon: LandPlot, gradient: G.gold, addedOrder: 5 },
  { id: 3, title: "Residential Project Selling: Buyer Psychology", instructor: "Suresh Varma", category: "Residential", level: "Beginner", rating: 4.6, reviews: 2110, students: 9100, hours: 8, lessons: 40, price: 0, originalPrice: 0, language: "English / Telugu", badge: "Bestseller", icon: Home, gradient: G.blue, addedOrder: 4 },
  { id: 4, title: "Commercial Leasing & Property Valuation Essentials", instructor: "Meera Nair", category: "Commercial", level: "Advanced", rating: 4.9, reviews: 960, students: 3200, hours: 15, lessons: 72, price: 3499, originalPrice: 7999, language: "English", badge: "Top Rated", icon: Building2, gradient: G.teal, addedOrder: 7 },
  { id: 5, title: "RERA, Registration & Legal Compliance Made Simple", instructor: "Adv. Kiran Rao", category: "Legal & Compliance", level: "Intermediate", rating: 4.7, reviews: 1420, students: 5600, hours: 10, lessons: 52, price: 2299, originalPrice: 5499, language: "English", icon: Scale, gradient: G.violet, addedOrder: 3 },
  { id: 6, title: "Real Estate Investing: ROI, Yield & Risk Analysis", instructor: "Prakash Iyer", category: "Investment", level: "Advanced", rating: 4.8, reviews: 1730, students: 6400, hours: 14, lessons: 68, price: 2999, originalPrice: 6999, language: "English", badge: "New", icon: TrendingUp, gradient: G.rose, addedOrder: 10 },
  { id: 7, title: "Negotiation Skills for Property Professionals", instructor: "Divya Sharma", category: "Negotiation", level: "Intermediate", rating: 4.5, reviews: 880, students: 4100, hours: 6, lessons: 30, price: 999, originalPrice: 2999, language: "English", icon: Handshake, gradient: G.navy, addedOrder: 2 },
  { id: 8, title: "Digital Marketing for Real Estate Freelancers", instructor: "Karthik Menon", category: "Sales & Marketing", level: "Beginner", rating: 4.4, reviews: 1260, students: 5200, hours: 7, lessons: 36, price: 0, originalPrice: 0, language: "English / Telugu", badge: "New", icon: Megaphone, gradient: G.blue, addedOrder: 9 },
  { id: 9, title: "Plotting Ventures: Site Visits to Registrations", instructor: "Anitha Reddy", category: "Open Plots", level: "Beginner", rating: 4.6, reviews: 1050, students: 4800, hours: 5, lessons: 28, price: 799, originalPrice: 1999, language: "English / Telugu", icon: LandPlot, gradient: G.gold, addedOrder: 1 },
  { id: 10, title: "Career Switch to Real Estate: 30-Day Roadmap", instructor: "Neha Kapoor", category: "Residential", level: "Beginner", rating: 4.7, reviews: 2380, students: 10300, hours: 6, lessons: 34, price: 1299, originalPrice: 3499, language: "English", badge: "Bestseller", icon: Home, gradient: G.teal, addedOrder: 8 },
];

export const promos = {
  banner: {
    tag: "Limited offer",
    title: "Get 40% off on your first FARE course",
    text: "Use code LEARN40 at checkout. Valid for the next 7 days.",
    cta: "Claim Offer",
  },
  cards: [
    { title: "Free Self-Evaluation", text: "Find your skill gaps in 10 minutes.", cta: "Start now" },
    { title: "Live Mock Sessions", text: "Practise real client situations weekly.", cta: "Join a mock" },
  ],
};

export const formatPrice = (p: number) => (p === 0 ? "Free" : `₹${p.toLocaleString("en-IN")}`);
export const discountPct = (c: Course) =>
  c.price === 0 || !c.originalPrice ? 0 : Math.round((1 - c.price / c.originalPrice) * 100);
export const formatCount = (n: number) => (n >= 1000 ? `${(n / 1000).toFixed(1)}K` : `${n}`);

export function useCourseFilters() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState<"All" | Level>("All");
  const [price, setPrice] = useState<(typeof priceFilters)[number]>("All");
  const [minRating, setMinRating] = useState<number>(0);
  const [sort, setSort] = useState<SortKey>("popular");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = courses.filter(
      (c) =>
        (category === "All" || c.category === category) &&
        (level === "All" || c.level === level) &&
        (price === "All" || (price === "Free" ? c.price === 0 : c.price > 0)) &&
        c.rating >= minRating &&
        (!q ||
          c.title.toLowerCase().includes(q) ||
          c.instructor.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q)),
    );
    const sorted = [...list];
    switch (sort) {
      case "rating": sorted.sort((a, b) => b.rating - a.rating); break;
      case "priceLow": sorted.sort((a, b) => a.price - b.price); break;
      case "priceHigh": sorted.sort((a, b) => b.price - a.price); break;
      case "newest": sorted.sort((a, b) => b.addedOrder - a.addedOrder); break;
      default: sorted.sort((a, b) => b.students - a.students);
    }
    return sorted;
  }, [query, category, level, price, minRating, sort]);

  const reset = () => {
    setQuery(""); setCategory("All"); setLevel("All"); setPrice("All"); setMinRating(0); setSort("popular");
  };

  return { query, setQuery, category, setCategory, level, setLevel, price, setPrice, minRating, setMinRating, sort, setSort, results, reset };
}
