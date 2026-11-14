import React, { useState } from "react";
import {
  Play,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Plus,
  Trash2,
  X,
  Clock,
  FileText,
  MessageSquare,
  FolderDown,
  Sparkles,
  ArrowRight,
  Check,
} from "lucide-react";
import {
  type Course,
  type CourseModule,
  type Lesson,
  type CourseDetailTab,
  courseDetailTabs,
} from "./data";
import AdBanner from "../components/AdBanner";
import AdActionModal from "../components/AdActionModal";

export interface CourseDetailProps {
  course: Course;
  onBack: () => void;
  isMobile?: boolean;
}

// Cityscape silhouette graphic matching the course detail hero banner
function HeroCityscapeGraphic() {
  return (
    <svg
      className="absolute right-0 bottom-0 h-full w-[40%] pointer-events-none opacity-90 overflow-hidden"
      viewBox="0 0 160 140"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="heroGoldBuilding1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E5B242" />
          <stop offset="50%" stopColor="#C99424" />
          <stop offset="100%" stopColor="#8C6314" />
        </linearGradient>
        <linearGradient id="heroGoldBuilding2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5D061" />
          <stop offset="100%" stopColor="#B3821C" />
        </linearGradient>
        <pattern id="heroWindowGrid" width="4" height="6" patternUnits="userSpaceOnUse">
          <rect x="1" y="1" width="2" height="3" fill="#0A1428" opacity="0.35" />
        </pattern>
      </defs>

      <rect x="10" y="38" width="18" height="102" fill="url(#heroGoldBuilding1)" rx="1" />
      <rect x="10" y="38" width="18" height="102" fill="url(#heroWindowGrid)" />

      <rect x="32" y="58" width="16" height="82" fill="url(#heroGoldBuilding2)" rx="1" />
      <rect x="32" y="58" width="16" height="82" fill="url(#heroWindowGrid)" />

      <rect x="52" y="10" width="22" height="130" fill="url(#heroGoldBuilding1)" rx="1" />
      <rect x="52" y="10" width="22" height="130" fill="url(#heroWindowGrid)" />

      <rect x="78" y="48" width="16" height="92" fill="url(#heroGoldBuilding2)" rx="1" />
      <rect x="78" y="48" width="16" height="92" fill="url(#heroWindowGrid)" />

      <rect x="98" y="22" width="20" height="118" fill="url(#heroGoldBuilding1)" rx="1" />
      <rect x="98" y="22" width="20" height="118" fill="url(#heroWindowGrid)" />

      <rect x="122" y="42" width="18" height="98" fill="url(#heroGoldBuilding2)" rx="1" />
      <rect x="122" y="42" width="18" height="98" fill="url(#heroWindowGrid)" />

      <rect x="144" y="60" width="16" height="80" fill="url(#heroGoldBuilding1)" rx="1" />
    </svg>
  );
}

export default function CourseDetail({
  course,
  onBack,
  isMobile = false,
}: CourseDetailProps) {
  const [activeTab, setActiveTab] = useState<CourseDetailTab>("Overview");
  const [modules, setModules] = useState<CourseModule[]>(course.modules || []);
  const [expandedModuleId, setExpandedModuleId] = useState<string | null>(
    modules[0]?.id || null
  );

  // Lesson Player State (Positions L1, L2, L3)
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [isL3ModalOpen, setIsL3ModalOpen] = useState(false);
  const [lessonActiveTab, setLessonActiveTab] = useState<"Overview" | "Notes" | "Resources">("Overview");

  // Add Lesson Modal State
  const [isAddLessonOpen, setIsAddLessonOpen] = useState(false);
  const [activeModuleForLesson, setActiveModuleForLesson] = useState<string | null>(
    modules[0]?.id || null
  );
  const [lessonTitle, setLessonTitle] = useState("");
  const [lessonType, setLessonType] = useState<Lesson["type"]>("VIDEO");
  const [lessonDuration, setLessonDuration] = useState("20");
  const [lessonVideoUrl, setLessonVideoUrl] = useState("");
  const [lessonDescription, setLessonDescription] = useState("");

  // Add Module Modal State
  const [isAddModuleOpen, setIsAddModuleOpen] = useState(false);
  const [newModuleTitle, setNewModuleTitle] = useState("");

  // Sponsored Ad Action Modal State
  const [adModalOpen, setAdModalOpen] = useState(false);
  const [adActionType, setAdActionType] = useState<"apply" | "join">("apply");
  const [adMandateTitle, setAdMandateTitle] = useState("");

  const handleOpenAdAction = (type: "apply" | "join", title: string) => {
    setAdActionType(type);
    setAdMandateTitle(title);
    setAdModalOpen(true);
  };

  const toggleModuleCollapse = (id: string) => {
    setExpandedModuleId(expandedModuleId === id ? null : id);
  };

  const handleDeleteModule = (e: React.MouseEvent, moduleId: string) => {
    e.stopPropagation();
    if (confirm("Are you sure you want to delete this module?")) {
      setModules(modules.filter((m) => m.id !== moduleId));
    }
  };

  const handleDeleteLesson = (moduleId: string, lessonId: string) => {
    if (confirm("Are you sure you want to delete this lesson?")) {
      setModules(
        modules.map((m) => {
          if (m.id === moduleId) {
            return {
              ...m,
              lessons: m.lessons.filter((l) => l.id !== lessonId),
            };
          }
          return m;
        })
      );
    }
  };

  const handleOpenAddLesson = (moduleId: string) => {
    setActiveModuleForLesson(moduleId);
    setLessonTitle("");
    setLessonType("VIDEO");
    setLessonDuration("20");
    setLessonVideoUrl("");
    setLessonDescription("");
    setIsAddLessonOpen(true);
  };

  const handleSaveLesson = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lessonTitle.trim()) {
      alert("Please enter a lesson title.");
      return;
    }

    const newLesson: Lesson = {
      id: `lesson-${Date.now()}`,
      title: lessonTitle.trim(),
      type: lessonType,
      durationMinutes: parseInt(lessonDuration, 10) || 15,
      videoUrl: lessonVideoUrl.trim() || undefined,
      description: lessonDescription.trim() || undefined,
      isCompleted: false,
    };

    setModules(
      modules.map((m) => {
        if (m.id === activeModuleForLesson) {
          return {
            ...m,
            lessons: [...m.lessons, newLesson],
          };
        }
        return m;
      })
    );

    setIsAddLessonOpen(false);
  };

  const handleSaveModule = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newModuleTitle.trim()) {
      alert("Please enter a module title.");
      return;
    }

    const newModule: CourseModule = {
      id: `mod-${Date.now()}`,
      moduleNumber: modules.length + 1,
      title: newModuleTitle.trim(),
      lessons: [],
    };

    setModules([...modules, newModule]);
    setExpandedModuleId(newModule.id);
    setNewModuleTitle("");
    setIsAddModuleOpen(false);
  };

  // Calculations
  const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedLessons = modules.reduce(
    (acc, m) => acc + m.lessons.filter((l) => l.isCompleted).length,
    0
  );

  // Lesson Player View (Positions L1, L2, L3)
  if (activeLesson) {
    return (
      <div
        className={`w-full bg-[#F8FAFD] min-h-screen font-['Outfit'] select-text flex flex-col gap-4 ${
          isMobile ? "p-4 pb-16" : "p-6 xl:p-8"
        }`}
      >
        {/* Breadcrumb Navigation Header */}
        <div className="flex items-center gap-1.5 text-xs font-semibold">
          <button
            type="button"
            onClick={onBack}
            className="text-[#0B1D3A] hover:text-[#C99A2E] hover:underline cursor-pointer transition-colors"
          >
            Courses
          </button>
          <span className="text-slate-400 font-normal">&gt;</span>
          <button
            type="button"
            onClick={() => setActiveLesson(null)}
            className="text-[#0B1D3A] hover:text-[#C99A2E] hover:underline cursor-pointer transition-colors truncate max-w-[240px]"
          >
            {course.title}
          </button>
          <span className="text-slate-400 font-normal">&gt;</span>
          <span className="text-[#C99A2E] truncate max-w-[320px]">
            {activeLesson.title}
          </span>
        </div>

        {/* Lesson View Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Left Column (Span 2): Video Player + L1 Strip + Lesson Info + Tabs */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Video Container */}
            <div className="w-full aspect-video sm:h-[390px] bg-[#0A1428] rounded-[10px] overflow-hidden relative flex items-center justify-center border border-[#1A3463]/60 shadow-[0_10px_30px_rgba(11,29,58,0.18)]">
              <HeroCityscapeGraphic />

              {/* Center Play Button */}
              <button
                type="button"
                className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#C99A2E] to-[#F5D061] text-[#0A1428] flex items-center justify-center shadow-[0_6px_20px_rgba(201,154,46,0.5)] hover:scale-110 active:scale-95 transition-transform cursor-pointer relative z-10"
              >
                <Play className="w-7 h-7 fill-current ml-1" />
              </button>

              {/* Watermark branding */}
              <div className="absolute bottom-4 left-4 z-10 text-white/50 text-[11px] font-mono tracking-wider">
                FARE · fare.training
              </div>
            </div>

            {/* Position L1 - BELOW VIDEO STRIP: White card with gray border */}
            <div className="w-full bg-white border border-[#E2E8F0] rounded-[8px] p-3.5 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#0B1D3A] text-white flex items-center justify-center text-[10px] font-bold shrink-0 shadow-2xs">
                  HP
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9.5px] font-extrabold uppercase tracking-widest text-[#A16207] bg-[#FFFDF5] border border-[#FDE68A] px-1.5 py-0.5 rounded-[3px]">
                      NOW HIRING · MATCHED TO THIS COURSE
                    </span>
                    <span className="text-[9.5px] font-bold text-[#64748B] uppercase tracking-wider">
                      SPONSORED
                    </span>
                  </div>
                  <div className="text-xs font-bold text-[#0B1D3A] mt-0.5">
                    Horizon Plots is hiring 6 Team Leaders · Medchal
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                <button
                  type="button"
                  onClick={() => handleOpenAdAction("join", "Horizon Plots - Medchal Team Leaders")}
                  className="px-3.5 py-1.5 rounded-[7px] bg-[#0B1D3A] hover:bg-[#1A3463] text-white text-xs font-bold transition-all cursor-pointer shadow-2xs"
                >
                  Join Now
                </button>
                <button
                  type="button"
                  onClick={() => handleOpenAdAction("apply", "Horizon Plots - Medchal Team Leaders")}
                  className="px-3.5 py-1.5 rounded-[7px] bg-gradient-to-r from-[#C99A2E] to-[#A87A18] hover:from-[#D5AA45] text-white text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs"
                >
                  <span>View role</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Lesson Title Header Row & Mark Complete Button */}
            <div className="bg-white rounded-[8px] border border-[#E2E8F0] p-5 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h1 className="text-base sm:text-lg font-bold text-[#0B1D3A] leading-tight">
                  {activeLesson.title}
                </h1>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  Diagnose Team Performance · {activeLesson.durationMinutes} min lesson
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsL3ModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 bg-[#0B1D3A] hover:bg-[#1A3463] text-white text-xs font-bold px-4 py-2.5 rounded-[8px] transition-all cursor-pointer shadow-2xs active:scale-[0.98] shrink-0"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Mark Complete</span>
              </button>
            </div>

            {/* Sub-Navigation Tabs */}
            <div className="flex items-center gap-6 border-b border-[#E2E8F0] pt-1">
              {(["Overview", "Notes", "Resources"] as const).map((tab) => {
                const isActive = lessonActiveTab === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setLessonActiveTab(tab)}
                    className={`pb-2.5 text-xs font-semibold cursor-pointer whitespace-nowrap transition-colors relative ${
                      isActive ? "text-[#C99A2E]" : "text-slate-500 hover:text-[#0B1D3A]"
                    }`}
                  >
                    {tab}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C99A2E]" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Lesson Tab Content */}
            {lessonActiveTab === "Overview" && (
              <div className="bg-white rounded-[8px] border border-[#E2E8F0] p-5 shadow-2xs text-xs text-slate-700 leading-relaxed">
                <p>
                  In this lesson, you will analyze why real estate sales teams experience mid-quarter slumps and how adaptive leadership solves root performance bottlenecks. Identify when underperformance is driven by pipeline exhaustion versus skill gaps in closing discussions.
                </p>
              </div>
            )}
            {lessonActiveTab === "Notes" && (
              <div className="bg-white rounded-[8px] border border-[#E2E8F0] p-5 shadow-2xs text-xs text-slate-700 leading-relaxed flex flex-col gap-2">
                <div className="font-bold text-[#0B1D3A]">Key Diagnostic Frameworks:</div>
                <ul className="list-disc pl-4 space-y-1 text-slate-600">
                  <li>Pipeline-to-Site Visit conversion ratios (target: &gt; 35%)</li>
                  <li>Developer desk token velocity and clearing timelines</li>
                  <li>Daily habit audit: 20 meaningful dials per sales executive</li>
                </ul>
              </div>
            )}
            {lessonActiveTab === "Resources" && (
              <div className="bg-white rounded-[8px] border border-[#E2E8F0] p-5 shadow-2xs flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <FolderDown className="w-4 h-4 text-[#C99A2E]" />
                  <span className="text-xs font-medium text-slate-800">
                    Team Diagnostic Checklist & KPI Tracker (XLSX)
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => alert("Downloading resource...")}
                  className="text-xs font-bold text-[#0B1D3A] hover:text-[#C99A2E] hover:underline cursor-pointer"
                >
                  Download
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Course Content Sidebar with L2 Between Modules */}
          <div className="flex flex-col gap-3 lg:sticky lg:top-4 self-start max-h-[calc(100vh-2rem)] overflow-y-auto scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden w-full">
            <div className="bg-white rounded-[8px] border border-[#E2E8F0] p-5 shadow-2xs flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0B1D3A]">Course Content</span>
                <span className="text-[11px] font-bold text-[#C99A2E]">0% complete</span>
              </div>
              <div className="text-[11px] text-slate-400 font-medium">0/17 lessons</div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-[#C99A2E] to-[#E2C068] h-full rounded-full w-0" />
              </div>

              {/* Module 1 */}
              <div className="border border-[#E2E8F0] rounded-[6px] overflow-hidden mt-2">
                <div className="p-3 bg-slate-50/80 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0B1D3A]">
                    Diagnose Team Performance
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">0/3 done</span>
                </div>
                <div className="divide-y divide-slate-100">
                  <div className="px-3 py-2 text-xs font-bold text-[#C99A2E] bg-[#FEF9EE] flex items-center gap-2 cursor-pointer">
                    <Play className="w-3 h-3 fill-current" />
                    <span className="truncate">{activeLesson.title}</span>
                  </div>
                  <div
                    onClick={() => setActiveLesson({ id: "les-th-2", title: "Team Performance Buckets: Strengths, Gaps", type: "VIDEO", durationMinutes: 25 })}
                    className="px-3 py-2 text-xs font-medium text-slate-700 hover:bg-[#F0F4FF] flex items-center gap-2 cursor-pointer"
                  >
                    <div className="w-3 h-3 rounded-full border border-slate-300" />
                    <span className="truncate">Team Performance Buckets: Strengths, Gaps</span>
                  </div>
                  <div
                    onClick={() => setActiveLesson({ id: "les-th-3", title: "Diagnosing Performance Through KPIs", type: "VIDEO", durationMinutes: 25 })}
                    className="px-3 py-2 text-xs font-medium text-slate-700 hover:bg-[#F0F4FF] flex items-center gap-2 cursor-pointer"
                  >
                    <div className="w-3 h-3 rounded-full border border-slate-300" />
                    <span className="truncate">Diagnosing Performance Through KPIs</span>
                  </div>
                </div>
              </div>

              {/* Position L2 - BETWEEN MODULES: White card with gray border */}
              <div className="bg-white border border-[#E2E8F0] rounded-[8px] p-3.5 shadow-2xs flex flex-col gap-2.5 my-1">
                <div className="flex items-center justify-between">
                  <span className="text-[9.5px] font-extrabold uppercase tracking-widest text-[#A16207] bg-[#FFFDF5] border border-[#FDE68A] px-2 py-0.5 rounded-[3px]">
                    FINISH MODULE 1 TO UNLOCK
                  </span>
                  <span className="text-[9.5px] font-bold text-[#64748B] uppercase tracking-wider">
                    SPONSORED
                  </span>
                </div>

                <div className="text-xs font-bold text-[#0B1D3A] leading-snug">
                  3 companies are hiring Team Leaders who completed this module
                </div>

                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[10px] font-semibold text-[#0B1D3A] bg-[#F8FAFD] border border-[#E2E8F0] px-2 py-0.5 rounded-[4px]">
                    Horizon Plots
                  </span>
                  <span className="text-[10px] font-semibold text-[#0B1D3A] bg-[#F8FAFD] border border-[#E2E8F0] px-2 py-0.5 rounded-[4px]">
                    Greenline Layouts
                  </span>
                  <span className="text-[10px] font-bold text-[#C99A2E] bg-[#FEF9EE] border border-[#C99A2E]/30 px-1.5 py-0.5 rounded-[4px]">
                    +1
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1 border-t border-[#E2E8F0]">
                  <button
                    type="button"
                    onClick={() => handleOpenAdAction("join", "Team Leader Openings")}
                    className="w-full py-1.5 rounded-[6px] border border-[#E2E8F0] hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all cursor-pointer text-center"
                  >
                    Join Now
                  </button>
                  <button
                    type="button"
                    onClick={() => handleOpenAdAction("apply", "Team Leader Openings")}
                    className="w-full py-1.5 rounded-[6px] bg-[#0B1D3A] hover:bg-[#1A3463] text-white text-xs font-bold transition-all cursor-pointer text-center"
                  >
                    See openings
                  </button>
                </div>
              </div>

              {/* Module 2 */}
              <div className="border border-[#E2E8F0] rounded-[6px] p-3 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-slate-700">Performance Planning</span>
                <span className="text-[10px] font-mono">0/3 done</span>
              </div>

              {/* Module 3 */}
              <div className="border border-[#E2E8F0] rounded-[6px] p-3 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-slate-700">The Art of Leadership</span>
                <span className="text-[10px] font-mono">0/4 done</span>
              </div>

              {/* Module 4 */}
              <div className="border border-[#E2E8F0] rounded-[6px] p-3 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-slate-700">Performance Recovery & Problem-Solving</span>
                <span className="text-[10px] font-mono">0/7 done</span>
              </div>
            </div>
          </div>
        </div>

        {/* Position L3 - LESSON-COMPLETE INTERSTITIAL MODAL */}
        {isL3ModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-[12px] border border-[#E2E8F0] shadow-[0_24px_60px_rgba(11,29,58,0.25)] max-w-md w-full overflow-hidden animate-in fade-in zoom-in-95 relative">
              <button
                type="button"
                onClick={() => setIsL3ModalOpen(false)}
                className="absolute top-3.5 right-3.5 z-10 text-white/70 hover:text-white p-1 rounded-full cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="bg-gradient-to-r from-[#0B1D3A] via-[#102548] to-[#1A3463] p-6 text-center flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-[#E5B242] text-[#0B1D3A] flex items-center justify-center shadow-lg">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h2 className="text-lg font-black text-white tracking-tight">
                  Lesson 1 complete
                </h2>
                <p className="text-xs text-white/80 font-medium">
                  {activeLesson.title}
                </p>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col gap-4 bg-white">
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-[#64748B]">
                  HIRING FROM THIS COURSE
                </div>

                <div className="bg-white border border-[#E2E8F0] rounded-[8px] p-3 flex items-center justify-between gap-3 shadow-2xs hover:border-[#C99A2E]/50 transition-colors">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-full bg-[#0B1D3A] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                      HP
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-[#0B1D3A] truncate">
                        Horizon Plots · Team Leader
                      </div>
                      <div className="text-[10.5px] text-slate-500 truncate">
                        Medchal · Freelance / Full-time
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleOpenAdAction("apply", "Horizon Plots - Team Leader")}
                    className="px-3 py-1.5 rounded-[6px] bg-[#0B1D3A] hover:bg-[#1A3463] text-white text-xs font-bold cursor-pointer shrink-0"
                  >
                    Apply
                  </button>
                </div>

                <div className="bg-white border border-[#E2E8F0] rounded-[8px] p-3 flex items-center justify-between gap-3 shadow-2xs hover:border-[#C99A2E]/50 transition-colors">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-full bg-[#0B1D3A] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                      GL
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-[#0B1D3A] truncate">
                        Greenline Layouts · Sales Manager
                      </div>
                      <div className="text-[10.5px] text-slate-500 truncate">
                        Shadnagar · Full-time
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => alert("Job saved to your profile")}
                    className="px-3 py-1.5 rounded-[6px] border border-[#E2E8F0] hover:bg-slate-50 text-[#0B1D3A] text-xs font-bold cursor-pointer shrink-0"
                  >
                    Save
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsL3ModalOpen(false)}
                    className="w-full py-2.5 rounded-[8px] bg-gradient-to-r from-[#C99A2E] to-[#A87A18] hover:from-[#D5AA45] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
                  >
                    <span>Next lesson</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsL3ModalOpen(false);
                      handleOpenAdAction("apply", "Partner Openings");
                    }}
                    className="w-full py-2.5 rounded-[8px] bg-white border border-[#E2E8F0] hover:bg-slate-50 text-[#0B1D3A] text-xs font-bold cursor-pointer shadow-2xs"
                  >
                    View all openings
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <AdActionModal
          isOpen={adModalOpen}
          onClose={() => setAdModalOpen(false)}
          actionType={adActionType}
          mandateTitle={adMandateTitle}
        />
      </div>
    );
  }

  return (
    <div
      className={`w-full bg-[#F8FAFD] min-h-screen font-['Outfit'] select-text flex flex-col gap-5 ${
        isMobile ? "p-4 pb-16" : "p-6 xl:p-8"
      }`}
    >
      {/* Breadcrumb Navigation Header */}
      <div className="flex items-center gap-1.5 text-xs font-semibold">
        <button
          type="button"
          onClick={onBack}
          className="text-[#0B1D3A] hover:text-[#C99A2E] hover:underline cursor-pointer transition-colors"
        >
          Courses
        </button>
        <span className="text-slate-400 font-normal">&gt;</span>
        <span className="text-[#C99A2E] truncate max-w-[400px]">
          {course.title}
        </span>
      </div>

      {/* Hero Banner Card */}
      <div className="w-full shrink-0 min-h-[210px] bg-gradient-to-r from-[#0B1D3A] via-[#102548] to-[#1A3463] rounded-[8px] overflow-hidden shadow-[0_10px_30px_rgba(11,29,58,0.2)] border border-[#1A3463]/50 relative flex flex-col justify-between">
        <HeroCityscapeGraphic />

        <div className="relative z-10 p-6 xl:p-8 flex flex-col gap-3.5 max-w-[75%]">
          {/* Top Tag Badges */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="border border-[#C99A2E]/40 text-[#E2C068] bg-[#C99A2E]/10 text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-[4px]">
              {course.program}
            </span>
            <span className="bg-white text-[#0B1D3A] text-[10px] font-bold px-2.5 py-0.5 rounded-[4px] shadow-2xs">
              {course.category}
            </span>
          </div>

          {/* Watermark and Main Title */}
          <div className="relative mt-1">
            <span className="text-white/10 text-xl md:text-2xl font-serif font-black absolute -top-4 left-0 pointer-events-none select-none">
              {course.coverTitle}
            </span>
            <h1 className="text-white text-xl md:text-2xl font-bold tracking-tight leading-tight relative">
              {course.title}
            </h1>
          </div>

          {/* Meta Details */}
          <p className="text-white/70 text-xs font-mono">
            {course.id} · {modules.length} modules · {totalLessons} lessons · {course.duration}
          </p>

          {/* C1 - Hero Sponsored Hiring Badge: White chip with gray border */}
          <div className="inline-flex items-center gap-2 bg-white/95 border border-[#E2E8F0] rounded-full px-3 py-1 text-[11px] text-[#0B1D3A] font-bold w-fit shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C99A2E]" />
            <span>8 companies hiring from this course · 23 open roles</span>
            <ArrowRight className="w-3 h-3 text-[#C99A2E]" />
          </div>

          {/* Resume Course Button & Action Controls */}
          <div className="mt-2 flex items-center gap-3 flex-wrap">
            <button
              type="button"
              onClick={() => setActiveLesson(modules[0]?.lessons[0] || { id: "les-th-1", title: "Why Teams & Team Members Underperform", type: "VIDEO", durationMinutes: 20 })}
              className="relative overflow-hidden group/btn inline-flex items-center gap-2 bg-gradient-to-r from-[#C99A2E] to-[#A87A18] hover:from-[#D5AA45] hover:to-[#B5851E] text-white text-xs font-bold px-5 py-2.5 rounded-[8px] shadow-[0_4px_14px_rgba(201,154,46,0.35)] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <span className="absolute -inset-y-2 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-all duration-700 group-hover/btn:left-[130%] group-hover/btn:opacity-100" />
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Resume Course</span>
            </button>
            <button
              type="button"
              onClick={() => alert("Applied for fast-track batch enrollment.")}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold px-4 py-2.5 rounded-[8px] transition-colors cursor-pointer"
            >
              Apply For Batch
            </button>
          </div>
        </div>

        {/* Bottom Gold Progress Strip Bar */}
        <div className="w-full h-2.5 bg-[#0B1D3A]/60 mt-4 relative shrink-0">
          <div
            className="h-full bg-gradient-to-r from-[#C99A2E] to-[#E2C068] transition-all"
            style={{ width: `${course.progressPercent}%` }}
          />
        </div>
      </div>

      {/* Main Grid: Left Tabs & Content | Right Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Left Column (Span 2): Tabs & Section Content */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {/* Sub Navigation Tabs */}
          <div className="flex items-center gap-6 border-b border-[#E2E8F0] overflow-x-auto no-scrollbar">
            {courseDetailTabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 text-xs font-semibold cursor-pointer whitespace-nowrap transition-colors relative ${
                    isActive
                      ? "text-[#C99A2E]"
                      : "text-slate-500 hover:text-[#0B1D3A]"
                  }`}
                >
                  {tab}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C99A2E]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === "Overview" && (
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-[8px] border border-[#E2E8F0] p-6 shadow-[0_4px_16px_rgba(11,29,58,0.04)]">
                <p className="text-xs text-slate-700 leading-relaxed font-normal">
                  {course.overviewDescription}
                </p>
              </div>
              <AdBanner
                variant="banner"
                label="SPONSORED"
                primaryCtaText="Apply Now"
                secondaryCtaText="Join Now"
                onApply={() => handleOpenAdAction("apply", "Course Partner Program")}
                onJoin={() => handleOpenAdAction("join", "Course Partner Program")}
              />
            </div>
          )}

          {/* TAB 2: MODULES */}
          {activeTab === "Modules" && (
            <div className="flex flex-col gap-4">
              {/* Header with "+ Add Module" button */}
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => setIsAddModuleOpen(true)}
                  className="flex items-center gap-1.5 text-xs font-bold text-[#0B1D3A] hover:text-[#C99A2E] cursor-pointer transition-colors"
                >
                  <Plus className="w-3.5 h-3.5 text-[#C99A2E]" />
                  <span>Add Module</span>
                </button>
              </div>

              {/* Modules Accordion List */}
              <div className="flex flex-col gap-3">
                {modules.map((module, mIdx) => {
                  const isExpanded = expandedModuleId === module.id;
                  const moduleLessonsDone = module.lessons.filter(
                    (l) => l.isCompleted
                  ).length;

                  return (
                    <React.Fragment key={module.id}>
                      <div
                        className="bg-white rounded-[8px] border border-[#E2E8F0] shadow-[0_4px_16px_rgba(11,29,58,0.04)] hover:border-[#C99A2E]/50 transition-all overflow-hidden"
                      >
                        {/* Module Header Row */}
                        <div
                          onClick={() => toggleModuleCollapse(module.id)}
                          className="p-4 flex items-center justify-between cursor-pointer hover:bg-[#F0F4FF]/50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-7 h-7 rounded-[6px] bg-gradient-to-br from-[#FEF9EE] to-[#FFF4D9] border border-[#C99A2E]/30 flex items-center justify-center text-xs font-bold text-[#C99A2E] shrink-0">
                              {module.moduleNumber}
                            </div>
                            <div>
                              <h3 className="text-xs font-bold text-[#0B1D3A] leading-snug">
                                {module.title}
                              </h3>
                              <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                                {module.lessons.length} lessons · {moduleLessonsDone}/{module.lessons.length} done
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={(e) => handleDeleteModule(e, module.id)}
                              className="p-1 text-slate-400 hover:text-rose-600 rounded cursor-pointer"
                              title="Delete Module"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                            <div className="text-slate-400">
                              {isExpanded ? (
                                <ChevronUp className="w-4 h-4 text-[#C99A2E]" />
                              ) : (
                                <ChevronDown className="w-4 h-4" />
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Expanded Lessons List */}
                        {isExpanded && (
                          <div className="border-t border-[#E2E8F0]">
                            {module.lessons.map((lesson, idx) => (
                              <div
                                key={lesson.id}
                                onClick={() => setActiveLesson(lesson)}
                                className="px-4 py-3 border-b border-slate-50 flex items-center justify-between hover:bg-[#F0F4FF]/40 transition-colors cursor-pointer"
                              >
                                <div className="flex items-center gap-3 min-w-0 pr-3">
                                  <div className="w-6 h-6 rounded-full bg-[#F0F4FF] border border-[#0B1D3A]/10 flex items-center justify-center text-[10px] font-bold text-[#0B1D3A] shrink-0">
                                    {idx + 1}
                                  </div>
                                  <span className="text-xs font-medium text-slate-800 truncate">
                                    {lesson.title}
                                  </span>
                                </div>

                                <div className="flex items-center gap-2.5 shrink-0 text-slate-400">
                                  <Play className="w-3.5 h-3.5 text-slate-400 cursor-pointer hover:text-[#C99A2E]" />
                                  <span className="text-[11px] text-slate-400 flex items-center gap-1 font-mono">
                                    <Clock className="w-3 h-3 text-[#C99A2E]" />
                                    {lesson.durationMinutes} min
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => handleDeleteLesson(module.id, lesson.id)}
                                    className="p-0.5 hover:text-rose-600 cursor-pointer"
                                    title="Delete Lesson"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 cursor-pointer hover:text-[#0B1D3A]" />
                                </div>
                              </div>
                            ))}

                            {/* Add Lesson Button for this Module */}
                            <div className="p-3 bg-[#F8FAFD] flex items-center">
                              <button
                                type="button"
                                onClick={() => handleOpenAddLesson(module.id)}
                                className="flex items-center gap-1.5 text-xs font-bold text-[#0B1D3A] hover:text-[#C99A2E] cursor-pointer transition-colors"
                              >
                                <Plus className="w-3.5 h-3.5 text-[#C99A2E]" />
                                <span>Add Lesson</span>
                              </button>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Position C4 - MODULE-BOUNDARY CARD (Between Module 1 and Module 2) */}
                      {mIdx === 0 && (
                        <div className="my-1">
                          <AdBanner
                            variant="banner"
                            label="SPONSORED"
                            primaryCtaText="Apply Now"
                            secondaryCtaText="Join Now"
                            onApply={() => handleOpenAdAction("apply", "Module Partner Program")}
                            onJoin={() => handleOpenAdAction("join", "Module Partner Program")}
                          />
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: ASSIGNMENTS */}
          {activeTab === "Assignments" && (
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-[8px] border border-[#E2E8F0] p-6 shadow-[0_4px_16px_rgba(11,29,58,0.04)] flex flex-col gap-3">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#C99A2E]" />
                    <span className="text-xs font-bold text-[#0B1D3A]">
                      Location Spotlight Case Study: Medchal Land Due Diligence
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-[#C99A2E] bg-[#FEF9EE] border border-[#C99A2E]/30 px-2 py-0.5 rounded-[4px]">
                    Pending Review
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-normal">
                  Analyze survey numbers and HMDA master plan zoning for a 5-acre plotted venture in Medchal.
                </p>
              </div>
              <AdBanner
                variant="banner"
                label="SPONSORED"
                primaryCtaText="Apply Now"
                secondaryCtaText="Join Now"
                onApply={() => handleOpenAdAction("apply", "Assignments Partner Program")}
                onJoin={() => handleOpenAdAction("join", "Assignments Partner Program")}
              />
            </div>
          )}

          {/* TAB 4: RESOURCES */}
          {activeTab === "Resources" && (
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-[8px] border border-[#E2E8F0] p-6 shadow-[0_4px_16px_rgba(11,29,58,0.04)] flex flex-col gap-3">
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <FolderDown className="w-4 h-4 text-[#C99A2E]" />
                    <span className="text-xs font-medium text-slate-800">
                      Medchal Micro-Market Price Trends & Developer Directory (PDF)
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => alert("Downloading PDF resource")}
                    className="text-xs font-bold text-[#0B1D3A] hover:text-[#C99A2E] hover:underline cursor-pointer transition-colors"
                  >
                    Download
                  </button>
                </div>
              </div>
              <AdBanner
                variant="banner"
                label="SPONSORED"
                primaryCtaText="Apply Now"
                secondaryCtaText="Join Now"
                onApply={() => handleOpenAdAction("apply", "Resources Partner Program")}
                onJoin={() => handleOpenAdAction("join", "Resources Partner Program")}
              />
            </div>
          )}

          {/* TAB 5: DISCUSSION */}
          {activeTab === "Discussion" && (
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-[8px] border border-[#E2E8F0] p-6 shadow-[0_4px_16px_rgba(11,29,58,0.04)] flex flex-col gap-3">
                <div className="flex items-center gap-2 text-slate-400">
                  <MessageSquare className="w-4 h-4 text-[#C99A2E]" />
                  <span className="text-xs text-slate-600 font-medium">
                    Have a question about this course? Ask instructors and peers.
                  </span>
                </div>
                <div className="flex gap-2 mt-2">
                  <input
                    type="text"
                    placeholder="Ask a question or share insights..."
                    className="flex-1 bg-white text-xs px-3 py-2 rounded-[8px] border border-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#C99A2E]/20 focus:border-[#C99A2E]/50"
                  />
                  <button
                    type="button"
                    onClick={() => alert("Question submitted")}
                    className="bg-gradient-to-r from-[#0B1D3A] to-[#1A3463] text-white text-xs font-bold px-4 py-2 rounded-[8px] shadow-sm hover:shadow-md transition-all cursor-pointer"
                  >
                    Post
                  </button>
                </div>
              </div>
              <AdBanner
                variant="banner"
                label="SPONSORED"
                primaryCtaText="Apply Now"
                secondaryCtaText="Join Now"
                onApply={() => handleOpenAdAction("apply", "Discussion Partner Program")}
                onJoin={() => handleOpenAdAction("join", "Discussion Partner Program")}
              />
            </div>
          )}
        </div>

        {/* Right Column: Progress & Instructor Sidebars (Sticky with independent scroll) */}
        <div className="flex flex-col gap-4 lg:sticky lg:top-4 self-start max-h-[calc(100vh-2rem)] overflow-y-auto pr-1 scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {/* Card 1: Your Progress */}
          <div className="bg-white rounded-[8px] border border-[#E2E8F0] p-5 shadow-[0_4px_16px_rgba(11,29,58,0.04)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0B1D3A]">Your Progress</span>
                <span className="text-xs font-extrabold text-[#C99A2E]">
                  {course.progressPercent}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-2.5">
                <div
                  className="bg-gradient-to-r from-[#C99A2E] to-[#E2C068] h-full rounded-full transition-all"
                  style={{ width: `${course.progressPercent}%` }}
                />
              </div>

              {/* Metrics */}
              <div className="flex items-center justify-between text-xs text-slate-500 mt-4">
                <span>Lessons completed</span>
                <span className="font-bold text-[#0B1D3A]">
                  {completedLessons}/{totalLessons || 1}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 mt-2">
                <span>Last activity</span>
                <span className="font-bold text-[#0B1D3A]">Today</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setActiveLesson(modules[0]?.lessons[0] || { id: "les-th-1", title: "Why Teams & Team Members Underperform", type: "VIDEO", durationMinutes: 20 })}
              className="mt-5 w-full bg-gradient-to-r from-[#C99A2E] to-[#A87A18] hover:from-[#D5AA45] hover:to-[#B5851E] text-white text-xs font-bold py-2.5 rounded-[8px] shadow-[0_4px_14px_rgba(201,154,46,0.35)] flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:-translate-y-0.5 relative overflow-hidden group/btn"
            >
              <span className="absolute -inset-y-2 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-all duration-700 group-hover/btn:left-[130%] group-hover/btn:opacity-100" />
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Continue Learning</span>
            </button>
          </div>

          {/* PROGRESS SECTION ADVERTISEMENT */}
          <AdBanner variant="sidebar" label="SPONSORED" height={160} />

          {/* Card 2: Instructor */}
          <div className="bg-white rounded-[8px] border border-[#E2E8F0] p-5 shadow-[0_4px_16px_rgba(11,29,58,0.04)]">
            <h4 className="text-xs font-bold text-[#0B1D3A] mb-3">Instructor</h4>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0B1D3A] to-[#1A3463] text-white flex items-center justify-center text-xs font-bold shrink-0 border border-[#C99A2E]/40">
                {course.instructorAvatar}
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-[#0B1D3A] truncate">
                  {course.instructorName}
                </div>
                <div className="text-[11px] text-slate-400 font-medium truncate mt-0.5">
                  {course.instructorTitle}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ADD LESSON MODAL (Matching Screenshot 3) */}
      {isAddLessonOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-[8px] shadow-[0_20px_50px_rgba(11,29,58,0.3)] border border-[#E2E8F0] w-full max-w-lg p-6 flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h3 className="text-sm font-bold text-[#0B1D3A]">Add Lesson</h3>
              <button
                type="button"
                onClick={() => setIsAddLessonOpen(false)}
                className="text-slate-400 hover:text-[#0B1D3A] p-1 rounded-md"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSaveLesson} className="flex flex-col gap-3.5">
              {/* Field 1: Title */}
              <div>
                <label className="text-xs font-semibold text-[#0B1D3A] block mb-1">
                  Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Getting Started"
                  value={lessonTitle}
                  onChange={(e) => setLessonTitle(e.target.value)}
                  className="w-full bg-[#F8FAFD] border border-[#E2E8F0] rounded-[8px] px-3 py-2 text-xs text-[#0B1D3A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C99A2E]/20 focus:border-[#C99A2E]/50 focus:bg-white"
                />
              </div>

              {/* Grid 2 Columns: Lesson Type & Duration */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-[#0B1D3A] block mb-1">
                    Lesson Type *
                  </label>
                  <select
                    value={lessonType}
                    onChange={(e) => setLessonType(e.target.value as Lesson["type"])}
                    className="w-full bg-[#F8FAFD] border border-[#E2E8F0] rounded-[8px] px-3 py-2 text-xs text-[#0B1D3A] focus:outline-none focus:ring-2 focus:ring-[#C99A2E]/20 focus:border-[#C99A2E]/50 focus:bg-white"
                  >
                    <option value="VIDEO">VIDEO</option>
                    <option value="ARTICLE">ARTICLE</option>
                    <option value="QUIZ">QUIZ</option>
                    <option value="DOCUMENT">DOCUMENT</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#0B1D3A] block mb-1">
                    Duration (mins)
                  </label>
                  <input
                    type="number"
                    min="1"
                    placeholder="20"
                    value={lessonDuration}
                    onChange={(e) => setLessonDuration(e.target.value)}
                    className="w-full bg-[#F8FAFD] border border-[#E2E8F0] rounded-[8px] px-3 py-2 text-xs text-[#0B1D3A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C99A2E]/20 focus:border-[#C99A2E]/50 focus:bg-white"
                  />
                </div>
              </div>

              {/* Field 3: Video URL */}
              <div>
                <label className="text-xs font-semibold text-[#0B1D3A] block mb-1">
                  Video URL
                </label>
                <input
                  type="text"
                  placeholder="https://..."
                  value={lessonVideoUrl}
                  onChange={(e) => setLessonVideoUrl(e.target.value)}
                  className="w-full bg-[#F8FAFD] border border-[#E2E8F0] rounded-[8px] px-3 py-2 text-xs text-[#0B1D3A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C99A2E]/20 focus:border-[#C99A2E]/50 focus:bg-white"
                />
              </div>

              {/* Field 4: Description */}
              <div>
                <label className="text-xs font-semibold text-[#0B1D3A] block mb-1">
                  Description
                </label>
                <textarea
                  rows={3}
                  placeholder="Provide lesson notes or outline..."
                  value={lessonDescription}
                  onChange={(e) => setLessonDescription(e.target.value)}
                  className="w-full bg-[#F8FAFD] border border-[#E2E8F0] rounded-[8px] px-3 py-2 text-xs text-[#0B1D3A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C99A2E]/20 focus:border-[#C99A2E]/50 focus:bg-white resize-none"
                />
              </div>

              {/* Modal Action Buttons */}
              <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsAddLessonOpen(false)}
                  className="px-4 py-2 rounded-[8px] border border-[#E2E8F0] text-xs font-semibold text-slate-700 hover:bg-[#F0F4FF] cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-[8px] bg-gradient-to-r from-[#0B1D3A] to-[#1A3463] hover:from-[#102548] hover:to-[#22437C] text-xs font-semibold text-white shadow-sm cursor-pointer"
                >
                  Add Lesson
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ADD MODULE MODAL */}
      {isAddModuleOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-[8px] shadow-[0_20px_50px_rgba(11,29,58,0.3)] border border-[#E2E8F0] w-full max-w-md p-6 flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h3 className="text-sm font-bold text-[#0B1D3A]">Add Module</h3>
              <button
                type="button"
                onClick={() => setIsAddModuleOpen(false)}
                className="text-slate-400 hover:text-[#0B1D3A] p-1 rounded-md"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveModule} className="flex flex-col gap-3.5">
              <div>
                <label className="text-xs font-semibold text-[#0B1D3A] block mb-1">
                  Module Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Due Diligence Procedures"
                  value={newModuleTitle}
                  onChange={(e) => setNewModuleTitle(e.target.value)}
                  className="w-full bg-[#F8FAFD] border border-[#E2E8F0] rounded-[8px] px-3 py-2 text-xs text-[#0B1D3A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C99A2E]/20 focus:border-[#C99A2E]/50 focus:bg-white"
                />
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsAddModuleOpen(false)}
                  className="px-4 py-2 rounded-[8px] border border-[#E2E8F0] text-xs font-semibold text-slate-700 hover:bg-[#F0F4FF] cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-[8px] bg-gradient-to-r from-[#0B1D3A] to-[#1A3463] hover:from-[#102548] hover:to-[#22437C] text-xs font-semibold text-white shadow-sm cursor-pointer"
                >
                  Add Module
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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
