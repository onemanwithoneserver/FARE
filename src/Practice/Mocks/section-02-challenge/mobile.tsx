import { motion } from "motion/react";
import { AlertCircle, XCircle, Target, HelpCircle, Activity, Frown } from "lucide-react";
import { data } from "../data";
import { ACCENTS, IconBadge, Section, SectionHeader, VIEWPORT, fadeUp, staggerContainer } from "../../ui";

const icons = [AlertCircle, XCircle, Target, HelpCircle, Activity, Frown];

export default function Mobile() {
  const sectionData = data.challenge;

  return (
    <Section tone="soft" mobile ariaLabel="The Challenge">
      <SectionHeader mobile eyebrow="The Challenge" icon={AlertCircle} accent={ACCENTS[0]} title={sectionData.title} description={sectionData.description} />

      <motion.div variants={staggerContainer(0.08)} initial="hidden" whileInView="show" viewport={VIEWPORT} className="flex flex-col gap-4">
        {sectionData.points.map((point, index) => {
          const a = ACCENTS[index % ACCENTS.length];
          const Icon = icons[index % icons.length];
          
          return (
            <motion.div
              key={index}
              variants={fadeUp}
              className="bg-white rounded-[16px] border border-[#E6EBF3] p-5 relative overflow-hidden flex flex-col"
            >
              <span aria-hidden="true" className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full" style={{ background: `linear-gradient(90deg, ${a.from}, ${a.to})` }} />
              
              <div className="flex items-center gap-3 mb-3 pt-1">
                <IconBadge icon={Icon} accent={a} size="sm" interactive={false} />
                <h3 className="text-[15px] font-bold text-[#0B1D3A] leading-snug">
                  {point.title}
                </h3>
              </div>
              <p className="text-[13.5px] text-[#475569] leading-relaxed font-medium">
                {point.desc}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
