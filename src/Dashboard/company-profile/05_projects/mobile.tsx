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

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

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
      className="w-full py-12 px-5 bg-white border-b border-[#0B1D3A]/[0.06] font-['Outfit'] relative overflow-hidden scroll-mt-[96px] fare-noise-overlay"
    >
      <div className="relative z-10">
        <SectionHeader
          compact
          eyebrow="05 · Portfolio Showcase"
          title="Ongoing & Completed Projects"
        />

        {/* Priority Channel Partner Card & Brochure CTA */}
        <div
          className="rounded-[4px] text-white p-5 mb-5 border border-white/[0.1] luxury-shadow-float relative overflow-hidden"
          style={{
            background: `linear-gradient(170deg, ${NAVY} 0%, #071A49 50%, #0D2240 100%)`,
          }}
        >
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#D5AA45] bg-white/[0.06] border border-white/[0.1] px-2 py-0.5 rounded-[4px]">
                Priority Channel Partner
              </span>
              <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                <Percent size={10} />
                3.0% Closer Bonus
              </span>
            </div>
            <h3 className="text-[15px] font-black text-white tracking-tight">
              Exclusive Partner Allocations
            </h3>
            <p className="text-[12px] text-[#CBD5E1] font-light mt-1 leading-relaxed">
              Direct developer token desk agreements and 48-hour brokerage disbursements.
            </p>

            <div className="flex items-center gap-2 mt-4">
              {onOpenBrochure && (
                <button
                  type="button"
                  onClick={onOpenBrochure}
                  className="flex-1 py-2.5 rounded-[8px] text-white text-[11px] font-bold flex items-center justify-center gap-1.5 luxury-shadow-sm cursor-pointer transition-all duration-300"
                  style={{ background: `linear-gradient(135deg, ${GOLD_MID} 0%, ${GOLD} 100%)` }}
                >
                  <FileText size={12} />
                  <span>Partner Brochure</span>
                </button>
              )}
              <button
                type="button"
                onClick={() => onInquireProject("Priority Channel Partner Desk")}
                className="flex-1 py-2.5 rounded-[8px] bg-white/[0.06] border border-white/[0.1] text-white text-[11px] font-bold cursor-pointer transition-all duration-300"
              >
                Token Desk
              </button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-4 scrollbar-hide">
          {(["All", "Ongoing", "Completed"] as const).map((status) => {
            const isActive = projectFilter === status;
            return (
              <button
                key={status}
                type="button"
                onClick={() => setProjectFilter(status)}
                className={`relative px-3.5 py-1.5 rounded-[8px] text-[11px] font-bold whitespace-nowrap transition-colors duration-300 cursor-pointer ${
                  isActive
                    ? "text-white"
                    : "bg-[#F8FAFD] border border-[#0B1D3A]/[0.08] text-[#7B8DAA]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="projectsMobileFilterPill"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                    className="absolute inset-0 rounded-[8px] bg-[#0B1D3A]"
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
        <motion.div layout className="flex flex-col gap-4">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isOngoing = project.status === "Ongoing";
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white/90 backdrop-blur-xl rounded-[4px] border border-[#0B1D3A]/[0.08] overflow-hidden luxury-shadow-float flex flex-col relative"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] z-10"
                    style={{
                      background: isOngoing
                        ? `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})`
                        : "linear-gradient(90deg, #10B981, #059669)",
                    }}
                  />

                  <div className="h-40 relative overflow-hidden bg-[#0B1D3A]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A]/85 via-transparent to-black/20" />
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span
                        className={`text-[9px] font-black uppercase tracking-[0.12em] px-2 py-0.5 rounded-[4px] ${
                          isOngoing ? "bg-[#C99A2E] text-white" : "bg-[#10B981] text-white"
                        }`}
                      >
                        {project.status}
                      </span>
                      <span className="text-[9px] font-mono font-bold text-white bg-black/60 px-2 py-0.5 rounded-[4px] border border-white/15">
                        RERA · {project.reraId}
                      </span>
                    </div>
                    <div className="absolute bottom-2.5 left-3 right-3 text-white">
                      <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#D5AA45]">
                        {project.segment}
                      </div>
                      <h3 className="text-[15px] font-black leading-snug tracking-tight">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col gap-3">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#0B1D3A] mb-1">
                        <MapPin size={12} className="text-[#C99A2E] shrink-0" />
                        <span>{project.location}</span>
                      </div>
                      <p className="text-[12px] text-[#5A6B82] font-medium">{project.specs}</p>

                      <div className="mt-3 p-2.5 rounded-[4px] bg-[#F8FAFD] border border-[#0B1D3A]/[0.04]">
                        <div className="flex items-center justify-between text-[10px] font-bold mb-1">
                          <span className="text-[#7B8DAA]">{project.handover}</span>
                          <span className="text-[#0B1D3A] font-black">{project.progressPercent}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-[#0B1D3A]/[0.08] rounded-full overflow-hidden">
                          <div
                            style={{
                              width: `${project.progressPercent}%`,
                              background: isOngoing
                                ? `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})`
                                : "linear-gradient(90deg, #10B981, #059669)",
                            }}
                            className="h-full rounded-full"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => onInquireProject(project.title)}
                        className="flex-1 py-2.5 rounded-[8px] border border-[#0B1D3A]/[0.1] bg-[#F8FAFD] text-[#0B1D3A] text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                      >
                        <span>{isOngoing ? "Request Mandate" : "View Handover"}</span>
                        <ExternalLink size={12} />
                      </button>
                      {onOpenBrochure && (
                        <button
                          type="button"
                          onClick={onOpenBrochure}
                          className="px-3 py-2.5 rounded-[8px] border border-[#C99A2E]/40 text-[#C99A2E] text-xs font-bold flex items-center gap-1 cursor-pointer transition-colors"
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
      </div>
    </section>
  );
}
