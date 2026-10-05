import { motion } from "motion/react";
import { categories } from "./data";

interface Props {
  selected: string[];
  onToggle: (name: string) => void;
  idPrefix: string;
}

export default function CategoryChips({ selected, onToggle, idPrefix }: Props) {
  return (
    <div className="-mx-5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:px-0">
      <div className="flex w-max gap-2.5 md:w-auto md:flex-wrap md:justify-center">
        {categories.map(({ name, icon: Icon }) => {
          const active = name === "All" ? selected.length === 0 : selected.includes(name);
          return (
            <button
              key={name}
              type="button"
              aria-pressed={active}
              onClick={() => onToggle(name)}
              className={`relative flex items-center gap-2 whitespace-nowrap rounded-[8px] border px-4 py-2 text-[13px] font-semibold transition-colors duration-300 ${active ? "border-transparent text-white" : "border-[#E2E8F0] bg-white text-[#475569] hover:border-[#C99A2E]/60 hover:text-[#0B1D3A]"}`}
            >
              {active && <motion.span layoutId={`${idPrefix}-chip`} className="absolute inset-0 rounded-[8px] bg-[#0B1D3A] shadow-[0_6px_18px_rgba(11,29,58,0.3)]" transition={{ type: "spring", stiffness: 420, damping: 32 }} />}
              <Icon size={14} className={`relative ${active ? "text-[#C99A2E]" : ""}`} />
              <span className="relative">{name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
