import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpDown, ChevronDown, Search, Check, X } from "lucide-react";
import { data } from "./data";
import { Section } from "../../ui";

interface Props {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  totalCount?: number;
}

export default function Mobile({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  totalCount,
}: Props) {
  const s = data;
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
            placeholder="Search by name, expertise..."
            className="w-full h-11 pl-10 pr-9 bg-[#F8F9FC] focus:bg-white rounded-[14px] border border-[#E6EBF3] focus:border-[#C99A2E] text-[13px] font-medium text-[#0B1D3A] placeholder-[#7B8DAA] outline-none transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#E6EBF3] text-[#475569] flex items-center justify-center"
              aria-label="Clear search"
            >
              <X size={12} />
            </button>
          )}
        </div>

        {/* Results & Sort Trigger */}
        <div className="flex items-center justify-between bg-[#F8F9FC] p-3 rounded-[12px] border border-[#E6EBF3]">
          <span className="text-[13px] font-bold text-[#0B1D3A]">
            {totalCount !== undefined
              ? `${totalCount} ${totalCount === 1 ? "Expert" : "Experts"} Found`
              : s.expertsFound}
          </span>

          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] bg-white border border-[#E6EBF3] text-[12px] font-bold text-[#0B1D3A] shadow-xs active:bg-[#F1F5F9] transition-colors"
          >
            <ArrowUpDown size={12} className="text-[#C99A2E]" />
            <span className="max-w-[120px] truncate">{sortBy}</span>
            <ChevronDown size={14} className="text-[#7B8DAA]" />
          </button>
        </div>
      </motion.div>

      {/* Mobile Sort Bottom Sheet */}
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

            {/* Bottom Sheet Modal */}
            <motion.div
              ref={sheetRef}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg bg-white rounded-t-[24px] p-5 shadow-2xl z-10 border-t border-[#E6EBF3]"
            >
              <div className="w-10 h-1 bg-[#E2E8F0] rounded-full mx-auto mb-4" />

              <div className="flex items-center justify-between pb-3 border-b border-[#E6EBF3] mb-2">
                <div className="flex items-center gap-2">
                  <ArrowUpDown size={16} className="text-[#C99A2E]" />
                  <h3 className="text-[15px] font-black text-[#0B1D3A]">Sort Experts By</h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-[#F1F5F9] text-[#64748B] flex items-center justify-center"
                >
                  <X size={15} />
                </button>
              </div>

              <div className="flex flex-col divide-y divide-[#F1F5F9]">
                {s.sortByOptions.map((opt) => {
                  const isSelected = opt === sortBy;
                  return (
                    <button
                      key={opt}
                      onClick={() => {
                        onSortChange(opt);
                        setIsOpen(false);
                      }}
                      className={`w-full flex items-center justify-between py-3.5 px-2 text-[14px] text-left transition-colors ${
                        isSelected
                          ? "font-bold text-[#0B1D3A]"
                          : "font-medium text-[#475569] active:text-[#0B1D3A]"
                      }`}
                    >
                      <span>{opt}</span>
                      {isSelected ? (
                        <div className="w-5 h-5 rounded-full bg-[#C99A2E] text-white flex items-center justify-center shadow-xs">
                          <Check size={12} strokeWidth={3} />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-[#CBD5E1]" />
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
