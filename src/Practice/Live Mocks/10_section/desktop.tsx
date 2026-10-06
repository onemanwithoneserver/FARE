import { motion } from "motion/react";
import { data } from "../data";
import { Repeat, ArrowRight } from "lucide-react";

export default function Desktop() {
  const s = data.multiplePractice;

  const flowSteps = s.flow.split(" → ");

  return (
    <section className="w-full bg-[#0B1D3A] py-20 relative overflow-hidden font-['Outfit'] fare-noise-overlay">
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-gradient-radial from-[#C99A2E]/20 to-transparent blur-[80px]" />
      </div>

      <div className="w-full max-w-[1100px] mx-auto px-6 lg:px-10 xl:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-[4px] bg-[#C99A2E]/10 text-[#C99A2E] mb-6 border border-[#C99A2E]/20">
              <Repeat size={24} strokeWidth={2.5} />
            </div>
            <h2 className="text-white text-[32px] md:text-[38px] lg:text-[40px] font-black mb-5 leading-tight tracking-tight">
              {s.title}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mb-6 rounded-full" />
            <p className="text-[16px] text-white/70 leading-relaxed font-medium">
              {s.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-[8px] p-8"
          >
            <div className="flex flex-col gap-3">
              {flowSteps.map((step, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className={`px-5 py-3 rounded-[4px] text-[15px] font-bold w-full border ${
                    step === "Feedback" 
                      ? "bg-[#C99A2E]/10 border-[#C99A2E]/30 text-[#E2C068]" 
                      : "bg-white/5 border-white/10 text-white"
                  }`}>
                    {step}
                  </div>
                  {idx < flowSteps.length - 1 && (
                    <ArrowRight size={20} className="text-white/30 shrink-0" strokeWidth={2} />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
