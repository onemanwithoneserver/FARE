import { motion } from "motion/react";
import { getData, ICONS, GRADIENTS } from "./data";
import { useLanguage } from "../../../context/LanguageContext";

const NAVY = "#0B1D3A";

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <section className="w-full bg-gradient-to-br from-[#FAFBFF] via-white to-[#F5F7FF] py-16 px-6 font-['Outfit'] fare-noise-overlay">
      <div className="max-w-full mx-auto">
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
          <h2 className="text-[#0B1D3A] text-[1.75rem] font-black tracking-tight leading-tight">
            {data.title}
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-5 mt-4 rounded-full" />
        </motion.div>

        <div className="flex flex-col gap-4">
          {data.levels.map((level, i) => {
            const Icon = ICONS[i % ICONS.length];
            const gradient = GRADIENTS[i % GRADIENTS.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-gradient-to-br from-[#F8FAFD] to-[#F0F4FF] p-6 rounded-[4px] border border-[#E2E8F0]/60 shadow-[0_2px_8px_rgba(11,29,58,0.02)]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-[4px] flex shrink-0 items-center justify-center bg-gradient-to-br ${gradient} shadow-sm`}>
                    <Icon size={18} className="text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-[17px] font-bold .5 leading-snug" style={{ color: NAVY }}>
                  {level.title}
                </h3>
                </div>
                <p className="text-[14px] text-[#64748B] font-medium leading-relaxed">
                  {level.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}