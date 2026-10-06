import { motion } from "motion/react";
import { data } from "../data";
import { MessageCircle, Search, DollarSign, RotateCcw, MapPin, Users, Briefcase, Crown, Sparkles } from "lucide-react";
import { ACCENTS, CARD_BASE, CARD_HOVER, HoverGlow, AccentHairline, IconBadge, Section, SectionHeader, VIEWPORT, fadeScale, staggerContainer, accentAt } from "../../ui";

const icons = [MessageCircle, Search, DollarSign, RotateCcw, MapPin, Users, Briefcase, Crown];

export default function Desktop() {
  const sectionData = data.mockTypes;

  return (
    <Section tone="tint" ariaLabel="Mock Types">
      <SectionHeader eyebrow="Training Scenarios" icon={Sparkles} accent={ACCENTS[5]} title={sectionData.title} description={sectionData.description} />

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1400px] mx-auto mt-16 mb-12"
      >
        {sectionData.types.map((type, index) => {
          const a = accentAt(index);
          const Icon = icons[index % icons.length];
          
          return (
            <motion.div
              key={index}
              variants={fadeScale}
              className={`${CARD_BASE} ${CARD_HOVER} p-8 flex flex-col relative overflow-hidden text-left`}
            >
              <AccentHairline accent={a} />
              <HoverGlow accent={a} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start gap-4 mb-6">
                  <IconBadge icon={Icon} accent={a} />
                  <div className="pt-2.5">
                    <h3 className="text-[19px] font-bold text-[#0B1D3A] leading-tight">
                      {type.title}
                    </h3>
                  </div>
                </div>
                
                <div className="flex-1 mt-2">
                  <p className="text-[15px] text-[#475569] leading-relaxed font-medium italic border-l-2 border-[#E6EBF3] pl-4">
                    "{type.scenario}"
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
