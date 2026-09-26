import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";

const GOLD = "#C99A2E";

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="w-full bg-white py-24 px-10 font-['Outfit'] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[60%] bg-[#0B1D3A] rounded-b-[40px] pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-[2.75rem] font-black text-white tracking-tight leading-tight mb-4">
            {data.title}
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-medium">
            {data.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col md:flex-row justify-center items-stretch gap-8 mb-16 max-w-4xl mx-auto"
        >
          {data.plans.map((plan, i) => (
            <motion.div
              key={i}
              variants={item}
              className={`flex-1 relative bg-white rounded-2xl p-8 flex flex-col ${
                plan.bestValue 
                  ? "border-2 border-[#C99A2E] shadow-[0_20px_40px_rgba(11,29,58,0.12)] md:-translate-y-4" 
                  : "border border-[#E2E8F0] shadow-[0_8px_24px_rgba(11,29,58,0.06)]"
              }`}
            >
              {plan.bestValue && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#C99A2E] to-[#B8892A] text-white text-[11px] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full whitespace-nowrap shadow-md">
                  {plan.highlight}
                </div>
              )}
              
              <h3 className="text-xl font-bold text-[#64748B] mb-2">{plan.title}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-black text-[#0B1D3A]">{plan.price}</span>
              </div>
              <p className="text-[14px] font-bold text-[#C99A2E] mb-6 border-b border-[#F1F5F9] pb-6">
                {plan.daily}
              </p>
              
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#10B981]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-[#10B981]" strokeWidth={3} />
                  </div>
                  <span className="text-[#475569] font-medium">{plan.text}</span>
                </li>
              </ul>
              
              <button
                className={`w-full py-4 rounded-lg font-bold text-[14px] transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98] ${
                  plan.bestValue 
                    ? "bg-[#0B1D3A] text-white hover:shadow-[0_8px_20px_rgba(11,29,58,0.2)]" 
                    : "bg-[#F8FAFD] text-[#0B1D3A] border border-[#E2E8F0] hover:border-[#0B1D3A]/20 hover:bg-white"
                }`}
              >
                {plan.cta}
                <ArrowRight size={16} strokeWidth={2.5} />
              </button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-[13px] font-semibold text-[#64748B] uppercase tracking-[0.1em] mb-4">
            {data.footer}
          </p>
          <p className="text-2xl font-bold italic" style={{ color: GOLD }}>
            "{data.quote}"
          </p>
        </motion.div>
      </div>
    </section>
  );
}