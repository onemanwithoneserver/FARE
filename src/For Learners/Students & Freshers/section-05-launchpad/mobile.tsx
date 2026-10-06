import { motion } from "motion/react";
import { Rocket } from "lucide-react";
import { getData, ICONS } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
import { accentAt, IconBadge, ACCENTS, Section, SectionHeader, VIEWPORT, fadeUp, staggerContainer } from "../../../Practice/ui";

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <Section tone="white" mobile ariaLabel="FARE Launchpad">
      <SectionHeader mobile eyebrow="Launchpad" icon={Rocket} accent={ACCENTS[4]} title={data.title} />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <p className="text-[15px] text-[#475569] font-medium">
          {data.subtitle}
        </p>
      </motion.div>

      <motion.div variants={staggerContainer(0.08)} initial="hidden" whileInView="show" viewport={VIEWPORT} className="flex flex-col gap-4">
        {data.items.map((item, i) => {
          const a = accentAt(i);
          const Icon = ICONS[i % ICONS.length];
          
          return (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white p-6 rounded-[16px] border border-[#E6EBF3] luxury-shadow-sm flex flex-col relative overflow-hidden group h-full"
            >
              <span aria-hidden="true" className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full" style={{ background: `linear-gradient(90deg, ${a.from}, ${a.to})` }} />
              
              <div className="flex items-center gap-4 mb-4 pt-1">
                <IconBadge icon={Icon} accent={a} size="md" interactive={false} className="shrink-0" />
                <h3 className="text-[18px] font-bold text-[#0B1D3A] tracking-tight leading-snug">
                  {item.title}
                </h3>
              </div>
              
              <p className="text-[14.5px] text-[#475569] font-medium leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}