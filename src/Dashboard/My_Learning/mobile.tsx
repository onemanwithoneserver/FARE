import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  GraduationCap,
  BookOpen,
  ArrowRight,
  Menu,
  Bell,
} from "lucide-react";
import { myLearningHeader, myCoursesData } from "./data";
import trimmedLogo from "../../Components/FARE_Logo/SVG/Primary Logo Trimmed.svg";
import Sidebar from "../sidebar";
import AdBanner from "../components/AdBanner";

export interface MyLearningMobileProps {
  hideSidebar?: boolean;
  activeSubSection?: string;
  onNavigate?: (sectionId: string) => void;
}

export default function MyLearningMobile({
  hideSidebar = false,
  onNavigate,
}: MyLearningMobileProps = {}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const currentMode = location.pathname.startsWith("/mobile") ? "mobile" : "desktop";

  const handleBrowseCourses = () => {
    if (onNavigate) {
      onNavigate("courses");
    } else {
      navigate(`/${currentMode}/dashboard/courses`);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#F8FAFD] flex flex-col font-['Outfit'] select-text relative pb-16">
      {/* Mobile Top Header */}
      {!hideSidebar && (
        <header className="h-[52px] bg-white border-b border-slate-200 px-4 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              className="p-1 rounded-md text-slate-700 hover:bg-slate-100"
              title="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="bg-white rounded-md p-1 border border-slate-100 shadow-2xs w-7 h-7 flex items-center justify-center">
              <img
                src={trimmedLogo}
                alt="FARE Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-bold text-sm text-slate-900">My Learning</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="w-7 h-7 rounded-full flex items-center justify-center text-slate-600 relative"
              title="Notifications"
            >
              <Bell className="w-4 h-4" />
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 absolute top-1 right-1" />
            </button>
            <div className="w-7 h-7 rounded-full bg-[#0A1325] text-white flex items-center justify-center text-[10px] font-bold">
              U
            </div>
          </div>
        </header>
      )}

      {/* Common Mobile Sidebar Drawer */}
      {!hideSidebar && (
        <Sidebar
          isMobile={true}
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          activeItem="my-learning"
        />
      )}

      {/* Content */}
      <div className="p-4 flex flex-col gap-4">
        <div>
          <h1 className="text-xl font-black text-[#0B1D3A] tracking-tight">
            {myLearningHeader.title}
          </h1>
          <p className="text-xs text-[#64748B] font-medium mt-0.5">
            {myLearningHeader.subtitle}
          </p>
        </div>

        {/* Sponsored Ad Banner */}
        <AdBanner variant="inline" label="SPONSORED" height={64} />

        {myCoursesData.length === 0 && (
          <div className="bg-white rounded-[8px] border border-[#E2E8F0] p-8 text-center flex flex-col items-center justify-center gap-3 shadow-[0_4px_16px_rgba(11,29,58,0.04)]">
            <div className="w-14 h-14 rounded-[8px] bg-[#F0F4FF] border border-[#0B1D3A]/[0.08] flex items-center justify-center text-[#C99A2E]">
              <GraduationCap className="w-7 h-7 text-[#C99A2E]" />
            </div>
            <div>
              <h2 className="text-sm font-extrabold text-[#0B1D3A]">
                Learning Content Coming Soon
              </h2>
              <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                Personal learning tracks and enrolled courses will appear here when published.
              </p>
            </div>
            <button
              type="button"
              onClick={handleBrowseCourses}
              className="flex items-center gap-2 px-4 py-2.5 rounded-[8px] text-white text-xs font-bold shadow-[0_6px_16px_-6px_rgba(11,29,58,0.55)] mt-2 active:scale-[0.98]"
              style={{ background: "linear-gradient(135deg, #0B1D3A 0%, #1A3463 100%)" }}
            >
              <BookOpen className="w-3.5 h-3.5 text-[#D5AA45]" />
              <span>Browse Courses</span>
              <ArrowRight className="w-3 h-3 text-slate-300" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
