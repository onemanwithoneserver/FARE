import { motion } from "motion/react";
import { getData, ICONS } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
import { ACCENTS, AccentHairline, CARD_BASE, CARD_HOVER, HoverGlow, IconBadge, Section, SectionHeader, VIEWPORT, fadeUp, staggerContainer, accentAt } from "../../ui";

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <Section tone="soft" ariaLabel="The Simplest Way">
      <SectionHeader eyebrow={data.badge} accent={ACCENTS[8]} title={data.title} description={data.intro} />

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="flex flex-wrap justify-center gap-6 max-w-[1240px] mx-auto mb-16"
      >
        {data.features.map((f, i) => {
          const a = accentAt(i);
          const Icon = ICONS[i % ICONS.length];
          
          return (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] ${CARD_BASE} ${CARD_HOVER} p-8 flex flex-col relative overflow-hidden group`}
            >
              <AccentHairline accent={a} />
              <HoverGlow accent={a} />
              
              <div className="flex flex-col mb-5">
                <IconBadge icon={Icon} accent={a} size="md" className="mb-6" />
                <h3 className="text-[19px] font-bold text-[#0B1D3A] leading-tight">
                  {f.title}
                </h3>
              </div>
              <p className="text-[15px] text-[#475569] font-medium leading-relaxed">
                {f.text}
              </p>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.6 }}
        className="text-center bg-white p-8 rounded-[16px] border border-[#E6EBF3] luxury-shadow-sm max-w-[800px] mx-auto relative overflow-hidden"
      >
        <div className="text-[80px] text-[#C99A2E]/10 absolute -top-4 -left-2 font-serif leading-none select-none">"</div>
        <p className="text-[20px] md:text-[24px] font-medium italic relative z-10 leading-snug text-[#0B1D3A]">
          "{data.quote.replace(/"/g, '')}"
        </p>
      </motion.div>
    </Section>
  );
}