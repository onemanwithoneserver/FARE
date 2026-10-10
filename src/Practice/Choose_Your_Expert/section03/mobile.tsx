import { motion } from "motion/react";
import { Search, ChevronDown, SlidersHorizontal } from "lucide-react";
import { data } from "./data";
import { fadeUp, staggerContainer, Section, PrimaryButton } from "../../ui";

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

        <motion.div 
          variants={fadeUp} 
          className="flex flex-col bg-white border border-[#E6EBF3] rounded-[16px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden"
        >
          {/* Search Input */}
          <div className="relative w-full p-2 border-b border-[#E6EBF3]">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-[#7B8DAA]" size={16} />
            <input 
              type="text" 
              placeholder={s.searchPlaceholder}
              className="w-full h-11 pl-10 pr-4 bg-transparent text-[14px] text-[#0B1D3A] placeholder-[#7B8DAA] outline-none"
            />
          </div>
          
          {/* Filters Bar */}
          <div className="flex flex-col gap-2 p-3 bg-[#F8F9FC]">
            <div className="flex items-center gap-1.5 px-2 text-[#475569]">
              <SlidersHorizontal size={14} />
              <span className="text-[12px] font-bold uppercase tracking-widest">Filters</span>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
              {s.filters.map((filter) => (
                <button 
                  key={filter.name}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-[8px] bg-white border border-[#E6EBF3] shadow-sm hover:border-[#C99A2E] transition-all whitespace-nowrap shrink-0 group"
                >
                  <span className="text-[13px] font-semibold text-[#0B1D3A] group-hover:text-[#8A5A00]">{filter.name}</span>
                  <ChevronDown size={12} className="text-[#7B8DAA] group-hover:text-[#8A5A00]" />
                </button>
              ))}
            </div>
          </div>
          
          <div className="p-3 bg-white border-t border-[#E6EBF3]">
            <PrimaryButton full mobile icon={Search} className="!rounded-[10px] h-11">Find</PrimaryButton>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
