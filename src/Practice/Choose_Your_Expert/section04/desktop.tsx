import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowUpDown, 
  Search, 
  ChevronDown, 
  Check, 
  X, 
  Sparkles, 
  Award, 
  BadgePercent, 
  Zap, 
  Flame 
} from "lucide-react";

interface Props {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  totalCount?: number;
}

const SORT_OPTIONS = [
  {
    label: "Most Relevant",
    caption: "Best match for practice & scenario",
    tag: "Recommended",
    icon: Sparkles,
    color: "#C99A2E",
    bg: "rgba(201, 154, 46, 0.12)",
  },
  {
    label: "Experience",
    caption: "Senior real estate professionals first",
    tag: "Seniority",
    icon: Award,
    color: "#2563EB",
    bg: "rgba(37, 99, 235, 0.1)",
  },
  {
    label: "Lowest Price",
    caption: "Budget friendly sessions from ₹599",
    tag: "Economy",
    icon: BadgePercent,
    color: "#059669",
    bg: "rgba(5, 150, 105, 0.1)",
  },
  {
    label: "Earliest Availability",
    caption: "Slots open today and tomorrow",
    tag: "Fastest",
    icon: Zap,
    color: "#7C3AED",
    bg: "rgba(124, 58, 237, 0.1)",
  },
  {
    label: "Most Sessions Completed",
    caption: "Highest volume of role-play mocks",
    tag: "Top Rated",
    icon: Flame,
    color: "#EA580C",
    bg: "rgba(234, 88, 12, 0.1)",
  },
];

export default function Desktop({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  totalCount,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const activeOption = SORT_OPTIONS.find((o) => o.label === sortBy) || SORT_OPTIONS[0];
  const ActiveIcon = activeOption.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full flex items-center justify-between bg-white rounded-[22px] border border-[#E6EBF3] px-5 py-3.5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative z-30"
    >
      {/* Modern Search Input */}
      <div className="relative flex-1 max-w-[340px]">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7B8DAA]" size={16} />
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by name, expertise, role..."
          className="w-full h-11 pl-10 pr-9 bg-[#F8F9FC] focus:bg-white rounded-[14px] border border-[#E6EBF3] focus:border-[#C99A2E] text-[13px] font-medium text-[#0B1D3A] placeholder-[#7B8DAA] outline-none transition-all shadow-inner focus:ring-3 focus:ring-[#C99A2E]/15"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#E6EBF3] hover:bg-[#CBD5E1] text-[#475569] flex items-center justify-center transition-colors cursor-pointer"
            title="Clear search"
          >
            <X size={12} />
          </button>
        )}
      </div>

      {/* Right Controls: Count & Modern Sort Dropdown */}
      <div className="flex items-center gap-4">
        {totalCount !== undefined && (
          <span className="text-[12px] font-extrabold text-[#0B1D3A] bg-[#F1F5F9] px-3.5 py-1.5 rounded-full border border-[#E2E8F0]">
            <span className="text-[#C99A2E]">{totalCount}</span> {totalCount === 1 ? "Expert" : "Experts"} Found
          </span>
        )}

        <div className="relative" ref={dropdownRef}>
          {/* Modern Trigger Pill */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`flex items-center gap-2.5 px-3.5 py-2 rounded-[14px] border transition-all duration-200 cursor-pointer ${
              isOpen
                ? "bg-white border-[#C99A2E] shadow-[0_6px_20px_rgba(201,154,46,0.18)] ring-2 ring-[#C99A2E]/25"
                : "bg-gradient-to-r from-white to-[#F8FAFD] border-[#E2E8F0] hover:border-[#C99A2E]/60 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
            }`}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
          >
            <div 
              className="w-7 h-7 rounded-[10px] flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
              style={{ backgroundColor: activeOption.bg, color: activeOption.color }}
            >
              <ActiveIcon size={14} />
            </div>

            <div className="flex flex-col text-left leading-tight">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#7B8DAA]">
                Sort By
              </span>
              <span className="text-[13px] font-black text-[#0B1D3A] tracking-tight">
                {activeOption.label}
              </span>
            </div>

            <ChevronDown
              size={15}
              className={`text-[#7B8DAA] ml-1 transition-transform duration-250 ${
                isOpen ? "rotate-180 text-[#C99A2E]" : ""
              }`}
            />
          </button>

          {/* Luxury Dropdown Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.96 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="absolute right-0 mt-2.5 w-[330px] bg-white/98 backdrop-blur-xl rounded-[20px] border border-[#E6EBF3] shadow-[0_25px_60px_-15px_rgba(11,29,58,0.22),0_0_0_1px_rgba(201,154,46,0.08)] p-2 z-50 overflow-hidden"
                role="listbox"
              >
                {/* Header */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-[#E6EBF3]/70 mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <ArrowUpDown size={12} className="text-[#C99A2E]" />
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#0B1D3A]">
                      Select Order
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-[#C99A2E] bg-[#C99A2E]/10 px-2 py-0.5 rounded-full">
                    5 Options
                  </span>
                </div>

                {/* Option List */}
                <div className="flex flex-col gap-1">
                  {SORT_OPTIONS.map((opt) => {
                    const isSelected = opt.label === sortBy;
                    const ItemIcon = opt.icon;
                    return (
                      <button
                        key={opt.label}
                        type="button"
                        role="option"
                        aria-selected={isSelected}
                        onClick={() => {
                          onSortChange(opt.label);
                          setIsOpen(false);
                        }}
                        className={`w-full flex items-center justify-between p-2.5 rounded-[14px] text-left transition-all cursor-pointer group ${
                          isSelected
                            ? "bg-gradient-to-r from-[#C99A2E]/12 via-[#C99A2E]/6 to-transparent border border-[#C99A2E]/30"
                            : "hover:bg-[#F8FAFD] border border-transparent"
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className="w-9 h-9 rounded-[12px] flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                            style={{ backgroundColor: opt.bg, color: opt.color }}
                          >
                            <ItemIcon size={16} />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <div className="flex items-center gap-2">
                              <span
                                className={`text-[13px] leading-snug tracking-tight truncate ${
                                  isSelected
                                    ? "font-black text-[#0B1D3A]"
                                    : "font-bold text-[#334155] group-hover:text-[#0B1D3A]"
                                }`}
                              >
                                {opt.label}
                              </span>
                              <span
                                className="text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded-full tracking-wide"
                                style={{ backgroundColor: opt.bg, color: opt.color }}
                              >
                                {opt.tag}
                              </span>
                            </div>
                            <span className="text-[11px] font-medium text-[#7B8DAA] truncate mt-0.5">
                              {opt.caption}
                            </span>
                          </div>
                        </div>

                        {isSelected && (
                          <div className="w-5 h-5 rounded-full bg-[#C99A2E] text-white flex items-center justify-center shadow-xs shrink-0 ml-2">
                            <Check size={12} strokeWidth={3} />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
