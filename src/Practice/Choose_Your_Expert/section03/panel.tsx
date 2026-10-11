import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronDown,
  SlidersHorizontal,
  Check,
  RotateCcw,
  Building2,
  Lightbulb,
  Video,
  CalendarDays,
  Languages,
  Briefcase,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { data } from "./data";
import { ACCENTS, EASE, FOCUS_RING, accentGradient } from "../../ui";

const GROUP_ICONS: Record<string, LucideIcon> = {
  "RE Segment": Building2,
  Expertise: Lightbulb,
  "Delivery Mode": Video,
  Availability: CalendarDays,
  Language: Languages,
  Experience: Briefcase,
};

export interface FilterPanelProps {
  selected: ReadonlySet<string>;
  onToggle: (option: string) => void;
  onClear: () => void;
  resultCount?: number;
  compact?: boolean;
}

export default function FilterPanel({ selected, onToggle, onClear, resultCount }: FilterPanelProps) {
  const [openGroups, setOpenGroups] = useState<Set<string>>(new Set(data.filters.map((f) => f.name)));
  const total = selected.size;

  const toggleGroup = (name: string) =>
    setOpenGroups((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });

  return (
    <div
      role="region"
      aria-label="Expert filters"
      className="w-full font-['Outfit'] select-none bg-white rounded-[16px] border border-[#E6EBF3] luxury-shadow-sm overflow-hidden"
    >
      <div
        className="relative px-5 pt-4 pb-4 overflow-hidden"
        style={{ background: "linear-gradient(120deg, #0B1D3A 0%, #122A50 55%, #1B3A6B 100%)" }}
      >
        <span
          aria-hidden="true"
          className="absolute -top-10 -right-8 w-32 h-32 rounded-full blur-[40px]"
          style={{ background: "rgba(201,154,46,0.28)" }}
        />
        <span
          aria-hidden="true"
          className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#C99A2E] via-[#E4C46A] to-transparent"
        />
        <div className="relative flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <span
              aria-hidden="true"
              className="w-10 h-10 rounded-[12px] flex items-center justify-center text-white shrink-0"
              style={{
                background: accentGradient(ACCENTS[1]),
                boxShadow: `0 10px 22px -8px ${ACCENTS[1].glow}, inset 0 1px 0 rgba(255,255,255,0.3)`,
              }}
            >
              <SlidersHorizontal size={18} strokeWidth={2.3} />
            </span>
            <div className="min-w-0">
              <h2 className="text-[18px] font-bold text-white tracking-tight leading-none">Filters</h2>
              <p className="text-[11.5px] font-medium text-white/60 mt-1.5 leading-none" aria-live="polite">
                {typeof resultCount === "number"
                  ? `${resultCount} expert${resultCount === 1 ? "" : "s"} match`
                  : "Refine your search"}
              </p>
            </div>
          </div>

          <AnimatePresence>
            {total > 0 && (
              <motion.button
                type="button"
                onClick={onClear}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.18 }}
                aria-label={`Clear all ${total} filters`}
                className={`flex items-center gap-1.5 h-8 pl-2.5 pr-3 rounded-full text-[11.5px] font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-colors cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E4C46A]`}
              >
                <RotateCcw size={12} strokeWidth={2.5} aria-hidden="true" />
                Clear
                <span className="min-w-[18px] h-[18px] px-1 rounded-full bg-[#E4C46A] text-[#0B1D3A] text-[10.5px] font-bold flex items-center justify-center">
                  {total}
                </span>
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="px-3 py-2">
        {data.filters.map((filter, gi) => {
          const isOpen = openGroups.has(filter.name);
          const a = ACCENTS[[2, 1, 3, 5, 6, 0][gi % 6]];
          const Icon = GROUP_ICONS[filter.name] ?? SlidersHorizontal;
          const count = filter.options.filter((o) => selected.has(o)).length;
          const panelId = `cye-filter-${gi}`;

          return (
            <div key={filter.name} className="py-1">
              <button
                type="button"
                onClick={() => toggleGroup(filter.name)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className={`group w-full flex items-center gap-3 px-2 py-2.5 rounded-[12px] text-left cursor-pointer transition-colors hover:bg-[#F8FAFD] ${FOCUS_RING}`}
              >
                <span
                  aria-hidden="true"
                  className="w-8 h-8 rounded-[8px] flex items-center justify-center text-white shrink-0 transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background: accentGradient(a),
                    boxShadow: `0 8px 16px -8px ${a.glow}, inset 0 1px 0 rgba(255,255,255,0.28)`,
                  }}
                >
                  <Icon size={15} strokeWidth={2.3} />
                </span>
                <span className="flex-1 text-[12.5px] font-bold tracking-[0.1em] uppercase text-[#0B1D3A]">
                  {filter.name}
                </span>
                {count > 0 && (
                  <span
                    className="min-w-[20px] h-5 px-1.5 rounded-full text-[11px] font-bold flex items-center justify-center"
                    style={{ background: a.soft, color: a.ink }}
                  >
                    {count}
                  </span>
                )}
                <ChevronDown
                  size={16}
                  strokeWidth={2.4}
                  aria-hidden="true"
                  className={`text-[#64748B] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    role="group"
                    aria-label={filter.name}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <ul className="flex flex-col gap-1 pt-1 pb-2 pl-3 ml-6 border-l border-[#E6EBF3]">
                      {filter.options.map((option) => {
                        const checked = selected.has(option);
                        return (
                          <li key={option}>
                            <label
                              className={`relative flex items-center gap-3 px-2.5 py-2 rounded-[10px] cursor-pointer border transition-all duration-200 ${
                                checked
                                  ? "bg-[#FFFBF0] border-[#C99A2E]/40"
                                  : "border-transparent hover:bg-[#F8FAFD]"
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={checked}
                                onChange={() => onToggle(option)}
                                className="peer sr-only"
                              />
                              <span
                                aria-hidden="true"
                                className={`w-[18px] h-[18px] rounded-[6px] flex items-center justify-center shrink-0 border transition-all duration-200 peer-focus-visible:ring-2 peer-focus-visible:ring-[#C99A2E] peer-focus-visible:ring-offset-2 ${
                                  checked
                                    ? "border-transparent text-white shadow-[0_4px_10px_-3px_rgba(11,29,58,0.5)]"
                                    : "border-[#CBD5E1] bg-white"
                                }`}
                                style={checked ? { background: "linear-gradient(135deg,#16316A,#0B1D3A)" } : undefined}
                              >
                                <motion.span
                                  initial={false}
                                  animate={{ scale: checked ? 1 : 0, opacity: checked ? 1 : 0 }}
                                  transition={{ duration: 0.16 }}
                                  className="flex"
                                >
                                  <Check size={12} strokeWidth={3.4} />
                                </motion.span>
                              </span>
                              <span
                                className={`text-[13px] leading-snug transition-colors ${
                                  checked ? "text-[#0B1D3A] font-semibold" : "text-[#475569] font-medium"
                                }`}
                              >
                                {option}
                              </span>
                            </label>
                          </li>
                        );
                      })}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>

              {gi < data.filters.length - 1 && <div className="mx-2 mt-1 h-px bg-[#F0F4FA]" aria-hidden="true" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
