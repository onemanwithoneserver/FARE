import { motion } from "motion/react";
import { ArrowUpDown, Search, ChevronDown } from "lucide-react";

export default function Desktop() {

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full flex items-center justify-between bg-white rounded-[20px] border border-[#E6EBF3] p-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
    >
      <div className="relative flex-1 max-w-[300px]">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7B8DAA]" size={16} />
        <input 
          type="text" 
          placeholder="Search by name, expertise..."
          className="w-full h-10 pl-10 pr-4 bg-transparent text-[14px] font-medium text-[#0B1D3A] placeholder-[#7B8DAA] outline-none"
        />
      </div>
      
      <div className="flex items-center gap-4 text-[14px]">
        <span className="font-bold text-[#475569] flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
          <ArrowUpDown size={14} />
          Sort by:
        </span>
        <div className="relative group">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#F8F9FC] border border-[#E6EBF3] rounded-[10px] text-[13px] font-semibold text-[#0B1D3A] hover:bg-white hover:border-[#C99A2E] transition-all">
            Most Relevant
            <ChevronDown size={14} className="text-[#7B8DAA]" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
