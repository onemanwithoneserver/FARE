import { useState, useMemo } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  ChevronDown,
  ClipboardList,
  Clock,
  HelpCircle,
  Play,
  CheckCircle2,
  BookOpen,
  Scale,
  ShieldCheck,
  Compass,
  Building,
  MapPin,
  TrendingUp,
  Layers,
  Home,
  Coins,
  Hammer,
  Sparkles,
  FileText,
  Users,
  Briefcase,
  FileCheck,
} from "lucide-react";
import {
  difficultyFilterOptions,
  statusFilterOptions,
  sortFilterOptions,
  type Specialization,
  type TestItem,
  type DifficultyFilterOption,
  type StatusFilterOption,
  type SortFilterOption,
} from "./data";
import AdBanner from "../components/AdBanner";
import QuizModal from "./QuizModal";

export interface SpecializationDetailProps {
  specialization: Specialization;
  onBack: () => void;
  isMobile?: boolean;
}

export default function SpecializationDetail({
  specialization,
  onBack,
  isMobile = false,
}: SpecializationDetailProps) {
  const [activeQuizTest, setActiveQuizTest] = useState<TestItem | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("All Sub-categories");
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyFilterOption>("All");
  const [selectedStatus, setSelectedStatus] = useState<StatusFilterOption>("All");
  const [selectedSort, setSelectedSort] = useState<SortFilterOption>("Recommended");

  // Dropdown open states
  const [openDropdown, setOpenDropdown] = useState<"subCategory" | "difficulty" | "status" | "sort" | null>(null);

  const subCategoryOptions = useMemo(() => {
    return ["All Sub-categories", ...(specialization.subcategories || [])];
  }, [specialization.subcategories]);

  const filteredTests = useMemo(() => {
    let result = (specialization.tests || []).filter((test: TestItem) => {
      // Search
      const matchesSearch =
        !searchQuery.trim() ||
        test.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (test.description && test.description.toLowerCase().includes(searchQuery.toLowerCase()));

      // Sub-category
      const matchesSubCategory =
        selectedSubCategory === "All Sub-categories" || test.subCategory === selectedSubCategory;

      // Difficulty
      const matchesDifficulty =
        selectedDifficulty === "All" || test.difficulty === selectedDifficulty;

      // Status
      const matchesStatus =
        selectedStatus === "All" || test.status === selectedStatus;

      return matchesSearch && matchesSubCategory && matchesDifficulty && matchesStatus;
    });

    // Sort
    if (selectedSort === "Newest") {
      result = [...result].reverse();
    } else if (selectedSort === "Questions Count") {
      result = [...result].sort((a, b) => b.questionsCount - a.questionsCount);
    }

    return result;
  }, [
    specialization.tests,
    searchQuery,
    selectedSubCategory,
    selectedDifficulty,
    selectedStatus,
    selectedSort,
  ]);

  const renderIcon = (iconName: string, className = "w-5 h-5") => {
    switch (iconName) {
      case "BookOpen":
        return <BookOpen className={className} />;
      case "Scale":
        return <Scale className={className} />;
      case "ShieldCheck":
        return <ShieldCheck className={className} />;
      case "Compass":
        return <Compass className={className} />;
      case "Building":
        return <Building className={className} />;
      case "MapPin":
        return <MapPin className={className} />;
      case "TrendingUp":
        return <TrendingUp className={className} />;
      case "Layers":
        return <Layers className={className} />;
      case "Home":
        return <Home className={className} />;
      case "Coins":
        return <Coins className={className} />;
      case "Hammer":
        return <Hammer className={className} />;
      case "Sparkles":
        return <Sparkles className={className} />;
      case "FileText":
        return <FileText className={className} />;
      case "Users":
        return <Users className={className} />;
      case "Briefcase":
        return <Briefcase className={className} />;
      case "FileCheck":
        return <FileCheck className={className} />;
      case "HelpCircle":
        return <HelpCircle className={className} />;
      default:
        return <BookOpen className={className} />;
    }
  };

  const getDifficultyBadge = (difficulty: TestItem["difficulty"]) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-emerald-50 text-emerald-700 border-emerald-200/80";
      case "Intermediate":
        return "bg-blue-50 text-blue-700 border-blue-200/80";
      case "Advanced":
        return "bg-purple-50 text-purple-700 border-purple-200/80";
      default:
        return "bg-slate-50 text-slate-700 border-slate-200/80";
    }
  };

  return (
    <div className={`w-full bg-[#F8FAFD] min-h-screen font-['Outfit'] select-text flex flex-col gap-6 ${isMobile ? "p-4 pb-16" : "p-6 xl:p-8"}`}>
      {/* Top Header Row with Back Button */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-[8px] bg-[#F0F4FF] border border-[#0B1D3A]/10 flex items-center justify-center text-[#C99A2E] shrink-0 shadow-2xs">
            {renderIcon(specialization.icon, "w-5 h-5")}
          </div>
          <div>
            <h1 className="text-lg xl:text-xl font-bold text-[#0B1D3A] tracking-tight leading-snug">
              {specialization.title}
            </h1>
            <p className="text-xs text-slate-500 font-medium mt-0.5 max-w-[600px] leading-relaxed">
              {specialization.subtitle}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-[#C99A2E] cursor-pointer transition-colors shrink-0 pt-1"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          <span>Back to Specializations</span>
        </button>
      </div>

      {/* Top 3 Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1: Tests */}
        <div className="bg-white rounded-[8px] border border-[#E2E8F0] p-5 shadow-[0_4px_16px_rgba(11,29,58,0.04)] hover:-translate-y-1 hover:border-[#C99A2E]/50 transition-all duration-300">
          <div className="text-2xl xl:text-3xl font-extrabold text-[#0B1D3A] leading-none">
            {specialization.testsCount}
          </div>
          <div className="text-xs font-bold text-[#0B1D3A] mt-1.5">
            Tests
          </div>
        </div>

        {/* Card 2: Questions */}
        <div className="bg-white rounded-[8px] border border-[#E2E8F0] p-5 shadow-[0_4px_16px_rgba(11,29,58,0.04)] hover:-translate-y-1 hover:border-[#C99A2E]/50 transition-all duration-300">
          <div className="text-2xl xl:text-3xl font-extrabold text-[#0B1D3A] leading-none">
            {specialization.questionsCount}
          </div>
          <div className="text-xs font-bold text-[#0B1D3A] mt-1.5">
            Questions
          </div>
        </div>

        {/* Card 3: Insight Callout */}
        <div className="bg-gradient-to-r from-[#F0F4FF] to-[#E6EEFF]/60 border border-[#0B1D3A]/[0.08] rounded-[8px] p-5 shadow-[0_4px_16px_rgba(11,29,58,0.04)] flex items-center">
          <p className="text-xs font-semibold text-[#0B1D3A] leading-snug">
            {specialization.insightText}
          </p>
        </div>
      </div>

      {/* Search Input Bar */}
      <div className="w-full relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="text"
          placeholder={`Search tests in ${specialization.title}...`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-white text-xs text-[#0B1D3A] placeholder:text-slate-400 pl-10 pr-4 py-2.5 rounded-[8px] border border-[#E2E8F0] shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#C99A2E]/20 focus:border-[#C99A2E]/50 transition-colors"
        />
      </div>

      {/* Filter & Sorting Controls Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {/* Dropdown 1: Sub-category */}
        <div className="relative">
          <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
            Sub-category
          </label>
          <button
            type="button"
            onClick={() => setOpenDropdown(openDropdown === "subCategory" ? null : "subCategory")}
            className="w-full bg-white border border-[#E2E8F0] hover:border-[#C99A2E]/50 rounded-[8px] px-3 py-2 text-xs font-medium text-[#0B1D3A] flex items-center justify-between shadow-2xs cursor-pointer transition-colors"
          >
            <span className="truncate">{selectedSubCategory}</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          </button>
          {openDropdown === "subCategory" && (
            <div className="absolute left-0 mt-1 w-full bg-white border border-[#E2E8F0] rounded-[8px] shadow-[0_14px_34px_rgba(11,29,58,0.15)] py-1 z-30 max-h-48 overflow-y-auto">
              {subCategoryOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => {
                    setSelectedSubCategory(opt);
                    setOpenDropdown(null);
                  }}
                  className={`w-full text-left px-3 py-1.5 text-xs truncate hover:bg-[#F0F4FF] cursor-pointer ${
                    selectedSubCategory === opt ? "font-bold text-[#C99A2E] bg-[#FEF9EE]" : "text-slate-700"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Dropdown 2: Difficulty */}
        <div className="relative">
          <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
            Difficulty
          </label>
          <button
            type="button"
            onClick={() => setOpenDropdown(openDropdown === "difficulty" ? null : "difficulty")}
            className="w-full bg-white border border-[#E2E8F0] hover:border-[#C99A2E]/50 rounded-[8px] px-3 py-2 text-xs font-medium text-[#0B1D3A] flex items-center justify-between shadow-2xs cursor-pointer transition-colors"
          >
            <span className="truncate">{selectedDifficulty}</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          </button>
          {openDropdown === "difficulty" && (
            <div className="absolute left-0 mt-1 w-full bg-white border border-[#E2E8F0] rounded-[8px] shadow-[0_14px_34px_rgba(11,29,58,0.15)] py-1 z-30">
              {difficultyFilterOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => {
                    setSelectedDifficulty(opt);
                    setOpenDropdown(null);
                  }}
                  className={`w-full text-left px-3 py-1.5 text-xs hover:bg-[#F0F4FF] cursor-pointer ${
                    selectedDifficulty === opt ? "font-bold text-[#C99A2E] bg-[#FEF9EE]" : "text-slate-700"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Dropdown 3: Status */}
        <div className="relative">
          <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
            Status
          </label>
          <button
            type="button"
            onClick={() => setOpenDropdown(openDropdown === "status" ? null : "status")}
            className="w-full bg-white border border-[#E2E8F0] hover:border-[#C99A2E]/50 rounded-[8px] px-3 py-2 text-xs font-medium text-[#0B1D3A] flex items-center justify-between shadow-2xs cursor-pointer transition-colors"
          >
            <span className="truncate">{selectedStatus}</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          </button>
          {openDropdown === "status" && (
            <div className="absolute left-0 mt-1 w-full bg-white border border-[#E2E8F0] rounded-[8px] shadow-[0_14px_34px_rgba(11,29,58,0.15)] py-1 z-30">
              {statusFilterOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => {
                    setSelectedStatus(opt);
                    setOpenDropdown(null);
                  }}
                  className={`w-full text-left px-3 py-1.5 text-xs hover:bg-[#F0F4FF] cursor-pointer ${
                    selectedStatus === opt ? "font-bold text-[#C99A2E] bg-[#FEF9EE]" : "text-slate-700"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Dropdown 4: Sort By */}
        <div className="relative">
          <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
            Sort By
          </label>
          <button
            type="button"
            onClick={() => setOpenDropdown(openDropdown === "sort" ? null : "sort")}
            className="w-full bg-white border border-[#E2E8F0] hover:border-[#C99A2E]/50 rounded-[8px] px-3 py-2 text-xs font-medium text-[#0B1D3A] flex items-center justify-between shadow-2xs cursor-pointer transition-colors"
          >
            <span className="truncate">{selectedSort}</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          </button>
          {openDropdown === "sort" && (
            <div className="absolute right-0 mt-1 w-full bg-white border border-[#E2E8F0] rounded-[8px] shadow-[0_14px_34px_rgba(11,29,58,0.15)] py-1 z-30">
              {sortFilterOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => {
                    setSelectedSort(opt);
                    setOpenDropdown(null);
                  }}
                  className={`w-full text-left px-3 py-1.5 text-xs hover:bg-[#F0F4FF] cursor-pointer ${
                    selectedSort === opt ? "font-bold text-[#C99A2E] bg-[#FEF9EE]" : "text-slate-700"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ADVERTISEMENT: Positioned alongside the action controls & tests in Knowledge Bank */}
      <AdBanner variant="leaderboard" />

      {/* Tests Content List / Empty State */}
      {filteredTests.length === 0 ? (
        <div className="bg-white rounded-[8px] border border-[#E2E8F0] p-12 xl:p-16 flex flex-col items-center justify-center text-center shadow-[0_4px_16px_rgba(11,29,58,0.04)]">
          <div className="w-12 h-12 rounded-[8px] bg-[#F0F4FF] border border-[#0B1D3A]/10 flex items-center justify-center text-[#C99A2E] mb-3 shadow-2xs">
            <ClipboardList className="w-6 h-6 text-[#C99A2E]" />
          </div>
          <h2 className="text-sm font-bold text-[#0B1D3A]">
            Tests coming soon
          </h2>
          <p className="text-xs text-slate-500 mt-1 max-w-[420px] leading-relaxed font-normal">
            Assessments for {specialization.title} will appear here when they are ready.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTests.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-[8px] border border-[#E2E8F0] p-5 shadow-[0_4px_16px_rgba(11,29,58,0.04)] hover:shadow-[0_18px_40px_rgba(11,29,58,0.12)] hover:border-[#C99A2E]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-bold tracking-wider text-[#C99A2E] uppercase">
                    {test.subCategory}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-[4px] border ${getDifficultyBadge(test.difficulty)}`}>
                    {test.difficulty}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-[#0B1D3A] leading-snug">
                  {test.title}
                </h3>
                {test.description && (
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed font-normal">
                    {test.description}
                  </p>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-[#E2E8F0] flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1">
                    <HelpCircle className="w-3.5 h-3.5 text-[#C99A2E]" />
                    {test.questionsCount} Questions
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {test.durationMinutes} mins
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveQuizTest(test)}
                  className="flex items-center gap-1.5 bg-gradient-to-r from-[#0B1D3A] to-[#1A3463] hover:from-[#102548] hover:to-[#22437C] text-white text-xs font-semibold px-3.5 py-1.5 rounded-[8px] shadow-[0_4px_12px_rgba(11,29,58,0.2)] hover:shadow-[0_6px_16px_rgba(11,29,58,0.3)] hover:-translate-y-0.5 cursor-pointer transition-all"
                >
                  {test.status === "Completed" ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Review</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 text-[#E2C068] fill-[#E2C068]" />
                      <span>{test.status === "In Progress" ? "Resume" : "Start Test"}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination Footer */}
      <div className="flex items-center justify-between pt-2">
        <span className="text-xs text-slate-400 font-medium">
          Showing {filteredTests.length} of {filteredTests.length} tests
        </span>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            disabled
            className="w-7 h-7 rounded-full border border-[#E2E8F0] flex items-center justify-center text-slate-300 cursor-not-allowed"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            className="w-7 h-7 rounded-full bg-gradient-to-r from-[#0B1D3A] to-[#1A3463] text-white text-xs font-bold flex items-center justify-center shadow-xs"
          >
            1
          </button>
          <button
            type="button"
            disabled
            className="w-7 h-7 rounded-full border border-[#E2E8F0] flex items-center justify-center text-slate-300 cursor-not-allowed"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Quiz Modal & Quiz End Screen Integration */}
      <QuizModal
        isOpen={!!activeQuizTest}
        onClose={() => setActiveQuizTest(null)}
        test={activeQuizTest}
        specializationTitle={specialization.title}
      />
    </div>
  );
}
