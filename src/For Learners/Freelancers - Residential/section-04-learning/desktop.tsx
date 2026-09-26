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
    <section className="w-full bg-white py-24 px-10 font-['Outfit'] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#C99A2E] text-[11px] font-bold tracking-[0.2em] uppercase mb-3 block">
            Learning Experience
          </span>
          <h2 className="text-4xl lg:text-[2.75rem] font-black text-[#0B1D3A] tracking-tight leading-tight max-w-4xl mx-auto">
            {data.title}
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {data.experiences.map((exp, i) => {
            const Icon = ICONS[i % ICONS.length];
            const gradient = GRADIENTS[i % GRADIENTS.length];
            
            return (
              <motion.div
                key={i}
                variants={item}
                className="bg-[#F8FAFD] p-8 rounded-[4px] border border-[#E2E8F0] shadow-[0_2px_10px_rgba(11,29,58,0.02)] hover:shadow-[0_12px_28px_rgba(11,29,58,0.07)] hover:border-[#C99A2E]/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-[4px] flex items-center justify-center bg-gradient-to-br ${gradient} shadow-md group-hover:scale-105 transition-transform duration-300`}>
                    <Icon size={22} className="text-white" strokeWidth={2.5} />
                  </div>
                  <span className="text-[11px] font-bold text-[#C99A2E] tracking-wider uppercase px-2.5 py-1 bg-[#C99A2E]/10 rounded-[4px] border border-[#C99A2E]/20">
                    {exp.label}
                  </span>
                </div>
                
                <h3 className="text-[18px] font-bold text-[#0B1D3A] mb-3 tracking-wide leading-snug">
                  {exp.title}
                </h3>
                
                <p className="text-[14px] text-[#64748B] font-medium leading-relaxed flex-grow">
                  {exp.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}