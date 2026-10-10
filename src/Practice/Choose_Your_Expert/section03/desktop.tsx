import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, SlidersHorizontal, RotateCcw } from "lucide-react";
import { data } from "./data";

const GOLD_MID = "#D5AA45";

export default function Desktop() {
  const s = data;
  const [openGroups, setOpenGroups] = useState<Set<string>>(
    new Set(["RE Segment", "Expertise"])
  );
  // Expertise is unchecked by default
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
      <div className="bg-white rounded-[8px] border border-[#0B1D3A]/[0.07] luxury-shadow-sm hover:luxury-shadow-float transition-all duration-400 overflow-hidden">
        {/* Header Bar */}
        <div
          className="relative flex items-center justify-between px-5 py-4 overflow-hidden"
          style={{
            background: "linear-gradient(120deg, rgb(11, 29, 58) 0%, rgb(21, 49, 92) 100%)",
          }}
        >
          <div className="absolute -top-8 -right-6 w-28 h-28 rounded-full bg-[#C99A2E]/30 blur-2xl pointer-events-none" />
          
          <div className="relative flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-[8px] flex items-center justify-center bg-white/10 border border-white/15">
              <SlidersHorizontal
                size={14}
                strokeWidth={2.5}
                style={{ color: "rgb(213, 170, 69)" }}
                aria-hidden="true"
              />
            </div>
            <span className="text-[15px] font-black text-white">Filters</span>
            {totalActive > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="inline-flex items-center justify-center rounded-[4px] text-[10px] font-black px-1.5 luxury-shadow-sm hover:luxury-shadow-float transition-all duration-400"
                style={{
                  minWidth: 20,
                  height: 20,
                  background: "linear-gradient(135deg, rgb(213, 170, 69), rgb(201, 154, 46))",
                  color: "rgb(11, 29, 58)",
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
              className="relative flex items-center gap-1.5 text-[11px] font-bold text-white/80 hover:text-white bg-white/10 hover:bg-white/20 px-2.5 py-1.5 rounded-[8px] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50 cursor-pointer"
            >
              <RotateCcw size={12} strokeWidth={2.5} aria-hidden="true" />
              Clear
            </button>
          )}
        </div>

        {/* Scrollable Filter Categories */}
        <div className="px-5 py-1 max-h-[calc(100vh-200px)] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {s.filters.map((filter) => {
            const isOpen = openGroups.has(filter.name);
            const activeCountInGroup = filter.options.filter((opt) =>
              selectedFilters.has(opt)
            ).length;

            return (
              <div
                key={filter.name}
                className="py-3.5 border-b border-[#0B1D3A]/[0.07] last:border-b-0"
              >
                {/* Accordion Group Header */}
                <button
                  type="button"
                  onClick={() => toggleGroup(filter.name)}
                  className="w-full flex items-center justify-between cursor-pointer rounded-[8px] px-2 -mx-2 py-1 hover:bg-[#0B1D3A]/[0.03] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-[11px] font-black tracking-[0.14em] text-[#0B1D3A]/80 uppercase">
                      {filter.name}
                    </span>
                    {activeCountInGroup > 0 && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="inline-flex items-center justify-center rounded-[4px] text-[10px] font-black px-1.5 luxury-shadow-sm hover:luxury-shadow-float transition-all duration-400"
                        style={{
                          minWidth: 16,
                          height: 16,
                          background:
                            "linear-gradient(135deg, rgb(213, 170, 69), rgb(201, 154, 46))",
                          color: "rgb(11, 29, 58)",
                        }}
                      >
                        {activeCountInGroup}
                      </motion.span>
                    )}
                  </div>
                  <ChevronDown
                    size={14}
                    strokeWidth={3}
                    className={`text-[#7B8DAA] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {/* Collapsible Options Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-0.5 pt-2">
                        {filter.options.map((option) => {
                          const isSelected = selectedFilters.has(option);

                          return (
                            <button
                              type="button"
                              key={option}
                              onClick={() => toggleFilter(option)}
                              className="w-full flex items-center gap-3 cursor-pointer group/item px-2 py-1.5 -mx-2 rounded-[8px] text-left hover:bg-[#F5F7FB] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50"
                              aria-pressed={isSelected}
                            >
                              {/* Custom Checked/Unchecked Box */}
                              <div
                                className={`rounded-[4px] border flex items-center justify-center transition-all duration-300 shrink-0 ${
                                  isSelected
                                    ? "border-transparent luxury-shadow-sm hover:luxury-shadow-float transition-all duration-400"
                                    : "border-[#0B1D3A]/15 bg-white group-hover/item:border-[#C99A2E]/60"
                                }`}
                                style={{
                                  width: 16,
                                  height: 16,
                                  ...(isSelected
                                    ? {
                                        background:
                                          "linear-gradient(135deg, rgb(11, 29, 58), rgb(26, 52, 99))",
                                      }
                                    : {}),
                                }}
                              >
                                {isSelected && (
                                  <motion.svg
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-[65%] h-[65%]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke={GOLD_MID}
                                    strokeWidth={4}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M5 13l4 4L19 7"
                                    />
                                  </motion.svg>
                                )}
                              </div>

                              {/* Label text */}
                              <span
                                className={`text-[13px] leading-snug transition-colors duration-200 ${
                                  isSelected
                                    ? "text-[#0B1D3A] font-bold"
                                    : "text-[#5A6B82] group-hover/item:text-[#0B1D3A] font-medium"
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
