import { motion } from "motion/react";
import { data } from "../data";
import { MessageCircle, Search, DollarSign, RotateCcw, MapPin, Users, Briefcase, Crown, Sparkles } from "lucide-react";
import { ACCENTS, IconBadge, Section, SectionHeader, VIEWPORT, fadeScale, staggerContainer, accentAt } from "../../ui";

const icons = [MessageCircle, Search, DollarSign, RotateCcw, MapPin, Users, Briefcase, Crown];

export default function Mobile() {
  const sectionData = data.mockTypes;

  return (
    <Section tone="tint" mobile ariaLabel="Mock Types">
      <SectionHeader mobile eyebrow="Training Scenarios" icon={Sparkles} accent={ACCENTS[5]} title={sectionData.title} description={sectionData.description} />

      <motion.div variants={staggerContainer(0.08)} initial="hidden" whileInView="show" viewport={VIEWPORT} className="flex flex-col gap-4 mt-8 mb-6">
        {sectionData.types.map((type, index) => {
          const a = accentAt(index);
          const Icon = icons[index % icons.length];
          
          return (
            <motion.div
              key={index}
              variants={fadeScale}
              className="bg-white rounded-[16px] border border-[#E6EBF3] luxury-shadow-sm p-6 relative overflow-hidden text-left"
            >
              <span aria-hidden="true" className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full" style={{ background: `linear-gradient(90deg, ${a.from}, ${a.to})` }} />
              
              <div className="relative z-10 flex flex-col">
                <div className="flex items-center gap-3.5 mb-4 pt-1">
                  <IconBadge icon={Icon} accent={a} size="sm" interactive={false} />
                  <h3 className="text-[16px] font-bold text-[#0B1D3A] leading-tight">
                    {type.title}
                  </h3>
                </div>
                
                <p className="text-[14px] text-[#475569] leading-relaxed font-medium italic border-l-2 border-[#E6EBF3] pl-3">
                  "{type.scenario}"
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
