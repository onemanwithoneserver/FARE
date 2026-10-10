import { motion } from "motion/react";
import { Clock, Info } from "lucide-react";
import { data } from "./data";
import { ACCENTS, fadeUp, staggerContainer, Section, SectionHeader, IconBadge } from "../../ui";

export default function Mobile() {
  const s = data;

  return (
    <Section tone="white" mobile ariaLabel="Choose Session">
      <SectionHeader 
        mobile
        eyebrow="Session Duration" 
        icon={Clock} 
        accent={ACCENTS[1]} 
        title={s.title}
        description={s.subtitle}
      />

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col gap-5 mb-6"
      >
        {s.options.map((opt, i) => (
          <motion.div 
            key={opt.duration} 
            variants={fadeUp} 
            className={`relative bg-white rounded-[16px] p-5 border luxury-shadow-sm flex flex-col ${
              opt.recommended ? "border-[#C99A2E]" : "border-[#E6EBF3]"
            }`}
          >
            {opt.recommended && (
              <div className="absolute top-0 right-5 -translate-y-1/2 bg-gradient-to-r from-[#D5AA45] to-[#C99A2E] text-[#0B1D3A] text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                Recommended
              </div>
            )}
            
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <IconBadge icon={Clock} accent={ACCENTS[i === 1 ? 1 : 0]} size="xs" interactive={false} />
                <div className="flex flex-col">
                  <span className="text-[16px] font-black text-[#0B1D3A] leading-tight">{opt.duration}</span>
                  <span className="text-[12px] font-bold text-[#475569]">{opt.label}</span>
                </div>
              </div>
              <span className="text-[18px] font-black text-[#0B1D3A]">{opt.price}</span>
            </div>
            
            <p className="text-[13px] font-medium text-[#475569] leading-snug">
              {opt.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-start gap-2 text-[12px] font-medium text-[#475569] bg-[#F8F9FC] p-3.5 rounded-[10px] border border-[#E6EBF3]"
      >
        <Info size={14} className="text-[#C99A2E] shrink-0 mt-0.5" />
        <p className="leading-snug">{s.footerNote}</p>
      </motion.div>
    </Section>
  );
}
