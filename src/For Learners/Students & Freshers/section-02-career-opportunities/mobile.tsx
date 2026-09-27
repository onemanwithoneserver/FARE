import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Briefcase, Building2, ArrowRight } from "lucide-react";
import { getData } from "./data";
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
    <section className="w-full bg-[#FFF5F5] py-16 px-5 font-['Outfit'] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-radial from-[#EF4444]/[0.05] to-transparent rounded-full blur-[80px] pointer-events-none" />
      
      <div className="max-w-[480px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-black text-[#0B1D3A] tracking-tight leading-tight mb-3">
            {data.title}
          </h2>
          <p className="text-[15.5px] text-[#475569] font-medium leading-relaxed">
            {data.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="flex flex-col gap-6 mb-12"
        >
          {data.opportunities.map((opp, i) => (
            <motion.div
              key={i}
              variants={item}
              className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(11,29,58,0.04)] border border-[#E2E8F0]/80 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-gradient-to-br ${i === 0 ? "from-[#38BDF8] to-[#0284C7]" : "from-[#F472B6] to-[#DB2777]"} shadow-sm`}>
                  {i === 0 ? <Building2 size={20} className="text-white" strokeWidth={2} /> : <Briefcase size={20} className="text-white" strokeWidth={2} />}
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-widest text-[#64748B] uppercase mb-0.5">{opp.type}</div>
                  <h3 className="text-[18px] font-bold text-[#0B1D3A] leading-tight">{opp.title}</h3>
                </div>
              </div>
              
              <p className="text-[15px] text-[#475569] font-medium leading-relaxed mb-6">
                {opp.description}
              </p>
              
              <div className="flex flex-col gap-5 flex-grow mb-6">
                {opp.categories.map((cat, j) => (
                  <div key={j}>
                    <h4 className="text-[13px] font-bold text-[#0B1D3A] uppercase tracking-wide mb-1.5 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#C99A2E]"></span>
                      {cat.name}
                    </h4>
                    <p className="text-[14px] text-[#64748B] font-medium leading-relaxed pl-3">
                      {cat.items}
                    </p>
                  </div>
                ))}
              </div>
              
              <button className={`w-full py-3.5 px-5 rounded-lg font-bold text-[14px] flex items-center justify-center gap-2 transition-all duration-300 mt-auto ${i === 0 ? "bg-[#F8FAFC] text-[#0284C7] active:bg-[#F0F9FF] border border-[#E0F2FE]" : "bg-[#FDF2F8] text-[#DB2777] active:bg-[#FCE7F3] border border-[#FCE7F3]"}`}>
                {opp.button}
                <ArrowRight size={15} strokeWidth={2.5} />
              </button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <div className="bg-white px-6 py-5 rounded-xl border border-[#E2E8F0]/80 shadow-[0_4px_20px_rgba(11,29,58,0.04)]">
            <p className="text-[17px] font-black text-[#0B1D3A] whitespace-pre-wrap leading-relaxed tracking-tight">
              {data.closing}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}