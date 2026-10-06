import { motion } from "motion/react";
import { MapPin, Info } from "lucide-react";
import { data } from "../data";
import { ACCENTS, Chip, Reveal, Section, SectionHeader, VIEWPORT, fadeUp, staggerContainer } from "../ui";

export default function Mobile() {
  const s = data.segments;

  return (
    <Section tone="soft" mobile ariaLabel="Real Estate Segments">
      <SectionHeader mobile eyebrow="Segments" icon={MapPin} accent={ACCENTS[8]} title={s.title} />

      <motion.div variants={staggerContainer(0.08)} initial="hidden" whileInView="show" viewport={VIEWPORT} className="grid grid-cols-1 gap-4 mb-10">
        {s.items.map((segment, i) => {
          const a = ACCENTS[(i + 4) % ACCENTS.length];
          return (
            <motion.div key={segment.title} variants={fadeUp} className="bg-white rounded-[12px] border border-[#E6EBF3] p-5">
              <h3 className="text-[15px] font-bold text-[#0B1D3A] mb-3.5 pb-2 border-b border-[#E6EBF3]/70">
                {segment.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {segment.items.map(item => (
                  <li key={item}>
                    <Chip accent={a} mobile>{item}</Chip>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>

      <Reveal delay={0.1}>
        <div className="flex items-start gap-2.5 p-3.5 rounded-[12px] bg-white border border-[#E6EBF3] shadow-sm">
          <Info size={16} className="text-[#C99A2E] shrink-0 mt-0.5" strokeWidth={2.5} />
          <p className="text-[12.5px] text-[#475569] font-medium leading-relaxed">
            {s.note}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
