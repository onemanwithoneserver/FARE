import { motion } from "motion/react";
import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
import { Section, VIEWPORT, fadeUp, staggerContainer } from "../../ui";

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <Section tone="navy" mobile ariaLabel="By The Numbers" className="border-y border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-radial from-[#C99A2E]/10 to-transparent blur-[60px] pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D5AA45] to-[#C99A2E] text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block">
            {data.title}
          </span>
          <h2 className="text-white text-3xl font-black tracking-tight leading-tight mb-5">
            {data.subtitle}
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#D5AA45] via-[#F3E1A0] to-[#C99A2E] mx-auto rounded-full shadow-[0_0_15px_rgba(201,154,46,0.4)]" />
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="grid grid-cols-1 gap-4"
        >
          {data.stats.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex flex-col items-center justify-center p-8 border border-white/[0.06] rounded-[16px] bg-white/[0.02] backdrop-blur-sm relative overflow-hidden"
            >
              <span className="text-[44px] font-black mb-2 leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#F3E1A0] via-[#D5AA45] to-[#A37B22] relative z-10 drop-shadow-sm">
                {s.value}
              </span>
              <span className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-[0.2em] relative z-10 max-w-[200px]">
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}