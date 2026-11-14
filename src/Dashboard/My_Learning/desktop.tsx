import { useNavigate, useLocation } from "react-router-dom";
import { GraduationCap, BookOpen, ArrowRight } from "lucide-react";
import {
  myLearningHeader,
  myCoursesData,
  type MyLearningCourse,
} from "./data";
import Sidebar from "../sidebar";
import AdBanner from "../components/AdBanner";

export interface MyLearningDesktopProps {
  hideSidebar?: boolean;
  activeSubSection?: string;
  onNavigate?: (sectionId: string) => void;
}

export default function MyLearningDesktop({
  hideSidebar = false,
  onNavigate,
}: MyLearningDesktopProps) {
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

  const content = (
    <div className="w-full bg-[#F8FAFD] min-h-screen font-['Outfit'] select-text p-6 xl:p-8 flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-[#0B1D3A] tracking-tight">
          {myLearningHeader.title}
        </h1>
        <p className="text-xs text-[#64748B] font-medium mt-1">
          {myLearningHeader.subtitle}
        </p>
      </div>

      {/* ADVERTISEMENT: My Learning Section */}
      <AdBanner variant="leaderboard" label="SPONSORED" height={90} />

      {/* When no content has been shared: Clean Coming Soon State */}
      {myCoursesData.length === 0 ? (
        <div className="bg-white rounded-[8px] border border-[#E2E8F0] p-12 text-center flex flex-col items-center justify-center gap-4 shadow-[0_4px_16px_rgba(11,29,58,0.04)]">
          <div className="w-16 h-16 rounded-[8px] bg-[#F0F4FF] border border-[#0B1D3A]/[0.08] flex items-center justify-center text-[#C99A2E]">
            <GraduationCap className="w-8 h-8 text-[#C99A2E]" />
          </div>
          <div>
            <h2 className="text-base font-extrabold text-[#0B1D3A] tracking-tight">
              Learning Content Coming Soon
            </h2>
            <p className="text-xs text-[#64748B] max-w-md mt-1 font-medium leading-relaxed">
              Personal learning paths, enrolled courses, and progress tracking will appear here once published.
            </p>
          </div>
          <button
            type="button"
            onClick={handleBrowseCourses}
            className="relative overflow-hidden group/btn flex items-center gap-2 px-5 py-3 rounded-[8px] text-white text-xs font-bold shadow-[0_8px_18px_-8px_rgba(11,29,58,0.55)] transition-all duration-300 hover:shadow-[0_12px_24px_-8px_rgba(11,29,58,0.65)] hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer mt-2"
            style={{ background: "linear-gradient(135deg, #0B1D3A 0%, #1A3463 100%)" }}
          >
            <span className="absolute -inset-y-2 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-all duration-700 group-hover/btn:left-[130%] group-hover/btn:opacity-100" />
            <BookOpen className="w-3.5 h-3.5 text-[#D5AA45] relative" />
            <span className="relative">Browse Available Courses</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-300 relative group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {myCoursesData.map((course: MyLearningCourse) => (
            <div
              key={course.id}
              className="bg-white rounded-[8px] border border-[#E2E8F0] p-5 shadow-[0_4px_16px_rgba(11,29,58,0.04)] hover:-translate-y-1 hover:border-[#C99A2E]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold text-[#C99A2E] uppercase">
                  {course.category}
                </span>
                <h3 className="text-sm font-bold text-[#0B1D3A] mt-1">
                  {course.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  if (hideSidebar) {
    return content;
  }

  return (
    <div className="h-full min-h-screen lg:h-screen w-full bg-[#F8FAFD] flex overflow-hidden font-['Outfit'] select-text">
      <Sidebar activeItem="my-learning" className="h-full overflow-y-auto shrink-0 scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden" />
      <div className="flex-1 min-w-0 h-full overflow-y-auto scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">{content}</div>
    </div>
  );
}
