export interface ProgramStep {
  stepNumber: number;
  type: "COURSE" | "QUIZ" | "MOCK";
  label: string;
  title: string;
  courseId?: string;
  status: "completed" | "continue" | "locked";
  quizCompletedNote?: string;
}

export interface ProgramItem {
  id: string;
  title: string;
  tag: string;
  tagColor: string;
  coursesCount: number;
  quizzesCount: number;
  mocksCount: number;
  completedCount: number;
  totalCount: number;
  summaryText: string;
  icon?: string;
  description?: string;
  curriculum?: {
    courses: string[];
    quizzes: string[];
    mocks: string[];
  };
  steps?: ProgramStep[];
}

export const programsHeader = {
  title: "Programs",
  subtitle: "Packs of courses, quizzes, and mocks.",
};

export const programsData: ProgramItem[] = [
  {
    id: "program-one-edited",
    title: "Program One Edited",
    tag: "Retail",
    tagColor: "bg-[#FFFDF5] text-[#A16207] border-[#FDE68A]",
    coursesCount: 2,
    quizzesCount: 1,
    mocksCount: 1,
    completedCount: 2,
    totalCount: 4,
    summaryText: "2 courses · 1 quizzes · 1 mocks · 2 of 4 complete",
    description: "Curated foundational bundle for retail property consultants with interactive scenario assessments.",
    curriculum: {
      courses: [
        "Residential Sales Fundamentals",
        "Top Plotted Development Companies in Medchal",
      ],
      quizzes: ["Real Estate Fundamentals Diagnostic Quiz"],
      mocks: ["Fresher Sales Client Objection Mock"],
    },
    steps: [
      {
        stepNumber: 1,
        type: "COURSE",
        label: "COURSE",
        title: "Test Banner",
        status: "completed",
        courseId: "6a8bce1d5c501a3603065010",
      },
      {
        stepNumber: 2,
        type: "QUIZ",
        label: "QUIZ",
        title: "Quiz",
        status: "completed",
        quizCompletedNote: "Test ass is marked complete in this program.",
      },
      {
        stepNumber: 3,
        type: "MOCK",
        label: "MOCK · CONTINUE HERE",
        title: "Mock voice test",
        status: "continue",
      },
      {
        stepNumber: 4,
        type: "COURSE",
        label: "COURSE",
        title: "Test course 2",
        status: "locked",
        courseId: "6a8bce1d5c501a3603065011",
      },
    ],
  },
  {
    id: "open-plot-team-building",
    title: "Open Plot Team Building Program",
    tag: "Retail",
    tagColor: "bg-[#FFFDF5] text-[#A16207] border-[#FDE68A]",
    coursesCount: 4,
    quizzesCount: 4,
    mocksCount: 0,
    completedCount: 0,
    totalCount: 8,
    summaryText: "4 courses · 4 quizzes · 0 mocks · 0 of 8 complete",
    description: "Intensive team-scale training pack for plotted venture marketing, zoning laws, and joint closures.",
    curriculum: {
      courses: [
        "Team Scale-Up Mastery",
        "Recruitment Pitch & Onboarding Mastery",
        "New-Age Team Structure Mastery",
        "Zoning & TG-RERA Regulations",
      ],
      quizzes: [
        "Zoning & Master Plan Quiz",
        "Team Leadership Competency Check",
        "RERA Due Diligence Quiz",
        "Plot Demarcation & Layout Sanction Quiz",
      ],
      mocks: [],
    },
    steps: [
      {
        stepNumber: 1,
        type: "COURSE",
        label: "COURSE · CONTINUE HERE",
        title: "New-Age Team Structure Mastery",
        courseId: "6a8bce1d5c501a3603065010",
        status: "continue",
      },
      {
        stepNumber: 2,
        type: "QUIZ",
        label: "QUIZ",
        title: "Quiz 1: Team Structure Check",
        status: "locked",
      },
      {
        stepNumber: 3,
        type: "QUIZ",
        label: "QUIZ",
        title: "Quiz 2: Sales Cycle & Digital Roles Check",
        status: "locked",
      },
      {
        stepNumber: 4,
        type: "COURSE",
        label: "COURSE",
        title: "Top Plotted Development Companies in Medchal",
        courseId: "6a8bce1d5c501a3603065009",
        status: "locked",
      },
      {
        stepNumber: 5,
        type: "COURSE",
        label: "COURSE",
        title: "Recruitment Pitch & Onboarding Mastery",
        courseId: "6a8bce1d5c501a3603065011",
        status: "locked",
      },
      {
        stepNumber: 6,
        type: "QUIZ",
        label: "QUIZ",
        title: "Quiz 3: Recruitment Pitch Check",
        status: "locked",
      },
      {
        stepNumber: 7,
        type: "QUIZ",
        label: "QUIZ",
        title: "Quiz 4: KPIs & Agent Activation Check",
        status: "locked",
      },
      {
        stepNumber: 8,
        type: "COURSE",
        label: "COURSE",
        title: "Team Scale-Up Mastery",
        courseId: "6a8bce1d5c501a3603065012",
        status: "locked",
      },
    ],
  },
  {
    id: "residential-sales-placement",
    title: "Residential Sales Placement Track",
    tag: "Retail",
    tagColor: "bg-[#FFFDF5] text-[#A16207] border-[#FDE68A]",
    coursesCount: 6,
    quizzesCount: 3,
    mocksCount: 2,
    completedCount: 4,
    totalCount: 11,
    summaryText: "6 courses · 3 quizzes · 2 mocks · 4 of 11 complete",
    description: "Career placement bundle designed to prepare fresh and experienced consultants for tier-1 developer mandates.",
    curriculum: {
      courses: [
        "Residential Sales Placement Program",
        "High-Ticket Closer Mindset",
        "Vastu Principles for Real Estate Decisions",
        "Legal Property Titles & Encumbrance",
        "Customer Objection Handling Mastery",
        "Mortgage Funding & Home Loan Basics",
      ],
      quizzes: [
        "Legal Clearance & Title Check",
        "Home Loan Eligibility Assessment",
        "Customer Objection Quiz",
      ],
      mocks: [
        "Senior Plot Closer Negotiation Mock",
        "Site Visit Walkthrough Assessment",
      ],
    },
  },
  {
    id: "commercial-leasing-accelerator",
    title: "Commercial & Retail Leasing Accelerator",
    tag: "Commercial",
    tagColor: "bg-blue-50 text-blue-700 border-blue-200",
    coursesCount: 3,
    quizzesCount: 2,
    mocksCount: 1,
    completedCount: 1,
    totalCount: 6,
    summaryText: "3 courses · 2 quizzes · 1 mocks · 1 of 6 complete",
    description: "Specialized asset pack covering cap rates, term sheets, fit-out agreements, and institutional negotiations.",
    curriculum: {
      courses: [
        "Commercial Real Estate Fundamentals",
        "Net Operating Income & Cap Rate Modeling",
        "Corporate Tenant Profiling",
      ],
      quizzes: [
        "Commercial Lease Math & Yields",
        "LOI & Term Sheet Structure",
      ],
      mocks: ["Corporate Tenant Leasing Pitch"],
    },
  },
];
