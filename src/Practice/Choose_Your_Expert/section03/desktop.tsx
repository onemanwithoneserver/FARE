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
          {/* Header & Search */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-[#F8FAFD] p-6 rounded-[20px] border border-[#E6EBF3] luxury-shadow-sm">
            <motion.h2 variants={fadeUp} className="text-[24px] font-black text-[#0B1D3A] tracking-tight shrink-0">
              {s.title}
            </motion.h2>
            <motion.div variants={fadeUp} className="relative flex-1 w-full max-w-[600px] flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#475569]" size={18} />
                <input 
                  type="text" 
                  placeholder={s.searchPlaceholder}
                  className="w-full h-12 pl-11 pr-4 rounded-[12px] bg-white border border-[#E6EBF3] text-[15px] text-[#0B1D3A] placeholder-[#7B8DAA] outline-none focus:border-[#C99A2E] focus:ring-2 focus:ring-[#C99A2E]/20 transition-all shadow-sm"
                />
              </div>
              <PrimaryButton icon={Search} className="shrink-0 h-12">Search</PrimaryButton>
            </motion.div>
          </div>

          {/* Filters Bar */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 mr-2 text-[#475569] bg-[#F8F9FC] px-4 py-2.5 rounded-full border border-[#E6EBF3]">
              <SlidersHorizontal size={18} />
              <span className="text-[14px] font-bold">Filters</span>
            </div>
            {s.filters.map((filter) => (
              <button 
                key={filter.name}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-[#E6EBF3] hover:border-[#C99A2E] hover:bg-[#FBF5E7] transition-all whitespace-nowrap group shadow-sm hover:shadow-md"
              >
                <span className="text-[13px] font-semibold text-[#0B1D3A] group-hover:text-[#8A5A00]">{filter.name}</span>
                <ChevronDown size={14} className="text-[#7B8DAA] group-hover:text-[#8A5A00]" />
              </button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
