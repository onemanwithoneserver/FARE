import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { getData, ICONS, GRADIENTS } from "./data";
import { useLanguage } from "../../../context/LanguageContext";

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#FAFBFF] via-white to-[#F5F7FF] py-16 px-5 font-['Outfit'] relative overflow-hidden fare-noise-overlay">
      <div className="absolute inset-0 bg-[#F8FAFD]/50 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-radial from-[#C99A2E]/[0.03] to-transparent rounded-full blur-[60px] pointer-events-none" />
      
      <div className="max-w-[480px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h2 className="text-[#0B1D3A] text-3xl font-black tracking-tight leading-tight mb-3">
            {data.title}
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-5 mt-4 rounded-full" />
          {data.subtitle && (
            <p className="text-[15.5px] text-[#475569] font-medium leading-relaxed">
              {data.subtitle}
            </p>
          )}
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="flex flex-col gap-4"
        >
          {data.categories.map((category, i) => {
            const Icon = ICONS[i % ICONS.length];
            const gradient = GRADIENTS[i % GRADIENTS.length];

            return (
              <motion.div
                key={i}
                variants={item}
                className="bg-white p-5 rounded-[8px] shadow-[0_2px_12px_rgba(11,29,58,0.03)] border border-[#E2E8F0]/80 flex flex-col h-full"
              >
                <div className="flex items-center gap-3.5 mb-4">
                  <div className={`w-10 h-10 rounded-[8px] flex items-center justify-center bg-gradient-to-br ${gradient} shadow-sm shrink-0`}>
                    <Icon size={18} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-[#0B1D3A] leading-tight mb-0.5">{category.name}</h3>
                    <p className="text-[11.5px] font-bold text-[#C99A2E] tracking-wide uppercase">{category.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-[14.5px] text-[#475569] font-medium leading-relaxed mt-1">
                  {category.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}