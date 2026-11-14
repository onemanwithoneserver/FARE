import React, { useState, useMemo } from "react";
import {
  Search,
  Bell,
  SlidersHorizontal,
  Plus,
  Clock,
  Copy,
  Check,
  Layers,
  Play,
  Trash2,
  Sparkles,
} from "lucide-react";
import {
  coursesData,
  allCoursesData,
  navigationTabs,
  courseFilterOptions,
  type CourseFilterOption,
  type Course,
} from "./data";
import CourseDetail from "./CourseDetail";
import CreateCourseModal from "./CreateCourseModal";
import AddModuleModal from "./AddModuleModal";
import AddLessonModal from "./AddLessonModal";
import Sidebar from "../sidebar";
import AdBanner from "../components/AdBanner";
import AdActionModal from "../components/AdActionModal";

export interface DesktopProps {
  hideSidebar?: boolean;
  activeSubSection?: string;
  initialTab?: string;
}

// Golden Cityscape Silhouette Graphic matching the screenshot
function CityscapeGraphic() {
  return (
    <svg
      className="absolute right-0 bottom-0 h-full w-[45%] pointer-events-none opacity-90 overflow-hidden"
      viewBox="0 0 160 140"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="goldBuildingGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E5B242" />
          <stop offset="50%" stopColor="#C99424" />
          <stop offset="100%" stopColor="#8C6314" />
        </linearGradient>
        <linearGradient id="goldBuildingGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5D061" />
          <stop offset="100%" stopColor="#B3821C" />
        </linearGradient>
        <pattern id="windowGrid" width="4" height="6" patternUnits="userSpaceOnUse">
          <rect x="1" y="1" width="2" height="3" fill="#0A1428" opacity="0.35" />
        </pattern>
      </defs>

      {/* Building 1 */}
      <rect x="10" y="38" width="18" height="102" fill="url(#goldBuildingGrad1)" rx="1" />
      <rect x="10" y="38" width="18" height="102" fill="url(#windowGrid)" />

      {/* Building 2 */}
      <rect x="32" y="58" width="16" height="82" fill="url(#goldBuildingGrad2)" rx="1" />
      <rect x="32" y="58" width="16" height="82" fill="url(#windowGrid)" />

      {/* Building 3 (Tallest Center) */}
      <rect x="52" y="10" width="22" height="130" fill="url(#goldBuildingGrad1)" rx="1" />
      <rect x="52" y="10" width="22" height="130" fill="url(#windowGrid)" />

      {/* Building 4 */}
      <rect x="78" y="48" width="16" height="92" fill="url(#goldBuildingGrad2)" rx="1" />
      <rect x="78" y="48" width="16" height="92" fill="url(#windowGrid)" />

      {/* Building 5 (Tall) */}
      <rect x="98" y="22" width="20" height="118" fill="url(#goldBuildingGrad1)" rx="1" />
      <rect x="98" y="22" width="20" height="118" fill="url(#windowGrid)" />

      {/* Building 6 */}
      <rect x="122" y="42" width="18" height="98" fill="url(#goldBuildingGrad2)" rx="1" />
      <rect x="122" y="42" width="18" height="98" fill="url(#windowGrid)" />

      {/* Building 7 */}
      <rect x="144" y="60" width="16" height="80" fill="url(#goldBuildingGrad1)" rx="1" />
    </svg>
  );
}

// Skyscraper modern photo cover for cards with visualType === "photo"
function PhotoCoverGraphic() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="w-full h-full bg-cover bg-center opacity-45 scale-105"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop")`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1428] via-[#0A1428]/70 to-transparent" />
    </div>
  );
}

export default function Desktop({
  hideSidebar = false,
  activeSubSection,
  initialTab,
}: DesktopProps) {
  const [courses, setCourses] = useState<Course[]>(coursesData);
  const [allCourses, setAllCourses] = useState<Course[]>(allCoursesData);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isAddModuleOpen, setIsAddModuleOpen] = useState(false);
  const [isAddLessonOpen, setIsAddLessonOpen] = useState(false);

  const derivedTab = useMemo(() => {
    if (activeSubSection === "course-modules") return "course-modules";
    if (activeSubSection === "lessons") return "lessons";
    if (activeSubSection === "all-courses" || activeSubSection === "courses") return "courses";
    return initialTab || "courses";
  }, [activeSubSection, initialTab]);

  const [selectedTab, setSelectedTab] = useState<string | null>(null);
  const activeTab = selectedTab ?? derivedTab;
  const setActiveTab = (tab: string) => setSelectedTab(tab);

  const [activeFilter, setActiveFilter] = useState<CourseFilterOption>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [moduleSearchQuery, setModuleSearchQuery] = useState("");
  const [lessonSearchQuery, setLessonSearchQuery] = useState("");
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Sponsored Ad Action Modal State
  const [adModalOpen, setAdModalOpen] = useState(false);
  const [adActionType, setAdActionType] = useState<"apply" | "join">("apply");
  const [adMandateTitle, setAdMandateTitle] = useState("");

  const handleOpenAdAction = (type: "apply" | "join", title: string) => {
    setAdActionType(type);
    setAdMandateTitle(title);
    setAdModalOpen(true);
  };

  const handleCopyId = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Filter courses by tab, filter, and search
  const filteredCourses = useMemo(() => {
    return courses.filter((course: Course) => {
      const matchesFilter =
        activeFilter === "All" || course.status === activeFilter;

      const matchesSearch =
        !searchQuery.trim() ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.coverTitle.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [courses, activeFilter, searchQuery]);

  // Flat list of all modules across all courses (matching Screenshot 1 order)
  const allModules = useMemo(() => {
    return allCourses.flatMap((course) =>
      (course.modules || []).map((m) => ({
        ...m,
        parentCourse: course,
      }))
    );
  }, [allCourses]);

  // Filtered modules based on module search query
  const filteredModules = useMemo(() => {
    if (!moduleSearchQuery.trim()) return allModules;
    const q = moduleSearchQuery.toLowerCase();
    return allModules.filter(
      (m) =>
        m.title.toLowerCase().includes(q) ||
        (m.description && m.description.toLowerCase().includes(q)) ||
        m.parentCourse.title.toLowerCase().includes(q)
    );
  }, [allModules, moduleSearchQuery]);

  // Flat list of all lessons across all courses (matching Screenshot 2 order)
  const allLessons = useMemo(() => {
    return allCourses.flatMap((course) =>
      (course.modules || []).flatMap((m) =>
        (m.lessons || []).map((l) => ({
          ...l,
          parentModule: m,
          parentCourse: course,
        }))
      )
    );
  }, [allCourses]);

  // Filtered lessons based on lesson search query
  const filteredLessons = useMemo(() => {
    if (!lessonSearchQuery.trim()) return allLessons;
    const q = lessonSearchQuery.toLowerCase();
    return allLessons.filter(
      (l) =>
        l.title.toLowerCase().includes(q) ||
        l.parentModule.title.toLowerCase().includes(q) ||
        l.parentCourse.title.toLowerCase().includes(q)
    );
  }, [allLessons, lessonSearchQuery]);

  // Delete a module from course
  const handleDeleteModule = (courseId: string, moduleId: string) => {
    const updateCourseList = (list: Course[]) =>
      list.map((c) => {
        if (c.id !== courseId) return c;
        const updated = c.modules.filter((m) => m.id !== moduleId);
        return {
          ...c,
          modules: updated,
          modulesCount: updated.length,
        };
      });
    setCourses(updateCourseList);
    setAllCourses(updateCourseList);
  };

  // Delete a lesson from module
  const handleDeleteLesson = (
    courseId: string,
    moduleId: string,
    lessonId: string
  ) => {
    const updateCourseList = (list: Course[]) =>
      list.map((c) => {
        if (c.id !== courseId) return c;
        const updatedModules = c.modules.map((m) => {
          if (m.id !== moduleId) return m;
          return {
            ...m,
            lessons: m.lessons.filter((l) => l.id !== lessonId),
          };
        });
        const totalLessons = updatedModules.reduce(
          (sum, m) => sum + m.lessons.length,
          0
        );
        return {
          ...c,
          modules: updatedModules,
          lessonsCount: totalLessons,
        };
      });
    setCourses(updateCourseList);
    setAllCourses(updateCourseList);
  };

  // Add a new module
  const handleAddModule = (
    courseId: string,
    title: string,
    description: string
  ) => {
    const updateCourseList = (list: Course[]) =>
      list.map((c) => {
        if (c.id !== courseId) return c;
        const newModule = {
          id: `mod-${Date.now()}`,
          moduleNumber: (c.modules?.length || 0) + 1,
          title,
          description: description || undefined,
          updatedAt: "12 Nov 2026",
          lessons: [],
        };
        const updatedModules = [...(c.modules || []), newModule];
        return {
          ...c,
          modules: updatedModules,
          modulesCount: updatedModules.length,
        };
      });
    setCourses(updateCourseList);
    setAllCourses(updateCourseList);
  };

  // Add a new lesson
  const handleAddLesson = (
    courseId: string,
    moduleId: string,
    title: string,
    type: "VIDEO" | "ARTICLE" | "QUIZ" | "DOCUMENT"
  ) => {
    const updateCourseList = (list: Course[]) =>
      list.map((c) => {
        if (c.id !== courseId) return c;
        const updatedModules = c.modules.map((m) => {
          if (m.id !== moduleId) return m;
          const newLesson = {
            id: `les-${Date.now()}`,
            title,
            type,
            durationMinutes: 20,
            updatedAt: "12 Nov 2026",
            isCompleted: false,
          };
          return {
            ...m,
            lessons: [...(m.lessons || []), newLesson],
          };
        });
        const totalLessons = updatedModules.reduce(
          (sum, m) => sum + m.lessons.length,
          0
        );
        return {
          ...c,
          modules: updatedModules,
          lessonsCount: totalLessons,
        };
      });
    setCourses(updateCourseList);
    setAllCourses(updateCourseList);
  };

  return (
    <div className="h-full min-h-screen lg:h-screen w-full bg-[#F8FAFD] flex flex-col overflow-hidden font-['Outfit'] select-text">
      {/* Main Layout Container */}
      <div className="flex-1 flex w-full h-full overflow-hidden">
        {/* Left Sidebar */}
        {!hideSidebar && (
          <Sidebar
            activeItem="courses"
            className="h-full overflow-y-auto shrink-0"
          />
        )}

        {/* Right Main Body Content (Independent Scroll) */}
        <main className="flex-1 flex flex-col min-w-0 h-full bg-[#F8FAFD] overflow-y-auto scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {selectedCourse ? (
            <CourseDetail
              course={selectedCourse}
              onBack={() => setSelectedCourse(null)}
            />
          ) : (
            <>
              {/* Top Bar (Breadcrumb / Title, Global Search, Notifications, Avatar) */}
              {!hideSidebar && (
                <header className="h-[60px] bg-white border-b border-slate-200/80 px-6 xl:px-8 flex items-center justify-between gap-4 sticky top-0 z-40">
                  <h1 className="text-[17px] font-bold text-slate-900 tracking-tight shrink-0">
                    Courses
                  </h1>

                  {/* Search Input */}
                  <div className="flex-1 max-w-[380px] relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Search anything..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-[#F1F5F9] hover:bg-[#EDF2F7] focus:bg-white text-[13px] text-slate-800 placeholder:text-slate-400 pl-9 pr-3 py-1.5 rounded-lg border border-transparent focus:border-slate-300 focus:outline-none transition-all"
                    />
                  </div>

                  {/* Notification & User Actions */}
                  <div className="flex items-center gap-3 shrink-0">
                    <button
                      type="button"
                      className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors relative cursor-pointer"
                      title="Notifications"
                    >
                      <Bell className="w-4 h-4" />
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 absolute top-1.5 right-1.5" />
                    </button>
                    <div
                      className="w-8 h-8 rounded-full bg-[#0A1325] text-white flex items-center justify-center text-[12px] font-bold cursor-pointer hover:ring-2 hover:ring-slate-300 transition-all"
                      title="User profile"
                    >
                      U
                    </div>
                  </div>
                </header>
              )}

              {/* Sub Navigation Bar Tabs */}
              <div className="px-6 xl:px-8 pt-5">
                <div className="inline-flex bg-white p-1 rounded-[8px] border border-[#E2E8F0] shadow-[0_2px_8px_rgba(11,29,58,0.04)] gap-1">
                  {navigationTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4 py-1.5 rounded-[6px] text-[13px] font-bold transition-all cursor-pointer ${
                        activeTab === tab.id
                          ? "bg-[#0B1D3A] text-white shadow-[0_4px_12px_rgba(11,29,58,0.25)]"
                          : "text-[#64748B] hover:text-[#0B1D3A] hover:bg-[#F0F4FF]"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Course Content View */}
              <div className="px-6 xl:px-8 py-5 flex flex-col gap-4 flex-1">
                {/* TAB 1: COURSES VIEW */}
                {activeTab === "courses" && (
                  <>
                    {/* Header Title & Actions */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-xl font-black text-[#0B1D3A] tracking-tight">
                          Courses
                        </h2>
                        <p className="text-xs text-[#64748B] mt-0.5 font-medium">
                          {filteredCourses.length} courses · {filteredCourses.filter((c) => c.status === "In Progress").length} in progress
                        </p>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <div className="relative">
                          <button
                            type="button"
                            onClick={() => setShowFilterMenu(!showFilterMenu)}
                            className="flex items-center gap-1.5 bg-white border border-[#E2E8F0] hover:border-[#C99A2E]/50 text-[#0B1D3A] text-xs font-bold px-3 py-1.5 rounded-[8px] shadow-2xs cursor-pointer transition-colors"
                          >
                            <SlidersHorizontal className="w-3.5 h-3.5 text-[#C99A2E]" />
                            <span>Filter</span>
                          </button>
                          {showFilterMenu && (
                            <div className="absolute right-0 mt-1 w-44 bg-white border border-[#E2E8F0] rounded-[8px] shadow-[0_12px_30px_rgba(11,29,58,0.15)] py-1 z-30">
                              <div className="px-3 py-1 text-[11px] font-bold text-[#64748B] uppercase tracking-wider">
                                Filter By
                              </div>
                              {courseFilterOptions.map((opt) => (
                                <button
                                  key={opt}
                                  onClick={() => {
                                    setActiveFilter(opt);
                                    setShowFilterMenu(false);
                                  }}
                                  className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-[#F0F4FF] cursor-pointer ${
                                    activeFilter === opt
                                      ? "font-bold text-[#C99A2E] bg-[#FEF9EE]"
                                      : "text-[#475569]"
                                  }`}
                                >
                                  <span>{opt}</span>
                                  {activeFilter === opt && (
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#C99A2E]" />
                                  )}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>

                        <button
                          type="button"
                          onClick={() => setIsCreateModalOpen(true)}
                          className="relative overflow-hidden group/btn flex items-center gap-1.5 text-white text-xs font-bold px-4 py-2 rounded-[8px] shadow-[0_8px_18px_-8px_rgba(11,29,58,0.55)] cursor-pointer transition-all hover:shadow-[0_12px_24px_-8px_rgba(11,29,58,0.65)] hover:-translate-y-0.5 active:scale-[0.98]"
                          style={{
                            background:
                              "linear-gradient(135deg, #0B1D3A 0%, #1A3463 100%)",
                          }}
                        >
                          <span className="absolute -inset-y-2 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-all duration-700 group-hover/btn:left-[130%] group-hover/btn:opacity-100" />
                          <Plus className="w-3.5 h-3.5 text-[#D5AA45] relative" />
                          <span className="relative">New Course</span>
                        </button>
                      </div>
                    </div>

                    {/* Filter Pills */}
                    <div className="flex items-center gap-2 flex-wrap">
                      {courseFilterOptions.map((filter) => {
                        const isActive = activeFilter === filter;
                        return (
                          <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-3.5 py-1 rounded-[6px] text-xs font-bold transition-all cursor-pointer ${
                              isActive
                                ? "border border-[#C99A2E]/50 text-[#0B1D3A] bg-[#FEF9EE] shadow-2xs"
                                : "border border-[#E2E8F0] text-[#64748B] bg-white hover:border-[#C99A2E]/40 hover:text-[#0B1D3A]"
                            }`}
                          >
                            {filter}
                          </button>
                        );
                      })}
                    </div>

                    {/* Position K1 - CATALOGUE HIRING BANNER: White card with gray shade, text SPONSORED, CTA controls */}
                    <AdBanner
                      variant="banner"
                      label="SPONSORED"
                      primaryCtaText="Apply Now"
                      secondaryCtaText="Join Now"
                      onApply={() => handleOpenAdAction("apply", "Partner Program")}
                      onJoin={() => handleOpenAdAction("join", "Partner Program")}
                    />

                    {/* Course Cards Grid with In-Between Sponsored Ads */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
                      {filteredCourses.map((course, index) => (
                        <React.Fragment key={course.id}>
                          <div
                            onClick={() => setSelectedCourse(course)}
                            className="bg-white rounded-[8px] border border-[#E2E8F0] shadow-[0_4px_16px_rgba(11,29,58,0.04)] hover:-translate-y-1.5 hover:border-[#C99A2E]/50 hover:shadow-[0_18px_40px_rgba(11,29,58,0.14)] transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer"
                          >
                            {/* Card Cover Illustration Header */}
                            <div className="h-[148px] bg-gradient-to-br from-[#0B1D3A] to-[#1A3463] relative p-4 flex flex-col justify-between overflow-hidden">
                              {course.visualType === "photo" ? (
                                <PhotoCoverGraphic />
                              ) : (
                                <CityscapeGraphic />
                              )}

                              {/* Top Tag & Program Badges */}
                              <div className="relative z-10 flex flex-col items-start gap-1">
                                <span className="inline-block bg-white text-[#0B1D3A] text-[10px] font-bold px-2.5 py-0.5 rounded-[4px] shadow-2xs">
                                  {course.category}
                                </span>
                                <span className="text-[9px] font-bold tracking-widest text-[#D5AA45] uppercase">
                                  {course.program}
                                </span>
                              </div>

                              {/* Cover Title & Subtitle */}
                              <div className="relative z-10 pr-20">
                                <h3 className="text-white text-sm font-black leading-tight drop-shadow-2xs line-clamp-2">
                                  {course.coverTitle}
                                </h3>
                                <p className="text-white/70 text-[9.5px] font-medium mt-0.5 line-clamp-1">
                                  {course.coverSubtitle}
                                </p>
                              </div>

                              {/* K3 - HIRING CHIP: White chip with gray border */}
                              <div className="absolute right-3.5 bottom-3 z-10">
                                <span className="inline-flex items-center gap-1 bg-white/95 border border-[#E2E8F0] text-[#0B1D3A] text-[9.5px] font-bold px-2 py-0.5 rounded-[4px] shadow-2xs">
                                  <Sparkles className="w-2.5 h-2.5 text-[#C99A2E]" />
                                  <span>{course.id === "6a8bce1d5c501a3603065011" ? "5 companies hiring" : "3 companies hiring"}</span>
                                </span>
                              </div>
                            </div>

                            {/* Card Information Body */}
                            <div className="p-4 flex-1 flex flex-col justify-between">
                              <div>
                                <h4 className="text-[13.5px] font-bold text-[#0B1D3A] group-hover:text-[#C99A2E] transition-colors line-clamp-1">
                                  {course.title}
                                </h4>
                                <div className="flex items-center gap-1.5 mt-1">
                                  <span className="text-[11px] text-slate-400 font-mono truncate select-all">
                                    {course.id}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={(e) => handleCopyId(e, course.id)}
                                    className="text-slate-400 hover:text-slate-700 p-0.5 rounded cursor-pointer transition-colors"
                                    title="Copy ID"
                                  >
                                    {copiedId === course.id ? (
                                      <Check className="w-3 h-3 text-emerald-600" />
                                    ) : (
                                      <Copy className="w-3 h-3" />
                                    )}
                                  </button>
                                  <span className="text-[11px] text-[#64748B] font-medium">
                                    · {course.modulesCount} modules · {course.duration}
                                  </span>
                                </div>
                                <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-1">
                                  <Clock className="w-3 h-3 text-slate-400" />
                                  <span>Updated {course.updatedAt}</span>
                                </div>
                              </div>

                              {/* Progress Bar & Percentage */}
                              <div className="mt-4">
                                <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                                  <div
                                    className="bg-[#0A1325] h-full rounded-full transition-all duration-300"
                                    style={{ width: `${course.progressPercent}%` }}
                                  />
                                </div>
                                <div className="text-[11px] font-medium text-slate-500 mt-1">
                                  {course.progressPercent}% complete
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Position K2 - IN-GRID SPONSORED AD CARD: White card with gray shade, text SPONSORED, Join Now & Apply Now CTA controls */}
                          {index === 0 && (
                            <AdBanner
                              variant="card"
                              label="SPONSORED"
                              primaryCtaText="Apply Now"
                              secondaryCtaText="Join Now"
                              onApply={() => handleOpenAdAction("apply", "Partner Program")}
                              onJoin={() => handleOpenAdAction("join", "Partner Program")}
                            />
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    {filteredCourses.length === 0 && (
                      <div className="w-full bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-500 text-sm mt-4">
                        No courses match your active search or filter criteria.
                      </div>
                    )}
                  </>
                )}

                {/* TAB 2: COURSE MODULES VIEW (MATCHING SCREENSHOT 1) */}
                {activeTab === "course-modules" && (
                  <>
                    {/* Header: Title, Count & Add Module Button */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-xl font-black text-[#0B1D3A] tracking-tight">
                          Course Modules
                        </h2>
                        <p className="text-xs text-[#64748B] mt-0.5 font-medium">
                          {moduleSearchQuery
                            ? `${filteredModules.length} of 74 modules`
                            : "74 modules across 19 courses"}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setIsAddModuleOpen(true)}
                        className="flex items-center gap-1.5 bg-[#0A1325] hover:bg-[#152342] text-white text-xs font-bold px-4 py-2 rounded-[8px] shadow-sm cursor-pointer transition-all active:scale-[0.98]"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add Module</span>
                      </button>
                    </div>

                    {/* Dedicated Module Search Input matching screenshot */}
                    <div className="w-full relative mt-1">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        placeholder="Search modules or courses..."
                        value={moduleSearchQuery}
                        onChange={(e) => setModuleSearchQuery(e.target.value)}
                        className="w-full bg-white text-xs text-slate-800 placeholder:text-slate-400 pl-10 pr-4 py-2.5 rounded-[8px] border border-[#E2E8F0] shadow-2xs focus:border-slate-300 focus:outline-none transition-all"
                      />
                    </div>

                    {/* ADVERTISEMENT: Course Modules Section */}
                    <AdBanner
                      variant="banner"
                      label="SPONSORED"
                      primaryCtaText="Apply Now"
                      secondaryCtaText="Join Now"
                      onApply={() => handleOpenAdAction("apply", "Partner Program")}
                      onJoin={() => handleOpenAdAction("join", "Partner Program")}
                    />

                    {/* 3-Column Card Grid matching Screenshot 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
                      {filteredModules.map((module, index) => (
                        <React.Fragment key={`${module.parentCourse.id}-${module.id}`}>
                          <div
                            onClick={() => setSelectedCourse(module.parentCourse)}
                            className="bg-white rounded-[12px] border border-[#E2E8F0] p-5 shadow-[0_2px_8px_rgba(11,29,58,0.03)] hover:shadow-[0_12px_28px_rgba(11,29,58,0.08)] hover:border-slate-300 transition-all duration-200 cursor-pointer flex flex-col justify-between group"
                          >
                            <div>
                              {/* Top row: layers icon badge on left, trash icon on right */}
                              <div className="flex items-center justify-between">
                                <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] flex items-center justify-center text-[#1E3A8A]">
                                  <Layers className="w-4 h-4 text-[#1E3A8A]" />
                                </div>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleDeleteModule(
                                      module.parentCourse.id,
                                      module.id
                                    );
                                  }}
                                  className="p-1 text-slate-400 hover:text-rose-600 transition-colors cursor-pointer rounded hover:bg-rose-50"
                                  title="Delete module"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>

                              {/* Title */}
                              <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#1E3A8A] transition-colors mt-3 leading-snug">
                                {module.title}
                              </h3>

                              {/* Course tag pill */}
                              <div className="mt-2">
                                <span className="inline-block bg-[#F1F5F9] text-[#475569] text-[11px] font-semibold px-2.5 py-0.5 rounded-md max-w-full truncate">
                                  {module.parentCourse.title}
                                </span>
                              </div>

                              {/* Description */}
                              <p className="text-xs text-slate-500 mt-2.5 line-clamp-2 leading-relaxed">
                                {module.description ||
                                  "Course module covering core practical frameworks and operational execution."}
                              </p>
                            </div>

                            {/* Footer: Clock + Updated Date */}
                            <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-4">
                              <Clock className="w-3.5 h-3.5 text-slate-400" />
                              <span>Updated {module.updatedAt || "12 Nov 2026"}</span>
                            </div>
                          </div>

                          {/* In-Grid Sponsored Card between Module 1 and Module 2, matching Courses Tab */}
                          {index === 0 && (
                            <AdBanner
                              variant="card"
                              label="SPONSORED"
                              primaryCtaText="Apply Now"
                              secondaryCtaText="Join Now"
                              onApply={() => handleOpenAdAction("apply", "Module Partner Program")}
                              onJoin={() => handleOpenAdAction("join", "Module Partner Program")}
                            />
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    {filteredModules.length === 0 && (
                      <div className="w-full bg-white rounded-[12px] border border-[#E2E8F0] p-12 text-center text-slate-500 text-sm mt-2">
                        No course modules match your search.
                      </div>
                    )}
                  </>
                )}

                {/* TAB 3: LESSONS VIEW (MATCHING SCREENSHOT 2) */}
                {activeTab === "lessons" && (
                  <>
                    {/* Header: Title, Count & Add Lesson Button */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-xl font-black text-[#0B1D3A] tracking-tight">
                          Lessons
                        </h2>
                        <p className="text-xs text-[#64748B] mt-0.5 font-medium">
                          {lessonSearchQuery
                            ? `${filteredLessons.length} of 301 lessons`
                            : "301 lessons across 19 courses"}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setIsAddLessonOpen(true)}
                        className="flex items-center gap-1.5 bg-[#0A1325] hover:bg-[#152342] text-white text-xs font-bold px-4 py-2 rounded-[8px] shadow-sm cursor-pointer transition-all active:scale-[0.98]"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add Lesson</span>
                      </button>
                    </div>

                    {/* Dedicated Lesson Search Input matching screenshot */}
                    <div className="w-full relative mt-1">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        placeholder="Search lessons, modules, courses..."
                        value={lessonSearchQuery}
                        onChange={(e) => setLessonSearchQuery(e.target.value)}
                        className="w-full bg-white text-xs text-slate-800 placeholder:text-slate-400 pl-10 pr-4 py-2.5 rounded-[8px] border border-[#E2E8F0] shadow-2xs focus:border-slate-300 focus:outline-none transition-all"
                      />
                    </div>

                    {/* ADVERTISEMENT: Lessons Section */}
                    <AdBanner
                      variant="banner"
                      label="SPONSORED"
                      primaryCtaText="Apply Now"
                      secondaryCtaText="Join Now"
                      onApply={() => handleOpenAdAction("apply", "Partner Program")}
                      onJoin={() => handleOpenAdAction("join", "Partner Program")}
                    />

                    {/* Full-width vertical list of lessons with In-Between Sponsored Ads */}
                    <div className="flex flex-col gap-3 mt-2">
                      {filteredLessons.map((lesson, idx) => (
                        <React.Fragment key={`${lesson.parentCourse.id}-${lesson.parentModule.id}-${lesson.id}-${idx}`}>
                          <div
                            onClick={() => setSelectedCourse(lesson.parentCourse)}
                            className="bg-white rounded-[10px] border border-[#E2E8F0] px-4 py-3.5 shadow-[0_2px_6px_rgba(11,29,58,0.02)] hover:shadow-[0_8px_20px_rgba(11,29,58,0.06)] hover:border-slate-300 transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 group"
                          >
                            {/* Left: Play button circle + Title & Subtitle */}
                            <div className="flex items-center gap-3.5 min-w-0 flex-1">
                              <div className="w-9 h-9 rounded-full bg-[#F1F5F9] text-slate-700 flex items-center justify-center shrink-0 group-hover:bg-[#E2E8F0] transition-colors">
                                <Play className="w-3.5 h-3.5 fill-slate-700 ml-0.5 text-slate-700" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#1E3A8A] transition-colors truncate">
                                  {lesson.title}
                                </h3>
                                <p className="text-xs text-slate-500 mt-0.5 truncate">
                                  {lesson.parentCourse.title} · {lesson.parentModule.title}
                                </p>
                              </div>
                            </div>

                            {/* Right: VIDEO badge, Clock + Date, Trash icon */}
                            <div className="flex items-center gap-4 shrink-0">
                              <span className="text-[10px] font-bold tracking-wider text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200 uppercase">
                                {lesson.type || "VIDEO"}
                              </span>
                              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                                <Clock className="w-3.5 h-3.5 text-slate-400" />
                                <span>{lesson.updatedAt || "12 Nov 2026"}</span>
                              </div>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDeleteLesson(
                                    lesson.parentCourse.id,
                                    lesson.parentModule.id,
                                    lesson.id
                                  );
                                }}
                                className="p-1 text-slate-400 hover:text-rose-600 transition-colors cursor-pointer rounded hover:bg-rose-50"
                                title="Delete lesson"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          {/* Between Lessons In-Between Ad Banner */}
                          {idx === 1 && (
                            <div className="my-1">
                              <AdBanner
                                variant="banner"
                                label="SPONSORED"
                                primaryCtaText="Apply Now"
                                secondaryCtaText="Join Now"
                                onApply={() => handleOpenAdAction("apply", "Partner Program")}
                                onJoin={() => handleOpenAdAction("join", "Partner Program")}
                              />
                            </div>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    {filteredLessons.length === 0 && (
                      <div className="w-full bg-white rounded-[10px] border border-[#E2E8F0] p-12 text-center text-slate-500 text-sm mt-2">
                        No lessons match your search.
                      </div>
                    )}
                  </>
                )}
              </div>
            </>
          )}
        </main>
      </div>

      {/* Create Course Modal */}
      <CreateCourseModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCourseCreated={(newCourse) => setCourses([newCourse, ...courses])}
      />

      {/* Add Module Modal */}
      <AddModuleModal
        isOpen={isAddModuleOpen}
        onClose={() => setIsAddModuleOpen(false)}
        courses={courses}
        onAddModule={handleAddModule}
      />

      {/* Add Lesson Modal */}
      <AddLessonModal
        isOpen={isAddLessonOpen}
        onClose={() => setIsAddLessonOpen(false)}
        courses={courses}
        onAddLesson={handleAddLesson}
      />

      {/* Sponsored Ad Action Modal (Apply Now & Join Now) */}
      <AdActionModal
        isOpen={adModalOpen}
        onClose={() => setAdModalOpen(false)}
        actionType={adActionType}
        mandateTitle={adMandateTitle}
      />
    </div>
  );
}
