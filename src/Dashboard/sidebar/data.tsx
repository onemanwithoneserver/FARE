export interface SidebarSubItem {
  id: string;
  label: string;
}

export interface SidebarItem {
  id: string;
  label: string;
  icon: string;
  hasChevron?: boolean;
  subItems?: SidebarSubItem[];
}

export interface SidebarSection {
  title?: string;
  items: SidebarItem[];
}

export interface TenantInfo {
  id: string;
  name: string;
  avatarText: string;
}

export const defaultTenant: TenantInfo = {
  id: "fare-retail",
  name: "Fare Retail",
  avatarText: "FR",
};

export const availableTenants: TenantInfo[] = [
  { id: "fare-retail", name: "Fare Retail", avatarText: "FR" },
  { id: "fare-corporate", name: "Fare Corporate", avatarText: "FC" },
  { id: "fare-academy", name: "Fare Academy", avatarText: "FA" },
];

export const sidebarSections: SidebarSection[] = [
  {
    items: [
      {
        id: "dashboard",
        label: "Dashboard",
        icon: "LayoutGrid",
      },
    ],
  },
  {
    title: "LEARN",
    items: [
      {
        id: "my-learning",
        label: "My Learning",
        icon: "GraduationCap",
      },
      {
        id: "courses",
        label: "Courses",
        icon: "BookOpen",
      },
      {
        id: "programs",
        label: "Programs",
        icon: "Menu",
      },
    ],
  },
  {
    title: "ASSESS",
    items: [
      {
        id: "knowledge-bank",
        label: "Knowledge Bank",
        icon: "Landmark",
      },
      {
        id: "skill-assessment",
        label: "Skill Assessment",
        icon: "ShieldCheck",
      },
    ],
  },
  {
    title: "PRACTICE",
    items: [
      {
        id: "skill-practice",
        label: "Skill Practice",
        icon: "Target",
      },
      { id: "mock-templates", label: "Mock Templates", icon: "FileText" },
      { id: "daily-habits", label: "Daily Habits", icon: "Zap" },
      { id: "sales-planner", label: "Sales Planner", icon: "TrendingUp" },
    ],
  },
];
