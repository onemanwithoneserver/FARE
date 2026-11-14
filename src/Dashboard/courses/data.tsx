export interface Lesson {
  id: string;
  title: string;
  type: "VIDEO" | "ARTICLE" | "QUIZ" | "DOCUMENT";
  durationMinutes: number;
  videoUrl?: string;
  description?: string;
  isCompleted?: boolean;
  updatedAt?: string;
}

export interface CourseModule {
  id: string;
  moduleNumber: number;
  title: string;
  description?: string;
  updatedAt?: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  category: string;
  program: string;
  coverTitle: string;
  coverSubtitle: string;
  title: string;
  overviewDescription: string;
  instructorName: string;
  instructorTitle: string;
  instructorAvatar: string;
  modulesCount: number;
  lessonsCount: number;
  lessonsCompleted: number;
  duration: string;
  updatedAt: string;
  progressPercent: number;
  status: "All" | "In Progress" | "Assigned" | "Completed" | "Available";
  visualType?: "cityscape" | "photo";
  photoUrl?: string;
  modules: CourseModule[];
}

export interface SidebarSubItem {
  id: string;
  label: string;
}

export interface SidebarItem {
  id: string;
  label: string;
  icon: string;
  active?: boolean;
  badge?: string;
  hasChevron?: boolean;
  subItems?: SidebarSubItem[];
}

export interface SidebarSection {
  title?: string;
  items: SidebarItem[];
}

export const sidebarSections: SidebarSection[] = [
  {
    items: [
      { id: "dashboard", label: "Dashboard", icon: "LayoutGrid" },
    ],
  },
  {
    title: "LEARN",
    items: [
      { id: "my-learning", label: "My Learning", icon: "GraduationCap" },
      { id: "courses", label: "Courses", icon: "BookOpen", active: true },
      { id: "programs", label: "Programs", icon: "Menu" },
    ],
  },
  {
    title: "ASSESS",
    items: [
      { id: "knowledge-bank", label: "Knowledge Bank", icon: "Landmark" },
      { id: "skill-assessment", label: "Skill Assessment", icon: "ShieldCheck" },
    ],
  },
  {
    title: "PRACTICE",
    items: [
      { id: "skill-practice", label: "Skill Practice", icon: "Target" },
      { id: "mock-templates", label: "Mock Templates", icon: "FileText" },
      { id: "daily-habits", label: "Daily Habits", icon: "Zap" },
      { id: "sales-planner", label: "Sales Planner", icon: "TrendingUp" },
    ],
  },
];

export const navigationTabs = [
  { id: "courses", label: "Courses" },
  { id: "course-modules", label: "Course Modules" },
  { id: "lessons", label: "Lessons" },
];

export const courseDetailTabs = [
  "Overview",
  "Modules",
  "Assignments",
  "Resources",
  "Discussion",
] as const;

export type CourseDetailTab = (typeof courseDetailTabs)[number];

export const courseFilterOptions = [
  "All",
  "In Progress",
  "Assigned",
  "Completed",
  "Available",
] as const;

export type CourseFilterOption = (typeof courseFilterOptions)[number];

export const courseNewAgeTeam: Course = {
  id: "6a8bce1d5c501a3603065010",
  category: "Leadership & Team Management",
  program: "TEAM BUILDING PROGRAM",
  coverTitle: "New-Age Team Structure Mastery",
  coverSubtitle: "Hire right · Define roles · Integrate digital · Build your structure",
  title: "New-Age Team Structure Mastery",
  overviewDescription: "Modern organizational design for real estate teams integrating CRM automation, digital marketing specialists, and dedicated closing executives.",
  instructorName: "6a8bce1d5c501a3603065010",
  instructorTitle: "Senior Faculty · FARE Academy",
  instructorAvatar: "6",
  modulesCount: 4,
  lessonsCount: 15,
  lessonsCompleted: 0,
  duration: "6h 15m",
  updatedAt: "12 Nov 2026",
  progressPercent: 0,
  status: "In Progress",
  visualType: "cityscape",
  modules: [
    {
      id: "mod-team-1",
      moduleNumber: 1,
      title: "Whom to Hire",
      description: "Determine profile types, recruiter metrics, and role requirements for scaling brokerage teams.",
      updatedAt: "12 Nov 2026",
      lessons: [
        {
          id: "les-th-1",
          title: "Whom to Hire - Profile Types",
          type: "VIDEO",
          durationMinutes: 25,
          updatedAt: "12 Nov 2026",
          isCompleted: false,
        },
        {
          id: "les-th-2",
          title: "Qualities to Look For",
          type: "VIDEO",
          durationMinutes: 25,
          updatedAt: "12 Nov 2026",
          isCompleted: false,
        },
        {
          id: "les-th-3",
          title: "Part-Time vs Full-Time",
          type: "VIDEO",
          durationMinutes: 25,
          updatedAt: "12 Nov 2026",
          isCompleted: false,
        },
        {
          id: "les-th-4",
          title: "Experienced vs Freshers vs Real Estate Experienced",
          type: "VIDEO",
          durationMinutes: 25,
          updatedAt: "12 Nov 2026",
          isCompleted: false,
        },
        {
          id: "les-th-5",
          title: "Individual Contributors vs Team Leaders",
          type: "VIDEO",
          durationMinutes: 25,
          updatedAt: "12 Nov 2026",
          isCompleted: false,
        },
      ],
    },
    {
      id: "mod-team-2",
      moduleNumber: 2,
      title: "Who Does What?",
      description: "Map sales stages, responsibilities, and marketing handoffs across team members.",
      updatedAt: "12 Nov 2026",
      lessons: [
        {
          id: "les-wdw-1",
          title: "Sales Stages - Types of Salespeople",
          type: "VIDEO",
          durationMinutes: 25,
          updatedAt: "12 Nov 2026",
          isCompleted: false,
        },
        {
          id: "les-wdw-2",
          title: "Understanding the Sales Cycle",
          type: "VIDEO",
          durationMinutes: 25,
          updatedAt: "12 Nov 2026",
          isCompleted: false,
        },
        {
          id: "les-wdw-3",
          title: "Integrating Marketing Roles into the Team",
          type: "VIDEO",
          durationMinutes: 25,
          updatedAt: "12 Nov 2026",
          isCompleted: false,
        },
      ],
    },
    {
      id: "mod-team-3",
      moduleNumber: 3,
      title: "Integrating Digital Roles",
      description: "Integrate performance lead generation, automated CRM workflows, and digital nurture specialists.",
      updatedAt: "12 Nov 2026",
      lessons: [
        {
          id: "les-idr-1",
          title: "Digital Lead Nurture Specialist Role",
          type: "VIDEO",
          durationMinutes: 25,
          updatedAt: "12 Nov 2026",
          isCompleted: false,
        },
        {
          id: "les-idr-2",
          title: "CRM Automation Manager Responsibilities",
          type: "VIDEO",
          durationMinutes: 25,
          updatedAt: "12 Nov 2026",
          isCompleted: false,
        },
        {
          id: "les-idr-3",
          title: "Performance Marketing Coordinator Sync",
          type: "VIDEO",
          durationMinutes: 25,
          updatedAt: "12 Nov 2026",
          isCompleted: false,
        },
      ],
    },
    {
      id: "mod-team-4",
      moduleNumber: 4,
      title: "Build Your Team Structure",
      description: "Draft hierarchical reporting trees, quota targets, commission tiers, and review cadences.",
      updatedAt: "12 Nov 2026",
      lessons: [
        {
          id: "les-bts-1",
          title: "Designing Reporting Hierarchies",
          type: "VIDEO",
          durationMinutes: 25,
          updatedAt: "12 Nov 2026",
          isCompleted: false,
        },
        {
          id: "les-bts-2",
          title: "Commission Splits & Role Specialization",
          type: "VIDEO",
          durationMinutes: 25,
          updatedAt: "12 Nov 2026",
          isCompleted: false,
        },
        {
          id: "les-bts-3",
          title: "Daily Sales Operating Cadence",
          type: "VIDEO",
          durationMinutes: 25,
          updatedAt: "12 Nov 2026",
          isCompleted: false,
        },
        {
          id: "les-bts-4",
          title: "Scaling from 5 to 50 Field Executives",
          type: "VIDEO",
          durationMinutes: 25,
          updatedAt: "12 Nov 2026",
          isCompleted: false,
        },
      ],
    },
  ],
};

export const courseCommercialLeasing: Course = {
  id: "6a8bce1d5c501a3603065015",
  category: "Real Estate KnowledgeSales Skills",
  program: "COMMERCIAL REAL ESTATE",
  coverTitle: "Commercial Leasing & Negotiation Fundamentals",
  coverSubtitle: "Tenant profiles · Lease terms · Cap rates · Deal structures",
  title: "Commercial Leasing & Negotiation Fundamentals",
  overviewDescription: "Master lease deed drafting, lock-in periods, security deposits, escalation clauses, and cap-rate analyses for Grade-A office spaces.",
  instructorName: "Kavita Rao",
  instructorTitle: "Commercial Advisory Partner",
  instructorAvatar: "K",
  modulesCount: 12,
  lessonsCount: 24,
  lessonsCompleted: 6,
  duration: "8h 15m",
  updatedAt: "12 Nov 2026",
  progressPercent: 25,
  status: "In Progress",
  visualType: "photo",
  modules: [
    {
      id: "mod-6-1",
      moduleNumber: 1,
      title: "Commercial Lease Terminology & Valuation",
      description: "Understand rent escalation clauses, notice periods, reinstatement obligations, and tenant fit-out periods.",
      updatedAt: "12 Nov 2026",
      lessons: [
        {
          id: "les-6-1",
          title: "Understanding Triple Net (NNN) Leases & CAM Charges",
          type: "VIDEO",
          durationMinutes: 45,
          updatedAt: "12 Nov 2026",
          isCompleted: true,
        },
      ],
    },
  ],
};

export const courseResidentialSales: Course = {
  id: "6a8bce1d5c501a3603065014",
  category: "Real Estate KnowledgeSales Skills",
  program: "PLACEMENT PROGRAM",
  coverTitle: "Residential Sales Placement Program",
  coverSubtitle: "29 modules · Prime real estate basics to closing & negotiation",
  title: "Residential Sales Placement Program",
  overviewDescription: "The comprehensive flagship placement curriculum covering end-to-end residential transactions from site qualification to registrar office closing.",
  instructorName: "Ramesh Sharma",
  instructorTitle: "Chief Sales Mentor · FARE",
  instructorAvatar: "R",
  modulesCount: 29,
  lessonsCount: 65,
  lessonsCompleted: 16,
  duration: "14h",
  updatedAt: "12 Nov 2026",
  progressPercent: 25,
  status: "In Progress",
  visualType: "cityscape",
  modules: [
    {
      id: "mod-5-1",
      moduleNumber: 1,
      title: "Prime Real Estate Fundamentals",
      description: "Master essential measurements, FAR calculations, super built-up vs carpet area, and layout plans.",
      updatedAt: "12 Nov 2026",
      lessons: [
        {
          id: "les-5-1",
          title: "Carpet Area vs Super Built-up Calculation",
          type: "VIDEO",
          durationMinutes: 30,
          updatedAt: "12 Nov 2026",
          isCompleted: true,
        },
      ],
    },
  ],
};

export const courseMedchal: Course = {
  id: "6a8bce1d5c501a3603065009",
  category: "Real Estate Knowledge",
  program: "LOCATION SPOTLIGHT",
  coverTitle: "Top Plot Developers in Medchal",
  coverSubtitle: "Affordability · Clear title · Gundlapochampally · Pudur · Shamirpet",
  title: "Top Plotted Development Companies in Medchal",
  overviewDescription: "A one-lesson location spotlight on the plotted-development companies and open-plot ventures active around Medchal — Athvelly, Dabirpur, Gundlapochampally, Pudur and Shamirpet.",
  instructorName: "6a8bce1d5c501a3603065010",
  instructorTitle: "Senior Faculty · FARE Academy",
  instructorAvatar: "6",
  modulesCount: 1,
  lessonsCount: 1,
  lessonsCompleted: 0,
  duration: "20 min",
  updatedAt: "12 Nov 2026",
  progressPercent: 25,
  status: "In Progress",
  visualType: "cityscape",
  modules: [
    {
      id: "mod-1",
      moduleNumber: 1,
      title: "Plotted Development Companies in Medchal",
      description: "Who is developing open-plot ventures around Medchal, where, and how to use this for project selection and...",
      updatedAt: "12 Nov 2026",
      lessons: [
        {
          id: "les-1",
          title: "Top Plot Developers in Medchal: Athvelly, Dabirpur, Gundlapochampally, Pudur & Shamirpet",
          type: "VIDEO",
          durationMinutes: 20,
          videoUrl: "https://example.com/medchal-plots",
          description: "Deep dive into layout approvals, connectivity catalysts, and developer repute across Medchal.",
          isCompleted: false,
          updatedAt: "12 Nov 2026",
        },
      ],
    },
  ],
};

export const courseTeamScaleUp: Course = {
  id: "6a8bce1d5c501a3603065011",
  category: "Leadership & Team Management",
  program: "TEAM BUILDING PROGRAM",
  coverTitle: "Team Scale-Up Mastery",
  coverSubtitle: "Diagnose · Plan · Lead · Recover performance",
  title: "Team Scale-Up Mastery",
  overviewDescription: "A comprehensive team building blueprint designed to diagnose underperforming agents, establish clear sales targets, and build scalable revenue engines.",
  instructorName: "Vikram Malhotra",
  instructorTitle: "Managing Director · FARE Leadership",
  instructorAvatar: "V",
  modulesCount: 4,
  lessonsCount: 8,
  lessonsCompleted: 2,
  duration: "7h 5m",
  updatedAt: "12 Nov 2026",
  progressPercent: 25,
  status: "In Progress",
  visualType: "cityscape",
  modules: [
    {
      id: "mod-2-1",
      moduleNumber: 1,
      title: "Performance Recovery & Problem-Solving",
      description: "Apply diagnostic insights and adaptive leadership to resolve sales, recruitment, engagement and team-performance...",
      updatedAt: "12 Nov 2026",
      lessons: [
        {
          id: "les-2-1",
          title: "Recovering Stalled or Inactive Agents",
          type: "VIDEO",
          durationMinutes: 25,
          updatedAt: "12 Nov 2026",
          isCompleted: true,
        },
        {
          id: "les-2-2",
          title: "Improving Site-Visit Execution & Conversion",
          type: "VIDEO",
          durationMinutes: 30,
          updatedAt: "12 Nov 2026",
          isCompleted: true,
        },
        {
          id: "les-2-3",
          title: "Improving Recruitment Output & Low Hiring",
          type: "VIDEO",
          durationMinutes: 35,
          updatedAt: "12 Nov 2026",
          isCompleted: false,
        },
        {
          id: "les-2-4",
          title: "Improving Follow-ups & Site-Visit Bookings",
          type: "VIDEO",
          durationMinutes: 30,
          updatedAt: "12 Nov 2026",
          isCompleted: false,
        },
        {
          id: "les-2-5",
          title: "Fixing Lead Generation Gaps & Market Exhaustion",
          type: "VIDEO",
          durationMinutes: 40,
          updatedAt: "12 Nov 2026",
          isCompleted: false,
        },
      ],
    },
    {
      id: "mod-2-2",
      moduleNumber: 2,
      title: "The Art of Leadership: Guiding, Mentoring & Growing Teams",
      description: "Establish productive routines, build an inclusive and accountable culture, track execution, and adapt leadershi...",
      updatedAt: "12 Nov 2026",
      lessons: [
        {
          id: "les-2-6",
          title: "Establishing Productive Routines and Accountability",
          type: "VIDEO",
          durationMinutes: 35,
          updatedAt: "12 Nov 2026",
          isCompleted: false,
        },
      ],
    },
    {
      id: "mod-2-3",
      moduleNumber: 3,
      title: "Performance Planning",
      description: "Connect purposeful team meetings with business planning, develop expected outcomes, and investigate performanc...",
      updatedAt: "12 Nov 2026",
      lessons: [
        {
          id: "les-2-7",
          title: "Connecting Purposeful Team Meetings with Business Goals",
          type: "VIDEO",
          durationMinutes: 40,
          updatedAt: "12 Nov 2026",
          isCompleted: false,
        },
      ],
    },
    {
      id: "mod-2-4",
      moduleNumber: 4,
      title: "Diagnose Team Performance",
      description: "Understand why teams and individuals underperform, group team members by performance patterns, and interpret KPI...",
      updatedAt: "12 Nov 2026",
      lessons: [
        {
          id: "les-2-8",
          title: "Diagnosing Root Causes of Underperformance",
          type: "VIDEO",
          durationMinutes: 30,
          updatedAt: "12 Nov 2026",
          isCompleted: false,
        },
      ],
    },
  ],
};

export const courseRecruitmentPitch: Course = {
  id: "6a8bce1d5c501a3603065012",
  category: "Leadership & Team Management",
  program: "TEAM BUILDING PROGRAM",
  coverTitle: "Recruitment Pitch & Onboarding Mastery",
  coverSubtitle: "Pitch the opportunity · Build your engine · Activate new agents",
  title: "Recruitment Pitch & Onboarding Mastery",
  overviewDescription: "Learn the exact scripts and interview funnels needed to attract top-tier property advisors and activate them into closing their first deal within 30 days.",
  instructorName: "Pooja Reddy",
  instructorTitle: "Head of Talent Acquisition · FARE",
  instructorAvatar: "P",
  modulesCount: 4,
  lessonsCount: 12,
  lessonsCompleted: 3,
  duration: "10h",
  updatedAt: "12 Nov 2026",
  progressPercent: 25,
  status: "In Progress",
  visualType: "cityscape",
  modules: [
    {
      id: "mod-3-1",
      moduleNumber: 1,
      title: "Team KPIs, Engagement & Agent Activation",
      description: "Define role-specific KPIs, set realistic expectations, engage team members appropriately, and guide new recruits...",
      updatedAt: "12 Nov 2026",
      lessons: [
        {
          id: "les-3-1",
          title: "Defining Role-Specific KPIs and Realistic Targets",
          type: "VIDEO",
          durationMinutes: 45,
          updatedAt: "12 Nov 2026",
          isCompleted: true,
        },
      ],
    },
  ],
};

export const courseHighTicket: Course = {
  id: "6a8bce1d5c501a3603065016",
  category: "Sales Skills",
  program: "ADVANCED CLOSING",
  coverTitle: "High-Ticket Client Objection Handling",
  coverSubtitle: "Price resistance · Developer reputation · Title verification",
  title: "High-Ticket Client Objection Handling",
  overviewDescription: "Frameworks for handling discerning luxury buyers, overcoming price resistance, and resolving developer reputation concerns gracefully.",
  instructorName: "Sanjay Singhania",
  instructorTitle: "Luxury Sales Specialist",
  instructorAvatar: "S",
  modulesCount: 8,
  lessonsCount: 16,
  lessonsCompleted: 4,
  duration: "4h 45m",
  updatedAt: "11 Nov 2026",
  progressPercent: 25,
  status: "In Progress",
  visualType: "cityscape",
  modules: [
    {
      id: "mod-7-1",
      moduleNumber: 1,
      title: "Dissecting Ultra-HNW Buyer Psychology",
      description: "Deconstruct the motivations of luxury buyers, wealth preservation goals, and prestige triggers.",
      updatedAt: "11 Nov 2026",
      lessons: [
        {
          id: "les-7-1",
          title: "Reframing Price Resistance on Villa Assets",
          type: "VIDEO",
          durationMinutes: 35,
          updatedAt: "11 Nov 2026",
          isCompleted: true,
        },
      ],
    },
  ],
};

export const courseRera: Course = {
  id: "6a8bce1d5c501a3603065017",
  category: "Real Estate Knowledge",
  program: "LEGAL & COMPLIANCE",
  coverTitle: "RERA & Land Title Verification Masterclass",
  coverSubtitle: "Due diligence · Survey numbers · Encumbrance certificates",
  title: "RERA & Land Title Verification Masterclass",
  overviewDescription: "Step-by-step masterclass on verifying survey numbers, checking revenue records (Pahani, 1B), and cross-verifying RERA project portal filings.",
  instructorName: "Adv. G. N. Murthy",
  instructorTitle: "Senior Property Advocate",
  instructorAvatar: "M",
  modulesCount: 6,
  lessonsCount: 12,
  lessonsCompleted: 3,
  duration: "3h 20m",
  updatedAt: "10 Nov 2026",
  progressPercent: 25,
  status: "In Progress",
  visualType: "cityscape",
  modules: [
    {
      id: "mod-8-1",
      moduleNumber: 1,
      title: "Title Verification Protocols",
      description: "Conduct thorough legal due diligence on agricultural conversion and DTCP/HMDA master plan zones.",
      updatedAt: "10 Nov 2026",
      lessons: [
        {
          id: "les-8-1",
          title: "Decoding 30-Year Encumbrance Certificates",
          type: "VIDEO",
          durationMinutes: 40,
          updatedAt: "10 Nov 2026",
          isCompleted: true,
        },
      ],
    },
  ],
};

// Tab 1: "Courses" Grid View - 8 courses across multiple rows with In-Grid Sponsored Ad
export const coursesData: Course[] = [
  courseNewAgeTeam,
  courseCommercialLeasing,
  courseResidentialSales,
  courseMedchal,
  courseTeamScaleUp,
  courseRecruitmentPitch,
  courseHighTicket,
  courseRera,
];

// Tab 2 & 3: Modules and Lessons View
export const allCoursesData: Course[] = [
  courseMedchal,
  courseTeamScaleUp,
  courseRecruitmentPitch,
  courseNewAgeTeam,
  courseCommercialLeasing,
  courseResidentialSales,
  courseHighTicket,
  courseRera,
];
