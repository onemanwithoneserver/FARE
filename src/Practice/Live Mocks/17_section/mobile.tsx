import { motion } from "motion/react";
import { data } from "../data";
import { ChevronRight } from "lucide-react";

export default function Mobile() {
  const s = data.finalCta;
  const flowSteps = s.coreJourney.split(" → ");

  return (
    <section className="w-full bg-white py-14 px-6 relative overflow-hidden font-['Outfit']">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#0B1D3A]/5 border border-[#0B1D3A]/10 mb-6 flex-wrap gap-1.5 w-full">
          {flowSteps.map((step, idx) => (
            <div key={idx} className="flex items-center gap-1.5">
              <span className={`text-[10px] font-bold tracking-widest ${
                step === "PRACTISE" ? "text-[#C99A2E]" : "text-[#0B1D3A]/70"
              }`}>
                {step}
              </span>
              {idx < flowSteps.length - 1 && (
                <ChevronRight size={10} className="text-[#0B1D3A]/30" strokeWidth={3} />
              )}
            </div>
          ))}
        </div>
        <h2 className="text-[#0B1D3A] text-[24px] font-black mb-4 leading-tight tracking-tight">
          {s.title}
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-4 rounded-full" />
        <p className="text-[14px] text-slate-600 font-medium whitespace-pre-wrap">
          {s.description}
        </p>
      </motion.div>
      
      <div className="flex flex-col gap-4">
        {s.sections.map((sec, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#0B1D3A] text-white p-6 rounded-[8px] luxury-shadow-float flex flex-col relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#C99A2E]/10 rounded-full blur-[20px]" />
            <div className="relative z-10 mb-6">
              <div className="text-[11px] font-bold tracking-widest text-[#E2C068] uppercase mb-3">
                {sec.title}
              </div>
              <h3 className="text-[18px] font-bold leading-snug">
                {sec.subtitle}
              </h3>
            </div>
            <button className="relative z-10 w-full flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white py-3 rounded-[8px] font-semibold text-[14px]">
              {sec.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
