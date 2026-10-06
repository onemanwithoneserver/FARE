import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { data } from "../data";
import { Clock, CheckCircle } from "lucide-react";

export default function Desktop() {
  const s = data.chooseSession;

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };
  const itemV: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="w-full bg-[#FAFAFA] py-24 relative overflow-hidden font-['Outfit'] fare-noise-overlay">
      <div className="w-full max-w-[1320px] mx-auto px-6 lg:px-10 xl:px-12 relative z-10">
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12"
        >
          {s.sessions.map((session, index) => (
            <motion.div
              key={index}
              variants={itemV}
              className="bg-white rounded-[8px] p-8 border border-slate-200/80 luxury-shadow-float hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:border-slate-300 transition-all duration-300 flex flex-col group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-[4px] bg-[#0B1D3A]/5 text-[#0B1D3A] flex items-center justify-center group-hover:bg-[#0B1D3A] group-hover:text-white transition-colors duration-300">
                  <Clock size={22} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-[20px] font-bold text-[#0B1D3A]">{session.duration}</h3>
                  <p className="text-[14px] text-[#C99A2E] font-bold uppercase tracking-wider">{session.label}</p>
                </div>
              </div>
              <p className="text-[15px] text-slate-600 leading-relaxed font-medium">
                {session.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-blue-50 border border-blue-100 rounded-[8px] p-6 max-w-4xl mx-auto flex items-center justify-center text-center gap-3"
        >
          <CheckCircle size={20} className="text-blue-500 shrink-0" />
          <p className="text-[15px] text-blue-800 font-medium">
            {s.note}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
