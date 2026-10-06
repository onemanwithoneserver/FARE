import { motion } from "motion/react";
import { data } from "../data";
import { MousePointerClick, User, Calendar, Video, MessageCircle, CheckCircle } from "lucide-react";

const flowIcons = [MousePointerClick, User, Calendar, Video, MessageCircle, CheckCircle];
const GRADIENTS = [
  "from-[#F87171] to-[#DC2626]", "from-[#FBBF24] to-[#D97706]", "from-[#38BDF8] to-[#0284C7]",
  "from-[#C084FC] to-[#9333EA]", "from-[#34D399] to-[#059669]", "from-[#F472B6] to-[#DB2777]",
];

export default function Mobile() {
  const s = data.howItWorks;

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
        <div className="w-12 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-4 rounded-full" />
      </motion.div>

      <div className="relative flex flex-col gap-0">
        <div className="absolute left-[23px] top-[24px] bottom-[24px] w-[2px] bg-gradient-to-b from-[#C99A2E] via-[#FBBF24] to-[#C99A2E]" />

        {s.steps.map((step, index) => {
          const Icon = flowIcons[index];
          const gradient = GRADIENTS[index];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-start gap-5 py-5"
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white shrink-0 relative z-10 shadow-md border-2 border-white`}>
                <Icon size={20} strokeWidth={2.5} />
              </div>
              <div className="pt-1">
                <div className="text-[11px] font-bold tracking-widest text-[#C99A2E] uppercase mb-1">
                  Step {step.step}
                </div>
                <h3 className="text-[16px] font-bold text-[#0B1D3A] mb-1.5 leading-snug">
                  {step.title}
                </h3>
                <p className="text-[13px] text-[#64748B] leading-relaxed font-medium">
                  {step.desc}
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
        className="mt-8 text-center"
      >
        <div className="inline-flex items-center px-4 py-2.5 rounded-full bg-[#0B1D3A]/5 border border-[#0B1D3A]/10">
          <span className="text-[10px] font-bold text-[#C99A2E] tracking-widest">{s.coreFlow}</span>
        </div>
      </motion.div>
    </section>
  );
}
