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
import Sidebar from "../sidebar";
import AdBanner from "../components/AdBanner";
import { dispatchOpenCompanyProfile } from "../company-profile/useCompanyProfile";

export interface KnowledgeBankDesktopProps {
  hideSidebar?: boolean;
  activeSubSection?: string;
}

export default function KnowledgeBankDesktop({
  hideSidebar = false,
  activeSubSection,
}: KnowledgeBankDesktopProps) {
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

  const renderIcon = (iconName: string, className = "w-4 h-4") => {
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
      />
    );
  }

  const content = (
    <div className="w-full bg-[#F8FAFD] min-h-screen font-['Outfit'] select-text p-6 xl:p-8">
      {/* Top Header Row with Title & "Build your knowledge" Box */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-xl xl:text-2xl font-bold text-[#0B1D3A] tracking-tight">
            Knowledge Bank
          </h1>
          <p className="text-xs text-slate-500 mt-1 font-medium">
            Test your real estate knowledge, topic by topic.
          </p>
        </div>

        {/* Position B1 - HEADER PROMO SWAP: White card with gray border */}
        <div className="bg-white border border-[#E2E8F0] rounded-[8px] px-3.5 py-2 flex items-center gap-3 shadow-2xs">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#64748B] px-2 py-0.5 bg-[#F1F5F9] rounded-[4px] border border-slate-200/90 flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5 text-[#C99A2E]" />
            <span>SPONSORED</span>
          </span>
          <div>
            <div className="text-xs font-bold text-[#0B1D3A] leading-tight">
              Build your knowledge.
            </div>
            <div className="text-[11px] text-slate-500 font-medium">
              Grow your career.
            </div>
          </div>
          <button
            type="button"
            onClick={() => dispatchOpenCompanyProfile("Knowledge Bank Partner Program")}
            className="ml-1 px-3 py-1 rounded-[6px] bg-[#0B1D3A] hover:bg-[#1A3463] text-white text-[11px] font-bold cursor-pointer transition-colors shadow-2xs"
          >
            View Company
          </button>
        </div>
      </div>

      {/* Top 3 Stat Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {knowledgeBankStats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white rounded-[8px] border border-[#E2E8F0] p-5 flex items-center justify-between shadow-[0_4px_16px_rgba(11,29,58,0.04)] hover:shadow-[0_18px_40px_rgba(11,29,58,0.12)] hover:border-[#C99A2E]/50 hover:-translate-y-1 transition-all duration-300"
          >
            <div>
              <div className="text-2xl xl:text-3xl font-extrabold text-[#0B1D3A] leading-none">
                {stat.number}
              </div>
              <div className="text-xs font-bold text-[#0B1D3A] mt-1.5">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                {stat.subtext}
              </div>
            </div>
            <div className="w-10 h-10 rounded-[8px] bg-[#F0F4FF] border border-[#0B1D3A]/10 flex items-center justify-center text-[#C99A2E] shrink-0">
              {renderIcon(stat.icon, "w-4 h-4 text-[#C99A2E]")}
            </div>
          </div>
        ))}
      </div>

      {/* Sponsored Advertisement Banner */}
      <div className="mt-6">
        <AdBanner variant="leaderboard" label="SPONSORED" height={96} />
      </div>

      {/* Choose a Specialization Header & Filter Dropdown */}
      <div className="flex items-end justify-between mt-8 mb-4">
        <div>
          <h2 className="text-sm font-bold text-[#0B1D3A]">
            Choose a Specialization
          </h2>
          <p className="text-xs text-slate-400 font-medium mt-0.5">
            Select a topic to view tests and start learning.
          </p>
        </div>

        <div className="relative">
          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider text-right block mb-1">
            Filter
          </span>
          <button
            type="button"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="bg-white border border-[#E2E8F0] hover:border-[#C99A2E]/50 rounded-[8px] px-3.5 py-1.5 text-xs font-semibold text-[#0B1D3A] flex items-center gap-2 shadow-2xs cursor-pointer transition-colors"
          >
            <span>{activeFilter}</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
          </button>

          {isFilterOpen && (
            <div className="absolute right-0 mt-1 w-48 bg-white border border-[#E2E8F0] rounded-[8px] shadow-[0_14px_34px_rgba(11,29,58,0.15)] py-1 z-30">
              {specializationFilterOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => {
                    setActiveFilter(opt);
                    setIsFilterOpen(false);
                  }}
                  className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-[#F0F4FF] cursor-pointer ${
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

      {/* Specializations Grid with In-Grid Sponsored Employer Card B2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSpecializations.map((spec, index) => (
          <React.Fragment key={spec.id}>
            <div
              onClick={() => setSelectedSpecialization(spec)}
              className="bg-white rounded-[8px] border border-[#E2E8F0] p-5 flex flex-col justify-between shadow-[0_4px_16px_rgba(11,29,58,0.04)] hover:shadow-[0_18px_40px_rgba(11,29,58,0.12)] hover:border-[#C99A2E]/50 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group min-h-[150px]"
            >
              <div>
                {/* Icon Box */}
                <div
                  className={`w-9 h-9 rounded-[8px] flex items-center justify-center mb-3 shadow-xs transition-transform group-hover:scale-105 ${getColorClasses(
                    spec.color
                  )}`}
                >
                  {renderIcon(spec.icon, "w-4 h-4")}
                </div>

                {/* Title & Description */}
                <h3 className="text-[13px] font-bold text-[#0B1D3A] group-hover:text-[#C99A2E] transition-colors leading-snug">
                  {spec.title}
                </h3>
                <p className="text-xs text-slate-500 font-normal mt-1 line-clamp-2 leading-relaxed">
                  {spec.description}
                </p>

                {/* B3 - DEMAND CHIP: White chip with gray border */}
                <div className="mt-2.5">
                  <span className="inline-flex items-center gap-1 bg-white border border-[#E2E8F0] text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded-[4px] shadow-2xs">
                    <Sparkles className="w-2.5 h-2.5 text-[#C99A2E]" />
                    <span>Asked for in {index % 2 === 0 ? 14 : 8} roles</span>
                  </span>
                </div>
              </div>

              {/* Bottom Status Row */}
              <div className="flex items-center justify-between mt-4 pt-2 border-t border-slate-100">
                {spec.testsCount > 0 ? (
                  <span className="text-xs font-bold text-[#C99A2E]">
                    {spec.testsCount} Tests
                  </span>
                ) : (
                  <span className="text-xs font-medium text-slate-400">
                    Tests coming soon
                  </span>
                )}
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#C99A2E] group-hover:translate-x-1 transition-all" />
              </div>
            </div>

            {/* Position B2 - IN-GRID EMPLOYER CARD: White card with gray border */}
            {index === 2 && (
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

      {filteredSpecializations.length === 0 && (
        <div className="w-full bg-white rounded-[8px] border border-[#E2E8F0] p-12 text-center text-slate-500 text-xs mt-4">
          No specializations found for the selected filter.
        </div>
      )}
    </div>
  );

  if (hideSidebar) {
    return content;
  }

  return (
    <div className="h-full min-h-screen lg:h-screen w-full bg-[#F8FAFD] flex overflow-hidden font-['Outfit'] select-text">
      <Sidebar activeItem="knowledge-bank" className="h-full overflow-y-auto shrink-0 scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden" />
      <div className="flex-1 min-w-0 h-full overflow-y-auto scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">{content}</div>
    </div>
  );
}
