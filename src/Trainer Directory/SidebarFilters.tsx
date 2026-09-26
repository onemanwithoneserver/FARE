import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { filterOptions } from "./listing_data";

interface FilterSectionProps {
  title: string;
  options: string[];
  selectedOptions: string[];
  onChange: (option: string) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ title, options, selectedOptions, onChange }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="py-4 border-b border-[#e2e8f0]">
      <button 
        className="w-full flex items-center justify-between text-[11px] font-bold tracking-widest text-[#0B1D3A] uppercase mb-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {isOpen ? <ChevronUp size={14} className="text-[#94a3b8]" /> : <ChevronDown size={14} className="text-[#94a3b8]" />}
      </button>
      
      {isOpen && (
        <div className="flex flex-col gap-2.5">
          {options.map((option) => (
            <label key={option} className="flex items-start gap-2.5 cursor-pointer group" onClick={() => onChange(option)}>
              <div className={`mt-0.5 w-4 h-4 rounded-[3px] border flex items-center justify-center transition-colors ${selectedOptions.includes(option) ? 'bg-[#0B1D3A] border-[#0B1D3A]' : 'border-[#cbd5e1] group-hover:border-[#94a3b8] bg-white'}`}>
                {selectedOptions.includes(option) && <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
              </div>
              <span className={`text-[13px] leading-snug ${selectedOptions.includes(option) ? 'text-[#0B1D3A] font-medium' : 'text-[#475569] group-hover:text-[#0B1D3A]'}`}>
                {option}
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default function SidebarFilters() {
  // In a real app, these would be controlled by parent state
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

  return (
    <div className="w-[260px] shrink-0 bg-white rounded-lg border border-[#e2e8f0] p-5 sticky top-[80px]">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-[13px] font-bold text-[#0B1D3A]">Filters</h3>
        <button onClick={clearAll} className="text-[11px] font-medium text-[#64748b] hover:text-[#0B1D3A] transition-colors">
          Clear All
        </button>
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
