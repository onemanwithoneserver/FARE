import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { getData, ICONS, GRADIENTS } from "./data";
import { useLanguage } from "../../../context/LanguageContext";

const NAVY = "#0B1D3A";

export default function Mobile() {
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
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#FAFBFF] via-white to-[#F5F7FF] py-16 px-5 font-['Outfit'] relative overflow-hidden fare-noise-overlay">
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: `linear-gradient(#0B1D3A 1px, transparent 1px), linear-gradient(90deg, #0B1D3A 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
      
      <div className="max-w-[480px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
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
          className="flex flex-col gap-4 mb-12"
        >
          {data.experiences.map((exp, i) => {
            const Icon = ICONS[i % ICONS.length];
            const gradient = GRADIENTS[i % GRADIENTS.length];
            return (
              <motion.div
                key={i}
                variants={item}
                className="bg-[#F8FAFD] p-5 rounded-[8px] border border-[#E2E8F0]/80 shadow-[0_2px_12px_rgba(11,29,58,0.02)] relative overflow-hidden flex flex-col h-full"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-radial from-current to-transparent opacity-[0.03] translate-x-1/3 -translate-y-1/3 rounded-full pointer-events-none" style={{ color: NAVY }} />
                
                <div className="flex items-center gap-3.5 mb-4 relative z-10">
                  <div className={`w-12 h-12 rounded-[8px] flex items-center justify-center bg-gradient-to-br ${gradient} shadow-md shrink-0`}>
                    <Icon size={22} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.15em] uppercase block mb-0.5" style={{ color: "#C99A2E" }}>
                      {exp.label}
                    </span>
                    <h3 className="text-[17px] font-bold leading-tight" style={{ color: NAVY }}>
                      {exp.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-[14.5px] text-[#475569] font-medium leading-relaxed flex-grow relative z-10">
                  {exp.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {data.closing && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <div className="relative bg-[#0B1D3A] px-6 py-8 rounded-[12px] border border-[#1A3668] shadow-[0_8px_30px_rgba(11,29,58,0.2)] overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#C99A2E] via-[#F3E1A0] to-[#C99A2E] opacity-90" />
              
              <div className="relative z-10 flex flex-wrap items-center justify-center gap-x-2 gap-y-4">
                {data.closing.split('.').filter(Boolean).map((step, idx, arr) => {
                  const isLast = idx === arr.length - 1;
                  return (
                    <div key={idx} className="flex items-center gap-2">
                      <div className={`flex items-center gap-2 px-3.5 py-2 rounded-full border ${isLast ? 'bg-gradient-to-r from-[#D5AA45] to-[#C99A2E] border-[#F3E1A0] text-[#0B1D3A] shadow-[0_0_15px_rgba(201,154,46,0.2)]' : 'bg-[#12274F] border-[#1E3F7D] text-[#E2E8F0]'}`}>
                        <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${isLast ? 'bg-[#0B1D3A]' : 'bg-[#94A3B8]'}`} />
                        <span className="text-[10px] font-bold tracking-[0.15em] uppercase whitespace-nowrap">
                          {step.trim()}
                        </span>
                      </div>
                      {!isLast && (
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#64748B]">
                          <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}