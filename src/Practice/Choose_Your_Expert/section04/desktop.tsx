import { motion } from "motion/react";
import { ArrowUpDown } from "lucide-react";
import { data } from "./data";
import { Section } from "../../ui";

export default function Desktop() {
  const s = data;

  return (
    <Section tone="white" ariaLabel="Sort Results" className="!py-4">
      <div className="max-w-[1200px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between"
        >
          <span className="text-[15px] font-bold text-[#0B1D3A]">{s.expertsFound}</span>
          
          <div className="flex items-center gap-4 text-[14px]">
            <span className="font-semibold text-[#475569] flex items-center gap-1.5">
              <ArrowUpDown size={14} />
              Sort by:
            </span>
            <div className="flex items-center gap-1.5 bg-[#F8F9FC] p-1 rounded-[10px] border border-[#E6EBF3]">
              {s.sortByOptions.map((opt, i) => (
                <button
                  key={opt}
                  className={`px-3.5 py-1.5 rounded-[8px] text-[13px] font-semibold transition-all ${
                    i === 0 
                      ? "bg-white text-[#0B1D3A] shadow-sm border border-[#E6EBF3]" 
                      : "text-[#475569] hover:text-[#0B1D3A] hover:bg-white/50 border border-transparent"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
