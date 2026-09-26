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
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="w-full bg-[#0B1D3A] py-24 px-10 font-['Outfit'] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-[#C99A2E]/[0.05] to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-radial from-[#38BDF8]/[0.05] to-transparent rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-[2.75rem] font-black text-white tracking-tight leading-tight mb-4">
            {data.title}
          </h2>
          <p className="text-[17px] text-white/70 font-medium max-w-2xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto"
        >
          {data.items.map((itemData, i) => {
            const isFirst = i === 0;
            const Icon = ICONS[i % ICONS.length];
            const gradient = GRADIENTS[i % GRADIENTS.length];
            
            return (
              <motion.div
                key={i}
                variants={item}
                className="bg-white/5 backdrop-blur-sm p-10 rounded-[4px] border border-white/10 hover:bg-white/10 transition-colors duration-300 flex flex-col items-center text-center group"
              >
                <div className={`w-16 h-16 rounded-[4px] flex items-center justify-center bg-gradient-to-br ${gradient} shadow-lg mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}>
                  <Icon size={32} className="text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 tracking-wider uppercase">
                  {itemData.title}
                </h3>
                <p className="text-[15px] text-white/70 font-medium leading-relaxed mb-8 flex-grow">
                  {itemData.text}
                </p>
                
                <button 
                  className={`px-8 py-3.5 rounded-[4px] font-bold text-[14px] transition-all duration-300 flex items-center gap-2 active:scale-95 ${
                    isFirst
                      ? "bg-[#10B981] text-white hover:bg-[#059669] hover:shadow-[0_8px_20px_rgba(16,185,129,0.3)]"
                      : "bg-[#C99A2E] text-[#0B1D3A] hover:bg-[#B8892A] hover:shadow-[0_8px_20px_rgba(201,154,46,0.3)]"
                  }`}
                >
                  {itemData.cta}
                  <ArrowRight size={16} strokeWidth={2.5} />
                </button>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-2xl font-bold italic text-[#C99A2E]">
            "{data.closing}"
          </p>
        </motion.div>
      </div>
    </section>
  );
}