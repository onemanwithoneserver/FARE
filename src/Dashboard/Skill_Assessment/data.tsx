export interface SkillSpecialization {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: "blue" | "slate" | "indigo" | "sky" | "purple" | "rose" | "teal" | "amber";
  testsCount: number;
  questionsCount: number;
  advice: string;
  category: string;
}

export interface SkillStat {
  id: string;
  number: number;
  label: string;
  subtext: string;
  icon: string;
}

export const skillAssessmentHeader = {
  title: "Skill Assessment",
  subtitle: "Practice scenario-based assessments, topic by topic.",
  promoTitle: "Build your skills.",
  promoSubtitle: "Apply what you know.",
};

export const skillAssessmentStats: SkillStat[] = [
  {
    id: "specializations",
    number: 9,
    label: "Specializations",
    subtext: "Access new topic maps",
    icon: "BookOpen",
  },
  {
    id: "tests",
    number: 0,
    label: "Tests",
    subtext: "Sharpen your skills",
    icon: "ClipboardList",
  },
  {
    id: "questions",
    number: 0,
    label: "Questions",
    subtext: "Practice and master",
    icon: "HelpCircle",
  },
];

export const skillSpecializationsData: SkillSpecialization[] = [
  {
    id: "ai-automation-scenarios",
    title: "AI & Automation Scenarios",
    description: "Focused knowledge tests in AI & Automation Scenarios",
    icon: "BookOpen",
    color: "blue",
    testsCount: 0,
    questionsCount: 0,
    advice: "Strengthen your AI & automation knowledge for faster workflow execution.",
    category: "AI & Automation Scenarios",
  },
  {
    id: "business-skills",
    title: "Business Skills",
    description: "Focused knowledge tests in Business Skills",
    icon: "Briefcase",
    color: "slate",
    testsCount: 0,
    questionsCount: 0,
    advice: "Strengthen your business skills knowledge for safer real estate decisions.",
    category: "Business Skills",
  },
  {
    id: "channel-partner-scenarios",
    title: "Channel Partner Scenarios",
    description: "Focused knowledge tests in Channel Partner Scenarios",
    icon: "BookOpen",
    color: "indigo",
    testsCount: 0,
    questionsCount: 0,
    advice: "Strengthen your channel partner relationship management and incentive structuring.",
    category: "Channel Partner Scenarios",
  },
  {
    id: "customer-scenarios",
    title: "Customer Scenarios",
    description: "Focused knowledge tests in Customer Scenarios",
    icon: "Users",
    color: "sky",
    testsCount: 0,
    questionsCount: 0,
    advice: "Master client empathy, inquiry qualification, and objection de-escalation.",
    category: "Customer Scenarios",
  },
  {
    id: "digital-marketing-scenarios",
    title: "Digital & Marketing Scenarios",
    description: "Focused knowledge tests in Digital & Marketing Scenarios",
    icon: "BookOpen",
    color: "purple",
    testsCount: 0,
    questionsCount: 0,
    advice: "Maximize digital ad conversion, lead nurturing, and social media branding.",
    category: "Digital & Marketing Scenarios",
  },
  {
    id: "leadership-scenarios",
    title: "Leadership Scenarios",
    description: "Focused knowledge tests in Leadership Scenarios",
    icon: "BookOpen",
    color: "rose",
    testsCount: 0,
    questionsCount: 0,
    advice: "Build high-performance real estate sales teams and motivate consultants.",
    category: "Leadership Scenarios",
  },
  {
    id: "managerial-scenarios",
    title: "Managerial Scenarios",
    description: "Focused knowledge tests in Managerial Scenarios",
    icon: "BookOpen",
    color: "teal",
    testsCount: 0,
    questionsCount: 0,
    advice: "Master territory planning, daily pipeline audits, and quota governance.",
    category: "Managerial Scenarios",
  },
  {
    id: "professional-scenarios",
    title: "Professional Scenarios",
    description: "Focused knowledge tests in Professional Scenarios",
    icon: "BookOpen",
    color: "amber",
    testsCount: 0,
    questionsCount: 0,
    advice: "Uphold professional code of conduct, ethics, and legal disclosure norms.",
    category: "Professional Scenarios",
  },
  {
    id: "sales-scenarios",
    title: "Sales Scenarios",
    description: "Focused knowledge tests in Sales Scenarios",
    icon: "Users",
    color: "blue",
    testsCount: 0,
    questionsCount: 0,
    advice: "Sharpen spot token booking, rate negotiation, and client closing scripts.",
    category: "Sales Scenarios",
  },
];

export const skillFilterOptions = [
  "All specializations",
  "AI & Automation Scenarios",
  "Business Skills",
  "Channel Partner Scenarios",
  "Customer Scenarios",
  "Digital & Marketing Scenarios",
  "Leadership Scenarios",
  "Managerial Scenarios",
  "Professional Scenarios",
  "Sales Scenarios",
] as const;

export type SkillFilterOption = (typeof skillFilterOptions)[number];
