import { useState, useRef, useEffect } from "react";
import {
  MapPin,
  CheckCircle2,
  ArrowRight,
  SlidersHorizontal,
  ChevronDown,
  Check,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import SectionHeader from "../SectionHeader";
import { careersData, careerDepartments } from "./data";

const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

const cardAccents = [
  "linear-gradient(90deg, #3B82F6, #1D4ED8)",
  `linear-gradient(90deg, ${GOLD_MID}, ${GOLD})`,
  "linear-gradient(90deg, #10B981, #059669)",
  "linear-gradient(90deg, #8B5CF6, #6D28D9)",
];

export interface CareersViewProps {
  onApplyCareer: (jobTitle: string) => void;
}

export default function CareersDesktop({ onApplyCareer }: CareersViewProps) {
  const [careerDept, setCareerDept] = useState<string>("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const totalOpenings = careersData.reduce((acc, job) => acc + job.openings, 0);

  const getDeptCount = (dept: string) => {
    if (dept === "All") return totalOpenings;
    return careersData
      .filter((job) => job.department === dept)
      .reduce((acc, job) => acc + job.openings, 0);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDropdownOpen]);

  const filteredCareers = careersData.filter(
    (job) => careerDept === "All" || job.department === careerDept
  );

  return (
    <section
      id="company-sec-careers"
      className="w-full py-16 px-10 bg-white border-b border-[#0B1D3A]/[0.06] font-['Outfit'] relative overflow-hidden scroll-mt-[72px] fare-noise-overlay"
    >
      <motion.div
        animate={{ x: [0, 18, 0], y: [0, 22, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] left-[-5%] w-[380px] h-[380px] rounded-full blur-[130px] pointer-events-none z-0 opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(201,154,46,0.16) 0%, transparent 70%)",
        }}
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, -15, 0], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[5%] w-[420px] h-[420px] rounded-full blur-[120px] pointer-events-none z-0 opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <SectionHeader
            eyebrow="06 · Join Our Growth Engine"
            title="Careers & Open Positions"
          />

          {/* Modern Filter Dropdown */}
          <div ref={dropdownRef} className="relative mb-2 md:mb-10 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="inline-flex items-center gap-2.5 px-3.5 py-2.5 rounded-[8px] bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] hover:border-[#0B1D3A]/20 text-xs font-bold text-[#0B1D3A] luxury-shadow-sm hover:luxury-shadow-float transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C99A2E]/30"
              aria-expanded={isDropdownOpen}
              aria-haspopup="listbox"
            >
              <div className="w-6 h-6 rounded-[4px] bg-[#C99A2E]/10 flex items-center justify-center text-[#C99A2E]">
                <SlidersHorizontal className="w-3.5 h-3.5" />
              </div>

              <div className="flex items-center gap-1.5 text-left">
                <span className="text-[#7B8DAA] text-[11px] font-bold hidden sm:inline">
                  Department:
                </span>
                <span className="font-black text-[#0B1D3A] text-xs tracking-tight">
                  {careerDept === "All" ? "All Departments" : careerDept}
                </span>
              </div>

              <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-[#F8FAFD] text-[#5A6B82] border border-[#0B1D3A]/[0.08]">
                {getDeptCount(careerDept)} Openings
              </span>

              <ChevronDown
                className={`w-3.5 h-3.5 text-[#7B8DAA] transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180 text-[#C99A2E]" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute right-0 top-full mt-2 w-72 sm:w-80 bg-white/95 backdrop-blur-xl rounded-[4px] border border-[#0B1D3A]/[0.08] luxury-shadow-float p-1.5 z-50 overflow-hidden"
                >
                  <div className="flex items-center justify-between px-3 py-2 border-b border-[#0B1D3A]/[0.06] mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#7B8DAA]">
                      Filter by Department
                    </span>
                    {careerDept !== "All" && (
                      <button
                        type="button"
                        onClick={() => {
                          setCareerDept("All");
                          setIsDropdownOpen(false);
                        }}
                        className="text-[10px] font-bold text-[#C99A2E] hover:text-[#0B1D3A] flex items-center gap-0.5 cursor-pointer"
                      >
                        <X className="w-3 h-3" />
                        Reset
                      </button>
                    )}
                  </div>

                  <div className="flex flex-col gap-0.5 max-h-[300px] overflow-y-auto">
                    {careerDepartments.map((dept) => {
                      const isActive = careerDept === dept;
                      const count = getDeptCount(dept);
                      return (
                        <button
                          key={dept}
                          type="button"
                          onClick={() => {
                            setCareerDept(dept);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-[4px] text-xs transition-colors cursor-pointer text-left ${
                            isActive
                              ? "bg-[#C99A2E]/10 text-[#0B1D3A] font-black"
                              : "text-[#5A6B82] font-medium hover:bg-[#F8FAFD] hover:text-[#0B1D3A]"
                          }`}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <div
                              className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                                isActive
                                  ? "bg-[#C99A2E] text-white"
                                  : "border border-[#0B1D3A]/20 bg-white"
                              }`}
                            >
                              {isActive && <Check className="w-2.5 h-2.5" strokeWidth={3} />}
                            </div>
                            <span className="truncate">
                              {dept === "All" ? "All Departments" : dept}
                            </span>
                          </div>

                          <span
                            className={`text-[10px] px-2 py-0.5 rounded-full font-bold shrink-0 ml-2 ${
                              isActive
                                ? "bg-[#C99A2E]/20 text-[#C99A2E]"
                                : "bg-[#F8FAFD] text-[#7B8DAA]"
                            }`}
                          >
                            {count} {count === 1 ? "opening" : "openings"}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <motion.div layout className="flex flex-col gap-4">
          <AnimatePresence mode="popLayout">
            {filteredCareers.map((job, idx) => (
              <motion.div
                key={job.id}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: 8 }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-white/90 backdrop-blur-xl rounded-[4px] border border-[#0B1D3A]/[0.08] hover:border-[#0B1D3A]/[0.20] p-6 luxury-shadow-float hover:luxury-shadow-sm hover:luxury-shadow-float hover:-translate-y-1 transition-all duration-400 ease-out flex flex-col lg:flex-row lg:items-center justify-between gap-4 relative overflow-hidden group"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: cardAccents[idx % cardAccents.length] }}
                />

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#0B1D3A] bg-[#F8FAFD] border border-[#0B1D3A]/[0.08] px-2.5 py-0.5 rounded-[4px]">
                      {job.department}
                    </span>
                    <span className="text-[10px] font-bold text-[#059669] bg-[#10B981]/[0.08] border border-[#10B981]/20 px-2.5 py-0.5 rounded-[4px]">
                      {job.openings} Openings
                    </span>
                    <span className="text-[11px] font-bold text-[#7B8DAA]">
                      · {job.type}
                    </span>
                  </div>

                  <h3 className="text-[18px] font-black text-[#0B1D3A] tracking-tight group-hover:text-[#C99A2E] transition-colors">
                    {job.role}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-[13px] text-[#5A6B82] font-medium mt-2">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-[#C99A2E]" strokeWidth={2.5} />
                      {job.location}
                    </span>
                    <span className="font-black text-[#0B1D3A]">{job.compensation}</span>
                    <span>
                      Prefers FARE:{" "}
                      <strong className="font-bold text-[#0B1D3A]">{job.preferredCourse}</strong>
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-3.5">
                    {job.highlights.map((hl) => (
                      <span
                        key={hl}
                        className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#5A6B82] bg-[#F8FAFD] border border-[#0B1D3A]/[0.04] px-3 py-1 rounded-[4px]"
                      >
                        <CheckCircle2 size={12} className="text-[#10B981] shrink-0" />
                        {hl}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2.5 shrink-0">
                  <button
                    type="button"
                    onClick={() => onApplyCareer(job.role)}
                    className="relative overflow-hidden group/cta px-6 py-3 rounded-[8px] text-white text-xs font-bold flex items-center gap-2 luxury-shadow-float hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 cursor-pointer whitespace-nowrap"
                    style={{ background: `linear-gradient(135deg, ${GOLD_MID} 0%, ${GOLD} 100%)` }}
                  >
                    <span className="absolute -inset-y-2 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition-all duration-700 group-hover/cta:left-[130%] group-hover/cta:opacity-100" />
                    <span className="relative">Apply Now</span>
                    <ArrowRight size={14} className="relative" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
