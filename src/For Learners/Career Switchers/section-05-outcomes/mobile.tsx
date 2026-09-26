import { motion } from "motion/react";
import { getData, ICONS, GRADIENTS } from "./data";
import { useLanguage } from "../../../context/LanguageContext";

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <section className="w-full bg-[#F8FAFD] py-16 px-6 font-['Outfit'] relative overflow-hidden">
      <div className="max-w-full mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-[#C99A2E] text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block">
            Impact
          </span>
          <h2 className="text-[1.75rem] font-black text-[#0B1D3A] tracking-tight leading-tight">
            {data.title}
          </h2>
        </motion.div>

        <div className="flex flex-col gap-4 mb-8">
          {data.outcomes.map((itemData, i) => {
            const Icon = ICONS[i % ICONS.length];
            const gradient = GRADIENTS[i % GRADIENTS.length];
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white p-5 rounded-[4px] border border-[#E2E8F0] shadow-[0_2px_8px_rgba(11,29,58,0.02)] flex flex-col"
              >
                <div className={`w-11 h-11 rounded-[4px] flex items-center justify-center bg-gradient-to-br ${gradient} shadow-sm mb-4`}>
                  <Icon size={20} className="text-white" strokeWidth={2.5} />
                </div>
                
                <h3 className="text-[16px] font-bold text-[#0B1D3A] mb-2 tracking-wide leading-snug">
                  {itemData.title}
                </h3>
                
                <p className="text-[13px] text-[#64748B] font-medium leading-relaxed">
                  {itemData.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {data.quote && (
          <div className="p-6 rounded-[4px] bg-[#0B1D3A] border border-[#C99A2E]/30 text-center relative overflow-hidden">
            <p className="text-[14px] font-bold text-white leading-relaxed">
              "{data.quote}"
            </p>
          </div>
        )}
      </div>
    </section>
  );
}