import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpDown, Search, ChevronDown, Check, X } from "lucide-react";
import { data } from "./data";

interface Props {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  totalCount?: number;
}

export default function Desktop({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  totalCount,
}: Props) {
  const s = data;
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full flex items-center justify-between bg-white rounded-[20px] border border-[#E6EBF3] px-4 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative z-20"
    >
      {/* Search Bar */}
      <div className="relative flex-1 max-w-[340px]">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7B8DAA]" size={16} />
        <input 
          type="text" 
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by name, expertise, role..."
          className="w-full h-10 pl-10 pr-9 bg-[#F8F9FC] focus:bg-white rounded-[12px] border border-[#E6EBF3] focus:border-[#C99A2E] text-[13px] font-medium text-[#0B1D3A] placeholder-[#7B8DAA] outline-none transition-all shadow-inner"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#E6EBF3] hover:bg-[#CBD5E1] text-[#475569] flex items-center justify-center transition-colors"
            title="Clear search"
          >
            <X size={12} />
          </button>
        )}
      </div>

      {/* Results Count & Sort Dropdown */}
      <div className="flex items-center gap-4 text-[14px]">
        {totalCount !== undefined && (
          <span className="text-[12px] font-bold text-[#7B8DAA] bg-[#F1F5F9] px-3 py-1.5 rounded-full">
            {totalCount} {totalCount === 1 ? "Expert" : "Experts"} Found
          </span>
        )}

        <div className="flex items-center gap-2">
          <span className="font-bold text-[#475569] flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
            <ArrowUpDown size={13} className="text-[#C99A2E]" />
            Sort by:
          </span>

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-[10px] text-[13px] font-semibold border transition-all cursor-pointer ${
                isOpen
                  ? "bg-white border-[#C99A2E] text-[#0B1D3A] shadow-sm ring-2 ring-[#C99A2E]/20"
                  : "bg-[#F8F9FC] border-[#E6EBF3] text-[#0B1D3A] hover:bg-white hover:border-[#C99A2E]"
              }`}
              aria-haspopup="listbox"
              aria-expanded={isOpen}
            >
              <span>{sortBy}</span>
              <ChevronDown
                size={14}
                className={`text-[#7B8DAA] transition-transform duration-200 ${isOpen ? "rotate-180 text-[#C99A2E]" : ""}`}
              />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute right-0 mt-2 w-56 bg-white rounded-[14px] border border-[#E6EBF3] shadow-[0_12px_32px_rgba(11,29,58,0.12)] py-1.5 z-50 overflow-hidden"
                  role="listbox"
                >
                  <div className="px-3 py-1.5 border-b border-[#E6EBF3]/60 mb-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#7B8DAA]">
                      Select Order
                    </span>
                  </div>
                  {s.sortByOptions.map((opt) => {
                    const isSelected = opt === sortBy;
                    return (
                      <button
                        key={opt}
                        type="button"
                        role="option"
                        aria-selected={isSelected}
                        onClick={() => {
                          onSortChange(opt);
                          setIsOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 text-[13px] font-medium transition-colors text-left cursor-pointer ${
                          isSelected
                            ? "bg-[#C99A2E]/10 text-[#0B1D3A] font-bold"
                            : "text-[#475569] hover:bg-[#F8FAFD] hover:text-[#0B1D3A]"
                        }`}
                      >
                        <span>{opt}</span>
                        {isSelected && (
                          <Check size={14} className="text-[#C99A2E] stroke-[2.5]" />
                        )}
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
