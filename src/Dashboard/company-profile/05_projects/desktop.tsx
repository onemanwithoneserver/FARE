import { useState } from "react";
import {
  MapPin,
  ExternalLink,
  FileText,
  Sparkles,
  Percent,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import SectionHeader from "../SectionHeader";
import { projectsData } from "./data";

export interface ProjectsViewProps {
  onInquireProject: (projectTitle: string) => void;
  onOpenBrochure?: () => void;
}

export default function ProjectsDesktop({
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
      className="w-full py-14 sm:py-16 px-8 lg:px-10 bg-[#F8FAFD] border-b border-[#E2E8F0] relative overflow-hidden scroll-mt-[72px]"
    >
      <motion.div
        animate={{ x: [0, -22, 0], y: [0, 18, 0], scale: [1, 1.07, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-8%] right-[6%] w-[440px] h-[440px] rounded-full blur-[130px] pointer-events-none z-0 opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(201,154,46,0.14) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1160px] mx-auto w-full relative z-10 space-y-8">
        {/* Priority Channel Partner Banner & Brochure Download Bar */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="rounded-[12px] bg-gradient-to-r from-[#0B1D3A] via-[#102548] to-[#1A3463] text-white p-5 sm:p-6 border border-white/10 shadow-[0_10px_30px_rgba(11,29,58,0.15)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative overflow-hidden"
        >
          <div
            className="absolute top-0 right-1/4 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-25"
            style={{
              background: "radial-gradient(circle, #C99A2E 0%, transparent 70%)",
            }}
          />

          <div className="flex items-center gap-3.5 relative z-10">
            <div className="w-12 h-12 rounded-[10px] bg-white/10 border border-white/15 flex items-center justify-center text-[#E5C158] shrink-0">
              <Sparkles size={22} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#E5C158] bg-white/10 border border-white/15 px-2 py-0.5 rounded-[4px]">
                  Priority Channel Partner Desk
                </span>
                <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1">
                  <Percent size={11} />
                  3.0% Closer Bonus
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-black tracking-tight text-white">
                Exclusive Broker Allocations & Pre-Launch Mandates
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">
                Direct token desk agreements, 48-hr brokerage disbursements, and 30-year link doc dossiers.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 relative z-10 w-full sm:w-auto">
            {onOpenBrochure && (
              <button
                type="button"
                onClick={onOpenBrochure}
                className="flex-1 sm:flex-initial relative overflow-hidden group/btn px-5 py-2.5 rounded-[8px] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(201,154,46,0.35)] hover:shadow-[0_6px_20px_rgba(201,154,46,0.45)] hover:-translate-y-0.5 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
                style={{ background: "linear-gradient(135deg, #C99A2E 0%, #A87A18 100%)" }}
              >
                <span className="absolute -inset-y-2 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition-all duration-700 group-hover/btn:left-[130%] group-hover/btn:opacity-100" />
                <FileText size={14} className="relative" />
                <span className="relative">Partner Brochure</span>
              </button>
            )}
            <button
              type="button"
              onClick={() => onInquireProject("Priority Channel Partner Agreement")}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-[8px] bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold transition-all cursor-pointer whitespace-nowrap"
            >
              Request Token Desk
            </button>
          </div>
        </motion.div>

        {/* Section Heading & Filter / Layout Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <SectionHeader
            eyebrow="05 · Portfolio Showcase"
            title="Ongoing & Completed Projects"
          />

          <div className="flex items-center gap-2.5 self-start sm:self-center shrink-0 mb-2 sm:mb-8">
            {/* Filter Pills */}
            <div className="inline-flex bg-white p-1 rounded-[8px] border border-[#E2E8F0] shadow-2xs">
              {(["All", "Ongoing", "Completed"] as const).map((status) => {
                const isActive = projectFilter === status;
                return (
                  <button
                    key={status}
                    type="button"
                    onClick={() => setProjectFilter(status)}
                    className={`relative px-3.5 py-1.5 rounded-[6px] text-xs font-bold transition-colors cursor-pointer ${
                      isActive ? "text-white" : "text-[#64748B] hover:text-[#0B1D3A]"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="projectsDesktopFilterPill"
                        transition={{ type: "spring", stiffness: 420, damping: 32 }}
                        className="absolute inset-0 rounded-[6px] bg-[#0B1D3A] shadow-xs"
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
          </div>
        </div>

        {/* All Projects Card Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
                const isOngoing = project.status === "Ongoing";
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 18, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    whileHover={{ y: -6 }}
                    transition={{
                      duration: 0.4,
                      delay: idx * 0.04,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="bg-white rounded-[8px] border border-[#E2E8F0] hover:border-[#C99A2E]/60 shadow-[0_4px_16px_rgba(11,29,58,0.04)] hover:shadow-[0_18px_40px_rgba(11,29,58,0.12)] transition-colors duration-300 overflow-hidden flex flex-col group relative"
                  >
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C99A2E] via-[#E5C158] to-[#0B1D3A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

                    <div className="h-44 relative overflow-hidden bg-slate-900">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A]/85 via-transparent to-black/20" />

                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                        <span
                          className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-[4px] shadow-xs ${
                            isOngoing
                              ? "bg-[#C99A2E] text-white"
                              : "bg-emerald-600 text-white"
                          }`}
                        >
                          {project.status}
                        </span>
                        <span className="text-[10px] font-mono font-bold text-white bg-black/55 backdrop-blur-sm px-2 py-0.5 rounded-[4px] border border-white/15">
                          RERA · {project.reraId}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-[#E5C158]">
                          {project.segment}
                        </div>
                        <h3 className="text-base font-extrabold text-white leading-snug">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0B1D3A] mb-1.5">
                          <MapPin size={13} className="text-[#C99A2E] shrink-0" />
                          <span>{project.location}</span>
                        </div>
                        <p className="text-xs text-[#64748B] font-medium">
                          {project.specs}
                        </p>

                        <div className="mt-4">
                          <div className="flex items-center justify-between text-[11px] font-bold mb-1">
                            <span className="text-[#64748B]">{project.handover}</span>
                            <span className="text-[#0B1D3A]">{project.progressPercent}%</span>
                          </div>
                          <div className="w-full h-1.5 bg-[#E2E8F0] rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${project.progressPercent}%` }}
                              viewport={{ once: true, amount: 0.2 }}
                              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                              className={`h-full rounded-full ${
                                isOngoing
                                  ? "bg-gradient-to-r from-[#C99A2E] to-[#E2C068]"
                                  : "bg-emerald-500"
                              }`}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <motion.button
                          type="button"
                          whileTap={{ scale: 0.98 }}
                          onClick={() => onInquireProject(project.title)}
                          className="flex-1 py-2 rounded-[6px] border border-[#E2E8F0] hover:border-[#0B1D3A] hover:bg-[#0B1D3A] text-[#0B1D3A] hover:text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                        >
                          <span>{isOngoing ? "Request Mandate" : "View Handover"}</span>
                          <ExternalLink size={12} />
                        </motion.button>
                        {onOpenBrochure && (
                          <button
                            type="button"
                            onClick={onOpenBrochure}
                            className="px-2.5 py-2 rounded-[6px] border border-[#E2E8F0] hover:border-[#C99A2E] hover:text-[#C99A2E] text-slate-500 text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
                            title="Brochure"
                          >
                            <FileText size={13} />
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
