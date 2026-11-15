import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  Play,
  Lock,
  BookOpen,
  FileText,
  Target,
  Trash2,
  Plus,
  RotateCcw,
  CheckCircle2,
  Check,
} from "lucide-react";
import { type ProgramItem, type ProgramStep } from "./data";
import { coursesData, allCoursesData, type Course } from "../courses/data";
import AdBanner from "../components/AdBanner";
import AdActionModal from "../components/AdActionModal";
import QuizModal from "../knowledge-bank/QuizModal";
import { dispatchOpenCompanyProfile } from "../company-profile/useCompanyProfile";

export interface ProgramDetailProps {
  program: ProgramItem;
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
        <linearGradient id="programHeroGoldBuilding1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E5B242" />
          <stop offset="50%" stopColor="#C99424" />
          <stop offset="100%" stopColor="#8C6314" />
        </linearGradient>
        <linearGradient id="programHeroGoldBuilding2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5D061" />
          <stop offset="100%" stopColor="#B3821C" />
        </linearGradient>
        <pattern id="programHeroWindowGrid" width="4" height="6" patternUnits="userSpaceOnUse">
          <rect x="1" y="1" width="2" height="3" fill="#0A1428" opacity="0.35" />
        </pattern>
      </defs>

      <rect x="10" y="38" width="18" height="102" fill="url(#programHeroGoldBuilding1)" rx="1" />
      <rect x="10" y="38" width="18" height="102" fill="url(#programHeroWindowGrid)" />

      <rect x="32" y="58" width="16" height="82" fill="url(#programHeroGoldBuilding2)" rx="1" />
      <rect x="32" y="58" width="16" height="82" fill="url(#programHeroWindowGrid)" />

      <rect x="52" y="44" width="20" height="96" fill="url(#programHeroGoldBuilding1)" rx="1" />
      <rect x="52" y="44" width="20" height="96" fill="url(#programHeroWindowGrid)" />

      <rect x="76" y="24" width="18" height="116" fill="url(#programHeroGoldBuilding2)" rx="1" />
      <rect x="76" y="24" width="18" height="116" fill="url(#programHeroWindowGrid)" />

      <rect x="98" y="50" width="16" height="90" fill="url(#programHeroGoldBuilding1)" rx="1" />
      <rect x="98" y="50" width="16" height="90" fill="url(#programHeroWindowGrid)" />

      <rect x="118" y="65" width="22" height="75" fill="url(#programHeroGoldBuilding2)" rx="1" />
      <rect x="118" y="65" width="22" height="75" fill="url(#programHeroWindowGrid)" />
    </svg>
  );
}

export default function ProgramDetail({
  program,
  onBack,
  isMobile = false,
}: ProgramDetailProps) {
  // Stepper state
  const steps: ProgramStep[] = program.steps && program.steps.length > 0
    ? program.steps
    : [
        {
          stepNumber: 1,
          type: "COURSE",
          label: "COURSE · CONTINUE HERE",
          title: "New-Age Team Structure Mastery",
          courseId: "6a8bce1d5c501a3603065010",
          status: "continue",
        },
      ];

  // Default active step: if program-one-edited default to step 2 (completed quiz matching screenshot), else step 1
  const defaultStep = program.id === "program-one-edited" ? 2 : 1;
  const [activeStepNumber, setActiveStepNumber] = useState<number>(defaultStep);
  const [activeTab, setActiveTab] = useState<string>("Modules");
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({
    "mod-team-1": true,
    "mod-team-2": true,
    "mod-1": true,
    "mod-2-1": true,
  });

  // Quiz modal state
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
  const [activeQuizTitle, setActiveQuizTitle] = useState("");

  // Sponsored Ad Action Modal State
  const [adModalOpen, setAdModalOpen] = useState(false);
  const [adActionType, setAdActionType] = useState<"apply" | "join">("apply");
  const [adMandateTitle, setAdMandateTitle] = useState("");

  const handleOpenAdAction = (type: "apply" | "join", title: string) => {
    if (type === "join") {
      dispatchOpenCompanyProfile(title);
      return;
    }
    setAdActionType(type);
    setAdMandateTitle(title);
    setAdModalOpen(true);
  };

  const activeStep = steps.find((s) => s.stepNumber === activeStepNumber) || steps[0];

  // Derived progress statistics
  const completedCount = steps.filter((s) => s.status === "completed").length;
  const totalCount = program.totalCount || steps.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);
  const resumeStep =
    steps.find((s) => s.status === "continue")?.stepNumber ??
    (steps.find((s) => s.status !== "completed")?.stepNumber ?? 1);

  // Find course matching the active step or default to New-Age Team Structure Mastery
  const currentCourse: Course =
    allCoursesData.find(
      (c) =>
        (activeStep?.courseId && c.id === activeStep.courseId) ||
        c.title.toLowerCase() === activeStep?.title.toLowerCase()
    ) ||
    allCoursesData.find((c) => c.title.toLowerCase().includes(activeStep?.title.toLowerCase())) ||
    allCoursesData.find((c) => c.title.includes("New-Age Team Structure")) ||
    coursesData[0];

  const toggleModule = (modId: string) => {
    setExpandedModules((prev) => ({
      ...prev,
      [modId]: !prev[modId],
    }));
  };

  const handleStepClick = (step: ProgramStep) => {
    setActiveStepNumber(step.stepNumber);
  };

  return (
    <div
      className={`w-full bg-[#F8FAFD] min-h-screen font-['Outfit'] select-text flex flex-col gap-6 ${
        isMobile ? "p-4 pb-16" : "p-6 xl:p-8"
      }`}
    >
      {/* Top Header: Breadcrumbs & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B1D3A] hover:text-[#C99A2E] cursor-pointer transition-colors mb-1.5"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Programs</span>
          </button>
          <h1 className="text-xl xl:text-2xl font-black text-[#0B1D3A] tracking-tight">
            {program.title}
          </h1>
          <p className="text-xs text-[#64748B] font-medium mt-0.5">
            {completedCount} of {totalCount} complete. Resume opens at step {resumeStep}.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            setActiveStepNumber(1);
            alert("Progress reset to Step 1.");
          }}
          className="self-start sm:self-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-[8px] border border-[#CBD5E1] bg-white text-xs font-bold text-[#0B1D3A] hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
          <span>Start over</span>
        </button>
      </div>

      {/* Program Progress Card */}
      <div className="w-full bg-white rounded-[10px] border border-[#E2E8F0] p-4 flex flex-col gap-2.5 shadow-2xs">
        <div className="flex items-center justify-between text-xs font-bold text-[#0B1D3A]">
          <span className="text-[#475569]">Program progress</span>
          <span className="text-[#0B1D3A]">{progressPercent}%</span>
        </div>
        <div className="w-full h-1.5 bg-[#F1F5F9] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#0A1325] rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Position P1 - PROGRAM HIRING PARTNERS: White card with gray shade, text SPONSORED, CTA controls */}
      <AdBanner
        variant="banner"
        label="SPONSORED"
        primaryCtaText="Apply Now"
        secondaryCtaText="View Company"
        onApply={() => handleOpenAdAction("apply", "Program Hiring Partners")}
        onJoin={() => handleOpenAdAction("join", "Program Hiring Partners")}
      />

      {/* Stepper Grid (3-column responsive grid matching reference screenshots) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {steps.map((step) => {
          const isActive = step.stepNumber === activeStepNumber;
          const isQuiz = step.type === "QUIZ";
          const isMock = step.type === "MOCK";
          const isCompleted = step.status === "completed";
          const isContinue = step.status === "continue";

          return (
            <React.Fragment key={step.stepNumber}>
              <div
                onClick={() => handleStepClick(step)}
                className={`rounded-[8px] p-4 flex flex-col justify-between gap-3 transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#FFFDF7] border-2 border-[#C99A2E] shadow-[0_4px_14px_rgba(201,154,46,0.12)]"
                    : "bg-white border border-[#E2E8F0] hover:border-slate-300 shadow-2xs"
                }`}
              >
                {/* Step Top Badge */}
                <div className="flex items-center gap-2">
                  {isCompleted ? (
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                  ) : isContinue ? (
                    <div className="w-4 h-4 rounded-full border-2 border-slate-400 shrink-0" />
                  ) : (
                    <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  )}
                  <span
                    className={`text-[10px] font-black uppercase tracking-wider ${
                      isActive
                        ? "text-[#A16207]"
                        : isCompleted
                        ? "text-[#16A34A]"
                        : "text-slate-400"
                    }`}
                  >
                    {step.stepNumber}. {step.label}
                  </span>
                </div>

                {/* Step Title */}
                <h2
                  className={`text-xs sm:text-[13px] leading-snug font-bold ${
                    isActive ? "text-[#0B1D3A]" : "text-[#334155]"
                  }`}
                >
                  {step.title}
                </h2>

                {/* Step Footer Type */}
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-400">
                  {isQuiz ? (
                    <>
                      <FileText className="w-3 h-3 text-slate-400" />
                      <span>Quiz</span>
                    </>
                  ) : isMock ? (
                    <>
                      <Target className="w-3 h-3 text-slate-400" />
                      <span>Mock</span>
                    </>
                  ) : (
                    <>
                      <BookOpen className="w-3 h-3 text-slate-400" />
                      <span>Course</span>
                    </>
                  )}
                </div>
              </div>

              {/* Position P2 - CAREER MILESTONE TILE: White card with gray border */}
              {step.stepNumber === 3 && (
                <div className="bg-white rounded-[8px] border border-[#E2E8F0] p-4 flex flex-col justify-between gap-3 shadow-2xs hover:border-[#C99A2E]/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-[9.5px] font-extrabold uppercase tracking-wider text-[#A16207] bg-[#FFFDF5] border border-[#FDE68A] px-2 py-0.5 rounded-[3px]">
                      CAREER UNLOCK · AFTER STEP 3
                    </span>
                    <span className="text-[9.5px] font-bold text-[#64748B] uppercase tracking-wider">
                      SPONSORED
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-[13px] font-bold text-[#0B1D3A] leading-snug">
                    Pass Quiz 2 to apply to 5 Team Leader roles
                  </h3>

                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[10px] font-semibold text-[#0B1D3A] bg-[#F8FAFD] border border-[#E2E8F0] px-2 py-0.5 rounded-[4px]">
                      Horizon Plots
                    </span>
                    <span className="text-[10px] font-semibold text-[#0B1D3A] bg-[#F8FAFD] border border-[#E2E8F0] px-2 py-0.5 rounded-[4px]">
                      Greenline Layouts
                    </span>
                    <span className="text-[10px] font-bold text-[#C99A2E] bg-[#FEF9EE] border border-[#C99A2E]/30 px-1.5 py-0.5 rounded-[4px]">
                      +3
                    </span>
                  </div>

                  <div className="flex items-center gap-2 pt-1 border-t border-[#E2E8F0]">
                    <button
                      type="button"
                      onClick={() => handleOpenAdAction("join", "Team Leader Roles")}
                      className="px-3 py-1.5 rounded-[6px] bg-[#0B1D3A] hover:bg-[#1A3463] text-white text-xs font-bold cursor-pointer"
                    >
                      View Company
                    </button>
                    <button
                      type="button"
                      onClick={() => handleOpenAdAction("apply", "Team Leader Roles")}
                      className="px-3 py-1.5 rounded-[6px] bg-gradient-to-r from-[#C99A2E] to-[#A87A18] text-white text-xs font-bold cursor-pointer"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Main Content Area: Dynamically switches based on active step type & completion status */}
      {activeStep.type === "QUIZ" && activeStep.status === "completed" ? (
        /* Branch 1: Completed Quiz View (Matching Reference Screenshot 2) */
        <div className="w-full bg-white rounded-[12px] border border-[#E2E8F0] p-6 xl:p-8 flex flex-col gap-6 shadow-[0_4px_16px_rgba(11,29,58,0.03)]">
          {/* State Badges */}
          <div className="flex items-center gap-2">
            <span className="bg-white border border-slate-200 text-[#0B1D3A] text-xs font-bold px-2.5 py-0.5 rounded-[4px] shadow-2xs">
              Quiz
            </span>
            <span className="bg-[#FFFDF5] border border-[#FDE68A] text-[#D97706] text-xs font-bold px-2.5 py-0.5 rounded-[4px]">
              Completed
            </span>
          </div>

          {/* Quiz Title */}
          <h1 className="text-xl md:text-2xl font-black text-[#0B1D3A] tracking-tight">
            {activeStep.title}
          </h1>

          {/* Green Completed Banner Container */}
          <div className="w-full bg-[#F0FDF4] border border-[#DCFCE7] rounded-[10px] py-12 px-6 flex flex-col items-center justify-center text-center gap-3">
            <div className="w-12 h-12 rounded-full border-2 border-emerald-500 flex items-center justify-center text-emerald-500 shadow-2xs">
              <Check className="w-6 h-6 stroke-[3]" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-base font-bold text-[#0B1D3A]">Quiz completed</h3>
              <p className="text-xs text-[#64748B] font-medium">
                {activeStep.quizCompletedNote || "Test ass is marked complete in this program."}
              </p>
            </div>
          </div>

          {/* Action Button: Retake Quiz */}
          <div className="flex items-center gap-3 pt-1">
            <button
              type="button"
              onClick={() => {
                setActiveQuizTitle(activeStep.title);
                setIsQuizModalOpen(true);
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[8px] bg-[#0B1D3A] hover:bg-[#152a4e] text-white text-xs font-bold shadow-2xs transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retake Quiz</span>
            </button>
          </div>

          {/* Position L3 - QUIZ-COMPLETE SPONSORED BANNER: White card with gray shade, text SPONSORED, CTA controls */}
          <AdBanner
            variant="banner"
            label="SPONSORED"
            primaryCtaText="Apply Now"
            secondaryCtaText="View Company"
            onApply={() => handleOpenAdAction("apply", "Program Partner")}
            onJoin={() => handleOpenAdAction("join", "Program Partner")}
          />
        </div>
      ) : activeStep.type === "QUIZ" ? (
        /* Branch 2: In-Progress / Locked Quiz View */
        <div className="w-full bg-white rounded-[12px] border border-[#E2E8F0] p-6 xl:p-8 flex flex-col gap-6 shadow-[0_4px_16px_rgba(11,29,58,0.03)]">
          {/* State Badges */}
          <div className="flex items-center gap-2">
            <span className="bg-white border border-slate-200 text-[#0B1D3A] text-xs font-bold px-2.5 py-0.5 rounded-[4px] shadow-2xs">
              Quiz
            </span>
            <span className="bg-[#FFFDF5] border border-[#FDE68A] text-[#A16207] text-xs font-bold px-2.5 py-0.5 rounded-[4px]">
              In progress
            </span>
          </div>

          {/* Quiz Title */}
          <h1 className="text-xl md:text-2xl font-black text-[#0B1D3A] tracking-tight">
            {activeStep.title}
          </h1>

          {/* Quiz Start Card */}
          <div className="w-full bg-[#F8FAFD] border border-[#E2E8F0] rounded-[10px] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-xl">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#C99A2E]">
                Program Assessment
              </span>
              <h3 className="text-base font-bold text-[#0B1D3A]">
                {activeStep.title}
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Test your understanding of the concepts covered in this module. A passing score of 70% is required to mark this step complete and unlock subsequent units.
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-[#0B1D3A] mt-2">
                <span className="bg-white border border-slate-200 px-3 py-1 rounded-[6px] shadow-2xs">
                  5 Questions
                </span>
                <span className="bg-white border border-slate-200 px-3 py-1 rounded-[6px] shadow-2xs">
                  10 Minutes
                </span>
                <span className="bg-white border border-slate-200 px-3 py-1 rounded-[6px] shadow-2xs">
                  Multiple Choice
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setActiveQuizTitle(activeStep.title);
                setIsQuizModalOpen(true);
              }}
              className="shrink-0 relative overflow-hidden group/btn inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C99A2E] to-[#A87A18] hover:from-[#D5AA45] hover:to-[#B5851E] text-white text-xs font-bold px-6 py-3 rounded-[8px] shadow-[0_4px_14px_rgba(201,154,46,0.35)] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <span className="absolute -inset-y-2 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-all duration-700 group-hover/btn:left-[130%] group-hover/btn:opacity-100" />
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Start Quiz</span>
            </button>
          </div>

          {/* Position L3 - QUIZ-COMPLETE SPONSORED BANNER: White card with gray shade, text SPONSORED, CTA controls */}
          <AdBanner
            variant="banner"
            label="SPONSORED"
            primaryCtaText="Apply Now"
            secondaryCtaText="View Company"
            onApply={() => handleOpenAdAction("apply", "Program Partner")}
            onJoin={() => handleOpenAdAction("join", "Program Partner")}
          />
        </div>
      ) : activeStep.type === "MOCK" ? (
        /* Branch 3: Voice Mock Simulator View */
        <div className="w-full bg-white rounded-[12px] border border-[#E2E8F0] p-6 xl:p-8 flex flex-col gap-6 shadow-[0_4px_16px_rgba(11,29,58,0.03)]">
          {/* State Badges */}
          <div className="flex items-center gap-2">
            <span className="bg-white border border-slate-200 text-[#0B1D3A] text-xs font-bold px-2.5 py-0.5 rounded-[4px] shadow-2xs">
              Mock
            </span>
            <span className="bg-[#FFFDF5] border border-[#FDE68A] text-[#A16207] text-xs font-bold px-2.5 py-0.5 rounded-[4px]">
              In progress
            </span>
          </div>

          {/* Mock Title */}
          <h1 className="text-xl md:text-2xl font-black text-[#0B1D3A] tracking-tight">
            {activeStep.title}
          </h1>

          {/* Voice Simulator Card */}
          <div className="w-full bg-[#F8FAFD] border border-[#E2E8F0] rounded-[10px] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-xl">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#C99A2E]">
                Voice Mock Simulator
              </span>
              <h3 className="text-base font-bold text-[#0B1D3A]">
                {activeStep.title}
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Practice realistic buyer objections regarding plotted land valuations, layout sanction verification, and spot token commitments in an interactive voice roleplay environment.
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-[#0B1D3A] mt-2">
                <span className="bg-white border border-slate-200 px-3 py-1 rounded-[6px] shadow-2xs">
                  Interactive Audio
                </span>
                <span className="bg-white border border-slate-200 px-3 py-1 rounded-[6px] shadow-2xs">
                  15 Minutes
                </span>
                <span className="bg-white border border-slate-200 px-3 py-1 rounded-[6px] shadow-2xs">
                  Real-time Feedback
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => alert(`Launching ${activeStep.title} voice simulation session.`)}
              className="shrink-0 relative overflow-hidden group/btn inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C99A2E] to-[#A87A18] hover:from-[#D5AA45] hover:to-[#B5851E] text-white text-xs font-bold px-6 py-3 rounded-[8px] shadow-[0_4px_14px_rgba(201,154,46,0.35)] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <span className="absolute -inset-y-2 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-all duration-700 group-hover/btn:left-[130%] group-hover/btn:opacity-100" />
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Launch Simulator</span>
            </button>
          </div>

          {/* Position L3 - QUIZ-COMPLETE SPONSORED BANNER: White card with gray shade, text SPONSORED, CTA controls */}
          <AdBanner
            variant="banner"
            label="SPONSORED"
            primaryCtaText="Apply Now"
            secondaryCtaText="View Company"
            onApply={() => handleOpenAdAction("apply", "Program Partner")}
            onJoin={() => handleOpenAdAction("join", "Program Partner")}
          />
        </div>
      ) : (
        /* Branch 4: Course View (Matching Reference Screenshot 1) */
        <div className="w-full bg-white rounded-[12px] border border-[#E2E8F0] p-6 xl:p-8 flex flex-col gap-6 shadow-[0_4px_16px_rgba(11,29,58,0.03)]">
          {/* Course State Badges */}
          <div className="flex items-center gap-2">
            <span className="bg-white border border-slate-200 text-[#0B1D3A] text-xs font-bold px-2.5 py-0.5 rounded-[4px] shadow-2xs">
              Course
            </span>
            <span
              className={`text-xs font-bold px-2.5 py-0.5 rounded-[4px] ${
                activeStep.status === "completed"
                  ? "bg-[#FFFDF5] border border-[#FDE68A] text-[#D97706]"
                  : "bg-[#FFFDF5] border border-[#FDE68A] text-[#A16207]"
              }`}
            >
              {activeStep.status === "completed" ? "Completed" : "In progress"}
            </span>
          </div>

          {/* Hero Banner Card */}
          <div className="w-full shrink-0 min-h-[190px] bg-gradient-to-r from-[#0B1D3A] via-[#102548] to-[#1A3463] rounded-[10px] overflow-hidden shadow-[0_10px_30px_rgba(11,29,58,0.2)] border border-[#1A3463]/50 relative flex flex-col justify-between p-6 xl:p-8 text-white">
            <HeroCityscapeGraphic />

            <div className="relative z-10 flex flex-col gap-3 max-w-[75%]">
              {/* Top Category Badge */}
              <div>
                <span className="bg-[#FFFDF5] text-[#A16207] border border-[#FDE68A] text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-[4px]">
                  {currentCourse.category}
                </span>
              </div>

              {/* Watermark and Main Title */}
              <div className="relative mt-1">
                <span className="text-white/10 text-xl md:text-2xl font-serif font-black absolute -top-4 left-0 pointer-events-none select-none uppercase">
                  {currentCourse.coverTitle}
                </span>
                <h1 className="text-white text-xl md:text-2xl font-black tracking-tight leading-tight relative">
                  {currentCourse.title}
                </h1>
              </div>

              {/* Course Meta */}
              <p className="text-white/70 text-xs font-mono">
                {currentCourse.id} · {currentCourse.modulesCount} Modules · {currentCourse.lessonsCount} lessons · {currentCourse.duration}
              </p>

              {/* Large Start / Resume CTA Button */}
              <div className="mt-3">
                <button
                  type="button"
                  onClick={() => alert(`Starting ${currentCourse.title}`)}
                  className="relative overflow-hidden group/btn inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#C99A2E] to-[#A87A18] hover:from-[#D5AA45] hover:to-[#B5851E] text-white text-xs font-bold px-6 py-2.5 rounded-[8px] shadow-[0_4px_14px_rgba(201,154,46,0.35)] cursor-pointer transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <span className="absolute -inset-y-2 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-all duration-700 group-hover/btn:left-[130%] group-hover/btn:opacity-100" />
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Start Course</span>
                </button>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-6 border-b border-[#E2E8F0] overflow-x-auto no-scrollbar">
            {["Overview", "Modules", "Assignments", "Resources", "Discussion"].map((tab) => {
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

          {/* Tab Content: Modules Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {/* Left Column (Span 2): Modules Accordion */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {/* Top Add Module Button */}
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => alert("Add Module dialog opened")}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1D3A] hover:text-[#C99A2E] cursor-pointer transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Module</span>
                </button>
              </div>

              {/* Modules Accordion List */}
              <div className="flex flex-col gap-3">
                {currentCourse.modules.map((mod, idx) => {
                  const isExpanded = expandedModules[mod.id] ?? false;
                  const completedLessons = mod.lessons.filter((l) => l.isCompleted).length;

                  return (
                    <div key={mod.id || idx} className="flex flex-col gap-3">
                      <div className="border border-[#E2E8F0] rounded-[8px] bg-white overflow-hidden transition-all shadow-2xs">
                        {/* Module Accordion Header */}
                        <div
                          onClick={() => toggleModule(mod.id)}
                          className="p-4 flex items-center justify-between cursor-pointer hover:bg-slate-50/60 transition-colors select-none"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-7 h-7 rounded-full border border-slate-300 text-[#0B1D3A] text-xs font-bold flex items-center justify-center shrink-0">
                              {mod.moduleNumber || idx + 1}
                            </div>
                            <div>
                              <h2 className="text-xs sm:text-sm font-bold text-[#0B1D3A]">
                                {mod.title}
                              </h2>
                              <p className="text-[11px] text-slate-400 font-medium">
                                {mod.lessons.length} lessons - {completedLessons}/{mod.lessons.length} done
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            {isExpanded ? (
                              <ChevronUp className="w-4 h-4 text-slate-400" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-slate-400" />
                            )}
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                alert(`Module "${mod.title}" deleted`);
                              }}
                              className="text-slate-400 hover:text-red-500 p-1 rounded transition-colors"
                              title="Delete module"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        {/* Expanded Lessons List */}
                        {isExpanded && (
                          <div className="border-t border-[#E2E8F0] p-4 bg-[#F8FAFD]/40 flex flex-col gap-2.5">
                            {mod.lessons.map((lesson, lIdx) => (
                              <div
                                key={lesson.id || lIdx}
                                className="bg-white border border-[#E2E8F0] rounded-[6px] p-3 flex items-center justify-between gap-3 hover:border-slate-300 transition-colors"
                              >
                                <div className="flex items-center gap-3 min-w-0">
                                  <div className="w-5 h-5 rounded-full border border-slate-200 text-slate-500 text-[10px] font-bold flex items-center justify-center shrink-0">
                                    {lIdx + 1}
                                  </div>
                                  <span className="text-xs font-medium text-[#0B1D3A] truncate">
                                    {lesson.title}
                                  </span>
                                </div>

                                <div className="flex items-center gap-3 shrink-0 text-slate-400">
                                  <div className="flex items-center gap-1.5 text-[11px]">
                                    <Play className="w-3 h-3 text-slate-400" />
                                    <span>{lesson.durationMinutes} min</span>
                                  </div>
                                  <button
                                    type="button"
                                    onClick={() => alert(`Lesson "${lesson.title}" deleted`)}
                                    className="hover:text-red-500 p-1 rounded transition-colors"
                                    title="Delete lesson"
                                  >
                                    <Trash2 className="w-3 h-3" />
                                  </button>
                                </div>
                              </div>
                            ))}

                            {/* Add Lesson Button */}
                            <div className="pt-1">
                              <button
                                type="button"
                                onClick={() => alert(`Add lesson to "${mod.title}"`)}
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1D3A] hover:text-[#C99A2E] cursor-pointer transition-colors"
                              >
                                <Plus className="w-3.5 h-3.5" />
                                <span>Add Lesson</span>
                              </button>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Position C4 - MODULE-BOUNDARY CARD (Between Module 1 and Module 2) */}
                      {idx === 0 && (
                        <div className="my-1">
                          <AdBanner
                            variant="banner"
                            label="SPONSORED"
                            primaryCtaText="Apply Now"
                            secondaryCtaText="View Company"
                            onApply={() => handleOpenAdAction("apply", "Module Partner Program")}
                            onJoin={() => handleOpenAdAction("join", "Module Partner Program")}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column (Span 1): Progress Card, Sponsored Ad, Instructor (Sticky with independent scroll) */}
            <div className="flex flex-col gap-4 lg:sticky lg:top-4 self-start max-h-[calc(100vh-2rem)] overflow-y-auto pr-1 scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {/* Your Progress Card */}
              <div className="bg-white border border-[#E2E8F0] rounded-[8px] p-5 flex flex-col gap-4 shadow-2xs">
                <div className="flex items-center justify-between">
                  <h2 className="text-xs font-bold text-[#0B1D3A] uppercase tracking-wider">
                    Your Progress
                  </h2>
                  <span className="text-sm font-black text-[#0B1D3A]">
                    {currentCourse.progressPercent}%
                  </span>
                </div>

                <div className="flex flex-col gap-2 text-xs border-t border-[#F1F5F9] pt-3">
                  <div className="flex items-center justify-between text-slate-500">
                    <span>Lessons completed</span>
                    <span className="font-bold text-[#0B1D3A]">
                      {currentCourse.lessonsCompleted}/{currentCourse.lessonsCount}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-slate-500">
                    <span>Last activity</span>
                    <span className="font-bold text-[#0B1D3A]">Today</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => alert(`Continuing ${currentCourse.title}`)}
                  className="relative overflow-hidden group/btn w-full bg-gradient-to-r from-[#C99A2E] to-[#A87A18] hover:from-[#D5AA45] hover:to-[#B5851E] text-white text-xs font-bold py-2.5 rounded-[8px] flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(201,154,46,0.25)] transition-all cursor-pointer active:scale-[0.98]"
                >
                  <span className="absolute -inset-y-2 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-all duration-700 group-hover/btn:left-[130%] group-hover/btn:opacity-100" />
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Continue Learning</span>
                </button>
              </div>

              {/* ADVERTISEMENT: Positioned Below the Progress Card */}
              <AdBanner
                variant="sidebar"
                label="SPONSORED AD"
                height={160}
                className="w-full"
              />

              {/* Instructor Card */}
              <div className="bg-white border border-[#E2E8F0] rounded-[8px] p-5 flex flex-col gap-3 shadow-2xs">
                <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Instructor
                </h2>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0B1D3A] text-white font-bold flex items-center justify-center text-sm shadow-2xs shrink-0">
                    {currentCourse.instructorAvatar || "6"}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xs font-bold text-[#0B1D3A] truncate">
                      {currentCourse.instructorName}
                    </h3>
                    <p className="text-[11px] text-slate-400 truncate">
                      {currentCourse.instructorTitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Quiz Runner / Results Modal */}
      {isQuizModalOpen && (
        <QuizModal
          isOpen={isQuizModalOpen}
          onClose={() => setIsQuizModalOpen(false)}
          test={{
            id: `test-${activeStepNumber}`,
            title: activeQuizTitle || "Real Estate Assessment Quiz",
            subCategory: "Programs Assessment",
            difficulty: "Intermediate",
            questionsCount: 5,
            durationMinutes: 10,
            status: "Not Started",
          }}
          specializationTitle={program.title}
        />
      )}

      {/* Sponsored Ad Action Modal (Apply Now) */}
      <AdActionModal
        isOpen={adModalOpen}
        onClose={() => setAdModalOpen(false)}
        actionType={adActionType}
        mandateTitle={adMandateTitle}
      />
    </div>
  );
}
