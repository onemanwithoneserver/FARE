export interface MetricCardData {
  id: string;
  icon: string;
  trend: string;
  value: string;
  title: string;
  subtext: string;
  iconBg: string;
  iconColor: string;
}

export interface ZoneSummary {
  id: string;
  zone: string;
  users: number;
  completion: number;
  completionColor: "gold" | "navy";
  avgScore: number;
  certs: number;
  status: "On Track" | "At Risk";
}

export interface QuickActionItem {
  id: string;
  icon: string;
  label: string;
  actionKey: string;
}

export const companyOverviewHeader = {
  breadcrumb: "COMPANY ADMIN · PROPVISTA REALTY",
  title: "Company Overview",
  subtitle: "148 users · 6 zones · All departments",
};

export const metricCardsData: MetricCardData[] = [
  {
    id: "total-users",
    icon: "Users",
    trend: "↗ 22%",
    value: "148",
    title: "Total Users",
    subtext: "across 6 zones",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-700",
  },
  {
    id: "completion-rate",
    icon: "CheckCircle2",
    trend: "↗ 7%",
    value: "67%",
    title: "Completion Rate",
    subtext: "company-wide",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    id: "active-courses",
    icon: "BookOpen",
    trend: "↗ 4%",
    value: "24",
    title: "Active Courses",
    subtext: "12 published this month",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    id: "certs-issued",
    icon: "Award",
    trend: "↗ 18%",
    value: "312",
    title: "Certificates Issued",
    subtext: "this quarter",
    iconBg: "bg-amber-100/60",
    iconColor: "text-amber-600",
  },
];

export const zoneSummariesData: ZoneSummary[] = [
  {
    id: "mumbai-north",
    zone: "Mumbai North",
    users: 28,
    completion: 74,
    completionColor: "gold",
    avgScore: 86,
    certs: 64,
    status: "On Track",
  },
  {
    id: "mumbai-south",
    zone: "Mumbai South",
    users: 22,
    completion: 68,
    completionColor: "navy",
    avgScore: 82,
    certs: 48,
    status: "On Track",
  },
  {
    id: "pune",
    zone: "Pune",
    users: 34,
    completion: 71,
    completionColor: "gold",
    avgScore: 84,
    certs: 72,
    status: "On Track",
  },
  {
    id: "navi-mumbai",
    zone: "Navi Mumbai",
    users: 18,
    completion: 52,
    completionColor: "navy",
    avgScore: 74,
    certs: 28,
    status: "At Risk",
  },
  {
    id: "thane",
    zone: "Thane",
    users: 26,
    completion: 63,
    completionColor: "navy",
    avgScore: 79,
    certs: 56,
    status: "On Track",
  },
  {
    id: "nashik",
    zone: "Nashik",
    users: 20,
    completion: 45,
    completionColor: "navy",
    avgScore: 70,
    certs: 44,
    status: "At Risk",
  },
];

export const quickActionItems: QuickActionItem[] = [
  {
    id: "assign-course",
    icon: "BookOpen",
    label: "Assign Course to Team",
    actionKey: "assign",
  },
  {
    id: "bulk-invite",
    icon: "UserPlus",
    label: "Bulk Invite Users",
    actionKey: "invite",
  },
  {
    id: "config-habits",
    icon: "SlidersHorizontal",
    label: "Configure Habit Activities",
    actionKey: "habits",
  },
  {
    id: "manage-perms",
    icon: "Shield",
    label: "Manage Permissions",
    actionKey: "permissions",
  },
];
