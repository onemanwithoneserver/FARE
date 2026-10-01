import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, RotateCcw, X, Filter } from "lucide-react";
import { filterOptions } from "../listing_data";

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
    <div className="py-4 border-b border-[#0B1D3A]/[0.06] last:border-b-0">
      <button
        className="w-full flex items-center justify-between group cursor-pointer transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <span className="text-[13px] font-bold tracking-[0.05em] text-[#0B1D3A] uppercase">
            {title}
          </span>
          {activeCount > 0 && (
            <span
              className="inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-black text-white"
              style={{ background: GOLD }}
            >
              {activeCount}
            </span>
          )}
        </div>
        <ChevronDown
          size={16}
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
            <div className="flex flex-col gap-2 pt-3">
              {options.map((option) => {
                const isSelected = selectedOptions.includes(option);
                return (
                  <label
                    key={option}
                    className="flex items-center gap-3 cursor-pointer group/item py-1.5 transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50"
                    onClick={() => onChange(option)}
                  >
                    <div
                      className={`w-5 h-5 rounded border flex items-center justify-center transition-all duration-300 shrink-0 ${
                        isSelected
                          ? "border-[#0B1D3A]"
                          : "border-[#0B1D3A]/[0.06] bg-white"
                      }`}
                      style={isSelected ? { background: `linear-gradient(135deg, ${NAVY} 0%, #162E56 100%)` } : undefined}
                    >
                      {isSelected && (
                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className={`text-[14px] leading-snug transition-colors duration-200 ${
                      isSelected ? "text-[#0B1D3A] font-bold" : "text-[#5A6B82] font-medium"
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

export default function Mobile({ isOpen, onClose }: { isOpen?: boolean; onClose?: () => void }) {
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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col justify-end bg-[#0B1D3A]/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="w-full bg-white rounded-t-2xl flex flex-col max-h-[85vh] font-['Outfit']"
            onClick={e => e.stopPropagation()}
            style={{ boxShadow: "0 -4px 24px rgba(0,0,0,0.15)" }}
          >
            {/* Handle Bar */}
            <div className="w-full flex justify-center pt-3 pb-1">
              <div className="w-12 h-1.5 bg-[#0B1D3A]/10 rounded-full" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-5 pb-3 pt-2 border-b border-[#0B1D3A]/[0.08] shrink-0">
              <div className="flex items-center gap-2">
                <Filter size={18} strokeWidth={2.5} style={{ color: NAVY }} />
                <span className="text-[16px] font-black" style={{ color: NAVY }}>Filters</span>
                {totalActive > 0 && (
                  <span
                    className="inline-flex items-center justify-center min-w-[20px] h-[20px] rounded-full text-[11px] font-black text-white px-1 ml-1"
                    style={{ background: GOLD }}
                  >
                    {totalActive}
                  </span>
                )}
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-xl bg-[#F8FAFD] flex items-center justify-center text-[#7B8DAA] hover:bg-[#EEF4FF] hover:text-[#0B1D3A] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50"
              >
                <X size={18} strokeWidth={2.5} />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto px-5 pb-[90px]">
              <FilterSection title="Expertise" options={filterOptions.expertise} selectedOptions={selected.expertise} onChange={(o) => toggleOption('expertise', o)} />
              <FilterSection title="RE Segment" options={filterOptions.segments} selectedOptions={selected.segments} onChange={(o) => toggleOption('segments', o)} />
              <FilterSection title="Training Format" options={filterOptions.formats} selectedOptions={selected.formats} onChange={(o) => toggleOption('formats', o)} />
              <FilterSection title="Delivery Mode" options={filterOptions.delivery} selectedOptions={selected.delivery} onChange={(o) => toggleOption('delivery', o)} />
              <FilterSection title="Availability" options={filterOptions.availability} selectedOptions={selected.availability} onChange={(o) => toggleOption('availability', o)} />
              <FilterSection title="Language" options={filterOptions.languages} selectedOptions={selected.languages} onChange={(o) => toggleOption('languages', o)} />
            </div>

            {/* Sticky Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-[#0B1D3A]/[0.08] flex items-center gap-3">
              <button
                onClick={clearAll}
                className="flex-1 py-3.5 rounded-xl text-[#0B1D3A] font-bold text-[14px] flex items-center justify-center gap-2 bg-[#F8FAFD] border border-[#0B1D3A]/[0.06] hover:border-[#0B1D3A]/20 hover:bg-[#EEF4FF] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50"
              >
                <RotateCcw size={14} strokeWidth={2.5} />
                Clear All
              </button>
              <button
                onClick={onClose}
                className="flex-[1.5] py-3.5 rounded-xl text-white font-bold text-[14px] flex items-center justify-center shadow-md active:scale-[0.98] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50"
                style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #162E56 100%)` }}
              >
                Apply Filters
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
