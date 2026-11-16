import React, { useState } from "react";
import {
  BookOpen,
  FileText,
  Target,
  Play,
} from "lucide-react";
import {
  programsHeader,
  programsData,
  type ProgramItem,
} from "./data";
import Sidebar from "../sidebar";
import ProgramDetail from "./ProgramDetail";
import AdBanner from "../components/AdBanner";
import { dispatchOpenCompanyProfile } from "../company-profile/useCompanyProfile";

export interface ProgramsDesktopProps {
  hideSidebar?: boolean;
  activeSubSection?: string;
}

export default function ProgramsDesktop({
  hideSidebar = false,
  activeSubSection,
}: ProgramsDesktopProps) {
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);

  const filteredPrograms = programsData.filter((prog) => {
    if (activeSubSection === "retail-programs") {
      return prog.tag.toLowerCase().includes("retail");
    }
    if (activeSubSection === "commercial-programs") {
      return prog.tag.toLowerCase().includes("commercial");
    }
    return true;
  });

  if (selectedProgram) {
    const detailContent = (
      <ProgramDetail
        program={selectedProgram}
        onBack={() => setSelectedProgram(null)}
      />
    );

    if (hideSidebar) {
      return detailContent;
    }

    return (
      <div className="h-full min-h-screen lg:h-screen w-full bg-[#F8FAFD] flex overflow-hidden font-['Outfit'] select-text">
        <Sidebar activeItem="programs" className="h-full overflow-y-auto shrink-0 scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden" />
        <div className="flex-1 min-w-0 h-full overflow-y-auto scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">{detailContent}</div>
      </div>
    );
  }

  const content = (
    <div className="w-full bg-[#F8FAFD] min-h-screen font-['Outfit'] select-text p-6 xl:p-8 flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="text-xl xl:text-2xl font-black text-[#0B1D3A] tracking-tight">
          {programsHeader.title}
        </h1>
        <p className="text-xs text-[#64748B] font-medium mt-1">
          {programsHeader.subtitle}
        </p>
      </div>

      {/* ADVERTISEMENT: Programs Leaderboard Banner */}
      <AdBanner variant="leaderboard" />

      {/* Program Cards Grid with In-Grid Sponsored Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {filteredPrograms.map((prog: ProgramItem, index: number) => (
          <React.Fragment key={prog.id}>
            <div
              className="bg-white rounded-[8px] border border-[#E2E8F0] p-6 flex flex-col justify-between gap-5 shadow-[0_4px_16px_rgba(11,29,58,0.04)] hover:-translate-y-1.5 hover:border-[#C99A2E]/50 hover:shadow-[0_18px_40px_rgba(11,29,58,0.14)] transition-all duration-300 group"
            >
              <div>
                {/* Card Top Row: Title & Book Icon */}
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h2 className="text-base font-extrabold text-[#0B1D3A] tracking-tight leading-snug">
                      {prog.title}
                    </h2>
                    <div className="mt-2">
                      <span
                        className="text-[10px] font-bold uppercase tracking-[0.14em] px-2.5 py-0.5 rounded-[4px] border inline-block bg-gradient-to-r from-[#C99A2E]/[0.10] to-[#C99A2E]/[0.03] text-[#C99A2E] border-[#C99A2E]/30"
                      >
                        {prog.tag}
                      </span>
                    </div>
                  </div>

                  <div className="w-11 h-11 rounded-[8px] bg-gradient-to-br from-[#FEF9EE] to-[#FFF4D9] border border-[#FDE68A] flex items-center justify-center text-[#C99A2E] shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-300">
                    <BookOpen className="w-5 h-5" />
                  </div>
                </div>

                {/* Summary Text */}
                <p className="text-xs text-[#64748B] font-medium mt-3.5 leading-relaxed">
                  {prog.summaryText}
                </p>

                {/* Three Metric Pills: [Courses] [Quizzes] [Mocks] */}
                <div className="flex items-center gap-2 mt-4">
                  {/* Courses Count */}
                  <div className="bg-[#F0F4FF] border border-[#0B1D3A]/[0.08] rounded-[6px] px-2.5 py-1 text-xs font-bold text-[#0B1D3A] flex items-center gap-1.5 shadow-2xs hover:bg-[#E6EEFF] transition-colors">
                    <BookOpen className="w-3.5 h-3.5 text-[#C99A2E]" />
                    <span>{prog.coursesCount}</span>
                  </div>

                  {/* Quizzes Count */}
                  <div className="bg-[#F0F4FF] border border-[#0B1D3A]/[0.08] rounded-[6px] px-2.5 py-1 text-xs font-bold text-[#0B1D3A] flex items-center gap-1.5 shadow-2xs hover:bg-[#E6EEFF] transition-colors">
                    <FileText className="w-3.5 h-3.5 text-[#C99A2E]" />
                    <span>{prog.quizzesCount}</span>
                  </div>

                  {/* Mocks Count */}
                  <div className="bg-[#F0F4FF] border border-[#0B1D3A]/[0.08] rounded-[6px] px-2.5 py-1 text-xs font-bold text-[#0B1D3A] flex items-center gap-1.5 shadow-2xs hover:bg-[#E6EEFF] transition-colors">
                    <Target className="w-3.5 h-3.5 text-[#C99A2E]" />
                    <span>{prog.mocksCount}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Full-width Preview Button */}
              <button
                type="button"
                onClick={() => setSelectedProgram(prog)}
                className="relative overflow-hidden group/btn w-full text-white font-bold text-xs py-3 rounded-[8px] flex items-center justify-center gap-2 cursor-pointer shadow-[0_8px_18px_-8px_rgba(201,154,46,0.65)] transition-all duration-300 hover:shadow-[0_12px_24px_-8px_rgba(201,154,46,0.75)] hover:-translate-y-0.5 active:scale-[0.98]"
                style={{ background: "linear-gradient(135deg, #C99A2E 0%, #A87A18 100%)" }}
              >
                <span className="absolute -inset-y-2 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition-all duration-700 group-hover/btn:left-[130%] group-hover/btn:opacity-100" />
                <Play className="w-3.5 h-3.5 fill-current text-white relative" />
                <span className="relative">Preview</span>
              </button>
            </div>

            {/* In-Grid Sponsored Card matching Courses Grid */}
            {index === 0 && (
              <AdBanner
                variant="card"
                label="SPONSORED"
                primaryCtaText="Apply Now"
                secondaryCtaText="View Company"
                onJoin={() => dispatchOpenCompanyProfile("Program Partner")}
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
      <Sidebar activeItem="programs" className="h-full overflow-y-auto shrink-0 scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden" />
      <div className="flex-1 min-w-0 h-full overflow-y-auto scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">{content}</div>
    </div>
  );
}
