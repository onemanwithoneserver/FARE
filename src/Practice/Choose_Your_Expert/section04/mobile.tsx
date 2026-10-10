import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowUpDown, 
  ChevronDown, 
  Search, 
  Check, 
  X, 
  Sparkles, 
  Award, 
  BadgePercent, 
  Zap, 
  Flame 
} from "lucide-react";
import { Section } from "../../ui";

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

export default function Mobile({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  totalCount,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const activeOption = SORT_OPTIONS.find((o) => o.label === sortBy) || SORT_OPTIONS[0];
  const ActiveIcon = activeOption.icon;

  return (
    <Section tone="white" mobile ariaLabel="Sort Results" className="!py-2">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-2.5"
      >
        {/* Mobile Search Bar */}
        <div className="relative w-full">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7B8DAA]" size={16} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by name, expertise, role..."
            className="w-full h-11 pl-10 pr-9 bg-[#F8F9FC] focus:bg-white rounded-[14px] border border-[#E6EBF3] focus:border-[#C99A2E] text-[13px] font-medium text-[#0B1D3A] placeholder-[#7B8DAA] outline-none transition-all shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#E6EBF3] text-[#475569] flex items-center justify-center cursor-pointer"
              aria-label="Clear search"
            >
              <X size={12} />
            </button>
          )}
        </div>

        {/* Results & Modern Sort Trigger */}
        <div className="flex items-center justify-between bg-white p-3 rounded-[16px] border border-[#E6EBF3] shadow-xs">
          <div className="flex items-center gap-1.5">
            <span className="text-[13px] font-black text-[#0B1D3A]">
              {totalCount !== undefined ? totalCount : 5}
            </span>
            <span className="text-[12px] font-semibold text-[#7B8DAA]">
              {totalCount === 1 ? "Expert" : "Experts"} Found
            </span>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-[12px] bg-[#F8F9FC] hover:bg-white border border-[#E2E8F0] active:scale-95 transition-all cursor-pointer shadow-xs"
          >
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center"
              style={{ backgroundColor: activeOption.bg, color: activeOption.color }}
            >
              <ActiveIcon size={12} />
            </div>
            <span className="text-[12px] font-black text-[#0B1D3A] max-w-[110px] truncate">
              {sortBy}
            </span>
            <ChevronDown size={14} className="text-[#7B8DAA]" />
          </button>
        </div>
      </motion.div>

      {/* Modern Mobile Bottom Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end justify-center">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#0B1D3A]/60 backdrop-blur-xs"
            />

            {/* Bottom Sheet */}
            <motion.div
              ref={sheetRef}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg bg-white rounded-t-[26px] p-5 shadow-2xl z-10 border-t border-[#E6EBF3]"
            >
              <div className="w-10 h-1 bg-[#E2E8F0] rounded-full mx-auto mb-4" />

              <div className="flex items-center justify-between pb-3.5 border-b border-[#E6EBF3] mb-3">
                <div className="flex items-center gap-2">
                  <ArrowUpDown size={16} className="text-[#C99A2E]" />
                  <h3 className="text-[16px] font-black text-[#0B1D3A] tracking-tight">Sort Experts By</h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-[#F1F5F9] text-[#64748B] flex items-center justify-center cursor-pointer"
                >
                  <X size={15} />
                </button>
              </div>

              <div className="flex flex-col gap-2 max-h-[60vh] overflow-y-auto">
                {SORT_OPTIONS.map((opt) => {
                  const isSelected = opt.label === sortBy;
                  const ItemIcon = opt.icon;
                  return (
                    <button
                      key={opt.label}
                      onClick={() => {
                        onSortChange(opt.label);
                        setIsOpen(false);
                      }}
                      className={`w-full flex items-center justify-between p-3 rounded-[16px] text-left transition-all cursor-pointer ${
                        isSelected
                          ? "bg-gradient-to-r from-[#C99A2E]/12 via-[#C99A2E]/6 to-transparent border border-[#C99A2E]/30"
                          : "bg-[#F8FAFD] border border-[#E6EBF3]/60 active:bg-[#F1F5F9]"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className="w-10 h-10 rounded-[12px] flex items-center justify-center shrink-0"
                          style={{ backgroundColor: opt.bg, color: opt.color }}
                        >
                          <ItemIcon size={18} />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-[13px] leading-tight truncate ${
                                isSelected ? "font-black text-[#0B1D3A]" : "font-bold text-[#334155]"
                              }`}
                            >
                              {opt.label}
                            </span>
                            <span
                              className="text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded-full"
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

                      {isSelected ? (
                        <div className="w-5 h-5 rounded-full bg-[#C99A2E] text-white flex items-center justify-center shadow-xs shrink-0 ml-2">
                          <Check size={12} strokeWidth={3} />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-[#CBD5E1] shrink-0 ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
}
