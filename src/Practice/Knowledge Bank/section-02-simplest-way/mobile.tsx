import { motion } from "motion/react";
import { getData, ICONS } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
import { ACCENTS, IconBadge, Section, SectionHeader, VIEWPORT, fadeUp, staggerContainer, accentAt } from "../../ui";

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <Section tone="soft" mobile ariaLabel="The Simplest Way">
      <SectionHeader mobile eyebrow={data.badge} accent={ACCENTS[8]} title={data.title} description={data.intro} />

      <motion.div variants={staggerContainer(0.08)} initial="hidden" whileInView="show" viewport={VIEWPORT} className="flex flex-col gap-4 mb-10">
        {data.features.map((f, i) => {
          const a = accentAt(i);
          const Icon = ICONS[i % ICONS.length];
          
          return (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white rounded-[16px] border border-[#E6EBF3] p-6 relative overflow-hidden flex flex-col"
            >
              <span aria-hidden="true" className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full" style={{ background: `linear-gradient(90deg, ${a.from}, ${a.to})` }} />
              
              <div className="flex items-center gap-3.5 mb-4 pt-1">
                <IconBadge icon={Icon} accent={a} size="sm" interactive={false} />
                <h3 className="text-[16.5px] font-bold text-[#0B1D3A] leading-tight">
                  {f.title}
                </h3>
              </div>
              <p className="text-[14.5px] text-[#475569] leading-relaxed font-medium">
                {f.text}
              </p>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.6 }}
        className="bg-white p-6 rounded-[16px] border border-[#E6EBF3] luxury-shadow-sm relative overflow-hidden"
      >
        <div className="text-[60px] text-[#C99A2E]/10 absolute -top-4 -left-1 font-serif leading-none select-none">"</div>
        <p className="text-[17px] font-medium italic relative z-10 leading-snug text-[#0B1D3A]">
          "{data.quote.replace(/"/g, '')}"
        </p>
      </motion.div>
    </Section>
  );
}