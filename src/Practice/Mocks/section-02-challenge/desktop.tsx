import { motion } from "motion/react";
import { AlertCircle, XCircle, Target, HelpCircle, Activity, Frown } from "lucide-react";
import { data } from "../data";
import { ACCENTS, AccentHairline, CARD_BASE, CARD_HOVER, HoverGlow, IconBadge, Section, SectionHeader, VIEWPORT, fadeUp, staggerContainer } from "../../ui";

const icons = [AlertCircle, XCircle, Target, HelpCircle, Activity, Frown];

export default function Desktop() {
  const sectionData = data.challenge;

  return (
    <Section tone="soft" ariaLabel="The Challenge">
      <SectionHeader eyebrow="The Challenge" icon={AlertCircle} accent={ACCENTS[0]} title={sectionData.title} description={sectionData.description} />

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="flex flex-wrap justify-center items-stretch gap-6 max-w-[1240px] mx-auto"
      >
        {sectionData.points.map((point, index) => {
          const a = ACCENTS[index % ACCENTS.length];
          const Icon = icons[index % icons.length];
          
          return (
            <motion.div
              key={index}
              variants={fadeUp}
              className={`w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] ${CARD_BASE} ${CARD_HOVER} p-7 flex flex-col relative overflow-hidden`}
            >
              <AccentHairline accent={a} />
              <HoverGlow accent={a} />
              
              <IconBadge icon={Icon} accent={a} className="mb-5" />
              <h3 className="relative text-[17px] font-bold text-[#0B1D3A] mb-3 leading-snug">
                {point.title}
              </h3>
              <p className="relative text-[14.5px] text-[#475569] leading-relaxed font-medium">
                {point.desc}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
