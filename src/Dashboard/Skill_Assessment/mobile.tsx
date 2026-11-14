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
  Menu,
  Bell,
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
import trimmedLogo from "../../Components/FARE_Logo/SVG/Primary Logo Trimmed.svg";
import Sidebar from "../sidebar";
import AdBanner from "../components/AdBanner";

export interface SkillAssessmentMobileProps {
  hideSidebar?: boolean;
  activeSubSection?: string;
}

export default function SkillAssessmentMobile({
  hideSidebar = false,
  activeSubSection,
}: SkillAssessmentMobileProps = {}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
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
    const className = "w-3.5 h-3.5 text-slate-500";
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
    const className = "w-3.5 h-3.5";
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
    return (
      <SpecializationDetail
        specialization={selectedSpecialization}
        onBack={() => setSelectedSpecialization(null)}
      />
    );
  }

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
            <span className="font-bold text-sm text-slate-900">Skill Assessment</span>
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
          activeItem="skill-assessment"
        />
      )}

      {/* Main Content */}
      <div className="p-4 flex flex-col gap-4">
        {/* Title & Promo Box */}
        <div className="flex flex-col gap-2.5">
          <div className="bg-white border border-[#E2E8F0] rounded-[8px] p-2.5 flex items-center justify-between gap-2 shadow-2xs">
            <div className="flex items-center gap-2">
              <span className="text-[9.5px] font-extrabold uppercase tracking-widest text-[#64748B] px-1.5 py-0.5 bg-[#F1F5F9] rounded-[3px] border border-slate-200/90 flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-[#C99A2E]" />
                <span>SPONSORED</span>
              </span>
              <div>
                <div className="text-xs font-bold text-slate-900 leading-tight">
                  {skillAssessmentHeader.promoTitle}
                </div>
                <div className="text-[10px] text-slate-500 font-medium">
                  {skillAssessmentHeader.promoSubtitle}
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => alert("Assessment inquiry submitted")}
              className="px-2.5 py-1 rounded-[6px] bg-[#0B1D3A] text-white text-[10px] font-bold shrink-0 cursor-pointer"
            >
              Join Now
            </button>
          </div>

          <div>
            <h1 className="text-xl font-extrabold text-[#0A1833] tracking-tight">
              {skillAssessmentHeader.title}
            </h1>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              {isDiagnosticOnly
                ? "Showing topic diagnostic tests and focused knowledge assessments."
                : skillAssessmentHeader.subtitle}
            </p>
          </div>
        </div>

        {/* 3 Stat Cards Row */}
        <div className="grid grid-cols-3 gap-2">
          {skillAssessmentStats.map((stat: SkillStat) => (
            <div
              key={stat.id}
              className="bg-white rounded-xl border border-slate-200/90 p-3 flex flex-col justify-between shadow-2xs"
            >
              <div className="flex items-center justify-between">
                <span className="text-xl font-extrabold text-slate-900 leading-none">
                  {stat.number}
                </span>
                {renderStatIcon(stat.icon)}
              </div>
              <div className="text-[11px] font-bold text-slate-800 mt-2 truncate">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Specialization Filter Dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="w-full flex items-center justify-between bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-800 shadow-2xs"
          >
            <span className="truncate">{activeFilter}</span>
            <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
          </button>

          {isFilterOpen && (
            <div className="absolute left-0 right-0 mt-1 bg-white border border-slate-200 rounded-xl shadow-xl py-1 z-30 max-h-60 overflow-y-auto">
              {skillFilterOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => {
                    setActiveFilter(opt);
                    setIsFilterOpen(false);
                  }}
                  className={`w-full text-left px-3.5 py-2 text-xs font-medium ${
                    activeFilter === opt
                      ? "bg-[#1864E8] text-white font-semibold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Stack of Cards with In-Grid Sponsored Card */}
        <div className="flex flex-col gap-3">
          {filteredSpecializations.map((spec: SkillSpecialization, index: number) => (
            <React.Fragment key={spec.id}>
              <div
                onClick={() => setSelectedSpecialization(spec)}
                className="bg-white rounded-xl border border-slate-200/90 p-4 flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center mb-2.5 ${getColorClasses(
                      spec.color
                    )}`}
                  >
                    {renderSpecializationIcon(spec.icon)}
                  </div>

                  <h3 className="text-xs font-bold text-slate-900 leading-snug">
                    {spec.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 font-normal mt-0.5 line-clamp-2">
                    {spec.description}
                  </p>

                  {/* Demand Chip: White chip with gray border */}
                  <div className="mt-2">
                    <span className="inline-flex items-center gap-1 bg-white border border-[#E2E8F0] text-slate-700 text-[9.5px] font-bold px-2 py-0.5 rounded-[4px] shadow-2xs">
                      <Sparkles className="w-2 h-2 text-[#C99A2E]" />
                      <span>Asked for in {index % 2 === 0 ? 12 : 9} roles</span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-100 text-[11px] text-slate-400 font-medium">
                  <span>Tests coming soon</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                </div>
              </div>

              {/* In-Grid Sponsored Role Card */}
              {index === 0 && (
                <AdBanner
                  variant="card"
                  label="SPONSORED"
                  primaryCtaText="Apply Now"
                  secondaryCtaText="Join Now"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
