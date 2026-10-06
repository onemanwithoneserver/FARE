import { motion } from "motion/react";
import { MapPin, Info } from "lucide-react";
import { data } from "../data";
import { ACCENTS, Chip, Reveal, Section, SectionHeader, VIEWPORT, fadeUp, staggerContainer } from "../../ui";

export default function Desktop() {
  const s = data.segments;

  return (
    <Section tone="soft" ariaLabel="Real Estate Segments">
      <SectionHeader eyebrow="Segments" icon={MapPin} accent={ACCENTS[8]} title={s.title} />

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1240px] mx-auto mb-16"
      >
        {s.items.map((segment, i) => {
          const a = ACCENTS[(i + 4) % ACCENTS.length]; // Offset accent so it doesn't match nearby sections perfectly
          return (
            <motion.div
              key={segment.title}
              variants={fadeUp}
              className="bg-white rounded-[16px] border border-[#E6EBF3] luxury-shadow-sm p-6 flex flex-col group hover:border-[#C99A2E]/40 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-[17px] font-bold text-[#0B1D3A] mb-5 border-b border-[#E6EBF3] pb-3" style={{ borderBottomColor: a.glow }}>
                {segment.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {segment.items.map(item => (
                  <li key={item}>
                    <Chip accent={a}>{item}</Chip>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>

      <Reveal delay={0.2} className="max-w-[700px] mx-auto text-center">
        <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white border border-[#E6EBF3] shadow-sm">
          <Info size={16} className="text-[#C99A2E]" strokeWidth={2.5} />
          <p className="text-[13px] text-[#475569] font-semibold tracking-wide">
            {s.note}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
