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
import type { CareersViewProps } from "./desktop";

const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

const cardAccents = [
  "linear-gradient(90deg, #3B82F6, #1D4ED8)",
  `linear-gradient(90deg, ${GOLD_MID}, ${GOLD})`,
  "linear-gradient(90deg, #10B981, #059669)",
  "linear-gradient(90deg, #8B5CF6, #6D28D9)",
];

export default function CareersMobile({ onApplyCareer }: CareersViewProps) {
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
      className="w-full py-12 px-5 bg-white border-b border-[#0B1D3A]/[0.06] font-['Outfit'] relative overflow-hidden scroll-mt-[96px] fare-noise-overlay"
    >
      <div className="relative z-10">
        <SectionHeader
          compact
          eyebrow="06 · Join Our Growth Engine"
          title="Careers & Open Positions"
        />

        {/* Modern Filter Dropdown for Mobile */}
        <div ref={dropdownRef} className="relative mb-5 w-full">
          <button
            type="button"
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-[8px] bg-white/90 backdrop-blur-xl border border-[#0B1D3A]/[0.08] active:border-[#C99A2E] text-xs font-bold text-[#0B1D3A] luxury-shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C99A2E]/30 transition-all duration-300"
            aria-expanded={isDropdownOpen}
            aria-haspopup="listbox"
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-[4px] bg-[#C99A2E]/10 flex items-center justify-center text-[#C99A2E]">
                <SlidersHorizontal className="w-3.5 h-3.5" />
              </div>
              <div className="flex items-center gap-1.5 text-left">
                <span className="text-[11px] font-bold text-[#7B8DAA]">Department:</span>
                <span className="font-black text-[#0B1D3A] text-xs tracking-tight">
                  {careerDept === "All" ? "All Departments" : careerDept}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-[#F8FAFD] text-[#5A6B82] border border-[#0B1D3A]/[0.08]">
                {getDeptCount(careerDept)} Open
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-[#7B8DAA] transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180 text-[#C99A2E]" : ""
                }`}
              />
            </div>
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 6, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 4, scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-0 right-0 top-full mt-1.5 bg-white/95 backdrop-blur-xl rounded-[4px] border border-[#0B1D3A]/[0.08] luxury-shadow-float p-1.5 z-50 overflow-hidden"
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

                <div className="flex flex-col gap-0.5 max-h-[260px] overflow-y-auto">
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

        <motion.div layout className="flex flex-col gap-4">
          <AnimatePresence mode="popLayout">
            {filteredCareers.map((job, idx) => (
              <motion.div
                key={job.id}
                layout
                initial={{ opacity: 0, y: 14, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96, y: 8 }}
                transition={{ duration: 0.35, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/90 backdrop-blur-xl rounded-[4px] border border-[#0B1D3A]/[0.08] p-5 luxury-shadow-float flex flex-col gap-3.5 relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] opacity-80"
                  style={{ background: cardAccents[idx % cardAccents.length] }}
                />

                <div>
                  <div className="flex flex-wrap items-center gap-1.5 mb-2">
                    <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#0B1D3A] bg-[#F8FAFD] border border-[#0B1D3A]/[0.08] px-2 py-0.5 rounded-[4px]">
                      {job.department}
                    </span>
                    <span className="text-[9px] font-bold text-[#059669] bg-[#10B981]/[0.08] border border-[#10B981]/20 px-2 py-0.5 rounded-[4px]">
                      {job.openings} Openings
                    </span>
                  </div>

                  <h3 className="text-[16px] font-black text-[#0B1D3A] leading-snug tracking-tight">
                    {job.role}
                  </h3>

                  <div className="flex flex-col gap-1 text-[12px] text-[#5A6B82] font-medium mt-2">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} className="text-[#C99A2E]" strokeWidth={2.5} />
                      {job.location} · {job.type}
                    </span>
                    <span className="font-black text-[#0B1D3A]">{job.compensation}</span>
                    <span>
                      Prefers FARE:{" "}
                      <strong className="font-bold text-[#0B1D3A]">{job.preferredCourse}</strong>
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {job.highlights.map((hl) => (
                      <span
                        key={hl}
                        className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#5A6B82] bg-[#F8FAFD] border border-[#0B1D3A]/[0.04] px-2.5 py-0.5 rounded-[4px]"
                      >
                        <CheckCircle2 size={10} className="text-[#10B981] shrink-0" />
                        {hl}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.button
                  type="button"
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onApplyCareer(job.role)}
                  className="relative overflow-hidden group/cta w-full py-2.5 rounded-[8px] text-white text-xs font-bold flex items-center justify-center gap-2 luxury-shadow-float cursor-pointer transition-all duration-300"
                  style={{ background: `linear-gradient(135deg, ${GOLD_MID} 0%, ${GOLD} 100%)` }}
                >
                  <span className="relative">Apply Now</span>
                  <ArrowRight size={13} className="relative" />
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
