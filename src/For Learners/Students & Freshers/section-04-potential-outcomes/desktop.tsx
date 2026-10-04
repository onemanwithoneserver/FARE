import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { getData, ICONS, GRADIENTS } from "./data";
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
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#FAFBFF] via-white to-[#F5F7FF] py-24 px-10 font-['Outfit'] relative overflow-hidden fare-noise-overlay">
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: `linear-gradient(#0B1D3A 1px, transparent 1px), linear-gradient(90deg, #0B1D3A 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {data.experiences.map((exp, i) => {
            const Icon = ICONS[i % ICONS.length];
            const gradient = GRADIENTS[i % GRADIENTS.length];
            return (
              <motion.div
                key={i}
                variants={item}
                className="bg-white/90 backdrop-blur-xl p-8 rounded-[8px] border border-[#E2E8F0]/80 luxury-shadow-float hover:shadow-[0_24px_60px_-15px_rgba(201,154,46,0.15)] hover:border-[#C99A2E]/30 hover:-translate-y-1 transition-all duration-400 group flex flex-col h-full relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-current to-transparent opacity-[0.03] translate-x-1/3 -translate-y-1/3 rounded-full pointer-events-none" style={{ color: NAVY }} />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-[8px] flex items-center justify-center bg-gradient-to-br ${gradient} shadow-md shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={26} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold tracking-[0.15em] uppercase block mb-1" style={{ color: "#C99A2E" }}>
                      {exp.label}
                    </span>
                    <h3 className="whitespace-nowrap text-xl font-bold leading-tight" style={{ color: NAVY }}>
                      {exp.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-[15.5px] text-[#475569] font-medium leading-relaxed flex-grow">
                  {exp.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {data.closing && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="inline-block bg-white/90 backdrop-blur-md px-10 py-6 rounded-[8px] border border-[#E2E8F0]/80 luxury-shadow-float relative overflow-hidden group hover:border-[#C99A2E]/40 transition-colors duration-400">
              <div className="absolute inset-0 bg-gradient-to-r from-[#C99A2E]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="text-[20px] font-black text-[#0B1D3A] whitespace-pre-wrap leading-relaxed relative z-10 tracking-tight">
                {data.closing}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}