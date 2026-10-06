import { motion } from "motion/react";
import { ChevronRight, ArrowRight, Target } from "lucide-react";
import { getData, ICONS } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
import { ACCENTS, AccentHairline, CARD_BASE, CARD_HOVER, HoverGlow, IconBadge, Section, SectionHeader, VIEWPORT, accentAt, fadeUp, staggerContainer } from "../../../Practice/ui";

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <Section tone="soft" ariaLabel="Career Outcomes">
      <SectionHeader eyebrow="Outcomes" icon={Target} accent={ACCENTS[0]} title={data.title} />

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto"
      >
        {data.outcomes.map((itemData, i) => {
          const a = accentAt(i);
          const Icon = ICONS[i % ICONS.length];
          
          return (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`${CARD_BASE} ${CARD_HOVER} p-8 flex flex-col h-full group relative overflow-hidden`}
            >
              <AccentHairline accent={a} />
              <HoverGlow accent={a} />
              
              <div className="mb-6">
                <IconBadge icon={Icon} accent={a} size="lg" className="mb-4" />
                
                <h3 className="text-[19px] font-bold text-[#0B1D3A] tracking-wide leading-tight">
                  {itemData.title}
                </h3>
              </div>
              
              <p className="text-[15px] text-[#475569] font-medium leading-relaxed mb-8 flex-grow">
                {itemData.text}
              </p>
              
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-[#E6EBF3] mt-auto self-end transition-colors duration-300 group-hover:border-transparent cursor-pointer" style={{ backgroundColor: "white" }}>
                <span className="relative inline-flex items-center justify-center shrink-0 w-[1em] h-[1em] text-[#0B1D3A] group-hover:text-white z-10" style={{ fontSize: "18px" }}>
                  <ChevronRight size={18} strokeWidth={2.5} className="absolute inset-0 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-1" />
                  <ArrowRight size={18} strokeWidth={2.5} className="absolute inset-0 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                </span>
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(135deg, ${a.from}, ${a.to})` }} />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}