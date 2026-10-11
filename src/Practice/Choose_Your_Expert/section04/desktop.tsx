import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpDown, Search, ChevronDown, Check, X } from "lucide-react";
import {
  VIEW_TABS,
  SEARCH_PLACEHOLDERS,
  SORT_OPTIONS_BY_MODE,
  type ViewMode,
} from "./data";

export interface ToolbarProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

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
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setIsOpen(false);
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

  // Close the dropdown when switching tabs so options never mismatch the mode.
  useEffect(() => setIsOpen(false), [viewMode]);

  const sortOptions = SORT_OPTIONS_BY_MODE[viewMode];
  const activeOption = sortOptions.find((o) => o.label === sortBy) || sortOptions[0];
  const ActiveIcon = activeOption.icon;
  const activeTab = VIEW_TABS.find((t) => t.id === viewMode)!;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white rounded-[22px] border border-[#E6EBF3] p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative z-30 flex flex-col gap-3.5"
    >
      {/* Row 1: Tabs + Sort */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Segmented tabs */}
        <div
          role="tablist"
          aria-label="Browse mode"
          className="relative flex items-center p-1 rounded-[16px] bg-[#F3F6FB] border border-[#E6EBF3]"
        >
          {VIEW_TABS.map((tab) => {
            const isActive = tab.id === viewMode;
            const TabIcon = tab.icon;
            return (
              <button
                key={tab.id}
                id={`cye-tab-${tab.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="cye-results"
                onClick={() => onViewModeChange(tab.id)}
                className={`relative flex items-center gap-2 h-10 px-4 rounded-[12px] text-[13px] font-extrabold tracking-tight transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/60 ${
                  isActive ? "text-white" : "text-[#5A6B82] hover:text-[#0B1D3A]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="cye-tab-pill"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    className="absolute inset-0 rounded-[12px] shadow-[0_8px_18px_-6px_rgba(11,29,58,0.45)]"
                    style={{ background: "linear-gradient(120deg, #0B1D3A 0%, #1A3463 100%)" }}
                  />
                )}
                <TabIcon size={15} strokeWidth={2.4} className={`relative z-10 ${isActive ? "text-[#D5AA45]" : ""}`} />
                <span className="relative z-10 whitespace-nowrap">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Sort dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            id="cye-sort-trigger"
            onClick={() => setIsOpen((o) => !o)}
            className={`flex items-center gap-2.5 px-3.5 py-2 rounded-[14px] border transition-all duration-200 cursor-pointer ${
              isOpen
                ? "bg-white border-[#C99A2E] shadow-[0_6px_20px_rgba(201,154,46,0.18)] ring-2 ring-[#C99A2E]/25"
                : "bg-gradient-to-r from-white to-[#F8FAFD] border-[#E2E8F0] hover:border-[#C99A2E]/60 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
            }`}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
          >
            <div
              className="w-7 h-7 rounded-[10px] flex items-center justify-center shrink-0 transition-colors"
              style={{ backgroundColor: activeOption.bg, color: activeOption.color }}
            >
              <ActiveIcon size={14} />
            </div>
            <div className="flex flex-col text-left leading-tight">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#7B8DAA]">Sort By</span>
              <span className="text-[13px] font-black text-[#0B1D3A] tracking-tight whitespace-nowrap">{activeOption.label}</span>
            </div>
            <ChevronDown
              size={15}
              className={`text-[#7B8DAA] ml-1 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#C99A2E]" : ""}`}
            />
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.96 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                style={{ transformOrigin: "top right" }}
                className="absolute right-0 mt-2.5 w-[330px] bg-white/98 backdrop-blur-xl rounded-[20px] border border-[#E6EBF3] shadow-[0_25px_60px_-15px_rgba(11,29,58,0.22),0_0_0_1px_rgba(201,154,46,0.08)] p-2 z-50 overflow-hidden"
                role="listbox"
                aria-labelledby="cye-sort-trigger"
              >
                <div className="flex items-center justify-between px-3 py-2 border-b border-[#E6EBF3]/70 mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <ArrowUpDown size={12} className="text-[#C99A2E]" />
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#0B1D3A]">
                      Sort {activeTab.label}
                    </span>
                  </div>
                </div>

                  <div className="flex flex-col gap-1">
                    {sortOptions.map((opt, idx) => {
                      const isSelected = opt.label === activeOption.label;
                      const ItemIcon = opt.icon;
                      return (
                        <motion.button
                          key={opt.label}
                          initial={{ opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.03, duration: 0.18 }}
                          type="button"
                          role="option"
                          aria-selected={isSelected}
                          onClick={() => {
                            onSortChange(opt.label);
                            setIsOpen(false);
                          }}
                          className={`w-full flex items-center justify-between p-2.5 rounded-[14px] text-left transition-colors cursor-pointer group ${
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
                                    isSelected ? "font-black text-[#0B1D3A]" : "font-bold text-[#334155] group-hover:text-[#0B1D3A]"
                                  }`}
                                >
                                  {opt.label}
                                </span>
                                <span
                                  className="text-[9px] font-extrabold uppercase px-1.5 rounded-full tracking-wide"
                                  style={{ backgroundColor: opt.bg, color: opt.color }}
                                >
                                  {opt.tag}
                                </span>
                              </div>
                              <span className="text-[11px] font-medium text-[#7B8DAA] truncate mt-0.5">{opt.caption}</span>
                            </div>
                          </div>
                          {isSelected && (
                            <div className="w-5 h-5 rounded-full bg-[#C99A2E] text-white flex items-center justify-center shrink-0 ml-2">
                              <Check size={12} strokeWidth={3} />
                            </div>
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      {/* Row 2: Search */}
      <div className="relative w-full group/search">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7B8DAA] group-focus-within/search:text-[#C99A2E] transition-colors"
          size={16}
        />
        <input
          id="cye-search-input"
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={SEARCH_PLACEHOLDERS[viewMode]}
          aria-label={SEARCH_PLACEHOLDERS[viewMode]}
          className="w-full h-12 pl-11 pr-10 bg-[#F8F9FC] focus:bg-white rounded-[14px] border border-[#E6EBF3] focus:border-[#C99A2E] text-[13.5px] font-medium text-[#0B1D3A] placeholder-[#7B8DAA] outline-none transition-all shadow-inner focus:shadow-none focus:ring-4 focus:ring-[#C99A2E]/12"
        />
        <AnimatePresence>
          {searchQuery && (
            <motion.button
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              type="button"
              onClick={() => onSearchChange("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#E6EBF3] hover:bg-[#CBD5E1] text-[#475569] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Clear search"
            >
              <X size={12} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
