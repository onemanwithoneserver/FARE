import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, SlidersHorizontal, RotateCcw } from "lucide-react";
import { filterOptions } from "../listing_data";
import { useLanguage } from "../../context/LanguageContext";
import { translateDirectoryText } from "../translations";

const NAVY = "#0B1D3A";
const GOLD = "#C99A2E";
const GOLD_MID = "#D5AA45";

export type FilterKey = "segments" | "expertise" | "delivery" | "availability" | "languages";
export type FilterState = Record<FilterKey, string[]>;

export const emptyFilters: FilterState = {
  segments: [],
  expertise: [],
  delivery: [],
  availability: [],
  languages: [],
};

export const filterSections: { key: FilterKey; title: string; options: string[] }[] = [
  { key: "segments", title: "RE Segment", options: filterOptions.segments },
  { key: "expertise", title: "Expertise", options: filterOptions.expertise },
  { key: "delivery", title: "Delivery Mode", options: filterOptions.delivery },
  { key: "availability", title: "Availability", options: filterOptions.availability },
  { key: "languages", title: "Language", options: filterOptions.languages },
];

export interface SidebarFiltersProps {
  selected: FilterState;
  onToggle: (key: FilterKey, option: string) => void;
  onClear: () => void;
  isOpen?: boolean;
  onClose?: () => void;
  resultCount?: number;
}

interface FilterSectionProps {
  title: string;
  options: string[];
  selectedOptions: string[];
  onChange: (option: string) => void;
  defaultOpen?: boolean;
}

export const Checkbox = ({ checked, size = 16 }: { checked: boolean; size?: number }) => (
  <div
    className={`rounded-[4px] border flex items-center justify-center transition-all duration-300 shrink-0 ${
      checked ? "border-transparent shadow-[0_2px_8px_rgba(11,29,58,0.25)]" : "border-[#0B1D3A]/15 bg-white group-hover/item:border-[#C99A2E]/60"
    }`}
    style={{ width: size, height: size, ...(checked ? { background: `linear-gradient(135deg, ${NAVY}, #1A3463)` } : {}) }}
  >
    {checked && (
      <motion.svg initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-[65%] h-[65%]" fill="none" viewBox="0 0 24 24" stroke={GOLD_MID} strokeWidth={4}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </motion.svg>
    )}
  </div>
);

export const CountBadge = ({ count, size = 18 }: { count: number; size?: number }) => (
  <motion.span
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    className="inline-flex items-center justify-center rounded-[4px] text-[10px] font-black px-1.5 shadow-[0_2px_6px_rgba(201,154,46,0.35)]"
    style={{ minWidth: size, height: size, background: `linear-gradient(135deg, ${GOLD_MID}, ${GOLD})`, color: NAVY }}
  >
    {count}
  </motion.span>
);

const FilterSection: React.FC<FilterSectionProps> = ({ title, options, selectedOptions, onChange, defaultOpen = true }) => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const activeCount = selectedOptions.length;

  return (
    <div className="py-3.5 border-b border-[#0B1D3A]/[0.07] last:border-b-0">
      <button
        className="w-full flex items-center justify-between cursor-pointer rounded-[8px] px-2 -mx-2 py-1 hover:bg-[#0B1D3A]/[0.03] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2.5">
          <span className="text-[11px] font-black tracking-[0.14em] text-[#0B1D3A]/80 uppercase">{translateDirectoryText(title, language)}</span>
          {activeCount > 0 && <CountBadge count={activeCount} size={16} />}
        </div>
        <ChevronDown
          size={14}
          strokeWidth={3}
          className={`text-[#7B8DAA] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
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
            <div className="flex flex-col gap-0.5 pt-2">
              {options.map((option) => {
                const isSelected = selectedOptions.includes(option);
                return (
                  <button
                    type="button"
                    key={option}
                    className="flex items-center gap-3 cursor-pointer group/item px-2 py-1.5 -mx-2 rounded-[8px] text-left hover:bg-[#F5F7FB] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50"
                    onClick={() => onChange(option)}
                    aria-pressed={isSelected}
                  >
                    <Checkbox checked={isSelected} />
                    <span
                      className={`text-[13px] leading-snug transition-colors duration-200 ${
                        isSelected ? "text-[#0B1D3A] font-bold" : "text-[#5A6B82] group-hover/item:text-[#0B1D3A] font-medium"
                      }`}
                    >
                      {translateDirectoryText(option, language)}
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
};

export default function Desktop({ selected, onToggle, onClear }: SidebarFiltersProps) {
  const { language } = useLanguage();
  const t = (text: string) => translateDirectoryText(text, language);
  const totalActive = Object.values(selected).reduce((sum, arr) => sum + arr.length, 0);

  return (
    <aside className="w-[272px] shrink-0 sticky top-[96px] self-start font-['Outfit']">
      <div className="bg-white rounded-[8px] border border-[#0B1D3A]/[0.07] shadow-[0_2px_6px_-2px_rgba(11,29,58,0.06),0_10px_30px_-12px_rgba(11,29,58,0.12)] overflow-hidden">
        <div
          className="relative flex items-center justify-between px-5 py-4 overflow-hidden"
          style={{ background: `linear-gradient(120deg, ${NAVY} 0%, #15315C 100%)` }}
        >
          <div className="absolute -top-8 -right-6 w-28 h-28 rounded-full bg-[#C99A2E]/30 blur-2xl pointer-events-none" />
          <div className="relative flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-[8px] flex items-center justify-center bg-white/10 border border-white/15">
              <SlidersHorizontal size={14} strokeWidth={2.5} style={{ color: GOLD_MID }} />
            </div>
            <span className="text-[15px] font-black text-white">{t("Filters")}</span>
            {totalActive > 0 && <CountBadge count={totalActive} size={20} />}
          </div>
          {totalActive > 0 && (
            <button
              onClick={onClear}
              className="relative flex items-center gap-1.5 text-[11px] font-bold text-white/80 hover:text-white bg-white/10 hover:bg-white/20 px-2.5 py-1.5 rounded-[8px] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50"
            >
              <RotateCcw size={12} strokeWidth={2.5} />
              {t("Clear")}
            </button>
          )}
        </div>

        <div className="px-5 py-1 max-h-[calc(100vh-200px)] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {filterSections.map((s, i) => (
            <FilterSection
              key={s.key}
              title={s.title}
              options={s.options}
              selectedOptions={selected[s.key]}
              onChange={(o) => onToggle(s.key, o)}
              defaultOpen={i < 2}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}
