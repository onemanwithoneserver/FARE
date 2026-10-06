import { motion } from "motion/react";
import { Map, Home, Building2, Landmark, MapPin } from "lucide-react";
import { data } from "../data";
import { ACCENTS, Chip, Section, SectionHeader, VIEWPORT, fadeUp, staggerContainer, accentAt } from "../../ui";

const icons = [Home, Map, Building2, Landmark];

export default function Mobile() {
  const sectionData = data.segments;

  return (
    <Section tone="navy" mobile ariaLabel="Real Estate Segments">
      <SectionHeader mobile eyebrow="Segments" icon={MapPin} accent={ACCENTS[8]} title={sectionData.title} description={sectionData.note} dark />

      <motion.div variants={staggerContainer(0.08)} initial="hidden" whileInView="show" viewport={VIEWPORT} className="grid grid-cols-1 gap-4 mb-10">
        {sectionData.items.map((segment, index) => {
          const a = accentAt(index);
          const Icon = icons[index % icons.length];
          return (
            <motion.div key={segment.title} variants={fadeUp} className="bg-white/5 border border-white/10 p-5 rounded-[12px] relative overflow-hidden flex flex-col h-full">
              <span aria-hidden="true" className="absolute top-0 left-5 right-5 h-[2px] rounded-b-full" style={{ background: `linear-gradient(90deg, ${a.from}, ${a.to})` }} />
              
              <div className="flex items-center gap-3.5 mb-4 border-b border-white/10 pb-3 pt-1">
                <div className={`w-10 h-10 rounded-[10px] flex items-center justify-center text-white shrink-0 border border-white/10 shadow-sm`} style={{ background: `linear-gradient(135deg, ${a.from}, ${a.to})` }}>
                  <Icon size={18} strokeWidth={2.5} />
                </div>
                <h3 className="text-[15.5px] font-bold text-white leading-snug">
                  {segment.title}
                </h3>
              </div>
              
              <ul className="flex flex-wrap gap-2">
                {segment.items.map((item, i) => (
                  <li key={i}>
                    <Chip accent={a} mobile className="bg-white/10 border-white/10 text-white/90 hover:bg-white/20">{item}</Chip>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
