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

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

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
      className="w-full py-16 px-10 bg-white border-b border-[#0B1D3A]/[0.06] font-['Outfit'] relative overflow-hidden scroll-mt-[72px] fare-noise-overlay"
    >
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none z-0 opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
        }}
      />
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -20, 0], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[0%] w-[450px] h-[450px] rounded-full blur-[120px] pointer-events-none z-0 opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(201,154,46,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto w-full relative z-10 space-y-10">
        {/* Priority Channel Partner Banner & Brochure Download Bar */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[4px] text-white p-6 sm:p-7 border border-white/[0.1] luxury-shadow-float flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative overflow-hidden"
          style={{
            background: `linear-gradient(170deg, ${NAVY} 0%, #071A49 50%, #0D2240 100%)`,
          }}
        >
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div
            className="absolute top-0 right-1/4 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-25"
            style={{
              background: `radial-gradient(circle, ${GOLD} 0%, transparent 70%)`,
            }}
          />

          <div className="flex items-center gap-4 relative z-10">
            <div
              className="w-12 h-12 rounded-[4px] flex items-center justify-center text-white shrink-0 luxury-shadow-md"
              style={{ background: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})` }}
            >
              <Sparkles size={22} strokeWidth={2.2} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#D5AA45] bg-white/[0.06] border border-white/[0.1] px-2.5 py-0.5 rounded-[4px]">
                  Priority Channel Partner Desk
                </span>
                <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1">
                  <Percent size={11} />
                  3.0% Closer Bonus
                </span>
              </div>
              <h3 className="text-[18px] font-black tracking-tight text-white">
                Exclusive Broker Allocations & Pre-Launch Mandates
              </h3>
              <p className="text-[13px] text-[#CBD5E1] font-light mt-0.5">
                Direct token desk agreements, 48-hr brokerage disbursements, and 30-year link doc dossiers.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 relative z-10 w-full sm:w-auto">
            {onOpenBrochure && (
              <button
                type="button"
                onClick={onOpenBrochure}
                className="flex-1 sm:flex-initial relative overflow-hidden group/btn px-5 py-2.5 rounded-[8px] text-white text-xs font-bold flex items-center justify-center gap-2 luxury-shadow-float hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 cursor-pointer whitespace-nowrap"
                style={{ background: `linear-gradient(135deg, ${GOLD_MID} 0%, ${GOLD} 100%)` }}
              >
                <span className="absolute -inset-y-2 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition-all duration-700 group-hover/btn:left-[130%] group-hover/btn:opacity-100" />
                <FileText size={14} className="relative" />
                <span className="relative">Partner Brochure</span>
              </button>
            )}
            <button
              type="button"
              onClick={() => onInquireProject("Priority Channel Partner Agreement")}
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-[8px] bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] text-white text-xs font-bold transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              Request Token Desk
            </button>
          </div>
        </motion.div>

        {/* Section Heading & Filter Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <SectionHeader
            eyebrow="05 · Portfolio Showcase"
            title="Ongoing & Completed Projects"
          />

          <div className="flex items-center gap-2.5 self-start sm:self-center shrink-0 mb-2 sm:mb-8">
            {/* Filter Pills */}
            <div className="inline-flex bg-[#F8FAFD] p-1 rounded-[8px] border border-[#0B1D3A]/[0.08] luxury-shadow-sm">
              {(["All", "Ongoing", "Completed"] as const).map((status) => {
                const isActive = projectFilter === status;
                return (
                  <button
                    key={status}
                    type="button"
                    onClick={() => setProjectFilter(status)}
                    className={`relative px-3.5 py-1.5 rounded-[4px] text-xs font-bold transition-colors duration-300 cursor-pointer ${
                      isActive ? "text-white" : "text-[#7B8DAA] hover:text-[#0B1D3A]"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="projectsDesktopFilterPill"
                        transition={{ type: "spring", stiffness: 420, damping: 32 }}
                        className="absolute inset-0 rounded-[4px] bg-[#0B1D3A] luxury-shadow-sm"
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
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.04,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="bg-white/90 backdrop-blur-xl rounded-[4px] border border-[#0B1D3A]/[0.08] hover:border-[#0B1D3A]/[0.20] luxury-shadow-float hover:luxury-shadow-sm hover:luxury-shadow-float hover:-translate-y-1.5 transition-all duration-400 ease-out overflow-hidden flex flex-col group relative"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] opacity-60 group-hover:opacity-100 transition-opacity duration-500 z-20"
                    style={{
                      background: isOngoing
                        ? `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})`
                        : "linear-gradient(90deg, #10B981, #059669)",
                    }}
                  />

                  <div className="h-44 relative overflow-hidden bg-[#0B1D3A]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A]/85 via-transparent to-black/20" />

                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <span
                        className={`text-[10px] font-black uppercase tracking-[0.12em] px-2.5 py-1 rounded-[4px] luxury-shadow-sm ${
                          isOngoing
                            ? "bg-[#C99A2E] text-white"
                            : "bg-[#10B981] text-white"
                        }`}
                      >
                        {project.status}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-white bg-black/55 backdrop-blur-sm px-2.5 py-1 rounded-[4px] border border-white/15">
                        RERA · {project.reraId}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4">
                      <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#D5AA45]">
                        {project.segment}
                      </div>
                      <h3 className="text-[17px] font-black text-white leading-snug tracking-tight mt-0.5">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#0B1D3A] mb-2">
                        <MapPin size={13} className="text-[#C99A2E] shrink-0" />
                        <span>{project.location}</span>
                      </div>
                      <p className="text-[13px] text-[#5A6B82] font-medium leading-relaxed">
                        {project.specs}
                      </p>

                      <div className="mt-4 p-3 rounded-[4px] bg-[#F8FAFD] border border-[#0B1D3A]/[0.04]">
                        <div className="flex items-center justify-between text-[11px] font-bold mb-1.5">
                          <span className="text-[#7B8DAA]">{project.handover}</span>
                          <span className="text-[#0B1D3A] font-black">{project.progressPercent}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-[#0B1D3A]/[0.08] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${project.progressPercent}%` }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                            className="h-full rounded-full"
                            style={{
                              background: isOngoing
                                ? `linear-gradient(90deg, ${GOLD}, ${GOLD_MID})`
                                : "linear-gradient(90deg, #10B981, #059669)",
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => onInquireProject(project.title)}
                        className="flex-1 py-2.5 rounded-[8px] border border-[#0B1D3A]/[0.1] hover:border-[#0B1D3A] hover:bg-[#0B1D3A] text-[#0B1D3A] hover:text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer"
                      >
                        <span>{isOngoing ? "Request Mandate" : "View Handover"}</span>
                        <ExternalLink size={12} />
                      </button>
                      {onOpenBrochure && (
                        <button
                          type="button"
                          onClick={onOpenBrochure}
                          className="px-3 py-2.5 rounded-[8px] border border-[#0B1D3A]/[0.1] hover:border-[#C99A2E] hover:text-[#C99A2E] text-[#7B8DAA] text-xs font-bold flex items-center gap-1 transition-all duration-300 cursor-pointer"
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
