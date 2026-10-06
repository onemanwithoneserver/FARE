import { motion } from "motion/react";
import { CheckCircle, Sparkles } from "lucide-react";
import { data } from "../data";
import { ACCENTS, Section, SectionHeader, VIEWPORT, fadeUp, staggerContainer } from "../../ui";

export default function Mobile() {
  const s = data.whatYouGet;

  return (
    <Section tone="tint" mobile ariaLabel="What You Get">
      <SectionHeader mobile eyebrow="Benefits" icon={Sparkles} accent={ACCENTS[1]} title={s.title} />

      <motion.ul variants={staggerContainer(0.08)} initial="hidden" whileInView="show" viewport={VIEWPORT} className="flex flex-col gap-3">
        {s.items.map((item) => (
          <motion.li key={item.title} variants={fadeUp} className="flex items-start gap-3.5 p-5 rounded-[16px] bg-white border border-[#E6EBF3] luxury-shadow-sm">
            <span className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
              <CheckCircle size={16} className="text-[#10B981]" strokeWidth={2.5} />
            </span>
            <div className="flex flex-col gap-1 pt-0.5">
              <span className="text-[15px] font-bold text-[#0B1D3A] leading-snug">{item.title}</span>
              <span className="text-[13.5px] text-[#475569] font-medium leading-relaxed">{item.desc}</span>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
