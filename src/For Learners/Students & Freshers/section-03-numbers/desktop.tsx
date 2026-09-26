import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";

const NAVY = "#0B1D3A";

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="w-full bg-white py-24 px-10 font-['Outfit'] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-[#F8FAFD] to-transparent pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-[#C99A2E] text-[11px] font-bold tracking-[0.2em] uppercase mb-4 block">
            {data.title}
          </span>
          <h2 className="text-4xl lg:text-[2.75rem] font-black text-[#0B1D3A] tracking-tight leading-tight">
            {data.subtitle}
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {data.stats.map((s, i) => (
            <motion.div
              key={i}
              variants={item}
              className="flex flex-col items-center justify-center p-10 border border-[#E2E8F0]/80 rounded-2xl hover:shadow-[0_20px_40px_-15px_rgba(11,29,58,0.08)] transition-all duration-300 group bg-white relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0B1D3A]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span 
                className="text-5xl lg:text-6xl font-black mb-4 relative z-10"
                style={{ 
                  color: NAVY,
                  background: `linear-gradient(135deg, ${NAVY}, #1A3668)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                {s.value}
              </span>
              <span className="text-[13px] font-bold text-[#64748B] uppercase tracking-[0.15em] relative z-10">
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}