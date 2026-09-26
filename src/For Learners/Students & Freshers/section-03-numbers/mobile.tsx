import { motion } from "motion/react";
import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";

const NAVY = "#0B1D3A";

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <section className="w-full bg-white py-16 px-6 font-['Outfit'] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#F8FAFD] to-transparent pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="text-[#C99A2E] text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block">
            {data.title}
          </span>
          <h2 className="text-[1.75rem] font-black text-[#0B1D3A] tracking-tight leading-tight">
            {data.subtitle}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {data.stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex flex-col items-center justify-center p-6 border border-[#E2E8F0]/80 rounded-xl shadow-[0_2px_8px_rgba(11,29,58,0.02)] bg-white relative overflow-hidden"
            >
              <span 
                className="text-[2.5rem] font-black mb-2 relative z-10 leading-none"
                style={{ 
                  color: NAVY,
                  background: `linear-gradient(135deg, ${NAVY}, #1A3668)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                {s.value}
              </span>
              <span className="text-[10px] font-bold text-[#64748B] uppercase tracking-[0.1em] relative z-10 leading-snug">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}