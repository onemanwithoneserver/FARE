import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Briefcase, Building2, ArrowRight } from "lucide-react";
import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";

export default function Desktop() {
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
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="w-full bg-white py-24 px-10 font-['Outfit'] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-[#C99A2E]/[0.05] to-transparent rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl lg:text-[2.75rem] font-black text-[#0B1D3A] tracking-tight leading-tight max-w-4xl mx-auto mb-4">
            {data.title}
          </h2>
          <p className="text-[18px] text-[#475569] font-medium max-w-3xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {data.opportunities.map((opp, i) => (
            <motion.div
              key={i}
              variants={item}
              className="bg-white p-8 rounded-xl shadow-[0_8px_30px_rgba(11,29,58,0.04)] border border-[#E2E8F0]/80 hover:shadow-[0_20px_40px_rgba(11,29,58,0.08)] transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${i === 0 ? "from-[#38BDF8] to-[#0284C7]" : "from-[#F472B6] to-[#DB2777]"} shadow-sm`}>
                  {i === 0 ? <Building2 size={24} className="text-white" strokeWidth={2} /> : <Briefcase size={24} className="text-white" strokeWidth={2} />}
                </div>
                <div>
                  <div className="text-[12px] font-bold tracking-widest text-[#64748B] uppercase mb-1">{opp.type}</div>
                  <h3 className="text-[22px] font-bold text-[#0B1D3A] leading-tight">{opp.title}</h3>
                </div>
              </div>
              
              <p className="text-[16px] text-[#475569] font-medium leading-relaxed mb-8">
                {opp.description}
              </p>
              
              <div className="flex flex-col gap-6 flex-grow mb-8">
                {opp.categories.map((cat, j) => (
                  <div key={j}>
                    <h4 className="text-[14px] font-bold text-[#0B1D3A] uppercase tracking-wide mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C99A2E]"></span>
                      {cat.name}
                    </h4>
                    <p className="text-[15px] text-[#64748B] font-medium leading-relaxed pl-3.5">
                      {cat.items}
                    </p>
                  </div>
                ))}
              </div>
              
              <button className={`w-full py-4 px-6 rounded-lg font-bold text-[15px] flex items-center justify-center gap-2 transition-all duration-300 ${i === 0 ? "bg-[#F8FAFC] text-[#0284C7] hover:bg-[#F0F9FF] border border-[#E0F2FE]" : "bg-[#FDF2F8] text-[#DB2777] hover:bg-[#FCE7F3] border border-[#FCE7F3]"}`}>
                {opp.button}
                <ArrowRight size={16} strokeWidth={2.5} />
              </button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="inline-block bg-white px-10 py-6 rounded-xl border border-[#E2E8F0]/80 shadow-[0_8px_30px_rgba(11,29,58,0.04)] relative overflow-hidden group hover:border-[#C99A2E]/40 transition-colors duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-[#C99A2E]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <p className="text-[20px] font-black text-[#0B1D3A] whitespace-pre-wrap leading-relaxed relative z-10 tracking-tight">
              {data.closing}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}