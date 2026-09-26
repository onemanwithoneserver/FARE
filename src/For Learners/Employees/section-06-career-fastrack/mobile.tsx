import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { getData, ICONS, GRADIENTS } from "./data";
import { useLanguage } from "../../../context/LanguageContext";

const NAVY = "#0B1D3A";

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <section className="w-full bg-[#F8FAFD] py-16 px-6 font-['Outfit'] relative overflow-hidden">
      <div className="max-w-full mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-[#C99A2E] text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block">
            {data.badge}
          </span>
          <h2 className="text-[1.75rem] font-black text-[#0B1D3A] tracking-tight leading-tight mb-3">
            {data.title}
          </h2>
          <p className="text-[14px] text-[#64748B] font-medium leading-relaxed">
            {data.subtitle}
          </p>
        </motion.div>

        <div className="flex flex-col gap-5">
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
                className="bg-white p-6 rounded-[4px] border border-[#E2E8F0]/80 shadow-[0_2px_12px_rgba(11,29,58,0.03)] flex flex-col"
              >
                <div className={`w-12 h-12 rounded-[4px] flex items-center justify-center bg-gradient-to-br ${gradient} shadow-sm mb-5`}>
                  <Icon size={22} className="text-white" strokeWidth={2.5} />
                </div>
                
                <h3 className="text-[16px] font-bold text-[#0B1D3A] mb-3 tracking-wide">
                  {itemData.title}
                </h3>
                
                <p className="text-[14px] text-[#475569] font-medium leading-relaxed mb-6">
                  {itemData.text}
                </p>
                
                <button 
                  className="mt-auto self-start text-[13px] font-bold tracking-wider flex items-center gap-2"
                  style={{ color: NAVY }}
                >
                  {itemData.cta}
                  <ArrowRight size={15} strokeWidth={2.5} />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}