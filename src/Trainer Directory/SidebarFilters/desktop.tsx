import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, SlidersHorizontal, RotateCcw } from "lucide-react";
import { filterOptions } from "../listing_data";

const NAVY = "#0B1D3A";

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
    <div className="py-4 border-b border-[#0B1D3A]/[0.08] last:border-b-0 relative overflow-hidden">
      <button
        className="w-full flex items-center justify-between group cursor-pointer transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]/50 rounded px-2 -mx-2 hover:bg-[#0B1D3A]/[0.02]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2.5 py-1">
          <span className="text-[11px] font-black tracking-[0.15em] text-[#0B1D3A]/80 uppercase">
            {title}
          </span>
          {activeCount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center justify-center min-w-[16px] h-[16px] rounded-full text-[9px] font-black text-white px-1 shadow-[0_2px_4px_rgba(139,92,246,0.3)]"
              style={{ background: "linear-gradient(135deg, #8B5CF6, #6D28D9)" }}
            >
              {activeCount}
            </motion.span>
          )}
        </div>
        <ChevronDown
          size={14}
          strokeWidth={3}
          className={`text-[#7B8DAA] transition-transform duration-300 ease-[0.16,1,0.3,1] ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-2 pt-3 pb-1 px-1">
              {options.map((option) => {
                const isSelected = selectedOptions.includes(option);
                return (
                  <label
                    key={option}
                    className="flex items-center gap-3 cursor-pointer group/item p-2 -mx-2 rounded transition-all duration-300 ease-out hover:bg-[#F8FAFD] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]/50"
                    onClick={() => onChange(option)}
                  >
                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center transition-all duration-300 shrink-0 ${
                        isSelected
                          ? "border-transparent shadow-[0_2px_8px_rgba(139,92,246,0.3)]"
                          : "border-[#0B1D3A]/[0.1] group-hover/item:border-[#8B5CF6]/40 bg-white"
                      }`}
                      style={isSelected ? { background: "linear-gradient(135deg, #8B5CF6, #6D28D9)" } : undefined}
                    >
                      {isSelected && (
                        <motion.svg initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </motion.svg>
                      )}
                    </div>
                    <span className={`text-[13px] leading-snug transition-colors duration-200 ${
                      isSelected ? "text-[#0B1D3A] font-bold" : "text-[#5A6B82] group-hover/item:text-[#0B1D3A] font-medium"
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

export default function Desktop() {
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
      className="w-[280px] shrink-0 bg-white/95 backdrop-blur-2xl rounded border border-[#0B1D3A]/[0.06] p-6 sticky top-[80px] h-fit font-['Outfit'] shadow-[0_12px_40px_-12px_rgba(11,29,58,0.1)] relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-gradient-radial from-[#8B5CF6]/10 to-transparent rounded-full blur-[30px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-[-20%] w-[150px] h-[150px] bg-gradient-radial from-[#C99A2E]/10 to-transparent rounded-full blur-[30px] pointer-events-none z-0" />

      <div className="flex items-center justify-between mb-2 pb-4 border-b border-[#0B1D3A]/[0.08] relative z-10">
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded flex items-center justify-center text-white shadow-[0_4px_12px_-4px_rgba(11,29,58,0.3)]"
            style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #162E56 100%)` }}
          >
            <SlidersHorizontal size={14} strokeWidth={2.5} />
          </div>
          <span className="text-[14px] font-black" style={{ color: NAVY }}>Filters</span>
          {totalActive > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center justify-center min-w-[20px] h-[20px] rounded-full text-[10px] font-black text-white px-1 shadow-[0_2px_4px_rgba(139,92,246,0.3)]"
              style={{ background: "linear-gradient(135deg, #8B5CF6, #6D28D9)" }}
            >
              {totalActive}
            </motion.span>
          )}
        </div>
        {totalActive > 0 && (
          <button
            onClick={clearAll}
            className="flex items-center gap-1.5 text-[11px] font-bold text-[#7B8DAA] hover:text-[#0B1D3A] transition-all duration-300 ease-out cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]/50 bg-[#F8FAFD] hover:bg-[#0B1D3A]/5 px-2.5 py-1.5 rounded"
          >
            <RotateCcw size={12} strokeWidth={2.5} />
            Clear
          </button>
        )}
      </div>

      <div className="relative z-10">
        <FilterSection title="RE Segment" options={filterOptions.segments} selectedOptions={selected.segments} onChange={(o) => toggleOption('segments', o)} />
        <FilterSection title="Expertise" options={filterOptions.expertise} selectedOptions={selected.expertise} onChange={(o) => toggleOption('expertise', o)} />
        <FilterSection title="Language" options={filterOptions.languages} selectedOptions={selected.languages} onChange={(o) => toggleOption('languages', o)} />
      </div>
    </div>
  );
}
