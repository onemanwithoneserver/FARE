import { motion } from "motion/react";
import { Target } from "lucide-react";
import { getData, ICONS } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
import { accentAt, IconBadge, HoverGlow, ACCENTS, AccentHairline, CARD_BASE, CARD_HOVER, Section, SectionHeader, VIEWPORT, fadeUp, staggerContainer } from "../../../Practice/ui";

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <Section tone="soft" ariaLabel="Career Outcomes">
      <SectionHeader eyebrow="Outcomes" icon={Target} accent={ACCENTS[0]} title={data.title} />

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto"
      >
        {data.outcomes.map((itemData, i) => {
          const a = accentAt(i);
          const Icon = ICONS[i % ICONS.length];
          
          return (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`${CARD_BASE} ${CARD_HOVER} p-8 flex flex-col h-full group relative overflow-hidden`}
            >
              <AccentHairline accent={a} />
              <HoverGlow accent={a} />
              
              <div className="mb-6">
                <IconBadge icon={Icon} accent={a} size="lg" className="mb-4" />
                <h3 className="text-[19px] font-bold text-[#0B1D3A] tracking-wide leading-tight">
                  {itemData.title}
                </h3>
              </div>
              
              <p className="text-[15px] text-[#475569] font-medium leading-relaxed ">
                {itemData.text}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}