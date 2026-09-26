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
    <section className="w-full bg-white py-24 px-10 font-['Outfit'] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.015] pointer-events-none mix-blend-multiply" />
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
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
                className="bg-[#F8FAFD] p-8 rounded-[4px] border border-[#E2E8F0]/80 shadow-[0_4px_16px_rgba(11,29,58,0.02)] hover:shadow-[0_12px_32px_rgba(11,29,58,0.06)] hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-current to-transparent opacity-[0.03] translate-x-1/3 -translate-y-1/3 rounded-full pointer-events-none" style={{ color: NAVY }} />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-[4px] flex items-center justify-center bg-gradient-to-br ${gradient} shadow-md shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={26} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase block mb-1" style={{ color: "#C99A2E" }}>
                      {exp.label}
                    </span>
                    <h3 className="text-xl font-bold leading-tight" style={{ color: NAVY }}>
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
      </div>
    </section>
  );
}