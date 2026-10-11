import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, SlidersHorizontal, RotateCcw } from "lucide-react";
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
      <div className="bg-white rounded-[20px] border border-[#0B1D3A]/[0.08] shadow-[0_6px_24px_rgb(0,0,0,0.03)] overflow-hidden">
        <div
          className="relative flex items-center justify-between px-4 py-2.5 overflow-hidden"
          style={{
            background: "linear-gradient(120deg, rgb(11, 29, 58) 0%, rgb(21, 49, 92) 100%)",
          }}
        >
          <div className="absolute -top-8 -right-6 w-28 h-28 rounded-full bg-[#C99A2E]/25 blur-2xl pointer-events-none" />
          
          <div className="relative flex items-center gap-2">
            <div className="w-7 h-7 rounded-[7px] flex items-center justify-center bg-[#C99A2E] text-white shadow-xs">
              <SlidersHorizontal
                size={13}
                strokeWidth={2.4}
                aria-hidden="true"
              />
            </div>
            <span className="text-[14px] font-medium text-white">Filters</span>
            {totalActive > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="inline-flex items-center justify-center rounded-[5px] text-[10px] font-medium px-1.5 shadow-xs"
                style={{
                  minWidth: 19,
                  height: 19,
                  background: "#C99A2E",
                  color: "#FFFFFF",
                }}
              >
                {totalActive}
              </motion.span>
            )}
          </div>

          {totalActive > 0 && (
            <button
              type="button"
              onClick={clearAll}
              className="relative flex items-center gap-1.5 text-[11px] font-medium text-white/90 hover:text-white bg-white/10 hover:bg-white/20 px-2 py-1 rounded-[6px] transition-all cursor-pointer"
            >
              <RotateCcw size={11} strokeWidth={2.4} aria-hidden="true" />
              Clear
            </button>
          )}
        </div>

        <div className="px-4 py-1 max-h-[calc(100vh-220px)] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {s.filters.map((filter) => {
            const isOpen = openGroups.has(filter.name);

            return (
              <div
                key={filter.name}
                className="py-2.5 border-b border-[#0B1D3A]/[0.06] last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => toggleGroup(filter.name)}
                  className="w-full flex items-center justify-between cursor-pointer rounded-[7px] px-1.5 -mx-1.5 py-0.5 hover:bg-[#0B1D3A]/[0.03] transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[10.5px] font-medium tracking-[0.14em] text-[#0B1D3A]/85 uppercase">
                      {filter.name}
                    </span>
                  </div>
                  <ChevronDown
                    size={13}
                    strokeWidth={2.4}
                    className={`text-[#7B8DAA] transition-transform duration-300 ${
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
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-0.5 pt-1.5">
                        {filter.options.map((option) => {
                          const isSelected = selectedFilters.has(option);

                          return (
                            <button
                              type="button"
                              key={option}
                              onClick={() => toggleFilter(option)}
                              className="w-full flex items-center gap-2.5 cursor-pointer group/item px-1.5 py-1 -mx-1.5 rounded-[6px] text-left hover:bg-[#F5F7FB] transition-colors"
                              aria-pressed={isSelected}
                            >
                              <div
                                className={`rounded-[4px] flex items-center justify-center transition-all duration-200 shrink-0 ${
                                  isSelected
                                    ? "bg-[#0B1D3A] text-white border border-[#0B1D3A]"
                                    : "border border-[#CBD5E1] bg-white group-hover/item:border-[#C99A2E]"
                                }`}
                                style={{
                                  width: 15,
                                  height: 15,
                                }}
                              >
                                {isSelected && (
                                  <svg
                                    className="w-[65%] h-[65%] text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={3.5}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                )}
                              </div>

                              <span
                                className={`text-[12px] leading-snug font-medium transition-colors ${
                                  isSelected
                                    ? "text-[#0B1D3A]"
                                    : "text-[#5A6B82] group-hover/item:text-[#0B1D3A]"
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
