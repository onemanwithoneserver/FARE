import { motion } from "motion/react";
import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
import { Section, VIEWPORT, fadeUp, staggerContainer } from "../../ui";

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <Section tone="navy" ariaLabel="By The Numbers" className="border-y border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#C99A2E]/10 to-transparent blur-[80px] pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D5AA45] to-[#C99A2E] text-[12px] font-bold tracking-[0.25em] uppercase mb-4 block">
            {data.title}
          </span>
          <h2 className="text-white text-4xl lg:text-[3rem] font-black tracking-tight leading-tight mb-6">
            {data.subtitle}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D5AA45] via-[#F3E1A0] to-[#C99A2E] mx-auto rounded-full shadow-[0_0_15px_rgba(201,154,46,0.4)]" />
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {data.stats.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex flex-col items-center justify-center p-10 lg:py-12 border border-white/[0.06] rounded-[16px] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#C99A2E]/30 backdrop-blur-sm transition-all duration-500 group relative overflow-hidden luxury-shadow-float"
            >
              <div className="absolute -inset-full bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 group-hover:-inset-0 transition-all duration-700 pointer-events-none" />
              
              <span className="text-5xl lg:text-[4rem] font-black mb-3 leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60 group-hover:from-[#F3E1A0] group-hover:via-[#D5AA45] group-hover:to-[#A37B22] transition-all duration-500 relative z-10 drop-shadow-sm">
                {s.value}
              </span>
              <span className="text-[12px] lg:text-[13px] font-bold text-[#94A3B8] uppercase tracking-[0.2em] relative z-10 group-hover:text-white/90 transition-colors duration-300 max-w-[200px]">
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}