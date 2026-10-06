import { motion } from "motion/react";
import { Rocket } from "lucide-react";
import { getData, ICONS } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
import { accentAt, IconBadge, HoverGlow, ACCENTS, AccentHairline, CARD_BASE, CARD_HOVER, Section, SectionHeader, VIEWPORT, fadeUp, staggerContainer } from "../../../Practice/ui";

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <Section tone="white" ariaLabel="FARE Launchpad">
      <SectionHeader eyebrow="Launchpad" icon={Rocket} accent={ACCENTS[4]} title={data.title} />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-[17px] text-[#475569] font-medium max-w-2xl mx-auto leading-relaxed">
          {data.subtitle}
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto"
      >
        {data.items.map((item, i) => {
          const a = accentAt(i);
          const Icon = ICONS[i % ICONS.length];
          
          return (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`${CARD_BASE} ${CARD_HOVER} p-10 flex flex-col h-full group relative overflow-hidden`}
            >
              <AccentHairline accent={a} />
              <HoverGlow accent={a} />
              
              <div className="flex items-center gap-4 mb-6">
                <IconBadge icon={Icon} accent={a} size="lg" />
                <h3 className="text-[22px] font-bold text-[#0B1D3A] tracking-wide leading-tight">
                  {item.title}
                </h3>
              </div>
              
              <p className="text-[16px] text-[#475569] font-medium leading-relaxed flex-grow">
                {item.text}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}