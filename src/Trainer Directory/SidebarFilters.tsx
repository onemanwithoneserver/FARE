import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, SlidersHorizontal, RotateCcw } from "lucide-react";
import { filterOptions } from "./listing_data";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";

interface FilterSectionProps {
  title: string;
  options: string[];
  selectedOptions: string[];
  onChange: (option: string) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ title, options, selectedOptions, onChange }) => {
  const [isOpen, setIsOpen] = useState(true);
  const activeCount = selectedOptions.length;

  return (
    <div className="py-3.5 border-b border-[#0B1D3A]/[0.06] last:border-b-0">
      <button
        className="w-full flex items-center justify-between group cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold tracking-[0.12em] text-[#0B1D3A] uppercase">
            {title}
          </span>
          {activeCount > 0 && (
            <span
              className="inline-flex items-center justify-center w-4 h-4 rounded-full text-[8px] font-black text-white"
              style={{ background: GOLD }}
            >
              {activeCount}
            </span>
          )}
        </div>
        <ChevronDown
          size={14}
          strokeWidth={2.5}
          className={`text-[#7B8DAA] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
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
            <div className="flex flex-col gap-1.5 pt-2.5">
              {options.map((option) => {
                const isSelected = selectedOptions.includes(option);
                return (
                  <label
                    key={option}
                    className="flex items-center gap-2.5 cursor-pointer group/item px-2 py-1.5 rounded transition-all duration-200 hover:bg-[#F8FAFD]"
                    onClick={() => onChange(option)}
                  >
                    <div
                      className={`w-4 h-4 rounded-[3px] border flex items-center justify-center transition-all duration-300 shrink-0 ${
                        isSelected
                          ? "border-[#0B1D3A] shadow-[0_0_0_1px_rgba(11,29,58,0.08)]"
                          : "border-[#0B1D3A]/15 group-hover/item:border-[#0B1D3A]/30 bg-white"
                      }`}
                      style={isSelected ? { background: `linear-gradient(135deg, ${NAVY} 0%, #162E56 100%)` } : undefined}
                    >
                      {isSelected && (
                        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className={`text-[13px] leading-snug transition-colors duration-200 ${
                      isSelected ? "text-[#0B1D3A] font-semibold" : "text-[#5A6B82] group-hover/item:text-[#0B1D3A] font-medium"
                    }`}>
                      {option}
                    </span>
                  </label>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function SidebarFilters() {
  const [selected, setSelected] = useState<Record<string, string[]>>({
    expertise: [],
    segments: [],
    formats: [],
    delivery: [],
    availability: [],
    languages: []
  });

  const toggleOption = (category: string, option: string) => {
    setSelected(prev => {
      const current = prev[category];
      return {
        ...prev,
        [category]: current.includes(option) ? current.filter(o => o !== option) : [...current, option]
      };
    });
  };

  const clearAll = () => {
    setSelected({ expertise: [], segments: [], formats: [], delivery: [], availability: [], languages: [] });
  };

  const totalActive = Object.values(selected).reduce((sum, arr) => sum + arr.length, 0);

  return (
    <div
      className="w-[260px] shrink-0 bg-white/90 backdrop-blur-xl rounded border border-[#0B1D3A]/[0.08] p-5 sticky top-[80px] h-fit font-['Outfit']"
      style={{
        boxShadow: "0 2px 8px -2px rgba(11, 29, 58, 0.05), 0 4px 12px -4px rgba(11, 29, 58, 0.03)",
      }}
    >
            <div className="flex items-center justify-between mb-1 pb-3 border-b border-[#0B1D3A]/[0.06]">
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded flex items-center justify-center text-white shadow-sm"
            style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #162E56 100%)` }}
          >
            <SlidersHorizontal size={13} strokeWidth={2.5} />
          </div>
          <span className="text-[13px] font-bold" style={{ color: NAVY }}>Filters</span>
          {totalActive > 0 && (
            <span
              className="inline-flex items-center justify-center min-w-[18px] h-[18px] rounded-full text-[9px] font-black text-white px-1"
              style={{ background: GOLD }}
            >
              {totalActive}
            </span>
          )}
        </div>
        {totalActive > 0 && (
          <button
            onClick={clearAll}
            className="flex items-center gap-1 text-[11px] font-semibold text-[#7B8DAA] hover:text-[#0B1D3A] transition-colors duration-200 cursor-pointer"
          >
            <RotateCcw size={10} strokeWidth={2.5} />
            Clear
          </button>
        )}
      </div>

            <FilterSection title="Expertise" options={filterOptions.expertise} selectedOptions={selected.expertise} onChange={(o) => toggleOption('expertise', o)} />
      <FilterSection title="RE Segment" options={filterOptions.segments} selectedOptions={selected.segments} onChange={(o) => toggleOption('segments', o)} />
      <FilterSection title="Training Format" options={filterOptions.formats} selectedOptions={selected.formats} onChange={(o) => toggleOption('formats', o)} />
      <FilterSection title="Delivery Mode" options={filterOptions.delivery} selectedOptions={selected.delivery} onChange={(o) => toggleOption('delivery', o)} />
      <FilterSection title="Availability" options={filterOptions.availability} selectedOptions={selected.availability} onChange={(o) => toggleOption('availability', o)} />
      <FilterSection title="Language" options={filterOptions.languages} selectedOptions={selected.languages} onChange={(o) => toggleOption('languages', o)} />
    </div>
  );
}
