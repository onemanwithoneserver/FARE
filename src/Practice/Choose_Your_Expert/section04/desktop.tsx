import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, ChevronDown, Check, X, ArrowUpDown, Users, Layers } from "lucide-react";
import {
  SEARCH_PLACEHOLDERS,
  SORT_OPTIONS_BY_MODE,
  type ViewMode,
} from "./data";
import { ACCENTS, FOCUS_RING, accentGradient } from "../../ui";

export interface ToolbarProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  activeFilters?: string[];
  onRemoveFilter?: (option: string) => void;
  onClearFilters?: () => void;
  resultCount?: number;
}

const TABS: { id: ViewMode; label: string; tooltip: string; icon: typeof Users }[] = [
  {
    id: "experts",
    label: "Experts By",
    tooltip: "Browse verified mentors by segment & experience",
    icon: Users,
  },
  {
    id: "scenarios",
    label: "Scenarios By",
    tooltip: "Practice realistic sales objection simulations",
    icon: Layers,
  },
];

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
  const isExperts = viewMode === "experts";

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

  useEffect(() => {
    setIsOpen(false);
  }, [viewMode]);

  const sortOptions = SORT_OPTIONS_BY_MODE[viewMode];
  const activeOption = sortOptions.find((o) => o.label === sortBy) || sortOptions[0];

  return (
    <div className="w-full font-['Outfit'] flex flex-col gap-5">
      {/* Centered Tab Controls (No Background, Increased Tab Size) */}
      <div className="w-full flex justify-center items-center">
        <div
          role="tablist"
          aria-label="Browse mode"
          className="flex items-center gap-8 sm:gap-12 relative"
        >
          {TABS.map((tab) => {
            const isActive = tab.id === viewMode;
            const TabIcon = tab.icon;

            return (
              <div key={tab.id} className="relative group/tab">
                <button
                  type="button"
                  id={`cye-tab-${tab.id}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="cye-results"
                  onClick={() => onViewModeChange(tab.id)}
                  className={`relative pb-3 pt-1.5 px-4 text-[17px] sm:text-[18px] lg:text-[19px] font-bold flex items-center gap-2.5 transition-colors cursor-pointer select-none bg-transparent ${FOCUS_RING} ${
                    isActive
                      ? "text-[#0B1D3A]"
                      : "text-[#64748B] hover:text-[#0B1D3A]"
                  }`}
                >
                  <TabIcon
                    size={22}
                    strokeWidth={2.4}
                    className={`transition-colors ${
                      isActive ? "text-[#C99A2E]" : "text-[#7B8DAA] group-hover/tab:text-[#0B1D3A]"
                    }`}
                  />
                  <span>{tab.label}</span>

                  {/* Active Underline Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute -bottom-1 left-0 right-0 h-[3.5px] bg-[#C99A2E] rounded-full shadow-[0_2px_8px_rgba(201,154,46,0.35)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>

                {/* Floating Tooltip */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 hidden group-hover/tab:flex flex-col items-center z-50 pointer-events-none">
                  <div className="w-2 h-2 bg-[#0B1D3A] rotate-45 -mb-1" />
                  <span className="bg-[#0B1D3A] text-white text-[11px] font-semibold px-2.5 py-1 rounded-[6px] shadow-lg whitespace-nowrap">
                    {tab.tooltip}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Row: Search Bar and Sort Action Button (No Background) */}
      <div className="w-full flex items-center gap-3 relative z-20">
        {/* Search Bar */}
        <div className="relative flex-1 group/search">
          <label htmlFor="cye-search" className="sr-only">
            {isExperts ? "Search experts" : "Search scenarios"}
          </label>
          <span
            aria-hidden="true"
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7B8DAA] pointer-events-none transition-colors group-focus-within/search:text-[#0B1D3A]"
          >
            <Search size={16} strokeWidth={2.4} />
          </span>
          <input
            id="cye-search"
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={SEARCH_PLACEHOLDERS[viewMode]}
            className="w-full h-11 pl-10.5 pr-9 rounded-[10px] bg-transparent border border-[#CBD5E1] hover:border-[#94A3B8] focus:border-[#C99A2E] focus:ring-2 focus:ring-[#C99A2E]/15 text-[14px] font-semibold text-[#0B1D3A] placeholder-[#8A9BB3] outline-none transition-all [&::-webkit-search-cancel-button]:hidden"
          />

          {searchQuery && (
            <div className="absolute right-2.5 top-1/2 -translate-y-1/2 group/clear">
              <button
                type="button"
                onClick={() => onSearchChange("")}
                aria-label="Clear search"
                className="w-5 h-5 rounded-full bg-[#E2E8F0] hover:bg-[#CBD5E1] text-[#475569] flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={11} strokeWidth={2.6} />
              </button>
              <div className="absolute right-0 top-full mt-2 hidden group-hover/clear:flex flex-col items-end z-50 pointer-events-none">
                <div className="w-2 h-2 bg-[#0B1D3A] rotate-45 -mb-1 mr-2" />
                <span className="bg-[#0B1D3A] text-white text-[10.5px] font-medium px-2 py-0.5 rounded-[4px] shadow-md whitespace-nowrap">
                  Clear search
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Sort Action Button with Tooltip & Dropdown */}
        <div className="relative shrink-0 group/sort" ref={dropdownRef}>
          <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            aria-label={`Sort by ${activeOption.label}`}
            onClick={() => setIsOpen((p) => !p)}
            className={`h-11 px-4 rounded-[10px] border bg-transparent text-[13.5px] font-bold text-[#0B1D3A] flex items-center gap-2 transition-all cursor-pointer ${FOCUS_RING} ${
              isOpen
                ? "border-[#C99A2E] ring-2 ring-[#C99A2E]/15 shadow-xs"
                : "border-[#CBD5E1] hover:border-[#94A3B8]"
            }`}
          >
            <ArrowUpDown size={15} strokeWidth={2.4} className="text-[#C99A2E]" />
            <span>Sort: {activeOption.label}</span>
            <ChevronDown
              size={14}
              strokeWidth={2.4}
              className={`text-[#7B8DAA] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            />
          </button>

          {/* Sort Tooltip (shown on hover when dropdown is closed) */}
          {!isOpen && (
            <div className="absolute right-0 top-full mt-2 hidden group-hover/sort:flex flex-col items-end z-50 pointer-events-none">
              <div className="w-2 h-2 bg-[#0B1D3A] rotate-45 -mb-1 mr-4" />
              <span className="bg-[#0B1D3A] text-white text-[11px] font-semibold px-2.5 py-1 rounded-[6px] shadow-lg whitespace-nowrap">
                Sort results by experience, price, rating or availability
              </span>
            </div>
          )}

          {/* Sort Dropdown Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 6, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.97 }}
                transition={{ duration: 0.16 }}
                role="listbox"
                aria-label="Sort options"
                className="absolute right-0 top-full mt-2 w-[280px] bg-white rounded-[16px] border border-[#E2E8F0] shadow-[0_20px_45px_-14px_rgba(11,29,58,0.25)] p-1.5 z-50 flex flex-col gap-1"
              >
                <div className="px-2.5 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#7B8DAA] flex items-center justify-between border-b border-[#F1F5F9] pb-1.5">
                  <span>Sort Options</span>
                  <span className="text-[#C99A2E] font-bold">{sortOptions.length} criteria</span>
                </div>
                {sortOptions.map((option, i) => {
                  const selected = option.label === activeOption.label;
                  const Icon = option.icon;
                  const a = ACCENTS[(i + 2) % ACCENTS.length];
                  return (
                    <button
                      key={option.label}
                      type="button"
                      role="option"
                      aria-selected={selected}
                      onClick={() => {
                        onSortChange(option.label);
                        setIsOpen(false);
                      }}
                      className={`w-full flex items-center justify-between gap-2.5 p-2 rounded-[10px] border text-left cursor-pointer transition-all ${
                        selected
                          ? "bg-[#FFFBF0] border-[#C99A2E]/40"
                          : "border-transparent hover:bg-[#F8FAFD]"
                      }`}
                    >
                      <span className="flex items-center gap-2.5 min-w-0">
                        <span
                          aria-hidden="true"
                          className="w-7 h-7 rounded-[7px] flex items-center justify-center text-white shrink-0"
                          style={{ background: accentGradient(a) }}
                        >
                          <Icon size={13} strokeWidth={2.4} />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[12.5px] font-bold text-[#0B1D3A] truncate">
                            {option.label}
                          </span>
                          <span className="block text-[11px] font-medium text-[#7B8DAA] truncate">
                            {option.caption}
                          </span>
                        </span>
                      </span>
                      {selected && (
                        <span className="w-4 h-4 rounded-full bg-[#10B981] text-white flex items-center justify-center shrink-0">
                          <Check size={10} strokeWidth={3.2} />
                        </span>
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
  );
}
