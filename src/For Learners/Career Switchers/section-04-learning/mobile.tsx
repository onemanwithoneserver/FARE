import { motion } from "motion/react";
import { BookOpen } from "lucide-react";
import { getData, ICONS } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
import { accentAt, IconBadge, ACCENTS, Section, SectionHeader, VIEWPORT, fadeScale, staggerContainer } from "../../../Practice/ui";

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <Section tone="white" mobile ariaLabel="Learning Experience">
      <SectionHeader mobile eyebrow="Learning Experience" icon={BookOpen} accent={ACCENTS[7]} title={data.title} />

      <motion.div variants={staggerContainer(0.08)} initial="hidden" whileInView="show" viewport={VIEWPORT} className="flex flex-col gap-4">
        {data.experiences.map((exp, i) => {
          const a = accentAt(i);
          const Icon = ICONS[i % ICONS.length];
          
          return (
            <motion.div
              key={i}
              variants={fadeScale}
              className="bg-white rounded-[16px] border border-[#E6EBF3] p-5 relative overflow-hidden flex flex-col h-full"
            >
              <span aria-hidden="true" className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full" style={{ background: `linear-gradient(90deg, ${a.from}, ${a.to})` }} />
              
              <div className="flex items-center justify-between mb-4 pt-1">
                <IconBadge icon={Icon} accent={a} size="sm" interactive={false} />
                <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded-full border" style={{ color: a.to, backgroundColor: `${a.from}15`, borderColor: `${a.to}30` }}>
                  {exp.label}
                </span>
              </div>
              
              <h3 className="text-[16px] font-bold text-[#0B1D3A] mb-2 leading-snug">
                {exp.title}
              </h3>
              
              <p className="text-[14px] text-[#475569] font-medium leading-relaxed">
                {exp.text}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}