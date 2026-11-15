import React, { useState, useMemo } from "react";
import {
  Sparkles,
  ChevronDown,
  ChevronRight,
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
  FileText,
  Users,
  Briefcase,
  FileCheck,
  HelpCircle,
} from "lucide-react";
import {
  knowledgeBankStats,
  specializationsData,
  specializationFilterOptions,
  type SpecializationFilterOption,
  type Specialization,
} from "./data";
import SpecializationDetail from "./SpecializationDetail";
import AdBanner from "../components/AdBanner";
import { dispatchOpenCompanyProfile } from "../company-profile/useCompanyProfile";

export interface KnowledgeBankMobileProps {
  hideSidebar?: boolean;
  activeSubSection?: string;
}

export default function KnowledgeBankMobile({
  activeSubSection,
}: KnowledgeBankMobileProps = {}) {
  const [selectedSpecialization, setSelectedSpecialization] = useState<Specialization | null>(null);
  const derivedFilter = useMemo<SpecializationFilterOption>(() => {
    if (activeSubSection === "tests") return "With tests available";
    return "All specializations";
  }, [activeSubSection]);

  const [selectedFilter, setSelectedFilter] = useState<SpecializationFilterOption | null>(null);
  const activeFilter = selectedFilter ?? derivedFilter;
  const setActiveFilter = (filter: SpecializationFilterOption) => setSelectedFilter(filter);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredSpecializations = useMemo(() => {
    return specializationsData.filter((item: Specialization) => {
      if (activeFilter === "All specializations") return true;
      if (activeFilter === "With tests available") return item.testsCount > 0;
      return item.category === activeFilter;
    });
  }, [activeFilter]);

  const renderIcon = (iconName: string, className = "w-3.5 h-3.5") => {
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

  const getColorClasses = (color: Specialization["color"]) => {
    switch (color) {
      case "indigo":
        return "bg-indigo-50 text-indigo-600";
      case "amber":
        return "bg-amber-50 text-amber-600";
      case "sky":
        return "bg-sky-50 text-sky-600";
      case "emerald":
        return "bg-emerald-50 text-emerald-600";
      case "purple":
        return "bg-purple-50 text-purple-600";
      case "rose":
        return "bg-rose-50 text-rose-600";
      case "teal":
        return "bg-teal-50 text-teal-600";
      case "violet":
        return "bg-violet-50 text-violet-600";
      case "blue":
        return "bg-blue-50 text-blue-600";
      case "orange":
        return "bg-orange-50 text-orange-600";
      case "pink":
        return "bg-pink-50 text-pink-600";
      case "slate":
        return "bg-slate-100 text-slate-600";
      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  if (selectedSpecialization) {
    return (
      <SpecializationDetail
        specialization={selectedSpecialization}
        onBack={() => setSelectedSpecialization(null)}
        isMobile={true}
      />
    );
  }

  return (
    <div className="w-full bg-[#F8FAFD] min-h-screen font-['Outfit'] select-text p-4 pb-12 flex flex-col gap-4">
      {/* Top Header & Badge */}
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="text-lg font-bold text-[#0B1D3A]">Knowledge Bank</h1>
          <p className="text-xs text-slate-500 font-medium">
            Test your real estate knowledge, topic by topic.
          </p>
        </div>

        {/* B1 - HEADER PROMO SWAP: White card with gray border */}
        <div className="bg-white border border-[#E2E8F0] rounded-[8px] p-2.5 flex items-center justify-between gap-2 shadow-2xs">
          <div className="flex items-center gap-2">
            <span className="text-[9.5px] font-extrabold uppercase tracking-widest text-[#64748B] px-1.5 py-0.5 bg-[#F1F5F9] rounded-[3px] border border-slate-200/90 flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 text-[#C99A2E]" />
              <span>SPONSORED</span>
            </span>
            <div>
              <div className="text-xs font-bold text-[#0B1D3A] leading-tight">
                Build your knowledge.
              </div>
              <div className="text-[10px] text-slate-500 font-medium">
                Grow your career.
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => dispatchOpenCompanyProfile("Knowledge Bank Partner Program")}
            className="px-2.5 py-1 rounded-[6px] bg-[#0B1D3A] text-white text-[10px] font-bold shrink-0 cursor-pointer"
          >
            View Company
          </button>
        </div>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-3 gap-2">
        {knowledgeBankStats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white rounded-[8px] border border-[#E2E8F0] p-3 flex flex-col justify-between shadow-[0_4px_16px_rgba(11,29,58,0.04)]"
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-extrabold text-[#0B1D3A]">
                {stat.number}
              </span>
              <div className="w-6 h-6 rounded-full bg-[#F0F4FF] border border-[#0B1D3A]/10 flex items-center justify-center text-[#C99A2E]">
                {renderIcon(stat.icon, "w-3 h-3 text-[#C99A2E]")}
              </div>
            </div>
            <div className="mt-2">
              <div className="text-[11px] font-bold text-[#0B1D3A] leading-tight">
                {stat.label}
              </div>
              <div className="text-[9px] text-slate-400 font-medium truncate mt-0.5">
                {stat.subtext}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sponsored Advertisement */}
      <AdBanner variant="inline" label="SPONSORED" height={64} />

      {/* Filter Row */}
      <div className="flex items-center justify-between mt-1">
        <div>
          <h2 className="text-xs font-bold text-[#0B1D3A]">
            Choose a Specialization
          </h2>
          <p className="text-[10px] text-slate-400 font-medium">
            Select a topic to start learning.
          </p>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="bg-white border border-[#E2E8F0] rounded-[8px] px-2.5 py-1 text-[11px] font-semibold text-[#0B1D3A] flex items-center gap-1.5 shadow-2xs"
          >
            <span className="truncate max-w-[120px]">{activeFilter}</span>
            <ChevronDown className="w-3 h-3 text-slate-500" />
          </button>

          {isFilterOpen && (
            <div className="absolute right-0 mt-1 w-44 bg-white border border-[#E2E8F0] rounded-[8px] shadow-[0_14px_34px_rgba(11,29,58,0.15)] py-1 z-30">
              {specializationFilterOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => {
                    setActiveFilter(opt);
                    setIsFilterOpen(false);
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
      </div>

      {/* Specializations Cards Stack with In-Grid Sponsored Card B2 */}
      <div className="flex flex-col gap-3">
        {filteredSpecializations.map((spec, index) => (
          <React.Fragment key={spec.id}>
            <div
              onClick={() => setSelectedSpecialization(spec)}
              className="bg-white rounded-[8px] border border-[#E2E8F0] p-4 flex flex-col justify-between shadow-[0_4px_16px_rgba(11,29,58,0.04)] cursor-pointer hover:border-[#C99A2E]/50 transition-colors"
            >
              <div>
                <div
                  className={`w-7 h-7 rounded-[6px] flex items-center justify-center mb-2.5 ${getColorClasses(
                    spec.color
                  )}`}
                >
                  {renderIcon(spec.icon, "w-3.5 h-3.5")}
                </div>

                <h3 className="text-xs font-bold text-[#0B1D3A] leading-snug">
                  {spec.title}
                </h3>
                <p className="text-[11px] text-slate-500 font-normal mt-0.5 line-clamp-2 leading-relaxed">
                  {spec.description}
                </p>

                {/* B3 - DEMAND CHIP: White chip with gray border */}
                <div className="mt-2">
                  <span className="inline-flex items-center gap-1 bg-white border border-[#E2E8F0] text-slate-700 text-[9.5px] font-bold px-2 py-0.5 rounded-[4px] shadow-2xs">
                    <Sparkles className="w-2 h-2 text-[#C99A2E]" />
                    <span>Asked for in {index % 2 === 0 ? 14 : 8} roles</span>
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#E2E8F0]">
                {spec.testsCount > 0 ? (
                  <span className="text-[11px] font-bold text-[#C99A2E]">
                    {spec.testsCount} Tests
                  </span>
                ) : (
                  <span className="text-[11px] font-medium text-slate-400">
                    Tests coming soon
                  </span>
                )}
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </div>
            </div>

            {/* Position B2 - IN-GRID EMPLOYER CARD for mobile: White card with gray border */}
            {index === 1 && (
              <AdBanner
                variant="card"
                label="SPONSORED"
                primaryCtaText="Apply Now"
                secondaryCtaText="View Company"
                onJoin={() => dispatchOpenCompanyProfile("Knowledge Bank Partner")}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
