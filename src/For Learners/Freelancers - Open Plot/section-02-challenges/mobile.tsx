import { motion } from "motion/react";
import { getData, ICONS, GRADIENTS } from "./data";
import { useLanguage } from "../../../context/LanguageContext";

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <section className="w-full bg-gradient-to-br from-white via-[#FEFAF3] to-[#FFF8EC] py-16 px-6 font-['Outfit'] relative overflow-hidden">
      <div className="max-w-full mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="flex justify-center mb-3">
            <span className="text-[#10B981] bg-[#ECFDF5] border border-[#A7F3D0] px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              Real Challenges
            </span>
          </div>
          <h2 className="text-[1.75rem] font-black text-[#0B1D3A] tracking-tight leading-tight">
            {data.title}
          </h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {data.challenges.map((c, i) => {
            const Icon = ICONS[i % ICONS.length];
            const gradient = GRADIENTS[i % GRADIENTS.length];
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white p-5 rounded-[4px] border border-[#E2E8F0] shadow-[0_2px_8px_rgba(11,29,58,0.03)] flex flex-col"
              >
                <div className={`w-11 h-11 rounded-[4px] flex items-center justify-center bg-gradient-to-br ${gradient} shadow-sm mb-4`}>
                  <Icon size={20} className="text-white" strokeWidth={2.5} />
                </div>
                
                <h3 className="text-[16px] font-bold text-[#0B1D3A] mb-2 tracking-wide leading-snug">
                  {c.title}
                </h3>
                
                <p className="text-[13px] text-[#64748B] font-medium leading-relaxed">
                  {c.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}