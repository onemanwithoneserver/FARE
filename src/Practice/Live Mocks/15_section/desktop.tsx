import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { data } from "../data";
import { UserPlus, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Desktop() {
  const s = data.forExperts;

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };
  const itemV: Variants = {
    hidden: { opacity: 0, x: -15 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="w-full bg-[#FAFAFA] py-24 relative overflow-hidden font-['Outfit'] fare-noise-overlay">
      <div className="w-full max-w-[1320px] mx-auto px-6 lg:px-10 xl:px-12 relative z-10">
        <div className="bg-white border border-[#E2E8F0] rounded-[16px] luxury-shadow-float overflow-hidden flex flex-col lg:flex-row relative">
          
          <div className="w-full lg:w-1/2 p-10 lg:p-14 bg-gradient-to-br from-[#F8FAFF] to-[#F0F4FF] border-r border-[#E2E8F0]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[#0B1D3A] text-[32px] md:text-[38px] font-black mb-4 leading-tight">
                {s.title}
              </h2>
              <p className="text-[17px] text-[#64748B] font-medium leading-relaxed mb-6">
                {s.description}
              </p>
              <div className="inline-block px-4 py-2 bg-rose-50 text-rose-600 rounded-[4px] text-[14px] font-bold border border-rose-100 mb-10">
                {s.note}
              </div>

              <h3 className="text-[18px] font-bold text-[#0B1D3A] mb-4">You Decide:</h3>
              <ul className="flex flex-col gap-3">
                {s.youDecide.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[16px] font-medium text-[#64748B]">
                    <CheckCircle2 size={20} className="text-[#34D399]" strokeWidth={2.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 p-10 lg:p-14 flex flex-col justify-center">
            <motion.h3 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[20px] font-bold text-[#0B1D3A] mb-6"
            >
              Areas of Expertise Needed:
            </motion.h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {s.expertise.map((exp, idx) => (
                <motion.div
                  key={idx}
                  variants={itemV}
                  className="px-4 py-2 bg-[#FAFAFA] border border-slate-200 text-[#0B1D3A] rounded-[4px] text-[14px] font-semibold"
                >
                  {exp}
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group text-white text-[15px] font-semibold px-8 py-4 rounded-[8px] w-max flex items-center justify-center gap-2.5 active:scale-[0.98] transition-all duration-300 bg-[#0B1D3A] shadow-[0_4px_16px_rgba(11,29,58,0.2)]"
            >
              <UserPlus size={18} strokeWidth={2.5} />
              {s.cta}
              <ArrowRight size={16} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

        </div>
      </div>
    </section>
  );
}
