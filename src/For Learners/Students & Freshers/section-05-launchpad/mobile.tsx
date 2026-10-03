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
    <section className="w-full bg-[#0B1D3A] py-16 px-5 font-['Outfit'] relative overflow-hidden fare-noise-overlay">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`, backgroundSize: "32px 32px" }} />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-[#C99A2E]/[0.1] to-transparent rounded-[4px]-full blur-[60px] pointer-events-none" />
      
      <div className="max-w-[480px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-black text-white tracking-tight leading-tight mb-3">
            {data.title}
          </h2>
          <p className="text-[15.5px] text-white/70 font-medium leading-relaxed">
            {data.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="flex flex-col gap-4"
        >
          {data.items.map((opt, i) => {
            const Icon = ICONS[i % ICONS.length];
            const gradient = GRADIENTS[i % GRADIENTS.length];
            return (
              <motion.div
                key={i}
                variants={item}
                className="bg-white/[0.03] p-5 rounded-[4px] border border-white/10 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3.5 mb-4">
                  <div className={`w-12 h-12 rounded-[4px] flex items-center justify-center bg-gradient-to-br ${gradient} shadow-md shrink-0`}>
                    <Icon size={22} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-[17px] font-bold text-white leading-tight">{opt.title}</h3>
                  </div>
                </div>
                
                <p className="text-[14.5px] text-white/70 font-medium leading-relaxed">
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