import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { ArrowRight } from "lucide-react";
import { getData, ICONS, GRADIENTS } from "./data";
import { useLanguage } from "../../../context/LanguageContext";

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
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
            {data.badge}
          </span>
          <h2 className="text-4xl lg:text-[2.75rem] font-black text-[#0B1D3A] tracking-tight leading-tight mb-4">
            {data.title}
          </h2>
          <p className="text-[17px] text-[#64748B] font-medium max-w-2xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {data.opportunities.map((itemData, i) => {
            const Icon = ICONS[i % ICONS.length];
            const gradient = GRADIENTS[i % GRADIENTS.length];
            
            return (
              <motion.div
                key={i}
                variants={item}
                className="bg-[#F8FAFD] p-8 rounded-[4px] border border-[#E2E8F0] shadow-[0_2px_12px_rgba(11,29,58,0.02)] hover:shadow-[0_16px_36px_rgba(11,29,58,0.08)] hover:border-[#C99A2E]/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full group"
              >
                <div className={`w-14 h-14 rounded-[4px] flex items-center justify-center bg-gradient-to-br ${gradient} shadow-md mb-6 group-hover:scale-105 transition-transform duration-300`}>
                  <Icon size={26} className="text-white" strokeWidth={2.5} />
                </div>
                
                <span className="text-[11px] font-bold text-[#64748B] tracking-wider uppercase block mb-1">
                  {itemData.category}
                </span>
                <h3 className="text-[19px] font-bold text-[#0B1D3A] mb-3 tracking-wide leading-tight">
                  {itemData.title}
                </h3>
                
                <p className="text-[15px] text-[#475569] font-medium leading-relaxed mb-8 flex-grow">
                  {itemData.text}
                </p>
                
                <div className="w-10 h-10 rounded-[4px] bg-white flex items-center justify-center shadow-sm border border-[#E2E8F0] mt-auto self-end group-hover:bg-[#0B1D3A] group-hover:border-[#0B1D3A] transition-colors duration-300">
                  <ArrowRight size={18} className="text-[#0B1D3A] group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}