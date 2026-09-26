import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { getData, ICONS, GRADIENTS } from "./data";
import { useLanguage } from "../../../context/LanguageContext";

const NAVY = "#0B1D3A";

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
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
    <section className="w-full bg-white py-24 px-10 font-['Outfit'] relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-[2.75rem] font-black text-[#0B1D3A] tracking-tight leading-tight mb-4">
            {data.title}
          </h2>
          <p className="text-[17px] text-[#64748B] font-medium max-w-3xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {data.categories.map((cat, i) => {
            const Icon = ICONS[i % ICONS.length];
            const gradient = GRADIENTS[i % GRADIENTS.length];
            return (
              <motion.div
                key={i}
                variants={item}
                className="bg-[#F8FAFD] p-6 rounded-[4px] border border-[#E2E8F0] shadow-[0_4px_16px_rgba(11,29,58,0.02)] hover:shadow-[0_12px_32px_rgba(11,29,58,0.06)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-5 border-b border-[#E2E8F0] pb-4">
                  <div className={`w-12 h-12 rounded-[4px] flex items-center justify-center bg-gradient-to-br ${gradient} shadow-sm shrink-0`}>
                    <Icon size={22} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold leading-tight" style={{ color: NAVY }}>
                      {cat.name}
                    </h3>
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {cat.skills.map((skill, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1] mt-1.5 shrink-0" />
                      <span className="text-[14px] text-[#475569] font-medium leading-snug">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}