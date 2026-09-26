import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";

const GOLD = "#C99A2E";

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <section className="w-full bg-white py-16 px-6 font-['Outfit'] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[55%] bg-[#0B1D3A] rounded-b-[30px] pointer-events-none" />
      
      <div className="max-w-full mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-[1.75rem] font-black text-white tracking-tight leading-tight mb-3">
            {data.title}
          </h2>
          <p className="text-[15px] text-white/80 font-medium">
            {data.subtitle}
          </p>
        </motion.div>

        <div className="flex flex-col gap-6 mb-12">
          {data.plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative bg-white rounded-xl p-6 flex flex-col ${
                plan.bestValue 
                  ? "border-2 border-[#C99A2E] shadow-[0_12px_24px_rgba(11,29,58,0.1)]" 
                  : "border border-[#E2E8F0] shadow-[0_4px_12px_rgba(11,29,58,0.04)]"
              }`}
            >
              {plan.bestValue && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#C99A2E] to-[#B8892A] text-white text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full whitespace-nowrap shadow-sm">
                  {plan.highlight}
                </div>
              )}
              
              <h3 className="text-lg font-bold text-[#64748B] mb-2">{plan.title}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-[2.25rem] font-black text-[#0B1D3A] leading-none">{plan.price}</span>
              </div>
              <p className="text-[14px] font-bold text-[#C99A2E] mb-5 border-b border-[#F1F5F9] pb-5">
                {plan.daily}
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#10B981]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={10} className="text-[#10B981]" strokeWidth={3} />
                  </div>
                  <span className="text-[14px] text-[#475569] font-medium leading-snug">{plan.text}</span>
                </li>
              </ul>
              
              <button
                className={`w-full py-3.5 rounded-lg font-bold text-[14px] transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98] ${
                  plan.bestValue 
                    ? "bg-[#0B1D3A] text-white shadow-md" 
                    : "bg-[#F8FAFD] text-[#0B1D3A] border border-[#E2E8F0]"
                }`}
              >
                {plan.cta}
                <ArrowRight size={15} strokeWidth={2.5} />
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-[11px] font-semibold text-[#64748B] uppercase tracking-[0.1em] mb-4 leading-relaxed">
            {data.footer}
          </p>
          <p className="text-xl font-bold italic" style={{ color: GOLD }}>
            "{data.quote}"
          </p>
        </motion.div>
      </div>
    </section>
  );
}