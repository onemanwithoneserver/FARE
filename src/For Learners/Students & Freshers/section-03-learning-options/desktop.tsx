import { motion } from "motion/react";
import { BookOpen } from "lucide-react";
import { getData, ICONS } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
import { ACCENTS, AccentHairline, CARD_BASE, CARD_HOVER, HoverGlow, IconBadge, Section, SectionHeader, VIEWPORT, accentAt, fadeScale, staggerContainer } from "../../../Practice/ui";

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <Section tone="white" ariaLabel="Learning Options">
      <SectionHeader eyebrow="Learning Options" icon={BookOpen} accent={ACCENTS[7]} title={data.title} />

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto"
      >
        {data.categories.map((cat, i) => {
          const a = accentAt(i);
          const Icon = ICONS[i % ICONS.length];
          
          return (
            <motion.div
              key={i}
              variants={fadeScale}
              className={`${CARD_BASE} ${CARD_HOVER} p-8 flex flex-col h-full group relative overflow-hidden`}
            >
              <AccentHairline accent={a} />
              <HoverGlow accent={a} />
              
              <div className="flex items-center justify-between mb-6">
                <IconBadge icon={Icon} accent={a} size="md" />
                <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border" style={{ color: a.to, backgroundColor: `${a.from}15`, borderColor: `${a.to}30` }}>
                  {cat.name}
                </span>
              </div>
              
              <h3 className="text-[18px] font-bold text-[#0B1D3A] mb-3 tracking-wide leading-snug">
                {cat.subtitle}
              </h3>
              
              <p className="text-[14.5px] text-[#475569] font-medium leading-relaxed flex-grow">
                {cat.text}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}