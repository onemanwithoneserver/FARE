import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, SlidersHorizontal, RotateCcw } from "lucide-react";
import { data } from "./data";
import { Section } from "../../ui";

const GOLD_MID = "#D5AA45";

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
    <Section tone="white" mobile ariaLabel="Filters" className="!pt-4 !pb-2">
      <div className="w-full font-['Outfit'] select-none">
        <div className="bg-white rounded-[8px] border border-[#0B1D3A]/[0.07] luxury-shadow-sm overflow-hidden">
          {/* Header Bar */}
          <div
            className="relative flex items-center justify-between px-4 py-3.5 overflow-hidden"
            style={{
              background: "linear-gradient(120deg, rgb(11, 29, 58) 0%, rgb(21, 49, 92) 100%)",
            }}
          >
            <div className="absolute -top-8 -right-6 w-24 h-24 rounded-full bg-[#C99A2E]/30 blur-2xl pointer-events-none" />

            <div className="relative flex items-center gap-2">
              <div className="w-7 h-7 rounded-[6px] flex items-center justify-center bg-white/10 border border-white/15">
                <SlidersHorizontal
                  size={13}
                  strokeWidth={2.5}
                  style={{ color: "rgb(213, 170, 69)" }}
                  aria-hidden="true"
                />
              </div>
              <span className="text-[14px] font-black text-white">Filters</span>
              {totalActive > 0 && (
                <span
                  className="inline-flex items-center justify-center rounded-[4px] text-[10px] font-black px-1.5"
                  style={{
                    minWidth: 18,
                    height: 18,
                    background: "linear-gradient(135deg, rgb(213, 170, 69), rgb(201, 154, 46))",
                    color: "rgb(11, 29, 58)",
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
                className="relative flex items-center gap-1 text-[11px] font-bold text-white/80 hover:text-white bg-white/10 px-2 py-1 rounded-[6px]"
              >
                <RotateCcw size={11} strokeWidth={2.5} />
                Clear
              </button>
            )}
          </div>

          {/* Accordion Categories */}
          <div className="px-4 py-1 max-h-[360px] overflow-y-auto">
            {s.filters.map((filter) => {
              const isOpen = openGroups.has(filter.name);
              const activeCountInGroup = filter.options.filter((opt) =>
                selectedFilters.has(opt)
              ).length;

              return (
                <div
                  key={filter.name}
                  className="py-3 border-b border-[#0B1D3A]/[0.07] last:border-b-0"
                >
                  <button
                    type="button"
                    onClick={() => toggleGroup(filter.name)}
                    className="w-full flex items-center justify-between py-1 text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-black tracking-[0.12em] text-[#0B1D3A]/80 uppercase">
                        {filter.name}
                      </span>
                      {activeCountInGroup > 0 && (
                        <span
                          className="inline-flex items-center justify-center rounded-[4px] text-[9px] font-black px-1.5"
                          style={{
                            minWidth: 15,
                            height: 15,
                            background:
                              "linear-gradient(135deg, rgb(213, 170, 69), rgb(201, 154, 46))",
                            color: "rgb(11, 29, 58)",
                          }}
                        >
                          {activeCountInGroup}
                        </span>
                      )}
                    </div>
                    <ChevronDown
                      size={13}
                      strokeWidth={3}
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
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-1 pt-1.5 pb-0.5">
                          {filter.options.map((option) => {
                            const isSelected = selectedFilters.has(option);

                            return (
                              <button
                                type="button"
                                key={option}
                                onClick={() => toggleFilter(option)}
                                className="w-full flex items-center gap-2.5 py-1.5 text-left"
                              >
                                <div
                                  className={`rounded-[4px] border flex items-center justify-center shrink-0 ${
                                    isSelected
                                      ? "border-transparent"
                                      : "border-[#0B1D3A]/15 bg-white"
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
                                    <svg
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
                                    </svg>
                                  )}
                                </div>
                                <span
                                  className={`text-[12.5px] leading-snug ${
                                    isSelected
                                      ? "text-[#0B1D3A] font-bold"
                                      : "text-[#5A6B82] font-medium"
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
