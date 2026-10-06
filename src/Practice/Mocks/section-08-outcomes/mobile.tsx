import { motion } from "motion/react";
import { data } from "../data";
import { CheckCircle2, TrendingUp } from "lucide-react";
import { ACCENTS, IconBadge, Section, SectionHeader, VIEWPORT, fadeUp, staggerContainer, accentAt } from "../../ui";

export default function Mobile() {
  const sectionData = data.outcomes;
  
  return (
    <Section tone="soft" mobile ariaLabel="Outcomes">
      <SectionHeader mobile eyebrow="The Result" icon={TrendingUp} accent={ACCENTS[4]} title={sectionData.title} />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.6 }}
        className="bg-white border border-[#E6EBF3] p-6 rounded-[16px] luxury-shadow-sm relative overflow-hidden mb-10 w-full"
      >
        <div className="text-[60px] text-[#C99A2E]/10 absolute -top-4 -left-1 font-serif leading-none select-none">"</div>
        <p className="text-[17px] text-[#0B1D3A] font-medium italic relative z-10 leading-snug">
          {sectionData.quote.replace(/"/g, '')}
        </p>
      </motion.div>
      
      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="flex flex-col gap-6"
      >
        {sectionData.items.map((item, index) => {
          const a = accentAt(index);
          return (
            <motion.div
              key={index}
              variants={fadeUp}
              className="flex items-start gap-4"
            >
              <div className="mt-1 shrink-0">
                <IconBadge icon={CheckCircle2} accent={a} size="sm" interactive={false} />
              </div>
              <div>
                <h3 className="text-[16px] font-bold text-[#0B1D3A] mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#475569] leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
