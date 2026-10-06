import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { data } from "../data";
import { Video, Target, MessageSquare } from "lucide-react";

const phaseIcons = [Target, Video, MessageSquare];

export default function Desktop() {
  const s = data.duringSession;

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };
  const itemV: Variants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#FAFBFF] via-white to-[#F5F7FF] py-24 relative overflow-hidden font-['Outfit'] fare-noise-overlay">
      <div className="w-full max-w-[1100px] mx-auto px-6 lg:px-10 xl:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-[#0B1D3A] text-[32px] md:text-[38px] lg:text-[44px] font-black mb-6 leading-tight tracking-tight">
            {s.title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-6 lg:gap-8 mb-16"
        >
          {s.phases.map((phase, index) => {
            const Icon = phaseIcons[index];
            return (
              <motion.div
                key={index}
                variants={itemV}
                className="bg-white rounded-[8px] p-8 border border-[#E2E8F0] luxury-shadow-float flex items-start gap-6 group hover:border-[#C99A2E]/30 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-[4px] bg-[#0B1D3A] flex items-center justify-center text-white shrink-0 group-hover:bg-[#C99A2E] transition-colors duration-300 shadow-md">
                  <Icon size={28} strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h3 className="text-[22px] font-bold text-[#0B1D3A] mb-3 leading-snug">
                    {phase.title}
                  </h3>
                  <p className="text-[16px] text-[#64748B] leading-relaxed font-medium">
                    {phase.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#C99A2E]/10 to-[#E2C068]/10 border border-[#C99A2E]/20">
            <span className="text-[13px] font-bold text-[#C99A2E] tracking-widest">{s.practiceFlow}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
