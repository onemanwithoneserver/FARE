import { motion } from "motion/react";
import { ChevronRight, Target } from "lucide-react";
import { getData, ICONS } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
import { accentAt, IconBadge, ACCENTS, Section, SectionHeader, VIEWPORT, fadeUp, staggerContainer } from "../../../Practice/ui";

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <Section tone="soft" mobile ariaLabel="Career Outcomes">
      <SectionHeader mobile eyebrow="Outcomes" icon={Target} accent={ACCENTS[0]} title={data.title} />

      <motion.div variants={staggerContainer(0.08)} initial="hidden" whileInView="show" viewport={VIEWPORT} className="flex flex-col gap-4">
        {data.outcomes.map((itemData, i) => {
          const a = accentAt(i);
          const Icon = ICONS[i % ICONS.length];
          
          return (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white p-6 rounded-[16px] border border-[#E6EBF3] luxury-shadow-sm flex flex-col relative overflow-hidden group h-full"
            >
              <span aria-hidden="true" className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full" style={{ background: `linear-gradient(90deg, ${a.from}, ${a.to})` }} />
              
              <div className="flex items-start gap-4 mb-5 pt-1">
                <IconBadge icon={Icon} accent={a} size="md" interactive={false} className="shrink-0" />
                <div>
                  
                  <h3 className="text-[17px] font-bold text-[#0B1D3A] tracking-tight leading-snug">
                    {itemData.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-[14.5px] text-[#475569] font-medium leading-relaxed mb-6 flex-grow">
                {itemData.text}
              </p>
              
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm border border-[#E6EBF3] mt-auto self-end">
                <span className="relative inline-flex items-center justify-center shrink-0 w-[1em] h-[1em] text-[#0B1D3A]" style={{ fontSize: "16px" }}>
                  <ChevronRight size={16} strokeWidth={2.5} className="absolute inset-0" />
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}