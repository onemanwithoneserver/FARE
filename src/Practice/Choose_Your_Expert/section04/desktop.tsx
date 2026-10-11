import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, ChevronDown, Check, X, SlidersHorizontal } from "lucide-react";
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
    <div className="w-full flex flex-col gap-3 font-['Outfit']">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.99 }}
              className={`relative text-left p-3.5 rounded-[18px] transition-all duration-300 cursor-pointer overflow-hidden border ${
                isActive
                  ? "bg-gradient-to-br from-[#0B1D3A] via-[#122B54] to-[#0B1D3A] text-white border-[#C99A2E]/60 shadow-md ring-1 ring-[#C99A2E]/25"
                  : "bg-white text-[#0B1D3A] border-[#E6EBF3] hover:border-[#CBD5E1] shadow-2xs"
              }`}
            >
              <HoverGlow accent={a} />
              
              <div
                className={`absolute top-0 inset-x-0 h-[2.5px] transition-opacity duration-300 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
                style={{ background: "linear-gradient(90deg, #C99A2E, #E4C46A, #C99A2E)" }}
              />

              <div className="relative z-10 flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-9 h-9 rounded-[10px] flex items-center justify-center transition-all duration-300 text-white ${
                      isActive
                        ? "bg-[#C99A2E] shadow-sm"
                        : "bg-[#0B1D3A]"
                    }`}
                  >
                    <TabIcon size={17} strokeWidth={2.2} />
                  </div>
                  <div>
                    <span
                      className={`text-[10px] font-medium uppercase tracking-[0.14em] block ${
                        isActive ? "text-[#E0B550]" : "text-[#7B8DAA]"
                      }`}
                    >
                      {tab.eyebrow}
                    </span>
                    <h3
                      className={`text-[16px] font-medium tracking-tight leading-snug ${
                        isActive ? "text-white" : "text-[#0B1D3A]"
                      }`}
                    >
                      {tab.label}
                    </h3>
                  </div>
                </div>

                <div
                  className={`px-2 py-0.5 rounded-full text-[10.5px] font-medium flex items-center gap-1.5 transition-all ${
                    isActive
                      ? "bg-[#C99A2E]/20 text-[#F5C451] border border-[#C99A2E]/40"
                      : "bg-[#F3F6FB] text-[#7B8DAA] border border-[#E6EBF3]"
                  }`}
                >
                  {isActive && (
                    <span className="w-3.5 h-3.5 rounded-full bg-[#10B981] text-white flex items-center justify-center">
                      <Check size={8} strokeWidth={3} />
                    </span>
                  )}
                  <span>{isActive ? "Active View" : "Switch View"}</span>
                </div>
              </div>

              <p
                className={`relative z-10 text-[12px] leading-relaxed font-normal ${
                  isActive ? "text-white/80" : "text-[#5A6B82]"
                }`}
              >
                {tab.description}
              </p>
            </motion.button>
          );
        })}
      </div>

      <div className="w-full bg-white rounded-[18px] border border-[#E6EBF3] p-3 shadow-xs relative z-20 flex flex-col gap-2.5">
        <div className="flex flex-col md:flex-row items-center gap-2.5">
          <div className="relative flex-1 w-full">
            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-[6px] bg-[#0B1D3A] text-white flex items-center justify-center pointer-events-none">
              <Search size={12} />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={SEARCH_PLACEHOLDERS[viewMode]}
              className="w-full h-9.5 pl-10 pr-9 rounded-[11px] bg-[#F8FAFD] border border-[#E6EBF3] hover:border-[#CBD5E1] focus:bg-white focus:border-[#C99A2E] text-[13px] font-medium text-[#0B1D3A] placeholder-[#8A9BB3] outline-none transition-all font-['Outfit']"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange("")}
                aria-label="Clear search"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#E2E8F0] hover:bg-[#CBD5E1] text-[#475569] flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={10} strokeWidth={2.5} />
              </button>
            )}
          </div>

          <div className="relative w-full md:w-auto shrink-0" ref={dropdownRef}>
            <button
              type="button"
              aria-haspopup="listbox"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
              className="w-full md:w-auto flex items-center justify-between gap-2.5 h-9.5 px-3 rounded-[11px] bg-[#F8FAFD] hover:bg-[#F0F4FA] border border-[#E6EBF3] hover:border-[#CBD5E1] text-[#0B1D3A] transition-all cursor-pointer shadow-2xs"
            >
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-[5px] bg-[#C99A2E] text-white flex items-center justify-center shrink-0">
                  <SlidersHorizontal size={11} />
                </span>
                <span className="text-[11px] font-medium text-[#7B8DAA] uppercase tracking-wider">
                  Sort:
                </span>
                <span className="w-5 h-5 rounded-[5px] bg-[#0B1D3A] text-white flex items-center justify-center shrink-0">
                  <ActiveIcon size={11} className="text-white" />
                </span>
                <span className="text-[12.5px] font-medium text-[#0B1D3A]">
                  {activeOption.label}
                </span>
              </div>
              <ChevronDown
                size={13}
                className={`text-[#7B8DAA] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute right-0 top-full mt-1.5 w-full md:w-72 bg-white rounded-[16px] border border-[#E6EBF3] shadow-xl p-1.5 z-50 flex flex-col gap-1"
                  role="listbox"
                >
                  <div className="px-2.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-[#7B8DAA] border-b border-[#F0F4FA] mb-0.5 flex items-center justify-between">
                    <span>Sort Options</span>
                    <span className="text-[9.5px] text-[#C99A2E] font-medium">5 Criteria</span>
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
                        className={`w-full flex items-center justify-between p-2 rounded-[10px] transition-all text-left cursor-pointer ${
                          isSelected
                            ? "bg-[#FFFDF7] text-[#0B1D3A] border border-[#C99A2E]/50"
                            : "hover:bg-[#F8FAFD] text-[#475569]"
                        }`}
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="w-5 h-5 rounded-[5px] bg-[#0B1D3A] text-white flex items-center justify-center shrink-0">
                            <Icon size={11} className="text-white" />
                          </span>
                          <div className="min-w-0">
                            <span className="block text-[12px] font-medium truncate leading-tight">
                              {option.label}
                            </span>
                            <span className="block text-[10px] text-[#7B8DAA] truncate font-normal">
                              {option.caption}
                            </span>
                          </div>
                        </div>
                        {isSelected && (
                          <span className="w-4 h-4 rounded-full bg-[#10B981] text-white flex items-center justify-center shrink-0">
                            <Check size={8} strokeWidth={3} />
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
