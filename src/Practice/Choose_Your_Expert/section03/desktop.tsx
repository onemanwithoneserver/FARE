import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, SlidersHorizontal, Check, RotateCcw } from "lucide-react";
import { data } from "./data";

export default function Desktop() {
  const s = data;
  const [openGroups, setOpenGroups] = useState<Set<string>>(
    new Set(["RE Segment"])
  );
  const [selectedFilters, setSelectedFilters] = useState<Set<string>>(
    new Set(["Residential"])
  );

  const toggleGroup = (name: string) => {
    setOpenGroups((prev) => {
      const next = new Set(prev);
      if (next.has(name)) {
        next.delete(name);
      } else {
        next.add(name);
      }
      return next;
    });
  };

  const toggleFilter = (option: string) => {
    setSelectedFilters((prev) => {
      const next = new Set(prev);
      if (next.has(option)) {
        next.delete(option);
      } else {
        next.add(option);
      }
      return next;
    });
  };

  const clearAll = () => {
    setSelectedFilters(new Set());
  };

  const totalActive = selectedFilters.size;

  return (
    <div className="w-full font-['Outfit'] select-none">
      <div className="bg-white rounded-[20px] border border-[#E6EBF3] shadow-[0_4px_24px_rgba(11,29,58,0.06)] overflow-hidden">
        <div
          className="relative flex items-center justify-between px-5 py-4 overflow-hidden"
          style={{
            background: "linear-gradient(115deg, rgb(11, 29, 58) 0%, rgb(18, 42, 80) 60%, rgb(25, 54, 98) 100%)",
          }}
        >
          <div className="relative flex items-center gap-3">
            <div className="w-9 h-9 rounded-[10px] flex items-center justify-center bg-white/[0.08] border border-white/15 shadow-inner shrink-0">
              <SlidersHorizontal
                size={16}
                strokeWidth={2.4}
                className="text-[#EAB308]"
                aria-hidden="true"
              />
            </div>
            <h3 className="text-[18px] font-bold text-white tracking-tight leading-none">
              Filters
            </h3>
          </div>

          {totalActive > 0 && (
            <button
              type="button"
              onClick={clearAll}
              className="relative flex items-center gap-1 text-[11px] font-medium text-white/80 hover:text-white bg-white/10 hover:bg-white/20 px-2 py-0.5 rounded-[6px] transition-all cursor-pointer"
            >
              <RotateCcw size={10} strokeWidth={2.4} aria-hidden="true" />
              Clear ({totalActive})
            </button>
          )}
        </div>

        <div className="px-5 py-2 max-h-[calc(100vh-220px)] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {s.filters.map((filter) => {
            const isOpen = openGroups.has(filter.name);

            return (
              <div
                key={filter.name}
                className="py-3.5 border-b border-[#F0F4FA] last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => toggleGroup(filter.name)}
                  className="flex items-center gap-1.5 cursor-pointer text-left group select-none focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-[12px] font-bold tracking-[0.12em] text-[#1E293B] group-hover:text-[#C99A2E] transition-colors uppercase">
                    {filter.name}
                  </span>
                  <ChevronDown
                    size={14}
                    strokeWidth={2.4}
                    className={`text-[#64748B] group-hover:text-[#1E293B] transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-1 pt-2 pb-0.5">
                        {filter.options.map((option) => {
                          const isSelected = selectedFilters.has(option);

                          return (
                            <button
                              type="button"
                              key={option}
                              onClick={() => toggleFilter(option)}
                              className="w-full flex items-center gap-2.5 py-1 text-left cursor-pointer group/item select-none focus:outline-none"
                              aria-pressed={isSelected}
                            >
                              <div
                                className={`w-4 h-4 rounded-[4px] flex items-center justify-center transition-all shrink-0 ${
                                  isSelected
                                    ? "bg-[#0B1D3A] border border-[#0B1D3A] text-white"
                                    : "border border-[#CBD5E1] bg-white group-hover/item:border-[#C99A2E]"
                                }`}
                              >
                                {isSelected && (
                                  <Check size={11} strokeWidth={3.2} className="text-white" />
                                )}
                              </div>

                              <span
                                className={`text-[12.5px] leading-snug transition-colors ${
                                  isSelected
                                    ? "text-[#0B1D3A] font-medium"
                                    : "text-[#5A6B82] font-normal group-hover/item:text-[#0B1D3A]"
                                }`}
                              >
                                {option}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
