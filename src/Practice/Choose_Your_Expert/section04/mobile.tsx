import { motion } from "motion/react";
import { ArrowUpDown, ChevronDown } from "lucide-react";
import { data } from "./data";
import { Section } from "../../ui";

export default function Mobile() {
  const s = data;

  return (
    <Section tone="white" mobile ariaLabel="Sort Results" className="!py-2">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between bg-[#F8F9FC] p-3 rounded-[12px] border border-[#E6EBF3]"
      >
        <span className="text-[13px] font-bold text-[#0B1D3A]">{s.expertsFound}</span>
        
        <button className="flex items-center gap-1.5 text-[12px] font-semibold text-[#475569]">
          <ArrowUpDown size={12} />
          {s.sortByOptions[0]}
          <ChevronDown size={14} />
        </button>
      </motion.div>
    </Section>
  );
}
