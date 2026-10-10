import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, ChevronDown, ChevronUp, SlidersHorizontal, RotateCcw } from "lucide-react";
import { data } from "./data";
import { fadeUp, staggerContainer, Section, PrimaryButton } from "../../ui";
import { ModernCheckbox } from "./ModernCheckbox";

export default function Mobile() {
  const s = data;
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<Set<string>>(
    new Set(["Residential", "English"])
  );

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

  const currentGroupObj = s.filters.find((f) => f.name === activeGroup);

  return (
    <Section tone="white" mobile ariaLabel="Search and Filters" className="!pt-6 !pb-4">
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col gap-4"
      >
        <motion.div 
          variants={fadeUp} 
          className="flex flex-col bg-white border border-[#E6EBF3] rounded-[18px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden"
        >
          {/* Search Input */}
          <div className="relative w-full p-2.5 border-b border-[#E6EBF3]">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-[#7B8DAA]" size={16} />
            <input 
              type="text" 
              placeholder={s.searchPlaceholder}
              className="w-full h-11 pl-10 pr-4 bg-transparent text-[14px] text-[#0B1D3A] placeholder-[#7B8DAA] outline-none"
            />
          </div>
          
          {/* Filter Pills Bar */}
          <div className="p-3 bg-[#F8FAFD] border-b border-[#E6EBF3]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-black uppercase tracking-[0.1em] text-[#7B8DAA] flex items-center gap-1.5">
                <SlidersHorizontal size={12} className="text-[#C99A2E]" />
                Filter by Category
              </span>
              {selectedFilters.size > 0 && (
                <button
                  onClick={clearAll}
                  className="flex items-center gap-1 text-[11px] font-bold text-[#C99A2E] hover:text-[#8A5A00]"
                >
                  <RotateCcw size={10} />
                  Reset ({selectedFilters.size})
                </button>
              )}
            </div>
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
              {s.filters.map((filter) => {
                const isSelectedGroup = activeGroup === filter.name;
                const activeCountInGroup = filter.options.filter((opt) => selectedFilters.has(opt)).length;

                return (
                  <button 
                    key={filter.name}
                    onClick={() => setActiveGroup(isSelectedGroup ? null : filter.name)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] border text-[12px] font-bold transition-all whitespace-nowrap shrink-0 ${
                      isSelectedGroup
                        ? "bg-[#0B1D3A] text-white border-[#0B1D3A] shadow-sm"
                        : activeCountInGroup > 0
                        ? "bg-[#C99A2E]/15 text-[#8A5A00] border-[#C99A2E]/40"
                        : "bg-white text-[#475569] border-[#E6EBF3] hover:border-[#C99A2E]"
                    }`}
                  >
                    <span>{filter.name}</span>
                    {activeCountInGroup > 0 && (
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-black ${isSelectedGroup ? "bg-white/20 text-white" : "bg-[#C99A2E] text-white"}`}>
                        {activeCountInGroup}
                      </span>
                    )}
                    {isSelectedGroup ? (
                      <ChevronUp size={12} className="text-white" />
                    ) : (
                      <ChevronDown size={12} className={activeCountInGroup > 0 ? "text-[#8A5A00]" : "text-[#7B8DAA]"} />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Expanded Filter Options with Modern Checkboxes */}
          <AnimatePresence>
            {activeGroup && currentGroupObj && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden bg-white border-b border-[#E6EBF3]"
              >
                <div className="p-4 flex flex-col gap-2">
                  <div className="flex items-center justify-between pb-2 border-b border-[#F1F5F9]">
                    <span className="text-[12px] font-black text-[#0B1D3A] uppercase tracking-wider">
                      Select {currentGroupObj.name}
                    </span>
                    <button
                      onClick={() => setActiveGroup(null)}
                      className="text-[11px] font-bold text-[#7B8DAA] hover:text-[#0B1D3A]"
                    >
                      Done
                    </button>
                  </div>
                  <div className="flex flex-col gap-1 max-h-[220px] overflow-y-auto pr-1">
                    {currentGroupObj.options.map((option) => (
                      <ModernCheckbox
                        key={option}
                        label={option}
                        checked={selectedFilters.has(option)}
                        onChange={() => toggleFilter(option)}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className="p-3 bg-white">
            <PrimaryButton full mobile icon={Search} className="!rounded-[10px] h-11">
              Apply Filters
            </PrimaryButton>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
