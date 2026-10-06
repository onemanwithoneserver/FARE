import { motion } from "motion/react";
import { ArrowRightLeft } from "lucide-react";
import { getData, ICONS } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
import { ACCENTS, AccentHairline, CARD_BASE, CARD_HOVER, HoverGlow, IconBadge, Section, SectionHeader, VIEWPORT, fadeUp, staggerContainer, accentAt } from "../../../Practice/ui";

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <Section tone="soft" ariaLabel="The Transition">
      <SectionHeader eyebrow="The Transition" icon={ArrowRightLeft} accent={ACCENTS[5]} title={data.title} />

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="flex flex-wrap justify-center items-stretch gap-6 max-w-[1300px] mx-auto mb-16"
      >
        {data.challenges.map((c, i) => {
          const a = accentAt(i);
          const Icon = ICONS[i % ICONS.length];
          
          return (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] ${CARD_BASE} ${CARD_HOVER} p-8 flex flex-col relative overflow-hidden group text-left`}
            >
              <AccentHairline accent={a} />
              <HoverGlow accent={a} />
              
              <div className="flex flex-col mb-5">
                <IconBadge icon={Icon} accent={a} size="md" className="mb-6" />
                <h3 className="text-[19px] font-bold text-[#0B1D3A] leading-tight">
                  {c.title}
                </h3>
              </div>
              
              <p className="text-[15px] text-[#475569] font-medium leading-relaxed flex-grow">
                {c.text}
              </p>
            </motion.div>
          );
        })}
      </motion.div>

      {data.quotes && (
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1100px] mx-auto"
        >
          {data.quotes.map((q, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="p-8 rounded-[16px] bg-[#0B1D3A] text-white font-medium text-[16px] leading-relaxed relative overflow-hidden luxury-shadow-float flex items-start gap-4"
            >
              <span className="text-[#C99A2E] text-4xl font-serif leading-none h-4">"</span>
              <p className="pt-2">{q}</p>
            </motion.div>
          ))}
        </motion.div>
      )}
    </Section>
  );
}