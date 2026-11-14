import React, { useState, useMemo } from "react";
import {
  Search,
  Bell,
  SlidersHorizontal,
  Plus,
  Clock,
  Menu,
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
import trimmedLogo from "../../Components/FARE_Logo/SVG/Primary Logo Trimmed.svg";
import CourseDetail from "./CourseDetail";
import CreateCourseModal from "./CreateCourseModal";
import AddModuleModal from "./AddModuleModal";
import AddLessonModal from "./AddLessonModal";
import Sidebar from "../sidebar";
import AdBanner from "../components/AdBanner";
import AdActionModal from "../components/AdActionModal";

export interface MobileProps {
  hideSidebar?: boolean;
  activeSubSection?: string;
  initialTab?: string;
}

// Golden Cityscape Silhouette Graphic for mobile cards
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
        <linearGradient id="goldBuildingGradMob1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E5B242" />
          <stop offset="50%" stopColor="#C99424" />
          <stop offset="100%" stopColor="#8C6314" />
        </linearGradient>
        <linearGradient id="goldBuildingGradMob2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5D061" />
          <stop offset="100%" stopColor="#B3821C" />
        </linearGradient>
        <pattern id="windowGridMob" width="4" height="6" patternUnits="userSpaceOnUse">
          <rect x="1" y="1" width="2" height="3" fill="#0A1428" opacity="0.35" />
        </pattern>
      </defs>

      <rect x="10" y="38" width="18" height="102" fill="url(#goldBuildingGradMob1)" rx="1" />
      <rect x="10" y="38" width="18" height="102" fill="url(#windowGridMob)" />

      <rect x="32" y="58" width="16" height="82" fill="url(#goldBuildingGradMob2)" rx="1" />
      <rect x="32" y="58" width="16" height="82" fill="url(#windowGridMob)" />

      <rect x="52" y="10" width="22" height="130" fill="url(#goldBuildingGradMob1)" rx="1" />
      <rect x="52" y="10" width="22" height="130" fill="url(#windowGridMob)" />

      <rect x="78" y="48" width="16" height="92" fill="url(#goldBuildingGradMob2)" rx="1" />
      <rect x="78" y="48" width="16" height="92" fill="url(#windowGridMob)" />

      <rect x="98" y="22" width="20" height="118" fill="url(#goldBuildingGradMob1)" rx="1" />
      <rect x="98" y="22" width="20" height="118" fill="url(#windowGridMob)" />

      <rect x="122" y="42" width="18" height="98" fill="url(#goldBuildingGradMob2)" rx="1" />
      <rect x="122" y="42" width="18" height="98" fill="url(#windowGridMob)" />

      <rect x="144" y="60" width="16" height="80" fill="url(#goldBuildingGradMob1)" rx="1" />
    </svg>
  );
}

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

export default function Mobile({
  hideSidebar = false,
  activeSubSection,
  initialTab,
}: MobileProps = {}) {
  const [courses, setCourses] = useState<Course[]>(coursesData);
  const [allCourses, setAllCourses] = useState<Course[]>(allCoursesData);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isAddModuleOpen, setIsAddModuleOpen] = useState(false);
  const [isAddLessonOpen, setIsAddLessonOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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

  const allModules = useMemo(() => {
    return allCourses.flatMap((course) =>
      (course.modules || []).map((m) => ({
        ...m,
        parentCourse: course,
      }))
    );
  }, [allCourses]);

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

  const handleDeleteModule = (courseId: string, moduleId: string) => {
    const updateList = (list: Course[]) =>
      list.map((c) => {
        if (c.id !== courseId) return c;
        const updated = c.modules.filter((m) => m.id !== moduleId);
        return {
          ...c,
          modules: updated,
          modulesCount: updated.length,
        };
      });
    setCourses(updateList);
    setAllCourses(updateList);
  };

  const handleDeleteLesson = (
    courseId: string,
    moduleId: string,
    lessonId: string
  ) => {
    const updateList = (list: Course[]) =>
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
    setCourses(updateList);
    setAllCourses(updateList);
  };

  const handleAddModule = (
    courseId: string,
    title: string,
    description: string
  ) => {
    const updateList = (list: Course[]) =>
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
    setCourses(updateList);
    setAllCourses(updateList);
  };

  const handleAddLesson = (
    courseId: string,
    moduleId: string,
    title: string,
    type: "VIDEO" | "ARTICLE" | "QUIZ" | "DOCUMENT"
  ) => {
    const updateList = (list: Course[]) =>
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
    setCourses(updateList);
    setAllCourses(updateList);
  };

  return (
    <div className="min-h-screen w-full bg-[#F8FAFD] flex flex-col font-['Outfit'] select-text">
      {/* Mobile Top App Bar */}
      <header className="h-14 bg-white border-b border-slate-200/80 px-4 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          {!hideSidebar && (
            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              className="p-1 text-slate-700 hover:text-slate-900"
              aria-label="Open sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>
          )}
          <img src={trimmedLogo} alt="FARE" className="h-6 w-auto object-contain" />
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="w-8 h-8 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-100"
          >
            <Bell className="w-4 h-4" />
          </button>
          <div className="w-7 h-7 rounded-full bg-[#0A1325] text-white flex items-center justify-center text-xs font-bold">
            U
          </div>
        </div>
      </header>

      {/* Mobile Slide-out Sidebar Drawer */}
      {!hideSidebar && isDrawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex"
          onClick={() => setIsDrawerOpen(false)}
        >
          <div
            className="w-72 bg-[#0A1325] h-full shadow-2xl relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <Sidebar activeItem="courses" />
          </div>
        </div>
      )}

      {selectedCourse ? (
        <CourseDetail
          course={selectedCourse}
          onBack={() => setSelectedCourse(null)}
        />
      ) : (
        <div className="p-4 flex flex-col gap-3.5 flex-1 pb-16">
          {/* Sub Navigation Bar Tabs */}
          <div className="inline-flex bg-white p-1 rounded-[8px] border border-[#E2E8F0] shadow-xs gap-1 self-start">
            {navigationTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1 rounded-[6px] text-xs font-bold transition-all ${
                  activeTab === tab.id
                    ? "bg-[#0B1D3A] text-white shadow-xs"
                    : "text-slate-500 hover:text-[#0B1D3A]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB 1: COURSES VIEW */}
          {activeTab === "courses" && (
            <>
              {/* Courses Search Bar */}
              <div className="w-full relative">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white text-xs text-slate-800 placeholder:text-slate-400 pl-9 pr-3 py-2 rounded-[8px] border border-[#E2E8F0] shadow-2xs focus:border-slate-300 focus:outline-none"
                />
              </div>

              {/* Header Title & Actions */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-[#0B1D3A] tracking-tight">
                    Courses
                  </h2>
                  <p className="text-[11px] text-slate-400">
                    {filteredCourses.length} courses · 8 in progress
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setShowFilterMenu(!showFilterMenu)}
                      className="flex items-center gap-1 bg-white border border-[#E2E8F0] text-[#0B1D3A] text-[11px] font-semibold px-2.5 py-1 rounded-[8px] shadow-2xs"
                    >
                      <SlidersHorizontal className="w-3 h-3 text-[#C99A2E]" />
                      <span>Filter</span>
                    </button>
                    {showFilterMenu && (
                      <div className="absolute right-0 mt-1 w-40 bg-white border border-[#E2E8F0] rounded-[8px] shadow-xl py-1 z-30">
                        {courseFilterOptions.map((opt) => (
                          <button
                            key={opt}
                            onClick={() => {
                              setActiveFilter(opt);
                              setShowFilterMenu(false);
                            }}
                            className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-[#F0F4FF] ${
                              activeFilter === opt
                                ? "font-bold text-[#C99A2E] bg-[#FEF9EE]"
                                : "text-slate-700"
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
                    className="flex items-center gap-1 bg-gradient-to-r from-[#0B1D3A] to-[#1A3463] text-white text-[11px] font-semibold px-3 py-1 rounded-[8px] shadow-sm"
                  >
                    <Plus className="w-3.5 h-3.5 text-[#E2C068]" />
                    <span>New Course</span>
                  </button>
                </div>
              </div>

              {/* Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
                {courseFilterOptions.map((filter) => {
                  const isActive = activeFilter === filter;
                  return (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`px-3 py-0.5 rounded-[6px] text-[11px] font-semibold whitespace-nowrap transition-all ${
                        isActive
                          ? "border border-[#C99A2E]/50 text-[#0B1D3A] bg-[#FEF9EE]"
                          : "border border-[#E2E8F0] text-slate-500 bg-white hover:border-slate-300"
                      }`}
                    >
                      {filter}
                    </button>
                  );
                })}
              </div>

              {/* Sponsored Banner for Mobile Courses */}
              <AdBanner
                variant="banner"
                label="SPONSORED"
                primaryCtaText="Apply Now"
                secondaryCtaText="Join Now"
                onApply={() => handleOpenAdAction("apply", "Partner Program")}
                onJoin={() => handleOpenAdAction("join", "Partner Program")}
              />

              {/* Course Cards List */}
              <div className="flex flex-col gap-4 mt-1">
                {filteredCourses.map((course, index) => (
                  <React.Fragment key={course.id}>
                    <div
                      onClick={() => setSelectedCourse(course)}
                      className="bg-white rounded-[8px] border border-[#E2E8F0] shadow-[0_4px_16px_rgba(11,29,58,0.04)] overflow-hidden flex flex-col group cursor-pointer hover:border-[#C99A2E]/40"
                    >
                    <div className="h-[135px] bg-gradient-to-br from-[#0B1D3A] to-[#1A3463] relative p-3.5 flex flex-col justify-between overflow-hidden">
                      {course.visualType === "photo" ? (
                        <PhotoCoverGraphic />
                      ) : (
                        <CityscapeGraphic />
                      )}

                      <div className="relative z-10 flex flex-col items-start gap-1">
                        <span className="inline-block bg-white text-[#0B1D3A] text-[9.5px] font-bold px-2 py-0.5 rounded-[4px] shadow-2xs">
                          {course.category}
                        </span>
                        <span className="text-[8.5px] font-bold tracking-widest text-[#E2C068] uppercase">
                          {course.program}
                        </span>
                      </div>

                      <div className="relative z-10 pr-16">
                        <h3 className="text-white text-xs font-bold leading-tight line-clamp-2">
                          {course.coverTitle}
                        </h3>
                        <p className="text-white/60 text-[8.5px] font-normal mt-0.5 line-clamp-1">
                          {course.coverSubtitle}
                        </p>
                      </div>

                      {/* K3 - HIRING CHIP: White chip with gray border */}
                      <div className="absolute right-3 bottom-2.5 z-10">
                        <span className="inline-flex items-center gap-1 bg-white/95 border border-[#E2E8F0] text-[#0B1D3A] text-[8.5px] font-bold px-1.5 py-0.5 rounded-[4px] shadow-2xs">
                          <Sparkles className="w-2.5 h-2.5 text-[#C99A2E]" />
                          <span>{course.id === "6a8bce1d5c501a3603065011" ? "5 companies hiring" : "3 companies hiring"}</span>
                        </span>
                      </div>
                    </div>

                    <div className="p-3.5 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-bold text-[#0B1D3A] line-clamp-1">
                          {course.title}
                        </h4>
                        <div className="flex items-center gap-1 mt-1">
                          <span className="text-[10px] text-slate-400 font-mono truncate">
                            {course.id}
                          </span>
                          <button
                            type="button"
                            onClick={(e) => handleCopyId(e, course.id)}
                            className="text-slate-400 hover:text-slate-700 p-0.5"
                          >
                            {copiedId === course.id ? (
                              <Check className="w-2.5 h-2.5 text-emerald-600" />
                            ) : (
                              <Copy className="w-2.5 h-2.5" />
                            )}
                          </button>
                          <span className="text-[10px] text-slate-400">
                            · {course.modulesCount} modules · {course.duration}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-[10px] text-slate-400 mt-1">
                          <Clock className="w-2.5 h-2.5 text-[#C99A2E]" />
                          <span>Updated {course.updatedAt}</span>
                        </div>
                      </div>

                      <div className="mt-3">
                        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-[#C99A2E] to-[#E2C068] h-full rounded-full"
                            style={{ width: `${course.progressPercent}%` }}
                          />
                        </div>
                        <div className="text-[10px] font-medium text-slate-500 mt-1">
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
                {filteredCourses.length === 0 && (
                  <div className="w-full bg-white rounded-[8px] border border-[#E2E8F0] p-8 text-center text-slate-500 text-xs">
                    No courses match your active search or filter criteria.
                  </div>
                )}
              </div>
            </>
          )}

          {/* TAB 2: COURSE MODULES VIEW (MATCHING SCREENSHOT 1) */}
          {activeTab === "course-modules" && (
            <>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-[#0B1D3A] tracking-tight">
                    Course Modules
                  </h2>
                  <p className="text-[11px] text-slate-400">
                    {moduleSearchQuery
                      ? `${filteredModules.length} of 74 modules`
                      : "74 modules across 19 courses"}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsAddModuleOpen(true)}
                  className="flex items-center gap-1 bg-[#0A1325] text-white text-[11px] font-semibold px-3 py-1.5 rounded-[8px] shadow-sm"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Module</span>
                </button>
              </div>

              {/* Module Search Input */}
              <div className="w-full relative mt-1">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search modules or courses..."
                  value={moduleSearchQuery}
                  onChange={(e) => setModuleSearchQuery(e.target.value)}
                  className="w-full bg-white text-xs text-slate-800 placeholder:text-slate-400 pl-9 pr-3 py-2 rounded-[8px] border border-[#E2E8F0] shadow-2xs focus:border-slate-300 focus:outline-none"
                />
              </div>

              {/* Module Ad Banner */}
              <AdBanner
                variant="banner"
                label="SPONSORED"
                primaryCtaText="Apply Now"
                secondaryCtaText="Join Now"
                onApply={() => handleOpenAdAction("apply", "Module Partner Program")}
                onJoin={() => handleOpenAdAction("join", "Module Partner Program")}
              />

              {/* Modules Cards List with In-Between Sponsored Ads */}
              <div className="flex flex-col gap-3 mt-1">
                {filteredModules.map((module, index) => (
                  <React.Fragment key={`${module.parentCourse.id}-${module.id}`}>
                    <div
                      onClick={() => setSelectedCourse(module.parentCourse)}
                      className="bg-white rounded-[10px] border border-[#E2E8F0] p-4 shadow-[0_2px_8px_rgba(11,29,58,0.03)] cursor-pointer flex flex-col justify-between"
                    >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="w-7 h-7 rounded-md bg-[#EFF6FF] flex items-center justify-center text-[#1E3A8A]">
                          <Layers className="w-3.5 h-3.5 text-[#1E3A8A]" />
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteModule(module.parentCourse.id, module.id);
                          }}
                          className="p-1 text-slate-400 hover:text-rose-600 transition-colors"
                          title="Delete module"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <h3 className="text-xs font-bold text-slate-900 mt-2.5 leading-snug">
                        {module.title}
                      </h3>

                      <div className="mt-1.5">
                        <span className="inline-block bg-[#F1F5F9] text-[#475569] text-[10px] font-semibold px-2 py-0.5 rounded-md truncate max-w-full">
                          {module.parentCourse.title}
                        </span>
                      </div>

                      <p className="text-[11px] text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                        {module.description ||
                          "Course module covering core practical frameworks and operational execution."}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 text-[10px] text-slate-400 mt-3 pt-2 border-t border-slate-100">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>Updated {module.updatedAt || "12 Nov 2026"}</span>
                    </div>
                  </div>

                  {/* In-Grid Sponsored Card matching Courses Tab */}
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
                {filteredModules.length === 0 && (
                  <div className="w-full bg-white rounded-[8px] border border-[#E2E8F0] p-8 text-center text-slate-500 text-xs">
                    No course modules match your search.
                  </div>
                )}
              </div>
            </>
          )}

          {/* TAB 3: LESSONS VIEW (MATCHING SCREENSHOT 2) */}
          {activeTab === "lessons" && (
            <>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-[#0B1D3A] tracking-tight">
                    Lessons
                  </h2>
                  <p className="text-[11px] text-slate-400">
                    {lessonSearchQuery
                      ? `${filteredLessons.length} of 301 lessons`
                      : "301 lessons across 19 courses"}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsAddLessonOpen(true)}
                  className="flex items-center gap-1 bg-[#0A1325] text-white text-[11px] font-semibold px-3 py-1.5 rounded-[8px] shadow-sm"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Lesson</span>
                </button>
              </div>

              {/* Lesson Search Input */}
              <div className="w-full relative mt-1">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search lessons, modules, courses..."
                  value={lessonSearchQuery}
                  onChange={(e) => setLessonSearchQuery(e.target.value)}
                  className="w-full bg-white text-xs text-slate-800 placeholder:text-slate-400 pl-9 pr-3 py-2 rounded-[8px] border border-[#E2E8F0] shadow-2xs focus:border-slate-300 focus:outline-none"
                />
              </div>

              {/* Lessons Ad Banner */}
              <AdBanner
                variant="banner"
                label="SPONSORED"
                primaryCtaText="Apply Now"
                secondaryCtaText="Join Now"
                onApply={() => handleOpenAdAction("apply", "Lesson Partner Program")}
                onJoin={() => handleOpenAdAction("join", "Lesson Partner Program")}
              />

              {/* Lessons List with In-Between Sponsored Ads */}
              <div className="flex flex-col gap-2.5 mt-1">
                {filteredLessons.map((lesson, idx) => (
                  <React.Fragment key={`${lesson.parentCourse.id}-${lesson.parentModule.id}-${lesson.id}-${idx}`}>
                    <div
                      onClick={() => setSelectedCourse(lesson.parentCourse)}
                      className="bg-white rounded-[8px] border border-[#E2E8F0] p-3 shadow-2xs cursor-pointer flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-2.5 min-w-0 flex-1">
                        <div className="w-7 h-7 rounded-full bg-[#F1F5F9] text-slate-700 flex items-center justify-center shrink-0">
                          <Play className="w-3 h-3 fill-slate-700 ml-0.5 text-slate-700" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-xs font-bold text-slate-900 truncate">
                            {lesson.title}
                          </h3>
                          <p className="text-[10px] text-slate-500 mt-0.5 truncate">
                            {lesson.parentCourse.title} · {lesson.parentModule.title}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[9px] font-bold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
                          {lesson.type || "VIDEO"}
                        </span>
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
                          className="p-1 text-slate-400 hover:text-rose-600 transition-colors"
                          title="Delete lesson"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
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
                          onApply={() => handleOpenAdAction("apply", "Lesson Partner Program")}
                          onJoin={() => handleOpenAdAction("join", "Lesson Partner Program")}
                        />
                      </div>
                    )}
                  </React.Fragment>
                ))}
                {filteredLessons.length === 0 && (
                  <div className="w-full bg-white rounded-[8px] border border-[#E2E8F0] p-8 text-center text-slate-500 text-xs">
                    No lessons match your search.
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      )}

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
