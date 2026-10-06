import { motion } from "motion/react";
import {ArrowRightLeft } from "lucide-react";
import { getData, ICONS } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
import { accentAt, IconBadge, ACCENTS, Section, SectionHeader, VIEWPORT, fadeUp, staggerContainer } from "../../../Practice/ui";

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <Section tone="soft" mobile ariaLabel="The Transition">
      <SectionHeader mobile eyebrow="The Transition" icon={ArrowRightLeft} accent={ACCENTS[5]} title={data.title} />

      <motion.div variants={staggerContainer(0.08)} initial="hidden" whileInView="show" viewport={VIEWPORT} className="flex flex-col gap-4 mb-10">
        {data.challenges.map((c, i) => {
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
                  {c.title}
                </h3>
              </div>
              <p className="text-[14.5px] text-[#475569] leading-relaxed font-medium">
                {c.text}
              </p>
            </motion.div>
          );
        })}
      </motion.div>

      </Section>
  );
}