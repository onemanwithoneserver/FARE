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
    hidden: { opacity: 0, y: 25, scale: 0.98 },
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
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#C99A2E] text-[11px] font-bold tracking-[0.2em] uppercase mb-3 block">
            Start Free
          </span>
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
            const Icon = ICONS[i % ICONS.length];
            const gradient = GRADIENTS[i % GRADIENTS.length];

            return (
              <motion.div
                key={i}
                variants={item}
                className="bg-white/[0.04] backdrop-blur-md p-8 lg:p-10 rounded-[4px] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:border-[#C99A2E]/50 hover:bg-white/[0.07] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-14 h-14 rounded-[4px] flex items-center justify-center bg-gradient-to-br ${gradient} shadow-lg mb-6 group-hover:scale-105 transition-transform duration-300`}>
                    <Icon size={28} className="text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">
                    {itemData.title}
                  </h3>
                  <p className="text-[16px] text-white/70 leading-relaxed mb-8 font-normal">
                    {itemData.text}
                  </p>
                </div>

                <button 
                  className={`w-full py-4 px-6 rounded-[4px] font-bold text-[15px] flex items-center justify-center gap-2 transition-all duration-300 shadow-md ${
                    i === 0 
                      ? "bg-[#22C55E] text-white hover:bg-[#16A34A] hover:shadow-[0_8px_20px_rgba(34,197,94,0.3)]" 
                      : "bg-[#C99A2E] text-[#0B1D3A] hover:bg-[#B8892A] hover:shadow-[0_8px_20px_rgba(201,154,46,0.3)]"
                  }`}
                >
                  <span>{itemData.cta}</span>
                  <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </motion.div>

        {data.quote && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block px-8 py-3 rounded-[4px] bg-white/[0.05] border border-white/10 text-white/90 text-[15px] font-medium tracking-wide">
              {data.quote}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}