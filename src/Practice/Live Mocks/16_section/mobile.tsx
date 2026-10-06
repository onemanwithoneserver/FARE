import { motion } from "motion/react";
import { ShieldCheck, Info, CheckCircle2 } from "lucide-react";
import { data } from "../data";
import { ACCENTS, Reveal, Section, SectionHeader, VIEWPORT, fadeScale, staggerContainer } from "../ui";

export default function Mobile() {
  const s = data.trustQuality;

  return (
    <Section tone="soft" mobile ariaLabel="Trust and Quality">
      <SectionHeader mobile eyebrow="Verification" icon={ShieldCheck} accent={ACCENTS[0]} title={s.title} />

      <motion.ul variants={staggerContainer(0.04)} initial="hidden" whileInView="show" viewport={VIEWPORT} className="flex flex-wrap gap-2.5 mb-10">
        {s.items.map((item) => (
          <motion.li key={item} variants={fadeScale} className="px-4 py-2 rounded-full bg-white border border-[#E6EBF3] luxury-shadow-sm flex items-center gap-2 text-[13px] font-semibold text-[#0B1D3A]/85">
            <CheckCircle2 size={14} className="text-[#C99A2E]" strokeWidth={2.5} />
            {item}
          </motion.li>
        ))}
      </motion.ul>

      <Reveal delay={0.1}>
        <div className="flex items-start gap-2.5 p-3 rounded-[10px] bg-white border border-[#E6EBF3] shadow-sm">
          <Info size={16} className="text-[#0B1D3A]/40 shrink-0 mt-0.5" strokeWidth={2.5} />
          <p className="text-[12px] text-[#475569] font-medium leading-relaxed">
            {s.note}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
