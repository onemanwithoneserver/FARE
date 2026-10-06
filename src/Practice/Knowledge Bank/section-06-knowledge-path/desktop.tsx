import { motion } from "motion/react";
import { ChevronRight, ArrowRight, Waypoints } from "lucide-react";
import { getData, ICONS } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
import { ACCENTS, AccentHairline, CARD_BASE, CARD_HOVER, HoverGlow, IconBadge, Section, SectionHeader, VIEWPORT, accentAt, fadeUp, staggerContainer } from "../../ui";

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <Section tone="soft" ariaLabel="Knowledge Path">
      <SectionHeader eyebrow={data.badge} icon={Waypoints} accent={ACCENTS[5]} title={data.title} />

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto"
      >
        {data.paths.map((path, i) => {
          const a = accentAt(i);
          const Icon = ICONS[i % ICONS.length];
          
          return (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`${CARD_BASE} ${CARD_HOVER} p-10 flex flex-col h-full group relative overflow-hidden`}
            >
              <AccentHairline accent={a} />
              <HoverGlow accent={a} />
              
              <div className="flex items-center gap-4 mb-6">
                <IconBadge icon={Icon} accent={a} size="lg" />
                <h3 className="text-2xl font-black tracking-tight uppercase text-[#0B1D3A]">
                  {path.title}
                </h3>
              </div>
              
              <p className="text-[16px] text-[#475569] font-medium leading-relaxed mb-10 flex-grow">
                {path.text}
              </p>
              
              <button 
                className="mt-auto self-start text-[14px] font-bold uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all duration-300 cursor-pointer"
                style={{ color: a.to }}
              >
                {path.cta} 
                <span className="relative inline-flex items-center justify-center shrink-0 w-[1em] h-[1em]" style={{ fontSize: "16px" }}>
                  <ChevronRight size={16} strokeWidth={2.5} className="absolute inset-0 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-1" />
                  <ArrowRight size={16} strokeWidth={2.5} className="absolute inset-0 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                </span>
              </button>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center"
      >
        <div className="relative inline-flex flex-col items-center justify-center bg-[#0B1D3A] px-12 py-8 rounded-[16px] border border-[#1A3668] luxury-shadow-lg overflow-hidden group hover:-translate-y-1 transition-all duration-300 cursor-pointer">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C99A2E] via-[#F3E1A0] to-[#C99A2E] opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <h4 className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#94A3B8] mb-4 relative z-10 group-hover:text-white transition-colors duration-300">
            {data.more.title}
          </h4>
          <p className="text-[16px] font-bold text-white relative z-10 text-center leading-relaxed" style={{ wordSpacing: "0.2em", letterSpacing: "0.025em" }}>
            {data.more.text}
          </p>
        </div>
      </motion.div>
    </Section>
  );
}