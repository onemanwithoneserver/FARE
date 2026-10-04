import { motion } from "motion/react";
import { ChevronRight, ArrowRight } from "lucide-react";

import { getData, ICONS, GRADIENTS } from "./data";
import { useLanguage } from "../../../context/LanguageContext";

const NAVY = "#0B1D3A";

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <section className="w-full bg-gradient-to-br from-[#F8FAFD] via-[#F0F4FF] to-[#FAFBFF] py-24 px-10 font-['Outfit'] relative overflow-hidden fare-noise-overlay">
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-gradient-radial from-[#C99A2E]/[0.03] to-transparent rounded-full blur-[80px] pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#C99A2E] text-[11px] font-bold tracking-[0.2em] uppercase mb-4 block">
            {data.badge}
          </span>
          <h2 className="text-[#0B1D3A] text-4xl lg:text-[2.75rem] font-black tracking-tight leading-tight">
            {data.title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-6 mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {data.paths.map((path, i) => {
            const Icon = ICONS[i % ICONS.length];
            const gradient = GRADIENTS[i % GRADIENTS.length];
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-white p-10 rounded-[4px] border border-[#E2E8F0]/80 luxury-shadow-float hover:shadow-[0_24px_60px_-15px_rgba(201,154,46,0.15)] hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-[4px] flex shrink-0 items-center justify-center bg-gradient-to-br ${gradient} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={28} className="text-white" strokeWidth={2.5} />
                  </div>
                  
                  <h3 className="text-2xl font-black tracking-tight uppercase" style={{ color: NAVY }}>
                    {path.title}
                  </h3>
                </div>
                
                <p className="text-[16px] text-[#475569] font-medium leading-relaxed mb-10 flex-grow">
                  {path.text}
                </p>
                
                <button 
                  className="mt-auto self-start text-[14px] font-bold uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                  style={{ color: i === 0 ? "#0284C7" : "#D97706" }}
                >
                  {path.cta} 
                  <span className={`relative inline-flex items-center justify-center shrink-0 w-[1em] h-[1em] ${""}`} style={{ fontSize: `${16}px` }}>
      <ChevronRight size={16} strokeWidth={2.5} className="absolute inset-0 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-1" />
      <ArrowRight size={16} strokeWidth={2.5} className="absolute inset-0 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
    </span>
                </button>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="inline-block bg-white px-8 py-5 rounded-[4px] border border-[#E2E8F0]/50 shadow-sm">
            <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#64748B] mb-3">
              {data.more.title}
            </h4>
            <p className="text-[15px] font-semibold text-[#0B1D3A]">
              {data.more.text}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}