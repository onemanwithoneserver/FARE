import { motion } from "motion/react";
import { getData, ICONS, GRADIENTS } from "./data";
import { useLanguage } from "../../../context/LanguageContext";

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <section className="w-full bg-white py-16 px-6 font-['Outfit'] relative overflow-hidden">
      <div className="max-w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-[#C99A2E] text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block">
            Capabilities
          </span>
          <h2 className="text-[1.75rem] font-black text-[#0B1D3A] tracking-tight leading-tight">
            {data.title}
          </h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {data.categories.map((cat, i) => {
            const Icon = ICONS[i % ICONS.length];
            const gradient = GRADIENTS[i % GRADIENTS.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-[#F8FAFD] p-5 rounded-[4px] border border-[#E2E8F0] shadow-[0_2px_8px_rgba(11,29,58,0.02)]"
              >
                <div className="flex items-center gap-3.5 mb-4 border-b border-[#E2E8F0] pb-3">
                  <div className={`w-11 h-11 rounded-[4px] flex items-center justify-center bg-gradient-to-br ${gradient} shadow-sm shrink-0`}>
                    <Icon size={20} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-[#0B1D3A] leading-tight">
                      {cat.name}
                    </h3>
                  </div>
                </div>
                <ul className="space-y-2">
                  {cat.skills.map((skill, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-[1px] bg-[#C99A2E] mt-1.5 shrink-0" />
                      <span className="text-[13px] text-[#475569] font-medium leading-snug">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}