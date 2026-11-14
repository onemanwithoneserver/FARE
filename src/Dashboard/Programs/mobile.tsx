import React, { useState } from "react";
import {
  BookOpen,
  FileText,
  Target,
  Play,
  Menu,
  Bell,
} from "lucide-react";
import {
  programsHeader,
  programsData,
  type ProgramItem,
} from "./data";
import trimmedLogo from "../../Components/FARE_Logo/SVG/Primary Logo Trimmed.svg";
import Sidebar from "../sidebar";
import ProgramDetail from "./ProgramDetail";
import AdBanner from "../components/AdBanner";

export interface ProgramsMobileProps {
  hideSidebar?: boolean;
  activeSubSection?: string;
}

export default function ProgramsMobile({
  hideSidebar = false,
  activeSubSection,
}: ProgramsMobileProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
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
    return (
      <ProgramDetail
        program={selectedProgram}
        onBack={() => setSelectedProgram(null)}
        isMobile={true}
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
            <span className="font-bold text-sm text-slate-900">Programs</span>
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
          activeItem="programs"
        />
      )}

      {/* Main Content */}
      <div className="p-4 flex flex-col gap-4">
        <div>
          <h1 className="text-xl font-black text-[#0B1D3A] tracking-tight">
            {programsHeader.title}
          </h1>
          <p className="text-xs text-[#64748B] font-medium mt-0.5">
            {programsHeader.subtitle}
          </p>
        </div>

        {/* ADVERTISEMENT: Mobile Inline Banner */}
        <AdBanner variant="inline" label="SPONSORED" height={64} />

        {/* Stack of Cards */}
        <div className="flex flex-col gap-4">
          {filteredPrograms.map((prog: ProgramItem, index: number) => (
            <React.Fragment key={prog.id}>
              <div
                className="bg-white rounded-[8px] border border-[#E2E8F0] p-5 flex flex-col justify-between gap-4 shadow-[0_4px_16px_rgba(11,29,58,0.04)]"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h2 className="text-sm font-extrabold text-[#0B1D3A] leading-snug">
                        {prog.title}
                      </h2>
                      <div className="mt-1.5">
                        <span
                          className="text-[10px] font-bold uppercase tracking-[0.14em] px-2 py-0.5 rounded-[4px] border inline-block bg-[#C99A2E]/[0.10] text-[#C99A2E] border-[#C99A2E]/30"
                        >
                          {prog.tag}
                        </span>
                      </div>
                    </div>

                    <div className="w-9 h-9 rounded-[8px] bg-gradient-to-br from-[#FEF9EE] to-[#FFF4D9] border border-[#FDE68A] flex items-center justify-center text-[#C99A2E] shrink-0">
                      <BookOpen className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-[11px] text-[#64748B] font-medium mt-2.5">
                    {prog.summaryText}
                  </p>

                  {/* Metric Pills */}
                  <div className="flex items-center gap-2 mt-3">
                    <div className="bg-[#F0F4FF] border border-[#0B1D3A]/[0.08] rounded-[4px] px-2 py-0.5 text-[11px] font-bold text-[#0B1D3A] flex items-center gap-1">
                      <BookOpen className="w-3 h-3 text-[#C99A2E]" />
                      <span>{prog.coursesCount}</span>
                    </div>
                    <div className="bg-[#F0F4FF] border border-[#0B1D3A]/[0.08] rounded-[4px] px-2 py-0.5 text-[11px] font-bold text-[#0B1D3A] flex items-center gap-1">
                      <FileText className="w-3 h-3 text-[#C99A2E]" />
                      <span>{prog.quizzesCount}</span>
                    </div>
                    <div className="bg-[#F0F4FF] border border-[#0B1D3A]/[0.08] rounded-[4px] px-2 py-0.5 text-[11px] font-bold text-[#0B1D3A] flex items-center gap-1">
                      <Target className="w-3 h-3 text-[#C99A2E]" />
                      <span>{prog.mocksCount}</span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProgram(prog)}
                  className="w-full text-white font-bold text-xs py-2.5 rounded-[8px] flex items-center justify-center gap-1.5 shadow-[0_6px_16px_-6px_rgba(201,154,46,0.6)] active:scale-[0.98] cursor-pointer"
                  style={{ background: "linear-gradient(135deg, #C99A2E 0%, #A87A18 100%)" }}
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>Preview</span>
                </button>
              </div>

              {/* In-Grid Sponsored Card matching Courses */}
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
