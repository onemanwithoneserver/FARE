export interface TestItem {
  id: string;
  title: string;
  description?: string;
  subCategory: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  questionsCount: number;
  durationMinutes: number;
  status: "Not Started" | "In Progress" | "Completed";
  scorePercent?: number;
}

export interface Specialization {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  testsCount: number;
  questionsCount: number;
  insightText: string;
  icon: string;
  color: "indigo" | "amber" | "sky" | "emerald" | "purple" | "rose" | "teal" | "violet" | "blue" | "orange" | "pink" | "slate";
  category: string;
  subcategories: string[];
  tests: TestItem[];
}

export interface StatItem {
  id: string;
  number: number;
  label: string;
  subtext: string;
  icon: string;
}

export const knowledgeBankStats: StatItem[] = [
  {
    id: "specializations",
    number: 15,
    label: "Specializations",
    subtext: "Across new topic maps",
    icon: "Compass",
  },
  {
    id: "tests",
    number: 6,
    label: "Tests",
    subtext: "Sharpen your skills",
    icon: "FileCheck",
  },
  {
    id: "questions",
    number: 60,
    label: "Questions",
    subtext: "Practice and master",
    icon: "HelpCircle",
  },
];

export const specializationsData: Specialization[] = [
  {
    id: "real-estate-fundamentals",
    title: "Real Estate Fundamentals",
    subtitle: "Build confidence in core real estate concepts and how the market works.",
    description: "Core concepts, market cycle, and industry overview",
    testsCount: 0,
    questionsCount: 0,
    insightText: "Strengthen this area for safer real estate decisions.",
    icon: "BookOpen",
    color: "indigo",
    category: "Real Estate & Land",
    subcategories: ["Market Cycles", "Asset Classes", "Valuation Basics"],
    tests: [],
  },
  {
    id: "legal",
    title: "Legal",
    subtitle: "Understand property ownership, title deeds, encumbrances and sales agreements.",
    description: "Property titles, ownership and agreements",
    testsCount: 0,
    questionsCount: 0,
    insightText: "Ensure clear legal standing and mitigate ownership risks.",
    icon: "Scale",
    color: "amber",
    category: "Legal & Compliance",
    subcategories: ["Title Deeds", "Sale Agreements", "Encumbrance Certificates"],
    tests: [],
  },
  {
    id: "approvals-compliance",
    title: "Approvals & Compliance",
    subtitle: "Master statutory sanctions, municipal clearances, and RERA compliance procedures.",
    description: "Statutory approvals and regulatory compliance",
    testsCount: 1,
    questionsCount: 10,
    insightText: "Prevent project delays and verify statutory clearances with confidence.",
    icon: "ShieldCheck",
    color: "sky",
    category: "Legal & Compliance",
    subcategories: ["RERA Approvals", "Municipal Sanctions", "Environmental Clearances"],
    tests: [
      {
        id: "app-test-1",
        title: "Statutory Approvals & RERA Compliance Essentials",
        description: "Assess your knowledge of mandatory project approvals, sanction plans, and RERA disclosure rules.",
        subCategory: "RERA Approvals",
        difficulty: "Intermediate",
        questionsCount: 10,
        durationMinutes: 15,
        status: "Not Started",
      },
    ],
  },
  {
    id: "land-property",
    title: "Land & Property",
    subtitle: "Examine agricultural, commercial, plotted, and residential property classifications.",
    description: "Types of land and property classifications",
    testsCount: 0,
    questionsCount: 0,
    insightText: "Evaluate parcel suitability and conversion prerequisites effectively.",
    icon: "Compass",
    color: "emerald",
    category: "Real Estate & Land",
    subcategories: ["Agricultural Conversion", "Plotted Layouts", "Commercial Freehold"],
    tests: [],
  },
  {
    id: "zoning-regulations",
    title: "Zoning & Regulations",
    subtitle: "Navigate master plans, floor space index (FSI/FAR), setbacks, and land-use restrictions.",
    description: "Land use, zoning and development regulations",
    testsCount: 1,
    questionsCount: 10,
    insightText: "Ensure all development proposals comply with municipal master plans.",
    icon: "Building",
    color: "purple",
    category: "Legal & Compliance",
    subcategories: ["FAR / FSI Calculations", "Master Plan Zones", "Setbacks & Road Widths"],
    tests: [
      {
        id: "zone-test-1",
        title: "Land Use, FAR & Development Control Regulations",
        description: "Practical test on computing permissible built-up area, setbacks, and mixed-use regulations.",
        subCategory: "FAR / FSI Calculations",
        difficulty: "Advanced",
        questionsCount: 10,
        durationMinutes: 15,
        status: "Not Started",
      },
    ],
  },
  {
    id: "location-micro-market",
    title: "Location & Micro-Market",
    subtitle: "Conduct catchment analysis, infrastructure impact studies, and local price trends.",
    description: "Location analysis and micro-market factors",
    testsCount: 0,
    questionsCount: 0,
    insightText: "Identify high-growth corridors and emerging investment pockets.",
    icon: "MapPin",
    color: "rose",
    category: "Market & Finance",
    subcategories: ["Corridor Growth", "Infrastructure Catalysts", "Price Trend Analysis"],
    tests: [],
  },
  {
    id: "market-knowledge",
    title: "Market Knowledge",
    subtitle: "Analyze demand-supply curves, inventory absorption rates, and cyclical shifts.",
    description: "Demand, demand cycles, and market dynamics",
    testsCount: 0,
    questionsCount: 0,
    insightText: "Position assets competitively based on market sentiment and data.",
    icon: "TrendingUp",
    color: "teal",
    category: "Market & Finance",
    subcategories: ["Absorption Rates", "Cyclical Forecasting", "Inventory Dynamics"],
    tests: [],
  },
  {
    id: "project-knowledge",
    title: "Project Knowledge",
    subtitle: "Evaluate builder track records, construction phases, amenities, and deliverables.",
    description: "Developer types, features and project details",
    testsCount: 0,
    questionsCount: 0,
    insightText: "Communicate project value propositions and milestone credibility.",
    icon: "Layers",
    color: "violet",
    category: "Real Estate & Land",
    subcategories: ["Builder Due Diligence", "Project Specifications", "Milestone Tracking"],
    tests: [],
  },
  {
    id: "property-knowledge",
    title: "Property Knowledge",
    subtitle: "Deep-dive into apartment layouts, carpet area metrics, and structural specifications.",
    description: "Property types, features and specifications",
    testsCount: 0,
    questionsCount: 0,
    insightText: "Explain carpet vs super built-up efficiency to buyers transparently.",
    icon: "Home",
    color: "blue",
    category: "Real Estate & Land",
    subcategories: ["Carpet Area Metrics", "Structural Types", "Unit Floor Plans"],
    tests: [],
  },
  {
    id: "finance-investment",
    title: "Finance & Investment",
    subtitle: "Structure capital stack, evaluate mortgage products, and calculate ROI & rental yields.",
    description: "Funding, home loans and investment basics",
    testsCount: 0,
    questionsCount: 0,
    insightText: "Formulate winning investment proposals with accurate financial models.",
    icon: "Coins",
    color: "emerald",
    category: "Market & Finance",
    subcategories: ["Home Loan Eligibility", "Rental Yield Modeling", "Capital Gains & Taxes"],
    tests: [],
  },
  {
    id: "construction",
    title: "Construction",
    subtitle: "Understand foundation types, RCC framing, finishing materials, and QA protocols.",
    description: "Construction process and quality checks",
    testsCount: 0,
    questionsCount: 0,
    insightText: "Inspect construction quality and reassure discerning buyers.",
    icon: "Hammer",
    color: "orange",
    category: "Real Estate & Land",
    subcategories: ["Quality Audits", "RCC Framing", "Finishing Milestones"],
    tests: [],
  },
  {
    id: "vaastu",
    title: "Vaastu",
    subtitle: "Apply authentic Vaastu Shastra principles to residential and commercial real estate.",
    description: "Vaastu principles for real estate decisions",
    testsCount: 0,
    questionsCount: 0,
    insightText: "Address buyer directional preferences with sound architectural alignment.",
    icon: "Sparkles",
    color: "pink",
    category: "Real Estate & Land",
    subcategories: ["Entrance Orientations", "Kitchen & Master Bedroom", "Commercial Layouts"],
    tests: [],
  },
  {
    id: "documentation",
    title: "Documentation",
    subtitle: "Manage essential paperwork including agreements, mutation, khata, and tax receipts.",
    description: "Key documents and record keeping",
    testsCount: 0,
    questionsCount: 0,
    insightText: "Keep transaction files audit-ready and prevent registration bottlenecks.",
    icon: "FileText",
    color: "slate",
    category: "Legal & Compliance",
    subcategories: ["Khata & Mutation", "Registration Process", "Power of Attorney"],
    tests: [],
  },
  {
    id: "sales-customer-knowledge",
    title: "Sales & Customer Knowledge",
    subtitle: "Handle objections, conduct site tours, and guide high-intent prospects to closure.",
    description: "Sales process and customer handling",
    testsCount: 0,
    questionsCount: 0,
    insightText: "Build trust and increase conversion ratios on high-ticket property visits.",
    icon: "Users",
    color: "blue",
    category: "Sales & Business",
    subcategories: ["Site Visit Management", "Price Objection Handling", "Follow-up Cadence"],
    tests: [],
  },
  {
    id: "business-entrepreneurship",
    title: "Business & Entrepreneurship",
    subtitle: "Scale your real estate brokerage, hire agents, and build high-performance revenue teams.",
    description: "Business setup, growth and entrepreneurship",
    testsCount: 4,
    questionsCount: 40,
    insightText: "Grow revenue and build high-performance advisory operations.",
    icon: "Briefcase",
    color: "indigo",
    category: "Sales & Business",
    subcategories: ["Brokerage Setup", "Team Scale-Up", "Deal Closing", "Commission Structuring"],
    tests: [
      {
        id: "biz-test-1",
        title: "Brokerage Business Setup & Licensing",
        description: "Covers RERA agent registration, professional indemnity, and operating structure compliance.",
        subCategory: "Brokerage Setup",
        difficulty: "Beginner",
        questionsCount: 10,
        durationMinutes: 12,
        status: "Not Started",
      },
      {
        id: "biz-test-2",
        title: "Real Estate Team Scale-Up & Operations",
        description: "Hiring, onboarding, performance metrics, and pipeline management for growing agencies.",
        subCategory: "Team Scale-Up",
        difficulty: "Intermediate",
        questionsCount: 10,
        durationMinutes: 15,
        status: "In Progress",
        scorePercent: 40,
      },
      {
        id: "biz-test-3",
        title: "Client Acquisition & High-Ticket Deal Closing",
        description: "Advanced closing strategies for luxury residential and commercial mandate sales.",
        subCategory: "Deal Closing",
        difficulty: "Advanced",
        questionsCount: 10,
        durationMinutes: 15,
        status: "Not Started",
      },
      {
        id: "biz-test-4",
        title: "Cash Flow Management & Commission Structuring",
        description: "Commission splits, developer invoicing, payout scheduling, and operational overheads.",
        subCategory: "Commission Structuring",
        difficulty: "Intermediate",
        questionsCount: 10,
        durationMinutes: 15,
        status: "Completed",
        scorePercent: 90,
      },
    ],
  },
];

export const specializationFilterOptions = [
  "All specializations",
  "With tests available",
  "Real Estate & Land",
  "Legal & Compliance",
  "Market & Finance",
  "Sales & Business",
] as const;

export type SpecializationFilterOption = (typeof specializationFilterOptions)[number];

export const difficultyFilterOptions = ["All", "Beginner", "Intermediate", "Advanced"] as const;
export type DifficultyFilterOption = (typeof difficultyFilterOptions)[number];

export const statusFilterOptions = ["All", "Not Started", "In Progress", "Completed"] as const;
export type StatusFilterOption = (typeof statusFilterOptions)[number];

export const sortFilterOptions = ["Recommended", "Most Popular", "Newest", "Questions Count"] as const;
export type SortFilterOption = (typeof sortFilterOptions)[number];
