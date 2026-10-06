import { motion } from "motion/react";
import { data } from "../data";
import { CheckCircle2, TrendingUp } from "lucide-react";
import { ACCENTS, IconBadge, Section, SectionHeader, VIEWPORT, fadeUp, staggerContainer, accentAt } from "../../ui";

export default function Desktop() {
  const sectionData = data.outcomes;
  
  return (
    <Section tone="soft" ariaLabel="Outcomes">
      <div className="w-full max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex flex-col items-start"
        >
          <SectionHeader eyebrow="The Result" icon={TrendingUp} accent={ACCENTS[4]} title={sectionData.title} align="left" />
          
          <div className="bg-white border border-[#E6EBF3] p-10 rounded-[20px] luxury-shadow-float relative overflow-hidden mt-6 w-full">
            <div className="text-[80px] text-[#C99A2E]/10 absolute -top-4 -left-2 font-serif leading-none select-none">"</div>
            <p className="text-[20px] md:text-[24px] text-[#0B1D3A] font-medium italic relative z-10 leading-snug">
              {sectionData.quote.replace(/"/g, '')}
            </p>
          </div>
        </motion.div>
        
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8"
        >
          {sectionData.items.map((item, index) => {
            const a = accentAt(index);
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                className="flex items-start gap-5 group"
              >
                <div className="mt-1 shrink-0">
                  <IconBadge icon={CheckCircle2} accent={a} size="sm" interactive={false} />
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-[#0B1D3A] mb-2 leading-snug group-hover:text-[#C99A2E] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[14.5px] text-[#475569] leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
