import { motion } from "motion/react";
import { data } from "../data";
import { MousePointerClick, User, Calendar, Video, MessageCircle, CheckCircle } from "lucide-react";

const flowIcons = [MousePointerClick, User, Calendar, Video, MessageCircle, CheckCircle];
const GRADIENTS = [
  "from-[#F87171] to-[#DC2626]", "from-[#FBBF24] to-[#D97706]", "from-[#38BDF8] to-[#0284C7]",
  "from-[#C084FC] to-[#9333EA]", "from-[#34D399] to-[#059669]", "from-[#F472B6] to-[#DB2777]",
];

export default function Desktop() {
  const s = data.howItWorks;

  return (
    <section className="w-full bg-gradient-to-br from-[#FAFBFF] via-white to-[#F5F7FF] py-24 relative overflow-hidden font-['Outfit'] fare-noise-overlay">
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden opacity-50">
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-gradient-radial from-[#C99A2E]/10 to-transparent blur-[80px]" />
      </div>

      <div className="w-full max-w-[1320px] mx-auto px-6 lg:px-10 xl:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-[#0B1D3A] text-[32px] md:text-[38px] lg:text-[44px] font-black mb-4 leading-tight tracking-tight">
            {s.title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto mb-6 mt-4 rounded-full" />
        </motion.div>

        <div className="relative flex justify-between items-start">
          <div className="absolute top-[28px] left-[8%] right-[8%] h-[2px] bg-[#E2E8F0] hidden lg:block" />
          <motion.div
            className="absolute top-[28px] left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-[#C99A2E] via-[#FBBF24] to-[#C99A2E] hidden lg:block origin-left z-0"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />

          {s.steps.map((step, index) => {
            const Icon = flowIcons[index];
            const gradient = GRADIENTS[index];
            const delay = index * 0.4;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay }}
                className="relative flex flex-col items-center flex-1 px-3 group"
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: delay + 0.1, type: "spring", stiffness: 200 }}
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${gradient} border-2 border-white/80 flex items-center justify-center text-white mb-6 relative z-10 group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-[0_0_30px_rgba(201,154,46,0.3)] group-hover:border-[#C99A2E]`}
                >
                  <Icon size={24} strokeWidth={2.5} />
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: delay + 0.4, type: "spring" }}
                    className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-white border-2 border-[#C99A2E] flex items-center justify-center text-[11px] font-black text-[#0B1D3A] shadow-md z-20"
                  >
                    {step.step}
                  </motion.div>
                </motion.div>

                <h3 className="text-[16px] font-bold text-[#0B1D3A] mb-3 leading-snug group-hover:text-[#C99A2E] transition-colors text-center">
                  {step.title}
                </h3>
                <p className="text-[13px] text-[#64748B] leading-relaxed max-w-[200px] font-medium text-center">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-[#0B1D3A]/5 border border-[#0B1D3A]/10">
            <span className="text-[13px] font-bold text-[#C99A2E] tracking-widest">{s.coreFlow}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
