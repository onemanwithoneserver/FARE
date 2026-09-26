import { motion } from "motion/react";
import { getData, ICONS, GRADIENTS } from "./data";
import { useLanguage } from "../../../context/LanguageContext";

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <section className="w-full bg-white py-16 px-6 font-['Outfit']">
      <div className="max-w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-[1.75rem] font-black text-[#0B1D3A] tracking-tight leading-tight">
            {data.title}
          </h2>
        </motion.div>

        <div className="flex flex-col gap-4 mb-10">
          {data.outcomes.map((o, i) => {
            const Icon = ICONS[i % ICONS.length];
            const gradient = GRADIENTS[i % GRADIENTS.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-[#F8FAFD] p-6 rounded-[4px] border border-[#E2E8F0]/80 shadow-[0_2px_8px_rgba(11,29,58,0.02)]"
              >
                <div className={`w-11 h-11 rounded-[4px] flex items-center justify-center bg-gradient-to-br ${gradient} shadow-sm mb-4`}>
                  <Icon size={20} className="text-white" strokeWidth={2.5} />
                </div>
                
                <h3 className="text-[15px] font-bold text-[#0B1D3A] mb-2 uppercase tracking-wide">
                  {o.title}
                </h3>
                
                <p className="text-[14px] text-[#475569] font-medium leading-relaxed">
                  {o.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-[15px] font-bold text-[#C99A2E] bg-[#C99A2E]/5 inline-block px-5 py-3 rounded-[4px] leading-relaxed">
            "{data.closing}"
          </p>
        </motion.div>
      </div>
    </section>
  );
}