import { motion } from "motion/react";
import { ChevronRight, Check, ArrowRight } from "lucide-react";
import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
import { Section, VIEWPORT, fadeUp, staggerContainer } from "../../ui";

export default function Mobile() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <Section tone="white" mobile ariaLabel="Pricing" className="relative">
      <div className="absolute top-0 left-0 w-full h-[55%] bg-[#0B1D3A] rounded-b-[30px] pointer-events-none" />
      
      <div className="max-w-full mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-white text-[28px] font-black tracking-tight leading-tight mb-4">
            {data.title}
          </h2>
          <p className="text-[15px] text-white/80 font-medium">
            {data.subtitle}
          </p>
        </motion.div>

        <motion.div variants={staggerContainer(0.08)} initial="hidden" whileInView="show" viewport={VIEWPORT} className="flex flex-col gap-6 mb-12">
          {data.plans.map((plan, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`relative bg-white rounded-[16px] p-6 flex flex-col transition-all duration-300 ${
                plan.bestValue 
                  ? "border-2 border-[#C99A2E] luxury-shadow-float" 
                  : "border border-[#E6EBF3] shadow-sm"
              }`}
            >
              {plan.bestValue && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#C99A2E] to-[#B8892A] text-white text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full whitespace-nowrap shadow-sm">
                  {plan.highlight}
                </div>
              )}
              
              <h3 className="text-[17px] font-bold text-[#475569] mb-2">{plan.title}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-[36px] font-black text-[#0B1D3A] leading-none tracking-tight">{plan.price}</span>
              </div>
              <p className="text-[14px] font-bold text-[#C99A2E] mb-6 border-b border-[#E6EBF3] pb-6">
                {plan.daily}
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#10B981]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-[#10B981]" strokeWidth={3} />
                  </div>
                  <span className="text-[14.5px] text-[#475569] font-medium leading-snug">{plan.text}</span>
                </li>
              </ul>
              
              <button
                className={`w-full py-3.5 rounded-[10px] font-bold text-[14.5px] transition-all duration-300 flex items-center justify-center gap-2 group ${
                  plan.bestValue 
                    ? "bg-[#0B1D3A] text-white shadow-md" 
                    : "bg-[#FAFBFF] text-[#0B1D3A] border border-[#E6EBF3]"
                }`}
              >
                {plan.cta}
                <span className="relative inline-flex items-center justify-center shrink-0 w-[1em] h-[1em]" style={{ fontSize: "15px" }}>
                  <ChevronRight size={15} strokeWidth={2.5} className="absolute inset-0 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-1" />
                  <ArrowRight size={15} strokeWidth={2.5} className="absolute inset-0 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                </span>
              </button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6 }}
          className="text-center px-4"
        >
          <p className="text-[12px] font-semibold text-[#475569] uppercase tracking-[0.1em] mb-4 leading-relaxed">
            {data.footer}
          </p>
          <p className="text-[19px] font-bold italic text-[#C99A2E] leading-snug">
            "{data.quote}"
          </p>
        </motion.div>
      </div>
    </Section>
  );
}