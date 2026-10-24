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
    <Section tone="white" mobile ariaLabel="Browse experts and scenarios" className="!py-2.5">
      <div className="flex flex-col gap-2.5 font-['Outfit']">
        <div className="w-full flex justify-center items-center py-1">
          <div
            role="tablist"
            aria-label="Browse mode"
            className="inline-flex items-center p-1 rounded-full bg-[#081528] border border-[#142642] shadow-[0_4px_18px_rgba(8,21,40,0.22)] relative"
          >
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
                  className={`relative px-4 py-1.5 rounded-full text-[13.5px] font-bold tracking-tight transition-colors duration-200 flex items-center gap-1.5 cursor-pointer select-none z-10 ${
                    isActive ? "text-white" : "text-[#8297B0] hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeMobileTabPill"
                      className="absolute inset-0 rounded-full bg-white/[0.12] border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] backdrop-blur-xs"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}

                  <TabIcon
                    size={14}
                    strokeWidth={2.4}
                    className={`relative z-10 ${isActive ? "text-[#E4C46A]" : "text-[#6C839F]"}`}
                  />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 rounded-[4px] bg-[#0B1D3A] text-white flex items-center justify-center pointer-events-none">
              <Search size={10} strokeWidth={2.4} />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={SEARCH_PLACEHOLDERS[viewMode]}
              className="w-full h-9 pl-9 pr-7 rounded-[10px] bg-transparent border border-[#CBD5E1] text-[12px] font-medium text-[#0B1D3A] placeholder-[#8A9BB3] outline-none focus:border-[#C99A2E] font-['Outfit']"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-4.5 h-4.5 rounded-full bg-[#E2E8F0] text-[#475569] flex items-center justify-center cursor-pointer"
              >
                <X size={10} strokeWidth={2.5} />
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="h-9 px-2.5 rounded-[10px] bg-transparent border border-[#CBD5E1] text-[#0B1D3A] flex items-center gap-1.5 shrink-0 cursor-pointer"
          >
            <span
              className="w-4.5 h-4.5 rounded-[4px] flex items-center justify-center text-white shrink-0"
              style={{ background: activeOption.color }}
            >
              <ActiveIcon size={10} strokeWidth={2.4} />
            </span>
            <ChevronDown size={13} className="text-[#7B8DAA]" />
          </button>
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
              className="relative z-10 w-full bg-white rounded-t-[22px] p-4 border-t border-[#E6EBF3] max-h-[80vh] overflow-y-auto"
            >
              <div className="w-10 h-1 bg-[#CBD5E1] rounded-full mx-auto mb-3" />
              <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-[#F0F4FA]">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-[6px] bg-[#C99A2E] text-white flex items-center justify-center shadow-xs">
                    <SlidersHorizontal size={12} strokeWidth={2.4} />
                  </span>
                  <h3 className="text-[14.5px] font-medium text-[#0B1D3A]">Sort Options</h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-6 h-6 rounded-full bg-[#F3F6FB] flex items-center justify-center text-[#5A6B82] cursor-pointer"
                >
                  <X size={13} />
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
                      className={`w-full flex items-center justify-between p-2.5 rounded-[12px] text-left transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#FFFDF7] border border-[#C99A2E] text-[#0B1D3A] shadow-xs"
                          : "bg-white border border-[#E6EBF3] text-[#475569]"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className="w-7 h-7 rounded-[8px] flex items-center justify-center shrink-0 text-white"
                          style={{ background: option.color }}
                        >
                          <Icon size={14} strokeWidth={2.4} />
                        </span>
                        <div>
                          <span className="text-[12.5px] font-medium block">{option.label}</span>
                          <span className="text-[10.5px] text-[#7B8DAA] block font-normal">{option.caption}</span>
                        </div>
                      </div>
                      {isSelected && (
                        <span className="w-4 h-4 rounded-full bg-[#10B981] text-white flex items-center justify-center">
                          <Check size={10} strokeWidth={3} />
                        </span>
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
