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
      className="w-full py-10 px-4 bg-white border-b border-[#E2E8F0] scroll-mt-[96px]"
    >
      <SectionHeader
        compact
        eyebrow="06 · Join Our Growth Engine"
        title="Careers & Open Positions"
      />

      {/* Modern Filter Dropdown for Mobile */}
      <div ref={dropdownRef} className="relative mb-4 w-full">
        <button
          type="button"
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-[8px] bg-white border border-[#E2E8F0] active:border-[#C99A2E] text-xs font-semibold text-[#0B1D3A] shadow-2xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C99A2E]/30"
          aria-expanded={isDropdownOpen}
          aria-haspopup="listbox"
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-[5px] bg-[#C99A2E]/10 flex items-center justify-center text-[#A87A18]">
              <SlidersHorizontal className="w-3.5 h-3.5" />
            </div>
            <div className="flex items-center gap-1.5 text-left">
              <span className="text-[11px] text-[#64748B]">Department:</span>
              <span className="font-bold text-[#0B1D3A] text-xs">
                {careerDept === "All" ? "All Departments" : careerDept}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-[#F1F5F9] text-[#475569] border border-[#E2E8F0]">
              {getDeptCount(careerDept)} Open
            </span>
            <ChevronDown
              className={`w-3.5 h-3.5 text-[#64748B] transition-transform duration-200 ${
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
              transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-0 right-0 top-full mt-1.5 bg-white rounded-[10px] border border-[#E2E8F0] shadow-[0_16px_36px_rgba(11,29,58,0.16)] p-1.5 z-50 overflow-hidden"
            >
              <div className="flex items-center justify-between px-3 py-2 border-b border-[#F1F5F9] mb-1">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#64748B]">
                  Filter by Department
                </span>
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

                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-semibold shrink-0 ml-2 ${
                          isActive
                            ? "bg-[#C99A2E]/20 text-[#A87A18]"
                            : "bg-[#F1F5F9] text-[#64748B]"
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

      <motion.div layout className="flex flex-col gap-3.5">
        <AnimatePresence mode="popLayout">
          {filteredCareers.map((job, idx) => (
            <motion.div
              key={job.id}
              layout
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.35, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-[8px] border border-[#E2E8F0] p-4 shadow-2xs flex flex-col gap-3 relative overflow-hidden"
            >
              <div>
                <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                  <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#0B1D3A] bg-[#F0F4FF] px-2 py-0.5 rounded-[4px]">
                    {job.department}
                  </span>
                  <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-[4px]">
                    {job.openings} Openings
                  </span>
                </div>

                <h3 className="text-sm font-extrabold text-[#0B1D3A] leading-snug">
                  {job.role}
                </h3>

                <div className="flex flex-col gap-1 text-[11px] text-[#64748B] font-medium mt-1.5">
                  <span className="flex items-center gap-1">
                    <MapPin size={11} className="text-[#C99A2E]" />
                    {job.location} · {job.type}
                  </span>
                  <span className="font-bold text-[#0B1D3A]">{job.compensation}</span>
                  <span>
                    Prefers FARE:{" "}
                    <strong className="text-[#0B1D3A]">{job.preferredCourse}</strong>
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  {job.highlights.map((hl) => (
                    <span
                      key={hl}
                      className="inline-flex items-center gap-1 text-[10px] font-medium text-[#475569] bg-[#F8FAFD] border border-[#E2E8F0] px-2 py-0.5 rounded-[4px]"
                    >
                      <CheckCircle2 size={10} className="text-emerald-600 shrink-0" />
                      {hl}
                    </span>
                  ))}
                </div>
              </div>

              <motion.button
                type="button"
                whileTap={{ scale: 0.98 }}
                onClick={() => onApplyCareer(job.role)}
                className="relative overflow-hidden group/cta w-full py-2.5 rounded-[8px] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                style={{ background: "linear-gradient(135deg, #C99A2E 0%, #A87A18 100%)" }}
              >
                <span className="relative">Apply Now</span>
                <ArrowRight size={13} className="relative" />
              </motion.button>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
