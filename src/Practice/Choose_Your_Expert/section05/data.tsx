import raviKumarImg from "../../../assets/experts/ravi_kumar.jpg";
import sureshRaoImg from "../../../assets/experts/suresh_rao.jpg";
import anitaDesaiImg from "../../../assets/experts/anita_desai.jpg";
import mohammadAliImg from "../../../assets/experts/mohammad_ali.jpg";
import priyaSharmaImg from "../../../assets/experts/priya_sharma.jpg";

export interface SampleScenario {
  title: string;
  category: string;
  duration: string;
}

export interface Expert {
  name: string;
  image: string;
  verified: boolean;
  role: string;
  experience: string;
  age: number;
  about?: string;
  reExperience?: string;
  sampleScenarios?: SampleScenario[];
  specialisedIn: string[];
  canPractise: string[];
  languages: string[];
  sessionsCompleted: number;
  price: string;
  nextAvailable: string;
  relevance: string[];
}

export const raviKumarDetails = {
  name: "Ravi Kumar",
  image: raviKumarImg,
  role: "Sales Manager · Residential Real Estate",
  experience: "12+ Years Experience",
  age: 38,
  verified: true,
  about: "Real estate sales professional with 12+ years of experience across residential sales, customer handling, negotiation and team management.",
  reExperience: "Residential — Apartments · Villas · Gated Communities",
  expertise: ["Sales", "Customer Handling", "Negotiation", "Objection Handling", "Closing"],
  scenarios: [
    {
      category: "Sales",
      items: ["Price Objection", "Negotiation", "Need Analysis", "Site Visit", "Closing", "Lost Lead Recovery"]
    },
    {
      category: "Customer Handling",
      items: ["Difficult Customer", "Comparison Objection", "Trust & Credibility", "Decision Delay"]
    }
  ],
  howICondut: {
    roles: "You: Sales Professional | Expert: Customer",
    description: "I will act as the customer and respond naturally to your conversation. I may introduce objections, ask questions or challenge your responses.\n\nAfter the role-play, you receive structured feedback on your performance."
  },
  languages: ["English", "Telugu", "Hindi"],
  sessionOptions: [
    { duration: "30 min", price: "₹999" },
    { duration: "45 min", price: "₹1,399" },
    { duration: "60 min", price: "₹1,799" }
  ]
};

export function getSortedAndFilteredExperts(
  experts: Expert[],
  searchQuery: string,
  sortBy: string
): Expert[] {
  let result = [...experts];

  if (searchQuery && searchQuery.trim()) {
    const q = searchQuery.toLowerCase().trim();
    result = result.filter(
      (e) =>
        e.name.toLowerCase().includes(q) ||
        e.role.toLowerCase().includes(q) ||
        e.specialisedIn.some((s) => s.toLowerCase().includes(q)) ||
        e.canPractise.some((s) => s.toLowerCase().includes(q)) ||
        e.languages.some((l) => l.toLowerCase().includes(q))
    );
  }

  if (sortBy === "Experience") {
    result.sort((a, b) => {
      const expA = parseInt(a.experience.match(/\d+/)?.[0] || "0", 10);
      const expB = parseInt(b.experience.match(/\d+/)?.[0] || "0", 10);
      return expB - expA;
    });
  } else if (sortBy === "Lowest Price") {
    result.sort((a, b) => {
      const priceA = parseInt(a.price.replace(/[^\d]/g, "") || "0", 10);
      const priceB = parseInt(b.price.replace(/[^\d]/g, "") || "0", 10);
      return priceA - priceB;
    });
  } else if (sortBy === "Most Sessions Completed") {
    result.sort((a, b) => b.sessionsCompleted - a.sessionsCompleted);
  } else if (sortBy === "Earliest Availability") {
    const parseAvailability = (avail: string) => {
      const isToday = avail.toLowerCase().includes("today");
      const dayScore = isToday ? 0 : 1000;
      const timeMatch = avail.match(/(\d+):(\d+)\s*(AM|PM)/i);
      if (!timeMatch) return dayScore;
      let hours = parseInt(timeMatch[1], 10);
      const minutes = parseInt(timeMatch[2], 10);
      const period = timeMatch[3].toUpperCase();
      if (period === "PM" && hours !== 12) hours += 12;
      if (period === "AM" && hours === 12) hours = 0;
      return dayScore + hours * 60 + minutes;
    };
    result.sort((a, b) => parseAvailability(a.nextAvailable) - parseAvailability(b.nextAvailable));
  }

  return result;
}

export const data = {
  experts: [
    {
      name: "Ravi Kumar",
      image: raviKumarImg,
      verified: true,
      role: "Sales Manager · Residential Real Estate",
      experience: "12+ Years Real Estate Experience",
      age: 38,
      about: "12+ years closing residential high-rises and gated communities across Hyderabad & Bengaluru. Specialist in high-stakes price objections and margin protection.",
      reExperience: "Residential — Gated Communities, Premium High-Rises & Villas",
      sampleScenarios: [
        {
          title: "Handling a 15% Price Objection",
          category: "Sales & Objection",
          duration: "30 min",
        },
        {
          title: "Negotiation & Margin Protection",
          category: "Closing Strategy",
          duration: "45 min",
        },
      ],
      specialisedIn: ["Residential Sales", "Customer Handling", "Negotiation", "Objection Handling"],
      canPractise: ["Price Objection", "Need Analysis", "Negotiation", "Site Visit", "Closing"],
      languages: ["English", "Telugu", "Hindi"],
      sessionsCompleted: 126,
      price: "From ₹999",
      nextAvailable: "Today · 6:30 PM",
      relevance: [
        "12+ years in residential sales",
        "Conducts Price Objection mocks",
        "Customer-handling specialist",
        "126 mock sessions completed"
      ]
    },
    {
      name: "Suresh Rao",
      image: sureshRaoImg,
      verified: true,
      role: "Channel Partner · Plotted Development",
      experience: "9+ Years Real Estate Experience",
      age: 35,
      about: "Land advisory and open plot investment expert. Helps sales consultants defend land valuations, zoning clearances, and long-term capital appreciation.",
      reExperience: "Plotted Land — HMDA/DTCP Approved Layouts & Farmland",
      sampleScenarios: [
        {
          title: "Defending Land Valuation vs Nearby Layouts",
          category: "Plot Sales",
          duration: "30 min",
        },
        {
          title: "Investor 2-Year ROI Justification",
          category: "Investor Pitch",
          duration: "45 min",
        },
      ],
      specialisedIn: ["Open Plots", "Customer Handling", "Negotiation", "Investment Sales"],
      canPractise: ["Price Objection", "Investment Objection", "Negotiation", "Customer Profiling"],
      languages: ["English", "Telugu"],
      sessionsCompleted: 84,
      price: "From ₹799",
      nextAvailable: "Tomorrow · 10:00 AM",
      relevance: [
        "9+ years in plotted developments",
        "Great for investment objections"
      ]
    },
    {
      name: "Anita Desai",
      image: anitaDesaiImg,
      verified: true,
      role: "Senior Consultant · Commercial Spaces",
      experience: "15+ Years Real Estate Experience",
      age: 42,
      about: "Institutional leasing and Grade-A commercial specialist. Master of corporate presentations, lease tenure terms, and defending office cap rates.",
      reExperience: "Commercial — Grade-A Tech Parks, Retail & Bare Shell Leasing",
      sampleScenarios: [
        {
          title: "Commercial Lease Rate & CAM Defense",
          category: "B2B Leasing",
          duration: "45 min",
        },
        {
          title: "Corporate C-Suite Presentation & Closing",
          category: "Executive Sales",
          duration: "60 min",
        },
      ],
      specialisedIn: ["Commercial Real Estate", "B2B Sales", "Leasing", "High-ticket Negotiation"],
      canPractise: ["Price Objection", "ROI Analysis", "Corporate Presentations", "Closing"],
      languages: ["English", "Hindi", "Marathi"],
      sessionsCompleted: 210,
      price: "From ₹1499",
      nextAvailable: "Today · 4:00 PM",
      relevance: [
        "Specialist in commercial segments",
        "Handles complex ROI objections",
        "Top rated for B2B role-plays"
      ]
    },
    {
      name: "Mohammad Ali",
      image: mohammadAliImg,
      verified: true,
      role: "Team Lead · Premium Residential",
      experience: "8+ Years Real Estate Experience",
      age: 34,
      about: "Luxury real estate and NRI sales strategist. Expertise in virtual walkthrough presentations, trust building across time zones, and closing high-ticket villas.",
      reExperience: "Luxury Residential — Ultra-Luxury Villas & Golf Estates",
      sampleScenarios: [
        {
          title: "Overcoming NRI Remote Trust Hesitations",
          category: "NRI Role-Play",
          duration: "45 min",
        },
        {
          title: "High-Ticket Luxury Villa Value Defense",
          category: "Luxury Sales",
          duration: "45 min",
        },
      ],
      specialisedIn: ["Luxury Villas", "Customer Handling", "NRI Sales", "Remote Presentations"],
      canPractise: ["Price Objection", "Trust Building", "NRI Sales Pitch", "Virtual Tours"],
      languages: ["English", "Hindi", "Urdu"],
      sessionsCompleted: 142,
      price: "From ₹1199",
      nextAvailable: "Tomorrow · 2:00 PM",
      relevance: [
        "Expert in luxury and NRI sales",
        "Focus on high-ticket price objections",
        "Highly rated for trust-building exercises"
      ]
    },
    {
      name: "Priya Sharma",
      image: priyaSharmaImg,
      verified: true,
      role: "Sales Executive · Apartments",
      experience: "5+ Years Real Estate Experience",
      age: 29,
      about: "First-time homebuyer consultant. Specializes in empathetic consultation, site visit urgency, and overcoming down-payment / EMI anxiety.",
      reExperience: "Residential — Mid-Segment 2BHK & 3BHK Family Homes",
      sampleScenarios: [
        {
          title: "First-Time Buyer EMI & Budget Anxiety",
          category: "Consultative Sales",
          duration: "30 min",
        },
        {
          title: "Converting Weekend Walkthrough to Advance Token",
          category: "Site Visit Closing",
          duration: "30 min",
        },
      ],
      specialisedIn: ["Apartment Sales", "First-time Buyers", "Follow-ups", "Site Visit Conversions"],
      canPractise: ["Price Objection", "Site Visit Pitch", "Follow-up calls", "Competitor Comparison"],
      languages: ["English", "Hindi"],
      sessionsCompleted: 56,
      price: "From ₹599",
      nextAvailable: "Today · 8:00 PM",
      relevance: [
        "Great for beginner level practice",
        "Focuses on first-time home buyers"
      ]
    }
  ]
};
