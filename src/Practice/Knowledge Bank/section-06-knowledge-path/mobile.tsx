import { motion } from "motion/react";
import { ChevronRight, ArrowRight, Waypoints } from "lucide-react";
import { getData, ICONS } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
import { ACCENTS, IconBadge, Section, SectionHeader, VIEWPORT, accentAt, fadeUp, staggerContainer } from "../../ui";

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <Section tone="soft" mobile ariaLabel="Knowledge Path">
      <SectionHeader mobile eyebrow={data.badge} icon={Waypoints} accent={ACCENTS[5]} title={data.title} />

      <motion.div variants={staggerContainer(0.08)} initial="hidden" whileInView="show" viewport={VIEWPORT} className="flex flex-col gap-5 mb-10">
        {data.paths.map((path, i) => {
          const a = accentAt(i);
          const Icon = ICONS[i % ICONS.length];
          
          return (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white p-7 rounded-[16px] border border-[#E6EBF3] luxury-shadow-sm flex flex-col relative overflow-hidden group"
            >
              <span aria-hidden="true" className="absolute top-0 left-7 right-7 h-[2px] rounded-b-full" style={{ background: `linear-gradient(90deg, ${a.from}, ${a.to})` }} />
              
              <div className="flex items-center gap-3.5 mb-5 pt-1">
                <IconBadge icon={Icon} accent={a} size="md" interactive={false} />
                <h3 className="text-[19px] font-black tracking-tight uppercase text-[#0B1D3A]">
                  {path.title}
                </h3>
              </div>
              
              <p className="text-[14.5px] text-[#475569] font-medium leading-relaxed mb-8">
                {path.text}
              </p>
              
              <button 
                className="mt-auto text-[13px] font-bold uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                style={{ color: a.to }}
              >
                {path.cta} 
                <span className="relative inline-flex items-center justify-center shrink-0 w-[1em] h-[1em]" style={{ fontSize: "14px" }}>
                  <ChevronRight size={14} strokeWidth={2.5} className="absolute inset-0 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-1" />
                  <ArrowRight size={14} strokeWidth={2.5} className="absolute inset-0 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                </span>
              </button>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="relative flex flex-col items-center justify-center bg-[#0B1D3A] px-8 py-7 rounded-[12px] border border-[#1A3668] shadow-lg overflow-hidden active:scale-[0.98] transition-transform duration-300">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#C99A2E] via-[#F3E1A0] to-[#C99A2E] opacity-90" />
          
          <h4 className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#94A3B8] mb-3.5 relative z-10">
            {data.more.title}
          </h4>
          <p className="text-[14px] font-bold text-white leading-relaxed relative z-10 text-center" style={{ wordSpacing: "0.15em", letterSpacing: "0.02em" }}>
            {data.more.text}
          </p>
        </div>
      </motion.div>
    </Section>
  );
}