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
      className="w-full py-14 sm:py-16 px-8 lg:px-10 bg-white border-b border-[#E2E8F0] relative overflow-hidden scroll-mt-[72px]"
    >
      <motion.div
        animate={{ x: [0, 18, 0], y: [0, 22, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] left-[-5%] w-[380px] h-[380px] rounded-full blur-[130px] pointer-events-none z-0 opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(201,154,46,0.16) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1160px] mx-auto w-full relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <SectionHeader
            eyebrow="06 · Join Our Growth Engine"
            title="Careers & Open Positions"
          />

          {/* Modern Filter Dropdown */}
          <div ref={dropdownRef} className="relative mb-2 md:mb-8 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-[8px] bg-white border border-[#E2E8F0] hover:border-[#C99A2E] text-xs font-semibold text-[#0B1D3A] shadow-2xs hover:shadow-xs transition-all duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C99A2E]/30"
              aria-expanded={isDropdownOpen}
              aria-haspopup="listbox"
            >
              <div className="w-6 h-6 rounded-[6px] bg-[#C99A2E]/10 flex items-center justify-center text-[#A87A18]">
                <SlidersHorizontal className="w-3.5 h-3.5" />
              </div>

              <div className="flex items-center gap-1.5 text-left">
                <span className="text-[#64748B] text-[11px] font-medium hidden sm:inline">
                  Department:
                </span>
                <span className="font-bold text-[#0B1D3A] text-xs">
                  {careerDept === "All" ? "All Departments" : careerDept}
                </span>
              </div>

              <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-[#F1F5F9] text-[#475569] border border-[#E2E8F0]">
                {getDeptCount(careerDept)} Openings
              </span>

              <ChevronDown
                className={`w-3.5 h-3.5 text-[#64748B] transition-transform duration-200 ${
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
                  transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute right-0 top-full mt-2 w-72 sm:w-80 bg-white rounded-[10px] border border-[#E2E8F0] shadow-[0_16px_36px_rgba(11,29,58,0.14)] p-1.5 z-50 overflow-hidden"
                >
                  <div className="flex items-center justify-between px-3 py-2 border-b border-[#F1F5F9] mb-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#64748B]">
                        Filter by Department
                      </span>
                    </div>
                    {careerDept !== "All" && (
                      <button
                        type="button"
                        onClick={() => {
                          setCareerDept("All");
                          setIsDropdownOpen(false);
                        }}
                        className="text-[10px] font-bold text-[#C99A2E] hover:text-[#A87A18] flex items-center gap-0.5 cursor-pointer"
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
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-[6px] text-xs transition-colors cursor-pointer text-left ${
                            isActive
                              ? "bg-[#C99A2E]/10 text-[#0B1D3A] font-bold"
                              : "text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0B1D3A]"
                          }`}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <div
                              className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                                isActive
                                  ? "bg-[#C99A2E] text-white"
                                  : "border border-[#CBD5E1] bg-white"
                              }`}
                            >
                              {isActive && <Check className="w-2.5 h-2.5" strokeWidth={3} />}
                            </div>
                            <span className="truncate">
                              {dept === "All" ? "All Departments" : dept}
                            </span>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0 ml-2">
                            <span
                              className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                                isActive
                                  ? "bg-[#C99A2E]/20 text-[#A87A18]"
                                  : "bg-[#F1F5F9] text-[#64748B]"
                              }`}
                            >
                              {count} {count === 1 ? "opening" : "openings"}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <motion.div layout className="flex flex-col gap-3.5">
          <AnimatePresence mode="popLayout">
            {filteredCareers.map((job, idx) => (
              <motion.div
                key={job.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: 8 }}
                whileHover={{ y: -3 }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-white rounded-[8px] border border-[#E2E8F0] hover:border-[#C99A2E]/60 p-5 shadow-2xs hover:shadow-[0_14px_32px_rgba(11,29,58,0.09)] transition-colors duration-200 flex flex-col lg:flex-row lg:items-center justify-between gap-4 relative overflow-hidden group"
              >
                <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-gradient-to-b from-[#C99A2E] to-[#A87A18] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0B1D3A] bg-[#F0F4FF] border border-[#0B1D3A]/10 px-2.5 py-0.5 rounded-[4px]">
                      {job.department}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-[4px]">
                      {job.openings} Openings
                    </span>
                    <span className="text-[11px] font-semibold text-[#64748B]">
                      · {job.type}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-[#0B1D3A] tracking-tight group-hover:text-[#C99A2E] transition-colors">
                    {job.role}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-[#64748B] font-medium mt-1.5">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} className="text-[#C99A2E]" />
                      {job.location}
                    </span>
                    <span className="font-bold text-[#0B1D3A]">{job.compensation}</span>
                    <span>
                      Prefers FARE:{" "}
                      <strong className="text-[#0B1D3A]">{job.preferredCourse}</strong>
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {job.highlights.map((hl) => (
                      <span
                        key={hl}
                        className="inline-flex items-center gap-1 text-[11px] font-medium text-[#475569] bg-[#F8FAFD] border border-[#E2E8F0] px-2.5 py-0.5 rounded-[4px]"
                      >
                        <CheckCircle2 size={11} className="text-emerald-600 shrink-0" />
                        {hl}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2.5 shrink-0">
                  <button
                    type="button"
                    onClick={() => onApplyCareer(job.role)}
                    className="relative overflow-hidden group/cta px-5 py-2.5 rounded-[8px] text-white text-xs font-bold flex items-center gap-2 shadow-[0_4px_12px_rgba(201,154,46,0.3)] hover:shadow-[0_8px_20px_rgba(201,154,46,0.42)] hover:-translate-y-0.5 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
                    style={{ background: "linear-gradient(135deg, #C99A2E 0%, #A87A18 100%)" }}
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
