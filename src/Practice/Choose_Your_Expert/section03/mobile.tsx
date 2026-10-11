import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, SlidersHorizontal, RotateCcw } from "lucide-react";
import { data } from "./data";
import { Section } from "../../ui";

export default function Mobile() {
  const s = data;
  const [openGroups, setOpenGroups] = useState<Set<string>>(new Set(["RE Segment"]));
  const [selectedFilters, setSelectedFilters] = useState<Set<string>>(
    new Set(["Residential"])
  );

  const toggleGroup = (name: string) => {
    setOpenGroups((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  const toggleFilter = (option: string) => {
    setSelectedFilters((prev) => {
      const next = new Set(prev);
      if (next.has(option)) next.delete(option);
      else next.add(option);
      return next;
    });
  };

  const clearAll = () => {
    setSelectedFilters(new Set());
  };

  const totalActive = selectedFilters.size;

  return (
    <Section tone="white" mobile ariaLabel="Filters" className="!pt-3 !pb-2">
      <div className="w-full font-['Outfit'] select-none">
        <div className="bg-white rounded-[14px] border border-[#0B1D3A]/[0.07] shadow-xs overflow-hidden">
          <div
            className="relative flex items-center justify-between px-3.5 py-2 overflow-hidden"
            style={{
              background: "linear-gradient(120deg, rgb(11, 29, 58) 0%, rgb(21, 49, 92) 100%)",
            }}
          >
            <div className="absolute -top-8 -right-6 w-24 h-24 rounded-full bg-[#C99A2E]/25 blur-2xl pointer-events-none" />

            <div className="relative flex items-center gap-2">
              <div className="w-6.5 h-6.5 rounded-[6px] flex items-center justify-center bg-[#C99A2E] text-white shadow-xs">
                <SlidersHorizontal
                  size={12}
                  strokeWidth={2.4}
                  aria-hidden="true"
                />
              </div>
              <span className="text-[13.5px] font-medium text-white">Filters</span>
              {totalActive > 0 && (
                <span
                  className="inline-flex items-center justify-center rounded-[4px] text-[10px] font-medium px-1.5"
                  style={{
                    minWidth: 18,
                    height: 18,
                    background: "#C99A2E",
                    color: "#FFFFFF",
                  }}
                >
                  {totalActive}
                </span>
              )}
            </div>

            {totalActive > 0 && (
              <button
                type="button"
                onClick={clearAll}
                className="relative flex items-center gap-1 text-[11px] font-medium text-white/90 hover:text-white bg-white/10 px-2 py-0.5 rounded-[5px]"
              >
                <RotateCcw size={10} strokeWidth={2.4} />
                Clear
              </button>
            )}
          </div>

          <div className="px-3.5 py-1 max-h-[320px] overflow-y-auto">
            {s.filters.map((filter) => {
              const isOpen = openGroups.has(filter.name);

              return (
                <div
                  key={filter.name}
                  className="py-2 border-b border-[#0B1D3A]/[0.06] last:border-b-0"
                >
                  <button
                    type="button"
                    onClick={() => toggleGroup(filter.name)}
                    className="w-full flex items-center justify-between py-0.5 text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[10.5px] font-medium tracking-[0.12em] text-[#0B1D3A]/85 uppercase">
                        {filter.name}
                      </span>
                    </div>
                    <ChevronDown
                      size={12}
                      strokeWidth={2.4}
                      className={`text-[#7B8DAA] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-0.5 pt-1 pb-0.5">
                          {filter.options.map((option) => {
                            const isSelected = selectedFilters.has(option);

                            return (
                              <button
                                type="button"
                                key={option}
                                onClick={() => toggleFilter(option)}
                                className="w-full flex items-center gap-2 py-1 text-left"
                              >
                                <div
                                  className={`rounded-[4px] flex items-center justify-center shrink-0 ${
                                    isSelected
                                      ? "bg-[#0B1D3A] text-white border border-[#0B1D3A]"
                                      : "border border-[#CBD5E1] bg-white"
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
                                  className={`text-[12px] leading-snug font-medium ${
                                    isSelected
                                      ? "text-[#0B1D3A]"
                                      : "text-[#5A6B82]"
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
    </Section>
  );
}
