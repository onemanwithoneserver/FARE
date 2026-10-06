import { motion } from "motion/react";
import { Map, Home, Building2, Landmark, MapPin } from "lucide-react";
import { data } from "../data";
import { ACCENTS, Chip, Section, SectionHeader, VIEWPORT, fadeUp, staggerContainer, accentAt } from "../../ui";

const icons = [Home, Map, Building2, Landmark];

export default function Desktop() {
  const sectionData = data.segments;

  return (
    <Section tone="navy" ariaLabel="Real Estate Segments">
      <SectionHeader eyebrow="Segments" icon={MapPin} accent={ACCENTS[8]} title={sectionData.title} description={sectionData.note} dark />

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1320px] mx-auto mb-16"
      >
        {sectionData.items.map((segment, index) => {
          const a = accentAt(index);
          const Icon = icons[index % icons.length];
          return (
            <motion.div
              key={segment.title}
              variants={fadeUp}
              className="bg-white/5 border border-white/10 p-7 rounded-[16px] backdrop-blur-md hover:bg-white/10 hover:border-[#C99A2E]/30 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden flex flex-col h-full luxury-shadow-float"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-radial from-[#C99A2E]/10 to-transparent blur-[15px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-5 border-b border-white/10 pb-4">
                <div className={`w-12 h-12 rounded-[12px] flex items-center justify-center text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 shrink-0 border border-white/10 shadow-sm`} style={{ background: `linear-gradient(135deg, ${a.from}, ${a.to})` }}>
                  <Icon size={22} strokeWidth={2.5} />
                </div>
                <h3 className="text-[17px] font-bold text-white leading-snug group-hover:text-[#E2C068] transition-colors duration-300">
                  {segment.title}
                </h3>
              </div>
              
              <ul className="flex flex-wrap gap-2 mt-2">
                {segment.items.map((item, i) => (
                  <li key={i}>
                    <Chip accent={a} className="bg-white/10 border-white/10 text-white/90 hover:bg-white/20">{item}</Chip>
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
