import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Search,
  ClipboardList,
  BookOpen,
  Briefcase,
  Users,
} from "lucide-react";
import { type SkillSpecialization } from "./data";

export interface SpecializationDetailProps {
  specialization: SkillSpecialization;
  onBack: () => void;
}

export default function SpecializationDetail({
  specialization,
  onBack,
}: SpecializationDetailProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [subCategory, setSubCategory] = useState("All Sub-categories");
  const [difficulty, setDifficulty] = useState("All");
  const [status, setStatus] = useState("All");
  const [sortBy, setSortBy] = useState("Recommended");

  const renderSpecializationIcon = (icon: string) => {
    const className = "w-5 h-5";
    switch (icon) {
      case "Briefcase":
        return <Briefcase className={className} />;
      case "Users":
        return <Users className={className} />;
      case "BookOpen":
      default:
        return <BookOpen className={className} />;
    }
  };

  const getColorClasses = (color: SkillSpecialization["color"]) => {
    switch (color) {
      case "slate":
        return "bg-slate-100 text-slate-700";
      case "indigo":
        return "bg-indigo-50 text-indigo-600";
      case "sky":
        return "bg-sky-50 text-sky-600";
      case "purple":
        return "bg-purple-50 text-purple-600";
      case "rose":
        return "bg-rose-50 text-rose-600";
      case "teal":
        return "bg-teal-50 text-teal-600";
      case "amber":
        return "bg-amber-50 text-amber-600";
      case "blue":
      default:
        return "bg-blue-50 text-blue-600";
    }
  };

  return (
    <div className="w-full bg-[#F8FAFD] min-h-screen font-['Outfit'] select-text p-6 xl:p-8 flex flex-col gap-6 animate-in fade-in duration-200">
      {/* Top Header Row with Title & Back Button */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className={`w-11 h-11 rounded-[8px] flex items-center justify-center shadow-2xs shrink-0 ${getColorClasses(
              specialization.color
            )}`}
          >
            {renderSpecializationIcon(specialization.icon)}
          </div>
          <div>
            <h1 className="text-xl xl:text-2xl font-black text-[#0B1D3A] tracking-tight">
              {specialization.title}
            </h1>
            <p className="text-xs text-[#64748B] font-medium mt-0.5">
              Build confidence in this topic with focused knowledge tests.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-bold text-[#0B1D3A] hover:text-[#C99A2E] bg-white hover:bg-[#F0F4FF] border border-[#E2E8F0] rounded-[8px] px-3.5 py-2 shadow-2xs transition-colors cursor-pointer shrink-0"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          <span>Back to Specializations</span>
        </button>
      </div>

      {/* Stats & Callout Row */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Stat 1: Tests */}
        <div className="md:col-span-3 bg-white rounded-[8px] border border-[#E2E8F0] p-5 shadow-[0_4px_16px_rgba(11,29,58,0.04)] hover:-translate-y-0.5 hover:border-[#C99A2E]/50 transition-all flex flex-col justify-between">
          <div className="text-3xl font-black text-[#0B1D3A]">
            {specialization.testsCount}
          </div>
          <div className="text-xs font-bold text-[#64748B] mt-2">
            Tests
          </div>
        </div>

        {/* Stat 2: Questions */}
        <div className="md:col-span-3 bg-white rounded-[8px] border border-[#E2E8F0] p-5 shadow-[0_4px_16px_rgba(11,29,58,0.04)] hover:-translate-y-0.5 hover:border-[#C99A2E]/50 transition-all flex flex-col justify-between">
          <div className="text-3xl font-black text-[#0B1D3A]">
            {specialization.questionsCount}
          </div>
          <div className="text-xs font-bold text-[#64748B] mt-2">
            Questions
          </div>
        </div>

        {/* Callout Advice Card */}
        <div className="md:col-span-6 bg-gradient-to-br from-[#F0F4FF] to-[#E6EEFF]/60 rounded-[8px] border border-[#0B1D3A]/[0.08] p-5 shadow-[0_4px_16px_rgba(11,29,58,0.03)] flex items-center">
          <p className="text-xs sm:text-sm font-semibold text-[#0B1D3A] leading-relaxed">
            {specialization.advice}
          </p>
        </div>
      </div>

      {/* Search Input */}
      <div className="relative w-full">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          type="text"
          placeholder={`Search tests in ${specialization.title}...`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-white border border-[#E2E8F0] hover:border-[#C99A2E]/50 focus:border-[#C99A2E]/60 focus:ring-2 focus:ring-[#C99A2E]/20 rounded-[8px] pl-10 pr-4 py-2.5 text-xs text-[#0B1D3A] placeholder:text-slate-400 focus:outline-none transition-all shadow-2xs"
        />
      </div>

      {/* Filter Row: Sub-category, Difficulty, Status, Sort By */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Sub-category */}
        <div>
          <label className="text-[11px] font-bold text-[#64748B] block mb-1">
            Sub-category
          </label>
          <div className="relative">
            <select
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              className="w-full bg-white border border-[#E2E8F0] hover:border-[#C99A2E]/50 rounded-[8px] px-3 py-2 text-xs font-semibold text-[#0B1D3A] focus:outline-none appearance-none cursor-pointer pr-8 shadow-2xs transition-colors"
            >
              <option value="All Sub-categories">All Sub-categories</option>
              <option value="Foundations">Foundations</option>
              <option value="Client Objections">Client Objections</option>
              <option value="Advanced Closing">Advanced Closing</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-[#C99A2E] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Difficulty */}
        <div>
          <label className="text-[11px] font-bold text-[#64748B] block mb-1">
            Difficulty
          </label>
          <div className="relative">
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full bg-white border border-[#E2E8F0] hover:border-[#C99A2E]/50 rounded-[8px] px-3 py-2 text-xs font-semibold text-[#0B1D3A] focus:outline-none appearance-none cursor-pointer pr-8 shadow-2xs transition-colors"
            >
              <option value="All">All</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-[#C99A2E] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Status */}
        <div>
          <label className="text-[11px] font-bold text-[#64748B] block mb-1">
            Status
          </label>
          <div className="relative">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full bg-white border border-[#E2E8F0] hover:border-[#C99A2E]/50 rounded-[8px] px-3 py-2 text-xs font-semibold text-[#0B1D3A] focus:outline-none appearance-none cursor-pointer pr-8 shadow-2xs transition-colors"
            >
              <option value="All">All</option>
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-[#C99A2E] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Sort By */}
        <div>
          <label className="text-[11px] font-bold text-[#64748B] block mb-1">
            Sort By
          </label>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full bg-white border border-[#E2E8F0] hover:border-[#C99A2E]/50 rounded-[8px] px-3 py-2 text-xs font-semibold text-[#0B1D3A] focus:outline-none appearance-none cursor-pointer pr-8 shadow-2xs transition-colors"
            >
              <option value="Recommended">Recommended</option>
              <option value="Most Recent">Most Recent</option>
              <option value="Highest Rated">Highest Rated</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-[#C99A2E] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Main Empty State Content */}
      <div className="bg-white rounded-[8px] border border-[#E2E8F0] shadow-[0_4px_16px_rgba(11,29,58,0.04)] p-12 sm:p-16 flex flex-col items-center justify-center text-center gap-3">
        <div className="w-14 h-14 rounded-full bg-[#F0F4FF] border border-[#0B1D3A]/[0.08] flex items-center justify-center text-[#C99A2E] mb-1">
          <ClipboardList className="w-6 h-6" />
        </div>
        <h2 className="text-base font-extrabold text-[#0B1D3A] mt-1">
          Tests coming soon
        </h2>
        <p className="text-xs text-[#64748B] max-w-md font-medium leading-relaxed">
          Assessments for {specialization.title} will appear here when they are ready.
        </p>
      </div>

      {/* Pagination Footer */}
      <div className="flex items-center justify-between text-xs text-[#64748B] font-medium pt-2">
        <span>Showing 0 of 0 tests</span>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            disabled
            className="w-7 h-7 rounded-[6px] border border-[#E2E8F0] flex items-center justify-center text-slate-400 cursor-not-allowed bg-white"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <span
            className="w-7 h-7 rounded-[6px] text-white font-bold flex items-center justify-center text-xs shadow-xs"
            style={{ background: "linear-gradient(135deg, #0B1D3A 0%, #1A3463 100%)" }}
          >
            1
          </span>
          <button
            type="button"
            disabled
            className="w-7 h-7 rounded-[6px] border border-[#E2E8F0] flex items-center justify-center text-slate-400 cursor-not-allowed bg-white"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
