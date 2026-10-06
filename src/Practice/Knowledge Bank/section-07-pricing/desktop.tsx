import { motion } from "motion/react";
import { ChevronRight, Check, ArrowRight } from "lucide-react";
import { getData } from "./data";
import { useLanguage } from "../../../context/LanguageContext";
import { Section, VIEWPORT, fadeUp, staggerContainer } from "../../ui";

export default function Desktop() {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <Section tone="white" ariaLabel="Pricing" className="relative">
      <div className="absolute top-0 left-0 w-full h-[65%] bg-[#0B1D3A] rounded-b-[60px] pointer-events-none" />
      
      <div className="max-w-[1300px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-white text-[32px] md:text-[38px] lg:text-[44px] font-black tracking-tight leading-tight mb-5">
            {data.title}
          </h2>
          <p className="text-[17px] text-white/80 font-medium max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {data.plans.map((plan, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`relative bg-white rounded-[24px] p-10 flex flex-col hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ${
                plan.bestValue 
                  ? "border-2 border-[#C99A2E] shadow-[0_30px_60px_-15px_rgba(201,154,46,0.3)]" 
                  : "border border-[#E6EBF3] luxury-shadow-float"
              }`}
            >
              {plan.bestValue && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#C99A2E] to-[#B8892A] text-white text-[12px] font-bold tracking-[0.15em] uppercase px-5 py-2 rounded-full whitespace-nowrap shadow-md">
                  {plan.highlight}
                </div>
              )}
              
              <h3 className="text-[20px] font-bold text-[#475569] mb-3">{plan.title}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-[44px] font-black text-[#0B1D3A] leading-none tracking-tight">{plan.price}</span>
              </div>
              <p className="text-[15px] font-bold text-[#C99A2E] mb-8 border-b border-[#E6EBF3] pb-8">
                {plan.daily}
              </p>
              
              <ul className="space-y-5 mb-10 flex-grow">
                <li className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#10B981]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} className="text-[#10B981]" strokeWidth={3} />
                  </div>
                  <span className="text-[15px] text-[#475569] font-medium leading-relaxed">{plan.text}</span>
                </li>
              </ul>
              
              <button
                className={`w-full py-4 rounded-[12px] font-bold text-[15px] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer ${
                  plan.bestValue 
                    ? "bg-[#0B1D3A] text-white hover:bg-[#152c53] shadow-md" 
                    : "bg-[#FAFBFF] text-[#0B1D3A] border border-[#E6EBF3] hover:border-[#0B1D3A]/20 hover:bg-white"
                }`}
              >
                {plan.cta}
                <span className="relative inline-flex items-center justify-center shrink-0 w-[1em] h-[1em]" style={{ fontSize: "16px" }}>
                  <ChevronRight size={16} strokeWidth={2.5} className="absolute inset-0 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-1" />
                  <ArrowRight size={16} strokeWidth={2.5} className="absolute inset-0 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                </span>
              </button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-[14px] font-semibold text-[#475569] uppercase tracking-[0.15em] mb-5">
            {data.footer}
          </p>
          <p className="text-[24px] font-bold italic text-[#C99A2E] leading-snug">
            "{data.quote}"
          </p>
        </motion.div>
      </div>
    </Section>
  );
}