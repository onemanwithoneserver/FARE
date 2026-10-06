import { motion } from "motion/react";
import { data } from "../data";
import { Video, Target, MessageSquare } from "lucide-react";

const phaseIcons = [Target, Video, MessageSquare];

export default function Mobile() {
  const s = data.duringSession;

  return (
    <section className="w-full bg-gradient-to-br from-[#FAFBFF] via-white to-[#F5F7FF] py-14 px-6 relative overflow-hidden font-['Outfit']">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-[#0B1D3A] text-[24px] font-black mb-3 leading-tight tracking-tight">
          {s.title}
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto rounded-full" />
      </motion.div>

      <div className="flex flex-col gap-4 mb-10">
        {s.phases.map((phase, index) => {
          const Icon = phaseIcons[index];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[8px] p-5 border border-[#E2E8F0] luxury-shadow-float flex flex-col items-start gap-4"
            >
              <div className="w-12 h-12 rounded-[4px] bg-[#0B1D3A] flex items-center justify-center text-white shrink-0 shadow-md">
                <Icon size={20} strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-[#0B1D3A] mb-2 leading-snug">
                  {phase.title}
                </h3>
                <p className="text-[13px] text-[#64748B] leading-relaxed font-medium">
                  {phase.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center"
      >
        <div className="inline-flex items-center px-4 py-2.5 rounded-full bg-gradient-to-r from-[#C99A2E]/10 to-[#E2C068]/10 border border-[#C99A2E]/20 text-center">
          <span className="text-[10px] font-bold text-[#C99A2E] tracking-widest">{s.practiceFlow}</span>
        </div>
      </motion.div>
    </section>
  );
}
