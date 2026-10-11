import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, ChevronDown, Check, X, ArrowUpDown } from "lucide-react";
import {
  VIEW_TABS,
  SEARCH_PLACEHOLDERS,
  SORT_OPTIONS_BY_MODE,
  type ViewMode,
} from "./data";
import { ACCENTS, EASE, FOCUS_RING, HoverGlow, IconBadge, accentGradient } from "../../ui";

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

  const handleTabKey = (e: React.KeyboardEvent, idx: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = VIEW_TABS[(idx + (e.key === "ArrowRight" ? 1 : -1) + VIEW_TABS.length) % VIEW_TABS.length];
    onViewModeChange(next.id);
    document.getElementById(`cye-tab-${next.id}`)?.focus();
  };

  return (
    <div className="w-full flex flex-col gap-4 font-['Outfit']">
      <div role="tablist" aria-label="Browse mode" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {VIEW_TABS.map((tab, idx) => {
          const isActive = tab.id === viewMode;
          const a = ACCENTS[[2, 3][idx % 2]];

          return (
            <motion.button
              key={tab.id}
              type="button"
              id={`cye-tab-${tab.id}`}
              role="tab"
              aria-selected={isActive}
              aria-controls="cye-results"
              tabIndex={isActive ? 0 : -1}
              onClick={() => onViewModeChange(tab.id)}
              onKeyDown={(e) => handleTabKey(e, idx)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.3, ease: EASE }}
              className={`group relative text-left p-4 rounded-[16px] cursor-pointer overflow-hidden border transition-[box-shadow,border-color,background-color] duration-300 ${FOCUS_RING} ${
                isActive
                  ? "text-white border-[#C99A2E]/50 shadow-[0_20px_40px_-18px_rgba(11,29,58,0.55)]"
                  : "bg-white text-[#0B1D3A] border-[#E6EBF3] luxury-shadow-sm hover:border-[#CBD5E1] hover:shadow-[0_18px_36px_-20px_rgba(11,29,58,0.22)]"
              }`}
              style={
                isActive
                  ? { background: "linear-gradient(135deg, #0B1D3A 0%, #122A50 55%, #1B3A6B 100%)" }
                  : undefined
              }
            >
              {!isActive && <HoverGlow accent={a} />}
              {isActive && (
                <>
                  <span
                    aria-hidden="true"
                    className="absolute -top-12 -right-10 w-40 h-40 rounded-full blur-[48px] pointer-events-none"
                    style={{ background: "rgba(201,154,46,0.3)" }}
                  />
                  <span
                    aria-hidden="true"
                    className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#C99A2E] via-[#E4C46A] to-[#C99A2E]"
                  />
                </>
              )}

              <div className="relative z-10 flex items-center gap-4">
                <IconBadge icon={tab.icon} accent={isActive ? ACCENTS[1] : a} size="sm" />
                <div className="flex-1 min-w-0">
                  <span
                    className={`block text-[11px] font-bold uppercase tracking-[0.16em] mb-1 ${
                      isActive ? "text-[#E4C46A]" : "text-[#7B8DAA]"
                    }`}
                  >
                    {tab.eyebrow}
                  </span>
                  <h3 className="text-[18px] font-bold tracking-tight leading-tight">{tab.label}</h3>
                </div>
                <span
                  aria-hidden="true"
                  className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isActive ? "bg-[#10B981] text-white scale-100" : "bg-[#F3F6FB] border border-[#E6EBF3] scale-90"
                  }`}
                >
                  {isActive && <Check size={13} strokeWidth={3.2} />}
                </span>
              </div>

              <p
                className={`relative z-10 mt-3 text-[13px] leading-relaxed font-medium ${
                  isActive ? "text-white/75" : "text-[#5A6B82]"
                }`}
              >
                {tab.description}
              </p>
            </motion.button>
          );
        })}
      </div>

      <div className="w-full bg-white rounded-[16px] border border-[#E6EBF3] p-3 luxury-shadow-sm relative z-20 flex flex-col gap-3">
        <div className="flex flex-col md:flex-row items-stretch gap-3">
          <div className="relative flex-1 group/search">
            <label htmlFor="cye-search" className="sr-only">
              {isExperts ? "Search experts" : "Search scenarios"}
            </label>
            <span
              aria-hidden="true"
              className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-[8px] flex items-center justify-center text-white pointer-events-none transition-transform duration-300 group-focus-within/search:scale-105"
              style={{ background: accentGradient(ACCENTS[0]), boxShadow: `0 6px 14px -6px ${ACCENTS[0].glow}` }}
            >
              <Search size={15} strokeWidth={2.4} />
            </span>
            <input
              id="cye-search"
              type="search"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={SEARCH_PLACEHOLDERS[viewMode]}
              className="w-full h-12 pl-14 pr-11 rounded-[12px] bg-[#F8FAFD] border border-[#E6EBF3] hover:border-[#CBD5E1] focus:bg-white focus:border-[#C99A2E] focus:ring-4 focus:ring-[#C99A2E]/15 text-[14px] font-medium text-[#0B1D3A] placeholder-[#8A9BB3] outline-none transition-all [&::-webkit-search-cancel-button]:hidden"
            />
            <AnimatePresence>
              {searchQuery && (
                <motion.button
                  type="button"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={() => onSearchChange("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#E2E8F0] hover:bg-[#CBD5E1] text-[#475569] flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]"
                >
                  <X size={12} strokeWidth={2.6} />
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          <div className="relative shrink-0" ref={dropdownRef}>
            <button
              type="button"
              aria-haspopup="listbox"
              aria-expanded={isOpen}
              aria-label={`Sort by ${activeOption.label}`}
              onClick={() => setIsOpen((p) => !p)}
              className={`w-full md:w-auto h-12 flex items-center justify-between gap-3 pl-2.5 pr-3.5 rounded-[12px] border bg-[#F8FAFD] hover:bg-white transition-all cursor-pointer ${FOCUS_RING} ${
                isOpen ? "border-[#C99A2E] bg-white ring-4 ring-[#C99A2E]/15" : "border-[#E6EBF3] hover:border-[#CBD5E1]"
              }`}
            >
              <span className="flex items-center gap-2.5">
                <span
                  aria-hidden="true"
                  className="w-8 h-8 rounded-[8px] flex items-center justify-center text-white"
                  style={{ background: accentGradient(ACCENTS[1]), boxShadow: `0 6px 14px -6px ${ACCENTS[1].glow}` }}
                >
                  <ArrowUpDown size={15} strokeWidth={2.4} />
                </span>
                <span className="flex flex-col items-start leading-none">
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7B8DAA] mb-1">Sort by</span>
                  <span className="text-[13.5px] font-semibold text-[#0B1D3A]">{activeOption.label}</span>
                </span>
              </span>
              <ChevronDown
                size={16}
                aria-hidden="true"
                className={`text-[#7B8DAA] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.18, ease: EASE }}
                  role="listbox"
                  aria-label="Sort options"
                  className="absolute right-0 top-full mt-2 w-full md:w-[300px] bg-white rounded-[16px] border border-[#E6EBF3] shadow-[0_24px_48px_-16px_rgba(11,29,58,0.28)] p-2 z-50 flex flex-col gap-1"
                >
                  <div className="px-2.5 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#7B8DAA] flex items-center justify-between">
                    <span>Sort options</span>
                    <span className="text-[#C99A2E]">{sortOptions.length} criteria</span>
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
                        className={`w-full flex items-center justify-between gap-3 p-2 rounded-[12px] border text-left cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E] ${
                          selected
                            ? "bg-[#FFFBF0] border-[#C99A2E]/45"
                            : "border-transparent hover:bg-[#F8FAFD]"
                        }`}
                      >
                        <span className="flex items-center gap-3 min-w-0">
                          <span
                            aria-hidden="true"
                            className="w-8 h-8 rounded-[8px] flex items-center justify-center text-white shrink-0"
                            style={{ background: accentGradient(a) }}
                          >
                            <Icon size={14} strokeWidth={2.3} />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-[13px] font-semibold text-[#0B1D3A] truncate">{option.label}</span>
                            <span className="block text-[11.5px] font-medium text-[#7B8DAA] truncate">{option.caption}</span>
                          </span>
                        </span>
                        {selected && (
                          <span className="w-5 h-5 rounded-full bg-[#10B981] text-white flex items-center justify-center shrink-0">
                            <Check size={11} strokeWidth={3.2} />
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
    </div>
  );
}
