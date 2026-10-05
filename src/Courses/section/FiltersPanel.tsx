import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Check } from "lucide-react";
import { Checkbox, CountBadge } from "../../Trainer Directory/SidebarFilters/desktop";
import { categories, levels, priceFilters, sortOptions, type SortKey, type useCourseFilters } from "./data";

const NAVY = "#0B1D3A";
const GOLD_MID = "#D5AA45";

const Radio = ({ checked, size = 16 }: { checked: boolean; size?: number }) => (
  <div
    className={`flex shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
      checked ? "border-[#C99A2E] bg-[#C99A2E]" : "border-[#7B8DAA]/40 bg-white group-hover/item:border-[#0B1D3A]/30"
    }`}
    style={{ width: size, height: size }}
  >
    <motion.div
      initial={false}
      animate={{ scale: checked ? 1 : 0, opacity: checked ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="rounded-full bg-white"
      style={{ width: size * 0.4, height: size * 0.4 }}
    />
  </div>
);

type Filters = ReturnType<typeof useCourseFilters>;

interface Section {
  key: string;
  title: string;
  options: { label: string; icon?: React.ElementType }[];
  selected: string[];
  onToggle: (label: string) => void;
}

function useSections(f: Filters): Section[] {
  return [
    {
      key: "category",
      title: "Category",
      options: categories.map((c) => ({ label: c.name, icon: c.icon })),
      selected: f.selectedCategories.length ? f.selectedCategories : ["All"],
      onToggle: f.toggleCategory,
    },
    { key: "level", title: "Level", options: levels.map((l) => ({ label: l })), selected: f.level === "All" ? [] : [f.level], onToggle: (l) => f.setLevel(l as typeof f.level) },
    { key: "price", title: "Price", options: priceFilters.map((p) => ({ label: p })), selected: f.price === "All" ? [] : [f.price], onToggle: (p) => f.setPrice(p as typeof f.price) },
    { key: "sort", title: "Sort by", options: sortOptions.map((o) => ({ label: o.label })), selected: [sortOptions.find(o => o.value === f.sort)?.label || sortOptions[0].label], onToggle: (label) => f.setSort(sortOptions.find(o => o.label === label)?.value as SortKey) },
  ];
}

export function activeFilterCount(f: Filters) {
  return f.selectedCategories.length + (f.level !== "All" ? 1 : 0) + (f.price !== "All" ? 1 : 0) + (f.sort !== "popular" ? 1 : 0);
}


function FilterGroup({ s, defaultOpen }: { s: Section; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const count = s.key === "category" ? (s.selected[0] === "All" ? 0 : s.selected.length) : s.selected.length;
  return (
    <div className="border-b border-[#0B1D3A]/[0.07] py-3.5 last:border-b-0">
      <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} className="-mx-2 flex w-full cursor-pointer items-center justify-between rounded-[8px] px-2 py-1 transition-colors duration-300 hover:bg-[#0B1D3A]/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50">
        <div className="flex items-center gap-2.5">
          <span className="text-[11px] font-black uppercase tracking-[0.14em] text-[#0B1D3A]/80">{s.title}</span>
          {count > 0 && <CountBadge count={count} size={16} />}
        </div>
        <ChevronDown size={14} strokeWidth={3} className={`text-[#7B8DAA] transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
            <div className="flex flex-col gap-0.5 pt-2">
              {s.options.map(({ label, icon: Icon }) => {
                const on = s.selected.includes(label);
                return (
                  <button type="button" key={label} onClick={() => s.onToggle(label)} aria-pressed={on} className="group/item -mx-2 flex cursor-pointer items-center gap-3 rounded-[8px] px-2 py-1.5 text-left transition-colors duration-200 hover:bg-[#F5F7FB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A2E]/50">
                    {s.key === "sort" ? <Radio checked={on} /> : <Checkbox checked={on} />}
                    {Icon && <Icon size={14} className="shrink-0 text-[#7B8DAA]" />}
                    <span className={`text-[13px] leading-snug transition-colors duration-200 ${on ? "font-bold text-[#0B1D3A]" : "font-medium text-[#5A6B82] group-hover/item:text-[#0B1D3A]"}`}>{label === "All" ? "All categories" : label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


export default function FiltersPanel({ f }: { f: Filters }) {
  const sections = useSections(f);
  return (
    <div>
      {sections.map((s, i) => <FilterGroup key={s.key} s={s} defaultOpen={i < 2} />)}
    </div>
  );
}


export function FiltersChips({ f }: { f: Filters }) {
  const sections = useSections(f);
  return (
    <div>
      {sections.map((s) => {
        const count = s.key === "category" ? (s.selected[0] === "All" ? 0 : s.selected.length) : s.selected.length;
        return (
          <div key={s.key} className="border-b border-[#0B1D3A]/[0.06] py-4 last:border-b-0">
            <div className="mb-3 flex items-center gap-2">
              <span className="text-[11px] font-black uppercase tracking-[0.14em] text-[#0B1D3A]/80">{s.title}</span>
              {count > 0 && <CountBadge count={count} size={16} />}
            </div>
            <div className="flex flex-wrap gap-2">
              {s.options.map(({ label }) => {
                const on = s.selected.includes(label);
                return (
                  <button key={label} type="button" aria-pressed={on} onClick={() => s.onToggle(label)} className={`inline-flex h-9 items-center gap-1.5 rounded-[8px] border px-3.5 text-[12.5px] font-semibold transition-all duration-200 ${on ? "border-transparent text-white shadow-[0_6px_14px_-6px_rgba(11,29,58,0.5)]" : "border-[#0B1D3A]/10 bg-white text-[#0B1D3A]/75 active:bg-[#F5F7FB]"}`} style={on ? { background: `linear-gradient(135deg, ${NAVY} 0%, #1A3463 100%)` } : undefined}>
                    {on && <Check size={13} strokeWidth={3} style={{ color: GOLD_MID }} />}
                    {label === "All" ? "All categories" : label}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
