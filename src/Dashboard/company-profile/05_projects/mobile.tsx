import { useState } from "react";
import {
  MapPin,
  ExternalLink,
  FileText,
  Percent,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import SectionHeader from "../SectionHeader";
import { projectsData } from "./data";
import type { ProjectsViewProps } from "./desktop";

export default function ProjectsMobile({
  onInquireProject,
  onOpenBrochure,
}: ProjectsViewProps) {
  const [projectFilter, setProjectFilter] = useState<"All" | "Ongoing" | "Completed">("All");

  const filteredProjects = projectsData.filter(
    (p) => projectFilter === "All" || p.status === projectFilter
  );

  return (
    <section
      id="company-sec-projects"
      className="w-full py-10 px-4 bg-[#F8FAFD] border-b border-[#E2E8F0] scroll-mt-[96px]"
    >
      <SectionHeader
        compact
        eyebrow="05 · Portfolio Showcase"
        title="Ongoing & Completed Projects"
      />

      {/* Priority Channel Partner Card & Brochure CTA */}
      <div className="rounded-[10px] bg-gradient-to-r from-[#0B1D3A] via-[#102548] to-[#1A3463] text-white p-4 mb-4 border border-white/10 shadow-md">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#E5C158] bg-white/10 px-2 py-0.5 rounded-[4px]">
            Priority Channel Partner
          </span>
          <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1">
            <Percent size={10} />
            3.0% Closer Bonus
          </span>
        </div>
        <h3 className="text-sm font-extrabold text-white">
          Exclusive Partner Allocations
        </h3>
        <p className="text-[11px] text-slate-300 mt-0.5 leading-relaxed">
          Direct developer token desk agreements and 48-hour brokerage disbursements.
        </p>

        <div className="flex items-center gap-2 mt-3">
          {onOpenBrochure && (
            <button
              type="button"
              onClick={onOpenBrochure}
              className="flex-1 py-2 rounded-[6px] text-white text-[11px] font-bold flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
              style={{ background: "linear-gradient(135deg, #C99A2E 0%, #A87A18 100%)" }}
            >
              <FileText size={12} />
              <span>Partner Brochure</span>
            </button>
          )}
          <button
            type="button"
            onClick={() => onInquireProject("Priority Channel Partner Desk")}
            className="flex-1 py-2 rounded-[6px] bg-white/10 text-white text-[11px] font-bold cursor-pointer"
          >
            Token Desk
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-3 scrollbar-hide">
        {(["All", "Ongoing", "Completed"] as const).map((status) => {
          const isActive = projectFilter === status;
          return (
            <button
              key={status}
              type="button"
              onClick={() => setProjectFilter(status)}
              className={`relative px-3.5 py-1.5 rounded-full text-[11px] font-bold whitespace-nowrap transition-colors cursor-pointer ${
                isActive
                  ? "text-white"
                  : "bg-white border border-[#E2E8F0] text-[#64748B]"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="projectsMobileFilterPill"
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-[#0B1D3A]"
                />
              )}
              <span className="relative z-10">
                {status} (
                {status === "All"
                  ? projectsData.length
                  : projectsData.filter((p) => p.status === status).length}
                )
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid List */}
      <motion.div layout className="flex flex-col gap-3.5">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => {
            const isOngoing = project.status === "Ongoing";
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="bg-white rounded-[10px] border border-[#E2E8F0] overflow-hidden shadow-2xs flex flex-col"
              >
                <div className="h-40 relative overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A]/85 via-transparent to-black/20" />
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                    <span
                      className={`text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-[4px] ${
                        isOngoing ? "bg-[#C99A2E] text-white" : "bg-emerald-600 text-white"
                      }`}
                    >
                      {project.status}
                    </span>
                    <span className="text-[9px] font-mono font-bold text-white bg-black/60 px-2 py-0.5 rounded-[4px]">
                      RERA · {project.reraId}
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 left-3 right-3 text-white">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#E5C158]">
                      {project.segment}
                    </div>
                    <h3 className="text-sm font-extrabold leading-snug">{project.title}</h3>
                  </div>
                </div>

                <div className="p-3.5 flex flex-col gap-3">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0B1D3A] mb-1">
                      <MapPin size={12} className="text-[#C99A2E] shrink-0" />
                      <span>{project.location}</span>
                    </div>
                    <p className="text-xs text-[#64748B] font-medium">{project.specs}</p>

                    <div className="mt-3">
                      <div className="flex items-center justify-between text-[10px] font-bold mb-1">
                        <span className="text-[#64748B]">{project.handover}</span>
                        <span className="text-[#0B1D3A]">{project.progressPercent}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#E2E8F0] rounded-full overflow-hidden">
                        <div
                          style={{ width: `${project.progressPercent}%` }}
                          className={`h-full rounded-full ${
                            isOngoing ? "bg-gradient-to-r from-[#C99A2E] to-[#E2C068]" : "bg-emerald-500"
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => onInquireProject(project.title)}
                      className="flex-1 py-2 rounded-[6px] border border-[#E2E8F0] bg-[#F8FAFD] text-[#0B1D3A] text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>{isOngoing ? "Request Mandate" : "View Handover"}</span>
                      <ExternalLink size={12} />
                    </button>
                    {onOpenBrochure && (
                      <button
                        type="button"
                        onClick={onOpenBrochure}
                        className="px-3 py-2 rounded-[6px] border border-[#C99A2E]/40 text-[#A87A18] text-xs font-bold flex items-center gap-1 cursor-pointer"
                      >
                        <FileText size={12} />
                        <span>Brochure</span>
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
