import { motion } from "motion/react";
import { data } from "../data";
import { Repeat, ArrowDown } from "lucide-react";

export default function Mobile() {
  const s = data.multiplePractice;
  const flowSteps = s.flow.split(" → ");

  return (
    <section className="w-full bg-[#0B1D3A] py-14 px-6 relative overflow-hidden font-['Outfit']">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-[4px] bg-[#C99A2E]/10 text-[#C99A2E] mb-5 border border-[#C99A2E]/20">
          <Repeat size={20} strokeWidth={2.5} />
        </div>
        <h2 className="text-white text-[24px] font-black mb-4 leading-tight tracking-tight">
          {s.title}
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-4 rounded-full" />
        <p className="text-[14px] text-white/70 leading-relaxed font-medium">
          {s.description}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-[8px] p-5 w-full flex flex-col items-center"
      >
        {flowSteps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center w-full">
            <div className={`px-4 py-2.5 rounded-[4px] text-[13px] font-bold text-center w-full border ${
              step === "Feedback" 
                ? "bg-[#C99A2E]/10 border-[#C99A2E]/30 text-[#E2C068]" 
                : "bg-white/5 border-white/10 text-white"
            }`}>
              {step}
            </div>
            {idx < flowSteps.length - 1 && (
              <ArrowDown size={18} className="text-white/30 my-2" strokeWidth={2.5} />
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
