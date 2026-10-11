import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, ChevronDown, Check, X, Sparkles } from "lucide-react";
import {
  VIEW_TABS,
  SEARCH_PLACEHOLDERS,
  SORT_OPTIONS_BY_MODE,
  type ViewMode,
} from "./data";
import { ACCENTS, HoverGlow } from "../../ui";

export interface ToolbarProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

const QUICK_FILTERS: Record<ViewMode, string[]> = {
  experts: ["Residential", "Negotiation", "Price Objection", "Villas", "Commercial"],
  scenarios: ["Price Objection", "Margin Defense", "Investor ROI", "Site Visit", "First-Time Buyer"],
};

export default function Desktop({
  viewMode,
  onViewModeChange,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
}: ToolbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [viewMode]);

  const sortOptions = SORT_OPTIONS_BY_MODE[viewMode];
  const activeOption = sortOptions.find((o) => o.label === sortBy) || sortOptions[0];
  const ActiveIcon = activeOption.icon;

  return (
    <div className="w-full flex flex-col gap-5 font-['Outfit']">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {VIEW_TABS.map((tab, idx) => {
          const isActive = tab.id === viewMode;
          const TabIcon = tab.icon;
          const a = ACCENTS[idx % ACCENTS.length];

          return (
            <motion.button
              key={tab.id}
              type="button"
              id={`cye-tab-${tab.id}`}
              role="tab"
              aria-selected={isActive}
              onClick={() => onViewModeChange(tab.id)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.99 }}
              className={`relative text-left p-5 rounded-[22px] transition-all duration-300 cursor-pointer overflow-hidden border ${
                isActive
                  ? "bg-gradient-to-br from-[#0B1D3A] via-[#122B54] to-[#0B1D3A] text-white border-[#C99A2E]/60 shadow-[0_16px_36px_-12px_rgba(11,29,58,0.35)] ring-2 ring-[#C99A2E]/25"
                  : "bg-white text-[#0B1D3A] border-[#E6EBF3] hover:border-[#CBD5E1] shadow-[0_6px_20px_rgba(11,29,58,0.03)]"
              }`}
            >
              <HoverGlow accent={a} />
              
              <div
                className={`absolute top-0 inset-x-0 h-[3px] transition-opacity duration-300 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
                style={{ background: "linear-gradient(90deg, #C99A2E, #E4C46A, #C99A2E)" }}
              />

              <div className="relative z-10 flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-[14px] flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-tr from-[#C99A2E] to-[#F0D58C] text-[#0B1D3A] shadow-md shadow-[#C99A2E]/25"
                        : "bg-[#F3F6FB] text-[#1E3A74] border border-[#E6EBF3]"
                    }`}
                  >
                    <TabIcon size={20} strokeWidth={2.4} />
                  </div>
                  <div>
                    <span
                      className={`text-[10.5px] font-black uppercase tracking-[0.16em] block ${
                        isActive ? "text-[#E0B550]" : "text-[#7B8DAA]"
                      }`}
                    >
                      {tab.eyebrow}
                    </span>
                    <h3
                      className={`text-[18px] font-black tracking-tight leading-snug ${
                        isActive ? "text-white" : "text-[#0B1D3A]"
                      }`}
                    >
                      {tab.label}
                    </h3>
                  </div>
                </div>

                <div
                  className={`px-2.5 py-1 rounded-full text-[11px] font-black flex items-center gap-1.5 transition-all ${
                    isActive
                      ? "bg-[#C99A2E]/20 text-[#F5C451] border border-[#C99A2E]/40"
                      : "bg-[#F3F6FB] text-[#7B8DAA] border border-[#E6EBF3]"
                  }`}
                >
                  {isActive && <Check size={12} strokeWidth={3} className="text-[#F5C451]" />}
                  <span>{isActive ? "Selected View" : "Click to View"}</span>
                </div>
              </div>

              <p
                className={`relative z-10 text-[13px] leading-relaxed font-medium ${
                  isActive ? "text-white/75" : "text-[#5A6B82]"
                }`}
              >
                {tab.description}
              </p>
            </motion.button>
          );
        })}
      </div>

      <div className="w-full bg-white rounded-[22px] border border-[#E6EBF3] p-4 sm:p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative z-20 flex flex-col gap-3.5">
        <div className="flex flex-col md:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7B8DAA] pointer-events-none"
              strokeWidth={2.4}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={SEARCH_PLACEHOLDERS[viewMode]}
              className="w-full h-12 pl-11 pr-10 rounded-[14px] bg-[#F8FAFD] border border-[#E6EBF3] hover:border-[#CBD5E1] focus:bg-white focus:border-[#C99A2E] focus:ring-2 focus:ring-[#C99A2E]/20 text-[14px] font-medium text-[#0B1D3A] placeholder-[#8A9BB3] outline-none transition-all font-['Outfit']"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#E2E8F0] hover:bg-[#CBD5E1] text-[#475569] flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={12} strokeWidth={2.5} />
              </button>
            )}
          </div>

          <div className="relative w-full md:w-auto shrink-0" ref={dropdownRef}>
            <button
              type="button"
              aria-haspopup="listbox"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
              className="w-full md:w-auto flex items-center justify-between gap-3 h-12 px-4 rounded-[14px] bg-[#F8FAFD] hover:bg-[#F0F4FA] border border-[#E6EBF3] hover:border-[#CBD5E1] text-[#0B1D3A] transition-all cursor-pointer shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/60"
            >
              <div className="flex items-center gap-2">
                <span className="text-[12px] font-bold text-[#7B8DAA] uppercase tracking-wider">
                  Sort:
                </span>
                <span
                  className="w-6 h-6 rounded-[6px] flex items-center justify-center shrink-0"
                  style={{ background: activeOption.bg }}
                >
                  <ActiveIcon size={13} style={{ color: activeOption.color }} strokeWidth={2.5} />
                </span>
                <span className="text-[13.5px] font-extrabold text-[#0B1D3A]">
                  {activeOption.label}
                </span>
              </div>
              <ChevronDown
                size={15}
                className={`text-[#7B8DAA] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                strokeWidth={2.4}
              />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.16, ease: "easeOut" }}
                  className="absolute right-0 top-full mt-2 w-full md:w-72 bg-white rounded-[18px] border border-[#E6EBF3] shadow-[0_18px_48px_-10px_rgba(11,29,58,0.22)] p-2 z-50 flex flex-col gap-1"
                  role="listbox"
                >
                  <div className="px-3 py-2 text-[10.5px] font-black uppercase tracking-[0.14em] text-[#7B8DAA] border-b border-[#F0F4FA] mb-1">
                    Sort Options
                  </div>
                  {sortOptions.map((option) => {
                    const isSelected = option.label === sortBy;
                    const Icon = option.icon;
                    return (
                      <button
                        key={option.label}
                        type="button"
                        role="option"
                        aria-selected={isSelected}
                        onClick={() => {
                          onSortChange(option.label);
                          setIsOpen(false);
                        }}
                        className={`w-full flex items-center justify-between p-2.5 rounded-[12px] transition-all text-left cursor-pointer ${
                          isSelected
                            ? "bg-[#FFFDF7] text-[#0B1D3A] border border-[#C99A2E]/40"
                            : "hover:bg-[#F8FAFD] text-[#475569]"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span
                            className="w-7 h-7 rounded-[8px] flex items-center justify-center shrink-0"
                            style={{ background: option.bg }}
                          >
                            <Icon size={14} style={{ color: option.color }} strokeWidth={2.4} />
                          </span>
                          <div className="min-w-0">
                            <span className="block text-[13px] font-bold truncate leading-tight">
                              {option.label}
                            </span>
                            <span className="block text-[10.5px] text-[#7B8DAA] truncate">
                              {option.caption}
                            </span>
                          </div>
                        </div>
                        {isSelected && <Check size={14} className="text-[#C99A2E] shrink-0" strokeWidth={3} />}
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap pt-1 border-t border-[#F0F4FA]">
          <span className="text-[11px] font-black uppercase tracking-[0.12em] text-[#7B8DAA] flex items-center gap-1 mr-1">
            <Sparkles size={12} className="text-[#C99A2E]" />
            Quick:
          </span>
          {QUICK_FILTERS[viewMode].map((kw) => (
            <button
              key={kw}
              type="button"
              onClick={() => onSearchChange(kw)}
              className="text-[11.5px] font-bold px-2.5 py-1 rounded-[8px] bg-[#F8FAFD] hover:bg-[#EEF2F9] text-[#475569] hover:text-[#0B1D3A] border border-[#E6EBF3] transition-colors cursor-pointer"
            >
              {kw}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
