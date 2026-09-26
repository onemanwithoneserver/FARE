import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { getData, ICONS, GRADIENTS } from "./data";
import { useLanguage } from "../../../context/LanguageContext";

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <section className="w-full bg-[#0B1D3A] py-16 px-6 font-['Outfit'] relative overflow-hidden">
      <div className="max-w-full mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-[#C99A2E] text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block">
            Start Free
          </span>
          <h2 className="text-[1.75rem] font-black text-white tracking-tight leading-tight mb-2">
            {data.title}
          </h2>
          <p className="text-[14px] text-white/70 font-medium leading-relaxed">
            {data.subtitle}
          </p>
        </motion.div>

        <div className="flex flex-col gap-6 mb-8">
          {data.items.map((itemData, i) => {
            const Icon = ICONS[i % ICONS.length];
            const gradient = GRADIENTS[i % GRADIENTS.length];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/[0.04] backdrop-blur-md p-6 rounded-[4px] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-[4px] flex items-center justify-center bg-gradient-to-br ${gradient} shadow-md mb-4`}>
                    <Icon size={24} className="text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-wide">
                    {itemData.title}
                  </h3>
                  <p className="text-[14px] text-white/70 leading-relaxed mb-6 font-normal">
                    {itemData.text}
                  </p>
                </div>

                <button 
                  className={`w-full py-3.5 px-5 rounded-[4px] font-bold text-[14px] flex items-center justify-center gap-2 shadow-md ${
                    i === 0 
                      ? "bg-[#22C55E] text-white active:bg-[#16A34A]" 
                      : "bg-[#C99A2E] text-[#0B1D3A] active:bg-[#B8892A]"
                  }`}
                >
                  <span>{itemData.cta}</span>
                  <ArrowRight size={16} strokeWidth={2.5} />
                </button>
              </motion.div>
            );
          })}
        </div>

        {data.quote && (
          <div className="text-center">
            <div className="inline-block px-5 py-2.5 rounded-[4px] bg-white/[0.05] border border-white/10 text-white/80 text-[13px] font-medium tracking-wide">
              {data.quote}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}