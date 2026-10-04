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
    <section className="w-full bg-gradient-to-br from-[#FAFBFF] via-white to-[#F5F7FF] py-24 px-10 font-['Outfit'] relative overflow-hidden fare-noise-overlay">
      <div className="absolute inset-0 bg-[#F8FAFD]/50 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-[#C99A2E]/[0.03] to-transparent rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-[#0B1D3A]/[0.02] to-transparent rounded-full blur-[60px] pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="whitespace-nowrap text-[#0B1D3A] text-4xl lg:text-[2.75rem] font-black tracking-tight leading-tight max-w-4xl mx-auto mb-4">
            {data.title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-6 mt-4 rounded-full" />
          {data.subtitle && (
            <p className="text-[18px] text-[#475569] font-medium max-w-3xl mx-auto leading-relaxed">
              {data.subtitle}
            </p>
          )}
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {data.categories.map((category, i) => {
            const Icon = ICONS[i % ICONS.length];
            const gradient = GRADIENTS[i % GRADIENTS.length];

            return (
              <motion.div
                key={i}
                variants={item}
                className="bg-white/90 backdrop-blur-xl p-7 rounded-[8px] luxury-shadow-float border border-[#E2E8F0]/80 hover:luxury-shadow-float hover:-translate-y-1 transition-all duration-400 group flex flex-col h-full"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-[8px] flex items-center justify-center bg-gradient-to-br ${gradient} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={22} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="whitespace-nowrap text-[18px] font-bold text-[#0B1D3A] leading-tight mb-1">{category.name}</h3>
                    <p className="text-[13px] font-bold text-[#C99A2E] tracking-wide uppercase">{category.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-[15px] text-[#475569] font-medium leading-relaxed mt-2 flex-grow">
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