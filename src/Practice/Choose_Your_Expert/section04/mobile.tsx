import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpDown, ChevronDown, Search, Check, X } from "lucide-react";
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
  const activeTab = VIEW_TABS.find((t) => t.id === viewMode)!;

  return (
    <Section tone="white" mobile ariaLabel="Browse experts and scenarios" className="!py-3">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-3"
      >
        <div
          role="tablist"
          aria-label="Browse mode"
          className="relative grid grid-cols-2 p-1 rounded-[16px] bg-[#F3F6FB] border border-[#E6EBF3]"
        >
          {VIEW_TABS.map((tab) => {
            const isActive = tab.id === viewMode;
            const TabIcon = tab.icon;
            return (
              <button
                key={tab.id}
                id={`cye-tab-mobile-${tab.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="cye-results"
                onClick={() => onViewModeChange(tab.id)}
                className={`relative flex items-center justify-center gap-2 h-11 rounded-[12px] text-[13px] font-extrabold transition-colors cursor-pointer active:scale-[0.98] ${
                  isActive ? "text-white" : "text-[#5A6B82]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="cye-tab-pill-mobile"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    className="absolute inset-0 rounded-[12px] shadow-[0_8px_18px_-6px_rgba(11,29,58,0.45)]"
                    style={{ background: "linear-gradient(120deg, #0B1D3A 0%, #1A3463 100%)" }}
                  />
                )}
                <TabIcon size={15} strokeWidth={2.4} className={`relative z-10 ${isActive ? "text-[#D5AA45]" : ""}`} />
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="relative w-full group/search">
          <Search
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7B8DAA] group-focus-within/search:text-[#C99A2E] transition-colors"
            size={16}
          />
          <input
            id="cye-search-input-mobile"
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={SEARCH_PLACEHOLDERS[viewMode]}
            aria-label={SEARCH_PLACEHOLDERS[viewMode]}
            className="w-full h-11 pl-10 pr-9 bg-[#F8F9FC] focus:bg-white rounded-[14px] border border-[#E6EBF3] focus:border-[#C99A2E] text-[13px] font-medium text-[#0B1D3A] placeholder-[#7B8DAA] outline-none transition-all shadow-inner focus:ring-4 focus:ring-[#C99A2E]/12"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#E6EBF3] text-[#475569] flex items-center justify-center cursor-pointer"
              aria-label="Clear search"
            >
              <X size={12} />
            </button>
          )}
        </div>

        <div className="flex items-center justify-end">
          <button
            type="button"
            id="cye-sort-trigger-mobile"
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2.5 px-3.5 py-2 rounded-[14px] bg-white border border-[#E2E8F0] active:scale-95 transition-all cursor-pointer shadow-xs hover:border-[#C99A2E]/50"
          >
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: activeOption.bg, color: activeOption.color }}
            >
              <ActiveIcon size={12} />
            </div>
            <div className="flex flex-col text-left leading-none">
              <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#7B8DAA]">Sort By</span>
              <span className="text-[12px] font-black text-[#0B1D3A] max-w-[130px] truncate">{activeOption.label}</span>
            </div>
            <ChevronDown size={14} className="text-[#7B8DAA] ml-0.5" />
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#0B1D3A]/60 backdrop-blur-xs"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              role="dialog"
              aria-modal="true"
              aria-label={`Sort ${activeTab.label}`}
              className="relative w-full max-w-lg bg-white rounded-t-[26px] p-5 pb-7 shadow-2xl z-10 border-t border-[#E6EBF3]"
            >
              <div className="w-10 h-1 bg-[#E2E8F0] rounded-full mx-auto mb-4" />
              <div className="flex items-center justify-between pb-3.5 border-b border-[#E6EBF3] mb-3">
                <div className="flex items-center gap-2">
                  <ArrowUpDown size={16} className="text-[#C99A2E]" />
                  <h3 className="text-[16px] font-black text-[#0B1D3A] tracking-tight">Sort {activeTab.label}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-[#F1F5F9] text-[#64748B] flex items-center justify-center cursor-pointer"
                  aria-label="Close"
                >
                  <X size={15} />
                </button>
              </div>

              <div role="listbox" className="flex flex-col gap-2 max-h-[60vh] overflow-y-auto">
                {sortOptions.map((opt) => {
                  const isSelected = opt.label === activeOption.label;
                  const ItemIcon = opt.icon;
                  return (
                    <button
                      key={opt.label}
                      type="button"
                      role="option"
                      aria-selected={isSelected}
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
                            <span className={`text-[13px] leading-tight truncate ${isSelected ? "font-black text-[#0B1D3A]" : "font-bold text-[#334155]"}`}>
                              {opt.label}
                            </span>
                            <span
                              className="text-[9px] font-extrabold uppercase px-1.5 rounded-full"
                              style={{ backgroundColor: opt.bg, color: opt.color }}
                            >
                              {opt.tag}
                            </span>
                          </div>
                          <span className="text-[11px] font-medium text-[#7B8DAA] truncate mt-0.5">{opt.caption}</span>
                        </div>
                      </div>
                      {isSelected ? (
                        <div className="w-5 h-5 rounded-full bg-[#C99A2E] text-white flex items-center justify-center shrink-0 ml-2">
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
