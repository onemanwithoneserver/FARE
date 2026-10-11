import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Search, Check, X, SlidersHorizontal } from "lucide-react";
import { Section } from "../../ui";
import { VIEW_TABS, SEARCH_PLACEHOLDERS, SORT_OPTIONS_BY_MODE } from "./data";
import type { ToolbarProps } from "./desktop";


export default function Mobile({
  viewMode,
  onViewModeChange,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
}: ToolbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  const sortOptions = SORT_OPTIONS_BY_MODE[viewMode];
  const activeOption = sortOptions.find((o) => o.label === sortBy) || sortOptions[0];
  const ActiveIcon = activeOption.icon;

  return (
    <Section tone="white" mobile ariaLabel="Browse experts and scenarios" className="!py-3">
      <div className="flex flex-col gap-3 font-['Outfit']">
        <div className="grid grid-cols-2 gap-2.5">
          {VIEW_TABS.map((tab) => {
            const isActive = tab.id === viewMode;
            const TabIcon = tab.icon;

            return (
              <button
                key={tab.id}
                type="button"
                id={`cye-tab-mobile-${tab.id}`}
                role="tab"
                aria-selected={isActive}
                onClick={() => onViewModeChange(tab.id)}
                className={`relative p-3.5 rounded-[18px] text-left transition-all border flex flex-col justify-between min-h-[96px] cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-br from-[#0B1D3A] via-[#122B54] to-[#0B1D3A] text-white border-[#C99A2E]/60 shadow-md ring-1 ring-[#C99A2E]/30"
                    : "bg-white text-[#0B1D3A] border-[#E6EBF3]"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <div
                    className={`w-8 h-8 rounded-[10px] flex items-center justify-center ${
                      isActive
                        ? "bg-gradient-to-tr from-[#C99A2E] to-[#F0D58C] text-[#0B1D3A]"
                        : "bg-[#F3F6FB] text-[#1E3A74]"
                    }`}
                  >
                    <TabIcon size={16} strokeWidth={2.4} />
                  </div>
                  {isActive && (
                    <span className="w-5 h-5 rounded-full bg-[#C99A2E]/25 border border-[#C99A2E]/50 flex items-center justify-center">
                      <Check size={11} strokeWidth={3} className="text-[#F5C451]" />
                    </span>
                  )}
                </div>

                <div>
                  <span
                    className={`text-[9.5px] font-black uppercase tracking-wider block ${
                      isActive ? "text-[#E0B550]" : "text-[#7B8DAA]"
                    }`}
                  >
                    {tab.eyebrow}
                  </span>
                  <span
                    className={`text-[15px] font-black leading-tight block ${
                      isActive ? "text-white" : "text-[#0B1D3A]"
                    }`}
                  >
                    {tab.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="bg-white rounded-[18px] border border-[#E6EBF3] p-3 shadow-sm flex flex-col gap-2.5">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7B8DAA] pointer-events-none"
                strokeWidth={2.2}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder={SEARCH_PLACEHOLDERS[viewMode]}
                className="w-full h-11 pl-9 pr-8 rounded-[12px] bg-[#F8FAFD] border border-[#E6EBF3] text-[13px] font-semibold text-[#0B1D3A] placeholder-[#8A9BB3] outline-none focus:border-[#C99A2E] focus:bg-white font-['Outfit']"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#E2E8F0] text-[#475569] flex items-center justify-center cursor-pointer"
                >
                  <X size={11} strokeWidth={2.5} />
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="h-11 px-3 rounded-[12px] bg-[#F8FAFD] border border-[#E6EBF3] text-[#0B1D3A] flex items-center gap-1.5 shrink-0 cursor-pointer shadow-2xs"
            >
              <ActiveIcon size={14} style={{ color: activeOption.color }} strokeWidth={2.4} />
              <ChevronDown size={14} className="text-[#7B8DAA]" />
            </button>
          </div>

        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-xs"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="relative z-10 w-full bg-white rounded-t-[24px] p-5 border-t border-[#E6EBF3] max-h-[80vh] overflow-y-auto"
            >
              <div className="w-12 h-1 bg-[#CBD5E1] rounded-full mx-auto mb-4" />
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#F0F4FA]">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal size={16} className="text-[#C99A2E]" />
                  <h3 className="text-[16px] font-black text-[#0B1D3A]">Sort Options</h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-7 h-7 rounded-full bg-[#F3F6FB] flex items-center justify-center text-[#5A6B82] cursor-pointer"
                >
                  <X size={15} />
                </button>
              </div>
              <div className="flex flex-col gap-1.5">
                {sortOptions.map((option) => {
                  const isSelected = option.label === sortBy;
                  const Icon = option.icon;
                  return (
                    <button
                      key={option.label}
                      onClick={() => {
                        onSortChange(option.label);
                        setIsOpen(false);
                      }}
                      className={`w-full flex items-center justify-between p-3 rounded-[14px] text-left transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#FFFDF7] border border-[#C99A2E] text-[#0B1D3A] shadow-xs"
                          : "bg-white border border-[#E6EBF3] text-[#475569]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="w-8 h-8 rounded-[10px] flex items-center justify-center shrink-0"
                          style={{ background: option.bg }}
                        >
                          <Icon size={16} style={{ color: option.color }} strokeWidth={2.4} />
                        </span>
                        <div>
                          <span className="text-[13.5px] font-bold block">{option.label}</span>
                          <span className="text-[11px] text-[#7B8DAA] block">{option.caption}</span>
                        </div>
                      </div>
                      {isSelected && <Check size={16} className="text-[#C99A2E]" strokeWidth={3} />}
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
