import {
  Target,
  Users,
  Clock,
  Calendar,
  CreditCard,
  CheckCircle,
  Video,
  MessageSquare,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";
import { ACCENTS } from "../../ui";

export interface FlowStep {
  stepNumber: string;
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  icon: LucideIcon;
  accent: typeof ACCENTS[0];
}

export const FLOW_PHASES = [
  {
    phase: "Phase 1: Discovery & Selection",
    desc: "Target your exact focus skill, browse verified mentors, and choose duration",
    steps: [
      {
        stepNumber: "01",
        phase: "Preparation",
        title: "SELECT SCENARIO",
        subtitle: "Handling a Price Objection",
        description: "Pinpoint the specific real-world challenge—price objection, need discovery, or high-stakes closing—you want to master.",
        tag: "Targeted Skill",
        icon: Target,
        accent: ACCENTS[0], // Navy
      },
      {
        stepNumber: "02",
        phase: "Preparation",
        title: "CHOOSE YOUR EXPERT",
        subtitle: "Search → Filter → Compare → Profile",
        description: "Filter verified specialists by domain, compare experience side-by-side, and choose your ideal mentor.",
        tag: "Verified Mentor",
        icon: Users,
        accent: ACCENTS[1], // Gold
      },
      {
        stepNumber: "03",
        phase: "Preparation",
        title: "CHOOSE SESSION",
        subtitle: "30 / 45 / 60 Minutes",
        description: "Select standard 45-min simulation or 60-min intensive practice with thorough coaching tailored to your goals.",
        tag: "Flexible Depth",
        icon: Clock,
        accent: ACCENTS[2], // Indigo
      },
    ],
  },
  {
    phase: "Phase 2: Scheduling & Confirmation",
    desc: "Lock in your calendar slot, review transparent fees, and receive meeting details",
    steps: [
      {
        stepNumber: "04",
        phase: "Scheduling",
        title: "CHOOSE TIME",
        subtitle: "Date → Available Slot",
        description: "Pick from live open calendar slots across Morning, Afternoon, or Evening with guaranteed mentor availability.",
        tag: "Instant Slots",
        icon: Calendar,
        accent: ACCENTS[3], // Teal
      },
      {
        stepNumber: "05",
        phase: "Scheduling",
        title: "CONFIRM & PAY",
        subtitle: "Scenario + Expert + Time + Price",
        description: "Transparent single-fee pricing with zero hidden platform charges and encrypted payment protection.",
        tag: "Secure Checkout",
        icon: CreditCard,
        accent: ACCENTS[4], // Rose
      },
      {
        stepNumber: "06",
        phase: "Scheduling",
        title: "BOOKING CONFIRMED",
        subtitle: "Google Meet link sent",
        description: "Instant calendar invite sync, Google Meet video link, and preparation rubric delivered directly to your inbox.",
        tag: "Automated Sync",
        icon: CheckCircle,
        accent: ACCENTS[5], // Emerald
      },
    ],
  },
  {
    phase: "Phase 3: Live Role-Play & Mastery",
    desc: "Experience real-world pressure testing, get rubric-based feedback, and level up",
    steps: [
      {
        stepNumber: "07",
        phase: "Execution",
        title: "LIVE MOCK",
        subtitle: "Brief → Role Play → Challenge → Response",
        description: "High-fidelity 1-on-1 video simulation where the expert plays a realistic, demanding customer in real-time.",
        tag: "Realistic Simulation",
        icon: Video,
        accent: ACCENTS[6], // Violet
      },
      {
        stepNumber: "08",
        phase: "Execution",
        title: "FEEDBACK",
        subtitle: "Strengths → Improvements → Rubric Score",
        description: "In-depth debrief and structured rubric scorecard highlighting communication, missed cues, and tactical fixes.",
        tag: "Actionable Scoring",
        icon: MessageSquare,
        accent: ACCENTS[7], // Amber
      },
      {
        stepNumber: "09",
        phase: "Execution",
        title: "PRACTISE AGAIN",
        subtitle: "Level Up Your Closing Skills",
        description: "Re-test with tougher objections or advance to higher-ticket scenarios until you achieve complete deal confidence.",
        tag: "Continuous Mastery",
        icon: RefreshCw,
        accent: ACCENTS[8], // Sky
      },
    ],
  },
];
