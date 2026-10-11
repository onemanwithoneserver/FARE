import { motion } from "motion/react";
import { ChevronRight, Check, ArrowRight, MessageCircle } from "lucide-react";
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
          className="text-center mb-12"
        >
          <h2 className="text-white text-[32px] md:text-[38px] lg:text-[44px] font-black tracking-tight leading-tight mb-4">
            {data.title}
          </h2>
          <p className="text-[16px] text-white/80 font-medium max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {data.plans.map((plan, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`relative rounded-[20px] p-6 lg:p-7 flex flex-col hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 ${
                plan.bestValue 
                  ? "bg-white border-2 border-[#C99A2E] shadow-[0_24px_50px_-15px_rgba(201,154,46,0.3)]" 
                  : plan.isCommunity
                  ? "bg-gradient-to-b from-[#F0FDF4] via-white to-white border-2 border-[#10B981]/40 shadow-[0_20px_40px_-15px_rgba(16,185,129,0.2)] hover:border-[#10B981]"
                  : "bg-white border border-[#E6EBF3] luxury-shadow-float"
              }`}
            >
              {plan.highlight && (
                <div
                  className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[11px] font-bold tracking-[0.14em] uppercase px-4 py-1.5 rounded-full whitespace-nowrap shadow-md flex items-center gap-1.5 ${
                    plan.isCommunity
                      ? "bg-gradient-to-r from-[#10B981] to-[#059669] shadow-[0_4px_10px_rgba(16,185,129,0.3)]"
                      : "bg-gradient-to-r from-[#C99A2E] to-[#B8892A]"
                  }`}
                >
                  {plan.isCommunity && <MessageCircle size={13} className="shrink-0" />}
                  <span>{plan.highlight}</span>
                </div>
              )}
              
              <h3 className={`text-[17px] font-bold mb-1.5 ${plan.isCommunity ? "text-[#059669]" : "text-[#475569]"}`}>
                {plan.title}
              </h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-[38px] lg:text-[42px] font-black text-[#0B1D3A] leading-none tracking-tight">{plan.price}</span>
              </div>
              <p
                className={`text-[13.5px] font-bold mb-4 border-b border-[#E6EBF3] pb-3.5 ${
                  plan.isCommunity ? "text-[#10B981]" : "text-[#C99A2E]"
                }`}
              >
                {plan.daily}
              </p>
              
              <ul className="space-y-2.5 mb-6 flex-grow">
                {plan.features ? (
                  plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div className="w-4.5 h-4.5 rounded-full bg-[#10B981]/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="text-[#10B981]" strokeWidth={3} />
                      </div>
                      <span className="text-[13.5px] lg:text-[14px] text-[#475569] font-medium leading-snug">{feat}</span>
                    </li>
                  ))
                ) : (
                  <li className="flex items-start gap-3">
                    <div className="w-4.5 h-4.5 rounded-full bg-[#10B981]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-[#10B981]" strokeWidth={3} />
                    </div>
                    <span className="text-[14px] text-[#475569] font-medium leading-snug">{plan.text}</span>
                  </li>
                )}
              </ul>
              
              {plan.link ? (
                <a
                  href={plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-[10px] font-bold text-[14px] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer bg-gradient-to-r from-[#10B981] to-[#059669] text-white hover:from-[#059669] hover:to-[#047857] shadow-[0_8px_18px_-4px_rgba(16,185,129,0.35)] hover:shadow-[0_12px_22px_-4px_rgba(16,185,129,0.45)]"
                >
                  <MessageCircle size={16} className="shrink-0" />
                  <span>{plan.cta}</span>
                  <span className="relative inline-flex items-center justify-center shrink-0 w-[1em] h-[1em]" style={{ fontSize: "15px" }}>
                    <ChevronRight size={15} strokeWidth={2.5} className="absolute inset-0 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-1" />
                    <ArrowRight size={15} strokeWidth={2.5} className="absolute inset-0 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                  </span>
                </a>
              ) : (
                <button
                  className={`w-full py-3 rounded-[10px] font-bold text-[14px] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer ${
                    plan.bestValue 
                      ? "bg-[#0B1D3A] text-white hover:bg-[#152c53] shadow-md" 
                      : "bg-[#FAFBFF] text-[#0B1D3A] border border-[#E6EBF3] hover:border-[#0B1D3A]/20 hover:bg-white"
                  }`}
                >
                  {plan.cta}
                  <span className="relative inline-flex items-center justify-center shrink-0 w-[1em] h-[1em]" style={{ fontSize: "15px" }}>
                    <ChevronRight size={15} strokeWidth={2.5} className="absolute inset-0 transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-1" />
                    <ArrowRight size={15} strokeWidth={2.5} className="absolute inset-0 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                  </span>
                </button>
              )}
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