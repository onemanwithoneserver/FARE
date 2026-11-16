import React, { useState, useMemo } from "react";
import {
  Sparkles,
  ChevronDown,
  ChevronRight,
  BookOpen,
  Briefcase,
  Users,
  ClipboardList,
  HelpCircle,
} from "lucide-react";
import {
  skillAssessmentHeader,
  skillAssessmentStats,
  skillSpecializationsData,
  skillFilterOptions,
  type SkillFilterOption,
  type SkillSpecialization,
  type SkillStat,
} from "./data";
import SpecializationDetail from "./SpecializationDetail";
import Sidebar from "../sidebar";
import AdBanner from "../components/AdBanner";
import { dispatchOpenCompanyProfile } from "../company-profile/useCompanyProfile";

export interface SkillAssessmentDesktopProps {
  hideSidebar?: boolean;
  activeSubSection?: string;
}

export default function SkillAssessmentDesktop({
  hideSidebar = false,
  activeSubSection,
}: SkillAssessmentDesktopProps) {
  const [selectedSpecialization, setSelectedSpecialization] =
    useState<SkillSpecialization | null>(null);
  const [activeFilter, setActiveFilter] =
    useState<SkillFilterOption>("All specializations");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const isDiagnosticOnly = activeSubSection === "diagnostic-tests";

  const filteredSpecializations = useMemo(() => {
    return skillSpecializationsData.filter((item: SkillSpecialization) => {
      if (activeFilter === "All specializations") return true;
      return item.category === activeFilter;
    });
  }, [activeFilter]);

  const renderStatIcon = (icon: string) => {
    const className = "w-4 h-4 text-slate-500";
    switch (icon) {
      case "BookOpen":
        return <BookOpen className={className} />;
      case "ClipboardList":
        return <ClipboardList className={className} />;
      case "HelpCircle":
        return <HelpCircle className={className} />;
      default:
        return <BookOpen className={className} />;
    }
  };

  const renderSpecializationIcon = (icon: string) => {
    const className = "w-4 h-4";
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

  if (selectedSpecialization) {
    const detailContent = (
      <SpecializationDetail
        specialization={selectedSpecialization}
        onBack={() => setSelectedSpecialization(null)}
      />
    );

    if (hideSidebar) {
      return detailContent;
    }

    return (
      <div className="h-full min-h-screen lg:h-screen w-full bg-[#F8FAFD] flex overflow-hidden font-['Outfit'] select-text">
        <Sidebar activeItem="skill-assessment" className="h-full overflow-y-auto shrink-0 scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden" />
        <div className="flex-1 min-w-0 h-full overflow-y-auto scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">{detailContent}</div>
      </div>
    );
  }

  const content = (
    <div className="w-full bg-[#F8FAFD] min-h-screen font-['Outfit'] select-text p-6 xl:p-8 flex flex-col gap-6">
      {/* Top Header Row with Title & "Build your skills" Box */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-xl xl:text-2xl font-black text-[#0B1D3A] tracking-tight">
            {skillAssessmentHeader.title}
          </h1>
          <p className="text-xs text-[#64748B] mt-1 font-medium">
            {isDiagnosticOnly
              ? "Showing topic diagnostic tests and focused knowledge assessments."
              : skillAssessmentHeader.subtitle}
          </p>
        </div>

        {/* Top-Right Warm Promo Card */}
        <button
          type="button"
          onClick={() => dispatchOpenCompanyProfile("Skill Assessment Partner Program")}
          className="bg-[#FFFBEB] hover:bg-[#FEF6D8] border border-[#F5E0A3] rounded-[10px] px-4 py-2.5 flex items-center gap-2.5 shadow-2xs shrink-0 cursor-pointer transition-colors text-left"
        >
          <Sparkles className="w-4 h-4 text-[#C99A2E] shrink-0" />
          <div>
            <div className="text-xs font-extrabold text-[#0B1D3A] leading-tight">
              {skillAssessmentHeader.promoTitle}
            </div>
            <div className="text-[11px] text-[#B4821E] font-medium mt-0.5">
              {skillAssessmentHeader.promoSubtitle}
            </div>
          </div>
        </button>
      </div>

      {/* Top 3 Stat Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {skillAssessmentStats.map((stat: SkillStat) => (
          <div
            key={stat.id}
            className="bg-white rounded-[8px] border border-[#E2E8F0] p-5 flex items-center justify-between shadow-[0_4px_16px_rgba(11,29,58,0.04)] hover:-translate-y-1 hover:border-[#C99A2E]/50 hover:shadow-[0_18px_40px_rgba(11,29,58,0.12)] transition-all duration-300 group"
          >
            <div>
              <div className="text-2xl xl:text-3xl font-black text-[#0B1D3A] leading-none">
                {stat.number}
              </div>
              <div className="text-xs font-bold text-[#0B1D3A] mt-2">
                {stat.label}
              </div>
              <div className="text-[11px] text-[#64748B] font-medium mt-0.5">
                {stat.subtext}
              </div>
            </div>

            <div className="w-9 h-9 rounded-[6px] bg-[#F0F4FF] border border-[#0B1D3A]/[0.08] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-[#C99A2E]">
              {renderStatIcon(stat.icon)}
            </div>
          </div>
        ))}
      </div>

      {/* Format J - Leaderboard Banner */}
      <AdBanner
        variant="leaderboard"
        brand="kalpavana"
        title="Kalpavana Group is hiring 15 plot sales executives"
        tagline="Top Skill Assessment scorers get a direct interview call"
        primaryCtaText="Apply now"
      />

      {/* Specialization Section Header & Filter Dropdown */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pt-2">
        <div>
          <h2 className="text-sm font-extrabold text-[#0B1D3A]">
            Choose a Specialization
          </h2>
          <p className="text-xs text-[#64748B] mt-0.5">
            Select a topic to view tests and start learning.
          </p>
        </div>

        {/* Filter Dropdown */}
        <div className="relative self-start sm:self-auto">
          <label className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] block mb-1">
            Filter
          </label>
          <button
            type="button"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center justify-between gap-3 bg-white border border-[#E2E8F0] hover:border-[#C99A2E]/60 text-[#0B1D3A] text-xs font-bold px-3.5 py-2 rounded-[8px] shadow-2xs cursor-pointer min-w-[200px] transition-colors"
          >
            <span className="truncate">{activeFilter}</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#C99A2E] shrink-0" />
          </button>

          {/* Opened Filter Menu */}
          {isFilterOpen && (
            <div className="absolute right-0 mt-1 w-60 bg-white border border-[#E2E8F0] rounded-[8px] shadow-[0_14px_34px_rgba(11,29,58,0.18)] py-1 z-30 max-h-80 overflow-y-auto animate-in fade-in duration-150">
              {skillFilterOptions.map((opt) => {
                const isSelected = activeFilter === opt;
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      setActiveFilter(opt);
                      setIsFilterOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-2.5 text-xs font-semibold flex items-center justify-between cursor-pointer transition-colors ${
                      isSelected
                        ? "bg-[#0B1D3A] text-[#D5AA45] font-bold"
                        : "text-[#475569] hover:bg-[#F0F4FF] hover:text-[#0B1D3A]"
                    }`}
                  >
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* 2-Column Grid of Specialization Cards with In-Grid Horizontal Logo Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredSpecializations.map((spec: SkillSpecialization, index: number) => (
          <React.Fragment key={spec.id}>
            <div
              onClick={() => setSelectedSpecialization(spec)}
              className="bg-white rounded-[8px] border border-[#E2E8F0] p-5 flex flex-col justify-between shadow-[0_4px_16px_rgba(11,29,58,0.04)] hover:-translate-y-1.5 hover:border-[#C99A2E]/50 hover:shadow-[0_18px_40px_rgba(11,29,58,0.14)] transition-all duration-300 cursor-pointer group min-h-[145px]"
            >
              <div>
                <div
                  className={`w-8 h-8 rounded-[6px] flex items-center justify-center mb-3 transition-transform group-hover:scale-110 ${getColorClasses(
                    spec.color
                  )}`}
                >
                  {renderSpecializationIcon(spec.icon)}
                </div>

                <h3 className="text-sm font-bold text-[#0B1D3A] group-hover:text-[#C99A2E] transition-colors">
                  {spec.title}
                </h3>
                <p className="text-xs text-[#64748B] font-normal mt-0.5 line-clamp-2">
                  {spec.description}
                </p>
              </div>

              <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#E2E8F0]">
                <span className="text-xs font-semibold text-[#64748B]">
                  Tests coming soon
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#C99A2E] group-hover:translate-x-1 transition-all" />
              </div>
            </div>

            {/* Format K - In-Grid Horizontal Logo Ad */}
            {index === 1 && (
              <AdBanner
                variant="in-grid-horizontal"
                brand="skyline"
                title="Score 80%+ in Legal & Approvals for a priority interview"
                onJoin={() => dispatchOpenCompanyProfile("Skyline Plotworks")}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  if (hideSidebar) {
    return content;
  }

  return (
    <div className="h-full min-h-screen lg:h-screen w-full bg-[#F8FAFD] flex overflow-hidden font-['Outfit'] select-text">
      <Sidebar activeItem="skill-assessment" className="h-full overflow-y-auto shrink-0 scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden" />
      <div className="flex-1 min-w-0 h-full overflow-y-auto scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">{content}</div>
    </div>
  );
}
