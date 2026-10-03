import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, RotateCcw, X, Filter } from "lucide-react";
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
          <span className="text-[13px] font-black tracking-[0.1em] text-[#0B1D3A]/80 uppercase">
            {title}
          </span>
          {activeCount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center justify-center min-w-[18px] h-[18px] rounded-full text-[10px] font-black text-white px-1 shadow-[0_2px_4px_rgba(139,92,246,0.3)]"
              style={{ background: "linear-gradient(135deg, #8B5CF6, #6D28D9)" }}
            >
              {activeCount}
            </motion.span>
          )}
        </div>
        <ChevronDown
          size={16}
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
                      className={`w-5 h-5 rounded border flex items-center justify-center transition-all duration-300 shrink-0 ${
                        isSelected
                          ? "border-transparent shadow-[0_2px_8px_rgba(139,92,246,0.3)]"
                          : "border-[#0B1D3A]/[0.1] bg-white"
                      }`}
                      style={isSelected ? { background: "linear-gradient(135deg, #8B5CF6, #6D28D9)" } : undefined}
                    >
                      {isSelected && (
                        <motion.svg initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </motion.svg>
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
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex flex-col justify-end bg-[#0B1D3A]/40 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="w-full bg-white/95 backdrop-blur-3xl rounded-t flex flex-col max-h-[85vh] font-['Outfit'] border-t border-white/40 shadow-[0_-24px_80px_-12px_rgba(11,29,58,0.3)] relative overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gradient-radial from-[#8B5CF6]/10 to-transparent rounded-full blur-[30px] pointer-events-none z-0" />
            <div className="absolute bottom-[100px] left-[-20%] w-[200px] h-[200px] bg-gradient-radial from-[#C99A2E]/10 to-transparent rounded-full blur-[30px] pointer-events-none z-0" />

            
            <div className="w-full flex justify-center pt-4 pb-2 relative z-10">
              <div className="w-12 h-1.5 bg-[#0B1D3A]/10 rounded-full" />
            </div>

            
            <div className="flex items-center justify-between px-6 pb-4 pt-2 border-b border-[#0B1D3A]/[0.08] shrink-0 relative z-10">
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded flex items-center justify-center text-white shadow-[0_4px_12px_-4px_rgba(11,29,58,0.3)]"
                  style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #162E56 100%)` }}
                >
                  <Filter size={16} strokeWidth={2.5} />
                </div>
                <span className="text-[18px] font-black" style={{ color: NAVY }}>Filters</span>
                {totalActive > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="inline-flex items-center justify-center min-w-[22px] h-[22px] rounded-full text-[11px] font-black text-white px-1 ml-1 shadow-[0_2px_4px_rgba(139,92,246,0.3)]"
                    style={{ background: "linear-gradient(135deg, #8B5CF6, #6D28D9)" }}
                  >
                    {totalActive}
                  </motion.span>
                )}
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white border border-[#0B1D3A]/[0.06] flex items-center justify-center text-[#7B8DAA] hover:bg-[#F8FAFD] hover:text-[#0B1D3A] hover:border-[#0B1D3A]/10 transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]/50 shadow-sm"
              >
                <X size={18} strokeWidth={2.5} />
              </button>
            </div>

            
            <div className="flex-1 overflow-y-auto px-6 pb-[100px] relative z-10">
              <FilterSection title="RE Segment" options={filterOptions.segments} selectedOptions={selected.segments} onChange={(o) => toggleOption('segments', o)} />
              <FilterSection title="Expertise" options={filterOptions.expertise} selectedOptions={selected.expertise} onChange={(o) => toggleOption('expertise', o)} />
              <FilterSection title="Language" options={filterOptions.languages} selectedOptions={selected.languages} onChange={(o) => toggleOption('languages', o)} />
            </div>

            
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-white/80 backdrop-blur-xl border-t border-[#0B1D3A]/[0.08] flex items-center gap-4 z-20">
              <button
                onClick={clearAll}
                className="flex-1 py-4 rounded text-[#0B1D3A] font-bold text-[14px] flex items-center justify-center gap-2 bg-[#F8FAFD] border border-[#0B1D3A]/[0.06] hover:border-[#0B1D3A]/20 hover:bg-[#EEF4FF] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]/50"
              >
                <RotateCcw size={15} strokeWidth={2.5} />
                Clear All
              </button>
              <button
                onClick={onClose}
                className="flex-[1.5] py-4 rounded text-white font-bold text-[14px] flex items-center justify-center luxury-shadow-float active:scale-[0.98] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]/50"
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
