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
    <section className="w-full bg-[#0B1D3A] py-24 px-10 font-['Outfit'] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`, backgroundSize: "32px 32px" }} />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-[#C99A2E]/[0.1] to-transparent rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-[#38BDF8]/[0.05] to-transparent rounded-full blur-[60px] pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-[2.75rem] font-black text-white tracking-tight leading-tight max-w-4xl mx-auto mb-4">
            {data.title}
          </h2>
          <p className="text-[18px] text-white/70 font-medium max-w-3xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {data.items.map((opt, i) => {
            const Icon = ICONS[i % ICONS.length];
            const gradient = GRADIENTS[i % GRADIENTS.length];
            return (
              <motion.div
                key={i}
                variants={item}
                className="bg-white/[0.03] p-8 rounded-xl border border-white/10 hover:bg-white/[0.05] transition-all duration-300 group flex flex-col h-full relative overflow-hidden backdrop-blur-sm"
              >
                <div className="flex items-center gap-5 mb-6">
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center bg-gradient-to-br ${gradient} shadow-md shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={26} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-[20px] font-bold text-white leading-tight">{opt.title}</h3>
                  </div>
                </div>
                
                <p className="text-[16px] text-white/70 font-medium leading-relaxed flex-grow">
                  {opt.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}