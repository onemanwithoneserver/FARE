import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { data } from "../data";
import { Search, UserCheck, Calendar, Video, Play, MessageSquare, Repeat } from "lucide-react";

const icons = [Search, UserCheck, Calendar, Video, Play, MessageSquare, Repeat];

export default function Desktop() {
  const s = data.learnerJourney;

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };
  const itemV: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, type: "spring", stiffness: 200 } },
  };

  return (
    <section className="w-full bg-[#0B1D3A] py-24 relative overflow-hidden font-['Outfit'] fare-noise-overlay">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-[30%] left-[20%] w-[60%] h-[40%] bg-gradient-to-r from-[#C99A2E]/0 via-[#C99A2E] to-[#C99A2E]/0 blur-[100px]" />
      </div>

      <div className="w-full max-w-[1320px] mx-auto px-6 lg:px-10 xl:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-white text-[32px] md:text-[38px] lg:text-[44px] font-black mb-6 leading-tight tracking-tight">
            {s.title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#C99A2E] to-[#E2C068] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-4 lg:gap-6"
        >
          {s.steps.map((step, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                variants={itemV}
                className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-[8px] p-6 w-[180px] flex flex-col items-center text-center group hover:bg-white/[0.1] hover:border-[#C99A2E]/30 transition-all duration-300 relative overflow-hidden"
              >
                <div className="text-[#C99A2E] text-[24px] font-black opacity-20 absolute -right-2 -bottom-2 group-hover:scale-110 group-hover:opacity-30 transition-all">
                  {index + 1}
                </div>
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white mb-4 group-hover:bg-[#C99A2E] transition-colors duration-300 shadow-md">
                  <Icon size={20} strokeWidth={2.5} />
                </div>
                <h3 className="text-[14px] font-bold text-[#E2C068] mb-2 uppercase tracking-widest">
                  {step.step}
                </h3>
                <p className="text-[15px] text-white font-medium">
                  {step.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
