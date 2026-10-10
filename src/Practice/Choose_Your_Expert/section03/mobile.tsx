import { motion } from "motion/react";
import { Search, ChevronDown, SlidersHorizontal } from "lucide-react";
import { data } from "./data";
import { fadeUp, staggerContainer, Section } from "../../ui";

export default function Mobile() {
  const s = data;

  return (
    <Section tone="white" mobile ariaLabel="Search and Filters" className="!pt-8 !pb-4">
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col gap-5"
      >
        <motion.h2 variants={fadeUp} className="text-[20px] font-black text-[#0B1D3A] tracking-tight">
          {s.title}
        </motion.h2>
        
        <motion.div variants={fadeUp} className="relative w-full">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#475569]" size={16} />
          <input 
            type="text" 
            placeholder="Search experts..."
            className="w-full h-11 pl-10 pr-4 rounded-[10px] bg-white border border-[#E6EBF3] text-[14px] text-[#0B1D3A] placeholder-[#7B8DAA] outline-none focus:border-[#C99A2E] focus:ring-2 focus:ring-[#C99A2E]/20 transition-all shadow-sm"
          />
        </motion.div>

        <motion.div variants={fadeUp} className="flex items-center gap-2.5 overflow-x-auto pb-1 scrollbar-hide -mx-5 px-5">
          <div className="flex items-center gap-1.5 justify-center px-3 py-2 rounded-[8px] bg-[#F8F9FC] text-[#475569] border border-[#E6EBF3] shrink-0">
            <SlidersHorizontal size={14} />
            <span className="text-[12px] font-bold">Filters</span>
          </div>
          {s.filters.map((filter) => (
            <button 
              key={filter.name}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-[#E6EBF3] shadow-sm whitespace-nowrap shrink-0 hover:border-[#C99A2E] transition-all"
            >
              <span className="text-[12px] font-semibold text-[#0B1D3A]">{filter.name}</span>
              <ChevronDown size={12} className="text-[#7B8DAA]" />
            </button>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}
