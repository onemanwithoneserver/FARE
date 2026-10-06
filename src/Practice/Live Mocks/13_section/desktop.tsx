import { motion } from "motion/react";
import { CheckCircle, Sparkles } from "lucide-react";
import { data } from "../data";
import { ACCENTS, Section, SectionHeader, VIEWPORT, fadeUp, staggerContainer } from "../../ui";

export default function Desktop() {
  const s = data.whatYouGet;

  return (
    <Section tone="tint" ariaLabel="What You Get">
      <SectionHeader eyebrow="Benefits" icon={Sparkles} accent={ACCENTS[1]} title={s.title} />

      <motion.ul
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6"
      >
        {s.items.map((item) => (
          <motion.li key={item.title} variants={fadeUp} className="flex items-start gap-4 p-6 rounded-[16px] bg-white border border-[#E6EBF3] luxury-shadow-sm transition-transform duration-300 hover:-translate-y-1">
            <span className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
              <CheckCircle size={20} className="text-[#10B981]" strokeWidth={2.5} />
            </span>
            <div className="flex flex-col gap-1.5 pt-0.5">
              <span className="text-[16px] font-bold text-[#0B1D3A] leading-snug">{item.title}</span>
              <span className="text-[14px] text-[#475569] font-medium leading-relaxed">{item.desc}</span>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
