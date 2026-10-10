import { motion } from "motion/react";
import { Clock, Info } from "lucide-react";
import { data } from "./data";
import { ACCENTS, fadeUp, staggerContainer, Section, SectionHeader, IconBadge, PrimaryButton } from "../../ui";

export default function Desktop() {
  const s = data;

  return (
    <Section tone="white" ariaLabel="Choose Session">
      <SectionHeader 
        eyebrow="Session Duration" 
        icon={Clock} 
        accent={ACCENTS[1]} 
        title={s.title}
        description={s.subtitle}
      />

      <div className="max-w-[1000px] mx-auto w-full">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
        >
          {s.options.map((opt, i) => (
            <motion.div 
              key={opt.duration} 
              variants={fadeUp} 
              className={`relative bg-white rounded-[20px] p-8 border luxury-shadow-sm flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                opt.recommended ? "border-[#C99A2E] shadow-[0_12px_32px_-12px_rgba(201,154,46,0.3)]" : "border-[#E6EBF3] hover:border-[#C99A2E]/50"
              }`}
            >
              {opt.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#D5AA45] to-[#C99A2E] text-[#0B1D3A] text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                  Recommended
                </div>
              )}
              
              <div className="flex items-center gap-3 mb-6">
                <IconBadge icon={Clock} accent={ACCENTS[i === 1 ? 1 : 0]} size="sm" interactive={false} />
                <div className="flex flex-col">
                  <span className="text-[18px] font-black text-[#0B1D3A]">{opt.duration}</span>
                  <span className="text-[13px] font-bold text-[#475569]">{opt.label}</span>
                </div>
              </div>
              
              <p className="text-[15px] font-medium text-[#475569] leading-relaxed flex-1 mb-8">
                {opt.desc}
              </p>
              
              <div className="flex items-center justify-between border-t border-[#E6EBF3] pt-6">
                <span className="text-[24px] font-black text-[#0B1D3A]">{opt.price}</span>
                <PrimaryButton variant={opt.recommended ? "gold" : "navy"} className="!py-2.5 !px-5">Select</PrimaryButton>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 text-[14px] font-medium text-[#475569] bg-[#F8F9FC] py-4 rounded-[12px] border border-[#E6EBF3]"
        >
          <Info size={16} className="text-[#C99A2E]" />
          {s.footerNote}
        </motion.div>
      </div>
    </Section>
  );
}
