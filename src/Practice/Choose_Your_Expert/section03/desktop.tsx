import { motion } from "motion/react";
import { Search, ChevronDown, SlidersHorizontal } from "lucide-react";
import { data } from "./data";
import { fadeUp, staggerContainer, Section, PrimaryButton } from "../../ui";

export default function Desktop() {
  const s = data;

  return (
    <Section tone="white" ariaLabel="Search and Filters" className="!pt-12 !pb-6">
      <div className="max-w-[1200px] mx-auto w-full">
        <motion.div
          variants={staggerContainer(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <motion.h2 variants={fadeUp} className="text-[26px] font-black text-[#0B1D3A] tracking-tight">
            {s.title}
          </motion.h2>

          <motion.div 
            variants={fadeUp} 
            className="flex items-center p-3 bg-white border border-[#E6EBF3] rounded-[16px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full"
          >
            {/* Search Input */}
            <div className="relative flex-1 min-w-[300px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7B8DAA]" size={18} />
              <input 
                type="text" 
                placeholder={s.searchPlaceholder}
                className="w-full h-11 pl-11 pr-4 bg-[#F8F9FC] rounded-[10px] text-[15px] text-[#0B1D3A] placeholder-[#7B8DAA] outline-none focus:bg-white focus:border-[#C99A2E] focus:ring-1 focus:ring-[#C99A2E] transition-all"
              />
            </div>
            
            <div className="w-px h-8 bg-[#E6EBF3] mx-4 shrink-0" />
            
            {/* Filters */}
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
              <div className="flex items-center gap-2 mr-3 text-[#475569] shrink-0">
                <SlidersHorizontal size={16} />
                <span className="text-[13px] font-bold uppercase tracking-widest">Filters</span>
              </div>
              {s.filters.map((filter) => (
                <button 
                  key={filter.name}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-[10px] hover:bg-[#F8F9FC] transition-colors whitespace-nowrap group shrink-0"
                >
                  <span className="text-[14px] font-semibold text-[#0B1D3A] group-hover:text-[#8A5A00]">{filter.name}</span>
                  <ChevronDown size={14} className="text-[#7B8DAA] group-hover:text-[#8A5A00]" />
                </button>
              ))}
            </div>
            
            <div className="ml-auto pl-4 shrink-0">
              <PrimaryButton icon={Search} className="!rounded-[10px] h-11 px-8">Find</PrimaryButton>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
