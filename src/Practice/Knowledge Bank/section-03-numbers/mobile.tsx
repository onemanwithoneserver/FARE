import { motion } from "motion/react";
import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <section className="w-full bg-[#0B1D3A] py-20 px-6 font-['Outfit'] relative overflow-hidden fare-noise-overlay border-y border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#C99A2E]/10 to-transparent blur-[60px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)", backgroundSize: "24px 24px" }} />
      
      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D5AA45] to-[#C99A2E] text-[11px] font-bold tracking-[0.2em] uppercase mb-4 block">
            {data.title}
          </span>
          <h2 className="text-white text-[1.85rem] leading-[1.15] font-black tracking-tight mb-5">
            {data.subtitle}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#D5AA45] via-[#F3E1A0] to-[#C99A2E] mx-auto rounded-full shadow-[0_0_15px_rgba(201,154,46,0.4)]" />
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {data.stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex flex-col items-center justify-center p-6 py-8 border border-white/[0.06] rounded-[6px] bg-white/[0.02] active:bg-white/[0.04] backdrop-blur-sm relative overflow-hidden"
            >
              <span className="text-[2.5rem] font-black mb-2 leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60 relative z-10">
                {s.value}
              </span>
              <span className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-[0.15em] relative z-10 max-w-[120px] leading-snug">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}