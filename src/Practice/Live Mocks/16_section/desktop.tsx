import { motion } from "motion/react";
import { ShieldCheck, Info, CheckCircle2 } from "lucide-react";
import { data } from "../data";
import { ACCENTS, Reveal, Section, SectionHeader, VIEWPORT, fadeScale, staggerContainer } from "../../ui";

export default function Desktop() {
  const s = data.trustQuality;

  return (
    <Section tone="soft" ariaLabel="Trust and Quality">
      <SectionHeader eyebrow="Verification" icon={ShieldCheck} accent={ACCENTS[0]} title={s.title} />

      <motion.ul
        variants={staggerContainer(0.04)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="max-w-[900px] mx-auto flex flex-wrap justify-center gap-3 mb-16"
      >
        {s.items.map((item) => (
          <motion.li key={item} variants={fadeScale} className="px-5 py-2.5 rounded-full bg-white border border-[#E6EBF3] luxury-shadow-sm flex items-center gap-2.5 text-[15px] font-semibold text-[#0B1D3A]/85 hover:border-[#C99A2E]/40 hover:text-[#0B1D3A] transition-colors cursor-default">
            <CheckCircle2 size={16} className="text-[#C99A2E]" strokeWidth={2.5} />
            {item}
          </motion.li>
        ))}
      </motion.ul>

      <Reveal delay={0.2} className="max-w-[700px] mx-auto text-center">
        <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white border border-[#E6EBF3] shadow-sm">
          <Info size={16} className="text-[#0B1D3A]/40" strokeWidth={2.5} />
          <p className="text-[13px] text-[#475569] font-medium tracking-wide">
            {s.note}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
