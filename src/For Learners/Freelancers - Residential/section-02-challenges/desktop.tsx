import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { getData, ICONS, GRADIENTS } from "./data";
import { useLanguage } from "../../../context/LanguageContext";

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="w-full bg-[#FFF5F5] py-24 px-10 font-['Outfit'] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-[#EF4444]/[0.05] to-transparent rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <span className="text-[#EF4444] bg-[#FEF2F2] border border-[#FECACA] px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
              Real Challenges
            </span>
          </div>
          <h2 className="text-4xl lg:text-[2.75rem] font-black text-[#0B1D3A] tracking-tight leading-tight max-w-4xl mx-auto">
            {data.title}
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12"
        >
          {data.challenges.map((c, i) => {
            const Icon = ICONS[i % ICONS.length];
            const gradient = GRADIENTS[i % GRADIENTS.length];
            
            return (
              <motion.div
                key={i}
                variants={item}
                className="bg-white p-7 rounded-[4px] border border-[#E2E8F0] shadow-[0_2px_10px_rgba(11,29,58,0.03)] hover:shadow-[0_12px_28px_rgba(11,29,58,0.08)] hover:border-[#C99A2E]/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full group"
              >
                <div className={`w-12 h-12 rounded-[4px] flex items-center justify-center bg-gradient-to-br ${gradient} shadow-md mb-6 group-hover:scale-105 transition-transform duration-300`}>
                  <Icon size={22} className="text-white" strokeWidth={2.5} />
                </div>
                
                <h3 className="text-[17px] font-bold text-[#0B1D3A] mb-3 tracking-wide leading-snug">
                  {c.title}
                </h3>
                
                <p className="text-[14px] text-[#64748B] font-medium leading-relaxed flex-grow">
                  {c.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {data.quotes && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.quotes.map((q, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 rounded-[4px] bg-[#0B1D3A] border border-[#C99A2E]/30 text-white font-medium text-[15px] leading-relaxed relative overflow-hidden"
              >
                <span className="text-[#C99A2E] text-2xl font-serif mr-2">“</span>
                {q}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}