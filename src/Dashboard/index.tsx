import { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
  Bell,
  Search,
  Menu,
} from "lucide-react";
import trimmedLogo from "../Components/FARE_Logo/SVG/Primary Logo Trimmed.svg";
import CoursesDesktop from "./courses/desktop";
import CoursesMobile from "./courses/mobile";
import KnowledgeBankDesktop from "./knowledge-bank/desktop";
import KnowledgeBankMobile from "./knowledge-bank/mobile";
import DashboardMainDesktop from "./Dashboard_Main/desktop";
import DashboardMainMobile from "./Dashboard_Main/mobile";
import ProgramsDesktop from "./Programs/desktop";
import ProgramsMobile from "./Programs/mobile";
import SkillAssessmentDesktop from "./Skill_Assessment/desktop";
import SkillAssessmentMobile from "./Skill_Assessment/mobile";
import MyLearningDesktop from "./My_Learning/desktop";
import MyLearningMobile from "./My_Learning/mobile";
import Sidebar from "./sidebar";
import {
  SkillPracticeSection,
  MockTemplatesSection,
  DailyHabitsSection,
  SalesPlannerSection,
} from "./sections";

export type DashboardSection =
  | "dashboard"
  | "my-learning"
  | "courses"
  | "programs"
  | "knowledge-bank"
  | "skill-assessment"
  | "skill-practice"
  | "mock-templates"
  | "daily-habits"
  | "sales-planner";

export interface DashboardProps {
  isMobile?: boolean;
  initialSection?: DashboardSection;
}

const sectionTitleMap: Record<DashboardSection, string> = {
  dashboard: "Dashboard Overview",
  "my-learning": "My Learning",
  courses: "Courses",
  programs: "Programs & Tracks",
  "knowledge-bank": "Knowledge Bank",
  "skill-assessment": "Skill Assessment",
  "skill-practice": "Skill Practice",
  "mock-templates": "Mock Templates",
  "daily-habits": "Daily Habits",
  "sales-planner": "Sales Planner",
};

export default function Dashboard({
  isMobile = false,
  initialSection = "courses",
}: DashboardProps) {
  const { section } = useParams<{ section?: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const currentMode = location.pathname.startsWith("/mobile") ? "mobile" : "desktop";

  const [internalSection, setInternalSection] = useState<DashboardSection>(initialSection);
  const activeSection: DashboardSection = (section as DashboardSection) || internalSection;
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const searchParams = new URLSearchParams(location.search);
  const activeSubSection = searchParams.get("sub") || undefined;

  const handleSectionSelect = (sectionId: string, subItemId?: string) => {
    const validSection = sectionId as DashboardSection;
    setInternalSection(validSection);
    const targetUrl = subItemId
      ? `/${currentMode}/dashboard/${sectionId}?sub=${subItemId}`
      : `/${currentMode}/dashboard/${sectionId}`;
    navigate(targetUrl);
    if (isMobile) {
      setIsMobileDrawerOpen(false);
    }
  };

  const renderSectionContent = () => {
    switch (activeSection) {
      case "dashboard":
        return isMobile ? (
          <DashboardMainMobile hideSidebar={true} activeSubSection={activeSubSection} />
        ) : (
          <DashboardMainDesktop hideSidebar={true} activeSubSection={activeSubSection} />
        );
      case "my-learning":
        return isMobile ? (
          <MyLearningMobile
            hideSidebar={true}
            activeSubSection={activeSubSection}
            onNavigate={handleSectionSelect}
          />
        ) : (
          <MyLearningDesktop
            hideSidebar={true}
            activeSubSection={activeSubSection}
            onNavigate={handleSectionSelect}
          />
        );
      case "courses":
        return isMobile ? (
          <CoursesMobile hideSidebar={true} activeSubSection={activeSubSection} />
        ) : (
          <CoursesDesktop hideSidebar={true} activeSubSection={activeSubSection} />
        );
      case "programs":
        return isMobile ? (
          <ProgramsMobile hideSidebar={true} activeSubSection={activeSubSection} />
        ) : (
          <ProgramsDesktop hideSidebar={true} activeSubSection={activeSubSection} />
        );
      case "knowledge-bank":
        return isMobile ? (
          <KnowledgeBankMobile hideSidebar={true} activeSubSection={activeSubSection} />
        ) : (
          <KnowledgeBankDesktop hideSidebar={true} activeSubSection={activeSubSection} />
        );
      case "skill-assessment":
        return isMobile ? (
          <SkillAssessmentMobile hideSidebar={true} activeSubSection={activeSubSection} />
        ) : (
          <SkillAssessmentDesktop hideSidebar={true} activeSubSection={activeSubSection} />
        );
      case "skill-practice":
        return <SkillPracticeSection onNavigate={handleSectionSelect} />;
      case "mock-templates":
        return <MockTemplatesSection onNavigate={handleSectionSelect} />;
      case "daily-habits":
        return <DailyHabitsSection onNavigate={handleSectionSelect} />;
      case "sales-planner":
        return <SalesPlannerSection onNavigate={handleSectionSelect} />;
      default:
        return isMobile ? (
          <CoursesMobile hideSidebar={true} activeSubSection={activeSubSection} />
        ) : (
          <CoursesDesktop hideSidebar={true} activeSubSection={activeSubSection} />
        );
    }
  };

  if (isMobile) {
    return (
      <div className="min-h-screen w-full bg-[#F8FAFD] flex flex-col font-['Outfit'] select-text relative pb-16">
        {/* Mobile Top App Bar */}
        <header className="h-[52px] bg-white border-b border-[#E2E8F0] px-4 flex items-center justify-between sticky top-0 z-40 shadow-[0_2px_8px_rgba(11,29,58,0.03)]">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsMobileDrawerOpen(true)}
              className="p-1 rounded-md text-[#0B1D3A] hover:bg-[#F0F4FF] cursor-pointer"
              title="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="bg-white rounded-md p-1 border border-[#E2E8F0] shadow-2xs w-7 h-7 flex items-center justify-center">
              <img
                src={trimmedLogo}
                alt="FARE Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-bold text-sm text-[#0B1D3A]">
              {sectionTitleMap[activeSection] || "Dashboard"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="w-7 h-7 rounded-full flex items-center justify-center text-slate-600 relative hover:bg-[#F0F4FF] cursor-pointer"
              title="Notifications"
            >
              <Bell className="w-4 h-4 text-slate-600" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#C99A2E] absolute top-1 right-1" />
            </button>
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#0B1D3A] to-[#1A3463] text-white flex items-center justify-center text-[10px] font-bold border border-[#C99A2E]/40">
              U
            </div>
          </div>
        </header>

        {/* Common Mobile Sidebar Drawer */}
        <Sidebar
          isMobile={true}
          isOpen={isMobileDrawerOpen}
          onClose={() => setIsMobileDrawerOpen(false)}
          activeItem={activeSection}
          activeSubItem={activeSubSection}
          onSelectItem={handleSectionSelect}
        />

        {/* Dynamic Section Content */}
        <main className="flex-1">
          {renderSectionContent()}
        </main>
      </div>
    );
  }

  // Desktop View
  return (
    <div className="h-full w-full bg-[#F8FAFD] flex overflow-hidden font-['Outfit'] select-text">
      {/* Common Desktop Left Pane Sidebar */}
      <Sidebar
        activeItem={activeSection}
        activeSubItem={activeSubSection}
        onSelectItem={handleSectionSelect}
        className="h-full overflow-y-auto shrink-0"
      />

      {/* Main Content Area (Right Pane with independent scroll) */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden bg-[#F8FAFD]">
        {/* Top Header */}
        <header className="h-[60px] bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] px-6 xl:px-8 flex items-center justify-between gap-4 shrink-0 z-40 shadow-[0_2px_10px_rgba(11,29,58,0.03)]">
          <h1 className="text-[17px] font-extrabold text-[#0B1D3A] tracking-tight shrink-0">
            {sectionTitleMap[activeSection] || "Dashboard"}
          </h1>

          <div className="flex-1 max-w-[380px] relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search anything..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F0F4FF]/60 hover:bg-[#F0F4FF] focus:bg-white text-[13px] text-[#0B1D3A] placeholder:text-slate-400 pl-9 pr-3 py-1.5 rounded-[8px] border border-transparent focus:border-[#C99A2E]/50 focus:ring-2 focus:ring-[#C99A2E]/20 focus:outline-none transition-all duration-200"
            />
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-[#F0F4FF] transition-colors relative cursor-pointer"
              title="Notifications"
            >
              <Bell className="w-4 h-4" />
              <span className="w-2 h-2 rounded-full bg-[#C99A2E] shadow-[0_0_6px_#C99A2E] absolute top-1.5 right-1.5" />
            </button>
            <div
              className="w-8 h-8 rounded-full text-white flex items-center justify-center text-[12px] font-bold cursor-pointer hover:ring-2 hover:ring-[#C99A2E] transition-all shadow-xs"
              style={{ background: "linear-gradient(135deg, #0B1D3A 0%, #1A3463 100%)" }}
              title="User profile"
            >
              U
            </div>
          </div>
        </header>

        {/* Dynamic Body View */}
        <main className="flex-1 min-h-0 overflow-y-auto scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {renderSectionContent()}
        </main>
      </div>
    </div>
  );
}

export { default as Courses } from "./courses";
export { default as KnowledgeBank } from "./knowledge-bank";
export { default as Sidebar } from "./sidebar";
export { default as DashboardMain } from "./Dashboard_Main";
export { default as Programs } from "./Programs";
export { default as SkillAssessment } from "./Skill_Assessment";
export { default as MyLearning } from "./My_Learning";
