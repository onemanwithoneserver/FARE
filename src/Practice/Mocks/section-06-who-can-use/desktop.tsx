import { motion } from "motion/react";
import { UserCheck, Users, Briefcase, GraduationCap, Building } from "lucide-react";
import { data } from "../data";
import { ACCENTS, AccentHairline, CARD_BASE, CARD_HOVER, HoverGlow, IconBadge, Section, SectionHeader, VIEWPORT, fadeScale, staggerContainer } from "../../ui";

const icons = [Users, Briefcase, GraduationCap, Building];

export default function Desktop() {
  const sectionData = data.whoIsThisFor || data.whoCanUse;

  return (
    <Section tone="white" ariaLabel="Who Can Use">
      <SectionHeader eyebrow="Who It's For" icon={UserCheck} accent={ACCENTS[4]} title={sectionData.title} />

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="flex flex-wrap justify-center items-stretch gap-6 max-w-[1320px] mx-auto mb-12"
      >
        {sectionData.roles.map((role: any, index: number) => {
          const a = ACCENTS[index % ACCENTS.length];
          const Icon = icons[index % icons.length];
          
          return (
            <motion.div
              key={index}
              variants={fadeScale}
              className={`w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] ${CARD_BASE} ${CARD_HOVER} p-7 flex flex-col relative overflow-hidden`}
            >
              <AccentHairline accent={a} />
              <HoverGlow accent={a} />
              
              <IconBadge icon={Icon} accent={a} className="mb-5" />
              <h3 className="relative text-[17px] font-bold text-[#0B1D3A] mb-3 leading-snug">
                {role.title}
              </h3>
              <p className="relative text-[14.5px] text-[#475569] leading-relaxed font-medium">
                {role.desc}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
